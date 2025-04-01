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
    "4QcDYCyqhJwCfCnHxqJz3mJEW1Me13Jr66kYe16JcdWEz89FZMaFXfB1P87NTG2P89bLFcbUUHWTspc8BMkBBzvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VLCgyvkzwnYtpDvERqaMWEAibPxmszakLvMyPCiATBWGWuY3K2VTRsp2R31LqgafU5YpjtceBt3pdqWzye2pgT3",
  "key1": "M1Kggzf2L6cmUnatXDowXDMaRkBd8Do2gHXxJ8ASSByaPhPPUcL4k8KR25EUY9JQNz666SxRqEvsbZwgvE1Cx5y",
  "key2": "64cbdvPpBjh2dhSBxNguwxtRGARKesrW15165Q6itPzu5GYxtrEJFEzbZ6osXJ6QYojt7RJoZbHqusfQB6Pa7mxv",
  "key3": "4pqEw64Ygnyr8PD78v9DE5ApY9mJaYSEE6qX546PFF7xPvKEqJeBVPj71XBJFJ4cM6x5tjuJKv8brqQyPLRkhtrW",
  "key4": "2qQoNbzCsmtPyqXuSfMBFgLnQhkcvgx6EpVvDH4ZEp79VDZRyi6PLpbWqW6e55AD9Kguufh2KwgokVftRysogMcW",
  "key5": "2vgSjEFkZ9WtHtSKgbWsK3zA3c71RKhhcwXVc29mjuxonDPmHbPza69qeJ2j75DWvcRY7WL5HrjKNzQZKemq1MMN",
  "key6": "3b1vVqv8didzhWhNXaQLDBSKv7K7ENHt7cJ1NU6F6i9VcxXW6QxPKpZQtPmFSX2ZW6FMDfpuiojpcvX38UjVQKBC",
  "key7": "51h5F2gw3xicTgXB98ev33CWC6JjWKhK7pQ1WxDWdQvTc5zRu66CEyU52GmXgz4WoBRqFohh4CaYtDDnBxn6XqPx",
  "key8": "5ikge9WM91SfJ4iXWvSWYZoE76F11b3puv3jjfgbCazUGf6unBqgBBnMwkECFjq1wi8JRndTaiw7svGxXBwGyjHH",
  "key9": "2c9xWqjqc6HPetdCytRGaeBtWA7maS1gx9bap9sGGLMA14ob4jA6K283ZLTcrZQgZscJmjRqtgRPqiQj19FZUQyp",
  "key10": "5kmo7Ge5VhCGkV2DhWVzsDEBWX7fzNzp8jQmKoEgXHjnWhbZsoxjPyGdGxCugidhBbHXAWga3gVao85m7gbSsJ6R",
  "key11": "5cmufpo44vcKc3EMqp9L2BW39Nsw6HvwHfSSijkKYhTvbTKNMNqA24jWeBdjvh4K2NwSPiKan39GvH6X6HiCMryF",
  "key12": "3oGFbkj8NeFfyWCHnw8MxmDSEc39KsF1VJiZaCMy9qN9guhoUzHrnHbvHPYDuJhZfR7uDhC5qcGKQM7eRiHe7UVn",
  "key13": "3quFVtpi7BbnWrRRRXUEP5CLaf8HtuXLj1eZWSx9kFiwS9MgDtJedQtR2i8wHBtTTyPDeCL9hNvMEZrwzmCCVh3R",
  "key14": "z5F8N8NdWDZ7K878CV6jRQKvo9XiehuDDANR3nqLUfSQuufeBZmXWRa3uQPv28ZsoJpDTPGwSVWZAZLeZc6ZQgM",
  "key15": "4tYbWK9QVuhNXCK9rv3qQMnHjUxFkbkPsV13yhF3V7dVmai7R4HiCNEuk6gRHvJxWd6Rj7KQSs8y8nLtU2XXiYbt",
  "key16": "4X8t1jDGxaUK3eHGomv2pP9w5e2Dz835VU6bUoHTA2bUxbG87h8qNfYARA12nu2c7xCvFuTGMZHNG1vBSdmy13rc",
  "key17": "2kuBFqy5QuxPgpUR5pNBDhhrk8pfrwsXHYj3rSXHYNEdyr6bKoLQXrejP2EUy7mJbLZoMYyGzTrmXYtFBzzesd1k",
  "key18": "27a3a5Sm5XPJCvZg5w3eKpRENByP4vyFajRGReTnUSc5qgcLZy8CHVGHT4ey4MMhqJStpbPv9jsP77X4ZnE2gdse",
  "key19": "4TJXQ1aa71ZijUp8SHVZxbUPJWDgTbV5fdqtsmQcnLwZ4o8QTH7X54xTYYNWYZ8FrjKfPQyC4ny5g4EokFyTe1cQ",
  "key20": "3kscPzJmJHTvNnzDRPMPJ5aL7yeX2BSMzbHBnYzK2GnZZvm3k17w5tCu86GKuxiUxDXCD5duvkwcrknnjTnRb5Je",
  "key21": "5hbsWhxq4C3ZWT1uAntvPrxceyArzVyLFMnCBcJXzvSmRt6ePbga5fujear36Y89LuZLzNQJKnRXUqjCV3MzrtDG",
  "key22": "4eSZidMvzb7Z8YQSN2Z4LJ3nVumYWjVJHGRprcDgz9cLBhNgv4fPdRpSWrMGCEo9NfmeCR4L7abeWaBx8r2iyYAX",
  "key23": "54L3GH7rUUuBzMZEQkQAgmrB3QDoLeivhtUFXmBhVqJhWGkLXUQooJbFeRk1528rLSRBMZZxJv68Vf1g2hi9cBKs",
  "key24": "4KNQz6dPVB4xEGKUDpetC6siyEXuwaE3XHDsDrvjeJh21SP4wPnKhG5SrYagcohH9YPKmJKfaae2wZQJe2PH2hdk",
  "key25": "MVHMpiAPi9Kti3t1b8Jwk841tqtRSUkZWzK6LXuNYU1jBP5Vm6MauC3Xg6bbS7v3DgJnqVn82avgM8JurYAHitm",
  "key26": "25hVCzhK5rQS5VDH4Qrw3cBA6t3xnQVsVajgVJ6gAZitGdeZJQxrgfCaUFHZTvhWEEv1QL1gMdGM8yqPZAVmxWNX",
  "key27": "2sWSJMdTzwrP17xF3UZ8MTBeRLCbH9Tnsz8kg3uSVyeA44dUCoQ2zYP2tb2PZuPv3tnxJi8fbvLxrZQeKHEA6ZAQ",
  "key28": "L8jSmeGk2Xx58GeiJpPdgujprVjKrSVCrHMWoM1A3fETDyvG2T7xJJBuCZHwLSXsjxiqeXFHSG4mvyohjXq5L7Y",
  "key29": "5hpMMUXHYEDnfghaPvoPH8oo2Hv2GhoJg8yUhGPW9gGa1gNngSJViRBvRP7x8hwK4GE9DWr9UjDLxYYW1ppPV51P",
  "key30": "tV5J4BQoUm5HibMrKUsMdQPhbKveWERMUKfkS5P18KRPDxj9ZVZTYmtkUGr3J3ny1vEtiVKgy5kVtwUC4t5t8PT",
  "key31": "4MZgsV2Hse1h8JHqwUMGVAUAdaRya7wNgoXfdiRPfTu7yNNbsFo2vVsdxpq1FpEeiPqvXENz2ST4XqqopWeT9gX3",
  "key32": "5rNfBbprdDyrHTePScgSEusRkEypsfibpcSb3Us9kmGUwkxMmvpg2YcTPcKLbJxbJEwtiyY2a2jPgN6jc5gCNvQz",
  "key33": "3BuP66M1bjDRsAKDSjVRC6BhH8wQ5WfN14QEAxwWxLnRmgZDkBpBFoeDgg9AEtzpGC9G2MsPWMHoLBkWVGFVhnKh",
  "key34": "5ZkCBXgDi49RoJX81SkMaf8MZi7pVZsndn4XuBMTGiyrHXB4UTro5Wt6QpZUS47Up6Mosuhyps6AxVdyvF5vnXYi",
  "key35": "5LtMMH6DEAuhAAwqzKDrrLCTEsHEhi9GpzVnw7v67Qv9r4iZBfR9CZ6EYeqN35HPtEELp7kcDBg3Nz3XiUCXdHzA",
  "key36": "2CiBNFKumDx6NrxWHb425oJDNV9Pi269xCtmri9NAf6VuqkTtWSkkLsB667iE9ZYLkVyjCRARE5VeLTrYChiqmzN"
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
