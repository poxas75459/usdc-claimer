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
    "5mNUcE8m4JrMLae8pcxrdCPsGq35zchziD3EvCnFrhktsE9Efj3v9gwWsbvjtvH1MoRrMGaYR6zCkuXzWejNT3zJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "88VLfK6JXDU7cJBZ8QVBYkuBctjHciszAbkK74r6aZ7ZR5XPrXY2yuMZzyUM2apDNLeatbCaGsrDetxC7KKPDtk",
  "key1": "3dcWVRQ1zQj18iG317DDEYbDuSB3tctzeVwLbHKTCf9FiUXmK1z45jPrWE8gBRy46FHXN5rFZ7koxYynPrC4wD2G",
  "key2": "22b91jSk9M5hyAnEDsPqHDq9wPSsz8V13CWGyK6nrHwZHcY1dQVqyP93SrWA6V3PNt66mDpi6oFfoKrhTPfz8HXA",
  "key3": "3seUNKx8pVUXu5cGBrB6YyiwTQK4FT5VKXgoipTErF5xhxUsiNXzhB7XpZGtjvoLAt11P5PHNGzpNfDqLHmpAr4t",
  "key4": "21fF4p3NhcRWgXGWFkViJsFxFisaPpeySyMS43Gh7XSdocdssGHqYtktTEMp6XVwFT9vGv1BuTsUBNJRQfcUrJ84",
  "key5": "62RyeDHuRj5JKCtiRW4qDPpeYLDF4NZRoHBLjmgmGrH3bfUgNqK5yVFxHF5PHZgKXxZyZyj4UBvf6sNckkrLpStL",
  "key6": "fADf8UpKWttYh9rJnX9AAp1jseYTVpXE7pwjL3nPb6yBczKghJj5gz1omTJsGyWJv18gVBDcZAY58xbmPYxKAWm",
  "key7": "3YirmQ6UWtDyZSuyCFuzimXAfik28qmzA6cjRDbfhcnQG3Yr43LYiWeW7j8Q4QFFKbNMu7dt8SPWdaC3tre62he3",
  "key8": "3mKNbamHEy4o9M2ZXXW1GEWauEiT88iNk65SPRuoji8UsmBaUDupi3ZytjywSZaz1XrP5x2bNzizzFprNQuXJEuc",
  "key9": "aYrQaKHbFCzTp9ujyQiL6MWcuPin7Vvh8xXfjK3ps6Yj1Y4GzuTQLzj6jVkT9XAvL17d7TNMfBT4Xa1dWG8PBWo",
  "key10": "3GJxXfTUm9FFuGAWBqkHass4U4fZZuamNQBBGSZ97WRFn8od5eh1ixMuAUCREKtXVRWkwSNQ8phR7oVWZTKkcXyq",
  "key11": "3CzqkG3fzj8GgFupQmKKKD59mWGy1ytfxLF6Am1pjaLLBNTVYRd86HxkS2Kwg6cHxwrTtvFPHySkrwwNzDJnMzwi",
  "key12": "4uGLQpqnawm7rjc61UpQeoKVXaYDnh4K2DQy6GEFARRhbWcH7Ev7xdi33LYM8CMHMGnQTgdn8pERP5Uy1cFPEWiE",
  "key13": "2EJ52iu11XwfrKHdpCcpkxNcRHTEqhS3LhkECLiNGVouijc34ezdbA551EdZi8e7yWa3k1FnuyPfpHMoivRA9toQ",
  "key14": "59996H7M1zRo5LM4oqTS6RjeEW5Fb55BDBtwKt3RNt4wZZR4cCSnmYm9FRKMN4ZiUVZKAxxGT65aPJoxkFCnQpz",
  "key15": "5Jds18uzK1LQ4AnGuBeusVPbda1cNYg5Lw4bfztepEwVftcjbY4giABgihiDpq7JdQYn3HdRyzrtCbUKrBaSDAjs",
  "key16": "5jmBfvrRjM6RrvuKJtJ87ajDnqkukc9oYp7JKjM446eu9XbtRspdiJ9zBD4qiuZh2uiUH36ocncfYKagKfRY9wVG",
  "key17": "5XFPYScwgJkNuKLxMMQXHHxyeKwd4iiQh8SGJR7AyKytnzseMpVjgcSZerJUcSswrDkAFQPQV6vLoyyXJqsugSC7",
  "key18": "yuTKX73hTissfuNnk2rscQiaaKmyEDoBztbPr9JxiYfM2PjTt7JpVSUQ1P9KASfdFDjQ6tkP9ggJ6x4nCzRX7J4",
  "key19": "2z4hJ6AxTVrGcfTar49w4VUVqFcGfBVDJBKf5DyiBA5jHLhbh2JtUq5Bw5zTpdNugigtdkMr7kQTWX3v9u9PEmun",
  "key20": "4vYTZwC2Tnk6SbLhG7zXm96X8xnBF97SBizESHL9z3PexJPHTTLietoA8iPv4zmJY1qDuRzAoTRnbZSFa85bgFgT",
  "key21": "5LbSpBAGjQ8JgZzw2NaqhPh14KX5r3Fby4fxGgzSLnTNqe8PvBGXhveAz4hrQh9V9PhtxcRJgcmFVMkmzXZG6v94",
  "key22": "4huzqAYsZNiHXVHRtt4Xj65Vars7Z7pv87cCfwt7nmyxCLLmeHSynsD9tmoUymzBB3H1CPwecgN5uNrsA8sJ9fK1",
  "key23": "4wnQS5FKPEoUWNhzKyS2eQhR6WPdZw63N86YXpzyVaEwEZVCf5vKY5hrkD5fxJcBBkb3iDV6z3d4D5gT9yMkU28V",
  "key24": "5GKBQWTbuHoXdMQ8mjXchDfeEQT7PMNxWRK4v13w1b4hBikPUjPGa5MmeDzhDivJnXi88iuyKaKa8TDrqE1LVJNF",
  "key25": "5Wdpi8F5J5msTur4FL2JR5CoYdweoZGMpJ5V6vQYJHRhxGzZbYJxWso7GHDqrkxmRvo1PdiT9nARraFzP66Raas1",
  "key26": "2ckMkqPcxvgaUjeDaJzoKigBBZda1Sq8dowM7AzGtwt1GbQP7uzgLdSE1bdKRShbY73ghLukQWd8GDpCzFuZesoz",
  "key27": "qLMNqgxk3QqHv6WaC13qjgBCTrXXHMEk6HcPWQ8Ad2D3BBdy5o9Eibake5yAeQUePCxfDfLT8mRUcSG5bSErsmS",
  "key28": "4mzuJFSiHBXFDGqzkXE2E9LLTir2kU2Rg3TbPNkCfS41HCJFfP2FjafB7XieGmLwieL5BHzJmF5PtvsERmrob76E",
  "key29": "tDXPXxn1gV4nkHQNahayyizYsrymnZdn55E4nmJkEwb7VVFRCnGfuJ6FhHqTNPHaquQxmGvQDbDWXjxw5drTPVb",
  "key30": "3jgGbfBAau6JPkoWks2upg8nsMiu9dksQohbxMFaPdaw5tjdFgYhPVk5mb9vjcPr47P43RxgMWSooxCfR567EZa4",
  "key31": "NzNbnS7uojG18az3DYHH2NtuuHdShHyYUeEptNpaNJDfLP3yGvxaaGySxfQkMPdHfehVvMjZNMMW6mXCTvVQDb4",
  "key32": "3fYs6amsArFu4UJtZyeQYgCqEq8oWZrNAHQD7p5peUGKzBnLKJ34hAcdqPGtMWyvTFfEf74BVoVZttBZ54qv1FJD",
  "key33": "5jjopbNMotaPXZFp5A9DJHkBZL4XPJzCTrWjjD6P6hSAEkx8xknmmdRBjM2MaA6dKAoqnmuxvW7sL6cFqfGbJ723",
  "key34": "21VHgtaXqh8opYjMYhV7nsftPLh6qs89C1yppYCbBNyUhEc1voGf6ekcEqjk8kA7umLQiHaHEjGrXkZqT3bgpXpJ",
  "key35": "3TBrar2y7iLXHvnuYx8SveivzgMvdWqPUN9viEtGvvPB76XTbGupbDtgchJVWkaFHTq1fbTMfzmyoxNYSQxMRny",
  "key36": "2onKe7qfGoiLwfYUKoYRt23dTVMpjaLgcEFvMvmKbN5psFLAayNSBwdfaXUW1g1oBueR9HngaFDh1rh6AxZoAshc",
  "key37": "3oVp7CHHQtdCNmwpfhwiS2Pdo8NpHdUteVhRoqcG84ZXFWfRWggd6KGFRToqJzYwXxVMAN8zoZS7oELnje5mJgia",
  "key38": "5XE7tdCsV93pmcDscbiFdNiVpBhtuDsRmjHkyjE7QLBGFY24RuHKVh5SxDN71DWNRrYEptRToACChJGuk8HfR7Un",
  "key39": "5pnNkSPLg5udVdLwSk8ArbcDZkGaDbJiMDLeiFxseagqRjT8cj3L1Mb8QJMNhwDZt6GQdMoTFTfFTmf66rjYzRWB"
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
