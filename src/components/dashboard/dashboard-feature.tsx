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
    "2G4hNCBgk2MgkyyeC3RrCcwhCuV3ho2YweBke9jcxTtrM4CrheqvNzeXRPEYxzSA82oEvjeDGzesaVZki9mENSy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kio59TFE4H8CwGZ2C1VzLFafpPnA2qfE38k2UACN2V92ercH6DsVYX2cxunRYGXyby5famBcDAWHE8ek1X8CNoS",
  "key1": "3j1KPwpxfouedjes6WT4zp1nBsLRP7fqsrzbqfmiutJejTWd18NX77a4kSGM2XzZhdpUvoYQtBn9aiSyVRSvUJB5",
  "key2": "4aErkjnVefmhUFC7yapEQvN5V54kaKQV8jWxyeJhCBengoDYTN6S38tbxxfBPKJJFHXd2Z95cuF6ewoNwMyeHdVE",
  "key3": "2YEThCarKbeoLy3JihUr8GzT4jA5baZxxTqwqpdd4bq2ZHXtL9AbbMdxG5jRmWqmwN6EcuPiotM2nbRPBsExay2f",
  "key4": "mSreaGU7VQXaX1gSq27nvzvgJVP3bSm7ZcfXc4Zik5wjWsoGeebMChJa9hRMMTV4kbJPajsuryZV3fPTqZfvxEL",
  "key5": "RAEphYXGn63FbAK8GrJmUohyjTUv6dLpCVq39zRQeos2eL83g4njyDHb69yoPupCvoQu9FaZrGZGp5L79UTM7v8",
  "key6": "2HhrzQL2duMudLsDYsBTarvhroRjPNqVztexhN5fqTPkNUdA7rFT5XMmyRWBqT16UwzbsVSsrYZW1iXiB5nvzEG7",
  "key7": "4fKSAuAf6V6pNm8XjRTEH3XzKbSkoCrrJtgZnzBc2EnEhuXTDDWYU6vz1Dr1UUR3Fn46mZm4xL4agxMaFQ7KEdY9",
  "key8": "2vwr326Y43yr42xJ8uweyPBeuPiy6gkrL5qoKtYTj65bDFupnW7qxSJoYdGB2EYwwZb7qQkpvED5W3tg4sjo5W5Y",
  "key9": "5uD7PuqadLNBFob7AZvWgwbArfdYESdhFqgNLPEfvfRHu9J4bo7NjwpP78HKcsc8iDZg3XUkC7NUKPLHUJQXVjJu",
  "key10": "Vdi4ypq7xeQr1Y59LAcJdyGU1oCCQ9Fhz4m3Li7jsEF1hDkMm6XtVtU4WcCzxdpoCcshDLrmdRQUnxu9WVMQfcT",
  "key11": "5xc1roh6JzaF1kTJHoqqnvoQUovWNqfk8Vg7mi5od9EmbvGfTfakqqrzPDM51jSbQCo5Rx7K3FppSXLQhJyQ6CJU",
  "key12": "G12Dyyf28VyVA47Bu83Wx9b5z4sVPk8T7RqsWqhc8eiW6mbz1HFQjqgkiUoWTuKcesvucK7K8pY5iMDid1fYPg1",
  "key13": "3Roz3b2syLnz3afLVV8w1BeYC2VZs5Bv5eBPiAtoWsvem8pXMgFiCzDvMkwPjf73KVgTxMF2TYQMqAbmVrcX2c86",
  "key14": "2PdUMLqgQaXJZTNNvLR3Pbbqw6mgYBX9h6BGKJaRvujLLCiRVntabKacQQvbZ8TRauHHgfFcVZ2MkQTzhaWYf77R",
  "key15": "5pMW8x5kYQgWft8PGjwDmEb4DM5Ji6Ya6uYCUwWsFMP1kc13z62vQqDDf5XEWPYiBTzgpGpNCgxcvcFeqLWbrZXS",
  "key16": "58ec2kiHVfn94hEoJSX5ScLPxw6pBaNbyb2Qow3FhhT4kMG2CayYpbjEEw1j5u7eu1wpjfmabNm9VLQSAGTw2hNZ",
  "key17": "3abhhk3kFRe7zvNYLkF7CGqfaRkoWkyoeX1UbdmNittZsWhuQp9DRP1m2rdGBLv8fq9aDWo1d2dx6z3ApmivkDtq",
  "key18": "5Yh1DSNYAHQ4vhnoDbuciymPSeupBWURNfD6HgnhhVWgc3dX4cejzDB6QVbcoKvG1XM3k9G85YAtdDbGefAGaeLz",
  "key19": "54Muj5MA8q9kvaKCTN38PkeJjobF9TSxe1mcRjSgdy76CCdmDBpK3ToqpseXKAeBWTgGygrtsBYzh8rP3Ty5bZK7",
  "key20": "5JH7fiNPBvZPphncEfQGLwLt4sA19MMRTVAjKMRj4w4J9UDzfjc7JNdaJkRtybtuf6k7vqGxBg6S2TjCU9wZE8fi",
  "key21": "3XTv2RoeKVXVqwGQeA3jUgRe7Q2qzboi4awgCwBuQqqeQf7gKZ7WwdxQADR4oGh1snuBwSCG5Xvf9HbpxAUDXSjT",
  "key22": "2SFETkg8ybxt2ZCbK8MT3zd3gA46bxBq3rGDDjbRpdEH2dLAdthFK8macx42aTYcBFfL3TxXjyDvvFmypGR3f6GZ",
  "key23": "4QoSobCCFeDDjXBr8rLGCF5H9cC1ePCrfAebXGBGgPivk9bE66CASTQiPjUpwMPMVNWTeQUtaD8ktV3ecA5qYW3y",
  "key24": "54PBSXE29humfP8JiqsCaEvYNdUnU6uPWjSQ93tPEEnfnHyemfeiXg6fTrD7zkVr2HFJWZC7iaHP6xE4mxe3PLVF",
  "key25": "3uhPYJRSe3yZomKVz6ckGeGVctKApymJccvTvZ2dXc6pWEXguAesM11R9CzguGnD8T66oMbKkXhJJ4At4x8wT1j3"
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
