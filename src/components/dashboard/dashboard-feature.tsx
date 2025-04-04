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
    "43gs3VyWUvY5YUygZpZHVf5W3hZUzENeddoAtSBQiSRgztfEssB3WCSWtEaA5gWRD1Nncrkt5o74XtTsrEsiakt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F5jFx7bmvESLVmv9mMupePWNNdCC6wwNstSHQ5oRbCWvxLm2ahaLX9ig4v1c95Zxyxz8b8hcMwQznDW6wCNc7Uw",
  "key1": "4aphGL3EMG5683hMBmYtoeaHuZgVnZpcyd2KCnfTUzAXqaQWBGFk9ZAiGL9oTt34YNu7XxQ6ESWoV8VcWt9qvYbu",
  "key2": "mkTQoEvHyUJLWU3SwxacpxX9G4iDvUdyT4n9Qy5a9RFv78rM7sJLzfaiCin6yV8D95D4kyEqUHrmtg1TFrB9AEK",
  "key3": "Njk1qDuweE1D8mVgisPC4KZUEcAdu4hwXgVyeVQ1UqYDAunEXExcjtw7Y7qDfw8qUN4HUtMApZYFABwsHVNG1eH",
  "key4": "55hH13RVGs8ZwAUTJZPefyK9QmfTTyhn4SdyYpnWw9ZLL5HZBL3GKqP7dyFPTre9xpXAn2H818Md7GfVyoqC4zXX",
  "key5": "3Nu1rvx73Yxap4oLkSxD9M5BP5w9XmUXeBY2LtGrQVFUiFDAiiU8fdvWWdB8bZVsucN2EjsAqV556ZEkUg1p5wgq",
  "key6": "3Z5EC9nQ3XzvhhikoKLG1ptqMiGeR9TbivWjsQvW4Q8hnwhP9w49NoPEPt3oDyVFEVp2YQePMTRZT27A8chf1Jjs",
  "key7": "2e8JECVzkUMwzLR9SgEorvq8SUyGyjZtkTbjtddtpqRHMtbKpqVcze6r72ehnZjZXbjS4ynu5NadKhEboWA2Etqf",
  "key8": "36bTvJeYd7uqpuWEzH67MYNipyqL6hfaXMYsQ8knZjwsZPKD9FoGgZ9gA2SoGneyXEGETJvyGkdStVvi3yApJz5z",
  "key9": "62fvEoVEjjAr3m3D3p8D53zJFJ3ffCvATdk17Doe8N8HXLjhEGLKtG8GkT6dxb8ohjYVtmsq2jKgbj5Nc2G9HQUM",
  "key10": "4aTi3h9C4RPwBsxnwXd4nyYjxQXMA4D9G71f7YtGFUT8zNPQCiTXVEeCVipv4V6qjhYo59fM7KiEkGkMA46NXPQg",
  "key11": "2cCZvDHgan2sXZkmKq3zAmvtHAtJ19kPC5sbfm4QaPa2XS1CmZp516kYQhy22hxRw2r3NQPpvLQptpR3gLFHdaGQ",
  "key12": "Rrsbi3Kg9HJR9myvfharEgsdvr8ZDiSLxXkZAUNhkgjfqvjyHvBDvhwmDhCMMdjZoGfa4qZLqwqg2i4QWSWR1fX",
  "key13": "4WyxZWku4dj1qUtSMJvUY3ngaMNEBShsKzYQr98S2EvryXBW6hcnbC3BWvJXAseDUqqcMHEAog5BfFuzVA5AjFgt",
  "key14": "3vnQZGEW9BbW5odCy3Ya5YskNA8pNpprUm3pFsVQSpAPoHwN4qV4o4FKtAhccNELtHvK4sbRbWnziifQCYdyYaAK",
  "key15": "9SyHwHhgzdLFpwHPBrzyXDWfccwn3McTCT5mpa5e6DUKshHzNWCwqT254gfscBkxneV8UpvH27xibRFWXuTRKrj",
  "key16": "4fGoG6kkA2AEbti6bqeynC7SbKZ4ZdkVES1u2nkKR3x3rjJFQWZfzdQbwzssxcYAqPsKL93P9xTvbqTpT7476Pwa",
  "key17": "DiJZbUe4ae3Vokqn9PoUR9EQHveQxEohHAsJw69tvN6WBJsGYaNkrJqYggUwaN6nwRhF6S8XxZzKgksBpLST1bQ",
  "key18": "2d6opqtA843qhk95hRUJ3V6oCAkbFQH166h8wk52rS7E7gtqMuyitgjFae8vAKyoHKBPWGg5GL8cbbQ4BKDfULyU",
  "key19": "4UNss5zP4i4aPCmPtaxRrzvBShfyDCWSZuvbpPDKrjgZEzjvpvs5zxU4FHb8pRes69TfoKjswRZtSWJ9es8iUB7F",
  "key20": "58BQ4Z2iWj5VuTqqegoRh6Zw7VVtp1KNPKNCZE6JEC9WFLDPserdnbzwv3H99t1J6H2t5GQiz1CcSgULbnVUJoxh",
  "key21": "3dBvy9HjVQUW4DdCPnpGSYCq3UvcLF9Bfi1cQqTBbPN1GZspS2v29tz2tGfiH66gPecfcpKREayPkVXeVCqgFmnQ",
  "key22": "3ovbJMff6kRTeTKfP3kaxxt6P2xtwtT8FqzpeCnuDNdtxDiVeT7oh2DLwFSgv635AddayDtZnHGbVjnSy8Q8bNZn",
  "key23": "3hmMrDkKN4FoPofyemv47kpr6snEyA2WRqLCBvYmpvG2SvT5t5q5U59e4AY77k3UpYBMTXdJMJZ88hPc1ZscX6q9",
  "key24": "3FTxPUZAuPYzDDNusVwfvjWqtXSuZ5nNKvgAkqK1CS5W27D2LsBh9RP3yaJHGRwoNegFohTTG2irNhVrvrYKqqDh",
  "key25": "4CnLy1M8yTEuJ1kqc8RQLSYQWBdLt1mb22BBrfkhtE9rjfpi1mTX1XxDgPrtgEkwBNiSs4oHWbWp79FLhXvjVMTL",
  "key26": "5gFHthxTfH9etPd1YyRThXAJwUQBTnxDSrksWkt3yJEGUzEhiTv5i3a6W7hSCc3XiG3W2kXB1Wjv32czsi39PejT",
  "key27": "5SnV3NyTUWXqmWEqMBndYiNkQaEU7o1AMJgtJoYgmcppbiNa9FSc8DUdLkeBcYdsmwwwqQfSjg4y4xLMCnMhRVXn",
  "key28": "587ELqoowK27i56asmtdKKa8N5v7SKHKKjJ7ry86sommtrhqw1fEbUEwH4xLuDUp4Ue5QbDJPrAzw8PRUhiY1jRR",
  "key29": "2Xc355QPVdkdQGsasKontFSciExZ5fMGK3CcWGgUKLEPJuZDaKbkawpagi19p4FevzXG6eCXEGgwcDCysDXEriLi",
  "key30": "56X1bDQwjB6Xk3VhmnE5JhEN3muEPzupXfFSc8xMgECtSjvcPwcm8s6CWjby3kS3QRTAV96ZWsoZccaQrwJZmeiK",
  "key31": "2aPoF63xtnhKaUEGg1j8SxtNdRx89MFer82QS7R146Wduk3ZxGzU41NELzXTg5Gap6abjYqytUw4cFMS5xRxhdRh",
  "key32": "WoEenGNmqRnRGBCcXMdguppqAxZDZpS3U5u6bcG2AV4LPNvgA2YtGju8uLJaj22imQgG28jo3er3GUtMpbA46Ja",
  "key33": "3FFGXgbYSLQbixbZfv1H3gqoXFWJ7H25ET4TjiCddCcy6X1B7yVUUhWYKLKXEfit3ASXgUiAFkMHWSGDbJgt8FhS",
  "key34": "4vkQpVPut4e6WbpAopBEzpBcSjvvWB99EAx5jVBj4tDHqm1Lsg813CkhbcRhFwMPtV85MgyPH689tPfyVBKyA2Q",
  "key35": "5hJjtFsSfKebXnTNH6sqVRES6x7TNFjhQCWnGNtDzbn1uxaKRxxUVaRzjgaMSVv55XDuQX2QRWf1YqNxw7bkujW8",
  "key36": "2ZdLYzf3CuuT9mNCk19gqfheREU11yXmkd7GSpMGqasVcrZrBeNQQG9khizn42PhQxupQnX2hmWguQoZu37jYkBZ",
  "key37": "5GytTDaeozGNKsgx13xAs4tvYD6DScYWpbm9UY5DS6sQrkht8ywag92x7mTFNtDv77pexnz5cNhDXuowEkx7whvd",
  "key38": "qUbSoKTM5vxF5Hx4gHYao2yTKHWNMhVnbkmeLxJ2YjxWRrehTwFHqhWpmm3qxPEB5sAJQ7TvmMhqE2TznGD7HCD",
  "key39": "5zHZZqZjQBTefAHWN5qEwrkUbJsoNkwyomJ9ZQQMKLWgZzqauZjXpQFcf3MUKLjBbDqBfaf18zou73ncJnKqJUqo"
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
