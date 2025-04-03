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
    "2hiVYvDaoHG6MexWwUYiL1NxwGe32vhchwmyA6eZYmJf2duX7jVBgVm3EbCwYYGy9iN7uSXAUqazsb2qJyWarFYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2STaQZGqVqu2spgmp9hw3mLJDww97Q9uiSJLR4MypDZgTKXdhqz6Aj7MpYtgjCVAz9cwa8hDxGvUuU4iuzK5rZrH",
  "key1": "4JumRbs1ZkUnEfZrTXm1zS9FVv9nqZY4arKaM8JmEaU6bM2gHSQUaVshV5jUJGyVsyGnpPtfKa3w7bxGNzBnsax5",
  "key2": "4T5SSeFE2PADLBgNg1fNJgeeJCNiMbryR3skgrB1ZwKmKkU9WsEqhScXM7EdyXE2FED9H4TkdgG8N42geAespWFC",
  "key3": "528QWVHadVgpo7LLSeLbBwAZ9nAftQABM3y5mK9PHXd1SgYracFxLEjBs6Qm1NDoTZBZQB8vm34S9hA7jLZqTNMt",
  "key4": "3UgZZ5R3vmJMuSbm9juYAyLXjYX7sVxGnY3ySbgKdSaTx27RqFnrBzvSuVhTEoPszQDfHoMPKF2Skmocy9uXo1Xz",
  "key5": "2RjdDcrQ4cvMWS1uCQr4kAdzKAV5c7gRhPeQwsAZ37iHznw413MSuuLzcCVzxJEE4oQR8Pz8roXX1YmL6wS58PJR",
  "key6": "2GLcCw7cBVzqgAkzgWB58LjEbKTMYCay8HmT56ZNjkNSuPZoLe9zzEn24v5GJoj28FcpuQFeoWvtGLDUAUxm22w7",
  "key7": "58J98XDG8UCCBLznYmnYipAMkpuWoV4iKxicVAVEXFXbuPXschfn4obGkaTu4M9tjv7zMbs4JSrWEucjWHmmm9KL",
  "key8": "2hqYjVoZocJw8oAidFwtLK8E9hrtpc87Zuk3DwAqL4oML5Mng6Y8c3D8oFJg7gLTZimr1XkKMbbmk6fFFyvmfFfr",
  "key9": "5AuvoswfeWvJir6BZh1tkQbN14WEGaCdhqDrYXNWPmSmHwp8zsVttyt3s54uiqBETn3PQinjtKxCktEXkAkkYZyZ",
  "key10": "5o9UcV71LwFQHvHgrEF6TUaNZvttvTUqeC7a5fZPE1QKLqGmxaDaeD1wUfHPMC9TmVptF5mX6N9hgVDFTBxQDxP3",
  "key11": "t8ZWoY18VdFohCD2zED6CRSYuU927HQFxtoFpgkEMvLFLC5KNmMAwJ7U3RtiLGWBG29xbDsDtvwYa7uTFbUhW43",
  "key12": "5nQWvoy95tU1TwdqNNNfPZjHNZcgLq94ayhpVQKWC69rKd6wmT74mxoEMW3G8hPzbdDNtepWK2wAHN8hEnhZtcLv",
  "key13": "qycxZSMcCVewqxq5KB2mBqzZ99pLWXJ2SRJB9TUtJVSiqYo4rdwgTbB85wPhnNeH7vVe5B8iyV2JTkbFVZTBaVQ",
  "key14": "3qaFzR3UPFMU2enaXFKNB5nkYmjA1xFYcE1KGe7UPksNCyaacZLwByYMoS56PHLvANQS7YoNCSpNxMz3cmR9Rfc4",
  "key15": "5NLiU1QJRfL9KfUurJaUmubdmk7Tms5FaZfGLgzqbkn6q1sffF9kHpfC6mDXKGHheUgi1BmGx14hxicVxsELJs8H",
  "key16": "zjbYiGfAAnuzTNRFqzwL3thu1vSxLbhNtQz5GeHM6wuzFXCYoE5yBxw6FGckqHt4KSZnEW7PzPTmo6y5iviK9d9",
  "key17": "46uZxzKYc2HmapvF55b3xFCyztLazebrADUz1PrCztVnM3Gf9RyHLXU7mHAsRupsY1vUK2qKyShAUfa7iG2cqUJ7",
  "key18": "2Co4iao1oaW9KCgyCY3yTkY479kkSZRVBUz3Z8swUToGBpGum3eihDtycaog1hL9VwPZLTUVAPK8LREMwRjKPAYY",
  "key19": "3ficYevF8fhuzbcaxycD6jWSZQEwKci58NT4T7Mt1aPB4kqUxuW7yf9nMcuBRdEVf4mqM2Lu3VdPurkMQQjKAayL",
  "key20": "2d3UBWpvr5t64jjNLsVNuVph4mmRNpdV6TuF37qfwfGCttHUrS5EwboBn3WWr1TcXFNh2BvFjCtms8qpMLvS8nRV",
  "key21": "575JMtdtpG4zwYkov29sst9fAWpXcr1T5qcUAWRrfJzZ2dF8RCZ6DiPA34rdsqxfwGmVZ1BtZowk9wYs6ww8Gt5p",
  "key22": "qqN69w6PvctfSvuX3JGF1DiF6oQ8uKJkEpwjvxDxPszMbCbMZkEpipVgBKkUSZXrugpk76izMJLbCRbranDkEjK",
  "key23": "2UnVVXVCSeWUsxUjMoU85h2HtStsaprXVxb9doPdfeYM23P3nxtga6qCGiZP4rZHxfMXJ4EQxpMYrtvNFKqFrE2c",
  "key24": "4LiETtMhVGkED59sRMgaEjd1LzURph7eg2dKwYMQ2bAp22gSYr6NmbdFDvW2Jk3piJRDAv6n9WC8S9Te3AvPAyg3",
  "key25": "bBYeKinpEK1MSqwYgQQuKNJb99nEfucwmVoM5GyisXQAPNsQTkdX1X7zRfPSPgzn94JDtRBXHz1s4NkfeBVNcU1",
  "key26": "3jcKjbocch7rXRBjMxj6EjpK4mEBVjw8CYvPXyt4rz4EkBcfbNuiCXF1kjQ2EAuL39ZFe2F1F9arYk8rBxXaVoc5",
  "key27": "3N2rNLMKqJ9EqHZ21vG7Ctk37ugpMbdiNDHRXtBr15k1aKa2szEZE7PFUi1FpSF5vTSPMtRNJL3EyfwukH7bUz6s",
  "key28": "2XwmdbMg6YrquCpubTFnBj9i8xgntSvERkranfbsTzAdkQA9iE3KBCS6yRFdcApUFBJs6WfLUtvc43agbcvoCo9q",
  "key29": "2dMqv9bjduSPpmx7QLjv4WGRbWMDaES75dxNgU9uHhTJ6Xi5oCnByS9rgLtdNCHCiN3CKPy19bKgN1wFSxzRUUu1",
  "key30": "26srbTDeuHyxMfL9HUdSXD4yuTWtsZ5Zstm6n3Ka72ovTDCJaz7x5qd1cg5grreuSt1MNDPGHb8vzNBwytPbEPUW",
  "key31": "kp2V9pBdemTbqY3da4Sy4XuTPS1tmdm4Nq5KifRkvuCEyJVCKHLfDLd6XdwAn6E3bzkYL1s3zBFDtfxqJ2USDhf",
  "key32": "46USWHPHv4zcx4WTKCcw4yA5DkgESUVVXC2n9csYtfSEC3xTDLwaTPJBWxD2ErvqPfwRtnComoCXzt2ChNkiXNGL",
  "key33": "2yLA1LiCJ8XJv8cczcQiUVvw38UXT5ZeWUr3kzHgiE9v5kMsU9h9rN85tp8R1wED4TqZQv8C4SzetNGrxH7Tc5pB",
  "key34": "44SQagtuz6qiicS5gPYDF8dafgkk9qGKmLop3JM1bpQvCgWqeKvEZbwo9c99imtFxLFiNVuxKKdtVdeFQMXhJ2y5"
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
