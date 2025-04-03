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
    "5tbtZDCJiLMYV2CPKNSqXj5HkdN2N7edDJPWrFDG9Jd7uuFy5ZJTwD3Nics5SEnjyohFmV3whdPSbPkHd6oAchN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z1jaP5rs5pXPnoHsb1qRr9feKmNoEo6kD1eom62txbW13HQV28T5S9GJfxzJVgBKVcrDMjCyEf6FqPKpVMWaR9e",
  "key1": "VbGUa2pDPShQaatnwv51jCKoCEvHFVcivm4cNMMRxCarWcSGCf1mdiaxLF6AJyYUZryCsjbufb2s3ymJCdNcozc",
  "key2": "5YxYN9QQoBCyG82Fzt2LkhVgjA5yqzxHBZsmMpv4YL14daEyzLPJVfXYYh61jGAwdcjqiTgV4reEi7NR2y6oUzqp",
  "key3": "4zVn6poJ9fEv9Jh1d3v3CBopQ5RN2FvRWM4EkcN47ZFxXs787xnT12vgZ5sktyDzzWSzhvqCv4izVNwnDG37woTE",
  "key4": "4XNQCcCDfVnYRc9Fza8PVAqfpmQycqfBHZy2Rc6NNP4FzJ95eRwQF5KvwatYPDwAeiW5AVWywbNa5bPG5eDW73ts",
  "key5": "4jTH8oitnbNcSiNxCHmVRDRKC6JaQw7W99cE1ChpwxocFUVsGfzuReHVrscoCC1z7prw9MitrLEy7aLp8HBWMWLK",
  "key6": "5eRJFAsYrdsZ41tmPpAR5m3LjAGh3PnTDv8mTM2xENp2pkBoyNPE5wmLJWtuWKi8NkQaCd1ktt3mrjN3Y72R4CFp",
  "key7": "3Sp8mweLt5b3qQki29jXWhNM479GLSLxknZ6YAUrd2iw5Dd6j3b9YW5qccUS9Nh1vJ57eB6F5Piem5q3KGMV1pLP",
  "key8": "26zrqjwKMETo4jpAs7kJbi1tncVSLFx1YZJCZph3Uq9XyFh2KzAFeqco9bV4aYcxNFRsfgJc3kzCuoMhP3LBPttJ",
  "key9": "51ntGD6FaUDRjeVf1kCuVpEQNfv5HLLrwzLpgbFxL1AhocfVqpnAm74KTyCJq4Jg2xTvbjWHd7Wxm2BSYZgvMqAo",
  "key10": "561zhHYs8icJgrq3yciHfK9ZZEfbtrqTxWjNB1qvHXe1VDfKreofY7d4pX4jgEovACAAjeZ8domsB5aQHwCmwLfa",
  "key11": "3hAjsz6tvwS3kG47SuEeHa1ps2huFaNAedUKpnU1zhLaRvG2aPpp6W1BuPH3UAHEykxYhoXjMzzxyHXb8EZX5VFz",
  "key12": "5rNnfhyRdNt3VLK3Aimn3yCbTscRDaFCUWGjCoqgyF78cx9saQPBWfUdTqSbPUQpYMGhnihnxFYNE8MYxzDaw4gm",
  "key13": "4Wgz2fDKMd9Tju1eh2kfsmApbjh1MzaEGozBQztsL6LUZSZ7Tpk7bo2gJJm95ZtraC9BgPpxwrA7sjbRpm7ppnZK",
  "key14": "TTUxXidMVH2cVPJPZyo86J3BpM9iVuEEMWZBxxkcKGMMYzyVVacw2e7nAe9tbNQGfkSsvBTV7H1kJayu7vpfURJ",
  "key15": "3ndstYgCUdYu5F7nmPQZQuQS8HCT9cMD6Ls7MjSvshaDT4fg3dejbkfRENC9Qysr7knYqqb1kSHbniDk2n6WY59z",
  "key16": "JXWcWE5xfkaFJVbUa9k1VfvdoU5bb9NXhcUGKedZRkT5azK5GHb3GStCMQ2jkYrv1F83bxVt4P26Tf3cYf6bKtt",
  "key17": "5SsQ8GziF1FK2Pz9XyJTqYPAkGXnBYDnEJ6cjuEtSARU1yiBNweochSNgHKfRjHdEvzT77MVQL7gsPvvjudfjTjk",
  "key18": "3U8eDA6SCMagG3D6ckdJ9okFmmNj1XEkrEVTRProMpaeFbS8Xtq1ndjvqXq8nyGUdVkoC1q53kyYNNpmbPofdKs3",
  "key19": "5S3DBFodRaKhkzCbsgq3XPKZbn2rxx59P4QjQQwzoJEr7zz6VZccFQ81weJtj6mzHm7AtnugfkzsHHni77uepKYS",
  "key20": "3ugdNK3fgzzq6rEam486Fw4kmpc847AARuNR5wjHqPkja4D7Te3w4LTwiNc6V1mCTEuGuLfrsTp678bxaRNoKcTC",
  "key21": "5UZT7g6wTd97hHSSA7RMuCDRQC56QBDbHwX3MrgHKUyG1Gtbp2VkpniEvhaPZzAQFmuXGpEmgJsAx8axs3yPEuPQ",
  "key22": "4e4G3hpkjg99fGrBEkgkqYMhuFXVUbcP4wappRVcRegrKNEThEA9UMFeRc7Q96794gUg1f23jUmTMoU2uvVKuSC6",
  "key23": "4iXwbUNoGsrxK7wyzKasMeguzGi2qJvNcXfxkCbPKXggagghKivf7A1mJJrUUwGnbf5saN2MWbiP8qq73vVdg6hC",
  "key24": "3WQe4nzf34FhBtRoJz1LvCfL4a3kDGGCdyYXDr3qbVg14Gfwf5YAzfRPvn2FfyGDvXaedzQ6H7Av3cMFR1HQVUWx",
  "key25": "3xuaKgxTqvYBGRYypabFHg5b5FUWUsnrmPPfAwXT5KJKS1QAYT6g9TZeZEiL97mKBtedUihsEHtkh9zW8syN1PY7",
  "key26": "fWYsvrhVVEYsSBaeweC94rZLkmkigarXxGitSkLosGomyWniG3UeRmAX41h4oRWbhjkdvnme8wyjJWcrvTgDteb",
  "key27": "3AhQ9gQi1gPxV9kLtecGnGTTGuqYQi75ijiGPgWpemswQoAyVAqjfzzVcLkPfN5Lu1bULXXLXbPD5tgLcXxjGPoq",
  "key28": "2Uy8NXThzfu7yw3bA9BuenxuCpZvrfW2iWFG3XBCNxrRHmcjYzwKQPPp8ZDaKWNrCDtzRxoErcEipKxf8tHeZjRc",
  "key29": "5jVtbza1ofvqaMK8Y4rkSDaYrbKHfdDaRWUDRusV5KchGpEqSg1YNdhzU6Stsw28gbhLJB3yCEUFRYgmn9TZ1u7D",
  "key30": "32WLS7oKbNcqpCr3ZJcnG8ukKN6s7Psop7ptitHjWZmkBf8zfhhhjuULNoDLRFNPJsu6eFaBP8WkyNSKTsyBSEgb",
  "key31": "49ZF1BUJczQS9WSpzmpwewCxQ3MXptdgKJ2E4UpsJtJAPyqcHioybsqy9Qcjrz8k7DvaxTffjb4ZbrZr3pQA9W44"
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
