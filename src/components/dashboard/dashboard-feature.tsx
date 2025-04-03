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
    "4obdiXkxkAZuQsykd5F31yQcK6xGyCbV9nYTUUHZFtQvTyMZ2pUAvSQyBrRzaK2QGvuzXwP3im9Zxbe9frV5iMyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wYPZj2usLe8ztn6qYFTJ16udChrMck8raRUA7vbwVwekk5yx8DgypvRVdBrHKadAEpv5Fj33FHkC9GKYnfWnh12",
  "key1": "3cy1uyTDRNBQ3aKNA2AGto6hRMvmPQS7KrJL62eUD9rsx2ixoFxykuSBE7djrsqc55zHrsQcMscgfMFD2G7fu31m",
  "key2": "k6TKnoHgLVS2wu4ePreRoGESKDiUaH6BiQYevHbkwUkWHjGpZmt4XSCKWXAPqmZp8DR9cFQsT1QmcZHeUeracFN",
  "key3": "5ALrKwACBdtyzHjXgip2marZB2UXXhVmQnv7HbGHUCz5m7W5Pewiorgsedht3BpbPJDk6dF9LskMJggYrsQP3Tn1",
  "key4": "3NqJdY1QZhjxi6BNwZip2Hfmwg8EYk2Tx3wQNvAknx2Cy59bKZsMpRwq7MoGQyQuvJ9L3rgyuM7DmR2nj5PotwS6",
  "key5": "4YyEtuMmdPqxL91KcHhEicqEocZcaxx5RBNNVp4JDdkWCWv8EQhuuCA46JEJPMSPLu1wa4oMZr3eDTodARuCKibK",
  "key6": "4wmFXyLbMTvc7D84wLBArd2QDgj9v4e5swvyPoerRosTjBCxHjUb66P77TUZXHqf7fjEx1KLEvb6nr5rL47zCddP",
  "key7": "66bXniayEAJczZJo7WmSouxwtjdpAEUNvEVvxHSV4UyCRiWQSVfMcF9DaJqAepTRkDCSxU8y6FSG9W6yWV9z92da",
  "key8": "5cSkkMv1hkEAEkA2ctKhxqJ5hgZomFYahFT7bBtXvaL5censboGQNbhy8xjWCLj4GgpHzzAaodS5JErRuueT7XRL",
  "key9": "FjHoEdZJ4U1Wy1ZJoLix36uTLLumX2RiPYH9zGmK53S7ZuXxEdnrjQY9FHDp6zKYX8G1cpbSawNdpjgF3NTK5Sr",
  "key10": "612gyNEzqwaB22prQjFtqCffKXasQY8K4kv6cxYQw1sEoToQwNyoDpeGPFQnDYrHHji3B9pP4c9EpZYdtMJ1yeZ9",
  "key11": "54WBQGKpsP474QAqRigThj3YNtMhVxVNGeQANdTxaoavQQyeriMZDyMYdaABjPMoMxCCheXThDJMQFbvZhf6vqq",
  "key12": "5nZWVZy7kRwsCmGR6heZrCycdErZ1p3wA9eTP4kzGnkp2oRY1AhimQ4Q8pLMwSQduQFpLVJaPA4S4tKue36zyW2f",
  "key13": "5TLK7shsbeDyXRvvRkHN74hN5xMbimdgGqh5gCVSSS4LJYFjBWy61D1TfoSD8dahC7xBrdVMbzK31t2PoGHJ9MvP",
  "key14": "2Fk3hJ839ogUtdNoJffTjqqSsDv6h7NBduALsqHFvY8DYdKtxDLKWSdAREG3imKGpvu3sakC26La9sz4CaWHqHwJ",
  "key15": "TPa7BhWw1FdcFnYhxzGE86J565B5MAJsH1Z8GYmjPww8aReSq9UD4cqMRuommXNSLXtcSg2tuzcD4K37cn6XUnf",
  "key16": "5Kpkw5cAAH7U2zznR3CHXzpPa3ZgEUW48c1zjMc6BXoEVHSb8nbxQFjbzhYsfFfuEVd7bu6DspNUp1e3otRgNFfE",
  "key17": "7PtWmLvBo5NoDhakQGmuzDGhRQczwi8GBeZPL1q9vsUrGoiTJUiamRbXN7wC5cg9h7H3Rkc9uNsjRJnWN4bjK9E",
  "key18": "3L5HpHfc1jE53fVH5mCp7eyQbxuMgrDeWJ37BBcxrdUx3bVSu7N7JiA4VsK2yCFQhQhC7nQoqR3VFte2XuWdpm1K",
  "key19": "2CpLuUWA8cWmZNAxw5zpZZKsEzmqaF9jF2kBGrTuEonnEAnzLgwd2LDkkhEN6i2Kh2JsoNFfcWTCRWK6RTzxdjtN",
  "key20": "3vAQkPUwbRKrWmGtkLNyeNjdWWhkjqsyne5n9RvD1NenTq9SCrB4sYa9fm433by3Qm1a7di78sZbCfJbxtzvcncD",
  "key21": "4J5nqyawLDhCfBVprszjiJDWya4vvEfDLV2cvuQkfZDpbrBbD3vdZwtN3Dddro9ATQiBDFegAG5hnDDFe2TLARgZ",
  "key22": "4nzuqwwqpEzdkzyfLT51xAP3L1uk7E6YRuZ9HLZTm2rrpo9TqgvPg2pfChDayDeMpp2gqvAHhwjgKcrSMKRW16Ed",
  "key23": "5uBoHfCJyDAze7ci2ZRc91PWqEjUYWUCPy2sTrfNSdf5qBFh6tCCTWyAgMpCkXpfc9CVSCEHssCm3pi9Z6zGthM",
  "key24": "EUzRukPmmLkvBX7x6i4f9zYsAtH6jxViLXz1NCf5HsmfKQGMSsGGk1GrF2HwupJYbFae2JHkFDjVmomRKNDmvFN",
  "key25": "2pgEszCCqBYRZM4vgVymFvnFFU6iSoa6YJrCjMRwhnoTCuCByzmfnJwbd9Qide9wE3NirRHNsNQjqSJbdxoJV8HJ"
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
