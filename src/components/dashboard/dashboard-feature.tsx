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
    "Ftpn2LrTF91LzojK8do8Axx2CGnfsEnYxTxEfzFyjZjCNPzK7thVanDwFLf4pDbaWcrA5UiBM9GyMEQyhdyYQsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W6oM5uMKUFYd5vgkVTYVh7Jn8vaWnfH2B2UFfuqJzWD66MYBvdD4tsVyoMTz3EgLEDN7LLVEqk2Wmx9LxiW24qb",
  "key1": "4Yc2nh7yDYLs5RiQgBSFj78rGARuDdXf2F3DoCutMQEZPBe8tZ6jWKpQLmJWojcMM2A8uWCVsZ7M4t4PUrNFs5wS",
  "key2": "2yxBKCSuHPuvn7Z59cLmyexdt515Xcfu53xwKrzovQuswFVboUTpHoyc5kSk2uvE2FmDcKSHnzzKjw7bnhRp1LiK",
  "key3": "4PYyMrJAXZAry8Ae3jsMFMbvPsSrWGi79yTMJrshrnRJR3RwwyFY3nGbzgTvq4UHjPMFhj6AwkRHPng928nrif59",
  "key4": "NnuH5uHYUTbnLQMXDc2dmaqw6zpEAM6JXyt9BQ7oHMJi8UH29McPX57nHPmCSe36hx6MHLgTX7fbb6LVws81S8z",
  "key5": "3FnrUfReefFSGLfMwhcNcW3UGAroZ6xL2Yu9ES6gHMeFKnD5Gr9qaV73ZLsELXzkycCjYVorbmaGRovs4foAESHJ",
  "key6": "8c8aTD7FsKiyfuSFDifcCZxEH4srxK3Ge8XRAbGhHMJZoxkH3Ga3md6xbKa2CnyDCS7j71HxgQen6QHibyVTNRN",
  "key7": "55KZCJeuhL6YgrMfH1oDp4L8kPRY8xxx1fToXxDT2zYizcAYWa8baAKN8QXm5F3pczzM9igmYjihEoDiDDnPZ2Yx",
  "key8": "5v4LZUWyUdRCFJh4rve64LPkk8QFcbBEEAUk5pfZCzBu2EwcT7zbYtFFD3Qeae2e5LGqFqSDoQ6sYsxuLGEyWtga",
  "key9": "c7VKXNW4cCjhJ9fkLmJ3RWB8MprEK5vdokF6mGWBMHrobqZgLL3iQCvouRJi6dNV9jh8YTFQMGMpYPCfgEsghVc",
  "key10": "3fDfqUWqmBYNWxrmURrqCgRthYis9Sej77wQp78UCeoVS5XZxB5xMKEeS3ZKVSfLafL4CcxZYuCzEMjK1zbG55WJ",
  "key11": "3oRhtyoyh1Y9TaiuQvJurhU5WTucwNp28kvK54tSwNFGjaoz78ZFjT6gTS4BgbbbxehnraLCtZBSqezCuWAiuMBo",
  "key12": "4vogyyQxfnVCZ7sNGDW1LWZHiTME1gxNyHh2LCaM2PEMz7XG7R5aafLNBVoSxS3FN82PrGaFzy58iaQVVss7Q7Qq",
  "key13": "428MH5cxaNwu26i1yLc5Ha2zQpbQFHa5oF9n2585WL9DmstE4ZVt1gdXNnbUwTANxpcC5sXL1MjjunJg5ssorBdC",
  "key14": "56hx6iZnvNXhxXv4eiPkaTV6yJ7rz45hd5AZoaCE67vhh4oQFc4eCL255v91UsBaMopVxXNArA1mt2Ww5Sacsn3j",
  "key15": "55oFz76MNvfCwRdCQjin94icj7SMPk6GLN6qkEHAmju34d9UQSUgKCFq4eRQsMZtihVoaxDVtUbanDe9MCUEMrCR",
  "key16": "3NTK8Bv21oZfdeEXhkmgJyt43jK2pmiCMhAKEV7cFwN3ffdQGWNAyesPkypMdwkV18duDbjdbZbqNan12QJNmEB6",
  "key17": "3idmv7gc5RQDEJE6VwP2UiUnUanmdXpWiLXoqw8n5QvsJBBdBLRqz8AfVR1Eu4FoXBkNSko2rP1SNonZ3ULD81uQ",
  "key18": "32xdGVZzjhLDs4yzDetCx1tEGYEmPcoU8RSq2SfJWNfFoShufakmTUy3LcjQHAmCC5GqF4J3wXLmB6sAZxiwpW3X",
  "key19": "YzwAbh6aC1YsfxgfghwfYKkMjZmurVNDQFkHHriEBDBxpW4KPWR4HWq5ySp8izuJqjP33V32srRP8aTupm7mJNc",
  "key20": "5CMo8r7jbYpcJFUUpgVspEckrqbvs4RtmX6pQrXbMPDHh9jx5pPdQtmsyk1kBwExnLde6H9Fpk3TQtSDgd7QfZmN",
  "key21": "3gUmTAJkjJDo7GRQfTdzMWrnx9aM1iWHJ3dz1xrGFmcwTHedchK1XRgUQ8zRd4mvqyYzVohod7AyfVj2pfMG3EaG",
  "key22": "2L7yWpJnL2XDDjq5Qm5wYQGy1VddWr1aM8G84nxuuP8RzGux8psV6cMMXGwYPvRDhNc1JcBZydTQ4omDKbymTQRG",
  "key23": "2iWUR3x91nqRHfv9KZNLy1riiLwkkRxcKMW4quZgWZdx3Ne2en2xC1xK8MWhfviFWaV26MTNe23gRdiV7tpbFotW",
  "key24": "4e33U1xsgU8GoHBrJ4KDQGYDATbNFqSQvXbfh55RDbuftFjmuzZb3FzzmgvfJddJGsLskR8Wd6icFYARijfnxwF8",
  "key25": "5CcUWZDeJHC45grLiNJjf2QR5zT8Xj2HMXLnViYassxof4KLQZXKVKjRBTxvTmDZkpxUXyhYVmrPCRpCkYmGeasA",
  "key26": "NdvnSe5TwEcdP2tWpEVdi7SKmMJtjHJBqYxUhfkqtufKUtnVHFU4nkAeyzkk39btehhn4A5L3MJ9Jbn8DTM5vbo",
  "key27": "7rwveB5ttxq5XoA1jyhXKkWBSyjs8mkwGEfCYT4XN8AswidVyEzfPdrGSsZ3Ffb7KquSGMwxAvvxgFycpJYyHno",
  "key28": "32krd55sJTWzrDQhSMFCmfArzBaqCgV1XopUjTwj3YfSSx7i9seWHKqXfJHaxDFTMEtYFZC4xFmFwpRXWSqYaA9L",
  "key29": "2dmDobZxndiemhyAY9gSjrLRuhruxWj6WWxybLhcdZAkc7cLEFYsCv4o64zfEZxPffi1qNGfGGZA8YJcBSH5ZfJB",
  "key30": "3toK8prGM6ogNZMHuSzRhoA8FLY9YkUbkFBciBUSDjHnp2oGQvWimatx4Qki1axRmZkCpbAtoJeZLjp1c92aJPom",
  "key31": "7NxmfktE5aBBYt1B1bMhyMUk7Lvfth6kiwCKdXGaKtE3Usq3SGEL8RHJt6Jt41FPrViJSAmxr1iySk1BPpPh9Fa",
  "key32": "5yQiGTiHVmZaBW6kie8rzYj5VhukMQMfCvCNtUqYTzAf1cNVu85qGPFn7SYzZHYNgbWUZMVFT4dDRrm5EMWeJVz3",
  "key33": "41zvWMTD9AXVHd5WU3FubZbqq6QKyxSHcyp5whZsa3xDya1sw4yN5kguGJm4xrMypwJAVzVAS2HtqAA2aE6mzM4H",
  "key34": "4nE16AKKaTJLqwC8uWNzUALb9inAzFRmX4yGBkd8V8MtXvMX26oQQUhoPoTD76dKvu3xGFsmBnGSxZcBtouwxsqW",
  "key35": "3cEjfWwKjJcsbXhfEbAgfF6rUVWTcGSaRZARtYedZqwaSTjenoGoQDSzZPa5qJ3ngEUje95jQQMeRz5C9ioX92Rm",
  "key36": "4m3Vp4Ns8SHAQgQeUcyd39xC6g8JpyyD2Y2w8KGGUTAGckcepCXsNALB4MtmKYzhn2et8nP61YYKWRgZozJ1wTGh",
  "key37": "3d94LrsDWJoUMKG5hCbxwZjqZQFHGJ3SSnhnkXCQ4t6phg25tnQgXcF41oEskCe6fVaahXhqurwkswaC3Q9WRe2P",
  "key38": "34qGGGtYNo1pajFzJg2njhKB2j5vUzjdD2wmXSGDWxhJZa1YoLefAAV3spSgPJwexeYEmfU9FGxzUho92EddxDTA",
  "key39": "26ocqk4RFJchZCdFdbcadPaxvdTT66hfwAo4UPnbcnyeMsCFDZecsresPiVYzScogypKA7K7GR3wK5M9JbGnknG3"
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
