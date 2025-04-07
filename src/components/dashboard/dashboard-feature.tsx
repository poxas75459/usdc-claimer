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
    "5samiMDFzVR4zJczh99Z5RNzXKFkd6P9A7XAPjfQZk8Z2DCMno9LJyC5QHQNL5BrAGSd46MqDaAGjJw6oYbZVhfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E8v8BzYdWWsfgqMNJgs7Mapk9hdY4pMs66YrFvKBv91CxMiXcJRUYKMXmfDRt11Dt9LNoVLXGPqc4JQjzW6E6Qo",
  "key1": "4LNV4gCod3XKhEQbgBdj8hN645ibWPFsM3GiWvNCdyHNZnKowLd4jMkdwjk82sWTBvMuEhjmXtXSvMqo4KJX856X",
  "key2": "4ywZQihgLWkv6dedvtrhznBmLcJkwxX5XM8k2TUtk3HztU646kTagYQtrdsJrTieH5ZwbvGXkdtcxorbUaNhTvNs",
  "key3": "3YEqMnHaCupUK9hbgBeQw6u7J2X5KmshtSnUZe4M1gMpKobNJjLi9md3FtsD1GLkMzUEYUgUDGmBE6rdnz1zsENj",
  "key4": "5Z1hHF1mzLWxckpvD2k2pZW5Mq94gn6odPERZvsiK1M9mPK85XNiJd7bw6aGasMgAdSDeiGP67rm3rqDbcnuSJVA",
  "key5": "4wsEczYmNrvpq5uSRUBh8j1frrjcHRXbtkzfeu2Ba98bhzxAMKNDhFzAprAwBstzBbE8xeMnWXfsvaCusRuxhCQg",
  "key6": "3rYnLmufC6BFUGmiJWoqEqCdEsQnUyVdu8mS4N2uPWBaSrA2DpczXBnanFeeHPMeqwqjX8qjwTNBohnhPVy6PsdG",
  "key7": "3nFRX4n159VPp7YP96eRqLWAn7ABuawk5knadiVK2FkbCx3SfLv9HqUfJezw6TF7zkuBvfvLAjVNoiG5w8Y8WvMd",
  "key8": "3tTLxgAV2T4svUGw37zQQweT8EDdnnvgiFUhxVAkYaSbWb66q4q42ktNjxdV8fBYDyBgkyspWTwq4VZoUFPG1W15",
  "key9": "2PpaaPytXgN48SuWzYaZaeneRbvREs7M4fEQh2KR6fxVqcFYD1W22q6aKmnwGEECYxzJPSEGQoLyKn735BEDLEd8",
  "key10": "5hZV9mezV7q8NwznttqrUjBnCac4EzCSuLzYSiHTXAtvusCfPQmfdtZWz9eC4KZrLkNzjJA7RH7AeJ6RqeRaBVTp",
  "key11": "5dvogjNUdnMiRXuJaQ4cjTebyDKs5kwMgvk7J4QX8LMtkywXjjndrWrMEJhQHFPSJTFWJrhaTUp1gcydJbcaiTC",
  "key12": "5vbig1GS6xTM8KKjPe9p1kiQZyD7kK1qdwP7BCbjwWK2K1c8GBDgkkLBhL1PQEM9gJtoJRky2bm1HAvNdsvuNAQK",
  "key13": "B7EYjkFiyQhgHwJoZJBoD4A6NbJVRd2ixTzDrPTpcs5me4NdsoDLEL4ba78PptHXrqz4dKXoU3U6KK4mr47763i",
  "key14": "2fP5Lw3Eedr9PfyVNNyCqo1rwjjCifWgFV3LYmhjX6WdMS6tRYnPtsssozzQWrmUKerqjgbmAcom92BmtYhJA4zS",
  "key15": "5j89vFpmv8njNwaGR36MEP2FEByvsiffjBps6BwnfyZfvofVW4cuyDwFwZdA7JZRYSBEfyhoy1Xt78vtjRYNcir2",
  "key16": "4h8sxb48DNbGmhErHfmafK23N3yETcNkGqwU1HNfXshCds4hSY1PhGbKWnuAZk9CoX8A2wsjKTXUH72DS8fQ3V9N",
  "key17": "2B69QwaWgLrNMSsX7kmS33uPn9gYv3JWf6bTnjD1DNTErtjy6YqtNJkqGXhsRZgmFNXyoGQMmJC78VYNfpV9TwaH",
  "key18": "57nvtRHbZBcmzU15RPK3R5kqo4NYahvcQ9dLUHg9yJMpQAR3kP1rcRJtzsQX9AbGHCW7x9Q4GMihXGDq9s1H8k7Q",
  "key19": "5Gg6skeE4TKbNJxFWhg1njGzQcBPzvFzMzhUMkLPK2GMptFnYbCCwwzKPTcbuBpuLKepvN8JyjLmDmhKWCinWUGQ",
  "key20": "39Akd94PNWdN6PyJF7UR5Qj9BrtC1CcGGJLkXrjZjrd3KFDQoijm8inE6CVPiVgzav3vqbSREfJtCAH8VHg5qvc",
  "key21": "FXAEX2N9JbBELKdamJPuMuuKe66Ezq69qnynKDuC4JaAZi5nho32RXHPtC9FEh3ZyzGZk5Y1VMNwGex9mkQCBou",
  "key22": "w77gZZByznJcKWiwLLBCT2wdV9JNmGmRt7RTtED8kcRFhQR5BfoHwaoHGuZQvEUjoRb753vVpQRaQVhuk8AiDt6",
  "key23": "2okNNLjE41HyRG9KjsmGAxVbpA3KH24pVcHVgkp9eJw4iFLt4pE19cUMYyu9d6594AfW3FBUWRBSmh37BGKLUE81",
  "key24": "2LwLbpnPgdV8CC5XkasXA7VJfe6Vn1Mi6h4NhF83So7ei28BWCSSXVFFqBMohu6n9GjAwQ3aDGqk8FNaJ1dd6kbX",
  "key25": "2Cn4ZAfqfgZKa9uRzRyspePFc1f52bXc1MnHRzZaabQbTzSBwR5KH7BD9YB8NBD6WgyKjLF9Bia6s3LLCG9D69cG",
  "key26": "Sj8bSmBrkro34o9ZtZYGZCMUuJJRevauRzUzay116CCrcjRA9M99SXUbnUPQntSyj1QndN7JqtbPUwZdZ32dQWT",
  "key27": "33HJXbn3ezAuktQUpuGqqXLAFvvU2AV2iFdyHfFfGHbgA2ZR5NXKmMs59bWSJjcPrXtMuh9zsd1JsXUYcxNEaPXf",
  "key28": "5nkbAVqs7KLZH6ys6S9gC92hfHKMfkmEhGk5q8DsMtg3AYdBNdR1Fk3wh2GUvWoBaEsda4FffqTWS2M3rWkSbg7q"
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
