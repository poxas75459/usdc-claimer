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
    "g54kExxfgp39ofxqccPncnhr7PRDFzcYVviJQsQPmx3VeGL2WLa96MvTFuDD75KD2HRaeFQUQZjkjAn9kGHZVHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eUupmUP55RdeZumjy8iEpx1n9V36rTvg5DV4nVzW9QT7WW3HyZvKxmSSL62QVtB6g3FXPhb5ZTw3aaVt4zBMZo8",
  "key1": "4zJ1v5tPaykdUeUgr2jkQtmUzsM6PysDJqXaogUqgC6Eq6BZtwU4z7mSnFy4hvHYNfBoCc7uYknWUn2DRmaPKr7q",
  "key2": "5q1qwakEMiZS8N7dhx9nhUt6iApQWJbgERVmfK4wZTRsZ3dru5zA4BBFwkYTbYdMo6VFQZEnNLNzRF5osf6KZVXx",
  "key3": "4DMujE2cEMwo53joNW5k6qP7JL5aijrevpRseWrftsmCx1YccvC4vAzfoFTKpTyXh2L6UMm1obXVcfeCs57sRkaX",
  "key4": "4gjnpKkLowSs6G2LqAyAB7yntafxniH8Fr88cXERMTHW828iBfrwVhnoC7hDSoPo2Fvw4aif8GQVRVS7ZHpXXYdY",
  "key5": "2H9HAz2qpJ3vfWrd9h5MdWEoSDpsmRQcNK8f2zdrF5J6cGDymcQPdS8qm5uw372RMyHZTdwf6RgWV9VKyQME1Bob",
  "key6": "552A9pUAeoNcEh6wWU7L8Fp2o54EcWihG7Bk6edGudGnEK6MweU4e6DVLVhACnFS8rwMCa3FwBthByRAkqk7iX4Q",
  "key7": "TFFf3C7MkrDYMyDzaRfQZfbijF9EA1G9pXy4SPtQYAQogZVQ2QGh4QdjjbTqThwmyaNWN4L5Y71mUcYzhFzWCm8",
  "key8": "3LgehnYprdaSV5fi88XxMS73bEttmuE6Tg6AAHv6KQzmTKZndG8emUSRPWf9PwY61pNqSE5AdbmYXTxveToZAbpE",
  "key9": "4AkiJSNW6Zt4BgceeegSGbt2qRFMCFV6wu8myzupiqAEAEmRFyH5GpcKcBXmFck55c4wLe21uWsJPjRYAytGcVfn",
  "key10": "2MDyA2qSt2b4GNgnQz4DHYfeuVSwEoe3Lz4Tkym2LFt1kjK9GiSkrekukGEYVmgxiwmEnkET25Z2H8DPT1rSGXrQ",
  "key11": "UE2TJ4KetNgjmiPYuZ4b6XPcVHkaccm6LCErM9XqXdkG89pLE5JDLaCp5VyXBmeHLaNVfguKBeEmpypmuaCvsXf",
  "key12": "QNwD75RFysB5J5TWuoU6mSgmBvT4BQUFBsT4rRq4Mv1DJaK2SodidzQuLtwbsN1rqb6svu8ui55jPqh7hgg2F1U",
  "key13": "4AGEk9My3xrALV7Acfin6a2ejHGHxHUV7zGhRC8z89uujuB6CMD23fkb2W72cTyTWeSNRg1oZARJNtozVRcybkDB",
  "key14": "5gkNRkjUiiZSiHFjNFxsdpxG7YK7NNa9RVUrwbLyDhXrFz2idCnFzdKGPa2ctbZuHw419rrSVyqoqqdhBCwsKHB2",
  "key15": "fdnuUiGvryP82rJxxPNNTSNGzCPwdaLkRphYxUnxQtiYaHkeYYYKR1ZKJ6eq1M3D4MD5EbXZgyLpMwNzwcJLJoo",
  "key16": "NpfDU6WLyqXdeE9N9U883HKoyCYt5UoDLf8dZdrVQENPgrDZS6UqSj2RTVcRwoK3eYVXZp39eh36iBHkdmtNd6B",
  "key17": "4WhcfYvCbX7QV8iv2qFcpAtNwawGYbpxyDFZgZk5FwTAhEag5d9uGAAKpkPgdmVmkNgyFxngiugC1yHXC4dRcP24",
  "key18": "2vCFwiGBxmNjUbabEN3CzFG3YT8CHU9h4xAAFtbgiju1bKRPhqnam6z5YqoLAQgzq2xY9P5jQE1WcpxYWpS7T99X",
  "key19": "DmWXcmUYgVhQ525RsxpwNPZ3tnRHj1QYqfed1vvxu3WDAJ7fhHBQqAL7ZDbNG12F6ht2VGkiFb8dSeERXgkDUu4",
  "key20": "3BKCRM6oL5d693G8FDs3MqjLC9LZWj41bcQKKcgyUyL8dmrc3AVuJerK9sSYufTGXn1w9y7QMFG8yfpPu8gybyrP",
  "key21": "KmWMjedzZaregrx2x62ekDY9jXVfdTWwTdZ9j3EkEXnB6eHh6NDKbrH92KTdnv4y3JuMcwxq4SeVy6PoUYKuFPF",
  "key22": "2KNcJvAH1sdhi2PtZksdDnMgx4FdtPGr6yjaKGGXMVUeobeXnttP1GBdbjtCuzbatBGqErKuDohGtGyiemHbfjir",
  "key23": "4cyQNwC9T6AeNsJi12PNKBS1crJrdEw2Bha8J2XpWaKna1tmERBYGR3KhZWvhnPpAQJU8zf5uCc5wNPERwGw5GvY",
  "key24": "5Us5qZZGySsSK5MoDF3VFR8gSXpD7gqVfPuNJQE1i2fct8y44nxwgY61UMxcV3NpbxYVys1PqAPum4qJNZFDCVp7",
  "key25": "2eyWSr27oLpwbAtMSrjVqRFexU3ot57j9jHM11BC6symoKodLQn5gcJGkCrZAmkTND224NQpYnyptGqjpUVurHtf",
  "key26": "QjHuprcdNpKymdmW7tfhCQQSfBdWfTJWhR6yn2LvEbYieyDsLGF5qAEhZ8zhvQu9uno9YjrjkNfRmJiqb8t5KAr",
  "key27": "2yy77p1UDHfXzYWChWhv7jsnwnL5grtW3pcGJy73iMkrSQg48P3DeoopKTWwUStgyGqjQnPXkycVE2sNWuRZ2jsc",
  "key28": "ppfbDC4atqYhvctwSmD21ZqdTjTiNreUgAUoEvaipaWBzLrFP7ifgjaKYf5LVggR8St73RPVC4hBJNmEPxgcHgj",
  "key29": "4dQPUBYBuWpV1qurkdxgzWHJsW5TPBimnGBHsSnM9Kv8ACtKtwp8PSjtWWBvvugWeW4jjV81bsvGaCXQtEzA5E9R",
  "key30": "4M4Z8MuDfAbtkVobEhaSgz4jDZQwuSzHVV2rdsXS68zmd5Bq4y4yNbKYoZkPqhjqHLJpgTKQJ1Vwgt3e8p1CCiCm",
  "key31": "3RXNq5cTTC1uJ9MTVX9NTpAprofS6Qp7LTiPVRe48GXKhce3zs1qj1jrTHV3RWCTuwBTR2rLxhb48hZ1X3fn2rT9",
  "key32": "2wBEgwr1XowuewSqEpsZHEoa2WEjURXvmGEFDoZ1JftSkNV8hrfdgXk5VWU1g5vDK74b6dGjTcsbEdhw9npdU1ua"
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
