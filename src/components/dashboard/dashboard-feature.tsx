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
    "XYKwRAw4CxYHZYoAMjPGvdqo8p1khbqPg42Zy6LaTb8zjhBfaCpfKu8qvVKi2kV5tLQFSzY1muCcWCu5ip4vFpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gQqSP9qkaamR8TFj8edCSBuAerto1NxzMXB82hZqw3CDP1ghSYiFmCM2UuBXbHxhPLLEc9X9obF6Cpmthzbpxnx",
  "key1": "35zsnHXfbPr951c53Rn8SAJR36xxmBuLSh5AucAF8pHTJayWksHkeDqfzS8WJqTHefZ9FvQrinebAQ6nUcpjX4fs",
  "key2": "2Ldrq6K5259X6yv3DAbtjaWV8EbqBwveBpMF1ZLM2JTGJBNvSJLA1BSPcoBfq87CR6VAQKiTpBMFxVZtW3tmkJsX",
  "key3": "ZtvgyYSVJD3d72tPgTpyEKWbUPz3pY59AQxtw59No1yNuZ8rfTrkucuEQg5cbLzji1HQvoLnTMh9LDL923cp8Xg",
  "key4": "g2gavkYygDaurs76ng47T6LJ6dDH2iDsSpBs9grHwcgv2gCpLSaRReDtciexHeYYs1ppAZpgm3PMam5LFY2xRoB",
  "key5": "32vgwuvMAtGrNWQJRw4bMa1CeGhADGeSQ3P6gu5oL284xJRtvmuTbZsDum6FiNNikHgCMro9iX63dg8q9JBPRvwN",
  "key6": "m75Aq2aBHBbohqqoxYdd4agqjktVEUocnfchn8G5VWnDX8gqc2uiLpd7GbzMCRCjFKVNv7pNi2aCyxZp7DiVFLt",
  "key7": "62ehaT9fzfo1uwZ2EKoHmCNrU8WPh4gnapHqpZ3fLP57UHNqCSufKwymanbZqGK6KQvV9ELmGViSFdbY9XwJXnyh",
  "key8": "Ub8w7LQkLaCyr5rhSmTawJtHD3WFX7dWfeurABbm5CuBjDFEZtEaJde4WQRjxfKWZ8noacipUuxL8U4B2HPCbcb",
  "key9": "66HPztsNNyXygHxYgfdBKM5TYJxi3PeeKZxcLwGp3GwMAbTUQsFK9NPaxX81E4vDZ7JzLUHbL6N1N9a2w2KnhBTz",
  "key10": "5YTC5i83QwHSeZP5Qvzt76PVJkJ1hmyvX2eTTYPjEWBq5aHnmFqtTPom3rF6FrirhLampa7oMgGm2pPmMoCCWwWr",
  "key11": "2yrXf1XG1hq4dE98PH1dPuGJ4AR39QccfSrXkXFxaUXGQ1TNT23W1FLpY8w457fAfMR2JbkQZz7TkCdmx75Y9Lxb",
  "key12": "5M9N2MVaYNkAukgZ8yeWrvoPUZfXYEMnUaBnDfvtUqcCAzfVkiNr4wRHkSZSQCeLUuVwNKs6bfpGL27B73G7npz",
  "key13": "2Dr6BwdY8W9d3AkTekSSjyCkQiYtzTbr1Bazr3MJt4V7g5qDr7Sk2fp6geFeccMSW4XAghQLTAvfk7Cmse1BKBfw",
  "key14": "5jdEhqNc4diAWUyvsPY7x5PULWHhPuntuiWX81wD83VWqFLESDJLqzxVcynArBn5zeSWUBzoezoGmXJVszYwDY6k",
  "key15": "RYVoPbhMHCLhfj3QgeiHKvoDrM1H3YB58TK85GWRjwPBRYcFCaa2iaNAQ27qbTGNUi8nKiS378Ph65yYFvk8LKk",
  "key16": "4Ru2nsdPtvMM4RkcJkxCqQzQEMvUMMagEBUCM1pCCLzcNp34KGnYDE5uBGwDHVXXRXNetaupLSN3C7vk4SeBo1SV",
  "key17": "JsrvzTmBbJA2UBDfwPNsan2mLjSMnA61fAgqyGUaPEG6XK3UUmaQH7W4QcSRLLSE7bCDGrHQKFETTbSWdH86cW1",
  "key18": "2fzsLvSWhuAyavxdYxD8agdKKbB9dS3BeHz1F5ZEwC9wngCbA2rowRk6LCmM57dsnTEKrVjJ9pgitNtEMpFG6QsS",
  "key19": "4jp6kdCZCLjJzryWuANcCvchbqG9jFtjZyB2ZNT9mSzfd1A8uN59vu2yFNdM9rGNBeEKEkGT9XoLkEqgSUkqDGCp",
  "key20": "5QTFdnmb5CXF7MF7M4ryoEuTrvqdLjjsABMWkU3c3XyStr6e4akbRPYMiqvaKWcFf4fatcQAqWD7RGn2ZrqHR9t6",
  "key21": "cLRi8MBBhN6Q4hguaMb6UXaapD9LEJKXQrsttd5vfMtWaqNGN9uMjLQPNBhqxhp5yDDfhu8ebSDzdfRUvzEutwe",
  "key22": "23gEm2cpE4y7U79dFzBEjGXkdwxaquPNGh3ixiYC2sgoQsNr7Y7SBHBPPpSLrjysqj7RRt8YeVjEg7bxjiv3A46C",
  "key23": "48pccd9QnF7jE6sueX3zkuA8PgShRXoU3BiquitaUkGjQefoLsMcvhFfBwRrUBHy7uLbfS7RmWavFdwrB4ub9y5y",
  "key24": "2E8wb8sHgqY4qL6pNgZhB8UEA993aMiuo9JVEKg5uxQPYLPAftgWVGv7zZuCaUojbRksmSyYNJHVffqQwEqHuQHF",
  "key25": "49sh8swdndcVj4pwJwFhbLf68Y68hp67t86qiZyKBK6pVBMA4xdoGZAhvPFZWyDeytAR8cdR1o6kYFVvSU9rJsf6",
  "key26": "PRaJcHJZ4nFqZu1kzho7rVFWHz8M7XKctnr7pooTWiapBCa3pwxKXNJG1N6ymv9dGjwUvRQZmcvhdeLyDMXD9x4",
  "key27": "53NF2E5gZNU6Twh6GEG5zybBxPLjD6ck7rJyzDzrRnJ4AHAMmR3SWNZjLwUt5To5YhRhgENBvA4LfPt1A6sCaYPa",
  "key28": "2xoCo1aBZHbJkYc72g6NiYVNKVvHEzwjU7ifHTaXsHJd2TdEMdphNmnt2eqvFpZF3Y9CKBjmnLg3Kq4YVkkiAJ3X",
  "key29": "3gRwfR8xhDiK1AFKwbQURF9AFo3tNwMYV9P6KkSTDCw4NiN5Az89bSRCCGcxoYtdnQ7X3o9VpHFjter4U3QbQvwF",
  "key30": "4Lgd3eM4HKcBUBLJQR6XFpvQ1mtojSmctx8fMLNELhG4UTF6aWrZdygevhVzmBN9hHrwbQLnDG9VSvsZuszaPaKN",
  "key31": "41JktMa4mwNd8VwCn4p2ftoYxXH1PHAf72DpahnAUzKnxggYqmkbaCm9zzqX4NDywM1mzrTFDqvdSgAbaHQebVyu",
  "key32": "3aCJ2eDYunKGG6rCRPgae1PAmbyitMKUTvfai5DJW28tG24iTNLwZbr14qLzWeKGqXmG6SC8DXysnaTTar5EBknq",
  "key33": "2bM5x1hHGY5tZ9nMKq2XLXuwMCZGPoh2C3KedjGxSvG5GAtsogezDkiZfESCxFMDoXf4TMiE2FY2uEYDjpEYiYGe",
  "key34": "3z1k7ap8LszbnpJ9Qj4MvJJ7TmodvHuJhsEwVP5V9awN4zyFpRvkwynzc4AzV2j7w4w5EewgEAMuUf6AZqQriWrt",
  "key35": "HndZef3BG6RvJ3Jei3rU7faQZnGSdoYvNih6bfaEpKAibeSxxys8fApUCUbZgohrze49bSgSXvDk3mesfXiBcg5",
  "key36": "4nLhA94BkJLApJeDpTLYDP3gLsMJjaUXChAEgBzS35AeLGjp2P3kK2ZAbRivMKuop2hbKerdszU9Yx7cpNL5CMg4",
  "key37": "R48ehPydr8sK6m37aYEfE8fyJR7sgHXXhauAx5bEJCY1QsQ1Ls5Qz1W6G3znq4K8zYW92fAypHcBnTWJujnird3",
  "key38": "31VD7nqAwpNMXjrYwhXDZJhq2GtnipZRsi9yuhHPfnZ9bBSkaSoTragAh9nzs8tCRe63CCAJTkh2ouMxiKEw9DrB",
  "key39": "4SbnctGddbaMenjhzSJrF9WgqJTdV1cB8J7DUXsb2UwbyKH98F2Vze49HckNXXqHjmxTGLSRxdT4cWQRYYWb1JsS",
  "key40": "Ctbhxeax1s2PdmZ2QB41bqKytasPppJhtn7Q1iA4mt6gPtu366wdFnuC5vQEaWd4F7MJLjWiZ9y4ZvVzUFvJXDt",
  "key41": "3zzDmZX6g56Mumi9GNk7hwPhCHsySqPWddMDtpDqTqjewwSJDHHSzGF1aoifYrnLnBCndyXwZMgswqsZLrEmEbuK",
  "key42": "3Kv1af3uEVb7v8HJd7MAJ8hptVkd17JdpcjkuhqY2Xh8yowUeHgT959RGdHMiiPfPBaznRmyQ1ZqRQ9fCLHmXbfm",
  "key43": "372dFY3vDvzPcrqb3xCP7jSjGF2b1Yio9FeFzqzXxeSj22YwRP36aJXaNFbyMBCvyxDyfSenCcCz4NmoSrEhQXAd"
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
