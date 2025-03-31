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
    "48gqUb923BQv474GTmuEqzAYfFwsTGP3ihAMaj9DDJ8pps19v2neEtvwzoCQymMpj1LbjFuzT3H8KvikUUAqtWsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mVuvk9rX3xgXy31AS7FEnpmg3GzvQ54PSfrAqejNy1aajL6yuu7e4wR8ye3TB3VZdimhix2xGia1rJsVRMtsWCu",
  "key1": "57ZozpAGvYCJQ3dsKNZxdLXXoPcMsSzmzfumtAmzR7MU2vCcE5e7YG8cdXkwPDXwPYTGNS2mNTkvuhX6aCx8mWKk",
  "key2": "51RMivNUSavPBb73Qso1aF6f8RVkxCZQKxSWya8fzSXZjBU6M6R2WjvawPpn6hDYxZ3ghHFRvgZRvX8WW4AYBAxp",
  "key3": "3KCMVXRJ1LtEwS64C5MHPsZQ4DHV6PnNhHiW7HCGpZWvZj6S1zbZwbqQfeoJ7iwYawqk4se7PDwXUEgmE3DfP7aW",
  "key4": "2RNHkZcxTJFrHS4RZbvUXgQvkMqDtULAwibRFLQCyH4ykK3vEvf51FFWZp7CyxnyXBpkSvzhfmPw8vbpMYYsht22",
  "key5": "5TuVb1jMvusEDVBnZ6TC2seQcMSmXuyT78xpDGsLreALayACCthQQ7gFCFuG1WHymCnv4rpNWNzLxVLbD38nWFZf",
  "key6": "2ufaijPwXaFS5rodCibBojxsaMChc4grJf8qXFxP3mwoZZdQTZ3UHKUXgZgKapgnUciFhbJWivMBx8CdE6aUhHxB",
  "key7": "5ZyK9C9gmExEtgRwRkJtHf27rcb5uShP8RMDwRscEKZ6vCRLANkxepqaMjchtkmnWA5n9cj7Z1cCNyScQyYtjFfY",
  "key8": "2a28opQhRH5mGbsxKxSKT8BDvzNgd3SisyChaTGuxnek6GEh2Zt9d7hyKzGKGdG8sL3wygwAAQPmCGCkNDKjYjjZ",
  "key9": "57UVaJtFtF4LjnDvdkCMgL9sQ8QAmRG3RFtbxYFgG85uYmdxHaG3RnTSUfMD3uouR8tQsearoeq22Q1G48VAdEa8",
  "key10": "2QsTrajMouBZJd14n54M5cvV5nn7hcKGVRGzzrqTDkseDG96smXjZWeBx57D6o5ywnDCLQq8d1AWD4TPUNvFA5LQ",
  "key11": "3hd8SWm2uBctXpqUdK6YWE371umhrMTaZuSLbeL1du7v3LiXZN3n1kLZqnpizCom2WMcEpMEisfoHBQ28zu8SADf",
  "key12": "2kxEBi8Wo55Wy9uSexv7AZ3ndMy8gCmeMeSaSxauXkV1rLpPMVrjtN6ZDZna79knivtcTsVw1ME6CCNoCX82ud4J",
  "key13": "mBCkds1bcSszty7jxMDoLqpSRMQDuDbWZovHbk5tRCassLtdbGxiDPV7BtW5nbsXWiHD2rbddPpQfFdrNqxd5yd",
  "key14": "4mvuwUxHnoM27QMBENDV4BKW57nsRmegmU4Ji4jW8g9Ptsad3heFGzh7PxJckbmjFDvnfHNpiTvYFBvmhod3G7ru",
  "key15": "3byPv5BrAJNpAD7WhzermKTDFRfB5zkEum1aVUKo11SygG48xMdkXARHLxxajSK22KtCq1kHYGdriKbBr4xQ5GEb",
  "key16": "21dqY2tmC4NajpmMGywt6aij2b7HqspAm1tJRmfADh3FD1QbiyBWHrnrqBCw5paSeXekx3exJK48DYkq8CwP5maP",
  "key17": "5gzFpn1QC4wYg8zDhW715pUzZyTihQU3mzZnpmbVvrsJhhnyH6BbNet9FJ2YcehDPEnSEa7b5uQubR9X1uhFY8jy",
  "key18": "4L4RLk67XAmqApg6tgdF7UTDoqhvhkRFT1sL99JtgTYJmY45yLUwJeq4uiN3Q3P9isJMtabTtVrJpbMvMwD1ztZS",
  "key19": "4jBvXgToy3YDKqYgNCagqEp35MNYwDYkTF2kJomCnNEtjHX5Knp228gYWrdHiMvi8kkinRJeTdU3C6NEB57yFLYZ",
  "key20": "5BD4jxumrptMBtgfuCgJdAgVEe4o1gr4yBAsiCY1zgi3BJ8ArvPvyBw2VaEgmYbQzHwQVKrmVq7MivPmY1aV8b23",
  "key21": "3882V3BPKRmaRkTzUFW3qPbRjbssXy6nwHaeq4JH6ymKukmKDkAEVvZeaQEi8vMVEJYkENCgHk2UBp3uYwjZfWHU",
  "key22": "5TcoSiLGWLVxfpSWiJytqgpCAgpKizxURDLLwWpH3ksmwBLYsgUGDGFxjY69PLeKiqceWMrTzQ762vwUxWWMYeu6",
  "key23": "3bwky9QWVC1bhN2Q8oz3VWXtd2nWCaEGi8dBqGfzhPLZBdGEsq6Rnfn327hrZBW3oZpVJgQ2k2gwL1XJxNqV69Cn",
  "key24": "3V347ABBKBY1GAAnwP4ZGigxpG8wZFdAPkvzHFVEKd31oWXFfSb8j6S6LKyEqq8agEGJA52evaSw64pUm2Se8GHV",
  "key25": "29QL9tLTWSUkyHmztHCQSLUqJWK39eLw1bvXE2ZKPEW6WFT7Ts9QfmHXG7CcqrjxSMd8xdeiQGGeT5eWxTGn7tgG",
  "key26": "3wVaNcJ621hKcQbukCWeUtBUWnVGpZ2AgSvCgma3hqtJr2aGjqmLdKdoUPntP1bXqVTi5TLYZE5VCxeaG3sRTWjN"
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
