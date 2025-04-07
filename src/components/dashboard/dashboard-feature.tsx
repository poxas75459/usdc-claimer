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
    "2m2DppFzuuhQEoGsp6SB1vS3dcp3GH6X7grqksJTMkzMiwNchsjjsmmNfWUXqQyguxXNGUn3gVRoobge7qft3cWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w31cYHWoA2nZf8f6B2z8TEA2KueVstH9NkB93zQWshBttSVjfYmbyhX6qbsdZVk3WKCTAfuGBWtHx7WUaGwDPTo",
  "key1": "4MUH82cbZLNg7THRNZ33gQDSbeZgXthkU7Ey7TxfBeTvgE8Z3s5YV2C7E5d6B7w8ZcgXmxJH9cZQbX88xh26HkTj",
  "key2": "4ZXcvdKzWqezPxCubSPc9wJHN3exYiAcGpoq6gUUqMQmzMBTCNgAm32ktyx16eSse8Q7RzbeVTSn3pXQxDAhBKEo",
  "key3": "odgvFYWwVCmqmVNee3Bsc2YP66jgHXmmfDpaZBWVGcMJtafjz35YjrmPRE6Dq6j1wvgG2bPoqrmRKQaHYpiTsd6",
  "key4": "2B9QeiAXXP9xqBPFw2Y8BtZLb6R8NPccFyJ416pNnMKw1Mx5FNniQnXuedSFGTtpzY5pCuxjWwH4yQrT2o9eCPHv",
  "key5": "4xWghcYkp1LAvuDzF9hWSxYR3giqZutBzNyiEszB8ZZRJcTARhHufWYEDKiMnD7aBuoqnZQNrVQg1Ub7NN2iL8mi",
  "key6": "2744pRnFrNUReieYbCifeQimrnUGaQey6Dr5PdoZJkTcrHsNKP6WTG81G5AjuqjWebyPb3mK6N6aMtL1hTJpyQ2k",
  "key7": "3Ft5xkkX6ApuGkTSVLeANVFJ1KSjqk9BejV6kbmNqd4C9qHjdsdgDDs2hnK27zasFwPVUAwpnW4WJ6sXPiunPnUR",
  "key8": "24GDmiY8qMBEZrKENRsoCWqmdT2npcATjjSyjhHjiavc6N9twQQy9VvuxSgM7QeTcEuG9gxJUGVczHmi8C3po7jB",
  "key9": "3QbtEFKi7sC4nQkZ1fHFRz5BBq73CRNWvGvDojKDSU6P5PynE8sFrgP8nZJkK7v76Em2DWLLYiMRR94H6wJCgstK",
  "key10": "5KpuxuoduxVUg6Saup58NTxukBhRv1EVM3BzdFwUi7zvg1m1i1n3XQdft1yEQ2jj9pf1R3JBtjB34ScrKicRGjKq",
  "key11": "5zxhuejCKQkK1SRSwaxEasHQvv4p7cH4Te7GZKn6MN4Y9CTB82oEu7fbk385jwKAMUMmpxAsTNmRbYUdwWc3q67Q",
  "key12": "xuA1Rx2N4dSLgc8EoQxnB2yXp9yuPdEm6aJYCDDaJudjg9WCVCkE6RfoRdWBS2XYjpdVqAMEKyQzcHC2tCB3BqB",
  "key13": "8RyLc36ucjaux5zsT6czSmfbfA4wan59rsNPoV2d9iksuEvKmDCpCJapDWUkXJkKW2SvdBe9YXG7tNUXjjvuGHX",
  "key14": "2Z5H3YZa86bwwSNyQqd3HTuoJXjBEfgubhBqvG3kP3QHuZyPhSNr2RMCF88VUQqdsFy2nXGDd8q1BikurfKZXXQG",
  "key15": "4kSiYJoDiDeqc8rMeKQdxBcfRKLnTo13fNUjCUvCF7KZPr58jpQGkGU3YfrAbLrd1HKJHuyTnWKEysmUNgDBaEbN",
  "key16": "3vanjmuYvv8SkbuqRSZKLN6dK1A4tCezrCMBany2LWFYYp24B1YR4fCENBF5bGcGQCPMWLCaxqJF7b8A3vJBfHCS",
  "key17": "2ZCcanddNgrbGUNfyVyeDmm2p4TZJpuxQiDDG7cVkobEz7dCUUDsD9C918sVNChSbhBYcpiQtqFRP6nd9e5VcoBR",
  "key18": "2zSQD2oxJNSKDo6qhLEX4DLujat9muGSfT3mMsRKb4yU1yabx9PdmtfPjNQmF1bzbrtBnZnxztCoVv3zGhcgFimc",
  "key19": "5z5VQ9nzDAWv6Jh9HnWPgFYCtdcZ9BTrWWhscZ9jSrLhzC7Yt5oELfM88f44piW3yYVVkXmApxeCruY68tgbT9T4",
  "key20": "ttmHPG4s3zxZqAkEtPJezB6FnJf9die7iChfE3svKL3Xx4TBJbKK9W1XmN4LzjGMEyNvEKLZ3jdpsRxCxtYeh8d",
  "key21": "4NqTuzGkBS8LVNy4S7zQGDYYk5oYQDHCr2jveVjt9rk3dBLcqNz4ufV2znWgwLRg5ExHCcxdRb4C71cHanKt8Ec1",
  "key22": "5n8cwyZpsWX47SM5GyTYnGCQDAu4Rdn3EZMuyPJqfzwB7qTqKqkEYprb83ZgJ27aKGuXG2dzRRGzjC4NP4VCYp83",
  "key23": "56ace2ayLuBWtX22gNQ6BNu5DRc2gNgooBB2cy7r3kTxcXectHWe1XPma9KK9zMXPLoPfXPA94QRKo1RgJ2AJD5W",
  "key24": "3uJB6zk6teJeD2iyitYgeQCrRzAWyyjs3VX6Hhto76GR7fDRBmoaD7AcaMs8xSBrxZDgW3LcWBzEHsdK3Ari8dyA",
  "key25": "4UbJEF5tY3WPD6JssiVeNV3S3UdRXs9JXSoJMiDqpM8p8r7AN7BhbsBY9d5gMvTaW6RZsfYVX8YvdbAsGrvWHULq",
  "key26": "4i7zVqduBnH7dR1m3GEGr69LytEP4NTQnULhKy3To8Kmbg9T5AvhTY3mLaLzScbqydm1UdrMkgd1DxvDoiCB1wny",
  "key27": "4Dna1gRAYXnQeiCCMBU9e9ygJHzQySywq8j4BUsbw2QNCgbhduPk44vsCeLp66SyrkgEUe9tx7WviJQhLSBgnuxh",
  "key28": "LFcFnjgbihvdcgXGozyEcVAseE3u7E3sMarseA2dpgjP3G7RxG2UCZtpxJ8jQ8wjSg7b2UCsk2YrNGCEqaRZt9j",
  "key29": "25Lpr7ucWiQMXfQdaHEACQgpKTxbdM2L3cZqxuwgA3wDhPCbSaobfdjbBXtY9NryG1UunSqXMHFyuyquYvMRv4pw",
  "key30": "4G8fdoYRdb6DHte7xvhniZLPzqt4vRHb7v1cy8YevVyqYXUsE9EvUXfEyzwfiCv72B1ufyftFoxfhRTrTnxq5J7q",
  "key31": "2uqPy1RGEUrf2eqEEVSnp851HEzgkuDnFtaZbJMGkEWCuALsVXaN9rWyRUepmZ9QkdnCwRT77yystAg2q7MTSBH3",
  "key32": "3JQ6x5YsxMWh6PjQNHdZfe2PQ6rjmrVnWmxq6xkLNT46FFXFbLGXKRXkojTUME4xcnqCDH1S7cJQr1kXkxniyrwP",
  "key33": "5AvnBaejxUfVqUCw3cbFCSfrTSYn7C5vn2iJZ9HU1i6zVcMwoh8FPfBNVXJS8sbUoD6fEFD5hCZLuoyWWQyW69MA",
  "key34": "5Wrs48twjdWHzU6FfFfyFhY9uLroTesfgHaHko5fTttuW46ezHnTvfLGThPQvksYPPJuCQty1Uim6PcYp3WnJ4wh",
  "key35": "5Evi4ix1bfZusBBVZNndV5kZ4ghQ1GEzY3c77wTT5HkvJQjxxJn98gNcvR6VJf85Kx91m2djEUgZ8JXynhKdy2gX",
  "key36": "xauhGKEhSYi7GiaaEXiB2jC9sPmiHfmq6mVoQuNTBpHSGWeZVrcdchNcTunQ2unU8CNkKxtphCe2F8yGeG1TVgU",
  "key37": "w7jcdEDeHzkEEsZBZb8KgvdNELWgenFP2cg9g3NeknJFo5jScuQKC24h2MjTrWh7Tan6gVwsSRZpAaGwpechPiD"
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
