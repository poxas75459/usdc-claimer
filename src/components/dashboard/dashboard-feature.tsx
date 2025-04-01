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
    "64LtjMPepwLJ7SoPSAB8b4Ziv8xjXrVexBHpwVSDGbdtK7SHxoFFKNNY71aNdhKLkop3ThyVmRuzcRvFLJG2PdeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iNTuvCwKMQEvQANZnK6ChPezFvwnut9wQbMjD3wbq9ZbbFvSViZQQHLv7rizjySvsa8DrhbbqpWAGUPiEV4upcL",
  "key1": "45VAJQDvBXuPF3o4atM9aT5hzVjCHSca5FEvZvqoCzKwyUfkgBEWeXrCxWXqPeJN9SyKZyN1TMkhsHwrostkdi4D",
  "key2": "57AZ1p5B2hgQPLie3UA8KjeGz2yLh83BLTtufaeB3oTTRLaSS4qKYRr4btrtoGcbkfDQhX4QEuDBr8D2rXhSyT6d",
  "key3": "39jddpvDH1XiCu3ie7MWiwLo33FJXm11nhdcoCBgFNnX4MUsBceSZnLU3Ahue8qVPZs7uE3bo3V9VqyzfpsqXQ3o",
  "key4": "64k8zQCHWhCduPJus6W6gBHqTWUTKcLhex9DAWF5xoHoLwbkN3RqasYacTCDetzzWgfqEwGR53fsnEem9oi6deeB",
  "key5": "5BPC5FWqHFNjy4HRUmQBHuSW1DRuDBpgp92NFknYDs6NAiyMRf79UAyXcmcetTT5PcSG64KykJVchqVBNmn7d4mg",
  "key6": "3JDqFXX3cz916cXtSRo3SWnLTDH4S339m62Hv9HrY3dsmW1oHuFCfjhacYBGCtUJ9CqmUvSS7vZxCMtsrqwCWAqb",
  "key7": "2Kj8GPs6UWhgxVonrPeidVXSXH3JdPNJYgfaEuFPtgNUm2od75DzmqTR3SJ7Bda42TuPRPj8w2xeAvHgk5rFhRT7",
  "key8": "2D7xy4wYcxq32E9U5PAME24X61yNtuEJSTUGkMnwzEHL7wvE85QAwheTLidRUxJ7a9kSGoPB3r1Vw7q5mhDeEwG4",
  "key9": "3jMN28pPRpsmMN9DyFm5uV5p8dt2ZwAei8SXnjwPQYo3TTgFKDpSRtjWDLR1XDbeWKcUMJjx82Cs9vqztN1oGpwH",
  "key10": "5gD6hAuPWjYereBLkvYRvjL9zyfHw7SvpuTppfPy3qPA9QKP7ew1dG3HkfCjVPA2fvSHEy4bjVrHSSSmDAUcmfqh",
  "key11": "4762GQd7oS958My8u1rp1ardo9TZCGddaxvrGctNvr234sj3Ez1BgaQq9JUnesVYDx5GPdUBfBeSSWUVvJ8ik3WX",
  "key12": "3sH1P9RsR45ZnkdgruER4RJgPvubxGgBmtQbHqbKf3bTHGnYgRfuoSCtue4459qFR1SaQA9pEfDF6truqaYmREh8",
  "key13": "2SQMcT2PtEsX5s2ng2AFyLgHX1T7yyYKqVmZ5idNZyb1tWh1LKPfeoXkcwvQMq6F7yr7EYH55Ke9oosKqmFr2UMq",
  "key14": "zm2zJduvkzhvT8MfxsC1KGzKg5bBgUBMs3sZKA7fs9dXMUs9oTbcRBq7TVPJ3GBHsTLHvWR1tR4LNpmiBtADh9p",
  "key15": "4uB9u5JsxJR38jeVi3JHmHBBUZxQBoftNQcRXenc6ifU9oefUjQFH8D7pZqWvjCdmy2QvwDTYMAa2rLeFQhRSVnW",
  "key16": "4hvSwvHxE5RAfrPtzXTfY4oWS4cTW3kX11Tmmf37VkVFrmV1rBwDLtMgztUgqXXjGYVTwecL9Xaa5yYgyRTExWZn",
  "key17": "Pnm2tDBHezQbPRLsGyPYErjK28dMRkHaiwcp1mjy8Me4ut37tGbr1LLQpJ2rxKjTAvyTSw4ftzVcNt4ZWa6xxyz",
  "key18": "3fVDY79CgY7QE3NQwgxrw8GaAxmpqNQjt17eqrYgvauQZEApiMrZvW5RzTf1DTWmxbvrNN9jRYvdx2dgGmSxw1oT",
  "key19": "51JHX432jGRofzChyXTqxmnuNaCiXojmBBrgTBavpwB2Y79Pupr2bwTt522unQcjnQ2AaaxpdRKDGtBtqv2uLvWs",
  "key20": "3mkPZ8JYL7rwksRLYkpxmuG2ZuLQTUcH6Pm4BQLE24GNG2qKmgFWRuDkU222CWtbLXneTCHX7DQw3zMwfGyu9nXD",
  "key21": "4mq6s6T5EQPgdHfbKJgPjQubHBWcGP2Xdon67iB2gHvgQySqCwG1gjcB47QnH5rTjMq9tbenGVJrGyda9hf5LGXe",
  "key22": "vMU6i3wp8dr2oAXFPLNrJrju9TuEJiBhD4tbuxndiqFDedRP2bYgfeLWQttKd5a4eQTDFqq4VLnnzaQqFpBmDQv",
  "key23": "2LhuKzwLcDLZz3nhfPUaB4px8opBR1sRHLvq2m6uNhfksJHBzTg8HeeED4z9EQNUXrToidUmYEHYi95DXPFRf8qN",
  "key24": "3b52zA2T6dWrW5sXMHxCuZGM5v7LCYZCPFQt1Umix9cvkUwEP1EueHqPJgdMxU1APMFFTYGqXZva3ac55UDZnnhG",
  "key25": "2U4ueuQKBrS6sPTfrjoZJ74dXi4D4Z8ys5PJdaJA8sN9dmsD448seji4SBG1VsNQAyLkC7X5F7NHbQGPisfDnNd2",
  "key26": "2bMtnpefv6bSKFLrH5C2HLzzhwfVraAZcPo2uKMqKfpj38npERMrEaWv8RYtC2JYWFwc1QvCBo7WyZvbP1cMFoLi",
  "key27": "oBDoMpwGaukk5zAanUuDhBTWP2a8APFsFmdJe1q8x1tsRT2BNJKgkTCWbMqK3NeSPvi6WAMicbPxRs2AydYW2qn",
  "key28": "2CihGDYfXTacYCLRRUojzuoufacppNyRuJ3Xx14huyb4WKyDxo5uqLAVALWMdTokStWMwzt5vNKvPcABo2XWfRuP",
  "key29": "59oGSQaVcQAdFUJryQGkZFGTJrjPyY4sJqAhhPXcXQELYsLZrhQ2sqXtHTUk6LgH3B47X5huSZSXeZuyaSTXmRqR",
  "key30": "xFcuxsFzQch4xghwXnoN2DjSoq6AKj9Df4tX6oLWjvwzVYdhf9V7FDuUWpxn3okmYLUJvy8e8o9qoSPbp3XivnR",
  "key31": "2chRDe5675NUtAuVxisoZxMJfZa2EhJWNzAz85qqy5vzUnHtDCCjWRHMhxhLwvgg6HcBXsB9oW8m5ELK91S9fM3Z",
  "key32": "65Ddp5MiqFp9fbdPRwLpENpzokWLjpWX4NnkxUidNG6DqXpv7SoFnfcSYELenqv6u7eEBg8YFgNPoQi2APmEFp6h",
  "key33": "4Ei9af1iAHbwWxS9uEazdWeRTottJ31ySSoDzgnfcFCxKwkCn5f3hn57hzCmNKPor449d23V7fp9ZkF2XoMUjg6K",
  "key34": "4Pkqw5f6uEwZpsX9cbcG5o7EMHXGnJar8JLHmeftnCuZ9PJT4ChZjjtQirkkFfDCaosxrGoBA2Y2C2cj7SFptf1k",
  "key35": "123FNun21JBEUZgJfBZ93D6BrGk35pbJYbcRTNcMh3C3HdkZjvZpHjcb7PfPm1yjP1mLoy1Y7uJBGfHRSju3HLnp",
  "key36": "4bYyekLE1DpUnqcS4f11PiDDwfmzLNkP6wV3wjyUAkhBf3e9R7fZfpgNMWipxox4df3FxGUFq2ET6bMJeBbvVfS7",
  "key37": "41Adu9mccYq6BogbYWACg1yT2UFpfevxaeJoVT5TTzFpPbXBtmUeap8ZxvVjccEs791Hhw4hfHwkYvRz9MR67ars",
  "key38": "5wxg33d8y9WktCCHLVPa6FkmpM3UQF3eWGRNnMV8DzhKFdvH16uwxAHUMA2P4qWEZF932ncbqtYE7HCV3z5eizo8",
  "key39": "3T4NfKGZ7J8k2fSq3osKMhsAaJLky9AcALRUhgU9svbbxPbh74Bp8iA8P8cZEdbwApXZsnDRs5Um6gHjA2BuvKzx",
  "key40": "2UuXUhUBgMGUHqBPbNxhCz5rbspQzrSgQYriDapAgzVjoNJCgoFRjRnDmwTiWGczevAPREWxucadkkGs2Agdtqeg",
  "key41": "3n4ckuYbeuzCyeAkCY8ahgPk2zBpA9sYPVCnPSrETNP5VbbCT2HNCD7apmtPfVhkBgzLcTApxXod3Ki679qHt66L",
  "key42": "4BGDFvSXecWcST3Bj91u9pFBAMvHrtXkYvM16FjUP2uvsW5NtMQPBhGdTK78YPBwa6p1eavAyJ3dajDm61wX2D9Y",
  "key43": "5x5hdra8C6y6j3Nexhk1i1cZG4J926spEYAEYXpbLT7ULULEdF5miYq6ELprwGzgSnXCos2xfQ3WYMKMUS2PS5H6",
  "key44": "Q4Rdq9Z3ysSSgSRKRaoEJz16LdQKaT2ByvvRKhzFLPcgNj532Dmju72ztD7aRYnYcU9ppyPeQAs4KDcTsqv4Dk7",
  "key45": "47kauribkhPh6fH9K619KN19JayYyFMSXGJwZXyKtR6hwjwowofGJTpcgAPyTwjJVAEdFTjBZXozEoB325mjB2a6",
  "key46": "5cNNArZwS2zJFXyQhpXpDDiDnx1HSkyhbLHdaTRPp6KXUaokbW2DaFcV4H2xeaBeiS8W36Ng63MeZnfH1cp5cE3S",
  "key47": "tzyCkCduW8hZNtKyRSd4bcXiS9fGeDSnnbKrKwWBcTKjfxavusj2DNSeR7kpxGryUD1k41pasT7JvdrQnEAiEwa",
  "key48": "3prYKjspPfPtRChFHLuGyaGStSmqxWhViMP2UKWu7yHLpVbsmBPRLa8xGkHDNWGWVowVQiR28nBL2oebBbwYN5xE",
  "key49": "2rhTWkBTcmhXVcVD7qkFoPgFbsSoVhppYisezPcJL3jXCzHU7c9NVaKqiSmd7ZA5c473BHLjyvhjnukEi4i2NPiv"
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
