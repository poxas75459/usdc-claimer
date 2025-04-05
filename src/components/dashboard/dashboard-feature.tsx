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
    "2vYZHSPMG8yT9dRCX2WFx89r7zLXNR8f8DChRhK73YazuwbvUfByovejLYow4oUSJUxd2227EegBWaGfJ7X9vb6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xAmYSXtWoRJQpd3EfPUNm1GzqVzRXebvTZMja93fLCkqnJhydXBAvEjjvq9VkLKSmqmEUkZEFD9SNFZJ5p66k92",
  "key1": "2abQ3SE2n9qpNbdLsjEep2qDTCsqMtpi6MWsxE4mVncfJknEQPcVePjxfwHRcuK7oGEyuN8kTi4YvVn5Fs5nrfQb",
  "key2": "4k3QeqHG2bTV3NyPeteBwHr8TfgyJYHuqYWEmh6XctPr7sCMiuUEzBKAwN2x14xBtL3S1W87ehzwF3ZCBhVDY7z3",
  "key3": "KPtR5by5KnhbHsbf6qKyPmTSkYEb7GKAd9YzCKUihok9ErCUzRfKDqm6cGrYn4WZyCwmMxM7V4dKH4t8BWuu6rV",
  "key4": "2iCKxo4hd3XqHuoMsXrTnLyUfj5W94CG3zv32Apu9dTqWnV1pzVffM6JM7bMKcFvVzyKQZ3nzR8bHWiqNtexvPgP",
  "key5": "33Csq4LjfSin4RmZQfnnK3Lr9DjQEwwttP1U4NDpDma5MA97EXsDAFTa6NmENZii2Z1ep8fX2zdPfbY7aQXzaAHC",
  "key6": "2rzAZnFwFCMVMXDhy8LZvuUFR49dhwz4y2j91EXkLj7vFNyUa4ZzJCdQoyJndCbnWKc25si46435bzek9HT2Pcqw",
  "key7": "4oTkkeVctdYUrx6SYLTwcufUH4G9VNQKNMyJqVnbK8tQvsvaKPRuig13WPG6mv6FTDjwqm27KHKa9UJV2wC6DEav",
  "key8": "4SpjwBMiZoG6nd5wXpQAGu25NMu4J94r9zVYUju9YGBcpsxeJCskg7oZKnzGNxhSCVJod7tXbw2dXDvdr11e5dSJ",
  "key9": "2nLdZg2PrqVVrjhfLyktsi1qnLJcPqUGnq1zeEqc7DgjZv7Gd6YTeLizZfdtYmMpoi9j1aZUY8bxfkZ18vDKHLaL",
  "key10": "3HRsmx3PnpFD6P6RvLPWYP9kDKfpt5e1FEFeNo56tD1Q5EtsvzSm5xG6X9HLbptyiJhci4SFc9NgcptKc3392WMW",
  "key11": "2iad5n7qLiQr4qEET1yoz3iC2qnY3xQVu2N3DSziEcqvGHAzwdoJjqrip1Ppoq7a6hecWWe5sPezpHShTQf6BgcT",
  "key12": "Z1vNc5zh4gM2VthYfJRETWFxpNb6PXHPtnfuNyESd78kyT9iCH6LbviSz2MCxyi727BdCEWZ35CTcXJ5iKFr4D9",
  "key13": "4ugqe4efceFKd4CsjYaeVC3L2rfCkFrDdgFrCUfUuV7E5FUBHTUP6VJhuukbZhfVqL7etBu4hn9VmuutngRsaX2g",
  "key14": "4RrskMwRf6jd5mANGF8tCT4j6tw1fzAPLjmkPeuaxaysC5JArYB3de8FhUWeVApjc4HnSQxe24pRaZzis5iPFMsk",
  "key15": "Qmj5VcmFBkvYcfnwAuNTpLsKggugGMw6AUAEeHrR2oiPaHFJ6e62zhF7yTN7rcvpPG7fswZ2FVkTf2aG5J5d4jM",
  "key16": "4m1VJy2Yqd7yxjNnc1fv94aowTYo1944yhNby4qtzWapXNxgA1xSZKxMEp2mFnNpGwatG7UEskczA71Cwp2f9Ei6",
  "key17": "4NBxzUwHrxG8VgMd19Rag7eCpBQktmJpCEy2GWxSFgjZVVA7YtARD8CP1KBEWP5WesgeRy48h4HaAfir4hujgwrB",
  "key18": "5KvPGbqdxdgM2ZPn5xcjGBRZYpTL6JMVgq8x9n3ccwQP4k2ebbxTkmS2fuwajZUATrYhHYGf5pqXZH2v2rewiXaH",
  "key19": "xhYXSexLWtuFnhsEpdvRdYHkVxQCG6DHa8j8wd93GXARz3kRzWRggVygHQauvffrTGRBR2L86tDoTZBXY8CynbD",
  "key20": "4ExUdrmwRcaFntBRH67Vo1PjgYhMd7oeRiHrFzzqLtpWEZ8LTiBiuhAtpdUuhwwmWBshcmbRm5NuzrAzUcLPN9yd",
  "key21": "4NPA4i9DtpdGRoTKSyqpzn9y6KkdqSqoRD1qF2YTcxVQ9ambSSFMayDSZqoXEhPfNx4ZwqCbMBPAFEcQaKLCCq6R",
  "key22": "4MdHHZTQkLeN6UG1Q4ts13sDvGuZWmWbGaN9aLd3kHiT5PnfifTmFv8wvteiBYdDk3v3NvzQPTLm1njHfw4v66Uk",
  "key23": "54M9jSiYaV6MXh78kP2zFymmF6tZTbvN29RuFiRsxBTfoaK9fjkxJ6dRLa18x4gELL57Sj2YZQEGPRbXrCtyREtA",
  "key24": "38sWBsS3RiLYN8C3Jyt4LyurB89h1ZaKj1T8Los8vT7M8PPGi76FFNZcFLaHQWjuMPfoVKNLcSD45NssD5Bru5rY",
  "key25": "BdpwkpWkty1mhpXAX24w7tScQr9ofYGDFTgD9Qv9Wcua9d6kPAWLyLcX1EA8ieB2Cnpn9eUpCiS9YhJsx5wu19U",
  "key26": "2rmwL4EwjHJe2Y85D1d3SE52yvZoQH7PyYQHnLjAcu9pMLxnUPAtwZxSDXAAtx6cEeBmwLTJLxec85MV3bCopQPS",
  "key27": "3Xe6eGKawENCTLPM4L7KBwbk8sfPVTx11QZerteJy7Y7UDJsq6H133nRtPcBXyBU846uTTm4n7aZoS48vhorzNqN",
  "key28": "2fWxX6JUkmoewWCeuKFPPk36MLyaezFikyryuJ6G7Nc77JZNfKJD4r4V7BbLvbrwYxp2vvp6EZnqZGsjvaLbhbnY",
  "key29": "2K3hBXxg8LvT66fCZevpnfR7LgT8svJFktBkiwA9ofYkqssHBHY9v7vEK5N57VrnTSSHwXReSidz6XL6M2okuseF",
  "key30": "4peJSE5vk9zM47CkUWLMQiKDijK4Jao3QxEj2DpWk56jDKDVwZA8u8HzoobtrHYFJQQgPKefTAuDsoEJ6YEMxJS2",
  "key31": "5SxbtfgS4nDbJdUsgDp16mnqtD1JdXupA7rGfCfTxnqkJQEc84TnBzGXsmuyNS72hEaNXVGsdVeBTg3F6sf4SZNs",
  "key32": "HFxpezRTK6tnobC55W4Dx6oqPjZNyVAfuDTeBMcQM1YcvRHiVitWefczmwE52Eb68g71KDQjV3YfBTdXB5wxtX1",
  "key33": "4DUcChn9kMxB7Jri4HKpDLdTz4KPD1v9ppkfxdvrWn3FAkajWWgNFZpUReawEjimPUuXkjk8vQw2WTKUK2zgdwXN",
  "key34": "SK8T8NF94KpCh9WwoVJNfBCdhtX8JJazojJGB9g8ST2QvrQfUQVFyEdz4VUX2VxPBL67kYtR6s3wcoq549WhZkW",
  "key35": "2KGHmV32xfj4PF44toKNekTrcyPFdezbGm4Ro1qDNBdhTUDFCqjasJrDWXMQBy8nhzRS9FUbLn4Es8GufVU2Jvw2",
  "key36": "4E2fLJrCnWEjpgxC4cfYvpDn8vFvJ2Z12S5vhHdsHVu5j2qcBCjGbmC5igYiHruNqTvJySTbWqsYohHvqjGVGPKQ",
  "key37": "4ftGuT3npGJZc6Vt1zZ4zEcFfNivkaA6pTpdoBfm4TyDgp6TGnJxCXGAwwkJdADaTdAaLpafP4aXGyHfxxgq5ELs",
  "key38": "2wGXfoiQ5kMq9xGNB4y9YqRCLWQ292r9qzJz4GBVjNBh1TsqDP5Besp7cyWwQZNdUzgiHb6o75L1QgMjNKDwSYWK",
  "key39": "3rwUn5QmZ7fj99ZvKDtx7qpjKZWzND2dKUF7Jw7sXQ1s63VbNsxJiXYxM7pxPrgzrae2fpa8xorkAHjK4VSkJ362",
  "key40": "3fCsTrDoExr88XHX2EKz9x9ebfSY7q7JZh5TjFMgKa5n7mF3nMJQRCVtdTbxa7cVFxVLYuhm13UV1FUR8jmkkoYk",
  "key41": "4MmszmxbQV96HSKmed3oDMj58tTyeenJD5z5Uv1nv3KkuoVQEjpmNTxR9VovHqfqQi9emhM5k1istwaz79EKQvKQ",
  "key42": "zJ454XznVDHskFWHRDaQJFguwPzhwg1p8pRb8UNRDQMb9BtZGfkNmcj6cB3Kusiy4nM3uYnwzFRgxtmp4pubW38",
  "key43": "5XVtBYgjW7G7EQnKzuLTTcbuTDLF1DNdtyXS6YNhpgQTAvXjr9YfJx7GovrY7WbwycmmonBJFwCmk9EaWs7o2QX6",
  "key44": "6W37C8UU9iamBLPBYvTzj6qcpE9rGXqKBZLkUVkBWMcptC3Sjokygyu4bxiiA5hKfLZRZc4g7NYb2noJSSj2uz7"
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
