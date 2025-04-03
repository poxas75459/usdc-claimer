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
    "471yBAmq1JM4DWBxBhTYgGhSnhrMkYu69P263WTgMi5r3ZGakLF2LdoKw1gUikEUPe6jLLPaaj7zjtsAZ7YCPr6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PfcRgFx9p6E7EEYAUad6LtAihD3bSNonqmUh3GH2yEoHLAtfnX3Qn3Z1yfKdCgWhm6np4RCU16rN1WxjvPjUyXw",
  "key1": "4qpj9UQsczYxC49guUFo4xjiCKcXEMpMMWAkrK9aav8yWBbhxPZcmYGVJBTBMfaTBZ7jM2QdNVYXPERYxem2HJqn",
  "key2": "5JbbMUEcZibkWf9tQMWu9A3J9fvxFdKzAuB4pNCmTL8ZqatJ1j1KQa7Bqunmvi6SmfoNLtGpsF8p14DDxtez5RfN",
  "key3": "4eQmUccGJBgDebySjD4cpjFfWYd9w95w9dUvNJRFFcjTXvJdfUPvfZLEvzNxUbtwyNVhHRTXbcHLqY7Nb1Bbd5b8",
  "key4": "5uP8sKDfqeZoXT33N84a71QWhkfYncLMnZAUpybWicfqdTKRyoHJAapKxSg5TdERPjPRJA7LF9888Vt2z4Uh1qJx",
  "key5": "3oWXeTjWEyCGqRxdeW2adcbk1cdTQuSQjaMS8obpBKnesjW2yfGRBvLn61mqz8sBLAPQKc95WP8ra8EgtVzVCLdW",
  "key6": "4xaT65or1tB3BVAsz6PbaVk747K1w47fpQc6VffY6fAsKZR7xRiieSSP8EPyLiHYrj8qmdD8xrT1Law6SQjctuwY",
  "key7": "2nNZWaX1iRTn3ACksg1D1j5uvBXTREceToekpUoJqdajF9gcfaV2Tz5NxXUyEXdXESUPCLtxtyXBz5ByNPoQ6oxL",
  "key8": "4StrXiXg74FzjMXq3YuuXGodWLQLMaTc5x2rM4cbvnZoACHvrS7K7mWQKfnWXvieEwJWjT37tx1XvoU8hpGPEcun",
  "key9": "5snGP1b23zRcUV3uPotwHxtiRj2skdJhoRQhga1PST55zMvigxa2jmDX3b5jjJ4baiyyou6XzxddpuTrFhtXTX3i",
  "key10": "3gWtFfBgozaJF5wWdMs6yaLH8htbQGa5rQ4SfXhsdTX5JxU9MTH2aKSkKjXvw3nY7PvL8cTfKFvxAXWgKFowfH3G",
  "key11": "54LXZopEDFoq3awEXAbzvLh3uxxDxEQQDytxMdm9CWDyxB64TapwgwfNcpmjCwfA7hdxEMFjjoEhPtU2wnL4z3kg",
  "key12": "4puSidRzpJ5tTuN5tMnrTdYJxMser9CxGok6NXtqiBaMWRcJtqJZRGpETudsWyHB4q81UnSZWhy9oXRisL5uDRPT",
  "key13": "29ea53NxU3jvMgnothLLXh8vC7ay1rSftQ15KnuqjKH7Bmcacx256AoGhrkamj5zuRbbHYV6M2MrHNFavrnV4SkP",
  "key14": "3jret53B5iz8U8fcmpR9C769MSSGJGabuZaV6UokzSWU6T2Apc5YXKGeAXCu6GU3TTiNESs2h8nFtuYMkPgCW11X",
  "key15": "4CH6beHDTpn4UGjXrubKcAhME8BYmnDjEFDc5LPY7d7JGEz3d4y6Sc6u2AFA8FvK9R3KBcQxF3HVDSQg3R7kY3US",
  "key16": "4kgfbZj4UwKQPSckoPKRTmwaRW6T9sojXd5NK4QSv3AD15DuV3AkvPBXJbwyEWtkgbpEcxAV18agZ68i4ANpWTox",
  "key17": "4kpFQPypFXCC1yvmbndTiKrJu2JbKYuMFx5d79ebDYo3z6iavhCaLreiYv4nh52WgrX7MCfB15dM6KvK4wuVbfAU",
  "key18": "4aZaHyoYLXijyqyes2XkGs8vWRLxVt4yAymtGhYPWkrCYU4hmdHeXzPQBxpANZhC6upCnk98ncLndYWhhEScsuMs",
  "key19": "5qw2MktzymLL7a55U1dpqdrEge5wGvejV8PmZUjBjbniSadn9yS8fWW1mXoazvDm9uVwqg9CbNP4LY9oNuxApBqF",
  "key20": "3oM6dS9iMVxH1msZq1AzqNiqdx31CUwyQbQHgAjpwroQSGQxVSmQ1UiboGCuuoDezWLJh5FXxVBeK6SjzF7MMg5z",
  "key21": "2rgbYsw2Xe4cL9Q1ozCgDYZ2h64xi43m59WhxyHJgwsXxKAdPsp9b6Bp9SRtcEYKdJN6S5Tw6w7aAo36x53T9g6s",
  "key22": "5rKTNM1nN2kHo9Ku765X9jWQQis8RXYKHSdc8d48rdentke9Nq4DB3yY9pR6JUXjj9TWQtdCEhmVGSMor8qh5tjs",
  "key23": "2SA3o2gsMQHA84fC89Veg5fGhm5Tvf7vS3ieQzYggALRV5xEcGEPYkevhEJ8LfgghD4JLGrFcYNqKJohmRs3SNDo",
  "key24": "JuemGnbxeRLcrCV9hLSoZgC91pyCqVa1Ad4o8hdn2BEdbcWmTmi1kvDJa3zzdXBtnSKdQ91CnXcu6hFU6xUXi9k",
  "key25": "5sgkJkgbhVHtv9VTcTAeVc1BRz6RC6xxtxD6QUBBV99C9UvzHKVWshjPR9zTRwrdAQhLnnXZLAYFTtddMPuPeBoo",
  "key26": "3R9qqt2CxBn8TfDNkqtpLAgWHS2f4CF5RHrQgbPxQFxB3u7YvTgy6bwhJUPh4rSDNQtQT4Vvjm3XJ9JXJYkngg96",
  "key27": "tnsbWWPPFGTpjtdE1EmtJbzEzzVSaT1FiL7ubF9bwNLiDomgFVbdw7usxQsoKm7QVxyJHQ7yHvH2ZK6JKgLkM8W",
  "key28": "V5yzXXgdbKby2PVgCTnMiZ1Y1kH5pLwuUhiBEVpGLyV3ZM8cKddVfZ48ynYGJ3hoMWwwwriPu3RU6XdC298cBEE",
  "key29": "AqBxjJ44oBpTsDmKfw5BrfgUgvXnLugAjGsKftRHjQBZziptAVa6mBHzu7qWE6npQKFWTtBoZN1EyLKdY79cAJD",
  "key30": "46ViBHQV1xpAuMxHWX4yuDD57dY3E8piApkgLVRmCnHRkCrY4NbJxced1xupjZhZcMRsJF74qP3kqZPheBR1QwGr",
  "key31": "2HCWkAVFirBDH1jX15ianDgoB269Bu3Gdb7QJsTF53h56dRUwgtrPGFsv6c4htoER7Ho6Rfgv4t82iYUgWHPRJpu",
  "key32": "3HCDPhDGqQ1eCwQ2N3BUvVbcpKfy5jX3NV1YQhu53GC8RzeiiQN942akt7pqrx6qf8cyRoUrD4JWZiTdjTNQyamY",
  "key33": "6WWvrKb1dwxgJ3mRw79VrdR4aoeXY4icEpgSFwxsfomjBX13anxptcKUxw8h64PL6GGYNZ6R19p8vXcUAUewkTT",
  "key34": "2bm5oKPbP3fvmw6Tcr9HiYZnhrhaXYKaTnpZetVcirGYivQoZnj4xjrwonZEFRuCiYseYyM5bTC2rSoNLzpKoVcr",
  "key35": "4LiRbt4QzvpTYWW7SS14Awv5EFnzstTfh8uGerG8iYczdCK75jW87g2qULiJp7vGAuGRWmhgEmiDeqkmh9iQKTPr",
  "key36": "5xKBqfCPBAAmafo5HJqg4k8qBw24755jrhYfhsrhrrRqJzZuLmh3bRErZQUQMBsYgmEoLr85iatkViwbmiFM7doK",
  "key37": "5sxeBuLekigi7HfZmQyqNeRSvnQhWMvHuXopU2z3bw3pDb9fPZBakBsmwnYVQCnaHfHjzogYE7nexakgvfYjnVhM",
  "key38": "413ZVxtogkhC3pCqaTwJyLrdAVR6SSuBuQaV8Kjg7kmvDHV6dMhEfCFtoG3hz8DiEPn2nFV8QKV9pKtMg1ufSy1a",
  "key39": "3L9uAWigARiueCGpiebqwZ5KUJcvavJuH76T3pwjH998nhwg7wnBDVPcFXmNzc4kq3jkFE5yGqArJqyzcdcnMS4E",
  "key40": "2gZpGa6TtX1A9G2SzWQbaP91YAxdQ7N1RU4HHgfgPaEAAnrrwemWq1PR2xkkYc3FzcBeRoyKMHjPvgj8eo9UMUCL",
  "key41": "2eM5TuRMNNMMpqpwzmiijfCPi235GSdhkrxxJ5EFWVLDKmmCMzXf6LtBac7Q32LmxGwHTzWy7nDECH5LWbZ15M1P"
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
