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
    "5BL6W4pREifTZnEK1Wpru9MzDJ3z6dytETGuxUKcAZNYJbnSoXrUFbb6xV4TRJYgQbfoXd8VEsmhmLQ9j2ruFuKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N1dEQvyWN7akozHQh5jbDj9ZikhJtxqBQvCF8bSZ94EXe8XPHygoFoeE7g9gbeeKb3ZDXtR2Dd5jsNgv2EydqDa",
  "key1": "Nuoidnopn4HKwJZfbXAdt6nD3DNtLiFxQZaWrPuxkJXE2UMYQjcdiv42Nk3rvPVtaDTCoAcyqiM4cGyhcZnG1ko",
  "key2": "3E72G5opNG4bsbPdhc4RJYg7JSao6bstTbBUx8ZXjcWGyLAENxaNYNRKs313WRRGfr7R5xLSs8btGMVWXZfnsbuV",
  "key3": "2uPFpv1huueff66yaEx28S3Evh7m36fVf8sa8ke2Ski5qb9j8ZJxwLTPa8AeVyMGmECH45KAf7yj9GStXeipCTrv",
  "key4": "obed5YhdHTT7WWBfvjD2Cy6qvbEB4ocGJxg9HPSZJnkhtWSG6TwuZAe3oDrFsconY588zxJzR1Tb6MmX1JP17v1",
  "key5": "3wRw7ReavQy5zeRqKtchNLoHrZowNb2vCVhHVPQritTibSfzyfN57TZnc1MvJ1x5G2Astu63tTtHNcKskXpqVhpD",
  "key6": "3Dxj7eeoFkR7pXLhmfarRKQ9tt24psJv1S9rj1e89haL3noba4UPcEBvmPmKdLj4BAGBNU2t2TXaPp869kBunKHa",
  "key7": "5VLcW6wKMAYQB4nxHD9U777DAJMDEd2z3rJdW8M8SweiFYHF8wxMNxU6hmH7XWnwUFZa2yqCrTopBA8ukAF1ojfj",
  "key8": "3N4KVxgGWbhdfQycpgF66A4ExbVpndmkG8THUcq8kNxUpX4fpXSZFWRgrGkGNLDV8AcvPqjW7ZrnqiHFXqTwpAhr",
  "key9": "2yPNA8FmDMzFM4Qt9b49RuMuBTnD769EEG9WVsqt1BEU7qntoqR5EiX59Vmkxct7pk5q3TvNY1BExPmXPcKG8Bkg",
  "key10": "5ybjPnyYPe2UQN4xXmuQUwPsLmzESpUUKSijLCge39vHnJxsJdsSaRHJxkY5mzL3u9RHzhngAPe4W4LMvQWkrYg",
  "key11": "5bS2i1rjGPHGkMLnGc7s9SJUgQwr8k7PunE7wgewU4Yr1HAGVuLxvcwsfUq7ceRvyRFijGABnvqeE9aCdKDKxegC",
  "key12": "2mgNHE3UfFAGGpNvd4FGygBaUErzdF2HNFcNrNQxWX5vnC4PcB6U16p2f2TrGAjJKGJuXQgWqHiKo3sn4i87fcx5",
  "key13": "3Yn5JsKaYVJmsHjhnEszensaMqrJDNTkibDFrua1Tg3mLnAEYKaaTiAAVvVL816yNk6wQc4LczAnKd5dBY3zBQyG",
  "key14": "28XhUp1YzFfKTbkEP9WqLDHb8wV6tRCCD46sf1GFG9MkF8VRhEMcPw5yxd1ccjdtEhEHSYR7y4mbN8xFSbBNKHMU",
  "key15": "5vEW14V2ghsTrnX79TDSEzT1vyHVzq1aLzuMsK25ofyqQFRUNfBrx21bbPQEE3zM39BRcApKkEcB1WrUMWgMWrQY",
  "key16": "YZgpWsepP1XmTyPd8RMSpwdG9eptexRziG8CjxiFfXCVpv9B3HiRtnxvnAfp57pkZd4yYnNijWpLuwAMYvK4RWo",
  "key17": "3DsDrAB1YGy7H5H1PQx3LFbcprS5Pn34zc6aM5gB39YJy6DhPyGk7nzEe58q5wgxXv5vYEVnWz7B3JEfqGXb9Srp",
  "key18": "2AQuoj1Lm7vd77uXkPb13q8rHa85bLZL5rAK7N4X91BX9N6FFVMueq9yKVzZe92iWza26Hvi4UYhzxh5HUEsqJcj",
  "key19": "1JHmdXmbvDT1iyzEdrxaV1bSSNSwMRNzt6u1PLc1yC2RXnt2oLq1XJ2HwpRV47BCYzW2dsfzK7ZKwm8YwKVLvVK",
  "key20": "2FnTHy3Xrnwv9qaq7HSq4MASSaLRJNgbBZ7usSNPrsrbkzAU76Ms1bDtSQjZkeuKSmVHuXd5VVinbV6867TFTX1i",
  "key21": "Yf5QW8cVaDE7FFAJjrdH66LvMVswMfsDHERBy6hxk6pWR6BcuNJYTVWvpBXRYz27DS6ykUhpeKMmVLPucVgpCQx",
  "key22": "9AmCJLB7StSYw2QT5W11dsDTkkJThMTUZtx9MktNmvmQRMTdxNPLjQcNzVNfRCWvBY3BJomS8E5MLtGjMCdGZLk",
  "key23": "3o1kg8tzos6hpSYcHR7K8UnkaMGJaZx5ZRBcNvT7t4zYw8bbEdNtZ3ezrhWwpDTot6eSDvoba9sgcazULJpzubRG",
  "key24": "2k9VWtqnDYNJpLWLfeQEHJtJyaiRXUNU3euy4DbcZsA4t4bai6WGWMYhe8QnzwirCjXLJNRravnribNdwcpA3PRH",
  "key25": "4XSd1qZKd85rk7JM7oSmxHTgpV3bRXL1oemaEvoDX9DdjagCMsib3ioNzYSejxPdFB14vgfmo1KayNvRSyRM9CgY",
  "key26": "2X5PgJrcbLV7dzWXx38kxCvhxFJYAsuE3tpFoYqoXmapTc7LzNx1PSMMiiXXQpP3GwvoPf1RLdgHbtzgDD766SD3",
  "key27": "3tLiKkVQ4p7tW6E47tGcAN4Pr9FuK579MooiFTavsTNR9kKVkBbQjBZqaVKFhPsRYiS4NtAhLopXG8eevyRYuoX6",
  "key28": "5Y1ehv23dTixtkKmuXbVYNRLLoupvZNfrEJ113Xzwp1KvEjgXNP7vQ5pYKumKixhMB5oLofuxHmog3aPE26WKxu9",
  "key29": "375cEPU33Gd7RUE42DHDr4yhxjSaATMj8iRehjhXH6NmaingqKVZjPbcVzRAsLqkP9Har4yGSYiYDJ3GC1y9A41R",
  "key30": "5N12A2fpktn4ey8dCo3g77sKAkTgD9s514bEDUAM2yXiFS13xUHJQVF9MC6Mbq9X1fuDtK2eK9qkUBVfmcZaLrG9",
  "key31": "uS8tDvwuEnYpjCUkFPJ7k2DTBPr8vAGaDA5WDXsgPk3EpeGvGoifEacy4xwWgsTFZfXJ12DyLvN3zJh3hj5KewS",
  "key32": "5Pz6s7UEik5Sg44wBXvzSZTj19aqTwEKGKQKzfekrC97i1vF63pVFPZuucgK6UuoBQqPphg6DEKYLUSNSgHowZbi",
  "key33": "3kZKWYuuRfbkDDtersFbkKjuQeKNXYYstozUz7zdeJ19ky7r2AxJxugRM8yxQVf2MFNp2epksTGoUU2zce7evSRm",
  "key34": "w8AkzVP4W8qjnrvaW3TXBkPCUbkMatK7XMAiECVs99x9Xr8xmbzwX2JbjW39Uvos6NPWCEZGjvKfa14mJRQ6qpQ"
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
