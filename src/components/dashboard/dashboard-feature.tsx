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
    "4PcDp5WZ9YuBUZsS95KGscxXaoanaJmTcoMrjkcA3Ng59z2Q38Yx787eHPphqhQhv8i2b42cPD5aUJGpcVJo32C6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vS3LX8U6UuJ67z16XqEz9o5juM6DSqjqN9T7Kejn15zByY3g9gxmsKWMAuh9yVyrd6ghtPF3jUsY3fS23ZB1qk9",
  "key1": "22iUuJpHcpejyYAguZZiMtifJocuP5Wz2BhUVHz4UroPMzd7Uxjk27sdNnJyzbCHLDk6ckdtC1EgAFEkxSCbzkyv",
  "key2": "4cmnnBxDqB4HBxSiYytKgCkaitKcH84UB8qLCa1FJYevbxLpgrsU4fxJsSmctcbLy4kvJV9spghATxhkVTcWrhxo",
  "key3": "4ZKXJ6D5jczFzBLereDpLGYxdbgmuhQa5QNfvy2qVqouinsm2bZUSt7bhYpD4Fu5XPHDq38i6PsLf7JcSD9CtYQA",
  "key4": "DnFwX9nP8xo5CT7DcrPoTf1pP8U7wUB1LWbZWNPZwbtFCL1w9ZdvBfEe8sDWoEPax42TJthFUHVEcrzFsrCV7CE",
  "key5": "4p8rEUTbVsLDbLBztWSfkNSeE3mStttLigm7h5AFHb4ARp4ZK9wJy6MQNY78P8UuPMotVC298JvQq5V89oWPhywp",
  "key6": "5tMWd4V75DUpCVCsHWVpdv6wFdYD4VSumf8DQhbsECVKk6ST26reD7YcaNhbMR43bW3TM4CX1zqgs1FW6PD3Y9n1",
  "key7": "3w4Gvfb3qTYjpEpMWXH1XkGdU967CMa4a9eUXebySNb9HNWCRMhTtyFLKcDjrUG6s3quPmeGxUAZx6vhTJVpvTTM",
  "key8": "4rrSqMwD82YjyDepLZYFpc7k1onnhyd9JxGyj6ci5uXTHxwoZyQRpQW5xpFwrXAGUF67Lz98CGHr4nLU4n7w21Tr",
  "key9": "2ck8NBzNH1hZvcs6qRWAScdFYjNTo2gqTn8e1X5BcZqaAyQeYiidJTS186kXiTKUqVxSnUpaysX6GcER2bG3AHjW",
  "key10": "2jiPYULTTLxWrhFsup6GYxa4KQqoM3omkBTPj16MytKHWbhoH31qxo6MA1suqZ4HVr4Jab95rN5WBEhjRLLpKXXw",
  "key11": "i6EUbK8Zi9eJtVGF1HpzMSSDmDPtQ2BoHYjuJiJbL7AvjdwmiZ2GxP6WxcJwSREbH8daKbebnK7WDR3TtAj8pMT",
  "key12": "4pBk9udRacU6Gcxk3uoRqrrogZULypy1K75Sf4PKDgxwPNx3X8se5SRTXCG3S7PJE365JcqqoHmqmgiaazVzBorJ",
  "key13": "52YVx3PA5WmpYVU8jKm39bSZaQhT1Tq8uEJ8tXDoqNxkNyHd1MXEREmNuhXmWEAkyN1kDKAS3o5fSv7nMLB8bx8G",
  "key14": "2RB2DBrkBpxrUoHZkbeE1XnCUrA66543heSCJAYjXTuq2rdBTgQjf1jRXgC8SiZeoxntsorMpWm7byLuYuao3y2k",
  "key15": "5FttZcGVKhfpMXb6oejxg2uPo9PhhwKEhpGBFH6mfnq4VtumHJ2H3FN2om9pXrpSoZviLwD8cBcad21r6vUx1Gym",
  "key16": "Ts4E3c9Krp6Ertnmw2MhqyxzkFNfEZSmQRRonVWoaMbbJKz3sMe1r4dG8Pivwg1ok1kAeW4fw1UfnKCKuz7korz",
  "key17": "RfcFzhZ7wfTriZCnZEoYgPWrYjcC9fshEiNsM7EMQsukXZ5sBoWZPpobfPaxs8dy7izMMPUVezK3YbP6dy93zd9",
  "key18": "VxUUpcSrawwSYUXwRj5mcMiETgmBevpKJtkXhY6aEmxPKUUgEgUPw7YUz9eWfT52h7QAcdNknyt22m4Uverazq7",
  "key19": "67Mk8h2dAmS4yhTe4B4qKRXqCk8auJ4gSVpLZLnrsRGErVKQEg3ToyechcTCM2ULMNoZxng3ofbmJt7vsZ3GRf1U",
  "key20": "5DWT2EyisLRFi1sct7dnZZ4AhVwA5YwLb2XPUZXjjv7EgbZWEjg2x9dGPpK8nLf1cAgBntB1Bmr5pY6tB5wqVdjb",
  "key21": "3YLXcpacRVV8ei1pHZJxodTvuUezzHYYGrpVBGmG3SrR8FEddsVJNHFC339JLKHsFK9geDWgUeXCJWz6kYbfUoeF",
  "key22": "55KJEaRcbBnkSyvhJVWccRCbqxZFdTMez7WPwFbvucRhKzoJNF3VCc6gwrePDWZGA5dGxkf5WU2mVyb1myfkWK3Y",
  "key23": "3bgzi98WrijHAWRsQhvVGv1T59XhcHLSXaDN7Yip72x2nLDUxQ2GjPX2tCcJ9KS5ueCx2F9Yf7XkPYT5VadoMGMS",
  "key24": "466qbcbAgbHnwFiRzm51Bouf95veNYxXm8S4MnWZHu2MGsshPJypBq4iVvyrTkLmaLFR6rjsqzZLfzdKaRKNgF64",
  "key25": "32Efph1VV1gdjLELqT86vHMEGU3YbrikjXrWdNWD2GvsLZhoFpyqqDXdUf4oJHERzc5gdKfavJsmxbWM1PTqttw",
  "key26": "2XzR4b6B3Cev1dVJieHpjoAJcP5muVSvHP4LtpEbpp3rfHJgVqGGbb1KqJ1wh4s9ataYpPmWhZ1E1HfhpYCinKx",
  "key27": "gNida5vpjZBvJDQjrRRS1jQLtxKE5NxHWk23cXFzKEzn9B3yZZFsratDSSZfearYMSkPBDgvV2xyS4G5pm7z7Zm",
  "key28": "5EnZTDxUhy5orXKzLwuPdcLfae5AxFcAZ9zAKR14RYm4AFpRBT1N5sgq9fsCv191XvZb7qGuKujre7HDfXvoDpjU",
  "key29": "5uS4Fn5oXDR94bdJ7QWiTV1ebwTVDT2K2xBt5n8NnSSRzS7RuFYcFQvW2Xdo4tmqjqpkNR8oVW8HVePXJxKE7ZSC",
  "key30": "6rirMbWwyk5v8HrmTA8d12BJwZTFuJhy4mNCJ4MqkgE15c1WF42SAkEqGey1fRCLFJqY3G5t7qxtKNdt67HAhhq",
  "key31": "5Ka1UcZsWHtf9cK7Mx4mpCT38GQrgBh7UYr8qvhLRGXxqZ6NtCFVmYruMzbqxYusSQMhmxFTKJezo46GqHcUi7aV",
  "key32": "ZpwdRMF9PsZL3dUYXGQz5uvd2UKBuHgQFqezvkVjsXFrYsBNmjDSJz2dfdKiChBpYYdyNqcdsEK5uhVht8VuSc4",
  "key33": "314SyUTEBd6rov5KaXETYgDQe6zsdzw3y3k3NLCM7oCtByvjcQvwndKnVxvJ5Jg7Fsj5qDGzW8eq6GS6vaZvAsoZ",
  "key34": "4fmDwFJrjUYP288DuunqTUH7SsSyxyQTR2ChcctKbqWaPWHws2nCEQTuCiC5E43nZs67iuLJBgujBYZgqJCarB5F",
  "key35": "4HJ63kx8pvXjzxU9bX5HHsVDeVbcVzzRztwxeXy8Y9i95PsP8Qoqc6G1VKrZEtm1wR5GixSPVXq7Gqu88avQXhgU"
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
