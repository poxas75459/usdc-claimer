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
    "3C49PGJzJrFqkBDxoRYXoQo6auKRHZy6isnYiedyci4en8nkwLhB6sfnyy7Zmp76uCpPyHvj2UMe6ycJYi2u7DXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XZyQHpr1mjT5wvDKsRZxJELmRC9kSoknYd4dGLed84ncMSAbdT4owwD72yhfF3RWVvw8paZBaxKAfYpkjiPYfpM",
  "key1": "xViwksRQfvaNN1Njaq9VJHHwo9gc5SQ1U6ZoK4XMyb2qLvYiMdNkmL1dPGoxWdwbsFddfq4qmpkrNn99MUJwcCR",
  "key2": "3BVrdPAXqUSdpuvyF9YcbSvFw82Yde6jFNj8gi5bktySVa41dBuB6uUHotTc5WSRH22wbCED96eNY1wV8skie2ED",
  "key3": "41LfiLjaCABjRLZDMzBdk2pSaoRfwmZyDLDQuFHQHjwVqvUH3pLM7ft2ZREhrSM4c7Jc4Cd5ddvd1fi7dbQ9rUah",
  "key4": "ihiVHqCzW9Pc7LW3Wb5cvH3t815WQTFuP92S1DxGUYss2Yg3rHc4y8Cp7Av5mx3cF3cDApLdruzY2xUQxugEm8r",
  "key5": "CqQPphMjq6eRVevGEhos8KzbPaqQzobuY5rBuQnVucyDmzu9NNb6mRJ6csJTNezeSXQwta88VLZq2NQBrUe8sh3",
  "key6": "29qSCHdNv96mroGTQxi7MNYecAxRzXhffC8EPqQQo5pHfwTRUTJktKsP8zBf7X1GDAvs1VfTxgv8NiV13NFAcnHm",
  "key7": "2A1Q6hupwxzjEoGhj3rPxwjPFBAudghZN5VdsVydQs34AUQyDxA7dbHg4ZoEf5Hg4fCcxmxprkFGrseiGTip8kiH",
  "key8": "5YHxZY8WiY7SSFmSBE9ff2Dtgw66FK3rWit6GEZ7qdRByNAK8re9FkhzXizpSdbXhdRpocT2LEMPrDj4ivZoTDZ4",
  "key9": "2j79TDm5JqMaNRcbfQ4Tz8whPAo8JwpQhd1mZJMS2n1CbUGETFCv6834fmoidsrAwwregrKR3aGrDqqHBp4qC4wg",
  "key10": "5Go6msPvwtZ4s2SPHGLCqRSKcR5DuqYT7fGXCbE4ChuxgsXfUfrDnGXsUSpkGq4rJaZBFn34raVcTMWxDtjzya9h",
  "key11": "2pUKSx7zpo3kV5X6iddHV82EydcrFYVbwTFRyd3eVgPddvc3rL41CDruLTZcpDg3smj5AFjbztzLihPB8gpm7c7v",
  "key12": "5xHZbMYZ9NfADPJ4TknySAHaEXWfiAm7fJyL6uyKVxJFF2FeHDxYf7kAnGFW7TF7mqvu5MroWZ4Q2Lrc4qXTyeYd",
  "key13": "2hPdWyzEU45hgymDkUeUQj3du1SgHKuCSF12hHpph9Ycqwp2qup6jBy4kJvFa7SbeDEWhmybUEWmytCsxRVogWUA",
  "key14": "43Kms1pTbNjQByx3bkvz5AyoeAnxUZFjUmQCHRFpQCBbkDnN6mmSA4b2JdkMAbNR9vbjzitFocm75rihF1FpaHKi",
  "key15": "5LwjWFXPw6w11SA79HtmjrPwBHgqpXkwAEZNaL6Rs4gRijuiYtoJKWxpb99tVCo69dvKJZjZ6kpNBBNswVUxWp8s",
  "key16": "M4jP1aQjTS4jL3NfFxbJzHKmVpEbmZyeK6zaJAf3HS1Gyr2rYT7MrvgrNfvNgLqQXukLTwrVjmWfL9e7wEQt49R",
  "key17": "9MmS5XwqE8Z4RNHsxpm4DkQAeKc6UfYtZK7yDv8wLi3qTZuvyk3i1gWaBgaW7EzevFX72CBTjrzGnf8p4px5DPq",
  "key18": "53wDbedCAreSMv2fXWMrFTTQgy523Dyhptf3Uh9GPkBxTUcqXx4HQxYak4L4S7dvMiauwFK31JVHBuwukPdmgtt3",
  "key19": "4vpR4LzdpJUAkPhKftkqSkDroiSdNcNR1yJnDDw4ZNnJhdkdChSL5gQeNQonC6GLEXi6vPug64DtGiW58DuV39u3",
  "key20": "5Uw5s1VHTtF7osfm4hztjNPdSbhnA3dP2JKSuXYrGfspkwZv92rNVfzFXKcefykdKX7ZfPVz2roQYvAPCNfSSFo2",
  "key21": "sPi1WbYzNTMog2YjESWa4R5E9thiicvH16YiRAag4NezP86E5B897kxL6rNDi7VwdxZ2rEgGAnrk49RVa7d2vSQ",
  "key22": "2WkXCqfYfQQGw4Z7bJBb2iQhQpg1Cfnxxoxa8VoUKCziGGaqDFEJzb3jEPVWW8AkfU6cNS2C2pScgDAN9GsJU2ep",
  "key23": "MV7j2a2owJ91jRm2V2LhGviMHtzoFFBBha2kJEyA3tTy4nzPGjEYuztbHKY8Wd7GY2yu19L4bUUqz81mNwmU7r1",
  "key24": "59vbo9tfdYE3HnXYYVByTvs8N885gZWVErEMn4zcc6kh29aF9NVi6R8pn51X2NMSfAFV5caEngymgqH2CTVQpLVz",
  "key25": "szqG8pMS58rBXBtHxWR5KLnK2voyqACJ9kjs6U9qj6vxRQwfvCTkYfg87nvnRryKUoPW8vEBB3f6XSiep81Pyz7",
  "key26": "3GoGxgh8TvuQeJgAXWWhCMtvNF8MvY8D4kX2uQZzzieDVNF2E4PQdyJfB52VcSGLiujxsNkSVdoJhq5qni9mu1Wy",
  "key27": "4kZ1huw5fgrHb57Dh8qWpseqApMUYcsB3X677pygFewGfQUdji9tBWQs43zm43tNFgY4XmcNwCKTjphYHFhKrWvw",
  "key28": "59A6rczf6ZKqzwk5Cpvqho3janGjNzCq1DnoPGNS6c9yRZFPyvy53uy5rGt3AyoHob3VB5JajfRphNoV4Xv9Z7Ev",
  "key29": "o6tetiKq9qxr8SRBUYipw8X7ivR8rYSy3xrWfuuG57Dc19pLwoiHmKrzffJApJYEzLJz39mxEogGRshz1UNUJfM",
  "key30": "5YdWoPvg899F5gsfC8sqykQd9YK5QrXjKw9eTArVrp2Td8sh8uXFTriKTBfeyUmBAS4jQ2hW3GqyCu5r2VdTV9Fv",
  "key31": "2AtJUBa79TXUZ9y8WFnGqi1iMD7uAUDVa1RQCyfDNamNa3V1K8Y26Hup7ydfxAfKt3mpU16hsxKD4sn9bnjGxKTc",
  "key32": "4t4kzLkZPREqkmWMNUxYeX7zfBMj3CNNLfcCzirEBBChYsXK3fReP3M5mZransCkGwKBamamWLsNeivU9NwKFbiV",
  "key33": "kgVRVswfk5ZqsHk6wV4vn5HZDgibQgFEdVKZ6KFZQabxQLS1jWzc6DcJVvzG9sT8XBvgRqHhhjXXCLwxymkeQVe",
  "key34": "2ZrQwL5Yj3jnPbzCy7wxJby69FEEjrKRzbbdW9EajwNt4RgzrKQJnUQXap52Fnwh1tPKnqtpeFELG5d4GkvYFEHF",
  "key35": "4LMGRF1AWNbYUTz5BYF7dWGLMtqA6Jd9xHGdb2jXRAjvdWXKfVL9AVpcD3NHTmHfdwJwMtNj2g2Hx2ZZ7Yy6C3B6",
  "key36": "B4wUpUuqwpoBJEQwN8KKQNtgCBVZpZxE1DrjRo9bUmAhHzfX5XQm47uZF6oCTuKuhTYqcrnRGynoxbYta1eAekG",
  "key37": "4G8Bv3ahEAzSaNpaEN6DuQAEuU8d4kVM7xVCmfcw4u2paczHKyxCWiTeHFddhWTkbwFc2ES3DJQwSrVKXJahNWnk",
  "key38": "5ENs2ozePovyQ2EYrAbBTy9xpB6FmXhNxUawYwDGXYvsCnuW8K32YNZu7K3J9CmoLfoMAaJ7fqgEwBkngnofdrMs",
  "key39": "4xfcJ1aZeVZbCe7xpggdXAMZ2MgQrE3MZkKkYyACzFZrFahfyMMMfR8c89c2fQdW79nKMfiYEWhCCK2ct4wYnUp",
  "key40": "5pYStmGuJC3HwzSkgpRwrWn1wivxHH8Q8bsnXLWyZXmpQp2ZoZY4v6ZApEL2YD6sj76yFW5B5ypfqkvtTCk47eMh",
  "key41": "5FsvgRfqCoZTNcN3q8tBvwQK1NfAB1DYUkx6iyvJMFnmgYoswr7RsWuZbtRg5N31fNs7gVRJgeZhaxooxBUDhnP7",
  "key42": "3h6KPkDuYTsinMuCAWM2BrPoT6pY9xACeJ8D48EGboK4aTqsJHb6M33skPky94TKtZbzEggaWCYhmPZTZaDihKdf",
  "key43": "3ctiRX6Y5hgZqpBCjvS4QS54oCN19NsAxUCjhUGXksR5bRSruqZfxXED4X5fFQFe2D9gawaSmyJhqbgGCkoYryWH",
  "key44": "BwE1ivipZyxMwU4uSEfMYQgXPQjgtb5NBqNjoUvEAWj14jcD8m7x1EZR95yfifPaoju1JnGyb19xV1zeWqBrbfX",
  "key45": "4z3jygBiQNpsdUWrGiCAfFatFuowfK8oMm5eQjSzhf9sWQey7RpVboJnuwg8dbyj8efK2U6BGjwj918RYT4uAZJu",
  "key46": "JV9gtj8KRPLiUTqedGiS1i8VfAWwT88zCpYuh3yCUCSLCNmgWhzzsdeA6QojWzFVqSfsrX2LbAqnAjUmmGwLCB2"
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
