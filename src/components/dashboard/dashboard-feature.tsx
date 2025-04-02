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
    "3wEvYF5oit5xceDZ6nvPCrYnftrnY27UBEQsdDvA6aS6YTSoZpDKqQba5BigsPpmiVfCx5YWK5PjbdP3m1sFy68o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SFcz6fk78YBoQZZa9oLbiv1bbydmy4gBhbApC1h5tE2P1TKbv4nMHSrPHDScDKmkuqqzCBHt5Rv8YXv2aCj18SG",
  "key1": "28zvtz1B133QKmgpZtFonxtBLwn38KCUkvPu9sJaATLH8uXuz6VRDd6CpvWQfY7WYGv5EGY5nLBw9fmmQWLV8MsX",
  "key2": "5NgxUoDgHDrgYDwrB9aCa2SnBBfG7JM6sHs2QGpxyWur7Y67MViL9DbKroyaJcc85FrEBqN3xFU3tGhSsZ4HiETR",
  "key3": "DTKXvYSdukTBnsMXE4uPvcVQFGuyWVX3vXWF9PuVo26ZGrjksWLL9xGp2vUJ3jGD3DWBEmvzDgrAs46coc5NeHw",
  "key4": "5E3JcyXKZBjVEZ1fJtkwdt9BSwvTEDsDkFNL5hLDej2KQ63UgdDhg8YUDBYYQFP3PowRuoU1gWzTrMXWiTpoUMhS",
  "key5": "3uGDRQFp8rwUQna4ojetHVka1pdeYRksfYHu49bGbqF4Do84h49Z8mWj6N5G486Ap9ucWffTf2StLfYBVycqBow",
  "key6": "3JfaSmZV9DVHKUhEygtmTXR4xcBddQswypCFdLDzSbk2gxjD5puGUY28975iEAiRa8sn69s9RKMH38CUNCFQ3qZB",
  "key7": "4t74eRB2Lc5ke1MxB25RhVLENA3W8QszEVta8XFuxQwe1nhxJhnZuU4v5gakbfba6Yn6hmtQCCMMWdFmd3RcbQuQ",
  "key8": "3x4wphJmzkx2VZhNX124YsxcZygMgmYQrxPMZ3kDLWepzFpwDgpuTZcoKzoL56pWq1togGCGkeR6rcw1GRtQsX3g",
  "key9": "5wa4uCXCtEte65AzXpghDuLaPNBhiRYdP9eBmkTXmLNZdVjBpJPfZmm91dPaXwrESNyXvggbkfJBnrei6jMz3NsY",
  "key10": "5K6FkxE638QLJgrhzn9Uw1cNQCX5u1T7o3b5TvTGmDL5Bz5RFAMdTjugAzNnHSSUi1ZdEaQhTd6RVZfyZk6ttYPs",
  "key11": "4rweSPu4JGT6b9Vf6ZwhQw8nzsmrzkkeF8tL2RVzNvazajsoDKrkuyGhKwuMYqp36icTe5Cv3kMHuxtwooHcaP7g",
  "key12": "2LGZjF3HaNXAJ9kzqsCgkLMTE1FAupoRss1gnmZk9Q59w5nDScLNEuzvWkhxKriQ9VqczgAoZZFSGoyWgDJiatrd",
  "key13": "4XzNSLAEXiDiWrKtLqbMERBUWycpPNjYBjUbdANupZnqAooR28d7zX494W3g72RChMuPM9r49Yg6Em6fvpQcCT1h",
  "key14": "42brF1F7GuwDUyjBPyunRLK1qzC6bQWRG37jjkC7W9fujgANfN3rxkDbtQZzD7X2xZvdxMoiHfyoHMMoLh3b13Sr",
  "key15": "4knFUij1RiUKGNxoCHLvS94HQhcHyZbNioHi1r7o4qx1YJwLzdiNJwunLrRicVwXrUYbfdXQ7fmst1Us1QH9J2Nd",
  "key16": "eZDvhMUeAQcsqrpzSif8JKbC9rretp69B7KnV7eFHU5nxU7EAqyd49i1yRBXkxcR1tM4C8jgN82J9vsrqDQEHb2",
  "key17": "3EKYzXe7PCunK2i8BqJVeBwfFhX1DBLvazu9AB9YKSxpJfmPhdLDkiY7tZZoaG9pqZEdi7P7Fx9iLcrr3QQF3WC2",
  "key18": "4HzYGNcK7kHRFUdwP3XUEokgCBFqJatMHHCMMz6YzVSGgWfkyMguogyhcBWGnXTVJrvZLBBg3TcjS1MAeLNZuwEy",
  "key19": "2v5UMmh6jFWbLQPPZ8t6Y9TGX6YcQpygXuRVMxxap2DGnY4rAwJgffZE3JsuUh7oHbuXdGh3W5KqYSrGm8aTZwUR",
  "key20": "2Lpuyq7wNsTn29UHxmRX4QmPQG9SkWo7Lx6zvWVQPxobnz6aAYZs77RY5Yvjtf8R5xoq8SjfT13Urxnmm74MHhtx",
  "key21": "2S1qmGd4A9e1yER1SyiHYipGPKbEJQXBtVt1RbStYXqE3XuJyHdv2ytpZC8binW5x5TNAV2633X6qjk5awBzS8j8",
  "key22": "3mhstvpZeEq1mwu3jHzzrazV6UZXsaZxh8nAERiYFNb72YpdGK3gPn5jsLVcHpbPufTLfiLPLxZxrvAs5F9f4idP",
  "key23": "2nSbcZWRj15G7XEEPFGuYtq8Ei2RnLtGW9caRL9VuMkqZLWCpohBtzS3K6cU2eqHttsZfvXuBqk8M1MXiXTrNYN2",
  "key24": "43mbbYq1ZsRK1N658Z8Gc2KS3djgGmVeW7BjpuHgAYCoJXXbwd92FytQxyXWZCLj4QpTh2nUryuS79zMsssoQ1FX",
  "key25": "4LfmASnNaPvXhj6B76pje27jyX1fXYkqzyVkrHuzRtikMug8btw9ABp1K7Bvy622AxcpLEqj4cidX3YfY2RvouHq",
  "key26": "4qqLZv3Ur2sCoJ4xj8zinLwsFpJCtzi7rkPjfMxhmgPCPQSco968TKV8ESajRwhMcCCxS5s1zc3wi412wzSNBECf",
  "key27": "7jNvUo6vunmnTUrBtQ1GCbEJXm3eh2CTxx5aCxND8wt8hNUR3LTdTtSErc8HwHaMxAGhx8YtnJZhnZPrsgKGbdr",
  "key28": "sQQ4MrAMrPDdoeh9aoy9rdTw7mZbEWzE8pEYCTfQsDyZkrq9h78gL7pzU1fGfy5dgeZUQdVoYQE5Zhs8bzmkxZs",
  "key29": "5oJEDXoJ9oPnvtRmQDfQnhiqmGpKQvWXuAnL5DkYbuHrUwqYd7NHDKPbjUbhhV2MmHaCfcs35xqsBdFeasEppdcx",
  "key30": "39b2754ao3LjvqVevkQrCCxFaEwGDktH1erE4uiSdaJzRPpUdS4WzfKpeCmN5yYmoF4tucSkKfVenwSZ5AicZM3r",
  "key31": "5Ayf2XFzovKqfRxE55qARTHAftzMMP6EsgxNN4TVqPFAhQH1rxNTnbpXJEe2H5ajxaio2D7WpTQwEyEsqBY2EAhF",
  "key32": "NvsgTc7f6b3zSYVHxsCiB9BPb1sAn1HEHxUAXcAnhUJWUAwtm2WBpEZ2j8pRUi9o5Ho7QBYQ4oiWWuEXTbGznZ6",
  "key33": "EUS67mAhFXtPhQYPUoVASru9Dmp98WNsv3em1nTnt3B2jrGtEfPmY2wNF794B2s67KqeEbde4Q8JL4AjBViUqn6",
  "key34": "2gHJJhMX6eAyDZfcBGsSHRCJmn1wdMYbExNs6qTLPb2wcZUEYTfx2eK9a2Lr7mmaKC6xMTzt7N8Ao9NaeMroj93W",
  "key35": "62Hdu6q3T1NotZJuPBTokAQmk2ztDxqL4CGFPnWXvZW6RMPYzHFSq5RGSMdUbzBCNmuR6ddCaeP4HpWXqKZHUt5B",
  "key36": "3eFqjiWYCSGKPgYAgF9rprYaEfxKNpn481qNXLBimGtT7T8f2pVVeKYBpJqr7xFigrB3K4zihKVGVa6W7ZkNrzTf",
  "key37": "uPTxN3HSnwJJiExPDyBk46mQYAAShqoU2qtGkjTQzPtRkvzbPRMboZZD1nxMfe5tAjjuwUEpJ4KL3jUKJ3uePop",
  "key38": "4CLKVdcrjuvGgNLx5py41QD6nFeLGVSHFSaXG13ojcU3GMNBzBBNMw2qqhXrdJWciP7zABbV8QPT13n1UB5yGeeh",
  "key39": "24TSiK73m7hUfiTfx3Sj9texJNCBHfwWPpMCrvQq8DMhNTGm3mLGZLTiCEqzm4Ce5hrz6ik1dqCDYBDZApUqhrhV",
  "key40": "38UsvgFFPkSVC9TKaxsWn8NdHZj9dV5BEHwv41YUQnspNFLm6hRwDxPY6yE36TQGirFr9PohnQ3zUEk61NGfjSpu",
  "key41": "4ZWLUywmPPYpZNSutkkYWZwiMLqo3L4hE8iVSsYUgdaFgntAPxhQzbwbs6enwW1RbHgCLiUr7i8gvxJxCEN3Evg2",
  "key42": "61WYhUcrDeSCGrbyEBeBVkZww6AXjKj75XQv1KtyPqQVv6LdvgLd46SHPgUbSB77LaSsGx8y9cz3aL6ftXttvRUV",
  "key43": "4RheUjjwnYJxHQjaNy7B8rSdNPtJku86G2AZWiaG5YQVdQgN9SzzufRJ7i3nYuxDjAQK3jnYQGxK8eVRTF18bHov",
  "key44": "3KezLvsJF1mPvp5NpMU75xsMGAoZmC4LEFUbd2SQgXhUWa3FvsZUBpQnSU6pVp5nVgQUX4Dto8oDdMP4MDZFiJmx",
  "key45": "43zraSV3vNhv5gFGxn46k9tWVNVmtnAYoCx6FRWftqa6Xe2qBGvDynTE5jgwLYUXwZzXhG1dVdR8uK7raLHsKr7V",
  "key46": "4FytZquRzBaq714XU4KTp5L6AHGAHn8iSAPbtep572Qq2pmKdATqbZ2yxRVhzCxnZ4j3gkjpyPeTFoM8g5zoGP3n",
  "key47": "65bGSwhjAHN3BY6CTbpeaa4hLVAfF4FaxjovyrejD8McZ2pePx1ngBZ5PyiF3fJKg9d9BVAsunJEgcbDYv5AoJxQ"
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
