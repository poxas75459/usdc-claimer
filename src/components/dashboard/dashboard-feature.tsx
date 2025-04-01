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
    "5MRzhcT4m3HfyaawRFXkD6G8kwVsm9t78QuS4sYXYzMuHBZZJsHfcNHmxfQBgHGEJoYC376VYRfWLEswSMg8Mx8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59iqphNtTMufragaFw7r6PALcNuZjqjvtwpyrcQ63iAKh8XG3Pmb6verWeAxC6DjQGRBjCvTVggv7bTJP4uvqBME",
  "key1": "35Co68KGnNVaZ4iYApDXaa2T33QmnXRTTEJ6tkvBpf4R5fqFvKUddEaQTH9TzRufTphgw2Bma9g41XzTUEexwBtU",
  "key2": "3ACKLwf2GLiKfEvKnX2K5LbdVB1SqnKKtxMT5xeqfDqJjF7KhWP8FfuhzAg25tx5bxBcvRzrNMgmbcnM1oRhDQrn",
  "key3": "jYmw2fNZTnzhdSjZXakrC1sC41xn9ZD96TrR95KyUKMjNL5oKSBeLqD7g82GNk92bonSypba8K8XM3sgVCyxukB",
  "key4": "45nYyiGxregAm6dvwmkxkbscvquKNtLRLBVa9PYkwTKvfeEVfHrQyZCyds3MQNHy211g2zqiPXk96cGS5WgNnCzV",
  "key5": "2KEqARH93smh7udzk1bcZ6SMhkPfUqcncQES7wwb6NSWHJ51hccpVECjaq6qSyarB8TPHT5WURwEJJZaKpc8GcPS",
  "key6": "2uunmjheoyWh7pcVrEYdpcavSZwrKnEtWGmcvG6BmkA66GScDZ2jXYCHGCh4kvBTXJ3Eby8Grnx1ff3YngDfnj4j",
  "key7": "4P8RA1TtZq94sEett3XdhhwueJjSBLMQBY9YvC1bDpKPSvf5QTrywwkm5zpEzex7qBQ3U5aYn1naJojdpz3uUnUH",
  "key8": "kdvB9gcAdb2i4HZ8ptRD1sM4VbMBwL6yjQB3ypbYixoznL6REqdRZbou3Vx5Xreiqo6VDTvJ4SpxdXcSjnUcenK",
  "key9": "2K813HVhMwuxAs9cFNjtyL8KRLzLTbtKySrSwXg2rmaqUcc59xxZq5XnKu7NBHHijiRS2i3iJ2GtQ7mEy87LWaJp",
  "key10": "UC8EeeC8EWdADSHev7gwdRybs3fVN9ZooFkwpx5RDDgxc4yrVXgEpPPREPNaHRbM43cBTeJ1Zv2yrQTMX4cmDU5",
  "key11": "5S7YC6aTjUm4qZbRBp8hwuXmQfRf6sqbh1EYWvSvnSK6xE7HaC1DSKHciZST241Ryiox3bpmfG9hyL4yB685XZQR",
  "key12": "4NWLwv1Yfx5HKX9J8T9kRuqqEnSVR3fdtvBm9ddRhDMU6G8uoGkxzoC8FzXR8KP31K9duTHTUrs6t12MtcadJCCv",
  "key13": "zhd5nrxS2hp8C9HNnzDtnMeDD7shBBVQofrJo2B1KRdABHueRS77QS8m6A79Rx9GEvZdKtaAGr8WNrdKjnKg98K",
  "key14": "5Sz9KFrdbUp5Z6HUkXsJyt1VXLFRmFCM8MUbnKFJA7kWmtvdXmVCq2PFpWGaC4kujfSqDgZQ31hgHHBW6bsYtusC",
  "key15": "5ZuyGvmKAxxHaAiUvnkquJBy6zUHjHgaEni3dzSBmjxDU83y1hTuQ2TVVma1MEH6UTPH3Z8Wbuzk5xETZwTnwr3L",
  "key16": "4jCZByhtMc5qWsLsY1MKMRfC5DAbGbkdpJ4N9QHK9M2iY6vAPoZj55aW4bhYsWVyRGAGQKreJdXaVKwcGW46mfAC",
  "key17": "5ChnqiytpoHRvQwEzRw5syzSN8iFVyb83sYdLTYtfpySPwHQANM2RW1fPGw1hcLCp4bsQWorX9ak3V88w8W2gSXf",
  "key18": "3jkRvZKMwhyZTCVCKHvsv5ZxYKVfjK7tYhsEhuvj79E1MEHcTzmb7SrgLRqy9u5fpu6kDNaKT762nQJvprtuPn87",
  "key19": "3BdaoWoNMdsKcdhy32Wczxzp4Xtp9DziYc6p92j9PvKJJaCzE7sywgWjsuJVCSTMJJhfbhR3PzPGmJDMf2GbzRqK",
  "key20": "67fyvScEYPL88hviPagPrzHQ49pDH7ft1veA9kDXsGy93YfdvPzC12ZAhCeZ55iDCVgU1zV3GDoXHaVwx6NbVaPq",
  "key21": "3o4nntchREbxLW4dNy2M31Spjw4JNDVByDBpp8ZK83ZV433fKVjGrv2GDAEoGvAx96SA1H9Yr6KQhfYeSunbLbUg",
  "key22": "3aorYsya1KbfwCRXRZ5v4Ci8tg94EEqfnw7G2ZRfphNv5h1yCiKaCwgtRFV7JXbm5AiHhFSCxfGZFxvsuKxoPYJU",
  "key23": "3rSdYCApor5gGJhY8xkz3obEJCShEiA2XarqT5ZJwggL277peJfvB1cj2EkBmwRSuxcnvofDngUHi62T3cei8uif",
  "key24": "3kZKpwvQt5z1KRF5GHtrKL4wdoMtaAZ9UKAhmXaot4XeMNUcJ8XRp8GQLjCE3oh4LFfe8C2nHbbArgLJaUwNzdya",
  "key25": "58hRQ3syj7XkBcSLxnQPYHrAgAzzmsHtDhU9AodWHLfbW8JFdtNofDcRYtGZEuoG61pgT2tgxVDAimBhFP4VuovM",
  "key26": "2o5YhcxQHNJNJR3UBHcTxsoLJ5GDNQLQ3jmRoQVaEkc39S2SBobsdqifiAioAaPnJiE7iCgfTiTahbwZtxZZYnSq",
  "key27": "3NYS6o76DM9DGxLDFd7jp2peXww974anQCm7yUsgZwvJFPaybAttsxZevehy2DodxXv84g2ZqSBGKBU7Zkx1aM1L",
  "key28": "51Bi6fhmQKW6RNo5LQ45RCNL9sfQZxegEHsFMDH4SrJSCFJz7vuLE7qaBw5iLTp86r8M6WhA6NeB6uppEVU3cg4P",
  "key29": "5987cv7GtRtVEnVbu7Cy86X1vBkU96rM1wPfyyzi4JWdyWUmR3bTCEtWsQUaf99XaXfPRf3F3ex67jrt664uhbia"
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
