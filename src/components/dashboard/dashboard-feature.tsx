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
    "5eAoDkR4mWyCRyvU9B2GJuBdkuuX97x9FZz9UWZhQVk2mg2FCVxF6NR52zgs8FrX2q1wThWoAWqefrgcRsNNiCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gFRi2TLm1eue3QV7hqTuyvc6zLddhatykm6xeoTvDmDfSDBSSdbCzkNaDLYLCXKnnvPtFvrVsYMzjtYoFeZpz51",
  "key1": "2FyyTB1ShDYjJcWxdVWXu5X98spatBRyJqi6VjDV4G7oywMK4HVtX9L5gedYsfNPenBWgiQxbwxs5tZ9ufV3vova",
  "key2": "bYmjr8qvsqNZPQDs5xqyGPZrYbGbcgeUCuzvnHcsp5Y2AS7ZxWHFxr4rkaUtBEHQXuDhe7KLq58P7M14NBuSc2N",
  "key3": "bQf2gein7Nwh9NqrnV4dcobUh2aUmT1we6Dpy5M1n3y8KR9tqR666V3hfJRXnKQcTxF5NFzYent8MTm6TFrRkTK",
  "key4": "54TzRKP1CMYontFJHvur1qYf8J9udDk5R68AzinjuekCoxRuDKhumfUTHnFo7T59venk5cFGZMvcT54NdgCiL3no",
  "key5": "2hNMUMFopdRoxMXhwDQ68s5i4c8JvJzaESAsmNuvHTamzg4ED3QuEuJPWZWy87ntUB4uB8qeAoUrnLUEnebfAPt8",
  "key6": "5wjfVdu2c9McfxqfKjbDXPM64Dc9pWoXhKTnCphXP45tyTn9k17hiK7NPTS24z6Bs71TSHD3ojZpKdPVvdeZA34V",
  "key7": "3eNC5oDgVxuLve8kHZ9ARFCzU62LUiicrieu6CniXf2nq6PpqJ7kuYZB9MnFH5rP76zNBW4eKF8Wi4aKsKd3aqyw",
  "key8": "5iD5zd8q1FbTF96tg4KJ1CQR5EG2tjxYooKWGLzEz8Nvp2CRAPtA4mR5KCazK1BnPngUkKBuHQTBpXaeDLMKqL1U",
  "key9": "2sPNNruWRL6AxZpdBQy1V3SJRdUALs7BfKB6oNKSnADbs6ThYv111BZ6PQkP4xPMS8qGHRK7ghLFJ76MBSG28vLa",
  "key10": "5fhYg38gSx39V1xTyQYYgaP6cuji1ScZ3NwdX6DjFu8D3HtLHj4vsCuuKoZC92D729e94fK1UNxUScGxKA4rMg6L",
  "key11": "yvDEjJQ5ChqAzZ4fcaobxmXkHUoXLWmMQghbfH76osCKWUEMdgUXKHPGWtDoW9xeZhXApjFK8WbK8ggkdw7ShDu",
  "key12": "2WfhECS4uJhQ3WLm8sqLNP1Sb5nEHVTrigNRqQ4vdMhw43TczZ9M3agwz9MxyyQGW4TuZanZteJmxSdBEyNeR5j",
  "key13": "5PXkkbMbHvXkhzXYXXoq49sJ44tkPW7GRw7yQitzbRN92PR7wsFnnqvsXUAZxgBf2zBzmzWj4amXgvveNUCGHH5J",
  "key14": "3oeALEKNJdCLVyJ2RtWfnBQqHFxr2cs7BcRLi8G4MwHywkVwSXB56Ck8hoG3DSupzom2Ash1ndxAfX7Qjg9MHnGZ",
  "key15": "3pMhLsTbM2VLQuGbNwS57no94vJjkYx4U7nBNWCjYezXz2MoZVNwK6pBY4UueNtJ5SiDQ2epdFHn9Xjoyo4TyMrA",
  "key16": "Sa5nNRctpXKQ3cKstLGtDGpvyWFKxDFbEtc7xiSTDaSfrWSnz9JwydBXJak8qysoo4chaH8hs8MZA4XeLEbbpLd",
  "key17": "2ZJ7vecDW7BSuavtHnP1F8hgr4sFP2GENM3qkGkBvruhE4iU5wwu5Hp5bpxEcYBxzLiAKTAowcgQLB2S3XxRpMNy",
  "key18": "5wKBJVwZVmdefc6J4NPpKfYeDges5oVL31rCQAc2wtqBvnnbFHsF2aPzPUspaRUaFuMCSWUeeu9s7PTEWsw6mJZK",
  "key19": "4NLzyZQCyiJWToS4PFJZv6mHoGuqbzwMPBMNNLyrptuuapuPtYTweTt6vBziX1J8Qm2EmY66S2nv5TZP1ZVP65R4",
  "key20": "ctxQ9GvknvnsKRH3a5AvhZxD6Amj7Ssa9RaN7D7j8Nvw3jzJXC3fZJcp8cRqXHEfc1Hx9R9y7TopAbDixpjvxjj",
  "key21": "3R1yd21k3ZrP1dU8x4xwqc6oTBXi3oUF6HMdV6JGpikhJJ4CT96mdjE5XR5CvBPihibvKV59SnydQumymjP33xdw",
  "key22": "22PyScGsqQC3CqQMC9XWhanLp9BG4RC5w6Raeqcvi2UbXH7s9oDbhnALc5JPrFaTSyhV2nm91rV4GMGUJAgqsaZH",
  "key23": "4hp4hZBJPRLkPw8o9HhXLv5aeSWvRFsrXiWbscFt3BUAgvfbRKZUsrrzMy3qUbVkVsBgn4i8qVsehZPtGJewAthU",
  "key24": "3yPFmg8hGs4iWPk1Q3PerSLcXtfPvxpbsjchu68T45SnpkULBKhDAxBBZ7LuDjTu9W3u9QLxd2Lkp4WoUv6kdM9s",
  "key25": "5tzXiwDzAbykpzEDfenSWT4u2x8uvNYQseQY1cQ1mUUWe3AFPiRnrDqBfvkHVaMb9b5AaFHVVfZyeL3J43MK63Ni",
  "key26": "CmRpun92Ksj36gUmDL6QA87tCAQwUo5mtF8WDcpSLMJo6vaF2c9UScS3Mbp9ch1udf6TW4N947E5BH78nL7ECr1",
  "key27": "5PVfkGvZvPxZfjWMQoP1rsPvfXAg5wHBppf7QTHwR2ETbsaRC67NDfGdXAuADFhbJJCMMzjTYa8AFpcRbV2a3WcJ"
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
