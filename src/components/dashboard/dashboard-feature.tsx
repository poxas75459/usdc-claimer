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
    "47bn7kMU7TqnqrAmSaLWi6RyEXqyLsoVat9ndM8xdPGyqBJVPpNuTce4RAPrRLM5uEVX2gE4aFRTwkFQ1gjy3zJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S9HbhBi4R4FQiUYttevxuGs4P9RJFrgFFPewHs14wkFXYB8UKKLG8TcaeZaqC6X8taVNRCxrxdv53bwoPLKJave",
  "key1": "423ibJ5kndszUAdJzakvR5aY3YnntTgNLvYgwRkr5VQ17fFYWmNrNibXEUTo62MnDLvZaXQjTqc2VpuwCsHZ9LSv",
  "key2": "2aRvGJVtJ1CWrpL3x12TSpMsduZftQQy1VLPHbxfuEAF64f2k6QbTzVaGzFDhnjdskti6sSotZvShyuXRJCaeSoq",
  "key3": "56QKyEW1WAwAKt5toMdhHGPNyYym592PovV1nbyXjFotj7HfNyx3yoJKm7jXgT7dSQnxDx4VjkaUbxddWQdnUzc3",
  "key4": "3BnoDqbGvc4QXfVSFav23CUeQ4XCVk2CLUeqybVnupm2u9PcFeMe9qQKfwTotmzvqbL7XzNkhjevZXSSJAKDajrP",
  "key5": "57f5KWjmz8gNERLkaFhmSatmj4h9n12hoGPqFhdKVriSwyJ41GfSHeJyLU9fjbS42TWLzNM7NuMcsc63EyezyhNJ",
  "key6": "UXv3XFJVwmFui4ZHQM8Qn1s9YJ2sksP76TE1pZFvp3tihfrzHCBfgwPbWhbw5oaEa7utCEsR2Bi9pWuPyERgapp",
  "key7": "5uG6jUUfR2WFCmXGLYm4t9WFz5sr2u5K1z1vnsFP9EXNFR8Wv7rMGyXH1udhYZbpdR78ptY7jrZDfN5Y5124hnia",
  "key8": "4EbXvsGLqx7RzptR5XNpjzZw3hHRUVGAUadYw11uC6dj2s3ByMGEJaKBmYLaVBAexW5CdK4hNpDzeepQxYM9Jij4",
  "key9": "4u5GD3e23jeeo91vPwCgdpDsBarR4pe8Ui3fE4sVWpVWkzAK7wCnqehKpSfUFWZKzJdahrLBMw8XDpMaXhGvBbwy",
  "key10": "5DTsWnNpdgaZGNrKbeCDT3MBxv9w6ogXktLVKX1U2zq7h71syxWcMzupdfZHKoUhy1ehng8jJTCkQjeBJfB5hG7p",
  "key11": "5pqYa9UkepCmH1Yy9WMywMWrGuuNkeYDbFp5AGnsxb74HZ3sSyNEGFHFnLsshfBL5PYvrbQhA4UMDd3Lp9AQ8feL",
  "key12": "5LXy4E7U55XMjTkXW7pcpKpwNLuwf6XdbuSXqT6FNHr295eo7FuKjLFZUm1tZVPNLHBA9vqgrgCH7FheywxAYYB",
  "key13": "4iG4FjTNE1vhEo8dsygPLjLXudyVW18UZzE7jgWqZF1LWUqQR7o6AZZLVBofwas9VYVvQ2asvPVAUHSVZp3iqeiT",
  "key14": "XUJw9rHUtofUe7dK3mjfTn2pCipaMUu3eYkFVNKgZoWrM9C4STNgKYdDYcNuvR146JNSkvs1LUu5BQQJM3n3tR3",
  "key15": "hjAuGEn3Ywo2Ekt5YLBfmtocbXLmAKaRgSNJiNkA42jXssGjGZuLzDK4ZJk9gWxKhkp25zmkHpMEKT1LFZFCdD6",
  "key16": "3FoAtfPm4LUFLXowzFzyBqmaj75TrsYDeLQWiSrdJFSex8vBpiNYTfPgArtq1NZKsGjYQNNE6VXU74bYmu2X7g2Y",
  "key17": "CawQwNMb7sSPsbuNL7hPgUGF2ynbCLFpjcNeAkJpDApAVsizDmNNTyYhzYBGqktyfJFzA4rZbSV64ZuVYzcFV8f",
  "key18": "5TDdPnBfJsRcFirHmRDCcYEFSYkGR9oJtER1PHPPTMWLHpRd4fVyDSesAuNZ65MvzWKzLN555MoEaYG1J3RQfRWe",
  "key19": "XnphLhYX4GeEN6RdCgJ9TLo4MjYwZfVsXZq2YRTGEWYPQWBcShPcq7D4wHdv7SwGfG3FhJD2Jr4RVCskYk6WDfr",
  "key20": "3fk4Gi3ukSVZuABjdmioWP2g2rtP483WTxhWJLfawk7771DKGaHnFUfhgRLSAUFrrWRoY4q63HfJiyv1Knn8RUzK",
  "key21": "4XhhNYphgr3QXHsuUvCbRpzyjxm8LHMt2XJtfgXJbFchi7TDti2VftpYGFNTnkA12metzB4T2VxKXMD4U4rMvrvq",
  "key22": "4SSpTgzJP3oL22vWH9QKMXrqGKgZUFuzGWcxignAQopyKphMc1Wg8fT2VQmG3VNVuwbT69hWEoT7mt9tR7Vr3tkw",
  "key23": "5B4AHG65duFbV7jCBYSxWNrwPUvSuKPaheMJCAioPPG42ozGyzfspjhteaVAaHt4WtvuogUok17Rz6JPsq4f2dMD",
  "key24": "4vSUwfJpwThUYLQ1EfUgMCG88SKdiPgGkwpzFeLLLSsdeC4SaG1H6ZKUYywL4kwRAWa2uyViptLwvvnSLhgGus7U",
  "key25": "2hJypBAbg7XKboYqDtjExQDXnF4ytzEb9GHfMfJXJqBuGznEekd8fmhhxqyq3WykNBPkWVyJk2f3cHENKuJeeofi",
  "key26": "2e9BdMEcaPGLsMhA1LMfvyV5LkH3PUneEpEgFFyQS1zEtmQNqAws4qG1owx97TN6CokV9z492FD2jthkQTjsNxyr",
  "key27": "2M83kfD3LVUABVBYV8RR62tthEGuitHEWWw2SA7rwXoWTPRV9uWWq2VZcV8Cm2zodSBS4vuiBme8JXTmRTBth6r7"
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
