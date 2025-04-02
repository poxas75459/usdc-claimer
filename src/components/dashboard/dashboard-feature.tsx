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
    "3NuoKBM1HnWF6dobAzUsiVaajtQaju2V9JcduCcNYZ6BLh81XSDFHGWSCU7XtGdXJjiVQizE6DafjnMWkDM6eDiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tMMSooKhYNMRXuRXk2j4tRFyDfWAdW5KZYnyfJj7HSm83Q5f6vBmu9Za2xNENedgYoqJ8RyzVzGF1HNu6fU2wDR",
  "key1": "6iqewAkerw3Nj8wLk3RVaPreQB5Ynir7mTJPMQbY6JfH9FhP9SJLC7TFhRzgdd6qrLWz7iaaVvrZNFY84fxJSwu",
  "key2": "2wx63ddZhHyfaqtvTyznk3Wv3WNfXE4FZuPapSgwCFmt6ESXfQqDkaZWpoE6jNqtF9CnaZyqVVyFgsP8ekA6pJzR",
  "key3": "SRGH1Z1frDc4EandsC2Ww6UWUwxb36nE1h19vPyvcrp3zTjaxYMyJtPGzkx9einYdJ1v3meXxTwg2f4MGFzo1fp",
  "key4": "rHBBccLoLc3cSBJgAHP86rA8HfHTsauZtTJpqA8Hc6Ps9mXCexQ6UvcKoDfW66s6fGpDDgL2h1upwz1GwDXuD1x",
  "key5": "ENhd3NLPRA6SgR3MTF632ZTx82HBMvQstBs6HhxsdPpuBrudiVKn5uzV457XkbY54fRdxKJNXrZqYmXFQB8BTHt",
  "key6": "5FsgC8P8msk37DzBMgrZ5KEXvZkGURTePX18ivU8rvQfdkW79wUocA6f6XPPALoxyy6ZPn5XTrjX7rZncSa4MYjA",
  "key7": "2ab241jCMeCn3zTu44rrqT1HE4DiWdZRcYWK5EMj8UAKLvYoxApkSBNcfq4CimDxs3r7WJtmNNGLqSVzkGtyNsB8",
  "key8": "69q2WPgCHi7wKBd9HziotCXc9mJjrTspyV67DvNymn32gdDXvZb2YxybJAVHZjN1wLa6cbtSV5ojVCY6rQVGxMj",
  "key9": "Qj3x8HvK7C5bEMbSYRby4XvLeeVZ9uvsfX56m74geC3uk6N95WVv3H4Rb7F1Qh62Bq139bKf4f3pk9furFcmCpZ",
  "key10": "2sNdUTcAxKjWRr3qv6wPMbxXdMkSW9MSDtQcTzoJu9xzKVx7RnVRNL6XigAikT4M96WWv5TjZEQ3z188CyCP6LR9",
  "key11": "qCY2aLjcDiXwJXetjhNntAMMJFx42MZU1guWFrRaeUNjcDovduQUNDfRtvpv1oRSiyz3SConvPditSDfcP1JGCn",
  "key12": "3S9Yr6tvopYQzoKwy7iUkkUbBjwsYSMUfqQxWGt69R7SXrTuCPNhNk64Yk9JARAZVo6q6gFPbESQsdkLoDYzK8MM",
  "key13": "uUX8yVvhAxjTgBhgEApFJnbGaAq3uDJtrsRue2PjpgrgxuSHC5nEKZexa61kW6XnwtvXTjamYpvz2ZTDZzFbuTP",
  "key14": "2fgFkWmrGjx5jfvqDVvxjoUQuFA5Hk8EktBp57ELQHYxefWd2UW46dRKJwsepHSokRKPRd9CJ76gSA1bZeGsKWeP",
  "key15": "2RR5TcLpAHeKxoTLmLeXJHz7uCM1eFdST8GZoHbm7T3pRYQ8zaM2N8WKynfxBfufPwhaxGfwnfNpYxJdZskoZG7t",
  "key16": "4DpmtdLpeTZLdfvNPepmgxsCYGA7DR7k2rKi8jtULbqaaUmnp7fa6kKcjumQCV2ahLaZaAqPtchGYwsKytkEpxxY",
  "key17": "23nSEwgavYaCK7CtaxGNkytu9LooXf3qQXb8cBz4o8GYbX5C32bqbMvu6CD3ZXT18EdEQgrKoVMUbaBTjzcLJKNb",
  "key18": "4AtjvtYXougptKh9s71KZ1ZhDhEg2UquDkmuWKYiz2UBrjCXe7ksUjJWtcZwDoyiQ1SDBvydu169UiaKCBuPxVqm",
  "key19": "h7cjc7D6RBWsLvfq8hMUWw5e3KfZF23CvonDXJqScPTrrnqRZHKVEzEG14BASb2QKLAGCB4Q1bzLSjZbqHekUWN",
  "key20": "5TGJh1oa7QtifguqjeGR6QMWvJe6VbgGHcjheT9JKioUUjwJkmLf3AQ4F6qnbAtCmNzed7q2uWpTndymsmdwjkiF",
  "key21": "5gVuHpMY6Jw3Hua2xaqKshLAVNYDwdwWHZxNKsjWkz9LG3WetQ8PWGReXT9archtmFFW5WwATeSihFtCafsqQZWh",
  "key22": "2MC7g6BEUqGgrtF6mpxqP7fENVQ8QeBsB8V788JH2zhif3wXpJZXsmartJN71ngFusSnwossmUDW4noqiXZ1eN9v",
  "key23": "62etSinrpSwNuArvWH1vxajFcdDudCrLXspEeGq6NLMdUiuL8fEdnT78xft843g5Qn9PGNbmETayqKNUNJ4xyRZB",
  "key24": "NC5zxbaahwR3qmHALGAYjL9bErkFa2MgXc91v6URZkzT66w6JS7dRHJRsi1cHp44RmbnhMKaGMXywBuQ4xEj6oP",
  "key25": "3iCaBVbsxHLEnE7jwCFvcY2y7Wg4Mmn9uXbbNXtSkELdNwSrjbCL4B6CDh7nCEx3xspvyZVqzYbDubGvSSj3CNpj"
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
