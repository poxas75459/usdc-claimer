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
    "2HHyhw4g59aqVTiJFaNicESaHMHyxPtj3Rzw2Xn4r1kNhtpGqMSMKB2pcNHT5HDoPW7Ldj7FBY4otGiywMwbYPWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YwiDLvJeUk4vxkLwDYQu58vvcy5irGeNPMhMc5tSTp27Y6Sgc6XU5B1ib9acGZTywZTB2tvAcotrFWFrV6EJdWL",
  "key1": "26vqgWqqanDcWw1RDdcKWvvUEH97KvzFMwxw8mFgkmHH8mhouepCYkcXrfH3P3uXL5sUag7itmPLqHqDd1NnyP6k",
  "key2": "2zt5TErwp7mDmsNc9SRN3ZRQgRePGipwstAspJjw75L67vmJUoi9qrE39s7wekWgqtUZ9Ps1R2zdjUBkoD5qaFWF",
  "key3": "3HVKHEzfcWptw8sKJ52B2N239GrNgcQMzPee6gXE3qH3JFymgAabciejUzM6m7yjTksYj5REJtafrucig81dhDnn",
  "key4": "39xAePAYdHWpF2Lw6DGEWYfG9xNbL47jJFwVZogBccDnE7Ka5fjWL9gfsizJYme33d8mVNAJxnpJbQ5S1Kkidmt",
  "key5": "4UmpiwvUJf38qiDJPDcxRtAJPFbRaN9SL8DYgYvovDRqmQV7iurabAiKUgpyUa6so6YzPRudrjWitUEVbCxXW5hp",
  "key6": "2DrdS5dgntzejbsvj4Fn3F2p8FgVAFYgdTrzYdvDHzshuhuBaeoDqyv1nNycyCV1XVNJ3VVMkBPfKBc1VnDzf27U",
  "key7": "3k1bEt9yNLJRBuSERkYcu6w6HVSncGbVXk5HERWjYjZGejdwimH1tAr8H8ePhhcVGoDzaKBtn4UnTfQwmWrf68Zb",
  "key8": "pUsJ2hneuC9VhYcpNToZ2GT31ShbohDuQzwUJm4Xbm2fs1et3LpadXvMfUZcELMAcLVU3cd1VGeU4J8KAPfXvA9",
  "key9": "3Nvchw1KmFdRG6ojvWHNS4QS1i2FYPsU32S7xdTAxwrDpRbiEbE3a5jtA1HyR78DFB5mEKACxmdYdfmzuwF9A88R",
  "key10": "5AhJbxryXminPbun6APU5EiwjA8bG3xKr4toBm1y4QSNFP6hee6p4RENaaqpBSLjEbvk21AWxLEF1CzitA7FFCUp",
  "key11": "4PGtq7bMbk17Mzg84YDse9G4WD5AKEB6MFQ5comvL8DRBz6e8B6ASVgNaCxyuWAyENdLysJfa5tdyANrEXwXWJb1",
  "key12": "35qkMmrekKiuKy2fZRRLAYcWGsq3GP7WYDY2sDErJR8bRBJiMLVBbMd1gPaUwo4MDJdaFAvatRa6Pw49Li7bHtbV",
  "key13": "3nyattGLaJusqxdxByH8F2JTVhikYgjiX1k4C5qEhJVUcNjffrqnzdinq8rHV3YL4b7uQVsAwXFsAsVRipDXDyqS",
  "key14": "5URfn2YwDKaNCdVYQaRVcokPuEn598HNrsLARX2kx76zvySfVXBQ7HXDfA2P8DYD7qK8t4svLMAtxEM8erLiPQM5",
  "key15": "XyjvQjSDuJxDAMWcEecS7Hu85qT8FgeFjmwss57Myzs4cYtagSNVG5ZS8HvqRy7sQUwFJdRCX592Md8TeF15Tc3",
  "key16": "5oeAVKFKSDncojhvKNzZS67nqRYfiXjCjXRuaqnDGo2VLZhc9XVb8DsjRQqDHG1nEYiKeuP4yBpVjq8scq1dkSUy",
  "key17": "2L89bWkhCgtf9juw6FStVUQgfMCDCGNXypCU1pqVuuNidxQAZYzcF2TFbBqxvAevxqm2MPdPd456txJkNMqeEWLX",
  "key18": "2cfSjeSieuX8eK2nirQSnC5rRFFU3fW9PjELPQNnDKKAt5P7rNZ6GCRRNNzkVXyMugGQvC9wVk13FQX7DAmM19hk",
  "key19": "2YbvwGuNGbpuZEDQYQWgbyRwNAknnnS4jxhcWvwDvWK5opK7Tae6QCHdZJodEsQJpeyvDXNmpQm2r446hZZJLzkf",
  "key20": "56rCzAjeMJwcq9PSiW4dhmCHXS9o7Pckjni2tFCPTuegPT7wdyYgKG2TE9NDuBRQzk7NK4k8mSCecWt8taUvxVoR",
  "key21": "2AS4d1oLtPCyGxzWetQtZRQ5q1pVtFsAdf8DPzyFaQAsoerMJWHeBBxSGpAPc6w8hwGr6WMP6xd14UnwVK7K8m8b",
  "key22": "54KUR25Mhens6TqAH4PsGe1qDXh7325ttGmqLXkVSyJAY6KPGwwoi7DQfatx2DU9vWxrpxiNw1F2KmUGBHePFtEp",
  "key23": "tXwrAMVRD9ri3bFLXo4HZGB4kY4sBXrphDhst85mG8JR8REuTW5QhC1JLLYJuyVBYRwUr13zzZiVZK9ptQYHLJ1",
  "key24": "2hrwtpBCxvWKLE5DhM1SC1vz57uMciBfVwYLLybJ5WSmAPePsA7vsy7xvmFiTPWJsdCj4u5XPtx1k4KUSzh95eMa",
  "key25": "zF9Wr5RLZFJBMiL4jYw97LzNfa1GSMNPuw6TvqNNvPutJ3wiYRW795GhaBkr3LxbhQpAyHxxAmYoM2JvcSZgzL4",
  "key26": "2SviaqQ7LJ885G2CuNuq4u5qMCVKucNkKwfDB38jT2gFUHPXnHD3npRUxSseByF6ECh6AfkTone4U9vdhspsUZKH",
  "key27": "2rJJAqtcdBR41fGMPuuPYuHZW6JXJZxJH7x4dfpZiKgUu399WFJysuZXWRo4KySP4LnmgSpjHwgz9r9ckbi5uBYS",
  "key28": "2PmwwswL8oKoNYkq5ZmPvs497RcR5bsiuqVrEJNZe8P1FWG1kEWcSKHM44KwesQsQCjK6GAsNJd7WTvu4YWxrEz9",
  "key29": "2Cu1BXRocJhuJqCj6fwyucAmaK5E8tDQeqhdRGYvkr1pWgnZPD4ftiGpxqeDceNvLvTci2T2sTdgDtGBRyhjNyYt",
  "key30": "2xyagfCN8TdsoCzyKxgY56AF54ZT3hSBB3k8s2ihhZE2qGreXYqENWH8eZLwT9esdDwEQuaYV3AR6dRKAPi5vNj3",
  "key31": "AtzkGSSQ9PU9mhUudcQECJrTRDqrkT78QKDgfDpRn5HoB3BPUbS5CnAkzGSSFQgXyYfWgomatFdADRjEyewf3Mj",
  "key32": "KFKTJyqVAQ7ZpWZPeYUFRgk3ijAvj4DZaa9Kh5PFkuEuaCy2tvPkMWniCiu2M7xx3HTAZpqt5a69GZe15uR9NFB",
  "key33": "5kp6M62rLvgp9TJPB1EKQUKwUPAoosudVdzqGiSqMJawVge1MvouVn7RCXmvHEqZwoLooPcA6HyJHoGJCdWDpshi",
  "key34": "4JMqEYsSkLWrZoB7ShXjSbEkfQsNuFaUBS6p1VYSZEsQMBbBwBkdq9iHKe3wfKNjokCVDWUpHpcMZePPDTJHg6ot",
  "key35": "4NjUWpXnb1kPwbN9zYsN9LKv1H7dsWtJXETmENjeYGRQZxWj7J1QDCG7wLujwsehV5udiHVeoqdW9cBCWj5JUJvv",
  "key36": "3DXecU14pjjzTR7MhDQC5UaHTCxmCKd6Hz1J79bajpY45WgxiwLLyDoC8gGaoYzcjRKYEfcFYdHr7rycjRnfeRPt"
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
