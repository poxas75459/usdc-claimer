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
    "2mYS79DQ4kizPkFh5EJQ7QtZBVcqoDYvoMVqfc9L1kFgiaesGsWY7MJydCSTptMQ5hsNbGnKtrPNyvCceguqteab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54nYjeK3rsmCm4gGMnZgHLVBVPoKMZb6ePLpqXMEn5i7mvKLwPw2jdGFB6FcZTUpNEeZw1t1XdGd1RaDNLXaG7xm",
  "key1": "JXgotVunAusHvbGHGQhXFRXLHUpqxo6fEpfBKju43QzH1bxqxDLm6LSm8PNRQNhjF8cJat55jbs2A3FD92Ky5H4",
  "key2": "efLHgMPrnAyrRvrwoK2M14e3RmXvMBRCVJYpp7ZCix95TjE5wsr7YQXH4zGknMC8RNTpfSirrdBXBXpG81R91oq",
  "key3": "2t3CVVrcD7VMLqzFwEerkQUHShdx83C1yF8FXUWPHUVqRZPNEU7D4RgE1FoY7dYgGWpotnzZiwjVZ1wEkTdQ85yQ",
  "key4": "QCstxuAnMShD5F1e885PuQXAsTQJuyv7jSZ5cjSijTRunV5WHs6fjLaSk31aSCf61Gwn5WHw6xZdFpEuUqVswu3",
  "key5": "4WoYLuCcCT4QdP1F97r245ftXAhZtT4D6tXa1Tk4i38qAwNxUKpP2WBvEKgnVScLB34kqA3YQbQbFxUug2pVNxeY",
  "key6": "5zt6TTpYzGYzNrcAzTtb3Jupxq6UyS9hc9d66pKkSPFffkT3dZXLJm7a8G7yq5ksiZqZSN8nPJRZDG9QDRftbojb",
  "key7": "5Sk2fSNGft4kFQvhKgcuuHFuSisihYqbDkGEu6RV24eqEuishzgfvuzU4XXsnzojpfZkkCT2LXqCxanWzvBXe12L",
  "key8": "mXLoYhhkZZ4fYhTjPQbrNTq9wBAvFC8fPLVvX1peohSG2VJdxsGZb9Sqf4My9q6e28KQAq2gzy6qkXQBtvnMc8x",
  "key9": "5PNiGriHREpJmoTSsFqJD6V2c8V4sVUaR4sSCFR7f1VFgjC4Tfn4rdWfoEbSJ2WPfmErmjDQBBP9vZG1bDTC7FyA",
  "key10": "5Lo2yjRKJyKCyJm1AgFcT6wN76yg6TuBGisRnYJ7i37U8DQu5aYxqp25VunYCJHPopMzuxgnbucSGoVvgWWN6FXy",
  "key11": "MqAJqe61zZcmMmF3TBqifR1BzZrwNEZjSAYhTr4YRxhohtQN45ahBRjmXiR2aLSxrBDqVJY1V59MjdZFJfCgepy",
  "key12": "2gq6dGFveucLAv3rn6SEAcTdKZSYFVtHbkSXzRYfdLEARTnhkSBMmyH68dghTjNaWd9ckMnwjqCpDtFzdu9Vm312",
  "key13": "4NA5vKGL9AciKvdmpxVcvUz7kCZHW9hnhSp5ABj4qqXncxvmeWeLaXXLdMpnhc77y7FoX8aGPBN4iZAXdTALnDP6",
  "key14": "3uuXTJMestVa9jJJom8y5JNEEB5nZ9i2ppW2NiVJihsVC6W33CPZXzHFxHPykYGvn88PRf7p8cnWYKFFfN6hQtxN",
  "key15": "5HkvtdFWsVjTUkQWecdhQ6kK5aKeDVgXprCf1TJz6mWLyY2fQAcinAGzUe35zxaAC945xejWkFoTZNimwdcUSUxE",
  "key16": "5ayiZu49JNwdQckpwHwMfWpiQVWxqc8LKUikE85kupufdUXA43JjKNTPLdefzyZB7tqNdmxxrKYWCpCkYhHq1mKF",
  "key17": "2Z9xtUPdGa6Wp1XXBJi9Xz8r5mW6uQCQjvy8a7rxWiAiLKLNSjMmp93GPvm3KoRkSa6qUugJttbYmaHCRNsCvY2g",
  "key18": "49Jewf7Jm4UjnrCGagPMSzjNVFLqLjQYQ53SDm1xUpHYVnSxnRjkFbgWKUdD1SMhPBgHJPqTexpCZgW2GzCS1pna",
  "key19": "j1iT1drKZALNVgpbCpdadhFS6NDCenNaBLGG2CD1fyyYaCEdkxtXxxMgMb9Vw13uX9NmVamAkteAYTSeUczY3fn",
  "key20": "5AhzaXt4r7oTEqF7ZXTnqDmrynNmWuS8aXXhN7rHdqvndeesLUCo89QSriYvSBE75pDKs279xyByeBgjG5RevC5t",
  "key21": "45KwLDwZ8Z7UU7oCbDjLYSRjZiVpSunXGS5fR4rzFXj3tdGrkoHjCi58wd8etuhMu5HSmLPcjikZEiHnSBUosMMN",
  "key22": "37bL4fj4c4xT42X1QJPoYnjFWLvjYFHRQrUNCtg1BPuAtanV3MDpL6RF1DvJnwdrPGx11yDmrK3xW55GJuY3SQou",
  "key23": "j7aXhcpZQp2k5Xz1sBfcDJJEePJM7Ro7oTRGGNUmV6VV3AG7mBrMAkw4d8C2Uk3oKjSjTPNj1Mz5JfcDr5H3iyK",
  "key24": "2TVKBRuVSSfYFbwmHzKnoFf8FBzDKTSKa5HAUV7fXgDHPqSYruxEtY8MF2UyY3xD6rfC47VavScBeS1BCPwc44X8"
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
