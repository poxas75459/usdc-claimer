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
    "3h4GrjdrkrTeNNcrnbew4tBDcrXBVKXrGLZWtU4z311NrWhW7nY3Yujez6jY1iTWhonVFEA578BURn5fMLoUk1K2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ZBJu1ioMrFHW8PvQAVbXd6uFCHA9QtXW9kANdcdm8KfvpRDSGqbTcDF6d2LNcpG74acUe5JtWzpUU6TKiPPsxg",
  "key1": "41MNaikqTwF4gCpEpHgsnCiRy61edmSzRY8HzuY6yDdKURUVpwWwKWYPvAsZocPoFfFjAF73DiB1a1wCEKNo56k9",
  "key2": "2VTrFNip2RQkdvSTUtaRkrspJxCZ9ALy7Usvxpuccd65zEqiptTsThr4z12Y8wWCoYMuq87iLzfBWXDWurQnVkXY",
  "key3": "3fZM1zSbufsSRQzJHoZ1xELLMQEzgh3EuDHZakoC2GayZqzEXtAKw8raZoDXR2JdeF4xqzTY3A7VACwUpLV6tEwN",
  "key4": "5Kfi1y2rxi6G5hnrqLVPAi8gr69CsbpDxEMq6kHYkna5ZC7inoshqRPeCLFwjQM1uJgxhrjc2QcLifriqaKpGEHD",
  "key5": "44AfbGswZJjpt3DRUMRS1cXtce8nXgpvqiDZw6xxFCPkY8kgNiCWSCqwjE6oZ4ycLMbdi9tbtLur5oRnHYGen3EB",
  "key6": "34U9yuPjvnCVpKndx6ENkB1YBCbNXv5eMzR832V3e77e3bYrpZVbUfpR8JHK2hyewBc9f7DrhnQyWV2zmY6eJNiG",
  "key7": "4SFMh2dBNGkFTxRdsghKw5aJyBkXbxvZ8qsGMHjtjeGKtznKRWt7dVXsGfNxQGuFWKwc2BJxU1aW5oBF82VddTLE",
  "key8": "5aykGjLBXVnxtZGgRGpLpaNBG4pfpoiDwib9Zz3LKk8cu3CpYkhH4jTxAjmyLBQDPM3iEANR31N3dHWWWYQaqZGi",
  "key9": "4MPeKhUY7AYJRNkFqXVx5N14PpmxMRT9TRay298dTxRWDYVT2v5uTJDUh7cQTnb7WzieTX5XCMRW7Fo8oRUCY7iw",
  "key10": "4nBGNMkqdp5VQhWU1SGhoT5BSKN3d7p6bpefrh6wkpsvhuLRN7fq2oijJErt99DoACEkzNDJcbGP8vVZzEkq2Q8g",
  "key11": "3EiWqbi8jy9iTPd83Vn2nuNvYds32gAJcZzX6HfuhBHGsBY8hDPXKzivNX8LJPkUNAdH1LbKSPxyGhh9nCpR8ZNt",
  "key12": "2mJVbkBFqW5VvUjQzVhpiLiPwdUrtK4Z4YPn68qa6NmhoVdoHrD1jW9HRoPAdxq9cqCoMNW6WRbQ9XoDjMKAuXgf",
  "key13": "4Lmddj5WtGA3vJTJCtPV4VX5bCHJtNCSWfm9JDMKxNxcavjpFwMg5Vux9VY4ZncA2QFbnBNYobqQg56Nrtmjgwvp",
  "key14": "466bTZLju8uRNiuSNCP3g7bXv42HiwQeM5qDoYZ9eeDrCKmoLarN9o69q4Ap4cJ6SyT8yY3SqmmZyrDZVhHSTPTT",
  "key15": "345VD1UsJdF12vHx4fLy4Mk6ivYrUw2tkTx5ZWvyx6nVXu2kbYKZQf6GuPojrXzrFSWnvu1jxuVvkFkZQsVFeuRL",
  "key16": "2kYRtpX3Ho2GjkwJJag41WwKshD1zCp55e8nb9UvvmyMQP2MqEwWqVr7umxpHBTPfhQ2FqtXm1BmJkLmKMguvcMj",
  "key17": "5cviN33g7t7qhzWmcXWhdkQSmRoTg4buBtvUxMCVx9ZqEH8QbMvhNEUnAEFxuhuzAwNsnWkXCDcnjWHdNF8uSGz1",
  "key18": "4PCe1Y6oWPbLzMDqvrsJX94BRzo3FNXu9vbkVpAGEi1rsmf3qqKLNtVV68pA6f1tvMjaH8b5jVsWLbXh8xAKFZhA",
  "key19": "41QmyWqV4aQnJWjjNAhkGoDASoswdVVxr9WdkvkXPbjBjMSu8RyJ7wGGyp413ZGZZj2j8x5VNhYN4hhz7K3J7yfM",
  "key20": "LYcU3eTC6B5H5SYRcCsFzF1jrGV4mJNeY7isvgkL2qecwkvtUsoFGtMTkd5HpjXvaVUUHqCtkXbXV3GiK7WBpy1",
  "key21": "ywkHeFvDFqocpXu1f5WfHd4JC7S2Rep4FyW6JpjQHKmTf4zhr7PKqVgxWRBxoop1yMrafn6Gv8awoZKy5j6Wwi9",
  "key22": "4xfFb1hudegtBHCmHQDR8Arni3sj7oSrkrRSTTuvEToHJUd7uEHGmxo43a4mq1GaxdrTxbLe3i8KJuzKiZ7wrb7S",
  "key23": "37xzLXUAsc82hePc7HsnmkXhdJP2Q4zFW6DoATvrgg77sQzckyAGA885ZMPQu2h6kDjNbHXbDyuydw2BS85rWveC",
  "key24": "2heMChm1xKR9HohgfE9C8Hsek76hkJcAEvfGAMutsZLe9xCoTFEyLaaeN7RFyYXaZ34MxBip6Hp21jjsBP5er2P9",
  "key25": "5JXTjTsMjdVQpXZJiLyhxJ3KTAqPsgnzFa1vrQrDDp6mnrTo48XouLVroYcp5VbKoMAPZVxr4w938NZhkKRRpY6Z",
  "key26": "4E6s58f42rHg2AFNjiEgf6iThsMgsXtkGBEfvCyKHcu7iQfEEkpu1NnthPzss7QknPYoqrhQ4rDso39TnRu6EGed",
  "key27": "6YJvwyXL8CYyQQUCMhUtRJ3dmQ52sY6JA9Qni5dFPtTbySGt4QFUFQz8k1sNv1xc8Es2qcrDa67ML4wmojbQVBz",
  "key28": "39SmsmQBvXhcC3dURSR89HMcXjkVntpjfDeGREU4mQb9GaHmyrLT1gBsVXbeA8tang7ZNTHsvmebK6jyNdbYbsBC",
  "key29": "3QAkRj7YYqTNqqs5z41tbhS94LiqY6VkagH4eeAHujaLDBcrEkjPedDpqaZY9GAC5Xo3nnnBTw8Quoe3utk8c63q",
  "key30": "4kS9F24rHkWW6cPFtSBuSGnWCXCLVF6YUnnT3djnmLUJgbvtTt3AkLwBMwH39XGCEetALbg1VwJDqJ7JbuPUCVKx",
  "key31": "3aBiN5LkdQYrPXtfFvC5HciStqhp84gwpFvmKEvghYhiedichv69fssFGRnsUYap52jBpTuhqstdVE88b7Q2DBDE",
  "key32": "5J6x2mTfSitL27pG9AkgtYPrRZXJh7qsKATtKrTPRxkimCeVFbmYX5yZno7fKVhvCR5NWMqXiGDENqQXJZdZktrL"
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
