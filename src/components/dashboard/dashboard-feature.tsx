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
    "3Ayox6SuuyNk4nmmRJuCCSBjG482pj8iHzeyYF45hBV2TDn92jC2E9TSBDM4iooyXWTePh6VD7j7Bvgh2QoPR1pc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PLe5fqAPDqrN3ws92uruKWKe6VzcrQTvykfiqSCAsB8h5kMvpC1sR1Y2BsUGpZFeS3sNEPGKXW9RWMDZe9xnUpP",
  "key1": "4u3VewT6VD6pobxq4ZQ5BBatzmxWAZVzLxpbm3upE8cSaxgLtw17xLSTSGjtzcZ91pJs1n5JaFPV2u3VdWfVG47n",
  "key2": "4bkPg2mckEKyueLxybeFpFPxNFHSPg4jk3MvfTKmP9ag9hP1rQt8sMRacTK6Df8wbpDJCgz9p2exaQfJTiaHEYYz",
  "key3": "2qj8PpZtRiz1DY4gfYJHawgiogTCShpUy77x8n7ZmSDuGHcM335yQx2wdmKHDbCjcC4q2wLcmirLG1udKjt9pjUf",
  "key4": "twhRvLrTcNbgPHYagsezooPoQ9UPEnKeek3fvb2FgyDncGwpDyXhcYgKhyy3eH8ZDUDVn767bZo4aPRmB2zjvbb",
  "key5": "5P6ZKon33xJEczdjNWJAwAYqkKVFN1yAYdxwuY2L34cGjKn1SQe8SVrBexgHCUzFnvKb7UHJziUXqgcCi9wTn88Z",
  "key6": "5FkjFGdpQjdn22Epb2h9dwifwmujZMsFjfqVbdQi29Hz8deurrqxFAQYeRv6w3HshWJAfUSR6VZer9Aumn2gsDar",
  "key7": "5DVTA5CmBEnfw6g6Vsv1kqP9qDZtQXSv7yD5FHERKybBznqT5btbAhPGy9gb7YUJ5nNEY2SvjShYWR8hedmJ2fQz",
  "key8": "62wZj56SwVhaZCC3jUCyhBdNk9RMWSN3xVnUJhr8pBDAmWhf61RCBn2o8rSbJVotGnH5xhkjwCx8X6DdqjGzaR35",
  "key9": "2vhgGS32hskX58kxsgAonrCZHffJJwgnPKdHdKTy8xt15kTjDcQ4dvaKmnCenHSDVK8bZNguD8fpP19sM4WpuwZi",
  "key10": "3bTsWwosGHVptQNTDuBNpSpEoD6yztZZtnNbM4jh4cYiTNf7jkavbRw2zdWkDou8CxLxyTwMiRpBYBcQWEDVmLqQ",
  "key11": "2ij7wJ13n21eTkCoYbGbZvEHShEuxy2EM9o117UyB66LxAUmgZRVHpWn4vmUpmKHyeTX2kJew3hUd4WK5bgnsZxj",
  "key12": "3tq6nyEWvCLe6ZWuXTWF9U4hMLGpK9MjJujGV95Z14rdzh5srmnnWDMWtfVhis6WZefuqfLs26mnvvTKLTgYqJFR",
  "key13": "2PW2WaBuUmGs2G4Bbg2iXWiTWY4KBUbnoi3XbeuXiLzpmkFVD2VBT2m98bxyyVRgw52ukUST4FQ8TyJ9CAvU73nz",
  "key14": "cuNZyxokcxgrXquGjcy84wewMKm1a1zSxtNaTEJx1aNE2Bu4RMbPhzmMhuDpUCHZZQWsJUEMJpbYoyLtkSdwqZt",
  "key15": "4y2cshK4WGpjZutrQ9CGQfL1rU4aC6P5tJELJVEoFKqSQtxnzd5TedfixD3TjeMCbcngH3WLovfVxvDAyQiEnSpC",
  "key16": "2hqSWYvquLLTR5hvkRA7Ads12tCKaLZpQXzNkg8MVCVN9xNH8WsfRj9PbNe6Hfmc7PcAGMFXiqStT6cZX3eY2Wc9",
  "key17": "3XCPgvwHKrTPyPAsibGH9guEh4o3QXhPrZztiKJpqEzdCXBjq7HhgtB9dqvbXnrnJXJKSfJk9Dbaud9d1eRUF87d",
  "key18": "65TNH6kuzhr2KHQNu4ePQL4NrcoKPoCo5RGKCUadgFdPnw8tDefRCWSjuCDsyB1h6BXHSapRZmK67Dj8VnAUSGWC",
  "key19": "ZgtvovNYxEHcRDL1fb9gf1i2xq3YNA7FgoNRMyJutFBcnmLWCCP3EWXv2YjChhby2YsKBzcXQjYTjyMEa628Ndw",
  "key20": "HQb3pm28yAUAXQSK7Bgjgg8sL1CxEoeZtXNDDM7hSQ6UjiHUVUYV2y7ipiJRUWoJQ4nYUtPww9CdaikEeCSQwLc",
  "key21": "f9Pu4Q8kZUrZmgc4fW666tqokNJkLE8vcZdhg4iYgDtBZ5SBYpabwzDYHmnu8M3qsaqMRbSuMeBjjCfWDGKhjKM",
  "key22": "66nnPxzfMxxfjDqMuognrSLc42Fvpwia17WtqwkN5dqkRp6CjRVZXwjPsztXxP9JYwetGwpsTsb8ynPe38BsqXvS",
  "key23": "5o6S3QkAhZyMUyQZAGUsyJWnwZaaYGRhhg1p7eWsLab5xx9h6ZgP82TDyYTyRCyegUmwimzmywL85oi5A2EEXGax",
  "key24": "BXrFQheyqGHZZMKfojH5e6xWCVDTCWiBnbE922fxgSuVk8pSUUB5He6kdtvEmDc72wwwBBC3sCzyS2VnvWMqB7E",
  "key25": "4HePGcJJxZNwUHYdj5bmMZA4vVCUhwXAz5nuxgqqNLG3mKbsJ6XtUMF5uyHJS8rUJSKjTMN7uubB52ymvwGRAjDF",
  "key26": "2vUAckQnewPAVXMaUVta8KW9qgLDRdP8CW6N9e6ThSgScB4MYaadA62hUypLGxqJEpnijWa2vr6DMycBQRww1kpj",
  "key27": "4eebq9P8sg4MT7BHKRBueZNzXq4f9NvU31BubNBtwSxoNHahWC2fG927HdKeMXkLyeAtVLCHEQgvzaaEN1V9QsgU"
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
