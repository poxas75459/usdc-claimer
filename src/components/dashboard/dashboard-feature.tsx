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
    "5hJ1Z778zvyicjuXSxHaSW2AKp2SBAQ2vM3xuBgjpXzfuonC9hEd4BGVcW3bR13HmGMV5o8cnvSF8tdVYGyQLmhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iB9h1ez5f1Jcj84nC8VmGv6VDWAVnBboQnEfCYejNmRdEqgBXkebEVnwt9SwyPGWKG9geX2HmznXXGmBBhqaonC",
  "key1": "4jFyV3Ld2DDjyaUo2mhwdinnzCMr3oT4duFr9WuEvQq7zVL7ogREfXNjsCHVdTkY6Mq9dDaBM4dBczNGj7jz2eLY",
  "key2": "2VfYjaaELx33y6Gyep8zRAkeNEBp65menPi8coQ2NfC3KQApdVvtZ89uH9PN7ZDn4QpWP5oYF56u1nVAqZHeecEN",
  "key3": "yxVJo9eMZjhSgyrE5jkFC1VEr1kJ549aT7MmDej3tA8nh8khE46C6AYtagiJ3zSUqQkmAZC4Z3UjdjnjaZayRfC",
  "key4": "59WvK2vV35QNJjsgAwoaeJimUeM7gn26sPEZHPjVuwCbpjEF6XvfLUzAw5P45ixfVNedXYQBaYX1Hu1RUtNwD5WG",
  "key5": "4eDV4AYCAWYoj8NxLyQRwUbH9ZLmj84gv83pAU3L5T8HrikZfypw8jV4G7DDytNAykc2vskKThVmMS4DJPctAPvj",
  "key6": "5jGmd6xByHhWoh4rghawNoQveGemf8tXxjgzmNPz1ygG6YFEvryrqsK5MTaK7boRcSDqmqpwcn9S9qdw3sKxp1Sn",
  "key7": "3hi8qhXC9cZx3iHJRnqgreNY4tepGy3e7iyRVQMuutY3Gk8e6FQ1ajESYLm1E2Wtv2AY4iRZ3bv24La5JDq21Rb7",
  "key8": "2GgaGfZkFex23a6DTRPjqcNQYMdMQ9EZWcNnsSvSAe34y5iYKVeBrZa7z6pb3SasHofh1YcDwHJETMUaqitzNbcV",
  "key9": "2dBQWiP4U9DcQa7MVgikjZcvzTAF163ET6KdQhcoTYqzhczNA1yPecZc5pEfn9837sQh1BbD5eptCH4gBAjZQRB",
  "key10": "4zYVEuwuw6a3mQZTHvxSx6iJXKbKXFCGWKkNk1cQ5PynyGC9apSBGPADUkDXjyGVbCtuycDfhDgPW6FFnokehUzW",
  "key11": "2aVyoiwZYkDo95DzpfFZ5uJ5jAK6D7kHt8Syo9xP2axUTrLF4fPvHYmCFv3o8V3kYt6XzDvZhpwxVKBtTuxWe1MH",
  "key12": "2kDWBn9vnmZ3hfUe6UyyMWaLaM1isbqtWgnM8ZS1s8ZgrytpbL8mctZMjU4Km5CmdUKc9ihFQ9Zet6HebJeMoFDp",
  "key13": "yb8BhYCLV7us6syeEJDiT5dQfrZ3UqDRegmPa5yT1nG9JoLDYPnc8zkz3qx1NHTRV6AvWSRhFPVQ9fFVALMFT6t",
  "key14": "3nqk97Vzb5vWHZqEnq7HEidaNDtDaBYoF6U59DvuxzzVj3uVikQSiFYKgKrHxsUAx3rXebhLpBZ1F7eWFJmo4vnZ",
  "key15": "XW6V6qK8pGxZ7BxbAmHeropiNpoCb5s4Vt6bmHkNMhzy7s7GLdi7E8XE2DvXhSNvGEcGeMZxVBdTsvmvDSffSMB",
  "key16": "5dgyMfuvWHDoz5Abb7sxuC3xDpPMcmgLFTyXz5Kf6Pt1DtLuzjCaRQv9pdc38n9z7MHWxZRDZu5zhyiT79B1J2Q4",
  "key17": "4f1oSdAdhA3NNSUtTkWR5R1LJ6oYzwcTGye1HkuRZrRz8rJT1YM7dp8HqsUQvTrwopasH3fqyF2d9DgSwcaxejup",
  "key18": "3tWGLoAWVXABa5ojUTGAvp5BtW8Xdynu7jFXYPqMh7RU5tSiK6pKQyizvNqzLByZCiRKZBYP6ov6WDegYmH9aQwV",
  "key19": "eSJoJLUfococCdCxHJ4Gk8u5VPEKrA6CDCmG1uWaJxPT8wp21TR4YGSxWESMzU2HhR6urfxjQkpKPo77WYpB7FK",
  "key20": "2ogTRPR4DGx4RWQ6WoqQSXGhRBZVmtmC5H13otuP9hF5RMbFU8H6A2aSeSTPGqfmBifU25SQRTckpbZyaMP1nJ3Y",
  "key21": "eZSegjVqybhkQanFrLRFMB4fZdBZLaxvzptJ659hrFww1xjAbhoF4wez1E2y1dZHe97hexEeYPq6vwHsRJdBv5Z",
  "key22": "5KmqUCXwxVR28RvNiicA9zpmwMRoJEeo6fcG3wDuKv4U1PpiEZUqVyKtG5AP2rbzJnxT43zp9pDbB63Kr4C65epz",
  "key23": "22nHfHASTWdNmSLZfhXMBs2hKLoG3BKWypM5QeTDgsPr5sFqusZt5U4pd6iSdAhw6ztAKKXSz3ZiWNEyHVEUBPzB",
  "key24": "4JvoRgYfQtkcyz8mQjaJUdTSx9syzZhTTzEABnExqHVCA8o8kDe5aQFRq91n59Ytso3QPc6RUZdpBMYHbq6ESMp8",
  "key25": "5VYsjhjJwudPBg5GtCd4czjHbT4H4PbLbNxyyb7GQD9HuqmvgBYpxPLMt3B7GjYrRuWnD9sGx6MqK6qhUDe1kgCp",
  "key26": "53UJMZFSjz23EUtApVoKUYPqsZEhB97JSJUNKGemRFfVYv6yD7RojCeQdZrCohBhgJqfDn5vtAG4KMaDj8ftGfs2",
  "key27": "2txRzfiLorUJ1eSft5hUiYDjrS1WctG1b1hPw97CGVTogQMwhyV8J6oET9ut1UpxGCz5BpHL8UNUJxb5HcqEPRG4",
  "key28": "4gW38aPbDuR7Ux4anAoVRH1X6m6aYLXdiYPoJw6YGBzVZGbvqdqRSghZBTzz7XgZtagVeM7ZUyic4tEoJxFFPhE8",
  "key29": "4DyqJRgQyxzVUzYHEUoXkyGs6MgrepxzMEgh259kF4s5FazvHWYWiriwegL3sJmHgdoGmFYWy1HrHpEgFcVyiKj1",
  "key30": "4SgXDXGP7G2WGLyHp4Gob4zZYNft4umbkTjNZk5jTJfZ8pgyxQT8SN3Zgg6RhjZmJs3hvtgkRscjRGh7JNjUf9aW",
  "key31": "4ANMpG4qunUCzWMVUcBzpuEWtrzJq4jM6682aKhU7HFtn3NeLEgyneZL2mwYeCvt7EfQCg9fobEosqzciURBaWjF",
  "key32": "5qtpKW2rUQDf5grFZAc13Y5h4pc7zKJeAPfrNmPu3eRgv2FsRvXHZw1L7vkm5qdLm4okZSEqxZVjxZo7vaGGAiBC",
  "key33": "4NFCBqCxtQovNGJXdCZZwBx5ZRb9FxNt4CZog2JoK2qF6ehwD9jAdMaLH9wHwwPTTimK7S8ffTzP9TYD59mnWX4h",
  "key34": "5h8d6XU9eFLD5BYAWTaGw8JaSZf71eu1MZzgBVmaM3ukPR3tVxde9ELq5mLE2nXK3gXyL66og71sh7exBw1NQN1c",
  "key35": "3mqXHq4EZHsYPfPGp3BCi8xogithL9f13pmZwWMmtyebn3J5UD4aCDkVS1s7EpjXLuY2iwEqwkYnXr9gdD1QBwCo",
  "key36": "4aVCsZ49MnpoPg7HygHk8r37BcN5Q3H6dTwJGChNgT1eUXFqeho1WpY3xxFt2RhcVt49CiyQJ48XhGrcxF3LTSuK",
  "key37": "48JFdHTS1Hjoi7VnXtNNBq557GHExJGtdtPxsUxKBQaskhrrL8Mk9XvMHf3kdfh8Myx8B9ReGWE1jzjLii7uXRiw",
  "key38": "3t1LC3FwTZzesxJXhTrhmf23XwaJCrk7d18rVRaeQsAUovdzQf7YvLwGTTp4G5AvYesQg9mDQqg2zseC57KqH37D",
  "key39": "4KD34kMsLkbqDSZgSJaYRU4bxB9WxzXbSwukjGku1j6HHLRgAJt6ZKZGoBhXbk7b6seg3pGkEfMWvkYGPJCtAssa"
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
