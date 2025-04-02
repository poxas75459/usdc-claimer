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
    "5mqzBJWuYWe4BUwVfYwKNWrEch1FRCqB7ckuNvxV8hjWyD1wzHrS1M6GLumZUGT7vWAaP2RY6tLT6rLWJ26BZGy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37bvG8rk9R9KGgmaz7rYiHvzoVYGfrbZA2f3qFdTTNPZVYJw3YgsDP3ttitZBuD8VR4Pk2DVmCR8xn84X7kz9ckX",
  "key1": "3etcXyisTgZoXLoo7GM1urFM5Vq8wuPJF5zF48MGFzzUFVCyd7FVbTAWuVXMDX4ukwnqfdNHzpRUxS7iwdg14TV",
  "key2": "5LfLWHcrV2Txob35ZtxEj1TjjmwmvorUeB6yKALb91adeYiVb9DVGTbHe8i65PQc5Y77oaAQJAtCF64xixHoavyH",
  "key3": "4cL7gL7zwZyo79dMXir2qViV5bZSMyUtyuLnyXfBWcXZYMfPyCZYCz54ThYXBUwn1XCQ8cki7PFzviau3fL4eQAH",
  "key4": "4qLmRGnYsk8CYdonEYFw1UNgKZvLf5WcYxhopKJuRcsvFAUV7MuTwKhNeyYBFDoQixFcHhD7oNHZUUmSv35KtpcZ",
  "key5": "3MnLgvHbMH3fVCBV1Wgdzs64KjRUqAeHPpaZGk6JNzFCwq9WrBEMQUS9BJPzAfnn8j4eRciwK4yzHA2CFMtymn6N",
  "key6": "2Ewzrp3J8iD2jieNULYss6Dbq7ryqSoMk7whxGnA7LY8VuFoN6hvAuAyNyaBBi7G3WM7dw9iJXz8TBhcgx6VXgos",
  "key7": "qe5hh5LwBNvdc8ebDqCHBotVm35TjeAtGWmcyiEMuQKdfcLgASetS74qU17b59oj6SN3qZb23ER7v8HMYNrLfUu",
  "key8": "5ASjcrdSrCDrPfh3jpfnVmo3UexSzAFgrv6oNzFD9cN5x3UtkviysTFpddgCPxEr2HRbXabU3gj9WpDr8zJ3KBU5",
  "key9": "46y9gvQgfkLsJEQbc6SHZsg1NTUPvUPETVcUerxrKvtWLJ6VBAYqb22nDeTpueiJKDzCp9c4CPt3JwJAk9mT6rei",
  "key10": "fEKsmMZAvyQPSrFXVcvnCKfgQqLMNkmG6Sg4ZEF5NG38VQZipEVuDrySffwPSGgDcy2sQFNCQMPZLwdWUnDqDkw",
  "key11": "4Y7D6wwi6TNPhc6DMrHLWcmwGG25o33iLwDdnPDbGSQN2esfGYMrY2ftQXa4KqjC5jwEytdAMLVj2iA1gSnwSJ7P",
  "key12": "3D6Q3qoRr1jmSNnobh3RgNQTj3XF8mBBU6LZdGundxfoxx817R2sVEpw7ea3tXG4tRfyRLA5jCZkvTL9cJkTnJGR",
  "key13": "2AV9qEYj29Lbauyu5wvtbrnZeH4hQ3Rwfpu7TxYiJZAW8gMDeEZbcP4MfpkChYtRmgwzzmHM9BmRQrK5Q5dLaWPU",
  "key14": "2aohhDYp6MBfvXj2HbiuN35kmr8wC4WxJWYRAjT8HjGbpDouXenzNbh9chJ42xiRCMZWpcbderoea9FP8mrc5tCj",
  "key15": "5XeBobS6TcmHQsCgLSx3Rb3J9Vsi4pLjaAy2EsNq7uuDHYSSWh7JeC6DzZFqGeXHXAMUwygHZLf6EXpCTUkKoiLB",
  "key16": "4CwnNZ1ud5pXGwHTVZBYAgA132QremgKTTbkZeiF2ARWkjPLMbAUkkAWKoXuhMVPU7sRrA87WrcvRVVXQRWnqeZX",
  "key17": "4LGJkkkj5fAXpYPmhpiswqMFxbot5EfAbrujkTd3iBy983Lsy7Tkcxj1qupvAcCV7K3AoXezahus1tdMMSpftC1Q",
  "key18": "23CUrfnTSytr48kt4hGeCkwPztFaRtAiBmc66ZVticzta9o2FMYGG4HvbrtPcfasRJsmqqeSDjXGZSUtS2d9kCd2",
  "key19": "5R9y1vAaMDTsFp9ePdQ4A9YFbMap3dy3mBgvKh93vvoYkBUfHhTwJdR8CAbNxTaXo84cmsFfj2ixC8RHLurcZMfX",
  "key20": "56UwPoKCkEd46KvHYiE8LXsGViZ7s4sU3m3Ft4egYkpoc8NQfX8annrba9kyWFcmzDU999AhJ1DZgs1UtZi2K3YF",
  "key21": "5ymAzbqEdzAdD1e1xF42h9Ku7jRrdEkpfVt1d3EmX87LgZfet3WUVTUymHA58q8wDUGcayivu5xbxBRku8p9fHVJ",
  "key22": "4o9hrAPQFv4WvcPFGp3E9VhA62x6NWiDhf7HEGMFUPrPnphGpQzXxz5bBuiUFz8tDzgcAE26TK7K7gAK8cnR6F5o",
  "key23": "3m7SzyJjqxiWG8Cx9VLdfeNTGPUtMcEBdNzmGNBmDhrkVqFWcGHN9a9gou4VMtemeViiLr8PpwaXtYuYHfhpSS5S",
  "key24": "2wpkSG7sLL4RRVpJezz9SUGMx3LsmSUZguZhP4aqx33yKK3NmQDEguz7oYyMhqYxYRi2aysroa9yznyB6JwvUdpH",
  "key25": "33Vd2p7d2PgeT8nUtuDYZwWv8gnNBPxkNUCG52MHRiKBcGB5QwAYAeTavdAA4m4wp2UqvvypTwkMpAmVTGpNZNYg",
  "key26": "5rY6sYRh1MugP3UkBk4Ew3AhZbpzTXaDJwfuw33GXMB23BpbSxoVk4Quxc3CiYR5vUrbiyQGKUPPUrNZ8HZhNmfv",
  "key27": "2uVUBW7F71qjTCG8Ywbjr5t9j43A8w8nrN8fWWVAXV5ycZgd8e5zJyUwjGecyh2xL11yBpFHDMmUQpz84DPnT5Yr",
  "key28": "2SSd3bEQqkLVnNTgcE1KS4itNT1gkb3wohdxPbshdg6sk8cNUhZWAVzuR7HKgPFsfhiwKKbXjiFRTWMd74RhUtS5",
  "key29": "3bdCssqSRNWF9swcEAqZP7ZNJxsPserrNDW5zxfL3iJc6CCt5MTYYLmWbhRYGmFSig6G9g3p3C7NMLhigH7TUsG5",
  "key30": "Up5wMtJjR3TvDU35VdUvfKPjep7k87Gkcu7rWWnL2WRfaDJ8kHnHYipALvT4FgmFVB6e8yX437eczEYeZorELQ5",
  "key31": "26TKZgjWedbtswrTc8WFMkRFZcFAg41odAepEpHJqxFsmaWPqHoduoLYnLmcumvmQZ2JhiDh6kiUrjR2eb55J4Go",
  "key32": "3mk5KScEf9sqjRraACybqfQAqgzVn1c4NahkrbNQrEfaPfk13cSLJL9nMJP99NQkVd4bkmufUJoXNc1n9VLcabQq",
  "key33": "33XMy5L5yc2Ko5qbVUmnpmjqK8dRFBhGhVNvzfHoXva7N2eA1h5dSnLceU1SNZ1oBL7FEmhSdhow4HeVswmPv6dx",
  "key34": "22Z23kWvwPyTr68wH4538qJEfBJGbxbskiqCA9FpAYr4qFP2Lt54y9U115KJhaXM6qz42jNH3XRyjYNh92bHStgj",
  "key35": "23v3GebJJbfnw3CFJw7vqT7FZEN7JzwrUrke6hAD16uhQQqKTLZFS5dUJmr25zJz5LPaFMN8i5defaDtpyDVpFzj",
  "key36": "5dY3VFaxrPyZ5jJZPkuGGH9nqbiwdW9ujQssXXi6JuLiRgE8K8aYx4bVdEpKLGkZaAgB1XhmpFeTis2zddKR2STu",
  "key37": "2qvkziup1wGs92mdt2c3adx92NAgL2Ujmi1Tf6dwkWmL7UFWVNYqoFSTQ3AzvJEF5G4EC18hPbjAYJ56isESoXwQ",
  "key38": "4Rvd26kuSmSEHcYKwRhZFe97tf8fUZ9Z4Kg99y6EBZ3Q2dVeEtFQgPpTnCP9TZQAkeTEy3Z6e4eR1EWuELcWSx4V",
  "key39": "4Z8v7H2f71BrpPygiC5fryq443Vcgh7A94S9ksmWgXXTJK3WenncBb9a2ARUY7VnbhGNtnZ72p3whf5NajiZkXRB",
  "key40": "3MERgzWP2VMfbug8yK11qrTAjHMPbetxNsS7K95RYXGrN5G2UJfQ7t1xi8YVFk8UxNCaGVDVaFGBUDrR4XZ7bxDa",
  "key41": "2ey9hfgTJ4ep28zbSwQDvYQ3JMWiGvpiFWEmrGdZTkyKTum9r75S6MoHcw7ybvbDJsqgUvojV6z86irNm5SM9F9N"
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
