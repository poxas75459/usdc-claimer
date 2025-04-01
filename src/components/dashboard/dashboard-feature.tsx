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
    "2kzSh5DtZmMdYY4BpAU7GDLG9rsUWCjrG7zSviU3V3sErhMKg6nvyDRDtoeWPnUnEGDAbHkdELUn9mWJYBnwVmba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A1LjCdnsFCmdKPpnXZujxogRK1Hudpq6zgw8rEePPPzcq3AB3DHcQFTPCgnV3ZBgxiaHduwuMSasUpSGbaM61Ai",
  "key1": "2UhjuRL1j57pZKsrKLcvRAK9BkstyPKrsKMsdKSTHhs9HScjJCK8By7qvVoVckHoBRnFKKJpWodm2jZkZxeqSn34",
  "key2": "45cGcFUcX45jA539jiceA7zidhpKj6jVTEH56RSbWCGtRKDQk8HRCFa7sqoyAXtDi3zLN46H7vS4q34sFYfEE76G",
  "key3": "4yTbmnudC6uBwDfAtYTBjYt6F7DGi2QwnqpCbc89jf34zhnFKwWgy8reijJTFQiUQ8SoajN8oSu4RyzN7x3Kzsrz",
  "key4": "5zv8hF9k1ZoG2JBTdRjTkXVFJibGBJKLmGekQYZwpB9Fkiqjz3zhjgiayh7KKCBw7DTPnVPhXV5E83EngZBoMMmR",
  "key5": "2YPw2UZg9ACLwBfE3fUN4qnQJ7yc998i5JSUuCsXmqmchF8HvwVU2rLpBqGaRz7w7jpKAF18WmzH9jUfqo7J8VaC",
  "key6": "3ujhnpRuF2d86dCPgampQiN1SUoeaN4oEgnV9cLF9HyyyqpBWnvMPRzRBUt6ZGgdxGqyGoedNyn7hXLXE5ueoAcr",
  "key7": "3cEKDtajdKEJsHFo8oSU778Z1jYEHEDgoBpistfAmntouj18uy4UnBZTt1YfnN7DBy6Vk9zy73jKJyUwfGqjcvnW",
  "key8": "2nBPD5UCg7h3kq6kBtVc1p94MciiSHGzjbatbcJBKJEUkoy6FNMrA52hz745BuvPjQBexhVVdpDT7iHaU4sBGmpG",
  "key9": "aEqvqW1KPERCToeTv8LiaFboWDhyFrd3biJyX2ZhEvfAz38ZCqt8Rd4WVB6FYUGCpeFjXvzGqUBevPf2Ln4LCuZ",
  "key10": "47c3CgJ19G8VioV5PuTr5WK4aSqC4LUdyoVV2yxNtyYLfcwzHecUF3Hscr6GeBbLA6oPyhA2Dqu3HUVPZZyn9jsk",
  "key11": "49omg8wtMASLsTTPQmv1L7oRbmEgNkRMf4KorCbzi8AxYVg4EmLCrpKGEDR1eMMqCETZ6EDDKQWecMEr2PrB4W7N",
  "key12": "3aiQZSjrcpzsVQHRJ4qXJo2FS85LhHwjwz7oygzxL2QfbUhuX8Wzu21zU3aSaaCQp6wBoMEyDULg3aWUeGLgKej9",
  "key13": "3if1jYKMbQ2DHmdEAMWRFkGH7SKgMRygQgwKQKaPiCiyKrRPznR2p9JVtBPn4da6E1fg57n6ekvk5UAEvbyKj88N",
  "key14": "4NU1AohTnf3H9g56hFDkBhpAh8mU1wP6oHoL6DRbcswcW7kGhV49rf4GUyab8yAfeG4pzZ9DRCNRu7y63vpNofut",
  "key15": "39TRvBH8JEdZ8dr1hZwK5wFq8fpnCTijZJF34oFSzFNby9K6FQZfFUcK5Su5sVueVi5u7PWm8njZYcvEfW7mjjR3",
  "key16": "5gae63cdjXbdYDmr8b8tuS5fwpCWnbXWq98rFyFVZKQ7ya2R93r18o3D5kaXSbs6XKhVskaWffMSMALVS5Nvrzaw",
  "key17": "4chiNDvKbaw2AnXRwqrNqX1HtBdNNScrQ6SQvD5ETWF4PLeqfhT7px8vCmBCtXfTtVB7j1YBf2qV1sZJYUvK8jRW",
  "key18": "42ezWB8Ew58fQDCrkozppQQaKtZEjr5DdDotBs2crbH8LFWUkED4WUj4sWthxZDYyFpZSNUQvJhrt1L8e67HNc1u",
  "key19": "2BTBqZgzhPsG69fvDYWhVFYvq2djGZsyspFcyJSWsJe75sKebSgqxb7wH7qBFrGvhfdEyNsjLSWfum5M6GkvsVZp",
  "key20": "3BBJ8XjrPYM3A345RjnCCziriEoUMhPKpfoZWPP1BDrAVFq7AKfavW7sfaLUBzdZ64Kqd3t6NRnv53UxQwCujJSa",
  "key21": "4UHT7WE7TN8N4viu5FbDdn4jfaKR9vBgBjQxgK8VTd2qVa2ZktKcPSiVk9gdJQnu83qTFJgXmDC7gUC3fzr8qo7F",
  "key22": "4A6tRbyFpj1MKZrdgPtGoVeXKxG4fLigEQQCKZctswfb4ZRJfZNnLMKyvpuimBcjvC4ZczbXkoRw8tWNn72fmJ9e",
  "key23": "5N9wEHRtW5hU6ko9VtHZAKmoEtwYNkJraD3ZEK96Ftax7j5NT5ATwmiYHkPPzRNDbKNWiatYaNWiGn5Fh7DK6F2u",
  "key24": "4LfzRdniWdQfvcEPAU7x4U6FruBg49Zo1So21sUY6hxKGqhRb1KimreJoPrCdEV7Mu8YNz1kSyew73KYohLzibFo",
  "key25": "3Fc6mqkAQa3kc4nfSeo1zhCtvqGyPvF11T86aKoNkgS5uaJpssUXCy7LwE2TdPNNoBGJaZ3jEFHZMBomEVGpk51P",
  "key26": "4KJ4Fnr41TpXXN3DitpaT18KkMyBoWVNvgRWGwA9JEJxoeH2xJ4Gp9UAfRU9Fp8Xo2icMvoQy3ezK5M5CWPKkmKJ",
  "key27": "3fuVHU5KF15JbNcPfckU5UfELQFeHRwWiF3hKbyCNgL9LCMrdK4AbbGNQxvNYY6kbGc9ZbmVLH1t3UPoqL6aqFo5",
  "key28": "3dZEujY1Pph1bFqhazs89Sk3SDvKHjNfpbKvidSX2Bm3Jt8CnYyXHbWiSopk7cA1HqCdrpxWEV67bXFQNrHoLGj9",
  "key29": "yYPoCwDwTfwG4x8citZjwbrmAGZ6k3YJ3j26GDytWnYCxsvDZbER4jdUyfvvTBR4FGnJSGWtoQ3arR3brBs7PNL",
  "key30": "2Q8k2641RzYi4TmB5gds9W7DyU1K2znpyj7KQktd2YX6NNVuFVit5RqjP61CLbdUzUKs2AJAV5DZqD5ESJv4QtbL",
  "key31": "Yk1N2gvYaReTwCGzPGi4kXW3L4U4aETHNz166AjnJWbb8a5nBbRprdpsQ8H1cya7QTQbE8aPt8BsjaKKVkWyzn9",
  "key32": "3nFBh3EJyzqZhBacsXpxNXr3TETUznZ9xwxETDE6nk9NCjdkt5gbDNbbSHWTRuDYoDdFgFpN689wzEAasnPhS4uo",
  "key33": "386JCisgvC1XsUKcawyrR8yb6i9LQAoGhutwLnGWjtCijbUgvgBjc5inQWBfnHnKvBLPnQQW4mPzKYECjgLYzdww"
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
