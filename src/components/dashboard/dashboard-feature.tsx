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
    "E7cbt7ckGi2yeSr9k2BzNDj3gVSGoJSHFa3pmwy2dxQrrvsCqvCcsMxG3Qai8xV94EGAXwLt8KDvgVGPmvGtww2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F5ZtSbWCZHD8QshrCTnbRC99CvatshCxjeTGeZQdCMUtLFVMki8Z6WuN1uo2LaQoBYBfjwfVvkpRhKBsVyhMdL2",
  "key1": "4tPzCmDAjJoF7FCcYKDrPv7gsqGnrXTeuEcWYUcqWL3FQMwgftkyx6c4R6ikARbm5NyZLX7Bj8bvPKVe7dtaB6ig",
  "key2": "3dnyPtxHY3yTW1Rryask1MmmobFhRqeGmx4uVKsyr5GiDfuAk1LeSbgacjSgxDoz8ZDcrEFhP5n8W9x1aZNXEp7e",
  "key3": "4FtWjmMCC7rtQG9rwUcCvSpq4JoaDcYNg77UUHwBxmR2T9QSDgP9LV9MzzB4HMXTZDVXK8Ea4tCmuk8uDc6z8ygV",
  "key4": "4f6oww7zqdtK3j4217Wbc8i6zo7B14dKLA8k3XJFYG7x3NERdW8a9w6kkanvQPEW619Pk3FMZX7DZXBvegfRTN63",
  "key5": "2RbKMZvms1YXgwxGR89qLLRRZeV7eb91G3iGTFKRao8GNi94vVMyUWNxn239WQ2Uanx1BUNVkEi5Gs1CWDDSKYaw",
  "key6": "4QjwoW8dLhdadDuALjn6XJSmHazaK98BNAmuK4KLkXq96B1dfAUjFMzJgETuqi2bJr4RZxvKooM1VpKbGPL4Hqyb",
  "key7": "3vtDuLpPaNSpusTxwLbvLtK7Cm4YixrqrFBZy85F6xRURw4GH4hhdsNy5KJdW5htZJfhNiKBG3PXAjvLYuVPsVCA",
  "key8": "3sHQ6DaW8BeeNxfA4YFuw15KxeWQS9ckm5U4iKwReaZt74CTDusF6q7L8XU8uDd5pZiiFZEbkfVW4MDTYupS7TF7",
  "key9": "2wxgKxVngoAtMZb3jWHsgLUKTnH2torPFT1ZoSc4wv7PDQbUigb2tNxvFoe4XHNuiPqWNEBZF4zCdg55xAvr1Gr3",
  "key10": "3SZoJy2PFQM8wRruTx9s2VPKFH8gYFHwo5PVrBeQY9nV54A8eM2Xub1YZtb9jtd1kR1vwTQ9oAVEv1DvezGdYXmi",
  "key11": "Hvrt9cu2CMhBHafai5HNbcQwTwyv1A1EnXHXnsN8XcxxXZknVcrRZqKEpzC2ywkFuTq8hkP6BWKaAUDR3TP6nii",
  "key12": "4R9FrrApCUidKCAu9d3PzAGVTo2MUzoqRq2nWscDdBkPynYtAZNYg6cNo3hVYSkjRXc3CedRDvTs95HTbtqY3jaJ",
  "key13": "ekE9dU5cjCoiBpneArZJw7Eq1ZSrV222mtTGQBkqsXYYoaYcHhsHXKV7xGnZPFiLrbozWMCHakymZ2hA3R7gnWS",
  "key14": "64NTK2d2jebxrBYQb8Kf6VCgdDqFyotzh9GXetfSrw4xP1YtHJG4YTJ1Ts1WraLmHafjAu6acFc3nuHiyCrYWvrW",
  "key15": "61DmD2h9y6DUMrd5zwTvmiHA8v5k1T9RieJ42MN76MPQ1TrvebtrUggohbbFePqrJvBDdfTPuwsFxP7gXMDs5JHz",
  "key16": "4ZfstPosf4HhQkV8AsMVShYD7wfE61hrEMyAoE9i4UfsRUfQLxYHhWGbDGVHBphtdg7o2ggu6ZBGeuMoLcuHznwV",
  "key17": "2b4DMbauTGPEP659KXaRiVvEbUvMQmM9Tdxhkb393N8ukYtmg3r8ydw91eCSz3XKZx8Yx3Xad6y7erNu73aVERJF",
  "key18": "BM5MppsGSWr8WKqT4VgZJx9k1GShwweCbAeXFFbt9Yjm5SdKpyrYsboxhjLS8d6VporWQDaQd2Sve2hQhPucJxK",
  "key19": "4gjirYsHktPNekndNxGVjcrvT329WRjvf6KEPmfJo9Y9rNGPeifmKw3pgoh8VtEhobFn9ve6rD7e4ZGWAi9LANeA",
  "key20": "47XJqeCzEK9AnE25KuMCDGnwoyEiUmr9WZaDrXGbocYd9Cx9akuRiN8fef94pkH9vawm94a5MRFiEsogrLfL28JH",
  "key21": "UTM88FmXNB6ocW93rXYYGrCQFq1e8mmBZNthAKKTxVBGdVLUDijG1FW3FnZkod1byzMjk2oReQvaYeD7pxXrnxi",
  "key22": "3msqsnxJxMS7Nw9WzQcXf4Yo5xuEuhkBaecezBvHdkukCSVeHXky3XYHLxyrzaa6kDMXPa23TMf9rj4zzQiZ7wMy",
  "key23": "2n5rZGNfXcrQvAXz3xNCMD8V6YZDXxtieMgEtPaWWC9MX32TscKCnK3MoUudTf94dWW6i1Ee9iwYhVJWFebVBiSJ",
  "key24": "65dXF2pCMBTfsThQfq5VJBcjoDUYtkxzbQWFuhoU1s33tvdVj46BSz5AGcwnJcL14XtEA4qf5g7p5GFDxnrsFwmv",
  "key25": "sH9ugwxJzKk9PPC94gRY4PMG32cnjirLDuPHqK5dzacSpRCa3CHjxGwse3REUsQ9LfnsiCEqxPCrXdxFEM18zQA",
  "key26": "2b2bR1nQ7foMRDGRUhbuNALGU8HVzsfmN4kpMRN6Hx16PdafXxDgUfryBM1g6SEpgrSnWNjGK1uStEyf4pZkkuEP",
  "key27": "316YmsUBo6deN2hjipbpJZR4GmEME7vdq9sexMjyhgNe2Fp7RTSv4zwgXy7iZ3jmYUwvzM8LxudFYAVgdLjsFwCN",
  "key28": "yb2gMbZSmVFimmU9TZyq785ErYhkmZWqfy7LbFimu2waGTHFAwusAUqSaBpvD4kEx9yepYCZkp6BkKkPt53k3mU",
  "key29": "5CEM2Sha5jjvvHt5U7dUsSTzBEAJ6fuK4bBpAuBgnHrw1f9owBF4pxV42MNdYfM6DRkWRy31JSatdmDLa7N2Q81Z",
  "key30": "5bzTVAvXc9wFUKJbCaBEqAVs8J9rRt5V9huieepPVE6yV9sjgExjWTUwQNBe6eqKMZs6zt3aSWxX6ASmHWynua8y",
  "key31": "51mpkbmBwj3ihAbpmxmiNWBSwG8PgT1Pe1BJwPprqAYreDcSZX1KNNAx2U9D2oTN61bwExzJuZaiH1ke9vKUEBUP",
  "key32": "5AQPJEzSVvRKDtJeiFLTZTdw2ARHpHrXvK4zaH4SV8xa1n1gY93dGJs9ua3EBEaXgScpxqGXQzG5BGdmeEXByNV1",
  "key33": "5QtSCGSmoWoi8C654N6xEiC6wLY8VXUPCVd21RUx5BZnnjLz6bHYbx57JZh3Pgj7QHXP5tEF2XCRiHqmcWNkt37u",
  "key34": "5FyiuqAeiTFk5mkEXdXAkTDe6ZmRvf8Vs6ekPAP3WhXyjTUPdnMuTSWz22V9mkn8aKxruRYJYEiwYqg5xpXPdntz",
  "key35": "4UAjDoBkQo9dVynyiZ1dUi3y8RiLWjUNfQhnXKNhM9LAqxfbNHKJV2iGdAn8DqBsEfueyJnqy91p6p9Kkab2j8E8",
  "key36": "2nNaiCzjEBCZ188ZU6xZvJpUtt1LomS3UBdyi7utj6YSdR9WvHhjHJz4CqhvQntKxZ32cbUTtfyCMMYQgsVv9aVN",
  "key37": "3yrqMaFDYAi7vf1HwZJrbK5T3wCaoypQL7rkQFL939kmnim752bi3mE15e3ngxhqVaTMBxGDhpVjtmv6EgifUYW",
  "key38": "5kWqyike45N4EVGrA3fFAvbZtau7VVQD3nbHkiBRvBLHkFoBmMF9NUnKSRUT6pmePeDViDs6xmQ6kGfq4Jcghrps",
  "key39": "2f78VKMqd3vXEc3QexcDnAD5Wo4AVc5We4o9NcCg6LPdpZpRLmBsi8SPAPf8K7WgmXUELT72zwc7qHvKPzjnLe4a",
  "key40": "4Xsy3EhMFWVaRcjLqQnMLpFyvRB6rNMT4GCVD2b9tK1HvPbnnhU1J7kmVrwVcxSoSUMAyeKnZjBkgYpwzh1DCLfb",
  "key41": "52jzLW2yTfsn1gKkxP535Vz47Sp5Ar1NUuvzRsK2AdjZUDcnqiWiH3fCYSmjFVZF1P1KMG8oYa7agtdaRbjYHPJW",
  "key42": "5hNERVh3wDwzSjCJAHPxnBKmTH1uutU21kMxTwg2GfmUq8jmFk7KDFUp9paxEDgdiNDGpS9HZkQF5L4kGLDYX7q5",
  "key43": "4iitfF8cDifAuW96qGZFEY3aQikyhdpNfDKZFuxQG1wwjmLbN6sMswuGNwnZEhvARABnqhXqhdxTB9axr3Cbhavk",
  "key44": "2wz6nUTmxR3MTw4YugK4X8aAZtPDTgX6UeWXfowRgue8RH5Mozi7W3vJEECEUxZgyE7PH8grutj3C6FGL7rN3obe",
  "key45": "3q7dyrWwsuGxi9fkzfbYGza69i7DCGHEfeEvp6j1RKq3KLtjkmtG9EZe2hzAScKtwdoJaNtqx53MYJMoR7ZtCVPp"
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
