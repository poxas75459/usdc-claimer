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
    "5XvErMUYZFQNTLZnwSVMWdKWy5D71GrHPZMEpQDwTn87UomMCJrRE9oGqkcZT7nGqVth1gDLMurBXHxjU6a7UQbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vRXPnJmKYHemGezc4jJjyR7EWiAhvDxzsUnciGEPCtE6PhkxHEQvf6zK2yePp4U6UghnL2sYC6UU4AnBTVmK3Gy",
  "key1": "VyJAf8DR3mt7VFMicE45ZBkf5TBXMcPxfWGb7TcNS62fieCoPRDACbrssapF5WLB1BoApcdnSviL7fQu2EU3xPD",
  "key2": "23XW4N2PssuL5d3bpTsWYAVvNxDxon65w4K6Qckg7LdYW5ve8Q4Dj95hXK1yVwzSNXeaaZTAxmJiFF7QrrTWpoAi",
  "key3": "5tef1vWwgtyDJm5fNuKNaj3oHw2tVzjuCHBaHnP33NdrH6SbPYheCqMEPfmw7VgNojzFdjJ9C7uopLErFPQgzvMa",
  "key4": "4zFN8Y2C25WqHzN8a7zKWDfSR3ZZpCkG15RZA9feMTH8kgryipauTwKwouSqXr7TK9Kbm9tSFw4CHuNgaGGUK3hm",
  "key5": "2q4fWArhYXRdfAhKy9ShuZE4JGT27mfZjZmcFsxtjPZNAVoy2H8N1HvEbTU9FNfNohg3SSdtvxkatRuDM8MsNgG",
  "key6": "4wrZpEZ8tfHsFhEMJBAMvJzwfYLxHmhW6pp6pdWdgg2yzAVGtQVVedzaJSgFBdYbrkwfqTsARsegtX7KNLv1YF3M",
  "key7": "5Q2TYpNUcpwsNnSexanjCetQq2fJYptTmQJqCDxuFK8UmrLpAEcBXJweZeYgSTKoLgvbPCD8MPV7YZ56kRAvDSgi",
  "key8": "57v7BMGwWkjt3rVd4U5jUZVndzDpBJ2UHLnQoW3jeoMkH45SCN7pZs5ppYx9P7ToPcrmmR6znkTuM4TXatLaCWUR",
  "key9": "59mzvPiVYbME5Hs82Vym8F95jNa3KDKDVMATgtHVxqixQ23ftgHemTbAB4rHwgxnT1zw1USLZLJZYkbUond9hM5s",
  "key10": "3YdQSmmDtdVqquytkEgZbEC62bSmKRra5QxpHFZQPuSbJjKHbbUuZjMX37riSjZSLdxQw6aWbcHroZZjWVpLZUEG",
  "key11": "4izgtWgwkxhBJBCjoxQ4NWjnSiedjENXqhtu2kddwhcjAwqqjekzrGNN8dFR1bS2Arkc2AjZWBWeo4psyqZc1Bt",
  "key12": "HmRp49MqdRFaWWfK7xTnV8e3866YvsXe168C74pqKLLBJSFBWmqWSLbCgsmBJemqvRcRUcCSzUvF46fAGpqPypA",
  "key13": "3WoBNHt9JHaiP31i62GZuzUX7B2ib3DNkatNuVcv3sESUu1DNmU1uT7Y4jrof4qMr29J4jvjw7jr3NSviCWcrq7b",
  "key14": "4pNDaaLeewh9eCaPPwrwg8jqCvJDLJb1gBAFottdF2q8Tdg9adHRX275M2t53yj98cSoD4gk37ygx92uGqioToet",
  "key15": "2ryGsaCnbQH97qzcGd7K7qNPmMU3nrNzmALZSRKT6t1tTvNY9tSCJ4aisjv11DS1qTrKws1E8DqAxhLFzKUSCnrx",
  "key16": "Bg1zAdtmbmwxGfx7Lgkghgs9d3RmtrN87tAzByphpARkBHeCvMPogpRcELJ7cwygi3pGSTdgfogoLWbLi8TbtmD",
  "key17": "4ftM6RinmXYgjBd1KfstNa69gqRJMtWBKUd7L6vsYdHR6J4yYqpDEQCTkJEUe5SaVxecqbe2NVbLdwBun3urdErJ",
  "key18": "3wSsGx3szuEbdFcQ3YcaTdoRvSgDhebnbqxrMwk2GKK2Smp35uA4QpZsS1yJD1R3uy4LbD8Nwqijjj62GmoyC4ZE",
  "key19": "jnFhYEBZ9P9uSBvg8Rm9e6FYLySQqDLoQ522UQNvQeBExjxrckAgSF3uFVEhS2Y1cejutURGWo8hMKzzxEVnBWQ",
  "key20": "M6m4o6k8rzFnbgf3y2taj57JQF6BYsr8g15vanUnwFffvwg25Y4bKSWZK4QVJ27LdMqBJ339h9J2teoWK9eXNWh",
  "key21": "zufV5zx6gJ6UjJq8SVDNXKPQ6DzZyvgGoHaWLqeG6nJFhiWAyDwzdZ6BMkyuvVaeohbFqLd2fHSQa5i2uy8pr1h",
  "key22": "5kbrWRZUygSeY3eZfoSMAaT8XaJgVqmUu13DA8FhhhHXx9bv4dr8Uk9dnCHHz8K1UoxQFL9PzQTeBELWZC733gEA",
  "key23": "2Pa5xstXax2dQGKHGtTSBeGMmiAdu9h63p9eePtaXnZJ1xVu39PRu3pce1AxKooUifK4DK42x2nzbNXU1WmfmXUr",
  "key24": "4vnNDxZGN8zWfQXNMuGdCiAL1jUWSQKSVweJdpuqfQGC2o3sXbka6jSzBf8LpkNrqoDcYNmdx3fub1eQ7tdnEEAT"
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
