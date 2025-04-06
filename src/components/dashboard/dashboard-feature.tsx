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
    "5aa4BKqa5A6rAvQQMkrPqwQAnvbaoFDEJSkbK8KXrx9Jb5GRCC1oyrzXDBh6f1UpWKBw6pJTfCb88FNcHH9j2Ps2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sZ8h761tt69ZWAky2voTu4mr98J8dTGu3PhjBHq8QjtRzqqisH4qMDVcpmrixK2ta7a6KbUx8T8RX6LAnUNbvXQ",
  "key1": "37NzrfKtp1vm62RjZBhyg6sciVjZG4TW7pDkgcrAYfTYPEUvaH4YB9EBHCy5EvC3b82K1cz96dHrifV6FGXrf5H7",
  "key2": "4SDqaHqxLFrJJMQDQAsCFNkwh5R85oTXkUHobhA9aqddHSuv7WAPra3sW3YEUNByMN8aoTwBq2hkXzU7F832SgDB",
  "key3": "5ix7Rx7E1qpE3Qx8YHbZ5Agmoi1hmAkfFnrrWt93KbtiLSnk4e13FMRnkDEiqWtjgAmNeNdKZhVKFxRmUBQBddri",
  "key4": "3MjFSgVMW2oy9VR3D3EXwRipNGyvKhQ15nteiBvceVFHFePLvHZ2io78uSzkHzDZJSPGbsvM26KczrgWXt7bwgdE",
  "key5": "32q9GQ2LaxYSCqzJesZRDQGDZMBxwqHnik3dHDffCFqSKrwCRozEwyo9yoHMmVJQakB2owEHfq8uq1hEWxajVr6C",
  "key6": "5XkLpSAc2pr9i1BZvKBfdsKqcZqXe3rQwgZt1gZWWEzDX4rQvJZ44rbpvUL3pe3GRSK65tHMEhGLdUwML9ApjBTx",
  "key7": "vkdchhNh9aRfA5qHLPpvzuJY7iHXrFu3r5QB8k3LSfnuKFoRYeSzC3DcJzhHevQ9UL4UEQWWfLuS47vEh9ii1GD",
  "key8": "5HAJd1RRL7CmF1WMKeHAzTmhjPHzWFwQnzW5Hdk4XZmZgNssL5QHcpypmYAy2NrxdmG8fXRDx2iALURXUmNyDnwh",
  "key9": "5MXxB1eXAXsNaF8r5Lp4zME1PgvNS8MjtCWNxp8g5kYeUgzicmufAXv6bGug2KSBrjw8uTpj7m9GFgux4KQk3Qz7",
  "key10": "4YggDvKThUJ2QtUPeZy3abJ1XyGjatw9dujYpPZC97diMJMoFV6GQYCjE6JNtycdPNCLffpbqh9iNFT6iB9Bu5Ji",
  "key11": "3JaokG9DoZTqrSda75F7DSE7hh6rGSGvNiCKWM32SsbZeUnzzr2XsHvqc6FP2bwhJapmHN1B9XHG61QGxjwfByBY",
  "key12": "2Hgt6FGUqm6gbz8sECx8TEWECWsDsPrd7pPTgBtyfug4jeVReeyA5G52iLcYy16Yn7QBhpX6JAUH4KSk1saTzBqw",
  "key13": "3r1pJzjDL6xvQmNRCY5sm5HXKXPgZUh9cv4Zeki2c4SBFScxJdZVUGKxyVk2ezpJDepahm6dHQ9R3s8GFNngDRhF",
  "key14": "zkFdmw7pUAGG8uwj4mhBGSyXqFNN6D4Z6vAf8BDyLVJb7Hoo85Loupn4kcinzhivxs1X53yeaFvufQKuEFbUCfX",
  "key15": "3hG6r1PyDme3u7tvKPfCgY5arpuUGVffP34dX5Prrncxhbeo6kSw6YMBPzX8bBe4htdmf9RhY4A5aRFzXh2uXnCP",
  "key16": "j3eabYqzL7XfXs8VG75tkjPoQWdKTwyMFg7orUtThgYaXG2zWgDmgrar8nZE23GNWAVABsyYNMqzthAHN4ZE4bR",
  "key17": "3dDTyLyT3ogpr6RNkeFMrTsK1U6YxsYmoBT9oChwWKjTkFMxDU8ApdHoJWzKkk7aGBXmtJMqGFtMzkvsJywkEyBG",
  "key18": "5CqCoQDgEqgkX2EhAMkzCkYima3ayK5LDAgSEPcBTCxBjSeuYUnHnxSyh95sxBgEEoMbVfPqduFXQnLnaE7bNxoL",
  "key19": "5XsTfToHGX8SuEZSrFUb3fAD5QWRAAPRgZJYagKN1v6rFBPWqv7rxZicqy55mrEh5URe7F6WtSmvqeqacvuPt1Bq",
  "key20": "2Di2EenkzznbFwpBuX4Sd3zBxa9nH3QpAoNFX9hupZePA3ibn8MZBn2uc3N1CwZwE3gue2Q4D2DgSh6HSYmaaV26",
  "key21": "3JLuvq6DA7Erab5WfKevVtmRdtFvf9m3gtcHMjDBugoEbdLQJ191Fp9TpXEZtZ9qsbqz2FAt2bmtyw9UpZt1Ajxd",
  "key22": "2xTMHQXt6QRpaQsLRAy23JfR8arMDx9R6extQe5ksx5Es9fZtJgMQ8kwu9nwKtUBGaikX2rtfBMsK6zE3aXnengq",
  "key23": "29iGCFhSTNHiRJtm72R66RN3T1CVEXdHyA7CiRdMsrin4Bhot9yZEvpDdiCdZA1oq3ak11fY58L5R4m94NzwYTbZ",
  "key24": "vnAhikZUsBeNDqy1xf3x7oJTPu885TriECaVG6BFKEKKnq5xpighDwVj7yhzdMbSB61WKvZYjWNEwG51TQyHnqt",
  "key25": "4Zc1ft8kPJxY1P5X1FvsPyMToWvf4JEC8DXk96BvJkUpW6ik2g3BT6bmqnGSFAxYFG7sMDwxhF5sCktNoFuP89xn",
  "key26": "5jvDMvwFngZXNadhQkQgFLLjcgW7v8dJrBGhiZRsuCAvuKG5qZ6LCb37TYAEKMcTdwAoeYa5aBNV7paaqMVkJLzh",
  "key27": "4tgoKhyMfC2ebcwVzZUsiBox7rrRPfGAS3YbDW3CJST1qB5Fno5f4YbZHBB2azL4mgc3Spb5oiQELfjYZSLyfQ5R",
  "key28": "2LPqjnt5qXsNFpzyeuEwwoCuVyfezqYBkWn8YQzJvPJeCsMny8dhsEDFbkeQfSBZqX69id6ZitX1yfAF4L15kHBn",
  "key29": "59mSNfy5U7o2eytdgXdsfbYiqCVGNbt7WAg7CVcLPLZ9UxXReD7wKdMqWUAZAN8HXCE7pRm2SXu5oZkuvEMbCGCH",
  "key30": "nfZu81nx81ownYt95hnC1DqNYMtwA4BJLAnmLwa6CPhxU2fSnfR1VhLcEsqxPBXQgF1dtcx9riWVbZy1Aeiz5aZ",
  "key31": "2cML1j6nBBHEjUR3UaWd7aRR47wkpScWQrvJtjw1MbcjDxD9N9Vcrsj39H7mrP7mmrJhJocT9P89fM65ycMyowA5",
  "key32": "4o5MNxPWZHb8kP1mxuSSWko46Zf1mrWRrR5xRihwt1R2gn8x3v7MvSLJ5g32sF1Waj3aakKg73uSAsenptVqia4Z",
  "key33": "25muJuS9ULVB9fVedWTbJbfCrDJeA3Rje7YRxJ6TBcNPqYbUXUQ1ZZKJghz44eN6VEfNe2fJmdUme8Aiserb2vh1",
  "key34": "gc5iD3CP7Lw5ZkuxGa8C9ZVPJYspS9xUr3SjuKMHnLem2K68xFoSVWSAoZzkQXtNnEPvjGM23r7ENrdzohDHCLj",
  "key35": "Y1QaC2Fp41F3pmwLj2e4KevXX2JS2q4LDKswEpifikeHMMubmiEsw6ZhiVH6NrPGEkhYqnbYzuzbXYmeTo2LKUh",
  "key36": "5s8n9E1ogSo6is1R4xVAhwf1KNxDTywfuLofPqMdbhAHV6PAK1Ws1W2uYkk5yHPLBmoQXWSUQgYNaFG54FZuitUD",
  "key37": "WtrTqapETB26zVy9C5M43NV83GWxfJTLX8CLAVdHupf8cFgx7hc6NVdB2oJDSzkJLEVWHpjhj8fHVSCmr6Vvcp6"
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
