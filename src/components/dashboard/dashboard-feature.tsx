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
    "2EZzB6JV7oTeUr2jRoUBXbmXjff2YSqhrxfVGiJKMm12qcSqBNYdFmrUhzpxjZK6XEtCjWAAPVwBThqkxp1J9TsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D8LrR6FNEKKQuxfwdBCAZxz7PjXMuPLazPuT3Y1W4ZPb6FfnbY2BPrB4iSzWGKgac4i3UEkVzUbEF1XbedBw7kv",
  "key1": "nvfz366TJuTMoRWsHL4Jqk8X46xEpWnyc15yXtMaCWj4H1SA6NKCHBKCBbj6RGx8vSfASmsQZXDnf6yEPn7Knkz",
  "key2": "2SoRYeNtbAN2rerwC5CaYzAD31StJBV83JtGv8iXBvESe7z9QhBemChfeEBfKZ84bpJCdRBwwHHFqH9DmiuxDmph",
  "key3": "54CdTKFgjmYWXAi5ikjAvuurxkADRZn64KFPdXTt5XTRx8stDm9xC61UisLGffEmqjY47TqtXY4U7oMv1Pbdgv5T",
  "key4": "4PUGG3kPa1yVTGKe1cV3XKNXJYxA8iEb1HCh7HEoL52ZXWRRoDMprhL7VoVfRMyqhySRa2rmVkauvksgL5ghrEyd",
  "key5": "5TCnNmdrZ3aUXnZw1tuhfPa5SsftAc58YiM58BDvoNsVsTfANKhtQ4eY5HSCmkWdMAkVcvUxdmHw1ebcu71emYm9",
  "key6": "5gBVGQ56ctPvQ9TocVCg2ABoe8Edf3momZPU1nq5dFZQPg9kfuFbPBY1XA1M7KsX6CRkbbxDPC1d8w1rR3dnsUQF",
  "key7": "2ZMTK6KAiaaKDMsVfkdVFWX9KzzeSK7sR6NkBQ52GhPKxGmTQsG5HFHBAFWxymvfYhuDcR2og8dWjsCamBC6q5mq",
  "key8": "3SDrKk1J2aTpCdNeRXqfiCzy35HXDUK7RpT2LF16g4hjNXJ9CGYQP9Db59wHadcC9he4NiN9XgTSpBDCnHXMWpr7",
  "key9": "4GqxmLB59zSFdxowNMiFK7xEYfhx7tjmS9tsnbW99ooYuvaYeUhCe7D9MC4jyDJoEhMWBWfEeaqF1iv6GP8mambu",
  "key10": "2wokmaPQgBTHHZAX3yWswFa1wRi6xY5jqarXZjVxui2w9nsvK9B9D17WYBNaJvP8pDYvBHZ1Z6rTgWyjh7hczLE7",
  "key11": "AwZZ1eX5Y4Ej6uaTBWtUk57LCD8stuMSR1qPPKqY92mcjwjgx3AJ9CSu9uuJKyh6DkfADJD57oNHoQ8pvC3Um4i",
  "key12": "4jrWvWBvihgs35744yyjL6qCs8h36Hy6HAscGKZfa45eahj2wYx9fapWEcTTC9xSCnjTrzYi2d8VsjVW3KwUhCc1",
  "key13": "MLfz8zFe1YbHXkSxzgyCDC1ebMxXaijrCFfAgio28jaKVoRdPMVQFdaGfwgV3JWNpsrRVqx8MhTpMJkQLz6Hrzv",
  "key14": "ahejpM5QT7n1bzgW7SSy2BJ35xH17hwDALEujcaCJcgHrMrTZnsiPsgwrXvgsqXKsULfpRZuZL5Z9qWJpCpsWz7",
  "key15": "5ZAtjsF9sif8LFwB5hqkv45Ke4inA4wuTQ7gpgPysiN5paB7RxfSb7mywEzdWycoqFwCxeQndKmYgNGhAXrxW3EB",
  "key16": "uG8YXJJUvQXRjB8Zsi6ZwaRrGPAuZugrqJvPRkz7ZSKgVcKd6Y8UxcEh34q3k9Qhz5HneHbkQH1xzanKPKJqbPA",
  "key17": "3zSDE8LCrUj278BDaMpktugGAnwPjxKeEEdn54WzHjx7pyK3M48MfMbGM5b7po82ZVK77KX9jq27oYhCAPT3Eajr",
  "key18": "4dLYgcxeFT9Z4KRQUwRjFCVX41aCqRHyAGK5is4iFujVrrV7wqbbvMp7jVdKjhwdCS3gtGVbQ1RbWfqjHWykq3vY",
  "key19": "3c8RBm2sCeD1CuefmrJjvVaQF7w5sNSZ11PHdoawhzKaJsM8KcmwpmJf8NMmqF6rEmsTAZY5fuvMmunKRtazZEY",
  "key20": "4CzhoLLjJiAGMicgpahxmoZLBs4ecdByYUwzLZLryo26hTe3uCeziy4F2qymnMzEWu9htGeAWn6c95VvCuVS63Dj",
  "key21": "2EG52jr5r8kJ2CKBuzwa3wHLv6uNx4Mm4kciKiCYGaRNwZXeig16YMUMpw3XMWSCoMFvHSKNCeDqdcy8chDsiibc",
  "key22": "67hsJ1hAgSsSqdhr1wVi1NYsHrVWPzgNqS46y296d9xGCxstvxWqCtYV9C1Mp48S6CjbdSTjVhD8K5Kwho527DUC",
  "key23": "5NZG8puPcX5MUq58LB7xMSQhndhCD5cypGFxHfsdZcZSbidZ71sQQpKZPd5j2CJv1TyND5f6aEn4oj4P2MHYvyR1",
  "key24": "ioJg3zQnXuEp3QUfbKHbv3Ku7qD7Npopfn9vtPRdSaHVHigbG9PVx32mdQhnU88nfNFnU36aK7w9YA8uEyzSN9s",
  "key25": "2kcuiU3yqojUWqAQ5sGefZ9uDmpWTweFhG4jU3BetEQ7QB4WEFXW1g5gGrVpkWDv5XcrqAJj8umfV5Gn9eSwZ6z8",
  "key26": "4PvJkKy7Tvgvv4ZbMxotmC3ezJk5TYmtYC5sz4aM2spd4fVpPHBGJkiEyWkH6H3X7Ls3BBhDxGsNpYoFoTisv5Uh",
  "key27": "4bsuvUmnACgZtcigPzB9wiNtosfTTjEVeQ1quorm3DeF4SeryzKNeioJCewUxhzde9V29LCbEuug8PdgRU2JPzbL",
  "key28": "2Wr5SXRVRLNjCjkxZhYquUzX5c9SDiRZfAxkzpjX9zHxwPPRcf8dxfea58DdNjQy4ovsgERdqJfoMpV4BLchk77K",
  "key29": "bKJQz4Ur85guM6AYXscSsA8EgCyE7aswWUb2kwJU3T9LSgB91nnwaEW4JRsuaAV4bFCY4T2RcSmWwEWAPYFDpB3",
  "key30": "jWYAbdfFZER5ecJaFqEHjVAAMMw6F9B5z8dEZdpz34rTzWyaSTKMWw7Yt3bWvTaCLYP7frVg1LCcEfHBCU7oq4x",
  "key31": "3gnqJgKpMbKQ8Hg5FCYGmAbgw4V9Y4YMAiFUYLordV4CpWqbR47YZ8dh7vPgiyghMfLvRP2NSWVGXkppLkXTUfnR",
  "key32": "67mGeLZtgyghGgo49Lb84cTMeDd8s6CCv9y2wSyZGSJuiV6aGEoGj9NGcnRViLZWcqoKX1xVCYnr8DLKT1vTLLtB",
  "key33": "4uwpC46Nt4j9XUqiaf1sJP5jruTCpQfiDTePZq5roBBsFXwYW3jBcdAn22CjYeH23eFyQcBprzy1v5aKGhgTkLz4",
  "key34": "2sjgVeHSXccGU2bR6yYor2aw1sY3RBKjszNyX32A2X2mFcs9UE5ZhShVmk8YcRH5jPU96dR3HqmqjxefvED1ZsBa"
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
