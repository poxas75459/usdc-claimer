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
    "2TScRErmXxyBWrKSCu4myhvoke4c2dKKr9LVtqEghvehdxjDRY7gbSoYvYhJoszR6TqErKYju2QSRKeLVi6rt8Gb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yWoKdRbjEK2bnGv6BhPrf4cBm8GSq8qd6EZjwFgVY56sSuJyxB7sAhvbyubSjaWEe7PdcarDbdpenCPCnrquuoV",
  "key1": "29Adx3CBWoqKoQPCfvHTGxczjTSctq5GYNVy6CHfvBMEtwnZxTDjpr5VC7rDNspryLYAGC1NCn1PLYeVjJ4dDWVf",
  "key2": "4BhHqBAM1G5pu1xZucsiFqkMEA24tm6qr5P7h4G2Fj7GDXCUpjXsHxTQoEfBEoCtHwLWCg3Na5zZ59Pw9dZuzpaq",
  "key3": "3H2C35aF3heCriAwizKJxCBBrxerULov8M4S5Z14P2np32Y2Rn7wmq273rc3yma4D2V48eASPJPVSBDt1yZj883J",
  "key4": "2fQrPsFUe8SJGXxvHnoqvvmASjCihRNu2u1tb9gNdkcCRgbKpfCSdWaCeTTpqWMc6PrE3nesRyPGavoHb4ozMADH",
  "key5": "2vBQGf5ksLpPNUocjYmErpsoqNnAAS3N9HHd4jmxU6RAofRgfvufHZ6g69fmch7PATk2qJBjFX29K8QkXwwKr5JK",
  "key6": "2xifex6tkdEJnGygBwKSJ3yyHRV2BGdg6wfp934t2122f2zZV9AfgGYdfiWhsjDZgBCNRLN6QiAB8Rh8WKU2LhWC",
  "key7": "3F9PzHCdTxFtZWAtALNK1Pu1syap126ZQc2MuWsn2ZA1Kh2e4AAsXdSQQH41uQRFSzVZtUgRiErHfE6JZsCZMF5U",
  "key8": "2n4RHihcoErB4UgFTLpSQTky9UvwBDqhitvQUptWdboN1Hi3zhusb1Ap52hjsh5gWpc6bD4YrqRtdhwoc5VTxkGY",
  "key9": "K4BXah6kkZVbdjayffGiAzocfR8gmSGBfv7TrgKgQ6E26Bpo56gUEHBTLafmD8PsiRV71v8XM9ZHKCwZboc4PqK",
  "key10": "4zCqsYqAgrXSkfbN4R39hWmNNzJUGC8RH1RERDHP8jUpJx2qmp4Lgro5kkxifTFhw5htWd88pLa6f8ozwxbCNdfW",
  "key11": "5rukgFgAohU6gWkpPbKgvDraKPa5zx9nss1h6oC7eECc48ZX1LhhyeU5P8DDWZbV52W7CWHzx1VD2AinFffVT5cQ",
  "key12": "5JKPv4iBR6ae6muqHo2ZHZuxCBsKjAes2j54f8ebsHiWVFDq7WqowYZgVgAPRMATGhE6dFmpuM4JPyu1sgK1DDAs",
  "key13": "2LxhL2hejNAhkiRDozLeasNN4A67BtGtkgqKRqN7a9Ze1Hh1bH3WpN1LQEpMZFGNbiTF5QT1TvdQ25PEovNdVMdr",
  "key14": "4aoxszgBZi9KvnZxFWP5b81bxh1pN9r5BMFWRZ1xt3QXrYX3AzQZnAf9TqVn7y1UkWJ1gPkGFAnWk7vVZHByp6xZ",
  "key15": "6233nPCeqhWwAd862ZevhwKXLC8NiPjMpnCAmhEYXA2V68QnxBop1YsVuDX5x8mncLGajh9KCmP5mUCy6NkgthjK",
  "key16": "gNALhK7BmW81suQpMqLcnpPxcnezr5BejM7sC2kXLjBv3XmdtsLjuE3Q9rJPDV2UvqWm7Hy3AL6SbAQtQfcz7yt",
  "key17": "2H6gtrC8JkdmEECK1F1iT6eyivSs1CibZurdxNxLbXBr3CXrwkac4YjkjVrhUe4z87GUbNhDvqhjYynrNchNS2z5",
  "key18": "3tXRc3ypPtnraCQkCkNNfuBnzwpgUkrFiKxtH3A3KCxVKn164tMhP76PVpx11Akuh3KvuXXYCRNZRjj3mxxJZBQK",
  "key19": "5Ctw2wWKQAuNnM5XZq5uc31YoyMYuQsWaQ4JBiuVeMeqV7ncXBEw72PMo3XUJjfooezrXWSYiayNRiDgbgqLawDh",
  "key20": "5gvexwnRZtDg2BmPTavzMoai5oRWcr6jXcTn8jEysQnLqeyWi41ET5JrWGoxgxtzeru7Yrjfw437u9Eq2Z6cKhny",
  "key21": "4rc6UcjFiNZto1yQCoSuV3qmgd72Gom6EKBJbCCERfJJqau5moBk8ooCrscUWoMP2znTtfpDCWBGeCKp7d1fPN6a",
  "key22": "3CNqKPGyvAPUp7dfyb1go7hnmdnbQnZPrsDf7vSiEW2Q2b7JGx26GfmJizdFmDio9hJE6uAp2oYm1kbDbfaJxoGA",
  "key23": "56jMvPygc63GVYhsvrpbrkSpKws8uQ4UVEHD1BvP9XrF7WdbkHwxRpjVCTsBn1v4GQK7Yw75MS5gvejZfKo3WQm5",
  "key24": "4d8cre33bW3hrgbfGhPXfsenLSDzFWdnVbGeyBhZD1fnUVvx581QmWDwJ3Tgcr7bsPKYntjQ5cCoZdEnCCq2eCaL",
  "key25": "8VkmfjQXLesnj4frG7Sao1Euj7Gezn9AzPtPiFShSdsT3KgRPFco4ppALaCwHe1PMn5eJzY8D8yn1fnBX4YE4hP",
  "key26": "3mMNWepivXqzwDHbhZgW1KBfMT99HXYiA4JDczuMD9BKMwuX1QFwJdb8kvL4YZJRrXHsw89FDK3BmCHukM5frndN",
  "key27": "m7vteA52zKx2PME38rfraWc2ReRC7v2s2ykdUi1AsnenGsE8XDY2aGjaktkk448mnkRCwWPJRRtMWEeXGS7qbMq",
  "key28": "4CWiHygzvd4ANjiFwfbWbr4iqVVTmh221YY4UhtWHsi7cozVgSVGHwsZjs8APCRscjd4Ze3TPPBv5MhGB9pAH4H2",
  "key29": "3h2BK8A8cXbaCCWgghZkFo21bhtqyKppRTegzNB3GsSmwb3i2ddp3CLeCzhPhmkfkw9cfkj5H6sEddLKVHiBdA1C",
  "key30": "5ZeeUF4URLsJwofGXFT8qcaJMuTEWRX2EZBVckjF82YtfHzX1Kdps7FcZUSGJK4dXu93MuPTF7sp5FKCbkSGo28q",
  "key31": "4iFzrKVkbX6zW497hsXiFGn9GArZbzoX2dgVZfCaZPh6NrJuNyEfs9jdMZ4Ji7WVzeHgvRcU4yFLsyjXLina8AW3",
  "key32": "5xJbjce16iJT9WaRp2GBYsGNM4MM35wDukirp5L6rA86mpCWBdfGQKSvu2YH34Vi4EFG6cQHYcbCBTC2abGDA9x7",
  "key33": "5aUuiBdWDLUijGJg8YhYseEWTke8rfQdSLS5KY9EA9LNZaA225QCrxCQwou6RJeLmuSKdDEEAg3op7X9Qdzwk9dp",
  "key34": "eGg9c4MQgoHR3q7ufj4BnByeWM3417VJvjP1zvhdZT4vwTBZHVkFMpjykb4SBKwz7FJiZv61GwiodaW8LsXvgcf",
  "key35": "21KohpuQ3ewGvtA384u8vJHUCkhC7BZ2ZYHz6v3hCpuRTf7sQMEYTePP6mjconaz6xXvH8XzjMU7U1VMBDfzJECn",
  "key36": "4rGUcr5bChTZwZ1AZS2m48168Kpkee5MyCPg92HbsDQVC1GBTgpsTCsAgq61a9kwDzAbpJd9xfFjbYy71hxEFGJm",
  "key37": "ZaXLJmcArqNfNcJsubUAa9Vm4k9NP5xTN2nZKqe9fvykjZGWWeWdUu42mhTE4ewTrxfHctfDDFwMmSbkWFh85Hc"
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
