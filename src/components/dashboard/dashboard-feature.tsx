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
    "2pBauEggFe2N6aFVGkPBRxbmWKzX5sKoTko3VWWHHphHJKpyqYXSC2EAjSoWvwv8kdnAfP9CGkMv14WcUS4d7F4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZDTSbGtwnRP92bbJtMXgML8KsQGAaPBdWjnuFAXr1QofrasRa9dGwx5gPe8c1Zm1sw8o9LgmD6xmHq3KWKhANGG",
  "key1": "36KTrkk9MCy8n43RAfhVnZ53cqMTaYgYUTjXTQepRChypouA1xyd5jKGSG5WigDs3cNBQh4sBWgLH96z4bCj9tmn",
  "key2": "RN3ozMtju4by7BsfYHHVhnUjJXBXWcgGvfm73xmUVmAuZGxHQiJMxMsGQyekUNWGekWXkUrgt9QxLUVSm8KP4nS",
  "key3": "2PxbqvVYxrXTNk1vUYv59umPckycTzL89yAGdtbnVjLWvkft1QrbCXPy3uPcykUbFfvYaoG5nWAt1h6NKhE8DwPV",
  "key4": "iuPVp7UCzAfzN4Mykeh1XNak3YytL67CRzgbvW5eyCxnv5nHh6aw3H2cGmCSV61Dhmt8BRCyLArQgx8WHYP6vTv",
  "key5": "61wFeajCxcHhktUqCnbvRvpb35MS7FWhN5qJKHt2iYV1ZUZYk1rCF6tLCJSFbPMm39Fk2oW42VPvNYjeptfadkGz",
  "key6": "4kTiDUQUVNiNZ3uwCXS677VxLNfdCMvu1tPpxgMzgRBVUqJKBPTDvza7Vmw88Z5BMBaFUyLH5AXRKbuczFBzJVkt",
  "key7": "513nbnkQShayW3WRG22bMA1bMzAFFpj9Fc8UhtJKWDHjKaBhJWDuvdU2asmC8kgK8eW6gCm6kE29boQZJ2oWV4YB",
  "key8": "52E97NpsyPCrsXLQNtFFVXbAYoj1bqERZeoW6cZMgnD2THXrNomLMjTkGd5LDBrXtQufaiLMSk6jiiDesqRZRjpG",
  "key9": "u7GHT9PLnMbfNK3MuWBeoJmyDeDem5ien9gsEcktS9NvU8YzoQzoFCY92Yuw1Uqooz7iRhdzVqGTr3rB9JGE62m",
  "key10": "3K2YXbDXVe8ejgP5r9fMcELuQyiPU7w3MhYKCunkHhMWAQF1VXKoeUfrdftTKHByvyKewWEowm7TVPvcUisJXdZ1",
  "key11": "3VMAkdv8KjSvCNiKF1MfHEQBR8mfkeaZivF1kehjrEiLRk5viFf7U9FDT8PGWus46VC27YETZ34GNdLKA13Vp2Hg",
  "key12": "28tDriMQbwKqY2ktCBCQS96cukktcjhYnGKpLLoWCinhB1NCubt6JBS91HzfCSFn4F9ajkAcibWkt5Fx42TBgvNA",
  "key13": "5dajpR95QnzomLypNw3LntY36xrKTVi4u1v2nZEZKoo5mWuRvC6EHB7BVxLCwDzzm8rnvDdiyeHpdrrsbYU46gH",
  "key14": "5b9PLJBdPthZMTik6oYxL46xs4edX2NQBJJ9MHaDDZUy4sHjqNvES75ehLqAZVPJndhmTGtKkfQn3LUUEfXNP4FT",
  "key15": "25AkXcZWEw6WQ1Ugn2DgagZVZBLXo5HhKjX4NuU3Ezrq5AZcEp6BrGg82yQzWcWF6C42fA1HfmPfV6mzmqzVBjjE",
  "key16": "3NZf9VAXJdw1VSCihUdfB9KwgL2uiFu2czbhZZAj47sQ1rZ7A6iRsA6eK5iwEj5Ddx7E8XkKudaifCze3yhN24r7",
  "key17": "4s3hKHqPgZ3RApmVQH4Lzs59DeUhVyqD3scai5esrU1Fd3gPCyzVjV8c3G4iMYzpLaE615LM7KpZAQsn8XcYGM3y",
  "key18": "3iicbbJgtAqnxjBcc6zuXj9j8vg6uHe8B4qMjys82SUaSgEVdHaRkPLrcYLBbsPjdAacGqDMcNYPqHWJQWxkKEXe",
  "key19": "3N3MBnP9qE7KpjWdwSzaiPamf2WThSBgvfBVi1uScFY5gTrowH6y5BaFKcwj41TM7h7HNSxdKKD8jzZdw5dB42wS",
  "key20": "eV27mb44LeYPHNTKfPa4sFWcKoCnGdjTkm3JX6FaG1JNK5QuWcm5wPKSCXLqKFmcMW4vyboT8qzbXPvy59V46yM",
  "key21": "3Y9CH2YLuPTD198ybXWFYZfdP28Bco9KtyaoLgyeu75nymLhVoHNNAzGkDRHbqXQmWejpBcLvZfnYuwq3a5pau1F",
  "key22": "pSqcag9T7aNQwYbcqYCp4hkPSXXq1ZJJCD7qnjRrK4GBvo3rfysm6i6135EdckcaYfnzLryfjtwZCQrP8HTTfWH",
  "key23": "3sSSGUWkoLsafUi4Mietm2Btvvw6qKXTnnz11kgjoJSVTtFE1jJ4M8GuZh8hVGeNRDuD5BsEwHBZLA9VhoWyVAfV",
  "key24": "3tskNBxkds84o3UFsRAShmyhUMdfXfTpGjM8yhbPQfUZvbddq5z7xeXeQL178YEMcmWznZQLiyr6j4hXP9HHSCw2",
  "key25": "5NSvtVJwzqvXTvj8Yv741PQC1ytjiXwJ126CUW2wKr9hZX5SLTVw9hYdCmX3ioAUq7Atam1CqhEcSD8weN7SQ2eg",
  "key26": "336airp7SsWrfLGzeRY8Mr1moY5TCEChUa5JESsdj2JX7LPTD4G4uF3rEe9BABGBQdL4nae3ETevaNgAixzQmiQx",
  "key27": "2kDjjMJK6uYeVr9GgrJaUgbm9czoVXc4Yvkk3qjLUSGpoNeG56iruVDkGGW2HnY9xpsCpXHDFjscA7aqKnUdeUp1",
  "key28": "52bcxFitXbPPLRxfL7TLuJRQrAVY81F9PyyxWZ2Kr2JhkaGegZUyYvuakY1PcKVLoDFvaZY5FMYTXXbeETzSX7aA",
  "key29": "3SAu5JL39Vy7FYqGLCEZ2gnRRo4Xp1HJJN7hkfwVD94fcSrJQFaa7LjtFVDme3xjqVRNcvoEqHktrqXqzMYHxCth",
  "key30": "2tRJ8th5nu1cRoD8hGXfcW92RQ9SoBmQv9BFckpDdBut34THBw8ApSXgHpvVcneELFdtVjb1RoiUw1JgMGhye4RU",
  "key31": "3pUYiKqVf2mUk4bYPQKFSbsxhLxvb8FE48ynkTJ3CibhB7Aw5bqHvMsok84NVvwmDKtF2QjAJxFwgk7P4cpnBqVu",
  "key32": "5KH7LrxCZforr2L3g8LpEStLAZRRNUh9xACfPgpo45Lsus5WfuX4oUUhRxhscmEuHaLc15cBMi21cNejawz8y8Zw",
  "key33": "UM9eBuUhGCWBqK7xa4efWjUWXt1SpxcwLSqah5aZWLdM5xTVz69TsRf1UjQSXbXbCQWGrHC6xVdwd9VVYbP6Yyt",
  "key34": "3Eu7y99sVzsRFYqHe65Vb6NBjLzoigLJc3W48vokwnbNV8b4yioa9PQDMzVEtLgWvzypnadsQGNQXLxz9zSxhpS",
  "key35": "61Wspk3C7Sy78k863M5j6L6sVn8yBKBxxz4gN8sdEGeXCTn9iFK8wKtzoWECPUe23Yednxezvi5sxvZomVwXVktB",
  "key36": "4Bz4qb25e4t8KaQFn3wLV4a7UnMgtxbwqUVds5QonPK2ScQV4fSAvfvf3cp7cZMYvXGhXX3LC8T8zVD5ZJFACGu5",
  "key37": "2WLyt4msRR23m9SFjPAa7zoYiiG1rCdsP6Ninv1hYXHh2NEVtyvtXtvwTHMAwWiEt5BLLvsQeSykYvLjhkzhnqch",
  "key38": "AAjCDvnowqcSamyRQifJWcz2wroLXctP77RTCoBUPPzg3wCeMF7EDEq1R6VksajP2TtC5LpPPihHWGUyyjbezBV",
  "key39": "9PSwTvBgmeenMmLHwF7vEVb95urABwqazcALFVcW7hJyHZ7Ub38SbPWqDXyB6ACJKtGB6HrJ5aszLDXzAiEGD2Y",
  "key40": "qEJQA3m53uR3LHqXEJ2myVeUCx7Lon5uBWHhp7mfrWe5q2NAMw8WNeRfAHGSLPN2ak5H4NBTNrtwVWX8FWKVZra",
  "key41": "4F4ToMdF6yJXuf5y79QgTQHzT6hywg4nZpTKTZR79vYwfbjKmifT4FcBBAyf4HprQjph7UnrAjKtAqLiDV5U6AHj",
  "key42": "3NohKmMHVDFgCKhZkkwqHRbYYYWeW3DCvSakpZF2PSPhJGa4BHgqBsXRszHYMoPwjVqoRznsW9WejGyu1c2Ad8V"
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
