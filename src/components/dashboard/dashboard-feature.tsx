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
    "358SYfzhvtVUtoEsVfrNNVLoZ7gN3aBWg5EauLargGfG3U4TcfrmePAMHDYaHsKcVrPpege8cm9gR1TqP3KVzESz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8UHM9eVwNSBjNWMdSG98wG2EVwTbsuSZk5VgXF76gzrWR6YmSZCLTRwrpqbvXnEmEGYYvRRa16Qv7uPE8D3njCv",
  "key1": "5BuwXXL2d7trZjoEJt7STyD1hWrc5N9und5NBjAqngKX9madUVYV7iPWBxnxqFv2p5fMk81j6NYtoM9mZQ8H7Vj3",
  "key2": "35ozUmUD93zgGGhAMS3PdzXTwaMoNftUvC6Ex4EJNK3zYbyQT3gMPi6hrhReiFDqZBH55aY4Ys4y1XBm6disjghv",
  "key3": "5o8a5hGsYHQTGqJimwXk1UkoJkjaAyhcnvnjeZ3yCu5JaiENMu8wPTTb4sJHcZDEUxJFmyXiLEHVKUZTPqXerdkw",
  "key4": "26vKEg8oxfCZNXUdkupb5DYy11aYAQaiZFPdh4bBPXQd8XcYcHU8v3qYQZ5U3hi3hQcB1ZP4uUoaLcXMLXYi24VG",
  "key5": "5chuqjzuzH38ytAgohuwvStPGcZKCs1Za8uNCJ85pdE74emXDGRYKUkonRe2wFh38ukJK4WKgEory4vLhzH8CN5r",
  "key6": "rkgFRszprQmfy2aU9n1Nr3HQgZk84qDqei1gEfVJ2rGgLwanPQzitWudN8FmNobfYA6XYiDmzCuRpZALEEv76Fj",
  "key7": "3RyJWgL5VSMEVnQEtzXGJJhSu5meEJG9AdKW89XGJUPnetrDLYzyzRP2dLQE8CdjqsVQSqFNwcUUnL9D51PUcvKx",
  "key8": "5msYsPQ7cfaoLfCpRWqNQyowzZeP4SAKd5Nz28S3EcSwCPxM6NoEoqgpuCew77bqdWzXWR2h81qf9s98NwCh5ACS",
  "key9": "51xja4pDV86r284ehRLPRBm9vZZaUXdFW9W8nVSjEA319XPzDU49ME1v7LYU2sRxoSesd5xZTkJ79RzsVRPSXbSj",
  "key10": "8CZSYNkDJ9yRvyWZJ4ShpSRD2ugN6qj4Sp8mGfMy2eGPfpT57jq9gb8VNRhopEs8Suayq6YnuDStuDNyFyJC38F",
  "key11": "VrjoaR4cuzm5ywhZjzFcV36URdDjLraYJmEtKtrTy7Rjf8ANTJNHvMqqQYGQ86sNoxjsgzq9g6Fezx11WUF8qyA",
  "key12": "37M9jHsLdfwZYGddbDdjaUWeg5r6yTpTBw46DRG8hkJWwhYmGetRGQXkKEnimNLfsvw3aPCwCDCy5o1TvLvstbuk",
  "key13": "5Bw23US7JmgiNbSGsPcoECN8SyQtuZZfGZDMfgGAQ4xH35xeSbKeFo9ERXhrz6cex2Wnv1d2Hk39MiUYAwYnoKQp",
  "key14": "4gximudTVpfwxhfFDiHqpu8hoCBcRTtUdyDhLa2WnixPpRVJCfF677xw5oJB4b57oN71cqhpMEUBWdYiWLkg2H2Q",
  "key15": "33QxXb575qZMMitZqBWTExEtRZZuhVcCFQFbKmeNhidjdf1eqcWE6551AKmQXDnJdpDKNnsj9YWb75e3GJcbuBG1",
  "key16": "5z5UiksKvEgYrRpM34YzG3APjrQgbVvrQjNEQ4C6snYNvaroCKm3TpggfqTWiE9pnqVtj6B3TsdscGaZ8mPubu5y",
  "key17": "4bBdMKv7Trnikf95pqYNG1U3TYfXFNYbopKKKgZqJV5FmUDnAEcxbn5zTjBp2iQAPZecTGSVEyNPPhstJUAmq7ZG",
  "key18": "4dkT17vxpnEChgbPSBAhZfD6rnXhn5jKhERZmCXnRJtF8De4Dpq876xEsFE29vsYJncwPNjHPnRhAw6gLALg5gGh",
  "key19": "3JsVa7dMQA58RoN9bxkjfo8Q2dxUhmutmivw1BJkVwBoA8RuE9DfKCzb6mQJCXp8Uh3dqFyjJ1gyb5e9JvkmhxbT",
  "key20": "5nUX4rT5cDkoUDn1nLXnEb1i13G2ejcUdRKq1xo4CmYuhWfq9eBUyFTWgVDqJukTykknQ6KAJg28kAemFsL2XfXd",
  "key21": "1Li4WdK1jiE4Mh7sGgWVpC7dT5kbUzy6dj9a8NKq9yYCQXjsoKCfLNDejNiBLyD3TPDtDz7WS5o1MAm5NgrLRW5",
  "key22": "4NBowf7F3zvnvzWwCZzjLnUR8YDm5Vti3abRSJZBQNZpLt3PXRvpXvroHZvrmNayD1FhpVW8Lj9jyr8BF1BUaU4h",
  "key23": "2McxBWsACZAtErmibJSMfLpaHDHbUb6UMjcjYdRbQXEKugDbGmyPmZfmcaWtQSyBTa2AftsJhC8Q69QyJGiJ4J8M",
  "key24": "2gbQchyT14xS4MiBtH7CGaZpLxA6mMFRmc9c7RixB5oHq8rQErXedgqXqu4j9z7LH4e7vhwdFQDYSTp28jDSNAVB",
  "key25": "31Rt4EAqzwqp53JZr6wQ7eKxPwQs1qxXyqxgxuKhiEjDASTX3es4nxyqwge5uErDkSM42iAbxhaqZedP6yYW9KZL"
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
