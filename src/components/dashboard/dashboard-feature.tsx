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
    "3M7LHYh877MuVTt3WoLjFGZ5aoNLP1BywM4uQCSjtKpvGdmTgePnPmUU1a2zRYEY7V978e732fuixbJvu73zawBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wSyuYLBQFAmk3ybH8u4x3nmrqrTbsMrcQEar526aWZheCahzcSGNgr16XLe1TuK2iYvuZ52mL2PUYeEuqhsyUU3",
  "key1": "3te44vqeUrvFJTohoGsVVYBM41VnWeDhrLnvVAz6NiURF9bRBg1VLtcxBti5iPm1hit8MnmL5A7xg8cFwf6mVRSs",
  "key2": "59MVypZvFgNmpxz9zufszEDUbiyXWJLGwAi6jgRqqAP91oCZhWhe9rfdPswha4xFjaeKhwPKDuWT1NPAgKFsswf8",
  "key3": "5NYAGAwytK8ybtsHT2Bw9yKGBiEoq8cKgUadee5eN62Cx7vi86QPiryxXMX7QJx5rFbdhopHqWYe1LRHrRUNznjc",
  "key4": "35Bb3CCnfkXb7Eg1ri877cLYm4uyMgDFAeYRsaewY2GdNAZ1c9i6a4D7mP1prp3ZBX3fAVgSGK8RhRXDDCwFYHZ1",
  "key5": "4Tib7zdGEx3Cq6M2w3mTPKWHAfnA2SUZJp6SPKpLGU3Gv7YnpczdiMwd377cvzAEPpokTcS5ufnVPKFPbErok5Tp",
  "key6": "3BQXcSBYz4btDAfsucoieBS4zkhphr7psDyNS65rq2asapiV53ZRw7JWpU7yAR22gLFxkzAUL91SBmYVLaVxptGb",
  "key7": "2CfUV2p6JGvBXvSkJMpLyNJQLYuf4iRwZBNcsJoQiMeLZhRn6gBvjc3tyePfntqdm95sP9mZ8oLLB6rBHMYni166",
  "key8": "g9gQx2KjtoApepxWMRtnwdN1rMBfpGrWpVzWcnewaH2x3RvoAM1Lt2C1BQRgFkdAYW812b7oGqmBE7Aat8ZMRh2",
  "key9": "ZTE54TWY43zesKUxZGqdJ1XRV6qc8DVuwyTc158iey7bBwh2tN3obHKosgUg2aicwUow2N4nbyJx16w7za5kMwA",
  "key10": "4eo4RHCZG3md3uJGhtsDdUBitwp2JnpDiPkZWoFkN7MufXghweTJ9mTn34aH9kMgRYoJXp9KxqC47spEwnmp6qXe",
  "key11": "3HtYfcKiqz2jmZ7HuXSowF9UNzyLDqV8M3kPJL1PwJsBJgDBM3fgBSXV5Ce9evjtdgb6p5hKy6sVn9ey8hxWzTkx",
  "key12": "2WofqvL66yjUMVfKwyHybTtSLTwBKqJr3T48JeSzRKoLraFvNnYFTZYKfZ893W3qaqztQxRhPMJfvdoiBUQvT2n1",
  "key13": "2T1kEGYYDRjJtzW78Cnz4PQBVeoG2gXGz1kNvaAP7t9WWCABBx3vncR3cY1fXuTfcJH2dHJEqft9SAxD1JJ9Fh5P",
  "key14": "5CN2xtUjXdxreu4KaiAZ221erDPf8xpQW7ycPT7oFUh8dMxKWtZjM69qp6H9MmEesB1YRRUC8agAKEre4CwaEMB9",
  "key15": "22JhRzmbe3dHGhg9FkmW7crr4yhaKuy2U2Vmggfoo2xGfJt4esw8txZkv8aczBN43ffVJS1QPZCGo6JNgKykKNdp",
  "key16": "5WRsAd9XqW9f4E7xdybXhVxhqJPyXRvWv4jrUhJaNSwZce5LZmQZVmSu7Uo2q42E89bh7Ua7wUpYBrKT66LYErfs",
  "key17": "2VwMHAsynmcYC8mdL3nGLuTj8jaMyDnQS1pDDXF2vfNFDByrPzbdDwV42tDAkmrjHCmbqNi6QCWJUHWgAzUwauD9",
  "key18": "8K76N7T8rXoPuviSiw7pj9QpZnEpoSXQQCmcpyuzQtvCrAVFDJT3Mw1ipWEpCfbmphfpimCEtBY7WWSvphXXAjM",
  "key19": "65GS2KY6xTkURewYFYyRopcZGAK6UMa4kDm5zfZePqhVoGY84QVZ7TznKGRT8vpYzN1LPuAEjck1vnV2RviKHyjQ",
  "key20": "5QRerP8kDn9F7Hn6bJaiDsCFzAnACbCumt4aJhR7ZrF1bG7KcbznmK8hFdXKh5Bderq1AU3rCicHXLcx5rC1pzNm",
  "key21": "2fXZMDgKwJD4Vap2qJLyHQon54rfHxSFWGsz9yRgCTT8y76FZctdeHwxgKGSvapVnTRApo6me3wffAbi9iMaXzAc",
  "key22": "3xy81nGonvFg5hE5oRsX1YofhPCHABFKKXPa9FbGkhureZxAwZZ91fp7KBVLhG4MwWKMkaHkDsP9XKw67hGhaQhR",
  "key23": "ieNgUaJ4RCr4w3grhRPqJtaEvmn6qWc5nZhwn1Mu1Ms9kSUQx9qVFLRk2Lt3Vd6hhQHRihybtTKkYA7CyEsD5E6",
  "key24": "43T9jcfWTw3Eq3Qtr4dwbmZ95gJUyXHN1Hxfute1QJwPm9LN45kdtiWNKBpiGQbtGqHFjH2jvQ9KCgU22hfSDXDv",
  "key25": "5ycmCTNVSKwB8iHUyeyRKeNAcgEAfrzbxRawi24pNAtvSUzCrDnqoUYZZKk21xfMNCJneKkugqzVMJXMKyXtuXoQ",
  "key26": "3eM8BKHrZ993a9x5pjewLdWkP7XDZkzH8VRQsBj4ez5GmkN81XBuUVrjA9RNzxWSLKVSxNQd99y1EAbeSf2tJKie",
  "key27": "ViLg7XQVYkJizpAUmSD1T3acewpaZv2zB8aZHBoxr1CtvWDrMsQ2zNrHm9nnN71yQWqdZe3AnRu9QphEGwqLUw3",
  "key28": "KWFw1JWLHopbvTDRrtrjEQfYgEMUp5dShn2SjsJ7LF56UnRC3JS3jaY9vK9k8aMkNSWFSMvy565QJieXGkMRt99",
  "key29": "3SF3SZZzvvPYgHF6wmGdyJUwaJzrBHCz79BEvch7WrPi8Y722H82zbENozGp94ft249qUTB28L4yikdW361onNHq",
  "key30": "uRGogwZpuYwkVcnbhQdK9G3hhayUuecuPb8BJDSyjFkZ6YdArgs1Au4gqJhP1vx7TFkpdN69LmcBCaQuZ5ErnyQ",
  "key31": "5kfhJ4LonShhPYwK5kaDtPDXzvV7F7N5BrjkJEPejHvJnZm7zyaA2QJmhs2dYepgeZnrpWJTFnWyANWPn4LFXe3i",
  "key32": "5R1RuVypCuEvTnMgcRe3vwVhrg5Ffhbsv2UCJA6YCPD4ssJU2ZPBcbxynkSJNvs5yW141qLPkH2RbgcFTo3RdQsC",
  "key33": "46y1UUnjj5E13HwWLeWL8Azad7jedGGGUcxJLTsAwubX8FhqR93NrDvdSq5mYMmVwKdw669mnHkCKEDUBY62jJL",
  "key34": "4C5agLBXoCnkij6aB1CVQt18KQ4QouXnQFY374ySraYEg9UNLUs4LKTvtHCQ8J1Yk1QHgoVpftP7CAFCLmCUYCfK",
  "key35": "41r8X7Bgk7yFTVgtMdkxriGXsEy1MxiqZhiVyeoEni1SWzYvkxGvRF2K7BPuHojcAerj7Uk9tiJ9LTGDu7gwHpY9",
  "key36": "4cvNGryuCrqQUQxRpdfoYUfwMuMVs9tfbqJTFexGz9Ty6hZGf9Sv4Hyhg8bAL2B4rdnBUjAd56AnitG9AqipkDnu",
  "key37": "2A9ydiDsVB9GoaJDfyJwWsQtkiSG5yeSZW3j9uDVZbpsHg3VrU7rddowHZFwEqFmZRNneTcBJLUo2fQZXPsp8ryU"
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
