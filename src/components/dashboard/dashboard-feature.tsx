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
    "21gR8EooUJEP2MPjacjbZYAPcw3PphnjYt8Ew9nHhKH3gFuJbVsuWPinLFtBse7csm61g3eLwS3qbRBqhaJwfcD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4smRmgGHL6UdDnR4vr6RSwHvXiaXsSKqa9FmAm2GSBnUTgaaXttQboVM25FYSVZftSoJJwL6Wiq45CxVxWNru3NR",
  "key1": "33K7jtSepAWWEjN4uKweK5LeQHUGmajvv6Lr6zC2Hx6fHWuuYVWNJcCgrLNTAGbKaa8hENiMEFHAtGZCFXtBGv4L",
  "key2": "SYbNtW9nJqWRAp4cVT4HaXTU3eU5NnREU8hg7URZZxjM86hTryTW5h1wEHxKxFEbo1TpSwdMJyAccjt6JkUQV5X",
  "key3": "2gbLsSSrnBpy3xDcUyniMzVV4yXH1Yh5M7LZckw8fNQ58e9TeaWKPWnUAoGGmjVJjLEYtcScEcR8A1x9VNcRa69m",
  "key4": "3kBebV5s7dx748e1o49YCAEEn4BfRJMHVkjG9Hh9ikvmMEdXr1qXpsDy3AwoCYDS9R5frcrLwZoNndkFuC4sB83U",
  "key5": "3VQT2Gr8AbhMrLfnpHF6Src5j3zVUtBWJJs87CxjmGJDPvyfpfwyvvZPbJzdoiF5xaLQyhh8Nfi4wo4xpkAiFNMF",
  "key6": "4VB4G2QLpPHswANLEdhCuYqHtR5JJkzru73rgyE7WEaXMZfmkbrUx6rYUzgrWWaML7aWwRi5C2Syx3ruqyYtttFK",
  "key7": "2YekSDUGWikAhdWvS1yuRYYh6TSZRuyGjpsQp3ZqzNf6uNMvKZDcBXnNudzr9EtZ3T8aNJ9BGquMaTtUBXPE2yVb",
  "key8": "2y7MsEUg29cpadadqepUCnRbn4LgT11hgVLfWHemxor5YeBNGdcWPofELt1yfUVLobxjcQqrcHXtVWC83F9okfwX",
  "key9": "ZUCnzYDdzcXFbHdFYycJJx9eVLHyFT4ecmmMd58zFi21XnxH7HvXTUV9kKvD6mD61RSMB5TcpGiWTeTYWAYZ6mH",
  "key10": "5uvLFzhqrVPPRNLytZRsJ9FrmvbiXkWGFCGbGWd4vVgaH7Fh37siWRXNax5Yuaohi7CXUV5QqQqDBvwR8EJFcDv",
  "key11": "4wcEKzaV7rUkbc7VrmQcgsmdM9QynfDCSaGV6nYMiNc89cRjroWjJST6Q7nnYLngjVjk2QwrJJB6RRd2qvwtYp6z",
  "key12": "58VpQuz7NbgCUDhY8BeZjW2bzNdycX4fHJYS3cHQmZG4E8K3pyGjmt8sdv8rgps6KaJKFJ2vEEVLGuFAWsqk6dZp",
  "key13": "4a5XLnyp4ec2kzpKbTVf7fM8xb3qrriBYRKtaVMgX4BcbTXLWuAm6Ezz6HERaihC521WKpLiGERaSnVGBRTaWUX5",
  "key14": "FuaQpFYMfmTd4pFN4zJPnvwVLdzFFWnqXb39xmSEzQSWXkxLr4hRj8VwttaEVd9YoRoYEXPynh7HPS74A1dEdov",
  "key15": "AQAGSec2aCxYEBeG93jQcNqbwHK6fjo1yj1SZ3fqywYBmYn3nw9THACJQJpwnc8r5bigqmWWUT5g11uLiWpjubJ",
  "key16": "5YScUX5JoLarhojBQZ9rYRywCkLdUo9kxoFpinvyfgnsG9iYFjXAc5JqMX5YkL4xMmVHZSg56HYiWhrBVQn2egQt",
  "key17": "5RQ97TS45pLah3rRrZ8kW3WCZRPtSo2sXWp6ZyAienDcXtPBr8JBxWHqN6ZVAHUcJHJtL7dcxuh3zMePHDkko7fZ",
  "key18": "2Uy1qYGDToNcgfZDsrvugSayHA1ugxDhaWZ1Y94S51D3Gyxj16ZHaAgX3DvKkwcHypYeJjBZk59dTGvmhdtHDRpr",
  "key19": "3EFoSgtPviuBGGumMQP5NLL7Nz4AhcFb3H8PNaZKFwK58oipw8D6yymDmVDUz8xcwxCzr6GvXta9h46ebBwhZMVz",
  "key20": "2TLBEdtEMnY9vK2GPLmvVxpwQF88My9c7ySBDGvCc8cTygXedYTWmnmabvpfCQGzzcRm8i12JgGrEpePnQSH7Z91",
  "key21": "NtKjVWowZAyU6RPbyKuJob8CD6o5tRUSeWoNhRhRno3LeKQHqEPUBTHH3A9nbnU6yPrUL1tPTaKAeVXnWizs86J",
  "key22": "2VApMA3v9Vtpk5NRdwxCoGmeMRStTF4YeYaDG6zsw7iHWLJ49VWiQUQNiRJXELkGkXkQ7Na383Rcbiq1g5rdAw2Z",
  "key23": "2CkWeUcDC4uDFMkJX7dTJ32gjG3e8fTzzFJp2Z7LWWmr38NQFcE2HJBZhrbwa68vScPw2RB8UyKztK5x9wjjrUKe",
  "key24": "28yWBGaqMuzbNHbvqNbBwdHkvDZF9RH1Jv6rRsQWfXQFQSemM9o6i1PgFz3qQDhj1e4km1e5miWufPsM72D3DfMT",
  "key25": "6JGwUprt9fyF4dXH2z9VcsSXHvuqnRKiVFwDnrCGzVsLgDSrjf4cYZNdWyL5428w4LYAZ1VMz3popA4Zj3yCtQN"
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
