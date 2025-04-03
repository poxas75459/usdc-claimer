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
    "4ykS5ssUfYVkaRP5Pyt8MKqT8wiJ6chtwNEDTqEMdnuyqPoc7eZss7RcxGvtAjGrK8qHhXtQqiAiSB2qZpNXZKMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sJLzbfLSMh5FiPreuQQ3cfECGmuT8nMGiuUet18Wekbs7stnow6A7dB7HZFj4n97uUNk3XBpJqWkvX4MD2Qgee1",
  "key1": "4qZDMyRdHgxGf5PK24xigAWQ5cnfzToq5JTbKherjNHH1SwwANgNjyNg2idMuF7zrPeeZyYYCVBAgjAeWj5TNoXW",
  "key2": "5sfEw4PuhHQe9S8yLpAzRRvTyHVaDZD79ZFAArNjbTBtM7h1CzpWjPFzPcAtLX4mJZu164mEh54MESBnZpmgJYrD",
  "key3": "5xkGPvUDZzX4wvakemFDHFvxLvCnZRC8B5MUTyrjsG1mmRk5vYPLrQPaDWkYEfQcM3rbz1kmskz6XTgTuXigoWwK",
  "key4": "4ottmYh7mJFN31XePzXcdo12T1DNPT11iwMpRNxRLSzZmKqrTSvyzHNeEsfr8QKBxkFgEyr89vKUL8Dnsk9Gbwid",
  "key5": "2SsYdMhwWs5aAmEUrUogz3sLN8YbFTapEFtgWVehCeaV9r4EAvPUKi7FYLYGWvRgH4GVuW9y8su3kesCmMmCREgC",
  "key6": "2UqHCQNSQGLWostxomTsRdL7DJJKcRgAzfeGfsDSwgWvupo6GJwNjyLvjnTxKE1zzgFZVm7zyYQmYS61KiBfsMQX",
  "key7": "5eXVMs895JEyC2imxxCUBHdefcfsEUeQuhNw2Fzw9rfGCSu1PzH5v6Q9MBo4Mwezxvz7WkfLPfioJbJN95Nec91G",
  "key8": "46P5oVg4SDWo1z7qvhwzZi8izWBvpD9r5PhLMaLBxpV2YhhSLsAFsBdxx6Eo1WivJA8Ka1EGszo8v9sb5Qn7NzZB",
  "key9": "4dCn4sLVpMM1LUgWkaMMEzXuWb63Mhm71c11qA68bktcnydvSGapg2Hznntt79S3998r1zbScBuUwkfB3y9wpz4a",
  "key10": "4nip7XurwVeNQqZYRx9bPuHSKaP8TWZu4qprgR63UX2HbfT7tkJP9cPYepwTZTmYqRBtFf83sw5agv9tuGuTtp3P",
  "key11": "WQimuGo7iXXNKsRQstUH76sELTCEnk6CBXkaUR673nhbh7d8DPsU4Kj16UELKZ4S9JvXNLHMzjfjUpMWyJJJhV8",
  "key12": "47d781PC5PP3d1L7e56YurN12mPnb6Ne4r7hGYNWF9Hd44rzFokZbLBfESUWagaNwEEySYPWk4byEY4cPoDYL1N8",
  "key13": "51bPfAycGoxSfGgEyJMyCGrydDMDnmRMyXBNjDE9aPRRat18RAYBdbyV3cZCxmDGFHva6WadPodL6PrcVe2YHke8",
  "key14": "61P8hDMFAPokXiKdE2Cywf9cUjPB5Ca9wma5meu5bqbqG9Lu5SaRczPEPuHcG4aEsCZSdDQVKzdqLVSc8ZhqEJr1",
  "key15": "5WUhekhKPAC8vQJ4xQGW4VgnFfHDmYMANi5HyHa84SPnbrWskSu3uRvYaFeh1ZCMVxL4Bg9Tem3P2gb1aLqypDd6",
  "key16": "65FC4r9w6nVJMCB4qhowHShXCzgYxzsbe1cknCmusiewL9kYvvFPZjf9ynPHuBKn6AogFZ9mKyJr3DsSChRzBuFi",
  "key17": "5r3UNDPVGCcWSNwf2Tw3hFCpTJ4sWSuUpxv6WWBuwmy3aJqGVUe748yW8JTfvvcKsofQDi4wYJEUibZoddVZ44it",
  "key18": "4zVBANzXSe5WsMiYQTvASkNevNQqoa5F7XBC7J82goSDrkPepkYmRoLGE2NLx3egQ3Cns25sf5KPWgPDgsQwY2mC",
  "key19": "55BMgsaW9nJGkRHpCzc8D9BQnLUwWLBd5aAKfWUzn8PqZ5p6cJuW2kTeeM2c2jAHG3swo2RMuH64U2cuooMzsFNZ",
  "key20": "25CaN2c2QpCKiVDsVdBQug92iD1azztSXtV43eSA2ZovXXRqpb16UMLTCDmENz44jZuvECms3J2wE255t6CBAmEL",
  "key21": "647rHkkoZ55yuxnqyekygZF4q5WvxeauNkddQbxELDaqis91AGFXrDpgGHjFk5LbsjUrSJnAfJvPNzFbDqrPw6fF",
  "key22": "4YBLGbBNQxdDyJgk7df3Vcejr3PuF1feAFqk66KqzFVh6PiqCq7Cm68M3vujQGooykEh5hsithJr21zmTB8hteu8",
  "key23": "2LqCeauLRnH7BcD8wMrqrZfQBcKU8uYxZSL3Zxjkke8LMpaEavskXxS3dtdN3ZFFU77LzLKvgUW3bgT6nLtWRnnU",
  "key24": "3oXHC2wvV4yQAFb3iuC7s93dbiuGC61f4aujj8yQ4YPL24xAaYo3gBNJ32qoWMfcJepaZzAPnYv87dyKhQk4KLTQ",
  "key25": "2hiEoKnpR2J8xxrKJ1xQnFyReUzujiBXm2sm8GUUu7SRj2xuqeXhFtHjfT6k57xQxeFzni1Jp44iS3VDVfXgen4d",
  "key26": "4JRjrVPWhg6HUumLHAbBXgdhcwTkyYy7GAJiDiy6UApRQ2yhad8bCgQJRGjTkadijbyArySVtLsSbwvxLVGt3mXu",
  "key27": "2yGdGeLWQ7DLP9CUoJGe9gXL9dVYZdcvB7sY7nnNBNthbY6a8JgCi1VtGgHB41mBzN6CDSt49kGx61Jd4PjRk3c3",
  "key28": "3AWwqpQzAnPkrgfBmyzuN7vSGxUCoqPNkgy4ASVaTvnT5msc7VUXKHa2m6kEzFhaEy1CH2XCBLtJMoJLGv86TmKP",
  "key29": "2KiKa1bqc9CsA933xC5nhPgomfnR2FJ4wc1b2o5mVaDG8heh4bkf1NFbF3FbpBzbyr2upaiFyiR6bWLoy3KBBFKQ",
  "key30": "659rpTD7CuZ3Z9ZcfsjbeyM8brToGAw2wMyiahteqvSBWPwKYGz7fSkxfrfL7BgL6rudnEfw7RELpfMdq8ajR25m",
  "key31": "5558zg7AQYGBmhvvWLM5JvDt6UvVzdBumLeHZ2eoCkD763oKueDN3qSRAUmzpmgtTpSnKpNv6Zxyon8vN9WkNYyv",
  "key32": "4sSFeYNNousVZBvFEh4Ht1jK783fU288SMzZXxxUGQpvyPzapquVJDJ5kEzhNHVdVNuksiBVKK6ht3Zi5ZSiQuuH",
  "key33": "5HpsgpwZA1G162AQ7htPpkLAd25eMQVjBGsAt19XJbbuhcG5uoxfJ4mAoz9EkH3qXPXsXX6ApQcABd6wQEkZWbzN",
  "key34": "5gCTqafqinwGnHx2LYJUc7n75Q3Xrov87gtjn1YLkV5TuqGnmtQmof328hBf3aPBVUrdfEwYqTD8KbLo5DeYghor",
  "key35": "4xbVynKc6QuD4wThZtgJd5HyaYPXWCZRzw9XqVj3YwLo79JRcCtj5zogYpfgPhCPAhHiiz3vDvWqqkauZPxEZbs5",
  "key36": "2BGdn5jYK7zDzpay7pNWxAQEJ6Ap2t18FF94PzzoFEMkAVbXbjr5NGv8PNSbRFyAvT2DdYuJpT8YrQGDcipVMLGt",
  "key37": "4KVvNAPxMCnUTfUYKCWZ6ogy2ECBhbCXKQKrCRmZmWwSb2u4eepXAzAAmWwqMVFeGKzBxNFvzhNoSyVBL6kfYL6e",
  "key38": "desbQ1ioHCWJ18rSdBVc81nLtUj3CBjgkKNeo9H9CREo5ogv78RenGXksKoupEAb1foDLtpwwZuVmRXrSkN84Wn",
  "key39": "3k3bFWbxiU67ZfKifLi9FoAEoHyrK1iBq1reVY2hrkrTZ9qPa753moYgNxSnAQSYUZUrfFcGUi7nR183V3MgHm26",
  "key40": "31qgbAQiTa3GZhoTgbWkz6sJiL1L5bW2ocx3ohJWqZgSC9o6wRZkLwqFQrtzhvpJyg3ShdKmh3EPN1uwP4i9whhF",
  "key41": "ABt1VPQ5nrouW4MAnuvE1iuBr2thxcTvVh2FPAhp7uhFHKMw6TfoGTVXjst3a2Q7oPmSGbpq8X36z1WeiAmjHUN",
  "key42": "4hRoqBCTQTRgzSwrSejYW7Wm1C7p4yVHzbtYcQ9uMZxesgYH6BV5WNvsk3H551gBP3TabGZkhjuPytWwWUgkpQxY",
  "key43": "5Ns6PF9E7hkHZS8NvzhYBdZ2Fz9ujSyXP9P3jjKYZxWCdWzsVVPmM76PhrqYg5iJF4ykcdL4teWYJWLDW5wHSVkM",
  "key44": "4jfy8PhJrb2rsxZj9WtD2WHZWUspcXzDepNe25nxB1RuTZ9YVnZ78gQhKtSFKsvJWUPcM6GagAsD92GxbEvKhLfT"
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
