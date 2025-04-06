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
    "3kmVEmVUEqCNBbbuNYWkbn7zjbfCbBvQc2gXHBfN4Sz8Qppqigh33yJGV5hNuxoBPz7VXwekjgrxKNgUUR5VQbr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32GiZ8ivJPT1D62wuCBuRQmra9yN93tNTwPKdUQQWtk7nbAgMdiJRk78crSnEjvsVgaToR67pLNyALdj3Hh8mH5T",
  "key1": "5rtnJz7VBZj5Qc3ydAP47XFrQGJ6QNp7Ad1dte9sinjE9QnKdY81dT4GcprSiq7rLwqykWrsJzPhjpMTHb86CEny",
  "key2": "36p54GQZ8xu9uRk71Fxa3cqTuDkMgmohnfd1jUqCM67z65FWuAxGPKSrkEhfMYBkVGGwG62zYTzQMydVutWxmH5c",
  "key3": "67pNDkkuY1ak6uQQZxVywKVV1m1FqVJWos8hix6D1YgBJKeiCV545XVDMWk7AYa7ZfiiUTJ1muNvQxPnSPjuCUFY",
  "key4": "4Lq8QFsuAmMRPfCjFmaSroN8Nfa5znN7GMm5P19Xhd9Y9kSmeS4cqZXVMiy7bZPbJdutPdmc1YyLFqWAgnGJeYDL",
  "key5": "2uyK6AmtKsQA51sP87D42VRsCy14H2q6afgjQXjzgzvYUhpgpzeutYTFRLeb1YBFZednnzwgn3FUrYj1nvmLXGsn",
  "key6": "5nBfzG4GYxEmuY2hs1N89Auz4xDGeaFqomqXExNdRUfgG34gxR74yaEYMTSMbt5kuz4efKDGfmZBiYytCftDxwC2",
  "key7": "4uVHpzqSkPS38HbTTrB2KgawZmyUoKtvqTkEKfPR3bwtkYQq6mZHtezgbuAN3RPvkYToS7MUQuziCDV7kJpsqPFr",
  "key8": "5sdWNLH6T1quA2mUYrowwwQth3hwQX1psgzB9xozXqgNgcyLY7b1iYJu8A53JtuvXzgLrCzyaKcK7o7hMytbQwkD",
  "key9": "53rc4Znxw9mAMUKUNPoPAfdiKJWjxwXHF8Z3i7QFAfqT5wNZJCtmgr5vQHwAwoZn4qR48MgbyEUnWVi6R6E6kkXi",
  "key10": "2Zp7MpwFo5qGuFnAtXEEFaUmCCKbp6dvDSRn9vE9CTqWQ2UtRd3ETZjpC8ut9jCmji6Zo9E5UkSTHeNLHTfces8w",
  "key11": "2g8i4FADsNSANckktVbBibvVFBAAfUBvYcKrWRvVxmyBsLgponF9oF5nySN1bfPveAiit6Z1aL3gt9xv8gAwujfW",
  "key12": "4eaApbh2NZoGFPP8rkkjm3S1YtGXTMJ9BBU56RZorfzHzWKkHmiKmdBdPU9gbNGGdN3dDL91RziX4AUgBWHSMttB",
  "key13": "2WVwpMMArPYT3Gog9mkSAVAcdE3tMgDg2kLXuwcEztFHgYPWmkVr7XroyWNGPqsBewc2mW58Q6foryPGV4ZDFut9",
  "key14": "5VEcoJaVpgyXVmfX8y5ywVatJ9mvwqaD8cYjcJj3EMj2C17sZ56T6xJoSagDXykc1Py9VQ8ohC5iZ8jYG4EjFPTi",
  "key15": "2tbtFQXERNLhCMPJaAFho8sEHhKU6MiQi1ipmc1wjmf3ez8WrGt5zSERNK8mf8ZPemodgNCZb7cu6Uqc1yMVGeHf",
  "key16": "2KwXbrj6uZyLurmPqV4k5913q4hH2KS8xSo7bJkrwGLh8SVVq6aX9siFqX6AXRobyXfYRDmCQneaxzM5v3isXZ3f",
  "key17": "65Tf5r7x2rnpp4qNBU7LJVBAFpDsWyfCJERvd1KDNbRgxxMk6iHj288xXkqeDCErB1Ym3XGGGfiPXkG9ZeaSXU9L",
  "key18": "3w5GUY5pdhVapsG5r2dtsAwWCP4eYWZT4rH5WTzGABkpKykziSRJHZqzjRZVmrHuZD6smhD8mhvDjzhkj7q2CaEd",
  "key19": "2L55bhWA2g8Y1kdoGoX363yKqhWht3R3Q15gHYqPVCHwNeaUejeRL2QEhNfxaqgbzUoUMi9QxkZimfyeBUkeakFJ",
  "key20": "5RkgSBh8cMQqZkpdrTHPQu7N1rv2W1ngDmm2PG77eeTY4h7H7B96waj1ArGCwawuRWVUQV4qCV1tUssMWjkPoiNi",
  "key21": "eMZNfsrxZKHPUUJio4euXVw3FAddXX4XtaMELTMDUvtjS6CTF1Fyu4ykMoPDBFdPqUht9Y5sf3igUZVTjBtwfcv",
  "key22": "22phyNDqvukbusTLEf7J9viWKTBE9uBtQ6pBzGHKe1srdQmvicTDFnEafzCzNtQBK2ugNRSHHufxquBN4wh7KET6",
  "key23": "jnaGWcaLixtEgYBoRQE9kvPXLh4vJYdRmiDWKRjcPGtFSzdZKTfWbZRmEaRtR2G1dhe1F19ZV9D6oVTP85XTRwZ",
  "key24": "7hiZVNqipQSE2uJLjENX1mX4c8hqRMy3vyqpRiVoC8vcgJ7L4rAsJtRmBBv38FGSdRN1EJLiUSpYdnP67Pwj2h8",
  "key25": "wYAMkw26qZQ9WDhznqPejRuDtGzQwCrAyjCwXXrXTKVT8Luxrnai3X9Vuu4gVC5P23atqAmwYhvWkwasS1B1yBs",
  "key26": "4rkkRJwPfo6guHAYpTzKFE72GKphQ8fbKiQyqkvkEBtShu6YjQt7Tm9Wgf87mMWsu1Xy4yyfWbM6akudksoe8oL9",
  "key27": "2KgWSCJm4QvZF6RfzNLbRvmM869NPHo7AQp3PPRu3JpLsqNFKYESeuFK8rg57PRaVkYLT89ms3iZRtJ7TH5KG7XT",
  "key28": "3uKoVNzin2qSy7DFYv5KSKMbYkWSswfNwendZJikeXPQ13afipwfm1sYjxJRUZVcoPZEdyZAubQ3UPP4gVkdCadm",
  "key29": "5JdiGEkQJPEGsinKssea9Rxb33KgohLMsgxantXZnWXPm2FL7WLcxxP215woQ6YvL16MtFzAygBTWHHfcmkQUkic",
  "key30": "fqVrwHfHsiwFXJs25nYkLJCPqyYVVUifKogsZJtTHqtyUmhyK9JjtMaFt9nEHoB55o5c9gQPRenrRb9VhXBN28r",
  "key31": "4Vn2syvewSpRC4gzECTbmP2ew5BpnxWinkNumsU7ZEjp9eWNXQrGSVNXUsRgTHGngDuiKv23krpwkybLXbbWJrqK",
  "key32": "3jDZBzugVfvWLb5LfGuESE5UpsbkEg7HDWNR3d68tN45z41Kgb3UqRgKJcx3i5nBhQvUZq3GFeMzGoUFZu4rSqFM",
  "key33": "55bZRr3XHSxDdmX4jBywjjsuhRiDUPkfx7w6GaHAjsggqfVUtUohWeUV6xviCobazKTp8P2PkcMWJkugPyzPZBM9",
  "key34": "BQuJWh5JZ7PdkUAvnYiQpX69TBf7i1MWwAcc2HAR9RSJMHcxzCqd5WxWsfS3gYQA2oZxebwGFcyU6nHSEDQMqCp",
  "key35": "2BGBtkkiz64xRHz6ExN5wDR1ZGKncJCyMq5qZ4YZavq2RE9aRfp4pqSA58NB2MAx4RYQefRLhgXobLXBHPRtz7Hq",
  "key36": "65Urop1fxP55uv9Bk2TAWX8WGQnWFtCTxYyV43pUePgASJCdX7kQJ7BffsQyQYqd2Fm3CBMzAN7Tsj9NijDA5j8B",
  "key37": "4s66wCuJ3TYm7uxmz9pCBdiaQkCVKbaBRVrpxHS9BRe4VRzqMYLxgboFZkeThC2NUsae7ZGst7nEpzg9vUjzbsa",
  "key38": "6vfzKZBX5GGkYyAFvScx4yLCXiUkNQrnzYPWSyjXNELKpcA293wAGLAtPEEnKGVUgPyBXY1u1xhFT2QLRMQFWXx",
  "key39": "bEUviaZQ9ucjcigMY37JYH43xb346hPySpYXY7gKssQzGm7LrwdZawbkEB2xHesCkEZg49zjxQWTh7gmUJwzbr7",
  "key40": "4kYwkCi48wahZD4Ad8U29A4GEUncqXBAeowDcWoUfL9TXFFndjNjoNzymaoWVyhRLwaye1nZD7Evd75JqyrSBftp",
  "key41": "4vd8Bbw7qj2UhWyfGDnP7bcMDdKBRm1J8G6bbXLKLKGT8bQ5U6kNQa7w5AhXewwQwUswZuLzoigzFsxqeT3KKrGq",
  "key42": "2rkgUQ22rrQkM9ecsKYu8jWdTBF35esbAMwW8CiLuyiMKVqoKjdqfkbgXQ9vQ82GUtYytHEJwhRaCLHGtco8EqyF",
  "key43": "WDfmpykDt4nVQsHziArudohXGvUh82ByAQCapcMYJ2rJ4j6Gq741YAsqN1MBsHfno1h8HBjo4TDT5N1kMyKzgz9",
  "key44": "4f7aX798fCRRmBjn5YnnkUZcfdwnvBSUQTFr5bPWa8MEBSaRWtwMcPYcDEYfujPD63t189EpPo2xzXgTdShmneYX",
  "key45": "4fJvw5zx3Vikai5bn5VHjJLrFsHsD1DZdSYUab68cvj4z6kfYQwXFbVs5LxYsVfeoUvNMuCxV6gGcCvwgasRhjPj"
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
