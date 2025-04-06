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
    "2JkwJecLsN4faapL4WocKYYheokH7sXS4ZQnPX9smESfZbrBsskAAJkw4jbFRjSgQ1g1pPC1PyfkimiLCDms1c3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "976SFMyPEJcv5jhyDG8JnekUdfnn8B67GfhoE4iEtjLffGNemXSbtZnThrbUpsU2Ssct7zLpuyUGTyQqaghN4LS",
  "key1": "KZwMWw8aKJW67AuewZ7MoXL1WNKHJNMh4AhA6iczYiymUgYDSRHJdNFcciXrzZLbUrYrcXTw1G5ADKKD6jHphxu",
  "key2": "54Pix59czio53jTWGWDuvanEm5sSisMdifBW2ZQgrjpgDsrxK2qR9btbSPmfEsFeczJgTp7qRwJsgZ9ghXjn3yRk",
  "key3": "2o4Q3w9r9Qd9d1YrEitJMmtXyMUqvbeiL3EaGjg6MfCvYsETzMMQrJwmremxP5HHM7CPUum2VijgdHk36tmZ4wt2",
  "key4": "54FpYuywfibjyiYiDbXDy4tSqA7r8HcgJHf1JYREGRxCJujt7mgWe3ycJNaJXWc25JBNs2FfkudZMkctwYiTPS19",
  "key5": "581oYVUgeXNRHLtvnhRxAGsPrZfmK8ajPNtnTcT4hQkA8Qk1jrAzWP5AfboAZs8SP7PhxQH82SEPTQW4ug6Yc9PU",
  "key6": "2WpibSLa7j75XHSGaqWwh7ME8giLdPJuEzAM8QvqgmgG97DiS1BZi3ZMZb5rR8zcypwiS84SeKYaosWA9c66Tztk",
  "key7": "4s3mQEDG6XehKwVbisHKWrbreyL5WtWSiXCuBHLHr8njJMsxJYsREvbLXcYzK8NP5PAzBaTnAEuRGZjMWMszCWx3",
  "key8": "5rMdXuTnGDk2yAYL4sCVHbdkjHSDyEhueVXeJEpyk5v1wEDZCkq1rfBrqDkxNSQZajdjBwUsSxRPhQzM1AFT55SL",
  "key9": "4r22BGdtErYpskK59pKKb79ouVc24g2571SKGJfNYsFxzU139Vb4ZXQbaocZt4hACFhCanbguV8MLv62wqg54R9j",
  "key10": "WgYEtyS9cdhRDjtxWDviej2smytNPQGBfa2r2qnUq57JtvuHitTUbPvWUWChKvg7rBZTAW3hFFSY48NvRozcxY4",
  "key11": "3QL1Q86pDJm6izfzhZ9BQqo6m7t8v5ZwrpQPjFpydH7kjU14cd6M6GcdhuHdcSbBPpdQ8uwmLbSsJWocA2jyrHQy",
  "key12": "2wJFTb4Bdj89XGJCm9fhP9VssvXyrMmyXiC6a2mbDBYNe2T7BYUajhmnqQ1F17XLz8NLfmR9EkHR2CrZLy6VnxRJ",
  "key13": "DaxhE7BGHD83HNqzdh5w8XnEnq2VR8GuECxSGsjVmn2ZrLKg1exe1am3EzFRoH5uoHzSftbnLybzfnq2KhfoUis",
  "key14": "2YTg22bevWGRB2gs2LXyZeBg7yNRXDeQ243UyUKKq2NBahYmRPdXzcz7F7aU9toC875b7Ws57CMDf8UhFKxZMM6L",
  "key15": "2vWA44vn6bBzexxiTnuchiVyZA3346FvgPffptT4cypyDgfcdmAa3QRVEkoUDGtGJ2wsmDhL6vgLzzrwKAt4XPQh",
  "key16": "5Te5iWR23Xhno46XLwsVXzPFWMVUKN1J9iT1nsc7scapdLu87kkJGpRgmF7xNXAL5wg5sTmAG5PRD3uWdSNDs5Dm",
  "key17": "ZJhow8mEjRNquJdtDBubd8opaJijyydR3vWS8DtBHwxFQNAoyzFGYTJxeJ72sGNQEzRrosoiv5KkWR59NYvebNY",
  "key18": "2s2mrhhXRWAzTazFgvjoWW3nmaQqZi5CEXsBxnG13jEx86ze486ey8tfJnU3VMf2PZH33AJkYxy6kVEjY42JJTcn",
  "key19": "T4v52hiG8Mte7jbdMpZoxKB8NgGsc1LkG5hejPoDPqyiV6vGe3qe7vGiRMMP1C5LqrNm2yFzMAUGuWt3pCFayVh",
  "key20": "4jQ9memaPA7gmwF6VTFkPawMpvFbJsHRKZ85wB1wGxSZTmk3Q8hzDSvs8VRuGx7MzfKppmuypiRXRpFUwokisAxt",
  "key21": "2gkw2n7gbkfWSxoE6XAQtDnaKveGFjg4nEKk1GJK2cztJodpcRcsjw8t8MCZFRSu71qdwgHnf2NAJUjdcJNcxibn",
  "key22": "5UCSiHQMzy8LYR3a7GaapjaEwyRrArNir4BT9SKB7YRT5eABcwjsrh4bBVhaPUgHqCR2hRT2ibkUk19kcYPmG9am",
  "key23": "4NSNWHVS2NKsVG2cGdsHZNkUQiUTXqKgiRK8Hn3JxmLd61NM4h9jLXes848YX6fyqwieu9SDZBJgpi5aZZc7HBU6",
  "key24": "SCpAKf4iqzu9rcYDqtfzv82sWcQDPRAWnxnK7sMuWJ2xFtVX1PqwLv8JrfP8KyVGcAA82hjUXg5K9ztYjyJoua2",
  "key25": "3DeKs2uJ1uKHekCxN1xZc4emxH1N6LUfctgrxtWzaGRjKtzESm7KjHSQmV68KPwwNggKwDwyHG8U8TasbjmpR3CQ",
  "key26": "jQbr32LX62Lbr4Fryhao5smdZZW1cmrS3p5QfBQkHZbAXDHuYkr6AUH4dCepGzHPADXbGnqyranYiXo6oH3WSjy",
  "key27": "4rP3NjHw95d74ELjWBGgbyhR6gsJZAMiZ2ysaB9Lr1mkeGqtparZgdhbiimXeiU5fBUBf35MkUCiGNkhYQw67Via",
  "key28": "52t1GZdChH6XgLQ55b8rCTBzUcuErdQdnq7fc32K4WFREsrMtBq7VJZ3mNckcNgQ4vbrvaN9ZCC2PEktSPQHURKW",
  "key29": "3yvUJjjGBXp55VjPmSdGFXV23ytMhusFuKBNEAnyWBMYTZALCJkFKsD6Wv7yNMkqPZsnVkTffvWBiDhwu9chjYeL",
  "key30": "5GfBGiA32Ci6ozTaJZXk5tnU7DbcLELh7kr16StpG44HXh7HLpNKB2cB8GAgsaPvddwStApXSey2kZBPsQZ31J9M",
  "key31": "25ZiKEZrJbWKn3N9vzuBQKUnqFTJGhmN9YvkDmGfDdk3Gn1zg9abaAom3jDerULjTDp7Hi7Xqw5uPLxUPPdRfGrj",
  "key32": "4xs3dgcL2ztPEdTrDqerjiaNugYSyGde9S5ByDnkxkCC6zhxfMegegMBmM4Rf1QzZphG3zfs5B8voP8F7rSb2pFq",
  "key33": "4j6Br9V9d4UjFVii1uA5fBCDcj8uiYFtyELnj9kwtQKbNLpDzyS3Dbo4XsWydJCuCm9nMqZJBSLH8U29HZs1Gzds",
  "key34": "3ThoQfYicYzqteVEgAafYq9VEgsHzHxjsJ7uJqjKYveiQ5qgfAQFwLJKvhwDWdFtGmkZw7c3W4QDZ9Q53kJvec1Q",
  "key35": "roJ55UK9BiX8ygEPFj3cG8HFzyCftSwDcMJdDfw3y47jH4Ja57cGJA5vkMFAdmZXUxr5G9VuYdX9wJtd1Ag4WFj"
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
