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
    "5SzBeDmhojUAWGn6sFzCcUkuMbPkvSqcvSjiManbYkY4dvi9GA3i6XXxmAXnFUjRYCcmq9YJPs3nyTH9Sb8HrUsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bpNch5An5y1BkJVbRNhMd4aJFFrHK2AVmAuSbLe2J98vHfA33qJcEn8nypvNA2rx7r6cURyfCSKH2tTZsXpcdA5",
  "key1": "5McBw2g3TmwhKvBATTBmnj6di736hdLexWmxibKJ74BJXzaN85ypmfQLXSBtFzCNzt2URUPBj1XPBLXCQUck99WS",
  "key2": "4JuGcCipM5E6h1enSv8YrupmGFGScGSFU8aWL2GdGBccAsLswYHQEtekojR2BpV4X4xttb3CzaB2VAePr2Bkjhze",
  "key3": "22B6YVzrZ458yAhj2T7TojovZ9rQ8F4UUyDrofrA7WVL3RmdeuzAYEQ55g1AwW8fSFnBGaC4QbSfG3W2YoQjYPJh",
  "key4": "49oTMmYMGf32czYvFT8LP47ff32u4U6xJ9RXj1PYN2Q4TrMwGPyHQEiP533hNa63Yxh7Niw8eQLQzqX8WKkvyjNQ",
  "key5": "3cjpCo3fnyroZLdE28isyf3dHd5dBJDyjGFSzr2zWhyfPbtqry7d6fmubK4aRYQB8S3ptHPeT285TqX2gMdqB46u",
  "key6": "5SQoL6CwJ7ahVjwEf97UtSX5UMY3kFzzbyBrXenu4tPRME1JdyKAp6GNmMXZJ3AZ6tpWqVVE9GngMnKBUBvs6DmD",
  "key7": "5jsKwUzUjvurgoV4AKkwD55boJ751vuVacxmV1zJiZ4CYLxSU3KYexxRVg1ag4kSVi148o3MJq9kD9RwiJPZpHX7",
  "key8": "5rxYrPQGVAdapNkFCds5LeC7zyBXTK627MNmtVtPX9xJRwLZ8b9Dr5XKG4Mr8WfUZwJohkWXzmxKM2YFdL8P8v4",
  "key9": "4g9sRmEzHHEQUu1E8GrXvNAaDyA8LL3B2NQbYLXVw1MWvUQa1sayumenZ1gt2q743nfHhye1uw2o7pTHesztYjvM",
  "key10": "3PcrvBzH3Gwyoe5SBMgs3HjGBShVCzex8Hv2k3HwqzoPwS9fUVhcV97VVujoSGTpjSS3FywS8Fxu2EtRMPNy3Tp5",
  "key11": "2p3eL7aVtXPSaDBZEA1XpT9qi7cZn25Eoov8StANvNJZoRWybFWPmuCZUTZc5BbjsNR9S7R11BZ6sTHXB2WyxcqD",
  "key12": "2mohJBAtyjpMEfTbKbYrrYG3VnNDXbyKWXNsWSpBhKBEPVijkfRWbBbbus38qCH2m8rA16XjNDo45qPxCusxGUJB",
  "key13": "2qVnawfPb7z5HEe7RaEnaiRZSm72vfhi21hoGn7tZANzoQpMicqZKtBr6aubXzEu3nn3tvaC6jZh7nTR3G3KkRif",
  "key14": "5X91mKBqcCWVHErb5Lzsu34fqFwGHNEPmkV5wHVa2jzcLuSVV2jFpM1HaxNth1tupyJirHjRiBnAb21GUjNd4gSE",
  "key15": "3xbdkCUYQsMKig7LkeEGFSztbgqbRCUmB7UghwpH3jsg1crRnuXHRzpzMAbdb9NV1S4xZeFvzDSnYs818LCLZxZZ",
  "key16": "PfWiyrin3Cg5Kc5WxcQoMFym9x99mfNTY4fQxTFWpuAjECcikKkXnLHE6eTAr8WrfE3Ls4sq3z4u1HwgpE6rq1G",
  "key17": "34HbME2s7SzxFqQCk7yURAb4qHGcwBW6Yn2YJE3SYaYAN1H5rzNP8YR2aYgk6Ux9srfDhHyZrpEU6xyAFkSWfYFH",
  "key18": "jgdhmmPRawjELx4y4x2uEtrAN5GGHkikbGNvs677AbkWqUhKT9sum8B9neebCtzvXdfEvXCAJeGawnke5CCS5t7",
  "key19": "5aM8x8R1etvc9odsrGsWNH5j8V2gbEoCYQhsZ53epW66AhbxuCFXyzU2V36gkNRkEkMSZFnEMReuSPcxeETAAHDx",
  "key20": "2MGFhpQ2HdPU4ptPbcTsbmQfWXS4yDxD7Pb76DgZQqAR1Cab9zsscALpVoDveTm39kWVK7rNnMA2Soe9HgaSrdKX",
  "key21": "4buhxuPJ2ZjQGfappEy9XMotqguAmRx3X81KFkAkwgALQk3pDQSFMV2vLeYMg75XCaXvsfUwjzc3cjECD9f8prJ1",
  "key22": "2eNpPJp2EVw4xPyU2g55PF7nvWCZysyfcbwsEAwQ8U29dhHu7LZfQFuQQFAiEMvVb555VP83pvE8BqJ4gJbpBMcU",
  "key23": "2MHzgQ8VMVJpxJKqheKa3ZcbfjhNCZcKQevs9W7u7sgUHJQFj54e73qAWFYAUXTTK5s44B4mqrsbRLEcsHEiH5uo",
  "key24": "3iZ55zkom2WMk1rgQbqa87SeKWidMt7gh4rJxvKRkgrtfJ35JQ7H2jxYYU1XpV3f8BUNBDyvS2616sm6mNu43cge",
  "key25": "55Zi4LQ3LwRbzVzfNMyEKfqrey8xzvA5q5hwosBFARUccT9tbd21HXCN7QgdJqXBuNx5MPS61VAEGvEa67zPvbAz",
  "key26": "3fYQ3CbEQCg1aibFH93aZ52ZELSFxocyDcH9ZbXXV674SJKVJyfNp4iZL7dS4qLJQxBYzQVA5eHGxxdpmN1HFBhu",
  "key27": "5Ekqh5nMt3ME2GHhDknprt4qtq1EqRhFeoHB5Xw56GRaxeibuHnQNhJJSsW7V8YdhBGnVZxZDmMPU44bWoYHR17w",
  "key28": "3XS87egPPLo2ZqymCjNdo17G9twcJudK5xfDkz1QaTJmfzfuppVkUefrB3G6Q1vEuAWnSVJSpuAe4nJFimTn8WfP",
  "key29": "4iJjJvg5qJ9ohsAvsovVc7ew6cDZKiJCwX7BKCLKeuFfS9bVs2GCbQKaBRLx7TxzwhnHGP6N3sEFGZCR3Cw6A2LJ",
  "key30": "2fzckh9zwEn94wTh5X2onnTY4HuZTEkNV59uoAN7yyg8xxxre7mHAKUmFSSh9kH2WDUfo1zhTgdoQb3pnbmUCk5d",
  "key31": "5dDyxe2gqVcUeFq36hJ6VyHGckWy3rPJLNCh5cHWvedc7TNosm5op5bdKU2oCiRAc7cZ2H8AvuyR4S4fMvnTi1eW",
  "key32": "5hkjcTrNGVR2ZR6tyYoJdptbRDfjRxgnkyKRtQv64rUWeKH9q7PhrDkrBHjk3aojq6so7dfbeF6fuLAV2V8WnuVU",
  "key33": "2gA3VoxVLRB6s6zb4ad2xDP9a66pTR9kgbQwEAWU4mtrK7iJLnNRLRXuhZc3RmGUQvi4MNThwkdXaDsWvJLm1zJ3",
  "key34": "2523YUzyy26sv4DNMto5qHbk2chLfvav5SiQTTW8DsJW9DA1Y897HhLDM4eRDsTRJ95Q2C89kLb7obu7vZXK8qWP",
  "key35": "5jnRukp3xK8gz19v32DFhuDfdo4qjkWsnKz2aYTBnjVbQH7CAczqToDtrCkNYqXMA1fbRDJ9iPLAv6qVBpjmKdq4",
  "key36": "3f1TyqMz4DZrWQEMua6JFDhQyhuKehmYgdYRtfFjAhMNxa1hy3PFx9gjqAdYzVtZB9Q8jD5HDd7Axi2mDCvUTxKa",
  "key37": "7v5dJVqsQiyazpjumryopSS6ntNVVcrDJPcveTStMWKFQhzcoEDxqtwu98pLk47UWRo4ybQyCUNNNQoNUCatXHf",
  "key38": "uQxabHPmR8JXy9NyFEdkVJoFMFkPJcPDtKCWR5ofntyzdmYTx9DrAsyFUkbr9v7HkcSaMgTqTk2QjhuWYw6QsFp",
  "key39": "5JqtVWhBMxiNzoQP7bMMHVTwtmiPLuzq7uVJwgHBtozKTCSAd8HyLVVr1WCCcTgJGBdUX1EsMTsMmBWNJMMxD7vY",
  "key40": "2ws4UJsNRTmjZ4g6ysdvJ2HtMBCaDiX15z5eY4WBwdyfyufEVbacCC7E5P7yDHkHA8UuX8ZRUz2S3aB8THyWJvAv",
  "key41": "3o89GGiLBX5f1pDrzZ2LvKYqmJVH9aZeGB2BwoWWaWNnLSmvaNa3HKmCTJ3A35b4QhZhpLSJ6HyDBL3DvPSrXZaS",
  "key42": "URxB9FqAJzxXsWjbF3DQDPyYgKE96ysDvK3kYxCBVz2tpmxDxjVXGndKMbEKo1caNd2ZjwSNWRatW6x1j354x6S"
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
