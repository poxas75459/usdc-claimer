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
    "2D1YHW1SXuTWR6PEw8cgZHwgGRv7Y6C33jhdcR6Ny9nTguRqZH9qxgYMDXxr2TavXFtAsZeSYcSg2GeuAZZgVBKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UwrXhLeZJAePVmXutq7rWkafZA8zVewpgQ9Wcc6A9rfyfqpKhkhtsEfLVhXYFzNfwmTZmq4Cph2BPWjNFN71ZGL",
  "key1": "668qwRZ19f8SqyPDEQSe7hRfYJmdEFN2aTauAiaJrcbkL2gWxZc1wUm941FQYtuVwdkRAu7sDdv1C2jmpUW9GYLB",
  "key2": "4cBRLfEhT2FnZinqo1HDC4Y8RZsixr6SnHcFqA54bf1SKnMwdwztDzqYZDGstBqkKjqmt88Z7q2VxF9wNVfn3VE",
  "key3": "3SpC7X8UF2EvNPxYU1zeEiE4GGX9FpqTTzrQMiT4Z6afCmc8Pad8gTnaGXKqVEcKuZyeN9dZsr2R6gkUEsHX2k61",
  "key4": "4rKvGGBajir5x9QTCXZYrUudnDxr7afyiHQ5q5gEekyH9nviNPc4GS3BSE62KLMCtcADJVk51kGKHMf9VXhY6gbF",
  "key5": "26H2GurSMKP9vdhw77V8y6cnNnCLV6nyMRVkQdoBma6K8u5pNTFjSZGqs4hmSDLvptdBBP6Fm4eWMHJPNZiRx8vq",
  "key6": "3Deeb7T9PBSv26yDBNmJE9M3PKAzWArPfrYNLs8APD1ib2peNLx15pvcoeE767ycctforLLiNUQcM3xeGoQxQquz",
  "key7": "5pUTXD5QU2eBTeH1Mi8B116rwwCyqipqaL9VbecpxgSwd6yGDetj2rZnhqB7i8effqxujTT5VQHNLGWqzaobhkha",
  "key8": "4Aob8gQzTujyDH5FpmfPgbQxCb6bsMNrWPPYqJZm6prkNDVbwWvH9qGg7cdzP63RU1ffc9cLCz39f468zh7X3Yhy",
  "key9": "2P6nGFWDhnu1zrF3xejp9f7kJuHeRNin8MW2Mhh4Do5R31w7aSmScCeCsW56DGvZ46NJT4WfNMgjsiSwkKdKhEoe",
  "key10": "67fa5pDhYRsiYqiEmZCYhrh8wddJSLyQGPc9VPLsnw7WgaCmCDSitZ7Ppo5abVFdZ4B9Yx65FF1KNrRyz8L2nKza",
  "key11": "4ThzsZh1CHntYF8AJu3XLQsVJWkcbW74G62Zoqza7qUYrLPocM9TwpvU3YmxVU5Qt4Wsbu9sins1ubMvneMAtNmv",
  "key12": "2ZJyxUDtH5HBZwJRQWVTfstzrTUc3tQ31ZstKfoQdrs9BE8u314U1rVvY8HbDQwYMxzqEThrFbtKpRA7MiojtJhB",
  "key13": "5BfhuVau9m8urQouNiKFM8r6WFsc1cauCUhJ2qiQhMejvqC2MKp7L2urMutEw2TMZKC4qbBmyV6JT9sXWhazp6RK",
  "key14": "5dqCmWvxAoe7xKuvdm25YS244UnKmm8ZN2K1iJ6weT9Nh1qAURCuitkJHWiMFDxa2aG4xW8ptAvieduDJTpryjzp",
  "key15": "Dp2ysAFg5csHV6PiPKAkzPVdjWtPXXu7rFaVWKNe4xqbCzhuVppDvYWfmisyVLisodoS278uVh3Vn45N8uPCrUy",
  "key16": "s9je4GeQrRG3JREGzq8vtFQMHFvJH1HSwCkYDhKspRJKgWkiYBBrbwXvYHD8JbV9TaUL1Z1UD6NGDsoy6aJKAdh",
  "key17": "54YAgLmLfQhz43Hh1LA9zNcg43k9TGTuRLFV2YzVPEyv638Hf2yNBzmiSqkL7afEHWjCi58x7BMgUGM2CA7SHfyL",
  "key18": "3tgGcBuTZMrAUKi6jGj7C8oTktguXsv1s3Y9ZJGXQLro3Vxqc7AwM4txh82wFZDV9v3t9WEPwnXddHxzvVBovAd2",
  "key19": "dtz3AQ3hSm5c6Y53vrEwAhMvEnrVYMqZreumfbCw8fB94Fxnp8sGxRHxYGPHF97xkBSwrEMqpm4vkgHAsjcrBZn",
  "key20": "2Ps8mdcsZG812vsaBZxALb9AX8wbAbPsFQX6RmHMwRVj3MiFz9qs34A1QFvLDiLSsf7q5AwKxhR9vAEoZwEyPpYG",
  "key21": "2BAUSMp7eMbW4aQQJSHVQA9NuU7JU575vT2UihV2i7N1uwAVtcmEwDHxwyZcWVuHwgDL1ihawJSF7tq2Tnoc4sXH",
  "key22": "5CvNE1cm86UmqhC1B34Jmye6NnJvY5nbwbcM7aVT7rkW5Kn35YgiZz9P1MVtd3xnVp3jvziqo9TZC5SUQEDccTii",
  "key23": "4sQrhJZJcj1aAwyrsz7nTf7JQa4G1qErhhe4JXJWMwY8KR8yCL28KzbH5UvdNK4PgXHpsi3jrrrftHDG6XRxDPxE",
  "key24": "s8X5JJjouspJsgW6eJvTPXnkVbiZFo9PM7MXdSeQj77M8Xfe7X3EYvJAfBzYWNkBD4U31km5PtbbZGQ4dw96HBy",
  "key25": "eaEtZpjmiKW2kMDfjSWkkcifoBLMK2qanTpvpCvdrDWoX8zwyAkqDquMUUVRPqH4z8HBcQthrHoBscSu9tH9jqp",
  "key26": "4mfcSuor8KseC6fdHdKcr7zAxeJvEeZPx8wFefsnqMi8vEpJvaTBoHhQz2kgjAUUwaKSjYhu4r6NZRyFDEyWPAz5",
  "key27": "6H2SBPz5978xcgF54EbGjs9iAagwAZVqSQAsVmoPpGDvXBxTjamzQtKdpNK5BVEaWyvt7EvZR1x14y1GHxZtiaC",
  "key28": "2UcwLFg6eDSjs28sWdE76y7kNcHg2eCcKK9hFbkbPj4kUzUFucxJ66EENAcdzyeU3f5zLjyv2RKZpaEVXHU92E4u",
  "key29": "55gD9Qng2mENm3VycLW9msuug8HSsDWP9Ucs2KpXkpTPQ4XHLSCFxehsqYcJ2Dv4ckvFSKNtmmXeDnX6SV3vfVGh"
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
