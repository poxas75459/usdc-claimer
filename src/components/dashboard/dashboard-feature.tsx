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
    "2hUkeD6saVHT7XMAT4RcruxnSSP77HGzH4u3BedcjktBpc6cW1ehAMePaoxpHR4GnMGk3X5fRw3N5TxeYtvHhLXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YGMcHWPuTKQfdX9HpPCj6w6h2szRTMmYA2KWKbFJ5XB4rSNUgCM4W7bwGa45HRWEoVqfT5CWJ1vNYbzkvLPmJM3",
  "key1": "571A5p1qBz2WMWTrsUa9YQW9CrRYvfWWhhJZLsDUS1NY5LJawQJSycFTZDkYX6YmHwqRBqfJtb7cY3r1SnsuM5yb",
  "key2": "3GaBZRJjkR1G55HGCn4GBSj8955BZYtaxe7kp8Ua8ZJyph5GawZ82gWdQcMkRk9jaBU2QHer97P3cqGbNGE3oQVH",
  "key3": "sDMNk3gSEGYmerkMdTqnQCpwCbU6gS8WjKVdJZYJtJPWPNJmoJ6ZPYmZr3u63DiCQPAMvEhbrZHncZgHukLgeBD",
  "key4": "3cDaxrTFZb9MC5FjvNLEzDS4dKRfddGdqsJLkbY2HPWx7RTZodXAraecmw4X7LhYL6s2MKrZ42VHptRLeeEDGP9D",
  "key5": "4WQkrkgD2j2xKGd55hHqM3M9MinTZfSCG4Wnk1p6Eeu5pQBVgBYRXfum8iqi3QMaVYGi4w64KGC773Qvdsfp2wBf",
  "key6": "4P9MQqi1EwkYFa9wVMvnffmaqRExZM2zfAWw78yVd2TfibbGv48bFgiH3oys8aBXJdeYKRPGzMGbZAKk7neCjWuk",
  "key7": "3Kgs7T2MyyEVje7YUCXwD5uMXaPpA9NijXn9mFJ5C54NLqbQvR8vVjpZaZWpQwV6mVrq61hX2A9ZQGZFFwWJ2RbV",
  "key8": "2mbmJxhemSi4CTcrduDt9szLVwMJ84iYt7ChMw2z81hrGdevV65iFk6HmAqRDwk8jzhLhAKzqiAiQNXoAH1H9CQ7",
  "key9": "2uR829F4WsC3ex3AhSLnkkSFefee6jTrxijMBufcKTcszhQ8dHjvDQFRzTKafkudiYqP6eA7x1VQkT92D8YyEv5T",
  "key10": "2Vh4KsDrgWRdafUR79zwGHtEWGTsAzytoTpm2GAWNLBfxqw4zu9sY5F3gTB1yfy23dowpGqreV1fAYpMCsQiMYPL",
  "key11": "217DBUSpPbVBNM44htW9ub9xgJBxSmksHJnQ7kTtTUk7nzfVaRJDFcCUvrcHJERnMHvrpB1QygVCDaps5rWZb7aW",
  "key12": "2Ku5AKHsZqmPiQFSaDfCJRoMf1HDL26obyo27Qpk2RLYnbxepTXQ3DR7fR9ViTHN6qfZieRxoSNKiYJrF4zDcWwL",
  "key13": "5cQfoeoefiEZWhvGDEthoS3HvsHxBP5bLyQUwAGYRJP2sg9YCUVkgQ3vwZn3bEgnGeEgeVRfrxL3SVNhaxqdxTSh",
  "key14": "2bNnnaoZWUty3FEJ8JJ6fZojiH58ARHtYWHxbjw3UvGpRaypFPY1Lj1xDcLMy3YEhKfop3EoStfo3BZUCpA49W5w",
  "key15": "5kygRDDfCYqJBNSyk7YkUnoPZemojgqKvBr6fkahBPST6UmeCXCXRxpFGUQrubhSef2Qq4Efqn4TJ9hC2HJDBVYR",
  "key16": "4QYNBSY96zURqnjz64Co63t5WY3JD5xKfVDGQUhDCMj5piJPEvMJDqmeLT6YPQvd19EMsKQjGcmj7StPR4YDRXA9",
  "key17": "5tZQdr7VG6KJzu3R3K9pgpLo5tejjARHUJsLGwBcBNRoZRw2YRb1KA2GygubDdZJzXopRAdGrKg7sxBfBqGukVKN",
  "key18": "2uGPvpVDJU9G3yVJWDqAR3FrT8GLxALmEG2eXGxYsDG5q6nS3PUff3evPV2QmpHxY2G3xjbuUZmn6FMsRcGvemoW",
  "key19": "5WKYExYY4ujeCQFqusAsAdLFXjp3TSEK6poLdvrpA4e1iw3ZC8RRpMXVxfzSw1exp34wnmETTz3PW5TTYQ7zkSYd",
  "key20": "4F8hYLKWQkTFypFyaz4cQ6hzhsKTPUmigmVmjmqsCvVekeLSYWMu3v7SyfEhZzGFjrA1hgaUUG9zsxA1DX4jeteb",
  "key21": "3gmyv5pu3Gk4Ucn6WHBbobZjwYvqwn4fyUjdpydYn2d6Nfmn5nFLsqJXa4zTgCZ7FRGgRqxUXs4z8PHXQcgboQRB",
  "key22": "4tbh7yQQHSs9U43snxRGE5nLNjeBivMp7m3u7jodttwose1PFG8nW1LT54Tuukf5JcoD1gZ5JAwhpFNtbGe3czd9",
  "key23": "4kPbPmNmNxvcfru9tjpU1wxf7zoAoiyb1GptPYyWamxQJS853hzp7Syu2gsRZ14gQnZz9e66YsYZbJFvisjj17Uw",
  "key24": "125DBhaJsZ1u7Kq29M1NwKSNnufyvTyCrG4Gct89RzMkyYgEHpMh2hf5uR1ncXMbR5asaVyJrrc4AnwwAR8E8qXR",
  "key25": "2ded2cQUuSS8KzgRm1VMNXbRi7dkjYJbmLhhGnLLAgigDnzjTKBtF1y2FGZhMpztjH65pvP1EDemZ9EgznXAFGyK",
  "key26": "3VBqL79ML4TwNof1bL2Ts6gwsQrykVatUvfthqWqQyzVxQBBKGLcnUD69F5w6RFu1WARw2e4dcVjJswrgrWK8mvr",
  "key27": "4Ngj34yhnxKeduphKF6CSPGJhZ2yzQxWY33dg4EHBcH3eTFTHiku4AN8qUVZfbxuQLho6u3Ww249wSkanUmY6AbC",
  "key28": "26deeJFePbHarTNujxHxT6mkmiQsLTToFp6qs68XNu3xTyMJroHrtCAvWnUyP4DLMkYubrps35hp4bak5CiSvcDW",
  "key29": "3XBLfcgUWjzu3nrxfnzF2AxLZ1GSQU4ta7e52TUyYHGzqZgohdJJkQgLMSWHg7qBCfxHCG4vho4VCggjL7CY4rsj",
  "key30": "2rAg5Kj47swnX7EK5wdrDBsShM1KPvRjkReqRufjhozZVaYVvEwtgMn3tAeWg8C4VJ7EW8xtXgncKGAHaCBiWWWZ",
  "key31": "VuWNwREZKn2NErrJCEpfSyEE7hj9X71yirGNzTmSBrQN69ujmvSCrJxYqevqPNYDu2BDq5Z1RVsVzF75AtYSB2K",
  "key32": "ecAGNwo2aWDvE9jBzF3yWeYiNAWCKudZPzrHfGz2SoRtLrPBkC11aKejjh8bu3XSJhZ35ri2BRhnvmHDEMraA9k",
  "key33": "tpnyAiarebV6Pw4gRcXeDyXmoZFUtDRRGxWwhaNpFSWwVSLL2UVCE4Y2abCUL1oK5YpjbZ8V4VGn6aYasYvxx8a",
  "key34": "3fzNMCTjrT3FKTT9aU5x54A3TUTnwTuv6UaVsbRwBpvwBDEuQUoKkwNTVgH7V2UrPJoqCLBGMzbwR5wAPAcwKFkq",
  "key35": "2RqTX8deUUaZ6Aj6yopUBpnNvtcqLN8CKUNX9AGYaWy2EVrm6TJiedNnH3keG1jqYCyxgWDEeMxTo59WPDM8dipB",
  "key36": "3Dtop6oeZofn1AA3QGCWmDx22yxzUjvtkKs9boATUfU1nLMfH3Do5Wg2BvNi34PzuTsKR9HMS7uQaKrGfWzDov4G"
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
