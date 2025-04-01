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
    "9eWCFuMaMAZNrfQWPRGJdsKigVsmiAQ9yXFfWHwsVMSdGUKc69HQ7LLEsTeqmPj7wKFeYA9BmmqM6nzHvKo4EW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eqBEAmjsTsFa2dvWfcCnEadDBB6AYtzpwE5o8JpCFscLqiLTQcsrBjCH1FP7MJwXcT5k5ADjmqDS2j814rSzeK9",
  "key1": "feG9rxEXpTPGjSSpv9B1psZSJmR6pu75biTnHqcteTPiq4ozQTNYeZY3sTyNWqvL8JcB6GAf3kgDCn7DLvuQxLQ",
  "key2": "5yMXSJ3hWf2uv28Pa2nxeCUZYdJpgAymhMJqjrCZ7T6NdniLGfvAWotUFD5p7dPx2MREr3EkLjh5jsKv29XRM33e",
  "key3": "21anZv23tcRVFFkzbQ8qGdtfChrKvPSES8ni5MrFp6MNaPtH2wvWdwcsHZL5nqUaLzELk9eRLiLpSSXRShDfRc8p",
  "key4": "3oZmNYfsWN6gcQjpBDdJuFhtUz7uKp7iwFNGWwiwCYJRKM8SSCtGZXs8ASkKzKGhbxcN4XBmyDjpivTVeJuv5Zph",
  "key5": "5XHVUcpqZgaTz9NK5nvBuazGrjN3daLL8PYnJ2JkswCTAwiuXbvmu4yXLTxvzgb3pEeQBs9Vy4L68FV5haqELXEr",
  "key6": "3FPnFRnafxeMrbgaiX2z3Jkqho1RZQer9ncHuzRKwrSe9p7RHQa5HhmesycoNtBL1QvACy4Btnkf1pwrCbSGBu84",
  "key7": "b2vumEeusRMZBYDj2NmG7pnXzurQDKwVvRwF5RnbS6RCawetF8AWnfHCAEAfTaBjCEh8zYkwLikmV19rJqzECmr",
  "key8": "5jrwi4WTURqpxkfAzMWcLgbPqnSW347tqMAr1W3Gry9FGm4psdXB3gUa9RKXJJraHNimYSBDs6V3q3Tz1MS8qh7K",
  "key9": "62BzGJWBSXkP3KjvGgzsx4wiaP8YMT3zKzstzzemeWEZbsMsSGtQZfmJXGxMhB2DYYibNpVZMrDdrhqDNKyd9Jq9",
  "key10": "4VJEEX3Ye4PJXiQaGFhZQhTW8cquSnrb1L1HvgBUCB8hnCTZbP79XRbfWeedJuYXBPJjLrVzWg8PdTkBNv7un4iN",
  "key11": "2ggyiTpjDAR5yxZq7w81UaFTWVQAyR9U7S8L3wb4gBqLVVXKCPbZVkW7gc3Zvzvc2oFqSHbq8HtQeB1ADJPhrQGS",
  "key12": "56xZKaBmj32UfCrjwnLZops1rwF1DRAckCxHPMfmse69bYTbkUvUMNSqtkoi1UXjsuLPjc2wERDnL1hA9V2zD8ax",
  "key13": "4gJCt4VqEDKFJ4c6AHWm5BDwguhbMtRq2snLbN2PU2UtVFk1tDiRNpjnGSA4wJCnAgr9dZHYih94dJ2yDvx45HUm",
  "key14": "2SyWDjBp9tbXg6yckV5V9GGMTRyvTEyZtnqnnx9HqJpeVsgCASdpiBKpoG6kuv33QMKD7evJmjXMiM5BtegapfSE",
  "key15": "2VfipMadmX6zSXRXEjdSSvwNJbJN8koAKFsmzUPhw16Z4zeUK3E3Ai2sHLhBcARKda7jw2thqEBkK4frLToNCP9A",
  "key16": "5DWYbkKDYkchKF6Tp6hj1npGJvZBG1dfnYZyw66BQjszYXjKXrtfG7BvkbpTVWvGycpoeVq6kpKfZH5kLLmRSgwo",
  "key17": "22yheVrbqGJV3pMAmKZoJN4SUQAJTV6Ngt2SvaBvg6H2RUoxZCtTQVw89mowW98UfKe279CbaPy4wG9BCRaXJz22",
  "key18": "6ssVhnPTqKtr71vkWEZVqLoJ52UPxxdBVffiVE5e8G7ZALazrkKyH5fWc2ekGHKah7j46a88kAkLM1gJf62w8S5",
  "key19": "CpQYmUbhjexUCVRgq83WPNxrHewgU2RwfES5ZH3GwmretR2CEXefRsYx18yuoCrP63vjB7HvBDm2JLTMdynDZnz",
  "key20": "LBcDvfxtudLAbA5ekdttKBraHpEyFjvwGAAVrJ1cBm8qCK5SJnzyrMZHhg4Rsk6uNwhMPsjATPGc7xuRSto4Akr",
  "key21": "4BKC8tNGtRpt5iSZiRc5NGKQxiHF4EQWo2bAQNeCGCCF4dZds77waeuUdMjZshN5NhHwWWtgyJS1iSTyKKh7747g",
  "key22": "2za7yyFPCVRVCvC3zmB9Q7HSXAdoh2DntZXkSEJs8fSkM1ymiWxfsueMNFtXh3c9LKdhki1SedTeywMYNkyYauV2",
  "key23": "BVGWk7NbnfvTucXmHgxcneUUiB4YVwYoP6GU8UAb4osYbGKiAd6ZHiYTuxP75MxuDtKg62nEe36HGmShD5jRto3",
  "key24": "65WrQnXypR4DRzePZwiKPQSZyhMN9Mo5rjPThHuTjEZYBnd4qbNFUfJmT6hoF4YhEJ86dmWDqf2vrQhxPVBY4aAe",
  "key25": "Aurc5tT2Su1BZRGBwTSRA3F7nD931SXCo3wNrJYuvbRZ5FKNfUJEjuWJd7EZTZ46ESUBCUHqSQFKWZSLomgW8xP",
  "key26": "4CxLBBTiQGp7FhERLypMNM3MLbBhgw3fcPG7rMAUyqertqNKLa4LAzmVd2qdbxo9mBu777Bf5aDsRKq1YabDA6PV",
  "key27": "VhAVNNnwPsDpbqNYh1j2TevDUmDCTwxQDRtaJZUh5UuzpQMsc6x5xRW2RthTyDJSQZvxYtwA5kd5imwadBnoDgQ",
  "key28": "FSVQ7vEyc13mcV4SXwNzLXnfxLCWLhr628CgbR5hMemYViH8WgE3CMrXuP9CaRNCRiWEx9sz7LXT29Tu1HhqEKh",
  "key29": "4fSpw9ExBnyTD42DxZPX1nJfhLua1HyoF1G9VH9tjskTmSn5y92C9SMBz3zX7daqwxuUKoudUWhtmYyuokQrPWyN",
  "key30": "2JnCg2xHYFj3W47wBH5XpLmB2Csmu3LPBNi7YqnNLcpZqMMSFB84owxhewZsdLZrcsjszg6LzLL5AND5CVXDd8pb"
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
