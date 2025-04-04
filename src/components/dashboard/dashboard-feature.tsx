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
    "5PiezyqqrF3CnxjQ2C51ksQCmTWtji1JTfsJSmyzRUda8aDwEveAbfmHEiTGRhHu5hTjymoMDh72fBwQ2DzTEAcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QUfHskRYw8ftjKhZ3ZMQamLYvBgjm2oAmcwTPdjCgfH5kzW2rXqVafP9mJkMf2KDrdpUL4BSMK53iHCbduCaaaw",
  "key1": "5Ns2W3Xbw2nTB92wq1iyLLjDpy1CnxvSdS25vWUmjWhNgCpMfTfMAhTJbp8DMqmQH5Nj5MFvUWYAys9BYQXCJxWi",
  "key2": "4v9KQYC3g8FCL2SVkUpSem3LfaWUGDa5X7DuMdqwandzxCgQRupUbky9NMxtLG7qRwFvBpqqdSsupeQqWJYCFkgs",
  "key3": "3ccNAFRcTGHaJFWvZAiT3unUkfTrgECR6xAqFnwycPYYw3rMjwVEpmUU48U3eGZM6VxCLr3wQkqZF5MeEgtyZPRF",
  "key4": "2s1fbkikawMVgL1uJ2QQvsFsUXPE4V3bBGxtwnVASVsDDxZdpGR5HCbSS7uNsd5NRtYgQdnXJ4EA96o1UTKnkwMz",
  "key5": "24a5V3C527nZxUzv9554DznhrsWWmJv9naLdQkayX4fFkLVTtbTq6WKxVwkJWaosVM3usQTRTbGJYEnHC3QmBY5p",
  "key6": "r8KQFWK72zsbiJNTyt9iSM9YWosfDLZA5xGxEBpP78Wbn6fYFHBLwnaEeXga8giqRwAS6j9QofDSgDkMFHpgPuJ",
  "key7": "4wooJ4Ui5t73L3SebSKQzPVdE9roiCnFjQw9zprmpEkK1BGQ7RVrFJYQeFyLBEynk5Y5hv9HSfzComGTBaw2zdMb",
  "key8": "Y132MGFuae2fo4hHWyfwYynW9R8PepEoNGWDDPtZT8LzEB9z5PCjVWxoQ1fhFZSYmewpT2JmywdKdM96pbMfsn6",
  "key9": "WeWeRfXFe2H8zPTSCKZqWUNyYWFTEy8vSzui4TKW6sivk72HFRhEZD6x4vDb7U4zTxHadQ3nSoMUgYQ6tvicBft",
  "key10": "2wLyvf7pdrsMqizT2XAviNwQz3evojJHaZWwxuQCsaZWPEonLRXsFRp8THScAHEUR4vqwB6QqSSETJM8wPUY4jat",
  "key11": "2XeUTQyVScBAUu1SMBz2BuxmD9xVv8q9pnkrwYvRmNrTZywBxewhwhf5yPogXG59FyL2JFVZ1GESy298csPwCbtN",
  "key12": "3SgZ4PqWq9EGTEzQVxHAMMUEh4ARFfhhZRH6Vm2Gq7w3ygprLijotCyxVd7AyeVejiJuqbEZkuTTx6p8EbsR111s",
  "key13": "5Kjk8jtZfF7GdsXKd1waAS46erA3kTASFdop2DDnZT8P1vC3ta8933YWbjAPYGasU24aU8NwevajHpqo6Vn5tqTi",
  "key14": "5nPAgnpiYhuakMFwLeQNT8ibbKqPLosLo9KpLhBKN4gUwVZyHgjqgM13E6igy7n3BdRWWjApmeCrer18cawVTRQS",
  "key15": "TWfTsso6U2iMso2pX73rxmh38McxDUqJyS8ffZ6d4fFjqVENXriy7AHQQhAEHp1xyr6H9U6138AzkPLek9dSBhe",
  "key16": "4Byny1Rwv5UJNuDoh3boUzYBYSDwshSRDmQFRZEXGJiBRBpuPENpa6t1XjojGQEHg85khFSmvQgcQLVSNCjSQpsY",
  "key17": "2zhAsSwHAXSE1AhYtoQjpngCpqMmKXrQr3bUuVhCGWSaVLBHJW2ZENuT5zffYotU1fQYZv1Yk2GgNcY5SB2sh49u",
  "key18": "5uckd8rZ5BWwFmKc1anDtBbCrA9nsxufiUwEgjACFzM3Kd7nznn3FbKcbQvV22VEcefPoc6AANS46jknF88QDpGU",
  "key19": "4TXfpWto481hYGejGSG2Rjk3afSQu8TVv6f63VLmzAvucT1X9pXSHTckx5RKH6X2mrTADTRJLFu6Di1Gb5jseNg9",
  "key20": "536FgjGJ3mYJiUs7R4CJb1dmFHK2WkmAx1ym5YeVrw3nL1fmkXSUssYiV3T65YVeK5vPD876g2TrkruZdL4JWAA8",
  "key21": "5hL6qwkZbUShbDz1cyNTYdFYZ1b8zMpZxSBtXPXPVcpiwrcd5fw8mrZDYeecC31e5RzafEnfqoTapin9BSDg11aC",
  "key22": "5kF8CUatUWgAn94TGftGdUKViiVRGLbvXwDzV8GtuLpwsi8HVFLSBJrx71Lfr5TuvYTDB4Ux4dWd6XubTBiAL1F9",
  "key23": "4JQH2Q3Y7u8Fcgi3einiDgF5NCMDmHamcimmDjJUapBp9BaBjjgJWMU492CZyCG19AnDchhiwDWs3PRx3i1imhEX",
  "key24": "anvZBpVXip1VYDFHRKapYpW6HFCXzruWRuLHRUeTyEa72zqDCprvXM5pBZNdCaXUoEfsVZJpdUheHnwEJP9eSkx",
  "key25": "2xBwqNYKqaB9CEUtp746ndHXkkWWCzmhZEoEe9n4DTPKWwfj8DQq8UUQcDEiXBYfmu4AqHSTMmnicyUTEgxvriUC",
  "key26": "CTqcq8cQjo2rGHtcpLHgpypjLCr8bt3qpCUQo45nWKQLTMuP4XqK6ety19kxTq4DGo9hhsbkMTcM46c3YEEnANC",
  "key27": "2kg46ChzWpC3dpg5yJ3gkuHKQgDoqDcWUarzBnicbGDdSEGN7vmHRiHEutQBnG8d7QM1WYavaRumS3phNRmswF6k",
  "key28": "5g87hBUDbxzBbXMpRqhKpLb8Esx9xeho8fUbnavdRrPzaytv2CGb21YTvZE7SpZut96RH7zAQRn91E6FX6ooiEsj",
  "key29": "28gybXvGKGZhHD12Qzk5ndwjbmw4kSyUPW5zGEZRko9beAAcL8VXDKuZr8sB1raG4bpi8JZbt6ug1oynmxWu5nGk",
  "key30": "4ikJLDAWDf3VH9UycDuRZHuNPqmRYEqELAnn9QFByWwcejoWnXbihwxwVwVzfNc1fQs2thTaLyzKXCTfPXTHA7js",
  "key31": "5hD493kGsRKiihrUsBbahzePxDhnc6M6nLh37xEUF7yf6QHV2UHnhYrgKgXPR1BFT2RMqPhTdYW6akvegx5BJ6ve",
  "key32": "54MNtekQuR5utcT5gWJXzreZwPmaLJeEQ8amjBj4X5Ag8tcE9aAncdXxS6xf3JXhzedvd2v5r4Zow4rnGL5Zs5aZ",
  "key33": "2fmRx613jbTn9FoLkW4X1P4wy29rwWNc3UtJRrAoi4KLg7swtKtX3XPKajd3PmhKmFbcBJ5pac868RjjjJVYqWfH",
  "key34": "4j4QNKiS4PEwhXsCqtjZpmfBZrmjVgnwbShGg5cPZPGmouL2WgCUqt2vs4y4hZxQkqg5vYby1LtM8G5aL88XkaP5",
  "key35": "3VVbcfTuoTVHH3CDkC71Dg3cXvgVTsH2uqTFNxKg5AeTvCd1c9rzYGVGeeU1cRgjHtPJvYYqMshz7h2XveJciwhy",
  "key36": "3eqDN5rQNePvrGNFAdST1224iwxmhHsdaecz3FGYiZb5wrwF8H8n5WfujjmpBzogV17k4etf5JBShmjog6zbHqNT",
  "key37": "pd6rL9DWnC4TSZF4R2n2395n8an7kNoMLNQe13MhDf16VJpkhZDkyq7WbRzuBgkXCffvHSv5RCMPAtN3igZwjYG",
  "key38": "MBhXhybXfKPsQF2ckTV9jzgj5kL5JY3KfzKXuSopc4gA2KTimQcF9gS79kjjX8wh9s2SV4tVVNp32JtMdFHSRws",
  "key39": "4vJjG5iQSoXhSJCw6KeEwTTKCYPE9wHGVoKDSTMs7q3fVKVZSiYVvRLHb4XiWsNXrqzYanVPheX6RYorciDCgpd7",
  "key40": "2pxH7x7Zqj16XuDPc8wjPGQ9FA9Wkn5pM2yxgk8fbPwJSSzV8smETQ5X999DpjueXVw1HEjcodpvGgRajCDQ54Gq",
  "key41": "3YmCwgWKzwrH8xfWmDC8Stb5FyQVxYhzqNBNsCuVWQWvbtifXaM8YnBL3Np8XM844uFM2TZ9AKzNGiBUG263CMFW",
  "key42": "2wwhrnLtw3FSG9iArNiSvPJk4pZGFqUhdjrtbjjdoTNnkjMG9NDeCEvg6nZxYG7KTnfj6LmwALTUrvH6jkgaH8LR",
  "key43": "5b5wDhuJdFdVo8FGStw2ybAmHH1gSrwuQXgeMAoaVPxkPwEVEvDFhLNorwBFnYsNvUgmPGutAE4T9wC4anmPBYtg",
  "key44": "3MGbKukttErRQN797EoGaX3StzLQQjZ8LQeg757h59BvBkr7ksPjc42zbsL4CXY9PLKJiucd8SKAgrMnLTvrd4CQ",
  "key45": "2zbpn4Bfk1Y7jXxHtWbWeQ1jyqCKk9mgHZ8wH3V1tKno3FrBHCLLuRcrJ6vYMDCJoLVHpZxQYfzCEVkWEbaHqBVt"
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
