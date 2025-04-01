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
    "5vVs32Z5URLTaHkjoJzekJVtNsa8ZACTibzou7pRFQU2hNnKzHsL1QJGyKcdxi6LAWgUmneeHPYtFcS3WpLZ4D6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kkFob9Xf2NorMEPNbdYtsLoh2ynRJeJrabKiC827MrzWMfR2j2nuV4RTK6qh9QyWwYM3isJiQV3mxDXRkaWMjox",
  "key1": "5juCHxn2GPZXb488KUxWAjPyEgWrdy6xPvCWx8FHHGkBvss68P75Gv1UeU7GQPXeqZK6cm9AeD7mMZLnK2qS18VB",
  "key2": "49pfr39VFd6bgqn66phPDnxYDzmRXL8mGiVaBVDbgc2YWpRuciqkSwFapaDgYtzS5ykWUAFjygmjRTTmWv3HQ8AB",
  "key3": "2VLryP9sPWcTUw9FYVCDPvBpkeJMMgKqAwLtnW69nM3DSTHC1mBpRWQfbCmMGRptvQbv8NKAh6we6Qv5GTXMocjv",
  "key4": "4w23FQw8wBPAjVdsg89N2bVqNjX11gGFwr4VHJ5WQG1beEWzwD15p5bf8oREMdawdB2SKFuEaDaB6MTS4fAGJdYH",
  "key5": "5zZ8YzQ96ArFM9mZumWjfwDvxbg3nfvzeG1Jjk6Jj2UKpo9T5eQsm2oxdBWj5UBcfho1pvXq3zEP5n2HVQWwSsYy",
  "key6": "4xaAxQ1GQwbwky1Ade3nmR7skcmBsD8D44e8Kv928NPCL2tx8PMFAWMoeF5BfRCxyNJ962wQdQmjpfuuxpMFmELu",
  "key7": "4QdAFMdvQYBaiGi7A4x2aS1By54Ckp8ddhMFh39bpwm1QysRb9khLBkLLLpgXXpYYMeGUvYhEFk7SXjyLC7aBsAE",
  "key8": "vmwBhPMx2ZqjEY1JbALeN6a751sPndsPCynX7dQqMkySzi8mmtGqPMuF8hf1fRqyW4rWyWypWp55DHeXS73fUe3",
  "key9": "5wCUsBiRLD9P7Ys5fm47cwfb21eCqDXs2KUA7R2cGYNWK1yvipExyjavinPVcF2nYX937SXYW1mLU446CdzqeX5N",
  "key10": "5VaxTKmDXRKwQWcNExRqyiTDYmYDXbHVrdf39dAVtUeA95T5J2kJJvhkhwDNdyaxrowNgXFXh7uBRpJnBGzSpY75",
  "key11": "4N8d24qtxhX3yyU51zjpHUeJYjtCHMmnmdkxzbFNpGD5XjoCkzqiqAgVH91dg8nZFzYDGQL8jcMgfa4NzcDWdLp4",
  "key12": "TiFEqRySyZmN21xBoFewfkHs56Ypd5Vh8W1bJsvCQT9aBXgLgoMrRm4cyQmP1Esroz6V3thoBLTG5R1eQSkjx5b",
  "key13": "2feZmZ9yXPWkzmuTMA5GYp5abFE38CZ49kPMrPjNeEbgbQCMx3YFEvbQ7njfwZWx48ctZpksZVqR1E29MMuJoNvL",
  "key14": "NFLoy6mm8TKux2yWP3AyG3U3UUn3acni6Ps4ncHwXDM7rknudmuGwg75tS7eT31mDrUwRFUuy8fuvNJzrdUj8mV",
  "key15": "25AtNCzNf2inpPJnHeiZhtsXfF2iFigD2gUjmVoTPZRA6N5TrbqeNYsNGS61TkPcmCQStZs88roAHB4iAsayPozC",
  "key16": "5rHj9ZuKcvb7G82swrAj1Jw1h7ExkVgwR17kuugdeHCxKq3pzzLJGzHBhMoT9oogQvcTHDPfZrNM2JwWm68JNEL",
  "key17": "53yrVnsXRa2YCXN1475yhHthBY1C66J3nUZHqGEfc1Eac3gtZqDaK71SxopWV3p8BdyvjgbpneZpkY3yXYBj825o",
  "key18": "62X2j4p94h6TQgURxRgHr12L77Ed24QDNxj6zHcrnBd9HwqQ2X8TmQBfHQ5XMmT4z8ZyqPc36jk3Lnm3UVyaYbaq",
  "key19": "KZ9bisFAnFJy54aNpBmZ7PurdZonzcgCJ8w7GvCar7TQi1w2Fs36T8apUuqt3QowLr97dgQGofJwLQ11xEFua4v",
  "key20": "d9tHQZ7x8DSkptm1dyyc2JBJWz1GpchZDoryeo4yrMn3mRnQi1MzaJmZ7u8RBQPAnrKXvLsGD5LKyWfnBu49RkG",
  "key21": "5yYtusbnukNERc4EMhTcPJ1UMQrefyxHLgHx7EwNN6nmUB7N4FuFs1QjHeAn7r3Fbx2Jh7KBGY4dE7B4S1X8woxn",
  "key22": "4EiqAuAjn48y8hzHo14ioYfDPX7mhMzUo9ztq39zkws7NoyEEEiDeUbS13kZsDwSG9Uq8vnnMUcQrFYFeZmoBy56",
  "key23": "224kv9LHMcprciwP1SUAo3UWK2RYhz3YwqEARqtLfTRhEopajU38qqjoogHrsM5swuwB6XnBLBVQkLkKaiCoPHPh",
  "key24": "3V3XaCR9WBrqWiUEp6hX1smVRj8PAhFsB4rYZ1D3sGHQyawJgU9Ucbhe2X1p8ioBmmQSCBbpj2p8ptfPtczQQFhN",
  "key25": "65VcksjaK8jAQ5qbqwpqv7c6Tj5hPhhCUyNz5So8MZt42GeRtR2kZQ756MgHqarFitE83tFcavh8K2Xv374SBzts",
  "key26": "28sFkvFREt6SAWHKdKLiWqWYk9GnJYBB1d24yWR6SNncLXK5fCYLdhsreoXXZTzkjQFnCfYzg2ucN58KjnMrHduB"
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
