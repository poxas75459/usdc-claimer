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
    "3JGDyNtwJBQu5mXQ1zPEf862F7WfxMUEGcFWsb6k3KyHdX5pkBABf6RBYsqTyvYgabwLxoqcDyVLWBrtkezfns8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gpw4xd7KpYXgfcKQ8kwXyuqhrh4vjEz7RuwssXw2eiw8ra6NQkxmxcCvXMhpwM9Cm5oJcoXkinStqmzhxJRWAzV",
  "key1": "2UcxprbPnZhUtndRZ5GXYWxhUuysZuapR3BL6GpGQ6p6qzcsAE54dKhU47UTJJuw1gFLwkyww1WdP3AkDeB2GRHB",
  "key2": "3ze5G1iU9N6MpCHkQwkzh1FSJVBThefECnU9HWsnUwfQuouhuvwMFPTi2k372ogyddnZ7PB61DyErReU17eEWwmS",
  "key3": "iqhKteDtXBn7MMUUuoWxhWqpZY4FggMfVuXuPgbEKyPe3MSxgs51ijq7nDMmQk9L919Fq6QhKpH2Xxg7HedGwTK",
  "key4": "YBovbZ8vGS3wKwqgrEf2qzAp6kRN2bFCKZk1LBKQc6URY5fok5jbjvXvtbBQW8GuXUVJL68TYt1dk7yD9x7vwvY",
  "key5": "5xCmuXZ8XHCcjYmMEAiqXB14Fe9KoTrmVVnHcNHWgWPSGD7MKPGnhpaSBpzKc9BgKAySqY7ydXysx3Aphtie8Wyq",
  "key6": "2sHSwaNdfsmNzUVnSndsw4vuR2o2WmPTK9Fdm8eVhh1av2P9k7oXvS3pKsMKAVbdQKfqcR3bivLBQdgbSXahienp",
  "key7": "3hdzqCNqtxQ12EVh4wk2PJTMirhWbNYiSwWZoXugqTtzNPwve3uN4LMyutB49YpDninmRFSjRzPNEEEKLvRe6MqU",
  "key8": "3jpVyFx16zbeUDN47R82xEwcEtv93j4zkjshNESEufk5rJE7bLrwwfzzAspst9iQyUXizRdQvjr4u7STfm3b8ohX",
  "key9": "55SpNJDK98AZSLrrVu764Ubojiw47qRARPzT1sHkvM5Zi7bmAqN5oGmpExQwEk9bqv6ppr6Hvz6GnN6t3wL9x2rt",
  "key10": "a3jJFSiXMMYSHtekgimvfXJM3t9wHXQzSDhcpiQEWmDPjJngKAXUH5goo1Bag2PwLGP2XjQXSRqj1SbNqoRfJkB",
  "key11": "4EXyp2ZsmuRzXDouPVuUb5wahDMC2Wuxfbd3Fy6r6kk3TAe4C36GxSt6jw5mGffaDQzfZxej1eXxUeL7xFzj2NvN",
  "key12": "51WNKzkvWgzr8JD7igZHwGpjAAH3attRyXAatonyeiEvy1WkH4cJVhkqCNzBp9u7LGZbvhzH1PQQqsBxFpDuqC4x",
  "key13": "2QK2JKtXbcEK6LojcftxEQ2ANf6Swaa3FkWQmDUS7ZE9hKc4EfqAcj1NNuWdDKpDGPeiDCPAAaNPDS9JD7ZbmYZh",
  "key14": "3ohJBfMaim6uQE6vntATB7eZJytygK4fg6CLJL1YPXUzdzwPFLzPbTUsduVnbkCxGZaPgWcVAcD7K7bE3CGpoCJ9",
  "key15": "DA929UTVi13rU1FywyUfz6uSnrhJfbEza2e6MnoLGSo6CxRrZS8avKJxvYY75UVjyeoqJbyJ1idbRrdVMXnp2do",
  "key16": "72TsmgLrPr2zzjo7XJPuQzWYVfYa8Cphy5ThoUtV8654DSx26BkP3d73bAUr1JVXTH5T6NJ88f7BtT5pCL4uM27",
  "key17": "3N43L7zfuenbzPgMHei5P82wbHbSoywP6TkxtqSrWjpB4Exbkb4Ffhbvn2WLLj1Fa22noASAAT3SHnAPtRf8TXXS",
  "key18": "5c41Q7RHPzDWaK3sBNgTn5N3X86KZJPZUQKzJXMUKRgNzoy9g8AJpoSoKmpA4yS8WhU2uFNSpMk8DGVjzHNwHUWg",
  "key19": "5T7gcevyioC14pZVjHcsthquGRnD24zpoAfXqHFjhyARsW7kFTQWepcZCxbCGZaaoSaYaNjWMaprMYNnyLmfos5j",
  "key20": "5Fu8za4JAbnk5s4573pk3qxCDCgAkz166BTje7vryUK6vtcPwBUuPZfVfJoEqsGAFLYyNBDAUPBPMyxixo8E8uzw",
  "key21": "2JT1Y3iQ7U4hhPB1gWX1bSDJiNYV38feJDaERWD6edLRNTmsvLWpJJWLHPabNcqNC6BrNaMyR4gYQ26j1sci5HKs",
  "key22": "zNs9Y1NrGeGgFQ9oXf5j6TRk7eVtFjQftnc6FHhpDSFZREyqn6gdgVpyNcCQYNJ6kaF6yPN6ttiksHKVrXsimab",
  "key23": "4gG6fwCxz9M9mwzijB3w7omYxSRqtQDi3AwNVSxeisNU7JFMu267qMonF2K8Mh5ttagmtLFscvbKC2VmzhjVB7nG",
  "key24": "3bpibREMNFgZbUuhMEecNYmhMW5gj6jXX8ba8ZPzfUSfdhVxdZs5RWXzTm3BzY23rpJhjah7mApZo5Gs9NX5dMaX",
  "key25": "29HQezc2Dqbi6Zx8PzCURY7A4Cg7Nhya1M4M5n4oUgBQNjJ2KhHyrpv6TTN7iGkWLfqq6vcvVr2dX13MgeXwkKKu",
  "key26": "4DmsNLS8yYbNYUASvdGXHuJUHAi1VbFQqRZXgCoyLpiJXXJV5mzRfigKKbNz8CQaCZZg6nEXZ27w9H79pSzk2rmW",
  "key27": "3ZXmb7diogpAQHNiGcf1MkCahYYfvpMuELAE1i7EbnGurTQrfbqJS6xQRLuwx5yJzf3UaNcMA8dk7Vvm46ShSKoc",
  "key28": "65oDzZeGGNB1sNqg9Co31AkiuHymwkR3eseRrNVLSCqvwGoeg6qeCujFnL9A5dh87MPmbXcRb341EQEhK6SNJzTg",
  "key29": "4HSr8reEZvD99bEkdKqcvZxMPeeGkErJacmH8Xp9zC9gEVgSwiMt7ANY79QfqtQZ7LmV3q37iSULhJ6k7xzWhhrY",
  "key30": "4QcQqGURRg8coz91Q6yRagmwSKQM5csvfMU1ZCkVmHmLA2nppjB91b3bWontKARN9NiPL6YT5kaiekrj2JygQwTx",
  "key31": "2QbDLRJemGStNbXZND8eaYX9PCh8eAPr5L5uzNTesapKvafFUDAnoUypdWn4fL5DxT4pktwfMPYnfUZ1Hryhjii8",
  "key32": "2mvudhznD85DtnPLfoYe6fYbnUZT9n6DTWQkUxfXaC1H3LqHzzCXfZsfy9aheMW5Rdwemz973UYuHrLYnm7VZuKz",
  "key33": "NBeTxyzP29BQ7owGWEBhybTXaVfKaemeYP6dryJbFoefXNgNksYCzea7iPnrxjyd2z6i5Dz3jGvSc7CTRQYHwES",
  "key34": "45xS9pcbX5dTcUny3Rf8bfQB8wpdAPZ8fSaRUkLf9gQtmdEJoVvjTLJ8JL74sshofL7ZBMbQJjbDfobDE24H5ikg",
  "key35": "3DSR9TscPUTsqabjDrkR7quV6HDsX5epXGcaQbAzzFSgC1BrPj2t7kEts3BU6UFuLeUXSsfJV8ArveojLRmAif7N",
  "key36": "2ibanuooT52H7oRkRMFfBEhReUvwMrHfepMvNkHx9dV382acnU4QWZUnbcsrzAgCFeJd2nUc1kUGhjXjMcjZyxXp",
  "key37": "r7rT7Yp1Dc69xzAtDjVBHo3cRgpRNSnrLZhdxinAQiGLaKkPFEToiWD9jgBhvVWeUTTZpY2JA86cs17NxPabfi4",
  "key38": "4ttnMocKxuQiHPm6TEeKyaeeLXKCK553CU8N97cdH96bqifvdfH5QHFYxCiizWMcfsstpS6Dy6qpdmaaAJc3k7TA",
  "key39": "5PSrZAUsCWTgaaYAP8NC5pomdYH61pRF8jDRKGHaC1dyS9QhXKEJ6rHQun7sbNzdQQKA8PYyifKUNpK2ogLU98Bp",
  "key40": "nfuZVV19T8HquDqENN2BbisQP6Z3HxmvJxZNsqX7yVVbCJdz3qrsffJih3NaDkbWc4j4ugzUR7TLSnUuhjXoe7z",
  "key41": "3pSJiykHEQhpGoWbspps51ZRarwnP1zfYCgAEBdQqW72ZaGrbs3BNa8Y4Fsz3Knkdyf773NRssMBKMLbgbupMLb8",
  "key42": "4VcBZX2yeWufDexzLMBcq6vSHeECVDViisgDEkQEoYswoY1fbPe3Wj6x5PsnhGXfZws7cuRBA3yjrmMYz5P2ea1Z",
  "key43": "4icgv4fWBqiKg8W9mHP4bdvAyj3s2Ms1f6SN7vmR1ZbnDFQYwwVTbLqsjyaAJRQxCuiKm4jnBXkxWNV5ySvCesh9",
  "key44": "5tpzYiJ3XDoeCBTyz3J2KmoXKqSKPv1UQLjHREc5iRjN2ydhwhMBEemi53LKx1Rcj98qTFZeuvvQDHN8PYc2U4qB",
  "key45": "RvxPNyHtMANVCaimiybyD58j8FS3SEHx9dxHgbQ2yLZ42Ai5P9VSgAfxWf4xKLKNv1ZvfxzTAoaE7jDbZb4vgZZ",
  "key46": "QtE7SQSguqzniR6Ct5vDpKnNGEdvDUtZdThxdqxY8LJAFAeu9Y6LxkqX8F2CBTxUeSuCzxLgoTZaV41tFAE1F5X",
  "key47": "5aYwoMwujyTEq5reEK1f84mWVhc8ShBE2YYptiZ1KdyJ5x4b43k4gBteF6A81hshMR3nG4WYsxKpi8mM51TxYKEp",
  "key48": "3aAzq9BhecTxekqUxp3VFQUXEQjPuA51EaFeecUjCfdt58jnpDw2d6LbuNXjKACJfqDG18UPPje5NHvc6Zw8JB2Q"
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
