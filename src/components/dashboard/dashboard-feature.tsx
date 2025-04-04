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
    "YpTrZF7FRBNYuMZeM6XEPoKHdFgK1BBFnsgN6x57xFdmjWsaCht2ajseqvcPthJqVKAveofohdvniv8qFVFXye5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sgaruWLieM6fusF52TNFSZ48XkYKTb49uenAhqnQZrdiisrK6FpGjYiBMMJtA6PjSEgpp4bnyKLSHAPcsCaLoEB",
  "key1": "5Dj2H7B8ugZuPUWa8KpctnEA9NB8xAcvxYM1dQgJy2fgFogMMWztiXTEmSi3yNYWLuH3Bx2KAZK2hto2w9jmQtBM",
  "key2": "5kN29gCQeT4fCwoUotf7yH6wy29YNFpaAJ6VP8ZZHo1Pc8E6yeqZsT99h7cNfh1Y189Znz2LuDuSGYD49TA93UMp",
  "key3": "341HzXKq9sqdGTmLevqyNsPmrYzCNV5u7NBRSpDyRsVnJNMreLjYaEfTVR8QU9ogJXpdpZWf4omdof7dG3SmDQim",
  "key4": "62Ls4US9c8WKR4sMoudbETFi4bs44srE9xik6K3dNFGzUSyEB4ySTN9FT5QnFYaGuqCvj52TRsp3bSHxXUfr7hC7",
  "key5": "32ae54UND5RZLcXZQySzUDxv6HL4EM5kdzKyAg516nEtmwrCQ4fuYajzmmvXNg1FWnKbRwAEsrDWExLxPkZKRcui",
  "key6": "48mJgbeMquoxiL5jfHpZN5oBh38bob7jjyApUthYSWZth6smRi8C3RkNvMyTJDvxhyqUTHCf7RDZAs87S5hRVgDB",
  "key7": "3ZjoKBxZMVm5568XmbGHbgNGEjRCfgtWhKjKDP8dVr6SxwgTQv4TuseSbkCqoQx3wfmXt53cvz3mB6CHNLirMdsW",
  "key8": "pX6o1MfUpvcsGqNwUCY4ChWjRPpxSmtuiybXRKyUJdADYuwBT2LP5pyA18yGNLZZbbBJJ3FSqSP2gqyTcCxGB6s",
  "key9": "4pDewQzDX5udVYQwzMNhkPux6GHXUedZERUBnUfczyAikcAnyuwKksbeH3a4Aev9XxFYWjLsyRB2ur9d2PujT7YJ",
  "key10": "43UQAAGMwyHyQ6fsZndH5BChR2QoBGuNohDNq9W4wDUqDY8GzLkfXc2g22RhfudJzCurQ9MP7rd8zds1Pxhip5Rj",
  "key11": "3kVT1CsG6HrwfjWQcp3HAesF1Fb4W5Xpbr8orFKiunVqehHKUUqvWwe3MEWmE7VdofpRmFjtRCVbjDkXV411FeBP",
  "key12": "tcun4paXdA8Y9SwFs7AnTNMWjzDXcoLmgirT4M9diHcG3uhed7THE9KD1J3sEpQKQGaFohiwaD33dkE4nLFQM8v",
  "key13": "595ip3fNfXa1m7njsBFoo69gWJMUNSRMJu9pzukXgQQBpFjneZ1qfu9Lg6wed7T8mCgksCzA1osDhJZpSs6Yf7JA",
  "key14": "3XxTofBjfp7Tqjtt4WcF3R5fdMAj2bKbZAwPMbQtCPd73tN5UgpdPN8z2HPJFw7NEhP32R4U7KXY8VPZWBZF6WmF",
  "key15": "5ss6w6WwcjpGfqXXCcB54q2f9UPHUuHEuFwJwVhhZozQEmC61ydj8EpFaxsZ2Zt1fJDjMiAQz2W4axNxyi1vPmca",
  "key16": "5LpVcgtcFs6MYPZrZ5uceyfqgCgu8WnPHCcyijZCgjKNKKuyTTxMyddzAJ9fKc7JtSdSX7wSiPuGLbja91JLUd3n",
  "key17": "4ruSrNT8aTk2o78GPhkVg472adf2Qv7uRqxpY9oVLkny9n1SSNyahJ4n8snyzay87fvKpjKT1MzCxMsbh3MBPngS",
  "key18": "5Bn86iQFkYR8xc49t4TKpxBSDbmix8tmFhE1bYnyPVibUwmtqCfNQs53c1R6vseM11bLRNsDiLtsSexi6ecZTaAg",
  "key19": "5o4A2pv91DZXy9sWtGqFDJpGuzjP6C25ZUSBCiwfAQpgkkxmwhgTSVE7awbd95bJcwcLR8S4HySuBK6ZSZCNLw2d",
  "key20": "5aRLNm4tvXNDvkaBG73XCEUbEVhETV31EoqiQFJhKQJYyVbBPhhCntpQmwyX2RiadChabhvZ3y3e9yMrzjXTCPmU",
  "key21": "2F3FKUqDkCQ6itAszn7QE6LoPRrt5DTn3ab5tRqApsxScL9YBAdsziQYp4LSUDwnP1wh8AWDPvg4xjn5VGuWioGW",
  "key22": "5HLnszQRjuLyhhCnLF7sYZ8G4bXJjDXaN2ktD1qVF2nvVMA4qSxkc2MgGKoewPjHcjCHqfM8Cye39XuyfVxw3MRL",
  "key23": "NBSPLD2qQsdiGsHyALJyfMrxfg1m3hceymCMTPNvjjhn2uUkfxDiYKBRMwCQKHQPAYm1yPwLnYkNncTVKYsrFkV",
  "key24": "2QNgjhtqqewnm2dhsRyyYGQqrPx5i6FfjLwPjsRD4ggoKvpJKkeasaTcUETToRPUqpBy7uVXFEAZpResaWf35bnq",
  "key25": "47vHAMRy7Y1uixkPM9N1khkqC7vUbsTZmLFRSxftAEUNr4wQ2b3U4n4WuxK1UCJxkJqcAJcDSYeqBGGK9Te6gs5R",
  "key26": "2ztKekQnAeB1ULjw3oTydq1x797k64TaDUGQxY79EwCaCDrB6nsHRvf7zCSUjWfJsGqCMxLhzBppQUpoTbBo7fMk",
  "key27": "3ffxDV6HNBjUeBku6uDBZnypmXhfQ4iJ2EeeGZhU3kMee6imxiM89oQxFM8Ybx6n2WSPGQV9JYUzRXNYsY1WXp4e",
  "key28": "33WcvMidf1qerKcQe2i5FugjpzYP8EsfVk7bNJ7ektcSFpFTXWu2d5s7pmuHUdnkrH5aU5KrFj3YkcuHuGL6R4ru",
  "key29": "mUxQqDXVz3LGtWAoZasNuMK3swKYphByFeqhygpczBQR5ueyD7yvFgVPbVpBKLcaJTNGEYb7Tc9wHZxxNUrqCeM",
  "key30": "63rdMnCFjRrd2atofcHZz7aM1ppcV8kdaq5eTnK6prsMyM7Uu3wPRpqvtYum1qXxRvsXx7EwJBrf9g8ME5wvu55s",
  "key31": "B3vK8QSC6HLYfx7AgLW4iik5Qj4xp5STxyhYfFn1wtP9LEX9U6HoiJ2cdeBfzE9PzDoZUd7p9mYF3QJjYwbopF3"
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
