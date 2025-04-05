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
    "odzvjKLTnSMhWVjjctRFtG59LT89Uej7YSGbeiNvkjNdCgWpwDK75uwf4eDAQTVUmMZXmcNBD4S531pP9GL7rVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4od3GwHnCxfyqpD4WpqZiVV6VminGyCrMSKHi4M4sG5eXHd8niis3rx8gwMX32iWF8fREqEQ1WyyoHe3Rjy67j1S",
  "key1": "5WNUbc9zGksTVJMn7GbWFQSazMQNYCCeQ83NiJNZDoYF12L4kJ8RyJz2AapxNsCVvqUdx2gwbg8pSusmVW7wzhLm",
  "key2": "398gvdFRMWQyEMWKCppVsWEygofTrTYXriNdTFtzQgfPmFk8EPXpCvHJtjMATBkkt6FMFig2LUBKrFVyo1VLT9mC",
  "key3": "62LFJDGm4pFToy84h672in3VWDkveK5gR9s6hC3UBBWngYA9nPR5aoj7bcUurnUhKau3vphMgfndeWUjs4vYGNwN",
  "key4": "dBwmrFrsbnKZuMHsHTpgWV2i6dTCEaz1SbgWQn9WWhhjbYmkjJRersi236DagVXNEiubgee3BpYUB2XZ21o11TN",
  "key5": "3e2oKvACV3zF9k4NEEAc7ejB5wgFRyX27krp6SDVbJc8jbtScR5a2yD9V7BQebVEt3ucxpZ5Fy1HtRS9mCpWteHZ",
  "key6": "5bHKXx178jnbvcBZu1GZ12yAjBu6A2wAAa3v6U5iDdzrN4UNB93Pox7PVduDVnJvnnMQnyscKh5Pz98FGfXu1rxx",
  "key7": "4HsfUSAG1mMYLLAiFC6vrBzhRxAwmcqbZpkf8M2MGg1tpTBPorasrzZ8dQSybeMr4cXkxiAqSgCGKA14NjAEa6JA",
  "key8": "2tFXcwkAdWtxin2gFsMzqU13aP9w6HjsqqdHtDSFquYKjGRT2Mxkq3nHEoFqwU2xjeneepN3ZapvPNqwXfrSKrVT",
  "key9": "2N6vDKFvT6aGSsP2DEWwD36vehYknLAgSPLn3LyhBYFZHjjaLss5Pp1G2oeYDJBPD42Z994r1Xf3H3zjFN4g2gmg",
  "key10": "5cMWGivf3SpBqzEFqsHYLQZfDhXQ4p3GVFtjn5zUo4vFjnWGAnnPKcYuZvBtiqa3T5NHcHcFrpHLh8ubDjZpP4Xy",
  "key11": "3mcReYu5AxpktCxRVsBsLjRKDf6KpYHnNr3WkU6oNZFdzkGt2vpgq5mdWgnhxN9CpqRK4sMFKtUPg9RPHJQgzAfq",
  "key12": "5sw4Dj1f94HwKYAQVW6pe4hVZpYknYAEa7Hcwap9XWiJNREqyxEbLdXmYjVhu6Ubb2odNCvQGsaNn36SbhRvCxPc",
  "key13": "4s4PSjDotF6pxK1dAVWvP6Lu8UuqJ613A8tK9DHCrsSSLJAdvzjYboJ4cMjh3ugPYdr7pgMBNqNqn3nXpz7seRUN",
  "key14": "VpXdMqv9Vhe9KSJhUxKCpcKYfRLkWRbf9XJT2PAfNZiCXRDVJ9y3ahSWXWf97NrBQgQM7VactXZDNJpWuJBH6CW",
  "key15": "25DTvkVEMLZroj5LbRr1mDYfhFLbcEQ3MWET4BpKkX3TjxWZRn2juPV6EZMNgjFcVXuzDv2jq7fgwQuqsUcoBmBt",
  "key16": "3rE7chhgE3im1kQVJmjZiycNcCtqQ96Z6FqRxGf95f7MU1tbzcYWfGau8fvQE3uESuhFdzTFo9gmVkZgmaSqEbeb",
  "key17": "3EUTtk2B7Cr833r47sNRQGZ2AsJzYUxAszzyWzEotVCNrHXNTsDhc5H6T6LkxLVPLCEqnSsxGUqoiBAQdgQzDQ81",
  "key18": "Qk7BCz9jwAXKFghTK76zJKTmUJHrqxGrRAsGPgDtbPwxsAxYtDaNkq9sgxn2Q8Go8V664iroL96XEjivwydShP2",
  "key19": "5fEpt73q3KF5dJkqXrNQYYVrtpQzgKL3s7zEfPC7qRhaRN9bBfYScprRe8WNAhRNPuQrsfbbhtmqPHSQzGeVhLMW",
  "key20": "1Skm6atLPXCLjwTaziWTRCtLwJuLrcCcxqU8qB2QoZVpe59Be8mEHsdTU5Zg16KZ1dczSrpLcWAb9KVEv7gQYAA",
  "key21": "9AJtMKWBHpe4JgXqFEkhzYoxBFLvVc1XoWzLrDQSrXLNHAsB84q98JXhTMvVAXfkWmQG1PacBb4PyZqP16QDyQc",
  "key22": "3pM5ZUkKztGzXaRYYJ4bXwFSQ9ngCc4BVjYEZzis2gohcF4QDrDm3mpNoBMDujEUXnaKS8CWU8jtHfpmZG1KExGo",
  "key23": "5HmZM6xHVw4XmbwvcAazSWZvs6netodHGhVC9ekNroe9EyGeiq4BDfKMXm9XEpm8qhiUGwfYCgYxT3MBHnkowevr",
  "key24": "2fjzxdfwibQjo9RM5cUb1EMWSusTf5Em4qNak15WhMaKBFBAnHJdiaTA3f714uqYJsjmPAPRh3rCgwUiinnVneZQ",
  "key25": "2is3wqrLoCHCgC3fGQS9bZzzomaJbQHekeUwKq8Am846kBtEy7Bp5kFAMypr3gRUeNmPgC4TwYSqhtj4C7M4MERb",
  "key26": "ep3MN3ZSXurCMvctgZA8WyGwEUiBxQsR2HtS4RtbZAxnUvUJpK9DKQPZKy17PjPMTrqD1mhMm8BekKXJ3utnC5G",
  "key27": "3fxWQ6una2Q4G3X3KRXrCmsWrLEu1bWTZNra3nrGYSaU1GSEmPTGVTNkw64Bqh4ZpPDyoTmK2gqRJDNmJXZYA7MK",
  "key28": "4Wo8YtDwk23Y7A1b3Vw3yNcXp6Vc3N9oNqtdFTK285CbTtcnzoYt4CQD9ZYURBdTSCYhm7gGVuUfU6hkCGxQGon5",
  "key29": "4uiC4vP9wWkj9emC3Xm4e55fNGAQq2sf6pnTxWhhtLuoZ5kj3xVGZT5wb8tevZtdRgugGiPmsdGZKUtu8RSeNTw5",
  "key30": "5ZvwnCmwtc172N5wtx33CMujxM3N9Gt4b8wHKgHjaC8Rn6vdkzUQhLEqmR9abLUNLoWZ6bFTGeHoscon7KQt4i7i",
  "key31": "47oxe6DEGHJWxMfd2ZLtE9EasFmeL8zqjgRVQn3btKmj8vcn9pnWa6aYbbC2zjK2aeFvk9NHcRip6Z3ea34HoG6q",
  "key32": "3SU767x9pgx1Bhxev47kGhKxwsvt34smffKAUn4MWr2yAkopJbMpckp6rs5VMJ3CWsmoV9KKFRxq8kLd7aVJ5nqq",
  "key33": "4fXPUHsDLSPN6GFKEK9tKc7gHjTEEeAbkAV23WAWixUA68Fe7iQm7Es17vqPbSm8NQsrZmKjpwakutZauALUbuDZ",
  "key34": "2N1DD1JGZPnFLwko1UfPRcX3mHAYbTxezGukraYVPnU1ysCGkTW9WcHyoHYafxCTessdvV9ueh6Sm6oR2x6mqLoV",
  "key35": "4xYpP1EpfNu67ciBzfUHCn4q4TfLLzpCFeQygyP1EkFt5F6RVVXirF3ip7ckT5rc8cTWdusiB9iaFetrRsw7LZpq",
  "key36": "4WypR4wxcT2GESRoSA8xRiL27DipJghspU3QSZkZDWUL1F3aubxZ8RKzgUGYYLyRLiw15xjjCbqvWywKvCAzB49r",
  "key37": "5YdnwxB4fRrA8EgaCC6pzpinqJQFbcTpdvy3DXur7gvdCswkStWPNYEPQ1quLKkJiJBcw9hevKdakAcKnRgfqNPv",
  "key38": "Ff843FX56e2XRgBWrdqPajTJjXnHm7icME74A5d44aQPjVEJcMhGjRcxS38WDfojhXb4dcBGNnwufcNiMBtY9WZ",
  "key39": "5D21XLXaeQXfpyDGbQh8fChJJHVSp6iXkjQKCWz56rt7sujKsTnpsusFJFWGhGYCkUZ2cyWVVCokWbxNb1PCj9Sv",
  "key40": "488yvpso86LfNKxPsXDeQ8wWaWVPK5Q8m2HFzc1sEjDxP2JpMf1tZZJdn9mpkZpjkdLW6bCcLop4zJLzd6VYiJBg",
  "key41": "3HAgncPDi3pwEKmwaL6CWbA8vr6z5DxDor8BxZDu7p8F8xjuyboreEEqTV8uDm7TB4C4BtrAvAur3PU9sgMfmFUC",
  "key42": "4PEBZnKGxvw2MauZNxCYavLnruTvDfU8iHKeuZJA4y8ixZw78SL9jKK4pwQvANrWSvCdyUXhXcbjEvajVWZXQ3JR",
  "key43": "2UWnJv6zRRHNcx8SPskxZFjSfzjMbXbXvSUmUJCYQEekFRPRRv5pyeE9M1oZFpzH5qAqSwQDcTaqvXUpkETf568a",
  "key44": "Q4QV2hsjJ2utN9QwomRdv2KKaBLcWq5XBpkSX4FETWNRuHR1qsGe4iwkxRQxxyzU1jamGjsmAryPrZMVTrgnTa6",
  "key45": "4vA2AExgcadWyrwvTjzZpjnporyDVRnaB76h2STYHfirQ3bD9ippEjvF9AVLrDzMQTFnV7tcHQW4VTyf4NFjDkJS",
  "key46": "3t5T3nvz97nCG9RB1ARUnPJkq5W4zujb92rXYyK2JJcWnA3hJbowCJvKMNsEG4E39fvxyuZFgSPvfx3VAQViVbfW",
  "key47": "4jr3JVENRJbupX5c4taCFVcfy67aR5Ekm51CTYohzLmA9RgjrtNSvjx8VkZ2mxXJGxKhNCC77LaEwBmm9KhmFkjd",
  "key48": "4iQu463bRRpYKJGDxqowF3LpXUmLoRqijsqDmtQ9SXq7BGmgQHkc3bFmLTtRdU3pJKpM8Zep4Qv46pW6ugWgUmTe",
  "key49": "3M58ZxvzRLPjpokmRZKHyRvv2tdWNeYhMMNwhwqZs5u62gPKTpuGsg8PCqCcvzcEvAH7wF9HK5wFoKYjUMV5Pn4r"
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
