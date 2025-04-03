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
    "2SmCBqz6byyWiPNKJ1kV99QQNhKVoTCKf4RBDFYWFrw9KKvcogfRzfpGfiYFJetMGrt2nCPF6uRBkgsVgNmrQqJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dUPJKp3oARmMrSkNQaXegPcupT9Bx7quVhAhfMn5qixzqQxs9C4GYFrwew6cgkwENfhU7EgCHdLzFKwmPrFqMFu",
  "key1": "266b9EDGQjBXCUN3PbfUXn2jfAvoE9FzUtgaW9SZTY3ihZQEy8xaUHDCtN2sGAvVmK8gMWEuZvDV84uuzBY2rRuv",
  "key2": "3mAGUywgvkQiNze38bc92rFn2XEff8PZGr453ovLMhBChhzdLiaxqECdKMud6z2nuhfixNyS7hw3Ei23wWeuFw27",
  "key3": "2sps5WMZ5hdb1M2N9aCPGqVdFg1VMRyWdyXnMd2vzn63V6YjhrSPEa1fqSaEvre9hYv1yP7auc5dn3xFuBoMN4cK",
  "key4": "bFeXdZVvgWbkzLveJNqXo13iatKRborDYkcoZmmibW8M9h7enPcMkjafpV71D5Ynompr2daRizQ7rsh5GqeFyT6",
  "key5": "2X62FnJFB14sDaqAvZMUzCsySBeZLNsrsnmduJdqTAN3MmErLsfvuqpUCrVqqvghV5ef6T2oznyGx7UbJr3GGPC",
  "key6": "ZenENbNsQ9ThKpZvxccwNuLk5fxB9YQAfiFdE7pMkimQHupq3N7NoF14DNN6Xr4HjdFzZS8r7eEAYQns2GXwkNQ",
  "key7": "5RQSRcP75iU7tiAEiLmGKrHB3RgYWPHCQMw2yxrZNzxoJavbhNPx3TsszoSzVWiQG9sgjQgXZ6MC1LqKJn1smnss",
  "key8": "4YND4FQ3Z5A1rRAgEPG22yviPJyNYXEztTRJ1PNKhWKneU2sSPi5Z5CNvfVJUSkjH7WnStpscoEETEgdPXWDyf43",
  "key9": "312pYZefwXmVKcnPXhRMwfKPjSVBnzVDA8XSCGCcapHgZapZVpppvk6m1JuY8nRgh7WWr8XeWUfY1FkFC1Lb3JvQ",
  "key10": "4fq7teKyQKmYgkeEXk81VhzH6SVtCmEL4SgfxsUUKDsDzn2ySZQzkUpAMBzT8SRCDhkDizM2yi6apM3LPGz2Qtnm",
  "key11": "5JX9qB3PfPgKWNHSNzhG3tmWGnuV2FYxqKPQ9tSoEHWC7uN3Sgar2tB1nByca1ZD5bFjJodEZmyoNkTd4Rqmwnyf",
  "key12": "WBXFKvDp2DEyX8azSJLArSjNkcD8SXp9AWdccT9AkrKqYYR65ty9s7izDpayhTXwv5iaZmVdB2zC3P9z6LfGGLD",
  "key13": "2Y7Rij8iKxVhuexhpzPEV994BDu6JhnzDscV2xQEAP8ar9HLSxuWBrKdCnB5KfLwGHXiBzxfHsaaAXkMvxZYX3Q3",
  "key14": "3FR2bn8MMS8HbbMajf9KDVULnrguK6pz56xvNWXGzb5Eah9oK154v2xsKue8JJd6mDL31XcFaUP8SP3G31LtHFMm",
  "key15": "5jwPtsx8jJwUy5R95sm6x45oR3rjtZypKQ2rGxpcX7mNLGcPJpLM97ioS9mFjx5bLMwPGLFtUc9ZPTu54io3s5o5",
  "key16": "3NeLG8LTBjJaZdJEwFKzhVpVaDCVNKx6QprmnMxGpiEfkqfFpQQjkS2oDVLDAsYG8fromjAqGkoVwPBT54C7f7Ji",
  "key17": "34Pda1KZ39tJTZPPEXhCXfY5SgXZ19UHJ9nJS28cZjmiSg3TEhwxPZ1tmz6vLgpqKDMJH6YruXbkjvsHdNJK3M8R",
  "key18": "2EddEGoqxHX7vKUGFqJvWfJcQTMx11KTYbyBKskbNL49CrPFZWbVj45JnsnZhXfXAMoB1HdFwPhsZxzF6dRikkYF",
  "key19": "NBUfMZuRy6ANR4TFwhApnpiDcUXBh7E1xePRHqvi5qyC83MrFH1XY1wS6fH8BY4jWrhLbVJwV22vUKNrC6eDHx7",
  "key20": "3K5BZRh8mECZVpvH4xvV9JEYPh2rq98GSxd5wjXiEmGEaGRU5CzoLeUC7xeho9UTAt1iTQQfgX8SLUR5BS8butgs",
  "key21": "3KVnvpZb1RX261xLMGfjEmZ24kavgDpCdgwbWaU41dAn33HCcb5fBxAwmHBrTVdEPbdcVRNqzSWTWFbHyb5qewND",
  "key22": "5Rm3MCEDGLMKkRE5T2Tba9Ze72tbhcPnHh1Pc33ZNsuvuDsxH6BePR4zZ9Yb4Exv4DndwNYwPYMa79qkiLiaZqNJ",
  "key23": "SPrYDUubpKxhqUmNHUrQ49648qkpD9MmcKXtNRU3WBsfb7k7KJgKiijkgJZTRcppdQYCPaTVYeJC5SzdusuwGwY",
  "key24": "5JCB3NZz32A5MrLrbKYRQ8ag37C2E5HwGSGSckmrRkeDgjzXF7FNuHNw9Z57Ba8umbb42bsjxgkNRVEuQ9wusjEK",
  "key25": "K2BsLMR3TTu3n9A3wBibcomFq9mhxR3g468mnXrvLU8HCFk1cxMigR96ZHkZhiR1CiC3orKSUCt42R3u7PL8x3g",
  "key26": "4PfbZk8v2S2NxCTMcDDUwQmonuRNWdT7ZDXozkZytGKt3B9npvLqfktXnnhbsg42JPHoCAoseYCcQgK78Rp3ZsHV",
  "key27": "3a6GEReqTRysVW1d4Jz96vWd3ccUpkP4EmbiHA6prp8rNyUbW9SNfNtVqEZ71SyeVfUXBUsm7cJ86H9RzSo4yzSR",
  "key28": "3Fzi95HJJXr5mqf4bSe2DqwreFg8gQRHEoi5fu1WZ6wJ2iFN96kWf4Dbv8M4pTxpVCEYPttBCEUh1ikGFLa9nVc9"
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
