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
    "2QkiL9gZb6vVd3ZcmRwp7kVJsznLgRZrRqvd7FEUY74QnEwEZzQS84gyBuJxqdEnMTNZT4egTcsL3fBCE5PMWYy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sDwQUmVMd38nUeHMu7dxCuUx9TzGtpXHc22cayrZSYyjyCANtnucLNgb83fxUdjB8cujxJtR3FwMv9CAWxx4e7o",
  "key1": "3ftayA8oFVfpSwGukwQSXghXLuv4Ys5RnRp7ASAqLZseCHkz3As7DRcbKcnD183wPf9EKqFFra51Wet2L6nMrcGF",
  "key2": "61MdTvKzDyVbwH56EHHAY1iNNc8p1MXnBhNnZszZ2RJKxGeWTwbZxrtwuVkpgCSijLNBt5HiMhnMHERfWW6kC5Kw",
  "key3": "2hAxtFtbBRwh2RLRErpCaFP11ZhE35a2P3g84BBy6ttvaV38KSAhZthQ3G8b12NdAHDSvnMPj8TtJuXwGrmD3iCp",
  "key4": "35x2LLQntfkfiKSQPyBpbmxvqK3BTVmCuFkERxhgwahNxLxTddugHnu3fRW6p1wEJGWiX8WD4BXa825LnGcQWFGM",
  "key5": "4huxDPR6qzS7xaabYBURoTE7NxzaNpthMPTp5679DmVyHSZFpLqHJriAxXSBrSUN9pxs21P6PZBVCGE3KnybbNFC",
  "key6": "5yyG515eyyT8uNEhzKWXa7LfTpFcrkiSw6qkvuDTkvTTjtXTGs9oLCvyyFYHT5M1ucFyuLdNP8osk9ASZWFV9KJe",
  "key7": "2ypzt4xXDJXhM92X1Zi23hqDkfe9qMZW2f1mfYgSg9qbY36bq3YMNqQQUaysv6KFCpviBkHSFAGPFcx2HQsoF5JN",
  "key8": "624QNkhLxCoTS7H22aq7NJBT433mFCBJMx3pzvR8dQNpeZJQZFavZ5ZMhT4dk9j1JA3tSXZeV12USBPR7htw2fSo",
  "key9": "4uX7krm9CJVKZAuBNSgCiSBVvas9eMfDpSrBdaK3iGJWdLTPPfch6hE7QtU1vvPsrbWczHH3Kqfmbj5t4zWxXA1T",
  "key10": "KXKjpTBM7DNpTotU5bpTBVsC8V5QopgeK1kVNg4o7rnXBtyosyjbgpmJAs18A6o733NudGv6xrQFMfxzntnvktj",
  "key11": "SdSoaABUTnjFULgjMbs2JDKKqohiQLHbiLzFJxtpYKWU6ErAy2CxNYYnPPp6wVNLf4DX1Jiy8Mf95VXbj7tQkeh",
  "key12": "LCDWWN65w97XawfP3ZkSHWHGe49EP1BFmU4cuSkbjgHkNpw4VoKRcy53MHktfbhG7UwNjSGLTc65i1y7kPbLeKE",
  "key13": "5bxw7CJ8Um5HcwPVsETGhwnyNQs3GX5cCoXm5a62kicqJGiFSqwAabDTjAabzyeuuj1yULcc4kN4fd3PzXbCCuSv",
  "key14": "3LLTh6SXvp2ssGgzv83JMEqBDHnwTevc2EvtTv6GrL7cVyS6pCYpgjtbhC3bXn523BkEMo5NENSNLG5bauqaSLVC",
  "key15": "4dSTANnd3ip7V8PMycrrmorZdoEXGCK8hUJ87eDKAymEt3b2YKsUCM8s9WbDxkvG6Gx6AtWgzNQLg3E59HVMvnL6",
  "key16": "3dwxkAzdcDJnzi5cQpGrzQRxszrCw632tD1mxjuRmFGZT9EyXt4mGhLBrHxnjXP3CVndWLdUFh8YBt9jPDUH8cKh",
  "key17": "5rdD8MWgdQDziw4AKtb1k8K4zFPTa2sJ7raRQXUmu7SKnn5hSy7vK9yDzr2HaBhhKpGFWamyN7AKdk6a8NQbVUpB",
  "key18": "2gz8pzAmP4ukpqdG7tMuetEJ1Snwgy1s6cfV8Kf7DqLP5FN15B1bwDugZFwdrkmmnAf2NMHkSAz9unLaWrds7pZM",
  "key19": "41Fa6S8p52aRGBBSFJKV2B1YkFCPxQGip5W7GNYDK5z8nAaKsxjahzTAwcVuZqreJFDv8wEDeQ8Hc5xmGCxMuUA",
  "key20": "3EeuMVDCch9gNBQX87Zu4w61ipPkSDMi6t6QgVxmLPUuMPaUavcBYi4PmpqzYsmi8XzoENbYowQSj1X89Q8oyD3h",
  "key21": "MnNgoWNmaC8Ucv9QYxycMXfdG2N8R2drRWB5Y9jTZC2VrqmkhGxacoKhbqzja5gShFg74j4Jq7VSArtjFATMxwZ",
  "key22": "381MJBAfv1iLzNwjuky25CVbG3PUTXCDdWBEcxET9Qsc1spRmBG2JVMiS7WsBYrp3Tb3KcCVDPTmZH5d4u3NP7Ev",
  "key23": "3LYHxVcuvZq2q3FgFfpe5tcBitQDrKvZdqmEfS9kQM6ZEgDN9X7NfB8ynBd7XuUNgQRNCKw9hLhZqRdbajLcZbnm",
  "key24": "5ishyT4cyZB8ZkhePCqkcwpe7e7JseqB4y3CDi3kvrwa7uckEshQhEX46nsDbUNxbxveCk2b3JYKRwN9zbTBA3Q5",
  "key25": "4Scb49UeJnAXt6tuyfTxcNRBu6TyXiA9pUBhPdphfQM7D6mB8JMqBBFr9rqTpo6bPYQVFp2GWgyhMfAjZqx7dvvn",
  "key26": "5upM77DeqLpdGMqnxX8v2Zj63huwUPfZFmiANm9a9Lghfoo8wcpeX1fUNVJVZZMGgaD4E35P5LDdfyWRzPwSBEZA",
  "key27": "616Zn8jpPSAPirGtxT9k8JPcXnpGyGLdXBLueaUiEnCtPfNPrzEitnA848YWm93DAnJs3g39PESUCzkrJmQYijfU",
  "key28": "3hsF6ZUp43hdUYm9qVsLQhN9NZHzEhjGWkaU4qvuGYZixjPTyQ8BxZ8tLYDCHmhep9n5pkqsGy8qghXBoZWWFHvc",
  "key29": "3kGn8Wv6s39QNzn7z7hasNj4CpxkNk2EDGov9uuExNfRPfiq1UJbLpwscCY9DLGzHM2a4J2s5QLjrLxaznyPYYEU",
  "key30": "2bFuhUYBW26aFmoB7EByAXPSu3E3CoJ3dndDMEoYptp9feu7T6aLpq8zPmvjqyV6Cm8NW9qyn74rV9tDYdGdY9T8",
  "key31": "5Yf3EF6jBq9nHq7CwoVrognDMVHU5JYeiqtnWmFGaXJrfiGoeedt7JDTj3vrj5wFEVsPDVRFHh6s9diFBzKSo5vR",
  "key32": "3jDqVDLy9dAq74mDsN3WwxHFpHrYA9jJzWuT52JB94Jwwf4zhHFbZkwXjvh9GAmdk6vgVnrjwCP6AqTKP1vj38i6",
  "key33": "29WFd7N65JNkSTvAnHDtVmcXY8tnprGGJ9Mzaxc2YqzRMCLL8dnZSeKRJ852Zr9mZoPfitfr83Pt4a8rC9F8pS1R",
  "key34": "uoNnEVzAp58VPDnRgopRkK9QJJLRfpJLxdC9yGhXhJNscgEnyEHXwGxobRaxhprBgcu77RPbJgKbLNGwJxJeSEH",
  "key35": "MUWX9eko2Waqe3f7ghHqmjDE9zbYvid51U9CJ6WKAKB9gguUhws7wVjdds4NKe6aUWGjvFqe2qW4PZXYhoefwhz",
  "key36": "5y3HvRzuhf5b9kKMNomyhER34fCq6DRkdwxBfBusdNXvhSsrVg5FD61mN8GpuwApaRCXF5QaGYLW9HNbmVwQ9Xdg",
  "key37": "2ovyCdf1YMTN8XKEZ8GDQa4ReJ7ckau7JnugAVJPogzfLrnMSniAHwQFqytqUhiLkGzK91ZGoPhUuv5FrRCfwPVK",
  "key38": "3S3bGA8iMh6gStqKECc6yePbNe68nDCVLYShMyzxqG3rjv1Ssrhdfsw3PBA6TJGVB2vRGcinomXRsoLQd7FTatkP",
  "key39": "4iBzSPyL1FkgiKTfmENuJALEPZGy8hfnCNMXhMvXmiGy88b5c4karRyGBGhLDWN5bFQQ9FJ9aXLtzgnGfeZe8EPz"
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
