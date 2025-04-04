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
    "mwuCCmg69omcJpVxfLbsabt2e49xbsTKRAWtSUGfNcQavTqC5YibLEGEmU2isvyEK9dgYobtGCU9k4Wdvm3HbNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TPdQYKwDzeGQeBMs6DN99CNKXQj23sPYTgEYNK8jCibRu5UTAyERYpwTqosEpeKJ5TBJ94jiH4vSFAK3vtpWRZY",
  "key1": "2TfTfjAWb2ujN7xeQxfe75Nky8AYQbSbJUxL3Uxsw2HcxXhtQ4e1oLw52xqEJCneXVgRmNZ6RvX193bnjgU367L6",
  "key2": "5bxoy15PizdmqWBiYqiqiCZnyvyKbFFbWW1PxCP54WNe9LxJEqF4BHrH5dMP5EUvCMy7k4Vx7mR8YATqG4Cc5Zuk",
  "key3": "4zZ87w2p6jN7rMoYTAnWvvoWvaCif6rDKZ9Tv2jbzfRsK9U1czyryrxqGkgbC3LaSsVB5hYehLJALD1qMRfawV5P",
  "key4": "3iUZoQofkKzQMqKnaRJcLe7EUkNsFcjZaEoaZMLGw9AYLavyeNaiyX7uZUkrrNHJ4vUgZzpRzpQNAEv6S78gGkMy",
  "key5": "8NUsfLXFtDduB6VdW3xLFvG5fzQVo9TUhs8s8jfWhm8kuNCZconDhuApnu8FkWRdP71BPK22ERirAW7FrhALYNC",
  "key6": "2XBD2bL8SjDjPcaXaGi1SQWW3yeuLGTo7g3WN1pxcFZYawE1to5URQRWUWedKhayzyHaqiUmZzmyka9jjx76pvFg",
  "key7": "2GF9rbSyE3AfC1ZXX2MgcJhVe2aAidtuLuG34XQ8hPbPPFnnx2Fvx9RhaZocUjA33gra7BMn9RET1UYYKZH3zaxK",
  "key8": "5VaSgxRzYT2LouTaQyvQn2vwKoNavfSLnm7LTjtdNhWzhRz2pF4Kr4KNjdS65E6HWTSCDGQAJcZZBKqyymsX6oNy",
  "key9": "DMSLBi7QXVxAiBpwtDXQqvGmUCfaqDPj5ktGtosDUVygHdKbXoQ7ngUh4Jnox1FN6V5Wr8QsLhwASSA1HjpvajB",
  "key10": "5BoqkXKfS6vtJ39BAgG21brEj2Gfv5QhyiyX5BYQwLepnEesdHe8CiQyzxyvFtsoDG27tPi919R44GgX25SQTwmD",
  "key11": "4BW2K75Be77HA5QC8sY7MjZgNxtBLvKBdeodYEcS8QZAWd5zrqJ22F6UdPeqE66sAp4Si46ZEpT63LweMeQGYUZ8",
  "key12": "5GxKV4mX6AhgjRdgeT7JyNibRa3dfDpYrkLkKJVSg9SHPrMZu1AjtmKAgCGVuJ9cvgVPFSNvRwCTtiPNVhj599yQ",
  "key13": "5dR2XqxhY7gtRviWnipeBjXTYv6CYM6AUNYz95MPpab5w1LuzT1fDHE33snmSFC7ro43r1MRLpd6XDrsnNieS75j",
  "key14": "3q9daQwKmnLzpBFDEAFp3owXpsYs7qnCxg5WcJiwS5b8NteihdmRQtPYdDQh6jokZDuxpuLkxz6FtPTU78KCavdL",
  "key15": "5FigVxTTtUk4nZfcsFoQMKStsa2YvYG6t5sWA2pjp2c8NC9bbR5AZuF2v4LrJ2CkrijR9749UFmmyQ5WtTDuJSKu",
  "key16": "24i6fpwC3EZSzecxh3VKsaH4hSQau35EXDJg22jyq6KstoL98deEfc32DWuWeo36ewnMC91YBMHrriUmeEeV58VR",
  "key17": "3nSsPJP6TU2vcbKPjhj4A26pkRYTpkYkR34eCtqaFkjpyfHmnAJfUrTv1JbfftuYGKmzB4HTMHwT9zPNhyQ7dEXD",
  "key18": "3MHYztXUh4v3hESJbBhjuHfjesM1TrrE4Vr2JT5219oCGUmLwNPP2MhKgJ4Le4i1fJnQ5D3HsR5SgQJin7QjQb8D",
  "key19": "26Bit515q1U3bZdnpRTxDcTRvPUGihf1LMJYP6XW91HZC8xKGjiY4tpiGFeBZ44CbXrxxeYnkaTmCwgE6zrpCUqa",
  "key20": "3JDpFgD93Rykdamj12uEDEvLQCsQCNKCcJ7puppVpiDPB6rYMmyxnryquryoZzYAnr9qpQTRsrPMHcwmfkteEQKD",
  "key21": "3mbwbDL6TqXJfn24yQiawXJK852jmGbiXf9eZnyYbBPrnryNxAtf8tmYX3HwKsUggp89rBZUQxXUyYWuaxY9va56",
  "key22": "5c6sQ5p7tqFc2PhB5BmXhWS8TcU8cBjXF3YimegT3PEHkPx259W2sdnwpzzbheg8pQGBUdMbeLJKoVr7YzaU6ojm",
  "key23": "2oKVxR7W5yeyLvnQhTZzgtZi8o2aNttp4b1Mnz15cCDDhZfRoWxYNBukZdWDhiV5LZvj8orpG1pWqhCdc8tFdX7c",
  "key24": "ZxPEw3qf3hLEsCLcgGvcbUw1xQ2Yk1sqvvGPMdPkNiCjHB9yxL71dnKGtRBrtVC6tSyEc2HBYfevDeUYV7Zocdt",
  "key25": "3VQT6gyMZYqRFBP54fBujcq4eVdnLuPhkqaUc7RHurvLyo6tRDJAD7K5bgtXuqJvdo2PHyxDkRySnJ78y6xMyoej",
  "key26": "sAsjhhSEcSXr4PHW58dStgQecKmJ5wDzgW4BcGoRqgNJRMLdWbJCYwAZV9fooq7ev2mjaguXm1mSrjt5vHbGkQd",
  "key27": "GdE6nfdvVyBvYUwJrmXggyPG8ZW4qEF1fez2Sbfv7BawizmryQKuZzMskbXnCaJnjrphkjtFQTzj4rLvDvpLMST",
  "key28": "2NZCtQ5qsJ8Uz3QC6rEtuUvRQ9DZ9UN2jgSPjPtLRYxHKv7LRfyMHWik6jEt7f1YbydeQUeVEK1xwvzjzbGd3C4Z",
  "key29": "3Pj8gXRx17TPwvABppYSB2kqzHURvpycYMy5z8d8c7xa9D2a37sMHa3uTvgHsttY9dxKkLB43AZNeTqCqmVmGjiN",
  "key30": "5KgvbxKyeEYFn34b8t4WSEw4T8a1U2eJCPdMUmDfTV6xUKJWFrYJvcB4BLTT4LhLYxB61xpkhEXsBryC2VPJHvrE",
  "key31": "3faegv8DT5mTXj4pGCyMa7au9beQRkws6LPFsoHtAs3a7PT77JUCScgdqb7o342hmqXFNhCdwq5J8mLKjQ21X2Uq",
  "key32": "8BcC7ALZ2VKgKPcxCAsgPrvr3DL4PPzMrJUvyX5fcNrRxnMin6Ai9disg16YmduzV7W8ydwf4DTdd8QxAdMN7K5",
  "key33": "2dsonyatXCXDJWxkSkxUePfAqgtia3s79CDXpc7TAxV8Mtt3zQD6xHAbMu2tdCRp6QiXWBjt263LUVAJCUwm99Kb",
  "key34": "2B4e7GiTrwrie8n4imksSrWWqBwDTZQNaeg6UMMzo9B3kEgvaPiMaWamEi1n7oE8BnuZGky7ifJDkwdUosKQKSPq",
  "key35": "49UVhF8gQZgBAWj4ukjS7MKbeYGh2ZcLxiw6KogKAfAp6sLFR8Js63W4wEWjnra23m5rFGJXBXLdyk3MvydTXYYy",
  "key36": "55iTvdPzif1xpJRxsQSkCETJmuwBpEpmuToNhaCPporwQWbFfWG97Yd3WeQNsxaoPebLBuy8WnxqwMb5zytUcWxs"
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
