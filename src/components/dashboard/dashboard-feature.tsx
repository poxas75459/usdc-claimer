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
    "4F2ktPQit9xXNK7uFEA5oFVyL91Vz3LNU6P87TACuPbXTb7T5v26hfG1HGDJxxLGdTrQKVT9znjSHNqJ4QvoAfFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QZaV9sQvFbfs6tYF3jfPjTHQeZxENc8FxDuCgTrN2SzDdxVNcUf5YZLdghVWt2QuMTHZknJFTNerDQT8ai1oNnu",
  "key1": "CCWzMFqRvvkhXuTuqe6TDDnnNz5dwzuUADNnhWp3nLAUMZv2wtUtpSeSZNNhusdpLJUmMSaA36QvxjETfGZsUpa",
  "key2": "3fPkRGCSGCUoqK1uZEDWkRqN6HciFUVgQgxC1rinZ2JoeQeJcoR4JpTeo1oRuebVBsg3AKcAsPmJhBdXjJKNTXHk",
  "key3": "2kT3X9rbdVkQGq477oGzR5Pzqc6oH2oGYRmEmw71Rj9moVBUAp8apnBEJEwcC51jnLaE5zGmG7qc12CLLCqzUPbz",
  "key4": "2JGZ92i4HxgbKC5RV2HQqGfGh7ppwPR3TPnZWzYdxHbvMzTuGTs47ezy6HzygLjXDuQhPpkzYRa1VF3mGGUFEbhe",
  "key5": "8MJtgqDeSVVWtimw7GTKqjnLtmrrCiqVXrpq6Po9fnB5Q8wRLwmfUXNSDMtAQZ5AjkbKuFm1JAWFAFezpUeon47",
  "key6": "zWtTm6jxFdm4rJ8Us5o1GGyz94Qv9DKeVbcyrL5hVo2kgueyza55xMHxS1aJe916UrFvGYZrD5mqCDnEfjdiJoL",
  "key7": "2AK7aLRBFPYt5CztMKBTXqgQ3yGLE2kLtknNmBAbAF39SScxxCXuocN4mgCeHFq5pR6UVttHD8HF1jadDtF57iQc",
  "key8": "3ubLNpSwqGnHcZpKj4QZ4wuLXawdTaQntcASqNw6ifwoQRUqTrAZxEG5eVz4maqB3aozLE9CsprdvGaYt4kM8Biw",
  "key9": "48YJpbc2sKAmEkSt3oCoTa5FCnd5iZScUxZeES1kCqE4RLeJnV8Psf8H1F2DurPELgpiTLbUKWeU8NRCF4VBNGv4",
  "key10": "WchDPo43svwxUeNmofuzkAUhu3kesV9bDpVajTTzCm2iEDsjut1i77V1NLkSPNWN9hL4H8KbE4dcMGENFXSxseJ",
  "key11": "5xqk82yPQt2kqNPVx9J7Gz449fJYiJ57esbvMy91qWooHTEhZDVCeBAC5entmbgi1c2H8G62sYkUXFRvmMPYWpCv",
  "key12": "5JEgh1TMnUYCeLfiBiGH2wANzc5MsJ53CLfZba6UK7BSfPWAWehcHesHzokc9VnMJcjuVefBtPDUSQ8kfs9MUMAP",
  "key13": "25SDZwu5eFn31uUqmEQkRDtQgnhc9HojyvPXReQhCyq7keingbN9Mwx8NfFzUkuHKBARZk8c2WznSuRLq2qia4mh",
  "key14": "5c33hvdWQcbWKfkkVaCqa5VThBBKMzZC9yutdDgfkesqsG2zUEC7GnaoGcvarP73qJRGGPv7U19Qamzo7XePpFgd",
  "key15": "4rAAxiy3hk5zJuv7U6XRgj2s6j2vUsdMDKL7Dfp9HMZzY6fcyvTmibhCy4NeHuAWz2betsHX6UCiwJAMt8qZzMNu",
  "key16": "3aTaidhq5UaUwZmCKjPmdGfobsg7A34kH2DaZ5XBai6g7jCBUNFsPEW5EyeQoZvV2dD28RPTXbPQcgnN6GQh7S6",
  "key17": "TBfe7L3a5SZyGktLTqkfC1hzCc33oxp4TFmp4uQHoUboegUryovpnoLzC5KjLCgxRVxbEVhLRmNBEi2iZotqFTC",
  "key18": "Yj9oEQVRN4BYypNyoQNBDK1hhn2PwDdy2sL1esJSZPLC7GvapdS9xZzg8ZxgvYF6m4yaCia9KmsSFmPQvqA8dQA",
  "key19": "3dEnrk8wGJyMtq2YyR1uEvFE1dxYKVZLStJNzzpW5TqAB8A4napXZ3MKMMW3o2UZAqyCbAyVdU8WWrHoGb1JTMFZ",
  "key20": "3QE5DiwthcowTdcKEi7NWmHGmAwPK3irVBVPeJ27o2s2C1MLXFrna1Gnhxd9LtP4VAjjrbRs8pM9CZwRnVuZwsVU",
  "key21": "3wVQ3Gd5W3YmMYoo24zs6H8vrzLbDmfyLsR6XBdimhPUfrJVFjYYyZ12KpRqq6JvcxHGJZ7uateaqzYFoyQWnwgu",
  "key22": "5KDXGRz2osFwaD3jNCwdeUn93ReAzNKG7u1qWQVWx1rUX7nopSQe2P2XdULkvvyEh3iu3ezGAAwSVgHitUD2yFWi",
  "key23": "63nPmvNka5TfuPuWkTeS9Zds4WGAUwi2Mo7daTgi8Pw9U2KnQhqmCVXUBoBTWJ8WQRqt7ZoKPPJKp3wmGWK5MZ7A",
  "key24": "4gx6KMTbrnWxgCExC3GqWGp6K3BJh23wjFYbxgwMEz4XsQfdaXBqSat4C4pq7Cz1bEKaAcga4ZGiu563ZnrX8onw",
  "key25": "5mQRuvpjFwv4AGRNaRHStz6YcJCA3ABqMrV7GsVq3rcHMgcxVa2izoTt6f9vfYWSUj3GshRuo62VfyZQhFWEy78p",
  "key26": "39A9TRiPx8ar8kwBLQxvGP9Ax6dhAQnWfkm5B2RedMZd3Kvdr5hkXesDdFaaJHZMhm3nct5tg6yfDTZPg8SuhDYr",
  "key27": "5hvRn4efEXPXsXi928xYA98Vcq3hZx81tJmucQ33j7D78AbkXtdm8YtHwDG5zTxYfvPw91aCQ7rJM9T8VLJvuNTv",
  "key28": "1GaEm14zinbH94yeCYiAmSwSuYacdXoriwMDCmSmzQg7QYcWBBBNWUQq9xKTd17FTEZm6SUCBKkpoC4n3tQjCWW",
  "key29": "2eagDpna3wbBFudnSpsiEDPh398CtntkRTZzzQemYmY5EnM8in6v9vPxMHqt8ANumNhgyVta3aHkAMUUrBN3vNwc",
  "key30": "4o7XX8SqvwXxNaGMxfBAXKQzUt5LzoKYFrDFEaHSFUWLiewnxbrWBMZfJ7hyFgNngHDxpLzRokCRrLkbhmAqz2pK"
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
