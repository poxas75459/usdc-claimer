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
    "358GnSSPjywsZkrDaSfYCsU1fNpCFS5L7p1Rm24o5jH481Lq6aVyNJfEtPD6MBnQaQLwgex47cYr6ohr7TWcLMbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iogSdEPkixoqTw3ZJpGNa213ZQuKW2v4RZKJWb4pCqPYkMhKM7yazBEomKGTuSw2k4zPmK6MEYho4yn3QJnRevT",
  "key1": "3DHhibobSfJDRMCwjbLwVe4GPc1kUjC6BPEuY7X8hXXdLJTKu7k5jmjw7AxBAaFcxZoZbELVy2BJLY9mGpfRVbQo",
  "key2": "5ke5rLnkFBfW4zvZNwsaXdH6WWgxQgtbDRtdpmRy5cc9xdg8BeyqXmrXM7LHFScBn7xNhSYHELgsGHzwFM46V4bj",
  "key3": "vfEbpsjZdkdtDf2L2zBbST87Rra88qMDPJdw37zcxwbgCN8si23qQu4UV4xcHdh8FuGtkeCYHTXmX3Syv5bAE1j",
  "key4": "DgHWtJ6wnHuAsR42t92crwR5B2Hak42t8F3wUdpWh4uJJe9QAbcRLnD2HY7bYn9A8qrFBYPedtDS63Y1s9VRU1o",
  "key5": "26RZsiZ9B7jrrqprpVaxgmUuC7WveA9UEGKye7TU6sB5ZBK3PNq5U3gop3rnzsUx6zAbkQtvYu5VjUiBgmxSADSF",
  "key6": "5x3L1mEEzkMF6SoajSaVy6JWAsNwfQYbMey5FoPEaijHy6b9cAFdLgU885nLLNieUzr78B15k8BRLUnAoy5Jdc9s",
  "key7": "4o5CMf9STpjgz883GzNTkMXiQpQVtHGmXWYT1fAYqs9kL5fRRFcaKKfNYKKKr5PwK6X1tFVwAVsWkyEE7ftKzcCb",
  "key8": "3mKFBKZov31BchaDf6LpVtCAZFPoVpojPvMsF8euUBuxTSaswHXYwAPSEsGPdcBKUJrUz38ipsbZpbp1mM6pmgq6",
  "key9": "4nfEyjpb5ACFd4vMdd88dCJJiH83N76wY4MmKd2rmWpsupL1HxViA453C7kBnDEhgeXmiL9Jt1fkjJYBmtF6evAg",
  "key10": "33YGX7JVyRQkfxxFu1T75GCU9mbfdDXYNSwDZ84vzKrK3gAXPbEb6BCzqW531df7jbecPPf9ouxtfgST3jQCNHV2",
  "key11": "CJkaSmzNoZQnJSpfhCjYEz5YMtgP1UCMpBMnv3L9gvtHP7M4bnzVskQtES6hGFRRZeurnueN5rR5AmNjwnUd2df",
  "key12": "4kzt6Lf3qGcrJdkpDqgeQCLNus8wgN4yVcpziYkDC9EaFqHshrGELdnt4RC9pff4McdxP2CobDS6s7Q1h7qLrp4A",
  "key13": "4ntnp6tQjD85dsRucaeYC2R98kKkW3KTZZUdP9TaNHZ5mcRNu21sEjv1e9JqZUw7AP5u7kUn4ERRfKtB6hw1XRPF",
  "key14": "4g1iVCtVyj8FguWPMygN473KkjQa8iT8eehy6a4PkNZMDWUMJ36b1TNbuSfVdxWnhRt94GTm2uWBTCCvPZ9UrW6y",
  "key15": "7oFG8D4tDSAonFGZb24CTATRKn8F92f2TrseN5PZfDMbriUFNvYVCeHxg8SakR3sMJzMFu63K7vswgdKivEgkCv",
  "key16": "mpt8Qj38fiWY4jeR8wAskyGX3YVCsSjKLFqxTsyv8WpsZjxJq6dPnz8F6AoYgKoBwU9fRPKM2aqN88v7JrS9qj4",
  "key17": "5iCM1XMgu9TUzuxM2XPStAZsx7PLwRESpGd6f8SveAPpxK7jS72TDtw2WgqHUnTtdzudTy6msBrVCHXWvFo6FyKX",
  "key18": "5aX2LqYbcdHKKbvoRoS55TBgAPYw1yZ8N5Nt2E7NwMz7an2dxwHYfj8EH3xUXx78kTL9kx7jBvzpKemPPWbTo9SX",
  "key19": "4XXDbgT5gUAQP7cZ1w8xMyWQTroxvVeKkLyr2CPyMCmfso8TmQDy2Xic9u5nMA8daLSZnaryLG8wzwuw85cDGmF4",
  "key20": "2K5onK2F9G6G6i8vbvHM1CTS8JsZ1AcoJdwLLxLAgXcLPhJWZ6dAL6dKY5oNGeroRvjvYxGpzHvnSncz8VpkE6s1",
  "key21": "3kTddgcNTeLKXrPGxyNHurVNaUVw7G1UuYrqRG16joB7j49ih4pSxQRi283SMTN4HyDNgW7K6Ux98kmQtEs2dQtc",
  "key22": "3mx3seY1CDCeM8eqZwkybEHcLxCTRwrVqsggaENL9WZeRGWAufsj8Fw7hhkz3dVzgjN8v6i56A8WuftMNpi8iXCM",
  "key23": "4WLQBU8RtCLXEbHTFiWkkesTc27hUyq8yXvysreds98ztagSWL6p3YY5bJbuB7G1ETVoNa2QujZqzzhMWK3XSb1Y",
  "key24": "5r7preUcB5BrzEixRbcrfuZoRyVXXFSuuw8NHQHY8Ty6N7BGaf1r6coyp5GsM5mK97yzNL3vTA63Wdf1LVsDT4pb",
  "key25": "PWWGfBcikL2UD3hYFGC88evLpfybyvmea369yCtCa2iqnmsBQuwSxQ2Rbap3VbbY84Vbo8niLbtuLKV6dMZwfw4",
  "key26": "3d8LgpMZv6EXZawBNxSUM99v5eto1Y9Yv3HKjyZPpbRQT21dUJxWAM6VWdan9LG8TG3wS8y9KSSh67N9XCikcFfm"
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
