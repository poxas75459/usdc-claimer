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
    "4ufrXNFA7qnDzE9cfRTcGLkdkfHLdkzvk84wtA6VZqXseHwPZWBCtgAX6WpncEeeibLcXM8mEbUQikxcbMnTEDDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EPceCqrpEbLsAY2v9YrNyPK7r71WHRww86pWcZeVpEfcMe5eSYw7Ch2CUES2STN7JvEdRAPH7M3CpJBXbWXZEVs",
  "key1": "2Ke4iMdP2HXJhX9Nz6MB7EquEQcEhwvbZeuF75iCvwTvybHvcBU2g2NoD2z7gJw6JPpx7mChJ2qGEMTVB2L4Xr5F",
  "key2": "5tHFardqVb2pxdBGpMdzDuVZKMiz8BEtFFFABoCaRJkzPTiE5qcs5u8nnA7sv36QwXm6Jj5of9SZ8zEXEALwE4dS",
  "key3": "QgKuTPxv24qhxPJKNNvCLYAFwPR5tpJvtrAziWUQHj8ABffkD1mWQ5biRueA8p8fVU41pv4ZmG3J1pqJLBBjFBe",
  "key4": "37zjuUoULmJjzwRWcjo4rc4JJzSFhbMdyLeyMJ61VyeFAbSe2rieSq2zD996uv5dW4hsb3CqtcjzYEDZVFkBuH2Z",
  "key5": "4am1pi67XPRb1iFKiqjZ2o44J6xWi8HHUtbqfRSm3kXpyZtS47jNeuSC7F8yJAjCUVMii68Dtc8rNxgfDD8knbBG",
  "key6": "3x6NWAYCXi8sukPDi2C8zZmucwo1nWuaX7U9Uv9n4QozRdUcUxARusFgX8irMMPVy1nDFqEhzQoUXBsEsPoZc11V",
  "key7": "5jTD1SazTdLJfxY8zvppr2jMbFLbXe3bgJx2uN6Yyf6tnZzpChJj2odrjJ7f6VaFQZ33YEZnMWSCEV2Cvt15s8FV",
  "key8": "2hoJdadiKw8QgFKqsniG6DGaERThdh18rRqQ2K3j7rEA7wUqQCDr7zaNd4qCeyJqum8ugcZYNnQJ4HL2cnpFpFj1",
  "key9": "2srPjFT2VV8s6B1ognGkHcox2YDpGq5gsyF1dz6iXZfDKEcSJcNTo3m3xkjuVHxU6wBaBUmtgAMGSN9Nj8xPjSb8",
  "key10": "5dizxtp8H7G1nujxZBFW6eBURG2oCC8odHMWM9kM7AmHQSvPAGWbbddG4ciFrcbtbYknjaHvue8o1c2roBJ1xggp",
  "key11": "RKmvne1P5YP2vc8VWMgE5b1UyNWXGcjbxYeUMHreZjJgC3nBbVExaj447tVi48Ru7AfHRVesX9ejH9zuV3cNAAN",
  "key12": "3qwwQy557f1XxmWU9PkhDXmnjUYrbDEDGUvoKXpbZu33f5pV8UYU55oCHZUDPhQw1PbxSNztsuqPasN9oemxnvnf",
  "key13": "2u7wgxqUm5TAE2HiH7GK8bmY6mFUsxXJn7EsxseGDzr4Ys978Z6JcMFaSM8TZF8bSWD1oXLt5B35PxV5XHk1cAwV",
  "key14": "3qJoMUnkzWLVhrYzBbEc1qgUZzSqNkoNyXiakC44V6MYTzPXrY6mE7q5u29Lv9K2JajH6SyB7qTM7xdmsAH8dWpb",
  "key15": "2gJMLtsXH4Jrsz9N1pF3t6BeGpYkg1to4v3gb6rskGfhcnXim4DCcocRqespXtZ6PDWhpCtSGZ8HN7Gtfgg8C138",
  "key16": "jhqJj57Tansh3vg54ETejUGyjYyj1q5GpGacJM3hTqXhTDi1q65F1WH5Aw8TBFranwsCd8BFEPapSWETPNQsjGk",
  "key17": "583og7AF4yYC3NzokNnNJuKV926vqnfsUePg5f2v7cpg7uhdzxZyvTVWWqEBDGLEQ5zZYRAStHTzYJtWyJF1qGUd",
  "key18": "UQcYFkwqruJYBEXfUUudXJ3HFmvBpAGSRNzocEKS3HbG3kytNUC5ePLqUzwoXcibEe1F3diFt5FbkWnxGucQgYq",
  "key19": "3JPTJTXy5vPxVCyd2wASyMLuSRpQi2eU72G44pEprpFhe79X7LTCvYyhNfh2EmgE6X25MFSaxmz2JKrjYwhCatCw",
  "key20": "5jjtv7wDFp8Tzn3LRUFgLGKfeEa5Cncu7wVopxtE9cLWrkYC52PJ6HFtPu5WUp8Wu3xztM9jy1AmAqJfncM8mAye",
  "key21": "2zFLoXobxHYpasrNy2h6GSonv32j4GrkJLxSiGTk4cd7dWguatiBEmXn4LdKzooac2FGv1NVJ1EarAHhtxZi5Xi1",
  "key22": "4uofFReqyd2Ymx1Uz98U8MfH7co1f2UrhhWLhhD52i987sKtgGKTozLq9hfgxHrBW2SFgUj3qhT3xFqp1sMfcjhx",
  "key23": "4PsAgn6JB8KrxEfLEf2udoPXH1cKLapnUfvq1yEv2MqCHCJctvCYs8nhQwr9aTLKPxwkboUwPwtVC1qHnME88nA5",
  "key24": "nNVmr8g6BSqDuuMDXt9gnWQtXDT7CsBa9B92nNi2jJi9hfUGHwnSoDY7n8ZsZtrWock2ekET7Pk3rMFW1GwDP5m",
  "key25": "5M33qPQ53i2fudzeXLhFm3jPkh5Q85V42hN2GMZGt6RQJrWS6r4agibt5rEzUob3hZH56jrGavfpvWbauKHWQQ6r",
  "key26": "2t7rjTagMAbF31FYaqVKa2d5xBkWSovaaQXXH56dyqzCGUkhf7eyfiUYxgYDKCe4G2ipq9YcSgrdG9Wc4mPzw59m",
  "key27": "2kKDFKwAT54QZz9XUoKQ9Kt2GRu2rn2eW7HDYJPCMnvKcLykeFsWYmhD6WPj37cSruumPL7atQZoUqAHEukiT56f",
  "key28": "5qivx6JADB7yopxnfph7VM886z56W68BpvvrAkhXdchLyc5y2VdeM46XRdGJBvTRTpY8jnuNNohK78h9Q2U6uSbu",
  "key29": "37PoqyfrtTh7yDePcCEHFYDWFUAfAZhyMJbsxvQiVdNNaReUT2AGUKriSrxDRgEJfZaXcLJznAqsfUyvdtWCmCtp",
  "key30": "5T76EaYLa27e6gAgimXPGsSNGSTAqTMcgGyjQSNVohUBeMjnNcjWkdcMFb8ivys6XJRt8FF8YjBceSHMBxPfn2qL",
  "key31": "4gCy5w6ftr1m5TT6T4o5F4gNxW9wgyeY6aXDuL2X45dTmkYnDX4zns5rmJh9S1BiDfSu3f5v9JjtxwK1dXWw8RmT",
  "key32": "5VCA1CnW1rhztKwz8Uj8JaXfWugVtNTpL4NhBaZi4ULQJZ7VfrLHG7Yvho425sZ8zw3CXcX6oeFZ3mgDivfPvWgm",
  "key33": "2SWWy6wrc4U6TJXfQ45Nqwp6epwWkabDqXcNZx2WQWnapu8RsoHocneAZTngnBCiFTuGjPjzpn6bZcMxXk9wFMqB",
  "key34": "JqB3w84Hocjon1XmiG1fmTcdU3hmSwxTLF9TSxWr5nbv1DCXcPHyhULpr5Mh5KpnchCuRSCWYhxXhy8i18YbmzU",
  "key35": "5ZDEsXx6p3Dqrs7aC5q2mSeMEcLf1aNYSnvd8xrCphLWdsnBBVxLZsNKqxk3iQkY5jLc2CX7k5PHt2JLnWtLbPQd",
  "key36": "2S5NrcLHp3zJ6ZTyzrjN8yZby6U5xA7G9XedH2jvF1PhAXrVYuQz3UWZQRG8pSDuiThwa5Vz3TbZ56zALWrSPerW",
  "key37": "29PoUrozZa5qF5WcegoKBTWMP9SsmhXgWHgJcvJyJ8pMn3DFK7KFDwDG9sEmNxiuAbJxVbY4Z3VfUrXvrnYkpejr",
  "key38": "5BNUjaZeZLQ63hnJ4bkjkS4i2NLBJQnaniaRG1Z2ykSWnumRGbB9fmzQC2kfxfr9JVWWgCbMS3MzHfGE1VQ6E6um",
  "key39": "5Xkfqi8rCvKqS8fVj9iK7Xg89cLJrvnVxmhNJ1NG5Se2RdUA1shL1umyBXHMgufNRh83n2m7njKgURH8saat4fiP",
  "key40": "2Tvf5JjoecPTRDksquuzG7DhuFwyKbZbbRaUuXTP9YuTQKwykoz5iW1XuyDM55UstAoTnfsXYRcNdGBBVCfXTYzX",
  "key41": "QYmWbNAnQiXZADXpLCSyHm1pQnQf2LbiBbQWnwz1tNRCcR9zV6nRj2k8mcosWefNmvpXT1WpdEaFy2yFWdEU4Y1",
  "key42": "HGHsQ4R9gN3CkwSGSAR593QcjscDrZWQroSNQvo87xGapB83hmNiHWa2wCwVVAQESE8CcmuSBahnePGo4cCWeD7",
  "key43": "5yTSzw7ScLnxd9qp2qNmh3tr8m3cjNpuSvUD99dYVKeMgCsH26nHxEmqbRQRthXWVKAJczJVM3bmveeJnveJp1X4",
  "key44": "4VyFoHLERBCjuiDq1BLsKLtutiDoe3QxgDXpJNguuSHZr6zk2hMnqTNCU33cdZrMAyoBpiAZPF8o2QcxV4L3Upz5",
  "key45": "3YLwJkKNLG2DWPpaqcS3sxrxaDg5B8U9YtWHUBZvRhsA63riCkodPAQKpKL1e1kEi4hMJH9gGc9LQYW8mpokg9Z",
  "key46": "5v7WUA4kYBEnD3a85N1tCaHWazzKNmBvZKYpyqEwGneYWNFK6zP7ixWU2xrpkhXadW8qEfkW6FR6zvuvrRXVt8Qr",
  "key47": "2vAxN9eYhjrU62NBdiUxRy1DkjBQZQ847WB4YPVWHXRj1XnSoWA9MmYdzCFzVwCmGLnyhoGL8r6WK9ndoQTU83wp"
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
