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
    "4FpNEoZ2fDmcQjdb9nWNfbYuoAcJi2WeA8Q1DLH2WcL7XDZWqFPRS4BW86Yu4oSpbYxSb2WxCpFR55DbzUbVBkbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iqWAzEy8gZC5inJZuM7chXakVwoVCq2obcfKrxdo9Gzvz9Ti1ktG5HoQZJnqpB1qrMGWUYzKZxTyNxkPJwuHTZ8",
  "key1": "55AvXSuJgJH9bjHCjr2mNAmY4axYEb3jGQFMWTCzPWHQrGe29ieWZTnKEJDY3DBnqDeviRNyRDQ5Yc1p5zpBfEpS",
  "key2": "32KMEgPYpZ3TJFFsrE5u8Lqkq4LxBmfuaKCLMNVtcX9nAQn24GHn85SVGA8m8FnGUsxqj8jdk1MWhny5Gb2CtkHH",
  "key3": "58psyi6NndM1oRx8rGdCb64R1eVYKkRKmpKJGjsmgWGXiR9yqU1wgmBzrKKfbcbCq28rRRurdwGfcB1oxjKBoYQC",
  "key4": "4PYQQJWBkDADMkvYAoa6oTnBLSya5d12pZnxKXBRPntE59tjZki4UT5Kq7uesGbxHzF4CbLyTjKcvLL2dLN8ohg2",
  "key5": "5NFjwuyqZuLxaAWasPk4iSjZbvB9x8V5iYJ614GxWkBLATewJo3h91iK8wqwYgRc9i8oFubQDPKkQZ5z1gDw2XoW",
  "key6": "ygukJzjghe8u4ZN63q96bPnZw9qguErHr56UGEEHH9s99wLUGRUfLXfB31PBMFvYxgSCn1CnxUbmMZnMgaVegvc",
  "key7": "3kwm2yXojjxMUJSyAkErUowxGhzRvKFyqN1RRczL8cVEbBZZUa9LnJAS28YFPadRLGM3JWMN9yUj86evLFat1nzV",
  "key8": "5wujJ33sRFRUFE94MYNvqnLV7ThC8dFSUb7qtaypWAegmrCPJsQjaDJ27x5Fkc3xYAUS2L21vjgtaEazxxBo8kQb",
  "key9": "4n2UXH4cYAxQJnHmnRmfbRZjbgEuRr36442rfLuWEvd3uaoDWJozpkrK4n7PK89LziA7U3Nasejmypvw78CqaoaL",
  "key10": "5MvAWkoBYE7EJwVqhmYw3N5KN1Yor1Ld7cEEgf3mn3tmzCdXWZNN3Qt3uedmy24i9cMYUSByGZ5RkHRUju7thLU",
  "key11": "5dpdFdEACJQSAndg46viCTJSLr3VtkW9rabfK44iF2NfVZRD566Fx2pqTKniDuXnyhdeUPkZkn6d4RxXLYJ2Q5MC",
  "key12": "27vzjuNYWASFZDapCB8cr9hhLLiFf7g2cutb7qbV6ykSHxkkoWR2JsqxHgXfEkfWeACgoWEsgQR3VS5PkB1ux3aG",
  "key13": "qnTzpog2h7JY6i8zj1F9p29e3gpkaS1oNMX82jBcaS4EeHRFWyASvNTYUsyp8Upf5HzaEMWsG25uAokR7Y2Xsqa",
  "key14": "5Zow1tfFU8HULdFEa6wn8mL7DZWB1RbnRPYX3BSAFGyYrFqNiC9eKmxHS43NuK6QBqyynf5uvBNM9BT6iynA28sr",
  "key15": "4HiX7zjkhsr1Q64qdQsQr6YURfvbVVKQueQ3jXyFcLtnQgq5rSPK458GUh72XLwZEMhRghnurvSWTzUM3U5fj1BD",
  "key16": "3bRzUtW5VcUSNpbYFEQKS1KzSrb3dpZh4sZkN6rBxFTgz7gyXxnQovnXM1mArybfQrUonXDJ3Gfcyt2wEHgekF3R",
  "key17": "2Y6D7Dnx5hCXfJJuUvDDoGesDrXh739ve3qDhgk3VHvS38gV7oGcd9gH8stnC9DsetxwYxnfibdEAjgRSKFS41HX",
  "key18": "3jGRVcZirQf2WjYRjsowciUw9pt4KGC8cMmN4Bf2zqUZZEFX19dyBn7mp8h4CLB8XoBsLeA93r8gm4CKhz3ukn23",
  "key19": "5xSJw8rA1NhoHiy7rF7TN6Pv8LZAvwdUkauefJiGjSA7kPGLt61j3EtueZEHPwtUWt6fvMp89qTzpTTd8RHcMRj8",
  "key20": "3NfW8LnAW7v5jFbWaoZPdfXDRSe3KKxJmKo3MRHC9F9Fq19pb7dqgSewHXyLRCB6v12oyem2K24XLcCX8zbwacQt",
  "key21": "trRX3AqcqecVGLVMt6Bd2YL8UsqWMFfBhGXFTdoPiZtnEtV3LdhCDU7HTFqiBxpkk5SQKcNjLYkG6TdzP9mdydj",
  "key22": "hYaHApsYu7jtpgcytPhccZY4GGQKoUeMtEqLfVNLD9MxE4V75TzRXNMxaKrxygF8HKUYhJw1xRPefncoLaLEw2M",
  "key23": "3UbGjt231bzkdkKQxzr2kCR7jHAZj7Zf68zcW1BZuKrZTktLayQYUyG76JPhofgfyzgazucyKeQrPXJZhxDSS27D",
  "key24": "5pZw5hHaue8g6RvhuNp1VGCxdKfZcjy3nzZwNGL4sGMyGdkbxP8UgvAJyesjsZDsvafEK3AGFXYkeb2h1FGTRGj",
  "key25": "32uT6bNaBDCMPMXMD2eZQ8akmN8qkGcG4PqC6ZPsem5nyoAqNdqfJg4QPTxQHkXQzVT8wuEshHHMWF7hHuhmeBP4",
  "key26": "4TV7LJwAU9ECMnvguoUATdcQEcr4BG8VFMvi24scwx6y5jDgAKn9fzEtMtgmiShS1bs53jSm4Wn9iSDqEtPQrigN",
  "key27": "2hvQRWSiFJXReoVdCB4QBPvUcbUMwijcHaGWJXoGdtRmSFcLJGKRCqNnJtDLTM3BicX4fbySHq7CKRFaYqQHnPnp",
  "key28": "NqPoNrpZp1TEKRvE1VYcZ6gXKBWUr6SZXspP36Hi8wvsMkPPfvnUA1TaPuoeWchXNyNZUMTerqnAYMuSnTJ3Wmm",
  "key29": "44Nt14zG4WFeAfi2pyntcVYYehdsh4XJseroDFdKGQRhhG5QA1RgaU84NtWBYP2p98iDKh7eS5PxWEERXNwA4G1T",
  "key30": "4GkujsFzKg8jSdfju5QKzpxdPwPtWKuYFDUEmnRyqrNvuqhKctwk8iwxzCFeAgwyKmYb2gtMMkD2zwvr942ySoeB",
  "key31": "3S1nb8WQk2JnguyRXmZFz8YzSUa9JsSZHKBYuftwrAiJ8WaRwZ4ozunTb3nABjp3Z9NC5mnwJE3GxcXboHizjvWp",
  "key32": "3bBBz3cVGviTg8nKEjDeXKBiJ6j8vogPE5QJ3385BzczxR3cgjYaZbfH2CzzgBGRVrUhRHgnmShnp9e7opLRWPje",
  "key33": "cdLYrejmAPi4pxWwQ48XLrGuK2asDS7BvtybLLKQxn3cLJWZfuqMZux3ri5zftJzDatWm53SeuQumFJD631ipEd",
  "key34": "5QPq4hkeiYSPbPzQLeUQEf2ioEYamam8QS2hzMuLvKR9wbhNc6XTQqXkPwjjqYLZZXuouHhcVckq8QfffCHSvR7m",
  "key35": "3SCLSSQFzhNDJ3pxUqGhRmNCFdLpznB5oYLQBEtCZR9MnNkT9mUXKa1a9iY88Q7ThpMdL51bUk5vEQ8wFDH7rvzT",
  "key36": "2PyrUu6VYVh1jPmxhLe1ZfGc6fNUS9mYd5idPW19TcJiYHC5FmHSZbshittrC6zrhYMGiUdRTRghD9tENZW3UDPb",
  "key37": "s4t8bfuHwa631XbjKBYLB9VgjPrpEfeLKDBPVdip96G1oZam3Cu7xo4wEF3xfD52q5UUdkgwNfjNtPykvhCD6yB",
  "key38": "3v18yVztuz7SExGxQtNgWmZbH4nhrWKE9KSpUNuzBjTvxp8WEkW19eb3H5Cn9wMTa8SFNquREvworpc6EHfmzaY2",
  "key39": "43iJXHpsS8tmcvec3NG43AjXQauXVQ6BLG9ipdVKXbC3gmvUDxFxuUjjp1uGCSwJFsq5fo6KyS7QooAenG9HtYmP",
  "key40": "LMe574aEkoGm8xpTCyyt3ixuj554sSpuyjEgVJQA26GJuXgqSP2XBiC2LJoAC3zXxCu9pNpNpPyptRTnQ7m11fh",
  "key41": "5saGvRj5U8auMNVEAxcNt3v4SSbCQGr44EQJvKVCUgRK5CSJFwaEq26ro5Y7G8hGqLViqomk1gz9jGEb4jEqoLZh",
  "key42": "5CPRPXw1y21b5LadX8JbqMEaA5fCwMMSKhHzoDiPpXUZxNPeeMXhfWWwn2tkNLwnNowjQh9LvaKfLeh5QxL5m583",
  "key43": "3V8dwJteQzFMytSx9PhJDSLRmPo8TAdZG8uQ9kK7PuiQ9HN7RbuDH39EVr1TGxNQtaMABWXc7cf2Ft8WiMFaicjo"
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
