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
    "2rBZQ9yv5McTZg7cBKuP65S8t4fHceNuwt2JEm3EQS9AxpzFv9M1Gau8nS1AkoG4yn5Aro52sBXA2J39EVxhmYgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tz33oYM9KjQxsrQiTjHeee5QgmXJ3DtGU3gknNurmRsM3trZjrggvUkFqLPF9JX32MKaGAt2uae1qW1W2zLqM5w",
  "key1": "4xkePdGR4HAGA5S5cgPBvXDoYbXHiwkJezsnQiNfmBAkPki7v1eDxYhLirURTZCtA6td46dkAEUtTf1Z231riBrP",
  "key2": "2cHrK6YrjYRywxDrqyUZGTBEUoKp7ed96pj5E1ScJVz1o1xwZjB36pvZiRAtKejgMTEsLy1Je2CyaxkjyK3tt792",
  "key3": "25yammZV5NjGkCJkh8h2qRA5KstcrJAesBzWhxSWYA94HpV478QysAzSUPKwPqNYhDf5AN6nzVXCSTQ24TaUt79w",
  "key4": "4JDwxqdzHRZ1AfDJ71Vwd1Y6Gi53ETGWVniav7B2ukSBXsZQzBKagSrMZ8sjD2c7KtLL8sQSe29i99Pzqggv9L6G",
  "key5": "3NRyJiWRM6PQWSFK7rsqUjiUFNGwvDG9qXfmfe8X5f68SQewLFoW6o9CvXqAKpm9N1midGhtHgJrHVHSx9dkKHor",
  "key6": "5AQg4JHSJ43zi2UWriXyL1fdbjXr27zTvDjTLJyXicJVkyKtNhYSb4V9753whQzzDTD49fVzCu54E2E8DXnqLrH",
  "key7": "kStomMNqxSqQ1gho8pDJVcYnyujnmHNbHBFWbfS7tRQHczt2bNdzXWwzAtjjLiEvbKT6QTkF4U8SbqQzMkrLJcM",
  "key8": "3tDgfYtQHPP3VaAq9s2LCA7aAeJpPJgL7THP59cuiMTKS7vB8vYncsiY3sqBnFhSnwQquyuiKH5scp7TRa1aVjHa",
  "key9": "5ZySy6RUmnYHk4ZtSj1Qd7UzyHp2Mc8MgQhrDjAerxn8z9frfzGEJV76hfMeDQRumXMDjwQWQ2tXmwgNsvqgYCaL",
  "key10": "4H4RsYnXmjDa9528BHYRwWVeE4ZBqCsx7gqwGa3Vvrg9dEGKVEJP7G9QjQFoqzh56V3z6nfEKRp9sC4qfegiY9Mq",
  "key11": "3U7YrJa8PYcoJBco2FVYQC1ymdwEEs3atUhMcB53v1A1ST5ZYEDTnCHWBzHGUU4M8nHWT3aT75teNj9pLzMRWuSp",
  "key12": "3qY8GfMptLA5KgPkfXuhdEQPiqFQDVwxYgcq6912k2jCVkyXExgJiUKq4YWQN4p3CwtCVxYqh5tyRXTPZeEnqiF8",
  "key13": "51wyDdEdmv3YksEMeQP6eo95BMnvhzrD1oFnTmaXauZVpSiShRxro1MZqr98PT9moWg4UQameZCJExuDMc6aU1ho",
  "key14": "3CwP4jkVrvX1ojPSU9S2H25sMH5oJVtLKkWbsUVuAsYyGSTLFodZ2Q5koog1fM5hiUZP7HpxNRNtAjfMhFUeXSJr",
  "key15": "5keYEdPyR96kMnBSTjFL4w93rrhp57mtAz6orJXusSRfBDCzNDG2HtiPG8pSWc1qk59SsKm32NBpTbGCw1NKTKPq",
  "key16": "2Wn6iaSc41jBjmjXdWF4YjYVhCfihVVDd2ZqMfDUFLACVcjVmPAvimirHSbMrveXfeFgqFB7j7thKLQ3VS7it2nc",
  "key17": "5PEVck22o5cQUqvr4toqvJke4wgKTjrpmYC6fZcR1CFi2dZNUCXgGwk2tB4URwPt9mc8TxU4kDa8NsM7n4KpLbtX",
  "key18": "4yoU91FGSypEEZwzoHiiPMvH7cufheKZjYxxozbtgYsM2VyWxmt9XWGvB47k9wtZhBaX6r9EJh8CydM5gEa87LMZ",
  "key19": "2zu1MvMSXcHYt4Dtavc23jCh3KEPWKYadBm3uUBJdfrfs7Bx9TXsf9XSauNsFFErEwMZzbDq48rEvWhADtRkPeMB",
  "key20": "2oDEMTzQWoagcBZ5enmFrkuCVhnWPAkTcbs73DbgSyuh7AsgfBrc7CncSDgNFGT7AL9Nm7uA9VhLFaf5ZLtEfFW2",
  "key21": "2v7jk2oBKaAiYTcqEYDvWaF5TPd12pLxQNKQEQdJ9rffyT5J1ZDhHXcxYftaw7Ltt7eMneGmzRFPqwcw468a1bgy",
  "key22": "4u8M1DFyeo2qwzZ7pdJqzzAgw6vx3Zetz9ZmbVrA1pJGTinzQWsqyTgGMjbBFWyGUu9CutbcdoYJjTMFsAFBNn6d",
  "key23": "5eJfsjs2LgJKJ1b4MhZhRTnTpeDx5EE8zc2TmtMCrLpGjhB4LoH9K9tRjjoADZ4nbWH7HMeAM3ZCjhNdWbrm6rxk",
  "key24": "ibHswhDkqchhjZMif3GH9gHXVpgTT5YsfHGgssw3CYzznY46KAx2D6nrJNRE1T5PRiyhAE5NLbv3ZAPcrcz6bjQ"
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
