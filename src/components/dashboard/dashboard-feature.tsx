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
    "2kbwFTykYEaAoVNtKvENs5TNtM8UsU4nxY1dZm3g7v5eAJG8LbtXFxKfdh2TNLf5HQZYXsHEk87AmBSpJNGPbLJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37dfZJBhNYZk5kJAmAGAy3ckpfgThyRfPy1RrmpzAmHFN5gTDAA8QTdiF4CM7GnW417k97VVJP5jJcrhiwN2t1yq",
  "key1": "4S7TYdFmAA4xmtLLLq9ZzZbZtpKEk8dgyr4tnQb91bY33VhU3UZyUixUaruSsXs5TFugzSVQpkD1mER25b9HuJf5",
  "key2": "3o4aEjnuPfwuwGuvD53f3VAteycx2rxZdrfrzTgLMJxPATQ7vxq51PrtCHxPNa2DSNoNptoyGsLLmhb1Fa4SyZzJ",
  "key3": "M7CTvMoTHwLDq39MfaXDYHQMdQbhKsi5EHCoCHnNKrnC4XvuhT76TE3jjTsjt46Vxs23v8btFhsVdNdSDAJArLZ",
  "key4": "2irdcPjnWqiPnR6txpcToSGHwVE9XwURSFBd8jSmjTBMM1CjPSGTg2tvcQm1uvtNxNozmvvMFCintCJw3xLEN1Yk",
  "key5": "qv2iKt5WpcLUNigqdQgLsfbbVUKyvwqm25nSZHYBPf1SjYSsxgi7XjXnHKoHBker6gRmPN84x1UEvqoARnj2bx7",
  "key6": "3wFw4o4eEwYcXsatUZFnwRnW25bp14SnhypQsxPxsJtHDegydZiQf1ihWj8sgbapmLmcLiF4RNF17J32nyn7XHys",
  "key7": "4kKC8HPkBvG5KgnyFzRyMW4DKqsBhCdBiqB1seVh4CbMsBaCkrGyv6myANJ6DHBqhKpJaRzb3sL21tFvpUmcMADe",
  "key8": "57oNG5bNru9n8KkCUmaYAduedWndeMGEkFG6HE8anf45m7e1HQHtyCcWoy9im2tuUkNNWcnhR2Y21PvLwT7N6fRi",
  "key9": "3tuW5UnbDNFgr2TUfSMrqZPkkFp4vH9n1dsmr3mbPX7JvsK85Gc7kVwCmWGQXMrEx743FDgwDuc9QWnGkk4fEhQS",
  "key10": "42Sf44zoLhA72Y6b1tdjPp9pZMZdnmKdPzPvSd63hmwQgyfV3GxkfpM1RWo6h7HFDBscN6V8wJdzqia1ZkAfVF4V",
  "key11": "66SUnoCh7ptKHEbWZBetWEsnifNysUQBExDsEJs8SZacscGaxknPS5p2HgimaHkFjeTeR9BfgRpDRHQsi3VVC2cJ",
  "key12": "4ajEUDKRDAUf8zpgUnCMyZLKRrSJyc9HEx1nAY4XXgaUm4WtLPCzm62rV9nQcGW4xY8adtBrHPxg5RREARWH1vYs",
  "key13": "41Tgtfn5FNwmun99sFt2JJpZzgb1Hmugj8SBumeGRPrjHsGMSMozzFUbSFsQoyEaNfGjPXytBfZSJhG1Rp6CKPr5",
  "key14": "2pBrhwNekb3t9Cb7t9uTttZ1AyixUPE8tNU1ruSpFDBZ7ytmZ9aMoDRsQTvdRhJnB89t1efjax2PVYbSfDeovueY",
  "key15": "br2hS9TXnJYM6fH1sGcUx5VAaZZY17tJwdhg3bpyi5DkfiQATM2adzou39k7zKedSTqzH989veGrYpbHMhVyoJV",
  "key16": "3obKMak7XbWqPYvjcUkk5c4c5oGGhVCj9JC2qNr3HENGieT7xQK4Xm9jks9LrJUBDiwyv73nuDm4zpUCSXer2Xad",
  "key17": "3J4dTFacLLGzM11DNiFsxLikhYh92sWVaMJNYCsHHp9xi1CP1Pp9oMujHbL6iG1xWDrgxGE9d1bU9mJ233gWQ8N9",
  "key18": "3SZvTAJ2pzB1vBUZduNH4UWLZS7uYVnq8Qh6NDyXwwQaxUkUSmvKQ8SsVncEeptXbkwseVJ3gkhFq1zfjStr6PDe",
  "key19": "2Wa9Q4RjdAVwVHdpRpHhnYzwq8HMRbyRzxSPWyUkBqNC82u4RNSvcN6ui4ioTXVPUbUdnLqMRfijeqyp5h89mtZn",
  "key20": "225neGVLUWPFBDxarh6Z7nJ9GSeKs4E8YsyytqQ1pKCygffECM5QWeuhhY22r5RXGCdokGtJQ5YjupBqSP97Ew2u",
  "key21": "4Ub8EiqHb7Jd71482AqAhJzAk8RaFtUBaDx1SZo7hAcxZt8C2ojksWYnzMsTLNQP85KjJMemFFWmSFtntJug66NR",
  "key22": "39WxNRQEMPdmzCqEgbMKGmjaGeYeSamqdxAMKsqqYCTc7VGKcKoWdQ32UTXT6Yc8yYub896PdPsbZQmTaRd7McJS",
  "key23": "3gZjJuj2erBfyu1RAaikZTohNUm3ne7PwSi9qKvWmG4HZF6JPNWuYYRep1ti3EDmA9MKPAammxQicEuQWhNScV1s",
  "key24": "jSJ4mBqVz3QrAyLeZ86LKo3EuWVY5y1DFGp8KWtCv5ekqhP19ToyWJ3ESGYkATjg6WuVjb63ztTtxTAhSrZNn2C",
  "key25": "3fXoQ93gfVdzVpbJKQAwC1kKr5Wv6UxxQ9s5X33zUcnyAqCSdZGYkVVz4VCPW61haBPcja1urv9T4ZMhPxk1saPd",
  "key26": "j3oUWEu3A3pqQumzGPbosTsMiq6q1g4En8AwTSk1XSJAaMj8FLoJ4gHJFpC6DoeK62YEVqPV4v4hgxjgCSttwHb",
  "key27": "3TCPLymCFxAtvXjV4aMbBBKY2BARGnztPBpBf2XzyzzkjRvVx6pAk8wkU67ZEhEYdJAiYE8aYpjTor1Sg29sWxqQ",
  "key28": "3r6CXtsC4vyMiGMWCtwpemsC1S2hWs6Qr7qaqTotgLTeN3spEdPkt93ht7adSpQyye6L8JEsDyRn4xTtWimiw27R",
  "key29": "4d5HsigtUR5jQbJ5VRaxe4RmagrMm4LK4uf4ZCuvPSBnLdx2w57xg7iGysFBrAYfm9CMQ8XxJsrDDZsAwzCMe8cy",
  "key30": "4tc5D5LzB1YwigDZo4P2YnE5EiNXe7nLPVEha18Q6k4q5aEC2DsJ1EPz4RdvWsvY9zAYK1i81ha4HHw9Szqjen2b",
  "key31": "2Yx7eWwBYPveYrwytDF6Mud8TcBsAxqS9aAcN2gKAHoSohLhgGJjmCFMvZMdDg5wj7ccjfLhKh8XMHkkBKc7JocW",
  "key32": "4yfEcdCsBta1mrTdvE5tXScfFMW72C6FVRinbfxn32qyCizBU5rwZgvAAKX5nVYoipbjvfgXz3jxMw7JDnhPesJC",
  "key33": "38D3oWmqognxPUrbFTYbsQVrCoFFMcDeE9ZJJGw6YCCxGzynLL9PLfMyxtTJ9dfo9o4mpYEULU2fZLsGkhX5oBm2",
  "key34": "52rqaKpXGcdDD3FBFgHaRQtZQakyKe719uvdDZA3JDSozpzVZVxDriDxBrBvUej1QHVYB1iuX9KRdbVHYGo7B43w",
  "key35": "zaAEgJ4RkSVQqSw7am6ghYGQ4EaQTc6mLFSU5CN1GwAA43x7Dx6HFb7n5u9hif9iaFEatxp3uLyaxunnQNDBCoo",
  "key36": "5R7QbAx1qC3CCnA7boVFVvFV18Jn6Pyjy4mTcms79A4jW7tCsc5dBWCm57eCZsGs3kfGdMGiVS5LzycKkGzcVKaq",
  "key37": "upB1wfuVVJSs5HPmLM2noBPctsbzRYGHCyAxzcavzTZ3SqPZLWVf5nmRH9L4FF14BqePgaB9GSYvWaibFs5YEbR",
  "key38": "Kr3zq2a1vk2juqTh9N8gtHVXKoHEUmsvypexkJczyi8E95LLGE9pCK6DePyE66xWzkidvEbugiTktx9eTNYLvKa",
  "key39": "R5xdqJLKSVV6qKeffS9kgVkYMtP6RoLszKLEjhqCuoYAmYMWvt152J19Bi38Qs1JaMxvHhRWaL32MChEmEmZoVd",
  "key40": "Df5kkq4WK417H8rRsgzakYcmEjEEhUSqgEZnqcMYH6ESGbTpZYJAgoD8bbmniGsH7587UYguHedJPqwkYnz7gP6",
  "key41": "5r9xd1qPHLCypr5FLu995NGQDT9zTMyUNQj26b5SXeCSq4R7qVGqVHE236Hwt4FtP9L9RJRaab8WMVCCPUAoRG4N",
  "key42": "3Krh43chmKZSa38m7P14kw25yiaXxLgjKJjoKFMn5AyCTZucpd28WY9ExCgqX7vMaxK5E2Ui4ZgJuZSmKZM1xZ17"
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
