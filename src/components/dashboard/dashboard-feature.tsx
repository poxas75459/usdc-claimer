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
    "2g8BebJniuz2G8B4PNSTytL2wmFwyGgMJgBxYMyNzjbMhuKQbT4tLMQX1zSEBqPtpqiRp8nMZbm4r5oNvcT8qL3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25czWoq4tUmnGhQA8Po8CSweEaptrPdXF1gB4BLpnqqWurwdQRNFw4QkwRon385GWFRvdcHg22p97zbh9GQo8oxa",
  "key1": "4gLt28tCLKaKGxyxdQmUp4jjSPAzNyCmqep9e6BMsRuGurkHWuDtZbXoiayJMx3hcoLrgU94xuV6TCLmUaDMZLFz",
  "key2": "5uBW3xAeBujF8v4dvGf2SYjBAQFev1xpGhvfhmPa1kWsuxFMYkg7LgcMSSTgUDhaehojJ3QH9K79pRb8AYR7zJrL",
  "key3": "xH1pmqZUrMTA2LGqgXXK7L9y83nUzFT9viwUVBPTE1Q812f1vWTVN8TZVZmNMFD7rzgAc8rDUhnnvVCUudG5zXb",
  "key4": "5vEW2m1KA49APjPKk45h3JshwGr1dNXCmBrgVKbVUrgBc58vodoLV5RZf837PFsYm8WeYQYWrexTdwbVD6Fhq1XE",
  "key5": "5imXdm286thPDTmsjpWvVs6w6SpBnkDfqnTdnVoLCQkGYHoNfiF5VNgpYRnCXXdfhwAjTq8bAiowKLNABFvtxDCF",
  "key6": "44nKQioAApSdpepwRBfKvZJXibFFgvYkfK2doizHeV5qwA7aeBjQuaEE32afFRxXVxXPFC5CG31R9xCqtK8CWn2w",
  "key7": "3i9FWRx8tu3BFwbAQBN5L1gshdDhmoD3QoE1QLavf8A48aGxydg5PTYzeETqc64i7u25sp8ptpGesGSs3hGwfRaY",
  "key8": "4BuQ3ch2uC199hF9ddi5cYNQ5M9PsgMU1XNPEtEaTURVm4PDpZne9DJsQx14itiBQC3wqQqHf3rGgNFxYgdpocgD",
  "key9": "e7jv3amcuCuyuxVxWu6ENeEornH4MTFGm6gohcRobCh8hEdCA9JyuZ3KAEiNtvn4fXPjFzRKJWJbNoKJNnsyEKf",
  "key10": "4Z263pVf7Su7gU8o3rjVB8jib86Vg57RVkf8BW9cYafdDzfErhzhHQcTP2EnQG3TZ5399SgVWQRjskDbAgDhdmRQ",
  "key11": "3ZsvYyLZjLh5LeMM9kkyEoHdNRoHBHJ1r6ZBETuJTekBnoQeYKRMJyriTkWYpf7uDacPZkx8s3oop46yomBzPeYs",
  "key12": "rMZ6Ry5qpWZdfzqfqG4qb7jWbXRh5e66u9VQDkXazVxrRaJ6KRm71bY4diGyxLVvDb7Q76TeWvkY5e9qaZq35VV",
  "key13": "597ucxUgKHn4eoLBa3KjVuS5YUH5qBVciLg25rpYABQ3wqT5ti3xeHH3d8NwzCZcxrNYe1v7bmYAzUD4cGvM3VUe",
  "key14": "MvDDN81NyTiKJcKKL5oxEnndrEL6oKfGNW1yromwD76Xa2qBw34k8oPd3ZMWgG2kQQp74F94UJN433J2wnU2k1Q",
  "key15": "3aT6hbBo9G9rbBqAogSwzUupVeEA1H7roV64SJGHaSYTMrBYPF2Nh6TCcFB8HivcyapZGLa6M43R5xqVf2Gsa8Ad",
  "key16": "2Ahd7xGM5iVhQ9LVqYcRVsiBvoQKhbqwgfKKkULJe6tAi8FK7si3igggnWZDww1nXpeE59LsdVNGXuN38Y3tj7dB",
  "key17": "4g4yVYHAW7i9eVxJPkaEJhQ4ZV3gXPJDevmTfg2osANJqqJEqV2yNbtnJQMps78veHpSqU3fJWAMTC6XWXDQfvg8",
  "key18": "3PUM4McEYG31hjaFUoVrpBnxJYBPxxsGeFUzKWaXHxU2S2VFpdgbqc1BaZ6ccscARDJsRyk5FxRZuR4ejYF5ZAPB",
  "key19": "66QNh5eU5nRg2wVGGgNCYoyBb3EXxRBP31rtkKHCFvRYxW5Ju9fFaaeYkpSWzyeBvTpoaNQszaGR9vvq7siZhWGq",
  "key20": "2gcdHRKRgnTfp7V2SB91pw4L6UTWb9CKACrJqH4wwsQ5qmS2CJKGLqr43mdV1CjU3KEaUq1oqkQ3U6T7CQ4U3Q8g",
  "key21": "2aqiYiUCDa2Y3cX7eqhCbem2gd9PtEDi9vTNhSmEwYLx2Sv4GwR5AQFKbnDJtTqcVzr8YofHa1KYaJLMQ9r4o6mB",
  "key22": "p3ZiwWYWyCYpp6jguWFHxizRBEdKRbCEJRdcSQpCmU1MkkCeyWH9dJiSPDtdfZ23zAabVrsNEZZqMGf6Si54F6g",
  "key23": "26T4Row6e6bTY6TpHLwJTBBe9JhQ7Pi2MAQF1dpt5rroitSE95wZxN4pDbnbkhTyMmG6heaSTg8XgJfNu7Zv9MmA",
  "key24": "2kE1B4zpnUrsZ5iQqfstFg1EB3aHMX4tkQHq5UpwhwPqDpeYLG79zZ9tCmLzoxVCRdLf22EAyoWU7nX479HfstvW"
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
