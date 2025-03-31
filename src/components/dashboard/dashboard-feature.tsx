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
    "4pkKvSAtCA39aVA2MYVEo62RLhkBbuV6VH3eyBKA7PScMfNmLP6DbffenWM2tGbbBcEBbuNwLanXSWSkQB5sMvWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AvMAfnSzjjcCSnWp94nTZaiXXkvy5YFGT9352brWmxF41dJvQTZiK8qB7vzo6y7hHPUgNpxa64e8DABxX2pgUXr",
  "key1": "Tj9N2ywHQMf5M6KGkSZjSjd7GAa6gavniXJURM97Tkj8Grffg54mPVzLrn36WeTfyQwFauE5VgTnXbxoxV7yWm3",
  "key2": "5UB8NFqsAJQAX5sGYhVnp9A6HoPdVVPKUeEwdcRnGgyoDBMdnA7x2nC6UWE5p74ZNijajBowuhdQhEEJafiekRXn",
  "key3": "21g5H3XB7mV5nRQ7RN5W9bLrW3H3tgxMQQbSC7BHSRHrqKzHUvN3cYYympJEqj5gzYcobzmgrcyRhzmM14VVxbEs",
  "key4": "4iaNYvxE9hmsmi7LAfNFTWR7SL3GQxH1UaU9ZNCfpGbSZSQ546KBQyQZCbWyuEVd1vGCLDc5eUptuYzfKUPcf9WQ",
  "key5": "4VnMAmcns555hD81oapC1VS7JzP1q4gCcvxTL53RyMngL7aAcDMJubuqqoim9VEP6q9qt1aGvRL6njYhpmJgFyp6",
  "key6": "5SqWp2yzFadDx9cxoK3DNYBc7x9HZXNvp6xEHyan1z6Ngy4nGVbmJiHYZKWsFJkF1Ywtm893iizuX7qjKXBpVfWV",
  "key7": "3qofsZFT14b8KVZNJcDq5aYzyS1e2FhvruKWB2QPmeusZxt2p5R2szyj6gdDKiUc3Pf8aKoFfMqmVt79vqrHFNEx",
  "key8": "2Xv77UaURMtJzEyN8LsrBTDTAqU5EiW9cPNPSizkH38h3nHfux8sCgwfzTh4PQXERaA4UBBqoVgJKWdSQpJQs7Mk",
  "key9": "MXxfCDffu8Sm9ipfqa3RwYtgUuvqWJhkkTWxxV9BkDHMBYsyogKxAtecb4GfENARQoRJfueVp3RyNTyAz18LfmH",
  "key10": "28L9qVBrJJ8vLnNL378waVMAVvMgzTaa7CLs45VVyWADH91j21gQP4REzd8RhJ4t4Jyuzph3BiYZ181ipUrSKGX6",
  "key11": "2pSeGCSoCk1orgRubqiKFQDGLKM39cyW2AzKBEAvVxPWVhuAkoKKSH1DgwT7EnB5jGXGL31cCMCJ1VC8EFV4kZdz",
  "key12": "2FJ6afXqn7SgVUJJzYe7PB8hKy4w9dZdyUcBdhXzydvRtkBJvVTCs1MtPbzDvRTPrsT6yWYAM3f6hfJujWP6SbPK",
  "key13": "5ab8oBWPkr1aWGug61GeUC2VwapV1DVrgWPzkE4xe5Tb2V4VRYdGhqedvStunq848sWVrVsVAZgfDuZ4dEcsQtUe",
  "key14": "2T6dzDXakhpUgarZhjAUNnwgtjvGfeMuWkaSzTdvNivqAAyTbBb7FwcmYH6G2defPqYacjUa19sncxNs4X7wu5s2",
  "key15": "2e5hD5qBFbMkdpZTFFKvsUPnqTurW6E6mtrPDpz8LyiKz744LunJ8PTZ5wzQcoJ9VpWUYJyKaAVB1Ctme6kzFHdu",
  "key16": "25hYPn5ZjZBz48MUuWpuCf4goJBDskEkMHRsVBci5PxYzujUdCe4dL4MJBU1r9LzKv85m9fWYY12paYkTuMi3jY5",
  "key17": "pPtsfFmafryTs1dvuadBXsnEiL7QwKcKUaz6ATYbGspPvGARzFGwGKZFPU2CHXMqyrTW16jogThPVaMGKACPvdN",
  "key18": "3cNBpydUdZ1mjToVR9NmARsu8wum7BXGnN2BdcoopDeAD3nRrs1xvawPyFMqX6DPfJ7WTxd1875GSm89ve7vSX1G",
  "key19": "4SHUtr7JUpoNGeb8cT9wNv4PVcra2A15cT4wFYy5PYgZmLjfLLJsQraJ6XCCA19X9dEAMMJVR8AzWPam6AKrccAi",
  "key20": "5BvgUZwp94t5Y9VKX7p5T2NKX1bwMzE9WLZVohLQKv1o9qMZavLi3sVohdbJkmJ6ywiaTDMLk8Fi31deDmXRbDr2",
  "key21": "2xtiq2iXCZn2voDyWrUmTFC985FgeVHRn9hFushrjF3fpXxyzFFGaR5yDkhuagHAMeTmdCMXHDNhpXigcJRJr9t5",
  "key22": "gFoq8kTeKhAEPe8z24cdt5SBtG8dGiWEKVxgaSxGRFQ1tnh47tSjMvi4cisJDeamc5RT3c9gZq6EuUR726KbWbi",
  "key23": "56Pi7qbfmJFWU4yYyAsD1YM9gUinCShyacm4v3H999BnqCTmpEJgybYPwcMqnzVng2pGnfwCG9R8KVkpdaYzjuGk",
  "key24": "3SEH5HejjMaq9Lje8HqH7TDS6ZieVAk53SvQL2ikpgUtLebsgSSVzUxqqbwet8jeH1K55HykjepANREZ2KgR217R",
  "key25": "5LFYVaEcA2456t3iGAQrvV6ya5edC92xKiuCo4AByydqXMmTm5gxyzhjwt2qQmqT86zDVG7cL7h3buoGPSqsGoyE",
  "key26": "3zfveMGSzbsnHZH7VL5wJNwAeHh7cWrPqhzUUm3cVBot6aspVg29HMdp8Cn4zRmfnGhjisY7aRA4LzmPtxYKDAyK",
  "key27": "5SawuVtbLsqfbpcgR1UEqnwiC6dhrCLjKeoGf4QQZPhXx7zDZCHVVoixgn6ZwQ1nfScY194vRR3b87ctE8Vq4UoJ",
  "key28": "2zyLjQ1soUaMEwLHpALfWymNmeTUYGngCATGZ4a6KJnAUjUFqRCGkzHarb4gXSBTRVBzZUECocFfir4yyDBXKuPL",
  "key29": "4zYVLUXjpFWLnjgEfiVcTL1CHPV9LAfMmncjMoL2j1dnnWkW1M8JGduLQMmR7GJ3tkMZM2Xp5wmg2gkEaLjg7Z2V",
  "key30": "2yDtWUK1GyHiN33NfFtQ9BAZLe6VyjPReQ66z9KSsASRAFTueeW3Wo8nB5NQ4dd9T5smgqYwcGGVHF6k6ejCsEWH",
  "key31": "4rgxRqCyF9r2T5bhwwuSqFNR3eMfhL5JDb771R4YMmLuSrETiniZH4v3twyVuVF8iiqz5upvi6yUPH99e52TLH1J",
  "key32": "rHujwYfoSengVcqX8wCUu6cVzY4jgwRdoF6Ubx75eXvZxP5WhxmPq3hA2F8bHdCj7k9bQdgNHEU2QSSpEPxEakV",
  "key33": "277MxW61xhvaquV6q43jTSgU7eeF7gGxu7MWixWDTbfVGusWkux3AcqDAxJ17trUPy8VpH4N6NiibTEFVLDHxuwm"
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
