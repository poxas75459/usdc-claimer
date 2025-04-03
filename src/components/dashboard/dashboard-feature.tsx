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
    "2GrrhYY7iipiaKBZxNxh6YSvcuMhHcDFWSJGrf4t6U4dCUUWGiMBgWexHDkBgQnUoDvgrGzKwPNWZFjbXKRo2Wni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ECD2CvfebUuwBv5ESEzm8NFRH7pxcrozkgmS9RxbokRjBN1SX5srMiTK38uMa88yo5MUZQBgiCKjbtnTeqEKdB6",
  "key1": "3oGEyUDNziNALRLYdPNY6ofgKgUfsjWWFAcoxQ2T1YEcDtpqTuJwgk4J1wsBs6hC5GoiFT2txCkioWjgVnudNbs1",
  "key2": "3zuWVBKLzCikVv5uc8B6kDHgkfb7L7E8Vju2w5GBTTSgg3CLjwE1wWzb7BTcANzeRGWAHoqjybNPMfKmmFZWDmtE",
  "key3": "56cQYSDjHo84CEJPYTPd95mdGabz8LEVsGFbZKuF1fSyhgupZPoUKScSaoJJXDaaX6RrfzBT8kyehEPBdFCoevYN",
  "key4": "5QKzTUpWz4usHYjySRqfN8aiyPRSu1ES3jPstxL43xi1gcwyeHb36HVBmugPxRHPkSn1wBymGUJXvFsiwffQuUBc",
  "key5": "28pUUT7w6RxVPPkjKhkSUs87izpv69DqHeCPm3Pv79L8TFpKJXa7q8hgGfDS7nCw1MyQjw4HzTSAntVaPkzskp92",
  "key6": "AaGEkWHbL9CHwbq4mLitdeq8UryxSLGq6ThkXUWadD38PK6SvbkkNiV58xC43urAzLygUdbQDiyZDtLHZ3erYWu",
  "key7": "kX7ZwsMPPG7hWcUosM81LP7tYuJKsNDx7Kt2x6L4b26hJ7p9cXwMHJa27MmLTC6MLNybZpEoCiiZWhSofYQbWa3",
  "key8": "5VywzseP7RdtYto1NK3TShjjWJeXT1H4fD3qqhc1qbvaTcVgjMSGpXabDP1rforvLhsQQfdriwyZMEmxT4F7zS9C",
  "key9": "4v7pWynPkgH4TaznoyVEGkPWZNtcemUJX3puAn8LemRLHPDayNano8C47osS1S1B2VRfE1fjxcsYrL7ZFUccfEuW",
  "key10": "3jvaQ6fRzSM8LpuBfBmeQQdZhfZziUrpUtH6hWkvc5AETVZ6y22nYybwYNG5sCY5MiBmCrAVoF1ToSr9xtjmwYXb",
  "key11": "3wNctiGjSfmR7HiovRJiBbT3YsXk1oEq8zQ9VjvNEtZUXwzKHNbnEKJ7bgDqkAj6qvJd55qTfdRnRACaZoJyo9xB",
  "key12": "24gUEAaz2ZH3GyAwq7TCGSjePTJpqeE2wNSSPQzZBudzrUh2nqT4osu8LNGr8QRp9TzfpudoKGrF5beB6ho3TWiw",
  "key13": "3rWhZQ7xjYbjf6KZsfCp6FFVmmwG3WMBz3HjuCefw94JkJw5vNauPpP6gtW8ivrn8FiqqnoWwpAfFRiFta8HST6b",
  "key14": "2Whnen7CQ8cJEZ2eyxJ3uz9WuUjnLxjCjD5gS6UxBjPNt5GxDwuoVto9HNfNKTcsYjc5qw6oBxEHBTJBiZikHq41",
  "key15": "2B8ZU8HewGGQ2BZAFdHd61Dbx3234gZeDk5zzgEYwX5c3kqajfSvhp86racLKWhGXqy76AoBXwC3HgKFSEqmoUPZ",
  "key16": "56LiNdcKEmwi2ZCAyMTBHkqTPoQYbHw3pbcWxGZnaKtdXvALMcmqE9DdwynyLUttS3aFYVvrpyyf1CHtwrGPwnJq",
  "key17": "5ozQMrQnxHFNqNrBRUhr63eF8aBiGp7CCE481CzHunB1nsGiPb75h4ArhwcozpD7TgxuXiLhWMG4n6yjqsarHAtD",
  "key18": "2oBCPtDch9L4BtyLdiM8nGjGcfyZpyggA7mT9pUGBAsLwdAJaPxG5tXh27WzQo2EEfrsky47kswXPg9cBn8xgCQp",
  "key19": "4qQr7As4ahQhvCSNHNQQFwkgnKc2Y9p5L6HzNoju2FKkFBJtm7BD33X522rCUPhH8mkLCL1sVBGj6M3Q91n2cU86",
  "key20": "3uznY9S21xJeF5MuUZQM9qLwPi8SSuwj93x2wRREKSSGL9b1ae45cata3MLrDCXZ8dRexk6kgG5G7N77EZSQDo5y",
  "key21": "A79YUuHLWWdH8QEN69hGUFW2NqYzBYs3oYQv6BceKwTbjoz3cuz7VVwocaS4RKgvgGmvWAbrPfaauCfC66e6YS2",
  "key22": "4Y5aD4EyxUmPRVqaJWejcNoe3yrsmMkx11SEsXuhCyHzooV3Df84XSgVQLd5ZS7GqhGm4sDYk2JbRC1zCn8WJ4cy",
  "key23": "4HJ6uYzhiK6caoWawLhLMirdpmXZC5Ez66ytRk4j1PBHcgwukkxYDBxARPcVMNSekh8VkRE4TdapH4QZ3o2UPjHi",
  "key24": "35ayqpV6xt3je8JLGUeTEukzDrm9Bwzogjmuopp81CohQb46zFq9uoTmK1PsHU6TW2d9QMNdfgpmgZSNcmR4DCMy",
  "key25": "3NUzd12PYrkuZaGstyQoq4Bq8WGvZTianTPaCNWKYCjUskAKzUoiuJz4RkNZqD7EgeNMrAvA3pfTa5DAeHNRBaVK"
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
