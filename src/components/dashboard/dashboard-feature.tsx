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
    "4ghcbPCjGeSxNqPo8667MLi8w8ENzkEDNBKho7AsYQ6BnDruuGMsSWMrMoqn1zCuvnD5Lk1caipJvUh5SyCPYSve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SSi6VDng3dbfW8PSpkHxquKJmC1VK1gfNPZEm9uxGafJunaMh2TRtHyftwKs2zyNW35sgpKSZawiZtyhEjhPXDK",
  "key1": "3PJB2gZvVUe3zDDqptw6gYQgvdDSqmDQX26nU3fyQEUiCL5kwXxtWq5zcSchuUX9GtK3TNkACcUHepuwn5rUM6Q6",
  "key2": "3iN6MykYGQNVzaKUT8RZBgMbu41gmJpsQYFHLVYT1meS3EB3bPAMFpgszQSHEBp9652ykfUbY1BeRse42G8P5rX3",
  "key3": "5txgsGBaiaCoeWC7TBWwJmHSfpPMLZetoXw4aYS62UUEHtxCzSUiyo7m9vHRppCNfQyQv11EbAqhNRaW25xCcV8r",
  "key4": "9fEFhiio7cXs2ngL5nCAAHxeK593LjSAs5m32i3B4vHCYU1jbpfBKy62zffg1gHWSLtX6vqAqNEBNjKJ8WtxmoZ",
  "key5": "2GZespKejGxQs18HQvz261uFx5i9zC8gYcF5EorBhaZaQ46NeLLxLbkqz5SfEmYEX3VtYAZiPoUHeeij1uzXFwq1",
  "key6": "4aowqfyFHMUnDkcBdZaQJuGFwoVQum1ZcBjH13J6b7wuT72Ui7JYhtQnXs53zsNCvU4G94PFg7i6ACnJ4LgTytCC",
  "key7": "YVFQ4r9KyMmGFwDFmtmxEqVogcoahLrxDfNjrJfXhTekci2KRMU3xyhjWcQGood5mBcmQqLPZ3S5LwEh3fPytKM",
  "key8": "4LonCqCgDdk9D7HE47AXwAmvxuLL9Fz42SMe5TCckysQJZhRk9kStK49uLxGUHjPR61c44965CjRJj9h1s18SCNj",
  "key9": "WGqaZecGVnibrSTR9KHnkiAAu8iDarFc6FRRSaQMxhR2xvTdveNYKRc7CXtYnioMVz8EWsjRQUjmGigXfJRsvgY",
  "key10": "4n5Wc5QsGbxFmF2UjSURaKNgL2t4Sy2huKqvVrNzQRryxVG85kvxnzqAYPTsz7qQ5QCvTokEAmgsc3fjrx9MHTuS",
  "key11": "38f2FAhn24GTBG45z1TKr2CbaqLikVdwKqHtBxeJo7nb9uGN3uHYUS3XBUbJfgo7hzExG7MEb88upo4Du3pk2DuD",
  "key12": "4qivreLBzmmarFkS5uxgaFxZs57WCC3FjZZBiG6n6TKPMRELU2NPoAZBdbRNK9wJ5r7tpJ6Z3moa9pksUPJniB1C",
  "key13": "59NaGGC1nS8GpsE9w7gx3udUUCQ66JoaVD6YCyCCZiY4kFxzWweKoi7ibN1XFedLr3mkAhsX86wi1oMoCqffyKFk",
  "key14": "4ugvLq3esKeXce1UP8KSNWCvd9waiZZWmUqxce2YnjzBXog8vdAqFQSjtg3ab7YJJF2H7Q4CDkBHZG9Kop7obzQq",
  "key15": "26YYQygYuookWLqEx2EMCWvkWRh347kaSpBrxp5JK8cKWcWjH3hKENiAL1TW4Ev82Lhf7geYGS3QwWktXgAtGm5M",
  "key16": "49kq9b6UyyRYk5nmPKFgP4Z1vCQP8Bn4FbAFNN1sA9egLjGdpk6Yf1oXz9u7aNrSbfWvjyRL4pny1dvrtUXq5ZSi",
  "key17": "xVj2iE9jBd96KmF3BuuEDzpuAJHbYE5uJ29WCBNN9B3JVJGn13apvampk7Zght8kRihThY5dSEoxvcniyPAKv3r",
  "key18": "2cDEwUFt5sEod8ugS2vgPaJywmqrwUeDWSvBp1aLE1BfyrchHDa9wJGtmzdGNWeqeiyS5bSTdfkjxc9H9sEcdNgZ",
  "key19": "5KKADgcLEVTsPbgEszcFsNp6xuVmG3etxp4c88DDGkDHSpQusGz76g2qQf2TattWrLjhStdW1h9h8SeEcinbFpoT",
  "key20": "4YNMNxGVbvQQ1ufM8RiaY2meaBrcciFQTCeuGg5hFR9mnAXXL1Q9qmgMgL8ZqMzBRTqgovcrfpUEHbZhBXW7RLDi",
  "key21": "2GKHTnaa7CyLnL2p2ABmSwydAsoVX3VP1gsLzWQNTfWyqNneyxfqLNaaC6c42f3vZY2k6deyiUVdhnrCEzzb1qqr",
  "key22": "5jMwRRvq6gXgrQB4rHCiJpmMGaJfCzoYKDRh95Pe1CaowCMWMYqfnoJJrS43hbSewqgY2u6D8gTBJ4kdbWSXcw4B",
  "key23": "3BBinrk7XfnkhviHJxS1DmGPREG99sgbP9ojubdJKb8R5xqBwQmhY3LCuLbBxGnmwDVJcFvfCwACNZ1EcsLB8j2m",
  "key24": "3CgJrymApqA58MUFsNyeux7PFwhw6Nfpzu6qDiqHEJHjD2FNWTZ9PYg2VXnSL8D8UuRRE1i4aFE4rs9v1Vc9T9tS",
  "key25": "4eBcYmgmJVkdhJyxDzds3rzFQmL9g6X3MdFpbHXGS9ESgYgmUXsHrk4sWM6mYqxHpPMgjSG217jQF7ozX2r2fWiY",
  "key26": "23m1r7Zs5LykvtQqnxBV4KguPTByooNYUDNak8WM53o5ui9go6GRyzpxiPgTYF5W2HvdSCxHTKJ2Aan1KnSAxxRM",
  "key27": "6uC8sWsaVbBjkQ2SDteEydmpN3Szrmt2DuNpBQ8Ag83TsaTZuMDRYbqjeHwXWDwPmjftWbJdNadcBMeycFX8EGK",
  "key28": "2QSH9SkvtdNqfzQCuFPWAomkN17JLyTY8oj94X292fW4UMobuUFZ8R8GcPM47nfq7XaJEweZWA1bj31gHJzCDrSW",
  "key29": "2kubwUT1vEQkHQdbmPSrjge8Km88cheZnUpPmRbPicRw2VhjHAA7rWBKTECeYQR9UXVv1JjXoDZgmr3tjUQaQqMX"
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
