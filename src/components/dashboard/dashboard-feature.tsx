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
    "4PNLxRmkJeBZoM9Az6xt6Jw5JkJRijd22RNvpdBzBPXPri3u6WVogCn2dEu94zGjX3tmhXtz3K9gS3gLVdrvnz1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sjNJWt4hSzDTuKAkoBQCTUorH8tFazoUg2wrStBJjmtXszY6UhZq3pkheunrdaY5rES7mPsag8gJT2qSgNhHiMu",
  "key1": "3jAi536mAbLFHzp4bVZJ3AmXVyk4Yr4UzRuzKLAGYgZN1GJJC8X2Ce1zjkV899XqbY1cpwcdA6tDAJG69CW4u5fh",
  "key2": "3abeCB9v8GEaHGbm4j5hVrz1mw7M9YtKee27TN2wdnDZP9wp1tHMrNuxpqQW7q92iMgP2g96GaziMGt3egjiVjqx",
  "key3": "4txSV16F9kDurbhYzFqEYzG6R1LbSugdJgfjVxG5ZyQPNfqyWRYyPQv3PvdeCzGZMMBJPtm2qCa5DwhecF2Hrigr",
  "key4": "22i7y2yMA6Lg8RJsTamf1Uho1mhzpMPkTMTquAsxDztLapzHvuszmLwWXtwesje5eJG1nP9qGJtKBAkshzD98XEf",
  "key5": "5WsAZ8jJKhgkv258PtSoB9s6jSBhxCSCX2RjFBMKo2gipyLjB2vbiKu6cGUbFRGFmv1cxngwr3myoiHvXVaAakYq",
  "key6": "5Rce1ribfX2z7Ya6mWto7M29w3i8qAkuUwurVTQvHvUznCj8YG6wMqpcjUz26kYEx7Vn2N63aJ5G7cFzyx6fCcTM",
  "key7": "5HjtuZxjrRctpcPkba7Ee7nFsAWFvyM1kzKNeFoUUKEYwg5PZPM6FoSZ1oyXbtdD95GesSeS8nUn5ZhEzsm4mnJC",
  "key8": "c1Z71XY3jT2F4whSaBPYkvpBJwqwFEqGjXXeesoVJW5xbXUZNAV8KucEetsVTQ4DdcaYMi2XoL9D3wrABQ5VVwa",
  "key9": "5kJhxi3qp1YzKGH8JgXaFbG8xLsPftP1t49kgR6uGJNEGGB5NDmMu72Uwoze1UHqY7bZM4APa4aDR6nxyVfsHtWG",
  "key10": "3NHZFW1P89LYrooUBwPfn69wXr8omad9tNpw5QpFwvbPEix4wA8kUSfzmYmLgYZwYeLMrxGrev6yeteNGewKgRGi",
  "key11": "4hyDnBKJDed3Q67M1HVjFC3GRz23C5VQUnWcEDKDoKjbNN9UcSLdTj6JVyMhM1RfHK27Ynqij4gHSm8rD1vmQYE",
  "key12": "4Rt7qjVZudrkDEbyYSaL4W75aqJBG9qphMK34yWN8ZUZFTcTnyVYvP1tScndJ5SrLV5ym9Udik9oJGxeQn8mti8",
  "key13": "4ZLXLwh4NE2w6UhBzCknKHhZhTPnLwcHqwxuCCNxJGcjWPRGCyzNQc7r3gd6PNvJU6eDFAEfaCfpWqdcJ8QEe3AY",
  "key14": "ggQTMi4kkcDTRWoMfzdGJgfTZHXBAdR24fKYcDpBhXUb639pXZvhs3uJC6qxxjze9rSkGjDeH2qt6ncMPVCug9y",
  "key15": "9vofP1QohT19C3H3sA3audCp8BSuenn9Mj3GTNNCaj4ny7vkDzrrNFMw94nSyfofBZy7hqx6NmJWDuqeqQUoURW",
  "key16": "4kMsrsCBYdBzsQFLe2NqPDB998XmrUHzL8Fnt4AyPqU7jHXrdnigUEarP1YcvKvDg5AhybWcAYYcFdG3Nq6UJX9b",
  "key17": "5Knq6tCjYVgq2NDeRvJ4d4w7oAehAYrGxwwGAcL9XSfJ3puNyxxAYn43Dbcbza4ASjPAAbv4wE7kuZRUx6yfmLVm",
  "key18": "4BpUFLgyosswZ24fZFK7gGQ8ZvLMM4ZHaJne2BdNo7AG7hjmfwqFNPwWM9dvBzB1uuzxnBCudt1bxgvsGhStj6B1",
  "key19": "5J8q1PSJuBWLAVUQgERRvBxRnzToydWhxETaxSpgG7kwQBQhi9KqqgbprukyUUGSRAdjGPmFbfdkj7YThaLieTGg",
  "key20": "3m1dC1fUuYBELGuKwSZg1WRLWj9p68v4sFii2sTehxHj41ttHecNpZKQZyxWuoUxy2Hq1mKZhJYEuCzcfGC62MKH",
  "key21": "5jDY37fymNnEtTSH4pAuT2psYXNogyeJscXx1RgY89Cp37fKMgeTVtcQtF3NmbXCjDywcsqHHqMZfY6dWrmMZjDU",
  "key22": "3VuBGpiRzjq2bJ1QVyf2vyEHVDsjB3FJSi1vHyLPrK4dJsYrTzuGQc8ct3pPjHGgvwvGbudahoGea7Z5cgxcgPNU",
  "key23": "5FpGsmP9PpcPzDv8Z39N8mc6RVuXGf7wRnspoDgv19wnvHsj9FYt5aas9ydPDzFBgUP6o7r5VjGYsiyV6Q63sNL7",
  "key24": "2fyJRYg7ThhtFWsTStNHtBrJbjKYC6jMCDp8rQTeKzjeEnNhBwiAHDzDFAa5AjfpFzHYVmx4g3zrQdbKKpwcVADs",
  "key25": "4rMvnS21P2uG6PUPANRpMQsBuqKSNEyr56cPjEv4CR2w3KxPYsyXEKmT2zTnUEFV6HxmbgZePt3DFmoG742FdtU3",
  "key26": "5rFahNaCQg8uxK7SbZw7TQmkKGWxBmo3AVtUPGYiUQHSY8y5x7apJhzh4bTAjrUTJaFauURUXrJBi8tFbBaEB3eL",
  "key27": "5eCMR9EsSKqWsoD6nd5QbtnzFEnfm8aXacZvsaF4JNfQqr8rR2ba8t1UzBzzoEVKKZRKDRqSkjoJFVVgJe15Zna7",
  "key28": "4h7v9ro4YvALTqkcoqmgtR2vUZaqcUwTH7viC9wm4tJAzuTeU9xjiVK3X8Q2ZCa44Nci5UkYk2RKqZxAeqjij25W",
  "key29": "3KdRocmxM72MQ8VAAp4dvEd7ocWuAgRxzNkwvcUe8c9ZjkjtMN7oTHYUBeKujDkc3EjmAeiDWN4MiTLFCFFazK3A",
  "key30": "fkbexvK76dm6RapopW9DaXMuoC5T7MHTj7f314zS3h6Dzp7J2LTeC6382pKhVevSPqm2TNZqVkftzWYcB4mKPEj",
  "key31": "2ximsvVPeMiHr42jTonmiEDfaPBbuwdmgRwokCu62vTFDa7LSDiUYzEhkfN7X4g1hG1Js1RnXucNTrQ1S8pn9zrX",
  "key32": "3a16AafQoY8moGrGauRayn6fqdETxCtXGZZKbJk6D13AjG2H3PBAUkrwoF35whw9LrCvLMtW7C4G7TkPokyuPjYp"
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
