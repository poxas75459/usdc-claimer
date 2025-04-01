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
    "5evEgaCbtjGC5GHA5TcqbQxvXQu7VUz1mygbZ84FegNmKXXrE1GAgKELitArr6T2Bc7cXTfbbUiCkKStY2nVPRzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55teQBQ2BaEndySMHCYCW66z2y39XyBHvmz4kWqnRTqe95BKJW8AQ1woTkSjjNYYWgEMNWwa4CkGkSUsQ1jSaeGP",
  "key1": "2VL2WoHjXTnRq7rymZ9gXizJPtooR5avpuRnEN3RRcvpRpVX6qVyoHXgpJtWZZckMLtPmjKb8spWRHCWPTHmDC3",
  "key2": "4faqU5wte54ycRunKYEKCorVRsUEUQ5iAApLmn8KW2HBMkmg4xdAcdCzhMnniDqLv1oJqBPwcZTe9AxXPcRa1wru",
  "key3": "4Nf2AxxGdaAqsn51LJTtBTtKkhpeV89mwwZPLKynPvnwZXsZ44CiHvckQokKQoCZpPAxzQnFoasxBaJZgfmwYmSJ",
  "key4": "4KANCjBRKUzK9qJPPebvwWDksxwBdfdYarswWKYzsXGnQLiv9RBVhHwtTYusT8j5QR1zeiqQ2TLrpMvFNMSt873E",
  "key5": "26LnqaLwoG8UpNXTHbFJEAAiu7D1oynDwMXG4eUMvfxywaQqNT9b6trmdb4hFMLugVieQie6UXncbHqEhysYeEyX",
  "key6": "4UwbJJwtUqhHPNMZ8whYQHU2xCZmJiua9ujpLPeXdkscBn1nEFMdsyG9p8xeKiRXTKj4kjnCsZDXUi4oDREga8v2",
  "key7": "5zxm7JMukPD31Gmyv8z6REhcntJxtZJxLAtN4CM24EhDQdKxKMVbZ5WvDr4VM7R12ZQBZzpGQywZQMFY8p5jUP7U",
  "key8": "B4iFqTmtPay7YJj37XvrtFZw8vjtv9dTX6wa9tLaZCYzXon9NMQRrcgBViWGsQcU65cU55k2kuXzvYLuMcCuHvc",
  "key9": "37aWSxiQu1QLcwy5qMzPG1tvhSn1NP2okbwJRX5Y8gQoGEa6X3oE8EGEksBs2jCKrp6HrgXcPmWyfFAZdB6QRpgj",
  "key10": "45qCx1M32ESRv2GWtwC74rAJQ7AZN5VcucE3bNE8tvjgyPfyTmfEtUjVnAzvTVFui1Z71XfniE8B5Xdb9DvkFz1j",
  "key11": "WRB1cwX8oMCZrt2Gmo2rURWoKZmmkHfhaGaGSDBCAUKP8TbVarYbRiJdjvK6qVc8s3A4MRPiLdC3ijPfF171XB2",
  "key12": "1BQQMN4nshzUCksyrXrooQXwKrGQU3brVYuHJP4Q8rbBbEDuAdBQxiRrJCdXza7KNqvutgjn6gJ2H88oSbbamDS",
  "key13": "5VaSYyFfqhEy3XrWbnh92oEDMHPvRZqw4D2pqjKq3VUzG8TYXWRxmUYLBf2hmdgbCXXXnYggJMwSUGraXF9PfQa6",
  "key14": "465jCa3xvHHh2YyHqA6Uo2ZCmNva1fMzVAZGm6iXjnGirdpKokYRzG7VToYvMVKyZVr1cQfYbSJ6p9TVWM9JuVJ2",
  "key15": "5brAsHJzYdrQLvEBsXdEjR9QHdiiY8Ld7WxqxJtnHuWTrB7SgYCenPsFpMakiQ5AhwLgTKeMChBjBqA9ZtT146nk",
  "key16": "42C7LSAGbNqprjF3eWY4EUBJ2HG7kJgkG8SUTzdWprFE3M5PJmdknkio6CQm1CYLNwBpaZUeGaAteFB1avruAjU2",
  "key17": "mP3JjokyCevLbmK36vvBY5EvwwQahWqjic1kHfht1EbzrU6bYgXpK7UCP9sY8jNrzA2kNypzBxWyVgsoYSjQs8h",
  "key18": "UJmjWNbMfQsUvqPxq8CPqCEN1AVjTu3BAwvNQXGbCK4SmSWzUEbwTmy9cGz41w8Y87mBhqJTseqyE2ijzisoqsp",
  "key19": "67LSGqKW4dr2LR4gmFxkyS17frnjWAEM8Uv3n7uz6qwpUy65633ZF3Ma27X2yRGj5V1NSwe4yEe4Pfaiw6DS64vb",
  "key20": "2CtX9qXpaLeZ2wQc9H1ak5csi3o3JEJrC4dDtKV95U4rBthNhqLMzSo5TDP56Qp52Efr1TTeR3Un1QhtwCWSjfQh",
  "key21": "5c6ZoadxfmJb6Gz11xZz7gebpddtCMo7gAHMNP7QEoXrGwLhr2AWytJjzdcd87uEyQcWra31gJUvtSs3q2Wb7DU4",
  "key22": "4qyQedHnw7tTFAQvnEyZDKFuiKoVUC7qj4C2564oZXNmnPzd2Z8o3UkPYC21kQvsyJfr6BWt4dRY4vqS5BQyrDPZ",
  "key23": "4Rm4kgGK7tpbcmj36813tCWnZ4ZSNwaTjCp3q6emLuiz3KnWcVL5m7LB1CYJRtrhS9SZSCzucqpgsY3GuFaJ7jyX",
  "key24": "247nTokRbAdzYBrZTMbYG17nNAykCZYMf23hTVDA8wcWfd7AEbZFRFzwPnF6bzYgRMKNdQipKWAzviiAh5hUKyhD",
  "key25": "d3ABEkGD3vR1JRro1GZYZ7DAKd7DEqS1EEA1Ce4tgLRb6p9DU99UUQcfmW1ne6ht4v6eisfBub6YUJP7qj5LdbV",
  "key26": "2LkcncvXMsMVvGqV37zrYC2ZJJ6cHmvtgyx1Fa5iu3mqtRCQbQnqg6Betbg8XqJEp87j4aJ5DdiYaH1ziMgG8MB6"
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
