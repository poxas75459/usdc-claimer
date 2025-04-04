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
    "2QQzrUPjFyNCyTd4vofjkTcRiLmA19wQHCYzAZC9uybVyXyDkTrwPia7rjCvfCBUkrfUFVJFjoDZ9TkKSzfbiPxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jTmcGUjKBJ8nrit7AjciKQutLRvjQCwqNM1wjny6KTbwDKLPwpogkNC78peP5iw2XGnW8kWe5tmE5pDVrtyk6Kx",
  "key1": "5PbDLKq8bmPF1vtTg2BfYV4TXj2yUTAq9eo3SeAzLumx1muNLKZPeuxqNFs8cjitCpESMfePxBU3mXu89tcFS7td",
  "key2": "4TrMBm3inULFd7ZGZhP95bW87vf3ivoqeswMeuH2gEBK54bEHwfEgbwZrUsvgcD1MXDFEWHYABdCuaf2xTCGiN1U",
  "key3": "4G5jNfbQiVimLDxHmn7i3LC9D7H2eA4TS8zt6DboZS8GEDDEQK9A2EaB2cupr1JinMT6XGTnwsJ75PqjZGA2S9bp",
  "key4": "31Mm6JAS5Eehx6ED9pWHKXA8X9A9z9qCFAbYs8W2f5m28U9AVLBrzsKxRhAA3B1hD9KZzaV5PE6k113EAiNztwFf",
  "key5": "5adAg41fHzTivMrmmvVcDEMtnukNjijQAevLACWj2Ktjkzu5jTEWmSaR8LaC9AqR1L57E6ktAiedcUxKQwMJH42w",
  "key6": "4NUXCYjJZq5hfh7MAGpPuDNSNeZvatUfeDGBfp3cbcDpWcFtLzmdShehNdsgu6x6PeioWUSmfiDURULQP2voeEJ6",
  "key7": "2u1LcGsRy2WuPedYqvi9kXCE5DymckSZQua39GCoXSgziDFjCPLff3PD48JRwGiScWSi1QHhZTZLvedbumYDXhYU",
  "key8": "27tT36BZXmsdFYfr61iXLUxcXvZiTC1EtRCcpVzY3uSqW97ZhsyP6Arce7a1ot8ExUusg1rjywsgHi3QZQoaq2DE",
  "key9": "2scw13CFguk1bj3ec5zhHmPSh9QiGrrWGdUT8FRUyQ3eE7Pq4Mf6vWYT1zv2mRXuvKDFW12DKdJMcR8gSKQxJQi",
  "key10": "4Hc55PLyUkLJ3Biv1AURUkeoKgMGS43hWEGwJdDwxnuKJnt32NvSevDBYe2byp7t3v27Fm69iTr9rRxyiF9aUYYY",
  "key11": "381FfAkbix52VPhwWYDcCRMP4BEC7qpnn4qyK5pBpHtPy73WjMxq6oF6zdBHTesKuurZiCVVZYo4XwhcUxK5buUq",
  "key12": "3isbxnWpssMQ8VadbWtLqJCZ89y9tLH2y9qB5KPAu834fRAwmy1BbjbAz87yYbYNKnnwPbpvQNiUGU9rHhVkVAjE",
  "key13": "uAALUyeaXCxNaHsQrc12YuXffAjBdiQiRaU7n2DC6zYrUybwLeFfnF4CzeUc21auQdbMyEtk4bjiYF8Zd3gi3HS",
  "key14": "515u1duKq5FS9ffRE9tT8d2mkdHivZXounuwv62ghLHrz5mH47gzaq74qEbhstXHN4NpWFYrDbiQSV5ZHWrBMy4q",
  "key15": "3KdzYBt6YRmwCbB4h1GT1Px2dL2LDZb4Mq137LedbAV7s3EXjsGKeRjj1Aw36pHeo3cZZwaEhfJrCsJ5ysft2F2z",
  "key16": "2KPTA7BnPwXjAMmdfCoCgDD74RGAYD8N26BF8MQy1c3eMfbtzx34qYG6m1nRk5CPre2z6avJmtsvHC9YoGW8Rmbs",
  "key17": "4WPJqTR4WKna4aoz7FpP66AhyBG6S5U43rsV498RnWia9JUP5qGn2ayzZm1y4i1bPNRC4akEYouHV3z7abnVT7WD",
  "key18": "4P6HkXzF5AUDLwsatZQSD9Jfpg1WT5bRhiQWbg9DDQNWwN7MYUrfcsoP8YjtfwAGK66FiWCmddCHRv6jhEj7D7wd",
  "key19": "4XH46aVecW15pDJRbHV13q2GYkCH2tPBJRF3XpBa38EwVd8FsLAz4omiArHjsHFKpb2iKdUvdFswvHY5pEvdHg56",
  "key20": "5i5ftb1F4bj5NYJGSTLGYnLt6hQWxpmYHjxHNop88YGF7wBYnFsoXPfE5pSkPj5TW35GcVSLniN9qeb4pDinrCFk",
  "key21": "4nLSkpg9Kps9QiEv5oJd3e2gSNZA4mdWXvn5GBc1rZPQuFAPYe4Q4efKviv4AkCz3XBidc7p5A6gFMzgF8ThJnmd",
  "key22": "5Gz9TYd43ijzszpr7tNfvBWiATvwSRRcAeE2AHdcr3oTurts3BjUiyPbgwmJCeXP9fPnwHQ6jNH8rkyqjxPr1MVh",
  "key23": "5eLaZkiwoa9o95ZdnuBZ39j5gAZ4zzQiC5Dvv2YJQPCSzE1xNokSqPKQZ1rzuQMzkGPjt3xMfVpTBcr5UQSqwvuT",
  "key24": "4HpXi5r4sZTVAfXgJ5x8t5wYSEets7vq8LRgDd2du7Pnv83vYxozcL5cbpoHD84Eb3K9Cdc98NY3f6B58MbqjQXY",
  "key25": "5qDCrHgSt3CH5T1zzZQ1GnDPQcGWhYh9VHv1AJZgrGdt71pySrDQR9BbhcUqhV7mPQWsiwRu8pjkkJ8a2swKxmCA",
  "key26": "4aVszPGpdENdDyyRCPU1vLc9YM51q16eZ6CUphpjvbuCoqthkbfTPCvVJpVdsaF9DVCJSQsBjG8FNxqWK2zpCPXv",
  "key27": "3H813bkwBVf3Lpz7yQTBdHEncCmd2g4gJD1LvatXY6sggrzo4krX4fFEcReSzwJ19AHnTrmEMESZF3PYqdRnmQwt",
  "key28": "4ioca3o4xXV6cispwLt4GftMuMimZSkdfda9P8SraCXNHmBiCRv6qeZ8Z6ZhY3v9pfBuR5RhHRfYWn8h6DBYWj3G",
  "key29": "4Lk8Xb3oceWcVReTiKqnDvMZZGhXxPPXuSd4Yiq7LgXmsDnNgQ84PVmLPfb7ZYeWs6e7ftsAgyM12GrB44rs5qbv",
  "key30": "5r54VDfkstUvLbWG6VvhBybLxCMFde2V82YGs8jU8Z8ZMoNptPZDmGyJJERoWtLkr445Ufitbe654ar3ExMzZfxY",
  "key31": "3qqNa9JK4rDwAVjbvvj3WujNsFc8opdhVaSWd9x91YZz8arZXksMTb7JssFG9BdcQUAnVDUUanqqreo4EgZdfwJX",
  "key32": "3DggV8h6BCZty5kGasGvvNTXQPSu4yD4QJLyoakoqh344zCpPVdKiWivvBCaxTmZaqokYGmNKvGYXDPyYTMhedP1"
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
