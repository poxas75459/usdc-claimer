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
    "3xifPy99F4duCnT1vwVLCtequwwGbXiZhNnUjDtCq95tNNqDEEfdRJC3APzq2r5sdG1gQcHRvRLTPxVgqaccyYTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LS4fEDbD9sD1zhgaGGCB8Lf1ccEE2mVti75zcXPfyApkEFRZgQz8Y3PFSgDoRbTtvnHLyA46VzgRfT81yXBP94D",
  "key1": "4iwpuz9RqmTYusAsRdxfPrsyY8Eavv7PSF2k15Ga7oMLBsVtA14Xz6N4u6Ah7MMahCzbHAGUvxmE8st5FKhbhyxx",
  "key2": "4ZAejRgrSqEikLmiujinrz3EuYVhHyn6icSi9i8qXWWJL6nAGj8nRcKX9xFtDdMN3RbyngyvBp5mzNnNjCt57YyB",
  "key3": "ZkX7659HpTJjBA33v2sAQXkZEaeiGJnu6L6S3geL1PT5ATUEVhSCMPmkaLs66VnMnCGtcQaMjSEdtJbsmhsLLBC",
  "key4": "2B31JzEF4EYsTPE2qFnvbwjKiu67VcMgFCG9KaizjuWgKkpmGgMpkZiywyCapuuYKvnRp7huxAeQJKSpwsLJF9zr",
  "key5": "3piiBMQxD89zSuDhY4MWuNRpW6XVyBN7gmQ4izkTJBoBo3yr4QyKUffSdseapR9L3rJc8qwmefVyWjueExGzmmKN",
  "key6": "4FfwwFdrSJg3cGUgD8BiLcDNVDmi2BVzVmQywwJpQcCE6AxBxCkMJYdCA81cHRMSe497Fb41X6yDZPTzqmTGW8tm",
  "key7": "PXoStYZxCfc4xGcfDkHgyaafHTyDSYAyE3XnGGcZVAE2gCBUmpjkExVaayn9Fi4mR5qEZp1P7CS8TYptajsQhXw",
  "key8": "Bh25GVStjjFawAqmCpnkDN1gHyBhPwrbEYubugmyn9gXxxHZQf937Cpe6rKWRUMnnn7sAMRhS5HJJBAsbYQ8g6g",
  "key9": "zG1je67aV7UdCY2mg1EWijPFQKMWczoLN4tFwanziCQ1nFJKjKnHvmGcBEeRmVmZLcvgaRcr6auQmpkM5XqDRc7",
  "key10": "3AuZDannLHf2nHRqqRAQdNhHfqKRXjnNSqeQKhZfQC7jb8cdwE7qj7z88asxyHBtJzpQabX96RPS5LfeBk2HqHs8",
  "key11": "3K5eREXMxbCBqmwAdZGgbgMPBQEEDDLQaAdGcycwqWuMugscxDK3dEUnJ5h7XjBs3m1Pdi3pd7KdApYuh86t1VGn",
  "key12": "5nJWndRSvWfUiYDWArbGAKkyp9uXr7L2hYmPhfMXmoJcv9jN4rmmm1fPCw2z3ub4qYaupB5tqNah9op6JL69Jbyf",
  "key13": "51ojmEteNzBFDusm4HAQCwAEvq7fSSwpgPjsVsg8xGK8mtLGMwcTtRbnFed7UdLqvy2xoefWFQsW5AHGRgxRHntb",
  "key14": "dCZn6x2dyScZdJoBPkhduyn4b5QYCd59cZy1bahAsfpfPGoTQVC2NkENM7WRcQwhPM7HHtBYJqgBvfwWv975cZY",
  "key15": "3WZL7PEHejaDu6teF25Snm7Dhd3ztquxebmUc2j1wwMfT6Xy8BqAv7aPZjeTABDPhzyJ8pjQ4nroDU14bAxpGEca",
  "key16": "5qYMDgLyH6JNogpvRRMAzsHC36wtL7VuMDik1oWcVJF31DkGAjjjpKp7ik2g7Bp7fMKL2ggjuNPcnoPgPwAGdxoy",
  "key17": "LzeYHPhYnSRaaYt6HprPB8w2iwbaoRd4W6KW8gM7VwoSTbRRd2kph1WSRe1a52bPDE76HUW2z6dDAaVP9XrCALV",
  "key18": "53ssY6GKLh7bwTuDaPHcvXu84GAfGZoQwQbmvChtvVksBPfwaRgURjiHCo7wk6mgp6tc7rFzx2fKyhH7UUhYGkQW",
  "key19": "5rEsfyV5dhBJu6nytTHLnKqLo55RzJezbKdhcS1zd6oijXCvCtSArGofqJthr9FVjkYhVNqH4RVbXimTmC9Y19dB",
  "key20": "265uiZZCp5WRUEFUN1UJRc4r4C5aJMoAsL5pwS9AXMJes7woGVEhEjJaYhprZja5Atx61gEVp8dHRajJQQPYCr4b",
  "key21": "5ABsyx8jsPdaNy5YniwNyePsmhTCbRfLepVPAQRtHp41Xf5jMR2qnaJgyqACHGdtAtHLN4iAC9nvomji5vmR7eR6",
  "key22": "4cab8rKECq8zMKavA9hSvEnZKCK9u44oSYzoDhazw8uLXgQK7kRABCa4ZfnWz4fnAfPGY3SDXnsd8GJ6oQhPvw1E",
  "key23": "9D19jg4RFnsCuBobP1VzbugLK8XLxxJeLUJevcDk9GnD8gKRdBBNDHfiYxRvDeVukCgLaZ6ZzmvFAHdSahnggqa",
  "key24": "i8Z6tKYajw44nfHFC1CHSYdub4fX4ZF8Szv1QjiuAn7FLyKt8uCyJa7LkqXyKCW1X9hL7hxSEmpY9sQZYHSfjF1",
  "key25": "5s2QjhmGj4WZJ5nZnqS8CQURyrKbatCMEGQuZmqtSZFVsZpNCjvuA432pBjoj3VtyVaVHZwjixmzhSddpppqiEkw",
  "key26": "j8DH4DgA9qo7gZeTnFxo4eEAAw9vmCtD2ke6PZGC33jt14FfpsjicKQyK1AuQQQuCx3xKsJvRjPLKbY1X5o22Cf",
  "key27": "5GBXwuFqHe1PS4Gm6nKFGPbcxinzM5xa8XdCXzAgDgwgfJnzWf2JZQZFtmNropWb35uuz3vMeA3jUk2q1N1nRo69",
  "key28": "3rQFk7heLvurMwVBpajQxCy5eZMzgsjzEoJQEYcn6dVbQXhj5sEv3a3zf3mHSACo9mYaUDqUS5bhTLaJ53q7Jum",
  "key29": "y5uPMeyVnUzhbpN5qknPWvCJDtHbJyms5j5dNTJCpPGXQgVKBgFPNh1sxdGWmE53xwRq4pQ9wNTQnWfBkS3C4E5",
  "key30": "4mYSnLvzvoUZSdreaq6h2X9yU9qtdf8zwhnbuSJk4AAmbMbkyioJuQiJRVztSCHeRAVBghrB2Ljix6AG2Gm3DcLe",
  "key31": "A5d9ietBxWnfbWzPCggUpZ1ZdR7TUfdbFRd8gMWGjsoUURMBupQUsH8A1fDkUN52BCWEbtkEoiGCZYymRjnjeBj",
  "key32": "2SHb1TGUJxrKcFNoQTmVxSVit2puiMyzbWwcrQbW4q4pKoADU9CU2QE2r1c1fb4fCVxGmf2uyQLvoJyvmXBT3yvt"
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
