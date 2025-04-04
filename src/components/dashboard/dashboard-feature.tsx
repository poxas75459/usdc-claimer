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
    "3Ly46TjX9H5TnpajgxNnKfPSeyiz2PbXpvEVqceC952fsT2RAMJoESscLgaf8UrWbnSiw1BpyoQa22y2htzhWNak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UZiuQj7exBcpcp5gmT5bMpmnZpR9pR9ipYJrhSuMgMQcjYeLFr8Z5ngF5tj9mjJAS3EWcpU1NKEFQEVGh75waWM",
  "key1": "4xTCPy4XVeFpfTGhSNhXUZ5cBGhPugmYABdynjytUGyyzphfhYj5upFmcwb9eHJ3YRJjVw73tX8Ltr6jgaZpp6Nr",
  "key2": "5oQwNApwzaJtkDZGdutTeG2ahNdR8w6UxgznDTBV8NbC33nCBiXQNd6ixSSZcQKRomhyST27dDf4T4Xrkjg19XgE",
  "key3": "5gLZug8ch4AE4EjqvBtRrGWgnUUoWvkCQvmxQ9zADrNRZkuWtQULNZMHC5kqALVGrDrxzKUZ7p9cUJ6wkzeZoJzs",
  "key4": "4ooPwLrri6PhMEjiE6i9FdKZdBLgRts9FjAZiZJG3P9GusP4xRTeHQYq4998988MvsFekWNtXzwUQk8ETUWXzBzt",
  "key5": "2NeG5tYurWH12PuuCHEy8KAMgfGoXauAL2MkcDaxpz5TSHAYU93BeghDzG6ngMsX2PhMnM1HMUPd8PGCP6DKMn55",
  "key6": "pCQVATLhRC22HhGhFbA39mD3oUuQ7yrafbVF1hwBJYYmzAixUNuuJbS3RWZYGLY669EHQMPmAd8sj3q9Sg4ak5o",
  "key7": "2h8frBzR6qyEsq2tVSoNiciWXzqz6inbLPi1pC31jhMokmE51stbz3y5VFdM9EbBK4rPU39JYAxW3um4DJxdjJ9W",
  "key8": "5JEcVYq6vHD4kzA6JsqxighMXZnDatYKVjdzW1RSYM7VoVm5XnKceowwkpvWPxYXVbQRNsg4rmvuqDrnFqnrjVwm",
  "key9": "4FFY8sWDDgbfLmBkEc9FVm5hv86g24nM63b9MuuyfhfXuj7yAgq9B31EdJRKV6Q6Ra6Pi2qgFn2KPfUbt6iBddPL",
  "key10": "63x8Xse7DZq1zf7VNY6KKPZLXACcsL2ZNXzuNFidAJif4H2FyTDeoe59hBDTJvKhfjvzBZALWdC4uR1tFyxg1CRN",
  "key11": "5PG64Nn1cVNTeYJWQXT1LvW3xdkq3PXc4U8JeEwEw2BherADRkPjU2WBx7vN4BxJA9KbFWWpm2Cz7HHZjXm4say1",
  "key12": "3QeSppcoxGfihoQdF2FGkwJLXXXWYnYbBjhgG6ccEQMopJiZkUEQCbmE54xZdQpeg9u5v6Y84rS8Fo6ofiwzNayG",
  "key13": "4ae42y5oYCrEdbx8qkSEsK9FnvVBf4uDUpCHnajH7kW1nAQEfizWPnbvEEKB4y47CtxU38ac6q84NQs1CRRpuTkp",
  "key14": "2g1BaKFdZubdTBcJXXD98rS2Usd35fuxtoJkWE3ejwksDDnehdBWSdCjByJQYKB7FZpZyYrgWShZWVNLRSYFrLrw",
  "key15": "3rMbt1yFGeAFb1Fk1f4zrVXLRtYeeUquRL4V9NyaxohBvgDAgDM57tHs6cwkg6gDgKwcmmsvAbz9Jsxtin8n3Rrj",
  "key16": "2gskvv7qCfcN8fEaZXm1tvRfXtvMms5RCxbvdyQUTUX6Xi1Go3Kqp2zt6vRtwFu5s6WwFZ6hQEkb7nNVJaB5rhk1",
  "key17": "4eCQzAn1q9MzNnDAUUB9xNXEPk92TBMRcrhgGDv3U2Qo233fnwaCCsGqsMZYqp8XeR8iz6PyztE12z1t46pzSZ4c",
  "key18": "466kppZ9A8inWfwwG3k1QbdjC7dBGSWHHYqGh3WFRCAxCkmZ2181vrcUtgDUM7V95Q8Sv3NdBgSHM54BJoucZcQS",
  "key19": "3GtnPUSccrj4NrKwPcUFQLp4cyDN2a9jBkF19M7TSJDpvxqDHNAinY2Xt1pLtM6oXGPAnq7su9pPfmXP1pdyp6Se",
  "key20": "3cZ6Mu4Lm63ovk2CKFAN7bAMETc89hEagJPZ2urnf7tUSZE9aCga9LSudPLLps8XaNqbXnLGucT7d8Sp3v8FoH1q",
  "key21": "2kNXXu1T9JifBms2AZ3vYKSmUeEvs116XTGKJe6qUmsckja9bSRUGR2UPWukRLVcWRGiSLc58Bfge1m3q2rre3iF",
  "key22": "2dsv48DgxKNSXYh5AjRChtwdU8iLT1H3RMmqCihzaaPbJXcp2Bfk8ZL8Y6puWp6h9Fjct7zfWUKPLbqAXiq1VKRJ",
  "key23": "6yaJnR13jaCbS6YkJvygDkxzBJpic8sjqjbpLZkYzfwzPKt59c8QRnXWjEsTp3NtN1WX6BGT3J6C9ux5j4QEMEx",
  "key24": "2tYTMuHtZmuMzx1sVqMKL4kShadMovoDiXxChshLrdR3wSy19Dkjj6RzbavogQBRdyy1UfdeMpnG6QE3ofyDC48e",
  "key25": "fhZxKR88Hmyiv4ocEJLMw8mgqTWrLZmgjiB6UfBQGPLGvbSfxGWft3wtUrKqDsVEu8CtMimCYfX4NcDm7UnNznM",
  "key26": "2B57msHHyhdDgZXL2yBrrQ8abHrHS7nnzbHM741QzeqxcANeC9vhjbKVcjEUrkw6Uh6SJ5D3ezYWUaCGQU3ADNA2",
  "key27": "KBiZw1ktB7VnoUk7zxTCMgZenf3ExTc4iktBGJhvtoaELEA4gNhouXG2T2nHzARkambTVdGGoEpCH1waBqJ2yVX",
  "key28": "2e5BqHTW4YmXx3TvL8PspwKkUhJnmpXAUH1Kx7dLdDQvK9KUuyopaTqUbrckNCsugHyNSRvAzQGS5a5FLn8AYPqq",
  "key29": "3S7hc2gqCbQn5WMuSf633MKiNHHWs5ft8BBCr1xZGQn7gVbXpcCaxsXaJUo2uZFVJ2aebzYxSfhugxpg68DXicqa",
  "key30": "2iUevLm6BZBNA4gH2E5mWUyUNnqCZLvuKHh1g3p6dP5sdbTj3QaGtzR3ZU4qSnzFxPz3msHoJQPLWJFEFm1Z7WgY",
  "key31": "5ajSz8v3fPRwGVyBA6KaQR45N2mnSv9vaAaLComoyo8cjCisjwK1bhyCytFBKjfVzkoobdmvMdQ33RbNrCcK6YF2",
  "key32": "3AfDvHPeukYHCb47QiXKv2vzxT17YrsfukafHs2EoVP6RoH8XMN272mm2xbHifRwbbipi4gqVv1wkpfKiNznFB1B",
  "key33": "3kt117thHBBChDg2d3aqSS5bbpRJSVaiebz19n7pFCTzBYJKCDdCmr1DVP46DrX6MwUaYg4oM4frZNawdevTCbu2",
  "key34": "3NAKovKznABpPjfSux16uCD1Rx68NgAbaKXLm831D45ACkzn5kyVQBoghGEbksfx2fsYn6AfHjfQojqqdaVPnWgX",
  "key35": "24poLxYuK5Fq3io9W5ajpEtNnZD6KqskfJqPXRF2PUypecKtgFzv9AsZxhBtUQwPfwYjAedffnHxX72X8rP6GzAD",
  "key36": "Z922MDuycNW3d3MTfi25xSK7xsVQrzWVQ7CWrcw1Gh4HNnrPzQXfRuCtqUHT7iQEhzQPA2AT87kFde8TddLVP4i",
  "key37": "3QNc9rWztVDzc5qW5xWqsLvFMENeFvJHgFfhwDFaD9wu1CReoTuqL6ccrQtqPWJr7gdDV8zB43ppj4swJrckcJiu",
  "key38": "3gJ5WsNtJyHe3T8Qac9Jd3k4gAWLvTWdGVLZmLomMqRyfYrYYjsX45nqCvZLshYK7YDWjSkvuqdFZYaZm8FfTmDi",
  "key39": "4UkcLLdw52oV6GRRjVUKwwvb5iWgV2q2ZoF98Ejc3xatKEXmeAEQqjg8Fi71cNARns9aEA1KNce51v1zwo7KMZ7j",
  "key40": "2xyt2HdQLFdKc8rugZYFHdPqPkHyT9ps9TdKCwCCvmCc5zdhCgVXzgoDzKzz5nx3f7ZySoUiL3DqMXCEfYPaNXxf",
  "key41": "57FW73tr8D2tqprYi4KtqEUq1osDfhpWUueneeDufxEdbygaFQWwxsB71PAjsrDnvcYeBD49Y7MoiLtLK2ZeujLe",
  "key42": "33LzPgfxDxzn79XcCmKHjbgLnYXAU4qaDyfwx6mZ77ow5abgJ2jaiXpd9RVHJMySmPnTzNb4RioL19JUBkLpg4bj",
  "key43": "PaHvsi9JzEpmntKs81Vt9YuJpwcbfZxC1kBokZsZhhjuQaexWYoBL3s4WxrTcjPrTquRTLmekDxjxDDonU9cG29",
  "key44": "3MjCmYkm7rexXGKy2QBWbmheABGi5BevB7jeCiiE8NSJDxqBCcYrm4gwSpgGfWkYf7rRwYJUCpC55Tj1xhFAPC8N",
  "key45": "nb4TV14pdnPErfrbgP353qERNxSx6jy6ZubVGPEfRaSbrAiKV6j2ypZpWCFjBJrGeXQedNALihG932s1aMb4FKm",
  "key46": "4i1iiXY85YLgoT1FpaSZe8vogjrmsQ3SGnSAtEz9Vs1GHkb2KGZnp9XuRSrBoi8YGxNpAUCVBRVY1UrDUeYDDSmE",
  "key47": "5RGgt6rnNQqdYfWXaXugkELFtQ6bPTf3K4nW71kQ9rCbyqyXVkCMt8Xxc5khrfqvuE2YPj8cmcwSJYR5h1eB9FPT"
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
