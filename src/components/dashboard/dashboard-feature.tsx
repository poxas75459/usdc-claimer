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
    "24gGQykJ7U8VxqQKHhadj4ozZQda2YgicNiYvSPxSPesVNp73sCnyDApuA7RPbD8so16Y37PsHJ6akzfVpZEC9hD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fp9ULxXdpHSro3YV68YGWzkwvDHVuNwBN5yjTwFD9XBzSrQ8JKRikFrAssENj9xtrgm9hXBGHrMVximHoDTBu7q",
  "key1": "2DWzKsbzUn3iELVHGZWVD5fEXmgPiPcAyYKpNZaggnDWjexBq3euCEVtdm1Fu14TBGLfQWAyHFXgAAbrGxgm3wS4",
  "key2": "2BApe8hkB1QnoR7mCTrKE4qNSnsvQ6W1iS4LEsJQ7RhpzpGgYPhYe5uSBZsJPGTimTYaDA33AUrCkVueVHrTG7Jj",
  "key3": "tfZviho9ZfePB4s13BUnZUc6xTFih3UBW7WkoVoKVEZd37Er57fxbwPMXVhx77ZdZRMM4sCH1kSWA3e6sUt3Mxj",
  "key4": "3FWqSWokAF59hhFe4nF4qPpG6GTZGzkpCEauaJe591eaBNxdohqAVy73kGAS3FuPV3PbvBamTs42kTUAf6GKFAwm",
  "key5": "5B28U1PL3Y7uNFtsAQohHLo1XcEMLJGoTFmemSkVN4L71soEwRCfDszbPzPmDWegFTsdWiiUb14QfU3XNLbijA5q",
  "key6": "5ZWrCwkp589uknojhvqaHAJa5CCCE5dGcU4iBvCsDV2xvrQfWiZshmDtC4yQRAxmx7s3njUV4QDGRnTTghrn5qk3",
  "key7": "2VZJHafucR5j4PYHFwJNYZSijtW3WyL2ErUkaDwTogJtfWmTYFNrA2o3N3J4bwViVVnEWDJfXmnT1jB4JWMqFVnV",
  "key8": "2MQsjLDN3bwtnv6TQezKbQoLbJGLERJSQVLdHYmajhZKqj2oPnLMoGFESqUf5dtHAWUQ3xLbaVFsc8s5xuQ6tvUU",
  "key9": "2VMKu9fJptkahoRqKgjUjHaLT6vx6pAbD4M3dFUwWB3EirHEHb2CUH6LFkLgEhKyRj8oBW76j3r4Pzs1GVWnyDkJ",
  "key10": "4aYoE8668JNpMy4KTARG7zKNVuE3kKk92C49qaxSTSiNDARMvwf3oGjNv2iYN9msj5X1yZNLbHYdaFRxzvrY7igP",
  "key11": "2wcXdzx6Zq553Rw4iRdpotucMmjdapCWiFjqxHynnJubQtbDQuFkpS6wuZmFEsBRQn7kuuwmje4ytamw4yGqxqrq",
  "key12": "2gc78NH3xoFTUyCggq3taXNwUvtr14YctW9BcidcXqfM7bVNUL9cmPkXYpLB4jeB3ydxbmb58m9hLhAsKvzDGGbR",
  "key13": "L42eduWwsBNSsbq4z9tps2ZdVEi15EHu2i1GUUf6oTpsptvaGm9fi9uQpQ8YNeRsPWDJe6TTFb5N9L27C5ZWWGi",
  "key14": "3fFsD5pWiaq12RumPkE6eJwS5R3s9gGB8C1zmBHnAHS3YuQ8e3WNZh27XhzrnjBCuAmNtqdYuMwo4otANQnnWw36",
  "key15": "4XCtp2JMnHs4BjHQSDYKjR2AL6E3xcYqgwQxonqAyjZ2TE6nu1dKeJK267v6SNbbndRUQo9udmeVhsds9TmcghqP",
  "key16": "5U4yEFwmjGCDS6QY2jcDJTkMHgKenbwS2oN5ggFMxxbHDM3ETTtYDCHGqeJoPU1h51G3EfVBeyrj5PjeKQkrjvAD",
  "key17": "3UpidMnUDea1UGqrCVp2LMTbq8NZZct2BYHmx2AiCaxTyupXSMZyRjbdKedfSCbaoRNpaUAjn3PfecpmYDY5EGEE",
  "key18": "5jcKGoqmishpVNLLea1mccPY8tNtZt55Cv4gTfd66URroFo73gVRsogZkhs9Jk93T5JcERzHqw7JLDU4mWo8CPps",
  "key19": "hpQS27Uq6FVcB4ZcxUeEjZrFNqCRVDkp4FQoEAgr72D88BCf3PoMDno6K1T24Rd7PYAegYcjvNmUXwFC5EjbcFw",
  "key20": "392kXMapkZLH53TxQG2xJ13ahypxntTaud2wQmFMfdWyBmvBfsbCDus9hZB5NZcp6pJVDKTZCxYG9PmizBuZe78k",
  "key21": "oSUu2CB8yRm4AkDjzkU5oSbHakUSqWwpwnCbgFEBZ37cv9KNCSBKS1pvaLtw5vGnSFjFGEDsLFM9EJ1wLeJqhKM",
  "key22": "2zYAxTYvLknyfyEEfaKezKafzNaWWGN79yRnqyK3PgpAm3CDKzQptiSiVd2bvhFiuy5JpucHy2aiJEJWTSJ52NyC",
  "key23": "5DW5QiMawE7Dgsnr8XBwdVLrSNUVHegQNUMcVhbNwQhf372CHg4Vh1DaxN2QQWQJri7c8KSvThAKkFAyFpV8o5QG",
  "key24": "5Vo58Xt3nsa9Epn3txzzcSWpHHfKvTPbybgq5eRf6ehmWgk6HY2x5QW8bbu8MzuX3Da9AfSoWPukRERHGAasEDTM",
  "key25": "3VskPvvSDKhTNF7T5JD1iW7t22bnFizKDUyWo4YTPi5wLzY2XzksQXaXFEhLRarwNdxHeVnMqYDyZ2xChas6setf",
  "key26": "2EN3FYD1rWe1iYHXgcEaNw8nDH1qJ6kUoWEfL5V99XB1vWuKJDQCa5nt9SPvWGoe2FZA5R3HFxdUQff6UTfMDwxC",
  "key27": "48MyNpRGGjfL7u6QkQXnTUkEobmxWsAUs6N2ZH76sjyvNdzk4sMMMBnwYk3KLNvRfCwFcLJL6FAFGd9eFwEhrFrQ",
  "key28": "28aV1a2z6vTYDFfw2nQ7NfsmvsxUYehiNaLL8RQoeVvaMqHU1sRV3t3b5grRT75goWPx7zZ6P2axKjdqtY4CbZfh",
  "key29": "3YhWW4bMwfyn9sZd5E9Caj5rJ9zAcJ7YdW5A2KwKPq2gdJBz1WBCf9yUod8FoWFKWxozzKdBqSQ1vq79DHYEVng",
  "key30": "3G9yBTZUUT21So5dNhmVKbaZgJwUoTqfpPN2Xdx79ByAhKfcvKqtP4kh37HDFqcfPBi6fPYACrzCZVDZLUJzMn9G",
  "key31": "fPfaq1mXx9LKTQhPiLDkphdukjjhPf83b8iJmrFE2jaGKMYa7aTC9Fjsma7t6qkrpxEhPXKtjjyDSUZYvQJdfwK",
  "key32": "3ELPtR62U8UDdid8EYfLhkNaEn4zKYSMm6BHRqPfFVv4G47UvnYqFrZ8YFUY6MApioTrLZnUKY4AjrWwm2ShqYPg",
  "key33": "2XLVBnt5RD1fipswFHX67SG5Vjvhsuzy7Q6VVd8PkxphH5XHhNeSXtvLgwpkYjxs47ekHvn88fVfCpoJ8JchCqg4",
  "key34": "5ZKRYWXYfb44DfDBzCHKWQM5WnBR5vjhABGmjiQz6GeR4TzhezZmQvkGFZCuBszD2TkvKpUDfQGkMx7n12Xom86r",
  "key35": "48MKFcXh4wr6QSMRFty5QMjG1psqcLeevAKLdLE1jWK7q6Wu7EfbtpoeWms9Kx1X2DnjkSjfWZh5FK3j2RtLV5eX",
  "key36": "6u5pt6FHEMAXX6a33qJMQu2tiup17qBNVNVbfK5qVpDggn3tNX97xK9GzELwfotcor9eqWaTHT5vdW6kgLebWWL",
  "key37": "2oyePNdp98q4Y9s5DjZqDCL45dKbqCiTeLjy47VnvnccFLRxBkpsjLyoFueVT8XNQwN4mj6xVHrxm1eiRkMPfRye",
  "key38": "634Zun5nsc32m1gxqd6G6CgQsZ1fJ68UdzCKU2oovngc7gffri7xhqjp4gD2hBaaUg7Q8ugp1ZKXTAsXKmVKa5aT",
  "key39": "Vh2DDTTCH2uTaqY4RY9KU6JfLYScz2Y16yu5R7exin26afokwkHF87nskf8oVm223CHyQZtsoB7S888UPS37DZz",
  "key40": "2zeNEaXABiQQwf8JaL785xKpYrDRD3vBvL6JTPDx9gwk1Kdbo954dRTYXhdNX9GvT3CG8ZwHzFbXJgyvPaJrMqg8",
  "key41": "2Mkip6nVJe6pQDoVXASNvpqgoZbsV9GxbFayyEE3Ss7ErQXCNvGogcsdgqcX6gQKhsjiFF4HG6vvssbjuJ1FpP5m",
  "key42": "5dWFHRaBH3Hke1o5oKcCweVVzSCUdrgNhtqKLtqY7QjtXQmCYrva3STXU8dvrcMGjJnCp2QHJCPbq1kvkncuSvUP",
  "key43": "3guubEs3in5ZMxr6queGBPbwoh8KHg79ef3kkbGYR2Q5YdTPafaMDLLCFEUPYySQF2R4spGrA9MusaL7fZ41JKhv",
  "key44": "3dU3Kof22su7XZZMRza35RHjPuFxwv8GQdVZcz2yMfhZmpwUkmq7PuS7GeE2rGgXWXGF1KZU5f3UPPPFPaycTZfz",
  "key45": "4sKqqkWL3cB4x9hKmR3GySZDyaYaFWdsSatHNYHatVhUK9v2V1HYiyzm9VTuXwF8KDHM9Ufugh4NusrcG2S1BSAz",
  "key46": "2kMiGpBgUtHLyokDwT2Th9y2pRXE4AMBPyPRe5Rggx8zCSMCsFaYEmVAAbEf2RxrKHzjfruTLicFBSbo6SCmz442"
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
