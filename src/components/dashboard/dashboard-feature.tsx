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
    "5quMtHZmNeHXNcUiVDXxBRQdus6txEMDs78BWaDqU8k8RNUsktz5ULeprSqqHvXTgm3tCaLvoKLg795tyL8Yupox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SP5X9QcV3X4GhiwA36qNr8ZmYx9nuGN368nrKrbvVknjqPh3RXZPhRd5wuEeig3zVTR6CVSCbCdjBPdaikaXCjb",
  "key1": "39L5GwE55eMobqHQwW6tMHooqaiivsQbcysCkzuW16kWiAi9UQrmBio7qANFqKW8PnhTmAuKHwGPhQQAFaC9GvDU",
  "key2": "39yHkRKnN7KqLf3ZESMy3WCmWr7qgtw1STArHoHTGiC3ET48fkVN8u2dSXn2SJzYXpQ4mZF6LmRZ43xFmm9u3LKL",
  "key3": "55dQKJzoayjkJbKxLoD3LL4TYu9RZ2GhD9aUTqR1wKNqf4Tez5zNPL3ssnrmzcJoNAZZKXf3EGiAem1JNChxkYKa",
  "key4": "4tsb3DjL7pnzp3JVM17LGvV1QbSfiw6tpJ5gECeMmgtwtfG3pXhPiMBuDyLgTHigYvNecT1Xtx3kUx7v8WDS7Y42",
  "key5": "2Hg9oD81c64QKDU6JofnK8WW8qFsfmU6y2MixyCsMectHVWAiUqsNtsHsQGSVz6kRbEySfC4oXRfUKPevWBYnuPL",
  "key6": "5tK93EvkWZpixbkhpc4gjLjsiAbLwhDpkJZ1VWiXDy6NMXbhncbCoLPJN2aGCeTJUjjDZRm8krxnT5xN4ebdxNXp",
  "key7": "22vUsCcdGfmBFaFMyM9qr8MmJn15N4chWGKWNqxt4aMfYxwF6cCouEEbHKKqCN9YB5DMW3FRpmtz77MxodnUbFBC",
  "key8": "329toAWwK62Rxy4HdjJSEQAsh5zoA33wzpDLESP5uffaovAsR7XCZeS4zA1BNPeT5fo1AadSLr3iP4fm9fCmqtj6",
  "key9": "43niFS2B95i23YtPnxZrZKHmyZo83avSqYmpkrmi49xHYw3HfKcdnqgQNRCqAFqjor9JVVRy22EmPtD88uPb9cBM",
  "key10": "5SXGSbpFmsKJFSAASQG2yCXdMzgtbXdNu872Bf3Nz6GqrmGdjQxhKG5RmxFik8eXdsbSgqBPw7dcij7EtKjBXDYh",
  "key11": "2ragiX9L6v3Ffi3NhZNLhXnYrQ254hpBLEEE2GTG52jvya2ZQENE5qrQX1HemKPaDvMu4RtcRMkF4yupjqTk7mk5",
  "key12": "5eSupez8GY198torGsL9Dk4Yuz5tiDutLrRR6A9Gd8iJJTwgM9RmCp8GBwH2iQeKGYJLju1SABQpgjvf4ACN8ibq",
  "key13": "uNyqJSRF7s8ubBwGbcnWNt1sCHtjsXuvn2hzgNBmqheDMKpUfvATo8AoHGMxUdH5firBT6z7vq9r5gcaCmQcQU4",
  "key14": "41u36LDxAZ8pRXvXFrxD4rdGpjdcgNS2Eweqd3x7nvJwiAN7Dr6V14dkyWkTfvqoTWPEjfKrPbM3C17Whcg2ArWF",
  "key15": "cTsagqWJSK5eAVKsu3cog1wbVdrNi2usVWWQiRytGbUF9mb26kZsiw5ohfS8krEgKXNbMQTi5E4kgMU6swRLuCr",
  "key16": "5nYDf7oZM1s9wFfY9EHfKFXXMkajkGjEDoQoLioSG78JtA8x9jzKcYnKDZFuWLDPitfYkFBtPcyC2S6aehgZ4yUP",
  "key17": "3eQ7G7qX7f3Ni8zou6Xy9UyemTpxkeuqfx5He7wYGuYVf3sjfB6DP2PDoxEbSURLg1U9ZyqXanAiTVBKkWfWTrLb",
  "key18": "28dgMatc9VZ4ydGSCZQ1vfnqeYcjJjKB41dWFjxH2S3jHpB7Tsvu5BT8L9M9A2sFmDEcQW1YGXpfnaLDWYFGj5ck",
  "key19": "4AbpPAU96CuSh7g3NkqfGYL4a14r4cm52q6DBBb3sQormfjNZ3fzyr8goMNrGBGoSu5WGxUxpasgRbzPJPAy9kTt",
  "key20": "3EWMnKBFLsFzjqkSrB8sWQ5hMwjGPRB8wLo1FA7VCygCtjorbEHXz23prkWLSaf16xoVck95zp7ZcNtLFieesESa",
  "key21": "5HKeXC5rjYJufm3DFXzzh8DGvscuXddzQwJ2odsyXbPeDLo9aiA8BvpEdrt6nm6LTx4Lo3WAUQUDkvc1gRYCN68c",
  "key22": "4N5ygNQysTk1aJqMEfVdjhfQe2zt5G97Znbf9vP1GRXpuSkMynEX83s9DNvWpMr1w6VjRESynKDx6gixGXRhLnzZ",
  "key23": "3kw492q661QiYUt5omrTdbs2A93T8c3UBwePgUdmyDyUih1sx6c7u3grpNgc6tnyC3HeLJV53L9i8JRS6KUJBpjf",
  "key24": "2aTQ8Bc2JqU1Tpu89zHXGqiKewfvv7z5G1mZiDck4SfEx22gLGSPiZzhJjKouADZSEBmYCeZ5gBEv1CFtVcKRSec",
  "key25": "QcWSNs7yaCKvAMsAdXefbXe5SFmWpiateb15PS23uZW1yFnj3KtZuPymndZoqMqAg7617MQfCwXUguG2dPFDVsu",
  "key26": "39wbWENLizMEkv64f8EAe2fruyjQraXpzNEtxNr66D1fxDvskT3ryT6ycyhKzHXh2Xc4FoBegyZE9FjX2v7nZRFa",
  "key27": "3F1VzDLPpiqEE5fFB3PPMsVK12vdcwG8JAyGaTw7shZbn55gcD75zWSk4Kkg2fTMruu88P6cYTYZqzzCbMe7ktZc",
  "key28": "vrzRyZMQJML4eLqfiSytC3ZNCytq2qLqhu8CAXaqcHBCPiH1iuA2iWzydQLvJYqnNdYoYQA9pjCkRbtNhaTzGGd",
  "key29": "4CPqphuwKgND5CEfR5U2dP2EondfV9SQjNHNtTSrRD2xWiT7kD2AvpJG98YWGAtc6GcfLY3d6Rh1QHAsSfsCDPad",
  "key30": "4pRFbwPVYzqj1JCxA8U9URP8vAVaQJy9NxxmQZge8VrmmXB8QUG7DThAGoz153T8w7jAsTHzKqAV4P1bpjSABH9X"
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
