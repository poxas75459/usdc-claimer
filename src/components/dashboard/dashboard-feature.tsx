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
    "2gFwcL8HFHeTAL6PXpUhYWppaTZXkyDNx3gwV3YYNm4Ka4GapRgJ79RehQsrAt9XU2L7KNyzfR1bzb6dztsfmSSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52u7ad8ErsLG5nykeU8Hhkce7r9UAeXCqF9pZUAwGy5EHx84eydD6oU46SkkJQzsruX6wJMD9a5zG7AgSX359Vmk",
  "key1": "2aVQjdQroV9qgNCTHTxomFPKqmFQb4MezzS1w5YLT1ydqkJS8AUgG8DsBCi8F2XdexfY5MWnsi2VKEpr44jG6i6F",
  "key2": "4zAzUpEGRHD7uQCkV1Q6Radv5r2CSQZAnCi9ACSue4Pr3CM8dwLbn5p1u9ATfZ9C6sNNNLCSnSVfz15h2xq1LXRi",
  "key3": "4siexPpiqLMshJWcxbWytmHVxLksxfEFe3iMPWgpUBSUx5ti9BuZD2LzwRLZJrsfpvhEqoKaLJc5UuuxyqGsNCGM",
  "key4": "4ajxyzZ1HrVnewmx348QintorsPCnFYAcyJ6uAf5A4yUQdev1pqzqotkjRekvC7jgPTTL6fA1LCYt5t4j4z4TJpu",
  "key5": "5Z4MP261rCGZufvks4BuQ5rCV7t1Gfpmp3ULqmdqQEiv727UBYRUhziq2RvkGZLyfQWZ5UN5SGBbcKkyJpCXP1Ac",
  "key6": "2dWGZ7JLW1w9VGg5txcfH5a8REWGcaBCcJEhAMme2pggx2ssycYGKfm8W5tXUitj5zUFqNTgrEqgUD5kePa6YbWm",
  "key7": "2kw1nCfuxDCeEwzMXV1uWRv9EuZ9PWN3P37yX5uaY6mRdNDjR6E2iMHAtCWrWfs9QhA38ETHi8gc71K3NNVpPikb",
  "key8": "NAYTwmhVZe8J6Nrq6C66nwsKJwj6bh3ZTCCBmLqMkM6VeH2W5v5vu3nG1kwEhqVMPqZhdVUztiR6ySJ275rmNE2",
  "key9": "5CqXU7CyrDaSGspjqZ5hyqqu9n46XV8sGRZP5uM2jdGcU8vSjs4d4JhBvMzRMt41LhsR6Ypny4efwookzWfQKpNh",
  "key10": "4dYJFBKpna61cDawTUaAG32rCQ2iaS2vtsxnwPnzkPZaABJYtLqdzNXMXJJr2xJXVaB1eBv3RThiQLbFveMrjQdc",
  "key11": "5aAz6HnRDjAGhDsRrRYFKNhafiS9iycZazfebA9C8226heCFZbpq83sWiLaGAJxXMSabKhwifVuJvxgFKdvuw6Zx",
  "key12": "4h9gmxi3YT586Q51Wu88F2QKiwkf8kmyWDsnnjCdEEjbwDxXjxtAPabdEJjMGeh87d7EYb8BgxU96U6ReCBwA68X",
  "key13": "3WzgijRvmfgTjv7k43E8uumMkio3oABk1YuKWFkkH8niXon4dwLfH7eYGqP9uRyGGeLHuaD4JckUs3euVdEc6mCk",
  "key14": "Gv2gVGrhBbqZn5Q7GESyQzoF6BsCDnAjK8tycwEG9QdHFpDEexGhRrFaP2iJpumb5X9gbZsvKjK5zsXQ5y4gWYH",
  "key15": "2osDXpzjPCuAiQ2basZXXcBDdNZmrRvXi7eG2mVUg1MdaSVxNoCpZd1afDBSSxDw7jR49WHgKfDvyDNAWJZruiit",
  "key16": "jUzVwY8qp2ABsz22WYUxfwfZGp2uWN2jbrgRe4VBun421VJrNEoQsMNyVGxLVyzS2WL2FLDKpTgEKVNTRjovDk2",
  "key17": "XsyKzbjhkZTBenAxSKmhqGs51jyaLUZ6ADyRaaA8MhhDRs8Fc8HbZPPVn4irU2B89usmfefLehbUMyA7ok4pRDC",
  "key18": "2Du8DPVAfBt2AjMraCp8bet3U48YJikyCVCxpHTeoa9Zt2ZRnyPXE9FKMiqW9ic3tZ98VeyMDqrkhh9rRCNXNt72",
  "key19": "4UeoAcWUHncQb5R9rmR5py9yfsbFy4N3AVgHnBFXjytRkxCEcvoBq83PdEAB336tPs4vEjLYEtV6yUG12hNxgTJU",
  "key20": "3kjiEpewgVwstiDkHpPFCnz9wg57UdCkmpW76jv5CSdNXG5mwrnLxrQjyCv6HL7g6HDLpaZQjmiFRFjPYbyZDnPX",
  "key21": "2LrPKEnJNqewAvjfFtAxcUfudMhC8brc3AT6D2fihsZ9qcQprkqqVuK6vY5P6gw7zLYBBuVeUVerXK3FhJuiZCav",
  "key22": "3hcBfQjkgsm4GkyX1n31CdhrK34WCj9TamiEzZ2BDCe7cTvoZnoHZfLQP5rMJm4AujYNApM3wP7fZ6HnSmKmR2tz",
  "key23": "5AjGNEZRSUDHUJWhbEfLjAEFYuvaB1K7kztp4DDCUgoPWdUBudvYVC32BjoRkdvuhgoBY8RKfoW1oGMJQ6BniKyF",
  "key24": "Snw2ZFfSpWPDS9y2Da5naXTyjhFEzb3Gca8Kzv5T8YbVWHws2YG1WDEtYAmbzb29S261s2rv1di2UG5DGGoSvYj",
  "key25": "2yjC2dXoznwExJUz2iqa8XRtPvo63KPF9jetkNitK7k86KZqcCBbXyQj2CkRsinFucUxzxjac7vtG6ZgusYhouez",
  "key26": "2eDgrxqh29Lpj6ViHztcL8KhuyVTjPYn2vt8cw96XggABtG5gkmbfvdgBUJWXNgQtw1UyNiLoE3bGJNuw1eYz3b7",
  "key27": "3HLxMMUZoLUFTaWR3H7Tod7uNHpyPcrqaJAZk8FQZ9afUia6QmFWTaNUr1HCbTTcXQTCGk9cj3Wfz9gLTn7xyMeJ",
  "key28": "z32fy3nQVdLxz7X6fob3wTQxG2RHQWL8Q1k2V95AcbuaorjLKS8DvmUamGbTaWf5B6gMiqCjzSqjUmyu1UGKCge",
  "key29": "5Bx6iZeYk7hwD9fg5hJZU79ZwHJtas5YixgSgMscKTWjci4xson3xrjNV4fN3vybNb8vv2MP6VvnpqhArw5z1VKT",
  "key30": "3EYKrcYCJYejQ9scUnDB9Zse7tB3T7es1KeKqLmjauJvBGe7r7e1QtMkLRkXovXEvHsGdHx6U3N5Fotx5D2nRhxD",
  "key31": "4eVKBosAbThhV7RyUPGJ3ZAbERuWUPyKKLoNR3G5Z9kyqPNe9syyzy9uQDXhQ3Krp82mrDA8VBb5ia5KvSSpzHpf",
  "key32": "3KqJvSBKWHPGeRAEp7Br6yFzThBojEmeoJUmKEurgy5qNasAVgNKaw2Jrs3mUjhxatHJjhZPPUkwqxWUm8VibJow",
  "key33": "22mfvoNSfGivzR9cmoK9cUoJkF2mSuz6eiC6QCbNJ27j1LiTSWG5PNbzWb9mGnPui2Y9g5Z6B92go9GTW8xuwsBg",
  "key34": "5sRezeXLgZ9NiWSp5RVu64yNe4inzvLQ7YbJRaB5BjF38hMyPKjVW4pjnVSrcn4qYwRCvmQox4dfMiyMU9CwSYUD",
  "key35": "4nPcfPWHzefRhQG417EYz24KXhV9pGmw5c4e64zqfyabqQi6Z5dCpCbB1Esvku37uDSBrMcdzMEvapWMNHia7mcP",
  "key36": "4Vs2L8QMoFkhut5E7bWL3NViGW2VgLxNpyPDaxeMm27iP1cdZeZH7NnJDAm2P3uS9RkGCY9TQSh35mrgbQxwjuTE",
  "key37": "sF8yP177mXgSuaQfumqwYGJJ4h2g4Di6p9sMUk8z16KU4bdi4Hy4qJxu5oetVdcZxiH5JRqCaGZA6Pt7pK7e5DF",
  "key38": "2JPVVewPV9fMdyj1Uh91FUpK489PGpnmwcVsuYHq1Zb1HbrEXsxGYz8GKDiN9KBZoDSXLfqWkW7YyQA484c6hgSm",
  "key39": "x59qfPJRbR7z2vp3G4ga2i4httG2LW928DWr7jgeLMR68ULztVComGjjt188ZBKJf4xy3hrojwgiZtW6h8kjcmu",
  "key40": "2aLaAAgUuitJCemrapcpSjGQaq7qrKsu639YdaoxRZEhLkoMXXmko8FMKM6WZdfPvxKgWzWY2fDk7fiot6EVprKX",
  "key41": "4Lx3RcfzJFwkGmUT2zwF9uW4Din7KdSrAUvnU267Rb81KaFLimTnY1LPLJ5XhZkHMiXcwGefUL2LaoKzKZ2WUAy8",
  "key42": "32oEVor7qhHgHrSJBUTR4YoT2Adsuez9zmWMoq9r4XiZDVj4PHsymT4q9irETnr3CYoTfqU7yYyvm3kv5S3koTW3",
  "key43": "zTmSuK5pSAgSt2f43qSZiPaNrydr9E2z8yofpVRWBsvLuUCrh5y6bn2Aw4FFb23ePnEMBmHbzvA8RjT4VcPqRFF",
  "key44": "2qLjGwELzRcPHGKaWHqXy59QYxoSB1nHCrvhts9rxWJ2FrsW8hY1WUnEpCZWdmS5w5T32rjfvB2Zfqnz9iWfXDoQ",
  "key45": "4XB9T45dsMubYNeX29oR7FU4M9NjWzqeC1TTgH97qXiUNfYdZkmzFfZSXfdBiFxJNbUGto9MejVmRW9f3gThuq2c",
  "key46": "2hsjqaXJyDLz8nbi5vKutqydkxe34RMyqo1F4ZTyQ3N3Jv5x2CxkMW54n16pMP3iSLmp4XFx5bgXbekzQL51a3AZ",
  "key47": "673JjEMR1HJ6C3obULBRGp3SUspxu4w1VG1tQDzyv9MfnUmbC9FEZSw9xje7fzw5UdSR4Vr98eDfs4TMCA18uRgT"
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
