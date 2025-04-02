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
    "5VRW6xRb6uAmCkHSvrNxWwDCu69yrhZhErtGytcRfoYqxZzvmWMXCiAsM6vML5RyvtdygMDqpJHTLWJ4byrgZM4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UDKUm6WpZAJ1PKo1FqrMqgciKgNyk9MZ5UmDYNGB39YUxqAbA9nQukLrcnddTvLvanv6jeT4tvQ2L9XBmFBRCEs",
  "key1": "4oysEDTPToujmSRRWUfds3sQQF2pLryUPmpTseBzdDMFjA7zVU7QzUW75YBFEJ3vKA1nCex5MCPjEHoig65Dbwo5",
  "key2": "5UxHxuLmFAAF8uNfh43F35hJRxaGgC2nW4xxGFmav6FgwavH58S21vR3hP6DjM3cB3Q25tEx2vmgykDdqzpCp8Bi",
  "key3": "2W9fFjiCDi4j6oRHdrHfuJ8HZvbDxLeMNxNWzwEVWdp7854gAHVjeCBj5QsMC8bsQQVng41TdMY4vVJjBMyhF8VE",
  "key4": "5ECFNYUL4Amk5bYLALoVuWKJ3Pk9q44JKuFgQ5fYGjWMyhqqdMk8gYyrrZMpLatcGt6oWPc3KUGZjMvBSnwTZ2sX",
  "key5": "4wugjGN56yKdzQKJdriMGV94wVBZfgvdqEzT8SkonAQsemgCHKX7DaH4S4B9cGQzeYUb9GH5xGA8Aw7eyvdyLdAE",
  "key6": "4HGxhPz4xqoZ5zWUL6uUyu9MihQdN8eC5syktT7qFK2ERgV1ahJYrMM5An9NEtpEjPz2Y6FWcnLWBdpys3D2iujm",
  "key7": "3JigbQsWF2DyjgYPCUAoroTQ9Npz7mposrdAJ13uF2jW4CvjHfVd8nfpmVt7peymggiETuRTfdzsHCydXyUBhooC",
  "key8": "55APqUx8cv6fBxPy1T2PTcqG7ffkaWuFPjfWjNe1kXLChV6Kx5qF26Hweatp42K5PYN1dgU6GJuErdJWj6pnYD4U",
  "key9": "33sQoZVAiZUHcQef3wMTHGuh5dMhhkz9anZX8vBrawL35VwZF4sQULz6ebTWqMBsHbDGGQdJHTKSV3dQV2h8fZeP",
  "key10": "4xoZ2bU5v26WXu5mBW47ftfYmq4eXcJwycw5XQt16tkian85UytjUGpoV7ffYPPoKYgSekQgkcpdJJDXRw3JFEg2",
  "key11": "1JAggLroFFrTAns3Ws1jfYdjyhMcdtQkLi5umv9arSbjZBuLFwZwZTCo7dCjB8B5GkBJtYByGjKwHPZT1hN71jD",
  "key12": "t5RVLei1FiRW5V8drbKMVfxG9wHTZKfiLL7Qjn3NSWFMqViREn2CNVXATWoEYBN9M3H6epEuEuPvyFGkjHP5pmg",
  "key13": "2xPKuKoca7EYGsFdqFswZN8QWZU27wafKy38vRqScngWFyaWm1RUG2AG7PQ7Rq2Y2ynQVq9dGHm9NjaZ9Jv6rsxp",
  "key14": "3BinLwPSGURjNbEJkwiECdUaPJYpazPfiDS56frni8syM75vY8qvfBV8Fi4VVSRW3to7UWpmik2fuEXxDYaegZkN",
  "key15": "2XQ76XRnNJVL1ipfoXDZKLpGGAwNPVBwQQ6ksAyvULStZBKqnyk41mXPqv98AxsZjz9X98PXWubtM4CAsHQsNkhk",
  "key16": "66N4djui3gPGQ3Tr2x1eZDHd8ttThTFKAvSP7ZDead8BD16G8MH7TP4jEx2q7JWMs5RWSUAW8fesWX9U32hdjkA1",
  "key17": "23xZwU17Ufb2bSWwZ552vLR9yYSshos3h6tasy8CMZsQ3aLKcsvQ8FXKdbciihFBUGWCsEPxUeWpsAwodihUc9QU",
  "key18": "27mswm9Afd2spKEVhhnmKwsGuN82LPhThwfafcqsguRGhLDLq2uBYvSsjcoTEDuKHW4dRAqbAjCopu3CRSfX5Csq",
  "key19": "intMWvAkGkimtjCGzfGmq8A2cLRhgf6Q1rz5VkBnw5L4bBNPBUSgu4QCrCH8s2wopwM1sT2QNPEVSCh7cBvnUJx",
  "key20": "4dz5QX4hWyCfZTrdRv2PeT8wEbYKonx3CNqGSdLX94zLTWydkwSTMbne8sCEguBPsmEUjKPikTYsKjuaJHHqxPgK",
  "key21": "4C5CGLjTsDaDu7XEgGDrhmhtj834qP55xyXuGBga5htKbmT2VQeJCvkogjL5Cvg3cK2mjuSxxJgnU3ja6vsxFaAX",
  "key22": "3URV5UorCZF9RRKX3njh3wQGxdUVCqyrZsjssKweWsw7WQSXQUaRWsg1dwjW1fax46eNZFh6DZcWf3SrxdnJusE",
  "key23": "5dTX8whh971AKHK8uAfWgyDeTSYCcFoY4oowPzAmcJkuwzta8uPhGrWhgRDCRbUMiZwuCMt6oZzYrs1WYGZRWz6v",
  "key24": "3mRg59urAfgFiY8xZvc3imCQXSrzSbo5Xjc33v8W2SL1XLRGphjAb89zwDkF9d5PjfjEzTgr5c9ZMENfWUFzNJQo",
  "key25": "37UU3AwxnjpRZxKzCLuicupocCE47NJCYjGeRPrrs72mo1KtvyLYZxgCkmU5tFRh7W4j9qT66kh7WqLGU9vDkAyP",
  "key26": "3L3LoXcqV2Tf3bhTGdeq1rAcVBxp1WX14ZhYs1grLN1CrrTdbo4SEmYiaR7dZNSXKDgmpe9mZu9vXjNGdDyqFxPd",
  "key27": "2gCEMRbk1nDuicg9cgg42Vb3cJyahHSCup371whwPkkqVa4USwvpwhiZafWjK2DUSaiQU3DwKg2yzkZhjw1KqwRE",
  "key28": "3nhHM47fv5GzXQ3aiSnfTVHoAXKv7XjAxaZjdL2k2jymEHRrpoGjLtusLc5pxJzSnp5YTpUpXAkdjwgFeXa8P5fS",
  "key29": "58kEAkDyKrfE337zf5NQzL7dHvawzvJHNwRee92fm8enLeLbK9yGhS9eakmMMPkkxnZfhqCMeCnrkYfreq25FfqE",
  "key30": "ZpNTaEubnn5zm3c6byfktTmdfp1TCpzhxcYiDRN6nx3PK2eX233fHVfrvTiAzm9Jguq28xxr4NVtRFp1sjwcfpc",
  "key31": "G7DYgBKxZDNVdhTg2T42EeUidiYmdVBdrKaVdPBu2s16yHLcd8MX4WbWgn2uwFWuLQrsdZeqq8huiHQEt9qRR7y",
  "key32": "2RswsuwzissDXv9MC3atEXM32EXDYkfPAAYUifGBq5aGwAvhmniftX6GB3aJfUkVBqnxqq1htg2iqa3knThEK79s",
  "key33": "2q1J4YqFcGeb1eXo13voXemVo6UTW2f95zyKcyHW8otuN19R4DA4SxjvEHbdsxc8RmC5FWWmjkbtBJvpenQr8hPX",
  "key34": "2W4ZCBpkTrTo34yuN5R3XN4n4r7kvbEzeq66NEPmgt6NyS63zz7jpB22KBTh43mHvUSEUjyAtxpkYisc3XNZ38og",
  "key35": "2LCVvqymxS5LSoq7a12Ftm9TtFu1xcYwuMKM7b4GSJD2hugqXwM3r3TjNomH4q7tQQBDqb7mLCNErRYb2nNd8CbF",
  "key36": "hygKjTWYnuz8QUFdDRs2GmAKkCpeEkbFv4fQeTNXDEDTLTaauWnvWAYwpHJ8ceBBQM3FAiS1zbrerrSpffMFGwW",
  "key37": "3Koc4nthvrPkwpjh7emVMLsd22Y1nwqemqJwdtjUVEAJJFUD8V3eEQFPav3JMJXUiAYMRBm3DuysTC2BQZbTChHY",
  "key38": "UtBuTkJUqWESsdASDxRji5Cz8Hj3By3t6U7eB8m9Kw3NqbbPskTNDjzMWJcvgiyPf5iqx7P8JSeZLv3XsShDiru",
  "key39": "ZJRfiCruMk85Ai58v1Di4BstiJdhGbZASNovg23oY3jL8ugndHthUrF7xKMTvMfpPoLRaA74msxA1ZKqULCyFzu",
  "key40": "GDKnEM6TdNtmLfRjhUA5s52bgbkUcVT26Bd5aVEA4Wf51v9rGGPgtZjW8bdfy857Uaev8LmY8h8wCPYF83ApeVF",
  "key41": "3ywvDPYVtkZmy7eLQ3p6wGDhqoceNMxBsdREEHt23buJbAUpxNvLdWZwPHEVBh96cXMWeY1EsXdeHqwp3DMHM8tM",
  "key42": "22J9mQcdnMhTnRf7GYdqi8iqTH2UU1ws3QfU6d2ycMngm6dRnpcikhSjqUTSqC7rsbXCGa3ZtDos7dnExtfuUUXE",
  "key43": "5dKD8nWHXYzySukkV2P3qumMBu4pqhhQZaw6FNzgeRA6VtLLma57adBAuYGbNZNk82iner7h4EN6PAFW2ssMtKEX",
  "key44": "5UHJFooKLmdm337Uhs6iTsyLyeg25rQHTbU9xR2WqDJaryiJy3EsT9zsu5hbkuUn2kJ6ayXV7wLZiKfoyf9Q2CUv",
  "key45": "2DLRKT4LjLnLZahzhwb1XGXcWLPRfAkKSpNvi7rQzGnhjLh8247Vsh8tP4wEyhGRs4FN3wsdL4GQ8B7sgQFjF7MB"
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
