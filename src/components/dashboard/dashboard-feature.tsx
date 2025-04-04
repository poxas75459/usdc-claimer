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
    "3asT17MAD3F2uxc7mBcVgkDCwivHo7MKEFyvm1zsyFLPriEuan64noZ3EAJegRTcUJ1bAMmKKwFbBzmSaRbttWUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zb9GCFQfbHPUBvHKRqCa2MqCYE2DwAB7dQAVD4QCTTmv7H2DGvojSGmhP98zneBwjw31M9oHzxmuq3u4Top3uvK",
  "key1": "5VcWA989FDDG5GY45hhgdXKZuo4gb12aHDkMgX9dscsK6DQKQmmyNSTWVFzbzCo7bZSCrmbTHprW5V9V2YG8zWo5",
  "key2": "5EqFSPu3SgP6eRL12sk5XiJHw1UjhNJatJcREkLzAYiKgRwLTxc1iPAqtE47rDTSMzFvb4R7xnPfm9DLb2tmGQZg",
  "key3": "2dFqNRL7Yx78tnNQGgPkGxJe4xK37DRq248T1mEHBP8zwmUXcNhqMDYYQZS3TzdUDVFoQTdxXN6kkucMLzMujwBp",
  "key4": "wArEqF9ytYdAmkRetoMkJNLSGmgAUEyWrVc62qToS1XPtbGNQt6EKYHFnuMBTtcTCekXKr2scUw8MdPw7bFD6fd",
  "key5": "zFyjwARVScBy853tM1h8coH6aJT4f5NfvzgPAcP9ihCJubrQpwCkHUs9S1MoF7KmbGy8MHDBQckAbaKURVQtKGK",
  "key6": "63WWDpMD1ueLZgHmDLg7LXdLW3r1Bgf82r3J8EVz1Ff9RMB28pqdGDr14WWBYw9xV5NyUu3xcPpofmUUnPWWWqNq",
  "key7": "SgRDq84h34Zhgib1kfijmKyA5Fh2vVHM1EgGVfQG7vPvmMQ5Y6pzZ6jz9kMpsCPFR3GPytfCdB4WjNriWi9ovsF",
  "key8": "4v9yuyEXRcGsCdvmWzfTGPwhpx9j9UQysazXiwYrA6Xkw7gN4nVQuZxaBXm9B4yKgqWAyN7wQhsHWYhtE3iN8KKP",
  "key9": "2PCFzG1SpLZQQEchVVSV7BmYqmeDVxYbLsafsCxniuSiQRhf4b1GuiUXxhtUiBGgG3fTnoAJ8VvWPzcg4gr99xkQ",
  "key10": "67YfkwFFGjsCAdDxYHFZoev16GbT8H87gnd2Hc372uThfZweZ5oMNELtGrBqRFe2rWC56WeL8WyxSY71BVzR1eSM",
  "key11": "3HdjCgmRDYvDFvgrKCfFtKs8qKSm11CH8fWv2Km86C5hsSw37zL2PRMW4HsUgqSc71CunkDJaNK25i3jAk9HBmPQ",
  "key12": "5Z8BucSAJWqhPSfE4k491SvBVPFaPUeR2Rvj1qDsGhZUhHUAez27aSnJP6upEuGGDB4QrzkxQmWXoZT8SxKhPyQv",
  "key13": "3zVyBdTx1VVsymZzS2Ta15m5HHDefSPNYcCDf65eAjnALneP6QTAcYThCuk8BHptX7S3SFtzWzRypUvRWPBp2Vne",
  "key14": "3jY453oyhoyc36NbLMEYzLfXrLBUB4iXjpCAJDdR8D168KCCGzcnB4NDuvbCjv4gLCDZJfCewppYJNBqHGVcQxVz",
  "key15": "55mE2ZWwXeehkBsuBw3BDpUT7qobhx8L78E1SqTjbbBgqwspHX1QZ6YCCLwZa2BwiZXdkUosfxEgLm6MUEAW2b7u",
  "key16": "2MUzUKkp2VwsBcThZ6wPMc1g3B1aCdrYTeEZUd8i9rhG31FFgudLExH52Jos27bqexBz7FZNbdRxsoX7Z1uj5v7X",
  "key17": "oacpszqKfHn1SgFyomLZMwcNrJJvxDgevDoQyvW1M3dU7NHLhJbGQugCv3uJhk7oem7t9bQpGYmfH3yUMdknExN",
  "key18": "5AU6HGTusW47wYRLMx7GK4ibnnTogZEMW5awKdczpvxAmt6ZBBWRb5NsxvixJz3XjNGT8iqYC72WtBrh53K7nxia",
  "key19": "63Wkfq9foJ2rS3PZA2asYw6aU8JabJXRR4oMu72MdYCHLzVtwRqQehYw8c34BW6RJPiQAHCY5MMhho1JJkjR95vd",
  "key20": "5ozUVA56WDLpVVXe4qDbgNVkao5drTF5Yz7EK6mMPzv9w2wA1LAGXgfF99pZCb5GK3Bo21wnDdYCNrgSWBGAEy7B",
  "key21": "5JrQ8DEXivodcaQ65D1UVgScZcLCcRC9fcNuc2VkForhRJHEHvbd3RDUeaY9SxYPnmvmGyK3nMKhG8x3m6BP4MsG",
  "key22": "2cpqpLKGYwv8cFvNtXYGeUiY5VvpKZGJi5Pg4m4L5BLk1BNWttqxAP28aQ3cXfYEfk2wJw8HdrPBdJf2Q59Jv4xt",
  "key23": "2x3QeCAVAME5hX9DfMMcKLUBTAcFKi3iT6S6i8V4fXHTXNPHj7bexweGEpNqwBdaonpVbYmVVaeSeAqkkcvhfAmW",
  "key24": "5zat3e8DHgEavT9TLo7ZJexZB56hUihqwyvTMvfCbt9ZA17q9QoTUHYeK9Cv6D1qB8Mcvaq4mwSXPfAui2RrzDxZ",
  "key25": "5USQFa3VxArmyKvghJs6bJxukmASCsL5j775PbQW6yaAFkSBL1WEzSuL3irSzzrDuaKGTbWho132HUeCvHkcZk5j",
  "key26": "36RhkBG66cVfsrnB4B5rzApaaN89omF6jGy88t3TNu8LnMZV2LXA1XkcAi9bdV8LN3inyFV3b7TyTSoKe2a9qJfs",
  "key27": "kKDsmHtQkCBLgKEAXDAZc2ojostbsk1giGYLd7DPTb8Bt95bU6Dx9euQDuMKMJ6opT3jnY7x4TAdqx6Qt374yjN",
  "key28": "3hjhuXX2ouUTxk42uSs9FbVV6uTSXgUeuCQnHkzL6ehGLJrYVmD8pPrKXDWRdaMGkPWeiuZ3JP53ynkejdrAfqwM",
  "key29": "3rmqme3Voh14PSMbNYJVrGkNqYVvmB7R7ci4y38GLRAks35Qyndu2D8STV8UgciKUk3DkyfRot6PotX1PS6Urzhq",
  "key30": "55ZTHmbpkBcAnJTDmn4XuXSz5nHKoAFtGTtuCmmLRrV6Frmyk2yCmug8yHM5FYTDzmxau7sm3nuok3aESizqAfY4",
  "key31": "2Qrbwqcxg3FgUM6PNoW2tR8AvDgRs9z5CrF9PWhYk5famZ6NB9VbEFEX1PmYXjtCnCMGbuMKxHxy2qWeho8BW26e",
  "key32": "2dWMApMUM4xvhG8N9uENDSYa2eK5U3C2YUDnikLCYLooqdmsBjTrqZrMLJXqyveHKZSc4x1nSQb6FJSfdEc7YCMw",
  "key33": "2JYWKsBidFP6vh6xFouCWCHVzh8hryBr43aojv6j8WxUQLFi4hyipQRFJD9bcdzW8EEgaL2ET9jeFrTun8Gf9Udn",
  "key34": "j4vKZsysuK7kviohwCKgCqRKPz3BsWEdhWwSVQhbFysH73egjF5DsrH73o8WjiSiUHgHyGVgW9q4L1gifaa7nsV",
  "key35": "5akDhzUUq3r8Ug2ViUHLx6Vd5EGqwQU93V45K6fp7nSxh7LVCmVQQC59B8xp6h21YY484UkeVjussMbwgWGv1YGt",
  "key36": "nhvsQSQ6dFL6fDJv2wLgarFzTdhJjUQjDuRRSybE2U2SweYWfEcqTxE9hiZVkpU6YMarVDTxQqqgwY7nQgA12Bg",
  "key37": "2qLM7eMMuUgsMJuVtrty57L1eoPPKmtoCg8UrAfb2cKVMbhK68pCNHmsZuLSK8VQ7X2XiuhbXKPmEq8SwT7S66nU",
  "key38": "2AxWqRWw3cidxxab7gdtGxAf4en1Uwop7bPtKJ6ELg49ZQSmYigo5nwmtnXKrkdaMGHFEfZY3daMxN3NpKeDvanR",
  "key39": "phkWsbBQPCWUboFSaWQxvVrDicApXuQ6HY3NBCdLHX18RZWLH6CMRZGpGd3z25Pz6Rq9MxCAZxrg6GFU3NeZ9Lx",
  "key40": "45QUhE3Rbpurm5jfqa7QTVyBiWU1R5LBLzBTMJmwA2WqbY2H8uSur8GbVsZ3K7EDUCdmAYaVJYWtEmdd9ecK33uN",
  "key41": "2hJRdiRcom8ekbUkr8Rdi5Ry8GVej3PDiQn2G2SCaxXKDNbZJYCJ7BvsPzCW4V34C4L27EirJUD1Z6GGdiWjeZES",
  "key42": "4Cw2nLqMi8DS8S1dwPPpnbGFVUGrexhYRst9zCDLL8jesmH8iwDrAxh62p6eBRoXNRJ6J5bAHTezGBjBPMjvaFiZ",
  "key43": "62XZX5FJTrjL1xczTJFG7pW3q15FKbAixDJTiUW5hpq9M58qCDSwitgYGxghENmXkCJgsV3XonJUgSFrXKHvSWNm",
  "key44": "54n7bhvFhkkkEdBPm1JkDpy4FuvYHoxFbbfCcmKnFwaUW4GZEqrbkbk6yE1232RvTDX5z9o736u8dG7WRFmRzuGA",
  "key45": "56WDFhAcbZ7JCHujk1XjPS7aP4cSd7HVUv75isUbAzx2WHoF5dsWFPH6P84xJZWPLuMx3D7TfwTd2BghMidXe6xv",
  "key46": "HAS8RyURjptWcwXfPGgJkD6Hpi8iFXjQcgrGF34a8jpZyPLnm5djsCUGVa8PAiSAkWm9bv4TVYaU1EAheoLUTHd",
  "key47": "5bNdAMZJhA1aiKLCkvVrtVp2hNJgZe84U2wMnWMWhnt8FwxKDvsKUXF1omXc2e4v1HAYSZ8jRoFNZtLwzHzNKPnr",
  "key48": "3N76foVpymY6s1AiVUVfnyHJVJmo4XiGxj3mZeC4rJH5E5zTTX5Kj5s7NZLmc86YvBzyxSWWvEMnZrU5RRrG8Ks8",
  "key49": "3TStpMAxe3zAn8FELCN8hk2L7cyGbJ28qRm9FnGK6KDBEJemnt8JwU2WFVWN212mFYGefzfjoj2QMymkNhL717eH"
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
