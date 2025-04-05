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
    "2d7adVDu4J9LUJkyuEWs4Z11dvuQepeSNBrGF7zUdWXdB8nNDruN8a4v5DJbuaDLRzF2kQAaaKFQAN2eaUTb6ZB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KHYczus2yYdmfBNzjrbXZV2v2Gzrqv7JXSaUAHbJ8swockgLrf1KmtxzerBjf5CrStmGuhSdDz3DBj5tiMypXhR",
  "key1": "efTzFgBrrgxFsnCqKZ5EEDdXDJgrg6vcdni5bkaaj5WHwJrSqnMAtwZaNKcBDCT8giRFBd1U3ZgtrZoZAH8NQtf",
  "key2": "3YigFJu6bjpKzV5GfAPGXfRf7VgHHpBGNsJUvhJ9qKVuoBvcY7nsP91bwfW3Wgm1csnUPqYx517dq763HpVLGPsx",
  "key3": "2K2YrXcPZPNJEYWj3VuDWrNvSimzuEUie9eB9zJYLGeXMkLsdbYYrK7LTdtAwkTRqHZVzuneqRSg1oaNscdhgAcN",
  "key4": "2GR8B6WNjj9rbjTh2JC4TDYdCni5nRTYigKaW3pisHsTT7sMCvf7WtTrrw24xtSBadbdJfQLtEV8vUFmcS8MSWr1",
  "key5": "3hQmo8RVpXQeJdhcd1oBDdUpWKy4RUwex55fB38iBW9XNnvNp5RTPAy4nHsaZntb4Ueuke34QZ7dkce6Ct5fwthD",
  "key6": "4wgzPKDNA3zSmwbCrVdSyMSa82cXiBsY3bKbkVcqoCcfesFoTw7RF7eWFVijy9DSP9FBoExNrm4ap48dprRKcPdB",
  "key7": "2u9wGfKNw2SSE7jE8ELZTjtP2XmpD8icTZxkQ5w3iHrT1z9ggLcSNiT1DUMJqWbVTznRkdxLxkqSsZt2DTtVBWH",
  "key8": "2JRJQcgG4fmBESb8uQJYw8H4NjLsgURiXTqVysMQWZn6a1td4F5WEaKwcGg7Utyd7pbuGDmE8ExeDwdhi2erLBaa",
  "key9": "4CTbccsoovEYnvBatk4V1mBKhts6b157eWM9x5QKBkA1oxvwYqwk3fyftZzxmXmQ2yEQ251GYqCHy6nrvchyy8gb",
  "key10": "3F6yDprzcWWFkTQ6TNu6yPo5DLLo6Nk52zYvU7BwX9cTkMewDscCS8XwGswVcEchkpRyyVvEzfyFLKvAqCNAxdz6",
  "key11": "3xPMMjJLk2pwN3c7LuqBLA26JXdAnTm2kMaSELM5kd556dHJPK7gkqfEGZjdmHgat9LjREyYK3vcH7JeMHYtS8ww",
  "key12": "4WuwgmPmhsofn5EEAUZJMk8SW2jPpdJQYypLdkwYoLU4vWzLShhxsPVj3QBVphZFHbxpBCagaucD2V2f4iP1pQTG",
  "key13": "4FfeDfGy1PUpVkSYENCdcq8YimoS4ydsmCDEKN83GdvkmNPDFxtqm4Hk4NuYqumWeXZs5VNb79YVUiHkso7R9vp5",
  "key14": "eboExdKTceuHNWrxzQyAkQXwdWpHGUP7nkWJ4atCVDcFxQms3Lx2J25t67aNEmGewsNXFDeSxLXmKVJDQ7Lz5sB",
  "key15": "2or79B6zQPQooC9sN9XNyeYnxQQAUZz4WGSCWKKDUEAz9CVmmQC2NVkd7cTc6kNegatwiDYDLSAeFqK54ynWVQnm",
  "key16": "bMYQyN2bwDxHkGKroCrnP4FXK7U2D7NK2um4Yg9DYjVzxzRthFsPJw2nbEySBv8xVkbExrZ8tERW8mZi3zGGvHF",
  "key17": "31WhMRWdyvRiu7Q2skuyJJnJFP2VY2XuDk66PXBkbEP54gByvviqFomXXgiLye1QweLbT5EDQRH3WxtZz5g8u3Af",
  "key18": "MVcAZqzz9LkJcnQJCLjjymGpLQrAfrwZci2wC4S3MjQR9AkAveFsLPCR2KY2BVmHLGit4Fwh9e7ZZQ4QcCLzgZj",
  "key19": "58vDovmknjebgj9MRCj1iJpr5oHZyw221afwxbgJaYwDndBjfvuzgXpEb6Vae6r9zmhoV3kYE3krbRshr1mmxT7B",
  "key20": "5NLnXmyE74jLF13o3KfGXxu65v6mERoJiAsAsP8k3DpiyXSywBaEEiCP8RuyFXgkwJjGExJp8oAubAAaYFsZW5PM",
  "key21": "4CtB9sN3eXQYCK6vLsUx5jFJXZSyNREG49dA3tbxUVEpjoAzwS3KzDHzsg3FGwiaaBKPR1tf3vZe3LxHoJWryq31",
  "key22": "id6bgMHk9jE9jxngiR4iqgH1snCPZjcUEN7yXFQ2yBouGndXZh1TwjL9o784vQPvsC1Qy4q1P9VMMo77tiZF4pC",
  "key23": "4zsJkA3NDv7DqHLGgr3KkDtjb4JhoasXjVxsGcZG5m1pxAtGoC7YDiDi7QmjNSchNcT2ZWGhs6MtVcFHfgMjSbQ",
  "key24": "2Vi5nQjbFTy1gqXXAKbandFjYeDwSRUvPqxS4feEURXimMDqSvLXfuAb9UwVAgUU285Ek4U79MZvFjfsoVd9XUPo",
  "key25": "2rnDUvRoCebciUP1Mv4noWFn2HWiPPzga7GB6zLvd64scS7mL958Nc28rSz1UChXYyjAiZa7inFwDC6Dhge7jgJq",
  "key26": "2ywdFtfXmJR1obUkrKKeC21b5qTioNmJxsHTq6EVaUdDqUw56urTqsRaV7wv21r6zXYHQrnpZjDxASiYst8NjoBR"
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
