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
    "5WiGSP3Wqb5cWM76pQpRgMxs3dLpVdFNenQMTjeXd28H35vQNu6HoBAHMCCtbAyEdQE1NJtsEpCFhAt5eSwqykBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cGC1ddoPQocqfwC4WCozfCVg2hLKmF9VAFrAgrpmdkHMU1AS3YruRVPLZ6xTx1R6XXf978n8HvVKxQYE9q54zbD",
  "key1": "62nbNdPAaLim9zSSwtxbqHXari62yDZRprxF5ibZdhZwhQB2HpBXwUH9diXWVX7xJeWnkomzb1xYRaiUxCpFMobB",
  "key2": "5m5vkoRBv6vSREGfm8FaQ5NRGpenNhwwLzaDvySHkhUcfNfBpm41b4WmTtDn4pXjQ3M7iVJFZ5WJkfanAFw36Ru1",
  "key3": "5YAb3XDmDgd49V4QY5o4mTTDWaTrz8zyknxzScovNwNCGmK45d4Ugcv3qo3MDTkcyYQRcHgfdrGrek9w9pXDZEwq",
  "key4": "Jq998y4VENkbyMuUppuFHudmbVtcNuAaJCWrWow3b4UUZdbrrpV8fSpXVgYmTw21K591ptQ14YuspH9jTNq2AKK",
  "key5": "3qCb4GSruf5uYPUpMvhpaWw1HJEVHAmA2BAzCF7mAnF5qfWFg81nsT9uFUrxwxPuf1hnmtb4N4Z8R7LZJ9Zi7Zse",
  "key6": "59N4bbiwkCPa3AocBKEs4AH4LBAQ8qqVvThMh7uZujFWxektur3kFqHuSciHhQ3s2FZdaX52jJXijQ673H6xmuHT",
  "key7": "5Rm7C17fvZrKw6ucrGRFdr3jXf4Y9dbPr8ANQU4eem8mTd246LsstJBNw5rasFTMnsC7CNZrJCfLEAC7C6wKUz6D",
  "key8": "5iowvwJMnCvqagq5WNk8oPgvRs7fYi6LjkotHWZ58wdfbfBHyzu1fYuUNM7j5TjkFN1MLskc1fZhQCpSpu7GFuCe",
  "key9": "2cE688a7QRU5PACMwPaf4KSg1tqhEVpXE4eLAsBQnL4hEsNiP8S6PiQqxsZ4181Hmcjgqo7S6eQfY1zbzEKnejrH",
  "key10": "2UyjH4KJu5TCuv9PDDynzYAKfTT8Dxpx2EN6WQfmwNPs2taCpsntV85rZfiWYjXiaEUV6EuZeqtiL5ho2YKPy2QG",
  "key11": "3Vs1yP57xByerVDS2KySph8Xofzb2xnFySSB1Q8gD47wxnWXBrSwCKYfeemdrpyk5m82RiFCSrt5QrpwbwQDJFDu",
  "key12": "2Qa5FENTtgr7ApNWhs4ofpFEEuNmNFPFV2prtqYfxCECQSiq9kmHQPxZ6iw7oMLq5FPHHUSLF6F4aHWXYen3Hbkr",
  "key13": "4V9xDj89jsbvGmN2W2hgVygTZ9FafMVRu59X6ofhCU6JtuAp81uFeF3bwCDYw4DRyLoboAsjW1gLAAZDyYwtVkS3",
  "key14": "tJc2kY5ajgH52MveMNYtBuya2hhcJtrx9Qt1oVBRXfPLbcKDaRFMPS32wvCPMSoBVqR6JJP4MYQYYjEronfQoEC",
  "key15": "2z85fwzXTdLKdWexb3JCJvodixu48VdVqMzz6jAHHr6GF4FjLxS1LiF2HaRUPgvfiYWVsoeKJsB4brtcjzeeCEH8",
  "key16": "5Z7wfwsJb7tcNJ3TDf1QFyFkokgkRzrNtwLfNwrQs4BV8p3imDTrhFS2dwEaMWAvbCkUcLZcyX7eDYpdx9xpDSG3",
  "key17": "3WQR5M4tVVLVj8KDdNmsJZNo3B3SHAdtTvpFm79FyMmh5VfE7q53J7J7qkvC9YhmUpsCYAFgForoVdxHsHx2Gr8X",
  "key18": "2uc7pG1kiRwdDbWTcHuhKEYD1PoEwdXkV4MvbWU6kpmkTQSL8uS4M4SmwiL7URZMvrptcGbL9KvNg71Znw2V9ZkQ",
  "key19": "3SR4MF5GcdHukUHWtzmuc73APd5egCHubfEdBrKjuHRX3UNLqrk5JJBqF3R4Ycw1GVfHR4sVmGmUb3T8HndxQr43",
  "key20": "ZMAEiMZGKASsZLzuTnkbaLxFUPJdqn6Tg7TNAEnnzCNYjscwtHVJmmqGh9cNhY2wbJmyzZCC2wb9MRUdEuFAi7f",
  "key21": "4QmYWX6f9w2ewGoYZAA7Kq1k82YuwHuRivXgu2ANZnQgTi1zYfy2YiJ5Q6AehrW8MV21pG5cwNrzFhrSXHYr9KUe",
  "key22": "2q5MiX5nGodqKppTrSktSbLdySd3vDFA96VFiHeeZb6CcCVB1e2f5Yru7ivT1sYjSrgGqtrYxLyxaD9fJzzfC7vg",
  "key23": "4UBArXqLBfYMnA9HHt6a1ZA2AcT6s9fvQ76xDzuNkDA42LsudrDJHQosbru545zwfjVSEzoxFz3FWTYddGMaEyqz",
  "key24": "BWJaraYy4LVktdkgcZkkFaE4FhSeBVxfRSkpCSUGq2191iuexGuTLDirkAKJGQ6BtSq37WNSh9cPsLwbeCx84nY",
  "key25": "TowsXygGyhpE9aEB1CaEW7czSmWBttMFGLk3ArnzvqWxk8csQjvnkf7DnEAGvM3cAjtCf2Scg3Tyo6gVCunrAkj",
  "key26": "4ba3KfGULbcwdzGqpWoC9moUXd8mdRn7fmDhbfWByWYQ7z1BB6nbbjzETuuehJUYr4NfcFXUKzPDjCvwhEw3SBjW",
  "key27": "2tyKvd1mqNpmWPb2Y9ADqzJwAbbpDcSLH9cyVWozNaZW477H59tNW8oXZRBK4JDq22mJQGogHPrgpSeHbtccqadQ",
  "key28": "51XSmYE4LTAVaELpNgEoJkx2z31wHuz8YdwzsW6vVXVM6eRXjRPA9ArT5gacjPtC65MaDns3QAUBK71XX4ncYgLK",
  "key29": "5cCgSqwdmQRgQZBtwx4iRm2nuTrYsGL7TZ9vKcXpKkixZed4oput3cvrEJrKdxEoqq7skxqgcNKshVi13yxsCT5q",
  "key30": "5eDJ3pXwMYdD4cwpaysNNnZeB2HhwXFgXsdDSoX5F3SV358v955mZ6GrTNzFD2CdAZ4ne7XxUbM4BvgCBhMrdVik",
  "key31": "3E8mgaM74H3cHVTgHGQhGf6B59xMByqDADWVjnaksm9GPi8xGrschDHkzvS5uTfFCAunV3A34hyXHN6zDUNZHoXW",
  "key32": "5giDSE8gVxA8Td5ThHka13aALvMKoMc9KfGg5VJZTa1kbQ9a23egMfWmPJsgN3fdE7okAhdqTYNfyKfDsPcauQxG",
  "key33": "QvVg5YsCwewD3iY3J5oMLX9ZXCXXLhdqUbVNfM1p82ssi3tED9oxtD4CrSjg7MVFYtVMc575xuDA9mU9nXA5dcF",
  "key34": "51wN1nMMfoRsgxPeuKZ8CsX9uLfUsN4PobxqigycXrqup4doTH93VrN22SxKuuyavFrKkuBAGQTRrCe7gMRvaspB",
  "key35": "55LQx6PjFCqRHJ9HkFWswVLfoCpC4fF8sawtkcYRya8bXbErD8kxZcF56haASkih4pEJULUYBRARsHdr9dGBgUc2",
  "key36": "3GEAgUXa4ccFcFVTzv2Xo5DxZmPpPaQWbP6hepNBTtn5nNKvronz6XiV3yLAummoXHiw96HAxcChDVQLrSTSg2qU",
  "key37": "d4wGevdVX1SVUsuEKijjoeDuwuYajtz9fjP4UDijKwmYSZyQTSVtqXW5f9FZy7xWfLaeg1ozHjazejLbWo6yFWT",
  "key38": "3LjYN67JCsjxyr2adECnrkrF86LVgHyteR4WgGUFSoHzwoMTANEvmffDQ6UJHt5t7K9WMnrixDnoDh23SjnYref7",
  "key39": "41du3nqrpLEzYf31niapxmCqrPhBFUuWDn6aP1ag8gXpQ8tNTZ4VMkpYzmeSA9225ajrDg2PNxc2kFjEKAMh6BY",
  "key40": "5JeeUpBmZD5UxhZKGpnhKh9p28SZaF5EL3nFHdiBoZeMY58zN89CcbEP2vFawfygZQgeBvGPDJPkLD7QFV3MUmnJ",
  "key41": "27JkHwnjMVjc1uq68sVtQ6sxL96WBZRH7hADzY9RZV2qKPKgUWd2wz6UEco1uvKESEGEfvDVuqoUZ2W9DchmbGRi",
  "key42": "4Z398hRGaS8yL7DzUxTGE63DpVGGEyFoUevyWzRMrs8gZUCA8Sx5D3sPVHh4zpusX7RaDHDE7cTzQvUKiXz45nZy"
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
