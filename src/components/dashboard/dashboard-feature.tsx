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
    "v7byc2ip2kt89J17qSE4XvuPSyFq1PMLkwYMujycLXW58wbTo5yZH4EbGvkiU9v9ofa8NAQUQNqBnG4wzQoKRgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jpbKakPszE66qnVjcfkCjDhN4DqsS4EsWJjcai4bkkJ1SLp4UpeqRqwGngizXj8Wm5dG68jT2XRzSWjwG66Dyb6",
  "key1": "47uiyEqbK8AHXT8SZwJ4wp7qy66usnmj8Xrx4LXEW1PUGvJWu18tkCceyK8KxcKptpxd7CjgL9xVLVVV7qcbBJ1u",
  "key2": "7ciKkeGUMgbrPNriwsR1cRYVSreBNbshL86LZD4pSd92GLPpCjcWdfeNRr8EiMg1t9qxP9eLFybYoGiGTfseFTt",
  "key3": "324yVTsbnQcCZaQsWDsk4LdBiE9Zc2Wxjfzaxrq61X6UEit3wyYUKovrSfTNeEdCEVKB3ikAWTsu6c4wdLr8pn18",
  "key4": "5ptun1ycPokqr9VGUcU42SxSbv2KjHyA4UN34vGTequisdtuckeLTpXXavZMQqAowBQoaXn5Qozkn4kHqqrCYQYC",
  "key5": "5JYWUwD6ZL2QeQwMtrDJoH3s23ZgdHB9wmT8BaKU99wysHvS7mbqZYcB1PaFb9iLqLVzPG6qyciYFoWDexcZ4r4C",
  "key6": "5F9H3cs4u29dJ2FLZroAua6ycR5iQKnwvnrkNPS3RSUsf71FyqfdHW63acscT1gmVjocbZXNZZmM9aG8vDCa32z7",
  "key7": "4sQePJRwVDynMvnDgMUfD4c5BSEGNeThebEt8itat7kiXSbbjEgvay4sM3ACYPELPfXyF5bq6vRbfjKhMeXDrx1U",
  "key8": "ESzFELWAoXgN6A9K8mChgspbdNPBJzjt6FYXjiaCVt57AuLCA7BY2vgwat93BXfD76MXhYPieaKzAqpLAiBoS3q",
  "key9": "4QrXhT5iD7R2v8yEMggMnAEVSAC42mQ5JVjMPe49fR8SzqX7WAPjymf46rfWZ93owkE5PDLLA2VknbfHSCDUPoMe",
  "key10": "55C4KKMJsxmtvhjp4j8eTQYn6529joxBcoHMxu7tydZXnYTM8hApRvSzDTY1DDYBXPSBXujLatfg8QVGJNyFPPVm",
  "key11": "5wBPrJeDqJ8GNg9TkQeTHbAavPhkfN6BzyE1MCJGF1cJR1hH58X5ProR23gEYSDC7GqXP7vmRiszQBfVYTEo2ZRb",
  "key12": "2zQxbX6oPePhrHrnsja4rcSSFJqqMqxWbv9dYxGpqDKqgUGR2wkZCTHrxiDfWsWCVFxR2x1m18rsa316DwGkPfym",
  "key13": "4bFE82weWSugHvjYy4zBC1y1qxFRPDjpRj9Cizufd6VTq3w4SFjCmzgKbqTrKLy9jWe7HQEUfu65LLGcQGXiFTvm",
  "key14": "4dPHYWWyjJ84ywbcVdF7oD38dkEM9XqYTNbnpjf5Wgyg6AAC8Bkx9fGV1vMbS6Qw8ANkcwm8qcTrA5hfHMVzFSCe",
  "key15": "4u936QM3ZyK1VRa3EwFm8DRmwh9xCXrYoxENWGpqQgZfVJzAifMD2AbVUfcMim75vtSncPPpypAL4CBAsQngW3fH",
  "key16": "3AymGffLxzUXcPCNeEEAyqoovqGz2dpEsErnBxFhK7qdzP5KRCDYBZaWAeNVeyq151SScajhk9KwcAufLjg7ThHn",
  "key17": "2gMRtKtyHPbfygb8TvkkiM2au2zUdZ1n9ymfWDrx9m5NFc2TK3WuoieLVTWvjt3Ja9hX7kM77Yww4biogR95j3dp",
  "key18": "2Y2RVbs8sZ3cYejC7Pj9ngfNNaU5TSBuDiME6qWignXvpEyT7gW5GXHB3saLxEsRGwwuRQAuyJi9eVTbPz3zyKYX",
  "key19": "4iwB4RqwN3uUnn5Hr8pdTVVytkvE2LMpivwsYYKqUajVAtQ19dRpc8LD6ozzKcLpxm8EZHGJURinL7rCA62w4nFF",
  "key20": "2vPnY12jQDrekkJFdQTdzQ71fz6jEQmwhsBa1LV9afQhriqsiBSfCkoxnbofKccP4HUp5ph7WqQBMgF8rNXvQNKL",
  "key21": "61uQ69bY8u9aM7BajGJ1jLLmpvbcFdHD2McZEVLDQgKSb6rmXEtnZsSEm8kEePx3d94a5HBJ9zNmic9asVC1gopG",
  "key22": "5F8Dgsuq5ZDJwUGoR7U3zxvJ5XQhQp48TSRgyZY85QbTyQRuP3obQh8XoyYXezDsqSyjFbuQqoAq2fiyf3YpqKC5",
  "key23": "J76upJkfC5nTrsZsf3UaYamYGnbwyJjRDmAtiPPTFr3sTpdWKSNYemCkXr2GhgPJ2nvoTs3zDobz6S7CmXenTC9",
  "key24": "5sSf1GfeWKLCeCMG4SL9DUtjAtapZLRzbnve2ggHExAGx8bHZKfiMv2uzi3pbvT7oYaua7Dv8LRvmz6hoL78rkGU",
  "key25": "2uwjJFza5AQZ3rdLWNiN4n77RTaN8jWgfk4DvggTs8Lgk7A5hZyT4jqeEKQsB137WZrz8mYs95ETMYXYKEPKvePk",
  "key26": "2z5F5kXNjMBjSP1ibu5wUPo9NhidrZ8tELYAZpQFGTCVVe52z6UQ5Lcr4Z2y8cW4CpDGNNvnGEgZGSGRbxjhbnyw",
  "key27": "3Tbc9MwncvLAFmN25c3AWtdnpzNLKsXEzqhFjsaX8QrmrqsbUPMaYwNu7o6XM5tnQFKWHwhjQe8u6g5oAKkvVqyx",
  "key28": "5CkhxS9soqP32SxbFXGLTxsxZZuYTdX7TRuTFr4hfzWyRWaRmdfi5gTTXJN95xbncrBMzJPEbV3LYpqTebWmPHkp",
  "key29": "5CYuRKYXzTzLPEH5vH1grKy65xwkeBJdyHywFb29tG5cbUc5LQYWXBBkeLMZJPxtbgeMcSFJwYouSP41AVezqchJ",
  "key30": "3a98gNDHtpaAx6v7Kx7XKLFtuYkiwZYAgqbqtauqskmcr9TunigWUmynseRfKQS5vgH2Hn5ejPnHCLG7pKufize4",
  "key31": "xEx34h7HyLeQrzLFdoTF9Cv3S5VgNADfViXD1ZTcfa6Y8xHvon9Jyp5HnbkYVcATnyKnMLZ443JQLrnZwqyXjJg",
  "key32": "56M3ZKfpirT9YnhQCkaBoHM4tB1ZEoDdSHcUtroLSyjYbAPui6DS1TFEzi3kcNgxbrGSrEdpK8GXW4241WSfUaoW",
  "key33": "43XVDjzWEXeGbaHzMBb6PzcUvDEVuRLjrJWFnb69vyx7d9fRmGoF66HpL7v6LL4KkX3aPxtZie5QNpjS7FDGmrVW",
  "key34": "5GisbLpJDVtvB5J2yMVpGzja84VNBgozyqpcAcdw2AynBBRDsmCTTfxmwuiv17turCpW4fJ6wqX7qHtzX3FvkcAg",
  "key35": "4aWCpxNKKCYJooz6g5h8JjPsMxZh7zfXAS8RDwrtYTZwSrVRurXrxmYVRBVnZRTWysSP8o2gjyrjMeH8iHR32x7P",
  "key36": "5hh13NRkuMCmn2eeHdrqV3aV82cmDNqRcU3nkpboPdV58GRXamVa6ikLSimMsH4g8UHesCJu5zdZ4UggQ31o5gP3",
  "key37": "5BYaWWV6XT4a3BT9jADPrQBUB5sg9HYuszVEi78wfPxJ7aZ48rxcRLURrJzPFE9dZKzG8xvAQ3mxNpRkaANQckeb",
  "key38": "4v5ThbEt1C59t1Q8p2v5FfvSRbtZHHTRMWL75oDbkZ6NqCY7BJKM84j74dbcHdHUh5tXDdMCeTAQUpaJ935Y2jX1",
  "key39": "4VDF5xa2Ew1TSYEykmW8WS2o9VMSDcp7qTYvquEfQVU9wvtyZGqbMESwzQ8XNXxsQ3dfTg9XuodnRUTx6Tcx6ibY",
  "key40": "2wgDK38mwcNjJ2PPBLPpURdHxViYe9RLfz8znayzNMZDoUX25g3HyHnmLhHeN1WDvFRb7GjSKCNjyw5fv5Jq25iQ",
  "key41": "4xTkS7PUKBiauKPjEV8ALX6iTQSx9rT3QDU8m7JmzEPPTxqGFCoeCXaDncXvmio5Af4bxPGBzLd9sbP37QHso7UE",
  "key42": "2TCH4T6hBovQBFhq8zkFVyLxYZe6G7JpSw75AKeD9oRfAXJMctG7pKnAe7JBPPuAisWLALbyWpacUH7C3Y94F5fm",
  "key43": "2bAZmSFwTYCKDfii8nWnvhDuXb795aPrzFn4WScqLujAaXjcoZD9X3eauNEmc9o3qKGSoLePioG4ZQkuxqX6odra",
  "key44": "66gdmRzYLXsznvgc4QkvSWcmSXnmwRV4JUXp7obYR6QJ5vQ46phFuJEuwE5F3dkgeUcy8KWtxRcPdvAoyVpAaQVV",
  "key45": "5nu825TkLg9mJ4Y8KdZKjNJzfuqM2nrEUWPs9aBoJAiik5Qum16f1jnL9NzHqjFPnh1XiHLCBakBojhv3oNrAzX9",
  "key46": "zMq6AQCMva67B9oQe6XyuDHX1Pja21CcvYGrG5VUjiRLGmnm6oSmmFaPrD85XoU3Veo8KiEsHNYvNroY9QauwSC",
  "key47": "2eYoQg1FQHKz9tAGymnERYJGWPZ1MDB2iT8YvQWkH7PxHwik9oFXaKd2GurZvdSLAaZQaoEjqESy5zcWcsEWMznP",
  "key48": "4eKKTksdGec8WhmsZbV34xx1wMDYUY6REugX4JjbfbBBq37GC7FAZrD9cZtrMVr3yH7wfH1P5bpTbXQiC47bcrvm",
  "key49": "4EvB6yLynJbBwN5EhCMKREzt8y8h7vuGa4Q3QmuZoPFMTe9CfKviFSFaexpR5J4KUjyEef8ENRUEizqvK8TWAGqk"
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
