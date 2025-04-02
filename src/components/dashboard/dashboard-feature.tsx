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
    "2ShJMJR6WsvhqMnoGGfc9AU6EYNKnyTNvKAGcB6YvFyWpnHrbgCfi2v5iR32dALNUEPcqNbKrLULVqcRLs85Rnty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QvJb1Sdp3ZuXM7wF5iLckcbhbibuY9uAcZqauceggQBj8XtCqhR8QYsAzxz4Yai1wj7US3K3M2FyEB8utyCXrkb",
  "key1": "NpKFWxfYSHWeUHCejPsyz5WiAgUZSaNeSeNnxTQNmejc9uHuPNFwthZ5VSddsvBUMUntawYRerei5eHQKBHKRL8",
  "key2": "3BSfEgQzmohNbgfVh77iCTHPbnXeA2ZeErkeAz8Ww7hGGqd2Kjr7cAQYXStE7QCmgvHpXPshSd2FsSQntyfBZ9pw",
  "key3": "9H73riHn9Qq2avMSHzpmDAAaaCy34LaeHeJorzmKSf6PeKqpcjdDTcLyQzrPn8SabfjsY33nXLJPcPUN7oAAHdy",
  "key4": "2iV2BdqdS8FePBrJb9zo9VZrRPkPjzQgqkQ3RahWNUQLH7DX3eUufGrH69R1Qzo833eC1KzJYHXCSpmDXMzDXXu3",
  "key5": "4yyGAk1ym5gWjhCeysPz3odRJEiH6TncD88bEiCpeGd2mihCDxD1e57vPXH5NHb122vgdURJABRzE427WGudjV73",
  "key6": "5PapccML2c83roB8B6SvfiFz5C6WUUQ83z4sT4wNpqWSuuHQcwYbFutESTuGJigEMQW89SM36PHeqWtx8HUZbBXq",
  "key7": "4UDE6Gd4qAoJTivVT4eLwQx5cCctsXYvdFSvEst7crCdrgHFQgH65PDYuvStCh2xQojZUXxZDNr3ZDKQgVxXWA2j",
  "key8": "4CRZPbQAREyMSHn4KB1JTiVN48pmzXJZQnHrU2Mpk3UGbfUv1jgu3z3gXBci6aD7Rf91ae8kt74D5SZBTmxQjR5E",
  "key9": "2cRWLM8JQNiVPxGxQ6CeQJzYhEuZqYSMV6P7mxC81JvG6p3ykaENuV2rCZ1f8LWeogRjpUM4hsmNYFpbtiXkwBCs",
  "key10": "5qrU2QiuHjfKx2pPBiCSywATbY5zxV3SXabKU6Hz6NDcrkA84v7wRiwozuZSYazTsNQKEqMiNpTv82DWA81WT7ac",
  "key11": "3f97GZDPY2msyn9iduD911wLc3B1SHoJ8o3EZ59PcwQNUB8B4U1JS1brTnAk4KFUbHWqcwNbjvE2UeQ9XVJ5fPtH",
  "key12": "3GDu1xsufmyT5s7oNwJJeVHtwD8fGwKcKiCTQHnzh8M2aZ5BoPQzY9fY624t9UicH8fXkMU5oKHJt9veoJuKJ92h",
  "key13": "MLkxMsmns2daRtqCkPPWHJarq57VYnJkMhWDnfGCb4xsjn8p4NgmCvmudyQZdsooB8PtzWzQSnAgi7wtYYjZX8T",
  "key14": "2NcwpBbvprNDifEBsFYryryDBfN2S43Rbat5tpzVnBGmnDnojaWeDEWrKPQQiifbG4i347PAwFj1xDLRoDp18hn2",
  "key15": "5QTPJxLjXEt3R8jqAcC6YL8NGgJFYx8FPPwC56m9BZu4z9rdFp4pWD32dpzMKPS3dmNL6k43b5KsP6faYYPtRPHU",
  "key16": "5dpvbHX3bwxzmSewpw9g9QiEBjAmzTW8ZQDXExGhoqoguTDr3ezwmHSzmVJvNs9fD3DFShn5WUxGWnrmEnbV8J5N",
  "key17": "35e2jBCTkgwwqtUcxREo2fgaCDrLPDKSabSAB9X3kShAHT7Y8KuwiJsnHcLRXxv6TVqd4R2EcBvQku4aDAgbAFRJ",
  "key18": "mFwvg3uCVawwwiPLpRpjCs3Fsb29HayztyiMnAHMpaHM5G127Mqx6B8Mx8m86Ko8RGRhZWFTiDHtQkZh4iF52Bb",
  "key19": "5VwK756Ym8b86vuo2YrLkGQAEwNZeUFFm8W1ELB3mLVP1cfFDQ8RS5ZmAFuvFfagPQKPwuoDrQw5bUVhbLaMPs8A",
  "key20": "GqKRcHgjXxXtACVCgfR92qfmW5he9LB82QJqYZzVRXEKknmRzs2Mgreu6hgneKpoJwKimcPSvXg3iPqurHqFUkE",
  "key21": "2CFFWpDqRKYDmZGVKSnrXMS2Yr3wTcPyU4hqJugvPUk4FGDbcEzDjXZRKLLvWzS84i3PmHCmqAnJt3irXz99r7KW",
  "key22": "4hoCMWXng9wtWG6bpvLdX9YavgYiaBKu1JFTgzALcWVg7fZJjA2ADvD92w2Yg2sMahzLEqkjsZ6YR478giWNuYN4",
  "key23": "5w4t19ASSJZVXFmdhG5U3LxjEtGsAep48hFaeUdwv2qQxP9DFNZbkGskzzUHmigh5aDFA3HxpsVHAXL3sLo69qZE",
  "key24": "5bMivLFVTcvfZwWDqkPHYJWsG2uvvzMiXgiDZ2uuWi7FXy6RCcNsBCx1oQxwwvqLQLwEUkS2biT8TXHmNq8F9516",
  "key25": "4QvsqGa962BxUpsNUgBqLn9THpVXdSSXhwiMdefoC9U9VY23H6KMBQRszPiwcuSfz78q4MrmBH6cswg6UaRhAuwi",
  "key26": "3CiEx5ws2f8zD3P6KGGY6Jvo8cVyXyemcnRn4WcHGRisbaQLn7v8vi6XWxPQ1p2AD7kU9uQAbthF49gNW9YPb35y",
  "key27": "5HHcvTzWWseyCfW4kwnMgxTcki6fZRrSGuUkVUv7xMRCyWvNrKgMm34c8nEcnwcuUgTG7EAA2GiSMhix9p1GRhe1",
  "key28": "5UzhmhJdsSQxZ7JJhD8rPyB6SZq71jeAS6fHbNF8JArXkr8TE4Z126BLJzsZpbcCMGW5hvr94y38TeCLz3SyFuEG",
  "key29": "bYU6y1CS8LZjLpNQ2v1tqrZBC5y6jx3N9zg3vAytsuvXnergCKURXV8H4BZPkHp1XToKHSMLycb1bwLQpMsqQcF",
  "key30": "2Qf49T8AHsQo9dBVgzTapDuLMUsqiVk2FF5XnKeacfpPSkcB4EEXFb1iwfJa5KVpY7fnQ2k5vBKZ5omRGJiSB6q3",
  "key31": "215JWaXV2wUWocz9qWoHMEWi6hM7qpBnsUs8jowcuvuYqTN6LMb1ryq71d2YoestLipqNMMQCJBo7xC1DFoQJn7R",
  "key32": "tCidXGYaFmYzX5hrxnUdqM3iX9RX7zQ2N5o1ztS5EDyRNf1SqnwmcDfHJPSJK5C7iJ2cP6Ak2tNtzDosoaMaXhY",
  "key33": "4sM5auNjqrsny6h9exukh2X8THr2b5TJC98f5btWB68DmCQ3EGTKdaJ74QQ66PAAzx8CpGKdN3C88EBUiAUeENtz",
  "key34": "2GW2EzXLkz8EstyACfaeW2EAeLiF36zL4oxbFBeXdSumk2rDKpjdsQviomvDNkFJSychnhKbsdo2Gz4FDPAcAM3j"
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
