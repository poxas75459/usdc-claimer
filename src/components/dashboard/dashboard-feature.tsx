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
    "4NUt5Bw9i9snC44CbdaHcyNw6ATLRRpPEdDsFfL7g3qzBy1SJdQqQDH4u9XfbtoGGvq7PxsmxYt6Fa97CbKSMdP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pmRWWP5RPmaAswUwZGyekYhnS7cg3Ahqn5K6Yk9FcW4hcGEjNyuKBATfLX4rX3GcgBghLF9hN5rtc3uo53qn76d",
  "key1": "59Qfbg2NEEFHNo8ogJaDsGZHm8rb5rt49ZbxMhPVb2PcvTspuASxgKgkD17TzjSCzbsNAfzZuZt4mGJgLnBgeumN",
  "key2": "27Pz9tFFUW2MgCEcH4b4ReifLrLwwkFLVk7dZk1ncdbbp3KybzAkzDe6J9g91PFij6rxeTK4mCsKR7KfAAeTEc3F",
  "key3": "44J8375Y9rUFmbA9jV5W1E9zBNJ8csSNmWCXfoRcADXYEady9Fa22rVVNnGgP8P5E5HYj8MNAc6c4fuNN7QMG58d",
  "key4": "3rd7GHEZS6ip5xuRM5ZR8banHUN4qiDy8chnYbgVuDLKbWh9pC1SN44R7dsPRbZGx84rPevXq98sknGQQTXasSZM",
  "key5": "4hiqToWA4VxNsLWASD3AygfUH9mSzxYKZZqQMQYydL68FbeSLZSSbLa7Y8dLdVs5ojwYiyfBBFwtjVST9YnqGjxn",
  "key6": "2J4WoDMaPDu7tSVTGX4bfySnUFXrscfCGn74sHpmNrmjB97GbPCyAFziBWuSFpr4SMmfXDfkAfJyjWSXN5LG8BFz",
  "key7": "2YESH9qSv3C3UwQSSkqUwjYp6mymw8bVF69AdpJQNC45tBRFhC9cMjRisTsGrHXgBRGVpQJyRfxgx9sU8M2iq3CC",
  "key8": "njU3HaCDDLxA9wZNyC5VrwFopcuZ4dQSKWpChwGHbMKMgYoKn8ewuF3vJ3ogG7P8koFzuZGzbCAqm5tNoSWP9p8",
  "key9": "5JVeYimndGW18dRHWkFp1nWRVZCsxpxk5j3jsHnhNbsZmgkmWez7149ytV4gzXLW9hHe4PrH6L1BB5RmHBa8HZ4c",
  "key10": "5U9jd1F8qEHhaeodruub4pckvX3McyfaVRUjGPpJB9XLWfY3MgSRocDmUrXsGJnSUuzFyuMg6uikbudYVAJEoKBN",
  "key11": "3mfdg79AkCRpxS9vYBxbzVAM1NQ6bXaL6bsUz3PdfwtnmejamN1tXByMNmeffD5Hc6w6KX5wFJse4KGRDMCwLEFy",
  "key12": "5udTqYGq7bqVCvUVQecQ6r4xWH5DMHTfXQNWWSFBBEKYvpxhdpvyYwFZ1kbtRtnYEKC48Qj43ahNFTdhEPN2Ad65",
  "key13": "5scp23Qqge9Ba5DmnGYg1T4fejc93iTRiN5LtffW4ZJ3KgKUFZuZjhNbBwC6eVktqBBaQJVJgv1TNUC4ybLnuDp1",
  "key14": "35SZMthps6twMPagebDGjGr8dG6A4XZzGcUgDFZ5EoobxTMTjmpSYuZzMzUqXmQWfvijn4z3X9V2XTDLmpFiBoU6",
  "key15": "4riaVQLhAvv3CcLSzCd6mTZgG9URNZKoQC3zGYBhAxXei33GDWRy3Bp84VWJ8jk4qsmJZFPPdU5jfWu9om8RuwuJ",
  "key16": "NcdGAsKjboCC2hYwjGb5fsknPD1N3sNKpQmfVzcDxxqiajr86EmePQMjjj7cwH25WHWgUoZWvpFaQV1uVWYX4QE",
  "key17": "3tnnJR5pHJoXbv8xqvpUNhBPU99e8xQ63eY19R4n7YzG6JbSp8qj59y5dsmHSPPhvRn6X21WFFmXWK7SdpC7F8Uy",
  "key18": "4Xb5BhNtUSsx7mR7YCNgcPRQSckbKXTgMjq5Z9iW6kNXFDDgZvzwZwrJKV4ujf4ttyKXWYNivViSm7Y3Qi3suZDJ",
  "key19": "46Twkq5VNCKignS2GHWBpU5f1sFtzj8bnkeF6dqkYnfMRxp8neDFQKc2oDrRNmrxnHDLS7PPDvznH3vGQtfWTFtq",
  "key20": "RUjqXcEKT6Yu8dERmY4cBKfhFWtbQ8hYp2FEmhTtmB3ZFw1ApSD6oCvC5gkQW8jEpNH2Vq6Ppisbg8DWzMHxJFJ",
  "key21": "4sq657X1afKFEjKj29n6AUHRAMFEE6sQRnS5SDEuTQgdpLQtoMByTGNTcexRKf7BF9QVNWbyNAYt7PwEzKLKNCTC",
  "key22": "2tV6M2hUSJb1wrLntathVtHeED7DoEBb26rfaazwe4ZKaQwmjecjt4EMFLaxrdspZw7M5HCe9YQUjHR6x8WAkg3J",
  "key23": "5ZghSC8DoWs1y4xbhbtygTYNS1NnbHX1PHv2L3CH2zyBhPCfSiHrucxD9dZN5WWHeVbMegFK5UVMQ2StmiLpgdPQ",
  "key24": "39h4acmmTvJBbye4pXL4Y4e5anLx6EuJoTg6oRgGw2zYBMsKuXkfshfN7PdCJaxgUHXzFNAfpozAEyuM47Hn8PoD",
  "key25": "3eh87Hte99MfVSN9fqK19LYDKTJKcUw77mBnkmEuz57LEA5cvbas74BE96qe8ZbSzQRqBCGA6BZopoNom5G6M5cn",
  "key26": "Bqkt1o1Y1XGCk2ngKB1L64UVzAbw1m27iaxBjmbT9EByJh9riuYvhRCtk1dJU4EHC5h5ASwLbmxX2CsFtYRpZys",
  "key27": "5o5YjKKyy5gNANPZDsz25rw9sfJTqutDs4EciKWYhctzgD6zjZMvSsjr2hBKZ51Q8WCsp2EEqnJTgiJn1Xn3rVxo",
  "key28": "kCXb6pszRBZ4baSodNm53N1XyGJ5nnjjeMbURgeXp7HfBfGjiWZA8QsjSfcrbEUkoBPfHPyQChfVkc4WooUUi9B",
  "key29": "3aSUvPGrHRETmLrWbAQfExSBjn9Yg1Hh3p775UrN2ni3U9M9qzpuGoeM2d2zXGXfdKA8YdJJqNBCq62Uu2sXaQkG",
  "key30": "3gATacCk4ChX1TChjcsvkm1fFWLZAXT6UzmFFuJgMRFBGNEYwYMEsi98MQspVeWjzXabDTt5nJTRMjSwMxwN5nUz",
  "key31": "4VdFxEhyPuZLNfA1XbVm8Q6wDFj231GSrmHurEtixXAQWDoQZ3n4HJkNnUMZ6VQzcNb8WweXjd5AmPvcdQ7T1bb1",
  "key32": "5fL2gwv9pg5m6BA9SaXa9y8q2eBghN24U2JYPLYMsH7HQULoFM7WCkLQ6r84Hoa9gUoQWyubbxkkeZAAwBEept9N",
  "key33": "288yV9oRp8MWFoiaVwhXQo2pLEebjt7AQtFJvUpegwMe5DMVW1PT9euDcm7nRo5zbSwwoGPkJs11j2ZsHPisHMg1",
  "key34": "3fj56JEyrcDixmwQ13euXxuT9vT6j15ZtmrpnrGZ5aVwowfL59RNDDBWuf24EQXzYujfgr4DqhRhqA9CKDYddaAE",
  "key35": "58sZypHhsQCWYSMUNawrFVJagoqTwvEq8hxMBpLQas5PjDRi9DyggNBZjYgRcU9XaNEhiKWG9LCscjEwmiNhPWLY",
  "key36": "63CH62o1prQjZnBVyoZRiSmkCDuy6Gz1jT3DobvPVF6aH74MFiGTN3PgjTB5gQCaLvyAKYQ9rppVgxNpVNgLiuy",
  "key37": "2UrZ3b5eSkL8c7CcAa2bjiuQg9gJiwmZs49bgMeUargSaLK2bY3pvSqj9u4hfjuphf7ur9Epptaju3iEeimremTj",
  "key38": "9i5pWNNmGNEiUWjR51fwBuNHBZC8EBgzkqrNN3TWBytFN7UQwDBckEkjuJLEKbF7ZWckBWWepi15eCTd96rd4J5"
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
