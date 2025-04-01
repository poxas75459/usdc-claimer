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
    "4BcYsDyg9G24C8grKC1FgQ9mfiUTQH6ptjmy4oA3xoYEYnBfpE8b3DWT45zmcYxHroTPFD6Nmai6N6FPm9kJCTv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56sx5T1u93su5du5R7HbC6UTEaMrd4Rmq8ZkJ962kvSL4J2ztzXzB4YajD6FTKCzTsDypVWK8rdCVaA3FxSNGuFW",
  "key1": "5ZproHzdTq4uqy8x9SjLri45sRiYFGm9fGEzPdJjSUFMaFBicLBTmhwCaoWY3F6nWHphymXxWGw8iGA7EfJkXRQq",
  "key2": "2bErPjesHCqTG6XM2EtZPUzhKi5uj5Fsuv3unAedCqoWqVKmcbyuSYwhX2dyGU3AmHNE4yTJ1tD24yNtgN5UUVAf",
  "key3": "1tZnwSwouLQFkY5hs5uLXTNaRrYZFgcAZ15BD29GbxNneb3x7zuoJ5ekoCDtFi5AcXKb3pjbqyr8bhVdo2XkpP3",
  "key4": "5ZpnYnA3eYaDtnuuJDz2uRwYLz4KxVkdegVntLwzMACtm96ryXmYqpC7fAoS42DwnP1sx2pv7VNaZ46XYJtCxpuf",
  "key5": "5xw3uWgZF27L1SvqyEjpwXVqFSTEWUmGQb1b5TykmpxArdTb2u6hrpLkb5WCqGR5sXoaHCxyHk9cQYgKNf61gpk7",
  "key6": "MjusBv4bFMwVHQACCVtmhWHWVWfUXGtAxsaUfUewTDFjNNbZBprMhue2zugD9zKmvUBm34W8dwoFh3VJhmLFZTG",
  "key7": "5nKcxcVQYFh23qJPbUFyE86eV1GQPHJn3b8ZMg18tPDCed2LKAXGxT5x2HJrjnb8tzwLV7WX9cQQFurKLBJ8CfEJ",
  "key8": "3kp8LxEz12uLKaCWChKwKA8mgzqGxHzq9oUbtE8JfNq4aY7GpSEdhMCdA78KZPqsTTrhQSXh1KsoLhdw46VgsmGe",
  "key9": "rqeErtVJJaVmBHram2WTWfMhiHJMvUKCqjMuELn2LpoLeGXF75z94xcdmYv88Nkrw2mB4AWyVCPZSwz6z8DYoLf",
  "key10": "9PqZU67naiLoMh6LMUzuK6fL5pf4XB8dzg7N3gVbN5VpBaYkgNyaqDdevKqU2jnAxKJzYPW5qc7LWFBfQnz4jVY",
  "key11": "4iBfHF1QNATzvznK4q8mpNkikw1XD35kegruvCMQMMyJxfEZ1bq5wv9LbweABrHVUEdpNz9dzgs3tgdBwvzVsPxV",
  "key12": "5qLYEAkx8HVD5c5ddN7x34qdTVCHjNHai6rYhvTQpLrwUd7S6KQkLnc4wNT4omRDJopRHy9uUVDYeoKCR1DZkKCh",
  "key13": "YgGd3qdS2SJMd1BSqqDcHGuVc3X3r3bm9Lakxr1XKwhmWCst6765H8ZDDn9naY5CSFxtWJe45pPtxQSVFqrDwWV",
  "key14": "4DvpV3zoX6N6nwyjHX3Kq4DfpHayYojSE4MQfTdPCayGtsTWC38kvvU6bRcEJcBiQXdZihs4o8vznAXgXCTzmQDv",
  "key15": "62q9x3cvcQ8bi65uqT98fHsdbkB3h1L5EnJ8viDvKebhLZcnU6pd65Z7P7H7rrWXWTJUtgppSVBfPbv2qebCsd2L",
  "key16": "KWEdeCSu4oDRcQT6yAMVGKd5zhstWPgeKSM1e7d3kZQFngFmCgd9kkCSJkNY8tAECcK9jcbr2G8mYxhd56ZCTbr",
  "key17": "5ednh1BWBwFao1pQxtA8W6V4Y5MLYzTrKSk2YB1D13yAcULjMcntAib6rAtCYXLRKbMYw5uGGzwS3wiFE74PJYe2",
  "key18": "3jhJaZSExy2urpreqZ3U8tTFSngE8oT1Q5f5A8nHvX6xkWhxzBb8KZnbbpe6Ht1eE4WsrcmpwomvP8yND99ZKHDU",
  "key19": "3ifCHzP6EjF4MGm8QiWonDzeYSkcpdCs2xmCDUFSzDCWLPWerpmuzzN73x2SF3GGrmbfY6bvFQpXAVsX6TAzjd7E",
  "key20": "4636ccWCVhd5myaaJqrUgw34M72qsDKyEiBawQyf5F4KzbmSohVpnxJchCM7C8X3jStHWCqsafTDJEbq1YzX8coK",
  "key21": "2oGTgRsdxVTRmJrwtHV5PJQKrdCC4fzumWhYzYSuHBK39Kq3P76d2PAKz9XS6ejGVJfK1gNQCSgbZ8RmWDkfeuJK",
  "key22": "5aCjvdY8JS3v12LBtKjz9zHCnhm847mr1mqrmi64EwZ8fovVkZUq4MK5YqKjZWTRoapkXHP5Y5hHRyvoKtW2L1Qu",
  "key23": "3udXhUg53AtrbLgb2nqxeZVRMpobhBM2UixcMVoJArbH52pDomEH8UqKvrNtUM4QuU9fAhimNGs1YRGJQzhPZgMR",
  "key24": "3Zp9Huw5beECC1FQLfHJL9syQhanp3jQ9DaPqyMmXb1kxc7MQpy3QYaPxeDBz8VzKbLfvuu1pozsQwqFmaoWhfR6",
  "key25": "2VCCY5LzjNjedbo4uLg2pivag8FkGDC5hgonrAmFC3C9EThADeGo5dSgCCKy2GFqPqVTmYdVHXzzzubtmmz5exmB",
  "key26": "2yhyo34EJcFHFWCapYiRFMfw6hkiZYikrDDL8q8QeDNQxPnNctVS92r3MaCTDC9Z7arzcvEaosVQVoa9fe4T9gMo",
  "key27": "5X7eQmqFZRKRWJNVHiTHPdRE5Brb5kQuRVc9MjgMCqQQmGYuQ73zw2UNEVcmadEjxq4RDst5QC6eiFJ4w2ffaYPh",
  "key28": "5XLTKBFu3NnwiDNpQ89xLqRb6pX36FDsDD4mXDyMgrEKnzsZvEAMf7NEeHdjj46qAMi4LuA6yswUGVuxfvmjX98f",
  "key29": "3oZTXLzCuH9s2Msb2awCoEWnYaY9ZMgktsmH6y9LkNe2i87nnUPmyBakuhQAgVreYm195Sw2UndgH8wvC3bFqgi9",
  "key30": "RDngtfifBuJ8WqXejZH2tuun9WA2qR4qoCLmJtZfBy58q2NcufXyVogf58ZXqVAJpCazZYKJp2HCANDgUoXx4aE",
  "key31": "44bwg8HXVptnCp7xi8yGc4t6TTev8XuogP1CHCUmvEJUARpjHtgf5NvYh2i3ftBoSLm4JnbH2baPCYQVtaLaWD2Q",
  "key32": "MH6Y1zRKMjuiejXstzj7KWSciMWuqBJuL217YNCnuZFuTQk6bVuVSpWvbfc9p8S4a45NxCSJ6mGuGcGWNz5CqEJ",
  "key33": "NCdBqNvp3oVV2TM425CSNo9zVvxhcunbm44rrwvHMkF7ePUwwu7UrNp7GNpPGUMaBqPivyhAjNz7t4hdzraXtcP",
  "key34": "5rXq9H2GQKF2j3kaj9HdooVZazpwSiMzR6KteaHmDynDKRT2A8arfHJPMd8CP6KNwriuzSFfm4rCCqrvvS89BDdd",
  "key35": "2qPhLU4AToXmFW2xzjiXdqNDcCFxNC7Y26HtKrBBeeueGqvxq623oS6HkNJKRjjSZ8LRnan2UF3TPbQFZPAxjNeG",
  "key36": "2NbMBF4tFKqcXSKp6Q4qvHQbAKciKN4JuDCXtMZ3ktwANmHHhdfSxn5UZZe3NguGhxmsc6yijutx835Cwvq2wkn2",
  "key37": "2EnWriyFYSR5bXZAjPLdVPNxx6MKcs4r7KdwJNhgWfUrYjLN3DocLS1ekUp3UtiRPR928k7SR3ov1iz1gitBExHb",
  "key38": "595ugyXNprfkTjfy9bwQisCAexb5vw2wRSrtCDu3HWAyXGiyFJvKCWS5MfY89m46cpj6i4sQMK9YZursAqeFiMdG",
  "key39": "3Qa6FW6YvF1rzMqnnsVR6nRafSbomUWnj8tRMzWe27T38AHUzzbwLJ2xz62FJKPKwzKAHoPjWdX47gcVqG8FPfu",
  "key40": "2bg2RrH7B7eFdGMGtX2Wc2rtw2JX5sMn3gSgRJfpbcT97ojiDBsgLuM6nNheMWPwTF74WaQZ8YD3H3Yx3fnhjRWL",
  "key41": "4JBoh9RgwrKFJVZNeaiankhh6FYu1gkXaUtzc2uxkU2XZnzfFuvq13w7uH6Z419v4rjpJgr5mHqcyngotzThT4xh",
  "key42": "37Qes97Dk3TGWhreb1e9hi7x8rM5AFMdwpR7LWQa2sorQitLdgR5cvPzTa7khZCtYV4hM2t7PmTcLVrg5k58Tf4y",
  "key43": "2fN2TvMCknBHYwt9ywYZt1UYfBoXRskZ8nFvZBm6J81xS75hrtC3gieUo4Tfv1dHgj4i1yFRWMd8XdaiZSkYd2Si",
  "key44": "Fvm7mrJ1tLwVMKU7YLdBH9YTphtkgfLeUFaEV2JaXBUALuJatQzLi7HWhbbt7zUMHgEmM4tywMRzVh4QueKdwif",
  "key45": "5MaipvRNqeRM9JASvXCrPN6d4Wz7D9SrYgPrJf62kewLZnfZGaJXzt1ZoEYCqCstZfFmXxDYxAo85W3BkP6bskXB",
  "key46": "2asAq9ttVR5JFXNamJRVCv5wcRfu3CyQA6oc2HALqT1doWQZutzcYbFNC6eZFPREhURBFtH5ZUAfay4TswFtp4cT",
  "key47": "2o57AgKjQs7jq2NmK3LRC7Pqsxzg5TxLW6WjhTJd1NEvbe9iTt5sLq99XhMHPGbi1LuAVjdmbh4HXYUyuP2ayyKD"
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
