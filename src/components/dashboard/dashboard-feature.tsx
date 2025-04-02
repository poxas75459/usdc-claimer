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
    "4HvmfYm6JVBd1Z5H5VkptitRSyKtjszCu1jafGY3aRcQPNqem6yHJfqeZH8pRHrWSHBtKCMpNy8LnjoZda8ePdwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D1RWLyhctZttfgcA5iZnYN2Bnq9bixQ69HdRqoUzWQbjSr2aDFAtNCyhVMCU7LDiJhhd4FMJ5sv7oxvpWWxhibv",
  "key1": "46VYkkN8fZ5uszCZoFdBJ5Fj9xzQQWYRBfxxirjwcHbxqvy2osDtynnMwqGUkkKgnHtGRPcZ1jtiZU699SQZqQ7a",
  "key2": "5UrT3rp9ngtmGEe4AhnyjtwXjrB3K9F2wNzFKqu86xUP18VxBeUopmVtP7s3WnCpxqzUecSxvN7rs2uy4KANo1Da",
  "key3": "5t5aLJ58gD9CACLFAjhaMhKaUU3U1eHfkf2y4ynBPdmY8do39Pyk8BTfq8GkmiXRvekHweBgBopyxXyp2x8uEp1h",
  "key4": "9sV1tbtE3S2SE8rr9DNGxF4NoPmtB7ux9F8rvoMW8c9bB2e2LfuXN4a9t2fQZAtcT8u6r1Am3ihicFg1L4XVkyU",
  "key5": "2TEmcV1zFbWHhDHGL5AGgMhA8LLpbYajP8NSogwJbrsPesiRdkz6iJ952Ax621mXGtxovNnhwMQvbdyyt98ESSFg",
  "key6": "3n1XGpphTSHwsf1fzBdTbCcQFjn8GDCDW9ph27a97KBRRUktYw8oHWt8beh7moCMKsmhjgbAYoee1VGddBBzkTtV",
  "key7": "61qZqAvXBY1VXAQtyBTbsduto6cyyuEtwFWgJ7ytdAtfhRN5nCDiyKMpFvjqYrGRJAdybvKhmS4VuSseU7Go2nxU",
  "key8": "3Tjm1cKKv2y1dndafSUh4HWLhCJZPEFUYxa3RxMSnTksMKcM8Eu3KJ6rPryYN4Yo4XjMvBZRNUNNGWW9RpBCxVg3",
  "key9": "5HZEZxBvhGmUTyoaBw7StS6bpjrokd3VdZhQvr3S2n7FNYHQoT4aYYtMpsFfnxP2qQw6FToZoRXjuEdxun5bB6hk",
  "key10": "3eyPRiGqBY9gpWKH58qAMLAN3qbzBGiGByoDCZ98j2rQY9GdvWXSj1EnAGVksKQ9RPWUr618etjSeSmpgDzjQnHP",
  "key11": "e8JLZsfYtYqhjkEJiMNnx4Y13FgqUCdFJiVCTvNXWVk5BDjAaibnNWnUBJi4U64ungKZnQH29Lzas5goJi5tnnC",
  "key12": "5nwwNPV3ddr4fMbsFiSRh4iuUFjGLaopvvuMt4pFodqyaJhQj6buo6jSjswiBiMkdUjevYW4BUk8EDkzJAsCenkP",
  "key13": "3CxqgfVWqsx6cSg9o5xNYWkjJEvqPNkLV6J8k6kc8bHpUSdSsbVByv4DEhooU3iJyggQ4YqzGBXy7Ceb39oDFYV1",
  "key14": "4RPDz56ZwtiHzrQn93gmssf8At183YXg8mVu38iDQFhSA1a4jvTswVW3L4RobhwYe97y7pH8KaTjpUeT8cQ9mfRA",
  "key15": "41xHVdwQSwr1AuAN2rj2dqVWhpkcALt39fqGJ5EvDvYDvdQL4f9DrHEzTNJKJmsE9mxJibBMDSaZNJ6fC9q3jVxf",
  "key16": "48ZMnoiq96wjwD5DZ9CNYTs1VMJ1rHcG8ytbdiuBkMihQYXboiZB2AvHw8uNTAcyzF5KsTBvEtG61b15M9z45dBJ",
  "key17": "UraKcE9gunonGTK6JAKA7NuEyAEormACXAMchAzDvjUVQWVt6Eb1RnnTrFFmDtGKf21mL3UHwc2VDrqRUzRAdkk",
  "key18": "2GvcnBbi2qvSE77rM3GQQaJSv5UaGmDoJjMuRFPvnpU5NDkC8az5w12gYuP27JBPphGqfd3bS9t9iDidHzYCN3wA",
  "key19": "2PdkByhYherEmwdp6RQ3FkDABqSjfV9bmcAaB3RULPtu3RikUEaTm62H1mCkKWMpXCuUgnMpXrNWFsatRTAf6ChR",
  "key20": "u1FeBCs5tEqNnbTTCRLf4L4Z1SDTE7GmPSHgDNoV21PV6hK8DmP6pLRDBvFHXTCUkr6wEB6Jpw6jf3yVpUoUttA",
  "key21": "5SMofMo4Xr5dR9NisiZJ7NGB6AdwMPaM9cMnyNuwk1fJjxXMRBQ3C21y16pj9voBWKUx3EibgYP6oUMX744oaWow",
  "key22": "3eqZwGhJ9d1pm5mquj1Vjuqn3nzU5D3pfXJRKvDP7xEaT8qSHuG9BmfeTxubgpGmhorXR7JH4DFLHyuk12vcha19",
  "key23": "5pbgmXWtShQnHtPCvr98d7yYz7NJLU3z3JGLRcrUTM94B3qBNHkS9o2vMm9mWUi8756v9mEU739uHKPm8kv8JqLi",
  "key24": "22FFU2WkxwPLkk6xfEmoGsGBArQA22mm2wHTFnzKH9eC5mS5y11P5ZhuRy8VuCh1FqhasxJXYvrjUGUfnAXFBnaP",
  "key25": "4cXwjcmJ2Ds9gQFE1WtYftYk7rhetY8SAzVdANyQoeidGF1fPZLU3zreNJA4QgXobDSPyDsAi4mrYbKBMBi1ToRP",
  "key26": "mJo1cK4ndTrbmeod91kKr7cE8n8dZQAGmvFzZnLpCw36cjgkn9GXJkFp1oWJDLNnxBB7eLLot82Z6cohzMm9Hps"
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
