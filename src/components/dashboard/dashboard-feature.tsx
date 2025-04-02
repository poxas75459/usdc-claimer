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
    "3gMw317uoMExWSZVRnqMGw23gN1nRZG7NChfFGg5nJbgo8cYETy5AoEzWTQu86eXBkQRXHKqHPHaJhAttZxPbyNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DnajWio8bFd1NSXDT25MxNoEWUockjTRPubS5hHgBU6XfqFzEic9wtopU6RAWCyTUw4Y6z95CG6G1T2GnvtZMkP",
  "key1": "CwgivFZQkQQKYtP5HKqqknpP1BUq1asw1Zu49mdn6Eg7vzFLGXmYJQEgPqH34vtESi4URECzWekR3Z9tKeQK59Q",
  "key2": "e344gxh8bZqQ1JHBtZ2z9C4M96h45rnMYRA5x6K3qSMeY9e1RtSNHRbhdzYudS5wkXXy3v38VBDRggneger5pa1",
  "key3": "8WHrNkfQMfftjEA5DTCnBEPTarsvv7TCQx9PaoXFYw2ni36V759Qe3W1mUSNHw7BNJqkpDr291S8ArRpurzWFeZ",
  "key4": "32ZzRTg6P9mGy9jgoD4TgZ8grAd7kCy6CxHkCdih69UNiDdraPPFerKLfw5CjGzLKfJW1gAYzav3Gg4ex9ETkrZ7",
  "key5": "2STACscgWUaSDo5giq4zjstc9NbNst4HyoRwey5PmzhkBo1SQYR3kPRhKJYSWH7p9Q6xVaD4MzbCFCQQNW3dWWJC",
  "key6": "3g6UT6eCgabgmoyWj79E5djCyYmbyTz71cAcMBhmPWshiXvnQMQNha5mmU6NXVZsqnE59c14yiJgKbAjGa3Ux8an",
  "key7": "3HZBqPRB93MHgUFDSYwHhVMH8VRfCE6cAkkWG7eKS21QNNWyc9UgZUeGWkTnYk8rRiG7Rd7CTeD2zEguWJjvcvVW",
  "key8": "4dqhq4z5SCJBxPJ5Uw6pqVVtbnMbSk7stCEkRxZtJsEgu3w21JrrNNmXuR8imk1jybigyzgBLsKGbR7TLrL25oAi",
  "key9": "2DcHyYM8idWTsAEd1Zuw7KR2sQahjGVQQV75PF165T2uc1s9tUpRmmSvbiWTVGydJ5ux8ju1R69rVk2pGpzRWifa",
  "key10": "62M7tSJWxKmELup5G1wSyAHWa6AK8TLhq5GcpuWRBM73SYamuGrweMJkf3rMd4FZkFzRbG1WYd1E8XFhGURomtLp",
  "key11": "2THuwndXray4AMsWHLtBnpuKbBYPaMu6bJ3fKLzGWuKSDoKkpujTeUUhy5s4Gq6pzeLEYrncXu2aEePozgFQ1cWk",
  "key12": "2mv1zp4QsrVyw52HtAe4izUkmUHmPXvJsUengNDSWzDtkiQo7kSFtqjbAdQRAfTVvvDFHwPLDBU46pH7wY3SPJMa",
  "key13": "3Br2KCA81efSBE3myDxsD1nTGT8Wim5dHbW6h1GjDCBsRnERkLUnaQST96nAuFskPHtxQj9wWotcsdP5P4Tt3YVL",
  "key14": "2Ui2DxGk66gMh8fJiDN5ReEFXbDsu2LiE4u9gsh9MhtjqVPcwhxqVQjy8FA3mZwse78mK7Bh61o9tkmnKbzGubcv",
  "key15": "2VzZHHYzV7kidTnjViL8B6dJps66emeuEKx1toj6Fy8QgEPiuoL18vHr8fdcg5qYXmNbqFXkDRdMZXE4BXYTDkiw",
  "key16": "36a483fZSFbJrUJQCZhEwu2dVrtuMgheApZFXn14csn5J78TUyTjjyZGtcKgZszc7GFHzaPRaQbs38Mb7fUTjM8d",
  "key17": "WTp8tbySYcShvjcfb8CoqGTdFueHJkGUhvVun3HZGz7mPn4Fx8qNbrjZHQxJ1NxjZCQicbsfouvLwpEaq3j3UzJ",
  "key18": "ePYLQ6NxoJbmEAGMDWNcQ4kdUtVcwPKCuHMNRYDXG7rFppMVhTxSwxh2aV3ZCX8C4So339cq1qwtECEKwh168uP",
  "key19": "4bETrwcbqa7Td5MeMxXb9RhyL47tpBKcdunmMLFf28hDMQy5PPdcMwrFyExAtzYH8kFSNVzU7ojHxwbKtB5M4yWc",
  "key20": "2jMWM146j4vo4zMSD7wA9WrQacdVpn92hEeXDTHwZzg6nS3ufv35yqvtwCNWdUdBcJHqEMVoUzc9MwpqZjniUmat",
  "key21": "n6ryCMD42vRHAChhW7GhfeKB7vvSboPcHLmrYpR3vjSHDsNdprGyQkN2R6KVV5QjgJb343TKw5HN9EKCJzv8DJy",
  "key22": "5ijZEgaCcU96qyjHcEcBVb2Txz5WmeJR1RrWHA9Y1bjgBDzYvzLANwD3gXjr43XqqNA34vavtQeG1ok92Bhz2gdT",
  "key23": "2gQg27nWs2h7XMMHQw5oXJYCG8hcfUUUWF65iLipVDuDqHdANDoioZH25z6pWUieXSbX5Acjbq3xw389PZbSZe3h",
  "key24": "2DiWRPLKmFFnG5QVPwXrHBy8ZHcSQMs52CZHpRYSHJwQjEZQQZ7byei1998mqXw9m6p58Xc9Tsip6jBkcjWWeF6t"
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
