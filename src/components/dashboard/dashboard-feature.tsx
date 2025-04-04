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
    "5rr7qL4ZUDCq91g3R6Ajy5DsyGfJJzdLyyofEfhUZowRoiKAXZyUa3SpcooYzx1Nn7cixw3ZBpWEDf2JQDSiyqau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RB9pXLVrqckUb2Z67U2EYQU8sbBNowSHp1MLrbNAo4Vjn1My5HJXeyya91ppUUVrth91UUp2M3aFgnNnyiTrnBd",
  "key1": "4LE8cLenoUFE7zf1VUydMRLZgxspA3DxPQQHYjKrXQcqzowR9tPkkpo7RvnivVV4kjesyVPrDJZAvryAVHFht212",
  "key2": "2orm8gK6yPRL4yZvSscdhxFrAXc2jjBBqToXGcSZWiwttvQMmggEc3sgqPqtC6KaiPjdw2sseP9XKuUsj7UQbz43",
  "key3": "2cqFGCwLGHcbVJuBB79nHMjjNcXcwZqqZSb9ZjzU2PTey4j3yFL4HvR5frUshNnctxXt95NeKFc53HM73JiRLFdW",
  "key4": "5WCeUZTDGLD1HQzXVWjU6RbqAuDNsY113wLucenTYgPn6fQCeMVQ15GmUDMCudKpqtRFxkEktVjXdJy3qSwyuojV",
  "key5": "3CE82zCASG1tRoetH1FnTtKVATywjj7dA7e8WFZPdX8M2bfsysBg5NofTPHAWQyVM4bWERKFwiXkpmv6kngk9arh",
  "key6": "yqqW6x5po88RG3zLnytpsSZzT7uj7Dwmh7nR24U4aWKurd5YzJVycRbLpDT22dkjCgmoFnvJHEQhzsqjxEfKmDY",
  "key7": "oXkVxysRdt6nJ2nSx65NtEUcS6AGzEZi1U4gB7gwMdkMHpeo5AwAc5NG5cawdeEk4MrYX79YUUC2MHo6g2dEZ1Y",
  "key8": "2wnyHfMBEAVNJgJf9C1AdNXiNMeAszYUJkhrWkfQsivVhscvqY6awoMMowGocmKNs13BbXUxEQBADL24sao8jARq",
  "key9": "5UrQJAXugw3ktsL2DLmXwsquE8V2wseGd3XQM5qYnBQsxLJNPiduZg4Nn6kDpXP9yKkWKst8w1nb1hoq5xXdB7kF",
  "key10": "5JLTRP9v9CWa4W1F5q5VngkRsLCbksjLVHuuMX7GPFGEFXwicwqhSP4L7VgsnZGiRRhboMyS4gH4cMQ1ynmZWo4Q",
  "key11": "6J1LdDrXZ9XChHWyunn2e3ELd9UCEeZYTDzajKWoHDKSsPaX2gd3epi1jjETbWB8dwiU8S1r6js5wraXR92s1o9",
  "key12": "2QvvkvrSJrZ1U1R7XnzA2ZTDGUwkqCHwNb6gf3Uwog4XLRL7GNiR9NNAm2pNVi4Psu45XCoqyJn9Bp7LAeLxUQCA",
  "key13": "5HjePvvRBKyV8CXocNXC8L46MYxzoQjBcRe71qSbwksjPTfStRzimkLu7RxWpYcS7otjaajuzyRKGzQjLrcKPv6f",
  "key14": "2zGXutH9dJujDEBKWGTqoFeVGR5FtdTJRr1HqWccJimNQkfZk4APVcYFTSmNBnmq1Mjb185SqMnCX3FizhdMzfye",
  "key15": "fWVypQ29zTcEG52PUvTAYpEZQhzDEyLJd6cboC12rrEcDCzaxWaY8iqPzVos8cNWUW7EjFFg8Nw6pfGGFtHSrFh",
  "key16": "2TEi63SpT6QL1i9mPewCYHkFuf4AwATsJfwL6C2DG9LCAhrpjTozMbb2gHbxoDkMrhJSmEujrmhn6kfh49ThYjPt",
  "key17": "3DkHiP7u2R5D97MKZYsffSd83YBHGwZwC46QsfCNzpekcbQDRnc71c9nvjeCS91fZjBVqT7UfPXECAGeyaDjh1H7",
  "key18": "5rjjMpmBbKcZxoSYmYWfcq48L6Gs4LB1h5353nMHuc2obinjShpXaujDd6hYySeEnN6xscatbyvrC9oeBvT3Dqdg",
  "key19": "2ktTvNDfTZT12FpC8jReetuoLcHe32TTj6NayRKz4jTCyLkG8rxuzQ4oGMZW3Y1AVEG5XjmsFB6Y6cpgc5qRPFcG",
  "key20": "4ESaHa9Ph2otPDhpjam8u7s4a1dqfhSWgUaqt3MvoVP6e97hM9xv8bmMnF9jc3SuawTU2VpwPMVrBzd5FaPa27tk",
  "key21": "3qtSWvJi5BNCJHWyYUpromETG55mqWmbcRdwv4r3AjZHVx2cgFZJwBKDrguHrFpasoU9QeL2ARg6PbKoc4YCzP5R",
  "key22": "3VgBPtpzBJo9Nn1h5r6u8Zy4n6yXMEAVGPqZonveQ67HAxpLUaz1b6NjNtaB2VXyazACP9Sgfh1tMkhrPfkJRkKd",
  "key23": "7fLKy5khHX54Ft4ZQ1TXoUnyCMjkL44P5LYr7gZmG6KssYW7xyLSgtbcs9BxNvJs6GRdBNKj3rz3o8c18TZHepD",
  "key24": "3ZzYEeoUCSwSXLbcW7Z11Dj5gCtqoRT3M1EqqPU1c63R9WRzXVdWsUp9isNcARwa3xFVXNxmyq9YguCo7G2SEe9Z",
  "key25": "45ZZpD4KBXiq4pcb7ey8GjbaFHiiBHaGpXoaTbmwLdHA5dQEMkMET2Dzfg9LipwqmLJVN3n5mHYRwuPyDsHmReqM",
  "key26": "5Dd4Q2kvxazv3qELvKMzjjzeCTzBWBiumcQVPHA7AJBJXvsC1YhAZPhSUX12Va4ydHvAMy2M7tmxYJRa6jFWuiNb",
  "key27": "2qqL2bwCmgKJ8JkNQ1DnszTPNCx5CnsJusj95BbFd7wqQHWLUiG634m4WRVQvbKVFACLvyoLWMFfD4gN4B89b4A2",
  "key28": "4K6D6zHm3GQvZgcpg45AoKcPGRXLnkNcwT2UtdKFhjMd6KVi9iVSJXxnfaMUk6VyCxsLfSwBEUu2bMuNnsQZ4kH6",
  "key29": "48bVmSrACxcUd12CtWSsccqTSeju4HPSKgXhLRAv6ZuBAwTftVakwgp3NwiwWvMwyRxk5KxY2fBDp4wPVaN8dh7i",
  "key30": "2Pz5tkBDAAekHr8xQ6S9dindk7LjgDupcy5uXnee8YCAouHKWr1PiBkCDg9JMF7ae5LyxVTnXR1pnB9JL6W6oB4U",
  "key31": "4JpuPFGH3pviQVr7NYpL48Q9hS7wb8n4zTFQ15ZPs7NDDeRgzzwK7AzGi2kGzafT54y5FM83TQn6C5EpE9fPEDJ2",
  "key32": "5ANk1WeBepwMEomc4TXLCWNciYGRvJhnZdqPnWbCHZvaSTQUtAsFYgy55We33BYXk6TMFK9FwXZwo2Xq81BfUdco",
  "key33": "UbvYP2NVbwmRXvbJZgJRCWPXkaPWsJAZhvKMSTso8mjwHAw7AfawPAM5Dfxq9bGH3SWNPdk8MM4pfavrrPLnbxw",
  "key34": "4FN2bhFV3UxEUwRJZ2gKaba4o2nSRFKykzCQBTPJkQ2MkGfb42aWfb2cStfsjzwBuLN1dSC77gcgrUqsWvoRteMP",
  "key35": "5jJmtsPbufwHH74qbeUztGTs4dCLGk548AzJ5u7HSEoCSvL7NePfEFSTXBztPEGy2kKU1gpeP5MwKUzfNKxFzbUn",
  "key36": "4zHFPmDkHcEAxBvKJs3xch3v9STqnSiqBxPAxvvVNVFTn8trSX1htZbVirYcnMiv3Uk7egFBUTDpquxf9aBbxehh",
  "key37": "49wXGEwje1PXrs4XJN79gzLApjjKVDpG8uZ44tmQRcbPE7jyXXPiLdPRJrFU4Ugfp7NfQAiWpvqxvWmABjC5DopH",
  "key38": "2kC5yeDeMuaZnxNaGabqvPEJJQz8eSSZurC79XTwMWDbTZJXkiXfev7m7xGp1Boiv6aS9RxitSZw5zWRvhV9Lk4j",
  "key39": "32wWgpHPjfzS6M6Bi8mMnRvUnHh3BB8ek9eq4VDsxS5UVAa6QmVSfLaZrb8Rbw1RfWtTSTTVYmQu56oYrEmrQZhG",
  "key40": "44T1hSAVnKS8CKHJENwiqnmwpJgEvKtHt8SP3nDALvGUSexDGZTicLrJLQhJN1upcGz4An8RitnWgTKt34fAhLL8",
  "key41": "3W4y4yBExBgNDx6HPnrLLSvRdVHREvyhk8v6YwCRpCRcuNfX96UbnkJMLoidokynwUxRnoaJQP9jM6dNHhQSvNbC",
  "key42": "5edYHzKmEjUTqjN5ob5L1ANTCZvHZQcwFswB9NfpL6RhMxmWUUWoWq9EaE4b931Y8D9pVgQUx3bR1gcx3mdx3P6E",
  "key43": "4rfTzEJdGmgowurSB3QX3fNRKNkuGU3n29CubztntE7jmRQix3EohfEWUDBEDc6Nw6pZzAEbbGv1KepJi8r7oubq",
  "key44": "SsvARtQX5r43VC6NW362rnfAYQRbkSMZMBcwoHD7K7cLufuoHcJfTq61ZtQvscno5xQEZAGXyLbYRuNF9L24656",
  "key45": "4CeuCt8W4s7yxy5TqwD37iDevevkp1HcgdbL2pX5CS57t32YqUbA37dA3J8B4DrnMuDEtCAhyT8Jg7bPUm3BWsaa",
  "key46": "35y9xX67hSVmA6uuiqMN5FzZXNAJGJ6SoV6gmGhjTGebJpbv3bch1DTCdvh2ktMJciyjjiUKCLxLyWHeKkMzNSay",
  "key47": "AJy1L8Sx8KbrA2TS28Doy2G9PZwpyX294CzD5pCd7k9QZk2dfm7yoj52Nxs3TfwzdN4Ljc2aFEm26Ed96tuxEw8",
  "key48": "3i2GsbvhKRmWr1mbNEf3jJweVCh4nwecXmSMBkUDS4JwHK1j8ine7gsxSQUWC2KKeTy56syod1oQhnKwPKw7qpMW"
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
