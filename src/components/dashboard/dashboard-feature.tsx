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
    "5R9KRxzmXax31cGXwxQTV6z4Wz6zX58trDw65PUcXkv2ZsLq3TvHynioxfP6FsjGjLkBxHzUpEtw4qoQeJEZfG1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "txJjpwtQK1kyuHSnyVsJHJ3Qmg9wcetoFDSZe1WYQ4H4AuRSx6weAvFAuP9mXf3cfuhMuynsabZR21LZM3QFcUS",
  "key1": "4cuukeDjtuSQe13DDRQynLrmQfXiKtFauuU25JBLMVVXWQ1aNuZe3o6QbgTxuHRHjoN1yTFSLsGgCkzyRNMj4Liy",
  "key2": "3FzyCNbNsArZncvHkrQ54LEVD6GL1oBzDJNfVoEXaeJKboxfuHjwYfVqNZMj2pog5vjoZJHjPZg6itKqx1DLLyNj",
  "key3": "3aSBff4eczSfRfwQgphrarXDWzXUHRGXEMRo4SWMwb2tjNqCTdUcd3QTiT8gn3JhHFDbcqwA58YQ9Wq7gYshSY6N",
  "key4": "4d6TyBctDu8PY1PwYAB2aX2gnegPD8Ju4Zn7x9njfUVzT3hU1gzGbCDJGJozpy15p9SdygvswHXcSXd5BqxGNVrP",
  "key5": "3n1Z3V4ab87XDi2ku7exJRyZM6yVSCzB1G8RoZWdWjKdKxjF99inRENjHb6o6MYYGtG7131c6N7tXoiNnf2bFjZv",
  "key6": "43Pr59fNZjEqUKfTm4F61JkjfAJVdmNymN59tDM6XsJpPu3DSq3grs8r3p48wqYnb8osQTKF12gzrsXBzGzahsm",
  "key7": "2iaF4FKgDefGKKHD1AWxCjjFecLaPcJ7yyyAPT6jx7WnfCRMThv3GRJEkcfVWequiyCwaVv2C13oVLc97WcxycJr",
  "key8": "5rPUoHzhNAKC2ns4JkjkZ7cPBWVFicpAYAVv2WUY5wpBod9DD7VRVMficp5MUToNop7km1cTeL83zUP1ozA3cbon",
  "key9": "4U7ZrodfEQHLexDNUnVfTkQj51Mz8DgxyL6uBFj7D37sUJRZBQM5TFGP16r7kPpgx263f8FV1ZARSJLDZUcGAvF9",
  "key10": "59CRMaMsXDmxbQKZEAMAeb5rdJAMkq6KuTRaE16Z2r88f8KpUAMFLBcY1cijBRR2LSQeKN2YNkVwPSNPAqXDM5pY",
  "key11": "5tCXzNuUq8fmByekjdChKfTbMEMK3XftUUvX2wX9JvgDYbjstDCAELi2BHuGuYjp6sWkJGAFdMwZQJzejsZcPQW5",
  "key12": "5Z41q7efaZSHStFmipY8jezqjioxdVMT7q6DhYAMwpm1duKdCD5AEAuRW2u4C3D2jnDXHM5hBS7Qh3QrTsu3kNgQ",
  "key13": "PxbkUN66J7XztQ2C59r9BqDzUbTSRcWxeB34ivXHHED33WoP6YxjAHsfMQgSiTN3SYuY556NkBswBY56wmHmwVi",
  "key14": "5H9DABmkUK7EWRJxcuMRipcdyMtwj9uqhAgKszRgM1S5ZKhCeUUvsPCMhnM1ZU6p4iftzRjwc91LAatMn5HyFVKo",
  "key15": "2hfPNFSFSwr1dTHYypXFBApUMG87cMn9py657zpVzkNPbhuXH7ZsidNN7e3yETejWf7mVbuhFdu8uUL1FBSKUGtJ",
  "key16": "64xvzCMjoGcMi2d8szA3G6pqVyeM3aDovD2UYx4EZ7ZgReTnms9QxotEroRXHUrDG8qb9zkbuzPv3BcktJw3D9gf",
  "key17": "4eZM7r1CaijuV52btWGjKV8qRrRP2utvefu6F8tyENAPqqPMxCeMQYmmUEmZaa3m9KhkRME4225oxP2Si4KH6m3w",
  "key18": "4rDw8HPkSjZ3oE2pvWGdvZrzGMhUFBLhGdnDWHhUGXPXSrVrvJ96N9cYrHgcNtbhnbC9er9Cn4d3SVAergVyfdLY",
  "key19": "2j2qwyjesgzpwDpcK3E6ifhsvB3oPvkYyWbpCzkHqSUFEX9ye5AX1sLnCivMnShrdUyERTe3Vy3GmhaxYsJELAiD",
  "key20": "48HXvB9u3HXX1FMXHA5cXhaZuzyjvZoK9FQ32XQiGxrdXHQ8TcohwvKafQBX61V37WBLHZc7WvCwRjjT7RRj35Fw",
  "key21": "3KioKCGnU4Zq8vMp5kLL9YKnxDY3pLdpgwhWAn5S6dYY9CELYZzLPohNg8M5Tkvb7neYeVUUYEAZ6dRNNB1jVRZp",
  "key22": "5chd6tAxvdaHbzWg8duMv17LujBbEECQokwckNsJhVf1jnwYTDxv3dNwQeNQEjuRXV3uHhg8c8fRtR9UzmT8LLiV",
  "key23": "5Ho4gYFxr3BfUqC3MdA8TYVrbvRq7eyj2yxFnccnc3z2mnGzFdkKhLL63bEDzKsZkLCsBAfRPBHczc878MQbQMsV",
  "key24": "C5fEJz7LKcMmeXsX3YYQLvKRuWjVHiZtfc2CyPb7ED6omu1iKQ1rhyn5UiLRdznoZCYJojKjBHKamECgfuydUJm",
  "key25": "5ux7nSHMM5atabfHQKPhXWNuv9NHEhKkjHJ7TPBdbCB1oKjw4HyP2oteFy9QvTM2euHX4vmwAnYFwqPFAdPE2DD8",
  "key26": "2ARTTmhPjj7S1roaCZ86Cqp4Z7SYWstA7hjAdCGLPPhgc5jsNFgZmRQbuoqX55RoYJ5hw4HzMZjTpbRzH3sfcEnx",
  "key27": "5AmH86spyPUm7mdyYXNCjfftgB6f8oJiPaNyrwpkXM8E9ELeJVmkQCnAJWNyKX91rFrbQs1fy2786xSbKNwEZi8L",
  "key28": "5CScxjNigdsnCV8HAP4j5UKMnFViLrP8zaKdx7cFzyNnywmFMqDwEYvwc4HUkXekWyLnNg6gKnh3vA1jUjdBVgXX",
  "key29": "5XiSwtjpJRJW3Q775DJUPYA5XAQjkdoPy4uwySemNYCKEYPiovnQVVhJaEyhrXBYJmDprFyvAK2QkEV4u43Xbyyz",
  "key30": "5L7Z3iSSewjdC4rmDLWSX3yzFSLote2tiN129AVdVEmqk1E6VgUdb1H6qarMDmAKhDkKKdV7GbapBqjKnaF132oH",
  "key31": "1HGEqvGseGSkkediAdQpZMHp7WJG522tv2DTs9S4gyuEKyKeirVQKbgiGdfwjJZofEZBYQXqCF5c3MyQXUF5Uks",
  "key32": "5q8KUA9XqdddfwsfmufNn3xi2HgPRqfJvj5W68toiWKqkiK9rNPdNoZajXp5xFi3fnv9HkFWJSqtdQpx3iKf5Yzf",
  "key33": "4RUGeFQaVCt6BBD3hMj4QejxTf8xho4XXN4ryHZ3mUVG1X5n88eAhHLKo32mNqDbqioWq199eubVjWstMjxSywCG",
  "key34": "556TwuEg3RzGDonLStrmFccCswmzdNM7TogrR5JUSF4ohyKGRo16cNVp6BVexm6aDuZHS1wxwTAjLAvtNZEELuW",
  "key35": "2niRDyH3yTQjtqJuAHpQvrUpTsSpDHBz5Fy7WQtC8WN4hJMazXSnbZY445wSq1PhYTSHXgzpY6VrdXZBpY5fK9Sp",
  "key36": "57inMaSXQWjx7J7BtMuc7SFqFgxw6kfqnrAjH7bZBMoEDHbTqwyfZG7GBe7tAvRhZoqipUcfJyRGznpYz3hhPLtL",
  "key37": "3AxuERpyEVwdRw4wDCniV2uUCgc3y3U83orLEWmQ1q7sNLnJYRiNmgUxJNCpHeAN1Jj4EonyxKTFPgeotkH4PT8r",
  "key38": "5gj3TZV4mQDvMmUk9V7cxhqnF586vhW81Jr2NrLLDGKd2PfJustnjZvuPXjkyduRhBxhXdYgzwfRkK1aMK7ByZPw",
  "key39": "3fYQB8NZrKNUD4L3EjLQR9PEcTNwPMBRc77i6ZuZUi9JdwRNztx9zkYvD7D2eTjYzEkutUwzYiCLjfZ2EF68GopR",
  "key40": "FFpAmBNtPXnAp6YVS6VPHrhqHDwzDrDbbUgAq85oP2yN66zcYgCdMWQw8Y25YXi9qZdQPiUvuRHtrF4JVZHqS8z"
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
