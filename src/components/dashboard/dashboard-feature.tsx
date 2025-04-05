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
    "ZycE3UQ8qT6YgdujfsNimrys7p8J7De1cyQnjJE7Uk7yHhDU5oor2mU2U9gRMDGemPvLGaRFWfidf1NvcAuaWFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38wLsr7WiYrN19GBPfTwRtZYif9V5TCFrpb8XzkZY9qaK1sMmH2EqhJGpg1bfnbgbaWPA8E2C9rr6ieVfbh6N2Gs",
  "key1": "4bmVxHr8nRmqGXqdxYLQLZ99rMP6p4wNKdA5oyk5hULyzbXX3yr8C3jg4L6asHVq1PoQnpMntW5tVSrGsV1gPnu5",
  "key2": "5mX38L3tSSwWJRbWEbJt9sYLEnKj3NVwPFvGfSMNR2DkQHXViz7yVkZx6e4phF4sSVL2vNfo4Vqy9n2Svea5WHe",
  "key3": "5PTg8SsiYkju2ofUBcgMEdzv3G9zuYxDgApDzJBGcghVWUZ7SovQDKBaqXdWs64k158wiYp2v3GUxkZktQ6m4vtG",
  "key4": "5MiQkX6vrpHb3fLVGSyAoh9bJCuRHACiNjLCfN93UaPWhBE88AJm2sJAEtoHMhMkbgJVq8HBhAzJEgxBFVwApy18",
  "key5": "64h7P6NELWTHef4JeizeMmjUKw7DkyhRxxRxntABT2tgRUpvKcKWMF781Hff8yj765LYiRrfbZh6n9QqigZnWNdm",
  "key6": "4tEjR9DupMu59Q446HaH8ZrA33XGyDzMw4Ka7rLBCZ7hTTy78X7Jzio4F74CVFuiJnRoarZ8RsUWeLAULZx9sdhY",
  "key7": "3NGHKptD4KveZGh2vhK8ZA5V8W9KCPXnzRgybZxJWvZ9ByDUosqFcE7Qy4xKthr6uoq71ud3LNum9b4fwpi2tf5Y",
  "key8": "3HFFNQ5iyv2aZaYQmdE7KeJcxxpWh8Bq8q2qjdGyUn8tfTnZDXBRvTbGr7coNrF5na1BJ3D2MsszcyBLUzEhfXji",
  "key9": "5843tnwJqUZLppy971kiySJvwYQmDegrmMyP8ASVya7mJXxD7Nwvep7CmdkhZ4E7EkM7yGzZUn1bjiBkZDYAv44P",
  "key10": "UuaUgBTewzmNsoCRtwoLnEw7TbkfhjpwuB4CscubcsRyVuvivSjsAph7rXz4dkyXkRRkE8i57XEtutYWTATBt6d",
  "key11": "43yFUmqKNMs3tWErT6v9qdyBKFmkiuUfu3EBaq8EDn5bSPe8wqT9Gi8dCBa9XrVJatAmgtENtxZmsvxuAM8ouQzF",
  "key12": "28TVfREQFqT4MaZNGiZfLnyVYLJVwweFgwU3WPG6prS7mgQ3KZNK9PuY78Zzneq51bR2EDFsB92aqPfq3C3sfME8",
  "key13": "3YfQwuxAZzcaBXsdZMKthZ15tosxQndYbjwf2Yt4WyQMm1PwQGYRr5htJP6CxoJKjWPN21aTaiPsx9XdTSVnfnm",
  "key14": "2XkbPXnPYt57RWb4DFn2Tf4NciRmqC8Kbihthr1Z2FcHpVgtkn59F5TyyNuREb9x7tHWsPhfThXAtRmyYLkJACvK",
  "key15": "4CDicYpQbryJmSXhsWZQvibLrCeYBVADxH4F8KgMVDeJsV2AZz38J8FpsPMt6pHJXYBWAuubt5RFDZH8RMszW8bz",
  "key16": "5WFbmKfvmiZguUmRNzNX4DPhY8tZGQJ1SvFeSG1rpyjoZiycWwVUAvcdoGrhiX7Hzr2MnLJD6dX4vUqic9ZmVC9A",
  "key17": "4qdADjXekrcVcGvCbn12g9nczcqYwu3xXCZZwdZ2iY3LaW8MS8TBJrUCkuHU3hvGgG7oZBWV9moCJ9ySxdSjDNer",
  "key18": "E8E5JWpswpiodstLgMCsU9kLsKEXZACAcnLrYS1Rgu28CemWGR4h8CfvJTnANAJaqvezHTkGvpoFbwHpszGbj64",
  "key19": "FWyc5URx9b2xiYLNcEuMf9biLHfGv9TbSocQGBQ1Y6d9Sr1EbFkK61mpsEmm8kL4Z1CbiiK4ePRK3KxvS5sY45j",
  "key20": "47BZDKeVY4rtpsYJa8Pba9fgJvPQPyNdTFgkaiaaV16KfCQn7GLYtRuMJyFhReAaUq7YziTdHSypYjDeL555hjfP",
  "key21": "2mocFS6y5iZqyJwaSZoxVabATsqQ5xXrSVMvtqKLMc91gwHYcDNuX8ez3W57ihWXkVuVm6ELCaDQ2HswvRtQJmy2",
  "key22": "5cmvzBKbpFUeMvK2TrS3atLC8wBGzKMvU1q6NCJFdkQTCbUXYkMEqVWhBY3fXTnS14e5PprpQ1R5pAhhZPu3ez3S",
  "key23": "52whkdpetbXVfDKf2Qv4EHykXzkbTXSWKQYDMfMvjEZ6pzFFGx3oqpCeMF1Rgnedn7x88hQdaRnfp6wDsezeLFWV",
  "key24": "3AuxnM22cEbJpcro4wyrB861iuo7SfRPD4Bh8i1Z1jbngQ2eNKfRF2QEBAMBTFERLqg2YNEzBBqZEXUmNzTzVkg6",
  "key25": "ZyZVNVzSsrHftSVdRQ3EHYJcBrdJbR5p7TdPpoz9BdYPjwEmdgshY2bUvdCCKPt95TdrRcfsra92hoUNqS7HnmU",
  "key26": "MGAqwHSoqd6wKexwGaYoPVj8GASKuTuoQMUcPDbzhBVqU42M98DN5cfvT3tFT39YZah2unzrFa4BcEgY78Hb5fT",
  "key27": "2RFmiSQjjfPBo5YmWSaZ7EkcqWwB3B7WreTRZHRzzqsdyZgpvc2vFosUMEAX9iVtUS6sg4BSk8SAj4MWyawNZKNk",
  "key28": "4kfohnG4G7fjufDokea4jv66SWdXMYqoEvMhXF9hjdqW53Xb2gHHZXWf8amzYZkKkRB5aUkHqK3dXdB83tbQn3gy",
  "key29": "26VgB8ZQ9rwRAK5Z4VCmvEKX87f5WQFyLD9iVSiA2CHqSPQkEDCrdkWTBuYqk6BnsiJJZtgp96Gc7KGRWsGuzJRq",
  "key30": "X2wBdRtTobqSjX1Pj6Lshk6pWLoRcVvDtEg9aH4p1Y8dUfu5tZWSZPMQrjHLaHRg8xxrYvaMo9YWd2jscruubqH",
  "key31": "xbeBWuw8kT2zMRDMzWsQQ2nw5fFMLGxWLUSsagiUFMHNyjF1RqaXduJhDBjKStrMHHJZ3991wXNryDKTLur7TdU",
  "key32": "tbNHv9rP1bVGq1AyriRE6ozS4kZeT92Ysu45PA3j94wDw1FcbpNXkYz5wBcDzU3nssFVhEbPefYsFdtoM6EGD9R",
  "key33": "4yQwmBqSW4m1UFMFeBemRKkctr4WvVk4gXkBE6qWd3251ouZpbKCvXgXEgESvpbjAhvsKTSPpwU3RTCUzCx7KTue",
  "key34": "58WLbn1EQXYP6q9bpxKpAx3fZ6vaERUWM8eqWvSDYtNDu44EZo3bddJMYvzRae9Nq18w959x35cuA58Rxc8VjpnL",
  "key35": "5GFutx1jRA6HMQ2nmzhto5DHquhbC1sCQjqnoqSzFA9XL1oAomYg2JGegqqEdrZhYhRBBs8UpJxCRTSATtb3cWkY",
  "key36": "3QrpevnAxzX7BXavjdcWCw9fy89KM6Wb3uizDrP9tfYQ2CUNvwK8FmsPgfkjBGgSXCESRo7y54LEQoPkRvf6fRhf",
  "key37": "3hiVnnHW6eR1GsMVKWszkkRrys8wx4jnP6nYLqJ56jyQHtnvLAFhQ2gC7DzvhqmdG3dFPJJAhCibipnAkQabU6jQ",
  "key38": "2q4B6jujj4JuUp3AFx5REep3kiUDQLShkDifZ9WeeeCNcSwSymyjdsFLyNWc1Aa7qLP49QeembRpda6PxLLcx2aY",
  "key39": "4TnDGQoVTyxN9P45WUSQeMikGYZFCY8fuB3ZwKZPCoZDzbSAoGN13LSd7S5q6fiBbbt4nDMEwefbCK6qgTMZEV3f",
  "key40": "3Eqcz5PJghavn4Sj6745G1nQ95Tn8awEdpcu2M6s9RLE4VdohH9gubAqvrNm5kqVRa97MY7VD66ugZHUeciDFUZV",
  "key41": "2DNZZjyGpAxguTtu13v9caas7NjY9yMPrNT2VE3CkgCGZKNMwK5kTxScXaLUxJgW5QdSGetXNxXAVp6DkGHwCSrP",
  "key42": "2JBi3oqhM6YSsEyPCHtRtyJShkJ7bxVFm43ps5KPRWzjVSvJwrkiyN7KcaJRiDvu5eVi9s5ezDucNTSqqj9EDJg8",
  "key43": "27Fk5JZqLkvFr3aatqWDAjdNReGpCsjgQbpEvGgb7dhTfRfaNssc7113aQmizzAfbK5k94CM4rSA8ogu8HoFXDCF",
  "key44": "YZQHfHGHGnT7mfbwVnc7cJ3tAQF4JoMCRsmKiAAAtjzehC1fHpqskjrXuwFcg7WdafkbaaGMpXvTL7cNftfV9DY"
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
