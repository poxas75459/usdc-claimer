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
    "4VwajZViXSYGgKNPqFoceR77hyPmEDSs4JWKMdyS9ir47sxQa8Bn2S6ZiN6J3GoHVvw9u72q1G3GT42xmC8qabEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m7KghY59tM9Ti1bFRtWfNZCRiUuQXagMNjLNCw2CNbW9drpYHoaibPP5EXjPjZarErQizQV3gfvEfsQYayfSQPB",
  "key1": "5ebmx4UJKh58TzgQYd4vqSjKesipagMRjfjKLodaonpeQk52ycHpqoTAko1qh8qfsRpbD71WsZ7ryQn4qhwk5Rfw",
  "key2": "51xFWFWfF5br2wZ9pshpSUiyogq1rtgZWt7LTNHKeJn1Ea12Xjagc5u87G51R762y6u9doVoxo7YFc2y3WSSPYdG",
  "key3": "4XUEALhYiu1U2iBFSqsutoRovCYdmPzFxJJXntsqV6pq9dtmgEjPvfu3y6FBeip585uWVY79PDHFCYkTCn5iziSu",
  "key4": "3thjdidnvdPc8CVoyouNfPgyxiftRtLN8QggGroGMMqdYViciSQ47FxBM1N4NvNGRKKPaR3ESDcfnJjiujn41cic",
  "key5": "hEsRsFFnsWhWz4FdQTa3nNr6ocgczFPZVN3DRf8GDGwBF6zj45upp6tiGaYWKnfTRzqczqqSNyPMXHy1DVrLP28",
  "key6": "34PWWuom9ZNenBArWHMRoXZ8bqkrskmzgXundTTwnb2ULFiZz4zWt9kN6TQZNiQAvUo3dwWXJA5VJTuo47HogyS6",
  "key7": "5mWPpGzV7HpHRUEbkkhtxUjetLPdq5okUPyUyWEQ3gFGDoMmGUUd8PTGiGG1YThX5VHD9rY2C8bmYXYLSevBGbZ7",
  "key8": "53grtvPVuqNGRuiVid6EWVvRxtRnF6Xn6Vgdskwr19wNXmEVV4HhU2h4ftrRpXFFU6Un82qTVE9SceTK8yqXHpJQ",
  "key9": "zeWayrr1KDNUsVCpc4fFqWrrNmRuwrBhwCrrZ6S5A4V1XUDQHNsbZP3oaUMMHceviec5hibgfPmCBWJupd7uiiM",
  "key10": "tK12xgVG6QFK5MZyLWQBZfzxMZdo5T8HueuTGhNWEQf1QjQwAqgpaLFPxcaygk9rdYM4MCMCdh4jggTfPhQUd8M",
  "key11": "4kC6jrHuzDZtD3xfkyTqKuTM4G2JbXGYW7NpG2C3JCs9vBftFNNkEHjNbitvJxeaHU9n7iVgxdTZE6cPdR4bKhHY",
  "key12": "HpgDAt5PcRdB313vGhf3PemL22brJs9ndvBqxAtzFzrxxX53fJTHcRcmdytJqG1Tpd9ksYE8Eg68DtwD5vfiBwX",
  "key13": "BLaXciMx9ZeCjavucXcN4Ru4SSdfb725yBQ3QpC2AdhwMPsm1fVdPcGeYpX3ShLi7iCSiZz7T8dqjEB8SroHnhA",
  "key14": "52CiRb5b83LcWjzALPc7y8CdJ7ESpv68MUxnEJi8oRW55d66mCVNnjeGvLmvr33ekC3RYXWGtBVstqos5KbsRn8D",
  "key15": "4ZEzZVAWdYGtQw6jPc97n3pNJZVUW4y2dKKVji2Nz3hhEvDXLtFto7Ds86KJN2wZNjG9SzjnyjQ39hTZNAxkVYTf",
  "key16": "4CbetogvbAqb57Dsi1u9xXZ9RwjvR5YXKF7pQgiXPgvQXv9MzmRrT6r8E5bPp1VCd8aWH3VVvHS2fLSFa8GngAL6",
  "key17": "3RNArfaH3NvArdf6puGHw1pJGh7RnQdYaAHrQ8Ca8trjNQqUYGHSMhYMZXC34zNoviCtmaPQbY7YhLg9huTDDSTu",
  "key18": "5g2GN7nR6SifDrPr7frrsRC1WuAoxKGFzMpvQQjLhz61UT8TemSzw8ARHY5dzUr1uKbjcb66wAGYaQm8YZkkqvTP",
  "key19": "2Z1FUiWEuGAC5X5uRQKb3myjeYKPBg7phuuazHPdtUjQScRMG5jC1jJ4E1ChJDbZXe88uX2imk4Bqqh5YCXVFYRU",
  "key20": "577MyAaDxSSbNFwNHz8BYNYiiEBJ9AmTNvhY29eeeJVzAxEdWvmEeqbuChumNyxxFVkCkEPGJa7EuD98NFQsEJso",
  "key21": "5Fu3qpruX7YiiiWA5QDSLdKoNbm4wfPWYR9QxnjAfbZcUDTAS2oMB3pQbh1Yi1UrGVxRDS6QETHSGKb8aK53CWo7",
  "key22": "3ik3BXCUoVjffZZ12C6Y8zC5YfadgLRzekQnCjR1qUvKdC1x47sCLCtpL9Nh4ZTTGPLugtjiHoY7HPaxkmMc7SyN",
  "key23": "3cqQSaVPBMaip1XdsbSrj7HNavRACwNBebXxUQSCQ8ZpF9FHXJpwP2ZtttrdfCCRSq6jxop713M85CvmEYTmz7yU",
  "key24": "49eFJWMAH1PSxomgFyDVYQhvbS7hHpEwMePifnSzq7LegBPoC5VXEQ4BMGBKLcfMjc8VHe4w7kzZYR8BUL6jCzPG",
  "key25": "281cUrHEGRQSwi7hC5Be6TDVqxcDq3HZ9hCoNRSPWS7kkjd9CSYbAA3sLNeaKm3Tk2BQXTPVEfaT82w834XXx9hf",
  "key26": "3aiUAsKAaxpdXuWeCLjXVRssJg6QVd2GRDUF5fEdudDAmqQ192TCxnc9xGnbsxEtnekAEsA5eHJH3UKhLaVqhrHo"
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
