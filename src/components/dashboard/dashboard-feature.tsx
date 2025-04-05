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
    "4LNu2WPBFmhe31DBWeXkmD92U57yY2XcT15nkyucpTNSXGJNgYwG389pRSzLHHQgAymHrifpRB8S8Y7eUVVctz8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mnh31CfjJ8rywknQycR5vNKA2mcquUbAT4SmQ2EPXohz2qcd3AWqhRbRfobAUtngRgHiT81AEuki1izPyYHAkuJ",
  "key1": "3rXNmv2PdCuSmnNJwVDQSzFALH9Knhta8xWuiBo7G4oCVgmXqC2i2eiTnaf2JZztvMsBdfYmYCUBBibW7g75SYxv",
  "key2": "5Dkd3Nm7e8dSEfVGYJ8Lg9smv6JWiTeSdyMphVnL85YzxeRRq382pSyd933Nz5ChYc9fyq5r9wNXBdAxsdVSVaLr",
  "key3": "36T1Ey7HpLn7UHRJANgYczsDy5BXwKYVeVMkabULKVXighDAbAMALdWFee6bq1ZnFoRfMWDDsmP7kvZM4hUhdfP5",
  "key4": "5Hx4niAtGaoBgWRLE5SwBH5w2aEH4pJtJcVX6MvGhCuw4zVkR3ARfEoKPub1TfkG4LMT9NBgo7KAWfL44p4djVuB",
  "key5": "3ZLk9m6iUJgPGg62e9mLXVFuRKFdEdQzs9h2YHisUaqB6DnuAK1Jt99kn87JcegviRwYtfHoKvC6w1RiFxL3mxaH",
  "key6": "2PMw7vpGUX4ay5AxzoXoaTphoGRYNYBYGR8Lqmg2FicgDxM4sjzA8zXnG7dwKgcXrioL3u9gUiG7QBzQyq1EtJxe",
  "key7": "29wfaSGebkF9mgTmvJDr14rcRsAS4Lagz3Vb2xACy6wyebWam9CHbYDA1mfJnHddhFGjQTZWUKHdpcF7TTu3EXDf",
  "key8": "4pEPHA1Nhf3Wi6xNC64KGMJkayNFqLxFAT4TwDMoxQ45nzZa7vC1BiP4726AwhCjDd4QiTzNLU3reFQasHiCB3P4",
  "key9": "35CxXcvwSzHZW4ouovBu9Ap9Eaz3Sf5W1iAor5Z6o1CRkfjXpEhnkg6R5ZivKusp4f3iihVbpkGTJLUTbQyN4MwK",
  "key10": "eGT5Dw7wh5no8RyYMYd3MDoFBFLvwoioL6p4HY4gJGAdRr3vbrr44gZpKf89Yk5gfjr1Bim6dzquNWShSYbuf8w",
  "key11": "3VWYYkZHhfiXn4sfdrrmrynP2RqLAZHw6TyXyPoJuQPibTVszDo24CSLNSmjkncrkQdzGjSKJ9dDWQC7izC7Pb9r",
  "key12": "3gi2cnXyyE5PZtc7MuoDcMNUvUgCgi9HE6YQ4d1hNYiESvSoezQwjUs2mt85jeFfNNPNYQweKWPyzGzsVmKQ8Uu",
  "key13": "3jTGgJ7qqamPsxaxSicMvAsFgALtYbVNx3WnFLBpcUiuvB7xLAp7hB7nq6aJtA4yzrUsz44hQPcLjLf5H9PVsyuS",
  "key14": "5MZ91cuGgxdZzXTPnPf9pbYPXXYusdmPJRYPp5xpMuZq9X6NpR47EbGUCkKaYdETZT5vKpiKpWqWai2cz1rH7xV5",
  "key15": "2BMH8ohuxzqaDQjqL5Rn9NmKQEq2Yht2N5Jv8fkGacAxXk3oEyGEDmxQfaV77cPzKyycrqsdzY2zjtCnpfm2o3G9",
  "key16": "3Vs1uXGt1MWi4MmkizUvmd1JG2ganD2eFa5X5y2dNVcZnskz5gh8PLKqrGi1ovfz2u9UULY3QtxBcySRJfcCuzg7",
  "key17": "3zWRL7HxapSnAVzKPVBuv5fnPo7hfWvAoJQJz2UpitT2GVyBj7WR8P6a7xAWFvnPSnDAnnigaDQEXMzR96Pq37MU",
  "key18": "3tcSZkPP4AAoXqTousoj3gXNPxmxttXcCHd1upJ9miz4zxyku9U2VnZigJQta6hwKd5Yuhutvmbg48GCGoPBppj9",
  "key19": "3EgtmyCoXh1mdvwUXk1B2joLK1KJShuecdfRWAGpkUQQT5Hwk4r56cpg5d1SbVitH9A2J9QbnhCNb2vsK1aUbdZg",
  "key20": "29jvEijWadgVXf7gah461Xvg47bchY1sWank6Ffdd1fnaT8EyiJFwXQ2bLTeeAX5QmkhXrd1pnVdrpkVVD2jRZt8",
  "key21": "Cypq8fvczApt27v1Q6JhvC3MmNbKEK24xLCNqzYW7ZJDaAvQDTpiHeDKa5d79Ed4cur7Ccz7X4barAhEnjA9qRQ",
  "key22": "2jVCA5UXyAt9sNHXTQ32UWxV7ySoES3RrqbYDxaGZsXdeUsVcJCMDJ3QJ1rXMg1EjHFVqUzurgPRbz4LhFStrH8e",
  "key23": "39YHsHHd23JNBNY3W8P4P22h3yXYvpX9o17CkJcs9oCiQYQELJXPEQEzzPovzLJTMymc5T9UuDdEFM6NvJd9pLLu",
  "key24": "5gYcNUSsnzNX6xyYKJXJfoqT2bKjkndGHwDGNdEzXE93NXJtPD4BNHV2YaXDVBQHYkaTwDHG4VQrVoYMWBXTmMfM",
  "key25": "4TVtLcbfF7Ywet9nNFqV4HS46bXtg9wyt7fzAU94kNPTVfFMS3agbDzcnd4Grav9QGTaUur83r9TckdFFA1EvWsh",
  "key26": "3t9LspEiVNP9Je4CUuAXutJvu3dzHRzuJswsRcw4Ht5V5C4NRiYUJRD2YvYR7eWV94sjN3b2mNRMWKpjmuRJSTZZ",
  "key27": "5QveYDaZGN2kWRZEbBCGy8kZKPNHynt8denkxtX1bK3Xpyq8kiTvktrHxokffahfVYz1TfKiUFfnfA2YqqdLjL1R"
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
