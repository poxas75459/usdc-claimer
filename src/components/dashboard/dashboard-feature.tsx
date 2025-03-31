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
    "37j4rLvUfzc9LekVkJQw6KUF3JNnC8461872Pzj7hpYdTfEJMhDfc1s9G9R57h5NzrMUk2b7upodwMV4YJjDtAaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M1FWL96TDe7oWD5gcF8tnWC7hNt9wtWjczssESWrGLnC9YtSS3aka38Tp6JYUKcxeTHoJoipphDuvS4D61FDJ2u",
  "key1": "5hczA1DT4RwHy4mMfYGrbJKc8Z8WBmuqokWjAKZC9VJV4EDnLThKHSrtyhKKvznJTWyWaU9QcGKqLQWiGte4FeLy",
  "key2": "VFhBqA1NuLvcXNiL1WuiFyxktos4xSDbnizDL312rqxu1p2LfWMvh8y9YjE6cVeBU4o5dU2fNxyrtyZxCetMHWJ",
  "key3": "3dxbrSfM2FJrXg2EWGhfhvFsw7seZVnmfNakKocPjR44mC64eb6JwDpJHJtFotPeqcWqbiQs2iqYrRRP71e6wAQx",
  "key4": "DgDgQk3bgUfRVuLDmMk3qJcVG8EJCfqP5SwhP9F858HhaZV1wMYZWBnBetqyJBaTDGqsd5D8rVz1dDNapdibomc",
  "key5": "MY3bWDPsXLdgzk8u1wtJYGEvcGMFwrr89a8PWDWiDhVfc4mxSihTdj6xK4ujDszbitnHSnRfD56wsgUniCPtPkf",
  "key6": "2muL8dk8DCc6NipmhEZPsDL9LvSuVETaTKZw4BZUFaFy39MgfCFNAjALHCF8iTXuwczfxMC13kwo1gq69wDQW63B",
  "key7": "5ByoWrv4E1nAGue8b7WXPqXrFtFb6QyMejmePExX1HvsQLjVAwjoQbWYp6fjePBGLKE8c4jgtNezvQrsnJHy5hZN",
  "key8": "4GnotfXr9NXYmxXBuu1gePuEx2XGTGiJo5N83nsjwF5eDSq62ZnbNE82bw2zTLJam58Vn2UoayPtTbJRFwsFEZB3",
  "key9": "3RotdHKKTmQvMfyj2qKQA6TaFzUTzLaJqTvYBfrP1sevRfcJZtPjSrnkHnqnGBm5Kub4bwDvyuWuJvqg9hBEfpcW",
  "key10": "2cH7zPtHaQnUP4HKe1mUbuEVSLnqt2ihP8WrihMv7sBBAtgNMhx8hAancX2XbrRSm8NhATFsUhdPAQc3XB6tyTRs",
  "key11": "2PgvPCR2vbSjSkuUUnLXynySm2hR8pD544hCovSxB75Czm1y5EuTcbCGHjcBakT6YFmrHwKPJecBicX9dkRYpfJh",
  "key12": "cQesk5zrtxoD3UdAwWWDuqihaKpfArGQX95PXvEvKS4S5zNwJgg2ssK5de6QgXG1DQM1ZYBKMoZEVBVwMQKsdvg",
  "key13": "57XHvv3kbX34jcLwSXGter4tuLVtYkHZUjGx3TxxJPM78tJgnC8yVQ1Kr4LSmfR5CiNXuSWBS6h7zwHD5JmPhZkN",
  "key14": "31TBH65yowFYzSPCUuHoFpkRbqgKJB1VVCubMWn2rdvppy7n9MmdeN8LJVzGufoJEEfHS5jfUm9RfiZve1dHa7Yu",
  "key15": "dASocUE34CXEZroLzv2Qaf2mCt1LeMZMTtRXb6uds5HTSsxaDLJdRDL4xaUAm51CuN3Tp8Lqa9hKAK764u9jVWM",
  "key16": "2tHjDPzFzm7uqavTrDavq1tknfcVVrQHaHu36Bc8oo4TvPm4QPGaFsmsL7vBY4x71GHs1c1KBMuHpfW9Ex2dWR2z",
  "key17": "2RuHg3kbr6gCiadsswXubjrbYiTp1rvfwj6sHyZHJ43dhjmdUzgLArmxYMGGZ46xFGupDG7kTTe6ZWabby1EiUxW",
  "key18": "656Yipk8EDGjxkHNSt78JpiBrepmx23UDWNkNJB1BKBMwYhvGiNgtsgP9smsVrvFrwBZwENm6JodAaLnjp42BcBz",
  "key19": "29syfPJW783qmZWs6JB7RKhLJfTq9W9RJmNhshX1NYnmzcdYM3VZy4GiQcNXhmu6CD33LkiRQnnua8Fd8q6GjuAh",
  "key20": "4yjvWeh8ag8bwbARkvWDLd56edBp7Fk8pMb5pVJqSDqkEe3Vzruv7XuubRLGBpqB1sE2YKdQ3jkBTGPE8CAmhmQH",
  "key21": "3RTzAiSBScJ7CHdjXG5tMAePFJrw4mRD1pKXXHx2pCi925u9KHyxuKFHCBYeJezZ7JCVTB7AMWjPftuTMWkveo2C",
  "key22": "4Poj3tpBSZed4rjZow1rphc5te65pXbsZkNzu1BKGcbGYPZL6jLdqXKeX6YKo3pcP3b1w4DmUQK9kYC4MzuWuVUr",
  "key23": "5KvW2S6E36Yx4Zn7S6HcqdW7zHmgsvtViTnhauXeQfxATJS6vjqsFKHgfCgX8uaKuooHmZ7BQVLPzXeiKekBFbyY",
  "key24": "4CAFwKPecLvFfJkDEENYMf6wXpGrMWmdavnRXU3CPgr7w4dHyuymxd9ztzTQXfXR2WmsrV7zCgsua5vzqL8RzkmG",
  "key25": "5ZRx853ykMKKn1fi7tBrRAshrnpefHm44bgsaBWe71b822EjnBbXvfyfGD2rhAJdJsg9eCtoWGszz9739t5AiVcz",
  "key26": "4zS6BGcEBUGF3a98uh7zf5awV6yfWxL3mgHXdBqnBCQ3eUHhUU7tPiiP1RHhvmAcah3rhwdKq63nrQaHWs697mUM",
  "key27": "2NmSA3txohW9DiLMyJCQUsNj3gaegXz5ARqoQb2AZ3DNUxbsbGjWy6rLui2nwE8fyJq72NSnkig5Jgiu7n49bugo",
  "key28": "4nKLcBc6cjoTZgLvTGpDLR9gQDGnYhANoDaqsdYVz6VBBszBKAJp9khajo7rYHawa5WcfDoHiY7g3XeyiQWY23s8",
  "key29": "5hLRfcc77qidxauvCXsTWK1fkmtx3q4Y2UPDmbCws7sdLbTpFATKXQcEbT3aiEqfuZpaD7cfods1KWpAf5hXtWSB",
  "key30": "4nmvafwB4Q7SMomsyy8pwPCiT7uhvdoPwsPmYMqWHTFkG5hsS3BPLcHYQghmwhGENDbB576vqahcARgFxABjVGQm",
  "key31": "3pb6ASEGMDHk4mAUTFLEzzSyiEXhw2dJLrW6RhaLKwCNnGAfekLTSNcTkVG4TyMp4Ks5LrCuQicufQGbgYLFZshr",
  "key32": "rn2ZZhJ6fx9GuRGFD9JvWYpANMytRChFatMakCx76xobDhpBDqj5PJQwnoiv57fX9AapMLWuvC3qwaqQB1XmfoG",
  "key33": "4WbCKvqajv75jDkeDE3XkSeRdgMvvwNU2nYH9XShgCZSuhFJmTcKfQcySwG9yd3WWYkKXPUhxdBgQLGDYwnp8Qry",
  "key34": "PyBbzMcNBBx2PtaE6B4akcqtsEZqAYKqwQwXCyfeyiRNShC9Zes3iZTdYwdYNGfYevNExk9hxzNrQzWbCv4yEm9",
  "key35": "2Sypn5TzQfnbGSgceCVTFmBDhusV44RxJwvBuzVxrfGXpm67e45Uzrmujnj8GKsxnFYWSEoUZhkhg7QZ4EJH2U2U",
  "key36": "5jxxq4q8EeT3GxgJBoQVe3gDm9J7tsKHWuUFU7GfPWejb4AGmANwB7qzPgMZYGRysXQmheBuBmobXN2F7KdojJ6e",
  "key37": "4Z8vQUNPcgygnbu6Yuqwsy8UmmPBysBjoKdRTXmCCMPhThs6KmpvafV4VBcdmpMTL6QAhxbEpR79Cm4jEeW1QdWV",
  "key38": "4wHEnhdRGidNigfqhfzoxMtFCkQKvduqSYp9sskSvJ5RhuJxAvQhe9nxmEVCdEWWMF3pZufAxk4jMKfHuZHGJqEB",
  "key39": "5LxDRnbSooJdQcDzUzB3p4PfvpJ1nC2KbFet3JG7UvxkHTHg7HdHtuEAt9NUdP9YTS35o1pJVsLJEV4mfgBzyYSH"
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
