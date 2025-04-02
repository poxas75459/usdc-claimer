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
    "5pa8wT7ptiwJ3F3BUL3g4MPptB9nEfYmVcFXkES5yoFVqD8EpBiFm2J1xDUTJVsatk71BoFrYVWsZs5kVZUsv6vj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hNspYxkW2qXQfumhCk9CKNME5m9Z83YXZzrAWoHF5VymqCi5uehgZjAPcFzwSFGsXrmZbCp6o9TefjnbiWCZLNc",
  "key1": "3iEsWWLGrkptCdrMuCxRkpcFMuAejK9rJJGMYrhxY199cZXeaA411aBGk1vjMX9prLqm8h8ADVtbtHRy3jiMwEfh",
  "key2": "4fPFjKzk51Hv7AuZUcyvht612a975Rek7VU6qykYV6EH7FLkhnRqfiQQYYg252uaXvaE6zaHYa3GFSaFhgv1zzqP",
  "key3": "4si1vCQocqQzZeP7kmEAP7Cd2Nhgugsc4v4vrEdigKajdKyQDYQaooPF5sPYsTGJBdCs1BRMFet4kFcK1xk1sAAW",
  "key4": "4rW2CeERRFXrskeBa4mW5FvK3j2P1RbGd6oKjqHG3zFWLZskHj4s5nUZErSL1gWSZvP5ko6jEAVwCXHoN99ACYtQ",
  "key5": "43DSPXHEQnmUs1PeZxJEmttBJ4LTyX2necCd2c8JQq4Wt5B5FBvJfKAFyYP9hfe7VX6AwZjBR3XCXTH47uxbh6D8",
  "key6": "525UsfEtMGmbXZTo8DynVpAL2evF9fhhHdDyjQyoQcSPtYuzf9E7ACgYnLaBcDfsdHcZqj1VFXp37WaPRN9vLmmb",
  "key7": "4XRuz7EooPrqLGcJs7aZuQTSqy6uNWLvFyVy84xi3dQsxfRvWRe33BcndLuNEZL6cHmyqahcYntvS986Um9x44fq",
  "key8": "4mHGuishkETxeZGNoyExhUm82Dvez6nUZq4qLuhH9zjQrPdhezRj1ZExVDw4kdfQNe9mmANYaMEyzwMCR3VMnJaE",
  "key9": "aie9gSkKDirrrvU6F5gNWw2TzWoLTdNCL1SuYXtSXMCBKgDcFELzEQtifzzj6L8efZ17NGC5F6yhwxaxjXm3KMM",
  "key10": "4FCbTgD2TMjMdoQQWX8ChVFPw27H6cGRPtma1sxvDy3KQidXYtP3txooBkHmrnzE5ARVkAL5VmB5RTXyx6Hc5wSa",
  "key11": "49uwxP966j9VALDmTA76yxD4jSJ8i5oqv66Zy8uj9jLMUGBrz7qZJnTSKTmxWfuedAf1TNbAqXxWWzECgv9ve6i6",
  "key12": "3LQAp8fEYnaeEXCzMwDKKCdHucgna2biCriB5xtvKDa2mprksujHsZ8xcy7wcQotbT9focbUhwWTo8EfsZKYA4sC",
  "key13": "YNEP1grGfdmoH71sYk2xBTxTGa3LnL41dpovqUn2JuQYnKEopxNFEkvyHRDEaiSPbru7jBqTJvgfkHeRxzGdppe",
  "key14": "4oaH1HexgHHbT6qQWqbDU2S1aEMQQoMJwMbjPoGcLPqyVBUwhNiZxphQo96jXex2qL3Q3L3f2iBCrYyPT9MvpkUC",
  "key15": "2SWJC15d2p4S1XJBcb178SkfNZK3iwWeHNnK4Ms3VBJkzfV84JFgYWMjM6RX33DTBdWsSMRbxgj7c4TwFJE5T8TE",
  "key16": "3bEDYzEDWJ3W47x3mt5wnqKBUv49iLk9Kf97TeaHKZuCPFkoxW6S2crQmVhXXAk51JyiDHcfHsPcEZc1Q864icwx",
  "key17": "22B7zJMbMw1CgdNJBsKPzKUsbxe69c9aqgnmLtqRqWNes7KzQEvFoTwtdyfDgdM1nX9ukkcRbrfdcN2G7etJYBuh",
  "key18": "8tgYQ2TaiaX3T5dzGGb3PeAF5yox46hUEif8ddjSB57eB1RMR2AmdCQqhpvoe1Dr95wU1T1WmZoXqbthM6YLA8V",
  "key19": "4hDh39opBvuyo1zBzApLQBMniBqP7G4J1mac2YaTaz8FXpe8UvTthaJaei5ujRtfE1x3P1yNAMrekYrf7JwSiCW8",
  "key20": "49bgZQcWisRXJrcjJYvkoUHnYg5viXVGtYpskE7WBjKHqWFLezYAqSq3crfjhHQ9MGmeEDrpJjAMiSLk8uxtiJR4",
  "key21": "3j2p8vnTWomwrqwWTQt3wE1MKCo4ucRNMsSukJv4YY3c9nUzUdJjjCPU2KF6k8ShTSLBzfn3ZzMsVNdZWeBZpzo4",
  "key22": "3hviSormSnMDL2qJvZVKYoToD3hFfuY2D2PEQUTeH2tvCXg5tbRCK2tV3XHpTw6be52KhJA2x5Nu5pWc9TWXVTx4",
  "key23": "3sLxBJVELPArcWgQ8W9p6b4KBtrQk8YnHF8NcdRbXfJJd4BR7uBpWY29J5qcpF9adapk7hLnQKTY5Ghd9gvdiDpq",
  "key24": "3vX5PyQivjc6HheA8Wn2f8vTCZQCBNAdwDuv4wUD2zBaMc1EcphgnXc1mSXAQQDmBJjk78qbsfwU3JzehSSTSRth",
  "key25": "2ZeppCitqoYmqEzuvydVWDmKfY58N8cioBVgNNywnjBa8WWpwLgM9jGqvzH9qXcxinuncw6LKGuycQp1d9aKCJRE",
  "key26": "3KayX6Gc4UWmNVmB7A1H9vCpdahJC9bugJk7GyoMy7UCfwZ2br3dDVuw8SMRGZKqDuj9DU2m5exikUf4QnBYKmoz",
  "key27": "1FVNraMnK1BS6VVjwfufHZ89Gkp361gEeTidy69fVmbt3VuWiZKJ1xfzM1wYLobmegDq1zRBFkGPrPrYn8uXDmc",
  "key28": "53E8EB2S94MSBTwmRXFkpdMiy1bjrbPksLaQQ1AyRgqvrSDGnxxYuvyTppDrjjchmqG8qhV3CH3SdyFJRY4JBMfS",
  "key29": "4E6oWWXoXcG1LwQZxbrWqevskbFAgX2JDMKQy3ms6QaDXqw82UmufnTy8ujHJNGp9USsGDhss2KpAY4UHC9jGzwp",
  "key30": "3kR7ys488f2Rt7HvrqhsEeTpeMuXdfhy2x33BseiUCoy38ej8Ek5swhKczDMVhZjTBcxreLU3PDobYaB8u7rEdV5",
  "key31": "3bqjAjS5yLwFVam2emvXo5LFEDLBC5rSoG5CAqX7BN4GhDhnqBV3cTkJFekYGq75RqssVhyxXsU99C22zZfH6zHT",
  "key32": "2Mpb6jp33etsFmPG1kuACcUdPmSgWFwixwoA7xx8DhMgZHdSQSheXpXYGm6DwAKCyZuDqiHs5mTPdHteVW7YpV41",
  "key33": "Rt5GAv451PVUjgsxcUyuyPewrbTftPwMC2UEhWXyLS4BAKCFSUrzbGtYXXRrKFS7MGRpuhwGzVPdotwhBZ9kHZB",
  "key34": "NhGnNXErXzRNZkd9aicvXePfkDX631m374C8NBjtwt33DMsnGXwHzYWdJBDs9Frir6YjBspY2CsB3Jkox1Cbeg1",
  "key35": "dQgDqR39LJUcJBvf31LjkbNmL4Abd9ohVjLs4hmA1wGP2VfqHJpDDV15r5P1qWLTvs9RpEw83Xf5n8aU5X1KRjx",
  "key36": "45ZdJA92CSLUrRo3UDKF1XKGb7fJj4fK4Sg8Ps8LcN7H9jpVpojibbV8Gduuph7Gv2LvtJ4jg5rerzAZfVir46GY",
  "key37": "2B8MQ19gxBe4KxaqEr2CfCocMmZJw2waB5DN7iRYSqYp5vQuvMYi6huAPQ4vA7yVMUyxs7aWT8egY5wCHas2HEHo"
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
