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
    "3PY9xXV4ioydEE4YGQa2cqqqUYvLrmSYmkFZS3KQ1HWxmgTeory8a5u5LKzPgHLABEtz3diWRQebH5ox1XkWD3jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G4csrebURWuMK9rZ33xowoF6fFiEcgzsvRWBSGBGTf7Byfox2w679T5s4bhYobAaWchB8URqD85wHMJmEXJmZf",
  "key1": "4haPvbdPDvUaX8ZzP8d9Aqiyb4HXb82s41SG21iM9jXnEqB3jvpk91zicindFyVXTPMxueJSc9QeqJmnhYyNiB4i",
  "key2": "2NtWCcRnWM8E7dcGyMGiHZj5MTeUJQDua5zLUKj3ybZN1q5do8KuYoBc9McfSNaahPwgAoMDzLxwYDRoHi1d2uHf",
  "key3": "3PspZrYv8ccxfniRSf4HenWGRv3UyngZe5FffvfA2jNL3ifiAhMZhZvfkQTRA2ejc1wav5oW8CKZdx6mKt7zWgEH",
  "key4": "giSyB34EDuzCVmQs14AyNsAMnANvSaSNpqHWQs9M4BXYLKgj9dcejy81F7m5DBC5MkERuK2Cr3g5mmsbEoZ8rd3",
  "key5": "2fvL4U4b9d8EPnmXaJ5iWJWGzoDA6285fT4PGUCHGGyssvKtwby19TE5aHiC8QnYBKEQVSqSv2JhEMaz2MDe1snF",
  "key6": "5bZKqyoBpXPKHZ3SAsJNS6sfRKgJ56riXTt1Zt5wCb8M3AMd6TZGWXXgBKtjafVfFsFmZLhaFWABvD8RW5sRXxTV",
  "key7": "txBov8ZPMtcjYHZW33Q1S7fYMcatynyQo6EydYGdXn9iwUe3nZYcW13q3aF8MeU4a1c53PqxvgFtW8ktBWZubEN",
  "key8": "5x9iaQ6tv32sHAaTH9vwKufL55cnjgHpeXe4h59nje6nYwPkh9xdKkSDNgt2wvkWUD58kFH1AawBDQ96onijcyk9",
  "key9": "5fEWxLBQG2SfQHWnL5YoUxArBsHFJuPuPjvXA5jTCTzNLhfCJ7JEno5GEeDDhXRJAXAg5oznaf5VUhpY2uwVJGv9",
  "key10": "34fbjxbxqDUQAPXXZraLHJnGUBWaepCkxnUrTt4YH1TZqbx81box8bTdwnxNTJWCSVUpKaM7b7uFvRyy3okXCKKS",
  "key11": "3cDBAA4UMDMcmKdKRyg1hL2dLrXpAonnUsMd4xQBis7uXVvmtBk2n9XKQEJbL2RWuTfSNajhWFWp7HwXqu6jegjL",
  "key12": "CSNtAhTs7uH4AyyFGxH59m3m6PEniwTTxcWwgbUaujP25EtV7ioNqsDHsEWLnwCtvTotbNN2XbHyrJ46436m1vJ",
  "key13": "5z9mmWJNTtsWehNV3cw5oKrixxm2r1imwTWkpzi2SPxRmcBcaMtKCro4sgSd1auButtZpsBJgLYE5BugGmrGSKtQ",
  "key14": "tRuih4cq3qbz3sJ7SzRv3iDF25RwD3aNRt6riMM2XHxSpEKuJzPxa7BwdZom2M4CDob1yUXaQj3iSfkmEwFH4xH",
  "key15": "3RZbVVSYJykGkVEKpybBHy4eTivwwkMm35npoPVPwwFxa3YP3g5ViE8Miu66nnZbkCWoGdidgPLHfX6YYuCp8kR6",
  "key16": "bZmucgDjp2Ry9554jmhx2CMoxYHBHsoCSow7xHeXfhmgeQJ8XobUGi7Si2bTd6oW8NFBphF7ffxQuBortp6vgUa",
  "key17": "3ZZ38Jjf5tcMLhLL4Zp9fAUJvBCk8kVtBDQVVxDS7GBZJ3XQx4MLYLawCyP569CZ41aqo9iwJJSWMinHLMNAew7A",
  "key18": "Fp7metzYsi7hcN5c7aQ1keCPxuBhDJocXq9d4bCJsW9ruZLRyDGLmeNvnWXuy7y6toGT89Mc5yMw2m6nN9tvyir",
  "key19": "31SaFUFtkqHktJWL9H5mCQnfuxQ5MLsF8nBXY9c5PZsjEcAcnGGeNw3prBuE9wcqrDGHcDXo9nBHZzF9JkYj3La2",
  "key20": "4p3NW7WHo2h9wMtoBXZ6pe5e6JvFu8JVabyFjPMcdcWwsp54Ff2vqD9bcwWcYH3LaMnnUKbmyTCJZoXRLiBvvc9f",
  "key21": "2zPwg1JkXXahbfK7q6F6oasriQ7jxnkZDfXnwvyohJFCGpx7oHrJqhCyRWYr7aNrPxR2ebjZeKwCkqaF9C9ESVtu",
  "key22": "4Kov5L1ZfniegRiSAhf9AYBPKvd9TkMhPGpgG7XGp5EN6JjErUXPD7CAaY3BgM2JDZKdaknFKmyf4TNAUX8a5r4i",
  "key23": "4qbkhNoFgSuHA8hzqMeYKthQBsoQ3Tb4mBnC5NBVcdNizMC3Z8jEa5bUL4yRjoj9ymBPYw4CFfTB6W8pQqzvoQik",
  "key24": "2WJfmjYrc9WNjPeSm1tgVcrmPn8XhHKdoEGzmTnzzUvv5VKrpTAKMZWhG8bWVwvCaTTKUwGDUdZiDKGqC5DWz7ud",
  "key25": "5SnaEjpvAcy4D3SN6SnbjZT5q3wnjEL47yaTcqkN4D7LitSf2HZrfWQQBfFkGEHoT4spbePEXLmMjM45NZU4DARo",
  "key26": "34agHnnK2rcEiERA3RXtZKTUVuhGw9rXJxSTNjcNwR4SrpGfbuKofffdaMcyUwfoGXadS4e2Jb3ti7JbfcX8J8RU",
  "key27": "5f5saBu7bojy6oXpe3kQjiXBPdfQcf4dGcgjdHseDD6jz3gLuFQ45wByMV6iU8pnxLXJWbQhcgjyqSpiq968oxWa",
  "key28": "5FunLReWYVevxNMxVyu67UThesLSH48T3Ea87EhxbPPnMN39ugPnkZmSkirXfL8d3cLRnJ7aMZLqjNcGdfYoWdH5",
  "key29": "35qmQbobTyTkvRmBwoS9esJgBfnFzdt16zBwVAe2HzREzyoN9y7VrgLYjZLtsQKzCTHPg3jk5QJeUC711GiwgTYm",
  "key30": "2YrPFxNT36Bdk2CeFzv2uGEyJVoTPFcfhmsMUPLmg4KRWofHVW2htKpGZAwqk91KAPYvGPMewWx91eBJ4RLRQjT2",
  "key31": "4rvfKdmQWQruByhpG4bza4p9RNZDfuSBzqYVAJs4oAPUDegmw2RdaoFW1QimNMXUEwa9ZDawacTpGvZwrPhoy9Jj",
  "key32": "39pRCFwvo7HnQ2EAt7z4wfthZ2Zv6ndh8nRcQzPniDvod53odytCVji6TU1fUnKXXFLcMS5r9jEx2Rv7pP2RP6wf",
  "key33": "3zQq2i7ornU1WngSCRxhFEvkz8Gc1umkazsxREWuHMZjoW9z1e6c5URDjcXNz8VkbsPd5ozgmyFUkuXFNHkCT2iF",
  "key34": "53fKokQ73qepzy2NJVnkZvVbMsczWEcTr8ZxEo9rRVHFsdq7yvzQ7JqWN4fBZWR2o56DTvgpHvcYsvrRL6Lvd7cc",
  "key35": "3tme7ta6fGb3HGaPhDaHpyUQZG8b6zijBtzhLRa4jTtPkXenvTyRVJuLt4e7qds7U9gdErfn4TXoWEgi8kNitmQu",
  "key36": "2sSQpKTUPnaNMWPRK3VeHnDr7tf7jNu1DTTYpPP2c4h5LiNys4WyQBtWnUapFH9heNLiftLeEbrqKqPJGW7EsmKF",
  "key37": "aekuikzwKf4QGFQ82Nu7vXEbwpYyAooogzjPfMJhdDubq8gn9sjcfBiiCN1npShg8hscohd63ixoXm69evsLD2y",
  "key38": "5w4Uns1eY4EwJEVikr2cAHrdo3iWWoV64dfyqnuHSELkpMHtdXUM1W1HVcqp1qz1RNsYWqUag81uW8XN5RSSztSY",
  "key39": "4cJCbr6v3Cf6SVSUdwam83epa5fYRsv4wEFEF8wKJP322bXF2B4WTj4SqW1pkhoJ6pnA6zqcvmmCn8QK5wxqiYBM",
  "key40": "6Q6nbyDfSi7UsLLcAjZBBjmYq6UFZ1dEyfT5nsZrKXLP6xvVCSVhkndGDL1MAPHrRs5iqhssTFoF6wLUMRPheTi",
  "key41": "tJdqx7cfztjh7AxvuNs5tSNZdmfqv3d1XphJAEt7WGWJLSSb3NAKMiaw3gNAGXCeTw7fE4sv9YpgUCxRcgupLVN",
  "key42": "39mZ38DnKGKzY7YxWo1eKVHr2xhCtDiVetj43Ue9ZeiArPYgZHmkBqCmUW9tWXkdfnQgHKUuWpbqsMmLKDDqpXC",
  "key43": "48G8DgA8grQgHhQtW5aeSuwqYnJhzL7T3VmPgmRLoXDwZd3yWrfShEL1nt2rBfV7hQxPWE79WkxEsFczsi5rYWU8"
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
