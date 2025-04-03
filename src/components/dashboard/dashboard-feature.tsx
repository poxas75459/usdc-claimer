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
    "2pubn6ybhtABGHkgnHpyuEBgXTUvAx76kdhgJg5hRdbpC7GSAKJqiv2LwSbWfZMPRryEJai5E5GiYMZVj7tpvhFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49wZmNcXB7V72Y7sNxk6GjRvwG8jNNcimDgRArSjuQiN3ppbNiyKWBorrkUQ1psu7E9SBoR9eqp3tvdk1qNZstDJ",
  "key1": "29oB5axVA4Bei8ijh5ySzd4JL1qUCyid6NLTk6NritAc7YVuL4swaHnEtzjHpkTcBUxj3mthJqfM8F8vY5ZRXdec",
  "key2": "TGb2yUZcejf1MFTLsYEkEsViuUeRSYxs7N7kkV1R9Y71nvb1mvSFWxGCHvu94ApJWaKMNGA49wpkaonWesNTWt2",
  "key3": "4Uf7rnnrS3KZ39QxeCW211Rd4STu8xsKTxFVeMcdFULsE3RfgVYCfV5igWLDNa3zVJNta7BDMSBG7DtS5mjDDnZN",
  "key4": "646RiUSpzCVBZDGdNsTcipFLpfjVg53G9SQCJ5Bptbt7Do7G9Dm97wLhn5d6KXFHNstNnXHq1iag6cw7jvTnK67J",
  "key5": "67n37gTM1Pp9tBfotAaKi3bw5gMTURDKZibnGA7US83H3bK4SG5hHYyAbsh6KJ53YevuJo6xr9y6m7r7kPtjtXXC",
  "key6": "4CgpuP6ag533fW3XgGQnvTzkjpz9A2VL1vduc6Zx13z161fqCxwgcPKsDhaVoVxAPQTTdhnjdk2ngyfecme4bLsM",
  "key7": "5qEq5hrCiUtkUZcehTUp4Y7PzUSABjvqHPRfM1ELiU6FmQ5Ygi5oKSF2nBxRLM2BpPDsbKf4PWpowUC1XMwDaoNe",
  "key8": "5Rej4PEjTZoFdaoYL38UCWDqXm1pi6iiG5tkSJykXJ22YtaGtwveeUoBSqASm7w4RVuCfNCUMbH4zkD7TmDtHd4v",
  "key9": "3JaMuQYdLZE1QB6NcMGT41sZ8cL78yBzyKpaBz4EVhHVxwZugDnS1C8RnPyLFA9oUnWqRgKqdf6U11GcjABtmyUA",
  "key10": "31gtA2msebMWyZtfFYQfq5Ynq8QaPUS9cVpT8qcjMiQe1ATsDRvAeVb9U5CbgcgepzPczEq4sCD6Ld6k1y8xSEmw",
  "key11": "2Kzcpv3ENv63rxkxohYCzdN2cmZDeXAziDrWLq4esAFJNR9HA9f47rsFyXc8taBdQUAN3BUiBfgxSTjG8VikP6GC",
  "key12": "5fBtkQoLtLRimreRhjN3J9nZ9kqXjvKrhU2QtTyRenzag8N8HAW81hF5dgcJY6YfKhLtApG3HxNNspHewFxPVNi5",
  "key13": "5b19XLJtyZhqekzxKyvtcGUzyDiUxBFdURARZiRidyJP61o7Pg1msm5byNCzGKr574j3BJTU34TT6DLDLcSrhTvL",
  "key14": "Vay7ax1vcXA7wtoopofdCu59zpuCrWHb2xRoHbQ5pqWn1KEvFR1juvd9nDJbz4x1A6hY3dgk4cX3SrD3B3b186z",
  "key15": "4Nf4jKDmstPApCd4vdoswboPP9psTjjVUKjFmprdjkVbtTpE2wAdFuUgGn75onHE3KdkVnWR2yCd5UcUG7CUZrHJ",
  "key16": "3cQBsRRW4YrfkdMvJB4hQsRAAVrYtKet2z81tWidXvjqT9SBatW3xWLk7Ze61QAn4X2CaJWQ7KquAJxbpT1niYnp",
  "key17": "5wwn9ST8eFoG2PwNRtntFNXmEqpnGTZEob9296bzcv6CNdumRyqZ1HqqfWwxXm636uU5yo48E46k3GwM5jR75JNA",
  "key18": "3zCy38TVbTy5NMpuEJ8fwgg7EbmLqqhddcseibyHBUV3qdXFtUXWPJoozA7Kg6swVMgRkrhp8wZ1J5R5XCuLUTwz",
  "key19": "2iAeaj5Rb7PzUfVLTjevkxG3oPeZH7mWvFP8oJiyUJSuy5XQeuMQDvbMfZ15YttuxqtYSqidFj7cEubrmN5e3Ajx",
  "key20": "4VY4Gmms8TVZ3dn2H31VCfcHQfytSS7k6qnPV1TJs6EUv9F37Vmv7RQ2x5UQeAnEtvq6TNwjqkYLoqaKfY7aqsDB",
  "key21": "5z94X61ncQRRd7jFMNbY4mjSFDiHCgUNQgdJSyWNARUC8eYvKzX5ct17whZYxiRUAtcHBPYfdoJYXunKtQBw7bxx",
  "key22": "3su6T7sngYTcWVwAghbVRJjDfvzQdKmpNy853RdsQqvecqRegdFLpPjB3wzAKmVHjKSYQn92GW29wXsFz1oq4iMT",
  "key23": "5o56YMWhrLnTyaD7VWjX5J9EEK1prRJeL14dnvSrvkepymDRnoFw9SAGEF6vZCam5ZNVUU6qTZ7X2WJTMSgypf48",
  "key24": "27E6zSML4SAEbEE8hTnRePikG7THhZGCh7HPC4bSg4NSEXVU4gHbx7DEYWZv94KhMCu663jm2kGMRFC5LJvWSGqq",
  "key25": "5KPTGoyL7D6QLTYEfJAQ4Cd2VkX7hwdhiZCdFnf3afprEgVZwcGWcwNajSKjF27sj737iBTDVUPVRfwzScGVDzPS",
  "key26": "1Mk9j64Nt38ZuvjUM8yLuGzyh2CgWJAB8xgNQtyMV3sH9YMc1dk85V8wo2Poyg4cJbpXaMW4Xz5E1mCd2NkA5xT",
  "key27": "7CkYHU3QUUaCeMsfSewhVi3dZi7RSd1t6TykEyHSNCH1D2sWjcsxNQoNdJu6N1i2jVD3fy6mS7UHDxtkqMvspXd",
  "key28": "5D6czRuujyoUMwQ5CxwKF4ENSSU2oEfvR9Hxey4raj2bbpCAjKXgmQ4YkZbPRSCSXu2ud3wajjomarXdnnBxgLNR",
  "key29": "4hSpgh16fJXo4XknTQrE6A9ciubAjNdquDsacmDtPWTz4rtP4qu4vXQYftEwDPqbYeMJexD9uZhzs9krrvfYD8ye",
  "key30": "37AV7nS5waiELwjawKUaj9LGDFWwSuPTHVLL1bF9HLJwQj8A6DLpVuvwSW5xoaWXj3TjzoBXSo4m1ipyqoaFioaZ",
  "key31": "5UKDjqGaxKfJoC68dwrdpW3NdqjR2gkPP4yqbUoGzrLam4FqDJzDpFw5pdf1bhenZapakYvLu1o4GCVZdoYiMFij",
  "key32": "5rwX4htb8g9EhKkQ2SArKWHoQaaNwtLnfqx4eE1gpurLjTLvZbL2ED5HBVXMhKsmC24e27QFhcxVwzFzQD8xxNbY",
  "key33": "3C9sYhJZgXpMhEBK9WTHu2jqKunvcQcgQL1a1XXZY9JyGdQdeh7bxz3rzme6KsBw7nq7AnNGE349CfbwufHC4WzV",
  "key34": "4ck6SZSyEiKMfb8uwuN3zRemviForZnWGoi9CVzKeVGw59ECqt6cAyW6wjvVLbKNMXaXJMxdP2mKWacRhYGsskr9",
  "key35": "25pKqxjMhBRh2VDFtdnSweS5WouH2AfcD69MaTGXvqY2NmHJHUMaZJu4hYfxfU6dpz6Ejk53JSF3fkLDNsthHYZv",
  "key36": "YjVRXnJfsyp7W4SAn7Brzqofq8cUZ44qnAj91zhq98QNd9rWNwnb4GXKR2pEWE2jGiJPaQ8qxh4BADAFdACXC5K",
  "key37": "45LpyaKjmfc7HGABL2pT7u98p7bJofAdCjmnaeBFxrvK2dE9xeEVnHXuXG1HXirAvWoV6Cwi2drvQjXmWiX2KuV",
  "key38": "5METoSzgVhWWvkr4kETfF26ur8Z2C8EtbcL7FNT59GTPzgn1cdYXFvenbLdh8n7wWpWeE5WXaQNvo3ahHvmtp7Am",
  "key39": "2MGnnDNMMFNepudPx44SRATq8mEmCNGrNmimvyWvu5KD7dNHA77NX1RBpV8aJ5soRfbbJpuXZeDTQBe9MQb3kYkV",
  "key40": "47VxpzGt21ymJyyknxSH2q71NqsTpadqBYKCrMCaJxqkMVfWvwoUkeLL4rumZ5epM7srCCRHh11VyMZ23G1suuGj",
  "key41": "5vSnWJKAxdyqN5gfuPiP7UQhLrE5auU1SBABVy98UUTBYRrzrBWWtW9rYpkdWkCgrfmcPfLAZyTHAqy9qixejKkn",
  "key42": "PK2tfkP6QrPTDuY2SatX4Quf96x8MD6hSWyFQ2siM6jcX6vo94DL6RbcvHFgBdDepN3NrpAy9xePaEDFifNyhYw",
  "key43": "28MD6sXkEcTUcoGpzERo1b1d1PLMgwh4keTJGJurhFpinwxfRZ7xREeis4Diiabhzf1whdXnZ76PbfKsyKymzjpq",
  "key44": "3zYqpoyF9i8kqCgD5Quyu9Rnjgi8J54Z6mrtVW5Deb981XdNm2X4gPEcQ6xVub3D1r3pZcNQxAndSVNW8yh9vkpd"
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
