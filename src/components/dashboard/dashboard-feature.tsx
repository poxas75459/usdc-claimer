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
    "5NFfeG52QTRCQYehZ3vbYprpVfyYpdJ1e3HwSUqWMq85dukMwv1c8cYyWTWmbDRWvBffELirrxqbYdPNmgkFeQ3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qgzj9h9nfMd2MbgbxNSQky12fEq56nhwacFFhmEpUS2xVAcVjAJrbjZ43iZENMr24Mb5DXBgqc24gpZAi7RaZdd",
  "key1": "sHYz1CmyXFjr3rZ4CRJwNASGhPs5uM8wBSppiYTMp9b7ExCuvEvtRhsrsQLBZ1syqFav7wdUzrk5ksMADcHjzug",
  "key2": "3cq7jA4RMagBqK7ypFgtMRZscdVv8Rge6dcdCfFFjrAU5UzGtTCNLdeBftQ6JzgVXsk7iRJ6dpFPWnfSuN3GsXuV",
  "key3": "3jaXmfWdF9jHKkRLh2SPPrnQrgVVHzUYYEW67K7V11vBCoCqAJzN2XnopjLREoSTTAcKZkDZBDAjWWQrTNQeNT3N",
  "key4": "PB5Hyfu9NR7rC1zKBthPtUJPpFS9vpvX5uT2hT97UNRvudiwDXf6bRfx2i7o1h5YewSccGZGVq4SQ5E8DUQvkUV",
  "key5": "5qfgfVrg5gnBLgGaTTvqV7kjT39TAKwmcd5ghyvjFzUqSaG9JDaPJH94KY7NJrCD6zxF7zFo2vz3KK2YmjZAW6Hr",
  "key6": "5H5dYV8KZgMtAsc5AXKoiwMrgWNZir3BfxhwcawQH9yroo6coJHrH3cEyqTExksxnEndaCyyrQhdXVtNMGBaqv4Z",
  "key7": "hngjH5SAUKCR47KSmc2SXuGvK5mUga78LAoD5zAuESsbyho3qBAqEsh8REcHb73sHuKjZUtd1S4YZJ8owQEemfA",
  "key8": "5yjBrsSK6scWmKvy27DsM3ERyAnAGY9oJYnJCyVtLTRQWYJCpEmYopfT7M3R8acq4w3jzByR4quuGz6Q1ePLxTWr",
  "key9": "4tYZggmRW3CXDSTu3asATCcDXu4YuRmqcTtAeegSUddPnzfRfXZ1Chsyfm5mA9FGbw7bt17mKpffWTeB3WjcfRcQ",
  "key10": "4YJ44KPmPdEoKTfAZ7b1HPKqMezj7XaqioswSbds8QMLx1BTjSyqc3DgGs6fCdTwAAXFzQQzfCpLhhyickpVRUu8",
  "key11": "6tdLP7Lwu6yne5iEo3bD8CvoPSD8b42EXZVXSGKYG5aDaSfvPZvgNqRM6LU6XsM3boECetfeHZnKSyYPJXUZ8Lu",
  "key12": "2wzd551DHmBSMegt9ssNXZZBvZu2CQxQSRQDmQ5RUgbKMjLxJ68Z6q23tBFGF8bdjMvEnHhZv3qdYyYyCHhYySVt",
  "key13": "5AWa3gQsH16VTWd7xncbiPhYop3HVkwLjDTvj6hTmoUhnGqwn5MxwVxJvEwhgzGeuvHHfMK8HfGHuRedGjy4gtf4",
  "key14": "yLnJtdmprMednSSJ5cD1G3koEDmAQ5SN13YBonDXUKneAw9FMfhGUyYYXFpcFgMg2QLpnr6uUKoh3Bpoj6yiwLp",
  "key15": "4D1jZ5PsiFZjjJbRTzVtDqW6NjNnoKvJUBc2CPSSqf6vHuvA2mV5uFysDALYtDyp7m5vMtboxMCWhj8pRUDo5FCR",
  "key16": "mRHmAWbiBAvBJaPfYw9r8PZxJgpPPcgBFLNXoJ79rjxCDQGwLHtGYLPheAa64vn4fwkF5ESxRXijtfT2SUArxDf",
  "key17": "5vR13KFeaCypmZ8znGzMkfWRLjcdJJoBWRGcz1aMvgb3K4yrBvN6iAidPuqhcBWtdWrcuCPLtfaRRtLV5mqjAJix",
  "key18": "3wDUSx4xcn6jCVGcvzQCSExKCHS94X4d6on1A1Z2KS41u2NsauR3nUtprUTpAGYqucexsUVNxdnwm1q4A2HDEmdp",
  "key19": "3APpVFB4jpYcq3MS5DERz1cwArWiAf1z5wNtnjx4zTADj1oVtVjGoVMeH9B6e8QZppmKHN5C4vQPxwX8Em8Y7kmY",
  "key20": "5sVuP2W8hiqZyaPuTs8LV8VECx8niuFZpmSm9CdYcW75n7KoCEmZUi6KpMMuETKrAjC4v8XqeRgsqYJtRA3NZAey",
  "key21": "3X87WvhNyysKwVYiUsB6fJLPcufXdi9v4FeWWV7XzaqHTrtujH3vagpNBML4Ca5tugqD5T1KXNCUcTAt8xyfbdhc",
  "key22": "47NBTZyEu5AzesQeyKWa2mzNmsS9JnSB8jg1BtrtFwUYAZoGByeHAVm2D2rVnoM3YT5VJ5RCCeu6WmaiY2HQzQy3",
  "key23": "4bMuob4jwYvWSVwJszLJAgnUie4FTeshFYeFoBigcVDwmgXhreMMrfrPzq4FVZRVxPcn9MxYsAXcEdE9psUKLMK4",
  "key24": "2o4i45zWbeue5XjHovrsU7H9VWAuH9N6hqzEKuoc3R2hTdL4vRfn15aDwqHaGJHbK6GQQgUAxpbT5iETzpCN69wb",
  "key25": "4yzaoqtqFv21gkDev1XYipooDWawwoHdjWLqvnoaPV54yvPsTRRce3bFWNJcPHxssN2xcUbJUErZVW397bu1bdpM",
  "key26": "2Ro8cM9ms6WC4voKmUMevLzizQPwrs48jUBA4bnvrVakuSF7RWv9TXksEaghdKV1ZQT8PkmezyP3DT22nq7XZib2",
  "key27": "55t3XBabsskQi6hKPdzGt2GSaRq86hwstRxXCLkWnDXXuk5WubrB11S1X1w3dK4ucXwmiFNRqSBwPK8tvksNyUoJ",
  "key28": "3rXNw9KZ5Kg2kzh4Gv2qvkcBHGGPrDMBGtpibWa8NcvCmqMhkmvoxLzYEdeT97q3GjX4cQ7ZCdjrq3FXEAAmcVk6",
  "key29": "4XFqq9C5311xN2JeapBior5kcJHBc6KHMzuHFgn8fsGyJdmMjHMgU2q64M1LxCynB8Xk9gNn2ep5HGQzgrU5b8Y2",
  "key30": "CzUFVgw37nm3uHQChh7w4kSEdsJinLgHmfQWjr9TJBEsGi36cSbkmaAHWHMXPMBxGDZEVSFHDYLU75LLztc8aYu",
  "key31": "5wtJ1z3k1JmawD5KQeh1c8vRQykPYEh335KK3C49a4PjbifYyrFEspepo4NjLvThMzV9RTFBzDXdvVfSgtqAi4qu",
  "key32": "2SNBYgWBpBBtn6A3AN4EZ1D9Gt5fyB5SH1a7WnjuCs26H2dk6JYXDBP6NjX63ff3b5acTLfXyPEjZer4LupHdyRQ",
  "key33": "4kewr9vCzhhPENNfPrB3ZmhQyX1RRW7QjSy9PGQn1RuM3q4dc5BbRtkc8pPU1XHa9A314QSmKj7MYtfSZrK4zvrz",
  "key34": "2z3ake6qQKhh9bkwnTtppjEYRyg2kmv69LuQNuipzYihpFcY5XzN8Ryt7ZBarMWmQa4zbWGZtZ4Zxmx3WfGYJrys",
  "key35": "5dQef5fMgdMZEQQQxgcFeM69Hy6qYQhZiCSr6hPA4UBKbLJv8YFnYWbAv9zfbDYxtsKc7uUHPrxh36cf4UvNp4VN",
  "key36": "467zUariDU9arWMzPM6frvVbLLbUjhAvbWJYaDFWMAHnx1zsUtSsfkNM3M3dWT69BrgxdGnTC5KPaLmHzCvW4C6N",
  "key37": "Grtj3yJR8NVEcvAms8AAdZRp9SMjYNv7UaBP4e2xgEhvZb3cBWoG4JyhXzuigfo419mPzRwyLPnHQDiYxf2jPhi",
  "key38": "2diYkzNe8ton2Zi6m9ey6P4CD9WruGKAcJ1U3H6tvs41thb9eCe4JE4BE49DCLG5psQpvvZsMubrmAPsgvgxJLBB",
  "key39": "54DxuRuQW2yBoUm2j1repxF3CaoW1XR6r7kqb29uoimKgHzopL4nWXks9XKGXKSJ1Mkq2P25x3LjpRbvonWcTKAs",
  "key40": "5avnHJfsPKwEsSvNhWHZznF7nXA5sk6J5Eu6x9EqtVrTgRjPyD6g9WrAsiLADFkWPurb7pcWbiVJX3QM75biYdWf",
  "key41": "2G4Y175S2K69VTCVXQWVD3NhAVSwzdzKpdYtvdSCPmEfWMSYU89kk8cz2rdqEejprzNZKcdfazS7fsaieAuUeSDy",
  "key42": "4hYq7vGS8V7HUTvAfDY7BTRZNNX1yaFQj421r6LXrNBndg9MsfYvfVk8sgF5W8kSgxsKkzw66ieNsEd9DLDPtPCd",
  "key43": "3ikDzrbN9SSrgTkcxrbsqfdc9KanRWhN7XcBaGBFMn2YdbRWzhn9spzhrbJ8zHfyf5xQpdLeuqnyCjLPLEQsNKdh",
  "key44": "24aAEYbWaPdqTvSBwHaU9M9pmJZFoNFJZ1Qc6RTAREjZxXgLvggLBeMyZ6o3RR2EDR7ZbSrwruYHosA6PrLjNxpB",
  "key45": "4CaNNFXidabjdY7EVZBBEPJ731vKBWntmeX16FPxN1qcHiTgxxt9X1GXgfoLJ4kZtZc6K9hAgFhTg46KbpDyxhoQ",
  "key46": "4iSz1xFUFncj8FbmsJ9o3A8kC1k21ykRnZSKcHBcN4VKdFxhi5yqcKhRpwSTkCTjAN7SUCgRc1bbotnKniAPm1X"
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
