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
    "4YN52mu48v3C3cm2PieFMAdD3jB9Qwpsmof5av2yXjqqT18gK39mj2P5gEq9Noe3e1QHfe55355eK9ihv3mGjkgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a1uarxJqpqGUtGYr7vr2brpYokaKGiAcCTRhvrtn1JSeFRWUvzKvymqWHoAL9ZLmfr9s5JARj4LRKrdZg2ZfeuC",
  "key1": "3dbm3ysQGK46PwWDsCwcptRQiK8F8XkreCK95gkZHEpTaQPCS5Foeei4BbuzMq1qJSpj8df9qdNiVT2EQ5TRaBs",
  "key2": "A6F779g1sqYyr677JfdSU5fge9vMvP1Wu3vp7SgDudVw5E2zJwfMod2CTL8wu2sPViUL6B1xG8gtoPWZyTwdCuN",
  "key3": "52VmtoYjbAJoVmd2fhJgiZ7YQ5UNL6QyTZno2QrMssYTvt2AEWhgt2dWMGCJZhwdnHBttuaQNKFyk68Y7U7CrMvY",
  "key4": "2f4U7mkUeRLfSXopdSTYTnQH8DZ8y1YMzZNnadU2bchzhJxFGZX97FB5KXwrvU9h55G4YUbya2LqscVjiP5iwXnY",
  "key5": "3MR7ogNkBSoLfhZ2KWg17sq1K1xvA3DRPiu9UM7VDnXLETdSfTGPi6MKasHBH969CxRT4uwGsjHdc1ppy2dncgtc",
  "key6": "5xCvcqbeMKbSk6Yp7hrKFieDQfbWm72DcH5S7q2JZs6EHqgjKqbeLPMeJsqxshc5MrUtfqeSm3DWa71ZbV2WhKwg",
  "key7": "2bVnwBFRMUCQYcdzuTwxKZBihmsxrM7yHbHpQWRh1VBTbDfJA5chvbuvbgzgjj2eHBHhefHzVzuwPwQi8uYTSgGi",
  "key8": "4yt2zbJ2e1zEWgan14VDw7ruQU2TfPanjME4aCoNJ3H9PZXwPLNqXYXTWTdJRAuFW7MHbtbj7EoV3p4x4Wb3tvGA",
  "key9": "2qX3zy5qHnEA5nKk7jeVyQkGxdaWkwCZeUyg19kzgLrwmaBporCLfj5EkUTGnPVGUEDQYRtJG5P36ZMQJ4JALpxV",
  "key10": "5ut4WHgEhE11yMjmWCqw91r7s2Kotuqpuy7ewMKZhP9LDRwtPZygCbquuLwW3uCHxPCDiUFCsdxJiS6Bc563qVEE",
  "key11": "4QpN3kAfTJr8XdNti8AC335zxSYHTLNvTY3PM7HHSad7tSSrc6eHhkvobfkKYqUJJWzaoEgDgr9VnTvtUY3CeHje",
  "key12": "3qjQTwXMhWqjvWPKhkYw75GUJx1FX6Lc7Mqu1wBknvCmVBHnepVfvCQXmjW79dzBAGoR4FL2H2YQvbXtgYyxFPxr",
  "key13": "3NxtKEXkL75iWGnNofNd7h65uJHEZHRSFKnHS7DjhpuFyPRmLtTZXE6SrJ6SEAqACvrqkTheWVvCBbwEZwL1n6K3",
  "key14": "2n2zGcUvkBa7doTBTwWjGVrtMmyUuVgDN6HAtQHca93zEbmMsy4VuXcViA6dK3G4JN4Qmj4ptnw56fKcfrmiH2hj",
  "key15": "4DuJ1V9eSNzo3gayysYCXMGgqyMv3VUTTt7L4sDYeGfL4EwRvcu9isebXvBBxzocJMCBJ7ydFPjikbV7jSAp9WxM",
  "key16": "2N9jozAn72eyRmufFUxscUJBJUorEYWvTUkhbitDsXrjhPvgpMZSeYozVdaopD6nTRuBH5TwCMCsJ3RUcfTpxthb",
  "key17": "26BbabbA5qdTmnvcnBf3unvzyJN3V7inYFLrEZafvBRgUu52bQDpmyeebobNMEDWPsLYb8tUN8Hnu4ot5VDXgwzs",
  "key18": "5FXTPZyTMxRVNGV2viL8CT1BZbjLoyhMmqBNFkVM95v18DgxFFZTtbCVgADshViAtDZe9xvJd76Enb7pPoDQYnjc",
  "key19": "5xpWpnHa6RU8cn5GMmRiWUkNcdHmZGxypdnxUeom5bVKSe1MA4h64jcjRdzxENQxhz91kY5TxKq9m15APZKyPaiX",
  "key20": "571Mt6ajoJEuMNNyaeBPbj5rv6QuZvV951Ns5k1zF99z3bKSUNuivTWF4QNkJAWMGsWqAshKjuf9d1x6TwL2YopP",
  "key21": "5e8aniF8d59BhMVxAxZaSJdr1xk3h4Z7WHuHUnbiHL4vMxT1eWZsK73HSDfbKZaMZKnrUk9UP35GRUALhnRVde9U",
  "key22": "3p4V8HRq41D4BRpp2vMgc2hgEjHLUU71giAQAppetCH2jtdj7yMRfmtpPT1qmVNhNjCNWYV1D6JvjNAKgTM1bGBc",
  "key23": "3jeKLVEHfZwepYTbymB6kU1mL2CP8Bir5PL2KQeVXQa1kneA6oB5P3LP9kcG2bKwn6iYArB18P35sUBD2nfkn5UY",
  "key24": "65Wwe5HWL2joYNJ13X6EXv75XnSjMTosf1Wh5YUz7W3YkJzKZxrizGTxzuA9mw7DsFuKBUpYuE3JXtr26t9942mN",
  "key25": "2HvfcGeaeojGqtP8GCZj2UQd4WZpxnJMnSpnVgd9ttPyVBgMLYn17k5KC2f54aFb5aPzmaN5APtKWAtQccMormig",
  "key26": "3TJBzTepYHxk5jkLnrv6Sf8hU24Fy47ZpxAmTNJp4iFmvy1eaWFoKNAhLZTVUgBdyidXm27Kzet8WQDVjuv12qgg",
  "key27": "4SetXvyQcBtLtBVifuBfD2tSeSJAp4pvS7g4oTpic5hTb3GFt21aXYgQRiw3x4omzTQTqfTF5AbT3rgN2TqDgSGs",
  "key28": "3913kPbwqS1XQuPcx1SXGn1zNmXtYbTf2rhjX5H4duh4fvuLo28PnMuQZRcrninuNPrfRdQPGaP2H64cUd6zUW8x",
  "key29": "L9i1QYgnBEFMSfM1cd28gGH8vdCukdjXr1fFZymSWnck6CqYUVMdnuTDPGK36mmnUnwaJKTggWerjaM563ZPHD1",
  "key30": "4gCavLF2Q6KSpcLkyxqULEJengW6KpuUsppAdVWWocQBShxFBHomY8vugWWtRvwSGvikzFPnmnrGFART6xv2eopU",
  "key31": "4K6ZGTU5YdsEX4arJ5DVdG65q1CkTgDwjtfyVJVznGJ2PpXjCuJX1iXKTJQPFzd85tFcXLsdFjWSowaAoHqUkSLs",
  "key32": "oLrg27DxWfsZXBMw5MWSMHCHkXqCwW9hnf9yRS4zCHQ8ZWeS5qpQ6hxNBF9y28Npv8Gfz4zNM5eA76atAFDyRMQ",
  "key33": "5Py8Kqdu35Mut7F7MCa1EVgAJGNcVDb82daxU9AwVoY43U5qaSeMiQZ26KvZxDUYTCFZBAmpQxmVftHsr73isTMF",
  "key34": "3BLrLseuWdjAmvyUni4mq2rtiWLTQXJkG6jewz3hb2FKPpxmkc3iGsaHDp7kzs2V8bPJDW4w7Pxh9J3F8cTpELkV",
  "key35": "3uRE5THd6vpDMuxFDWrUDYZBhfLoBbiSXaLv9k2V7k7Z7f9swtR1N254hhnRU3eSFa9iJFZqqNFo1f6GFs6S9C1h"
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
