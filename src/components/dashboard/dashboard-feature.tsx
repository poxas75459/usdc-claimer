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
    "pc6QYJbaTzqdYiCr4sB281EaxKrjU6LL87fciFpuUxbm9hA5daTxkyWbsKHGYdv55573nFHbHQXLvdUpweFucAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uxYGrafCkRdNKgTbUniV2ARASxRevumE6SQ7hv4EjTSf6jZcCQQbwFCjBbvyDvfnyu7Mhvi8FxvjCvHevCi2pBu",
  "key1": "2dZoQPbgQAP3HStXbgccowpPDpBG3Zmo2ZFdoGpkwPg84qyurUaJGyjAZedRG4wJzPw96GZk4Bnwmn7RyN28eHtL",
  "key2": "9yRuM8Svg1PTSb3rEzSKwkrjLNDmmcJxobfKW6jF74pn363dDUfGgQTVSt2jBmhA7jz1mptiSs6z6ZC562v8PNu",
  "key3": "5Uc8Uv8eGwoPaJ5R9GzbMAZEDFqKn1ypHPru27UYijgwVUtpcvpHa5Qq9PG6mWq2nQWmACuEGg8gJsoFx6JavqQw",
  "key4": "2x7rHwwfWYSsyFrzk1ktRcLyn67JTqjyGAp881EZH6eyuzzYdoPvApb7rbHzysrBFuUMq6khzFZe3vFUzeM6tMdW",
  "key5": "QKn8pXL1k3B5e6NHxAgiHxo5q2tsMuP6iJZFmX6EinKatcL3p5YCMcbXXnja5KmugNrSCNPSMVD5CzsyVTBbHcZ",
  "key6": "bUPmTkqjEEJWUYXfNrWUadEDZ2ZgQ87HvmS3gLciPWi6JHZUo96ZVAyBAqQ3fH5mmiNNqikHV5SeZC59sPVh1po",
  "key7": "4nPqJ1jy2zWobiyPNts1fv4h3571Kcd2PrdEyfjfuh5qxDSkcR5rv2LMMdcMFGou236HKzzx4u7reJ7pAKvb9nEP",
  "key8": "32FhckUhPECfw9JVNpD8PHeWDB5MCQdc6193vtRMq4ejMHkA6XC1NnPWDwrN6A6zHH6jojh4ZgjLDF6CQFAmhXUm",
  "key9": "3Pfs9Mak46exjc3vAqwVB1chf85BrL9xz8tznbbYTW3aenc9Ufoxpx9SkAi7DiHUzWsz9bYXj89NVfDxSAJMoLzy",
  "key10": "4fwipSuDGSsuCCxcUcVVi7HnJimKz8K9zHHe4bBF867JPY9NjPLUtBa32D4CUMX4VMRgMwLS93Efd5V3XnJsVMjv",
  "key11": "5t1B1o7yWGTg2CSZ6AejTQ4KS6ydnA5xsn3FQtXWLRc7ZAZ8YBTfqBV7yU7DgeLw13Jm7nuvTFjt7V6QFVaPeDRo",
  "key12": "4WV3ThG9vvYsg3iLCWXs44dios6sRZMRifiLoHTteaytcePXpGTA5itcz61catposjdydV1pTA1ca7Y9nrWqvdsA",
  "key13": "2Bzj14mtFSRQJ5LaTrq4yJ7E3uizBb6B7R2PPNjUapnGN8rP8Ekrd1SKNynLZxAMzMUL9YVfCfdroujC2TQSehMQ",
  "key14": "5nm6PrYX5bgrdutYQ1SC8ZopMqt1Sa3nd3jQW6UtsJNaJSstwbLZo64seW2ds5qK21kzFoHyvpWtixW9nuNUiEQ7",
  "key15": "66iZojwj9aN9hZ26K4eA89Hp8BbZfurKKUGezAaiFgytF4uFu7LmxixsWKFmbSXr5VDRSs2rQRsnLQVyBwZJBKPU",
  "key16": "3ZS18E6QvDuWx6DUT4geXFKLfBqHHAkoM7TUf9hmLKpNLYCMezT2a1BHFj2wRHSRWFcTg9AbBEFtX1EC7ph7JgSf",
  "key17": "5xXEwANPi52ssrxtPxBE44ZUSVpiejFV8UTsXU1Gqp5u74u49UiuHy9XTWzEo6UEpLiWDiRZDY75CdqpFH2rR8SF",
  "key18": "4jERVEAXPn45nucm5dhFkfBZ8pATdqaSwr5BAPdjwTtQfjXqsKQumvg648a3U8a6Us7r2YBnsnj5BdknEeFsHZHu",
  "key19": "5umEU4R3bEgjP1PjQDg9gVgFC5xzntRkwe2A5z4LFtrNgYjj7LG4gFXFBhu3MrfrPvUXFLcnhrh8n7NKGbk33hXU",
  "key20": "39gVYDzuyzrCNGFLtyCMwGnrjPkqrGS3apbo3G46u7LSS5mRSG6WHYhPm4NpEEt5s58LQHPziVu4AL5JPZN1XYnp",
  "key21": "3QpzuPQCXd8L7UxDNiMQw5gqGRbhzSGdkU3YZc4uVLkHUSYfponXCgT1MwPXLgue1w4SFfhjZ8D3VdUWbxhh3g6n",
  "key22": "3b6M3o4Jz1ZiUkjrb573rM8yujDHpkugQr17MZSNvr8xxHck4h2vQ5pEtxTSpVKJZSNufpBiz7QYYvAeeRexrk6v",
  "key23": "48CheyGE2Awwmi76yKjvYJj1aVmfm5EDp4RNYGandTYs6wvm93X6RGvs5mwxgqWirPe7yY7o1sM7GxGptyxsTc25",
  "key24": "1XE2wTgtz8JbyvaBZQhqnuPTVAqnrDM8oqXweyftKPjbpbtEQMT3ep9vCDj7VBnH43UT7yKc5HvoyRVnTCN1HQ3",
  "key25": "36kF9tpnCshRLgxo3aqrLrWxJ8qxEjqDVmjc16bpzTKYg9xWXhVLDQ9WYBziMY15QLVJvmbz4kUJxVwXRTRTtz44",
  "key26": "2bDfeM6WAXjctShGqhweMXWwUJbMLeDXRrE86cdcVQ9vHc6SoaKvHQpJjTPJzWv2fYjL6Ae37y7GdpdJPKrnAyve",
  "key27": "wUndhXdxMVRis51tZJztCK7zXvCqq6Uj7gdEvd2g58teYSgZHoLAvxdY3dSPu43SU675RiZ3u5Td9wxrNHLNEpC",
  "key28": "3PhYSyPRzcpV6asCqMtEpNfm2aB1P3XGgVqPqZpkN1frz6Bq7EnP8KNNoPxoer77XLLd7TkevWUXSLRLQAPHKspJ",
  "key29": "3tuSfB11oNk9oMmhyvcRAsm3hcBSTMB74YobNp8TBkiUJ6rbU8fErHEUZ9y6DdRMbks37Qumu9WWjSw5Y6XJSZUU",
  "key30": "2464jgGKHBQEBH6T1xnaV8KqUGo28KSZ6kPFF32JfG8VK6E6Q6xpWfhw6n9EoG5yMztcHvDhV5GMmw6G89rsRgnc",
  "key31": "QF1P4sm5KZNR3xctwx3bCkM9pNSLjoXfwbyD9crPQUxunRrXJujsiuebZii5ThyfvSDHbxkHSCu94KM2Wi4MdTV",
  "key32": "4ydZaHLXMxBrXGjanZdLjeuWZLchSiQR8q9DXHav4tyTcBkoyEo28qzyLJWPzXQ5M958uVxvTv6ynusPydsyafTh"
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
