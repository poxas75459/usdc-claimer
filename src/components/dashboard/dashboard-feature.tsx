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
    "2F9h6F8mhEnv2hCZbHvfSeQyiaDyeLZpFYkAazynX53nME1mnt72MQ7PCXeyUtEbs1vbXVq1v8rWvG7oXqw1fKNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jvByWDThbMefWqiPsfJ4Z86g4RptAheucJk663f3YjWc321YFhLGa4ryxxaZ3tz3Podyzsx7Ja8YAhc9heStH53",
  "key1": "2ShLvnKtYoBz8UvVDPA1yM6UfjxxNic4tmibp6re3pH1rrYYLPCvaBVeG6QneQZhsMeHLUqPB22jXa64oEgMqhaE",
  "key2": "3FjLfpsvjVAxMQPKeX9WBHCEy9qg7DXa77GQQSN2CFBB4HBw6iPwjYZmstTaJbRWt7Txq33Nh3JXeZdM3ue4SKyx",
  "key3": "4rXmc8wY9uFQUa51zPZx8kTCzgkTZY3TgoUZ8aLPAB8pYVuGTarmB1iTVHtMjvhZNSEfHm4XYW8M9R6hGJzQb2xW",
  "key4": "2vT5rEzhLzUYycxB1ST5nJXei6SUqJkBKSEHvEFovHxh7XYGeZq7vXaY586cQAjBDDcSuELexmHCFPSHjRgjK9uQ",
  "key5": "CbhGbXzAP9ooRxcPJGCM4RZbkUEkx4aciM4X5apBowFpeMJDbN2RhQmrXbQDqW3F5gaBWzLd397Kkk5yjicFgCm",
  "key6": "2RUxkLGVgTTCdfcrdpcX5mHx3GzoE1f7jMFr8kbUEMXVsPRGDrKVy4Q2X8Y8XpDvCRzvjgHX5pJPM3Pwxo6FPSMV",
  "key7": "3atutwvbQsHoEFu6m2GeDwdcaZnojiwYRFG8LY1B2s32irWmYp8mj3MhLKZswx4e8AYaxnMEoiqq2brvQXohQaSC",
  "key8": "2C6xW25y8MXbZvuB9YhPu2pL7oSvCofxghdZCygatL9sdS7YmyRgD14rb7jw9y71NwtjMhCDzA7QLgTV7TE8KncH",
  "key9": "4oo1bbgZYmdh33XTr3fJJ193Hm1MKkRGddUsyk8PUHri8J1x2ihLDD1nJP9yuPfmPQiESE1qzdJUdDSnZPPGApAP",
  "key10": "5fe1uo37jp2G9jTyLyZzTcUXwRgwZupA7yFTMbDUfBtrz6SNp6ivss5rEGtkVTJ1XMUXHszRUhLSa8WjHjDjejEL",
  "key11": "4M1rQz8RbADgoNf1adESKGa1Mmn4DrzsbiMRc1NvTU17KE7a5BACzAnzgvzpLP9YT5NDpTUCoyEq9xuPeCgaQ42Q",
  "key12": "5BGtBrchukVxSdx3spiEnufvEcm7fpXer1xertP36rJGsW1ZNtYBG6PM2ZwFzxZwHVYy2xypbdEVBxNtXbM4U2Si",
  "key13": "R5D7tjUdW4AmvHuigfofYfVf5dMLk8hJpc3pTrsYUAESq8iFdSdWr62xtw2fzusL6b8TbdEBvmszv72g4CXc8Xp",
  "key14": "4zv879PcW37yy7o64w5nj7P2kgSL7DVkQ3tMHhWYCRmWCE5wf8MSESR8np5FZnEw6CGrnQ9htFgc3RtVts7BRWVQ",
  "key15": "4qKHH3uUQuAWfkX1dbxozRyfxWPQRwvEmhYnzrxsQCMMTRpBkpFA5nJTsTpU6o2BNFxEwtNxsAXuoALF9e8kv4z7",
  "key16": "2327EyegsFiMdDHoAAKchWYNLuqp6p6GPVZyRyx2eRDv2xspvdaqPhEcYeV9pUiNhSXAJX5RF5AtWde1hrXyg7oi",
  "key17": "4PYSWcdGraBpxhLoHkmvXo6vUnf3pnffKuWFSTdvTYvrrdPG49w3YE4Fb4ZkCoQYeoNFWYbNpXQUD13bMXn7ZZa1",
  "key18": "58wmcWvKPcYhUxp7HueFJVz4Cfxdmw13yiw3iUvoC41LDj4Pi7nTQ5TT13DgnWWrcuTBuD8EDQcn33LkaFnzEMyC",
  "key19": "4n4SH41dUphp6seXqfaxkSggibBBzgwxCzVSfUFRBXrMvwto2xTTte5JwMiBf3man4j2BUrxDaw9m7eLxLEmZBix",
  "key20": "4D8RZuGGuCktU4TcJtijyHRHnfb5XX6QZQsfxRMmUobtecLgxhdDrSgBkmBwktVQTG9BtBKnB7EH24tiCyzhJxyV",
  "key21": "5xD1noGDfpB42zTyjYNevwDBxQq4dqmuq1DYHhYXA8HiuTTFrCsjm7j1Sr2JuA9PfxPoB4K6NqHGYHNv69a6fAws",
  "key22": "26cFxH8TUqg8wUXYRnRqMkyz7p8wCwPPxbagiCc7VqCtPWuSt4KQopyvwJuoKNN8LT81zfYxQp5YxKW1ygbXksfZ",
  "key23": "5ZcnEJ1GkQ7GyLUuv9LLJsaszPrdJVGKf8wsQtpXvYrU8wrPjbzwnFbk2gmdLkFri2cFUansKLxaoDk6tfLYxEXr",
  "key24": "3zC4dBN5P8Nqrs4z6TR7qSasqPt1uW1Skmx4VFnrxaPcQgSfgnJznUwe31rdttemifmE28hKepZCvvg1E4UKnRMv",
  "key25": "2GUSv6gMZEXhCJJnHHcA6SSroZhee7LNmgU9UU5AuZLV9zdMDzfPi8pU37pS8VBXvBynVe6TY1eFyvYir6EsLTs6",
  "key26": "26fV4Q4RWvp1aX6U2KWrY9nujQRrZ2HPJArw1ZVkYsafgFxTUeA3MKQjmzABe1BCPQeqWBo4Z6qNSrsT2TLTWfxJ",
  "key27": "3bUgYqs3iJmvNknh4dxB5EZiVhDtJ2U4YzcEpreT9SXRcBVT5MdLZyWGGwnCy3CTHCWVS8b2myHS5GknomYBb3Af",
  "key28": "vvVcxjzhVnSxAjQPjroHpKEzi8m2GVehDJ6yNGxndQ3BS6WCxLjh98euNzffrimD5qNnSq94pdSHFfFZDSiJYHQ",
  "key29": "4mB2Uv6BQDHhe4D1eVZAuSi37234Y2yqL3VjNWtDS2bP3ZdvBc2gT9een7EjVKdyMevFACJai7W7uqCt3MSr3xFr",
  "key30": "YrqhjMdXPMzmsSu3t4mnStvXFHowTEaR1YANc4dfv6SaEgZiAspTZ4MHRJb4WTZWfu74PhAk6tUkimp8UvLCd1Q",
  "key31": "2QZNpJWPfmYic886SFVXakUCwUoHLDWV9GdFhz9cJVZChvNNGZYopgTfFxgGos4hSAC5zHhH3sDz7hf7MN5RuHi8",
  "key32": "4y11M9EizMJQqGFyBiHf1qXevXEtPQLTZ31qNVSdPcoM6xGhfP2CZyNUC32dEiL93oak1Uf3KgsGnHJ4YQVaTDtx",
  "key33": "33XjKSCaqGHbRzimPiFpiA4PmTiznEtYVP7V61urzGfcm8f6PbHV2hmQEY9t8EW6gBH8q4zPxKwfkddas3eE5dvi",
  "key34": "gijwCmMa5UYoh4QXRN7NZcVA7orbnXaxKMUo2CHaYh2AhAkS7kfFJbmpZfrvkud1hSbTdYVmzWNjNK4v5ohDAw3",
  "key35": "3hfQwzTMfMHBkMPAoDddAydPWh9hUuDhrianpadndypBFZG428Ui9kGjy3SZBTMYrAiTm323sSs8BtMQkXebuh2x",
  "key36": "3tTEND8oK8xxSYPjkC49YUkVxAnk9cG3zpPiiroeb39reNyRDuys4FfLrhLribjMUjsZuVvFTqcEtj15SnehVYP4",
  "key37": "4KsSSB2MStkbHgrtKT2QLiApHKekBFgpwyP32n3mXMUrcAm8SCYzmyejsvNdV2gX6MP43RJRaGo4XZgdiJeNn9Zw",
  "key38": "V3C9HdgTgn1Z1RRNy91q87xPcX2QgUy6Pbz3v67vgdcDSNY1y5hmK7sqK2VMXT29gSwnYqozwJakDYP6HoM2h6M",
  "key39": "5JJJhYzunH3ErT7izpkT3s6cVftFZtVPMm9thNMHw5GmW4nhy3FDYR6VbUPdcdFFX9XWjJdsdZVJqED83pVjmPVP",
  "key40": "3axzRQ9o95y3JqYThBUMbtKwAA5JfwQj4fBC57PTgQFuG6wXEY4LETxW15LF6X2XNtD2bRubbCogEsiDUi79Y6HE",
  "key41": "2HnCCX2eZn7LAvYzRYGAbH4XzXNVdxbJhLw8zWxwbihWCsMPAc85Xyo3CJNqqt6UjuFGmubuKiiJRL2suetzsEvX",
  "key42": "ue1QQkU5ZLXXdsmW2yv7JhGG6DpcUD8ZjC1Ec5zEw2nNbTrBeJ7DfJSbqXck9ogXWkKnjKx7ZLMEqpGDjiLZoAs",
  "key43": "4fCteGPGMK9QoXU1rouRrkRwKgCU8Dyq2HvjLst2f2TPwBbHWAYeSsD9msHmmCW5hnKc6exM29w45KH7ge5KFDwm",
  "key44": "5KmfJJSSC1629u9eEmGT9ueQy6L1hvnpSWknH5D59YqSoFVEAf2qyHsoSAxohRLMceLuskfs24DB2SBdiQ7MXoij",
  "key45": "224QEZCLJCN2A6BUwztiJDPMp5s1bSoc4XsF8qzeqhZCKyyXhPDkGSxCK1iAoe428BM9ZYMXj5swoUDQngo5mziv",
  "key46": "3cVELU2r8UHtnpoxfY33HGmA7vtjVWyX8z764sN1TztVNKsmNN2dTNmRw6Hhz7ncjENZoiD2mrisxh8ao89HWA14",
  "key47": "2Gvb9eT4E2xpfnSBJdE7j7cSbyFycBh8xhJUWAdwWhg6FS97KrFKa8sGHQ6PKeu7YwDEGNDaLDVvtchn17EooLij",
  "key48": "28TrZaUNsaEBYxtJU8sQLENYVPNRiDuXZqr37s9WysnwPcmVJF8cPzFiR8vjPj1bRQUHW2ZWRcLLWxW4pn8BRLna"
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
