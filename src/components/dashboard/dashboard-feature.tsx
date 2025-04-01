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
    "4RhL2Lbjintrr5GnS8iFKjgLKFEQAzcWDhSoMhkcbTXuhSf4XuQrsQsMaZ2NSYM5ua4niQgbRhJXnmzkQXMYaeKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rqSa7CqkogDvC2TkNKcnX5EUWSZxqJAVBSh79FPv18tsqRvGjhGMBywhXQfbe4w4KAH8HxDcsSg3YWT1yDtvUpr",
  "key1": "5J2UDsCuzr8GA5DCUj4ozxRsjpjeKLa3Z8jCwkedmujjHLjYfSX16xW7DnWhkjYD5Vyv2q7jvqMptEXVjXxHiXsH",
  "key2": "46L9CFMMjJ6weNsBktqq8LCMzpKfzN8cxHxVQA6oDF1yotrZ62DQdSDZVZ5v2cJfQUBeounCLEkQ6DAxHwRMBw9a",
  "key3": "qpUxVfep8XBBxt76EZNgjW8uhRrTttTQN4WzA2mbEN7cwFbR8ZvqgpuFeRUXe4f2TodRctZ1HUQEVJMM8DnzbX5",
  "key4": "4GCbrzp7CnxyXxgvALJDZHAnJPt1EgnjBAtjnHi2jsEXFi2NqCFLFftmSduBKST1zt7kGJLykGA65Y6pM9emjvBk",
  "key5": "3gvCDDAYqEuHVdvu3cTLPnNmHxmrsZWTTaMfpEseSVzhnsC6Sj3PNY5tgJQ7TLBWrFxoccM4sKvqJqkYYjBjhJA",
  "key6": "3gnMo5WbfZaofHwbefh7mKaJaSuEpc4Ugd7ypSHVsqtSxxn2oRyitnfKcWFPp5v9yTiTBXzXNq75pbaZy3XFku1P",
  "key7": "2qtqiNJ1MFj9RTg7sFHjC3i8su4aHTq6A4ZRwTjLyKxWa8RiKigrrGAhmUL8jBdBkeorrS1y9w7nvfDvUt87BFAX",
  "key8": "4HeVAeMrBcPth3VB1qgBvFocmxMNNFhzrwCnZsSWAnubiPiCdsZHrwWY5poWfBoWLKmzLKKRjUfbrguA8vmo6FdS",
  "key9": "2jVvVLAtmkjt5fJGsUYF5DbYbwQrVsxaBmJ8m1yYyn7894HFqUf6u5MkLjEXMDyAgypeXxhbvBfPRDoQ8LY4QtiC",
  "key10": "agmGTm1yhpsGLnP9VFSSzf3Ew7DuiUziRUGV7FJZzcnADs4xcbLWYCza3EohRHudoeFWGNa7t8YXomieFLAEHon",
  "key11": "3zGT1jq22T2f3hP7TvJckzBuH3Wb4cTiXcjesRJaUvh14xLKJ9PyrJN89dmfbpVpFWcAdGXuoaJ1cM21pYTUKj5B",
  "key12": "5JoEPCcCPNryjoj8WRNaVavMnQsej9xvMTfuo3f6rwgy4mhWfyTrS6Bqiomv4VGkZ6dXdBrxcMfbDUsioWUfKng1",
  "key13": "3Bktm7kbE5CzVzsGsryPPjjFHhnmkLMM7dsLnTkg3bS7SFP9Pbd7bqJNXj2ahpxatffJJDiK6YcTwTBpNHjzTgn6",
  "key14": "292ZuDvGxF5A74PahjTH9GGuywiu1hutsbSRSWdqSzQ7fXCvMNU1p7m85DWDST8qdXefWLcueAGjs5YfcfsTWhdN",
  "key15": "xabefYz1vuhAr3jvv56b63CkcaDnGyZgn6rzzKd8Tm4vaaLSF6iGE5oU2jc4m69ZG8SyK1SsWrDdDubk8Vb63sq",
  "key16": "fsnxTUrUhLmSM23v3Xn5nDKRTSDDm5EwGrtunhGVxj4SznZPyp81ub7tW31PAArz2t6JfC51gptSdpAxSByAAB2",
  "key17": "3Ris1BchZt82W3rZYvDCLKCqYKt59DDFj2h5ekPPfvuPEyR7eqsDApzsKk5b2izXL18pieCVjoLxdqUNf9xcN2kb",
  "key18": "4y5BkSjDsAWDhtx9eYA6SSNjshzXeaPBgQJ3PqnL7GCXfsYvR5esRZRssET7P51mdZQmEEAHKqtQsLYMdYogBAMj",
  "key19": "2NbkHCBmLFeBGTJUd1zAxiLjhpd23MfY2JAdfMFbPiov92feFcDEYxTwhuHMzJxuNczofmy95A2A5YA6mPe5g5bR",
  "key20": "2U4mSinoqVjFsK2bxnzNkM7hHwFzmftUgMNJRzejkXnWZF2sV8yYXYWQrWKoihmTeXqoLz8QTeZoMWQ4rCJtfaRS",
  "key21": "35jRvv1fQSC3kqZ9wMGfin6x6tVqMSbiMHwkqA7QmacT1jJrnEWqojxqiq8QvbTj5amQ93YTwVyrVJhPvfKdRBT3",
  "key22": "3pKYv1vGoEeuax7XsApSaV4AX3VKrv2e1RsdsXMLG2e3VXDd9eMW3sfR61DKibzJaSgny5vX2Bcw2tTk5z7uZMjZ",
  "key23": "QnjM4eyZHXVd6zCSmGCtxfjWdmjtmNjJeEr3GYTDFECSS99PUUYCPvMkVhpMy1kF2mjVKYQnz3aSUmFByayoQaj",
  "key24": "4g4Dz2n3kCGFfoXtFsCm3vz5zJ51jGVL4jS5YeqkdZb1BL1C43dvuMa9bJgby66rGsrUVfBB7i9iwPeXPqWDJRzN",
  "key25": "4EsVaQUX3hBgpaFoGz7LJUPxB7dUDqo8HbkkqvSrR3ne1q9UYBXszPbx4VcBnYjnBZVrGfmQGpi3Y2VCgpnsfC4t",
  "key26": "4yTxxC2vop3YH4P7PRnnzctVPBsrTeSSfu3R5v61q1zashhhQhw1zTFGRwCchVd2362GA9HGLnxJ81qP2FXo1dcb",
  "key27": "44A98o3Kb6xcNoM5HNHrtnfRcQHckCbsEJy7a8Zx1cuLjJhtXZtGGJcaFiTCA9Uwa2fmkWQFYWWxghNNaLPnron4",
  "key28": "2Qh2HxKQa9xhnEebaeJzcLDbJQjvgVvSQD2yv1QAqC7d469V42AXezkJaFZfNiJrjTX24P4BWX9QfvPt8LQsHajX",
  "key29": "58CL3fx5fuVMi5GupfBwKfuTjD1tZTfAqkA3zAnfDY2rjKXt4ey2GNwsmgPs3GhCzCrJod71KjEjbPBwGhiK4AHU",
  "key30": "2VydTbURLhPEBuBm1kEoYCe9WHUSHYRjiShXHvzUwpXWtYUVMkgVStAYfXKYuSKizxwnHgUpKCNatLFMR9iwct2D",
  "key31": "3XqSt6bWLcxoqyq3uR95N5vBxytm57sgmdtapikpWevvE8xd8aRPb1jnxeDfAexQzhoYaVSaVDGvzrc4dZoRuu7u",
  "key32": "3PboguN3ZwVQzAKuKWazTF5on6ngp34ykyadJiQX5JAGbhWo9GdGECNL2yJpwFUyyKKZhq6dDNSsX9EBg2feUXPU",
  "key33": "4uTyXeAffUKpYX7Qwf5dD52KWEfMcSUTfRu52nxyToUEKemuKD4KKb3exaco6w923Fg6wB2o8Zh1L5fuHycdvSWB",
  "key34": "4ADr2oArCxeNxBwbuwUEcQqaLqZsH5mhYfWzohEtCkJwHATQKTJhkFoknenkWNnmL5YdF9EUDWSPe8Gg2HwRuHAo",
  "key35": "4LCS7NYdiFmyCkaC9Kdo4i4xfXPH1K7DGgvRx1GbejE3VsLynzfJaj464QtrxdgTgLbLN41HMxVdCv3xCn7ioEhy",
  "key36": "4i9qjhBMHv9ESphqEU4R3VySomrcwe9LjYBEGPmcqiDFyKTxqYGddjenK9CetBoBfGQ6Ke8GJNhhgnLsMkPCXXxH"
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
