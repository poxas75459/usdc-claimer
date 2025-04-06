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
    "47vp9cnVEkn2i2tw3ocuMrdmFytoR9TMTpaQoEkJ1bYPCEADEaDhdJ1hxcm48ixPHGdn5SudgUDTNjiLTUwL7cMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H4ATtR6zjJLTqWNEP6zPHTVP1dTnPYafoY5J7MsxBBqxKtBFnF3XCLgjoLtVtzL1LLsbxFgUPirRjKvvXGEucnY",
  "key1": "v9Xzs7ymxvSt2vJ5gBpSXTBpvcbmnmmhFmRwR6cn95hdhhh6LgMVFHFhrJ7XHTRugybujHCkKxY4JymAupMQ9Ky",
  "key2": "5sPpSA5sCBYJvCx9jQmRaiGNSuo2T5QW6Ru31vRw6gf8KC5bhHYR9pjukE2We6F57bhebg3WyxVKDC87dUGDyNKv",
  "key3": "622QY5MyNCTBSxQ2nwdK8dXqYK4RAC48cBeDbrsDhbADRwpQJirgrdHVqtrUApwKpsERit7xHWRiz5sRgQkUdzLN",
  "key4": "KzQBrgw7uMNLRAQ1whYEvAfsZ7ACgFxHLtZxqdh7Jvm5JdAY6qnstHnnEpY2dEc3aBownuzRBNbSEqkcbBTH8RB",
  "key5": "3D96uHqtVgsLgadmNLewfiXLqM5iwct49UzJAXHwd1CkJrMCig5AuMfyRkA26KREYmoPPLJnwcEPHbWxpHgTidNG",
  "key6": "22XAZqjYYfM9iWWuZmDr7rwmSLmgZ1pU5EMnkkCKdszdPHhMA7JQ1EpgSWGgu3wzJeqhvG9mkWuhhjfnFhbusTNR",
  "key7": "65TX69oDjQTt3ZRnvZCbjDnfi2fVXnbQ3jYuYnaHdKWwpwUmCE9GEWFGe5t8qc1Wm9sczp6Zu6SRb4pHU2ecKAvn",
  "key8": "u9sotupCZjXjtfL6zoHkhPLqqzNMwAjtvJwQiqvGTLUs8h28RD8QBx5pYuPxEFcCDHo9Vo556S2r1FUGwg2yDpC",
  "key9": "WKntTdA2mc4NVJNUr6kMU9X9trAoNZyN5MDB9jHi4zZNxC33jE92PvJ8rwb8sVihS5ahEbWyX8es3M7jvcDhm6q",
  "key10": "5L2TLzWiaz4Rp7GF1ERcFGELTvVVGGkKYSNKj6kMWjgnVfJsMQkPLJRJfgcL7gkGWHP9gNp8Q68TQyjexnCPJV1A",
  "key11": "4uqaMGqeYiwu41Xx4yKdfpXnXmpt4LtWPBRYzqdZSyw85A5hu71ivf99Hiwq89XHsrcTqfHqGmP6nrays31ViNLJ",
  "key12": "23APdk75CLG21YzCTub5jK9AFy449oEhiAMZztMazdyu29jddJqDrGMnNS1JTXHrNbKtcSgwrMb2yDjg1mm3B6oz",
  "key13": "4wwmUQFNDpFoCTE8XHBDTDVVMeVM1U1ue6SEadxLoWz695CV1ygAry8qWmRRHAiMvdxbMSkxhKE51FGGbeFRrgps",
  "key14": "52kJqg57Ma5MDw3YrGPdV8FrvoxLLFQudsNmDQzB7Kd56cUQyk8CniRDE3ZPn6tKDH5qA3SBk9kZcrWzTBWrBsVZ",
  "key15": "4NMZzNM21GmZHnVkTF7qtwpcaLRd4T615ep4ijo28J8kvERa8hCL4qTm5KbsAAyyj1gJ2ELptw8KQC5ss81Ai6oK",
  "key16": "2PMZY3YCkbkxLBv4abi4msVFedKiF16vm8GhmLFCTswAXo6G2PGFt7fbfV6vAGCZTwXLgTAtRkaChd1WMS3ts7T2",
  "key17": "2UAXQKsQyv7Wac5sYQrsUdQ9dujKUyfiDFvJWuvND2X2a2SuY8t6BbgbcWLtgUWa2dBc5eupHwi3AtVtYiRQaxCu",
  "key18": "3m5urCCTNYpVrwvX1KPkKzuEn6o8K5Boq2PVDUZTuaQ49ejM9zHnBEMAaiNyS6zNp6d9414vmDoR7GuXwKc7ENLM",
  "key19": "62fiWEeuBQyC4SgJLNkCuRkQ7Ftxxjs5AnkjAow1ZfZrHJZ1AJWwASG4pcE7q6WXkw7A65qBnwps8QXSaxPLjLiP",
  "key20": "4JkNQ1HDHthaa57Jz1dcEoCUV3VuZx2GSm6DZyz5bsdVvyJvjLgVPeuuQPT1s33fwjyFc7FxqHwuXQgbvReVEov",
  "key21": "5NzZZC5g5xwAHAxYPEEJKSCiziQbCQzQA4MmoFfdkQc3T9h6RVPS6FnxZmLFhufbTvY1hD8MZFLR4CUAwb1qLhaR",
  "key22": "ZrtuqcV4dvZe2tpi2QtEnkiW6EeWEASioKSJypNi8vqQUPqP7m1UN64MxcPizMyQA8Aoh8ouwKbMKXk5yAKu6GE",
  "key23": "z5acmQ36LFQjXPCmtF3dozx7K4tWywW3UMuLGEiH6YQU1M72Nf8WeqZcypz2JVD8gzPKP1hRKmWhA1aTDBU9LLA",
  "key24": "3dD4rzvFf5scgwFYD7Cgw55BGSnvHWNjmv6B6NWVToxTUPtek2Zbwk83A8HSSQg9YRCk48vyMpGvZw9buhnLzhfe",
  "key25": "4K8eYPSLNYspxV8amsqHzY4oe1U2urSiv7PYn8QBgJVnKThZNnLsVCEuVZfiMesC93KgKs5vJFmp4MynstKmNyco",
  "key26": "2xYePMVWSss6EFuaTEKUa6sXRpuwd4ngFB6KPz37aR6XL4bYARLcUzNxCrHGhjQQHtXfdf7chZAWmMrbY481BKAp",
  "key27": "5uixgg4LTHJXH1CSgYs7DLKhqaBGcE5myE7VEtYiKgcaXL4GrexkBMM2ymZ6ksnhWTvKizyuugqKqHA1sjqemKss",
  "key28": "pGuFozFSgtDrscsREihGqHZ2m4SVdGfTdnucnojjomn39FfAAG63i24wmaqiozkVS2PPDMpFzN7xboG8gM3QRsM",
  "key29": "3pmApxhZXWVgXw1axLBQUTMiMxmKCv31CkDivbe7bTcwY1uf8Erjc26kECiwd9cS2Tomu6CgrLxkQBzDJSFpQ6N4",
  "key30": "LjtcRWRDR28moYjopQHcRVvCa1HjdRw2oEynBjELYiNZgXuSP6Le6WpDRBBW2gmNwKS5tNGqZkuU2cKDw1nozbw",
  "key31": "3LYq5M1RgV5FqZrwGHcN1UHLHaBb3X56zLAdCn9pgR3E27AX1fqRbysfMx9h2H2wZF7Q2WkgGwD9KibWYykwxKAi",
  "key32": "5KyMxJTDiJECJU6fN4UJpUJjNrbJYRq2MVmX2gEFkH8bAFWGnVrBMXcWNLUREbn721jvNwBPMZd1QtmP3T4M3rvH",
  "key33": "5YdYQiVkUDbDAuKE6XU6s31TZHrdPtmvaBcnuYGaMfYpzUbnqdcP5EtAfd9EU1bY9TpYontXSRwHdLce3A47QhTM",
  "key34": "3cRC3mmwpXjfzfiHCzVnwppvHWhW39TP9DicdTBzpxpfe3cLuu8LE3FdfPWFYnSqYd7WZk2kTk8YCMYj1NrowYWK"
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
