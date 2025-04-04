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
    "5W3BaeRy3nA8oi1kqknW199xsuTH9ifVFCkv2i2XaugMBFgBkREssLH6CuCP9ftGhaJ2M1yS9iyCXtPfijjHh1VS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WZfTTEfYCLUC27UjsLYfUnRLVh3CLJ9zTz8paUbGA2D2S7Ai5Lqfo27C5EhFd9sZCBvyXeX8RL9DGpXbrEtCa7e",
  "key1": "2emu5GsYn4QpVjSwit1PuXPCwVMxvSanyvhYBeWAVYfNcsvS5e7vUhMkb9JFbvR5oraMTV73XGZMShnUFeCx5QeH",
  "key2": "3F4563j4yTGEoTaxyWBfeNqU8pePewetN4gWxQ9qSkrspXFjSRVZ3p2BvfVDbvB4Fu4hCYhKtEeN4SGTVMQ3Yytz",
  "key3": "541gjWrrvffG5N9t9d6X6fHDWmd4ySEd8ojTFEuGoN2LtwN7HkAZP4oCq8cD3qKWTWhydtT99QKgwToCekEGye9S",
  "key4": "2Jdfz1RkMXghgZuXTyfGmSQBvTis23ay865NamLZQmetdw3rUyBqzwocTsTuqWDKW3D5Cd2H2WUcB3HQyk31CXa2",
  "key5": "wJm1q98JTjEdab3U4Fcqq9i8PRjei35ETdt9VkK8CVYthgoUNGzvr6ryqt1mCUQ5NBQ3csyc9QTd7PJkmU49Fks",
  "key6": "5pXJmizkbLeSx4ZqNX5hszfHd4J9mUW9RAymPPobvGhLXQ7SwWbfWG3BtdL3DgQapY1qvqnmEv8XcFuySjiTf5pR",
  "key7": "3nWKnhPr7d3ZsDR5K2PhVoYY7jo6A9ECUu7zJRdni5JvMaMen5G9jGqguFiBEaog87ejfhsx7azY3HLcVtC6K9GD",
  "key8": "YswzzyQcqQ1zok6nFojKUMDb5Vgh6AzW4PUTNGEPU4iCfF7PLMfxH3PbEx7fQzTruMSe6JDcRZVpyZL1f56N5rs",
  "key9": "43WeuNgkSvJYh7CyWaA9vt69V2Qp6YhPGGwBxhUUJRGivj5UrKaMuwxcJcu7zQ8UUJGUDypCSMu5BE2zT33AYeme",
  "key10": "2hkewnpWvyVs9jrJPiZH9PP2TF5WsNkWLyKuX6FxcmLA3NBMtJ2n36D8AP3sG1dGJe83qt47XV7LHjyms5DMta3i",
  "key11": "tQP2S15iTmzj7JzDxGqGfFUN1GqAGmiazahUDzLtEe8M1z3zPBNbAJy2GpaUMDw9A9bQ5uhAfJ5LBunX6RukqP1",
  "key12": "2eP8rMcvLaKf1NANpTi7tjzLzEsFFWk1xfyr6PtmTTQ1FeD1WtmbMXrat48SGVgwSZheWXMQ3uqkfFQPrXG7bYsB",
  "key13": "3bCpwKX1vJVsyNWYaqgPNftaRJDADRZtb69GNaU3ZETjmqHb538ouMup8PAVA1yKquVGR8Y5gt3vya1hmneJuSej",
  "key14": "3UFX516fvYcAFjPYDfX4PRLPrBAcynfffF9Bo3PvUxPuLLdjQ9e4673Xfi2d8a7UbRmhRvf59MAB2auGCR8MEDta",
  "key15": "keybgsufsyRJ3bqz3YfhUEgKneu2gr5T9QDASfSaouSQzDtm2LKh4wpakegHNZvkUP3eTREQ6kLhf3UQwPigxUb",
  "key16": "3c7PrWtv7u72E6JGkE15woiL4zWwyuFb7v3hQbeN9urEGCaB8NsJz85NNdtgkPRXeLZiW5iiFHquB2u1HKPbUYDs",
  "key17": "5YeVGJ6axExSMRtKEBjUc7a2zdip5cWLjyBFYLxt1trQpj95FP7RTyS6CbACbayxjmHasqe3KCqXeZJyK2qPvMv8",
  "key18": "4a96qCNjhxnbbmBuiLWyNWi6BJ1Ngs3S44pBFRfjJDw1qexH3sfyCNDb7zhVVMN86NUhU6p7ubU6VLVCUEjfnyiU",
  "key19": "56s1GjQS3UP9x74s16FSgvbsm5APN4WdijUaNuvMLi7C64SXDcHQG6LGqJHv2brQaDa2dZsmBuFXXwfBdNCEkpFy",
  "key20": "5fWChFQ2jjCiXx6i9D39QbuFEKn8rd9Y6DkbCYZhzMwxevo8ax1oi2KKhoJCrFBHa36XWFopDi12dv81HADotwkA",
  "key21": "3NMXwM54fLWq8KeLtdZcdGEa3wdxMyXJQ9Jqa15DMszABwTW2qnKr4AjfdBJiJhQK1KgCRF7FqZ5BGVeMr99js3M",
  "key22": "5BeNgyW1bSCDF8QmvjFq1ngYjn84W9WLKFzP79MTGFiuoW6s1aKT6zX3gfjQyY5iqC9msbBApvXfmoh5eqUeqAke",
  "key23": "5jwv3Kbx8Ni9cGhZjkbrZXmX9fBQkN2enifHGXheguBH1F9ApQtFt65R8GbNb93pHj2m3M2rjhimdtCg1kDqSQsi",
  "key24": "tJRxb5p6ka8Fa6RpofNwFRRtVNmrH4pkYwAeKCQwpBURN539tQLK9brQxtgsZCt8ufBLYyierupf2NyNszb7u4W",
  "key25": "2e8PwbEXiFMeRsSmCTAx1s8CMEmuQtAPbSkwXCJY6WxH8bCv2gzsHzKBqGHpjnZrXNfhv9jqmf3iwiL6oDLxCimV",
  "key26": "4Ugzu4xEH1NGPwY84pKTNvdon7qZXccwJQ3oehx98AzQFcE5xhnzjUB37b7d7Yu2xc6VRNY5WecmUALsG7AFS5pG",
  "key27": "3JUfQqvFinTwZrZiyhHL2AVusKL8hghWCM7w3xQ5pRH49DiRSpmHJcabBvW9ENoTL6KqHXhpGFcQrWsc6p6gaK1c",
  "key28": "5bpuMoPZX2FeRQoXAegDUJ4Cr78nAUcW37aVaZdFDZyviSZ4oMnmQ431jE6eU4h2R45KCd4Bx5crZMCV7Gx8ZrpE",
  "key29": "2MMxGHtNNfFDA9SAmhDwSAFfYcWHGUZK9XgBT8KCZSbjj8p6SFxuvh5NV3G8pFpF4PUgt2fxAUfkE9Z1uDY2nq2J",
  "key30": "2YmTEGR9LrHRK7cmHrW2qp46uvaixnKqdkWvaESq4Z6V5dmx1xJvSQi9zPJcPYSRkwSixpARuwbKvcu9GeR34K28",
  "key31": "2DnudWs77EvY5Fr8dPZEzomQPhUuMSicvgfSNCyoFo6x72y155vHbcZ5jKLrByTwtzQFB2LqRX7zXJZ4bmiPHPoB",
  "key32": "4oYqhEjmaWfUnZVQhh9i3JjRum7AKuSNo9A3x1e5qKRGSLm5qvJdAjBbnfAz4t5kQFt4QNRhxKZk7A5HPmqaZJyJ",
  "key33": "2tKKkrart8vHUwMS81jcY1hGRtCeKMt1Y1eTnGaQZWSvk7tHS6URT74ydbeYkvskViQxC1tB6bGUe2VNhGqqDnx2",
  "key34": "J8CNhJgpYw2NnKe3qucKxgc1bKx5N6bz9d48PLZ6M5PTgMcGPZntPWdsoj4ZJuFfZpt54ZtBNKe8RrgE6PqfFJN",
  "key35": "4k67LeSWrdw1EMLpUyoJx2KFRfMXVuGDX1VU8MUKgJx8CLo5qWiBqQ7qhsSNrmtNjtZkfC6hbSwD2EDtuKgSfmUw",
  "key36": "p3sibkx8AzNrR5NQx6483zRDwAe7gdZ7vkSqpZuqtkBcnMywNQtwrkKQj742WiHUp9AifnJm421oqaLBXwFGfTJ",
  "key37": "3MY4gQeo667UToFqWwQ7Z4FLjW6eF5NaNcvn2Bck8jrzHuWgtzRwHpY4oMMPAuaG15553XC4RCpGJT77K5brn4NP",
  "key38": "32N1y43QoWP5UrWCmTwjDzYnGqxsgVyvJc5cc2udCrbN2EgCRXknGM4yFtmhqCK7VfR7mqZvEKt1QurLWLRsmQWA",
  "key39": "2X1KLoxNpW5Teuebb1EG5ujUW8jx4W744GhDwGkSrC55Y5n9BFzUNWa4CBR7T5ZaRXfTC5eP1tRbbmW3havLfAF6",
  "key40": "5wn3nRq16Yg9jHMKeHnSMkLyj8JwQ6i3JukX2LKbXS98w5sZKn7BYhzmEBzxheAgPTjRh66acnxYTJyt66peTmoG",
  "key41": "2ENY5xdNLnmGhgJu6e6og4Pqx4ix6FWzwmwoaMnMBDxzcQ691LHLWwpEGm7kGKTW7mTZsPqNu6K9DhmJN8muU9UE",
  "key42": "LfPsdbNvu2wpH5MNE9cTKk9AF6iB5reewHqjwoHN4LvMcWXxMQEKVTAXpTDBVxGuxfhP6fEgym96ca4K7GKEr94",
  "key43": "3fJ4gBseuzyYoLLh8iKZVzpjwXxDnxbiBfdsq75H1zi8NCKcft5JfqCVjagjvSAxjTxLW71HJWPdfoGJ3GkAxUyV",
  "key44": "3Hw66TC1AK9KhhorBUFyuK5dciD6uvncpYfMjrhMKrkD5TUHJJEeBGZC7oN6Gk1SgCxdHNeTefzqXQUq4yZPxdjy",
  "key45": "3kMJ2ga1U6BTXHn6nKVTwKpATUz3kTrHjsZZyVp98PBJP4KL3daeMapaQcN3kjG9dMsF2VwDEE3uZVBCeLB8NqNv",
  "key46": "3E1wj2q6pGkuJfFxU3QLfi4ASsdzENEfahpDi9VCU4XD1pJxFhfKUuinGtsMJaq7q2msjTdVyvx38PZDj6PrPnEU",
  "key47": "2mqg67X6US2tntQG2gZmoAMxy5WnWg5Tckcaqwfx6nDgdqYUgjSxU8v6KfhKve64tJi5jroAfAjUxJcaKwKJUpbb",
  "key48": "LappiHNY9ndZrRFjkH9ABNSFEuzAt9TrWfXUDEELgcPFCLpFAqWfE9zCoBiTLjX6aGee7BeGN8Fe5gbs9A29hUJ"
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
