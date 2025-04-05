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
    "wDuNn9yMKrmLBrBoe3yrZDFZYbSNsPrHip3EsyAjsL7L5YUAysRF1LmFLRBCc7LEhHcyaEWVZWoAUMGbhkVsd4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RFtmcTFjNMKwRqkVJkbWGYmihSfwfd4ymwzNFrzou9aZHyJ5AbyS52ShKtWSPVkkQUMWP1cQFZTpFbqTMpFkSFd",
  "key1": "397LQ1FPtcAr9wJhQVppsE3iDWPeMRcSUnUfxGW9xbFf1Ck7uss1PAFHUKeFXFXLWQeoMEkeyFe9KdzgR8P4tArp",
  "key2": "4WPpx7CdJpThk56s8vdcReLwe1zXRUxo9NbrYQNgf5NtRbRHNgoRGCvmXF4P49bb1i43x31SenKAApkFbMyFbXdX",
  "key3": "3dVUdiqKF6Zz2N86zmAD6FSuZDVeKZr12GwPHmC7iZtRf1qbHhm8uAaACmrShZkWMoSttQHTYx1bynVcbKrWKzFm",
  "key4": "2RWczZ9a9BJveuuvottSXkdzgrBiegiXEitFbiaPnN5ppCAZmFVEvELmPS9wux74LVe3nwLL8fLnYBHFgM6CUUtQ",
  "key5": "4Cbn3fquu7dh4651YjMk8tnkmqxnacMjvCp72FAFCdvKbEcLC6m7REvoVXtDyVmeXkGCmAuTwetPHia1kTkioKd9",
  "key6": "Pet5UBPSd1TzhJ13gg3wmyzw8PQZmKoAQwinLu2LwG2bkxsddLvQ7rRyF47Gmc9amgsUQd2DpDh81nbGccPQicT",
  "key7": "3SrgjXVJgmQLa9FdrZNwb2ZPrCC4mJUyMsAoLsyVoxAofKPhpBKKrxSEkr2WnTxpqXB9QWNSV8bZgs1NtdpLzYkg",
  "key8": "3dURTonJuqpqGUfeqkqe5HJ3VnEvN2nbCF23CgyfsJBMarJRwMmVjZoSewcs18c5p2iAThcsHsgzu9cq64wfQnPq",
  "key9": "3SLV3kdXzB59nj5gF9rc53mmuLK7hLf9UxBeQeEVuK22f9W73paSy6fZQgz179zP7soZidLAmfcyoxUVFcoKsaPB",
  "key10": "FwMse3zn1DBXL1PgDAu5ZRDu5b5g9ofvaKqFtpaYa1UrRVVQtQa8o18ytLcKMPqTwuzbz9SuPMTXcEep2MAFwby",
  "key11": "5pGHeAU3oS7LxTg1C4wxPrnZRUeymvVn7rDYpZQBmt8oP5jkgjM8p3XXyiczTzvPiNPnVM6qq989TcigNdgb2d2o",
  "key12": "4kSftKvxtjRhN4bhAjo4Msy51irwZ1GAYAqZzyTPTtbFQuVq642kNSZLXsYfrUhSdquNNgnEr6p1BiJ2FMBTzdfy",
  "key13": "5HzzuV4MpXeUHS7vYp8VpN6atnvf27rdHa3Knd9yh3jBjfp6XXHzRvLd6CdTui3JywPGCavD1oSoi7Gzip2tTncE",
  "key14": "59WkaxdU4H5FhyN3RMoGRKYRdr67kLZCzRupWcYN9z5sU51f89CWw4K9bzwA8T22vcn9MKe7btbqofoVADZAjD23",
  "key15": "61Eif8s3h3BZEtnaqWasAmK2QmznYHjhnmsSzUPyr8iGZEm3vNuSjJB3KWRtqok89RRY4BtJx1KVNrwrzhjxBQpw",
  "key16": "GQcQjprXD7TLw8pHhq35C45TygnTUr3AAeQoit1uKBQzLZhEQSqBJQLzrcwsK2f2CiZ5t3eHMVda4xgeGuncFWN",
  "key17": "EBmzxQY11nfpS49P2XGyhyaCrxaYk1xkNgy9AAhjv8Y7xGvHZnpcdp9e8x1kN76KKSgZ53ARACKSyVYoXvCmecF",
  "key18": "x5Xtpt29Bxu4Su3Zimv886ooRjuQ39RUsuMzrwE6PqQYiAQDyGaJAV7hEwYZV3Y6TX5Yb4gf8WaFmLL8yYsTK9u",
  "key19": "35vEb1Liy8Di8sighbDS1xqFWiNpkBg218hy45YdrkyniCbXKEw47SJ7N5TbmCKofKF2djTD7bLthfoLucY7RgZG",
  "key20": "2cP5TatcEMs7Uoo4cB5UN5wkh9QU3ocC4gicMe91c2CTEDfq6b5jMPirwatmrnDeRft24jMPd2pxxdnF5bCj2Hvu",
  "key21": "DXowYQmZqdh2jB7ZMQuGGws7STykMWUdNQqUW7h4tZP5rNjobuM9xynkbHS1miQX5unDCGuXmbqPA79eXXfps2n",
  "key22": "2SZ2U3SMmhEU2LciGvenc39yS6rKs7qSntxoLxoD1EXcVp2DU4AXun3GJZd1J8zzcuD1rde8CL4bW2iTcteWm2Zw",
  "key23": "2WLYo1u5WoJMVkMkpmJtF1L9tbJ4JJLXWdBg9o5rLLxji1yqJ2NTSEqNRRsmgVXehr3S9GmaxLis8i36EF8AT6rR",
  "key24": "53aRibCqyjkAfRG6nyUPgKqqihu3WAT19txAbTxxYtzndMAH1n7PA2Ahb6CAaMD2NNVedJNHDBxGiXWYE8icFcTs",
  "key25": "fVzYUhKpJT2BW58LrdW6rWAt3DFGhGtXBq632fPL6J6hcTSQSVJSkxbSVu8NBj1pVbjWHHRuy5MEHVQYGU2BrvB",
  "key26": "5GXkcHjTcAibCht5s5YVayE95c1MKTQ9iE9rq3TaJ5UaiJbqyoTgNQQuwKh5H4GLGgjMzzS98LTJYE4MYmM5VdZF",
  "key27": "5CJk9zSx86okvXHfdxNcwam5jyZZ7hKUdP55JkCne2cmcQCEjeiRT23AA4eUQ3XywRZCtSmPKYbN96nUt4tv2vgz",
  "key28": "2xSDZM5RaBKvNQHH38MKwh4PNVn9ZRhhBTc9v1u4mstk5xxvv7qBVu15wDFWBXqQ2pbiJJQjs4qjK1TCqF5hNJR3",
  "key29": "3NrgVn8b17MZrP4f35t65Xv12p3fgA587zqqae2rJh6ccuBiqsmmkbDfcAAudY7xUe4FC5r9aRFdZNP46MzptvgQ",
  "key30": "3brMQkmBBB5eQo6RKNEjpRwtMgJySTnbxX4zDiGE35yAuhTqUa327dXCM5PjsNx7Kn9Y9eSg3HT8ub7DXCsEfeF5",
  "key31": "RM8bQcos9wod2jm7NE41xzXTG7NVAALnBz7oviEM7WnXiFyzQTvrqzdiM5BQ2PMdB7KUqN35a5BtqzBonT66E2Y",
  "key32": "46B3caj9aBjntby2DS5ZGrWH5XRDs8pfaRug77JgDXoxutPN7tMj3eCZz4BwUknxRe4S4U8Xz15PpUoWUeoW3dTL",
  "key33": "4Dg8TQvx3TXbZ8Fsqmc6PX9M9Sqc92uKd2hnxUCeRrcVYLmEVVSjpVMtNjtq81tojN3pSZ6njhwGme7JbzneBTvs",
  "key34": "2ZQhsyVhXDbfDkNLUDNxVHBgN9d8CUs1SMxLwECHT3qFEPif623qCRCrZSNrZxG1xZ1accazQhWJU1z6h4U6J4cz",
  "key35": "2913pWDnLTMaWHMbS6ZPH7cM1FKaUGZSpKNLAFPR9XckySeMwv9pwGRF8dxTcfko2mT9huQfwQ52Y6yaBbSMTBYo",
  "key36": "2rLqZt1wRbgZtifTuZaCvsJkKMikfA36p4bHh9hrEtnRLrtv7hc89UXDxP425kud2JjP9KK8GFrdhcXyGec5Bpmy",
  "key37": "29bLpebTuVsEagwLeNy7QiQLLkV6x3UYAuEZ2QcfxUpoCSdzRpMT9GeaUNKEoW7URnmcYue1gfxvWrGcaPxAoqFu",
  "key38": "56W9H5pZQ8XS8JfpchwxGsntCHk7q5Rbgp5Dwh5pLTfNXnmKEfjVV63PrnopooUMw7yT8uNn26UGW3fijmiHNhUy",
  "key39": "26TSegjXixDqhM4ZoQNHqeFx518Q5w8HNSMAQ2H4tP8wpsDVhrnf7f75121FfdKQViFqnzkBHn3nit1qKbNFE4wy",
  "key40": "3JyhYEQNqyoa6pPTk6yZqe2jJVfLJ6WXQoeHyKQ9atr4auPvrBpD2UvQZP24Vxc2kgjQMcJuXDow2PjCfRwa2Eqc",
  "key41": "XaQuGxAHzkaEVd5XvX5wL3cYjdG22NwF724LKYrLqfJHgZYTHviwvzFrH1DHxfbqW1pzrDKJYaCpEaHFPKmQibH",
  "key42": "3xseSJx4Uy3skpiNxyFWReryA5PueCUBajs3DJiQzHdjjuy262D8jcjoQBuUBtyryaieMaCQkYMnmsojydM1jmme",
  "key43": "2eu4Pp9woEknvHnSYUTX5VVR4oxCEw5NbUVtmw5htwSqBfDCEtaQLDicJXFo1Aoqb3ZckNwZNWgNefEELQyTwCZf",
  "key44": "4NbSxgNjynfr13B22s2sdohswjD3Rw23Fat4ZaUXtPeRv93NwXmU7GygESgQXuV9rau84xFpciWpGn1d1oEwp5Cb",
  "key45": "5eBAQfuFK5xYCL1QnMbzKRoAFoCbWehWuKorc8dh1NQ9ro8xgnKZxpYmTVhPvfSmNtLqZrXZXxghwkPpwudJYtvw",
  "key46": "Prz1Wr9V4ykRjySHajZ8hGFyEf1bakZZUakWcXyVMbH3rRGYadU2k38oAVQfkSHG4jfmZSUnU8Z3JA1s77aMxzh",
  "key47": "uCNF56cPoDeRLSwFfeSf2RtKqUMeKyna3b8S3KEVf7wMcMmoYrYKsTZ53wzHPeiRddc7xm9HiBaLuV6QaWusLRr",
  "key48": "1Uc5RCbmhd3LhFS8RXYotT2JuS9kzvyX5n2oLma7g2ewzrNqRuoTV8BhT2PWyCX59NegC7V4JdozuArHbrj6rrU"
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
