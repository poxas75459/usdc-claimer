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
    "4s32UhYv1VpdW9dyNrzfFKdAbNuzrYoTsw1U9fFu4LEDamZrs9CJDFiR9VZmw5v1F9jS21F9cmVN4kd92USemYsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fHaEbvkat8j8aEaPRPzKFYVspuv5Y71UJZqujASqyGwGDx3QacYtYap9mh3gVg6nWY3KqK3eBtbvEePdpBBmfE",
  "key1": "5W3DVvi1PJjPnepkC7w7VEH2QFR86mM6n49rfo27CzLsvZgJnFoV79N9hYjuTTCjkgYb5CgHmuxkHt2vUJJbBj4w",
  "key2": "67ngKyAKEoeBoyGeN8rGiEhaqbUSM27ZmvbTCJ9kKNXzKXjwgWPtvV3jjJ6FWUBQeWprVAkQZE8W4NwtbRyENwwJ",
  "key3": "3WCedU8Jdvtk3vqW8FWy6pfcwHdPeHCFoLJESqo6VMHojUF8Tod6SJKWACcjRCxagLsLJnNsgFKDEqfqwcKNaDZh",
  "key4": "4hWMMQpdvuZ71rB4dJGN99umbzEjd31Y4k8DhxcWFBzMCFtnUPwi5eiYTiXEmyyZQ5Mae1eQBvyDGKMJdYFwnube",
  "key5": "2w5JMoj83FiYDLyrhoXcGd1qo2BPTUC6vSoXHD57dmYJ7uaq2GRWhSFnm5UbnAtBnYtSL5oiV7Wbwm3FwSFhBLay",
  "key6": "3qHFfBx6UxrDogqZkyC3Eyi2Lt2DueQnu8gxN7YUVSanraTKB9n6yRRBhqgGcXEud577rkA1DcLF1NSyYMdVw12Y",
  "key7": "64zvKEh2jWQLr6qAESYjz9Zh4RBLTfVabGrm5jAUcM8FH7C4SJsUooAUwjYFPyfSWhkmPXvNtazsENFAjC9oMxHQ",
  "key8": "facnAh7LhyH69JVY1fZExuudx6rCng8KFRh36KQZeqv9yXgCmJbeUmTdwPi99GBjdNVAQKjbe8UC983mHqg1nGc",
  "key9": "4ThD8o7qNKrV5K38TAhtUYiMur1tpxqVSiG9hCVzXevCqmUR8b8ajP5EyDf8myEBQpN5MKobvKwiopbJ29nP6aSh",
  "key10": "5YznSyhLnjBTrHSLJPCYE6P3nsMe4uKxQoRqwo2d5Tgfq5pRkjhgzHekj6arHDW75jzsqHxpuyc5pVVhV1RQpyHz",
  "key11": "4fVsc65g8scmBpoqq4VVmhcg39LM7fZTAnAL7oGQPgrE8qH46nmMLbYzfN16bEvbstvmibDroBHjeqw2ovEPGyi4",
  "key12": "4vrM55HRznAsRPMjhjHUjjwqzoX7LdqjfpPBkjcCkEiZ1FxWWVtssqcvPsq2aaDzgn9PN9prhcXMz4uUWisooe86",
  "key13": "Rw6hAwjybDU56czUW7UPTLVMWp3HBX57DEHDqTbaeeaUsHyPvDKsGypSQyYiaUjp4BzSqggPhWUKa93bwhHZAh7",
  "key14": "D66ydSf9EsogigrSCLEk2qKHYPj32NwnH1Ww6n1CkqDjws4JBwmuZFKoCUn1CWoKkhWLZsp7fkiuznmiSSH7x92",
  "key15": "3HtLbP4BPcU7TwGHA4FY4EfaJQCVTZdcuPSmPpygzpaosLcfm5VPxiUt64Qdyb5418ChqrreFibd2P19nqAsDogy",
  "key16": "2LA3nKYXSjVTfp1CatAfTXUbfxp5vswLcmf1UiFvdN4rZtcDypi5KivU2ZodpNg56XXThuryZKarpx375K2WGddv",
  "key17": "4Gkv4zJjtix2kxPqkMnCVFNCq72uHa7HdsyzfyVe11P3juDCgN8oruDrHTSgsaJNjHbiUBb2b8k1mkSjWXWFWxgJ",
  "key18": "31j4gxTm3XyNoKg8KAg6ZhyqVUmgu6et97UVr1eBUCzVnbXRHomxDQQMyrd7XL5HmKXrtXTXLrPQuxUqc3EGQRbG",
  "key19": "gmCkJ2DQGq6639if7pk31mzT6p9k3Wj4G28AFS5tewmHghcd5FJfAui3K6NSpry7coeU9c6SYDGmNnDyEwJmMfb",
  "key20": "58T7XyYbjrTkc5Ltzo6RApYHZXgH5Ynd4Y3XwJAW8kDc2B1W1SVd9aNQk9Q4iJXDnsDmEVL9Xd2rP6XnyKaW9udV",
  "key21": "5TZvxU3wxMxBoTJYLa5VY4nAZXWUfPsqTsEpdcrvsS5nQXMBmwwRmAcR1jjyZfvVY8mBRZybRxD11dtEovcEezaq",
  "key22": "5fEZVWwgeeWhzaWWFhvcD9UZqA8aAom4h3HsJnSi8ozhQyowQwB45bZ5BcopJS9qoZ2mxyjiV494fdT7bTnuP5gD",
  "key23": "PCebANQnpJ52CawE6qdvkMhR4DakvxKQFLEjsTkiQ5ZMQeWJoTmgxBcoT6Qk7xDzohjZbvHXfVSLAXVjtFmBtRs",
  "key24": "2gPqP5Ran9RYgdn3k1JHF3iiTVpH4ehwAPhq16EmmPQRx7uXzSBBX82H1aqPzCCFeJYSbHoNJjhfjEV2RFYZgXvT",
  "key25": "49zJxo7jEptw3yj8iz8myNHs3SJA3Can7cn96NfAdWdaFZcrmZG8GhRas8RdjR2yoB8m6RDsdB3Kkib7bSfMJvMo",
  "key26": "2o7vTY7mHzzjbNv8bzArjzUTrWYk5YL5cyeZBQjadqNBGybEQTWJ44MfWKsArcN5NbmPVviNnZksu2KDQLfPS8Mi",
  "key27": "2aCEb4KCiXsDVFfdGs9cxw77PE5GC919L5uHvMZkHtTgWjtEcEWC6m1dxe3qhY6Nq4Tofffk3GVr6YbjqmKu7BpP",
  "key28": "26JPGtZaAogUPgBV8p9f4viY6CLVzwFpAmEPEQTLT5WCM8241miqNpDEzPbkj5bayJwi1oeHrJz8BrFvm5NJq6CY",
  "key29": "5JpbqcU1CemEAAvQvbLPCjttLraisMkREQHcufFxYbZH7pZ1XAgjJrQ55xCGRNqqHL1wMB4QDJbqurvf238SUWKe"
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
