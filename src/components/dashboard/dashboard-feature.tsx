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
    "2wo5BSAWj4MPDCpfjAtvaWgm3q8yHLNvAtw5qVtXmZbQyBjUDg62qTZxwJgh69YaXsTvjxVidhfLNDh5XhMR855z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MBeQndfN13aoNqRXd6ASUXc2zCHobbjMZjCwYcF6cDvwNSP338FPPo9ECmkEpRT2dT1hBqzUSvFRGgZJY2aot1x",
  "key1": "4TxtEyAi63XW1QbMnXnJ1LN62WTa8sr6kGcHrAizioUYGyTMfpr4cJDrZ5xkb6ypbuWMw6DTZvJv9gSuDi6Vc4E5",
  "key2": "3rUWMnYKh9V9qTtpEi9NvqCdoVT69YZSypqvkJF3eJr5zkG7xxcf4GNCqENigyHTFxSmhaedc9mHbbDTYR8YyXgF",
  "key3": "S5DgGQihUMeKAjkBVBxtiMFw7r1v4v2MkzZqix6rFH9gPca9n1uwkKXaaDGL13eH3rgFp7S7adaVmmPzfvVkDs5",
  "key4": "5dk5ejGKzjgyevHQGF3hwiDTBzUv2RK2byiSvFfuf493RFMT8bcKPcZ62Y8KNSiZ1c6TVtLwTtS8mGzTTb65Gdzr",
  "key5": "23uQGnMCQesKaUazWMgj5JZZkt1N6iEiG1mUP843rxjWed99uk7Tq2exqGFVYxsrJu7UhKYDdZXsC224UKfFiSpW",
  "key6": "naKQgVHAt6J45impEPwNWBELwc7QAQfizUmrAZ5FHpPX7GDHBwbQo3GeBS8oo6s9Mbv5kwun1jVpViLT5o46NU2",
  "key7": "3Ea2MVvmqXaS7qSPuVCi269bEfXndLbLu1DnctEmhmUZp7BYa11jzM6LSFamff9pqoZNkptEkHxZHV2A41LsG6ju",
  "key8": "4QkVufdrTV7MguwBBEdcnuWWndGJLqPVL7Z9GbsU6mKvjUhE1h52h47jQBT3iFGhQgdZu15od6mi7vWTtMgKpEW7",
  "key9": "58ef6she1meX4JEkdKiLDazEaren8STitmzrJJUwZ4okrGkewbM2tHvB5EKNYGRTaY36dU7TW34JNvLMGu5DxkQu",
  "key10": "ne3qofmJXyHszAbisLAsxKWKiQToVoxPm6JUCTbf7xTsUMPVe1Qu4FjvJwRLVtCq8dsoMj8Xqj6B3igt6Py1hq8",
  "key11": "4P8Fyycok5GCeRAcGNL3Tjz9KmSUxYTfyjabxr4vjER4QGLBLXYuGYAqvUieDuCuN3CTuGyTXjnPvqPzAf6yq7GJ",
  "key12": "3sQtqRSkHBB1GiQPnvfcCATGUJN4S5bJgXTm5Trie5v5BqRdqWJTQzJnvyZkCuxHQ1pVFW71BGixTsxjNtyEUELq",
  "key13": "5Jh69YrbiAN9wu8nyqAsK3bKtBRY8YYtfF5umq1g7VCtXcrb2jt9EUf35rf8KBMq38TH5paaWR594KPTEKU5N4Px",
  "key14": "2RBYLFzJpcktiTQ7d8sRo7z1vKTXbPw9Rb1DiGFWE55CqwVf5aDoEdhwihRXGaXJtMDgTWFevjvvg6bEkyfNaM3o",
  "key15": "bmnqgVZjSs2jbFTREKmEher9tqHj93wdtPCscV5UryHypczkgh8phdb7FmkcFDsqLYPcRh8sXE4V2A5VDng6iKt",
  "key16": "2G9vVNXzWd2uVGYjgXTKfR9Yc4HNV8KLMC5hsKM9nGXUNjmACCpdcJpiZTs5hmPYNVfq5H5sYA1U5S5byNKCL17H",
  "key17": "NQ1jyP8stUzAjtWTSVpbrwSebg88WStSrAPSRvUwfXY1K7quPcgjbAKX1VWgQy7wvkHGd22bNsMcWjdMyXDwfac",
  "key18": "2LbuhTp2XQtzKyQ4DDrCDTeCDVtWg9vDvsmUSgcEn9STGHxXWmRgP4rriP5k4Vg3hRYnij2MiFKGUGkZHg7BSfAg",
  "key19": "4N2n4Z92r7GTHFkX1jXh9eBhjLxPkWYKK5iERBswQU3QXshPrgbUaQu7syofrBihpUSxV7EsEd2qz2mB4Z5b8pUE",
  "key20": "4NKvFDBhf5GpuueVmGBwe8MswbG9Aq8VmC9CGD6XFjUfeLGahC5DqXCKB3ea8zSyjMwU9eSas46VQUeVfdzCbzpi",
  "key21": "2ZqaQQYsZRh5xqXdzP3zGyvoSKGKUqgdmBj3rFdafzkRQ3RYcrW9J3RsNQjwUNBM4cC27BenMfhqP3mDmULhZiT2",
  "key22": "282hZRyKbHv7g2FqpadwbzTnyoKy46boEbMtdFpTCMvewYRRLsnY96s7dkDYjimfAe159XrkgobPndvYQq8QsTjw",
  "key23": "UPaDVPZCUz1JUsiraG8ghTP9ePH2eQ95Wud5S1wbQenRRSZ67uYFdoewWgK1zT5HmoFFxAqYoRPxRzvCyThYVjG",
  "key24": "31xhwgXz7iwZKcPToXyiYX1M7nbMZfQC6jZLbVL5ZA3mUqcEkoZTahX53G24k7CrfRPy7RJGXY6m7m5sLUtT7RmC",
  "key25": "36Nsnb6TteDXuHj9wJ3YBBb4k7KkekxMM45cGfPGKKYkHipf7fJC1qMUPhatmY2nvXEbpQBgcrmkqNzfg73WiSe",
  "key26": "23csd4svRoUfk7N2oY6VoaBDYdJ6cGcVuB1KmBLF7uxogNJ2G2RQFZHU5UcNszJXouM87UJpnCokPi1V6NYGYAds",
  "key27": "4KahNu15crobNuzfVS4RgpE2YVwB8SgyW2ZRicFTYuC5YVPoiu63n3j992dhcQ279QeMU9GD43YRXH6DpPN4hmNS",
  "key28": "5UicmjnEmcqezfyy6LCoxQYHZGV9ma9i1SbWQhXyNFWTNifHUhMXmeE5GTxCQWEH4HCdBuvQczC783aroeob97Po",
  "key29": "65jCnH8EMQEpHpPGBAJHUakLtgPHJrKqLWQLtw9qJ6g92WmFqqw7s1YQVJSDhrV29GxqmcGE6X9uMrkJKScPoWT9",
  "key30": "2Dm5YM9JFYyBUPnMjUWGYc2jnCadE9AueWBDRK7RSw72H8MMJTQyFdLXvJv98BNsxE7JXa6MdfZkCPo5mPdCjpLd",
  "key31": "43ZprD3CQU1oLuawu2v67P4B5qEkupDLdnLdrMKUHxT7AKXV9ooA3uxRFFcoZcAJjwgkwYeoAhRPRcskcTYvFWY3",
  "key32": "4ydWjahNn7Sn3pdgpEJFTCHSrHWKoRjsnvHwgHCUc4qfAQGaRBnGBJ1sPhrMrJrYwwMSeMez3HHL9Gm3PzYLehQM",
  "key33": "b474YV7oVG7mq3wyzdjDzHi1p51NdY5TsynbCft3WLQGPWzrUP3LhRyKAraNmHzTUC912yfAmPmecZ8JohYZTFA",
  "key34": "2Gs1JuFNQxfoHCfKuL9i1i4tooSwtreSJRt5hVqQ2n1ty6pWsP4RjuMWbs5WjUTGaVtKYfqHU5adEFWmtWnwVRQX",
  "key35": "2am6zBid2EcdS13fNWfUHDbmBvW1jB3y7fW2W1LVaaaPNgvs8hkuKnmYKhFfMYFqi5JScB3RtLHdT3g4W9adHRLG",
  "key36": "4qxEnjqaW3fyhxP7wnfkbKvmvZuASP8XdUmGpNi5YTKTFbttDmuyJGP5ba4cnsN7C1ceboUJKE8dQbr26Wr5jiYB",
  "key37": "4nnrWzeF9LxKHgQJBncPDu69JfHpav69yZsQMtY9dHi5oUZw4vBqL1ur2XfEnb2tVyQiDEP7WcJBg7Jo6HGirVs",
  "key38": "fAn8hAYYyrkeBAJxbpGHWu3pk6jmS7MPDSRcNdA6aNZW226CBbx245XqhNo2K843gKxMzizJvQg4waU9dE8qLV6",
  "key39": "2MHeTtDusGLAHxqrguR9QEUf5UWfM8u7V1KSv92ndvC4eEqvbgZGbyGbkHMQcTtYQtCgV8XAkU4va8hQyMaDPKSi",
  "key40": "3zLe7FdivEF1MvHkk2ou1LQw6sNaDZK4crvZeSNqRZs3WwQ2TsKEdA817RoXWAkmKfMkXWBx5TrKPBWzbvLmA2kq",
  "key41": "5QM3kEgTPRAh3LMrU2Qh3NaVNSvMkTcBfu5ekRdeeewGCG5JXykEi617Ad1PycRxQxoEYJmDtGTxzfrJasaPAC3H",
  "key42": "5eRmhxaZDzyUXqAecm7FkqyAyAWFnZHWZGWiohXx9ShnhXnEZG5QupqAQkNPuiPCALYvS7XtELKo8UnkL9jopXBa",
  "key43": "5BWebRnavb2p2V95uG2r8QLkxh4QRhuDZigEnN5FL5PnibDNfT2TBnnKKjBmyvVxQJ3K5VwrnpUg4gmHdiFuqvKt",
  "key44": "3kmDCkLEFzxtPj7eP3iPqeWxyW1bNhFpenR8QuDmpGg2FbpdFUHUmiLZs4VHiveHjbmBrVJL1se2xmphnPhEfgzq",
  "key45": "2tdS3SSh3ekaNTV3qZ4fRfzHwbMWcP4AKT3nYrWtK6PmhAS3cXQqAkiQvLHb5fzwpXXRz9pttByd9hJd4aEXgrhF",
  "key46": "LPtgkqXFmYaE5KMKFynJVGS5mkfCyz1eRQSiuhk38MAhWWnLdHnLgVAgukhZ3D8rvR2jsFtsAyVUsjb8jhjGER8",
  "key47": "5XtV7mTJmQ67Xmpkcjvs3zaJ2tHWCCe8TMsHboHB4rSGaLXUB2yWTdUmTR1fEuSAJ39oSABgv9wxnaieNZ8mAmUN",
  "key48": "47EhyLe6SNozksdZyHG5KenjSY1khh1rGmjsMFD8PxHLsFBddmYwitAoCuCb8LFXh5fyc2qxZa3oNLNRRvBDf8Gr"
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
