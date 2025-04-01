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
    "2v2SHYKXsLyyF2xvRDYW46gQNPmzn9DFuRBaibE1pTzK3zZ8F4TY5vaHnvCvbqxJdeicPLg71bbnahVGq3SqeT3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xt1Qpx1SUQaCKH3wAhbkEHeXBr1kBgCDuTYhXAcNyswMKU6p22Rttt4AiinaP3RCaCGdQLRt8cDaSK9hZ1DsdvN",
  "key1": "5dMN3rno1RyQ3Hap1nCW2Cv4P9x2GK8i1dtdqAzk5fksDEQNGxJpfbgxjs2GimfXe7ryzJSn8G7pMQgYYAjfoX8G",
  "key2": "27PC1P9B18atLqozFjQypnSdJsGnYTrKDxStBi7pRRMinG3m1FoPmsLpWAKirXpMyAmrwpi5caCn7EyUYWzsVvTD",
  "key3": "5heiQgSqXSteq9xkJMFxBgkM9ypD1h2tM77GmPPvopmHhC34S7n6pFdJtynzr43KMrCiCP1N3ZeziuDJgD3QReYw",
  "key4": "5QPjWMPgtwtdLieFHhSAzKT2fpZEZPQV8GKLKpFUa7i76TqTRweCdPQBYfbueB7ewWCZ7GWq295xy3JiKydEFWnM",
  "key5": "5Xm1We17CAQMDdGF4wDe8KC88g8Q24dtRcPbcN98W4gooe4RZU23uvdpNc8LJ6yDcWshH83Se5mh2CYMGBiKtqL7",
  "key6": "5x6MfkgeUFgiHL3T3QTuWvFzAUC9dUvcu9V9L1EQNVa7Fdf7DvgeYptBLEqq6ws2w6Xvjy1CsBbTs6PApgjPuMxw",
  "key7": "DUTuqq7dLnnQd92bn55zxLgJXvVwfHUXiXRkGtrU3edm9B8onxCgtE6FgK9M46z2d45myYX1Faf19FnvviqzbMa",
  "key8": "5nKoiaKtdvWdfhCqK2yBSERymkRPCQuimiF5r6WD8Nq7biC52HyxQLY6AYUACSSyygqvh1DeC82MRyoxC4x7YM8s",
  "key9": "8DrvcZAbvyCj33ugYPPhZEwXDb4Vujd9bTBhMcWs1gCpuxYg4cfEk1Q9CPQNzjBt6943xHHhT3aJusf242kvfvp",
  "key10": "5HuFAVAKm1pYnMCmxucqQPETVkJYJM1j2BJUMdQHUUnj7XaGdRtGspQY64Nc5Fmy2pXGXK8CiNWEBWg6xExHepd",
  "key11": "5y843vaHeVTneWndAaBaSU5P7bnQ8qZcfXHcwXScrBdLDYf8EqXuBbsd1HyfVTxAxdwuXavfMpjqiqpVQEzeNf1X",
  "key12": "5iYbsdaZZXsRrUqSH6DAnjVREsvn4JWVeaZXgKzTwsg4GwJ2x1L5gzg6VrXzCPjpJpRSJy1N8bDtyVxv2qhoqdDT",
  "key13": "3x7mb57GU6t8rtAHcSEvVtPCM2fp5NrgEwbNuPDTqWC8cU8VCdrH9DrEFFKTXQ3Dznsb2bQqYPqUqWFT7oo6Zcsn",
  "key14": "4tx91BSeSeVHyFUonVbS9fLVXdqiUuFrjjnkq2JxcHRddSR4QTQ5eaSyNdC3puSxtzFMYN1EiEPPGPQit3NeLcRj",
  "key15": "3hsWsEwMn5HYxcq43CFndY6BXZTXpdSkZA18BkXpuTGaGiqstPCM8L6mTfnza8shSL3C8uRvSkWw4LX2H12hq1JD",
  "key16": "jfJ9aj5Ao6JW58mBWLiam7EKrJgTPZYAXq41pf1YoTTTuhRe7KiWiqoZWNZcBRjH3fyptJp4p2BLjRhm8RmozVa",
  "key17": "4fATxoqtXw7tPbXTEEFWVfQZCAUmm82i3Rs13m9FZ9P7r6LsQz7Aeo4YZGKEMKz4jjaJoRJDCxANWF4SD7FZtNaB",
  "key18": "21qSM9YzdctgJzXYgEz3mrARttN66NPDVPZ8xjhZVJkPBgvHaPuCh9Gu3YCzkeQXAxrScFderwRPHzYM3VQJBL7K",
  "key19": "AmptPnHLM7mhRmc2Fmi7deUGDqzzKmJCHMjcDGwvgeRwEZ8FGnG3vvCKB1sy4mKh1ZasWjx9h5HuSfbvLcaS112",
  "key20": "VgdMwUWKoD78XHfwp4Tijsv9W3Jhhj67SZMWa6XGwDn7SDQBb9s4Q9WxtqrnFbHFKUED5cYbHaxLgW4L5q5U8Ko",
  "key21": "Max5CCyBE6rrA7GYxRSGnWcXuKe64jZ2i2qkKhPAdGJz54y4MCeF8sEnTrqZCYcfRMi9z8hhxMMXbURVRnoKroS",
  "key22": "3mHBLEwhdm2kJxAMkPV2E22HqYUydstmpvF32bGZXhKvmRGRW9t8DGeNQjHW6ZAqHPbdj5a4VysaRC9rAAdaw416",
  "key23": "3xkWKtYnLUxxZ3RkUpMsBe7EyViMJBUB2Ce5mtqkSYWNy3vGVcoSbMTVibPWaw86HfszZW3Vr26e1EriLTY6wF39",
  "key24": "5J3K7iVzbMNSM2E4CaVKZrP1QBXV97irxeYXUGJMJg6BizozdphREXhknBU3aeZXJ6JMgBMnpZQcsrhMTknin1dW",
  "key25": "4cAdFMkmRmi83FWC75N6jdXduJNDphbWQ6tJ3nvRapcRyVQzFF15RFNT8Mp25CDATkCdyAcn8hg1yeEzBeAYMQUA",
  "key26": "fBXs62Q3zfGduL1fodLFtKRtMAWZGfaBjUjo1nof3FA1d4yTufwiVM3crMtbDqkhg5AR5yQBSDuKmL3EWxwaPNE",
  "key27": "2CjV2YC45RzXG344vo1deokfFyRWb7m4xFnwyTKbrHQuMWmQ3Qo2UzHdDdypqURa26nvruU8J4Yexs9BqkaK18AZ",
  "key28": "2yBPfMkZ9iTGpf3PHQfERiggM2PjEPgw8g1ozbu4nA8xxvqgZDzfhg3KHLg3QMQzkxw3G9sFt79jf9pHJgmVEkou",
  "key29": "245PSfSXEB9yjipPcPENMZhksF7UVjX25NyC1kkwkWpDQNK6jxJaTHvLr7nTKyJFuMYXQSS4V9mPQCQM7ERD8vyE",
  "key30": "nQw7jXEfKFuNn5GRq5ZqojHHg4bdwPSB2zJLkYBbdwup4f7psp31zm8k8RTPEjP6HGEU2zkx3JAJ8UeU3mb1XnE",
  "key31": "3VqRjScX4T5udzfzb9ToS7ZUan7L3zaEX2Eowz7AYdeRvJ5kgqJG3Kauvy9QoLemKAf3AMZe8qYvEgitYuztQRhn",
  "key32": "4SZh4pB2e5QVqYMhk7sxVFJEDnYJ7X2VrBNC971pb9sRJGSRzLrDS1MqJ85BCk3D2UvKrDRV5V5wdgJoeq3J211s",
  "key33": "3C6gjmawFbxVMaHmiyLM1zYQRBaZzZ9YUoovFuYfUpr6Ct4xnxPP7bZjc2nLj6fZGUTedkLvurSMYYM1icb9YNEy",
  "key34": "5RihGbtDZeMhkCV5Ycy1zMr93Q2GcsuTF8eW39LDKGfHd8zP5J9Hup2gnpdkjKcLgyoVipKz5pqudD1Eb8688e6d",
  "key35": "3r1Jprjd4LvBVa2jjAKaCg6pSiPWmML7AGfXSY23UUy2xTvrt9vHs4i2QNJ32bzUjWXWqzzYZUk81B3WDSHBfkgZ",
  "key36": "4t4x2z9YamrPaHdiKN3j1yujUcAJ2Wo2d6d455kpah4bZiBwnRn8ESipJa9QBcqNK2GPuqD9p8ejqeTVX19JGvJB",
  "key37": "UpqDw4rWZGuR8UmxbUKvJ9kURiTr7AfppRYFmayVbJU7WhvuUm19AtKpHZijUSt9GAUkFbao5RxJ9fiwe4UmMrT",
  "key38": "PRv2JiWQibw23Puzbj2i1xAain3bfi6qoE1nGNdmFkZVFVkHAc5NRGcCbTNisvhxx8U4cPbigU8mkPdadX2NWKA",
  "key39": "3wNw8sF5YgwvK8VtN2q8ABKjAcNdMo4pkUaivawSXp1LG2Eowjak1pyQ1vxwQyp1FXeUNmLMiqzkVtJJM34jNMLJ",
  "key40": "4rJWbu7YJiCXcXaZMtFmWw5g9cHuziwNtY6E5oGQPuFo3NuYzRYgFXUQ3kUMsjytCVQBGXRzMt9RuTckJqUWbC5J",
  "key41": "392HrGaiKg9dHapxPFUCJdaVRpfDyiwSzCgE4Kj6iRsyYwhhekN5S4dYdLwFstYM34cvWJLrwwi6igPJgKGwFZYD",
  "key42": "d8ooVDms3m3CTZKBneRmtMHQt8MCoKQXXj56u9SchcMS8h4jXzWncPNtsqzzVtYhgiT3XRCwDHbEfeuXmYzQ3JU",
  "key43": "466yjQzarPuK5FCGC2aFbTXqi58BXtdcHDEfNMWFb4CLr4oo59TowgL3e5Bk3bcBZZmwd8kjRXzyXMJhkswNhguC",
  "key44": "2vDHWzkEJ2RaVehWSvc2qLzxQTSst9DvU8dFJmfBHhkLtuKkxU479iQntkxvfsNrieQLHahghtiP7fqzCWfUXEvV",
  "key45": "35T43ToAcStz4qzQr2BxnzAEdy9nyEqkKjPwQ9qmybV1wBz5gAK3kCSSkWCPe9mRXyA7msRQZ9odCDXqqMgiJ35f",
  "key46": "3NT7sdqiUDxpGVPFCN2ZBZpgRKNFTjs7nze1y1gwzt4Uy21cfRMBpMGNw28erZMxftjqxQADPrdosB8Qi3h6abQ4"
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
