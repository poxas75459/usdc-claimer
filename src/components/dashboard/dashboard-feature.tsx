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
    "2kteLw82eXWioTt41wxZJfXaN1zCN3nKzB1MrapggDD2jyG4PDxHGUFpCp69QzfP5y8aygApkjNQBY7ByQzzm2ex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3otGNtHPcFC5spkPutnNyy3485McGepWRC8YENjWefCiv1MsscHAGPheDLs48Wfp7jmFpUyw7Jawx4Mt9Eu1Nk7j",
  "key1": "2dYqL5tx6a8FsUNckPDFx5S6aRdhABJskYaM6qFrBYWaQ8qSkibtyCPyVDKWxSVL4i71qgqBGZQDDpN2SGczreCP",
  "key2": "3sTP2G5sJdWxX7d8ayGXEQQiR3pJC2sRm1xCygskdVob79kYVTkUBGYWwWjzut6R5K5JRn3hMQ3RRKpA55AEdfU",
  "key3": "Yr84dGR7QgckfkDewGuJHE3tSy3Fh5EGqoEiKgfWyqZjL4UB1Bx7j7LSskKoDQYKwEfsDZt3ejb9LUBLkSKYnRZ",
  "key4": "381qytmmnF1dipmqzuzshsGjpCUwFPWrCGoa14nJ9Dw9nAqpfVzqQmH8qTc2KGyatt2tWfEiZWWRmfihbDRWxZij",
  "key5": "55A9A4Hf7NZQMnRAyAQZ5nQgfUjqCjXcrxmsxfchfRqvMTACjZtDjRuLPGiejLqkkxybMHZH4a17EkWCof6mcjs2",
  "key6": "53ZtBUVX3XbfmGig5nshPABsz47vAJ9EMufs3isiKBtJM8ya74sEa1KrfjP1YojgdL71egRbc3yHB7VE4ckQHSNn",
  "key7": "XkRdXo6EDTogncsvTd81n6e8eRFaHeLmSKg2WUfc8pvYhiG9ubvWV815TucCJUmVa9hmh12ZKXdkEbzJ2LkiGpY",
  "key8": "28K4cT28Qa7xuvGJF1fLNJhDV6rnVha5mPYXcanMKQtsRAqrEUrTNhoyWXyGPaHHvkzUBno1oWZYaV5nZhGUvLtS",
  "key9": "2d2h7HGMb3h1nUxUvMp3Bu7Vn3rx1vv8awrfnuLugJY9MjfRjnG9zzMdGkU7XSgKRgqF1UnARxptgt18jByh67U4",
  "key10": "5Mtm6Uc8RwXsZX4WAVSZ6HqzZVTBtGiDkUU58X2RA4Spi7GUupjEJ9TCwDXViZt4MryKu2mLj7kv2BKtRXj5aHkq",
  "key11": "jLKjRCrTXpZwjYe3YFDEpndwhmEp6Jjm8Gvr7gqXA7KuZQg3pytsvNrtHwtBZWgi1mVMoS2e5NQU2uJ9uDpc7tM",
  "key12": "62eyLERWHHZtKEbABwntmv5EjU9w27PnJqLhnRqvwETGU7uLbnZdtp9d1CTYiP4MUVb4aaiCX19HDZ14PX4DDp1V",
  "key13": "3BtT84EiHEkCqJxDPFxKMXi4JcvF1G2ajgHVWKqVJ2Y98ziiujiRV7pr58vYSAV6onD59s9oD8PHFYKj4QHd8kiB",
  "key14": "52NNJjt3vwm5MDpeSn3N4YcCkSbMHpQxSNMwjgDgayKuCR91Sj7NMHJgSFx1PVPj7mYLvdwvds9JwYnvSMjF72RL",
  "key15": "3RkXckLsw793TYumV7JbcRBkF1oXso7FvYhmqBySBxCNQkrPP7EMqf7NsAbLJv8ziCra4mHsxLuSzF5YruzwYsKi",
  "key16": "5EUgFJnrGJdN4XDP6w4RWhUonbvB1Mx4Cazo3dkaxdf14zwrkLCbM5wVRpmN2RUHMb4zEcHZuDSavd4vqTy2FsHU",
  "key17": "5dxLupBT35sLZLi9z1TgFwie8kWHo5hxYdcDXSD5o115cAPbxUgZdvKEbENDeXQxE6uxcLiQCjmqKLjcv9h3g9u3",
  "key18": "4xspEjwkjwrs9fK3JMMaPgNQf977biURh8epanGGcwgp8JGjoNYYT5tibPmDihCJ5zPwJ5YRh9mq1mJZSsbUB9TB",
  "key19": "2txG8NHxsSDLnXDZa6c2VBRgBFizShiXRT2DZA4ebyvF77M8UWbNgrz45XmxXTUQZrxFx2fthRHwqbbDhfH9dv2e",
  "key20": "3foBNeFzoHah75ioQZYspGqfyaAbAC7KBJ7XKtVgRz26SUZXoFzW2VRJAs77NiXhqpPEhuLpmZJk6Sqi6vpk4x42",
  "key21": "47owSkdB9Mag1h15np8Z7HWsUW3QxR4Ys7go49cdH7uioyhmpibAUb6HMcy1fv2RfQ3RPy9iuxnzmyTa434agDrx",
  "key22": "2XggmTi3CxSh5GD8Df7BuspXLfrup628EumTngyAXM5jcBmyYN2uVffo8qPttWh7LcmS4nbAarG4Kc8xxpiMWuNz",
  "key23": "3wjTbAMVr2SAekNB5QG4zNMPXiuYU4RptPQgRVrnCtVe5VVhsQ15qxJFZFaXrHLWVsBeaGD5dcjftiLw7YCFVg7E",
  "key24": "2AaKMFZgFPVfVcuen5yqvyAnTVbwhB4hCxZ43393oxH8Wy35p3dvpz5kdH7y7DX17ausJ5TBsc8qTNaD3iS62fuH",
  "key25": "4MeosSRWxEMFr7957eoAXN2ZHXeJLGfBmUN8vE6Lh7yUFx749oDF9prX1mBaXwAHhErMw5MnFmd6zMErxwfmJBNR",
  "key26": "36QPPaEEuheCVCUwoQKzZe2csBiUyi2hsSfLfFwx7E1hgs7uvv9G8Y2MBWjSMFLDan2NGhxh6Fjc83QtXsbAqsPp",
  "key27": "4DF8ZTRhtvXd8QmM6yYHuxEd6hC6R1EYPCDbwozz2NdEGR52ExvL33up8TMCztZfajXcDJ1MG26chxTDy76QbZi7",
  "key28": "5vEAYDyWQ2CTkm6fXJvx4U7iD2aZuFFsiPVZPqesomQGuH1c6bzGGYHop4RYUCvmvPHCozaDeyk1TP6S13mZsLFQ",
  "key29": "33Top5typB8ZoQyuYhN5Vx3QjfVBi9dohZBeNmKiMVN5m36FshUQUBdGbsAfZVUPZhPwrWtwHFbczZRSVb5HdV2H"
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
