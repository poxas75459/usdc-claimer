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
    "kepXRbRsrnbepcai5vnocrBD63ukHQSr84FBsznGToJNR9UR4ka12YGTGoRThjYXq6YditoGpMVvQ8JdZHNg3WP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56s7kEyb53VezFXDz1Kj44ahqkVH2GQ1cj6PphKTrTAGtW5nn2RqK8qUybNaCcBxZsuV9cJ1h6As7rAzXHtq7PYQ",
  "key1": "3bYT75HobZ2ijynnVv3PLyFKcFP2UZMh1GceYExA9u9uU4WXMSwcc1XS8a81zZp9X5GKjjsAfwEzcgS5NDnLV5TD",
  "key2": "2ZHiV61cizgi8sJJYd4PFnBePHrxWz2qZec5cBtKjVzMWhpws58kJ4gXkfJT1EQMNMTbcXX45KkWLEfFQBxtXoGJ",
  "key3": "2f6VqbhQuw6mbv2ZhP7h6isoac19baJKbr25m7fUvcoLbjxchXd5HYYZfwMppaMLdKftxM9oqHeoZuPnYcAWbspQ",
  "key4": "2CnmZFq58RngbpGuKbVc9L1Kt6AZCJE2djuRcqUYrGVCFPPP9jUqYEMrkrqH1zm8zdaKySn2eV4bMAAaNTZ723Lq",
  "key5": "5xnuA5wQWa3bXK5mbsFsa4eqdF4gvcSqShhYFWUVjxbbnoJrxKNQe1KdYnRmDxVpCZgN8BZTG9gQ3APsqzczoMVC",
  "key6": "3U77GUEFDghMUb1w3uaivJYUozPBy1ABWcXuXhXuYfwRuW6X4eajkEvfbb3viWFwA3eSXcrVKPmEz9ZVzjA9wWRf",
  "key7": "JbCV3QuFvYYBhr2RiVND1LXQEAf6oWpWH9X4QhYJDZwYYcchdetpQvnmeTjDnAu3CwyhVC9u8oeb32NWa3ighFN",
  "key8": "xyh579YigPKjyDfoFQ7mrYG3h8k1Qi2zUucFbSBQCRtEzBiMx9DVJbxyANNXWDrufBqhicmKkCfZHmAUiB5tHpr",
  "key9": "493bGnA6qwdANcQz1cQEHEhrkfvaFD1j6DPEn5AXX8FYpHEanxUpxicr1DEpT1PWpczQgLHNAo1NpkSM6KxAyeNX",
  "key10": "4C31B2CK5bRa8QYpihGVfLPdHDM9BbN7ZCBNETatPo8tENaSDDFXMque7NfGXMCYdPTSiiTZNQAEzjmTEpjMYFY8",
  "key11": "5J6FE2nVFJbZqVwH9XpgCoCqsQXSzLXL6CWZvdduUD46HJySvdKrKVxGvzuReCe4W3wSzEnf4oGh3mYcFE9VYQPb",
  "key12": "5XWkbqU8vAfJvju1P3chkou2R13JizS6QzBPQzcFgpRmoQF9qHLwe333Gb6darDBd74xLQQxCR6MHeLvatAuHNCM",
  "key13": "VwSb232saZdu8L2eRc3KWJ3co26kEjmFmEpJD7xedTfsV8QdTyAt9UWm891MKF7BsBYN6qqGHLDRSr2PCo5Xipd",
  "key14": "4ddmBGgGqoXw2vxicvQimwr2yNXVJkymAeivkHQeA1Xc6xHutBrXc5bWUftdTxbVKyqgij5Du5er369CT4LKfK95",
  "key15": "5WwXt4vSMdZd9SjoUqBbtoYyK7Qax41xay3MTqmALTHnVNEMTHgorJpRcGvcgUtCGA2jScBTZTdboFpHyqzUQotq",
  "key16": "2oYyjYHMrLCjmE2pbjgYTc4Ly1jUwF15LT1q3WnMstog2L69oTdyGNkgGezMFvCpJDLGFhrzM3nj7CzG7TdSFJcc",
  "key17": "3PdeNM5ZNd1UR35qQvxm6ZjFJxngwAqfkhwkTC39c2mDNi4jUcQSGP53bvHfY4Tyjp2pWyjC2BoYruNctcUzCKbg",
  "key18": "2NucMRYPRHK4ZdfQ3p9NtuQvUtEcu1QyFyKZ9x6HKWELfDqgR3rXmdcvpLC3eSDa69UvFEokRab1vmQgVUnYqSMs",
  "key19": "35zQpwGW4QNC9VhA3ZdYz9cwDM6FraFSVig1gAEHhy9tHeVQwkPo7bpv62UDXxc7HgnEXwJb3XdRgA38K7Ygx7B2",
  "key20": "3V8hSU5jnr35VvJ9ZqAQSV4GF57CnVgBUirGYEsr11GoeS15MAYmgJjBfBpiyHB5iWbpqSksACx2J9vUgfRNXx5Z",
  "key21": "2LentTjs9oRe5vSLpWgF1CLb7kVsQ7wncQvGDEBAGPv2Bz4zDNuHRFbDk6PzRPGvX2t7iytKjz9YfJ1ZVafi4KGT",
  "key22": "3j33oJCXr9E2QA2ZCKz2wWhEQqJJHE3ssL3smLbnZsxw59PmLzwBdjjkpRSpAGebX9MF4jsy99fDBxrnJXF6ankG",
  "key23": "5tMASttXgKeokGA7VyUsP2awQ9LJM3DPt6ghBec3NEwqi9ZGSHtjAauR5NF3uvkEhbsjJvuhJBpg53JWUchxFUQ2",
  "key24": "4d73adJ2ZL5moAHYxa4VXfg8wymxM8aUf3b28EcnACBs6sDUYHLpk7RB8K8JJrruuhJaSvhwQsbzrsniDXg1myaP",
  "key25": "5Pv8iiiu7rm9E75Um3oGD88VwhVC5C5XfKRFP323gMh7BxZ9vQTMKFvfsUxc693Uei2qno5GxmSQyb832fZ9MELW",
  "key26": "3jciRVbY3GvK4k4pLzdH8UWrB3WkEoe3YtMNcfgAXH8oYjvg3LMapTNjpRDEkzw8Nv283h1CV1EXDJG4F1NL5SWg",
  "key27": "617B7bHBDr48RgWd85pvzSxMufzMhMPHTwFYXP7u8c7hZ3ut86HGuJA1hqzd9SWS5BK86a4HMPfmanD2wUXKQSxX",
  "key28": "4FB2PLdidT5crfRuaEjQX5cMNamRnChzJ6ZZ9DQc2YnSCEYhvX3cZDFQGV862PVzQ73ZNw2qXbVgLA9PVbFjsvyo",
  "key29": "jXsdrdiGS3qUnwu6VmuW9bj69hAyDfUFikgzyeavM75kaAH1DkYoENP39Ni8kdULF783eML9oYc1UM3nr58q6Ax",
  "key30": "4fLowaTQJ7Ei12DFawHnerbRc1ZhohQAKhxqkCB9zCdUkQfeg5EBq3GQGyuSYVt4dxVKT4soE9cWqgPf8C1VvKcg",
  "key31": "2TyNsQ9QnQ98YXJZ1eQNBGyimkYrD7wCwkY5zrTjwfLBJxRcd2KjcEEoTgepZy2zqFqh1JtZjHk8LF9ZW9fMisVz",
  "key32": "571TSTk9rG9UuwNEdjN5T23HHpTMNGE9mo3XhbjGWe9Ukx4qr2wmu5akyrchkFK8LMqiaKfnwboZSYFRDXNhRSBp",
  "key33": "3Zu56pC2or5zdziMQMwhXovDqytkbtbCLYoRtnuuYdV8G9WRMZDVHj3p8tZ9cz7F8uehf9mDrHHeHdHQXWMaYh9d",
  "key34": "q4soMYqNVvRhubbCHPzyZ5sn7g88VjNvnBFriFPZosDB3ws2YarFxV4S4x32ragpNb6qAXqUN3aTTzg6dawjwiu",
  "key35": "49tHv69DZX4Q28UrPM2ij3XXLsWQwZyu5Gs8jY3SovWTcMKqwzjtk5vvbLowuc2uW6h5k9SbpTPnS2WKdiri4ABQ",
  "key36": "3vgZp4AHRywpRKhJmXo22bCBGDmvsib8yrCHZ4Lf7dX8fUP1jNf4NS9cBeDBmMk6WnJeSBmw2QhDCsTymotP5Sdj",
  "key37": "3qUpjEqFB7cdpqsH6YjBR7da42F7RKqmPs8wPiqu1oeD4HFwBAGKSSzXYhPBBztLd8Vy3Gp61eyNLS1LF9RTnm9t",
  "key38": "2TgQJFe48ky4NATw5gbJwBTbfgi2aV998Z84qTok2pcqdfqfrCC1Y7qvN77iHdrfCXbzgU1JPXyDpZPzcXcb8bhJ",
  "key39": "2FWpAzYxfDwiSYBhTihxCM66fk9xmrXvAoeEoGK7jLjBAST5DqcijXGv4uyXnNyD1jQGKaJ5NC9ksTbeEiG2rNVN",
  "key40": "Q61aguLnciQuPrDPooBZrcAndj8nzdHSEZRStZvHuSdbrTVsRb25wfYdx3LKvJVCLuRTQyGj4X6Z3utzytDNrpd",
  "key41": "61SMQqmVT8R3Bodzryza7jDzjiA5KuvFCEayfJRRtdACJ7E2f86dGmT4N6N9mvxtEQYZxNXnPSiHuQmSANr4sJvN",
  "key42": "2ovQhwiYTXx8Pm7Ug7Pi7bhqS5iKueekWJwRmDDfg9A5dBCHVpF11ayTPjLRnUHo2wmHu2kHp9ggpjs3TxYhAwvB",
  "key43": "2RR2iMZgNuYcGaK1B3mejFE7ybVxBCXzAvB7Fhz3vs2RAg4FL6jCYWTxajVc1zn3pwsFkHBdPzxHEt86vcS8yiYU",
  "key44": "44NwXgCHyE8qCPKBugnqEVTGRwxHY8KbNzzKQUd15GtaHyRjfJgK9aVR5HFt8BdsX8EYx5WiDmrAQ41spy4g6yt5",
  "key45": "2a73LaBR1wh2zEhaFjvWYfZP2UE2mYDehqhzyJ7E4YsHg1cgvE3D2VEJ46nHNTYt3YddS9uBMxmszJikziaQsse2",
  "key46": "nAaTFx3bck9W7Pm7cnan6RCRMYEAs6rturM1siSdprN92g2EX9mvcTXHUETb43U6dvYP4KQPpJyq19yMotPZtpq"
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
