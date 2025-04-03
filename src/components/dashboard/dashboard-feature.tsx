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
    "3TMqLM8YHnaVzpN8Nh3M73kCpyozXgMpYc9AMtcPdUY6VJ2KsYBpADu6MfBoMsE2FMyYcFg9QrTLgGu7rdjBRaQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q3GNTbu9GXQJBPk4YnsR7GcMjiUQNrGMPChL6fTXoHL6ybtBiCckVFRUkoDav3nSTbgXT7UMyXS22ntYy4DgeYV",
  "key1": "3f8bDyqiHrEipDpVUcsh1nfrPFmTQFExh3tU7icJvVCFzeDCN4jrLrpUpPDH8joqUpqXZAeCzvxMXYPbyEPUzAvG",
  "key2": "3HWMyD32wt7KiPeiwaiC4y3eBHq8D2LwvukYbA1fW28xjQcZqigyJMCP2aZViUo6D3XDpZQ73t51KWJvZ3WADZL",
  "key3": "4S2vpFCHDynHKPp8Y3x6DQkABTiyZo81xo3Lvpt7jkX2aHb7r7D674LLKTHAV63NMjHsdodHK5gc7FDXY1opCUVu",
  "key4": "2NSNQHTXdRy1Pye239t41zsPMhgWMscnL1kW57vHSSPBjDngvJewdc5Jqu4phPzQ77ffrwyaxmoSqQ8F1R86ZGBx",
  "key5": "4RsGhP88xvd7yhuVy9hFSaYZcGWp5RUEqHdYFkJTxfWDjCwT5RAN7zmRWTYtKi3xknGv7Z61k5U3N2MkPBZXtbba",
  "key6": "2G8eCVJh1c1HEaJwtfZq3wKsdAfHtghb1qvKyZQJKKnWXpUX4uUE8c3vt6ktU5bfMRLty9aoTYm73aynAbSu5Rtn",
  "key7": "2itkkdwSKvB31kvjfP2kPZzreH4u2UWMbhcXELwKdsr1b1jGuNMotcfSaz17cina7HXqZiztFQ5p826QE6kbJBE1",
  "key8": "3YLaj6m5kQHKRy1VHhDtG5CYh8XvwRj2BVSPtCaSZ9hyEZ3WJkj8iEsmjHw5Vr3GdYymBBVKspp7k3iBruhK3npH",
  "key9": "5zQ4B4Pa3HoY19pqV2boFmzPnUqnJD6xRfKfDAF4Eb9HthkmgNrWZ11yB6bANYtEk6nAY3439U1S57rKw4YQeR4P",
  "key10": "3VADiZDWq7VphsDaKnJaZNjcJaUkSyshuEuD6kBNQhvWeBggbXikhAFuZ7JDBoWKFjDVxkJH2uK32Sfm7NtRRHfz",
  "key11": "66AmZPqGE8Zsdza6QaiTgehjQkEqPZx8FpGkRBiWxT6cNwRe3p4NGoM6jhFMajTgnf3LQPCNTwporS55W3arDunU",
  "key12": "62MvT7BEpk5mN3WuWF71QfV9ytjuzLnXijtHpZv7Xeg81eKQLB54UvY5khqdUBsJoLkqs4r6LnAEcErzpprpKwYk",
  "key13": "4XrtniHFrpTmj7r9zkVAjtBWgxaQdj7gw5jmyHjVMWBByMn9bRw5hH6sTW4w9wWKqWRYzVcPLw8Jf9WkE9RoZSHm",
  "key14": "4na7B269JA54cmYMWhexczY7nAWsTV4UQNkHwZi4Ff5YnPBWNA4TxJvnvrXHDyJ3YfHJqMX8tGPMciYhX1GRP2e",
  "key15": "26S3bUNKnDgkg11YcQppJraQLV7XxXHhjgRCh8qxR4s92kHhqqqfvwuCcWkVqzPFHftKiuLfAchWjGJQ7nKr8kwi",
  "key16": "KUEjZGqfobGKG1c3KZh22YfB7CWW9Z1JQPEoUp4QFWWK9BEnBfVFirCAg4tquVBxVgNcyxioqaQfYJvtDzBDJma",
  "key17": "3g7yr6ubK2vgi6MnA8cbCju97frj7G8SjxbnMCzBK5qaUxGstB9ZrktkLZjKCMWGBoiFqVVfoSHx4JjUpX3RCzLg",
  "key18": "ML6gNvLU9yhGXJ3asggbC9hJ4CbyCgYsrVrAJgb48eozHzvo3YMtKLghrX7SmBW42TizULWjNhdhVF387zVB2Ra",
  "key19": "2b7EF9j3pAcjuy9GB4bouLKuEN6g6RiczpUgBmpFwt8K9jaWuQ6TZHzH4FwcJVnttxAzC3LW92xhWd1kgv7cUUMS",
  "key20": "2jhjoU4JJr4XKUeyymEAUiBn28BfwdANfWKGBRcYsqKWX68Ee2r7kV3cToBP63vrYF1zsgxKrmbNZq2irJiSkfuS",
  "key21": "3V1fxe795pQ3zE6nFYu6h2rvEPfU1k6q1deG7sNmwHTvDszjodQdRs4dcfnyKDhtvXCxNB5dsTbZvUKkB3AWcpo",
  "key22": "3CeMM96eYWv46TyPqirA4dFfLJECtW26q32xVRePoFiwoiSg9S2M7L7eh1boCX9w6vtvpqkvBftzA4bPhLZcV6BJ",
  "key23": "bZTsZ9wjRsWBQCRYRtNkt1shskTkaFtoiwze5NdQCdbtaAEzpHh86TGbrSNXDnUGQ2AerwxRqnEidrHKt6GrGrf",
  "key24": "Trd1kFFX2mudGVFQn8m4vAxqsy4chUsQmu383LqxwinxJUV2KXwGpT9HYaRMUwEcHnThu7xEy8PRb1JWNKH69oS",
  "key25": "iTLvTZ4U8d8x9ouoGsnVpz6zGUUauzMZm4yfwjq6wjFjsSYteApNLetFGUeJtBdWT2qLgmBN11edWKvvUC8rN5S",
  "key26": "uFshKU7uS485Y5nzBgq8MHBdjQEBYWT1wAJ8y53NcoAiDubhXAV6gPfNFSqqBWb69r7SXCkKwTWgWNN9Q92Wcdz",
  "key27": "5LBfaFwtY3qiCER5PiZVtWpuJs3ceBxjmeKo5Eygqo8uactV9TjzqLJbBraF7qxXJFnrfug1pLDar7WwJ47MTnDB",
  "key28": "2DYTxMq7nyqYFmzq1zRaWKv413QcAwKFYSB158cxBa2LpdZt3tsy6k2ieTzMT89bQf69nHdvterz5Lq1K36Ly6wx",
  "key29": "4HuTCvPYchZTeZc9YPf75fLvhAGAUVnJAH2zE2Kfez3XYZ98VVA8sz77GZLZ1ExJzWU8uURPZ31aooaTvWAhfRU3",
  "key30": "yykMaLuDeFUbDZT76T7UZ4kxXLQNNk7cYug8MZsvPxy687DgmJbRxo3FPZ4iAnbRsYFpFzRakotx98PGtgMJNTg",
  "key31": "3BnnLdnottQpMMYQySD99k3Ue6xSPZGziNWYPSH5WoJoFTax7VX1F63vCBBAUzsK5zCHbtTPScJeBQDumLhtoJxG",
  "key32": "ztpb6nxeVq7BoPfNFKfv7EzgpYvvKkwUYc7qqT3oiGqffs6uPdUx6nh58XTsmE2PEPvKTQZzSgp3sxfdu8j2dwN",
  "key33": "26F5MFyX643rQAjJuyFCCJhsjaDsiSazW8gZhXjbRKxTUwuu11KAfVyCJFALGLkfbYGPNMZZdgDpTLtTHpdysfqR",
  "key34": "zkyNZaNfkaddUqATnTWZ5Q5yuML76T2b4ooo1hXkNmRX3igPadxuysbbiXEKsj4UWHP5AwwAdPLYABWDy5rH3yr",
  "key35": "3qSsFTPpjzf2fhfjyX9YaEnodW9UGgjVvZcQGG9tYmb7rWGGMkdiAk7HkjCSAQQs18Wkdin3Y2kRzPahaXezVzkC",
  "key36": "3mWju3Ar1a5ar9NywXwn1f4WLcxMBQp8WQqGsQCSBsY9WS3MDxYbf8jm3S5WryLqWHTNEFGpv3e6NzXR9osxxbzJ",
  "key37": "4B4j49mhmibRe9nJwVgjQoiND6Hk2yg4wxqN3fBqsxNFEN2S4hvAE5iP6WmrcNzXaQPBxQo5yf7qZF1UPyHixBZj",
  "key38": "4JQdUoJXycbEbCEUsk6UjZBXXDNbWkcctKzn1diezS8qb3h5775cSQUC8ovcm2Yk5oVDyN1Ju3shhr4kDmnsFr9J",
  "key39": "mVBSKnDhGFUMU1pnACA58bsKx2ewKPTcmhFA7o2NKn2S4FmxPFnSJnoABjaiP5JzDMCzvCfUy47rREf1cePbSTP",
  "key40": "4byEP2DNi1ZTYRxqoKGax8b2MopkZXGVt2Hf8VGJWpNQytfQy9guuRQ43veAoJd4BjJXQqdnyZqmJzWtassAMZcc",
  "key41": "pjaVn2McNZQH9ZZ9A6cLmD9CFuPiULpzLADwc3qV41xdrVhh3HM3VwDeFjkzgzS3JG2xt1pBEFbNoygKhHKxkac",
  "key42": "46LHmXmdbJf1Q3iPSig8BUb7dEfm3oKUFiN4yuytyoicWCLjJ5eSCA7B5hSbsfh9DFQq9s4LUM93Y5aqu9Hys7dg",
  "key43": "DvN6sjLH4z9cgZWANWu4iMkTJYHYRpDifA55y1X2Hp8owFJh7M99PPjqvAbAqzK9dBvkStTQfrv1uNHSgzJNuUh",
  "key44": "2wtg1BamY1nrETEPMaQDTh8mNeiaiSVutvE67kUK5KDzsTHD4UdNSr841umyAbFtvstKq5A4tJvigbMeqxpD7WDX",
  "key45": "2PKDnZs16M6MdAmFYEvnhzHUZsbvCK9bux82PJPsahNBF6Hd32bwi7JhzUXTngGEPhhwsRvfXJyNZWdpHrj3bRNm",
  "key46": "3hpjmxcwtsN1sfm9eVCUU3BWeEEkF6yHVcnnFce9GeL9CBTLn27tUzy57E2ZMe3aQCuoVSGzHjgLnCs3Fchbz3Ef"
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
