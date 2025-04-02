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
    "2mqiMocEgiKbjmmPUhXEJxjo8kCj86MLjSVCBYtdwmzqLeBkf3aLdmmN318n2YQQDhMNgX9j9dbi7rrZWiErNQXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uJzKTYnWMQT3ybKf3S5UnxD69rdxwuPTZStuJBT4G5UH3q1pU6wdzK3GfSqD8dWF838dCoJTqSciWYqbxgqr7Xm",
  "key1": "5WHf9VxXbyws57aSLFC9m3HbH2vhTRgzHfEvSSwzkvCSrj1goUE7gXV3mrXiVwqrTjAcQpjEthSMWedUhoE5hV3i",
  "key2": "5BHpmGBN5rtpeeJcBfdsvJwohVx3Msqv19tDDY1f6B8aY81nfLdnyJghdhDTUvrB5AxgSTe7Dr4HVv5RkqgmwHNq",
  "key3": "2fhJcYqmEStbRZ5yFPWHH5nNm6RJDk8qgxemPranvS5Nw2cLGpojgmu92Z9npBgYwM5eUiQ2GuipF8u3mWMf1wHT",
  "key4": "3qrcYZFCEueeEo3TQvHQU78p3v1wxMEWS9Cd16uWSrJWBPuTFg95r7doMKy22zkfPwnvr2ftavQdzk7cmx6SCHbt",
  "key5": "4u9jVuRSwe6pg15KZbLMv1kUWErAh5Eyhmy1cXjArRCN2cegRqDWALUU4WLEiXetE4EYctaQZ3BWaSsu5Dt9xNAi",
  "key6": "5Hqt9YiXrsgTk5URpK5P5xuV6Rzn5K3PQ5LKkBLVwH7Zbfot3XKT6ksceSwHVc1EiuethkaFkn3uui9jiKPwu6j5",
  "key7": "4QGizynxYj6kraJ1dyfTvf8fwQ5hKVoj64UVkMoV3yLZJemFbjPhep2KXPPoB8fvKW6Ej882GX6KHuT7bBSabiVs",
  "key8": "2bYrDTpm68kMWTUc782xuzaEwwSZrr12YTrcYTY5MCnqBYZC4aoXVdUpDL5MBqe6n35fzNP9i1PZyFMFmsmtLqsY",
  "key9": "4KbMS3VhP2Tefq63g4CAUMkWojxVY9eL1MGncaB8XkHgZKYv1YxYGtGKUEwKoEBuqf9VQTjYuPCjVMMMMEtrHsDB",
  "key10": "LUtpUwfUVDUF9gVJgbbswpJ66zrHV3uE9r6gCxcrHYb2BZiSAHjfpczciJNs5iqFywNpTDVTCmcq6qmr9Lxr6uB",
  "key11": "gVwCTyQAEF85a2Ee2orKpjkpFjcjSQzAeFyR3w47BMQLdwD83uB6cUCb7X5d2Vxbr53i69AEPre9eaTyqbeuczu",
  "key12": "61Fq2rewsphBUt9eJQWfX2oWgcr9xqyJmP9dMs5qTFrFQu62BYmxTEy4TDCB66bQNQFeZG2kD9LjvKpVwRqNyrN2",
  "key13": "4cMESoKBV9BiktXqo79rgU1fDKFurzTW9ernBNYgVJX5SmcMVmH12JDiYYQHiGngST4Fmhu78nFnsotJnAaGZqpK",
  "key14": "4i1bgGyyorx117snirRbkhhaG1etkn9g7gtp2rMYaXbrSkS5N5g2h9GNoXT8R4Lu5zpREBrTNnQj8ZUnnEgrfy7x",
  "key15": "3n5B5J4VBbdtjGNRSbs6GZ73quYeczexb48ieStxRcvnaWba8jZeXLtMRsQTsCg6YJuVSBwcCgR5mAgsY4Qsepzh",
  "key16": "2375i5i3YdX4WzZHYTmSmkknWqafJhxC1pgd5rP6KNS9koBYwdXZ4mN719kxBKbstX2Y7Xknj9a1Gw3PkoNPuy1Z",
  "key17": "2nTdHzzheUWW9SyzFR3QUkjumyNMgRBhn2jAcvcdJ1oXt5RktTMYMnBSujLVL6wtWm9ohuUZkHtaJnvr3Y6KFwCo",
  "key18": "4seuK9DjvDtVvrvaFhsnWYCDA5r9FQ3VZbraxybmKaGoqv75BF8wqq3MWnfYABphmABten4iQpZoWQREBbqhdXfe",
  "key19": "gsP6YMq2LmW7X8HyVsRnurfwNtFvfVUqxBBHKycZqh7mBr46wJSJ7Jk6xQpxtVeDh9WXZ1BBNUM8JMeTmdEF4H8",
  "key20": "d9ZxicxpBP3Yy2CWgVRK3K8CC4aJ1pdcucp7YFTebxTEWSY8fZqh5ycWS1xRzSRmMWgyJ2JpzDvVLFWGmAdejJD",
  "key21": "5mBxPvot6yBGmTruVJX8AuXw2RsndqHgYFy8UqKwyEiE8iWgVimpbhF3TShgmaVuWa5tDjyD4j9QnUgbT4J3KJFJ",
  "key22": "DsZjHmoiJEh2LviepU75gc6cRL52m1p5SYw6aTZzB6aX7KeExQfKkXSg7xTNbNvho4gZuSvX8TtD7maxQZTJKqC",
  "key23": "3ada7p6nusmqrzsyknnqD55QYGgB9A9qD6thVRP6YhYVQaKHpCrhGQHJ2dfTkWDhyj6rZ8NQFMeTg3z4KWqWnHgn",
  "key24": "4Mk7jGe4zgt9WrUhy8W1EQpx4hwR3hnLvoqBFFTzr7tYRSZSt9Les3sMm9FbLp3u2hFHDWbkqT2Y6PXJQf4cdKdo",
  "key25": "QSm7yfvAjmohjHTYqvKrcd8DymxoE79CU864XJzwVxLAExrF8D7CoCYgn3oCBhEWiM216ZXCFKnWi9yFbJJUcQh",
  "key26": "3oyxBmQKaBCcaqKQYp5PdfNmPMUKKA79Wxg6tCFGLN63qK1bQdcu6ZV35ZGuPoPxkGGacP5JSYS4aTuzHqXvUbxr",
  "key27": "SKqt9QVGzhWTp3y5586z5TdjRTDK2H2HAxMgEfqZ9LVdnjayjjUhNgG1KmKH5t2PtRrXcXuLiGwmjDLiL7v4R9m",
  "key28": "NYXdMDEqK7NoK3UivTXBqdxKSgmftUHbmzeYAqfXDghdenLihtvJLEtEcMrLJBGAu6teVqsaGs9Va2Nf1zQ35sW",
  "key29": "cfH8yRz8m1owEsLr8tVP79u2Cwm8DqYC3khVRCc29iSh2gQk111vco5REF3AehQHQxFHa9XQVBtuKLTgFxQzohd",
  "key30": "2YaEcLwZdpiLDCACjaz87qmf1ZbNzWMMepWcMpjMsuXfWJyRDWBgnBZm26aiv4YyHKMa4uPeaqUj1KsTJW1KBi1E",
  "key31": "4YqbA2AfzAy2VEtXcNPb3t5CauZapnseyYwudfkJyV3xaLCkMXKbddj5YSmnX291vAY9LP3efHYBteeAfVZDaZZQ",
  "key32": "jP84LpRPcJMTu4g23NYfUNidSzZyFvwoAf7H2WMp2LfTM5kFAnxgprk1rj5YASgyvQoS4CwoifQxoAisQ6zaafv",
  "key33": "VUNtvkqDQJUHBjVEyU15U8P1fdp85hUJU9oiEdd76rtD7GKRCXMshbWgXm46iefsn2X6eA9yDg9aKKtdq1PbDBB",
  "key34": "33j3Xefdik9DuA7PSGH915EXcNgWh19ysutPQTh2Y7DsPRge2ECyGrDzn9Yg4UdbJR1ARn6jUmD1w5NRfuBYKZ6r",
  "key35": "3vdEas9ZodcRkJHiwMhUJ8JZhYHrX6a54uZzmCVoaNY84WJi1q6ngJhE4wnEGiK3e8AUJZExiZPgbSAJ1e1rbV9U",
  "key36": "3YtHwdnABqsBRZXELGhGSrw6pnpSo3EWMwnWGXC4ehJWfP3kmZTxgoSYGGkcubwwTXnXGTEdEs9GeDJ414skeiqP"
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
