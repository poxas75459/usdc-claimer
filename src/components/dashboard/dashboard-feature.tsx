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
    "4C1X83PPvYoMfHGooiFtKp68vSuWZ54X1KngYAZdqaV2BUr6JSVonTASkUno145YFxMCVTbzh6aUGUV7rx4kUmTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kJqPpx94HTQmQWW7jp9rBRePQUgzaPH4BTj7epuhxRjrvMqH5ZWtATs5uMyTaBQvikay8htXwjE84JoNuozLTyz",
  "key1": "2FYZTnC5AuTFScZoE671zWzKD5A2Xc3Yqz6UwfFG7Ru57Eiz3GFr6hTS96xoBMYs8TRDKU4wB9j6FEaV5XqoRE2X",
  "key2": "v2YJ2XXiTr7SBEYNeGCDtgETgPSLZxuT7vsGtGXWacnZbYeijpqm6n7HsebKBqs3N1p9HD2qmtQbYWiQQSeGWec",
  "key3": "24uAaG2Sa7PKkfiJ9aGoJTTDkCs4qG8HZbgPEfiRqfH33B9vLDPtgrw5k58Pv51rungjhCD7oBFdcFXh35HpKdP1",
  "key4": "61C4L3p1EX6YhALBb5nq76pxYkJacrHd2MzKqfRbqydAbUgV7qPtd4CATBwAf8QSkQu1WPFHwSTJE9Y9vZUjwHJ7",
  "key5": "XjfPmHVmZ4tXUx7p7j6nGTWa5yDHaTDZaXTC3aLRxiHeSpQ3V84AAw8XyQkTYMWRH44FaKJLAo7Yuy5bLs7Cqhv",
  "key6": "5JWrdrbnF8dufiSkY2SMyzXsvjP9BKsFt7Wk6U5xTxeec12zJ4opdCH3ps1Jfw38gS2UYQqgQR5Vaqiw4M7o6ARH",
  "key7": "43xxwzvvpgZL1fY8iHBbjHB4oifXH6KMU6HedrZo1kwBzoDqWbwAVCF8NipGjfWVie8NaE4KqpT5baHAP21wjfU5",
  "key8": "3eHsFFAdFjwqDrYbFY16rt7Rt9yzENaezvTAsmwYPeoysRUGGe6vhSX2kQ9WKUjg4GXD73eXuLh8F7a2PSsm9cF4",
  "key9": "2pUgYpXkx2pmgnwSacH8nUYB4QhpaaFTNmd6tpt3r2fLVPX2QKNSsPcKeTScndTyuDdJG9WKPsJk9zkEukHVTrZp",
  "key10": "3xL8AuyY2a7HEnwA9UfLvHGPoF2EFqY1mUUapnMqBKDG6KrSzfCF8qciw1dB1jRW4B4h6kBbRtkrjL5aCwjFdvsD",
  "key11": "36oEJ9Y9zuU3VRQKJmhniFxgBgjSp2Jjj9CAjx3SpibnXPH14k2pLVUBcGFioiRMJjQPC8tW6C7eJQPeHdU66ZZS",
  "key12": "4kqc9uwpsiF3BABmaKTo6jp9f4xMXJwT6mE27UZ1TLsHgABYpNavgiVEP2NdF3EfYHusbnwaw8wwk5NnGqr6YkgY",
  "key13": "wckdLdMPPyB2LjvSc49xiWJrVb51anHyA3LkPGtJDfw2P7Cn2FWAxyRSaUGT9A7JAQ22w6UAhxWoTZLqnasdCY8",
  "key14": "2GRRX3vCVNjcD1LdHsSrzCu7c7xRaSRmhdCNWRa3jGKGBM3iqfcPDio7cwyGLALeyW49PADc65sHZFzVF52znMH5",
  "key15": "5yLREL6XWkk5FSMJ721cSy1amWJf1XKMdpdhQWAWx29AByubBi4QYCd9V9CczRRfeDSmiv2L9HkBgBdM5meckjXx",
  "key16": "3BVnLyCvKjSn7aTrxjN2d61zN1ejJ7QRLuAi68Wg58sQnX4rhuG6qPyZD4JnYFQ9BUYHz19bLex1ziN85UJNwkbo",
  "key17": "3d4YQ9hUqsAi8kF1mJTW7Xv1sFXpXRwdYqy5iQBUK6VcVerzgk69qBDBqui4c6LqYgbWf9q8EjW4mxDMmQvAEtHP",
  "key18": "5Zf5WYsfxqoFkcRDuzzLWYYWFeANtwShu7X2ntiatAFBAyeeBph2Fw89tE3znQKCNpUvseZtN11dJ3xWiMPXbW6k",
  "key19": "3hKrnn91CdtKzmh2edhRGVxEMeJ8qRjD1ChFzQiQEJKeHKzZY6GJJrxTTLyyaWZkz9pFCSzcrMN5jp6EYwCpVeVn",
  "key20": "4m4QEaZiUhZYNv5rXWWTBmp5Rx4pw9mhcESegzNDxiPV66fdwqnY2eUEnRSD2nHJiDRhgtMdRdSs7idrjKQe1LBi",
  "key21": "5YwXEkMi3NMpPSHjFxHF4fsxMeTTEHoLecuaF8JJWwj7zVbprjvHsSkfw6rVDydF55knip2dfJfVp6JU3XCmx167",
  "key22": "2giJHuj2WXpKUuDW8ybVEzQudApZptBjJcRDdeEv27hDwpgi9mb7Kw1fUJyDBJ89zvbBWGcEpwLcGWyn6s6y8zfY",
  "key23": "4cccAuYt21DWYJ5vJSZP7s96B8ZAQRefctoCVEwK2qnV6nMHxaTT21dsUNVp4hzkTr34tdxW3e44hH57YQNyGMQo",
  "key24": "2xrWH8Z5ch5BkKyJfzMpcHRe4YC8oufrNgdY5yjmFoBqdV4jBEodK73KDeUJtaehQmkQasWCHKmUAn6iJeRWuGHA",
  "key25": "4keMYeN7qdw5skGN2z49znCXtTjGEisNzw8asN5PvneA98JvpRMAyPuGECejcYrmafZ1QkcY6ctTMf4xYAqAofy2",
  "key26": "LZvT3RXEDuoMD9NwvNNavNJwVFvmXwpDZqjak5945ojJxcN6MsQfLU7S5rB2LN5vvZEDQExn6uwFeHeqEvLhksp",
  "key27": "3ZJyWsupFngsWvzTKRyvrKtDZ1FsWSYuUrrkbLvvUrKLWXgCvSmNSBVfSdHGA56wokXMnRBpdT8q6mxLWJccAGHu",
  "key28": "3GpCotXtgFHqevmsEUSp1W83ZTr3j4ymEQvvkeD8JeRz49GV1ZLG7BQkTp5JXX9bG5UQd7EtWLrnUh2YA45LobSg",
  "key29": "26re5PeiFZSr9naDVzXopJzK1arxqEpGWhM23e2xxX8UaqZy4A6AwvakJw7hgEELuPY2kX2bJFNSKdukmPyHpCat",
  "key30": "3EeXcD9Bc6kkzmroUgAAxtDeWXBAYbxfKQBFV4F3ggN95YV3JJEYqAYJRVGnNwW84WYx8exrfkMycpfVQSq2sFEU",
  "key31": "3w6azZ8etxHicKUyuZZdY2hddxnnKiuaKFbJzWHoBvLsvFRYKtKX2PQMksXtL1if9pXT5vkZaNRNksWP3uUAz3yd",
  "key32": "xbsnnmiyixZp8tQkCCLtc48mqvpShitbXQrkPPosxs1ViMQHTgm5GbouhYAcLySBkQAwtZiAd5z5uTisiBtuaE9",
  "key33": "2qQwDtnTy1WsRvybQR2AtfNZLSKbRJ7UHhvvkb7kfnprLQaJUv4sJKwDTsbveNyPRNc16iVQyCkTT3HzasNPz2hA",
  "key34": "9Vv3yxU3erNnqVyVb9yJv4N1gDKYodU8UusqRaiqEMmdzQF23xnGDVsTVMZntHrkazbwv2sJ2uGfAje1W77iHVC",
  "key35": "4shb3tganqQvSdkUVYWYGv5q8AJaakvnrfMoBam5skVzWh9CzK7SjCtiuc9JCCyhG3fBR8CvNXFY5x7j7rvfiJNx",
  "key36": "2yfZwqyEco6Ywx75J6zxq4dbYSXrMNFz1Gy6KTADPYCQ3bD6n98gQExZgokG7gZD7vd5Ds8M59twJE5rk4B64pMZ",
  "key37": "2p2RvLZrhHisazdvviHK1EUnyb6DWPjn6SHmrrRZPFFRqYY2NKmnSEMz3v5YX8ZCKxsBA7kL7UZhJMkDzk6bFJWp",
  "key38": "XjhtmM7U2sGYeBDDj2fgTqyKN5KZBfdSYjBCTwghPSccoTPuXhRkE5NiuNjDS2tVXDGRk2Nnt6mghAs9f67uU4h"
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
