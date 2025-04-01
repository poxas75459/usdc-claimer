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
    "2N3cAKiZcovmGZqEL3M2D6rUNAJh3iQAtN3qSCtsYmn1aN1jscmQsAPvVMQUyEZy5YVjqtSncd8PAzRb8ttKZksD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64aG1W2yuixLN2LtS7WDvUezWhLS7hKdqG55myyr1wBz6zXpdsB44B69P4zEUoFbAMxAQD2w3SGciMEXP2pB5UJT",
  "key1": "5TMJAb5wRooKAjFU5kJJyEv3fr9azik7KLWT17uVED8TwxmaV5CbiJXjbBH2v36mfjg9fZmp3Ui3aGjUpkSXVyak",
  "key2": "5M2M32zAXzibdMijdmxPkyqWs6Gnvkpc1N9Ekfs3c17h24wvTxSiGYjUEinAjfhttqtPW3zqQSUtq2m54zFigFC8",
  "key3": "5oxna3DHdNxp2e47QMtxyJP9ii3dezySwXymvsR9nNa8P4xFGiWUXUKPADPiLG4c2SdKkfs9uULYeUQggA7i1Wx",
  "key4": "2DK9FQPv7b5bsF9MR7tumpZNSQsmnBuSvZuq3BxddUvoVG7ctJwMXwd94tZzrixV1CfgoEMHgZrfHJt7Fv4GZRQV",
  "key5": "674mEh1DxUsMSGXYZ9y7BCEnLyjiUdhfZPsWcWmhQPy2emJ2WSK9M9QPbWETsmHJEbqRfdmn2iMxxoPAsxaNF3mc",
  "key6": "26CM7WAxrDiGunwQoyVzUW4K6PQmFnJVbsWAVy44r9dVvybBce6nV2CnawDiUmrf8AsYtVfNmq8tAn1kQWoYSRYL",
  "key7": "23fx9XisqixRuypsjEh2gJXKEGSZf3F6JoPwFd7RDZYSofjahWPMjs2CEK3wiBpKGu3UeRC86cBUxJMZwq61MCkQ",
  "key8": "4mVc7Gp1HtLzqBhKxKxqBputWDacinL5FstrM97aemsoagfFfcLLSWxW9s5H43qbkYQVRuGHn4RPw38eb2NxUCJM",
  "key9": "3TRE3Sjxa7r8FiB5idr9JCRXbxB1eu5yQkPoUAeXQ2UK5Q52tpyEUaB3UjM6LCXxYgtdMDgNXktx4ZKdTHx8iT2s",
  "key10": "uX6ZFHeoyNX18mH5hX9MVpHHp9PJYMw1ErgKGC9coYHH7qZwU7xaZjWUmaVMDjkvxqmny8dUPHErDFRKChtNgXW",
  "key11": "3AKnRXTcVeqZgvSBbUbu6u3qxkkFyJkE77HiGrYaLoJcD6tBgZiDVo8CJJiZQbELyEi4px3581RxCFReQuLtKE7M",
  "key12": "5TAFM6vXbUnGnXutYLDrBfwWSnGyazbnMqkFv8T4An4SqSwJr9qBm1uUZri2G5dQ5yXjHjhbDTnM7fGTB1Takpug",
  "key13": "28P7rYBnscYcpcQgdC6x1EUv1oA6DVK7pvyX6cCSPwtFLDG3pWmt1F3ooHAxtQFSiuveDnmzu9hkjCpFoMRZXY6M",
  "key14": "5uX6Cqnj3EnNqwmfEcdxwCdvzksf3FhWJodGFU8u8ktma4y7DMsu6uAu2Zf3AegdH7EywwcYdLnUip16rsq7RyGZ",
  "key15": "35JFECq13EAhdTpMBt44V3cZiJNg6oUZjH5sZJjHqFBRwsa9QNo81xgEU4aNygUx62unEESFjucFFg6T5C7MrfME",
  "key16": "4pr8V9F4gh1iT2a6kMSuevK73bpgB3aqpcTtXex3ULDkuDhoX6jrTGotp8z36tqConJsyCUE1EmtWFpZxEygmJ3V",
  "key17": "3bRjZonAZ1tSsRUFT7EJPWVyqfh5wwQCG7BfVoWJXjPzGkNiRf6B96D4B9QG1gFwcjzpo9Cf1A7PfPi4ThtSH2iu",
  "key18": "4jwf83mYE7aaQ8Cq4Beyv37zLEKcP5fcgvPuSUQRhCuuPeE65VbidjtkYSkgFFEfd7xG7yjC3QtbPRuziFwZ9uGC",
  "key19": "4W7cAzWhUdpeJpMZGE8JDVo5VPNvu5LYBkCv5zMZoTqXvBPRuax9HAFPaCMGSe6hXHQJs5VJcDtyetAk7dxZKsEP",
  "key20": "mP6xqzkHo835PgAKKpzWqXsdboJxEfFQz3QPc961ZE17cAMFM8P27M4ZXkw7U572mmGjrA9nx4HJFB4TV9GLkrQ",
  "key21": "2oVXTyebeyNuM79TAKuEwwpk7KzRCjg8GwTSqvEbrgyeqLsScdcQfcxHX7gusxa2YxcQU9Wx9UznvL5bK3XJYZZd",
  "key22": "34nEZHqQoC43aGCXwNsA6AE6m1dva8BY8hpiYBdozS46KbEeakgnhfD7BNTUUGwepjHgXusZbZstyzW1m5wm29UV",
  "key23": "fcFZ9mqiB5rKjwBn1Jza8Hkqv99qCM4TKHfH654GCFSXzw3cX1sFcaihgsXPCK2CPcZ2DFagCMhATQFVp8rm296",
  "key24": "5PcXxa8QxeHPHekQ5AfoLnJjkj98hzRCA1wHfTETKGwArL9ahQZAz4ruVBrF5z4MwS1HxBYxoQ6nF4twtgBaA3Xj",
  "key25": "3g1XWo9sGeoRQtGSGajeZXnSQEYJUKiMjB9X3ugH1mm3Kd4cPLtXBzPzz8VWrbEgGedHZ9owDwXjdYXmThYFXqyG",
  "key26": "58CmJGSqp2GxBk8cV9RFunUQjknbZUyDdpHeCcLg3DLBKff237eyfb68Hg9wUHzMFm9gUAbWJgxnjtaskU1wYtGw",
  "key27": "2XhFn6hXVNkwMLL2NkUMFu1CGGhCzHbRUxFD2XnCdj8QFsCos5oDQv91Q4Arf4vfVuLiQCrYE4Bhhwmv7AWEokkG",
  "key28": "3cdsf8pCyLWwzsRVYeqC8VQKRRJayYiyCLTjci5kqMxZmNLv94qi1dEUqXcGp9P2hrBNDNrw9jcEMLeL6EzFDNGr",
  "key29": "23DnFgxcMS6pJR9Jymjz4hAWEKjnpr6dGdHrq4yv6xtp3M3e3ajEn1i8m3Z2fdGZJR8DwHPKRH8LT7DXrCEUpa8k",
  "key30": "5ZfvpgRWDDJaLqo1yzhrAmPNPz25mnb94RMwz4SMyPcP3U1vbqbjWy5GCqX4FeVun4dZRX192tmzd52GDsZhqHg3"
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
