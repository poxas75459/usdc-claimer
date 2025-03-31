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
    "2Rc1EtCd94FVSrKUjGp7TTMep1eScCPLv1uyfjpeKDvzbekVkJkXk4Vsr2PGetMzveiiphYssyRnjFFD7WVTxAKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xevaa2gsrXeHjVFxy5GCV4DhC1mbF2B2rDn6Bdq82dZDZ26PQgSr7nBtzdzYaxPp3RACXXsa2DjZHBih9qk7KPm",
  "key1": "63mPDAF4S1Vm5WRE3ugNJhbF7VhNGKmuDgMB38e532etLvBSXVERRzfHmCvs62qrRoxy84YejC2YaMcJFw8GFHA6",
  "key2": "269SbyuqWVTpyjAhUYq4YKw99Pv3WMUtGMBk53dJaYtkumNitKnbupzZoPKH4uV5V3wjoz7DcfHXWsnt8UXaQqSy",
  "key3": "4LZnPq29sXT2Fr53gv6U8wrgssP3fCzi7ixuJFT4YVfg3DgBTcwdbMy2smy3jTMp9VgyVjFprt18xSJUKbw59bdP",
  "key4": "4JVykKr3nW28cmaqPGtTGtiMD9YTdfpnUVF1H5C68xEBXo7t4o8rf3dGM52qb31bKLCNNV7axMds9pVNqCa6vXKA",
  "key5": "H3WiBVrdeeJhCGBEYowFa6NNSSABEiLLqHmaSYFi5AfUzXf3xqooFjWV66N4BFTnqJ1T133t7GW1JvcrYcpsxM4",
  "key6": "qLWPyw3srqyBLBDNA9m8ed2RFK5S2VBM9sc2WbdKDaQuzazVt7t9UR2HuwJQ2PiDWTkMKkduZkESZPQ3WPjZ5Xh",
  "key7": "4QFHy9jmcD74r7dTcsz5NwukvaQMGfCAFrCNqxL82De6GPJAe2NjKTmA4q9MqupACX26UPLqoyLQEG3Af8K8Fk7y",
  "key8": "k7fYMETWjTY6WDM8GSCuf6xs59M5TPZZmLThJ9PjBvvK3bunRsweYMuZF5rQj8gryeBcdHEyQxaPHSx2hqQsc38",
  "key9": "51egcPwQ75WntjHcwHKe7E6xNttExDyYkbCs95VeDdT7vqmNzScAC7quhcPTaiyLuMzhjrsupQzdZubG3WTwtPQr",
  "key10": "3QAXHR6apS5R4sLUUrXf7w4n2VXFR3XoF8wdEVU88RXkBJ3XYYEhnMG5xG2QmmHV3ii7k8DoEzSFavGR3qup2NMN",
  "key11": "4VKRy8Htd6QBQAvWCuoPvhbZJ5TPXhQLP3bTNgGkBEKH55qkvWgQLDftjDXJNyZj57RNduAyKvnBhnPBw3RtkN2k",
  "key12": "4KsKkrWKyLsHYvXHLKA47PCv3Rvwa4qGhTxkGGMNcY6uonbZSjCCN5U9c655y8ysC9R19QP9KRxAudzSkDR7XY7e",
  "key13": "4xcbG12W6W5oyXQVztiqLVBFctE3DCEmdDTSBWFK46MSfMBZE5UCGPXofKM3n2vQoYQizYaiwFK1yoY1uLYJ3PXp",
  "key14": "4vi8mfLjKVdKvYgqbPM36tRp4xiriFmUWWoF2eoumJBsFYbKtk1e4uP4JMtpsWSkMGT4yBAmjdLYuYXTU7tYQ8ck",
  "key15": "2yc2Z2U7gjJWqwmnKNHeLacp5p3bFiqUqUZRYTMLqKbt1shXmuQ596xvX7sVEPbxvPWes3gS7PRg7x1GXM5s8cdw",
  "key16": "5bf19dqJGH8EcrgPr4XxfusCcK93TxaXdFQAXJamhZuZ3Jh1iCY6zuu25bZzWnJHfn1XyLRe9QgusD5wDGque4wQ",
  "key17": "5ai43CjZVmjccopXGX6jdgYFceCFRxJ6Wtey84QPWJMEUQYq6z6Sb7t5stLeWvAqHjoZAEkgkwbuii49ijfUAyG",
  "key18": "nDfXmJZhqgamTH2yEHFoVeCZ3uHkXkhmYztidmibCtsf8VDtDEthC9bFyrVPGCwiCWCj9nujd3jcj6KmJGbDoyw",
  "key19": "jhT4pXR8fxCfmziDWzqA6rv3gsWTmHt4mSQ4AeJE3uQHVtySrhATDvAfpySnNYJEKQTmh5DHSBg3bc217b72neh",
  "key20": "3pcY9EingxKTCfHBH7thtve4oPTfDVUEb4WRJM5SXdwRSM6jWoh5cFPiBkwrDNCHKLnzZ4dCxEhmMhSce37Jikeb",
  "key21": "318Xms837svXszW8Z4JrJ5NJAnKg9BAUdtp2BSsZp8LCca1Yy8YLcifvEEdyUmqyRipbqYnYyttBZ1mQCt3yuqXG",
  "key22": "5gG1r5UvVMahLmJ3xMcTSny11DrHEopCT5Pyz17deHYSfJ3xwHkTjLnecogRJXzJnLdMgy9Zjt4FfWnfrSTSrcfr",
  "key23": "3C9bNeBrxS8q9Hiv3JEjoHkBepTtPvRkDVsvQMG3wUD3CG4zPnLo43XZYw6KfyrK33Z6aBsGV9tJXRn2U7LnrmFd",
  "key24": "bGGicDgidPQuw9iiwjM3jRVTHv7cK6fkCvNZ6CpGwLV3yxFm3HrtdYGGv4RN4rHBaJaMbMX46tGGHGMTEtNgMys",
  "key25": "46nAGmyDN1k5bz7ZiAV6V2ooTRzTekVa7yuNbqRZWzCdHuvyCfa4PMdSx8o6RrdRq9ksoFPAGjze9Fhm2rJzf1Ja",
  "key26": "5VFniq6wnru5ZB1Yj6GdhzQgWoz4sX5TscQWsSwLmWbrTVb9UjJdr2zj9XKaDRn7gHfQQpdU2W1Bp9MUStBCgGme",
  "key27": "49rHqFQe2GPq3U9YpHt5FRrsUYQaCsyfE41BxXxbyqqWppLNaUmZKigpS33o5DrKNbRPdWNS3Vp5w5cfFNGrToth",
  "key28": "2RaPYG8XBRRZuCt6htdGY5i1z4JqCHdT54MokQnXzDPc2fVaYce1cnvvBCfZaWKZxbds3cuXXzA3wbNdS1hEg7T5",
  "key29": "w1McXftcYCEvWaFy7xTPeFsGw1CrbYb59nPJ1PVBf5xX5YpX4yp3uuL5Tkh3ZU7f2APqq9JwkxsoA32MjVnENV6"
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
