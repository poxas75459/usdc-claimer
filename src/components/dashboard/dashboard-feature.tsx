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
    "5W8YiskD3s8R6qgogSjt1XnFmqAHi44Cd8Njkp6JPa4YZ3wqNFHchZpYWGWbCQGMPsgSD2VNGBQNyuBaFhgUee7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EappNM6byo3vMb1qdA2tk3gyuKCZF7XzTcYrev33WMWDsL7SHkmJCLbj1AL9kSDn7BbM8y9vP7gqVSFC8CyeV8Q",
  "key1": "5WbfsMhy4m6YBaVabBzaWHtz2HF9qmaNeY9Jwr1XbBYk2M9ekWpLTRBsL64HH4S9TeKjR4QH3GmEEuvHX8Z5dTyC",
  "key2": "2nU38SEvYvodLLXB7Sz786s77CzjeozMsWJSKjj3sMZZ32RxjqeG9WvPhoCsbBF4QUB8mto4UqKV4phkPequZTpR",
  "key3": "4NmPesV1rNPoXEpFBpeHAqxKYMfRH1kq6vuGN1Z3ATzKsz96gx9AK8z2w2AULXs1ysgw9MHPJ5s5SmswsZaCdg3S",
  "key4": "y9DnT1sg8CicCKPC6GdBqhHax9Gc6CZeE529gKbV6z4Z4s7zuBwQnD4ofoQiURAbVzzz7WecsCARLeJicLVJz14",
  "key5": "4NWPTycjuSXcsY61iWh1gRJ4d8bCWynDPd4RvFsGL8jfiXxvEaLpfqsno3ajWdasU7uYtBEmAaTHsBsvVdHti65K",
  "key6": "437bYmPzDeBGJWSbZNYgSgFpXYu33BM54rYYKw9D6HwykiqSbD47vHfsLTfwSCN16FgqtD6CNPpghaq2oyRMpkbU",
  "key7": "3uVp9KsXqTfYLSsmiyoYTda1PpVqEkJM5hGU8K5xC9ibU3H6csoiFH6VxC3GzTwwsWgEVPvTe7VRtXfkcKttXs9n",
  "key8": "22gBDh11yRETFzYciStZk8A45YTnxfKJdpXEtyuxtZcPVpA8EEh7a6fbvCqXwQFnJpi3o9C3iDsgGwccsQVS2FDB",
  "key9": "57t3tYxm43v8YywScwXG3Lbsoho2CQ659eAaeakvLv2qYYtE7vS84tunVgTwx8g1kbUCci5ooZesXvebBmzuLQMZ",
  "key10": "5dcwKRui3HW7rC5cG9pSSoS4MfhN662Fgjkkf4ijvCZvgzYYK7hikXx3ckGHdcgMf4oLGf3rJhtDGsK4QY1yuyRS",
  "key11": "59t5H2i8QhnbwLqBH8K6ZMRtqsSqTCctW5dCFGRzYfGNNgN1WJQeRTP6ZW9VM67CH8UpuNY2PSSFiaLF31qxN1EJ",
  "key12": "6qLtLBneytrQMra9MSZpvEe9sWPZze8YoWEMpL8bvx1SKj2Hkom46sRBGYUQycorNXwb9ksBsFaKt8AxSF6WVTx",
  "key13": "2jXvRhLFCNPHJRriif6CfkpEfDWqThedGX1srWRpyXAPk4LrQJufLCyTqa5tW87KGnobcNFNnuxyPejPNDnS1i2p",
  "key14": "26Z41pWnzZjWZ5MVXZgFsxUGc4MNa21eqWY2wNymhmoCHcCdDr1ESbSF3UyF7JxpNjq44KSCqWBG3xANNwCY2NME",
  "key15": "4KjC1JexfEK4o4wX9GjHHv2HfuBaS2KG7J5KyCDrGe4NQ9zsZ5KGMSobC49Z5jptFc38k9J28VvpeZukCJaTmmj2",
  "key16": "3GDh2BhosdBFotLKCXysLGzEhEBTZDcBpBL49n6ZuAUT1dMfVPDWE6EvDFSezLinFNv7BCH2gtbNNAEdrzS7Mhh3",
  "key17": "3266EDG43qju4pHS5prRs51NtBFgPYGT8tpmZ9JvvzCvz3TXdZ8aoC6KtL7grFyuEkE2zWg4RbFraaHfXm9iVej3",
  "key18": "4dYmfWyqeFxLessFN9kUvrEL1nb2qFRcmzjZdWnCj9X7YuM8FG3zcWUJPMRHkHM64PGhBqdLvogWAxZQsuQZWxvd",
  "key19": "4tFfNyAoqp2tfUmdb6f5vwVXEAhndLRVESrFzf2P7yMj16n7qGBLYM6HKBnSugM78AZrk2WmRTdz7ovapGgp2EGA",
  "key20": "3CKs5LKfPCySU6VYg71ik4PpZwir5RvHbG6rHr7hrg9T9ThU6gV8QcCmTAyKukYu5Vr2oB4GjG3JxGV8KzY7QjZE",
  "key21": "ULBp5WkrGZ3NAUEvn6uxqQz83NnCxbF6VxG7YwqH2fPSxho445Ws7pvXabVpmhzn6f3E6Z9ThRK72c83EA1tUvA",
  "key22": "CCyibJRStuFfHjcNXjGcyspifJ57ntutVSZ2yhytrUYsrZHUyJxd5K6AQNHP3CZzFJqrV3VaHzCn2azKd7sYK8v",
  "key23": "5e3bzXhruj7JqyTqo2XmDRq6NJfkALy5whoUEv8bzAErkMyd1R2364GnwNZgJ6fATATDELcxHQ6pT6cd64RCTjZm",
  "key24": "2eydGotfi5umwSjkKzZqvt4wn5hUNyKZjbcdoVi26HJXgyfhqgRFLA1uN6eKZvThuSc1xQUkNbBQGu4z78RMRKPt",
  "key25": "2j2AkFwhMFvY9ZW2AjcqeLL6TdaGYx8c4JgHtLsSdPi6fKN6HBjuU29nLgzwEXX6r4dZz8iu2VjWM1Kkfct4sZdm",
  "key26": "5Zkxk7cVrm8j9A3roZ6hxZ11ozWEsV9QfKg6LDtm8heFoBus1FkhAzY7ENpZRkFSrGpV3tbpDnNR3ETSyAYvScXu",
  "key27": "NYmAmickznpV3E2gtT5Q9wAd1iPNh6GxvyzfbvSSX5uMvGfLg6Uf1yVr7jR38geo2oBQkt2Mc1JKF58ZNBgYRgG",
  "key28": "4GdZZCDAeqR5em4JAMbRUHvxUkKEVFutqrPYE2WX44nZ4r5udRhX8k255RLjZ8U44ZkFxUJLDLxB4iqGUs73ooBo",
  "key29": "fxW8cUFMT2Ab8kaZqbhxkcvh98vJ27Q28jNVpTY6BLpUGH43yozyUSk3LdXKfWcqhGtwMRKeqDMXfjc1RaoE1Bp",
  "key30": "4ZBwdMA3B6g1gzmCH4ZsyEt5eEyKBeRzBGPvgoFgzwgn6rFANGnSDUKBPSqFVyDcp1VbiRHVWuZdrP5RHLSXPxpz",
  "key31": "28K23Hmbkc7EPi1B2KdMVH6y2Fr529ZymEuagYa6Fk28SWasYPB4brGnWsRAY2DYU5c4RCQnNHxyfa45LG77YiC1"
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
