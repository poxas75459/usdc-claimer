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
    "4gKkpZuR5DM4FCgYd48YoAVuUY2vd2JPQfWEkizfeFjzkmC8oESgpnocjqnqac5izY7yvz5NSoqDWeWfDsooE83f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27oSy4PNGadwLZ9cmMhEJ57hLGVNQiYmJhPpAr6najNXfmkWqcKYmTR7reVLtLUWTMHHKkALVbAKqY7R1QxraWBF",
  "key1": "2XB5yCgr9rBB9gjnVgKAXr6ERudf51XRTL4jpySnxhAQoxE953ysqsSeAcARfN9hC77h7273WwNCG6EbXZpb1vZX",
  "key2": "hehq6pPPtG8APKv5SkBS86r7wSvZPchE2MjnspGNBhNb1pEbAxg8cyDm3aG9U7PEHwebWCLhjhKNah8VTAKeUwr",
  "key3": "3EFoKbFhhA4bhf7tmggqs4NBMnTy81V5ArVHD1YmDLopvZx1qAMthCtbRZn579BxriQxoCXvrpTVGFyoEGotn2VN",
  "key4": "5jutu3Fw95hnQEWaxivCqyCoYNv68BMj93sSkqL6QgRmZHg7hNMtw3dCRYxAuPSVMqsxFQeyubB4Cmkny335fBvr",
  "key5": "PxXyS9Xohie1LuGQwHWAcKGWCY8so88DEh7FLPFBfWK58wDZaxJJPEjkRK52tPSgMxnQUQfjxtpdU1wR6WcHRs9",
  "key6": "4y9qPSdbUEuSMfekAa8ozhHdeYHovcF2C1nD4cqHLhTkpqjuYUKyKFyswJnikgLLYhDEQuiAcsJs12ADA3HAbK8s",
  "key7": "4M4rnwLukHTpT4r4MUGu4kSJ8oLHu8h8xwAgWf5SQj3CURnhWyXCeCgKqSd6KHUxnT6BVgqZ8cq6GVRo4n24VHhk",
  "key8": "5XSdFeYa88N6PAojPvtqiRhkobNLnKonbMDQeUySYe3oLoehuPRP49pkxP3d3o8AVp9Xd3fTc8Aq6qZ3zuZWhogX",
  "key9": "21pWsa2CLHKRXtQarwP69PbqFx98T8m6rzHGtAZ2NLn7wBsYU5wEc6a9e3zfQcdGBwgXtQ8PVgxSFtLhxJM7ShEg",
  "key10": "iSqUnVAxAGoCCpd2odC1hdGAom4QeyLwzaqNkjGy6WEFAsV6tfLE98z7S6iBa4TqKBBuJSeq1m86az45NCc2cTU",
  "key11": "2Z2aJNWC65s2xGKWte8keYssSgYutf8x6cxcH7SiyGMF1YpPqR9xDF4toXzrgGQFDpyyBkTKG4tQWMTQuHf5egpd",
  "key12": "3oYYVZ93ekACosJVhxkXYWnWv9PYFMDqbpw4ETBVRE6aqdakEuiumdScADn8iyn1mwfi1duEJnJNsbMZRCsvyyx9",
  "key13": "3PUfao54csnbshJaxyVmorA8twFmDDoQvFNCj4Y8Eq8oKqmQ4J1XYPQvkPdVNxoMqrnJ9aaRhcRcz1G71cpfqgWN",
  "key14": "2tS3WpfH5ccw99aJ7tv2a5mrio9hcVv386PJFZ9mjqWpQnGesTzyVNYS4GeCxCnuihybWcb1TiTpSucsVV6x34SB",
  "key15": "311kNMffYirbyQ3LrfwcXKAy41eahXi9fx369KdXpSvuiPosx8xxRRYZj55azyvWu198m3vU59UuQjhui9uUFZEn",
  "key16": "5Rtb8Qhm4frLKYRhkpJtKy1MU2GbpWL3zt1SYKc25adLXcb2fNxQWrc7Z5BRSDss1SdSAThkQJxN1BxXYbG78cU9",
  "key17": "2n9L4U1vtDwnPhEUyNarhU928YM7L9bt8MKAvX7YfWhFECMjGCb2MvQpjNeyF9PK9jjySTdJAtAGWENdCjbKRLEf",
  "key18": "34G77vFyVbPqQFVMUZJTQQg7vJqKd78qXvEDpYN6k7bp1xqQaVQnqfuNJ9x4epxanNHg7KZUFtdxxPPzZoAN4FoH",
  "key19": "4wZevs6fDwDG4ocYPHhAvcksCM8CTJbpSNDVmze5JD5nC2tJxCN9AZgFAmjCvPWLvfvZwSJeDVUhc1hwfC9P8NVH",
  "key20": "ZvBVBwf3Xfk1eo5dmD3sPjGcrLR9yLWRg5gTL3yNzcGrXJyphC9FWsuMsqk9gr2nCHjusFsf5aCX1ABCLoHs9Rv",
  "key21": "2Xp6rSTUYsVDLgEfWctjXfKR1XNGTzm9HwRjTicz6vrR7SNH3iqVK5vfM8H22faVx2WUQuvv6K9pP9zF2ypD396T",
  "key22": "4jZA5mj29j4N2q11cACKm6Vc6Tx6LrKPtCCK6hkcpB1AbJJBePLyY2hH9SHGzQunaQy8cC9Z5CiA96PhaJ93mv6J",
  "key23": "33b5JAuLqmhKyjsvdpQJnjbZJaf7DzybTQkXw59eed5RSW6hgnWP7TAbazPEAReSsycJ4uQgFD3MYD179qzxybRV",
  "key24": "4R3Lh6zLjgFNadmS7Q2SM3uiE4GdrK7dzZp1wdwqF79Qz9crgQ5ohzSAwcEpUHrQjGJ7M1QQMTpwJA8uxPoht81P",
  "key25": "DBF64iexqWxUiZsQXHRtQc8HnQehtqq1QASwoHhY1ZgDEJqViZYmebyTcTHjxWRpALXjRJ4wevmwXGZR9yy5Sqa",
  "key26": "5NAMVh3z2vMVogipUrbB4YvcSAer6T8oV9MQtZgNnwx2C7z1KvxLZ71im3e7zJZpnJBYpNmXpuRa7phiVDtniRZ",
  "key27": "2kfT5pxqPhki2eYCT8uvNSDq7gKjLwruCZeYV4A3MB5Ho752uWfpiXVtQJEqfUoXSLRXZ2Zz2j7CN68mUhr5opde",
  "key28": "4PhBqg72CpVwaugLXYMZCA8J9nKruWMNYX9tZ7gMTDTfmMpXCwX9XeUgLYz3YSU7sLMwiW2Jz462x9hgAT6FnLd2",
  "key29": "5kXy6ZUDQko1qKH9nNyhYZexHXRACREbWq974mKka6mhX5CVWxK1VZgyJaU4zQdiKYT3ZBqycAs6NnNWQ2nXXPoU",
  "key30": "4aTidK5MXRQhpNzeT1hDaqHgkApPLoKjy5KSHBMQ7AUReCQY32sGxihEVENq2YBbnN9dioerrCv8EeMb3PF8WXzN",
  "key31": "631hahxdBdaZMVfWU27KDcP9JEoshfiK87iEVndBwt6btaq1FN7uiKiLeMnDX2vAeMwGYagtCY3vcbbTS98Zdt9t"
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
