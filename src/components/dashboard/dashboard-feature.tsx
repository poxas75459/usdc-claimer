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
    "2Ezu3CeF4iwoAvJDv3FGRMPsZu5H2BGRo2YMLj9HEywUbympouqagQXKueB337jHzeLzao7S5Xs9GomtqFhxU84V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rg8yimvWoEHm7LhE7DxZqnwH8vJwDQUj9LcWeSNxnz8BNSBysxuVwReqLMxnQ9GS81kQwUAtXEC8UfjycGmHT8N",
  "key1": "4d3rpoMcMfpTnSSraGsp1PWpuTL1fpgEmcc3dH16ES54sfjytcJnKicbQHuy162WMAikHMAe5oK2QTxcwjsUMYEv",
  "key2": "5yrqqz5zFpc5wRqatx44LqYR3EyShUiRCgZ4fyQ6yDMt9sMGHLSvaubSiKV9Wx14xTcvKgzfkL1rqg54ipaBkdsr",
  "key3": "Es7XHjezNG8NtyA8AR1rvHjgTCBRmATozKEyevQNpiKWjW2PBYj2nnV1EzsL5YCewb8rQmFMgKZKy2bANqciZTW",
  "key4": "3YBLjTj7Au7ZHhJXx3CEWkxchmZvGQfe2kMVf5ZUCyEgZqeSLk7fbFVYLsx6VzTPM62o7BiET2riVuxNPRTTCzSd",
  "key5": "5Wc6GPRzZDs9a8SwGC3NGzGhTy5g2XkeDqNUaim3JKakkzvAZZSTfTWW9y5npC7HN36PBYMQaUGMqSet7V1oesWg",
  "key6": "4Kmouvf5FVoe21kXB9VtX8kmm13AvXCkQWe8udf3Lr2q4ojF63KuytNr4dtfd4MxaBkpzCUELQMbESseLAAEMiZL",
  "key7": "2xPjNswLfTSkNGzuynq12fFXbRFLhbKzUqTkA6iuKi6AWXU9JhUgVxjLs29kyvoZ6KaRsBChojni2PSpip1vGuGv",
  "key8": "4EXGXcbhbJcCNRrcd715c9thL89V3RTBckGqCgKsz2cEhwpr34DoCvsa1SaXNpmLc5RKD6Yh5MyKR9R7Qy7gDW1q",
  "key9": "5kajz3cdp3WrFJZNPmY5j8wFkHPwe4psVvNgnBbeUrpsyPnbTty8RQzisRKeieiNdEc3jYztPbj6wUgvvQzyjtgf",
  "key10": "4tNthThzSD1VJHQCXR2S4jKkP7YJL9BfrxkTeaJAEB8P8afkWLVkGjypCA13J72dNagA1MXLM9vwXeJAKkfPpN8C",
  "key11": "5vviKQT2mUy8Sek2JWJo5Xjd1CL1YXQvC32uYftz2K7BnxerfEKtZMd4gG4LetVnfyVzWYayKizeRS33VZu5ouAb",
  "key12": "2tvNviJMvNGSN44xZ9URe6RJ9r5chpAwS3KLAX7EvZasPa1dSEodMDj9jgpd13N6JxLvvnwCh9Dn5YyYkvDwqYpw",
  "key13": "3RVa1Ttfd6u8V4i5VT6qatHhJdrX44bT1EhEh1hhhKKfS1UGXFtgztnWsL1UjA15AmcyFtdaHRkZgUE3w7MXs9J9",
  "key14": "2ZfVhJji9XfHk7GUw5ZhVzsjEPswFyjeTMazi6H13AeHKeHm9762f4YDW4bjyfjh5D9MrymbnyT5M9JyYer6pvZK",
  "key15": "2n9qUqTZX3sc1rCCxVeaPYbkxDJCJREpFGMpGEnxdvU1VPwyrveFQuHRt96gDefjHM5zLg6pqb1TKHnjJEFbKmRn",
  "key16": "53XsZ69MBduCjVVF7oRSyrnRPpbA21p1yqXvx9nDhG8vWoBNSDFVA2fGpcH8JGz1PmpDRVtv8HsqDTkvCC4DaYF7",
  "key17": "4Ms4jMH6FQztjQLSSiSKHQ9Wrzjof3eBbSizWJXn1nMuTzwBe2C6EqGTYfZwZPqQFT7NCeTzKgTzihaHaitZ2CqH",
  "key18": "4rN8HA2gJAu9L6RobZXgUv3pnyHDUcTaWS5ogEKVNEBD9UBYa94jJKG9eJyFf2ezVaecTzgUfuotSwtucd2XHrZh",
  "key19": "4PoZUrBsRr2Sej1An1ZJLsHnpr6Cr65H9CyYBNZnfFzhPBUjkAwRzkWFUjcYHXaaTvpLaeNjryNyZyoPwgCvJkMS",
  "key20": "4MrJgTUJcC92HCQJwAWpuXAMTGz8FFSGMWvFbmBGdjwA9iSnofYMg4gMVzypXjU8E15c1WTCQBah2SLfodpzMcMV",
  "key21": "4S98sa7vvF8hoatE5Xa6zGpx7s3igNTPcjK3h6p2xDBmwY1doGWVaLqfoQBs7bLC7sPS7H7LDVuAhLufpfWef4p1",
  "key22": "3sZa7fc3rSh2B5rw9adQJBZUDRmSY8ZiCk2WFmVzWUNbnwHnwMDymWPosxE56z4yHhkVvE1ysMYmpqWHLpvFvgcu",
  "key23": "2UuMvr2tFi118tQ75GKsB7efbvwixLMjhVAbJCopKbZ3BqpfZ4hnmVXHnvGu3WC1QQ1xe3EDiCw7Wkyo1A4KifVw",
  "key24": "4QkvPZJ5JuAie8osxP34XSfHEGPLN2RL28A29H99wGn1bsAdabJtXGtQdyuxTXEdbG5tyabU7nRvaeuRgxEDFSof",
  "key25": "3DBmFvZW6TJ1Wu14wAohCUbB82qchM7QuBQDPCqMMqJazvxvmSS2aFr6DnbWvjoVcAMarwJx7Dsp5SiG1YdcpLvC",
  "key26": "5pfsdA2zRn89ZnttiV6cGiXLqGcHFvN13C7SjiWoxJA7LjPp6ygikGUnRtCV41aFCEapXGseWw9rAbwZ5rgySBfR",
  "key27": "5euao1UdgHfCrm7NwrAYVmwMjVzD5H4MQJwVE5N6e8dGGkKMaQoUev4H8Sc5UbtKtPjsV4CbspWtWGkTvFjTHfp8",
  "key28": "3VRrQQJwJCV4kVRKHaeFjKoWhD1hd9UzSP4BD74t4dpV814WSbihzhL3jnzEGf8mEAJga3biL2arACJUBdibWd7s",
  "key29": "5HHMct5CBrXoi5U5Dv21R5ycaDZNTNBacta6i55bPDscwGrGZkAa2jvS1JEYGDv2B4XyJeDoPyQY1NQxPqjshC3p",
  "key30": "1SBqYJonyJTWtiVWjP5R2RbF8UGYizMAovdxD22EEt6vBX9HYuN2SWy8o2bVGr27332CXyxbP4b9uvadfYJXYat",
  "key31": "4TZ8LBrUDgrGxTL38HYwtvkioHUc4Y4d2u6aQ25sZJPM3Zdu9MhbB96mX5YpG66zAhifURZKc7B2MSv7gCUnV8UJ",
  "key32": "41H7u48EtgrepGCV6a7wq91rVmaQ4NuxTDNdGu4ySGszC2gNd2SK9ZTf6igNRohqs1Cooh874t25sTCjD7sgkAAE",
  "key33": "3XjJYPbRnhEbKNnDATRfwW1qDacqSAVLgi46bK4mjGXbDPyYNPzbDzbA4hPAguPFbXhNvFWr8dC1BnEA1MDr9kcJ",
  "key34": "47DDuXmBssr7ihYMUQfZ2pWunKhh5EQmw39Yx6kwAwnaHdNdjnX9xKzcc9T5pjmrgyk85vPEHUJJo86uPoLr4oLo",
  "key35": "5w6YZzm43CcpT62reuRTP9tqQBCkPiu6FMrHoaYasfcrGAc9cksTAq1vdGGBgpqtSt2dAkTauNC9xb9VmtYQmRPs",
  "key36": "2avmdDwcpSAhuhnEgVnEYz26qTwSttC5GejPysQG43Q6ZAeGsXbC9u6LENuWK5FfaPjSRr3vNLa7tR8xBNZrTdxv",
  "key37": "2HyWupCuJiiE8FW26Dth3B6aiz3xitYwMNMU5Qy5DLkBuGf5u8nKdpakmENkWuDfwfEzBGXFfZAND1CydgkA1Rt6",
  "key38": "4jvD9gPoa3eE1njPni2WYd9a6uApxUJ6WxP4QtD87JKSyfe6fuu1SwSxRnkU1n4rcDN9XERxzrLKcd5CXzJkQGUi",
  "key39": "5Q5XyM8YVRe6EMjyMvErEiKF7XeFChEsR9ricPbxio6q4fqCUt6dXFyrR2TGCZ7GNqWK4itUP8sUCX2p8tz1AE7n",
  "key40": "3fti2Mh7Zr37xjKdCoaXkXNoE8KeFab6t4pfLYXAArovgoB57tLuqizrjhn7u1LbbwK7ZPUqXf5CgD8R6kvqpeti",
  "key41": "2rCeRqwjFUqb1HmPgSQeUt6xmEYY4snAgyLc6SHZU5NNK1hz3eRAMLBqmaAqkgZicn7RSG29iLVzpCuacPzg8998",
  "key42": "2xXWRJPYuqqWTXhxhok6W7sWeZQn5K5CRwcxzAaKShgmTa2CX1CXqQT8G5vXQoBUuwJhbkkE1cu5LAd6xaDNb9yB",
  "key43": "5x1EoyKboTepKQQMCBQnJ8runrjZz8XX9CREFiG3125cdzioGisDmjsCc7vHfgNHRXTQrVYWznAWcPc4jEXdPpE2",
  "key44": "4c34GkQfrhmvi5YuUqH2dk3LTzuCeLgxzd2cQG89Hg9dbBXPvWdG6FBsTNfbYwhvpGXsAybhHDLk6E1YjQwEcpU6",
  "key45": "5cAZSyMD1zY72BEqztn2eEJq6P692bANndyPMmyZbpNWLLVcV8muhSrubynVwg5QLuUUZ7Td4u1eimbZjc6LigrW",
  "key46": "2E6k4jj3KkYyDhLbmgxWDEtrYCT26bMvBn77UX7w7b3D61PFSiCr7DrXwAYN3N9MPxDa16CCMtY1QzNcztnDXfAi",
  "key47": "rE2UcykqovB6yvdufbXgn8pAGnEWahEjmDNfMdgBpUR7eiA3LEbvCEdgTUQKSAwX7QZ8fM7aktn9DFzADLk5hGK",
  "key48": "4cpT1Q8kJb6PhHhXqXzoxYEJF8YrKowL9aSv8JP7NdBabykHCzj3fnaZszZ4PrU9RYjWxJDw97fDNU9GBgEDTjbF"
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
