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
    "67TnxTQQY2EGFbpEQknJUBUTCvBaWHutdeEqNeUqQh4d2Fd2UR9YkNFM7RTAiYi6zmxT61qiFuHucbmARt3RYJUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y4brgCz2mKzvYkWC8MQHAj3xqE1Ngu16PYxxa8Y7R3rKzCVxbPaWx5zvqqVHsdsqELuQLNPeeMcWsg5s2Uvu3xQ",
  "key1": "2mmGpXbgxq2EQv1FG2VppE3gQjwePuraXa5QmcYPFKJcBkZ6LaJeiYZKqeFoeRCSssyA7SRqvTmhjfof52eLK3kv",
  "key2": "3p8F3msS8p2ihe29E76xcg5njABwiWFUyDuUgSCQ6GAbMkuXbo4zoEPpBV2xScrus5gpcchxpFDTCWAdUnt8gYo4",
  "key3": "UqSUwHaeZYGY89grtRuYd14yJ8Lcz3TfB9MA7D3FgrWL7dVR4BL14Z8kYGuNG7xKaRqc6DQbwcXMmj7kQo5dMo7",
  "key4": "om9h7mLPuRnHkzwhC3EuqceZhM7D856vZqaCwo1vDKd3jiZrPohLR1JGE6DMcUKcH9petnKAJkvWfmrSk7gX7cJ",
  "key5": "4ofzqfDExzmUKhDNJ9s78YFr6jbnyLdPH2Fw52o51F1RYKLBffuQtPGhbprWEcM7wRHeh8gdpBSMYK75XacWUneA",
  "key6": "2ZDEhdVTrGNCPqkA1wsoDZf26h3jMAMdgvTPjvLnBqgPQUJAQS5ygYm5mwJEi61GENUYuoBJwvN342Jht141ck14",
  "key7": "5snnWBZgFe3FD9mNXzUTT7JQWCWBLQCQ2Vg6dRiaKytH2jRp2jLKv4jrZkV4KXMciTgdb6JaNWEvHEKb3T3g1cLU",
  "key8": "3o7R2X8ovmBNCRRH9phUDB8CK8cc1aBtsuJUT7Np2qb2NNdWzDgADjHVfPAA4da94mbNsW6P657NjwWKUkF3vKbx",
  "key9": "2DoSL7uvRR9iUvUJaJMxEDHNqsioZdFvSLkgeamzKoUsRyTkN1TTPC3Fj3Qedrkdwmdo4ZrVoi96BL49VyT273hU",
  "key10": "GiwsjZJYwPNgDQGfyVbk5z2RzekNqcG3zNeorGmFwkSp8punAZBhQ5VDs86fKzSwR4QDnTVtvC7QhfdLj5pvFTG",
  "key11": "vAakoAF7Cb6SFuRnUnjxdP99o5h6pRXNyVcPYdHzLwWV7vM5KMvyBdPp1iRYF6QxpXubDaWYc8FUi4Uao6nQSpP",
  "key12": "4bjWp7hLHJd7JhwGj2v2yBt7M67xNUXZrP3FZyiH5wrqhFYszeaDSGMrUZfM3v4rVWD8KqyigUK5a57x7SVXzf9a",
  "key13": "4ns3Dhmk721nabDmdnWqVdZZ1T44D8iqn1vE1KgUQwLPBa8X6RNXf4SzAhaUPyK7BAoLmaWXVko1DvRmfwdYp75e",
  "key14": "5H5jeN3uxUh4rUpEZCRnEx5cAXoFGrzifAgbxPdGkeX8NMJy86uE6eZKcyVWLLFVU8BYzmZVmmpCU9QjfVpyXFvz",
  "key15": "3Vv2GQC4aAwH26DruVb4U3GW1RFF7mtBewzrqBrpKNMF4HbJhgHCUWWwBWSJyJ2ykX3XDGq1g2AHxAg1MeWZdHGv",
  "key16": "hXmGiiYhhWwbrZbD33MaYfCviBjKyuRpor7XPiGiuoCZPeGLpkt29ZG5aAVYbQMQjomsYe4PmwupLK1T94hBsog",
  "key17": "2ryHks6EzS19ws5sn4JVSu4gyLqKdjfpY3r1ivXf2syb5wWF2miKyRn5BpQwrDDwohoLdfVgVpQP4YemCaeKPHA3",
  "key18": "3gSMJhuufPaaKGrCpizj32f8CuSctEzgu7NaksYwnT33uhy4VKpAQuMGj9ncbgFpLMHvRYMefjV7tNjZDn7TRYgw",
  "key19": "4CxvVnty6UvJhHTkvk8ze3zXWfhLzRsSPygL8BZLzYQTVGgzm9cmgigpEjtjaPrDTzidqihKPEpxHiHN7X8GuHDm",
  "key20": "wk7ZobM5ma2fTRMVAa2wVSr96BJp7HXnQ1PCUgx7UD6uXUcofJiP7fkpxUCm8KTZ3t345wWFnL3ZLzhJEi9CC8s",
  "key21": "4Mq18HQqnKdicKSmsYgUTdbXQm3aoa5LHDchh2KmXYW12jpxw8V5MwicfNDU7WpGsWwXtfF6iM2oANDanPhKieNw",
  "key22": "2TbK8aSVhStpQ7243Ev9miiskS4nt6RoPxSW1iiaZi3WCfeo5U1dY8yqhDkcnckik7TWLXzN9yq6jmx5PU4Hc5Ft",
  "key23": "38sZKAPTZkHSKrmGxEe1K9b5F8gpHNzgaFhvs5JKToW8iXR1yyM2HuEUCbwr92LAsstNFnvQMFWgjRrCxy2nbjBG",
  "key24": "23YN1AYM1jLLPGrxDa3wKXZWiNmoLzvuYVTFm4uUE2goCLozYzG2PQdxoFTn9nAe68mxgQmYbi9vknDRz2bYkvJ3",
  "key25": "5eifKKiLUKMB6JkD8jP3HiJUSmS8U4Ck7GvMNaywzbyRnmg986va3qkAv5R7yDEffkg79r11qvqQ5fKGB7DpMNpj",
  "key26": "3NBt41oQ9hMY3jHVTVfeTZx7Acttt98LR8osibUvuEFkWeE2u4gg8SGbedsbh4yiZjybX73F1dS1cFgDipFThE1A",
  "key27": "2pcn2SukErizSpozkQaBYWghyJXW3TD2R5g3o1EssAUFmwcKikcSWVUm962nCoRCWezq778QmDN63USuEnvH5nv4",
  "key28": "3cCQekg4oUbmmwJCKgxX4vSBFR5ffMNXv4ihd5pS3mXv3MnnnCRH1XEYSWKFGbjwVHzRNYuqnYf2RavDJMVZ2KLy",
  "key29": "2i9GEQ57bXipweSewJ6tkLGwMipa5jaig7jcwCd39pejnReVYFxStDvBAAkAMxXcba1ggzKZDgcyQfXKZoAuXbUe",
  "key30": "2GCwGDDRfQHYBKxoThac1xUF6ygGEfh3k6ZBq9713bP4TYnPAXphkFEHozpo8NWBD4fhv2Z3PJszfHBo8AsWz2dJ",
  "key31": "5Fs8ZAMGW1d3b2GSGfxubdmo4e6L3M34pwHHzqgjesra5ZEJfzRETr5Gsa8HcMHQpZXf2QuGx9KWGfNHG3yFPhaU",
  "key32": "5TazxjbZfkaYgfgfV6FTkfdzz7yMgJ3jxKC6vwUU5GFkjEwKDFsQioWxe3f9838iL9JmxdSm32jDCZEdo6t6XQ1s",
  "key33": "4PPfemB4DUYokDZ7RBTR999TGavX3BbLPxSN8BUdK9YbwXnxqS2SMHkjfFGhWuC3aK88y31wJYM3eipPxKv5hCBo",
  "key34": "2iJQhtmJph5u7xsZAHHJmzcWFNYPmbbVtxoPyh8vSezz1bvKqmGZLqHXWHhS1cXzxsXCHLBMdmyRG2wsizLmz79H",
  "key35": "3dpDMb73nf9PAvx2Hj84v2Z77woAS7QMxy3jUzD1DnvqjE4b71cbHf7K3BCSTWDLTUkVexiZu2RfFV3iHoya2ajL",
  "key36": "3hvMFrSxyNdDcvhLUsvdSTL8gnZa2kuLpzhz9y7sFZN6C7T1vwwFKtAvL37v3p3s19ahXEx8UhoVmHo6Wktm3sEn",
  "key37": "ZByP2vBvZd5UDLz254Hhffk2dARAUprWjA8i5HsFaM6gLvtaX3kYPj2XRtw94QYXJLhttT1HXeafoZhwXUVNBcu",
  "key38": "4gDg9Rr5a737C6uH2FVpCxX4NiLUVkRdobrgFZvX2YUgQ285QQEByXHnhuphPpcKCCe33oWHqrVeg9uGgsckMfD2",
  "key39": "4968U8sBdkSSaTSKaaUbnKvv1ZavgKjKsxmb6mueErkKgJZ21k1tF9bnJSEd3wu2GTSvU92TiGd78ZmMv4s8Ff6R",
  "key40": "3nhjJAXRdZbqJvfiYpXRN9TLLaGHovW2xH6GGyRTh8JAnbNhxM7oTAR4hAHnuzWecWjDGevR6kbPefZK22yrCXRm",
  "key41": "3bwuqbXjUovmN9xMG4Ki9dAVtf2Dr9fCZKV8mZrQtsRVXSuEkTrardd5MwTovNx1QFA4k9r5aZtASBcCeYqGd1AV",
  "key42": "35yAM9VZQqwxh7Cokjh9oy9ezoQQu4UVNjjF292yjdVhYpUDuspGpqeDuyNY411EJnawao36JsQzjLM7G5Z9N3sQ",
  "key43": "3RngTw72jvQhDkqcmHGQBxgc8Be6v8SNqLNJqNofHHPwvberGiYjeZnGUpE9TnxqensBNp68eqPkxqCbsJM1fsBZ",
  "key44": "4peD7aPYxgfkQ5GScCj1rwxrAUsJCKnFtL7GPzmPBdHG5umcxST938LVLnt3aNTSJGZoR9FUxxXToSwa441Wx1Ue",
  "key45": "7vddEHi9QZKjszKQUXPrXYQ8sMXxqAFnXmMABQTR8wA364qBpPCjTyDhH8HFy86xs5oQ1HNtK9CEHGrYKa4vJE3",
  "key46": "62FAhbcTBCkjbbb4AQoKiYHJd7qFYqed4E6Fr6UquKpvYGLq5rXoyLLfkjefe3tP3ZYHPnuMjpvdJ1SYbHjejYAK",
  "key47": "4gfJLaCXa544nB1weWVEjG5n6sudAmkJAX8dzauHNAWK9nAacrwzJXGNcYtyyQ6oetZ6pgYLzbsXPSWgicSMGMgN",
  "key48": "647mxGvp8z5NMVuVMSeAuPhw9r8VVmJhYUsgyKDKA8KkuU9Nn2tdt58MGDcEmW5R7AaGR1gPCeaBTw3jnE8cq24z"
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
