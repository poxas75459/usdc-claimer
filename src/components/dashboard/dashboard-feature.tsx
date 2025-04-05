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
    "59jADP3BokpiaowgPGPf6hcrcjwCAkYgUfPqevDqpknuju7fjTSHQqwdMd3RUir5QBDaJL2NZZwRTvJPhaQiD914"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VKqQV57B2cnvej19uCBnzaPr2cMLttPQ6UCPy9VBb3HWNjvWJW1wjwugsTjQ6ZgMQgRuoXZoyPHr4qkLx2H6PNz",
  "key1": "4dVLorn57riUjF9mzbn9BeCBwAnxGrRN6Z6tA3Mxs9ZdETNNMjL8MUHrYc9maXFU1HhPYL55HzDW326VzpkyQMAb",
  "key2": "4R2juA3KRv9Meba6tMFJ48feQoUUbcpyFUbPmyoZ6ARkVQn79vfomoDHijdUyuxNhKK92YgwowDEpv95XDfguCKn",
  "key3": "53BsuD5GspcQbgVPqtEUQySkBvWWofHMXaD1ukXs9uXGuXWUuaiULr4eA2YFs39jCguSweKp7i9FSKtsDxgQPywL",
  "key4": "4fdgvw8zUNs7VJTrCmKLvuzhASAj3DicwB31VWLA1ja7FHWoMf6pphbtVYT4mCEL44BVCez8557ZmogsTcwLuBZJ",
  "key5": "2xdH3hq7JvWzDMTzbsVCpxRamQVHgKRkEHvcv6Hi7AUmo3Dou2QBo9MeaiYijA5bjZjHvoiSV4fBfzN2V3HTCshH",
  "key6": "3MMq9QAeF6evEUqM9FmHSRVQxw6yZHd9WZD3SwZB72jvVxDEA7QRGJ7z94nhbG5284zoCuWgtpEqiHiARdReK5Eh",
  "key7": "476dpbcnPvEME5uYpqvhXrnJKKh4ZKqsfddGYs9xy3D76AdoZtU2ZxP996fEk4HA4d4eeax2ZAzDoNqWzzFebJPx",
  "key8": "54b5oL4Ng3PyA8eobcDMXufuSUpvBWWxtwA1DS5MMsGyZT3i361BTVmSNCeWpsN9LgNDJydFL9eU5mELDYQunKeT",
  "key9": "3iFaGSM5kviPewfTUcHr1fRREioqTXTYczBJsKwxiyN4sQvy12vFTwkDJRVoncSNcZLYzzW3nqDkyyho2ephmKp8",
  "key10": "4ZjasCwjKPvwZDMV2Sz4kYPs7efnjp2G8jK2di6ZkXBJAXKctUYhhqwZbD5AoUR1XmfMZKtvHsn16Yoh4kAwEEdj",
  "key11": "47FnCXQ3EMG4Nb3BeeG8oaUwjde26ybjTuQkeWJjvJTPhrtxTAqu1CApAvFGTFUywU7RENQT6zcczRiCtfGiRqB4",
  "key12": "2nUsoVxsmt85VKeTFYjBxFYsJA4Xej7tGu3T9fPZZMyk2ryRATEjSsqeyWxfN6DyqdGg4wgoBi1bZKKvVoGwNQzJ",
  "key13": "2chswaDJGk7767T5SsPL1eDZJyUpJA8AZ2pXwzN35qytPhqA4TPXkisxKxLt8hLVnhmeq8qbq17FhGH2fxQf7fLD",
  "key14": "3ZZZzePJWgiVRsSf3tTYpbjLptzLWDhsdtyFau6JFMxXwDVoMf3fBXsH4o6173u1cGcscWroBNwvHxCGHqCRBhYK",
  "key15": "4dEpTNzBV52UgEbdxun51nBX1wDzLQe8srGVAUfJSCuNW7WDm8jsPUmXUf8DouE1DABXfoskb1gdmfxfcAU4GQcx",
  "key16": "3E9BDzLHcTDSZqB9LLBMr1i3FngTjLyDzzrYW1S2zcVSKnGxFC3Yhaiiid93sDCJRvWzVRbkrDSbNp7m2ZdNtkjU",
  "key17": "2Mu1ZpVMeLyJYH2E24k9yCMg3LNHTGHSztQzDpWCKz9TDZZa2oDomphfEfoKYXFQZy8wX4nnKAGvVByW1Rxwqpjp",
  "key18": "59RmA7wxEW5AA5Vnmw4NKL1xhFd6QUiJ2FbpHSwQ5gUjFAsmdEgUXmnmwF2cazTacckM51mHX4uBjvtxVG2qMBNN",
  "key19": "uLpXGe5YsC9KzJowhtoh8E9xDXFmPTZDLQ4bfA4MoPbnmRgopLUJYc59eAmQTWw2u2QVuAe8Qd4EQonDW9SrEe5",
  "key20": "gDoDBjjt7tKEBee4jD6hpC89ZLbG5nctCLVGSMnAJNoWuAYnLcLS4ZochALGabVJ8koTTTuh222DQbs4Hh7fSEu",
  "key21": "5jje1B6MSdatuhEGppvoW7rFkwohotxUwVECCZuvvvaSoXgRSgsn6Ggw7Pebncc2PPue24jnSfmZvj2znNBBCBLZ",
  "key22": "3Nd27fMDVKCQp5PqSj5ZueqqAVAhN28GPmPLQHuZNtj8JDwb19bRBFRRFqWtcwk28QSEJrphvnGP6BgJ6URmuMvp",
  "key23": "3S2EdR1PeMaqk5MtZkBYuJLfPdyD17SwLfDUWuPa3J8oCk7xSgGTSrasuyixKoSFwLoSgNDcwoV788Dpyt3J7oU2",
  "key24": "4gGA1pVPUXhf7EwU3sEi8rhATonm2w3yVauGWW4QrdR8us2txjkbrT68GnhUQjykNLkr27bjLAkEPNEzREciPUYH",
  "key25": "4dApSbSHGSb4EngZphFim5AaJWn7R2pF8mhgk1VQDvjHoCvkmaMt3GCywPepD55arFm9K8T8xdRiT3rxM6ktLoak",
  "key26": "2PThDtGVwVBFZEireyYcHeu2SpvYRbXNEQGDSH6QvbskTr3dHpL1aZpjtVgHNL3pkqYnNK2HNY7VJLhqn31D5FNq",
  "key27": "4ohETuR1ZeaLWssNFHo5NTexCc87A3WaitLrgRqcqp8Wy93Wm8e3vzEECBMoGyDdAvBwqfWZZkuNyPKwwbCpodDY",
  "key28": "qvjKavUvSMioR6AjY5VN5yqBBWe5GWpahSofF9pCzyX5SUm6WReKwxGR93nGmhErzpaKEKQ5zNxbwi7QCZPXNNf",
  "key29": "4jsCVfbeA95ayVRpRVkFKWeVSHMFfBFjewDyBnRcHB5VYBYtM4WHEPByhKsH6YcodoysAKvj8h4cmiyfaTe7qzDG",
  "key30": "4fYENLXU9fUegJBDDkBHqHq5hv4nKi2qjDfhCLpUYQcAbs1dwTedKuyisBFsb12GTcvnoRQQQoiynXJT82ZiRVfb",
  "key31": "2Z7StU9RWS9VLhAA6KcannqFyiZXECrUmBNuQNCpKTRHMj5SYRceugnwubQrNtDHf5naJevqYSGJNRBvvZpQGv8m",
  "key32": "t4g2EDqWdnZp8zHzkEChYGk6jTogqZxABWER44wroPpVUu2kSsebeYmGoBtxp6sHaMrAFng5V1VUiQD4sQSkbfC",
  "key33": "5ZMxkXHicF8BfXwENwLR5szPvnGC9w63G9Tz9yPtkBbFfrWqSotmJ72wHNB8UCH3ovCjpykftHorJMxk5FFCbGdf",
  "key34": "4r74Po1TW1BAPfrZdvLbCqNhC7K2HzUWzJBnXC8RdELL3yVofd671sfvyzPpFzoSLcS2pHXNmGfHTPE27akmhnxv",
  "key35": "pnebyTCmmtW2XBx2PNxjJoXtDay7WXmw8oPmBpmUx7MTRa7dp2Avzsjcwwr8jDowpQuWFwERNGuMJXu8Rsy1bbo",
  "key36": "322JNcZ7rc7cjqYXCEn8QpauY66o87hPrBUqNvbh7a1umS13gbZnmzLbUiLDkQFreXumLWtiiC8wgSCP77kvwjy",
  "key37": "54LFAAHoVMPqc9WWm8JmcLmmmAh1GGbXaPjiyZHrnWaQwNtfSgWe5nkQnkUy3ubWp9A2yRXyUhTD25dsqUC6s5FE",
  "key38": "4SFdWWtzoPb9oZj6fHdpwtDT5Naxrk1qDwCmXuGPKho6LtirkxVPdn6hHwhnLQsUvywStPHrNyQFxfC4oS59SYms",
  "key39": "63gQNxDFbdjCBaNoubP3BQERwYGUY49sZjN7Tprc3z7q1XVewosxr1YU1ZtAgwDa1PEn2xDpnCevBdA32wE749LE",
  "key40": "4SoJQcZgu61BEC6i6WvoMa4sBZysN1Btv3ty2qPd2mdmsNXCQ59AJLgggj4X4UyWWEPrvLAYDMDD4SBMRQ4DYbsY",
  "key41": "3SpA7MTAMCzAcNoRttsaFfyqL7cZJG35voUw7FrFBr4SXDhqE1ZnuD4Byd75udqdrXJ1ak64EKk4cxvUcMQnr9qU",
  "key42": "34kCsWyWYuxq76VC5oNtvReV8tUV6eyTnadxqPisNn3ue3ijpQivpcs1Xeuk8sDKLdWSctH9je965cHnjt566ria",
  "key43": "2x4CUdSjbQxYnvDR2PP7TaJk2bKpKwJ7VSj7n8JWPTnjAwS5qzdpWpK8pR2TYt8KL5YeUX8TsjSWC5WoJenhDR6z"
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
