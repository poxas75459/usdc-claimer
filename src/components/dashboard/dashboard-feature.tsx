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
    "5q6t8JdVh1pYwfmgkq6Egz3YQTTi7riupHjYqURXQbTB8ktuDWRgoPPTYdJCf5ShvUwELFgDZsATvqQGsx1hmvJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iBut1YWnsKzhBmtRW4VpMLiPqhR7Frxvbb9zkuxxVQyNYQi3dvP8mo1yHeKuV8kG2U1FoHdXByFGXxBe8im8fvE",
  "key1": "2TwLTow4y3vZ7ZgYhtYbwH5L5BpbasoGHaacS4tjFQikgQx1fdbCWDV9T2QAMu7BBydVN9Gm33b5oD4K66WdVnem",
  "key2": "39FcjPc4QdWhYyc6dh3NFemszpxZaNBHhgwpYevMmPaUh8AfFh6n98aLoeNDSHLHyAfyDC9xpw6Wt8Rt75E4nvVm",
  "key3": "rvWN9HAYQpS4DFmLLxBkEhnUXdTVGP9TvJE6L6rytUydKG5FGM1juHkYY2hPx8bp6w4gAmgUkob71tLx6FDJbE8",
  "key4": "4TGVbmfFqQvehT5ZQxT5p4zzyC4s6qMm9EtgqCtXbU1jqyfPgazMYuqzFyMJhR11sneFtuN9Ygcn79FTvb8bovWL",
  "key5": "4rBpU14zFXybJCbr6s3kag49MT5tTFX1w5vYH5yqMqtuSPUQ1TrUeJi31uKunFYbMxCn4xctQvdTqMzrj9yneB33",
  "key6": "4ApBe15cD2AC5WGj61v3KCDxHSsHgn9Y3eyXoavggG5u9VegwKnPHgzLue21pNam85kM9w34sFUypFyBmUM9yYeN",
  "key7": "3kVMrHivAZYE4tfynEW2aUxsqqAp18qVNkNkWq9tjuKUmBgBHJTYcshPV5WcfBDD14aoWMEUP6CbD5x1YNYDs4w8",
  "key8": "34UZgwe3f9csekMom7zKdbX7JcmvCHAJBte1mJdGCJrD6LS6FQU1h1vzrQ2xkmoadF2yA6einU1ANm8F7sNs9fx5",
  "key9": "4wW4ma9s2SQoQCFjKxGwK8rxhWD56AB1c2xJavsiXWp6rwmubYoQ1DvuKo5LqrDZfVgUvgxLTkA7XUd4RRPjXzHd",
  "key10": "KEQizECUVBrfJ1Nnrs3A11tbpRFvX4gE6Zdbq5sBAGYPhfFQt67ipjiLFT7EdCeUMR5DbgDHoHus36PtFF6zu3j",
  "key11": "5y4AQFjajrfjU9oP91UU3gU54yE5NWeagTRRFnawwd5tBYbtDtX3GXM2sfBMQmHe9kJGaL61qiC8MYWgVAVvD7Dg",
  "key12": "2SQ6jwcCWhQmsxZw55CehozAii5Ae37fuGwJSxhHwU6AsQhriERmayY3zt5NHkiAjbb6ndn3eFXKQ1S5P14ASjuh",
  "key13": "41urFAiJuhec8mLsRxMdy1puKWWut4pzRmUadRuio1skGyGRjyBGZrYi8f4jddVru8FTKe92c2y7bUCPXMh7sozy",
  "key14": "caLKdutSb17Xviw1CrSgLUiWhAtW8AJ9Tz4TBBpmqK4sfZXdhkuSmkNjpoS8MQc1xCTT5XMDsyvaYGCWAJjvGpA",
  "key15": "2M5TUr1PdRVJorjt9TDePsKJ9YDshtSAm1MQ44rq7RCP8Yty7B8A5bbFyBWXy1gFWZZGRw1XGsiK8c4AcXY9gQsP",
  "key16": "61PVRJ23fvZ4oZi3it8geqGV2NYAK6oZkCLgNL85ADMdabihpvfkvm5SMBq7ey14Dr1zJ7q5LUYcWHht14v8TNzt",
  "key17": "2EtLH8USBJM9kqvJsm97sHAFCRggasK9HeUU9JF73zGXsKYZS6fXtwngqfMCaJBF6mD2mAEhk9yahQQAioqXZSP8",
  "key18": "oBkd1jKHWs9y2ni5xmoYcB88i92yjnU3Se3o7fJSLbmAkpsgnvqpXXesPnBgCoaYPKhAv4bAJH2tyY4bi9NAaF3",
  "key19": "3eeq67u9D6tuZWc6wJbmu88LRCESQt1Ttx4RxrHgpPMg4KLWfNRhU5FNcZCFYQJgiQGuuLY2gNfYvqqG8EB45H1x",
  "key20": "3qnCKAxwyp2zkNkpLSP43Wt8zWEP8AosTFW6HvmxWaQ8mt9JuyGvFiSHsFMRp231JbRgemw4CHXLU5mvoSM2ZaJy",
  "key21": "2a9PTwAbCP6CpxdAdKehG12rJ9HxTRZgCxM6deNqataDoaj5uT84KVorch2s2uRG2SRhPyVrK4nzsbbHAbxHYFV8",
  "key22": "2j2yLgFDmoaUeZdhRPys4XDabtSL4tFDMPdbVufc6eNXppwrv4MzvtTNem7oTyMUGW71qkuaKQ52skfYTgoCxeAA",
  "key23": "5XJdsz3bhy13tEtDXVf6qyoAa7w4318foMMsYGBk4XHYUVAnVj1HZikGWDQDjd3KzDWR3EPEfney26EZ6rbSpG3p",
  "key24": "4GcQ69mKdJv82rRa3zHMQU97fujML9p5MioRojF86tE9pXhyB2szCWASHcbpYjwgSmzqa3nsQkUyQd2u96X67QZg",
  "key25": "57wKedYDA9HyZMmWjUGbSe4d6wd5QVPmFp9ZzidgPQJowp6NXuZjxUtQS8mBCq78rSC5XAaUmQ5hgWmWXp4wygsZ",
  "key26": "5cr5hZpWBGGJTusmEsMgpEQVZf6uPZJ51DPSeTN8aLAD1LDdndBsg2Xt48iSnwbGoHZGFqWrkptjEKyEDLykCpFb",
  "key27": "67ddBse5RiTCdeszuXp5wpzVWsMCC8GdJBLYvrSgtHkEptxGwBsztuQtvjHGP2RSRRhsM4kT8WzE1Jq3hehD1P6U",
  "key28": "4kaS2HpcdM9HPkbar5zmbYna7gsdAuC5nHrVeSBBvA8dbm7oPxLbWxZ2BTCSf5DmcUYr7pnMQXUm7mWVWeJ4CsWv",
  "key29": "48CPLWap75cT8B9fTc2omc5sZB5KD45GhByntb9pEx6BA3qGQSAokvdybbMZqVHPNhwTzbEyaTtAHyB33NbPfk4t",
  "key30": "4oTePAgqRD8N3HAEPgMaznMmHwxp39gYw9JKJkLHtrQB6cVDLNgL6gtiRu7aWbDGGRKSpj3CRNrbCTaZUPm4dBAJ",
  "key31": "4dmuMRkhYzigTC6zdXTayXdVR9LmWeQRcxjy6brenCkpdQyaDs83Ex5hwuqVTFm2VjdNmigG27cFoGH1nM8aNUXZ",
  "key32": "2RW53pra88RdLZYg3bMw1rY8TnNg3t2Yj2EHEjsgAc15aq3MX3qzpaAJ2ZJ4ykJxsMGiev1KupMtcxuB89bFNE1H",
  "key33": "5XJFpr1exQBAESZv4UjUU4fhMAoMQD7EpkXF3wbpGLmptXtkoy8XCUveRKewZwaD793vjR6qv4gQAiiwFM6TpNkd",
  "key34": "48BxaEQ6ro6A588C5pBptpLrKAxPqcMYz9GJPXJMdYviT1HgzdNetAhiaAJsCNdRDg4h7Pb9GHkzjjtuH3XVv2iF",
  "key35": "66KChhQwsegxWd6BRyRHc8HnDPuJAN3prBBzBki6cW6EruUxvYtUnoreRsTtmdCrwyMDPhuFgWWTFSKsWGAg1C6G",
  "key36": "5XzVtEK2BMtQZENAAn59wPQT3KGe74i7nHpmUkkw8PgHn7y3X7V39bZDCPARiFV5ihcG24kSXJ4rsmejKGiuKqvo",
  "key37": "4WF79tyoJoqK2yNLe94oZuMZMWTrbegkMNiaoMfuqLrJeMyPKUWHRpKmFSyuyfRJCjjbrP87wvjYvMCtPE5RJnzP",
  "key38": "zoQk5aAqEcxLRCt2wxb8Fttn9j4NTuNR3X4acNP9XKAx1A7JHJSMVNmSVcGB7tEmGFhMsbKgP7ZT6AKF2vbeh85",
  "key39": "toV5fHWEGrh6spL6HA26H3CX1kdVUagQPFgZCkyjy8ay5Uai3bzS8JFfgbWoh3gf89kotdnR26NeBv2yF1QnfWL",
  "key40": "2KPy7NXg3TxaSMXqCiBWydaK433ss1qFmZnbe8U65GdBTZF3TPT92X4nFsZp7E9Bp6gg5TYdf4Z3knzpQfnTJtAG",
  "key41": "3Mf15qPiqXTkhv1hPzCxmEKEiwYmsTbnbWxyAamWXKZGGK1JpieTWUvoTgxjCdTvGStTKjRzbvZwp157AdtB5Tq6",
  "key42": "44T7kwneY7GmTkYk19wtxyiSUFVSoWmaDABZPjDm3o1VufB7jQsH9DyoYnL8BhWpSu4MWTQUByQoGKMErfyh7vYB",
  "key43": "4wpZSfc2kEhXDPUfxbUgSuvUFaMRnjwVH86rUnC7g9ksKqMWFthrAmC4UkzXnp7MVXkNutP5UA9BATTEhJ5aW6CE",
  "key44": "3H6E2hFmQny7mZXo8m35yuC7GtM3MCTR6dnakB7MitAQfCEejbcaC7NifiAwknkfk34DNzDBuiyTuEXaTgavcm5R",
  "key45": "53Rvq5jRTULnjYRjbcpUWNFJHKJTSEL3SNtfX5hHnHTcWrvbVxvyQFAgKuizVJ8rZdhcKyKVCyWty5GCfMfxkWQ8",
  "key46": "3cGAqDNt68EGBvQwoX9VT49xmYNJHU5Vmf4JoApaXMcusB5SqEx65xWMqAe1yjQLiFu2sw7Tj26KcKecwni5dGtw",
  "key47": "28qJQPLwLMgZSgfGZtCbScKDLfsAaNNwp3AmTuZH1amquNCQN3qYygGxCh3bHNRU3iBXjk1hzRzNCR3oVNkrmdWj"
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
