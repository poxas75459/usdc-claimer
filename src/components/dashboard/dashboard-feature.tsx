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
    "37dyBpdE7xAjwHqXT3UEVwkxuQwi98UKrECAGHCVLtLDZvidQRjsH2729yMAWQmMR1e6n7zuJJa3gHy5VR9joi8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RctQaNwqfpnZBuQDJUp1FUgAVAgEZoBnpGAJ7hBWyUC6pPYxLsnbVY1tX9EWfiuCfi3T68WT4S2d1XAH2qHMGgY",
  "key1": "3v67su7Kd8CXcJJSbErqhhAGraLdtEnReat7CdqH1sh4nxrj1wFnUhWwZS5PwDd5JXJ8NWWVk5EjewxSstokqBZk",
  "key2": "5zUaTHijoPuyyXx7PygKzpr2inP3s3u9N7r5Cq91f3tENmSNyLi4brhZWjpFLy5sLLBQhSp8wFWdtjDFoKEekkbo",
  "key3": "5m2VwnM9vFNx3ksUt45cLcnfgJHtPAU2phPeaZRJrPwWHfJq4mScDfumVex1riepysCK1z2xdFrWhUtreJS1BUCs",
  "key4": "57n4HYS5f3GZSCTSAGmrFE3cs2XmA1bXuoAHWuTHRdBrdMFZAvR8HMhrUDtu9QHjDkv4GyRYJbBEttUWQ57ZPvoQ",
  "key5": "3gs1FVGeouWRSHkyVyuj81nVKARAnfosm4MuF8dkGAwgJZRiJ1RUTFyAHAZGsS9Cm1ca6CzCJmaFgxR9SnwVh2Gf",
  "key6": "57uB6iUW5njucoHFSCSxPYRMndfgL4t7xpi3bjNVdHU3T1VHj6UWJhzv4PNddW4yuqRaG9dLvcWMtNWEc79Y6ZqG",
  "key7": "56fLNstaNuiLBm1hPZhajzQPreJwwF3kYF5q7q6ArEBMvDTuBrwSYz78CyQxnGPU32TTJKcjeUniE9c7jwGc8cvC",
  "key8": "1pghPkegpoAjSGATUPf8q9UvNsnnniuU6i83EE4p7yZtVAy8naAWsnpCesGfu7UW9FnBdCJRP2bsab5Ermi5pkV",
  "key9": "5GDfeuRK9ngb62MatRrYDLTgZRBJj7JFg5FH5YaDsK8SDwyM2KadBEu1QREYhviQwiaUQ9g8ionEi2PZBobqPrPB",
  "key10": "3nuoV7P9EPAmd27qdvAEprp8pxEFyU7tqY73SjpQh1bmSGHeH19usmXUK8Cn2CXfQ2F1Rj8SVn6114azcvBwoMpo",
  "key11": "4iQEQXuTNL9s6Luc2XBW4pXQSH6C7fDkEGTze16fMZnca6cTgCWqQkNUY5d5RUMtjazqd5YUa4qrYgFuivmod53x",
  "key12": "4ab1VhVCb3WKnDFDjKpRJyPGfDUP7yi8EJ2Zx73dsw9GBXWejdt5Ac1NZJxgrSXPgnGKzJEfypegfM9pDEVXY6Zx",
  "key13": "fSrq5Jp9WaG2vBLyf977dxvsegLonpbPT8DdbcUWoJXj9mPjyUQNvwJ2VFUxgKCrBMuyiB8CtsXKv8iRD5fJmKW",
  "key14": "eRxpeiPAVstCgpGDQSczAA4zAy9iMW8BQ8zhYF1pi1JPgxQcd1aCdfYyii3HhMcrZ7b81mmaPRgFNZ3GrwnyQTv",
  "key15": "Dv74vHwW7hgViJ24yqCWMqLf2Nx9Ef1inGvZXMZnZcrXdR8SqSRavic4hYKqKWCX8Hn6QwpXF3bdrvVetd62YZL",
  "key16": "4Rfm9iiWYV8B74ceNrXN6VrKwg7fKrE7x1cEcDdG43iVZkqrsoH2cSDgA3gJQi8ReVzhZqmCoxRigw835jv8UcBf",
  "key17": "4h9daBdP2qsFYiS9T2BQME137gJCBYdfo88TeMnEgFmrchqZuGyDtn2QBKUECWLFEgqW9NmbXiJqHaefDTxUzQck",
  "key18": "4SKxfKw7XqsCUYCjYKS3uJQQpC7k5LFTXhLRbo8g97W2fNdVyfhd6dNDuG4c4FazfNZVMd1S4E8X2ijhHRo8ErHL",
  "key19": "3uTyWFBUGFrSuK2RTcurgamt3PecNtXHDkKvc1vSMMSLxPUaQZVy8e8rVxC9ikgkk7rfggQzfpPUmuDZDZzqxZoq",
  "key20": "FKAH6CiNBFTPkeJFA1zHdJcwx9PfkhXMG7BnjbHq5BoXD5TazdwjfBexQtmgRMDorUHQKpHBEbKRpygq4mzQgSz",
  "key21": "5yoLvJBPDAC2LzzCr2D8q6kUeN7e3sP7J3z9wzqLdmtodZSTKG4fCpWqHR7JqBdWtno5U6NsMWJ1gf4KwL2wJjVr",
  "key22": "3jmNV5ta6F4Yfz9qzf2WWF18ojLyfhb8iYrXm1yLTvQhEVTub7FQe9JDTThzMqubPaj1Jk68BsFzjLgwTxC6nru9",
  "key23": "5icr7FNPCKktZL844BmfrKJfzDTabVLovyrGyPyAJXsY6UwuASUgmg8U5v8gawn4D47YEoqUh8pYa1FAkM3BzPnV",
  "key24": "3aoqTPyR8KybUE3T7ioVViu4ChXkWqhhd6GE18Hjnfkj2P5Wno5P3fgEKXqudj3ARQXYP6JaaK9ef9J4WZQpbreK",
  "key25": "ya5Syc12XaAsmrnBato7UdBEkdYT2egopHQx3KE8BTZSB2q6XsvcN2GsuRpDs4G3JVmjDtidNjwJxf7QPZBtpDs",
  "key26": "3vU11mG7sxwj4RQcwdphKyMNz6F8P3zPD5w72SLP8dioD5rBTct3N4WCbicFoymbwSCFvpDCyghqRSgdToPuX3UQ",
  "key27": "4kgKhjAkXNR12QoHeV4s2BL35yH8RihamxCq5oC9GwL1RUp3zm8nevVFRWbuhjJDWisKkSXwvFD2DLDFifSATbM4",
  "key28": "4AB8swRD15vDjy1irdM9566EsLhCHFsfjoGjyUaMGNycTAy1J1uFsfnpkqkLGafypP2keJSjBKyY7ZAtn6yXLM9i",
  "key29": "2xxFwtPS4N2edRBEzYaBZ9ZoMog84tZsxdpF3RMTjpTR9FyJNDoznbDKZmAVK7EZUFoceyMiF8VuC94h3J4rztAd",
  "key30": "5fBuGdrsQp3z2ED7ndrXwigDcH2hmMv2wDpEx8F99mcVPuxuZvQx9Yg4LfKAnuDiCWyLGGCoTQApuX6CYpavVpEP",
  "key31": "4sx4yneCyLQyxf7D64nH9vzjZxeaBhLAjQjc3JRLhXgTG6esZ11W7Q5prmj1jY5eZ6VAf9Fs53zZ93vJmai7cX4i",
  "key32": "2o6ywjhsmGi3JWetxF4VBMBFZznQP2iu6eTagDpubw4LZ6kPAs67jdbUiiW3vgNJsf5vqivvYSa9LHzyWYRp1h3S",
  "key33": "5ffmKqbgsxWGJGpZZQ5vWWNymBX7BbYzB7yRwTkh3LzJtyMnE336vKLKHx2ZMfmuhLWNh2uREMJaDXB3aGRk6VP7",
  "key34": "2uXkhvzsBRYbddMeP2pUndvnotz8bMS6kwibL3Yg24m1NkqDiSwGWcSF9GyhAHeoq3nqsszUcKQ82f6iHFkZ41NB",
  "key35": "5EU3t3LoH6CzmYDbBUCUY3AABeYfzF3VwpCHYsCbUrfvsfDx9aMccjnpfibStHgqDeLchrRVaKxETgT3qS3WCksk",
  "key36": "2vkmCQ99UU5AUhQA7zPo5ds6MgH97oVNJQd9bx9dAc6P2V4EEnqRLqHWQgyuxMQ5NhKW8xqPM1ENoNifxD1bf9Xp",
  "key37": "5ZM3zXKZm6AjujrmXy5LNCJCTM8jM1YNZmZcgBgWDLuFMBb251GduBWekX8TvQbKhxvux3znDi5edaXhf83Nn6Mn",
  "key38": "3iuEnQsNH1xqMFBoRnpVJMpT92QzE6Uh5NZh18rHpo5EyjcqVVjiR9unpLQ8ecd8jjqGWXkhasUdTtGxWNqhKEXX",
  "key39": "4CXVEHF7gQSbHR64Wg87Sv53a4iS94WZoXuRpRsj3dcwuUpnzxDioAvR8gE88DAyhR3G4kpZrvN8L7wy78gAkB68",
  "key40": "3JdSXnqkxs7KSjGiKxaXVHB1kX6hYe18brEJQ1nCaSQdi2uKgX4ptsLoxohfZrCvudCd5Pfge3jVWJJPHWpT7GUU",
  "key41": "3Du84aPxJZJPZ6ye2fPae5ry9t5WeFtvcFXSwXPx8daNgefauMoehwEyHD7JmSbNQpTGCo4hchFD1YBCSqHEmaid",
  "key42": "4fHJTtoL9s7HvBqzpZmkF3RKQu7jAeRhCop6djkHxZ2RTJnXRwFvLibcqdNt3Gg6kbHMSYVAjTZjyQjJ4rBgBFBu",
  "key43": "5zAzFQj54wi3zCxe37g1QTmEiEo3Vw1ET1sZMwbVukSx8gvc4WyQFgF5wEpLLZDyngx27nU2Ah1WJLkwGzedH5SX"
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
