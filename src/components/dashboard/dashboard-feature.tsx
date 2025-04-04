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
    "38h7jfKaYRgvo51NKTeN91ZjHX7e3cEQyMoBPsL2okNpgcayqPk2vp3WYE3JExzoFHcu5oRdeD1EeNSvvYVmygPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wbg8WaudLNdrAM6zhMtnvqqJf3QiwhjukCPWpdaeGjCgRKMjKVqYZZRWfZpjq4fjKG58GsptJ9RW43KXShDQQwh",
  "key1": "dmJi3QCEEKChtd7Hk6MedzzWiXrHdby77FevKFDmnFixF97jYURxSWSr53AChjpJBPaRT9Jn3uam3d7sScbHpAj",
  "key2": "3gR2bkQ4snEvrdrXKN3eZhhUZTrE1hbWccwaox3XS5sxwj5HbzPk5LknWmieWHW7tHnyY1v4BJa2hVrhwNvbtN4c",
  "key3": "2388u4KieQF1rKyLjt9oKdZgzpDuaMfLmUwgV7jSqoQTRKUvSgK1uHxPzYhTShUzapbhfbprSYduu3oPo7SHQsRL",
  "key4": "3gashdBqTrFM9DKzdotFHNdqmWgLerzMG8BfxiQedtKHqbbz592X8asYRTGPpzcaBU2DsFqc5rTwtJEu9rx1pp11",
  "key5": "4UwS7o5mAkYYV6uiD84NbLQrzZ8iZykqkhaB8Sop5ZmLwBc4dcpQnQpw7pWirrfj7Je4YSJqw1GetQZHa8KaLyrL",
  "key6": "5YNi25p5uK7iBetPyhemAc561nuXnnsUgpVeRCU6j6bw3oYCNpRzdNjKJk1F7qab3PuWP7bfeuP7DFcKeYr2vCH",
  "key7": "2KoVHRMA1ttWWpATAM571bM9fbAA3DVGfEzmyzhBCxe7jM3moDtio9yWDH98xPHHEr95ib4zPfEq2XCUsnWKjPmR",
  "key8": "5cvubBF95E1T9XrMYykofKYGUZ5NJ333CT5w2QthJUFKX3zwsPYCvzbKb19Auc7xHKHAkAFm3gsCoX57YTHtYh6z",
  "key9": "2EiCgJ5aHGSxK84cg3oBkSF4XNuvyeBJvq3M5sWnbJNJZYdVm2rQDLVcM8Dg64QvbaZiJC7SpChuynv7dRCD9XSA",
  "key10": "2vQvmNnfRYwjfKvpeskCUi8g3UJKZdDT1FyK7ZQnQkwGqLGf8e8B5CcYoUzb2KJUeN42qHJnfvRzYwtkRm7JEJGP",
  "key11": "bQMAxTskGvJRsySEetFkNSEwugj4EbBAH72G5pWQygdPNwHgHRj849oedvCg8SqwNU16BikaT6tPBFRVfCjNpc3",
  "key12": "2tA9w3RcScUfLnorssREXDcvwyWZQ7eiCMm7q2Znq76iNkFLkh9YsAn7EXCQg19WuYojp8XPvx2Ct5fU8EpM77KB",
  "key13": "2qaBbGJG4QeDwqCEjCdPRuiGkn2CEjR8SCdcUwp3vmzNeGV8XUjEcXrm3vwnTu8k8RKZ9g7GChUbfsXkxhkFxETz",
  "key14": "2eVYRWEjX66LhYqJfj6tsz32KLFnAT39Yxq8GxLtCL5ED77faWvh6dse1JoZTrjLap4vSwDA55KMeyRNvM4YNMvZ",
  "key15": "5vnEGAQqC3KSHwER5E1U1HLtre437Budvf4ZWSST3PwU8ncZD4NPsYN8mhHM6Rk86oUWmw97LvSQ45PN7oF9EfQ1",
  "key16": "3saTCXxXoNTkw79wmoHSuJGnCotTfqd7bVbk9L54JXoKTQdkcnZU396iMGZPioYb8XqUxH4ibGbcr7uRTBiuLSiw",
  "key17": "4J6AwcfU1nnyQH3GbbJRhyoCnWfiBUf7w14PHEyg8w75DK9rn5oy89AqBKLTcwmHQYwMHzo4C9qcxSzjxnXXfSpB",
  "key18": "Aoe9vHnJ5mb2vJ9d3nd9ArxU1W6fBFdWfihuTWaVjDHCTuPKMcRDMU2eg7BRhGDUcPyGnnZ6kAZ96MC3WLALe6G",
  "key19": "28tdmjpRbi2E2oFtGmeq9NpG78KYdYB3juX1ypqNrQNjLiuNFywNwxFvvn7zkuvfEeHM7DxiYRutUST2zqE3UofN",
  "key20": "4RMoQNDTSZv8zzGwXLRdrCgrGZxbMeb7USqMEsBgMbmQv7657bbWKWJJkpW6BZz2E12F45MwTuFnTXBo6RPh5zTv",
  "key21": "5s7X9De8oPMDYbHeVGramTncXHgM5ZLGAX2EKQYd6sJELyCF89384VHEPawjAWpQxpCfqpZSjCf8rbQuTjCvq9jn",
  "key22": "4YxVi9ZeqTc7KwbuDWRVU9PyWBCLVm56psKtrgKCbBYbJsNaspvULjsbSZ7PT2ewPRTjQ72Kc9nCaeyKgMAkfcgB",
  "key23": "2CmQESN9WN3xpWtSVZnuZYBj7x3NNfoYMqDMm6Q7QL6fxBrmbs53ZQu8RhxMSRqR135JQmtB34w873SZpCGq6TVj",
  "key24": "2Zc2LdjkKSfWyyZV1CvLxrxnjgCsDmLEAuKdKjGgUKdkH3yoRBsiHrV6tkUU1FRcfeiz3x7JTxxs9VfMFy9dCfAC"
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
