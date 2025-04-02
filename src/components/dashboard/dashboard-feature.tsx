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
    "2CMwdzw6aFfzA8bxqkf94ejzgWahA1zy4ZBnHf47YP8tTRYYQS4hfbbUgiZGGuZaKcEtEPhxvETUcPa7Jiy4DAEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S6513vgZd1o2yFmYqssNBBmy5PWBjgnfuYYyXZ9jBUGbjPt8v3XjqaFAzzMkWKusDJaTWZarP8KTus6H6kZK5HD",
  "key1": "5hCZWKXynA1FgCDNFDpvLmsmktGFQMGNYSHD2EPNqtReygdETxbrv8nzooLajKkG1XcAA1xKhQdLpVjLvt2rtgsM",
  "key2": "3xp1bSwZKfSehZa81tVMasKcoNAF8W1fRNcSpse7PpEqV8b1Gk2Wbu8Zgd6zyerqwsydgsbLbuVRNU2zav7HkReD",
  "key3": "4oTkudAehcgJHTZHeiro73LPZXW8WSYwe5UtzcgvMR6GmdjUmC47M3rKM3vyQKf1YnSxr5xhobRMrWVSXy6hBne7",
  "key4": "2YbqGesdwQSN6sUY8LxGim1yeJ3tpqVrNBFH8QpXawnrmH48SwiF35jTmWrgCB2QyTcK11fPRMvi7LKaR6evTkdy",
  "key5": "WAPo4MQjfGswM3Rfc6t3JSTy8qXoezu7pYPiBk17Kr2vWkPfkQX8nTJUTPeX8Nket3dFD2shTZw9tyzSXGJ6oQ6",
  "key6": "5yju91uK4e6CFQ1kYBqLNML9gmZrwh6uRYwWBzsPqKCMiuppMMKDAK7XqcTSBG7Ud8XXYxRz9QBK251NwP3jU5nH",
  "key7": "ZY1u4UJBjkcebJ34jpzgbVWGUxMYU5kJUqjA9Cvr1u4riKo3oqmkoWBDwrofBm6rxQ3Dz2WZGDRi3cfrE858dHF",
  "key8": "5EXkRh2KKJeAgRd4uJBWcway8rJr8RpcjPuBEMBbjkibsFi61f69EaegWf7XvJgVgQ3F33pa1K1cTp3rSMazJT64",
  "key9": "Wt1cVzJBZzTmYPJF7N1xpVXfc4LSYRcXchLWXcMTVNZBGnmJBs1wRsf1QAwv5LBPMPmumk8VUxdyTtdEof5foe5",
  "key10": "5XHfnv1DPDNyANvXaT6iqctzeE4DnWkC6i5Fthgp1qUbZRV36NSNab6VCtQjxy3WxctSWxxDXNUZkaZmqgkgQCpL",
  "key11": "3GB36B5aHihmXsfkKsrS69YNAVq1aMBQWkWifNhAwTQBmJSstrxXCABdSjujQxxPy52PmMFGR4EvT5bpR3csicPY",
  "key12": "LbZ2wJevntHcrUoWNaULkYkkYfFVVZCGQsRp2ysCNdgWUeta6jSMzJkv8yw5Xi9pQTqstxeTLogpkDc5kfbE9x9",
  "key13": "3zWvLP1qDK84XD8zRqaqeb4A1rS1MFj9ubuJBeReaRn6hDH7F5CmiH6nqxFmk7ykccVTYGYLhF6wCn1N8z7daHEi",
  "key14": "3QuhiBZg3pCmzudor9xw1UKMaFGB9gKkB5kQ4UsvRTNvbHypHzeKRFQ8NwYaDKEre8gqnVp3ssYR2bmLyd9GA33R",
  "key15": "2B125ANGnizVNDFXwT9CCJDioyimsDcnq4LyfcMaK6YoUytHpMkdXa9CM6XT48ASzYLbnPgWSExbDZFGU2uuNJTi",
  "key16": "3cGqwrnH1UbWEc66T5qYrzbARddHFPpqg2PYUAno7CkqmAaLEaPT4tcbJC3wKnCKkMJnqqXrEEzx5E7w1WGJANY4",
  "key17": "3xWPsoB9TLAuvK1W2V87BFkqVUMbojP7zXxw8M3DVzjDk35YxuKg4fXJogBQNQY6MUuZaYosm7KotJyepF5bpLLR",
  "key18": "Rgx7TkhEFui2VEE3qqHqEau9vJtctnJ6GKtWnHTY5z27oXpTMpwLRuXhMScc3V2omukuHpd5KXLa1PeYbCpSdxN",
  "key19": "65fXseWbRrYWkafp9cWHGzLENHQ6e4orrzf8yTPSn2qLXhUb8AXn3xC73kMCwRH49z3dqUfnAcoSfC8me44kBiE5",
  "key20": "4gtiLSw25j37x5CM43NVisYe1d3ESF169SXrXA9i7H5ySJcCUejURioxhEzNCVnPg6SbRw3Xmeg82tb4QmKFpeo1",
  "key21": "5gBgRX9j16ZuUtUfkctu7zs63mch9Ly9qbUrbvvXRoc1ywsz4QvuagKroPZJBHSzGPpqR46QpdawUDmDzroQ49tR",
  "key22": "5NiiqhiedW87Smqj1AQW5fmW1aba1mQiHuzcvPPwsBkyGpNy2hqesHquVium8WxeqV4EERUTzKzuTmS5kmC3xuzN",
  "key23": "5y7SL83QB6tk98TXGpUzZUu8McZNP3n3eweGbpfCg4JvSvuhaKGNFiNUDJs4yTJ7NMerCkkxcYKZeBVngjPd5J5",
  "key24": "3vCRwmbp9UwANz8J1RmGQyoN78bTuJNx4KgTj29kbHhEdHe78eoSEwjz3S6D2CHoqGyniXAzs6YDtqPqSGL1BR5r",
  "key25": "rfBmiaYJKPhDHxLp5Hi46qwhKDppWjdnrt97TazPDRXy2wiQ8Sx85M7esbRMfutFsPDw23thZhDeaoLnbJAHMxx",
  "key26": "4CttwH6ods77uLRYU7xppXA4DyF7n2YjoE7KdUMQA9A71g19AsFSnUaXFKppUa3bTjdNfWaYAkxzjStcQ1DJTeHb",
  "key27": "3bVdzLu76rugsg6b7VtPvCjJKAvdfCyw4KSsrcudMmuLzmU3BqdGzj82FXtvc49cDtb8V4mVduwshgoihsAQt3Nk",
  "key28": "KPt5pPCRFcx5KUzQRgG9EUGUEQgD4hpHqy7PkUDDswsVMKkMYbRhzupUfdmJg7b1YRsXcsYgnBb3eC1MfBWKREv",
  "key29": "t7irkd26f4otMzsy89WYGZJvuYNApDtUun3PuWAjmEgNGTqPYSvbphA3v7fbWtxB79Fs7fKiGsBMP2yQ4Tay5Y9",
  "key30": "D6ukrzYkXD1jRCHTR8PDBsmKMpYwy7TG7mm8DEK9PL2UdKTyFanmzACfaxCRnLAtMrBuEpMBWmKXS6NStS3Cqmw",
  "key31": "2JVen7kE72z6HJMXpFdPY3uPphPxbohbhJCfnwLkkRvJb7qLvEJy5pSwX9RP6UJPdx8QiGGJbM5RxQYjgsc7qj6E",
  "key32": "37NwzfGK8ftcf8oN8P6TJtdtbd9tfjwvF9LS33Ag5G5KfVFRaLcMKfYQEsjq4bgHw3RHoGqC3uD9MYGcLko1hCcV",
  "key33": "2pj4xkw3gZqR5orKy2scrwxYrum6CXsgVWSLdCqW4WtQsgu6Fmjp9GVpegCLMmjdgAo46aQkPWrstd7z6PYiqK3D",
  "key34": "29cGx9wUhWk7faU6RP9nRRuMsXRSc2sRDFQGgJezKBMvbDuDcCr3TXz3Fy4sSDZrCDULDneZrsf8jVY5Vy2Qubtm",
  "key35": "2KjFVEMnZj8uF1zP8xvYsRk4EB3zNwY4GyHLKBMFMZyruPoWShvVUkz9NzAAxm8cmqfkTtAQPbnu4igAav1baX1x"
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
