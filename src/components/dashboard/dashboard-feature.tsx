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
    "tRnMyh2QNUTMhqXnUFPuU1DhCmsP3HmVM73hSMvRbceyDkDhnFsZjSwVrmEvwci7qUvGRyH29YobbhqEdueYuqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zCYH4djkrcXq74kxuTP6mPbkQFCJ6MTe1ThUWm4kA3SGTrhFEmFngRdFMbF1xi6zJi1NR6mXFcLnYuVygqd3tCA",
  "key1": "3XnmB1urVXXov2ZESK2gDh4UVqZBh8gq76BktLj8JNTZjhDDs7U7oEgQpDN567JSsjwfcPgcfD9pqko1hyU4eTuy",
  "key2": "57syeWrYnU1XqafgmkxZjx4q9Fnk9rnJgBH54tmue1AxhrpUBamdzyAu5rjSG7RNjHNR2HJdbgPqkMUvvscfyyKH",
  "key3": "4wr7tPaRL5J5dRP3tK3bdgxhPX9R37eFXyc1KHu9iT4Mz1c35gQ322nVeoMT1JKiudmzK9wnmPLu13bcrXm2siDk",
  "key4": "3wJ7ps3DCJqAcrywCWtAgrtHKjXiLuNMtMywepQux3TnXBcftux6Mcn4mbeGzwecXRDdDTK2dD1QEvKaseGQhZSy",
  "key5": "7sGYVn6onjmF5k5m27ejhzLEpj5Xv1aZyWL68R2zDnmYVYJn16AQSahQNVm6wJbPQvrQfMTV4Fnr1K7v2fGGnWo",
  "key6": "3wgGjGNA9GhPLrxEhSv2WPaTkJp2ey7HpLcXCnRXWx9BjXtoeUhjNPnwq7yFLdwacG5Exz1vHteqsAZgvY29waqk",
  "key7": "3y3QARfXsyFi3YGg36PZHGEF1AAA1JQqzvQu5qf13v8Z3DbQsM2z9dsoUyJt9g1Xtmu5nSJPYDBubDqCQJXDrtK",
  "key8": "576XPmucptcNUxsxQmWENTaSHHujvaFqYESFW9dSo84sYXU3YmrMvFTDVei9A9VDrmhaejrMyPN1JszXKrczcPUC",
  "key9": "31pobT9eDVMJmgkfyqpZQVDFmraUEtHQrJpX2W5Z2g2YmVYG3XMHUp9qFeDvQFy3TzNRLu6ypdgR5ThgL2BuGroH",
  "key10": "4GBVFgiN5rknJh463rDZkU4jErRsv2gwA56Xqk9XSzaz2XwHRXGeBMV5LJYziFH6vRJvieDYfkbztN8wRHYm7Ze3",
  "key11": "5ZLTsu8fDNAzUX3nBtj34HZeMAcUJ6VPihU4etqhpzMz4XTiRANciJKRmfEo5vNkUbBykdEzykKA9nqiZ4aqievd",
  "key12": "23jRLr3giRJfKYsg3zjRAg7ZJ5Yx6g7BmbL9QjJRZG852F5Dq1fqJNvNatqjP8XHxSnVTWDv6r3zPGneNDTeEhDm",
  "key13": "MX97UAs6R8X5vvubRkgKLiYKtYH7Y9sciXeAMD6xYEKRMprqtj5kJzMuowrjiehJjy4MnceWn1ARFPMMMg4qu3V",
  "key14": "3tPKPRCWfAwP1gTf6Ze5fx3wykgYNCPZL5C9naWYBe3hMKf7MLvZ3qzZ6uSQXnWKuPjencpWv89BDt2iz3P3fzJg",
  "key15": "3SFHEb9m2Bb9qjLPj3YLEsYQz4NdT5s5wTTBo4N2wpb98tvRGNf3HJ8CJrUnqb5mPw8ByEYQqPpWD8TLoXQGEMV2",
  "key16": "2j7zCdJBonnc5BZzweeUHdFJUzog9oHNWnf2K7cvv9SDtxhYSiQqQUVYw3LBY7iJDa8nPHhYLgrEkoGfb1fzAFhz",
  "key17": "SJ1pUtf73d9Z7isBkt74YYonzYxDfW2aNxBj6xs3gebUcXPGcedBUs4qSNt1gch6456RQ6HPxRSm7VqFmcS9ygP",
  "key18": "56nPJrKcJ3G45UCwG3tKcEKUCwxokY4B5VXZYPBA2QBLPYRr3uX8XiaohqzQpHU1M1LpRWsGHknMswSymTEUR6Va",
  "key19": "4HUmtJW3tLAtJeZo6dQNRnsuA4Hgj3ESzU2dnkAbewAkc6Y8NXxUZ9R8t9YzYmsyM7JtorPpv849ZgySafBD9uHC",
  "key20": "3djnmtVxik7REcxPwrybdfCuCiZjLEmpkWzRCtmS7m9wNr1S59nPEGyZePHX5Bmcf2GAtNN4xmEYQHSMoA7Pfr7g",
  "key21": "2sqvE4PbTKp1CCpBuUfZe9HTEkRWjf3fz719LTdNWsk8RBM6FvvmUd3u7VmJ2dLeXEaBp76GgfWJWXAMnrze2Xqh",
  "key22": "4AwYkT6F2UkuuDFD9xEUX158tkopsmBGRi6TK5WASU5bUrWTQqnaK5reZqWaQLoMpFC2e4WX7T8uSNsXhcyppaJJ",
  "key23": "5geYrgex1a5XGqZMU7ExRqiADTbxYf4vGqMpopD7x7zhbUBcPfesDMWeKmLh2vSTzH5XPKDrUE8hNMQbPJeDr4uy",
  "key24": "5EUzLS6tzCABXJppbcsrBdKvyp9mAEvbzcDnu9uykDpXnhiFry9bdLHf71DPzR5LZCc9dCihiEaK2a8T5Xzw5XgY",
  "key25": "3m9MFBPJihX6wDe4a1MKUDMbkfBBNR19jT7JRJGmGatgUzCeEPLfGnYziZbZeNSXSzgSkzUwqsRhoWJ26p6zhYv8",
  "key26": "2v4D1q5sxN3xoikYYiMYX7jU77rTGxYpe472S1BkB3EP5sFZ6WyPGPiashHhzQkZzdA54BgxX9ibbQXqGENMjRHJ",
  "key27": "5WfZUaNgVVMck16ajEHwMQf4sBSvdTC8NCZE113vh9T9xHRwnS57qGUtZSCiK4RjfJdWe8eHM1uvjgAidUBpQTic",
  "key28": "22Qa9nc2pMis7yts64HfCKNhXnq7i5gjfwiFUFno23YznNy7FMui6BBQ3dA9fQ8S68BYbBeEVzAeGepxZtaUVvce",
  "key29": "2wHTuU2KcypAMySFtxXGMxGA7bJP9XCp5VNVC2aGeXFNwZ1QQmZJQ379SvqZqJmYozBztvmqs51epn63bmk6JA6Y",
  "key30": "45xEJTrZqRfJHZEv7LyZNiYufQv9b1B3Ex3pSc7bFcpW8j3GUftNynL9Qgar3WiPyEdQJQp9aHziaZvKdLxd4k69",
  "key31": "4NCf5Bih6Nn1KYAn4Cw2ScUNCzkf1vFaDSwvrSU4Lttjo4U721hiqbWq1CcD5nfh6KwbQiDWw1aJx4eRmBqLUvUx",
  "key32": "FmKkCwDkw17P9wwr8wjCm5hzYrbSbZSky5BFeQBb2PEoiHS9fiW3YZpnFEM6fgE5s9ojH3EJFehpGdQ35ASjbFN",
  "key33": "2JtggVPciWcPS7ERt7cZCp92yxvaACBVKYLKLDuqt1TzEwCikzUQxTFhtnxrCvaW5vFxMU1N9RSQdVmHCTdTYCfh",
  "key34": "oj3c2MBYJucQuuDf4hB99K85LnM5Gkhj1uy4XDmTN3uc4bhcgf9332BG2jaHaJ1yW5cCfn5dESSBCwe19B6GqvZ",
  "key35": "5jJAGfincbDGwdbD6tb7RRoiMagN7emAoMG4Q2Gwh9tj9buGJAVcPZTFtjNSoWxFodntQVDno3fGVm7CqsZ2J56T",
  "key36": "3FapUkWJJrLt6d437JtkQ5RqTVRLgG46Uj5VXFM9zK2DxFdtNwT5Ddg6gAGwh2TisprnCkNrxDzAZNNLGkzmcUsF",
  "key37": "4JhdA2abbfMYMx8KDHCnSpYw1GajuM1ikb3qwYatiA7jhuJeE1PFy34aGbEjTWzLpjmgAGhzQQDWesY5HveYwgv7"
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
