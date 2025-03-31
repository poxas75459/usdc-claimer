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
    "5FnqgMDbQ1ykjd4GbERAgL7kezEyAwwd8v8iw6TH822LGpgkQqFXPMBZzM7wuagojBdRLPnb9norJkyGr5oJQVni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oF2emtuhbBqNkCbTdsRAouhW7Pw7JpaHWtASNfM4nkUYRSdR1yk9n6ZR5jSWMtEP9XqhptZ8dSwtvAqcoXAcMz",
  "key1": "3mG2F9iMHfDD3VAxfFfgvuYiZJacdFLVMyNrB78rdFoqXrgbJhKH7X2d81qHCqFVkfDZzhngyQjfp85HSaR9DKrm",
  "key2": "2fiEpMzr1uCQhcxvxYU7fSRW3mnwb4ECxFdjxmLuLaTqB6fZGv3erpCZX1Yb1ozBAsspABYkM24gwj5jhz9ztyB6",
  "key3": "23zHRJVZ2Hgh794euEqafreMkd3tvkY17yV2rovwMXiJZVoGqtk3JzGa6zYWiyAMAJ9G41PMQokiZVYZeWEHwJyp",
  "key4": "4Sjzbd7LcJJwffayWv3dKe6AtG3EwWV9YcaSt8KKaRWdUBgQSBfzds3dGqg6CvVGQoSQJCdDJfQvh8Fvkdy2wwgG",
  "key5": "UKRaA8xwYhcq25m4DyMBBvx6NZaH8qYrKooRcaq4QdqwxhrcRJ21mrHWCbpXpa3T3eqPP4rubGgb9LTCf8RT6bi",
  "key6": "ovonGbbr3h11sUQjPqLddW2taVBXnM5Z6DYxpFAuhiEQeLrz2U5gHrtqz2eCnEyT2quCMe8CTdeonRu9drYobhX",
  "key7": "4LPyiNcHutjCnN2xgoZ7ZVJfzZpxAQDEyeMWrY5yWDmYFWP9W8hZJSakruRBBnicDyZ1x1aoYynHnAkfPYEyzbVs",
  "key8": "mpbMtnsroFK8TzmsSQsXtEXdeqQ6CvFD83w58Qt76Ed7GbLvFEw8FVVP9rmTwLJZf1mEgzkEmFu6Xx4mgt1WLKf",
  "key9": "5zcGje2EGctMfW4f42nhJM1ikFUdGUv42ABmgDCZUV6XxvcmZgqRRmXPdUWBhqqXLLywHXQ8ZBQiD2ZKbTtWdh7k",
  "key10": "24R9ArBbXjYUDvVp3omKn6CxRPWNWG4gRZZ4p9YAJEe8SPFURmfcGZ4DH3o1zSE6AX8PVdf5pbYp4oRcCzYKQexY",
  "key11": "2Vnf5ZDhp5a7sduUudG6MFGJux36URACsXAhdqJKTfdtL2y2nQjNDQQshTmzxMiPLEvmeu9TsnttvySpbSZZa4cY",
  "key12": "4tFKyRi362RGxwZ3BGxZc9d4TqMFqvdiuzj5ysmU81Gj4L2YS9jr8fEFsFS3uT2U1oHGE97pkVQs9VQAT63HwT5v",
  "key13": "5obkvs3GRVCWiL7xz8rhfPnz4ixsPB5imL9ahiwKZofhBxvNoeK84ozMAjR7zSRp8YGUagagoYvyuF1YuDgajHFn",
  "key14": "21ZrRsTqraSB7J4rvdwKJkdKepCNqjdGegUNDyc8hp6M6pVYc633Qcuy4tDP5uVbqDZZHd27it4FLTUr64b1WzGj",
  "key15": "qGCuvcapTRKfn5NvoDwiqUtVxEjWtFLMuvsWjukCJEpzZKWg6SKjWz4ij3z6M3iTe5tjEGSvPJx478bfRWQN69P",
  "key16": "8y24XkeGSEk4jtW7BNKK9nKiTnTHyXUbKNzYPUGcoDnMJB8TLxxWmcyU2wdX2SpTcooEu4fWJJiAsJiNnL7p4Mm",
  "key17": "5DrSk9rjKF1DNdD8JbVp3hshh2E3MFKReFEZ1phJ5gi3Ck2Hy5zcFxAA7jgsKHevjumtJ8MMBw3J5vV7xBh6cnbq",
  "key18": "4cpapzDY4eUyScKqCnMGPXS6RfugBUU28a3grSvfkx2RRJ4es6wT3radR91X2eeYWFuqDSq5aomJTmH9HCvrDdUe",
  "key19": "5vzbLbgUtV5REcn9KzvSyoXMdEPnfJRHducxHu3rpjfzagmhBRZBBimuEbrrJXiPzoGQxSnHqAyaPwdgtGrYBZo5",
  "key20": "YmmksTA5ZPc9NHohLBG3HSSMqEqDXSbkN3eXXAKqzjDvGnB15ZAZrZtiqenu5RrQVtb4ia1PMzWhTbDuyjSkMMm",
  "key21": "4dMe34puHzXPXYKp4Z8rxw9oCEXjN3jxi9eoKCe7hhneitCANSxARP8vqS56UrsrPPmSmxbJ3AcJ79vXxrLjg6ai",
  "key22": "56CNcjaajtxuPDAvh8mvZvym8sk1MTnucrCkDpsVsHSuxhpSnEuqphX5tZ2GdeDtgeeTEsiiEkKyDKWN7Uaz8mVD",
  "key23": "2Zkvmr9qFXGyyXZzJcNV4stXfUeKhnyaSZnhh7Ei49Zva8wqkJbkZJ9cQjrWYP6cYXx7mDzmYPMWGJUeADNXkbMB",
  "key24": "48WGA8631Y9TNip9dPYfhhC7RWcWLD9NXBFkeYJPqdhR3qdW4EVHKRqJhj4D42iVoqhiQNdtoaSQzSjKWMVKrpcF",
  "key25": "3sh1UxsCKdRGbomt2mehHGYreRJVLoJo5kuZ2edcsfRpV5psTMQR9DZ8tLJPrCEi6NDibgjSfx9Jen6LHnoTpRsX",
  "key26": "ho2gqtLv1r1SzkBgVPBqw8km8kmUh9pYfyomF6BYZ8d1o72Gk1onuQwHkmS99etBZ6huKTybLwqev26nY315wkZ",
  "key27": "iwP51rE2kpsAS4UgJAu9r8z6zK1BoH8NrzhTNUBvvir6sy3NNfsXTTCTMT57Vw3QHyBJa2zg8arSSsq1pbHsPLq",
  "key28": "5TCLwQz2CLreHCNQNnq3Xep5uC6i27z93dTZajZP8HqXoucuDmzebd9KXWvyonEdPYLNL1cDqCyonP2Mcyoww7xW",
  "key29": "35mRJPsb28N4YJTYrb5NA97maCowryCG6vfHaG3dkM3TCHM7GpQQn4r4bJ7ZFW6YMG2z4sG19Lt6jkeguvvcW9kY",
  "key30": "22jPtiaiRocEKvLMQjhsYWVctBX66u7185sUS6M8qsWZtAYgTMd7q3G35WuET8hAFhyzbqpQQwkgLRxDDsaVnYUv",
  "key31": "64AQoQy9uCjWDTgUCktwngCXKAcvqMtZNDrSEFUGz2AEDzHQGCwNTokHyWLR78uzHLhZBYYcYRHEUiaPEczh9cZD",
  "key32": "5Uk9H4VDNJ9PT7VDHgXVJnXhyTzs51qLvJpRyfArtqaznyo7U9fLEWqPUmVsEgva9YJNs6R74NWTv6P3r6ukTxN",
  "key33": "ZJNoYDU43pUm7S5EuuZj543WvnWAaZYaSjWdMAM6dcZfBNGHXmyqoKTd7dZMWo52KYKLbd3Kh7QGFXSBzSVPQ3v",
  "key34": "4KcqQXeU9FFBkxrPzBQrXMYygk6LrctAXaFiX6SCuPiSYWKaAFYBHRdtmqZ6LjGJ2Upm7mLuPtcwfCKk9codouaK",
  "key35": "3tycrYBB5BpLcX9iwrrc9Juy5FHD5qN3AiF8zF2ANzs7V2cQ5oBqWTR9qatqbgQUpzjuy2kpQR8VjWHkhsp9XfsT"
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
