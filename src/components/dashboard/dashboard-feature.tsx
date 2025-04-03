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
    "iySGvgxbSAYnZEFD4v7EEbnMwPs1NmpZaUhxNRMbfDT8c5DTwxFMhx7S9rzUBenfrrwi4yNMtLZoyh8amb8awqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XEMArvYENkx6bUzrAM1fpVJLyNr2to6EgabpKcDoS72tgBeaByki8gnRicHujxJiaCoXCP9KHz23yMb9wroGJSv",
  "key1": "3WVCi3zVnnYFdCm9wJgnanhDS3vU6JGv64XjAyJokx7coFnS8yBBonp85Y6iJ53U9433Uz5jeMvy8iS3BY9Bdpq6",
  "key2": "3ej4zGcGoa7MVTMWxwj8TBzfkRXdrNdZT58vyApoXBHqFkQP7Qa1QiuQPDAe8KfVP6TUpdkFYseDLLNniA24e9SH",
  "key3": "2667AM4wyhgvA3itrS4iuvCohHi45pFYPcaARCTDPq85u8YYfFRH4e8zdK5oK7jJCZYMPpzxZ9eKxPzSND9GFUA5",
  "key4": "2w1HsPjDQ7XpCrM7hUGguBAJExBJMSJaEq4ohMJJW66gyYP8FPDnrd4yJz5Ndt8NUFSt1zQA9VvSj5Yu2L418AQ",
  "key5": "4gQjBzPRTd3nqLV7tJegwVJpJHQ3fYWBUgRGnKutxxhxfYZFNT8xa2Bk9FgeD9oyc3HWro4bY57yuVipdUQM9fNn",
  "key6": "5aXtjYk8Bdq8a1BQer4E1Ya9ZC5MT871qTRr5kD53LzZqn3y1n9ri8bbEx1mF9qZXso8ikdKiC42ZV1ZqTcnjm39",
  "key7": "2gJbWF6ydXxzS8MmqadM3fTsNjwcgaNAwQA1dCVcinaq4zxVs9Yvub9ZL8c8aYHiVVN3ANjX15ES8cj8Th8tMAsx",
  "key8": "53gurzWHFYDfQHzLWRs2J8QKfYRMYhKpyZXHfrXe9jtbBpuygze3GH9p1VCJAgrMd8xFgrgEzaGTw666MiWSGLsn",
  "key9": "23SChTVrptvz7FKjtLmU5cShjxCco5sbExrWdm7HTAZPJ492N2AiLvtD6CrSUWdq3YboXMDBHmC3AvoVbpC3bsEo",
  "key10": "4ec8gNSBCYMbcPF9bT5C1yaNmTRoDNdBFKFXjX1VrLiZSRVkjpn6FhuZyKbsHrQahMBgTbzRMMND48xdFnTGQvKF",
  "key11": "5yxqo8ZGy7kPSkcAhprBQAf5PRGrW3F3fpgTWSmFcGkoyULdzFN9NL9ax2UJm4UwFpyHHGcLdGvodz4DQRRbskHM",
  "key12": "5L4uV5crvmwxx9Xy74s11xDtPufybsDBPXCHLwHRQ14dQfYXCj7sPdKHEJipPJCS8ux2wijHkWJCm8BuxuTCGNBN",
  "key13": "t4LVU63hAC2yLRkuih12ToWxEyVsxM2y4zJT5ZCT3wFvaSavJQJKYSW6thS2Mc27p9fFXyTeLHb5zqqP6ccpt2T",
  "key14": "Bpcdvs2kFkU6WERn2rremZeREHnWt1wxUnhwguAXHHhTimYp6JgVih9pnCK4DtPzgyG1x5gDP8DJBL8LZoPm1db",
  "key15": "yLtdhaDTdMprZz3HxexTzYhM6mpCAFe76hgYbXWiYgUL3sAbq8u6846zhD3JPBnBJRuUAid6BeULYy2cu9bdQx7",
  "key16": "5R8LMspx3QjoAc8KCLNcgGwxdMdtQaTtVPWnLz6sLzhvC5KYP2uHt8KFxDtqKtPCLMsBx6FwUjp6yEPFq8fzCuVh",
  "key17": "5LKk7bFWgHCot1GhcpUAbP4Y7SJjXtxzfCAjvQ6ZPauXZoPAejpQdcZR7ewKs7qZ8c5519U74SuujX3uXUeiMcfd",
  "key18": "nxQym4BKDHeRUD3oH9m1Q6fhKdwbnhfSJFgiFx2Rn4rmgeeZmFCQuxquxPHwtfkM7kcHjQaYd1PCzdoGxjaife8",
  "key19": "5mTPpQLjWpoaZYdLUCxtYYdFRZeEi2nW2wjWNx4iziRGMngFYZ7h1oyLyUnG9dfUsYbxk7T6pAggEzRsE7kieu1T",
  "key20": "3KoToAtTqZHCEBnbi7zjVTnUHWdVzUSKrqu1SyBWtwsRuiyWY9uxeMPwYg7UeSu822j77yrPqXnq19dBsfrEMnHk",
  "key21": "3RhBfnoqhVBPSD8d225HaAo9ST8Tq8MQit8dyhHBe9u3V1FmYofiHazppuY35uqVgU7vyXkR6bGoA3q3KvHhZMNS",
  "key22": "3btkJ2i9rWXBCxNWCvBwoiCgAQrUx1ymZmSaDPUZuk54JhWeeJt8Tm3WgVzstaUkeQCE9sso29nEgSTBbPEmgyLL",
  "key23": "2GZU4VeFFMjPGs86pxATpgTQVF41eZa75UWKi1Gtppb1269WZfY2xgrAecsoRNWoHHNf4a2SCtTgMYDbSt2JfGeP",
  "key24": "4VC1bTHtBcPNNohJsaisJ1nNYs6eZFfSMg5uGXFoJ8F8cvVvsH2zRWhQ34gEtdkp9LD1RUcwYRnBRm1vz1xuSxNc",
  "key25": "442CKsfrK4rM7Gv8cWNKsingzfSJzVMA584fVLXxRL72SrSdBNH1rESUCd5ni7JAUTGiocdLvPzv19Uzi79Awop9",
  "key26": "iUPhQsh3893Nuwwx3XerKBeVpnmpPDHgaZkwR6DTq8ufingmzexvcgeZjon2w5U2g57RYEEobN43EixS4JpCCC6",
  "key27": "Fr6k5CMgHLLeq28DW6xozQLssr7VBmsc3Ug67rRc6UmpWs8sAxdCjspD12JzSnnqfEy4X6sJjcB4zHBrgpVx3MY",
  "key28": "86tiJe7QAcjk4DBH5B2cn9d6LgniwSNkdgpuyQadNtaCeFWHvyFFuAeW4ytBwKDgGZxmKUo283qGJzQv6G9qmS6",
  "key29": "5AUjreUezL9beSxnRT6Mm54AvXKqcDvBRC4BugbvuFvD6LeW7UJPm8gGHDafi6JEXxzCc5Bzj4ahjt6gxx5mCbNv",
  "key30": "5X29Ez3rNDKCDVYuvcrsyF8fVCCMT2QdiiW5NQgwHcH7ALRe7Dm9ax3F7Ni4rqGRufuGjGXGkcHnoYaB4C34QnR8",
  "key31": "3ApYF5woom16vAFD7nKag2XFbyKs94acabDNkSw5c3KKJUBNjJgMqwwvTTZUvXXFY9Xx2NA54mjLShA15Qa7eZnR",
  "key32": "5gAQ1P3KSEQByT1WnSFEpgsaAuXD4fYFm6B4gWq4jp8aeXjcd5mxdMUf6ALznWageQwsfj2daDvQcr1equBj8r7v",
  "key33": "2zKs18MjCCfUrJMW9aQNBPsKVSSRivyTwBNvncfgBLaq3uLu3ExbDdZeWzH3y3RrRYMRgQWhWosdC4Vf2UGfKgLR",
  "key34": "5wTG7wkEF9SqsXaaHcCNgkpeXAoRPE2dDZKvT1RJURQjGqzTRUnannVuotaANrC9cjg7SuLsgQ1FP2mVMe1g3Wbd",
  "key35": "3AGYYtdqdCycJciCHFkrqwymx6jCFEej8fc3JSjTRF5jFge8HToL75Yu94kedyqCfwpFvJ4pMSkhQfFG5eyEb6zc",
  "key36": "i7aqZc4ehUSRp64uYWhP25yiper65L5JfkNhy6E1Q3uo7ZaFEiFJ9YVzrZumzTEKVmD1U9sXJAYA2ruAjMuipTe",
  "key37": "2QsnYHMUoc61k1bSe8yv3wQj92iajZmg2sXHxi7FcbsahffHhp71EV9rCtBDX7JjfD6WHKoPMFcxABERmWtz5Doc",
  "key38": "3iCrX5mjcYXLBSyhxmT8MFx776iRNFEeydmdEKZ54vkgTxYx5KP92roM1sFoyT5ih3UzXTnDshfYs7xyZwfRpTwx",
  "key39": "WSy8NkKiShQykWNrz1Q34BZkvn7yRg4xuhLns3CAj8mziV62r8YESBg1PSacRuVF2Bws6NKatd2aDeX3k2CkbsL",
  "key40": "5A4GGutwmXk83FNhPnCohWTJVuH5C1SwCvufo8y5UxSTUTvQ1vVKHiuWiDDh1jUvmZcZSYJL2CHzdedV7oEM7XBM",
  "key41": "3AMYBV6E5oLrx1E44ThLXqKm9BPiFNNb4ERtdKm7ajrXGHPU1ujqMZVvk8Hm3RoqQhaWT3LK5zPP9GdUB4fNEAeT",
  "key42": "4WWHeiCesvRBiNHuc9pMcKryDfF1B9HjcPtL4P6UNmFq29aVh5k2QAnX1GoZ8YKhGR7u12ts58CQrxUdshFXKqY7",
  "key43": "4p2vKDqtkYLvCrJH7DfuhJsmhJED6PZiRVmSuMEu5m3soXyTpGUhWSuZQvvNj5nHf8iGUS73CPovMpaeouzTaCSu",
  "key44": "5syp9rKAykCEtzHRavSFZ6ZTt2sxL1HRrxSFnqYdMRnB5CUisCD32xkYTJN2wHTMYHR1CEVumztciW48jvE2r8WF",
  "key45": "4hV5kURTqH9oxuDbGUKRXuQu5NRePd5qWasbv3h1Qj6Ec696wgCo5K8DBJ1AzjjoESfGkZGyoTKihGYM582yo5Da",
  "key46": "5aZBovcChuqUy1Ht5uGQi39bZ5hSErRnJhSTLKzg2EpPS53q9wCBGz2FB9iTE2Wa5cpxPJ2THYK9YTFxhnNEExxZ",
  "key47": "5uxmrtqxSXPDQMDwyCkcV5wwikWpshi4HGknqp2JFbLtjkAWTkvLWwfGkXqTMUvJWDufHfsxGs2NySPXHevjZTfH",
  "key48": "4hiKSKZfbR2stkDUSdguFt97Jt1ukDiF753Jde7M4EawWXupaFZCZD4EHyvh9nNf1ry94QzfdayeZTbhcZevqf8p",
  "key49": "5r3REUU9vycQgDAMZwg82k6dJeLv2M1yRZKL8CzonDxpLLC6SCLvVNM2a9XkefJfm9khwbm5HRmb34EvDAJE3gsw"
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
