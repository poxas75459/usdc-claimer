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
    "5deWQHLLmAUjFLx5kTskZ7yzSCaLc5vDmJrGDJ8uUH4J8SfZAkrojKbVZST8M8o6hJgVviNGgqghM4qBjKQN1CsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52dS54pEwHFSCAjZG3nfhaZzFauAnEzs4vatAzyMPeBfRjd2gQMbSSg5mqgnKBeczxrDVCs7at34qCefioF7Ne5b",
  "key1": "5fbfAF8k28uvFdPCMfLuR6hUhsDv7BjjBFgJXyUWFwNXHvsiav4vWTe8Lv1ZJidsGiUSEn6FfE6WQnBYDtHgnbHE",
  "key2": "5zihPGxxSFG9nAgktXU2uewjtcbjUatQE3ugLhw5daSVyCDFVwTyzokQeaRYgxhx7u4KVouENAUod5ftfEuHGYmE",
  "key3": "2BUaQNX5aDuk8REmYsoJeUJLkzVa6Zp8JnX7QVbes9YQV8ZeeydFVCrD26LNC7rd52SnRa1aFiau7qLuWwx5329e",
  "key4": "LZRxGZDHuCD4Ty1cqEzEQEyrLnpG3pykYqVXPCpCATzaZUBLCybwvnN36FJYqoJfbxhdWB1wsFH84F9ZcZFgwCz",
  "key5": "5RmpvqyCSPgWpdnR6FhemX5UTBCvxoQcCMqK47YcRax9wShacv8JnPkiuTUGmge5Nv9GfWJVt4utrs234Y931QpJ",
  "key6": "3gTvrwNrzzsUgDXEBz4hmbFMnJZzCKpzpvhkpVRJgv8sF5YSeVb3tTcgLMeYffHs9FwK89tWCBbmZiEVQHBq1acJ",
  "key7": "3Q7bNFrVAHcN9RQ7KaGH4X2EjBqrP7rJs6WdpxZbXmRpmM2L5K5cVgJosFxbwcDz6FiJjMBSdBtsRLnXeQZXSCre",
  "key8": "41hMUDzxScFyY8parno9nYYwVyQeZB4VV66tYAspqtNb3cAuMB6ANrvAZXwVDfRf8Ng4YdMxNuhgMsnyNGu1megS",
  "key9": "Fi53mBX3KF8Ky949ScSFe3QkXR36v1SjdL9LLYCPAMmNxUZLyCMyE8UjpzDKiqZHJNCHjob5RZmJvgbXJsUroSC",
  "key10": "2vJMhT5p7SVi6bmH8QRFen44S5McfVXq9xs5YQeKLteamvyayKvDx28tp3ihAQEsFnLpEsJPM7WG2S2EU4Wx4cRZ",
  "key11": "5yQhh4zwhEqruuvUtb1S1UUuSRobECDNLP77HWp4UHPBKyYTNxCN5W8EyHu41JQGipq4i2HA3WbYjUEVg9MEbw7K",
  "key12": "3UKTisrLhMF3XyxzVh7RFrSBXbGRbKZ3HvtSWqdwamPh5hvqHBWnwBMatqiksQTzb3m1LgQRoLbFf4qgL3ybhoJq",
  "key13": "43dfDq2Asx195RCK4kj1e8FLSqripPbuqxroSKceS1kxDaUnjvhYjm4wXYTcNnfeicgFkArfrtmwmedn2wJXhj1",
  "key14": "548PsWEGTtRrsK9TPam71Aja3gdegD9oBxRiFMQyPUn7KvFvr2q2xx3mFw33DJd2yEiHK9NaiE7DoUtjeJtbaTZc",
  "key15": "Rkgk7ujSFwVQUgGq5DM23QZPz8CGTYC5gqBsucL5zmrikfx7wbGtda7cB92aWYwZM11AvxGtCrsRRyLJbGiFwZv",
  "key16": "UDSWY1ormbjrRhhkSKAY4eenTSpzd4f3M9MtJ3qTFrFm4o4aBqJ72Z2zaqeqyaRdWG5SrxD4uNZQy6QMF5CTewu",
  "key17": "6wum4vCt6RwDRCLPTdqYShuHPPPXUdUusQonXHWU64yGstQ5BvGgAaZwUzzBBdYGjsNo5pTPmkiUXwff52rRSnt",
  "key18": "2Ad1QPpDnGzLYRwPoy317dUXtuCv7kag2ZLdT8iPEueKwnK1QSiYfXpMotJXUQ8Je2ioG6ytLuLyfbnczEvBXsAq",
  "key19": "3bq23wZK13Pwe3FJToEgXBqx9PVPmJhWTnyQN6RVqJG9g8HQTfN6nZR7pZtfa9UGcfysGRTLXJtqyrobSXGyNo9B",
  "key20": "293KmKkK123XetETUAWHdZwQNjezKW4HFBr2ZP6L3b9sozYAbEVzbwEv9dnycjg96rENughGz7ZwemWrJn8BBHBy",
  "key21": "39MQ7jDWFwiXS1FuNTZaKQoP4Yva1HTm4w6fun3DQxM7ZdokKZnLaxGPzsQ1MMEPXsJWhJzRsct12gxP6gPSfsJM",
  "key22": "3rRTCeuoP6LYFQvSfrhc2KKc44hHNLRsdQK2YHRuSw6uqQxeKC6GoocUXycveqzjiUoh5bDAitvi7AFmH2qwRDib",
  "key23": "4ZKoNrCY3KPVAM2fsST7e2ionjtxtTMtkcSPDhTWgMzN49WxpttRQuuG7GS7kN1bUsrHVSnSYR1tVwmPwXvKa3Xv",
  "key24": "6uDBrfGTLATw1KoyGCycSFNzWf1TCry8aBD9Eg5rwtnta47aUGJRkzbmHxPpNad4JT4z4yENVsiTrUpdurECsBh",
  "key25": "53gkQEXMnuckMRYEJpFwrRrzHoXidR2TCus9oimN6r624C8ycb3U99ZU98fsXRoB1KxrJ87u9M1cN6gMmggEQ7em",
  "key26": "3tVWNYwEsY7RYCk8746RK2GUSNdJNu2PbHqBmZn1DbkrFBPL3kvfDXht5U8rVD4wVWh3eBiAaEyHaknbh6D2Ndg3",
  "key27": "2mbu32XPUP9Jhat2n8x1rQ6TmkNfoDRm7gbVjqfDfrgKriXGQK9Q8bo7cSdxoGecJeUmrZw6ti3m1iLRSB6weRe8",
  "key28": "JNeBUNXoaMviDVqxh9SJZG6SdTdAfHFfXiV3eNSJ4JaSXqNuioM5DNcUUASk2Tdei1rJGjg8Gf3H6wh5Ynjp96p",
  "key29": "VEZPFiitumHM1WyJQS9Hn8JsoWRQBs1ZhE33BJi3dQ6qB1xE6Kq4RAZQ1zasaoSfDCR3DmP213Bs3eyTXhsjMUc",
  "key30": "2u6DPmU55nmQPMfJy3MsnHq142KHc9AV1ZrMSnAgqKYFmfVCAvK7txuJULpBASYekVdj6qbaisbeBVfhjG4J3ayN",
  "key31": "4Xi5u2hzjYdXPXNi7UfyKCQ571XBbba4Y9BFV83v1yHzaBm4ujt7i9vUf8HFtcQDwk6wqBjVBcWTDhx7gGSVWCTX",
  "key32": "VuoLoQ6rQALbEnsnKHRdH4ec6RnE1a4qKA6XH6KTwN12MkZsLwVKY7qCyD5cMxNp4N1zMeiUHYa2ULRquSqL6Xp",
  "key33": "129Jq4aEbmXVh5ULJY9DAfeSBKZMQykSkcMWnqNz1yKh8FtdB67BWbgmLSC5yJUGYxA6RmeijxND4W1sfoouqhNh",
  "key34": "42Ya5cYbKKh7Vg9jVYTQtu1PnG52mMVdZCfSgtpH1Lc81MtbEj9xSYQqVrWHeD26Ms82JD1DiAfHwyPJcGDKoCcF",
  "key35": "5oS4BcTeE6Rz3AErMehjBeYnEqYHxjz8dpFD3Qja48L7PWJywmLVjzy7JmjHRnEmKVnifLJ8T2pNsTV3Dyms6gpZ",
  "key36": "2LzTcQocByekzEMToABGhCXwbnbknauShqjjG4BYLNwHuZoEWPy3eberSn5YmsXHdZBxiAE7zuS2hm3LYc1y4tGz",
  "key37": "2hDebhGwHocojSZxHBcwjJaA6ZmWeCkaFsTnjAEGxdzw2JWqRrCWkKZF7fce23gezzvfgN2HuDULKyE1CbNVCcGQ",
  "key38": "3S3zCmf98J5NXbjoteUSBFcS8e6DtmFSuxd1Xj1cdLGZ41BQcLmXVw5guoeYti9yVKrMaQ7Rkkz1CFjjAhPnN9Dg",
  "key39": "4AKd4a7EyHmqbLG1jv24JysMAN2v423aFfybGwexKGPKkzo3idtKpA2BEejWq83KazaTPJB8qmPZto6eW6QTMtMR",
  "key40": "bpMR81mBfgcJQihkzQrCcjNgaGpNRPm1rWjh1XZksi8fK51AHo2dNNhL6VUv7CS2D4Yf24iF4KCm9ee3fNU4GKr",
  "key41": "2zBuFhuogpwP71kJhfQY7o3BzitfVjzbgbApq6Epp65fxXaMa3GMu85EKUZLunRPqrm33JTuTk2rVXmu8wfUR7hn",
  "key42": "2LRYQk5V7XdYZjsvWazKQibzzCUcwbMBha6Z1SsCs64yEAyEWndUq65x3yPRvfKVouhV86rNWsPkaXUmFEh1wdcL",
  "key43": "2xez1YSGdn2VcLqTFmRD7kyCAg8uPR4LZbS14bYEpM9iMA5odwhPKxA3MiMWh7WuoVSxoe5akMtoFhhisVoQNutF",
  "key44": "2sSLKP3Cp9gE7b1RYx5nFHxCvAtRPt4KWc3GgmCZJDDcqoKYFsMZ5GHhU8qx3P4dSEEJartjrGcfSFfjKp25Ma1M",
  "key45": "5VX9dSvZYEPwAtP4FapMT6g98UggeEyc4aDMP8BZgq1Yk83K8vt9ngwpE5sEEUUiGNWLUMLj9ToahZxWnL8zPEHB",
  "key46": "5WgSWuaBtV7uFC1hn7TTkD111D2zwbPaXAX5hohAE1JUAk1cdMKbJDgPip9pBkqc8N3Df2jki5Mreth2tSwoVpyn",
  "key47": "4c4Dn8dMEz9LkvYMJL1Zv1KygN4k6WQPT3AoPrzNwGE2abQLGzr4sLrejhkUAXHCtzynMMSAXtmN1zWLyYmHJCmB"
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
