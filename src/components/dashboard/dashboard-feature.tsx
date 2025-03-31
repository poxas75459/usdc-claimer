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
    "3VxNt1V7F5eokPHcmsPCk4kqNhsjpRJtx7JBtJ1jDU7w89z1homsRsFZ9TE984bi8abrVdSqgGNZvq2JmXZ94JWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RMVTZfnAwza4kYGPUzLodHgingedR1h5EM7BNximEnSM4BeGK9ojCuXSCZBt5ZSmUD8MEhHBhQ4F9GPvk1xgvtX",
  "key1": "2Q5JXmgoJ671tfUMLN9PBoMvTdqKExxn1kzFk2yLJ1LWq2R5crKCrjzUsmcyKV6aXTPsz2HpGLVJhDFfg4d3isMB",
  "key2": "51Sh8JeJ5hTb6QroUWY9R6wdECs8jrqgJCBuVNUNFoufrEf2n9Cux9e1Za9Rq1hyPepfsMktkRJtfBomsya69ehG",
  "key3": "3cQ2Xznz2JchuGwiZQ6z1qLvTEqXVqrBuDE43fgQbxw8jbyypQxgystAZbZvDMcxy6NSAcGUPjWmeQcfr2U6gZQq",
  "key4": "3NZUbqT8zB62iH9jQc3afFwMmKfeZCCCzggHJ1HgDf4di6sFdYP6bu7FConCHP5hJccZRRpPG9p6Zk1YuhYyTnkf",
  "key5": "51TKfqLQRRzrV62W7gsRgLFK3QLTCyBAcx9khFMTsZRKTbEFT83syS6u5UQyewhdmcX1M7zy4BKNmhYa4FcgEkJD",
  "key6": "4kgtmYvCwVa9CUK8HMoWk7PbiBXMYVdCRQKf1Z7yd6isdjwTKRGssiHRwj1NEQazfvu2TWHa6D28ybBxjNcHZfVv",
  "key7": "4TqGSiQREW3sC8k1VjKfCseTEb6zoECfoNQhJ1xXeXGTkysCRhuCMyFxqdxA2jGWENEHms9RrHZz9bK8HqEryqXF",
  "key8": "4uuYjyyrijxiGWXm4d7eaYChAhViqtmetzQdSpeFLHdaGMZX6MHPVqxM2kq2FGXBRaG8ZbZpKxhUp2q6Ht5jEric",
  "key9": "4yWckfU86LXsiNCrai3J8oijcNktaQaQxNYznHKPfe2hoBZQSRmfaTZE6t9m66xaofUi1sGome5R6Wd2bixSbk9e",
  "key10": "7F8jiahCjmEqaazFUKj4KMZZfL4rVL4q6saN1yn7sFZzf7dTwkah6mbHZRz4CmQqEaMgwDR7AbFmeG697ba3m4z",
  "key11": "5CVaXWmnNLJtmf9ZGYrCwZz3aAh8ZsHACGPbrsVhhAJ8SL7RjsWhFrLCQq8rDHgb6f2YEWmgLRYVCKA6Zqn39mcC",
  "key12": "2KFbofhjskhZt29EBqqM5ocPx3S8fY4o7bnnSLX4ZMnHwYkrxBzKeLGGXu91yQm18U7VXHViBuoh7BMkMgXSRyLH",
  "key13": "5e9wFnM4r4UNjBZ2ovt6GGyU1Ubv3KiiCZuG4NqQRfxxWsgM2R6YdU1iMj5uqFNziHBUsgWJzkv27J9LmP2WPhh1",
  "key14": "4iAejLjA7VZVVnwKuENke94CnEdYqqpwaNnTLo4ipXe8R3BpFXFZJfsv8VvK5WdSnmEeuXFkBCQEdeCYQfxUhqCz",
  "key15": "2pmFDkRHRbqMXk2bpU3EvZVPgzXDTY1MdgxWrapGTDB41nkUtkSFRLkBBy9CYGkj2XLc9SbUL2ypqwH6hwP7aEQq",
  "key16": "3LSMTfizYVkQnJXpo7fSKHnMkptfYMZKJjaNFM4uhCE42YjDHncxX7kgzi8Hqx88MbAo5QdeYFNjFTazvDXi8s8F",
  "key17": "3MEZMzbXopt5kq63VgdDoA3yhko8wKi7QjKbh3V6nU5y1G41rsuiBDUEbj96TxdGqDntdWm648yd7P44h4WCMzMf",
  "key18": "4uFzyzWVqbKxcKiYVbnuCbodKaF5UMe7SMaFfwCc51TemhADwJYZeHRzhqXMsfTpZ3zLUZ89bwsd2TAG1WXcQsh3",
  "key19": "2M9oYkZLRXJUPUXEAnpBjXZNaa1sXbfVDD8ZEYGZrRBVAKNdq5q13bHvoiqXCfSzFyz6vUcAmt9DUXVNNBAFnDcX",
  "key20": "2JM9baDEwCAg31smWHmnzPM5ZTdLzYUjT8gSnpMdoa26Xach4b5yQodZkwQzXXNuyYNRzJYt3sUx3tqEr4NJuPp2",
  "key21": "3sFw9juuKfw2Wkz4HzvRszGJSiZe1xX6jqwowurq7sxmWgCePDadoxbZeN3RxK8cWwzkNAWY74QVGHjk9A7wd4XU",
  "key22": "5i6JFxDJi37Mt9f5ttTyzziqaTBehCXzzGQLVAHEHioSmYdS3vqq754foUmCxLKruiLKcNLwaDzaMxXmQXBXVkVc",
  "key23": "4AWZSb5MernuEjVeCCbreXyaXirqpjUhUsDgJnCurZw9CBKr8NSVnsyBqdGv9w5QKNdqk68MhCSHegA6aAEHnag9",
  "key24": "5JYGUwB6kdiBqjxmFHazrwePbjVpvrur2fTPjixH7v7JWQ6cGr21ywGxb1YhJLM9k3ab13axx5NPwEPa56kYgaEL"
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
