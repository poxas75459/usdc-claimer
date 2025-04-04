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
    "2WYv6uzVinYx4MB15cpYtSbQjwESJ5xdMHe2JysTifeYVZqth7tpV3nztSZRZyw5AMCadT4pMTQA7pyWyiAKhFrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CeQA2hxtT2TNcdujJRFFKt2Zj4LBYA2zpQBHzbXoaqj2LNzB1S3mHpNfXnCWW8MoS9GWZbso43j7RzKCAayvJey",
  "key1": "5n4qU4Z7Y6TJwWk1VpFZ7w2DTurkZ8UGr6jgYQdVqR1t6nrGrPExP7zdNcLuvqtJCdjKikwkG8X6Wh8Vd8XR1Dr8",
  "key2": "2g7uRGCqRSYCq2Ds4SomAwjijDnkPCDGHg9HSqxEKvXMuiPuSndbmQ46fYB3YaPWW5kVtb57XVnsNxqo7tRfRmrk",
  "key3": "3dDWNwSp71PtK8J6mN1wsvvMH46wpMSQjdav52W5UC8sbjhUq9q3eu2qYv8pPBH2BTcmgA7YgiobwGZRoyVPS47b",
  "key4": "Fkmjgmtrqiw4RCVj238wSX8yesUq3wNhX1T7qd1ojuPnk5Y3rSeALXmbxcb7BwTtPNdeG8nrXUG2ZDMXkgeA2XS",
  "key5": "TtZxjkSC2SMmkyCZ4ZCffTwS8qyw9Z3y24KqFbnAkoEbR94AHB3g2RtverA19z9bXCCSBAPmY5sL1mNC4GKmEmQ",
  "key6": "wSg1sfAjKxE9imRL9FDDe9hGc7JiMy336HPfSRpXVHgRUD2zqXMFCCxa5wjez3GCrPhhCodeHYyGjDLAsLYj5vL",
  "key7": "4bCbjBS9bF9B4yj8zC8WyVYkYPymZK9hXXVEBvLsDqCnsWN2rQfdRdmphcX8ichJRodVePcoJAXSNG2z7aPAECAL",
  "key8": "5nuNf2MB7wvYLLvDRgcpQyDyNpXPs17wFdB3c6t2fKmWs12b9XKtNTXdmRUa3oj2ELeyauiyN8JqqP3RZG81zPKT",
  "key9": "LUDZxkb6uAdjRnXgbJTrzWDFUTQzw14yViyrc1dpW8sgzWVMbR4PRHLpLqKoDPhrTRGsjDZ5JGSfq715Ecu1765",
  "key10": "D4ctcv4Nznim4sQ9YPvNtcYMfKb5dwSFKyYrTCkyd3oFFCcAAoYwNntMhTSqCm1sKAXUZ1jz377JPFXqbjXP9Zs",
  "key11": "5R1Mz9t3rVEzJ9hXCPf4VjFvu1VgMnuDrcT8TSdFTrVZsXi7BhjnVwrVfsdsUqwCHTJC8RtH3oCVxyzypyg9eyhR",
  "key12": "61Q6YAJByAvcp1VFjoBoh4s5dp6TZz7g66MCuqfQTTeEsVrf1dR4s57fGGbW1eNnrJitqsMRoZZE25wb1FwqwKyx",
  "key13": "54agkQt4rjkYsyMkBh8DzgyAmBNYtCjbJiPKTvVXsUrWJedjc4UEB7Ws8375jnAqdK5pMXrzm4eKGcooLULoiwJ",
  "key14": "J3NN7FMtrM72DFUWJdkjHmZNdabzDU6ESXsjFPD3khdmaztdrg7xoGgPFFqoLJq5Ef9HTZz6qkhNnGWQkYqPioa",
  "key15": "3xAyzTGEMugrdVAWLcEoTP6RYwpMb39QAkrdfqeq1JMaFBTXiE8VMiSGsdfhJPRAXtNFxutb3f2H1R6pXBJSTYES",
  "key16": "3phbFbThuGVDESAbfXUWdwtk3jm5qyL5QQiCHukRf98n7xkspEsvbmgDDhWNA29eMmWunbf6qSWnLLbSiUkMTmfA",
  "key17": "2FwFAgFBasvfMdFs2L1K6N5MZqB33UPk8rMSzALJMYuonVEytCFywuoYmN1myaUgMYSd9WNPTBnJisGzt7hyDLZG",
  "key18": "27hsrrkA8SAnjmcSYMdVGMveFqKiygpnvfUAA6UAWjWvaaG5gy1LxHuh8ghY4znXPfJCC15CihJuhE15zqHSYNQk",
  "key19": "5NENwofVz7eYML3ywHc2VHCpbcJSsHn5vfAttQRN3D3wGat2tmJLbtYP68ZdBCGfYudV5QA8X6PVLAjS5GdYVjbK",
  "key20": "Q7fNcgEGZDSUEVq3LKrBtcbdsUPNMMcFdPMi3DXDie21Mm2bY8ze53xt3Tmn3WSH6cWmoNCHR5vQr2TsUEyPByc",
  "key21": "5vP6bK9EYVQDYtj6giCYQrq21ysbAgEPJJr765Eq5XRULxi6sNHsXqKWvusrnAuDQdk24GRrQvNt1qo6JzdxY9ex",
  "key22": "2mSbextEpHjRp7ynjHbYjKx9PCDDLyrCKRRMxUqPbQeV46ebkwu6nhqhgFKNjMi64xTXvuriAbjMyvgH5NWrTe3z",
  "key23": "3bZJxn6zhUeN7KYjGPVZU4zc9G8aa6ZfLtPzbeXoSm7yGgojDPdr7rftjM47FEgVEcEN5zMkvyAxdL6ykF7xjCr7",
  "key24": "4fjAdys9qktkbw3rz8VF9n8qpJQcTrX2ycwjcR4mQwV3tZiNXpVq4SwmbHUrUFc98hXoSAbv6BbzMS6hppzqJtvP",
  "key25": "5BqYm4RnU3T1DwvGNHjBgm8vfjJD1LCnRNQg3X43yNgs7CBUPBry2Fpea81Ephb78kLi7wnH7korP4rSB3HzJ5EA",
  "key26": "4Qchc6RQ7ZrJ2mjXFzLD62WVEo7wdbC3iGgZa8TdW8F8HX8S93ye5Rwx8xPfEhrsyNk9vnkjhLMBNm8EhCet4xpm",
  "key27": "7ThMHHdYqa3vH4WHUMzrjWe3raMGgVwz9jL1zhxcB3pjZuC93msdMwRC6hBXVi83TbmSHed2aZqG575tGvu3qFW",
  "key28": "3mQG9uvq41aG3mHDn1Tb2T67AitZXz44biScjg77JUsAPakE3Fg3BuME3TRvB9eYRRA5as2vpNF1fSkk1NToCjnz",
  "key29": "5N3WTpmX62jaFHrWw8L7KdfD7SMxtYNXzBFWMEd7N6HWvFFQSpqmLXPTvqAbdLKfYvj9VzEpfVQV5PvwfLu3E3T2",
  "key30": "2M7zGUbDRLoLjKH2XJSxtLavByR6Xh8gbAykCcVbTqb4DTijdQwEUBob1m7N2nRQDDRQp8KS3myLHxNYLLj1CKoH",
  "key31": "3h7nw8AJidYM6T2RH82f3z4SxTWPMsFnyNJiSHGGYHLuoyY3i4zt7qx2nrH8asUq4dTmXPpEKZGT3E1JhYZEvHdn",
  "key32": "37uYJ7ciz6KH3HiGs24XAPDf7yoQvC8tfodJeqgPxoCHMQB2Wcj3BAaUUEBuNoyo5KPyDFWg2quhGT17gLTjayoi",
  "key33": "3cZ8sYF1dw9iN137x8tvmES4ppMC3HN3THMgdzaYZ2CJNWRw4BqcArsefHRuhKLUSGDPGwNCvynATEjcxgaYrCu",
  "key34": "41zBGxUSCuMKNnkxFGCEWL6j8jMAPGn4nwEwPyVrTxpVziA3yRHFrCiPgFxRwZcpYm3HMRKwMyLWsXxihxN9PSh9",
  "key35": "3JAiXw8vEMJZiqFptespe8jMgkoncVkWDVvh5g3Lg1mQ72qdR3AUmeoCoYYxLn8958yGn32g4kpUF6v73jBWs7Bu",
  "key36": "4EnkhGN1X7abbaNsxyHNusDHcMWtCdw5vLVYeHmSATtUSMtyzvR7hdRWR7UTF2odb8autWdeSw3tqqLLnWYCvzs8",
  "key37": "EGoKzLni99EBSQqHgzTgHepBLYAprFNtuRKnz6XoYPnfJjtjNMMAHz5koAWVWfC7cnvHBcfJjDz1FQXaghLSXBe",
  "key38": "28qgZoPqiMULt4MSBi56dx85zTHPFaZai778G1iee66GBFTgduha19z13pgTTdvyevnpSj885k3hHugoCuTQdAHz",
  "key39": "5zRpGbQE51NnHjPUJGrhvy5jVDD7SuJD6GQtPXGASg5jMdTeqDD3ysDfUrYyVDpzHz9AqiUNpea3qRRSyVMGgPC9",
  "key40": "2PX4bPbisCga4w9wBUh97Lzvzr8qE5gwLjmJheyLhSGEkiBQ5xZkUcG51rDzXF9yLmyAC4pZHF8fnTRc3uZMoJNu",
  "key41": "zjMkejRx5WxKRrUAUoqZHaRbNXcR6es3qoCKWcy9FJnf24oS9Dgo2RggbmA8t1KsxMyRqZ46fRdKL1MNgfCA8Fz",
  "key42": "5Q3Z7ULqbA4X8eMCfMRAS3Gg6vMKcRBNDhsZDcfgqkVYwejcY9iMMV6yPBsPeojJnbAJd2JZE9kq1L4FZUdgBNq7",
  "key43": "3CNWTBm8k48fPmb2hdAYG95AmVJvqbi6oYwXabnwiGzDWepMJv5M7ezgXEaWRN6eXvrYaUzu9qMFywiFgrWMZqM8",
  "key44": "2i2P9tDfT6f4LY8p7Vssujt1PPM3PsX5mw4NfLHBD98uFwksmupeDQLsrbNiHGGFyjtM2retRSGtGe8E3XWn6hzy",
  "key45": "L4YodQ5MVLcFYKczhrdNjuBg7ZrGCqPJ8kpYka7XWSVGJqaMdHwB8FHY4VFEqSegZXzgZHLVzKcXTrNsHVAV1PQ",
  "key46": "4QeTHaobg7kvuJh299ndemYVZxu86TJ7iFWWUpzCBpHcerdqGkrf1ifMudZ2thbtU3Vnmj4KwpNZBqCiwUKNRki9",
  "key47": "4pQrmiiMPuDvbynGK4MEtdZRxTFc8n852uNQufZ6iZTxS5vUxxLZ1eZsZjDUPeGibaoPuAuuv18SBYVpxxNV27fF"
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
