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
    "4jwsnvkUtb6npQDu9DV5jrNQmKNvngTfHdC74twnvAi2oVQ2JQH4mZ7gf4dk65Vy3CrjpuoYnSsNq3prmqUH7vq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bj8y7zZK1TUKxgRz8QxMtCuDZu99Dq4qsx3DdzF1qdb6CwDXdVZyfF9bRDaPerjGYK2GPVzQ9uExvSaLg48RFvK",
  "key1": "5xciS48pF3NE3zKnDMqyjVuNFkpjmbk4JjqtfkTm41ngk5jgsCxk6QzXUvaPUvvCuSDF6YmYpQWDEdnBUYgvbysR",
  "key2": "5sFnGreeNR2ChHJ7BZgL2iskx9vYkpCXce9LemeWCEQi3Aw51B79ZF7pUi1ezmDoJzMsaCJTxUEX5boDGL9gdwPn",
  "key3": "3JpY3VbafXzVWYbax3SsxtxGMAQSjnEF3HdGfKLnCxzFkaGPDgYDwWv4bWh2Qsae77ap1Hebk56C6bua2aaPBSs1",
  "key4": "214dEix16MY2pCBKin7EfAk6SXh53gMhjGnShshYy1Q4z98H2y2Ex9WzU9hgJzyQdR1w2qwFGKMavkcNDvxXzCHo",
  "key5": "4Mp3qTXW4GNEdn64zRGGsAEPRjEfCHr9ByHDvb2KsHPLLa8XHi2SejPyQZSKib3zCywBJiknxhcdcKu3Eb6obRhY",
  "key6": "J2V6zFFbRpJAZcFUuj2mr452vneUBgrLLRMm2fmke7k7ikimJhoae3VhFEcsR6hbQMSZ3aT9JrcpBvgaty147kz",
  "key7": "3no1g5KPkdrXk4bWvyJTQvECbxqkXzE5ZWq9fiuZYY1erDpftu557zBGVe2cwpPmyPKu7Yiq3BbFeZ44i8AoqyHF",
  "key8": "3YAPxhsZbHpAwNMH7SQ7sDPLJSu8PrA4J4PVbRbgBj1LrXt4SJ4VCBLsJyR9xvzbbAmWULZfT4ZqQEBKVaFHQh4J",
  "key9": "51h9sMfgWt4mBRRM5DTiaeMHZ9U2XXGK3NGHcAtspfNqmwSZUx6ZdzR1Toxc2F9xsiQWeZ2TnrEugRUEttb9k2cf",
  "key10": "4emQLAwHHofRnf9EDrQgnPVKELc2VJfBF8M9ms3vnq8ZiWo2GRGyGjyTGUumSw37PnoGDDj729y9WyjM9eWo4GUm",
  "key11": "C2wFMy2YrYrCXPSjdXdBaSnFaL6wzwssCsbQpjjXC5dECKMVvtGXZzpSkfYbjmJBGwAk1FWxGrPKWdz2y4ZLmac",
  "key12": "487QVLWd4ho579MSATkxn6qA3prRETxGyf9kjgGvz3VmkeieTgLFpkz6EzoHrvxm1EL6xNAFoF8MJf73FgXb36Yq",
  "key13": "5Wu6uhYWzcmw9S5PnD9uoZWcKxx3aytzUytdVHN4AKJoL5hxnxcukPohAnL5Kkeg8DKg8F2hyxC6kbQENRQ9Vv1i",
  "key14": "2uySxqCDmTFqHmVEkZFxKfR95yTtfv8omNhB2Q9GayVYro2FKbiqC4Dxtx2j61nAioe2VRNcdd2v2wWwrXaa4cvD",
  "key15": "4nqY67rkjaD5vA17RdjnXPseZYmCjmCT7fwki5oVyK5nFejiFXG7EMb6osWT3dZtEVYUWaL2DtAM13sEc3rxsrYq",
  "key16": "4kUoGWpEtdEAZVbxrX5BfZPTEXxQNNjyyo9KQrteatQ6aeER6dSFrqjSdYL6DXG174QmRwXh2Q3o2cVy5CR5mK1N",
  "key17": "47BfqxH1LaxzMPYCtXHFgspBvBrifGhsN1s7EzZiBX2wVcNzMK7b2i9M5rrxzZ1woMqUhQi1p4JGCkEFJb8jF2ce",
  "key18": "qAzzKUiPatAXpaio1jX1Lsr6sBGEADvWqyt7BpfGXH4VF1zZAh2BvFWBX4mTo7oo3sbnt9gMLZXRYj83niuEkKy",
  "key19": "3z7MMNgUdkLJfVKkWWWtgYMPhaSLf2DJwtwzwrmxJx1qkMz9Ux3nanWAGeyJZABvnff4MVe264wvyLS4BdaNpXgY",
  "key20": "5tgALjkUU5xpKxfiAtsywkswP2HCUwKTmGp3HqSrJkjmLEgRmtMFaH1LRLuA5Xo9iosQvwcJQeAdCLcDSNcbHQn",
  "key21": "3iCgbvEXqoQRJJMigaf6QUNtdJwyKYEpbALzJo1JGs9ynhRoX2WmF4mmQdHzuMZZcYpp8pezJaL7ygqV8tStTSzg",
  "key22": "3zW1xSZbSALmXkcPVH66yLbsbDxBCKCj6TWf4nt8L7e82R4DfdLJzTCvCERQanQ9SAhBFXEXbJvzAFPAwegmzbMU",
  "key23": "HE4ZXy87UYmqcomRUuM18T7iKjMWZHt3iJZWLYck3koMwnHMSnpoMZmUg38HXNJVNWojX5qrr6SWxX4yXu9A86g",
  "key24": "3mHWkoTuxxxhJSjXeBTZ5vPLroqf5KvXfByj5YxcpXDy8MH5VZcxj8NMaB5ENkn8BsyXcvxzTdusdedV1zSvyfXH",
  "key25": "42tVMPzFeyoWJg4SGq7A5xaZEow2bBUQqfr3C4WftuHx9hTmFbDDa5JkFWHmNvJg67XC2GbXpxGBqgANvLmhzncD",
  "key26": "4wWxbVaN8QVeHdEQLb8HfrJc741mAbTZkF21ibENH1w6CKuJB59zA7KYeTEE4Vc2MZWMZNe1VYT4KZRkWBucxX5v",
  "key27": "381LE5WrEuEbPPwip5eEFbqVavS45ax62zEQPeprip4fEFBWF2Pi3WmRPJLnv6y89CNUNemQ21ttPGy9HThdYRQm",
  "key28": "3DsQs35y9Cjymy4ZyGAGcAWTFYtJqvLa2YC5AcUeXnF576HMbZeQCQ6DUSWnzgftEf2gLyk9TH1by3UX7HZK5x24",
  "key29": "4SeHhtoJ84RginbXkGten2mQPLVnVq3fM2MG8JxS8s7XEVrYLf1GEE7dVosZAmjsv9YTeiNDevmbFXyRqsfoWxur",
  "key30": "254vFsRyGo8We814MjR5vndarARYuopTFUqe5E6QbwcNEgwkXhUJRxCCUZx2YBEmaiRBbVbbjKANBjHZXnNPDUkB",
  "key31": "4heUaixkF15EUypcRfaFE7hbCK1Lqvz7PYC6aN74NBSKzQFaPSiLtnQXvchLRbCPZ1gxxxycw5mEm1YxDyC5dFa2",
  "key32": "CcUm69hLPzXCD4JshvAD3R7PqjkLCPWbevXktZcvqR9kfVXRu7x6KX9jsfarrpdCyJzihRv9HAm6pt7nYysvPjJ",
  "key33": "66CmyCEuHoBiU1LRpEXEVDCJCXMwxnXHxZ4m3W3XEvcPN5qH3uKsqweB4W7JX4m1zRKB9ytqWquk5wnp5XepgqUc",
  "key34": "gA5dNJCmxsJFaXVJdREpc4KftQXkrbcbUML3drZZ46rdoGqob39eJe5sNVYUrjT5wQgVfhMN8zoKrQ8yqoYcbjg",
  "key35": "3R67UsVNtkEy3BM5vdRTqzpfezEE1WwqL7n3q317SnLFJzuz3dnTtTWLiLiTnV7sfAvhua1vpFtGAWYGTpBdmQ9e",
  "key36": "1GprUHH2e7EV5pX2knNCS5SQSoH3gvp1kkAF7qb2uwPpMHRvoLFgoYLJhzQj5SMaN7LSdrDQtYEVGx21ePHV6WH",
  "key37": "vSyKeDdxpFTF7rUCkyKjJ5dhPhgyWJ2Kh1KyHSKFRRJcRYgcBpBkoQbnbtpD3BzzDYESJuW1tYmcrE1zacwnZkY",
  "key38": "2UnyVswRR8ae6ZCKk7G1PFwCWMyKas6jCr964viRSYtD5Cc4YesaiJhaMfKNM49BhmUUE71uYud8ynAfyDNwY8LE",
  "key39": "5ni9Y52Jv1ThD76sRysAnvsRkKKkjcvpRTjkHtFanq7bvFNKQaRRvAwY5FdxZcGKSky4w4KX7Jnhwa7C1kZcXh1g",
  "key40": "5CxTxHnFaVzMXeFjFgDsWhcziSTGTpMGn2ymvSe1w5xxKtLZq4fhDiwn4ty4stj12FmDN2pYjoWnpE7gM7BuSebW",
  "key41": "v5PmGAiFjR1Khcp2rS5gkQ4zYVKuEAvPNAjhqP8hN2Dd8sedtgzGw1ibNJ1qKdcpE6h7pcjMuEKUNDenQPVVaNH",
  "key42": "2mnLyhgivTm4bJ1y1t8WoCx9q1cUFVuRwxv1UJBsPi6LLBQi2x9cFppjAp9gw6Yi2koqWY3bzgnLyQiNUpdQthUZ",
  "key43": "kXajvGZmNLTCfWhGGgYy6Fe1uvuhukfmyQvUX2wHuygDimZRfgHfQVTkSbyA98VZqicJhmJ3DeUz9LBpDwu7sL9",
  "key44": "rYnGTtAzt2B7ixvNRJaP7uZ7n8gPSbMyqMqpkkCsLNSuezrdovDCtWWJAkAjx6jyxogVAS5Qos7haq4ctXguqv3",
  "key45": "5TfZ9pj1tJocZEHxngRKwXhWWrqJE6geQQ1iq6uXiERLsJ5Nfm3ve9iTLEXXpohzUid4umk2LqniQDfLBoAWEnMZ",
  "key46": "5BhLBJvoRX6bUxQifKgW2fGyg6dejwWqnHcFT1ozW1qZPm7AWMcoq9oqTccewKVB7bJLiB8pc687JQ1yMhmiBqB2"
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
