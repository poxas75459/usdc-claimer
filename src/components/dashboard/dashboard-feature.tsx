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
    "3us8GfDfJNqtezsFvoj6GimecehwszfA2fShDX8HoMR44ivVN5u9qDYSQeMvNGUrYBeM8sgD474MxiQYjnay3r8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Pg6FxjPvqJNatRAsg6MMSPyeSMzgaeYDHtLhy3aBJJJjVJ38hyHGrRWK7UjWg7KbKYK35rha4kr2PQFS3DcCub",
  "key1": "bpBfevDsWxfhucYwTQwPVtmurbfyuuWVbgwohyfoWX8eVAZqdzWG3upAahmr1kbzmmqys6kSE3KJB9uHW5HanFP",
  "key2": "DXSqwr3wCL9o5tFatySqw3sfAWm5WMMFZm9BqXc9AESKZCyFcLMfMjo2cS4tx2bFBsKMNJ5PuqpnnPba4KQ6Qd3",
  "key3": "WgCTCZDtnxEdV55tf7a6aLo5V1e6aHYr6W9M7xYLc2E7vnaXd1fwVRdzpDjWAeTUFMU51VtUzNN3f5zvBNgo9sA",
  "key4": "4duHoEcm8wTytczLDL1KXDprQLxPXkmGcJ75AbTTXoka3G9ryKMyVmnj6o1z1pSTVQPShoANjJ59stfAXHpZ5NEy",
  "key5": "5PA6zinG6Qp7ij25BbYK8RwA38Wn4yAbNBHUTe3Fdu5yyfoHSzL5ukgAi9ajmWZsBMUirLPstyycFvUdWtrc5boy",
  "key6": "23ds7qQ22HDDZ8avXetRhE37pQWzJPYapxjmCumEbihErcw5jS49431VSuNqEUKwdgnjkxm3J32zyhtYn4qG6XGY",
  "key7": "Tj8tjci7VHgpgn6JtaFeSAEHbHoiwGkEN88sSriUjkca5rWmezwYq74ka6PXR9hrZgo4KSHHm4NGapkZJKNUozm",
  "key8": "6i3sXKhZTVRPftPUcj3rqz942muY2ej4Dj9rz6kh2eLi9TN7Zkv4j6bZD3ejcU5Q4aURwmGzHtgf5C1C9SFsDVs",
  "key9": "ku3HVJtW283pde12MeJkSgwKNjmAG89R9ogo7bHWECk556jmz9FRCCNHT6Met539hP1xhiMB4gmrEm8tP5UeKSa",
  "key10": "54NAaPLfEu5QXyno4fANMAjifZdLwtXb4BNrUTQsRbTZvTPEzPJXvVj7M1wR43kNo8X3ejX8gpUg7FAgEEKNdngB",
  "key11": "4KMKCxunmMU1gUYfUBCtynpbf9pCDcGZyFWWyeuPzwvTewvLuQ54zNEtgcLrCW6uibjT2xnKhfF7MqU9qhCYKRRu",
  "key12": "37kthGXPK495DwmbiZchciAopYTCxynEj9xQdhWLX2diHgLMjzdmT9zBPYKgudDgt3jAez2bXauNZs32rPEpE7EF",
  "key13": "3z7gRRBppYcxHDgJmSyC1EGD63wgrkwKx3io3TXDAZv7vF2mXBDWKDWXEiksNNDBSzr1SkPE7VniSjA1DdaFMciN",
  "key14": "3M5bR4V2TDCfgrEkh3uDu6DyvSmD5YTmY1qZV3Yk9c6fNCecgzVAGkunKBAh41bbgH5NZkSfqnX3h1HxAh6fgrLp",
  "key15": "2xVhxXjvMyQwMtt75uVs8rWgUfuuEqobq2V3xSjereiW8Vh9oZbH8eA3h5zKsPs8dGFEj3SmZp1PGwCUKrbwuNJs",
  "key16": "4QsYz1xqbRWaSgQLWcKkAg2DbE7KL5LGhdimJom1ZQc6f5FTkq6LjTgEQ2do24QtArCYDkLDz75mxmWxPNXL1vWZ",
  "key17": "3do4dBHRYg8bDPqDVtQqwyZP8fPQRgk2faTNRCshGe69SDntjkYzMY7aKqh9aRMUNJEFdTQbACnWE6M12Lsthu5g",
  "key18": "2YUTvWRGaFKxfJWEPj4gLJAghrNPneB87KxHy329pRKJ5bPd26ycHi2hHzf1KssnBcYUVksgchi4xYN5jZbHK517",
  "key19": "3StVd7wtTfKRrqW5yQTXEuQwKEYD25kJb8Z1kNs1cKakgrVbFgXaVqtB6ks3fHUVe7fuciDkfgLLgRXpzeawauUx",
  "key20": "2PiMFghPBsJe6TVFN4iaSV1jDYnTMejfGM6mDuxU1NvdkKPmRwNkQPA4TpAuhnjBaderJfRkYpCZZjQsXCGoqfCk",
  "key21": "5Hm2mBP3Xrk5NXpWZUMrsVE8tr8GLqYBgnjooWEz8zoJ4cHp7nK3gY4FKSYk2zSRNiV9jfCGpRrWPucHNjdxFByG",
  "key22": "3omg5kyk2pPmtKTGrJuDsWWkuQACcU5eNDwUiMHVfZ1nkEJo9bChT4WD9ynrLh9xMg5hr3DbwNQaSkmahAQTHDYw",
  "key23": "4yyN2GNF8dyayUTQreJTsW9eFk5dbG3v2Tv6miduodhrqvVdgeFkzuMR7Pf7MTvUjauaZqfdjQiPY5nJfRG2J4w1",
  "key24": "4ecUfsd8RxFeLLQHbyw1kfpzsQjovQzf8k4ZCYHx873qF6nTaVjank7KmKTQdCevhzVMDwzdt5z5EDJUjEdohnqV",
  "key25": "2KENfufZu98ZteFPQDV5VSyoLuxUbgYDdE8aNqBL47R74gL3qG9VCHNxrh1Y6D5ZPYSHDBbp7XhmtFB1LwfcrsVX",
  "key26": "3t63iASJ7CCyb4XjL81uL2jveS25sbVEeYDJRFJbVGrGEcVFciV3Lvg3h4U1WaNQHDnHAQajZzdP3TXaDNkrihZa",
  "key27": "52dTTFRrRhT9aDk37iJnGtNuAuN2UEoHNChWgkkpzrJxRKwb6RMyC3EYeEAFpcs1wn5en7bPTiaW3Gp4BRPzMqMz",
  "key28": "4baoxGv6uLd6pNThRgfLAkQMaVKvV6SrNHfRfAn4tz7HkjxLHvNfnB3acgYSKv2sTCeAdxYMwzGo1XNcQYvvXCcu",
  "key29": "2qoTKjuJPTJNh2sMd5pbVRpEskwMX8MSQaFKakyF6peE7FAgnFDsHszTGkjPZPr4gUCgjkUZzMfF7nNHbWyxcUKf",
  "key30": "51BEryF5QEMH4qdftm3igVj5yJ31Qm3estKsPbQyqfovmjWP6BR2WHHHXSeyixLLEM8KeH26DaUfbwKUZ5BhdfYm",
  "key31": "4gp8zFdHEvfnqCmj4vQtFYkaF69KdyxMf1d9MYU9DPRkr5FUgq3955jaFvefjwc7F2Tdc9ooyKmECHihzHqxADF1",
  "key32": "3vQTGjGHwNSncRNF3Zp8n7aBbB2XZc1cNviMmZDyTpskezvWPuW65Ls2pkqk2kCVm2QEZ4dygo6GEmtedDpDKP5h",
  "key33": "3eNytJyxgM2Zry5N2gyAisuNYhLMCd1e7gpK6WMHh6mBpBnPFkAvqHaFCLGRVaYmGff4sQvUuS8j8LgZnqzaXRNe",
  "key34": "3JMi6B24bngGeRnukj7pQVxcC3mRiL1ausqgC1KN6m1A83ofmEYcoWjoKUsXAMM6H9i5W76idEFpEMV1zc69ihWX",
  "key35": "BLsRpSrseFBkW9kmEgkxTUKwsJJ8p2HRQiEK3x2Vq5sV5UjdDUY8HrdsywLoiadpkKUMdoRuy322zXx51EKkwPd",
  "key36": "4cot1yV1EasqCDAhA8twxHng5KCWw6HGUUUo6H4NtbQVAP5rkxHxY7h6G6HGgoYttUUzqtSDDZrNaeEp8QyQHaP2",
  "key37": "HSpwDzkFzPfbtyWjYftGmS9rSRrsnxDdWjYm6SNofSeNSz7QpcPtxpzhJPmC8bHgs5Z9ZUQkDWunJGNczJtK8gJ",
  "key38": "3NLstaWhbeZpP3XGt4Pi7Ttn93SqNARkeMsQyth5o54JWAW2qNyx4gGf2732Dvx1GLs8fJtpCmvB3Z9GRDaQeiRe",
  "key39": "4foeKUum7a1CTW3LB3vEP93WVUwVbp6JaZ7BXkoumip15LYa24HrULyCUPYo9HFUcqQzzVbYQktQy1EpcNoWrLMk",
  "key40": "3z13EUxmLBUZdU6AYzuQryf5MR7HvsLWV3BEDB6D728t3nGr7RXPd2so3VqgCWz4vbYEyknMrPsvvbb2fxQaZApA"
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
