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
    "5VJ1P8t5agbcgm4HhCXbTua2A2NF31q345Q98QdrRcufZfxjCpdhLy1DwaDLhQXHVjRyuJ5xkgEgQgm1qfuAU5vE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VQey46mzoqJSUX1Bmaq31GB48r4hChmSat6vY7eFehKK4p66xVKdrimQp1NXsE7Xf7YXiZfebZr2amAr4BN8gkH",
  "key1": "42ACT3nPiUWD4SwzFEX9FWCEb8WgqF7LdocSk1vwKsahrnPgYXn75Fac62QhrPAUSRqDqkjNY3odKFTGDq34MoeP",
  "key2": "4QEwvvN6bsz5jWhfgb5WhSr9An3Bcc8pZA2vmmuVavXBYpUJmptoBbn2VALQjUfzsYGxr9GTqeCxXSUYzULYZ9Sh",
  "key3": "36L2ta45wCRiWWZLt2oeSPaNinHna2vhvnQGCS4iz4nC4BXz9SqvvxFPGfJdRi5arWk1othfNFFauRkDp2XCU4Lp",
  "key4": "3TwbazDRqKF3qUbibRWXLD58Bq2vBHPNfHkxdKp57va5YcEXEBVzmsQASxh89H5VDYwtTdgAPC8Rhpsk23dTLkuM",
  "key5": "3CGhbAXJm4t5AZB7dnxWt7yS2HdhaWoCYktcqFR8Kmbk5tGTE7ZSLt59cQaJYngyRULXY69mNJBfi8pMB6BqwMP5",
  "key6": "31aS3Y71covpLD5SqegmBsFcuYdTu9HgBHqYWnHkp66qoKG14rsow79ESnQzaKzk2opGggA8ttxiT5DU1R8mA9bR",
  "key7": "2QN8avh9VAwsVbpremZmZ45mRfxaUgRxdeZfi3Y4fgT99mE7AxeBmXh5SMkSeGZV8yffR7G6fg7aDEFMjzsqkmo4",
  "key8": "3xyGxcCuPqgSw27vs4EL8Sr4XQKnm1N9CTXZwFiBwMvQwtzFZujhmgFHcXU6baXzz7q2NMrMa4zQGL1eB8N7pCSg",
  "key9": "5EC8qn4HLViPaMkiDkrNBYhqiXV4NxNe7RX8EV2GyBb99C9BPdtX1Fdntyk1sSTzdaGhCtivwzB5nq3QZbNr9MZH",
  "key10": "4GYxyQT29QHv1KKHYYqMafi1L2JGogW77qQyxcEECpFKKJSdFSbVpDeySTtEnozZzGU6mrqtU7XznYWnnfi9fP6L",
  "key11": "3CkGPyLNg4cb6xjArgUfG6WKSwcGLCmbdqQx9Y9JDFqQ9ReogJhq3w2siVyMLJARvxncJ79ed4TQuE97digUhpy3",
  "key12": "LXFieNhZpEKfnTZwzNhwegZmi1wm89KQDcZmzNsTMJWFCyHLtH1CBMKNAVvcG3i9BNAKnax6QF2KhL7mA58ercx",
  "key13": "5WBffS98Dj1PcREU81HtPtcLi5MjWaAB72c9tsaKuzs7hCxcFJaHdY8xBP1Gvzk1YtTZnDBDamCz8cNqqpVE5MgB",
  "key14": "3XgJR1fGMsW939vtJfjjDTGzgm8sGzhoWW2dqsuSxX7T8EUbZNLwkagz7HZHNnED7PXZxXYC1xJEvTRhwjz2NcFD",
  "key15": "3ntonUjfudUundxsMQKLrhjQuV8JqYhifygfFR1AexhegSx4Y6r5FRQNTB2yM2MAG6fPuDomdChFotoRtK6UgEmh",
  "key16": "2PR7AJ7g8AH379QeK8dvnD3GRD1rkXgaUEtbThNKF21dCxEEr3MPP2YhpmDQUHaQRHyQVmSqjkNnk8Srj36GVrYr",
  "key17": "4APaXwG9Q6woGWHFtfioXumaaEJV96nPsAMRMjXxpD6rrxreq4ymQuZ1xKRUfHhsFHsyH8ZchQSmn4fmp4YCKMgk",
  "key18": "2U1DoQ7ShQEkN34canVmJwk1WYeXzHvKrNgWqzX2VMMPsd12X24UJQ2Bksv5YEkLZMyQJRCphZTWMtNEaTvYrDC3",
  "key19": "46N4MRKpWC7T2mNxZ9htJz8rqqhRbMgcALr8wsaBwLLxWsidL3CtVP9oEDod1w4eda2FggFpr2brrT7RAqVRLaSj",
  "key20": "2moehdDKpphy17PcNARrLB1u5cbJFWnWr7xw31JHwgzkC6uWQWvDXevkUfmtkpjSSv5VeNF2APJc7Fo54rraWtmC",
  "key21": "4e2mjoXU5tupVzxtGzWbkzLv9iWcvgTGNTcz3r94QmPNaLphvLFBRvy6MREKQAeyEoqYRRLMbQwZ9CEQNpKZGDTo",
  "key22": "PjRq2QeuXtQqXpDuryXNT5iAkxSJeB1mKo9hi2Yi8YTTKmKGGKbwaXKAqgrt575p6uRPQxTf12FDf9f3sxBWXjF",
  "key23": "5ZGxp6nHH2ybKTZhU7UyBTD4yRvZzM3yRxLahxHMkMb9gPJX8gpyi7YnbjiWw867GKkb1wuuHteBHPgXw3RY3L8V",
  "key24": "4931CZh99k4Yf9jcPoBWhzroxd2wMW5EKikBKSaaVQvQTKqNhbXXhiumMcDqWoozNHhEKPdwunQfxE6V1nzbXWN",
  "key25": "jDeT6eG2fhYDzP8NY4a9WQwUFGo6FN8poZJC7LDT2JHhZTvDieKH3E5JiyAU4fViJPooQxE7fpSrosQKeD3PpHd",
  "key26": "2MpdzrPEUgRSP2aWsCBKHK3CqRxdp6CXUBtFRqNofNy3gzgSixTsyn5fcVMNR8fUTndzDcAaQHdTbSJTf8bd4pa7",
  "key27": "3LFfsTyV8kRNStyPa8atzXzQ7JFGDt6ZsUmWPXnCLrv6V2QeXmz3kQmMaXhPH2ztAQmDevphogk8wwDjkYBmTXhQ",
  "key28": "647ijxBKD21fqzRFbaZKny5C3npbYGjsgheVxfAdzNEAcuDEz3jacvL1auoXVmp7uPaz3Jb9o3XGnkonVYV3Fge6",
  "key29": "5oy7AU15UwvHTFr3Lqg3bitmJq92GxFoyNSjPB4rfjr9TPHem4ssodQKLjCvHL6B24ZjysdFCCuNTYhyskxj3Wxz"
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
