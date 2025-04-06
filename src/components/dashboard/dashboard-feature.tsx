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
    "4hbQc1mMBw7qf7r7FxUkzmmwovVSQ59S8gdSPpuY8cTMQw6wimDaJ9oWgo1i6VLm7zHczLAQneUjA7a1T6qWAG2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hAQKXotAHnvj1cBnmHBuxXFTq9LJb9vefrdBHqSJrzm6F3JNxg6za3ntQh95pPgnU6cc8kqXjVboMNbr9HEvqp2",
  "key1": "2qaScfm9Yt3jNoooDhpTzmDrGBtxze31w8WKzHs1obrcQpGHzJppPTwe4HN8sYom2s18Hy7fn2Jahir3jRL4VXir",
  "key2": "3TiUVbE76YHJA3rcCnEUXgoDChsD8RsjdfcLfxpNFtz9BxsT7AzViKPuLSYdq5yxnqqTKtXQoTgsLYojLUGodzZ8",
  "key3": "3bQUDVRsP6eJy7uSUS5iTDwWaiecpg3AMW9Ly68gbHyBDU4g3jVtRvYVx7VobTUDaaiHAM32LABB8LZTNNLK6WhK",
  "key4": "5mQYxiEAAsWa6W94Xc2EL8LrbxV4zmc8u3MC7Q5RDzh9JvN8T5fib7YfChtArrEAV4U1BCLWySotbnvb2HdSpNCg",
  "key5": "36LnnFmLuDLjnpMapnrn6Rhr4L5iaD85S92KD64m6nwKzwV1djiSxHAhCWnfg6MXN3x5MKq6pBvDoBwb1pW92ZHy",
  "key6": "3JTTKwvYtLDm8Zrrr6srfyXFP3mBbvqerNE3LPqQCBPXzt9hmuh7TCSd9m3vbstdxNLUCZ3WtxwpfX3WT7u1BwCk",
  "key7": "4swyR3NPNKxLAo4qByrnXUh1M2w5DbCGTAHYfnYoUHVeQEskMMudUPcmmWJQUXiKC6QVHDwViehaHg9U9vrF5931",
  "key8": "4SC6dX8meDtVrLL2KtHAGD5ggXM3pbdx6pdB3iuktbnARc3NAWnLLeqzTmP6Sesp6pYSouFxHVmk9pYV6dpHG5Ut",
  "key9": "kT1ZNBXmQs658R1QdqvLzDoahvWN6qdockCzrF1bJPDZxBcESpTJTBNWHYEU2WjAA265BAy1cKMFaspvYe1jBJW",
  "key10": "3ugftWsaf8NLSsPcihTGYimoMa8DUXi8z796e7PgTHGrCgPqGjtomcHfuRb9De1SEHb1pbog2jeoPtZAAdmc5Awi",
  "key11": "5L9ihSY6dDu8xrTKzfdKMDu3WHiWhiA3HAawc7T5JazEWB9gnNGj9BxJEHYLeYwptVPVEGGDAAcfhRyQd5mBHmUV",
  "key12": "2DrSwBYJo5Rbu6CmXbVgfUzgbqsCzfzRWExDJkQVijQUip1fMXP7CenCyxtCzRs8xesUpgaPeG4AZqhktxtwmeYq",
  "key13": "2jGdkjvSwNPsDtMdpVSA4Bb2jSKhYTivNxxLwHWWpqpv65Q1M7QuEZV7rDyb3PUdPv8RrLkJMty38ChGfTDhFNhb",
  "key14": "3Q3Ebe2tyhgEBoML99BPprJUFSAavTi2HST31wsJir99ySCMMAqtqwjJ39nkjscRZFVXGziKCN5qHe63GwE5bzvT",
  "key15": "4pSDjcg9LRVWwHGYijjeKvus8wmgjsAU6Q9v52Z5SnGUvvQWbg4GtQEpXYcDJxZC3T2NDrHHyof18xeyS3emkazu",
  "key16": "QtroKBRo7oFU8nRMsuqJdykg7NhhUrAzHn8gDkqiNDwToWtNvgcSS4oS7cx7VKhS7vLjDU4ciC2v9A52SerJHZ9",
  "key17": "67PSEfP3ftf3K2UoPFBJYM5hFwWgVmLThmFt2ENzg7yzSYnvk8Kaq7dDiBcjdxEqAE4fBzH8w78Ac7ee8VDvkHJh",
  "key18": "2h9EynqZSDvJ24VAXxMDe63DvPf3TBMc25ua6LyPGJ68GZxvkmnQo5qQY4HfNDfv2SVVpBkc3HAFFLgb2eeFreHg",
  "key19": "4Tmmu38PhCX7VX1dz62YZUoDomEkMQzFNuEKxLRfCsy3axDcnu1rp2HzeKzukfmzksf8Ty19APVFuswWcyywXiHj",
  "key20": "2Tt5SyH6AhWiDvoivTEzxoLkSMj9dQZErL2VWmMJ2kGjqh3KvMFxSFgfk95sQFBQGNebwxmhKTwbGyJbkxeicGqz",
  "key21": "4WkzVnF4rpEWom3BK167sHBfHMmPJbQTKFqWnEg8bAoiXLq7fUgxnoWvhJ2f1m1NR4JJHgDAy3EaouyuTv9Un5bw",
  "key22": "QJbdrXCFYQQhGagLA7HGGyWNqQi2op2BwPTH5iX3xeWetoxPVxXYNv83x8vw5Lp78UUkY4hNW7mtDzAUKHoB4qv",
  "key23": "2mxW6x7WapetUyANopLcVKs4AN5izxZeJnpXxKJbH4bgR5Nro1Vd3GKP3DzAyjFWeguHPjzr1xwornmVx7YaDBw9",
  "key24": "5NbLqaa7tiXe1vBB6wL9N3KqRR9GZRLXKN8RLoAECWaCRSVUb3g1tXuXgQHS9pciZSdEs7bPxWr2ZYfNqbnf4RaJ",
  "key25": "3xu7nsCawAymVgo9MeajNzQ1SmhMp3qpGViwPtDaxvnam6rMXFFr7vGaSbAZyfq858HWW5REkqowEXcCpKR9sEj8",
  "key26": "3iPBdCn97bemGAYooTXqffEGgMVzerBvQj5zZ3a63aumQFp34CYnTyZnUvrXsAxk82bJRNxmr9gEvMqRroPdf8Bp",
  "key27": "5ZDUZLDr83MvBNnMq3HVxrhwGw4kEbJ32c23bC4cEHeypgbuGD7YQMykDz3HeUxpvGveujyrdtDXLvTAMiacuEfC",
  "key28": "3k3hMQsDuei19vunemsKDnU7K8gSRAw3HNG5TetgMHY9LmNgE1bhWStkKnNUoYHcJacQLoMfYMr53AveCCFfkzmg",
  "key29": "sLZGBQ9VLzMbEfC6J33utGNwoeujNN3DpGVim9GUKM2boZ4xkzgsxaC2tX8aiEgzv8jWtXsuLxGNNoopuR9ns3a",
  "key30": "2B2rG5e8m73Q6KuisKnrpzWTJ35wMqe7Uhxko2sH7BLoj82iTLQpGmr9BXGYMAF3ZYfvGHdyRP4GTapjC9vWS6W4",
  "key31": "2Nn7koHnqr1uPWAXwyLczxgy3dBDQAfBtVC4J5nYSs4X53uXbRBMMCvWPr5fY24idJ5zpR9zhTXrvd8gEoKYVdZy",
  "key32": "5Zvn3tu2smMNp2RgYkv3NJrd7sKSB4gTGiFirRBFZjp1ZXBEZfkxUKZVP12j7eS6jWJSGgx6GUNZjdz1C8F9gpPu",
  "key33": "5SVXMo13JQJvT1Er8Gkk66nvPcYrXsDaMDCz7o9LSzuAK2enMVFC5P1PeWQettfCKRcuK3eqxTFkJgfp8Mk5hZTC",
  "key34": "5mTShwyunzWXVuo3XKjhvGT9LTcKqL2t3iqkAFLiBDXunUrMiYw562zgUgfRpxxBeo2pUQJgLEuJbndNFd4XbEPi",
  "key35": "2mYHxpHDEaLgYVLfEpMUy3hHdoDXB9H5Wd9JsJ2m6PhhhJJzeFnbge9gUmxEqSutaYKb2aRUJs66Mvv8cGvnMzrN",
  "key36": "2bneCHfzDAys7Xp5c2L58pWqkkJNgsGxn98QHCtPVdhhcCzrKTVM4Co8tmN83pT7sGAzUCoB3MQCGmtLXTakBHXr",
  "key37": "wdSzGeU7qVf7wTjVzUPuADMt1oyNKL4PtSXLh9AkKyeCMqv5v1WHCyQb5jq6XZX213W65zQ5SATW7qajzZdjjMJ",
  "key38": "XwwBswGWgr1FpMuGoUpvgRfkpc6xfXwQwvgPHZVj9zJbX4YxweLtWxr5jMLHRkaJ3mR2KxjMVxRACY3ju1vF6qM",
  "key39": "2ztrWihPbFeutTdhc6digMQe1NVuzHiYtwhm2A729X6E11dvG6Hf9v8igZmhUQ2TqimdqUpDS91EEQJEM73vvFyH",
  "key40": "5FtgugF8yQt6zQeLrNvWf1K4FqAZ4MGsscW26VsSSr9MhWyAYexp1giCUvmg8X7whVvkapcKnvRqxBmLANooQLtA",
  "key41": "fVduNf9YNrn4CB7ahGqzGgVnePMwRVajas6JFdUTopo1Pa2AxittqLPhXyVWnnnwsB6pD6ikJJZeVzGUiTJngHo",
  "key42": "me4LAsd8p359acrUGgm6zYKjyTKYMDsPU2zz8kQas1ZfN2bgHYigDbkoWxd3dZmfsY78ATZXohEFMKnHyTx3eNb",
  "key43": "48mtmcFkhwgwcMJtEJjnJ7pdFw6KL6vAxeVq8392ykpfwA41XWGUuxyQMBhQrFLWR9mkX3SDHSG2HGQE3dp7hbTy"
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
