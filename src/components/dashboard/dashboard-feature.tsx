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
    "2ynYzJc9FDpG1sJmVVmNVbdYZcA8KPSBYCL9faySF1F7TXfEyn2CV1WizzR63Q6XgV3PQCGvN5CwoMfqZ68phuTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H14sBZfLzXJQ7TJHfhuyL64FzoKfTBB8v5Ac8422Mr6jnaM9u9hBrkjz5SLMMNo95p2DWPU9YcYHaqsEFLAYf8n",
  "key1": "43Yfy7Z3ifAegqcPegRYzJ4wtqfeaQYeqrzUyFSmEwQFDFFd5jXt7aMDY4LtsiH7YsM8KzYvFF6k6qjGXY7U9htu",
  "key2": "4SpQpYHhWkz2UXTKBhuvUvj9NYoZMwtZaeY5BUmnV1WYGxLbFUrkf9LvijkKWUBnXL75rmXBxzpY4vHn3uZhTecw",
  "key3": "5JuD1tghnhBLFm5jcqbFUSgrefY52RYguydqu4EQ6K9ufTJ4FzTkawNoD15aTx7cwRp1kPSRiyzvkJ3d2z11r8Qg",
  "key4": "2BefKW9EUKiE4Pq5CHheATBdYMyy2WGEaF1K7g2wrGUddXkNQq2PUq9xmMfEakyUaubXap1eWewYnfRgwWKt5uxp",
  "key5": "5QW2ZFxvQnjJGPgg8D2Crvn9Sma8M9NX68EkV4rA4xasCzmnFmU2S8aG4W9mV82xRdTmF4AQzusQyxfEkFGMf5Ch",
  "key6": "zPLSrpDSvKuvHMYjs5uWUyUToNyM63t6yKCHSotmRXhXGvqKhrnhKT2o2gX66rSkFCtRU3mmWYWXh7Y22g3gjLD",
  "key7": "2gfeevcwBv9DeYQ4DRUvXv5chh5aB4iHYqC3jMCh6XqDZdVBjzHtcNvrk4PvdfytmX97jBjoxLF2joXgikLwZYq3",
  "key8": "2i3eWCJ4TWTmWB3A6dsFEPGwtjE1UQ22snySywy8wiiEXaeEeBEam1WmJA2GTu6qoVkqhUGtqzEQneJDbjZbBzBr",
  "key9": "2ZTGNdo7WK5HSQzPYKGq3caGqGhdfC2TwPMGNoPeNtGkSiWgLCswcbAupNR6vk5ATgCpftgqZEQruxjpkBa27NwU",
  "key10": "iSiNpxqUn1JDomWHKmTqG5krupD3DuFwfPLmaWYAGinhc29zA31Xvnem7nHx5pa6FLh8xbvkk2vSAtM31Ez8BoF",
  "key11": "4Dh3cFJ1LtLsQHcWkU1pDE6CjcmKyEMkVZzabZeJx5Py8EuBu6C9JrrRvCex73UQ88QtJ1cMouh93WPsqZ4daPcF",
  "key12": "41zLrMSC7y9LsisJBQQPab1HoSJBaLZi9LBRduWZxCTexmGXZ6i3h3mo6862ZNattVbnFqErTZ6yEq1ZeYtQznYV",
  "key13": "5FgtFhavpwmaG5p18Y9ULnuT9gfmNXtSX9ANB8iGzrQUqTbrom5N1fWQd5isHZzQmyUq29abxdHDZt7TXEbBArm3",
  "key14": "2JHLT1gxgeCsWyLz1S5BSQyqn8YWKQkF5AtQhGN76FCDozXUnEGSbe9vZQXkPQwcLz62s3cMBtqyy2VGLLU82T83",
  "key15": "4Uu5LvbsChBssbJhEnuXS9trsbYzGqWnuC9aM9Uo5BDMpxw2wGKnHWC33oeYbn6HFQKigKetZcbMJ2dDGzGTT8ec",
  "key16": "7xR3v215cU5kb2ZVr9YVckThJ7jya59LFMP9JQxz5bpkUxJk2pKUzFhunzH349cpKUgBxCEqbYhU2iXkSf6daaT",
  "key17": "EsgEUbQJyx6SmnyDzfdcYR9WJ5foXAy4dxbniSn9FNoL3khweHLGCPsirAyJzawYn5PUoEhUaYuM5xzGGZmLbQF",
  "key18": "3j88Naw7Chr2tDjtXjonoGCZc351tkiSPRn5SZuwn95uvDJ36pDQU6GRw7teFKuhfvXokccqexHKariqQ1YzpwT4",
  "key19": "2XvdjYw6rSzW2NexX3xeNZ5eGXxrCqBiMsYdW8q44mPNtskFVDCMhUMoiVaZqq9rqAabUKxBBSTPgEbQXHrcMPUX",
  "key20": "2GPLYDj4kWT3HdCY4FaMtAicvZGDbSyw2n79DApmWfZCP8CYKcqUrsGYGFab4KhsCrtVJ9UR6MyLKkRXq3Xq2zjo",
  "key21": "4ECunP68anPMB2VQ3FsNaUughMxGAqYyZqXeMe4vkggvRJCxCFSacpnBmq6qwxcYLPVt1wMGSWBrgfgDwbCH9trQ",
  "key22": "cYBRMqei6JAJkDREqdgDVAGkxM7BnUuW6kR4dyFiookwf5DvZtNYdPPUm27PZ5FTxruuWzag48DQUEmRdU8uZU8",
  "key23": "5UPmijQtPvta16m7ckzWp2GYKB5pW2urZDbfFwF7y1wUt4HsicX2fBcLUDLCto9HGd2he3yTSLKCtu3Tk8uTfVjL",
  "key24": "4afhwmMh2kQ13iuFpWuqhEk5Yzdsxis3ceJBeu1TiH3i8Gz298xjscmDoePuxwP7s54ZAA916dxSfR9EJEH3926U",
  "key25": "5b3U3Lzuh1mXG4PeQWkBE5LY5YbR4M5MgMKe4VF1tRSfkGG4T1rwKwiFcgrF5Z1GsAiYE8Svdugf5Q9TqLq2Wguk",
  "key26": "2qTJjJiN9zPndNYZwTdE3u8jeuyBaez7mJ7NDnCnemsY5WDPcUj6L9F8WsNVM4SX7WVf7nAEAnibzg8wJKjQg1P9",
  "key27": "2BdykNnZu76TqvmBk2W3GuZtXUJUkyuEtXAq11oFjNCKmYX9e7PF5NqXfyroxzxYWNK57ZRTxDa5YG2qjEUZct6S",
  "key28": "4z4y4TbEKmdHYCf2T16VE5dbL5nNXAVNgm4BwNMdqoKAmUqi5gY2pyNRiBRxi3cGz3FygvycC3PUeW6FAdjGVoBm",
  "key29": "Zv9riqHp4fx2UHWkqw88rdQMCNwFpizipvMHKEgK2JjQrjVy8d4F7oP3bTbnUFsWxGY8VkCugnoijqMVagNs5qF",
  "key30": "3Ei9CGXjTV9uEdYdj7U1uCXsacwrmKWrjfQfVXUT4Wux9juSWaZCYpRdf9NwoUWYjosBJdnZVm1LnTJWohb95qNn",
  "key31": "5WJ9pJv3yYkH9fGjUK5euABz89cipefY5xbS4S3r8ySqhLzfDYMyeKtJQVWTpuMQcTzGVu8sxZkV6dLnEtDMGFqY",
  "key32": "21XyYZwvHnv6YPr6A9V9cYCteV1aJ7dsi5egEBozCRAQ3shU6qRXCijQuvry6QQcUc7ZQx361S98yv5kCCFjirWT",
  "key33": "5qzR1nGET1xi8Aq3b7VmCGKwk23yu6MAizH5Mi8Zw8u59seBuW7nea4K2B1AJjuX62yYp1YXNKcKN2d8fz6LSiaU",
  "key34": "4G9EcDCmXr9njEyxZt62ESFiQDY4Fvp2zii5ELJETUf7Nq1zKmuGQfRQondaVZW4efx3zY82p63DmG4rTSHTi1R5",
  "key35": "3ThCrbjHcFagLzezJXiPP4wqCyBuvPxfzrsgqBStWKgxShHQFVvC6f7KJFEkKTsT4cZas9k5bbSEmfqwJ4yQ8tuf",
  "key36": "2NB4Euuun1buwrGoPGgzhUtHY7D9NhHe7zyAGCL173ah9mX8oUFxthhTDCN7wFfYeoA4MD6G6EVtdPKiv3gVuBa9",
  "key37": "N9xzzViJMiYBCc1F71LKt75cxRAqfBk3wuxkBKBjFapkUQVwLazpAFd9H81T5ZA2QR8JkGiBfFmRCaH1PJiaHnb"
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
