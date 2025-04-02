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
    "2QfRUekSVapnDMpHAqb8vNUEQ5Uf19sDXmX6TvZX66XCxnFPgJxTFdMYztL2VHmZPKsnc6pEqsisz4VcLWhdyZjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n6wQXcj8qUaNKBzU5XYgStG967DGBXqZB9ghwQPg2QQ8ze1yGcYahDH9jTwsUycZBP8NjHB8dm3ytEdig8WeHB5",
  "key1": "23HVfpk3mvTahtUDLWbJWAuuRu4gXpMcWssd15djuwudqogSZYNM9FG5XxHywfxG3igFrEh4BUq15ymiQWetYNJx",
  "key2": "5WBucgCFBFzGDAbis7HUdhz9VJAhanz6RfYGChbYrxAAuuwTCeVb1FG5G8nFGYWupRVsXjFEgR8Py9cbQ926kCgs",
  "key3": "3T6FpbT9RusfU5tmWjxo3DKbKNaYbmmRrn85JXqUHXZHofR1AumvsjmUpARcUTCJtxwLQa3uvxM8k6xweFaXDZAP",
  "key4": "66cRSZAZraMt9fgDLxAabwCzZ1QkZSJJ8rWkLgu67XBXK71vtqqkzCgc8eaZMTJDMDzY9gGQsha7vgURUXQXthMw",
  "key5": "5Ly5TrXn5XqiNHeENbGr2joZSLBQS5f2y1ZQndqpgjp79r5FkwNUE89JRoZH43JKER2kYm94eLxWhxpUT4GuNTsT",
  "key6": "32ABnZzmzsWhGuPqri9H3gKy9QYrFMwj8FrVTghQYK7PWaRxXF8utGw8gUHDkAVe6JrqtdEdJL2oBpaWfX4cYbMN",
  "key7": "2TYpEZetT58GfYtkY8Hrf5Hn9nST7oZcLfdHacYrDVeNDT4dskKz5R6xTcQxNjDyFqiyC2r7vWyBwke8k4bWKYjv",
  "key8": "39boeuHdJDp41B5Sz9LvksRGZhohtK6978bSc1nESjc3j9yG6TJ1d4Ph7Fgcf68pVsuF6CRw45nR33d4VyZJgFuj",
  "key9": "2SZdAP8kJvJDbhJUPFuaWjQykN4MvNkWmYjMUmsyjUepQGVC1AyAKGX8w5uxbqtzSPrp3YBXfFzvAoT8Jv9VjXvH",
  "key10": "465vHN9V6Dk6EPRMAoE94kVvt12VRHZc22ucL9o5VsjrWhHyVsjeB72NDAZVrujRfs3p8dterB7j6RWZyQwFsTqU",
  "key11": "3dZeqCqoK33DBevZZEQWg8toifH9PVRQ8ze2KN8ZZ7FHXS5D1wy43LT4w4kqdptNpPQ9MPUWeNQrASLa7Mu2dbgt",
  "key12": "5LtmztGpgfptUAEkU6Pe1iiwq767pDFZaP9wcZc5ZVpJ1UwAm44EFBztAqrVYaK55ceRuBSDBDfw7bhDGbZDSxYP",
  "key13": "5RR6PjGux8Tg3LNT2DVYApPmU5zUPs5uu8QFdTsm5VKzc6EPHHZLYJCDnnHras7ADfVA5LBBRSWSDTTTUS9Q7Jfh",
  "key14": "5HpPQRpXf2rmLxmxGhgbFep44Z97B3fufFDyTzUC1erKv6HPG7NfBgmWntiiZmGuaAcBReZEiQS1z1n4Pnetcg3w",
  "key15": "5ViJKZmjtoQTHQDNuEZM34wjvPqGbuqqnws7cGEY5JSd2t8xw53GVovjftBj5ESh4LVCHDPpUQXuAmE4TNEfXNeQ",
  "key16": "5bd9jSFuydAjcUCnPrqogixSKk28hp5FWvymsofMyJVjrNPiwZpC7PViAERw6zH4YWePL6tH6S1y9YPzJDgmMc9x",
  "key17": "5Zesc2ukdTdT5o1FmyZjrS7rvnxRBTCT4sqfawNsCfvc1wX1ZiSqSYAefnEzVGMCCRTv8pd3avuFpHxtdkps7NQW",
  "key18": "4JYbBSWZLLaH43X5cE8U36Q9i52Zy1xrNnDmxFta7tMnojSTZrHLLFzsYShDvSorNaNZmnLLhAaH5Aa9Uw7MMKFB",
  "key19": "4up1WULEyMoqz6fFR98QMRGjuWf3THEMaqN11B1ejTkv9ZvzKLHLUoFehTyoYkZHbk7h1MWX8diFqcNzQpSJyADr",
  "key20": "26NZY36MWTpGWisMefsSjLhnUsjJ8qB4czu7pPWiiB6x3tSuyrxXYicn4LKiNUqopy5ypzgGQTgzsy4efgRzHYNp",
  "key21": "2P5nMSBmTNCMbnuLedmW6PnkYyWGvLW8MJjcwKXw9Ji2ZUc2R3ijF35EVwFh6fzED5Wi3vLvzL6L3aPvwcwbrSKb",
  "key22": "3graw8z6kC42kkYPNGymMJDW6R8G8GmB9bjFY151Pn2tgmguP91rPmY518KzjyDosdQUPU9wrTk2VnvAjkuG1i65",
  "key23": "5FjK5erERaRHxrxj3s4fTvh9PPJcQPjeZGDBuXQbPaQ9K3hT4gbBDQUdAJhnEMFgifUBwY9z6uNVJ4vdPxbYUEMA",
  "key24": "dGhyfpX5VfUicVEMgYRjoier85epXM7tXKjDnpgYPpouBRKZEBth2aDTR9nNX4NvcKNERWMCuQaaqxYZzpQPXMq",
  "key25": "3sJBJHRTb2SaggGCgmqBHX6tMXySC9Y6MYzhnXDfGVi6N5MXw5BY86H2Usv3vYRuT5Jz9a6yjshYwbz3n2GQsDk4",
  "key26": "eTrATBvvio9tKnHEZwg2q72uCz3GhghYyFmGPUe397iiNH67WqbML89P2sjHxVuJUUUd9mpCQ1qjFuWHFeE4sgk",
  "key27": "27oMjhpYZb5MfiaRJRhmm2nvpkVYv95br2xCysoZP2Vakn6Kmwhgxu9vbznsKKhFdY7XwSohD8Z2Q9Wqqbw9EAwR",
  "key28": "5r4REwVnWzQDxtMfEhUg1fKvASTyxi82cE6j6X13Bvjn7oUtsV3BuiDmuv2Nb3LDLPwzpMo5QMjGcQkyevaTDptC",
  "key29": "4z56TKmn6pN4HhkBNTkF1X6V5KA3LiorfgHsTsQxcP7Q7inEusJtQ14Rky8xVDYqxim1q8rCMdWAKDziCeHayx89",
  "key30": "4AqCJrVbFLW5jBbsBCcUdAqsCUdh9b6abhctpoe9P2ZTNHig7h3t3tsDsuh2g68B46udDw9SaSWhEmKq3jHVmocG",
  "key31": "4wbU9FnnB8nH8BUfssxSLqfVs9XJyrHrzrK6D7kGaSEa22ErNuAAh6WunJFhyifQFQDWVmKgcpDGJeNc8Q1xA6w8",
  "key32": "oqMup11ijW8SMtzRS98EuWV2138jfFbUuSyJCjPj4aCDp6rykxH6gkSj1vwiQEodMrn6geDZtk9j8drZPcHJgs8",
  "key33": "4YESAvCGrZt1RsSmsRWWux1KRMxnRUu6zuP9osTLgpv3xzQL7CwAqX5VQ9M3WdREN6LVy4e5MoDZpnUjk7T87JsU",
  "key34": "4BT1KfzoY4D7ZnTu6kDYsNe7SwDjEAEAVK3fFvHQNuHbgabQTUgwzjhaFmWhbLDSKzWpwDmLKTMkqGhmg3nsAWdw",
  "key35": "4WE7y85FoD1Xsqc59nY9kVn7MP3FmUsRNqgZeBMTagneEL33T8Tvs93Do6wQwqx2vnwhFBGFwFQfnGFqfqZvg2De",
  "key36": "5mjjTHURGizhGmAFsjiajiz8AGNZbC9pwmaEGfB2XBFBVgZ5GR3nGwkGwbTF78jaTktkdhvRDpzM6aDyYhE31DXk",
  "key37": "65bh1BgFVc7GSoTfbqVVskt3b8Qe5M5QfS7bpBQauQfVUSLXJBuA9ZzXhvWdSL2zymD7yerypuUuCJ4AN9JenFFt",
  "key38": "59SvMoHKsCbXTsHbvSVDqPzpJfny8hzaZGS8kALgtymUTSR1Bp7jaBAh7ueADJG3xwzkE2wSpnbTsPfmwBmkNuAr",
  "key39": "2gjJgu81CVujG8W4RwkiLjQQGkhknK8RojKJBaK7zowKbg1tmKfDk2Exph1S4KhLuDEDRP1UK8mHbzrt8Q82QCYR",
  "key40": "5sPi8ikJUSQvzNzwuvdVnimBu1ujKT1z1VuBKw5pXSByBUYdWVn4t8sB1kxnznumWmn3pM5vMPDsBadA1nRR6QHM",
  "key41": "2sSzds2TBVwfJjUkJ8PpSmkRL3nD7gfrrjG5Zz8NFGdH3Yr6NmXoaUL2JSExhT5chKKNVvP9QxuXBZroEUSR81hR",
  "key42": "RJzTb9aM8uh9UNTVVporGMY7bLy6w7DzJHBgS6KnD5syKBQXjYsLJrCcjuBVNE7FEyMbn4pXDnxYtoLbeLR9kwm",
  "key43": "4QZzKSeC2Rxk5KyQ2jCSBkQ31YSXJT3UoKn7BWSQdoxdS64PANJYh84h97nLr9xMNG9wQ8iGeoRJ5wTb85dHfS6G",
  "key44": "2Ysd4YY1qprFEFsPQefC2tjnd4ehW8zGNBLSSw7WY89AtVqd5QULkfcvp5rmb2LZ38ZqkGXnwY9tXgPEZRh6C6AW",
  "key45": "4wqq3JDeipkiwp9kWrG2qJfE7SQibkSQpnPDoZE8bMuC3HHL1Hq5AtVGb88HC6cWKEgDGDpZ5gJaqxrXW6oU7srA"
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
