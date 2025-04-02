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
    "3ky4agcMRbmgmiFXfD2PYLS6NwySn6SiMzZHYD5cRcT2wntNWHpT7xa412d2HSbJmX7pCgQN6Cki364HkRmjouDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43kwr1ronBM1VWTGkXuPuCrEyJo9yTz74xbXbvT9Cfx4ucUwQ6HFnbtU1KHjzCaeyTM24edqg8QNrrfW3NTqHaw7",
  "key1": "557waTeMGjmCAEyGWYxWg728ZMaLpx9JWjniYoYwVgjJd13GDHDuKite8enYGh7sBWbKQFoeXRnJ8ExZJznjpTwH",
  "key2": "4MkjVRRKRGECyerf4rP7SQikSbnEqyDbVsrLtm6rcD8GJYSU4Kcs1Nj4dWJvHpQidpFJdbQZppSxUVZbfk9HJSeq",
  "key3": "2cUn3BERBgrx1tqMW7D9ApWrGuNeEENZfKPjJZawk8zvtPCQEVuKmWsuAXkeErFjLBBXkqyLyNmefqNp4Q37wF5a",
  "key4": "38sW6HENtRPHjKwnEx4daLdSugTg6vL8Ub5fwhztBG3ez49Zpm43YMWSoKzo55QB2Xzea8b78bF9gGGMojaQPdLp",
  "key5": "TjjQHBgJQQaZ9fF4CFDqnm8LWSSyr3JqP6MzHao85FY2PkSzVaQ1fk5Gjyz7g98ss6x7Xux9srXn8NbUZD1vvUH",
  "key6": "4PQpup5WpBoE2FvkVxvPrrfZJcdgpZtnXbJJwPGmkMyQhF8CEuAiQhNPbbMHy37nYk7g3cBLD2eGvASyc1hbNYDW",
  "key7": "3hoSqLLTtHZugsdGk78S5LV3sJgFoxhPLuKmhxaLTrETKEk6yJFiXbUYth8Ur9d9WQ4ugzoTYCKAKw7SbvyX2FP8",
  "key8": "GAj87jTPjQQSfdpwJAsebioHTXJcLrdeGS1bF26soDQovWQNou9fFBnJ2oCsTsBB1DNqXQAJDeA8Q4SiAJobTbA",
  "key9": "2SGCA3GuUPFqKJ7uBrUuFGybEWrLBbd4zQdCSWx7gpv7ePvgPMs8b9VwMeR5K5SS818gPWajju7w4WJS1phVhLnx",
  "key10": "34rWRiuhZ71fDr3kMJ89oJ4H5udsZSQLMDzqYgKfpDJ1FNQLLi7NVHfvPSBSxJVBoCm3WYiBSH3PgJKLCF4W9ZtH",
  "key11": "5U3TveWAroEWYfu6xmDUqQxDhM6vVsK3Az1GyZjLwGRGWwA3M6gTbu7sN8KckBU7sAzo5cEDuUGc682JvwZxpRTU",
  "key12": "4NyMknaTVnhsX322e4J4uFptzoL4XdR3kJPS8FPLH2Rs6nPSL9h2nS43pGGwYPLDY82QMNT7StnStqYsqqhsfxBa",
  "key13": "39xK4Uh5wZMMMq4DPF2qZ7Ch9HfCWVeSeDjSjRMkU6EvNdZmEnakP9qKM9dFpcmir7YUDmFuLCCMsYUDCKVY8xa",
  "key14": "25oE2hXmog5DGYpkMk19gP5fUEriVHxHXMV4Brdo7SGEjYKf49NRpV527HxZthWVBHeAHz3UBZvnsAKSw1uASkNo",
  "key15": "4Q3JsM5fJKhh6eZeSoqMxZm97zH3oaFPKE9NkDUowTZo3sTKdqikuuYrfwrS9S9GDbfg7KQEGNeySYzM5uggPizF",
  "key16": "SWNinr5WA9fi4ceZBg1263dKeqWkpcywCsgRjU9saP1SmLpYDc9Qghvj5T5kGoJcJGHaTqXQRQhTKnLYvA92pTG",
  "key17": "3udET2PWRE4VtJYt6zHbbHTBeKEriCr8rYG4imBMEVQ1woGkUkHpaNCP5DmGQCeDA7yTFfHxdBKjLmxPxdD8ZbBn",
  "key18": "QWMmSTqEqBaan5rYmmaxPyCypffqHtoUiRjoh7Ger2rx5RLvaP8wPtnpgwWD6Pw4GQj22qqzn6hrpaxmJay1q5y",
  "key19": "Wn2Uq1Hp57cjkbWgam1WPmvwAUkLZp8R8dBSYZx1fGbsFaQZFFWzKhTn5ihDB5554t6NspB515Z21UaCT4QTCUc",
  "key20": "SwnBmqA44ckuAPLsLoogA8Ro77x7sugUvBzoRgLZ6rUy8UjNv6nHnoUajiM4HiXrCA2cPu2Z45agQQNAUdC3oWv",
  "key21": "4WZ6CGYTBNRaeymRgtUhdeVgLzrLZpNST3L3N378Dq6KWSSvWLuLZ8dSLmfVA8nSXJ6q3DML2UyB2WUPF4MhPYZW",
  "key22": "64vGMjPHnzcDNWEH55apxgcMyMuaokGD5i7thSRxmWriDo6qjqBFbcP5Q8omAhsPKAG6XKB3rAKhr1ogEvs2vX4P",
  "key23": "5HH9XUuDXzdSHyGVdXDcnSxvYBkh9iFGvgmUtrYLoajRnVCHWu6dzs6PnkdbXNaMmdzAaynPqChhzbAHQNHS3Hx5",
  "key24": "EVs1UqUiWJMqJAMvq84HRG2fbcAwFaTLFg7CwLERsTPN9jAevKUNvreNvzfcBLE2UajeUUysRCUyqhxijwPVSM9",
  "key25": "2UdtWCez1hYWbcvsBP7oidMt25rdUYmHoenyNj8HzGkS17aZynxgf1qZEjSXEqUGhXMkbAB7RfARiiFYf7YzMjFm",
  "key26": "EoW9Wab2CR4TGbdD29jRAzfkM7wgw9AniCmizgrkLRDfna8qG4yVskogTji7ohgTVK19XkMhFWPsSeffqqz7o4L"
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
