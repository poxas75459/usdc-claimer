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
    "38vWrYP2y6vkijC6MTFjroz8RLkVdcKd5Ech6vewU6A9mfudS31zNMj14YpGTzawC1ZoiUQfp9q5bQto7SYJewKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E4hBG5H9e2RPMQeQVmhB7wZ6UNhae7REkfz7En8xVoxP4DhbfWhhgnJbcwMXtNL42mTR5wfvjcfCvJxkRTQSJpN",
  "key1": "2vAij5nKknvXc4s8QXgtbk1TyGLs854d5HuJH5gKkt8cZPs5jRoPbLjh7r1jMFqeTcNQELQnRWZiRkSS2C9zdAq8",
  "key2": "21kMcMps33MwzGU3iZ6DtpZEGAi8Rhz94cFN5qcbesnXXPJDuh7iyVQdnWRNteWokhpNMuxeJxYw6k1AHqrgVzwq",
  "key3": "3dsbMTkrY8W9zaoUpRnrWg2Cqhpk5dBGZaGMbhmpUkdbia6o1CDRVhVPqZNWp8dGFN12cdW1bTNaUr3nDqb8USZM",
  "key4": "Rm1oJ4NvZYMbGksC5Qn93ic79Dta5NRCP3UJGCKVXvBY2q4qAZ3sJteFJbH9LZ9tmMuRhVZ4PME69cPNrWbTZ3X",
  "key5": "eLDeff9aVJp1j7eGubZYz6CGDyWwrUSpJwxbJxDRvR9GAjV44yQMSoJ8EmTyaXsPEMaD6zCRhhkrYU5mRPQKs26",
  "key6": "5Q9i8yCLu72Zq9opFPNYhJ9W77r9p52M4KPBW7SicUZfFBCCPwXpHt6attRHaVjZk34D29gPmWpPSQ3gREeJ4pmN",
  "key7": "4QG48GRmRQvrKohpih5x2mVRkxQWKeGiv58bJdJWw7LpriJs5yS1mJRAHQiHiqPXbSS31mMbno4QsQTsgt3mocPB",
  "key8": "2La73z4AJWS9dJTRDotyCLzfaWAY6T8TEruKEUfDQR5FQrutV69kWPmiA1o1z8fwFQfPMLFz1B7paqfEAtYsMzFU",
  "key9": "5WJkhJQKaUPLoqnPFtATLou7Q1bJCYdAnesF5oN6nGmEpymdMuZjQcYamgMBRDsoHXWWhMNmFLrCZH6UP44hVXSN",
  "key10": "5R8pdcMDZC4uxzgzLHVAkjthz8taPKNhAeRj5H2ZdWMTMy4bhfh5CCNHPqeBmjSYp48NHWDPdt17Hq6GTkmWB4ye",
  "key11": "wA2rc41j7ikywjpo5xQRjBvqoKkCjGtRnr83SBN9yAW3b4q39im4SPGfpqcHTBqUZsk6yZCAZSP8GZPtUgewfFH",
  "key12": "2vCqzVVmJX3YvACEebL6Y5XQmRR8W7vvSJSsnyCPy3VShsSqW1YbHT1JEb6QBf1Yi8CcPqyZxQKbRtXtna7tZ7tR",
  "key13": "2GSjupDyhTyKKxfBk4fFW9ppCZ52WjCgmk5JBud4L8Gs4SFiaSfiUKbmHC1TwTPWW37Z77sXWPDEnveFtCeEfvHi",
  "key14": "2ic4gNXRXevPZeqd15Ms4dFpz2WiV1EydaFhFwSEWjJcRr7RieWTpTNawsjh7CjQZpyqGNpET87nAugrzD7nLWA3",
  "key15": "EJFWhdMX5B58hvtQAA9W7JU8RL59aeo9XywypdUrmZAQ4BkKAhDMJ2L3a8Jj7Yv4ZhwuVonUXCQA3aJc1VR35ns",
  "key16": "NRR6b8nMmmNibnSZkvpzfASSJqhHFrt1tJBp2P2MXCNusk8imajimb3RxaYTVE8aUvRcfmMVPHDyyUVg121wfhF",
  "key17": "4MBQY2uzVrSPkJkEDwfqCDjJuCiBfvLLPc2FTX8xQnMDdCh85peDNyD6SKCGQvSh1E2QZ5ZLgjwHruH9M7KDCATt",
  "key18": "PMvVW7xH55UBTcxHQPYWX4Kv594Tao87YnisZc3YCGmYecENPVPNwBQVMEM9ZfpojYHr16gsGCJpAVFJ2Sa1YwF",
  "key19": "45VLb8Pn4BVYB2RvZtQzjv65GeZrsM8tL1ordZpD5zCgZqXB8LTR3Bgdb6mit7BCFx6qQMYez5vBjcLEdAQJniC4",
  "key20": "5tG2MnsxSuTa5BsMB26sAg1xxFYtXFayiz3qJJ131LQ6mrDi6sfqxvPgiQbRvEJXpMsbrYhR5B92AQMbn1pkLcow",
  "key21": "5fciQfBKMQKfDAeVNCcdk5PzRFkKZcDx9SCdGUQEcaChhRH9cR3jHrLDvESaGxDFMDtVQzDb2JLt8xbzdWz7Jr4s",
  "key22": "VYZqRny4dg3DYCZnfTw3NqkVsTQuGE61jgxU4HZcaXMk6gay9pHvyQcqQwheGPyJVvXedpsnfeYe2gzVmFbRPN1",
  "key23": "3whw435sG9qutLuDNr5yQQRpWpqiyCpXAMdunMqybYvzsoRJEUkjnc2GwGe8YmShMTYgGvux7eZkiZpYw5upgpjy",
  "key24": "4HiADUTVj1aZSRMZArxMm8RHBZWkV8E5bMPwsYQp8GRsw6dqR4eGgxTSf8AAnSEpHrtyPiMiN66BHRT5H7bqwL1G",
  "key25": "5V3eHbyAYiXqirs7wyFzLBrCBQKZo4Lf3tbRusfRAeBkPuWXNmKq8VBSRvUFB75TC6wyChBuVZHbi4uq9hdcYnXU",
  "key26": "3edEXzSuhnj6Gqg46mQmoyj37KGZGG9Ly3Ba4mFFV6od1gcdoxP7RAeW7oSvSXVTtDJPmgzJLfHDtUi74qMp2guz",
  "key27": "uokbntVUmz2pUYaawKefQB7NSb1Kc87bJy8o5XF73zkJBLkwSTT8rxhAPkpNyFvmNFUmV1XRfQoUEQ5YkcTY14i"
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
