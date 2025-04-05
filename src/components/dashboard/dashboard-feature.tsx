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
    "51Ytwky1qNe4MUmBagFirpRY4Ukwv8QLkwm417Z9SJbRkvPoH347XhC1ocxLiQ81oLrY45aPNXWTkCAsVg9p5t1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bwNN4XWsi26qfAa7214mzGWXK2MEtGm64TL8nA1DqcuxB2Gkzcf2N2i9gvsnqX1rfDo4Niu2cTQmYjgHjWwF2wv",
  "key1": "8nPEkpazyxVeVPNVaqDRMwCQt6iG2m622RyqiUs8pYjBkBYEVWJtWJF7WYBgicWgjhEwhc6B7MiXzwvKrYexynL",
  "key2": "4FdLAbRy18T7iDDjWLvVPa6JuVRyPy4HupYRADFAAjQkiSBfaAtxDqNABNYJn1CSSsMpjntybad7PnLxWu8o1d3f",
  "key3": "5cM5R71gtqCmg3KRLEGNzaGfY4w1RNBA2hoYDRtqZ4jLzSrtkad58zN8qW5N4jHbpsaqMdhCAeZn8MZhP9ftLr5H",
  "key4": "33ZweR2JBzx1PgACTF7JUZMfhsZQZKnMy1mZTR5Ujr1a2JEA6WYxR9BGAC31AE4e76qTUSM7Tcbt1Tu8Wre6WdSp",
  "key5": "3jAisrGk4WUyZSJyDK6H7HD1NL5L85z5mPoAaLasJXDJKoHRNvj8uvgRaaH15QNyqn5MriZPkicxBdAdNp6TZzUo",
  "key6": "4nmFx4TS3F8A7HCZ23k6KKXHk2kjMuSKxNbe6woQFAcxvjxoLjNxyAc86uo4aR8D5GUHwJ8AgEKDo8i3cVn3TCBC",
  "key7": "2kD8RdwvDF63Br6QZAMXCmC3kZVhmvKc44HsDcTd3XWBqhDFRW2rzNrHohRyWcLvJnLJY5UMGX9iXifGW4Cb199",
  "key8": "46btQmJRr1SfwHQKayT6PZTqH3y9uMAbLQYpydQtdA7srqKv36EMvLC6PV74wyLEyuZzGLqiVz4scFnQjCDBk2RD",
  "key9": "5qAwNc6BtBKajRtNVrEBSNKHoL2aGtN4TLBx9g4aw5DjpWkL5q23ZUrTqaiM2YeMz1Z8fzftPNJLgdEm9StfomBk",
  "key10": "2R1W4QejsDSmmAWbGqp6brsfF1btpCGWvtjXuSRfXyFZwKqFdhY64VGb8pMDdLrCYfsiZohJvQeigQBkHNpWQqGZ",
  "key11": "43hceNkdr5PYnkymGwn27aT5bPDR3ufbH29Lq4bzNPt2G1WM4bjkgTuX6XGJ48dJv5GnvbiQ5VuFzHHYAoeBidiu",
  "key12": "4HmAZHVDFB6oBs5uMBQWibajbqvNtVch6RdTUx4qt2aT521NnqiabpyFKYfyCgekpZhcSShxPpHT9rvWYWCSZhZy",
  "key13": "kAhhyA4d1EJEePqWFUpX5Cr4fp8AZjkPdzdFRKvoUC5Boxydv2XMf1LFujzGRvBFdV94Qr12gcn6vyPw2R5JoCz",
  "key14": "61f6Dz8NHcCUPXHkwDYHDTmUwborafquixt2dJwPvZzHVGR3xAqtzsG3TpAmsgZpNZxR3CSZfcUgVn2HyruZQdWP",
  "key15": "4zpcS6zcxDdB9uN3aquqX2FzeLdtBs794EwqWixt5CCRofYfmgWxvsrcpcq9TobRaUYnSccoc8LUB7ZU4DH38WHb",
  "key16": "d1yEaioeA1cuMsk8NjGUT9Wc9AcN9G39S4LNJ6ZfKBKkhRyHtbbWWckKVN9P1XEDWfZ1MZEMkNE6HbKzCxZ9FRr",
  "key17": "3GdC4P3jX8QRcWFiRwoQeSFD2uaer5ncZSW4etyVqu2xPJbV5H9kq48vTnre5sG5zf8ApxJTWLoA1fpg5DSrSmS3",
  "key18": "3568wNtgAAeHMDW2Cv469bcfXHXyVn25mtpSqBP7a7aShvZ5RUefCAszmvfJo7JwvuUB6CdWmaEydPSEDQcSt2Us",
  "key19": "5KaA7HkCyjVy3brVK6PRjj6DDKAB4kgTXRuHrfJDibxCKTAmTB5sR7CG9Qvi6J2U2YuEQ5Qhu1e8Sg8dXbfS7tyN",
  "key20": "3ibK4Ab6j2XPwWwDwBShF3uuzN85szTa8eDYYg7FcknpQz2uLzxiX6ADPiEPviiGz2v5YCeYQkqZ1tPKM3CMcTsR",
  "key21": "5s3raT5sfEcyKD2hKHGCUfkWxAq5KAL4KeFFpbD8n9nj7vH6uy28sPpZSsitA6HDSMjF4yu4Vmk8vhjqvkDn2GdU",
  "key22": "3ggcT3ZQ333Ak4LZrk4RjtNrp1BBEAQ4YFnUbvDNDQcUCvewtCZ3FfxVGL1dKTg3CQQxGrvXhevdeHnU7roempv1",
  "key23": "5278hW9SotpRaJTNAyn844Km5P3PxSAHXWDyxwRiL8Jmc2JgfNWriBvJzt535QAcqM7eV6jKu48MPCoqL5fjbeKX",
  "key24": "w1S9yS33aDf7J3un3F6KdMqeLZ9VGdcqGrkEiwitXrkpq8RqEnzUEq7xUZ9eqiKm7ThKLxPDxSHxBxRctSnNbZs",
  "key25": "2TVebAgQo4XwqqxJvDPfpNbhuoWtkvQhyZNrEbs3swMy6H2EjXdabACb3wNgboB6ZhtkScemoazWpG8sd88ezj8Y",
  "key26": "299bqBH1zQpmwg5bEo7WXb6Guv4shmARtSbtHiZ2X1K4EhPFnSsamVLJYZbU1zmUicwUtrteMTo7nHDMqNvFectW",
  "key27": "5GybUz46oozFYj1FZCkzpeRu7DPGMWuhp94JGZxmj68u3hBpX2oziicPi1gWHCrQXeW7y7cA6ZtXmyqLJcQcXmzm",
  "key28": "62qskygAKLYwSqV916gXCP6hK1k2VtJgheJ8fTMhsWwExArqbkK75H1LDyrcwhiEXKimLcd41aJYoLHw3m4NbfyE",
  "key29": "36jwe8at4KgqJzGTEZjFhgrMwZiyQMKTmZCoB6jK7yuR88EbbjUAAQo9VuamJaYgkCmdgtaaNKZbHpL8ok8kufvN",
  "key30": "5Zs8K5W9egaMGQqXRDx9mVFsVzLRGLFrn29gepikHzDCtgCaDTW2LB1QH81zqcVeKrUfd2W2MTjxMPASxAFod88t",
  "key31": "2QbsPb2zhDw2miEkxbYvgb8jFq8LrhpESsEirX47YB2kEj3JjMnfpM4uRF9FmXy2G4mMj3KEwoqEPqaaefdt98wA",
  "key32": "2S9yK1imrTnpVsqoXiSwHz2XnFqYNNBfyNAyDT25nXjVa6UbaqB7hXEEM5oVE9FYQdTQe4PNNhQVVCAdGLtPPkxf",
  "key33": "TfT7QD5Jw8Fd85kUroWTERC8jx3knDq8gupVcGiDHTXugcVGtLSaHDyBABcVh9gAptNvqFgbZYfyV7Wuaowb1gj",
  "key34": "2SjuTMHSLwqcHYUossbkwW2tp2ZBdDTA2an9rfeUP4GfQhgjabQZArT98PzBFKms5n4JTVi2ZYaVjvXki8nG745J",
  "key35": "4PfMjiS5wbZ9Kq1XUDB2V5mSgHZgfJrYMFhMNwC4seK81AdMVGDtQB8EAGsniW14nwXH6ipCRF6tBC9tdSmUeapt",
  "key36": "xW9RRpQ3pdBANLgwidZaDuegyYdgjPe7E8SFqf6pCDq5u9HMYYB8hQqwWChdgCoH9GJhc6fRVqacCj6VdfR7pmK",
  "key37": "supA9VodaMez4tuj8T3JavYJTVKhAZbTpGNjmZh12H1n29qXmSV5jtTpxFxY55K592Zn1e7zD1GYEHWrfbx1CB4",
  "key38": "2RqVY4XJWmuaud1HN5nTmwfGu2bRCsTEkoxQ8curGbiERxsM9RWo8oAvA34BVCkmdw7sYQkvAajCd18B3RPbSf7w"
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
