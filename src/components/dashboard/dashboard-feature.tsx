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
    "3bU8U5rBhwzJh5p178sdwcadk4rg2gqUToYRTrDccVqBTH6wfUUYGnZAaYWk7hCFPbHkddR447SenXXaEJXxgg9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37dZhD8oKKRnBULYghdLxNFfn1uGN7z8w7yikpyqxPVaqjDfhhKgQyNftwRbS92KCHt6kXHFp95Ey1iYXta4qyWr",
  "key1": "4GzHZ5AN77VH38XC4KwYrh5PZi8WWmEKKACJHTffipwyvmBN8oibuJhA3nPj6YSSxnKQK5ozHGQdGAqSXXfp9i7R",
  "key2": "5bC5S2cnyfFpDtHL96WsgJBKD2AtcGNpGs3ttEnH6BXmonozfv15BYNF2oXkydU9mdKpnRkCZ1AVKmLqtCcX1Zie",
  "key3": "jHQkF7rGgtpNRvuAoQxDb3CxydXaD14TRTfDtaokDoGRgBvjFiErF57HXiankDzc9JwiqxCVj1VTyshn588oVQG",
  "key4": "5U4sYqUjU6iLjDeHqK3jx9zMFyr2xt7AEebU4SnwpFUfV9V5sAb7jWXfP9hx6ceBKDEnUYePyradMFkrhQ8UJhxo",
  "key5": "2QQb9fjWH9LgYvzRaEhh82bV8s7tySuiWaayp68SN8o8hzR1g8LFFAhgJDp1xUzHHtBog3sAP1ZpgPRqMw1D1jKv",
  "key6": "2eFjDvhu5LfArCbsZqNNjED735S5hJcGWLRduEZove1j8ozpczXeh9prMZPUsDkw4cgaK3WaVHZKbWtFhitTzvDE",
  "key7": "5E15toziUhXS7WDWxFUFnd8B5f1fAwHQFGCpLqQE22W3fvP39Ps2o68eae39GD6KJBxZ93GutWiJGKP9CoAQK8rb",
  "key8": "2kCNdqS5bkcNz5Expk58dXCAzrRioWkx2GUHMQ77UcswAgazioGczAEdnxzkidP2jB8gTHx8CJHxgBMPe73PCeLX",
  "key9": "5j8cqemCBqjUE7DGinpVR1umec9UTg7Yr41CadP7dWxxrP68rskA6PgYLxbiJ1msgKXzGYPjkkKHYR9VYPkWk5y6",
  "key10": "5inPLcZbc7fcAB268EzSP2EdYuxxBec2F6dpXucZiNJCrq2eGCnDcMxzrp2ojWjLGkx29HSpSA1SzaZi2SDk218i",
  "key11": "2xJvM8ydxvV45ihMbLLkfJRHj4ejnyBvaTHwKjKNGNSsXjXsjSTmLqJ3XiMQi277q4VPvGVMLoxGha5TP8wxCS9S",
  "key12": "3tAnWyiYqjCJ8uMywoAh4wS5tfjacX3nsPWi5q2U2kVzeCcK9vkTWAoks8TpyokgDCvAu8gw2niJ8NpJVp6d5jUA",
  "key13": "67gacPgaEK9jfMwi1LQ6Wef3cCP2dzndgVhjVv2f6CEXYbG3LUjxRBssby3nU9zHU1ajhFKiqc3LUNVgWrkeD19B",
  "key14": "3hUPdHo5PkwFkhykRrq2MxLoQ8sQgxVCTTPLRiKyf2TybxuJS6NkMYKD6emosyjqQCZTdC5qmhdQgE2nm5bRmhhg",
  "key15": "XMeXqPo1PHNwoB341Ff98WNhKy7dtnwH9S2opAnKcU2m9Q2ETZGEUdLyFk75FQNtL7KXTZiXY2S2GfXDBY3FSkv",
  "key16": "4XkpxjE2jVGgMAkocZ2sPX1vC6rj151KCcJCkvxqHcu1DPkyecHVfHpzthpS4EPVLLJXLqEwBqNBBPtQ7uKuz32u",
  "key17": "66hQnwWqBsLcKhktJhiBtJyjkLeVyB9rNuELYfbKW2enfpq37n3NvqXFQAUs8WoA4atsgY1LMTWWMo2JuiSVM919",
  "key18": "4kwjSNxTe86sNUJidoiajiDhAYZxG6mP5Xz5mpKJLVKAFS2X1nscMWu5khfxBACjVXCCGA2HdET3RmfKYetyBsbW",
  "key19": "32qFAWkYz5rCYUFd8QsQ1NikMqSYMU6BKDxGmM9g5GNCePrNmH6KsZPXM8gTFeYwsSLfQYsk7FWeyTTohBWrKBKQ",
  "key20": "5GRcws2nxYvM53QFfizf87GMq9xrSJdHRunDdMPdjAfqfutvZx1tSwvyM9pCyamxQbWH33tYaiCmG5TU7DsFp3Hi",
  "key21": "VCn8ZFumn6nHyjTS7XP8Rq4ATwsrCYokRnXRqAsz7aECN5PPCdwDDJ4U38CDLZUezSSVwqqmcHxnSfwVoMcnNWy",
  "key22": "3Dczw38GtScRgZbpYQej3tPM877SJuFATA3VR1eYq25BiVXtQpHAZN3Ksm2fRByaLjsjESeHsjkN4kfCRTPNTLpj",
  "key23": "5AAVWxXvuqBWGX9afgLX5hmh2rQg9eEUJ7XpuGMwm6ARDKgVySa3tUnBznqSvkNoXnWPTiSaGvjjEx9cLkyTfXsw",
  "key24": "4Ai9X9pTT7PrhDippSFgVbgtQNbCfeuWHVLcztw6pETJpYC5sKui6DUNfaUpaciYLtMF6Sy6PjAqRUnn6oAv8CkA",
  "key25": "LUvZ3jNMf5gox98vPT4HRbkspp1uKE1AU8jzUZ1aYhJcXWxz9f1AoEM9G14zUqjcPYPX8Lj2SAxJiTqRVtRp2WF",
  "key26": "5MNhwh4hZQdBkfsK8RvpKQKN4sNtvNvemNv7JGpx1UApbpAyaDDbrZjSjyttnh2QA9K74taR27yYf1pj1X4F9ZFF",
  "key27": "4gqLckFWJA1qvVGcnNQTKuBgXJ1n89MJAxsN3ToDyBZM9xiv3SLswfyPhPiiMgprJfMgnoPsjh5rZKvuZNcvyguH",
  "key28": "4enRZXDvYRqYr5tWznj9aN53zGQyi1ZAQpVkC7e6jT5kFq9PWLShg99hdVewr3piP5WxUuLKmU7g77inwtWpMPgk",
  "key29": "22R2aAqv6Ebrr595yN3fj1efoZfkiGmnyxzFomBbeCezbdNjePCtnTPPinPXyUYt4W7pWUeijqoYpeqpZqwAXz9B",
  "key30": "5ZuQykmQgB3DGiumSSR7NqenwRWcWkmXFoU31Sx7sPfrTKhN1my2J6JCii2nRqKuKP4K79ftKjbPtQG5YFQKoCcC",
  "key31": "3NWs9aoAHVbcRxUXqNe2oKTYCsocEd1vmJEyvYawdQEYZSV5NZAtQEnWno2aXm4jGiVNyyQsphGWPXmwyzDqExcb",
  "key32": "5Xx3YdBEaGttkUyCoHGv79M5GiNkU8bpwt6kzn8VcJ1SxgapqDRfoQxbHW3xP5XG2A9nMbD1qevUPnTdwhiBRFsv",
  "key33": "RaDYLGzhdUYYaTNWsESYPSSE8swgCH82ajMRg5HnyzLUjTD2EEbHM4rkcHEaXWtYjmZZoiCoQGdLNhQoRWZ3SR2",
  "key34": "7bRie3jGVA5xUSqz2ddm6Fozu5ppCUb8XTs5MFBARfL5JokHormXwva9zvNFRw5pke86rE9EBqHjDZTWQS9BMpp",
  "key35": "3meodSmgYfoDj12sYqLcb3nrXZowUMyFzgipYLSctvPwdXfLPkXmMHGda1WS7YayNTrc9RuYkJfjJrA86cnvE8Uv",
  "key36": "gcnvJcuscaitQgsgUbay8vjHsopxa14JFTXQjfMDzKiSR2mhN6N7VQQwz7iGNVtreFKZKHESfsd5NNPujm5xX5p",
  "key37": "3EsUMd7npPFZnmJo56d311YfXJ5zhWtLehaX2zU7tRuk2s7t3Mn4Up5sspFU4SeuUonQzWYiJSdmodfS3hbTMBLg",
  "key38": "PN4jbNVZ7FCyzhaDqyR5Znfd3GWAo5xDR4aS8Vu2qBpc7hhwNi61q882C6oYL7a3f6fGgteCDJswcJnXGiwFVA8",
  "key39": "2R4v5zie1axbbcmmfeWQ1owJz9buU7siFaiAVsWjiCPGoytmLHyokQmJpuGW1wrCbjVZPTyfauNv94PH6B32wzzn",
  "key40": "4RrW27n8wFazCoXrQ8Mgp5LQBrijVQRV1vTmWhL5NPVUaJcjKYaaueCvk4L4iCqaLiD1sSGuKpagyMzs4wkobNVi"
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
