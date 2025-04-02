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
    "2pdpAAphsoHtawvqny8DeM7sX3N19LJUW3nWrufdXC7SGsSHGYzx7KxF4SQXCBfjGafPqyf1Yf9rdWvqbe5CQphU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S7fLdC7B12pbBaw5U7Gr8BrVWXQhTrb2fLBCXNqimN5zSdYPXhotWqpEcuhjEXyqtB3xk3aR5fciqoFtBWugMi6",
  "key1": "4bbgtepkmvJ5eUybdp2ujZAtb7X9BArnEnKeCyrF9zTPTw2QHLWwqszP2S9LrPbANsC2thygyQzDfwS1W9vhr2p9",
  "key2": "4ufbC3vwP2htp4xF9x3MHo9aZ4UXCAP3V6SQzdBZysbZC3DvWQ343nw6BWSUdWiYAK8GKe7euuJQ5gS35coHSnyG",
  "key3": "253SHjuBV5UWivmnsFZTVfVUfUZQSDyZYdy66FJZnHaheC7NNqrgiryqkuuHFKs5Fg3MvsqkAAMXxzvJVEfKFLyv",
  "key4": "5tZsQMZo58y4g47Nkv8uj8LqAGbvZ7LPa1Z6D6p4jUg86VT4mqXFQP8A88HaiFtrsVseybjpd9oDmQtRf8k4iTM8",
  "key5": "3snrmFXUZmyt3dEnRESJdYBSYS4f1PCr5Zq5cweNCA1fE6fhrwiGHPkmRUbpGriq2WtGjHTh1HrX6FuePZN3Kci3",
  "key6": "5TtwW59rdB6bL9CN8WvbcCdthcBjdxEX2HzJzDHkTDSQHA4khF8tJTyJ4nhYWEoyRJfB6Fax4fyqvNQ7aH9KdkNS",
  "key7": "5nxPXphQ4N1J2mhSn8QpPPsq3qzEA6zghioC2LsyePu1xNfUMaxp9V2jfmbLtYYTvaAz6hZmgAvoKHoxKHcQjEfF",
  "key8": "2u6cg9rhhSRpsa5w67TSBHEmpiaiZCKQSiQmLVPsb18mxQpNgCNGMUwWW6CBPix5GLgvAZUNvwQY4T3CvMtwUYC1",
  "key9": "2JjYxbKyTKzrhM7nbAiT8nDTSGtsX9B5bfpt8bjUb6SAThAWqmzujUUxBgkyaBJk1KhDtFCJgtMcMvTbVJ8qLeSP",
  "key10": "5hb5TNAJbX3fiyFdSJZtbBsb7vAGB8o5CHuzNQgEgRhzhjK1jGKmpcDLLqskaCyKi3hQn211rLwwvzkeeLP4A9ZS",
  "key11": "Rx81b15eSQdJF4GasfvE9qf2u99RLCdR8WVyvHMRoCsxnftDh32VsikyLH3Xq4SRph8wNPb43ba31iNvYwbB4Qa",
  "key12": "3yyhS5V1ML8eVjFJKe1ZVamPqBohN1bQXha75qvpgCYZjGSYeXeUMBcAFfYxLiCADki4r5HiySVfh6G4WtaFsTSx",
  "key13": "2Si9oi1nassWS8cVLzD7X62PZCNKowRr6BjdkbTFGsYvqM7YXeYZ9mCVBBPnuTVcz4T6WX8Ba3ose1TYE9c6Dwe3",
  "key14": "4Kn18PLa5sM9PAumwkprtGTgqx5qk5mSCdA43naUfSE4uCvus1aaELLBhtJBakPhqxqwu79vXxwQVZFovUiCe8BY",
  "key15": "495G8g4N2m1VFRE2Sdw1c8CJVmTpoFsHASiNbpHGmUhrQaFUgdsQHyBNF5f92ktevJ16supKBQCAzq6oXJteEDHW",
  "key16": "3wErfvCkBtUuXvASRARLRiAgCFEjtZxcdzj63mArBqS8X46ZuzFjq3QSbGVJiexDy3XPDiPKb6EumH75thXfnHoJ",
  "key17": "5oDwT4WcDjL1kxaaeCpunJ4RF4FHAo5HW2QN7jeNHrtL54FnEXtDhFTA8z89ntpYY6AEsWkxfQHGijYnW7TBPAdx",
  "key18": "3nj28HTW14QM1jgELwffkrZ16DFALW8ZYToBNC5UmoYe7SppWkzv6fdYbhVBVZ2YWfUuNaarndHpLN76VzcNDZt4",
  "key19": "kQSBaWsAM2RsXMxCwm6SakXfHgsCuKDPqXrvi4mqiPmcd97t2j8xfVHWFwYaLnxjbjadBVJsxifFS3g6TqWK8RD",
  "key20": "3MiABqELNrW1S8Ey15VD6xKj495rQabkUp3WkpkiQZj2wpsZgiWpgAjGsfFf7U9QU5g5X8s6jouKfqYfeGdHzaMx",
  "key21": "41PFheGtw3vxRD78d9XnP3yba5xLER2sCyvkJrR9rXnCAcaStTFdfwGusZD1Sb1FsU7AjPxFjwosc4bAYY6YTr7k",
  "key22": "mDc1Uyd9TDQtPxvV2A1P4UYzZtTcm9wu9DE9jYgCyZxPVAEq19jqRacrCHUa6FU1sru1aFNozmfJwgkCPRbZe92",
  "key23": "H988McwK3uFB7P7pKtCVzLrGvFvYpL993X11v8NrrWpfs12zB5z3FKm9oASLXG3YrRkJBGxHhn4upkVKPxetU8H",
  "key24": "3eeu29ptiKfrh6zqSx2bgt1dHJZssvYs2ri5tiw8BRMDZNuKCjBgNMqbt8xYoxsFCEstH4TysD5xF3LDjEbyzkP",
  "key25": "48oarCWX4tEsgRbEQkkzkiD2RyAGQ2DaM1ptDUC6iUy8cHfFHtQRnGtwnAAAS7wQUXzDHahUEe8G31CKjYaHVTUY",
  "key26": "4kWvvSk3EHA6PjH2LD7hh78CBtD6HAtohy3CFhZ4xmorxsV41aLsPWVBm8uiQtPRtWjuN8bJNrtyKQKUEEh8jspG",
  "key27": "JecrXJTQK2x49rNVzWh2JFoohrRFsNFEuC4fErB33N24sbRndbQteryoqcksCyDDU75vQsBxoooLCbeT7wvQ37t",
  "key28": "3KJmMLwZxvhQXRQCLeJiVMsiokmJTd5jKWrSXuNFPgSQsjMXU2NzwBXweAvwuqiXd5S1g136fCGEGwQMTxJ2Ba9F",
  "key29": "3ZWsjq3iFwJhY8oJyxwZR5M85qj6YRhp5UB8Hjm5RjMJmBDX6HkX1cAsRCheoAXJpmHsncgN5whL9XBWCg8MqrR6",
  "key30": "5FiCEcj3bEaVkXn4V4NYMh9CXGnQQHnFXAJBn9g2yNJZ6DmyvXsYMzMWD4kK4GkpG7t9MFHDX47TQJVXHRbfEG4a",
  "key31": "dAggamnRd54ygbg6drYHP62iUXFg3Se45bcfeBCHUXnhE8wfw7gJRuR2eL7dHjwpMFvGM5M7y4dPQwD51Qsijdm",
  "key32": "ze6uBHsM7pvtVqLQaJ9zChsqqvjMzQ8EPrvzmFNmURz1GNR2CeGFsyDmmwA8dKtXZvBcZMHVReTiBCkuhK8swPy",
  "key33": "3PGjo6pU1RkAwj2LBHFmVjorRinxAuMTh615Fj2P9bowyPwsHmDRF4a4MHckFELDzEgpo1dmPyBTHRctfMCdgDib",
  "key34": "3K7WBJVf6rEWAPteWvznnHeZMid6QNcgqut627uv5gKwy3XfNfUCJxYEuFAyc7LHCuXXD3ns5UWT1zqcBACFJwjq",
  "key35": "2UJ9WVjmsBXmwi9XnvkdBFgTUYjFjVMMss6d8aPDYJrtSBoei6i9LWhP6izeSwcmwyVcEqirezhnpZto1EJqtLpN"
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
