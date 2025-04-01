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
    "2YXSGm1TY2WRvenrGQqenovrJiRXLcBvaov8DcmDrTMoj766MACMTHjn6Fgi653WctSfmakCcSpua6Wfj2zBTUzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3djqPyHWeWwhcu4D1FNz7S4A2KnPwxTjmN4uav7P8Wt7uMn8EkKEG68UyC8bepotg7We52Tbp8ojHiGEo5ZTfXBn",
  "key1": "4XcK1QXCVcNzk44SnbX2Yk2wuzn2VnvUnYTLFFtNENF9DuZJj3DKDfPtAmYZ5HsbFsNUfTv8cgrqbo6w79bUHHGt",
  "key2": "4tFPMz495f9iFaisVWJF5zRJLgWrown4tJAynBeW6kfQumXiBK5ug7CwvPs7v1dbeAi9XvpGNRgj7YAu5eAzoVkn",
  "key3": "66KQKUptTnqFJ4G5B2t31kBjr9BfVJvc3KDrXx5suYLYowG4w2WbirHiDyzYhHpF8qefgdn5ohANdBHTZPGA1Vgx",
  "key4": "5syBXVkLVb8oscsbCyn4tAQMA4Egzf1BBMMskKUjf1TB2YM7cAooGHg1GpJXbv8t8CdbnCHD6TSuA55dNPFf7eBe",
  "key5": "4rWfHuhqgYf9UqMbiS8z72EwmTcrSQNF3N1kduSkd5KScjgPmjQ7gdApPTABe6k3taeNUvUDSafay8rPu8J5QXT4",
  "key6": "4NgfGg8SWdzxt4ftkx6jtjuqZuLb1vCV9A49bLRDTn3JFBLJ4D2u4GKu9HaBfHnGdXWK6iFWdwHD48ALKvLvFS1G",
  "key7": "61Fbzvbb1tpRpmrKvYHGUWgsdWjTiSMUnFJrQCiAu8rbaPPJFL9RR9dwmQJTDDjX9ES9JiL4ZJGXpee1T1KULjcX",
  "key8": "7GMsadFeYePhTCDazCGnnCQLKS67t1KWRPhTosyzHwBYud8pxGEwCKFCM3a8rzKyV74gcjBoSvD2Ak5x9j3Dha6",
  "key9": "LGrAT9SLQXsgfzu6CnjmrX1e6UwapTW4BMZujFLTVSwbXs15WUXiAH8hWgWW2zBkTNfQJdZCMTMfkyjYGkHbGYn",
  "key10": "51kfoJdGxxC1169WSvE8BdVadRvtUf1Ektr3UpjbhWcqpKhwiKmtnDRoxQatfqLyPYe837P7CuvBpSg6yaTwnRhH",
  "key11": "2LtK6fz4Z1wQRXHg8t7hebtqj8heb12RRszWtiKaCmRkFMKtBCPijjnjfPCLKBRZSjwvCwFztEcs91WvMZAyBUht",
  "key12": "3exCBrMnp3Gws5TY19b9pZdLhGkwmvwvAcSAyMSsrvgxjYkyo6df5adoPxDPXv4rCSkDXX26XqMrAVvrJpmt1Em7",
  "key13": "5JdnwBbDwN78AZNcrU6Eru4TewEzTbhDsTZzEqqKm9EEfCGCKRXz95SRMc8BZ4Hp5upMaMo1ni8SecUaoeeW7V7P",
  "key14": "5Mm3ouiRxw42Pgb4Gp7oATmRNzSgKcfRbSP12reKygkEHttGpJrvTsVQA3QFVvSusCJ6ZJtLfyEXJzhFb352Ac2g",
  "key15": "4BVxHXhwDanDWVb7GGXdYKiD7Pww7vuJujsh5QUG5dcNynUQ7PouczYobS1QeZiGoamSLuCFHgn2NxNB5nbq536A",
  "key16": "5VoNWatYpofNoUvykJmo8znvQ5WrterfGqBYWqenzHF65CXEAMWadMM5cGrWKMhcbBCopWtVyktax7cpXFQNiHS9",
  "key17": "5dTWiTQofkMaWS8CgkN13RGLUTW3pLaz8wMi7aq7PeyfScD3xGNvdbhYE6VBTb54jF11vUtzXqnmWv44fUwcmaRn",
  "key18": "3XQdfWtRsghDeFfmM7mxPAEAPMSLkCFEXvpeiCxVFHd74CQ11DUHWnqo3WR1rBRV9eZUFZVguAAbPSsuGHyTLxc1",
  "key19": "4TA2gcHPfJN9UcWxBHsfR9MM6uXiRZsL2WQPPeMU4AFFgBsfXRoxV39r8TzwmGbtg8cZLHt9V8xyFzMLZgmxpmrG",
  "key20": "3Yd2YqMv8d2istk31yjZQbXLW52YvePJVAdSUpt5JvpsuAZiFJqr9mJnkgbQfiJGY2hhyCBTWEpftvU6bdv3m5sz",
  "key21": "Vb8e14B9Hjt1s4JLffFWUTZEZutroxhwS65bPexoirjnsjLFWb23djCxCv9rYu18V1SR33mgWesN5SAGQBLNck5",
  "key22": "HkyXRgqEtyfM2DFrdWX18uU5CDyXjHxRZ4P8WHabMaPxYSNXQC5hequgKFgp1mQRJpnbUWFQPBrgBQYzC5emepX",
  "key23": "5TDmxvtm6VZuy8voJEcfqdxSRhNsNJEfPEwhxTBTSKgM56uWBoxNXB5vPXZdw8mH9tuse9nTNkWpHk6kvfK2o1Ap",
  "key24": "48XVEJng8fVzCH8VAsdqLD9eV5SgXedGSCjvi8C7BbMV8YnbKpS4E1hY7bwt7oDQ6go7MCa5URDAj3xPTu3NzsLm",
  "key25": "4UJn7YWJEYBjbP6F2uHgJaEfddrbAV5NX4PhuG8TLN8mo6GYcgqwihMfCnfJxQvyLCi2ZgcCccZYnDXpQoBMZ3jF",
  "key26": "5MoVv3UkwwfK5iBazB4FirLqH17Tn2Zc6b9EbPe28fX7eXXzxcsS22Mkz6PV4ms6DNq3DJMgWfpYW6bYbxSvv3hJ",
  "key27": "uN2qV9PxdGnCkM7tabPTKRc1QR2nj7PUC5k9jrxrTwnKZeWBy5dA82oAYUUsApTRGEa5SRbqYrphEiXhTSJrUQQ",
  "key28": "4XkgvoBWYGfsKdFcP3AWqLdJTjdxeW84vKTyCxbLFNhCu4QmKMrzkTUBLBHyAPbhQB65GJdjkyRKbDhNBdY1XQ7Y",
  "key29": "4jssDGVxFg5DR6HmQr7bye3meQZqhFJbUXTwTHTSiFuWPgXio448iQwyqRyf25AQurnMKF3X2ErMLqrRjsE2ufUU",
  "key30": "5vFWxVNDyi314ggURZz2HYfYyT2XYZXDJMjJMffGHmfQEvQqoqJZTtxhNJF6JzE5Nft2U3PEvcEuEWyEMV43xtoR",
  "key31": "3JgokZLFc9kjjHJrxcJFDyy89XERMSQCv6XZ4KE3i3tERCQSCQfNePbNVdAtpk4eVNGNxdETunmTFHKreeL5Av65",
  "key32": "5wTMr69bobC1xtqjAMhzMieYHgDMc5oXJevj4YpFuEP5cTFPeKjBHSwaU25dX5uBTWp2gwvGQxSz1AAKVnmBhMHF",
  "key33": "3qkXHjgGeze1NvUfQmRCZdVgdicnuojJvBjG6DUcBAXVpGJJh1TcHx6EQecVSXyAg3jhzHEgAbRusRwbNjfcAx3v",
  "key34": "4Tj2E4KqQDHPknUAk7aoQsDv68jkdAEFaCTviB1BsyYSjiyWu9LVDZY7CyvENBmdPpZytft7jC5rsJ8QTCggsRnd",
  "key35": "3PRyqgHhJTGhS7Z1R82ZXvE7n4bxkhsvyZLmdXQtLpi6QcJYD1EFpA3FFzHRVKLSTE4KjaZMP7U24RHDwyJkGJTM",
  "key36": "RrdtneUbBvBbWgWvgXkjQT6uZWTAgE7zN1BAKfRcGvaC9o4CokRrdoBsrbWcwasviVAWERwzKntWf5PBjhUdcM7",
  "key37": "yxSX2qBou5utsNmRj4XuSSD7x5WRxK6mgTJFYJ2MKH1mv2f2cWC7NZvhcCPHzKMyqMNkVLKKLwsSv3iMG8Z9U9b",
  "key38": "27gqcWCHgDgmCruBd7GBfeVbjm8P2zTYoS3m613uPhvZbRARgLJn6agBsfdC9oh4Ujmys9UE73Uk96yFUbBRAA8r",
  "key39": "9sFjFrqUMTDWesW4FAd75Whga2fX8zwEmDrFFeK6vpimAwmb94nYuVU5ZunX2ELS6TLS7jWPoeABDPWUfgcxgQz",
  "key40": "5vhv4DAjDkCyYqMQsVJVF8L24ru2CwpJXMjys2235iW3GGxWvwb6hUMdkRoQz3AWUwFHLoH1W7AY4K7KHjXfUg3M",
  "key41": "Uqs6j6QMibfvBYNkZQK41DYRQRbk5n4MmPthQgJF24nFNANoMgo3VQLXtCi3cQUf7jHoQGihrrwoDSQLioYdQTn",
  "key42": "5BfeTSQmYZfHTKJGy9tWu8LCc1CYcJvCFY4iUV5s5H86mWoYuagZkdNfYZzgvhBCZPwxwuuTAdfZwy1fEExCc7sd",
  "key43": "4VDvfJZSmm6QAdmqgfWV2oKtQJioY7KPY1M8RYpHx6sKAWeoBMjwDeH3vqie3WaUcfMCnzgykCtpJyfBmC5RoSBS",
  "key44": "4aJv7ziGuaPWgAUpJEjicomBRYj9D2AjGFBYMw4FNpm8VZPZBF8NUDwcQ1JYEdcPt4enaMxNAGKQ2vVk5pt8Uae1",
  "key45": "2qX13rzajdd1YiRbLzs6kjfM5GLi9Dqsjt7acS9sVe69qbuo9VTnRTsqrpgfuNS8m88iuxop3958TPDX5ZeWGUot",
  "key46": "3FAedfoQZ11ML6xtHfF2EiFqVqXCV6FQ7QenQU8MxX9k2d1FPV15ca8CaGkSJWaxLFv9suepZBbmytqA8VUH125M",
  "key47": "237YaTiPwrnNYNKe8QTBacH8F78eUo1yUNTg9UgsnmrJcBGTd5PytmHWcMRkWi9JZ2oK8Q2o94frFM8WGbKaQSzV",
  "key48": "4cShkuyK1eHh8YQUdYMPqUeTpHZXbt88bdFVoTbiZQjrRvUW16EHutgSnnQrpHDPMxdPChCVzQKdY3keDxaHeMMD",
  "key49": "3WcVSry6CVq4GUhYq7ZANL1cAx5RfxHXyWhs6o1VYbyWntAVCoDtoXBzeCbyDpEPLxVbPEEmtYEdvn7bKBxWrnS2"
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
