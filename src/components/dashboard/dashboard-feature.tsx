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
    "5XQGQNKvuHHBAZ86gihXe9JbEbHWRpok679vqFVKHYsLwg99tfxmWfbPPYSjCSNuNRMR5eWDEvWE8qGuu5N398VE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4926kH1WzWQDGaXQWEJ5zeihYLiS4d6Y6Lj3JUSZgCwsP4uJ95CHzNjA5cQv6YPwnnpVeKmEHiA7SR2HNSbGzCr2",
  "key1": "BRCcT1z11SQf6RmSqtBFn5CstVrkDm1ENKewwyYyUhhnaj4CpS6FmLgKx42Z2TjssKbKHsi77a8zFWsQbq4fWcd",
  "key2": "2nbuPTXfUNvhX3UQ5ciPwJhXgn4623xadfWxEF84mA7C9pE5ResEgxMrc9uSd44zj89BRAaSbRjRcybexistm7JS",
  "key3": "4Vpo8BThDJnWGfSMnjzpKtvR3Wisf5SGqwDUxffBidtQjpgyb46aqWqBj8DDVQaf1NzZzpZQW9FF9tQuAa9dy1xP",
  "key4": "24xm2fDPZHvABSz3Z2npbE3qMYbq2YSiyBdzsYQrnsCVefJCDN8MRxZBH5Tr9me9wmTD8oQowyf5KqhSDBk4RGbW",
  "key5": "AeRjmLq6HeP2qGP5ib12cRcKPAop3xBUwjiQMg9fSptbjQWxhjHdp9gt8xVqndaqKNhAhAJjdxy9LYTuD1byTKq",
  "key6": "5x38Vcda44KmNUQkNu5ja2sWvDEM2HEHgefGL2XxXiTMPfFDXH3TMvCTq14FKqr11cu2WJMsiRMxx7ZP1NxMnVfS",
  "key7": "48ufbW2BTg6Lq55e2SZPLwwDVHMKvmsexchYLjf3TbqtzVnn8h3GcRQ7UvxK1gaGRV92iRbYFA4h2pWBCGFhCwcM",
  "key8": "31MrbGF5RB9ZdxKzsbxkabySTGfJP6xFoBsv8pS4ie3M7t91KMZEMsv6bF1Xg2NcGDqXh5M2NrFZ7VgiyLmbyNgV",
  "key9": "2FMn6cCeck9ZJxUA3fVwKSaQX8bfPxmLNTTvTBrrPeh31sh87eWaqJN5SBHPgj6khDVf3EVzrdESELEJbBPhHGEr",
  "key10": "5e4h5oMQUkPAG9quEPm59L4v2vcabiFSZs8hUtfnHDAiqu1cjcsVyy3uaztq6dqSExve4sdMd2S1U3BK1AgPNoC5",
  "key11": "5UZEWiXizSf7Wqmwax2uwW3fGPDetEKzYquNouMiTb5ZGNdN68tEhxVWptf8uPKg3yqwS2q4Xjh8sqTF8HrgPTCC",
  "key12": "5k5eVGZU3VRaG3PMHFe51SrVCNSDRGPg84QN6BYw33cs9AZswnkoYqVh8wfZMykWL9ZdzeDp5TZ8XWiXAB8LbW2s",
  "key13": "5Xjawt6EyuuVhSUvMYiiAiwC1j97riSuVfLhKDKR6JntxUNu8CNUz7TGap6bm8PAbwDM26vQpV61bWnyJ79CFU5t",
  "key14": "41VYVrTjaTMmtByMiTRf7HfnzW8rdfbVo7i63p3FbLyStwaByiVCTxMrnAmNQ1uyghRV6RuhVyh7xyjDrxsnQrNm",
  "key15": "36qojeN3bV7GDcNssoTsJJ6QKTBJFxqsGLYWSBaMWWLV6fDFtQDJwMUgFvAHoUxoKB6gzGrU5cPFzoNPdckUYEDV",
  "key16": "5fNj6RSS7o16vTJXA3yVHcJQTTczS3jainLiJHRhkyazqQ6BhgmDnuRa2ugoSbqMxmKa2oTZzyVHayWTJXE8WH9r",
  "key17": "3Y2TNqtRcjxoBp3bPDX8zMZpDjXmdw3b2NYbtw6BcxjVEpqyq3RWG564qe3hZusQuJPmL2yXsfqBUU7s78oj7M83",
  "key18": "2LoyDnJWf2VebuHXU2hweysw3LdsvcW7yMK3U1vGrpEpxvYEwxAFr3HRGhGWA58hnjGCbvyRmtesn6LBpBzuc2ek",
  "key19": "3G49dRFFPiptuMBeF1MUYU54jBgz1mwm7CGZUrcrX5E1zPT6aRY6PJM8XRw3rr2vdNVPGbEKFZMzQ5XtwXhYLy6j",
  "key20": "3WoLHkba85Q7JnWHUaUMZ1GNqXzj4fFbJn1rvX1pH7Zj7nokvRYZQ6DW95rtj1ChvxxpgihcnZGwGYmxQJP1QYEJ",
  "key21": "4Fcz6UexmX8ET7JSmNUMuTi3N9oCVepQFPmDXDGxRRDzMuaaR2ux6nnLLSwjnC3JMpft1QRwVh7paz3QLEk5UskL",
  "key22": "5hgZwTYehtkr9vQsxRNqcL1WBjGCJfGdi45DsY2fMhrkpjA2Td51mSPnCjTQksQSzsshXAEeXZX6nkMPrWUwmgT3",
  "key23": "4Hyz7o4ZY8p8gGpXD7deKsnydYp5Thmd1FYSabDmJw9ahN4UaRfdqp46eEgxtHMBkvku9N4gb6Jh9Jdwd1hKax3e",
  "key24": "5T8d5V9Kn8VUhKx9cuv6dXzYfsZ8kQmhVopWHMaa2W9KY8v9UMTvsfqhC9m87cWwFW68nppM7pHkNNcq8UeoYUip",
  "key25": "5JZMYUr6xpsyXeww4QL44P2heh7SyeWS5CjQ1qJhP3hx5EnqXzWwgWD5UmbGJsfNSDtu5XAAmUrXjrkcgE7pnmNp",
  "key26": "3b2rJYYZEjkredVvskVqs64fYSKMFBpTJqjEDvRnuzFdPqx6zh2XVvy9pwQGnZKWstgKMrEqNZtXJmsqPUWD3yCL"
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
