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
    "5rKrH78L2ywaVAPVP8UePA2eLQKd8fAKCb3XRHuaZQFPD86T5YahCoMGT4RERhQqDR5mPEqbqjEgdeQgoJ8qneCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rp8WrRF1CiEngRqCtrY9EocQrEqQyRx7xZSBhGRzN4QC1be4ZVXdi75JGK4UQYTSGbMVJFhh2J65uZYzCYyjthS",
  "key1": "34ioSN7Ce9zN7odFcduvr4yWpLr3XsumsMHbs3mbGgy8DSTBCZiVB7okq8dSdDzWs5YDRY7NiDEgB98qoWNbyGvW",
  "key2": "cSv28LpXwkXSHK9uvF7SwdyYNFMZRdXwhLB2fdUqYZ6EHhPZzKXqjT1LvH7RGKRUp9nUXQq3H8ykhbhJXhaTPp2",
  "key3": "3oxN8HFuACua7Xar5KmRS3ZnUzsFM9k8F1rJXuPjCK3vBXWk4ZceHB6CavEkR5ucoFmswte2eUjkx3PsB943gBma",
  "key4": "47H4JvRHxN9U74i4bf8mYakruqvCyU8dwkcnZ1CnhWzMqF9yQw1QS2Ex4hBBm78JawtWugHG8j6rf4AzbTqxJRwA",
  "key5": "zEmKo3coC4DAxVEq7iNynj19KHSM1UypmvfQ8hCYbD2gx4HthgvN3anKit5UME3ZBkX1oqpq1wsE7gpQfQSdTno",
  "key6": "44SmV7LFsm3esPxXkSna8Fy7nk21H1BqFNVNKxgwGa4WZPMPoqYNvMD7bT3f5w2FkqVxr2bYx8ea9zJc177MxmrL",
  "key7": "2dtdErUqqNZrGxDCzhLzVQBnE8aqQ7Yae7u1fybRMmipK5eSUUFEdQWogaSL3bW8XZkSQN5MSDit5bwdi5oNptLJ",
  "key8": "3eUcDn7bsKVP9dt7qirHQivy1oPzQwBbdkD8sGaa9Spgy17MGd2PP5f4qdHnQk6WETQsi82iVhWkWvsWYrgu3U5D",
  "key9": "4zbWc4epbzn5nG4SvgEVBvq5vPsZz3eUftxroRdSmwZrM1JE4d8xGyxd6xQXocTQmv9cH8mG9bBaDNjkhLFy353x",
  "key10": "3M8xj6b9aCLew7megR2WVUPpR1Ex1dKH1BX6dGbK2BmxJo1DJcdMU7Y15N5ASKoKotVJaiHEpkpDCvhvoMPtsdpT",
  "key11": "3hsBPhLkQ2bRczHvTo1VSUEEjvCdVFdfR61EzirVc2MtucDJhTTbgLv6yG7DwW7u9XCk74sZYNyx4HSS6modGNru",
  "key12": "3zHeePkkmxKQ2ZFzxNoMkBsdJ6M22uNpTvdtjhSJqE8wyZFvrBt1M8sMNLAiZ93mA5rYJZ48Cbr5ttcNTBYzRwUt",
  "key13": "2YtRVBe14EV3YLHLfex9E5Xd6NwX3rQVvLxVwqPcVst39Zs4ph225uaRxP3Tu27jqzo9yy2GAp8uZodES3NZyhFe",
  "key14": "Tz9wDfMPQe9CkNtYkL5Jbd2WauvZgkuKPU3DNuhYwFv1d3VN4KV8DTfh4PhwJ1HXazowQE5ACrPauhoPeJbuTom",
  "key15": "2pa5ogMQKqYYWc5NAGVzfo57GEBUzxKd8tTHrV1RxEKD2wXyrjGXjWjEjpSLe4kTwV6qjXGvCupu1NhxKA2VfFo2",
  "key16": "6446ougQfNxC1hwh9ha54pn4ZAZigBCSE3eCd2kD4SbUPJrpVmMFLrdTdZtGh2PUKHxmPjrx7KPNQyhJ3W6uj772",
  "key17": "R5PRgkPvG6YTzFWyHGxwUputcGvwfb3QAJuUHgwUFfrNNGUFWeWPT8DensZ9N4KVn6FgPtWF9FVy2Y3gtX8hZwM",
  "key18": "h5iutyZPVTLADYQYgDkJWFWUz6kQWNEVuzr5SooxFUG7az2u8moWKyhnuU4Nqw6MRPA4GVVXbD7xhMtd1V4Lvht",
  "key19": "4yF1bkPHoxwYqd7LQXdzYrZ8EMLnqjfFZEVExpdCBciyihTYK6gTmFhdEoCYUaofKjHjkQfzSbXLeYRv41spfHGo",
  "key20": "Y1kravueDsLh93VYCs4CsSgkLCjPXvVTXbkK8ooPLcM6Le9Rw288mFGrYWcAcUXVMnL3ugk1Qt6QXAMQ6Du5XXH",
  "key21": "3Rr9pzqkZtQ7dTHZUApnmxtoymvgPXjCBMGNdV9cRMi8JBhamfvQkQKofWpQvL4Xj2bi2TgQpqVnLQ3SUMBhMFHd",
  "key22": "hnk164BbWXpgCv5zGhBvC7coo8VLWMtpkntzoHtkjWAAYitmKwdQ9J7MZ1yXq1uUXJZCKGbNwumeLhVG44Penw3",
  "key23": "3D7Z73EcKX46uEumFvvVjekU7mTx6SWpj6d456yeD7sM55i9hQ3qLhnHQTrBPMFRrhxQkRLQvGyPZGSigUt4cB9D",
  "key24": "3rAgNPKYpjd9usFTHigiR7rANnCJm9DV4iWEM1FdooFsu7d9SpawQaj4VCFM1vr5mGPXWFrXynyx3aqbYHQ1u9Sp",
  "key25": "2xy3chHjR6JPdWSkC6Xi4QPvpCDfmjQBERSDfU6MYwXACCquwSJSh3TQRiugNQV1GEWnrAqvbayuiGCeav7K1CgN",
  "key26": "5gaiEenXgZXW8ARZphY4aQyTs9vXjJGdHmFPKAJHzL3BGQhUcLcjaS9aaswiajitaPSfShctNcTRWL1usBNbAryy",
  "key27": "cVU8oW2sGvaU3DnqYy7xGTgdB12LctfMZLNGfzUFPCRuYs2miRBDSR4FdQFf3yxJXUiVjcEVa1Tpj6mqie6tsk6",
  "key28": "5myjQRP9UiWGsvJFJz36Gi5YKEJJahHfVfkPZRRkmL9SHoGeQYBH21RrEk43LyhgtcbrLSJuKWdJk6KxQxWEbp4k",
  "key29": "K19zS8Hjd3Eo49mb3MDXzidcqdD2fMYqxCqrnYtaFgECZKtXF5t8GwYJ9tQDCGLJepZjw2bJLJzwLdfWHRQiZLj",
  "key30": "CovXc5Bkg6DGJtTKbUraFuyhvWix5jWEK5XVCSDSo33dDJB2K1xTf5wGxSAeLkA1DiQASZfRGGoCbiJT6ZCc75S",
  "key31": "mPfPKNUV1tNzcXmT3QkaqZf9vRCX71z2JGjp8Tnf5nsJkavBUA36fAeWxek1xVpfNFubi25sfFNDq4FxadJqUxj",
  "key32": "5A5qBurX34fdUfYsGPW81p5UBkyDHdKgGpHK2LWJ6mjXFvjpBjVmpZpd9NctgrQ2V8TSZUHssVif1xcchVQhohBa",
  "key33": "3RUbdmFQoywvzzEQoSp9GQFv7YfQzaSmVq4YP3JSj3cUHaWzHa7h6NV1EVMejG2oipAqzKh6L78bF4hp2t2ifbcp",
  "key34": "53pvgcJwAKRzfbvoWRDaZkkPasWA7ppCkexCSHkjeVGNxJTDtEqM5JLUceNRyTpBsVTzCBxQvdcrqhWHd7pV3CgU",
  "key35": "3wd1uqhsf127scS3hA7DXND8EtanF1HfrZyHMviV23huqyYtE78CtsA4RnuWKiJ1hJ7mxSz53BSBh7pjiRGn9DPq",
  "key36": "5QmgeetdQSGi15aWS845tprG5vAm9sJGJFY9R2Rbqj8GzKH2FSRzeYwqi3oRJK1LW6fUnkT7fSukFiEw2YuPQnCj",
  "key37": "3YDGoxeLT54GyGDB7DwJtFWwwq9cgunZpM3LCfyYBoGRGF6WDeCExaYLKzwfvYQmhTFjj1zmecLLTPSY8MP72uW",
  "key38": "43gieyztVKJWzrearJHDRX8jhpgJ4UG7afNMK7xSy1SixErNwESGetu52nUfqREfRDVQuja1jhaivgvUCF2Ww4WZ",
  "key39": "3wGuD6N8Vpyt3x6c9rtkyHkhn3pGP1S2CvL5CQWH5WVA5LXd1hwXB9Qby5UksAH89QLKmiibvPtqKCawJ2aYuDGx",
  "key40": "2h2PiuNF2vgvb8SZgjZycGYRdTTyGpNsix4zEkii2jtSUznNu2YwGCJSi66pnA12ML2DZzpQpkJvceRFqhZxNLof",
  "key41": "4xXenamVzT9V5rzvsRrrdefZ6LKHmF8a6uAevz1jrHLy3m5LKiaLMeCTwbFHohSBpaEmnm8J8qQeagqNdQLLKw25",
  "key42": "26Wc3cyCsFi1ctVfMRZRqrFCs9sZX39FYCaLcTh1dHAX4nFJq2VxTnxem2pvUR4GEdMhtNQvCEZR19XekjMSy8bY",
  "key43": "2JaZhjckrGNDJYPdCT8FA7PLUittBfngYBQCpnMcUhNKh7dJ2gk1QiNw7E9cDcTtbeU1ECCbsaE2ZqmEdTKZmHo7",
  "key44": "5Tz3G7jynLRd5t5bn3P5DLAFza7vJmkUVTUJVaeGBvrCfqtDUdsVpt7dYKrmx19WkKqUU2ZhGcXDwKb7vfGJu4U3",
  "key45": "3csxkM2gmj4U9UyNXxyJ7o5STVcFUJoahdhZcTqmNXc1aAz6x5NSYJwD9rLXCzTVynZuRcqRCyWcquVxZW9T8QhW"
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
