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
    "4USeGSixEZhFQVCwfmgh5SThKAc5wZkfj52Fi7h7ntSckMbQcjAeeTfMLwCMnHVnAQYgWVWoBdzLz4vtggZk9M94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yEQ9VjFeYz13Fqib56DM3qYHM9GhdcrWUCrsM8cCstJK4z3K7CEWT6C59bjJ6wDHPnYXL1mhKnq4Z2SviG9dqRC",
  "key1": "5aUuCCxd1gzaX8QGkYy98T5WG1TJXhjfJmFiUib3GBr5F8Z1f4Y8dP12UPYMJLyX1uyiRq3ed9sQQig9PsnN6yra",
  "key2": "44amnrEJLjv9meJgPgJo4Tj3ErEFtmvQhmvZAAHdALrzt4nrS7GPRPVgQf8qFvDgDaG9imkcovrN2zyZCueH2AkD",
  "key3": "3B3tY3cz7DpkFV4BvbD6Nube15gwaFjnMNSPaQrBR1ABaGSdWmTMLE7r8NniTWUzEyxLMeGKPZ9db7wr2PMjpPkj",
  "key4": "ZJ9PidmwAXnCHmBhKUapXKvwvFCoVipT4PY3G4iAN8uuDeMAFRqGE1zPwVYjS2U4vQuo3LgCVX5j12BQhRmgQSH",
  "key5": "UUM9bfYoWuD6ETAqTvPZYgW8L5YUUeteTLS5nZRFey2EeTUnE9LKMZ9BjdM9JpZxXqsj4WG893uLsTjpk5176HR",
  "key6": "33tmvWwbtpfXBbsZRrAzpr3gynP78Tkph8NzWmXunsBxVUFVnmEqDyUSCq8USMdMsMZvinmcCKDXmRSENbuNnuFe",
  "key7": "3otW773xDd6XG8WDKsswR3m2SuDNEZEmB1Dzg8wSJnbtStpZext5JYa597SHui9wGccibsY9tyM24dyjWE2yGC5x",
  "key8": "5mymZAfJ47a83TW2mJYWYqGbNtXSYiMZQjPfRXnq3Rgjduhb7cSiwWUZh2kShdCeMvnzmKaDqiSQtiDaQB5n1rCY",
  "key9": "4Z97NvyiAWUyVvUxgUCxMHL6oDGf5kq6H5JjafdSsyrUx8BtmsD23TKJyKUDBwLLcCw7vPP9WFYi45sH3UPrTJSc",
  "key10": "2BZzgbsZm7gLXQSpxyGZi1x3DnSrYgJwDB9D3YvNKiHj6bA9kgwZNDU2kR7mXTWL3ie8C36uAUWFKBazU7zu1YrA",
  "key11": "4CwnfHyj6cecHLjvTCrJpmXkvCtUDeqD84btdrmFLEwJL3g23wcnpCpRUgv1WrRS7qG7AVq3DahmrTnkyCfgwD3C",
  "key12": "36oWRfWh9FCswUbCwp9Gh9BSYci6g5GrZHiDbq5CBwd5JMRFSCcmLniuQu8rmtnGQwxS452QgnFKPXr7QkVnqNVt",
  "key13": "4nKPyjpq8eLPiAwwp8LVN6ofnJ2HuBGupiWWiSMvrLaeM2inVgwV4sHFpXEv5WgaiTyhkHP5EDvEiEWL6vmF84Hf",
  "key14": "55Up7UXaTTY2dd5M3o28HCWYGyKBwQso6nWhCcb7nUWvzzNstqtUYAMWAF3xqXFxYRoQAHxLv23Ls2hwmrmZK7as",
  "key15": "2n6YPFNfruRv3p42m6vhYgcZRZwW9zge5EMQdTBJVeEtBbi5SHjwo5fDQDNwNSj1An2kfctGE6yhqg5265ycr6VX",
  "key16": "2Yy6ognL7zdWt3WNeGtxWeJxNDsSp4RAvfNR3sD8DATXQ1AYqUSMTcnjRiAzo1CttANP2BeqfX1Qf71XEqiHiBAu",
  "key17": "2dJJvtJru8aYwZNCXkjozG7PFb5bKnyfNR6oHM3bL5DVvvwWvHkav88NhmKW9FDX1ABGrdiCFXdaBNMBTo8BkrdG",
  "key18": "4EkdnBGbW8kGbatKHHHB2CrXvayMyYa2x9NDCbMLUQCp61CQzGohJrSnbKPd4UiLhMHaMpud6izmDZBBr2tGkkoE",
  "key19": "4GLCSjtfAvw3LCNx1Sf3ybbvXMP5a7vjWFAadunDJhgWXNbV8597rVYkVHkeKWdhVtzwDWM5fw22QUF931e2BpGr",
  "key20": "2nBBuoweZW9SGaNQRMRMqw41rJwD3D8PVp3tWoZF7NfdR9tnT1WS38XcLyushU7T5ygKctrNYGckxYj66cGcS34g",
  "key21": "4qHcGHhVLLShcAuz91MNMb9x7yThZe8zJpn1cv6tv8uhNd9HuxEb2zHuySvYx7BVx9kCFDuYRYzvd5saHenTTAkJ",
  "key22": "PhRSgjvRmnnibUurXTEiYsypb5jHVZ1WwWyC9qduH8HWQQFpq1EgHRsLrrRTNaC7zZjviYEkErGHE4kkWxz6rPF",
  "key23": "26YL57zGbUQjLLTBz3249XMCCohk1WPbTRNmPFAS8HVo8uCS1R9QGPqEYdr4zwurRWpxpF1dRcQMxh1wGzTe5R2k",
  "key24": "3Gp21HzfpAq7U3owrVstHr7sy1NvTeTNW2GjVdKjaoD7d9RpERVFCcD62oSrwr4Paabt72Q5BoDdTJdj1N1E1TFd",
  "key25": "2yowhtehLHPjpg8zA7pxi4xtNgysxwp48534S6KtgX6vH785zeaGVkwwqVnwLPSHCwDQbQBHk6ckFVvXUXvDErCE",
  "key26": "5ciJff73BLxRuPfPe9w7gUz1CGKvfpzirpouxb7WbM3i5AucpfAv7e17R79Db8wUwoP4F3d5rutMwehHzbCEGVXY",
  "key27": "jWD12qPiWve4G6PGxUrgVrpDmUKD48FJZ3e4uMb6seMgiGkfNj41i6d6tZcnK8ET6bcHELoHsoXUaq5N1ceoDsm",
  "key28": "4xV3DanTfEGxYL2AHruZPzAyvAj1Z4UHCLtxwXqQKnrfh7mzjBaAoQpVLYscGbYwQ6X5gq5HxW27AAZHQ8GQpw91",
  "key29": "58TfDB1rM9CxZfGYkeJUpnYzQCmGQoCTf4u9RYdrUZv6eAtz4m2JR7PAnRQ4RCU5CoWER7q45FJkrbKdtkidPuJP",
  "key30": "3XoXKVAXHz2HfJnrZUGM6Eco4mqg4yMazEg9BfQJGeR8GQ8zi6G79Zhn7iyyES7HSeDHUJkH8QXTx7c43wpHmsnj",
  "key31": "azHsU5eeHx3KVn9oJEDke1Fc5EuBE739rtxxaHeNvFEpZq39fcqod7Bm1nwGikCuTWL1cz4183TezzyTNB6hyDV",
  "key32": "Bog1XUhj7PmWDZwt665JpSj28pqvs6bss3QCgDk8UBkDAhKKq2PUYa2db5jgLeANn98rRwgTxHdfDPo7GHJiwD7",
  "key33": "3AwpKySx8dksZ5P6nCzhc2PD3JEmaNmGjaffzHRU2mmDz1vsdYZppp4Cy9f6SRzvhKmjUxqJfZhjBQtivibDWWZv",
  "key34": "dS4c9AuhtQdYooUjGTkLGdRXoG21VLnpEt51c6mrHXcNGmHjvJd42bqcW9aJuV5UAdeYMN4nJRnNo3eYQwZH3aE",
  "key35": "4tRcEnuZFx3QWeCwhWAH55BoMudDNmuiJxCrBD8cFRAtxxMe6iDwkHmiFcZpUoTc61UMacvptFdhP1Liz1Kd2w8D",
  "key36": "3AgxFYzusNYnmfx4fduxSCZ4A1qfQuMGhmYHNRQcX2cSAtdDcX5gB7GkazjgNh6H8zBhtPzU3U7msxfUw8y2rYFJ"
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
