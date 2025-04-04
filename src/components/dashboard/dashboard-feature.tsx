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
    "4bMXxCJLY7YidTSMk4qAdnhoq9Y9JLkVR8z1BYRZKAQbFQTC7LHnuosYHp4F7cfRWjS9xZENGatDAkfDySiBoKqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eVcoenDJCGDaWPQrfFc9n5rPcNEyAevjGr6Uh9S5yhCcoZSP9am7jxwnsoc2qorxKWnNNknqoGvpJsr4vEJb8oV",
  "key1": "45B2WchHzDsMo37Nypv7jdtss4jH4A3mY55BPjkFiyuruBeBcrNw5FNyzGkdSkvnC9Uqe9jPk16RKFTZ4tqtW9wf",
  "key2": "c39F7HTuFbZYeTiWsdW2ehDYkHhnn2KHvbo3xb7v84VSKFQXVUxo17DjiTNyPwRGFXcXLV1pVo7Z7SREvhUywxk",
  "key3": "2afN2fsm796PyAknxy25XSSuQQZJgVS3yYEJadZAFGUcBmjXTaEcGGz7rPkGWSLQtKgprE9yhGfRzL9YUgLH3RxP",
  "key4": "3B89yCpPovFuk6QP7HAN5SgWPRytkon65fojpPTaKcSu8B3qejMeUxZjCUbPBfpbLUyakBjytAJsR9ea6yjprgco",
  "key5": "5RF61fAiLjMUXbicePG4kjQe2jvuctE2dVbjn1Zs2aP98eD7BnfttXDXKZq3TT9GSf6Zdmvj3eVFfsQpPasw9id1",
  "key6": "NQoiLjRbkJZ85pFbvQAceL6wEYAKVJRjKvQfUJw5uCGuWYceihKWBNbiJgBV7dbAKSNRZ5sMFnFpxyjBgijZPXr",
  "key7": "4vCkPeyZyoPvvDZ4UJKi2tGynuvgwncZQRMBNn4iQ7d8f3L3Dz7a4odnCvuD894PuyVHBF31zHCQtp1A6bLbfevb",
  "key8": "2cxV3PBDNYW7pedA2rXptu3JFUTApBDjJXWAAZK2CqWpyQb33WtQjNtp68342Ng3BbER75SgoSWiV5RVBv8R9ioh",
  "key9": "38S2taMb18T9YL6m61TubgfhK7hRrrqCnHpR9fKXBcn9sAUcoU45NgFMX22QobkjD9ro9FDAKrfo8kyn4wk3nvV1",
  "key10": "652Ms4ZXQnCdJYHgcvpGkyYnmE5jH1EZ6REKB7EBL3cgwoswStUENQpmMku542HzagVmCN8UUwfHwQ1RnUVq5gBP",
  "key11": "4Rzpmij41Jm45ihhhSxsJuxR658a1fPzvsn7CejuP3VANWAh9qQBHBYcWtzqemfg4p2RMunoNMSgj3Ypw5bWXk3C",
  "key12": "5mh4rtNq9G8WEVGNzDaEcomPhaAHVmeo8qk73Re5fn7BQ5ojkbhdQ54yVFH9oePwb19g7ui4FJV57x5q3512DtHF",
  "key13": "4rLR1qZWsLbEik3ij75BDSvnLDfYEHjWTbnDqY4G2SrJwfzWy8ovZWFRvfCvNuxrdp1pk8BW3o5F8CpVW6MaMZZb",
  "key14": "5db4TkZ2smZrgxN29Ch8Ep7MqSz2ScgJy9AfJMUgEj7TEKmfWXE7oixPneudeFWctpRgkCqqUsjAPRWQcB1tu5V7",
  "key15": "2uiDZBawNDwpyGbkwJ3Pke9BQpgDgCnuwcdbQr8g6ELEKFdX2YFYQ1SJVeTTBaPbrCagGKydfBizfzQ3bnALvFid",
  "key16": "5QMqfkDk5jYDtZPKoiqj8vNNzb5jUuLf6Rw1sdSwMzdVgTchwhafwrWRrbqrgEUeXmiwQES5AwRHk3tz1WsF6H6w",
  "key17": "4c24NGXbXjXzFco2Ue6CicwNmsy1Bo4VcsQqvAX6dY8e2Fsr3u65pgP6sdNzmmRHH3zgqCTjGdfyzr9zjsUG41jo",
  "key18": "E2wL3gy6cNTfaNnwMdcVhFZqCLo3nDkc3bBZ2iqBBvnugRS6gDw8Jt6rDS8vTQAFLZyzTYRxTs8UjjXNW1RPJrE",
  "key19": "V2UwgTJ863Z4HXVmBJweYX3E8Dr37SJ8x6ZyP3nMst9AvrqAGVWdgX2Bk7P8tY6kPTYvRt21yC9YNqfMHv3fhwv",
  "key20": "5NUUtciiDmYwjid4ZPEJTXTCGLzg3w7v2ZWTXA8bfu9UW73CNQ7HAiKTirB3cJp5B4obfeaGpHmpx1z9wT21KRav",
  "key21": "3HqYXFaDn7KRyuaCM2PW4CZzBBmabhNzFpgjwAsnavi4bVU3WjRFh7U2oaF3PJgZ4Wg8vDHJGC3hFWTr3u2b2rFE",
  "key22": "2UUAeQH1CPzkK4wt2F2fot3Wqy7eDiZAGj4U5mcaXw6dkHNi9GPdCX13Q8uNxjn2Qx5jdiuByBfkw2B9GiR5asGT",
  "key23": "2E3LwHxUvATA761cPbTAUZfP4CqpqA8hUGrCrx5GGZEttrSfc25KKCMAU93dW8BVdufN1ma9YeQWTuk4k3JydE5R",
  "key24": "2NfLLmynPKkdxuvzvmbCGm1KPTwGddikdhLhKkHe6FUJVfsNf4ph7nU135fr27RSmEZ82cze1HRCjPK2kGkYFf4z",
  "key25": "2bcLEZMDYoJ2djkCULHsQpmsn4BGKtcW3AeEJxEKun9NPGgyyMdjQ1CQZiaJhsmCPRLGShaYZfXNZcZMo6vWsPix"
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
