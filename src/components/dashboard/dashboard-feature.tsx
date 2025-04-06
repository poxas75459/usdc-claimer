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
    "4zN3wThfku5EroVbseYHbEWaWeKCXvag4S9BgK3qP3wHRaDht3awj2zPSuVCFUwF1Tnwq1vjaqN2a6pkBcrcWGBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kTkgqGUU2smXUiBxjBodRWFY49eKsbmizHeWLha3Z88c3zYXXHrPpn8cTvEwcfJwaEJ7zSfwKWsAQ6RSPrtNxoh",
  "key1": "3X7vRLNRvKkc6Dxwrejzhase39KE3R1KzAqmvLSGmqsboGfKmjAr7oHwTbFcuM71Sak5nC75XGJG5vXNRczrWDbi",
  "key2": "2evd6Zzf3ma1SbnfeU3G9GPKggJ8WJ5f5LW1YnKKPS1ZjNTwJjStKEFboSVcCJ3t4Ri6TtmCq8YkZ8ztpPX729Rc",
  "key3": "42h5Uo1KuCiDQCyy3RF39rvvq4zCZvauRCeDfNfCDU9tSCmNsQcnnRXCz6hAp1oUotEEEoi4WzqDuvy25gfYKLFd",
  "key4": "vGY91UE7qQStu2guFUPfExC6xgBTv8d8SAZ4GAuw96jRF7PqPB3CC79qNvsXEw532Z45yRehfKsMmjZ89qQ1HXS",
  "key5": "mcGnxXhxTtQXzR4CbxwvEpp6wyjfwRZjmyVoLimTUDwD8wni9QdAngSm2VfzbheMMroG4Gp3QnQ8rmXNYiSfcUk",
  "key6": "4sfp1nKFFsWcMKxjSoAybkFfQ74h5aZHcAZLkDheAbygag6yH7HyWiS8Qu3MAfe3LNCghqJVy4rj2LsZcMvRMhgu",
  "key7": "4JWiqpmY3Ao6FHESeQUSqqm8nK1318gd4v8HH1W54YX8LHkBm2YCM1r2yqhezMJo72Fybmp5bqYKRn5KLvpfW5r1",
  "key8": "4deUUrhWvzfBNdgSdSRg5CkjweY5t5pRzLmqouzWwDHKBLqiTkcEkp7THiPqVY8t4v5ADuFb3A1zHAWWTxbZSNPn",
  "key9": "3oGp9BqWq4DDVXU2ZhruW4sTKmWZstgUcAKrTd9E9qinxeszqGBPnyeNubB1LESpJ8JaYyU3FoYHAAVUkPvypssK",
  "key10": "BXLxmBun36Zfj4hWPFs5czipGEPUWtcMk2RLLf73DzXQSSDcj1gbjYVFv4Gpyd7bZYjdnYwdyF2wtqW6WzCkowo",
  "key11": "2Mco8GghpJGbi8seJ7R6Aygpga5ndEjmCAiQ4cx4z1DprjWD4FuM34chmvTzoGGm5eVGLjkG3aDeuZZzdABnJ6KT",
  "key12": "3odWkPiTxFohQuFKz9ngNrcRToMDDbKPXQRZ9iqxuBNdQK9sPtLfDPT4E8hFg4GjbHXfiyYf2RVJZxyNhr2nVgsM",
  "key13": "2Ht3aJMPfgM6i5rbimP9tjKjWaxeRwhcXs8zaL8MssMFivS3Uk5Q3c1BomfU7m6uMHEwi1VLzmYhApWN4B4A6brc",
  "key14": "2qpsChmXL138QzLrdzVNcMPBdzeumGDtSVLbxPSnJNn4GqwPXod95dXmuih6TenFx8NqTrxtGdpFsEmjodypP6Ft",
  "key15": "3ezaH5TsFgEx8kEm2VkLvDCeP8xwSQSWuRk9QHKo1XKRtSwGKosLxK49YfyUDWU9F35XT7n2s5Kg74ioRGnb7r3Q",
  "key16": "4n61qFJ14Aii2r2vsH1ezAL2VGU1yQpxZgxfWqLQFnkKrLZyPiZ25qpKtomGPmJ6t6MGKhHWEAwLtZHzqqh3Vynf",
  "key17": "51KzqQJynTKYE45CMVdH4T4LpCwopeNNedkAY1MyvuN1PY6Go5cKozCFAvwZKg1QANNjS7yz6kWoVsrdDi3Ezag9",
  "key18": "29Z4Lb6P1P4jLM1yRRMYT1d2t68TRkinxNbVxNu5UGmgXZAUvqaMp18Ah7qb2VFgGgQ1RrwdHhBAe4gkhR9p8g3q",
  "key19": "58BnwzLqsG8wUCBLagF7hpbvvkCLdcKu7eKNMnRb9ARBDPsgxVGEGvnJa2JzZNku6vkHynEqjvtYZQLy1upuny2A",
  "key20": "3Fep44Rwxtdif7R7i4t2ovVsuQjUdfTQe3ZifHq9jLYQfXkJBk1FHysH9u1BCazMPPWWZgPX7TPkwsegL8KuWZV2",
  "key21": "3tSsHLECfiPgMT6TkifaK19rKzjtju3czuqBsG5gAojoaJ2LmnbwT6QMfzY83GAUpxixDCxuFVirmTqgPrTns1bp",
  "key22": "64CBPJTzQU1ExrJhoi87gAq74DN9NZZu6pdMeiK4ev4N9d3htpiBNHQMnS4ujNQ28kvT9kV97WXZdaiwpinSLwSK",
  "key23": "4Jx2FE1FWfTnbtyr68DUf8vB5YiLURFhneuMKo8zPm7svWGrJbmQLsoKg5sH1fRUeNTXwkRaq83y8qT1mPr2Qy3E",
  "key24": "4AsB4ViLybm5WqvGybhxniHwRUhoayNbizedYtgrpa8zFiJYYYK67SRUomu6fsLJ3QPpxgygzrQ8F5Huiv1cPztr",
  "key25": "2AJLum9HbG8cqqTFXdQFXrrugopPLfhUYqj9ZFswyVWVc5CS3QMb6vUypGNrV4i3fhcHU2jVcB2Z64A8tVwyUc71",
  "key26": "2pU8UeEBYZGiYPN7CqWt1txCH7mZ1ETMvCJSM2CMxDU7BpS6wNxg5SvfaN3u1B7qTi8iBMYdooVXwYbeuqsiL39L",
  "key27": "3RTgH83SjKAErhtFsdv9vonpqsoXcTGqqfKhuDnhARfmQEr765VUiLn54bfCRdAVAkZN5uiXNPr9kPktCLziihGr",
  "key28": "2PXjqP6sJ86jLG2r2GPZZTzWp37dvbtszgNa9iVq9MWGnuJP9KuFbYpUGsj4Hvf7sz2VmsxcnYDnnKDykWXdtYgH",
  "key29": "2EgcgqijZxG49YjprU5UQNFQ7axHnoB6S82DtFQCWjNCcAQJJLbTMvWvCmypbTohGdZLL2XzwbwUUXbRs1vb5QbA",
  "key30": "4rpJFpqaCtK55N2AyqAKYUmz5rxK18hyN89pXBQpMthV57WhxAKBUoP6rqgoBFpR9rZFvuha9Ew8R512LVJcPegF",
  "key31": "5oMzxAMVvWQ336LLq5Kot6FRp3vR8N8aYHXT9vLST84aVjCCUGkcrpPrFQBrpNmF9aArXf1tkgsEdbrguc2DuCvR",
  "key32": "4u74foFBUC3eswTdTaG1Rad9GE5AvFrVSwBTCiY2YEtMHbegoZ39QVLN9KBmG7Tbjc6UeCi7D4wWh2cpnD4jXfit",
  "key33": "2zyb9tMjxHHZdJy774t5X5FmX3Vng59hVwtFWJRiPgpbzDjn2ytZ5kEHNNSNSjUxJH3snMimi4wZ6dpvG6FuQuve",
  "key34": "4ezMxVad3bVxa5zrgWYxcgKq6AKUofB59YuGZE6EbDEoAM8jX8HLNKKC2kL6ivsE7FUVEaymE63sPBetQUwh8Zj2",
  "key35": "421EifPZ6sHYuvkJrLmtBTXeMSa8RFzZPS9PsSR93Prd4eSETQC6RtxZUh6Scvqa5sjBiCBHcSWFULLATr2iHQrC",
  "key36": "2XrWU6aQwwSmQiJTnyNRoH2QKfwZZ6pRN1vXQ1yHyf5uznasybBn7ySykW5wUtAL1d8NBvamGy5BZ5VC8rKnRtxm",
  "key37": "4F2JPqVAZfMfRVUWmR1Zj5ghPRcKpb4xmdScqLyXMLQkKEkrtcwYiz6cwkQoDhjbYXe2Gn4myQ6hsYJCVcfRCuQV",
  "key38": "4B9rawfntpk8sqYLFxvPWKDbfRJ8sMAfy8gELUKTMGsv3DGhPAhoky4z6VVpBU8qJDPwyhkK9RwEfVfCxeydUnJy",
  "key39": "3yhfX4m2HLBMKpKFggc717gzemRDM2fGzaUgv4ycv4t2wjLco2cF2ry416cvVFydbV4gwhpYVY5rSJhe7bNXHX8c",
  "key40": "3xu99hMzm9H7KcZqdEhbHDKteeVrmiYBDFkPjh66NjT7hQkGtn5ikyFG9Agu16pNHCqaJ479y1JFeLY4VNdr9MnR",
  "key41": "56dqFF5kvf8f3aGRRWk4Er4k4ayTcjewZcfkijwiLoJFRXh5GtkWjunkvvzzcDx2vVjjLtWFdYxuD6MD864Mq5wj",
  "key42": "4W3eyPdYVJogotUP1yvbNsM1hZqsBYg7SbGjDy2d5FuLmce6vwez2cb4wqgJxDL7R1keN8gvDvZ1uDqN2cYjeUzg",
  "key43": "4en7jBDY7hC5VwjKXUDwy5vcWoRKJjjNhDzhLG58VQypc4k6dCkRsELdP1SDg8KJ7LreFNj9Z8E8Yhub5tm1vuny"
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
