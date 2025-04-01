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
    "gemXuEes5ULXBCbAQEij2hr1YXyrR2CNAuJSgXxGpG8fbABYvRXNx7JQRdUWJDt9Xzwv1V6fK4YBGBwySF7PeZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GNQx9b6CTveUjK4FjSo3mkL3nzdHt2LxENeaq5iBicDp3C2LDWQXBj2o2xA1aKZBfnuuZngG4jqnDH4eFHgSYdF",
  "key1": "uNenQ8eFWjRErSFGcSwS4H56hCE8oYJrroqV9hTn2xmtH318NsxwsNmcPf1T8HuWWrh2oTgMQPE7UWVdsvv1wjz",
  "key2": "3ZcKVjpzqnbfx4rPfyukt8U5s9GwjPmaj5WH6kr8H7zi7TMa7XaknPBHxM7Jf5MNvruvyULUQ4tn9LkhJWNByvkm",
  "key3": "4MjUBZQ9rn9qGTjNvspxKegymJAAE31JA9c3gpAAM8zAfiA8M2HVbkhqxyc8rCDkANfiTf3oJSwwCj9HLWcFYvjt",
  "key4": "WLp1uNwNDN3kfyGRZYQbzj8XUSfuY2E34mfoWKHPdtknT8UtYPBCP3m9woEPyZe5BDsvBGZ8VsrC61JGN85NXW8",
  "key5": "4Jfz7riE73M8Eo5SL7bWj1aZn2YrZPUBL6dQnPZnKFLFV1TdLMF8ET6L8bbvC1zVtiaPzd9CHeFPcrsP1cFHpqaR",
  "key6": "4TWKUJ8J9cFxrboBkvszHdRj7RnTgovGkDYTbFMg67mBbJDxBvea5qiaBJBqUVK1eUeVwUFS2Pyf5uCSSeXSfkvi",
  "key7": "3hbduEYvsjvPHMmw9Ww3hDnKmzyL4Zc2vFAWitP9gTi85bd3eKty5BcdD23rm2VrXkRnCLTcpAzy3Gd7XApYJuKj",
  "key8": "5Fx8ePqpwvFejzrDFFNHgfWVmSAUByv99dwopdm4u1RV8AZRNZdMxkpYn7kCuGUaobtzykBcYUb8pvyatxFm2sa9",
  "key9": "4hHowA3GFB7fSp9krrbjmPe47En9bHJ1xdN8vvsT4yP2b39sJoaP99ux6L2C36qFrFSFmeHr1xf26JXh8AJifSG9",
  "key10": "3h9s3FKExP4VrjsizPPoV3geLDpbDerEgiggLP2jBZQkwYsysa2HUJfiPVnC6rPvp8urYHzjx2EpJSo61sUTf1Ch",
  "key11": "4x7GUjQJJvAPxFy8icmdeJdNLQpL5XZC375KA2URzZSLRWUVQaHhAA2cSS4ggrW7Dx5BSPCYEm4XdSm7uuGNpSSR",
  "key12": "5ShqG1Y51kd2p6EzqcEBtuP2Y3qF1fDqNoFcZJfsJ6K9Z6yH8YHudrAoKNisaswmTxa1DickXpSxZpLvgyG76hmn",
  "key13": "5yDUpAHWzpRJ1iWKW4hGRBaHig9mNpQxwjSuDjmBnpYaacQk1vL9netpd33wLjFu6RNWPHPZKBbwPWmV1NHeKdM3",
  "key14": "3j1XWj33v5smiyAHoKWqJ4bGB6eNPSjCByvRnWDPmmLLc6xwbkXGs3oryMS5qk4Nw1fHiLugt4MTVaXw4yHZAECo",
  "key15": "3oQQSAMyicT9kbT42qRcxAnzAyyzRLPc59qng6nBDxd8bxq5TzrYhvc1H6mBZpvDMoh6aHXYwEu49DcPU2MLtJdN",
  "key16": "2CxPGAySrxFbmhaL4YpbpmXhSpFuLpuFUcv6rX3Zqpa2n6igkivf6ffnXeq65TScgbAeiN8XgSuwSDoFjJk2hxLt",
  "key17": "CmeUJ6wxRu2dLn17aJA25ifxtzJ5ErZpjBCEydoT1cRxjkxNyQKB5PUsNtced2Fpa8YZg94NAhncRzrxqv5QRsa",
  "key18": "67LXZyqGR9zwF537vK3TUGp8htnAjMZB3zpkhSVTwPdX83GnWCEUdtP6umVfSnoaAWt43CMtbYBi9ZHD1apR7Nfx",
  "key19": "mWF2bzA59KZdizWZfF3rUJFZeVCBWFBAyfCTEYwNCu2wSz6SECYroyWJ3sHJ4JoQrKy5KhQ5xXZ4U7Jo8aiLjVD",
  "key20": "2aay3gwZ2sfSmA581nHNEGJscUdMkTr1sffNdx1r9fztz1gorQy6TdDXSDqbkgEvwgqWGNKPVRHtHDUxkURbEqZ1",
  "key21": "2pQatBpFuBgdKBwcANtSTmWnajyTn125eLAU1FBweofrA3XVWnBshFEMKw6KkXeyB8KjpqZVUWrMPbu9B7V6FqBB",
  "key22": "2mHo4DwxyeDTQJDfuNMBaddhxXP2FF347p6jSjkKbpUTpHv9JL2swfnYYLan7KEsrsA4bXxGuqfPkdtXBkev5whm",
  "key23": "gTrekpNVcvE57qKFSLGhTg8bxYb4NNj6bYYn9Ry2FgS5YxFyUWq3b5ntQo8twCyekxQ5HQrjoQUE5wMV7Ey3eT5",
  "key24": "E16iesB3e8AUufE2CS5UJTbmNYVaz8xiwu9dpMvm4n3ugGp9zGsobBbjXDNNcz545timpfVsAS7whRx55ncJ2UH",
  "key25": "58L9irewnMWLxggJpqjKLuco2hke4C2WdYT4jbwfPMpYxyfsn3tkc81sW9BVUifoh1w5erEUtL6p49AU3cPPFbBk",
  "key26": "5RkqpwAHZbWgRtgx7SzvwWi1j8FK9Y2QFp5JGFnnFq7p1xNg3jvPVYPvkEMURZyopSZXhnfd78twrc7m3mAN6sTb",
  "key27": "5vfNj5KVizrKRWnARXZkG3gCZtmET7NYB1XwyN3bdNdXB5zpkNuSqK9v3jE44ca29tjWn5YaCvjeJ1uDyUdeExzK",
  "key28": "5E9BxjFWqWf84SRsjqaARCJshBTDnEUzwSWo8M5P4a4dRDXMfHJJ9ZN1aHXn24BQpoSnkvztizVBc8B4kdet3ZC",
  "key29": "2vheHe8uNkhvPSaBT8X7jdq46S1LuQSx7p8UU8ahTVBM5YaDANTaaR5KMqJ7SFUaWM23PGPRqcQ7kaFnyC6sEpke",
  "key30": "4u4CG8T1gMaw1Te5GXjU3X9KY4W4zYKQXa2ivFH7z2ytHoTyKFiUAaSoLhWeDSqZXDhbN61vjwWn9X5HHuK96CPq",
  "key31": "yZuF1r4G73sVuApFBmkypJJ5UFj2sXPQiX7HJSY9xvwj4UMeLdSw4Z3ZACL6QV6xfR4Xus5FScEkEUhgxmLziDf",
  "key32": "4jKNu4mZK8kXrYcdqra8Uk1qEQaAKekXH8ShZ3g1Tdjmt2vFAuEmE9tL6y1guZtPUY4hyVeQy8SyX9K3SGk7EetU",
  "key33": "3ptTcBxff9u5duW1FTtFVcZ6czCPnEzrT4mEadSCiqW9oFaisgipgoVKzVuqsS2xNRtD97PuJYh6xqthbHi5CFGb",
  "key34": "3TC752HuYAfGFnMbiFpfxHGCR7EkR56JEHf8zv5fvcnNAQCswwVGizYJud1rYn1ErTx5VoshsQWmiAgNopavSqXK",
  "key35": "4NBe8uUJ3teL1cxAF9sW5Myx3nU6NH76SiZMv4u9aZhsMBaMd7EJQDWmS7jbSYUnEWRbea9UMFLKmwfjFpfwuo2N",
  "key36": "4y3hzF5pgfqKkhwCvUJDF4RPoHN6zszum3pj1the5mxjPQmxKxAukejf4x36rhPEaWTCaUdQKtokiDL3ziA1iwCd",
  "key37": "5f3WMpqQPyCQMEx2dqhwax7YCqUjKSdjowbeET63cqhmWRS3UFM5JA9qW7s4vqvsePCQ43TwYq8Z5gvyX7HS9nhe",
  "key38": "myVc2SQ4gdSWzPqrC5LoX481M6WY5XiYRqprzL7L6uL9fHNP4RugmV651aAMDq9tFRmBhG1ZdfFYebxsUsD333j",
  "key39": "4HNH72WUHG2Yb7Lum9pCAu9NwYnL9VBUauF4BWEnWMHxWanZWXqqkWr3gHPCc3WN38pGELFi4AXvZoD97LPqWXFK",
  "key40": "38PkUygnJsd2uPKAnqR4Q8DQ8hLvBviYY4zdXRPDGjsFnSjDSFnefvWdLPgc6RVA9MhPdpqWbxZfDoLSqzWMEsar",
  "key41": "3569FapM9yBpwEYP5JBSbUmd2qkd1rRFyb3USU1LwS215n4FTHVHgxU3uqrX9bgu1Mr2N5Cg6njD7FK8rt2aysTq",
  "key42": "5mhtHvTZfYvcpi8PmzgGCQkSQmtUoGvwJeMLq9UzrGu66AUbinyBxPkF2FS8kkLTE7qVdWJSzPo2mL1yyapjzVnC",
  "key43": "62hEP2W6jWQzu6VdEoeqsEggow6fLJLiNGi6Y3R7hxpHFzHoZf3HyLSBb3pdaX72GzZs3393AECyHfrH1Cz2hz4Y",
  "key44": "hkWZU3JegqQe9ZQHY1GsoL6rqLdzkgUj1bvWuFbyZY1n9hRG8ZCbgTVYwLB8LuwnuAsmHUrSSoCHQ9BM6xn3CNS",
  "key45": "sQQ1ygsie9j1a8u18PrbxsbhA5jRQB5jM1twj3EU5QfscMWVJRTFP7ZUGi27MV4Zx3WTyE82CVxyAYCFtYWVtfh",
  "key46": "3YS1JLzNDQz7YZhgioxqKBc4Lxn6iqiV2BRDKiRcHf7uLpPR6a3FvRZNxFXrLvoGVQ7qFKoiw1R7D3d2wwnRqEmz",
  "key47": "hYpejwxaShXVrxTAYYudtWcJ6JF6PDSWLfJmV2eR7ZDErrnMbixdb6pDDbkJ2XRjfW4vNS4Eh1buWnya1egUX7p",
  "key48": "4po6Xpu9TKGzzQ2vJKpAvs5QbQHWxgFHLdrhx6jUChvqGSrZbrnHpvwgeezC3QUKvWucEmog2AWj4iuGvTWE55Kn"
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
