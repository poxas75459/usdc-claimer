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
    "hetGtdkPRW9k7t9Ghzgu8unpsa3YjvTSRnG4NLiMLr24wVopKRuTneEogiNE8BUPoGP7iv5z6wq5eR5qwfGj3Ht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZpDAbQBe8HXXV6cCSTjNHvx9BeJmW1rHobJDoFTnbZm8x37f9A4H9EKsiTLoRgPq8F7KSnPFFuTqrjoErNKesdq",
  "key1": "yM9HejoRH1CU3qQ1NLguqyPpiGuMVvSBw1HxHR2cJa4z9cg8gfMu8QszGsqpaPTpxCju5wB92PoEKfGXj3vrtPx",
  "key2": "LBzN3V8NkWL8s71YbN6XrCXtDXfXWSdyPLB6DnGCw5EXjepokucoms1ysNHTguinH2M5RDPHwr1u2nDDYpmmDpZ",
  "key3": "5Fqc3F3Ya7Cz9SiBz3QFrgQo5bU8NxS2WNNQb3EY2pMygN7EyMVrw7HZwHRsze6T5eh8yBiToYS7ATNB4p1HsKrq",
  "key4": "5JdhfzcbHv25LXt2qvwey3zWdYYoXC2SgWXj5xsA26feTt7ujt9HBbym4tfoffipJe5rhWvwN4CHzKvfopRhgoeG",
  "key5": "iVtrLvHS4GTkPPDA4aHc6HMBFWu2eaYgf7G2Bn6kivJQUC3AvbYZxckhxV6viqoFKgAuGzA5F4QeyA6Hmdqr27W",
  "key6": "BUMzVwUnvrHLtv9auTbbMgqkN1nmaRBX9FcNjLTxF1gVug53bz1udtH9bwmR9CuZiCeCz8zJnJQ4bXseyGxEsHo",
  "key7": "3iDWzNgQLmA3MmGzEPa5apBjQREZm412CARCg8hX8ArfLpYACLSxW3pXCvqifJ8rk5f8VsMy58sj6ZyrCdMADqee",
  "key8": "4bsXB878CknaHNexfQ5Q8varJbzmAczoEHqEHM1kBC92DpK667UEPhKoEXHmcVtfjCiRu5m3XL75qzwnbmcmszab",
  "key9": "5HtHwHxXRJbu7G7nwBrR2i8wPf5hqmsMTDCCSa9tT1VZJC7DeP8b611mV1dtJENTL3esRnF5pzxFDggyq9H816iY",
  "key10": "54fzXXbcHa1JRc1ujhh6z2LME5Nz9Yjf7QJtwEzkB47JXSK3HuUUxmkMXq9xYMbEa7zJAf5nGZCu5R5pPKC5Guvv",
  "key11": "65f2TgSjJhmPrhmrDHtNdJoAi45uEAU7CZkgSk2JFciebnVEPFXXfaC4SePMqh6qiw9NWnkEHxJT5ZJ1iDjmt3gx",
  "key12": "3tBhceorpMZdHF5R1k8uetomhYrUfp4DbFwRWLCr5T1J3UhAHxNA988s9ABp59Xua8eUWGsmhh9R2xj6K8ZfewXL",
  "key13": "2ouDHcF6zW2bY8SYty8ySMD3QRoU3gEXkvWCjBFNorpth7cqULqo9EqXupL8ooK6eQ76HmpAi7dgRAWE2Ck1Xdbq",
  "key14": "5V2fG4k9gWALHZzomGPf2VDRo2ar32EX6cGMBfEuFHoWtt5fXGqh3e4Aa7TLiRZCqGHsbJ4fRy79pQK11qdW9ak7",
  "key15": "5f447zzkPNdzjbQ9doci9qWvJbpvwZXiadhXYi6vHFbYSFyZaTci4svo7KgfJfHyUNDaQ82NX96BfpH9NgonbJKt",
  "key16": "3KQ1pHowzAumHRN7ReQR3Et9UWnwE8BcxEDtEicDr69XJ3LxnLG78BjkqCrqY3eTwiWoDBmKzG4ceTowegmZH3Ps",
  "key17": "5ZrLxQrwQEoUdR1oixkVxEUek6KAsKS6Xw6mwEzi3To22muuPSDP8UE5TsL5ajRJGvt7LwwwcqDNQ7XBNC8YJWkH",
  "key18": "2eQiqEGHqPUxys2P1fXJK7QUAemK3NU9jeDpfriTzf9N9bcmryHSg2hfGmfK3Ka5wuspELYKXUVmSi2c6ZBM5fKY",
  "key19": "2SgFFDyanLEpbtTVN1rpdXgwCfxx6coNnu2LJVpqK5dtueiyjumDTC2YzqqVPqLvwokYCpNF7DrHcQHAvmq5gJGK",
  "key20": "38PqogNNiR8V5ZtrdfxXfKRKUqfYk4ry2JrgNSYv1U8hJLjDJAMfk9n4awRYkaHFNeHodXg7eiWQZk6Xo3FDN52r",
  "key21": "24PGodhBz5Bh7542bfTgiJWP7cVxSA3apjGs4h7FiVw8t28hpNhButdmXp8CfTAupkUwNQ3fCyZnjz8bYqqx6bpz",
  "key22": "5wgZYpD3Vky9Q13SHbNdedVY1Sz4XbBuMjnEruJNQaurJjFVWuczmeUCjp9mw3cynx3yudkoiZuQUW6xcofN5UrP",
  "key23": "3eQWB8spb4VH1L6qCdf65YzSy8ZMrahVY6KXLk31RCsJYjan7EgJwoMjhaVbqb7cqQpJzY4P3HKTnyDaxJFDpTU9",
  "key24": "4yk5gXTk8X4W9wDjY9XE44cT3J8F5Nojt18Ebf9suV68b3nE7LYzdzw5Tc4YnnJ4eE4EggTckaNkXbTa37fcAbjS",
  "key25": "LSKjwaZsBT2FmXNfEWoisSSkMPGnvxivrWStWXviGGqknLb9qZzjoWumf7NGtZVcw7M3nhHQ5q4DJmMXxUDBrvT",
  "key26": "4Lx1Mo2Go4xfbGqTSDRWN9KC6NJJsCGPo1zCRCrqNrCxpRhM4JJ1oFffcBtfehixhVVz6Ygebz5bxt3AJ7Ue4iXX",
  "key27": "47JipGjCX9ZttJmJWCWsjZJ73WuJQC6vwJNUudfcpLDYxyrQ3dSzapm5xN8JPzLorwySZGHH1hwfPpM8t5b1VNzd",
  "key28": "Qtnq99nmsEtJsYMg69haCBRoaUiwQzYgUpniBZTPe7d8Bn4K23rsCfVTJp2M2Pt17eHvzezRbM4hJCjRxVXvxzT",
  "key29": "3F6WJDfRe9oqdEyp1TaUNWZWUmrEbL8GFVPzTRU4PYpmSYewjQwnSAoaFxLdNKkA2esy3sSWUzafQox7nda1oGpF",
  "key30": "4nwDGUYXLTVw4JM1N4HA3W3R1pjhwoikMLeXvAWKcZtA4NYGY6AXDERcLGi9Vihi8R4vGJ9xauuYoaKthNYRHrEb",
  "key31": "2y8XLgbpEYMKEymareQFx2nxi4wZqkFyyBAoYmakn2xdRNJfdpyW59dAQ2vrPuTwwyWrMSsWWnYWJM554zEQM9Nd",
  "key32": "3cMSWPuTDTJURBbJ4NtnsVCVKeuYyydaY9NojPQ9kQcyahwTEimcY7PufH7Y6gNmX6LBjVriXM59HaYexqhksxzC",
  "key33": "23QTAMiHdt5UAUBUZQAbB6MkoQpd25N6RVyYoskk8oh5jTY3X316kmXdk9dm7Ujob3NXcjBkMyntJMZLLXSJkcr1",
  "key34": "5xsLsrKKzPZHHme6nSXApbPEXQs32magQnhgK7F9p6CtkArJjfBAuf6vmW4AQcHVPX9fPceW1mSXuE4xsxtWnoxx",
  "key35": "3wvn5n9Uuiw4mRaRZC5DsPnRSAhu5xBxHvq4o3G6Ba2QhPT7CMVPN87WwpQyP7CAJEB5kQ4kvfuoBxjA9hBfApMT",
  "key36": "3s4hyJkZgMPvMBqs2U9u8PqL36dmnmNEodvYMPogbc3X2va559aowaRQpZk3SZkhztUgn8KdKKaFTf4DqVpsvvVr",
  "key37": "tbSeCEZWyKWuZHskqhfHMSgWX8uB4gwAh1U3a7joYvTYwLKz5e5aJsYQiEyVT6SRF3dXoHwTWtuWLFpzMhbPhAA",
  "key38": "5WtsLgXYy8YvV52BHdhTwy9pJtCqxYLScSYXz96sDhPkyD3UVepiAgprUMNvHnMUSnxVxMpWeh5wQaRfa51wvPVR",
  "key39": "v9TmdymHa9351SMfNJugsHNagBqx2TmzdE39uH3W22ozj8Avead9o7omxhtGPjRc4cn2myMGXuiPo9PLn1tiXYE",
  "key40": "27razKBhLYg62vpbctbyEQeYQSMc3zXGyeZ5At11eJwgHXNg9pbxuuN7Q8bLkXvXPvuHu6BJiouYjL1ZV4pZk3nc",
  "key41": "53LdvSPE3vkQVcbdVNNw8ENTa9aRy38zVj5rqVbACdkkzykUkX4LBGXxfKgihNBr84H3Me2cGJGX8GD66UcuWmuL",
  "key42": "4BRct5SVNoxN9kaZkWWPNGi2t34qeLtXPJ21JtBkuyZbxBSqDPAxuNEmAKYShMQWVEvKVFD5QUzJdLX4RdVvksc2",
  "key43": "3e38uwZiJVWVeNkiQwA3U6yBUEedfsiceP4DRv5Q7L5Z8SnfmVDsUihMhfiWw5mpijYPM13BGGX92uoQbpA9P22H",
  "key44": "3RVpPY1JcciKaRGL1ZRU3KJzK4uBwMNQPvvLhjWpewxoY6zbWBSpJMBAdiG5eDvtN5B7TnnWFgzF6DqwgFHZ82x9",
  "key45": "tqvitfV8ie8SsnTNTA1hNcPNXwFC8tHGDoKZs18AwBvDunvB5Gyzd8ndjkL72AsEKXN6XkU2jEZjPGZExM4aMj5",
  "key46": "5ir1DUAiMUAsF4FUgf1GEAkzFv1XM3F4dkEguH1JjgVV1GSWcGwX8FrURfA1iyUsy8gTTL8d5uYMAGijfwtic6Fq",
  "key47": "5Juk15VEJQnTB6ZH5756owXEj4jeysKmg9G87pFaZFnYcKmjzhDfqwWMwkQbhCuP8GHRM6B43863A7YHuQQdoBFc",
  "key48": "64seRhrPT6Thk3nNk16bYLxLYx6Yj6BKZZWmTBUmDZrqzUMPFmw7qjLL66uLH5iLmbYPLcjc4kCSE7tbAXPrUrH8",
  "key49": "3TQ5yS8icmiiK6gypohzxLBcg7NDak4zBYMR5wzvRTPcpEeuibeVhxTrBtFoR4jZt94PgLw7AHTtaSNfGMTHv21i"
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
