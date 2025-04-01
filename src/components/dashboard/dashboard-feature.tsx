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
    "2rUNzQfV3iB42GiGFh2tgqxc8SUggoHfnh31hY3WgGTfsWQrnLH56NeQijRpkJsug9CcBr5LKYKLHVyZTfTBVL2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GUsiUQRGwq3RCzP9GFQW7gYB6GYdmN4TVzdsVtZyzDaWkbKwnCzhB8A671pScPwuXX7gi5PYzvrHUyCDvR1XaBW",
  "key1": "apRRXTcsT8F4cUVh2asVwh3SjyMCokGJjsnfHgpyEakXHcThj6X29GovUpivo8QLuQjt6m9867CjF8gT9MWKHHB",
  "key2": "5HNtaNqZPJ9g3VndSbF7Z6omQqTsjH71NvsmBM5iyR6v9EsEQszRQTAHXA2Lsv5LPPKCgYUm16hN8DNn8Ly1LR6B",
  "key3": "2QPhMHQro39wF3qkKQKPuynr1upVyUfhBG9hRzCh5RmBg69pmSyVn6BHUzYMgcJYZaJK9PgGA2Bjqsy5nBh9Tiuu",
  "key4": "5EFLW7FurT4vGMuJ6fSejY1khLis6P1r4ttrqxchPYBzMeCFnYYJY9voR7RihrijFaHMxWhXunuuAqLh3bsFWmb6",
  "key5": "4buGGTrJ7fxPNJtHvYV9x8Ld3JVyFtRa8MB3fHqTgcK112W6SaaBvQApgNLiZSQfV2p6t3xbsPp5hr6ywPGy9Qad",
  "key6": "58EesVSyhTCSko4tKuALXkLKbRFfZcFtE3TsZhodAv3ew7YNzsBgJxgP4mxngUeaCMcFxEfrRLi1MaXA5H2zoaH5",
  "key7": "3iLj9d9bk4o7dLfn5erpKZT7oZgJbLSYfDxH5xxgAZTTqjs6BTqz2wuVAsixjvQctkWobogPRwMjvtg9QuSmNytB",
  "key8": "vJmumU1e3yTDRhSKDJH5Qks7hr5idv2dpYGEM8ru2gP6in3y5V8Gs7JZThhnwBtjZ5nCDa4wZX7hYYdFdnq7pBc",
  "key9": "4ZgU6gDPv5Zrgub1Sfr4h3zuCDPCBcCEgiidF79GGgVNLM3msFA7CHYhnWgs5Zy2AvmDF54VpipwjoHYJLJaaznk",
  "key10": "DutLGthCV9exZGm6zowhNpLM2gPZ8JHzi2vJ8cWRHWA5oizPYqS769qiVTrcPiRbB8N6YZak1U65P9PuxASnEby",
  "key11": "2JzgP2sSN9VnfRoYmgMBuRZh7ubpLAaXEsMbnWzRXeeB1aqKkho1A4GC8qi66Nk3jRp5s255mBMkjmjZACbYrYzP",
  "key12": "ANGnrYsUpv3U6SdCReBcwsQWFygf81AD9X4GYrsFnhtwjzQPkgttFCCkfiEFw7GfVPLwKdbw8yBSMXGM2mA9eJQ",
  "key13": "3ruYNsaFxJQNpYNY99h4v3So8w2Bo6VREt4nSJbUdARcG4kN9HNxWg2gYpkDVVHoL3FLw5oVQChKRpq6mngWfvZu",
  "key14": "29NxfxE5sj8Ah1WEKgQfpSKpcFALGGiASkNSBt1ypkZZ6uk8joJPyGrDyWT5gz8EHQVeztVTUgtT6Rm1qjY8Bfsw",
  "key15": "5S2Ze8WuNAiRWk5XXBvPHc5ciDdKCaru2YN3wW1TVheEJ2vC9QhYgVrHbCWSudGTHWosK95nteQ1qcxHiKchH13L",
  "key16": "35jXXJkAj7v4utSLTtx7mCkX8ot2oJmp1JPicf2APyYvmAs1gJpp5jadJSSJcvV1VjnqkYr9ju8Eg9PsmCUaL7VM",
  "key17": "42rmxKiTSvDF9TvZVFgKfo8FfTvB8YG6s198unx6wXQmuwh8b5EmiqWseLynQSQCGvENqp4d4Kv55ajuTPdM1bAe",
  "key18": "2cMa1yqatCigWSUfZFgkPouhpS68xhK4G6teM7isvR2rhJHcxucuw8qFJd1FhKc8RzX2Gmj8JKAQEdVpDJk2VsR6",
  "key19": "67ZzgpRKQ4aAG8HHWgsCQuUg6JHYbCQacsTKQGBko6vLsedazFd5zXD4X6oh2mYFYGrrWLZ7tptWTDaqVe8Rawib",
  "key20": "49YPaw7V5m4wAiSWBue5XwX9ZaoJwaNwtk21w9733QgYshqZLgxhjradybJFUqUPK9SsTKPx73rVFHDdLdy2gyQA",
  "key21": "gctJoJDGzJ6cnsDPPUXNPipeHmrZNuwJ6WHy2Wz4AdmY8yaz6geQ4VVDCQFKwVc6hRHRvu7Pzb4LoZnFxqAwUk8",
  "key22": "4JBfHyqHBpScCWeHqXn6N8znwLWcNTmZYet5imWduFyX1nSE3cNr4pZ1YPuRGNM4KodNvUKgaoWS1YsCYnJdoPqs",
  "key23": "5SqNxXL4iLVMwRwzrCFZhAvFS2gFZvTkmTgjdT3RynuvLY7PSs1pfHAkjWQo39xg1hTVVWArSWzSpP7zVmt8wpnK",
  "key24": "4pnUnSPrrnNbY6wzv2FgSZJFHQqKLKri2amBLghfz3pHRjo2MYwVUMgwJd6EPzZK4uge1DP8MCbazyLAJNFjedMe",
  "key25": "442YQZXRGHarCELF3Yar9bHBPV3fAV3A3PShhXp9NMFGGiAzrk4zGfBBaw9xZJafs2t8dzi1xYXvm2ya2w7cLLtT",
  "key26": "upRfdE4HXeP39Uty4CAVMD9tBfVrJjNA2ExBq4DzwckCmtuQpnXB8TcyheZvSDQCpAxVEpgCuWH1zHAtAv7TWuw",
  "key27": "5ChKkoWVSRs24k1NzBaNVjTpHp6A9teRA8ANiJhTotacJucmRp3YQKWY57YrJJHUuCPnqsvBVmZBXjNRNBS49mmM",
  "key28": "2YJm6dwjhS1knuJizG2ZjkHwSC2YcbfeZTuxjBecAJj1fLhZm2j2SzPHssbgPUgobeQpQ2RP4jC2DsyZKZF7UfzP",
  "key29": "4KYC98Ks3Z4QPiSJLckSJyrNiue4fAbzAEDxpjai7ua5AMcQKx5JPC6iAnnXXnCjybRwzgTrbJZ23PJokLhsbSrF",
  "key30": "5Z8XG9bywGdPLtTxE1fUcnaGLFAgDYKHtrA9en2BKarjGY32EuGp9B2nAg6wyZ1GpVtnXLTX8EDPsjn951XhwXAX",
  "key31": "SGTDx3Q8A4KbWWhxg7WQFn65Fn6GtakEVxfcnFbPDfx7L83qhBPk6P4buc8cDejPWMNRQHSaU461HpEMyY7zAXp",
  "key32": "2ujVfNJCtDrB9YidwLf7Ha3LsivZR8J1X92SAYfyGZL2LnXbquqUDLsZ3pyiaaQLsEdtLNLEbpTu71hBNLXZty9V",
  "key33": "nkEv8TDzwsFDWAUjGFQYCqppHLxUD1YT8ogB6hrZA3Ds3k8wXheiSg2CtZcLomgJGLnuJwztQKBWeZJ6TMYtQx9",
  "key34": "VkA6zxCz6MNnaQvrBVRixCRsrHcUEqL8v2kHTWaw3ZG1TUcaZ5N924juwU2FfXnbCdp5dv3osUDgFwML1K68a6G",
  "key35": "5Qj4KBnBFemGrE7bQoYSmoqzLHiLwHeBrnF8bX3rjsN2Kh7jPPoVeWFZEzXFqSF88X49YivbZCJi1XYx3xWejPaS",
  "key36": "2dCDgBkDNFHT9fY2ZSzwH47U1dfZLw4PQVsD7DRWKWmnhDkb3wYwwjnEqtciPPuLmEkWdBaH7Qd3kttMx6Qu5x5o",
  "key37": "5gzQNLWLcFNorj6KnmJP4W5teB334PfmKDXNRCnhYiH8xqAVFUHzK8Mvimdx1dpWoQMFBsHt9LhT9JUqXtExKmkc",
  "key38": "3UMBTwvbFUDTv5MyAPQ4tQgQk8JD272GPUURgdu83pJdXs4vHmiM6a4CXwVF3TV6d9gaVsrxiAxGBFkTooQbGD5d",
  "key39": "59ThjDHkqjahnvJqnnSR9o13f9sT8tz7gUZcGNbkoRyVZsj9EGagiDBdZLdEWbzifJCbwurGGbeBXenNF8Yyb9eq",
  "key40": "5QPPfd1BXkodiC7Nizi1U5i71B9opZuWVis7PzFdHLtDuvzWPjTLuYGuKVfGquENdcxRc5CBY5wbwpeBDyENpMQZ",
  "key41": "3uTX5YqKiAy7Ea7MgDhyTL35GUgLeTmPx8kdz8tbqVo7TZRYAvkRqMH7MtFyVxKvvaZYPQmtUSb1BsJmJvQziAJ1",
  "key42": "3iUxtyUAMTkwyg4fwmqCEWhcNHtmVjaXWe9G4qd6gVuCpSMS6HJRr7WE5FnU6BKgLp14R7U7Mj1KExcrGcmr2Ho2",
  "key43": "bBXgKCvhYTHL6qZKhkPocjmJ7rdgfcRh1nA7r7LsmVcsNExYXgkR8jcMq1hSvSETdfd7oFKAD1GeZ2qWjSfw8tU"
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
