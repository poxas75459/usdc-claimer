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
    "32hKNGP9GoaXtaRq4BrsFkLVD7fFpo91EAmqbqWBjAGNuP7xFtyQht7KrjsKKgxewH9iBm8mR4PsWGCWVLJYrzWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54sDbEy1S5e7X3v7DBrEGkVvq6CGDGGbpyEpX6YeBuM219mgy44LPkskfACbkToFqBXBDf7Cu8vcB829UbvDpuCX",
  "key1": "aKGP6HREdn8QGTcT11WDqXxAAq6tkpDjrn2TaieQfuocKCLGbcLsHxdwyUZBDWLVy22BRoXJrhm9rSH1F91nvdc",
  "key2": "32Xvvc2SaMC5wTV7z2yU7xiicxY9GyiLVkGPfKvXjLnUJaexFcZASuxjFPszesg7ugC5QYbmEfcmU9s8pz7KihH9",
  "key3": "5E5hLeHPn9ZuFZahGmqGAF2m84UsqUMfWPYN2yVyqCcAvik9LZ41r3aQbBQczHzLa5unazUaeQ1HVte45xf4g3xU",
  "key4": "5eBv1MvtnsXSrztdP8FdXpVS8N6KxtHmJRee6vrqwQ8Gq9jBC7xcxgR4L9kJkyoNi2RsbevSkN6bsXokooREdgrs",
  "key5": "3AHwgYt4HjXVUZTSGgEnbTVBQTMZoYC8b8mnGYBKBqmRT8StaLo42sxbWnpAavnjwMDXVTdaiNYrFGT8U2AVqn1w",
  "key6": "4jYa3AHz28LLVgYcwcka12m1oEEKzwYn6ZeNbRwQkVLw4tz4nStMCmVaBRHusD7Ck1AKAZCiUXEdsYJqn4jyrsFZ",
  "key7": "2pF341vB9k5ykZoxzyu7JhCE9LtAcPGxU6htwjdUd8grNVd1EH4jZoUMLDeHhWFmSoiCeeK49SndqhTP5hTw42ok",
  "key8": "8q1zfVtWNeQG4AnD2gFRJX44QK4sHwoLdPezCgMCvVB3PT2BC9bF3nrumpHhBhVipZ26d6xDqkXw5fFD2r8aTMb",
  "key9": "3GKL9P3NnYRyQXjGGjNzd8ET1r8VDg8MqsKm1RtH5FcKPgYT8wQxgWgvi4cecEufsf6XUPp6c1HZQbXBQCUvb7N1",
  "key10": "2JcWq71zz8PKAGknG7CH833MA5gQgXEMiZgdfSc5cPrR6kFGxNS3WhThZsbyP4hrNjR48b5hGSNdokQzMJEKjBgS",
  "key11": "3QvnnBipe8Q7C1SWorHacqz9t8LQrCWBwhKvmAFusEyKryS6Jid8s4ZmhMXPTukKLd1nvQw5uMuwed9m7RketXWo",
  "key12": "27xVr5UfJrGCE4QEGYX9wM5iaKX4HYtEsxJjVLCMzpwx66ZRjk4YTXReVUnN9Qi2c8Qc9ynwLXo4WKRtfqqihub7",
  "key13": "2uJuSkJptHxeMgnGXD37N6zvUj95ah4gWFbAQieXJh6FQapUmCorCqkpv98WoWYF6MeLLbfLBt2bhjoJSkx44BZd",
  "key14": "4QPw5DK7PScTwgKjD2h3GkmY7a5ZmHUYmcdWsAYdgk8C345zqZ5hFH6p5uJydyVQfYK2prE3oVsC8VUnJyypNTcx",
  "key15": "5xVybsfNdS97NUy4BjNQZGci5CHQUy8eWCp6dm63Qqeyf19FyCoMTiosaXv5mS3YaGU2H2bncjAfitbLuFYznKeh",
  "key16": "4VzXU5oSiF3Uuu8ufMQe1FFCPgv7wSoPJSyFjWTfQ3mtuHACj8Jbt1WiEqX3bd7q9QCCDVgFLWgxWxeU2JxYS7tj",
  "key17": "36eFnjqsFKkxzZuXnQ8CwRD3DmXZcCwgEryzx4ERqoT4paAZFuYEyLJ4wtFRhwyuKh3ogZAxZ8V5R7VRDBqAYJ8y",
  "key18": "5z4ZhjDK7pik3myQ9g3GHQpFxL4pf6zi7jbDyCGNFnAMZ9mJGKqUX3R3PfEQsY3qupBJTx1VESrH1r17N47YPDjK",
  "key19": "4H16uf6apwKH7ZKjbbcnHFqCkoV1Bc3pAM5626JtMdJegGgnxHanZK3o6ebMTRNNPMgkPCTcNVyVFuGCKcbGXnSi",
  "key20": "4b6KcQjSXew9QhVx73LVGDppfPmVMks27JfaSM7ceSDSosfSrHoZdkRUuuuoa2UpUdDS3ZvBu7UYG4evpvP2Ft2n",
  "key21": "yXnSHTu1HWgFDxDPJ1D84bAKAUJK9vKHyRKiPWwnk6PHHps7SiHBP7zU9KZyiSPwDegE4qYHJVbQYpyVq7Hiwhb",
  "key22": "HgaqMHZ41cXqkdhLNkK6ZzayaXr1oQddfFapRuj8iqWYghiiERXFWvHXUDq4deoxMvwVSBUJYqs7KBP67YFgsd1",
  "key23": "U94uAqJ7JEMq3k28maFSjBaafMDPRPJfWomCfRGuMD6JGoyckWsf5gm8qb8TzAbwfkovwbWuGAxdqCvJpH6cd9p",
  "key24": "59SwpAYP5ojazrdmMBf8QawqHkQL534iZojtAFSxUT1QxZmpUteRL9zAW4SsWYf1gD4Ge18JkGJEAcwoMSseujGm",
  "key25": "42poz7um5s2kj6xPXU6oCmePDWsQ1LsJ57j3fvptVikCxC7YTBycBjKjJsPSWaHDQbp75eBVvXLD8A3GMxJYZ2v",
  "key26": "263NQAgwqVbi7UHnLXJnqaRxrKAzYdLt9Ugck33u9rbE321EBsnPoMQvKnmKd6Ufkbm1FmygTZzZE1iDLCVv2k3R",
  "key27": "34n7F7zAx5UqU5MUfkrVSkp91WB2Ktj3G8sYMtFLPkq7nbw4UoirXsC9fiHDfWbtygqXF91ssYizfLbqVqdVrTTn",
  "key28": "3v4qgkjAvugxzvcQ5MLhKKxQZuMh7tsFrPb9vzDAFADExH7TMJQqmYn5LhsAYngD8jnzgEWDWgQhZvhhDyPFf98b",
  "key29": "4AyabdqZGCtDNhDjDEbqsLKwMBo2pPWqczREhhSUCKBxDKejrr51ecRYWfQZzdFZx7d7TVcnDJbVSMY6tJhP4VSS",
  "key30": "46vzgrEDKNkfaJpuYb1MaJHz86eVsu6x5zTEn9cSXPkwMCNPmPeHv8A3873P1mJXy4dPcXzsboULZKyYVXU5M4tw",
  "key31": "51vaVQeTvWQR8TExxczCp5VjBB2hQP4hgGnqwB98Vbi1inTjKePtQvzn5R3t824DMUr7EzPEk28BdmnQFm54PYHT",
  "key32": "4WaDJHxuxHWQZhoRfj9TDYg971YRTw1o7SYn8QeY8GtF2XbonQE5Z5XXtnkCWqrpnEJr75TeENmqZW53HH47RZkZ",
  "key33": "2fbpfBZZ4j3iziEa5UP8cG3mjdXHvWwnDi5z1DV325ydmWA2QxxX7YAWmY9X54RhaTvptgMXm4pf6ePNp5VbLw7u",
  "key34": "4tWR7AvZC8r8oXVk4bD86SqXpDB1Eu2nG41W9D7hFzi9pogiGTZB5JyUzecLgBMNNHDhNXWNDswd3DayPW2rEJqL",
  "key35": "4xdPC1uqfe4c88Y8Cd67fuStLMWitp251nuUHrKbUoPjvJx8shz6wWcyUUE7r42kfzSvdrgNu6DLhs1v9cnwcuix",
  "key36": "5PgeJi56cLPNqo94NVD7EdSnunZR8JdV7eYSF74wDTQJZoZCPaxEvouCv7kRq1k6uyzYsYgQ5AZCjcUAnmpo3i9S",
  "key37": "2wqSJPGPhXBcgxwwG4bAfVXRT9DPjgAF3JqZTyA9ufVtNPLSAL9N5QUH7fXDJb1ucR6sdNvNuF27n7kU2NXWUUHT",
  "key38": "3f22M4ayWGtGBYc8CyixwxYWd3cquduCZbS1xgawFaggqwp1yZgQTGwKbVg1ZcZx8Fb3T8LhNa4XLDUutfrjiZ2v",
  "key39": "3JHsBkrun6cbp9V2TrYPdbr4sbThDSeFRZrc7BDz2irmpGjdNrudom1z91QKmZztjT38NiuFQS7CjMrdvaDxEVez",
  "key40": "3RSnRZCohDUBzcYMPmnWXXtwGAynxLAsP5NtGTJYNpNnSggPocSh9w57G2JDRiBye181QmT3noEFVV8DxmyACP6s",
  "key41": "VLtHqtPSMot1AdbyGwdqKfrGfoTmtBPXEg9mX23boV64Bk9yh5PYhA511QXoC3sCG6D4vwx4e7zEdy9hL1JFMK5",
  "key42": "2pGL6yFGkrYLzQ3r4SPj5e5ujLjXiVtSn997uWxf3VLwtBW6LYSJfFoZSqLtb3CgRcBy48DTmbngSdrr9QpRDohA"
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
