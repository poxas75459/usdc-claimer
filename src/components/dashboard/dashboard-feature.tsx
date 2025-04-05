/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2mwsUpmwPmmGVHMhkjKkajbfikUK1we61sdPba1noxeB1FeQxQEA4hReYpTfGBFLvuUb6mgJYNn9fWQxBDuQn4f6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kPaaXz3GRFF8ZmzQCcaMJmPpD2P1DPkBT8oddAuaj5eDBXySh7WTnVXdF6p4chvLkhqPDy8QWfGqpFBFmLgwfXJ",
  "key1": "3jZXkdM4Q4trzTPtAbriSQo9uP7XZvTKJtcHxo24kqLN3vUZpzGd2huT2ARAqfvj2PgMudMeZiskupUAopgDdcDs",
  "key2": "3rYjr5dfvSwiFUMZCbAJA8cM5k1LciaNuay9A31MBeWxx3zaoMXwqgeCtUbMmg7xYBrAejMf5Ph4zQx2VVVWnGGs",
  "key3": "47gK9Szv8jUttjGgMDDgyTyAWgLSo5Tfd3HUveaZt6DckGiqrNjVPUmj3ySrZ2ShrMH5V9YQuM7dd2H36Lo46vTp",
  "key4": "xv2SuEV3c6viT5WXNk9Mx1phUvVkmrnFzn3qTZvjfwaj1oexBRthBcAas955qM6Fmfonmf5K1UXrLWZCN5Sh31Z",
  "key5": "t6iGJzm2gNd5e6p16MKyNm2gMR2KH6xbCbXNZTTtbkgcckxyAvBfB2zzjgkFvjksJWQFwYc9BtM6S2rzJaoxvUk",
  "key6": "5qQBcDhpZvm17Si7Gb4c2oWBizFHYeEoPksBzEZp277wy7ermj7RXD2Hfj65LP1Bz4rVkeF1QVRwLiuqrhGDFRP3",
  "key7": "4md4R4TKbeVKcEVBvW1cvSPXuAnaxyKeTBqt2Xo3qhN74ezK28KW9FqHqsca9V6WzjGR8TrbTkGEsBttGwYTTUdQ",
  "key8": "wKfzYUa7qAoSMPCBHsCpsEMNWv58RjZs6mBYDAprbzog8WPc41bvSPMYuq2z44kUPTfyizDN5dVfi5yZcYnqsKx",
  "key9": "5YoWcv3J7Xb7VMHbaygwzbkEfFfE52LbXjwtxx3bMSxtaByjnYjZ58r3uvxYRr18Xj6vG4idmjw2FMu3b29x8okq",
  "key10": "TbXMT2HjTpKQpKAfLnWvQ7nC3R84r5LeqNJW1bguXmw5fxLU6KF2NJBMESim2j52ofUTBoVBcfm8BUUJLqM7Hbr",
  "key11": "5ZViUZaTwfsD3anvnPK3qQKCbd5jaQZWkL5MjV5vteo8uVUwTSZJftbU4BCBCePD2M6xpsPoL8EJLHVAB2WZ2DNX",
  "key12": "2qwPbDiLuQ6SybpwpPBBPBfzYB6WizpGe23gQJ8JW2EVu5pRrvGFeNmTi7A3xUTiJftsREeRBFwNjY2VtxR7nmbn",
  "key13": "5SEwgKqHYyZgzCUf9RMpBvCPBeCdXYSexSaqKAtvDNP49Y1tQQY8KFwoa6ibzsV4MjXdZYFL2BBaudmaTTXtjJep",
  "key14": "3uyccDzzMyBG67qCGuxk8SYtNvbmBUij2DDA64TCx3eFCw2MDiRvZ2sC7k91AJr8TirtgXDHc3K3pKceoNLaFiDn",
  "key15": "Gafrf3JW9fECCPtesCmCr3Xe5DHfBeoYjvasRokSvZmbLymx4GpnNeywwdSwYMMBocVE4ttcEsqJudYqndokhRM",
  "key16": "2WQsJumyfgxPT8tgng9h1rd6gBzuDXx5EwqNnE5mNQKLVQ8nn5uG7L5Q3fw3k4C883khNiJqD6ytfVuPmDiAWiRT",
  "key17": "66xtSLNt7XN7rwGjFK4JPBff8YL5A3vRtAXKPg1x3ADNf7tGVezPAkaFgSAu8HsxSXU2WKaPtSHV9RkgfypmzLav",
  "key18": "3jBimJDUGnMGw3dW6E3DpLrmWr7s5ogteGq9bwXSaPrgBNxVcws1tNPDhZ5usAN2b5h7VAVxr1b35SCj5Myfw9m8",
  "key19": "5H2Ufv9Pc71Z2bP9c7T5j6EnJ2rbZLnViDNdypapYBfx6q1fSEAZWLf6onZCfB4qM1NnkK3u8mQuLQXDZAUpjG2E",
  "key20": "4sEtGwZU6sy9XqaH4fRYJMDi5tsgU9utn2A97kqHaoPsejCif3bxQNLzaQ4nJSqdD1SAUoa4Y4uAmAh8z6WyPDrq",
  "key21": "5NmztnTL74vergoFPBfpZ8atjukfN8X2XmDL9mJR4zmSUBLn8qt4W42PgYTVeXCtM8WtHGV92fN6nXGtdVC65MDg",
  "key22": "4FWBfEXn6yf8DMNeKv2K2yRxjmbYPh8cM9PBM3AQmnDP38wvmiiHNP59H4QcBPV3U3XYP7UFH9aXZBgy5DNDGoMz",
  "key23": "4YM8itygboxdTby5ht6k6m4UUz9iipbQkmsTbtf4odEaNyUkJ7p55mdZTnBnjZK1x1WuwSfp8SJgq6kQ34pi9iBi",
  "key24": "4V5t1urw5yjp2GynY2q7ENGGyvFb74ixZdDbXbovXRMFChA2oecZDewwYP7e2NWcKFuGGd7VNTjhAXxdh6t9L5gE",
  "key25": "B8QRivU23bumf4y8MHKARCx47MkQPPBSn1gQafyxDtZbFaaJs8Ejh2UG5JGUXeKBGSkjVtwnz9JBrwgN7GRTe7y",
  "key26": "4RjkTybLayrFbapabbetYwRKVUMvvofma41safAaR4FjRMycdSjLMhYNdq5VgHKNUqF3wtvyGZ6R5rbCKQRYGMrP",
  "key27": "3Ckw1WYVCYzkFd8M2utjWyeytUCm2QfqYdwT6KMW62hmT8ztgdJ16A4WRvzZXu4AMz1YaMPTUm68nUDizxFthgtm",
  "key28": "2BNwUqsGLsrmR6PZ8QPGzoeL18rD1GUaAKoRwocqR1FeGmQH8EgBcUh5fK4KgFRMvhm57tjRduiav9D6pZ2FcfDi",
  "key29": "2QFE1TvdfFCgMUmNYNEEPRioMgxfFZ8BykctCZeC2cWEmxsrRKFJ3ZyzuwVQfaPasYELGfGi6Zi34mZ9woDP1G3J",
  "key30": "3wxrEr6Kx9cZkug2ncFJoCN3CSoixkm5fQwacXU6MeU1H6QKGTnrThYjWVSSGaBSnH9ZLzhXj5nJ4MjFbXYxtAHo",
  "key31": "RpCLsKWof7Gfmk1uKYdg2GXe8VjFGXZwF3Uvfahfu1U2GZr19UnFtzp56cdmaiJFx3DEb82nCp4dCf7K3H8roLB",
  "key32": "3ycGsLZDky2jqNUxWe2NY4xdQbjGx2GXYatyQUrXqveMA54v9PadC8e3i42srVKgaHMzsjRZB9m9vMRDhesFgncK",
  "key33": "54Nmq556tNgycAPDrNHNFwPwia51etDM7JaKWwhBRMtkPznBzyEmwEH6VgZCRaqcwsv8pP5gHc7wBp2qecwqT8BT",
  "key34": "3PkjtL6YWb4eap7JfSVVgsL4cdKUnAd9YwRKwCxRrFP4dGopYXAzXDsVHkqHc4mYgoMBHgXVU2cTgT8XhS5omUeV"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
