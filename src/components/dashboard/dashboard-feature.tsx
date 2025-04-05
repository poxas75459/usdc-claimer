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
    "4tYJjDcJwNzRyrmzJiJqDZVtYoyLd2dcHLyQt2W8nZgUPHC38dBBPS4TKacVNf93qZiUVfBCYBeV8Z6MJdq1Dz2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EccEpEu453rx1HPT2CZ3AgQqN3VmdtP84f2oFuTGX4RE2XXApnSAfJCEwsPhLyQrQA9GLW4aCaeVtTrUAVYkb9h",
  "key1": "5ZndZgTQaQsF61iaMuw4b2hHwzurPD7pAWbkZxGEDdnP3RBmTmgXzQmRzdhmZtmnWXFxJAP3oRoqSQBJjmjhDPHG",
  "key2": "2nmSVxdjKon3qcDRC8gtnGHFyRpsBFNXrmtYv5aDVrYtq6XT61S2VBaL4QNfirNnLLgUnAL5nxrEoqYcd6ic71Bj",
  "key3": "usyEx9nA7q9D8nV8gReqxeGA2CutzxGVNUgcXqTKKfggrYeGgqGPLDSKU4EEz66QB52f1XuBAkBDLuym2rQb5EG",
  "key4": "3qzbnHSEoVjN3MAH1HPqYXwtoUth9Hq5pgmcUcueQzF57EbPSCdqcCnDLTFqcLVFQ66RrkbYZ8t1i5FKQHKc9RED",
  "key5": "3nu3tKuYnxrSXsKK7hbiLZ7E39jCxxyHtvzzp5wCL7QmXf5u9PuXE5h2yuAkmMZUvw6RNLZ9zWRFBtJeHx3JCjym",
  "key6": "2yU46Lo7GPwnoHC7hKqvpvymon9U2vtNmR4Q6zRvrieBE38YqTrkwn6QbzwRkH7pgUWcmBRt1F7kZaxzJP7qdkdm",
  "key7": "46Cc4KdgkB2cvsRBkUh5Tk3vG1QZE2Ez7zPpdjhs3P1UnBMMHcQLCXk5kHAG235XMh4RCDmrjPtRkUWTBv6kr7mH",
  "key8": "3weDyXWtuDgojx7fJXfoPYQkxXbGambXzKJFEGUtQuCwKrnEYcUQbfcfs3kpn5Gujm4osg3qehhRvTegpUKF5cgf",
  "key9": "3ezRgGopUn5AR1b9zBFRqj53fhLukpqx4oKHQkvNu7mVCVLoiiznsmkt2yYGGR7nnKpyr2cqKrFEx2PQFapN4kam",
  "key10": "3RCeev6VtriUD4sAFic8nTT5dTicseLKPZuuhyVUQN1upnv8yrCux2RWJGY6W4JiJeTKpaSejRgFwvX42mhXJeGn",
  "key11": "4aN1QUzCDTEs9mxc5Hc7mSLhPkdC6zFXjEn6GhHNjg6pZ3XpEhF6yf17ba7hG7jkDgVxbsa7FyUaqHQcdBLX7s5F",
  "key12": "5YAFAQ4X9nzs7DHFnkSiSXdgMkAHjG1HXddWWdQ8ubGVY4TxdiVokmUmmA1ooC4AaCrL1soJwpk6cAjTPuRiB3Vh",
  "key13": "2uBEYJiossB4tb9avTx6CbyCncv3ZnppD7rmS2icZ7QnmPiDrQQpaaE1taVfHdfBWBUfu3mLeBAV1BUXYwMg1QgD",
  "key14": "2eryZeBD9nxALEHYLdGX8nbZasKiTB27EJ8XzjZ994NDM98x9AS7cmiRVhnvW8Yuj1jHw8nmwUH5FsuRQ38FRLHW",
  "key15": "5UCVUNHdtvjGiJDg97yMiX7ML5GMD3K8hHiiXajzNxX58VTE3uwL4dDt4KcDFv37jFfqmizp5GUHu75VJzbkjKvW",
  "key16": "3JC9utGwCjmqYD8XTWELYa21pz8U5zsKBnTF1jS9kpPSzkMJf512QiJASHMxmY3pZJXzEzxSrQF5FFfpWc3UYURY",
  "key17": "3esg1A5audv2fh6sUcou7eFubkqLHafDcwRydLkBYaA484j8EAsoYHTuLUSFCBm6LkSVmtETV72D5ru4UnWh1RZe",
  "key18": "JDxKBSu2ahs7yie83sHr1YG7DuaxfT6zt5v9DkPTfL4XMYaiA92hrxRZMorsd4G7HGcY6qRuPU88uqpddr8jMhw",
  "key19": "Bbh3qfDh1c9N5ToY1Tj3Nz7P9rRTvMRwLvS3ZAxVDG1LN3fNDewWz8nb8fSQEXh9EmBhbQAyR5qL5u6MZUnJQ4x",
  "key20": "3qsw8dVqiFFLnuy5XgcjHHKC4db9Qn2FHQxUqgLMqHDnVo6yTMTtTAob2T2gisJMRhzfFVzTJvR7qWJN16GYgJVX",
  "key21": "aTE2SS9fCr8UXi3jEDThoqQXdpJoDsopYV4bifMh6NonddjwkBtzgUJfuF6mTUzWFVFg3kjdVGBgyZo4RqtAt66",
  "key22": "4QoSp5HFzfZcibUtxbitmBN1QypAPgZhY5XZWk3vernSkiR6ebB4mXzfKXQnZ3UGac4TpoSwdPycN3LLv3GCx2Z1",
  "key23": "5Z622KPKy6A47hX6TEEn9qUEVTWgtBXf6axLaGrHdzy2UWBA1aDvEujg17pH9nMCxiqCm7V7M29cFGA1SHhAfaEP",
  "key24": "2vwBTz84zbMxL9USLJpUn999AgL4d3hCjDmDszsW2Y2n8o17GbaShLPwKVWRMCSZKFCJ8mNNWG1GZpq4Pjsqq1NM"
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
