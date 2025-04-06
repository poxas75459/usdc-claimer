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
    "4Cayz1DEtDSLcWj2q1EXNeykm59nKsQCe5rVYzDtaCP1cGWNBc3r8cY79LwZY8X3NDWhgmJdEj1R8qjAh4Cto6xs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RJKz13ULLekGgXrejd4shbF93zi947e3rF2T8MDnsRaTJeGwyVVkdicVU43MggQKogecSUhXgi9sFfS7QxC9ys9",
  "key1": "2GZyer2G5neFAQu99gCsLJCFuZ95f5JZqpXuuhnXR6Lxa7GHQkRGus6UoBUmdjkv2NqpGrzZqzp4YFUawe2S2onJ",
  "key2": "4bMgEWaMNdyUP8ZErfXvcHNUWkmY1mw9dZMnw9p4WFfpMAqrv3HvwLJM4X4Vj3WtbYsFCkxdCMxxaqF6Qg5f3Q5f",
  "key3": "2oRoQkkEqF6APZq6GXy1PTAj45rfEFtbY3hH4i2RixFCh6riMRLN68GwdU5m2vLmixdmaDFN7k6dqFei6qZsvRwB",
  "key4": "4XxBhEfTimLdBQ3Td2CEJD5WpB2nULABxwxwCq5Cee9GAbVWfuVjqs9QdrEM1KUUAv8hsv2TF7o6Fh6eiCWCLa2b",
  "key5": "349QJi6X1vKt2if2khCkKXPf3tB1TkDHUJT9HyYnQMP2SGcPJ3v7ymE1tzRhTsQcj1HM7wD15fz1ikjdi7hzQDka",
  "key6": "4HWcnZsZtyT84nf5JtNoaA6u4KL8GBakW3Lf5ndS2y4p1DBchFLREcjAvL8aSPeRyzppizwaNwKcuq1YnMVikuar",
  "key7": "3hSmQAKxPE7obETqmdSmwtdFx3ePuvjMNuseKj9BzqCb2a15sGWEm9SVCJyX99Cfa56WgpKyzKofVdwRbLbfGhjE",
  "key8": "4bCx596h4iV3cTzjDcGuhwELtSGPENjQwa3r9euaH1LpRL9FGDXGmGmNH4qpgVQNiGFG1E641WJq4Lf5WFAgVzUc",
  "key9": "5x5axvx64vxXwyyNNh3kHfR9ikD3mTDWQTQ5CDUW8AG9nXYF4CwTsArV5upLeEmemB1bmV3HDnCMFMRSpHn1vbCS",
  "key10": "3WLNQJFtbEKDvZxSbXdvBBq3PYJFD7nGaVvX8ZXYEwAzdwaqy3TirU9ZZGY8vJqVxpcVSS3nbQw2aYd7KXHWMBh7",
  "key11": "359VCi6kMUopyQWSuuREtFe4LaMrDZ7QHgJiHwxqqShLwbMntrATA2iP7mLfu7iCZUE7zg5yRk5eMYbsgfFsX5YF",
  "key12": "5wqqy6RppRHyBzU61QcQgGZgvVjxYnjQxMBqFLM8YU7E9QybKKRMZaygKKvYUMcDszeBkMzMgqJWioHbNUq2zzRE",
  "key13": "3F9GGiPYTK6utMuHaw8Awvg1F2UrRBeTBr1Zqj9TEf5vf3nj9bBbziwz83Nf4v9feQWc2AWGrc192u4qKQ47w1xD",
  "key14": "22i727pyZKFSyLn19hRK6GaEfiveBzuJXBcNMdQjNEX8CyUicTrBuzd31UsJuAxWw1Mazdo6gnabZYSGhuqxm9Tg",
  "key15": "4rFEZhvCw9YMmgB929MQ3QxfVAJUGeWpnhkdfW6twm4eJfTRJ916QeHMzLZnCFDjvo5j17d3uPGuXffhTDwPcMeh",
  "key16": "38vnrTN5gN2iSUimpjoueknGRgjaByDu3pozQceQbFovwfEvuVqszmZZxrThTipD4txoJtAncCZDgHc7q6eYW8Va",
  "key17": "4z1rnJv7RiKT83pzKm1AvEadoLgg62xraWeiKKReT1oASwSKv6HaVs8H5R8euspeYKbSqkAQ1Gck7KPPe1vmxDEC",
  "key18": "3ikusJU2E6fSpZRgMrKRLUqtdJFoGRtGNfk1TqgDKxKCXvvRmfhZsdWbgKgwTHwbFY4U4yDTYkXWSGwTS6C6nXeM",
  "key19": "X85ysC1GSxHg2st5Gsiyx8z5KdfsmGdE7xbsh3pHgueJoELZf4wsdopVm6uC68Yo9j4T62npQVXgQz2Ck4VHh5X",
  "key20": "5v2FvCnJPdMfW4kQF1YfcWKNP8w8ttNLmTw9qxYRATKdmQv4C3hNwGCUmKDChGdfCRdSehzJqpTqRDNuFjBa4Dk8",
  "key21": "3ydSNaRNhpiEAsfePYd495CuVq2jRzeHLJMbVWrwwvUzjDm65z3hWhJoGHUS8kBiodxEyoqGKzaDTZRG1erh26Au",
  "key22": "5zNNLbNNYZdcy2FTMmkqznayKNdmQ45k4kB4qavuK2GJfNVTME3ubFpLzuwroh9WoZb1nPLjeebvRVVqNvPQtQoJ",
  "key23": "4vphVsZg4YTLrLkoowZtSE7ASiCDcJFRbuEt6AxzXP1axVf2HrztikLWJe6yVDrpbzXFbxYpjs4hC6uGut6KewBy",
  "key24": "7u5NsXbjnM2XX34v1dTkGWHXZwgTeWP5iBSticbRhDXU6itUYUMqs8wqLiPKit5evzDbBCyEzVJa5rQh1LWVxwR",
  "key25": "32Rjo9S2mqUAGeZuZBYceGKsZsGRjbUxJmMLK3DPdXA56ZSbKvFATndTKduXU1aDUZM1J7wULdUnkXmvsvmDHx7r",
  "key26": "63ncQgebm1geD3SkCAKZjBgXrKjRqp2G7k865vdK3Hf8eW59bL1bHF3DDDN3pY2bL48ZLmzkYiK1T4WPCFkPcK53",
  "key27": "SAicytoP5LVE988SMyLED6q7j5HvSY5KNrFYyu4aejCqqcwhFjN4gjgzKNf4357qGn3XCxxepUnDbdZxVzd63ZR",
  "key28": "2ivnz8NfZQSeXJzrC6UcTdPkQUFFrZc5yfQhVFb6ocWVXTiyGyFU7DLRtPTfambJ6xUHSL8spn7iouij2WFrFizM",
  "key29": "3jzPgHoTCsiZ1M9brXCLdg2Tnhs9PugDGWo9hcUDCkra9pKovnWmdAnaJYWVRQzJitBakvcyqazofCBLEqmBPdHE",
  "key30": "5urUn6uJQCukfb99EqyrZ2tTzKfNFVpWTj9beoQETW1PZsFC7YCSh4cvzdb249dR7Upsw9DcEVMbYq3c8opLhzwX",
  "key31": "3c1HCpgWAuMKvKHS1UpNTGfGZ2jjNRPcCTc3HBYkaPettA7CJdHDxHrhESQB3DB4tXqMHHxKsa44LYQL8z91bgwz",
  "key32": "2A8kFBiUUqgSDsY4vQNkLMLEGXgPzNBHSLZ2Z76DRVvb42rYSS8hrRCvHYbf7c97zU3VkydzpQAXHVnLeeMhkRG9",
  "key33": "2N8gaNFu3EKBttfs7s7uXbjTzUaZ7ctetBHAQsnjjq1JuNAAHgDi1oTC2VkNwq9Fk1oDzh9idnChsgSDLhCwEn8x",
  "key34": "HtCgSGKXKxmLLYJ8xMDGJFXTJgCUZ96rwHA7omyNKzEdekh4grAyKr2XtPZgDLFVRKg1687q9o2ToswyZoGDnN8",
  "key35": "3XHNQpkjguoyk5XQBgbFKM9YQvhDrbsxhzrqeJwF3Swk285ChmEy8ipUVEBuLqP2iZRj28iRayQUCt8gDmcNa422",
  "key36": "49k6EAxFn8VKZQJLmpBbVrn9WA27r5wMUVCfzEb7J7KjcBLQKtYhbVmzgasxo754BbAG9EztgEDTF7PSvV1XYMEc",
  "key37": "tukpWGtjXdrsHq8CCfsadcj4RPwPgDMUkmgxZduqn94kekeLG7TV76mxuxjamJrCSyz6WoppJyGK8VB6hQkMLys",
  "key38": "4rRWjuqy43L5ySzr5NB39ptaj4WruGrqYw35KqY1SWZiKTTwCYhgyM837acCAuwqj6mcnNd2ozR98GMZyUEHuogN",
  "key39": "3gRU3CcbMzvENRMzCaE4yacH6s52sSWQeCTFLpHhfGfCFbkz4TpdKtbMhRye8Lyao3tZay56vbnu9PdWemURTqu7",
  "key40": "4j3PBEdNkDBgj4RRoDyDjkDcqg196fik7zcGxPxaXejp8UzqRUSPRjsBTNezH19EniUyGBV3USk4i6VR8pPysR79",
  "key41": "3Cv4NZC2pS87Wda7FCKBW6PuzxLoHAfgjtxA96izu6Fe8HxMs9jEMmXM5fN6o49Ugxa4S6PkTAPWqqDdg5f3bwq3"
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
