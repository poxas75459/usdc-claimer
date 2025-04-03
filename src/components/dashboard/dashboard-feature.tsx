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
    "3M4MAWy8jewU8AG5a2xRk9HkpuyfTkUpKwFiLDxzCvV66jDDeJXJLfq57xpjxUDAFUNk6XoPqjs1AJaTPjotcPnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NtTBNDGW7aHYph836xPXiH2YccKh3dwDjwccpf2fDAXXcerAiPjScrseq9REiLWSPiwYu7utGftRQsufMxSVuH1",
  "key1": "4qefK5D94rJb9tfatr4qEmxymUKoHPWpo2ri8XtmcsckPdXsWNdu5s4FfUD4N8XNAScMhUjp5NtVcmB3aWM2Ajfm",
  "key2": "2qa8uB79ZB1Jg7Ba6DgaDS2BkpnpPYCnt9VcBQ8tS3eqFA1nCo6zDh7g1ZJhEGgipqdjerxXqCxaN4R5yhGaK62C",
  "key3": "49urqxe9sfcHdhiofDpi877Zdqwcgmvb9qevWwG5C9rJs9cFqP4jYDkbiUvcbWDCXPZ4mJrRduzsbTYg4xdAnyV4",
  "key4": "3Mxi5FV7K4pDFrx7awfHh5oEDgqmhAAQBbGC9AwuZRxd5MVMQc6Uo1C8omREJsphHVmvGsbwR7kaiBAxd8MeobPh",
  "key5": "3xnrRBN4x3PWfQCJmZtt7nkmsxf1xsujJh5xLNn9egZf8KBsn2cjiyZzu5QUqfYsqv7ySk4yTNQpkQUhW46aEpBn",
  "key6": "4zFD4cCGYsNSpsdyCAhAYA92Tr7iZjwzjT74XLA43jNbJFzHs4VawUaqcQ8UCUirXMGoavDqxD3ofY4BW2ocuw6x",
  "key7": "v6LT8CvKG128YnBUhNJgkNhUqy6kysyvRrsWpQY7vfaRMXS7zaUyqJhiC1gReVQzpdepFKQhP2sBmrMv7mLd8kN",
  "key8": "1jYqWMGLk3WsvBKUoLXKXmmJgaiPhdp5qjhfiJ2dcoGhQKr1K6PJ95w5dzTF3LEuXqmpwJrBsXpHzdwh3ozeHFA",
  "key9": "4SdhuWDBiMdusEn3udsQMiNy5woEPwRSo211qte55SapkVsmWt96eMxyCXJecKMnGHx62UT6GytEs3jCz97M24iH",
  "key10": "nEHADXoWqVVQz8d1KWmENFxE4Hi1BqxMjf6WoV72SGK37BLKmHYC1Es6PY9pQQKrfHNoNd95X5zEhvETTKvUuaJ",
  "key11": "4Y3gbEdYkvavZHoQmg2z1Y6jPf6edXGfEbmApNqyuB29YKmadWvXAX2DUQLkoUpfc4evFWXX8a1w4W8hsUGRBXPd",
  "key12": "5kgitvSyqbXdu559GCNV5uf2GetzdgKqQ2kGpk7MuRbX54V3rpYs7p49pcrTmnRoyvKyHLsMQQuExLCt1akGde9t",
  "key13": "54xwDjpxqE5ktbmLBWFfvN1mNVwK9aTdLhvzbcVdY3m24GRGqayzHfFsqwyTktiEJhkwejj84btFU7jm7R7ctTdy",
  "key14": "5oxHUcHDZdiwpSGojmSWhMsUAJtZW2yRX1JavPkdHM9DpwJr7tfadsGpB6r9RfRXZzXxLHfMoM3fQVWwY6sH1qSh",
  "key15": "2cANbQRZZQDGT5eKJHmmavzHmVa8wXjVUXi87jcEh1tVq7f2aLUujMFw9zvGshHyPxnRkn1P5gMpjMkpmAfQ56ft",
  "key16": "2aKLg47js13mY89oE4PjyRkouLbirptZNgxqLeRPbYANhwC5BSU4unhnTSQUuQqYkcTw5PqU4dezjnGQiCtS2j5F",
  "key17": "wMKHchK7rEk1hT5hbDSZxEHHek4PpHsHgYcei91i1pwpzi8zfS6cLLmHjwjZDvZLBxRy4QXJU4Ux6se6wb1ex8U",
  "key18": "32jcK1Rg8qp5oiaFF6ceC6Vinr4tjjPtYWoUCJbPDXsQb6egNh92kjr7AdyVJGSGDcsiCnfHaTgMeDUhV5qhpDhe",
  "key19": "5KpNEBGBCtjxFtaTRZKY78wi9SVsUTWdvnypawkwRrvpm6YUN6bbniq8fEwAi16VwqT2JzsmzhMLa5UjGQGasqs3",
  "key20": "3N8NGggvJmmJN2vPraYtCUNaTF44AArq3C8P7kbytGxSyYg21hZQfmJ1icmw1YVkWjBu3g5Xrw3okNSEu56cjfZw",
  "key21": "Pb9AJrJ7oDetRorXHbuBGtWHYzksuCgrmhxtmPT4RLtNY6JYxfLzLvKCcdtdCT4LQEX2Y9z8dV1jRUxH1r5h8pr",
  "key22": "5yzYashPSPfdc3xYwBQjvnPVZMoNmscdsPuPo6HHk1o1Wj8rrhWxUXJM5jcQ494VZkEQoKJrAnPbPvaDJNgan4B9",
  "key23": "4A5KPurMkuaPgEKh9PMrC1uvka5j8GnBV8FkEvKxzyMwqMcaSAYPsEM457qvyYuWPxVMPfxWBCLwa7gfX3wnSGKx",
  "key24": "DVpmjQKwNbbW5878WYs5vQ66mLhncBBcvrvRtWXtHjcDfFsBPgJVCKMaLgWzdU1YYf7dzKRymk7Cx2T9LY6Kems",
  "key25": "5DmKCFzmc637AMqSNehT1VgFup9uybZkr6aNKGN88hLUua9BXPMqeFua5sAjhQYxviKKHxjsr1oXwcKygNCZwBo7",
  "key26": "2myJhMWCVJGokcbMaT8sf4teynHcebdemWvuPq9QkQZ7ms67TKFGXSHAzafB2D1FBf2KroDeSbKs6D2StGv8PDsi"
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
