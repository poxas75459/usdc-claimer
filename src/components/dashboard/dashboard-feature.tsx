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
    "2CBamZ5iiB3x2A34Y3y1mB5SWcvL8CXu5prpEgD6uJaiMETCAYFhDJipK3hfeQ4PWmTuCodYRoHZ6Uh8JMem6M4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PzjXFdeZbfb6CStYSSTQvUp7eYz1KL6LqxE5uBpTfp5nFMNSyLKhzTMNtrnQDh7pYqxRosCGTsHZ7PhbyHyJszv",
  "key1": "4BC3YjXBiUFCeBhLHvBN8Ug1V4mTE6RLxQLq1jEeNCBpRea6wMxegah1HERLWjDTdnyoZAxc8YSXgeFWJRyKDCBX",
  "key2": "5oJhtGUmmDN8iYKh7DngBvWHi6i7x5foSdmMwP6dixGEGp33EVnSfAG1mYqNAjyALShLg6cKUG9QKagcaSjL1ahw",
  "key3": "3Aqs9QhvtS8QoiEp3T8RHNeiNU5Zh4HeaLtXsLXay8a86912oTAjULW6WrTNd66eG9yC2p5tBews7z5PPV5ohi63",
  "key4": "3t2hxqdqMEn6WNLzTnaJXq66NJsTCywKkJd4uEcemyLQwPGsn5PFYNSn5NS6uDhiJhdwjJekxkmYAtqYXz6aiLKr",
  "key5": "4ZnQc9e1JKzrEGhgyg4vcP2DeQezXPP7t523vFFAPuPzSvLujFX7qCGVJMHnYpdiMGX8CAszKy22dJxnFr6XewsR",
  "key6": "2hLvQBXRXwqB8TiwGXGRoEPV6me7r83sWe5hHEE5gnJbiVvmyrKUcpbwgmogDK4yXwPqTyJRJKPQr9sfQuUTt7Yi",
  "key7": "3gbiCU11EmFzvzUa5S96Wo3197y9uS59VKE8ZPqHjCun2Sg3kbqs8H7a5rir6vbyemtTHBFEbSx2ZzBvJAp638v9",
  "key8": "4pYackFwDJ1o3jApKYHVZ3AsXsfkbT7Lan9DkuiDuuhwW5kGzPgyZzbUPa3dYwF2VueToviKa6Zfodpnh3fxVt6u",
  "key9": "7CNGmu2NakxoknNhTcH2Pwfb88xn1vWCaNHYAWu7Bis3wZJXfTXbG19v1x12wSXdEwNU9KBsotdgNms6dXGxfqB",
  "key10": "tebNm3C7NtCgjDfGvhEpvLuGWXLiBwgWeFJqhMkMhZY4Lc9h61z9qjT4QXqbYAMBrUsZ7r5nGQCtgXwoqUb6VfE",
  "key11": "2v7DfbCBt9gDUj67SikUUQex5uBhSeJT77wymfViZzytTz7D4e4dhGAgWRWmegrC6A9A9U6R1WGAMwQ9p19dZg47",
  "key12": "394riFkKU5XgVhvPNeU8Z7NnawSmpCbYeKErZ6ySBFhQV4d3SDvdVD6686wg25rmAQbHhgg4hajY173VToQd2qA3",
  "key13": "45RkGcCPYYtvV5py3uL5skFFgF9hQ9sW48AJXGVrPFJQkyGbFJ6NrRLrPv2c9Q5zsxF124ACht6ePEpNqeMuSACF",
  "key14": "a2ER7TCjMQQqyh9EmbCfh5ixLQAa3SnmmGdRq1tiqjRn2hndMPcQqbETJEZuYHZUwHKsuwmk6XPgkxdf1bcNhaG",
  "key15": "4sXbWmtH6aS1pgFh1goxZ9tLb8wz81J3y8oen4cas8X5Qkc5f7vkGTgwQmCsTfqA7mEMB4d6UkUpn2zBrxdLt4sN",
  "key16": "33SWWZsb6VsrotKR9YU8i9peEFsc7gNdgfpFE9Pwz4hSbT5oJezRnQU8PZUHVzTRKsaoH2wbtxmbR1GGQ8t7Du9s",
  "key17": "2EqKkftPU2jrfT2DL2uFFpp2wp3yahEsTRYyznVEzapzzVVhUBVpY5URRNSpEx73jTLP6JW5MVBwvobYFZaFTYyS",
  "key18": "9H52sV6PP9hjG2omQxTB9mp7eG8YvBVefggNYekGV8nvZ4TZci7GtPNndY4zhV2poWETQFo3YkYG8BnMg9j7uTZ",
  "key19": "s9t8o7M3tHVpEMtgEz9MMjWaSBdx4CZzZhTXjA1KtCbncvnLnKjMk1FCA7vsQJgW1e7TPbRcKRkYYWhdsnj5tUy",
  "key20": "24qbGfBzV7VdTMaRw7AzAKM8D1D8xkFYxokBRmtMdgFj2LaHUWdcWXMnvH84gwvCzBY85qj5uu61xZrQFoUqu6yG",
  "key21": "54h424rmr9N35GSJKnxciDEc9DoUMhdV7xCLNtF1K5aovxVawjyeeSYZ1JbAhJR16EaJrTUQVLtRBndS8L6CQwgh",
  "key22": "3L13D5BSiSZPo55nC7JGTgqzo76G3TgSp4BGKqVLkacahbUoZxUY7SD64zgJPnkF7vagb88UkXka2STLLn9rajwt",
  "key23": "2DmXYiz47bkY7sKoW2bpoxRYEKSFbR28wXwCCfAyMxJu7cJKNkraLvweJd7iVy7MQmy4rQGQGPm3RYv8hW9Vh5Kq",
  "key24": "4jgsoCiiznmBH3gRV25tM58MEojDLHLhKoWtgAzpFDseWhkGb5eycoyoYPXSnkEwyMZa19BWHgME1SFtMM75aFCD",
  "key25": "96fGt8RpPUCrHpfREcxn2dFZozQnr52dRvheMHACfBGE8MWUW1mbUEdkj3aj3ZD5g8krm2aWTkQgCFd25eGW7Wp",
  "key26": "ywJfCKJNYZF4CvZWqVuPNpH3VnmMDADbRAbFN9o1crD6tNntmgaWWuZrSq3oPUNEbhGfRctcDk2itWJBhkebpRA",
  "key27": "5Ww9NnHGonGTWi6zuamHtXntBVcUCykrbXnoCGY8Db6JvCFTJSjnCti7WXzBBYVDnmstUjTKJeAwsNLXR3yiEY3w",
  "key28": "2jWBbpmRYZrZz9d9hswmw2DNVvi48c4y4prTQnzS1SinD6R7osW3WztTrzmyhChhdp6AfWvmyCVVDyNtD7rzReng",
  "key29": "2hqWByDPNcj1vGrRdEGXrvDCTrinioKrSbqxJ38kAmAKKwaNYCwZ3VzZGVbhaawcdve5xREq6zEefdu2JEKoGzJ3"
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
