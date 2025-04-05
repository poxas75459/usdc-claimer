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
    "2iYBeeRo3XxxJG16fro2YNxdD8rtddf4zfk6xe5ynMZ77hDXtz41rh7BdRw4gsBZkQZYHMC4vXmcYx6qp37MEA1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D8x9Djt9EePm4avpBsnqdH8qp3GMZDXcADD3C6vvgPVTS2oEC3owWiwh536WcJzGP9orNoHqXuRPzRp1VosgdHF",
  "key1": "TEmxtusVhmXESDXqLF1vSDvvzeMeGBM5HoNU6BdxXVrSQM7D6ZQkghvSwwGzWsGk97Boamo5txprHpWJK1Vz8D7",
  "key2": "2hwS7BcEKTB7zRQz4kd73NDG8Ldee2tshfXnFiajmg85B7DX6iaCg74oPf9Uwx9SDARAGA8wLisC4i5pkGxgvGVK",
  "key3": "2DvxFLg6yTU2zySGP9x2R55n34Vg2nZpSFthKMx42f53SBQuAXNMMywrVPXcGv6VAseQNzW1voKfuHt9dEYKvzmM",
  "key4": "64vALjHec7oc26ZAnGDsYn6MxY9Qdw5FEA8jFzgqaFfq6h3vqkbD4Nxc9rynTyeDqU6obopc9mEgYuBDbLriZ7N1",
  "key5": "2jotjgbgVyviwzAwXh1vPADEZmQHon1LxLm2NoCuwriwtzy1KYQDPJeR4MATqcJiKyBNjuYsVyVw5L7CpnrjZiir",
  "key6": "3QXRsGUXRgkF9R6Gy9swbLkdQV7fr6qs9puzJzruGUbczV2FdQpkF299QbTneSEM4YMBQ4tjC58AVh3h2PvxenzA",
  "key7": "5iHsApTpkRiboXaNEXgL94NnRpidL832ZbMGeeGZ7sSf5jnqpsgkFB5naxnu9pij5Y6M1YUpJ8k3wSbMwzoyZRDA",
  "key8": "4U1gC8gJNX59jquJvXZUnhrMV5hdVYvwuZT6QM2K3Geb8prNEy6LJT65Lkrf3QnYEY2iJW7m5f6iGSrwZE67nkBQ",
  "key9": "41FBVvxLppnsJ3vcC9g2J7k3geqkEgDpstqfqLMmiE7bMdMJ6DqpjqBmPTbFocwUEEQmKAatJ6DrJaQzdL1P4hxV",
  "key10": "2kp3qtMsyDx4L2V9p1Uf4BsGJpiD8WgEVSZ6bpz4vdRBtGXHVcb62bKeLWDkTY3YK4U5gceFCZ3TraSeGbwsAD7Z",
  "key11": "3VcnTHpEicLRLDknLsbZEBzjoGjZUKuSVZWiCr8fJDT2Vxy4NE9pnwmrNV512oLMcH5jTR5rDEBxtEfCcacQ1NX9",
  "key12": "4wsk8pSkBdAewvWroZVXR6B8qZzpJ1Ljc5T7rFchS9o6HetUwaH2hLDfRQuE8mNFiRtWeH8fyMRzyZBy68T3fpqK",
  "key13": "4bWbE7JprsdJc5a93E7UYsz38aYmqovVi66V8jEARG2Ehhs2Yf8MR7ZLUyAms4tYpNgXtT1VwXBqgEkE8cXSRcJM",
  "key14": "4bXsSjhAZxUsCSDE1VxcECJjsH3xtdarZoGoJdnUToCNvBMy4zizMooNkMjMsZCMz2ZnRhr7BLMhUdZSqXZkJL26",
  "key15": "65GLZywu7x5PBBrkGZJPVMrmdjmW86oeyab2WRxiCq8uugBQksz5yUkCwqTV2X2Sxu5paG7U13CZcWy2kVuXTL35",
  "key16": "5ScQ6uCLXSxinkJMYNCvtFhFrFhooe2SW2igwSBxy9opJ24NZjE3AEW9gZYJpeAi4pykQbECap15ae6dDyq4ZRfw",
  "key17": "EeFTJAgxQXnsvWbzgi47tv9etbxLAp4yCjeNoCh1gSrXRpyTpj227CmW69M3ToUeWoebroo9RStMYGc7u3AY75R",
  "key18": "5qCG8FSYvtTZgp5SpDGnvU5cQkxE4m4gNXK1TEepm1CNhF4dNePapBNcikiWxngmMUWgecBLd7WyH59i26VHvycM",
  "key19": "Ua5NAgeLrnQQhf6DSUYZ5Kn1eaiGtEWFPM9qWMzYi9gTTeSkvoxkiUb2mRZHFYfFd4K66HZ9nbMAiCwtKdRvnsx",
  "key20": "3ZHuLc84EbMKNEBw7mcJGxLzHVTsZ3jQzWg3Go8Lo8EvffYTWMzE9crnS7g3G1x16VQji6j6tzzKmcJ4jM8XnxeL",
  "key21": "2LNGuoh7GrMVi4Mwiyi6d2YYp8ZNtofrRW3nnsoGca8tZWYpgWJPn5FiUkrqocArhM6puc4xatK9LRG3eM33o1Qp",
  "key22": "4agYDJ9t9fZyPRkyiu5DX3j8ewA7juGGmiTf4R8HLAcWmpsmQYCgB2VkZcNfuWvK49AX1Z9QRzXeu3PWEksbA7Vp",
  "key23": "4ofX6EwiJBEtUBz3mufLiV1MH4BzoYMcVujShxAbuL6MiPjG1Xc3Sb5PayhBCSp847o6zrRAhJsHzQHVjviDU8dr",
  "key24": "5TCX8xvK6H1hUdgnQMhMxDH9fU52PinQ4W1gs4Dvr837BzvLT8XMbAC7ULnDG98Wy8djqv5arVHVsCjLfXt7bD6f",
  "key25": "2WP91qX7UuHNNCoKqyfNt7eLSTKzUT4hiVD1ReQa5rB37gJMkWtkvbp6CWRGpQtRo1atv8hYjagbaVWEhpiDpCN9",
  "key26": "zh1mQ8Mh7aHBApsMefiJjDD3oPhcC5GrSB3E9bHMkmPUwvvTpAoGRx5vQKuuuPnEgpAtv3m5Pk1ccmdd9uwq1tb",
  "key27": "4qGJSU3oxdbpWYirUnyfo9xr1z4JjSW2VqyG6C4V6rw6F7EmXkmqCvsG6T9pNZFpiSh2jTjHvgRFVifoXcohykk6",
  "key28": "5FNhQY3qXGACgZV8XTPPUwgXU8RXSJBn6XDaQuQsesdvn7y3CXy7CjQR3ckF3sQQiMkQkSgzVA1EVV4dd5PWLaxd",
  "key29": "2brzv8JXFmi78CG8mtGb4AFFYLLGRHB2GMF8SUcWUqAt2NoZeCJ8Czh3X2TiYjPwdZCheDk1QFuAdyvhnSfoqLGR",
  "key30": "2NiHpkpo3BfahZjCDSMyhBdWyVnhS3SCk6q33WA1eiipJcQhG6FHA5zzWWm75GGs1y9jLApXondGrniZQ2M3e1es",
  "key31": "4YpsbLNqvFiYb1FmL4BHBRdD7SbNRXzhzkFvR8a4GwctVGLMwBMYmBzD5usGoj74u6Yf86p5HmYDgsp1pJM9HZj6",
  "key32": "PN5GFZPSHiEKVwddYnjqmUiFiugf5s1wA9GqbthG14famZtYFH8eB2SEvACbe9towkfYUCPZ7Kz3Njjxx8WEUM5",
  "key33": "463BRgFRQzkgmuzaf5veZxLgSAwn3pa2JeurTdYEWLj7z1Vrna6tcHLC7aoxApMZiMTFjpmjdVQJUPsgiDgkLYfi",
  "key34": "qW7Lm1xBjwXoHGcQww6815XPgkh7qU5XotoyCFKFBUW1U6diYiMQWQFEbfanbtCtMtb17oTso18X32jCTnGYSSh",
  "key35": "yPNp5yykmunWCsrC7vfyAzaGr7gkGWeRx72ofnK7sGYVcRogQbnxzdoPT5hRQskPEwFTh1QUC1ttAB12dweE9Xy",
  "key36": "2eN2mgPJz2pGYfpoavRePwei4C5qKTSjihGY2UrqzgHFqyr6aCr7gfQ9pzng9NbHZ7BzCxEbSi4zEpZLpZt9pjYn",
  "key37": "5iENXuMF6EbUrcfifqhBNtnmB2xJVbK6nG18pY9Dk1grKhMkUQxUHqHzNgHDdgpF5HZCctYXcpkmpuXpjVTsowmQ",
  "key38": "4tU1hX2atuCfQVyT3HpqnVqruEzEbvZAfdiZSDz5GMeGzDgeyUbaNxphoXVHMGK1YVbpcdRkRQtgv6wgc2bduzr",
  "key39": "nXGbqS2rF3g4RzwN6vDSmFaptSMFh1G2tQCGaN1KRnBaky12C4AKsVVUHNux1jjtMwr9b7TgTLYkxkdgZZWJyUp",
  "key40": "2afsu4tRSUk9DdvmtnD78xpB8iDqBXT55kt9vm2QpjdYeQY4ZoP3RpKW9xia3eac3eQ54addL2gn1S7MMELyDXCy",
  "key41": "5fjoK23YLGW71ddTyiLyYtgBRK4NyuD7sVCf6afBoMdUe22VLCHCzJy4iufaxzbg1qaNsV2mD8AiFNXkpuYwJizW"
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
