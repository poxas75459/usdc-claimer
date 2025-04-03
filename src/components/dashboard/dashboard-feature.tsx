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
    "2JGbK1FL9a8QzxcNGXVFrJ6FCbSPtyy6anrHJ1ddHQaH2WypVEXJZTMZkXpnoXLy1fyu55MjygwkFmuNFo6H87W5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41bEMXrUHLHDPGW8ASrGxZCdA4rHSPUyAtYwV9LbBtZXCWexrW4PKaGHVaVVsJ3xxtFdQfKikG6v463xyYi3zJuJ",
  "key1": "5JxGDSEebTEcSsNzE72AExRAjpUwrXGkRr7ChsGQ6u3i7yVycwcmwRqWVGdpnqpBUHtDHBkx1f1JR3ou8PuUJ3xF",
  "key2": "AyhqDZKpm5kPdpQMHxaf1RaYDa93Zfrr8cSywdMdD6VyZzpyEwfbbZjR53hRELdY4zeLTE7MAs49AqPRnS2bUGi",
  "key3": "2GhRhtfsrFABsjyHNYNjBDbwRJe59torPvJ9Y4i4Pj6GwkxPP7wktHTzuubf92tyDmPwn9AQJxwQeebitVuVoTMk",
  "key4": "5ffM8LJYsUBzA2YLhTtjzvDEQuZySX94e18VcsNdamgV4k4WVaJrVJKouXgXzijB6f7K5FfQDJsyQWLbEWwFpixm",
  "key5": "3Fspsxy7CYboJ6Tb19m7TFDS6nspZmFXbTjFiYuHQeyS3fdm7i2YCEUvED5tymNtYv6ZBx4rDif3ZVHbFaKrFDV3",
  "key6": "4jAgXmYXsaSx7MMD65BBNvfRcBtk7pUhfXw43P3SsfNSfYeCV191zYE34Rv25th8x3MDmEDwnTX8UGitm9JCHkur",
  "key7": "3KWqGTQiBptM1R41rXwihCQ9ksBLWC2wTB4NNUTUAZ8TeD86xSByXrpoBzwmqHq4gUvdQystSHpWeeg8zuPtzchT",
  "key8": "3pnCkfLzeAYybbTHXMESt1nAehkNBNzYrrERxg1xhCAGBcqL9bw2zAZX91oHi2QNU8sCtJhi6dAwnReMerGhtvzv",
  "key9": "5X1awNAfZxh4yp3MszfxqN8JWSvqShYN1zdEbwLeQUhUvqFcvjhDCBNpnpNFtaUoUhT5mSrJPUBoYBtJHsToE9Hn",
  "key10": "3rj9Zi7289NCnhR8HoKkQ2mQhoWmPi4MoVoTXEPuMGG2JdZsHUozwdpZFZ8mWgkDnMSL1dADsB9TXioWM5ZcjLS4",
  "key11": "4uM9kDd3ms8EHNXouiAJdXPckuH5WuRB9DstyDoQKHsWjbtXjYSC4EaXdXwYcCHmJokV26H6AaKSKu4SHa5u5z6h",
  "key12": "9Lj3n5eWFnR8aLhqi3YuWV4NMcXaqo6Yvcgb4XfSjgwiGab8GERHhx5JCzR48y5HJrAJFMg1sJHbmGtFWWGMU3c",
  "key13": "31R7WG4BDuGnu7jLqQyCr8y7arvFNnqiiXEtcXchaUxunhXKqGPHjr5awm94FYPm5RkehQMoVoVQomdXYvN6LkLC",
  "key14": "54tdj2v4ZbMgruWMukLgvtJGsExXokzaEJWVPsCrWex9GrA1nmwHS1sN85aYnwra1SophNoMU2qWmMDUqNEMB5Nq",
  "key15": "2C9WRbXUpCoceNadzBzJJ9aQm5sDRWHEZVqSMsATpVbH6MhJw8biM4qzgFWkAyB6SrFZHAr3Pidfd2qsyYcUfWUj",
  "key16": "2U2BRTgXJZYajcPmhcf9sCezsLeirntqLcPR7N9wV17JVaEhYrAfT5Hb2FYMGDi5K5vAwBd9rf8Szo3JAKNcJu1F",
  "key17": "4DHSF8Pkvm7c4z8mkjY9wh2vnavZwErRt2eSuwPUcAzghY7uKD6vgR6Kp7jq4w71ezetH4uSZZg3BQD7qXPAVhBk",
  "key18": "jqH4eMicGMPHDrUi5xKLLZZKgCkUcRD9egmA4kQRtZ1uZGW99tjwGttjN2HMkpBJzZMVsJPUgWmE5NqF4tN9EtG",
  "key19": "4soJeRoZ9jufRDtW6yrNzTRjUJ7tGTwYzUxqzpLWbckHeooMyqC4JtsuuhwSzveUdCATyGAUs4m5RvXiapXDkr1B",
  "key20": "42mx4DGUf9C92C5rhcs3xQEkUQu966KfCQkJhHyPweMvSS9mE5g1yLP9KFCLJqevk6spH1zDM1D4m2U5GX48h978",
  "key21": "4gYP1psHPZJZ3pACDVDXgHwvmjeBgAZNaYHdd4emBYKRzvyhENSj99v4fUCVmdLNQ9FJX5EhiktNNqtjiJFzkJNV",
  "key22": "2HQ1iNBCUBTV9Pw2BBTDMFEse1dCyF1KZYya3w8EgLnfp9MKucjxJDL8GezyhWSRtFzmZBycchPNnscQNHJiAt67",
  "key23": "4KAAhPnZceuJcU1udU5NSxF8dymNsFX2FJcMNB6NrJcXYfLC3HhRKCEvgnkdFVY7uZ3D8TGRHuigxW6KbmxFN29W",
  "key24": "4pzomC6xKX7toRXYhN3jDLA3P71UdLnZhU1zroyaNyL64Qw1AJga34FhfuDhbRDoSaNxRQBh9bKEPGdndLsKeGRa",
  "key25": "3wVmSeF76URUZpk7msD5C5ZfSadJZASWpdb8tLrjWTFYJXkYf5vLtJ8Tie5pAejrmiQj3GRvMMCF48F3923NMwbB",
  "key26": "5Fh1uPkvt4QBRD3qtwen7c7wL6fyGj7qZTGXPs7bRkP2n5FSWtahGBcnysRFW4W9gmbfzkNeDXtAoUGrUWi3oDmV",
  "key27": "vXYXLBkFktZScLDwrEmTXXeAHxH86Giz3JvhM3xNXxViPrq2SXhWcqCCPbtexRi5BFYmNSQPS64UveohBKNar9e",
  "key28": "3RMMyW41paMGcq7b261azdfBQRe8asvuoy7WtwTtWpf4NdnPffL7FukuE5wBexwSY9uVsRmzP8it6B5FeJciW1aD"
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
