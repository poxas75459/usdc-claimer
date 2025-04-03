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
    "435LJiKbUAkTHJtHrRXjoS3ACcnQq4WF2ePekpQCSRdMZScop8D9ByqTkKY7Bq6P9judjT18YU61r45Bt4WWbofq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iHqWMirPSXJEAXBuwoBFFUjcitNq8mLYN1oHPkG4BdVKi8xJtbZ7aqQzwuYZgDkdBqUmeFW2kncDz8gRjwcUvu1",
  "key1": "4L2JfQWTXZohqfyzXerFqeWrr7XzgH5ryo5BVdoanZTELCg5Pj7FjmRLADkFrHavHzzqUqirLwJ4YkaUtjq6xyt9",
  "key2": "Kfo3Soofdj1SNMh5EVjmS5faJKa9NSwDhgxkcW78qd4wPwd3p4YN2qQioTD1TkQM4fF54TxoeU9a9Y74jt3XvSy",
  "key3": "5AMkbpqLgReWZUbNxtXdD1v6w1oTmoNVEU6AatPTxXgHjdTEXJbCo1N9CqqFXaJPjTKVBjfcQoG85PKukCbufaA4",
  "key4": "5Ds6qp5VU3De4oqKuDLstXtuwN65RMvzMUT4LXuJq3GUJZgXxg29AeyQPbELHk4Z2eDuWAqCMfJLXtiUJTJMUffe",
  "key5": "2dkgYE1t8qGD5Ux8cnpwFs31VeuFdtAxAUD5iQrAEu5RpuavMdyyXL3Vi14TFVWhX7NPFKniArexHgnC4hYdydfH",
  "key6": "64SiXA2GVCWJaKt85a6J78cdutdb4bctUoGqpGGtrdHPTSMG7Lt7hvtDFJW3R3Wtj4jSKrgeu6Qq9VpAUkSssvGM",
  "key7": "3H2BRu1doEFibXkgunxMCMfLpT2ZuB5LsR4X5aJ4EB8QkRagv452xcUCVgMaReBe8kVAoLaDFRyGbBVQdcXzMNmX",
  "key8": "4aoocdyNLtZA8Pjjme3H1jTy47BVJ8Fad2LKViaG29d29vCjgR1ja46vvR1i5XNsfDe7XdavPisGzXsUeNBg924w",
  "key9": "37xgXa4shpooRNaMULdfxqHj4H5geq6UufYJW2RufQeVYNFEXacTpLM7CVzZwc8aTG7S8uX73fCiycAsPTnU31ia",
  "key10": "5XiM5vw4W4XeMLuGraA5DEBKGX61PW74dGWTYWUAeiUN37J4RHyPPj3KQpECS513sTF2ssBmWT2TvzYfYvkBbY1x",
  "key11": "2zmpeE9QmpPjnzz1ykeqG4D1aBWEDf9DXXtHHRT4uFwp5aYJ6T55LUapFxCDNEqxALLGHFZQmBFFCpL5ZZqFveEB",
  "key12": "weT8YvoxgeSk4bTsmnE63LfgRu9RHKjzjNFGkd8EHEhGjLNF6i6wPEYjC4WEfNx5fWMsftTs8A4KnLukFoLrTLw",
  "key13": "2hJM1CkLd6HJTCGQwJdRm5KZ5ZVM3QfGwUkhNubn9Cw7eRe1XRUd6xX5uT6KSVa7U8n9VmdJykqdetj6dPkNDx1o",
  "key14": "5C5QGjyAQ5WxvCVh6KzC6XBKerXfLzTY5Nvh1qCqTScGzGtso2CLbA7YyUBsNzMyHDYHZzC5Lyd2A3WqqrwVAk37",
  "key15": "23tMhFy6RtrBfbvy72r8YWYB7ztKpm1dCuhah5sobmUeDZLFdeJcKwk7rMhH9Gi2QTNqJypV4Fhm91hMTEoxTq4N",
  "key16": "LpDP56yRsXWf3aL3jAtpkebTL1U5xaasm6AtZnru5zksryu3DKKkGxCBaGhCKid56MGV6XLfBZQ9Tz7BFQfdt1p",
  "key17": "2tVLJEPuE9rViVH48K5n1dPkRnwxP8zd7YYoG1Qwwd2R9QbhSauxXTjbpFGaDtJGAuRVHZo3SkAMdYX7NnMV7RT1",
  "key18": "4rWBQC7rfQvbEQaHnE1D6CFW3xWXJDKcpt1iCmGqtzjXGLMiPnpWqa18qsGXFzHScKUPDoxRA8BDgxqyNjfkbc48",
  "key19": "2R4KQF1qoCZLVTiByaU58p4SWEYPJjEKhh9DkNqYmobYR1BQX26ebH1rYxWADpAFrtPEexYhcoJnSdX15jh7bsmo",
  "key20": "GcrzeMwhGDWLXBnVNPr1FsYMUHnQMx4VuHWHJEEMyEVbGD4t5umAZWMkC4vk1XMnBaV88qWexLPqBRts2exb7Es",
  "key21": "hDVnoQJRHKeTRYe9ERCKU5irUqhDX71Vrc6vB4jyyymwcyTUFAYZw22Lj3hjJuVwaP12KEytD9bWcZ5NYxo39vL",
  "key22": "2ALPLMQmBQbQKSdKEV1HLPxneguoCbYQ64tQ7WjrsoLdEn18RtrZ96dJm68qea7brCPG1RNLsnyW4ZbhnjDjjyXk",
  "key23": "4sdd4bU2Mt5skKUMZRBZhmHowzuZuGvrfAUSfhHnuU6tJ6C7aU88o2uSnMoArhyr8QR4GzdEjiauUSBaPjJ6NJZU",
  "key24": "3SCAxtUHHffEfmpwAbonQMhy51Hp8P3xdGqfxd8jCE3ytpsJwQNuRp2Eu6NULR9aADHpVPAm2pHKTa4K5ujnMrsb",
  "key25": "47uUEnrDHeLgusoMw9QGXfjcQbJfyerxzYi8QEfWAEMRvxoqox14yDkZDtnW2tzXZ821mAFf9ceGejU7QRLLeNZH",
  "key26": "44jo3oEdq49es7RwLDW2DMg8pbaeLhPMeGSZ2efvdAPcTCA27bKGGDB56p8f2jERwQxJ2r19nKP9kkaBCbFgYCqs",
  "key27": "2rnJNr3KrUKZSYMeKqwMk9RNFH24Ce1bQjtuGyrExE959hC7ztvTb91jB4cZp5mkgTLMRUvZ6hUanbFaVte1WhhV",
  "key28": "YyW9LMSyMowUdrCaAQiMNtSRUiXWc6st5B9tkPDdLeFypsMyQFr6CtRdhDByyVSr5SMv5K43GJ1v9rudrtuQqFz",
  "key29": "5quMH1t6VYZUCcd9AKjYPwPM3Yk2hwEKcc4fVEADjE65rXF9cbAbTgoys6e37KMk2waKbKnSDGjMkzUeRmBDMiFo",
  "key30": "5YHE9pziUNieNNeMspcgs5EwKAZB7huz1qdK2bWACC1nZTjLhGVRZxsidhUcqYZVsWrASDawqf9aKv2NP8Mbud5e",
  "key31": "3hQtsc2Na7Hyw8oeaAL9LJv1P7SxB3kb1HEUiBLE8T7ph64e7E5UAQWyDuU4VN3MmDLxHRCX6Vg7MkGoK35mZrpA",
  "key32": "45dCHCNRwszcqkTxxPR8c1Wfno76KAFKt6jNq2V88SthJJAwgVLSCr9b8iwvXPkBibomstmiMeG1MJBQoKhfsUyE",
  "key33": "WBJoqbherXc8UeqXyDXr3JjtTSdfcqtsLz7bA9quMRXgArTqX3Eg9jZXUHgbXeGnxR8Z9Et73NwJirmjuAhgQSV",
  "key34": "RCh1VPjQSAUar2NRTH1Wa9cBWoDAFSoPSvGFtHVnpxUsL72YoyiCvXNUBfHw3Bc34WoLcQuJhxMpL3WG63kyK2s",
  "key35": "28V9Dg2AP9vW3vGNczH38w2GMVqaDetP3nre631CrApDKFu2xW9aCAbfdvNu3Vng1kTrLWGiR4mQuzn4HbEzqkGZ",
  "key36": "439Sht59RPokDBZiX3URxf5oT4Ttur5oxUinPZ1rX4fzHVkxsPjR2DbTgq9tDJAdXa8yPSSpcAMXu66ACaSTbDjZ",
  "key37": "37uEjGusnnXmUyJXAkF3q9AdZx3H7GJLWwe2aKYNbLTjLUEGyX6D3VgHaBK7Qcw4yh6bVw4oQZhgs8tusSzvU24B",
  "key38": "3NrnBGbi2Nj3gA19SYwciNKYZU2vQUjoMXPV7VBtbgyj1g4R7sEmEdTNBdut62syjvisgyfoa2edvjuJMShr7ZVt",
  "key39": "4jHC7KoN3DJFjMrGP9EA26c8qJovE1kSPMY9k2jAwccj2hp2NjcrzFM7Lw8ZhSuSaz7nicTgEKWPf8K2huBGUtVk",
  "key40": "efHQcdovMtBvberetYvY5F2bSaBURLtiddRsG5E5Ptfn5ZGBifGNVQicdPWVbfJCApKR4hnutP3U68WypLfDNyM"
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
