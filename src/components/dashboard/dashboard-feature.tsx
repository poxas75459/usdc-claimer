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
    "3X6VgJCCzQ71c1ftxTULaHDgRppMzb42EwsMKWNc57PMJY7JY8zjpXMKCgQL4dDd6pR5ZLs6QnpoXjNVyt8FH86p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4agaat9mfBJsmSpx23ukxuojLaASCk1tSxJyeF1BAfW2xdzkeitgv453QDxUpAAye1iUtzzCqkHBTc2Q3Axaw9cn",
  "key1": "3LQfpdCQDMz1JMPU6zevfsgP6dVZ9sFJCNWxMbnWL2WKtW5E2z3RzxiqgR723w6Nc6UhSuUPnNWA6rt3PACmnv2b",
  "key2": "48NvbXL6EAbPjhtkMVAmS4QLnsp3sW8Ze1FvESZKsUZQTfnruFt16F5tobDzCniLD2o2Fb32aMSNFbS5Vf6aSLoS",
  "key3": "28kmrtjbu5ZmEGgaHKM2XX5FYSjZAvKMZ16Sw5qcA1MiMmCHvQKiW4BXB5MQBeeYiec95NyUsVTYxV5M4u8S2Hyw",
  "key4": "5P2pu6czikZB51tYNdnsxo3H3XpZqtbFUutAMbZLbXK88jRV49q4b65wYqc6YsWeCcNeDbt1ksaiUNBQLGZxiKc",
  "key5": "66WyZbtnwG8fdwD64pnqhbF4XaH1AZ9DNLwbvMHS6TDBE31zqhjMNGU9eva2cRJ9tJU4V8YfkMEmKwYmNH1WtdAP",
  "key6": "52Uucetr1N9J8j67izHq4TQ3T9wNyxsWDnh6RknrVY4evkJrnehUAQrjpKUNDKsm4FNkq6yHT7GD58qkCV3g7hyr",
  "key7": "57qnmTk74yBLfGp22RdCb9u9joxn8mFMjUwBc22bd8un74t7EcCjcfzUfuhR1akbd3FJCP1aQHJdMQkrrSgvyRHx",
  "key8": "5waFPKXednkNM83YqQVeR7BYnsF5gqS8xr6hLAA8uGYzAVtmrTYb7VNNWeaScbqXCahqDktWBNKhow9iEcfR3are",
  "key9": "252XeQMUHDdtft7P6SpLGu45GpKiFsauMcMJgWduwHBCnSQRjjCppUndpyGhg4gG21n7mxg77N8kHgLsrPbPYe6J",
  "key10": "2sdzm5vgjKF49i8L5EL6DbYbDAKrRg7uJS2EaNpuSd3j5fPAs4DbDKfe1f3cQAMbvUdoPZfJLvvzijn8PTHTvBHF",
  "key11": "3a5VaqkNeaKcKhdjKe4uAPL4yK4dqjVfrRGRii6Ezku6b9cAynneqxCRxKgDDT2gRRv7DhWvLhWxRyb7J2LAcc3Y",
  "key12": "3G2UuxzdpjExZ6PaBfJrq3hNe7RnofiRyzsgTyFgaNYC1gRqgVJG8nEWFsjMJ3QSNH8CceD95yptvDN5sjy2KHUp",
  "key13": "5W8gPZeHFnbNKso4CforboNKCpELzCB4wGWnGco6KhkJfUPqyy7mBQd8TC9r7rUtQsbau5TnKPg61pGB8dxYDUXH",
  "key14": "4d3A4XEsNA7UqUDWmXwDuemQ7STAR6aWxRMJPNs5tAFjZUsJ64NHMBHJHU4SwyDrGpqEtQnq43yLccm1FUfh2HQW",
  "key15": "ARZ2Ba31Qd8VyEAYVic3orYkz78RRHNEXjJMgtzJ9B6hQb2tZoVNDUW41TgYZBgZgpnNcwNSstVhEhJvaG62zZF",
  "key16": "4Eu82TSX1KoZp3vJggG97PkCEqmr2DXSHRjjvKnRrKPo6AJMcorKYYhnuyCLJ7uu3UeF4mZ15iNzqASWsoDazP2p",
  "key17": "4BE4uAmvUcYZBU2gQ49fM3PPXekPMUKFg9uHKehb7KqonbtE1Dobt7wvTUXhPpGCzsZtfv9YnijkuKaEuUAAjSof",
  "key18": "3DATDCyMN97Bqh6GDYy7mbAJ4mM7CjPEtDoMuRL21sc5TFcZPVfd1ackJBLRebsPuT4Xsd5ZZumGnuabwkCCHKQz",
  "key19": "5BqpnrMVxqidSVkLm3Rp89ppVL2vx3MpCuPRKA26GGWkXGJ8RsGKZTvWpRioUH2JaTJvGodfjZsKSbKHwh5Wp1GZ",
  "key20": "3QWrzgF2oqp3k1XH1ukJKWcxQ4C72QzwSCsL8zMK9i4iEMS5RyoKN1xhZWJShfsd6vZfeGqB4DHjAmSjF3qsdTwb",
  "key21": "26cjzJHpPk4oEpwen3oD8JneDGQTJ6TCpLCzhkJz3o1ATLcT6h77NJa6p2mHmHF2sv2jeGWzL8gLMjtCarUSnsAD",
  "key22": "4bNup3H8BPPPhsAAxg1jx9B41zgn4N137Wk3L9pBUnibBBuZ5rjPdJNNrSJ7eZXcpJ9km81UNmEfhrmKatjoa1mh",
  "key23": "5YVrJL3QrU8mN6FnbH62xBcqJURqA6LdKnRLcF1gmZeg8CAoPCwRjE1Wq72zuB4ptYV9xWikko7gCp8NVQVBjUsA",
  "key24": "G85bBzkokHDYB95627Hj3XRr3qsxuUG5qe2i5HvB1zswboyjvMgapFGtkggKZjWCRy1uAMWBGJ4uCjczi3VF4yD",
  "key25": "2uRJGCB4PFvgqQWztbKm1X2eN6PhztBsCKfwgHV2uidr4eHH5vA9hNATfkPMi57jnLiaLEaL5PzLsXPs7CPPT5yS",
  "key26": "c3x1DRpiavX1oUGZeKVRY9UL1BtVN8sE2eUhGh4hhVQUfTZhQ1Gf2P6gfZqV9FxrHNMQeFXcFRqbWdbNL3TQzqT",
  "key27": "5hksbuWfJRdDp1wCEWkBtYUVGFfzZXGrf7NXiPuHUQTKjzmTcFuJut5dp42M5sZmzscsNdB3jA2vk3ZcDTR5vVDr",
  "key28": "46uKVA6Kb8jFbkD567hzJEXDQ5gqYxsrW6yeKMVd29XgwsLkepYg4Uy3aRGyuvzx2SdEs8ajTVSLxqbKX6iXRGJr"
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
