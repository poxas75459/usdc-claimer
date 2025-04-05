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
    "4URG7HZhDC4TYSPDmm7D2XfQsx3qDVRU2DC7PNTFJFzjG8BCJVLYRinFJ3WbXL3iLV5RApDvgC5SPd96nF2dU9Fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qu7gKTRS3AeFNUvWYQmVUxW3QdQEJ5ZpHUuTTsFrEYMWpe1HqHLmmJqBcZu7KNfi4Epu8ihvpfXvYhTsDND9F2g",
  "key1": "26CPnkPwZSWMLUW2v5Esch7kS36pNwT2sqmXKTbKcGccfmreKKGaJRMp2jyhzrx9HNZCxf5AXiEUdwZc7dqsavJP",
  "key2": "PdSqFZhMHa2iTZPkmQkRrLLRZqhHeVqo8PokPqoYXzpVhtqYivoMswYqS2FmjZdCikgiB4xXeyv6dCsrDkpoSiP",
  "key3": "MRiFQkcdFduV3uJSSBy8crzRN1wo4GtNXTjMQrSYZVaATmygi2Y4kiBLxWremW9WwjGaaCJb4sSbohDekfRtjyh",
  "key4": "5LwcrqUMLYxZ217XAVPXXStmB6wSCkzE8ftHYsEoFxASsQbCxpmKNZjmVVtUHab5pZTDHWrEAS17SkELLEMW3J32",
  "key5": "2x6TbHsrHeP2QcctQR12iCY3R9P5svn1EYPuuDHXnDQbFgChN2dgHw9KNq1jC4hxGBWJbGsNGTU856rpDXPXxMFc",
  "key6": "3ShXrc2z6sJ7v4dks1maU4MBwkgV8iDoVLvV1SEojtg9mfhypcA8XyCsaFeRsVkZmkfQbnemFDw57wZYRNzYSHQ6",
  "key7": "KFTTRsuaBYAZnf3YjMH4dsLU4ofLRMk3aXcvuFfHGN5uRoqVmHezKkQijN8DF7vS3rvXfasvjVwpY4HikUT6UUY",
  "key8": "5nyaUr1LGDsZ5ELBa2dVSgtusV8R76QTmsKYMfamMpUVvswVksH6bcwjHzxfBDGmUVzMqBRgxxJSSUwZhyBusW6E",
  "key9": "65r7ddRDb98eWK21ABJKtyN2k6xbayzHcWBm2RCmZK4NWhbzXTGngtR8fvsjAgLAvnWnyWKRF1MFczBpTe3uDs9M",
  "key10": "fSNYCNDEFq8QQRn46wbBLGaWhPHL3XPw5y8a8ejbnSZ3kctEWrdPP4tbgbSYZv5d9Lh9Fx1zynMm97YSn1FmNuD",
  "key11": "3nVagzWbfsbsUxaPapxLGteK85GkiK6apf6s2cr5tT9ebBD2ibwqbrVztJM6WUmZQ9zd5VnVQ6aPoYbbnHvg3abh",
  "key12": "2BHx1yUznEFMoqx9GTmsMzVA3XeMfhr5Hf7cxsBHvbHJRkr9ykRjHJ3RreHJckTpxc1snMXhFmHeqbxtTQT4DVdG",
  "key13": "2DqQgMbGt85aWQDNK3Y86T5xcwhNSBdVo3NffTu5YyckRE6hPLoWQsU68Dbtz7Z1FeTke1EsT7JDnbhW5mbkegzG",
  "key14": "51AAYMTkv4Si4xrXSxcNpgr58MyrZJ1miZxv4pVJqaoLbwYyieRKfZzt1sHM3uGasfVpKaHdRPAxSaud2JWpV78j",
  "key15": "3u9gR8am9rsyoXMS2fp9xfmNYAoFnn3fjYEsrBGJmkt7LJM9pTTxhWBgW4HXo9HRNdMTM7bjiKXUprwRzqsFpjZP",
  "key16": "4HLiuCDip1CAUoG54HuuLc8M9FAjuaeqcGM1RWsoHVEeDNQBSrVtLPttXg7xNvTu53JSspNxF71idDeyVSiKecjD",
  "key17": "61nHoDeZQhYEhBCbwyqgBoLGkm4sFr4JtivgL6MrbMBFqe4YacMss11PKGB7SQgLFobdtr9MQPQmyraR8qrPgugJ",
  "key18": "3UA1EmzC575MMSpDETC5rpnZ4JgUvhDjTvaY4vg66kVAhHBNwmGnWhHwx7sx1RpC1VtSeL83u6FP3ztnNdLeDXcC",
  "key19": "4AQ4AGwC3gw39CccgvvgAEVJSvwV9xkfGv5rp3MBHHB3dSvi8hLaNvmkfkPsbXioVRz99o1sWufEUZfqWksYfd1D",
  "key20": "4e2UYaAgcy56SW339azXwT2QA6Ye7C2q6xwK5dA5pKpGCckGb4J2X43WXFreVqEVKXbmPFJRCtqvUcFhnded2GqC",
  "key21": "2kqAmBEusnP4oYnFMcK8cASSTrgBRQyn7t7Ge6SpeJWUaTAMneZhGrr8pLmFdwHXApZzffcKCD57dqgNBVpptr4g",
  "key22": "5DPoRiv6G6Y8RKpfsjSWf3Np7tQZZyiG85b5Se4GAat3LSenDUHG1vFphXtUkZpLYz4Yx3QL7f4HdhN55Y4R9dMp",
  "key23": "e6Y7roGoSBAd5447wFpvgDN6AEgRjDZtpjAG7uzk9DZVKPahnKFKpeeKCQ4iwhaG5zDR5LJd8GDL5G9BfXvT62r",
  "key24": "2m4zrd7u3mqzFRbb9JgDxzgS9sWXSqrjnExu4d9wwms6YLsSfNY953GA7uyLr9o5nfgw5xZ868HtsUxhGfsTWJGW",
  "key25": "84cZmJNNsGSy7xAKQR36pWzxQug9P7S3Wo24PN9K5ioA8cKmCCh1PN9b6tk9Sdx96QoUgB2aMxPohSQh6TiHLbJ",
  "key26": "2nD2oWaNSvn35PudChmeDPGRGDqZkZuWVUwiDuMwfpqSTDHkZai5TvYSoV8fFytF4Rag7QhKkRvsGVCEaNurXCUq",
  "key27": "4JzKHt5SCt1zxQP76cgmF9ZNnqRVSqjV9EP7Lo2v4MgoooSrQpdNf5Z32BPikeKKYgrDega7xG1sJ6jGb5P6vtdN",
  "key28": "FbMYRQ6KwFiB8eecu48gwq8bMfoGjzWpFvsh19k13gxpnpym1hXt92eiqVBGTiYDxNpS2efiEQRRT4eFZwx5MLA",
  "key29": "4CxMivfhN5mSCNkNd9cDu61j6PZeeLfhRoyJNZGQs6dcmRRkB5uGFtDJu9CCKaj5v5p8TAxdth63K5hnyBhrCVYY",
  "key30": "4NNETNVWf8y1NdE3iBGDfj2orVgxNJc3vJDc7N1QNCCPuVmuJNPoDTNikaYcSJ4hF9KEamHGMT3BxoKGc4NpVshc",
  "key31": "o8T5CDBD1siES7cnfmgjYFcmeDFMxockzbu4VVDXtkEzG5RrbZxtCYynYpAMDE3Yt6A3xyXHMzBmgdaBKpfrzYw",
  "key32": "2Az2ym7KBbDn9tJuKnrskcmLLh5hscHpvpGH2wCx16QCTMDpRePCAFmuKr94gLSWdbNQocRSo44qAdNbNXNDNw22",
  "key33": "3u9REt338KGZLFGb8XHtcWM9MyTVJcvvKH4w1EqXu1VR3sY4aXENiNBHGZN9hwqb7aYLeSgyngJtM16ujKoKBCwC",
  "key34": "PkmAF28dhjqw1sZoKe7rMarn9i2H8DzNsRu7TjucQNsHgH72myHejvcju9cyp3gjh7ARe1d1fU3MsguWHVSiJef",
  "key35": "h5keQdwwmsFLeRY5MWtcXBiqoEuDEEkLiavT1sykZYFbJV991rrf2KDAxLRZSufoNUbJMmQqFt1uHEFMYQ8bL1Q",
  "key36": "3wsi3ctKfFiW3SHpofV99eSwmx2UaZ6zgextZ2AJhvR3b5tGvsPBEgWJo2piBcEv2JtcH2GzYMeGrN6DJXdfKFVY",
  "key37": "t83aN3ho3NW92BiMRcrfsGjJu57iU2mqn6WxQSHReZVhuYhAVhaoSAHPT4d9eEmZQEqN11XJV4Txd9eoRgeX5r9",
  "key38": "4cPeWPih9j1EH3rKtuLAggDFLYUaYkvu9cXX8SzQv16G7BZ7i9jt8Vd4JaC23ByLMYKDzu3m31cosSRNZEsQvp9e",
  "key39": "4iLUBGrC2o4PjbAeebD7pmmTgKGD5R1Swpfj2ezWxnikmqqrSGkvcrtYA2ougLCN1nbMEfpyorTXbDJZKzzGj9Sq",
  "key40": "5FcwRmihuekAdQExEYLZ94uxDRbrp2aBnqTkQPAchTBDUaNqUtCSsEwsQSaLnvmYzZyPbRDcDT9HiREfXtwGu9kB",
  "key41": "2zEJdizsMk3P6Z2TuFp6YnDaDMWscZS6kNq5vrBcmcP41PNGkcNjbd5dtucgzDNXmJ33mJPDLusJKCWeTLyi92bx",
  "key42": "2DxAZXNrqhZeLtARVvCXJfnthHKdGt2ZXqTz7oVLTerETnFtMkaPcBCtWSywqUyK7CZcz84XwKQutSLhDpLGjaBJ",
  "key43": "4JV4XjLaPZtFgUJyWvz1p1ByHrjMnKH7GFFsJU7CncGDsdBKPgiCn19ekeYktYQ4GJFGaZFNok4LH6oi2gx8NVj3",
  "key44": "56WXvUns966NkTTV2cwRGYDFiJa4AT7MHVKZXJfBreJpuPWw8RKz6GBvxVHDYozU3D4hU1LXGWGn9Fvr9EmJSMSQ",
  "key45": "2Xu9f6iJsVgjpmKEBUHbhNhJ1JZchjCPdtjJH7v3bztjTeapjwocrjoDCn2F1TrALEF5ueWxJhsAusFcHHDjH96c",
  "key46": "3bvrTZpvZ6DGzp4mSiaePxiLNEmi1pp5vHfLjdLRw5kfFQWusHM7nMtLNEfyU169TWkUhcsGNZBT85FzrqSPs3Xi",
  "key47": "3X2eeFRbM6gdpB5zs48DHexfk2EoNQFKnuDkPRsjUVsjohotvJQe6CqwEWJBe9cQcByX9dfKL6NQyx1KCngP9ubD",
  "key48": "5BoxSzz58jZE1UuyEUsUQFQSbCx8A63Nkp3L7wVLuizZ55MaFxMyebuFjjMqTntaaTtN7cvkc25onr8zXH8Ffgdb",
  "key49": "44HSuqc7JQWqDMscx8T3q4mDgMzvvuCeWD5pQ9Wfv3koEP2MpTw4HM1uCjJM2NBopqkP1nPxbBJi3nnv2uyCCQgu"
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
