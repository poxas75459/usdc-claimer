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
    "2hap6s8iyFyFRRDSAoLZwd7WZTYpHMmYWG3cDBAkYkF53moehzG3axAgRWkay6xZnW321Apbfw4k9PQYTEuSTxRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MxxTLx7oau9f4fWAmvyR7BVb2BprB7XqhenyaSPTr7u4JCK3TTK3cWR9vzWLvibA4sYPp7hRwTf3oUDfzD94aCR",
  "key1": "4XgkrcD5HCQEbeiHc9Pf3nvq35AV7xFQdnwKXrZhM3WkUwowEtvsYmeH3WE6L7vtkqZd9rmjUN3hANgPwZijhFGn",
  "key2": "4Mc8MqAVFktF83esaK1qGnA4X7bjj7GaHGqxC9iiwf7214Utypn1VNRCyRLvPdZaP3AQCs94zP1GXWjxbRNHsAAc",
  "key3": "4H1PMsYSsV39FdM9Nt4kb8vLfVMVrNz3kVY9e9bJBTe3msd36s2phEoBrNPFz9HQKYQLneWTbFutiS4zgE361FBm",
  "key4": "3ttkWTmbHx5Afv82JvXH6qHtswyBMGyohFd3LqtnjEQtEgXmtfJ4SmCrb7buRXmjf9Yyxxi7DQwzwNZo88AQAwaF",
  "key5": "3qETCoaLHJ9qDffezMBep5qomn15kJDoSjpazTeNjX8j4XZDxcZh99Qoo5MW9G5qVfsNVHE666vanJnpSNpyW3wP",
  "key6": "4yNyJ3WqzuEsszBHR7S65RSU8gNgS6CtamMrmbiQuS4XqLys9sJx8xJpdDG5suuoL27PBRbyKW6QzqdfdCDXtjf5",
  "key7": "4s3R8LcAt3Ab1wZgewsGUo1fByzXDNdaZoe6cLw4ck2QYH2BnosrqrwrEd1A7beUaLRZsmw913dLxTgy1mGGci6s",
  "key8": "i3SxyvzaJ9SJF6V3AmGhD1LNDpyCh3u7zwLSN4mWH29NF7D13cyoPDhKE2GtQcrWki4oHqZmCmB2ysFRGbryk75",
  "key9": "2Xw8isNZC56DCJRKn3MzhT4fQUh5V61JJQVEyHqbhCMqXsB1cfwFdGZds1Cg4eQvfToGr9fdhm1qeF62tsyFLP3D",
  "key10": "3FjMhagVtBV4fu4omNwJGVDPt4VSqbGHhzGGuC17WHX344PekSn3tn34CjRMzGm19Z4GvAVC9LDRy8bVEEpwmMar",
  "key11": "iFV7YeEkWyAHEnAgNuY52KEJKZuuTibgWMsqbdbhhMhEmCGadu6eYohCaYiP2u4zYgUTsCDcdKBp1mfhUTRA6AF",
  "key12": "2LV5Vxk7uieyi4VjXEcLb9atPfDMrk6J7v8Mz9edEgzcDzGK3EA6eis7aVbk47bBJ8YkPKqJmygmKQMwf4EZZHbt",
  "key13": "3WQ9m6HRi6GkPxQ6i84VRhx6MLWtZD1RUaogZd5eX3CGv23JtzLu5g9Qi8qpaAFHz5gp2G3QoRj8FZn6C8jkYmL9",
  "key14": "y7ntGifADXyyFXPojDKScMT1K5HXsVBSxWPtALsurBss6QRhusphedAjc5QG5djV55fPNdc7LWebPUozKnEQz1D",
  "key15": "cLHQy2ChKJXCSLUy4XiPJ4cPKBJVjWAcWDfWiMxCmajk1MM7zYRXwLVnyjSHCLydFiFRmBL9AUiTcVYc2eub1y5",
  "key16": "3v9GDw6JpAQYK8NJ6HxAJBKvRNGuRBLEyMaJCubRxYfag4DuVtkyGXGqrpjEfzeRsFHNpMDEMzuZM3wf7CU1KLHX",
  "key17": "2hkoaLXT8M8HieNnfbyQBtXXoYeGeJihGHLUYq6qQQLCxFHegGxdFsYfPWbfk9Qy4KEyk91BxfN4iUwuLute8rtx",
  "key18": "3gUz2cGaBpmoXVPzYLRcTNVffHVtx5qYa7M3BeEjgpCMLN3uEPnWnEfacxjqvEnnM8Va5VZRTBxgL1Kwoi2ufyi6",
  "key19": "5G13XAJdzCs1wniMV31tU6c7BDoe5LFXeXedAif8iV9ymqaniCQ49jaqMs1nixzYuefDGEvj8TcMQaNAjhitrVWm",
  "key20": "Aukvx6QmHYdcRWkd7MSSQH2CMw59CqLZry8W1B7bxmaqenGktKvG6QZwVYzyb1Kh64AZzzyM5GbqSrCoL5AtiEr",
  "key21": "4E2JQqgPeawFqsJCLjEZELmn4AiMjmVm3SLnUsNpkAUHfHUmboh4S8GDoUqHijTuwiPoATnefhRkU6w2aJu1RmdG",
  "key22": "3TWZpVaRBQT8mjGXHxnQuY7stqf2qrA1FXScBeRJHDqjNDeWDjShEdjtu3bPw5J6tjTRG8B9uPLVzkJd4spjJx4e",
  "key23": "3yqu4drtywSgCR8SQgaMDqmXzjYqMquSNiTXjc1eCHasYNZ65ogVVdxhprvtSmP2z4tbgShCohQSPt4JHP7NwAw5",
  "key24": "4qabVZDmuJP5ppFsDTseB1Gt4sL2gjGsGCJPT2CAG9ToEBDw4JvChUzAQjuGMG18kr47p4QmYwcUPizMBj7Hy8He",
  "key25": "3vND91UvfA3MEdv8kJtCTh8SFku6tiGNgGKtcXCngUawRpPxyPX2oxDpphreWwSn7afCj8b6fmwZcJrNBwth4i8w",
  "key26": "5nsEeRDBy6wnHTAxXbxBsFVG5x6SoQxc5VRKZBg1HTBc2WHdeQP6ZdFRyoC4jkS2G7FZHo3fqopxBc68X3Xn31UV",
  "key27": "4FujG1szSXQ9fP6SCqCDrB7GbWbV8G9Wvhdb6fUYFtSf2WrPp8nD6duu8GZnAXZw4U6coxG7CfUbnp8AfNixtPCz",
  "key28": "3jeuzq4M3Amb4rv4HH4FnCAxnGTfz46oH4s9uzw2q4mDccxof1XUoYPHBd6V9ST7yCr4tpTvnjSsKqzjR8sXSkGj",
  "key29": "49QsSXBuvFaV5K2HaBEu7Cpz5nu3AY2dismVmCwBFaKejXDv3mcX41pvrrZY6H73wrsnt6yc66MuTRfAB4LSYV4D",
  "key30": "2QoUDESmXNxrW9tdpAdi9sma7LAnuxtKebe7mrjCHkYHBb7T1jbVkXPcu9pxXdamC1XrMatZgeCo5AUd3sS5Gumg",
  "key31": "UKcP3RAvdK4SfrabUYvqfWyq2bLmL31C695agiQTnVKmPqw7HcLdEAV57iJ67zRMcrncCSszj4zTg7aGGWqHaDP",
  "key32": "8K7cgP5tfTC9vEWzoDrLN8Y5XBYWnagCz2FwWdniN1NnrBwxgPSK7EGUjogGzuT3Kjq6SLQxXixPMCdvsQL4mMs",
  "key33": "5AC6DmeqoP6Bep1sAP57XhzL9sShiCaNicPBoFLULKzCa9ojryVzQTGqyfYDEGTQsPDRwcqkrhKjRWVciF5VTQax",
  "key34": "5a2kRyiFbvEYhi9XyXsqDFqyrrJbbDZoBbcYVydTYmG6hJ9gNpbk4pzjtKcFjfu4W9U6fTkMbc3AsJ9J1qBU3Wz1",
  "key35": "JY6F21uTUupVXpJHsdTpt131NKTLowqXCAAScwW84JFEtsufL6Xr3Fwebi8xpih7SJcB8C1Xhs1GVLH3G3CnFWr",
  "key36": "2QSH3Wqfe3sbAL5xud4xc1eC3KWKsJ1abK3bbtA6rJzVachMLMQXB8nxJNpx2iozZzhJnMVLgajhqrLWQnuPo8qD",
  "key37": "51oGwtUcu6Fgc7ftMhT5o9H6hBjP688USo6xjSji64PLP4UGy75j6tVBeTh9Ru5RuUw4RLhehJkaqR7zQ9ohYjFt",
  "key38": "w4XWoN2NP3eqWa24dzDwVNvgmYu7PvGGTZcjCKMiPWt1X8PZNzk4FW3zVowg2VnsouitxYcR4Ln31XTfw3LuAoM",
  "key39": "44dGF75ZKbnzvRobRp5pu9yfX9n4gfqqExqb5bF8Ubudbv8HYahVDLPJS7sPCLsXGz3AeRb6sWwXPWvM6WXVtdHo"
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
