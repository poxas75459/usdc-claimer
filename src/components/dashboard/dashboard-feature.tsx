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
    "5Lum76kUqkadix3JAXdK3p2dCdVa9QymQDssnoEsUckqET4AWWMiEdpcL1PXEmuzo3QWABdE4KKgCaNsj5MUvWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zkPAgZQvVPqj2c91tEcDS44s9DGHH7fpTjRHmU9xs9KYDQKiN86RcZiPZqvbAEKHydx7xqF2PtVMDsrEGe8NLVb",
  "key1": "4uEzxHMWCBzhieDUq1hU69BbGGAVta7oz7PQMwSnBewFqUVmqLDU57TT5AqFvLsgR2kgKagt9A72bs5PaE6cxyqK",
  "key2": "31aJRgsyBkSuJSEQHcA3FkDZFfghdegc9W42gyTvZ2BiRiY2PvsjPdrNF3QNafLYmCWHifgngjtTWWdaCCM4NCKL",
  "key3": "5WPg5qG1KAvdQhMEnHNkKr9Bwc9rPtnQxkwgxjkp5ya1pLxiCfaKqBrRiMdvrzgi9S6LBzbkWs5bCuo9JN48LmYo",
  "key4": "3bLcMAkt1FqVPoqvianMv6ar9HEBYDBNUD6LiM6uP7iNwR6JcHz7VVzNQQG3cWSfw9wWR12kFc9CAHb7kXvm1gpG",
  "key5": "ktMprMJVjqVS9XebTB7aWRyzSKyiMgwiCP7BVXNahceppfd46DHSSduTvPHXAKSWuzP5gWLA38ZUzFzVPZKgDUu",
  "key6": "5gvVCjRbxUVR6u9PAdPCNGuuiXj5Jc85sYrgqzfYR4jeYkRZt4Ei79qbQmgoDGEQbjAA8Aa8N5dV3dYx4omt7yWd",
  "key7": "5uXNrwAfiJRhRxG2Lx49FQfBL1fcm6J6hhqAPv2Y9BsLAoPBa2BjuV1h6cQsz6brXbigMVwrqrn7VoXBgLttvd3N",
  "key8": "66Akixy81QuoLMErL3CnE9nQgFPvFmXLsL3Bd2AGJ4A2GVmPBrmWBhLdL6Gx98v1PifSP791kwkyVT9LvqBxDgvu",
  "key9": "37S8ngDX7rjZFbE6fo2SocWyHEBKf6JEL5dnzFaYdxtwkdyE7qn1TPqhYM4cNCdakjxrEUQwBes4VsQgXmR18jK2",
  "key10": "5bxheAsvZXNwHkGLmFx8z2eDycNinKubQFjYmqQgDQerVhohcFMa4BdZiNyrySGwn7crSrsbtbZNBHyQ2B7YU8Qp",
  "key11": "5SyV557emAohusAPqDZibqswvnCNQmSpToyXYnqbWHnKvCstJZuTWdrRnVpKZoGNJU1Bkrdwuf1Tkfueg7h99TNU",
  "key12": "4cZxodaLGKnDmXqLUPmwxMCYPoyDasxxmKf5yZN8SnEb4xiVPEGC63xEt2rqThnsudsTueTEvWttzeYNkbrhKbYT",
  "key13": "2RU4BwKYRcjHiZ8FLaWF2KKBRiwEoT2GmvwMXE4dSUuVoDQFjhFEXcMofw442FjExo9jHYWVzKGJ4yjNY4TiehDB",
  "key14": "Pvd9oNNRK7MYuyVDXyoWbqHSU6oKqk3wvXiow9V8PRUoLJTpgTdWJQH3M5Qi23ctVMWAqvTwyA6FMPcmk6hnXhS",
  "key15": "5qDyWjwk62rqTDujuGzhmUgGzYBHkPVyUzfJiDKdrVRSgE39ghCN3r9ZquG9cMFzssKKgGMRgGB2Wf4LaXVCKqWa",
  "key16": "37ZZatneVcBmagYAdz2hXo8xm4xipcFGYe2h61SEjMGuNq6HfeDWBzWNqcSW6R6s5SYvhXfLWe4qF5HnD4HgLpHT",
  "key17": "3ZbmbdTLqmEhUJ3DjaHmntyk2jfx3r7k3FhM3RrjiaHHEvR4C5jYkDMKGvqCDyLscLf2Gizs8Ub4c72V7cDxRDLK",
  "key18": "HzVbCzJRRJqUnxeoMGTvF6cfjVU74jejU8TtV9FmhRSVjetvH9KeHVhv1We9iN7kVeCSWvv3qeCdFUgYPtsgG28",
  "key19": "2h2kuZ7hPURagQiMfUCxjBvfoqjaCHVAUdW9jWj8BAtDfCinNNaruJRrVGL7PNX6DQi81eZ63Y4fyxvmbgV1a57u",
  "key20": "5Xa1TQJZtazn43gHjVB7TgCoox3szJpiQTxGXeGKzM9YeAG3Jq7rDFMc6RvF3d8ZB6u77ev6Vd7haZ377JimmLwZ",
  "key21": "459bjRpyKchs4n7y8Zt2XAro55LAxdBZD4QSAzRUeUqnXudMXNn551nX4wygkUwXvkVmTE1UfRNdMViDTALyXxMJ",
  "key22": "56wGnWbLpVLXdzvyVxiiRzLrqvMWyKnocvxJ7ydTkr63JTXBWhQ1RiJY3VUGEuVxsAKzoQHGJHognsKXALgtiRRL",
  "key23": "5k3kR4bk93zvECRv9Pnj4VrpyoiTYQSt81vS8KVLMHD2zNaxXhUVJcgo7SKcPsqf8KMfcafkedwvYzE534PJSgr2",
  "key24": "NN8PMiN2b7cb73E2oVmn5fJNwLFhbsBmjo4gLAffUuVMhwCJax8pWigV5efGVhiy1o1UiWSWaHUnUYDEMGcANw7",
  "key25": "5D9pXfLst6USqggWJPTLohTMPsowZUY7UYK75qydDmdnSpAKZ47otGQDmgwPr6U4D8cj7Vo17GXfKe3QsCbMYpqo",
  "key26": "4zNjjsXVfNn5d3R4Jc1B3G2WvELV68hkd2GFicQbFTLHrPLWu3JirZzNYsmTAaaTpvdwps2rbzsh6TBiUgH5qiyw",
  "key27": "5aXCSkSmsRG83ZAMLf6pKTXkY6bgRWW3FVKzD5gRrKXx3Ggf3wMd7L2SJByW9HCLNXg5UcrcvkzctxL2iXadwxqb",
  "key28": "4pdw1TdJVicGuLFNfmnmpERJtXurEwE55gZff9fPmUVDh3ujkZcudYhby2a11m9ZMu89ofx79Ce4TzrrAAFk9pHk",
  "key29": "4j1aEWZCPnoU14xHybQtXJAE8ZTbHSps3XZUUcDSxkrCxSXQrMk964aXFguQ9PkgeE3EpnKV8KzxyVq5gskdaSJy",
  "key30": "2S5saSjh3CTmuVSCVWLX97fucy7sir7AFDNnZG5S45TecV9ugvc7yAYsYU29fVH27TvACQvmnL94hdFa54kxK7vb",
  "key31": "5oosQiohspBPzVxWoGcGnnZNQS6pqACm84J7V3RSLLxESXFSxj8h8SjbeWaSYNsyLFZ4MbYwFhUJrfUQwCAPsXv5",
  "key32": "s8YacFAo3g7rChrgUz2sYBc3sp1vakBQvuUjSxS7fFbVd8h3PThppHKTuKDVN2G6vx9b7JeW9dk7B6ZLgcDHgWW",
  "key33": "45bDTZRSnVjfGLXTkeDXaSEre4DhQCXre6HjJsd73MVjUhvcQc455xYmHAi8rdAD9i3QWKWtwwkJjzDvSXuWp6J1",
  "key34": "p11YD2fHeYVcT2kPToMrnWgpvrypHdxFGvGoj5bGerRZKexMV5RGo6sM4b7Mcm7Aj3LLqSdnsUxEm3s4WQwQWoY",
  "key35": "3UA8XfkNMAL4T2bCGNYLQm6v1MRZS5mJiQ9p6hxYPfHqQUAMsMRX2HR1Dq5AcRiRyZqk5a87egBaXe4M5ZmDfKyb",
  "key36": "4qmQUffXLvuuZqqgHvSaewH2TL4MyvvuomJMoQhbEA4dJKkfkX5whrmvcrXiRhN5B7s6q3mW238yTbuoroMcFXwH",
  "key37": "46ApGw3ve7i3BHFVkFgqA1K2MUgyGjKJMMCHVxbPDACDKPsC2EdTuQZHAJyK3feJxh5rSkVaEyxJoJYpKRuRsZq6",
  "key38": "jQhZh7CNBgbRx2hWdpvUQDomTAEB2t9FH5VKyh4yhrz7WJz5XokXCE58aKdBTeHTWf76iCPx92VRiZpwtF5bofR",
  "key39": "5qKGYSPMFRyzbwzh4o8upEKTdQHpkN1MHhHoazG5FJueAZ2wTSVEfYbhh9aJUvUUNii9LCpvPPv9RAs2oR3usXH3",
  "key40": "5WfXbenbpZPwZua3cVnVDReWrrjpqj3Cbzgzfpya2Dt3ZrijzyAW4F1wMNCWFhc1zPf8zDwGsauyzL8o5xzWP4S8",
  "key41": "3NuEUwQ9QAt897Y81RqDU8wTscCU3NCC7FxqAXcABGWenKxvf2Wk9VvUaDVjW9Y87eMGfyBQ9q1GN7U4c9CWfWzH",
  "key42": "N5yNfjt5o4wmYkivnHMDuAL7uWWfVWgWNV236EWUhnakcxFTQMKd8bSNvrDMXNjDmEHmHid2qFz6diJ2WrhwNyS"
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
