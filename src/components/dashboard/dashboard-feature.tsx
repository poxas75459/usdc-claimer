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
    "28cMX2ZUn5AXmLE434Rao73JGJJhoE8JHtgXM4MPznY2Bf4FCjXoKqMHNzU6f1erRGyR7WHr4zaTAhvXq4EuaVUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i7koVjzXeNrcSJaSthMCY2s6fD11XzjkyKnigGVmD2fa7EA3qmRfkuArWgoFuPvE7h1XbqzbS5vntUHNCjmMNkB",
  "key1": "5h5bvvahGF9nZi5haHrCBFJoRwqN8cppgjcMHm5vCReaA7kkCVP4rr1PdvhqM3xRizmj51vwZTgHG4Ba5ynHKLXo",
  "key2": "377E87gPDHJUqN7CWEF1qhNASWrm82QkBJRk1mqew4FvbpHhCpMnPsjaSjRdfoi1ZXp4VxXsPQqpWSeRTPq6Xbv5",
  "key3": "5Yaf9A1pxoM9g8mTennsZicTVZ9ZNbsscXddc2Kj6YaPnUx8whKSkYtgXWnZUs4vn3zn3xiUp2BQs9LNB4vtD3ub",
  "key4": "8uqjmJXp3QXBQCFGKU2hf3CPYfGBbSG8MnqTkaakc45ytr1RqyVeZbbTKc75XxbP1TajjU12JxFFXviKSne6ZFm",
  "key5": "2waS1Hja1fTF2SUAsjBqYKquEsMqdBXBRhgqUk6ry1ph4YDvNGDYoN4oJWTjy1JWcx85rpYVbeLpxyWXGTKuHksi",
  "key6": "wS4hGVMgdqtGLZtDpn8hZj4XiDyoSogJBGedh7BfreceDayK4eae7ApVcuygWatozqVhgX4mZAmVbgrg66UhQ4d",
  "key7": "3icNRbNnu6xZJvyHN7EypbfpsFD5nuyz6MyAtdcYstA35JMLaS5AU7DwMReaUCJEJqMFFa2suoEBFfD7weZZWr5t",
  "key8": "2R2WD1hiuXhGhYoxdaoVVENZ9CF416Kq2tdZo9hvsQVgnr7HALBXo4su9RJd2msod8EnXjBfNCy6yWRXkihfi15m",
  "key9": "3ufDB5ZZM6SLyzxVRiqnX1GByb5TZbkkB9oneU7LH1u8ZLFf3Pussgof94nszSw1498gYtvk73wdZkBm4Ngk8Chd",
  "key10": "2CcBv1LiYuKWKgJKyR56z85DFzWFvwBZ1DEfhAmKjQTwSwLduskk7ysXRZZis6iUg8vrtKyWME8LAV6AFkyvH5x",
  "key11": "2jbpxsht7JXtpA5EpCmoXAR91eWTK2vLj4qNXGpspbKXC8437uezMvCrTkdMThRfpK3zSMe7ACityEy63oeeeAE8",
  "key12": "3pfPV4qgj5fCwMe6LMw9ysSGbxYetrfUXDKieCGMnWt1cW6rRoGVz2zHtCUTL2CvjEn5oMynGA1bQ8tU6tYSg3ii",
  "key13": "37SirRXuT2YdoMGqNYkVMpwZvXUvsHgnPqRF5B1u4KusgarxVVN3qnNDDSjwWe96oSfjskHPnB23SVRmiUkoUeKn",
  "key14": "49sn5QXdnAfyxYiZYHky8cYvhDhRfur3DJsm339NLpp5ns22YQwLnAp799EJRmc6HUzdmAWr1eiMM9sFByAUya5Q",
  "key15": "VR3uuChs7YYfzTdNrhPwQ65zzUyoD7XVnSEwtzzHHjZ96CLBPxJrokkM8VToV1hcndnvc827VWfpgBFnXWUYQdX",
  "key16": "2BRcKRD3oB3oZ9pwu7wiMgguYJ7obtDgFp9RnV4d23txZoLH5dgB9bMGcEeBi4s7cF6N8dQa7ShfbNcNrps253ZE",
  "key17": "5CadQzeiX5P2dyw31Rxgqr4NrA7YFXCpyCVcYQijo1zXGjhv33kHxtA319hFzj6rq75RFANfeQVHsgrB4yThD82s",
  "key18": "dAY7pWQGJktYh44NAR3bGBc1RCB57yVaz61ifdbtzL3wYeg1kD81uLe7z9zaFfVTJVSGTySKqVjWucxafQd5fk5",
  "key19": "5szAd7w6j3nE21i7n8k8HCobwYPYh9F4Q3LJK7rqWzT9WSedjuXh3iDJYKrF8f2pVVBXJwNt9YNHFSRvE6iyGKpY",
  "key20": "3iZN9kXddUdGGf6s9dA3LFWXeuzQ2jW6omnN5HfZRyG7RThNZTjuM6o9ZhfyEKmKvvwpaT3vAAcq8ZRJLgsY7obv",
  "key21": "Ty6Z8PQ53cerXH65hfkiYAvcVp8C48J7odWawtbBjbbQWqJZoBp8ib7eeUe7DrvGDKuH9Y1UMTntTxR8CWARYrb",
  "key22": "kH2Jaawrct1P7mFBGWjzNcDTmToYsr8cvfRfMTj9oKS1si2JxxwhtdCv8aph67YCPqj9ZZMb9db5ArQS245Qffa",
  "key23": "zQ2cT5FTuSMhsQJGWmehAmb3UB4TgvuSGtqpPWvJjikt1zDgMTXiGG8TqApFuy66Jc1tQMKt6tyfSFa1sY9oE5a",
  "key24": "oU9RBKxNhSWNBM1F9RRxwYwAfef3Tg2z8WWjEPLHMb6mTo3mfeeTgwdHA9bmZK8ruzaWisPCuWYJWWyiFR1x4ky",
  "key25": "324oMhdLfpGxQW1kRiow8TB9RtjWrZVCSNGqD91scfwLxfMh4ewSmJFVnTYNJ4VqLT4ZsL8wpAoAwVmGprnSCvX2",
  "key26": "2Yhfoc6X1w4eYxPWrfWAvyiJWDY1TuVQrbHHMWUjpM4WgRnThT1PEdzWABaSPDU8Drz6P4YzazdiwaW9Shvy8r8N",
  "key27": "VzPGYyLpKtyNdJEzviPPdozprfWZPq6ZNGphLvYJigVon3BcXsiuMVqpangFoncVf3JfXPBjYdC4wUjVR6Kmwwq",
  "key28": "3VoMLBmQurm9gJTtu6kaUzbJvGQuNxsa1hSnSTnMHsJ1FHw5NJ25MaVc9qKd9m7LEpwGHutgAArfnPVEwct9wJAq",
  "key29": "b2ogSHBQV4bdzxJBe8XYhzrMuTLximDpm4dTTKEh1uXjeyu1he66oZKjCStQWeJQmDfustuo4aqGdbCGSuAS4AQ",
  "key30": "PTxBiQ6d2WQUikGqaPS3aavjPJ1Ci174TcJfp3nXWWQxrQmhaFYi7yd6vCX11aBtbvwBHWtd1voR7h5yAmHTvKe",
  "key31": "51snz7Uqm6SQyD64bA7Cp8KXhRfcHkSf3vxDWY8NF89GHomkVJcU24Zfj6Yc6gT7CTu3pTzd7AxY26wv2zFiCFL2",
  "key32": "XcM4MaiJV5ee5pvA8YrSNVHibiw4Y73V8BaQEKU4S993YNTMoKjV2gmTdMV4YjubGuhhqwXifkhKTeHGJ1yaath",
  "key33": "RpA7XtmYkG5gUw56k5LXzL99smt6RkjkC7G7S4MXN8LwYs22L9XRpqg41Y4YVNpmAJp3jBBvsHTWCLoXuv7CyH2"
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
