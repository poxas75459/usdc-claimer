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
    "29Kv8EvrVjAenpdx8ADad9Eh6LN2Z4uxEFemMC7SY2SYCrEATmGDKrNfD2fVz3d1sjKsUi7CvEskUgB8w1aopm8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ydGQreX9kVB4xuRRd56bccpDYqyw92TZ9HeCNwSfG9HrwyYmCCWRSr8UpJnT9uFTQXqD21hWtTEwzQe8WR6uVr5",
  "key1": "3nLTYq91cymVEEtpKHnus1r77c8ryxCXHoDFNe2fdLqpkxYHU8BzB6qnrhtC3SvWKAaAbxnzV4geTUk21GK2hoKc",
  "key2": "4X5Ko6iUM78ykA6pxits3QWNFKbZNW63Sb3iCbtgi2MmAPeKdpuGx58SRGrq6LAJwGonPAvRaudjVfYR2z39wnxu",
  "key3": "46SKAmb4XXc185J9QXAEi9wGsZo3sdBeXrRuhk1nqrHrnrRLZaDLjeEhWTZj2wMyLK8rqPxshyhAh2dAgEVDkQ82",
  "key4": "57UcuErmJd2aTXsD8t3dVBtXkXjpVeXMoKb76S2bmGnLHYmup8dmrf5mrdXD2iJgTw16wmC1xWurJn58TDXYJ4H",
  "key5": "U6E1Ntxfwomy19hXsz9RcJNXsJcgh6hMV2QX8w6bX4LYxWVLXA7g8nH1HXjAx3xbNQTnqZqS6ekLRi7cLGtGNsA",
  "key6": "5wLkpkt7pjGyi2idbZcQsmeoZFh8xWvKVzpiUPW1HXB2fbUp2q4CUqWYkRHuswND3MMC6B1yUUUPV1jaLveaUPYJ",
  "key7": "mN6HWMy6oaAEETujb8niVrJQHpdmQRqvWtLYNujfnQbuDZsKcDvepkTzxZawq98CtfC2vooYcUvskGwWKXaJ6e1",
  "key8": "2fqUZHDoGduRu2mkyuof1SYAMhH5UAaWHvVEo6DeE2zKZeFqmv9TtxHo8ofV7jKDVxSeQD111YzEF4UptXVyQQ38",
  "key9": "4ntrMRuqXzf73fc7JF2tYtC3Z5LBjZxQhkEqt59JMwGNhJxWseDYFGaMDNT34MXRH3hYCugdUdVVHdb8RQCXV1mw",
  "key10": "4jEoSeAgDv2ooHdZn3M2f2aejYmGaDRLoC2rE3KbXYiquWGwd6hPDTVxKXqHB22Smj7vGVV7vCuvE3AocqGFh9FC",
  "key11": "3tJMdPtQwZayZ1guaHoGon1ntdobP6EJ4vtZnxFLTovHpeYWP1uVCwJmUYqqBj9SQvQKcX7PZ6uY8QbDdowGLpGL",
  "key12": "4gd736d1nyEUihvAbbvhnM2Qx98QBGYsscudVhgVnGeP5PCmvFojTs6rb7AFX1gPscJHpmJGm1PfkcKEu43BYzYd",
  "key13": "28MRt7VuVdxcdznnhvZBbmX7cwGWZuQASRAodnjomd9jNsPBnHmaDaUfdaYXhJJwesNwSvvBh6aPwt9SGJ9WXXBD",
  "key14": "24HM6WtYoJ8v6NxB9FuHMf9wALptxNB3EiZK7mnPoHVmiG84ydy9cLE7nErv276YArXPvL51Lb2etTLKPkVpEq6z",
  "key15": "3G6pr6g7xe1LPyMgumkDEhNLAE8nq9vVC3xs7EhpiRPx22bjjkW61H8oVwermSeGNi7t33PCzzHQdeUiSjJLwGQ5",
  "key16": "4dgj5pMeKVgtquAKAJ3DUnkY1uTTUu4UQp5UGAQepdtAmTnboHKhhFR7sorAE6oaSLbNbxWsWm5p6SVHkbb7ff95",
  "key17": "4mZxRVWPVgSADCFVYVESvTFVL5i2tzCNH2WkgYUuoPiw9Mu61dqK2XbF1JT886aee24b3wwCdo6LWz9ui6MVdRj6",
  "key18": "LArqV2t3TDNfQbDFFxePtrHMgdEkJ543ZndpEwhwcCdbKzGthMboy5hN7au3Hdkp8eUtMjpyEVFkRLu8NDUKsQf",
  "key19": "3fPCvMUyBYzGfJ69QR874ywmyy8dgnSTb65Y2vCcfu2PoHrNFphJrEfE3y54eNgtuXY8hFMKYsd4UuexXEnSRBXX",
  "key20": "FnUerSczgFJPBtEs87LZ3NQ4FofB3RXecJ6cvwxDvjXuFE8t1UTNLATpW6E6bdM7B7TdXypTVeC83NMQXY223ns",
  "key21": "nmXNSn4s4Nn8AJHPb7onWVVkKSLknKvv23ptrN73txAk9MytPnaon6gg6G2qzPKuc683aDg9X85ukpmNSqrxgfB",
  "key22": "3QDVQpHHjoEocikdYWpM9wLR8pTisA2Svg8tD73RRhhdQWHyvRY758TUgqLjQqo73oe8UsTSduy6c3ANHnTiZuJc",
  "key23": "4Uv73zqaU1Ch8c91qowbFv3JKm5WXY6Yg227Tm3F1i3xKxoQF5y3y4NdjFN9rdi4MZpsaqfPPyK6VpKLXetVs3WC",
  "key24": "41Uo1N2Cx95StfCexH8ZwXEe5X87ko59DUmYszPXkRMRnsSGDEbTxYRmzBqfzJ8paCpvYvf5L41fPyaxRCdt3wd6",
  "key25": "5i9TMUikGpLsuGuDXQWmHpZnPwCRoCp5mbrfUvDrS3avUj4pz6gVPb7iBhVcDR2BM6cgBTaDCFJZ6cNi9oqjVpXh",
  "key26": "2fJXd74wapPhU3hQ2ajzv7XSpEqxkdoYU9shhsk6rkyatFdiTpAguTTH1oeAgHJ6Asyr6FsgUhxAri9UEo2ZKgXb",
  "key27": "PFAy7cP1i8DsnAj4gqVJkVrqcQDApZRmSbDqWKyfbf1d1xEKp24Yj874PHqkWDVsgHim55eaGNScV5BjaLQr3gE",
  "key28": "Y26nvtFjw6EA8pA2oBwjDqwPdhifgLBAt2RF8fSM76Hg6ZzCRF86hp3Awp5CDVGxas17QCuKwcSoY85PXyp8qsr",
  "key29": "NKia1xVjjpqZAVzRkeQx4mV4iJtkmMXTWagf23UDwyyAbrCj1VGpmSiUvHfve4oMBh9VRnMJpUDUixcACQucR5o",
  "key30": "KcgAtqsxxDeYCWy3ZG25fkJD3ULiLzpyHtoDCwysAXpfxcVUvjHDo8LtxJ8Z4Ps6UsH3n53YSPPER57GEjrRvKD",
  "key31": "2DHkVz1L3STHB7WLxog2ubzYqG5LDnUuEDvpFi8tDbs3P3HiXdc6fThcW2qDd3UE9yFjqPkyRkAVi7Tgiwfjeikm",
  "key32": "qRsqEudgBaJJ7YFw9TxWUj3FGpMWkcJGTWhs6MkMecUUApFyo1nDeGLTGUGq96wGTgujENSbwWwzXZ336WCtsRd",
  "key33": "4xh7Uiwj2de4ceEjRZYhcCuqnX5rBMttuWhgn1mQwEWLw9aPVwLcTTbSDgipJo8ymXropdi2hCYxgXkNQN2V3UAB",
  "key34": "4jBxcVpPAD3FaDHEEUmT6hvaHyTJGXiUhgNKYLMkcA6RQrSu1SCb7Hpk7UsFDnfZZRocVDxdwYmpmiThjFBcPTQ3",
  "key35": "2zeywJRV79XJ9n4MAZvM9iYfUBEsLD9t5EWuc8EETHgg6QXY7j69nDtyVQebo8HDSjKxd9JAk8Tu3RGf7m9TJjy7",
  "key36": "48DCdqSR3p3B3mRMYv1yGWvGCDf5qSFRHUp315wWyFqS168jW34oSD11T4gM98pEH3SXsGQ9pfLYEKw5nxSi3mG7",
  "key37": "5Jxwa2bfxtsSz2cJ4HY5u64k62nS1CCerztqLjMFnJAQ2vhZUaH9tbYvRwXBwdw8zn7WZNbApBzNUp49Nc7jLnkx",
  "key38": "2aFqQoHqRj8Hy6JfjMJ1Q4SkKQMrqTbvfktEy8yyLq4rkwyFQh5KNujybK3F4hKP5CdtMxFckDZmFWMFtZcjTucM"
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
