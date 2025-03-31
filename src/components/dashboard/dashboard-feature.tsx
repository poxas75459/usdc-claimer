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
    "4Lmv2D94EbkNAqkxPqYjL8MgE1fGkh7XS1VmwDSv926KR3KzYZLgw57QZCgfaVHkvL6rQvxdTRWCV4Re1i264HJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pmDs6Rgz3hSNUB7PB3rt2pS9jRovPaQp69XWxHJDqD77gDDBXb8guHi4MZP173bh2Nc3ARpNZX89kJS3T3apxgj",
  "key1": "fKFXGvDfwqMrNKTQc23cTfk2mPoMK4sfe99dWzUrDvmPQhoMdXNrkFjaFbNtonJAG16xb1QUzRe1BmxE74b2afa",
  "key2": "EFi8dcqFgzbhbLnBRsAFnf5fZjhxNXzJtUmF5fWws7wPdzg9m4cKgi1s22XaDB6Z2bvQAwVELiphXY5xQmDrAea",
  "key3": "55oywunGaMo6JCfLZir9fum1YBecZWHfot12Sk9ZXrxSgFqQrF4VTX6nhLPitYjVX15Z1aJKRgDPnpHwqq94UN74",
  "key4": "3fkcHMhfEzLVPievxZ7AsBS5MPuZrq3P5ndtEPBH57ATSMpCRrqZgp7BxAFUT86dbaesBYbx2sEmZPHNeEpQckpk",
  "key5": "5vYGEFMEYvie5GSGi5CGqYv8n4sFpZCkFqyuYTPPJsPtPVa6LCyDNNDM7DXvvLRVr4QxWdcKt1hDz3pFF4c4g79v",
  "key6": "3yjQWge4sYn4aA238fUw2HrksTma5AJTraGeL3SEY9235i3FDrHvfNVqdvyB9rgCvUqvrF4WKFNxwSkYj697hQa9",
  "key7": "4CfuWhRRBbFZKGDUWNdKH5TvVSZSACjx1QjobxgojwN2hHp75gaXCdHcpCcJPpCJkvx2o7PTFT8woQN2D8KhVsxt",
  "key8": "4CZAvU777YiavACR7SBSZNuECEAw9PcrbRiB2jvAoWdmk941CK3g9oCx6xwKvqyCNCxuVkxXMvU7j8xq1J4atW1S",
  "key9": "2kYLTk8D7rJV38nXBJw51AZJFZdnZxTx1P74NuvthsHuNG4KZs8kRwUymDAu9nZaCV3zxMePwKXi6mQ6RrgGwGW6",
  "key10": "gyreMRWUpCamWbEaj4uJppoCgsXED57eWUAwzwK1UtsVWiwZPub9PX4inRD2ruHQeJnC9puuNuEkotfwDGiPvyq",
  "key11": "3GLxP85GjF3D6fcC5QRGbuwhuCFSJqo5aaYUfSs9WxvURCr1vVCoXzRNXXhGuRTm56AmqDHQDwxzJTWA4eKywxyb",
  "key12": "Qign9GFN2QnNVCj84bgDDQCL8J1h6YNnuyZhSLzbbKUrQDb7kq1kW6XmQp1zXq97zbT8p9qPdaqYUiSCZPJzUfP",
  "key13": "62ib9UMybywDGKaGhtbqsTZwmSooX4mR9cPSvy5r5JvW1dAkRqiaxkbFH3c2xkyrCVCkH2K3S23Z1NAiZYuAZRRj",
  "key14": "To1GKrDjRekLMzxygrudo8GqU4FMwNrfzvzRMwF1vMfBfWFHKSznJVKj3JuKG8ZuiCvjAumRxSMMFzkzAStfivd",
  "key15": "4fG6ujyaX6sh3Dbs6PLdQ66mvDdsH5X1d1rCxYFE7RFYGiUf8B3aCVCjGoVCHQKogjQBuJwJYCHiiSTYDnQymWsq",
  "key16": "2BWLK8XwBNxbPoHRdJSJgVEZSj7cA2gWPDYsdccxjmy9UuJejH9ErAP7bbe7cJfAcKXaDhthFjcwap1SQBBUfhe2",
  "key17": "2G8fRohfU2yxGayJ4C4ZQiogpf7g4qwNSVZKT9Vz26T4fej3aqPdvvRb5aDNUQ21hh9A2S5TqVQR1J5xap96Azwf",
  "key18": "4tom8yW2kx3xAUKZAijdRWeFfThFE2Cv14fMuPoEMNqSgLshjvacZsH8e2wkwjJykyUSPK5vSScTKuEpGxwqrd5p",
  "key19": "4WWhT2jWRrcysZV1p9HMTkAntsWje4AmNfc5arXqhbJ7S1PJdLv9KcusSHYqZQyEeiAFmpJvzSXBAEFvLCb5nHbM",
  "key20": "2MCoawyv8XBR8vVxHA28wiSvXkFamqGFUmFWa8TjjevD3bb8NPTiRHY7LWhEhQbQZD2XeMr8geH9BtfSpnRSSL5R",
  "key21": "3UJGC6ZnmyDhvH7BWZh4ZTWHB6tRw4qrLSCSVSayodL7P6yXKWgxtTF2H1Vr61DxcC9bojq6gXvQrNzRGrMsAhLS",
  "key22": "4qWadG1szuR2eNRAft4e2azJsMfUFAFn2cAksm53UQ3uwjF8AWDhHjMhj9QcmXg4j3kxwfLCxyFMwSh5txvKJDqc",
  "key23": "2cAVVdmz4Cvd4DazoGyAR9mSxLhWScZWqrAaDvHcZUpyzoRCQW3cZgGZSJj7Vjn2xjbg9ZRasW7YkQn4LTqUzSPh",
  "key24": "KSAa67TTpucDgxzBe2e9jPTaSe5WbpUvK6QNs6UFHRs8z3gUfBp1NEEbzNf2ZR64KWcGtsBb5Hg2iH1E1UvTcv7",
  "key25": "8vKegUSdxnMQp4y5CSgphqMXiSL1Sh5U3aNUYbsUF3jniksqGLBpzBsv6W7P88FjdJyRgsEyRXc56rRo3psGk3Y",
  "key26": "5yyzN22TkxNxu5EC5oLhsdQqnpE43nHAenDx9wrPKDFrcpg2Y4bmcJBBU5K4wYH64YG7znqtrx8oVyWoRTdaaAoY",
  "key27": "51A5ujbQrCrGuiGeGi64RymPTxVZDaJ9aD1AXjEcpvQoC8tkvGfdTPzN5FDJ9z9aST4UsFyLt6nb1YB1bb6c3h94",
  "key28": "46MMbCHspcTcvkaAVh8TjR1EjFt2MvqD575y4VfnawAdGAc6piNQPLfLEyxuF66f5BWQ55xFFgWiAcPFwREBY3BH",
  "key29": "eScHk84rjyB2PLis8XP9hFxoC8NmXero7zSA38wz4BXSLu55AXBVTFxZaBVQiC2Ek2UGUfyXR3k5kATPPNbDToT",
  "key30": "4FYHwZ2vMNCLzXdQT5j7vcQQc8YGSLR7DQy5821bttS3wC5MXDkqJFtz33wmRW3vgo5vNa7NntzomrqhooStxKva",
  "key31": "rpPCcuRt1p2DknMLqDz33taDh7NfD6waPT3HMhzihysKsVKUkA7Y1vypz5wxPjSo1sv4GG5PFdQJi4DiBDAFvEP",
  "key32": "497ViDJ2G8qZumoyQWSE8cwTgYKCHGMDy7wuWg7dddvt1gVnhJxb46FJFvy4QK9hLH7ohof3w4gcUDRX5daMxkfr",
  "key33": "3kaNeYCihe7Y5rE1eQ6PEgQWDCzRh9hbpDXHknVbY8ZLWR9BbZgstcWdMkPfBM7oeWLcvBNzNp4EkvwmKFK4qy7e",
  "key34": "4KXJAMcvXL6Y8FXz76HtebNiDMQ3uai4CQuwLuZKpe7wVEkLR5esQwxZ62dgUxbQvUeXUuECcytSesVT9wKFFGoR",
  "key35": "4Vh5pj9GvpRQSo9hVvtr5GFBexWLx3PhtJWMHvLEehJeiGwApJcANi5Ya5uHL6GTiSVXe8P6r2KB2JD9yKw3cC8A",
  "key36": "4BCwMWJhuTrSx15SkMvEDfHtPmbUZCqXQNcme7wnhPiJtWT7c2uPhJnAAyb4wg9DhA8dbEaP2ibSYVQHirahw3wy",
  "key37": "2wRV8Tz5aRTGXmZKwcdTXfJzAhJGREpvHDuuLPhMi4mCBrv89ENVxDsiyxXWBrLUC8JfDpbj3Ry56VhaMYpbWJiA",
  "key38": "52UmbwXJLQaUpXMni43vbNb5kabrQs9ekBQfxxg6ntMsWNiAZUviC1GS3S38ZtfVfB7Ms18yNnxKJSZV8GjLN664",
  "key39": "5QS8DVSaqfG2UBC3SfEBKfpzsuu9q24rrQuLw1xDgwfjtRx5ci9ShSe6RNTPN1uPwhGvMjoj6mL5pPkZbScdvqEb",
  "key40": "8fL1N3ShyXnC6aFFU58gtim9yXtemntvKskhQqPLaH43bowsYCnjMSMF6yGuxeSpG5EjtmcgP4E2uK8NamjqL1J",
  "key41": "2Vz6JgfR42qpETJa7Buga3vQdcRYgKPu5hjbroheMU4MX41pubb4B556E2XjWBRaPNDhDKPqrGHuMvogSbZoTymt",
  "key42": "4XvH77E88LY3Pn8Q12D1YETHfLStSvN4tdRH8ozUac8Vq1aJjNXXnxEw2VhrwXCbvGenziXe3ojcPkbokjAuKoR3",
  "key43": "HCMG48nqfx3hKnXSCRWVyWPSXKXn1H7zJJWQhJWSPHjRkFskj5uX73vKNunU5MkHV6LuvGagLtPo1BVQfvQBgxy",
  "key44": "2zWB5oufDZ6vKZR1Zr2wKBDRC8NSj3jVsYVPXfNKe6DMtVtbyEZ2zAobmsrkqm7Y9GwLjnxoBHpjid64mQ2VYH3R",
  "key45": "2GwfJrLKkfdmCrunQTFx82ukHzKqsfJCRS8oQEhF5S4wxozaq6uTfavwcjw7TfkaFKsBTpEqbd8sVku8bWpGDsaB"
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
