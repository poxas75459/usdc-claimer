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
    "5uabHyG96v9gFrvH6zATMfgH61xxQiM1CPtEEG7MqV5qZ3gomntcjiMQ5hbY9oVHmjqknwB7RcC8Di9zGewVUe3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nuj5op8pDxo5Kjn4KzyF59Bgmm2FboH7YLV2RdGfXAZbCL66HGRekdjV4vujHj7WhxsohZ8xWfVG5Bz1W4e1WTe",
  "key1": "4JSEw7dnP9xDRrbBDiuMptje92NaLNfLKQKs71fwUUtDD7iVoAWPutxfHzsYa4DGRWXWodTqoVxs2oZC1srnuFE2",
  "key2": "4TReznKWEFa4bYsZSfQBQB8R3PVLkbDXE717srqymDU7pS7R8cd6gaWYVA26d7WjuN5feyv3NBTfEs5wUHyDJ6mA",
  "key3": "5JYTByaHidmAUJQwHdfiSNZHzGLYFvYzLZMMPngeBeAuTXeb5siPSS8EbjDhCRGgK1SDbh2fC7RBDU7quqgFBCpT",
  "key4": "eoGxcLypC6jRUG3VzbAkqkLi5SYVwPzqy2yhQPojM7JdD32Y3f81Smo6rQtzYwpTaN38Ahz6gJQeUvUX22rKNSR",
  "key5": "2oeCLifHJaMojLLZgPnR4rbFhHFyh6t9DYxgPRCu73mBavSes979TjtX4JcXjFQFhFpJHPpboApTL67dSDo8Yzb6",
  "key6": "4cigB42YnkdYnmNoUrmFfLLu2XsYpJ1YggwyLXkeTtuYaaq4QNm3FnoPMtgFd3ggwyyyLjoiD7Zc2URmByC2Nitg",
  "key7": "5p4Nu21gQqCqFCedJZbVbxCEEcjp5uw9AJYmMHawqsBaLYhSpTTNkQv75fx4RDPk3CqGfqKDYtZHNVxbhq4KjbpV",
  "key8": "4sCq4rty1GHcEntP8Ut9ELdJLuBASrs1A62vm6uqHpvfBAxuzNmVVjCFNCiVdVM6N9G8Qucmo5Ca8GgfdEGQVxar",
  "key9": "irLdmGR9jGUJ6pRcC8RWXaKu8nN1ex7c81GgVx1XUYZhFkDtHprnjVPCxxQRrhTPvvyAcb8kjx21sWvEN4fGYMT",
  "key10": "24Wi24wAVmBJMT1wW8sMsePUq3GdcmrgBJENdBqC3rHjBzA7rqAx19cAU1TTPcTdcx4qBuoXB3so5YH5wZbanEhb",
  "key11": "uwTJArgdnvtFj6yF82X5mFovNmxe29owQZDRXUXZB89MDESh5uVJecnJLzWCpxGK2bdARNMWB4SyTpNP1m7sW8t",
  "key12": "2255YmFb319MW3Nqi68tzk8ZkmNcWo3aLKfHeKnaid34M2VJhXpFoYvf3oAuPHi3bHNNZi7TRBkYb8g1s1AmxWga",
  "key13": "5ix3QHabUZWS78NNZxSfMWopBtPXCZjYH6wVD9m8nQBZpk6FK9tkGFE1UQb81Nkj8HUA6DiLPjxTFfxQwN4dbVUA",
  "key14": "3pVcYtV56vZX1bd5SntGFZiyjD6aG9vCtxJXaLJJUzFpaBLQUWCNQxzWJ818ukKgTDfNzR5nFtpLHSGANCZGpjZH",
  "key15": "3M22PBgtQ2xuoVXuHjdf8NrZ8JVAg4M6XdQDRjXo16ChqcReUuGGeFxkzexwqjahCX9y3dGDUCtjHYAGiBT8FHNV",
  "key16": "5yeP3JByjMkNwKFZ6aRi8Tz3ohAGQAXeA39GuHeyP5uhN172P1PLtZ6iFH6gd9gcjgNA4V8Z2PWoNx14asx4DC2x",
  "key17": "3ZzSMmNwS4gMHXxkiBaxjCcL3XLaUq1ZT3tRKgLpPWBUFtAqcPrhqgLoBnNGmAARkhier3qak5fk98B323F2qrd1",
  "key18": "2Vkcrc6qZ1YoNMMYxruV5snNYfNCmkYaKrU5jHV5bDMZ6h9ASnFxbsdfZDH7UvE11p879NHKsxVXZLGMAurTYkZ1",
  "key19": "4zpYjSiSu6BceZdc2CYMBczsj2GRDyoUesz5BbgKpbB46i6vKErLZDqwzRTdGHa4P15pczXyeRo3qB1Pf1WL8Eqe",
  "key20": "3WGBByUTTT9Vt7S2sXPUgzAuFjMyiPMVaYB6rfViA3dH6sd5uAuuqpVEYjitCFeRBBEB81VEkr7mqTP8Ya2FsWtf",
  "key21": "3ns1hst5W5jX6KxKbM22c1uBd7A1bXnc1qyiMtwuEhLBF3d16FEkk1XboAhTHvgpAjQC5Vo9eVH4b3E5PiXLvhGb",
  "key22": "2vmL7PWoYhRrC8rSm4NoQQPLb8LAS7JyBv4tdmBNWLmfYDNhVWjev1FaBpeZK6Pis8D2ZxLne4QuB569ChDKvjp2",
  "key23": "38KX1RzY5G5qhpfBEjMjb3pCveGqEErL2edqC2VFgsb7USPP7j8SbH1WbAfQWUNETRZ9cmTKd3tgZYNxuiNafAYU",
  "key24": "2Vicre9Un7veK5yys3QvStwKHKDnvvyBnWuyShcRkqqHFeWMdcNMoEU31QJ3z39Y9YTLb7DnetzezW6paey3kxJZ"
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
