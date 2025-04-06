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
    "3ovaaYSTkBs33fJEqN21hdZi9ZmHTSU8AsVbNqouuA1H4edHdwjV4SmrtGbx4m62YsHWLH3En8kf8Z9aoEu1b4Wm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R9rjRHe2R3B8QuqSZD1VyGG3qXDmiubrLZk9AeFMMJY332KFYV7U8CdU86CCCMavaa25gKu7GWwUrstiavzu8EN",
  "key1": "43FicUBaY7YReVM3nGFK6A4NXVArd3n6nGSP5QbXxzcRJLdnYPXzTMyc6vLVxkXueT3LAzp72hx1vcZL9BpoZu27",
  "key2": "5PfiQGGjirYGTvR8wqwkXCSWmB5RrPTFZyTc5sTkChwre11WuhVC6uMHHAThhF9xsigZiMaqSfttGQRPnkrhE45d",
  "key3": "38gzeMstTSifXuxtV8nR3o3tiQMMLDJMJqcCJrWoswVSQYcZWRwSaT8vQ6WZ1e68Zrded7fjcVc5yT2GWHYtKny4",
  "key4": "29uRokKjoU6ZJpWQCEwBqh33M1yT2364PQZY1vbNYxKUm3oUT8nbz1KcGMyK1NhFyj14p3AA6BBMjPfiKWrz71n1",
  "key5": "3CnZxddRqLj1EQ96ePzkqJdMmTgxaLenEExEr1eJi5qUYmCFD3uQrWHNp7Xru48ZysRVK9gkg8TVfLVyvDdCuXYM",
  "key6": "43c15yhu6rgxjqcD1bE1xp3Psvg1tyCa42tasdG7CZYMiFM1KcNWEpGWRWdF8FYbvX99F2qcQ3UPfypAdWmAxRam",
  "key7": "5HZwLL8YwTYWafes8AMbMHgzizfWj3ndmTXHopPd2fEutb4ASdM7uaoqeVLY4nAuvpnpdAubvuJPjD2svvWkSJxz",
  "key8": "4gzo9hJgyRDExSkvNJhBkxYn3zStaqpRWawKMuHZc9H1f6bL9sz5kcjocu6QrGPLSai9pDoVaMm4csu7VVfoseSx",
  "key9": "45qW4DVz4bGiP5LRzbAH8d6BBADmSMgjBR68exLxewuk3mo65REK44Sxv3gki1p5nXPnyGFYMiucVmMLDNtLxHnH",
  "key10": "55yiXntZD8DxGme3v73e4XyuEkhHUY852UE5uhKf1gPqW8qRB64BhSFCTFjLhRFRrNtx1f75HqjCMHebSA4onpM5",
  "key11": "4FLbDGRU6MdwVc3qA5dDfwHdyouVphET3AErj8xNktMp25KbceQZba3zrfi1u956mdePwcjxhgQrhyMhmktxH2KZ",
  "key12": "436pfPfBLth82MmQpXSPsyNDe2ADyFZkP8akzSAkvyqFs1UrnZZsViJHgWh5geQxGttgLaHKCqA3u1Z6K4SBq2FG",
  "key13": "2Ai7dHnSwDErPjohCXMEXBAeTzE3BAHZqQTFrm3jvjHV52FcDP46MibqJvy32rBpvUphCMPsae3Ki6n6ixbRuJU",
  "key14": "2HqNtzySRzWgfQDbycBea5YkMN1jU1DUWJj2DrqTF6S5oDbCJgwvSoHQ8uCHkrmbzGkuBb9pyHyfJpbbsAhUShTb",
  "key15": "2SKSPexVAgbynfeAckGYfJPq4wdt4pu5AJWKe8EeCU5PKcAZiSrbL3RQiMqr2Cy3HDNhCM7tCxyCTNpCbMHpyMdt",
  "key16": "sDMdR4hVAdy8f3vEfvqRuVFYJNTcVQUGAwZgbJfVptmvMdsmMbZ1oAwNXGxyhGG2d5ZkqfVuYGjRW7t7hYs2Hpy",
  "key17": "2MgJyXtqXEDA5Ss5r4muDMEWXuxZdFDsz2Nto8KJUQXVtVJ9yNHoAEfy23FtHu7LaeLJgENQCiq2y3psz1RFqHrW",
  "key18": "sPipB2SPG72sfq5ZqWfpoPYwTKdBjgwtvqXbyCMUkC4MwCWDX9FqyW2knSYaiViZptvXDaESZHjarddWcuQU7Do",
  "key19": "5Z5gXf2nb8EQ15SdHZB2w3nXDJmzaG1ynCs2ZDfV2vRZ28md21naJ5ktLnfwXoTQz3kDRJGhLsDsd7m7QYEj1t6G",
  "key20": "3XnEFG4JCxt5RAwT6aLuThiR8D1v6WRUwPMwSbNX6WEfuUxzCf7VKEhChrPUnSSHokvP3yZQyBTTGyA8vc1mihAP",
  "key21": "2c5CK7zLgD2vweymUQA7XLmV6aicd11nPgi7N23hdEiYfecdWH9qLcPeyeurJfyKQpRRhDudcYSQjxvb9FiKbomn",
  "key22": "5nkvU321yJaCKyk7VQizDSetf2SsD4kLRfm7PY7b8n77XN8MbBNDreUt5fj5A6UfQCE1vs4FPZXU8D9zjgfdMjUi",
  "key23": "yY6Yf5SsJpkAuhXYj2wtV1jL1MYEtdM33waLh9WPiYccJXxUE2U2MAnch72SZpqJU6QW3wPhjyfrypNnoV3yTjN",
  "key24": "AqhYe7iPEfUuiLWmrNefv64DVVhLxYZfYJ8Vh9A5axhSd4QAJBrvEk1RrXxZ4vNoSJL935Pa8pgZvrscK2u597R",
  "key25": "3wHcKFDVBPBzB93pD4FSyiRCesbgHKZ2Gt8XB4fRTnEPy6JCK8e6QsuCc1MQw4G9m9c9dLkCGkbhd1ZsQfDhCEcz",
  "key26": "5b2jCVLnAUst7PiVM34viys1KiozHoiYqZUjttD4KagEiXwTag9F36agC279u3kgyYoct6u4Cu3T6i5WyoTwDPJW",
  "key27": "4QbUMhkvNfJH45rTrLbUTZXD2UErjeXBKR4qingGm1Gvio6ChB17NZUwxUv2op62ApKTjXab1b6heERFTpvkMq2T",
  "key28": "4cKVjbakenyXTiKQJWW82XniLcTxL5CZsb98CZ1jx8BaPWWaqzMiNUenYj7YQgAB3G3dzTDbCDUdE8hke157KzE7",
  "key29": "2pAfRMbqkVKrBj4ZGT18rh1aAqgfozsVBrDNFr3GV9komRzQgoewdmm4L9RdvaBb2VtSuj3txqrL9R6Yz9Hkxui6",
  "key30": "ycXBHcQTRrBSFn5tmmGYnA9f6ffGVog5yJHhKHpohokEbKfSgQ1oBs627m9nSUHQ48QMWrTrvyfRqDyhXyRs24z",
  "key31": "3JcfhyU71wGiiLokNz7FMsarL5TnbNuXaS7YrHQDHPt7vKzAq8Y1LhZtKnqQEnkgQZrMHrnZrhzJmaBkN9jErXjQ",
  "key32": "YfevYRbbGJWUsYxb6LRKRU6Ms6HaEY6dArQXhkQyHhhPdfgM5Vqc6GRGBdU38vquqN3acSA7Hmr3E1L1iF3Zdoo",
  "key33": "5hh67MpvtwqpXhnwN16yRaoAgjR4tbv7uZWAGc3KpnZ3v6Tt3ciif8qy7qzaNp7PxiNAcgmgdCRMfvXtJpGVqJf6",
  "key34": "5o35ENE1T8Cb4fBFPps3jxpqtPnieL3HgbD6UgUfmAmbxDD3mkHz3DyXGaBWNnH8ffsZr2cQUzV5BrmYnK7jLt91",
  "key35": "3fFbq8GaHo2a2Wj5zoER6d671ximyjxPEZqQ5Uks2uVtLtNC5bhCzAvLXkh1DiRD3KX6fX5JjorXC4YXotWCw35M",
  "key36": "2SK3PHZQQWYx7Cex1vLqDGTjVS7iXrm1FKVYron85a6YKGbrXFzWxH6GYPMVWrKsdP1VrJWkQJhMyju9vaQzHk7T",
  "key37": "5AAx1djTtxAvyrzvYmMYtaJc4wU8ARn7Pn5aAvWyQVUn9QcNG4epGw2smnFbwtemWVudjgeHh2Uf1T8w1PdRuP47",
  "key38": "4idQ4TpknMTvfKEC3R5DhjU9q74HRtMpQFHBgSQ1x8JShi9A1KdtUMkUvQWuPjQk4xJs3buMYCRdqqap49c1kYWf",
  "key39": "4XnGrYfPq39oWgZaJ9vweq5VRMzXMTYpCBwru5KyXNpMcxYkp9WWnzWiqA4wJbZRGgnAaqzZJipGEESsTzCExvF4",
  "key40": "kFsbMwNxNBY6EdbsLAidJT8NSb8KY8MJjLfy5Yb8RyNJ78fQQhYB6FsqHW6LKQj3NXSjszGH4579D84hAMd45Eo",
  "key41": "2335rkVJTN97DyBXVLTG286Q818QbHe73XiWQiF2KLq5xcwXHfFyFTdDHNqQNiJPF6SFVtqkroguxtVijLKVLMxE",
  "key42": "26B46Sq5MKb13ExmwrhhLVeh9PaF8jmdWedwJtBDEdziRm9K8zwPfovjVQJ475em3J81wBKbcJsLF15ig2cpxUFm",
  "key43": "4a8dYrQcEe5eevGHYaAo9y1B2FuECEJDV4jcYApNyb4oXUPooVuxdeKnzesBsQ8B28JrKpUPrXT5knwCnGr6REKS",
  "key44": "9xRZHF7X7pTDC4jyYJxQxDbm3w8st6QJVoepZ2oiVQvK7vSojKQSe3wFhu1dLXGFLVH9PpTbPNvKWnMyDpx3wRs",
  "key45": "66QKaqYJR76t8yyWWLss892Skhk925VJfwXpBwnU3PxjF8BAHowSXW2o8aDnKdRTpKqhy829wB1k44Wkx3TYSiQE",
  "key46": "482ytF6JQm9FBTEr5wVnhL7zjU5qNj3Hp1bowAhHjpz8E8CyrvAusZrejTf5v9KnUqySu1wMxsk5ZcQSwKhLkBRR",
  "key47": "55YHgwzk9zydpphWLtAyCpJ8UTZMkHYUWsrsk3USePm6u6jbTGUvCS22tG3u9vznm2KeSP8gAdFdBCXK9tA3izfG",
  "key48": "2qKQa8bQshw5vCRFy6MzJAQoNBvghUYmhRY8MjnGbsHiAEvammRGHEXizNjuxS6iSczzvT7E3WV9igXoAh47ktwF",
  "key49": "5AFgz487hn7t1GiBc54NKj6oQNtJQ51QUSneuD6GDQwf8CXnZojhhAFdtYCMxFMGTBgdbyfuuZUG9C4rhqyL9dZY"
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
