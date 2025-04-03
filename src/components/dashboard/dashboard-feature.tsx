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
    "q73DnjwXWk2LZiGewN5UgsFxxgNBi6eb8WRmJAEcWzsBAj2ZsRvAV9iWoELZ4SotnuyEuK69A1G5dXSgLPsdw3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QGdE9UBJSze1aeK3J9dvm71DoiKK12nnunda2n8VyVh2dgPDTNUi4J4Te7iTZLNNeR4mVCCrS1S3mGqTMZuKZkD",
  "key1": "3xHPXSBFJvsB7X1KWjy5Ler3HEF1XvHaraeAh8Af6ykhRygEUuFf9NYn4LuxxQ8HGDMqarh33btmdrJDi9p1w5i6",
  "key2": "dKHSeL4Fv4EUGqAZCtts1PikKWXMjnNVLK7gU9yppn6G5WRp7xmdGdtAZ7r1YzqmWa937Y31Wh4M5ToLhQgEmpZ",
  "key3": "3Epn8CqxN4yYjJtRgJpTs93s9Xy3kqr7QWDyhiUwJ92tXMd18jU6aFjobvvq4vt7Jqmtjo32sU7KNrPZN6EwiAwr",
  "key4": "2Rn4mw6LHi8K776ZLx55UmJ3qTEj9vTgjwYJyMnNCmPHqQDntyJNB3bAwhddDfz9pCzYesFretXuvAuVqpeBq9hy",
  "key5": "4myqojFxNj6QdVNTDbVeY5JMmAbENRozusyL3mLD3LoWdXKBxezfgmffMQe11uRQGDAAkoy2Wz489cJxh96YL68P",
  "key6": "2SesW9HMGJamtSvn4EffbKUs9LLsFKsADRkyG8qi1BAnQSNQqty4UoScWbNcVj76xJdxFQyABzG1wJFvJkf8YYrv",
  "key7": "5yepnyvNC7XPtmsGEkBRqcgqiZYBtuUDULssKpaHczfxQgsbEGXTxyTBpEKBkKW4cP2KNxNQotGdhgi6Zi7MMucX",
  "key8": "7zFbyHePePkUAvYuFj5QuPvoszFUMhJFLq2tXNPP6vdAVcH1yafgkR2SZB4AVhfn3d6Ja4v99CVeHLVZJGxeB3G",
  "key9": "4zoE19iRn3eL4QUxDjo5xa6i43BWsrPWvVA3hyiMLKbzDHZWxZtLG5pXjeQPhSH2CXp7Q3xJCzAm3YwV6UVRmKHq",
  "key10": "5beJtuEz9wBkaRRNbhcdV9yfTxvT63VZi21QZC9uE8kGGp1AszAEQfM9RgSjtowYPD4GmXnUs8LE8rPduXHzpJrj",
  "key11": "2eZtkVBAR29Ai9AFFPxcoD4wDfETKAHnKBdxFMKYL4aEPGsx2Sqt7t1fgDUgsG6FKkVe8gHuFjjjydYMdtyRyGVz",
  "key12": "5EnnkSVvjsEmfCQ1xR3eRbewFWCH4AfbLuA4cZMu5cqLcHEgM316G4SXqe6VD8torpzSu7BWAjA2mNYBCHTvEEUx",
  "key13": "4kVd4UuY3Hk3ZpGe3U1TYzeHALHPy1GgkyHAcVRGjSENtYnm7v1i4Yx78FW51ez9nKxGYPX9UxdDBeB4Rkw5kow3",
  "key14": "3JqYLkDGQFNVqVAN3eyHC5PkmqcKMJYwwiGCf7tKsfQzJUkXcdWbh25nDK3ZN4tZzwTm9TdCzDmC87DHbvuXGykC",
  "key15": "3ZUvRrx9q694PHReRMH9urXKF7F29bsEaiKfNkWhHL4TPqwq2q8Rbap4RmWSkJ918wYX1QCqcHDYEjQ6D3KM9NZ7",
  "key16": "546ZxZwfyZApeu3PQ1XG7nT6MKR1Xk18sWsXPQMzSp7npNE5aUCnmrF6n9oWYdXVqJcHLWZqcLqJJ8ufdWta7fzV",
  "key17": "SVPCgWnJ3ZpR7LmhQhMKdzqufJqj57Wt88aoH8nisfBgMVPQiHB9CVKmAUBQFyk6MBzaaHdxz9XNmSiWWFw6n6i",
  "key18": "453ED5Gq5CydJd5jeCrE4DYa3d1MCDUbHsbh26F6a7T6eg6Qy1Ch7hqVtQogfoqJPMenxtUKhEdeQksgdxGjd8mu",
  "key19": "5xaPgjyTqEWGQYGQmxrSUg27yy2zS1En9eoYhon7FfeMWSqqErynsV77aH6jptZAuM4dxSjKp52UqKFbhTXJ4SAR",
  "key20": "5s3Ejpd5Hguvr928XiGTmLyGvHqhvQGF8947ar5g6kJCvHWCC9H1xA5eM9zoB4SkpUSvLb29c3Fs1XrCuytzdbxx",
  "key21": "uRj3gAH7WRHT1vN92UaaXRzbC1zjP4U226FYijxcwiUPMnhyycCCgiFMTEbynxnAuK2Nv4KnV3r49hg7jvsZnN1",
  "key22": "2BRfWFeHM9T8Zk6g59GfYXJ4Lt9FEvU8sSTMFqYqMNqxmdcV6D87zWFwhw9XyXMtr6F1UxorJKPDiXyhdWCVuorA",
  "key23": "2tEn1DaDcCjGyU26b3tPidHeaydKA1ZHKNmepC2XFTKGb5RqPvKbMp51RA8rhZQEbLHNtDs6Dgihzh4GZf6BTe2h",
  "key24": "2k9wqNVaFcezRkfPNRJmpYZDQcs2UkuBQujr91c45ZVo79V6qFG7vZwgYphA6bmsykD7bidSZkSfJY48jfDv46zg",
  "key25": "3cZbYMZXMnLb43YAFwQVYckh7whw8SEjEqaazCxVU4vuz2syKmsCB614qNocFoaC2hEmA8W3BNJFdymFbkCmjhZ2",
  "key26": "r6zBodiKy4xRWeLbGRPYHaNEfHEMmcBpHW2vYhJQk7vPADnc6AwCGtxADHR5Ycdpw784LgyJPwLy1wvMaDfHUcA",
  "key27": "JrsGKqraSysWEkrnQCm9H3sWLJkrEWDaawQn9rWy37yg5p5o4He9sAayQdTSWxyZiUcFk5AKDa635UmnfLSYDAC",
  "key28": "oaZujJYQVQZuFUp3uPnh9ZK8oQVXhM1kM2CrXSppNmUuBwciAek8PyNG28UdBSpddn9XArweGs4nwReTBSjqKvh",
  "key29": "SMjdLsWUwdjCRU2aXDFiovttGz2HTPijnJf48M6vwMGAvRqNKVJ1PUTToJsyew7V7DYUTAa7qyXJWUWFBe1poKa",
  "key30": "2kHHnV4vSMckk1nb8bcvYBwVWKXyAioywmzjRiKHFmDVPBHyQ5jSy6h3jVCtTqYH669UVLLzihynqA1HZF847euV",
  "key31": "5Dm6DKAqi2mXeRJrVrVUxMeYVFsbLn4xN9JkCJpfSBQG3KCUh7DqRzLkXg1t4YKXn1n3Fykk63X14YVgPELwtZ5Q"
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
