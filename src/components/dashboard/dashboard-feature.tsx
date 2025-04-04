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
    "48y9zDvqxye66Mz2jxo6BSYXfepMdkuJcsMG1ftDEPapucXo3RvmtPZKXEecuBJcsRyEYNzcywKDHgAX8k2p4f59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vdnM1L9V7i88w65tTnTKXVkHny5GkYmA6CkDZFoacoab1QqqAjCZLPh3T4wM7ZG3wtvFvRtbHk5eTjEbPppiAX",
  "key1": "4BNVFCJKXev163ysRkiHwdx7Q45uxnnUYVYLyL8XZLngZ4wCMqY9W1g6ZYEG5uvaCf2jsGqYyiJsEP7TM7BLynjN",
  "key2": "5ca5zCPXtgxT85jLakF126Jo56NAgcoMm4DVTWU4Sy6VBk3PuaoWHNdd7kpQ2cLW5V9EvKx4sA5gT3XHLT6evjVn",
  "key3": "jP6vJ8NFsFsh3PZ4MMrTcgjxHSF4HosJe7M4emSE78Y1vGL7uezfuxgE7RyN9fEPSzbXwQZJx3WNiM7oD9YjmpC",
  "key4": "oyeqQgXe8vv5Cjhhq7NrTW9rSx1SvrfJFgeFrNaNbAWADTGzdbygSrRV9HWhm9rNygzHMUcP8hQAeYmpoEZEuYs",
  "key5": "5aaefL9tNk3JY6Zw2RDLrDaPaEbx9wqsP2acc9kYNdK47xxg51oqrraAgm7M3z5MDQ5G7Qy2fFG16R12ypX92Lcx",
  "key6": "23fX5kA9xFhfi37KnPGA34UEmCVSRBrC3ixf1nGm5NWhcpiUHKHQJRyP6XFHaHbvXhDqPoEWbgDWwipKyZjZBPR9",
  "key7": "2sFLXtzYwuicZ3PY9DxmovnBBoFi7pwLCNpMnKNMDFsaTsEsCnk3MvL3A9LBgGTXpFcpDX4QG9ipWQW4UpoytHEw",
  "key8": "5PTUdqE91aT5SoBFNeVeq3Ps93khAYCLLwptqXDDDGbz1TU5fD5GsaSi4wkJFjff6NRnJq1wf7WhPLTnwfXchqUa",
  "key9": "3NarmqJkxy9iKGP1twM2i6hrjqE6styLigBMTCmd6WXHLXPrAXT66Di3Vy7fRmxvXw7wJvwV8DtNZ5vn4ig2UEBw",
  "key10": "5NWPRjkFAdjua1VJcgtNbtPLrJc59YoWghpJdDqADHRi6JFSstiYGUCyDM6mM1WUyqv8QFVCTYN7ibviEYRdEPXF",
  "key11": "4jaBw8MkDkZG3qB2xtfpGSFEuKY37Ayx6Zt35PFRyZF4vaqAb6mG2jT8WWcnpP1P3GbVdyEkVgobCmGfqxiwJa4Q",
  "key12": "2bnGCPjJwAcKmrjJjEiTbohuzbTPU9AHbD3Z5TnSnTrULb1rqmQ5Ucx7Q7X7fhJHQbptMv1PxoZSfwsbhqvhZSbq",
  "key13": "5juC76tpHLMbNJHkwwLA5ddd73fu6NHVT9qaa5K9ioq4h1EwR4T3yU9osKVfWn9BoFvm2bX7eWEtgyaUiXEynXEU",
  "key14": "zFwseuJdTvCJHB6catU5SPuVXbewa6AwHrGiXdWt64zwvYw6qDvL63QuhDLE6xMYXsiNwAUb8bCs8hArYnk2WGY",
  "key15": "4Cf7MTCbZNcMDSig7CJ3aQXy4mCkw7bM5WZYTJ9r3Bqsi9wJ5gH9vGuDCgTy6MKUXXTJMNqPze6dqPBybVLp48y3",
  "key16": "r8UnoiM36LJsxzhZKK1q5cQhb9Wfn3kFpSk4qEGp1CQv6VRuemF2mRF6faM1kUJqkDsib8oP16tWeBzRQFuWTyv",
  "key17": "58Pb4RifDSFF7kz3RJFGeBg1oRGomkZLN2DGUrse7SbNcBifUT6dp3DoqVw1Vs9rxoz1Mm6n6s24C55VqFouiKDX",
  "key18": "2E5Q365Ycjw6CRr8ZBKtmqTPRj5sHKM8bwfQ79fxsMfW6jvpfqgykzGhK93yf3tQLE7Y1PSxoEdApm37suLnoer5",
  "key19": "4QyS9nWxNKnLw3CzQE5K6ieeBFEbGYT9z3Awaot9c6jmPnS4iwohJazvDUanG76puPA9FQC2KZ4vci2e4XpKZkuS",
  "key20": "592B8PZr3bJpTr9QB9Veb37EnACPsAK5EkSna3L4BjMTz9hvkjuGBEZRPEgz6AS2SuPjzEGWcGWdixoabt5D4jHu",
  "key21": "26xpbeYjnANgvUn5fWDhKiErB8T5PTGbrmDMMfYSR7nLBAtnCQxAA8NANsCX9kYPKFZN8bNvkEDGbmVd2rapRJ2E",
  "key22": "5ZW4JfK9GuFy4eV4WKpQkoCPi4h1x693bQEjksrATUmpXTzDTGj8qhCTyFaJrX5m6xFsZRw8tYVkaQzSANJHkVXi",
  "key23": "vtj6AkES2bjW7aYpQdit4STX19pNHtGdqZxqAv3E7aYbVpxNkMyiLUa8eLNZW2hj1ojrZV9UFnu5KBL6YuXLMZF",
  "key24": "3TPXks3moYc1RtB18idoGnTeomPqsLmNsjRKRcVgzn9JHKpQ7szhebRwUytZ7qxobx2zqLpfBCLiJMvjUEDfu9Bf",
  "key25": "3jZ5ffEQWBd95A7azk5W1UN8FqdWifnzPLdfSfVNfjrBEtU3qN2j4nMkeZze6G88SoRJ6oCkrxPeU7jJVAsy2D9b",
  "key26": "5K9gghTUPWqAeBEnwjNZm7sCyGfiihEdfhG2LKAp95e5vdJ3Lv4YC9dbGN9gHLEH1S8JQrBpXCJQZaovj4DUj75a",
  "key27": "3FyUspF77fGq22f6P5RyXDv13krYqouc4sd2M6YFx4a7FtSyu1vp3exKZYkHRxQ6fBrVVk3fuhx642pApLYdjrDC",
  "key28": "56DzaoTU7KTGhEDoLYaVAzFQhHXjZPJ772f1NE3YZYdL5TmRh53EZwrHXK7kdJg5RDWpsaKt9AKrYaETgZL7tvNN"
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
