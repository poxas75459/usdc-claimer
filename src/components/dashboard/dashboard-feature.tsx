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
    "enQcfhXQ1iAU7CWAkBa3s9YepcqkzmnAJU3VKeMgKZqF9HfyKxxHH8HXEMxTJGtbiRGWPUC33goXxRCQ9UuR1oy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YSwgub516PPATyx2bwaw1rCyqYRivqTjX2u2kLND97JnzJB9pzsYR1qfjpKR81JzEhMEiJgq36b7wRpAfW1tr6o",
  "key1": "4y5EFxUuD2TA9ar43kXQJjTmhUXzamqsZDTroSSkzdfkqPpDvBdDsKhfNYKaDHYKMmTtVdyXqKMU927wppG4KcBd",
  "key2": "4x1gRUrbLn5RgZsrpbgHHyFU62RmjV6D89KNkMAczhGPXmP6HdSVYhyqhiPvNe4Xed7oXZ7TU1zrSYi9UhU6BJMC",
  "key3": "5P5jDNCDDreCdRxezUnyHLy6Xf6GM2yWUoJNqqE93YY4RaG6qYq3XDKnNWWMgVzxqKdVp1TWPAxh89zVx1cFmaRr",
  "key4": "4otMmGhc8vWroPBqzHubaHtXGFQL7BqairmXSar35TmbvhqYNPoCAs3TJ6LqfDDPNqJvZTLEoQXwxdWpjJ5Dxy8J",
  "key5": "38maFz2su7iCVcYuMXQBiJt5kiHAezEgR6LBrLDdvhXNXaUyQgX2EExHRm2ZMDrji57n3sjxqvFizp2tLMDrTANT",
  "key6": "26i5gYm8qxQK3Sx8jxYxKVKCHygm2MfhKwDVt1bv96fWu1WSbbBPGekzHaoX21t6EkyYEH1vs8QiTDmtqWsVPdiU",
  "key7": "3esY5RqGyGwDXtKjkVRkCEd4Ldupe9ypj6GjND9FM6inBmWRWTUnnDYzEVd4gvv824cGXH3gVc7SpmBp7YReRQEF",
  "key8": "jWvEjqaTLZMPdzYVCEuRuPyuHC7PFQrxLLSyCX44THbSxHEkg8Pe8j1taHi1FCMU2d8vbBNZjMbo2iHZwZeHdMo",
  "key9": "4QWmHD69XeY6DzHmDXP7UN9b7pHXtqtaE3BGJZscUBpZ6mpeW4uCSU9wKSEsy7sC4ZdxwHfCJ8Ps3sjRP5vjrDpk",
  "key10": "3FKhFM6gqo9ivTMpqoDCJMhAHXFnNxF9WsaxJPZ7K5ZeLFtiWLZp5ZsaYSyK35hjMtbNQ51dtW5voRsFDFhg9M5R",
  "key11": "2QrT1UZsVxQFVsAsVT6PXpTfs7HVQS38o4MTsSP3s9KJUT3k8fWivbi6vabMoY3ud4tXUZjKmatg7hahScT6sf27",
  "key12": "Zb7UGhgwx3EMa6oD1fjzwg2Qf7cWwgRd2qR2TRFZdV8EiyJECPJyEKb3NYvcU3KPv8sNVpUkFhhFmfUazhXe1Ve",
  "key13": "54VW3MjGhiPnnBj1BitE2VH7L9ywkrpd4Pu2qhrVJkD39JQLQDECQUShrJZMPjjPLjyPnbUKnmDNX9FXddkJBWbK",
  "key14": "4XBZaPtAXVdELbghMf6QLHFvDudhBeP9tYZyJJyPsq65u3pu2ZW8kUMf3e7CHuBrYLNSV2c19BxFzfZaRVoFkQBa",
  "key15": "2AFwVjpTchnfz691Z73mh758mB1KWT1hur226eSwAgnSrGp9M3soMZUe3U6MqUR7RCUotdvD4eAX8FtiGR33LFp3",
  "key16": "62S26x46P66gDDxHDQkjqD9jhiBoqjsahjUrgjCXaYJFDofhk3RTb5GLS7qZr3oQMPeYn9LEP7eWEmvCn9WaXMi3",
  "key17": "5CsXH5wsmN6uXBz6guaKKPRozCg9DnPsGa9wH7sfAwhAFyBQo2gcKzBQ7YAJ4ajC3CJPWEtHPpmtYnArzXzQs8HS",
  "key18": "3mAy4zwBHp6RfHYmvP5HEriVyfzVCeeRtNac8V4Q4XA5812jAFStBt9FhXMyXKrecVNqNhF9hzPy9aZM8sdP66SK",
  "key19": "6rsSKSof5sG897S35s1J4e4VVUzxbaiaE3s7LeFLSbGCPvhMP2Eh2bycn752nFJDH8jEJtZczRM5rdoYMFYRJPJ",
  "key20": "28bHStHHqyLwZtp9ymDdS8m9sQHcWzJu45BVzYde6FabmbLGqeG3zKMZErNh4mjxs6Z1E8iiY6PySp6Ne3G6w1q5",
  "key21": "43GicHhNhvRhgHq94VuxQhaHKkmV1m7SHSuWkG3oKob6k99AYWwuvMJrwB1xeATyrvs4QjG5xuMbVKNCZQTBrhZq",
  "key22": "FNa59HmL8Vux7rqg4JJiP5upaiyxVYbU14CdLvsVcstF45Kjce3iTmnxN4ZpYZoDZWWCRNJGrhvGnnFKX5nEwBn",
  "key23": "58bwmCGAF8MFynNmffpPFyFW4kfPpohGWZtWbnLzByvvq12vfyTjmsgzW4zTw8pKnHqi6He4DaoewAJ6GTc8g9CK",
  "key24": "4FgKZpGnNzBzkUJvFSZymz6GmfXXi5zB2kpAboSs6VtAtUoCKPGWawGgSxetdALj26tv79ZgY8rhoF5devj8sy6J",
  "key25": "2ncpx6j9hQSh1tB9MbkPaaYAMp9AN2ns1AUEELE8DidvMbLkeG1kes4KMq9nJEYMBNrZFGV1epFrQ263Exr6SgUw",
  "key26": "4VGu8nhtGR55MCn6A1HU1saiTHG7juF2pzrVUdBY2HpbibfPyxSRMPwKApbhra6pedYpeW3DrfxRuCrxEZhkYMjb",
  "key27": "3VjUWK6L8AvsMPnwKYJothkdZTUimbJxvnfVYgmDYUkLmgWDFo8cu4U8zW8jpTfqT1HHoyijKnoCZ9F4bB6TMxxy",
  "key28": "4B1CYq2QgMwZcWTCK9xugR8Yfd9VQehdCREPxCyHy31KTz8KZnvHJ2bbQ2dxWNWuUwdppMBDoEVL5NLDjuED4dWM",
  "key29": "56dedh7dq2XaySxneEaqV21SPpDjGg4WfcgSag7b5Z3HDXHj7oDXLFqJDLBhoCM217QghUtPqwAa5C6cSUf9YrcL",
  "key30": "gkBe1aGUN9Rr74KpW3xYYvKn9L7UjGdbxvcnS1kVjehehwFAdxUfB5vAjqUhNzqRtNJepKvquaLjTmcXoBedVUv",
  "key31": "4rtBib9Y6VMrBys6MAMZHr7LpcBQt87iWHzMRZinMhu2uvQmDmzavDyzbqc8HwBE5cFBMt1qSeU2YBpkeZfDcjyB",
  "key32": "2cjMfSjkrtCX2Abg1UADuMuizF6Shq7cjVokHBCpckkL9fbJRdA3ZCjQJmNBYSbXVkZ1hHrDnk4AnXgUzKXScwPt"
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
