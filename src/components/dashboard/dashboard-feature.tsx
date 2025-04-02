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
    "2fkbGyJAvSktspEX9g4BXFViFgYoWLu2b9YKVc23cfgGpE4eg1xqoGrZbhvrUY1fkgjR3Ez6WhKnxifpRsvNREmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3doLCeFtKDcRAQJ5ejCWJUKEZPnikDgqBiWoG9CUyjkAgZZt6CUjjW6kuKHarZaj9WxrMkZwJD9NXcMLyn7RAX2D",
  "key1": "5ADU4LAADXvzfk7Bf6kYc4GFHGK5qsxHnPeJGyKRzTeRJPJaTMpCN5RtPjoQFypnnpfrwq4wYFEnLvmXEEt9yVCj",
  "key2": "4wHep5jekvGeHhmKKyKx2axP24omU7ke69TWQZ6ebWuLZ8wa7yAAvQ9fRF4YaxiL8h7qb2y2soPqncwBhcUycBA4",
  "key3": "2UWZgviSRyuETbCg2nhR6RkKtRdJQzbEExz3JR4T3S6PNV8XEP3J8YBh4ysygmBsAGHwCrzWB8dRB24AK3dbPMaL",
  "key4": "5RRW66KV8rfqMU6AKAL4wjWGXWU7stV27wzx3ii2vnKj4dSEjbVmKQkqG8TEFfLbjhgxXb9YZ7eacRiAGNcm9fS7",
  "key5": "36nAFk6ZySLnQgwfDyyYoGi4wHzPNMrUoAgCQoHK1S7C4VyWJ7r6aaqa5kYnKEBjvF5AUPSe5NDxSYu62h9SB8EQ",
  "key6": "4UJUXZFfEMhMC6ADS1US9hPWkAbvjfe5FEXHZqeueVQHz4DiVb429YbE6KGeKBBq26LGFBhHxY5545y2pjM65Ef1",
  "key7": "oKPoKFN6yxoDHGpfwMzN2SUSTpAqfj2UsPrh7HGkeai6V9NbwY5oN5ACfy2jAVZHNmmt24mmzdGjyVAqmw6CEoF",
  "key8": "4Qagu8NdpokR5vV5cx3rQxdoThPobVFoGZk2wNevgCHDcVNZSBXrm8d5gy4dC9z9yAE67RLDcB49fLaFdY11TaVS",
  "key9": "59CWsseGR5N1NXnFqfTk1CPkYjiSK2eoC74mqD8hLLRGuY2yLPDiaaL4cawbfQx7WqjpDH95S9BurFA5bx3UhuYQ",
  "key10": "GE325C5zGh5nb1DyrCH2WgNPAjHyHk64wPfDX6ZcMuSbX8EYL81wxEtWNaUvTxBjfMZKdDwLi2u8WmyGSe13sWH",
  "key11": "5Jn53mHMWrvVPjrbEMnGniRy1picGWR4Vd64NiyebKCw5YHPeKHHcqWE2CnhXzynYiUmVaEVDC6thgmq79j4C92H",
  "key12": "1h42Av4KYU4DKr9neLMkYLbf5cqQaUxQ2fFqD1GvbUG7YSmPRyi8CLoQd59updqqyA92oqueXWfNkoib6ZfYhxs",
  "key13": "5vYo3AN3Md1AbjguByMqTtyyWD9kzWfufzKxrVVWJbQE5meBHRe7TVuybLbcWEWL3v9CKV2T1UjLmZC6zbCRfwuE",
  "key14": "Akv3rgMkT75jr2obtStUimYso51a779jZsbzHxTaPigAZzYBdttmRDkbNGjUk4dwu5wMFEdi4nTCiLaLWhBcyi1",
  "key15": "5JKQtK1Vuj4g151zgTS4qDyuS6GF9QdPgcqwSNfe98pPuWgKy6W8QkujeNCLzchWCGJcMEQB3fvc3PkVfyjsopZz",
  "key16": "vmyBePzftQKpgjNpFX5qckj4ZJFwfKCFvQXPrrZ3F7rrWXktCeaNgwbxEL2nkdfGff9TsaNF8cERFwbmVSqrycn",
  "key17": "q9Ve8udLZExCLB4Skg1Bz91DmubmvfpSpdWquSA9z2TVyAia5j3D1rNg7Ld4rW4Vsokgm5C3EYcVKZ3dXUoijzp",
  "key18": "3VWGhK5wKiiEwUh4NzQNhRx5h1KptjzrEsnJh5aR5CfdkHdhXXdfcq3sVfZ7C1889CH8Q4e1VTkocNFtwmMc8mxx",
  "key19": "3LZYwSzVgEqRj9qL6WAq5mmY7ww8KDfZGN9hE6bY1qUf1EehPZM7s5c1G31o56dLdyhaVKa8j8CZeHTdrjcttrvJ",
  "key20": "1265LDoMAH2MQzKXVB3GWJZtsXFmeUWeTihQuGkXLrmEs8kPqPsHN8P5QQ761aA1WCiaY9tJ66rzTmXR8vcs7sbV",
  "key21": "2gyqyzLSgEnFJe2VMSSUeWCPYtYvrW1Yz9i2DheNUGEXzNVcFBDkahdYR3HAVuBsFFXGVhhendAAxCCmCHfxvR1w",
  "key22": "4kLFcs2aeLMtGM7kAG73cmkAekn1FzFPwujWYKFyAnzyWYRDhMwbbubuHKw3kykbA2Tc2z8Fh6C1yzFeecf3yn5j",
  "key23": "3oNzHj22UPZb15jvUezULAXDdB84dYVk6JjorT8ViukjG4DZRVyrARU5T8DJTbrVgYrmSwpgcekiCBH7nSW2rTKy",
  "key24": "4Gnm2qGghX78muzc9fMvLndZJbmSHSvqAmGVY5Wag7arEMotK5NES9kyyhMTwmQy7VFCRGg3srFP95yDhmHqBZLz",
  "key25": "USsAPAVXdSjS4H51wRmZ1seHBiuqJ41CKMydv6ZgQpAinFq7d3oNjphsxvGYvozrE3xpf1K7CiPbEMeBNaa2uS6",
  "key26": "3tBKZLxUsYb6BVopFUdpQkhAHdNby99mvA668TqYd4wWvoaWQGvjDMHiDpxN49oCt1Jysh3TC3j3vL6PJcLxe3Dy",
  "key27": "gxRSwhGcGQioYGnSK4bwvWNmPyfATz4V3w8A5MgVFpKTajKy9C725M1tVJKGXhdwSXgNYiFERJxvoKXu8qwL6dF",
  "key28": "34WQyWh8iewtxFAVjjtJiHaMWp1GwSreDfq8q2Rtv1hwTys1cStHRuRVfwwtL861fX1jbasgcqx1boVyb7jVYhM",
  "key29": "2J7H5kQwMcu56cX86cnztNHPcWXewkmsfnQbSV9BFhmUD6vDzHgixqHR1Wac953E7F2tGVZ9rPGH7LkZtX55XMQT",
  "key30": "27cKu2kEcmUhExdnzjKZ7tjLvaqLPRBezBvfoYTwdrjLRZTATdWq1AewJswBgy8NdimJShLDuFTRKuBtzqWyeFgf",
  "key31": "5BDbvxnGLYbqurBx1Ypzx9rrd5SXeYoXoKBShVbXDqjALmnvSJxMiqb6kJbsGQoqAnfScRiyKQ3qtHaQSQafNeHv",
  "key32": "qvzsJVwmMHtsRPtrbknvavSE3XAeWCTzX5vKkvL2n7xNxFae3nSCnvBheKAe7o3nMxeWXm15kcEnVn7hhiU8PuK",
  "key33": "3BNSLJwrsJpS7UTZMrvcECUt5GevPd1XqYSCukSoq2RjYmXF23HHjFfmmTQ6t7NzrSQgs4ZZ8JJ3VC26dHjEJf8",
  "key34": "a3QVtzCMhcVDL8XUXxEHE4pA6ivabwSdkiGmSpZbKKhwNLxBbRx7tFDkTc78R4F4fwW9bWm6ShJhdniFmgDHZL7",
  "key35": "4AmcvHpcqFf8UhUCjaD2PpwiTy1YCXVzqNQa5pfVkDw8PKztd8z4t17iuhB5LXm7hMkdsYnjRoNyGgniU2TWR1xt",
  "key36": "5eYQDxoaTaTbaodQwcBhRVcn967iJ6AuDk2T8y1adLo5u25V3Gjq6qLzSQt62d6tEwhiFhMVmaAN2CXc2YEdm3us",
  "key37": "5LanemmVxLyKEGk7TPfPemWfBxGnwp5tbnmNj2fKrPofpMD7Vx41KqjefGGeTeyRzurn2M6TKoAk9cR4MCPvJxMt",
  "key38": "3yVFR4jwHQQ6mXkcXV5ex8DYPwsEMS3BdeJnKoSuNvL2DSXZbtxHjJmoCfqYjeTcCXzY2UiXvpvh8wbNUQcth6g3",
  "key39": "TqM1E4Ct9otp49nZC3dmdQZqYvEcM31dJWeooLujii5Cs8q1HgU9RErr4FQqGCpetgEwNt4y9XhnUe6QQ9Nexr3",
  "key40": "2PBHmJ2qTRnYZGo5pa4y4zD5nxiiEE2StEtScTPwcdXByvkoE76xuY7Fjkrs1kgcTCPm4sJvdySdqcK4R46o9BPp",
  "key41": "miNqa2PJtmz1qvsBcTadm6p7xEChP1EVB19Vu76r1odmXrpAbTwoWuQaSNc1Zqmc3BpucHuyzMzeNWBjSNW8yJ7",
  "key42": "44QrygjgszeroCeg9Ep6BskAu1NcBvepgKkh6Q6nn5xQtVZTTT9KzrW3HMNHHWWAQ7t7uFLZbYxcvMGeL8rJ2Hb6",
  "key43": "5UhEPsQk38CnHTikatWC1iL69uAecHn5H3Mn1eodZ94XAHJnFwLMX244YowLue6AjjqpmbVWShPwJb7HTqadM7B",
  "key44": "5yX5rM1qAX4Kg57HGpxjtB29ZLZcAS7CLFvh72PXZEeHF9JpsmWxzZbJDRXFCktF4D2JzxvFrc4uU5cToo93WmB1",
  "key45": "pRKjrocSEaLi3vR9MNo6PCKEAGNWRgH4kdKz6qyw8NPoZg6CxeWwuYrg64t9cJr4qiMpKxLLEgXDQx27VZTc4GR",
  "key46": "2B8r9B4vvGCqNQzX8Au65TTWGdSWiXqAd114LG1omdSKJYsiwvVQn1AQepy78Zkr83SEhaYqH47zeiXb8Z83rSKi"
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
