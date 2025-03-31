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
    "2VkkA3yJUBzv4nAjYMzLo17CasH6FQ1dLNZfnUipjmZns4fXcmq7hiw1U7hGUCxJWDVutCxm6RN5JuVHM221TuFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63biGW19ac4XCoUU9TRV1K4aPcieYiYKDXLZhRiUoRpoP25PjGCnnFhHzYb82GXFNy2dvMpswjS7FA7By6y2GJfa",
  "key1": "3MshL2jLhacVnaKtnjbvoqLNJQu7msJCAeBtHbcYM4oj5t3LTwJhKhGLUn1G98J7fvyzjehz6nFgWQ6uk3J84rfs",
  "key2": "rPtkbdyMw8E4DKg1VgdVS49Qm6uEyJTgpq7AEgJP5gkE9VMaqkm9Ya3xhEnDrcJ8APSToRUyhcsvP48RKo4d1on",
  "key3": "5TJrtqKZ1N8Nud2QDYYbcqiqC4CDCMCEKgdSgvmn3iuyFiVZR3Q6FJKzcFzyBy9CwmoWLjEykjeqDhznxUEE5Zo2",
  "key4": "3NovqSZED5vo39sdKfutYrMCk9N1Znq3aJd8WTYYTTE9eDNxQn2kLx6q8XWbWyFqCAUxCDdaRYmHnFKBo4xWCcGc",
  "key5": "4YeeMgpFeWXpKYvY9suPhNrvvxHAfrcbZ7jJSHxdP4bagdcpyjCvEaaQSg6THpxZQUWknYNRTbYkg5E9QUoxtUkW",
  "key6": "4PiKFrfs4JExsfpZDBUnnwFMpVdjEBUYvEPETL8XHiAucJ27UNVckyUDG5hdLKGU3m6zpVJpnCDNBpCV227QmC2U",
  "key7": "2mJXCknvVgEELcMHdTBQW8e9GYGFzMZYpFNWbt3oHJwBzTuFNmWKjqqmJYFCE3E1T1UsKGhD24FzkXw2zqeSei6G",
  "key8": "2KTwywVouAhvrDQ6JSvKLQNcok7PPi6jUZg1VKhzwTDybLnBbibfWHjd6fUooogLTPQDiMH81Koie4amjjYCo7Bn",
  "key9": "EPC2LPxYpRBL8KzRGU56TF5sEJbATpzFViGv8zej9ngEA5RS4z5EHb3XM6qiAMcUvzjZeVRRf3kHgfF8f16zNKg",
  "key10": "HBdAfrotAQEZ7Ng4719xDoHvGNsoKVSW8KiqEDaptyqC3u9RbPWfQcoBdCo2JZEjVDrozP29ELYKUTuCRbATzvw",
  "key11": "2ibUHETNrvfhgTLpcVoKxN9ciqityiHHB3jY7WUx7AgXpCBzUsXGNDugHae59Lr88q5aokrLdkowjCEMqFkZYKTe",
  "key12": "3jsf6MtusP3YvhykicD2WFsYPgPQRs3cZHFGXt5ehoZSY4YbUXfmGWi8w7AsE5fmJi1UnqBGP8cua7Y29ia8U4bR",
  "key13": "b241R6FfE3sz4yPivAwNuNYK7THvwCWbJQpPcCd6VDmLnME7p78StJqvFFjbp9AoVNCyvCHobWWXjHFcxaM7Gp1",
  "key14": "2KpL7ZLc3cMG1pBsSa9RoLvEjpAM5G2mLJ73Vow38ietUXWbrBy59VaBNYwTybA8zAtRxohe3rsYXhrEuQvbCfnM",
  "key15": "5jUsyVc3xB358wEfUVgojPB1b4eafpiTvpAJf2QFBJKyfCVSKLAhay9x1n4fYKModt517mZ4XpUUYp1FpzfM5SSP",
  "key16": "4u5ch4xdMgCmkwJLD7rPHFrgw8JV8E37aAKDHW1FtyksBRiA7XPWkewke2WuXXp5v5fmQLeEs6VMUVrXgiRUHzut",
  "key17": "2tq2VrNQyq9StwEHXUffpxqff8t3xrrr8jPbdiSdkrq9KKUHcqcGfLrJx4THJupDGa5cZdLw8CdDBhGuT9xZ5XcP",
  "key18": "4MNErLrDPbseR8nRk4iyHxtYpohKt9XuZwtoHEc3L4Sy3pf9fRLbZ9dF9GCfX9mo2zd8JfhVuYyaQwVqMxKrcMe3",
  "key19": "4rp8YE9Fhvk6vcsrTkfBto34MnwJftABW2YTb76CW4Nhgkvbs9yp2JRwKH6EPpEPPjnrHS91zthHQUSDACvNGXN1",
  "key20": "449ZYgHyhVX3SgSoApdJyq3JvzVPzaDZMMMJs5gahR8xb1pX4AaFDtWDcGKCVuQMgQmFHJWYyyH6Lepz8CWi4ij7",
  "key21": "62mApensp6swSR6EvarthkVrvMzs1w86AnDe4nST321MuH1jKCZxau8wTG5MWT892Nobx79yvEX5m3ET7w4tgTVX",
  "key22": "5RQVZQ6brRVtimEmLNomxJFoFkT5SfGeMZ7jHKMkRZaq6om56qwPeSn5ruBErzEfBR7rMsNoajjdERhuW4zbAUoR",
  "key23": "4aHbJhcmEMZUpF2HDrEw3mZxxi39BWkJyvGao3woCg5HYhUqVkFGUJt8DvtjgbBU4eyTyzTQ3qrswrd47HneRG62",
  "key24": "2SpmcX3bvJAwLJdYCXwZQazsayRWvn8j3AtzQ8T26P6kehy2HWgK9WbRcRQv1ALTK1YF25eHKyTmi6GwBxUwjoMp",
  "key25": "2WbPUR8LMJG5RCsT3zoA6JJkRfQzKLhffmY6PAXFxiqpQsXQdDuDuQLzVufA8bbj9KLoQGBcyjX7cvyVLjt2p4iu",
  "key26": "YhnFmsyR7vTPYzydeS1MW7dpyaJBQPoXSZb5fqDt2TGNU3hZz2wjSxZoBRCSehTtskDKfR6hBrrUwk8cTcH4Qci"
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
