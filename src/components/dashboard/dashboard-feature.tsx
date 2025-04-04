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
    "2rxLhs4wkczm5sNKTfW31qqJuKEitGnqN5rihSEdvpNmRt4iTGrfU4dZkzLHzhvWdkTrdb7yj7t1PsSsxpAz3sur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LrZ3oHvKTNjFArV4MnddGSh35v3JEmAjQhcSswoCXn43YjbsnLTLxNezq38gB7k3CfW4e8GaQSB8XWDcWjik8rx",
  "key1": "5ewSvvschhh8tKgZ89cuQJQGLfwUtp6skDwr6o8fQib87wPJWBHKodmBEo7ZTMQWgSMChUDciSBgWyCEfmhpMs9w",
  "key2": "2wuYSBSiWapYrGUskVLAQRSaDV8RUDhm3eAyULoQYNoasqZt3DJpTQf9s84quhnoZviN4irXEfyZTjAJY5usMbNK",
  "key3": "26y7AEwFgRcW5qamaZhNkXuiDReb9PJ1amaaLDzMkbYnbmhUFiqufdyey9WL7ixmjZqqXrEntXYSLeTyXBz7LXBY",
  "key4": "yQ1GreazKEosRv7JUnsoBmcQrnthHNXwpf6RrW2D9HkN1uJXvhPBiLe6SMrEhESv9dV6gAUYkEVAveEeCwzZxRa",
  "key5": "5aXjjaLyDcH1LvoAN16NcpRvjboZWvVrkxB4JB39cbJeVc76sshj6zgZKfhu78jg2tZH5J1hT57Ae9hU8wTJJKwG",
  "key6": "5vN6kquaWag43huCj8a9Y5nC4DJNfC2VdveEQ9PgoGs3D757zz7nqe3SNbnkgB5UmrAWMNfhy6qa4SQVpPxW7SRj",
  "key7": "UV2Zabgm7cWXhy1E2cPZpUV4F6K6jXxcKYXQqeaTWbZMnXXZof2xE6nxT5qP5dLe6KTj5VMyxQAJyg6nKzVs9yX",
  "key8": "66tfJMTjKKS5p8zaTYu3APo3WWHn8D8gN8jZgUxt4FX2W12YGdVx3PfoRatqfw14btVHeTicejAsQJYzFF8SbzQe",
  "key9": "2CUzzoknozDwpesi7mUYAdwYVTk6ncCxCeSTYAcCe2jyLsCFLSgxYgA7fxvXH3keBqUZMDSQY6RoyLyqGQDFrPuU",
  "key10": "5HaWUXD8uv3zJuAZwCdXDjP2K79X6bokugAT6vrDasTWmYo5Fa2Y3EqLgKUuLKTueFXcdh6AufMUKcWQfRseWqMK",
  "key11": "5qHXbe7KWP51br4Zph7spcVWg9TRPqfJZ3nAv8KnP3T57mQvqNfZrgBXoJyAnmwSiCjD1nDpyMvny1wnhvUdW3dP",
  "key12": "hUkTMnSTZfsivKvJYmT7sFpcWVUbvtuUNG9PijBh3d7VN9mDuDHzUuREo88aDCkbPaYzqnCH7kLmzdq8E17iuv2",
  "key13": "45gF88gkbyj6oooC2QKdb51GEsHPMLzkdqDTgoCaqwCQpxQaquFfqjYcoiTqRKsZQsQmq4cPyYNko58YiPms1uD3",
  "key14": "2qNH5UrvfjGKsCK9caVE1pNXwogfaAFeAgg6Cdvpdv9gW47CGaDwGJcSuFdPFjXV3cdp6whFxWyZZFjsNJ83VHem",
  "key15": "268t6xL4A33PQvd2PbzFNvtAPoG9KkraLE5Z2oZoebp36C2NNejyBvjiPMZpU4pKLdJG1dHCctHYaA71tK7vzRzG",
  "key16": "66TmAeBHnRDPHCwidm48ixpeb1CvBHaDZTdeTrF6H2WoaY1y9co7mHQsgBJjKDer4QdGhp7wRJXYc9GuiaYwyrzZ",
  "key17": "5mPkMZnGtJQyQ7Y8tgoD7sGdmV4S4KHKUSWnfGjFvkjNfjGRC55yJQuLZGnn1XTZsTU8BEVYnRWy41dPkFTowh5b",
  "key18": "4vCgkw7zsyTv2NnpQqVQcE5Ggpa7uF4B6ZZnZD4mLs5yrDNY8e7mYvzSkPDoBvSHezSV7ZJm91T2GyR2YejuaXNo",
  "key19": "393ECgpCKrNfMRwENTzc2JnX4eheznWESPrPYNKkkGnZH8fTzuD3vmLfDMeAFTU8Y83JZXjicoF5w1qfbF8HYPoL",
  "key20": "3NPpRhC8ydnoPrfyzew4UjGruHsje3dbYRESYTnbVhuyJm9w8pSr8sUG87BHzaWc4RfgXeW2fhR2JsTcKFS3G2bC",
  "key21": "4zeW3Yj16wmgY8FLuTspoVbmLszDwdaRSZLecmTfSBRmdBDcx8jtMrR6JNUrYRutt1H16NcPpmrGmMu4LRQKRmbG",
  "key22": "32YvTBSQVCXboDRpL6tU5ZYgCSeyL45mXYM4E3Pmc64wEW1ZX49wyMxmTRguTa9vnTVCHyZVtNQZtSM29SzWrKmb",
  "key23": "FQRWHs6pSUz4jAsMwmLeviPUR1LuX8pB5bHmQQkcXt7VxVXYm2WxPNwxYgWUBkDyWUHrX292EcbqAgfQ9APDDcP",
  "key24": "5CRe7MHLE8kqRkhkvpPk4ZZPK4e7EdehEghGf89wcdZ2N3hPckLTyMMSf4SWbAT1CtAX8CsqWwbJPSgfbNBnizQ4",
  "key25": "5PUHcRocrHGxnyesVhKMMKoRfcYuv4rhJUjym1twRXoxwtHtumUKaMo9T9qj91bfxsVLFWyyZzHYJLsYVrg3R21q",
  "key26": "4mjjpdkydFrwHMEcS6EKUEAP5DDHq3L62efzLUFsmNJtApm6APYdQHN7pzzhfw8vxTzeAiHVCHjDiQcwQ1rN4PcU",
  "key27": "VjnFq7ysWqCL8Y5LvsJCVfwczAcTDNsmFGdpSQKDjGQzh9A37V4adrwcxvP1ZUFV73738aKuTkY97o8QU3fcfQR",
  "key28": "SXQUXn9Xcc2vqsJgxoyriWGmoGq1q2nFsuP5sv7wnXnWLif2wKVDSg8mi1SQ3pm3ENek4S4KcujuJAFEYLnYc6Z",
  "key29": "4Eq5F4KPLfwTrGEeCCnzjMaQA6dXsAtCfb9NwRdripqq9xwKnJy3WmQDQybUnFUaQi8estMF475XDtnos4iRap1A",
  "key30": "5uxAXYVKFmTok3WkJgM5LBqz4UJVvKGDhHwaLdpaWR7vXKz72DpcaDgTqx4H2Hf2Jg1kWWDPWj4h5CtZrzNqCuQs",
  "key31": "5Ftkovj5JTobxQy2rw1DeoiHWchX89qCf3niP55nzH7TitGBNXJqFLMy4nEgdrQFA9y8cKy4aB429h85udM4Taah",
  "key32": "ENQBsXg3kpQrgutXPbFcqpWd2BCaX4Qbqs6mAegmD4pP41CgBrvjwLGX9j2xHF699x8KMj3HyGpyWxkk7tbVGj8",
  "key33": "2Kvr22hMsnDn2F8qximq8guAg7mfMv7PuwDV6RdpxQysMyHZYvkgojxBKSzM2fYugJx9ALMDZ5qybjUnc3xRaD3E",
  "key34": "3FWVQibNZ96yJmsgnyGpB2TfuyaDgCzVzmCfdUzeUUGozVGE5VvCd9dZGo5Z9t7q18RxrVPDNWoXnB8yBnCWryP6"
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
