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
    "HK6xHUB3nZf1aEc4oDCRQfDND7ceBmWZMT1YRDJ6D3As2wwavMbZPEaMiBgkv7XutwhqjxbVPz4Rxq1pJB1KBWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vXNHNA5mYG1WA7WcFPKdLxHTLN44s7LkGEkNAffR5Jfzx8h7boarmuQPCSPEXxnRpknpG9bccHRmoXDRYpE2Pis",
  "key1": "2KRt7uXpVSgEVLknuYX6TtMC1ggXoxUwvcMpS95NnACAdnpaUnWdWHwHQGjsiHdpfLtodpRqSj8gyXoD6PAzXxBk",
  "key2": "3GhYrczseULhy9trEcHzGc44WEwVbwKmNR86ki7VZfrzRjqTpxSr8vJU5TD3c2DZjQXBeFRraARswNVyPjRHuPYp",
  "key3": "3KYtuDgpmHUFtovovQt2re1oDZQgPh57X4ynvsipX1oRgy7kxFgsgMggHCNhv6grkHyAwms81ivvbbXe28YGYdXu",
  "key4": "57TyhYQNc8jtCRBQ1eE2L3DAvVgyCsiZAofSBXsj5bKudUA1wahoua8Fc3WnXdJQ8P2uqbpMaHUf64CSCDhHD9Y8",
  "key5": "28McEFFkCe1m9NPHbz9ibcYJisxutMicDr6Ah1FmdfnRdFRmfXBFmiuy6qidAFxCEZGADQ4pAd1ahMXN6hNbj5gC",
  "key6": "4edEHxjaC6kCL2kNrsebHnSzuhB6EykLfXLfGb1bCDDba2RjHzyr37fMZrQ32J9BZWu2nfNzMJ9aiNZna38krz4N",
  "key7": "5sFTbAaUXTr6gsecHzcvXrvBdHUbRF6D8wgtjxAGpSHThpj3dbz2L5jeWiGKT3bQbAad7pwStXV26qPkPcay6QyP",
  "key8": "4wsuL1b8z5QJprggcmaykd7bzo2gk9EXdKCvNfYq93SZL71scWxPMVCPhsPU2rmDX1xz3sAAcZGAPs537haBXXhP",
  "key9": "4qwKACcnB12b5fvH9xLZUcfw7gc4mAGf9vKsdVd8y5G32hBD7CdoeX6GiEr6LMnCx7txwWW2NmHECHupGuCfyz6H",
  "key10": "4eJJL43CYe1xgR8coLcqm4rKyFeYf77bhtWwyon5nRodmYUuDH4J4koMWiq9YdjHtZFN9jkdtqXFxNoBmNg3Xypk",
  "key11": "5YoVeJvxJzf4Zz5nhRRU6GQfDBCvQPTu9pcYQBQcbnshLVUpo3ELcu3SqVjRRbgtc5XJpsHzjbCLBp1rnvwX9pAU",
  "key12": "twwrhVTk1ppqNQohuTRWRwjhDzdaWJMq644QBaAg3tuG2BKBx411RQMQA8qmRuNDtfV3FUyQ2JTALwt52VgVzQh",
  "key13": "3A1Tficfjb2uZTYJVtEeVYdVZXdjdWLVsFTcEMa7ft5rfFwGCTJCm2Jr23wfcRfMuRgEFJG8Q1eKyqMh36Ax2G7r",
  "key14": "5tLjNDf2saKn6AG7rG1H2m2vUE9VeisHWnvVH22juDY1VhcHgj5R2xDFLhyuAFYWghCuVYJCfSZCKMKM51jVAwhF",
  "key15": "2gJpAp6KpUcEH7N6uYAnU3UGyjvdqSdsSS2TQRm5tiWEPQarmEAhw9iKHdQFTS2ve9wTngzaTuYH2J4BHFFr5U2Y",
  "key16": "5zhcio1BqbXta5g7Ht1Mk4i39CgJLVq3Tud4bce6JzwR1NCAxD9BDpypcxHca5pcnEgGuyi34Kz8CXKVUx2giakN",
  "key17": "3xDEiQsnj2UManYjwtamP3EaBEsWqi6z57ebuJ37QNBN2E2bcdvhM6Wadd16XMbhcpjz5htih5QA9sU8FmUJ7wXG",
  "key18": "2Pi4ZWfzrZ9ZH3zaDanuH6VVjphUbbnAH3sSf6nzEUbfaP439U9MNdykJHMR6Cqf5EXpGEDeKiXqCoHh1Jrs8LLz",
  "key19": "7yphidugorGC75bYKrgvmNM5tvLJ1wbnmukFDf9VQUddetv2Xn6PSZSD8Ehv17m1BhgPxzZ2NSCUbdi4foLHqXN",
  "key20": "2kVyTMriF6gDTkgg1nxyq7k2T5UeTpQfvXRexcNB3ETNusJ7YisEHLT4sHySxX2QyHTdSvzesCYuiYpWyRUG6Kw",
  "key21": "2yZUVZdrxJVjiJ1fspC7qbpnuBXGKi3EMVRNR6ELi1MZF3JRpYueEEaQJbQKQKjz9Gi5K2gGVM9DxytSMDziXr6v",
  "key22": "3KGcqYjWAB1FASNH4vEhkJL1j4nzwxoyeaXECRboxN4uwzm56r1pK2vt86ADBN3R7sa66eqVU5WMFmyY3nNbMG9x",
  "key23": "4P9WTEtwSSRw3gLqmD4zHbB2rhNdZzqXywHMXNQeLf4QtzjGFEdSHo1nRQ2X1yq7QaPpwdDTvWNDs59aBKd9JaTA",
  "key24": "5GaaacyXRZsYApcPCPSAzY3BgtLyDuPGGFRXVU8qMZLKzuhj5xSea3nWtioxQ9Jce9BTN27jjQCsT3Kh5sHUtGar",
  "key25": "3UUg4GAbnbfzyqkyHjtq9cfeXeH75odGXFr7sYnAp4v2wBMM3RqCbEXyxXmxMHgKzUmLTzwwRkrQse5YFRH5MwjW",
  "key26": "44p3cSjc2QUH6JMB8YeQ11CuKHj1LAPAjJpZJL1csEJn5KqTEyyVVuydAgQbJka2RhhVsjY64fgFHEVr6jfJ8Qgw",
  "key27": "cGNWdqsgCu2gdcxihNQaSoRjxGoeA2r58LTe7KkiKQPc96sHQstAe7G8u9Svtsw3yg6D4T19BJM9YhonhA921Kz",
  "key28": "5PCK9SpwEKkPwHhqLgNc6y3HgrnQ6mkwTrbRQPTN63tkeV7sd8HpR5DuwaRnY6Dv3VA2RFmZuon1xhsiRDJX1YfB",
  "key29": "41ZJAi4Sr7fJaWSM2mFb8bSRv1AVnp6KWDyY6qgCPNwKwnM34br8gTuhRxKH3KJHbq2dSdgf9sHwR6Wbr3pa1x81",
  "key30": "5xfnGgeRRkpUtP5yPZxD3DaQn8w5rKCo1L3Yr4DhHThMVrqMy1KgxArPPM5u535MNymTfiMGgguKeX5wgHumfAWa",
  "key31": "UgrtxeMSEYnNmgqHuv2K94Fgz3J6U75sAamkbVZ7tCRz64F93CDTffU8o2JiQbWyh1KcW3q4f9sutaSMijV2PLx",
  "key32": "4vYSoQWpCfLMPJF9foNiVj4i5DEQAQgGxRLNZdvsJZ7duvadJawVY2oMvhtLbpaJHLTmZ2VGoHitkCnBgfn2CTot",
  "key33": "4NGdp1vA2tePnWdy2u7HBPd2fXtK5kQuRdFcBK7nqNhtLuzBS6Lcb1mudWu58sBeDS9bjTn1N76LFVENpJC32yEL",
  "key34": "521fxR9eqFDvCZq8Ujxs5DKB9FhpsmbRHy2undYfj3W4ggKhhJ3oEkkRnk2DdEEVCavmyBzFo9D4PNsMrKFmiX6b",
  "key35": "2V9Q1et79uYnAtTSzLMpLVFHxDbUTjo3rzBYNn8bvqqRzn1xSumjMQMz1waFhmSXnZDpoqf4wMrnS5AhCEcPJdLg",
  "key36": "2udHsn5te8thugcEbBytkMXTnrKDCUF4g1ACPD4R37G7SKryM1nE8WcQoeHW52apAzW1rPeKn7ffCach4hfneZhw",
  "key37": "4H6b1WUG7V7PdVgiJaSTkWkqYBQr3wuZAdTZHLjqPvoLsmARDu5EzsAg5CZwk2u7y2ZXT6oHPnQd4Wfmox2sLc7A",
  "key38": "4PgJM1CVBJ9u7NPxR9MHzWZeRwgge6nrAKWoyGjJuA3jYgiUgN1R4FUKcZrgK8Nh49cARv6923sDZzKdh9DeCTtA",
  "key39": "EK1AxUqpaY7DCyFJZizuhgmDH5KXsbCvSfDKCtfCAFDPsp1opWC7uXkmKLFUL3znWPmN9mr2u7PkgUcC2HAAens",
  "key40": "5LkhLBQAhKYbbiATRNozK8KGSSuCEZ8vi1Z1AfpoMPSQiPCts6Veu7wyx6uPs5zAdpNpBDTmHw1F2csWo3cTZ9YQ",
  "key41": "65M9Y9pSpvuzUcGAMxZMLYw81okyv8Dq1eZgpWvnxWwnm37SWnfPDBCFLHPpUSALDZoYQLYAUtLs4kS1SmkrAhQt",
  "key42": "2QSBJW4gpqyyQ4mw68vqJVsbLny8diJ3Exp58yyWHh3qnuNq4r2nrHUuh3pDBuBxK2GGyCJcqLVA45WYyGanyVYA",
  "key43": "2fLpxsSXAUsXbZ5RRxDwA5xQMoGHEGdCyLb2LDsihNjyXHPhprqMwn7iXCVewPUCkGpyL2xUSt6PRhxyaFrkHoGq",
  "key44": "4dCxxZwsUsC5MSbnX3gYnZuQhFTNGMWtc7wqRKA8yqN3ZgWXdrF7qHRbuXtrWLL1PEcdjFhEsNpP8iKzTN3MAjA3"
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
