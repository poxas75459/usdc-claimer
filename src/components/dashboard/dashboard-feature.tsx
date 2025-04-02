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
    "2SNqhu8yeo83wdd5rFfb2JY2mjMKU8skoaVA4FzmpUZfimoJy5Zf22CUoRXvmFQGjfToUWytEcytVTzLQBnm6Ro1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ni6u6fzvMWTC2zZ1sD8x4Az7N2dXA4NGTR1g52VFpAGHiyG6yA9wN1HRXesmstNaMD7D8E2k1QnHuK4x4XVhtAw",
  "key1": "3rMpwsym6jW8cpz78LW5iNSEy5BUgTyNvCF1UXv2iiikQirVimNJE2tK66zs85KsRQDKCKrKHs9SjAHH37uhfnd3",
  "key2": "4HsEMCy3cUbhT2GiNXGe4QWd1qPv6F6jbNuL15228b9f5oxWQFiDtFF3xuVWKCEgjTUahHUuES6ATK9Q66gjXkwY",
  "key3": "ocLXnCM3PDKDL3LcEXXqwEqdNMTKFzSvchrNBwnvut8s6GUJNXEd9UcmKASkr8noiFQrnNM9YJFRbm4JHNCBfw6",
  "key4": "5nF9s94uEGvjjZ2c1CLVnkzhMZDBTzvyMRbj4iWAg7VgqE8fjqfcduWuN88isxmbyN5ipgJ9JA3QZq87Kn7rTjqv",
  "key5": "cMuf3ktfJDEbxQ1oiiebrRKKn6pvd6F6MTrquy8FGYVKZFex67hj7tM6pZXwsbk4mnXjqEER4TietLKkjU3KcnT",
  "key6": "5vyJwCeeS7r5uKTs7E7i3sMXTMWoZ4dhR3oCVUzbVjarcdBzQWJ8fSRxRuJz53auigZEjaK1dVHmy1NcBZx4aWX",
  "key7": "5vJDGtUuP5gWT2b81ys5CkQViwoJp6pAjshwhEY1tdrtJ22xf7tc9EzxbKSgJ3u2HF3EZ7uV3tbxRAKoDgSYEgKU",
  "key8": "3c4zF5UpQsSSrvi1GQGmQy7z2irCZX9s2BSnWnnsnGFhmaf3UAUbRv9DzJfLNGSWqTdKiwUyg7Rq6z5EQRxJaZvR",
  "key9": "3bMdPqse6GVEWbgeZFbGwhGvki8bf9knk7PnCLEfnmLH2QiksXsAu7PxPdqaJreF2ufngFgC5Uapsu7grfE3hLAe",
  "key10": "35wbT642qfTyV9M41hhYop8iDUJWqasPJR2YQSiqSaDY3vrXE2sEjb7p5X4moyfdWApJvzs8EKD1gg48oiTkb9sb",
  "key11": "2M45ZXo8E2FoksVFB4Lg35JHb4mak6dCipTT2N88yq4XyhcmGgumiMer2RyTRjd6SRNGhfRAZmX8oF9tQ2UcHH9b",
  "key12": "2RSbhjMudNaKnzxGf513yWfqcN7TbJEprgjzNJdQ54Y6n12AHqTma1TdwxAPEW89WGssfYxWsZTosFqnQAJTT47",
  "key13": "36V4gtd9joN4nAMGEDnjU6P8Fs7TcBxV1vnm5KcefxyuPH8v2MrqqwjzVQxpWfbazNR1W6RNuRNZ14MPf281T7xP",
  "key14": "2pCpjihGdLBznmhTyvv66yvGgijJXqqEuFVhqin72ArWfxXaddmnsn8XfTFBVssxG684w11REJpY7nWRQxCM5a3R",
  "key15": "JUzdq3JdqD1W5oiwJczdSEk26dCWL5a2wT4LWNeA2F4oY1wY2G7wXAoPzeg1PB6JQoCy9i4WDxBZ5mA2t25cdgG",
  "key16": "2yp57KZCXfbJkP73ZSJSBNMNYNN5JkySezh8trt2W6Lpq8yVC7TDKoVjJ6YBJVhEnmMV9Ui65gPn5FDru3qpctGJ",
  "key17": "2oF99RGgvXTSjmT9DsViSP3bBHQMfjTWm9kuTHFmXGTBXUQCZKrprhfFufqtRrtL1mqAVtLWCeGgAiYgHvZzz7HR",
  "key18": "4LoqTBkvgf2tgrnAvKGPKaRQVuavTcBrVKJbe68XcNBPZ6MxyYx8VZty3s6WuY6eKPBgkYh1capaWjSv3DPSX3GP",
  "key19": "2RVZScMwZTeEeUkeYrAtwNePVG9rShThKZQ5eVu31KHiG6tvEbQzdSwTSoyvLUgaw6BxDtMhBg4nVxSy7ga26D1j",
  "key20": "3gmk42ycebYXYEuBBz6Trco7vkiZCiCz7pFMGa79RZ7JJ55sUHBwwN1fJyyAse7jnhZy2Jq1w4bxfNM5dJAvpWFu",
  "key21": "2RXokqRUWueLW29aDRMGqzVMMfu8RFE75bNQzJiCBiamSZiCQfTtoFxzigjBaBjmigQ32QyhD8hD1UbEBup9iP33",
  "key22": "za7todqNrZyQzbsAKzX8DwE2Y8GYHLuzRK3bXxpuk2Dy6QKRFyRSCFHLPeSBPLNuC8pEAgs59ZucbiJ3ja5jUBP",
  "key23": "5VDTgjQrSDh95f9ECZEMUvYiGmat5yy2hLGrw1y4M8qsx7JEsnCTUGFrvuLt2BHooiEa89mGt7SWu9LCXEMjswPE",
  "key24": "5srv95HiFVoVTBHwMXTXAszvdwYT8C7ECPRHYFwWBi3ztd3M5Ym9sHnA9cQVzuhF8qz5XQGc7d63EjyiM3XKFcPD",
  "key25": "21Tsivfqyr2HoT5gGX4wD7naLDgkqBmZz3jXg1eKS6skUhnXUSUb1oEwsddxYrBdDz6ZhuX4b4QqrsFqTzw4oW2x",
  "key26": "61jnXwLpGK8PeQVUNBx6WvJD5EPWVSxs8tMQ3ArHmRww6HqGfmSxVMzmoRoup1phqTfGxBTnrCpzwZyNGzkmwHdb",
  "key27": "3zLvnCw6nBqwYP2ThCdpNw1G3nvJHRtb8P7dAYdHFYmwxSLNHo7qM8ya4NGvK63u3hN26rEf32WYPa5vbwhmi51Q",
  "key28": "YoKAKg75KjBCPEWS8oSUf6Toon5MULZybaFdZs2T17ZhXSHeZ17mBYdsuJ7rjo6bjv9iNbXKn4bXfLQqTF7Jc89",
  "key29": "36KjrGXPFsUjThYgxPjdvtbZaizoKFZv9ryGtVVk3ovDSE18TSCS4nLqFZYpG29qnW2gTsm6hUvry7eDWyXygKfh",
  "key30": "4qVJbsokThRa4aPwKYzUY4hufmfEr1ukT9cEuA8EbtK59w6zc3oDScBQYjzGkfBbc36wWnxnK8mYzKQc67FAW79Z",
  "key31": "297AatKcGn9pGsWykrmh19MyrAiiegethXyhKjCCM6XKoU9bdPpnEJgc6eMY2DcFPgteqGcX4yMJgU53yH2RsxNE",
  "key32": "5gbQpnXgnyPSYQDihdX46xGo5WGA1X4a57myj35aFQLJCPam2C3vdPNawA3y6Dvox3U6arDSC9rsaxDpFQVJHZw7",
  "key33": "4nPrmq7KzmtPnKBfwSXgh3tSVPMJgV2KpW84gu7LQmGji9pqZPY2T7aom9SGd6AU64sjrXDJD34LtowE3ea21mcV",
  "key34": "V8HHWXRfzPXYnXMST2LaoX8Jf2yYZrCquSjCLWezQu3qFAaPwZBJdvF3BkdbyZb7LbWcLjCKFj8YkZdLiBoMoNr",
  "key35": "4oJ7zGqC6CFVH2Q5uoxaFjK9KFg5oSLYqFbcdsmhSwkVeB15UJ5vZhhLTE6R3Wwo958KNGn231o2og7wK5P4B1Qz",
  "key36": "521HjQGVu4XXG7xZ3EfzTnG1JRH4gTYbSkep6dDA2jxQcpUsHmcZYqcVKWzKB1j7hS8D2Uixf7sAzsAiwy6qKByU",
  "key37": "66H2YpaCAEjFSpmKvTa4FVt7WbYkS93EueKDgMH5C6dt1CJKASBsZ85kEgEHJhcr9Qg7ZmZiTU23whoMU8nEM7Mu",
  "key38": "4VteCg8gfwKCCebVsj4ZMDXJHu3Vx8WKn9YXQ1vju63YRdrntjSh8iQcxuibpVea4STXnSix1GP8juphiGhdrqBQ",
  "key39": "3WujvZ6f8QfnZCFYvLgQ8uuZdbPnvq5XziqT5NU1wzTMnkNQNdoR1LgAHSBMVtAqjcj7UpwgWVKR6MP35N49xmxu"
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
