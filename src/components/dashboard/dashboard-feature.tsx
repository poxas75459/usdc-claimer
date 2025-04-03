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
    "4NNcvsJsMP9kkFozzmWXQeJfRtWjRPMadjhYKwY14VejFQ6a5dY8nodT7XrGDqeWt1WwiP4XeqZd6dc3xYkLmaFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62UPRN9we9cnBwdRgwpstJ2tCChRigQYqtCLJjAPAX57qwjdQk4iB7cXuMwHEMgSmCMgsxVL9twYX3XNko525dcr",
  "key1": "2TvxDg5DG6TAbh2tG7Uk749eaqvr42HGFTML2m71sYw3F4N8dvxFouJVgd8NGeb1YGb1v1zQaC8wwbdjqWG83RTD",
  "key2": "4C3MBCuic4QRtWDt9LFwkL3Wacx1WoCZ4u6sGpQAUJ3M4ztGfsc2fUVpbRj6APawPhNa1RsGjNFHEG8zhpFmfMKT",
  "key3": "5EuJzvuUMoEd9YRRwZnLejXuP6zxxLPhzc9ahqG9viEr9WZ2A7bkZeBrzt4Wm2hkVeHH2ieWzGJW5dKNZ5gTFcUL",
  "key4": "3RMkFbxvPzAJFGkjtKAkBqmwaP6tPPTGJmq6xUxAQV4R4MBHMTxULpJo9e2PZ2D392hygjQ87AzNJe5j2MB7bzSK",
  "key5": "65reDtmF9uNyP9DUCGswmX5673pVWCPoyZdBoUavvPLCuKeqNEk7J7NaYH2wWbNJSSxkeVCTKF7pWLH72fqvDGC5",
  "key6": "26SbAAUysaoxLXjjHsWnjoTWRM22BrNyLeCoGoV2J3RDZ21XzD4gccYVMKGuaK7oEK78xtLypGjprm1BDPwrCDZB",
  "key7": "22nma15rG94UD9cDBUqZpXBfH6YNupYw6yJ3zkhpwSvLhp7D9BbCTzgAQW9ZRtpkZVQ9EuEMKoq1LjYz1ATwUyMg",
  "key8": "3DfYAN21psBqrWbooFrEikdd6fknhLVH6N8QbdyqkyBDaZRh9UGjjpQv3RgkvaEPUF6XA6rZQKs9xssWUgrh4Sji",
  "key9": "2mp7mtvcM5jrTHc4AkjUWQyBFvXjxgcsanGXBJsvDdbTyFULcdDsXWc9j12vbHVEgyEBtUJWqy9t43P8ShuSoh1W",
  "key10": "5AmQuc1rdByLaGmM8pWtvq6qq3bWipHmpoMEy19uBKDnid8M1svtwTtHYxSvwfwp4vzj4JLD7QrurnqgCpRc43RU",
  "key11": "2VdJ3RLFRGWjrcAn9wPRgx1hCqJyg5xW1hiyWfcxvv5mYoDP55t7vFjHV7zk5uV6NgK9eHadJRJgWB3CZfxyoGyN",
  "key12": "vQQRgYqXxQQ2PB5JDS6m6GPpd5oqfMHMpVEWSScZZ2TqUXCgdXi6gLzzvcMwcYcXmcuVqD85tdSmK3dY3sPYB9H",
  "key13": "JCJsVVy57WSxe19A6a7X7w2kd2gejN4LqqfVVj13YZKvACBmvbzcJZ2g3NNADEc3Y1criX8hFN7zeuSdtgusYF6",
  "key14": "33UppY9YpK96zsb968dFJfzNAXa6dx8P7r9BiHmEJVppow3XRfhTdWRGJr8J7jaPc4AqUrqWWmvvV6VreWtBqsdU",
  "key15": "4Rr4SmNn38hsPqr9gC22cpgwYarbRDnZmuWsYhdiAmeYga92QC3KE9wFPsW7gQZV1TPUQPsUjb5qhcVijPrdrrmx",
  "key16": "4yhE8Yn8UmLpP5g4k9NTTYbaqm6zKhpQB1Z6KPNF3oUrXAxAtJ2LLkjHohfmTPwYmXLf783ZaEFADEMYtXH5XmKc",
  "key17": "3kAqGBK7DbcFpRSsmT8Anm4BPTRTLNwy29P1CkH1RwsN2mVpuvZLgXZcbsyACgwPg5zPXQwUeyEAyhu7bvxmS8wy",
  "key18": "2iepd7EvBBSjx8TKZvjAAbmnNEy3X1fpkBCpU4vaupkA1my1byKK3SzFFvuyC5yf1KPnGvisSWZCVt4b6yWAMQM1",
  "key19": "3fj4sTMjtxrCFbnAAbqrURoQZ6GZXP9BuPxLqjnygMLFPJDSMJwjvt3pmpngnTmEmTJyKdEkxY82um1CQsQfwFQe",
  "key20": "3mj1dvFWJBQ1keMrdYuoZi93PDvnCVo3Yh4jCGPXnLjdyUHNsfTfdwi8e13znzRBc322fQVmPUB6tPMcXXjvMH5J",
  "key21": "5E4HTvSqTKTzynZCtY93N8TcQbeZWokpKRk6yWagtecDon6snXux6wD64Sdcp1yxJxRjRQLpQCW5Hkd7uzF326mD",
  "key22": "4PafLeNKYwJEXzo27wzvdESqLijGXbXQ6nRpv9jCKxHn59R81LMESRJ8TxPq762MUAnYMMqzvLU1oXiu54rQ2Hw6",
  "key23": "5J7hNnQ19uV5jhjmTLj5oQrhWJ85P7BG6wZkkiScoGmK8v9oAAXxfRAXCdk8Lfc5nFNgEFjG53RCmU7RpBGRgwDe",
  "key24": "5U37XBHxy55ZnWqzsNqJwB2R3A5EaxBqPx7yBoW19ijjSErHi3VEnf81LH8K72VvefB1BuFqMnbAJHb9VApanVRu",
  "key25": "QgAT3t2XbY1eeQuMrxp2CnPkkSSXkyrnBedgLnsqWJKC9KSvg2oMjQSfqZUxpc8dyXyAasPos14X6sJ2KEyDBEw",
  "key26": "4AAUQeJ1M8c3RLZSPt6RktYDoc8bXu2jghxtj6H5Pzo2bHXpHgzGgWgabojc3rPt8i3H2fBB15K9wqiKgWi9jB5j",
  "key27": "451HJHhWmzNGUDFenkLesFLaZipaBoWKfSfsnmopESkiPiPNpSGpfLkapNN91FXM3esQGnUUKCabXsRwyfqG34CD",
  "key28": "259ze32jy3ia9XsN4YLAYiwiK57Q1TF8bdC4aJdoa6LrYXxyegF5vSNB3jyFrSv6ZG62jr5TK2jFxRtitJUG1jyk",
  "key29": "3Yqf6YsNuUiZMWnsvNzKDqnof79xJbH38TdzcdCX6KZdZXcAUDxT3cou8BhLqW7ExzHcufPf1RvqAQgusZkYigsf",
  "key30": "3we3T2nyBYKLoYBHWoGmoPWQHpT8kmJH29GqFHFjtMQHxr28Lxb9J585JjskZR9FdZLRt7URywCXHD3E3T4rs1JP",
  "key31": "3Q8JKCoibBSz4dBFYLgDgdfXmbmCknkJt28rE1gY3ajT5UREqFWVDQyrEBEpm1AiVF95AjruDCF4CAYkkHqyWxE1",
  "key32": "MQwX2g3aQggNes8BDC44SKvNJRLvzSWi1ZYbU9xs9eUndDZ9f76BSGd7h7Y5GKXPQamTw5difizuwHZHvP4Qf2n",
  "key33": "2G17TJnf6LJNKHRHormPdgMBgmz1h8rcGcTcnhfb3ejfM2wM3cFSBMrVpc4LbhDsbqoHLn9qgPamwfssL8BW5QTe",
  "key34": "XBeqjuDHtzhakVCgMuvWSWTxTXJJWhMywYkTwvuXV2jYXASCtvrZyRz5JxCpAEG3EYfvkuBn8VhUEKFbaNtS8sg",
  "key35": "5QGYF7QXe7LuoJZRdM9NGEyPPSsR6sNzFN2v6Zit1XNtdeFdrx8nT63hmrHdsyDXut8sr6Ctq2x7KFfYPWQK2qJY",
  "key36": "36ovpmVYSpHFVx24tqofhPjvoNbyhJnQjdX5V7K2sDSNL8GjbuBARH3NDtrSnf4z54HbG3pY1iG4yge7hV3zsw7a",
  "key37": "4pXBpetVHXF1q4x4QtNa29r1tucZ7eJbBExUx8nTqBXXPpJvr9VMZQFsSVr1ZVZWeGeZXSLoJmsumibJkCGYiHfS",
  "key38": "49fsX7gcqCZQ7Rhxyz6wWMP8UJ1EZ1jxJ3W1afEZoNxHnYP7EvCaHp7sTQkQvNM2YvWSPLaJQEKTueL9TmVe4sfw",
  "key39": "3NMm4kPb9nzhfBMN4Tu8jM4JZYUiWv9jx9qWNUAQaRbkEY7kyGVgFqxZrjn2QEwU6YuoPHcLCfZjv6sduhpagd5Q",
  "key40": "2s6SMSWF2zVZuLvaDyn4qppp5k89t1DBKKbsv3DSo28w4SRT49Q6VLa9N4B565xgErn6XycDACXvuYics8JbM1Ri",
  "key41": "5fiPaV4igwqp8uKdscpyhSbSYWpNmUfVT41kbM646EWZ5zrVF1ePcp1VndoZ9wfE7s2WDZq6dYYzisjj3p6W8KiF",
  "key42": "3Lv49mMB4ZhVtuPdB2fdykknz5L8pgH84eBjDVMe2GAyx7L6iDh5mmYzWFKmE5fVUQF8JyRcpZCpSY2YWNHDzzWt",
  "key43": "5qnz7STye6QkSF2UDH1zW2pfHpRnZAjB9tNsJGBbVHkoqWMg7eZdKCA4nPCeg7K2ehekx2xEHnr8nxYr7f4Dv9LC",
  "key44": "2B9ehfRhgmkZp11Fme7ns4dKbjsWpCcamVCW9mUucfnsvD8JCA9STUCLVD5N69x3ycCVfmvkBekXi4WmqFYkLJEd",
  "key45": "9BupDE6g61EhC98Lwth4vtj3PCGNSQ6Zu66bPQpDzPKrKPPC2oHuPdHQh3RSEVyJLAHod73wiu9xiB351LhZ1JV",
  "key46": "cEE37FJrBZvPeuTht68uMrtcxYSkFn1WhzPcW14GssUud9NnnXvFUNA2XXQkvWZ19bmvzPQfEojaSAwkjf8MvfP"
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
