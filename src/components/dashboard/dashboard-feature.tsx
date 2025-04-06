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
    "MFBSMhHNHQZWmfG99tB2RGL1jiRxucevoyCUCPmPUknVxbLrmMYX3b878G5DLDhFqD7HqNzi3D4RA7Jh9AjrJLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MHDJypogAeBsNctxjatfqAUCC7ufsnV9aMnsXs8jUG1yphAfqwnPvPAJYQGCEYvuYRi82hAKnocDi2x3H8Ww7hp",
  "key1": "5ZYJfEhWnfs6fz69rSE8RUp4kRsfvRcRZM6HcYCAjNfoSJut2wd2royTsSRij72udhnvgLP5Qh4TRAcUMBYahetR",
  "key2": "2Cn1zqTodsYhdhg13imbaLZ427Yhtehvetcu3MWufYrBjnR2PcAuQuqER5DJiLySbKDq516Lcu3fFu6h4mwLmN6x",
  "key3": "3x9GqiTXHkJLRf2TjgCG2gGD1we6kajTRdEq3hGie9Wkt7US4PsTAvr8U7VZFarnkvpd53hQrvZtmeFR4qWBidTb",
  "key4": "2PLfX7regvt3eHgbqgdFvefEFSjDMTmTk9wnDNu8mPddRKKqov8jqnYn5KaodpFkmtivdbx8fhttBCNN9M9PxGAF",
  "key5": "4MHM1qndvyf6rZaUiLxqYQsh3AzjeaYduqmJeQo1KcUwkWCuCtDcsVMPpiidpiMcporHxpuo6yLV57pu6ZkVBxUP",
  "key6": "jMeupaaog9isz7Zpb4cP3mT7vKztcXLUdBgvfYYzhdH7NpEr2kvvEsNzqEXGiV3Q4bWNuUQ2sKxFXn8bscPHkcN",
  "key7": "29xibCajwXUUGw9AWMBpkfED71RgWT7GqGqg7S4XcK1Anv7nTVvck7bsEt6et2dk3kv32Uz9HTp9f6rBoAVrLkLY",
  "key8": "2UWhsuyYpCduUah45PN3MRLgJmvHSy3S3taFNDbd1KaSBTxJcsqZRcaNC6vziiecfjgN1Rsd5i3LVpvYLYqWjVK8",
  "key9": "5coGgX5FJaeQdZXNVyjTxd8Z1v4rzPpNt6EpCKHXh4F9LQcMeShifBMhNpU26twPkLg1eTumRr5tz7cLXgxZ58Fb",
  "key10": "676LrgG8ERjPvPzD8PLdhBG3VWNJegPpTbXfn7m5StgiHmu1MnhsVL5EMSXBNCHuEDoNXnFHUq7VQCwNvzFs9j8n",
  "key11": "4HzpRw7NVfnELXHFh66LPxXZ5Lk7BXX17KLVmXDWfMv36JAMjqwBxY191EKrrNXV67sArZGfpLrisRAHg4GDZ6MJ",
  "key12": "2PeUtnaXSCBzUX9rdxv2BBhsh8qSkicK3FRRJqkVnvrnGHEtNtZG9aVg1g1YsZ63Xf8WWoLmLXeK5RDtzpzZ7iKE",
  "key13": "5A6RFesLWeYxewpUGWxiRrWMxh7SpLGTJbH4ipGx6BrnSRzE7PUXrWHJChK3WEfTgADiHnQeduQYxVPu5tr59vRF",
  "key14": "5NBZs1CSoHbn23CZ8eFs1dTjhFrLUpYNwqWjEJvQL5FwVKab9jkmod5czRktGzhaSfqDmNB9U8VQdU9aMrywFbJj",
  "key15": "5AErkBkEZc65imJfAzN1VFvNHHUdz6wSXG5Xw2eX2wzWS6Pd5a84GBhuhH2RJpbVjNzAhJMCAy8rq6TF3TqevcQt",
  "key16": "35QJhRAsb9UEuAWmYXEZLVm35PuiqWR9QZ77d3BxeNAift7eUMo2jg7wZco9JcCdfJq1eaRanUDfCBdRkGi83nEP",
  "key17": "5w4F5GYfv217gnnNVHrKmLB4dZmYjnCfsdjyWUe6GfT24AxoEaJtVFkhvpUace5rToLDTxDwnfocS7xCLbwZHY4p",
  "key18": "4kt6dGJ59pJ2qfG49erom3CintNLCBdFDpuubp4AkUD5HJmjBFuADbvFSQYn3Cvx8JddLUJAkHYViztngQ7t1D4z",
  "key19": "JYVDGJ2LMxjjsU6Rj1JQHPJkU7i7iGWQrTaiJiV9xicGpCkkS5tPBW9U7YWirEbUwJKpzf4DsHUBFcs9cHJueh1",
  "key20": "3CfXiGPQ6WdgZwvnCi2PX7488RmHxSFcssUhxKNG8nKW2JwFH2DgyeFrKbSsTssxHp5ESYq6LRub9MUjtxBzzmui",
  "key21": "4QaUbSSxjF7fECy8vsZrwXPQ7EZxBEHTqvQEurb2HtUPok9NscjDTpHMNbBjGJRxXDaj9ssq881rTmsasemFteKN",
  "key22": "3pyLm4TkbaShHBTDkG6SKrWpYYyRNuBmmaJ6QY27k7en5fQ7djqwcRwVJUxWEg1xYKBgRKZ4vaB1N5qgxog9xaUo",
  "key23": "3irgUV5g6DnVZQfk7XegVCoC1xSXxe3pFtxBY6N8PMrhQ9gftNVFqb9UVvGzKcWwEUJrtFBaxsGC7uV5CoYnDszZ",
  "key24": "bLUmLUTNiUXtnAGsfrgiiEAnPJ8W4PT2XJs2HvAcH64KvAee6iawcaFWnndRRTAuDvf8vZYvFDekwWDWVLme52H",
  "key25": "2UsH81Dva79tjMZUaukJxvHEQ4PGsNBJAzSQwMo5MwcxaDiG6ihSaiYuY16a6MLtwynixhWTmkYDr7KkDBmV22gg",
  "key26": "5STMdPLZxAwp7NdA9TsW2YGxGQ9RBvnM2KBY4JpoHc6WZqzY8WGFL3xbZ7PdeFeFdvCPHDj4XpKgvWHBv4ShaM1k",
  "key27": "3rfBmhpFQKBxNBpRAh5a6NhgwPEbpXzVAG3aAo855f1mGwnkR7VQMLu7VPReN5ceRT4C1aFwffyy8cmgDJaaEdgJ",
  "key28": "58Skf8VAUQqkw3N5dRhoUWg7jqUv6o9w4ssAz4VY3p7wth6EQuLfGM4epwTGo6NXEpaj81ugh3wUzjGFJETzJyKn",
  "key29": "5APYkEGajmtJMHA1kzcCe4pyjCuUhAseKpDqkaDZVzcx6qKKmro91EMgBzjGv5Kabea4SeneXfFMs8uexeALXs15",
  "key30": "5xLJDbLM886sPv4pNpkj5U6iUaswueV4ZjeNvobBegGFjFwKwTu8FJ8yjygMdVrD3uqyuvBfZypzWWALMiitRmy4",
  "key31": "3QjX9z8bYNdbCjhfNGpf4UoCkXWwRmeJnqqiwt31dJJ8z2MyPXmGUkaSDBzfh5Cv97gChPiajkUNhxMHQawbR7S",
  "key32": "2USnxT3HzWUtXgWbvnszgFGFy2XSscxzCUMLP8WBgqWNgX1VvcftaEPc8zALQLuwpb2gTVaCYAJL51wfjoFHHmop",
  "key33": "4vciH7MfNusegSfnNyaBiE3qt9sLKobynLbNvgXErLp1BsKNiPaYrsugSUYXwPsaHwwcxxaVQapFTBmPKnT9W1B3",
  "key34": "4NLpVovPGHEUSDCbJMsDDm65ZeupdvV9q3cnmwb4uqRpm71gwgtLin8aaQcjnz9PdDYNN8fh1HwvCrvroDnJJe5W",
  "key35": "26pHwdHgxcTccPf9Kqwpg38hoPm1ky1uYR1juCxSiYnZ2xH2zXzdKqxxjyQYB4VHps3XL82wu9BpZ67a7bCmvo9M"
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
