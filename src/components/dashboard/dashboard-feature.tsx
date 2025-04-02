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
    "f4aFV1DWmn2LfBt3DmxtcfnZYTP9rzNhGr2KARKT4duYhnM7Z7bntBzWwZK2XzUTp6XeCJCRRk5q2EtpQnHNah7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uB4DyvL9sgt5v6UtNpKVkby3ETWxBhGPpsY6TTfy6LjNCMK8azqmvk6SKCLG3wzo1KWYtyX4msPEyUqW9JDAm2L",
  "key1": "47Tp5fBAgXvmqGpM9TJMEHLedWazuCCHBGFzYEsZ2bccR8VqkUNmquQACk5mT4dfVTH7RKNNXHUQRnix8GFbsKMx",
  "key2": "3ELNASRzbDY3uyhwsFmnV4xLW8NWeCNFKJEyEe53zKu38jK4i5cNP3nHqLwo2w6n2XA3pNXcV8yh2WVkaFV3RZdh",
  "key3": "2Qq6ECPyVGhaNX5c4BQi7h56jnqPYYuyytK4euAdPQo6142orkSbH9d7z1JQd7KTSMUGb7XT1aajBUbG2EBgN18q",
  "key4": "3xHUpjFWJMVBU6L4qPkKrPWm2w4SuhkcQQy9SuhECccy9FUXbvzZVYesy73MmUGn9QKsxZk2zBHbN6MkFQ4ucDBj",
  "key5": "5yqTGsFjVfC26TA9RFzSnYhTBEAr4jfJmL3Pq5GgZshksVipUXUv8ZNZ7THBTCTUuQbGqAufRXY1QjrCgU11jKMP",
  "key6": "3HLJ5homLZ2VG5dZWXv1TVzF48suFzBqoPqVT6rYhDsj91RBG71SB3XG4VXhjWtn7BDA79qHxM7xerYhCRDAeeQ2",
  "key7": "6sjzXeaWQ73iL2qaHRNJJTzrs4JtuivjhP1qPv13um2PE6eY3Uhzn5rLmw3j93oXUB8bREzVBfz6p3E8m1k6PZT",
  "key8": "2JJTEFANXqL35LiMZbhghp3tZCvn5y4SiYGz3TozmC59J4pNo8Ed1cZe59Zp2Po1zQr67ysauqJcGSJNXzdLgNCd",
  "key9": "2y4s37E5fNN1V6k9FJacDmUDz83WUy6jHrGa6uCrgYGpxFNViYAppBBTQ7sEAxyJB4T9aegM9eVkZVRUQLV6AqvT",
  "key10": "5EkLVxE8MjagkVy1kAxnDQ98ZZ4xhoQyzzdMU9zdnQbGdJhK8UmuQANSe6gYq4snrgrHHr6BwXdgpsHvdSCrx7if",
  "key11": "rqquUdsKucMA27uHHkc3w1a8L9ceJxC8XViH4xLadDBMwU4KRhDxC4mXS7UxbNUrjyU7WggyjGU4eLoj8Z2FiMW",
  "key12": "4MjVKj8uJYKbgWeBKe5tASjcNshdn8euSmUFW92EcYRf9czWp6iK9eMwHFbvHhhcMyRBFLf6FF4HNkimXLzRJ5We",
  "key13": "3p8AzixPiCo7XddNsr8bjibFGb2XXdTDCCshDrHhbervXBPUBWXr6tbPegypb3yJJS2tQTH7U6V9a14UCTUCAp9W",
  "key14": "4VmCcF6JY38VtvXmevuQVMbTKFopYtU9hdeDdj7jD1vZaffJZaLfVcn1yheBFyGoBQTBcgUyt7pWExsKxLaqtbPH",
  "key15": "33UeP1X5zV8mKbYzofHxk9czWmTjtzzjsgPZaa5MFtU1qEy4bUcXkStWMnfpYvHztcUbetSjUjQuNYKSrWRWzXGC",
  "key16": "5DGBcEJbqd8AXx59UnrnDws5E9d1or5oYcGmznEAX8pApad45eJbM5rCnoPPAmwL8mFeucTUTc1U3dNsW1dZoFV5",
  "key17": "4WVisJxZPCMhVTC1MPizxdfCdhNpLs3be6aceGLMAXLv8jYV8wGrnLw9V1q61dSUaAWWuT5oZi4MUy5eZkdDGstD",
  "key18": "4Xzgr3DTQ3dof4i7NWj2xdpu5RK49TidfY8dNxXiTSQK69h6riZAmyH4BqjBCjMCSATSVFKdf1qTdNZGKebESDTv",
  "key19": "3q1asD9iN2c1CeGQG768y88C8CvSA1DMAqL8TnjyXZhqx7VCcsB9UtZneAqX1tvq2skkv1hCpaeEZUowDDPsziYT",
  "key20": "2BPyP9vriX1bKgdycchwHAWLKhK3yfonYu2KeehLtEi9YEMjwsTHqzTAfwcm8gSeBdueFmuoZ1x65Reav3zxHDJv",
  "key21": "TZq8gbUx6LhM4AktJ3vvCEyiksDttqSSRC2HixUKcQFy9LQtvfHZB5Myv2YWkdmpfTVsMZhKiWTafv6PQMAumaR",
  "key22": "3g71zF8CRGfdmydoKP2to9sPpqyhKULkWLA98WEEErHWZQQWm1D2sqncir4u6zxmqf1wH26h9e9jR8353hHWBCo2",
  "key23": "5MpqFhxuSXnJeiikoCuthBVpVdeXNJP4vVPdqCSL2kPQCn35Tbo4uGbP1TRRQLzwQoFqNoQa312kxpr43E16spcX",
  "key24": "32oPxNhVGULVA1RoXdLHmS3RgGqxCzLFqVwfsbFogC7kj9PvKUXHkqs4sGP9saaDPyn6kf6cGdxivghEsDAzDdrf",
  "key25": "3FHmqs9CRXEP9cd9y5hKc6vorFqy18VWuPpodbCXrF2xY6bCtLBZ2mL9a1jecTwTGGzbWUkdhMVRd5BA9aqcEGoR",
  "key26": "4XXKm9E6TUYEQPv2374tdECttDrexfbySDtfTSSrv9wAkf1FsDRBmjpJLhkUN7dv54gyFHEkS9E9rYD5ULYrtGMv",
  "key27": "58ovm8yqYQX5hbHLKA7k3aDqqHAYjBT9Yobsn5yEoEDo6z6NGL6WuYoxAabHRW4tzyFYmZh5nfM6WhkcURbb4cD9",
  "key28": "5e2jVGVzugziSfHp5eyCQUu4zqTs663xCfwti6UFTrPSi8nH9Q4gob167FpHeNvWksCReNNKUNj3wbP41wf5nsQj"
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
