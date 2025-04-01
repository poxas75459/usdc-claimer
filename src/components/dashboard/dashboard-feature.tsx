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
    "hxmPcu1sjS7VqE6RvCQiP1w5JJiAMFuSZjvr8CvGSxq97yJjuVk3BwBGZd7NLL5MsHDKwy2KzdDdHQwFcB68ka2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9j1WFUKFVjeDWW5LqDnrqtMTVxWq8NEVVmrh1ta1zjghkrS7jbZFfGMLyuq2ow4KPuEowJwecY3CPtZrzBQ6NNH",
  "key1": "EmxUPjaHiYbA9kgrx7pMbmDtZzJ9F6KBTPVgaoiyMHMEHvcJQMq57Pj82w7qLcHWDTLpQahk6ywdVRyejXc8Fgx",
  "key2": "3yuKrXmGroXwd3T15sNmu3DNurMRMkqGjiFPpUmNvNX4QP3rfrAFvoLAi3A7SoN6SM9xh7se82ovpK1QVMUWVDsM",
  "key3": "xogt92Uxj7vDSDJiKLoqcXQwtwnrf7pUtvxuk54Gc1DTzr13Syma6awhi9aABU27sk39ThD5Bwt7iRys3pS7vBw",
  "key4": "3ZWEUvuvX4SWG8p5geoRJiZXQkCg6qyFS5z9xNC3gYPYmmwsE4wYAsXTBZ7RaGbwinPafHnyTkAgrJPSWd5emN3j",
  "key5": "4F8CngFNQqWoyabuSY8ozZZaksxPXNCNJJaHTUPMzkrFsvMjZb5EDuWDiJM7mQJz2G55Vu2HdTRQVY4ZoRwVG7fK",
  "key6": "5yw1ZxH2oKHvne3HF758cDgLRuCkjsyjJg8soRvQR36Gv9Zd4MsCuQMhNgT3GzVhZXHAMPzWoKvRjKiBDTLnTKSa",
  "key7": "QfS3jE1XrMFewtcT58BFzEbDYRF7ufvGv1wW4LE8ioNA3pnHShE9WiC6e6ALVQ2R53TySNVoqTnX8736u2LccpY",
  "key8": "5syscrkvGGpgLbNCo6e5S7T1wjL42BXS1KSGRpFFcMsBVkkWri6qrVUx1m4rniMCQ7AAuYK5npPnRsnbh8KGxkv3",
  "key9": "4YBLzD76ymgeGheGt8yBVs9akvCX1JrXgExaaHtE2EK8fqULunRYLcHipn8dXPNQz7WRcNJnnyjGrBHS4r3KuMRz",
  "key10": "5QfsRQoKkjJ1FfSmuQXV2aY9g1tc8P9GJupfjK8Ez8gi8k8jjJdq3yLbr52qCWktty4h6pTfxCMtBALfjgnvjTNd",
  "key11": "5qYDf62tp5Yg35DgVK5mSYRRfuwVnzAsfhdubK8WcWM8RbgYX3DbonAyN45JJTBW892yDFZzTxGumRd971RrhUvK",
  "key12": "5k61w2gsChCrxHmzJkU8G39oAVynCF4FSPXTGkHhUXTZzv7oPsLfqmJvWYjgzE9Hw2RtkbxbasgCR2VKW6pyc1kL",
  "key13": "2ijYoKc7Z8AfCFtoe7jyqb6cCYjz8sybWUZ4TpnRX7Nz4bac6vURkBgmPqnKoKJ4hRBMM1wVrxrWc9iDdDSDYYtY",
  "key14": "EUwHNTnmW4RcC9Lrctz9rsNUkQX7mYaFnnbeCWDr7eswevkayBdCKZWubYDB2HRtmE2pi1yWHYwN2tksydo87DC",
  "key15": "4XQZSJpednJGiLCwU3LuyYfpqTX3ptjrS9yGNCZVbDr1AAqZNX9qreb1iuTEyqoNtoBM4RdB5g3NxdMfvkVvEWhF",
  "key16": "2sGksjn4QEZo8z6VYkhnw2fqU6ZonthFio5qiGx7XBLVd9uhWWtLARY6ue3EJdFXPNGahbpX8nfBe8AXtWSUHkoG",
  "key17": "2igbCGwiFASJr7hEmuhJgikTeHCB3AbGfth1KNTvFUgZeJ9Q4reNj44iFssxHodytAxZbzkkHPSBFw4wncfxcFPW",
  "key18": "51wqJixGmPpSJeUxSMQC9h8ZCr4kj9pXnn1zXp6hWdfSvUHhdFo7Gi5KL1queBhdxMmXkTazHPcZ5E2cMF2gyvvh",
  "key19": "3j46uN59mQdcNbUjK5m49WZmcU5VJk3usUBBYEQWYJE5Wx9ueWuKR7qSc4YpGQVq8QhfAAw4eRPuKmmbJK5NjYop",
  "key20": "559kN8PR2sqp4XKBLAEYGwN7uQ8q1P9vowak5xUvZtcoddQVHtgcqC6DGjJUAm44yvJ6TXiyJzcWeHXgjbjy5uSV",
  "key21": "26tR4CAThYoW4muiP28FjvXKqvzRjHNaXrdNKVwrKWYxG4yrqesihUSLSDGJAXkByBFqBS7ey8MkXfRgy6pEpGoR",
  "key22": "4m6rSw6qTbPjENVBrqxz2LJR271M93jKXfRosMPw2BTkAAHaQfVUXxLEYCzRVfDWknvEwhUc5xxfnFFLH2xSyMGS",
  "key23": "4jw8xtMCNuwxYuGA3FaiUKJGTpnazYWc37PLb2QQJekv9CqBC61JyM1n9NjCHfphouo3zN6aXvKqaMZwxQD1zNWt",
  "key24": "qkAE3nipjq3HRmfKNsDBLKiDg2ZpC8nhb6T4KebadFSGdFRoo12yJaxu9MPWQDKkPUGEiqUonEpZtMD5qwXNSLN",
  "key25": "2aKTb8NEGWq71rU4hw6sB7Up2KPxh2zBvNyGxJcech77ehsqvGXNgFsaLa5QBR9sujtrQ815SjZXLxhUGk7ENLJD",
  "key26": "5czwRHhVHWCtEYST1Mez2BgSAjA3Gkr1YeXi3JWGQSVzsddL6N7DusbFsoqtep8nGg4VYsr3FjzxBjJxur6mCecH",
  "key27": "rznHJy51CFunFBch1j1cZ8NbiWjJjbfedbJomBA3rZAkKX6coYopmvXoqXpMV5sYSC8Wo4bnWxah8hZgVPaF9wn",
  "key28": "4w9xQNshicBKB6b2NmLXq6bwM4hpGG4sG4SsDXbtXnhkFMPpnH2F6Hy31WaGcvGz9ZHUtBsDbBvw5jsYR314K7qy",
  "key29": "2QQ5VzhwAqninQ6b7RPXxRG1DtvUQ4EEKSTi47j7fjBnsEJppSdocnMsLBosQecdwX1gwE8usmWMdTTQsGvswziR",
  "key30": "3JE3EfJbw4M2mv7jZrUFqAArZwzk8QW31bAkGUjTwPeYUz1sRJi26VYyeqv2ZSPSnc32kaVXgf4YVX8HVsrsiDxq",
  "key31": "2oHLDQzkNjzEgdqNBBSypSi3fvFkr9AkWMdzpifQ2gf4WLe5S2CMcMvm2HAfQcK2svjWBTCWSXR9MmHQyJ6Pneqa",
  "key32": "wDn95HQwDdGVw3buyQWxSKpm8Bpofz8uyWydZB1rcvp7ePNes62w48piczEnCaBeNeveqAbdpwhQKmYE2s1dt7R",
  "key33": "2hBgFZYY8yeuHEJQ1nWrcFELxuU7vpw5gpgFmb56gBpf6Hz3Jh8KMZAioW3okrr52WQ2Ai3RtUjnEdraEcHguwCH",
  "key34": "4ov5g6mMEsgjR3JEYv4nRNnVuaRspV13BM36ormjJ1CDAsyhbLSj4zzDrsDV2vmx2SvsicfKqpg7n3h59RbCxAHx",
  "key35": "5x3eByDSXCyN4fw6BaXnS8rkL9E7DyCfquXuPDqfDvSdiXejPumACbmeWmMk83ALFyE8QKCsqfPE9XBgqav39FKw",
  "key36": "4KJnw7vcT2AUoRq4P1LCrafpFwfU9AEb5ewFZy6BNxQS8ivRA59ma13mZ1hZjR9a7ejtwr4VEQc8oY9XYgd5dM7s",
  "key37": "3bm5fGdzoWEPu6SE1WX6fL9JBJjRHy4DhHBU371XtQfCNfihMTHkM8AVH61P7mBFz5qSE56F5xKu9NrMdY4XZwk2",
  "key38": "3sRCuvSporZ7q4LQzW8BCPWPgoS2sSZAGCarCK4QkjXpi91DSneBMZR2EaviXpqG7rq8GaCKVqLD2iL1QBqXJ78X",
  "key39": "2DttTupbBLvnTPw9BsrndiCX4YfzznJxiY3m382DxMQhaGHHxVygcJdsZsXztySYMe1YGFg62iv8ag4rjhUoD87E",
  "key40": "4nhCJDdD8W2LqGK29k7Ys8itT7CwLipNCE1Sgev9tyqDuLffQkq4xqjtGJw2thv8UWbs7R7Tbu5nmmvnpivXXmNv",
  "key41": "3apeUkxyVd4fXNkS3kba35x579Q253eMnKSY4eaZx3JJV7T2YGcAVgYc1rEvDwk3qYM8JgHkwoVsH3CKsncgqQNU",
  "key42": "2Lpg9UvjBDF8hWmfqmZF3adgksDE98SSvZ8qgDSwCWHpD4SgfG8qu5PNXZN5JRd6ornsyCSjbR89QCpXdeAnBTB9"
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
