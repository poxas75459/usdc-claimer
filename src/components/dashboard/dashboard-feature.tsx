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
    "4Gmjaux9swBRqAhTAGzskS6cPmKwLLgzyWfmrxMzRo24r43e1UoyRFnyEz5LwWx32mtK8hmSTtwoA6oQWw8QCoZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LJCk1bSu9fKFyRqdrF2Zq5xSiJVoAv58WDjkKVSKWoKQZkHTe34WJ1vsDjsg9pi259J3M7NoEJ8w6DSKEpZ833v",
  "key1": "3hGrkrAb1zRhVRTrNkBx9Ds3dYz9tyZQpghHhBBcwhXwf7sim6nzyxN3Vi3ztNpkxtkMwj4HHKXzWaBXjDtpeThp",
  "key2": "5TnCMQSXoAed3eNitVDLLcjbNLRQ9oBLy2i4m9w76JCpJchhKBcEpFWWavUseLsJKdfwCVkJd66WU3fuDFbLy7yu",
  "key3": "5UPP9nkg3UkAwnt4NKSeLtjBpy37wRgiihFgsWVuGknssKY1wzn3ZMJZVPE27yHN8skBc1Znkkw8AWLq2s6stk9J",
  "key4": "4bvZ6VdGfVVi9yzdBKa9Q8doYEEVcGR2DYm3tz3pcCqpgPyxihizwu5oFC5fH3jrFehMgDwJA8rjxcMJ2MnpJW5W",
  "key5": "67KU2KipZKwwstvYYsHH2jQ1iWFNgZ1gVx3r8UikX8eLdYHcs4dVzuB6mtL5SRcLwF9tUuBheczNKa3BpV5qnFPP",
  "key6": "33Y5TvzwBEw2UQKMgDw2qA3ZVLZ57d5rqRnuNEEGwJVtU4UPjGZJyXKuvcVbi5TMCVBexNCAtHr8WLgXmjj85JQV",
  "key7": "2tNPE9Xate2mg6um3KsRGst4hTF2m4MtT8sWB4GfSJxQjRniom6K5q226PTLfn31cSyGszqvSHXnZRw71qhX8XQ4",
  "key8": "3yZNbYnTmaQsBDCnYzVpZUp1a4bQgbQsbh4WRNBaPATCvjMq4jzJH1kxzVHxq2Xok22BM2i8YCzP7v3WnqQ2D7ta",
  "key9": "2yyRke3fTKQdp59tDcrNvfSrcTXgrze5p5oHLdKe4TJjYENP2VHNMB1owZiyGJ3FN54NUQ5c2ny12m3RYrzABRdY",
  "key10": "3DFdHaQZSvCzzvdMQx5fQYNmyqDK8hveaLTEQ4eWXYmpv1sNSA2ETPDZy9N41fY5xMD38XSPrsDi6J3UhJzrFAJv",
  "key11": "J7JKEmSbR6S7Snzy7WuNSyAsYtpfc8dxHm1Z3ZkZbi28yEEUg6onPuhxRCC1Sa4zKHZqLA4RMhdzgLgtYejyUnn",
  "key12": "4CPc6bwJqtgFm3UQLYSfKyuv9CqxPKUMSMTJgMjacwcLyesMYJ76xHvCcDQgyiGDVDgDFT3XPS322moysy3nGDpr",
  "key13": "3fkhvzYaZVdqS132utKsfcQLkHQGJXADoqGSA21HjTTQkYhmkhKtbtjA7UyxHUhgPXDdZLWxNPjgZnwZb3FTFRpC",
  "key14": "5eMjyAbas3SbCcUr7VdL6ZFUXBCg9RWWnzu5QUfFMXSdmF2tNCw8vWXTFxDBmLz4Vs4WkcajBREsVxJg8chk113R",
  "key15": "49cq1andKXGhDW884KyoZ5xZ5LE8x6vcwfeYYP3gUPw1FkvvgH8nzDNkHK7GXguBbhQePMGdN8AQs2aU1pkQH7Vt",
  "key16": "4SoDgvJ1Hpdac24G9CyibZztP8WJGNFqkkeqW4DRFdegPzjwazoQuY9ZeaxZHLGtRupwNqYo8SoP6qrJapGWzrbE",
  "key17": "52twppy1BJV7e13jo868y1poEdBKBQD4YsasuhDPEk4HqWf14ZjvwgN6mQtktntQ2vQyaFdDnLWWGzVVff6TL5u2",
  "key18": "3LGXkMdQL14bJt9yJLTrBvE7jp52dBSVQzdRFhcTyN2o5msyScFwyfmMw8oUGFcAi6zV42bWgqfpkZjH1GJCdBGU",
  "key19": "62K9Es96X2eqJ7Lw6VdNwZkijysik3bJqXiLdxYrpkHWfvXwsy59bq9TPuQnJNihRH8VuzfK6ddJTSDywFKrqHpP",
  "key20": "26jo8qELarT4c19R7KQj5MNWLeEax4bm5GqMvjpvXDyC9exDrgPXvZTojxCxyYJPNcitxchnynoqC1daBFthJ7RN",
  "key21": "4oBTVeDC6ShSdQUYCnega8QpvZdKFgYALh1fHLhZXsCevuQPtBHdzMPuQi2PPPS9fego2EurCqUEHBs3eiMhqSCt",
  "key22": "pcDzZUJNLnWLZZDnxoqV9wFvCaQYGTHMVc92frQSRSHbLFs27G3wkT8ECet9BwJSWU4Rr9igzWeRkWWMDQ6hcwS",
  "key23": "3KSs92PC99cUPFM14PhprLjUJEtHP38ZxAdnByToBAuNbcoVSEZnA4kvP2E6f1USEeGw1P3voXqMbdEeq2LBRg6W",
  "key24": "3qvJVqzwcK4tyg2CEfLstAZnLy7XckzH58jRGjBoZZLE5EqUVgDoFNz8AeiNev9d9oq5zfZf5goycuVqGhUnm7rC",
  "key25": "23UjNkHZaLdJdiPF37aLyGRzNTmAbhPbfnPVptF1TbrcEaQydGf8qNA3KxDSigf59VimAC83oU1eJ1osiLGF9Mij",
  "key26": "J5rPkoACH2biDojPZYAYpn8f9rzSbbDyMCzMdW4xY5YHD35TAKYjBMHTj9gyi5Gq6V2a3dK3zsWaekNuE89ku89",
  "key27": "2jvvsmge8Mt4UzqAXmJsB8feiTjHHzS9zhup3try5TtNSLLiVpq6ATkUCyMVVPWxLtDcpvBxyoS3Jn8NpiMaPGxW",
  "key28": "2DDufmgM1FGLwsE5xuLnGcgeFBeredu5wujDfPtLB5Wr6TQeC7P1RbbqudkPxJtrQ4KcfLDgrwwqUHz8k23Uf7vs",
  "key29": "5ZurKjixSCfYmMB7fpPJwVM2hAvUnXX4915AqzBQzqvnTKhRrnGeAV94QiWfvpj5qT31CvnxZxaaJAEtMzJryre5",
  "key30": "362EDXDBLEh93fuQ9FbgxnLE6eqYzfXWqSfJSpZx4i7NbiCBMM1DsgdPQAPDqfKwYvL8AJQFZaDXUyPuGY5hDqM",
  "key31": "4xBVFcHQfYf4mQoPTT2qBv76jkTjWeFnMCDZ1taEnYF2whRtZD59gtjMWtS7hdbfgvKucfkE7jxfVP6qfcQoUKch",
  "key32": "5TE1h4YM6GuUmjQ758wEc9TqP3E7bhd619NzgURNddGpFRGhEiT9piwwjZ93og17sLxLrhBX8McfMsh6nLDBuJFm",
  "key33": "2wv3s1nC5ywWYR9mYcuMzdgE4TvM2Ueo6YgGAFZAqanLphRSAWKDE5V13J9g3baJUWRfQqWcd1xJ7hNaVMrCbNo9",
  "key34": "4A847wMzh2NY8N4U2n8Ti3jx5EVw9YAEZ8nve3DnWYs4KWGreXK7YgX1F2ct4RtFXKkPLKfmtkqqh6AJjWdeCHYU",
  "key35": "dvi3dX81yK9La74kjfDzy44jJ7ZECvCCjJoAffuQoMHdxYWXDnwZpMX5zWZcAmoKbjYrhXqGHdAjErGCvqc8nFc",
  "key36": "2XFCiBUCTayBW5ZZXHAYkcYLSuTVdaHHLQhA4vuB7wuCnSSeCnuX84CvyDvRpVGbsob732sjJAMUHzrwFXjAMbQh",
  "key37": "zJMGixkytCZzpvydbsna9tUwwhHdERTcYvEfxojpWDP4DQSZ4jZG5gE13yTt3vRPwAoFqUtfGE6iSgegz58rx19",
  "key38": "2fGwmmP1joTZ25RSRGjBC3uXx78Qw7Sb4v7vf5NCBpmJ2ByqFDCYN2gqf2xeLo6hcDbfi2vtLrRk84QqmLw3x3PK",
  "key39": "SxccwWNQipm12uUkSKpaYGq5TSTnxNpjvPRJmbAoYKgW1DdKqKZLGfsvJ9M5Boh16pHTSo5MsiPeE2RoYuSjyHq",
  "key40": "2QphUX3G6SHr3Lv6RKTxGQcYqGCxrojtuAh1fKpnM84zVKEEajGX5RUCAqtm9wLKn5LoyjZmr6fP8FFRMcH3AAJ3",
  "key41": "RjKNqYRQB1HoCdojEZC87yrpApNvqRgtHPTpaxs6wTLvThYEXD6pnhguj3kzvGTMkuqBuXt9XRTXzroXq6kQDLQ",
  "key42": "4mHHXbB3TimkhHREwahMyfxdAdqAmYw8T4cVT7BezRaMy2b3Px9kiDPkekCCC5aa3krBm2HMNkT8MkftEV4yYCZG",
  "key43": "jwbi1zbpeJ19LZZw1yCkPGAXjPxJ94cBhoZJfgbZZ3g8o9RLeenXh3383nbFY8guMFQsE5PEB1qCRYEJjNHmiS9",
  "key44": "47XsJZWmD9wKn3WjV1EpT6YhvhnBANxJuMZgDdS3EZ5b29D2KgcEMzw3pKF7vfPHEhegwbW7bcXpZLpxjLdP4ZxM"
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
