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
    "33FKNzrK5oJqgtrtvqwWMxASwHF2opiiiL9xVLGdh2JcVCrWATcopAsr954hFfxf4hTWnb9HRSVoApN6UhsgmqYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22z8LQQhUBpRurv1iwJ6HffLgVCGo4oee3KEmwDrbTNpKryJyZS5KsCAe3GiyjXDaRFqJVveq83Si5WsYVPpq5e2",
  "key1": "5BMuT6KJ9gU59yQniPyTKjqmDTNABoZTvyhEPGDBLmQYu3fA6iasdF8fBELxcxZGvwfWYJt6axBMER3rJJYr27RN",
  "key2": "2D43NEENPgZhZcgebv6WcAJfug3cHUhUoV1mUPKfDZtjmnCVEFVC7kuzrVwJyKXfDKdTYYTVVKKFRcADwyAdLurt",
  "key3": "2aWqq1Qym1dbprjW7YvY6Su3dUu7RoZ9tdTrKQ21vPkKp6KLKuArzdASDmfn4iDWkrUo5CCrpJ1dYjqVr6Zcdsv3",
  "key4": "5ha5jk62vE71Bh7ke5JRxQGQ765tNhyBb71EEtZt72Ze4pCa8YyGxesPFzK3QhkD2oEyPD4YUoud3NoHp6gbxy71",
  "key5": "5RgpHEQkqXUzrTKaEUsTc6BHRmULEWYnAJQFo8MvZwZo1KZbdnymSYnpXPExdvgoR8JB7ihHMamnosRZ4n33aZHg",
  "key6": "pPVMTLkobXP7PjWJzWjzi764xrQ3Z9KT3KR5fx5d3FFkqZjkoqNcAZCYGovEV1QxHBmCShej36cWRxshUMVmHFK",
  "key7": "3Fjd2mrnLyv4fvLWaWmSSXc8PEXtfEV2SjYVXqtRpopL3yykfV5fijb62S9dxnWC2nSuiCTp8BU67LRZFJtJnN6f",
  "key8": "5k3EKHdnGLuh3Mb6YGc8DceE1TLzz8btasJbNwStjF1aSyBa214J24fQ8G8Uux7y5FWGYCVT9h5mJLXCM7WoTVGK",
  "key9": "678fiGLnerwXgmbpVu6XqqwtcmrietjVTLchAW8pbgdxzKEaKdM6qJy3SjzitYzLnpxBptMeKENq2dpPRSkvhCYR",
  "key10": "5VdJZMVvdztApnpNvuB86zrJoz5PqrBLBJqWZh3wqGhzzceCiodNo3nX6birLiEwE2SWPuRzsNtrRQVRzpLfeExq",
  "key11": "4f2iCEDvmhscDHRK2AvjNTfaPo8BCayH8uxinCBPWZ3zyKhzgR1D9P1aKWL4FSUyc1vBT7Ro4GrnqK1k4LU9azpE",
  "key12": "5kv9okXrHBErSa7SPjE96Sx6G6dYgbt2yCG1VbwwJy8o39yK1q5XmEce8FPgaPF6FMu9nbATF87teBYkucw17FxC",
  "key13": "4UtTjvryySu9tkQKT81Hi9TURUsv4WwxbbYg5QTZqX3rLg64XxRDzxEjUXCsReSsLEfbwC3Cu88Swd2bCG7zNuTx",
  "key14": "34te6M1dzkNtHRXD9jU5ChEpfsFYbwUof7xeHdXHR1EtGcxEuyz6wKGoZLrPXEMRmnW1QYM9hgRG1pWYphQDF4fp",
  "key15": "4hXhxHNQK6HiykvyBhBuzz1YmEwSvs9HMwqE1Fh8UxNSYfokdHqFQvAogFW9YEtNFuA9FA53PGCTAFc4De9Nb829",
  "key16": "zowWBWKWcgN2kfQesEEaiRUG478NEmqTbfu4mThTPzC7pVt1Ue6wUCrNwHVnc8xRPs78RhkQxSM66FG8TBm9LmX",
  "key17": "4UnpymjvzUo9iHmPv5HnHF4E3fhgaejyzNUaJFQh87QD69ZokEL7HvRNWvHwKSMt77Do9VwA65aiaJjDMLoFvtjS",
  "key18": "5YFxXJTE12iGQmH5dPpAfsJmtjEpn5d5aZCprFq9LLhnYbYtxetSjM8YKhT93LviEtt3cid3J3KLpHPZ8BvQaJpb",
  "key19": "5bhb5FBhnARFT6WoVTuzQGbDrmJnsF6Sg29Q5dP94NXUxHbGKCSPH5KqaJpkw428mopqi3mJrZvuA69iFLAJCKCA",
  "key20": "5ZzNx3Ehk6hmo3tDAFRPeUV2vK1YFuQ9FE1DXwAS9SQ73fsT91vWDMV5PBAv7mjAfSDM5wEbxkEgKcnFiCSzNCjb",
  "key21": "3iebegpYJF9aQU1sjxwrSjDFA1jmV1saJ9nrTpvw8YiJYbjHa2PGJP4UtxnajMPyFwiCwB73tGxLMY3EvJD1kjz7",
  "key22": "EzPLAoxinUQ3JoH64QD3PuLTNuXjvJsCh8usjJzKyMEbTiLaGWiqPWZReeQqAX8XV3igT4Axp2S8zVVkw3ZTCm6",
  "key23": "2QNWtvd6h8Tn78CAKLoZjnG5xii74EoYZtD3vAGCfMA2NPH1CMKZS8DeS6W2B23S1McBMh6TVeoSizN1L3PemCmS",
  "key24": "52exqANBeLwu3dqQBvhZpoEhJTmj1kEQwHhfZL2pFZJV7PY4Do1tRTbgSdfFuKR6T8XnVUTv9zrxF1rNjwz7zEX6",
  "key25": "LhyeqsrRyAtASJWWjNPebertyUHsSpoatAKYcYWoK29EM6UJBGj1jqY1SFEhwdZpB9PWsi1kdZdQCworXqZWMV5",
  "key26": "26q4H8pbKs1dBRWeLvUibPEEPHxiqwMqeuLmSydG2dd6HYEqAK2W7NkVKWUvPWngjjDizp48iTKmYZdwa5jRSQ9C",
  "key27": "X43EcLNhX4htLyUVBQEhtteny5SWEjGgPxGxypmeGvgowQMbdbjCVnRZfFXgErjHA6WwpM3ZKat8Mbg63YKBqaA",
  "key28": "54Y6MGu2qBtm1kvUjRmy8UCye8XHgJYQdJbacmqkWMsqK5FHvNjw1BH7e6FxZyuToVKkz7zLqjZjhY9dR3Atutrd",
  "key29": "2yCHQ7aEaoFbcCkQdGDGeBUe7taezia46WtE75FZdn77Nut8AoMEM8fZLsBotDw3vfvLLjapyv94ApwdyjEnkcac",
  "key30": "2qyw81szZ55TC19293MiLgpZLB8Uh2GMKyV5EbiYUbPct8M5md9pQqfUFyMHXJKB2dQvgKBvHP3Jdygap5xHzjh4",
  "key31": "2e8Vt5pmqV8Rb9h5wQfC7khhkZTnvkv9GGCy2WKii1F1uvaD94x4Q6R27gwLqC56sby2YaEJ2sUQSMWb5QS2pfvp",
  "key32": "5oB9kaXKxNyssgbHoNd1J2KEGdYqF2CvXnQeWma5Zy5yHstVznuakREEiestopXpGM586gZsMTXg9gHVE3NmT4Vz",
  "key33": "uQ5HC86E2VgzR5Ji2ZjP55fzzddimhg5HF2qnY9FrgjhztCNs23cTxS5dJDxG7KXHhbJbvFSyQ6CZoRrUMumStD",
  "key34": "V4Rtv1Bos5JpA6fb8FqAD5jshCXisnuMSmbSrMWxm2Ap7EwheorFUE8zsCW45QMDcRKRjfvKeWDWXhc5mvndDz7",
  "key35": "56VnXJtgJ6NgJuQNWzPXhiCBLr5EsvjHJfuJYBcW3SMKpuVmPw92QASiWUrh9BP2bsE3cUazR3YnYzwzE7vwHokE",
  "key36": "2CuzG1oftNTivRgbgM3vpAcAc8gw7acsTpBoX9HJaW8rZAdyvyyi5WMZQnrGa2sZ6CHoDciiFUcuxBPGvMFBu1fr",
  "key37": "3g8CnM7nWR6m9eVArkkzH7rmYQTDYzagBhh6mnY18oAhAMKkLUrTW6exM2F3Akjm6cArAiPwjivMMzFAh73MEW4R",
  "key38": "49XF8bGhfb6fZUCcj71mgp5cKePiG3o4L7Wz1prL9Kt5JirPbXWCAeyBmVbxvhwpySnpwG8Es9dWeLz5PhUwDCMJ",
  "key39": "5xNfpxMPzHMn2giyuEeVJwnhKB3ovaaQNsfpSZp6CiuyJyzq4nSMgQq5S5dK1koPQJCYAt3WiYBMcwqZW4xHZzPD",
  "key40": "4XHMfu2DgzYCNKzMNWej7a5kUmufLQvVStCNUEP9FEQrmaUW2T9cKPkcnDjEuNWhnD42gjXGe3xa29soprNncyW2",
  "key41": "53voqe71pGM7SEhXzYkXLqBp44cyqPgDanH3A7emZbEa1jvZ5brSNg1YVwptigcFY997vmAcKnWBZeWasJqqrFXy",
  "key42": "mozdp4ctakMrLtA9eQxfY4XWpCnL8Kh8MRmFXfPSPEJVsBKPGrzsN1nEfUQw6tZWMni7up66JzzzP9Cbq2JNbvA",
  "key43": "4UmHEnXkpMrbGqhkVJR4Zrmakgyef6coceWb6ykJ9sa8TDi3HtxqNDy6Tv6k2w74hTbXo3WKiRKVZasG81fW5bZ3"
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
