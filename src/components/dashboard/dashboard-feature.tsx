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
    "2ySUEvUmY5N1dRw8jigVayboad9dw39uFXysxfPrPpMCSZXQpyiaFh17VvxzXHngHmmycFtcfh8qsg47zyB1NdFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MBHq9neLhgnAHumUh34kUDBn5n5fw7Nqa8tS9juQNVebDdsppv1ZfC1GSq6Z81j8ZyT6pcdF6MRmMGfchWosTp7",
  "key1": "3HMwRYDJffCTyK51BF3HLx5F6UoUnyiMNzDmiFzdRhTvnwbQgeWcae8iYj2GWF2YbyzdNW3h9EyS9xSvuQ26xGuc",
  "key2": "VfvEyfTJhMgJ25zotFmhcgzmXVNYsPSdYmTs2SsvLQQGet9i9WTg4KaftDvwSuuS3ekj5AUTphF8Gz4sU4JY3pR",
  "key3": "49xTGPVfVmQpRWfCEWmzYiYw1DD4whzaMT4x9bDbSZK2VhzcknXnB3piwofPwHS9AjdKvTvaKW65dWizd2DdX9XL",
  "key4": "59GB3baRj9kMFLMc6MVfcdKMdkX4AqEosWoEYmyMByRURo47KfDB4vMQamzefawegXDpdeG6BmmK38ETwK3TFwVa",
  "key5": "4uQdwTpaY6pH6ZNQgecEVW2rwZYqasjttaq1uz6Ck5MsYM3g3dafop9NvvMaW5xJcKaDmw65z9LXtCrbVdhYnq7f",
  "key6": "8epGWkeMhsM1YKzetPvwDAHvxw5uq1b4gv1VNd8aqt9FY5Gb695FTXptdTox8fT92EWxVkshSNQwhUbfvqK6rLS",
  "key7": "5dtZJ6ueodWL87xMpQ9xQsaWS4n3TQUbCC1aF2vuESFmaBxcR3zx1BqHyGtzfQEznXnD8jnnbVeq9zMv241WLJHz",
  "key8": "2RqQemR7fxRLRZxJAYE4c9LUuAXNrRpEp6DWGweNGNTKQEs33XGAoiXX24S1Fh9kyVgL3ZeRpHMGtp2mLUyiRddK",
  "key9": "4hVtQ8o4biywi93gaw6DzcDVuVhk6gD4b2QGF8WagNkmTiu9EdzBUUCsyDAwxxjzE875WRbmDE7yUgA7DZKJKUid",
  "key10": "1CC8ddbgdi7DVXruKkcdQHVbUb2wNSFUQKrEkuvZSkeW59vxV4apitomgfYQRMeViJdzE4i6sN4REiS5Jh9ZGxb",
  "key11": "58HVxtuyWHtDGuNeEzvm9ujft3ozvaNu89wJrJezuehXBziTWKsXp2EkY2nZ8Ag5dADDJqaG6Jw3fYx3vv634zb8",
  "key12": "2hP13Rw8iioKpGCmuc11mKDoneDvftQi3isejR4G6sU9zpGjNJ3Ls7cSbZobrb9s7qNStV9YBHh2rH4hixgZkwyH",
  "key13": "3EWbtfK9uFnycEmg8PVLgTavf6NvEicuZBunaoonvL96rfGBVEGFq84g4DeV7mEu1NWs3Vj5Ho1AmuDQ5ZyDCScV",
  "key14": "36VXgpxvdbqsYBSnsXy34nv2v2V3VRe5huyLXbmqscrsvLu7CsYJzxAu1HgEbjkBEs2CRkh81Ak4q4kZrexM263H",
  "key15": "bKBxbbcXADDQbcRDdfMCLiM9a6ZiPwpqTBasdEpCkXCR73dwhJ3pvnkW65nfAU87bQ7HadJ6V72q2EwdD615KLC",
  "key16": "21TPVByXLuBFM9wByciZj9xpK3QuctvKHZhRGhtkowUFLK1XyBpANGWuWNPBYC3jqkgEvLQNr1znFd9SjmS3683J",
  "key17": "4AwyJ5923TToGbKRtJfU59qeg8U2Ysocr3v1tzt4mgF9EpJGMr5rg7Su67s8ZFBbVnqFCxc9AEVZ9zifUtEbfsf7",
  "key18": "4LtVGzUWx7rdUKRkkTf1ntP5LwQNBszTLJE9HTmcVRFX9kXH9v2t6rUdojLHgyfifn2qmgRnLHrHH66vZ5mKdRU9",
  "key19": "25nXsPjkGW8H5qpVdVk8mmhD6C3JWQfnUSvPtDtVkvDMtyRBoQXzXYAUxBsJNu2WQT77vjoeJKnZoHV9qxY1bJnh",
  "key20": "5ssZc8s7QJQQVT2HHH4ezuUHYhSrHmV9uPbnBsEHZ8SEpRZ92dCqwMUKu2MSkJ4e3avjp8nQejA5w3i1BfepnUiG",
  "key21": "4JcepiZS5ye1TQPSg9weeKCSbgEvLub8nvNw421pXsjAXCyx9SWqVvp4DaDM8Xgrerp7cTAb1zohrrrcSUgdVGE9",
  "key22": "2fYphSNkess4n929djnu5MSFzjq4tPz6y9LG9QxHuRVPfW45DkyF4PJup97JuZZDWXdTZP7GZfEXE5PwedyGoFwn",
  "key23": "4n5aotBbokTjK5T47fcv6JLDmwHR3NxGG1Zz9BPcvB8jv9EhSVLYoprU11yBafmWYRjKoJs3WT4CPxWvkW4msHdR",
  "key24": "XGdN8XLAUQJa4Jc8TVxQyb7tKFgFBVTEMYogtsRaeTLjPSvwdNjhwGJGcgxzE3QpSvuTcAN7D8W8b3p2wAiFxMN",
  "key25": "5v1znu541ExjffdZztCdJVcj75cHTu31vX4ZVCbBqmG8kHwvFimUeXi3XzZPeaLeGSY3wbqe4Hqesy1mDe4TRCAA",
  "key26": "38gsbyKDj3knDKH6g7FWSxvAc9tQCBZhX1wB3TWU2Rs8sN31ks8HHNV9QZmU519ALPRzPtPCsMm152EAufsZ1D1j",
  "key27": "4R4bkPw69zjSLZ6LCMAhoEPrGfwcutPwmChFUponmjp3oWXMK8JhmK6qj8nK35sQNSWovnkLfhude3tiGysbAJfP",
  "key28": "58kEaddNQXgoqKrYYVL4GszFXstBg58Zbfxgt6gJyv9Zojn3Xip5Qn5Po97jE7tv3wSEQ7eEzy4V4cy74bmHpSp2",
  "key29": "5JsSr8khktVXLbyCzLbNSbkqUHRcuZunp3N3qbRXrP4a4MqHCPSwmcTNC3Nk77uKg2SvhknDPzhUX8aTC5rCwcKY",
  "key30": "3awMhJrXSkFnwRrDCyFFm6cgatjZAQr25hw5F4NjhLpCJvs2TWXvr3qheXyVRWCn1tdtJgy1KgePuhBX6hB9wbkB",
  "key31": "2dKBipu2VJigzz8mKHdakWsNkXv2nwiYQeXWnFEA5w39Xri5zntyi26mNqqxcm5TfxF9mUHsi4uGBgWZbdW5EjR5",
  "key32": "P7HPTb1n4LUk3gm1vF5K1DGRonZMhrX4NnPmK2U4Ly8yx79PuTVc6Z6HUyrNkzwky1vAme77upj9R5NadkxbRfL",
  "key33": "3iJBEYsgTiLZGcUD75pMXYts7QJT7iPy9dKzSvJqwyitM6sDP8V6NnvK5difvzzFQV5TDNMNaT6TF9WMptsKA8A5",
  "key34": "2xM58xWsQU2umH5ZExzFJyXNNg3DhcJc4xZoB9z1oNwUjcak2MR4FNRgbkNHDoHygWrP4XoJx879pNtHAeeeXJLK",
  "key35": "66WcN4bqpAX6iwJL4JWpKCvrSyx4z4hu55ywZLPn9HrQpq9CqnZXLNaU8osM64kCQd9kuHZmKkj3VqBkXjmSywbG",
  "key36": "3EkA5FhuieDnhY12FztPzGaUnxrXvyad364xees4nbQ5EYWAZEfUWctSgDDKVi7VCiG2F239umsMHvFE16ni8EQJ",
  "key37": "23ds31ot7AwGt5cBy8fZm5Ko3Bb5QzUjK4K4dcSEKMjRYek9kejrehTN7qN893wfs5PrfW19PNzF1gWDTFQSY7T5",
  "key38": "G7MTR6ew2TZB7mz3i5YGrz5KTNpq3hHiHAPQHJjFE6LaubaTWLTCjyGshibLkCuYqRtJp6DcRJcjDk3NUE2Qf1B",
  "key39": "2G9YfT82C22xMR3AmXPpzZq37tf1quLteLieFJigKC8Zf1qgJHwUdksQ4UjZw4a8gnn2NWbnszvPRdrxCdkHK19A"
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
