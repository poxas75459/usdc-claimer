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
    "3snorvNthL43UP4iqa15Rdh9xnysXW9YDybGhdkiYQgHg1eK6xfs1VAmZw1TLvqwXuEXhbziPdKDySPsJ8tUpSK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y218ZSxVGuKxexzaUT7NcFy375B4J3bPm138DQH7mUYa6d9Nnb941ZS4NEFNbLNT1sH6G6DEbj6CgAC8cbNAeED",
  "key1": "3m5LWejEaFBi8teukJfiX3Ft7Bn6rnU58QcNjmxnbJZ1nuMP1EPK6odkB6iBkBU9nFsnZBiSd1nkjrHqyjHAtAey",
  "key2": "3YRq8vuoqVzxbExrW4aduWyJj8QJwb117SCBSJX5fuxvyus2YqESjD784iE85Fdm3J9GCm87eNnoGaQXi14V7Rju",
  "key3": "1snocXekU2zsRJsqzZZBVrEZTnBa2sXfaswfQqK7Ej8QpvJiY7pEQ5M76UFzL5t2drHbfns3K2oxamgKA2RhTtQ",
  "key4": "3qVNJxb7WDecNuE6ZF52D9ZZ9KbWStAY4EwbMdjXNaMmC59ygaDPnjdKm17UJjyEL9mvQW4faQNTHH1XjN4VVm6b",
  "key5": "5U5x5KgqefM49gJbe2a5eFuM2mtcFKAoTwck66Sc6MwXCGunJzWnFhHrX3L9QCJBN67fGUmvArjv5ovy2EDcff8S",
  "key6": "5DtcdSKS8biU3Fz1oNTumWBBpR6LtHtmWJWbCH9WsCC6ky5Yy93GNVosLkNDnofA5aWFY9HoqaHtQ3cmqtEPQQ3Z",
  "key7": "2RWYdcK6edkHnUxXb3UpNaFPPy83wR3Z1DrX2D47Rv93c7rZqr9tZRgZKjLwxkvMLQC8i9jC7muFCYcw2j5H2Ftv",
  "key8": "8ap744n7e3vqB1trASUzDMdXoXiqbGu5NBVR6iz1TvuwVJmkeoKEJ1GtgFgDNYLnyTCs9A3LrXVN9wBxuhTUxU2",
  "key9": "2CFNvX74YQC6BZi4e2gwbHx5a6KWEzFbZDLB8xVKF846vvHLtMYNssPkpVanfEmTEUnEP5JwtfXJxBvdtwwywswp",
  "key10": "2d5LPMWSn87LtyBkQz5mavzUELitrcHDuTRdwZCqcCsc6L6i42kRq99VW41ncHVzvECB4ETdWWSUTBnLtGGBZnLF",
  "key11": "4FbDsHBXN3SFJgxB1RFz3jr2YiPpESywKuTpu6uQjVzz6G92gReDkT5sZARgnCkWwdiHkw17YdnWfAip3PNqvcas",
  "key12": "YDFi5niAdERJ8qXtcY3uc8xbbEmxTgvNWZ5Gp9AhbqoTorHGvJQZXS49ZBoBMLbu5YQp5guiLCEZetPACVRpbPH",
  "key13": "2cXwXMqSqccjjLi8NCe3y5hFdcbNk6ce8xSPJcZBqorMJE1kisVm17ZWjDnRG8i51KzabsXKzNVeN1z3VFspWx1M",
  "key14": "3AkUtnG7gXokShsW4miHLFRSZf1Wakg823p7UCeXMqzSnY4UimzZuS6vugFNTkbnAuMCXxT4DEsUQMUM8FSJkGCB",
  "key15": "3njvzn1UScFnvKUAAGbP7wzotEGd8c5LoE4n1rBEY73RMHxVjdwQ9uUSbStQgdMJQ6e9ZXfghfWCuWX3rJXxc5gk",
  "key16": "4yyMToM4rLVGpg1y536UFZQvauZiHRijbQnrQr4GGWmGC7FKtjdd6dEy1ZygqPTzaTWcFT82tCPSabYvp4FPmKYb",
  "key17": "46ocK98HjuTXV31u6CC1L9odLBF8QHNe5N2BVask9kCxtPvtDhd6fSLEYVxAq3stAv7JcBjQ7Qrm2DCoERhAzGXX",
  "key18": "3XnK6ZL8vN357KYYBB7T3BNGcZPipGdbmiXJSB85voAcNcQaLzyBsbGHTjrHHfq8UobK3cFZyRL1cudjDwLVYHoe",
  "key19": "634XVyiqqVV3mCPYcQzYQBQx7EFwu1W7fPV9Q6dxRS8cLp9GfTkPwh68MHM3kBnAqwfjaVgFApNDiV4GAb7FBWPn",
  "key20": "2F1pXhcGk9z45iCq9NBbRQoPCRDHAEPo4MQdSUxb2gawTu7YWr6wXWu3KWccD9PgMEq1N8rwtGRGmRtiksv6DvbN",
  "key21": "4A5NfntewB6VEmEyLDDtouhS7D2juDr1mhu35Drkwxu3WYWL7Ts4NKPeKxh9mZ6k6Yqeof73sb8EYDDo29FcHR9Q",
  "key22": "37WK4JkZCLDm1NhUKKz1Vat6sASF7WaVsmAPNGkDioioHHPn5268w4hk21XFYDZNVgWVZRsarKhAbcsajw7VDL6g",
  "key23": "4QNp88C2HkPFUWDJHG6ctga8t6S4W3aQSYtqbczg3ZVYz7ivsVx7NYDzNLG7JPWFCZgtHgr6nHRHkHiznKxEd2FD",
  "key24": "3kaXauRwzhT6dPxZYMi8b5WSGqMxxKXB8tt5YbBfHxCyJdYPx792naAjXsh6sjs7KVRoVcm4xrjfthTJdLjB8yyd",
  "key25": "4HFkLgk8Dhq96ur83k549LPqou5XLx7FW2RQBBFxYQuzBYSERfiYBetJWKYViX9CWWLVFepbZLfJ8h8Z9AYG3XTZ",
  "key26": "2Cu2LSyf5DT7qEvWP4L9gyVdruYrQwxiTXtF6berDVHGfwCy9vf9SFEpUxXksqhsMcVjGM4RJUmRBFWonhcCKpqq"
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
