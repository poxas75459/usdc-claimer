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
    "5SSgVgpGQ391TV2DJZvwuM6nZotdHXnkRb1xZTJASirdHFhFr2iirj2g6iuMWh7SJr4fz5he7Az2UyVUqBVgDPiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vg59PKHqwWvsoMRTsrs7UPtMRsiDtTUBB9fYxXoaXRpciX7ZQpoT1DRvzBbnrp7XSJnA9g4AoNbAinCQreLmpM4",
  "key1": "KzTaNHtNXFakbivNbC9RSSn4QM1L2GL7YrTQkgn42SX97LXpQxkc6C8q9aRjqEyYSj4tyCjb2g5nRnHqV2GZfMw",
  "key2": "2jLYVY87PPQmVfevHoX98zT6ng6Rptd2haZ27JdZeXzUdqFDEbwVJr4ia8tWf182VDAUANWqJGMjxvRqMPnMnZgs",
  "key3": "5nAaAf4Gb9vVqv6jwFoEtZctf51Uw6zLVfPfiGSJjcfktRuQF9aM1R2vT2osRs8siWxP526Hfo6qyumnyB8v63pd",
  "key4": "28ZEM1xpjta9LjgNk5Ux3zVi6waqozdWtxU5osQ9hrbHJYFGCVX8RsQQ1HVaXPCfPu5x9os76a2xoNcw7TrSBzE9",
  "key5": "3DT15MFVbmtv4WjN1PAfGJ1Lp6EuqGQt37ExeGL6rDpn9rbHZdGP2vnojNtBgt4mZXoKM2iWm8Hj6AdsSr9vzpe6",
  "key6": "FkvkyJpBF31XYzwWPU2gADRiSshQJZV296Pj4nEF7ku5N5CRP9WBpFPXGUyQej479JwgNAvspTDfNtRQRpLfxZ8",
  "key7": "51wk8xrZi2kXg81EPgZREowDcLVBjjtv29jvaNhLkWvJDcKR6hi2uybc84qYLQFUC9T6VtosUg5qcmLpNbBY7gMh",
  "key8": "3iSW263bu54S6zKnZV48fQgzAoYP95nwycu5HaEzrj8S2Uu9sW4w5hPutWniwKYjgFq2AV6kRn586NThUyqGWG6E",
  "key9": "4ykL1kt953DiNvheDc3F9BV9FrUHJEQL9KJ5RsJmU1NWZ6a55t4iapZKYTdcWmppmsaBM5Li57u8f4b3ufp8bVbj",
  "key10": "NLeue7XaiXWNERbUKurmhhGpLkfgNgy6rVcMNafVp2CnnvDKv1TfVXGqbeQMvvs2hzv2Z1MzydoP5MQQEm5THUJ",
  "key11": "WTwe8WsBKFiehKac3inm8AZkEFfMovGynvtqi3jPJLE7BTPNFG3UPHLyj7u67TcU8xGNqH3iqhVMiuRdzUoxEHU",
  "key12": "4tRVtKh52mxeKyYKfaAeqmv8jYa8NeiSTQxD8TzgFoTjqZaNn89HZ59nWxSkpUZkUViNBJKhjYsJHSrhd4bbEjSN",
  "key13": "swoVeBN5xrHeeVf9nKi2HKXF6bGeg7h5Tb8nwc97BxZr8xSeApm4z4rwFM7sB85TEeU3UMF9vCBmwXTLKaSZpQU",
  "key14": "kE75hEmtoAesXQQWAybBmyxXwyPk4UwXADKqpJxo94aZbcNy55EWZCu1wNyMkJYL1x1XS7nSYXVPwmz43zuwD7j",
  "key15": "4JcB2gFs9zAoGW45p3wK1LH468RN9fqr4LUe2rbfj5Th2cFnMEE8PCQacYpCkM3DEGErCH3yscqVEVyCZQ736acK",
  "key16": "zXVTwYGcjjPRKgqFTm2u6D2VEWCm4m7Q97RBMyY8PJJqEx1mtpz6XfLb9M4WgjciN2s7cbXUSRHFnvMSgiFXktC",
  "key17": "5AiMudekgGt9STNTyLZjgt5mBk7BSULynCgXarfhQoPPXR4igwx1KLFcNWiTBzD9nVzjuuZywh7rFdHokUCmpC9c",
  "key18": "5MQTEgHUsvzsLMtwN2pKW9Dzvo4jadgR555d2PFLUSUrpEWhzUpXSxkvbLPNhc5BH5xXbnPrd5zc2xf9bhEaH51o",
  "key19": "DRGByM1wDMKpm498rWXBd4389nEnd8Cbpyp5zkC5vWmeT1oyT9csVjKpywLbG5NaiGnuieQyQ36wC2BsPQfMLeD",
  "key20": "mb15DDxYiKuoUiEfxWgQiq3c6CiifHuTodTJmmwvuTDvj97LssisGCyxTvZQxsHrQPkFr11ZvJcihqJqPnuNatf",
  "key21": "FCdZmdzQRXvzZiw75vZwFJujGXiA9oUoJeMwf2JB2tbfacohS6JWdhr31vBbVL7hvh9mkmJuVeJvqXqMwhySHct",
  "key22": "5aC4AFv1uaXQWTAnHy2DQa6VDAUeiZNxFMPQKT7L4q816ixeC5XYq6zzTPwSVsto1KbLb2po5VKsVwMvfmhcQx63",
  "key23": "3SELAg6Ur5Y42CFAdFgapDFz7AR178Py4MU4BLbUARYMKsWW6H3NcxjLSbfJV51MWsSTcN2tQyQBEfyw2cHpCf1S",
  "key24": "yvXNcLfrTyg1ZQgYxf3VfFhbT2KGA9jUmTogxv8hkwKk15puQAN66TsjaiYfUnf1SCDop8BnkAzHqr9fDYG7WWr",
  "key25": "g9eZdikxBX3o8vMfWRN74AqRHmoPb6Qz7d2EsEzFkkZKbUeyvG3yydvUn1ZZEpfRTHq6uA6bnUGsoDaiUETmsNV",
  "key26": "28gHnrbbBkAxrZee8iJ1KtkUwr776AQFYRUDTxcGLE3JPRXUdRd7VbRbMXnY47cVgXZwnq5PxhC78mGo8uio1Ah1",
  "key27": "4whGr2khGoB52mPcbQTj3zEAWCB1pZxfkyVRcUou2zjj8bUth69pL8yZRoMxUig9LghAo3ZKTMCLKa6DxGnw3Zzh",
  "key28": "3VpJStJRyUixfAeT5Vx4aSs8Wr7Ns5mYHDMGH1WVVQ86q3JFw7nH6kXT4jDarRB5Y3PEUQoKvwRSMQycDgbfqUhC",
  "key29": "GtodubDbb8Ap5B4e5gWc54pZnS6kmHmesh19ktLUJQibdREMzngVHRduB67mvjJTdcw4uUyfxmP2BUaSdV7FRZY",
  "key30": "5msww6cFjDQpz1TuNyz9k5UQMmkWpGChD7dHECzYP5xhUn4APVsjqSpNQG2fd1uXBHAYMMFKra3UJUs71fjMJWLe",
  "key31": "4TDuk7eXu1Vm26CR6rzyGSqVSxaBSrRnxWcThd3oBrsKSSBm5fyWMHYc4WD96EArPRrYtfpaHhVCeWX4poYmi1bm",
  "key32": "3Sph4dPznbUcWMoptgtmsgVizipP48QiqfKCkhXQcfovreNdRtmBp6pbo7RTP2D6C4jqdTtBzf9cRjme2fDdDJ7f",
  "key33": "5TWYMXvnnkNMBNbHhuyKKk6wdyGCsJPhSuJ7eaumKEv9AcKAeFLr5XRnzwBYxmNYgihH7CDLSS1opjgsfAJwC6nc",
  "key34": "5kRR7SKDEiuyyVRKmuzvbmhA8sik4bPfE4oCJKogCYLUJJZ8sv1Pb5f832PSoSvfe57GWrMMxvf3kHhL2PFUrETD",
  "key35": "5MmYuDDmiUdmcrvzAUSzTDccTVJCukuWrFR7pmdhF45Kpko94ritzRcJs7EEzZpDezjFdjfcx8EV5KXWBiCadiVE",
  "key36": "MxK3ZXQbE7RBAzJ6xoKc94G2G75Dan7rcmhNq5ywbT5cHrQx5map5EVE5cMXKSmQooEXLPPpDJaDAPy35NcZZqr",
  "key37": "5d4aMj2jhfsnVtTAJkybJzx5f7KeoACKKz8jbZFz2dmS9jYaGuR4HBDpKNZw8UDMr6uxF6GBp6AFmTGrZcXaH5BM",
  "key38": "46m3dXCxj2LHdqtD3h8EJ6xUHKoeNEFJkws5bZrQWRYYA43u7a9tEY9YCKa3jH2Vw6U9MoLA6fwbK7VUNzTXZZ6j",
  "key39": "scuSumdkqPsqwoW7Dfirej27GfCAvss2HpGcumEUixSXFsUEyuVMvrG8rGhJm2rdS87x1ywjCBywvWUZeAb17n7",
  "key40": "23EwsLYk3PueiLAevrVhRFr8Gv9Z191rjyu1cQNrQCXJcuLwk7STtDChFmct4QNnvLXncVSejUmV6DpFC4awJfpt",
  "key41": "4a1d5CFTCoERBYknTkyhAHoCSywJSgY2frBo417RN18Vss8TvWAUUhXYgFB19TBts4RjKXmdUeGeShUANcvfqzTo",
  "key42": "2yYx1vMJZvYPFz51iw8mc6mqVN7LQXHHFMoUsq8qoi8SGHb63wdxWz5TcFck2BpXNyG7j8S4Y6jKobX4D41NQ237",
  "key43": "4F8iFH53wWPeTfv6JGco9C4ypj4RNTNQTK1DLPyqi8Mm9BqB3caM1VjxveaGiEfuJuLZxRrPeQWj5KcCdkNDqxMV",
  "key44": "3cFkzEMgL2WW6rfZrZmyAGFTQKu8TAtYV7Rh2sZjmAwKk8E5DJvvBzhQgHv2FePgE5WJHwscSwBHm3puaQfe6tju",
  "key45": "4gzxM3sfuXuuYzDUPJJR4gZ11cS77ciA4fQUNPpzojSXguxhPQX4GSt2qXbNTA6CX3dnHkotftryyxB2cJP4UerH",
  "key46": "4GgXrceJXZnXxXXiWn7w1df2QqhhXfocTWWQdVsZZXi8Hi3pWBpnVKMZTzjjoRi9jgzpeQYFLk74zA6VpNc6NYnk",
  "key47": "2oCeD8MsaNDyi6fZjPtP1cZTvhb5HttMSTgko6xdMxM95yfzZnFr6bqxnXBkybLkQSTstLPeypJE2KXwHt6E9Jd"
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
