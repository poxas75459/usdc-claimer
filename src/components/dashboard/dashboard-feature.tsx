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
    "4PQGWU3ugfUgfjZQRGbTs2KghPrnkq5VgDp1UJFvUDaB73r9qGxB4jmXBLzhbyF2ysKo6uZxzSNSRvqnwtoWimkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WP1dxHBcsM9Vb3cJZP6KwhiMJGbCpgBTgwWENb6H9raBKnJq7XyBZy447PxdFxgV2RqSZedTuPMcMFWM8NCQy6E",
  "key1": "2F9GvZV252JHpaRMqPULZ1iSr2zhA4tJwB7p9ki5vcPa25Nu4VGCJHhZqiurYmiD2869B6DaGgAZz1hiuVBkWyPa",
  "key2": "2EAEpDa4b8rQWocBqNXeBugxLeYT9WTLTKVJbHSZS7ae1W632bHbUUFdzyGDyU1wNrWoBdLWbLP11ydKVxY6Xz6x",
  "key3": "fWi8iFFuDcoxyELC8ZNroeborTweEF4EtqdYfFYmNAEtygtJ8eCK1e3VqXpGJjN6YoSEstk3uLcbRUf6MzyvTSf",
  "key4": "3TSPUQBvLrLJ4TR4HSo8cekxG9uyRfGxyzQLEZveGnW1k2rT9mtT8taLMQstzKGnaSaMFtLiFoea9BngH9z71uRD",
  "key5": "3uMuj1FBdh39uLGGVVvZmsu1yE7F5We28mbAjPgkjwQFwjEx22XBHU7EdpiekJidYVQCSGRR4f6scM86ZzmYzRib",
  "key6": "2T2SCK1rCGrAsydQtqJwvPfuLTLg634ooHynmpX6s6JRWuW7i44tn7DmHLNQEBBQB4fCz6AZS8f68Fe3NNrhe6f8",
  "key7": "2aJwZQqaPR1LKzFUToMzUr1Q8ZEtmtnF9Eewd19zP1vXmvE3QdBUu1GkijZWQsVfuBm36Eq1amYXAsmrfan72CYX",
  "key8": "4pTjc3H784UqGUDhbAid93TvA1r4Rrt7H6fzrQdyyQPGCUKUssSHLVrSHTWTi87qRX4zgYJUnoWkbPdrLEU5jayc",
  "key9": "3Xjw4kay3DvM2NPtGyu13uhMxiLWuEeoSGyoGzZAdVPqgJwBAfSTm3RgvPkGaShJZ3ggaYqhS4JdmM1w6qjLFFus",
  "key10": "5QZMx9RrmBtZc6sn4ADmzffimNdggKiB7UPtxBzLon77bMeB5c9xw5BeC9H8FP3A6tPiNVvzbEQutoa5SEYeWmoF",
  "key11": "2WsJQUtc1kC9c3Npmt2f2ZGU4RD2C9hw4ktDZoAQiWvxb67V5fZDUof1j66Z9t2xyQB43UJn2ZmNsTKrKhGY9ryJ",
  "key12": "3TdTTzSshxcX9arKRj4BzRPnBWLoPbYELUVeAVGcgmaiHLP7LfeAocQgb1mTpyWXArFyqvFPUDYGkAqQrNUuacKK",
  "key13": "2tq5PjenLQMfBRdchaE4QW7ojR79Qmd87TGP5Xz7Dg9MQdqWxreQ2Bs3AUD5jZzqL7TKMmASmPbn9Dcx43wZ1Vkv",
  "key14": "ik82QNXgLSgN3MMqA4rbV8TgdkM13TvJCL6jMkYfT9c7JY5bfFnA8MNhY1PiSn4thjSKvxtWETZDx4hmaowdJAs",
  "key15": "4F184qhn6UKzBNd1imcQT8YvP58924APHsnzn11Sd2hyJ3LksFf7zvD5H9h6J5qJiZm7zysGLhmy9KjAHP2ZNX72",
  "key16": "5VU2GGeJfdxY9MZpp7zEJZTDDekxFyG4vm5Njem33h5T8fntTSvCmtiXXSkfvvShonmJsbEot1tTt9WKA55TZpqq",
  "key17": "5ACxcR6XCKv3yf1eHxYYUezNFikfPS1TBgqyvgtGEHxnjpp84UtxXJzScMQVhb9Un67uevTxUvDRUEHp7FdtyixX",
  "key18": "wYB94kPHtK5ZMLpHfUcVQ7bYvZr5rEEdfYE3NyBSpQh2oFfY4jmeYwjpoDJgNxi8uZYxkSUkQYiVEkKEeQWsjq3",
  "key19": "54obsnPiww3VGGcS27XT8AXmnbvuPSBgdqR1PtLzSGcAeK5jSTseWz3bsZb2Xid93jszcSRQZYAU3sipNr18rjQa",
  "key20": "4XAvvA5pU1uw2U4LuVkamDENQj3Bg8KaVjAta1XhcMtBND16Z4ZWQ7P2MPbbCVw3S5by1M192QSZBa5mKwdjwWWm",
  "key21": "4f6RL6WQpPgRBvFQ2kaAWgzZznn2XXwXR1e24UEtwrzhee2EFUZSV3PAvuDPwPp6HwjKg3phQCszD32ke3zrHeXq",
  "key22": "XVoi4LeFSuA1DnpdeMZW71Q4mPNjvPKC3wY2GXioxEmq8VtSB2Aaek6AiQHwFNv5kk5WACsianLfmChdzhX2fr6",
  "key23": "5kVQMKucGeM53GcQjfJBhC7yNmhCeDgr5Xz4oHAbgnVLMfLtuy7mfx8MKXwD9KWuTEiSBerizbNYYswzGT3aTgXf",
  "key24": "2WehCmXBThubmYdpeHsMBwPLrZMCiKtAuwHFTU4xigDb1eH4gQSyYac2Ppo9MK24qvMrQXqEKh2sXNwUG3gT3NNX",
  "key25": "5Z2XgkTY93WeRsUFDXNYZEoxhUNRnpgaihea8wszDZNsTWu9S4r7z18xtkcALVheeDDXVgFQyjGAUEt6vBGHvKZD",
  "key26": "HDxBwNvYdZMf7p1BdACn1oqhe41h4pYW2CBAJ8BzFVx4mUg2syYh8MdENwWzcRhZYRLryzPfesfRF7gLPPa3Aut",
  "key27": "CVcHKsTCa6Co3Sn3hpizoY2NFfXYpZhz4ScHYuZGJqeS8QaNaed4dZEbgnNxaQkY85L1UnvTpy3vf9UK8CQ19PB",
  "key28": "2MCzsaR4K5M7tKc2fmMGPBA2M3VzXeNsuPCy3NTmXhQznW9vXAioAt2p6pCjv8GVWwrSH7MkQJZHqW8JGnFQ24aj",
  "key29": "3rEV3t9PzBUVuaAmBAPnmDxx1VfB2ETYpk1CMMfUbvAqi8iJGS7LQPpT5i2hsiXKH5rqF8TeDVqThpLVCL96F7es",
  "key30": "4Tr6xgbztZd81ERrns2cFQd9jTjF1hbWu94ScPeBfKCs81RUEWn9D3n3EDmor9UytnTUjGezesgrLQyXnjKRRr2d",
  "key31": "pfGUzVRSPq2CnYyTsK3BCbtzqfgELcpsLNhbxtT9gbuGfjtzfiitMdvXbuHzvFvVPcWYEUJpMf1NM12peBHoZmE",
  "key32": "3ZT3RCeVxDBVFDdgiFgSX2HUXDBMSSajuqSCK6WeCAVAQvQGoSWPcCVGUfns5pNFzg5aHvPVhRAcPoC23sTqdfhh",
  "key33": "3nPJN7S4CLdjajzYRzoJhHBu8m6yhot42qpDw8fCymokqcAnTfyxCarqNS4V7cdbsTSwyL1NC9N5HePxRbqkZ9kV",
  "key34": "4QgiijopEa2QbhH2sSbSrYbMRiZ6eMax1msf4wYbvNAnrEjNfdyjS7bniwCL3muurpJHjZUjGNjUH3voiWVGKFXi",
  "key35": "ZBchkrZtHkdaSn4mpgvkSbE9d2pnp5jLypL4VabSMF48TBQgGLwt1azNA64jg1sSiFF2sPVtAW6JrvwwAxGC3Jm",
  "key36": "43sPVUxpXsNcgJtkx3HmeqEmVk7ryL6VEJQJHtTZNiszPTJb26EHXYzHvNLExcYRbPA4Vd9hrRAA9LqmrXrfFs79",
  "key37": "5nxsNSgPzTqR8MxyfgC4qyKzuCCVMHb7bry56eSmw5GchZy2A4Pw6chyMJ1Z4CJafCGw8edoBcpYowxgnAvpbBef",
  "key38": "2efBiZN13WHaTRBujZaLnw9Y51KugveBp6hgX4fzDEzLVoQbtyVppUETRbM7usqAWhxpD7T3M43SwxcqbGb3nRci",
  "key39": "5m99uXrbGeoEmJ2bRJXjcndD9VPQZGBpHJXU4jUGwrhV1UVHpCQa8pbhjKdYByMDfujCt6XneY3Agip6qxkegKmq",
  "key40": "2V1sCUUTyU1yEc6yBfm5Q5WPgUuiG6A5qURiDy5jBcT4CXfmMV6Ysfg8dDzemDbDiWgFotB3AHUrwEXJCckJ3xt6",
  "key41": "1htRpErcB3PhP1Yb296XGVJfKnwL5qGEMQpjnc24JAK2zjBCjZTH2vuZajEWCmBj6vxxtBs1XCXNEvTc44YFQNU",
  "key42": "38tPRPNv9y1zY5sum2edDy4apGbYhmgvPpyyHtHUDnyvsuaZdLyNf3J2HAMMizp8LpEa3QWJAoPvNxXmMtyVmWNb",
  "key43": "2VwwBHTZ2oF1dyiY2u9w9qEctFaicjSyngEUdinHET1jJjhGjtcKRsWckKshd1LPHvyXrz5LppnqY8rd4T9tzLQw",
  "key44": "5YjRKkpXZMiGTuakncUxkqcpGyhbghkXxUgau4yvXtedmqZfiw57gBy6unfTiQTXgwYkuXkjEdiMhefwnTPGfghz",
  "key45": "sVDepcN5F3a4jejZgdGHxzSR7YjdHn9G93UPFRNXU4V5FGHPVLYQsYmLT91ZPx6x95NmR3DESG5sNFwCHKPqNb9"
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
