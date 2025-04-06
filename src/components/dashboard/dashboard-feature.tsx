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
    "5wXumzcBfYGBWChGSpiJsbzHUtsh2vRv8mMofcNyFe2Yhi4TRDgE1CBv5jVXEDAvGAkKCvAwWNoxx26yjmP4YNG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vqredaqUc5vfVZTuRwaEChhGsQbPEX8AYi6YKSjZ1mALiyL9A33qVDT27TnZ1RTXq1ha2rdJ8JbzCvCmE8kyYGC",
  "key1": "qwnET225YrshJPsbVE94rATkmCmEHghKagBLyk8y3Rue6ryAXKWN51XULqEy2yKH7TE6Yp9mhrTNYXW7Jh835sp",
  "key2": "2T2y2MU9cdgvNmX3H356op4qVV6YW7ntenxFZjmHmzuttH63wNnMEJe3oDWaLFJ4k1FiijukHf6unRnr6Cw6bPoF",
  "key3": "66M774QK8nAWDv1aJ3aPCYY58EoqkFVBAoPUdgo9oUdRWqc1jEZAxVKUBfHW75jV5QYXqWH9dTsRjgFEAeShKYGM",
  "key4": "35NoCFvDGPP4gVTz5dTTKrNmGJEve6MoHdTmJ4hfXNCuL6ArNoKrmL9aj9aUr4eawHTrE2bjKn64FpSR6aW1J6iL",
  "key5": "38KSDEnfHV5A98NmBENSQAq74VZvNKGtyC9icJX1su7gmxXnj7LXkhTJXmVV47gbGaYzN4ktZC3MoiW9dYJ3CLSG",
  "key6": "58b6hu1KYrxQnoiW8w3Z5sUeVu13NzkG1m6oqxsFmmG9ZvxtHH8iGbgULoaFDnDYDX5pr4ggDd76nrekWVDBa6ig",
  "key7": "4g6RpRphTrHutB9JUjuenFvFKvZCYAwo6i8AJNHZ18v7rrH4iTyvaoS4ZeNhfHRNXKs5qUjkZ4CediTinRT3AvqP",
  "key8": "4H6h8M9Dd6MSLqJx25xusuUe96Zh5wnYMnP2WfJsh3ShAJ7mKT5NaQeP6i4u2dLhQDtzHfdFn5wcwsdjNN3LCqxL",
  "key9": "5M2t6WS3jBJLuiJukWE5s1ghVBLVeSkxCUFuUQBDnq5UiXESRxCPCPGbUHu7bkP5AD2EBbopH6fVtcuEdQxpoaLk",
  "key10": "45LRQGfbVjvnL9KJnnHdoQbB7KMuRwut4gLbvXsGHjZeFUgSLPcKhNoSGEyGMRvtYHtgrS4H238Gj4mRZCoFusA",
  "key11": "RkpZMEfsZpgLWdhqNXm4wC5FS5aY68zVjfYDK2baSfN7NeixkVFrK88cwa7z1UeybLRZxzGELaSNdzSAAFK3ofs",
  "key12": "4iSmwCHs1ARxdEQpcG1cVuvEkh3Td6ULaqbBe4UmmM1TWerw8aTkWyEdHfoLPg3C2zgMVgBHzGYdYtzRd7SRnAtA",
  "key13": "4nVUBmf39wycSpo26GC7bBmqkeA4LyASpEbUrsDgitL99PqwhatAPPwVvihovFwc36GgW1jp2UTgKZR7ZZBwfYJC",
  "key14": "VTNFPqtduDXinEfiLNXUJh45J85K37AEt6HqcMyMHnBgGYDNQMgoZEVmb5iPnk2z7hSnzWnA1nhGVhmnAy6x2ue",
  "key15": "417C4YRR8hGq45Jp5NxACadXB6uzCu7AzDLCJJjFrvbqqgUKig9Cf1zLYXnQWETx1H7zuptnKgWESY79WUjcxCHU",
  "key16": "2X4wBg7agKshK1msJBkRMinxC539fjhzeUQRCHXRJBgDa9XL8z2zXyYnTR3PME5AnTvzeQyRjGwBuStfJ2KgS6A3",
  "key17": "xouqigKNeTBsnvFACs8KLiDCYCocsYjKwy73kdZZNPybbDtGNQXKtFvkabr4iFMizkcbt2K1M1Zi3JcgH57ybNp",
  "key18": "hgYJM5Xdmo7sTTwT3YGzshpyXa7H3f5KtRJGiBnHnGuP3CnLEEQZtsUapCRfUKKBF2R6Zx91bZ97ce8C7XhFrAS",
  "key19": "44KULA1bqEkmbPY3KCtWkQzixNRiRTALpCtyysqmx5stknadnjcLShfVKYwxZt57AwhP4TKBpPcttdHc7s3qsP9s",
  "key20": "5nskD4mqyyWyyi4qFBTGWUtPX3XZxFpGGBLaCjgw8Lf2kQEhLnMu3RjkUmwXGaGfjSaFGNQD3uF9RZ6iELUMtpW3",
  "key21": "3rbcpMPXYB2C2zeXXmfEzxYyQk2hvXRtgMtN7CCmfSiTxwBV7wxWHw2Nbbn1L6Hd3K4sAK4Bi4WLQhU8BCJufZRc",
  "key22": "27ET3UyANvWTHSarSxunAvBuq7SU84NvvLzhFcigF46d7Xoyn8iue64x6jiDPxn8NG3UMVjDRQ1FfkbicgfPidHv",
  "key23": "fJKRkcJEsoNARKkCjS55nsXSfG5wFVJgbG9jnn8rroy6nxE85VpTZr4gLsye4D1z7EmU4n5Vij1tSaAXb9Bb6Wq",
  "key24": "2qqLaGVGAVoFTJpGxhKqqJR6KaH2dSMaPHhRVQzD8r5XA3KWigvGryQRUQZQDWncAK85uCuCti8aVKTuKzMybfT1",
  "key25": "ThAxrJEV4v3L2M7ff86HZpf9y5XhSVCCH7uETryqqaFW7K1Euhkg42KhCK1QnDPwLxQnb6yz9N3y2vCqvAg5UcJ",
  "key26": "25siFaevoEAZrkovy2iCFQ5NvViQq3p7xMjSLAHrD7j4zsCPqendPqprt3R9eS6XRcnWSFkhrHdnPNpTqoHytQfM",
  "key27": "6XcrGgtXGaAhxraoeTTvGpA7vVWCwkUF7SHD5miSNKr3drgjGqPHmNnPxMXAK2QUfeYJfqvnpZDjRXQvAfxWsU1",
  "key28": "SJ1VqJxEokJRmg9kJcTiWVHVZnk4EhQrCN2QzszrqN2dmtsm9va8TKvEQqp7joQtXvmLdJ96C5M7cKvksXgWLxp",
  "key29": "52RmQ8EZJNrEbPWygmM8pjk6iNL7eL7B7R8iLhMSLZpHyFg8J7rEFkkjD7RhJhXgQpnwQGtVQzonuw5SAmAtxiaD",
  "key30": "BJg1SzbVJ7MxZBzqJoCmAF9ouFs8N7g2tzMy5sihDxkHvjPorqE8jZb29XKAFh95kW8igNYCT73KP5xGsYXWuSm",
  "key31": "2qbtQPu1uagp9rvAH436HY7hnLNgeEUZg9czEjwdFPtbmfUGTY9zXGdxCy1iPgJ2Jx2Yg63SgQZ5SFpkQRCstv2A",
  "key32": "57GpK1axmDJEy87iZXoHahnW3cwRpKaRAzXu38e2HFUuW7n3ejHHhnDZCPbpr4n4Kgq2ar4VrR6g6KRWTHtggFmr",
  "key33": "5wq1VjRQZX6vQvch75BdQDnLL8Xhxdoy18S9g75LZZbCHUFqRnWqvUN87hkgA2HHTea6FokDc43Ujm8XFLhK53qa",
  "key34": "4HnzWc4fwQrhHxaQs1uWBrMm78kt5wfrwF5BffMTfrLw3TCqugkAtJC89WqhQf5umcdP1KCiPqATt1zkZhFFag8m",
  "key35": "55XieycaE8zP7R737meVpMQCxYR8bSuYUKGD6VnYeJDdLeVkxQH174y5XVM7dNdhas7u2Wa4wGKH7yQMFLymXgkM",
  "key36": "5wd3YNAYx3gmxRWNvtAu7HS9r6NF2K2tPdYFLQjGFKP8C7B5H7ep3AxUjGDjdg4LeKwJjSkKDtLmn1ZowjqpGrvq",
  "key37": "2mS2Msrp25ftEkhaC6dmLEwF1SbZYJWyT4p9TnjBtnhQQ6Ytdmph8o4zQuXTJ34FKnmFhrnx9BSBwvf3fzudFpm6",
  "key38": "2GrngfBc8kZT3f2RfKUaXfRGjpi2WwWxSk1niTNbAP3QYGubL3thjHcRrzvpwPx8Brzh3mwuXCMRHMhgTt9LLeTU",
  "key39": "2snC6n7vgFdgwM5fL7WDWTBUyxkeXhUWvVf8LdrMpuMTTkgYPD5Uox3nwLA15pVCoB44AMA587hVV863nKWfR6ZE",
  "key40": "RhcEfmxqpqP2WM4VCWVuUzdfivccH8dyyo3gLCVudFEAXN4hu7aJvVjJLy2UU7Vq7EjhTBvdFzYb8q6dGbepbgN",
  "key41": "pjVscdyKPdFev8eaihb9QnW5Mq3RzVYaY1BX6G677Ny4JV6jUzAfTS8brwiq7FTtQmmYJDhLxbu1PmxtRuWBPZm"
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
