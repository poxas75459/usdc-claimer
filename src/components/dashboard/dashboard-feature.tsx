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
    "5oic6uR3ZkxvvSjWXr1vgHCzoDqYMR8LsVvrCEvRccdo7RjnrE73YY67BopBbCM8huKEHR8KrwcmRqRZaFx7aM6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VxiDizaju6j6yNTh21fdE5vPhnnJHiuFVxjHTZQhEWx8RSemTLrD5utEVkC1PbXAC7vUC7BtFUz6e43a5KmdWis",
  "key1": "3G4tAAfHTNQZpXEwLdxsVzMbrE5y4DB9KnTzqfXiJLGAToQy1qXrrCKEKHXxtSYUmwWuA3zFy6oRG6uzUtkDE3JR",
  "key2": "5prL2GdA8htQDsajcZr8DymjFYnE7ZBAZNy6tH9yAU4xPe2Mi6YjZsdHi8U9SU9zcYgFzGt2eY5Nc1d589jF8BmG",
  "key3": "5nUyPBwYdq4Wm5Hg8KhQe2GV3ZpQZww9Wh9urftx8D7KoF8jDK7PMNGZtFRkgjNZK8Gef7p9HMzMEGLud8YdBD7E",
  "key4": "5AuHPsPrgHzbRwffMQbJoaQ5cPmg2LCYoQSuKTSq2Jdqh9KnfSeMzEvq85GHk7hMgSQoGhvVcAGRx4eTK8RWtAtP",
  "key5": "2ViE4frhFeU85Bh3hX7NjKuyMFAo2Aj5BgApy28sU9QYULbBgY8LSyLVVosB7qQ97Th6YMhe1qN6j6eeYLoPY8XK",
  "key6": "2f71dKK3hujKN9P8Trhpx18yTxmfwAeikeQRgKUjWGG1LJHMw5rxDu7Vwj2mt37MMVKy19yDw5sVRQAJqEErH3n2",
  "key7": "3cJavhm627g5mTQYhTckAgdoq4aWeLG4QhbUrqwDzLrWNGko3yUAecYWJGvE1bC4K6cnKuY21EovwbBUxjDQwG9H",
  "key8": "5vhpMdz3BkgyyLZLh4vNUbn7MHEj27U3UgBjznZtHtY4m4bxnYyvubCv3XMLXvzzNYBcHRvx4gyxEzUCGTGdN9N8",
  "key9": "3QeqeE7noiEMxeep93KBnvnDGaKzJtAW5TMs4Dp2ivNqbsJVgsXPRY7GA9ZFMgZE4mp5jYZbVQSgH7VrWH4YLoHB",
  "key10": "megULgZBQ9V1xr2UNVmd95qSBqrmNjBNbXtvbyfH2HZDx9SFDvKTu9zBzK699UQa58AdC2TESqWVSqQTU7ZkRZd",
  "key11": "5MmBqBjW3N1Tm4QtPMovcoycb2YWFibVe5PuntwN7L776GXTe7zWjyNDMFELvQJVLKbXSxqMKcrgDK2w54hyPKWf",
  "key12": "5JumjLFfKv6z4SDQQqbHEJo7UPF7ESoGw877m7wZkKTtX43iod3mEmctkGHHc3wiYZYBcX43FrGdHaPoHHnmStJ8",
  "key13": "2QzUsfUEPZVcrWYtnPW82JjpWjg39eGSNtj3UETXPTdxQXPAr7dPCbsVhopeNqzW1eFhW9fxgZA9hfRmRVoLAVSM",
  "key14": "2YEHPUQDV6rXFsjinqMhLqdMJXRsZM8nmJD5wUFK2JGDzXYpSVTNcuZdwmafuVHPMFrcbMw8jP1eFQzLnPueBJE5",
  "key15": "cywvD2oZH4f4oTW7ikeriMTVUgBxdv2schK5fDCVALxvBVVm4LqWb2NZwKGpsa882So4g2Fzzf75Un1FzCmmooP",
  "key16": "4QCE1hK69RWh33Gjk3SGjpsVXP3xQgeKq47n2BUhHQptRCmai7CRvQD3u6jpSz9upGwvseBegqSabWte9eQooVtL",
  "key17": "2mWCeVS5rf35jbaKoNx9m54DmsMXvQvxzH83V6xGT5RGgsChiWJy9nroS1v9TKXFEmvJWVN98VWYYDWBmTpmGdP5",
  "key18": "2nKNKk6PM6JhtCxG2ghWrAxbXeTyB3LuKhzwFNF7SktDxEP4WPX2tSt16qifWvyrWiEPpgVXYa44QsTdVEBjTyP3",
  "key19": "2nbtQUbfHz4QkGER6gB94o863mQWqnEnu8vn8P7YHkUeSyZ4DSwDEYL1yWehon861Ch7hYnTdoL59h3PwfiXh2GK",
  "key20": "5fWvQeNNpvvuS9R4S6utGVRgEtbd53udWGy6iAxckYDEzcMfWkb1TwYchTbCs4x7BEX58m5cNt23FfMPcj1itKqh",
  "key21": "5ERugDBDMGJjRhrFPZ8Cs2TxBxiPVTYELQH8ZkbjPKk8xgmHdkFGbexHWUBPwmtdSqms5qjNgRxVjZg99YLZaq5S",
  "key22": "5eYuMhHWGx7o5RrG2kCfQTsLYhXZnbKnCssxFCjQUALqRutfBNxRnvd15TvT3yXBbeV16V7Bkao8MTs8EqPQ2pTq",
  "key23": "2Gk5PAfVQSiM2Q25ryRdzx8WCBWZoEj8LMWfevKBXg4Tsv3Ts8zf2372SoMJwMcsK9MzgaiJk8z85aTS2ffN6MRu",
  "key24": "4sZmpBKA7YzPW6jLEaF8vYQE7cPTtZfyNHYVvhZG3EZWP3XabdWkZ8wbC61MwfBbuaS7WCZ4v1MmtUTQmyg57smn",
  "key25": "528AGtRfKyG2z8oJoGZwswTQTzSzrHuDnLFWJBtZsnT3WKQZgfDuQMCoRt4PSQ3uRmMcFe1CxhnWidWXYNusreVZ",
  "key26": "H8GfJVjeZmLarVjQJxqtyawTesqDTz7NgguEDab3Y4Nb1hMqmkryb8w4djKzbFr9GL3DmPse2nd8JGEBaPygRpN",
  "key27": "2VqpQWTQVgMXznYkt7MZFZaF8ZFagHYyKj2GefnGoooeG3KxxKuYu5R17qjegMVoz3Lcd5dP9khMXWppC1Fgw2Sh",
  "key28": "3iygAWkdbKgTNSRdBjf3LXmMDxWeufKS9NpAE1XEo9WdHFoEitLA8SL7uxacBJWY6N3gsEJaushMZ527u3nEQSi9",
  "key29": "2JXG9xuVTRWAR9DMVzZhCKWAWcAxjZmPkMDFkEr1qwibBwAYsaYGY1tNgd4vu8uiCKBhwW2pSNe4FWuZAUYwiLo",
  "key30": "16DD9dEXKehYQNGbC44TxJrcdmQz4DMHrZ63gvQgLUzunTSHf1gAMX9FiNNeB6di6q16WwHEFM5rK9YAyx1McjN",
  "key31": "3Dkm1e4BHCuQSg98ttWuXd67atns9GPZ63CczruoXKhxag6EQcZSAohGgKtd6tTv5sujFHMV4CAjf9uLUGDuSHzA",
  "key32": "6wnAALWzDW9munKJJhpHSu6JkCDikmTufvou1WmdkraLXjKK9J5WLGFbBpr243T5BrFC7R9hCZtJiLNJDpzEkrW",
  "key33": "5L3KoCC6gUifSA8w3yLvnmu5DLuSM55NgRPTvnQBdHKi4DJTZJnwuJ7eHf5UEY4Kvvg7Wuuta7faLMAMBraBqcjc",
  "key34": "5oyaZYjWcs1GcgpLj8A8wJVrrGFDgHwEQ5vCqVQA5r3psv5s92q1uC7zJeuNZXfaJvHzqkNmEHtXhJ7i6g39Fc3e",
  "key35": "3MEvXiwNQbZ2e7vqEYpqmq7e56aJEBWatKKaaYC5o7s67MqBwCXHPmYEkSH8QTLAqXGgHKVMUTQfU7Ug2NekRDEq",
  "key36": "5KCwsA5feNGiW1gEFcPtGCxZzETmHgUJ61Ar4ntwM9uG3tMgDyZoTNevHBdfFMRgGhtEvDQu81TUJ3PGugjYhM2R",
  "key37": "5jnADNengF24qn9ALPhMkMoEBgy9tv29nEcCgeEH6GprNBdaLT3Q9PMYwE8Eejpe45EsWJiV3WcXZoLzDkZjQyaB",
  "key38": "5jTUwvFG5E2XSGhfqSwAwAgAx92jntBrrTpmGEfsT2JdytfVmBb3wmDBYEyJDwps5Mmbj7877W1tRpALFSvcjCg7",
  "key39": "2And8CQHHCGSbCexaSbiUNJ5v6jNQx9vC1eAyDvhSuBfQqsswutRWQdce1xe7oaKRjRx2EmTHfvwWiHuCnztxZ8b",
  "key40": "3LCNT7LxXmzqXeJScSeWhXQaQUD6psEzSxChbFv18GizsUJFws8hjCBv7cnURy9at1jkuk5AiGii2DG85KoFFhpv"
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
