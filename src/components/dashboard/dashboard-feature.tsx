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
    "31mQ4SnDYYJj4STu6LxjuSXAxeQwc6b7PUayqbLrrDfoHXcJh1WfnhMePh3EVm7QqhxAm7E7MzaHwKMgCn4o3y87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6V4SxfHerD2b5bPe4G3DJFbgzawqX86q8wvUuHjnGVQRXga2w63aHxTK6tMSNb2zgkUFnHTnL7RcNBf6TMjjjHg",
  "key1": "36Bp3GZvCECySpsDLeUzVxDfaFUHJqQygu8csAAPzzPVyfa42ti1zewSfZ4fsZSpsDNsuoyY4DtGrcVxzVRPJRr2",
  "key2": "3SpgonxM6gqVP7bmen7ctzBAJ6W5sK974CaVF6tskWGmec2mniFW7Cbrb6EThmuN32wEUsVpWooQYo5sHJyTfBGV",
  "key3": "46FvgF2nfvU9SoW4BfNB6YLLF8p4DxEBrkxnsf5fWgYmMYqHpYkncBW7p6x3BMu9by22UGcyEf8vP1wQ77LMJ8AG",
  "key4": "28pzxvwouGpyuMshCBJLGy9BCZ5AB1E31Szv8SM6CmadzTsHAmzVRuyD16pumR4MLEptUeiP524qNFK9VdF5pco7",
  "key5": "4wcKLQxESckPzs1o26du92cijKEeWVzTY4Jen2gXzYUhsbessKNu7RtEdvmjQA8ha2NxJYXcVUjSGvTQ6ygSSsw5",
  "key6": "5fSRyE5jDWmE38tftmA2qsqNbr6FYK2MvTfFaDni4PYWpFQyisz3dxeR2VSkWDzQrM5cvkEvFsCNZ5o7bCaxKPom",
  "key7": "2r5gDgsVUZSXj281y4xccRAyferP6TDg7EoqJwpoJDKG81FMmfB3gATJ1XPRwcqsjTod5ne8kF2ULjdeQ5vyvSfT",
  "key8": "54o2aJPX49keyszQGoGVAomLkMjSL3QPpdRveKK2C3jtFx1hvvqUpg6pCMagYzYHeM74jtEwoGqKJtJHHXaCpA13",
  "key9": "PcMPFadqGQZNibEdT15Z3i5XTWLQ8AVSEm3KWJfeMtiTTuJPE8H4J8ZnAU1N9L2Yz1ja8GS4BuGCUhoKkhTifA3",
  "key10": "3btKTMH1DNn3M9zNboV3wTD7TF15yWsEsUMLb8ti7f1YsUYXzYyLBFKG6mxuNZg3o9NJexYUDVnfcLWrYgFb5pCx",
  "key11": "4Fbu4uodUBNg4C6k13n4TiR9yXKBJSc9AR2n199ABGEFGQajySWhYZzZ7Ky8DheCTFaatJ3tvjM1R6HvSL7N2pF4",
  "key12": "KDxSkXbNsbPZJci2GuEoYLa3FtDgw3bNeTevBXNdwUPJspr3AhaAJwFLpLjVwm2nYCWJob8Bu4fWrHjtZFNDaqQ",
  "key13": "PGgau5TqBEedyokbV74YreicbVMd1FkRzzmdaSj9y2D64Es8WQziaubxTuF8bmrN5HC12Ae1JUyxvX85mJtuMim",
  "key14": "2qc89pD22U1PK353sVpC5EXxB7jdLwJa2FRELLvcVQ29fzhiBBG8xTAdB1kgi4cuzMzuYdXHHRDkesvACPrXQhzs",
  "key15": "uFjkm8dPQJXeQM3mSbNykGj7e6NsEnkBnBAA67nb3dcaJdZszo94PKxGTkBdtpH7VVR2QAJBLy1r9GD8zRomdXZ",
  "key16": "5SncaFdZTr2QhwfaxGWBQEyEeXsHiuXczPHzwYrG5BK7kgnxkCFGsFrd2TGKtTan9Vkhp6xcADgSC5NDoZkkdqVy",
  "key17": "2X4QVvAMmp2wH57GX6NEh4zAyPAS3RB6ewXJB7cixMehVwzKdtiPEa54wEG9nVcm7swaqe2kh81PejVYLD3jFABg",
  "key18": "3hyZu6oHpbtxMpsyVQEm7NAoTwk1madr2wH769TXtRNgdtB4iw11uBZezvBwBmV87agEJe7WAR3HhuwTE9ZuR72q",
  "key19": "2Z9K4HdhdHGXBvU4pzttGXgoFocsdkPdU6ZEZ6EZuoMkFQyg2gam399jNn363etw7vQUgH4ibXXjLSrsaZEE3245",
  "key20": "5PDPo45rJmkhJRmYjTG1BfpG1N9XrxKK3UHDVgBTmpkf5SdqkigivpvXakyTr8BnP8oAdAoa14JJpQJGdmentzjU",
  "key21": "5uPJLRm4PwseGyQmG3u42DMqSfgzZ3V9o8mdZm4aLDsKFaBMGKRDtr7mnHybXhs7hkSCqX5v3Tso2vWY5RCo8eiY",
  "key22": "5EGTfqQghcMzdueCJnsrHTmUBQNtxNxEjKKo2X174XBam1tRQ1UXmC5uDFHEhtsCFE8i7y58Ck8HpZsm4d4op4M3",
  "key23": "652TkELgXVAu4gxLEXUahPnu8pb28s5eLrKt9WJfHQwFoxDHz1WLicZ8vkAG2N6JoPpTbi5Eg8mQnFZ5PLqaftnR",
  "key24": "5vwe1mESkXDFmi27nuDfyRJ6gkvSu4Trg1iizSvkjVDvrSyLXuE5pZtac8grqghA4wLvK2RFCgz8XRuxGBi14vNy",
  "key25": "PoyiYSiy6fN57fzUnS3fTLmVLQ63ypC6QFTWP4exsRPzvdsA1JuTs9vGhj9nfh1uBeeyXzEg8s94gye5sD5YzWE",
  "key26": "3mEoXw4bjSZSn37bMaddYcCT1u18qv4ZYabRoUfgUHiY9Rx4Fy3VxAxU3en1UUko4fTQ7v5CYu5DP1Dpx658dqMm",
  "key27": "4bk7cjp5LXE8hJHQUj7WXFzrgXmFFVmQKKhVfqz5KeggpWpwy1bGFhZVKriaxiaD9takuMq8vnjsKyT37tWgL2s2",
  "key28": "2QBY2Cphf7UeEkomvPN7qKjR5sgDtS1W6TSiY5pjSpn4SaF5mUH32N6AJW9dnzsEchujooEiTwNYgsVQhLJxvBD7",
  "key29": "66TyuqRGf67L5FJeWR9nnU3aGiUxx8pBWP14FyuqaJ6BmrrDSWXR6jj2MLPFZvWxgVQ1RayJsc3Mbsg3sZ9boEuV",
  "key30": "4mu88kQsqWLpdMd4uhmEgrwk4cFLj2ZtfWVAXX71ahevv6TB2VgFJ7grCZJV27CY8otEx5e7zWMjMsWWaR487xu6",
  "key31": "46hm72Z2BJnoqUZpXergyxQeCqTFjXT5aLmhjmQjxvpkbaHQ9VZQPYiA65UKGvFbaF1o1TMafNgukU9y54cCRGAK",
  "key32": "49KNbkjcH9fhssvT3Z7u5DruJaAQeg16E3iFLvkduKiNBEpwuL2bG4zGiU5GQu1KJLYWSo7D7sjXkzBZmWbNBTNR",
  "key33": "5z4t5aqr7LoK9SfVtw3TmgtQDL99V9QnYW7C29uA6ZVNA2tneoDvAHN3Qb3HcrzUs1uWksumK186ywdXoh58kieM",
  "key34": "52UMYYEdZmHzureErkvkuiyrmaotGaF35EYdEn4g7PDroogP32wH7FdPf79uGhNsAVZgWELbj23mVkZZkMHhYqtJ"
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
