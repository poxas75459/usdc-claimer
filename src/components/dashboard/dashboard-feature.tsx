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
    "3NBdWZUmTuNXd58PpZqnDvjvgosJrXU33xg452EdTdnBSP2fhJp2NR4Qh59BLafF4KJmQ9uTyjWERU54fricG3vU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A3Bo2Zd5n6VW9jy6FumHtXPAEFACD3xjMr57aiJE7cVjHTqox3QcDgdk22t9Nb5FzrXF7qLFwgmAHSvR7pZ7L1K",
  "key1": "4sdRMa7nX7CXhfJqcnMRsZdpQkEbcQFqiQdw5SXxcSkpLktyEWGeqFc7J4GmLTm72Y61QmKtygNt1kAHibutoj93",
  "key2": "2p1zddmC7UfGTjuykMydr8KU5wqLvSx3Xj7oFL9KoCeMJKXhnfLDrSF7f5bhqPdGCKUDzDZ15rejiuHeQoBYHup1",
  "key3": "36hLH9511DtMa8TuptHL3dnxEpC9s8hPnkUwZAwv8VL7VxaD6TgTYNumQvvuNuw9LPJCUBBZmzgeuPvnY7bY3onH",
  "key4": "35FQYBR32acMy5164E1fPezdeX5MZM5RpQSDXGfAWKwnfsWcMRBxPRZBuKmH6LKSEkCrqHYjyrHbq9YM2j3zUzJz",
  "key5": "41V8nRLnfrgpGDWWigT1EH6yATMN2inMZfTEXveJUKVLhnVKvQiXxK6gxDR4Xy18FuCDNad1gcGLrwe4vcnvCv1y",
  "key6": "4u5HgjA9BrTVav82RRjKHSSracqYpwZRJ6y4Pjjz46yoYXNbjPPr6oJR3txoWkcQ6JBzEcowZVQPQEdExDeggEax",
  "key7": "bQnhQ3XchMedu47hyFRd7srMtM2a8H9w77MsGPrQCSgi99HtHZa4AuzMNUVwcoufGPSjzyGYQYJjMrSfnAKL4Fk",
  "key8": "5t9ajQC5Tp3Pvw9sCWqaGLTDf9ptftMnkzXywhVt9bYvoYrgUzSyznQLUheS6afsxMNpN166SbPxPsU6dQKJ2u5p",
  "key9": "5PMGzGv94HmtaTm2dNrqfEoiJiB2WRme9ZyfpmuwdBo2mv9StkAJvQqtrFyswS4zQfXrqwyjFwoErvpDijgcrwVy",
  "key10": "2HL3D978Qu9SmvDw54SMrDq3u22dJUd7tHq57nmtj76sVQyhjvP813k21wxj1iX8s53cjQc3FiznTY7si2bMg1P6",
  "key11": "5P3LBSXQrYsatV5tem6pPYxeYqsSGivjAb3NsRyjFrCcCscRf91ovd9wJb5nV5iLYiue3cu62vEBoj2p7ieFgdFp",
  "key12": "47qHQvyXG6p2ZvWaPCKatowH9AsXJkqRYG7FjoToQkctxQyRE5CVEK6E8EYui5kj9PZ8jkqzLa6CiHkaRKMwfyZB",
  "key13": "4p3K1gyzUvTxDdWJXdGp3BYbz4QQaoZwUXxcibi7M5f6Ty7o1xXyLiaMj1uqg6K8zRvNkzytqQ7LkoA2BcS5FpW3",
  "key14": "ZjoCdEgbLN86tt7kzHPr523K7sAZK6oenAJrcu1PRHfv4xakkA45sjbQJ5AVHGrvdVCbTEWwjE7CKorGmTZmiQa",
  "key15": "46dfi73NEMXrzzqrT4dupMahzZExFjGskUiWopjGTAdPziophdsgXAUupB8wEtWD1ZxphE8jK6ksaoUMHDYYiiPp",
  "key16": "4KTHtRP2PJioFcA7VrK5r2cUxFY47YE8GF2BfHEDAVZA8TyzT4F9wP7ihpNLhpzVTS9b6binsvQ24S3nEvcS9PED",
  "key17": "4LTH5GBnM7iTZXGdRaBUiTyAXmapsJf6XYQjyKoyvbc8Eij6MzYgxUPALLEhAfDnZssw5AXPbyivnDg1LTJ72fZz",
  "key18": "43Vrzk7dQBSkpv7xx1qr2Qb3idMdWrVosn2FboNWF57UBrjXxQDqaYG64GoCjA3QbFv9sy8hn7gUSEnAPZZi5tDm",
  "key19": "cWbZj9TtQxe5s9u2p5KVhHYKqvdfUVdrDtEths9xrdvoCjRCMchfyAz8ixauQBbdsizHn8b5pD8qGJMuX7j6W2c",
  "key20": "51gJog3tzTRRKjWktm9ar3ioJBB58vQjxx9sKqMUhv8ryoBXz7xTQ7kJYdjBmzKav5dZVDweaxTDVViMRsVkEnLU",
  "key21": "FzcfXrZ5WCUsKkqypmv8nPkjASnBYpGbGghx7QsNwNi1fXpVH1CiLH2ob4gDsHYCnnnyHpMZmc8kS7Pt6XrhxBb",
  "key22": "5SakTPunAJMeKL8BsiBMiNGzGQTrcK8BvWuD1Ckr9W3PWhRsQjaTo4FLD94LuTGLCjNKKfga54noi5dcj9JER3DU",
  "key23": "2TD8pqR9hXfVJzW7VnHe4cbsN6icy4xhXjcoejRHXSfzvGbsQLsXCPVtxYr9MkXiNrbvWuKCrnRRAmcbqoiAQVEH",
  "key24": "5unvhozt39MTroZWyv8d6mWbDFg4VMjQcHB1ZPNwzWNFqXNxN2T58QcZwKUQk7JPZixNeKzkB5GGavcCrR1Qgdc7",
  "key25": "4MVxm9Xribw57CbSda854xw6ExPLfUPB2MnkXDMFjhRU11qSWeASSC3oo5wkh9J827Cw7whzCqvMj3rE8vn2EMBE",
  "key26": "4Jztr6Zh3g8SBzBNPyd6A6x2HfrUsRGneN9M6hTxBjPfbvidZU4j8Hr8CA1i14pf3ubUFNyfhAv6BYdqEmxqYM9q",
  "key27": "3wpKeuvKYSaLoPg5icMTiHa7LbDXw6AKyZ5Dj88spfbp4Jd1wWVYFwNLLBZmZSHsZttUtPxCDnDp4Y4y1oTdwwSJ",
  "key28": "5JWSKEruXosDyEzv1JdrcdZeY5ieuKPGAN3LQ7kYEHNJsGGcWRhcayS3MKgwCWTfuje989pKHk4frVo6NNoPsxKs",
  "key29": "64dxcsfMb8ewkaKbLykTqCNt9ib5hvSVqEFd3djbpiMCx211Ytzs81sv82mp4rCiGhhoRBVWDqmftdQZyunuYqL9",
  "key30": "3gd4mz1grQV2CkuFx5bBDZHHrAisbkuUYQR5NUTEPPCLeJKmehZwHPRLx6h9bFSuH9F17utjpLr9hSD36p37ATgg",
  "key31": "4wtDu5RvQB6ded4CmBzDCr5yV7mm2xceG65oHHHYDAvGH5AP4mehFDxqGedVFC24WCotkEFBYejfsEUAioS8jkBo",
  "key32": "sHqZu71qop6vSaedjRtRAHzjdnet3iYmXtJxExQEgugmPVuNwUVGtRMK8WBH3qTog6uGE145xHxUMjz3tVWVko8",
  "key33": "5CrhMNLZUQAEugoysEt2gZXoKQe4EqDsKfCepKVwdi28wrDxRj7FSv5uDHz4e6jhUMyAth1B1Ne39usHE6tzSAk9",
  "key34": "62rpVAiGjVtXr52A3MhZXLbmmsP3b8hdCjYb1QZvFwu4qjJ5jQyqyu7TrtJY2Sn6M4KtRXBdLaX6LGthtZy9itnR",
  "key35": "4UeAr4M87AMaefh64dvHpTR2FiSTNFAteHcdybJz3Q9Jm1thyRVgk5qRsPFoYjExwSTBq6GjgAfmjytegbQQ77Ab",
  "key36": "29gjW9UQ5SsFtGAfcU6fu1THSZpYPzu9RfLbAA42fsuLrjT9TYTgMogNGciihYBfj5SZibMuZ27JfTPch51sBYFu",
  "key37": "4H6G3AbxZM5WP9KhKLxfA7MSAFWHuoEEjbKbwpVvettauAR2YbPzCwUJW5mb7ueuMAZJnxUqPF5S5a5yYAzmwiXc",
  "key38": "2b15jdbdgxVqByF1shjhfXKonLqRLHNbYxVvEcucWuu1PneF4FXdasZFJW1gweYjAaGLnLnLYnZSHRzDVrGuqymd",
  "key39": "2M7mJG8mE1jrsoBFvishmPNNMcQCuKxAoCkrNEuWReQuytEcW3rH7WgwJzoYuPpsWNzjt64sdWeBXSzy8gDqpirz",
  "key40": "ChDXaSWA5ZvtNNoD6dJXFhvdfFMAFgPJb2KAKqzKxnpgZTupTbxnPRvxegUxEEdfShTvDAzQShkCWj1MsMcExLP",
  "key41": "5UebYHwFm7GwvxybtPWk9zDcKc6q775BsApgovvyapsdCJg3wSV8PjzdMeDam7LAmF9Ka2KouC7uSAFcdbwZCNXY",
  "key42": "5Jv1rYKftUEaPub7h1QTvLT82ckfUeAHgiVvfmaQZ2WJJ8Aq51cyKRFVxHTbP7FHqCtB2kuRwy5oLshQWb15aFkM",
  "key43": "BJEvjqm9J8zMoGpX5qAQy2EXfxDaWhGy1oFjcpuqkE2JNKdhXrSb2KtumBcweaEa4aCp3AN9Fpv5fM5jV46PE2h",
  "key44": "8TFfkRdZhNbg8HAG4fJsgBNS7CqiTcR7fn1TPdw9CeGmH8BwuobqEHM9BsNPzWSZs15SqJ3tR2DA7UZ7DDFZRdH",
  "key45": "2o6Z1pnZ1kTRhJY3Rj1dnzeutWRmDoerczXyDgK5AxH1nvFWrinQoP33TrQQiaPLaom8DbbKUNxA5cvDTr9RamcU",
  "key46": "3pMwybDRxWajR8SB2ucbVKFvFcEUaEnLYXVJiVr4FhYfKxR1vUEzRZmLvVnAz59cfgkbRvH7nMuGCRewHBpEesNT",
  "key47": "553kcxuudthAaanknBtsRi1Bi3am4fJoT4MdHhvJxxAAhRq65jZBSGvVBuQFTdUydVQqocyhHvTBJbPsE6sbwb5j"
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
