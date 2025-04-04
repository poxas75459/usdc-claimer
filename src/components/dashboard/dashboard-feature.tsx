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
    "44kwzsojiEHKTeLzhsmWCBaMPPkLDMXCyszUGznSw37Zwz5jnEP22PGPQgMnrf1WqTQ7gLk8ZPdZ8x6x31YH65Xc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XxucGHp8Qexo5aJPtfmXR9ErRHkVMJKkKMJe1CqC1MBuD4eEeb9bcnGbwgq36VB9CyRLJMCPhCBjkPSAWoJPbsW",
  "key1": "5U9M5oxnQpk7KcxBbNMf5cEbrNQ9CU6GvDJ86WBy1A9xFDiJrKEP3SbFG3ScnuAeP324KWwsUB4T7U7Wh7h7n4ZZ",
  "key2": "2fhqCeeint79akPWaEZxv2CQPMMCxhPqusZ3r9ixNKZbcFrGMnkcSRVBiKSCMLm8bSziVu6E8jCcufsN3SLPQMhv",
  "key3": "498V97pDDCDDZyq9igKL9VNk79pH1DihXg4w2XCKq6bCmd5T3GLf5qgw172mGm37xCDc6kctCCir1kSRGmVGAQek",
  "key4": "2odZan7huQqApqEKqnShXSkpUuarC3eAsjSJeMEL2NrqJMcNC3Z3g8sxE1YMKwhn9UAgx4KuuSsGGa5zgNJccMyA",
  "key5": "ZFAvEyCHZ2WawCHPKr5PKwLGfwXJPYtjzycK7F8ACN7paL2QqVyaoRz3ytmUw8Bs7MB3VDJtxrkmiyLF9ez7Qfb",
  "key6": "SxMnnKoK7YVMEqoeCDeKY2yzoZZ3aV2C6fYgKc4C9K1PSCZDpmTpUHaTXe5bdkrXrVjsEehecvHVswBBDCFZXN6",
  "key7": "51KNmHKcMnjfL3ZjXoZ379rrvjzKrf9pg77cn4YBtEzWrr1kviYgauNmznXsVTcqRSovN3axnfaUrHyHMLFpR16y",
  "key8": "2DnbbdMLDv8KyhVXME2vH2LCRQGSk2XiFRaPsNDHZEMiHH56YLQjABmiJwLFKH7q5jKr9xFcLJJCV2rRrfBYuDRS",
  "key9": "5P2FHb9x8yG9ZkCX37dCUjAnSBooBPEa31fintcvLhtNsCAxFUcpCuM5oWukHRfEB12VTkeGdWd3993qowZhK8sZ",
  "key10": "3NnTojjJvtCuYTjFj92gci5fVo6CeJAwMxb7UNxHekZtsPL96SGG4L2y1sAwf8WBbcmAEJderfXBZNc6KWujmuz7",
  "key11": "2qunAn99e4zWdTPX7Jv7RdrwYMrnTH7k8mkwinvhcd6W7At7JmrE58dbtTLXh5ULFHTDBBWYWaUF2aKCGs5XLF6s",
  "key12": "4fo6k6imxR5mLYAnnVVcBJw8jknc1hM6EMZSY5oeY7TNT3VwYPk679xAZYQshxshv1uZbbH3FYYyaZ4PvregSBmy",
  "key13": "ywKKWvnjxumU8ufMmU3Bd4ebURmyA83UmWEcKEoXDgC9achvXWnVE5w6DTsYsgea9msrLRLdWaZCU7osVdcY5SQ",
  "key14": "2YbQdABqMh45m8PrgrkTxrqcih1rzK63P53AuDwiH2XHEvMmyJWZdwJMUGxD4FdrFByqyYVkfYsTXJhf9XBe4qrc",
  "key15": "2KV9dYSJkxZUX4vW8QFZLZfXjmLuCdLjXLnaSSwU53pUvxto966qc8FeB3xH3Cncvefm4x6VEYcNFPdCReUhtZN9",
  "key16": "2jLCz5AXYnJeNT6KhNHPuvAdNdL91Q1TR27Q7dZa3zw66uY8Ts2HKCBfwzWfWgpD69N7PHTsMw7kVcwvWzD36EMC",
  "key17": "2r7PoFbTb4db8aMZM2gDB4HwKuuZunhKUZ3WJva7uFpJ8YsrmSYUABSYgrNDGEmdr4QfeQFBsksVKsYDRhG1YVsc",
  "key18": "2sxn1PrjejvJL91xHVvSHaAStjSe6GwV4Pn9RThDpHmmKq1PQPLb2Ya8soov3oWeo4ZYmM3KSBspCcpojTxm5AFa",
  "key19": "2VdsJuruQWw7fxg5CcFZk7qvyat6QUBfHKuHJ18rxFPJshZm37v6HrWS5qxnM2vCpthaahzgsrhErREYxEFw3Ba2",
  "key20": "2Y1dBsjAipAkmUNsRnPeMDYqsPUafmDJHFUYR5NQwXCQca5bQWxt5xjXXgekNCafgnsPLnPiGCeHL354hVCWYBqJ",
  "key21": "5GVtAY7fARUPdjQoQkxkwRtt32stHSycaBuEcaM91cDoy4bbq2aYPrCduFBCpjpf9iiQbbqfcHveGwC8TEvJEZXy",
  "key22": "5Tnma4rVzNt48SpLtApfV7EWVs3cmHLK2rtif1FfdaHqQKCjvQSHrg1RNJStPnT3wV9eNg9wkMyud1q1Nnqrc28w",
  "key23": "KDhhecnrcQrkbTvxey7G58m1c9tuAeMYYHKvZQ4ujVhaytmGiiAQmeNC7SygMLqjCqrWuaLvN9twHXsuWz9kVv3",
  "key24": "2WDRHxXe3ci5JiusGSi8MNJytYcNaPFSRsMB2n939xALyA3Bqc94ce2Z8mZ1WZCbjV2Ye6LkuUs1yB94WidRN86Y",
  "key25": "2JJpTWqwrZ36jgtR1UsSTa26HSDtiYooKTxfEhVGnc2k5k6VQWCU61QyTU5xwJv6xPKcfWnyvEVLMQYe7x4oU3jH",
  "key26": "49EQJEcBvYNqPpWMzCZLhdQqbAxcEkfv6WrwbkBxH62vbgFj6GgVgCkECidyPHrGiniwWnAFzPBj35AWiGGikF2y",
  "key27": "3nab3odaB4ko1L5QsBQsWQoww2wDZqQ3E56P4cBWWEQW34WcM9B7DYqKyb8gr1mxW5jhznKjuiyggZTtKy1zwAYR",
  "key28": "cw3dbwvCxNJs58jNC17ZYw4cWtnRip7HAXxTCwW4Fu7o3euam5k6JpXQLrXdHK7oWJExZ8TpUKg2vzx6LBu3y76",
  "key29": "KF3mZY9VrgAMCwuV34YcLjC6b234ZUmvNJe5h22tCAUzTMFFJqJXLD1mBwcPaMaHPF6jNpXN9Mb42XiPoNRdNhx",
  "key30": "2e513vKqBdQXnHsKDwzyZM6umB76z6hVXDMp8RJYUcebkNZ2pv8Go9rvuLp6PV2jzzDAG4xbHpvTsqzeSxn4mxiy",
  "key31": "5uBch95caWgFbn8eyaUKL4hba5fGyhbhgvJZri68GRFt71C3sEqjFQwYuUqVnxEJqBJjXRnARHcX6SBWTtmfhYAX",
  "key32": "4udwydDmskuVTxXwirZ7adUR4epWJm8sZGbksbwrRNhm66iVsCc4F15nWgdhgRJXx7e1KbZ3NtygSAWwtPTxUjSZ",
  "key33": "7tNd1XCAFf5aXqaXY7CP79TYtuWfQeDXRTG3jzRhre4QxgApmpmmwRQnBkoRC3vVmaMtfS6FSPttSJWs7sJX4Jw",
  "key34": "4WNhCrH9GGurHTyCjUEiauuoJwjioUXD6DUvfRaqy1yKhXBJGTisfUmvidrfxaZFB9bsDLYUDnH2X4fRHD9h2dvG",
  "key35": "4eKqUh2p3Tyj8YVhPtJJACPydEAew1hi6XfMAhEsjUxf9AyV5oYtNphdYSvwxW9FHQLe5ctKvp25mMEy1xLgR4fN"
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
