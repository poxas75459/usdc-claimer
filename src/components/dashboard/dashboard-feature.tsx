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
    "2MLhywyNLgRTw8PxWrqNjsszcv5voWGAqPX8KdrjQXgtxameKvy5kAwhzL8v4XKrCqagqfvdwFRLCZwJzu7crBLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52JBXu9EhXQ4HjvhNa2MXT7bwWmUH376Y9sfBJMDDmoi3TMfyCouNV82QkfqrbnTtHxmjscvwmWuMXjPhzrPz5yS",
  "key1": "5H1C5qfCsJLqyKiCN79Z5ZsHozmvWEVGdNRVxVhDEDGZEaVLyqUxnU5oP1mGyJiAR3WSz6NzD2vY8jupKQLSQiSe",
  "key2": "4u7Jw8GZB1YFqTcJeLkpPnHVVy1Dc9yAQsswutdYtfXkqU3z4T9MynbiFKH5oVQ3LCcxHGt4SL75cxNzvzd44bSY",
  "key3": "5yquVcbPJvUwW28H3kDTswGV2asNrHGZj4ETS4PJUods1SfqeAYZ5ATneVcNMB3EfpoaBqwjphaeoV9v9joJoiQz",
  "key4": "YosjRdTVfcDcuXAnNKQJcW3YXjAbsdVhhx4askcnZzZ2Fd3M9DnMGXLVQcRVcHLp9SZS93UQECNX341vNinjokf",
  "key5": "3wzwjd6MB2igSVGQz5GX4cez8vyTDHb1rTqeuqDCxXNfzCr1omxnGPwrQQhJwGRMF1TfrafUuNCPSChXUhQfWnzd",
  "key6": "55mNJpYqeoinEAAxBztAQ55Aa5BkpVEaMCaA28uSMZ2P9U6uksAS56n2fUTERBTzeNraD8p2rvnHvghZ1tif9Brw",
  "key7": "yKgNKkBpZas6Gnh2BaTrEAc8qoCh3JAYDyXu2AxAWxF7Yu7QZicneZcvCgfqhL9Up2Nem93JAMrEu9wvQPhh5Xs",
  "key8": "3mBDmYuuTWcGHSDhzboFHy76jxCxqrtNioQd4tghxBSmzReTZDFpVvyknbGrmdFG8vpZr3CFiPoRxX8tLX88BuAf",
  "key9": "3GV2Z2mkWTggtQuBft7eYZafR9tPnpGWuLwwdyeeioFiQwiQzxaLu3rPEgjLdZcLTXjWfCdyxZLkv2ZJJwFQ38Xa",
  "key10": "5Gd1Hr663WQ4rvYWw5L4Ha2jKf7upMAs45mxpJT2dhKcYrGApajaKrT2kCrpHCHk7XP5VNXMYvwnfV1UFpodxb7L",
  "key11": "3fcP5dha1MVGTzWDV48AL78ScSexZV6AjZFqEsQxC1ywLAfmjwi9Jmr7VxAwx7m9XnutJJ4ovzPWc35dLhgs8M7Z",
  "key12": "PxW5SfhHZXQm2VM5TibKy8MwyDGXzyNSpLaSdfvVf2vPBsqTFJZinZFvpVLpPpSkXEcVmrZXhpoKrjvKbbcnZLP",
  "key13": "4exsbavJTGFyG1E8AXtrdSj5Vgwb2DZgP6mtYWSbjznnuuXq5HKeKcycPzqNCsW4dwmx7sj21HFavKMTVzuVsa6q",
  "key14": "4dmvVn5mrrHT1ADYDNbRx5SvaSwT5ux3n3CXLBrzML46DCAxce2wP3TDhy6zonK9qZft4bBiuibvFh9xRVscRW19",
  "key15": "P5Du4Si5vG4ysMLhefwizxDKAKaSpMdv6ciQ8N1S182ZTsUvv5VYFuGRSHemj4fyndwUDMeCCrSYobkHTnURGrH",
  "key16": "CPLhEDiPNrEJ7mbCi4kSLHXM1A8RDi3q8L2nN2K5uFZ9HBRMZp8o6VM6j3rhmZHezjd4BQqGUFie8Pzk5qFZKUt",
  "key17": "5QwuhqwFGw4yVkdtmBwoWLwfMtRQssv42Ja81DWSjE9xWWkuX6goT72SJizJyYMuVDK4FskkKqUCXrGJQP7S5T9Z",
  "key18": "WLhLH8TdzPF6EcTU5R1T2PAk6wqEHyV93vxRkaMeUZ2FVvtHfZTSAB5D88mNhMCXzYAeHNKncoarmz4KVVenVad",
  "key19": "22rHoeVP5TxyLCow4XTqG2bnW1NnSJZvrnbEhfAbUnsNjxTEk3F6CgFBjRLhuHVJFXRV4dWMGAuZfrAx89aBTpRQ",
  "key20": "26oGPyBbQagCsPQPBr4GBoUZcBRAw3i69dggcLGMd29cnvkJGzTepTungcwmj4zQVWrucN8MwKHV88CKdfqYyqQw",
  "key21": "3MACexxsS3HZfLBrR1Tq6NWkrDA5NSqA1V6KuE84kjUvd6gJRUjq8gbfw9iWScwKm5iRGSVKg2TEd19FhTxEhiFZ",
  "key22": "5jdjB58UTc42Uwk5ZGafAJe27V2AA211ZPZrNnEuzrRy31QsqWNiqUt9WABpJahT9tARMHaw4rT2gScLj2LXF5EU",
  "key23": "62sWYcjUJXAgDsT2dR5uCsFAR1ubw8bar4ifGDHCnmJC1y7aw7v4yRiUUTFf3TqTpCtZGoMHoZZpVat5bpUR9wL7",
  "key24": "WTXJzvhKWGx92rE4Z8BK3S7mhMxrKYhCjkStzPhT8y37dFN18xnASdTSddKdywPDbTbyNmktjDcYHNWhP3xyzFd",
  "key25": "4eBc7j8n4XrNVXn4LRj8zcHvDsUkVzkgNzpM6GUbKULnuzf1K3EZ6iskp5awJsCoSNVb8GH6QcuvhWV9uvGAjsKx",
  "key26": "59tjNv9TiTuky6aMvcTRA8Ps1TJWTpVSdHuZy5iEk8HcTTwRq2tXvWXxFu3koK1FVYM51HZPxoNHdtnHCW1hb6V5",
  "key27": "e9EZVpnyoFJmKTRUdNTSiGbxgsjXnbsX7qBcsU7EnCD9hNbEioon8ZSrvnQhZEstLG7xUAEBXBMsYTijCP4bCre",
  "key28": "2Jeo8Q3J1LXji487fybSiwXR3DSrVrt24ukpio73pJn5SPoTJifdwtuivPBZwYww9W7H7JsMxEgcRNCwPr4Ayg7H",
  "key29": "3Ri4Tqf5aKtujGvHfJH3UcTAaNT5EFeuJHJCCjUS6oPaQRay8JXCenzrTqUiDqT1FY4srXfJw6EbQREZ88Tb3VoW",
  "key30": "54DbjX8fHJ9C7nHbr9bU6RBcsZ4mEzQUY1WKYinTdE5wnNDgxZ2B8hQ6BbqnNMFtcqEJ1G1TgtQxd5MLHP2RDtdC",
  "key31": "2te9WxeB9o6dzsY2Rj6JNJMNHjcJrGmmqioaZ2mqEnmQMPmF2WyxcgcddH6k3JQsC7hoQ7QEXKs6UXu3yTCymgou",
  "key32": "21UQXkYVPfL8s6yveyxhLPfiFhfGpw17yVYSvwggvGB2o2Pjdt36GiU9KDreeaNEiPCuuh5cCoBMNsiWLXb1WNgC",
  "key33": "3baTj4ZE1E644LfbyzH6NYEU4vq4FiMbeutDLrSeXQ4HL8iNh1Eq15TGyCaMq6SP9CcQyKDFD6s6u3Ytkr9fLu4F",
  "key34": "43YHsHiDJaTY6QZgWcFCEndSHcgjz5Z7xgFXVSbY1FfmBaRVV7RtjewigqNcQQVbhUQwfGExjTrRRuzijTbnNa1n",
  "key35": "2sjEXuj7GLzKpYZFtgYj8sf2ezUwnZ1tdoNw9kNc4FxfeyRsM6aKNBALJe73sEwzDAKL7zzyxpYuSL4rumr7V5Di",
  "key36": "55j3euyoXrengGjd4UQ47yePTQxTBcWwuT9SPHwB5AUvAq2CPEmxDzAQQfkrr8X82vU9E9ABKbaTc9Qwt2zT8oWU",
  "key37": "4XuWuXXq4uYX5d96mcx4dPsuZ5vYbSAcbt4oiszrMGz8s1sHhUNNpHPqciC9ypcup592dsd4Q4MXZoWUnnnJ7pMq",
  "key38": "PbYjbiv1LcHrDgRYAF65Eo8M49h6Z7ZRdBJePsEfNRHr4FRmh6mMg69DwomNcRmXw6kvEn4uDiFz34ykw9ZnyZV",
  "key39": "51LjPYciHX7V9owwcqKzHAi3xVts442gVm2nUTpPsdzLDA8wtxH2t9AQncKnkamhxcsrLT2xmFrNK5hqRvXnUEt1",
  "key40": "5pkg774xHe2wmfLo8rz1jebkiiftGQFJt75E1pg7URSUV9Lacu9paa2sdTaoCdqvGwYwryu2Yy3CPiysKxYB9Nyn",
  "key41": "wV4qfTCreM5ymU1R5z3FzHPLU2RPzmJrndmrDAVcaH2Abzm6PVCFjRX3CBkWebuwuE3zZm6QaLByyG3F4vK3RLt",
  "key42": "5pT3PiRLVRDrXeQM4gcHywAGBt8MNJKFbeoX4aobsuDCRkmuEVFkBqBqr3BAS7S1w6mG38n7kEWRNAqUyVvTA5Gi",
  "key43": "3BLa863RhTp54LzKQ4Xzs4od6Q5MBLkB6mieCArSHfP4Uqdjnr64u7TLW1gyey2xTxHq4N7KRZQXqZnmgdFechZ4",
  "key44": "4DMexnsQ82ZNFNKHkg8Dsjo8EhVVbvQQHYQGLGCTDX93pASvhXD2o4CXMcw8rwtmYc7GCBHxRJhi8rhYgxZY6fqs",
  "key45": "46aC5QGpvJkhoMDbE1oU8nXVY11N2iCHZ8rM5jjREQcTaog3QPErDTG53z1HMic5Luh71jMdzxAySuqnFU6qRJy"
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
