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
    "4q7QUhRLvMJtMPAy8S7Zhy1uHgMjdMgrSqjjVEo3yyhUtYWQ2nPL5GGbdUJMvJ4pqxRCQoXwrJonfjW7knZo8xmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8JQJm3FCA3Fe13vMU5QpP4kDqduobt7Ta19JFhsRVoEEC4fn9hZjQAZ7fWebpLSxuqijzKYhtazSMGQfJHtRfwR",
  "key1": "4gS1HopkkEujuqFXkKzFCPLGqwQ6uLhnwMZnP6fhgPE5DP3RJEKhHyRrVXuLquYMY8ocZuKKDxwH1Kf6FUX3dxLW",
  "key2": "3vggnbG279jkhNmMC3usdWZp4CwKtj96My753PYFtP84TrYgpGsxuouXRdYTWeFqetZjdBUS9x6eP9ig5AaJNAYm",
  "key3": "ZM1APmy7yJHXH5RGPy183uoAvSyKbNNH7zbzC2nwK3SapFvaLCfTPUh9ZDeRsuNDw8Um1oXrxQjSFgwfyp1YXxc",
  "key4": "5AF8r2wCA2GMKkJ1NSXSVb7NeZpcapbFwgF2XDJBeuNky8oyrzNbwMJN7iaquNw8qpxi9aCeDVSxka3frFiR1hkN",
  "key5": "4BxWJ8W7VSoUDS6ASDdaeoqPN9HhoDnKBRhPWLErykxLN6YoEgkDUE71XZC6UcfcHk2NNNEjRxwnTrUrdNeemw87",
  "key6": "4Bc2rp3sfJouz9VD4a3CaGPhTip9ABjq2Z3bAmR7PLPuVQxurVPrvh3D9mzjYWLCRWs2LokSi6PgAwLDxFwX5W3B",
  "key7": "2hERwQCJE4ZG7eaV3hv4RWWiV8yADXwykcDxhqNfvwS3Uem1zkvXXvsrpFBr7HzmdLK91AVCUfgBYupXsmEWcZqg",
  "key8": "5xJ43RqTzmno67qahtkD5kiJhAc9oi57wLkdQZxAKz9gNP898xvg7ZSN8WiGXtRUAwMU1K5UUXByTPX5ntEUxbz",
  "key9": "3jVX7t89HgFUQhtjEWKK17zfYir8keTiXCy8cJvML7YpXrap3qiAppC9AFc8kTF6m35sQNcv1v4q5TEB4vkq6bey",
  "key10": "5uEe4xbLyGM7GoSsWLWsYindmDsXYTQpy2Kfmy2V6UQ9WFstePWXhCtPP8PktVtvtcE6TtMPgvUMeZqWG3xnCZ9C",
  "key11": "3CSsDNytNF5NtcmjumA8wrgazb6A8aSRA5pbUetVqAaHiLibke2qmmTkPt5e17Mgg33vRP3cPvUsQhZ7u67qsDJv",
  "key12": "duzC7iMREs74kr2qytbvYzpfspbGwvPmffLRDuqqr3RFeRF4HcX1yxVvjUvJ9PwnUKU2q8ZbpYQPo9WoaC8zRbd",
  "key13": "4NyEncwYuEGzWLiSn2wcWMLik2kEPTgqFXHkw96mULm6cwASn76PiVyMVPWKwr3PmUA3viHrFCaewiiGaz1g4Bu",
  "key14": "4ogDtK4bXbQH5bhK4Uji9PpPVn5UvfPZUJh1kZq1E5eHU7P9LdH1yMUP965sbRt83xA1FrgrNMNGLzxKEfr3uL8f",
  "key15": "3cg4nwQMJd8MaT1rZELoQcdWhJiDcW6pVqKnFXuC4u33S8gxK6LrGmAkhVGH68y4b9WePpKCS6mRLTMpAfQznEBW",
  "key16": "oKeqgjpLckZog6bXfYqaNvf8QBv9apEfhsBDJn9h5hPBDcP8yD6WHYSvjSGJRTY6Sn3TQRhH49U9gvnbpKLmx4U",
  "key17": "28xWyCBUf4HRhpTbHTPokYTh7r2v5ExP1NVHU5i4oViRXSpkiFQFGwpyn297jfphr6J1QzSJkhbWTB3fFsdZF9dL",
  "key18": "64CkPNWN3L8ARuGuEdTMvvVzx1WPTvGvUaSZQC6j68X96ByhvayHHP2raSKDDQU5JMum8jWYXERJyY2D1Hd1snx",
  "key19": "4HVJv2gLCZCJEk69puUxwhWtoYH7Uvk4TY5D5e98cw9ewp1UdwhTtqp5GdSrJ7HU8Ez8mvjN9FkRC3RDQTZuq8Sd",
  "key20": "3SziGVGmCgS7LkE74J8kGE8og9whTd2Y3VaQmiGqnZ2QWJsYo7XvbkfeZ14Mq4naVckd4dsgm3SrJ8RpK8oXbSTi",
  "key21": "s4fSJeBh26ca7BQjZFbbauX4nHJN7htFdBZGScQUfaQrQ1x4wVLoaijV3BGeWAzFJ7LgkCn6R7xNv15U5xWkM2x",
  "key22": "3gCBU5hhyPgbFSMs8DQNyH8UK1N9zKe8G5LL7rBoGwCCPNW4K4QP2an5ycuiEv7dPMDF9e39CkVvDWcpMpxtBZXq",
  "key23": "5PTw5N6W8TwtgLUJpt9qGkgmguCaDXfZMSY8aSak8FRb8H5sWYMNLBjrMMaSz89XPHLSmuQEj7obaHHmcSRoUiNH",
  "key24": "5HXndjrGuiBBK6oiVDUTrEBphhXF4KtfPZz34u2Q3sXZWuQfmV9A9fyAJhH5mNRUJjkLB6nQ5mjQKptKu4KCZHG5",
  "key25": "3RM7NtdPVv9RTLa4NhgmTxjqhxAG6ibZv1u4pQ46hhvdowEWibEQrHEfAt2oMpvK9GuJcdTWuL8VyFmRzo9sr6gX",
  "key26": "2ksEkvE4bSGCiVe2phBXn9DDbePvVZsy2ocTqk4mSYahmvfdTEomxSzdou9WJib1G38CbUpqzhDTSUU9hLDaNagm",
  "key27": "yE58NnELWeStprigNYJYPGTUYHB5QaBS1wNyoVa8saCBkJ4KCgWxiUZewkwYHhPthzqWdC8o9ucc5ruzCCWyzrQ",
  "key28": "3b6zgwRW8YnChovog7Bm8Xy2NeccDqhMP7zVrMFGnLJzHMs2WvPEBu7GfCZxHjSkc7gujZbBcqx9FNPPQ5qnH3Ba",
  "key29": "5RCsPaPLUwrPo698BKmizu5VWbtd4RimDVmWBjsq2c1oGySCNkDuXrDiAUkUiZn4ZTN5Q348Q1UdZAi7WfVxJspa",
  "key30": "4bw9LAU89Vf7T5MNDj2nzE4piRhA2UyYKR1ZZcGx8mvF2fFMuzFMbNYnveUQECoimPCdX5K5pk4LXBk5DojEXCAs",
  "key31": "4sSqabhaLH8kFLdCBaMb53SDecPcgR9NjMWYhahJvRT5DZSpBfHbXAkdx94H5uFMZ8vMWDxQQY4BAXbU3JR4ncuG",
  "key32": "3FuY7bHUsyYYD8shnD5jkhdwRtAymkBHvYCbwtchrppsokgoCaZ3AW9xhGeHEcWM7ajMBvy68ubbdSHZR7vQB14B",
  "key33": "3jx6jbPCQqm9X9VRBkTArSJuxe6uKrrxWB3PSbK8y6FVcH8FD6U1L6BnMkFKraVmd9AXzkUemedDk6XdsET9vJZ",
  "key34": "4PKbaLTwSUTqd7QrHNrAFNW47F7uzpgGQevEcMRo4ZjBXZL1FxTYpTGQ26a3ebsUzTJBSNbwHq59HfqMdA4Mk7qQ",
  "key35": "4vQhNb6nF1egwhu8VLXFdMHF7ZYfYAUybTR2kB8hngBpvzfoCRwMMwy1cZEMHdb9PcbkU5qzQaGLWHHm8S2xHBEX",
  "key36": "61RX9wDnr32ANTEsoudZphasqFNPFcdKU1QufihYi9X2BBgCixsHhaoPcveCBFhvQxySHRH3heazT4WL9bwQJM2p",
  "key37": "5bwQWNmGMktBqwKF4a4zqz7VsnZUcJTJk7riYLRP9thWsgrwKJHMzfWm4m6x7LpGUztR6Uf4E4EGYpA4Bc52nVcz",
  "key38": "2GkUhooAh36o5759mWWnvx1XmP4giW2tMDYe5v24cAtRdQVnDotqV6croF2QjCezVZnzHUstZCHW7m6TwzhnGPHZ",
  "key39": "4Sor5U4TtHuuWAooReHSDrKC62Hspp6Hvcoyz5oenm5E9KPmNjiEF31ZQttU1S8bx7yozcfKNEGQ2tNrqFgL1yD2",
  "key40": "4fya7zAwq5LvDfBrLt1F4wzCxBAkKwNJ6GyCvrWwjK8EbGWUbqPvMNSa6dMonpwZUzCbFWHszkSWjsdCrHUVqMPC",
  "key41": "55sT2JhbPGU8kdj1sFKKZhjp6UFQPYLR9KZ173DacvCY1kfqn5cdQbgih6uAuwH2d7GBDMiKMi2VBSC4A9aHcqH7",
  "key42": "4oJoax5NaMJza6UypNU4V41Be9QagSePF1tuBt2GJ1HC1uhjBAw7CFeGc8LfFpYWNfArAtQYVN3ifT1dfCxGFzth",
  "key43": "4JpfbkxUE24mwe9aLmgxsh6WNG5eAzehEDBQg4pPjtRwSL5BoBTwdEGMC4sNjVWYHGhZnBsvRkvPk8PTPbgnHm9b",
  "key44": "3JuJsJo7F7h7PjCGC6pX7DJ8EHmibo9FdwLTbmKa579PjC4rwuaTb1R43YTWPkRqvxAUnCc9WCVAXc9sgz5pLNFu",
  "key45": "5Rkq4mLCFqbhh98UtbjY8eVrmxYNHFwKpoWnP8wEpUUNrRpfSxH9egQV9HES1uSNFNn39inVaLY4bucwyw8Spftw",
  "key46": "2sovPpefKQ5NeFg8NfLC5xQwGgDSa6y3zZ5EeMj2qTAVzVEvLpRAJMXYwHh8QywhzMDRnVmEFuFeic7ynwU5LNKr",
  "key47": "4uwmpbfsyCN5wtv6u1hSgHTByLPDv4kRaCN6RhKCCfqhtvHBotYVC2H2WYKKPhgoJ1XjXfWpXEvj4ws8rJV6hBZi"
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
