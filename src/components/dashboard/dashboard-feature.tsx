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
    "LMeebXGntgjAYDAoXHUtk62RMaAvqtBR5NeDUU3Q8ZcZtWjLGpKord6ex4e6g9LRmn3tpeJeiBYcqzmGNUGqtXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GURfzDdSSVHS3E3WQmj8VdmtcQZxV4zeTig4kjc413QrLmSSrnGaWkWDPXo72XPnuFnYafuAQqV6tadqrANbdSg",
  "key1": "4jQ97MGYhNHzbyoeUmY1yNyhWgCVyjiBznExijmWY1v5Riw6iYvjAxwdEpfQ6JCokozoB1FuLeCEkBSWGrip152b",
  "key2": "5XJAQszExjf3pWv3szayjB1zxjCxSrDLUzW5Cf6EEYgEVsMqwsoCJfZ4gHjSfV34JwbsDmDFEHbuHjrk3onGa8Xk",
  "key3": "65rno45KX861VuV5JtiWdNEdVnKBw2LaTznug6unEin2mAT8zZDb74DF2WCtDPj9iBEiNfNJBbVj74UZw5QrYdKv",
  "key4": "57YdgoCGf4KkGUaJYZ8zDyegZuP9D41AhNwS4BouTNsSYZaRvATkHvgwpYDUZL4bzoRVCZFDAgFYMLDRcqjopjuy",
  "key5": "bZSAxEgHmEKcDbDcLNgnfPHrSdec5XJpv5kkPmeG9VtEo36WXu72JfujXPYfgc7X2aGPwst62pM1DDjRayb5jtn",
  "key6": "4D8Jxjn9ijLZVVYYnP3VeK4Mq988ZDYTuGnxBPpS7BRUfAnUgRH1L6PmpCssV7wqQDVAT6wK5Q5GJDhc6qW7SdQW",
  "key7": "4cSUHpQiVXasx6KrbxyTr6W1GxiBqyYTkzPNUTSHEPL2aw2cB3YDiJTs3qqUi4LstMBk9Y3ppvHqRRVF9PpqRkop",
  "key8": "4Jo5PpfifnL8rzTSTu7bUcZawGjGEzaKKa6j57WY1WudHsGV1q3oTfVuaKWeh9Gj8UFdhVEKji5Z8yq6WTavmgg5",
  "key9": "2XZjizhfPUbpHxfuE8AbuwVnct4WQ8AgbBQFrWnrMoN3eZ8TCrZjDgRZuvy9vNNbwy3jpQtvy2TurJK3FjT43YvC",
  "key10": "4DRbyc4j13qyp5tT1offSvZpysvrEhoYNaBvATqpryXsBCaaHgUWNY4RfcXVccf6gJ2mURZuJ7nCXezPR8mbwodS",
  "key11": "32hKXPAfh9ohnQvFW9g8fFJEwBLJykYB5fiWTGtiuVhKYSESixp3yVMZnbfpZj5G7Jyt7Qvx3jo6mEKqovjwtamT",
  "key12": "3LMJxBbBg228GUGkDtDg1r9FdG8QJZREKJgVxNJggVQcHihGc5WsTjjtGhWjB3edgXbaMddNBe6RwuRxrMs5cgdH",
  "key13": "5KWoFxtp6wuebfvS1HXtQwXVHMGkHErQ6b3nChgLWWScKETJDJo4RFixrVSvHL5GF5qSGU9qowqahbWE333FrGWZ",
  "key14": "25Qhj4vsPwheEjMzxU4h7mQ72LJEnUYtME8wz37bD3UYwwE2TGZowLHt8Ds39hqSTEacybT62DNSdZ12F9Xgm8Hu",
  "key15": "38L7QmKkpBXcEfBUe3c7F3EqP7Ghkc8VtVbMhnvN1r6dhQwrG6StzwVBQQFUqem149VAey5LNWrK1Wzj6FpQav71",
  "key16": "2vmwBW96FWsYzTFi84RFermsxx48Hig4GXjEaMVYRdWisgwPkY67xEkd3b3wBxZxeRF1RN7fVaNMAJC5pUxD7an3",
  "key17": "25CL2QjwfseozKUoUXJsJmMRczNjJWdXvtdnYHKSwd5LT4iaVCbGDKL1LiJsKN92UDGbHTctYfuyKKPt3hyKkF28",
  "key18": "5DBk3wdNtu7M1X9GakXViMMYNgbfuRrVKecRGybQZs1jCoVVZhBzH7yzYmr7L49buSxRkdbPkZ8ZTY4urbYA5Zeb",
  "key19": "4Rbhpw4TpH7Kzu8j688jmrNAmem1y7Wn6btho71HUtD9fBuKZJiBJXSKoUixbLoGoDjGcgYgKiZhXNJbjAvZJcHv",
  "key20": "4QP3ZGPLEChzzyT78cdrPwt7LmegpombAeu4Ds2o5V3e7KCNxhZHZ51LV94s1uk5iCQDBjWMdUouTVtGRjVkCMQa",
  "key21": "i48aYSv6mxziujoTGbCTvB4RgUmcQrzxUUJSw41usZyYcRWNcm9jgsfGkq5hQ7qbQHVVf7urwEECTA9bYH2e8AA",
  "key22": "5yqDz375m5d8PnMTRJ4u7CgE3pUDq5eBnQ5khCoJdDAYF4WkgiQmS6j77j4a1zMpzoiJw33odRDEwn54497WJXc1",
  "key23": "59tgteQZ2qCMm9N4L7JQiNekRa5jnYK4irRxci655S4r9C7G8NZLBdfeojkm3hhwnWZ1pN8WJF2ANor4JvjxQ8Nz",
  "key24": "2mBo4R8UXXSvfuqCJSc5VjEXope7FAaWfYt6SioUJtXWb6ETj7v2PTuioWdR396yiGQAzNykE4Pu1vwKCBN3DFjJ",
  "key25": "2sREy8ycgbsB1Fp9ggCFHjo61goEd3N8ME7K233ZcZomLUNSy5gmdLytPjwskuGswgPLoPJzB9GMfTo5gXNKdu2P",
  "key26": "58QMdtzp2swjNWYT2gUte8u66GExzRU28Wx4tZVQsNnyzCLZcKqfTkf7bRMSuVV5XxroBhnbe8XFvw7raacqsQPb",
  "key27": "rx83MF2xDBTvQp3bfZ1jQzTH3joK5E8wjJJMzy9R9vp1okZGGeGpMJpgsSvqLYa8Cz5VortHG2PwobsFYFHs6a2",
  "key28": "y6mvei5zKUBLAVdiQnoENASj8TDRMJUtYfDHq8KEpcvTm3inVTaqzJj86RA8pyiAEwYrLrpqBsj1ViLyYV7y2rG",
  "key29": "X9Q9QHx8MHZZbr9de4rBk7AZLaRPMSYEWpfEjFKAoJU3Rim9PebFqYHC99wGzj8uJthkQ5H4QhjaAf4EJ5v364S",
  "key30": "219paKvwRxAeJQGhpc4C2FWPqGpMBNcsm65dLj3qPngUC2CbAwp48anwdb4cBvmEUzFskXni6DhZN2oDRC2iKPjm",
  "key31": "3rexUZZ1LRrzAVjA7mGdtjpfCrDDr8WVj2W27BWzKBx6EQdz5bqvGRYBgbgaHjGEGgFMRuEU2cnWjJSio6HUzPmW",
  "key32": "2CWPgxMBZJg5tDTKL4hJCRX7VcHTki7yzzTLhq1Te1qAX546e44GDeDPZbMWjYTyMhccWbgaY5GAfL8p9qHYTHqi",
  "key33": "4E19rRAy7noBBsRKpYvDVoKgYAXkUX6gjB6dmmSDVRHUrCtW83sWyAqzu6okUgjPYpzFc2VwXWzTvkRT8WJ99WHU",
  "key34": "2qgb6NimUqWAWE4SjYyDqxVxmoWTTymQi1urR1F4A1TYQtmuCsRVu2EprP9Th2SafFy1gwZJhC3SfM2HuupTKAB9",
  "key35": "3FoBybaXxURZSBBMFQBgauGq8RFXD7vTxD1aV1DRPPjLEffuDUWiSknxpXdXXR4Qvzvcow7sXSqK9CJ2tctAwy8h",
  "key36": "54yfVBgkwx89wx639dZVDuKukqr3SMCDw5XzityT49PnWGpKk4BdTYW2y7Dsek4FSCiDe9gX95TrfXYj4zrDN4Ze",
  "key37": "5FmaewcMsL8iV7phFFve8svY36PCobARojHRPPC4pxZJH4tD3CMXsBG8pStByU2vjq96w4xFoCffrjoVytp5k9NH"
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
