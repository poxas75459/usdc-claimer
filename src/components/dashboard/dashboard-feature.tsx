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
    "fdovK6f2x5MvqjsB4tyJstQDs6PZXBEKauLuLnMwQBMWSD6XxPXkDbe6pCwo29Tty5Kya21QsoeZmtnTiaHFLdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dLuoxjv7iQWRX31oGqXBoCapsrwCwLbYhPQwW35Z7JhVmQHmfDeTLyQgQwpkVSv7RsJbxq89K5vMyNETSjqa6ov",
  "key1": "6f8TLFiQ5pXonMfaHJVqConJkW9gQXcopbNjjXcwggo4eRmSUHNAevYsmWnyTqNNy37j5aRR6C6MaBKMZgX1YdZ",
  "key2": "xBSAeURKDHzZDs12T4CUXMvb4mSjN4BMTQXG7ri3bwA5UiTfymXcN9LJtA8QCkFTjoDaJtJ3RAfskVwpDbfaK8D",
  "key3": "48iijKMq1wKntmQwpJW7Sw6qa7CnV3yPPhAbbQvMW1n26gtvaCPMjhxgU9EFjY9KLwpQUuTVDj1ZBWrj1xmbTEjF",
  "key4": "5RkuLdafR8Pbtph48wq9BPJgLiZcVNf9DHUbLm9oH9axvMBUhsKYnZnfsw6fa9GWGPdmxfC3BB2tJb6inmsYV4LB",
  "key5": "54XFjQiH1KygwYqssGXST1mxZsURPquGTe3CRsAGaLhasPEgWgHWzu3RrRqpUucCpBHMPiXLJ29ewfsRCBTPx8yk",
  "key6": "4AES4f42oNtetaruDnaorxpe9KEp5DtxcAJN5KFhcy3P5Hv9h8B7uQGMrCQ3Z4uAnTKZoKewTfsC7eRd5ZrxpbR5",
  "key7": "2encwysQMp2ny7pjd2hJJ19EWCr5hFXwzmzvyKkX68FdJgZCPe3EM6vFsN4pJL6dCLVcZu4arsoaWtRJNQ812Xsk",
  "key8": "66Pf6Fy9GKLubeG25FYq7kz7hwp33AdciGu8JGLXd8Q1Mk5Bqt2avGcMdyj3MMu6NYmaNCkzkTiDo1Rdy8oVHMkw",
  "key9": "CZNTpYQJgfZnQkKmXMYo8G3TKvhq89RjbxenJ8xVGcwyE9Ke4PxbiBDXNenXgLRHMyKbNhGr49MXm11pc65i9P2",
  "key10": "2wjPkfaHEbbLsTkXttMbHkbBFamxCQtpDSgbrgqEAshXjZWrPMuHeprbX4TQZUbmCzLQasYmCjAYLxMpA8gahNZb",
  "key11": "9SsGAoRU6C2RR3j99sjdMfCLifSCCNwkUEpMYxa5M2jVPp5R6CaaPrRRxrssaUuK422AgVYsJwKBHEJvf6wAhkA",
  "key12": "4e359Ex5sBDXgqLJn526RSnZo6W9bXaTNRWxxGMFJq5auZngrssm2ygmzDkSccDaSxixtHm7VA6fjGW5G5JH8RnS",
  "key13": "5dSL6NRkoG2TcmyDjyFVGnMAXu7gkHYECEQ2sqXLe89bFUZDpnySM5uGVyUCuEouWR69t5P1xSXo6buef1vVk2Ej",
  "key14": "4fHvnMoHcm46Y1BGQtT7j12dhWJ3uwJNULZp7EBhXCn8myedANPaCaa9nam9rqp7ifsHrCfQELbMWeRuWmbJgKyE",
  "key15": "5xJEPYfrrPN6F4H7nsaQ4XXYtiN6VHdsRWhBfNXZvCGS6PUFe9SyBNnpLAFq88YJDrEurhCKZJGKKHwcDtg6vyjP",
  "key16": "FmZrKTcURs3ZyZ2NtGtxb7ERC5693hxYpXnqa6BVWSTBq3NKdeDCVawDuK1v7pDQYzyCMNEigwR6NHaL9HSKTMp",
  "key17": "4Zmn7wJZT7N47LybFso7X3AX7sanqu6wrQusej77TTbFktRhX6yrdC9GW3Sxt2HMNpH2f4rchEJqUgFqeyPKAyrx",
  "key18": "4abwu7y7Z6LfCW158hLSqiJSvtGyWaaxvyUJgh8FDgRjfs3772wXB1KyRi6TLthgEe6AJP4R7e4mGEQQiNPrnv9H",
  "key19": "5HwNdRrQTDs82xvZpy7hyc4aQE5st61VwR39nXCtJbtzkaNBYsREprvGZQ2wDKmP6eidjb3qRgAMUaYJLuQKMtPp",
  "key20": "EfgJYw2DqyFKEqnWjScRohDay9KMfuuQwuPkckdMkFxn7WBsJ1xWjbdAaPbFxaVr4mFsvReUKvToBhzK6gjMf7r",
  "key21": "36bK83HDX8hsLkbY5bfCRZwca77oSt3qWqz94zqmbz7YCPfgJC3M6nneFBXBVFNjSSTBHuJsb686ahyexhFMXAKE",
  "key22": "5aYq1VTeia66WS3mccB4KEdFBQ8BtzU846M2F2mf6vU7KRzMTRhy6n4WoUykopekDAoRooWhxWuroVdvMaL2CVKU",
  "key23": "3BknzZwTHAZ9fr8z6qPSd3aYvVb3Esp9ZCYGDkkdMCjRh8DfwSZ34sgkj2bKbCEJpA27RAgrMtYFZXcqAbktdDRq",
  "key24": "GNa8DidzMrzm5UMWHmKcucQCW1ZXekpg48aQLm7fsdVKSB2z8PABuutGzrK8pgZ77iVpvkC3KD8Tiyqogv9ZeyD",
  "key25": "8XvARAx3jBwx8YAJ3tMKXLcFBta6V4vTF5vGR6vMbpbndHzbvHfPQWGTLdH3oy89G1nni71dmYq84uCgcSKhgr2",
  "key26": "559Cn7ZHPDSkKePVuUs8SH18tfE3RcWcdhMZDnxyQzPpQEyTVQkdA2WpQzPkzGK17BzbqFdHtnDuAbjR9VEsdciF",
  "key27": "55jVjsah7xzTKshF7x69viZgzWf48y8KVCVx6zhWJek9f7LXSuQtTFVqfEbDthhJqDdHX3ano3MmwV81w2yBB3rQ",
  "key28": "5Y2NcwxG4y99Tx4g2F9HE8AHBjpg9KuGkYHiJXFpWQnvF3GpP8JW86yroL9JukwVqFhNnXifLbCu3yfQLH7sRQog",
  "key29": "3wcK7zuCtZjLCwwmaAoBntpKgZ7W4WicnGVD521ZdnH6by1QKMmWsD37pUfroN6wBEHX9jcfT4a89JTdNx7nP7z1",
  "key30": "2TjSKLocDprKkwXLoV4Q7t4kJRxBsVbJKKGF9Gdm9G9kZ4YW5p8pBSfn27fFv9Rt8gbMGUZJmubyUypwkxopM4HK",
  "key31": "4iPYqsP2kULVgSyjBK8cEQhoccivnaLcZH7NHgffhU1fENWuJQnmHWq3AGZXUJKur2g5CzSkbFe4T5hN1R82qCn4",
  "key32": "3nKvGMGkCG8y8Ay6fQKkHuVNKmaEyvTaMZTwiqocRQpJ1R8rGCqKC1p1zVLDF544U8QPCYF5yf6AsoA4A8J5uEtS",
  "key33": "5ffzSAprMGsAaHBJAg6MA2pKcXoAkkfUKhJNggmdRSXd3BrQntcCr1YAJrpPquvr5Jjtu7xbAVjqqPXFagobjjjL",
  "key34": "sSeaNwqADYtz4FUMAaoSYQJveiCZBew1WYJb8RGpyjiDqNWq4bMeQNJBnrCQGRcVntqXHnXeAu8U7diFGA3AKjb",
  "key35": "2qrZwnerrF3474xjk3ZKXsHSNy9k7ww1VsLo1B96UFcqdaAY8MxteAsWYu1zqQBEs7dFPMvpBQNa6cPrJb5cAW94",
  "key36": "2tu1h2vYMRECGzsH2krViWPA9PXnRER4NeGRhGNh2HPxjeVNsUnozu6Wk5dffeu72LHDphugjhWLKBjqwAnk1h9j",
  "key37": "4DBFFw3v4BRED1WcLSdxXibCQFn5NLtjj1akK8udtrCEP7KcW7jvKGS8jS4XH3nfpi93H8QenwPVYZeiaLffokqU",
  "key38": "47CnyqyxBd3fsyiu6t4dJCFEgHdCQkiYYsQgdGUU52NweDN9ffkotzVNhYR8PvYJKjY7NcZHQ7uH3GcdKLMMCvEN",
  "key39": "TvWRgUFm5EgNmWgDUDnBQkx6LuFd7qXPh5vsWVQQR7Erm8jy8MiCo3MKDvqHH5YpLCU6Sd1ej6PG51EmZDEPDu4",
  "key40": "2AqUFsfyAyyTQS2iPDmGhPMDtM4BNjGvVHCyDSSSYuNJQCmYf4Mcch3WpnKX9ishnWKqgZHUMLiLJ6JBZDqEQroh",
  "key41": "2ch6es3DMPUsyVGUmNgn2y5UnTKZnUYaXxj9T9wcm2MbvRQcdu12kwvZeLctZFUjgBSXfn4UQfcmXemZ9NfxSmzG",
  "key42": "67exCWEWBSEQS6HKqc8mciJ6oCR371cLP9c8wZfSgUC3Uy2sAv8ubniEaVp313ropdsc5LYMjjsAQcUmaLMh7UdX",
  "key43": "3LRQgQQFvhPAif47LrePK1a9yZ85eZS9m86sZM27YpSNVeq3QwRYrbVbLEZDDne5QgVHHucm2wTH1gLUBC9ecSmJ",
  "key44": "3ZpztRSN1PTshwxsEai9jcFhnxdjZUHHpMh3HG239F7Y57AE6ANziy58z4c1pWbikf8fcgJeEYhDaGgv1hwkPuyJ",
  "key45": "hB8pXGqrX8ixhaPQPQf92BC5jnFDC9KKxPdBkYUs45R5hVeN1iyiuNxVSQewoujxyh1vQHykwNAxnM61sG7SZPU",
  "key46": "2rc2LRdFH9rQ2bAqZbVVP6yLWDBzdqmuTTmW7uzRMYkmPbJGA82onAJHjK3eHEfsrEYZ6zYTn8MqLmDGSXZAhKk5",
  "key47": "2CuBt9c9otdZMgUogvwUAnZhrBtYEiUNt7hjMBu7sxg6XXx1cNRhWxAKvQ3D1eo83nHA8TnK2u6h57ebr8v7hZxV",
  "key48": "Y1gx9Rapw5yNV5DD5Vy9EKNKS7zF2dZSviFDNwJEGRXZLDdEQ83GYCyn2BrFATDaxBugHCyFpUa7Gcp5j8okfgX"
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
