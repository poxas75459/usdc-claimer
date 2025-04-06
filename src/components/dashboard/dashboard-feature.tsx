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
    "3C3zu92FSoE6jxGmudDHHrA3CsdjpGywBWRaDLQdFLES7GwYP3skEEVTZHM2ZwscQLdcfgh5Zj76SQg3jgQCGfvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58hzESsiEDkYYWDzsH27WcsNKHPdQshSaf4um8s3ofVTzXL1yzV3AddqaYJHpmn75GhkGmFDdpn43C8EKNfMDeAW",
  "key1": "22FaLjrbaLZbQSWLteSeQ51GDAdnwaXVRnTivkh7N2uA8khdDcRDmbPqtUHbhkCRra1TSBw7iBHniiyRTqKPzpHr",
  "key2": "33KJwTFwrejXUqfgH58UqyxGXvUsvq133Hasagf3FtZtiXGVNMjzENNUckRaRnYC7kPPd7WhiUYu1c5UskMw9f6D",
  "key3": "5LtJrZasrPdXUdy9mKL6ANSAe8JQDSh9h2asJ836kFQhuN3r4ZA4S6K8Cv6Sbhhpu1VGJiiEr6ctegqdQ3Ncf4xS",
  "key4": "2KMtJt6nBAt21JxbLzvqAGDxJVRXAdfxLSXNGGi7MX5uuBBJZmM43fGLWRhkFHFHqgGMB8nMbf4922hsZJp7Suuc",
  "key5": "WHsPvFDHTDrHXuZMVyXVABKiSo41yRwQbS9eobbqBdgqiutwaSJCCGYHjruPwY1jwMt6t2TV17bAyS4uP7RpLHq",
  "key6": "2mwvXQ9J73id6j8C9a1gsDx5mdcxxuuGWchEUnVt9qqv8c2NgUPKVgMSWDPj9HG24o2RPvVZLECaPG3NKmhX44YU",
  "key7": "45GL5LUsaWdyPD5fJQjaBbnUXRGH8pR9pPH8ChFNdFBeKFM9xLntRsP8Xy9hmJk71nAzGWyQnM4rZVUKfRso8Hvb",
  "key8": "5dZcbdJ7kHkLs7ZE471kThYZUKLFSh5QKUc2mY48RthKekbhGxGrCgizicJbAYZnNVUHrJUALMpQcKkRaLfnSLWw",
  "key9": "45fitndQeZQUsLKhH5gnhakqK4Dee9JPYCRwVQUx9qSNN7ZGYAxGSJohvhG6dJoCeaacqjsC4xsWxKnk3tuu11LH",
  "key10": "Gzpacfirmbf1oSquyoynYMgfVzdNTKcnsQNTLRN4oR5QAoAYmyMuXsjWrQX29wsRCarmnwjm2p1XKDQxnFs3NYL",
  "key11": "3og5oCGSiaZ1DEhKg3cjSQH6D9XLcWWy4FqGBxvr393Fqgt8DiT5ts1G25edLXK8hETCdJn1BKdnE3a1NQzLBGSq",
  "key12": "5unW9uqLht8LkeDwmSDUuN3kQfAEjdtbUK3oPt6mQmRMyPJig57FtD9X8PzHfeM9kQ988pxZq8YY23x9c4YyE8gn",
  "key13": "5XZzuhP4btULjrmkZyArwKB5wKtdZLrTzGhXWFojoWJXzv2CigDuxFCgqHb7thLcuEKqT4ZNnrZgt2vZXijS3hvU",
  "key14": "55ShRb2rKdmU3KCdNgTgxziQxsuJKmBmkGBboRSoR37kcpawqEvWb2voy9osicozYNYCPqfNeWcTKpkgnj2im4mH",
  "key15": "4THjrJ8K6TnSVCUZ1DGgNbz6UMSmKp1GELkZ31v9wmvG36gVx2tXatE3zYfUg6CRXNBg25f1aX2JNhbyaMX1QCYD",
  "key16": "4axYjq2Msbq8oxzjxiQpjgASwBL84hfBVhKr3mjobRSHANFmfZjAHZ7spSjaapsA6QVR8iMDdpeiLYxJjGNLi12e",
  "key17": "3wqnHqBFVwKZgnCbJpyYYjmFzARGhiCbNXdv5xZWRVrXvNTGsgmsTcQVLGZ9jER8RbyatP6843J4EfaQfryDhFb1",
  "key18": "2MFzj4ErVLNKLKc1xcrPh11yVKNiLxdwjUsRe5c5pUAx5syTtv3jdPSiCVfpAG6veqLs85MuL44g4w7fUAYZrYoB",
  "key19": "4f7gTzTwYfHEoAhNwVc4d7bFQyPySMp9iRcNyXbDvvKuKWHrHvSNf4jPq7QvUFGXpFuEfhrK39zgyKrg7MwPKrAv",
  "key20": "37tSGLqsXWiY4HdoURZmo8xr6GTiS3nAtrNmAH3Lc4xhvvuQioQwcnJG3o3c9UvWnNrfxTCikAtazEW7Yohap4qp",
  "key21": "4oXaKkuYpQcyv2mEKEZWogtPtDvy5bgxxRaybNxUmJKw5xhQAW1hF81V1N3JT9jCuJ3uiaTDuBK15e2r629ywnbE",
  "key22": "2VPoyD9AbEft2XC63JtfaQ4RZs47WTiaxmvRQ9AkTUpVGTMpYGmar6MYS6LPBEXiKBj45bJNkikmRVy4eyvNVU2B",
  "key23": "44e6LkguvmD2YWRi5Syt7YAuu3BVB8MKzAcXC3mHWyLfTKycifixiguBvoXff8jNc3AzVyUWQfsh6bLqZSaqfPyG",
  "key24": "2MDRj3vYuzMLQsVPLCVS3Ksm19UGFuVtUFTFueoTJkgJcvRK9pN33NNixftoV27jr1fB6iQ7WZvFV4DFKMfFmbBC",
  "key25": "28EUvaA7ALJ5NVxhGMQEpwuTC9PjpMuVzxKudMnh6c8Q52i42odS7ERraY2bCFFKNnZnLGEuY6bMdjPvbiYbRHmr",
  "key26": "5MJj57KbLMvNunrpp4FeeZ4EWKmWkyUGJP1y1qnxJr7AAhooZKkYkaWsv5J4akemf4VvnrCsjBj9KDN1XUhUkqN9",
  "key27": "63aaUtFayBuw5aQVAHeNZR5qnf642zU7E5VKQa4kUCkf8xshHJYFE8pCaxHtr7chgS7kR9CKVafCb3J2sG1rgaZi",
  "key28": "238FbW5fFrrDYZ2RxkXmiP3MsqXzf9zEs41w3XpGwBhqrGdjPQeSZ6j95mKQbqt1g18wYXjw2q5QEeWiCEkdzxi2",
  "key29": "4zQnmuvpMT7rJQ3KBwkr3TagZqwYZemmZZixK4FNPMPfMaAz9YQzb1xpjT71boP5fW3nr3Eve6fN1DpvmZWcwKsd",
  "key30": "4AgcpkYEAwAVKa3QRPAjG2K6oNtoE7EPo7MTGMkJQDbvNCY9ph7RKdJApa7z5NAE2quSCbEfGzTx3RmqkURKPG93",
  "key31": "Les4PeHBpLrrwj6BBop4ayD6e4hUf1oYmLRNM6NzD4VExhuxsiTtFojnzfrNr31FdAq2ZRuFeocAXTkpqj8KRuF",
  "key32": "3AzUWfD6wnqcDJsEjGrg2y7SotZ6eHnmLwwUKhUK65QZTmViqjWTxzNRwKmf9F9GbfxVFzTQpMYTRSbi7JhwHsnE",
  "key33": "2bZqsnRhshWXKvoWNu9SS1hQn8uZ1itqzmTphXNub23ZGMmU6ehGMJkAnUtk2tDZCD23aUV7Sqpk7KKCMHNs5utG",
  "key34": "2oMKac2hRYrYfGb9HZSprkjrQ36npRKkrMdgTPCLxgEE3soET75FHGBgKWmkQJR3vzJTZmD7qXgoDBAALnpE7pxd",
  "key35": "4appRyxJJEzdAapCdHXMB2qn3GrQAR8NSTbd1zeohE233hZs2rmqf1muZFbPzgeSaguBNQeWpZe35yXYEt4dNBZQ",
  "key36": "5LzVSEHgEhkvYR528ppXDEWsrKA1uChkveqXCeQ5uscRi9euxQaVmuY9Pur8R237H4Dy2nJjRWdcme5bNuNucywp",
  "key37": "jtiFw4BV5rZUFCDp3PUUDybckTQcnF6ARZMCA56sdmN3BsbUGHFuFA2XX3kFjcfUnvsnZ1qDoyQ1AG6gNysr4CY",
  "key38": "WqUxVDY7YPXezbg5yczVhPmV3yJkK1Bkq77Nnxbok84mmt7sVk5XbvnhBSsLUUeoQGbQ2XXxNLxjyRPENHedjAc",
  "key39": "2fSZ8bpUAwpx3H3AFs3n2YeUUK2XZpuqgTzH5gZmKcN9BZLxF2PfLDsvuT2MiFaVaa2zRCvfomF3bECkaorZajWx",
  "key40": "5nJJXUUePMRW8YpcELfXmmbUahq75CdBkNf43kcDzFyNhXf6XZkp7enFx3FMLq4JK6XjsyTrwu7g267RxYPciS68",
  "key41": "4cJDMKJe4WMhamTB4TFK557zn9QRDYohXixhpTHDPGrUk5eoCDNrZYZ62b4MXHXsaHxrWcE1KoisiXwqg5EizFQi",
  "key42": "pyKHcrWhnJ5DzseyxV4ZwPAcP2Vnvg4uZEJCTpe8YcjT763cVoeQCPqE9fqYqpukvxJpYbtQCKZziXMHcRH3D9Z",
  "key43": "3W5XuZSncW3dXU61Dw5vXCCnpiQCMa4YxYvU1MuiVceg25sgFz2C5oCbbC2wFFcqd3dGjpR9itmfH7Z6FnCvft2X",
  "key44": "34hwLaiP2HeAZCMqjmyUuqQyM19VbJiLTHDFTAUpCsJjwaWQWwKe6oHSQVTgrtDaqsPNbjJ5hj35vNqSduoiyYWp"
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
