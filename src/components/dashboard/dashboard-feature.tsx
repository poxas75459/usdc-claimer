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
    "55NwHLXHapGhuERHNsaQ2uMdGHvQ1yUWvFV7xCwnGQuYfHgNnJxDazTSvJNcgmUHiMxTUfShmBQqa4hw5us7TBXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56zb9UHdmf25Q2Uu2djL6odt8j14CcfU4pvLMxKmzNk1T1cXRZr9XHKQpeWb2dUUVk1A2bn39TvwJHxGQqoAYRfw",
  "key1": "5tGQxbyRJePaQX6hp43JiJMeGcBdBYBC1ALf49BL2otQM3gkkYs57CWRFmJS9oCM93SF5DNN6nKKUaUTZBABqGry",
  "key2": "49wgXbQWMtpZJj9fUmLsPUUqaoU733X8icW2AcDqQuVDskwWjTxgVjiBkLxHUXoQQMiBqWnXnzFRKgeoMtYtfmbQ",
  "key3": "2eCL9EJSq2Yzw7yJZwBmjPBUJczKcz8ZaiZYt5poahwCuSijs5HpsDYBbgnyWY9NXASyHngD3rkBhaju8P8J1HnW",
  "key4": "2nMgoYuTJgERYeZLwkVDTqctkV7UzGSoWMdQgX566XAz1N4f6ZsUurNXp1natK6UejTPxcqJwKcsRpVCT2Pnbz4Z",
  "key5": "57pdGhSqQqqp6vfn2oZG7a8J7SGeDAZQFQhqpzzszoi3bdcGYfymKq8HTEQBS94BwUoxaUJV3WMYqejeiuZiPsjD",
  "key6": "f5MJciWEiLbjsx5d9MyzMeRXLae1MgihBS7YNkF5eEpFSgewjKKR1tJLiWVPzsYgTDRHDgPcagWzEjLsGDiSskh",
  "key7": "26e7tb98agVJz7QZu6fybPEcG9HJVAoVnFP3t4mPqfNyimFvCSpNpfaiUV8Le8sje4SYUoFMnLGDyiEQHTVYef8H",
  "key8": "65SBZadjn6mnxck2ei3gcfKrpqnijZdvNGhxHaDoQSJdvCfVKgMma8U2kSdmPESrS7Pvo7jqby8yxBZXPGajx9WS",
  "key9": "34yBS1X8oRiQvCGsUDtX7cCHddLsoqTk5Cx3QZ39PFuuJ3cMxBEvsW9X9QS1KPAUP2hGQ1VYnSjXj6FC98HkvodU",
  "key10": "3HtDwzo3wKbc5bhGy44jxABwyTjpFkgpKNLfVbWS2wRH7LDxbuabV6eihwCfVyg5rAVV453FBx1YsnKyTZCQmFmd",
  "key11": "4Yx573NshEeaDDEyBVQR5s9dMMRZEWbjzCQvrWnjyjUAx7oEuS5bAqv3FXYaVhMBbxbj7yHVgbCzrr6dvc5gAtLk",
  "key12": "zkEh7DwwQcUN7NTmrRuV47EvpfTXChGXGCqoyiJjuVKkvpRzLKqW3KpagmjH1cwBaUytppnZCaQBbUFeMVhsEQB",
  "key13": "3mUPESYuSXwH6D7zB37n2fkAMPAV1qVprsCEqaCYBU72Ca6UCaj2NpBmMkav63ocifQntr2FbWUfzhM5pJPi7LLA",
  "key14": "3E7EuPbegeQGnHWcrBmYLscq82Np3PAjzJuh7GckhMs9P1oVZvaY5ujAgBYhn9Rs81ErFpvwhKXCc1FNmW22CSve",
  "key15": "3e5BwqhHRgBrTZSFtXHTxBAKEhQW5rUN5dASFaTfoP55pTAsx5LgegbfoXeJbB1ioh1uh2YTecx3DDPGBd8ebvUc",
  "key16": "2VD944eobENfoGNwVhhzRTefEjNxF9Dg2CJtyqKkLuoGJff7TFMdexJbgGPzdMiqc4GpsRJcWtm5L4HRAYpefPP5",
  "key17": "4AQuVth1tJfuYJxAs2oxE43jkLqY9pzfqazEt11EtvzzUXcoi3zdcP4ncB3zZXJNooMkbXZwwtQkLa42hipe4MYK",
  "key18": "64D3mSrcsjLCphRaLTFPJ3qisywyQ6g67wWNzJn9X7kMwQUxdroJ73DxdshPGfN16cu1TuqE7tvrHXETJWFR27y4",
  "key19": "oEKwJ6dQRgafjm6zJm5KW5MF7NrLUafmN83VFHQowatMqeoqhK21f8c7KReJoWvqbMnPMievqK5h4cTf8c3sJjc",
  "key20": "ymjLgLU7eb8BchRs5wJo3oLZQQEFPC6JkQZaNhsT51W2JJTsCQ8iznLpKqn62dPEwCmn3xan4ZUWnta1cF8KABE",
  "key21": "2sBYUSvHHVWTA9yHeq7h5WxsHqTw1Gc3MCpCykmmFZMB4xNrufGGzf8D824kWAnmsaZKPe2YWm4otx2V7wNKtPUa",
  "key22": "4F84EUum3jrgdwv6EWrgN2NZzEnf8XCueQYEimbnsN1GufWM3ENZxJZiR2REoWz2vGUS5agfvSvA9eqSZsGrbA7c",
  "key23": "45tbNMyvScDJdTb5yvMGsJ29pysefBxnjS6UFWhVgvH2iDWrG4cWUfhhwoSZMLquVD4mhWLiucaJkCndsvVxM2dL",
  "key24": "5749ZkDhpn2u469c5csLPKJy5MZW4hYxNdrsdG2NEV8B3juhSHhP9vKu27CbZPeKnv8FaeZw3poxU6Mb2qWEudzL",
  "key25": "29gHVeSMt4VC9VRt7viQC646cEwoTUPW5ygiH4xiUdgXxne11rXfuKYV24Wdrneo9gdpZYUKGfchyS8RChat6BPu",
  "key26": "3MyvtwfEC9PFhWXY2bxz1bQzo6ZoTs9knYPrrvyc3HGwKx6juG9NMKxR772oxvSQp3ygMLYst4X5VPDpD7NAdF7p",
  "key27": "5MQWPpBDk84swaLGeCVXP4yUWsaC88FNLzF7cef2cyVHkNk1AnRSpmEbnUr68Pu9aLoYGQd2WYwtPMGzsbUL3X7u",
  "key28": "2aN7kTZwpv2W2euxN9ZJs7DfY4xDEfreDz6HRUcindVKWxDm5eZuqS8dMmk4jsbhPVcsBG5xNpP79ac6H2qoMnks",
  "key29": "5ssZYdJfVTN9hKee2BUE4njLs8dX7wyUKDu6WU8uFxAjgg4zauzmCHHfncqyTa7BPh9iGtVA1fnpjmiM4yfrAFgm",
  "key30": "3q8ETTm18ehh2V4ME7vzfDRrwrJtycU6iT3ZkvajbEPFjMaCKjJqjbAYthhuJvPYoKkby9ypGpjsHMVHv4AyeLGp",
  "key31": "3w88kCAh96xGcqtZtSoauu3qBrBsSdAXz8AGusvJMdfPpXCtQ59ZZPHhBaFmhUvS5sGWU6KkjgWmre7XirSJUXHC",
  "key32": "CVUwTwfaPrPVzx7FR51jxQcuTxBkf5Zno2NerWMGZaa6CSohqWuj45WZbyVCVd2gDvmYwaLMBztYAMr2nRELU3G",
  "key33": "3Pibv9zMEZnEn7erFPFY5tZJzWxYcnyLbCtFdzo2KfbDBR1Sfmg3eYuRTaKPCpGdXAjU94BBzhdKBKeGwbxbycYG",
  "key34": "31T6D7NoyUgeE4tsvzeDgPfcLcXTV4NGMjum5KRxguUbKiUaed5DbVnPkiX5uJfWD9jjXKg6qGDarGkhLFgYe72r",
  "key35": "3hQK274HCJ8r1hAqha2rXcHaFkeK1hSci73iaEwipciBV7TkDptoFPsV1VMSiSjvpa1L1sCGXvUUPP94eTTX9Gi3",
  "key36": "3WdijuizVVENCMLpfp13WmJfyzBhd4pK61esZCpf1hK8yPXQ1VARC9DSxD5rw7iJVkuTSwgyzLvwK4a7vcH1UzZR",
  "key37": "4dxpA6ozaXZ5LFqbcf1GRBvhxCfzkKCg5uZn51axYZaLFa5HY343ZJ9kFih2zcajAmiW1pJWhP925r6qr8bT9dV4",
  "key38": "45v7fru1165JzUVC5BusoZb7ctBvokbGqJZVtybi7VsVjGwyBWvNyLwUA377o2GvexGZtpRta8QDYj5Ujeu8kvNy",
  "key39": "fwdMsfHdnRjH9PZG2zPhGkRvcHLcoB9wq1cW7JYpt9thXAyrneEE9WHjMs8HP6yRh3UQXYwG8GVf7rErjJCbP5E",
  "key40": "2cGbNA4Lgq7vCS5VcbB1Lgr8wyJ4rkFzfQNyhFEHfz1W1T13i3MXAHDNnX7vx8DHNRxnY1xFLnjvNH9mk3wgESbD",
  "key41": "iLcteHSeoVKF3tLJvNG9r2p8GrnQQ1bWgzeJWhfDhnuc9VH7F1YAiSn6HdFu2q4LhVTK3zcVn4xtiKuxCWBjXbg"
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
