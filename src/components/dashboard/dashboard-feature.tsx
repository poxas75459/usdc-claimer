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
    "2DFW5pUtvJbZNKUzeKVJKywXkotKYwXYKuuLQTWtopNfQHZyGtKgFjDjXN8YxKBWaKVoek7jWhJdd5fDF1tCtca1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m4wuWLhuXCmTtRFKeuWtA35SmBJwftRijF7Qb3wDxWehAcYGW4bhqM5x8Ytwy3dcmsir5TB6gDkHPKsXPTj76yk",
  "key1": "mrvHHvKJN64q2KVHPvocpzf7D7RCFiWSHdKY1CgLa76BeuQvEmKq5JghmSZinjdd3oNXU7WzuNVeZrRpDy2Ccta",
  "key2": "4iNxoNPJ44jPq31oVSCaN3wkiAydLPVW2fXE7ZmKY2se8FyecytQY7FUmN34pDntJVkN3yd8bW7fUS9y1hxGN3jT",
  "key3": "5TeQmhZypqarBG7F8xisk7XexjiTvpBs4mH2f9oaLhXFbuHMejXVE4FXMh4JX1Ajc5EDcarm3xkaLecZzrSdUQiu",
  "key4": "4hf9yE7bZokMpMeGnMz7no5reJB9H9qPbFS3unEPvwvKXd9Y8HjhmcACAZeGCaAqqq3Ge8P68ng4hCCfNeQX26Tf",
  "key5": "5ybBTZ9rgHPS9bs5s9CTUsWsDhB9At3JSHMWaWyLG64GKAJnajci2TXW57wyR5amrVo8LoN9rRf2rDxTaZYvVTKd",
  "key6": "2tAKA1ieDJCL6uD9JSZicCB3RRunBfvc7FBhUC1vfVnfX5BXYCFyjZWWWVbw5EtXPJmpQVAqeRpNscgz56ngtF3P",
  "key7": "4emH3Q5Be3gfpJnAHgWrZMAxGvT3kunRzskjPaPJp8VhHrhJqShCZ1z23nK2toaYxB2JtojT8pekRe1k4Ur428pF",
  "key8": "3bwj9ZtvweFkbVaBAzGqqi9KZLvoJFsPVZnmCoUCk6rTNR6wtqP1KiQuea1XWr8o6nRjJJGSwFUJsjLCaaW5XjZt",
  "key9": "bKBnbdWRgDoW4Uq1QxyXxBbe5z4cgZu1TAUJaBZYxvm99iCPgUHdZ8tULb4BpHtMZ5bTSSj4SrZQhHcWm4F3b6x",
  "key10": "4hUwJwxuqesbht14iqUMgUmVmBja6464cj4nP77J3joCUr4JfyQ2QqJBT7A5N8TDUMoBHdxqPM3mc3kpRtm1vtKV",
  "key11": "29Hu2KfLs5Y9hcCzxmnSmn4yZuXkNb9ZYUSJmoh9DXTLT5BStXe8RR2Y6QhFvuhXFvD3ie9RhEQE3g9S78yJoyqC",
  "key12": "5DtKatQbQXUDFT2LQ3xKvyCaiYtHsaxWTCAsyB8GbRJjbYKba4Q1pBV6AoRewsrk7XbPbXKjj7FqJ1DTZVj6tCEt",
  "key13": "AbR88Ujag6zHkt261bSTfnRZQsb3CfLSGiSuQ7GA2SB3vXB73R2712QwBj4bbEtuETDHnoWbCUReenbnXVXn2No",
  "key14": "35EMyG4sMAbcv1k4iA1xw3m1oPdNQ3sozxpLmakzAPXMafLr6m6d5dPbJCwrBuizGm6FMaLiCeS3AoUfZvTR79J3",
  "key15": "4e918Rbws3U7ttbByMCS5fy9Wq5zg62deN6fi52xTYSDHqHMPr2t3PA2tzzraGLsW9fL43DnMHL78aXWGxWAtM5k",
  "key16": "5BAiGYa68TwxL4oempgvahoGz3jk4H97K7UKCkctzmNbeDX81hRsres3RNscWHMAzepb8Nse2ZtqUu8T4ZMr8WMA",
  "key17": "5e7Q4eR64PoHvkzjctdMcMJUqsvJHEt7z4V3reRiZsdTHraLxAQLBb1VcHfjCY4sFuPwq4KYJdowmTdUrfPve9gm",
  "key18": "5ResbU5o2PmP1UnGVkPCgcftcXU3GUY6MknzumqKg858onstyssevgAS2XiRANLVDex51PcZAcfwBF3exQzhCZC7",
  "key19": "5DWK55iPv2FvYvzvSyQdL19TUyyVCXW4qR9erhdgbELZx4CTxLhNLF5JE6JMEGxXBZoui6CCCEGD3fW2dmGVoUKH",
  "key20": "iJFyAcaiHVRv35BoZet9LUgUeGC8asXyPrGnsM9RZN2NLxy2sdyy5UbFVjAnZREQ1Gc2sNmNgdDWQ6WcdAFcGFW",
  "key21": "5Qw5aWLjLU2yNfBykDArrRhUhFZHEtgGL6XHcRd3dXeVmLxZDPfHQjsJHcPu8CmffmYC4ki2WWDonj94NEe7KXQ3",
  "key22": "2ha9iJdRs2QpWgJmgVuZHw2Bn3i1qt3TgeYNDPysDcFrotLJf1CNyJwJQ4ZK4rWcz38ouN2xQi5dXUVShQ5jRNyi",
  "key23": "3ASjMDVViLMwKTA9cHEoaLjuDQRJ5ZBSja5RrWr4NRYzUDPoRXzitH53dFjcQCQhwXsBACBRawgCS4bMM5QrFR7z",
  "key24": "3RzvYn2xza7B6gbaMfh5hUXToXWK3YztMcc3aPJwEQCAs8aHFp4xJop4hsNHPUZCZm3wpZ1b6CoFYU47xPdQiF8h",
  "key25": "3ZtpauSX47xy6Kjo4ULihXFyL5y8zTDZcti9LSWzkm2h6MEsb73gTf6QXgaBTcAuRfheD1TtDdJTQktgJetJpQeM",
  "key26": "2fmzrYgVU3d2EbiiAF2gfoHdpeNSC5uPE8ywj2WrTs7kCEAZbZMJudbmdECYsgSMcK9KQfeANcj3TSigENK1DvyA",
  "key27": "4FZPJ557PRUEVAtsANJvitngJUQ4R6BtfWUTN833cvoQUYsdDNPpyEt1HL5kozYbfMNVGtc8V1yjozWRH2Wboeu8",
  "key28": "35aK7GWkAPXvmd4DNmrjELDg1LpFbZkPdtWgA8KEMnByHkAUdT5fEX12HckfaAvyiA94fP59WTTYYcoaUAdhjtUA",
  "key29": "8fhMnw9gKB6e9EAnXzzNkpdgCfqqQMGQRsxmEjjdWCEKSYRCn419i9hYWWowsVs5De6rkrnMZ1tZvdGNd3nUotb",
  "key30": "2QsMN9aJ25hCvzcT3dfKJ5Zo2aXY2KdD7SjXSRn4fEHYvsXK995LmSboCLWTu5Nx42dsY8MceSv9UDDPTNkXFBWE",
  "key31": "2Eqezc98MLjRCsc4ZXid6AYNqVtEpm3C3cZfBSvDegBzCs1zjGF17KTnugRfhm3KFaF1CrtvjiXCArwuxT9psasN",
  "key32": "obXfhJySL13oP4TCHMEFNwTE77gXKfRttBfHTzDVwRTHMPPBpAd3MLWjoD7BxNEC2aC776aUvW8ywWUntHMsxb6",
  "key33": "vT4y8iR4SZSGKnDpMqAhbSaCAwcVrbeth6dnWfGmzZzMJ1a2f9aPvhRDyj6cMVCJvZAb13fpLAd7JuebUhw1z5k",
  "key34": "35zzc3XM5ysCXKF4xi9v9jbbGkiXVz3FWjpzrs2mkbRWgSjzfKzNH7VtPXs6eTR1tNNdG7ETg8ThfRjvzkWaBuxD",
  "key35": "5PAW5CUiTJecyxAjXCputnoQeUy6YE5FUjbp1duS9HNYQVfeo2E7yrZetqNSu53DoFpcq47jDZZUodLKYGbrVYCY",
  "key36": "2ZnbmyuvZ8LQ28ecghvZvRbFLZKmvRq5RyV8375EuDkSGX2VjecsQgLsEogtvNNYWzCZmEhu59et8LzzLqq2sobC",
  "key37": "42sGKMneAee29YMUtpaUigojXLubrAcPJvvjCKuyq5UdjfJ8rRQLCZ3XqAeDLwNavzkYB9rct7vnXUyfGXPUXJv6",
  "key38": "3pWZ6mXcub65KyEZEnoAmy255ib8NcqSKftxixFJAG3TW3ZQKt9Dq1ufH94XzbXLGDbo4XLRv4TD8fEPaUMqMrGQ",
  "key39": "4YmgGVW6FWPWHNBrbMgDkkeAzimmdM4CPr7CNhRfPba9TS7EsktZDDFLyiiY88tAt7ozmjKFABRov8apc5MQvav6",
  "key40": "49FEpU4N8HVgb4fnveurS9zJ6uQ6rGk1vPFnKeMq6n7ssDTe3VaNg9ETrLMcuAEwBfN3uhSbYL4h5rB58d5VCA6d",
  "key41": "5TuqKWqdmHGvfERSw48RyfMsVraJ1mNRgR38U5Cq9qjbx5g6QVu2etsk3SraFMVQwna7Wdk3SJVabsBpRsTj5YfQ",
  "key42": "2mH9LALLSHffkDLY3MC3p1KpXhMDqM5xMjprfC3m9pRGCjToFZCVVAi2pwBVBGcdk3xwTUfXc8dvjnxgdZo3LxfH",
  "key43": "5rW798cNrh16ubV6H4q3K696UaUhsKSF63mUDRkmJDzxyN9JDMhoFQdNUYhdn46J4Se7BR37hDepfiwh2tEB173D",
  "key44": "5Noh4uSg1Nh61iGLuyMtNApk8uSRb6Ko1V8D2eAN32m43MJsDeMg6A6J1k7m7XtUgwZtY91pZ4Fm5ix7pVZZ79f1",
  "key45": "HYc9id8cqQxSKkYde36EQsQKe6VkxvkGcMQsRbJ4LuTwUEA4h1okskQ5XUniJkajr7u6Aqc8FCycoyQbBysAagJ",
  "key46": "ShrjpyNfiwuTTX8hqCciboHM9FsF7Y1a49LNPNsygaWK3XAQ2Fy51kt1Tb5VRJ7NrKfcMkDuVHuqxKtTA1KomMA",
  "key47": "4qgaTcCLX7w6PHdNfbmwfe57xbt8EitEn4M6syJavxk2F6aGPJGcGPNqsDWZV3BrAH69aSzR8Z5X1VdcnXVTEHTd"
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
