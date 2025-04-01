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
    "5nLbNKx3ARuKCAjtUkTY86BzvfRNrfPEd2JnXbfimat46F9mBx1SF1nctFY6W8xxeu6xUNtQUpFxq4boqMB755G9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d4Xyiwkq9rqU3GL1m87onzWPNMN51vwRVMrLL1SWVPjXAFC5zPL8CNaFtYB49DzNnoQYHqXwJHr9UHzjvyMnza2",
  "key1": "2qC8YTGomuuM1UCpj2LGTAueGyvDgD7sGUKYEQtk15FkSYHLZRW2XLY13TiAJr1XGQn4ZacTcMf6jY8vGaCDAG4q",
  "key2": "4nT17dGzW3w8uGLyxTyd3sB54CG1Zae7xvhofdnnZgBL9NJnaK58ZW5tBYdcjwtvzab7L4MNhER3FdLotKALmdB8",
  "key3": "5oRigaqBGhhjP5yFyg4ZsKHVAHiFRC4bB4afdZWgU9ed2kCBUtGUsUSo7guazAM5tiByb9ZjcuiZo2usRjS2qwDj",
  "key4": "ZenRspUxJt4BHNHU4o9EAzvN88DxWXDzGSJaEF8npUVwkivzzTTHJHgPKzopVSNa5okF6N861eA1NJqeKVuQGFy",
  "key5": "3Z6tAKj2aJ7QC6ZtCUwr711WHu4j6CzmgXYG1jf4BQK5CCcjhARNuzoWdRbu8hPtw87BanMe89Pv8yqwWnmcvitJ",
  "key6": "55NHPzUvb8P6P7qyxme5drRSvhiK28i44B4JLP82RGhNSpHB86EV39sJdz5k7PaxJhAqsuR83hEy26VetHtmrhcr",
  "key7": "4nEFn8KZ8XWgiEvmrozTwiukDAT1g7kpYzEqtk56fGHP1rReTykKYdmiZC2Rp8Y7yrR7J99wtszchiFTvLQSgaXV",
  "key8": "LgkmDAMq4637kJ3DxWrDbnLPmZiMP4Pj1UT5LicmA5yepZtp6J57zNHbegzmrcmELBV7QWK2Y5QXuG5foNZYWLb",
  "key9": "2AMfqGWUZv1fwpDSyvryzdumonwU3hf5JzEk5nYPiD8NBanijvtfBssr7G3DsWnpo85Kqskihq1YmFY814qytRZQ",
  "key10": "2YXFXSfameGrxx4eRCmZLGXG4QNBJPBFhQfFfFzQTYEy9iee3kCCAXU43btEgAkhChKdaK7z3pAigbJ5My8x2bme",
  "key11": "2rtfusSrXxjBKo4gV1vDkwyyQqBfEgetdtEmdLN5EidLxYTYsyD8yDf7ZYJsNx9SodLx8yXNGABHV6duouYqB6S7",
  "key12": "j3swLPFMrnjXgsEp73u294Cou1iDZQFjUhmaYTcDktW4EMSKPWcVx4WjS25ksoxv9vuzJUZHyXe3rGe9WR9xkPV",
  "key13": "4vhD7LAQWfmVC7jtGpLEBuWn7UVryDoWrMWdnfFZ2aDuip6k59ZLQiWr9qF7hr7RfraWEmu1rrQWiBv4s33uyear",
  "key14": "4JWra7ZtX6L3mM8sjJFZnxdygq5VdnPpa8GorLEvwuLu2aZMhTrREEHL5VN9kvXxCakrA5MJEweofMhrMc9hdgqL",
  "key15": "4Ki1EKnQWsmdHxBpJTXNsuaHn8qegdcm6vvUZgAEbUb8gSRgNbgZ8qguYBSoAdjSuSgXVjsurMBuGssgcGGuAhSc",
  "key16": "2zJeuroTjLXxo6ycZqzhN1eWdGkCfXfeH1q5V5qo4evh1viQUitYG5mZZGePtyPbSAKSouv9rvaTLe9mqDqL5n7s",
  "key17": "2LusoM2jGxaBCmucHWU8HVMtzp4vbpbNsYV8qXvGDVc88adtDATaRDPDzT1ZJhnWMxdoSN83KmBvZSngvyrEaGsv",
  "key18": "46dzmCSrow31GsGiTWySH7Dfv2QTBFPAX1AKfRZ7eFjVbS1XErHbH3pY8HS29vVhuXMPA2LohU4dUqn2xthBv91j",
  "key19": "3X3uPgV4xK3CpHHsKamZuzNX1nj6FBS9kihtQrwkRK3oZBBH62hF4juycW8T2R7fGRVJ9JRX1s1bpM1Rg6i9XVtf",
  "key20": "2QEAmuVJWQfv7oBxVsfjrXnom9nfvbrtKdCz1e963AgudX5udmadgYeKU1rwKnbNomeYmTgugbvQhJsEWxUCUdmc",
  "key21": "5VPfX9FfCz2cXioYX6P8gyp1KpYVcKnnjnVTdTywMwoKbVncTaW2xY6DQ6LnZh5sdxjA685zAWqqRdTPuypsoEpf",
  "key22": "3hNw3kYFWE2QG3fpK4sgrnh7FUKZsjqWZhuJy5g5X3ZSVgAtWWbYkkZwiymtiCRR42N1sBBYr6bpyd84pzWHPX8c",
  "key23": "3tqscZhxSqC8UqeRg8D5GPswaWjuXPP4DyndDsFsqwyZFZp9qyqQaxkR39pb5Pgo46fCYpVqavATgq7QLkecnrW1",
  "key24": "2V2tG2aj3P6RPq22h2B3cEsYWJZEPmXfyETSvsQU5y9U1sSukerYRzdnNE4StNJdFNPJGHJnkD4ShcQqQUJeJo9S",
  "key25": "23dH67kdK8MTntCCLrPwFmmwxAKhVPLwFbfaDLfjBqhQYRkMAzw4zoCYnsuXVoR6fXkjrrpNoktb84KjK5mmFNBw",
  "key26": "2ePxNMHYL1JdUiG2NfYjYapWoWeytnmFTrkPACm6XKH5Uw1cWW3n11jn93ocEuCGe1nEqie6btDHiDJ9m74r6Gmz",
  "key27": "5gS5ZUFWJknBgjpRwyDAKbUaSr2VgU3iHFXREtppnQJMjWM9FaiwwUyerQuz7HYR5UXUgMoHW4arqTQAF7Y9c4J4",
  "key28": "4SqK7ep7S7RcvHGCDJr8MWedNKmgjbypBgqRbgRoFgWWDrCechcjDVQhS5CsTg2TGhCo3qJCms3cnn5vYNfqX6Un",
  "key29": "2o6FaNWwSkgUq9LvdEBZEa2Q4bj4KootibSHgtPgnodHrpcQbCMKxmNMyWW79y2NjwJ8DHyfY1HChBtjTYjGPL7Y",
  "key30": "3XR9WDyerAdwmoTAuzn36AAe4VEEdw29mm6kDipspBKXFyiWRFQWqMKrFxaJar2SvXiTLWVwunr54GpHM8e6oYvK",
  "key31": "31s7BK9sEurnf5hx9gAUCV2LYwDahfA72eqbvMEv4KWUNLQvzpY1gNRLFYstD5Nt68eC34MaHfQz8E2NpnGELy2H",
  "key32": "4crkqYkUXWmASXYZvDR7yC6x7DLupa5iNwnTqdJEdsKujTUR2M2usYtQQi9L5vKvpUpetFt2NWVE15HKTwFrEbbW",
  "key33": "4P28FAG1qJTw92iUHw5TjWf1QfdKoTm636GfPXrYDNqv62kmeW6FMt49TmxUCphdT8JvUYcGxL4NFUYJBz6vxf2E",
  "key34": "58grBa5P924oQENKCbhsBWwd3JYbscaXSjQV3aMvWxvP7R2mDMoHuizWfmmCgvyeZfpdAdG1kTnp65wt1jnDe5rk",
  "key35": "3eCHf62qaysTr19UZfh7GDP4aYrpAfGXVXZZzm8HAbi3NixCwYBJSTxxLWjZhbFGJtCSq395hgRzHBBfmcsuqFG3",
  "key36": "5o3S4Dr3kVvBURAfKNfqcTwDKkAUhkcQz1LFSw11DTLrYKVz7HLzLFtbEj1bWNayVPe4MF4hiRXdL596uBkJWG2o",
  "key37": "5JqAZKSUxLV1vPYfzLP2t1DCq5MzivcdyE6i5cRo6S8ZvSGd5HR1er4qHHFdfHV3Wze2akvF4rcMR3R3R31c1z5p",
  "key38": "8btKosBNz1qksjhq1sEDHCKBYy7mVc1wtKoC2JS69gyVpRCNiLJWtXtmJw5vrTWSzYbyJTdKJ41ptc7E2QAcbCz",
  "key39": "2ZCZJJQgCngYQKhLUEVY2z7v6nZaUQXWp4zGxcMpk86hkcUAcVkkzyrokV9JZmUGHFtYcAAjfp32tkt34SnUtZJZ",
  "key40": "4eSBCfCmyuEJceKikXM8sWLzNgAZ2eaxmv3HhgGkG77vUcuxdAXvqavz8dvcGjrWLLU1hd4FQ1dgX1ezKxx1PU5U",
  "key41": "5VEEzqHG6vQSmT4pbYPaW3ygVWZgEvRQTBF5a7QREtdZ1ybvdFT1DNmXsMRMmbp54XAje7YqGtzGa7zoUKuKMGaD",
  "key42": "2ex3nziQnkhEdpnenoBBS3cWiHw1Noy3ZnrvDLUvPnGTbyTD1VURo1bppaxUfid3jT9zaQiufPaHtRApXWnRNATn",
  "key43": "3aKncbV2nMzsQ2LTJoU8ARQ7w9qj4daNybZ92aKfjoHRv11HefexYpxCWCEpmQienFdBzBUxaKSEvqtAQ6zuBR3R"
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
