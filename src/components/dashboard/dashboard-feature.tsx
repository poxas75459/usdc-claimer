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
    "LpCmC2ULQ4H5kYrGQH2HJeWakgZWdfRL9o9zZSkBHVQaiqY4ruAVuzeynJdxFugKXiUbKpUWyJ81NjJUqt7tbo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y4kya1Rx9J38kf46inCoLJKFG5fWnfRyjKA7MhNSqesaYEfducCCWeFkCYxHEdm75ifZ5biM1JnZcjQv5vX66AT",
  "key1": "67Jnvh1ppNJDcpMJN877xfrBk5jXbgvBHAYnfbd9D1ZvtiK76CaFmW1PmoZpqJHhuoyE2vULnhuR3jYQydHdSJXM",
  "key2": "33Wj2Nbwq5RiNAk9CPrh8V32cUWxnZL5tNA8mQk1r1oiJ6w92fj5wnp3wwff3FNkNt5W8XzM7ydzYPPvrPoAqVc",
  "key3": "5Rj58EBjeezdGsHwDb2RmPeYkc1Hhvk53MvY18zosjPRqc5gey2TUzkWoQcxPg6MeVi3nrubFPKpbxMF6mRQqPn5",
  "key4": "31P64Q25b2Y7ZqYDKXG8WXgU9KaEf7bXVM28EZX4XmSQboRGatoq6Fs6cEmt7c21s8gpLdw7P7BsXTcooiT39Q6s",
  "key5": "2zPj2LpXvHszyUAr5HRgefLnE9E19LQzcYwfwRj99eaceMoAkYiMEWFXJaEAicR6aUgU87aTkvCoYiptxXnKcTfm",
  "key6": "APjRPnds135rGnKD72gJCBJ9ZqgyYdpb9Kt2dPz1csGybWSh18tKdmJvp7swV9zHUmdvNU1ehD3LoUPiQrAinJq",
  "key7": "3VVmww58HdBjGquzNJEKCWr8uk5YwWjakte3M7LdRkqQXVxE5EuR9HVSjKkp9ooFJih4kfzxhNBGi3BcPDSoYPTx",
  "key8": "kEvdwYDAX8zJSenu8shfvfUE2uuxz7RhTwfC7PxPSDPZHA7KdSBTKM6ofnymLJpha8PADZJYvJ5sdfgaZP4RWRS",
  "key9": "3yoMxhbJAYK9S5j3d81wZnpgcYF1eP2pNS4qohT3VwZToE4CxGwwpSjd63swsVibai4DNE1tPkHVsHM6bizfjhbu",
  "key10": "4eUcXJNr4aB3pbNtxx4mTPVkzrc8nsJZ4qFwaD9zDEbBkLEEB8hstBLDyEBiUdtEAfr5W6Et1C8NrN5MrWtDuizc",
  "key11": "4QbmLZg53jQHFHdPTRoAS2MY2cJp7k96QDoQ3Qz73wSfDTfoc2fQCFMkjyMzbEHjcLpNbcs6Eg2rWpwQJQFZnRHq",
  "key12": "gjvWZiqNcXsgBmAemrZTiruPCr3Ev3fY22mzGftvQN5ioxu2vniD21NjgXSK8eCrBhc8Cd798KauHawzckYXZCz",
  "key13": "4VHTtQ9nVRGuarucsp7LS3seaJfca7jMCJTMs4bDHYbD6ArE3WyPxJdJqayi4A1d1CNemXhwBW7pNXa5oV3xskzY",
  "key14": "5C27dPJ2Gc7LiyfVNrMqRwUNjY1wQwuuhDsFPDyVP3oGhZWZe7C5N29GdFC81hdbAyLmHX7VeXnCY9Qcu6kwfrL7",
  "key15": "PzcGij8PzGc49H526uAeU4epuiAEKAAWffDvTbFWxHyMtsPSTx7d1VTsbXvchCBjYZBS91Mm8wL3wb4mMC4QRYD",
  "key16": "3ghJH3xqMoQz3QmsBBkDfy6BGXVovr9bNJXCprasRu9MoW2TPBgGmBGzcRbRT7FinJnhXT8PcVPaNxGwx8MXqPZq",
  "key17": "2cv887m7EVZTSU4rzMRvEwaW9NhQjfPKWBV8eTUpHkEerHG6KHvM2j4MnPS7irfk1pvhyEUu5kXuJqnaYF1jRkwg",
  "key18": "2jwmmDXQANWRb3Adf3muoJ8rZ8DdiEYk1jcSn45tdhbTChhq6E5ecV16emE1p2bKMSJaKaBFHs2EqfQrgHuZrwjo",
  "key19": "4HgyhR6ANqqdw27dNb1ATta8moWECuKaFRiSQFYTPtHKBGLZnsKvedNmTRkUSyJoqsGxTUN93DpJTtpeMumsL86F",
  "key20": "2NeCtQazHEwN5fu9q5zq3jvL3pnEfB3PqYSCR7fPj8mx7NiXek8zbqw5DUS5C8eY7NdZvDZ7mbyJsCfTezAYDCUQ",
  "key21": "2uS6HoBb2NBhjjptFFBVmkAX8LL1gsdPxMpwWVUfez6KLiDgEnbTHfYAULqeqNosNQAazfTR1cEdttrnToYe1rqv",
  "key22": "257Ym4rvdk9CvfQiT7Fq7XtmjDyTybSZqMJwhKrfHkauGc4x7DDpHxthgBco1v4JaKrvLHNUQ6n2Sc9e9SPZpkoY",
  "key23": "D3oHii4gfS8g135ZsLNwL3KCVXK4zJj6bE8agankj228XePo7AT2yCAYjo5ZDohiXGb4uEbKfF5qn4dB36LXVuh",
  "key24": "4hBqKTtdBxRU4jsYYZbepnwT2Ahpfw61C4z3vcGgvNnmXkWwShbfNMiQMqpQT2MBhdPt4dnZ7QrWKxd3m7PJuQKV",
  "key25": "9TvwAdweJpasi2c12vmrCBCjWFAo96Ptu6aivjU1k5GagqJoZKahGNneiAyf52egCq43xFZima8GDnTnTdVQVpw"
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
