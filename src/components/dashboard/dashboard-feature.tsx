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
    "5GD6gkqyTZTFyBEksVMZrrYnGiXQZVMTEB4PRyKo2W6QQ7e98bFRTbfanGKUggWXp6KHcn55yonoaxRFwr9C8eHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54dP5rxn9n2G4mQVRZp7Z5WCDj32P3Zu8jnRpKkJPTzy9v7i5Z3BLvQotmWYNxU9158Hq71eNmW4G3fDRymv2Lwg",
  "key1": "4pRfQbySzWTNBMwrDcvtaFHooiu2XYC5fLszAje2nmC3m5XFTBYqissWE2Ahw51heEjjLfdT13hyTz2szHYHhpS6",
  "key2": "3JAwvEos2o8GgnmHCoaWphawGhbUwQLrGTNvkN2CN2oLUSi9kz8FCoJZKpC9mjhCNRSSqKUHP6synNNqjym9SEzy",
  "key3": "3vKKajpQG4SKa5yHdE4EvBpoaJHNJd6kRcqaMTprrmN3jsVBF8CmBUrkxEPY7PRDRC6XwVvTDVtkZcEcXYZoMXfm",
  "key4": "2U8x5SHCCoe3Raf3YNhmTREVNYbRGz7AoJenRFeiNd1HTHp4cHNb28stGDbcXErzUVwsaQjprZWxsXULg7MCsasQ",
  "key5": "64KEaYt492eCB4mJqzMKexqcmbyvRqXTZ17Bpp2BkGyuHzS3TT97Fy8HNA1kC4P2moCRvDTA1w3KBechbZdRjrpW",
  "key6": "2L5USgxu9XCnc7H9vizyHsVC7E1xfnbjfgKni48vy4PJeUvUyNLwNDkgSmnV1yDikHtvpTnzbSr5bAMFhi2a2PiZ",
  "key7": "2XWH1gV57F14i3SVK5jwbYdND6zD54p3J9Phpz2wzZ6whncNcDNxpUQmMrDBzxXU8UEkdW5iCHDLbiNSTLqU9NDa",
  "key8": "2GbPV3fbQwv5FWaHeA2EBnqRuLXW71X72xypszzCgbr6KCUABWhiYxigCyerhhBxkUx8kE6Nw7GQPCDWGYqiF8Be",
  "key9": "2HsBYjRoCRdFgSDsBMYMCrj3zVDxJRxJHaVou3coAGgxWKHMc5Vm7cMr9XvNkixhiMpRB4WUkqRPo9UEEG4t3ECS",
  "key10": "4nodeHcG59E1xfuR5coyaB6QnrA9o6fTgKTN8L4xGPaa1b2Gxk5ffp655HE9koBe2cXypLoEbC5gxy9tSUAruLCc",
  "key11": "4oTWTGKkaWs3vQ8JFC7AZUEhC9Li6zf9VoNn1nUwAwu85eSX43AMWxa2y5AmSix3sC6DGZzJXC6Ax7NcGtJE47b6",
  "key12": "4p1M7ve9tAhJNZk42z43TLHo6niewucnasXbKLpprvfRB4NpQ76Gb6QzncmvHg9DRNPNi2hYEo4jFehSRqDywKUe",
  "key13": "2G91qvbG9q91bB6gRMDHyBSezY34nJmHw3AStBPZ8UmXHyKWYbnbV2zUQ8BkzkdgA9DiAYjSXjDDrXETrvC4WrZ6",
  "key14": "3AGNq3TcSRNY8SCnYD5TirMrRKcbd5TUY59rpUXT5dZWUiWZSevze54xaHfPYDDKqwncKPpV8fWG1wSHYhUEySdT",
  "key15": "3nWv26VaKnbCfQFJoJNw8r3AH6TihvDXEgCvdNbokovT5hMY5ZYws9AU3AdavKHNoW2nvotEdtUgcqC4QatpDMQe",
  "key16": "5StiAScsgP8ZSCogCDo5RJHh2sv3tKLu4DTkdi6ZUwU9HwMhwjPrPfjBUiYHTPqdH5dpvWwAJUyByUAA7S2SMJwD",
  "key17": "2w1tepv7tKGgZ8M2EfMs9sG9PfEpEUsRgDjsabZorHKgQSEor2TeGEFvMn1BEQvfnjkUVDmPZai4TRaCCJP7ALp5",
  "key18": "3zt6UcFsW4CBHzW7GNNf5oGZBiaNLbNVzbybqJ4wSuVWvDu79p6MuyfNgs5TMKBiByfsX7xQYnFhmEUqbVqwCo6z",
  "key19": "44Htfzef4rd8g9Z7BuXiREBGWreofr9j2xuBRUr7XXzo6WAgKhPCPxSwv3r2FCfPjByNJcbnVkcz1qVhaHEfH34Q",
  "key20": "sci8mabunLt9ESeH6GQRKFNqQsvsqsqT2M17ZTTaEX31YtFfd9n4Na1ZU9xQM2nLbuNV9DYDNMs6hqrvuqvnZgf",
  "key21": "psEJzHQ6kxbVrp1cbUe97TkSBqs6kyfofZ7AHWsc1cQ5fACrR8HHcFuAfGJs5ytw7dGcodYgyxZd6uXsjRARpKY",
  "key22": "5yTFn13SUbCCr424vRTmCAAHQzTRKshH7XqQTB66fQpMwc6RWBjfPNMhvmRwzY5hjY5x2ekHjqPkXoTo268NudKS",
  "key23": "3mLqjHvqug8x6oBqbNKgPFCX7zGKMz6rj75N36eh4vCGmWMoFYExHzQVPhpkNVyGzurP6Byze6SGBGuTNRayGsWP",
  "key24": "2vGJmeWJpga5NRA3uTwB3LELvEhwTVxdH395mZ6EjnS9z5zzz3HqEDTWoKNEaBR3uReneeeP5WV4mfxPRsYZZW4X",
  "key25": "nTvs14fbwSTfoDbfdHYpLkBVTWTFbTL8aT7EjyFr1NK6PQ3wRWz3HnnLaBQkkv4biRcX1fAfqoXY4kWqvbbHrjw",
  "key26": "dsEwJ6wAiwx8t99jbzSV6u9JEgKjbzJaLXtjXx8PmYMynYseSmFVdXwTXnyaAJEGbD65ovsbQWymCLprnoDDbLU",
  "key27": "38gbUgEVvLip8rbyYjc7BwiarYZvkkbQeA7tA6kerJw7PMqGcLdYvFTX3ynmZR5NJZSs7pM8P8Z7HHfmBJcNcWEv",
  "key28": "4S5QiUuMGRv4yXwCpNsRGpHQPgcfEKdwdBePTsK7KiktwTHRLra3mnpNJs1uR4Z6CRY8JaKeMohSDaD8XK2YtXB6",
  "key29": "vc6r4XxbxsDJUf5LpbmEfgiq88TXzEKubgd46crg1X8U28TjCt9jTWss6nsoyWvaJgs1Pom1L7vBwFCB9cq8Gvq"
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
