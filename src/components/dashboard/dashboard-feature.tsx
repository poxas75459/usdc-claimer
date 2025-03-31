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
    "4MeFL9Virz2tGYX6csMUoS4rqncGTN9mt84gfeDeUuJY9D1WTqzuz88BNXijQNntFgkQGDeg7Z64WfjwPX5SV4i1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FEyEC9NATiZ8XgE6Kamm5b4VLBPv7SawTXfFxPfESbpb3DcxgCe9QHEqoknbTmUJNQHMzfWTPXAqrtpFrgvmoYM",
  "key1": "sw3qV4Ewt2snj9QGbHKnHdw5QiKmQv5zsPrVHrVYANBxmiGZqhP4EywfPvcFJ3VwhU24a9HEGJuXdoVqeJAHrMU",
  "key2": "WshroEAYcVvyc2fRQ6xTvifiJaVmWaFXTczesycAFRuNDQYAJvboi1KVhusben4tU2KUKjGnh7S586gFv8pk6BB",
  "key3": "wfzN5zKPsR3zB4Wg4PHFaCkTp3m4rCF4nECdZg4m6jPCGvsg1EaVgmhGbbXiZHhEQcWQ9nFws1gUnf33zBCxSnn",
  "key4": "4CE73p46DSQhLkbvYLUTBYrkisJaKZdBsx397vrK9xw4TQ2fwz2ZQe1WjxjpLpDvF86w1vwVmm8tQbg4Nv8B8Bj6",
  "key5": "4adn4kZVtrksGmNAYXwDbAKmNYUACPZ39gGTArmto7tLZTsQQcwWaDLCMTuR7q3RiP8ZTD2BgxHbUEW1jGzwNmHy",
  "key6": "51HXAB5aJpLyMJt6hekEFNxgbTEua5GbxViT6qN1eEPAVkyXhUaWjBTZ5KPHXsVttrAU5P955vHki589dE98njMi",
  "key7": "4ZNYwRvKEsU9NuHox3qjimuXFzXnhEJms9hjwpRwA1yd1GjmfvKsMe6HVNN61ZEjS1JkHxfdVCsGbS9vrRbxQYas",
  "key8": "5J5jW4UqfCx7yb82JqrNq9yduu4UudQrpf5CyC5YNjoAscowRfRD7v5H2jsABoQTPm47Vu1ySx7v7wNQjGAtknad",
  "key9": "3Dj3ErL4nqc46zQ2LhmW9sDrvKoLsB73uFqnb8PwfhjF4fUSMzJvGwfmWxxY4ETB58XTurtQ4ruy5xwfF9qxebsz",
  "key10": "3UuGVkLMb1xHXmKTVdUnVkewzMA4WbonRnJxfCcFaFX9ifRgfovpGADpaHqhbRZcwusmNDNda4DWzTanNawkqJSv",
  "key11": "3SiGFEmk6EmXvUiHPzX52YtgbXydkXphcXRTnDDs6efN7W8Rxif4HMKbUYuamNugBVXZHfwJzhA6HRjeq7uZ1vZi",
  "key12": "BEMvv1xtx6G4E5gifgFCoG5ujdQ4JBtgb1q7mmBgkFtB6JPkeaWzCg6FekvBxCHHo1qYzwwwqJKNUXq8TzskmvA",
  "key13": "erQqPkmnHuadZjBXhPpTEkZZr2W1Mc6yFDX8bsCTwwKLEf738yNDFJ6Tsern1FE4KcgWXrQvxGrfL8KzHf8LEEK",
  "key14": "55fPfNwGjEJiHgiepGuHWN1jDgJavEgh7hYG6jVsndRhZWFJ9U7sG1inUWLCw6mykT5Kr1eX2BKKevHys9WdLENr",
  "key15": "5wufyjeYE1ZY9LWmmJsrUUBZG7BU3SzzWjoGAtkDgdnVXyvCL1k9KDn9FHr5PFp2hy6o9LRRrvRwqjTRP9wp4mQJ",
  "key16": "3YFTfeK4LPYQMhU26HWJhkN9UZeT7Keago6RNsmFbNsPvhWRybPDfffVDUdZkW4NSrwfugoVKMFqpA5tW4EVSWYA",
  "key17": "2PXQSthwMnTCqTKkfwKf7nRcP8ES4rP6oVGdf73snip5hvXyGBLtKvzazTorsAMDPf3BJCsUW5qiG1HdRYR5HAtn",
  "key18": "5G89wH3EPFVEGpRGmgyFeHewaFBwXuymz1GwENj9Pf5y631wVzJphwcgt4yDJ72nNjA6vBRsPSy38wVQ2veiakid",
  "key19": "oAsAHwGh6SzEbKGeHd4FiNagbDtZjvWYfqfBADKWCvgSGcGte3vyR5M6QJoFUjfZUhvLJAovrysLQademEJYmMf",
  "key20": "2WRYHLaHiud7MjR6QP6rNoy3ANGMUfk2gwb7e448mcijFHjtd3JiheMAahQP54mJM4kkr7eKKrxWa9tZUBrydqiu",
  "key21": "39EEfQ2tjSyBYfKF9kPM6FEhQMzib8HQYA3oB9gjosH3b6KhqkTq1HB1k11etUxYqjFYD4H4xsgJea12hPFY3MaQ",
  "key22": "4Sw5AyGvkoCXxf1Xco5dSNvaD2Cm7triGsNXuRgmySWg55GVKiTfS7qtnXxJtqUjrrfBmYrJFK6DjVbjMsgt7hbe",
  "key23": "8L5JVHuB7x9iB4oTffkY4jLrUkf1vWkyadSiv5u9RzpnKquJznAhMJQT6SWgNAZvHeeYEPiMdpnYozGCVkeumiA",
  "key24": "67h3HB9G4HPKbwowyGG3AiscTDBF4SfSfsgrPR8Q53k4oPX3Lt75QyhdB6uwGDky3m2Pdi2u5b5wko3N9Tswi5Yw",
  "key25": "53gAXuVUrEEha6tyh2EBQ2x4bF3LbFds2iyToeqSrpEPrLwk8GXRHqjYZKzT3z3c2de7P3YEvcoWDATV2JpiCtn7",
  "key26": "5WAw3UaaCGDzymrLzKSJYbxbME7ByPfs7Wm5QLy38q4Zvu6KPnApPicShVB5vb9bCmxqK5L5D1AmVi1TY7TWFeTB",
  "key27": "vybrtneHxXbAvjSjnxkhdJ47MHsMJgYChWvNmtAKjfSvwaBSRbYCFiy6kCcHbGBb5c8bnRjSDsCrkSgo4dJCPEt",
  "key28": "4pCXx6WHLqxbeR6fyiQCvxN4BTxbBkQjb6ht1cVPpuVrJW3JFrNTjmzw3HVJ7Eo2mM5aK3kbCtmxhBuWWkhBemPM"
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
