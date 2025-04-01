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
    "RWdM7evAAF2P7QFaYP2Zs1DMbTo9nkhEHu7xnxoAKc3ubL4LK1cyDSiZJu5nCJys2UKSH298v7WwbCFQ3HL349P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZKRvD8ZosmG7fg7q9NxoXycCdf6JzMPPaac3yiHhjoE3aUWv2rkmwDerG215Q7gHaNCWjWE3zUu9AzXmpxK264b",
  "key1": "4Ws2mNacKmvHRJcx6tRqGAqAWK1DqgTXqYvHZhz1RZMHMVFaJjjrkV4cGwF5pqAY1nPL2R1mMgERTh2VXFzAtM2L",
  "key2": "44AU49nNMvs2KGTfio8Y1ryDp3cDyp9xJvbQiEPd4t963mFV6BkzZSQWHTw12qxca3918XCajZ8A1A3X7ELZ6CoD",
  "key3": "5rktMxUiBPDpwEoy8VzxAcbW9jDewG2qaxAUFUEDe9JZMPxGWuSYE9VHRKVJqYuRSLDmKi1Rxd2ZgGkNzP97MTYB",
  "key4": "4442QzeQ26x2G5QHhmVohWgfxpNMmzRGH5Qn94uQ6AdvvkduT9u5usNMtC5xtvr2VbUTHPAjJSb1CJVnbCQgfZU7",
  "key5": "2GFSodhBQ6XKxd1okiAjK5sHUDsoS7kQYHxU2MxA5JFHT86vGMeUxwacVjsDnXwfbBApxJtV5dMwrvEYZK5iRvKm",
  "key6": "m9yjs2oXUKqPGq2kBpaZUHxWAwAQXjSpPFpELCDMYETS9RtyafYg7KTVRiMYjcQHQwktUZWbwAmPmHLyLPHFnLs",
  "key7": "21m2xnmov3kmoNRKeJg9qggJL7YQmouJhb8MTHbPKQb4Sc437Zrs2SWL6o3JA52J2PEuKxgXCbSEoNCWZDWpxhYN",
  "key8": "LHhdo6qFABRAQSextyQGH5VNQofsQBwe7ABpfJjGXzf1Z8mv4BtbLQ4WjmocshHCjmxfhnU3iFzfc3Fhhhswtzp",
  "key9": "3gEFQ1HScWrLXwHH5avdz4NyqTviNKtMfuCnjgMGcqsP4wcB2HaLXd1VxEsZoKLVhqLzqudQkvoZXAQLA5JCwdTp",
  "key10": "2uMraiBH4zPCV1ibtHoptKob6XJgvJM8gg8AW9MhTAhMkgjDM8KNvhrs1aT4ChSM9FyJNFLBjX18ySbaVUngd9DH",
  "key11": "3MZurz9r8CuJ3bmhLdoHYjseihjg3GLrod6Tq3pHTqWzfmtuie8nRgZ1tqiX4ZYiKnD9BatCZUxd9joh1dRzXFmh",
  "key12": "63b4xnEmUrHQRFpD9xhTYYeYVbbCzCaf2uzw2YvHTpG4ctCdXekSnuEVzn1NVsUEV1ipjPZ6YnVPqnZw7ExbqrF1",
  "key13": "2DGLT4nzfoEKLGVZr6gs3gR2betaoa1gDCNi81KEohTXPbTC2R2SgrT1Lf9zFq1fx7AfSpC7vRzofHmmLdVEES2s",
  "key14": "DFrH797fA6UXBMqiutYhEP8L1iPVnbr4MAxzEr3nmBioERZMFQWrT5EupiBUkPcCbqGaNnCq4wcdB6CoCqcq988",
  "key15": "2dJeYoh85kWYxaA2XvsVS7MCthhV1mypDss6GXf9mR2V2gpnCBuHXTJCv7XbDA1ytW4YgbNtmmpnRjwK4RuBcu1X",
  "key16": "3EKmq96mm8XGsgDurFYDZr7igpsa6QtRWYvyaZjtT7imBThwcrSJRjuSnkCf2R8MfBCHw3hYJBZGgUWP2kcLop1G",
  "key17": "WVPdk9qR9CxSgFThwQzZeR2912uPJJjRQHJQVjktxUwqE5ZKgysqkcN5Yx4XPxNzYCuawj3UUxaPAX6LcUVWQY6",
  "key18": "2wheJ5ZuQsSk3LsjV5V7nNV8fB2z7LnUcHxEQko2aj76r4dh4Ptrm6Qw7ZGThGcJzaB97U8gKfTnX9MTu4pQ3aun",
  "key19": "63cVkXubH2rmYc31UHr4H2uHyGmZcarZRLpEVCxdLJE67Ybk4szVEpmzKLptTdU8sD5dJoETZgP1FKN52QYtrT69",
  "key20": "4FYZz2Pas8ptAnwXjYXZNyz5816UduwNWEKWUkyvB7j34dPyiooL158FdP2PGa2r1qDM1yR8NNVhLXP5PhzBMJe4",
  "key21": "2LoXZE8JxUf3QdqgcBD8iwnakJMYAPD8zePyGnedfokS7hAxkX9vrPTnJgipKeWdPpF677p8oN4P6msyQUwnqpzE",
  "key22": "2axHMrpxaQfRVWbDZJGa1sPte6grJceMUUBj1UwaHJwfzK8zv5Ky8PS3P8nSRd3YknLBEfHP3hzJ7hhPyo1QuLWK",
  "key23": "oUJYwy6zRrjBzKxKqub2ck6XEcdvmB3dx49FNi5waL3zRTe7buzR8WNJRsD3AXK1a2JHW1ZzPesEspwhFByogK9",
  "key24": "xVvcs7U6SN1qB3dbp2kqXZbHER7aJNYryKAhwZvx4EmeRqUHUtqc2stxnoWQnTtUHHeiS2xdrEE9vHpojMNdFVm",
  "key25": "4YHPht47qspLy6LL5vKvTgmDFd3P86j2q6wFmyrci8MZWTprmRnoHPumpiMVeHEzi84opRrY1bkqjE3cuKYWNisY",
  "key26": "5PswFor39vREhhmnknipv8gniZTc3bZPYMSroL2vmeBA939QJvVxHzqJxteHUHbnjhkB3kAh8tp95Nyrboxjzpn6"
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
