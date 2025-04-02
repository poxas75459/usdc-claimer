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
    "65QXxfMAow9bco7oe5LjqbZLZES7ARapB992vdhFpU7GycpNHn5R3t7412UuZKz7XNNkZUoCax3o2Te7vxvvFt1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qDnaKXCusx9o4FeHY3u8AGgnRUau5888ZmKgPdT6ECWqDBwCYvX4pb9MKZgfeENtFyVPXscrgMtdvUsjqRYG2C4",
  "key1": "3AgMihjjZNuDNoS4E9ab8sSCqryNYApHB9BKAZrRP1NhhptzEcUykfpCukoAcCJ3y912aYxmbo5un6EQeJtk67gA",
  "key2": "HQrrJzdVnLRJAc9RwCSLddZJjYxBc5CakztaBVAPWgAY99zcaj16aKpNwvjqnx8pmpfhfZh2TNdZyUed3Xqr7Nj",
  "key3": "5fUW2yy3Wjg2H1s63Q8mwYkw7qPx1U8dXw2pc2EZKGGgrTaEiGENu3jrrKMxs5irxE2bE1W2Qs66oQ3YGfn6BdEv",
  "key4": "hnJw2mEQ9AstWyQaYihkEJ9K8CK7vUZoMLeQbKBYBso9JPVsb3EuCYhMa9wh9anfUoauTdHkauybFELaxPy7bhr",
  "key5": "66v6Y2cAZi84ALP8Z1mRmmK8c38gVxGKbCgjrKSeviejPrqp8r967vo5YBu2eeB1s7sgPwLvnKn5yc1evhNijen2",
  "key6": "3zaXficy7aRvCAWzY4r7niTWpGa2Y7JNWZjeG3cbvyL3eDasro5J4sZaYgYMAqyi5sqpC23nixwrdWYnwhHb3mcv",
  "key7": "3KRdGiyhHK6nq246PQsb5vncygbdZF3veMKuYBWN2e7KpX4236Ji6v8BcSjNst6x5iV4E8MY1SomZTDfZ6HT9c7p",
  "key8": "MndfuteAjixAk13ESaUyh9wJEAv5Vh4zsxPNstEQQ1tbXotXQUNNzigZ9XP7tJue13kxMaHiwT2thcSopFTsnbG",
  "key9": "2QJKuZmXFob6bLVFqzED3twmx36SDw1tYxKFQMCCHdM8CRq6MeCqEeyRp7LRXk3Rfe5cRhZ3mt8f7CQn5C3XyVga",
  "key10": "2J4nziwaDVwQoEC7RpWQ9zJuHLoTj3WbEmHd2kXcTbVHzYZaQiHsMeJkySS7X6vNDNLttUqnJFXj2wxULHr2eNsv",
  "key11": "463AiT3DQ4cj4FXap3hydJyxEGC41sMCp2bPrnamThB3b4t4YvsyFs1pREfdeZNsEadmUsVzcMRMNr1VwKHNPc2Z",
  "key12": "3s91xzPMGVULPH7cpMxRRn2GHFhi7stWudubKp7AmqzEGc9TRXsWRvot8V6Hrh48c43fDZyiYvoFUmzDCRJvPxtx",
  "key13": "5WkuRmdkVQnwGa2a3MFbU8xtUT3qLNTzMJKYet5KVik1LZPcESUnqHEqWMX3B23uCqdqiR7m4mju4b3EghbQhMj1",
  "key14": "5NgM96DGvBbmyzz5ygeddqB7WHfaeLppUAssuTgoNm7d4yM1VxJQu8ZDJPL4muhmUE7QHBYXH7R3ByQLG625N1C7",
  "key15": "5ZB6mDRS5DXd1ps3ZZWb8JcpAibvH6YGRu9hNCzhCKuf2T8F4YgWqitHiPCqVg3UyY2P2jdT7LCXaqFVXY8QHiQ3",
  "key16": "2jEoHHHbJ4LYMY2JcyRq7VH73sAAjgcmxFtZ4QEVvn6fp8MewFPhhuEGhZeaSpMt3fiRyxKgXvESh2TX6YFenKEM",
  "key17": "2tKyuSzWPpVPm2SC9uHR9YdCR7iQo1aMM8CRrY3rwRFnH31p7GoF3A6mBJDEhJrs6hSgfBuq8fDDe7o4MZ2MeFnr",
  "key18": "5qAnFXp1gbuqRsS1Hh6jRZWgWf5qhgJj9eBXWYVycfjiK8bpkVHJuawDobuAvqL8ga5gjGRafi9n7X8mGgtQrYvP",
  "key19": "3vdAnHMs4G1qowo94hUE76WyGC552zSn2ixsV3CoodX1CdYCZGsWw6ggcTgaW1EBQeUGk4SZMsUjbyFkPqbdTemN",
  "key20": "57NJjoyCoM18nJxf8cyeqwx1oERu9W5Q6SY6Rng23MGSJANdBfUWvpEztQ41xW6cHpo8jd2JgHK8vwfzqLGVMrVE",
  "key21": "4gk8nEERhA31r3Y5kRdt5dqZoGPoe9v1QYfjo6nMyMP3atQLZfZBmpr5WDDQyLKHAJvGDP8LWHUUAJQLDFu1SjnB",
  "key22": "84dtuQzVBdvkwTGkLu6AtrbiRccX8q3rV9YzUh7Bg9XVFqYGeanAX3SztK9296Bd5PcM9eSdkQLLnNv36weK4EW",
  "key23": "4qT2nW4SmY6U4xHqDeXUWwEPxNBbEV825YwjoMHXqUeB7medUEgUd7BKdZwEtWMmgzZEzwaZTYVQyM8tKePnwEhu",
  "key24": "4iAqAScmeUFv6GnG5iXp8XeEiGDHcHduCLkrdkw4sz3xwTJSTbUHkQQ8puvc5gTCwvRmtR4zZn3ZeWZZME73qrP3"
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
