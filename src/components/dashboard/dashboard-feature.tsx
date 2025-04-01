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
    "yeJjsnpEoGAnnkSNJSXvbjkcb2wjKLh1LUgXSv9kySoevuvT9GqS3hsAQ6Yn6n2xzxAMw7zFWHYF4ibsSVjHxpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bBRa2QDq9Sn8RCnVa29jp3GruehmqgzzE7tQYWD7HAQzPxgN4wCjJP3QsMhQZBRYR1JfAkmHdAstQMafpe4DKox",
  "key1": "tLEzUv6ZUM6AXjWJ2BNrbxpWWxdqQ4Ps99Z4PqfnDpWzdxss47AmXJuLQJ1HtTrf41aEuvgHRop1i7BCm74uKJg",
  "key2": "2q1FP6ycQW3qbGuLJcfqBH2knjs6v3uB2XQ1G3hahLApd1bmpL1k3TMTukZeETWYfu5ujmke66PYuaN136D6kSXE",
  "key3": "2KJUcTeyw81iy9A7EWu9QmXPmi7LmcmJPSbgA5F7Cv3y8odGxDniBguZdQFCfixJpCecvqUsChBAiPuqeC1ZCoqi",
  "key4": "5dAauLDJjvndUNdz3oL4HVT9sRAJ2m6FbmGSMoLepydArvGfiRL8bjx92DguGXejWyvL1ChecsrjBtfnzmfvXaDF",
  "key5": "21DMbEYjVs5MffPc6F5YPkSvndqTJZiJYiiZqsYfZFceWrauVGxYWJm341G5HvGPQ91EQhiGxx3CdchhSpPZxnuJ",
  "key6": "26NWR5LSxNvu2ZvPqSkHLwk5KauJTLEuwdH1KGsWNN9J2P47cNgoYMBs689zN4TwKqYDhsUsRrNAK48DQsXEtDHk",
  "key7": "5uD3cjPggSDBrQaG68iuGR5P76uwkfVVjyLjDa9z67BQaUT6TKEYBTE5aDM3pXjKyo33cKxeRJ1wq7T4tybd734d",
  "key8": "eqDv4tESLT5JiqV1a55XTmNRfGTv9vmyStgZkk3VcWsXH16LGuFUikaC13wcrWAc2qTKcksZwvrpnpwUdUMUik8",
  "key9": "5qZYBZgg8iVwXnSEZHn56pEvaQ1Z3FWJxJhKHutNX4aoLip6HgV1BLyzDYwKv22oQebf9B9XrgaFmR8KjAohpjUV",
  "key10": "STR5uKqFkkZe4ybsdTYRCfiKsUubdA3Y5Lok7VnTofEWAZK2us5yPxePfTpHSLebrHVquz7fLEBUc7cv7D3dKt7",
  "key11": "4SujLeo2c2YL7ZKt3964AiXam1WRzQsTVCiT8r8Uh9kdgTTWbKPHpWV433kUGHJpYpyNWVEZjbjNjG52uYFsg7vo",
  "key12": "53dfJhLor4rB5TSeUAM6pXqfBeuBaSBp3FKGbgbMkTFskQzdzE1p53FKEvhJLHTKSF2oajcdQnZVfD9bYUNbDYC8",
  "key13": "4doRqFQ4GA6hwgF162T5B4i8uHKqeycEgeGFD9xucrbPAmYGkNbtRGHLK1BcvC3A1R7mGEHgetJjCuxh4kmqWW7L",
  "key14": "5vxdS3kAiWyRGL9cBiXbCgU4aTVFSXE1LbZAVjCMQhndgL2H78g56YwNxbeqATL6dAwPNmkm6mVHWEijdT5QduHA",
  "key15": "4oV9kS351kZvYjaSvpf3Mg289zpT7mYGh22d4f5yZgDtRQP1tBewHdef2BgBsnkwSnhBMvGGu8pQUPkzg5KqSTGB",
  "key16": "3Z8f2PXmXWot1MevMaEP4NgubB4abDiesHAY4RP2tShg48HUyXPY5xjztDVaii3tp17GumMC3MCFRtpM6ZkYsN8z",
  "key17": "4o4oMssrX6u27yvoM9Jn5fzcSccinGhsqEQ9K4Gt14hyCY5d7yBJivJC4SVk1uFA2TYyR7UQSJufFhUgLGPBeQe6",
  "key18": "kTDBqkkGKJuAyfEfXy6NCBZhCme7xzs6hcg68P64e8nK9aydzEy1T4G8E1V8ZQVJSTM4X1wyg8XXw5FUBx7o2kd",
  "key19": "sf1A9ooBQrSNDPb7ETKZDDJhryhG1mrUGhjZSHdKZNx83eUWo9dB37JPMih4eWnDAu7wH8HJ1vsyHY8HQKvLh3E",
  "key20": "TzZnpihxes1wAZspGf7SYTpPSYACN3Jgi1VH6PeyRWB32KUCGLqWeKZ5YwhGoKTKnrSTwY2mbeYQPXj1uf8nK1s",
  "key21": "39kGRY2ZvLcQsYUqaDPCn4N9UTAiinBvXTuDRFE2d6497EPRC5BDPaBTbWViqwtvZHXTP9JGfo7XWvcBVywzu3Ne",
  "key22": "63S3MLGKWiiZipsBrSN7uyJotsqRke8SiUYfvYT1xTxVB4PUqd3EUYrGDd6QA6uCdtEGQUgQAzKQiDRupGjeE294",
  "key23": "2BQ7MPjUzpvLenP1NLJt6vabV8Ghp6XBsQsGSN73FeGNThHrSSKHvb51LVSeA8d5Rzup1rgDBPRXhFkUacSZ2X3r",
  "key24": "3xBxweHoL3gtDeY9hgsfpGZQngbMFdXKZkn8jAT9rD1dFhvfUpBUFVkPz8FtL5fxehZY36LrnPra4ELaEAWXKfcR",
  "key25": "5Mjn3Kvdodna7WqL9rKHM8Gxe9WhKEZdq5WoPCh2dTYZK2g5Gywona6MMsaJGL9VLYamxtdhQF4DvpU88bhfiSt8",
  "key26": "67VpmGGcwTLKGCRzndsjCdEmXN3JWNXeNyBRjLEd14GTe3f2wnUq9PFCXwSnAxQUcDBYMxDGNNFeDuE6hzoaFSmc",
  "key27": "LgrEVH7GY452rS94RCnQUmqbZGSG49Rw5bpgEFBYtHFgjoqeLpi9RfcBKqFrhbfrpL7qkdAzCxX4g1kzPzAmXqh",
  "key28": "35B38NqXC6gASuX1P8Xvj97kwKn43GEctgqwsb2KyX94mUgY5N8nLMhDf8UBj6PWPc37YbbyxvVKFXQegKyxxSKE",
  "key29": "5JXCxcsoeXdsdsYEw2XUYDXyifNSDrz2TVhvNRfcVoME5iYrCX1LYeqAtXn4HshQohvzySMPM4ixZ1KzUqNHzog6",
  "key30": "2uNGk899gZYB4ewnnS1goV9YgndND4fEr8oqLJjQMCJCLpyCGdW9jVrJ7WbYkkHzCNqqBQZTENrAeF7E83witPPb"
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
