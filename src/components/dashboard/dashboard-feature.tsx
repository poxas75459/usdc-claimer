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
    "4XvfmcHg1zMpvLjshPuZaN1BCuBAE6J7FmZa3TZxpVuQ7Y6pa5eSQwPTgvy73ecGXc3dTzcHwq7Ng6rpL4ff1y2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LKHAuGGyFFfNihNdvyT92D8dSubNAUeTTLKMEUfLjsCenLDLfWdvgjjXNysBSZjppbdiCoF5cZqyCYa2jdHtCee",
  "key1": "4Vu6xTZj44nZVmra6UchZmU2baDtTZGkJHN3PAt419v2YTGWKw1ZAGLxg4tJiaNoAan82HGxpYJG9N72jU7Z1K7J",
  "key2": "59XBHBJS3NgH1LffxkLmDmSeBvZm6aoxdEZNPLqcXFm5q9FViRFqdPU7itUa8rdnsz3bnaDMzaELP7oSwkYho1Jr",
  "key3": "3ZLjM5JP5RVUaFTrrXAiyTiLXeMcnsWpTUer9Wf6ZQZCjFy85gUmouSDBQtP7LXtDDYwid9DJfjuzLMAhZEhFdrh",
  "key4": "2R5Bp9nkyb3QRBJPCxH4LuvCQXctUhG3PVt5ScuRu2Dry3dtJPCcvZLbsex6wxeiN1ZsgKd7GWgR2i29YdkqVs9",
  "key5": "TBppZ76KFHjriM4DbzTicoP5NDApswssTvMvQC33ddqAeJvA51Q8pHE75MTAZRp7isDqBZo9vynHjwNiwPsbQKW",
  "key6": "5wHKiK5pZcKnu3XYAzSFC36U3hRLMus7PNTXCXgSdY2km1sNTGazYCVJY9Vw6cKQpTJUizuQVJw9a9p3rG4315zX",
  "key7": "ZfuXJcXJcn7HkLYAbDm4VYdCYf3gvySeAejy1e4EZfYqmQVRtCDdLUowC87vpYY6pjUVSD7fMTWEHz9w4rJ9XYN",
  "key8": "2wuT8x6NrK4UxRKozMNZyA3himxH51bkWf9EuwtwXpB4R37X1oxKTcMsKQnWnLFPGWozmoyiPhxgs59HQF7nfX4e",
  "key9": "5Ww5cK2JkPgYFNAi5ExUwb9VVdpi2toLeserittrhXBMPQBZmmoJGL7jZTAe2tfoxrenKw3VukCmeRrXgiLNQiGr",
  "key10": "5qPrZwrXcLMqPsDAjYnoa8NfAqsQ4zQpmd8gLpHXqLyDmQwS3CcARwo9aCsTSnaBrsYLjowndkghQesJojBuqThM",
  "key11": "5K2W1PXTrPRJpqHYBvXuem9Z8CqceMTAirHhqjJ4TAaMja76hm8ykknz5dLmZ2EHkFSJZjVSANB3RFTrijiq2xo2",
  "key12": "5KZJjCd2XHDdpE24kfbc3Q5qXHZWepy5HLSeB8EbJmNEvuPRHbis4QCu9YGkDVX5gf4FXrHhnEujvirQdWXueKUw",
  "key13": "3Ltc6h5QJCJviUJmcEqtSUvga99N5AyKD4wHgnS1hzQxmCbXm5dQnjmH1Zw9a7n2yvj9o4Z2iE25qdjnaBcjoQgg",
  "key14": "qw3pdqF6fC7Y3ZDY3pcNwimuvuTAJfToWGNtgd5k8GXf2tc96nGRmpVex6bET5o4eksvnd4z4VPcLgj7RrhUNED",
  "key15": "NuP2jscRzSxjWFry2hd8g82t98a4P64fMVqVWEv8LaTogva5G3bjmKKib65urCe4oU3U3dYbsKSk4r5R85LwKVY",
  "key16": "2A8D9AjjiuJSvBecdzGtUsAfDASiZMmjmTGnmaRKgSUoVahYzHSc5rmE93RSBHP5yMsvvrKkt9DEy9PQqd1crpUo",
  "key17": "568eWuG45s8szinS9HJTv3NLmPBGaxsM1Hrqk8T8DHT1WCntjmP2HEmPyzG5CMeox3DLUJwLx65Rd1nhQ1NgRzLj",
  "key18": "2yXnbgzsEdXbhVVuVWyP7mavQydZMaB1NgaHs1HAUQNzomaEo64MERwWC2oNkmwxPUDyeuwUeJrKDVD5VqjEyDgp",
  "key19": "4tE8Vk9aW7DfS8PYa3B8NuNDiMi1vSJB2KwUrhbHfBdEeNbTjixVQHbctkNcC5RA2tH5WFsE4MsEshLykZvEazcd",
  "key20": "3pwEtNgpXmJQ58HgoTJatKvQEqJWjHT1G7XuNPm5Ehp2KftyS78rGdmFTbjLynDtedi2EQjMzxLGzBppEYtY72DF",
  "key21": "3J25BnJJ4wf9isFLrXmpeogrnw2hPKKhiBnxBjxHxGEFMW7xjSogVePYqRGUBD5ndYy7yXYfz744h1bSXeV1LbLK",
  "key22": "2tj6B9VhAAiDc183eaYJeyw6x7VrnwAarRrCRYSdA2DuuZ9HjJAPqmno9qq587UBraagJd28jw4CMvvG78bRTcjP",
  "key23": "uuLLEd25Da9Ja3wdLYTHEzHgYvrdashwKx6uCVGSoqWSnDbRd4zMn8wcLwvKKRcggFKvpqCmEexQUVucNkSZNes",
  "key24": "2F8UF3539oPGBbjTScXNckyHtV2qxYrTGDYxj4skagubnNiZcvY2LZHk1c4vBL6TMpYyxkMWwTt7vH6wVkYzLqJd",
  "key25": "b3qsZNpqEnF2ucRBsvptXLi9UNKnXiWT49b9Z3pLanDBbgPbjn5MA3HTZicbK4ccD6mCUUHnJXZ2G9aXjXsa7bf",
  "key26": "26YvqMRCjqdNZEuThVhAqufW8uLgKLW46SoCPaanbAE8JnqMFxXZ5KHWJJkoY2a56Yrxn5BPGcypi5Xyuwwp5on1",
  "key27": "3LEWnWF9zpyJdMhunrTwW8TCPLTjSw47w1LV9WixuNRPRBVLd8kn8fdTiayM7EFD6A23VCVZfcj2iMrpuYvKEzwo",
  "key28": "Fq9tE2jpq1UjLmjqN6jvKmNszSVo7GBtP9aQ3ZtnboEmRt2VfDiAh6B9kENSNTpkgcgSmLZPQNDVpZ9VfuHj7AG",
  "key29": "495J66jZ7sAADadjL7g4RqWvAeMQwNiBAwMTyNwWqZnBoi4K4iZi67gqQA1hCHTBWmFt9Wch2dKs3ZCUVSc6wShY",
  "key30": "3qoQDTZZoVGyKRsf6khNnjXaCwzdigSUcBx2dGrSpuH3rJqsdiCu6JHMmi7prsVqsDXRoT9fjAF78dpd9dGuCcXS",
  "key31": "5tNwCqoUD2Pn8Cp7v8m17YbxdTZ8ssLwwNpeaCXSiBf4XQ74ti6ipHwvX8dgv9ZaVouEdJUPYFQ4Sy89EBJ7N74A",
  "key32": "5HtSe1nXT7sVuvhMWAmLjsedzefwATWd2EQvbXst3jLdZZoRuQ1tWLEsYaBycmpQvUv34zD7HCeLGKaPVXLAJLeM",
  "key33": "2YjzNbfP1J5u2tbfUTLBoWThpy1EFRQxRADcfeRZUKchWBMpArN8NkWmMEcyJxs6LvuP9szgAi3FoJ57TxjQgBPt",
  "key34": "2AZGRNsZGbGs2udg5tyQjzREdX76oxa8byoWtDbtZ6fvNySXRSf8Ue1CQGcbwDW5VsH5h89B2oTAckUcLw3TBWWj",
  "key35": "iZprmkDTK2WgPa5DhBVFaphTbFKJ5Si6NBdepwTGVpngv6H7ttfCDJs2LuitduwitLcMkFY2fa2gkqq9rDmHE1r",
  "key36": "3zmm4jsuDCefBPescMf7ipA5Xwp5JRkyVKoKa1Pix8sMpzb5tkcdwgoFjPzf7rFCFxXovSbW6fWymF9wLnN1LypD",
  "key37": "39bV3uRLvpS6MUdnRHpRcS2ZmghMJ41KGpoLhL2k2otED46NHvdffaXbduCmZ6joQTY1vTwkG5DRG8udhbq1GLBg",
  "key38": "79AHJ57wR2FaPHkfonWcvpfS88Yp3Kc3yB5WhTBGmGw5zhehxyKxv7Gs7VBVQYFrVqrfpVqhYRGRXKYdtN1Qr6H",
  "key39": "22muGb9oSCUb15YTpx7XY2mLn13vzWybBZPwXvXfHLL7cFFnVr7Ku6t8tCqXKDPjLf4S1PgYHoEF77Wa3xJVgHRk",
  "key40": "65w1efBs5AJXT3QSq1XsdS365shXygd7SeFo4eThpPDpfy9mCdf42EWg3aVBK2Ue3CwggzC2SECdjjUDtRYFABiV",
  "key41": "5gKV3b8cwNBqGP5C73Ys5XY9KfGtGnxeLBhEaSvpJcP5eRZkwiFpspb7qwnV8GmREuqEqQkSXRq1GCtxSRf4JMGn",
  "key42": "5EqXWQMQPwN9RVQsyqXMLUBDcZUzmPX5BWMMervqSp4Ea9eNp3Q977P3zQdsE57cM3DmendZR8TkFenbVAjqPkPj",
  "key43": "2615NA5YQ5yVs8F3sRLVe1YpHCLpFbXT1VfC7V92NrsiTx8P2Uwpve3A6PLJExXaSzujEVDnMMJuCBT91qTZdch4",
  "key44": "3GRoTpsJ8322cm1EhamjvqyVSxP9YYGZ7cTj4k7V29E15SV91WQYWLJgyGxLGfdxyBBrjsvyndQNcLS6HxScrnRd",
  "key45": "4awcFDquPRcyRgmjxWYs9xvKueUsTJ1q7Hs5XXcdnHUzPbvcz95h3AFGXU9MBX43kngeaxdvf3viHF1KToSPMntw"
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
