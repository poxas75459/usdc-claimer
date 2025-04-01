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
    "4LfYeSdXDN5zRR2YocL6TGpn6BYTKLszYfcxbLdZ5tYNr7WFRiA2iG5BgJJCe1XVbzjhu8vRkse89nNUSD2LcpTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RnSbcmi3fE4caSMChThmEXej5oDTPiAhU5fLJXsfwAetmCbZqvVXrfQyLJUK8mh8qURFFFBFJa3KAiWzpXmQhmg",
  "key1": "ustcQTKJBsLF7ggGTf95UtWbzHe8cyCzwQBQ4iiqZRVuECvmn9iBVtT2Qcjv9Si4ZDony2nVjnvpQsahYHJ7VPL",
  "key2": "2pE16G2fGRMPr4JkFdTAcwki8UxEfAJmCmMUfgWuhFi2RpgxxwSDZHQaeMo4hCB82vMphZMnTXeomygQdmNqRcmJ",
  "key3": "5E2aHnnkxF7fckEiNBBpTRCXaPjdpyXCfYvetrhX7kkhSBXTYX36NvptDHyzKjj9tLQ3Q7D2YP1g5r6sa7rHspTm",
  "key4": "2dYsip9DW9vvsYq6tbKsh8cSaxtPC8oAaDrgXAjqHdrs4pid8rYiZgQEw78ADWMNQ4kJ85n63h1xMxMTbHg5nEmH",
  "key5": "4yXdNRXuUTJcCb6YiDjPNiDTmWuCahEfQFLPRKetHFnVp3ywnD1qc2ifw9andd5m9jZLQNa2QqgcQWoKyZLDeieg",
  "key6": "64wAsfMrNu8PcrwZ9rqyxK46ZPAEw75FgeivoAxLr5XnDGPyhuUzuzgJpCSSiSxDizR3hiRRdeUdkE7Xqmhb2NGY",
  "key7": "5RcwCPfEV5gVs78SbN3iwFgJRTuU8eAPBVYdUFqEGCnKgzxueLfJRwTB8LyHM3261T2jpVKbVoek1eaNs4jMbgbw",
  "key8": "3ebNjB5xE2t86xK1qZ4DeYoApCVRp7nq6eY3HdVdBbWKkNy9V6iJxGWMhtCjuWBcaAaM9HVSFHBKwgozzGZ6stWp",
  "key9": "58yQcxUNgiubUVJrqnvoCM8Q9cPSaQ9wCjCrqvCDjWPbwJtH846GGpCy1Xp2ZxjtSo3ak3NNqP7BU9srYqfMpJWE",
  "key10": "3GfeesAtcJoqjTFNz8Ng81XHGxz9P3yh6Hrh2uq5ZyW3x45QUUYvFZLwja4GFc244qjQNHYXvarxEru86rVQ8T1j",
  "key11": "c4B8uwnmihFfK6Szv33exVA5puYoSH3956M6kogR97q3jH43vMFLiZkJmHDFG2PgLS9n8to8H4d9RipX1wjLxJK",
  "key12": "52oBjSpLtpiXXxrsKdTw5bNeWF583F2eyJMHtd2M7brtmyqVYZqC1rwwSY6rp4HhLGfgGt7FGU234AviMKg8wdA",
  "key13": "3LhhhHApUBzo248ky9SjfboMHm5eukjVcpwgRjnjrCjgDdTeQYJtkt81UNqiHBTiX6tqTYX9QDgdsmaFhVJdcrfV",
  "key14": "5sT4SbQuWaUaF4d5zur2JytiVh2MAu8wnBX6y5MQG1ykm2x8DrdQ1eBzKmEqdrUPgiswU24kMiAKPJo8sm1eexiG",
  "key15": "5qozTwxuWgX6x2bViVvjCegT1RGQCFyyv5aUA7n9N4Z56bVi1s6BmnG1wb8kM3twp2HicpQ2Rxxx7RhBn87bX4wj",
  "key16": "2Coqv9Eg7LRncoFx9TgKLG7FKjbUy8CdPgSvexCfReYievBajumAtW4mc9xMkYuY7QHQFGbqAq2Np7t5Msf6WHcN",
  "key17": "5s8RH6h88Wgj1mjnyYbGTpev9GTnRXWUqF5ufRag9n1a3E7zLGnvJtdMG7X4wBHhT6kdqf9pdnB6Wuqvi453zPva",
  "key18": "ZmrBGmpfSFZKsgwaSUoLK7qED1543RwqyR2ibp6ZeH3vjhTPLitQzD2UFc36YyHcmPJmUV7kkGvrpNhN9YCnR8Y",
  "key19": "2dyRyh6gkEeujdTTfgf8M7e26kRqZ7hXXQ9cFjsh54XoTXSYPzcmmHFUiR4zvoR19A8BjUaAmVC7t9tPDnYw7ALd",
  "key20": "2EYSbCL8BuVjPQRQPQXEQ5BeGLpRpUFkdw8DVLX1XDXewQCyubkiEwanCcXVrVJDHtwET921FeJk1Fp7udPiBtCo",
  "key21": "cpYjMDhi5rTSvLQPqa6RX9UeDr3S6xFfMNRHyEh2mysDJYKeXs6VABCmJKReg5tTpUNLMx82cxAofWFHAYsXnBC",
  "key22": "3RLiU7ecCMJLCeSSKXaxj9KW1UUENcvxEjsuKAjCBKnLxcGMPo46G1oVcyxeLiasNowA2Rv13ojxJyqbxm37ixCE",
  "key23": "44UfUYG4dTTtYC4vBUBGbkvz1paxmBkAKNEfRKXvPpX1ReRK1T1cMw9iS9Gjn8ijrTXYqMNGFVvG3qWsbd2JS5Lv",
  "key24": "2b1GPjkv65AmQYvrTLb5wQB2vwJxDQvdr1mhBvKp2hn9aKzNKTQRiBAFGAhJURTAr931NsiGFzQ9RtRvDQdkGz6a",
  "key25": "DbrmHMeY8ALXLmFEm7W1oAQXWADjePGtZCm1mQiHR3LF2ufUX8bMg36Y63eaQoAdThECK8k6iyf612H4qFDB9R9",
  "key26": "rLm46bjWjES7itiGXzAdc5oEZtY7EVGZArvkRNvp9bLDN3Y3Nm4AgFaEuP9CGkRiSCU9HjAMVeLKhZL5JEDxgAj",
  "key27": "5DKbbd9b7jtmFfxbb92USXASSkPsrbywQwcjecwLcUDZJVdgwmAjeJo5XrdaLiH5cfL5wtbaCvuc6ufMYPsByJLA",
  "key28": "3Vj8JiymjFq7TcBeGaWWHqBkgWE3vWb7ikV79ReayqVBDrNMggLmK3c7BsxJf24oCzEDcEoVXiTcQNQm2cyHwCVx",
  "key29": "3iJEmrxCTrEF9B1rvg22WLoVqQAWdceex7tHv8uHMJ3pUcabPERUU6dXh7FaDB4nR3WUkoniapSirUEPWWrd7GzW",
  "key30": "u8EVAHYtJRgUoDsUY9UV93PEqkWhKsbnJDyxsBh9P9x1emzgZrLr35T2v96y5QKThU5may7XuFHSoS4EoHjsjUY",
  "key31": "2gkPCKmK5AoKD9EX2QPTr9ScUYqsEfJ4eDRXXPwtmkKBpGsD1QwAPBUyXKHF1MXWFxPMhaDzybKFMpqZXnyt93i3",
  "key32": "4TKdQmcFoQ1Bh1NFJ63X4CpCm2nevLNKU4U8KQDiWg3CiPF2f6fqHnEKQfvZjxw1JFhW8Zev9vuE9gqvgC1WuLSb",
  "key33": "gGmKeX2A3GSUJ1fvh84mJ1wxYop5w6aacPydSTE5TtcXy23ykkHFka43cPas6hsn12egRXLspyiVv6FJsz4jC2m",
  "key34": "2i8oAry5FuHF6jx81ojWJWZzfgZCSa6AyWLBzhEHDt8zZyhgmzxmxUfEsyYQGkvoyUzSQJVLB8PGpf98wLTR4gVy",
  "key35": "3UTVPPk8fPNnSKyxe4MLsC9RGaydZymwFtMngwvrmBcRDerBDWycPE1iogk698niR1yPiw3QEA3em374KRWszto7",
  "key36": "4wuGkJFjyiKYAiMYu2TgRPTMnkaxuDwcK99ZrnJEkKjCt24p6LHiRNyK13yqCDicDvrL1WofNUPvAQJRS7F1UnbG",
  "key37": "5aDuQGEUJBN4HLnPdb5JwdpkcdsDLKj2CtMfcUiUaijymXviEw5UBiq8ahBUipunBjvo4uev2neEQZ6UKATDadQ7",
  "key38": "5LMx8avp2Lh5UECeE69JYYjWTbEd397mYi5oUeQdRfUXjPz7D43DLny9sf4otcv4WPFdALfAAaG1BxErLCMzJExL",
  "key39": "4iKLp3SPHtLP3RsWi1niyassdhu2wcaKXAJsip2BQ3sQ1XKhJZVxsyBLQBQWhn4WM48kqAt5E5F3H2Ho7HKKfW5A",
  "key40": "2xhwLMmiXAg2gpMTYyV59zMom3jtX2PWQqE5zgMT1UwFKbxcveaM6LugojcEF3LGHDU5rvezqYipaEgDrB8euetn",
  "key41": "59hXgBSdYnDL2JBSeHZdAcNAcpBw3SpRuM6QWfxsKq4XQEQ62KDn1qMaGVxbQ7ksRcXwW4rGL3BC8V2mjPQPNEuk",
  "key42": "xwLqHfjczjHhvyCBXfjLtU4i8rPoG95d79bSLc5b8exeHYrALgXdE19Jk2UpYGdvyATNuXmXAAaNbU4MYv4zgd3",
  "key43": "4PQmBSCx8yo3GEABfKgiYFnHSxSVqHgBVRMbeLaXKwisHxQ5phb4orQ8QuqYPjiBTcuUq6ZbmrodYsBax49vzwVC",
  "key44": "2GCxgCZxVFVQnMSyc1Lcan2ECvXbo7mgeEkuxcgWHjZDCz8YXj4uxQ3P9AYA3QNxrh2hu3aGzCj6q26tp7YQBmLM",
  "key45": "3NQvQ7QH3ytP5NYxwLph9eCoTcPidunHK4JYeTdLcurbAdY8Sq6Y7eoFAU3wGb3Zj7EeNwnYD8T69NbBtHy7v26z",
  "key46": "4sJTZU4UN9EGb9sn1cN8Kx62uZQomyJpBovHhmuapYW5AeBdWuqQxsuvAKq6PaNjPfvP5VkS2h4LFd1FUXCT1hJ8",
  "key47": "5CwrJjhE7DEuwa1eosqmxmkbuYZuNE2W9oVSEb4qQ6xQnNJXSuiDuKcssmJyaYGv9B8mf6uUMu3BpYHHX8BsZARX",
  "key48": "435PDzS9rmNJxgaTwjKjKE1ELkoUyfw8WKQHamMvvG5M7QC5jKAvjgdmKqpXf4geDTXM9QErMVvzYSBAaRvMkkDj",
  "key49": "2byW7zmvoHZ3pa1c7n48dxVeA8EMs86kAHtZ57P2t1UiKC8LmysYArAVCNgNrDKwfrc7v66VzAutzBUsGf1uUk8S"
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
