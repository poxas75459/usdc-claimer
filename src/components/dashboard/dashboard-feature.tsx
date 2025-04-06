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
    "hJRCXdDfGi1yiqj8v3RYqp1WiKSkQwfGn6H74sNHbj25Sk438FcwFyRQXosZosrkFXGkxhqFC55gXqFzUG6BjJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ThYnkrn1tAekdZPhhziAGhgL8q9WGaXCFcKeTDsN9GXjZpDG5hFBuuh3oYi2FLsxq7fxhMtjxXbyHgtmDtMy1v",
  "key1": "3rDUJkb8WewWSw4Ds9RdvmaLr2bnRKKe3uAPbRexf97Ee7uoRcQLvgny3WBHPSj4Gm6odgpAVrnjry2kWZJ9Lx1T",
  "key2": "66hcJ5oapqsYJK1UBFiLPyCJeUaTdYqxbwSAR7Q1UGGgbtf7BeUsenBeGFJh8cXKNE79r1tg5PgDLErPnngzz4Lt",
  "key3": "4ibb9fZwtPbhyhT5vd6bEh7wsYYR3vrjAgYjCYEzNV847WZgQyLy3i9Uf8D8f1wh3e7Cvk9bBXhmRBr9n1caxtKr",
  "key4": "5KuPqSJoZoWxb2hQLnPVxE8gasr4JcrTHfcBKLtGmfZtHnHrTs92v2DP1SFbgfn3CQjNE2pYMBxJRLfR4G7sVaun",
  "key5": "8pDjfFw4XMiNZHNXpW7X77mMhDfitUT67cfnKETGxGZQMmXM7Wttr1YeoqnCAfmr8SdEq3WuPfqfrhUfLUViFLm",
  "key6": "ZDZoD1cH9VmWVTPGZQv1qq9dSpKQccw8NWV5fiSWyStNhsaRLPWRyUQre1VVGH1pA98S2TYe7MiU4WLfVb1EwwS",
  "key7": "5hA2NSiavpAEcMC17NC1GmeeKUdYg9EwLcbpMyijT5hdmnuTdM6qFNuMdRKGjrBU7xwfRbmAeTnd16m93UJM9rFQ",
  "key8": "qBVyr9pKWtEy8aqLVfSzdfe27GBSn2EGCZ4JbEtrRMa64w3GD38zPfRbvVp71sbw1jVoQ3tanEvzL3B3U5gDrXX",
  "key9": "inhAwkNkahuNwmxMiXK5QNTCBiXPHh3W4VMeMB9QBZaUFpLTiUqtZEaK5FixZuBm1D5RrLZHPPuq1vNwzQq8gY2",
  "key10": "AkZKLnf3CpAw4ZwGYtmz9vaRefKfm6A2fRFW27LnFg3WAVshhRxwNPTq4BFe7d9Xa6TYQJ8vpwvfkpmEFjuUGjL",
  "key11": "29YV3xYQkVToenRhBgmHynJGesrD3bC9n3umoCrPL1WxLdK468av6SSQGRkG5H35Tdu6Z3YEk1tQrpVrgCaPqMn5",
  "key12": "53HHdkyBTEanTW88VJ4uuw5Qto2XLV4USUP43bfRwMtZ2Qyq6exqYjA1Xg8RcWkWZNqREVzDcokUz9q1ZvDYeUJJ",
  "key13": "4iigvvYxk9nCrzzik63JJKcQTvnt36WPjXDSdmc5WYfikC8p4C7J1KWb8xqGq81CMrVSVKFHASZnnCsX8NdqKXti",
  "key14": "33pQeKd4xtKMs6dgWCQpyjtAZUha5zaDfakMdT29y5VTUDCeJLvDssLHi2kdbkMpijLAkpLgRxqSnxTmdowqYZMC",
  "key15": "64XhkWtFMWJySJ8PGL46Xx2eU6DUB9Msj6Xf4hpbY4ogyePQdVNvS6kbncBbnXmWW78MyikXigfsRT6JcXwZ2hq5",
  "key16": "3hFFvvzmZ7t3gAawbzUkZdXoHm3bWRbHXoHJz6qYaDJzGXtJ7LVF4odNxAqwUkdveL69fPkSybGPyY1iV3ByTHJA",
  "key17": "3iq6x5vrbPmWsCijyN5xLvyfUiH4NjC3aMSVmG7YYmmkMmsnpoZoL9Hyv6WqyDLzf9SjyLGXnxnwVAzYtNX1hzHA",
  "key18": "5PfrMSjhMLXpWLQg3Ft9ovmaVEwWcWUwxMmtqoWRoNA1SRQ155tYBBuvPvRjMcrKDa2CYdohJWrPNq3kR7GWHwLz",
  "key19": "64rntXcGyTiUYyWxtP4CiU8v4Hq5kmLC2qL42uuKZJSbMcHbjqHpS6vuSgN7uFxcgTRwF2qm6Legg23BpwKZW9H9",
  "key20": "3sKC13ZP2tsxUvP9RBEmtyqF2sznpjSbBqf9mRLmZm3rRM3K5rWksXCHvnE1FzRf1xj1dP1yVaRXKhkDq7rC5sUi",
  "key21": "4kBLcPiSVrWeuhS46aFLaEz5GstH3JFJfdcU5j1XwvvKrY3oqn7CwacSYbGeJRSi3GHZjXBDGwFUrNgw7FwuEaNN",
  "key22": "3SHy1Vrgt19kLFnHh8fcxUP3otjHWS8uMXgEwWCs7rhUZqc11t3vvpknbYocb3FivJgd7VhEQic5GmAYvfHF2hgH",
  "key23": "4kv7Kg3fQiZTYgUbFpUUv9BDGCotWZWf4ekyxLHiNttY7489WWUmPEVvGGBjT7S2C8eQktd2ikT1rQnyyp1ZHxLu",
  "key24": "H7UkyXS5m2DnkwTLcrX8PfwPQoCDPVn8bPL3WqNGmy6HgM7MDdyPLz2wvGY2Y4xxj4HQt3T1C5XpN4hvZfvtMgx",
  "key25": "591RTKLvR4htu2ZFkkYv2hSgMvsjjBKVsTpCWRsJSA4kqk9d9L7WzQmNWdQz6yBx9nLrb2dX1chCRDaedp3je79i"
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
