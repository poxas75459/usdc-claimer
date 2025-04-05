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
    "3n8aCUQqPYJG47mG1h4fCB776pvNfTunX3GYoN5KLoJ6aN1vJLcuiJ7YL4ZBdXmFoh9SyA1Mzp4wXsDR3e8gmt9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54omBqYzrPs76peerGVYKKxL3d4p5uL1myFm3cwnmsqPCBSnNtuM15b7JyTMr3busNFzXgNkTm67V6CpyjSevhcV",
  "key1": "wURb769fb7STomWfEQHLLeLZQsC4mJ9VbGxB3G5Pp77YDwq9nGckCiJRdteajg4uXQULFye4GtKr4rGV3mVd3rg",
  "key2": "2cbmhHGADWJ6vJRbsCiN4iigvVL3PM2yM3WgFYjAGPEGL2Hr69Z3myZ5fu3kGkc4FmgESRRvnufdSBJGhTHRYy2Y",
  "key3": "3PzWBgwzBe9t2BE78asmehV5y3fqeDWJ3WuKHGEciU5NVSR6Bby3BBNKuxJELiV4ehYQY8Q2hCYbmN6gLzHLesqp",
  "key4": "2wZ3SaxGoAAmuENd4YaDRNnacckMTihxPyY3L5LvJAkLNV7xK6G44VHo4v4xR4KyPRGdtRhpN8b7SW644VzgBgcT",
  "key5": "2f6muDXLZUgxUWYsgyCTK17poBnPFSHL39qztqwzX7hFXtdt9dM358YxpiYYDSSgWGR7DgVgxsXFoaPaqPupDg53",
  "key6": "qjCQoLYEHj39Sv85gs23xbziuNJWAuqzMxZTwQLn2LM6VDAMSbaSyNvDKMKLv1jQNpDVd5eWQG9u19zZ2zgft8u",
  "key7": "3qMvnwLaybNwVxHVErY3zLZSXyKZocFCj3MUpmYuYEg5HAAGXhYQuWFJKSkgiGZgfq9dmTD3LnrGpA567LdJPhB",
  "key8": "UEfVqWPzTqMaKsSg17AhyCHt247PpP1enc69p8vdgNJZGHNJTbPXS3pP59jgERfQrFJJvNMuiSivMwyBtffGQVd",
  "key9": "4Z7RiTuhAvc8dVGaCUgVkQuC3yUpNP9k8fc8LdUpsCpR6XmjKBqLm4GGQ6SedAoQMsmy3UtQGtvBNPrHqDCsnGDE",
  "key10": "5amNcFFFceaUYkWpM1KfZhbHuQWEhkqFcswTkudVGtGK9oVhTfMTDnd1MxR1MNi3Qb56GeANfYgkDMou9c9TPg4i",
  "key11": "2aB2J14rQu8JVBM1CZDhjvWFrG4mUVdUqnRgKb6o6iL4kqhzJon3Cq7tm52nFV7PBzEzn1JC6CVTBzJ84Pmxh7K6",
  "key12": "29cBZKpZduESVZRTbTAmgQjfA4H5bY3uXmfG7v4n6H1cHcZLYu4XNv3necujBdqJ6GP5Zeh2a6MML8zhPSAxu2au",
  "key13": "BpamdAtKsUgHJJ8rUV7N8KH4RU8Ezyfcy3ypDtabAEqyVQpGnGWaBJgdRHHXPCPKTd6fBzC8WAwAAuQTBzjs4bC",
  "key14": "4pXbsz2wEcQxBMUBiB2WZQThwdHpxBFNbH2xdFoua29fqcrzUu3YBN89AxhPF7T3K9PH7zRpxGjsdAkkUMEQQrDy",
  "key15": "DJDH2sALvYpH4Rt2Pk3Y4puVF6T57YjDnsHvrcY56qDrxdGJk1PGkDc7P716qEyDHz9ffkSVSfBqnvy6h5iC4DX",
  "key16": "2x28XarsX8ekKZRYvfjxxuvpqpFip9ArQqM6cApqtvLwQme5qEeb9Ndgxa1SHMdeX3xxSFFGrwno2dEdvrmnMqr2",
  "key17": "3PESz32yShvBq5S9S7RTZw4MjbWJhqK3UWEaAf6vTCo3oYgDNXcSpSLe8MM3agRhNEWgN4BEECAyPY2Yi2NEr3uJ",
  "key18": "2wCNYKdJwxRwDHqPX7tu44CAZ3dV8Viwv7d1rap6VggaGaH9YdkoUTTDD4YqgkyoEcMQYYURbSVbnfamEPzcixfC",
  "key19": "2uXvv12L6U1AcbrT3xjkZd7jhUP2KDuNQTt7aimNUtEWDwgQxL7W71iCVpZWjkpqqmucc8YctgaF52LcT19DCEE9",
  "key20": "4gzwpGJzqmv7F6bvV2GFczxat5xTmfhDX9KwyRcQgAc6ZZn5iMZ6JS6q3VjDDsWdUEp2E9oTPMvDrJu6n7QbXvUp",
  "key21": "5fkC3YoJZmGevrrXqZCs5NWEBkjCqeqgSXFQQY9M18mzMQg6ASqb3cSTEH1WnwWXFvRMwf2GqwvkYXV6Q3SbHSWC",
  "key22": "3r1Q9gvFtkad5DWTK1vYTQDZ88fXwCqn5KrkBxfVxS8nXuDZ3LgqBUAmKZeRq8D9YdAPKbuyZSzVbUTjgtjRc5tu",
  "key23": "26banxF7TWvjXRb1yGjhGce2EoBteB6pfSvn13x2b9QEN1WbyF5WJvy8nJQ7uhDjxYZo8NtkvsSniyDUrseeWqQP",
  "key24": "2bSmY12xJtwJDuqZ3S4SUEukUPhCyBET7MNrfSq8hzMCFfCEikasyk5WctxhGgHPPitgwEga2HhgxYaPTw5V9Yih",
  "key25": "38S7K9Jj4gVJp5RncSs7LtfAeytyavnVWKWXjFYUKvi6Wyu6cbffBk1XZCmunbBMVbr274zmTh3AsqHKhUgeAkQs",
  "key26": "2BhPetpUnwsJb6g5JcqTYfNUDrjQ3kniCX3fLyzuiC51JL7qKumacfdgkVJyNcggyrukKuqUie3Yvhx97M6kcZuh",
  "key27": "4qyZWBKE51KJcAkcfbKZU6F3TuvDz1affAuao3nRQMXnDVKivixe1ChjnkSBY4dq5acbnAscKPKoxubj9VZ8PJBS",
  "key28": "2Ju7ehcAX7CyUyRjCiA7ZagpcX5vzqpV3q3QDrZYNRoHcNf8Vup19HYKjU4TFr9PEpwRz8eK7Mu1WiicvFPwbAo4",
  "key29": "63q1gLRJjWsiFtkHfc3FAyKNdJMJnpLQFzh9fYveMqshz2SGwAZWfdofjwELAgxRnK6zvpk51nykxaD4XHYDfGY",
  "key30": "3ZrZ2PR9ixTjYM31NjuyqHyxrkzGQkZj8A8gFiTun4JDhBVvZD5dqBivDuGjhvMo7FguMMKyJNMSbZYfa3E8jyQ2",
  "key31": "5Av71uvnjeu4QK4xKwXsa8zmbawun2zV8QhjadhFMs9Jt7HMzSW1ikBJPjHaq3GYeVSPK7GCUVvjVQa1GnreT4Ge",
  "key32": "5HnLXeu89RjTzzKq8tgXdvVES34BztZHwMCrZPXkACJBSRB9LY7FD1DN7CBVZAkwgyJdvvS3Ub98Vhs5GLLrT9WF",
  "key33": "5EiH4MfSKnykrtzHdWosssoFH1NUfTLq7Tivn6csvwT45M8JNdp5jGeWB7KpMTB4btTTK1BwidVtssUEyPWcPDcW"
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
