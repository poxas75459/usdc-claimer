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
    "4ZXYdHxYKk82bbmHcvjnmdMofkQTXy2RkivSHKKk2SGbL4FCUJnf663fdSV6XJYTz5nX2c88LDZ4R8s5iZFuPdAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B1b1ibWVAnRa3CxkTremX51bLDMfA9UjZns5FjvhgVrdSj2kX2YRKseLLEnFancTwkkrtfNHHYDpBcuj8PCXFLZ",
  "key1": "3JXAiEKPd9TN2xwjX9H9cEmWP3uhdjzj3s3WAWGgKf26WS55VL8SoT5MASgVUUAquaNShar2r1ompdVAWBcaEDid",
  "key2": "4EHaRBiZtSwapAayhWBFtq5myafcdNUAnEmzBpkx1wEChu97BbXLqJPbdXiDJpJdaWMuyP1jJRVWJqRX9tdLEum4",
  "key3": "jVsNunv1jXsugYQX8ZTC4BmqwkK7UMng8PCY48thztkym1Eza61cekiFYe4yufYtRLFfEGBYNt8hGMGZTM6Wj5y",
  "key4": "5rqwdnnK6yWcFDMv7RRti8N9gWUHtM9fEevbZqvUenh8M3hcAVzEp9F8s2FXehcPcCD8Af5T8iSZEnVN7dZ7WZbn",
  "key5": "5SBFB8GWpTX3CUom7SLL3qoAWaYgFejKDNW5DkRkz6ufwhWNtVR8nUpyZBDmP97XzRDbpRUfHc1gJcXx2Pn4vLHE",
  "key6": "2k9pFNVAsNyzacrXZJFUpipV78s5cMYCFLNLRCrXuKinYh65MGtWcRit8s8F8roqqG7z8gu49jTnfsgqYmLyYXd2",
  "key7": "3UDZQYhjZKiECwEAGhWTPGekMxEFdVnpCgvq6Vd2o3EgN7kMcCmsbNwyTivhQ18C8LvE7AT1yffw6PozEPZQJqLU",
  "key8": "4qCZLzi9hguR8WykxgwTGqakh51iutr2m1PUuDmdjo4LtFz4y7chcoW2EP273aqt4ZbKA2wsEgqGb5ube7RrzSAc",
  "key9": "2Di1o5mUmLyCQYEokxKxGMLZV2WDAdyo1Unn4jR6ZXZ8tiYy797wTxUNFH6s18TUS4882JFJa2Ysus8YTeBbEsdr",
  "key10": "4T1tHX3Mv3GCH27hC8RjmjBQ4sU5JM1MhC53uQMv8Eh5wXyuukHuHMCN9eaoJaMvgtFDQpKCuxNjyJXwCsCkWaZi",
  "key11": "3nP26XwQkyXBneNWzNyYvG29dTXkGomt8L7WqCqQXJ1wEJhxypkxtaWWVxByjUCcTqyivrhesTvoKybDyqdMMs3Z",
  "key12": "39ZR5oQBHMQNGCrnT6cqGkBdJaTV7XFMi6SixcnSZ8bHYj5Z33ZchqoAEg1QJWD5eThMTx5QyLCaZfyAaKWovnpK",
  "key13": "RbeGHA7ZUSeS9ZpMYtkBKARknDxqr4uTPXQWeG2aPwZmiw9nei7ipgyfg7q566FrQsTjs5wwDV6sT3CWwTZSSCA",
  "key14": "2GUnU8oLfnT27WGFHiVNbPp1i2NHMiUDtgp9knKJXq6W24hcRDuHd3wpK7sKqKwV4oN9XBfEFyRrgAySUpr1S4NJ",
  "key15": "46dbY1meJncMJ7LtXmVfdLzh7EXaKEP6ozDxxP51Ln4fVTTY84VqShufDYiuDmmTsmBmFy3PbNknwowuN33Eq5eP",
  "key16": "5DGMhzCTwbcoh1Suox4M1bXSoj8MkeBFyKF6w3Fogq5ksRPX6xuanFuqVffY7VNxtYE9Aq4bamSAHacCMWtFvjuk",
  "key17": "3zRddNWkvHJBoRg83WHTSVGUcreHyNpGHGpmMxsTvjPEQU6VHggb7mGaD7UgivxUiQMgthC6tjCfX6eoe5GVsaEj",
  "key18": "y43txxwVsoRjEBuci6ANqQbJqkAdEcWzxc2XdgME9nEdzSQmEbhqfX9MHniFwiKLsjt8bsh3MC9c8o2MtW5s2H9",
  "key19": "3NKip4gJEnA74BbsnasqqXS2wkvsLEieV7szkZvKdsxBfYzKKXSRZXzmBfTujBju2BfbT6KvcugqaYpiA3t9GF2o",
  "key20": "2384RbAEv3Fc4suCvE8A28cWFvYBPU56Pea7BnC4WZh867Dttw3vPkS74ydH7cm63oL4nDsGzJNaGTMFzn7pNmGY",
  "key21": "2FkaxThijNnD5wjJKi4xDMEL2JEh6tmWaFTxaymuUYKS29ZQKMjMWrN26eez6E86jVEiDqkbHHpxJk8SURF4KDG3",
  "key22": "5Q8bs9BbwoaJdzwXhf78uGi2V8v22RAfSKEfEvMd7h52m9SUuZ6gh543i9Su4PQTH2iQaoE8mAAsk5zpn7NYLiur",
  "key23": "2XuZXHzyRiNttfQb1yQ5ybvpkL7PHGJbFNGSAxC6p9xvvEZzPT7tLDWf7ZYuMR9y1pJGmzbvrLZPqj1bqPVPhaCu",
  "key24": "5tmpLw9X2A7BKqWx5impXYizQ9kSA38r1ratuCRTGpArz38rkzUDowK9Ugawid1HjNH3LHh6HrdxN7QvkVhsfai4",
  "key25": "2NDerFekMrpcQzdzyiWjqtm9KmpYEyon4dTLhjsbug9uzZYJKzAPdHeUzFaZPTdua57LshKUdGjtqUdY2BPcML6a",
  "key26": "3t3GmyzuQDZQgxxK8a4tqsEeBUfdyQ47FfMv3okbSpYuAHEMjapifAVpk4JsS9xCg3MfSKNsJSBw7dvnqfziEDyq",
  "key27": "3YPyAWFiiufrogibcHrCPcu2G56acFB6FoMYZtKTbBQAtX44v6gjbbzVKByWs7329JLJ88R6pXYosEGNrsds22fH",
  "key28": "shUSbN5xkT8nLcu8xs4CCeYXbicSQUTLvm5xGh8zu6JVpGwhoJuJnmUnrgq1dpatXDwNf4BzV6K5qxzF1fheg2U",
  "key29": "5B9C82Nn23cR32g3bQH9XETZfbNoc4Wwin9qQFVmc9vawhni6ZBYC6g2N3WEZnwHfrQiHT7bKWpsD74wLwJy1tok",
  "key30": "vJCzE9QCgWZiTc6speRuk3RY9TvxW9cHSN1x5QPwS3qLzqi1Kinq2hatc1T4mUzg184YHvTjadKWrajarNNKeA1",
  "key31": "2wksNQpYhbghfVmc8rUZua22GZQ7LjC3CK36DtTrYf8qjWocjzFUoZRsf6xowjceqy2UoPx5fNbXEE5ZpxS1nhou",
  "key32": "tPrDK25SvtyGdLUC78jCS7oN6WTGNpwtupsmsbmyb2RTgmp3bkqfn7bw75ztbdjfqqwYQnwFHzjRZyRjcYeUEW4",
  "key33": "44rbWkRh2C4JePhnPVuRavAN7LLUhAR6sVjQCj3Pbpn3KDzS9ajFsqvzZBY5XJyv3ccSeyza7M1wTC6MwBhUYmbm",
  "key34": "2RAZuDJrHq3NYAoQ9xqFcpqWCD4egh9ctUrfpLpZUsSHiHsSJXTAfLTzr2Mu3TKz6yT6Phwk9RLdcLp7mH8K3zx3",
  "key35": "RGKwTtHeRriLqzjXtY79EvbU9MRrHjWkBo9XEPNNVKWWj1MautqvgpQSSbVveuYjftWR9H7SbrnpTq6KHcur9Wj",
  "key36": "5Mmok8aLuEmh8wXR4xCvGHCSprF3mPyLrXLv6FwZmhLwPyUsmfsGENH2p9MJhgfr38dQtKmXGfgKfi1ofn5ckXDd",
  "key37": "26iXic4jERCwUPY2tLhSGYgTPg78uiBtxQx4ULR7516BjUv8EYUcokxwKujd67YbfdPJYG7Cruj26Lz7BuQ6BGhj",
  "key38": "4UEFTwcTh42ZMndz8gbXW5caD2qEypiy6y48FXzFW4aYGA5hqo77asYAJoGakggicNdR9DipijKcXikzLmQuVbmH",
  "key39": "My1GYPvKdydRpeHqVnUdoLcc9z55Bk9vadToWMScjKtUmXuisRz4EqHro6D6ZHqGEsE1EUBHBfNusE5kNunKR6N",
  "key40": "4eiKnqsU37Sp6RUTV2mikouXX9YsP73i3KrdxfPXEWKkHSTUsCm5xF1Nz3M3vzgqWUYgVUWTXkmitVuJRyjaGPdZ",
  "key41": "2JXKyG2uVwugGWky2YHDMcozYRjCAdV6VeMCXdGjUvu5qLQf1a3fBWXgc9PobMoyyHfdXgEvqdokY25sFhxn8o1g",
  "key42": "3Zv8yFZeUYXThjiZmAVsJrPAZLbvsZv5FgKVVTPhwUZaqYPNwQrrfdauaafAZjARuDB6BLfzqkMhAJd5BtYGK3o",
  "key43": "5WdsgsZhoewAk7hoyMAJtGuCBuPsyJ4npMWym23CWT8GaBXanz8UvWF4ZJCzXhdHqwyzZQ38VPxDK9uSmcW2rvLR",
  "key44": "amj2CwDzGZ8hyFiiqnucVLfdXmJFGceWcbrFM8xm5JVMzEXUSpm8rYAB6SDJW5JAqzQjRzoMgTC8AEXyhkL2aFN",
  "key45": "3tBBXNiPo8dJKt4eZykQGZodoesJ4UhEryMfBkkm4GExGGUoT7CjSyRNJkD9Ne9j1yyhJaj8vdHTaXwVJng6L74Y",
  "key46": "V4XYBZJf7875uFXdbBYM7YenjvNtMnxNxR642ZCh9FcZzd3V6UTr85j6LvdyVchiALGEV6TN2jjEgLkN9hQFbBb",
  "key47": "57zYYtQoiqWHJ9naM7UbnWRhpsY8p1oJjzvRyaBCkpP2sgsbpdubqGS6yifuBctgizcFBggbEaJgXM94pq134Xr3",
  "key48": "46NpSwUi3bRC3VA2c3umLpqqYdDxNKQBUKZuQoSoR4d4DFJE6mDHGzPU2rMVd2DZkayv66K8pReU53RPMh7cTxaw"
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
