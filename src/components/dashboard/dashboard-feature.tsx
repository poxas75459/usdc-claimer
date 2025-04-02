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
    "5V7GKDsf2tGh4ghRTgtXeBwmDTxYzv6yUyRNM5X84m8ipqhjMxVc4LDEjNjmX6m4QyzKcfbVhtWFtZ2EoaDKQN6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CBiq2nvkhsdUSGopVTLcWTXxPozH4XAfw7rNvfzQiWiXDdgH3JTFq2CdoC5VQkJi6RDDSn9UWK7zKhxfJLTZokQ",
  "key1": "5y7Qzw8K6DE5aaLG36QayoCoqnuGrSRKNhwLws25SQZAgZMVj6nquoaVHqbKU19VjLXL7Q1TWNeNh49iusdUgPyn",
  "key2": "3nEiDHuGiKConsXFN9nD6Jwpx3gFdtmpWQPCzaixdMXecnvGZXKSPBTMNLtwDMp1JAprmxLthfdeNbKkzLUGWSFx",
  "key3": "uyZhusvJiWmHJc264TXV41gNqL5vE2TMT9dNFqVtUypscG2kZZN8HqEd3Fxz2K9ebbeVuYEkWSyM1tJdywqnbtW",
  "key4": "5X11SvtYRGd3tikziRJu1JmUZFRKF6wcJ4GeHtaGDYVWUgrwwiRZsSQJ81GEzpazp1tC52us7T7bvjQtAGxJkQ2x",
  "key5": "3zcdV931wQ35ewhQFTEjELGHvctNygbDZFh7gmEeN6RUZtzLaDBwKyyreXgQNVi2D5E8ZKBHb8NrGpzxsn7VPNxw",
  "key6": "4TbbVVH7NH3EnDeJVkiu7bMn6VpBoR6THDaYuQPtaY31T89wFQJSZAyTZquU5mWBMkJxTnw2tqcxDtScG8N1B2VS",
  "key7": "3HS2TWzb9mCVpkrX93ACPSmXHDQJJcAZQGakZmZdLNbvJbBMJfg7q884nR2tuukGAQiVvoQKNUwWb6xrLGjzzL3R",
  "key8": "4D4pnZLJ2C6BbayUWMKKqyi9kM4z7QGup5Lo5TWVxpw7mgkZ1FssmdJBf2GTLwNWhP9yYYCSstxQS4rzkXA3NBrW",
  "key9": "2juFCJqMTQJTmCAv4SLxULgPCgM8gMKKt5G8xSggqW9sSadLGkeU73inNmzCuLdbosWfCPnR4Trj6D36K1BEVZSn",
  "key10": "5J1kSDGwG9qcxRBycmV6PEV83mPgdzoRGEMPPpWHMayiHiF74DmCi57LfLr7oEtgMP3p49SG96gn6FGGxDaM2H7H",
  "key11": "3DKDFjn7tQxNJhgoZ9XyBpzs2DNAznYnGEh8QoazidZpZjKbaQXRufN7F2RuP1YgX5AagySqwSLiaKvaBQnP4fRL",
  "key12": "2W4CfEejWxQfwmwHJ973odZTH83D3x8Ui8ZAGjmydSyEU3yH9Ab288pNYzJrSrAWFXayhdxQ2xZ6RQfyFCz7dRqG",
  "key13": "28ePSjKGwUbGUb4NVp29fmgN2QNA5F5wP17AVGrdM2GnvRVckqP2thkNyf7anNtxUEQtobXL4wmzsuuSwpRfKzgT",
  "key14": "5hu2Tt7wFTKRDZDdt6Ye6KDkSmo3QhuS7cMDpCmsbMtQ9yXA9s6Uh6E5RhZTcV2R25n2CFGMKWeqjUscASEiuCUX",
  "key15": "3fb1U62SHm9qrc54SFtDF8QJA7bnTPuqNRRjq29JAMTwNem4jtCzRWVUCyTHnbCjaYW5MZLxchW5AAuTNpjgAmcE",
  "key16": "3o4hFERN6urQQNr6RLMkqn2k3YnzrXVdw3LGwTgaGD13mrWniq6qHikq6GDZta6VnLpfbtBs14E57x585TtNXPia",
  "key17": "3BmL9fv1euKVYhp9T1TJBbxc7iNyi849ykc8qjC2xt2nHPgPLjsgYXWK3A1Gh11WJpZJe5QFEhns99dwF3W1w6Sm",
  "key18": "5UmxkLu5QrSETz9LhLJXpfAv8i6kYtFCs9Q2BuFWZosNuj5tPeMFXqLKxNDeqFVyXGvUNFKFwFRzssdUXoxV35Zv",
  "key19": "5jCxnL1FGcVw5VYEgABCYNeyYgbSSyNZ9fVnjqBMrbLCZua8XfdHg2u6P465idp2LHQKpsTeheJ69ydnsVxQRQX6",
  "key20": "cHyXnkRqhjtF9et3xvep4EwkK8Ts6YVMyShGoMGEPczwK91Fca8agyGD6UKuRFqwtHS4NqRaurdoWg7Nt1wEDh9",
  "key21": "5kWqwHJAzyf26cRsN6fbuqKmsmmZ1wvfb7wgmz3R2aBf67LD5CEg86amokwJK8AcZw5pAjCcNz7QTzov6tuSQHwi",
  "key22": "3RmhrjEincy93R5xAaGprGGSmDviJo6y5MkQSNFcKPVLBPDKDGdoZnfFQHtm2yYAVkoqabJvFFtmhSf5oPZbd5Z7",
  "key23": "24aYwjc3f3nHZUSnVrkj58VYDtA6DiQ5NrGzbTa236ij7PsCjN9d1LJ32fK9ByxcuGp8QMKvQ5muhE3rBrgsZSwM",
  "key24": "26F1ugiwVmLiaL9MsGZhw2neviavLxV87CaoRXb8H9uvaz7NFut1835xsm2cAt3erY9RvYrLs6Lxzx48JNh9HiS6",
  "key25": "sXCJcYVmoz3WFUUFtw1pn5s6N54tnZB6jnLaWYTxkSp2b4VmzjvYt9EwevvieZuRB5Kc6aMnzhvXverWK4UDxT7",
  "key26": "2XGJTZQnZh8FpasGEt6yAgmXc4WGUxwPTggADbidgRzVxkBkcSqFDX8Y6CSYaZRjSrcChv155rBLYtBoyvpYbwsP",
  "key27": "3dqGUZuJNJoiqBhqL9iQBC1kgXapPsBZ58737cz6ommgLbPq1KS7QFFqAx5T5YaRHs9EXveUiBZ6VAAbhL6gDE6C"
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
