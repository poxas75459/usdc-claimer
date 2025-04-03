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
    "48M8DUGamz4cLXYfJnwBNskvDwxBWLnVNssQv2TrgHG5GamiSZxXjc9ZiARRinvNgBimmYQGkr33UAeDGj5n786U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w16BiKLaGggM5enddFGdXgZLfB6X4a4j9oEbCchR7fdgyEsHTfriiSkmbCT8h13Hvdjm26xT878U9Ngdp7t8JnS",
  "key1": "4LZ6JF7KycRGPbeUfgeMQ6N2wiN4umPSLDWaSsWbZhhWJXmstEo1p9XVAEfD4CVHYNQoh29ziijLsWAxnEBPBi5W",
  "key2": "4JLuFZoMHaRQiCR8GjE1RABvD9Hvwd4gQsApGfneHVvas6aE3SkgbCpPiub7Fox5X24uw3vPJCSNV7UKA2zYo95u",
  "key3": "3BKtPeUK21eYJHUhXJGGSpNFE3Fp5myUXT39FNVgQxeo4NE8iYNa9zoLLX1sWiuwz5Yw3kCSuRcU4FAaQeW67wSX",
  "key4": "5Vfer7QQZ7wfBniuLEvjh8YMPTXuzx4zQ79pJiphvekUhXPsrtUUakczRuAdH3p3wCwMEcwmtfeTyckji5gtSKrc",
  "key5": "3gfRjAUU9KHikchmbEsQUsQSFNKyQRGmADfNwLRdhVfyFdvECzEMTgNXLuCqLco1wiASCYPUkZnFutKffVw6s6wX",
  "key6": "3P7oxTJsWW1TqgjEEq4en7MxdHKnDR7ixa4RsfeYffJPjV4ds58X6J8GZeRAzFMEojcLGiLQkborV32urDmw32rX",
  "key7": "Sij7XATe8P1xotbiVqsTMG5LbF9r2vTmsXv1r7gXqPAWHHx2FfCuzbrx1jqH6gphREpzMGYWuyqzZ8uyatcKPMy",
  "key8": "2rmJsXHCjg8XcjUpudtGWH8kBvurv3AqemoEt1kXDK1GnGCzqhcdBqcd5XUQ35ZtDZk8CGeVmhj8JBArW63wSgYF",
  "key9": "3seXff8FvXCTfhfSs3sk9aBjN5qh76ZK5CpvWMDEzZjAg5VdF2VsbECu2kS2R1iHyAvsbR5QG1FJ471YonTrcu8E",
  "key10": "4VqFAXeSpSw2yG8vMh6JzLPCdTLbzJSQoncCyy6LXkQwyL1bedgRgEy9qe67DFTNDDuG3qNbU9X2E16GR2M3CTEz",
  "key11": "3oaApr2E3YkKMNdFoHRU6xMoYQK8gZ8LxyNxRMMP3TPcXvcNg97NKxXnxNHtfikp8GMZrBLU4fuRAG5dJmXiJ8pU",
  "key12": "26Tp8829rZdtAFDxYYwQctLdWDDboKJqp9keWihnA6bvp4CqCgk8qj4GG594JqZG6hjTqYUMUUpFKAx77vNhDsE6",
  "key13": "5e9a2anQch5SCgYMo4g368bWtMqegyrYjdZKyLdnAUzCrtsHavDzoq6CAAjWbiZewtRBRqWEL65infdfWh1h31Lb",
  "key14": "85td9SezyMHZhwYwctfvmJxzo5wj6YvzM7wJkibSYZjU8jTvmRxHTHVLRVrX3ubWAJ7pAtGjLmeaXZEDXLpos7x",
  "key15": "5JwKVwFgxbECKQD4YZ7BdiX7JFN1RVodJ9VvR8RXWKcdiGkWN9JB7cakQCTeq1M1cnva14SHzsxxx6kCm4bMLvfQ",
  "key16": "4JR1KWCrByvTkiGSM3Ts7bMXyAJQHT9bvvrwZB6tfzMWZymTdcyzvGBmAdTKfYtwzQRgvav6pTgHadg3ubr9Q8YY",
  "key17": "23nz5zy4b9CSRcrpH3WvAGjDoku6dKBFv4PFUBLRcLrJDMbvdGa5J9WE4tsBmUHDKtRseobX6wJYscuDRazEmaJ9",
  "key18": "3FSJMZ5SndtFavAtwqfRZHnXb6qJpDCQYcD5bVW1dFQ9BrbraXrBmWu2nHSYAk8HZLWKHJHAq155EtvA73gCA6vh",
  "key19": "2KUyWsJtUTc46kNypjimvHrcJ4QkaFKTxAxpMZ2xYqXkWwH7cprSB7DyiudYwfyXwCMwzZzfashmPLHtmDNfEkS7",
  "key20": "4eJaeTmHQm3uG7EzVoy8GU5neum9iFiGLCUppNjjJcFLc8JAmiheGBhtNbnwd869QkRmm3f46fHWo36Vu2he4pt5",
  "key21": "2F5cq3aq69si37eXPrTK8oUWfy5J8bz1H3bF8SFtfhpC1vFMA6LnAiwpRDZgwoafMsKevsZYiiHfgK9G3qJF5syQ",
  "key22": "7XK47AYsWfDUvPuZMwbPvBkKjTpBKXnx6SdiiNFUpY93CTcapFfeyspMgxJyBcgMntWziauiN4CWvMyhbwvFyah",
  "key23": "HZwdetKQr1a6XNWth7Tqhu6wDCJ172zcf5qwbGcPFAfuoZXKozoWeVfZ73DGKiwq2GBUqhWAFNtLmCw3N5jYyYX",
  "key24": "5Ev3zoHofW4PEXtnVz79WpAdBUDTgV3vHMA9bQ9KknLeXtBVbbWVd2fP21Un5svf918tbXnEXdA88T69D4eqeLkR",
  "key25": "3Qar6wYNk65JQTo32EDqnbM7UvHGrVcKKjQoPPKMVpfrPj83oFzkhSZXoeevXj7WN6nEy5CnSA75USG8mNSuHjav"
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
