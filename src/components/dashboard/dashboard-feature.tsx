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
    "62qeoCqeR7B9nRVxPK8E4gSdu3UBeyegdv998VPzg9Fvc7b8QjEBMTkEgr5qEvmRXTgvNcCy41cJEJMCb1c1u3Tk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RmJ5og3TKQn5WepeE8XNxviJrxk5w6RXWrwwfqnjweahThxzpQJzXTSa3GbWqBmG6qXDp4xkAkqvM19CB6RZtQP",
  "key1": "3sigAP92WLJjxawXzHPZD9kKEDaNKwmStPFyuGNs2PCJSw2NaB2HrhrghC1UF297UvpnTQRNS62FFPb8gfDHKc11",
  "key2": "3C3yWH8Z1qpvFBYV165VNEuX3bc3rTQC8PgdwT7dBsR6gY4a4JCAMP7Z9fyYNQ3MyT25sJqNmrwvFKsCoxiM5rMo",
  "key3": "4uk5pjapCbZazYT7knasm7RpaT81KUdG17AUNwp2GE92JeU9edDhkGFrcaMn9ttzcCMYE2fUqes7rE4KhXeN4zbc",
  "key4": "22DDcjcaxJwqTRTvtiREgssKpE4718KMrQzDvHy9B2aiJhermFUJ18PqEFA47DUx8AmGTFcWRTTjuzN1GtcZEW2U",
  "key5": "4MJd4F6q8yyWdcTTACh4SrYxmaq45y5SJ1tt3zZhZhyLaSWx1Wm1xCikvGcyJXav9rK7to79zXg4r1wtBRLGmNcw",
  "key6": "5MqqDxEUdQthsnffQHYr1VnDXeLPV63g4tfMRk93xYAHWwufMv2nVVe75BGiBGN2ejzfMGWnt288fJtV7sBYAtN6",
  "key7": "2yvZp4k8798J16hbQnJHYuKTWEXPtjQw7BMvgBcFENsKyeB2TK3scXCrvHM1igugZkVcL6Xist3Ldyi6uE1Sxt2z",
  "key8": "KTmNibhZYLj87C61qA7sJofR8VGeKdmtchc2xSMnvd7Y9SacCz2iuQaMWXs6M4ovezhr7F6yHGgYGuww1aHA8u4",
  "key9": "4N6sd6H6oNikWC1fgMtHTja4eQJjGmttisGDk5gtLj7L8m1CrZ2Lhnh1sd3vuFxHejr9ZCwzTTwcHYFXCyxcFsJv",
  "key10": "3s3LLMJqryRTFVtkzniGTSKyxxX7NKmqwDWvgHYurKvoroFb6ZzuiWQMPFHjFBBdL6G4ih7BLZZ26vwW58iFqYU3",
  "key11": "dYL5bE6UDwLMi2i6S57hWPhwaUK4mhtSQmSUEBfMctWCFjfYWexbKYLpSBzy2ULLaBEZ8Fnh2UweQEiDz2hZLKe",
  "key12": "4zXfhTMQ6zxMqsNhKbJSihtff23HvRQH5WJkkxPW25TzwE1Gv168J3DJCsXrsNsdb6ovCmJ7X7Yt4AWndVMrSpYf",
  "key13": "sCX6Eg6t8rwsJ7cZf8mJBpHRXuygXLxayuim37nXHi6hvyhmm3RJH3qTZntvGgMT32KSXw5xNw2BcRMBUnM37d9",
  "key14": "CVbbT7eMA6MfVYsHFftEguMZbJzGuUxd32xwtEjFeZHhWWvEU4P9Sbq1mRz1g7amudM8sJ9YxmcKaNYS45gVY6X",
  "key15": "3TNWSL7PBn9kCxTjhLQ3oUn8Y33hyBEptmVyk685cAwSZECp6BrWtEdznaSaDHKFMLpMp43jaTjU1e3dFWts2fU5",
  "key16": "3thsGGZRVTcVrixue2zvtSG5q66kQqFTyuokAQZmD8759Xapcje5LPCNZxQ18fkWHFeTPfJNzc4Z5fF622HtChL8",
  "key17": "2TmhMRgumHe839TUDC27fu6KHjDPGvUkg78pKytiuMicNvSSuzeWLZN431uFHyrqbSacaZVuu1dUPKbjPb9QqTSV",
  "key18": "27pqEcPGNpZ2sNLZHyxKbADrpfjigS6z79jLRHiprdnogWUpkbWJMEJ2BvqSJp7Lf8DaHvQN4sY9WAYutpKxJjd8",
  "key19": "5VvR1ApHJUkphCfxRNtj2objYE8LCj2jWUcvv6gMkzvb5Qt9KwDC4N7kJm4SKAjeUeD8kX2XkmDs8LuqKLch3eXR",
  "key20": "5CeUB3CMfznFLtTUBXvHnw4HAHmAiKKnhQnW71SwpbNE2zQfT4qqVDfGV6ic64KL5XCZavxkUoYuVrzei5iJ2h5k",
  "key21": "4LhwCdDYoBTwrA4D9APmAkSAE4NnQSvU4DkxnkPEc8B5pmTgF418UGA6EEAPmrY2GAioh7AJeCDLMM1wDzXte1w8",
  "key22": "XB5tcBboXStts7mYJBkdvafEg4u5W8JpxTH1rq6He9xa5iH1vWAu5UV4PmcKR2jrLWopnSMJ8JUKf6B7TNoDWNk",
  "key23": "2PZwwKXEXmTffggj3i4UWELkXCJGvUDmvsZyCrMkGgtEkFoo8HxdExbLsxuuhzUnPwyTNe8GdyJk3AQmyt3FRHjc",
  "key24": "52yUMDx8mz9P3Cm6oe8hCKokvmtePEr2UDxsX1diEjmzCLt1XfrRHe2Zp2FzY9WZvNYTCAW3J2ZnCTSAmT4zWYUv",
  "key25": "3dUKLCKJpuDe4u9QVyvM2tgAPfLLfVMMgXaybkfgPCnHiqrewmcHVTDUKu1CZE6x9h1TFtqgnzSJ6fhycPMvpp6u",
  "key26": "PG6ErjEoMco3UXNvf17c7ThSXBFfjVHaYuUnpHNcHz5apLRzNjRFrKFhDUr2mVsFpBCuWS36ojpCcTasxNJqPeZ",
  "key27": "5RTfNbL5xtzwZsVGAjoSwA2TUBrvcvHKyYzN3aiCJF2AX2LqVifW5rmA8K5Dp9PdQpTU6H62MhhTwW1NF3o8oKot",
  "key28": "4n2ZXCaBMih4kigjJty4TjmJXHP1LqYAv7izDMAc2oZzMpZFrK8fFR1mbiAmU9PfMRgAYZRrmRTct9pNXYtpa71B",
  "key29": "4aG42xpFr7XPkyGr5BprzYYd5rfPmURYr1iMwGjWHu621eKSUJBkzv3YaXVkzZ4q8iMEvi85J2e2U6idWPDQZ2xN",
  "key30": "3h6McSghzjpRJvd4RZEfGyDvvA8qxcudJhBTcaD3XHmKtuxcQr6r4fjc2M39kFGViiFMTpUUHX9xGwzexAVoBKop",
  "key31": "YA54pwr5BNdHBw5GZ3jkjcVLX1kokLwYLNfhMzboz8Jr2Q4nGuC5fKyirxMGXBzw7QkdtmqyV3pEWkybd7AAe41",
  "key32": "4CfkggtX2P7DYGsJxSNNEi7DosZfKc7QiSzcnq8LeD1LkTPeteNX4CNswja6bgEVNrByjzu3KXz23mCw4PYEcJxo",
  "key33": "CBjUARws8onLkdXvt2Wf9zCFCasonAqAKFB2cYcfccc5CUQ2E85kFP8kxwfHcfzkFvyWazg85o3ZfxwBpNcnPbV",
  "key34": "5CbsUYuPmZv19rxw7tbTMxQmEbj8A8fUrc63UXgRdBH8WD92BMMJovcW2MxSEwPfe1Y2PLSrmd9H9hKLsjFPyvXa",
  "key35": "5wvJ6xVoU5oyxG7NzCiTbvtrH7t33EHLLNStnEEFrMmyPpJPPrZhTnjmhEKodU84KG8nRtdgfKumczTR36GKXbu3",
  "key36": "2XF9z5FiAZohfzRG1GT5hCNtKjsz139oaJXCfsM7rWwvhjbC6C3auU4oYw65gQrxsQv9HaQLZtswxrDehwo1zTBh",
  "key37": "4b7GE7vB5X36gfCskt8xPaufm7Uyj2vs63KRErmaUrNXtQkDTdZ59tpowCoTWRro8R5EXq1TCz4bFUKszc11DPpq",
  "key38": "4PKtEh6ZkW2AxrCzGmad3aSx5aBzQmQ2Cej7Zwe1BodwtZaok2hrgSmDhmxbUYZUS2Rx9ydnATS6qUbqshkMUca9",
  "key39": "54HEiUGZ3KVwdct1P8ivM3iehXDkNhQGH4wZAfnh3vTAWHQ45VDwv5TRFH8DEEGx94kUq7cRsCUTtV9DTNFJeJ5C",
  "key40": "2QrbzB5QS7M8U5bx1vAphHa8EDpivdjvRSd5HHdHPjjMMZN16QwPxcwSugrz4AWNTUCm3bcdFprEeAuc4pBDfxLS",
  "key41": "3atEH5Dk57ewPXnNokcvCxrHzKet5fsDTAz45A77tZvTQApzRQse4GEchmTeq774pQxvZac6uhSZ58sDhHvunWwD",
  "key42": "3ZKCfNUEiX8SdJWe2APH5Ns5eXa7TuVxsdcaPz9f4bGRLQtKPz2juenZYBz3YFHjvfVPbgD2EPesR31BLzmJXXiQ",
  "key43": "49maj8pNDpkbdTLeVxM5kzVie2d8C7T2XUPwRVhZp7hRX33ZcjRXChQF3RWrpzrbfpRckpoe93uuWwpuc3kvotFV",
  "key44": "24mnZNjsgw4oPeJKKDW7YPNCpJXhaCzatdogR79SieSYSL126ahimvAN77E7YSBi66tdJB52Ey4n8imdjJhmDh5R",
  "key45": "EHJoG6FkZvsS98H2y2iWm3Xf4MLsmcS3Tvf8YbXshZTW372YEwRQKA8MDHNS7sjkn59RueyRqxvKttsHQLghuKi",
  "key46": "pDTpFfWd6QhvAf6V3whaR925fxbdkGw9jh3vL3UcWZzEcZNXAqSKVUampLWfTyTBEXHKMV55pRqiZVnmE3PTVgV",
  "key47": "5pSPwBC1WYv5QtmsXmnDU2YXxzmhhSJwS4kx7CW2YqG1tdZYkyjuo37mwPorpUwGvUHc4DCK3wUY63QSzSznB93U",
  "key48": "53G1z6AXgLX9Qv8aNzTN7Co6bRELybJdE2YDteAyNqbAXZQfAnPVoav4BypCftkSPvRdoFARobCA7krYEZWdjzHq"
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
