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
    "5TgLypUbDcqKKWhpXMewv2gUQvQhtjHBtA4rmRwEjcKrUiHpSaP5BJfVNHKh7PUF8kNVKPNjZfAcJrzZwPCC8i6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "362Aihx4jieEpz5tBRAV6UWdwU6aebUyrXc3TDdL4pTtV4r6vrduoJ2o5Ae5ziCyS6nFnF1NJjeqw3yb1NaqwVYS",
  "key1": "3bJ7aFZWDGcVsrEwkkt51eeRzDMaYp9GUf92T8KR3gMRd6WryoaK3WGECfwmNqhFReHN2ENTu9yzQbxcVwKhm2hs",
  "key2": "2nRWDCWPxhobq8WaFj4Q7ry5Je5yT1WXnMJtSEskvbehKPCaaxakYV4qVuhv9tN64JvYMGb34oZ8HGdoPC4CH8Kt",
  "key3": "haUHPMbVBC4FSVH2MkTxhnwxd2ri7CvPoy5DFSZKx8vTwcbewaDVzu9aWCTnuMib2ogUS9RuF9AgzKWXVvXddvY",
  "key4": "3bsn92kFrrjT3gjxPKPCWu7MhRRetwDfDiFAZXX9CWhbmnLoYQ5MZaZ9W3UX9GvWFP68PEMpYomAV9JuxduodKVv",
  "key5": "4bt12cbAwWCyByZvd9Zv4B3UG9YiXXVbJqD4y5wEJfhaAQQuiju8ooL29FbPkWn5H7wr9C7L7tY9oihQkoMpNDcc",
  "key6": "3DkKuehA1FbxD1P8BLnZwaeSxTv2jEkx5aixUSWZv4SHhcc3BiuJvPm4T3Zbh6QnjqP2LyTmfT5Z7BpY9u7BKTLS",
  "key7": "29mPNwkxgUCQsfZowbD77j5RybE5UiUZfZDnQBsMJi3WKuXSizyW4xCsX3k7ga7pQBnfWpqBEXPDKX59xcBSahso",
  "key8": "hQX73fwDb2JXb8CD9G4ctFgL29gwtgm9fnyC9ddZHzdYqW8wNBrx9z4dMPG1CZbF2wshJrYTk5HgbmBR9P6Gbnn",
  "key9": "5z7aFZoAztMJCmykkPvY2jv1vL1B1mTCt6qdBxAdm1EGf1AUkwdY25sfqQvqoF8i13SUCaqQZnEG2UEQq957owey",
  "key10": "4zkCtZUVgBedtXC7PGrtbZ86usvnLvLBtguSqKvZWC6Eom1Pt3y2RVD7nwDy5mFXzHYuS4fZ4DttVXxTpGyg2yuf",
  "key11": "QxskWdRx2an53rSHxHk47ftHWvQPceLyuJT3tU8TbDyQKNXVz4LB7E2d5cJwSqskCUmpSrbxViHXQWjveVf1twM",
  "key12": "5g8d8G9araRXhweio7z1yqMS7J58QXA6tWNGbEsfbRT5EtE3m1RwfNq9MYEygZy8YR7GzfEWxTAVMKkkNMouqARH",
  "key13": "5n1b2xhkEPEBnP21sxskBsPN7r5pQv7dniK4DUfv8ubaSui8BhvRxSSLiAtVpV5827XEcMnHJMnfnsawpmdXpATh",
  "key14": "5NRdyLY5GCJugEjt5RXBnBescTLXbCHjmVo4wkUC2CpEvXV7roDY68rdDvzFCnn3Hu5M1jiYjrgpVuneeEfPRvSP",
  "key15": "4JCZ9273NHorUx5twDpupZR4FenQjkE2Bcxxu943VsfEewGP2sHzcHya8RrP6DrQGmtXi5d5RAHo6JW7gT7R4mKA",
  "key16": "2tBYrmoqJgC31xAQpa647PmjCCi8gYbLoNpyywcuNWjJAZb44ZhnPzkremMGP3V5RLiEEWpdsKndV78gxLVNhCw8",
  "key17": "2ozD14zQfShy7gne37712bC8KowJPnQNbxa5Cm6ZFKnEXrZGWf4THA6g1PcVkscjvbkZQUGkg69eZ1G84P9Jd1xR",
  "key18": "3JnXEjLKVicQKZV6TYsrvrrfd7oxSECmdf4WBkCYLZFGbD82QTa3ESrf3b24BNPq6oZqCRndsj2VY6L5vYLEu4rH",
  "key19": "4G9ArJvv1ZG1dQm4KiBbgbzxUJ1wHX3S7xxbBQ2vCDTYKDG9bUfp9ZyvRRrndnkwHtV8QGjhjoSA6ZwL91t7os7H",
  "key20": "5SwTw2VF9sYXhH6tSx1o36r3B2zdUBP5gBYud83XQ4QeuGVTudCH5YaVB3j1UdgUJzAyB9Xd1pMpy7xCAcZSESRV",
  "key21": "VKuJjZD7JNv1EQEjAxxeSzSsgkKMPqeeE9ed6s4GDDkSap2aFzrUanFnPLvFH9d6hwPan99vpveMKUWRxEsZhiF",
  "key22": "2w5mXAi5weEXEJBJVzWS83nmHbGKHzzaNT9AH88mE3ybBa1JMUF1xd7WC1Y4WJCagkbgusw376TUyJPQijU4AZYi",
  "key23": "2GUnLnhid16sqCJrD9d2kRPcHVgB48pMgBxqg5JEXwvBvRzYz8wqNsKCmaA9R1gBqHrNxxyQcprDUM6JFwcWFVK1",
  "key24": "4g1BLRJtAQrt7fYmERFUqvneouEqaS758DQxCvhWoVENrEVrQJktF8A3GgwPVGZN3LLW8jNGaYLo6zJ7NDgVy239",
  "key25": "4xZfXV8WHVQSrPZUFPCEDGaLtCWcqHFupJcTA8smSD5WeRF6WSSQCFKjLBaRhUBZEJ9hizuqvcmqS9d9c18P9bXZ",
  "key26": "GzAUVVYV4TQRFY5m2hvVY7zHTfQws1xMJGDzzfhCbfStfSBbZkcQmVek4upCEdKwLMVDqWh5nM3tvjsaenrLwAD",
  "key27": "3wiS3kX4BKpxwMwfwTGpNFWdzynE5TgLCHR5tcD6q8k65v4Se3DzBoqr5SczhVDeSxdcqBEUezFYoEQ2DBuCbyZj",
  "key28": "bV2YRVp9b2DegQ6QEkWPmiUBEkYkkau3EHJFTSgKmxXKGc8dFGXJaxwk6dMqzHDVeMbYP6ibpStz3PoQjorz4YG",
  "key29": "5SqohX4LFMmfP4CiK7izcA4GQ7jyYaM1PmY5Xi5oNjvQhhXQmCpMQEnJQd938cfGsLS7r53NkHHFxNznnFuWwUPt",
  "key30": "4aXKzgeCU99E7yJ53nLTfXbiRoVmWKN8xWN8yq84uebbfgLhwP29nnM39CDxNB9DqfCeHAuuQr1ZRU8poEBw4kfc",
  "key31": "hQJuDpZMWzcuoM9RNY6cj2rBoJ1TWCopyZyMnoiLnNdxGaWw9ezK5utRN2iPcQcs3RA5pFKknrAkHSVbP4dWamZ",
  "key32": "3aeGd2A69XiR4PnFcAKroxn8W3d7ueLbFJbqVCMK3XLZbaQNxLLk6Meio5REKH9mSDcz3bo16r2MtSHFmpWA5Pj4",
  "key33": "4uDALupf74zRVmDUqbmFGWsNuQiEpmCscb8xFgqEU3Gq5eEFyF1iRPBa4ir4cmDV6YxMbuvTCHadBJjLdyCdnVic",
  "key34": "4ozgY23mskAiFgz9mTju6imiCodSj5paMD23qvfBRqg5KQX4Z86Ext9KNQvxxYC1YtEJ3HMk7VWBfGcU5puzBHBt",
  "key35": "U2hcLnQeHXibupjzZZZfLTfgoorWccymwmz8SeV5DVjmvgBYQ3vU7RWdY5W7fpudGhNhYh3TQ3Gq6Nmion4uLnF",
  "key36": "f4GCukYQafEVfop7UTNznKawrymfwnRSK7C3JyE1nGbdeFZg4FRnWp7JBrcBkr98xHCpbs4t8USstmC8VnmpkgK",
  "key37": "3ZF3uo6MENdFgRCi7jdBFJpHU1RCPrNb3wvtJCPtmxQWPZMJbCBDwB1dq3GxAjYmfrguM1wGedqtD97AAGLDyd19",
  "key38": "4Cthd7tcE8UcxsRFFUnoyrdaaa9AN3biXwk6MPCSQJgkSDnM26HqA1xZ1uJUo2epngJBHWPPHvWn5FSBdwuuKbsC",
  "key39": "557PAtzjLwsMtGgo67BZp4bYtKFohG3E9dFuJvTW1Z52ye7btnHLHDtYBtCSWpHiDzdR2CKCqkaoEFz63TVSJSyt",
  "key40": "5RNA5U3pKRd4mD8D24kj1ztEmigURvwrxrdcKNtcM6D7k26wLVSdEHw6cfTQd2mCuHABf6aijzueX3ac3dhv6RnA"
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
