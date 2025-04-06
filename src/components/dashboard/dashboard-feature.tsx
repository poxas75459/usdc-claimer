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
    "C9wNuwka4PPQz5X53xWpJvpvmj6hcXx2BuGHjLwgidah8KhsN9Tph5EoRvuJTp8LWKjpFj15YtjATGqA3SYRSxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MHWsesxadfmfwhwt3kGSEGfiSaQu42mFyF2a4XPfKqXBdvfL4D1oMxGKyex28bCRNXQPhP65cP6tPH9A5a7U31p",
  "key1": "2qCQKxPX6841JPTBmi5G3eXibHxwLuwKUYtw478chwzZaQ8RLWtkkvrdeMEz71H6fe1ThZJPFCcBPbAN2KYfVgTV",
  "key2": "3BZaRf3YS4SaARrcAFgXrLtwFi6bawKcAe5HZusispJBDwxd2LU2ZYxXGTJZPGubRdjAsejAYpk1KZ7ZMbtnBnfT",
  "key3": "65HHyECP9oGq2UAZZP1PhLUemHyAxbisnhNDuFTH9DDagzS7FHP5UduXxMH2tTwqxDpdZhf7T8QE4zBhrZ37RXtb",
  "key4": "4b9WqvAK48xFrBBh5az1iofmQ32WYZzo6k2wiGRYb3p5fwgjM7LfmW5pkHsCtQvhkXfv4pkFu12aKdbaZsRZ1rrC",
  "key5": "txK4WYAYiYKQaKX3UCV6q8nubGPJHfUVGgpPifFWDwvtVEq81yMDc5CXLh7935DqcG6VGEa1ABCwzwaQkUjA5hT",
  "key6": "5X6ypnEFrHkXPDN5QzoTeku7qGYi7DpxQrDaoXmyVF6GKFNoVgdM7jL9tP4KHmFS2BNzxNJNRKPEoeEUTa541zSw",
  "key7": "2kF6DdaTvECNVuZD4n18Cbkrnb6yCq9xABzPJvNYUYmbMzmLoxiQPtNnV8UaAMemA7FcbMCutxXkhiiG2Yd3yhYE",
  "key8": "5t8NUG1dXkSmRjnVBvQQ1V85opy59uHt7ZY7QdBtLjoWs1VTSYuG449R7qtgfZXJAsAT49YHuBw5sEoX4RJLFx9d",
  "key9": "9sz8SXQhs9oDeJYDo8qhAGexBqL47p2iesdTm9sKDntZjp2FqRSHNnZ4jzniKDchVRE7hUzm4boBceF1nEzQxfz",
  "key10": "5NopKTQHnYGhWFVWgceQLRzmsnAbLNr78L72Ha23xyU99NYAyT88aQR5RW8gBJ1THMqk1B8BAjHuymYEM9fciQNw",
  "key11": "2ahzJXP1VwsofwnCDL9hfGdZikTMKGSSanTG77CxS175qR8AoEP4SfRB4hY4eWrRLdDWaJ8ZNaokJgepQbYfanbG",
  "key12": "YEV9uiU1PvThJExs78qXhLS7vGMqDBt8hB4KejoANfZKb3RvSNmkZiKGq19zFbjRNNV5tP6hZVMmN2qshiPBq5T",
  "key13": "2b7moNoUJ75dwBznNrb1ae83paJ7GJEAma5Dph92EQQu21j8kMLmD6cy7g1ZdyQPzWaUhXteWNPywPWSjmVPL4Ge",
  "key14": "42oJJbaqKfYsaXxwgNhLb2cnCjRZkdmB5orr4cHfakNufTxsLoKvxqN9W9XnXWdwoNVeLEji78UDdnQBqXoipQat",
  "key15": "2Jf4Nitw9H6iSEMjSDLGYDMtMuwp9RycpaJCPcqysanFNx2XXesAEvsqmRFkG9WGu9vEhg7YuSKTfViTu8XUY3VY",
  "key16": "4RX1oP3jaZnH3czXZz39N4Zqy2fhaWpRi42RGFuLvWTJZEZMpYAk6qNnPTGdJBkXWXeM4FEm9zia7DPTBz33CLcb",
  "key17": "5pGvozgFTvqhSXkBv3RTADGG7LV6e6ri7xVUkQ46ne2YekbsCnYygFay7Ntoaq4EQPmvGPeHh15Z9UsWphBkr79Z",
  "key18": "4N8PPDC2wPTiQdB6Yv63dTDRmP99Z2ZDdU1BQmM62zxhBZdHyVPbvMKPFHTer39VuF27iWh5CHSUWoZysLAHZ54U",
  "key19": "5ReRuGveoeUejQLpcybKNo91BTqNELXqWHyHGoGAHYrfzqxyV1JKhKY4Vtes7WeueLk8ihsyWhEocqe2JDLco2U4",
  "key20": "4KqRHSUwV1zJuyMLbPhPVQwiX7L7VimpiAV3RQZHy2L1fL7PxsSuQ1NgcYsX5je6TvXRgXv1RR8sfeE5szktuzby",
  "key21": "4GjonPp8DyiqFe1z1bsE5qteNTLAzks4sf5Xk1AEbCCgZ9Wuy82tCa2NaUPeJQTPLTGdNgf9FYmsz62WtQEDhuYq",
  "key22": "3SH8v7hueWSR1Bbiq1xStpcFPa51rT4Jg1oddTmaW8u3Trj71CjCRjb9hMRMau4ytWCyioBp46Vu2Hx6EuGccxuD",
  "key23": "3gXqt8jrL2vJkE3ZQx8HgYLRiQLzYSdT4JkcyHJXNjrz53qMw8CkSRuj357fWmFRq52eRJRbRtyYEu64ypn7VBhy",
  "key24": "4FnavrvYd96FpHzad4FB5xfdPs4iAzwnin77ejsAP8xhj1NrwziCMq9wy3KwMaEE5ACvUVa23kYAd5MU1WDpXt6Z",
  "key25": "3QYwJjLjwonLPTEgNsoW6zsTzvGux7d1vsQqvDbhvcjmLgHHgiZijYLbv7aUfzvs5By6H9QwRcF8DWdAQpkr7GLB",
  "key26": "FKdKfDFCpcpBBkYd8oizAGyW6SWQd4SiaqAyFEX4M3Fnp5WwrekbzHL3nXE5PE5JCfV5THJco4HfnivScFJWnFy",
  "key27": "otTD3CJMyViYCCahF2g7CV9nXmbzjJjdoFVfUW9rXzp1yDDLyeREoKrUXTezZKuPrcq1UNEw7SpbbmiQXPmj4ms",
  "key28": "2L2x7Yxk3gPV27koUsNEbengyPtDoX5CnBzUad5qsnb4DL7zYnM8vxcCqmGqcZXPqVNMvi4QR2uCqj58ZBecWufx",
  "key29": "5GYMDaTTQfL5gnayin53vzSuMtQ3iTHvSgfP9orxQsTZACyZnXdUwB6wSy1nsVe5ym2fNk9CSC6BsTm7b2b1ne5W",
  "key30": "x96cwaJn2EkW2fZF1YVvAr2n5mi9AdFzssZN3BKz8FDuwC54VyBiMZKzh3bvDhmTdNryofq6inzTACFNg8D6GH6",
  "key31": "Ee6PX1xyu7mkdgmYtpZgb5sDMdpFUYnVAGq2ik19pRTmWmza3egXT5NKxF3PMiLoZXpDkioN1voBQkX7fJfjsMJ",
  "key32": "4gwi1MZuMbtV74naD3LyvaygYKkqeSaudZStzEx1WyCnJ78F2GUPxjbiw6dMeRmjw3snz8hd7WU4cQsuz161g7Lt",
  "key33": "4xphzP7njqQ1t5MjTYXqCGWMV4tyx4HbYmTaBgz4Wq1J8dbFHoD3PgvfvF18gzSAARiECz8dn438P3T2eqdQTEk6",
  "key34": "3UruG9QaGvUotnuoCiTVdakzczmonkGww3y1f4nuiSyydLr8xKbwapbjM8XEFECWAJTX2AP7X4wmLZhKirwi4z1F",
  "key35": "56SxL9nXKCTA4wKPYr8M5zr67g3vTKKz2PL3Sx3DUZQeJDsvZFXp4b3Dau4CgW4JoupigKh9i5QbXmAAJnMwVfGD"
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
