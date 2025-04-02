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
    "3pKTjH9LDEqS5GLTip4A3vAXZioZtnX8RJeqBqbFhmpPfnenDsUb5Yxcjy5pBTBNjbCrMzXFaJVyGnf9duKsvXQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pNpoyFzZYAJv21VKNY4xjwNpbzUR5G3VuVtMA4JGuUgmjkpxKnnnJoooKGhNxe4qtXySQU4wJbtQHiAt7hCHaW1",
  "key1": "26uW7ZhG1ireto46RxKSTnfc92AUqXrdXEGNnjgR6S3ziS8xU9XKNT7r3FMRW5Yhduvs6shgbNhjK3P4Y7p77EiG",
  "key2": "2npZLPTg1TiG5QHEjtZh5b4KVHBX1te4rv2Z7JMcu7ffr66osrrRBanvJMp7RaKqpFEGREeABWP8nrJm79SUQXzJ",
  "key3": "SotEHET9zgpzYjWK9FUeP9yhkzdRTvrcq4gHW2VLTgt44BWHM9mRBH7VDvXayiPm2AEDwiypSYHKCytFYShKdea",
  "key4": "46cYiRJT9K2Ynbe2q3JE9wvBhpBDzt9GTSZMsgY6KUjofV8NMmDvndFqbAM1stE3Wt1azGD33K31SteBhGiSCNBK",
  "key5": "3XZFCH7VcLCYrUF7GPGSTiFiZc2kZX3C6upEnsgUd3tkxKhLz217qHRPH16J9CynyobFLkXFtgZsxYfFWcmfntCv",
  "key6": "4KgVY8hQtJscjwi4kgeJRD6yG5aVaBiCXoG8PUkawMbQQ5QaK4JXWvHLSo1MSGFKDfepvWoTDbWpxHTdZZGU5fbG",
  "key7": "hkVmPATedpPfwidoprKJLntJihu592exm6UFAJYGn6FaTbbJbec473GTeb1Crby48CVCkqi1vhFuG7MXvsTkiZT",
  "key8": "3hscxdrrwMgrpwoZiWnCFQpUDAw96NjQgFq4LdHb4DsBqyQXguaVAuRQUzrjr7oEboEMn2Farw57zf1m37f4h4dx",
  "key9": "4QEiLCMZRi2Af8b9E5JF6deDGe17b7ZAgeoDPjFgQW3RmwY37ePaHRhusyW9dSb4KSzrGzXBZUB8B9sfrgVuRjoK",
  "key10": "4PhqAtj6pHJywjTEV8y4NoWZBd311booAqJPyrfL5F9yp2WgR7wYDf9pSWr3CxkSj4fHNRE7L8koDy67RvS4Q4iM",
  "key11": "5iAbqrApf6hEZRzEQbYkDCztDTcRKqr8whZ49MRmk6yZdd9A4SctfSYNKeU4Ygzetvw2pDzQrqyawa2VrjCu2J3g",
  "key12": "5A1pthU6Fi5Qv5nSkCL4HCgUe1FFC6d45Ke89EwqC7nZtqasWT1JoHkpBGVfajzCsvA2ymHzfCUZYLejRhYkaora",
  "key13": "4VSwFeK7rJNAhqWKzuif3XqicG6R7HfjPyAHZCrGVtF8jvdSf3GvBQqYDWujT7xo95BTM1MJgysCE2ZvDR1aSswR",
  "key14": "5u8Ti7FL7eJimX2z5vtKKyA6T9cQnc8oUq3PS5TPBAeXe43yCirbVBEYiKbo4B4ZwLK2jqsLZkgbY2UgeJ9ZAQYG",
  "key15": "2QCtp5kzcgs9Mc37RAXWYaNQrThoiQTY2vw83ezbBYsahSsGCQ6LF2cnuPbeSGnEEWA5QiFL6jyuvYtuQioaXbRs",
  "key16": "3VLsVKGteoxdS18i94f83XtQXt6sdxh7khwtusqicH7KWMtUDMSyeBuRmfyYoi4DXBw28xNKzw6JjCzFZ4czpUx8",
  "key17": "dfazjUKn4hKz48mWQ1yZqiciH41kk18xFmPTLHbthpYCHYTTDBU5mjXEeA5oNHFAjaV6N7kLyYWyLXvFB6tWQxy",
  "key18": "2VuLdaGkrqDf4n6tg48TemywqqxvU9BiPb8rA2zsgSGUZXYEZMMg4h3itxjNjKsfdnmJN9tsC4JigUbVvTW3zLpc",
  "key19": "K23bhLFVrJ8c4p9Z6jJSKrr98LTLosn8pD44tqTHpjwmEvsQUG8et8sVSfpGUfsSkn6wQZYBR6XjPeb1bWSdYtF",
  "key20": "2o1BbFWVAhhBVpPGDPCSMzuDyQBXKDeZKxNiyCT1K23RUHwfQW8tiKUjYFGq96Z9iAiJ5XZv77HQhRqxA3XoFpVS",
  "key21": "3bLnKQGFfFUkr4oYZMQMcWNb1jQM6p6Uathk2jHRDC87nkNxkPnGB39wfvuNuKQCLAmjX2F2siuwB99TTuihgQu1",
  "key22": "2U8np6b7t4egJjmRBhFY8t2JsfpA7WyEuRYaP3UWrXd28wMwbHueG8Y6xAuYcgJi5yJ5JMd1DkzvWYDE96SLiFHJ",
  "key23": "63NpFuzXPuJvsVdaLedHH75VvLuzgh8w5h7CiRWggkYhYeJ8EkWhxtvFX3fCPQRCWiSy8YfDdY9mhPGmi9rZ8edM",
  "key24": "627xyhp166HA3wEuRqES2ukJoam3dSL1AUc45TqCnq4FCjGJ5es4twDcMJP5Zoc5NEman5bxobwUq6xNffkjmsQX",
  "key25": "3DsCpA2iinAM9Nfyw8dfzx9516LDU5RtYMbPrPyp98CzWpEZ8tqU9wLg1JZFCf77eDNnHB9HNNLUeP8ikaweqcoA"
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
