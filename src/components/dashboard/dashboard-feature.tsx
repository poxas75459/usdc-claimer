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
    "2w2fWp2CBdSjqjxipqLzHGrKakV5ef6hmthLxRz7bYWnejFNgyTw9LKU2fJCdYkaNntqGmQFDsoKuNhFA9Z2DbYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66tfNSUqUGN4CFvxKkpdQfu7EaK53Xf8yhGiDeHakvKWWivFPpYTK63uRgVv34j3g8hjgAssBVDLsyYTZL4Xg3KM",
  "key1": "5vssRQ7w8fs6c18qLRTWaLqMhgd48hAdo3ndRjuAgq3DYGRoEJoTLtr6QT2XoSim1yS2nvdo6MPJL2rHFKFa9aAi",
  "key2": "tV3KVcsifL7magmiVdcS7uWTHWHCmHAQJCzn48YPADdU1KzMPxd3M16nuAWScgWTUCnXPTG4NwW41udxwAfBYT3",
  "key3": "5vaMZuRVsywizLAnuxdpENDkRgHk86ypA9NLyRBAMJ3WVZdZzZiaTr4Cm2mHsMjqB3h8gXTYSXNkttgKkRARnJAJ",
  "key4": "27rjXJbVzkENpnDgVxzQczTpCJj47SCnrgamkd2pgG4awXFqPyxfPEgmt8eCD4Z1fofYi2Jvb9d6rNJjaAG7iPHQ",
  "key5": "39qfBzafTJMsVYa7PDhoV4d1BW1WTygiHeYRNNEEk88CRGf41LvqTVsPH8Tbu4AYMMDrZjcoNGuHmpaujwydyEgr",
  "key6": "5S4iTE178qwB5ABPamrAq7ewPh8PLBVb45QAsJtcu78DX5r5Kuf6u78FCCLmiBA7P8SMzdBsu4SeJF9A23f2Zhyx",
  "key7": "36t1mMiBTjABxMCnnkPawmTgPpGmtNeZErH8CEDfpCjD1jGJw5UJuG6khfekGMSntf1YQhCKY5CgnSyRtca8wdpG",
  "key8": "jMWgVo43JiaewEhCVdCUQu1ysdWBZrDsfMfmfJiXFeFiw1dqBPUAbKDNfyBgNphv9jqK5UEzUbGaET9kRiwkxjv",
  "key9": "5UQyUsxs9UHopvhAjL7XUqRvkUaPXu6mh64yTcWLicAAgcuRzqzcDqoSBZvZtZWZkS1Rh4HVJ3K1wMLsDHXccsBL",
  "key10": "4jLxgkVXzD9EP4pqzDNEPsx9XKzPurm62AnHQXE25PfZiZb59KfzT9C4yUubC7MaHJWmTTbht2tEdCdPCQuzBsdN",
  "key11": "4oYggABDd177vxg6qKAS8YvoGGeNcTVDCzsTXzbAer9dr4hK1uAj4f8dYqKG2DfgN4EKKXzMm5Y8hsnWcEu467Uh",
  "key12": "3SCfZvvCCLBRxKNtwGtVBu6a6Ji62Uaxv3SuLcAqf6VfVqGUKkuwHFkViqivN2RoTkG4doTtp9WoGAsoBZLXEUQm",
  "key13": "5HnNEYPzKyjwWyvHwbUNeXshm7cqr2tasSrug2GmAgNBu33rBkQfE8bgSiFoXbRVFV3Qtso29e3UQpfuv9wtqWSi",
  "key14": "481UJLZBK38AuXXq4HGED4zsUAfGGDFcgMs9RMSyiHzkyGTKxkYCe9dC8zsK4K9SySjp5d3DB9LY8jNmzv5b1mwd",
  "key15": "WHa1QtVFM1KRcQAJjBb4jfsiYfsWWJcBdY4LTybNnVxuooDxZRq4pRA5HYS6BYcCXm2PCAa8T1dGhXM6rHZjUBr",
  "key16": "2dS2y922FFjqH5AiZbktvnNQtA4RsxAWwFnmZLTH1H5H831dKJ3PpuzFkkpHL2ijSpjZvqa9CVmQKqAA7JboMsXu",
  "key17": "5Um2xPgi7zorAquffyMgycDLRkhe5YRWTmtpMVm3otgH7gnfxYpybZpqShQwdhgjQ1H9NfmVJJPb7uUJZnAxwCjZ",
  "key18": "3sDW3SyzJWxA5syWRvG8mTT3rdyL3wwVk5ie7chKRrCL6ZT4pFMp4ip5mw4thUZ5PTmNokMW4ibXUbUj4PPd8Zr9",
  "key19": "268pxAbypPn4DXqDsiLYmWeqvR8zq4dh9piojGJJouTkAitie9kv1rr5nvwUdg4QdC6bwWENuhiXVdTZG99ZiShC",
  "key20": "2vYapvVinHXWJWEQbycMoS4HhsRCnjW33gc9HDpFmBYpTwttZxDHaAFfKFff6gUwNRPrcBN8G4zUUhYDhQR1MCt3",
  "key21": "5N8k4qLbwCycbrzXGf62SxW8V29U9S9PztCZ2VBErSJvpPox7KafNyUbPUHxp7K3wxgaNUrEZF3E5kUGSU6jM3pr",
  "key22": "4cfPv8zgfpSEmLYueFpwhDmZ8VQhawF21GLjNBsyqWiMdzDnPzkKJHMpGLNQ2f85KcSg8RK2ZTRi7FmoGtvLUMuG",
  "key23": "4YTD1kfKtXJUELJ6wXAXBk5Z434XrLpzbi1Q9bgZXEY5WTAUR5RsVcHXfVFUvPBPvXupNG4QrCTc1y29FEdstHFg",
  "key24": "5MbKjx7QkJCPKyguZxJhhvsh6LQyS8EqkNL9cWbE8BLMWBuAtUpmRsxtE93mszY2KF8F6H9uEFtX63t7xXoboUzf",
  "key25": "2wjdGLYSYaepMmMvVyzmLCuRmHYXh6qrWiSE9ej4VoBFFFEzhM3DsCd1TSqsU36LfkqjaBuii1hXnubkg6zWZPhf",
  "key26": "5FcjkQs8xXf8o6S1EvzGafLfJRH1FG4pDMSbxAhYDiaS2ewXNzb6FRGineQA9hUFSAbgL8rFynWfS5XLiXqZerLU",
  "key27": "5WkMbfrJvNCxTsqXnEnJLGJ5nX3aePfNASM1Ws2YMENmVh3pJVKJxSRSC6w6NAgv3zNncvQcg1NS5xZP4yvQyyPo",
  "key28": "4VNek8zxjJ5BN46JvUL2FcyMdeVhjgQeqiXZGjf3SL8aP96fq4WA4e9bBDH6HQYoJZQvbD2e3rc96NqDikQyWTVU",
  "key29": "3R8K2jXF9bSkFiUTA9f7r3hf52v16M86RAVHDEC8AutG3aYES4UJhCR75Td42d7DLp2dFZ4EA8DpPhFytCjKHRug",
  "key30": "5ATG9B2f7rP4g9kB1qqP1T72ebeDfMx6YAE6iZNxDGNAKGPRVvgADgKpW4QBU8PTYTGFCdtQPshmtj3WQz684JPw",
  "key31": "4L9Z5fFPCKgpLDrWMEqAj5RwronitVrSa41pzfqBjZzKUJWPzPQm7exiE5zxGCskr8ZnrmmTk9ocUgSU9aNEBMro",
  "key32": "2eG6bKfu5CCsNz69kpHVUFJ6jCQFPisCMd9Vie7G9UmzTYiucRQTPeFmPsHShi8YWbKzhWPJeEiBQmu4rWawPrDw",
  "key33": "ETsWBjEuZhoTq5XiKm5T8y28ZDjdBViHfF9bDpk3PRfhPaTPs6MFQSu4zXJjb5sNYcuGZRiSmZx1DmWMm8KWTBf",
  "key34": "3YyBfvovwXND9BPx3EpcCfMWbEoj6aE8y5recaXDLZSDBXddaJPavXo4ELCxjhGY7rRwz2jzEiHdwcw32VwqsvPw",
  "key35": "4JTMbDN2FskUQHM3hYTR1W1s2nHyaMH7XaiFuSbRJzxsTnwo3vNJ7EVrwGAw9q8JipFGeSxuhRsQnqwFS51gs73N",
  "key36": "6sij98cG8oiMtVPGUQNR8A2QdWw8STqLUjKefmnJqpi9kWotLPPLjwZKgVa2vjX5Eeu2BVtgj6cmxCJx2RHTgdw",
  "key37": "2RDRxQfPAPyJ7n1VtZ2haPvbeHeGPGTdE6oimfpP8PNd99AYnebWEfUwb5YWPcfGZeHNT4KqPWKQBdAZXJ4unvn3",
  "key38": "5mjd4cpoqKWpZ5VTZKxmTPjafJ4fsmSDU1TYMacLQNfit4xP1UBGaudYs2SuoyWPSTh5KDkZTyn4nawjCuHbkjbA",
  "key39": "2GD8Dq4hDaydbZ2rBJoCRs7K5WYYfpQeKhZ7xCMu3LGFa6gmpystCSPy3zvj2Hr7MiEZL6EnprFBNEcoTr79UDUQ",
  "key40": "5wM8wJga4hwUYwjeqr5LdDCnCGTwRByDZph3Fz6QRLR7VehwHds85ydqDy6Bp2PwGzfe17WFQujM7Yny5cwyVeoE",
  "key41": "2XvcFhCs8n18tvFaK1aUAxg9YjYh7JFHtWAPBKPvW1i3nUz1H8thXSp96kwvRGJBucdDTP1zqBB8V6nBmGJm3AGy",
  "key42": "5GfbvbhEBSS3udSi7Rq6K3m2E1ynDCC6B1v6AZPsXLa3WCw3soSHZuu5y2cPQfompiqi6qYAC7GgTGqYUC5z9TMb",
  "key43": "3sK52F4BnLZ8znUE8t6oi94YkBkqvT3PzUQpRYewE56j48aCxjB5kzHCtu6SJjUiQHQv98CoX1hhVP82MG7agsnH",
  "key44": "o9hHk34sTBRzWecmgNj5fgHEpUqNH8p4x5nF4uiEFc5AU9kf7vneYp7mjLdu8sJrY5Yf1kMwK6tL8YdYLWMfAHB",
  "key45": "3MuRMkNfNVbZpvXY2T3wK5uRhDKfTfn6UnM3bTkq4bN7tx72xiX979iuHFFzTk2exkvkbBKGHFNZqqN1DBp1aJ3x",
  "key46": "RBkvSx7Mg6ZQ4FbgJMTGr976XUiZcNjVAd7BUYthVSGCpcgr9UZmUGzwWQQRbttH8w7XQZiqtBrfUAWR582GDBz"
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
