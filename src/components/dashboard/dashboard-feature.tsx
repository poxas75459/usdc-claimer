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
    "2TRuwMmxLa1aXMYRxBYHVyvZgxCNW6FTBGC8YHakq5qPvTE5UiHzEZdP1QWn3TjMDcCikojcjSn3RT11UVkoouF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31RfRGe4QPVj3EMf5kUnJqXexBUD6vCvLKVu34dez1Dxh61Uwx4xveUmKzDhFUxbQgqJm2uwGGZCTL8Mosx5BHNS",
  "key1": "2aBXa7gNCqfu24au1DYC9ujqv6dAUdWDyCMMPuBz3z2b9fsVFReWEjJDAPk9PxbRyeeyE2Tzf6zUFpQdPFAVy2rM",
  "key2": "2mFbR1kwigkYQN8HTKbfZGP66S9oeUfxdFHXMFzFBTw1XFHqzcVDxAqTu1Uq45LjKoAKmvW4vs8qBXRBkh8Ejxgj",
  "key3": "2L3Dx4Wf1LLyibo5q6WAbyjB3Z1N84Ft2WCVyDPuNYQfdncKfDeh524BTxgtohJdV2X3UysAdama3H4y2muE38Km",
  "key4": "c6TYD3k4GKaV6DoGGfyDrg28Z9nVEXtpGL2yUey8AkRDpqqRo7mh1CwXypkSbAZqpKi44JrU22sWbkiNjF1KZp3",
  "key5": "mURq6xB3FgunWEftyHQdch1xXavYeer5JCA8AKHbziwrRovmUMf8Rn8d7K1V6DK4htr1YXBrxCD6LW1QuHvFWLW",
  "key6": "4bjghx4hHK78mdJKBQZQ5dw5czdHC2wSsLc9eBGoWidEyBAcGQR3DTbBcaUbXdoqzphPwavto5YQ8wdGyDnhLhGP",
  "key7": "4N9qPPuJS7nSAhGvzAbiUv8spxXzgy7sudQZbRyfuEBCKiRwees5mUmJP76Uri3JKo6oXJzPGYoPLarY8LLbfLJt",
  "key8": "4VDxFgJWwy7zkfdY15wLNYBuLMTpDiiR4cFdXiNCFymprLKyGeqi7Zqv36nwqdrfP1NncpZQmoxpEdotWPUE3GtH",
  "key9": "34DkyS9qypkRLtLUF1VDAgrzB1phtShBGFeRpmev5YumeaLiGA8FRwWBNHQ5oWkwEfKH5CzLzXi6KMUDL2GKiYYi",
  "key10": "3JRxqydB1XKSaQu2VxYZEbwEBiwN1GLMqmdCiEpm2bJAJDm4W6rSBKRWyiFq9DyMoNXJiLVjHLmYAb3HRUXrgdHR",
  "key11": "55HTv188d18rHeAkR33PUrjSYDeJFZe47WmFznPcg2Ldcp3wk2KsoBXuanDDpKMCVT5Z29xf42fZ4CRvmgahgNy4",
  "key12": "66Z6UvyFyvLHWD4fCWAQtDBNjLyfuEhfYYBQ8eWuD4L7YHpXH4f3wYfpQQGAHVRkWfK8Esqpq5iCPaVkGbL2icdp",
  "key13": "3t9wP2TRLP4zkfG2zm7FVgMsowtgWpDGBJaA9kR6JH7Rje1gufBGGFerbDnhLrb7NQ8Ts2HEAWdthYBthyHUub7Z",
  "key14": "4R6hDkcnGN1tA9BazGPuveV6yu2kHfCYm4XiBPjRDyao1KyvADPecZNWYY8tPRJZyXzPPoe8egPAsd8vWsCe7ACF",
  "key15": "3F1Y6CTmTCgYXFcckeWwAzFSS8V9V9ae1iT5rKf6drbyRtLWf2q73amdJJMSHpVWofB9zxWF9KiBsywJ28CHDVkx",
  "key16": "Ysk5bKuVYzZmxSHS9gLHKrYHbPHkLF23sC5sJo521qckXkQ9k4QHGYtRwcXjnDRVB7aePxu82Xx1bf442RHpmiy",
  "key17": "4inkSkj8zWmMqQ8dQnPUMYKETFrNAbtswZ5qgpoMaqsqtvv5auPUQHAmsRbrirQ5wdzFgcU4zmUvVuSRbtCHZtsb",
  "key18": "uDDqEpxwRQYeyDExqW9L2PzD7qUukHrzdhywbNVMxbCQeroh53fNvDTTh7ANxYC6m8VsozXvYiyHx9SSPp58hgT",
  "key19": "PAxzuPyoxTaHArRbyFdCVTqhw4rhYyHFuKsMPw4f5GtoPkJzAbY5oagtj2i8LPE2e4GxrnHPbRWvPANoGzhFFiu",
  "key20": "5qAE1YxD2jk6iGdEx1AnDinVbz4tieqkYSNdcGcDTRyzfkmzhuyfTtuBFdyjUpVMR7o7aF1X7Wz4JU3DWNhftduv",
  "key21": "5EhNgkPT23XNQXpakjVbbU9AUkMhwHjFFNun98nmqyNBVSHFLBHctaF63grX4hb5VzWkMrmZeDDmJw9Rk6aM5Nub",
  "key22": "3BTBHzY1MU81fzAB2GTDZLeDuj9r6xeHk2N6bQXJfcvVTZiGipzPZEy2mEZNa3AUXLdShqnQ679SEUod6CfHbrzJ",
  "key23": "4NdRTHwH8TwoVFynTiBc97GSXjqSRd5yWH9VKhNRmUMX4GfJjpcFLPGSNEzgrBsdan2fjP7kHG5T5wLZFX8YW32q",
  "key24": "3qPazECnVH1xJHMKShGeQXjfUfyFmxHknvYBk25N1CxXAFBy2ph4vNDz6JrJGDizJTGwe795AdesSKfNWLsmKw3E",
  "key25": "4cMGLBpNkYGx5rhqKMLTT8kqkdUi2rcDjppvJPeRBQANdXmeeoCbQQ812X2XB4pJdETsHZDFcDQ9YSdPa7DJqgxx",
  "key26": "5xL6qegjKXP5rm6yk9Ejy8GY37oj5nKN1Yh3iT29VvCgoACGfn9q1Y1BhV5sEEEedoyXurdBkRgNjcQcwq71Aaz1",
  "key27": "4w59WkCiSJA5GGZjkZyimCYjGFDySsAj7CX66fnvLKkr2uyn44aKwm9SwPYrEbH1VZWpHB5UzTucQR9mZGQ663GY",
  "key28": "3L1821p1Snwfecj6MX8bzAd3c66vsKomnqPfaxa8PGWxn7zM5Kk3fPCKEujRQCrKwErknB3Sn8c7nGRrS9fva5b3",
  "key29": "5GwhRXd2hUxu1BiB9ftJcgMfhTGGWGvusiz3T5wDXxWP9iFEWaH2JShpe5FrSerFJktDV6t8XeTtZE1ETu5mjS2G",
  "key30": "JDXCym8KiYQ6uud7WWKw2dMreJ3uGHsxrdKCrXwL2neXqakzWSjSFTPYiMaivb2ADw9fgsMWhidAx1coir2j325",
  "key31": "GAkbbrjJ8etVhHmzvWpJ1vYYLh4tDt98sjB7gZbEL6RGXSZJuEnzBnNGc8Sshw4BFpusprWFy7EZH1Nhc6BmJDp",
  "key32": "2ntS4dKGznyRn8FRYpEqX6Dz8Par7x9KsJA2Ws7WM3Zt69nF1j3WhYiUEDw4ez8nKT8SJJ4HsU2pH9A2vpQ8EF7n",
  "key33": "4uVu1ZkJCfK79YC8X4GTge7YXzJB9JVYvniXCk5jFbk9ZdDtTVdXR2DeX9qppXebcnf3L2aUT5osRxPvANxUi779",
  "key34": "5ASpUGznzinPkPWzgmiSgxY2QyLYJWZcViNMXbj4iQTWyY8r12yD3f4Rqf1XG4JJ6pef1TLPq16RYkk57K2gWvHh",
  "key35": "2fAmL2FjD9T3zvDuWiGKjLn2f1ufmR7NYRGkg8AVN6xZeDaNx8zMhPVjkKJfXtRMBv879x9q5rJeUKyG78W3GYyi"
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
