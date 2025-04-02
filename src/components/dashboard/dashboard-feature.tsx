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
    "4ztQd7KnMHd7kxTozj6j2cLaS395vjcbWjRkkfXzyhcsxgJsUfMNeT6VkYa9qrEZqprXgUC8a619gj2WHWYJZp1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KPaCtojUq9FhMkkq87FnpPRFuUFhxP9EF7ekghxyf9ZCmzxpvaejifzr1VhBrrMVyiMY3T3mFn1YfiuZVPFQGB4",
  "key1": "5Z4eXqkaKcprw6y7DgPtdSBob7pWovsF5eHHr72NrHHRAD5QZYd5sTpP75SJ39JqHFX6Hk74WGTQ6VR4G7pDFJvK",
  "key2": "3CfRRkE6Ju2xhB5ePwJWkqsynv1UY1PHnMYUonKEhQXAW6isr8RyPoYpNR84JZKYPUSRuC91u3o4eWPmccZimoyZ",
  "key3": "54NxfDWUhK6nxsAjrrCgvV6cMoMSccPXinskEat1pY7a3EZvLVerfc2UTts5KXfackgn6pJdiVUYDd1H1TNZVcyt",
  "key4": "4YesrrVSk47fJtWxLQXCqiyoLGyq7nH2MEKYuZ8NFKfiq5C8rZfsyTZPxmK3K36p6Z4Zieh8ysBfuZTC4yTXyAj2",
  "key5": "D842ZTpfKFzJMNEY29Q1ogKMFqBjFr5tTnb94csxZZexinaXX3pUJMfHXay8Fe5WPzrr9Fgu9ubhBRhurzznBfi",
  "key6": "4qFLQ7c56rDcvKWyeFSLLT5E6yH8g1FpjLnS85hWQ8b9WvS2SabAffuzjAVBqnif8ZQXn1iNvLidWrYzGYeKYaxh",
  "key7": "4XtQcNcAxgsznBTFhk19PYTMcLzcn2k8XEqj3Mop8pARw9hkjJNeE7eC5x1vBEyrHkYczJUHoXNDDcK6pgkQiZvP",
  "key8": "4D3U7BqoiiHB9S9aZNvK7eHkatjCBnY2sQRwJWpfFEtZnP1NoHdmSESi8ZouWPsa89pjN3Qd4RtTU42DHQgH9ZCS",
  "key9": "EaRrCN4Jv8p5PPsz4qweCg5CQ6rpEs7Ak52eMwxa7hXhQ75rTdpmmzHzKnULtkbZm1USMwms4fvutgysch7tGDG",
  "key10": "4py12qp76ByqT6WDqt5HCUTRsDX52jhtNQteCKqopWG2rLD6ey5iRnPb1J7E45mQdBTyKcPc5HTWtRoyEZKPBCHH",
  "key11": "3LH2pEiUjkLGxuRPwgGHcqswfynppSCEbMLw2uZDokd4DWWjBs2f8gstWGcAqYJ3tNb6VvS9ykAKBw5JFhb1pJaB",
  "key12": "9NaADzbYdf8wcNmGqkHZ4aas9mKkbaCAhUWRLrZSAXZgVrBorX9UkutFoVHdBjL9VY8qFycFKMmjQkWtzsYbY2k",
  "key13": "4kU3RDiJYNTh8pEjyPxyiA9X4h1LswQXNgDRvmCnmFohjTy5tUTVHL9stdzeEMXC3Evqm51zvJFc8wgfKN2EySP5",
  "key14": "3x5RtCg2gf3bRmeCbheoWahP7bwxRBotkrZrCFBusqV1SqmR2rE2ntXFHuHVMR7ED66PQJ5hbBVSxrykf71DhE3n",
  "key15": "GWXWvPTL1v23GBWHLL3aDv5dCjrs3mmsYxQWJbwzEuQukEUp83jCEcjucdMwYjsLdb1DjEPvzy3CfcEwVsr3JAa",
  "key16": "211hd5mZbZh8GBaY8K8wdzKRgeMomiR9HZWjhkqzXYA45UPhAW1Bd6jKQjYXWapiXpynSdV6qfNFzz6UhfKzCfDa",
  "key17": "65gjPJ2UR4GqkvFu4Hu7HrEmZHVTLNMKK7x47nbLs9rcC8vPefxFs8ZNojRtExJMP4roi8VFaeTuab28AtT5DVn1",
  "key18": "2XGG1F2LmSE4uJ5y1eeSMzVp4vYuTVJuTodTjzLZLhZsa6KLfnTUHw5dtPbhnu1ooV1xmsRjg3ht6dyLNLWnXeBj",
  "key19": "2SsghbT8CLyjDhzh6wLVtZMxv6ezaY9ft6ewoeoXavLj33T2DamqFTsqNHvZBKBstMcZXxrv643mhc7sQWRVEynz",
  "key20": "3iP1Rb3APq45CGXPZFMwuxATJo9Yqa282ajSdtM6pcTHTPUbhT8BjrreQ5BJL1kq5Bv6Q94uA3fimU739wH8W7fU",
  "key21": "2PP2qPZtoJx2662HJKAHP7xHTFJzcD6vgcJ9vv53bQSj7ZK67LeoeVSdGYVqh5nWTGjqnzEt1wcHN7UdMV8PDpL4",
  "key22": "3sRv1bSrZWW8arEPXjRTus6TG2ADxdG1HFpWFgPqKDNNFy8yDZXUDYSUqHoY5ZXXXPRXFffj8kZqjRmXvhED72qq",
  "key23": "4MQv7UVb34FnaD5G53L3eagFLJZ2sGEN5wBJxosB5LGaaKHcp53GaFqTXQosEf4B7T54HrL4ZEWp2wrYTdc5dsAH",
  "key24": "3LJGohPWTppuENSRGb6UBDWMrAyqyX5UpUjBjk7mY99UmuxUtgHGMHyBfeV9n4m7xUnXYpNkKB7gZBrQDKTNEnao",
  "key25": "2DyxLwpDdiCbBoTvAYeDPbdHxMgYR6HkrbUi7obwPZjRWRo91R5qnUVhqqxLd3LtSkgP2HTEjU4soXdns11oemVA",
  "key26": "QyPAuoZkKmu8cm8quD8SGquqZi7nBD15LzXv8g16inu1CcocgZcqWMGLJFuKUtbg7SfupFmp2VUD7hbz3SbULwk",
  "key27": "31fC1extQzCov42XZ5mbyiDkf4HPGsKbATvseqjg13GF2yp4afH2Uw6rDMkGgAJN2126T51tEQVvYDCZvbeKmTNg",
  "key28": "2pSDVJ4BUvuNc6TsC4XcBcAh3zUw3cMrdQhSunhqewxQvnm9boqBK3ytGKAA6yK7WVBnXaeoqZSExDV8Pnx9UAxb",
  "key29": "4QHRrk8DMH8rBvHmZMEBjCEioMgViRGN6hSusijDopuTcsCYomuYREhzk4nHYDzdVg7Lo99vXHMCNJSHp2NsK4j2",
  "key30": "4UfCkJnGMMPVeL9zo6xbEKbwG8jNx61q6ovNCuwZJDpZGk5N3pYuLqcAz3RAGhc2qCzGDv5TEBJaPXA5tYqHroHF",
  "key31": "258nioujwgRxjdQX6c9n226FdTiqhjuSe4nZwbCiRwKbZfBYK1MTEbCtmN9JbzzdgVxGn1wweR33B27PEJahBH7G",
  "key32": "4XWc2G3kkG3NbeKEs9gTZ7ziDx3nBYSj2rzZvSTkTe9on6GDKHTDq97pLcExcBSqrspGyXi2L7mX7ub83R2M8RVn",
  "key33": "5S4rM3Qc9kmmmQCJMS9LS8GQS1nK8grEvY7HPb67x9A3wsPhFXR66xaS6DijHGViR7F8zGQxNTe83rPiVs43KPAE",
  "key34": "4XnfVcGVSY4bb6Dgrv3jdBNvkof2qB6V5CyRuc5ZjjT8Uq4Y5Vbu1JUDtgNvHJ2CfiUvaYf3CLj5YyG82wHFB9tL",
  "key35": "tpynkxca9GNAKTniPmvF3SZGJe49shDR8zSGaCbMFRWzX1da1YCX4WvGNEZwhzsosbsVebeF1WZPa44H6eBtSNP",
  "key36": "2MEngmaEKAXiqrrnbNs9XUTv461dq86VaDznotsNjKBdRfH7V23BcPDub9Vr3UYSRuptB1eA3B49j6cNkGHBN2dp",
  "key37": "354xdxhLrW27BENiNAr8dRz2WUaNKxfZZyKCdoJdKnaFaPtiZDwAGEVGyaDu68xXAHhbiekNzPKoiobmVmrrfq5e",
  "key38": "Ex9WqZevVAXPn4G99WRgpebbxop5cGQKpsKK9GL5wRDsi1ZLHH6vvh4jCJ6to7d2XAe9fqEGtcjzPm7iSm6MBTY",
  "key39": "5FYPQ6TS4ZPkH4o2BC8qHCTMxCbmihPLXq3gFevseeeXczCBLLYKxTutq6UcPX3GkNDJfBw1tDxfTnya1LdqPcju",
  "key40": "3dQUYqdKq2psJeubgv1uziSNCbTorAg3BFJSnpLdMs1L42Vg8fTycxuqTYqvLUo8uUBqj2KFuZ6k3hSCi1R9P55M",
  "key41": "4Bff5TgdjfGMBEAWHBMgABh1bfomTXwbRqGKmjzSmn5igz8eTedYSTCFPoQwwZBNs8C85pbNV9m1KPfqL5Yc6B2w",
  "key42": "4KREyWLpGVwCQQLS52zZv6pELyMUsZJY7nYyNSsSz5rF7qTK1Le5vpNXkW47CxsZca4DF6Vydph8cScRnnVPqGCt",
  "key43": "49TBKEzegm4qRyuzDa99sBBCJj2VmeDLzYEjwc6bF1PC2XnSTS1fFhNWKKQeyuvYQR4wXreeNRAUbRNpbe4xKen7",
  "key44": "FjyCDqBQoLf4RKNMsU5sc1ssKC67AjSnb71gnL8z84uAY68ryG11rDnpPzhnCJrbEWEUQ48HcJzvHTJBz6NJboj"
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
