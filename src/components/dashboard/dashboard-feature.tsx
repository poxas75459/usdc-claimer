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
    "2nkKaEhS1VGYvpuhYVSaEBFSF8o7CiCTgGPzPBwFkzK4Ba1nfL8R4K2jRcWGbvkNKqUikmVe8Yh1UuiDPAPZhWiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T2mWStrkrH84KG2e6zLw3BXRcupPnmvxz9fwdQ2WijWVjcGKQBXsteTJp4XrSxJxXaPVxno2PUeVGAuR6ceuZ68",
  "key1": "4vQ5SpD3PYD25Mfban2hNDKhou6k3oszprvaNdo49uWkYVNnEBsNKPw9HjwoSdH5GHZJ7MvFoKPbzsap9AxLB8KA",
  "key2": "3amtGjq7htWRDLi1XiYMomVvdQvDZDg95U9X31yxj8Un48M2cmy7KDusatRVyfUDeDdG1f3ujNGPupq9MPw5Kj42",
  "key3": "2af2GKQDW9r2XG6tACRP9cpBCCoP9wUJtxbjisBdcbUwQoBoJAeFVpZ9h9WApf2W6hQjCb5TQpGmSKPvTyvAUGMm",
  "key4": "4ia3MkEQK92EYHwbYmEor63Dwi5V2zgndzChgnpfUPNFcKMizSDYtt8jPRAhFE4E8nH3cW5oVVCFd8pf1yjETUYv",
  "key5": "sQtANjETg834KD6CvaBQqqNvocRyfuCLtKAREVUcJMS7rtqr3qansBELYd5fRA2pTnQk8PFfyUperAZ5QHvUTCT",
  "key6": "2oZH9aGL2m3pFFq1uDgrJKaBfAUiB6XMCdsgo1WrHo6TaDDBtzZ4vwDXm1KrCRMv3gLhQN6wDqnDMPuaU4E9pyzU",
  "key7": "2Gix1yy4oZ4iXFAJCEUtZ9jWbdrKaLPUigdTd2guDwMGeDzmVx7bLVYH2yc4Y2b1HyfxB77RRExjbSneb7addSrW",
  "key8": "5MYyLfG6tpMiaHGAZToGEXcLTUffb7Z2zfAuQJvDFbwYHsHnkBEZbTc4fCVTvr6YSrzHYBMwFkUokYzpVoEWaHQb",
  "key9": "5gHzUP61JmRDHqvT8bqn3DwPhQHrpL72zNGJTxrmyNrQV8iL7JYxFXmyhoEY7aA8gp5ii7Lq8Cyn41E6XKyj4hsb",
  "key10": "H7WbU7TQeReRfscieeebo1hrJZe79w3QHd4rz9ZCAMyiUjFEoJgpALmqZd5QPwitB2gSMtH3PkhhyRtr5YCtADi",
  "key11": "3cAZ2nQcwk4g2bQM3qYssH2m2Sm6s7Qx7jx3W2qEhG73HSoFgndDFJCs7sCwSo42GZaSzWt9kucrUJTGK1EpBoKZ",
  "key12": "4ELUTJnJZQiWc1yAkuP8Pd5tMqwEYwa7xd3Q1E61EaEXqhSpVFyDPDA7y8YwCfFgZaaVNUDUkNEAG4fM8Ha41ExQ",
  "key13": "xVfEsFgoAH9fgqcKd6frfdkkhcR9Rm3AdVHWjpPS7YkpeSuH9bZovEHcfEesodV7jJsXPvL7HJrzU5Q3jUaRT3u",
  "key14": "64UVh3jncWQ6EiV8Av49FQtf38doyyozFPMqXENa2zeYPYo7nFAHUNhWCczCka5bQ45gNtd3X9QpGG4CcTPEr5ui",
  "key15": "37turRSGj2YP3Gxxg5yv2uAWv649tMUwrEdofkk7LJz8m6p5fivohviPY7f9eJcarjsYv6rEGoJgUhAyNyKda3ty",
  "key16": "3ZykCLs9o9uFjEekqkumjtiuBRf4BikyGhuuGdP4h7rXQLyVhYwSEGqzWq49MxFWnsVWKonuzskV3XcjMCV5XQrb",
  "key17": "5TcNGM6YhFewGT5Gd82XMFWfUo2CDVWtXAsevc8CmCwSJEYQ1khyyUA3384CKF4U8PfC11NaYTnBz2oQZ4V4SnBG",
  "key18": "xrnDyqck6pofU9ZAs17TYKvB2C62mvy3xDaH7NYwq7YZqry84HRmoQnAXtbaMrJF2JVymnKYm16x5i3NfS1qHC3",
  "key19": "4k6pt64amhuK9aoHmFyad8BhLfeSfaqA89EAfRR6MhxemPS5iQejU85vcAaZQboRvRVcaX67fSpyg8VK8PbBcc8F",
  "key20": "4R5nSSH1aGgZpN9xZaUehLwpHk7s9siFsTUUpg55jFFfa69yTVuna3FWiyiV5G7wg6UHd1PJth5iMrRm6DfHkph1",
  "key21": "5ynpeUXJ6eXWcV8PDnmArVckL4DFAXvpug9UsBGzqoA8fMzqdzw8xyZt4SJmBnLPiYeWZoRxkkUdWwNBEwpFCnay",
  "key22": "5ottSC9Mrpwju77bonHo5U1ih2rh2dDoLsEekw56Myp6GRvTKmRVSKvhAaDWiEmZhCBAVQkVtx2XvJDFtviX9vjn",
  "key23": "2UEVumTN8gAhxUQaikyzrcuKN3m5tzrWcxUEJANdLJjbBajHV9RYnyKWUt43X3vPMpCgdUryq7Sbt5n6QhhhEzif",
  "key24": "D7bAPUpfqjYuScGWB5VphC4GGmzNpRz7qrdQKtaefagRGxQyrPbTWwioK9FSzZAMsPcHWn9cWPAf5nVKFTryQi4",
  "key25": "UCg4rs2Hii2yD1Lr4gsTPRYiMk8YWmnSgSfWbFVCeiHbTQtamQ8tG6VmPC12FSeohXtzbWZF4t1w3P7V62GMVEC",
  "key26": "khFZEghAPDHqxEqGp8KVsvxngjAXVb8k3MXh9jP22GnqU148tvmSFGrCgLTxJGqu4nW3LkD11ACnjdNRWR4Aaui",
  "key27": "2mFxUStE7fTA6K3mWioUEohAUA6d5bPE76pp9yfRZRVGXTZvgf2Zm3TF8eCSWDWGwCXYSYSpbNDo9G8qHWfXPfmX",
  "key28": "2jHw7a2HuX5dcNLuQhcPivQkvGcm2ZvdKJgp1MnpWUQPd68UQz2SP2Dm2Gxgv22PD7u9xyskAH2m3tRjcrVV8pbi",
  "key29": "3PHegfLfaMMi5wU5dVExsuYcXeFkqCyPpHrn67i2fy9QKotoZ23c1qoM18bymoAgt4LQpnNjjQh93NEerphUZ4ze",
  "key30": "3mjwUYvLd4d7ReHt5ZjKgJrQjEBiNUAUo3R2g3AhBrUWntwrDbsG1EXoE79sVQpJzu63WfaFZx8h8Yc9vxBjnnEW",
  "key31": "4WrnUeYiSk6T9ApgsAhig62Cv7jp4vBUaNxEtEAmSDZCECRzxLPZM8mDoFZ6qaddoiGw6hPXm1VgGG2t61RQRz1V",
  "key32": "3aCsQhEs8TLDNUHhcXEfmW2HEo6hJNQQb9pQ7ovo1YvPiheL9tH5hN7ZkfXHnLbgujZo1VdpXNbRusw35FFFXa5n",
  "key33": "4oPDBTb8tnXv12XQ6GNRVZivU1ZrY4WAEw2gwsnXVGUpC37u2YwxM5XTQjuaRcwgh6qjEu2AAaj4UR4iTg1iczvQ",
  "key34": "3LxV6MGt8bHzXzy66feVdhFSWPPN6CUxEGeqTyx4yqgz6AJdZumkYfbHCGMvswd2H1dwycuu2X6ALDQHR73drwZ",
  "key35": "5a2LxpqNDq9tamfuv4QHq2Zpt9UYERZoUfdQoySuDvtikXexpJ1bp1MG2nvvPGwG7RhfiqLCtqGmJZCK22yMMAfW",
  "key36": "27Qt1tkkW7CyUzcufLQxT74bVUBcjUMcUYC5VFBD3SmDjk67RXo2C7NCKazfy2WgJKSoGB4FhoC2HszbycXLHrKc",
  "key37": "3B9vtQoU54Pk1NEVzkJCc683uQ7oxLgYbeWqbARC1ihYEBdX8wXXEir8jSDqiC1HdW8CDbAs1HDGs8jTtm3GFrPt",
  "key38": "3jcbwzqVgEMoJHgJvy4FeQ1dXPSwsSnoupWYZ7ULekzmGW2to1DkoSqTrFN67RL1gmrSb1JBDt9EZu3z48c1Wo16",
  "key39": "4gh31WLnCTLnRowGUbpQqqdZR6RKvJNfHVzBFYpKnPSMoJ6kN2aXpC4yqhX5zU2jSt2BNmF5VH2vc5q7UFWcxvoy",
  "key40": "FuzJJRAw9zxwdwebAEax4UmmDn7Z7SoHVkZBFr1ShyVe1vus2AkZNBRoqVbJ8J88pFBXNvd1boTb3pQRE7Xnr9F"
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
