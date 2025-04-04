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
    "3sUux4tyq9yiM77596qUEfVYPvzzoLuvtApeK8Yahm6iSVaXj4SuMWDZVtxJJa8JijhoFLF7c366L5wXmypdwdVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bczybd8NVWfysmLM9gJ1BJm5MkLw5RroKP9RDJxBRW9w8HUMDHi12miHsXSEGGhuAjrERN7YEKdTYdfWzzcWuSQ",
  "key1": "fM61uWRhhBU5TziuZ2yLuJNNd56c2ruQBZm9iZppgiS4eZvf8KSbmYAAL4eko14njZtPAEcgTyKgNQraNfP8eJd",
  "key2": "1eM3TZFkc8wJhVmPZZqA7TQL7hbi4Gd3btG7Nst8jH7b8ETrzWSHpbKREso5berudAaD3DXCksjKzfCQXqL8Jr6",
  "key3": "tJXz5kgAWknnfcEmKxYjBYnAW9ckVgHThG13WrtRa1HQFutbxf3megvTWZ7A63V1TUi7RtubWXS1n1M7sPBm3Ff",
  "key4": "57J3TZkHPe2kPGnxYkTPZ1vuDWo5S2erXWtfnkW1E1Zc93x4zSe7eYHbmnfg2FhKrJ1kYi8hnTmn2JcTDBmFHJzt",
  "key5": "4XqVmwFUTPEVQpJYFKzyySH681Wu1N1jQWR8nCFRmjcL5nCzaCJ3awYDZzxK1FzA2yQV15H6BYySZJTVZe5uddXz",
  "key6": "2bs7tTV9JJ1GDandQaC3extwgAk4X8oJKJX86sH67WQWJW2M8VB7NhXfD95fwuMpUzSPUJo3WCuaBmNLrxrfyQki",
  "key7": "ZAJX1UojpJft9mAjmvweZCnN9rRKhnHtKrjiCirBWcCdYHVepPzXLPyNCMCbdUQdhZvrMzEn45DTcojaZ8F2k8W",
  "key8": "3V9KAqwagFpJUTFtJtwoupRFM98jVp38PVBdGSzPn6s68FALiDPsvgq2BECh4jBVacuQmjBXN1YMuS8tSDbLAb85",
  "key9": "5g1RA1aFnvGWnJ8YRcgi4FG6ECNaBr6WHYJxPSfpzmSXsBZULQfrE14aDQSpuE7AcikattyJK11xKg6UuUpnw7C5",
  "key10": "43AVSUq9FG1xwSh4CJrhR6y6L6FuZ9sSRvZzkgupZXA6yqx3LsGo9VW9Vj278Geh8NaDzJRFQP1yadQtzWMj66Es",
  "key11": "eciXD9C6v2zSicpc2aRZNUqEKKwWUYhHspVgJbYXQLeecpQ23ZeXAtaWA8ifgcrGWGkpkHe8Hfuc15mqn5QYhEe",
  "key12": "2MnPvMBk7UNfTvg4oHxxJKFwTodQgjt7dthStxxaxGuUWnU1QHwBeSmdyGPkCvASw1jsDXxvH1zzUqjwa6gYkAnF",
  "key13": "4FNUN9hgsh8rXWHTBg7XZgWYthkCNhbB262wc5KDwz7DjVeU5rb2BnVduvcjaXDNRM9C8wC4wMHGLTpe458AuEYL",
  "key14": "4JnxGg8juUcJgpPkLRx4XnESh9bouhrNsnroJzjRcaawiXkctJj247zHoM9ipbF3dQmKWB5a8Gi4gHmMbqeYGwHA",
  "key15": "5P5j4w7eWknkyAYcJMj1eEQNKQTs5gxXc17bwEDEAz34jxQggMRpaoCyCpKHBZYaSpK5HjvtJnBz4Bwgte7C7V8B",
  "key16": "f3bfhXe3RyNeXrcguEq1BFt7D1kFT7YxtfNR893VZanhHHshwxVbo6sbP1qM5aZuywSNgqF7dZR2GFzU2x4AANK",
  "key17": "3pPPipMeXJtL8bPwZwMPpyRPfQsYdRxK9L7kYdekCc4CxRHnBUssYvwSx2LzSYaW7KXUaQNVH3vTatVEkJqhMQcd",
  "key18": "MaurwNL99dqQrhncyN1L6KqAdeKjGuLbqD19msdS3t13wt6CNhV4KXzYAnoYC5cT4aKAwccy2fqQDoKii13Ufiq",
  "key19": "3Z6L1zceoHxogwdJonXrFGZzCADaY144sgZQ7oZXVP7Y79bPLTSnwAw5MqxHvySqj372nTMoJEsbXitRhSXsdt4P",
  "key20": "5PbuZBHdB5PvsUMrqWjWZXDBJnyHfFjuGAWfcEgBmf2qhhfCS9AWDSU9runkiVLzihhJP2wdeiSHeAg39inX4Xag",
  "key21": "3r8pyuMEczLZ932G8PYzLCLpvvz2LYYZuJowAmRDnwK5bbybR4Q69jwGFKWcVVXCNm8eHibQ62JjBkvLdLnXDZTc",
  "key22": "1qMhf74mdWRPfEwBGdSL659KX8177xzLQfhM3QLYoCY78g4YUtWKfiQ3KdQWRoLeB1KBWViE84eUSbsuKP9nwMq",
  "key23": "Q1j6M6jr3zvoo1hktpQg2mBigM3cUa3ahwJd7o9SPnAXtjSxirKZBRxzW1oFXBdgmV4djtg34HhkrwMEh91xBea",
  "key24": "21AFLKEop7iBTZr4wScgXsJMaNtx5KGPqZxZd5UAGmRw5XsNc3WmiD5LR3NWQJdHeQpGbbWg8HuprYskuqY11oHf",
  "key25": "4Eouth3VL9LGkYAmGgVHLjvjfomBWzuaLE5PAbFE2huJRzznnkvY6THnqb1bgHwYY7JkaXycqu4aj3LPKZqXYBFs",
  "key26": "5DL4ASCwC1nk6PfnQT2EQKMSVWMjKCiSbU7haMX7Ws4aKMF9T5YmYm8Tr1MpE9KHHHFfkYEKoX8Fatm2fAH1wPPq",
  "key27": "2b1DTE2DyPef3U9kGbuRaPRfEjM2ZbZPRN2YEpcysaSzLNAf4BxXhMTqZSeGzSNDASQ43JfW433GkLp4tnbM3NUs",
  "key28": "4bsJASfS6gNeHPGCKcc4PbjqCPEDhb3ULhmKeWonSJWwKyVovpZq34xS8sJChBREF82ULPsb5p5ufTeHPV4W7sJ1",
  "key29": "4bVTqhFSKv35EhoVCaVYe3c3JRxtCVTEx6gtX9P5zK6TcwMJhnHtr4YcDE4Rvf3k3th1XorHNMggZSRJo6S9dTNZ",
  "key30": "5qVAFzL7VRPe4mSa7FubcbmiTMGZCQ7rkzXPig5nRoyuB7SsFMc5PNbVmXHME14nKasWHbWypFMogHYbgsKrCtw4",
  "key31": "fQa8Y7YKCBtNiNcdBPCNdRxXp99GWXbNbnGcb7PJJ79sMVnmgvSXdTtBuvQGa4TM6AGUa5fpFxaBEvqZwAJb6BB",
  "key32": "5wbjs7LTVwFeEpmw6mAjWqUFCcWHB9zFoJciTTtpZ6GE6jYvNSApEoWm7byejepnU8BR1EGXPPrZ13PxTvWL683K",
  "key33": "Yeqb2JchMQ7PZZqkxEZMv5cq8HrJC5793FZ8A8zsn8ZBH1Sr3vB6S6U4AoJ9o4cH3CUbVSa2aypCQaE32M4tNcs",
  "key34": "43nj2ELay2MAFvZDw8hroNcX6GUzFi1VRdK3wH9UfmMeoUMPvTu4diMiQdgQEnNxiGdNUSLBe6td1SdPi5y8De3z",
  "key35": "4PfTehJ922dHj9qHwkwFrYN7DX5iPyPCyV1xWkSoC94dsqB7edtyvDyonQexS6xTJVZWWCBRgtB15GQFgChsz36N",
  "key36": "3hBwdrmTqo4YbC9Dj49UBg5j8sBc7mZfRN8x8jQpppVLCwL11vQvGfSKFFgbt7f6jPE4eKdStLQm7C9ZnvWKRBXE",
  "key37": "3BjdgMmmUmqMuAkFT1k9qMKqBWzyLk4t7R6zhCBJavTScuaconEEpYMLHmtm6kVJ6pQP5eRTE4teB2hQiK7mcgia"
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
