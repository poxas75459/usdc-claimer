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
    "58pYXta52c5yWCktxYRDThZMXZr6XhJ3dukDSwjVaaDQQkuwV34L72HaXAXJvZGeZVQ1rfuFadcz87B4UUGSUHAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wit5VcixcJRGZVGeie5KpLVD1KjyZLcmCu977kT82wYu911kWvtL2RFyzhpFzFHnGjKYKrgTcRqeYbq5nt6V51X",
  "key1": "33LEHhaFZkuoHHAWT1DmqTjRzXCTgoga3dmnEvBPEbbh91RFWJs9VFQsVhCfaEFGaWw2mADDtUFd17tH49qaVjqa",
  "key2": "pgeHJjjfjCRUmros9PDRWyfVKoZAhXDFuVSWYNUkjrvizqbYpTZhQHgA65Axho1GDnnnX6e8iopMX9F4abonegU",
  "key3": "5TTtScL9e52oaM9v4K4pfic7fF3jZ7yUk1Rm1UDHosNq6ZhnGjUptVRKq8C6RVpuBpXjKopjyz5M6uq9VcuCj2QR",
  "key4": "VMu8vU7kUyDMiSijbRq6Lx7A2KXYWGUEcEpLcrUaAiVUczoPnB5tz9cXxp6enqskzEBCEP4moqvjAe5SStJXc4F",
  "key5": "yVLPHoiAvYspT2radnukVEs3VpKw59pEywrQyrmXxHy2uG8f2c8hErGiQFgS1sML9MG4QSnXGjrsjKuHRFC2fVq",
  "key6": "34AxJ7cjmAEmsZndvwaufA5hnEkvQTTDwXEdBsRrxFB1ZzbxRBc9CkaYWsbVBkcpC9cHUQYMJA7JQ6EzHGpR6BPZ",
  "key7": "3sigzdBX1gQPKexN9KC89s6kjrRH1ncax2wwwckxciUZeaR2M4E8L8aVZDNs3Kk8puTwwpf8PmvWx46V3KkXfmyK",
  "key8": "3QoMQZX4qJBAPPxZAyedjSQsYsLhg84FWpF31gPqPUntCaRezWUU6saYpoas4oMjSQvDW6NoXdzwUjyb96QHQiPB",
  "key9": "4zGiFQEZ2G2sLzi4RDp6TqVFJUzNYnPyngkTzjnmn4vhetUcM76FT1zf3XhHMqghReKiTk3ubNLGZQfAztYwHF1d",
  "key10": "4g8xNUCvmrQi79dBmZ2xUyJnNnW7YLwZVRQdL8FU9ahguWWgHCqVWMXFQC7L43AWKGm3uEMA4CDshhPQMsn5X31G",
  "key11": "54dTZnzdP21kBA5CoXd9Zo5HQjLjNW5f56A3AeUd1qvwjmpyp8g9g75e8zxcawB4JAw8Vz3CYYMDKExCzKrsiDMK",
  "key12": "5wieBtVeS1HZErFCTc8HtWZKXoTx882LbwtZAMvtfUfviDmhEG2BrYWinqQhDU6XUvHDJ5Sri8A8hCgYBcNwkSzY",
  "key13": "gsUXgYNc9nqcpNcUBsrJHtM8arE2p8R9K4otgkVQ6dNd92t5FBaxejySzVumQziteEvimveUxSm552MpTvHW3FD",
  "key14": "2Y4TfbTNPswE7QTMbvmGAwfUd7UzAXK3DPWGPNXKKbuN7RyNgMQiD7U4QhzP6bH6tb8vAirD1Z4bQ1i6UwZXc1iF",
  "key15": "gH8DB8Qy7UkrmvAgApMcCGZ3Buh1tQ8fQB69vyu8BRUi5JooyHTzqa8iFT3hZkwK41NREqnJTH997eJaf7F2wiW",
  "key16": "4rDLN1ApbrSzQRWBr13RkQi65rqMymQDGvaog8w3ERtKQJV3QtTsEHyTofoiJTEdB17qW5yTtD3qxzyGGqLJ8cxy",
  "key17": "5bSvUvfiA47DSQhar2bGnE4wThYMpyiLPkZNUnDoxrDyrHmpRyAwxG1RUEc5Xp7aKj7d9WcTvRCZGz5ygZs1bgxF",
  "key18": "seuGzaHxvTtUbKDZaJ7aPYcEq6Kp1VMjatDabtxKuruNULH8mETfuhYTzUHnh9jsf6d4cnkV65wuHTQzgafnSDT",
  "key19": "4SPWfxQEsV3vpSmygEtLEAeDuKxysFdCiRS75HgNYomSbR3U6LKm4qXiSeuugceP3jJbwoZbKbQuhq1ZGHexScaJ",
  "key20": "HumPpscNBDZcnSCAx8s6nFPTMyu1ZLDKve4gEB5JsuxnByxNcUYkFBfuFdeAmptDid2xcfasuT299Wew8zTdpAb",
  "key21": "28nG2QbmD1MpZaCrgMAuQytkDK9jsjgD4k5TH57FqDE4BG53UxJhbQ4mxRZecttXK9XHuvUZmZhSq885Mv5PGmUT",
  "key22": "LSbo6GGSsHG1EFPScbQvqHfFqULvHjafnzx61YtgtuajGsVGTVGJHCNZJRwpcNNDWT63hsRBuRTpbMPqk93M5Um",
  "key23": "37rTpt6kesn4MUh8rsYkJbAv18T6t9mCKw9XAnxWBzhkvSrVC5goQpLLeEC9hSpCkLhDKwNs7M3ogRSL28uQG34t",
  "key24": "Wj4pqeuk3Ak9SGpRYtXDxGHnzTQTzxHitfCEjfFJDXrK2cbK1NLey8HKd2qRBcBeW4tJrqT5fxNVvePywYugKDp",
  "key25": "4BXHcfL755dUYVKZQY968NC49LtAAv8PJaUxb8R6o6SwBDCUz7TD8jEZtb5mj8Y7UrLKbyXpMNntQbiaarTfMLkQ",
  "key26": "3YJQdHyJ95w22NT9D3icMCKTUg6M4L9Lbc6YWJyfC9NiecV4goACcyhuEcVqsBCB6kb2eUhiWNFwxcuQ5Fg5AzW7",
  "key27": "3GWJ9EERUqREmoNZ2z3TSTVUF2AE6KsKYZmag79wEA3rfzGqXyieBb1YEmkJfnkRyHaFm7a8eNwMcDv1sX42q71d",
  "key28": "4EBWFKsnKTT8LRQmhwH48qZx8eg9QJ6R69pJP65vbCGSoY5ZKafRuRzQiuLh3uFzsvWeYPk3bYnMaWpMnou1UniV",
  "key29": "53qPT2nVHsRVE5KQFREnYQ7jNDk7WPFhfpkQc4MYJmxq2LkBFPmYWC1sxee1a7MuiSPiNqW6rsyvyR9pKfUdUjN2",
  "key30": "41HmTvK4AqLFKWE1eeGaa1PKi6dN1rb2VNAXHsVpsG5pYD6MRC3739ME38u5AoQRc4zVpDzow3LWLKNTz1fvA6Co",
  "key31": "57WUSdZJFfMELhUGrNxAifYhDR3mHRijTzsscnotAnqvF6RVkXh4JuAzA4ReGqLLV4zSd9TR47AMDEPrQEh29qZQ",
  "key32": "28AtUVJ7aBNi2jWtMSamrS6Eb7tSQfGzeK4M8Xx15yzczGFykL2cdKdyKHP4ocT4nw3ztqWvo6LwSAKXqAbQRUYi",
  "key33": "2Yw66FvkS9z5GgGBUMBTAdtd6WRTQ1HGJLDmCoGgjpGPRC7AkMMYWDb8hYACRUR3HYkZmW3PyFtFBreiGDZiqdMs",
  "key34": "QuB7yHRg1m4A94Xuso1yRQJc41RezD32bdnZHm8YdwvPdC6tZ9EtrMJ6PQ4jA4pCXyXg7WXqZpHrtxnAWJHHdsF",
  "key35": "5pgEtEPaUrDQSoLBKF8NYV7BKk1W8QPLHAN7oyJ75ffoQb4UfNvWercvVHpgS6hc8ggNmPPXZWmZhMP4NeWsUYjq"
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
