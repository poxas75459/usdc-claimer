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
    "3294VJSnMRQYqGyq6sdZwprKRYGKGUBTTWeB3GeNL1d2GCfwyDoc69cDurULTvn7GDCMWV8ZwxKXybJqAboUrrWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o26wAq2N2ZbpJavL7BhrNAtJ5yYBQ54Gayif6FL3qwsXKj4eJ9tE14gwhoi4oQ9P7B9SDbt3SQsC9YbXJPqJZGJ",
  "key1": "2NGhs68bgajMm8k66e3S4NJfWrTRv3Vr8R6117FiQchLHispypmYfRjNsESuga4NF9bp7fUt3zHfTYZ8dhj6WZFo",
  "key2": "4tRSrWEUEFc1puU9PZTAMfWJemzXWwfaeLDKioLZM7FdFqKH1QHU76APRR3D5iSfrBE8fa8CF7D278mNxRB66KPy",
  "key3": "3e5iuvpEveQfB3i82gm3QMFVktf73kASLSZrSEDvBKRjfYVQY81QY1gkn1sudatfpdeNDWCDUfMKGChrEtTmDVxr",
  "key4": "52PyPnDGbDqgCGkjDQ8PurKdeWEjeaXDW4tH2kFdy6qw1YBwFfuAHH4gEmvPDqD2Q1LRouoJtmWDqwWQa5BdiQ2F",
  "key5": "5G5V1qLryJnpBkDTdwfzWepQyFie3atJDmJ7moGZdkRzHGhKo6ADC6hDrHCmMgM15m8zh2aYZzeJcDPyxB3iPbFm",
  "key6": "7DBzZzp7uHr6RufhDLjx4BvrZwj6JkHzHTcDoeWdbnZfbcysEyBQb1L23gBwVQQgpD6Saaf1V7PeKw4Cm2VWbY3",
  "key7": "48o5zjrPahoDkkTQ5sNLjjsn6QyKRNiVwQXoUgGNyFGYMiXYty3pdGnQHsUNTBvVLjaidKycyChoJ3LrozxfjHTb",
  "key8": "3PFDUyarGj1i8P5AcE2qSMpaDuADwfuUSgaWVtmdyvpS92wgTgAHTD9kFqGTebHDzZ16twdqQBsBgWDFhxJwMnaY",
  "key9": "Up8ipxVGUaPB2svKbdktAYyoABQP2DdjFm4RD87r7LoFLsgHhMQuqBxpPxAwRLbQiFZJeGf44n2RR3yg8XMsQXt",
  "key10": "52wENyuTH3cbrfVYpR2hY1R6ZtfRjk8xBeHj2TGyXCwPYayueqE7kQNQyZMjiqg9hR5BUwtDpUThPFv8xMurFo2Y",
  "key11": "8eziS2NYcKzG9X97BZoDgjwJXChDWWiegB27ZHf9YjtubrWEynFezEWr7jhwPoYdNjzWdTGe4KXJnxwyqoV5Epq",
  "key12": "G2Yt1CJEY2o6PNhoKFXhrmjqZVEp3i72BmawK8arLSocaF9aSy6osBfpVifpcMv17GyDj669fW2u9vb6SrdRGiw",
  "key13": "61hKFAN5sGPJpNQUaFd3ScKKDSi3yQoetPoHWpWwCYhjVpNdNw1c3Q5sxyDS711Sy8bkB5M4fxPnp8ZhwEpJifj9",
  "key14": "54eu2JcmBnZUYPWoEaUchkRwDaMK9ZhWriMJm8gXt1KHLTapUgCtaCe9GsVt6yW9XWXWvZiaDmxaUtNyNGLSFot2",
  "key15": "4tju6fNLK3MCtkfV6X8cKdHbEZG35z7XfYrfGeQQFqiti4DgrCbySpU5ArvGavSSissciYCfsoC4TjPmjJWKMP69",
  "key16": "xqUkbwDtLm9jbPUZsV74QGrk2re41ea7yZ6HUb4nBeM6j784obBFLgtMEND9Ys6QA1YAH9mcEUaziQyfAJD8oCD",
  "key17": "3xE3xu4WkACy6pUcmnP7CyuJDp9E4hqTuseKN26fg1TY3WX8CySBRD5hSG3Y2ZsFNNUbopygFerYxPrbk8qF4kgV",
  "key18": "2ikgXFuc1CYxskZufKsuV6ZLzFbNtXqN7a1swDCcfr2gN6cjwjcjriVGWkr9yxsowyKD5M6AB3KQGcRt87cpr5eq",
  "key19": "2xdQLsaFXxwDYUCPCF8ZLYGffnE4FymTjTEyfKGwFMiDP6HiR1S2thqZdrd1T9UboRdPU5T39wcSqBkGNNfm4W6G",
  "key20": "5VCzZtvNJmpjmsy13YE3dza9y7vNH8s5Lwxx9gE6NGYSWEK7dcDnDxd7TAuN8yJnNvyZL5zs7V59VCxy6ztkDGVS",
  "key21": "2aSJnfQSZQuYg1B4D8oAwvLcbPmkGXuy6Tc691euoqP9Ux6K7si8am56JHEGXSjsgfosWqVcqNARz8MTSec7P2Wp",
  "key22": "4WxXDBzjb8YzaNN5i3BnXVCDZvswVmZLocgJvhfb12xWsEq7Zoq89vvMweCYHaUZvVYRngvMkgzwxXqKpEfE4NCZ",
  "key23": "2zNK5HDcaVoQpWWWVpxrWVBCprCSX2wJsMHrZqMpoWvo3ESkGu36JPKxmFaYhzSFoA6RW7iHsF8YEDHDXmbKNeXF",
  "key24": "2kjVA5TRQBaMpetbmwT7cTx6ZMweNftnAxZSThZwU1JX5Pq1TZos1h2X1HXfeTd6GrHCu4pN6VFBSX3U6V6Q4PAj",
  "key25": "5TzdWc8D2yyYsBK4g9T4uCv3WQLDpnvmoHAA52GxY8bysEeJuUR6guNusc74GxkrtyAPYk6JzoucokbBDVqybNsx",
  "key26": "35EEVc6SuskZHHdz25ws7YzqqgXLYfCYLauQsm6nD1DQn6maSoSMMcS7WULJqZHSLY36pvfpmo8UeU2HsnhtZpGV",
  "key27": "4eJVApkuc5qMUFJVjaHxz5beZxg6KJ8ByAUtATQZSVqb2qrWj4CbvAAzcKqptinx1bEiM8psSNN28vrXJLbUv7oG",
  "key28": "2LZ12MvqWM6tu41izifTdy2frU1Y9g2Pabs6B6mhEAMLqM7NhpmT76bKd6XWuPU1NepGAJGWYNGL18Tt1R2AAprE",
  "key29": "2fTHupLJsW9bHKWsoJ5ndhU2BtRm6V8Ce7sE9h5CTEP5wU45rkUfDQ4AUPLkH5geZA88KV1oSSQU77LVsfFMxp1X",
  "key30": "45A3rjk41VAzcDVk5SsjZ3XwSBTyE8MgjBTFKGVGFcJzF1o184pBv972u2E1z1mRv4EdunHXDZUCjTXHs7j5ewGF",
  "key31": "46kbmUkjZwGNa2bDszwWp55XjNvW8GHMAoEtAJyLLDWF7FM9UrR6K2zjAN5XskpKoejc5C9wfjT5eUAB76VPhF3Q",
  "key32": "2g9UyM2gxSAb9xqw6MCAPn8rYjy8QZA4SwnwyXeuTeT6sVJmfCoLcmmab2EfCKnvjwdPpiNzkeeJtinpHfn86hgu",
  "key33": "5eLzXMJfP8ZZsE6Ngo4kX24YyKqmLbdQigPf7Y7utGjM6tBYVcZyYGNfRgVsiaAa6Nvha415ZuoRNXza7a1zxR6B",
  "key34": "VkmpwnsqdYvbHg8GJj1qfQMzk2TTCP67Tr7VE1Z4YXWUqy5UD1zJHgvXXKSKvamCpSJd47E28ymAzKLRAGoHStN",
  "key35": "QouhopPpbAU4Vm5RtvUuXjTwnXXjwSwU24sjL1eFkHbEvUFZxQMnQDFkkSBYKviVxbVnwApk9XpgQpPKw4fX7ah",
  "key36": "7zVTuwQMHuPkBHHHkgqgXKPB6q3wgjP9RipDrU2DiRYT76bRgJ7pFz6urgMPZaWhX5rTM9VtYFiYG5TkKF4kPW3",
  "key37": "3UgFDF6FKimBr9YYggrhwuakjaWqeqW2KoWkQxpF6rJ6dm5qtKHt27k3DAF3EgKPfVGDmKxWYRsd4mM1s59SmD1V",
  "key38": "R181QRaf7oPqVCMxv2RHhUkgPQ2XePR8ECx9uuMFmjhjZ5KU3F2cC6aboNdQhrE35bmAMaffs6WcCG9NkLQrsTo",
  "key39": "21Bic6FDAre1pYzUxMg6FAb4XkWZno4ANM1ohXN25zrhfFeyKp2oY1PKHxtS97qXYnW1Znk2xhXz9sJHTTWkps99"
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
