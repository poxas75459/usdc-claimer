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
    "34A4SxYgs9frmJVU4KnZ4t4Eok1ajPJktBtvExdePi27M3u2WV9iBgWH6MgoNvT4by9S9bkdCQ2xsxAK9uinBMxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ty2FNNvxZDE8rosxNHASvhgYNWsL2uQmnHPuUZ9JauBXWbF6VXY86XLyxh9EcrqjNjMpmdHHcNDedtmBntUArkM",
  "key1": "2tEWh8WDavWtLtad9Kyoukk9CFXNiLS3LiYPJRjUakJenK7AY4fYjycSsLhHZmDxbayzXLAua2993SBHd2XJQFBs",
  "key2": "L8Ea1aEhc347DN53bYJ1XRZfKDdJLPWJcUrxKvGLSr9H651yvwe74ZPcrP2tZE71eLFAfKAJKyjErDEHUvZygai",
  "key3": "38nPFifBsnh2g6UGiLPparpzgRuk5DFgQV6gD9amjHjGhJGiF22NYuFt615iWqUJaaCbo7byLq5uxbJs7xkMS5XL",
  "key4": "2QjCBLci1ePaJ8Zfk6sUu5QdcRgm5p8JmbHa6BEq4k6wbZAukSdMDXndZR5mTDGBZR2mqtNm1SDhSqcrapUw51S",
  "key5": "64ekE4KY2KqJpR41VYPhsPj5aSnYPRZzhFWUf9EdFeMarDRqqwWYfRTFeygvQbqznsATWYpsk3iPF2pU9qJuS8th",
  "key6": "3rA9uQRt24sDEtBz8kDvNh3mD1JATTfGqr1sx98Zd76USH7pUbXHSpvJPZBNh9L8XNe5ZnZwuL2ptnbXnTQ7G39n",
  "key7": "39fKc4VpFHtjj74Fg3ghko79nCM6nqdd4F3V7GxSK7g59y6PmPGybu4YQX9bEVXqFTfix4tskyW1WfmV9xJo3hLb",
  "key8": "4KQEXg4bFim3XpTE4d3w4DMZZAfgG9vTUzncNbNMsrbwMeEBRAWVTZrk7fYUcy1Um9Y94rsDVzhnXuvLtwqqFtw9",
  "key9": "3ZBqyxaVg2ehmRGiHGiiw5rFrrVvoNknGkhsyijQMRoriKkeeu3HqJPM22gzjUiWtznhTM1hS4frTdVgk84vhggu",
  "key10": "T5h73ftoJamGyN8VnVbf4gCmBhkmYA6xVJPscgTtptZX4SMLirbg6QkfZLBqFsh1BeP88EHjRrZgLSonXi4jLVF",
  "key11": "eCcVY7tKhvDndPaVptNM7bbwivFyzvm6JQqmERAZFzQdfQBCp27Tg5kNzSiDnusB3YRidzscUJKJjYfzLY8qsvK",
  "key12": "4FC4vjPmwiPQyFyWi5f8fygi6wBtkVWUguUehPV5cQyAT9xsPDH47fpjZMiJnyKpfNRLYuJRdXftNubSFsA4MdDM",
  "key13": "51e9tfJi8kqF86BJVGKSE1n1Dsfzo6san2UryiPFZu3qzxbohmrKp6JifyCBZ5xf2eTKcfamWDj57J9BHdrqWBN5",
  "key14": "5EpVbQw8uPnxGtad9rk3kg6ZjqmfxU9Y5oX5PSTHmfJV1eefF1d2CihEtGkz3qDjpLthHAaKY7CfyhxSiYdPUF9G",
  "key15": "4ohdMujjfovR6dAdxjMXteekrumWWEzaKKBKYWae8tJ32BAz9ZE51ETPebnHYfMV5Y1rjs2SVk2ABV1gCUiQW1Vc",
  "key16": "13VfBcF9G51dmoEAFbXu39iaeFeYYDXNrzHmrArk4B2EsUSd2T1nPFMdD7x3x62RkAs2HoQtCpu4xrhBjesaG2H",
  "key17": "woTiqzmp3a8jpWMJfG5j8nK4d1GzD7w534Y9UHgTMNjFaha8Yi672VrmzRVyDUfk1A65m3kMzfcJYUHzgmwHPcX",
  "key18": "38Xkmr16JpLzH4W3J697UexEgbBdMj73UydRWdiC6A1qRS3gxj4b79CbShaW5Le8q68px96DhbhU1UE9e9fZmbJE",
  "key19": "BEEvktCgNQma2sAvjXwMJa8EnsEF3FZk9tFcsGvhnZBgX5hDnGUP2BLhgvVdUU3v1D9sUe9eaXJSya3GQLu9FFq",
  "key20": "3YZUJwHDR37yDnNGWQ5WzLEJ9JhG65YNrT9XQft6aPTULUmfwFmg8DKFgQWq1oY8wXFAwAJnCyfYGa8PX4qWLVNs",
  "key21": "5FfeeBMghPTf8YCT79N3g7in1GktnscQ33EJTxrqZ5yeXEYWWEx9WqLA4fZDaeJjgTLiZpXxUP8SkfV2LjKurpC1",
  "key22": "3jmnpThrVAhNARGt32J8wSnVHpy49DDaqqqAxsLACuT5mai41J5bH58jYh2ZmhqMzMswM12NZzWdREwmXvAFEctR",
  "key23": "hLisquLY1DuUJ79wnQ8EPF1UZ55QKV6v87UHEamwj1Pm9FXuZQXTXSYL2YpmU7C2icGBbnZX6cAohvyAHvvaZLb",
  "key24": "3jsNrFqFhD3iA9j2iGPjohr4U88T297mdvBtGMyy1VDJAwZv1HJxDE7R6JRcYqEbBakeWWLJWH8i18ZLtNq7HbCf",
  "key25": "4uBg3yBAGsHoy262Q5peHgWkJmfUnokY2phhEexy6SpHq8heX6ndi9fW2qAZjDxNs4emibk83FYPim8Y1Ddwg23j",
  "key26": "3rJcNAeQJ4EJBb9ZtBABKgotVgcYFz9NifWyLW6k9rohnTZqtPFxtMcjgokJu5aHsgW3HtqepcEhm3phcejLr6hm"
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
