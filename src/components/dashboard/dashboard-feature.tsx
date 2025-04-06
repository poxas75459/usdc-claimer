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
    "2jPJYjbynTpkmEfSrP7ZSETLHGybssq8uTnKrJFRk5SCnCmm5kJXG4FuBWNehE5niCkEeFXEjs1GhTKeUCc8h9kr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49nthPTtaUj4bHkTB9FMEDYhpojSQqkjNigLnrrZTFQG9czWyaCK4Eo1rB7YMATFA33UnMfczpQbiM9NNfQ8cvZ2",
  "key1": "BksmNcYEmuTQKi79aAGdZh88jVgAjYmH4oJxzSCFmfNqThdSYcwAhaj4FNoYXQnst4WmiPF7UDx4PMD6Hx62wsz",
  "key2": "wgZanvSbqEHpCVsn4K26S69VMzhVQzhp7rCT6p2Y2bwYVPL2dfD29PYY3vFA4cwsnALAXfSzuZnXwAxCM5tbLG1",
  "key3": "5cjUZDt7pLwYif7XUPFoLqqstyUB8fNpm3EkAAj5toNmjBdciyZG4M93md8zori8AkHpkr6vJ3krBypqGJ7i6Et6",
  "key4": "4Ua9vUhiFVTZumYga1LnrYjwEBgYZaB8GJ1iS2YdZjDu3upDG6tZkCUpYUCk6sqwdSozaR78JqkFpnoYZUcXKP4h",
  "key5": "2MyyWnfbkYxujEwdXFY4oyLtWBQBB4ntuzHLEYQoSJ6L7UWj8kP1NSBH3iGnsw9ZKq66kzSiWY2rPnuoei5zev5J",
  "key6": "55PeRqbCyTAGA4cuiwphDYoRE48y9vAhMYyLM1AfvicsvHoCYtQwSQ6QENDEqmewSeaFPogdu4mkzkiXAFQuCkPY",
  "key7": "3Akb4kc1Y4zsMExvkzjXdPz4VBSC5gyL9aGuTpWghLfC7Z1WnAFdeN4cvdYSr43uXRMs6S5npdcz7EqYEVTxWD3S",
  "key8": "57cvG3vRrzUuSgsVvSSpHKn9LpV45teiv9GVAAwdLLAbAGuY193bcq4fZn8qTEuA3k6VdhZFeosNs2vrbuP9bZ1r",
  "key9": "2aGzLsEyUgCjLQXHepQXe4NXLBmv7rbj98Eqa3QJTz1hmhZbAQwKhf1PEEckT9eL7BtuQ3BrSiS7vP5wprz8kbZ5",
  "key10": "5m2wzdQ9cgi251gjBB8HfSVhEPJQF7eyVdawZ7cd3H5VFsjxZ5uJv14PkvfEEjqmu9sMC38QRB5gnG9jr2MLRYCm",
  "key11": "23UDPmAisBjFJQM5F5xjVpzZVXtLvVdXWqumZ7kH7mXSsR1qHJntes28bGQKaWqPUmo5SMS2tFyT1Ga7n99kY4sA",
  "key12": "4rnwJ2UEWdvZqoxqHXQim5CEg42UNMHtody93fRF7EKtdnq5h4wHNaKGwZjh4gtsuqKzgRRfvRY3nPRrQc3kBBgC",
  "key13": "5eaYihxgzDq8e5ePhgRskb8i4wNmDDkyLecjrK8QxKCExUU5Xv6HwrigFEC6fzmikf9kRvBGqERuH4LzuuxaPymF",
  "key14": "qhaKpDFUv6cBdRvT6FVV7yctaJDPRtotvQBfBXZQdHJcDfoUzn7ZMNr5cZZH2q5N8y5JPVEa8p6MGG19XVALcdf",
  "key15": "4jbhvWVY6gCU7dgtwkQ6yM49ibkRiTktAD543X8WXrDwEeBJ1WGCJPWkxHW8DwP6G8MHqywWSLrDdGxabDs62McX",
  "key16": "3WbU6nkxTUyrDFLRHyy5EH2fEPpR9esBVd86FF9Laf27xYWnqv3ExsDv1FzhPNeaGDJQ7g7X7QmLLfMZ8NcMcPQ5",
  "key17": "TL78FhewmTFiz3AmU8AwbqRLS3stvggC84bcyMtJwUsRrV6SRsVDTcRWSAgQZ4fS3h7LMwUF8mqgcze8M5iK7pD",
  "key18": "2d3TMC4GMPJv4Yxyv3SLWY9zUh2zYsrPVsCivBZmRTVqvYW7AZ61wTEmksVebY3TTZfkRViqkTDNfTCs7ZXJiM1h",
  "key19": "65SyaW4HFaWhLCuNbvbJbcLbZY35ssHQvuPb8JrcqQMvA72Bq4W8pgxbK75JME11EtWvfCK3eV1tFbgBWUJwfHuQ",
  "key20": "3EZucwSDmx6nPeeHppZmD5kFi4L9qTFQ3cxy7Z3zD9atfjpt42Y6mh1egd8Sim3fy6JE118wSKQGwGfLbdbh9YJX",
  "key21": "2CwnEb6sTyw43iN8ugjs5XAurH1XXWcem15FSr3zKr7JMvSGZC2iV8QhpPdL9aUsKhsDbnBDfFoBVB11Wmha4a5f",
  "key22": "5Gmbtm8GhjEWWJRa9mbGz4yuHUaKEkhSmdamkRo56kLsXHBH59p5xxUc5DU9dD85kQvQoLNT4dDRa5CCwcvZwA42",
  "key23": "bPNnaNtP8hc2bDN57Mq7fjtvmsG1w7ocw2zwriyYiXKCsCVYPyxxwDWft8Mnao58QE2u8BJgeJP1itHn853v3mV",
  "key24": "3z8L13jtZNhgUJhDXa9A3yLVschf4B65yn5dmDLRPWaTPQEupVW2DM4qxK4PuDX3rfxKXPBrHHg1zcFhXiNLjet9",
  "key25": "zMpAQ5Qf7rdKsmaUzy5WbBdAqSZGiKPVeQ4tYDh7BnMn6xMRTcGZvJaTprxUtVpvU6cCfBMqGp9LScnJXUuKDpT",
  "key26": "4tS5SgLo1BDAivJiQaopebd1djPeSaRJoBDCqxWwoyYUXqpyKXnqbCgpBDm6kho9LeRpM8WQ36FkRKXtAp75Cy4F",
  "key27": "5CGiV7JnBZ17ELTzspXwsyNB8WFVJS9vGZg3tu8fwRqLd7KxQpWAwoULorDMWKLLAqV2kLy95d9nJHDuzVa3Gm5m",
  "key28": "64jedwEjMNa4ZcG1oZmPQ4qM5YTtvef5v88nHC91RP28aejhkuvXGLbwq9x18Qta5HaCvpwCftWkhASupi6poc82"
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
