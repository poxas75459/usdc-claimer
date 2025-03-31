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
    "3ZPM68AEUpXkStM1NjuCp3KnMms1k7aSwcio1rWntaD3k8bXzUjVE4ht59e4NXSi2WgQFkw6u9sKh15dYkCrq4Vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gJidYCjN8TZ6PsWmuyqMeKbfgZGiKfdkLjjUYXudadvwK4kCZPCrtU4nmTZF81PgjKF7ED7p8YpFv9R72HeFG27",
  "key1": "3MFBAFdnbMUUxpyiUqF65jD3cNmEnEn2rfdvfQjJJmDKfcj5G8AqzuXuttUXtLuzpTZjs6TCu5C6PXS4sqLv6XmP",
  "key2": "5h2vL9aJPMxaWZayhHNFDmuFFjvFTBjjvFymUjq5h3Dv6xJXgeyYavyLaTJSdFiETDbCPNKsrS5nAaFfRkvzsaZn",
  "key3": "2b1Mxq8NLwfy78AYNq4qKh1WcPxRJfK1M9JVD8cKgTLNPxymgD7pYoLT3HqAXYubVX3uju8AXY7e3SZ4yLw6djpg",
  "key4": "2vMGqeHHMq6PTR3pudMMzNXBLE2vQWQJceadmdfPFCKaS3EAg2oggezZuShWUL2rMd6gXaDeKSHUkxLHRmx1XhKR",
  "key5": "2G6Tq92zdm7AzmAz5jzxVFeNVz7fRyDEMZ7CNkFSkDC5kVvsAbt4ZfCkDEpqX87wLA59xejTMAa54EfbAsgV3NPN",
  "key6": "3AxGo8p7y7sMkfnX93sBeLCm9CE7E2JYCsLYTZ9Km2DJRSyBRAWsj9Nm4UCgMHpiTABHbXWUDKQ5RwTEKPxQiYT8",
  "key7": "3Tcke3GsErdcgT2uJtNv44vjCwVF6F8nSjpkGH6gP658zKRVz76X51nSCLrJwxUZSfbAc897gRZxjqDUZXj127CX",
  "key8": "4zPEHsk8Yej35L5SMYq3EnaUxZbdvPNwuioNfcdAPsTbvjBsry3no87oYY42JET8SspHe1Ywm7MNnVRh7mzC2hos",
  "key9": "5hY4E1istpmwUdDgmFf22Fv26of3yWrb5H7XYF6eAxGX5tr4erWP94MfGak4PbmirMusXvL1RUwsFcuKprMXKCjc",
  "key10": "gKgmXb6No4W52B19QRR3WXkQgGLgJREmUUq29H6c5MGjWLrqJyCWAyeJyrFH1YskCV61r7zPEWsX93kjLA75yXg",
  "key11": "3ELij7bVZVYjdzH5VWcumC7pXHqXFSuAd1hzSw3MsXFV5WiAELpmmXQXhHGZYUbywHmWoog9Lfcwp9G2CFvmHwyk",
  "key12": "WSGB8RsL3Xxi6gTDR96TmsQnxBVABf9eoit1wBUqnzmDgdDU9nPk2B6jPTPvc9D6c74NtEQsSCpDtzFEZgWQfKT",
  "key13": "2hM8ZyENyfwoATg47tVRFwWSobVP2or53f2k8YPeJWVXpgzYtwj9Vox9uFud2M4CmX5pm7kYJqDR1Yae9eSEG4rZ",
  "key14": "45So1pQ6sxiSezeodB4gcPr6mCiKXKC9LGj4pnMkqFPcj1UPaSeTcaBNuDu1tcsuoiMhMF5FcC1PJKSLPqTy8de9",
  "key15": "3chEUx8318W16pqKmtVdCbnm6n9UqT4wFejgPgdFxihfEUkR27rzZuc28p4kK8Nd4Jmj9mFVJLWMMcQJ598J6b2R",
  "key16": "51SGbAjpPWYvvpsiKw8ZaH6eRpebb3vz5Wft7ef7H2Wkcksc2A1YnhanJkphEp7p6Luqa5axZ2pyse9PUHo6MRgc",
  "key17": "bvyPkzJHWgVf8bua3WfUeCsNpP9jt4hLEC7QSzugB3H1eEppAA17G4TnmuLMPeefyojr5UFnwcAA14aNaxuqA2f",
  "key18": "2Y7xD7KejComHAWCESw8gmR3VaAeaqv9j8ufHGPKta4oqtizZWhpRoHTAoWbK4dCsVqydoJFmfqnUrtaMXi7jfBB",
  "key19": "4TDYn82vmtQok6QHJpbeMviiKrhxrLbeCuFu3Hd8L3JEkNVZ5sPrztBqCxzKbdf4y2MZNAyZZEH74Lso8dFqPBpd",
  "key20": "4V7FmNZ9fouegch98bMTbRzBAbZw8gRvcYqpSknqjt5AhCvu8LJaQJqPBBXZG5CqcAPi5H28BDFwsWqY1S2VM28V",
  "key21": "4E2ZS2kv5uXAAtYKDtTQKDqQ7ytrWmF2sAaiuGupsjF6ZKyG2ZukpzpgraLygttwCkUtpKtPWgMWnySRVQay6FN2",
  "key22": "3DLLd3SHWuHAyME6Kk2btkiXFhveJFQn2ER3j4G5vmHSjqiVqS9qW33ZTxN6sFCsciLw5Jn6eKmHQZPqGPYbkodg",
  "key23": "5qTwB3eE2PbvN4PWWc8K5qeYKqCnr94dxNaA4xknbUxyseeLozVTm5v3T2yHbcqzC9v1152gSuRTtVbcC75asBi3",
  "key24": "34bshMAuu6gnHh1y2pChLeFsUB3Ta52DiPShercoRDchYrGE5VjRyhxRkFUh9VZfpcQMUz6H5WFc2ayXhaofBv3T",
  "key25": "5feqbZx6EbgNBdXqxydC9HKzWg4rCUGW6oS9cXasmccSRRu98e5swE5FtXPEuBGMDeprJPXJmrHUdAMLmVbgxpih",
  "key26": "42tpHLoyGD4FKULzQhMU5i5e6u92o3B5vLQwPZ3kVa8rT424TD5LStNrhTFFLZNrPkkx7u3c3w94DfTdz1Q6zveW",
  "key27": "26WYU25shUNgp1wWUvngDmKAZ7oSsLSf9RRUi57gQg8s5X39zq3om4MSLSudrKbicU1cwjsuXy6wbTZ15J7zhMAj"
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
