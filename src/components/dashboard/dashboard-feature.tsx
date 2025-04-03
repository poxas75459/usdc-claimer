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
    "5xUBKmrNV2R9qEAu6kniZSgwVwESBWBDmHfaCtJSDhEH37gMy6Ex49CJ57boajdQ21zoDRd6udWakn1PVyNCwdcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dy1UNGR1Yr314tbR5myMhQ8Xf4yy9ndBkm97Www5VAaqu5tkS7JrP8FiKLkqLTVpU437S9Emwfxmt3RpVyY9th4",
  "key1": "4JL9HSDVbBzxvRpLREvncdLnDrkmgvBgiw6PuwRKny6jpdzWshcBZ5tWkZLPAy4b6iWvTeifJd9P67osYT3fNPzm",
  "key2": "3hW3d4v7Dtbs6v98hQktVvBMHy8yXoaZBCCPdkmcY9MTxZf2ttpKtbkN6shebXsYamyjaLzgFaTedLkGjs94vQFu",
  "key3": "56AB2h3u4Pp7jovW8YvwnoHnz8g43vtk4bTRvo4YRFZy8aVjMxwSEtY5ymhGQKxtwTZgcPSbab9u6KxJ52HuUvbo",
  "key4": "2uEcYsgwTqEg7tNAJcBFqkkMa6sMnchu26nDep5Pyg7UrH7MpVL5HHt1RSKDiNMryi4k8gAnavzyy9VteNvkTLWW",
  "key5": "4wai98nT8shpSSp5nLbetMdLvUVY3f8m2aKF2Gj8W2ruw7VQUZtqSxpExGQhDoS6TPbs11H7CqKkNXmYU4Q6ThEN",
  "key6": "613XNFUYsai9pUCUAi9KPBghURoUFnBz42RvGWyLiNL3VjVpLeK4eEBGtemDbvvqMihHQtDPb1KoPzF9p8hZ8i93",
  "key7": "3Q74jTx5yuydNb9EPDDafJrppfve9RCE9jLv2Vrd9hKtuJvTp1i4JNy5wgrFWn38ZKAYfkw2Hjrtx1DAXnY6vVpM",
  "key8": "5XBqPhFKkuLGAA3e6MNjEKEwaZZnkjxg1dWigop4Q5HSmMpfW6Zjt2ncae2gPKVbpM9bgdRmtikRstZzPVuXZHyX",
  "key9": "28AQtdjuZr9o1u9xYJDK3XvCsYS3XnPRopeaAGDj42BUwEMTmWr3FmQ1R1bDewbWHSMVDi6jTJ85UfPfvwNbtMBb",
  "key10": "2ZPvJpN5BSh5x1UbG5JPer9SQWGm1vPTzwrHEXygLctTe3Z6N3EqN5zxZ7hNzkV5PSjGdodkGQQn7iAgcjW1LWU4",
  "key11": "3d2h8EvnZTwpfhVdoU52V4GwnpyJkf41GTjxZpjvz2S6RjkJowgcTcyPi64rck5GcGALrN6LSxMouN1y89vMJicy",
  "key12": "3zHi8AoFgysKZRx8JLWBt7EwBbpMeb5RNiwENZkDY86ZAFTQp3kEQ9dHz3483vdeLV8UcjA5u2ByJaLWRG1ELUcH",
  "key13": "4MWeyxtLwiJgmngKAS3kDmevjU2PJoRdZmjzqEcXCGp9q97f74wHxS1nMoAPhFXBQMGZvBnRQXq3Ts1YC1hFKnrX",
  "key14": "4Tb8tHMWRFtrRuTF1QLtoNzpJctD2avz2GYTuKAavvojKUZH1Sgfz4ChyNoN99EHKXB3nNBTgHjyd6GdFVcCNs5d",
  "key15": "51eSF4ie14FQ1Efne65mQMfz8wkzUeMY3PzUsvkUrJhuWovFCbRMQR8QfEdMjt8c4BoVEhcX1oc1PuMXg3S4Koi8",
  "key16": "9XaMAuT1zLsCGgUgH6E971ZJQhD97AbuucnFiwDj1aPB3mGxcvm3EnsDYy1DLBTkfiS2zwiak3t2vm67wBDuUpS",
  "key17": "4QsY35vNtAue9mk3P8vuCXA6NEzU1NUWFqF4gXFYwDDFgj6S2KsqUMqkGQqPCrn5CAQUaTy4zg6qNFWgqZ1iWefz",
  "key18": "4SJTE4NUcTAX41YR27gcDtMmk96RUwKDzSnXRZZCbBnhLoyKtLDM6dtykhMVnbcoJxNkQY7cXiDzZXyLru6qVRCp",
  "key19": "3gYhUqgeeFrd8JDP7o9huLMRUXs3NN32Q3LjNTbmJMHYjiQQamKRWgX1san89p4V5r9inT9DsnGo24NsxTehErF3",
  "key20": "2rzwb7D58FZe7x7T7JswP3FmKCUojb5aud9n5xTJR3HBWW7gLnBiUE94RRagFbCJW3a8hqWPsK6zVpzG8Zpyn5qe",
  "key21": "3ZVj8Rm2ciJyB56kEPmTuL1DYwWT24giuREggFX1kLTxqzk6Mf93uAojGZvVhsH778UzgRfB7QVNdeLQ9bwP7D1K",
  "key22": "5wASG3mgMvMzthnrCwjFCxzZFiok2qFoBpzj7TUcC5okAq1x2VA1KpHDJTNCpU6Lcs3hBYhSF9GfkNFJddPE8rLb",
  "key23": "2WPNBdeXXQjaDKXwEmQUDzqYaH57XQmpoLRDAETUsCHGDt8pZQc4rjaoaPBy8TXjFtXNUK69Q6YtxtS7wm5r5yze",
  "key24": "2frEajvW7kwoXK1aEV6XKiRm1xJnxtJechU77bJVvd1f8b4VDc5k9d7m6zmm9onde8WD9onLzveacCNbGgNmEufN"
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
