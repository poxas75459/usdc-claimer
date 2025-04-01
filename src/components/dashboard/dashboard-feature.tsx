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
    "5geCgvNo5vUPjzbKjZAKXKL3XQZ9V3NY2kcSLPzNuDd4mp44wZAszoBzfDpm9NWTvuMozDpabn3gB9n44GDHbEch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sP9H5Z8xPR6eDjxitzhuu7GW5DWvFeD7e81sGpKnFmNFV2Z8ZsCWtR6BKBJynyNFbRggeiMCJJMhorM9PDnGj5B",
  "key1": "3X6ELYvrykPqRUSNFcUVmsMz1wxpWzhj51jiZY9GB9bLgksNE4mYY9Xsgg1ySJ3g45RmCvcXTyyuVDCnRPFaNm8b",
  "key2": "2koZMiYzAMh2dzRCb7sppXdeUnex9gfQ4Zz781G8wNCGKS5fHy1dTpm1QxjRq3MU8b3ZmQdjBx5YdpgyhNxddeWG",
  "key3": "35gmokGojE6NyvhtJM4bVMmSv1ucWZA4iukhTbTWAePPmJxKBqYzYvrJKz7Cv97oR4pnBy1J2Rf55AogGtabMEaS",
  "key4": "4LViUmipaHwn1BMRFpwgcKus78iuFzCJxEtKBqDS7KivriJZHjpZKKpFMHaaK8X1Q2QsppU4CtXDYZLTHa3dScAK",
  "key5": "2AgXhxL1TJVEeNLi4SxGY7BWEDvxgj2bdwgGuuv3G39FALkdB73yp69858iJgAg3ey9K8ZAj3waeF7VfevGLoZxq",
  "key6": "27gmjLMUXzmoFUdn3WdkJQi5nxPyLGe1gnCfeYonwYN26wSzvBRLSZXd88i3cGWXZLPu92oWjvGbvrtdzFRpJxct",
  "key7": "5ZtszhyuZqBQPuBg5gm9suAo5niP7qQNPCsZ7x2sVQFfZku2DobotF5D5CJQFL2FG6Sbci8nb1sea4c8woTBCLYz",
  "key8": "3bsUiAYvjqwbLGmvnUay8hLtQPQe26ZEdQgU5t3a2y2xfQXS8Y6aWVAGCgnQW5HaNcNSjouYSjDqnoaHgF3wDugB",
  "key9": "2sRzKmoSxNXEnSmNMACuYVRtqSmu4bSMCNUA3AHpkwf9m4nKxSgnEvKG2cJTHMRUSsShjpygAgtJTQa8839toxzd",
  "key10": "4HsuXkTzhUKqKAFDK9KA9Gbi4Ze5qZN8pKjqjhyLffiAmUeSn1iYnBb7mhyshMFrVVptKqGxCLQPMckpGoWgEh7u",
  "key11": "3MBWNHpbxHYN7W1rFYckZk7re9Df1ZRpiTo5kwxg9xsggF1syfTXwEroMxLNmGXQKXm42p1SAwet1mUKcyaP3FxB",
  "key12": "SuTcxRK3TL4FUNG4fmWxmmhaUtwczSvTSLXhHYqUfKcuiH6aqy3xQx5uWmgB2SmpjzJSCkzEAYe2XiJupvuNUeN",
  "key13": "RgJvo7TCkoVzfE1osGJAHRp9Gn1b3QanhfPHdByqvVtD1K862gy52vWFgWtNcQz11sbRRjoV6P1mfF8HvT6EDTB",
  "key14": "5r3TzNPvdaTkGGd8gXCcSJDcHoH8gTBixiUERgTns9WMPsuW1jjqVvfCrGb39MoSZ6q63VkvgNdMQaTe1msKaSuz",
  "key15": "aYdoV48jCqnwQWmvF5sCSWZ4ATzLZ3xWFceZLWZ5LSJ3K95CPif6knwj4Rg6Qu9VSM5FPwPBwPDv5cjVwm2gAGZ",
  "key16": "zM9o3KbNuurpyAhNMegjmmyAZBcSnFBu4gYhxvxm3HdvbCAwkjj4aSegYueT2HEGpWHJaBYt6TVN6aGhBFt1fCn",
  "key17": "5cXPhh3xmWXFT5rjisd8Sz2bXtGtK1oDHcZpDRsSdaEjNBPMJo4oPM3adcYaLY37TJynm9uuTQgkrZm72jgRpxd2",
  "key18": "5P4BoW5TFwkQnizv2XPdHqo7d8i5JPZw67JmFbBwAmZdekgHWc8BZXEuk2YbUgtkicTNoEKmJ6SB7AvwNfyYXCAA",
  "key19": "5CJRPyswMyGpRM5Rf5auMRA43GhJcjmRPovXFGYyLY8exZfSYL5Adeaz88WtsssMcKY6aSz8jSyW7NdeHmR8uNQC",
  "key20": "5gQ5snDpMAjJMSkiAQ11R9gY4bL7okeZ2rf4XRksYbxT9ZtSgVJBGsQrs98bjQz1Jk1ear7AQNS8b8stjuQUcu2G",
  "key21": "2S2wsydebVv7WjunB6u7hjiNBSjfoszqPvb3nfvu8H596oN36eKLuCNkykpoDCj7jDrd3gZhJQyrzCDHbTJfDCCj",
  "key22": "gwVTqE7nReKNnzWY8WDnDKzQHS2pnG6tu8oh6FQnKAEmm3SVifSsHin2jEM3eddhctojuEpSHeDx8Zon2wAANuC",
  "key23": "53QHNRwPnj4KinMbZQ9ZGFJAHQWhwwmSEgNT4VZ2CuhGDVd9rBTMhnB4KKxENDaxJ8848sWNA9QJN1jrvHzszzFB",
  "key24": "3jyWkdwsmrSUZkhZjxiPR8vCfdnHXJDKScBEftB8aRgLksSUtN2pyu1eh1AF9efi8bBG9Arhmq1vXch1WohMe65s",
  "key25": "4A4tBG366Zs87dRBYR8NJbh2VYs5omZpSnYMu6teNwo7orDFHCVaA1P3wa2K4RNRFJ5aa6fuDjXMcGwvqxdCp1at",
  "key26": "12A2yokZvE73ryAQaA1iyVA1o9Vnra5E476BqVG1tRchJSSGbaqtBRV4nbABvfLW8dSbi5vgwYREsZrrsZD6SYkR",
  "key27": "4vjB4iR6G82g4zTFaMo7yxhoFKsM5SuecLrTsgDFuLxG7zyT1Bx4CG9cp4EvEaq6PAwAdYLw3FeqCvaxrHUusF4Z",
  "key28": "4SgdRMRiBEjr2bWu5X95a7177xEnstg46C81acNMQ2KHdy8ToY9Z2qRTBgCGNjUNq6VCTvZoSnn7m8MKr5qf9fhj",
  "key29": "2761McJojZNjE2m97Wyp1YCNGXZRExuif69u544JzussS82RjaBvfed3ym2ci3JnsSW72Rw3MRW44tx5kmMzSdPk",
  "key30": "5vshhHVyjaHMTYa22ypuZRc2NXYAHqTXi7aPDCUp3uJSygypZAH9wKDaqKDxmV9L9PypH1ZVANCvPbuFSiGxqqu8",
  "key31": "5KbcXBWovS181msxxDGognm9BqSEKg2pcrLxGF5DsrgghcxbHNzdZUZvUUMw3zFmEaxBXDjFEuwGJCeZkc4NH45Q",
  "key32": "3jTxLp11weksQg3F3jwE8NAsozGGNwv7QaqdQ5BQiS6GyxoFFzmpUYwWsXCVTs62qeRtjDypSbozS17ovVohgbwB",
  "key33": "Y1nVivyncYMUA8SULWQLQfYfJXK2969Bqv2ezNGRNdE9vvGZcw4MLnCefUN61qrWGZjiZgqRkyvrVoovpC7huho",
  "key34": "4ZLCgbnEMp5jdLByeqyEdRESJkQ2dNQ2foJBEJ5sNBqbgDw6xyyWyJD8pRYNJuPhKmRBb7NrDi2JLkppx58K57un",
  "key35": "3mjkPgmZ4hckFKPA9SeYx8DxdDZVQm4NexSZwFvYnq3t16gJ9RLrVFhHwJEh2R9qfhnbFMzXrqYMseZ82akpw1Y1"
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
