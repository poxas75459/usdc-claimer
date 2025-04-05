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
    "3BQh9cKUqmu2hoZiZ61msZohaLw8yQt4qanbTSqGMcueX5XBYZ7T2khQtv1AtoygDeqFcJ9UsjNBn8SBsSopEbbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mSHsdQhkTUMm2zi7QmURyYiB44783B5aELKEpawRztBbjFRy2HivfYwBbGBpK6F9yrzPdWSoFN9xFwNoDPmv5VQ",
  "key1": "PwLYrZXYa2zhiTNjY8RGRvQZoxmp5sHU84oZ4sRtU955ThLRurfb1znSSe6Mvx5KV4MkR8eGotmkr8UoZP1Utuw",
  "key2": "5GzVQ26gTG3QFB9rB1DaxuzJ6z7xG9Y8Z2ufmuzC5MkHWqv1zbSWa4UziabCzXyNcK3zrRezqJMF4WCSHQVt5uNp",
  "key3": "kYJKLt3GiUnvXVHw7C7yx4FdXtgVok4Q7aXgXimh1nFL8pWjzkyfr8KQzAYKLUdQhdWegNwL2uck88WQZH16gPm",
  "key4": "4ZrEAgp9iytktjv3EZJERZ3utBLSvVvJ8ak7hperCMrMKLW5iq6wwHUGPqsXEQbT5CbG5X952PbkYMyAN8uE8LCY",
  "key5": "3rgnFxjvDyYLvYFEgCKwsXvviCCWVsKkbSXV19YxBFNA81eTevwhbGAdzbEXmPeCLVB9oopTZxirdz52w4Gjrodg",
  "key6": "5xJgUJsCnyVtJ8MfVZvprgpBp1C6haMxHwoukh3CWu8bwAvkgjHsJ1PHQLFCgkRVCFMX5TdMXbh1CuFbuvg2FBtk",
  "key7": "35gjx5kqLsWYPjkTheCtAw1LyFpjJjTseiykoqC8bsPXcwQSfqdkszSnRE4g7TDUPfK1TbdFdYbMwTfRpLnYJ8SR",
  "key8": "4ehyMBcQWiE1gPuDEawQFrv3E96t9H7aGwAghHwa5JaxwGQcNRZHQLs5s55XFmHCsoiC8By32d4QkVPqqKYdzFDz",
  "key9": "4we8j9jW9GLp8ztK6h1B78R1oiFR5sbM9eCddhDruDVaFM7KHAG4aT2wpFzeTFpFLoP4dnFozT4Rekpj6s9dCauy",
  "key10": "zdxhxvbWvcqkb4T2BHaju4ZAa8Bo7DtFyQqcH5DxYipDU4tCps3VHoNg1mDGGW9RcM4PaQG5sNca5AdL7iMXxBE",
  "key11": "5GL733HpHy4nQUSMefG3svsbCdQjD44B88k4UmNdaiaW4QuGYt5a2Wgw6aa7ysqU2AtVoaF7cUpu9TjbAcJC1LE6",
  "key12": "3qKaJEkB6jL55dw3eHRHqCex2VKAw4oBHGUYYrdARSfo3eGdVqth97sJGkx4ncj62NS4uNhuDEVD529KsSLCU7TT",
  "key13": "5qdngAvTtVAgiUAxMp7tkkXEbYm8Zuk39yiSWKSU7gtNYHpyVc2o2SbzM2NWJi5bETzXusx7BHG5R33yCRDoqvar",
  "key14": "rQFKGx4JttNt6Y6PRvP67UeBuaZ7XX2uN4jSUtK99fKw3mggGRnPQHaJDvrXFZMtRyBDpBq9AydeypbhrLUXQ34",
  "key15": "64mvwxvVWw9hjrpBxcxNvGagBLckDe7VcUXvZBmMeqBx61DxtWJe9y2FauQVpPGshhZ5uaX2oEc27iZjk1BFmFB2",
  "key16": "3haRXVWutLHSbkgENFp16DUbhsMUhjcMJJr68AdeWE9AWFt8RcdFp6WwUCoSoutVfNonu9xJgFNeSMW9xvisXmeP",
  "key17": "5bJwvSFZmkVyd4bPbY1F4ibXA7KQD4CciVF9CwqW71ZrrtHpJbopazwE8E4d86otPrvM7QTHUiV6caG5auWYzHU4",
  "key18": "2EGvxppo86WSugGg3QjWzKpZbaqvvdsFuXurbqQsmGLP2dvoL1NLS4MG2h2ZAnYW7fvke41rat3GgNGM332hZWXW",
  "key19": "2CG9CkTDeGiNWier5Ye6LAErMTJB2szxNZL2suHCjoFXRHorf4JJUQW6k44DLMbJ75quz2YbAgJNCJ855MQ8mM4i",
  "key20": "2k72kt1kio6p7EBvJCwQc5YHSzMos7AzSk6E6reAbovLGVMU6TQghZgk4YQMZdXUs9rYzESnd3hQoUdSqYAR5iyP",
  "key21": "2hF95YMoNWrJUgjwggrUEfwjhkRWUPbqQMDw9m8bJbLRXSZK8JFQTTUJGnVgyXJs9MbEWKZiPDkQBmSyqhBHXoQG",
  "key22": "yrwgvBemC4VPTVffvmQfqbo9CZqEogxLSRj8EbgXrGuARPsjb7CPXQSh4zdKmejN7t9tEEgx2bRN1ehkgKH9mPQ",
  "key23": "2J7gro4Ser2aXszrwq6VnWPh1Q2Zp6n2MfSYrwPzgP9pZK9rPFJBU3iEDSno1osnPMNuZWLuM4S7XdifG5rH2fNT",
  "key24": "3PqtFiv7rR7gvdQFkjpwEmkF2yR2NAPGfa5kThoaiAywhW6DnLA771YTc7mLNto1rUgpXAd43UcAcvi8fhw8HWLz",
  "key25": "z7WE8vWepiq6Bof4AQjrM2gbi3pu6ktixkcY5woRiQEGo6VkgLtqdhZxAhLdWSbaiih418a9XgjTd29FUgdGjB6",
  "key26": "2GmjmHnkwkSDXay2inUKN8rX25waoFduq1gnw7WK7DcCTcoyFoSUb67v9bRpfdRZHjeqmxy6fvH39BLXWJ7E5XVv",
  "key27": "3jvfcRPXpFLq8sMSpyYPzGLfAC5GzxqoP6pheDGmmzhpnrHFmjQRGNMdsHBu8jTbUCAUEEN6fj2tYcKiPwySSoWG",
  "key28": "2eezCGBHDSRFPLzXf41PAqakxCakCCzEcb5Lyh2k61Ek4mbB9r1qJ9b78tWY5uoQj3VprnQfXnmGLeyhUB9Y7uJb",
  "key29": "24N6J63xtCWr9tci2aRMyPxNpRpqN83BvbD5iuM6LFxU7EuynkwH5WisAstff1EWupYdn2F3YeNBZ2DPsfDmcffs",
  "key30": "XRR3v5NwuXtEmeha2mVpa4vjyb21MgwwoJZiKDdzfNzgkJKenQewrWFkM54mBC4mvRGxCQ1gLovQ4wShdiFQVfF",
  "key31": "558SxLFTcdk66G9eAf2KB8VxKoT1kXQ8UeFQfhX3ti8zEQBNRMNbJNnQzfwFzz5cYHywoDhpBazVfeuEnW1U97Rs",
  "key32": "5tTyNoKgW4xHn572qsMNGffygQETVBDSCXLp2DKwcGehm6nFUWy7odkXHnLNMA4GSCFDhSxQmr43EXxLVbgPRw7C",
  "key33": "4oDBF2kWhESSHQbR7MEhSL38Azt3FxfYSo3v4oGJphgqpnZ7Qe9VcYZFt5YTVsaiTunF7LVJ1cYdqWVN8VtCBCyu",
  "key34": "2BZWD1FtQBn1VAZxGoyTuvMVsCLsrzw1FUDW7UZQaecC793PqBGGAbVrssQW4cskFfJW7WH8PmomhsxovmMmWiJS",
  "key35": "4p27GUdRKcZGyNVmetM8TigRgdnBwv8qJUqVbSnRNmjhwUJYP8tYYjxa56GdV2hrEpY3k6M4WRapULDKMvq2cpbX",
  "key36": "nLgCXZ9uLv7c5NEAqSNd2TSn8XRWHLPFL9BsysAjNcvTjM4M1VKdyUEo2wtvJJxqjVmgmYJmH6jG8ohDizy3Bk6",
  "key37": "3DA49LNVwerQEDyguNm6L1TDKDjVBbkAh2hxw7quYtHbi7PFiXsSTtAWZTbHBmU4FCoZeWrnzNzHJoDCEtiNzy9s"
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
