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
    "5s2tUPQQVX1BJzgutaWfvm9CkvDhDPtjMHqS5GNBZuhHHM96vcLi5jjzZ85rQxCFUzJ4RG6VZK3TMbP1R4M8gatT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31K5YGbDoBLaHS4PZzauw6xA1Ntv29mvVTErhretvcDbyeMvTmFpBmkSpywRcn1ts6phbfCG1Ved92xi2U7XhqQa",
  "key1": "3yukm651LLRY7cVbaUyh1CHoYf6KCfQEySgLeqTJjP8mJBNg74k9TdM2yjR4zLRv4WYAAp73wd4NurFA73KuvGkM",
  "key2": "b3sPHXbBSaFCVcn3xd8514WZ6tnD7Usv4kyFUuG3CnFvfcdnRgnr1tf15XpGhBEk6tHcRKP1UWRwiyW2zPpNajW",
  "key3": "4Gj6EGSdH9nAo5NQnBFowjpS87UW6vPquskSDHT6XwYgApTT36kKsp7b8SMGW1QeYRw9hfXx6awH2Azp1cjgUZQk",
  "key4": "2WAcjfcYepvtrxLhMUSQe8Tm1PMspZ3yQUgGxvSipUswtxUUnEdSMKMqEU4BX8rS6hrYxjNwp6rRJDeiq86abU2S",
  "key5": "3jRpdqb3sQo9m1KECSi5o3VCGhbGJk5LDK5k51qj2S9yc3LbhqJS2Svf1vsnLuR8da6PX3qF3XnJUZyGaKXNhrKp",
  "key6": "2AR9wNgYvGqEryHtc9SAic46CT3tMy1j1dVSYWPT6UvRtsLF9yNcVvi92Aah4ZQAMpvZauDFx49Qe9nhPNpX4xEB",
  "key7": "2NNdZ2ZQenqdN7ZSFvEdVoG78Mhv9s7YdhMApjbKpBM9Y4xByiMUgHagHvq876VmvFicASjvDzza4DCXW5BG2G1Y",
  "key8": "3cW8FVRrJxgHvN396ZatmqzBpSbRjG7W1YQTjYRWEsokEk26DKrXzaa3HkFuDrTVzwQPkuXhfQ9UyNd1rpEBGTdx",
  "key9": "2tUwHKmxM5YDyk4ufkGsSwBsw6dnKiM9L4STeodHv5gvvsdBaUwd5rH1EvB9ZtQyqZHJPwK8tC4KT4Yz2Xo1g28y",
  "key10": "3jfa8DzHR1h19yKwdJyaFQobbc9XNQGhyHAjGRoxBTPdh65bHwxfpguPQifE3GMx3ZjBJ29PnBp2KmxDW4Wt4Q4y",
  "key11": "5BVrebctKutr5gAGdMsXNP9DVw4TrgRnBDu2pT5CY2YBN2Z4PcxGKsJq9kXj7zv71qUjpHGsWLVyjDUVvCajwt7C",
  "key12": "4FXpNjhdiceD4gViBYscdJDEjdag6gL4QfncKxxjxXXoR8Xt8pjhbU8AsWmXeKji6DEd9YCU2QPWpR5jL9Kc2dMp",
  "key13": "2o8AQBNjH89QSHcVtPsxuU5BzReArWt7kPKZRZKsGXLktynpTY96kytPeTHq3Qn6EFx8GgEiyjezNfRcvwWJAaAU",
  "key14": "63THvEnobJpaMm8wXdXmvLVXjpCQD7M7kWRaRKHdisDtWmZC6p1Jsj8GxLP4pEtMfKyZkm8HkHcqmGDwWgWLVbRd",
  "key15": "5NXV55JihaEvLuCJ3DvbcethuLR861qAzsG4rrfxc6ABSSU17kwGtrBtnJrag76tNEAZkYAN8p6F34iBiAhypXpr",
  "key16": "4MFShrZaTmMPDzDAXuAXGPyYvov6Qfse57rHZzXAesyfYBkeGX888F2ZZENebvTwNjPFXWJSBBuYwRND6y2rGTSu",
  "key17": "4YNteGSV1ie81UmthQhjHN8bkaDTeRzN1VqxewVzVKEkEZAt28dkK24r6YZfAjKfDquU81sfcMj4SjpvS8wRNTE2",
  "key18": "2vbLm4mvbGEonupeFejXYzdzw44FyrYq8K3jFp88SsELM6282HgMJY6hN7fXL7fNCL4KtbbBG5Dw3Ffsy1EQtCZc",
  "key19": "2UgNw97gn8xQT1pvfrey4sVurDMwEoseYicgEXgagucmb31P4rYqqNp3ZgJoQASwHqAN94Krc6mtExFt2gaQ37to",
  "key20": "29Efj3mLwv1Abnryf7Z4icqiZ2jjwMpPHy9aFDCmqwQwqgvsVfNw3BWinJgbEkCtqdacuVQc57hMdJ51jHbdTGzg",
  "key21": "2sboENw2UQmsVDBz3PcBhZVSuDje58PmDoxvJhAo8ai5TK5puZSHY53Sno2upx14DuvYfoALDa9Z34wGCu2ZjoDU",
  "key22": "5dVTUKvY3HabSjEMwW6p636eDgUg3yX8CxTQbmZQc6wa2Lgo3VKmhKarv36nukwcrfZqHJCMsUGfb3FaXDLwzabK",
  "key23": "2J7JXFBTozBnrWyWzBESXSS6peAiTWrvsVJKHuejxSkUBBZcBkFmx6bR79ALHNz6Hc1MC1voXNGumhbprFLJhMHR",
  "key24": "4eyV1T4UC6yrzJfnSjLz7spSDu9hanFoHbKNH5eUNrNj2TLk18XCCmrwc5uh3E2pp2MZtDjVGuF7putcbj7nNZg5",
  "key25": "5kHsZYcJxjaVkZFvRe1jKK2F74awD6xUDbcTLciF2RULQMxwnoQ93iJeRuH8WoC3H9UF33aUSPQecbBrRBkz8kz4",
  "key26": "5PxwEcwZiRNPtnsFRFLedgRvE7jZzn5K6BnN5EzR699pKMLsn9qwpgX3g8su6tzzXspy4C9Ddw4bLZZt6J717p6z",
  "key27": "4xK3QTS5T8vYtWiKXNNFJo63kH5DwRFchwJCVQXmQUy3bpETt3REP3ERyBCq7KCoddtuQSWSy8KgcC1CQHkT7SfD",
  "key28": "pAHYi1juAWofXpDmJ7VdNKQc95KrWLL9L3wvQefjFpGR1CKhy71SKqdtXSwnbNuRktYC1RxCByPcowVJpYtENft",
  "key29": "538MNX4nye1qGbbzCHTeDdXyu465VG76Lf6w5aFNXJcdDwSCtqFFwSuzeTCUt3bmmixTqbvXFQhdjEVGZXXwnKqG",
  "key30": "5Jxb29KbRusDENMvLn2PXWMHEQjx8QJeTcGc5v9a6vjfiPvhG1AN5YeVkub9AUSD1aV4GVWTVs9r9QkSZbhNcdXU",
  "key31": "4LaPSeBWvicQAkC2AKxrejbQP8v2XKP6ywjQa55QNzBr9MCGWLJkxz1vfJHhHTxNKb5GiGyGRBS1PekFJJMWf86R",
  "key32": "5Rvq3Scx5q4MXAyh6a2M8f4QQ5fz3dgGkyNGjKDUJwASxJ14BYAWGkxcqGKVv9xkfEfLa6zeMMKwC1RAfKL7Su6r",
  "key33": "Y27uXN4sgojRaQKXzobpSUwotVgrddpexeYNkRa2XXmxHXnPBUUXAhyUfMfgcaE8wDaWJwqxmRTXt6Z1b1zrAsg",
  "key34": "Th1Wmkc3onbLEDgi6V7Kfc1F2GsCQuRzdf3NRe4QqtVZu8ciVSFWbotqgViHc9ndkGoPdXiXat216ycpYTrDf4S",
  "key35": "5oXiHLLq86jsxvnxFVtPpVve8SgzJrAAdWXquofnTm95wkM9i4HQZWF3kvBWJ5BVJFt6vtAhZf7SvKrzwsBuPo77",
  "key36": "sdFvwCfgeak3gT7AoPAYswse8GF6Mr8fp86CsuALTBzjmXMrEVpEkmxcEHnBTH8s6TfvuwRZbDxCww7mBa11xJ4",
  "key37": "4nX7cMZotx5Vp9ZAgSi1uYpgRsrsVUtbPMCir1AL4NWhzXwPhp6qk1M2LLsktRBLcZ9RG8P9C7R9rbGeswYrMDPL",
  "key38": "3k1GxxfzacUQwYUUg4Kb5MmBbdXA8byv5GAavzHYwn8fqKZkQQFUPbhc6ox1Sd25ixAYoqDQC5b2xJ862eoeWUS1",
  "key39": "Yr8LpQyzED7NrT1bTv8yxqMUeKzPmDGvJwS8Yc8gWgfWBu6mbu9k1ECbSyVTUoNVgorTGnWsx3FkMzHiMznRi43",
  "key40": "CdY4dHWNEru7wVKqKa5so24S45ym64GPXBdkakGbuxLSXMWvTC1muZQ8YyuUUPCx9Hc5FrndDg8xwLW854u3Cjk",
  "key41": "5rbsChNa3i5iHURHSUNGuPhoiueUnJrxaEu1EMDRG7hVSLW3pGeiMif9D7g7WLviTrxjwEtpPiSkjNJTXZ5Ggodp",
  "key42": "56dTZQmC175csj2KnRfmPgoMN441oKezSuT7mkg52eWTvLtHwRs6pinDyN4QgmVxgewFfknPWWZzc8EoHsqixixd",
  "key43": "2f4RCBYLbxX9Ge3yqHSZvRo7C7NeusrXzd2bhsfGk9fsAv1GFTkHTbT9J6D434vBtRALuxEuiarULKFp3XDsz93p",
  "key44": "35A9edwWmU4cdu6VssJ86TsLk5f1P2Kvpq5mq4afAQ94KUdYujAJF1q2dbvhFnEriKs6m8ZPMCoR4MkJ6sTtLwoj",
  "key45": "29WcUgKqYejMU5e6BmAJBetWaYYvysiKvgGMLR1PYdu6jXjSLEu5uqQjzS9Ajg17WthwKRRjXHZz1qrGPWnVwGSe",
  "key46": "5Z6szZJ3H5KiatmhfW61dsgbisP8RR4cwk853E5eCxm6Ad22ZE7c8torT1QiSUzbk4hTSGMcoA5JFvy13KBDJAPe",
  "key47": "D1Ms2AGbvfZAikHW8fYULusCGWtCFZwPrToxpAUdMRh6dY6QuB3v3RWSsvdkPbKtYnixyq9x5DmzsYBbmnfYwKv"
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
