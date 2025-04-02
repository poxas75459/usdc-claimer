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
    "2rmvjRZTj6U9yuJbpNwSygT2YVfe2g5nf7yTQKbvMotSCqCCgZAqTPrjL3dtjsmGqX3bFsp2axuQREC6XL97292E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Eqcv9Q5Z4CERfaXU2ynhPL2tiF4k1ixc4oZx9fU4bsQcwg7T3J9pBEiaEirT2RykAG5AeMVELoP9JCRWgVDB1kY",
  "key1": "3SUrimGLRS95JmbMNm9nyjj5RwuV7i1uxEWiv4g6VQNexuS3u6WTSY9DPCQriADAVFyfEyCe8BoyszX8Z5bawQ7W",
  "key2": "5w6wXwMTwzUYoQk1oAFjMSSUXERiYzRmXbmKLY9dN9KS1jumCELowCr5qBYadk6owTD7eXwqfxw8cVyjVQA3C3LK",
  "key3": "5AUDMiyJ2gP4Q2D3cc9gtXeto1gzZie7dekZsKVea2m96S2gFxREGzwLPtTofjGTocGKNw5sP2sGJv5PcZJE2eKE",
  "key4": "2n6qziMMqWTyizrAaML5mog1hiCYc5CeTHxmky39k5wAobiCAJtcX1w1d6YSGrUDf79FwBEDdamhqqtbD2Zm55Q9",
  "key5": "47tiMen2hjBABVYp6puE86saWpcCwk3WWbsss1R9WvoEGVtkFZv9WyWr9JpbuzMQ4AfzfoKZJozWVobfywx2GP2W",
  "key6": "yPA22aj9CKKWHiw5Re5KSki7E1ysXpaiWJSDyfGur5tLK7UJ9Zgh5hUHaZExaTDdjE6p3pQvuYyhep9odEd3xAV",
  "key7": "37Z9Sb5j8Pq5CVG4kjw9qQoCMAoqgQch5qW4MDFkQ9V9xwdS8TW4vdSBsM3UKWaAWJTHzBavE6HAsZpPPKdmVNsz",
  "key8": "3uBDf1i8VuFbZeSaGrf51Ndx7VbQpDiMp82MGVALJLqPsW4nGPJfPAPVq6BruRyNuX98xiSp9MDmyf5qYns12irC",
  "key9": "3MxqxpxLYs1pEBX7LBoGTkzj3Vz5xSi8eXftZ77Vmrzzq5MvbdA1wLjDfkN7vjH1kw6UcW1MSYvK8bhrWJXB4qwb",
  "key10": "2ogJCokS3PLNtJNr2tEBRvuZBDwEFDvK9cFUCnHPXdqovZMwdCHfHh44HhyHccYmsJx6ndbzRjWet4TCxBLcVVzz",
  "key11": "2tYQTkvNSiy1qinFu8awBzB6wYJrcJ3ALTFtbAwhHetNJZ9jWwMdiZfi7xjmBs6JCvKxvxoNcJeitHhiLYHFi4j3",
  "key12": "3Ajo12vhAomd2Z2Q1u4oCd4E6mhYc3V5XXVRsFQB5fxjaJRk3N7nd67bitRcu9gY6b6BESNghHoZwi269Jpgpp8q",
  "key13": "4jNVLXwmKzUngcdoGA7RBXQdbpisvaMajPnepzezQJrNXDdruoRqNZmr31JkkEqQ9Cc8BPGvWi2F2T914RttZyzx",
  "key14": "TcvVehjLU81jxkdRVxqEvazQY8UH5Xv7WqNwnMRK6uYzppLVvSSFpb15TrAbEk3xyjbiwb7FjEuyie5yMp828oQ",
  "key15": "3bizwNnu8QiguLMKK571hkghwG2z2NxGLN3S3tibZsKgq9Nphpp5ueo7ygELeCs8j3UX8LWkfRsUZLsLEygWZZmX",
  "key16": "2XfD8VuPGutjud3k9izx2teZeQUSY5hUBrFWGMXaX693x5af8Mhvsu3ssGuhbFtjWd3xjnBdsJGy7FcGxFMczey",
  "key17": "5UAqKVYo71Q1oVbae8mT7rs48oq4P362XhyD8PSeCrAa8nB5Kf2yQ2jsxsFuvo1TRR17fMFHCJLEuvuc9StKWxpX",
  "key18": "Q1km3sMjy1JFAN49GFTdnybV9yguS1e8rysiV9i8QjiA1BPzztV6hthckRJa96FNst5yDgZotcCEFQU73dZZddh",
  "key19": "3hJ9pzsGxyj8zqYnYHfLKafJGLafwfkeondJCMt2QeEQ51oRJghpfQWzYTovmdsc2DrUr2hKZxceaqwJ16qfgDL6",
  "key20": "3S9vWxuskh92LFimKiFfJeV1nrFt7FNHC4sSqPnyGbJRTAPhvHS1YPzdtNA9s87T6Pb5DZAjp1HLzij7pEbKYne5",
  "key21": "LZcP9LAJsjJbRUBGw7cuydjPxrAMan6SSTvRtiBpHUpS9UdnfuiKNgDrdiENzowMkvTcvJzCt34ubAMPp4R4pCS",
  "key22": "5BvfSX4fB273QF3dujTadrFxHZDAneZ8V1BB44Y5myhykt874KS2gFDRaRaHBcaJu1kH85KtnuY6hJfccfZs8c4o",
  "key23": "2ss9q89GBNdci5ZBeSkGgWjdczd9PPk5SRsfB48QL3aL9yiQ4JnXUZ1cosL8jMQAYnzA3gARU1FE4U6MExyRUgwW",
  "key24": "D2bth1fqXbaWWv6k4YvpwWSaummZoCfj2WskMbVeH8DT8WJj6dz39HvJVANk3F87Lacsm5sw5TESkqf3gXyJEi9",
  "key25": "3bvkLY7TxMzwzNJ9TAGcYzWRky6VReeDQYVWPQtif8SZCymQn5qEsywwVKJT7NC5DVZ5vor2DuzfKKEzt3UdYr7V",
  "key26": "26C2GMMPDQ1NwCSaEjMeAm6xYoKoFfsSBgWsNizGrDokF1jF669Qez9tXCepqmion3UueP2S9XAvv8S7axhxr8rZ",
  "key27": "2wVpPWunW8BYsVmM986PcnDH7d6Uhib1ELxbMeCThoBvYYxLJ63memH2jo2mH7x4HeTodSHUw3bdrAMmAenUCubu",
  "key28": "4Vux1jHzUf5mUPKEn8DbkSd1fPK2xkFbmHRaQ2SPzEJT33L8HrmqUmbzU61yDH8zZsSBakSyWUTrNLQCdUgmGPmY",
  "key29": "4xBLZtMEHwQuwZ3jPqP7v98WDUXepnH3K7oNMFfNt58rLjxyKaKfpKpMub1Hgu63uPjonjwPYc8jJ3ipkL3fo6BN",
  "key30": "3q3rZHQ43rWjkoWt8ssDrgBjiYcfLrTdj4iZmZJCvi2tJRXicHdnGKG7d7TcvJUBCXNVzAdJzuD2a4qquKWNRprc",
  "key31": "4a6eZzjxAAbEjE8nSgF37H6KMiZfwSLJiKT1u1SwkVDQ5RuoV4P3436X5PSy3s6feaEP4FQagCKkxAc97aM6gcZ1",
  "key32": "5uhb2kjxR3RQDwMZKhv4CPdnsRCKLFHP8i4pRxGEMfgBgEc3rvZ7y9JqT9pNB6ME3gf9wQkTqeJhy3W2RKkDiy4L",
  "key33": "2jC4LX1W2wPqSvSiF1KV4y4MXbYHngBBC9BA2pPcSXRfKbSP3fxhf8ZDkQDAsa2tN7RfesKLdRYYLTxWkvberg5g"
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
