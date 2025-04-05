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
    "perpJppLELWRcHcv6fLN8cKmajVVnBvs6oPK8TVaDKDqGBz6ZvNotAnuSCCB1Rkb3t9vDHXUEP1UTemcFk6UC6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wuBUW2oqmZpFEeB5iGnVrhNFmefiF8cbbQdQ1RGuuYSQ98VHfHqDHCqadnXanwMiQU13aJiF5LajSGvuaupAmyG",
  "key1": "5FcfGjqpE64y2SeP5hHxfhQajdaYpWNYsjcQBdMxHvKBV3ESN9wzjZiDNEvK1mcAkLfXAZmyJTLsyrPt2UjVFrvy",
  "key2": "CrdVojbzX4bFUh4pgsa3fZwUL2k6Tix1YDxMjho79GV5aKZ8RDNQjUDb9ukMa7uTRjmNxTSwKa7mMoUQqCYB66P",
  "key3": "34mXZ7MPHATo8cd3fNgnehMvQSmrTKRjpzFRrFC3FYJVK5EZvXPyLLYqLusZKnp62ohcvdV4foszkp7EhwrhY2Zv",
  "key4": "36PCp6V8aj1iAGPNjL8NcYLeouY7eMjpVyh3R6TXYgsWJtoipio29XCthjqamycFUnrgk7je4e8rtDCatLPxKcZm",
  "key5": "43VShrjs4CXNYD61E2e91syNdC8FnxubpeppasEBn9TiV3aCRJioFXEA9enD1uuUEuoLyAzsqZwL2SYKARJFD2te",
  "key6": "3iyFYYXQbXZ6oeS1RFxL8kNRFTShjPwoyz4rL63gc8899RuWq1b7MctdASoSuxYniKqMVbfZ8b2cGnF1B3GDjFCY",
  "key7": "2tDLZ7jehQaFu7Wmbw6WyXBGU9hVxk6eje5gBkUQBPBv54PpYDCpEBcKEdC2Etxp8wB1SaGq8ag2v7gtdxzvjknX",
  "key8": "3AUxBqSwenVEcpa93CSpe9ErcRvGzQXMDZzoZM5NLnUTRCLjiMYFiGW8kuanB4vq9gCxkjwiowJpE8NKvjZWvkpb",
  "key9": "3Ce3Ly9g3keyQuZTz8ohp3wtr8vFnJjdntKf3XtnG8cEjHSQmx9fgVgTGHjekmXyywwbXN6UjhTweRTyJEWrgvRb",
  "key10": "56QFjxp5Ha8w5frwgSpDy3eox8VzAXY7SXRWSBG3wyDyxZWnGzSdWwAxc4vB8JiMQxdvrHNUj9ca5ZpzqZiERoSC",
  "key11": "2sMc2rmfyFhNqQEC99zPjnPhZj92xQG4M7jCazJgNYzDETXoN7Hh6NEc2n5nNx9B6P73z3fQzW8zhsJQP4C971uw",
  "key12": "2LukLGgHxowqWaHtzGVs5j41HMxTacYSXgbcidJxTPm6uxHEuU24cnzKKYmaH3PDTcyi3JHe7Tapdtb9tFh6JvJM",
  "key13": "43gm4DedgXVGGMmkN4Lc9o46xaTjVEkzZgBdL9rCv5TkFC3rV6z1jpYhJM3R2gaYrogNe6jURCtW8Bk1K4bBnNEE",
  "key14": "b2qKQfxtwBECfur1HD2hAX8cngLaxNLr4mzVQLpXsPeYAH3T6fHH3umqT8pRZYNPqC7vJ4UAeqpP3PM3okk2msU",
  "key15": "4kWvSSwc9RD36B84JM1w1EnpJHxZsyRKwTDYtyFP462bQN4tGPHti1PPHCUSRqrVjNrzRrHB7hhyHsFNTgpmBkYG",
  "key16": "3kmvuoeiZALe88JJ7qLkzwGxGr29vGa3rHfx9ht9ut29q6YTqbnaKTm8bf3iWtfEt68ZzKgFWNi35zsz5aarRtXU",
  "key17": "2FMYWcW2H5haxwvdVQUUNRSwJkWpxrPTzfuekVqkBQidNeuhSUoGTgPZgnJQWivhstWJbMhP7wdsXAxXDPiks6Aa",
  "key18": "3tB2sRscjVHFmMg9Lg6mo3qpC9K9rzN2eaAtRUvhAkeRcnaoNwfjeoDyD79NoLAawTrccELuFLLGnbkrGdjwA7HE",
  "key19": "49ufSGUGfvv7A3zXkP1e9EFQ8R4UCXYGAdhoxGsxQMA3fCCFUxjbb9tf2NtrVs5rYM3iAQAv1aZ27HKZrut7UG6M",
  "key20": "324dof69E3BCSE76eAbXfvUnu3ZD85maXbbKrYygyoJc2LFssy6aDMhg8gZkmu6X1j6gyChLdFLTw7jiZ6AiqqXp",
  "key21": "3eHyryQXNfTy5G25mazQzzSdtpHGzwtM82G9L79Vu2FuHubn2DhzUeduWJeNs7oT3HDNyueoSpYsMfwVKGoB5M2V",
  "key22": "XQZRteMkxAizRTY48hqLzvBBRKqzXrJZdm8Vd31PLE7AYStBD15RZdKHp7auEbXTF43AnU2EQtGbhczAxzKHuMj",
  "key23": "5zY3FoRtugCRRrXPDpSgJ6HarkCG9mpYHsEtuG5gRYeUATHzVwEE2g97oUjkxuZp9Lw8GLcJoKouT1WEAr9sc7cr",
  "key24": "BJZsK7GFf8NuunVGY4LoabFTidoVAEs9gdEaAEhJNTxQ3gDjZLrdsvEawcpQCw6tbfSZjnBhyL5k2CUuHnjYJTJ",
  "key25": "23iwtrzDVUjwn5MYDbBPc3rKr1VcF9Tp7ySzEKHrTUaDmFLjZQCBqcnbmkzVSXrCFjDmvk1F86Mp9p5P1h9oaLJh",
  "key26": "4S3asGvATUD5yHofn8hsh7yK9rgLJHJDs474eVW4NerLSpqTiQXKRBfNtzbDXQfjhauips2VcMfVTCw3hUuQtFiY",
  "key27": "5d9erFGBN7qBGU9jqEr8QygDMB9twJUyNhZjcZ1c6XSY8Ru5yNcmmK1C38o76EDzVXvRCTJuAgj5MiGvEiCgk6aq",
  "key28": "VwSzA7Gf5ynyJi1nnziNEPBTi37vqz85QtP7JkzS8JtE1LgHUGTsCQTo6UR9wb4ov4PLn7ngE197GAvYs93aG5h",
  "key29": "2Q9RgqPsSmB9H4LuRQEssLQj5ABREyp97TtXAuGqYqrJHszkUfRkF9YYNXH9gxmz17gTqV9594cipYvQMiRpKpH5",
  "key30": "3QxUfULLSRPeU42CukWdFDYsZWg3nTvmLBGoFCFWqyG2Kb1cXja1PAfj5BbbZxg6RmwJ8YQD7c2SH76hVC83J78z",
  "key31": "5R13xfVaB9dVfZnyAUDjpLmtCi328oFMda3VU5CUz3TSphfA9R8fsDWB8N415dW1g4S9S4EqZZBKdWtYeT8SGcta",
  "key32": "3W8rKbJU4AP4wsWoezYXQ9HmT3gRhVrLP7v1fSwxRrTtRaons9xSHfoJjtAF3PbP1qJHETg3YEF6qKNVN3sth3cH",
  "key33": "4tRHrBzsLLD65MvmDt961w7icKW3rqjm44oEwhLrUWzwdxAfKYdoY9WW4MZ3HZa1H6xpsMctgrpjuqtrA2PmGp1T",
  "key34": "2i76fWvo4nTSbKFcdhU7PyVHYNcymVesCdKmyZbhifgpYuYjGaG3eYZYHF1591mjHLqrdGctTLbiZiPGemrC2V4W",
  "key35": "39LQes5ELQeUdQxQXTkuAmxnqVgXCzzJ25UwtxmUtxnxoX8ojeNnspgMhhpbHdvmHNVr86pasBt7Ktz3vQGex7eR",
  "key36": "Hu395uvHMoN4VwoJGGpuVZ4pFqsdCrH66ehn12dHQFDUh5fqSRxhzeRXFL2sr5Rtyr8ayD4CXUDcstrejkUUudP",
  "key37": "4PuKj16HYApk5CTXN7cLvfhoKj64xjuaRz8cWHn4GmQ461nGqS9J9ttfpmqd9Ghxdcw4kaQMUGpMELH5CVELvAcv",
  "key38": "Xm3BuZ7cpfzrGog2f9ixYCtrNbgrrFoBGtRbWWcYT98v88EYwPzfEhFsQMrZTYaV615mty4qJoqQgqnQGAavbNN",
  "key39": "dHzzM7Bxf1e5bJkq4fksHfx1oDvqr2Wxjrno7BZ64FZQhB5pRMja3GbPZZdsHfZMbx3Rpc2vpidgwT7LBEwcrC3",
  "key40": "4YVWbE9x4e5TUgGUgTBRVua4eE6S5ZJmEDk2NAxU8XkeGxC26Gtw4PJAjFTEBPCfabdsVj4mJ9CZDbQ8FpvrGmPY",
  "key41": "4gCgPyjgMJDUZvpn5it73fdiGKsbLYnUEU9xX6E2p3G33gpUCBAQaWEEQw6XPZpD4zYH5USH1CjQHmiJAex31ZdU"
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
