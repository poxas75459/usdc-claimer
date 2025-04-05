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
    "2mdGY1jFJkZA5SqEKqyemXDzXpBUMgcMXcJgTD2g3TSgK6DWkmb3kPwy4tWvuMJoPPgSDTkrdLuExtch3u4R2jnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yevhUothqGBFHDRDZdPjHx5gPdR5gAVLd5TYkManwx2DwUCzLZDwxNNfu2obDBj1QKsPs2Z6uksnLwCMUeWvwMV",
  "key1": "5BJoy8MnqfvzRbgTd1EwKLZhpmbwNMQtJr3PMZyPFtwnkK6btvpFRfvEhKmLXs4nXhxsPhNcrvadz797sP3UECq7",
  "key2": "3sQNWUMpVNUNsptSWLcVocGRa91w95CSHaCc4a6oc19Psh5VcxkociXQy4TwEhKCcyqeQPQ3Tbj9PGq3GL95JM2P",
  "key3": "67rPX8JghmZFn2uf2pNorGnNBMr8GWJ2gEi1Lma5ZUBtAJHuaF3hYxxgUyr6ZRo4cucvg4b15LfsosnvJBbDvuF3",
  "key4": "hvResGQCbVaD5Kjgw6fhKjTXxrPXbsDTRPK12WR6y2x9yJm2okzBqLunRaUfrguLzWRSeaqoYJdGpCePCFMHxsw",
  "key5": "4qr5vddc6Ukx19HhPjXPq1UsJ7JJHtuNrhwVPACUWkXX5YFhCPdSnUnNmnKzvup5bW6CNik7bUZRV3CtD88wUwtd",
  "key6": "3xXSnFfz2QFTNQZ3VRmx73KLpmYfQrFB1d16LUeJ2LYYeCDBuzYfDka4mo7MsdxAtbPNtBBdxHMzbrwVnD94AfYL",
  "key7": "FYrxwApsQVt9RpbU3Mf4k6S9B3iTEYJAdHWfS6u2QjtTgViqFgyf7iBNCrxymh7jh4rpLHCJPPvwZS8iAHh87RK",
  "key8": "Vuxw17PQYihXj3rsmZ1auwUzuwf4nZtPHKnJ3h1mkMGtg3DuiikZU5yoPAnL9uDtAQzFcr1YYU9ZXieRLyzvGjH",
  "key9": "3ie8q7saTkn2xgNYeQ6u55uUPp52YxVSmPN4hZyBfWf3xQvkxmUXHMXbNXm9djHvehWYBWxhv27c9MdNidWqzJSF",
  "key10": "dgtHbT8LFiiyT6so8fAA73naioAZFA3GxCw52tSwRXvrEwd5HYKo9pb8hXaqpAdmQHgqGn5YxSzqaascBjcME3p",
  "key11": "4FyvnHm2SYLKYc9fj7qhp9MYYteVbBHTqg14YkPirjaajFgPXYcnzKepfnK8vTHaUX2Kep78tTM2WNL1VwxXrFqk",
  "key12": "MzEfoe1pBFUCU4w6tZ8ycwPXFrDShHvWoETpL86xPhyzaYd2rQNqAx3HkQhnf2HjfjCHRWLa6qehjezUi7c1Dd6",
  "key13": "4jc4gkaviokbZMFccDUUDa5THGd1Sx9LToE9q6AcRPhNeSrkwkbauynNfgSTdZLRak1Rjxh97yFByfjXWufXdaze",
  "key14": "587u28pmJ6E9C6sWy586T7yxGHS2M8Xh4nUQVB25nGYDsNWt4xaBiPQacodVyApNy3aHHb9yePKQyqCKFxLSmwjv",
  "key15": "3oKkw9234UjhEmQxZHMJkoGdGxcbhb82BrMfVNNMqAid2qfALYg4DfiiGArAQ7cYNHyJrySdPAgQEyn3bJN54a5W",
  "key16": "5B6UfHZQttnsSeC8xR66JTzm2bJSnFf7Y7qEfXgLcUoTnhdh7dwimak2t2aJAz2P7p2Qm3KYTnsBKDhxAUmed4DX",
  "key17": "3F9JVSub2taDGDj9ccLW93oiMGoisFYb2A2sAktj9btYhzhtDJd59MLS7hf6HFMpQGVhCyGQBKjvdAZt6sRZEHpx",
  "key18": "423fg2PLs7WcJD9iTRNxRevL33AsGwEjA4FtMokit7AqWj4qyuztewT4zxFJ5s7VRs6HRvKYb3C4HckSmG1wtSin",
  "key19": "4YYxrsbwtbd3QgCqh61GeQmm2kivZAbsLb4ooFEEHeP4irFrTwbfVnsa88inCJtiai9KCJ563roRwg4ZLEgRtak4",
  "key20": "2XTPU7ii9pdrFb67LSWEgdrU7xKHSdCn48pt3dTjUqAuwbqQWtQ7dWBFmxRAr6HThrhcYc4b75xPYs9GxFjVYfwj",
  "key21": "EgCTdi9grExHzUDGyB5hbZ2CzH1XXEJLNMXJr97kpK1pJdN8MK9ecjVGXqNguGCCpLLDAduTKxSqZuq6Fzyhs8b",
  "key22": "4GRkeC9j82uz6ss9gBbh8VeGJHbJYFPb4bJmd9JPvh6sAtZBQe2UceBCE8UuEUDjsUwnw2bcen3DxX44bXZumUC3",
  "key23": "wE9ydMoUXn58tbtPsh89pNkGY1RqNnNzmoHYsX5jMVme88U2sWd9gE4cgCxTEmpGztq6FC2ki97z1k9JCyvcNAY",
  "key24": "61wURQ1zQUiHf8YTqYmg772CD2nJstvu2z5QkHTNJ8x8RyJt4EmmP88FfhJxz6PYt4bE5MAMhtKXwcngihYNXhrG"
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
