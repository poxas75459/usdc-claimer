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
    "27NQCMS4WZeuxPLTYSq4T1weWkdQhyvDnCJQx5jzALoykZxjnH6U4qQ5wCwPJ2T9CVEMJk7c8wzo1aWzXyx8t1h6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DJkWbp9XNxey4Mq6r57x1M8fcE9FPmQfpx7NxQHQ26kjJTsVEUxprYpET3ouMMLMLbdDs7NeLNPEmAkgU1twuqt",
  "key1": "2vwnWek3bXAXTyXTcatvUzumxH1SfxE9ChBWxeiy4tmwsZpGQmjXVMYq99q6LZTqcRHsV376UjLKwzN5ohVeGup5",
  "key2": "3ZZcXsUsw2JbXthPXRVMeUBGwfCbPaKaBEjCapc82NKPZ3ALDn5Cn3EQ5ssmAsjGum1EM6cDdA8psqH3AyX4tM2Q",
  "key3": "22vsAyV51ujTAEwGeBXefaT58rJDqbr7ncGvhzhppSKNJggMiSMcjHdxryNafKL7r2W3jDC63C49EQs5aNRznmUZ",
  "key4": "55JuMr3QxhrZzLU77NCa5LbWLFiEf8Le27XzxuaguSzBxmCbpVpf4SpQ5yJzCUHr22R21Rib7nxwK82TLXrPjjUA",
  "key5": "3fRq1kykdMmmNYMc2PnMYSMSyf7fuYkKyrThadfLYuqbNHafKPHDnHPxV8XEFG9ns2dvgRiiwrG8LssPzXBZyMmg",
  "key6": "32VHFixTmKy2sxKuk4wZe1k81BXsuFa4g5RPwXnkKk3tFVZ6FDs4QBEfzsUh7AEbTCW58XFZTwwh9rfamk7BQZTC",
  "key7": "4Ed5idWpYTTMySQALiU5EJDPciUnjQMzZZAXAaGtTcY6Ed26WJ2SWCCEPddNRYCnRN5vASkPFAufNyuRQjue8Px9",
  "key8": "5UXn1KcugukvsRhsSDcYg9XcNG7RTY9Q1vtXzXZkFmihuHBjskCVmDbDYkSHCuYfFdjqNN5FdsaZVeRPVPPzMSdX",
  "key9": "4XcyaMqdmENdp2qUtsYPMHvdfRpjpc3HkeuAZL24kJnHDvTrwikZqdFeKu3wNoYpLUE4CRun8gdosnF6jgjdhu5Q",
  "key10": "59XKJxFp2tuvnba4g8AFyBrpD33JWETQJsgPQ7LrZafqn8yqZqJwfrbAibbWRZ1UpKpTXpduHR18fKn79RfZDxzt",
  "key11": "4KASyZqrJ1rWrHhwakwGaeyubmV1brP6da5hJEfBySuDZ6pHU1STprAWxi1jYpZ9XG6AqHoMfb2GkQhTJgUmBndH",
  "key12": "2LwMrSwrjY7Q4r8APRusTSRuuHf57Ce2xg5hvnLLkDzKefMzJsQsumviy5KP96VYxxhRYahpVBdUuyWiBjuAHuna",
  "key13": "TaNbmMgos4DyozGaYbyWqDpbDHg5qmiC73xVUpohnr4nAktKQzAb8PkcvtdrdbqjE9EkCo8hg8jGDYiwcpwsPhU",
  "key14": "3nk5cnMBGmoawKjiyCAM29tZpFp52XaDDWVmnFDiwcmhWzLFypQGEd2p2iSNbPcKjQ24YjbNXjNf6hj8aWjW49KN",
  "key15": "ci9N5RUxfnEKvDESdifZnFLMvX51qmSvXq1aXjF7dvY3xhcijKtmbtAqb3RBwGHaG8zkRDV3vrXkzwx4ZLhzBrc",
  "key16": "2W3v8JxwnF1CgFEPZwkWAaepamZtyV9RWzi64dyU1rYsTM9NZp8svQXCaastGKcws5tGRFDGQSbwivXDxuWefunt",
  "key17": "4PFwzkfGPEUJn94Nsq2rLgENs6gpUqCFvvQuC3LxRDuhum8TgX6zSXLX3XpUTxUhJBQpKZqZL9SPkJEd2zhWa1HH",
  "key18": "kK1dkW9VdFyUT93ef8z9gEucDKs7NSkXqXpK2Eiifxh5emzgR7voQBkgJt8wHZdn4g1SgfuacMKuiv8R1WU4gM6",
  "key19": "4Ddm3ttdCCWUNrFjvWk34Z2FcfrF2UWGizreS6ZL5XMMsXugxCi2xULqao8HtSzLnvSZ9T3LqXRMBX8goXicsif6",
  "key20": "5nJPfhDk7uYjviPD3Ec9x3bvxcC3kowcz9mbWxnWRCAHTfdsrLCEu6hzyic8pNxAqW2saYwyzdHWC9goQjRsZFFT",
  "key21": "3QB7x9hDwohv58EaK6EDn3qbkMdtA9tzsd1dfixMLRD5Wkt4WsAT8VGQhor9GyQk19qJYuBmnHu7QhbfxHoenMPc",
  "key22": "zcfRRj9VazrKwt9pmPSUfEybvd4UJaUMamayVGu73V32fdibmgSiJJgNhPxWMuRKe57bePSjpxQu7cvrsyAy5FN",
  "key23": "2X4q7oHbDhw4UA5WEHUWgVVPUEUoSnLfFt8rLctxq6iUMjMMKHE4AnnBGBmjoG1teRsSByaxc9BfX6WHyikq85Zb",
  "key24": "4F3fmhCt5cXoreRd3A6sxzxZHUTSes8HfdZL3F7RdXHNaBgBfcA1mghZSQtZhR7CN7x6GxvVpwrgJucSzWtL8Bk2",
  "key25": "48LHfiLnpK9WSvomSCFE5AwgMLArpsFxioyopC8mPAabFA8FXUadVqJCAqNY1K5Az5N8VVsxk4gQg5ixvKoWD92H",
  "key26": "27coroDyx3QL4W6Tre1uLKaCQgVX3Yx4h9gRpcRJKQ3pLtM98oeEWE9Yaz8827Qz8HH1PEvMKR2yNG45JXR7YGVf",
  "key27": "s7T6vFJja7Tbk4FJPJwYJYNn1vb7uuVgHbtRapUNxMXXaVjD9EbTn5qaJhBZmBfDAJvWT63QZMg17pnJrR1SSph",
  "key28": "5dS1psRXvpFdyQSciscL5kuR1gBPeVUoPdFcXNg3bTe2EnL2yDmtgbmjtoPmDNmCH4jXTwXWeQTvCwBLFtVEjssB",
  "key29": "4FJyxn5cdgTbXPRjgVUG43Vehz4h6zyej6B2uJoz3scWLWWNzFCNiLWb8BBWSqB3uLjNhGMc8o6ha5H3uzaxzFv6",
  "key30": "XM98TY4JRqHi6UDEeVTP46NFuF5kjLqMWZckPHKAL6hB1wH1RujsJL29S1Vg1hbDLocGnQoN64UTmL6f1pULPNh",
  "key31": "4t96Dc5anZJiU9JNKevbh43yeQLBSVmsUsu3CqWo7t2R1QjMWddSxDNpG8sxwd5gUNzaNrRkW91W8d3gQ5MxShdY",
  "key32": "2PGX1tewwNSfz4kuzUyCnJE2FYuAsCkf8Qn1BewNbUE1HxLWNaDszHFWjV1tSPCMqYVuhawMPvikkddXqgvKdhGf",
  "key33": "4sS1ZX7aGKrXK4HFMVMkXJ3RJnUReerwzHq2McAkGbr5kyQ6ondQuNq15N1EBRB7t7Rvc9iQ8xTe6Y11D8uUs4Yr",
  "key34": "4WqJKESkumBuziYGN29u9kFXeQwMuA8GDGBVa89pxUyzZbqZ58YJK9UQMhzesTrTFpwDEBrmhw4NvQpqARGspRa4",
  "key35": "51kG7zAKdQDFZ58XsyjBY111suXYRDqCAhd9dVKWoGy6EFeqSvqReH9xiQC1vLjmf3p5atCEMbuTL1uAqESDzwAH",
  "key36": "5pU3D4oMXoN8UUaS5RByFYPk3egeTnvzN7xWD7uXFcbcD9GfYpYaGu1mUyB5kqRcnAEGFwyax31axwELDQYaZdZG",
  "key37": "2QCdHd6kV2BWK35AqA15YxdoZAGokQbMi3iXqrqxympFeE9HiL1Af58i4vKQM67fYGVZdxYWX26jr1wKuYNSp6Fg",
  "key38": "5evL8KjNBWBQMinTV8TxLPVpS7B84As2VXueZYep3HPmKbdRbL9kjbfHkRXz9E1nZAFshHqCDYzRfkVMqctoWs9k",
  "key39": "2CTcBbBAJrjr2weNoPWUEW9u7YF91Pf8KMA2HF4NYJa7PC7LXhDLeuNidyPjMGZhqFRukSMALC91aPi5oPvd5YEA",
  "key40": "5uYxa2mUH343QhRakaRTjzYCicgca9CScA5tPfb8qBRUKmB5MBbUrKEBTrCjwCESHaKu1mBSwRjGhAmADxTbVRwR",
  "key41": "3uJ9CqRABf51VgMGu5TWvfZ8vVCAKsTZ8N6iL2WKNc1bQdHMDRwxyzZu5Hr7F8jYPt1hPqzkHiv69F6xpoMnmbeh",
  "key42": "3mA4cytcq1zWCRgfoXbG9eYDEKnWVQtDwa2WVKyqqi94eRpwJ76piCuN5VRh4bjMPDsty2zYD2XmCBfqc5tLYvhs",
  "key43": "2H1fFXPDhEahdRsHm7c9CzgxLLFSFjvbTJkhP3L4VWUoPvpHvRC8WjzAc51jkXxuyybDWsn5bZEpF4NdN1fYVFdt",
  "key44": "3T7CsBGXmjmTUxiyBzwTXDRd7PeX6zafGnVGbkELkMGY91533KoTu3E7L9fP4ZVz16tus1w8vmhB6fvW779NnCcw",
  "key45": "5P2ZKufH2Mi7NPrEYD8yYqJBPuAn9bxPAWyKz4WHA6vBRNVTZwyo4qnGdafss1CyBPqgPpdZLwVoBhh78NgKD6Fp",
  "key46": "4eWwByqHE8CFLrdvShG5WkYBqGKjDzfF3u8hJgdmJ287x4XN8i1BK4XLwDKLN6QWbAgarNQE5o4qHQ66e6gJTWLu",
  "key47": "5YyBSWdtUUFJZZTYfFEgVBrmDcbGuqwFNCRVyyZ5cEqCL6NFbZLxmEDRhiLWBzjAFmKwBvGL7roCtqheHZqxB6aa",
  "key48": "5STcUS71SmJLYdwqgJdreVdJxADRUaGk4MptLDYViGc8Nauqr5Re5aYgYuafbY8a2HuoauEUYcbMUqVgLoooRB9z"
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
