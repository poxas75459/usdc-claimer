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
    "3No2c1LaPaJaeokxFx52Lvy1f1KEL7K9a1B6YK51BRVapnq15bgLpotDQHZi4aEsTFuH1xP5JaF695FmerUWcxhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2REPJjZ7Aa8suNkf8kwTF8MvQbqzBEr9iD14XQc4nBXvoUmNZGxWnixPs9CmpNiZMJCbj8MYQeJiH4Uim5aaRv3p",
  "key1": "rogYBZDuGvKReoKKFKx8xDkFbmmZ572cBc8Jj1JinrTLpuex9BSbmdztgtgezNKbSMKhVpPoYtzd68C7AbADWDv",
  "key2": "2DvdJrvb4tzseG8BoVS12PpN9ufTQW1C1UUmmtaw5oEf4jBboC3n16Cfrbe9kDcEgGWwEJxD7tKaxnyfzpW4VgNT",
  "key3": "46mmBJaBW9pdgagP6si9JkdsiCqgYp1pK6D6RrH5dRtvnFRmLUwFAfr5S4CYBTZLjydD64pW4BG5SfG8Gs12TZ6R",
  "key4": "KVEbuewoCGbFA9LoyDr3vQ4LJBH2vXsK7mTYZYDW514mMjBNpPvPwruVM3TAQ8BtQxtufGypqXXLC1ELzcQqPMi",
  "key5": "3o3CadJW8woohGzxSZBw8ZRUSySL8yozXok4d49rP5o9Xq6vVrjHpJunXXxKCyKWKL6fsmomEpswT1MP9c5UtEhT",
  "key6": "5xa318ernr9v729jzHSexZh2CQrm7ebx3uXCKjDzAKQz5pmHKPMPrgPnnr7unnhg7Pp63x14krt5zoFc1tvA1kPx",
  "key7": "wA3YQ9w9vr3UXerXt5zQ7914b81AzaYz9rYLa1RxkXuUX652K9krnbDWExaVkKsVigekMTYNHChzYdscGYBks4i",
  "key8": "4vS3Gw6HPhbwKz4nsPSUVZY8qk89qJWHyyomevqpXYiARM9yEz1pHn4J5qWmV4HeBAjhaJT8W8SP9MU8qHJZ2pR6",
  "key9": "6ECszFaN4r3NAk85CMXbEyKEftGKcbAaNd7E22qpSpApwsfGZxoRJppZC5R7VXCRV9SoFYga7MqQ3M4AJ5Pawvm",
  "key10": "SfnkJyGNJ2PXxKd66cHYdLp3KjRvbiX3oyNDHWLa2CeZ27nEGee2VQxFnb5qPi4nVQGpqr2tQpDjwit9JC9qE86",
  "key11": "3irJpTBG1Hy86TunY6fSjzwUBXRYHk61fiidpbiK9qVomjsenzB2XBKkjR5SurgqUp13J1yKEyRMftSfDhQZiy8n",
  "key12": "2Szyr49j2jrwD8s1XRbdddcYviU9W3sqknwvmjAN4Q3BdPvc9XSTXkmnz7dKKJZMRsTUvZbR5BKFa8huqyhXbgj",
  "key13": "uqTDo1mDB5AjuAAxCiU6b5h8FsDUTeftiBgPqSfS7ufEFLET5zKLFsxfLNzU7fH81nPmACFacj9ctwhzcrgjjdY",
  "key14": "2Roiy1WDj1PoAWdFGtcKfpTpUfoK1bSbaEZZqowkvR4CihTZRR1RjdzyHAKxR48aEu8zqQhrnVsNZ7y7G6ENaZrj",
  "key15": "3gyvj3dTuApkLXThH4r1cQtCWejYt3tegVMwFM79fNwE3ZyaFibyD4jBt8HzMJEreVNyVPjE3vqt1HyRfG6NHoue",
  "key16": "5qLxsYz2jCSs9hLgcXwnsmCkvazpUYk9agWpoT1Gea6FpUUTTd8cchpdCAbvCekZe6i5uWPvsLfgLDE3ZNZTWooq",
  "key17": "2ocjJqb6XRECK6bJk89f4jrzeDYpZdqUV66FksP6zEpWNryssKci7zkkK8nRcMAiUyTACeHvXACJ2GsfcfFCpWN1",
  "key18": "3ZvrWujmkKBasxmWq3EWkBeLeYfsuTRJuh4zn7VRVyLtaHzM6T5zNo7agkJ2ryhbS7PbvyVqTvJSKgRrzTymjkFv",
  "key19": "2wTPAT29Swf1ba41WKQKTjSDxBc6EbRMUcHE3SWoePFEizy1T4AeHTDjnYj4eC7qrDcrAB9E5z7LWHXf32NusaMG",
  "key20": "3yZhfzUDFwiz3SgRs4NZscLEtsvqC866ADCVKBBCvQnKb79e91eig43sfxMyh2GTgRnLzgbJDWEKXcbqopjAXEXf",
  "key21": "5NBeXmvDE5o2h1aTEBLKtbUzNyaJVkroCusRjUFMjjC8BGqXZgmjrGASJP5FyaM4L9TRNkMnE82hrqeyK3gYqYfU",
  "key22": "3ZbrN3vYteLCcbNj5AweBiMEnbu6bLEn4bAnEeBRAYTS9nSGxpxbcsX9HwxY4XEnNtGi6aVuiV58wDf1mPQAxarM",
  "key23": "3LLVPQC2YPtTdcA2ueKeV9FJiqtxAkoo8fyBECS3BYeEXQJQnfDBNBfknr9cqeRjoQnYyoERhzyPtomEDDbJ9ufh",
  "key24": "3WeRZEiMjcKvUrNXohkTARFGfbHbxvcGBhzjdjKar48xBC5NbP3bs2VkhmKSSMZPC8irwh9FvPgLE5zwuwrBAy3y",
  "key25": "36wdhYuQWz3aEuhZqiF2Hwi2BuVcuNSyVUazsCRTqWvUg7xn9DjXrFdkQBdWvfQW7Sqei4j1Xs5qFRW7avAQir91",
  "key26": "5aJBeiAVc5oDLpmx8SRwxeym7nzNzi7FfZ1AKZaZVTU6UVWH1fkU4tk2v2gCsr2CXCxyAhXqubyrtJzJNEEa6FYZ",
  "key27": "62ESjUTpC522kGb17bFjySMrKWv4EcAgtTK667tXjbCyMcYPw2iK3cBwJ6gkMqyQCKUHyHM1Nx4gFaEvJWPbTZHr",
  "key28": "4wMpPs1potDJKMTPXJZ2pymiuKnKKhyLHP6yHAzNzS2LDyvxmquGPW4mhutN8HdCuNAR1dBNFgXzLBTe1R9yNKnM",
  "key29": "2nrzgQuQJbeHwwHwcfW1svTXLB1ycTGUkvzUjo3Hr37asqsqpWQ8DJuanaU19qY9Gj2JeS45BccCViUYtggsR63e",
  "key30": "41iguwvg4HCCdMSNScdHX4VB4jcKgvvmY9UimmE3LD8yfnAD4r58R4LaaMzJiZmJinVVcUhvRyrgVTZ5yXADinij"
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
