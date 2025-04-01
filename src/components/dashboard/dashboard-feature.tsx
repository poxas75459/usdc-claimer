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
    "44x38Caghmt9pFMbpNZ2cbW1vRAmtRk78odyNcFUqmRQ5TCh12mabuLqzzbJqEX53Q6qEJJDs8JggqUmVcyt4bF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BeN7Ba8gWiuYkbHrBbL2Y64gw3pgErs5mcGh3aN5nfLGrtWjJd7zNReY2tcJpW76EZM4PXYmcqE2tmRJC2hjW7H",
  "key1": "2oRzXyP8qZGURGrr4pnGeFu66Xz9oApWBNp6cWTRd7cWQw6GMwjXqH3yUSrSKZVjVdXFJQNrxoxTiPyyMJAyAYmL",
  "key2": "3HoHmdoiNkPpXgQZbNYrW1jApCxonwhEuitRn5Sn6pKvLfp89QsixXmxTzKgyotbp7T6tKoBDuYBKLLkDZ1gzCTp",
  "key3": "4mEFep49y1zSfd6xjsEnZn7zbPs7GPuB4ozjARbGiFUNQfdyyt2LFor8Z5bbGTZ58YrSTqqjMu2WXBdiipHNgnqL",
  "key4": "4F4W1ptKar6nxUWeDWDnwvjBs1Xd7ysxXXR5hfoQNgsqHhuS8kQ579xAkK4N8smuS1JaWy7kbhe167XZec7ZtNLK",
  "key5": "4MZKpWQNLPzp7ypgxvz2AWVbbCLBe7zhwiT54jED6NGNYYdQ4R1vM4cBRFqCi9ZDhMC5nAwVntzQerGCTU75Suz2",
  "key6": "9DbmnZ1j1QgKuTVDFA5MEXvnvK98crxujJK4ixTqKqvYuc8ibptbF7s6YkMFFrWvL1ZiWFRvEaxdnMcYHcB6Azv",
  "key7": "4N9pjjP4dbXGZbtG9EavNExAoWZa2F1iRRNFvQN8siFJ5JikmhKZt4G1EduEwBCcyRPwSDiLpK2mkEE9qkCugsk2",
  "key8": "2fmYFaNhdCfUD61MTXjVzTMKp14edBZ7aU4UM6AhzKdW8vthC27vFWfP8sQapCbXeqocvNyPzqD6RS9589j8BvAB",
  "key9": "2F4M2u3ZUe24sWcGUNwoXkRKDwX2RSZWjMsuyGLWhy7sYCuhA1SVkvn9yBy1xKsVmJfCbdfkbBmFFFNJkWV1VhdL",
  "key10": "PnDrjAYfekM61GebgeAQX5EaJoTEDyYWh9Lp57aNx78RdEZQhWzSKcfyMMkbYp2Wi5yrPgRLac4iEbsDMBVadxr",
  "key11": "fLDFjWHe5HA1kRB6zJvW89FTUMxLtAjojtoMW6aWAJ2SNgkkYkr9S6PeCFNuVxD6xFdeZL5P9yCY3piCnmncdwe",
  "key12": "3KGTiFw7ndLr9DFKCoUvcqh67bL7ZPkmLoDpHuECYiDfmg7KGJUSK9VettVL5RdgpKt1PFwwFjNPQYLPG8TMRjjE",
  "key13": "4gtEquUBJQRFFiqyE3pRWXemAcfnQTYcYJRX5o1GwS4LAowL96EJ6RWcW8i8gMwvn4iN5Av2MiDH6gNE48ZteDvd",
  "key14": "MbPZgDNtcrbkrv5FUXGdTAUZL3qTVtdQUiSQJfDHLRJaACoW7zFikkwahYN7y5JVnqZEY4zS9DGVYZTubC3qjCG",
  "key15": "39ErxuKk5UjviMFSNDB4FXHVhdQT6kYfec3Vofp9EsCYSibwJYJYpa4oVcFwkTjXAZC1JaDkwAoNAeVCwnCUw7R6",
  "key16": "64DHifQHpyX5L5PtUzUgar4kZcnpPKuTjBfZqQuSBbLEkeTiZnReQRLWYGEzQKnNAnbUceQoobw1i6UGqCzdCoGd",
  "key17": "328MFsv1vwwq2xqhjzp12Nue8hqK84ntxAQc1UbPywEkRCY2jadLo2Thm2K2TYR2CzhLPYyLPxX7un7wXjXvkwVs",
  "key18": "5WUbV4gFn8UmHrYARDiZg1nSFBeJVHmXcCg234iGwpg8GMjrJyCfdFmBv3wmbHXkwB8AXjN6jo6b6ufV7xSUi61K",
  "key19": "3cPPuAfUzTc4agoGp9CRLKphP8mo8uvvkw693XzPD2KRfha8fcwxmaSHtbqPFwuitLeuvWBVVqZrnUChFdDXSYo6",
  "key20": "NPWL7E2iRohAGwaZZ2HoJAckF1pqSMMe4dKVQMUHDkEeKe8pT7mbxxqtUerWTjG2eH1EEErkAozLpe7LYPzNJYU",
  "key21": "2tjK4qJwdVgvXq9hju9NcWrGRBVEVb1PkJ595ev4V9pi1Qx5BjJiRvn5PrLUn6h8P2Pp6aTqiuiLHam5ZAZciTab",
  "key22": "2QfFsQoZenBUN4p98CVzg2erY8sBXcMx8wsn2YU5hu6XyVindPsNUDpajjBDQ8wZgAr3gUNoe8crQSa7UDcY1Yqp",
  "key23": "34FBYKCKi4QwKX11WkwPSRzp2PdcPKpiccH5mTXi92BYCKUnf37HrcNL6RmDoDtRh4qYzUgoxxuB3MrRU8mMJ3RB",
  "key24": "4QBjuhDm85N3gkSZJnffsGGwDsHhA31ey8LPJmbFibi3pB2Kq7YyPtxkjzoJyPQ5LF6K4uyeGj7BqZ8wEMCGhdzR",
  "key25": "5mFApmkWRi2NsVYLBDHDkTSnP34kk5NEYtUnp1a8zcbFc3JS3xyFTkr8Gq4TpvdAdprGveDfYWtAH9BjjBRQUTgX",
  "key26": "2DoqyH4BRsY2NRsDZ9fULV8VEPqisgxSSWdM34tmQiFFDwiRTLzQZNz2PjvVKWTAkNFJH1qWkPxW8B46ina3UyY2",
  "key27": "5rZhGvh6p4wTX2TcC615AXgtVcK8tu4GZ6fLUN5bMm2TjeKyWm33c5vYD9QoK8s8fUxkXkmfYBGSJY2WtDa6crhZ",
  "key28": "66adxtjsw882C7t5ahLv9FWCVWDFDWb8jtt2NZcfxHZC7aew3pdBPscP86FhRzzC4RhqUHNs4bwug5cZNhcRAnFy",
  "key29": "3y5ZFTSLphtrS6LxTdaqPwbiqtjtZD1pZtgtayqhTiseQpRwHcRKQZQWntrKsNQ1JKHtU8XUQ2kwQ9mwwS1eaG3x"
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
