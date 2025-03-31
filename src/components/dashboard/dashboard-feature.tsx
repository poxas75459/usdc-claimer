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
    "aRYDxA16T51ERgG6SJb3euznMV7QUcMYsKEfgpT5pVTsQdo5JMQmUSjkqF37vfkL2v5kKFxEnHLg7VoQdFgrwHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e8Wt3kJz5qkBP8GaPpHz6iYF4r167k5aE246efVvfYexvg3LYvmSF76Z6qu5mmpXAXXFKH4Jy7cQcxw4Sf7Sp22",
  "key1": "2FcrovxbMmeSSPHQUvsgjryxq4rJ5Bu9TYuadi2qVaPk4tEgXrW14pXYo7Vyv2wK4bsQmkMfdPaQqKtNsPXBNz9x",
  "key2": "5oUhqPtzvvmNJW5q58LxPyQ6oppLTiheahwxJUPth5WK2NaGNoifBFHTjDQRyQ1iAkfwjMzn4TswAU6cAVA9PsT6",
  "key3": "5ztZC7agAgHt7Ci8sRF6MkYaXrpKy3JuGhf5HY6NsERhhFn9pDkDqPQfdaMptgn9mLbGYaueARGubZMjY3hD8ge5",
  "key4": "5qGPKhNYfoVTVuCC52zLJ5vERkXjtGH6KwP6odP5RcYuDBVQ2KK1uRXebwK4Ek7pxFR3WE39i2nFLgJFzL2Hkpgd",
  "key5": "6Fe4hM9BsyXC5jHHkptwCrau8ZiFBwEEwWLfe7wL76H1rCK4S9Gu5hP5YhZ9L7XtXLMc3Uvj4hjb8TFoSNw3hd2",
  "key6": "ovm3EDjvzUBe6s6PixFJsTKCDFCgGqQ13J5wkSPazMC6LFuJDXFACMVLkNjwDHnHhJjPiz5LMzhzygxVft4J9ji",
  "key7": "xyBBXAgEW4nLQt3z8zYk8CYpisn6GbU2wBwfZhgMZRLoeDoEHBKgNTeduhjeapXSfmhNoH9Tjh7d86LdHv2pwJd",
  "key8": "2E3sKSmHwbrUV6aakqTK9oKt8rQFiafMsZmFHJis76hFdhVetfrHfF2Dosqwm2t9f4Xe5iSRvxyFZDUqSymJBuhU",
  "key9": "4cNNMQC6H3wBEshjSpyZEygbAG5PRs3ej36rQZWDu61hqhCQJ9W9QcKCBNfTnQGoGKHVcZHfGh1s3nbYbMf1Cavm",
  "key10": "63UFgxwuJKFZyqE5XFnWzoHDLrDjJAdXDjA2wUFY8QgBm8JZu9YSeUgBMZ8R6JrWbLxZsFsMdokVwAt2RmoAvk1j",
  "key11": "2Qpy4wU33NnxWPRehFiB8bJcDfs8m9hAPoagp9ug5jLYgFr7EkP2aoF4h58NHAZxVsKTpwzAbFWrMho42SLni9Gy",
  "key12": "dEZExhT9nV3vt7gikxSo3tTEcTbGB1smY7wBarLt9o6ujsGA1SjnP7tP58pPNW5TkKMEfo9AE4NNFpVJomPAzkP",
  "key13": "5rn18K8nEX5GYvZH51fpEMGNqmu1jB8oNjSfbLG6oz5bSj7mTfDwbYrh96V8poPaA7fFXoUx1wsMuUgrR23amETh",
  "key14": "24fapNYP85f77w2oEayPJ2WWkXAUvHbr2cVbRxW56bwEusz13QT9MCRH9DD7rCBwFswa9LT42kC8kHFbWCRGVtuk",
  "key15": "4Zyr5xrxs5U3UHwcZyTYHwpjEpC9okHB8YgoHnxV7i5LrWN3kfonBz96cDN4Jjn2muwwCiYsNSpgxLyYbJovM62t",
  "key16": "2NUmk8HB8g2tWwAJd2h7yqbYN8UPWy18hYGvJcE7Qy5TL46rGXvoQ9JJ2FCnHrYaJnLwcYnvbhCuHj7Gj7VutQTU",
  "key17": "5WvnzDqYiFY6Gys6RSATFgTCFSdd5cGHAcj7ZEDFXHXpFYYwtKGsx9LT6Dz1GJ1yjv84XmUwQDotxdarMP8jaebz",
  "key18": "4yJjE9CGojjRXnuNVZvy5WXYV2wSGX5TGduFrdGVssn2iAhf85gXF3u2mRVLyzRAccQPydnCJaaeysAWpfik5Msq",
  "key19": "fRi2uHh3ELrQxMAZV4K5BEsTUEkRTxqzvZMZ7B6DhbbyeKX2WaMyA1GUaF1vy1RLo1kxGcCJAYFiYnUDfBt8VX1",
  "key20": "5sQApXno3ibsaMX13j9ujfXEf7mGeeJWhaR44uYieM4hyQKhqxti61DT2EqedpdrXxSgdVhWCh2Mco6nbQE4Y2dm",
  "key21": "3ayuE5eVkKC2jxvyCW6zCjxtP78TdPV5H2b7NgBFMuikkauQ23hRXjRhtM9uZ3buYifbumzMPCqAcx3opdpBEhu3",
  "key22": "5n7uqH4wPFQ7go3onrAkB3ip2b7mCURyYENgK3Xzvt7n8EC9JBi3QegTdBRNe88X3w6285Rb7dzkJTYMRiThjXHb",
  "key23": "2mM8b2XBHFu9FidzLxnf1VQZsKc2A1NkSWXiBtaEsiTSny81dNgqP1BBQfMi7caB6LHARbPjTByri4sP8hwL3YNS",
  "key24": "5aLQdZ2gpD5cw5w2XVaR3e56u4RQNfK9FgkwSbeZVVeUshdjfQQcSG91SuzME8JuikrkJbCPFFQ7nd5iPuvSP2fM",
  "key25": "Tst7ZfijsAEncTU8gfYL9tWt9eFaggyWzo4Jmcp8XH1yukkktVEhbr69qsm4sTetuHkRXzzCViMjZ39aXag1aiL",
  "key26": "3KpWx9bvZKbR2rup5EbKY5SeRaMLyjdmcDwegx3aHDYb6L2wDPGmjScFWb84XtyV8sZCuD7WREKbTiwa1RPdCK78",
  "key27": "3GNJwVMowWMz3vrLkDad6LVQ4XZb1KMMNSsdCpCHeiq2ExReMLU5i8MNksQqpTJT63Ww1kjuNEjDCkq8C7jTHBMN",
  "key28": "3rTQquUsqnD5EGx6dmQcP9cWNPTB1C7Vx3uBdRxNkViMRDvDsYhbNwbsYo7BADR1rXYAg73gQFgCgDikpBrCRMzF",
  "key29": "4z5B2iqnv1nrcHraAfuLkqSfc6VU1zCVHbHeQU8NUP24tdKXe3Hja2FtCx5MWYsKybduyUKEaf1wfNTAca6VW1bS",
  "key30": "yfUHjUywLKTS3r7WWFYqSQVgd2YYwdFpYsZZyQCH1gtrQnhUaYFWdfPHE9VrsQPE4XCbk49N74wbN84UEwrmJXR",
  "key31": "58hECZZNZRD1sD3KyPMSGQKKgZsGJu4ab8qwEtnRDAGUmpLVrhQKtktJsnfHQMeWPtPjvMHhkSDtWVKUPfi7cAxE",
  "key32": "3MRWU4D2qVpTVYwaQCPELR7LDJS6GVnhtdEzLwzsuYPWZMH7LjJzpopYbBduBYxk8MHmNm8EMZWEZ4NGWiNwZ2uz",
  "key33": "3UUHVHNqmg7Ai4f78PG9XXrjiLrF15K49tx4a26n8nUBfFSdBbCFsFLnQp1ezqW8mwGsQcRrpZtuemo8sdsuFogF",
  "key34": "rDT2bgFXVyzqtuW6znvr3EV3ZBiCpRy4ZG9Y4wxDQr4BZXFSd4qWhe8uanQ3gzGSUbfRmhE1KJNNHXTAD3Zymyd",
  "key35": "5LUDQmx3g6ks4m3MfRSPp82FKJjGjeqD5LS1VBCr5MaBwN5Br5Z5f4Kp6A22rPsA7M6MN2x1R8V6yjzfygdTd8N9",
  "key36": "e5srEwgGvLkacCGpGAMen99r5rZautAgDb2zvdcmtRXjdaGT1c3vQxCap5L9etr9eJNcr33HVrHwjspr8He1kNG",
  "key37": "4gctG8po27GwvqM5pesgPjB5H1881vheS9vpesdsMqSHg1awnheq8NJwkQe5DfaWvsGcoy8RnCvLi4nQjwVdUnc9",
  "key38": "5zxFDYJLkJ97gEXLVJFSVDRyygckpy2c2vqBkKUSamXmVSxGQAaXX4u8rKVNcsAUf1sWj3TXMnmPQNKmDf4sQWt6",
  "key39": "57VxUopYDULbxX1Uc9vHrR8MgP2uuUBdsFcNcr3JK1GdZCnjcpWQ1zgwScJJRq8tHEHTiLtVFwaSPEwoE3T2VYAU",
  "key40": "3Dzqi9j8CJtLZ2nToP9kRTQzijMTAtpDEPJgvQeaH5grReFfzWsgFVqmFzktRmuTdoB8GbFnU8KHWTw54R27CFfR",
  "key41": "5d7MRRsiKUkWEFCygQejV5mmrpNF1tZwGjDju9aQzBBQE8ReCttV35R9BLDhH1tUN56WiXAPVUypRccAozk8vYiH",
  "key42": "3s7UuRYg9tHfj4KMbZwtbGANosFPWrWH9KcypXgrdGXyL7MFgXkGiukVmiwcneo8FtcRkr26wTaZD31N2vJZCCkJ",
  "key43": "3q4ZW6eqcTuzkBxSVYgvEgaC25AxXJLAb2iAZY9w9bxJN9wpfqNQdkqjvoBrkSm9inwxbgYTugHbYS1YBzx72G2s",
  "key44": "JAgwsu48aoZyR7xqSJtQEFCG6EfdhWMskxwTMpGFZhiVYp6DFjVdsZ119f4cpXHA9VPfVbw7xrBR43rnqSWK3SJ",
  "key45": "5fahe9DDFX5CXDkZTABGvhvJcKDZ6sbwXJUnj2kaHc4ENkFiJDB75snz9i4g6viUUNEYqTntgGb5tBg8e1ctMzoh",
  "key46": "5RnSiaFgbGvNg4miq7hHBUNRbEDPymGkjJYwXwdZ9s7PKBA5qNuR2c219wxKH1Hx66Qc5UfzRq2fjdKkFMQX697d",
  "key47": "4wjPpt1dEp9NR5D3cnSJyv87K4mVCnoS5TqP4Qwr4A1vcRRyY5oYLbQsa9wHaa7s5pMzsp5jst7kaFSK24p3Z9We",
  "key48": "2mCJE7hz12ajoggqM3mcSCiLg1gsJYD4bbT29GVFDQiu7sMMgBKXBiCYEwuKKzz5HMdyA7VEXSX4cEEs7MUEGsqr",
  "key49": "5nmdWHBWynXHvUGaZYCnCbVwx8EkeRAxHRQybQ9xfB8hCYP4vzSwKpVQx4y7PVMrf77Z9n4J9bXk4nUfkFChfwir"
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
