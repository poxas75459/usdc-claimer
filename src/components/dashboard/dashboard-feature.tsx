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
    "2hq8teckLJ51c3rvyGdJqRirRTk89JE9t1JHw2gXYbteKt78GzpCZtLaHc5ZA1PR7R5KN4zpmr7ukgaLWfhpCbnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nJ4wN6CXFxnUSEnFfkZrGvKBGNXZr1GWBTwDjB67wFtRFztJiNz5W69m9QHr6KrTADiaFNFKH3HYaD6oB5d4s9V",
  "key1": "5wDm3aS2mcDNCiXW8QqbRn6Ja6ZoQvhNG7M2NFYoYGmkMfDLn4ZS3VTeNCJNEkpeuydhgkfShScLCibg8dZwgJrt",
  "key2": "m63vU9BMVeh3pBqY1pi4nFH4dXG5XhwTCWMgTcyokMyFr6pBdv4u5NFqFAt13Muvu3PK2A33czEzo2qXh4oFWZE",
  "key3": "3WQA7JTPSBb8TDLUTfvDarVuzd4zx5gNqWpvLy8XaVsB1jNkUYWmVfMVmqJcPTo5eWPXvGY5PEPL2QkQCufK9kkZ",
  "key4": "3avam6HeUs3cP9ct5b6mS4JAqWDC5tLUQL4yLtin4vgvx9iqSLkLcVL8buFf2fMCL2ynywMbADMHEK1jvB6rFBhz",
  "key5": "XQjqcrsqZvcDBcvoGbArHdBSx45ESYWk5J65Ga5BNZTM9AVctizELVEdxMa6Xe86B71g1tfzV6vmPPQLfvQx9iZ",
  "key6": "2tetCsqVJ1TrV6j19UwxBDXR7JULhTW5kVPrFYs3YyP8btxuT2WmDywiza4DoGPVxXhUJgdyMKxq25ujnXrEfic5",
  "key7": "442AGnwXM6Kk8NBBewQru7URqZgVPX4FPphGLwwXUqWGoKvJWtARzgw1pAtGgeUgcyF3kLN4nrXNzwbbyQaeR7e4",
  "key8": "2ZhqZ3H8irQ8eZETjeKtNrRj8bVzhp97SnrjsWaDr8XG1Ttq28LYtnQB2f6puBXBeExapEs6jSxW37gC9XGV99u7",
  "key9": "4qiC3GSMUFAJzFYesK463UVmT331rKcMQQi3gbUYw3jieVro4H3LxSAkmrmMX3UD532YCdDcUQyRhcLcfatdEAs5",
  "key10": "2npAV7wukoj5uQirJqhbxLY3b2nqJM8hz8HFnzPPCNrADgSpGFxRwPa7xYWqpsYduGw5sR1s8y1vUCBGrTReb6Xx",
  "key11": "633WzrGc5VZoaT4qDXk6GGQXUdb3cibpQdTUEzEmwS7rwRk2pp7pxiavJ7cwXaGouq4XcPyPoPd5b5veG94MozJS",
  "key12": "2WW1NyrPYh8F1Eq6axPjFMf1Kmcr7U6sE4jJtgKbkgc7BHDyeqoQccvjFmLLYDxHUcdKJQABFe3BU7fYYqTR7G5h",
  "key13": "npt5vpzAZ9rb6hEHRi91jTGkCiUhtmdfkyH9zPE4mMxrk9sfaakGbAqXEupK9N6NyvgepymPbuVbQa5coDMRmx5",
  "key14": "4LSsMBQhZTmtoqWjwtxYgUTRuYr9QSC7vu3LdZBBBSqMwZLbQyF1sQi95ZaZDXUTAxYXjGpw8dSgoEAXfpaBuGqV",
  "key15": "3WFx5DRerkNC5fc6DxxZakZ8Bo1632Jg8BY3w1Qsjv7HxtebBsvSFsdtB6DrJBc8fBkhRfLDjuqcgAwGm9ki1Xxg",
  "key16": "4Ssf9LhRd61mW7pwrdvr1vh88jzgiTgNV7JekaYR3TYAy27UqCoN954CfF6D8PNW76dwWAXQ7qZ387y3U4HwJ316",
  "key17": "43JWryzfKCwnRuAuaTXv6gCMPamwqvjoEAKDg9nHJHhs9UN2DY7UekVDGSGxS99w2WcL7wpjWi9MPzwbz4epsw3t",
  "key18": "5rvCCd8M4W7bDHp2CdyRMn2cxnF3bpHCkCPDyaWx9S2rvt3wTcH2VA9x44gjmnfLwMfDjvW1HjGyDQ5rAXpAwotQ",
  "key19": "4eNhDpLzXWoovNfRCXxTitByL18hTYngHkiJXGN9n93w7N6EqA8t1BFVEGWEuQBJ9jszpVx8f6vorwCcYoKaTWCh",
  "key20": "4aynh9fRemc7TPAgQtutV69m5LJE8dPqThx4rZsMTaP7k6YMV8QqdK6z2ZXCM11mhTUtEvjfRd59b9ksQufa2hgF",
  "key21": "2oKYkYgWLqACPDSmnTxPq1SiAVkjStXoHCEKiZy52s1DX18pRgW27cDzDiVnCppWJ2cXWr5BwCqRbmnEYQDWmE2P",
  "key22": "qDFFfUAs9kZQmNH3BxsjLntCyaVFQgdYq4PjeuHYqWJYk4dm8RpqBjzH4xfQRBfmYv4BsyNiSV8AnC6kLVmPUkM",
  "key23": "2KP35rk991wv8D4CY5NYTCMd7XsnshBndERcWYiSga5gif4cp9fPocPmJ6RTaPDw9bfmiFo62phLtURFksyNspV6",
  "key24": "bizYB3sbwh3gyNzN9bEkBeKLXWhKav8tofr8AUxXVAJYcNsNEBvtK7M24E3RnxjKHL3qS5TzcgYULGykFja6Zje",
  "key25": "3eLhBsMwjJDpLgBSSLmquXoy8VCtBSpju1n8789sqh4ttJ5Bpa3MfXrYzVwgxdohXjZoC4YDG5VGUqVUPBD7nBXz",
  "key26": "ToWcWjwffrTFR8CPJNKPcWcPyK5dW4wAHHpxg1tuaBcjitfeiFiWvu29wcCTuz5ar19kttg8PT93P7BE74V9V1q",
  "key27": "4ZvoG9B4aZR8NaC6AnYZe73ARDpywuSBKeWT4E5J6qFQsEytDg5WkxdTH6vUYGp5TJjtMk3nTWZALUyw1bEiFzVq"
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
