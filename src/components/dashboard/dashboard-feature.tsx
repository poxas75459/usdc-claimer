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
    "4cfZ5c57emLS2RcqKfNuRVYXEBM39N1iD7CrnZHpRxULCTryXjYRA9Dpkny9GvAytV26CxKJaTEN2zYPTvcK1icJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NctV51NiHFwakgPzQJA24cNAegAt528fmvUUx3WS8GHVLF2ezvyhNkBsqnozF8kK8Mm3ffcHQPwmDy6BZcXwKBH",
  "key1": "3wc8U87ZeANGbF354zG7GSjHKXTeAX9DccMwm8ZLqYSdJDYQ4N3UVH934YSyURcXq2w6zrKmoLBjRLm35ittUHRB",
  "key2": "3GTNuCmCUD592KvmJENX1V9xjh8bS3TB7wX3mKvj1tbAEM3kZ2DqSdfj8PjxhdCnCSVWaEDhEEp5pCmsniNQ7Hu9",
  "key3": "3QLWpw4BJ4shSeMWqHBXEF98P8TWXX2tWxhSwTXP94EdgDmydfB7uCC5ikqVnbH46FxBYQd8DkT5gX4RwRJm84zQ",
  "key4": "67QUjQzAiTuACnjWuTzdxFachJuQECoxazYv1my1fkgW1gaG2KDZEndqsi6q19VmCZiWeSQTcpxTadh5acWXj5sg",
  "key5": "4mzFGB2faYHX8PgdhM8UKg6cbCpFMYSCezaPtSPR3UQJ9hsPjxEKQo2Uo3fHargLrVQFXSdTHE7V9XRGfuHRmNJf",
  "key6": "6715iuNBSVZqnzX7C7T96RrygVJsEYpoJQsNx8D29Lv2axShNZLbdjEPpTezjU9j5kiEJUBcuGWAx6tqu8s6iXgq",
  "key7": "29YF6t3jweFVsveKA542EZ7PG8hhNt3RskteYemsXC7uBty4spKQw4gTPbyhXoYUd9y3SkiyjLNzPYsvxYuUonMx",
  "key8": "476wsiqosgPEUzMSksXDY69fJM5b8VWGHqFJmjRuGHfi8SHHcYGkZSif2w9U5bs9xHfgaAfh1vbWVEPpvoiNLa2f",
  "key9": "3NJNd3E25cNykrCGFE7nYkdFEHBY2fNvaNZE751VVvhBGCkqAbu5yZ5S1scRHAEk8eLf9znbmZuNwcEkLWSAqWWX",
  "key10": "4fHaBC5j1ygMojvVsP1gc2rz6fAc9Uj773pwhuBghKL3HH1jcwSWyAuTrNr7PwaVXMGNG3MxLfuykwqUyfCUWyTH",
  "key11": "1JDb4fAWV159UWfnujVFMSy4JVyFew79Du9BNXZJixYaWirKe6NdNVnxCNJoZvsGuQ6RXF3ufuiu521t2Wr7LKG",
  "key12": "2QJPnnKz2ZGMTVNfE9t47q9mmq5jQV29RP2HUqm88BHaQpGBAg6HYafCmErDC6jKid3eCDHTuoGW2zSmMVTxUrMk",
  "key13": "3DEn9S2T4Mo44CQkj9cyYC9D31bYYTu475K8qjiPTpTMLpwTghm7M5uFiaTGkfpzERj3fcuvraEN77Gz238gvnUS",
  "key14": "3SHpdSw4SxLbuijbn8BExiT4yxxLoAFo6kC3zdvAJ3yr2aRU7CCtbSabgFLiTnWX8eY2wHMMFAHZ7K1DVGoY2sKp",
  "key15": "4JKSAd3CgEqQ11qMRcHhxgh5CSbRee3ywJJ9JpQTQhuC8o81S8JHnHPAEaZ1NNgx8hqUUBRJjodCedoBek7uQcjF",
  "key16": "4pQ8DmDNSYE7YrCt4X94PjsW6Yn5mbedj3p5ZkBc9QKaSCd7bUkTsLyBF741S6CkavF4crzV7fr5Ng2xtBSHZZXV",
  "key17": "5XTmfpipHssgMPS8VizxHLTXnnc8ewMPbYM755MsUh2yG3S3UqNuGKUz1uRvbxHS7ttfSypMnKFLjayeV9a96uz8",
  "key18": "2DECzAFsag2hj8hSyPVAv8WKHmq2cbthXa8Rtjj9mqdHYM42NmE3kPmF1fkgYTy9ShsFFtiHULJGsRpUTyYyBuVf",
  "key19": "3UxNCHKr948vyyUswTFe2yWuEEvExUHczfSzVXs4JN936FjwoPHrNKE9F8FdQdFFkCcygypz2Lhtr9Db6QrLw12J",
  "key20": "TpAQHq6xceQkHkM8b4GnRq3Vx2uJDgTkyRdQiVXtvQPQ8v9RQba9YQZXhLNdaySTztrTBhLDr3bMVh37b5J9jHu",
  "key21": "BGSiN1TLC7U8B66HXobhPg9mVLdkdKGsAnWffGawS4QWsJSgHhr9pEhqFwsdXpos7hn3wnhmZwxjcMwhrfzWVXC",
  "key22": "tJV3DSTM4Qz1E6KEHBn1wJjKDxTQxg7FY5N9H29inWGrWre6Kdr3LkqbHEt8Bm6tKYoNgx9D3E4QMVJ3mELcAP5",
  "key23": "51BCPaAobmZtwivg9kjo3cC3frA87kQZ4PShWj8Beds9CyeFHZX5dpuQvrVZAJpKG76jkwvNnsCMgbNnP4PQbd9u",
  "key24": "5sD2X9VZChtfPsRsGEBX3xhfU2bwbPPJYN1REAKAZya8eyKVgn9EhnzuhPnVvxuPLSPLUcgP4tLdvuAyshCamuv8",
  "key25": "1sJZFEaG7jWYPHJyNSxfJyjoGppYxxL687ifoyCoyyok71zHneeJ1kTNodLgnpYE5kzxagKGnQquNPi8G45sgG7",
  "key26": "2Cy4a93UrEixmNJmSHJNjireyPY6MnKRPX2ihvnGqnB4VSFnSfa2NVcC1zUGTngb7eS1zfFuVwGeGWi1U8fPzc8V",
  "key27": "5YFqG8aHuH4n6wyDu1ytCo345vhwYeeG3nevMby6JHuU92gDi3nr4aCiPpnLVk6a94WZLgf7DRZph8hwwmoZqU3m",
  "key28": "63o3ocpKuas8fx8PvbAnDrs1HssmewusVM2RZiwbZ6XgtV6Bw65zxuHN8JEgvNmMivdf8QjqTuyWwciAyWeBpvnU",
  "key29": "47dkm3D656FucGmwRLEoo6rpv48nfG7qdoiLdaERtbf7L7P3B1w27SFmsuGneGAiuVf2uqCJ6k4sHDZfeeFEVc3z"
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
