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
    "58uRajqrSb68joXEFfUKtcVWFVCVvk269mxAL4dqc2foGqkrPBarNKPZfLY8mGTKEJr1cwtgLbaFHr1f88MGVocX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E1mrVh4qV8tDhurqMU4vBQrHHqL4M3bpvRkYvLjSVs8iX8LN7tBriUqXeiUu6sKjJ6n8kCu6LvdjRrELiJBeneW",
  "key1": "5P4YuXLk8TqGbXEmFDcVkKKS3G6rq75KPN2yNjAvmrfPtiR2EXo64gfd5xXPLAfSJJRBYscVjg9x71vw4xp4nzot",
  "key2": "49Cr2W2jQvoYnxtC31tkeReN5VCB2AcexSgeV14tbyZJHUVkiF1XU5XFhvQZ8PbAZXh7g64PATQsFkrye9B8bNoA",
  "key3": "5SptzpFsswJ7oM8TKsZdHuR7YvwHvaj9y9JftJTP4g5F9mp16v9CYiUZ2MjB8gecupvGihrPHwLp1Rbm4kvgMmtk",
  "key4": "4Yu7GQLMq2zHeA4iAjqtU81TSSUDxLMsxQyTYt7t8bgMxfH2fHbPzK8464owC63RnkiHh2h9rKoXYuGogS9VGNow",
  "key5": "3jdKwTap8cAToCevvEZA7HAUcQUHHJS2CQLtBd7sfkPrudohoaSrnbLNbNcW8KKcqUwA6jeuLHrgzfTYye9Rdvk4",
  "key6": "d1CsFHYWBLqw6x85B2mBvZnhnYmzj6YhhQigMkDkeYE9D895WTu93WzN7a76wDCcuLG2cLg4BtQq9qn4ai6vWZe",
  "key7": "48i7TzhSu7jqSV6odpMyGMp2k97vknsSz9DPzubaa9D7ezPy79Ra9m8LKQg5X7VTaCHqNTjpfBAY7JYmuU642iP2",
  "key8": "2yigYehcYSronaUt1GySqzgiZGjunhaW5khL65oJfVTYu4Re2hrnx2JoCW4rhprZXM6fGVudRRCHdbSFhP2R2Rub",
  "key9": "272PvTJo64cSUuT8Ef79JbrFEPci4GgKoy8Wjd93nUgAqrnqrpsmRG9c2VkdU9TVnjYZbjUGftGE6GUxoiyWxXEu",
  "key10": "5kB9B7JfVyi4L9VGXdYPZigTuaCY4FvAW5pU88VqantYaEce5fAJbMDg7vnV64c8jeCqxWGFarfi5mzUnsx4yNny",
  "key11": "2BuHCHJDdVNtsXqZCMGELm87exocfXQCW3yVVdmzXNjRnNQexM7yVZR13d3GEoZSuSZftEQ1TgQ5qMkqWrsfBLLB",
  "key12": "2egnUcFsvoJ5Huzb6U8GmEZr7W8LfeVdRDZiFf8V9HqkXMGhknzuwKnU7N48GwB5Q3kqRsDuQijecTEzxEgeaHs1",
  "key13": "qgmkXLpWKMTfpA3iNrT6fKYe4E2gJRxYv2XRyB9v4oWFLBBXGfvDwsFehBVcCdNXmw3Hodq5ewi1tXy8nrauvAU",
  "key14": "2sUseZFDZqYbqeTywcXkvy281RhTykymbAqedKkB9QqoUMDoZAxJL5sGL29abHxFscb8uydNJJTWhY2Ja16Bj7Qa",
  "key15": "2yPf6nA1pPGhVDT9T2ts86aMgRBfmiMdqDcM9ADaXxxhjUbgWdaNsSxtPPmXx2atqmHMku1UNSFheNA9WbR7xbDv",
  "key16": "4yTg5NBc5eZ9JaU7fuzV8JMiG1BGtUyRoC3h6rTkCbZvWptymbYLket9GCHdhdYJdEDwPdfhquoJRpqQCgAEinDU",
  "key17": "2qBwKnwvqirPEZPxFhdsZpoN3Qo2UjcGmhrk72XWtTtofbTntwPUiEkLkEsQJaHw8kEHanSNspG31r2EFHUknTUL",
  "key18": "3xzgXdM71rfmkXBtwtzi3VDvvzEdvCRPw27AXJM7aLjFd4RSZBAyWfJGmHL1ccCH4mhnJ7mTHn9Rb1e4L5VYM9iA",
  "key19": "3M7FL8QovAkAkRNvkbZzoEgXcSLXoqyWQ3a7aYuJTD42qybUfihrykNtFefmvwPsdePuDuXJEc2DDVv1j5144Qfk",
  "key20": "21TnfBhuBYE6NVCQ5QMqSwTeZ4A8dk3LhRrxX1c8YYW19gSoZihSdsywif317WPCw8UppFhBHvd6bFozuwSSuEBe",
  "key21": "3rFEM58wdeBSgM1Myzy3aANjL8dTmysik5ar1xRwwStYgViqvUu1fVSDuKqoTikkwJNoaQa7FXVZ4bM6PgJFmDca",
  "key22": "4MUHz4DY6fPWqoB7oaC1KMCpyoKFTJ9muUDuAc1Mj7ix9wWGcuuqivox3RaCcGUhCjPAfWEmvYC5rMwREPr7vYC8",
  "key23": "3SppZXB97aoRs1apyHKZsA6C5HAEf9VA9j84SjoipH3iC3na8NEi1uRewjGiwLyLCNM9ELgGgq9UH1o77bh3KPPK",
  "key24": "3VuDDvRyyCW1sBvD1NRDhCv6ZdBfx5cuC22DkTdiMPyRUCWfdUX4iEWmCPuBaUfV7SFrFmoQ7tPHFVcFJVE8hmHq",
  "key25": "4dJCeDb1ejWs2ZRLQsHriPD1c1e6b6f5ahEGgK1mKAjmYoBnVf2WfJWQSNFspC1nsmfvGpbBVyzKLaWFuUpwtPR",
  "key26": "3kQwBmvoBe5yULAqNoPzbkLc67v3T2dHuTV8UfsaoyKKsB7hL2gbR1XWasNWWajGyWTd346YNsrsD7eceLN17mN3"
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
