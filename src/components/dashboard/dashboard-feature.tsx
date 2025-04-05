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
    "3NvjNNrt1iQBpqRbdGR5567Vw8o5jjUB9SCCa5BCscYg5pRqnRJxhSdAB8YvyKn6Wr5hD3bVYfpLb37xEYG9ZHH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bK4TWLuUawgFzJfcwYZFmg437MTh8HEYPggP4819bVmzrqwBm1d15ohGw8sj7317teSnKPH64bAGuLbbv3KSFfz",
  "key1": "3Ea2CpsLCGLs6yNMg2rVAjRFgUXfVNoJXEK8M2M58bET4pfqnA5sd2LqjVz4QzJjfxuAZFUmkg8tXmLwQGHXC5Jz",
  "key2": "Cbk9A4KhetErNy9TRtM36PuCxk5g8LQYYjKh3AJJAMNiYvZkx2J4okNWrjPdDBCdtpay8zCxFTA3oogDdwdsWCm",
  "key3": "29Ga9yWfmDDHWNRFSnZ61edtLHCLZTYAiDh9EMD4AgBR8xwxfJkaGELCbiBmYVzvDeLrwyKXGocq3W5VaZ6ui47s",
  "key4": "wcr14R5bHRZYn9GsBtK6GukNkKLGxkhjNmhmbP1FoJjP2WvwYvGLT5yYgGCyo7BfEWQJ2kyasjwkUkprRB3nMeQ",
  "key5": "4PveW6nJHXGav6oDLKTcLq4ai6gBMDZmhRwA9HrV4jutgfhySyUARRBct6JoUDorxti3SVAbkem6P6R1LW73pyk7",
  "key6": "2qYFPtwW9uz5jear4wnx22JCc6dRv8mW6gSBtPRSPCKzdxY2jQzKYY1JnSwX64Ua5E6deSuWdYpYcrTFeMS9nVNZ",
  "key7": "C4MKNYsrkXeJvLd7GFBGZ1hEumy1LyoZEaNZpC3xvaRLeuA6gNymsYEQWuDpCZNLfahWUnKcTCCAzrp3RjDRFuP",
  "key8": "66TjJLTV5DU3WNbuDG7fMMYr8p2hvyPMyw8QJ9oMD6SRGBXQiSdUGMSU4EzFRUjvXVHmrCN2dYGaCWDx9MVAoqMi",
  "key9": "63dVDB59YWEGDvCBVH3vW1EK19GqfFFC6VNdgWYHW2hsxAxBcCaJNLqPbecYCrdP4U8tqKYXTveXLc1A2oZg4Ncv",
  "key10": "2crbXrVLCHSNtq9TFWMqnj2dK64CALTWVGeyAUkEJ4BkXGozfgKhgjQ9S93Y7e4K2YMgnxVYkGSAmz5ZbQmTexh4",
  "key11": "2uhuMBGyY7zQjrjs2WNLMyXZAAgmVhaotkyPSQ4UJfsibqkGFE2VQLZ1Zg3f4MXV5CtgQP3wEx5HN9eWqxaiYxc7",
  "key12": "Su8tVrhVC3Ctt4SZNe7CNadpq3HcYid4vneamDE5LhibKpMffaof5fyNZ9xbGinuzbJRVy6oqZa4gH5ZCCxCJFQ",
  "key13": "14Y59YgQPXdfivWmD5hBMys6eKoBeLk86UsbbAqXeCpdwxLykP5qkAriYHfdPcqGT6WUZA6tPSqp5CvrmRDc9GZ",
  "key14": "4nUGXwiXXbixpTJkdKCqfr83n2cwAtP3d3Q4uUYnPXzKE9rcjk452ReRC1ok33mACQRWr8iFu3ecQ735quTErHcn",
  "key15": "2KCxfCpgMjJGcwYm1jFVPUTSwvMRpG6qpU92eMXxPePwYDdpACPH4nVWUhVdEssrcpKPRn1dEjWguEw8RSiLSx32",
  "key16": "2GN7ZU2NpZavf5xZJkjGJcXXrQUkKr7UYNKoZALs5gym7WZf2Ud467Z1aWDSZ7wLwbvN576TopCVnmdVw4rfYggw",
  "key17": "5pWFUotTZxh4nDUsgFY8Uz3eRGUUezi3gg2kmKyrdG7TZAqYtgdtGfSuWrzALDsUEkpTDRKBxB3fQdZgBSALU1pf",
  "key18": "5ZpFgRBf4xetE3MnyPX4PyPyPsns5u1cWwmwR5umVerW4HsGVuQSs1JfmTBQeVbH6oQSfsC1qws9JcsFnzraJR6q",
  "key19": "5jWR3buE9G1qPHekVHUdQft3GDFxhH7xMBayFBcyvAZxRzgeUyQRP4Q4jB9sadVcfXQXpsP39wQX9dLTh8vXTPJi",
  "key20": "44VBShvmBGHcGLdQkR3oatmMFYDK9sNouC4qQqRff8DzQ67focsC6L7nrMJFqNZPDWyFqdMVdNL5vWYC5CvxxQ7b",
  "key21": "2vDCtUvsG9JduxbBpuMPEaPMgirr4iLLUkMJjiuZBJeELyDWg8Z5rjwPXUvieg15JFcsY5LCLvMpWXMse7vTmCq4",
  "key22": "5d4Qu6br7ZymQvnoP9q4cR6qaS1zTUnaXSsGqyhKQt96VRFf3cQag24LHoNMwRXLAaKeStheN5i9CK3H5pY7gUCw",
  "key23": "iSLuUtLSQ5cRPcnTPpAxvZKFtLpNPdurubi6LeT7x9KZ7NpTBTLAaCXTMfXguAmNLAhkbgTwoNGdZGKHYUGW8aj",
  "key24": "EmW9nzDCNyY8Ha6fTmmEppiCAVPiBZ9JfECz2KJchFUMakjnZaaYWXintg6mGrtWsabiSGd1xo1G5gqK8Zd3vFL",
  "key25": "2te19PfkLGdcqMNPYpX4c6LTpyqfJh3G7taVc3MfLpqZn7MW7XEXvHb4hA2B6XiWk6CJb7hSQ6BH7BDfg8BHsh5m",
  "key26": "QPSabWHaPpXJ2PJi7ugM2ardQwzVFawK6t8gtKsHaTyfPrQDSivdXcpFEDt73jwjTRiC3oV3E6uKX5Ebt5fe8aP",
  "key27": "3vHJsCBJxJz8gbay9it1uJ9hgkt2bHbZnVRxPjR5uQL5xsKMrFBXaRPRLRiTpSPAVYGSVNk2HmSUq8CXu74XofT3",
  "key28": "oH4ZLWBJeW5oovXBvF8XSr9gFwYAHnEVYPRG1a12HVSMjH9KLr6VVeHEZGZnBCAwGZko5GAc7PMJLLrENNhDG25",
  "key29": "3rBeyBFDUSNb8EXaAMvmUdiWLGus9zfJfWEnJbZBMirGASawtere5oex5fTJrp7uUVRo75z7u4WJWFMnietU7Ndr",
  "key30": "3v7b9pQZSgSbAjG3ViRQNeZfAasbz394wgt24Hidw6VcuGvkoRkwZUHx5CCYXQ7juR2nSsGrhKzU1wh3gKrns1pZ"
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
