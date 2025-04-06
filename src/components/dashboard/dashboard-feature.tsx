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
    "5dfzuXLCsqNZbmz9S3BamxLyaZcfmsFAHGMTxF3zD74ug9J9QPMV6LAbwP75AaynEuTCsLVhcxJpsrs3tRKDvUXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bv1SdSod3SBEzFd238EgizcrD6vVbyaVH6SUVQLQazvyNG6ftAWV15UwvvKghNkt1QdDEk9C9p72cJx4LUizupv",
  "key1": "46cTXUunXuFEUs3iXjGbVRSzPkXdUQqcRpjaRwnu3Pgzz5VAYPrtdik8Amg2BgyqK1HeUdCdUcHuvAZEKk1xPEZH",
  "key2": "3aHqzSuJNcsPvyCGsEKRXUDzfck1zvQvW6tipTjgeZ1EQQRbgjCaJTKCYMaJj3qAG5Nqx7mCXRfjNcmfep93YTan",
  "key3": "2r57Pdp3sQVHvTqbaXETMh5a1RiorH84BjLMEAT7taxhgbrVzQGXSYSKCEySzYqDFcBrqcdmEBoZKhcEKp82WvCp",
  "key4": "3nx6XK1qmAMh7RhKzNEZCnLNyqWHY7ieuYZZTXr3J9NzpcaHdVCCNYvAs53n4sbp2CZMQ6hdaxsztCejvCHoN1aS",
  "key5": "5YtscWBqEnA2VPs6SPrMcBhKgbqWWXGo1ycu7yasjGTpVEe13fEYpmkDw1H3GFyVxEmPVvHAxfvdgj9We8v3RTE8",
  "key6": "4hR7bJ26erQzDm6zLYbRpMCDxdiYoGJ9yCFmJmFVKUDEiAvjppkmSU9zjiuBJr3fSGNhTG6MXNzqAuwUXJpfLnVx",
  "key7": "2L5oNEKn92eLv93G4fWSkeDSS8Crrq7ZdBRz8p3P6FfPFtteoKdJfDYdkZikaRWVf8gVNhVTRvz9q8Jt82GQ9cx9",
  "key8": "3M9VqV33KMZZvakE8oxaqsFU38vKwvXt31YY9YUGozC6n8LJtWskxwGLVuJ62trT4KDGxjrQ1DRMPUMn3upzegX3",
  "key9": "XFZ96HcmfC6qwn17bYVqRA6BVGVQWaAfibR6xKsfgCFGDht3zXTStgWMXbA4VnNd9ajKxykwRt1kE9KeavDbHnB",
  "key10": "2umTkLGbDHv66y6iVtTX4swmJ8ksVqtnVB6TA6PnoHFTNWyBXsYfQ9UwJu1mfXYZtYP5T6Ptrmp3kWLQ7A4i1TK9",
  "key11": "62nJgUy8u72gAbiyxV1RcrhgBq6thoiUSws8KmCMSCcCHCgpHRXzTsbbf5g7LARDSuD5JGpUj6EFwu3NLSaoaP97",
  "key12": "57PtHmYjA1B2j6a6tUX3ruwN1FTYEqArLnobZLtGoP4uvhZAnBcoXh6oxH2ZcfPuKLMRaoKte8zGnBXrqYS6P1QA",
  "key13": "527T7kMT4cKbVHU6ASwkmPeUQj4oBK9S8Rh5JVNVxgTrD7TsjuRFKVWT1vR9H8xdkeAZRBKebmEdBqZmqMBCJ7EY",
  "key14": "3iZiXMNwyHbQkx1vN7JcXWC2su3SyyQEfwQVDHYT5wyF3NrWV8Zo2h8xHNacCCMSm4vGgk1ppKUeN4UqqMBa2AhE",
  "key15": "2jmokLFzP5Tq5HfNCmBhmdHRHdVj596tMQQSowwCQ6cZcSwsKgi8tAmgbNjTpvfxW3aPECB59rbp1SiWxsNBDMML",
  "key16": "5GNzwppT6jAdQP21zyiAsLMcbJk7eVd62Do1DZftanJ2bEjCrWQwd9ABgPNUAmAvcdwoVMt3tBXtGZcqfqLxUEaz",
  "key17": "nYHz4ZT9pCvanjJKyo2pKszBJEseoAjSiBCevaz5nF2psS55FkzMQbmShoHMhk1zmJQn6bFVnYxVfiGisV9xJtu",
  "key18": "4abXBD4JkdBVnuuAVyysr53GvvQHpRUknKz2teYoYP8Bm83yRCCir4VTqgtrtCTiX37rU5DFtCjRPa9zK3xaPvhh",
  "key19": "2szUpJx14BhaaF1LKFsBjJF4VCeKb7VeyuvLTq94TUa3nxj4oYXqmgMNCpECWcYxZpTez7MRDuV5apsdaXHQb3zF",
  "key20": "3sv9SMRW3zFyPu185yy1RSuYuKavVxHDqDbeQ8YK9V49qRTCov3ZpkDdpFXNdfbV5ib8WoF9tuj2bRmSc1Ngpf2L",
  "key21": "3BoukJJEC7MY9TQYEkPnB45q25fGtqgUJ6Ba3w7VD3ykJ9DgTiNc5Ydej4BGPVGv65Qh6c5XxGZcmb5Dy5riQGQG",
  "key22": "5PJU5bSu3SoSrZfgGaWiwtoaqjfnsWgZd3BJ5NnBQHjUegd276oh7n6sdLuoDfJb9zGSDSmYE55MCFUb782eHat7",
  "key23": "3zfJjzRL5yNn4d98CAb8bRQZo31BnhUCZMLFK2xf6sCirN9ewhaQVH2gsBugmFtKGPKQMJZWp3oQxerZ4dr6UDi9",
  "key24": "56X1mRmSjuUnn7apCDbXCBNP5FgYfeVmqrSa1Fa72gWByHFQijgKHMdXzmJGw46GvYmMqfaqT8MXW4n2LZbqN9Pm",
  "key25": "4nKXjuXAdKFZ12F35k8JYTDAEh4YAbqoJuPYeSYwhjFxgVFetYMen1g5tp3ETRtgwo7CHzvB6b4bHvXDHYBvRdHq",
  "key26": "3pojLE69G9fyg33eVYZdusMQLyQp61tBQXA4sXMxjiV5uzzaH56wKzEmEnTNz8ya6cCF79jxUvuE6z1BWHa3C7qP",
  "key27": "mMmxSiAhZ8Cg38PMgkYtGDbMjEE7gLzS6h1rWrbTu76yNuiG6ZPqPi5Qi987mq15zrgmCohRfXGchCrX6c1nyza",
  "key28": "5KkDbJ33fXToFh8zDh4BnTW4VTVKV9ZwsqMUFD6eNrMiPmEamXDh3oGEEotfannMJivEhCUYbc52LWyiP5M711dq",
  "key29": "2B9pS7K9kCGTPkNjRT5gde498xoRBqWiguFmLBoctLWdvERHNjrEDCfTDrwL2MbnKmS8K6NJ8j67hBrknqXbkAi2",
  "key30": "4oboZjenYDEccVZWu2oJG3Ri5BiRMf9cyH99zAevQxNKc3sEXLCpER2QtJ1FA8FWMDmSYbvcLBgbarQJ7awN5F3z",
  "key31": "fYX76fJvcYb55DSfAYMnUhR38ndGE5jRw39uBkoGNzQaQf1NCnpKzRh5DvaphqUTZvwBb9QBUF2huqHCEogKAxG",
  "key32": "4gifZVBeR7nHDjfCZ9oxoPGXP41HDW9XPsGFSuZVobJGWyGRmf5bsDPYrrmsfnWmW67UEKzGEUS2jpnNa36Aet2G",
  "key33": "5j24D7ZawaW8W4yMpDX6H28JurTWEUwCWSfXP2LzBK9zTR8K927rF18Nzy6ri8pmuNMFLbadvWtAWuvdxmA8s2UF",
  "key34": "tG23QLWuNm7Tpyiqt9TbPTmWinRB3DFQ1JeE3D7RJHYKyfix8rkrSvrZMabDJkjW7h7DYuoLZ8kCdgg2LHES9tZ",
  "key35": "2GghKmTAnjZAD4izwHZGuQN2gVXHKbeeVadMDYLBSKtGEtBi3W2SGBhRDtvU1ypgpTvS4vegK2bveZLiQFUpPspD",
  "key36": "2QCAW8ZpsgRQkzGcFvyhtyDWp1L8QktdBNfD4sur1sLYpgxi7JXnMwy5KThY1UpDc8VkCEVgSESMQyPP1k6ENK1F",
  "key37": "4yt63aDPg3wuuisx3GUAWotpNZVTfKg1sDgGBQ4Qzmk71s4tsQX4u6UgC1UctHNF5sQjbBSKTCvbCZerPotZmpZV",
  "key38": "4keoPQ48gwuJv578z9t8Mi7SAoa6YXvAva74wKeZdnFemwrRUXQmWYjMUpcHeBFTwpT7RjvxnqZRvo5yWvQb5Sg7",
  "key39": "4GQqnKpkGH9LvQ4xSBvMMezsLJb22eVKxWdB4rqzS6azy88efDWVyrPSwY6VKqxvhSnMqXvCBnJSCc8bkbFEGcNR",
  "key40": "2XGsmgboWExRH79N6ar8TpwU39tiFRhvZPSteS1tQyYwsuFEKY1rLcFov8wmwN5vqVDkJPSQCEBVQjqHXAHjkn58",
  "key41": "5ULdFjBvUFa76C87dC5Bwbix6Pf7PKPCx1LqMpcRRG3MsoP52CyxKN719Q1KEpw5LSa4eDetC5CQEaTJbrw7pDwW",
  "key42": "2KdFoMCVdyTo32unrnhNWvGp4TsEP5TJ9sxrLGs3rX98jA5Q85ogNpBWCvKsMoXotspZRVHBCZm5Rt2wFj2gUBfn"
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
