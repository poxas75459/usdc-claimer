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
    "3DejUWCgKfhoca8YK57vzXykteFLpkAmrxiPrmDvheQmRgDUyzbpR6y9usZ56ZuX4fHkSUJgvjjHuefDBTspBqHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tmSKUEaZgzPZANa8zGTMpQhkRAnghXfZMQyu8ipq2vLv1gHtmrypn91dkqmJ9Cgy6hZFZ7kAxzVepiyS5ofR72J",
  "key1": "3h3WCEnKq8XQWTa6koXxzrMeHi5wuvfUJdw9SbpjCiEy69p4HrXNNEjBHHBGVKwoJ7WmCorE1fLXf7dFbUwvkotW",
  "key2": "mRYqUR43GK8r18wryFQk6R5YjSWf42CzYVTRuCAGKEU3vw2MWLFjWUiyen5Li9KTV88KHBxj4szWBAbwYCkN3jP",
  "key3": "4u8hsSNft5bSVh2iv2KrNDfZBKKKmGL5nr9QjZjsoyUx9k8imrbw76u2Pq4XaWCvMpStZ8EdUpGpD8TmNthQYdvA",
  "key4": "3K8sJ13azDsjq58UbE8oXvZ4odTaJyRXgzGKDVGt363Uc1odpjp3w9Bk18XTYFEZhHSQCBS14ZKThCgV3yAqVStV",
  "key5": "42dqTmuiW3Ze1x18WsFRxecwdP38Y2ezkaZtkTmNrNg9wmPnSTkPZbEnWJVfSjoYDGiiKR59DgNFTFAqF8pX6YBD",
  "key6": "2oKKQF1g4vv9KtJoPE3zpmKUB6AYvRxx2eKvTw2wHtvfJRjePttmYSAAf4Y8gdkAC96QNtcWzm9CF4hW5EcMny4G",
  "key7": "2YrYiUpXonrVUTePL7c7PkVgAdBC5XQTKdGwaFhRpntHwtA2CEoXbKthMna6JbNmNrYVotJMLk6vcMhui2kkZwFe",
  "key8": "4tfnxp56KT1dJrTH62hHPRa4CJEvyY2aDVsm4W8gg5Hi9DCwctgQNyGVUCVaTewu4HWKqk2S7NRAyxzfr8nwiSjG",
  "key9": "3U8am3UegPNLsHy9st81jPcPMdjswhxuCrBvCmQfT7wBwQwQ4tKFRDuzFxEGuRi5i8jHS5GChJsE6BzdcUzmozLc",
  "key10": "5AqYmYnh1WBWAsK9xUogHdcJm3GjKLeJUaoNxdebwJNyENSd2SpWvEZCwUzsgo8Kza1AV5SCDT4GPf5KKaW8vKW5",
  "key11": "5QbG5tm3aYo7ySf2mFZk6vgYmzFFgV7BijpewmxByN7sgxwcJMDFnEMHtgWjf2JtVNz4vfYzH7E64RotVf954Hko",
  "key12": "D3t4U59bTji2P1ReHxwftE3Yg8eM1cceVsfBsfwx3v1RzA8bcQUYapu1bJZZ6Vr6dEqpf2MQkYRrE1j41LJCCPr",
  "key13": "63ivGrUX9zmi2UqqdjEFmoBPbKy66rkDrRCtSgDUNJUYesbEdZncqjag1zUXJX698T7SiXfHGsmumdwfKZTNrEhh",
  "key14": "5D23n1obfp1mSUXLac9HWqbAMvqvo3hqdvHfREckdnvUTNaZoiqgxDmQZQ7ufhtRBZBXidJH8rXKS6CuEKbi1WFL",
  "key15": "5qSYetuGEvsFSiX2iWSBzF5jgqGkEnKShfc1HHBkGcGhoRctM4gf6ofY1ADAJGPeRChFKr7kdMgxzkbVbUFGDLWT",
  "key16": "CQpZNSxYQvQS1ZLujYZS8kdnShF2Zu3bHRQbiA7xhUqVRFeN6tybstN5HVD6kaUrT7ibXxqgx7XgKtWLtJPKgyk",
  "key17": "UUV6dsoCgQnerea48WnRTiY22dqfc4TdNG8oCt2BcPDw5q82cgBpmdZPGmQiWfnGqo339tHCvzc2vvAfsTW7VT5",
  "key18": "5xWAbSSB76f5dt5rux2Qe8Hs4TBB7QwL9AuJ1ftyJkk3JJ8D3NuWbLm5pVBAVXtsWzRyUwbnnWfQaScbbN4RFfr9",
  "key19": "4fRW9BMRT9TMG4a8WhymAGV4kVd5E2ZWSaFdHEiC4Fm3ke6R5tR5yEe5pRY3m3H7iBH7WcauXMNURtTvnF7FWJ6j",
  "key20": "4EPqfwvzECGYDWBetRK3XohqK5mxAyD7PgCNcJNZ4rU25y331RYJmPRCJMM7sMfxJEFjeUz5PDPfDbj8e5uTFVEf",
  "key21": "kLy3hBs3qQHQMBUgnhaJKAMjxKgABm3yrZgsse6qxunC4EDtUygSkNuJU4KFbcJ4sg4obeWgcLqSWjAM2gckMPh",
  "key22": "5CQThQoeYbfDu2vRSheqaSSgZW74geAJmAxUcZQ2pQhT5N45xFPUCFYzWjPY68ecyMahJLQK4ftmktETVeRkpifX",
  "key23": "GkjEXNtx5syDn5bnUbYczmoni91onhtSGPnUHw8qxoRwWYu2LTjAmw4LCEQtT7B7Z1LmuhxpYapgrkX51nfsQwJ",
  "key24": "2PtZ33KDqnqQmKudVzS1doRftgwkkNfaZF73rKYfeTPd8mfeiAjXkVhDfA9uveZdgHhk6SGaA8E5gZzbhoVgPCmk",
  "key25": "3yknZcPhcVWMVmXzXsN7ikqP5SP2RTAn51sucsVuJVVSHtJog4WL8UxY4LrykgyiU8YPFzNGBBXRPWwYv52xh5i9"
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
