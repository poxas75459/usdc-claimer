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
    "5RvypHTDHb7vjo9S6Ttr86KL8rkKo8Jp7j8Kj9SHF1edtDgFwJWYDzk3DmowAZs2fMqjDiggF8qhfb7z4Ls93e5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uD9fDiNf9jA65oQH4g9qeMmtbUjnYKLYsFe6ASU9fFmUN5niUWqfyw8EjappgBQFyETLA7pgmUAYF2dNE71d3Hu",
  "key1": "4U4kBaJ93woH35eHcV79L84m4FTAhJ1TFaiutfzjYSTdrzXZ7qepWGpYNWQjwTfdZ514GJRUJuL1AgdeVEQT7ZED",
  "key2": "62XASwKVj86c2UHqu3JVcWE1RF84D4fPvQuxcsfLHF4rUsxZybi9TVfGECE9uBSywrVFZ9vKKYZiybJK9atjXPxa",
  "key3": "6KoknWXwmqqk31vVHYDutG3pN9MkXCwXQdQf8cWJQ8Bv5Fuc7qGCiCsgvvBZyg16qcVnyyL5pwbSisbWQd9VSLR",
  "key4": "5VUnTW9E2iK6ySwAxkhQFL2SAkZ8n86du8wWByrQcayXPGVrToFYCqM8Zk65Leg29sJYPhtTpSH1vGxpjtepQMqA",
  "key5": "5BdKcuFpNDLc55VuhMVxhqSFhsePXv95tiYnDiW8zVBtF2E2bpT2HYQkmAYBUQStViE7tBKf6CWpYgqPZA7EjK6q",
  "key6": "c6HNDogCNugBGWthDygVVq3MZL8TAb1UvwUBLh4wa5kAEybbFEF3pRMrxvtu1mmUSKnKP1zXSckCoaKrJwqcuKt",
  "key7": "4JrVyTy8qv4L18tuJYJ8pbupfSKY536Lz8mvcfKGPuY9xtFqic8mnYwBJuFh473BWauNkp5sqaj7Gw4g32uQhXaz",
  "key8": "5tVBm5DhY59usGta2vFNcFXbhzLeEF9cdLxW8zNGddXQfG9SiSfAU8qqqbRc9pCnaxvZkSMPe9zuq21LYn59Evdq",
  "key9": "5giJujfDJ1DpEGAt3djTWUPWiegPHZbXaZD1Vvxr2FG5H2NTw5FHLPDrhsHhTVjZBx5Df7Ea6CH2ESDrGUoq3qYb",
  "key10": "52iFfRBMqFwics7ppFsQpkr5BsRL1S8st21mvbpebuBKSbEQ6RoxAv6RdBb7dao77x7bk8JBPJYRYfV8EvUg1bvf",
  "key11": "5XzMFq4sWZTJvMJcZ1iJQpGLyqzs4XxUfTTGpW5ghDDhzVYJgNPhaLFAWcu6EiWrRvPmXKqKMXfh1yysSEUeTA8H",
  "key12": "AMXgytDVhPhBSWjXSU4A1hwhJWBuzcgqoquxEB1QfU7tr3Kfe8sdgym6gbUJT6fjz1NoRz1MNLWoBjLmEsTvMX8",
  "key13": "CKcgXJNDcKGbtKpWmz7BM2JYcdsu4amT1aCn5aXJtssMoFU4JLrZt733TH7GiE8qZEPnXHXyZx4zRYHwX15kBsK",
  "key14": "2otYAT9nVbRggKY8gtfdAJWB8DJateiMZHxFcW7gsQ4A6Qz5tW7sMZnh99qYJUAJCLjdzEWnb31WzowZDcb5MSzL",
  "key15": "5vJEuuL5kex5HrQrEPWGSRyCVvhd1D7Fjs6a8yVMVP5PpDkL7m5ctsJLTEaimLPcX45ydSPnZbYftmGHNC3a3fZf",
  "key16": "5uNeizWcRnX5hNmS7wQZAYW3zsLjueEjE8sob3pw4nqcWUTQEpK8DzFvQGgBxADj2ZHrS3tZu2L4hiJU579brxaP",
  "key17": "4hR1wHdtC8CHVQkr4NS65HEymp4p6kAU7z5vNyZvWuJnQAkmrtNWVfX7Ls8p67DSGwSPFUcg9YYzKGj9GZWq9L9M",
  "key18": "5YBkindrdNWZ28Dh6ZiZVbER1akVXHKW1FbdGhxamAvqkP5ryvt8461Ke74DJ1Esee9HtbvFMaCA1jzMWVE6K2GH",
  "key19": "NqAaJyNkU4trtcaqqhzUeMr5PDNR2cHMZYZPQFx3t15pRNKU4GD5ry9EqBvbF1TWYGB2CofkL5YR5iCkgk8AGCm",
  "key20": "iccXzRyeWpwZyyZFcfvSnF4HMrbRaQHrXc4UwPwjajtv66MuHxRr4Ns7vuhLyMZ2kgtATZhzMzHFpqYjRhf45AF",
  "key21": "5rfLwBcqXEbg1xn9N6Nny4tbbvB93fo14MivFqgJPmutcrAW7W17iZHEHWNwYNsNEk7UJyFm6cbtA8CkJ9TfYnUU",
  "key22": "353kqaosjX1XDDx5PGvjJj4K3HMCTgnkj2cws2P7ToDy4vriWZA3ZeEQgkPYBtP4ygweVtCm7qs52CkoidDoZpWi",
  "key23": "2uELtmPDFRdR3R5j4S8XCrvY6rTzkNqWNPcZmygL9SrKhWyYqzPb9452dGnEg7nGTk7iqLx3HAVdocYvWkLCHpXT",
  "key24": "4uDm1fU3secToYJG7Z2DeB3FdHhdPUkMyKs6geSFSAToyQXD2Lqw8aw5DXAysSasr7RbsF5nYQFioBesGH7DYSr2",
  "key25": "v9Uth7YX7SKgZkjZSLhDcunYMnuveEjeXfoU19KYiA2BvUrg8ETGE7Mj3K7AnBSAeM4aAxvrasEz6QGmMzdHbsh",
  "key26": "2icZ9cX1L18cinzawJiho5ViS5TUGBeBQVLjWMBx4hHkixQFksUSQBBSvUjL3ioMmzZkCzZAQ3f3JjNej7MwH2Jj"
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
