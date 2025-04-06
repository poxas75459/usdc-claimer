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
    "2uNFRRt5sHPzjuyY712MdeC3U4upEPgiGJgKXRJCymCFW9cdKKtPRu71pAxENqmdr5VZNxC8XzmLoAr51oamqHnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FPfmeCC9n7pMjsMvCh4DjyEmziXYmBzMYN2KJEu3aAbzHn2KT7Rn5aDfSndhyBsEhUbGXsN74dU7XNZBRURBcXu",
  "key1": "5VRYbsTcfWfifGBfurtFxUfx58N68Y1W4LCXVTY7xHJACZSRkasqp22q6PmEJVCvj3jwozNjVGHGbqXYXRGyaVFS",
  "key2": "4LYQ3vP5SwbTx2pRNxhuHTuSY9HDyyvjp9wxhCHCV7Zeo3pv3Z7BVACziSzFPR6AzT18G7oD39ggAnzgWbnbidCA",
  "key3": "33C4NHsSc8p6Qc9jJLVW3oMrZGBaCCTF99J8xxqoXfbxuwmEXv1U8G7wTGfcpnYgdmy3BAVy3ziGiyb53T2apVUY",
  "key4": "5qvKyR8iJYYVzCvkmW8f6ABfF7PXvHTwE1MBFCtqu7mfugKXcDZdTwfhFkqa7CxCgwyvofZRUHM178uJppzV5kv7",
  "key5": "4K46RYaVZKzMqyBakSFEsPs8ZHPvnVZPWRcLMMnc3eQdXrcbPUKRtnNjzADDkswx5j7y1voTVZiZESEHsU9VG8sF",
  "key6": "54Zvb6fhxLRddukkuCSriATprzZmVURfnqyCEVRSEwSBrCYv1go2pYk9nbzCPrwEPazbmU32GL7TXu4Csvm2FXcK",
  "key7": "4JUCsjxVHFu81J8CdvYobjKQoM6ZuoxJYMnKjf23ir5E7sUpuPXbm8Xsk3db3E9pysKeVmBAiiK82iRZUigQT2WF",
  "key8": "4AcM7i8Sn2DJkhSSotzovNoftFHTcczeA4U3pby7NsynS4WiQnJwNSxVm8V8bAZBZHC4FdzDG9PtVecPChxsbftu",
  "key9": "5jsKUJek3QmbEaA9fJafzhRnKP8tiDDjtCfzYYmmRrnhPfEYDFqtvffGhVju9iTVi6w39AjSyBmtDpkPcBSA3EWn",
  "key10": "5EoP1DfYkAigKsquThopUg5ESMdNfQqtChJvNm8kDXnu4kQUoJmpe6Ykow8Yw9CWNrv8BWue6YTLGwJCprNXzDfW",
  "key11": "fRgrUV3n674mdxfrTpnw7GcZeSpKrAM7i6kzDWEtyv36dxfnAy6JsLqJHE6yACuMDroGZ4QuatNAoizuUy4A7TH",
  "key12": "4W3Te5EaFeaubry5urbUHCTGzM4UGf3wAjiUpThnq9HXGNaQBXw1mydbEUBw5tSypt5oZirBRMCCePGNh6w15eXs",
  "key13": "3z3i1hfPrvQ4n3bHkDnKsbwPKVzp9iQZfEkxeRcHnzWE36UY9PLMGA7T9xbH5EYYBmijbZbCfQJcH7nLvFcbELXZ",
  "key14": "8qc3gxg7XCGFeRAGzFM11QTNkavZWxJXSxZbX1DKDAMnSTF6VW2Pmtoso5xfXCAbwAUJSVRd3xMbVPXH4JUvDUX",
  "key15": "5j3oLiabsvxe7aB6pvXSGqARoQ3v3zkt1Q4AChwN9GTmWE4jp1DPoiafDJndrwJMMYAvVVbMKdyyrfurwFwkeM6",
  "key16": "b2rXkE3SMoCk9jWzxwJ3VuwFCTJYdnUEVRTWFHbHNfFBXRzBgtxSmrhzocCwr2d24vjBJaoJESyJ5eT5KVEHQcJ",
  "key17": "5MeW8wDSd1juFmwcJh3ao8KxoxLpfiCAd2YdJzGhjQQd7TytLCHgrkvydxiVE2NF9AGtCf63X5pRA4hMypbAwvDs",
  "key18": "Hjc8G3wzeuPW5JGqtDxyT73oFuRaueoJpkeMZwtPMGBowXBFQxRKSbBmW4xS1GfmxjJ1akuVBE9WbBNNaQpC61K",
  "key19": "QodFMdHRsxnrjSJnLkbs3juHqjrt9Dc378yxRgHDJutaRz6kNbZbGqJ9YCaGsWJBv14UNJfFvMr8fRXeWD5PWH6",
  "key20": "3JpESp99xY959G4JDFqYzd5NzD7Yv4orZLFP2q1bcWbGxwH3iQv5tDchfaJGQRcFLDcmrrcr4QCpUQTbTWVbdD3C",
  "key21": "5eL1HzFBYS83nRnctepze2h8gBJXwytq56uVN8ciZMuB4K3xxRw2TL33Wb9RrdZNEejUz4WLuqSyhQKdoSde4fHi",
  "key22": "fxPrc3kPujSUTLidZAS8LwvFPocFhkup7esucFEwAuShtDAkD9S87HC4GcvzbU1WdD4LmQdUf4VRSAZvRmxedjH",
  "key23": "4iRxdeR1rhuKFSLTXZTFwdZ5kyo8Bh8ZH5K7s3QQDeMEMqjZffwmeadiENGPXviXHs2EcBmD1nw1K3scWWdaacPj",
  "key24": "3iGGAAdEbz1Ef737itfJrRZHHfkhKgyf5pPUjzBVsaqERXeURxVBCuMRavNkg9VqS4jmWBGWGzX5M7fVgXbLue8i",
  "key25": "2HGJjSqnpvuxEdg1bu2oBsunFyt8HqpUfErfaM7KrqcqQjcCPXMgTuDXCLqXarR6abBaadrCn7YN4uj7QddcFcQ7",
  "key26": "5wBLnF2zxXzCL7Ek8AvPGxfn8EvZ2DgnHQDYtdjxiYn3TAtANgKnAN8uyvxKird1Qt9G5ZPcqQENPXLsgcBoVNr5",
  "key27": "3gkCZF2s4k7khbTAh9mHenbTV1FuMh1ohWybEwTxNoEW3gDfArReomqVTMzmBSq4M5fJWahAnusAtzdJRAhJhenW",
  "key28": "5TbZyRLaAaf6q2aShMt7MXt14znRRrEkFBHCDN742JP13YtNFgDcB5gTg1VSKQgkcCBkciGsNRLLXRmQ6pbr6vZn",
  "key29": "5WvyPVEnPLwVVthbVxk5zm6ywnUzFraUDam8iiFxQ8vA9L3LMxnAC4yaQ3AZ4Vt8PwxQFG3ZYsDGBb6WtbrMRfmm",
  "key30": "2yUs4BPm9dXrvswxrWQ4LCtSvgYhsW9AyK6FhqiqfufwJENK2FWVJU2khxL3mPZ5YaCYMTXvn9dA1fvkkhSn4udw",
  "key31": "3uoqoDNh5X7tGgwHwGqyGVqc6vx7iCCbZsvqnF4vqz2BH8JVczaZ7S6CVFtVzk6GCjSbEkYAyMtXyrDqYt2HfHtv",
  "key32": "3x7LnT21acmv8F8gy6nv23aFQcj6H5jJqozAyKac7rra3tkgMpHox4tuFE8gCH9MgjhH3K1d2zRu9EDwfL7Cy1FP",
  "key33": "5CX71fdMXfzeytYt8MKiPSrXMd4FoZj3qWvqc9uHnrJ2Yz27uTmdcjHNzrLrdrL1km37eEDixgBxeYn4ieJsDxyb",
  "key34": "2VaghFhKem1VMD776fLvRkZSxx7xStMPGzUudCWk27z6rXV8CyNwTJdsjFjUJNb1y1Hbsf6k4wGsJ1ubmfNgUJJk"
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
