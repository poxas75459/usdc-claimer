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
    "5VHEPNUshubcSWgmmHcBU53CWpPd9f71SM8Rxtrnyth1Lu9bBghgfiuh1ycFseMMgYfdZeTg3tA53RJy7zq1naq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eAfBdScLw2Wj1heexi31bnSRPpbFmDbqTcbJnaZN6qbEatmKYA6Jfc2QbrL8iPKZMWUHzExGoqokH5n8Cfc4iSG",
  "key1": "4cpbviJw9zhcG6C5Qk82dGDKdiz9PzZquLLsPbXpkvExnxdsx9JfgoaJxvdBbxAPFvDfzVgrVheeu6ETV5qauPBv",
  "key2": "3uTMkhcptcULVetS7dvVnJ76v86mCygzCBVweypsyqs4cJJvTZabs5P7H9N2xqzdTknBBvUYzzE2PSGnSERf4tqh",
  "key3": "gobQZNPZX44zs63VHFF8U8iSXXKEcKNs8XZcRP1L1bzS5GEEfanHwo4GeYYgzURC9xzD8m9wrRpHiJ4YVQ5Tp4T",
  "key4": "27tppogv7WMcec9qvZ3As4oq3nWnEohXjk95PkFUvTw6gpyFw62at2dt8VyYvygrp2FEgyab8ZvWy2BquuwUiYnV",
  "key5": "5o8GXTK2rTXkwM4DVgPJZrZ7Un2pY8Yxxw9ZczuXvQDDWHFd64cw3toakQB6LCEfJ7E5jL9PhDx6JDwcLqpbYRz5",
  "key6": "4s3vbRJnDj42U8AktQpyUo7AznhM4RsFZp8A8g5NuuuygNsACVbENpq67fcRHXkdWgLDBBxdV4QxcaZTqcTMM6M9",
  "key7": "4EiZWtNPPtVH6G6Sb8fAMLLQc46iRsvXmkfg21g6nGFicuEwSKvqXTYtvgb6TuWReuDugDexdxV5X3PShmkupLns",
  "key8": "4U1PVsVwXXoPTEy1snSBK5xgNmaG3tF2PRxPDpB8bmgdFbLzmtjdNQWhZgHgEuWY7hcnK8SDd7tAYrSUhzZEbvsQ",
  "key9": "2bicn9pVQgHHbNcNGDx3CdR4YR2jmpaCE51bMoTfZMfAdbh6t8EbN4KHGzmA6fzWR92wcbsGYLBh4oJFNdKAtuhA",
  "key10": "21QPo99ZfZYw7okjAUF1kdAogJ4HCitjvY4TaUdLmSgFT8L1dcyWwUjZU162zusKoz9wLWC9L6Rr9DL7eb1LDUGt",
  "key11": "3ghKyfaCXbhFMxhjvkjzgN1RhPx8nCtbxtQxT8GYM8tZfrCoC2L2CAGFFySN1AnKFsiSTtz1WAnXkGDBigbcAoZU",
  "key12": "2qmuH7e19DeiAGNjEY8M9JUUpsykqcoWcfBfefbcbvcTBAyyF4ZynrWMBdLQbYZBfrR9pGiS6wnfAQgmSeYbjMwZ",
  "key13": "41c4U9h655tUXvh5R1TwnVbEVVUYzXZEzfJa3hyrTd1WegxjBuehevs18iiBy8wcMqwT7oJFxj52NmjsvJZnEzbH",
  "key14": "3STSLS5XfcGtr826BcgBa9mhwZPHs4uKojE4RFE4s5ermyxZtP1GXwNG2EB6AVHVa8sd1awwn9D86rGjyH9SaoCU",
  "key15": "4Ky26j5a921r7Bcv5cdtinbKv5F62eGMaUrPhNwgS1GE4C9Z5fh7VbPbrXDPtWrwQavjwMnH3MtgUguAbtv9L9HF",
  "key16": "4Hpch55gXKkMDsYn5heEkor4fGf7kZTrfBCmmzzpoiQHug2gNQ6rcz1cEyFQGBfKUS3pm87yojMmPM4boGcajsSM",
  "key17": "4pf4zyCqp42KUTfRpA6pNgm5U9kdVBFa693GPKFQekGxFw17bS5LgKmmpdtXmkiVGHRKyQSJpmm3hjsc2mar69Pu",
  "key18": "3GS2vTEN3E3jMMvsvxYFkW7rZe3hVLtU2Fmhmt3H7712vi3MZ62LjxRuoy8hz6viA7G5hCFuHBDkxByeCUxAmgz2",
  "key19": "ETFTrqdz7mKKaKgDgWVokuo24Az3RXZfwYAn4Loat3L4ay4D8TC9ZxjnRkmS4tPveYspruhpoD3RvaR19uPGfRi",
  "key20": "28QPJ1qyDKEFDEjejL77645cHaQVTozCKEek26wKGUu4ttk5xG2J6c85UURwnqjuDketj328dwu7S3qTJEtFc7Y9",
  "key21": "pqe5K8StaC46vPMEtYpTUPDxwQ2C76vUGqL7KKiqmCAC3DJJcozP3pe4W75oPatfT1Q4CK5eAyFzCxEFGkRCUmG",
  "key22": "66De7hyQHpDQbzBEYTWEFBtp6vbDHv8X4FNQ4n7x6aaJrCymCCFmH94d46K9uoiE9Zxkjzh4FUmv1grfCeuQofMD",
  "key23": "BZXAEMWBRkjrKdauXxBtmY5TCHY5UVNG3muVBsr71UrB24Nvc85d6We47vj6rPaf33D8YxaaXezivkj5Q423PeE",
  "key24": "4UJatmfTyMfVjdZAkZgsZoLe8HDfp3fSVXhXFPzgaL5T57Nms9cEfDLb7fsvaGX8avDstreu5tzWekr8F1bvhEGM",
  "key25": "4zWPiQjRHeqbaJDLgPAyN88TiWsjKpLo1LdkvCebchD5dEnZdwMjTNzUdx6SA54npcGdJfKyysHV9oQVzWtsRgFU",
  "key26": "W5DU7w7VDCy2pXjxFsADKq8zKYW3mrfsNzzPTMq9HCopGC5wroYk49tLnpckd26n77NJgQfn83QMeS5B21JcW2d",
  "key27": "aLHR9wH3qGkqTGV333napL2z8fuBBZYUR7FT8GE3bpmiUEgiQY8kQs4jpVxLXz6MmwS7mknDx8cdwHF6vBdJDZC",
  "key28": "61nrYRKCmiPNwhQQRxzQz1t8R9shktHMBZdr86gf6JDzGWSCanLQ5eJicnEp3DG2uERaJ4C1vajKcKSug7dU9wkk",
  "key29": "5D1c3J2frdKwNvCKEDWpxzdDp5DbeYYwLVQcAFuMiMc5oPFi3Y23q9VoPbCBdeXApCnzE7A8bKTxao2tqyAVFX4V",
  "key30": "2osEFvw8rTBHEjUjmtjfdVBee7KXWHitEyWECnjxFgemzgZAbA7FuN451zERuNcmjLRnH31gfXfZYhAyYvpc496B",
  "key31": "4EwNLgnTBLjk9PsHaRrV2vnpo4t1RXaN37ncDBBrtcYgv3BZqM4x87QfUN6z6ZW2gg7ipjJvm748uNToJYhbiNho",
  "key32": "p8zgwhw5UnS8Y5Fqr1VJdARyH4iBZpv7gwGB21yatTaFrMmkGJ68pHn8niCfWfda6Au3pJU8MYCuqpXQVwWjbyv",
  "key33": "v3yPkyKjraDbtMo9gvFtZvmvPZnn6ntzMMJyVnQx1EWQEHfp7VrxrKzBevvkqhQvhpYmecSs7WiS84ZTZnD4xdD",
  "key34": "3wq4jx1enaJC8ify9KXjyd8nQXqvty2hrUw3cD9hvbWXhSf6Z4cFbiEQ9ZVdcqcegpWvWLhpVgnKwaiwps1hXPA",
  "key35": "2HzeSpW7tqSvW9kwfuEnjAheEFcmWtk25KCbto6P5fmGp767xkdaZqsXwuVJma7pHZLcmwobXPtSASsyAiGkHKuQ",
  "key36": "5qc47WUgpijDNcxzBdrt3FoQ3en31vx3f5u21gN4FHgCmyVkvDx9eFkiev9oMv5Fy4R8bB9cJ6k3PL4c3ZfxnCnc",
  "key37": "3WqrTWpo8JRBNrF7cs9wnewBaYD5ATcxE1zeBHnLeaGtBnYxL9t5qvPMicGxDRRXopMabEjwaCaR1ESTqbS54LHS",
  "key38": "3RpyQB6GUYU893MBez7vmB1c93DpXFyjdCEjCQkrxZik3z7apSjK2XtsRKVesRc9JcR64jBGDYyUtkesvkTVVo8W",
  "key39": "4Xm3u2q8VHt5XZr6pYX5nwTXv14nUYq6KtSj8Q5KbQeqXTCCLEN7NK6XSgASuJM5PoD5vrjRMeB3emvgx3QGsEG9",
  "key40": "2cee3SSADhXjkUQ5UN8k5FfuCam2x7xrpRDLn9XaF8TqAJf2CNuGhPmqcdtuRPcdhB5t9s9NC1hszKgFbS5JDtDK",
  "key41": "4Te3K2CgjZpcveKCMKCGj9ikfpBq3RFpmsfkvrwdBMxeinQKCDDB3A4mtAxwRKZy4z6tu5yAyktWVCjbU9i7YYaD",
  "key42": "5vQv936fU7WciGnKWqfAHXXaZnod6CVarmgrEsdVJMj49SBd91vo6FcssfCZDk6hCj2bjx5NeZAboN2gnUX6mtTL",
  "key43": "5za51UEqhwKy1YEvRPQ34E8x9UoY9M1AHkUfiQfomw3EZCmJFafBWjyGq4FGibfHKuUBXRxoTijUGkPxc7sA7HTN",
  "key44": "2q2rWXiyeh7r7LPNG5XwBKw5aiRDr1h296AdhghxuBpLWSDfxyMUHvuvVstxV6TyeghAHEFAPTQ1FQKcweofxBst",
  "key45": "5E2EdSiq5dxDo45h9ce34WHMBSTKduQ2Q8jQSTh46y33dgLPNXF39t6E96gMssaoHxrP6Kb7Tm3eNxSEvqcNXvfW",
  "key46": "64fwVEVRz5ScPdfiqAhFGNYD6LZdAyic7im5U7Gd3bGbGv8oYdVYQuARJJE2vruUrL7xichV2FL8BKSjRDRZrVVt"
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
