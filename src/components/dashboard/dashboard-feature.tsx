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
    "2iSyd1vPcLET95hCDsRSKkvJKFyZJTD7mKaWkB3PJP9iJXvcAwSotA2et5aKscBfJAo26jzWLybFWJGAmYtxhL72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "284Sfm7N78BwAwMyxckcJ2yzmLYBQqdvB3oKA8hc6tF3tyL1bmZzqjHmq1DDxATNNixbDvYtPxgTcqFnr8dUTjCm",
  "key1": "4JjvBaf6TNQ5sjKYbQt2ptKyuyLS9njr9eCd7sZHvHXCpfqrvWEyLkFvPr9PhUfFbA4xTeEDHu6R2odMs6yBoZav",
  "key2": "eBfkQHWsyACFjbzgZ71VpTPgwB2qPQXM8QJiMzcQP2H2qTHPkXSKKf9Ht2ZXmdd8fuSLJSG6g8WyMEQQdtb5LZx",
  "key3": "Q69zZwkjrNqpL55Sh1tLvr19vvoHUSwqwNR8Yc3371FHeBP3Aee45tb1Wu64YHAexp8TZRHx6c1d9d9iFq66DiQ",
  "key4": "5CL5k4hSsM6vgLwczHpmhY4RAyp8tFtotuM6EAeoBWidLq4u8HedWhJe29D5eQYhfAhxpTf76qbkUyAoZdpt75ah",
  "key5": "3ETRojPRZy7gMwLedqjiqGcBTGqfydby2nHqUiTcfuvP4D9dZMbHYgtu6YygY5yyR4DLHmtsQAAL2yVrMQ9xUCf9",
  "key6": "3ypAZ3QwpuYwXcBo52EDb7qtnePSz1Rt5tP4wNzsZmE3pbv9hmEhWpfLe6BZWGY95Y2Vrx9v3WVk538Mup8Appvm",
  "key7": "2ixJzokt6tDq3RA9oKdJSAEwUfRApm8JLK5YJ7yHcNk6nNDtCMy8wtJVqMA3JhVcSgi1rayi86ALkKENsq2QwiKt",
  "key8": "4NjEaLDdeBxnY3EaVw658qKJNR2dBHo518uEtbxL5JyKK6uctrj8aCvjBRK7JRvBAu8kWvjoPtHEUmt2Rg6uLKLo",
  "key9": "63oKoZb55ZSwr6U6hD6P2xHCou3Mr2aDunSAwnJyELz15WXvA3LZQBG4CwpR17UdDbFMVQArtUignZCHqFRRyA9z",
  "key10": "2HECkcMw3QLf4wWEVoFxCxrT9ZX2s1aEWDvvb9cF7yFbjiAzjz4uo6KjUCAJDXnXtXtLEM1emnZaLWbAKGGFJKAU",
  "key11": "3q2STYJYq96cuqDAgkaFzjrKdEP6z4aDyPVoPkK4cHs6z64HPTnJNxzNZhRKEB213cNppjPjXBivb75TzeXYjsWJ",
  "key12": "2LAeS4TF92wnAcSUzDiYHdRjGFYav7gxKiSojCZ946hz9NrQXDszvvdQdWDgvrvRGUGt2HwgJnK5h6BfuoguFVkQ",
  "key13": "4womAK4qWmfWQUXDeVS7M6kRH8douvKFBpurUqQh9MMpxF2yB5FG8chDCa4BxPNRA6zokM6RemUP3R7TJ4Zk3bWr",
  "key14": "cSdi8M7uamQSBYbHETibxhpy1AnMxE4SPuwjJac8VRzkA4ZBaDTybSj5rN4oypRmLoeGe7vdgS7ocPSeou7TxQM",
  "key15": "5ZoN4Anh38NN1hi2u2A2VNLJFkaDXzp29x7XPDckBLwK1uEJj1GdUoMTTKkecEJnHsZUkDwsn3zM2bfQBZ1hkFB3",
  "key16": "2kcdubdoVULJKJ8ECHupAiNLfuiKVpotWZqsRyB38AZc257Mujbm2wjAjoCCr6RHjsMc63PzspKdyYakkEEg93dX",
  "key17": "4XRXhpUvM9UztEcXbETwZLyNqfnaWL36B3zqytQJmpEQd6fSwbhcJE2CsMafaxiTJMhApNNNSCcvYGBd2QfDDQEP",
  "key18": "XAuDgdGBB8oVNceJYxMkcdnyCEid2QLMZUqcdgesNN9zabu1YyTCge3SzP4ad2ufpDnHr4UBJjfmUixe6EfWs6d",
  "key19": "4qqfGD2w1zTEtVJdBmzgWaeGZQBFiUPqSLSxNzBiWsbgVvKu8wG6i8w3RXSWxqGfW9zPs7Jd7WuQ4yogZ2g555dT",
  "key20": "43q9GXG9qJxGLWZ1DFFujt1Gi5XF7mxDCtKg4dw9ADhHgHe6KPoH1ef5TdphvDGN6XGhZpwJ9KBjJ18Ns9XZdph1",
  "key21": "5E1smKs15aPsmqFk9YiRRxi3rngdGsafLB1sfumS3iUStrBCgGgYLhyTBG6kcHmfsCyjHjvc7xFbw5zenx8wwRet",
  "key22": "53JCgR6P6ak2oDGfm7m7dcXUTfJjLdDHnCfwUHvT2LUx5JfCWiMt1cHs51bcchtoLmbXLV14pJh2sgZvYhHtLM4R",
  "key23": "2aAkAPrhUGMh5pLJbkA1zF9GdSMQ4CrsR97zC7XbggNopNddj1pJWaTkdCXfQRmegjzd628VBfZL4HrHKoQxfeUK",
  "key24": "5zCLh8wn171gCUQaDHv5oqya47ZT1qQiy2xdetGVKFAXdvwrnpKbEGzuu7K3nqnR6v9rKwphqiNEQJohMwdtqcdM",
  "key25": "4aRMFDwVvDfnKKE58mkjREhBiPApvuDstVGn6yHmSXceY4StKCew1GcHmfcjbQLWrYArZqbaQukCf8AmckNbcLqg",
  "key26": "4uAmy2jntB1iHbYKrta5mM4bM4gkCUaYEHXB1Jow8GMF9KzkbkifyhyyD9UWAa4jDto4jwNM1wiy97LgUdyScwGU",
  "key27": "2NcSMphsrMQ9CQwJ9nRhfV8RkE5kQR3TT8VJe1u78AVJNAMQ98H2SAnMQq6dXnVDXqsDCyAKRE3rELcEf33zKSwe",
  "key28": "29nSABXLWoGghLBNFdStJBTkSxku5aycaf2KWp1v4zhPcqEY4AWGJTsQytkXjUAWnrRv1xZ2kpHgrAfPZAg23N8t"
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
