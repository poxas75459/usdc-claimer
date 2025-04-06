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
    "5d6gzq2CFdosDRuxKq2dBQEoE3Cke2rvznP9aK6ub3jRbkqgUpbgcek39BaqdyHJWsuBXXEaVwLQ8AmQP6zF1mDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WrRvukvo5hbDVX3bwRArkG5vGe6AegFcLPjvAAanBSj5JudDNkRes6hyFxa3MS5bDsBqRmy55mLSDznqTxnKR6y",
  "key1": "RxzSJLpahoVE5uLWom9g4m5jAW7BBs5YrP7UkQCb18UxnrUVUxxLNv3Wk1AkArcyxeoVV77RxZsQ2GMWqCdNZwi",
  "key2": "3ZrogUXfvdsEDUmKphBLspcupu2AQ4aetcpQR9RYv8po3Kq3brF4hzSYweRbR8H45GLu8anAapEhZSTqHbqfr3mY",
  "key3": "2Ev3cDNe4Q8DEwVDa1gzhpGicRNWUWY8689tDY4uSVdjtZxenS2NUpPGhGaWQYFjeeDjWbRcRr8792TRHKDmkUEc",
  "key4": "4Zhu471BFL5ZnpPfUwwP6QzVdemdAKcLxg7Z6274RJ7g1piAFmbGAtdPQsUfhDDYtZST9uWQLXpLaduduYW6UXP5",
  "key5": "3DJ7ZHehGFW6Rs8morQeHS6VhcdMD4bNAaJMV5yW4RdMSJ5sDmXTzqaJsgj9LQ7URD9W8KxDYW4XN5RMU7hZxhgc",
  "key6": "4SsB9vkUxZTeqUh49JEZYnhCyESLE9P2taud87aQP6UB5pnaxxYuqkvS1uVUAc7zR4jNLZLQFGSGj4251inMJZyV",
  "key7": "ZFovhkDKsmvkVuKim4nRPVAXiNeH9hhPPWbwM9vC451MimrKh4uajo4j7zPMzMxxnb6HMABjrrxsDB7TyEZ2cao",
  "key8": "zy2CEnBU7xYTFpuAMjz2DPgfCzBxnckHnBQwkrjiTfeiYacHyBnMYkbmwQv2v1FDqSzmgUWW9PWFeiYvBjC1rbz",
  "key9": "3eKFodSTfxjVzZaTmNFFYNycaREMRuxjt9ap9FXUzaDBwEwp5CrXipUfRN5yTekRqL3jAoqn7cGjhvRUKmxG6cee",
  "key10": "3Nb7qmf7amNxCnZdc19PXxAJACZV6S7bnQ6rc1kzhmePdm46N7ZJekWtE54JEVgs2dJ36WfC7a1foZ4nxvkaeyh3",
  "key11": "2F3nuEiHg4e9w1Pq1eevUNLQhLmxMjZhJa679Vd15qh3p5TWLWTtpN7GDxye9scsYVzE4jvb3jaDuRShhX3hu3Ju",
  "key12": "32ekQky9u9S2C7h8d4RbtiDru5J485f1mJzUbLH2qYoLEHMJPp2WkvQVw6yp4ug2LedyqVJGfsMPSrFSBmvJ7Btf",
  "key13": "5DDR1dWQcUKoaZCqX7PZ6j49necVyvmYPJ5Hg1PqpS6oYBWJ4CsVNaNW6b5FC744tC5Popxj8fPfpxWJ6GtFPPTj",
  "key14": "63g76wiCD2YhRuAnuwCt5mMon5aEvop2L7mMG1ZMTnADvwtaaoWUeKXr7V2CpTwEbTw9GCm2aCqGk5skfQbDp9JE",
  "key15": "4eiAuTKYP5B2Sb6x8KvCXrEHoUCik8ZfvJGy4EN6N1pokCsd27nUahBRsEuEyAApw3o2RuFdYWD26s3USSUQKFc8",
  "key16": "4nqdFP7wKuJnqLYyZjENoCMMd9FSYHfT59v4ZrKgdt9dfMc85826gj3j2JdhEJKL3ToTwY4CefCRZ3sbHtjpW4hE",
  "key17": "3pFAga5KjeyfPE8rRomzDszLcR82QEfta2azUdc18TQHS6SDwFVZW5ZuYYvSkRuvByuro54nuBT4M6WnA5TESttB",
  "key18": "3SrRe1j43fBjEgnasgc1B5uzKJkZfkyuLvFz22BpBzrngc61hEA2Ps4LpYrbYHBLpG78wgRqZJiJiPJE2fTSp6pa",
  "key19": "3wZdT4N77yZgTMfe6cLJQuFE4gk185Ew6GoK6Bmkg2enMvRzCXRRzkTqhCruBbZHabhBcPHQafKNY7SPci1hghEg",
  "key20": "2197Zn3SNVPAJDiKScHpU7GSpHeHqMHzuniLgG84zWFb14mXLvTcBfvRZWv3KBVxP3te86Xx6JoUViSgvycNqoLw",
  "key21": "eMHU8FQNYDVsBX2QFoVHgrYLRZWhkV9EUjrsheEMb7bEeVCBDkGh76PerxKaATKVnpGbjMqDiLDUEMzuMidwMdx",
  "key22": "3tdUVvs7iALhpU2MjghXHjk9z1NT86om4yjWEmhLfHqPhDvHNonLP6ZE8b8w42UTLLqUtP3AazN5ipkpbZ66S7gT",
  "key23": "2MSM5GsiqJAGB4XFbrnEs8VQdn6zAwdX45gxjfJKAdHGFMeFtmpLUa4d3A4ogx7Kra6ZmdutRC7pjavvvHnDofRw",
  "key24": "85MQx4EHBfGKrfXziuWRqbPRxiCjruurPLJf5S1UJX6aWQFQVxrP4mpbRD1GVyuj4JGZyTdQ9BmrqLptRvbnNXT",
  "key25": "4FkoLJCYpz1iAMRnHqBXeRbHB6jZ8tczZe2CQvSSgE6WuMgkpa32xi8UYpqKQemVen5rda6YKqQ1UG785CWTjCVa",
  "key26": "A2hFHrB5T9XNwZW5SmGx1zVR37z2qvnxVdHru5RHJewYKtuqRe6ispzjbRkRpWQ2MueexKu3oodgAbdjfUY3VBR",
  "key27": "2zu2mTuhq44X6DdC6CcNc4TpSBdGixJDhvBxQFbqVCx86g65gopqFvoUxb3rDhCQ5fLYDeN7mfw9YKV3wyH3RR1X",
  "key28": "3yh5c7Cv6P5GLSbWVu8e4b87AwPkx1aLLCJKtkNpCNJGyq5aNJttsRYzU7Jfhme2fa8TF99BJegMJEqNtcByfxKS",
  "key29": "34KAwuwEK87gUoTCTuVhevVtfdoXZP6PMutyLSR23umDsvQuGDvRahyaPvoAUhShajPbpDUVZZsU9K38hjLWkBb1",
  "key30": "NnowtSwKjVwf9mdkJpxnMQ4mueJoGHYvMdDwG6pKg98HUkFVJGk7ttTMh7vXihZjudtPbivJBcShTPKM4x32C8B",
  "key31": "5gf298RxzyRHPVoo8qEXQUzpXQW8Bzxs4XZm5TqJurSwZAfZZWceJLCxZMbcZBcQBfMAWFsHU1hBHPb5GC4vLmVz",
  "key32": "tjNxchrRBH3EJ3wMiSNSHx2Shxg81iWR1ntfbXWt65nZ3gTAqY3SGdpRLN8xYVXP9PqeQdmQowXAe5gUgGzypxg",
  "key33": "4hSG9TS5nGgydwm3kE11sS9rwkuDSMfdUg6vK3uhLF3yxgnpwTZ96SrEcCjsU8Dx9jmCdKxoNNafDq2NH5ix4wo9",
  "key34": "5PTUJ2whq2yVTpgsNSUa8xg5c5SQgpK6SeMaT4Y1BMpZTJweLfXPRvH1jtztxt1owsN96kynGE19CT8PH9a85FDA",
  "key35": "4yDET4GFEZrH6KSoCZEDBtHJyN26xcBgamX3XuKsaszTuSSTCjYfAAFFUuAGpdottRZrYNLxRV82jBzDrEJKw3Q5",
  "key36": "3orZjwbYEvNbGV5MHAn1cmrHcrVjsBNE2qAjjrHvPaDLCJrwwbmTTccuPL1nwqeAZdUbdufFtLGHVEbeEsRZsDue",
  "key37": "2SRHJUbkfPcMyipVyTyrTZSNP6ZqpDCAUXnXfHtbC31Uqn9iP31RsREBoYtLg1ZF36Y67jEUyJjtBcXax3kJN2BD",
  "key38": "5ECznffSBUj3VWZWQZmZzLcbdL5TZiEUFwjm8K918KHmBrKVxGVt6jw4seHqCb46P5ucvPQUjgro56XnxPWQ6uqY",
  "key39": "ECwSKK1XzZf1fZDCb8tT8Sga3v3xCY9BY9MsqvAAUq8UjRWKZrTzTsJiNH6XqxnsUwb5cwWpR77EvJEDHvd8phQ",
  "key40": "5Bw87fTeuc1eMvbJCCTswWMaZw2jQSJvEx5Uo8yyZuSuwtSD2D8Qqyr7Myjjqc7WDf2B6CWzaAfd7wEMCsFgap4a",
  "key41": "4UnHdRA8rcQkqwUrZUfdeyECsNw2Fk7Nrzy8TbwTjHYk6yrsMuxZidCXJfCFdCS2YghMduNkX8anf2QK9EMfR4rJ",
  "key42": "58DpExqoYN95YSDrDwPo78PkgCJBNB2L19vMnCiHFYfSPFDc8qYzXb6wKerr7fWyyEdZzPX5HmyTnPtaQXVNT3fZ",
  "key43": "5HHPx5r7jEEMSQfPcHN7Jn21Ph9P22Ps8sM6Dvayejs54DVqg41UsbP9tHXFxBSRVfbvh4VbBmHFQjMrvxxVZFwy",
  "key44": "4hDqU1wddEQJgUVkgjGDbf2Y5s79RbVowUhcNtBq7WX2K5vstS5KLYYa8U4Mnvm4Z4u1X2RXXxuPJ54cg2wvehn6",
  "key45": "2NdvBL3F5fMbt4wqonykEDGsKDbccgd92ttNhQrZdTksN7WUWi29LFNyFmg9nUMvUdqssB6RGeagKevqMJdqPLPP",
  "key46": "3xDdfk8JpEzBevKY4YBrWJbjy7U65jL7wKgQJ19kr6wbMNBNnVHsNQ8Nci91D3i5YWuS8pYndhHu2pYXt4swstn3",
  "key47": "2zwDeoqJDFXPCzKGpZS3HUPXpqTRKHkBm6tLAwReNQNkKWLKCFtLvYZAXW8pnG79XqgSg7vFH6ukhnLT4EB9ic4V",
  "key48": "4Bk45fLZNmfjZ6zxSGFJNh7ngSXiGayMURAetwHRJm3LE72dh8XDP6cnknMiPBPfcKKzbWrSA1BiFUTGDxuyanoh",
  "key49": "52fTetLJKiZNDZzMEzFf4HGSsvfRcVSKFHNSWVm2xVhBWX9LripzkH1ppKQtfyRXuQ2GF7bjpdDMQd3GX3tQvhME"
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
