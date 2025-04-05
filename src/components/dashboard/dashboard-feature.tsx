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
    "5h3HBRoqsBQxJqxYDVvXfcMjcAXMkWNskXM5HAtfhr7N5aCPDfWUV8Wce42LXYCc8xrdBeAxxhHvuxTsmiVyUcqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LayASJA22GcMWLjGEwDq8yQVm5RHXeiB4nVmo2xsrbkLSQ2vp7ciEkSvNcHSgTemvF5nuwhhetLGw1z1UK4FB5P",
  "key1": "127AUnGmQzgL3RKTNTGu2ZxSLNLMWcz6ihupPokseBUPTQjGSvp2t4kBjhSMrn38SD5Px6ZmsgjbxVHMxPFJZocm",
  "key2": "2rQSavDQj47Ba96jpSbJeE73gBKsjWWPc1PtGhwq7tn7cVUuusuQ7wJqDbptkfqHTpp8xDNbSnus9rnjmcpeCY4o",
  "key3": "4k1Gn6JBBMNwTQ9p8PDvTdfgjESGTgWEgxVKp4Z7tCdacZYpU2gTbh4JFWSD3KJajyHmAdcmqFcvhYxR3Heaibsd",
  "key4": "5PWGnVmsiULfP1MhRz3jjKTTbCDyeAgL1qSMHCkzXnG9AWZ8QdWD9eMnj7B4kzSnwwy4US4pDJu3LnkAbEk9eKx8",
  "key5": "4eoaGqD1UYvJr9YGtqFwEcNnJyJdQZ3iaFpjdkJKay1GmLmCmsF54S7Cw9zzFHEkcEZer8aREKSD31pUHGntjWoh",
  "key6": "2RrPfRHsmyqzwtJpttKn5Yr7d925P3chb5NJMGGEQVsLsxSVRgEXo4AUcQviN136a6cRMRzPh5KThiS1MHFrNAKo",
  "key7": "21wjAQCtHrZcWzhPimkkFUVnfzsjXSdsF9FhncwuSDnDEzktzQ2vUVy8FYu7sRb6Q8WrQkhVYQFEg8ZYKYbjuYo3",
  "key8": "25GpoGAfb3ghyNVHMCDuiT6sobjRisPuPKAEJBQfH9dKjjiF1qeMWrBHsPvEZ3kKdBR3RYxXS1i19ZVijqvaf3xi",
  "key9": "59eTFpHDYQzvev7VzxVQ1e5SbJnJKBmDwM4oYxAv5ACYusPmgpf5xsp6ize7cHBFV4733bRdce3F4GxPbceB2QJ",
  "key10": "4GqZQqzhsiswiU797JeeM5sTsvxkU2Tmpk9KAKWD8VU5tUcHW2L6uYndPXQdSMQQrzYrAD3qUj7dfsukezUgPuao",
  "key11": "2YDzE5RHmPsbskRA7CQ2Y8aSNNJvdcnaNypUP5zyRNqeKX1Ncxe6fEoZufgbYn51QFub8UEEfG4CQBL6Av8vrskT",
  "key12": "3QQzm1TpB8Yp27X5J1Vtn7b8L76LBW5d86GTztGaqxejSf98vCMHeoqGUBWurrgPrqkyGRXbVEErxCjhPAotJgvg",
  "key13": "3bVjaxKNz31M1ehnAekPmWrdMUMzFLLaFc2erEC7TB4Du1buu7vEUibqL5NMarpMbakRdNYYgu9avw9GB5uzMmPx",
  "key14": "62F5YaJrhnxc9JeBSnWkRkBCWkvgH3ZwvNSaJ3tuqoWZ6KDgkw6osrUYqh6sZNSBwsorATg3YkD5VG8nwhdTCgSs",
  "key15": "HkqpnPnmATsKDpmrbS7AMEdhwiBrPH4pXqv6LnADwzPkwGNZBSzn4KsPRKT2mD6p2sETvG3oFQXQS3ZHT2ZVsXd",
  "key16": "3EsP6nDJJvyjxmbm6f2Ur9jSwJsThY8bE2Ei6eFxy7Jgbjp9T5Zd8qY6YXTBz31LHdB1wi4vEJUhaHQ3uzeyNdkR",
  "key17": "4TPHsiiHaXFbNZruo3H4qzRywTxcVnuZ7r7NTExCUV4XRNQKEjgf9PJGfbuS5U219YDNdbpM48qpdDz4opgun7q5",
  "key18": "3LQgY8WqzTvysCEQxjYVzkQASy1nvqwNM3gEzx1A7TvtTd1rsvJL8jS5AuwhgCe6USKtcVu2XtAzLWZnJe9WQebT",
  "key19": "645pEVJjGowKMzcXw2Lsj7cJTc8Hx6Do6uxcHfUwQ5dFePYRJDK3gEqzzfLpkCzj3kMxuSc5BR9G1yw6WMSRkn7J",
  "key20": "cTmt2ZJVuYEhsV46V1sxj124xLY6UnTwZJb7pm9Vc7wSTeyLUKtfC9ny8P5Uu2SDhQfAUXpVMz9oGMnudzFuRrV",
  "key21": "2JgxMWVTUttZxYNVZVaRaVYLQfcmXdEYAT8LioskHSno3orrSKBL6TUedm5wZR8y7SoMvLzRXYQmwyGRETHqCcsZ",
  "key22": "2bLdrb4nnG2HoyAczNSc42LVtCjn98ooesKonHFn1w8Hs18zwuztig1brY8aZySamyaTyrEx4sq3KB3U1Gd1CDHg",
  "key23": "4C3ro5JQvmacUSrwQoXrBLdo7JxLmhQYReBGYFAjGhmButQZ1Kzp9FHCygfWgyrMmtg2CCsYGqKYCiewY6bGnz5Q",
  "key24": "u5dDNyqn2Fg7EzYPeDnn6XEGgwXPhQtxPa2d4gEFxCqksvq93xPfWyCHp4TR71b8zd1Ghz24H1J6Uxo1YZBPWRg",
  "key25": "2ENY6eL98fTPDuRH9FCQ35nW2yhoyFuTzKkRBRTAfjunEkZkT7K9GLhjpEyvwEhgxrqwqSFasFbfTsnP7hXUhmd7",
  "key26": "5tneqArTYnYrHikeTLqtwMAM48VDC49sYgswq35HVz9FbiV6W4BgYNhyBPabryVinoBvM9t3G4W6cFKyBgbTtrLU",
  "key27": "sPLRehysSnCduhAF58xAZuQKv1niZKbi7n4iRoMLcJBDEb8HDzJnqefDohHima9MxUpyVDz8Vmqmhgz4dDcserv",
  "key28": "4a6YPEtQAHigjxEwwbex76tDEHXZkbeKjk12QV6xG6w26SXxjvHJ7fLsVedVUGP7psfTCQo7LJfAYHA9qs8Nz5Px",
  "key29": "4WMgLSAqH5Bb5x6gMwJqYCJxmZGXiupYZRfTWKmk2HzcSYePaZkT3poV3ocEr61aAHPhycKFSFnNktgF855okS3r",
  "key30": "347j22gzmSkYEYWBWRpar68fvR4fdSBxL96SG7tzxXvTCC54UTV5YeSP66cq1p2J9Emw8GGiFEekUBEuJX25gbj9",
  "key31": "4Hw3jmbSGD7mfLh34Xrj5ykJTp7wHmcai4jhwo1fWyTQBxU6aiYr9DQLuxdNMEPoNh29FmJGhW5FEsa7D5RexPqM"
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
