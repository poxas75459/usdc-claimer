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
    "5eaSBvwerkiWypnQZBmE9DJNMrSSMQneo5hGg7WEcVKw3rMHKGZzX4NdeKQqL5vsvqpWp8nEHQ1EFJQ42j1skVaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57waSP8AE8kcwvFq1uz5NPY8RjuMttQKaXr4XConPnudL1nj35gx91Dew7oxZc35gZrfErbgnuhvv12TZSBcPjKH",
  "key1": "4oDKgE2mtbt4zeMjno5SVgkZHALvfGEcrU3xoYFmaqNCSVousBL2xGMpaFg5EKmqoeVuR718GjUgETgkYfqxq1nq",
  "key2": "vyPqGen7Yf4THv8FHFfXir6Zcv7rg16enmNSG2T9BPXEDNdQ1ne3tN9CsWXJXYppD5rFH3iTYtbW4osz9hA7W3t",
  "key3": "31HEQLyazV4vb7SSCvqrfcmhgRyXfpZzdeawkCsTmYtAAVaNex6CQm4vTDs1NXZzsXeUE5vjsZrVeqsY67a5oQFT",
  "key4": "kUcT95oMNgywCLxLm3wD4i9ydaeyuPYJX8idoCqL9BEmqok7WTEJzaGTjCTu28Jp48xMh5JnxXkDwEW1LpoUKWM",
  "key5": "2biYrBND9EZvgL8Gd1V2WsUhR6zCT6LSEov37NxcppHsxZ2ENtmx42J1LSy2Q6kFwYvj4AsTveJDa8HwFFytpFNy",
  "key6": "5Y4zf2CkbAT7YW4PhYcGs7p4e68YfvhFKsuBGVqdn8FnVYPYNDHfQQWweCemMuYyAkJMXQqKS5Da4NpHdgtDVJ3J",
  "key7": "qvtPpHQNp3UKpPG3xN2oawwS7oFcL1Y1pfYPYDQU9y7qMVaqoebZFvaZpgzfV7LcQgDDd9b1pzqWDvks99Tgthz",
  "key8": "QQs5pgFP2Pwn8iRqQGQvi4Dnt3a6gJrXryVtWpCHugiGqqofBLTvUVFLEB1WD8ggKnZGZ6tmEwnBq3ybBV9FPky",
  "key9": "AXCSND7iazJkzCfnfjt4UewbEL1F1Brja16BuxR46JwSkKfoU6hnEBvgM7jA3wUHZjrhJ6LqgqzCodfFfTDJXgm",
  "key10": "5kJhoiPKj6C9ajmy8ULxyAodwVcBMmctRShZgd438bdQ2MxdNwErfs5ycLqDQiTG8szF2w1Nvtrebyy5A99BhLQe",
  "key11": "P77373UxdjQeFESESiHXyw2QVP9oAxxrZdHP1HbHxH4TGTnFTnvhgVL5sVUiMHbdTGpwrNVNEYY36u8kcrcWEmD",
  "key12": "67NiYQe37yhr7H86hBuoo6oonoQS3eiw2qFpKFwdAJMVn5edZvkBZSJeB5eN4A3NnbDSgeZz1jxyQshJXKdCoAUu",
  "key13": "2wmsB8bCmAzkkCbuHfpTnp3VgXUK9KrZZHWgGuqLnoLDtCSS9xW5ZJ8N3po7aB4TNCqFTYhrewYaCyi8QzLZ8uCo",
  "key14": "4t8AoyxUD3sC1LXtYnMKBFSCDc3yxnoxCXV4gNy1S36oUPwpAkGsE5Tg6A447HZxoEAgmF1Ei3NyUhTcCZ4hoMbn",
  "key15": "3w2DSaQKCMXaxby8TivZzAfLVLk9eCgFKYu3AJTtpqem8qEGCAp7A79wt8c55BCqopXwtuSCzC6Nj4HfhpGXgen8",
  "key16": "8tfM2p6JgmLgQiQKAm4PxXPdqSdDrXYtqT8nT21VCJzAQ5wGGSgPEcc6EnmrjKS6eikf6Ft1x6DWLuuC12As1Wh",
  "key17": "5getuwAJiAMkP2aRHEGamxNHdZxgonxyM3ioYmPcbsftVi1yiEtpbDmZJF3KSxJm5phahbbknNFw6KjSGY3hurZ3",
  "key18": "2Paa8QRF8RU8MCooxNzVeQWoSZQT3S4DT8qzpA3pcBZvYXJRL2nkcvJ9uk4DNZS5a4n9NW3FZnw2v7Jjw62uPE9e",
  "key19": "48RAdQbdsd2hiDpHf2wMLmbB7DLHa3CvvX7D2mGdCSpJrqAFTB3qJ4aLM7zJCnASVow2D5qgwpjVnNYbmCZgj8Vf",
  "key20": "uKgKRwvBrW1uqYWSWbox8HnzcZMGTSZrZGE83JHwo58uuLDio7DYWxwiMwTgvWD6cDm4FpYW89emNHAMxKNqRkA",
  "key21": "58LmAqGerXwbXTWHLFvfi2fhjnZzxMW1VrgBPP4NqZXukF4GSg7FnazLgDkughRgDHJ6MrUkpykaFEz6UNkTTXcB",
  "key22": "4JSEnnbtRBoUTqKSWDsLvgF7dPdB7QD83JTdADhKUH6hq5pDGFuXhLj9j8UFAdcq6GRmfc5URZppos2zpaYA2FXU",
  "key23": "5KHacnSJd4HgaunaxboSUSeL2NN8hKLvgVr9Z6GydXPQfwRkej8yg65Ds6c1tuu4Ctfz6xrRjcNrasCtNFaEL8Zo",
  "key24": "3TmvwixENpufnBbfLV6mjPn9B2Wt3tJjFr8SKDAZVwQkTM9fjXmm2VWqsvQhqHbFenTiMRVnSoTmfFWTbB9utM9C",
  "key25": "2UBv2T2X651WmGuZKqRnSF3kMqq6evBZBv4Umi838LGGc7i59mmmxcUiUCg5HZt8t9htxUNq5iXV8d1KzR96xJoz",
  "key26": "cAnW62rmtN4Jve2ybfHsu2aRggPJhuscnYMm912eoVTVvtFbHj5B52Y8gC3gV123Dmpv6hEJm1DNyAPtSHmSUzg",
  "key27": "2QWa3wfH6j5NUMRSvZdmM9kxGxiRNmJZrKWAzvqaGcmhwEsEoVKwqMcaFA62ae1pLysYCQp6fCkeDLcCzc2NdYHD",
  "key28": "2KyFJjUqvca4JoM9nLLWMM1TAKBDNjtTD1CHwbVmN3yy6m2sSo3krUNdaymJUWMukXhNA66PfsD38YWDASBa1BH5",
  "key29": "2cwmHFgRvZwnjATp3vpw4QK4mMrJiPx5VQt1uYDRYHRXu3H3TzaRGGkdUf5CXpeBoVFnZC6KRfzgUoKUF2Rq6JZP",
  "key30": "3CqLEniJaQ6yUjGUbc6WknviA6HyWHjAUkgXoi6FttNXKLaTS2W84xHrYY9DKKpFrqo8Q6LCC9Y1BR7D94N9SXKj",
  "key31": "66vewbS15g1ADZ8dWt6TkGNvwm4aDStfJYy5YP4FFrWz4psAexvZgYps4e2Ln7sNDNMN3gedeXCaEzeYcPK5Va7q",
  "key32": "33t5YGxTRD1VcXkoWr7qdPeXxYPRNo2difetF1r2KGdgegn53QjshxiqmeyjJ8cDgcFVz4G5SAbkmQPgFwuZJrhc",
  "key33": "659NbZ4YYBpZF1dDRxXBX6XfW9KYXk771VVKENBSQFNxG3rDdVFqbSeg2bCfUKWDdeWU9YweifVQFusNuorouERe",
  "key34": "2cptyMhnSmMWbzWNo2W7aYjPHnE4KNfPbpL3mTtkaaSwi1yoWdipQ6tJYRn5VvVfjgheAfg6FjEj58kJnKQaC39Z",
  "key35": "y8mCtQSR9k73jvLmYgPSF4MnJjRTbbwHYazkxh2XYEubz1jxXUWAi6eV1NBUzJyoZ4xi3dVufMmRG9NUhMA6tRE"
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
