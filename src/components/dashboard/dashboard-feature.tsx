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
    "5xnw6jFex1A6w8tZ53KCAr4g21WJYNnvGjn1A4fWtkkvNEdWZ2sVNwWdg5m5wnea47Ci1ATZQ6KoyuTaeKaDUNd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aHh2fLgatZvSXCRsUxkwQ2DsNXPTMtWQg8QUsAQn6k2SKHRn2XmdXQvpZHrnRFm4hBMyEX4xeFFzLf9ZvNGQWZn",
  "key1": "2D5Q1tfHgRWDZ4JoEcjnrmSv43Hnny2r6e1pRkVXj5TgDURP78yQAFGPAyDHSdo4p9YvVke7tpxjpT98EypUg4e7",
  "key2": "4DDGzBNu7K9dVqSKZQmWtAqJ6AP3vJJdqAcUBWXNWFCQ4whPQZ1yb7BZRCP9CcurXQJsKq7afyU7W77i5gjAscdn",
  "key3": "5Nz7hTiRW7Y3HFtpJHkUCyt6wpL4LMGD4KestgooEhDNFKVauyTXDuDBaLZNXUUQKszapmXZZyDfs7o2cNp2onZU",
  "key4": "3wFrvuFKWF4DCBJGwaKumEizY4ynd55LcXBMrtbbnkQ3HW4Wr7chNv5FyfCZ8ebRdvzgcC7LCXcVTSoFof6wuuAg",
  "key5": "4AomidExCkSWWZqb59c5V8wDaYPMT2kMWmKAoibgnXDFvY6BDMZRcd8uM9FuGLMS6RMAdqgoXrYxizqQnRHCSZyR",
  "key6": "63kyz8QtHxzd5tFFFawDRMr4y3UtKJHNT8mmbrBncraeC5FQNriSU2BjpAGUzUmukWWsWg2MxMHFJ9cCGLZinjti",
  "key7": "5DohaScAEDgaNvpxd3gDbj6qTc1fV2Ksgz7MuBdjckhf4RhmATFjZSBwNgucPNEhMr81ETqG9m5ccbRfdC8eaMHz",
  "key8": "4iHaxfXY7GXxm3EkJKPgFKnUpZU3WEaEirA8qeaxKWmHxUrgHZoNM5tYPwidfuqyfx2LkrHAxaeq42qZKygo7NWs",
  "key9": "UxCYT4WfYkWF7VkE4Q6WA32bykyZLPmFK886agiJHoi9GfWFrL6Uv8etvgrdWoNvEkDUV2Mgra4y8bZaBgfVHix",
  "key10": "4nLfUT4oFhorchDj18H1yHVxNNFNWNWTiDj4DvxD4CPST2vxJL4UF9v7vzS2Q9L7KC6ihpzcaoUwxsgDfvYn3ri7",
  "key11": "4PuHuSS8g5LH9P5GZuLXzU19EuPzMsgYnuTCXj81p21ekrgraakG5fLbfXLc538aYDkun58mbRBupy2AEmLrHurK",
  "key12": "Ykp3TVvmeH6w2XYSxkr4h9W4Yta6QezMWzc4vZnfTj66AooUR8RaDshiZsXYYD5MBJCuX1DPebjGCCLwAx49Xpp",
  "key13": "3HjAzkDVcxChbp8QCJfVvRow6mQNnQKqxR7u7suXGjYPhtKgDjZ7mnjh6uDyZ79ULNMqgRTJ6FeLzy339oaMpcuf",
  "key14": "2i2X7g9NASkPPEQt6piVexYZ3neDQifBgdn4XXETqwZhwDWQwV13xm9w5nDDHtSdhnAkPZZ7yanag2sJtPsof6qK",
  "key15": "2Yvy3B3UaYaPtNFQn3JGp5JZDon6hoPFvYDoj6HSNokHBN4xnRpNK3hdwT5BJcCVCmaiVwdNh2fE3kj5NBxZ8U2E",
  "key16": "4gBymQXP2MB4gR8vBabZYqCet5KwdBA63U9EpqZJbvErDcuw42C63AJHzQ8EbKK5XmCc15oU7USKkK1vZ5XMDnFm",
  "key17": "27HdrSKusBJeP1aBhpaNepY37ZPPU8GHcaCqk2AXpdzYyrpWWTQWiw9ZAM1qMhE9UBf4WNZKPxqvjvc1BVuonw1P",
  "key18": "4PWAFfVYWbfWFRgqouDdWh2x6EhKKeswXw7Mxc8GN7bAHUDxX5f48DRAfAr41QuPM9ACPxsExQLgPPQtMrxwjJVT",
  "key19": "qZonjfULon9jVFBAwxk9qPZ312gmKZhjuuazBTTXs9f7KKaWExwfYQ7CZyxkJJD9X9udQmNNnaQFpCJR6K9S83U",
  "key20": "2pZXqRtgC8GACbLy23gEw6Ga93ZsZ5MwVAgb2RMJmEqp3catuhZezqZCHdPedcdMQvo5d9ZYH1o8UTg4DEHReHW9",
  "key21": "345k6QZ7Au56hktVngDWPDgYDCSCnWDetirb7oH17tzMrRpoprLuLGCU55fjGKF1ZXq1Wnkp1SxfxfosVddhgv9Z",
  "key22": "4ZEHxf8gcwx7nyEqYmA4vAmVomMAiM8xc7nEn93EoNqgQdix392jZrR1Xt8y4dyJbn7pa1kzdoy7Tk8oMighYMop",
  "key23": "4pTZ5rzzNNVhkcBda1CxhHWVrJcCLRHSZN7LLfpYWEjQUcsA9UgfwbipiChdKvfdF2Lwmt3z6MQVeu5U75koSG5j",
  "key24": "5ieFFp1CBphGuJ2NsHEsyaaefL1WijFyroKaZ6Bu9FHEn1en47smLoa7wJCzQ9kHhw66X5zfiTYEYwXpe82X75Q8",
  "key25": "4m6D7huPWTGP19zLo4VxQCvr7xQJVbY9bwqp21cKbGh3m62nNck32PseoVZEn32FBjPQx6kfgfbE5ovqAGVbphxe",
  "key26": "2cVUsmz8a8SSKyM7PJMhWdm8jwLP9eQ41BtmHk2ES8it4xcY1P2tyR2h82f5TbVE3Tchyce4GidniSQQ2mmG1Gb9",
  "key27": "5u6aJ3w2nbhMRtvCrzMwpNdBkT4TLx9GzDgxCwcieRzeb3ppa1DSZLLN9bipS41XmSwawBdb6YRXmAHuTq2spjEo",
  "key28": "2Np8cXpMX1xwKtF2uYXSWpCwp3vjvxPHd4dbhGtaZ88dQg58cRHFgC2M5jWxzahs2xtehK2Q17QKSYgKtum1TkBK",
  "key29": "4k1pCD3sU9VWnDHT5d3yqyyqztt2PuCE2V6h5PevpPa1QZqXMRx7JxFH89Vnpz41UXELtQgxBK86ScLvc7hLS7jM",
  "key30": "3ADAwUxL2eZ43ycJw3ibqPpPbb4m5S89yZJ9Bn932SxNJMx3yuAdS6hCUioKQWQNUoNQ7UnURDbF751nxLsKL7R",
  "key31": "5jzBiFs48x9hnTdGdCUb72r3jc7KesK5S5QJn2Cj9qCeYFVg3eoehZbCGbDvhW14gV8Vhy1yUxn5GSqVCHb6MSME",
  "key32": "38oCvRTq2ve8A6xuuuPGpSxqkUhFfNyfYSSG8NPLufP6WD3TPdheCJ5CnEAawGhT67UuxD6oesTJUWruodTed1gx",
  "key33": "4CARHZhT9y7fiWW9KDwSMyqZsVDi6en2UYEPYPx8bjBcWsoC4gwc7f6ohd2vfMgUqN3qQqLC4Sjfc6tkpH8Z4atm",
  "key34": "48X8hFSfVr8DFNtvjHBzideLAYtRu9kqNHX6uSj5TjLBTk6sG34ENQPWTT4VcVz5zTqEmJcgxQpLh5RzE7BvNRJ6",
  "key35": "4tKua7ZhTkYWXoBzo9URoXgBasgTXY6CV5uQkvz4UYJJAe2qkJD181rMyiZde4iLDukzQuscMcw9CTqvZAY9fUzq",
  "key36": "2cU5KQCDY2wvHKhwn1zbWESw7RQSCTmRBz1XD4K2GbqxEF9Cppi1p1hx8W61TY4EPPPpHTQPJ65YhaXvJ41HThor",
  "key37": "3xbm4igMmq9N22NAuUkk9rypwwjwQKe5HusExZNADcKRnyUXE6My4cBVAREgKJSHGVtkbhs83bXzfHVTrFxSUPv8",
  "key38": "4W5LuqCWpBh4UjEEsHkPDhVCvX3W78Phw81wFCU8nhPuS5BS3FxJbxAbaSW847xpBUR2tYcwYjLWgxyAzj8XriRG",
  "key39": "dkWF2BKyTEQo5hFYSBC3TXLhyWU9U6tywJDMtydbuypJh2uokqCtEhaoiPesKnwqqLV5uPNiVgp1zBZYKCR2oyD",
  "key40": "5gVcspSSDLFacKaGvfM7HLgZwDhx7H9yRQp8xWP6eWoFmJxJFRow4ZKATBoUzvqxk1wqo35m9KGLHewwstH1AiFo",
  "key41": "4gVWuHL3Qg7MPMit6Bt8mUN5MsSwVMtGdDErqQXeaYXd2SiN7kJmJtGSubwJ8N3g2hxgBCHnJ4ZSCtb4Xf5NsV5g",
  "key42": "4czSosWp2my6hQePUoAjcWJXx94Q8X9hvqz66BwEX2KXzWC7T9nWePvaCWFVT6bTKUEpAsnq2VdjtLxtp4Qah6cB",
  "key43": "2qxqH1PiFCSs5zPrDrCgs7KhhahsjQb5NCDYirKh6umaVwMUTTQrJJsKNqnyEsEiFeSXn85UruyoqD3si8riyUtw",
  "key44": "4Fd8DcPFdZ6ThZNmLRNYuyqsGTX7arSqKSoFniiLVJNKAnSnqJcJeD11Va9mNKMzvxSiGMArtH2RQPVY9DTcQ6J1",
  "key45": "3kNaSbWR1wsXxgnmc6LMBAKYcWegKVBNRfq5niu4XjHT8zWooLkfVQ3djpFdnLXciNKtDkSSkYYSVh6DhtDEcH6m",
  "key46": "3umcrRW3N8GR2XtVDWyCZJhFA4827AXUAXKZUFDCSK6pNjbiKM41o8S3vq5pvnx1W9n8JkGjUGPWnxCwJb4xvUeP",
  "key47": "2nNFRSjTZFdjF7SZXzTgs6WXKyLUzcpJBuXjfmCEfZPyubQMxpL4GKZi47TVpQFj4KoJUKapVmNx9tko7a3N6vuU",
  "key48": "d42BWzXD6xxJnjgNo6KbM6Un5SAvoZ7BjBa7uQgtVvF6sqPM5miuTVdLTBjvVSsCTpwQFj4kERWLXRFpxct6amL"
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
