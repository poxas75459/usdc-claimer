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
    "YGpk3DZMTomkHYwZWZ6LVPox6T7k6pJqaovM2UxnypsmSRMLEfrJPNZfc5HLvunVpsiGWiuziv6RdyAuDG1Jf43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p9uGhWW6CF66iUSWq7iXYodj3U4iZw6pKynVgB88RyCMzwNBY9RQfcjxMxm2LawP41HKqi6jucGSvZpcDtBmX74",
  "key1": "4ChbfsVghZYe71zd3F9MT7JcVh2F2b2D9BVNYYW9a2E6wkQudHCd6EZH68sm4VMr8XqPpe6aUBFFX2Hfww4vJzKi",
  "key2": "3bnTprNMBrv6TbM6q1pwG8D4D2qBThTdAqkisUkF7kY5LFvg25PtKbPNnWF13Q3UEhswzCAoqzAWExTMRFdRqNTv",
  "key3": "5DEE5oSv6qS1ueX2QSmDJ2ptZoVEhUER96i95KvgF369t6KsdZTiPPpz5ZNTpfkYWi6e4DgZANE5SfVQDu5dysgr",
  "key4": "ZUf9KM7LGjyw8G6JdD8VmWNYRv5aNteMqVPcDWBNbTM91EKGv444vje5hX8CrETQdMQTayQhNMPNHy3RxYxEhZk",
  "key5": "4sacjS73k2pUiHsopsWyJuxFv5CyY5t36zF4K25RPi5UYkmLSrKQPeCnXM8w1Jgkmr39f2om7bd3v287nKiSyLw4",
  "key6": "8q7smQrdoVNHobK2c6qEU1wAShDoRqJwbckw5NaRNubc1fSvzEdgZsNUWNTBjv5K9GsmZUDPeRAdgfx84AvkPsB",
  "key7": "28CMAE1vGVhAWUFvLwpv9BaPmwMF2qgDtC6uhg8mgoBhHUbUpd9gWygZ44njYLi7SySvMweow2S7KTBnnwduHrGo",
  "key8": "2jiRQv97tBVvBY5GGSm6js7G9mcCJwJq8duAimxrgt9v7i47YioPLbz5hfLNSCmGN1MySEcNHYQad6wKjxYgTh4N",
  "key9": "2NGeciaZL4UEGnXKC6SGNJPpACApf5XXtYndE4oc4utcqDumMcJeX2auQPjctoc3thy6fpMcR3FtbeqmPTX3eMrd",
  "key10": "4yNF8z4qkWsn3kwMKaUmEzT8DPhVQZMF6iqBSfGkm74KCtoX2dBGHu7uCVJcaJbvQW4hmK81CnnAp5RrCfsurPgj",
  "key11": "2uUJD4VkrmG3ZqCXP7k3g7NfKm6X1jN6fBjquCxs8qkA9ktuT9uppEQiw5JKMpyoiaikUsNPohHnHthdGV8nYhaA",
  "key12": "BiEpjTrJkXK8cARNg4JYVL3Bxe5DpZ7GD1CuGNwmkM9jZcZaYvQb6UfAFjnRyQYDQEWHPy1BEi7aG4wNWS7i6wa",
  "key13": "2oRhsV2gzUjdvpvcmsaYgFPFdgPHA7sEJ4TqWgmyjvhb9UdVjrQA3aBKqkngEXLg9pLW2jiEVKcVYZSjazzQqRgz",
  "key14": "nfC1ne97osivZEdzMTg9mHEfdfUHerLrQiwMjg3Zm4wxgfuy9iJz4CJ4giHYwW65wbCm3kbyRuaza9mszmSwhqS",
  "key15": "p6djUD4eRrj5vcUNxDiz8MJ6cekSFZ2jHYbz8BMntdm8PtDy9bQx6rMdupEjgyHs8b7d8M4Sr7JaGsXHVzfnoSy",
  "key16": "5Yw59fANVpvCCH1gVvcFYWUQCFJzBnGZwXpGkFkFR2N5qWmCj8oB4QeZaLCiegxvBH4fkYx1MgHvNMX3NSXFTQL5",
  "key17": "5ge93PgzwquoVzBwzZbgrWfkGo3YnU4kxRDJjgadZ4FzBg2uMfBRCcDVreYpLsTcSomdgLizCSqWa8sbR3NrdLqp",
  "key18": "3u1929jwif7X2P4oi9MBisWQSnGoA3Jq8u1gaEu5d84kHZoSRANHLCW2MwUQzxSSaUHsHhUqkGRe1rb4ivTUKHgY",
  "key19": "sWrWiZt6kuLUbeu1nWJTR3WrYxz8YWjQhobXFEDxNw6XoFVsW93VB5GN6kGG5JorhdGVgEHfRqc8g6y9EaptyCY",
  "key20": "4Mo6P64S7wFcXXDvEQ4tu6f9VUkw3N6QyLQkBoKhns2zCa8gRjCYmhc24msNm94hq65FsizSPspJveQ8uyC3PLhj",
  "key21": "EM7qkZZoAwJRTkiP49qGexJMGKDyG4ER4bpBfL5HxeuzKKTcfrwHBLTcwUBXedvFL7vQSXPD7naGC68dU2kL7bV",
  "key22": "5anQRdBRRdxh1m8mLKyjif9vqjwgizSin3Qcc7Rk6tcgn8SxzJgZGgJ3nddXaaU72U27CxKatazsDsauC6n22rRX",
  "key23": "3izvFu1h4NvhYNdbcc4V2jccFhj3x4gHvd2cXrF5eQdTrZQYCxfriuHCokBPSiNxYFNXDC2KG2pnF22sLZyvP2AL",
  "key24": "5FHnhmanmcUR7vfo8pjrGQXeXmc9myQ6xzP1g4MXpcLCSJ2EDsZTibrRWuyoYzoj2uihJJmwjBV8BuAGAkUZuDPC",
  "key25": "dPzv5Pv1HP2cWGCZteCGWe6JDHoGi8uQmeuXfhtaNWmGZJcwZxJYRPB4YPzmEDYZYwK8Tm33TMFA8PqGcJZapDf",
  "key26": "26eGLY62JHWbyYYoBYmg1VvWNZaY6n7FxpGqQiSSbzdJRD8vg5uNExoA8aBiNxNCi1QKjuQeL1SDRhEer9hcaXoR",
  "key27": "5GHiXbtVQo6s3UesyDDrK18Rcieihx4qVoaqygvD1GsPBa5BM8okzwhUM7LAkGqYzBR6dSicKpFMhx26MD7mYdDP",
  "key28": "44Ss9ocNbWeQUX2CZZZGRXLK1EqNHmqaZHnY5mshPDF3pVPRxHq3G1WZeb4dTrjJxnNtb8e6gppG7Eox33VTbfa7",
  "key29": "2D5fezg9fDSpcvQn4mEZQyMzNTRGUbM38BBiNx6bsiSGBmGxnupzmX446AE5fYJMgvgVq9qZ4SYFVVfgxdKVdP9o",
  "key30": "5qvNUWPDZZAMurnCex7bTJauc3jwtSJ6GHtmDjLVQzfXZA8D5oCLRAx1bmFac679GzfudScqmWtiebFAi6FdzhaL",
  "key31": "5ctT84VyCokcJeJRMXpQCyhYioTcwYzd61Ft1pj4v4yDnHW2vyGSZQR8sp7UXPSkzFSR6wEHUvn4Ymt3MknikwNK",
  "key32": "5fVnNWkiqPTVrH8eXaoPVRdnHHPaVbmoyVMvVdvRTFzi7ai2ngXZfWrdQXWuEprhm1YYd8XJGEWTrmXbRXdUe2Hp",
  "key33": "QFco2xqs4mig39CQAfNidQo4vaDc9arMy22LNXCVbDR5WwEQ3PGguPtc6nDK9AYH8yFX3tw4nVnTsSnui2BFpto",
  "key34": "55kaQknZQhmoHDFkkgkjPxwYk5q9kLsw4QirTgfX1HPhtPoyjdFNvwBySoj3jU3fgy5bChWhaDtuVX7oU9VpKmg1",
  "key35": "2pAPk6tmrBPddKp6YvuWJM7GP7VQiLzVFGypJctFA9fcBjWjR8AqaPxh8LuLF5oz4QjNgqgdYM7eWVYudttpfV7G",
  "key36": "2dXtDHDAwT5kTsrdsWDFMGBpn33DQ5BuEoHR5BsuoUa47C3RYW9eGEtsEJjhJADUvvtYq15pZjCm1wYToHNWJgP8",
  "key37": "ickMGmxbuNw9AMdNanaTZb7fgKCf22e46ynZv399ev9rkoNhT8fPUEgADv3kJwXapiALtMibAqPAhgwdX6rzthy",
  "key38": "3bqvfJ8y5ZnbsnNedstXfzyKBPzDLDt4qkP5ZCU8X4C2DZzFRPrZuybrJwgXJw8jn5bCV9qPBHUZwTAJaL2hJXGP",
  "key39": "5rdoaY9b5vuQxGgqEjusc3bsQZY7hTBWhPjXFueT1ezTWeDeJFX4yeMU6nSSd6A2wQ8nhhCBxzWmfcDJ3XMVT4p2",
  "key40": "9srVwhnZsYBCB7CTc8B1XTNi9ePUJXefy63owFRN8iFnZm8gKAHWXPcZcn8tPHDczCEzkUGrgvFqGcR9FFtQunq",
  "key41": "3uamkLLZGTi5Zkk2NQxGzBwL6Sy6zad6razAtzYTDp2KUTRYExnAs2KzmquFoB4CtuvjqXvFm16jHfQwofSgS4YG",
  "key42": "DAUi3TfnEgFCzSoUqaGJ5acYm53grWWeCQxoAHnazbCFZc3Y5Q9e2wxeVwrD9tLVpYjgL748L1denwKYXJjuB9D"
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
