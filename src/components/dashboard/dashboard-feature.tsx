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
    "FMWTb63wR1nK4GSPem7Gi9pcy8eSXvcPDdJgoa2gbHp9UqtuhJvcsu2B8LcqXKT2atEHhvBvrEHFgjTYBzjCVN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t3R1SoHsQbfPe2nEtozt6vzrGu8JGB7omY3xQ4i2av5izgAQKrooLnvNDj8stSkp9GKjsGb2qpND6NYWWt5Vazg",
  "key1": "2DCNz1u5xb6iM8oancVEAJ6RtTfpt2eVTydnbkQnrYVR4uusWsBqtdMrXwG6TC4qoLjTwuoqMZfHeGRmywEnNVrL",
  "key2": "3E8KibKrXhoaxZyuVmb3JC5HHufJM3CthAq8gfk1UfwHmGYYV2b5TNdMDt3GM1h2qHAHCgJu2AVxYC4dVqSunaAU",
  "key3": "daEPC5oBRHjbuemN3DR1Q9WCfJFZRfXTmRkMRXRaPK8nHiUcRrbTyyyVJDN2fFkhrLFVbvxmb7F7x9bg3f1Cd9B",
  "key4": "5KyDKarbj4HYdE53oey3kF44zors8ExN6WJDUmBhDPFuP94MQB3Bu12BLkgJSqDC6rPRQk1gcw6dqTC4UsAtPuYY",
  "key5": "fbPyr1Gom1SYJY4bP5KLQKQ2Cvdh7ZonmrEQwDF8hsaniNMUHiW34p5mP4YwoqRcuf5fBTRkWo78X13B659ZHid",
  "key6": "2JdsH2Sssh8euCAbwnnjoK75368eBiooTqJHaaUbmmHZGu7eWvPXjDYsiTQ1VVyo8NRbNWD5y2qBLLhqiBfzM9VJ",
  "key7": "4yrBS3gtE32D5u3ZZQLXuK4y3XgZataBZjbrHFY1hxTAWSQAaRcChYJoS7mQMREsZ33txHSTJJ5DrkDezcbyZvvr",
  "key8": "53pYsAzuQg662R4aBdKoxxbGJBN387MZgm71zXjq6izUnLJALrUdCCeu1yWrT7EaCvAM8zYX9DN6Tw9b6qg1GRnh",
  "key9": "5iXKeqBtnmJ2ZTqAf9Q43jUyj6Y9D2BBqHXFqaXcfDGpEyoeSXiop8jnEDA7xthX57BnZAgjMq4xVYEmMPjfUifp",
  "key10": "5jmtezKXFcRiK4EQZQGbyeYUz2tEvT66SnKSYLJqp2CKr9XcPGhZerWdJbiCJSL9sKsab1LQ9V2MZqVmhkiQxXid",
  "key11": "3gYYpcffChVffG9uPP9BGvMPKUJhKTJoWu2RuuVYUaCLbbFYeuZSkM4tSoGZvocmb1hB1APSvp2pe4ej5HAtFAwc",
  "key12": "4A7PkX5bTLWFSxJHnjJWawKtPsJgrPndgXq18vGZQjPWoC318XbTBvJwxgifwanr5pSqDvMRDFw72ZqgesX4LCD6",
  "key13": "TWidrNzRAjFgEA15AwPvTkX6nEoHGo6PbgxLPqHJK6q3JQozY1koFaUkxPaB3bECxiKihQ11A9Te2aq41tgvTfH",
  "key14": "4S415TjGSrjQqodt9376EgcgPQmVyyCWaJtB1DY1p2e8376mUZ446g4N79KyKbJxJCpH7w1WCexJJsYSvAL9MwyT",
  "key15": "gQEQmNoCPX8HY1MyaGmEYxCzi4pxYyGdxLdkPpBz6BZSJ15eQv2nkvwX3JYMjLpXKXEeaGTSVdWH1ypUSiytvam",
  "key16": "3EVmQc9JxmhXwrV1n2VVy2RUDwjNiNgx7iwFvFGVLpcsurRYfabnLjQpi4oP9Z8X8aPm3eN9YdjutfKmQqM9Mmxd",
  "key17": "3hYZcM4RJwMZ2mnZ4JnGqqk9RzhYbuNt5aRSQumUg12KUzqejQefaE3D9LH1uftxsnfhPguLxcbzSZh1qjZWqvP8",
  "key18": "4cdgzCbZ47CE9wTVVAEY23s62MNJEJsBsvK37K5j7rr3zdLjZ8jdYb1Nj9mR3ZbnieUhcDfJEQTQqcrSbr8UT7iG",
  "key19": "Bo5yH5MhMChxaepWdPW1dAaqFRqFmatENGTdYt7djKGTqnUusJjrciXQnHb6xo3Pr8qfhN7XYd7YjBWH8dkvTJL",
  "key20": "2gefibdTcTZhQT2yhSokrVmh7XxR3bWAbUc9gQDjPmKqcRCozPDnY6ChcJmEuAgatfWvbGTVWuG75pAR51hkcDuq",
  "key21": "3zmijW3qGdNUwBSqucwGCtxUv5fJCxK7jt2vWonUUKKBTX8HQrVjTcJF7HveVGMmyCxUaeytnxVwSfoLJH5dcVgX",
  "key22": "bQB3tLNHGW1Uk19rNwPL6WipWr5tbaWGf6EGyebox2rP2y1dJWwPD4xMNM9JEHNWd3tFxSdpygYaeqoe5s9ADXE",
  "key23": "3LaTb3QDfSoabWNtpmjA4NrvtTUbBqtsRBnq8YFMxYkugzM1J3hJKtmjjDRUPwSFThQgBWzWNFzYM9ZMhaLr89Vx",
  "key24": "2kaYsTNpX3i2anpd6NFSc3gw4k8LcwRU5fnh2piKpCe1iWbvHdTWJ2uQkDQr55GcoFfaYhYcDXAzaKNktdYqzJ8a"
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
