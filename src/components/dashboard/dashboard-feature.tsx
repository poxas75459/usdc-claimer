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
    "37SXzwYSvohstuyv1T1ZCLDQdWgw5aXYJarCf3RVN1s2ZDT16WhnY946e17DvrZgUt2kfUAyMKugUmFg8i6B83cL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PJjPPCRSAKXt159M6UJNNRWeKL5EXNS3cn9KzbK16uRxVFkMSi7M2zEVY6CEHzjidXHxANFKyNPQj8AgmfpQ4wY",
  "key1": "5Jfa2bxvLwfvQuEbWudgoLXM4g7ygyCxcB8GXpUf934w1CbuwrBHsfZnyjp8ASTpAyDvjArBZ9vr3tByPbu2KmkP",
  "key2": "2EN49d2SdRRhVstwVfxP82Khs6qcxqM34iaQsEGP5nebRH2YzByJLgXb4Gn6AN8gwDXkiYTaqdxFDaYfqzhzGjpt",
  "key3": "4yv16Pd8Jx4L6i9o7Dku5Sv7BPHUidck8T9ypmt3TdW6mhr4uKR7ayhx37NVa3sYvfiQSshY49gVQ15sG2uZCWp6",
  "key4": "fwC8Ac3eeY8q3PFMudvKF2fbduFqs9HX5bZCsfy1NG26Gm3sVALnNj6XBgWhxi1G6i9BFvXQdB184PSAeCb2a3T",
  "key5": "2dZCCgSqv6mGWvZEeGZiQM1cknakLV3fdPmpWhXZXAMZTWV1JDrGAg66KP8K6Rb7Zc5dDoRaj87toMjMYqEUr4R2",
  "key6": "2pTbn4MWYNd2bVkRrPvPV3uMFnuiorpKKg9aSuayxsm6mAFncdyoBkGq5zgxSzi2tVmQr9Vc6YwJ45tanJky7wDC",
  "key7": "5uzdjAgjCW6Ac2aw6kXzxbqkcjDe4DtsENmFSuVaQumfRnGMPhJxpVeZKXyguJQh1KhQ5mB2kiUzgbPetggSNK4U",
  "key8": "5Vh3zVh8fCK7RmKaz7b8xkg89D2pQZHdoLVn5EP8HGQksF2WYR9ujfGNDAXngyxRg3oyb7zvYpPf3QABQNJpYebg",
  "key9": "woWvVqNqMu5GHegNxsAtf61C3su2tzYmMAfcdkk2vKQCXmqQeiAZWFWJfK46tCH6WQAPpLFiS7GGrBQRFKgyz9F",
  "key10": "siRa1uYr7qdHKMDYWUsLq5whvpgXVrud37SMn4rHpVWJeGyPXfNGJRu2PFKCpzjJyqSf9hi55Z5MrcdPBxK78ih",
  "key11": "3HpKctQNkSkmkQQPBQ9TZUhc1wuznBVeqZTbB3LxJZLJdLHCrgteJFUcgn3RCvvrLTJLTQBQK3gNVkk683XQaXmB",
  "key12": "588hYTDshJsVRPXQZmc7qMPyXH9nihdRL7wxDBnZdnUg1PFpcxtps5tPKpNMt1ejth8qNdvE6qn52rCq6xbaiKs",
  "key13": "4gcXpVJ7FUdZ1khqRqvAumDGPnrU7ztckwd6A7us9S77pJVEp4ncNKqYae9uHwbmtor7QwTSR85Lz2b1VCnkLmU1",
  "key14": "4dLShYcN3hxfwPiDvkKPuzfYNJCFZ4G3B45UmQi38dN4C8Z17k3bUeDwGwQk1qfxG16FxnJTrmZDakxqyus2ntoc",
  "key15": "4tLsftvfg8nZXB3cWr2aUu2KoQcpLudDFQvTFMup9aP7Pn6AhS1ESSzTJqduR3argLhoPSjEaFJ2a46XHJ9LC6un",
  "key16": "fqBBkxGhFzZmKd7zeNvqtKPq3NFTHbm2juPZoFeUps95oi1hCwTcAgX34hS1As5NwpDEG3GcU7pBgiaNRQjYXnD",
  "key17": "5DpLi43zTG4Luvz6tJvfptSSEbD7M5ZoKn5q6WvnHMZk4cWyk1238NZL7vXjrdDyi4nHXY4Wrq85f1hajAtNQtyX",
  "key18": "5MbMBPzoa2s14F6mbd77cprBBxi5qYq1oCvPaDvS4xTFQ89z19oTjyANC25mJYdVBNWFKB2UHVVwtAkabCsT9xD1",
  "key19": "XEKj6vfJCbbCwDgvHmSkHRrxvM4cFoBtgDtJE1CgS5cLADu6JDrWezv8v8uMAugEU3C5hWRgCFnnNzcX1Y65wU7",
  "key20": "2bZPpZfFqbEPHym3w3ofVrZXgazHQ3hMsJTafdSoY9KUVK72hC3fNniHZYi2EDsTFBDD7ERHcfgx84LAMzQqAzug",
  "key21": "5pzz4zT2BQp4PuJtP5QeQFHmVJL23FF2d6RP5x8TogKwE8f3F7KZyhYxuKM4dqd5XximA3LEUJgYkpkgepbwKwZG",
  "key22": "4FmTMDW6cqP4ggJ3jowYhUwhbRvmBu5cF6Wfgvqd1kYtasehDLeWg8pyRXjJ7i78e28GfcAWJ5iSwzqFJw9CLDRG",
  "key23": "5JX6JiRjFWExYS5URNtNGx1U7cysShkvUcU5iat7CG1W3WoP45HL2uFSgogZ3VVRYPML2pB3MXvnM4FBgTpPcn7s",
  "key24": "2iMKcboVTMw8ikSSMfbRbSAyZBpB2EKcY229HxGzY5zJCqzSqFd4kNs7msgPtbeCdW4FwN6j8r3giD3exDTMvvHH",
  "key25": "3GxqqvGTcWYtDKMtjpemueLzhTH8fc1V6mQ4ps7MqtFfaR67hc2KniHqmumUix7QNums7A4YrD2bGgVNCT9af6gP",
  "key26": "9EFipuVRuTGxSXLtmQwngxg8K1UpTVvEwCKmjF8jHikJK5F7yMBDdGqCqgJ26nanyPF2CXnrGptFJs8Cr8T5EZL",
  "key27": "4rQXmL2LzWDnqJump3yhzuf5tYzeSjmytsxwoMwxrYpBGLu34kZjijsnr8wvRJpscGYXz3vt84LsfrnTwBG5uwHb",
  "key28": "2jhCpUkf4jANWa49HfeL4mQGTboJSHTA1y83JfT8iLh2pH4bUYmkeLeR45Tv5YiyWad1pGcLNiswyWkoTj4haons",
  "key29": "4DTd7EEjDjmdXrJkDXdjjXbExHs7WbH7D8ouw13TmyCoWo6YNQVZ5MjdkWZQ9qWhLnQ3virRDXQTbWrLeVT7PT7u",
  "key30": "4ySTiaDjvSynri1Ho3xWxRy9Z5DgX2VMB7JhcQoqTsB15AoPauNdXegbEN6fVjuGdLLotcPuT7WkJ5ndWcdn3BSB"
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
