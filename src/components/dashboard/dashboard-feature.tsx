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
    "4uoMMPr5khxAuLCvoF2iVrUuqYJrVdNeF8aw1bKetyQorZAq6s1Vzp94er3Ld2Rsmv7BwhxC5ChXc8Vx5BV2VYUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y4mTAQpvCdUTGbrceHv32GJiygz8obDgSwy4omFExDQkJhqdRQzmwCjooL3AhUifePZavDTuwwE57RsgYCEoqHW",
  "key1": "5RG9ohvHxsvP9dZPYR5YbcZcT4GoSUNXvwBmPm7GbgMpKZtGQSVVZZoGdaeJHF2UTJCevCC46Jrw49LYfMfb7xkn",
  "key2": "4JVcRs9zNhErwwts3rbanEr6KuuUaNY5A5sywAZVKZ25rcAop5dHieFswzz1XV22nyzHkunLPA91s47saydca9G9",
  "key3": "Lq3kkFV3an74UGRYCwbqP4x5PF9uTEkWJKcVx11PJyy9Tx93JsnmnGEUpFiwDC1Vq8vWqnLABtni7UC7Dtzuvpk",
  "key4": "4iWvs7FiMXnPuhSMZACbVchRQBRXHShhSsUkqDmHrmG2YWw4KNH8i6vRuBWsX9vW7FaGym5ZoucVpi9L28UsjNCo",
  "key5": "4wLZmMvx5DTjyny8bHnQKHPmY5ta9fbvoToqHfJAczokFhGuJTH23mpgCn5kV3eCBeG7zukQkK2KrNDXaTWNCAvo",
  "key6": "2W2ondXWhsdwTSuE1KipvtCodYfq4NXzNNKEVoqYP7petcdziZ5nUPXa4RM36hvNTnitE3MeKqDVrn3cKjxwW5WK",
  "key7": "f8DoH9F8dcSBhMGcZ8ZWwg8p8abcRUo7qHGq8r6kTG7h8kpFVnQQJsPJQfw2UFSEzL1roYGyKwqFNLVcUaLVRKi",
  "key8": "3dUgKp3XUr6TxADfuKD2d6UiDTSLeF7BHTM24hoLHNkDHXTFccBKwK8P5ji7oWPfmKgVuRAe2VZz58QXYd7nciAf",
  "key9": "2rAHe2ZNiExoJtMKmLrSQVfWrjBGb12EjYhvgu7hBSYMfbs7ZEyMjEnN7qDxKyYKaEjnhuY2437SuzjB1KU2ZGKx",
  "key10": "NUbHyTQArFdeDp7RgbMLRqTSjdpVwZtTBdUCC4wMVtG9mDwJgwh7qazdX7KdrcY1RZ9GpaDhxbCWBd3JVytXi1d",
  "key11": "1v9QXQetqidhL4h34X8W9SVuQsDEMCRzWNBGAZ6dvohSxcu5zVig2pJAuQSWCbfE1X3MM2FnENBDH5XPMytH2yU",
  "key12": "65he6MZjCBTSVT4rBW5UF9W1jXvE38CK5U9NZMxeiQDEoaB6XhgCcNpWcb6yx3qd6WsXMq2hY3yCGvQNMTNKwBvY",
  "key13": "46mZcUuXuTSvFxSsfhmz32AcEaJ8fjvkHdho5d38Vp64TWr39c8f5nqFBdp9H6RLwLk6U4eRT9s2X63ciYhHhi7b",
  "key14": "5ML4HrbmxdeMQfGqqHGxdnzK1uTJDmKYTB9izofnbb3Bepx7uNT1bdPJVM38bpUBGkpM189gPJpCTDJX26Hq64hQ",
  "key15": "56skqcdYZhofvUZhuuACDwkqwrKybeiPzX7DtsxTxNpaznktLT9cDQt8hApa3pVrWF82r8v5fL68yTWwgS96HcNh",
  "key16": "5Fv22NFGVFRXeCSvFdmL8xhLX3ifqb8pMmpvmgYYATTnNmM9XFfZKLNcFkYoqRL2szuxjo63fvjTMzHAVZbE5YSK",
  "key17": "4ftrhgGmQwrjnbgvJQfXY3Bf7iEXPwofgdTJSSsppsBmna2AYbVvTYLXFHck9PSuJxwK6vtQRYtNJhx9nEYpmKBQ",
  "key18": "48Djxnt9Bf2qVDbgGcvXrDavdvaJgz66jGxxBWWbxUPnbYVe41vXWZTxyj2SJsh9Vqq82MPHzcKN93LNrYDYL9nz",
  "key19": "4XSmweMQX179k8KSSF4su3ri1JUB56oT58ZJ2HabjeQTVwygxuyet98aDugtt49oAKw7N5oyfusR3X8aV8wVTcGt",
  "key20": "4YncnjMA4cE2yGaaBR4k815GKKRDaAkRiwXytLPHrSMS9L8GGkuGZbspaexHjWtxHggtbUpC1XGrySQU2VJoNQcU",
  "key21": "3YZH5SLEJLKeuEMoGfaEzmaDwkRx13fhdzZqjSu9wL1dqyauCdj3KL5U7wXuDYeGUoMv6ATcA8jUBQk15EALqXVp",
  "key22": "X1Qv8Gg4jUkpjnXhiPanxy4DEFy1hWczddqMmSM8pSZFEAG4fxbFFUNvGtDYfHH9Qz9wmf8CYyU52Cme5GPDQgj",
  "key23": "5pYSU5yRPkJDQJ9g5xUiki8WRi9CFsjtV443SZA6rYWGqe4MuyQQsMtSD9pdi5vNtuxXzfwfL2kVWmUQ3vfuJt3H",
  "key24": "3AHEaJzAq3tcS8vyerqWJ4VsT2sEEZb7qr5dqT9Jx8yTmTbCaaYZaAqNrCCAYG3VWsNmSz8UzQ5gtfLnoSBLt8wE",
  "key25": "3gH2X6ZES4SAaX7XfjSPBbrHB2A4htrDsv6BAhZoXJ3C2fx4YubSixSX3U6tRp3oLhUjd4kwYR1vGzYxDyZpdMoa",
  "key26": "pmphiA4jRTLfsHCFmkUCu5xovL9HByJNMGicSzMYQt3TUrGhTfVnEcQRs9MkWErGtJdvvQZzqDfuJUEWixaJ5rF",
  "key27": "4NmnoLeBwxRtV7ZGRhrb2trEF78abTkk48JGVyvKzuaX9CbznHBwvSTKjLyRaXC6hr4CKC2zbeKri2F4onZB2aHe",
  "key28": "3nWtgsxmLyycaC8fcax5RzqURFkc6rTewgNBW4ThrMQkPXEiizrM4foH8yB2Smmwwo8Xs1H4MLbHVL2qaQG7e8BP",
  "key29": "4CkZRDXtX9K9X1SdveLFB5ZNDGGUq8trbmf6XftyLW5GpNVs28xAGa7UDWFZDczfbsb5DbubkuT3o8ddQB3nbeVj",
  "key30": "2zHEMTYrZp5izkyLopvQnetMz2cNjuZVMPBcTnoQVF2ns2Ne21eSjJXxTZ75DaKJbZoxYvQ7eH12kk2d433W6C9o",
  "key31": "28sZv2rxkKtaZus9e4h4MkfTiCtbkTPsJu62gSj2NT2VCjX1J9xS9Sbtv3PRMEnCEAi2HkSQU3dkS7gpAqAAdVso",
  "key32": "LSy6NuVM8P7ATHnEn44Rb7xy3dKKA8u2tQDyn1rWLfYW6qhwBhBu1gh6nRcPefgfLMVTcwdbVMpcDJ7Lcwz4XpT",
  "key33": "5Yo781qa2VPN8VxY3BQvdGAJQqGgwSvfFef3fUwMHacuxLWYd86wL3DJQsQirfEu7FVksRhrLpqcPbNFBudCUeN6",
  "key34": "TecKzvGKSYkgScHqmHQrwJHmmU6UHyfJLkYG4FKNee613zfAzicdkVwRb1LbVwUcgbKdjhjyDdQTB6iQT73SWU6",
  "key35": "2RZFYZh81cD12Pg8n1j1Bi7it6TF1Rkt1esGWLr5RUEoQYJ4gQRGFWkU24BEpioeSvm5y9k1V9dgVu2bMeYVctvW",
  "key36": "4Q1j9pqQBrAiNdvUTPWHRJVHtAgsTgwrycpNateVTA3cVSwbmSispBbMrJfbQA7uaWGcgq1owP4VfRSN8s8mQeET",
  "key37": "4Nxz5aXXTQMZpFKzjHWdeWB87qAXaXu3UGZKWad2LJS9Ph7GZUsigpinrUEXrGzc5N9RYKAPzZ8oqtcZrThrtiPE",
  "key38": "9fkntwkDTce54UeweA7JkMdGpY8hjJ4fVJ5daxAptfCAsZSYpnxqqkctiiKXzkBTop27iHSDnubMjG6RdQmpeRG",
  "key39": "2QWxp27qSnusN3dwHMNwtjr6hTGYXZnoBbBwoVrM9YMUuWCYVRqghQf8usLfQW6hVC2G9kFzUJWgdcffrtUByyNT",
  "key40": "5LSFHQuSv1tEEjBpk83176b58JkmFw3phF1w9Qtq9kJNNq8fDyWp94M7pksAbGFgCfyRsVbStf4KciKeHKrAXRMa",
  "key41": "3WGhj1R1ye6auWd7WckMLCZ161GFr9erVzSusSc7gFEnjp4ddfqwfUmUBpeXcjTSfqbvjdDG2PPSz4WnWdsgrKua",
  "key42": "2FN9bLReLBCAvz31MZFUNKSJieivPogdxC52wKFjt3kig8eo4Ly4MTWAzbsZTfd4g7gVHHtdn1ih2QhbAiBJarmi",
  "key43": "4vwdy4pqvohDpwWcDNgGAyDyENjWhzjSjxAcsnyzNpFsbYYeXrxSMWKUqnv6jT7GZoAc31WhCBSjmi2YSgsbTaXf",
  "key44": "5mAqaFKihFSzxZ1CcT2bsgaC8rfSgqoBD87tmX9axnUGr7YV5KpYC97CuCwEGhwF7u7Uyir7xk1zVF6TwzNKBhKY",
  "key45": "4QgvQfpk73rj4ZrBhzvutKKJgEtjLC4VcXXbFJPSELe1hFKoUcVH44Lo1VF77gTTPo1CrXrNiexFBmEsu3jzbZT7",
  "key46": "5divsQJmCuJVuwFtmsAWXxMFkhf8hjJKcGuqBDysaST4X5n79QhvNYKT1XfR6qYgGsqYcw5PFHf3ZLG5mzzpzVZb",
  "key47": "63oHuFoRQgrLnWyPGKrMWpMRXH7pzGXJM69yHcuHcVNZN1WfjdoowbaKGS8aDXDan8Mcx4GzeeVP7uThvFaKaoGM",
  "key48": "2Rz6FPahaLw4bqfCBsLa8SQTSYz4t6KFtkjYVn6mXwFoJQUnbjHp5P8DcRxD1hkRnkSAnFUXsxs7j37KVtxKxzB5"
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
