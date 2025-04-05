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
    "2Jc65bcp9pu1aAZw6fyMaPwpmMjqcnuwbwJoWUPz2xXT4g9bkFhLQsKDzwCFGAszrRKLjNn8bFUDxP9ScphVNGBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25o6Smkp7Fz3p9CvtmYxWVZ3sqfxNsXX2CbWo5ZPT5qtihPKNarRGtZG1nKzVzuhnoK8dG2W8cUm3WKLj43BdyPb",
  "key1": "sLPTomMoiGpRj74aoQ7RFdkxavfvAfPiAwkq2dDBuwv3qX8CcUbNc88gXygtoyUShv5TB7A5jc7QLfF6tCXxgym",
  "key2": "5KGG9zTH3NaowU8f3UBYpsvxdwGtcW1zeh89Kxiz5bNe8bBU4KhiNH5Lb7T3iQbiduhG5JZ6sCMGAGBD2ZDVksm7",
  "key3": "35Kpdb2gxP8i9YCGhErRvfuF3ykD6FDCxfQmtwNvdFhrSkA8hTWCHYZqbdFCzWMuVFKGnCaoUVgGNwYT6RpHBRYG",
  "key4": "xRSNia4CMjgjKDBBPgeumkyPHBuhiP6BiCoNJppVCU1EVVeSd7SMgXnZqadzc1Jh9suhhtv5mDLE56qAe8Emdzr",
  "key5": "3W97QNVtmPGoVZrtf4P3fznfCo6co6T43hz6bbx6KqtQ7Z1WavnzDJqMf6bVjsqPZcBPrqaxFQ5L36hiDKmpkwfH",
  "key6": "5oz4j7p6eqiLAdPo91ZEPwSNYEjD5zkiypWvaHHdTp2zM9F4eyKyKZ3KYcrxvce83SCN7wzHG8sGdFGPQUYqGRgv",
  "key7": "3UEV83w2EvUbVxZQmNuCXGWutgiGcZWsFPjFL6xq5pv2RhCz1Js5wgzemvFBnjeDU85HdoZbeHBoPRdB9HaiKAc8",
  "key8": "2UNyiPi7S3ohFYmm897JnfksuuD7SsX19LS2rgYARwMqFm8C5qv9JZXwVqZTHePJ4vxMeKHE3vofShsmuzAVec9R",
  "key9": "4vKjCRifnsgkY9pGgJadi8KJyU4yEPT5qMEqVxABSvjav6SJE3h7JwcZHRaakxeUV8YGX98jjuiRPiTWyWQ95t4x",
  "key10": "5hetjBER1FnxfYedYEV1riXiKkLcRk2nQiUSD4zT8thgsyveVjLiRPZaGWHPw6TscnB42r38rgUMGUgBMc7S7397",
  "key11": "5M5YkVt8epRSStaDgQe3MBAA19zjmRr9gx6AhCBCvvn3Xwe9zwGxjMSfwY3Fqf5XYpVa6ZQLKWbDVW7Xm334HwE5",
  "key12": "5GT4eFr1Ex5Cv5BwCtfvfgbrWVu6ZzJJFQ1LaBNDYSkD9zfywmkcvX7WHD1p6fJSuhDYGJkZE2jm3Uznn2F2f6EH",
  "key13": "2GUynaDUUVdwUo43fYDnUZq67sgFCjYVVGhBG3H1wy5EB7p28rfu5XXatzj1WaftTf3ZuAnL5VmyARqLKNnE5UNx",
  "key14": "4osdmbB8TF19jgdo6vmrs5WGxmd9zzovJUK47osUu6inTMNVUjTixtnCvwsFgSyhXKbmyLyqfgh3cKMc5Y1aVLNi",
  "key15": "4EYFUAcQ6nGN5946UCbho7qKsT9UUnKAPvdrmDsYKGTG5SkG4XZTvAvkGmED1NPNNjezCfjy7AGptqVPoyxP6NR5",
  "key16": "5g6TGbKQL49dnJkYZUmP9KhMp3md2HEiMqPdJ9gbNefJ6c66rCZVjmQFawrq2BfoVmHGcxrZ9ui8rrXFtJhHQyHZ",
  "key17": "219mrdyFujir5VhbnPJdSW2D6q3iSjWZxbrHttKtJbvSGAFSAMuctUNTwQbfFTuN8y3qKoJq7Rq45LHQnDogjZq1",
  "key18": "5h6WvDrW9PUZ96c36GiGW2DaUUv87V4hyzgLvjYZGJqobceCrB8DT5frXCBrDkbQ6GVADRWGhZx73cp4WfmMK5io",
  "key19": "34AcmhBt3YfzWnjTBbkJzxMUJq9F21KCPXbepNKos4fwrvaoDwoZTfcjeV4ZRFUMtZfiSzWAXDEZmpTKuYXTZmxo",
  "key20": "SyU6EAxryxuhaFreZfhTQuxvEhMa2MYA7NiXxgftHt8Sb8D1cGCWmosSGD3sjLHqT3u3TfzVjc4yteZPukNmpNs",
  "key21": "4mAGf6frvmvt6daS6o3BE2J6A2Lj4vYPBvSXqVLs2eqQN1BC2B4t7SdUyoR6bwYFsjw14ANt2AbdfeJ6CHj1Ru99",
  "key22": "4og5Ed3ZxiXhfWzRdWmsVik8XZHS81irYA6ZdeDWtcWAgknE4CmjsyafqArbdBAsyaQBrbp9ZoSVdXvUHn9MeLuw",
  "key23": "wXxhqpvt9FjKAacCUVHzLvztJL8sX69VUGAAWhNj7EtVRWjBX5TR5V39bSHzRWoTsmJaNUtZkdgL5XhQb93Spbp",
  "key24": "3VVbgrBVWb8zE4W6Uwa9tMXboXb8GmgpjSgmy2mJscnfFTxtf4s7Jak57NopfYDQGyhwwQMYvxACcEzTk7uEkGCQ",
  "key25": "2Jasegab6XQzjtcTPRW5X8R7BF89WgPfmr2wycRX5zVTr6pagNoELYHtRRG4YzSvK9MaVoCXbdKJ1gcz2PdSrrgj",
  "key26": "4AAS977P2m5wraLpUQH2CVvJ21YQRocLsw5uTrMGvXFas5wocS9VB5pqkLUCN86UXyVbhBZ3Ng5CZW8y416uxpa6",
  "key27": "2isjpY8U2UNSvVCdWRM25cNF2EBoKbyBHQBZ4ny1yKzhGpM9kYU7LDz7d3SmGQPqRDyo6tiYMGnk8iw3AyivrCAr",
  "key28": "3QToC8i6CUFtREQcwmsF3xvKa4PM1WTrLgqjv5fQocRPrvtsNB8pWDpZtYUV95WTy4KM4fbKYzHWQ9ReCQajw3TC",
  "key29": "5K2AQkSPSEuZa5mfUz8CTm7Ch4qoqcyMy7oQiqDhGy7WjwUrT1yumXbMuKoD9ZQogyax97q7FBTZorw9ZThEtvZk",
  "key30": "4JMKSxYRAZ768kJHFqJv2gQG3Vmp4AgjgTQaANCYoYAW5X5C7NBDyDkR7HwJwdTUfqCV33VEVkLVm7v2tiJf75Jd",
  "key31": "4v1zvKk9AJ9FLrB489JW3n1sfXs1MRnAGAtFxxUhj1LRPfZY31yoZcJBMZxA1Jcw2i1BtFBxpWwT5KrDoMyDBjVk",
  "key32": "66BN1ZKMdkzQ13SPcxN36MtkQf8a3hL1pV93UoJJSDwAYdWrmmFqpr62mu3PcKNXUfR3ehhDDxsggbZtkM12ApCZ",
  "key33": "bh5VporWqj1MLE3SRB92k8qAHGkBa9ptBep4Rusp2sfeZVyx5UAtJ3qdNcHwhBTNL3cYYTR2wFTPms8LMY5UC6c",
  "key34": "5YqRLmkiNkRK6hYLCr7jLyiXQvgW4YeV7gxvNfoU9qfVm31P8t5XmFhENypVeWwf9sUgSKrpdE3fr6wVVVVdHmyj",
  "key35": "2vb1hJm2PJ2vLMet3jE811tsj6TW8cmXFbPUDBbFSPtGGx5WY99JL8ELGuzsEVQwoiVsLNu88HU8UbW2YcTueRmw"
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
