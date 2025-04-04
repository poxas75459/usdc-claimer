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
    "55KQbR6hNGZJCP7QPGT1FG6avdC1DDWDGaG4vCUKEniXXWsP8YQJN8SjG4AYu6KC3pdd3SYBzZyVfdWbEJt7fPzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59fdTzymrmCMNnvYRwvSYFHrVq4hXGgmnpyKN3Wzqsm3khJCH7K3picgs4wyQcgXTi36b6XFRks3xHoq5kQToS4F",
  "key1": "GSkVYpkjAvHtmXoYP53rnXn6BVpugEVPednvYC2XzLcDX7fhqDro5fzkRYezFWmPmRa2Z3DPHF2a7H39zPuj67D",
  "key2": "4s2DoUVoV5uWLaEjZLhCK9kUwC5Lqf6Fwv524J4GNG4HBygDtd1wGjq1PbU4xCqhpNmbo5MjX7C7x5E7snBhBmok",
  "key3": "2bmVfQkXnd2pgwH5vTBUUtJUHR6ZGC9LZHDuTYoKWke6dKaE7tF2hB46UAyqP4CpoEnG5yiyu9p3NM8MZqyHfLVd",
  "key4": "3zfWFq5J9JYstQWmkyqTxXpi8zxSBUKYzh9nPhGur5ZtiBUpPGH4PfgYy3kgn9SRwnUVruyUmzC17b8JAPwL3nfN",
  "key5": "XSwdY8RQK2pX6wgMpyXAEzobCKu8SPK7e7oD9fhW9kH8yuEgwY8rP17DM2tMoa2zALqjFkYbwrLZo124GKR7ck9",
  "key6": "3mT7XyY88YEbovEtF5uJYAnB8WNuxfrFuJpcUj3VWKn9g3ngSiLwZhXC74mNLkunJShwdstKHHXzUGcNW6A6HycR",
  "key7": "1ti5FMHDeMbiMEaVtpgFHZDR3AJh86ufmo5s5QEAuS6cXL9AVGzCZhthfGLWCGNnQTQ5TQmKMwvGuGiT1GX21zk",
  "key8": "puY47U45V32jtnXfRwuCF72zZymQUE5X72wmoDT5XKfCUmuupb53L7QT3JfVtz3qkTxFrQAmuD7Hko6WngL57pc",
  "key9": "2evfiUsvdJ3JrHXTrsDFKJGBGbymFLGyUo2wqJWCHChh3xYTRMUPFP9JXPJogLpK5gjD2fJnPSXmWCR9D71bm8BZ",
  "key10": "DLMPg3tgseL2tUqqWKLCSYxX2jvifr8b7GM6PzQCtBUjTpzZuXpb7ms4hbbrbXcAaK69qB6Mk2XCucG3TTqq1ym",
  "key11": "2KdbiTS1A8DA1FiEsqmEJy4opYU4qRpMhHjJwWheHRojyqhB6FV3hqnVg9vFYu567sNJ4bspKMyi83FYspJ53D8Y",
  "key12": "4kNbyDPBgLt8swzZcFtaWqwwCQ59dMVcZEK34cFSJukDGqkejVtGg7bj45pbQE9QupLxfeXvmfxDfaUPTBqMmpL5",
  "key13": "64CZAGBcskpZCswM6Hf6mKuZWf1NMkA5aa8HS15kKKi1bog8gay31rvajaCXtiXFgTYPHSkPXPyfXvP47EjBg26e",
  "key14": "3PYZ4cvZrt3yAqmNTSdJVvPgirXg9W3FJCkH86nUiFzQkiYRSYaAt2af8USvBKyaw71mgmcPgK9nvq8HJbq6n5LS",
  "key15": "8yRA9AvCvVTQ1cVNb3ZHiehbZ5YjfPVzkBY8cCzvv3FgSqukotwcyWDFkQba9tSy63bTtoPSTDKEHcqmPrJUjBd",
  "key16": "3f21fgr7fLjmRyCrQJ9EmwhKQSEEAy8vzhTsfb7wE1GaT7hL9NeShanQoUViB1X3Eqf86HtuUnykFLnB4eeHnCVP",
  "key17": "4fhm1meuPq5nTG2Vn3bWCjGGsEVT6wBMKQ5SUhxPkEoFf48EesfuMMWcRte75fvZLyrSU6MWxc2oaWyypFQy2iwh",
  "key18": "2r1DnRwGqv18fjphwN1QK3M2gpLjPJxu8FxT5KSGXeQ8Pzxsdb2QpNVpR9mCznAL7nBMLLymy5viTadPpzp7cotE",
  "key19": "23tFgLGa8J9YvTj7Xh1hxQALtHUFaN9KRa28Bzms7C5zdxzgxLJm8b2DxqfwTGRBQzWWsVVgUr8vTeKKZvsMczgj",
  "key20": "4wavVisBDZrH48W4B2iCwqhmjHoYhSXNmgrNDDDTAd8Zh5qxCzv1nevwoG8Sy7hQSuTsUjqnUivLBEzSQguuVn8i",
  "key21": "5yg85jaxyxPr2SQ1UDUmcs7cGosRveZkaqWWQ4qEnAuFqE2ELL9o2a2eJM7PaF6EvodTnU9UfePmTh1z7SCQEciN",
  "key22": "67QPWgNApjxT1TxofxmFnM7TcXtQGfUWaKXyJTtkVW1DFyiLcyUGabbNtLEH34j2vtMLd5m8qXgWxzAQQ3JqGz5G",
  "key23": "2iVx3XdNURVksZQseYiZxEyhh4ornziTCYx42TdD8KpYuQb2WnpnRELKRheSv8NjoUSwhAPzGcCFXksJVVF7e9Fx",
  "key24": "4xXqJotSi7LHZtHY1szKmQKQP3E5XURzsJyBkZapk6yoBTXyFcXRSkEdTeoNKu33eqasYrw8RRshUbmSqQqQisUU",
  "key25": "mRBkaXnKmQvHAYZGmUS7nRNXAKShiD4ADtEpHXBaTpFthVr8K6fd7ZAM5bNbjte7whkYTYfkRkThjqxKhE3Mg6B",
  "key26": "3Q755boa44Ei665ryg3oVXY4F64AQmfRQ8qyFWbcoC9Gmb1ChKdAKzi53osH6jBqeoJApvrg4DfybCziAVUN1nJ7",
  "key27": "3ssCvzepw8rbTAnTNS2bJqYLriyQz8c1MC15XnhAhRkyKYeyApp1vnbX2YEdrUxttWt3Mb6ipNGf6RiQriDDdU1C",
  "key28": "2dPD1sDv8WCdTNCstcDXcnr6W2kbqZqcx4WUvA1SCshJKYzAEBCizuaYPSPoLDsCs3jXCLtzVegXP4uu37xqM1Y4",
  "key29": "a1DBAMcVHUix3teCn82fMxdRrEVDmbzdiSrYpqJDHeH4ZeKH6Ukm5t2e3ayTkmyj2y9B38d7vnfwwaXDz682U9J",
  "key30": "3rxH87kvfidstJgpyGM9qM8kEeZ8dM6EbiAFP8w7seXPynkik4dvF9g9YjHCnsYpSeKVRXpEg6cL2ZusFjuUy2vD",
  "key31": "2fQpywmqo3HTWz1Dd9LAm5qAjHe2Jqouj31afVUoLfF8VDdHnxqDr1TXf66bBF9X1KbJVP15inDtNhuRrwbnSutQ",
  "key32": "4B2ZMiuTg8xRSQVnw8Yes8bfWdxjsxMVqeq7CVZcNUm3WkfJ7HJ98DE8J7Ai9o4khihLtCcDSUhMjQfDvr14jNcW",
  "key33": "4vAbzxGXepKusaTqdL9XwaEfhtN6VSQ6FL3RgNhnHR4Zs5gxdbRRncaDdp83RFLKApRRqxkJoPuZ4N5HZNRq8QuD",
  "key34": "Ymeduz2v1LRWhGUauKLzUpDZZMFZLpfUK7JBTMGsMPpZE81ZqAUuhkSF9BfNzZyTwGusxR2E6NvbrJZxp9dREBm",
  "key35": "yFo1Z2vniTXVWS1J9vYteoSwW7DUaFjGAPqKrcYo4Nd1t87kGpmC1MFsdAnSqVBKFuEE1pDuHUovnTKKhwcbUV8",
  "key36": "5iQWCYEvkdSnbLcJ6Ax8deqBJLLyS8pFqdjZuc2zyCj2vHgMokAMfPTsXwhoCpQso1mpXW3JCkNvyXyoQ4ckY5Bb",
  "key37": "41g43penS46gw1yrLAC5zQx35dKKSSXVk7aHMqLon3jdRySsLjHtCGZC3EspQSquG2vjyZsR1xF8SWNRDgSLcudC",
  "key38": "4BNbr7aWmhuBpTkBSy5LtHLeYL3PQEFyQxxdmBAUwcJ4q2LTnvSFYwcaQb1QDco5B6MxA95b9Hv3Jx1uPFCdDFGp",
  "key39": "M6zV7fBMaSUNCStDhtq8ULgfxdRtktvpcKoNK8FFuWUMZ8tQ1SBY16H7Fx8fMqGpmyBsptsQSTZ4Yau2bXYZbCW",
  "key40": "4SqAuCGHwAkCQeB2eRFrcY2fiHZjRptEsx4yFpLNuhjh7d2gm7sZnn8CVktFZmwa6Lt93ZbgRJTxx6gcon8ho76W",
  "key41": "4dQfhgjQiZaws9yVdeiQgPGX67vAFRkkb653xcKfyfHUELuGWtdcXvyiVCvBNEBjhnNnN7b6TZYTEfdoseWCYDSj",
  "key42": "2xvVdprHm3tm8JCCjuMZF8Ys5Qkj9yCnLACb4GJtjwL7SnTZ97KBMm3aobNeRBtzutNcQyvFWF24GhhsYRFP7thW",
  "key43": "2EUh8rSEVga5Uy2Y9eSNMZQtAd92HF9b3NjJ5xtuESQfwzXU7gdFztBrUvD3NgfxwRPvW8vz6zGaoZfPeMYsAgL7",
  "key44": "33aoRLwY4eDyEnrWsgTJrLx3x46Ba2VeH75U5tbee5H8XFiWqCg1PBDBGnnWhSwGxgMVNNNKXJeViHxb5xHHRtB",
  "key45": "121THNfqD5vfRpecFeSruUVfTcB6Ke7LNWsoxMe1dz6btGmZji5GRQZwSsyuLf82KgpLDvY77z5qE6hgPGaxp4SZ",
  "key46": "3Z8VmUKnD5cVnpnyDZ3SMY8UXaQB923HBNzHPgfnvGk4wcehKm8bvYAp6yavD3goKfDz9GJXuyNKinjx9U3H7jf4",
  "key47": "4jek6jWoWjUUNecZbGrYXN1C4HF2La9AkbUkSk9CDzXrwgR6dafLW4ZcBfTKXcYXPL2QpDJMMccuUKUgBFpFqyDp"
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
