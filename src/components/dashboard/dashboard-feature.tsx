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
    "2167vgWya4yY3WRj489MBayaHfqhXGL2SK77Hb6WHrH7zAbsLkS4DpwMnC1i8LgePcK27An8aQNeWTcGGKH5n8i3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5adL2rBCps6uCMfuH4RuhipXuqWAx4CxFvnQjAJjm5ZcBYqim1dd6Si55uwVzHgWn8hexczq5k3Y2FwSPpiKHCC4",
  "key1": "qnBuhVpnFGmi9mGy56p36ZeopbhsRChxzbmbDGkEnh9UZBCX9Hx68wZ5J1y26M6RQHRfBSxx6C3KJGGoLZB1acN",
  "key2": "2x8iFLa5pFFWqarMpK5ryLhioStAEXp2kQskXtkdwguVa74xfytMggaYfZu1sqjfcMBaVnJFibMmLs4ZVUMZ4jTp",
  "key3": "4E2o2y8rvprxasC28c5Jpj3cxXe89DE23o5Ro6Tu4tuSAFStZmtZAi7VKppWXnhiuEz7anFDtdbFDTKCdmkhKB4K",
  "key4": "2bX1nwQJDNPufZRdaCQ8CoaiuMMeGCVhg96WhQUD2oKAcxZ4AvunCLhKYcDXCj6j8T6q1djNp1hrVfM8QPU8PcyD",
  "key5": "M9msSLJQSv6BhZC9iFWy2xqDJ8qHhc8YxX4pk6LcVY9uwboigcTjzMgz7Tzb6XPXozGnR3GEdcEW6XG1kdJH212",
  "key6": "2ZGZQhYTiZ6KqMwmbK2GoZebWYMnsm16bPZ2RAz2cALM8ABFbsyFtaCPgYrrpA1ukiGN5p9PZAHB1vEMRLHBS3db",
  "key7": "3mmRgp4LoR199nde1uPzPe6xLkqUSjHTX6jzXNExGw5NPsPNLi4rc5mwJ6BMSXNPn635iP9acASnDjgUvih7mXPG",
  "key8": "L85f9N8muc32N1aWBeTQComHBkY7etByp4Z2FWXfhbNNqXLABwGT3H3WMpBZ6tTYyVgTi3bcUaidbR2opyukUc8",
  "key9": "g6CuV4ZbWRJXEtEq3aEbxrJZakPnheSCz3hj44Vd9nbFUY18CYqD8hGEJ7A6BqUoj6eAhrAbmi2N6WSchooXwzb",
  "key10": "4v8aXqEtn2uCVZDamk3GGxvQaAjcR1FU3sq1AdLgEFdVAqhZsE4tuTVgQ7La1jmVs1C6hsJRVWB7U6B1k1nTxpbp",
  "key11": "2MGys9e7LVXSmGNuFSZtDcDXHVq7krChxMANCwEQ8sxpk2qvURKGqfyPPVejy8gsnb2wAUAJohfrQtbJ1Cp3Krs8",
  "key12": "vgXMyHWryHe8tpnF14DgaBWF9cmoajESPqs974fQ6zXwGc9iMqiivrrkTUwA5Xea1mQXkmEvSz46tACPC8JTrqm",
  "key13": "4ao7A3d72DnA6jK96t7T3zZqRxfMcdECDdg5EF1GiKzD8QAP5eVueUvzxdRfPWyxrUXSg5g8xtPgdg53EFn47VR5",
  "key14": "4A5bEAJsqn62TTJAF1pA58ghpG4rGJHtwEP32VDCg2jhgFYWDEcSafPDqRuem1CvVHjcatarHABGxibffKdFTaM4",
  "key15": "5DQhMbpvvtufqPJokTuus9yX3TEqHSJq1MsU9Q6XZytGN7wnY6MsCG6pPfYWBQJPHTmLhvJE9J4rZqf8b4PWY9io",
  "key16": "3P6w5xieenzD1HVqspo8CWbY1XfQQQyR7Ve7VxFh9e9mGnfYf9aa8K8j2GfERhwEkBbhHNEDom8Mv3ocGn5v9g3A",
  "key17": "4ypGD7fxGcc3McZrYU6F2onJmSgGF9Dg39phvi2ZxHd8DqNxSaEohQ4ujZXLxRRunASdNvgL5LqdB5our8hE87pe",
  "key18": "2CtesmeTd7AkBFivrAUa6hKtPsDC58zk5cYc5gVZNdaBrhxCoGR9mXzNWHu4x4chNLmcA36aPrKNxK9HLEBqrYwP",
  "key19": "2FrqWdRiK3gDgAvC8RQkT2huEhEAVTd92EVmrR2PgsPyZjXkib2gdSRBexpeCkHCCSC2r2ekpXVtUAU435sYjfwZ",
  "key20": "4WgPoPMUEWfgrkzMbZTewq8koH7pehuhh44ss5gUPFdPoRfmq7ZDeXsVW8HZ6YVi6cdXfJE9y9urSYPSHqEqHupR",
  "key21": "5DNPQShEiGpbTD9Tuof3p2bm8Q4YJ4N8Vkojpch5KMnpypHJkoQLxNKxjZmXT9hbm2u6m6cyq9gNkr43CZQjTesH",
  "key22": "5fxcTm7QwVepBfGfL5youZt7FHULyVUyDojRf8QHBzX1iP45AYutkv6A9rmdkcisG9T6sHy8MvNvu7tN1shkSTnD",
  "key23": "uQQnKhiMbA4ugnFg9D8p3fHbRiEkdCkTDYdQvbGjJndRXrPfDnVR3U9a9poJ1jRSA88pWAUttWyhPh5rjXytBaF",
  "key24": "4kvMFMPyny1tn7Cg9AZ5BMe5fyogg1jtKzDJGuoBXyJP75NVBJB16uTixLbvdSeybzd8ZwyXnU2sA8SgVxpvG4br",
  "key25": "41LGbL2Ruq6o55EVehEVExonVjCinqDi7mNWnRBSEHxSCnx5ikzmadnbqhNay8nArf23sJZNHeFJ3sq1RLysWb7s",
  "key26": "2PH7zDRoo4XCwHGtHGhgjrchpk5A1VetJ7VCzCEZs7sATwUuABwR1fcYYEkXnDioY1j664A4BDVr1ZHk851TfEzu",
  "key27": "TP8UHQ6BYa7LZygkj7VbfCTxZW4SaCzuNNHe1nAbbGFucVnp5kSSPTBbkYiQVFjdQYLbABGnAzzcu3SDyyi6KCp",
  "key28": "5ck4WYYDo68zofPocs7q7Qd6FaFwCo48wF1bi6o1yRynxAiP3o7Tzn39fyZgzCXCVPnLS4SusYnmXdiDW7A1s6md",
  "key29": "5gYG2fDJ9jqgPvTL1zwHCjCwRP8wrW44LLXQYvPvkhq7vrnikB1XJMAwr9wCoS7bc5YZVfVTToZGRPgWhVV1jRTq",
  "key30": "23d8J1hkVK2geujifWAu7FiKKTH2vEUNqTbzMopihg4anSpN2vZsD3Shftq4NYeQaV2JyXRuzPS4tsLLpzFMMjCk",
  "key31": "2agSucZgMJXt9VXHNRRVKd6Rhg6rCgbnwhRyBbpVp2epMdXUJRoW5YtRchArE3CfTP4CUwMPaTZPvgAfvR9wNqAE",
  "key32": "17N4sia4apAGcazQAzwYK3d2RJhk2oK8k8NfqQN7GzQHHqqBue46roTkhb2dCg3Md4Yeav3ewhNPQ1Q5jqRqDqc"
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
