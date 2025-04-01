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
    "38wqF3BNk5XB6nmZjafQrmMLojmkoLD22EEQVauwhRBrfq6ePX3RoYASSPG3rQBo84oYuXdcAaaZUPzvvNzsUuCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B3sQVKNhFCbGvccNFvajHDXXN2BBuy66Tcxb1on1vaLE6gzs39nSTfhK61gRir7LEDuuZVtt4Zc2xwBdTzsL69n",
  "key1": "3E6yQDY27KzLX498iTJ5ErwoHeQoF4bZMfCvXB2ZzdkQ5ZXjLUrEzdJodNVtBzKa1SPNDUoEAYMdZfGdP8zNMb8i",
  "key2": "44HkYawhuUjX8LAweoETQNQCGqSm3A13Tyt4NtUd1WtPF69kTiSBLiSdVACNqm1bJv9NsSSp4guZwk9s6sT1bevv",
  "key3": "4zY4tXa1RZkEfN9HJSZ6Xi8Z8YCMf2Gwt5vE9orcJoBF4agPFqEgyeFWy7BadiRctwfMYyXfY8H3j5spMLULpVZY",
  "key4": "5E5ui7i9BNgQXSmUShP7XwdUpUbgyiGSA6kt388iJFR8HvnN2oBVU2T35pXMyrjNcGPEWpNz8gZw6uDY61vJShbg",
  "key5": "2T1wpRDp8hcfNyPBEFVfy8cgqXuxqsVTtvzVyXmbwKu3Z38iACuxLcj1ppAuqbazscNENjnpSf3tmuNwdXzido78",
  "key6": "4D2wtZBM78w5Ycm2opLCATivMB6jNqGcn5uHer9KQ947MmnDA9SJbHUPbvVG55EvC9rXgPfWcAXWWgWPPv5nMANk",
  "key7": "2WvJYQ2JfSGcoozYRzTZHFxvFviZsqvfb44m3yCveu9wUCKDpHM61kUvnk3wXyLhcKsB6dFUBQnMPND1mX6dDzbs",
  "key8": "3YSgLE3hGXCeUr3MvjFPjqA3KazuSWrrm6yC8X4HVrrJLtc6HnepYfKR8A3vVPFekXt6gcux7BRoJ8G1isNK9hev",
  "key9": "6tgmeMym79qhypr5eoy83oFnZuJA5r2q3CWfg72JgpztJDMt1HuxkZN3FW42otF75fwEpSgx1Tdz4X9d4BsxHTs",
  "key10": "3Qh9TBtr8zNELFLwWkkQcTt5BpqfaZJ3aJ6P6aD8g5WTuNSdJFR6vtbRHvf46oeDpPoPhMfSE2eZeLgpLQZAW4ky",
  "key11": "5UvPkZEZdR1pT7LGPyqYpt9iupHMDYbi1gUfSuXwYpu3XGLV5wbM4oaRJJ1jYVn2rtXaVDZVspqAQcCzN6b2P41A",
  "key12": "3fQvDvvNQ7fueAhYJ7wpVDFsPkRDsuezdYxiLbakw216JBXqBqV5Vk46pcdt7G5RiPgPgVcXvrdMgnTo7Z6szuJ7",
  "key13": "3b1Q28w9hWkrRuMzQ8FraEqVzLUmB6BG66uX4789sYDu9UB2LXjZTgFXAZzsnnMzZWFu3HEA8gmp5yE7yncvK52N",
  "key14": "3Ven1xU1qcfXNWMFtcqzcKCMQAQi7fRHDxjV7zBc2GSLsVKSJyiWA43APfbRDRuNzjKChMTQhMyk7Qf2KHw97TfB",
  "key15": "2VJHTFuAjxz6LMX6KcZhbqLhx9jSRr5UTzfuZaLtUbtuy2HEr4chFAZkFeMiGdz3zrJSsHSPpap2XvcPyvFpMW4z",
  "key16": "5R4L9q9jhwPCArp3RcsZm5pxw88kmf8FhZDU5BLMQbYeAZqRDQMBGy9finfWzLA7hEbGoudxxiJifzuDQv95Hasc",
  "key17": "4ieGTPd7Fjn9HMwNtLEqdqbb5ceVkt8bVd67YKJBfoRwkp43HfxBrBDXE1YD3J4bV6dkZrPBNp7TCMpEyUUzmm95",
  "key18": "2xhfnV4Z3x5E1PyyFmFbb7a9ForEeP9axYwoNQ38m5svJwFiXS3JYD8TRqex4yQAKUda7UbWrS5u8Y45q56izgn8",
  "key19": "5Mc2i635tg13e7CdJa3GFEzHAGdUHW2vmTEy8Yrctx6iRV82GBcFqoJeihW7rj6WAx1JW7MgtgCs1T4cPg7QJWoP",
  "key20": "2wkKy7sRypShZ7Xe7izHyd3nHaYsrsXyaromJPUDEa8X6xEK3BTy6vWPE2myU8suPSNbZL3GqgKeyftPLRCXA6Y3",
  "key21": "27A8Sfx1H9p5E1QadciAs5Sv8jip6Uafk3hmy6DLs2VFYGT48vwWaonW2LHp9p8n5N4zAYCgCvKKCu4p3vuBBNeJ",
  "key22": "fcdaD5gr5HPWMxWsicbZnxFSURW3LpmY56SYFXBfCZhMZKv827ZSf8YuQuxSSkYdfjNNZASmT1Wxsq6LDqzSkYY",
  "key23": "2yR2J28tMURvowanZZXVT7PsfjVds2Znst4MFDHTUJhoDz5kDs3iafboAWDVjBuud1WDJUMkzyffyRutLcEoH5WX",
  "key24": "3BqX7bQ5LmmbvQyxVkTphMnGxfnwjowq8atW9ft9tESf7euq7pqyXfiN2PwUWmogyeVeAbryvqxLdEcb8FB7oKf3",
  "key25": "33K6Cr4vzrHhjbY9LhzkHiSdGz5brYr6FWpsPJd9W1LZuAaGKcHF3nqs9vT64Cyjy5a87sRv18auMoYvDkyZjCfy",
  "key26": "5ZXDG1fxse3QJytiBqKeksWPyAZGutWY1YsrAKwBbTfxec8JrZ5GRwuLTjfasn4DFnRbdVMDr3u4gc3ffhuu56sh",
  "key27": "4DjcQeDNj8ypPo46eu2V2fQE6RfAcCu3YwHoHuRePG1FAe5tbjTV7jT1Uw5Yi9asUStwHNUoTQoDkHYhdj64ofpt",
  "key28": "3iXLznyj3Hk7cu4Kxa5Y5xJ7sRnLrxJp94v22BS2L36JgvGbHdDg8D9bGxQknfTtaZZRnHPGfdPgar363GBnP2cW",
  "key29": "33cqgvRep6NYGZd8jz2dvEpi17qEEHGZaEroqTbNVRVjbgSvTpsSAEn5sVF6KZiSjRUbwPDar5s7bHHegmJpjmSS",
  "key30": "43ySJWTXrnk5Cjd5dcTk13gQNjzfDE5C136CY6La1gdFyeicwHjN69KFiU23a5TUxaqZRbSWtPBvZELnFcaPZaQa",
  "key31": "5UMfNUSGygQmG7LHt4bioE5wpCyXs8KcWC1aDYVsxK9RqPkQXu9YrVHNArrtYNAZqvsCAZ2RiVteWAdPpBuQvxGn",
  "key32": "3ybwJfpMURchEKjH7iAFywmv9xMPssr5nNYRCujcgB4rNQMyT61VXHUuDhefocVZpAqTrQzkJ8yao5Ut5vUHHuSq",
  "key33": "4wDsMrHNAe6ySeyEnvVHGDbw89UeVGWrrWavnfwvw52TwvVaXHg3GGMkekEEW5bF5TN7UGnAACReCb8CisPaCSGK",
  "key34": "2d6TV7K9PXiyaVqpPJw6QZaw2Z6oXZayuqSNw4obVhmpnt1jgGZL8BB9X9mUgBc3KSZ2LoqJfaj7dVDhzozj1GVa",
  "key35": "gXobpdFMXjdSFexCbPrBMocgPbxdQBghVWDo7DCzDSeCxvVuNA8Lew1t7z8QkrfAgfSSAGtd3CzqVGNhpPbWMwd",
  "key36": "61WqfYq2j4mgaXMNM8c12WGwodys7eHq9DAhCYt6NMsSaaxuQmk5GESDFVoNKfYERDpXM1xDtGBpuQkGF3Zr8Yj3",
  "key37": "4q3idiszAYx1RcN5bHhCKiLf35VPhosZ8cUpyL8UeC8d4bESPfuUBGUCZNuSY3UnjGUjQsa2dfW2W3mS845dsy4k",
  "key38": "5YrpP7q9vHj1Y8mm3VeHAFV4N1y6j3AaazU5Hn8VoPXteaDT7wMzP2VTj9o7Ddc1Mj8jXfyjFXo3xZsPKzF9MdpK",
  "key39": "2xKbzQTsB2cHonzd1Pz2wjJVJuLv9UKSABJFZWEeKNnnepu3r7VBSu4swJq65Abj6fYD7RapQqmE4tcjCci9U7ab",
  "key40": "5356hVuQWfwpFFNyAPQYcENvy3EzWy6UrYd9wL5qU45CHuTzD2aqtSTce4dP9PnzNHHFKyEnShk3VW5TQiBY1nsm",
  "key41": "3KKwbjr1tG3G7E3bE4uggabXvXV7RtteFtvDJSp2obSjw3oEhQyWRJd4RqAcxjYcvt95Cq3GBoJ9pq9eYa7XPzW7",
  "key42": "nhq9wLzvWFDUJXEQDGsRrqJNboncnJM17fgeMT6bagPcjJQsf6CBSoiLwj2tXwKh4zGAk8HbzAwQLcQUKk2WTDg",
  "key43": "3iFeVEMUQrUyn3u7cmmhcXsz4KbMMZjoKNiiPNVZiVVvkg8nX55jk5uL7NwVHboi6oUHkL4qUFSDhCPNQBULxmBH",
  "key44": "5Q418ArGRrfHhZYa7CNax189T7N5XTsobd24pm1m1wTHQoNTHBGWD67ZzWvXToRbfVGfgp9r4fVNa582JcTQ2WsA",
  "key45": "43m5rRPxrNtWqGi3urWBrQZUaGj7E69Qup4QJyh7sq5YAnHjfGDHPj3hz5LK3ZF6Do3tAPgkrsYSa45K1gc3wXUL",
  "key46": "5LQXpseuKzDF1DFbfncv6ScxNXc7xWafVw5g4Ztdibvgjtg975ZpEndFtxHHArQkSAKeMS8j84q6W92KtcNAhUmQ",
  "key47": "bYB8vXfLs4Q3CWtiVnJB1pgoY6NbXbcSXbvWdrHSV7iShT1i8F2Zo6iWsEEmtnW5ZnMqkiYDUKq7u4EAav1dugh",
  "key48": "5eUKiQPSVyK6Kk9ThnYwiAZLFGrp9i1Dqqbjzr8eyevkKTNU2o3k6QF7FpdQZUkY7UfEbXNm4vYKAojqXeM9XKPc",
  "key49": "5L5Ej8gMrD3QJc3uETuhnKkbFnWmm3bfxNmxVTCXZP5xdzQy1U5TYrawxzikZ3zhXYtqDuUVizo5X424MaQNUiz1"
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
