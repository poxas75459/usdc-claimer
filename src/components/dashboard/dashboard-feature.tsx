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
    "4T8fEiuEeYFzRzPri6ZoM5Fhe89RpFZrFsJ3dthMizYc4pnzjRriLHQhGkSDWkKLrCaKssBMkT6L1umkeZezCbc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W1Nep4wcHtgBKZQCSF68GkAPWioV4QKJC6JF44qPUCN1CNELZ5vaPWsoWFngAgnccvvzoamLCcU4ZgqMXq7WrqG",
  "key1": "3AbCBcntRJthccuCYgozDWxHN8WG78PuApWfyaG5TRcBgkXWxFoBVF4nWrJcx2Rk5ZFV1XPTH73pZGhyTozZUYK3",
  "key2": "4YxyHhxbKPLuMZua9kyDRzLrkN9Hm9NnU5Pr4S62iDaQfAQoiFniBd3S4WAL2eF1fnGEB5YeHZYgDKdojRwnK7V",
  "key3": "Arf61XcSMbqN9dxiLwzJbGz167cFn8aWk5JBWhpgvn8ngnNz2d9thSzePMvnRyAS8SgzBbQePZhVA1ZzMtknjpt",
  "key4": "5ELBon73nvVhHQQm2bDStXk5qLx2EnjvYpBNkqpjFVhRFxG9HvtrtunKD2XDRp5rRVnGuZz6hpNvYdqLJ9VnTp67",
  "key5": "4w6cEqYhNi3BHBB1efuxQBGd43B82EobSsNTp4c5ufoKzi2Bnsm6QbVZsXJNuRCBFEqHKGgJUA3w7qG2cB3g29ce",
  "key6": "2ZLkpCNg8FNnN7NscatChCwD2bDfG4Apas1xkgmbe98ngGM3dSXW9NEgadmWDupQJRNuuQ9xZd3ztUntwSbCgLjm",
  "key7": "2Enr5hNVpF7ZHnWYvGSpZSePgBXAkazeSsm3R7PLXqMWZFHLauQbAuPTYgmsGL1LcYf9XzXGRNF2xdiR3cfudsBr",
  "key8": "3Jn6C5H4ri3J2JGY3uT2vnfDPLoHjJHByK79fbv5D1gWGFNtvNKjJDawaqdbndeEpZmb9d7tks3JNEukwXWvyZDy",
  "key9": "28bKSz6sJW9jtoiKuDxRPCR9HDjsFZM9FuPPBX7fcrtcfaAAvNBwGbCCWtRT7HXW9s5xGnfkYb29hQYAa4qq8Uhb",
  "key10": "4memDc1LrWpyEfWNszU3jtZKCP1pBcSh3BNRSwoLDZLhzkrv9zcksxXMimkWwEqZ3jCNDnzsdEBF3dFewsv3qzdF",
  "key11": "3c5UVX2eH66eM6yNeQk4hmPN5hXpV8LxjL6equBY461W136tGCAnB4JjXFUd7ah7vLv3j8SKDhSLmDjJHgiQb5FL",
  "key12": "YWWKhUKtFK3wfxcbYLU7kyaKnuoBX3diAHnK4MA55wFjnrvmLaN23kLYgUyhqU276AJE53ZaFQPuqgy6HBTovhP",
  "key13": "5w7edEFAyq9Law6YRyxXF66dUYECdBPDWeUbA15YWYgiiHfxKq6QdUKuHz4rUsWgC1ev9AMdmWC9KMYQLEJX68f7",
  "key14": "3D75CzVHp8dewvfVpHv6ochec6vN1qoQeqhqsNxQbDKZ1wRJZmX3xXvyn8HYsQ5aHXCeBHhSzhRk96HGCDQ9qKT",
  "key15": "3GKzKXjQ6mQhrPXde5GHHnR9QWx6dXBDLMPdjVNWQYLn18YaLziY3tMZaPu8fYaiCkQVSRsvYiPdTjVX24nX9LyX",
  "key16": "Zgp8QY8FR13xsafZ8Spe1GwMnAQEiTgg61uqH1kHewPP1ZmPesvEcWRX1KBDEW5bgUiWyJBuvKJSXLh2MdCmRkL",
  "key17": "5yh6YpQRRDDs6eiCaowCAqCkpbcKKyvKk2PXMp6Gdoifm2A97hdZ7F5ysX2Gv8FKi1x6UF8KZxZejHWajgRcu19Q",
  "key18": "9wL7JRaT8dqA56gr2QWz6Jr17WuJ6JUQS8ASf9X5a4nMn3txH4tvdSosQALQw8ZKAXmonhtPDtec9Yv3Not85qa",
  "key19": "auvLk9ZtJEoq9uhzBeNkyf9NtHZQkWCUzY57XkvX4F3eFn1psqQcztrEfFKnwDEmb7CAReURns83Jb2atm7FuiT",
  "key20": "3k9hT4XeFQHhWJs4ntaAhgeXkPwXTiM6UefC3BdfYFbQ3uBroBXrD8PgqjyWnBysisG4SsL24JaQJBPhsgK4nzUu",
  "key21": "65bVF73mjudf5yFQgSgvhwwsEAFuDP8duqQ9zuN3DLodjKvgoVUrSzERmSyCcrrCGZUdm1tphbt6qNzBgaDzv876",
  "key22": "qYQWmrahfg3Bi5GAPimDEcUEWx3PUEKUwGryanJpzpzFgxKvMChPwn6jN3W8UEXhBuWco6SVC2p8SSVDhDa4D3k",
  "key23": "298xcXbS8sjq1QKYogyGG1h9g8NUqoqjLZ8XQJqNQC9pYw74GkVjuFvYp4sXb7CR3vYWKBmk47wqFMnjhdSFHU4E",
  "key24": "3kfD37Weep1fqgRB6r7z44JDedwkaBbNmR1mv2CDszyJJrsV6RxRwWpMuCE3ghiSPxfekGQ7Hiu5hfEUv2qEQHZh",
  "key25": "44udvC24kDvVwJcBxxZnHq4bjtiHKMJmJzZ2CnTiY6xWcKpcFejSfzB7jTbWtdyNSKgZmVyKk2Gvnz5qeZPUWuTe",
  "key26": "4xr7LcfehYYoTLYHeDdxy9V4jcz6YYj2kwco4uBvHVjFzqZ6bQ9GxkVqf7BtGrjTaE9FWMD4CkjcSAve2H4QCAk1",
  "key27": "593sC1wZ78asRtAWQ5zmootMq7u7Xmbk17EisZHpU7KWE84zuuZNgLNzPrCAwPGWDcxQuFL5nQs4swtHcsQivUYu",
  "key28": "46Fb7et5H36B5TBTuy4r6LzRVnxgKNfFEYjcBX2unZ29d4akpCaQUbvrq2fcMK6Gpn8CecgBuKfu8sGuDTc1nfyC",
  "key29": "56byyRLehQ3iTDymY2NpDAy9U1S2iTvU5fH5QXoh7BjiQX9i3mhivMP8jMBaPqmYvQo2WM2iuYV8SKcsaSHBxLvb",
  "key30": "4xcXLnG3mvgXKNCVaTP3ADrrgJbaQN61TwsErmEk5hsGME2kGGm5uUUU9JTfjyGnGmZF1TK2HF3iBVXCwUBYRfuK",
  "key31": "2scgd11ZDyGQKpkT6pQqg4uT9irG6XJuTJTUpd1QMpCcffuHddb1nAEVHC7HxfCoz3PMsgnkzYbA8X3haEqgZvAi",
  "key32": "UFEVdKyf3AUqLQLvtSDUFvfYywrWaLKjPf3oShNTEMEksBuDRQYPsUdY7NRk6aFXvL5wi8LksSg8EZVNGqFMZGs",
  "key33": "3b1VPYgYQE22ibVqHbeiWMUvte8z5UiJwf5ZuryZMYZcwSGqeUwDtbPPA1FXppNyMY1VcU4htNCcymYAfZ94ZzfJ",
  "key34": "2GGGzJ6BiYsWzLVhSsbxAxb4URPQihGFuT9v7B9YMDkDsvEYTvBZzJGuaA9gNkYTbkpUY8cGVdC6i14BYdkNn6TE",
  "key35": "3MmMkJzRxcbxepiZ7z6ur4L4oqie8TGVPgg3A2ekkgRxnTdpqXBso4SEBWQHgr5HYpUGa81Dpa3aycSfzc6XRtJb",
  "key36": "3RL55WCUJArT46D4xcYQpF2v7cu6pcD8c88s29hNg28daEKFDzXgqVbRdMtxA8JFHrahxsfpth9VdLhuQaUYpGw2",
  "key37": "64LHZxf6Zu32ts9yvpcBDzthrvGgkQDTNQoq5MABpdySjYSxQRwX5ZXrXYZmzBtjWHMUdAV98xhfYaYx96xyCWmN",
  "key38": "rftaix7Y7JsL4PBCVKmQWqhoEcS2RrLoLoFWTfy6AweEPzgPuQT2hE8b17zKL2dqDGLR7HncM3hcDGRv8rM6MYP",
  "key39": "FZCn3v4BAWMtL8bT5dzkrbmedcy9J4z4RaAa34PH5xF4DTdXDWiCXinvFF5VDRWeukMdjViuuTnzfYaMujXWN72",
  "key40": "39osZ3iGxN52vdjJGHZ9Gf5C83DxQ3cwiJkLGZyLLXVhjgrGxzgNRcYDYarbzcftYWgWD17pr72WFCf7Gf4Cdzsu",
  "key41": "3nLVwteYhvLeEoV9G2AB5TUTWBzgaxAQf7MyS3ELzjRMjPs7FA37kBT1sYHHC74BRoEbaTbePiL6TTuEi1H2Konj",
  "key42": "4XAgo6xoktwhdLKEPr5tgvfT7tqio4WgZwfVouJ9E5SaV9et6DjMd1239LUqmS61TRgBzo352WfF7U3RbMghiDUj",
  "key43": "GVZYYy1atDy7k1BRbmmZAMKSVj8wZexMQEhi1fdEnRQc5Y9LmzNwZ6sJTCFKYUTzbFCLVDUREfijdqh17ix3oRa",
  "key44": "2R1yB2Do8tjnXpxNR17p356u8QRzaiv8KKACGJxhPUcbmh5z1Ktuw2Kd8KLjdHjvFZ2XVUwwsFuu4kX2rYPt4MY2",
  "key45": "2YUMoo9TNtYiey2XwHWXxjHycYPMZnDCL47Vhk7y9CkJK1tugv8M7uetLStjHZCEb6qr5fpXXBdEPv2fsKcMqR99",
  "key46": "Zt5NwWPVcV8oXav3C9C7jxqzUbzy5yNNbDUHf1tncPxe9RvbFPAzizKU7gGqJfJ32w3zEj799ydfRAKoA2h19Lk",
  "key47": "5kXs6JBQH1YJX64Brjeh4eyR6KdsJFZQsKnZ1uhCTMCp3dsV7MLHGQCpWvzcmPMQ1SQ1mJwR5X6PqvxEqXoPedsu",
  "key48": "3KUqkj5TXHzxg3RrQ8pZPjwCxpUz2Uiibh2oX7vaJ1oTcYjJ3waqZokPaf2Rdn6FMU7U6cwBdALpsDVRfvGDZXsi",
  "key49": "4Y5GM4QecoJAkjDjWkUhvWLNPNJHcLQN33RdNAAWfPAkUDmqMgbGF1gRi4Cq8ZA9GEwkuPP9Lm9mySZhdagJ9A8W"
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
