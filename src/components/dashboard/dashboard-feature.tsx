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
    "5Q2fLe78hXuRJBWmmmaVLJsohGcciwm7AF42t6wjRbBkti2aC1g5ENy1eBGukofWFAQjRyTTZFFgbmVczZL1xswx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zp67yDWfR171AmdSVTiXVJP4YKVH7rbFpJp6SLXdMA2rubwNMxChK9MD7oei1hBqQTVZWbSnvC8WBex7uPBUb7v",
  "key1": "5H48M3aadqa4goNTyQ7wcgKW4zpSALZxPBm2LQHDGryVmD4HKAzq1iAfY2ZuSy45QJUG2JrxbpwyWChQYz9xcG5Y",
  "key2": "2L2LJg8kopv5dBHXYEBnbRgHABQd3weojuefmygqEgTQWV1p334PhHb2Fp4pMCVRZuFgjcLTEFnwbg4XdV5F8XSe",
  "key3": "27sZ3TXsq7f6BjxQeFhipzdGUSgmWbhBAC6hym3CgtAAmiZTBWHcoradcozoe9XFYa7aBnzwJr2DY3ryESxxkpqR",
  "key4": "HnY3yc2Y6o6DT3yzbTqP11KRjR86eK8J9pndsrwXwUpW6e4aSUSa6ufX8cjXNGbqVCZpSUbTJQwpibd6sS2cJbY",
  "key5": "KgFmYo5LL4hWg4PvyqLAg9hF4tgCFYPSfbTjYhvw9sMmXfYxt3AVPNfESvrEjuqSaW8K1o4VgnZSpqAsCfFUcDe",
  "key6": "4Z3qJoUaaBC8u5wNzdi9NhZ3jx4yHH24M1jpuq46TPepHCxbyFPCGoHt7X7MjsFjRUEbGNjjvnNPXUDmcAQR5oV7",
  "key7": "4o4FAS53fnDJAFYAssZuY7DK5BkxuEocWKLxkRwobfQmAwn4LDx13DqVHXKADYdxQzMxci6piDMZEfBZHQFGseBs",
  "key8": "47ShFYL4v3sZadggkSsexWFoo29aYSDtWLxqggZm2NM6tQTUw6gr2SNuGmVmoz4LtppijvC4Gks8hxEm2f2Tsra4",
  "key9": "3e4y9G2gocodQvC3QkqkrvAdaWFwbzwU4uzNSfLfqzbFAqWdtxjzRjT8HCbG9eNaHidQZSn5mdaJm1xbZQzcxLfh",
  "key10": "5aMnfTBsiPZR4dBfDspf23rTzV4oioTM9cSHAxXb7yyubmixoGkboZ6JompyZqjA6X2zBj8vztFWkLKewoaUF2EF",
  "key11": "3HNCKt9WWB8iCUUVu36dgwt8b679h6YJWA3bZi3vN5wBwo1zex8VKHud3JcygZP7Xof1VLbeCN8Wd6oiGYpuEdZz",
  "key12": "2EMMvsuujgziDwyHAcq738NpuwUzE5dJMjRvjPuLJzXEizdei79pyE375Bq2Pt9PhqmDD3cVfG5TgutjU52LHwjF",
  "key13": "3eSBcsd9GQ8dLLNqqH6bdgZ14Yu8aiL9TfV6PP43LxcMTifdMtAHUrxxTNs4Nn2XkkGpc9E8pb8GCT7z8rvJ5bQq",
  "key14": "39XhbqKsfwXXCosbq6LbTfsL78cM8QNSzPg3d6qsvctR3MYd4rmq5D23incC7hg2yacZ86tBuwnXuvaRS9KD5r2E",
  "key15": "31buEbeCZqU66K3jLMnnPzjQxDkGQKjpY2Vn76aSNxKLPZeejKWh3WKCLRsmqsiCen1MW57uUnBHdGaUawPtt35i",
  "key16": "66BmxMEjpv5A4UoJtHfRTv48NXANS9e8xXSzYtAaFMvDjRgwywLt3AiMw8hAqM8TF6FUeLYzH2QbmecgugeThpcF",
  "key17": "PZ5uzEA2pFnWYuiyhyaVAEkcPEERdAv3Jjfh5ZUQVQ48Uevxvch4mauYLxTh7MAQ2GyzSGTTnzWVwDqRBqkgNWs",
  "key18": "5jCJ6qLWpqhNANc5K84bqg4Q5Ea7853tnYsSywj85Wari39mmRKvyFi5pxaa8oHo22os8Sc65Cwed8FuaxX51rCw",
  "key19": "3DGFp2MUmENHGzSo2s9P7y4hsX9uBj9KM5v3Zaa745md8o2gfir3PZ9MVXhAjnjxrQqiU8MtH39HSrj5T7rWTq9M",
  "key20": "4bhW6xiKmoFGD4JA5dEgWXN4mzzhYqP4FAofe4vpHSGAMY1ruAuzhtFyqVXNSBu1JTGEVGUMmuLdB16AAXG2yZFu",
  "key21": "38Xh6ppkLkU1knHSsvJ4TEfyNp8cQFJJq12ZGTh5ESL7Bdss21E1sd9CUJ4UqSF9XGTmz7YykbNsZSe5jZcBCJAU",
  "key22": "4Qdb6uafADv6wz58N4eGhdiWNdq3kQqtnoDFw2w3anPiMAr4d3WLMGSpiHsXGzWsDvZVfTy5komMkss5hanxGsZ4",
  "key23": "MS9YaWWAtwuEMEHRWvYhjcAhwFLHwjAwkQuoAPKBmpiYoop6EXRittY18TBigiE2FzDQGUozhttpFyNvEdL7BSk",
  "key24": "22hbdaH1vJNW28PSRADsQ4yifYqnfi6fCY9ZTstSE3RMBLBbWjbFTEoALBdB7y7rxXDKkVCTGa4Q2GgvDEGUKxPi",
  "key25": "3b2SuupR3wbBdTHZHjbD52U9iQwoFfRFmsX4h6tjrK9pXCKakWPnn4aZwHKmDfbD2iJM6p6HSY4Qz2eMpVEpfLLe",
  "key26": "2iJ2qHbzXqPFtdYsKGZwQ1kxi2uS2qWm3LbZ1iUzxRqoFMv2RhCeugorbAY1s6kh5xVcj1AYZsUTBHwmSquvJ9cc",
  "key27": "3zWKdCYdNerbDvEZona12kpZZKKUTndZH2j3f2Q59ZxXXur1kV9aGkUtUUsAxwDn4A6uUBfpZcKBfdDuQjJh3tFv",
  "key28": "5YXNWMgzRcExdeGKpmaFtxkD99vz1YeTXhnfB2nws8eapgdMEWde731LjAcNJxAwLFGAVsFjazuDRCt6E2azvdmB",
  "key29": "59CeH8zUo3wBN2tUQuXatrgrmQ8e1maCEupxp84MrEea3C7mipaqVpFurYdcD2svVZq9uizymE4fdpsbeFJ5u2z2",
  "key30": "2tUhsnZ7WcSruacbfkowcxikVMm1E6moQs1ZdDafobQ41koFyQpnV3jBxkpZ4rdocn1UoYcTYJnndnb3EhPqw7gd",
  "key31": "J6cPndtZ2xRQdvXiWPSFYSaLRB5NRuVXHJjAN4ndgHW2iRxZCVRek4GAG4cy7RzVo1LFvj9XmgdPmmZg8KQ91Dp",
  "key32": "4rT7tyTq7MgDabZ3JtJ4DFbhqGewzis2A7eeEVaS3xV6SDNPcoyEPKTf9WCf6MRvk8jCRTKv5tdDn8MrnTTwvCEy",
  "key33": "36pRScjiMzgYCZnwesjeUapk8x1sSEdzyReBarMVgDYasoyCi9WpYjuXCKwWLK5tfLWofcrzZwaXFqB1YeY5WJDs",
  "key34": "BXx7bUs1hpDuMaAVmKg3d5tSNEtgFG68NBrXpxDbG4Eb44pKhwT1JJMDtJWhSM9HTqZVLGTP198jt6ShJKGU4Su",
  "key35": "2n4X7WRC35qjJaxJix4kFM3HQpszhATFpvy5HMBu1rAPZJnvQ8EmTV3NZ6cSUheUKtzZztD1i1eUby5UvoWKDQG7",
  "key36": "MAAdgjdxhBz93BgGc9NYamuAZEqM8qxTW5b8kso1WrCm3rGY31d4z89EhTkxwsNFTXypZftozKCsrb4EPJnsPaj",
  "key37": "4d1kAqNMSpVsRiYA4qNPxyZGATMZoPfPAhUXeffx9fr8FDCa6rXUn6hBipRt5XPdKwXDF5DQZADHgfyNJRbyrPst",
  "key38": "aaZuQkJ9TZQJKijcKLKKWq9SRSYTrESm19W12R1p68kRRN4N9MyqhHtMyR6sG7TNqKxmbTjgXF3zTC4VPw38N97",
  "key39": "MMQEjtjXj7zDGff8uTsHECAxQuxzRwRR5R77NwTgFifPKq6VKNcmrMmyzqgBQskBoAHheeFvRv3rGJ8NBtCCRfq",
  "key40": "4MoP9XfzYStQcNXAjVPfARM2zq6Xg9Att14hRDUUn4zQGRFvDYouGXnd48CoKXaHAgUpHinSXxbQUz8rg3k2TP4Q",
  "key41": "nxsqqfwGamBKovomk2rP49LhRN4KtPVW8JoydCQqGdLH9fpcvTR1LkExn3XtcDgTKhr1X5FsAE25tg6DwHAfKoC",
  "key42": "hwZauT2wS5tDxMoqMEXjyYj9i9UYLhuh1mVzXLWDzvZ89RrfxRoESNrftu6PT1MEvy7C97yH5mmMKNHp5pb6PY4"
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
