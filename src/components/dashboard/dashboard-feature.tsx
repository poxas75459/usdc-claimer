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
    "32xWFnz6CfRJacmtnQx4r2sD4emrVMd1hkuyQyHEtbqTMAKH1sRn1ttBV7JPUyP2fcUd19tpvx3Ayu3qozUrpgwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "615dWw5S94VREjMLK4Toq5pKqUVp63q6AcbCbn6K2iWFhUR5S3uKm1dt84jisAMehnNxDtKi3QWuNHg6omsKSz8S",
  "key1": "4giQ7okU6saEDi8MGX2cyDEkgB9VwimJHbLA448e6h38FUmiTv6ad8YT6oyEJSRPoGiwtftFVzF61w98YgE5PVgJ",
  "key2": "5dsGtrKqYpjfUgYQDasnLYsqgG6wycWzAaQr8KjEirF8dqGpamHy2LBgbaPGVgDbuQL7YmNqv4ANQFnYP5Fc5Za",
  "key3": "22WWugYGoj9RsapYd95iz5Nuy1i39ABv64QWgGc6Z5Jss4tVbN9WHHGBHG6Vgyaknvs8X6j1bGx62XyBjxCmYyp1",
  "key4": "4sXCDWDwn3FSKSX7FYtgDL8R2ConPwbdR7nS3P3Nse8XJaECtGDQmupmsTnr8T1239cbgQ4TATaowonyb1nZjjfx",
  "key5": "31JpfRjZkysfcsrV81XXSExD7nWgNaLZimr9yLKfDaWmhMLWf9q4Gyvz3twGGTL9Fj8QmXKhzZmBznopYcGgTmSm",
  "key6": "i8FEZDHyWmLk7g6bQcuXxDodPoUVqRczeYXuEGBWV8JpN4BhPJQCNfXnEiuTmJdXGTDM2JApUqgr6DYWEbpUgqT",
  "key7": "4h5VVEfesKzBFibu87J94DvLdJS94MLzcN5XT9wftXuFuvNZM6P5UuRBBsAZxFwy3rWkNYEzFvX5SCZLuFUzD6w6",
  "key8": "3APyaHUsEH7ohKNc7871KGqMXgbWAuWc6WK6mQ6Z7QTkm8hbMrsXYt1evpMf5vjH3MKZg7Har944q6vVJom9ymHr",
  "key9": "5pZmmxnrQV8GhynURrHS3paycU6554M5ZacFfNqcY7MK39dNjE67MyH3JCeveTwhrRfeLuPC278DxWSbMTN3JLEZ",
  "key10": "2FRC7GAR3YBnxTRv837Hox21YtFqej2iEm3RewBSpVFhwokZ8x9gzs6YfbM4wod5XZwC8XdkHgHViSnt2xW8oCQp",
  "key11": "4m3itCr4qr7Pd4ZotnsZTvzAYNB3y6YLe1v7j7v3rjzJcC5ENZ3cm3MnSotE9htRrBke9qNxQobWjmv9aDNua29",
  "key12": "BYXLikUi9HEbbq4TQzLTw6UiK8p714H7RiGm6EXPTdCgzvL3cgJyo6QDdtDsS3h1cFgpzy3UFBKxEMGucbHZuuS",
  "key13": "5tRhRavRJiC6PB82Bto9unaH9fsbvFaCXtZQ2XzshoLWfqHkBD1ehiLQGLGh96P2ZX8Gg86kr29TRiKMSd1KRY9w",
  "key14": "Y2QcnMW4kYa2f9ZBjW2t7hZyx9hK2wYtbdfUyKazXgpxDyE6RedXVCPwKRGjUDmGtBjpZL4g1dG16zyLUh1y7DL",
  "key15": "2pkPzEoLSVZmXoWH3m9LgKHSzu6i3YKuuvpATkxRewrWswtcvMZEe5k4bVjoy1GZPAezvizrt3JDHuYBJnHvxNay",
  "key16": "UGHqrbwHp2qWjBLdVpnb2dcbu2QWVziWzMm2DbWE8L72YobJnkJz4fnw9YcBvhKAQSsdtgLZ2me19izik68GTVf",
  "key17": "3RRvYNyrs1N4k3jjuDgypG5TgAfbam6gCg927ZpnkTkjCAMmFTTQ5o8h5GCNYFmkuns3qtDJUpKTQnu98JXrVyLS",
  "key18": "4o4Vb1aAzuHw2gkzhNmWWHsy69QcD7JH8UdfFqMzPRVrz46xyUokU43vZEuQ6ZPeny1qW5myxAENHN7rwxpkRoKz",
  "key19": "3SQApnmVVRUiMZfCuyVdcBBsVNdismTRuSSeJirukm6vmJAC58SCNGg2VLJSPZdKhWqsM6iVRUSsP9hiMLGCBNbp",
  "key20": "hJMwoWXC8fL9AmVxMmg3aKbPFzUKBQJDjx6kbWvrupKhZZZAKUMacyAkQWSrFL4iijMZouVLoatZ9aQCiQgQ4vz",
  "key21": "3buc86WBT4h2XnrMH8jFhjdYCJiqLLMLHmKuHs8RfV2VNcomeYwGkMSrnQcj8q7eUW6yeKCXR9qD3XaMkScqEgGE",
  "key22": "aRZiQkJVaUiycuQKyY2U1YJNKyHyYVmGTe9Ln3iU3bppS1mqqFstCvRMdKc8d72HekXnikybqVPPu1a7kGtfbw4",
  "key23": "5JvdDknx67WyG24m9WSJnbcjwDDVc72JovRyPJ5BTEpWQbWEDttAK1cmBE9jL1tLcMgLuLAv2uUiMQgxxw3T4pFq",
  "key24": "2ejqLeHfxnn2oxWw7XwGSD73LwLt5p966FKJhhhMxFH2qHU8627Uxc8Mxjzu7VksponVwBgKg6uzYL26fMeKtVtm",
  "key25": "4P9nnsFkWmWcFvpsp8sLUnpjL6AuCP79g8jbzfCCTpUL5F2vsHtKQLHHKcXgHhoWq3KsaQdeECsoXend2LuP7DJ7",
  "key26": "5A3mQ5ghuMEQ6k5XyCqzRQYCSFmvpu9uby9PyzaqEzzyNfaGpPYp96m4kxp4aiRVzF2aLwwUtRSVMTtgtBmmqo8F",
  "key27": "2z7gm52QUKRaB5szizeK45fBmmLktowvrMSW5oqU4FTDzfzhTgze3DwroYD74DyFVGVNq7rd1oVQT6LCcyVaDXbk"
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
