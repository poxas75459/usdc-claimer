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
    "3fR8EVeKS93Lk2mDxZzYMjhVTLxGgKtck9iqsvLyUEk6g99LoNdTMdihwHx8sZsEAvgc5XrhoNhq7xxZBfv88SYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t4nMEBtknwDLr8pA64muKCQcWm8LiZG7gJqvvuj2ChkJX7qK4Jswff51yrMQP1iNwAYzago418WU5QfgP4q1JJd",
  "key1": "26UoDHr1p5vcy7jMqpuKryKUX7CoxupUT4eC6aahAPEhKt7n3NxgGr1f92RMzr5QuJGNNQcfTD8hjb6s2ASiwsZo",
  "key2": "aaBbHEtq9x9rjRexiLCKJPEt2xqdVkE3HKAnzUwDqQ7wyA7aN6UzgVggMdQLTL8usB17YPb2LqHWjeA5ZpCUNVy",
  "key3": "2SkKWSK75wkXijeQ7AR9Lr9sCxfCf9jHg7LhCc9Je1iiQDRrC4ijet7KpB9CW3U8errBBmWQ2cM7p4fLW1e7hHaW",
  "key4": "uTJcdhU2FmTbxHw6m1DipLFaSQL64f511RfhGnJv9fkKTognxQojkJ7gowP6HMcfeysPTLPtnKjSiobgDYQhzzt",
  "key5": "5rsDm5XhYEuGo8SqQQuYudtrG9zyRfyT8T7MN1SLzp5TV2rSdifYweKRavcCLWaXc81yexCqacjDcgui695DQ3Dg",
  "key6": "5qYBGwnkcvdigZVcm2jbuuweK8WqXLBbdpZtcmidxSJtoER1TEHQvMEo5cwrPAAShtTXgCrArAw2cH8iVpnXnLHK",
  "key7": "2FyouTui2Y5r9LLrdUwDqfyFnAdm3NUWRCMrd2rU9AWgpTVTuMDex5AgQqUFyEgnmELRdTc77ja4PYkTXuoENBDX",
  "key8": "2S5XL5V9wpdE37Nqrf6MYLuvQsLbBzF6Uc5qhDAHz9coXZSztTaEceaj9P6h8zKGwwUcZ3hSSkRzjZFLRLxYtoq9",
  "key9": "2XNAYjBohmwA1yxb1wvqyRzTe4Tx6NcsjMzByhM5nht42kTqZLfwHumF95DLeqnTBdWrVCce6kNo1wMbwBLynEjx",
  "key10": "3gzFu7x8j5x6WMMF3SPaP8ui1LkcQynh7MdNEeGvWzcszvW4nEmtfYkeCFaH1FwQD7gjq2zxLKHEFBMojFc8JokK",
  "key11": "4qqUaomczaU3sMi61TZeRwzvF7DYn67thfaZ6aYjWLRdMGSfayHhGTgDcg3G4anX1RonYgCNbAyfcY6dy5tU6qF8",
  "key12": "5SFKn64pVArcP7qus7Rg8Fd7wcwTPDDVDja9XNTpYraXnNnzXRdg9dNdzkpo3MKKpuMBWEyRTKRRxwdgxGGGq5kZ",
  "key13": "4mAZhkfKQQ6R4sxEKb7bsePecb3upzxsXADYKnz4AuDoaxsMLyc2QqDpU6aZ3bFqcdZnzm8933prSr5yQZZpdLUU",
  "key14": "2z3ctLxfFLUtUQyt7duQDz35QMNC5j62THRE3CA78rRZxCfyLUuzG1kooYTJDKw3NE8hTVvd8iTrKJQgZe5Ky6eN",
  "key15": "8YDTR1eaHQ4QvJ84ggm68bpnZBGDjQFmKQczG5hidme6qYVQhET6QQuSUvKt7SWg7bzYe9YRCVG6cnXofzk3gVG",
  "key16": "5oUTVorSnmLLzsbgJEAEKCsJAC7CEXr3U3j3BA4Mwswvoog9syNRiwPSD8Mrx32ymP1nmpfH3vWJc6oXVLhF6qhB",
  "key17": "agw41WuXjfFKxDqLvxPQYZxxP98A1E4e4nD6KWdd44XE9dbyEk9RtmSPJsMdMmjKpXcUtHbtT8WAzH5TRfiAM5J",
  "key18": "kKSc8DpydU4rfdSHYKkjWWLnJQsJPzSnpCr7U1WVAbNAc4dNYbAokcfCYWAVQ98dPEH3LxVB35R2g7u1zm263EJ",
  "key19": "3aVb5CSuXzhZLkrhvw8nboAcapLVKa5eGkirooggJwu5A95sbUFuviLbJLsCHBooWzsMELgYC3TidVPFtNZWa7Du",
  "key20": "3uuo3xkHryeAV9CdNPsVXWT3meURLneXF3cJPTfFHrArv9P5azDGbFCR1nP6wSepetarYE2k1YYuCA5uHq7mkCLM",
  "key21": "61fQ5JEqCniD2oDMTfAYwroKqKM8U49vHetzanGTerGBVizYjUVZp4nYdDdud2qWD598W6spBGiyNFBUCe3mRU15",
  "key22": "7bjF1jY23mX1CNaqCtJqz1MX1T2uESTSJ1j25qg7pj1UjbeTDAmvaJQ56oVSBTDKyzG3BuMhMRt7d5BraX5VeNm",
  "key23": "61uT84cckUVALY1CCgL25pZf8hJjPYj8WSkYgZ8Tjh6itm91xbJtucRYqHt4ZHFEi3Vi2nd78MVjEJbt42WXp3hh",
  "key24": "fcp13acWUfED2msWLRcQYb6CNUBmoPN17L6hUaCHJ8TkLa8cFzSDhA5bpL5ALUfG5R7rRqE98bWfsjPREoE9eKU",
  "key25": "4pRQmM38RaGCJGiy5Cf86p1AYzzkCjdEQNnSbPasekizGHFKeiSiwByXj8b3gxFDpMKFJiox3EdKM1pXs9ifJGYj",
  "key26": "2k7xhNEK9y7NWAsGKjwMRZoDYwKJCTcUuX68aH5ZraLaTt4j5EsMpLLK1potp7PoT6MyKuW7iLa9fQ6Ue2EvSf7K",
  "key27": "5Q3hcgiLCHLs6UZwaXLZay6szVd5adgj8LSidnNBkdQ2r6FJgtseW6ehvWenCmjCHb6b5SdXM8tPeiEeCiZQDbse",
  "key28": "2YnreASm8vhEFfRvNjgSd6wTbj8rGVnUhEQP7Ewye675LmBf2smBABrxYBBev4hGy1ULgDjqoqjkCzHdztutakWn",
  "key29": "4kt8SV1vbopUtyZNjJuqxmYd9xsvE9eLpyZZiN7r1MQJqTigsFhk7Trp97oiWUfUiKR9XvDtWcwNvKTLYiBwgXN7",
  "key30": "4NCQnSgSxKxxjviVADmbnmW98r2oeGKfRPDBszCpMShqz2oz3finhowCQNvTVybzD4f4a9en4MJMZaD6wP8AFU6p",
  "key31": "3F9wyLPX5NwBpPms4g797P4uoJiAPLaS5aZcJKuYAREXtzm4ckGvqDZCMvoJhnJ63LAPwVFuzbEXxjsB565pPH81",
  "key32": "2eTn2wKaX7i4CsTjnq392UQeQ57TTwStfHSue9euGK2SGTdk3dUdyw9RFU3wY8tCtsGgRkVvj8oKYb86QxciCWuD",
  "key33": "Ku1jHgQGyc1rX2VSWcMWFSWQWBoaqTZcpWrS5WRhFCPj4hczS743iKPT6BJaPbsp6LHtmPBCRmS6cVJ4aCytQwL",
  "key34": "4mR4ctfas22SShzzMdZ33Pp4SJDAgWnK9jY51PCtPF4YQXNK5o2KnX2f6YFzM7Ry6VGLdfPTL7ebjPfpEP2DNyuN",
  "key35": "7ssDM25HCkgwMD9X3r9Ru4czvL2sXt976393t5iKE8q86pYCphh6jDmCicdhQJRQMaLocoJ26wt7uruDofLijT3",
  "key36": "5hhhvohV1VmqVGQi4sTzoc5mNsrQSvmeZYiUG67bSfpWpGp4rWwGjkSLz9jaS6mde9QBw3tFaBaeZ7LVHrWX8KqW",
  "key37": "3UsFA6jMQkiAkA3zfgx8GaCmvMM9rGPvT5Wy73WdhCBeQjGHBkHsoThCW82zyZyJJRBS16Vzx5FVTv9mUQ5B7Ayj",
  "key38": "62puHKthDcXDEgP4kRMMuk5VngPDn1ktL5UUpX3vVdtxrUr21oLjwAY1GUWo1S7aLz7DyHt66w8eBtuENTuJqqra",
  "key39": "54wm1RvCKx417zUNK7pedFZ291jqNihTEaqUd772dWbpgca2xmFJrC7Dd3H4FRngpYMKVMphi5PVAUp7YbgjQain",
  "key40": "4J1xR6uMYZnVH1D28RNoi9sBMV19RehrHauEN8BrKYNmHERXVijsFJ6zsk5pcRKKfCHRzXs4LnFD1ZQFNQSikdUZ",
  "key41": "3thbDgyfZc1WQ7eQWwFnDtu15wVVenFkwKwNSoe4dvTqbeXtqNcvCgRX3fCWJWRNbD99MydzVJf7tFKRTGa5Mnth",
  "key42": "3EbbTDByjFs6uwgt7sLwPDUg75QZsbTXmoMFe2FBpoCQamgCeRqEnztV59jUZrQ3zHDwrCvck4S1fA2iZ98GTyds",
  "key43": "5aCwq3Xgkthi6bc3EYJMk1h2tn89PF2QV9Bq2uQV7JDiY7WtBgnGh4Uxq36LwqacUhTK4f1gbVeFJZA2tgRocGXf",
  "key44": "3qcxFdriYb8MHkREvypFFbXWwVrmr2fYCLuxuEb1jEgr1592KGXtwA4HzCoXug2R91oMC7perQPTWLQwXFWoirsu",
  "key45": "5iBC5AMK44DS1bwT86TebHRjA7YMc4Gv8rgF2eiZqiFWRWtKCrQCptk8D4AP6ucTjxabbAsmYdzfyGqjAYfgGZcS"
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
