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
    "2EpQVhxmse2GAGqrraxp2Df4K7s4trohDoLNAD2vWjTjyFwnqyDRUZ6Nuo5bjcZyfHWF2xDKwUzTSgrtDRA7KZ5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ELoHieuwNqiSCZPUthkTCn9cMELATR76Zqayd3AnaSqjawWwvFfE6WQ5sx3PU4mptC55j4B7hKTU95W1489mvZm",
  "key1": "2YviTU68trohYYwymhKGj2AToGLu2ri5mgPMdT18R81ypwmLdipxkzFUBVnX5FHJvZ8txBE59iSvkYnWfsjzLmj7",
  "key2": "EwZ5CV7sXjfQnATH2cspriYXWRskPLa5nArdBDwBKCs9r9eRSCBQ1YfZ2Gj1Qmy4C9HfFpvVhSUB547dHrYaQKK",
  "key3": "4puJUDQjJ9VUVLUwuhrDzfeBAT2n852SfFFrGnZsFPt5xQGCT5FikmboUxW9Y4Ba67DetWcYBEy1Dxd3jD9LYgMA",
  "key4": "4jCJYUYxpomVVxF6nX6mZzGw5Twedv9RN5WvNhkU18bDCWc7EsMWCZnqXiFYCSZ6EGXWphErcRyMaXrV9hbAtr7",
  "key5": "3niqFg6GSqF9ia8XQEu9jbu73uDETKRhrw21did7u5yWPjjioRWszNzcKUeptbapYqtwJRsmKZEtWxp3UsuM17oD",
  "key6": "5BuCKvuV9X7d5r8JnPZwoy4xyoeyGL2fk9f3R9cir3UtSMTQFhrvdZuhjmqSeGnGB96wK8ri1W8PaHfQAS5FDNzg",
  "key7": "2MUC8pJNfBj9mhoyf9ekdeqsqmpAEx36pJW2wkp7koNbJe86ta5qYwBUmx8i1BdyVR1E2dEXVpYLPJSX8xHGYWBt",
  "key8": "3T1SNVaHjsDABa7hkv39Xikko3GgqJSaSU3XncrCXSpnSPawPpLrUWNs4rau1PURFrVGTooCqjbAdv9zJ8FNZkzx",
  "key9": "Fn9qSoeft2aP2fSF29Xhhz5kVgiaabrpFB4MzTD1uu7C4sciRQ7KJWJrrriMy28FQzLcJxrwuyxiHtb3Nk7oSF4",
  "key10": "2VAuw8b1ECDAPKGdAYeGsGHDkwaLGqaQaTporH3CrJcP74zVRzKBrHuhJVG9JiFC6xNxnSwAFgpLnAUzRUe5LnJa",
  "key11": "5aTCWaaPgG24agLt2oDcB7npciYYQ5x15G9tBRUvePZB3CZVYbCbJmUbdNiRPGh62KnNVYP8kWXohgr1q6XcwKKx",
  "key12": "3qqpcXtfmWc6aoPNskNNE8nJwhh4txkGeRfTNsA8EXAiaUB2cM13xhxEsGfMVmu2Za6fdEBiJYSSPWKfbvZMLR2L",
  "key13": "2uxGit9xzgsSfF8QB9KB3b7rLosjqS1N2YS8XF2aYn3EW8fkq9mYogVpVGSwmwXXUQeNRzH81vYJbsRLaZ8oEDeo",
  "key14": "2kfRAawDGtsjnHg95JS3bNfYPg6A49LkZdX6SBCbwdNV5d83pKN5zwNN1hRQd1vyXSQfydnUdb4ieng2JkPLUZhn",
  "key15": "K2ifkpenuQYFDpZwg9vY4dTAqx36Brt8RpAyWrBk9jZDNVm4AbfhB8Hsb7oLXpgFZedXwAgc96MtHtFGvHimFVA",
  "key16": "gxCQJbYJXbyV4VdUuYJAEgPcVJ3Z1b8qHFZTwS8edeYuWmPUYUAubB6ppbf24RrfAi1PExts2u1LK2axbx3attn",
  "key17": "35fagQcvoCGZGLfRJusf52XU8uW1duD6ntADLuBh9KhP8vARNhrwpNSLar2uyxpxpWXX48KrEyf4nEScS5a4MeJX",
  "key18": "38Mx4H1FwgsGuAhy6C2VsdUqYYLjc3fSn36gLKExnqtVxHh8pyCxLBSC661chNrCwjp8TmW6mz4TTAoocQW4QviT",
  "key19": "4anJuSLeU8Nq9ZAwwZhzHYURDCKHwwPAa9okL9WNfPxUPFKa16Hqh1cj8bcJdpgeZLAq67ksnWuULBLfewUSRoGb",
  "key20": "2MgdvFCXAmtERD7MdgMeXPgaN8zHET8YeusCCALJoj1T1sbD7k7nSw1cWcCmiDb4zcZaFd4RJxuqeM8ZoTavpbpo",
  "key21": "58aRJnrjzcM9vqpTHctLLjXavF8qrCAEfaoxJBCPA6x3yNQa1ZTrrwUqDRS6vDZYjeRF8tZJTViKgHjNUhEda6Nb",
  "key22": "2bhoEb4gLwqGZ5dRLBXFje9gLAucRxiVUvWLMcs9S8DEzKry4Ern3DpyoNtJFgTJTAbR6tEHbAHtX4R8KyzJp2YB",
  "key23": "48MmZH7CrfFM5KPNGcZJcEDQ8JYY2ueCnfJtKAk3CwTqpTADGUXNPaGHw15vkFwVBGkW8i8weUQn8wgYWRFVuvgX",
  "key24": "2Y8BxqsWdiQXdWFvkkmHzBRy7RzfisnmrJtuLpsyDB4e1WA7NZiSE89h7BY1D4KprPJscMPoA981yJ7sVPxW8fUQ",
  "key25": "3y82XLT78zi6BirevrZN2ccPjdn3VGv1UBbNBjMxsMCvFfqp4APbq18R4RELyt4BjfNJKAoKKtyMCfYdJ3wgbpvH",
  "key26": "2pTFM5NjZt2eMfsmDHqrV4ztsyjqCC7D6WQB8hEp1CsdnwcauzDYrykRSqKYTLrNqBuVSyWZUvYh4DvNLei396Dq",
  "key27": "3yukxc28qv7iNCuDiw7LFfompab6K2XjvkSZcJm9XLnGHNynq1CZtF9kTpFeRX6K9KDUj8XvMkU4DXo7h6WvyMLM"
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
