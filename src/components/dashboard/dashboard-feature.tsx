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
    "4pi5Zeeb4bDbRv72bSz6Fjw2dXRrKakehaHqszMEdVibwLdntBtMUT5rCp64RJLphFeSBohJKjUvXJg4AAfki9bC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SkGUtnwyBskSeLYcxRzh6BWr584N4mdctvJ9aVDagXTNGUALes5qwT379t4KW75ydkNXXVLwr49sT49ypBarrXW",
  "key1": "5xLqvMJJmCuQ4oGtNQ7xyyTQAji2My6U5KTrcfCXUmjPnunPfSTRFNFHCSvKXuJZwUZ6NYe5hXYc4h2jmBUNGgiU",
  "key2": "2Sv1pqMiAQiygcogimvkicSkg12VK5HorqwudfpJF6WAMhhYT1um5e5vhB7uhwe9nzSV8qHsJcsMESdaXvvEKSHo",
  "key3": "4gopCPNhyxE31khtQzSNT2ZwLFKoHgFNPayw82PJ4x2NjNPbvvT1dzRbRUFAaEsNj3Nh6GkycdYuUGjtawZeV9jS",
  "key4": "4ti6sAfzz83M7ctvmfN6mTxjgm5zFtQTrfszuoRprj3E2fQsCmxAPSLi5JtAnpWUeDPtUF9WYa9c98dgeUg63euh",
  "key5": "4hC4b4hVzB9DAmD2FPivdHv5gjWkCLXxsfGPWn5nacX2xi2DXZ3MZp2TV5ZDGLNW4f3Z3onzZLbm6twMX5N6SZgc",
  "key6": "BQ3nTbB28djvgnyxtMuCz7bnrTUuBkjiewrU5mvjwuAqngyivMxmtpctGcemdvhNaysWwSpSb6p482QZvja2x1B",
  "key7": "3vPGAK34pGKR6vw1rqoeShSmqeZZYvugK4jk2AZk53Fp3KKc4C2Wfj85WNN1UaSume89TsP8GQaL6bBifeH26CKo",
  "key8": "2mNM1dJqQW1Xw7eQf5bAUv4uRApKeJXUhGms7SVcXxyb5dk5uxP2DEuaD3vA2AjwnN5yjzgPMqRfgPod4kXPoPXq",
  "key9": "2xN2rgBu6sRmAmKX9LAK3nsu2qVWCVijMSMjK3ECRzFfpJTMFUdHqN2NvpDWq8QMgZqd3j7VHFkydrTvPoS7WTFo",
  "key10": "2xATPxBDsu9S7wxXD6TpaJ1BSJZXcqnqBQgYCgy4LW5bU55fjBiEgNZCdKRu7nVNgTZq3jFCVo3G1ayhGGWdUt9B",
  "key11": "5ocqUumXZVWWU1c7UMDvoiq2Gtue8dfGv4BjFGs9bm8kFKqEEfas33FWEMTgVTWoAeXEN93pghKmNyRExTjS7gtF",
  "key12": "oT2fLdvs1WPCBCrb1Y2RwnuqeGg2prYSnu3rpSULtKBui339gzWexTw5U1NgnU9qJniPey9sQAfRQbQY7eKrLin",
  "key13": "2w3WKvYxkXnigfMdSGdeLUHMoyQtSgkDrUkRuh7zYAiBZ1xwiuvUiBnUvi8RyDTzeGzcAqqgUHELqvMpaiswDYAW",
  "key14": "61hp1yFWHfUHEhbj1mcTyNmSUVpZN9g9NveLjdxUFfxWCZFdLcavCNXmMPxUy5hKBr69rio42eMYsyRRUwbpfHfw",
  "key15": "3vaJB6ANr5PPjiCLrtJJZU94ZwbQ9HWeDGAvRhtqL3PbAx3H5toygQcejfxwhMKgVaofgvrd9KgCgcnJgYPWYba2",
  "key16": "3JLDov9KYNJY9xoAeEosNq9H9PELJ4w3oZ3K7K1CyunZiwsFYXxXr8xDjjFQcrotxMo9599fZuzdiY4xhsG3KiMK",
  "key17": "jsoxnVEGZuu5DzsxHKTJbww6RUfSgCjAjdCd3E4exmJrJ9BAYf6tdV2FkTDM4P2xNty6tL1onfaXkaPHFzFhxDi",
  "key18": "5NdJmx7skmoQvN7aGx1xnNvQxZzQ8suw5XB5zbbN1pBJLV95KuMw9VW94fohzGePEb18zyy3KxF8aEu61VphLjsy",
  "key19": "37pN5FhVmkMbBjgcCHCCSxxdYkzxGmaaN8zg8a1ALQDZ8FZpLjjA3iPGhVSAJDfiuPTBjRPhZUMDJF3nC2LruWwF",
  "key20": "s5425dcXZhv4bM7GbKduV2p2i4T2jsNq9Ud64SP9wgaL4bzKsrCrbAyLVpCctvp2EVgp9E8vzHAUiUCT4fPaPvC",
  "key21": "5n59bDNKDL442M8BRS5TNZGPbFxj7vKR3vsRC7s6jNHHLa7JbU1C18kZ1x8pKr19hZXni6TbAAbcb7FZebWasjJn",
  "key22": "vtwx63RV8TFLCFcHdbKVww3Ufq2LJ4N5CiuUMee1ct6pkieFtLuLnVvBuJRXsmzw9ieeSTXZKu94asH2cwfnNpi",
  "key23": "3aXQGTkkwxHdyDfv3sAPJR85DHmLU3RBSftjCfbHRr4ZgtnRq1ZVS8A6WiHg2Qm3iBgN7ka3EmbuwEFx8JQDVsNa",
  "key24": "4QSjtKGFoQbq38BuraxgCP4Z8ySeHUggcNpMRsf6HHcbuW9taSq131LgsTFWsqpp6vKNAjZzUN3oK7UfLtMFEeBA",
  "key25": "4Zx59HuYLXa1apALzidGUUSd73QrBo1fBsXbQd8haJe5tga9chNNDd7L2WxLMiFwt3r17m6Hzfx9g4yACbb7vUu8",
  "key26": "4pgfbU2S9i41pMTKRYt9FKs8MczvYZ8KEY4HZcAi9smLVAdKESQ4fD2Mg1V4QGUb9vFfJoBBKHcHhjGrSSQJs9e2",
  "key27": "2wdHah27MHZn4uoCoDo2hPU1LtmMJ4qjidTXrYvWwWdatjJHKU8XA9BZoSZFzT3EDypMxa5SC6o4aL3Wm3PvYFkU",
  "key28": "47eHbWDGen3nnYzHTSc5eretJygsk63qb6XBvCdQpXMjquVyvMftVNAC9FCPZ2z22dBxbExMNxAkvm5mn1LpSbxp",
  "key29": "4nRKuXhb1aj87eyK24XE1APfTTM74Z8WhSPRX5xmgU9DjWn47MmuHR3rd7C4fWtBMa81WV2E386kuL3apTs73A6t",
  "key30": "3p4wdnbq5gRiNURfQYRqd9CortMULAHoLv4K7y5vjZw1L6Ckip8cQ8J2utj9ZanH1BGjrU1qJ2cVFwfNPR9U56eD",
  "key31": "2rQaYXg5ERLoBVrB3yrvVh9LbutjyaGNA4u2EfScy1UpVK4NFTfg1PaX2XapysjUWNaKiMxyN9WwxSiENcucRuEj",
  "key32": "5jcqSdjgU92bUbceMrHgGJf9EsrdqpN3UULTsMFMHH7hsnwxz7zLKJUYJuxPmo6Z55jjdJvokmSeFQ2ZKrAKn3YE",
  "key33": "4hTVYUvwjYPUEcDHhu1pTbQQEZQHx1xRGh1K4fvy6rbRm63V7aCDzzk3RoSBBEuMmAr3HCLQfFvqhFpAxnE9y9NT",
  "key34": "2WqMUydFFsEdxgjsrHbgL93ogXornu8Q2RwqN8MzrvLvRSJYVbja1cTh2QMNSirzFMeFgwPMcT2CM5yWdeqgspVr",
  "key35": "3q1ajmgZNP6fnHBW3Bw35Dh6j5LLnUHWcT43bTUSwgCcNjDEUxVZpMy6yBpCjyQPFnuD8b4CAF91iX6xRBLgCu4",
  "key36": "uWCFXnatTLi7yzvM5wcDkx5oZz51EMPTwp9D4DaexMg7DrUHvUbzshvXJgobuQG35mruKtEan3FZSuYgbsxp5DL",
  "key37": "2cLRWU3RWgRV84RtFApmZZLq39h6vdgX8q8vGHbHrH4NJWRKMmgXNk7ccseCmvShuKRMD1i17FpBgB4HeEthh8GU",
  "key38": "CNvuLRBhoAUPSCgx2oVzSGV8QUey4yJ1HCM6hMz15V7BSnP36fCK4x6oxau3MKuDJLGkQzsywmhKWXCLrrphxc2",
  "key39": "48qmq323GYRcfPwHAicztRSSVTmGjTw1LHnerJr1xu3nc9PS2kfAq8baUcN2BbGWFToarNEdv88X4C7AieXtp1YH",
  "key40": "4yydRaUWw1YN9ZBtK9c91onXKTCXndZqB8PiWtFaycaqU55e8mqaJD6QvnwZ8Kj8oRkDhekwhF2PfL1PcTod25Em",
  "key41": "5CAsAxECQeENVWkjf4Px2zvJVBY7xSJ3MveLwwdJy5eM4c7Gz27CS7MotoCqqHrYeZ3m1yUf8hbLeXW6uVqTAPSX",
  "key42": "5kYqYRmZ7r1ey7rpnRQoBLt41wrP8z7NSHHuJQ1HRUdZpvHYJdKodXH8HDb4HPnVw5o6N5CmShgTsTroE8Pq3ppE",
  "key43": "5zJ5ndgqmHKuR8NZCsdD9LaPTc7aKqUyPuRvZYDFogTFxvg5uoVGqNQ6VUprbDitK5HJKPP759cZg2FGh93ZFPhj",
  "key44": "kcRPQnJEunt4qoyB6eFvpqyJztoz5wVxqi9YShXnaeDQKTSsDynbMKpDtZZnv4Dd3vs9pxQaoAWvY9JiwSBvjMN",
  "key45": "4JaKuK5FCHSBDSU2WuFo7Bx2zB2TfGtCEP7iSZgHCnbw4UgDcr3BZMi9jRnPnVTpt99quPgnwQ9jD8d7jWtGKmLa",
  "key46": "55YeSFT2vTbULqYK4qB4vQgEf3SxHnAESnt8U7XRFo1asDKEDoy77S4Yduiz8cxnu47y1wrennvzasfYEVvpgGzc",
  "key47": "Ho2W9BN2cYyYXYEA5T8HHGqrxoBGBp6T4QWoGD17rMc4CVSH7njxvKCbvNwnryzmAQjp1MHSsJuA9H316do8m7o",
  "key48": "WPbrxvAF4ikSmErCTgYv1Dd3LiMrE2JxnvwgwyxWMzSZeAJgdr5ayC3uhzruCbjuHQmqyhiSWUktceHi73i6sgt"
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
