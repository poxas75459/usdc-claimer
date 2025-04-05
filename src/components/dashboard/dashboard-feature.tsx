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
    "2d8VhEuGmLHdFdf3P1GEAAChtPVBMw7tV7dAgrsoLK5p9viJnRczH499CiGKr3Ty8K4XVcuGWET3PYWHivr7PiRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SrbSnHCz648GQFiRx3jK2pCbz4TNS8XgLTmhZjeXinRQ6WMCoceE7KM9Ysbixkhw6GXhV8rt5DftHL5Yp2KCPWq",
  "key1": "4kaUDZuTr6PCndP7f5NBWd4XeSgrNaXBpkAcff32AXrtSwVNHr4Q7AeVgFpsBdGeSv5JdmX471irP4PtSfd6an4t",
  "key2": "5ZLpngczpytV1TWZEsCSE5Bus3tveMMdPKPFRf5J5H9j4idVRJBYF4ByQtgG1mkB57tCRq8ATSb15ccu5FZ9sjwp",
  "key3": "284YW6brZ32PshgQcawGa6oKLbc2L7ixP9rZUkuU4X3E36U477mZx1Djz77WCkTK8BwgFADWb8s7if2an9jrVQYG",
  "key4": "47N3Y7WpCrZGAhz73XTVYwdpoC1MdcoPPUG1hfwHw7wWiUfqSkSpX48Tp7McddooanqzRJDmQbmvD6ZXT4t9Mr59",
  "key5": "AdT3Bq36gxv1KzZeuAEyxgaEwj1QdZWGErLFYqMaeNm9g3DHxUKqzgtRahp6GyB3rFqfikDcQuiqGH86kw755NU",
  "key6": "4sc7qJbLncFWfx8B6Ygaa5iq4gG5e12jujUaYqses1TfqeFd3GFEEsYEpMyeeqxJRjeVuo8LCDGF9E98tV6YWLCW",
  "key7": "R7UXtuAZSF5767UNmku64DGuojHcP7WHDrs2gfY1LxYBSxUAQeg2uqs7XK6urzG7aFZ7PPkYG2TBURdaa3PTeXB",
  "key8": "4qxo1P1ZDC2r3txwBhU9Lm5HmVUXvniJRVWrN2Uz8DGFTGVEGGWzVNTAKMT314sBT7Y9vpe2vDHysSDp19hgap2t",
  "key9": "BoEFekTkxb44bnuHPzh3pcnMRmEoHq9sFgoNawXuUZvTmx4cNrCc8dSHx7wSiXgB5DnrDzfBu78iu59kwQ1GVmz",
  "key10": "4xGEbfk97egfAfGuHgrY2jf3jHoiCwUbHctehRyNuDwvh4s1hWSkTfxhG1NSJ4TA3tUyQkoe2w2epgqqjsR5dvBq",
  "key11": "4Nis44ADV5RV2qCSxpfN88fKqTANHLLbc6TQZRxkZN5o31ukZQbv1BDeukMJVYxNfYf9YiVNZ69bVGjvDSKTgF3v",
  "key12": "4wKFcXUDRBxSA39xcZTVKFfXMECaXraKyh61rhCcg3ErShPM7rQh5wqcLN1QKmcGNLnmmd7LZKNuDgRmhP4xSwmt",
  "key13": "3AAtp1P1wmo2A1fTXnpH9bjQP8ERZRPqebHqTn9ej41zUw5PMpTnPT6rP9ZGP71PFeN37g2UvqCVKgbwy7Tqg1WB",
  "key14": "4tBYseN3w8ipSiGN7RKSueJMcZLXceqTmNjT8V54rDLDEQy7as8vfUizfDfqT23cK89d4ADThuVE3gBKuX1Z4BrA",
  "key15": "CB8nEP6M5YZwEe55TQchohfFKT6n35GoL8EZYo7gYbRjQDcnNDHkvdJLVj1xNbQBQXbm6sTRu9oJxtd2i675PUc",
  "key16": "5YSkMTrGdnh8H7eymTDAhS4vSR3CQ4YinstyuRWZRV1P67HZaMJa6faAKXXaqm44WewUa6yBhPHW3PVGj3sBuM77",
  "key17": "QXnvjPzbqJxyknc2w7e7LWDt4Zp3KGTYsCfAQa74NsXqdm2HSadB2i9XvECKqZwZM3KGtstdwEH7mGK4heuibPg",
  "key18": "xQRbZJYxJZebHGHcSRQD1QfJzKcez4j5XaFUKigGSREVCt4La5PJ7U8LG6eL9sp6kS7MSBwSts8qpwjajYd7t6J",
  "key19": "5iGTcwRb4ueLKJjNkzVqx2S14qhZuKAkdveaUqU11oLz11EULRA1w2jtDCLdgzm2uB2yiBJroZykrmVR2Bg696Tv",
  "key20": "2upVcpoeMVabq9yLGCzndgE9d15WbPkxYxYzo9wcT8iGdouXxQeHcZBzFFywSYsyu1Sjp3fGQV3towNg3JnVTqCu",
  "key21": "5R5DJ9yQrpqmu2hdhjbCSfHTkAyN4bADS8hD1yHwg7H8ju8Z6aLzKWmBAVUoPQPsCbFcD3PmtxQ15bKNBV9g9ADe",
  "key22": "5fyT8u1bCkK47GtTTnk7Cc1f6hEQXmzEvLTkkCk6rqkUFQkbCrd2BZZmdPg8WnEseadHdvZicJjtDXbd5S55nEFc",
  "key23": "5jJduPpq7Z4yJszhBRCbNXzSTTLuwuYbT42Qj3ShgGovM1L8TuK7qS8o9EsoVPsz3RTcBqZFi5xE5WwDKVFMQST8",
  "key24": "2RLqRw6Nx9YJ8Kf22CSrc16HboBTmFVG8MVRmRqACpwQHu9xR13V7oYrEJrQeYbcKaSySgHTME1Th96egodL9UpC",
  "key25": "3CbQxKZs7yarweCeH2XQ9gRSD3Tf3G2wtH2aS1FtwHyzbVnaV18wAJKyMvMyQ9hnzvHKhrFd4RPJhcgz1CxZ1rab",
  "key26": "4zso42iMzwaLLCYt93tVzCRyjvVajTCErNdEwE3xQXp3mXy8bt9jydcWM4XTqEZSffSqTd5rBgMHFZK3RqHqsz4t",
  "key27": "2jPvdH7Y8hSFUhXfRgxoL7PJUGLk233oua515PHZgFc37iUzz6Q8NFdRp7YzEfuzBKtKwyPSRgR9X2tP3MTJu753",
  "key28": "4ao47zfsPr4baYrnVzVonsw9wTy1wpaxhvbAohCBAzKQTzMNhpnHDzEAAiJfkkiiiMrBkdNBxx3HfA4XSJX1cKC4",
  "key29": "33M1ZJMer3PqVJnPg1YFNEEndxLjm8KzYmaWVAerSipPNPFBejjcXhYyc5HAz4sVNpaQWQDwurU7DEt1Q3TwPjLS",
  "key30": "3PDmfyDNtpNqk2spYXZUyEBJo9pamjSwz6oW5fPqavk5GPZ3Gx1nJh9bTJRVxyF8LvW4iLt1Lur5YfbcNq1auqAo",
  "key31": "gzk7ENUNQr9Cp8ATyJbiv1XQw6fS2Uei2UDr92gj6HWJhphQRVoQc8ft9XZpuc1Kr1NyS3GMedkfqJwn5BwTder",
  "key32": "4XbyapDe971nEm4pMweuaFLScgSr2qEQmh7jo8fw3tMjanv1o8H4MyU8AxrhY448Rq8AjRPTfgVULwwJC84BdChr",
  "key33": "5SJ6n2awRgfp6YoanRUZr6uoxvoa3yX9gdWPvP1A2AY5Px4eERfkw8ErzWbcUoYdcteewWgaum1tSejhToQrBBT7",
  "key34": "2HveRUe5hEKoyFX8XwsevxCyLGCcefedWdE1tvs2KEf2E7SrHnRCurQ5ryo7Ci7FfUjtJ7pWEueMC6EQJskn3Rrv",
  "key35": "5QM8aVNYozRhaRGegrkkVRAiZzv97yoVZLEqVCV8ZkJsYCZQDskJRMBfspvHfiA9uu4Y5UeVZqwDPKboVDtt4Hxe",
  "key36": "4VnjLxL4c9jfXaGV9uoVxrqrfMjhfvmxguGzeGQGymn2zBpRikxbMkxKiZDpWzYZHVQn8nrY9cPPmUCaATZbpsrW",
  "key37": "3dhsSRE6qGbZsuWDeEoSXciEQLCRt9rkLmseg7bceo4UjEC6KNy5xEyvFBY2jCQ1NhHqPWYjXC41nvWxwDVL3US",
  "key38": "3prsG82D6EqymczNgTCLaJzeMNb42YrVBwP2QkQDbwV38juawQqEkQZ1SCU79pizEkCGuhDFacerhEE5xXWsbaNw",
  "key39": "5nu9Kq681mUmPRoss2pWy79rJuwNVJQ8QpeVmpRzrSGXyJdinigViRuf1AU4MFMuueBkBYcxkcNYxEt8wVBrkNcT"
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
