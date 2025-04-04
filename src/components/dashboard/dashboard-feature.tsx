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
    "3UMjSPSu48UJhzSvUu5VWRTUm6pqfw5Vb8i9uuMvFRp1nUPntcdZTR5GentWX13eoJugkfxSWBbpMykprjw16uq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yid9jps4PVu3gMpT5yfkDMZj6suWMMNKbChEEau2gLJD4RX4mf84fv2FgnFRxba4NeJNMZbBwe6AGDe6m3iGAo5",
  "key1": "3HiYSSRnzkRpFpcSzfpnZjoCthXxksVYtfYUB7wdCqPUaRJeFAXSsUkGhBVwtXPq96S78yKVBb8ULUrQe9NVo9Q2",
  "key2": "4WYrvT1WyzoEFM7FXsqUDMgV9cKoPtVhqqvZ5vjE77BftpnStJPNy4UCpFT5phKqiZASQfBCbNCd91iAZqcVhMSc",
  "key3": "35mbDPrezxPBbjkonc9K7xVz4codf1ukv7FZf8yCqYBbhbLgSb2bnqQuu8Gy9MudFvrxk7zfMsznLnFHR3djKYcp",
  "key4": "2qmsc59GDfoUrjz3oZ3KLT36VzeaBkAU5wK6LEJr8m4V4vkKEyefHrCqrerhZW52N1CPqAgCaKm5bR6HsnR9muAA",
  "key5": "5bLaeZrmgSsiR21cMExGEyxECQCdthZnbubJfN4ZeEPRhwGNANZnZZs5fT9NmkWuuSaDyJ2aA8D1MPghzfyT6Sk9",
  "key6": "39F3YmksWFPzF7TWDfM7j5yxKbTQBx78gDaAJm5Trex9jKr69vQwf8whPsAfJon67Sdc6T5NuEY1DTjQvyaTBajE",
  "key7": "5vrU3uR1NrdvnPBNupZU6tg8Rvw6YY3pRnze4YcRyRQbU33wtZsC3nj42wdjc8S1tLdcmjfomNRj6F665DxWWEr6",
  "key8": "2iEEzT72Xr94b2UCion46pnbq7JNi1AzdAjfcjzUD1pkpNfkQt1j7Ha4EmfRnTX6Z6eWpZ6MQTyjnc4DSfJ8dkFu",
  "key9": "4UKADnp1jBK6ustLzGMXrE5bS3GmptTCK26xFvnoM4hg8Yd5jZ32Z72ECrb1vFFHU5yv7dXnPcdEiA2qb2Khy49q",
  "key10": "2SoTTSmDRHEn7JwSXJA7VmbeQFXXoaK5Zo4VVK9qPuw4EyCqAdrCUUFtdWExtSwVtybFmysRZ22hezyj71jZJjpM",
  "key11": "3jFrUxyHWSe2n1NcmfTZMMXZ49UFDv7CCw2Npgi4rzcGSUQSNYMaD5kGCMk2o4UwUvPCM8ZafPFaVk8LLLrbRocY",
  "key12": "2cqMmfzLGtcCAEUbt3BRRiNkmYejbDxrYBydwyZCZw8oE6HDWskGx828uBVdm2T76BM22WsQKV8SFoTmdqUq42eN",
  "key13": "2iQX5RRYqnGQozb3H3TwMsiNwQAUjaGoEbTFCCt5oGhzTrAfeRtoNBBj1KC4VNkHKBCqh3JKsvDr7AMkBV3oRhm4",
  "key14": "59XJLBLDf3BrWZFwrY7U7nWdjveJQH7kKxYB9x8ykSdy5PPsiBPpxxNMLt5EDMBkQHEREF5xKuaRYGYTxdRXJ731",
  "key15": "5qcFyFNah6yWZJTkrCKF2FiMpSu8nBZykRGC5u7Yut5YtibwyZRr7kxQpVZqHudV8pPjY7WSzgim8ZFDpDciEoBk",
  "key16": "3K5ZtfxPuRtCP2kjujJzN6RhMRmFA5QAT6HF6UBNp3GujgUDL9WstY9NjTDxst48m3x1jF9ywNS44AaTBqev8t9v",
  "key17": "2Hxz3k47sAwANLiKuoU7JzZC8hXLmiCSbQh2sySscfexy6QSfVH3zHy4yrwMG9tVG6CNedjkGAQPUdY7K4pb37dx",
  "key18": "5nVqaPtYBK3kb3p4S8i5zpajdu8LhH4b1ibScNUNpnxZhsQhGmp8LR7Jzrddx9DzZQTqveSYCJpz1Bz6BNnqCbJF",
  "key19": "4yMuJkK537StfgvbkGs8AJhLMdTfQpXD17ToQQXTSSWGRFfRujysHuZUcpVikhPDEXBpC2CBqHZ45tuwdupdgYPb",
  "key20": "5gY8GYhJqJkbWCs21HNZZ3nEQWAhNERpELrWoCXrSGFEL5mcoQPFPca9USxFhLRR5jQfv51v3mFHK2ZB8pvC8na3",
  "key21": "36qYEUPvPrNgWSRpv3HXEBGqjHKNwt1f2bte9NcqQHQHHHbvA7uWD6aoC2qLquEr9oW4sHTANyiCuTkFUL5ubfTH",
  "key22": "4h9nDVQQvJ12Y5SYkbgnCPUKR1J22ekeynboxSVF4uJRjT4xksyTDWERwSK1PvZfpXq9fwqeFRcA5HxX76Maoui7",
  "key23": "3eRyJWhW7tSqxRxYj7T41KzVySdnqt3oFC15mxfwQPRkDioGT8D4r4qe48ZyRfWvAb8TgYMz1D9roZXqZFeBJ4mx",
  "key24": "2VMJYjrxqTHfgV7GJn7XZaJwyFPHKHgdRD8YnEqhfF8k6wpYrerp7KmArivX1S9LZ66RniyBYbqtf8aooEUEnWZH",
  "key25": "2CBU6LV4t3zpjxVttHqocKeat8S5EyoKrXAdqDGuSDFXojZ2ys9CdLifn6GoVUcCk1DsgaVQG9m8t9BbW75JDvBs",
  "key26": "kDVitzQt2ybzdtEteRu8PM3uA9ePHmTLj87qFqBWdDYcsQssza55uGbKLsngBT4d1p7dDMvbUThWDBY58M5GDTZ",
  "key27": "24EiQyUVpE5WzHhkYaBMrZmbLv9YXSuBnPiV99Vok4ebXmkpPhYbzL7L2yyhnzMHdd7ywdSaj9Yb5vSHFuGswfHg",
  "key28": "4jVrvgtTPB4CEoR3KdtUfwZPrndNGrooAdnWZGnovyVSyV2BWifkCg7jrhXtth4au2yqGW6wwWphwEoyJeJkiKKK",
  "key29": "2j5EPk8ZhTMBCwMNhtsCqUuyrRKbBMVKjiVaZBpeM5JJ3yEmztFCHqpkRfNFNpaewNhNxvgdGMyN19q3kszQF7jG",
  "key30": "mKUtShZror8gzF1ampDekiWfuKo8QJUPdZDbWZhB8PJX94KX5oSZY9MZDtUvwJFGz9mnj4kxH1BwUQYHgkukmna",
  "key31": "4T5VrcpqrhdG2UuaycRA17xrphkfwmL2tnqRyZmth1NqbJt75tFT4rxSGvPS6KLqs8raUmPjAatdFXTotRpiZyME",
  "key32": "V4gZtEJysGYBrVGx4CkjAy3PHwXcdMfQijtaYFcEoEiaxodDuULQNbKkdctv5MBnL5yHsMFxzBkNcEmv9rD9NSV",
  "key33": "2pQ8kZQsomwJ8zQte3BEuyjqTGKdHq8TXDmkpUDWmS4GdstKSbG3sNNRFmr143S8QBeVkmEvFjn9PhsRC8872sDN",
  "key34": "3cmPd2mjDNLkcUcjK4SUeDbMZYgW5MNnVHUrdSrXfzARVaCojhh42Mzikq8dYmuDQ913Nx5WnrcAzHoZyGwwq3b1",
  "key35": "5R2MYbEjsRuNGDBu9PnPM2JUP8wFXt4N78swKaqp8wLZHuvKhXA44f6mgGSqxg3YNGmTvCyb8oD8AshAkePsfj68",
  "key36": "4gUFeKoStjcHUkRdrYi6VGvZUuRKPyPs99LN7UEDsrqzpr23VxCnW55bVBBenpMotruRQWcruoN1KeQtvBx69Z2J",
  "key37": "2c46BR6vX9eUNHuFBoAYe1vg63GYKu8k5QHsxUp5fjTeGyjMXE6QUwtVKa8uKsccMR4EGoanUEpiBUT1YoTMRYi1",
  "key38": "4KQJbVqvxCabWafYXWXLQgQ6vav6Cgsz6CLhNRpdwVA3MfksZhmvoLHviztXcqEYw9R486DSrhr5qQeuJPWpS5Ds",
  "key39": "4axsUNxmfXaj3WgPksqNwq3RdQCCVXwP5dqgNYqMQmwnw1THuvL3XrJMYxHPbjcZNui7gd7YVdhfypjwrvXdrghN",
  "key40": "jw9srDUt2kTxKpjrcepqH9VTyPmNF3Zxrg18VcRg3gqwXPtbLqUQEEvHBbAx4rt6HVAvGyhKxeS7Yy4v3rzxGj1",
  "key41": "4YHabPzYQmN4JkCdJVNyeEvVYQGT8sR6otEUM1koM7KxLRx1zmj8yyxxrXcxKtupkDtJKMskNV43z4MLAhGxpG2e",
  "key42": "mdGSjmVpY55e15x9ykTUtoSABmbZA6wdpTMKvnXexeN8hKGeTFa5XUTHQgmj7W5qCMQwXBz5BcJYYPrbYvmsPje",
  "key43": "nKoGqNhySqkXgujnB11RYwbsSHQ9x4fav8yGJxCNZe5SD9ENws5JJrcB3BKXpkCB5mZCFAXU5pEazwsEx33mcQk"
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
