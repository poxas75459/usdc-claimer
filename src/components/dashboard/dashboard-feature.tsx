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
    "56RKmXxJGkiovd7ym9Acvq2JrA8mqf9F2a4Q21VNgEtfcsr8yn66NrBXj5B2kvws8W9Mq1AJksEUpAwrbn7F4DD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5robgaQqNXtLW62GezUSB5qv2rxACKjouE9ii7CfWXJFpd3BVBjCUQee6qJ1BCMurDkHrk3muaZYtwUCkSQARJPT",
  "key1": "58Md2bSEduvHKkAxUsfrFNxkeGyoRpxDFLxmcN5ij4PughKXATcTcVEmm3GtUHg5MjXN1fYAteGThWz4HjzstVTb",
  "key2": "5PPJ4LzAXqkrtByb2JNjK7zTSz5myXTkVjymVkC88JYLZPL7KdgMvLcCr7CZpQq4sorCTw6ddKURTGLX35mLhYf",
  "key3": "XRkrpX3Z2eUT1ieeomg7kgp1cCnLhY1W6e3yrcdL6CFd13zAkEK7LagWQQ6t6YEr6aNtYwuJnPebMk2aajrvbKP",
  "key4": "5P61eg9GWQXUoSALFsL83KjAM8eJXB7KSTQLtov4owMogchTV98Z6ojBtUH7pWjhS88v3rYBd1zA6M7ga1Cq8CqK",
  "key5": "4BVoDWvoFifHPSpGaPPn8h5Mx73rs6qusCEgJoP5RQtX1pjkHC2AHqfq7tXnACZ1LqtHK17Co7bptezvRfQGQ1qi",
  "key6": "3E1mbHBCxpm5AuZ9TF1i3Xenfbs2DuUXte4h1VQrt6hJVvdwzqwdZGMGWzMTopBnxLLsb5v6uCCnX88KK2r8EVqL",
  "key7": "3WfVkHs1mheXNffvwrhFsmFQ4eX89iq4fD4Q92TbyJyQMgMAFMciUSg1o1cGYZgtPd42VvL567FbA2bt3Y4vW9za",
  "key8": "3wT8a11yhwT94vJYkgZWbHtrWoiFNvnVQHuDudFHt6162qRvCQNZi1aaN5ErRXMr5BqPsF1D77DwPm32yHWv2USA",
  "key9": "2LqVB4ifWN93TJuRkfs8pEZt2gD2FzPK9q2Qj7wuDjwp5GZqbx6p5MxsUpFPxAEVPJ8fX2Jx7guW7QcQNTbb9PkL",
  "key10": "5jhjpAeEfwNT3zJzgbmpTMGyfyL6FthLrZsQXjbosHz2fCBK3Zrhvn9u8bfbSgvtmJpBXAZZcicGpajqH2qysM3G",
  "key11": "5PhHNKUdFwFADPFwe4i5e8WqRXJWMY6YGDTLF92SeRvYhSVRTUhhV5Vf6ieG8y8vDwmXMKpa6dqVnKQaWz6PKVLw",
  "key12": "4XEimfLJWHjmZGjsoQP1QWdPeWLUyv6Xmd7z6isQ8khczvg64QUkMvutB8w7s6vYby9ucRtq6v4qRvgpLoQqUDAt",
  "key13": "2EBCMhR3yrjcSwSCgE1WXKYWE7tpZpA8VDVkSjTzRnKt7XQnTNAkJZshYdozLoV9wfgB7KSqwDsu19y8c8yu4vMu",
  "key14": "4pTR3BwsHVeTWfqSmmD94vaqB8qn4fm8Ybnai2hsZwZBUZTyyEtuGrNUKygLjQwsuQiwRsZw1fmAfS29fanmL6rJ",
  "key15": "3S2QdJRtBgTvYxwYgph754jhmRMDwZqiBYbweyV9Q9jw1HT5G42NjrSJRgS4RgBRAjhWYUhjeMKUFsfbyzWT9iVz",
  "key16": "2XtZXLzyqDAA9aJUpMhwf2bqeZmt37UbS74Tp8bHm3bQg2YUJvx5qhijg6v5yZc2vHkSNMGe757EEQKjGjU4mfRm",
  "key17": "3y58Mm8dzZSwhKHzdKQmiV2hjvWPwwoW4XctF7m29gwbUdg9Cat934xvr3wf5R438U9JUG4mgkUAnrN5EVKoeywW",
  "key18": "5KiAsPzL25RPCtYwHQkNTKtet6FaHAF7oUa86oW8ZJbdTEkF3Z2GFkNkA8wtrKXNWuwkcprA1JDv9XvtkZ5PZpFv",
  "key19": "29LAWAZG9TTreBbkd6Dz84HSAeX7Hc9SSAoBHU213gKujdTJZtsVuUrk6uFJHiXf1XbpEkq6vWCH9MqGwDpnLGyg",
  "key20": "4vMhxYWkhwpKF8ZuYnQF8ZN8gX8Z9LSaHYttVXMkgsGbnsULGFrgHfa9ZvdGZasqfw2tJav8ZfkRtbanNHRkwUNh",
  "key21": "54gsXdUzJ45m557VMYQ8ZoRx99KbXFaHz3y1MmdbvV2TptdYsuXKsQvGzxRf8H9JZuNHGbV4CokcaWSM2ELLZwuP",
  "key22": "2WMUrBbqx3yKi4NixDuwvhEtyGk37sW7LSuGcW7Enq444uUzKV2cGKsqGgN9ebYPEid9j7DUuQH9x4MYYjWvWEdg",
  "key23": "675MopVrRUeM3Pzt9C9yoiVGE7XgUcCnE9WHn748eMwzkZyof6Si5V2BhhjXhhd7S44BMCbjjB1ZYKqGCTYXQkwe",
  "key24": "eHdUp2Y1hGfr42cmpUV1gbhn54JFhpdU6Bik4iRDt74KBRyH9RV17W5fXRZu6gztLP4sk5rkfQ9Vagda5mcLSf4",
  "key25": "2gTRZE5mXXVEzr5u5d5hsaVZgxK5R14a1C1TzY46h3P6EzsAiGQ3pY4XhcNYaqbYm85eSQ49LUhUnF1DdUR5Q28e",
  "key26": "5bbhRCDLDXUHkPeeA695kjtmbXjsWj4KNRzeLoxpt1qgvdC8NbZNjyEvN7FFvxrvZnmAH6LXS4EPP5Ri2BMGEwkS",
  "key27": "49JaYrsYyYMxc2o9SvV7WnWJu1P227pu1uS5v8GKyqsA6eZVCWkEP6xfmPW3YaNKfh71cgD1XsTQGUJKCa7T5KvS",
  "key28": "65uptKW6SNstMgsWASUUCi7Ma9cd2Y56bKwh69AzpWMGuzXExw7qERyVRCeMknmjdDraur3LN74a4BWjYEUagjqM",
  "key29": "5nTLik7gWqncJrqvetzriUrmjFDKMVuUrsD3kopCNzBSrSuz2mXcXKMu5VntvETrsZBhMjPjNpJ2ScGqJR6nPNBv",
  "key30": "2VKPrJjHy3Wed9P47vWyj45YcwCAxHGbceUDuacD4FjwBnB15EWY5X5mCRGWYqnrpirgYgVYe7j481zxZvjNfbfS",
  "key31": "3c2HiVyAdx96EypidsSfu9y9cYZhedcJ27EgWffYsFfCa2nm9EpD4LS1Kbm1dSvJs4aETyq2632UJyPE4YxnKSVi",
  "key32": "4JDJVeCFs9utWRZczy5PRyk8U3MxoQueVeDnbDUmchrXK2FpifbtmMghSRcTojFHmNUT52WJSbAxTwKzAx1ZmkiJ",
  "key33": "4retbH9sArnMWtbBvGojQv5HgWkAyf579VWqAmjTd7y1PtGYgRmS4rNDb7AFb8gFLKAWGFf9Hr6KEeUv2SaZ5Zh5",
  "key34": "2iv32UBLaf4YczUrkkD7TWeqnQjECbk1svAJKNz3ub342EqozrYAhUxj7VofVFwg9FkGVX6nZKGZ4E36XFukZYTa",
  "key35": "3K3qaEw82MN5kLPD8NCHkwt9AMN9VR4L6T3zFLbHqeMSs35EzdHyKshJyokrJsNZmfjxe2zW9c2U47XuStpbdNEP",
  "key36": "2gisPXHvCKxzJ5Z4qS7xtg1P3B8jFhWFrYBrEvqJwauuXeFGhCjRga557EKmSMGJ8vCHXaPG6z5z8SSpMmU85Gcu",
  "key37": "UmdC8tg26FsMzSW53Sp7yYzpWrzu4Wa41vFG2XbaE2MT2uc2m3yN8xNtgsEcFLg58fb1szVPVpvtTBGH7LYP4DT",
  "key38": "3fQvWTLtHQ3XdVDtPJvNRUny2fwyCp1aQY4TpQpSTdjMFpMaH3viWz6U2twsQ788igX9dxVN3zrDCP24mDdRhmiu",
  "key39": "2vjuCBREoPd8A7bwUf3CseGkxf1y417uTpMsHR8qPJrxcCLbUFAh3LB1MLExDZU632aCatmn4kv6cPunSJqDaDze",
  "key40": "1P5SahL7oQ1LonJzpuAEvTDnuDMMBdHo4fyQsAuviCYMe5YKgq2o9geLng4VvRQxtcfhPsypbTvoo678KZNeEDx",
  "key41": "2cp6yu1Vh28aLwiPxRfxQdTv2kcKfCpibfJ9FEDhqfKamX1utDwwveW8ai2aVzKtVoj9fTxzSAXRK6ihLU6f7FFy",
  "key42": "4Jn29qJHDcDCXzCq52H77hB5eWCY3GgHt1wuyoyh9YBwHTsv65e9N2D3JpPAbZzKpA1QbK8AtuoKX8kGQHFhh45Q",
  "key43": "b15GqjNW5wUzJBNrCEsH6WfN7WrNVeoLMRqMUCJF5qRLJti4KN16cagehJxivYN3HL74nG8B2Yqze92J3PDhwKY",
  "key44": "3q6He4A1sbbBpSLMBEA9LQwNQ3Tn4eZhyhvS7wPgkHPqenuqLCW1jat5vS1sAdASqqSWHdkjhCkmtPxcDEZataem",
  "key45": "h449UkafxRvxWfvUUdfBP5SL3GTCrXv1AryKCRBoTXJ8qdHgAGtp9rG5akTaXSsA3vQVSFcYaspVDLP7BnXHRXW",
  "key46": "hpY11UpDtTwaXKpX4rahwkLcck7VMmMgP1yHwcmd1BaEjBs7mxabMDLjNcbqeSSGBDoGaJkw69NTUymxG5LDULb",
  "key47": "5Emkip3o7weKEEGLuSFCUSYAp5VYoU5BWk1VW6773K2gs2Hzhx6qwEibUisCehSS1JaLBDLftxYqMqaRf9rnVsny",
  "key48": "4TgRdMZrCViE16hXPmZPMXbXUV1DMqECWfdnNrYRAE3w4xkyMi8V35TERLuHXDMcEPMCk9MzyrUYQXjnwN2VwTGB",
  "key49": "4sPdbjLrKP3LXtFMCoNT92cF5diLbJ2kKiwvWRSd6RfrfEnF4JK591ALE4VvPaG6mLmhJBkEQcawYLQSxE4bTbGr"
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
