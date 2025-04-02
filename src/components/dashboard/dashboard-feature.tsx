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
    "451LmduzjmDKBN3j93rPKRRh4wzb65ux6WHYUfAz7csz4S1U2U8e1srBY5h5KQRXfsMf91uxVTxTre61bUCZPQMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gheBk8ZGeDYU71Mb1R5Zi3y9cRGVxeb3HhYio2AzANiQwx4kN8ccqxVs7AaVkkmWqnisqFmGXCBg2uSegj1ZNh2",
  "key1": "4g7KfFjb8vHZ8AdenSpc7aXL3FtSFvyB9g139JK8Bt34Ea87NU6jWRu594x95XZxYbSeuG1sdRoPUCqEaxavt7A1",
  "key2": "xwbPEhw6frSGKbMQig5ZW91MB68qE385MFZoRzuN2oMVpWuf1qnsH6hoWvtigHoE6mXoMcBxc8Vs2m3pyP1NNNV",
  "key3": "caJGcDU2wJUR4zDvF6dtyhifekUF9dd4n8UrrBgpcQ4nKxboS3W1HNz9u7nCRHGgbiERFTSyV6Q2Vj3iJtYxJgK",
  "key4": "62Ttiaono5feNatagSArLtakkYrMgBpdxHtWKDRGTndRugUVMW7RtwniebmXN13W6ob8Z9oeTUHgFgePKsWkDQoG",
  "key5": "3K2h7Rnisox43fWrSTdh6R9ip3nN3EGmokX6B2wgBJSXH2PDnDVjBd2ykQUwLr8XbKyF6cYDjuCkksmSk9FiK5L3",
  "key6": "25ayYXEcFgMZe3uyhJeF3j3X5DvBLGWy7EMpFXyHj2W4hcw7hdv5NyVcLtmmJ39sdXFFR8MESf3h5nnd6RYsfhhR",
  "key7": "2k88gCbUoz75K1eSj6WqKrhyLBe1BcetgF5Vz4V23LSvGmDAK3wS3g7FoJ5gaX2QmECY53h6JLQdRYjR41UFpWPw",
  "key8": "5tLVsHWiuS1kf7Qbhf7EYGn4UfT8VZGDLSamMupfrrzCvhEL54rndWSLicsa4NcJmUPbRGDA1pg6Ev9pn21Neqge",
  "key9": "2MTrBsvFZ57kXpGhSNJY8NiCZoaX6kpZDae5zXNv2v8QpSfqnmJRaFtDBNhKtoa3ezk9sdiJXpZaSWVpqS2T6KHS",
  "key10": "3iNRGgBZWUR4AAi7HTN8NJMayVHZhwUGudniYsSrRb6R5QL35BfY2qXpLdGSspDTSEu37TEj3GoEDzumBsfrKuH8",
  "key11": "48EyaApeXTELoUygJP4kMtu2f842iExCWNUa1CSLMx4ETdTd9ZptkKwto9N5UpJDBggxesXZCCGUEFiPxEy9eaV",
  "key12": "43hU5ksbnaQEGooAQRYsfe3kx6m98jNfQPJNGkk3AZfgwNZBy3xVuijdbCcARZpSGkkvGCVRn6nWikKexn3PoLQS",
  "key13": "4QEKFKxB2UwmGVnmtPWhw9xBj5p3p7tWpYCpQf6UK1q9SmEKLqcjCRwgqxVFzo8u3y98Nq4NxwNC83mvUtX2u5Yw",
  "key14": "4Taqv87zoFdjrenBJZ2rs4fcVLn1NpGaoVQG53uYfGha5YFL8ZUXVXqmWeZqFddn2voSJcGyiDc9o2jLkNewCUxM",
  "key15": "KtPRvJTAXFsg12SJbL5Xr5LmXvVg4Bq1BzNSttCPWYyjjwsCnHYBPyCX8HxD6XPVWynxKneXrPhd77JLMBUUktS",
  "key16": "4zrjQi1bC1QLpkdcheSV7UVmDemr5G2bVfY3xeGhNNhQGAf8ZVQe54tVix4S5HYZAuBog5oiaZqdsB6WR6e8PuwB",
  "key17": "4g5PjmRUpaBKmUSXNQywSWexbSXs1FMBjV23djAVL5GKbrL3GjdAbe7tEUoJDKFUrLqPEWRvAwEcYhh366SyN9E1",
  "key18": "2uZMsfJfmMM1hGzmyEuUwMs5jTNK9TpNFDaavZLBRa4kHD5zsPEgpeknaFSApFYSCZx9gEhaHexgP66Umin5ypAq",
  "key19": "5KiV7hJZnWmznjg3uMpZAvoZr2a5q69ouSywTuHLqq64b3WQhWY3v1akp5rFtVHdXog8XKkjWCZRjP4pySkVCC91",
  "key20": "3FGFSE7dzdGZkQ138S7WG6iV6xmiZjKfn8Q67WeR5aTKzi5UVa11cSfeyrTWT9Y57p7zWxJAaWRApp7jjya9SosL",
  "key21": "3BE6eCGzjfNnW7EMU3qaUDUNReF6hVt2VhAUQJV4s9bsRb5FrGrfXcvVD3GEZBVNwbhYVkzkAwak6a4SdMo5DMhi",
  "key22": "2auqSSzb2BdLnDRFQk2DPjw3zKRWPBWpT1XtxFuZkZmmZeWpDYZKJKBZczCVJy4ZVBYkE8WTwpC3shLarGjLkhJS",
  "key23": "2Pyq9SgufYv9hdwLjipeXarnmGn1vDSrKafmxQvqyExd3HkxFBQ2pNtxdxmmw8fLsNYidxzfVyZ9CQh1WcZGznL7",
  "key24": "2k1sKDdHHsXDeNM2TQpzXkt5NSeg2i7Gny6pXAYebiTqvEuVkFk8CywxhSVgtjQQZ9fWsc6BavNcBuGt2VoAooXR",
  "key25": "5sWLXPoUBGjpjnVmC6ZXbeLdkEzxFgnGP6qQ9GP3xb4ARUWoMYbZvpKiT4ki6uEMH6zMSeJmep7iWWZ5GyuBAoX",
  "key26": "d1M17LDpVmXq6YgfahtF8dac5ZKbJjX1akz8pp4XCkr6DJpdwK2xanw1KL5fbm4ZjNFdAD4pxh1UoWfJaKwFy8j",
  "key27": "SGthSFjGL7J5zTJgbPrKqVfUVqWASWJx4WKcvTtXXE23GTjq7qLbk3qrRAadFtDV6UpiECDMtKDoNWVUZFKty8s",
  "key28": "2jD7iLSREaPaA2ARQBSFcQhALV1L98rv1V19qH5UXZYusGmTWcQo2xkd8M6ahmG1hdeu7QjxxNbeb5aqYKhyUryx",
  "key29": "63BinXAT4h5BLn6dLqbiF4SKWAH3WFu2N9VXa1uCnVijmCDQBmUoKPciMWdrWTZ38zNDYvTHFCygtxznzVCUDycx",
  "key30": "2VZM5vmNhHzXxakhNSjP5rc8D88gpH6ShbGPmfxNxiaw5rFJoihpw7KCnnwRchh1sbTqF1CSSyvevJcPRYyKkCzb",
  "key31": "291UKivfrrVXnu1iz8BiCPtdn8k22jYjPNZ6oTXBsTU4EfrMggj4qSjn7vbzPC8qrJuVD7JHBiQuHBTw6B7Qxhzf",
  "key32": "3hHETBPJzHAHgVLKUsvAHdXHHt7qX2eQwfxJmyJyBEuU7XquLbKtUeBbaLiiA4MN6DUBppvBxEb1BpgLYpNypRfD",
  "key33": "2Fo4hvbENC3gUZkHCD4b4PovrAkNjqGZagoAVmbyqzNnQoDbKqX8Z3p91y2Mcfin7rSNhTrLLCoUGifG47yXpJK9",
  "key34": "GUNiNtR4yjhQajruaub4omXgqbPNwTW9boToTi18V9ohngEovzP6eCBRNas1t8UPNYQ5hKPsvNfam7BiL2KjmpF",
  "key35": "368RqoT2QRbKhcWfYxnWjLZz1AcKgwLWYDe2fXZGeHnqUqn8TUbRo3GRBFtQZpouwWoqNwn2Lq8G6Czbo4WRqBqb",
  "key36": "FyJAAs9cixJypuxfzpM5UREMRSnKhjw7Du3Sc4N6U6w5dGgjB7rgyEzCNnv5iyZwxsHPwwBVUtiPspNYXkHAsdy",
  "key37": "2XA7EudueVQQSdrZKuE7T2bdHwP6oHnbHJvBYeJRaCZwtgRxSBEuE7wEdyqA1W8To3KgiQmQ9CW4Ee7ip1YLNJba",
  "key38": "ckezwv3rvM5WC4eyjrKRLqxaBgviYhimcQkcMejCvJEovLLhW2YZPfgBLMo2o7Yx1VjM5xR8fLUBWTiyFesXjfy",
  "key39": "3Wujf2d8V1Q3NkPKNfQajzicPtbxqhUZf5eZjujMvH3qcxGvEg77fbyzotL3N4ukQjcXuqps4kwYV7m4KTuLM7dn",
  "key40": "3uG3JL2TwaNkReHr4Pspsv2oG6TuiBL4s5D58UaSCXwiLk6VvL812eimGNEvqv8CK3b2onvoqg8CPH37ywGrZXXE",
  "key41": "V1eA6p3yC9ZYPmz2WyXbsDBe6Uuw9DL5ZuQU8LWveLHaQ99thrdjGMHaPMsHZufZJ72gYvPhzHFHvtKn9pLWZZW",
  "key42": "5NuKmRm94ADg8AQu7GcgdjVYwWvrQUsAZMyWdDQi63RQbcJhQuQ5BYce9dKmFKuLPvatmvrqSbdZx32JLE37ji8W",
  "key43": "66qEThQx1ES3LhqupCGQQ4PqEcwqVMSUNjyMSGftYYhGMnuQiCrEWb6TW58dVxZMhVv2GF8tdEFDG3CGouxYsczq",
  "key44": "2t4rK35Mk8FAUCHtDwh8VRmjAo81niwftMH8mvaoUA5YBvfD3qzjYsE1CTacSufvuAh2QCF23oVSUBaWP18r49eh"
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
