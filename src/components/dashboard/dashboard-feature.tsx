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
    "4XFdUJMuCZFeJAx71yJnAF2SCSuZiaHwLL2UYGtZneHchpuWBH84hFEkwMVmrDnEHj4xeYX9dTjQzDooXNdRthmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XpWcKfoq1YLYV4rwWh856EyKoXupHA22ywqno9P6pDKBPoBgXEg5SApTpt2P4S2VKhL8wR6gsZ1cbzbak8J6n8E",
  "key1": "4vG2eT5zBjBsDbCa9puMYTcPqWR7a3ynRigU4FbY8kTkjyn7Qx9ijAmfKHcWZdd5poDkBrzAETRmoEJeLvz5ZoF2",
  "key2": "54pnwh6E4psmmm58w3Q8wLfSADSGPHPQhSCFJLW5MTze8Jep6y39HQY8Mg8kQuu6SFshUFjR6YZGq6XrK3f9R7F",
  "key3": "45mcb3YJNMtCsjxetaetAv8gDx6DqhKcCe9FqDAPhsH525tc6Cq5Z1FZY65BbUyUGx472SyFLB9muWxWG8hRA1CQ",
  "key4": "wfLhJECWM8dr5UvJGP4Aeo2suyEY4m6cNGRGsRUwt6XRjJ3wBRKVVW398ssJ18ctvb3fhQL9e9gtpcykpmRtVaK",
  "key5": "XXrqGpHj2Uoko1DbHe33TJZDa35fyGqYd493QSbiHG5dXe4L2WVDXwGddsk1YS5Zf93qycySZS49wjsjfuSjWca",
  "key6": "3kWZ5Jd2fXTujFRU7Xdwj7NA1YvU4qFBZbaJj84DKNgibQbFZzJLPZPQ3Ygj6xMVb6kRvMPr1jS7qUYsCEU5Q3PM",
  "key7": "3QyaXRWVn68utjcSZCgPFfofrCourj2ER4pbfuTWuQNAzPGnhBLFn2ccQ4BdyGgYwc7rqP79eeoVDnboGDzvTTKr",
  "key8": "5U2QvMrfkZkvxU81FXjAAxLU8YsW2DVe5vJAt1os6cKnhhB3mTg9aBVsgSqfr82C1qgaeLSknX7mLPKBL5VUtc4j",
  "key9": "5XE8kUcY8v8rr76ZB8ifjejhcrp7ernK724n4mfgx7aVGCKqZbYmp5yL26Pr9Z8F1fgzJ1sx3pmKFYUeud74Juku",
  "key10": "57fGAcrY748GFjveEerkjc8EamBvpksRKDFfJqd3abQn9rdVqdtdbzwgjdJaTCAGkGuyJG1eSi4VK18nnh2V1gLv",
  "key11": "4NY8raL3jRsWip7G3BKBRgQLmPm9AdrLVGxuVns7YLbHP7DTNpEvonJqMmTgpUURHJyhyZMGD7dphvZMeL76MojZ",
  "key12": "2txeVHFjW9bp1NEsr74qGtztaJxD6hUciyiBiJuv5R4SShSqtZyYsPc3xrNoFdV5V1GL516ed9ej4KKVZinhnuSU",
  "key13": "3fRWj34koLwKuHZ1NunsNvDKvoG7sqEoCTVCkzJq2eopEuChAueTnfybGKygxbXCi6d3yGFjCnchDupxemuTYz9u",
  "key14": "RKoHeskr5UKkqbd7EGgwhCehGsdj9Pu4hE5jfGAH5d1KkGi1rqPzem9RJsVM27j2fFQpXThiM3WDsVWPSX4aYdj",
  "key15": "481viFiRC47KpSLQV5Sp54bur8mKDGruC7qCdvbMWFyLsqVaUAgv4qHGruBUBs723KhnkCyW2bVy5uTkkgiqZkxt",
  "key16": "5H8qti8FeRnjaFt5keuaURWrYeqEnDSd7RAnNbGHjjeXwXgXGorX6YhWBPDm8VdVM7FLYiS1n1bt69H6FAYFEzju",
  "key17": "2Emxfm9uwyr2ixivJii4kE14p3dMNmp8VZ45XyYUhhQ7YfGPv9tUPrAfCreBs6aCAhoiTUDJi3AEU47v78v8f3bB",
  "key18": "7397XStsYzxFXqVhnFJ9wsepoNA9ZmkmrNau7mXhT8PaLbZ5rDwbUyU1Yc6MMTMisd1za6fjqN8wah4Yep4keJb",
  "key19": "2B7eAJ4TXj44HXSa8YCcjdWrrn6xbtvmT5Z7oU2LkBzvRuF5DuVvXGeqtk2vKGyQk4cAmNkUREiS6Y7qXHhrkKYN",
  "key20": "2uBTp9eUSwZFJzs6TxET6ozJNYVy1EjSpre8toPvJGmZena8KMxVba73vG3VMmYFJDUzf4ZiyktmDRRQYAPVyLm9",
  "key21": "2i4y8TJ2YpqkDVP3TzUABjcfkuwGGSaR5ACNWJ8PsY2n9pYwaT1a8jbk3SdwcC9Er6Rww5niYvJU5Yg2FEF5zFHP",
  "key22": "m4KoxpbuEYLMfSALn2rZPinHxZzZCXp7jgBn5Z36BhTbJ2F5Bbs5ckWHAQvLaAM8w2nDsiNAFpNYXCQaz2wUeN4",
  "key23": "3Ax3afZ7y3LyUokBJkfkj5iH24oVubnkjfSLoCHbfVofNq3nCJ98K98rhDxBhbcbQhMqFWLveRkmjWihPH93c8Gw",
  "key24": "5XCB2WoZCnhEk4Bfug2hDqq2ffGHf6zHAijKuyvwU3sS56syvido1A4tiibMVchyydUyDqAirxNeNDKmgU1Wm1Nc",
  "key25": "491vxJwveu69V1cTgzas23mc3Zptk4LjGh8G6pyHcYPmp1DTR7TXztoC7vKvSMnYH1w47cDTb53teNeU8Qe5arRc",
  "key26": "5ibwtPfeRJ4egmvGmTCiRFEyyrsomYmEYP6qVLqTmrYEP7K1ZXHpskqhfN1PvUNoPae5wDZYCkcmvN852zrfidCR",
  "key27": "3r2MSqfweKbZiaomA7Pra7saQmBjYStfcmYmM9XfVPY2E5bYcPFrQL9PSkLGimzKqHfuwpsEp51dbatKVHz7zjt5",
  "key28": "4N2Xdr3NgcGPQGf6Gi76EPqBR3UV1VCvBEWdeoYvCCiH2VdP58vA3xMVHvaiWfEWm2d4CnrrLwLxKv2ASb3Zdbwi",
  "key29": "9G46Wj7Va25YPKPHSPAVofo4it3ZDd2WiWxi8bvh7dDCCp6yG5QgP8dVWstfvMggY7fw6svXcPRYLD3yPq9x9EL",
  "key30": "4TnpdeJYfePMSoS4EyNV2u7SQieuKj7sU2ZpvhE3U3PYsLkNdqVHajZoxtPHGc9wARa1RFMEs8hPzD2wqojsb9y3",
  "key31": "4cDtDY4PNL3ajHxJqoArbxHtieYZHdsM4ruJNaeJHRKhvQZwtYjAd7orrKFH3iSSRVebTeEBCqambbqKN57Lvg5o",
  "key32": "4JdUhvR8g1YtY8LhrMTgAdkexfC2MSuPJf5sDh5M9ph1CnbHejABtqVErcA5SmpPuAvS9M9Px4WnLLeCcLviZKLo",
  "key33": "5Hdb4jJ33iubjzrQU5Z28FRhmYXy7Crtcjo7QLpKzHXYZefgAXPo2F4Wep1azkbNjhrY93Z5E8KyeA6pRvgphjKb",
  "key34": "Rfp9FuRetkGukNCL4zLvYC8XFkGVqFv6S3JsCjUe2FdyaBfQZTdxgZNxvsMRn9WxWgTo3WuJeqFs36rCxxAhdGj",
  "key35": "2HCyvRzvd5h4HLQWBoyMkS2pEQHq4TAjsaqpwBdXmxFKhURZpsHyB3ae9eP6VxzcC4ts3dBjgp1wi52ZZjHJn7kS"
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
