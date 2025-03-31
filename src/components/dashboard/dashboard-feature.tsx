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
    "4rRcrzuzbZpVAamgDw9uc7QoJVqTTMKVg9zgAfpprEiLpVgN7mUkh9D1vpuFo2s1deypn868847cnrmRTkqWtgKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SjQcP1VFqD16WtmVzh2jDsgq7BaLvt1jYdxUav3bHXS2qsp9UwyyVFkiwuVzPHeGjmiEyV947GCqArV5tGvCznt",
  "key1": "5XvCLiLbwgTkcmQHyBreah3jc1sDXvWL8RxD8XoxCiBFmppEeLjjZF7mswuKRCPVWG2zzG2ZHpj1nQADBinnNRwh",
  "key2": "242QEHsGqKRWpkqCaKMpsimsBVriGLD4QKbpMEaXfwZr5rmc4K7ECzGMDNcv8PWLz8b63i3tvm3moDCxMsbyssUA",
  "key3": "aKPqKGMgYyXTJaRugHCoz2znhq2zztD6VKBPBfm9Cnm4BrVknPDi8Y3bLJXCQ4JyxTSSdJ4YQUSQhwnHzB3Y7vQ",
  "key4": "2o2c3NotJgveiLBfmCjw2UEovwgNLv2YbaJmrk6bAyMi7aJk7n9eY5MuYA4JvjFDunYzvzt6ZipioQ2XLuCFmSve",
  "key5": "5JraWjPRMyCqx5A5WhwZ6Mnm3tYBSFxmM85jHP1Vp3AcxnD6jBkbyR6RV435pJ2G99vUsQE6LyJn87E3Psz4jhCj",
  "key6": "3BucW57CUJ22eqim5eXd7votuggZKYJHesghCTyZb8jmSdbsGsPX7x7HNsVwLjWMiY8ksWXsLfEmRCGYJTFxeQmD",
  "key7": "3sqj2HfTPVembEeMXr9fWYxHRVxSKM9DbTq1YuMwEvUPDxhXHYQpwuTkiQmpqdgp4HuVutQwgeKJStKVTY3ecDrd",
  "key8": "5KbPSuP3tJvfDEohGeJKr7MD1ABx47g1ARY6EtGBGxvSmyCYNgmciBaFc2ySvMZ8JpKj9vq1HH5dvezeAcQLDYfD",
  "key9": "A1CS3xYFpkDt41WEfRLuWskkHRzPhXS8PtnJp3sT1AtnEPGtLKKG8UehMfbmgDLzt4sX83REinwmRW57GWmFvKC",
  "key10": "2a8d89cJUQgLNYn59MUN6A9eApwydiUugoE8PdG5dFpjShbt1Fkk1HQgCysdKrnkKoNpm8Qz6GJUcDictCz7dk5o",
  "key11": "4P4A3KqcmiNo7LuCTLkMRcauNqWkiZVLNSfB1zaUGFPZxz5yyzmMVAboLYhVCUzwhPnMdjoEv8J1z99suceRHWpS",
  "key12": "u9cvHAPyVn2Ry5Gf7gP1bfueTRYHFprZxNxJ1AbHqViSfaQeftpGXfYJTwonHLKPSKUMRZGspsesg768Zvc48ME",
  "key13": "4bd8sbK2Mf6GD9BNVR42GDQ2R6hNLLeZpdMRFp6CGTVsyQ66iP9n4FH8Fjkwar9aNHHe2QY9wbbriFiiwxbxs1C4",
  "key14": "5Hg8nX9QSK1aGyYX3FU4LWeE382a29J3AUBirZrBn2cgVPW4PUqrEHoirmLMM5ofnGahETudi5CsSGzH1wWAv9yU",
  "key15": "5KJMgVVegBjvAF1rJQNGwchts81Q515fiNme6MWkt92iUvS6tJGxHBugq8c46yFP7UEhk7cXDjwPGaKc5QJCT9t9",
  "key16": "pcXhNMYqJRqaKrhNKhHvBaLeiEb4jjpmoRzFMYg4rJNfiHGPbQKNTehpuVeS4x74DAktFwFM4Q8j2qVZd6pDQ6R",
  "key17": "3J1Hx9PTzaZ3TaVk1Vdwq2is4apbMNwb19fh2PU3AfQZnwdEbjnhFuKbYbouY315d5rPho7ohwmGPFnsThZ1A35y",
  "key18": "4nFh34qaf4JE8r6JQtbCEtjuTbjxSFkrXUirzhmkUBhZxM7LpMFoPgTgjDGA2hvmuuRTLgKsjWuvghGQC6Rt19aD",
  "key19": "2KMD51iB5DkFHpTRnjaBTyoDLDh3Zf5PzTeSzTrd7YjznbzHFgpWVRAsr53gED5fYaS5pYnG54sxfJZZjDo8AzmQ",
  "key20": "2YYqsbGDbhgEpGm3oVL5VH1qs4ETPsqHJytq14aY6GkcDUYCvda2fM2MMrDCtEXgPb4r8eBUTJsNZNyaPaJGTN9r",
  "key21": "5sGvgH6XM5PLQZs6CB3inShRWxmWkFFZsHzKNF4ey17933BxGTghRNZDgnXgjV8iMAxmZ8HuBm6FbfDauuxWGg5v",
  "key22": "HfpSKL91GLoMvGJMFbyn9AzAVqNxqNW89x8Db5wkC1kkssaMZiJwP2DyPNLywz8ieuNT2rt1YQpkGZwMv8Dj1E5",
  "key23": "5LwNj9ceYqNpCfqg5Fu8HJP1QTvtuDcF57cBW4DrnTSj4dWomGCPRZK5UETAQHtMgJjn64z8cgisxjYMtjs1kcJv",
  "key24": "3fy5ooLFmmx9p3SZcaYTaUL6mTq627miQfrgDMhLmDJBg2DjMpcBSiUjTwCD4Lq4vQWq8wmaPTRQqMFTjQBZcusx",
  "key25": "5GoKbWh3r4EU5cZy3Hkec42kWUXvhN6pNQxRUw1LdAEuuwuduChz74oHojXMmoCEHZVUqsVMnakL8K3DmEJ6cRDz",
  "key26": "1grLpeG7TMjsyviAJB7PzpsJqF48Z9xEXowScxaNyWVJ6fGZaSW3SnodUXqy2t56ZoDh5pxn5Woucrd5gPWYbVe",
  "key27": "58VGHnpfexjRr6zkCCDjRhht4ZN1XHwZrbHdPHyh7LhKWMu4h7h1gs8Bk6EUdkYUtRzPDKkyGaYhqaKiMfsdAVf4",
  "key28": "3iCTqMCiEr68KMiNBY13LJbo53K3yyz4iWYg49sNi6mrLPXs2HYohLW2bbmBeiUD84bvmVMXsArcqYcWfRVRTE4a",
  "key29": "2fdx2zy7W5T5r1n1gozR7u3RpfTZ3bgmoRRckygBv9rYfK58mCMP6nnX7Y9T1Lkqh3wp65Pw1guhRzHxhfhrkp7Y",
  "key30": "2yyqiHPZbn7JrnMwz657tqHFkTrX5c5RZ9LQgREFtC68D2w1mfjGck5zWB5EYsWhP1FAz2c7QWYFPmiQTbarfp73",
  "key31": "2KjyGGnoMfHzvheQ8C9N5X94bxEz5HxP2uy9u34G9hYWN8E27UTuajSj8RMPJbHZ3n4U84AUWPeDAqMDCUqTd8uG",
  "key32": "27Hv8SRPVvzUtZ3H8Lxc7UZ8mvhBQXuYmBj1v1vZgNhHj3FBwF2Tb7YjmVmQuGBByFmyXUzffMewE6U2boGmP95z",
  "key33": "fuBxB6NY2KuuQU2ApP7MgJmZmcgWxGBKNNRw6yPnRwBHrp3JBnBKHW26G9bwAQNf98eA4P8fxDAxzs1oPAzKgHD",
  "key34": "3wYYfX271Gm4cVCFFcQVRue6bfxA4xhQEx2PSYe7Y2v44BAU61xbB8RpLrDw3ccfWsCJGFNwof5G7p7TWBmVbm6W",
  "key35": "9q4GYdffgrQZi4C4wVh6JsTSxwtmcXmVZWa99KzLvmVKzERdVpj78jmfz6Yakzw3xeb6mBEEDeAZG6bVYrcKSzC",
  "key36": "3dp5FqA1cdzKXkA7rpXuowFicuA8MaWyk8y9yGG5BkbBdxVMDmJkMvgqA6mkGMmUzHacZaTxX3X297qsE8DWwuw8",
  "key37": "4v7Ti6keEdJZKoNcN2nYoDkaRTznwdskMsGpgWWVLEikp7SJfZZZez4y8K78hYz319y6EbpHxkMWCiSBxt71BJFf",
  "key38": "48ce1gsdZX9VXuHpiNa2H9AoZ46CYUYeSomjgFLgGTSZ8RD1piv9FCRZoJh2hzXLpgFi8uUkUnoUTMEARLSQMqv7",
  "key39": "5NuZL3Lufsuqv1b9oKPtQRrs1GdiFGsSE7YusAQEaYzFFAAA5NJbjvdDPCvNF47LPJgRe1K1Y37MGZW3hvi6oGsn",
  "key40": "39tnTwXHHVjxkAtD18GDk6jtnujJvw1YxM3zTmcWYRJRptgS2hSiRRX2x9iwBdkCQm1pFtutiCPgFnfQjPgLxnvz",
  "key41": "2LzNc8EaUMqUam8n2zdRE5xAGiZWMzcf4WMfMgpqR5dwvxRSodNMfPdNuXB7Q7Z8eDKQb9GTA6eN6Gh3LDrVx35J",
  "key42": "xThnwmGQzbCyBbsT3sKLrzwypuXP8ZFRmkv99bPqeKZjiMpuAyFNV51muprhHHahsDnSVmo9ZtTnMp4e2aZFc63",
  "key43": "2khM49XDNw4ZcMj51keHwhwzG6tWTm7TvPiaNPxKqJ7MYFXBuofZ2HXL776b1SMNw84gBKDR3C3CmDJDRBdmgEFi",
  "key44": "WG6YVwqEsCJKBfSVUY495YupvTmEpMLQAna6e25BU6yM7ESJoquqW1k9TDQmvSeDBrd4LEGz2T2QsvdL92cbfNA"
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
