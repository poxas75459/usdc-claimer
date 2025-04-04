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
    "5RCsTLitYKXH3KHsBGySnrYeM9ppMJAiY9tUCxmDWC5pcfyd6K5W4AmBUmNmYT3AvRbBwDLCJKCJsYUXR2MEqz5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54An5JYBsY1wQD8EfqWpb7u1MD3wzrcFRjmdsDpVteZipvTPEwN1HWzVFDo6beicmuKmqaCJBiDoxWgiXKfczdJX",
  "key1": "4KXEgx8aSFkbb6ooL3sAgteK1kmXNNQ6bQLTz2fJgx99bG1G7e8DUxEsY42v6rqxvNZnE8Bhfxe25N8RBywdfkoc",
  "key2": "3x9N52o2Nsd7F4Af7YRAkEhqYewNgyxrydGsnovQtre3oQm3MZJT4P8HjTHFY6Vdg6fA6KSYa8xzvgqwD717ssC1",
  "key3": "64UYJdX9eCJNguJ3FGfFotwH2qeLa4oxew6BFVAzBkqRvvh3XWkesS6no1xpx1DEebUvTcqCBQUd8V1z4ZAuRn4x",
  "key4": "36Gc4DEz2PRt1k2BWQmMJMeADEW2Ei9Y3jQCw6kbrM9W6KJZzKL6A1AHd7aP5wxT6nXT1wjN4gy6KkKu62D1h11x",
  "key5": "4ZzCRZNZZLMhPu1fEpkY6Nh4Dxpzedpo7wLwRwaStEFFfHfKr9Qkphhgec5sFZF8Bkh2vNQazZfVvQYchBhoPLvX",
  "key6": "5PNhEUPYHUYhZgKCn5UefJSMCrPSa1wCTBFBGHTVQ5U8dw2qG43B4MdyJXfp4q8p2BePgHUDuJ55sHkiK6FWbjSp",
  "key7": "2LX9y917pS4FwQA3YCDbp7ahN2FLtEdcSSeJ3zuoyixTQGwcBBcdtLBkE2jq5X4orK76ZN3qSs4KtGhQRgXuWhpC",
  "key8": "5euwckkqruBY3fUBzdULbSq71ZWTAgA9MR7gVxX3mdNJ8sZn9WkUA1s463WQoQsW1D9RwsrWzQ8zZJXvqRVkqLPX",
  "key9": "3p5FAh2DYqnFqzofegtmJUZXBkbE3EGGV9X6oVSR1fpmbBb5XiBXgMwc9FC9GwFH3tztrg3bRovxcZvvCfRZ4DkA",
  "key10": "hsvDpp3Ak4bW4ArNxAqJ6k8ignzN5zWc7sKjbQ99J1P8ZsC1Dd558zoCJVy3p4pHvBjnUDsH3mhWgHWoAgt98gC",
  "key11": "2gXT9pXxJxpW88BN5uZrPf5qgUgJdsZgZbpUN1W74s9pHktLdb6tDZNa4WropqG4B5nSkVrbMrfLxFmNWmq8ZHzK",
  "key12": "VeJ3itbafijHespGvf7pdgY35MqmDc4R9sVm8wMqpL2fRYFunMAyz1RoMomgxEsyn3L9qs9Sy6RgapBLRBNfBA1",
  "key13": "2G6eFpWWvgzSBHbdFbqpjKaHd1FYdtHUFENH1QSmSUU9iAS8HtMcmQ8wcgKGeE4puCCCbdt9Ln1Xo6NLpt9WKHhp",
  "key14": "5NXtT7EDLSWLmj2ePLtoyHgj5r7t2rDL3eMUjvHxk5Z4rMaxUPWrYDfWPAuh4GC2v9vGmCrdtnLFgk9exsUvoGwn",
  "key15": "5zQCoP14Hj7v5sCnm4Yd2FJEvExWRjzCyxZLJaiEdf6DiYsUkzA54Kgk2DVV8VujJJs86zvaCUk6XPp9CYQ3fs6W",
  "key16": "64vJuSMzMDuwjMG6iMAVAtrVj6nQUN2UeMgDjvVZE13CsDXTheND2WHxtMwZLhEpxXq2LkUrZaWReByguexZ7Kru",
  "key17": "5BV57nLMbS1Le3o8UgVvtXZQoNWKVwniambcNTzhnsjV1xhYnRhmLzPvjJbTN98g4iisocg72wovV4FEWPq2vu4p",
  "key18": "3jd1a7HEA3uNa5hJoGZXKXdkSaxKpg1CiTJNECzvpFfW8ytFdy2y9yVWGKhRxHq413FsvuuPKNsq6HUuWZZR89Z6",
  "key19": "27Kdu9DGUg6thxoLnBi5hEVjJYrxcaway1MeczearCRGcV5RzkAmx9k3jKSNizPGye3Fv79KuHUpXijWbxcBC6qA",
  "key20": "4rqhTaWPcQUk5iPM84CG2jzkBeDeAELXLgGPK743oTLvuSU9uSkGsgx6dQbpFfiWdTEe8EoU4U7wTwbNhhx3rE2",
  "key21": "52Yt8CqFUSzYXCwVgS8jQwAaMZD2yWegHyNG47ePza4XkbkCu6nMgFK4bVb8xg3bifDdEYFyEvh9vhVonxD7gZh",
  "key22": "2k9Ec8UNufodb8P7r9yDhR7ia4L7C2RminLGgs6b25ZuhMZZxayHVot12YbtuHTbiCTtb6HRJHcEWvU4FCEguHX",
  "key23": "497J5Kn7RVs5HyFbSD6pgEjDaMHFdbnaBFErYh2VYpnjkCXrdLdhggeyVxsgPMAq2BF9WCB4atvqbWVMfDfwDZbE",
  "key24": "5DnioVt3vm3qgc1kXfA9fcX21WUaDn4Ctg6g3k9AR8M1XZv6k6QEJncDs26vaNHLG9VkVdWCiKsNsDTCww1wUJEw",
  "key25": "mdK39MQP748vJVYdNv6cUrPWFdzFjQdQgVardC9cVTW4TjfUSLJrwTyF9uHiarApDcFYKndzb8D6BnwfM3UdBdy",
  "key26": "4DBUMDUhNdgRu36rbWVKshkFS5817ixfgEM7rNXQAvAbPkp4jCge94SvgoAfgctcTHtnczPSqfW6JDbz4qXzRF7J",
  "key27": "3Y5oburUQqZJJGvvEYeJLWzg5iPDRkcrGccSxY8uuCgv6gtFjA5evueejtEchBDsWPbMWvZ3FDatpgeLEZxr9GTq",
  "key28": "4Zuo3t7mJshyqaHcKD9jjhHb6F6qZq1K9sVauJQzXe3sBa7CDzqUEYYiAumpu8i2oEs71pvKmFXP9raafpbrQPV8",
  "key29": "35FWsZ6gScBFwv5gs97wqgKdyotYksGsD8jZwa4Ric5AucvX6Sovb8PqKf3j4azgWEeWq1eVygcCyqnAMj3Nr4Cu",
  "key30": "3tnQWjnE7Cz8mi5SyhmCHkfEypDyUh7BW1M4icuuC5oX2AYXsMHWAL81NWpZhLmbJnoTaBs6BToRY2Q1uNiiyQJq",
  "key31": "5yCGYtQztma67tYYrwFSQqtobRC2aQKVSyeNwo9SXPgHEdX14nP4xnuzL4G1oBkANrgfkjHR1evXn6T6xRkPzTXs"
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
