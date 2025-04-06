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
    "3Yh5mJMK1DW7SgaEM5LJZ8tAjYYiANMkeugJXmCWsoLSNCWsRUkNrMWu6s8zgSqdc8FLd7g2tX3wTdx73LeVZ7MT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aDyiq6fJrYiEF7gGQTG7nKNHVDHcRquXAqri7qmhpZUSuCHXywthBBe5UwVxtnoj15541fykkvpx59rXUk9VK8D",
  "key1": "5yaAxF5b5EQiwQcaVWEvKYArBpNnRrJ77V5E4kLfYU6gkFnAy4eYZS5if9wCYNLC4mW1TU8WwGEQ3uU1yPHp22mL",
  "key2": "3v4iK28VQrDmKGCJxjYQgAiE7nGJs5RMuA935sjF1WZr62AFV7ikscc1V2kbLyw5X3QVDoZunjggiY1Luochmj3C",
  "key3": "24r7kRLoRRoQgDLWssnPuiGsPzy69fVReMScHWwjD1QJGfjWnFZrUCvU5Zkb8qq3GQZzvw6WoLD1ehjih7qz4dRW",
  "key4": "44ko2SM7hE3WbRL8kdD8sAEtyZSNsbp6SBkek2wZELQi48azHawAdMZg93WrMttxfGdkYUbfdBHALLpkseytATP9",
  "key5": "547dz5mA1FcuRjDDSFxF3dkcemmNocCGZiDvZyDCkNdh22rLxMis4pkaT7NMrYHNgign5AckiBh8x97utcDSeGTr",
  "key6": "5RdtXDEkJADygoxthnkxNh87SoqgD3v1vxM9FSeW6myHxRn9DLVKH4tgweYm83P6oTv6JgcMxXneo5HKsZrBzkq2",
  "key7": "3dbqjtZAyyEDtWFxJo6hQcDzjRByJetJT3sCAHbRugLDcKEWoeADei6DG7hxaxXFdVTzF9zqzkmWtV2LPQfQEoUu",
  "key8": "4vFGExj7PZ1iPtedExgkKhAvPhL1ZMd1WbDG4ZwnJgLiafq4rKSeq645avmSrxzxGvLGtsPLdZCJhA7Dk7sTUjCv",
  "key9": "5E9WxkUThEhi31SQQPBovhH2uQAL7dbUTVqQntX7DmY7Nvjw8ZRS8NtzihzF8YFaQdWaQZ4PLrdnL9sJMsH6xhKz",
  "key10": "4p7aAkK4xyNiM41xaCnG7SYLC3TWQ3iF2KkjwGMFzaRNYEJqgYQeSHU6UrvwDipeHoNrjV3mcMERDUrKBaaQN7Rq",
  "key11": "5UHLpjKg4zJHFtTH8ToLZP1iDTRPvkX2UsZqYYZT1kq6T3zG114VmZDa1pDJUy7bYNZqgKhMYqfHupaCyehM2gfJ",
  "key12": "hv2yWtd7vBPgFMQFZ7HJGg1Ns2Prmiwa7zf7jeKXtpegNFB7KHpfd59wZawuqMmZ57ya9zc91RrFnT1E8wN8Cyq",
  "key13": "4F867NKAeDYuKR7RZGCxw12CPd5bdMj67M3EMhFMrKkueezKK4fQ9wZcJLFjrioMqWoCzXkHCqTGoCkbF6EgWomd",
  "key14": "3uvwA2MkdtNSV2KRQTJSYcSX2rXgr5ccPQrhSVHz6ZkMd26m7qaXKmtFDZekGsAHQhgG434JNdGYVEjSRnGq3o6o",
  "key15": "5ztMTb2itwBRkLmJmgW1M31w7sjgUwwLfY92uTYs6j3L7GdBAmn3hDvKiotPCAD65mrxAKDoUXXoaUwW9yS1EhKc",
  "key16": "3yCQgRgjKEF5rnDKgQT2MFpUq48JArFM2tWwRRVErkRVRgyGpeGYWWbSvTAEJ5UHdh5Yt2gtseJsNyvwtKWC7QPF",
  "key17": "wRbbkxtzPUqNZ9ectnXgHj8aSD9nZmxuFE7WR1v3HfufV7k69mc3rQovVDfTCJcWgW4jShZMQohwg9ecTVV9bEL",
  "key18": "3cNnmVuAW7ghKdwcQ2rptPSj3LYBRU4q6nwrB1WkxwLnSkazNWWN81iy8QxtmDHTmHcJEo6CntUnF52VfjfcBnZJ",
  "key19": "52MATzccMuYvHsPtRsqqqMTqLJ8Czu6d3FjL9a581KrpSmwrivv2nvNNZ7tbbHafWEPx48ymeENrz65ZdMFB7wvc",
  "key20": "U3thBpLj6wmUQNqcMZhdzxkTmLHhUJuzoLcFFubpCxxbDy5ixd71pCsxE4n1f5L2doM91Fv6foY5pdb1RTnsS5r",
  "key21": "5t1mMWeUPfJaFnBHsC5jRHLMDNNAYE9WNYnovLWeZWcT1JBZwEeSw2na623bP4Vc3nUW3n5ZCsX2NdbUEaqde1hH",
  "key22": "3Da4jsoiBocUkxJ3uPGFNc1FPZu1FtN4FPQBTeSxa3eYZcNFwo47oqvjbwjjk7vsiTjq89fonYVuJUoG5U8qYTAB",
  "key23": "4YT9YU2XTAbv5VGVBPbmasSwzdJ4Uu8wkkCeKKVmmHcfDfdbFoEaao7g5ubzNCuxsccFwUVqYjjyFbh6cVEetX3K",
  "key24": "3LgH7B2YwijfXigJVFdic5yUmFwTGZ9o9rGx8rpkmPS1eTb7skzfU6zG5TFAYBKhFDQdvNW5CKEq6cvPgTXHZK2U",
  "key25": "2cYjbEWVu66nbRpUkrQF9ogWGUz5ik3saYGeU7nDAGfSoPBbPKeC2z5rgmMrKGaMo64bn2QBqg3Uax7oRb7BvpXJ",
  "key26": "5k7UxYv2DS2fBVvDZzzXEY8mptye3tBAXMEaReMm7qyyYoRg4TdmZ4MXcHXGdH6wvt1an72rf6aK6BGtCfWCLaxA",
  "key27": "48sgVByDUEmi5h2XYsrGH36ChrHUD9sBHxcgNhS5KsuzrH5cQC9mjNnnXZjeMpZhuXeVj9Js7aiH37iMVYgpXcYj",
  "key28": "3PR9Mqh8PeikfQXLoAtKi6jpKaRzdqu5J9tbg5HotiA4mmc7ZsGYAgjUcUosvQrMjyAGSAWE3fb4iyXcVaD9nbqn",
  "key29": "3dqfPkcVrR3W5ueUn5PGuwFu9Zrb8CLM5qqfC6EmpyXZfFwf4DoSzH3Edo92fKuE5pM6w5HSCQzRhBXdzTzbCAfw",
  "key30": "4sBiHGAFwoJiYfPd7o6qgQFbwaiSy7qJ1ZJT2fNR99tp4zZhfXLyimq1r8beoYrWiDP2VKvc83ZsJNU1fXTKvtda",
  "key31": "3gXkN6JXLXKTD2buXm8DwmWc4ZdhwQshkC2mVxj2sbuPZZh4y2MyKasx2cQWvkdGHHG5derpWKL2ezEjXyvmGr3S",
  "key32": "4agLPnfJWEQxXk3N11TxCf88SHJFnrEEe1wgJqN4rXLK45JEGNbSNBH5qwyTXJS2rYg393mCfk5nDLLQ9jqPWNbB",
  "key33": "2RFkhfkuGwKgsT3aEs4o2EQeqCryfNbufqWwF6daCoPgeKGpsksuh1c4UGLqWR6QtqjsEw9j5oWNopngHNe4hv3g",
  "key34": "5NzykZpZbcFk87dNBuiCj78TpvLsuqhg1g1BbZVRvPktgwrXxUZDqcUDkkSdvVREVY14mdeGiBMNNzKVVf1GXiNC",
  "key35": "5cZcKsTfQohygt3iuRrWcnzvB4wmXWM1r5MCP8CQW39b745qN6nS23wdExwZUYqpiPKGesvurqWDYmVJ6D5mqZfw",
  "key36": "2CYFFNraWaunbiJMziyYPdSZSQVAJNrmxaqtG4cG9Vkuf8DFyeyrbL65QycdDBJdH8B4xZYmYJ9qHCbEmKpDXbUH",
  "key37": "56jJNKAvRjWFEyK8MGkpuC5ivXtc7ZP4EbyJ6jDermpySRcf8Nt7SpAij9enf1CZnAxZW3gcCBLDp9PmGS6PyFcS",
  "key38": "TdkERGC2yxAAiCxNe8Mp1T1CesnY2SUTgyD4YvTzADUEG911S8wSdE6XvDNTgCDRYLgV7GfTDSPx3qKQ49GPciL",
  "key39": "3Tx64qzWwd95sphgQwngu4phMPtrxwSd6bLt88jSf71tpPP5J2dt76PyT9DgPfyyD1whPBgv2WZgAD9gecCf4RXA",
  "key40": "4NThEceGXq9vM1YuGLX19viDZ3eB4LDCE5p2xdhjpXB5MjfiMV6mJZrEnpcyoi9bGKiEZ6dfoh8G9KhzF8CM9C4W",
  "key41": "3CmmL3Jtzp7EbZkevBYYw4sUN3yqgswWTxEsctYHi7p4NCg2i9v5rT21JSzLumPQMpt7Tmw5JqqWsV9YQVozWzKa",
  "key42": "naR1kTxdHZ5P4a5yCRURe75yBhf5XBK2ReMFJM1MugHhf2SnaBbR8btPKhH4ue4sncahfNJmaWTDcGtfdHm5ULp",
  "key43": "3Vp37WoUBeCqM5hiEP62adxkDx6fbJ2raEvFFBNTjMMjAmLmSQRgG8RXGnT9o85M33ChYgtqUQzgLyTJv6iREvZa"
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
