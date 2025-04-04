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
    "2skvhM5xFSw5eTPcS92wVzP1JqtywPa891xD7XyiJrqzfHiwfTjnEWAgcbNeXpriXGjvVRHRZLw39oXueocDRzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ocS4u4gNDrdMWPbx7GbQNawKpMsUXcnysxMhLduNAqjKNMnPymg8jGLoc4q1QuhwhmsFyxi4oqtnRv29T5fFKWk",
  "key1": "5DnYvjbRFECAMFNj7EY7CGsMQ3XgJgGcRb6BvngaBi9WyEku1n1rtNmKhsJhR2P85zqsmqtcjvWrKWi43DFweTKp",
  "key2": "47qs9KVnQvok38mpg81tDCt9xzQAw6c66KMYx6JB79vy8WxcsmNjmhRyzT5N6xdycPcQNow9ZTkuL3vpK64Xgn2J",
  "key3": "3SYchdut4KUuCisFC515ArMJCjiwtiQeQ7mDN1g47oYPgRdvACKu9ZXs6dYyXTqtSE9do76KDTsyyiVr3CW5gvRP",
  "key4": "tqgVWkVDsHgsrb8KPoDVZCabQr1NRQz4CcrYMT4ULegcUYHskAFyaJtS4wMd9TaRqV29ojtccfspzaBDEnCnnKi",
  "key5": "2rWLyPx9mxik8n5cYFRbwBiUXxJgEh7NV2CWky3pDnvYUc36oXyWHgUFNvL7rMUeqmrUTmjzpnHVXzfyTF1BNQDp",
  "key6": "312au5RXbgG5KD6xxQ4sXbwNKh7Pn1hdNQ14AcCVBU7ePbAzTGQM1vKKiYRUhMvBs3f8tnmAbrpe6z9bif2QuZKk",
  "key7": "3TwK2f3Eo5HdKnKMWd6KGEBRBxUQdE7gTpPNLsL8HuWWU1rR2jTYzquw9zZ2qkdofdTvLCkfXAT8jqovGP9CJeEg",
  "key8": "2ptF9QTqaFX5PenR639RM3qESDZFWRyabVRvg8rmvyfcQqX1J2Rg9yn8HoAojmUKvUinW5K9H8vPXoUfy4nV2coP",
  "key9": "4PH7ej6fN7N33SHsW4tDoe5VGmbkEyJfyfXFPuC9oqgk6WdZYzqmqXoFqKoCC7g5N8CzouHoRFH2ccNaVx7yERSb",
  "key10": "2zJaM3V85Crqgpennpzvo12w52DQ8BBJsrwSEryeSBdcE7oZq1813J1pG3LZi5hiuGMoALsN9ke1M4mmycsSg37E",
  "key11": "3jSHBrYwJHDRzVWAknrRuSrW22wwhDytXy7BSE9mkT8iu7PQk9HZ4S37N2JoCiXiCoMmLgdZS3Lesw6XYis944ve",
  "key12": "2ejfuVyYwhtNX5axwnf3duiNWjMUT5DqKvDEuiDa42LH9ck8AdpAT8dXMUk16hX7d8VhhD28VANJ6wU2yQiyGENh",
  "key13": "58F2QqWEiodSkU155kNyWptAobYxKjUo8YkcpZPzDW7kBcCYzXJamh27KTHiVLsRrNePFb756HevruFpJmN79jDs",
  "key14": "373zHDhEJoxydJQovTSuNL8wmL9VucLJLqNcb1FKwVvP6bgRukpc6CJLMpxMVYWWg2ZV4WJ9rsN7kAKgtEj8reFT",
  "key15": "46NJb2of96ktFhaLuhYDc3icNtNMr4M3aUzqM953yQPL5p2PSy644urZwCMjKLb8JQnRPjdLD8UbRbVkppBUvpnF",
  "key16": "7ZBYH9HbuGys2pq5E3ECRnPBgKa6E4CrVsrGqYJdFnYXumL8wUWMr7THL8755THSZyejRUmJTuHP7BTEQCXMeKv",
  "key17": "5EZmzPgdg5ogFet6rzJDa8g9ebi1JNaAPShbArEr9nLr78wG7LdooM4JhNT2DZWvEbzq1euLx6cVteTTuMpVxZcP",
  "key18": "uGBvDkqVV2mwqE8sj9BD1sDdLaFiEBNaXgbpJKJVd2aSdoAZzM86nwvMBEXtw6x6T82NKpLuoYC7cs2DUS1Vwg7",
  "key19": "JeM67XHRmEBYdrbrz6SsuDTzaHbc8JwPsKsaJ2zwTqDc7Ddp7Jb8HV8iMeioh5F6Em7q4WXymgj28w5kvAqfcwv",
  "key20": "3hVFna4ipPQFhBs1dsV8DJoiE6RY5JTCKmUyx4EoTXLD7ym6JFxghGcr3eR4HRDEDCxbEwvgUvX2BH4oLE3GCjNR",
  "key21": "4Ja2zhsV2HZvvvrhUu7aicSfFcoU7rW18qN5w6K3GZqn2MMnRjWPz1zPGjdVt17iNB5ZqiozthbQp1yFyN4uGrWN",
  "key22": "5f4D73mYue27KobunM5dzghq9BFP5X4jkaXY2po1XnqPYKGbWz6gFfS53PrrTeFy6ucqzTFqKhWgqF7aXXf5cKeE",
  "key23": "8hExoBEP2GMVYiRRetdmVfuTxyE36F7pEcfS5GUvT2u4s1hwyrRFhYU9gAZuJQfdKKnm8Zt7pc3RXFWeojv866f",
  "key24": "3mjsDfPkvWPuCBNw56zCfTiBUMJcov2pyKHj9JBJjJ7kKuxTaLEsqsJbK6y1px3sSGQ76aWJ7ZSf8A5PS6XhKH72",
  "key25": "3z2ntLordM8wKdU6wxyVZnXHT9e3H8grezj4rKJNCjsZybgvqtX7n4kAPchHdNgXNotrwtku4LhcaUKz5aCpZ1E4",
  "key26": "2xEfPv4UFEJ28BESi66o3V79rd74y2KQWJn5ofFXiD7u4dTDc564UdzrNYLGNECJbWVgfi2eJ9Wkr8uMVypbtF6D",
  "key27": "5cU6TDMy1RqTTYBLB3WwFNZBZCbSZEQLLcUFmSRCCwcRwudH3S6cLoYhXhp8WSLgLz2JQCATGnjTR4QAS8kHYb2U",
  "key28": "4nbEqvd8huZ7ZRC4sU6VaxYKtF17UeZApQt1hw8FLzRHhg8dR9vL5rLdZCzXHNDPqXtWvVX3i5ArZXNAJCoyTfn4",
  "key29": "2fWxKxrmQYsDXkxQ1F8cqVRdCEUvkRM7mtbgim67wUMHo1jyYxtQ3WiHwqMrVKUSdmTSpkJ7jaaG9XgXkopKzFU7",
  "key30": "3rfY8i1X4fbe8SLqnmkqhWqhnV5deHKQaE2piSQxakGaDrrriFKNcfoAiUS5gygu3JAH4GD2cqzWqFaigLuHLaCH",
  "key31": "2nDdJAD2Y5v4G362VYL8zUsMtfhVDao5rmqYD7kCXixDRQgcRmY2Kwhz1xTukqk1EGuYpXbWQXXQvbMj5SJTG6kZ",
  "key32": "3cEN2eA4Z12bxJjeUDmTopP5HV8Rahy7ETyqCgCBkEvo6GHidQa9TeU4UdEUXpwzmQDToxj1F3LaWxCQHivUop8P",
  "key33": "2VqAbLxwM1MCEkTSqDUfHRyF5PM8pVeVR9n7qNc6QZxAGiZhdaWPon64c4H5XNMpPfHVzjGTTgP5rsoYrEADCT8a"
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
