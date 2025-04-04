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
    "47XQTDSc9G5gcAVAChyvvwG38LSjjA8AQ4dbfdYLoJiwkkyhagRx91aKrgYzvtv23bSrd9by66qPJ4G2qmjRwZWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fW8UQzHQ5Wxh3jwFvSDaN7kmqb8SyRxpCwRLektJdgQDKqKsVLvDgGmJ71S9deefZokc8jiUf9DJwGXchoNv41r",
  "key1": "5DCMrPcwbP9aVYT9jqpz4SpXnFARiPLGodPfbUiTF5iGcZy9TxmP2CDQ8RHXcScGuYLrivdcqekWsB7qcQFi7Dt5",
  "key2": "3wyYcH9GxFPxFQwVgtzesej15HjucDviAg7FJsm9rDBaSQcAekieMqvqJqu3WQj2hvmorDcLFHSSqpWnqSpTKqsZ",
  "key3": "3pPiyb67uacq44JTrn98zjKR48ahchav2RarjtcrhpcMbXuAynzUr2gtW34HhatCcMrB9qeGMEzTyprbZPjSboG3",
  "key4": "3FefviMxQoyuasP8u6qC13fxF2Fho2wrRLrNSFXoc1ociXHfvWXwKGPR5X6UhVmxtfsZJeh1mcmTXgKiefJVNPud",
  "key5": "3E2j2P31ezbeNmgMDEgW5kvncR4XwrZMVXBsmK2ibyHRs6bL9WMnKXF6R6U2tzEEsyjJFE4L8AosqAvjVLM7BpSs",
  "key6": "5M3TVwWeyjijb8365rNvPxzVte2DmGcjKnYVsmVAaLeUkPAnmKc51HJxQ8L1Raki4N63to6LoxZmM5QvQfaJYzip",
  "key7": "5o4tk1AqvJogEsksV6JNY2xTcQRzGnEuCARTCiFp85P6P5RZDt6dqxqqEf6vEivQLjogjNQKYVbQxiSVBwhzPpF5",
  "key8": "3aAN3eRqybKvWWq4cY2ZcKqgFSWCZEwgXEWbuk1E6vWw1fVwcK1RMw4ch5koo5ce5onzpnah4XNTYjYBbgd9dW6d",
  "key9": "3Dqpw1gLB8MLKGEeTu48rmRYkMhc7dmmaFt4jayjdcA7XNGdxTPCtojdup54zfoc5nF7ZUh4xehaQnmhz7dWofQB",
  "key10": "3aGXKt6uSNuHLhBvq7hqZ3ayMmK1k3foKbEoypZ6H1Ub8QJUrzKbUbNDX53GziHDSSQnSKn6ZWykdViFLMwtoAu2",
  "key11": "AAFjmNMtLYerRSgbXVfR9Cb1sYrw9YWho4SkFZhBXomDpi93yoS4A6irQ6xR9MoC7kk5GKZcAdL8yxQsocipehB",
  "key12": "2sdvV15NJF4JCGhoiXpoT38rhk9rnVmUGnToR7PmouahDyZEQ7AGK8uwkT53GRunLmpZ4GLyGFTp2rgHv2KpdyJF",
  "key13": "5pWseHLhdyop9WzXKih3HC9U6JR9yZ3p4kC45NkTXdQeGxFgTizb6f2GGtG5gBfq2Sad7Z4sgYFTmnop8sXNZ5CD",
  "key14": "5mupppw4Xy74dC4qEDCxSXKctNRmpMqTkWLAjhYwQAnQtZRDaAvUSELmYgoRQnctLbvoX19dabJsrqKbAC8LmCAR",
  "key15": "21eZ8bhJzY3gi2rUZchW7d7Tfc46FWNoUEP1UgPGN8GMeL9U9GrZoB7cj8yff3EEwtu71wspiW8QHT5SuK4bHxqH",
  "key16": "PHe41BT33W5UwRhEC2qG1bfoUbokMu2tQeLT9WteE4HUSje9H2jiXwBV78teKVcZf6YebHy28dFiC6dcPSmfJbh",
  "key17": "2BNtNyovkyzqS9AJ24g2P6hWb4R4h5npWjgMCpuzeC7GHgPFyxHupV27zmLzQiAA5QjuiSAQ1eGv5z2PXnxc5vi7",
  "key18": "238eSJSpEazBzK1FaEEhcrbS8iu6TrfaqYr4UmNxRPKfAKnqq7j6dHvR1S98ULmi8usXSU813kAZvW5tDMfnDnEX",
  "key19": "rai5AiCmy7j4tqFhp5NqtC8DLd87qdLnucjv4F2jva87oV987m5DwcaVdC76sSzWpqWDKNA7MhUGngBp7MuiivR",
  "key20": "2swGktgASJUJnvS1X8AwrgwPCbJZfRaLFkR6ade3WUvjnkPbwLdCdhV7p62LXVmbjugWPUB9ddFojvXkmqWLXRP9",
  "key21": "3L4q7wBTrbYH59x1VvjQfE7ZF8vfMBe9v1d34GYudthv2jYHmLRAbrinVAUCog42twyGY3droQFTSRBqt8ECLXx6",
  "key22": "2ypsA6AJn6FDNyfU8LnySr2Yb9LE6qwowqhc7XrmRaHLuubLyjNn6m6FuaJUK8PFjsZgWNr9kpXqGrTu6TQVdjdr",
  "key23": "2egGNWXQKwJKymXZbiAqAeUAKy8gJYKJk55g7zYHZHXXsAbhxcj1BhdiZexVMyxJTVTWRk3mKSnLjpoA6GbnqAJ6",
  "key24": "2EfzD477MpQyRwgSbxK3k33CM9etnMKMmT5Riv1F2kdjf43EvwrNBDPVLJs4U3Ln3SNtX2d74LTwFwibZXnwvzd5",
  "key25": "5W3EZmMVwAXgg59BU7s53KWcrpiuHe2NXo4b4f4yxkAV9P7TaNgYRv4k8yuSMUhy8EDrqvTnRE72MG1PF82cnpGW",
  "key26": "2wtBXRkVFdheJ4SEc33Yfmb3NpovLddE52TNnUxFgJHEtW9rrGtGCQKb2rwbRkAcRWUXZY486BHuah4j2DtkeD8S",
  "key27": "4qm8WpURnoqBndgroLMfc8sBPZdjqP8y4BNZpCAct74EDAZ9N9VMQXfvMsGAhbFZi25D7U8LAe8NbhBqoyVi4eww",
  "key28": "VXeju6E2aJX9kpAFVUPwvNrSAHLyqrwuzsnkVuuh3z4g24mDHgBXAjkbsBznHeacRNQsrR19mU71FQwhAeCCu1L",
  "key29": "2N2GWTz1fP9xCRx2ytbJAC6mo1HpjBUtFEAb1EcpYNvAA5BJ59n17SBEpNPzvrMEu4KYKCULNVK7RPeFj8HYhgPT",
  "key30": "3MCU2bThUAVgGGJTWhdTJAZ2To2wxh4yA8ywBsdwhLZtDiyCSsXKmT84jYjJenr4P8m7DD4qD9Ma5Lp7sMGYdSVs",
  "key31": "3vKpmCoiWuzipr6tAabrXt3bC4DZL6xkCLSfBvTsBvwvNK9Mnhj2N23zYWbp6zyM7eA5UMTAUc8dvjojVX3SyDoP",
  "key32": "e7ZvPrZcjar8pj96ywqXYEhW5Y9rbLUg8KQRqMyb8PPnZyTGpoN49jAek1xciD1HKZ33MC3xw6ni4NSPiQPKpST",
  "key33": "nXSQVxF7izDkWZRbPxhqTvYwaaXJVMfq81afYzpZrS5iNhtG48PpybsXdjJe8HVaZgf9Ns2QEyk5bvwQ8M4Rypn",
  "key34": "yiM4QNamGvtKzLioutWUAcKoDmCVKDciNoTcANALjrD6ePDRboeBj72ThsmmZ1hjtLoXZsT5tPNboBKnzaXR8RL",
  "key35": "5A5d3i52jiEtAB5sqVE9amWKQsYVByjF5FFafh3zGnwWUTuw4c3V8RhfyaQekwiuFwKx8nPfghRPPuUF2oyjEmwA",
  "key36": "Lot13auXRnRD8QSpvn2MBGXy6UfLBWf1C1SemFvUzZdYmdRe8dGjNABtZhJTKVYLhbK7iqPkUYXkSuKn4vNHMeh",
  "key37": "5YibGDbcN1nr4f47LFzKKZZo1e1nR1XxhHcsRLMYfRBurgRkNNA9Rr1EL34wRQJfMA8cFtr1frwJorY5a6s5rbTw",
  "key38": "5sfyWwks11uFubW7uTTuZr2sHSg3JkHbsYxuQfMbarmKAMmWrYuTPpcBrAXXtFfxXtbqT1qAdrYLx13ULL4MGwHE",
  "key39": "2P6TGoyqzLYZ2BGQsDCMh2Vap4aGwuTooYUzkYKKJYPZctEvLeKdvdLTZQvfugYfYHHdSwdvC9Avm5DWpNB8eeFf",
  "key40": "37PR9zVw5fPWZux9gi3TUeSQVjv3irJzUPqCsVMsLzQgGV2V3wmzgvy5CWM9pRSkKH7HcUTD44SUCnqGyH5t26xq",
  "key41": "CkG2BRGdXsXBBnrCnP94iwqH9wdfkDDZmMvyyFBrcon6UsQN8h9EH6HbvtwB1JsMwnbffzXkMAXhFE19zzuZJSz",
  "key42": "3JjCa669BgKGzbu2eczQVA41YTGubcAVoXt45EWAjMFfsF7Z2HNb8PUgjgq3mfe6Zvtxbuu29u3F1FpVjSEEGprE",
  "key43": "5FjfqJPgeiz84dxFtJkBdb2PXikNt33Kpva5Qaxur7jqiFsBLwyhuGaA3r5DF7NmmwjoqD7YS6xE3MHA3ViARW5M",
  "key44": "4dGZCVDHsNTiu54tYQNuvPP2v8mUq3DHf3zhnvYSqWDuhW2LNzs44kFkP6EHRzsuWuoArXCHqMxgf4Jp1PeCFgNr",
  "key45": "3UgnrwZLcqkPjQwUP1jqi3uPUZTztyjeHTWSu5BRYfCmwNvo4dBAgxNfpcaineFQnrvkaqwzzpQ3bzbwMawvieNE"
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
