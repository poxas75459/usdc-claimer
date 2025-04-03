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
    "4cWWXetGcZvVJEbfPgWTSvaxKUQDgfheHdszjjRNSU3p2weC1JFWiGKmnMxiY1jfvvLjWHCExtKd6etTgkXPUNwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QZrNYSVS9mbyAV43pCiXDuBU59Wws2r6o1zfkAHQSfnXpMZxNXWczJKcUFszxcJaa35Npg3jqSbShsRFkKRFZDd",
  "key1": "5ZJsYa79w17jcD2L4Qn5tUbFsr1zZ2fetv8DBASZTzTG4hWm8r9eTJvvbBN2io7bpD8VKUMpvyW7xocV6oECpB53",
  "key2": "57rNeiSJ3bs6Z1SFb7BNeG9C8KGTXWm5sGtBv93npfNauGiinA9wMgJpEPS1gSB7wqgi9AhJrwR7hkdQ29KPZZoY",
  "key3": "RWwiVnP1nfgeTK3MDtXK4qzrpjeFGb3inbiCA4eWut4W17Wyr5rQnajQ8GrrzVY16VL6mwtNM5nfCP6Hf7o5YqZ",
  "key4": "3uCzCkLxfbFaRdMB3cobzAauWSAdhLoHS6HXHx8xmV8Exfsud9cgHzq3WDpWNn35bmoaYfA2TMRrSKUQabsZYgc8",
  "key5": "4gpAzXB63aKaxZNGEAZL5SMTAf4b6Kb7iyFU6mXaYWqSNmCXP76SJDT7TircWxMGvyUu2Q4roUvHjAid8yzWyazw",
  "key6": "3BSDUk6XdAaKDvEoqk5CZkpvGJFqL8pk1wzrnj4ZAYEypuHu2Y79YrVKnijrDtCrspM11HaFGDAd74KvXpSbSt2j",
  "key7": "SqLNy8DYPJzdYrK1LPDfkwVGmcGxcqVgSz2VLPHjcFRXTw3D5GVy7atRoVhfGCaxB5VQt15W4ZyKLjcsm39nbZY",
  "key8": "2ow1Q1Snb3wk6ZKMzcFtCt3NfwtMktKzBrfBsAaFiQvxkW3eVZEaC1KVNuxtTEqxYvvunfJYbXUWjgz2AkJgpod6",
  "key9": "47kHfN6wwfkJAFgTv5mo6C67izYvzkg8JrD3H8DSzkcN9RkCKUriXQ8FWUqgNfpztK4D1WauwajrS2frGQkbRM7L",
  "key10": "65y3hTdJu2bdMXAUosWE4X8KxdzZ1BxyQTyX2o6k3caf9Gy7RUhanryyiRSbCuXCQiFc7jJhsAtLEvMPcjrCwRp1",
  "key11": "UEsVYv4XTwRUjpWHXKf1hAK5LiiLtUadhXPSMdjkP4NF5EF8JGNAjFxbAo7b7cvbmfpheXi5PSsR5XkTzUCssZF",
  "key12": "hrHp6TXrn4RSCvYASGSELpFmxhiAsSDap12CqR93Dzsq4ay1wy4vmk11UoodpohVq4iehE77oEVrZmLKwfiQbEy",
  "key13": "4BhSTKvydTAKGBUxSRj29Wqh7dVqBeZqXse7NtkaCDLReE1VGcnjCfGq3HFRb4wggdkQwM2bs1xcpqsGrRHbme97",
  "key14": "3QFX9aHkRUzfNDsKyKLkDSuWAnttFAV5LGpRbFwgrrEjRQj3jgNQy8e8vR4ezkzBBMuqrDgyBwu8iVCfyAARn9fW",
  "key15": "KjzCBZrSQv3azMdD3vqjrUgy92y3jmmPS7DzZEf8BRaKCUQqDqTPe1QWQcX2JMhuittSkdn3FaWemiKwwxCbnWk",
  "key16": "2Td283MXgairLkehfSr2RPA7tELX4MNuK1PnSnnjrrBWPuYKTfo3sce6DZNdWSxsd31TrtUfXtjBVyBnDpQAoSNL",
  "key17": "5Bh4sLTP2CmszAmWaD7Uon1pZ6HQmi13fgu3xc6FuJQ6LQr8AvQMTNH1Wdtovprf22fhKhtFit93tcumkPpCqaki",
  "key18": "5jLMNZedZjSyvnERrZeGjuNoVcnQULM6H9xd1CqSWT5jpqCt7zdtsM9BW7C5ryLfaWajbTdJBeQinm9g4C56MHti",
  "key19": "5BFkVvPyvahMcaytPRadmKwj42SJtwPeBnJ71BTza4xZvskQQzgovLTsW7Sm7ozDG6JCdijegp2S7WcDeCCXmDF2",
  "key20": "2iSuYUpRnZXpjH8hyoyyvuC6wxXc4fCZbPqb45UmmnkbH7RH4xRJCz3AAvkqwk9uSfgPKZM3Lw2RE4AJCajMNDa",
  "key21": "2tg7QKQ4WLs19JeepN6Gh3N1fHZJRPoTHgcZZEZMHwgz2Vwz7LzSV4QZLQ23B4t5GRADPcpbQZCM1naJGXBtBai8",
  "key22": "4iaqeTPju9gg9iTuQt5uQHiErq6m4dzAZ1ao9hjz4vubPHuky26rd9UFYce6DzWJiYxU3mk2agPGa7rv8w8J6esa",
  "key23": "3VBHE2Ww3b9AyiFHpWoGkf7wNsVg1XN5oxrVAEPLMt1aMLy9JiSUBsWXycxD4jsYcZaKUoj72Mq4f3md3DoGibGu",
  "key24": "3Nwt7AoM3pLVu16mR1xkidYzYmBZ6YAG55cpWaVYm2SgCaPyqnsGtGBioufRiweVSmEcAEWgN9zi5rKR9DXuqYWT",
  "key25": "28JznJ6Aw7eBsMDaXGWyRkA3uUiW29y8dV5tqNHqCnk3v7GQqoJ61zZdQ1x9PnzxqhPYZwmpKXmXZp3LNsaqX3Gn",
  "key26": "4onJo38Kc3jSYvw6qjFC8WJepkRtxDpZTvv67yHShvQfPFNc6KrnXS7dJzxMwcZJMTN9nUT7wrA8KBks1La7PhLK",
  "key27": "3B6NKNGekeeGRMtXoyqshdGMTuwvoLbL5c7A1cyKi1Lph1LYJ8mq4Ttr1XE7iTmGh6dQev4MLxjUjrATQYgyviTy",
  "key28": "2A5qMYBG7LBeTr8evx525ex1rwH6PxgEeHzvyYydTmVakkcgCutzypfVk1pbG8jaaMq7KKsAMUFzXcUXU7E8sLVa",
  "key29": "57EYa6f8n2Xj32Lm6GggKUaU8e3wxHE6StMhh43ZRw8fSknFEm2drAHJfL6Doa86tHUUTNMqgaotN2on63qUAmCu"
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
