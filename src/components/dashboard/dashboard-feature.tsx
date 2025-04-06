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
    "3Roq41JyZtMHjMoscmh4ES2jJFxrLWvoD2oJRv7ZRSYporeoMBeahpJNnQFEPFUCJt2nkibFhobayu8roEBvTr7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rfRG6n2L5RsTDRKDT9jVszMiUG4L4aZSgJMhEnerVBLkBYzm2fTN8WesbEtC5AGn9EEETGQfhT57bKStytNgSYg",
  "key1": "5b8pfKqPkvn5kPqR32UGG9VJ4fEXJXPNpdiNypTu5ebyDmYC2zgMmbfc2mvWKaDwAKnua645P9xCj5EVcH6QV2aF",
  "key2": "g2drDVNcNABCDFieG8tDu2py1JbzDeJsr9zuR1rNLULMPYTZs9QMvRc3jXjyNcCscvtcCXCs2dCfB86HBc5oKUV",
  "key3": "hR8vLu3ky76se1zVLfUxSBgKkXaxTDHvdFKdtLpj8gwcJ7Ah7i2tekD7CJNfsoVW5vw8sjPU3oNuYaAJ56tNzPA",
  "key4": "2RcVmjvBkRrFnPh8ta4xF2euvqBfnsZUq1jyrWHw2yn97A1bwzBHz99tcARdRAp2sJ8D2kemDRNtbKEtyoGKwiYF",
  "key5": "3VY8kDuPwx2LXXn2KndFUBGwZG6UeJYupg9E94cUuizL6KNrECgSzRrZ6MJ2LTxFtiKzfd7pjP2zN7S4FEQK9hBL",
  "key6": "4Ta35oTpreUGxzXRVFigxo38ZSYNdmWZCE5PBxNtGvPXqppJawR5fKxRCw7z5iyDLwsu9NAHgBD55xF5dWAaSJiA",
  "key7": "4mfsWQwmC9ZkWgSXSiKvFsDZf9yawLxH9A5Ev7tycNqp3VHXfwpurUV5XpgXUN6go3faVbMRZayMKDzooP8GNCTx",
  "key8": "5g6y1Cx15Q3vADiE24dqszAccd4WqaRB4dspm9fu4mahm8PGkWu5AU4sJc2TL5us8gcwSegE3gtGPQBcmLmVBXvH",
  "key9": "DLja8wY93cWBxJHQAMmKeuXnjrs3Cpb32QiKUUoxiWFuvajaLZFfCwUen1smWySxmnYoYG1mpp5zhciUjFaNuMU",
  "key10": "2yWAoinsHScANb95onFGtkXwZqQUB6wxCNqYXu7d2YaUuuSxfEGCtmamxWkAV2GykR7F2wVLM6ZDpPkFavzjJGGx",
  "key11": "27QPpwZnbD7k56HF4p8fuvTejArX61vfNRFhkmKUCHj8Y9b3MqPDrmpi3va2bRxrSoKURjZGtim96UZDfm4YrfXi",
  "key12": "5wZr53gu1ygAAGSwwvNGiok4BaEzFtxajPuzLnY1upqyUuemVt2dpoKyoymz2WMU7MNytEsyM4XQeocp73Yczi76",
  "key13": "2JGhKZ8XAHcsi33TZEFURoCwq6jNrj2ZM97y2witxKXCyxuoABLzV6GFdqmhbhovYDB8b66REiN5cX4gYqWPcurz",
  "key14": "4sGedhzR1KJzFbEC58WMvgtUrhbQ6mNWnVChVYZFAtWTHzAhCq6HsNCtLyDB4d4sgCkMGwQqcS6ge8NJ2PefyZ8P",
  "key15": "3ov2TkpS1Zdu2ogx5gDsAfXoEMDyrMs2CwJCuqgM9zwEUCcExJ74xny9ptX2N3jCin5dMzW2kiYFzYfZwtiFvzre",
  "key16": "yfEBZxTthLiFZPANRShrXATdiAP5M6fTQq5c2frBTrdPYGnmpXhpbrdsCRUNPSXH4tMy4PHWXmY47GfKNTirgbf",
  "key17": "4kc4v4zQUcy5hKWSAVEvZ3SzeefCtSzXTyLP77kgg9DdZTyiXYQ2ym5XXxKXFdML5DWt14GuzoA6jLsxfqmDrDuJ",
  "key18": "4jnF3HEgUkH1VAdaZJgHNAYYtEGibejbAmyGpePtowUw9J52B1nn6ENEcir75e2QM66GAb2NMGDyR1H1uBcK5PGt",
  "key19": "21AL33P7puM7C8DpePVJg7PhTRJ6ifSBYeR7jkWoQbAhDdCMt2br99gfe5WVGRSzHrxBFMtmDbQdFFAeMAnWzSbu",
  "key20": "5qeDvrBbfmtbMEbRaaCrcJSJZYU57j1ykEeXDduiaUccFc8brSS6vDkJ7YB86vvS2jUGLPrSrw9KxACjYPgRA5k",
  "key21": "2ZXy5DNw7X36v2jHCUp6dhueFAV6CeTNyoqsFDLMXiu7sNgiu9HWyLhGRhrWTq6wqtB3dZyzVjmYoX9iFiRMSfDx",
  "key22": "3fKNAffB1YTyPp3UwmwAKuWQ3V6cyphUQTmUmGLqRqy9LJ5Q6YYXmpDMLLwc3wYsp1E2z6zwFy5mcwz5G8sSGs29",
  "key23": "2qYDHyyqCyAwxTH6tCEBaUTcKdikkMjzv9RWmHZ2yur8QDQ7F9g8yLWEZSHCRNExdDDGQFJqbvahorDpdyyomhm3",
  "key24": "2ek6Cfg8CPwTuUbNyDzuAwetzuVxG1Qkd6U6khD3JQYKgNdMKSvuAiQymH6LrKp37cBWgG4HtGJsc6tctLZEXg7B",
  "key25": "2gyjQ4cvUHzdsBa2sy2rogpguNrbUn3Q5J3UuHfWzeCGFdXxchHi2zGSdyqjmWVti7KSFMH2Nsvff7cQAtwdo624"
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
