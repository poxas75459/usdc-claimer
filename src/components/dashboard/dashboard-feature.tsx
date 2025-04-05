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
    "38uPkin6S1wrfrk8WacuGhBjRzWbWMkrxHB8whAKwGe3kdenMNdSdEnD9dqHGBQCagRPQHrMb89gnD7G6Li35mwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b1b8f8mpPA5dPduL9FAhKS28QL5jVb9dbcpYGsPsAeq2ocvUeMtsR26u2EwwZNsyseVXmM7kAdgQcAvchKqitHn",
  "key1": "5GbdWC82aFEZps1yDiw4u46uwt3wuLJMvQRX6fStpESoEvjuSEhjPBaLJUfrwVB3iu62HzoBzrgUDA9peqV6cxVC",
  "key2": "4ZimQLuz1okyxu6Tmt8mHUB675bMocSXkbvQemj39y7D1ZUvAhBzYrmA94GHk2be1ewdbGhp1n2wqqYYzKYzfiLD",
  "key3": "4Rn9YNfXry6u8oCVkm5xzsSc1fwTHa434KHVH4gLdQNgK1xyue9M9aRZyZ7xdYbLWddEW1XwUGdqwW3rc1P67snF",
  "key4": "4DFibRfcdHVCKfUSF15LkLng1YRaTenQ7t1v9wxGPmQ1nLef2cxHFa6aAi2okwocgAM5Y5wyiuGWuP8tzRs7kkrw",
  "key5": "5W2QSFp8QToAWKJdtb27CgofEDAC2KKRjRpTf6GVbvHTUXsaLzxejtjpncoNyDXQeotzB3v8M8UHBmQHGCizBmAn",
  "key6": "fnMrZ9nDMEomCs9Db4HhZwqMi7JwMVbowTwX4pMj6KQCQo2ccaK18GfJMJy2JgbmpRgZwDCLifiUpJHJLwsciib",
  "key7": "5kK9Zr1dR8Zy8kkPvLqXZdqv2zFJxHRf3k5Nio4tVtfaA4qJkjAQ1RUDm15fHu4RGNF7h7HmdSyg6oQN1T7GB98t",
  "key8": "43HabQagwEq1GupuEpFwby7FfJXBHjWZ2uQbQAZsfvtoXMWtKdR6GucSnhyiaFr5FYezY46BCQU1oybnu5njjoyi",
  "key9": "2BkhJnQtdnErccUs92jpaMGZXuDbffA8txGCacF5sHqe1MiNyqRdRjQFEss5EHSNfYcKn5WqsxtJ2Q8wmxzuqhbW",
  "key10": "34g2r8df5j8WNwxHZ2mytJi1rQkkzQcUpbR14pUxBHgUSLTT8wQ3LGFbZhr5Xnkz8c2zjQP3HgiR4PQ1j1pGYwAQ",
  "key11": "4aN1vMkgAXaJjR1b655sRU22kUNu37tCykY7NDQVvCAudCRphLkf2mEALGb9CGF8NZ3tpfjxkgLHMs7KkaAiSFJ6",
  "key12": "3iyqSSCAfzgyQqPDQnyeoUcDEjPhdg8nJYiX883hBYBFtq3mAwewpNvq4mcrpv2efKbmgjWH9HVUoSw6DDQvc7BF",
  "key13": "YJrAuUEhBaEBUZ5eCRgKxbFVcqpMhNGPtS5PabK8MMo8U9FaK938tSqhg455KCepeMPuxpmy42ThMdq5XjQoynm",
  "key14": "3CNgfS3V5dKrvA2qfqu9vinwfKnhehg3GqfKWMLnDMU2j7WsLG95jdLu8CN6SJywzRZPLFvrCYupDtnncSpzNxSm",
  "key15": "4fT9wY2Lm9hHa7mYUrdjVQneGizXrqphTq9arEo42bdjyX6gQCYbC7S2KghD4Afnj1kAudVHoxALaowtEUo6mWSt",
  "key16": "29APBF73xP8dvZpMrGwhK51b5U9q75ksLjr6ESwsK5PLiCKnKWbygiRkacX8X6jNgBR38sKag2WPrnsbTMxtA97u",
  "key17": "5wuuP4wBzU9K3KmXufpKx3jCCbTXJh6SxZ7ssUyqbsQRfqBqQeNt4HHbhERDzy2hTbd8vzk1i27D2tWKrqcDFcXE",
  "key18": "3hqfMfPwv8HsSixBMBPBJFeL3CQGJ7chVUz2xL6jwcGJ6ee3AhyZwa3WctQC7fyd67dZ2hcZafdwjzgz8bbYXKxk",
  "key19": "37tuTLyjubLEpXQoXFbjXYTXVh6zjmi83TjQmAcMPg5uARrPS8nY5UGSceNYtZK14TnBT8DsrpncErCnAPBr9wpZ",
  "key20": "3tbFCzR4KpwaMzLbFJ5cAr62ogidmBpJNaXry7GVmD4tFpMG6H27oTQ76kT5ieRyzZVEUM6Ph43kWwNrSi1K3q6M",
  "key21": "2bGSMM2ndfVSgZfJfAzvYAas6PqQRP7JWJo4s1duG39EsbQSHYXqTvnNUEthhvYUQLVB9c42VD1iCNt5eCMb38mz",
  "key22": "5EyLBUoPE9Pw1BP3WkwR41o9pVv6X1DeMTfkHqPaM62HaNpVK2ohQ7YKEs15uWu2jwMq3h8wrT7GMVTVSVKpRn9s",
  "key23": "2gZMY8J7VSgLFbM5jvc7LGSbWSz5w9KWWDFF6fXgqoa94HrUiYxHqUowvgQmMh5DhdQWZGxGYKeB3UUHzXVCQynT",
  "key24": "2CqRiYUzEZKBMGcP5ug89wQL1CjKa7Mv4WhKjsUa8zZZtsJ395DYHrXL7cyfHeDoYvCdmA8JDHNBd29Z1hwJJ7yo",
  "key25": "3TGeM8K6kfR6h8Yrr56x5P2RS9JutxBqxD3wrzTW6aw3Zb97mCUYUavcSPoemVCkwhdqgPRPu8Wcx47jVYWxEtVM",
  "key26": "3xdRTZfzgz3Lb5A7a1zyRt2u5jCSJk73DQkjrokAPzPEpPpPhM2c1aBPD6dqKMfWD8g5nJxDZ19EgDsAg6uJhW4g",
  "key27": "3KAjrS8XUKPxTCYx87ydCMtVFkHRCQJ7ftstMFHLUTt3m1Y5GiSmAtxaHHcVBZXZwTZHMLi8EDCUTTJddKZvbU4A",
  "key28": "bTce7fZZCW3WeTkDmEjH8LDFYygdDUvydR2HDzWjhvjDbWqDyfmreek5zBJQmJgB44nXSWPPc2DCZrgh1tr5kPS",
  "key29": "3hazvvixL5obc9sF9LpVhayb4q35wfDBAvUqVLessDPZ7m1WJES186RLo3EzNjpDaU6F3VhVJSE7oVSum4qzjeun",
  "key30": "3nq8UfAUGmgUXGrEprpipS4EzvSxEqBZqvEXuovJVc2h2mPA1zdLhn14KmDmJW7eMLbUiMSThesimKuUqqcXf5rG",
  "key31": "3jka5mWewkUfg8z7jfPMf97fUk1dWTNRPLDkcncDZCh9aN691ELn2SPLDu8bbJtQ9yhJ2CyfxzXx2jGpGyccaY99",
  "key32": "NqDjwEG5S6PaGffU4XJvgs8km1xdFneSGNjBvsVnGf3N5XXTkzuxCqmbCSbNK4uaytEESCFXjQwgAWVCHofEKh8",
  "key33": "3VMwzXaYKBMDr1NznjNq3E8JNnUrCtKuqMYMsDy17RwpSeSfwsKmFTLd6qvJrWwsjwXc5nP2xt3xxbysKAiPx5Mk",
  "key34": "2SS8o5FHVdu3cHYJQF4TuvaP2SoAgv8WxZKkzoJiLtUeQARfg34inJcwLyxcH3Ubb4v4hai4Mi5FAMh6gemarjet",
  "key35": "2r6rcxvKuBvnE7noJKEJwGgzfz2jH81t5Qt6AazhEN6L6AzVgrEJXA35a2irfK8BoaGwo4FYEpci9TkkFZHDjH2C",
  "key36": "5i3Kvs915Z4L55uKnxchUsjDtoRkMwVm6Gb8rayBkAfEWdzvnLBEzcL9tCrUFVoS25VoeVZ714eHSaLY1BQxjndM",
  "key37": "vrom4CzRxg6wsCTxpuGF6shFRi5bmUT7GxsV9GPeSJKTrfBkK1ob5wRAKALdh9iPxCjQgX8xdRpf8HD4cyhBxFm",
  "key38": "5wPGyaH2n3mreyNYid6f6VwUzHdVwajwVQwCQVUU2sY5uc5JQBNMX97HiENpJZzDyFwkwGZWniBN6rCVZQWDedxV",
  "key39": "2FtTC4roRqFFiEgCPeKqRuhuvaj81p4SjCdF5kwZeKCQDH1WnXHCkC6XMgVjTKnjCiBmaTuxe1s1mVCNkgPGVHZJ",
  "key40": "5B2HiUqSxVqxNKzhRcP5TkZUWGzCjd8SQJfEabzNZL72xjwf5ykGuohTRUva6GrvXQ78F8XWYa8bcgfbgk24nb3b",
  "key41": "3AHF5ddDSacpRqah9JgBBAQBGrdCBvJPoaeZntZZn8MFREBh2U4peBbgLcV2HTi4gx5ZguhrDF6FpUgiLDjsafVy",
  "key42": "65bWiU5Ms9kt3p5utf49XY1bgBiM8v7aQcxGWy1ofTb4ge3wTWicAGvfCrWnvdqQ1xvXkUiTx2pQFgFZZ36wZUxG",
  "key43": "3WwCUzzMg7aTLKG2uqLFAni5MNZhY3X32HqKXcune4oRnP6YV6mVpC8wKKZkxWeVZP78hcj8GUzsNr9pTtXBkxuJ",
  "key44": "33LMmZM5rTHenZqdJRdQmztC9B7wkXVsEmR9wvMGcxka7Wg5kFXjhR4YgZS2Q2BYyWAxt46QCHcqXGaNQy1TaAgS",
  "key45": "4qjWSJ3U5x2ZcntkH5ZfAxzmT9CMJyvHEwQ7U4wAjRyrFFk1M2R84TgBMS9vZGT5z1aExM3kZPD1ZS6spmWerp64"
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
