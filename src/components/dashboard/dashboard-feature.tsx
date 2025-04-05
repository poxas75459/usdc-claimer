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
    "pSsJzcNLF9zcYff6XhRms61SiG8FKpX8B1bWV1teR1xz4eKi8RLHqSCnziDUiddZ89wujxrUXogsK9QswSkut74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2frCU3iwQBTR6ZvAFeXpHVJ8QD9FStqWfcPFbAsK5GWDBZkey1nSk88uy8Vjjzx2vJ5UdAHUZuFqCStgpkC8Hz5B",
  "key1": "4SWL4Lp8DDTdkr5vwSEjmN3DtqhVotnR65kKhj7JkGnFhB5zytTuPYhkUYoAuq1eRZaCjXVcxoEkAtPaYFN727hN",
  "key2": "53973ABetrSvkhxN47riwYTWAn5b74YLc4PXuG9XubJXvPE6arV8HwErfG4qbfhaUoZhJPtAwcLKnCnSbooSMxAv",
  "key3": "3zXxSeWG3UZDrbuA3UL4JboYYJoFjLV8WXBBu4xSWWj4R8CBFrvohx2riGa9HYKQd24H76YUK4rnD2mrEP3CopGz",
  "key4": "5KkHdjipyC35m5NqV7ckijc7QpFdv6SKQDrk4vkqBdeGAULk4dAi2HgFHAaSxqi6onre685Fx48NwwHF9NHpEKmk",
  "key5": "bmwKqru7kvf4EogmesPrigVxRnnFEdFXUQnUVEzZ7QVbouP6mU8UyRJqwpgG9UbkVzCjTm9RZTv3dVntDDeniUr",
  "key6": "4D6Rf74vx19E1Ez8UYP2mNXaLtG1r4RDh1pYxDHQ1fUyoh9FRtqrDK1Z5izxCpa4XDkzYGeS3sY88zx2ptHufsTu",
  "key7": "2WtMWu4LSZbaX9LDXQmAMZTWTkrgpEdbSXqL3y6c87em3QCcZaZtvxcv4kv5Ze2RuzDZMYx9TnvPERC5vgMVr9ub",
  "key8": "3UYM27zMajQw4g2MwMgqFmrUkUw99D9hnkxNwuBiyzuEr7y6DvFVo4jcjy9KH1QEVHx8KFvkUnLd46Hyzr8g2hnZ",
  "key9": "5T8Jmtvn3sAhuTeoNBx3hZT6Ks4QMyZR1uuehGhKQT1tEsUYLZe3QDeaCGTkyHAMvaXWpLa6PbVMiEvV4W3bkghs",
  "key10": "4CY6rLgVuPyWgGUvvpuXZqCgQhKcD3ZnsXttNkbHw4QAuRxbJSDCTpNVp1aNckDJzAtjXuNNHYy2KMC6hhiDeWTs",
  "key11": "5sWhBmyCuR2dHRzNLEfXQu8dqWTiJvjRbf3yuKTh4TUrqL4672fGUgX3BBRkrPGpMumpdk62phUWHV3d2EDS8qb9",
  "key12": "3g8iv47UY5w4q3sYvUcEB4khzYDQEJmQXPGernJRjupV2hAHpqMJGMp9SAadyQLrNaBrjV3GeUxe4wfuFg86VQEV",
  "key13": "nbyNH7ddpSqe5akQsQPVjZX5AUKW5iRy5jSpnPi7pBD4RhHMoKSKfu2cN9TT1a5yQPWv4o5cRwkRspK6rMiQCVp",
  "key14": "5CZ8TcSZpnTUMDhmeVqkfKxKgrroZBqAVFsr6LXULHgNYmnMizqgR7GY7gmoBgat9tUkudWcZvFxexckQEziELnS",
  "key15": "5EbM6B41YtNpQQZLKkdMHDuUfMxXACnFyEhmLWmRzDPtqWffZgpLsUPXniKAz5TzMVRErpDzBqR9qey7mRcEbq4F",
  "key16": "3nT6ctFzScNA1gbWryUFivntNQ9adzaddShsjhZqukrmuxCwnJfyWqgJTN4Hyh8EmjVs3QuYaEskKRZmDQNHjSmD",
  "key17": "2TKKGL6acqLG1aaAmff6iqQv9J5agqmuX4UpC2NREnAhfRYgVELVsqfBb5jdhDf4Qz2HW9Y2bjaH8MfzCd6kk1B1",
  "key18": "45Dwape7453WfjGEHU9vus3nMZdgED1n6zCLq21jc3HgBa4LW7noX1edtrweQQ8qDWBQ7tdKmkD1g2mvTsqXpand",
  "key19": "4a48EB4CFC4LK6g7CB8LGefbk5dZM6WWgTpTvKpWAiCsTEUyXancK7HgSUpKZghLnFBYpybqP6fovUQ9YnqHeqrq",
  "key20": "2FSX5jSLAoyzEXv2hSmLzQZzdYWm3WdszWCN3e2cdRzh9Y94xu9tD5enJnFy8LZKD38CCKadRFuQaTpCNFHPv71d",
  "key21": "3cujJkMmMsA7gYpJ5YYwNMxQG9pTPaWZuLK97dAtsbTLbAaaVbwten316kScMW8YFbJCxebdSTREbMnwf2adFbZZ",
  "key22": "HbZpL1kBzLeDtypa2uC3XP8dRn3U9V12EpBUy1sC2sEpbKuqzuN13PNChGwQktXYw5AtPyFBUte8u34qxBgkfEq",
  "key23": "4ghBKwo29roAYY8WtAGEyJ2dv438JwtJ5jYJkVAHhc4HSWzEhjSDtLuaxEEjPsfLN2HJL8iDjW9r1tvcBesCzzio",
  "key24": "4T3mn9jKTiabwUFDvtuWwupQMrR9VGKtK3mEsikFjhPgkckJCsDEiB7Ca6iTFvvTPDjyrA8soTQmFYhARiK464e7",
  "key25": "2WPe1CFLwursz6sbohzmUXivYrmZmPZZwc6YJHi6FwShQCb5UZHoV2WxbaQkxr5w3C73Piomb5PWKrAvpq7xyXw2",
  "key26": "2PYXbjwvffvekgKXwZapQ1tPvFY6AYABpukLYXf5Y7c1zcykVaszhxkUPgoghUMQCYrZKt9eEapZdrw6qpZSwzXM",
  "key27": "5ppH1zCpbs8Yoew6n5y3KQvvpbBiDhbozPomEQutSvLz2YDXEVDWZkR2UZ8FgaWbepATHWjSksB22jYhEdAy2bn6",
  "key28": "4aEk8FYJ8M75gJWAE5PAiZuXaZT8WThTAjbhgMqZwaq1V6ZxSCqM5kLe9PNzUiyLWN3T1zc54RWe6AMRcNTi7mHW",
  "key29": "WexRJGAfUsuAfJ9jE3YTagR3e91LNK7T6PBXumM3atKAfw2iXphTBLerNMux8gdmxHQDNg7GTFkpfyCtAvfQkqs",
  "key30": "5hovrKL7TKSyb1K4aGHrYUoAcad8Ka3GGGaNG25ZraUmJgt6GMGsDvsLU1CzcjBeGpinAMjjSrnJbBKrfgB3noJ8",
  "key31": "2n5TuRQdEkavDBcPg1xoSJaM2d8bdzvM56w2r5mr3u8aDG4NQcNWZSmaNw1UPDVZTAvccCu5j1SVnYe1P9r13T8E",
  "key32": "3NwD4kWFK2tSXhJ669ExCf9EL4c3RTSyVomXVSrihFBzmSTrz69W2a3RmQjtyKFoujBLnuaC3ZkjzLKqAiyALHVt",
  "key33": "2MvZTUVo9KAhVqdnprFfn2h8LWYtWHwXSS7PFaiGbAveqPju74J7jid71WAWAjztvGxZVry4PQST7JGwbhM37mof",
  "key34": "2nf78rp7xFnaqC4waxZVjwqNpBkAj6EeAoexJfYABP7VzBsCcB6SqgppziKhYBv1xAxXZZ7QDnJfAVFKgAivZsKQ",
  "key35": "2m69JaBHTKPBj4bCVE68Kajs2YXJ9JAmzZUD6iPniufkNht6mFa7uXn1PgVTdqvnocMfapz7HvjJsbaggKrpN5Fy",
  "key36": "5FPygjuDnHpdp9ze7evYN5d91A1hubFKc7xA96NsRTiXPbGtpVbsZG7RYpqeVVDMxxbtARLJKdiU9R4ZdvdMewhZ",
  "key37": "2YcwQYG6A6ap4NFWFzsoYJPnmyJHEDjrwLwFkpkKHXLTfYKdUPSKhqLoGoX2jpQnGgk7w1Dx7V4iXbbgSzL8DpFH",
  "key38": "5yydYSzH3zxnJKZW3RceidFvwkLkx3y8n8mM39ybdkUniupxNHjFipQRsP4LS62vCZHG2zinsj4jsrxbyfDCkqU5",
  "key39": "3TgA4TnQ5duQgCtWW7UsJmgRaYe58CSdQTft3ehcUJdmX35nRrBRWPRJAQg8M5YGVdhHhcQBpTyYxyDdMfxfXtte",
  "key40": "5P6xLzaA8m5yJGf2bgWmjhkFnMXVoW4oh1UUQ8ooURQe8sD3qWnjtW8UAZ8Nzu7ymmar2Kb7mKxsatMd52UacHXh",
  "key41": "2eDqb92a6gjbwTtka29xYz4g9QVJGG4ZFtQVvUyJgCo7cYN1zhFdk4jidSJcjWHrBcB5akNKeaAEhL4GHyesfjzp",
  "key42": "tJjtiunSwnUzASZYCPPAHDjaTg4rPWiFyg1pcw8umrAnyYTtgALuMcRaWX8LdyU34F15EM2ZZYjPP5vgSix5R3M",
  "key43": "5SDNJJUoATTnXUMQEPcrjEb3xgT3jMuK5Pcig25KLy9JXvCbqXnSgKRmMRKrKtZVkBrFTDaDNgACGbaohLvzVpw4",
  "key44": "42JNEvmgTE6aWVjG7gmvXZMvJUNnqnFMyqXZznJGYwisUW2MZam9vxgAZEZV721y1UgvWCDD9tHbdQrL8ZW3wjnK",
  "key45": "5z1aoPjYwouax5Ffdph4Py3UrpqCn3vgD9nyUmSLXieLL8kVaAahi1dMMsYJMbFqXfaF79P9xcqZtbWLq1jdgTgS",
  "key46": "9xXufjR5WeutKFT8y9sNRnyRePf3BiFWUezeFTQc3TgbRoq3QocGnVmYFCySt8n7WNSTr4JRyQnXFAK2yJmNVi5",
  "key47": "3WzghxvTwZKkxg2Pe79VXonkwVuAbw1VimKy2XRTXiC17fvs47ermCeX8T6kRAkoLS1L8hC39dYQSHXepJEqrEHi",
  "key48": "3UP2wAvzA33ZxFtyhfrL3xAnq7fRMN53WLGSUhypyb4zKHLcCUFQjNP7dUDN8DQMFhzdn1SDHS7bkCQvKUwYgeKP",
  "key49": "3Gg4eTADFmfEkprpQR29EVfc1TeRrA9fSsn9wLLuvdHHEDYiYw7RA5cRAz2DTKra3T9TEdkd4Ch8rjkxQkNSFTCT"
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
