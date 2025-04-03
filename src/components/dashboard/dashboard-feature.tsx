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
    "4zBwJS1DLY1MzVn3sq2fLhVVoqFRyLM8Rozz1TuB94nRvvvWUjkWQ6aBPW7NfeNoydasudBefdUmZkNQZS94W4Z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CLwcg9wJVi8vTptEEFkErdVTyF1YB4EJqdSXdzRFVacPtr4zRFiUAyJ91MxxckgUfsQES6ssZrbPbNo5SjTLoXB",
  "key1": "2LNcW1gJaq9pMGhcxY3pYNPdSB4euvB5Wgu4qp9ZumUoUxECsbiZkbGfBeKUFN4a8akohXkbmkvy8YPBefWg7djx",
  "key2": "29wPzEABHCQKxpZFaLRo6AN9TRUcQU53ApzZM9pReT778jxHrBCSeeqfWSbWL41PRRhsVkvf8a1RFXCbp9hcfiR7",
  "key3": "pbVC3Bfu3DYT9JoZu2ZCBqhQRFVXNLS6sigNWgP6C1QsDKEhCYySFF9c6YnfXNusAXyu75Kg9BA6RunMazcKmeR",
  "key4": "Rz84pczWCTzUG2XzaEs9AjfLYYj9AqhHwpKKQFUJ2C3a2tJfL6RQKCHrCQ5FNvseFm3aNztCCigHyARuyC8JB2j",
  "key5": "5xWSYRHTkkUcEdmf84mudJzwpeawPMa3incJskEpx4ux6NfAxmUDGyFcRfjprwu94rBZBqeKfJfNAs4rCpwMBBpu",
  "key6": "eyNV5qwPwPZWSY43douURGvg7pATnRbnzm4Y72JrxdoMDY6ymdtSigyR3XNzPHsNmfAa2H2kV5tYnEakcKYgDnG",
  "key7": "t9BStKqjPYiMv9V1Bjthygsk6nuSNoRgduxiajFfB75oPkCGPwfoSsVw2M1hBeP5huZhSPCuEQRfvVjWAUW9GbM",
  "key8": "QEUbrMCt7RMCm51bmcgqJDZiozyMA7NPx526MteKzGKytjH4ELx43rdD1kC1Gb1u6bJvZUfV8hN72KNQ3J4y85U",
  "key9": "3aT4xZpSYxNutQNikUzqJXNT6TeKpknpqhi9Pit9qLBCsRVYG2FRqoA7p5mHczWEpBc6Xzdt87zeKuAsfofWV47v",
  "key10": "4RotokGw6k252Y13Amccrtnrat8FCtF3RUbvckZz2eVdjFzxjWSBgY71dmZJf99kt5JarU3rLjPfgta5cThwWF5K",
  "key11": "3RVCbhsScnkJNj8ZFTUTT4p6CZz9ZzBvt439iAccWdquM36rceZF5V2XfmKkfV2rKbCjtc3o14DU6wjfDAYdungy",
  "key12": "2EpxUwpYhtdcd47zPhk2Q7hVqzhue9sckVQWaopFZJM6Sz67DuXEtA1E5pcdomMiKBaW3ikQmtvrPcvm2a6NgtmU",
  "key13": "2kzXkiJSEw9M2qq8i9Vhq3oDbjHNqSJixQmSKYiLiJf1dWhPAScPXaxEaz93Bg89LS61kxVaa2z2GZ9QPZdqWt1e",
  "key14": "41NdpnuLhdRJbT73mjjE6cfM8EY4B6WJpfHTdacxanTRTtnMEAUf38jm6F3sVEq5rsevv1A21EZ37vWhrS53tS6Z",
  "key15": "3QkGQ9VTGcyxgV4G4AvjzVvxXh3K56FdLDnF5orVJ3LWRVqf8SKrCn2z9wGmTcddV8D1nCv2rsUMdrYTsakC6BJC",
  "key16": "2TwuHszNKtvPPWHCSBYgGhe4sHvrpwsfNx4MRfirj8Ygz5mZhzX2h2wiq942EpdvShNN45JvmPsrMZbDPh9PEHcq",
  "key17": "51eciuHkQt5NZbQHdo25zv7fQAWwrBAqxLvBkjNQCyz4GVKj3b4tgUjYdQkVyWDzXTS44Y7BMrQNZRGXuEy9mpKr",
  "key18": "595JUoH25QgxfLeJ5JXa8vMUdj7x36bB9Y2LMWfBt1Poedf73buE8CS68P9adgcYi5T6BFxpX7KwdjsViJTuJWG3",
  "key19": "4Qkb5vZUAz6s9zxrvkp8VqXQKV7NDqemPZ26YyATnmVdb5jHH6Y2stmaC3ZjDR6wA6H5ZVCr2LwMzjr8tL4mA17J",
  "key20": "y9eFGgTkQn95UAVymsFrPtTgPN3obH3ABLXFEtKFut75D76WWXZc3h3FiGt2cS7bqLCc266UNbhaHPVeasjfJGn",
  "key21": "tuL564nRJa8HTavuVQBnPNY61jFQXN7B1VjH6uF5jvE5mwF1LSH2xpeFj4BQiTdAvj9kD3TN8NoMcUz4M6LKJ1r",
  "key22": "59xTgpc3h27rG65iax42Zh1xf7G1zCyst5to4zeukGfGLVNeFjtegFozNXhar5mNRDxkWdbyYKRZ5GAaxko3qcNr",
  "key23": "38WV5rD94LycAUQoJ289ig5Eoy5LtqB7v31yqd9FeT2RaQN2KagAjQTcszAnSwyxR7PK7CVc2fzwh7rRUu2N51je",
  "key24": "4mpW8wBrJtciCGuS8b39xi4P1ZUxMP8bLQQnw8dAoYW8KYJ2aqGRdTqjLajcTdjvmpg6vsiinSnUoRz7MRCjhpn9",
  "key25": "d8EztCbqiGvJEDrrTmQGYCgQfhSw6gKXFkaCjbNxrgWZUzKvabGK7w6H44A7mzAsw6HpmzwzTb1omhiq34c2Nu3",
  "key26": "2jHsEBTpFrHxbiEZoTbcRmHZhHwcQgYDCLb8i7TsUe9Azbq1iRFzifitAnKbrTXfdTWZtNdmGUKDcpDesBHyPcvq",
  "key27": "QYWgR6mgGaXnQmsgmDKCWqsnogogK4hmVqh9vfr3fqBY7uncCdvZvS7isjxs1WK2snofP5yrnfZ9MTFsiY1wgKh",
  "key28": "4kCnkf3xUkXuzrSa5hqXYG12V336aK1nmm3gJmuLf2N7jzgoUXDH7Y1vQb5H5JgPfyXraowQ1AXzPSXTfZRzLjRK",
  "key29": "4QxazCuTpjZ8oyBhTPCvSbJ9zK2edc5FJfWte4c6Yo9C8NmjZG8sz7sJAZdxekxv9nQqkR74LojHfXjHo2e4czC8",
  "key30": "hzChgNXoy6LM5okRvKRMCkYikKLjxqPVMZUEknLyWHmXx1dFizzBno1TRCPtGHRoacnj4PhCNpYb6Waeg5Z4T4P",
  "key31": "4dAPa33iEnGyxVdsUx8dVQ6gSBEf4w2y2b7BBdHBCdLziNpxdfqFpEpwCAFHEQD1UEpFLcr17KhF76JVeQ2hyoZH",
  "key32": "i1sxq8TWLg56hkw3Z5YTQLp3GhhzHw5HBvsDGi4UuSN73FHMh8E4ApQcXDBFNcoRcht2ySUecod4oKCY7dqdxnB",
  "key33": "EKbN3yufVwgE9fgyPiYMKL5UJP1X3iZaLsjkSKw92SEASYmpN6wvTJpizFQ1x9smMqGLmBmYWcr5gBhg4j8fR6e",
  "key34": "3rKi5hZhpYdMMu2AUAi9XqHY92Xrp9q97E4ep9BHGiG2Sbq97N8vFxVmhXL6csu7RekicmJa3RGom2d5ip8ZdBkF",
  "key35": "SXf3DzRusVQmc3HEvW41fK9TM9GDk2kZHh9aojmtJKP2KZdFN3xEJxGxsv1WHh386zDkZJpVG9YQoCSnFYgF5Zb",
  "key36": "5PDnPwsJNnoPHWtnLX4xoYw7RsRbWhRKbr9VYmyBhB9ERmQu9vj4N9eYSfKL3JZS1jbfGEKmk7QB6GBoXt7xpGZB",
  "key37": "4PRi1sPsDqK2KuusavrrysCEhHJJpkhswcqoXAGCF45hQHW3FWCEhp5cL2eL9oAF4k7yuX9E61GLKqFPJWH46QwH",
  "key38": "2iw8pyBj3zUWLg5uUvW49xeyFhNRKU1i12P7SHUn1pmg2yQ5VPb33M1fYfkSuptnxYTt12gSvugV2V1AFW2LxqCP",
  "key39": "3xbn3yyQh64y7rFFsAZgjExTreNaNHSh7xcKXjvKhx3GRLF9YJZTiyaz95BttMTTWdLhghH3xxnAqabtfeqPGvq8",
  "key40": "4j4L7jFfDa4sigY88AZ8DhvWLLjRdVHC9AbuoHwwEe2PxvpBtTrBp13VrLZNGsTdf57jSsLyduh72GNyXbZuxpin",
  "key41": "63fZLKP4BUVqPVJEo6twHPReHVTeviaPyvxRgGCm1KG2pjHs2zSVZxmNC3groUMopbgppKY7ydALghgxP16YthiX",
  "key42": "54ad5LehHtYj939BL6DmLVgEmafSYpFxEbCbbyZDC7nf9q2TbfB9WkMrxvjMpP6u7dp8FFZNi1bJTs3smXPbrSjU",
  "key43": "55NybYzGXLjVT2ZycQAEDCasDExyZzy7eLxPmEPrZyUs3bbwMnCtHEgkreKgizpqAoTnKSD7uTm9Bqc8gpm4eYo9"
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
