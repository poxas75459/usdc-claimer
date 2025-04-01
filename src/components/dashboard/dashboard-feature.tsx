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
    "45vWxhCP5dMVGWcDULqzt27vcejCiAhrLEFtSZCMTz14WBiUsB5Q8qeXTbeZatGXWjWhXjBtfFkutrHd9aPD9AAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kbxVR6zf48dJfWCVUcHJhsJzLh681Q8Wr5nsw9CTA9RMdntW5NDmpkuYHYdfqETqTNVe1dGAB8tqHj5Mazh6MSQ",
  "key1": "4MurqPMFR4Gq3NSYioqAgeW4uow6z4UmnxFYXL8VbD7GnUvR3Du7zX1cLcfmNT7exyVzGaP4Cuqize55MswvbSvr",
  "key2": "6FRYTn1TF51kyKx2okg5UXmHcUo3ux1RpFpUxreA1iCVbTGqj2H4pufsabCYTDB4YSjtWM63VNx8LDRa63Yguha",
  "key3": "34i3KCXgRAq1spD1SJE4RJVWagYu1yJK7YEmB1W3Nu3txFHD9EYu9N3vGeVjXaJiaAVxYmEso9qGTqc4Gd2cLqMn",
  "key4": "2HiS7vJZNHF9Bm5R29RtYQZymrXrfQ4RDsBguirwh5foFhmmt1hix6J6U5MP4G7pHtnBWHJaoedtZfV4QviVLjb1",
  "key5": "pGWS8SEeGBS6E48j1AVehiYufoTSZJxf5p39MgTqPRMo31ZKzoS4eUj7qAH7h6VCGeNJNUP5JDMyLjhteoTwP2r",
  "key6": "9K3rUy13LTzLTJHGWVttfYGbSZ6rGKW6bt1Fn2NdzpoayeZpxFQ54FPWysdAysYiU6HT4vAqwnV3A5mpYGpGWDp",
  "key7": "48Jvhpj3Tu8XWktN7XaqJpwSHvew2fXLSyUQdFNBiLMRD7Mv4NxRyf5sA3TuEVNQ99Z1g4QtxiZ9jKbRVAArYiZj",
  "key8": "5vhR85JAAdirZTCbCqrYv73KfnGFMxksvHyePn3cghKP1zHm4TYBBQLTs2FyYKnt55LJ7vRzvdPdkhNbk92rDP7a",
  "key9": "3DcMXLST5aPQLXEBEnXUoKNzw7L5nc6RpEtFKiZVMnCBmarreSiFVPcz2Cpes8Pjwg8gyrNB4Qvxmu3FLWJqDUGn",
  "key10": "5yh9bLKQXnfUAhwoJGsYn7wXkwjyEZEwXHWR1QHv2JH6otg5yZUjgVPnVaq9EkKKHMdiGzJz7nMX4sqi3P5hfYk8",
  "key11": "2n6Wn6Ggg2TURjF4VhG5dLSPv2GtkZzbHMnar3WYjb4KVe68CpLkux9HCWfF7Y2rn8PEgBAAzY93xjs8fa63ydUv",
  "key12": "jX9jhBSV1GwBwRCExaHVytDRwJDFGVyDLEERBevXZr2QRcj5ypfXeJu4BYDatzjWytEAj9CHtTiVY3RYUhg3sxQ",
  "key13": "4uPunGDqsoEjrMPdPb7ypC6SkCGmsG4MHsCm4thjmXmRgQtpZQsbFEtYzYnryd4Bnx6Ti2qZnidZ7oYgo2u3HgFu",
  "key14": "66Q7CRd3Pq7LSHB4iK9oMyTQqtTzqjMKKuR6d3YvnkWz3qVmKdRPmGuvsaoubmbnMWaLHDxDWug26VahhuLwcY5j",
  "key15": "61PL9hosycsUWgDA6GPiZaMkmjwvEb6j1eykx3vyPTNt5pdpcNy5yGACjT9w4NVKEGHBQZxuRAky1WZMRXMdfLQW",
  "key16": "3YsHzpxCEr4VZXHe7ESpMszK5Ms5WnwGG6SmitQCv9mvnzR7qBkYSeTTtaZihcoyv5VCXmDUJPevgWseMPPA1ASq",
  "key17": "oQPKNz7bqWiEwavgjUaqePasKSiiRWucmqx6JCy8qw6StKqKBCW9jZBAjqqGMG8U1RF7RwXuywp63kV9n6wMGo6",
  "key18": "kd9rt53rQhmCkqcXjy2UJ9mgnMysgUNXvgGSWHkZcdH9t4rPDzKpYU9wD3uHpCfi27ph4FaJhP3upf674EKTmJR",
  "key19": "5fAXSp6sfa3W87zx2zvPXKkpF4dgWeMPQW94cC3Eu15UDAa955BM3bujUyqiczh25EXdjGrv8BUuZS4UDHUupNDZ",
  "key20": "bykvfqmJUdsmCscBZ2tKWhkWmB6r7KnnabiwMWRiXSZuuQVbAj577RKk2TntUbUUdQMy3j9J8zVx5KkyL1dnEde",
  "key21": "5UREKA3Rk7UqeCAyDJ72kZL8CJigH9fyCQsXaehq9y8zjkcpigvHwusbVoneJo6Ukn594y81JbuhAvATwS3iS7Nc",
  "key22": "2xpJ3ZneZDVp1jn61qqTLi8MDPFAMPw4iXtGTCUpvAW2Uwc8cGDhCSngBC9a1JxKoBHGEJbHDMjeAqx4M6JQEzAc",
  "key23": "5zu2oRy3DcCSQMpeCe5aH62j5VzriGuSxb3AMdFZQSrzLpnavkQuiuMk2iAjrS15K7TEQYrv71oPyVNmc8H6ZUjs",
  "key24": "55z3dEuNP15K8jMXHft18D9dMHNxW41kEB53yeCbakhctABF71zBqartBcvdDUo26kxSxuNMxFrBDPMWBRoUerR4",
  "key25": "5Ly8BoHPgGwnjSADukJYFvkwe5qhcNeekkKJdocXWsMdtK6pRQABAHim6LCGwYimfJjARfsKXwBD1uau9V6FM2Mq",
  "key26": "5An9QHooTV75FM2ZGBY6PkNFiJzJMGVxBsPAT1xH2LCYHgimJSANSpkeg1w8tuPRZTqe6ae2M1fpyZ1PZQkQsLjq",
  "key27": "3RAWJ86CLruYhxMCMZYBYczPG5A1fgibCm3Wr9AetZ82TvYSY3kgWWkiqi3M9VFJMmKEE4gEmtbuJDFmMfrwZyS4",
  "key28": "5fusjGJpbnC4MBcxQGR97hDrvkckptc4Evu42qgFvsgLUWrrd72A3SCto9noJ2LZtNcWHtQekRxbsRRBqcAZTz6m",
  "key29": "5bxUJSjciJmekHN1jAMYeJvzjUbz6MMVir4WB9sZpYhku1xXJiPzNz2L6whaS2vM8B63Q4PLkENtDUJNtcgcs2Zo",
  "key30": "2TDY9xVEhrpWM9VaBrqyVqTknxdTNRvhg6RtcXG9JEwYo5sSvSmqCto4E1Es6rKyvqk6vvibbWZyDM71SQ4oJxm1",
  "key31": "mrdpZPWqbubvd2K4ea9xQVYWJ1aHEQSbnVpJVy29yPCDoLZhHrWLh5Vw9e8KS5jJye3WjFGrwGefW63esuLReEP"
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
