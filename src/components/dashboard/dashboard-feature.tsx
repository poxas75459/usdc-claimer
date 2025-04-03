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
    "2wterePV2cDZo7zJJHNEH8QrxMasDb9RbBHc3WPew1BHp4yDfaqAcqStGf5ofN6PpLuDTKZRsD6PU9Ec36HJAZCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66qmuEAA9dgf43rMqFTfzvgZE6GxDTGf6icSF1nWoj36CRSs1QPoiApyEHd2MtdK7qfqvBB7t7JMLj4zNny2hKBW",
  "key1": "4oecnPF8QDwqk3uTLksJxkRCSbTtkGCtAVpy8kzg73VoZAWVEGZ6Dd6viWyBRBnQh3jG3erXW1ZEbAGw4U68N2cg",
  "key2": "KmF2RRBGsHU5GXnW4b4N5HgJTwb5BS1CLkH3o8s89Nshu928ZBSwAep6WvNztZ4vkesaVzZrjMkj6d8L6TJXMRc",
  "key3": "2yDJiAxy66kFxiQVxZoaqhbE38yneHwTP4iV4e5sEPrCEBCYrV9CBvhQSVhU3pHd5eV7Br25HXLov2Voa3hdQfEA",
  "key4": "4waovLnXpMYn1nhHoH3SadgA2zcBGyCr5fAMf5Ea1DRXmF4HmoQfwXkxfKyqUJZJbheFpzfMAVMp9auS9p42sxES",
  "key5": "36VAVT78wpzh9qGHtr74qjzzjQVPW1YojhMtxiXUhdctCTjXPCwTQyVAAR684Hc77UP8RRHU3NizJ2uieQwPjafX",
  "key6": "3fPi2L2U94nmtrmrCvzmyWY4qdtEC1VU4ihSphjdYoQbQ9PsvE93JQheGPRQFrup5mazb5n1CQjSdwh6GszAkYQX",
  "key7": "5BwS7Y3bEPBNJdMDQ53ghoDwvPMF4xgY6e2bFC8GvykWC5NJbFhBVqouLu3kn8eMmaitY1Nw7QJNqPeaadNxKYnd",
  "key8": "5o54ikt58w6QR71ScENsXSsPaJs9j74ZGJfsBBnckSSpVFf5XzrxGg2UZryLWLFzJusiUD99rri6s2BVTfHrxdjM",
  "key9": "42SYc1Wd1eEosPjFPgMUoxrGby9eKErTd7dSZEw9Yx8anf6ksvTnhybm7U58ZsbXXPW14XWchKh5ydy75fqZSAau",
  "key10": "2AKzAGkrRf1Cu64tnDzeeCxeQiCAsQuaf83jayK9JxidcCzWtcLgP8Pqd7ycsLf8NiVKNnqVbTwCjpaSetNyNqqP",
  "key11": "4iFyTFZgiLcAfoaM6ofLkj2YvP589uJcBQDPRgXCfVUNTHypNBvjZbpeAtFinGBU7kKQAdwfgAN1Qve5hskdaXfR",
  "key12": "3w5WuXrYXfFrSdRNjEXhdYBRyU5QGKNvWKg4uFnFnp4fkbHp9FQ7s2bd4Pzi8XM8G3TwfmiM1h5jtYV6qNj37TGK",
  "key13": "4Qp53p8TuYwgGLmCoiXuz5TRm9hb9tDgnu1eqgA8TJw4BZoYQvSfcY9TdL1hvYqdhq8xmXM2SACA4AvB3cSyu81U",
  "key14": "41v1KKHCWfxVqoASNfdLKV8m5hixqWKD1rQ9QHm7nGB2xiC8WZstZjCxpmc4jyRyxWm5ra634W4bEBvdEGNnPDym",
  "key15": "5m9sxX8qdRappmuxwND2aex6X4sTW7r2ZRtfgunqFYD4vZRBUKUmp1tame2vFjhwG1aXfh7Z86t1s3gWxF8S154G",
  "key16": "5GhaVmQdyycaM8vTZ1ouF6uvW2bo511KJ8nnyLwcQQ3beuCt7QhjrWMMjyodpM1RdeNiGCwArszkXn4hX5bLbTAk",
  "key17": "4mrGTQGuTTuC4gST9NAx2NfiT93WTG5LRTJm5aFZsvskeG28FeiWrUkQ3t4ZJeWn95z1nqqwcaTpqyG9H9Ujhh18",
  "key18": "2pLZAd9zuG1og9RJ52AebTnrDqqWcrgPW5tfujynXXWKH1XM5Gxju4hjRtFBot8Lby28GZWXnYxHwyJndXbC4Zgc",
  "key19": "3VJti2hKB2etmApbpQ3tjoW82V8ydczpZ5wojTWPLCb2snNMPJrbXhrQsLheLH85U47UkBz8UKsGgmtQCHduVjT5",
  "key20": "4dgQvR3D3VeeHRkfGkUL5joqP17TXo2Y4ZUJBaqY8s9sSHSjZpFAdUzPes5d4i3zjYk9qo32eH1TT3mtiYSTzToc",
  "key21": "2n8gsZCp1EySPFTtfo88MryuNSJwbaBKbKNBPnnB8nWsKMT7xMT7gkaTF8noRKMegJEgJPrYRn9eiQjETBQnfrbe",
  "key22": "52PmkSiSTgMbGsCKmVamDSQ9xKtTr5LtQuaK4N7LRSfDtEndacFjLJhRfraMkXiUJzVmVQLSxo6mA8kc9Cz8ebBW",
  "key23": "oxNShCGnGkJomBGpbzHVBk1B3QrSBwHHkgqjEbVGxiybNFrBaKq4UNznob16rx2yxmesVR5CFByyQkbgB6pNFW5",
  "key24": "3KcxxHXwgQgvv6ePe3jmg5KDVMixHmpPAXHSZ8zVbaaVDMcJARJfGun7SJ8N5fcTH1qPAAt7FtCepwejj9Uxrmpj",
  "key25": "3hHMJoDYBEZhnXBTrWDCfoj3frzhc2sm6HUsc3RTS1DgkG4bgKcSAP3D5k4zWaXG5L1J7pgxPvZx2wHSzQGWWRX7",
  "key26": "3FhAkvnjyfimysxZ6KVgHDdmXfWSWfwDVz24UGBJVRt7PsSAdmmY3PZxVRNjJqXLPDcVc4TUgKTdhiPYCBaxmSUi",
  "key27": "56qAtCWNKLanGKdNtbYVdmLTnVLa6QKKDWjmuzjWVmw9tpTfGwDZ17ve7xkQPaXV52HL1aeB9gSMNCFEbAowwytB",
  "key28": "5qCW3pZmogohrdga9w71JND6kU3smYHty6fMtxBoSBmQFLgpDM6XGR4EgSo2KGe9TAo1vGTu4a9yvNEfAcaTBVLU",
  "key29": "5ktCDY2mnUTjtfW83Quq8FHEbm6cjwJVEoQZfZDGuUCkhWopCu2FxpnKsd1rRbLvcko7FJGy9Bu2TXMa5bqrXCHm",
  "key30": "3XJ8P8qzqUdwHC7T74nsbuH1TkMpwJBr4ZofqrY62MKLoFfJfPgguBcnDSAHqMBWCtKLpgGzwuSjA7SK1UiRDmPf",
  "key31": "4zBjmtABhMj8gQTKd79nrVLgbgmkpiE6rhocynqwTFsRd3EGR94f1Zyv1rCxhkWWEj6Vuiw6Ubti89SHgwi2u6P2",
  "key32": "5b2i5BTGgbSH5fe5E8Cz4DhPjc65XtRjKRzC6qhPvygAgBQyZEnPt4dkAQmTUvLmHr12BXhfWj1Pmpe4eTdRSxdX",
  "key33": "z2LD7uLa51VwTVfSY2PPK9Sr4Mx8ngybVYR3yWWDBbM6AMiGCbpCURwDLFryMMPqFDfEJK7FbitmkpfD8ZAZK2b",
  "key34": "4LQaVhidXQo3Xw3VnTtC3xxiskndrSakz6UgnrxfxD8y3brs2SNDuii5VLeq9Vvo4eUSf3HyvXquLKVTaQecCkr3",
  "key35": "3uGxG3pwnYC7iH9uQSusXaQNNrn2Pc4xpBmaEA68V1y1dSkEbYkx9ABw2wRB11HerpYvdyqbcmMdAexMA3xR9uNr",
  "key36": "5YatcgeCDPVam3Qy8LEZyJ7v7PoXkdGRvoCwZsVe36jHAzCTs3CoqJLx4vtSvBBPGTGezMAZUnbbVofaaRDmjLzQ",
  "key37": "3Doys4MSjKsEV4ZVkDy28ni6LBUZncE1kjQVfPBD8efKvgtpDHDQeNMQVKHDQapvcWBY1hsPeLzunfbd4T86YBCh",
  "key38": "2UjPQJZJWBV94jm5y6hytU4Sx3MbYEeVfThku9hHxYRs9nYvaZqFcUc9dLpyCmMe6bXrLmbfkuvkNV8HSmcJn5uQ",
  "key39": "2H629agXJ13me8Mj3u5aYT6JRPDzkGQoafe41jSHiVj9tUgpkwATBSesrSfkDfd4DHRNVZeW5ronbprWxvZurcpx",
  "key40": "4q2ni9tU2VtQ88ZatToeCpZ3ryiVyBj6taCsFyjNxHV6ToC6iRWcYoXMKpSERSriddqNfNq9QeR3hTD9vqpoSPmw",
  "key41": "G7oKDCpbFtudkgT6MuztiyiDDd42mdeXgqxADKKHMVJeVNyXJSWPA8kd2dzVVdkD3QgKdGbdP7H8YeLN7LLktny",
  "key42": "uzbpambSLtgWiVtHX5cBPHrks7h3ZbQbuMqhn4RKwS3wWNUZQBJWGAwgS2xzUZATBSeckbtDdzz3zj3ns4zGuKn",
  "key43": "4w5aaxUNAq3ojqzWc432yVLLyx7NszbM7DEeJiB7fuCvxydjGCA3QfPvzQ6qvcYMaGwU4C6nvEf73bntUkddaTwK",
  "key44": "4guGuw7wkZ3FwmftKema6ssroFRYQh7g9S8vXzKSpmWwWnmyGkS5y5NssnrTQ75oSFaiNiSxNSeauujoueVsW5E9",
  "key45": "3NHSGEqsS8b97QJG9cGj1TzcrNcHd1cMFcqpZb34vSgbxeZTkjKoTxopVaDoWcaCa3GPJmMnFggge5Dge8YwhbQm",
  "key46": "3isNBYFiBkNywQPciMR6dcgQy8krtzCF5QCTEHtnetcXjj2ra8nL1sThuvA66aG7Zq8ehJPZ5uBjsmV2BijCSzfu",
  "key47": "5qdLYHkFd1szv181KM7AwgazM18dW1JNtLQCdykS4npR4mG7QuVAd6SuKoJN2osPJaJKLAsLX7SzGUAEtx4CEEKD"
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
