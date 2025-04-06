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
    "gN8dkv5tVd2dXkzhqf3iG6tvHTYTABn3wnojm3CYBGcm8j8YCkXobH6699yGSv5gV39C9rse9UgiMsgdwJDbBkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XZbSqHUREskuZAShKACRNU4bwCmhDL5ufA8drbFbjw4snxv4vJftS9Z2gCRG98HvCGf2AUQuSbhYhAjAC326anH",
  "key1": "52KaidFDGx5QXMb2tqPQxbLBABQTKoFXM2boxVuhThoNsPuebi9AEvZS9bbrHGA1shRZPqruAYVAi6iSna8jWuHS",
  "key2": "3ex6cj4cahLEDo4GsjbZiBarxmYRYKUwbe9cSzSGGYqnKYnrLF2WZrhAEHkwoCCe5d67rg6Nq5D3jSnrqqz1dag5",
  "key3": "63BN3XuABrXwvGTuZajQNZcFmbS92yzDtEM8j3RNZYXSfp152zgVECbyYyDU6zjhNagK7aSzBqomr28YaHVUVcS7",
  "key4": "5DELcjXutbQx48YTy2ELfhySN4rpFTCBybsQWS7UoYtptTv8Mow3Q2Uj894Qowin5TovwcRxUvRNnwvx8cmfyFBo",
  "key5": "K2V19nj6V83Hf8NEuoQXgrT94oYNy6B5rs84QFCjT3QDavA2zeCQ4Zf71kvVSr5XStUhhWeKgNfZR6EgZy4ByzS",
  "key6": "3wrZsFeWY2VpUMZzyZgiaz4xWvW9qMK716UJbUszsE4mNidWFXEkihrdFP8ijNQyscJiqyH2q8fUzS3VXsPtFPpd",
  "key7": "traMMaXYF58SndtYDuwkioeUtgEL6c4pg62EXvqQrfWMRGj4P7M4bQmrxjM4GQcT6joKK3tqdaHMZjSqrQHx61z",
  "key8": "CVdqECPDu5nGEJhXf3ux9tLFVrAusjVtFMWRNnUuxiWyYRCJUnny6cLsJn8eEmTVaDdUds5oyBnTz7UE17MZqRL",
  "key9": "46rfaPQKxFHBCLWDqAP16ikJPUfWL6r7udVLyjHF1csM2r6NRBZYNXw1NLyLgxseWegLThueGoW3JG7bKAnRnU8G",
  "key10": "5YfM4BM7aCns8xYQHEuWqu7v45ugMu2tWoaor8DvgYeXpKkPTQJg5qQnMz3ujPnJhY1b6vhY2sXaRX1n5GtA74ye",
  "key11": "UKwFuFfW3gtiRz3UvAK4HB3HwFMMfwPPXoDaE43aNwdZXwCJyBAopbdqgSjaiJYkVmfQrpgQZEPeGu9DvYAyth5",
  "key12": "Gvf3DPQuR9L6Wbc9YJfzMSwzENjot865meaB2Vfc7Gkf4DDkFz3FPfJVnwuyBGFe2Pmis8hnAFo8N8PharY2ZZK",
  "key13": "31RHGs9rMbhSLQ3BXuXBuRDh38FELApy1ErfpfMLZcS7KmJZfZpZTZD76wGrbQ3v8kVesudMNVaCsbmK5wwDfDdC",
  "key14": "2tc3th5Wmtca9QESwKGFoqDonr5bXnQBERRHvQ2AYawxmtgw7p967WKUmVEwdBnHot26FbjE9sK2aFQUStiZ145j",
  "key15": "3yjrvcds3xAMRx5JcE9xwytQYMf3e7aYmv6aiMdGNet4Qh2Mqo1DtZdJnLt9cRkrj4C6niVicA5SE8QEETboTRxF",
  "key16": "2LM1LZ6eiYeoPBygvVHYNTNCUuniEWUPqfuPHe62bKarJCotPWynWhqZdjnaaGX27gk8Xwf3jXT7kgRQremV1GFX",
  "key17": "2tdhKswc3aGfZqFGZrcKRCusj9yebGb16jqnwW4Xt81By4acD5zT8wU3UektLTc4D4Q2GCzzhDGXqTyUFSxURCHi",
  "key18": "5D6FYVeMFo61C2RiTtiWrZgSrn4QYkRUUQkgMKx1BzE7a1UfkGcU1E5JxjjZixHbprg94jRnKmtEJJjnD9jcRtCH",
  "key19": "3M6enyAShBHpZnUQJRyp4h2JPf832yjiVgv2GSj8xMtw7pyPmGgaMZawYXjuuyNeBGTq5m4T8XYibBX5b46TmBtm",
  "key20": "5yg25VxYZhDgjfym9UHKiCzJC56xHu8r64KEbfcj4YQPLQCxLeRxFuqJavqCgj3Tew6Lgw4DevWJbJuqK9FASukB",
  "key21": "5DXuqT4KNUg8kjcPvD6s47og9s5RWkGG7t6BLrkiLNEbHH711utJhA3z6xNTJP2hHZrYtxmod3BiZAS7AnS61yZe",
  "key22": "3R5AB4X815PUC2y2tkAEp2A2CHaZHhmVcaxCMGQe9wfjRJjitefrVubFipphG6eK3Nr5kVcm7UGpEJBpdr7WNNW7",
  "key23": "LoWsS33c79HJJsi723nvBwbM1bnLNgwEhnFyqZmfpNzpMynKHixwH7Zq3H2zAqqmXmhG5BCMhNFjAumaB21PUeM",
  "key24": "558NjDFTyS8eSfZbWkdeg74KSonoKLRPAwYzQLcvfTDb7NccuRq2841VYSaBQPA8n92T6d3b9JpvvKpYA4RLnivR",
  "key25": "3gwZjZm5b39KXcusZV3AV43hXP7Ao9Lews9K6y6jKts3LGAZxvnGoN9sUMsiUYyBeDKHx6joY1Um2B9JV45PMueu"
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
