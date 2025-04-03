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
    "3VPvWTFhgQgfYWhcwXgjuZ7EfY6MfLJeJHGVzFig9tULMmnAnCZyzNYPfQS9jvQFSMxzRg8orvqCC93qZRGzgcG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oCjLhHvsECppUy2KftW6C3kAYNLD4xip8DZPwPHG5TYQYS4XBVEdzfMCyy6qCB9yN2MfGkz6X4FCwNfLadn3C3s",
  "key1": "Wz3AyufVXC7DS5Z4EpkWzv6fS3eiwZey1d4vEaDr2VR1UfvMvxrvrYQBAJ8tBW57TYronoeTXwnanAbQET4JpCc",
  "key2": "5Giwp7KucNeyMaouSQq6LjvrXq8bsgMHZi7VRVtd8haAhhPxeFzgnTV9mPSDPZBiRCtSTaiCypCTmM5mvVqNwsav",
  "key3": "2xKXXhqTxaFN7CTxf5s9qE8Xaw59eENp7kQVyGPx7NR9BGmSdDysVhJY7aoooLr8zQgdSfncwW24hJfmeVK2KFYk",
  "key4": "3N7N3dN6ewTzopR2Au615ufCHdf7PeJt7NmLz6cWHzChmy3JjdwLVoDDp3MYz4Doq3iDaoEHYdUmiz8JqxoaTNWv",
  "key5": "4aVVR6fr9Q4mEVj2gkBcyrw2qu4A74nJHCBwehnyVCUkzdvzLttQvZamP7zzT3JxRTdKBSr7kDynHLGpR8qqNe6q",
  "key6": "FNJSMr4iHmLZUSrC92MC1Wjyj25sjuGDucXkcYkaEaVFBcuAXhGk8dGzmQ8PZ2N5NSJcirBboZymNWkMHE1SnMJ",
  "key7": "55Ca32YEDQYt4wRPvDSngyb5VgNptkWLQgboLvH8ve89VNk5pot5AoAwzw3bPGkaTxEEWSR6qEbN6LLkcgtF2r6z",
  "key8": "313zMrZEMSiLPWYTEwYUS3AHBTyjCNKGckrvzGyupdQtz4dZzdbHLq8fi6tcHmUdBCrbxN2qcN5hCBd43ezzGJDX",
  "key9": "2XHkuiMKzvTLJqPZ9Dne9ft3kRjDwa5rm486ShMNzLpmyC26ZCQMMQ6526qYnE9hNZ4s5aZ6nQ1cCYPJFjo1cHn5",
  "key10": "3hR2AS6D2Xd9G7EzrCxrDNDnrd1ndhS8he2xpYoaiCjcWmdeo9cwzyonxGkamGtEf2aqPnqwuUxcHCBUitp3gANP",
  "key11": "3rK529yDvF1ZQrXiEctF7Y8QnZDMSDxLbRzi42H8PLTVvUH8q3K5VYosF8kobwEwFVxPDhq6hrP7biYsSTAyEkHC",
  "key12": "2f8X9tRQyMTHEVwgUB8QQyNPNdiEZYXinpky6qQjHnMUpBT61WfTmFiN1K1btqV7a8YGCF5WHF9dNYYCNyTP66q",
  "key13": "5YcGAuHEUm9zDJ23U3Eizu1AnofEKrknMgzn6wVTQSqUYJZFZ2FcWVH7y4VYmTjp5YYGWMHjqwKPQqCNQ5gmk4SW",
  "key14": "3r2ZgscPq4VegQEREreohFRWMBSKE75kyZokQGUdCAiFSG7ku8mbkRj17SvGH3wY3Jhw1vTUSNDWoEyEEMqBfEPs",
  "key15": "zKxedsFZukibBVjm8rfaSjQUEuGfpEhrF4Cbb4fTVT7ip6bDEcDYFv6qCYAJ9npm2xeQtaqbBeT8dW2TE5fZNMg",
  "key16": "2X8DKfMq6DYFMnL83y3GWGMWxBQQtEWrnk1BSV6JyvTWk6dGyofyTQMgEqCsaP26nhevRHKfkdjEYQ4Rc5ASxxQZ",
  "key17": "2bkTxERWF2rhV3NbbiG12sMmJwZMiDoQrvCWrC3r1wJ78dGzwbRfh4XaksRCUdLPosLSLxWYyBH2Avgq1xS7Kiax",
  "key18": "4boPJenCmgTGBSeX8uF4nrMTKEzbash8aCQLEBf1BUAS7MjL6KJGVaUTevjYG67gcEXqCLQSJPL365VkaojdJxve",
  "key19": "5oCYnMMvc3Fu831dF8FqQPpmGcVv1cj8ymr8P2M4HFcrXfKFd3gf7YKbRz9Kkrekwsv51mhLPFQYkyjUTwAsE8Vy",
  "key20": "EuCdL2aRXoiA2v7PKmTZ8m5Ye6tLGHqJstcTJ3m5VLoH9N2MxwoYYnjQLMLG2AbMrZ7FYbxoucM7W8j1TM3T8o4",
  "key21": "42zvK8MTX8JdYYnerWwcN6huBKBqkqgAptBogvbiS5JUWaCo2chEP1FAnzP4sDyLEr67oF2UEBF5FuTN6PKzqxoB",
  "key22": "65vXnF4qZVk9WfPG6SXTEhAAZdnT1mbwz77wPjPVwyJyhNwUBRoDGWzEvPsWbcmRkXtEbw748J5WDkNwphc4md3h",
  "key23": "2BeGWgber2i3GhpW3Y7wFvsM9Wy6zR5K7eyLbhSawG5U21miLjobCmYpe8BpCkgjqVhHwfNGxEqnHfbec6QrMGNu",
  "key24": "4XLs6CGBC35r9XK4pWfiP7HxWtAv3zB8LsAqs6VsJ2KtxuJrQMkbPY1nYUKtWUKBJEiK3TT2M7q7ki3Xx6t2fzgD",
  "key25": "62Tcd2QE1BhYHviZ2oiL216DAvE58purA2qJbsQcJZQcvKPaQt3aL5N681cWVgMmpBS87UwAs54G4PRT3RuDMrVv",
  "key26": "31X3trbTJLUsMYEm9FcnMXjYbXiLkVYAoGpZxArZCDecs6spNZNRv4Thjap19yz1rHDmBy6dwW3EMeBJx7LbFpg4",
  "key27": "2dzv5SeqGPUzhnhtLw4L7hcaLu59224vNDg8vBk4UqwgZPg5YtAQ8mikmK14DkU6L29wL3p78ubtmMsEAFbEk2vs",
  "key28": "2RE5u7VH3CJ8uVEpuHcMxAPCyDtniQ2MWqRYTRPgSLfVfN62Md9AovTVHYCG2Hj26LZSH8hSLuF36tiByKh1HGyU",
  "key29": "26DxgrUt3XGjqYWbwndMSTst9xN3Tcq6RD5cujRKP2s4K6UuXzDz6ux2iXURSPTZg8ru7xrw7K4XZQdScMzMAPMZ",
  "key30": "hW2e19YAHM9kknusnphwcgypAkDr23VkBPeCPYHkwMjYPBRWWUnhBkNGccqJtZyQV68AE5ccX8Lh8Xf8gFbdU43",
  "key31": "53UUjYJzX9NwCHyxAymrQs4gLwgoqFm6vyot5pb1VW6qotN1Z8TFSk61Am4nHvyCedFuKqBn47hgteu923Zg2GVx",
  "key32": "iNyrjkwVWTRNFNV69CHAbqcmtERTuqkqE8tdYJpCbNG5acb4Pa9VtWEWFiuoLkB55Nz1ymhdSiCqwKkzrG69ShN",
  "key33": "4Ty88HEv11Jts87H9J37MH6NWndVoTXSag1TxDN5UiML1UnbkP7NziSMvRPn6jFMHiH94WJJSq3gczjqaEZgtxu3",
  "key34": "56qxDigLCZqjqjXZ7rM8PMQj9nMU7oUJk5CKPLaw4pHKGcbCH5Louh71Nk7Vp36wr17rCwmy3YoV8tBdTV7cHgRR",
  "key35": "3qjNhnnE13eosCDsKtyENfrSGWPZmB3c6GSFyYJVJ2aX2kAhuisLqJ5bME5kwz7RPhuFw3t5J7uzJm6EN5Fecymm",
  "key36": "41imZGsBxYAtN3qLYmmXVRrPCs7gMb442gNyqYLkTifniLfaaaaYY5BJV2REi5uVm2G5pfubTPsSgLoS8SntYbut",
  "key37": "58V8F6FVZjzoVPYfmi4mKdyFdA4hrzoYSYjZQhkEyC2QgVJ3tZpWuECCPQb7m2Thcx4rwv1tYf1q1nCjRw8hPsSC",
  "key38": "26dexSwv62ZSQaeDGTkmSs5bLnoe4VmxLFiXzqJnANRrjfnUtS5Nk76SEAXakkUnqmmJ6xzAf2SVEskVQdVnpPfz",
  "key39": "3PexNfJBKU73hLYTF77USwRv83bAGZ331gJu7uNrEPutBVdyJPh3sQs1fwEJTF83Xpzig55E5Fgkw1r1JquPEu2W",
  "key40": "4eTUf7tpJBG6FpC4PDrwXpSSCnSNiEEYhVK57Tny6ppr1knfggbcSQ7W1tVuvUUDr6yxEkwuf6WRBiQdZDwMKvre",
  "key41": "5LfUjCcLYpAcs35A7NjjUE6JgRJtgpPvvUYuEHYDWUGYQECwa8NQwJ6JNtfF1RRVTHeYEhudAUWWaNut92ph3Xh5"
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
