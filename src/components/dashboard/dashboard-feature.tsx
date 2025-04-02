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
    "3sH1Xrzr3mGwmmSoRWaDJpGLzerjJBnstJRjqoUWdpg1TAWPcDt5MsUbPdPP75rD6W8Riq8eiR3b3VVH9JtuVmiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52zN26fU1VgFUwCzxwZL896uGh1BxvDE9pdFJ87jxx93kTQfS67KRW5iyDiotf2ny56L2EjH9qCRQCXn9wHMhev2",
  "key1": "471N4kG59yEQfxPoHsRfmvfzXhUAr7SYc3Mgng5osdZLgq3J5AVhkVDBW2N29eb7ibKmqvNimfkwRPTB54cYLjEF",
  "key2": "4BGj48a9jRYADP8Ctbb2LxFo8A9MoUC65gdnZvwgZnfEohiAKZM5ZvZ5h8pUwAHUsYecJhnZKvH4k37UVBmkdvyk",
  "key3": "2LxaseNgfi5T3DsycFTiKrHkb6jPGEi1SxPHNWSKZScmSae4NX4vVQwHNE4PKsYWV5NX9oGknKcA5sN7qLzQNmf4",
  "key4": "4k7m63rW7SUGhtwr23CdX7bMFassRX7e4j1WbDgLwwBbM9ohyJHVLQJwzgLiiTnRd8Kx4LVE6D42NtyNNc71yNiX",
  "key5": "66GVec1jyVwG8JdsZSqWBzidueNZHUWuaAWLpib2r9FEixAcjcnb4k8p44Pxmr3YZqURJY6STXvg7rUyzyeKLW9q",
  "key6": "2SjHFDQey7z14ZocqHy88UeNy71kdKF3KhfMtb6Hoa1Y6NjmphNarYiGRxbqeCFwsL38SzVUiVkSHNNk2EqrhX98",
  "key7": "4MZYMGDYwxnPm8AtANCe8fZUKaqargJmDwVjukjZyTM7zZnfMgibPMBo93uJQFRbr4X2rvs4mDPFv4xgy9VUHv5K",
  "key8": "2REYFmWCefH2oq87BFmjhQ4iL6yfFH9ANSDrhzwLdyBCoogPdp4eJw9J5F8daiB5HyvvuH1wVKFAb2ub2tvA7f6j",
  "key9": "CC7Qn25MeWoQdGkfCPVERNF1U9syYcsqTCPW6p1zSv79svNUe8SDmjC8hFoWbxbr7hBwiHTk4331PDzQoN8UfrT",
  "key10": "jLCVR5itnskcrJtXDQTwoJp5GxSkyW9gtzNN7Prv223infMdUGZncJnjQ7azgbX2PEHLg2PtCCjFR4hQJh87Y1Q",
  "key11": "d9t6qLwYbGhnAy4jZHPjrJcekdqxVd7ka8fqBsK8cS3L9NNNRGSa4TSUAn9maVvPfB6ffGFoTgsfjdwjnr4Wfht",
  "key12": "5DwRJPeKX7xd79isFSNdN3RG5tUqkhR2NfCvVJ2yk8Vrg8CBy4DcBut8kzDZkpNMeCdVxWa15jnm9Q8uDyAE9DQZ",
  "key13": "49sz5xKGh5Aei7ZWeQVbdLbA48WZSESbeEkPi2oA6BcY4zNQgH5jcBRdZRNJzZTD7AyWXKhWyN2GsCEBVB8t5Wg5",
  "key14": "TBogPsThbyk1wU5mJh5uF6nfxqoF16sCdPreTbZyiLZTBvhSBSfeN2d4Sdyo9KLiZoCawcvP6gDFr2F3hQLF9kq",
  "key15": "3byAVTqkC2AKX7xzuyEWt8mG33vpbkUCUePd3qguGeGV4ihK69NNbXbnXxY4Zc5pijCUmWuyx3eFHyakqYULS7Kk",
  "key16": "5GGNnwYfsABeNve19cF6MD4ZtDXsUfuCLyLR5aqiSM8Qtw4Mku6ye5KCWpUrPdY2PwCoU5Tts8KiNd9bBe1Vto6P",
  "key17": "4uC8gvWrXCgpxdfyoAygpCavJr16xbngSSdo4E6s38P92rycXwfFTw75xJsoL2rfqkXpW9hQeukkK1VX3v8qQd7e",
  "key18": "5bfoYf33Vus1V5qdyanRvncgWjmo1ZrpUxG2FjkmEStMxdpQdm1bfByA5pzaYvmhoyq2bEgDU5vGMXW8mtRTx1kS",
  "key19": "5pP4A8swp5geS12vQzR7chv2PE4kTgwTxRtMVo3mcwQhfaiVWgprT22ovrCWx42uQg7Lk6RY4DyiDyFQwYNCyF6N",
  "key20": "44baXMZP5npF9dTjikjm3pcohNFYT2JP9AZ5V3pkop51Wz3v3Sw4jzN6o1edNrkdmogqeKpjbTG1UFpbvMpA5TJy",
  "key21": "3Yxy2A7nJds6uzEmQ4ZbcAfnQKYLBkFLjfE6cf92qpV4A7yu8rACwL3RcC2v2S4wipXQ78zLP9WvP7eVbE4RmCFf",
  "key22": "Z8E2wFELPHwkvSR9V5f3GLMmsXKbJeDtWF2g1wyyFM2SVWn7NU81EjrbKYigWNPdZ8oxSavv26XAHuU2rpaCUST",
  "key23": "2cqoA8N8JWY1ZpA4dRjVfsH5zrNq1mb5tih4FKnBZt1VuxYrApRuZFWuoXkYpc1mQ2nz39A883Xpa4QwPvye4EUZ",
  "key24": "3WVLznxvoJqJ3Fhp2T1zi14n5QJnoWWbkrCGeTCoXhDkzhw6HjvjWH8c9NTNoQgoYw6JtJjEmvBLUEpHawFjS3UB",
  "key25": "iC6suLdHL47oUTDofDLV94oHufphkbvY8Zdi1p6bit72Q2pEX6URiiepZubjmvs2Liq3nPA2MuBdd6q2QzJBDgm",
  "key26": "5Q9fBzSz3zxG8opFe8cf48ZTXzT8xQgsVmeffizHpKukWfr95fQSYStzz7wCaYiQC2M4SVuMv3fC2ZWSQK4MZy6G",
  "key27": "2a5RWgCzcMLLPddxwASKyToVVkNGUAqS3gJMc5u7GpdMggiAJqqLcrTDxRrDUZaYbbpNfjSekd37xCpR6t7ceEL2",
  "key28": "51KHjhLSW2cW4fc4awvvrwNYWvUNJKDspa4Aej6FNkMmDimMteRifUnDavd3JF39HVZNfXV8Rxx17DDqN8Uu7oyu",
  "key29": "3Xm3xfxDuKXDMEZfWZF3WYWpiJ498aPo8c7PDPotbE2Y9abHNxoDF1Apor5igCjGCggcKzsFxYqEuf2KAgucyGxY",
  "key30": "4HyBFNjF7JzmixCuZpQpSrAF3N5zFUbdAKJGwHQh3E4k4HiHwjpmUVQ2TU8tNaRGUQyhBi2jbdUc3c1xtoAWX7pg",
  "key31": "25gZJnCF97M5j1tbhNNuGfucXY9psmE6bCobYEMsjpu1h15VSHSbsG6qH6jhKa4F77bY4PQTTyCp28piGNThyg9R",
  "key32": "3Ckm6mtee22bhLEQiHpc1Znb8iGbBNA8NgRv7adtbLCrqtucRqRXLC9TVYW3bgixxxvAyigViSvuiRx1xvmwPR7u",
  "key33": "3Uw5FomPm4kJWXfCT56rYo9PNjmushUdx8mDvZSqQeDHTNBAPAqgghVYM97g8AZywuS5XboSdNyTR7ketmAAZLA5",
  "key34": "BbKhLhprCuqEzUkhakJRhNHxxQeo3BEUEnxhikrwQfmcFUSsNkV1nKLivBZgnaFubEsV7eVkrx7xF9mZxZKAeEk",
  "key35": "4RBh69cN2VeC1B931S9U6C2JV1mvSmduuV3xnaXW58CER6GzUY3v4mKhurgdmFNa5dDGA8aozAXgjZteGkqSLvzN",
  "key36": "4Gdc66P7M3iAKqVdNpcMGXVZUrZ7y77V6cahR3eVbfq9ssWU9xMyQH8HM6CNp6pcPiUTibZ3WxVYCx8cjBK6o6tR",
  "key37": "31i2jTPYP3amnHnZWLG1eNutyLnudsKJ8eiwVn6UNmbmbJQjffjK3rGBA71nVttdQkaC1kxBKiaHFanaoT6jBwZr",
  "key38": "5vFrmGve9AURTkHQxfg9jvSWMMsBp6gY6GX8Qq2xmaeMA3wa4iNwheXbUoT1brfcm5crLY5hxfR4cYi5wtqy51Fa"
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
