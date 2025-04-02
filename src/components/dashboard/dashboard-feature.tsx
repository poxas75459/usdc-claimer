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
    "fXmYjWNuDZmiSjuD2MUpAkqc5bsKe7W4eVY4nGCJ2fTN1R3boY9PEzWFRhFYfP1zbSLsdGYXFTohdurHSYBe2Zb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55iDhgT8wKH3yH5fwGC8mYAv22YirAMnW5AF2DXn2ivkVn76S1oTDEXVaGvT7bkNzHRYNVTy1ThhexQdhRZ6ai8M",
  "key1": "2jsJJnHB2r25S8YW6kCobY1kPibDej8VWeqc6GZ7ykMQKtZYc9ES8GTDc7uyYxpMXMaebTW1eV5fbVHFegYU9Uxm",
  "key2": "38SQUeXeWRm5LuqK73MwcD4YuSY9upApVwVFqVHqUt8N4EaHjjDTUArGX884UJDjH1JToduuUGwRXCwfN972H7x5",
  "key3": "4vSiTsFcqk6J6Z646CqGwoto2jPS4w2WSZtm1i3rX6Y7N1z36ZD5AKaYm2oaGnAcShiag97hkZHrDbuwE3e1jWUF",
  "key4": "427beRKczYWrP2pchZJoUHtyQPZtpoUmstAGwvEMNyV1M4MJdirkF7WxzesUhG8R3naFkVfe8K277PLvtSsEVph6",
  "key5": "2pHouJd6M7WgUQFCYRgQZjGkiJV1s86Zrhh72xmKS4BJ9gzgZdQdVDcXw8FNUPpwXLUDDNaN5gVPWdUiDN6y8Wov",
  "key6": "6471JEoE7HfBxp28seLneE3UkocXGAAvVRL7b2PwkwszM3RFuRdk67QQk4D3SpHNNEmhJfae9RaQS18cCBazUHuw",
  "key7": "3GTmdviN596TqvHwX1V2exedqED1KNdDqQrhFiQqHvvFVLxbP1BA57vZdRUoHcdhiMisAhqsmAWLqeQeW9RT4HNB",
  "key8": "3DZ4MjsDvYv52vCYZ8Sjsh3V1SdaYLDW5nrYmbFyipeaDP1tqtQtQyvoj28rQfWARRUEVxKawN3em7M4uSUc9s4c",
  "key9": "2nj76oHEPd6dUn6Hut8i9htG9oEFGWHGfo3MHTc3sCogbGnZScuM8G943yygmqAiaEya7ZPwM5CiVxmcd8PHedcV",
  "key10": "3T11x2pybKJ1Kck9QMB5h23ZiakcjohCP3k2M89GLYPhsF9bitoeprECTXL53cn2mjeqF5Q47QHhgBN9ayQjRW4q",
  "key11": "5hgCKRh9rtHmHx6wJ5mvxnuCVA8agMLavNMttnGbX7k9kuUb9hzHR8pBV65mWYdBYDH7UcCunQWrCYmGAN97hA3u",
  "key12": "4eecLSqCEkXngcwqYgQvY84FsgH3rwsibnezc4RAAJAVRCppVQp5CQzRviUrnuQswc4W24wz6GW1WpRhtCVU7sAN",
  "key13": "4o1sZKwjyXJuuUFCGJSd474Q2m9qqYA3kYFMv2P2tLxyWw56zmSiB7NQcGN9nTKYkAFgWxVUzgfVMRHiwjshr4i4",
  "key14": "2d7jCDJvjXQ6wWyDC5cJhRMJrJjLTLeGGnLweRSYMQwmuSPbgwjj7vum3VXXUvzkqjsHP227cMuLjEYx4fBspauA",
  "key15": "65fn9WfDDwECinZvNkrsVgo4fcw4SNq4yGtXmpxxkpwDFYbsx6ykyiY7m3o9vRjHUHxeVBckq8WGBm4rqJF6ZaV3",
  "key16": "icivA7TELsbfumhq39tKHWWypM2fJyfx9sppno9DechBcYpCE6sLRS3xiED1VukqQfY4MmDRSCXGfxFrfbNJvT4",
  "key17": "Kjb5cFuQNReXd7jBNZeJ2AZaSBMDQcTTfFmbJHQKji3Y1UQ4bPS6NW5i6XH7AvnTZAndu4WagGxN2uM5rTZACzZ",
  "key18": "466NrkjU5UJvzYnngdJRNcXDSmnQ6qXPhMpeQoeEDvpAED3rasLGtoLJKaHU34E6wap4VAKg57taZFZR5PYBGr4Q",
  "key19": "22dqKJt4oveyFStP3X8GZgV8ZyDVBRwYCZPWSVHdcF5Fs6psDGURB4ai9XesmnoW7JU3vSyypeC3AZDUNmTkrX7Q",
  "key20": "2v2TzQnTc3HyfVpRSeSkgYYmhKiF8yRwFnJGG11Dv3nBLaQy174Ry9f6hHgCJXfDvjZdZ4cPib9TGqzRzuxuN1xP",
  "key21": "5dW1SFEhUVAE2Cgdn7Dcc4e2iygmoqD8GCZLbAQikJiJiMcWBzXhrCYMycagF5XJfQTa5L73TVVwnU55K9yyzsRi",
  "key22": "2VzAWwrkZy93Afd5yChVo9SPsc7UU9gThHDLSBQqeGgRhxwXFNg1ZLDnyy8bDWn4Picfs4vh33XBcBpRZtQ1f32Q",
  "key23": "4nLxwz8g53bHgtmd2Bqwi7FG17Ryax49zqUNzUSwz6rWbNZmisKF9eUjxca9KwqrtZTdWvjbBgTgQ7yGR6vwVyuV",
  "key24": "3fgwLH2KEdE91QQdiAyymrBhdJxJKnXAj7iTzw9Rvrp88JYxxAjAzJ4Qo1PYzBRuEW8Do8cDfuWuu6ViYi66Y6ev",
  "key25": "3a966faW1EttoKZ4p2u5hZjTWZf26647epSkFHBvKywVJmrw5XvNSBBcQv1riGJhCqjjbzZQf4FJaS13V2Cto8qV",
  "key26": "r5tHAhg48ZhTT8SzG1LyuKqVHvM6c3iAdDooVqpfqcJYBdoUKa5xLJCYd6voG9rSYonv5KuHeu4hYNSHpJcLDW9",
  "key27": "34JbEV1CFC4Jkt3xcYR5DMNRPHucPcxBM6ogGJrrt22zVHfbJ3atzrHkZ2UGRLS6hgtfxPBTE7WrZJnTXZo7HD4M",
  "key28": "oJipMdpPLbsRJvt8MhnFZ63mSNmJDz3Ge7A19H4pTypL3fBzQy9Lmvnomwhfa3UQrTzTqnWroKZieHMTgpwCdAf",
  "key29": "2Smf3g8T3FQVn6zrLoe8hyVLeB4xmvxPkguWu5BUFcFvXw1vETYcCYRfrBYXb894YbKCuWSXcr6Cz1bZVQrgTDqw",
  "key30": "4DuP749ZmXEyzcrEDSGPiPdS6Pz2hNyqvpG2MhMcDcaUA2Gz7CFUHzBWrBWLaL7nh4pWKziBNxvB3fCnxwv35Jhd",
  "key31": "UC6kAt6DfFwxnC8LLaqUYQVxZu7QdjXj6in4c99W88p384SbYMpmFwXXMcsPqYPAxtDqsrSA312zkXekme66ABX",
  "key32": "26NFV3MwVdhrfEQq4RwnU4bG3USGbRQcuqRNJLNekTPTdmNSm5nn23roBJyNd5d5vdu6hLRBxPoT529pw5ctfDDW",
  "key33": "5LuhgtqLHeWy4dYSNbNUUqcAzoHcbkVA6Gg25bqSCsYYiN7gndxs4HXBte8ssp9tJNCqd33CGTTfy4vtfQC9tHYd",
  "key34": "5SqS8umrTs2EXRCjNn6pFcekmQB7C2YRNfQgKaVsR9u1NFURezyogDkRbMeNc1HfYS6FzYnRrX8BY8ueUFVYbzTb",
  "key35": "2ctRBj2AXfpQnjEA6fkW4bajpSJkez2EVnPXojw9nFxhRZyW7xjLXSegMMsWEJgVUMicAqq48GkvMrXtzNaF2xHX",
  "key36": "4cM2rvfWy2u6FrJspbvUP19WJptNCocbrsWUBTueQpn5ZjDtJk4r1uLPN1fvPtPJmY66ZcCwdzdggAiLMpiBMTo7",
  "key37": "4gyoKJhKMjQBetFCYXhfudtMSm7W8QaNcZ9YBMrEW9xgrX6cABAD4RZdvzNndJXqnwRPqdG1LTEr2UG5Cqqoq9DQ",
  "key38": "4s4jeyNRmmybmgdz2a3tybDYudJZ5LB4y1vruYdP42su72Z5P4EsEmDznNgYkdLT6oUeqjxcEZ6ibfZxxdKYN9CM",
  "key39": "3YYgtZ7BX6uve9D3YU3EJ2hrsGyE6AKto3iRmarZ9e6jkgkr8ZdLV5XZGYwEr4rHYBaxTXM6x8PK9UtSmjUsZDVP",
  "key40": "4X2E6riA68hEqgBggs9RCD27K4kiDLP5WSuSq53kCzcRydviWEevafEkVG9ZGME2wS6QKojjt2CURnDnNgxxMJgE",
  "key41": "2Mp8NtPkXLNqdqbNewH6FUpbs9CyKGTrJWiS2jy2RanR6ybnjBLNeD74CJcfEsMgY5QsNwT7CaUZbFcBynJNPNqw",
  "key42": "fTatsVd8cJpdWhDqNZUGodgTpNqRh1ABKwhxRgNqkMCMy32rZnH7vPjSMdg8ZgKjswZhVLDxW2AtxWbip25MjKr",
  "key43": "2i8syzdrfHo3jzJ7fPsu8LGaNn4Pore36wocwvsSaaV44VyzZhocDgMNLrbc7jmAGFiLsrszGzzoEhR3Ji295g5g"
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
