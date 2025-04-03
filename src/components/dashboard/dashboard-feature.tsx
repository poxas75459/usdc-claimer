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
    "5TzF2hJEgyjBgWaquH6B7WL1q9BUJyERTcVK8jmKsZ2WEchR3APghQrwfK1vSfiwJKg4CX298gyHdidqTmghePBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FhsAwo2qbESC56X786WmTj2jgE6wifaFQZZLMufymKzrKaVhWQMnzTMSdnsy9FfKtk2CxQTFHB6qc2zKwEHo8b6",
  "key1": "387Bom8cp5qJRYVoKe4wTQBuYncYx2ebT5h5rTHbLDXL3ZBcFyYi2xD4YNoTNUcFMTo3132nFodFBErZUFV3imE9",
  "key2": "2mnqeaC6jysGjSwKYgRwLLahQBAa2kC1Js5FJToemp56ztC1cfph7izGY3tvgyvxSYJ6PJjX7BWXm445ZbhAWhjv",
  "key3": "Mx3HWKoJGks6JTw8Zy4dcsKnkGbonuTR55U66hhnuGwt1NSTiTab9Xq8RMCaz2onUMDfoqG3ZXcb2DZ36omAH1q",
  "key4": "31PCJNj89buknRu6aYf1V8cgs52unU3fwe392QdH9846VBYQFTCRCKjz6DaCCoWUREJQE8ea8MFZpmmpepnteSLe",
  "key5": "izNsmh1qCMcAjfAj7mmiQspaEYYs2egYKFzKE4pbyx8f5pp8FC5qhpDQ1pR41buH1QNSadfcMb5Jv75GJY356NG",
  "key6": "3UQ8ZFgAg3o6o8C5WscVTffykaidJLRVLG5nST56jJgXxNJXVUXXkv52tQuD9uKiJvbxSo5Nr2QW85NzXSWnvQqe",
  "key7": "2QgKGwLiHxpSDodqNNusrMt4rzdQtoq2AyUxojwx5k8GCcrnjCk3DgCVpe1WQqGcP7edy36UN3Nck3Z6Et2FHZ7s",
  "key8": "4M1bYtLpqUudjmb2s9u3kGzpmmxFJFeCcqvwP3odiKmavBhz6Pq2HrTWYGCoq2vKhZh6MtZShcLk9oiW4D1Zt4So",
  "key9": "2WcYpRA4j3gVgsHHKfy3sEo5PhF5JPbYLyL1L1dvESXFywWJibHFZ8B3a6QPiKY37Ruh8vRDuwfiPxwD3HzJbxah",
  "key10": "66qWYsWgaMzhk2Kt4QztGQJrheivmvN7dbfbZasc8EyQzSmyg11yxa6cyu4awJmecfdomrq4BMCTXGrTSpQsr5BJ",
  "key11": "3KP5Y5hDPQw3p9hgU7EEmbDHvTJDUXPRBxY7SHbVgyRjqGNofkYFoRR1qhoJLQhpqEXBHaWHZ44BtqimPLyX5iwf",
  "key12": "3MwcYQKXYoZDpSD6k1WTpZQdSNPia9yNN6VBEyLpyDqpQsQwYBxD9ZrtARiv8164reMqhwiQM38NgHfyXhcGXwSj",
  "key13": "5Fdy5FDEGgpNJ4cxRaHVegVFLXWw4w7VpTQyJHyN53ZkMiEXcuhFpGaMbNLHVvbuLHYK2Z2RVxNQTXPBQhi1k1n4",
  "key14": "4JWFz5CN7gV64bCq1RmjbHEBCPA3JaGiuWot5JpW1fXBcxnMhwKF3AuWgtjxx1KpybsXmL4XYXDiqoBAkgg65EsU",
  "key15": "2tEvrUMbsa3UmJN11wgnoaRHV1f4yEnw5CbG1ZSnVqugVFeHaxCFnWgTNdp7Sd1vj8ex82ksg9y9oXDbPCNuMd6F",
  "key16": "2HtEvCATH9vyP5wvrKtsDdAo82H6TS8HaAgjXRD7ym1SRUzbR433cifGicUVqJacUtdjC9nFZaKcYEPa2YryMRzh",
  "key17": "5gtPoVki996bWGHdag5gs1nCsfxT9Pr7fDrVSHezNnvd6F9o1PgmDnwdBxFZ9P2EhfXq8j748K8d3N1F27zcxGFA",
  "key18": "4xey2Sg1C7yXNjSUuT4KtZeA5u2xfq85tZzGhxJBeztcApRdMg3EZVcw9YpXHK73gBMaWorjQWkZDxRq6T4R6GH7",
  "key19": "4n8YK99F6Q19aKN61Bf3tBRpn8JZ8LpTZM5jWZ2AUv2bnfHfqnLRcgaNxEqTDcUniw28NuiYrzbVwkVK8L7kwiHf",
  "key20": "2AGw2HWAhUMCo5aHsHv6T7ecH3ijo7zbqmLBfrpeBQ7vCvYvEWjcSu59jtUAFSVAmiLLXk9qBBMsTYMGNMTzAcdr",
  "key21": "23yA956KXu7FFSoqRBRayGcuHuzotRE8eVcawb6GAT9Tk3QY7Ffz1fEp85hzsRXRzo5VCQjTBECedTTiYj6Zy9fX",
  "key22": "2dYTkGQHqJRistzVerbrJWuT8cj6h5ozxq9vpsmY2F5N57XhEnZzgoayE5NAvsRM43SWxqLkdK8CA3rJuCNRfoAk",
  "key23": "5R9HeKefYBMQRZbGLgWTmktyntrowzsWSA18Ecc41MLGF3gRwZuF2BU4veBVgk2cUGE3bNtsN9ewfj5Kan7zkLmg",
  "key24": "45w2ch7mwG9aRti93soGh7qzufG55GZWgEWZVunvUBv48TCos6DGeLCxvKB6sAa4McqZ9taekFhXksVdTs6Aqcf5",
  "key25": "4hhLErSkC3MbN7j1f4Afgb5zQsLHvEdKW5C5a7addemp3DZRa4GXRNTLarAJuBWvGoCmbqp5mLWYHKHifM53SQpn",
  "key26": "2e2nrK3DBqK1aRfyDwHi4jWQgf3g7wHHzprtAqTLcaveKVzdxaZqcmsDSknnuNjFwpDPm659cCVFYG3ZkEdShsHf",
  "key27": "43N698W5v3rhXZ7xQ72VceUC75k8JwLE5yNpVcqkngiHXqJViC1pmpTwTNobv57AuVC7FDDKtU1RDsRuYEZDxpyD",
  "key28": "2qjuPXmnTjz3UQAxFkFKFqc8HbMsL7Lw6CBwdrUi4fRPwSZHci14orMfTeqEftVZo7XK9d4nh9rDyky1EQFwAru3",
  "key29": "4GX9nndVM9yKDaMZDQcDVJ3JKC8uZp7GnyJkZdnT9ofLj6cGCUrA9fRk6TvW1jBnnTbzVCMDYdWWyepkMVbJSwVF",
  "key30": "63RG4nxRJBWdJdZkr1A1RATxfbt4RptiUsiaGZooSfcQjFgrtrQkWhLybprMBBcBbvGMUzEERxFTPeSkqPvCWfNy",
  "key31": "5QoqbcTB6BscJWufkQREfoqC5zZs4N1hV3EtNBvFPuHSn96e1Sh1mL7xYLnqoWxov8vT2AHkDgA3bJjw2Kr7x3Jp",
  "key32": "598NrniKZ72j4DAsn8V1hfbMjoumq6emtRWBuLwvZCvq2rkCU7sJR76SRezueYd3jVsXbunXRcrWasM8GpdYEcUz",
  "key33": "v33dzPANfjX3B53gxZ4TPdKac1Wo7RZTroFAwLwjNAWt3xWbVqGBXKXqsdXPE51J74jR13o3Bhok31XprWnNdxw",
  "key34": "4kczxMQ8tZwP52fzkNmHGKMtjHJQfNxrbV9UMEK57hDkfrn78tyrrW1L5jd7YdjajvokiEogncBmAwGGeAHYRCuG",
  "key35": "4eEchxuTePSsQoD9P75kWT1gB7VTeAgRHAoFGuNTEu8EomaG97reuMGavywZo9fZCYyjYZ4vBuUfDpLBqb6F8rv6",
  "key36": "S6wV6B1Ap8HdzqfkYm5jwCxurW1eFUMv4865Xfs6Q6HsPZmsfAwh6aVJPedKaHweppRzMLtqepQx5aX48hZaAJ1",
  "key37": "4HNy1hiEzLVoTcTXeh2XuCP3qpGr1dK4Xh62i1wk2kUpyUxuzgbZ6moKFKcb5Pd1x5veGKLoYaQP8qVUU1PXXU3m",
  "key38": "1Y47fH5gz6iV2a3wELh2QZ1348c9sdAf2TDr3SQw13xxFJwfWBefxptm6T6AZKDqssqRgymg5q68dW11y2nMG6s",
  "key39": "2KmSAH5k4J2bFyNxuySxvLxsnxsfd8gXPvsMBKPJbKDd5LSsmk8Yt5KtQq7eYsAvSCxFyzjvVpsahCZZAsLGBhBA",
  "key40": "2gJQNQBuhRg5nk33FBp4nYqUp4WAtEELsgX6wZAoDhZkUUGaiJGE9dkc5jJUSihxSCgnVbiUkTe4amQhn8EcKUKk",
  "key41": "2GFJRPHVKDyhdP1K7V33qXoCM89AijrmCCYM8aP577HpyR4qBnJSDruV62YPKoHMKaA5MqZBXiF8RPvkczwuGcCo",
  "key42": "2tfk7k2nJ8R4qTgWSNPN8tgtxjyms9JZa93tqQhhHA7V5NwGX76RLsuxoqXuXLXixnDot77doE2jRbu3LLGX859a",
  "key43": "4BeaR6QAWHfD8RTySecBk4wTVcJLBS8XYA5t47uxLm3F6sJERwBcwo8DQYEzJaW5QiS4jAoTAYaVDGcxUB8BGDsX",
  "key44": "5UKtg4kKzZ7Esxxcw7kA1peM6CDi5rWNMFYeGiJDGXaKxjZtqEydws5DTcQWBkDJN62uAdQayFzUi5Gute1XAeAv",
  "key45": "5hXiT1vM7wbiEwYDqdu8vFUzNPQDjVivVTz15zZhb5VUtpQDuQvU6Fp5w6jKeRv2vVUDhMGtqxSRaGScQijV6zED",
  "key46": "5pcQ2zdNWBpq4kXrVkBMo2TTE196VGKBnZAaZBoaoGFMVzdQcdRKdxfuNmFUQXmYopjiVyEXyNpTkuFEZB3Ktyu9",
  "key47": "2xq37cgqVkaTTQQooLWU8ftTJrfumPH89ngCq7d7wGV3C1QFKH8cPwZDDKzSVoZLX3hHWXFvDXetoeq2qnFKTtCk",
  "key48": "2SkfGAt9vau8cJTohfo3qqPkphpUTxycPj884WDbCxqFJE5Q6wLAmv7UcPYFAhkrNzirgGFLup1XNUGUK6VyzEdG"
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
