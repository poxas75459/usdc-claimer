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
    "kRpDxsR1QP5don25pNgfkjmBeuJv8aDEjD59iRcQ2aVD6HEzWFZSMgi9pnLwnNKhfPcCM5iDRjEjiv1doi6xX5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W3TNoT5ALNF5VW6GghqKLUuAJ1TpVDyS9T8ox9Yg3QumwACPTEiXayq3iqVws6GtfTcw7Q4GtuhaDGC3AVR8CsA",
  "key1": "3LhBHoa7oTSHw7697PZgAqdA7HTjS4x9SxqHRSskbRwi3yvhaFR3N5EfTDGufxodE1x1Voce7sh18om39ANdtr47",
  "key2": "23oZ6B63v4MbGjLU9SnJyvdfEPMEdST7EZwgxhn1592LtM3zdguvGTKMdKbvxQdNZZKVwvBwkvgT8vUZWdXJ6A3x",
  "key3": "uRDWeTKpEGMu3f2Dx5FbCS8bhoF65eLXVnvtBuErc8LgALnARDSYANzd1jLVzRR54L1wosuqwCDFRBMRjp57NWN",
  "key4": "4RupnreGRiyCgLQ1qnevS2h92VneDSPXTcsFzvEc2YdrWjGUfGR7Nemf4fc99xDNczbGFgbZLvvA2ALeLyyLHcdD",
  "key5": "3hFyiRgos8DVmwQs2v2pDU8Ez6RBSJTbWNrTBoP2KqyTEZKeNWhtZ5bw867PuGKtgnKKxWk9JeEYKKob84NQsxFP",
  "key6": "4ojUmKiznewg659WDru5c74x1Vh2bYzToXwD5dRzkF4uc4jkZYrQwjw3HjENEhXkYm6sbrFoTocSz3TPDjYh6pqv",
  "key7": "3NSDrApbpwGdpotafqpsYfNPjGBjfZvMS6GR5QWUnUpMhXUULaXH5PA4W3B5oGzRy2EvYrNkGtGV1sTkHZu6FA85",
  "key8": "zfmTjxGrPz9f3qGJqhkvuYaSv4BXvGy1bgpEkZcDubex2Pq5YCypFMQ1Z43n6UaasD94QgaGZnMDTa9DDorKmuU",
  "key9": "2Gw1UZS4c2KoUZ6H5BNvab7L5ei1RA1mK5Kpr5uJeEaERMoWzkKNnmqrxvEfiMcguxJuhrxb5xkXHd2W1b41nBNz",
  "key10": "4DZiXaEwYSAeGY5yBcVEp5tM4zpsULFi946KZE1cfM2GskNcoy5TUYxpqf5Sje3TAuLRpmg97Y9qVfVZE6ferYNf",
  "key11": "4dmmmNkzxMr25x75E9C1XDF3GMNwA7H14PVRb6yeWro6nf6PjcjHTBW1q7G3fsjAEZxwhcKmBGtyea4HkPuwGYBE",
  "key12": "2u43t5pP187YUmLbovGv1Apb4mUGumqZgfD8op4HnGoR7wG41Pg2ma7h58mTdF81eg5A1JvtMCnyBGJvDbu4ekSm",
  "key13": "dwiFZHpS97FtKEBwi26wX7Gx5pA6GgNTow3Z1y8MRi89bihpWL5nL9hihixmBVwkRaGATPBF3Z4DLdS1SN1AgQ4",
  "key14": "EN81ra88h9sjGWbqEbubs3oM5FbZMwmGZwhF3VZa2BJ4CpenD65YxEG3YwsuqdspdLKkSzyxj1MvLVuayAVifzu",
  "key15": "59Zag37h2jDdiVYi7necwqEF4p6aLKCfSRJRJnGoPUiVnzaHdpnn8pRt7ALUa8T97miN6Sinq56Q35ZFKEpcQZzz",
  "key16": "3EdGCVtEaaKhWVif7gRH9jHJh3iKvBooKu39T7pihfUA5cneq1j7k1USStr1TaKpK9VTisFq33Q4daNY6AHXuzaa",
  "key17": "2PK9vJrWPDTJvEdc2WLDDPUM93jpPCgo5fx6KnMkHi3cgQ4b7GthZRSRq6A1osvYudagCs1cZYhnW9g6YeBf9t8X",
  "key18": "4jMhWz4aow356Q697C3gKU8MWP9iNowYxqzQvZqRAkEod6k7KSF4ZZ14bhD3yjXKHBgzjoQ8mkUBKed43EZds3Dc",
  "key19": "3jgxWic3rW5CXHFC1RjU9eNzZKn3MXUyijqgKVpJmEHu6Fk9LeofdbdWYAQ65qFgDgFb2WvFP8fHMAgCTwDEY5Hb",
  "key20": "3461AQQXAT6rJfqnakRsYu6LagjupUGuKfFDt2Sgh7JmbdZg8NJra7mpNbX5LY4f5VuzZGf2D5MpFYFHohcQUx2y",
  "key21": "5a14D49YNJaNgAgqXmXfteTSoU8tqLiVniijeUPJcYycyy2fJqyv6kgbTYbgbUb73RGAdL5X7MUDGVfJ3dYoTnuv",
  "key22": "4eZ8kKJbNdPN8ffLJQJYsZkXko1zF5DBp7VcWbsmmUuu5ruecoJwNTjFXE1oUKXdQfi621eKnej62LwcisSYrarU",
  "key23": "3GMGHSLzNDkTxNkX4mFPK15jf4Hg2KFmqVUDtcwjZsWQ19s9KgQiUHHvA1RGfWEge7aCDXhVN9xe1Y6yQr43H3z6",
  "key24": "4xLDBSnuYqLa1Q5qavwWMnAYoGusbP6pYcu8hdXZFj4C3Wp2F17tmv7kYvPBjyPVtVTC8PVeQaVY3PFAnwh6bbsh",
  "key25": "2kZnpKV8TgeHwaAVPrexxsETTrVgoZcXXK4HoqojfzEKLTCxtn8jchoe8xRPLXemBBae1Y9fwnAhpBYHBpQRJ5EF",
  "key26": "463yLT7mG5smNeXmHsi7N3eyWQHHbJwYrQ8Pkj8nvmTKTs7R5svMhEdJR3PakFLgjgMGwYp66TAip9KTEXdNxpht",
  "key27": "3YfyBhLFLzZaaLc2LwHKJLyPocTk1yPj4695dW1kexWkEPAN2ywFV6sp2tsc22rESA4o3DUoa5scPVfxVXB8dfeN",
  "key28": "2f9Pjzx87Zag7SKgVRpAjFZ4o7E68jx9N7qpS8FjbSmuXEHRRcCNYYgvFAB28RooS6zi2YkCpHciCB4RxdwynnhH",
  "key29": "3p7kpapWnCkYqNCvvSFoFxX1agCb5wWaqo1LU1ppJ7f68hzJF6ktLaEbGbfVNfjh1EL8YD2auF6X1BKFDSD5ggsC",
  "key30": "5Vs8k41jtfYuwrs9c83iaJoxUsHvqSpX9imtHpXmvyiUzATQiEYdUHPwX6NSfmGvUFJmtHHx25M7xYS5WKcdeXtk",
  "key31": "4uTZnkAJya2c3oMxm2ULjCDRkZf6H6kCSsjTQwXEYmfCyDK9SZb4rUtLCzHZKm1pUW6H3QF83Dwb5Wq4AWfMkPbt",
  "key32": "3CNBemiBQ84vmbscZj9n4cGQi2iAimA8STAtG5hrxNnBY81gBfHXVMWkehEc5C9kff19Z9G1a171R2a5M7oYUR28",
  "key33": "2ujqn83Qkte4dwTWB7qtTV5fZCtUrWYqdrHhVft94RATRV4XEUTmNEe8UkXqRj61o9yGCgbe76QFYfkzyoNpcixJ",
  "key34": "5Az9zKS5PJbSGtymbsmZLXXPt4KhV4UNLtzb5SNDq1UD9EJPdpzQjVfPhPPTieKr4HfmKoN1NabZfuEVf8mq86rH",
  "key35": "3shNpqJE7Dv7Uxki8GmWdqR4pP8WZDWQCbpSJj76WiyUfo3U9axbyXiTpaLmnd7L45KoytNbnyt7jFenC3NSLe4U"
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
