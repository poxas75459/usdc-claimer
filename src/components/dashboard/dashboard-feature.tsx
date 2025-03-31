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
    "3VU55JrDs5BrnCxPuoCvSAYX42x7oCECuBaHqiyX5Jho4dE7x7NqshdhFw2RQGQZ4YXNLRWWyt2EJpWX5cRKZA5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iXPuXuywZfbUzK2SMis6bWC2AqJVYyQCngSaMRroonBCz3JSzHX9JT1MCvCrqezPMZgVGrfHnbttqf43Q2u9HSR",
  "key1": "3EALDYGufoVGptC2fjYMNPXcfmx15fmtbG2sM8Gfjoqa5yqPesGBEC5K3TpUybnpki34Mvg6W1BojvYqJTGJJ5Eo",
  "key2": "5Lp1VQx2JY5HaLUKBrby52rez3gpGpmqWazrAJkmpsGwK8uGx5t4n785tzQWRm2xiEExQZPiaoz1buCCVZNNGBdQ",
  "key3": "51gCDKxCRd3K2CYzUg2RSd1LDKpWp9NQjaL7ciJz1ftSXWExpfBkw6jfyeTuGGmLMg6GCtmky74zeYr15jhQWh6R",
  "key4": "ARJMufN5rjFarpY2W6wr44RsepQZ9uEhkyJTVVT95g8PfQBDaqRLR63zkCaZrBecKWorQhx2LQRpQHwitdMyXYz",
  "key5": "61qsfMRTnaoH3bDfsVWpjzpsS8U7Cj1nwTmNJ52CfLNYrmURjhqEbPJRAkop1bj8st5zDGcefBad59K3X5ycM1F",
  "key6": "2cFwfHhbQtbC3eXcHYGNEF33k67KQbjHfJhkFZirY9pyuj5wX46KTJroqSfHZ9hFWZHeR3SJ1pRfZmb3d13PSaVn",
  "key7": "4WmDUj6p6Cgng8FcXvrK4KNVSmUkfZGNGB5pYFeMNkw8i8vtMhnY2Z1qf4r845MVCytr9yHjQEVME4Qzq4VNe81R",
  "key8": "2LgzZ2nrNryNXqvFi3cN1PPV8yxQbD4QQeJ9sWbbWfMGWNoLpYavtRfUfLWdA2vQmiraChNMDEEs8q6pbS5eNqTJ",
  "key9": "4ab6Xyf57r7ARFD9KqSmwD6wwQitRu8WHWDNdfv38jZMCp7PtH23FZmwvsXiCmdfQpbKyeud83KnpCX2MK8H2SVe",
  "key10": "5DqB3Bmm1UiHRTN5VQca9Wa32GT7mn9cksmepmB3cqX4G9rKkyJZrspoZkEZRAA7ZB7V78n8uEHjqcsAnM2c4tmN",
  "key11": "3Mc1fpx4apZupgzSgQR5isSjepQU5nfPUaNPCnuZHQNACZAwizKaxdjogXvHCtKWhYaEXFjvwb7hDDTY6QPtVddG",
  "key12": "5QV9FWQtKJvo6JEK8uQdoHj1UVRuH6J7TG8vraZBRsKxJaVnd9LiJ7UVYhPyJk1T3EMd7EvyDkS6PwspZbkrS1ss",
  "key13": "61xHtXCZeGfTTW1sbNBT3biwN758yHoJRMJwUyjXgnqrWKPbiErhPtuybkkDsFiYgYDSCnGoTRtR5dLeKkRr7qn8",
  "key14": "3P7jQTBaznTF5J6dDc8JCLxN7KxA9nk7fTWSBdUzh6kFSKZshrbAyznc4Eua7tGedZHhKJfUH6oY4URbFEEo9ZHa",
  "key15": "5WYgVB26FvicrVUiwfnpEgemMVyu18ZPAuuMyveDeqQV6N9z73VT1xrivbdYSme9EkXNyGBbUpKEH6Y1q966ezzt",
  "key16": "4mJqykWtG7FDgXJN592qeeKdgb6MDv2wkH7j57Ny8P3uLE4xAs5PAYjs5LVCCCTq89fSsmHcTkGrk86VNV6uPKYm",
  "key17": "24FmHWW7dF5QG9ze1Gi9y9Z5ajufcm4iHG6trrxpuunHWonH8oPxWiH2QT2W1mBTQBBS1E5Em74Pfp9ECiR9aRd3",
  "key18": "8Qhh94AmzrK7NQDJpeFoNYd64wZSGttqBuHBAEqc27DqQJHcZegSKXsCAgGpVfYqmsRr3BZtuLbeBs1MFKa676E",
  "key19": "3GASyoA6HPuwdbkd8on5QcE6QCo3A9VDuHMwPAxEwE3jkym7L7bNMe3hyFSXSYRvhn1mZjD6yYVJKm3b5PXhQMw3",
  "key20": "2dkFDwNVc9rUnPLGtLsNhwQfs15ozsL6Yubm3pCtbFdjgHzged8LiozdsE2DAAcDjco6p2ECDZ8z7SkhkPpdvgiX",
  "key21": "22apAEHDpcTDrqqyEEmBPXVsZ9DqFCuyTUGT3caecsos1ck4g8a1ouvDgrRM2j8zWBFcGsbo9tqjVJCg76aWBFyg",
  "key22": "5iKYqRdPk4AMbDsmupe6p1JN8LBDhDCGVrxJFovZyPc5YnmN9ciZAikftvaZ1aVwYFEUF4jtxmgHDVANoFLtmpS8",
  "key23": "2FVcSKA7jQf5vxN9sLShesdTnF1XBcGnvtzdMVjtQzq9ZHUiuuTSp6xwu562gVo7p9nzjRyVD4oR6FbkMfAYL7yJ",
  "key24": "uKC3gkP2GRboKfqkMtxfpfugNwBzqjgwHAaGr6voxANWKWnozdod7hWLm8XcYcuMwMQ6fcWDpcPRmzPBsCXseh7",
  "key25": "3rM6bwy9tJbTgcqrWpxwZNYyzAkSJ3jiCdm2f3s3CMQfcsX59rtQJLb29gLJMKMFn5RLGedEJNmoHxaEnS43vVD",
  "key26": "2dgyWXVow9WMMtpV7aXLkWECuV8drCcjFwEBabG5yJZRnLtLVcz9veQmCAupxEZ3FtQVRGLpCPQV4R79dG7iKma",
  "key27": "67Ty39Vgdp2Vuvx8RzR1N6NeTTgo94D7ySX9X18THUZESmhhdzYgzAthcDCUh7w2FMK7Zykya7Y44vViut6qd1Wv",
  "key28": "3iokbLTu4bT6QJEZYSTsaH4k7CuVcWWimnBYTNLWxTGNaqwrKdRNpxSqU4UdsJCNP2wMy5L8B8BNpVQZ87GJMXS7",
  "key29": "381xrURNba8ag2vZ8mcoaHeEhpfVqHmLghERcBfxXpKAjbhJWXDhiNpE84GcxgW54F8gdo3ycLFdSczirDu6RM9q",
  "key30": "2hqnL9RKJtENyRK8vBZuShxKKYuNigpsyqDxxr6TDxtMRfaLfKW8DRa38yJMpindLKYkFKPBt3AuKnbP48fmPG6y",
  "key31": "UhWjEyMn2n4bg5U8GvYFnK5MzYCpFxTNq3xJSUEyyFLgXYWUo9Xf8sCdAApKacziE4zZRnVuojqr423joNJjGBY",
  "key32": "2K4XnugWjZVn9jV7zSirwmD1G6Fye4infXpRci8QLCFq8xEEKiwfraQ1289zuEgWKC6ggg4tZz5QyUieve9g3Arq",
  "key33": "66AbC6vD5M9ZFdHqcuzUmDvDVrFYTbXgeW1yMmWzTHrzPvbcBe7RU59m4WipnBzAHv7hwzQ6TPr7sGF4vACACKB7",
  "key34": "64cAe8K2Wn9i9P7pRndLgJcq2aUDr5u2SDu7T14JEmkvXKtEYTugcAFcA9sHWUy4bnLLmT8wsgQLD6bJ36E3XvPo"
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
