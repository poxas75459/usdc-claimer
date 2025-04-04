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
    "4V8b2vLwvZ3sFvMm4ebwyxTHf5ygnsAUGomd6mjpd5DtPcAU3u8Q6VhkZ7aaC3BYH2G4mMWFSu8wGnGtoHoV2d6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8RXMXKLA9fSDjJ2fUZtiW3AEFFeRpVYdPfE6FuCSjfr1bt5aGZmTDY9bG67SzAgPSgdaen95BcPmdA5H6qZM7EG",
  "key1": "584BA4hjjS9pY91ryn7124HjVTU69vLWp4gbo7BqQHanjvbjzHRwVEnSg27vuZXDNmkbdSLQWhQN8xMkwpwhwPcU",
  "key2": "5DZqMtJohyH72VsK5upk9AgictaBkbfUbVg1mU7sDCaHnx4ocBNqHbvx8tYGLXZPG8un4C7vaSR3gRFf2iUCxnws",
  "key3": "DeNoQHYHoSe4pdghTqAH1bbRBtvLeBBv1mPCzsNWgci5XsE1dX3TjEJebQ5USi7KabBMgeQdPJ79LT5GdEyaiPH",
  "key4": "4DsqKUN27oaJRh6G1d1PLVmnzHkUkfnh9ozTgtvUXwGgZ1VZV8ZnystWM76jhkRMYTVgE7qbGJhkYbq9Q8NKQGM6",
  "key5": "3aQvSiR4bz38mKtpBvwCKzefjvdXB4idJGkAPtbsZFEi7tTzPkCNnDjyNnJss9JwjJw22gs9xqpCkuuZwNPbPZdC",
  "key6": "41WkBixjoYxb78FLt9MDmDpFVjQZFsnDfhtaYBpDGZc4Z5c8fqDJowW2A2SbvEM1ndgas5SFb21W36VKQj8dncfH",
  "key7": "4EEMkv1rez43zp2Zfw1tRzegZmjucT9BZvZtJACFWQbMPho3qmTemWMqpd2Fi73VrLMVi1ow8227eBErXBvsYVNQ",
  "key8": "4m5xi9F8vBMbPDDuudwCrHnfhLDLB9cT1QSVvZwiNz4AG4bYZcvadMAPt1a61ChPEVuvDZKvhhXP7Uqq3RmZntKX",
  "key9": "4CtU6Y9r3ggmXtoUM8so3yFcTJikbw6kWGKJ1xmT5c5ZJDDh6EJwHJdruwQQCgXQVm3HjtdbSUGgctncxcFFoTsu",
  "key10": "3FoghYFYaNuYFb8fNie7jgkjUyPYvAskz4vas6uE2B84ywTMEBb5iz7FJ6QAENCaq7WruMPSnFTzh6YYULKD4Rtj",
  "key11": "TBJ5s3P9DbCR4BPT996W6RJbscrq8fht5aLWEZJj4PNkjEs4i4GKvqnDqGk4oC9JrSGNbfPxYqezVnZVCvTUybi",
  "key12": "2iKDJcS4nGgjdyjNY7LVzjsLXKTqhS3YQwWpfeXx6zhh3gXwdEbk7yymHqJcs4b1mua81EfKXL4Ye2QQYfqhKy2b",
  "key13": "5mAoq7wx9Y6L2uwft29zkoMtkMSfVKdubkchy2nSG5J4oKunSGCZTEXEqVVhdGfwTLvmAEAEd1XZaucnpM8YkTeG",
  "key14": "257Ev6we1mhGY3mUuGro2MRktCfHFfEvD2inAHyHdnkEcJsnk3V4F1pvAjXkncPyQxXf8jD5dwvKejpYK19hvvvx",
  "key15": "5Bduq5r6QQMawF5Y8r9QWFp1fARGoum2Wgxqdo81YCxFBixiuX9zMeoBiKEhY3ag8Q5bjCQkYjZAQiuMCm1nxXCF",
  "key16": "3xVS6nvGgXxgDkxcHPH9ZkubsE4sNqLb4jLHsCwejqSkVyE17h7tdHcuE6vc2ddKJHeytUqzuxTskH44EwdagGq5",
  "key17": "4JM6gXNu836dsCD3Udh2xuaPr4BaFu3LsHtqS1YEfaRYx8X99MMrDr29g3Pt1ApjCdwACJhV5vc5x1JyxQ9nobb1",
  "key18": "5oEzm4j9ZrDRV1X77LL64fzeQb6QFZjpMF8FAkvYvQgfwmFMoQFgzDZ3bhE1hzqjk8vTeojRMCsUiTdouSMzyZPs",
  "key19": "3MU8sPrGo14FDsjviukJ2ka42btTHqfZghWZAD9RDAcYfDSdWf5tUCBu6JibuhPAqewECTQwCmHi9dBxz2MC31VB",
  "key20": "zRhLWf1XGJdRmQh9CqgPboQmNZ2UKwwJbGeFc1qBr99CK1m9nnqLdVW1XoCEWWmEgxjL6Yfz7W4SVEKJoV4FdKx",
  "key21": "5pzCzrJRweGdX3bevPcHuQeG5eCaEUadYBDeAZYUxyDzs6iqA9K1i7M1XS7EAhLgv36AxCTHERSg6vTBpBaDcQKG",
  "key22": "5g5aS3hdB2wubbJTLevzZeUBnQ1MY3cCQkH7QdfES1sqj1h1Purer9afQXLT1AJTHHsFHBgAUdaHD28EBdBR4au2",
  "key23": "5ER3iVMm1MGYwKevdUdWrYQzSPAfiUaS82A5DSKR7pspqDayUFaapx4j7LrBYJpoEkqyaajHqw17QnXKEWThT1Mc",
  "key24": "3bvJqEgavzP3YiUwmHeTnLsr6qjJsYtJPgVzjTHCF9Jdy3E9T8JHdXFWyLXn8daR64p6hGokWPxxFmo62rrQsgpf",
  "key25": "3jEEiS9dJih1EzQDJWc7neWYcT56ZyaXUHPz9WdYTrbksXMsvZF2QASY7znu1Uic5ZrWZicFrRQYKBqCSh3rnZwo",
  "key26": "5xPEdRctij4yNtbGz9xi7KX9vsWPL36XkTBJS1TrfnLAEcuK1Zv83NhcQsR7niDCDjZqewsomHXpPSMvyH7bcWVK",
  "key27": "67e9YXu1jaz9KztVFx1Jf4a9ysvnz8e8HvJCTsaNPkeVgrsLEmTReKk2sGwXro64NjNHcEkxWx8VT4yhW4P9266f"
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
