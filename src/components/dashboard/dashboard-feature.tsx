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
    "3sSXJkyHBCdJxG4TdUhLGwKoSzd19zHSwD2azjsduwYEqTQngJMfY3RcFUYeMbVVyS35K7i538hPJt1J9RxBC2jE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qpEhptwbogt8YLVr5xhabUMV4r9R6bzf8nDN6DMBPubp2LYsLvuNLsPDjopcCmNBovnnUF8WYbF97vu6KHvZTjk",
  "key1": "56cmgeAfKoxzHYJahfkYLQ9wpF3qHgoK78kvVuKPWtKLR8wucEmCUqdymfxmTHMqjigVMxcjDLH5fre1DmNtWWrj",
  "key2": "4yLova2ZLX5GXSgJYLPy3QPNq8yfFgGNBoYH2cFiXCJD99LaouWfoo4RNZVfTyFxaSNFEfx1ffXre4BZqgYykNV1",
  "key3": "vPMDRGJH9kUwC3vL3ydDs1hLMC5WCGeSfrAtvf77GkKYVe4T54LCKuhAALCyYDP6itwfJFiWsymcCBx4sgTfANe",
  "key4": "28WaQApxddh3kc9kQHU396cH5WGYzDULcvgdv7YpiPk16abzPiPCPuZFN8Y7oNEr1jsJfJF6Nwc7n4wLy1Peco74",
  "key5": "2TRusKCVMSrLUdrtoPk4M8BKrBfMiaZoPu5m3Pmxhd38Not3hZ55Vb5CK7dSm2XsuVyS9dRrLnLhdZrHubMBGXjK",
  "key6": "38s5RVcW7oKxmdbzq9RCJGWRjG2uK3NaZipm1aH4Kp68e3t1eGVF5XCXmij5NKnN6qvt4Hr53g8k2XCy84aCtMkW",
  "key7": "4YeSNM4NgFcf3ZR2HdP7rYjhDjbJw5etDtTL61HTi8R2A3mNvxgo1gce3aE7GnEAfmVGyTeCABvPNFsDRwZs94rk",
  "key8": "tjKc6joeK5JUked5cScyBTYkHCF3Eea22AHztBHE15s9Znp5WV3G7efZHjiJsBXdDgwHh9FXVW53R797GiNiXwv",
  "key9": "25DGbQCcT3pQYc26fahLvG3sbuCj77pD8LpZJ8GF2N5ZuePVLtnUZ4kSAG9Lz3MZeCu2F77TzWvkzqbWrWJRZKEm",
  "key10": "3ZCnUytAfvi2wtEPxkP44PKogyy3hCXWYn8MMM48PdjWoJM63Ucg1XGZvoGN4qVNsU182i82Zmpq8b8ZNSMX9N8b",
  "key11": "BMMUNNrnS4FRUCn7EiQfsoPdhVadBPnFa84UUF7aiMSP1jfVWFZ2HL9A9RjA7V3fK5ZEMQmQekbRkmgD346fRJD",
  "key12": "2phJJkb8oZEczXusqrSyG1J6gvRKxTXij98P2TG7o78yquYEUYXGFGB6TtRkbo4Q8F9fRQPSCBbibTJNqEAcofWQ",
  "key13": "44Zdgt4GXQzEeacSu46XQJF1kdBrKwvzRp4doWaNJNZyawsQYBt54bAjYqr3BmyD7nrKFzSdVNyhyu8mbKELENb5",
  "key14": "3FkP4bcwJaRqDfuotTfjaDVzFqkZ8VsiKCHoP2mzNAKX3phxxkM5YzE98PWYBhAFZaUZK8Pg2HDz2oig8D1vTSEi",
  "key15": "xnSGpps7fTeh7NnCxV18Xb5t16gfVoxyKo4NbmeohsmHxuRCU8zJ1AELijphqtnuohsU55rXkA3YgNmfPckzmtW",
  "key16": "4f6i1KA7Hh44cS9FaGSFhPqFCjknqyGfP4Dm3oLXQS5pThMPLTakBu1qNQzGHWswL5huYSQjoQrJjekM6V9c31LY",
  "key17": "3TsxW18HmNjfAJfd65mceN7oXaF8DrHT7oDopBRvCA7H4TGLCd55mou7M9CKsnzzxnpEMBC7oBZE3CmTZuVgrVB",
  "key18": "5ACwU8jXUcG5Su2smGpKfNj1TfK7KpkwBFWcnEgRykRLQDaPW3XpNzyHWViAfqqm77BBwAiRr4kC22VChKkzHfQu",
  "key19": "2tfzx4EBzU2yedsoC11rAYf2oTnKvtJdhTjGBA3KyJzVsUg9MMQQCv18vycrmRA4xgu8V4JxXGgEoH2fZ3HpN2Ag",
  "key20": "2JCmv2VZVPwLXXenC3fYVbmowbekDp2NboMkJTJdWxfRj3dXkqkGnsKZqpYEk1S6XhZfD8fP6ARmnarR5hg8WwYi",
  "key21": "5jMUMMDfvTBMFv1PGuvD2ThikxGqM3vpvJFfJzSEYWZu8yYGBVsdjX3jhrt4pepxgLRdH3ninCQq96zykU6UfkFa",
  "key22": "4PMiGgyWPbbvMk1swfZXZMUtCYPAfq3qDwGVkF2PDXEKZzkMoELRZhCu9WvvCLyrsaer4hjCrJDSaq7HbaBURfXu",
  "key23": "5J5ek9seGPZgeSSbPqvfHcYxZCkViatajt7d9vBQrqA9s2VQZHLRn8A6CKMuNbLJmNu9CQdgQTLgiziuECuUYJqC",
  "key24": "56U8qKQZ73CLUuneBCcirp1jxqJKvL4qDrfMKYZtEwgpM9zqrXwtAcdWHgdcphCgYXNZWn6CLhvjN9zpAM2X6r5b",
  "key25": "2G7zB3fKA1wZSxzaaamkD6PXgDZH4HG556PRopMWx9gWYiU7qEPspJkPKpwKPTpzgtLW4MAv12GEwcKU7g41vCYE",
  "key26": "amCFVCgDTjvKo7H7Wd5d6xHaSao1pUAWmayHdSjWMLzA5BpTGTyVJ8mB7b2fFNo1tf26aTrjB7gN8jLRodcDCbC",
  "key27": "2cKkqjD6wEeA3g9jXC3xLXVJUKSGK1btuu4e4bJfsJkezD5ULCZaisnZM4uWWoFXtbUV6ZuHsgny7oCtcZKyoip2",
  "key28": "4f5WotwWZFLUd4WMKEECae1K9iDpsY6rJuJjH61SWJXBd2JaUiUfP7fm19CUyjsFrL4Fb3mSfWXx7kPGCTrc7L95",
  "key29": "4qTYzj5jhUymKy2qtJoDPYKvvVPX985BVoMn5vFgrHZk5rNw4kCSCK2awGDZPHYppfsuAR5p1E7mz6opGjNtsWgP",
  "key30": "2ybcGDLENBVQYEAK1Fa4tKZYJt91JSFYZypLJLnhDN1169V1GMmNFhvhpzDhxZnf1bQBcRrqdxC4mY6YMSbQKv5v",
  "key31": "58YqirGj4JBpc5essRorUsgFGrQfUv41pAM9Uwmpsx2cybkrTKFmPXCNmLTAALDUzgvjYtFoq3YNDmu5jNzfmCyQ"
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
