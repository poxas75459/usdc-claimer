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
    "27y3NNjnFihm6tbF9mXoNrkhmbkBbR4eTmYi2kmHUd8M4WX27sJEkayN7T5sVzZfn8kYnYL8fFvoLocx948askWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZSbFMAWUDk3xrGsB53sdKnv4ryUY224xLhaEz2G8kfPZmkpw11THDQXtGj6HrdzhM7fkFpZhneBstoDtH8R79So",
  "key1": "4yrfSftogDcckHutQ2xe6GxX19A3nDiXZYMh8dJxtGvePU1awna6Pd57vmax5aYicFGATtmSi9KS5coN4wBrx3RL",
  "key2": "2tFeZEpcEqoJDBJYcEKh6nn7L2cJRkptbCfrmF3RHomZdqbjecc5rvJvZfwrf3EUGAiP68ifNrRJRfJqRQfSb4yd",
  "key3": "5Z4QfjX5LuorgQuGcVhRN89E2J3s5Z67KwPEVU5rPy1G9BwsArHpH4DfpwnkowfgVA1CC2i27LbjShMQFo1Fyu2j",
  "key4": "2ZACrDZ31kWSL79PJor6mH3Y4WUDz5GXGn2vo17PRgsxjoniB9BzMYeqn6w9HKbcN2RvhVEapwWwwmKfhHzZ6XzM",
  "key5": "3M132QnYZKVkP1qgM6ntLWZfBWXM149d34DA3YABaewCdUEWa3V89oYAR2udjFPYcp6iJzsXNji68QKXBt7H8Tsf",
  "key6": "5PvjNNQgsHyoxPWV3ayaP2gx1hMxWhGXx1PsPw38vY8rWy8TNWQpXGVMxy65NYjiNFGQRPbWst5h1Ts5oGRij75f",
  "key7": "5KpGsdy4tLJv7PNRSqxcopicH3CseuMHaUygXkEyGofwuuYDAjwuJ8zPGEGAXAg9UASXzxGt9NewSnvyPhrpxtEm",
  "key8": "583nDANwp6mG8YCkt6ccfYzABzuqw1EERYQZANLtMBYvnA3He1HCmMXiFXCJvkQF7gzvLwT1eYo8JbN8UJ42Z1wV",
  "key9": "2QnTxzZ5AxTHukSFtcrgkbJcw9XNFUJYpUFmy8iqNjhKjbVuJUysF5bFzZv57MXLEsWr4ifptyzmDJzCVuaveALb",
  "key10": "3q4BLxbBYcUHbSpch4UDcjGgfRn7WJizTwZs1ka3UKk5TDTUU34XRgjmXgqqMhWJXRYtHfMoMZ8iQhypN7T1Evjx",
  "key11": "2sFAJPXEvQNDDvaN5vBRXaykY8gYK7oNJoH4aQ9HC9TQRHNv1GiJtrfUjunkyPFmQykuF7xDraYmHRk1wdWufHep",
  "key12": "kARAVeJvg3EAtRqXRPcPwzJbcyh2hREabwkdjSBqvnMiMeTDmSYWAfA4NeXRFwKkwYuqufQM7Sg7uBqrN9Zfq2A",
  "key13": "48VpEjP8kqeQBdwHLLGq5EMSp7oo7Nw6mirCBnZSma538D1dGTv9Vo4LGATD4EL41BeYk1bNHkB1snnwuAhR7jF",
  "key14": "58vdxB3kEZoSQcGNo28kS6u1EN9MCGPprdf2pbb5xpDK1rp8GsNXDH9jevkLUtkEZLSyLGYyjTRrUwdzyvJEyjRv",
  "key15": "2wYBXGxwedYAYetLG21KZQR4W5nnfqREpwqndrQtdxwnof3xDdfWA3pa18v6WxeNgi7WbfPyVauv8fnNyAGLGqke",
  "key16": "64C3PAUvxBwkm5KcKWirAtag1Je4PPxka74M8VKPJgHvxyyDQb6G6UwZ7kvWhV27A6HND6nAUhNcdatm9SDzCvyL",
  "key17": "poN2Z6pYtofQzrnxHBXdG9pJXsd1Fc9c6yCEA2RN6x3kPbpc24xeLfTsc8ysnCuyVEPVJ8SFQNQrXq6ThSvMopM",
  "key18": "4tBRkU3cdmKURFKpvm3j5awykXCE12kRdM2CqcwUKTos5KeCJV4VsUxyDLWsZAU1FMbKQNiEDYqVsBFHZB27cPqw",
  "key19": "m6qmD5KZTyREvLd8XQ52dd2M1vyGD2KzHSKbwvp1hom8unVZFzUehdxoTJVyZQGcAxqnEXkhGR6JUdAM2UnLBLF",
  "key20": "9nXNXmAfxMQPu9j7wqme7iSNWJMKn3iugsU5Q8Dx3yY1csGomNS6KdzGgA7u4iHByrMJcJQAdU63CgDw7nC26B9",
  "key21": "4GHRNkzAsMyoy2pUQ5TnGgrtpsF4qBdXcTLVj96eu19gTatJsqeQJeLLwJmj34xkvQ3mYZqALr6URWhbgmmKsWJx",
  "key22": "5kHr5itGpgKHBAKi878igXGZQmhbGiDbTKXEtGvqUXhtDCfvy6cZeyuX5YsgzwJfmCWd5TMrFkuS2ExYsxhgM9F2",
  "key23": "43V6Cr4gYACUgKeWj9seMGUpRVg34vD1Y3y5BHN8iZcL98jQMxZ3EBNC2db2wBhvCoAR2Z43zetvAWFdnQyB3UQS",
  "key24": "58fCh9DUw7osKYUikZ6TRorfo6akK56JnySYy8cRbgpEP2Fo1kcTGDBT6kBCXT5KsThaKd4FuvQSZ8KTgWYiutJK",
  "key25": "MkpM84KKHWAJRXthpXxvp6TrTuV5zY11NGwWT2LzLMCvoBvSKC7pckQDyTh41MZyvxcz5ULnaBWFmcgSyN55SDd",
  "key26": "2sp6fweHL8LRK2i4NQt9KXWTThq1F1rSctxXUUPT5ZBjjEbRWpiCVaAYifK1xr7ejKpzVS19qQj39XiapqsNJYwy",
  "key27": "5HGX8mcXuJ4BsbNoJufhqfByjs4p3HnGDowmm3QJs1uzuynbjBh65yGoCdAFS1eEuVDoTJtyEesJScF2R1msRoAW",
  "key28": "PdWa4nsnQQx1ziHoxa6CSqFSrPVSXhRDTyUXB7GGjccjgW3EXYkq29LQifzQ2Hiyugq5ygJny7a3JgBMGfJZxgJ",
  "key29": "2kEZc8bWBJuJY47Wg45nfHeYEsz37Qq3sKxbADQoK2XhQCJ7resKJeFBhGUtD1o8PL91aNfJBQDK4gvN3G32dV8R",
  "key30": "GeA8faLNh46KF3snnJu85zpX3kCMEEX4QhubfwkhKCUprm7VmT7yWo9NBLRhMSWtaT2GBGEZgtpTtApbs6pWnZ9",
  "key31": "22jWUjmvUBx3xCFZtjpLZPxKmc3ikNcaSL7PCMpUxU9HQfSBKXVVZLBN2CzCYxtT3zQ2mGzA21GtjqkxqJUswD9a",
  "key32": "o11povq4rf3WJJe1pjkizUHWSfm2SXG9cdPRWn1yehtQdz3agQin81qWduNcty4Fyx32K3rHVoMaAitHnQZKy7N",
  "key33": "56U3HSoFrVhpZAYnzcmbVUkGCmiYaeKWkSTMcp5ktC58NskemeumwoVnn3TUbyCazd78fr9qcejktXEQpt74QuR1",
  "key34": "5MsEFY5CJ7ZcMegCuRfm5KGmJRVpuReit9PSP99gQDVaqP5h6p15Bvffo5JZRjus2Z9o11xTm8GfVYcj3dqcM61h",
  "key35": "3NL3tx9iyq2STNWPaKxnYHtxMfTAzP5ZQsCsmC3ngxA8uT5ekxtrrhZ5F3i4HBu4hFWsjfnKtjbkC9Zc9BM4WtAn",
  "key36": "55aS4Qo2CSX9RJWeAkVT75LBcLE125AwU6vpdkJngEj7GwwJMjTK4obxwxQmij8uEFYVYJgs6qC13xq5CzFsuDZ4",
  "key37": "2VrH7Qjt8yHS9Zqq9jEJoqGpP26qc26Y5jn4XaDBrY9Wqmym4SWfT7Y1Eoz275bUYD1JFH4pb6hd3LLFLu77Vy4b",
  "key38": "4hPTPDQdzPdncvdWyKowQKURzTsjdtdseJkAaBA7hKdxp1kNX4T75VxoZUnUfSXFEsXmbCjvHH64ttWRoUA5VfbP",
  "key39": "2Y92DRB1ErkhvuyHtig8GgoG6r3XeDt9xtinrvmxoqb5x48UNrnWRotU4TYdMnGVEMkXU9h2rQmJS5jttNJpYXsd",
  "key40": "5o6PBe5G5o5YhJqkoL77EvuCxfgK2s1NyX8RbTBGWjXBnwAvxReWKsYqkBRWtiBbcoRPJ5WEJMWJdrM8tEKSPEDh",
  "key41": "4PSns6DhaqbMUMvRDUConiNoYRBP3aT3LQeJSixKjajvsBFqJV2daF3DeD2GeCayo4dcFx7Dhb9qg2oLdytw8mma",
  "key42": "4YWVCEtspwvaHhxLCmo6GjZukJujk5XGeZeMoqkB1negBdr27UtVTqRdnUoLWCrGdfs5Ygcw3zpanAaNnBiVDPqH",
  "key43": "48hvTWXuencVSvai7ces4BYi3Pqa9utEipqgxV4UTCF17idJ3MAG95Z3P6RHZ7vyRxGLX2KBATtQ5iCHZ29jMjBh",
  "key44": "3586Dxzm45DuLgzttrv7borocBvNj977tHT7shoJCUNCkv3LmoVAZwXuzs5du3JAHBLM96uNKH7Y9hnPen38kWHu",
  "key45": "e15cH3LmmQTPb9DeGE7A72FjzbXB3NP2eJpwcz4hvWRVjTQa4WXqKGdhXHqHpveZHpY81PMuSiJ7vdcKU2cMJM4",
  "key46": "279PsGwJWnmAK1m6y2Z25Um5buFGhf34cD1EhhkN7cf9Nt5wk7QDU8JtNrdDxKZyAkiFCGbqz41wCyVLYXGhzXMx",
  "key47": "K3yTnx2iQ9DziEwS6WhvqtZeGoxdM6ffeeYstrF614tpmexhW2BJ6DatyeCsmTrMG4tSeHqCvxpmjWF8Rz3tQoi"
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
