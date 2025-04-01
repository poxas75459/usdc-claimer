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
    "43MMsYBm13JmbjCDrJ2M6odvMjxZcTTY6igxboA8eEahiH4rZzPbdzMJgE34aPxk9BQ99vJScdfn9xSFu2czY2Sg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rphBwdScxx27MPtvKqyBMnWKUr7DE24tQRk6n4xhh9d6zR3i6BR1fq7rTqnuxjAqy65zcXC9ccZead8VyjLfGz6",
  "key1": "8ivwde1TYtgtL6ACbxMi6GdKgaV2xeimqL3eUCEcNo2nKQYiBfijKrPofZD1jDCEHoV7EP7psCkLrzyxFAYYrXX",
  "key2": "acBTjBvNHC6QoDbZ4aFsEQt8LKbSX9s3PPjd5yAaFduqAKYgiXsgsVj8nTsUpGBSVA9hETWoEobjcVhmwiMN2M5",
  "key3": "37sPmaBPT4mGwUSfZXo7armR7Njfyi8oC1na61BqdPRxGELnSSFs1dDg9EqXnnujGMn5sEK8UEVtGYvXYahdqn61",
  "key4": "GBm2N2qTSsDATGECrWKSuBDKmTYZR2iZgnynzquNKoNYGSVofJf7W9RnMHrJiDTpmKczby5whH5aWJSRVDtJYBH",
  "key5": "4Bo7MQxiR2ejYPS9iXQPaV7nZy8uYvmQyp6gDL77Ujvt7LdJRr5qn5ob3N8qWqiz3BzvqKs3thS1WczMWvEKcZKx",
  "key6": "5CitVNttAgzNQ2WS19tqWHUnFKnKvPPJQi2vnCLTHftwrmeP9dKFFFfqmofr7Wib18TupmM8nBA9q8hYuchTURz4",
  "key7": "5pru2Tc5rwLsk7pvZDoo1Fkg1nCFDeJTeLpiMZWNLeuRS2tL6zwGLUBJ5LfLcygvQbC1pQhWTjLxzgrxsyWY3968",
  "key8": "TK2iz56SCr3iiMp8qWcqfB19ETiwet8JX3kr2Sh97kUGUDQ4S2XCkMu6oqYPDgvF8BeHwJHFRZ9qgEn3FqKur2L",
  "key9": "4Cpy7zSHJfg6iBL3Sij9AT9j3dzdGSuwW6gknNXKy1JNrcjTKjSwtZSZnJoytepGP9XRurwUaucxXm9z1WH1uYPR",
  "key10": "518hJx2mV6SH5E5goiLWSBdGnz2DomqXrTFQAztR6Hu7v5zT4vrEGuNmb3hrYGQ89exbwcofakoYGTPvownyxQd2",
  "key11": "4aPVfbs4iJ8ak8XoVHiwARr4s2p4y5DHrjB8j94bgHS6ZYAwM1nA3TDnCkyGHHy3bYmUb9n9g3oyiyJEdcrVDiui",
  "key12": "5A5BiFQhJMFZntnXFMczSn8Jr1ooocZC3SJSp3ZKWyxZMZEXs5BYXkUjK4PirhHs61wFmn8asooKeb54Rx12NP4Z",
  "key13": "33Nth8mEecwEzSk8Xcwn83VqhXtavrGhM956fsaAvdrbbKvN6a5Yggb4yAb5zveW6pWHxv9zvjbycUAyXduP8XJP",
  "key14": "2GBkLjeuhTQWqSP3btcJNKGZe8iqKF1WJ1o42CNtoKXSAa3BUtTUhnkDZhamVx5UqZ4zmormEemKBEcjkh5bKtN6",
  "key15": "24WhJ6P4iLnTrVFYaNwKKHpvnZ4vHcXDQmHXk4wMZyexyMFwEE3X7NURf7ch9Q9t3znkAebr78LZotQ1QKHiL6DY",
  "key16": "5jrAAQLSwwSqxdw9A12qVaDWDSYVJHBxhCNzRY9p9mgtwauadmAMhsJQgCffcJD77sKR61V2HxgahBo3b8HPXphY",
  "key17": "2qTfn2hP7J6hf893NLmTWXe4FdfNGgYh74cykc5n1WdGZQY7HoCcT9YfBzXi4KQc2K1AJ5GbmQpURofX975awxQL",
  "key18": "4RyLEHaRQK6zu9mFrdLTz7516HH9TS24JNf7SuZUMUqvwjg4hpYpfKqCHmEdpA2uQPXKpgBpKKBUGFAfYr9N9Swg",
  "key19": "2DtjK3jER3Y6yexjxjzTGbaQiqx7FcQ5q1C3u17kPTdXQRiMybEBviWhswqELHEUzGL3bS2ayWuarB8az9Huuwno",
  "key20": "2RrzUSVsEeS2HDYCHtmfoDNcoiAcQwjNcm2ARzekKT63S66CYP4N3FfY82QbHi91s6yvmjwfPN78My3A3t2pvfpz",
  "key21": "52bebhiWro489YtyYnCksnexYnydnd5yYymWm3A9zYFxaWvNMaNNTdkKnyGu4sjkNL7YgyLQxYXhko214asdSB8C",
  "key22": "2Bbb4yrSWmNxigp5S7msewRn1eJCsrVys8uPBQ3JH9QS4DdLotmPKJrXZT4MtVJpURHk7Jk63mY4fCYd1MM9k86J",
  "key23": "3FNFjDQUZqGdFXQj4fjAwPdmKv3miUV5mPu5Af8Ub1zJjezuSummeBqcDGrr1upBV6DKJmA8D2beCeKp5qJ9iguT",
  "key24": "8RvgHNcJChY1wvtXeCK46GkdfyGxTbX4MpsAwrgago3ckte7LKzxHoatbCMdhxFkZmooPGECAAoX2EhAVk12ppe",
  "key25": "5gHTbXZj3CSTPKGf3Dh6tgFCHoQBLEHRauh1GMXgnCCwbri15r8gx9RgBPmW2pjzzhuBaCyErrXXF8anDNo4v3aP",
  "key26": "5UvH6EvhRsB2qHQwvZNVHBNHfPYC9b9mhP11rWYKQV3U9KtoERJ7NrQE3hAHM7H82bMEwoP3QMvjjP4voMxeVUGH",
  "key27": "41J9BK3QHXdsVLNTUH3DdonqVp3Ax4BXrvqzE9wnueyMPgFkyMSmgkpPG3sYRDFryEE1xMmomiR1DJKwnXk7aGmf",
  "key28": "4nXpJy6ThZt5as3R1h4Y8VDk9GJ1q3CGTFuN3wuEzcAe9od19VwJW1P2N46L1i48wraBHgeACmhc4gybRpTES5U7",
  "key29": "49oQ7HPBLME3S1GgNRrJYZ4qX4e1Nkxfs93yojZhDasrMrncyGEeFTZbbhmLuxwKy3utMP9XWBX5LjDUkyPALydR",
  "key30": "57Fm5jyQu5KTe6G5rVGN4Nf3VJBimX1HqKiizFpxtHYGZrE4sRvSsFfuV484DDuBSNVYJKpNQVv8fuHMgTfGQWhG",
  "key31": "3azMV9Z9PL6YFCmxA8QKfZwkrTm69D9jRZYT651N5PHtaw46QPxHdo7Q3sh7SinTVwd38Fwjv46jUfNhvx3QyXAR",
  "key32": "3CREYw4VWTNRtCo9LBMYyQL86p5DZeNwEc1XTUUXBYgnsXMDNi5Usx1BKFPfso2brETVDUZYKZUC63JuxnqhqPt1",
  "key33": "4h79LMRKRmpnt4HtzQNnFNDWCQupq4Sqjd3vLzQmYR3unvFevpBirXZw45hYyCPRQABcAN9kfvZXFKpgjSZW3ekV",
  "key34": "2M9MoCGMEugVWKUWJXwPsMHcpULssffHsP6iPJVozR8ULmK8zEbR7ApFEJcPgdyme9U4gZs6BHrBP8KRpsjEkfZX",
  "key35": "4DfKsv9icX7PVx4V2ikqLGhZAhSx9BwT7MZMjB8BKMXzBPrEtoM1xuzWBU3T13kzuLuwXtS1g7anxdbhnbiWSrGN",
  "key36": "2VneMzQ9zUWgUZNcAP7unwS7F8yty1T9RDiXbFubMAPsXeguNMpdXBW8pZPcrAjrTHLxnCoEKsqmfrhpQMyXkjRr",
  "key37": "5bVH5gUmn2hWJXpmDqBpkk8KSjWb3n1aCiNBnNLvVHhAivVc19gKixbbboEyERy6LLkUc2AueDmarM7CKPsZLrAb",
  "key38": "262adCZNxwJuKJheFmqdjxxraFXJJjqH2BYbH6bxJKekDPjAjztPYDpMreL1Qm1VX9aS9hBTTLMQ73nkrUaeRxb8",
  "key39": "3StLdWEwe4prHnayGh8nmYWGzsuvMyeGYzeLDMwpd3WRP7KEr5wnaMBu5Jkq3eALifoUg7eEVy8VM6XGvXrh9mx5"
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
