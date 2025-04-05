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
    "3DxTxbSeYobh9VvNVigDyXPzmrc6Mp4TREgY8TYo5414PZsjzFUaXunLWrephCMN9pFpty9ZckbcP5X2cTMQN19H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cr5JryoYEJPDSdz8hK89GX5ibXJXUeGXhz5VkqCBtMJeai2SGzCAUpW8qXSgpifKqYsFk2n6R92kasgJm4W6KhQ",
  "key1": "4h9GrGAj5GtQjTvBrNKVMBkAwzPjesVV2pMCAGqPJV2NLFS6KUvL9iNcxUPrGXvJC2Ceaz5oqHwPGBV7szFoSUyQ",
  "key2": "VB2avaQovsCwKqud5UEYXZAEPdfFxpB6Ns2kXPmpRirCXSmTTxWkVkRWwBPNWsVxnHz6YYMj9LJM6VNQEpcLju4",
  "key3": "24NGzhwyimWJU2LC9fo8YJgxcXqrx96zjhpbvsJUPA8zknMcwjhH5he3pJ2CxdTmi9Hv4uqaPg2jRx5NhjWTu1eo",
  "key4": "2wUjHyiZAYeEFha1dRmB9thdFFKqVCUcir3JBpGjb19vKqvTgFCLDcC8tFQ2FPoi6nqJ76Ry2SgnKXkpTYSabAEd",
  "key5": "5xvg11vRyxDxufQkgGcxAGTBhThTpKz5fuTapXpDaxvaH9QN9GXCdWXcNEHGYgos3CwrPrGH87tbukXn7pXeJkpo",
  "key6": "5V7TubzrNY1MeaBfdpoSvgDa8UwkmXwj8uWxEwDBo3jVpJrDm9fNoTmNJ7VwBQeyYdRkbXxvJC63bjU7j2ewQAer",
  "key7": "2RNsY1nFVE6R96bKqyEPNZPZ5SVCrsLoQb356Z1R1bfPxpVYqPx4ShPiq1bFiJC8MAymNyqULoJSmo5dLtsJSTLj",
  "key8": "oHJDCMyUCYB8fcVQL8FBjVTq9D1GpAGqbGwtFYT6sMni7Vby6cj4nS4pZxSrcMkNXuy8hBvqdmDEQdzbDW1E6FN",
  "key9": "4yLsq2jsKdqW69G4Xi2bfJE4gjUSGjZXMxWYa59LtW3fBnigfjKG8J31ChuMfWhhb2FkpHYiNJRDAqka4d739ZVy",
  "key10": "4mUeoQrsnLs56US5UrpXxF8EBExhGYARo7pdQ3QmSVGBJJNaYpFmiKDXrFfYhEcg42T6CPe4fMaDGQPqsKy5QUKk",
  "key11": "C4Upw7Tr63B1NoDctEARrBdFYjHPCiPRY9DV2Bq8ZXu1deoyVU3VQdkTvNCzL5g3PnGwSJsXFDFnfAszrNpJgCb",
  "key12": "2WS8hnpXNzAEukS9bBD7G9927pP6XcGdxD2yaXNkcE5gaQj58uo53Hv9xSfEidyhcQFw9HTbsf5imnrEYCToadgJ",
  "key13": "3VWh2fWbVJZZMFnAgdkw7UzqEMH6ATx2iTqXyztPhxFNZTLiUHDAeNgsnuGVnbkmcwV3sqFXCHmoC8srwFmwr8ii",
  "key14": "3s1wCJeZpFgFkvaqBJT4CxwrWU1LbiX6xkcDXhcJPb1YE91scL5ePLVQ7rreoVVTBxRjnxw2iErkAuK9hNyycTJH",
  "key15": "1vGgu8TWNx9fRbo9xAwJ11inXoW5VHq72Z5HhZXybNg3tsmHjuVUXExZzTopsg7WhNvm1qqvoAEcytDoppdWvU9",
  "key16": "FEjZTeWSvYr7iRmWHfbqakgycDmUJMMeKuwPGZC2adUp3yg1oyZ2ZU9nchoPdZdWXGxtr1ugF2xB32C8f5TV1WY",
  "key17": "yLncTG7TrDJk3m1wvrn2NwqwNyi8nnQb8bqciqGf13Fzdv2RuBYzomJVXn7iVvk1jXy3JHKQBhH88h8MLr8nCp2",
  "key18": "2aFoPyideNwAJDZRUaeJmzDYsZBgAZVCqGDirGLEjyVD4fp1f3EfLFLfx5ngFbHiSyFL9XAJpYdY1QLTmhCPdToM",
  "key19": "3BeyRMoA8xZXNpuB9VuMJrED3yH1ELKy9gWso7iFiUfWTSaV69vrT6a2iTXtToSGKCCUrGg99QhFir7f1NuhEbhs",
  "key20": "X78VoxnCYxRqXVgTizbmPoS5jyTNFnxskbAPLPrZD45trCw5NeT2WTLpj7y63ZxqeUJ5GBC4aSJBXwTWuZdC9NJ",
  "key21": "2xDt95hRH1UK3WUyZ1LT6K1tGqATb44Zz2u7HChnp4t4vR7djyD3C9huGkmcU7f9ij3rgJ8VAh8Z69X3QpAp6rxr",
  "key22": "4nyAkHoZ7hNoZwdnrhnyuCNd9BA7hc8JtQ3SBU3CEvSFhstbfoy9o6MGLrzyVABQ71xZBsrgESh9W3yVZUqs6dRW",
  "key23": "2QyoCy81BHFV4xAsjjMQkv3z4ApRP7dRGwTCsjsbfLbGzM7m2TaXo3EsMeuUvGQT2SyKTVkCRVDzLKkE3ro5g2Qa",
  "key24": "4FJnKjyYfREp3PPaYm9DwtbE3KR1mbSFGsqkAzQUekwJJpWGgSbUdzshD3xTXFsV61oWeq5DXVDFM9GJpTWyjHrX",
  "key25": "2K3K4TLDLB3uVHVU6DfvgKRXmW26jdb7ErSKErGCeWX5MxxGvqu4oa3BvFRWjCEV9ELoz5bz6hnwRGCMXNCexfMB",
  "key26": "3BXaERfJdMwn3BWxFHds8zktfD9fiCHcCsV7cKjqvtmhZkpbwkqBkMoRfBpYnM92r2Q8MNBzk7J9hbSjrmBweHFv",
  "key27": "5BbnQQjBgRmvbgfx6JmmC3rJzgmJkgkTDsdoKyNb1TjA11wZtVcN28AyU5WTh4jQJF2rNJYfKTzyyM5Wj3TRqJXn",
  "key28": "TiLeFbMqjBYfnd9KFo14QZqVXkUPRbwawJugwXUQx1g48hHLvYtjQAHNoLwVFuDnybYbgZ2Q5aEHsZeqovJx6vx",
  "key29": "4ZnqiAK4J3QKytso8zv6gAVgJM3WhFvaEJt3XtMHwh1AdJfuCjKTYC8h54ZaRyc2M3nbG7VSfr53dkq7hHaEfSNp",
  "key30": "23fmnL82Vq5fPDBBi2MnWUXfzd3BCCfBPBA112GjK9TTzVxXTrHwEuVa2b6n1BqxNStErn3asfpSVbM8UN4buMYn",
  "key31": "5jheff3XA3xNFh6g4B97QqLezNo2DQ62Wm9UTJtLk77AwzstjfmvSYiecaZxi6fNzxwp3G4fVzTfrF6bpZuhig9g",
  "key32": "4y6prfXvFgogFCukRmyb6msNxaBpfVX1SMevKk1t6yPaEQfJa6qxdSWGNUXMPhA52k4RYg66VyDSk8G49wZCW5gE",
  "key33": "JNt3JaAGAF6dWRisxyUCWE6ZwiHi5cRetW8bW62pU7L9s3FK4pk6LV3fQYY2NZEqdWHFR4A5yAMeFxsTv1RnASv",
  "key34": "5nkBc7tDFCHMMdcQLvY6c7mDTK5xZeW6BHabgjDBgpm1xQotzRNsc1iHhgSs6xPyjz9ZNFKXtTwskr4WphVw3UGE",
  "key35": "3gpm69PrmWK1A8jCDbUpZCGuKaeyr7tABvoTVfzmkc9Wi2UotaevLCKRCrFa7rEN5tTiJWTDotSbR1bKkBSodcgK",
  "key36": "2nqm4XmvCSyQ78rtPPcgVnWQkPit1r1XRoJcuqCGPanMAZQ1wXLdBdt12R9H81NkceTRgRHGYxsU9xiHEtDfHYJV",
  "key37": "xnEGwqvVVDrLbDoEndGGGPkYbayqCCmtno3ZAHrD21uCVhm2CKbZ93JnHEMUpU8DKnWGhJYcfFdDrUzTTHoQhQf",
  "key38": "5bZssbe7LhfsVdt2wqZwkKEa8cavMYSFn3GthMSaXa7tLdQ8jdaQjJTZbpCj9fpTXeZQcgvu6WS51vfD6mZnAW7p",
  "key39": "5LwyESPdhgThCPQdZra4DFmQNdgCpsgYn9eza1wMSGvrMuG5Trs6RAapWrgczG6gqNqkYXCiSecaQJJcccyeJAQD",
  "key40": "5Ty14c5nGCN3ghciqvxR6YqYPDg85vNF3D2DTdPofEZHF4N4ziVxohDJr9akp3HeLFnDHn5J2ZhqTG8LbhRzhvwx",
  "key41": "4PPrgaAMMZw3Ed84eLCgBiFKmFZYfQhVBi8aNoCn3vJf1VqrUsmC2aSVA5D5nqGyBmewmQSxhwg3Kz29snCu8zzJ",
  "key42": "5P2QiLX1Ny3PwrLxsN6C1pUzgrauxdS8Rdm4PLsj7YxWmmuV7q68aQUxg8V8m1Dzx8sbRQupX4T7Zr3pR5pM9UNS",
  "key43": "hsWwQRDi2hWverD9YY87LCuxvxMSAPuz84fHchDiBr4hZXLUdNSTNFhFT6rAz79zhVeL2ydFnefbiupK267wJmX",
  "key44": "2FSkJYhUbEBaYRFMTtipBG84w8JyoMGLGC5M2aeDXFcPPZAuKqFxMrqZLzefZzDfA9Tr9p49DR59PDWxiUcLdL26"
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
