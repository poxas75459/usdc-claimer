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
    "mW6DrF5X6rM9Xha8qPq2DK9Qyg87AbFngcvTtwVqvsuiDfgjHseEwdoMx3Ei8fgg5H2SEdb1p21YavBwHm3pbs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ocbed2uGMdAAQQt9tYcorLZDLrDed5eJ9Ji5tWWE2Sk8dHKRENvFiyHpoqduUQGe2aDkg3pZCXSjkW6UvXMx7iw",
  "key1": "EStBmwvMzKjvoFd32tLQDTMReYCH49rMCCgYYq7h9ZjXqHjTKCRkWrSZw2CfpARgjf5k3ubG8XGp1G4cFFbNy8S",
  "key2": "2DWG5MLVHBGD1FAhDCSnbipXAtqq7KL5busab67mRznDWXt75YffsajaPo9y7Y814xkTvYVW5cTy8cfosyXRdTg4",
  "key3": "4KVSdHS3Bjeaf3j9RSFfpoKqhvbQPjuBMJGoLhJfFy9Ps3p7cfL3mZp5NLQVbshbDHy8PWRjCozu4j6aGmJv4Ruj",
  "key4": "4oiH7kmMxvRLzhMjoecfoHU9geqrUyzX3qZgaKqqEHXi27scNHKM5BUAV79xV3M1UqVzrDh4i1Wd33BxTMGeahBx",
  "key5": "5xKLSphATEjkPrVehPaHyRGcaYAWkYe2xXu1tHpd2jyW4ttS1HM8Xbgd4vofbmRUc8cbeMgGdVigJy9DWnJywXVS",
  "key6": "3ppft1DkR5pu1MiBpbNpcaHS3nkg669aVijzj4GN48ZyicMCA8pRKgsWtXBEYELxQ18Bjy8e8XfRZBr2eZcK1LWw",
  "key7": "4HRBQUavTqQYRhYQkTZLRYzFSYWbizHzw1sopPesSiNqxmmfmrBA7Ruuec7poWaegAmmXnE2EP22Fvkn2AZ4MyTN",
  "key8": "2kiP47rBHUZpVm3yzzqeKF5isdeDkp67uJADrgECaXHa4ruSULBwXgftYPvCyq4X9ZD45JYCMFCj9nEWqzNjqR5",
  "key9": "2g1JgM5oe2vh2S39PJjp8Kjy5AM5XPGrP2hAwCQ2dzTmE26DHYm1tL5ZaCjyYmhgV4CbFWTyk9GF91kcmSkSga1T",
  "key10": "5X1FMGLdVViHMPH7PNBYj9nnMotUjvdcwX3MytruA1vLgpsKFy2zcR2scxCE9VedgJ1EVX9THM6eWx6mXZZYw8fk",
  "key11": "5zKGbSPJ57wSMQktaivgK498svLG1ztmkVoTmrvWqyX96R2wPD26QZqRhCc52BbVvURCHjioCCmAVqQ8or4x7GTs",
  "key12": "3P9cwk77NdpwZYKJ2AmoEHrPa5ekLBxy8XiYpZuNNGZLcYVb17o9vTBeVNteBkfyCM9X8kriXWnnWbsEbx2NhHum",
  "key13": "5jAMuuD93Pfo4WuzTPLMhP9fcWJSkKsjg5CiKCSQpy9QErsxRNNCQ6BmyYAvnGgztm4aCzvHdSaic5GXmg16FHga",
  "key14": "5BVPNSTHeKrMbF7SM7VVv136A5g7micV28q8nVPDwrK7sQ29q9oSqc4ndgfkCpDvnPtDF6TWzCAresM2c5nPgeat",
  "key15": "67kkfL8GSpGZGg37aV7hTQGMdFSbTm9mXEbjddseSM3ES7YFVVeBGAZBXjhHN3Ed6G9FhS1imPLwyNDU9BEAKzZE",
  "key16": "b5ZazmaFjvSqoRrrmDKSXikLc3tfNVKM2KtNozSCtHeyzqBt6F4Q34kEaoC1t896xPkoixoAYDWZRhrUMBmsJk2",
  "key17": "4J68tQywkspACJfkpYGrf1S5H1bPvnmHGZYyvUzGeJnSYmRueH1ZBNApoB7RiX7km6JP1LwpJQAMy9s5ei7oDhCU",
  "key18": "3KfY4zG3PctMrVvbkT6URdL53rQwmeSieQT1WCzi66DYjKje4bgcRmQDRtfaS9agVHbSMp5FqMxyQ6zU7snjNbjK",
  "key19": "4dbuFHZxEAFd8CJkgNKLsaUZcvRXgkUYZpQTvM83w7SFwWpKpbzkyJQtQEzE5h4Tk9oCXAabkuHfB83Fy1BXZqTR",
  "key20": "2w85E2HgVvx2SQZkqg8PtexQsSqEqikNESBLCRJK9opR3Gq8oVQ1xM1Vq5Spsq1jyorFMDSstzvbgaD4T5E4wsit",
  "key21": "4kqoJBPcrEXtszNNJhXuqfW6bVWHKw2aeh6QikZitbUectuyUFFVGxiZVMypLe3o6sv8WLnhmQhQXzphr6uJm9np",
  "key22": "5u1racQnvWQjwpSVf262fCPRhoiFWJGftDvebkUdzTqtjvYWfzKzQFus32X6CeCGpq1vi11tsr4ijrEKGPR94i4M",
  "key23": "4GXdxkdpe1pqMqLUFwXbXdoDXpWYLTtqd55hJabDSmMyf7GtJBG2zLTKKGskMSPBzSvz96wd16XVQEk6NgNB6wMW",
  "key24": "xauMuMR4Nqj8QRVp4PE6PqaafDci9EGqjF5RZ2GAUSdQAUReekka5uEUetu44KApFGDsb7qz5igGuPSeofm7mw6",
  "key25": "29LaPB6r2BXxuDpGoUZJnHfSJFiAhyYfiEQ3DCkNnMLiMSXdkj8B4AsznVbiGKbd1YaGzQLsWaFdM3h1UtP2gnGd",
  "key26": "2PNApHGT7DF1RYAGjj6ZwjrF6FkYcAWW3q4PaXFuvap6eG1MKZfM3AF6GKsmW1kpTHAFfgCf2RiXFJETg6ysQBiR",
  "key27": "67qJBpYgRTj6LmtqrcLgp5pQmtXNAWGgWHBSjwYNwGAkp3in9ckHXoJ4ttsTpNXJBpzyCmEWNtenssw7xDxngzKN",
  "key28": "RQrtKurWi3p8PfgHRMh8xfaDLarjFF39dUBJoRFrPyKVXE7mJyfhNJnJWV7UN89GirHnz2DGFdaAHntBEfR7wk4",
  "key29": "dhiojTmcw9xFXYvsHpbMdrERByRom8PXJxNHv46uNdgU41Ezh9EwiccrmWf416nDUqgBBdvze4LEBY4sg5tgJcY"
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
