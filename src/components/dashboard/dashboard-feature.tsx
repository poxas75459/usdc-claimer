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
    "4CzRxzXh5mGwr2hZoJQeHCrBVpdV9ZVxBod3UmfyZec835uZ6ExV4azXjhEXZ1BcKgRYcVSVuitNxLSkN5mKkLdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ovTCCaS9Te2QnkTQ6Hz2uTmKgcEWDawREvVtwPBES3VopJb7TdkULMvJtKLB4gNTjBeptrYSSaATBur59fW9Pjc",
  "key1": "4eryrXjkvsWGc5JNFF6Yxeq7Sr3hY8kqvFCX8CchBfddUqizBaUheQdaTsCqC6uV591db2XBdyjZwcu8FxN7Ljcn",
  "key2": "65Lkkw6itYz1E8fK9UZ6Dg4qdaXZ6n72PrXyJFPgFeaYzNmwoj9nhFHLuUgLiVHX3GU2SXCptibF351nwrc2h59G",
  "key3": "3tXMxebhdhqxyScmE4FWvAFFF9LgJ2qYCNBJRJaBFZ4NcgQdj2PooGi9kziajZWNehQatw6vjjJ8HxiNw2Kx9Zof",
  "key4": "5bm8iyZTfAfnBT6dmCNZBKnQMjXWn8cLkVoMFMHtAbk8vmb7pUiPB1FEjSDGApP66UZqmXmeqY6QnXw2ESLYpt7E",
  "key5": "2b7VwniiGJq5qJ6DL8ubBSxVawN4wb6b5FVHzF1sJ69o3f7kQRikVKeRiyxk7Zbs3y4LJTsEsy9gxp86VNxUVYSN",
  "key6": "LcLEELpMxM868vdTyMGuxYAtLjcB4Nn3pvaBb69eFoaBGSXtrHp6Sds2TnsnMry3PuFeoNQjZP1Mvaupw3pfPJ9",
  "key7": "436ALxAd8C7NZXzZi91u3LtGbHW9XRsx215wHWRWaKGLmdHBS8vex6kvBw4duVgN4xnwptJ4FESTk4kN9pzdFqsF",
  "key8": "2gBbmy2mDuqpciExWDnGam36PVd7HqqtSb9JUqMMGixUwTrCL1bM6ijiQUd8G3y5AD45uzWEA9dXwBXp72theBUY",
  "key9": "2qjgYzZxeuDXbUhCfMpG5xULv15EM7UWqq8EVBuScVNLEoqcEbtTrwUKCkZwwMf92h1YqcfZcWvVsZXjJGoRzymA",
  "key10": "58VaeZZ3nGhb6jDDm13oMboPtqcA9kAjacWzoSwGH3NpvahXRYc5mi6dch3H6biYrBNBnRbWHhXKZfBSmbWXcHLs",
  "key11": "4tq89d6yzApfKLBEWeYfsDC2oYFcG4oNaLfcFY5p4eFknFzryeYNwcGG2iowS5Tez7x6oEhPwTQSEnuhVSCfMMvT",
  "key12": "5U6eCcuwa6KRjFGQusVMoN6J89LC1fgoetGFttXCv9M1oTnRDJwmXwVBFqPd7sH1DeQcbGNcChLu3bn9ezpjk7Xk",
  "key13": "gfytfopujsGuAHCoKw365XQgTyiK4aH2FBFEL8oVDRKPx8PBh3BFie5utYQow8ZU2S939T3swm8w6T3TBig5FCh",
  "key14": "5vBtte2f1icbYqV1BZW83DX6D1RjQmgd92NKwJ2yyxF45x9qXEoFTu8yCGuUDPTLQKDoYf3Ci5LFyw5LLxrscXBv",
  "key15": "4vCXMRzrMGq67xz4Mnz4t63QD9RCqJTnsuzyMz7Xgx3hUoKrBwBUgcuVmNVkL4qhNthxA6igBuKYxxanctm9DimT",
  "key16": "4mZAjmSLaeWDuLUa7x8uTdjat2mwDqBbvimaHfWVe7VnP2ykei37qUnBvhZjBxMH1QpDYcX9i2FeLw1Bc49pmGoy",
  "key17": "2TQ7XcSmHwRj1qbNEcCXTfb5jE4cxoyYA1PZxgzRL6occuZXxVGwp4cFttK3gfAQGzRA3dXwSzxmvuBQomy94qcT",
  "key18": "oUZU3hyrvYzuJkDdGi7JYZUQnEc7p7gypT5Lcac2UnDJspSexsy2635oWu2wqYLggsH72sTywY56Hu7VjQNJkmJ",
  "key19": "f121KZtpvYksyPguPctdhrtHqRy3WnAMkCvdeDiAvuYAgm4RwwMtMgAu6LPSpsBv2X8sEj3zgMmf6qcdCeSh5tB",
  "key20": "3sauZzPQHwWheQwarVLUkFXFUATZ2RMTTAoCN3mKFfHkN9pcXvRTFhwMvnmjVtFceeu1gXZXkXtBLTg7WJ61n1B6",
  "key21": "5TdRWf6bC7aXjHD4DUZL4NK1uitSdhtbPyfrouCRwxPBbHxwxF1gh4a4FhEqSLaLRN3CSo6fWSHrCU2LBuMnp2fQ",
  "key22": "2RJMCS97uNCywxwVaYwkXn6zNYrEv44Ztd1PFkDpZP2naU7RgagdfXcrog91ZRoPHBuuCuqeNGJvVQAGfntwdCAu",
  "key23": "3LGQXWF1EQRPWfMwYGXA4WgnV7DML6pGzkSTsS45jgiqbxd4g5yJ9nKe1wvqnUuCr5MFAHngACfm9GghYemY6gm8",
  "key24": "35CzZFhKJc4ZskchYQsdZpkoRg1mxUXuXc1vN2kr8s8UYS81mtF5TQzTkzxDBnKVX1jcya2N6fYDvi2ex3S9rNWT",
  "key25": "2KSwzv2rJuQJRKxXs1XAxzuLkKXzBp9AiTjCB3roRtC8rzEefU5x9SHzxvVedg7ADDTu1hGRvoEppELkz6TzkbL3",
  "key26": "LngDQUtncYCYYARuQd3gf2PC7yb2X5BBP1CMtVyM1tWxZPDQWZGfSXKQFUhAVHkERq7KQkDQkWxEkFiKB8gJ7tt",
  "key27": "4Mkutfki6CxnEeXQShBH3HEKhX5jfaR2FbYcHuAWuMXhRQKhRE4XmgMvMJvHDhxrp4gKtUJ9WosLq7qsde5smhSA",
  "key28": "ANXEYg6RkQsbyvmpXAkNbYMRVZxB13ruwAAkKXkM6vUDG4GM452PMv4YUjGTa1eT5Xct1vCB9jsg7rnJeVNuZsq",
  "key29": "4v8EFCdnQ79NzXFP95y1cAsgY1S6QeTrduN5r6mvRmXNkv6Wwr4LT85id8NCNgYinTHYzPPe55KoHiEcWd2QFNSi",
  "key30": "329fDwdRYtcogvFoGgFPFKXisgibSnS6tM4HMPB6MqBUMc6RT6sLXNYLR1zLE4tc5bCgTSzDNuqFPHQZYtpFwfBU",
  "key31": "5XYM9Jo6LwrmJzAqECrDJoYw8gi4LFADTscoQXiqecUZiTUyfr3r4My7i24yej3f6Ljzic21JHtJpgdbNvmwVZ82",
  "key32": "3PjkVgQWgZ1ncQuYk5m54ZdqH54bSvx7QGVJ2DcRcaJHcTXSVTt1F7VFiBnd9hwb29A7RfpAjutKH45y83F2YunY",
  "key33": "2SUfdPLZCkyA4KhfMFXGGJVre138BkrBvNmTrm9Sxczt7yBnwCheB4h63TZA7axXSr5oN5QE3oWgRuM2eDz9MJmq",
  "key34": "3BvCK2TQuHqRvWH3KhWLkhCiDvLP3qppJswYHpvQC8c6C8zyxZenNSkQH9ajhAED1FbqFdcSN3UnaVRpYnoNxXxn",
  "key35": "2PpJ5MzQVMGiHbCNMg8zbpPej8hDzjmkj34wxvoeEpj8tLb9ijiP4Mj6nJ4uaXoweakxzVUdrumL48wxeGZ6WfrQ",
  "key36": "3Ts6Ps48AWCoSZgXG3owpAykFdgWGhctUAB2xmXHM8GBWxTpGdwrJWE4HxutHy7zdrAMm5eBXjE62T72ukHm3Tv6",
  "key37": "5YUAVHEvMMsPW6aqzGh2oStsNVZq6t8FEjHibb2boWM2HgGZUT8fwCmmhCKTMoP8TXKisJXNPrSuSDqwnti5Y1N9",
  "key38": "S8imc8ca8cDaEeiJj4NgpAsLXvSZQtoNY74rP624NJbdvNwZzuqfb75WR4fBo36AwHYEGfXVqEoCLnhb1exoC4t",
  "key39": "3ZnRxaNFoJiHkYnjK3MXUQ1cCCuzUH8qwoodjhSbHr48dNcL5jttYusMCvhPmrs4WvZKYm7oT5L5DVtYi23QVMRK",
  "key40": "5pp2GafH3KnEVTWhqY6cfF6eV8MnmCnsnQPvfpnZUgJ9Kqoiw99qmLEcyj1Nem22PiJqRxxkaWjFEf8UMhQiFCsj",
  "key41": "5gvHtBgywfUhyK4NrRg5KPUoM5X31LpSnMLgF6sYoq4ZLjU9LUjVB7pqS3e2PYvkZow4GmG1Mv4iTFFcShpUmtmC",
  "key42": "4wtiNA7R1N8vJ6Dt6c1ikE5hrCPso91gSsVCuiHzhTH1dAVyEAcHcw5nSGUEyfXgaw9A8vDjrYeKXk4QeGVK8opW",
  "key43": "4ZGdKWJSP88GkDinn8GB8GsjFWs2eAoYALm2KfwU2TrLnggXzKaqrTuDDv3SeTBkFaMUCQK2NbMyzdAUPpGM3Pa8",
  "key44": "2HjbEEzxzo93a7q4bMJqBRLSkVLBQXkQnhL7xnSkUvCaq2btkSyrrMofy4j4Kj9mi9qqjbmjALPykJUQ2yiwRMMr",
  "key45": "2DCjY7QhGdACudJwTNawvZaydkUY6EQoJd2piQALPd8rBENqnmsgGgee3Wwh1tdz1jW8DpAKGedHsBDsGTWh5yZg",
  "key46": "63PuJMgbBw9Ya8z8UABMFaXhD32kwSyeWT8fCUvo8XhyGvDr1r7ySgvVdSgrU2vDZgzRB7ipJfp93TvihJ5jyty6"
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
