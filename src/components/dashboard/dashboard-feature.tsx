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
    "3GNMSnNCYQwm5A4aSYVoKo47tbDPtuNRAiyXA8JpkudzVf35GprzaLVzBxWMECyVuVBWs3w8sE17EBUgv3Fb4jks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vEAbPduVYooFvoziyN1Hokx7QhewipTCmp6uhdmUvGyVUFBYxnYTwRsP8EQiAkjqmyYwgz1DurbWqofX4sVfMaW",
  "key1": "44g9oGy13puu4R5a8HX8mamu3tRa9tiPB51gw4bU2ussqi9hxzzWjxu9oCpQqakyurt3nYRNxGPicPqHJp579tBT",
  "key2": "64GjHefoLfRawAzmPXSnsxXXEVmEGCeAcyhrxKgUhUUBVAGvC2bx2zJ1SkAeSbVH1H1UBh8efQT5U5hHdzq1zSis",
  "key3": "5eEbB1ozhF2WH3MpWBYyE2vSZxesyRxrTFL3raJu7669T9spvqT1LJmrX25bhNfbhpAuhQELbRdTKWBYQVCtuiEn",
  "key4": "446Afo7VtdkGZdVJPDAVeDHn8afrkKq9En1Tf4icMEEXcTpe6LiYydBPbiTD3y4qjLEAnUqNVC36fLSP75wLuTpA",
  "key5": "F67DKA7AiN8iomz8dqJoqPYWWFc6N8rop2C5MTrEoWZ2meGpiHvrV4yBnb2QyDjix5rVQ1RcL6r7HJ2RHSsC4em",
  "key6": "5qWXrXxWtBxm2xkMmGDbd33UYKBnKnAa6Md8FKRVsvayyLa95JUnf4Tpu5ZCPG25kwRQk6kjUzkTTXoJTwcHoQ8q",
  "key7": "5zMSAJZaCaovENAWzzQnkcGe4YFFZvQtBEuT5EwjczZRygjR7EFHtJHrdSFX4TJE2iYvgnbA1FxmWjRcj9fwLiK1",
  "key8": "468uNy4Re2GN17pTmWvA2H9KKtd1s68xVEBjPNaZEknmGTXX5MCsbHj1xcG1s77q6uQz8DMFsnF2bVrxFmHVsWFJ",
  "key9": "428spU935K7cCfPjCx3rSD6uU8m4W5YHT8CaffhGqAcqEza8cdqYhTp1Tr4AEpCHPfvv2BBPHeBtpC9GV8ApL2LN",
  "key10": "5rbbGRVDNhcfuWoSAweWUAA4FKTM8BuhEFhoAudxxWAqjHpUJCJR3NdBfiHM66U1YictW5jB1PgJuHy5riUuuFoM",
  "key11": "2zyCXEuDuuKnFSSEskGoTWqbFa9fyhxRhJDeHQKX8Cdh48aqvyTgXsjvSVEkBKQUgbf9hEzNEQnHYYrn6ZQVxGwh",
  "key12": "5q31zN1rkh2hspJSz7vLqT3BjBKoxLWadMVFWHdVLDfgXrf7jHYWXGzuD1LGZnMToEtV3QaSGMQRkXjrjvruhSDx",
  "key13": "4LqPWahBdX6PnHNczvs2hTDu5AKrX1RvuGVZ3hqBSHtQAvjthmV4Moj64SJmwS1ZaNMXpwxaVR41s7muxnxhZBAg",
  "key14": "36eRsdX8inqRmes3D4LumLvnmWAuCK8aWJdyFJCE5ptQ7TsuyMkmYS3mExAzMqsKbjKT8g2vda1tUUU3C33Rfr5t",
  "key15": "3BFHdQe1VqUKVvfNFUMqy4Si9D5z6rMD4NvLrLrLETe9WXsbr7iEw1cibUkwnUrikSSqsPxH1Ni74wUjrANTqksr",
  "key16": "3zzGiBpFLYEhZopqtHusbu6zbrHUwKEUK3fvsHushVqDhT61sUA2VqRWpfbqzSyPB5kxfJY573hxiX9U2oXtHKDs",
  "key17": "qSXL48yRtUYiTBP1ayf19YcC5CkgobzhMBGkEfyP6uZyXAqhnbt8Emt8VfMEusrJdG2EJ4i9wVi69GHT5qu316J",
  "key18": "24XbBSGDqxW9379broP1jZbV4NmmrMmq7u9FBZ2z4svwoDJAKzn2y5KMcYWsacLgW1Rau7k1euyvrZHvG1p52rV1",
  "key19": "4QzWKWRn3saRr1KSMRGjxBzvCbXWh3fSS9zbmDnx62MrzgBLnASvGLtbrYpi2r2hC1j2FDQ62trDb4LEBWSWfouw",
  "key20": "5koQR2Dei3iHxNeRPomVqh4DBK5JzvmZTmJx1wyVbEipzTih8Vu8jjYGCrGWzxJmnQYgyjFnoEGpH8j2kiKQ8ixy",
  "key21": "4GKpnguAcSS1UM2n4N6dZJ7Nvw8UkwDgc8Mbujr8SNk6wuR8xcs2SSUNmYuPMRGNGywg3EP2LcuH3pGhwkg4uhR5",
  "key22": "47zeGSCpyGj8oC5GpA2ft3cbTRTQZpWYTsonbrBaaymGovAN9VuST2X3tBZftb6E9DUy8rPEQYJsyEjcgfz2eP45",
  "key23": "54vot8WJiETp6srZB2TESzmyDjUHu8jY3ixfNJPhYErYFsgmhiMkxgZnvDmiux8vRGPxk6FP2BH7aycU17mEdt6f",
  "key24": "5Thd6rvdPsJec59oNoeqkt2CscdpivgDvMP8zpCsehiY35QpdbEkB9UM8Q14dMT2acg8Vq9y8fh8yFkfxJ1aAoiG",
  "key25": "4MTTb9p2RwBCzpZHvQSu2fHYN1VbmdSADLkZMKZCT2sYPrbaZkjaktCsFng1eAuHVXpLvaYsGYhLfucNgozoF8TU",
  "key26": "46sqo364pSuQ8UXqLJfGf6q6WQZsuh6Wv8JNGmEEMk9nU658DEAjHQxn3gkMVLWc9aZjiXm3r5mW8UtCx196rKVS",
  "key27": "2cajuyrWf7i3FaipvA4jRo2T3fp1FeX3PG992SRV2ZVpYvaa5RoSAdfE9xT3Pz1JKJKyyhTMyxr5mxYdy5sQUnAr",
  "key28": "54ZcYPDk1FgQHodSbWdFWHokRLSbGrnXdaBR154co5cBYX5UNSQBQYZyvgjWUN5HzXTZ9eUcCMBUzThB6reHYKy8",
  "key29": "27SfWpFhEWoBeAJbrCXJqDyutR8PKpqVhogj1tDhjrmTbLMWPkQ2DWsoY3pTmwMDmxhBbhTP591Dbv17iY2Wmq8d",
  "key30": "5hjjjwt1T7fNhoSN2JZdWh83ujBx1m3cHnZhgPQE5fbKqqCmHHXRQhLJhSntF2ApA1T8DCT6WpjqngehvMLm2hsz",
  "key31": "rLu5kJdVPeTYvJuV6Tz8hHcAtNPp2Q87zUpLkVU2De7SRgBQLLJBVYSz4LBxrC1fh1CJYx4LupUGmxLwcSFhC2V",
  "key32": "eMfE1ydB9VG8zU1Qo8hFGZzLzdBsRGz41mfay71zXX3UFtLAJD3N2iwRD28hDvJs5C2Q2huoVWBpBCZTr4UzXCJ",
  "key33": "2mVGHGX3QFet2z5rdNEci93tmsVk37XLQwvTqrHUwtoBGaUdEvafgG4SpVvwH6P7BSevPzgMHdPzGM1ieABtFtpC"
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
