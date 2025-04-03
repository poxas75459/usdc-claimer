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
    "34yxsfR9TBTGj9i88CtZFFPUp3xMBcAXE4aqzveh6u3ThEypgcPPTE5Rs9fCkSSH34rLTfeeUbARavAoHW3Fz2Rt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49P6U45pVsNe85ivk5S5CNh8vdjEyqyxQyat7s15FCiP7X53RCZtaZ2fvN52GsLLdK8yD7JGnCXRuEGVpyd9myuM",
  "key1": "4ZrnpAjNoPkXbo2TW3QPB97KuHEsUGQ3dbqYj4qXbN4FxLpgFP5K446Kkenj5GLEG8yrdpPhLyBm5oSAqkQcrgNQ",
  "key2": "4PDA518mB2APWpHpZvHVPuBy2T7BH73DvTYNYsB2Dxp8FDaxXUcvQHvyLhha3Bq7oAopjpPq9Vfhz6Af8y4M9P1i",
  "key3": "RB463HP9L4wca3PASw2yFy8tcbH5vWyeE4AUZhJbAYhpu7Lrn8kTWCyMfxmmk3yDADTMaGoj2aZPCvDdDXNn8Xm",
  "key4": "ovp2yFEWwvRaH6ato8X5nGZj5hnqHBQryF4NiEfP6qtcFXkMUizDMSfCWDwG3BbFqn8pi2w4kiseBewb8w41dHj",
  "key5": "5vwfhyiGCdypsg537YWnmGTapDFhEKbLpXgAsAttiA7V8gMvGQNPWVMaxjDuKfeBUFUrrqXsbe6QmkqWWABLEn78",
  "key6": "4UqjhxxzBWGktgx5arWBMu9jgnrBhnRdZWwfk4nk9hySy3Md5SuvPZmQdhGsu7NHYQ7LWcVmHkXYu2QqNhMJzcbn",
  "key7": "4vdUxG5ZfqvyZwo4NdxCdudVUHHnXwh3kLQqFAdhMt8c6w8A5SCZqJZ8Ssd9HkZgoaxD8Fh6cAns95sXQcNEfRL5",
  "key8": "2xFMBGLAQPJMEby8XtgvGfYm6Cdj6eLfyTXNuryCbYR9AV4odvXGCPbDw6Hcg44bZx7UDisdC2z2XobSxByMo2nS",
  "key9": "21AJqNJaZGmK2xCG84De8m4vQyUgZmAJEGqtU3wu3x3jYL4MfVf5gVgdcRViJe8nDopdniP6fiMxAoEjTtKpFigb",
  "key10": "2kBULcDRjB2JMYmXSpsTHXvYshAssVZD8QkjL83VFyg2rX4m9aYXvws2ciHiiDWJVnREZRmCWBGd6dfTtygAKxVf",
  "key11": "5kAQJFtzYrEG4x4YuZExn5ejsnsAmZitd97Wyevjk1bWgz2T5QY2gLb3UpQtzaR9vdgNKaZ625gd5wu5HtRjYDgc",
  "key12": "5dENhWuFcBiQVnCwPkoSpd4hzYt2bj3yekCFiNMRNHBmWfyqyTVJ4ZhpDK1NEnZoY1ttreXabgi1fLF4gDo5AWt6",
  "key13": "5YZcsDi6B5Z8CnmGeJ2rjShwPscwEtCSnGZG5fbxoEEwta1oHKAkBr4uBbRHeiDc2YA76hUdvRLo8Q8KWaSa5gcb",
  "key14": "2whK1d6VGTgRVmQSnoAe6DU1yTfHJRCJnn9BuoigG8TyQGGwoVUj2xMuhYrbG4QwtrnR5K8onjcmepVqmZfk7ngY",
  "key15": "5JVKXtzhQnL8mJ9sPWxFF2G39X2zEWidkfUgE4FhWWKJUPNEHCtwAJH3ZFgahg793ByzZ3nMF3dyG9C4DwPYSwtW",
  "key16": "23tpxjLuoxfUp8bCbgyvfg71SBAQrcKxhS6WS31TxDNVAWdoULpsFzhmadi9XvRv9akzxtRQ18Vp1BT7uKAW78T8",
  "key17": "4e7r1NiihVk8uivNxfvWtr8Z9bu3oQzM9384eWbXtB62ZXA5f6a1mjWrB9JAK5LkuiN4pPu1sQGZKe6DuVnPtn4W",
  "key18": "u3rLkHTUWo9znpV5yPFpr8ZAs4zCwC4ugVdvuieWMWrGma2KQ4B61Jar9gnerRoPEHgcdcSyN5V13bWrE4ktCq5",
  "key19": "4PKGw9FokWXr6e4hsGKsEkXFi498u8pLhDD8NGP4GGU6TzHQtu6LTuTmk3xmXkMyhXRNYFfGco6uvkeKTJR79KFc",
  "key20": "3YbBK2TuSiQGyzCQuBUY9R5QgfXoYAzJrfZsw17RN6AYvqWrqUBEKqB3LRvFdsSHxvRmFEza9xbZ3KLPuStth3QS",
  "key21": "2zWQ9YcepJDAoewHRpfU52dMF7CpRoTCurwxrc88WqVD2K25gAQytCXJWwdxEYRDyjwjrKxfmbJRAz9RrEpVnvfn",
  "key22": "2wA9gxwM3Vms6gYB4qCqp8d9nHbeJptRFity4jNCL4P7qdbe87kNi24Y8xbDqE3GxmMeqkDHBsGB1XwZgpfkq7sw",
  "key23": "62MfLBgPdqrArfpPaChXNVp9Qtm1circcqkPCksHNMkPvT67b7RgjVsH8iW5a6LzXw3FcCjmYNTn2cc5WXLRvBFF",
  "key24": "2fiPreS1AHmxtWAFxi5t5P2JoaJ74RbsmH3vMjb31qWpMGRnws3QwTLdLERBhtTZqU8XHDcbFUPcbP7S51mennTU",
  "key25": "39aniLX6jzNaWdLvpLBWz7LZDgDdFNzeVYNfYCTbVUhbX2jB7gDe8bNWmhLrvJ6CPCDjvqvtvFsq2FCUFW5xEay",
  "key26": "MrFrRCVdCTtV7mX1qth1DvLkN1dA9jfZsoWpbg4jsofSQQKmJruBxYfLrniZYp4MedAXwxY8VRX6SBudJfxfNbn",
  "key27": "5kgM74nTLnmUifQwQ8cjnS5oRvS5VcKajbxRnUTrKz59y6guHDT6b8uQbjUX5VXh18Ks557Nwh7RRu214Nw2EWGM",
  "key28": "3mN5dwWy4xywL4ApEJJ2b9pRtJVpiYYjKZjwRGGnzEiLE2zvASaNdeLxENyd78pTLJtfxSbgWJmpobRy9mUvKEbN",
  "key29": "3G3NqMP669o9xTH5s7Z8JHvn6C632r9C1GrnMXbZokjaZUP6FvAASAQQekBbNYeranLspaQf74KR76y1szjfqvcR",
  "key30": "3PowCxUD9SQTw1zU9VPyeWqhCsFydm2rymtSiuk9WrVtc532h6gmeUU9BkemvzpdsejWLkCvjbVkmL6BoVd7Usmu",
  "key31": "65VV6hKJrM6m3TJoH4AHA2YSYwm3c5y9gkpJtaedB4WvkmRJPmxTnDfubqbh8XLZfedHhnNfrD87iYP1dxguW76g",
  "key32": "eVBSNv492cyqxuBAXNSEimyZ9vSJRuoAqPZ7euVMTMYEwyLZazP1XJvhUwx41QVmFH63qqaNqxwPfEXckJqN8kN",
  "key33": "ekhkPeafQtEoA9t7i2UQrYPTnqAiRUzinppnGkcKUPUoXAp6yP6S4aL5jDM3KwEmC4X1FVgiVwD6ETzMJni9fni",
  "key34": "5iPLVwPfJbu627Gr1ihDB2ZKKv1X5PmokYugGXFCBCREdKxvH95iskT3qePAZM3LJYGyf8ixyRZmyZdnCNsAvyRL",
  "key35": "5RqKFL5YWWREhTuNbGJqizUepKYGznKc8qJsSUfVrDzHRLeCk6mr7AzGpHvHscvtMnYkgbMQS5URoFpKd55VYE7Y",
  "key36": "2GD7FUaREynqU1EMFEyw1oA4NZuHKYAjJoJMSLTXnKc1q4Eswyan6pKnGSiDUBUryr4mMMDUPrkT8WvXjsXyfLgQ",
  "key37": "2QUVnnvnDRRAy2erpqnchPqxohc3yeWdW7fXvvXbtonNKD2JgztqLkxwWKbEVW2aqoJGx8BatD9smMmUqopjuhSm",
  "key38": "5nPT54LBjhNmuxV4vpwJZkaBHBHsgsSiyTxZBLqUVbKEt5h4ZcTpoK4E6Pc2MgEwQnuJo7d6SVx3uouSwx8yXPeR",
  "key39": "6N7NpotCN8afT2eR1UwGiEnQppSDBR9B3KwLxeftKacUuEKFNfE5pdRZNWKDVob49k8ptsYSzbPkFvszEnihuyf",
  "key40": "1Qz9zrkfuUuMDtT6dc6DDZRgYuidqZvd9s5CG7sVukYCCAkhgZfgvKCSU8PWmQLASAYc3R92T32EuQFkhxkHxTn",
  "key41": "2Yxy2aFsk1cb6ToHi7RW2BrjqZN8ib9ocw9TZECtSPKjspHgkt5Rq5Ge9tFCWtrKQRvUJ2TgcFFcAgLEnhHgXLiv",
  "key42": "5XgxGtiisBMVf6nFkqc7yxvZcqqE1WNrzryLZAv4ZAMomWvVRfiAzstbY5XMATg7PGwA9pCFVicHTqy76ThRaCNT",
  "key43": "3hWdURqS5TCcf8mhfry9eRvkFTQ53j3qJVn5dyaioVoaP1GsPFQ4fNBP2UNHBD7M77cjYq7sU2uvLnMceytrA12m",
  "key44": "29cEp7iTSeevKq3AudJguM7RZ7nhkrbgVfdioCawCf9ncK4NjU1gCv48ALJXgYQ6WqFadLCtpD4iH8yWaD3QAvGd",
  "key45": "2PYgtFESsJVnyhsvaSvT9mVedAMPw2A6BVY7VeFtnd13Q3num43yE6TWsqZAUnXNz8RrT8CjbwzxhDavDN1iBrWo"
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
