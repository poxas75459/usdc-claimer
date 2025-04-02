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
    "2KaetczNUMeFQm3G5qLqF5qCA9jKWMeNo2assrqpz6kQ1bTGfP2ycKRRvEYqkXHDdWxoy8u2TLc3VyNke8qp9bV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MdyWGGufExNAWtp74KoiqizQWtBFpKxCyoBRRD2E2Qx9YRxeeSD2NB44z9jrxZrZ3eGpGKTdmZ6ueeA4g7KNKYK",
  "key1": "4CErPzjxjpFTnWQppuzcdQmmVerNMhN7NTpAAh5BUNx1HYbWkkjiNL6JGx17UmPN1eRbADLXjKLrhknB2gDyrcVx",
  "key2": "2GZKyGewBGEQ4sLqa3Vv1zQDYkjL3BGEyu2VzN2tsR6p7SGbQEvcxdWyDNgJU5z9rGnNBoghR6RwRDP8EXibE8Pi",
  "key3": "2PDShu4QsKLzAPp1bRL8vSsv4j4XdYqh44eBKYCMCzybpLqmkZhknBFtpJZwuwawsQJQkVKFJxmbQdJSVnnHL9YC",
  "key4": "pNtRfJmK9Ffq6bdr17MCwcQqSQsnkgJ8eGg3q8jnW3Z7GkDh1yuWb9PMg12vTi4sHL2Q873Ge5Ut9hRJfqrw5KY",
  "key5": "5TdoB65UBiqQtvDbHiyz8ZnDZWiEeZvK3WLiRkA7ru3LpGgo2uGXHmsEBpWpbeoW37ue2TP6vokPb7busMFHsDrS",
  "key6": "WZt6RehanC4F5mSj5DiaTCzTedC8fQk2RNMhSuBvfmXCqptt6QgxftFSvAzwZEMD5FM9s9RHman3ZqDZbzkhmMW",
  "key7": "62ev9QaGdHdqtvHx94rMuPzyq249HpDYzxbiwzzRhqGR7DcC6goQRyVT5YC1pKduWzu89qBgKH4iC8dkCdyKeQZJ",
  "key8": "45KkuRYov5CVGBJcP2JYJL5NwsVJorwEW3zRsZSiSzuNs6XpHJJvEfLhKRU6yPxbPG7pE7jpwpuwVF9H9rvtXsNB",
  "key9": "3JtHUzhwzuo3tBgw4stmQ4MSqTcFfi33U4dzse7FvKoDPdAw8R69r4YoSVp6Anvu6JomcuFwtw1nHUPXyHi1yNBC",
  "key10": "2YDakngRAYbVQCFkv89BDUnPkiVDMAuQGwkAtgiKnk1UmxPRy7PJucP6qV1RNTTaYhun54TegNuJbqXhPWcekZBM",
  "key11": "5zHe5aExQzz8YZtc4JjQo1PutePMygdYH3xkFSLGK8RfAtkMhGkSoFCd4wNSav4N1EnJkyvXazMJW8azAtfLrqUe",
  "key12": "5uGHkLFcWGxwBcRd5YbNHGgnpkYK9pjhYkKSohC9zdUsmuGqMXUfeDkhSN5J9TxK4JjmKjXtJugroeymHP8jPTnF",
  "key13": "3EqN4zki5dvGSFW3HmPM5c5V9zovdwc3iVpwVPfyrCzZQUCCSXaWcNasnYgq4Nvx5uxNBQCajxVHugcYxK9r57Eg",
  "key14": "5V8ALKXADG9ZpYuNACeFqK9pk9Z1nzsYXeHQa85gRoooTQCmeaoqy9MyF7vDiVgnvHWeUZ5DjNQQMV7qd38AcxAa",
  "key15": "ZJCTXRu71na324PWinBNvE7rn6wUrJwyK6D9SJg61zLmXq8fz1KcCSogz22QiNQiz2k7i4WnjS4ETzGEnH8PM8w",
  "key16": "3mP4i3ehfLrCEUW6mjD28EufXLrZrRWi1wD57JzhM3ydsvLc5yg5AHNMtYZk3NeDodbS6KWQt1Z6Hb6g7CyzB4Jq",
  "key17": "2pb2L6uJ9ncngeorUdDAKMXJqXuEyW3zB1ihAjUyRuE1zwu9i9cu9LFvNce4ZUGwxn1VZMqccBg13LrNp2L7d6X",
  "key18": "5bQkayaJDSaMHv57Ah3r9rQkZi8Y6jVJGMnEJaLQgwFTG4LeVKLGfemnb7JX22eGJpguw9mtyiN5greHyzaSvzDb",
  "key19": "3HXecDVpRF9nxUetMJLzDm8barvLgFcU9N7GbuqZ59iqx3rHttg1ZRjGrcrgAFREq23QcUd4DSWdSnWMC3964RRk",
  "key20": "7A8AGqGc8i7iPo6Bq3mxo8GLn53ZH6wojYNjMTNXtfXCTFv9K9zy4X827An7xHzz51HaUTJPg3HDi1vbHgKjJM4",
  "key21": "2cWZVLibZ8zQNs7ULD34VABtuHLQS4512AVGgoYyScBL97x8ULSpEfZkrf9cpj36qCB6iy15KyNnTQX7ZofKfYu3",
  "key22": "4JcqqBJ1DjQSVpYoFuGPS949L3RLuopwma8y9VzAKPEN9a3gkqQjVdZkzWuH1rYsa7ZEZ16acJMwqcEW8uNNEXj4",
  "key23": "5zq7ymnQjFDXEE4dDMn2TpFmkWwxKyoXEm8GTcKUktkY5jwJtTK3eyKambncz9n6B6MKXtKSQJgB6UXK5hCqGXRq",
  "key24": "3UPZB6F2iiC3HiJFNjuLpw4Cri9G5LAaDfFZLgzAFvYV5mbAVvrSKtbmht7CKjJiwy2CWDzLLLhZaF4FyVrnBVAB",
  "key25": "2vTGNg3DNNqtZB8D51syVKquwp4XsFDdXhTj2pyRryxNz6odXE4d8AdoF9xBKuAKqWmkpRD7nQ9hN8ak6bYEvzfc",
  "key26": "4LALSpQiX3n1dLYMnYiS3Mw3wEQ5it9ucwt8UwYy4agrNxkx5g5aTLK4eEBAvFj9kWSco5TBeP7cZEnauCEdBiEm",
  "key27": "4G34VVUsQVdsCzx3U49SifxmoYfyqEGUp7xcJ8Krs9myrhqCmgNLpbtKUbHuz8C6wfX9CutziPYFMGuhcbUVzSjQ",
  "key28": "4SXRmyDC7D2WMq9UzKYx5bCpLjoVJwi2X3qZSBKMZqf9fV9rKuY7z3kVyn2ENqBETSLVtS3F5TBdjq6QyHSfCAnr",
  "key29": "4WEbDrhh181NjQ4nK5ENiwNaK4cp8ZbmcfW93VAHygqLN3wUnWqWy1LDCPjeXCeyjnHntdEtrjLrdy9pVHo1SEWF",
  "key30": "257ofGNkFovZqZ3r7KH5PrsykDzkVwhJNd3MHnLvqqXuukP1JZeSMKF2VaoRrRerTKAondebXqQeRmjJEK4Yg2F4",
  "key31": "2p9cjDWkWYG2qgfiTuLxFSebAt9KQD9y1ivpw8mxJjcs8hzHCMzzw5X4sKLurx4cRH6V6KyhgXHPrjAQeFe9qUUV",
  "key32": "4p2VDwSJaqZAKW9a693ZtKupABio9RKfwfN9MKWw9J8NXWu6PsA8RTYuMnByvYauV3CAuSYKra3a6C3J6UUPQWsT",
  "key33": "55FgGv2wV2qGc4zrCy55aqaWzcrPKrJLeJSaaX268Z4dAah8E8tBhRqsHqwBKFYU9hAxv3q8nsF1dWFdukcZjNcC",
  "key34": "3mVg3QcDh5meMyxG1Qqu9joskKPDophEDjYGrh1fHyRHqSjR2EGb2M568J4aQ55gBy7PK134LMdAwdNfaa7q6caL",
  "key35": "4SguE7Yc2W8vdWVyEya2Lhk1g7KhkVmTXcLskjHuyHMMTtiVCDHAxzige7MbdRBTYyywmuaxHL7tseq6SibVdvjZ"
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
