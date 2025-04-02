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
    "2QqH3eKvXhimQ4areuLKgScU8hA6B8GgeNza5ZUsYPfRBVycaHWZMfX2PqJJuwBR3CjE3NzzYuZYHUaodinoJjtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hSm5nTQXYXh8XhqP4yU52sJ5rsCmZoKXP5mP7PVq9vbiWSJvPkWP9BbaoPkRwmFpejUt7ibDCSuAD9tvea96CJX",
  "key1": "4A1ZurUV8xHqUZbNRoUiwJcUtvwqDdHp6AxJXbxyFxY564PQemZtVLGvtSgC5kAXih95n4EmPH9Nzdjo4D9LBWow",
  "key2": "AYh18YkxBfBwmu54rZysRu4jnQ4R2NwFY6Mm2fZ2mdhfw3Kd8cu7mFUh4KBFA4B1TnVdhMy5ge6qWoi4c1NoeSe",
  "key3": "5a9P9KRSqar5PDFrVB2UCJCsywZdK3fbAfqe7zTRcJmswdyhm7zFE8Y34j1zTqf3hgPqTbFNG2cnG9YWM4dYG9ir",
  "key4": "35Vxi3fZ7dnDD1vmS6CfgNWC69pUQh3ho2cRgzQitJ1DeSLsoDBDBPjejYE8gJY5LM8VUvgFKJJ5f174Dzm1QJwK",
  "key5": "4pV2r67bTbokLJNpYcVwujGcYicQNsesNhtxHWVPuWvcZd3nPqpCYzekrbVq4QfAYoP5xkFNiqU9vV86Emhk7osf",
  "key6": "hbKjVx7FBNKVerF8RF1KP2VP6BDn8bKeLLAsgkmC7sH4u1uz2uRGE7uQf4poEDQSPEDo2wZzdM11f4SFg2jXADC",
  "key7": "2st4oHRNAKuVM15reLKGSA84Kb53kVgCKLjukwfFz58FA65Hi9EvgRCsKttjdetc4yuDKPtiK18LCfiPhZ2FmZp5",
  "key8": "3thJuFjGj6EkiyNGa6CvCzBz82bfTQ4JwhSG7eWXTdryVdRMY1xEqoxqnmhJxKudHtPFfH9kziK4JoMP1YHpjfB6",
  "key9": "2CDmHMF5dYRKjDgejWg6zdkfab31crn6E1Ej9gvgRQWQF8s3gJ9fjs82hsdFHbaHPYeWF8AViY4hQyB5LJAG7qKC",
  "key10": "4c3X1oP87gM52DQsoXWuumiDaZYTZSaZPVGuVSF8AezkiUtcP67cfrLBU31AUrcce36ciNXtgoEE9ZoS97fM8Fyq",
  "key11": "46PUxWQiKeryk2wTweHews2GjQ8khnFrXFwrpn8wVjSf9jkU6btxyW22ZKxRKL4gPivMLdG5ZDYf4odFV8VZnmsn",
  "key12": "4PBRqawtfqnSzbFZdBksDtSTffiENxEKFQgTe9A55WuL8SpK96xkys7n5ycD356cfyYTxbR9g7HFJjKd5sLs8zLY",
  "key13": "673oEz7kg6xQMkzJ9xte64psPH9CKhvTgxYkXKA5MYdBXbTFZK2nimvXpnBCdx3D2iypCimetnUVk83F6GvxwvVk",
  "key14": "3yHDP9yVpcUvujLArpnhfBjqR7PXnxcj6UZxKzmJQfNAwtmpeqWpsLxB4LbVARGmFE1PRKSYMzg63Bw39uUPP8uv",
  "key15": "3o4MKfVCkJNxoTkoyxQb2jNkkupN8KpVJJgnYCzXgoHkfvd7g85uGnEa3r1heDqTdAz5psPD2YDQtTs5GYEyyRRt",
  "key16": "5Em5hXxBXeJcUELk84nh3WNvQh72ydLWKk2xwFehmivtJmHzVLcUbtKNLNhVFrPwqqrdRhbdtSVFG9Q2eGp6xM1f",
  "key17": "2YxfuQiTbgv4ZXLkdRuQXpHzNLJBb6dpmxMeYpvAZaYCC7NEmv3LyJPpdgmorQPseEMMsTtMU3uCq2qsz2JHExFN",
  "key18": "2zUxM8kRbZGsZQ1KqQ2xbNRyyZ8Ui7AaQ9LReet4h2DLVnJzPUhyXNpwLhgSXpgNSeCkawbm5CetZgfZ7GiNsDxP",
  "key19": "5bHNRdC5SvYzJ66ox4N57NWb9zwRkvinHK37PTETr4x6EghbQLQwZJqS5w8tcHPq6ZvD9Twnon91LbHat42UrgLw",
  "key20": "2v7VKY9bPPi2ge99ribUHbqP4uMMhSiw1cuhpPUBxxNTfTaPdLGzWhxtW5fsHqK99SNEiMT9yeDV9nQVPjQWLTBA",
  "key21": "2avZ5LNEg6eAVmFhNgz6hGULU8pctHbkHQT4qfcMwwt43ZZuN8sezjmSsPhYgumce8HaaHx62SwcoKDBS2SzSLyL",
  "key22": "4FJqtdgbALMP6xVpTRGE5PwGgDJUxaxF8TRGkRuQQtWw4HZcDdHvQRJb4sQvU8psReVbNjCLG6nwdyixyDjZhSuv",
  "key23": "323yjcijU2Jc9es6wkJnhyJPdZZdMGuw46bjm2cA7CixceYZpyry3tsSinwiry8MXnVTdKq2rbBz7GMzQjELFhTm",
  "key24": "5DhEGeDq1SndLASzeSGxLzR9hwVqTHrhe6kruZ2eP9WfP33qCwxmqLezkzFJ9QxK1PYE1iqVZKyQ8tU3kopqPNUz",
  "key25": "corYadFFWCKHakqJ6HHJMWNCtgdtgUfMzWuymQTFC3AaH4akKztLyro4pedVEarhjombAN12TjhnkJuYGTh1Bau",
  "key26": "27ETrzvsDPBcdWw3KSYM8mVBGkmb3g5gvUxQvNJXDgW4kahKguGaDaah64Qu7wy7SahQjQPKXfnokbz2UpeEeqvK",
  "key27": "2ZMzmE7MSncsq8Bh7efHWwXv5gAQ6gairVrVRrohwFZR2h9AJSYJpVj5ohCtBfmaZB8EJRbRQ11gfXtsxJ3R5BvJ",
  "key28": "4n3HVLEXEpp5kpYvYK5uWZYZ5pURBxeJXh5Ssy2Thzsgt43h1twa2siLM2H4JiD3Z8jf5S1R3GR91yZFqXkrcEsm",
  "key29": "5FpcqUP2Siy9HitWbbEsWaNz3id17n6Uf1BByAp5Qgds1MxNEyPcpLwsRDJNPE3CmsK3g4LqFw8FSc3vdnrdWmPb",
  "key30": "fZPvb4pQeBsEJHPULhUnsW9nKdHyowSSDyuTzrk85djVyBqL8D1pqibyMG5ai7VZx51Ew8qghU1inhnBVWmeW4H",
  "key31": "3LeQ3dNvtaKi2eMNHx6ag7eb5cKKPqsSLCiEdaZea2BxNgyw54DziK9kwFZf3ePaFhyNupQGhBoTicVqHhrrX5Gu",
  "key32": "ixkZXGktndLgVwqG6wajdKU8nm39dp26keFSUaY3gbwvjqifGzwgVenJ2VoPZwhBg3TaV8Z7U4wrszSGh4GdBWw",
  "key33": "5RPz5kgFezdKfij4cFKt3Bcw59sXkrBBfxP6KrTzYeA1eZXpFbP5d5gexmUZFv1N1Crr65CV6EayoH4P8ymYzjYa",
  "key34": "4LdwU9hxLmPxFQ2BVoaNaaDoEdrUQ8UaGhw9tjtPHwubZWnjVwTkGxjinP7wAdnZk6zRG8WpSjsiN6jZavbvqWm1",
  "key35": "j7Wz8oTcagxLm8uB71bVdGi1MK8pqbxDGzac43vQQ8VLhr7dwwQsScXhPpEDBg8CYNCSgyWDfkPKsDemJZwVp97",
  "key36": "KXkEvcDW8JfQoVZBsshBjfEBphtdsHbZAnV4szwkdpAViWd2tE3YnBftfcsaPfv8fpYfrFYKTiwZNGnWFZxXv5h",
  "key37": "4cPgqAJzNZVQqedXNfeAM3mmhoESVGsbT7TLkPgZ7r2EMwMopWtDoC3ev33mB9EYfnz9Do77ZfHm7ENke3LzdhM7",
  "key38": "2viW1oefaf5MmLUfyaQ7KAfL2JdxzimHDJBBgw16Y3PAHwAarkssZHBS7L4Lcp7MqmqLBpW26H7eQzNZXeVm24nC",
  "key39": "xf2RKPqWBM9VqEo2vaNjHqP2A2ZhMNGcP2XepeELF2nSxxkk7LNfZiudoAUWL32HxX6o7zruWhYjvBprdiAA4YR",
  "key40": "3W2feNn5NjnrZDouLQKvdPbvdZ19yvxGs7yQmx3p7GXynYUbL6WXbBjvhJgqqN7wNs8tnvCjbAPGuvsoPAAUavXC",
  "key41": "53PdLJhNdDa4GtrLxvWnX3RNowUH2sw3jMc7YqwRNwRJzogrBRtYYrwzZ3XPrZ7ovCyuPoWKLJ89hfMwbHVLcbJE",
  "key42": "5qabFRvcfWHm1pmBGeFUqhaVmoPpWyeBSyMreTAwnsiCNGvSrTdDZiUKunV9Eq5XNeG5o8KzhuL5YkAuwzKgxDuR"
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
