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
    "2MvEHJjYzNtqLmeYmeJ6nj7Y2hqAr9ytJ6CDeahWyJj9dCdwu66HBsLfaCMdZW5dyAztRSWtkSXqhbPdTZTj7gzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YpFTnbU5niLL9PXqeJU2iFota3VMNdXf7YziNiVvG3bTG3LNBFYiAU428Zna74uWdVU7SWhyhtge3bp8fmnbFmT",
  "key1": "AKyMtpBrEJirhRGdiuoYkd6eAk1ME93XkZaKA7e7JmpeEhwC4HMaEVUqQxgqPT7anpHrwdLdn1dGHd2gggFVND2",
  "key2": "4NjigeGxVn5EW8mDYVJT4KdqhxxyPrfyCXLgNyQEPhQDmDzqY3HjsiPn8kNkW4EJWbEDQSYTRcXKHA3jr8DU2gGM",
  "key3": "9HyAxxfQD9stVT642V2m8ThLe2s6Hk4RCX2zXNCw3R26be961iN5Txxbvp4UiEe5wH5zSqTYMgc2JJAZ8yCC7gL",
  "key4": "3hYwkBYBKm6WMB6YWdiWuHTo5WaJmDfS8ts518EhD9HVuD2kkWKyZReYgy7f28fb2n3W6U7Kkbe7puxE4ciky228",
  "key5": "8pMB54QXZLAySqnf8Lw8i9TPgjApVdWUvW8hd6Tm3XeXfw6tJD1aCRCJ77AzFHLFGgnPE9BCQ674RyeT7S1b6iD",
  "key6": "3Mx35FPz5dg2jEHETM2j56K4swo3fxDGSJEsCxTqUbXUFaDWf76pwYQtkWG5tGpTNzhgBXnHkYwjjRA6cQ3HdZtW",
  "key7": "4XsTnSftJRQEJn2zVVrodrpxdPrnixqRrt34dpmeV5knJ3NRxB3kSEwev71N3opWmDv7CfsWAfteGeCpQ8yK7KsY",
  "key8": "ZwP9uT9ewAbP6e4frVTWaiRV2ZuUm5kMfRRWxBn5311jioK7Hxfny8hyknL3tafLszRa7LxZdav3PzGP77jSL7J",
  "key9": "35SvckDYMMLSYcVSiRh7GQCErKzLHkz5gbo4QXerxHNM9LTsA6v2r311unWm7VxFHoWaBbmuLpnmczz6ohXkHHyg",
  "key10": "5PVNktXuSM5N2aQRyYPqa2ubXLz25YfyA4wgV8DnDehqnfLGAihA4C3UmvyW7zoamzYNrxEeGsizjVcrc5P7ky3B",
  "key11": "444FcafmhZUkVemdaWiccuKDWdXM8JuXqV1Lptwc7FsQgwYS9aj7TogDuQowF9gfbMKd7nS4kXjhuGUmKQ4bCwKA",
  "key12": "2Ukrtt1M7Z8z6x7W6vPLFjmRG4kAsrxzACfKBNw1ivppJQA81e8p61N2vFvHfJhnMtHF815PydEmpiFr5LcSNgsc",
  "key13": "5Re97xHjtuL95ZDxtQSAS1s2KkTK3TzinRPz5AmnQQtX9JySn25QiazawgkM9EDRc8T2pu1mSNzQRAfpETp3Aj6N",
  "key14": "395mHgdiZ2a4SVv9L5kYG1sbWQTh1GSzs9ffog4iKVAJY6sp5F5dXBpMaNnpSouYniodfJPo7iM1HBuuxjo6mK5",
  "key15": "43PPSBAPRVQAV9FKiv3Gct2FQB8vYTujipEZbcfWRGnVtMN5y3BseQ45NjfMzCKf6cbT5XGbFjyvQVrTNTiNBjJA",
  "key16": "28nCoysPukh45TgqxRs4LZ2voh3NP5SSiCHxbVxiCFytCn5kmiz955gTXFWe8gJmdvgYioFTfAf4fmzKHwmVkTpB",
  "key17": "4QnvzTtf5rRdGnEevZNPyEy8QV9RWZgEQqcDKC51nkaxA8o7UCAJ8rrkGdgMEVJAmkew62WMac4Qr3MGBaAHFC2e",
  "key18": "2nRP5yzf7wyFETkKfgjNnqHyfaGq8NPrSjR8v1vE1cGGmBzUyzapFPKkad1c5VGMfbvnPBLyYRuz2Y5VjgAcSMbg",
  "key19": "34DP5CE6xbhAEHoaYQLM6og4oh1bwPciVeutSs7cx5G1RuUYTc52PGFoGHCeSrJnZUudH6YATQwc6dUauG4HkKwj",
  "key20": "o7EBYMbBW6Xu6PQwmVXAkWcD3T2iHfuaBs1CjbhzaS5RXroZXEFLyeqvuMChzHBwkMCgJoiW3VeCQKtAyAsmReY",
  "key21": "2YYiT6PaLe1bsYHbodLryKn8bVybQKpjMbQ3cGQ8mbca54TYTrwYAFdBZUTvZH8rNKHwHtL9BfZnyHGY2bTZn3vX",
  "key22": "25hCZ1SC2ax5uv8Z8o64iSb6mkFz8iPKigrNf61YHjZxi3Qpr1Wqak5ZwgPRX8pL23zX2fMcbC5aLvxs6RzMqgYv",
  "key23": "2u7VjMWhZE7rMjcH2TNsfzSgUVro7Esfb4RUUEFJZExzsA3XabWy4j2cwLGJvXZDv8VssFM5ogjuHpfggcaG3e6E",
  "key24": "3mnQBFxYM1P5vLRMujF2WDT6JQCnoZbnN6akqHvzE9iacT9iJtwP7fAP9yCoy9hmPTSFUbqmfcVgEFZq5pqwVQyU",
  "key25": "37Pz6NwWwA6zpttaxGfYMJwAUpan24Bc1RCJCnEhfsyo9A4TDw3ttp4osEtZxpgN7Dz6byr3TSNpo3723X4eBRWS",
  "key26": "48fmuh7cwg81S1vQziBF9isvZuWRuSEW8RFAexHoTBeCDoA9HGDysoEBBNjyMixvzsa6N59mff2yWi2YKbs4w8k3",
  "key27": "2fL4H4nrhk8XcyyJ4ooyEb9nB7mc9xcD8X4FPsVCY7y61eTNJv9NvxZRznJLaHuMdZxyCoJKBwA2Cc18JNze9UMU",
  "key28": "1rcyXwydQ4GvutHg1VZqoQzijCvxB9jAsGSGDJ4nCaRGkKvGHf1YyNC9nyDi3XMnZrFj1KBCE1rXeGp5wZYRMVa",
  "key29": "4wZA5QcQRVnxmvj5PRU4YCi5LGvChgzY7eVzLWXaSXVWDf5dxL317694sdrwHpXiQ9m8mAkiv2DXiiQ7ZoY9d7hb",
  "key30": "2CYWCh8eSYB2R4yz5jr485Li7hMvQmCck91hJqaHgn1WMaupDLNYSqPC2WGeo3JdkWDihGUAQKpGHTGZ5NUcFcYU",
  "key31": "2SU74MJeCT1nYLw3ACKqQgVPTeRNwy31KeKMUXjmxqcVU66nXAJ6x1kMkYkc96JhEkqgp7e1a7YGVMLtJdFFtzG9",
  "key32": "5rR9UmamdJ8DCkUVfmCu6ySbixrkJm92Q6PX6B3KW8VEZQsAFm6FxJkEoPbXPdTPdyMNFi5ENwHgvzyb8zvJ6TCU",
  "key33": "3TsZDzh1m8wcgfq1AuixB9nA7onHuMqBbrMuaxsdLWmbaksE3LeGTbwTrpDzp7G2rYKv3eJZkjicM285zjY4y2nG",
  "key34": "3KAjdNMSr89oqGZfNux4w5edYYCnTxSntG1rSH95U8QP8nm6Y7HwUn3fuXEaVDZNtX84u99wrHcob94QvBp4ZxnU",
  "key35": "5F8m6ghCiGTWSW6atsUGD9n1y19DLnswh4ZyrhnR38MLqqCQFqSzAjmMXyHvkKZybAKfgdefB2qHRwwoxdKhsQjo",
  "key36": "3CLmMYgB3s6fSkNUQQ3YbFh5p9KoeaxeAwdNj8ztuk7D1pzU9o65Mb3pB8mUPEQTJWj2Rgck9RwADxZmsbFincus",
  "key37": "fMUnhpn8pPQAR9UNDJxpDZ2k41Kjud6vC6w1zgNxebVZ67L2koNm5xx4jGwE1E73aHeeUFib7u62y6h9Md4d1rj",
  "key38": "66LDgsiTg24Nyhe9GpYkqRoWvfqpjLBzCVEKBNRbEidnfsU5KHnDG7VfZNCNocAju8nAaCQyyn1q3UhLiAnj9HFw",
  "key39": "U75ybdksNQuvfhepEmCyWiEhtCVdbKPupKWj3DwtJZLrDRe1Be5kGmxEVUCYZjM8EJC5icho5qsiXrJC3spv5mq",
  "key40": "45bdBSJozczdjviPEmpAXUU8qsDSEXeQnDwygNJ9rkUDjo8WFiGmzKZHxFei2xm5rNqkC28YSySafYrTJTGvoqP2",
  "key41": "4EKU4NFhwF5wKqkqSgqeHrajk2oAuDn4Mh1dSMZmFzDa9v9DVy35sJiadjgNjfvbhRxkHaLFPXmY4aEa3huEtDAC",
  "key42": "3HexUHcybJz42GH796PbdTbvgiNCSk13nnJ9SknSCfFazkK3DYxrTbrMHYvWHFwBFdC4qVXRQpQHAyY4z37a6hsJ",
  "key43": "5P1qGeajG9y4pj7cbs1KResr2hSey8rnftF6UH6FXGN8AZvnfUNKS5tQabA3rDirLFC7xFWEtwFu9S7TS8jF2Rs",
  "key44": "efveW3KCJBHRQS8q9isZ7EHErrqNJJWv9pVz9QfXKPFD7qtS82zkp7RRTubXKUeKjKMoCyAZGkVYZeWG69426ZB",
  "key45": "4dQKDRsHsR8Z2Zj6dMX7bweYbtf7rAr1y7WKJWBRqsNw19pmWi7k2LqJK21sL5KUoSDupduDNY3VxipNJorDz7o7",
  "key46": "3RZnTkC2J4ZSG1YyL5vhqe6KMKbL6q2uQLcLGKiKqJs3jjhzF2xy93ehzWWiVbrS5KwwCJRDMKCmsqQt2Lis5yGJ",
  "key47": "2YS4EFgQJDqVM8HvJ6jRqE7TWumzNnTH6DP3CirCNYtk5F9cZ99rJU6iScTpEKrtuAZDDiqze2o7a5XtLmsTHk6k"
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
