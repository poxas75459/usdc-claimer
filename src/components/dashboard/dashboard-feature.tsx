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
    "3SEv1EjJYZKzuqDTfFWccBYbFMuWT1JYquQ1YSZwee89yXpLcnhxdASPwKrxccRoU7D9ZQxm448qirTBnnXC5zK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eDjzVZdtgzCkfRzA6PzoPGtJ3mWuaBpBpQKRHof2oirFyALkbbh6hF8YyEKBvwr151Heh9sfnUKjrBznEPqJ9B9",
  "key1": "3yzGQ9W7asa7NrDUS9gjJM8Cn11rW9QUXUvQykWoifphC4U9huaRebMoTNZsDyvDaikbc2AG8dCtTmQDG9oBbVeU",
  "key2": "65ZgtmvDRw65FowWDKiAQsrPbozwc6fF917ogm5ZRDkkpKYRP4LbMds65gqsYrH4DaCwWsy1ey4cPRjN2GFwC87x",
  "key3": "5dci1ar917EfxsBqn15eVTPkFH8DBtBb5pi4Tc7Rku9krKU4MJcdaeUdRqNTr2yfMUUW7Uuw8ywy9veWoHG2fxW2",
  "key4": "5U3UvsrbCavi2LomzoG3vUqewjWcArAKZN5biuZ8UmtcvZ9yye6e1ViLYtdN1zE3zXeiuECxTkzMttdBvJjjMfwy",
  "key5": "5NGJ1PPaLJDySbcePRuMuNLnT3udYnxftSW7TVKZpynnGvxbVAUW2r3ynypepWCWEeEJV34ratBk9pQUoZWDLvWU",
  "key6": "5KXNx3c5NrzVuXXe5gUVNLwDNAhCmzSnVuMuWopkDGG5EMNmTKgmGjaBKRLjukPwY6D4dBYwCcw97huyM7HN5x8T",
  "key7": "2QVcEVnpSsj9v9xQn3R7ywZPfAHjFpetC1hHNnf19DgNKA7PbMzQuFtSa5qNcrG63grAMuxE94sVzo9XQ4soUV2T",
  "key8": "2npUaS5btydR5tLTgJN9mCQGqUgv9NkvVAJEi4vj4ZgDZrSBrmHuy3UACRngiYAtgXHBGnF65WHYfZLDfxeJweRp",
  "key9": "67HVCfpum7gJPUSVWAUmj4NnbQGXJEhhbkNJf8VRgsNzh74GW9Db1WbdCWcfBxuZvoD2W8RjGHRunBckgb9XBjdJ",
  "key10": "3YN3xtPK1ASCw8vnUtJBWLbS8NG2kTHuUaUksGC4GUkuDqSLSDgzhF11gj6Gra5x7tNYMMVyEwBffj9U5ipLtuUg",
  "key11": "384LxA2S35xmG46cbBmWqmj7yXEAjkJvCGP9z64cF8EwbJTc3phdQ7jwfLMSxia9A9djeLK9XhC2BJg1kb632aaA",
  "key12": "3XZGb1eevu9k4oLGubRCfLQX8gTnuRu9vTERDZBwMLJLY5sCSdEtu7HpnEcHfXhyqsQzy4qbDZpcy3J3FgtAnyKZ",
  "key13": "3RtcXhXbPmFBJSj75o3pq2X73z8M7SD4B9kT7RDFSJj9dGsidmLR6nWCQ7tGxnvPW9WZs4WganMwBKetY5Gvxmfr",
  "key14": "2jRssB2V5WSDbfmuD2woFSvhDTYVoBPVyV3d4EuJLBJaDWkqTfSJEiBctXVZ3QNQRDCpxF1AxA3UmyJjDJ7XT4ZM",
  "key15": "bAi37nLu1nUSn8a86w9kwLWpKaZaw2pZtbsEjtDPRXkzJnHUNMi9Zcy35iDjPzMY6WSWpkUob8rHt1qeHdzjva8",
  "key16": "4e75NKUN4Np7bQBH4FMMjeSHBDotKe2TpWVysWmZQRenqLboQkF1cBvP3txz1YjnjTK862xWLqHQVp21irFur71D",
  "key17": "51ryGr3yjcmhDy4v41KerbkRCXtZMgmT2vr8W8zm4DihCbJyqrsd6dMhede1Mf6zAcXTbHtwZPfX5BTQ9AJ8etFK",
  "key18": "5R9dnnE31eDp79YkEkdGnHbKYrYYTzNJyv2PKazguJZwPeVFdDa6xtUwimnJ2qPgKeQQgtQ4MnJmPPoh7kCWgbnj",
  "key19": "5j4UewrKTSjWJAPgpeHc9KT1VU3aF1WQdqcQrpYpgMSWfSaF44K7Wn4eufM9BFCVMSsC4or1wbKvFL8mBTEyspxx",
  "key20": "4LS8Z2AwgpFuMYcfK2diKKzGKU7hT7e3CX3nMvBvjq8pARJ1rsxoYsA3Q7J6A1QiknQMGXfiKttjbEC9Wc5oaeJY",
  "key21": "dfH4zBZmxQG5htgWzFjMnjmv5rjvquXcswazGpYdk5uvNpwPfKoEwTXqAc1A52wcxd4eatBAiPSzQXvU3o8PA78",
  "key22": "2cRpdgKmxT1mq1eQNMxBthdS2ZgWUexK6hnBwYb38gfcjJ452H2oR9dH7reWjRXzkD4Y6fmyvG2SMfc6NCwJsXeB",
  "key23": "41BqB8N48VDiVzJENTTWP1uXFw72GRVFErthFg3S3YN5fZ3jbZ4zz79DeuGcxTP83pBhuNBjYR7GyEZpbcipMpnK",
  "key24": "2uYJ49b6p4v1zLtJxTS8ybDnM19osjR8mLF983TEhJyFVsvUswFnGEksMKFPLP11VMLxhuFTnx2RGWVhiaXbgQUr",
  "key25": "3e8FkakEKKLcXFxpewLG2xmQdC2HUFeJRfYRGDvK8UBuCzGW7gQLmyExN9cqY8o8WcCHJMSq1FnDnMs98Kk9pZQ9",
  "key26": "5QT4hqUmJZJ6WkxxEPdsqeStnkRcPqiTtQXDEkJ8sTHPFsVkMEQNqMv3hqAs6x3GFSWRQaEh5BmixCNHGwkzHUkh",
  "key27": "5sesx9ASSHbxzwpXK1aXbQKMmZTsoZtWU8wRXcZ1nG8nRXBEZt7h58k8B9bkqk5EeJC9i77NNpRPRC3VHYKTAgWA",
  "key28": "4zEzL8wjztSyAFqBWMKLk1eJxH8RJ9A8GiNMYvViUdjdE44dMRyvwqF3J73cCY8FNSutkNPCa1nK8t3AzcrUzyWg",
  "key29": "4DVRxRzVYDxpdJrRXsreGze6v9s1gqEgz2ueVbomfVrQciVruboZNZwyvwU36FF7pHwe5iwvkCUwaLJTUBbbPVqu",
  "key30": "47XKtNFq7Rb1YSZ34ttBHppw8AnsfMoVNEa3viXfUNEafHhW9YKcwRT2PqJnVmxjFVJEN5J59cho2h5WoB296nRm",
  "key31": "2fzCFinJzDef1okbLD7dnUDoDSnWFZEYxxcFKFbARhYLWPtXXQoXV5fYCX8ba9HShEinw8ss4QCju82B57NpEVL2",
  "key32": "2wm3ErFhYqB95BstfA65e6EybkCQdS5TrPuro43BE7jHMfqu2FzsEYoF25nKcTtpr4gXZDVbf4XjrSxQsnLPVLCf",
  "key33": "2gKAeBNhMNyoT2jRUoNaeH1C6gDJZwMYD8ZKWaf22hYJuVqr9XgKAwqZheEr6JvJp2wECVoKABEns1ewQfgvfdoQ",
  "key34": "5PG9omW188oaB5psEFQR6pCYvD9FgiL2prV1cuEdwNKAXfzxhviDGVPJZJkyDsb5SFBuNo5YbE7kEXDDfwr2YtSC",
  "key35": "26a3KgSzqTvyvsox5BmVDdFRV725w5uyRaL6Roi9qTaXosCx36tVhxGry3KR4C6dZsbqtrtMJZHtmdYKm1aAkEzc",
  "key36": "3Fq4d3L2oPKWB2dtZXiPiEUPZrAU3PXCZkdcXoENw9pokFPxqAWwe4dUgo9iTK5UcE4JhNF2pA4V84u51oCAL7SW",
  "key37": "2MERyQ7ftu9WoFqQ92jLweu6Sv67gn1kqPRrDZxDfdTJ2ASVP6zYTfBMrSkq3gc55J8U2K2RqywCZYxSJizwGCGz",
  "key38": "cvCSvD91Z4xmwCN2Pwca2fXipvX5TMFA8ZTj96tZqeFi5mSvvERsC23w9pCwZTxJxEyTR2hPN36qdskfjifBZBm",
  "key39": "5THxrLAVjCigdvaPJ2743nMe5Q7rPTunpP5DTN2iESoHHywn28BaxvqegU5aW8paQzcWm8gGdESUXrF5U9uGqD7j",
  "key40": "5GM8HPV9FqBYk73DE1t1tHAuEikZVSJwALh4NrBaxCdFWMED3YtxY9haWtBRxEX6bGZJ25xDK8xUdK6KzxnRbSEg",
  "key41": "3oDcidr6QsAi24Di1eNNM8cdgjiqebf3XqTCWiJXsCAHBgsFkWKLNvAgp7HXRVv1FutmgzbjiwwkGPVBsfj4AyNs",
  "key42": "5mXC2YLFqGZsY1SZozArYj8AbPwY7LkwyqyAAj5ydoft1VHeQRZrjoZutC3eyYfnET3ifbbSPXNyHzGDzD2kESWz",
  "key43": "5ztPMGX5ZiMrZuGL4r8c4rNXWxDwFEvpYKrGp2vrUPXMhrC8Eo2mdKKfvMcVZHgeSspZ7GZKrMvf9zZF36tj23hq",
  "key44": "u9ZMiTHKpib4rNW4zrrhA8XBQQdnrgPJPaH9fZ1dvZdtyPSrHHnAFkBzK1fk86otERVqSKCBVy4WzmpfUFgRwKf",
  "key45": "4uC1WdutW7nAwdPARhvmERpFCGiqbuUmBazN6C2gNxVkKuVbnVBhifWkGCx43K5rsm2z4vK7zejpZ8fQeMBpa71J"
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
