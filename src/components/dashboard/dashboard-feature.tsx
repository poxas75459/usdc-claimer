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
    "61fekVDw8BrsLfV8PmJ7T7CgwTbUwHvYAbrNfHjzdpsLdjh1jMbodPSVCVyfzRs2vGJA42udVUvtXR4wDX6NAxo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KjSLGaJ1PMikePpwKP98mvtLfeUUbMZW2wxjHfY84tbjRuw4sDigadxbGcZvKnF6YqRmQzaA43qNCietj1dY7tF",
  "key1": "5nSCUQCSo6HwotLVueEDHU8oA83YowS77haLDY4bM9PUTU8WdGQ3P2TgsqoVDESSTPGjS1f3N8GY93hCKCVXTTfb",
  "key2": "4qFfeEj2rNayzxbNB3wtzSk3b8yuxkmQkZkNqWoUdRFFUkvHFp3Q3MNCyFV75vzeGjvxFgpKP7nW5PxGhtLrK6Hu",
  "key3": "42oyWDSwbHrL5gTyY6zGJGeCqHWt7tMtiVmsiD5NpDpAWcmfPTny4RSRzhdydWRoDM4sdrgFiu2UMwMA2EM6SsaK",
  "key4": "4gitBBcHpxTacCqoZXcdDMe4QAJXTKBhiGqB3hqHFDZR5SbFYZpbkuDx1kaZAx4vK3iSC8rgWASaScKqfq8vAf2P",
  "key5": "5gZP4cybZhwHpC2wVE2bMwGX5uv3VPmaz7erjDZjA7hupRuHTQoh3Afr4VeCfC3eF6q8UMSLB5sCD6SAUbv4nGtw",
  "key6": "44He6oW8pjvtJrJA7Y53xE8nNeroL5owX3KA3LiSoaXcmsgwXHgDk3Xc1FaQ31XutGKjXRvFjqE7h3HduFQ67erA",
  "key7": "5h3nSLsPQ3cbr4PPoCgf8Wzd5SPuRWs2N84e98jZPBXnvxRXT4STf6yyiJzzjd2FUC1kLgfh1tknqx5mPMm1tKv4",
  "key8": "earFY78vF9VNgeEv4dyvDK4y6gBnem6CGA8AYksvnzANEkCuX96Jk78F5wMkBAzur94ezPq1TJfRpRW9TxA6Gq7",
  "key9": "bSvRKkcoYZi8Uz7yAR8HpU7g1nfr4nSaN195ksp9TdrmQjaYQvbk21dpwCYxYYW8BFWSKEMTYwxpKqyHBoU24wn",
  "key10": "4tJgkicb9RgX15vQdcyqeJ73CSBtFPotHRJGSLyiroQn5qsD1YWUrVZQgrF5gPLUNCzToriZUCWurQaXuVnosU2t",
  "key11": "2C4hRmvYDFkyf8whCvy9FgsAtTZKvwcnsb6tnNeyCMXDbfW4jfZKfajKb8vFKoHA4f1xQuPtvKkZHVSSqVpKo41t",
  "key12": "37ES34MwQmTEuMCZ5o57Vc1nroQUFXQKkShmFaSg76xeG3vaWdUjxJtKWhUKBcPDZBLR5R58VYgW8ihTPN9w1J6x",
  "key13": "BJuWHgoMSmuZG7txUeo1hTHD8d9J1FzD1DTEuPStmWFonNcNuJQF1731GcWEwpKnWrJG7U2fXAkxkpLHEK5ruEN",
  "key14": "4Ne9yTydppQ4ULjojpQ9UKonMqnj6oXuBspCaXL4LGzCcdHnG1ngES8Na13roY5ceXapLqBKwPu2fZptuJGA43qE",
  "key15": "4Kn4M3qmBR68ttepWUrvwRhK583Mf64USw7wwMPsUizwZnKveSrxDqWemqyCRwAixVqTu9mB3isa3J9drTn3RxHL",
  "key16": "3PfW3Fxk4wVxyBSAxt9F1HvhsoYbLcxiwa8Fs7EzVngpg4LEY7c7oR4PyMgwRFV33UVgoD3xsKjt2zgm9bZ2UfjK",
  "key17": "3LjHLGkw33gk2CCmpmPF7SpcL8KKvRe3nFAo6AqH83VAPJJJHgYXA3CW4a6jB3EGCkEsnYNbo65Kukwb5AZkWivX",
  "key18": "2QM2TVLJTq8tzC75S7UEPp4bR1E71v8oLvftbtpVeKLvJyJ7sL3qLMK7oKtiJn9PZQUHyMWR9pH25uePoseAEWFQ",
  "key19": "gmuw6iWWs2aRh3gWnvuwLXitJncwK6nx5qtDECWsQB4zqzfDNSuyG3oXhQqvhtn6yjFTwWoDiZnYStuaMLUz2QG",
  "key20": "4gACBh36JvDjUogWji9yb2ttriCe3eEAahfFRRvW1GsQB5e4Pe5cUQZZJrCGGTC1uvfsUNNDz87CZTU3fvRPUohK",
  "key21": "3HLF4XE6fWvzB5iyThbqVypRtaVBUE4EzXPVShypvtfS12XMyNEJosN1asMiAcw5oLLApGGrHJctypiYRoyh1WiS",
  "key22": "2XiPbpUsrNvrVm5ehJwUjjf7MpT97pvoDRqw1YuwXXyR4W8de1gLJr4PjJyhzDK6icoJGaKZpCotjL5cYzKX6gAH",
  "key23": "5hNQzDJuSbrWLn9A2tMkCAP8XEAHVqgW2heaDBX5XYgo1eqFGkrULmvkeu5gaBkvUUb79j3wzT3zvfyxt2uAS4F4",
  "key24": "5oGKs4nrzs4SobT3uu7uzSSaw6wv68u7KBAyfVG5u4PSUPtRDdG76jRM6LLUn2V4wJFRMUVSXT6SaK1mMXMX738m",
  "key25": "2V6y2bdhHYeDx5hSys2bQnuT6Z2uLdqBD858T6E2kLJKnHggdTAyX29MsaKhN1amphjMCcv22mjptXwweVV1dzEH",
  "key26": "33ugTvjm7PzcPUKmNZ6Fz7BFeVoBpEcixVEkFSs2kpb1NHFt3fXfm6ezHnZ5SpHh92w3eC4gA4QQ74FJiCb4wUv8",
  "key27": "uvoEhBffG8quPQR22bMsSLf3vQWzE5yJg6UaWh2prNQ6dNN5wk4LjsjJMCY9fwUv4bAKbJPCY8VBPjN2ZfxXyt8",
  "key28": "2C9AdPv7TkZmaSS1z638RZv2uv5dLvtdcRQet2NnZrRFLcgPFv5gAqzmvbC7U6yVnsiNTpfTtjxhXVBpmfYMyaV",
  "key29": "c2RfBp1D7FMzebAP6zhEYGfsQ6FmPbZ2hGhEQL1ZaeQjUbBcrgwg4Q66HKsgKc5rZPk6vkwiwmMethWqcn7XAEb",
  "key30": "SgLVEtRSahcbFXdry5FB45AjXmFz7DcMtN7Z48K8PxZbsh3rkoKq3Kc9bxUqSqyEhbMKCYJZ1sYirABdho1EzKz",
  "key31": "57baRV3gxYa2UM6EhRsAW3VPnHJgmQHcRPTGLq9Np69REbsvhnEHsDugRkTyRfxgZHxRsxtLnUgMrjWzjhc9vTZC",
  "key32": "44HLczZCzmd1KVXjeGhhCmJnAzLU9uAHpui5ocRdaw2Pjxdbq7JPqFEHBfJbsMqV3Dbtuh7wuG2TdxiREPrj1zxY",
  "key33": "53PnaGYxX1vRxVdJo1ontQpeTo2qs2XgUAphmX6Keoef1mK5khbfUn2GaKPMYLdzkHytjEvkBvkSs6GqjR1Q4dSz",
  "key34": "5seNr2KG9KXMCqc4bY6iVGmtNdLPg69dEAhweT8d5n3Zdu7FmxGKdovtwTVFWDcya4tMswzHaPXfKJUsZCh4EFPe",
  "key35": "48xtmuv5xnK7pXMtnd6Tm87kYMLFXvN1QmRQjFRBVfEAhwnXvdBkA3ge3Ret4QmZnE6jLaE9HX1S1iW7eaAPUAM2",
  "key36": "3iUYKJ3SzFAV6NCztv4oK4UmAxQvYbTQR6jnqt38eG4sVYHMr5H4vuKJJNPAEAYHeAX1BvAFntymR5w8msxjSR9q",
  "key37": "43533XS4eJpvX21s2BWmmCY6NUwHh4NsH4cr92SgheoyrHWHB711WcbmSc5WWPGWxPZWUKkhf552Z1VRTXYbjBNf"
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
