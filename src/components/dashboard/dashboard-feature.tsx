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
    "5FxmTcEHszPJC7sE8DK8mvEZcu2EZSTtvHUHffxzwYSTdQQg1dpZmLkdzz1jY511PKiGM9HmR1CLEtJENU2VzAiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51qnr5QUQcQxGpbVND7S1c5dxW3CT6gNE4cRufW23ACE9dm6McxTFPoVQySergb7Lr4TLrPNLa9sP5PmkAcYiMtR",
  "key1": "5BJL8quAeAHVUoumseueL5bPvrXrwrhsc6HFXzPXxLZshFKRCJSh8M3eAMKD54iYpMaNsExq773kJJdBmgg4mckE",
  "key2": "2zHepbfdnBzLzR4cjvzpJduDspTVCmdNfJQAmrpb9xULUWyHysYZvNECG9gK4EzqzVWptMoFjosHaWP1oFbHWe28",
  "key3": "2ve1fASnKxMGcwm39rhHpqNfxUFkLwkit9Medvdkwcq5yvJzH4bNjGN1ucP9RAk6XHRNKcpoPffovo8tfJgVZyfo",
  "key4": "4GZRLeYLfqtMEVGj594C3fkwX8y5hnDoiUm8PeCDEQLTBLDNJkL3bK5tmpKX14NJ8n3YTcehEZJvZHWQXgnFbgJA",
  "key5": "5NnyG7aUtnLnFd3ACwd95oe9yyDoq5tSnfMeXqJQqQ4hbrpj21kw5M31LUttPffNp822UAivxwdoeqx5gUk5HvkG",
  "key6": "3TeA15L1AcwGDpVUDS1W7WXX5nTtexYmUHGLdRamjyHw5M9HhQufV4FrzUZWKkcCLuQVwX1RriLKFEjWeD7ZNaFz",
  "key7": "4MExUqN1QvtDchWvN75M4dcUs8vXwHf5mdfVrqPumyeiYWFaGKytDdqJyLmLouPwDTtpxHbyhXBcznTRREY3L6De",
  "key8": "3hEHRPPhZZwUrKeFZEuEZ2J2hww3YD5eJy9tgHnKnu8yD1KRFRmjhnaYiHH4mztBWNQKyFKKP8pZ4W5URkfXufPx",
  "key9": "5kVgoUY7v5f9MidyLaczizBxsuRPsiQeUkW75Cu8QHgE4pDiR2P2MkxcNQhSQuJgkJTtdk2S6Ko3KLWP6x3cH6sB",
  "key10": "2JfwXRojgdt3c9jewNgLJvcgTzVqDqTGxMCvnAhk7xfoj5o66tsiXcpnpC35AYp9SxqrrT2R77cbu9kL8ZyyfRMX",
  "key11": "67rcKGHUARzrk7iyQ6aRPeb92wz5ExSBgPW6ZSkekx74M9Xr4WuW14f2yAo933ghsN4JjV67Pa5uUFN74vfkggCd",
  "key12": "3J1XC69rmDawTKxoZVY2hwbmbNJs2G77TwvVA1qyjLXxqa72uyRZ1W6q4ghWSKpHGCjawXuyzZTb8EXovSbsThLA",
  "key13": "wRHeUf7WUSdwg5os8coLkqFZZPFhh6DmV5RPJdnBJ9w65xBbFoqsaFTykdwdhZcowbR7Nt7Y7DtpRVkUgRxWvWB",
  "key14": "5BQLkhQDtuijWgQx8vf3F9SFEDuoNpKuTtSK5mYvExiwE1hnv2X6RSU1rdBAVSQENTB9hDqGWmVNm26HBAY3uuCE",
  "key15": "2e8SA45CgfMyf4hDBp7JDkj9Wvw62prXAbGVgbYvHvww5Kt3ULa13nxZ24jYnCXpkx2SFz7TmS1jLETL4WayBuyp",
  "key16": "5sSoHvSWobjdTw8xPM12a67MK7pKBCAkyCVZkZ9gTKRhCoHWDPDQVh1reSAqQRPtA6u4gucZZbXNp1grQj8tVLNG",
  "key17": "7cpoWUsgGGR4b7uCYao9BnF1fysPvLNDBm1QsvboQeqmcXC58Dtz8PqKfCnMGo7nRHYCGoa3RFNuwXQhzEXNZWK",
  "key18": "5jbG8FjiDuGEhNixgnHjHKg7yPrSNo7z4G5cVneiC23NCX2GVmxU6z7yrQQM5ef78ZhARYQaVKWLjEU1SJDraehY",
  "key19": "4QTBtJyF7GzF3Pr9325aUYfXpK5QzzQrWEcpKNdqf6c1MHzcwXsaseZrDCEopQWbYMSSnpHhrKUQWvUQk1Fb8aKB",
  "key20": "3MqA296H6axKxZa7jpng7sv3gPGuwzwQUPwUqKesFM415fqMM1CS15wDuoJ47P7GAFSiDAXqE1Z21qXWL5yzsiWu",
  "key21": "2g79PDQrXnhJ4aEsErQX5ys38wSxyXGw8ybye7MSrEkb3hKis1bCbfKEWhoXAXkoA2VkWmzSbz4fhP9hGmJ45Jv3",
  "key22": "eAxnUVBVdRveC7vSkTfWTAQbEsXGfvf1L81adcJm5BmAv1HoiV8HdSK8bcsieFXhJgHPof4LGn9Sw3tW8pFpjv6",
  "key23": "5NdshYgfEJzBjPfe5a9igbgvUpsT52C9TvEAR7x5fWF6H2JvmFNjHHm22T9Q3N1o7a5EdnhsGUXgrogowmcgHrAZ",
  "key24": "29RHHuQ1x9qCATL8SbW7GxeNn2W4ZUaHLjouL8dfhHKTmz1h26BVND2KtzE8mzPRddcxGBzgPS2QEMJ1TZ7wa6QS",
  "key25": "4zeGqUyVBmr9dd6Eq1BvU44K12uGjcRxdo66BVaLJ7ryjNqYPPfyWoc3AhmaHqSfuWb2oXffzL5WH3jLSRLFj4Zm",
  "key26": "3KCVqk8UJ3KeC9iVSfKtT6CX4z4Rq1BWN8wkUsnuhmAdrFSQ1PNdregZBPBt7JBB34NMeRDQA6YAJ7dGdRpS6p3e",
  "key27": "4dfw7oyNx38NSehRi3BvjFbnwGLquJiQLTBxGTZkvzjQjPjdSduMDFKW5swYo1nHTCErdt2UzyaXDf5Qnu4BPV6m",
  "key28": "9tUWeVqLMoaxP5g5ACRMvPJ59k6nfC4Pz3pfbFKCjAbExPcScH7eZerksyegvA6EfV2k2FjxUQswWbCSMMdSgCP",
  "key29": "5KWj4oidk9d6GYxRSUHYijQ86APWgCwrx1Kky5Yrr9fQeNndzAUBMcTe1gd9XtTCyy7LUWSmfbNMQ2Ytywfmy4fx",
  "key30": "3oBgVp3eper5nLMYib7ATJJwZAdG3u1guQR7JVgSL2JYwsgyuG8DdbXYCyGQvjPZgHSqoHpHAwYHCRUXzQPDE6Zu",
  "key31": "4MpLxLqL5ZNwCYuEoPnvWPJpJXn17SajSyYNoSPCAtCM373FugDmRdjfzwF2PFFKYBrzbwzSWi8h6VpcMAH5q9Zd"
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
