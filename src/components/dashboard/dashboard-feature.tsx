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
    "3d7ToddK5SEiXkhGpqN3JfVKNSypV8icRuTcrmKTmuJAX3XKqTV1bxd8L4T6ceLRB4onbQvbmGL6sghSjAfttdKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bz5KpW21qVuQMjgFL8wqWV1hkH2ZDjF4bpP5QzENgkMVpkp174uSGfy9c4Km2uVb4BtEmGNK4beKR48zbEh5yeJ",
  "key1": "4q1mVVbehFhDgZPH5KqXyLQbGcTVZ1BjacpojSgZJVLxX7HnpdnGKt4E68UVw9H9VLxQhavxdF4uCneJXjseeAQf",
  "key2": "BwYXURYwypi9y74LU2tHhtszmvENQLcG1aybVKwYBhz5me9evqPUCTztz5Ke2zrd31FyHY4bJ1wZKfq6vhXpokB",
  "key3": "Ln36E3Hf6LDxUdAth5Ki9o1ouvcXMdTWSExnFNZ3csx3vDJB3CawmRCrw26t6TTwB4yZnwpZ4S2DPJ8aHc5tmD1",
  "key4": "3dkGRTg2oiVaxgST2af6gBdWuYnXf73AJaWzVu9Ly1dALjWaFSby1QjdzgyHMJYTk7ZUf3uY1RtzXZSDqkf742Gs",
  "key5": "9puXKK7usEixFSwqLbjSvJQnrNj8XKLNdWSJDPHbyqCJXpyirdu9KhdiWKGXvHVYHXm67ZL7SDtgNw8t8hU7bB3",
  "key6": "3bxhPpzL7dX3mrX5D38k1mSH3FyS6EGaWd993MEK4mYrDk69s2kqNHYEJ6hpZQPeddbiHqXe7M39otGPQTUeAg1b",
  "key7": "5F4qLghDC8nmy76ouh4W9fsqu4cGa9RYH7R5TcYnEycrP6gEdzp9ayvCt4ZmMUeSwqZC3ZAZtGJ2tUfpWda5rpch",
  "key8": "4WgeAfhw8fThhmZaGgfvJqgv7UfL7QE5M7UkX4o1SDu5rff9mxoFhdQdZxVjCUV3gTtPojF2azTkXYTDgu2hga25",
  "key9": "5j3oFXJn4cAzvBEbHdskYrT9CdurVA5rccsiTDXD42E8hJkqmn7AKEUTNN62tNBNeXiJXeAL5SbbY7TrbfkY98oy",
  "key10": "336gPQkkEuChifJKiqsDvzH1nRk7pc8AkPRb26xtk4W164en5TNRdcK663uex9sA7QEM2q1BsiXK7kEiV2tEZNuU",
  "key11": "5Gm9rVxuaiJnQoeiuuEurDjzFRyEqcbCJjGbGE5SQf4i8tFXirsutZCMMDzy277NyJjQQgTyoVj8Vf4Vy6JnP5vZ",
  "key12": "4DXQGPJ2UAYgTjbExy8mTEfz3TgiNtsw4ShAw8gdhTzWaNPnVbQzHiG3xAsKXF4Wya2DJojjCZU97wgeDCtBe7DY",
  "key13": "5z3Qde5bwYYo4uYcNnW49jsdkJNEzRTPXgkMhbCcVkM7JvrdHAXYAb2cuvQfJobAVFEY2aEfxoC5Hf6DLb1FVpeq",
  "key14": "4oHAaUkn3CTZBP6VN6WzQ45pbxzq19WZeCWkc43uKewet5VM7ZFUYvfXc7auwJhfyRhBVUGqMps5kg5YfXzdMQ8H",
  "key15": "4bQmZ4BTNWqCqAacEnoRB721X2diVCj7ffAvCLqtGUvCMvvHsbys4TKa8eMKCMja7atkH3AQbFrHHZD8eDRcnzJe",
  "key16": "8A6dDVH9EzZeTsKmhuPD3T16pz9MGih2EhZgi1HR1jYRPnZe15oxjoCaNnRJsewgKrWeUvpupKTdxePTRzxihbr",
  "key17": "4H5Lf8FkT8inWSmkebuu3NmuyE1xcD17VFs5BkJGZcParZ4N4CoXwWk8n7dpciQyx5EBTbRoFa9Tj6NZsppSzVTx",
  "key18": "5pJweLy39cp1t4AY9jViWzYQ8pknwG8C7MqNayAV3fYkbeyNiiKZNMQjPKTxZLVkn1JN7aQSu6m7birED7JrinQK",
  "key19": "28cjMsExWNbDRYXh1pKNk93VBduGcq6i3dofV4GG1f2Q629PGUyEHAYeu8xT8Tta5Fn9iNFMMpx3asrRTPPdeJmE",
  "key20": "4C48X3q9ct6DB54EdbTCZh4ggJJqWpup2uCXGhhBBzLjeXxiS4f3SMHufuYiqibqnRvgA7H8aUZ8oQ4GeSHvCBg",
  "key21": "cxbHN45UfJvvx1qVDETAtB5GwBQA4g71rjB59jfMq4TjrNTzPnaUTZfn1Je6Yv2kUt6sfnhvikgJGDjDyvVHSMY",
  "key22": "5zt2MT5HFtmKGNUEWiwQ7KEhBkkx8BJMAoZvnh4yKiYBtcHCKG9HVCePsa8aasBTiqKLTLN9aDXLfxasnARcmbA",
  "key23": "5HxcfbnoeNFN7w8TEUQqM7QsUHqpQ8qHbZcbXrNQyfb5jXoehdeTyJRDXE9eUKknG3kprQLVcAva9RKb7ju864Af",
  "key24": "e23MqzhPDBAFLw3TTSuWNV3SKjiKQdX7syjY1mLSRZa3tPM6AYnXnWZZNifaD5X4jvLmcRFkYdN5D7PsF88fZr3",
  "key25": "5FhVq1UpSEhY6AYNrTvSYC4rNd3jj2JaDWunyCJ8Cr3ANYWAZBBZWgBS7vFvX4y3ZRmtGaiUKjsDyhcfi7yMXL3k",
  "key26": "33e4BeDZE9LEv76WDxXWW1X9eUFr4YTBSGLkVFkGXzDwJpXKphrRvzm42nrsEjakACLA4FWNTc7xJAvKLjEgVpVk",
  "key27": "2kz9PWSmnrZHW1yBJRsxRzCBZF2eZKfnRY6RqN5QjwLhosKEywEpbP2JiDdDzzmzbX7ngVpfa2zAPd9XaGoWBuxn",
  "key28": "477nt1JSfw59Gv9371Borighc5ekyQPZMsk18squ1cZzaKRdX7PBLa2usbqpinP9yWRsmmUjGjNV5M8eyRZFjcZh",
  "key29": "3UobE1R9mQEEvTyksrtq939xXuSwMpBnH9kbf34GDaiEvhfoyBJsDGXoQGwhEeraQcwVrEx9kdB48b1aGAcEyr1j",
  "key30": "67MzmcoxpPHsVJ4K8D3rUS8Zf35BauPJUX9bmSZvNxmnbHFfaRDzMQ5pdBsdszgnHpJtw54Kku7P81oJkx4ebfup",
  "key31": "2KrYFJAQx2KDXkkhcv8Rcj2KQcQAaCynN2t2CoEWXdoPgU5tYQKPKTnzC5zTPFZv2DMjf7MV4YFgm9TdgPDEnLP9",
  "key32": "2G6eGuYfpNiNqoBtzeMypzvyhNh1uboXwJkyuN1XPpPyK72mF58EYqXmQVYKpo6dbqbRx3FkJYRDpv9e4HPH4UUA"
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
