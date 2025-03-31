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
    "25YqjByMjGYpAX1W5vtHXVuxPWQub7xSf2VfH7MjuNK84c7Fis7ErA1BWS2NSEC7ZCKLVVa7jGiEq9mRC22ZubG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g78275mKeQYACv3q248oGRhuokGLyPY7fBrRxY9V5MLoFAPrnpicKGV6Js35r2ccAQjeFXDchJgnPVjqEazSJcm",
  "key1": "43viykzzXCVpMfny4HbXsg2jsbPveeei55rYDikNrJ6vcabCMoJNj9bCXmFhsE8io82THLxmHR3W22q4VYwrZCBs",
  "key2": "3j7EFPzaT5C9Hj1sdRNAkiaT6pvttSQUATRchwekvCPpHVqwFMhNftw1aktxxrNe3gPM23ZbLLKbzDYTxBj56CTL",
  "key3": "3m5WKSzuSo4n3Yh5rAzQ1YYp7s7Xymb6tXSpuJ3kfC4HyPm2MNUATdu7BG2vVTGp4EpkUoKfsdrZoVFf9ivK3x9h",
  "key4": "3gHhyx4GBJ26xxnyAR96iBtgTompkKzWvMDj4eVDRBKbrq7ovpVh3Nva5jpaE3tgCGThqYm7Tumj8xEijZxVqEBj",
  "key5": "jCa4qhyhPaSuUBoK9XE3EyX2DPoXZQZdBagZxcuJ5P9fRyqVXUvt2dGmZSm8ET3QBpNmHogQAvGGah2jFLeZpMu",
  "key6": "48SwYge96tGrespYnUbMEznpJW3oHss2j9jvjd6vr6ZjrkX8mBoTyakLxNy4MFu3BUzUJZSLoL2ZtstUasnsxT92",
  "key7": "3mkTNL6iFNjo7ezw5sUBk8WJqCGMqXhiqsuhet4zQNNQFighykUHiRzzbJ63DP5HBCuTTPUqekbA19K1HueVPejJ",
  "key8": "67crYmdeHDqwGxNkCmKonidobieL6g2MqsemaWSZ9ypedoy7rUsRWXr4jJp8m3PWpQBeW6HoAcR5StStk7UQWrtr",
  "key9": "3s32MUaUfjwMMGeup5xbiU61kMRoRXDbuVVrdEpuRxhijGX1r8yRVRkXz7pfPPPzdv18JGZsvn42UnmnCNVWFNDC",
  "key10": "iWobgFJkgfqGRUVyGNbhEUXsBEeQxRNogikf3DJnvV4rjyHUqC7wdmMxvrJhKYniTC564xQn4BWXNjoxS4iKVty",
  "key11": "5wfVdjHzewLjWNjiahMzszn7CR5UDSSXVYvCmBXqu6u7gwwXWxMUMyYdWBKvxK35ueCL5isECSBrz2dr5m4RhjNv",
  "key12": "3RtGKsVhUcZAuenKCkNVUMWfqw6pRdHgHPCkjju6JCzjbGGuP9Tm5snf7rvtba5XEywVC8JpMbYFKxjoDWxdfDNT",
  "key13": "3RLiQbKSsfkMr3UHrbT8wR9FeG4kWwM9C5JFtdXjGFYRt63ruxfXabyQATGKhN8MagTZEPdEmfLAyuXkxnyffGgG",
  "key14": "4Bh5h9sxhue86Spx5SkByNDi2U522iLPMLNLDxte1ZJKtLuHPxjSVdMPfLUL7UBj2xzUkEq9xWjMYwoKxJmqS6e7",
  "key15": "mdfsBFsBqhqE5ZchPSx2jyBCtjzH8ENn6BGcStnYJm1f5tayJ7NDYRbD9uLgr2zjWjFFTK2u4jHzsGnP4FJeLrC",
  "key16": "2UWNsgfbQ9mn1KFYmjSFk5NhGdeW5fe2bv6wgGLoJegmwMq8ftz4HoitJFmgK6ShAWcsyDBrtygtiYuLdADYzPa1",
  "key17": "2Ae9U4dh1u6kw8sR5QtD3rW9E4pypUFBmduJcJfp3q7L7h4ZSMZpNNf82RS198mcqDtLKSQ97eidGQAvef8Dfuou",
  "key18": "5Bo66eZDsryHUuEfqxbyMpGQLjTEMYaVa6YsE1fQPdvbnPYvYjASjaeV2D3jsZT3jws2KQSDD7rVQEWshVs64sLR",
  "key19": "3vFMF5iDRqxL9hVvDptV426xKjMo2vsBTiwse4tWHEgyFpdDwck4CWz5p6TQQcDpfvZvLxDLCQkGXKPLAPFmBbtr",
  "key20": "2k12FMtCJWH8rX2qPhGWq1RbWmhjTw9GgVzBrFrwCU37vqCoTpXbKf9jp51aTR9VYCc2Lw84c3R7YRtzdNatSVvY",
  "key21": "44UYGREkE2rT3FZZDVhLryavrkEQtfpt9VFj6VwcrPwWGbgUyPp1xVcSH7Bhsjn9fQsmfF9YVTTVk9ahuCFCV5Rn",
  "key22": "5jAtxsjB3o76xX2boq1eUqqReAPGNDjS1oigKD7FKn9NeUZM9rFnLJoJ8iS1x95ZzRXfeLJDX2RPLmqaD2ZURvvY",
  "key23": "3jrSyUw5uXfwDgFd7Mcn3oKZx89JeztXHAVLkmninguLu16DVDhDjk2rEyB9D6gZ35qqs86etp7vcsQ7vuaqTY7K",
  "key24": "3oHdmSrKuK3ahbDfTWWM8jwn6swqS8aon7mi5pYwYGsCKzJzipMndGs211HfQrSfkGcPDttmzP9vHhERLMu4MXiC",
  "key25": "2ubTz4Ay3qa9mQnEGvKJeAsfaH1JaEGgAdQjyWwmmKtSCMQ18enRsupbM2c2xwbfoW69mnauGphWi2bcuGQZgx3L",
  "key26": "2TnUwPxF93FoCoZZmKA2TrmgSuYRB1Zpo17Tqio4Q91DUoej9HUyH6mCkbetH1VzC8iNGAoTJZofYANZm1esJXWo"
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
