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
    "8vsXTgq86c6ghotsmEY4EhjHT3whka84nGSdLTmQ6hjq34PCHYWEdLRTFBRBUdkd7HC4Q8htq4KFNPwMGX4mWTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "taDDrYpZ7wqnTrTeM6nCWNSsA7JAyN2n5PPYrXXhYjLSNWEvK7bjq9UCCCpDuTdttzikGb61Y4xxuADX7SMkKcp",
  "key1": "5P2ZUQKa35V5R8bMQhkVoPe21h7zWPHR2BCEQNjWN1Ahbwxwk2ZK71qKfcKNmzP88kAUMv7v6guhGqAjo3VNymnp",
  "key2": "5S7XCzsLkqvj8suMfVugawdBRVxLtTQ5STV3E2yd4LXSLQt4sNAnWmkwB1eb2fsiMbPsoJDkWsQXuMssCZQNYooh",
  "key3": "64g35kqsTDPmYnqkKDyZWMj9jN6RaEv5FFtynYtqNU4qiY7u4oPSrfcMYfMVvXXFzzeBdMDZADxpG7r4qRnSJEvf",
  "key4": "37gNzefdLS7eVFQfoFeTGoEWrbYAo2U1XK7WRK7KYXaTepBWfrMd9HwUWBCbR4rmd4uNPiYMn6oqL2R4sL9yPKVZ",
  "key5": "4ers7EbksM4GmVNbPjff7mi8JjrxQwXUh3Z8h1aUqXaeGY2DMVRUsQYty9ycLy9hhUbYLkgn2aWnx6MTbDBQmYZD",
  "key6": "2J8CWS49WuVvc9oZPnnHu4ZLhRQMLMQaXSewPkW1U7KWAjw1iJ2yDMnK4W4yJFwSYnmsQn52wMz7HVPWpuKRdsVT",
  "key7": "3xdui29xC3YpiqnRMb1LmyCdQRqiGc5hx7jjxjZdfZY6WDkgw5wXyaD26vpMVCjgCtcneKaZa7e4K9PyXAJ9VdiV",
  "key8": "2PDciAb7hAMeGZCa3tagjmBcHW5JrVzaiakhj19P3AtV48XaHekDueBxbqrHQSQNSQNwkybYxVs3sVZxhfmcu26Y",
  "key9": "sRDbHZ8rWKfxY46Qcp733KpzcGW9fjFKzcqBA1ck51Qw7gsGXsAv8ZZ7vRBE42Q2L2SKnAUyUxyfBMAhdR8V87K",
  "key10": "X3T7NcP88mYrHQdj7zxgtWx1eKAHzp5jwa8RNyJW1TqXgwnqmt12ZM3ggGtEgYAo3qt6LuSxQteU7zGB872HoBw",
  "key11": "3AYRWASSVef8TxZiidGjN2bKqLk3gqmZKBqReGwZdEn3sMdL6aD1ppJcdNcm88qe9UrTC3vVGvtGSNwxVARMQC7R",
  "key12": "24fN1vAttHeH8dd2P3ELm8rhxhZXjaDTRoPNHmYjr8vNNFBwe4BF1WBqj86RJEGW76L6VaoAhEhYA1Us2pmvXW9u",
  "key13": "3x6Khei1xasNXXxENmKuGfodotW8MYtpQPL52jdAQzWjsNwQVJvhUP5P8juk66iSyspMdpmx8aU75Dz7DnyuEv7q",
  "key14": "2QiWYQyNnrRZgd8F1z1k5ceAXCpBaDwX1JiyPn6onjutEjSdEuQdfCZsUC67pa73rdfSwkJKDGKJJoXQ8zXrsays",
  "key15": "5er6z1dMwsbiK6kHh1a64BdCuAi3e39rjj9yRPA9SEdaobWrNT763X1VeajvmmMSVBTnGgt7ja4SyrHNWj1eBD4H",
  "key16": "66RL41dr9oAJhdPXc1H4h7TXLWg5pQDGD28Jtk6tLH716uJghbNqiNBQthmjDYQWhyPoifKukuaatyRXt6LDAe5W",
  "key17": "5PqUbA8novnWsEtNpeTPVuPrwasKXMHxPb3VMjo4D66h4za5szkBtgCRbJ1cApejVrnRAjU9xS5auSbJnfF5L4rG",
  "key18": "2Hmqv6scgqzh8CSk4AbxNEuEmJjhddEeinPUDCCARGeNWn5fQnANR2ya9Loven8i79GdDjacNeQwWz2cwFDjFxYA",
  "key19": "2wcxTTAMHb17JfiwhK3tvaeRKLekGbrXDN9SgFA8pN1P5FAZH3pMzsCLgfxrtqLT2tSsXf8wH46hiXQSQ7Xpm9vg",
  "key20": "5ij424U61bQPb5ecDAyYFT2JCo6NwaK1V3CEsHVqzuPMNYYmEynvLuqerWdvCWqgzYvx1KCAXV7fZUQ79QnLbyd8",
  "key21": "2cLDrQKsKQnEGmwE4wbRUcLvfUZZD2MzQpWSLgVs2p5ffuVFh483uN4Huo91k9voNsR1J2gHEs7B3jt68EYxmsDd",
  "key22": "56VLDbMAAFyrkyYfs62DunCQNtY554wKtTGhhBLjGjetnYronXySLSF3U1CHQHTS7tJu4RPyeoj2gNW3NVJoj62c",
  "key23": "3UbRQVAhdg9rryFkx5XSzFzXqQ7GoxtCZfSrCQUWMS2vQTgxEYL1AmAfSqYut4Z16TEUScHMaCyVg44xCqGKvmKe",
  "key24": "5KRBb7nUt3Yob62caPGh8RMdrTGXtVjKbKvFzM5KcJPEGjk93GV4LSLFB4qfxhSjF9xBvJdnZGmk1369NKYPgX7K",
  "key25": "2F6RBRXjYrig9pa4xTWCuKsJWGAnS2UaJatzs6TcqacebJPaWRF3AicyAzR8pM6rtYXeQquvbvf6ULBkVzcXn1ZS",
  "key26": "5cuxvvi3WnftiYkBuT5x3PQJPjmGT6nbPXmMCr11tSEoHXioyzA7eBxYuWpajw8n5Sp2LboAw8SsgDnGF5H5UTTn",
  "key27": "21vYUbyVpYrmuR9YCAW57z6matsResG1mhitzbBSjMawUH4BmAoHAAYNf4K973G6sP7sHYpkDBbMKZRrcfKz2hFV",
  "key28": "PtkuKNnpQa966S6QB63GR7Cobyz9P9jomT5Ek2jL3WWH7wWWjVBQm3DGXiaY43U2ecxcD19jMMPrhtYU6kMcGbu",
  "key29": "2EKZ7rXCqBUfi6P3JE2N5aMhmxuExkmd2B1AV8cjHnBwHcvhrSDGMU5yh3q4ZgpLFfSdqz5hy1pezod4i7EwRqBv",
  "key30": "3ybiPv5M83eZuuRpym3QNceV2PFLrbvMvCHtDG8fbVxWZeYEsyrsgmFV7Tg2cTUXekjFSurABn53iXjbBq8P47eE",
  "key31": "2osbrDRuTmyLLvF5erFqD8YXzkBf9wDK48XZeepqkd2ccctp2R9KnGcj9N5UtA9UBGXfMC2BEmjSuReGaADLovnf",
  "key32": "5kgweYfEscn8FRVo6Rk5EtxfGaRei7eubJ2KV1dS8rgk2byJb7MtMgx993BWurxUGmFkwettax5DpmUU89x9C5zf"
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
