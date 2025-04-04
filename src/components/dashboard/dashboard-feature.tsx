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
    "4HjwjroDNAWMQ3AMjZcEhUq47w5FQSzQtXRGqbU7N1Gu38YLpFhGLWabwMQLAAZqcw2fVD4gTtV9fc6QTZ2QUuay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29jeuK9xBsn9U4hjfsEWWzvpdAcTfcPK4jeW9ibpMNCSFH3S9XNzKozcKXDGweroAKh3hqeX9FV1Peahx1Afkigs",
  "key1": "24Ta821sFU1vDHRhLM4Rrts5aeg3aRdbCTrKoaUukCgHkYFLrsT95ksv6MMZoaLS1ZR65GRNzn4ceqD9uy6GYrsd",
  "key2": "opyPojq4fK1ioN53kKCB856x45DKqKx5jxJviXZv9KqiERRw7mGUgrGXE8rgNDRwELXzn5ymzEYDyBJ1P995Xis",
  "key3": "3QkysGW18L8AQqwqa2FfPUMsPHyaHq1dmbcfH7ofJwPrv4e7hSmhAFMP35iuhAnvKimymjp6YLcbi5goAZG98Awf",
  "key4": "cLL9MejwVemifssajCzwUkA2xUCojCc3QmhQDAQWcskPzE2B7NKazVxBdXj5LyPknw3YmQTNmTRb3MiNmane7yN",
  "key5": "4fYKA8x6eaXYC3Ro2E8QBFGP9CDnuftzuPdSjYtZ11MYLm1aEA2mtN3NgchbhCfgdadRFXWWFY7hpEi2mGnktav2",
  "key6": "65WutWTMcACLEQzBYPMYQA6cJgEn4t67TA6HPDcXpgGTGFoYbUVftcXUcCgrjbFeQvz3L7Dr1j1DJdVLxTovEZb",
  "key7": "EAVTxnH1h1Erx56Di8DTnXhNsrerx7FPP6Ft1jdAfkoEFqUBaaMzDNDUvNfu2W2p1kDrXgFQ5pTZ8VE8mxuTJyh",
  "key8": "5q3PxFWB8Rvxo4As4Tag52LHJF5XpGWfhPpHsxhrXPDJDFHSZmB436tqB3MEp2XmCvt9JonKd6xAKqQ1WaB7ZwQi",
  "key9": "5pD9eGm1ruvuUNnm6CaVuYYPZccp3BW3xJuUEk5uxD7tSSHGu4oAz1W1xJfeJ2pXjXtuxHQasPvnZAjek4Pcn84U",
  "key10": "88koTbiuMRjjhXQBMxKmk9YoQb3hbYFSFSPYmCs8wt3y2XqastYGZrFTpaxa9ys6Sc3Zd4pLgrBWZuvWtnwJ9yw",
  "key11": "3VmAD5P5WasaEQVxa4DLHsifv9NXyqqJJejhh2ifNovqC2T722QYD1DvRPvjBsMP7KFxtGofq9jp2hjczEMaEHU6",
  "key12": "5YGMjZvsuqGcRdYPbrVUfgS8KCjfWZ3nJpVmJ3MVvoVkBqJCsQQwFWwdPbnWsZWqdp4kkH4vJwq5Mp8L7gaUmnfo",
  "key13": "61tSm57YoeLACciJ1C4pTYJxcahuNMY3XoSYLNNSJQNmZjG5d9tqD2Afa4d7JbXPtao3P8stgkVsiUeuTZdz7ss5",
  "key14": "2YHHSzXbNo7eTuC8SuAF764YczF7bqYXvGBYG1CDnRcCAbuoCeK6PhY2z2bYu229QyAir3icDiT4qj6eVrZseSG2",
  "key15": "4m5anCRi3qA4c7XpvMBVEjFdVRpNc4mB26UoPnG2dkU7eN6omDDfg7F7z1FewHfRjixzRqQxNAPgpA9NJ8uh7hG7",
  "key16": "4mW6DVbc9Cw5475b6UdpeiMgfQEsNdE5JPwC2wvyMZ4y7HzMi7gyaJW7BHx4miYswjw7f5a7S1SWi1rt6R2cY2CP",
  "key17": "3Furr4sz5AJRrRxCxuSTtbRUjPpvKzth8XKE6wYzyCojjRxSmAuJGHhhri8wQ9gPPno9SpT887VkugJ6QHMftqPQ",
  "key18": "4k82k9fumwzYSwpDi2pxHPfwmSpTKxTuRMQX56Ytkh6gFs75aUxLL6WCyTmMteWWFiB8F5aWmcwVihdxsYXCT9Y7",
  "key19": "3P2y3fetg1YdXNJTGUD9qg8Jk4HLoGcWrLK4wiNwDozTxev7vmwvxnoeaGpnecAnHuvmHBPVbadjhon3jLxaBjM9",
  "key20": "69HDM3Sut6sRNDKVoKpLsR3H6Sz65pTwA2h6KoajM8tjvonkdeVCc9iEcWPgVm7nkv6QzgDfbaU2FkeXTcL6jRU",
  "key21": "K9Z8cTcBx88n2X178YYrBVGZ6SBCh3fHERoH95Jv2bWPz3MgLDdSrin4K5zHHdksxVKGjSXTGE2ZszS5Mr4XYPe",
  "key22": "HYeE2RFPX11nvSSXpUQNGRTNcprohBTRo8Xc5Fa6TySpyYjHPZQV1zbTEnoewPxfqMXLAr6gZEEyTxvWzN4KMh2",
  "key23": "5HLcYQPQubbH6Bgh3hkR64GV1oEuB7jVDM87W51dFqJHLSkNqew16eg4TtJdQCCDZdhYVBWGZEVU6ZB32xu9w8uQ",
  "key24": "2SQeV5RMJMMQf9W6zBQwDygc29iyD7Kcah9EauqrqoZrXP9nDF43ZQwZSrK3d4DuXMRpPxrymFwe5KVafToRBxSB",
  "key25": "rojELHYRMskaqFAsixS3bDTi86Z31UbvYZFP8ax7W57N9MMsL2ff1FHdmASnLhPrrBhuMJyF695x1EUqahnzBAf",
  "key26": "3yFUaPDYubZJVBNdaHnqGtbhzrVY9MiTcYqGjybqrRXiMb7TiBojYkXK5X5tjSSGjDYLkskC5GnKQsQ9rJaZV2wG",
  "key27": "4Kk1pnn2hBKW7ZVeMvWcecjrEupSPkT47Zb4vbBhwfygj3XsAtGhd6nDB2zdwHLLvFKnVucBBhx3vXYEzeJwvVxh",
  "key28": "5bJfceTjqbCfgqsc9SkqcfNSvNwPxhXFBrvvWwbF223sun2i8tKJcFmuAHUwoAZyq6b7MtSM1cKxzi6eVirMa3tD",
  "key29": "5SutQC5NcoKpz9qroTKTYwS9fh9HGKRvj87y4jaHW2BPMBSMADi433oT4xRbB3E6wAe5bZNHUB1vq7Wk9FDrP9tC",
  "key30": "axW3fdqXJtibb2TJNQBVMHL77pTBfLiqPmPWwRsU9ZDj3rk3B3Nny51LLZComUXJJXnPUYQZkHJHo9HtEKT1nRH",
  "key31": "5onc1GL1sRSVuvvdg2L3JXxLsyvdbPH5nuGgfZPdzmzRWQstsaDLKXa4WSHb9LNuUu5r5RhGbwPnv5MEMaE9R3qq",
  "key32": "4n9Rjf9peo6HBkVKzWygEf9ckjworNJ5nqgAqzeFfDm9KetTXx5UGUu69Zw26dVBQL4Un8pLx6hR9sYyTZkrzJBU",
  "key33": "32A3khEP9m4AU8dJt1Kf5jPKNGjX7HFq5vaaasQdBU1vCht5sMDbdha5Wm9QRiivzdVXtZyuwz3BwFHe8cWeECVM",
  "key34": "3UfR36M3mQiYnh2T6nFqdPb9XVW5sWHzUGDPmYs3DZwo252pQhq9ZmBbAxTipjSsrWT728Bt8SmyZXmUdTxGUXz2",
  "key35": "3bvTjyCSmRc1qMyTvonmY43hh3NrzGhVcUDLanf2ti6fynhJg4vwR1LDEP7EoSSVV5ihpMjUb7Ez4esrcKWmcBW5",
  "key36": "4csRTTU1NZwnbda6maoC2eGcgqYdWMqVjDbhzzMo4wnt3bD9avAyvrDeLBpb3JFoCWqYrRYCRNYnX4TBgMYeEQAS",
  "key37": "2PC1J1TPh2qoQC2zwnmrdw1q2KWxGSW16iQR6Cqf3mdL5oWm4wv5v22tSz6KqtUVYVCsAYQpC3spFHLhy7T8aW7b",
  "key38": "5TVppeqcRyvHnDHCkY4jcaNNDCcfKPFcq1SKZ2M5nYARVma5VUiUkFn3wU3jVq6aYH9Rut5xxv1ztTzsmtJaaf5q",
  "key39": "JYq2gDFzWhtACEjg3RJGQnArUMKN3UnZWnz3W6iDZiYWTxsVNdyvM5iMNEv4JBdEpDXeRyJJMfhMhRAjqTLqgyw",
  "key40": "22CWa8efUuFeR79312TSQcDqHKHg8toHWEmew5oXvBsn634wbmY8Wo9XBB5iwcabVJaPnJsT9N9DZPRfh3Qpqy2D",
  "key41": "3wZ5r7xYQEkmAPiLSNwQ8P16mMDTssfHL78CSgeSsLJnLXxCqCFZqnvw4bZRrj6ioiPab1g7jjmqXpN9ySCpkLex"
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
