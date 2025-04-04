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
    "5YMzH76uWgcFmLzEBZtubUhLrXBfUSjMzbEyFoGg4vMKbSYJ5MRgrNvzLA3LHuzfKbxRxZLsAmJqkKYGZWF3LKME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kDtLe5LbtsvW2R3WRCAuNLnPzCwRm1XXT5rBP9GJioK2bRb53St3cwopEWPHq9gdmYnANkWvQBf3BSMA6Q5WigP",
  "key1": "oCVGVJ4BTfK8u51n1Ye2EvpUcZhdCkTNEohF5pEFYEyyY3CGLCFMcjSrC7vm6NBr4nBmewPm1HQjXS7K3uPmGdr",
  "key2": "4CLHyfTRjXj8Kb7smojYHq14P2GVFdREDuPeYGYWQzaeU9Yht98AzX2swcYikNju8mBBTp5wcSmuxv1fLs1mfF7o",
  "key3": "3o1mTAZR19B6LDDpNADURujqeZPVX81KAfRFH1D54aQTQ1fm3NLwviBoXpciy1y8Y7nSb9qFHrBaRenREVkfNRN",
  "key4": "2nXbqdgnkKCa5U3QfVLWEAFQWs872dwMvSDgLyTg9B7nnRM3BPCmKzHncWymfhgy6HQVVaYyLJ21crUFsRpfy6Mw",
  "key5": "5kZdfumGPuJuQsegDeFFki3funw3P95WwiDHYviju1cL48ENkP4LUHVjF7Cx1sFNd4RgVBL7Qwrkv1pRjt7mLRyn",
  "key6": "5XGRq5Xg7oPAUfzVGCB7uqFHQ6HEaYZwjuyYT48nZMqAD4kkyghWN1aAthTgx5ZJzrATPr1ERzhWzX6kfXLwZ64w",
  "key7": "5JBe1BGVaaZZY5F3GVB7yzTPcLVn333qAAauKd8jqa6ZCerU7G3aZJcx8mQ1gMz4fS1faxSYEt31vrzVTJiD7Ym6",
  "key8": "5UgcVqAaGaKUgfPH1R9ib7J7mJq31yVE7UZQYU9NzC8HdhHnLZQ6pVWddCGKmLr1KsF6v8LN7u4oZTGGuTQxU2dY",
  "key9": "5FjvXSzgStzmn75ZAQ6WHw8XdvbzJo1fKUmuzDiYXuRfN9cogEcei9NXSmbkKSWWg8nSghymCzXcSjPX948ecgU2",
  "key10": "2iLYEzDBVSCmJvko3iuTqYXfLBwzKhk6mQ9cLtwKui7wcRutSCXkYxUyNDm5vvAwsjgbPXtpcBnshaCKkX7LpvYH",
  "key11": "E9t5YaiKWAkXXU2woUDAvzcXPFH6ofmpyTtouaYfncktG6tAkdbVpdt9XfGJkmkyoBbtnRSVzPmergPWHwVyH5s",
  "key12": "2iqNarsoWb6Bz7X5Spy5JpHnXgKMjfYz83Lm68eVz1JuD8YBhxmdzQNiu7AnDYU158wxXDjAnCgwkrLCpo4p7zi2",
  "key13": "3HJdBKxz1zzWwZw9A3ji1GqLsgwUabWbZ6dGePHbPfogDmX77tDDGrPCKxsqfwDwexzNDus1ec3uMkyJFMXvFt8r",
  "key14": "CRuibkCL1zdG9e6v3mvFSYN2VqC5b7TCttzLBCJNWrAoL6F8jbCST66ngZRotwdTh1KzZGhHP7hSsuTEHV3MJ1Q",
  "key15": "nqb5p6Ns68zBBs14TsZizEeH3XQd6LQCurkGnzkYX6ParqoGrCCe6vkTB1qnqczNG6Vb2v5jDXJTR58cL8SJvKZ",
  "key16": "63bczyFUhVRXsh92jywU81DWMZ98jEbia4xbSeREZ4eUEK8mjNyShjrrMNzCccVfHKMokgRyBTJfKScd2xPf8VPS",
  "key17": "5ifuoSh6oR25UQJfiCFRjEVRtgKjdz9nNQu3c836mLUztEwrRAErzqY3vvcsXwgry3pcYktXAzY2ajzxaDTgR6k9",
  "key18": "5ceaMvuAd5jXui7m2EGSEAiDqfcuVkomatLng1Sj7sgULxiyoatNi9qrqvssMzpHKVENPa7k3ADr2csQbAUgQDCc",
  "key19": "3hFGZe2Z5bNqLwrBqXf19LAbvG6JNpKrt4r8MMKFeMkUF3DsoYx2azD6EvN3pb61tMEqL9v2jYMC8ko7Amxsbcuy",
  "key20": "2cnWi7KdvRpyq2ZKNFwqjd3FfNeBKNsPkGfZtbrSGF122j28BZxLdgvKkVgdVQzRYBXBM7JsbaJyVsh2VYESvuRL",
  "key21": "S1FZtv84dHW7yTPpsVdRAg5PD8wkXzFTaCWZYAeYYcmjd9RU5w5NwbZBCWTAmNKFzhJ8svVHENzcCTWUgWzS9UN",
  "key22": "4uxNzcHnK17FpXzVrhcP2RirdhRVAc16c7kbweuS7Z5ofgvTh3NNw9fG5YUxPecZYQrVXzozJ62ZiJv5mnDrnEKf",
  "key23": "5bG9N6tyLLN5szTBD2Jnhr1JaUwxoQcrqia95W6iNpsxW7FdDjh3UGRwMnXSK23SsoiBdh43uHHE31ACeesPe4Qa",
  "key24": "vNruSFuHi8PJa9iAsuKw2f6SWifTBhsiwexV3VevP5CLXC1zMBC1Mg2rGm6J9HJ3gJwgniZq4RDKbHfgp7VUcJf",
  "key25": "PvasLgRScD2THvfX8TBQsYd6EqjT2ecADyoUcwcNqyviFggoe4MysEKD92rcQSW3BovkP2UCezJSqCYaWs9NNXK",
  "key26": "52LbJysBRAgFVZqGnqZosKaTdBMgWyd8Ea5wQ92DoDsqz6uddEGbzb1PskkjPy6qUtry65fPtMV1QXvKL8Dg39bn",
  "key27": "4N5bf5xWqXedwAASnTP63ALmBXgpktTPsz3QHRahSPxXbxvGiuSg3k7HEBGy7wrpdW1Rv4METMJiJKairhksmNuJ",
  "key28": "2DwQFhtrvtSyqPHQcS5ki6Q49teiuYKgK6MAmtei6XJnCJA8ebSWRdBGwyGK43aMC2vXDJ9ZNopbKCh2sSqYpMux",
  "key29": "3YKa3jrEDX7bvXbcRpa32EqrkGJgCee6A9Rk3dkSzB4Sa3SStPqsHZNn2ysjeVwcsf1cHBdvbsCee8GKDW2LPtRh",
  "key30": "4FcNoJsxuNK7DCnqsaDTrPtgkfK1PdKPdeq1e7iruCdWGM28FJuVgxPuLTCLyEsWqUTXy3Pzgn9LS8rprJbwgSk7",
  "key31": "3k3FKi4iG8HgxxYAjrbWDbWX9FoERbGyGjhxhPXea8QZcqZY8T7fMwYLL891poJDLXWWeBKorooPAsHwzxWKNB8H",
  "key32": "41Yoh3ULRPayLLGHBrhvw7tKX7KS99FggoLdKC9z7YiMmtH7z3kUGa3je6kUrpFDkrMAgAHtXM1BaPkYj52PiBSR",
  "key33": "4DFKA9UsdafEdYkfb5T9aYF6ZjUoUxeM21qcv93HgaxGmMrV1K6Y9ZC5PtCzQCFwYdchFrqwbD71Xz3fdWuNiRiR",
  "key34": "3dy1URw4qxzkHsE1i8ZY62wC5gAdwqQwajsH37cYKp1eWumVV3APTiFv3evnhwsSFdz5VrGRwV7XSYwHSagvDhjZ",
  "key35": "5bM5FPbXZu3p2kUqfFBHuaPgg28HQ5KfEfwSSe8p131eaFW1zbVAtLqDCeaooXb9RhD5evyeXTXxqKizXxqZdAfa",
  "key36": "2o2NSrvVVt7u7NhFFRCt2vqNJ8RtE61HrZvLZD6xxQAWnYGivaft82YHVKjE8y3MN5nTEA739rDAmgA6Nzq3rEks",
  "key37": "5weJBVGRu7uCB97Ua79wJdq1QptB8NZsuc9GuQGjkW3HvHCnNNb6oc9pGAx4dLRyqTzQYjpZJnjwqfeNzXU7CybT",
  "key38": "25KPcjcf9z8NnVQNUMmurj4rDuT9rgSBkuGKjG4cGkmaFGRiQ9krakCVgdV2qmWgJ617781hwyjUoaMcbkxRpBBa",
  "key39": "2P1LFphrGi2sJwBBR2faAGF8RSgF111uCFgpouXBwKQffhc81ziEPBaMZUytLvDaG2QrDpyTiKWC26kzPihw4Q1U",
  "key40": "T9PCput9GyibHFpuC2qREEW8tbjS9em1a1N2KYgoDrWBZgapnzGoSuyVzkCpw97ytC5RWBHYnpuDxfne7YNktZL",
  "key41": "UFDiwLq7Czg7RG4Q2yvMNfCqQhukEbADNcXmtvfnvtSvCEjHdTg5naWdzVKhj8fZDa4jLM8omjE288JDpuDKVFX",
  "key42": "5Fux1CnviK9rxF8Wf7jT4GGLcDdw5Hk8dFBBveSJtwzVEVGUtzNrW6xzACotF8m5S8tJxHpgfq2FYF5kFvik3c4d",
  "key43": "5eUWBn2czJcPceVzGjTMoSNEibLAMSqeubphJ9ce7yw5QG1Vc7KaBVgPzwezRMpNR1JZxcFetLD2P4jHLNJDUw2D",
  "key44": "3XjXFt6dbFc9kqVX1qDUJptCuzpzmMnkCvh9PrDw2gNK6um6WW7ACoUkeuUv8tvccQbNoujoHrhcCGx1h2TrAkPT",
  "key45": "4WY3R4Dzie8eeGUyYKheXnx3pBeoevRT2hQkEwt85tyzgHxsuKjjmcR6RNSkgQoivj6tpdQ7KRtdAYwu3QfSvyTr",
  "key46": "2g3CdfDuzevkq4WAjDy5mQJGWbHgRp4B4Nq4SriqGJsZ874QLZfSWHfzZ3MXpEG9BuVKQr1PQWLMQL392rmA7GwY",
  "key47": "ye2bTdiL6xq2RLfscNTCZVmoe9ZyGDM5TUtRjR6wJ1S9iPSvx1c5fsTTML26igzxEGvGcnU7Bj9QbsaEiJgsFS1",
  "key48": "2rJ6nLbiZ3a2YLdJ3uf3jhskxUeDMgUTa9rgSCiFS5XqRiNgTUh1yBDhUGyaQxwMeWeGdCkk8S1M2JFQgZw625TT"
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
