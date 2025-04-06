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
    "3Kcnzi3WAisaFHXDdGAjrfzQPNqB4quU8t7Swyjht97mBAvMF5gWxoE3YK3FCGSsqaPBAZ2eVJBwgB8GKMySz6QA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CgBgGBBAmKBjcAA5F9StwBQG8NiNbJQ5LwnSKZv1TejoN5UBZsAAAffFpMGZQ6siKX9HM1ieJPnAsCMN6T7seTu",
  "key1": "5DVohh86Siy2SqAnyy9MmGU3nCFG4U8XqZLe7W6P1HRMR1fjU8GukL1UcpG8drwyawZGxhhMeDBvMCrqVoHMGKko",
  "key2": "3iWvbenoxF2GWFG73PjrDowyx8G1q465fyVTWk3xF9R1mgwdvDnUSRj9YbYripsBo8xF5Vsu7PoomyeYcVHiyVvR",
  "key3": "46hgRy1drrEX2X1m2jPCHpME2Xj4BgyCihbewVdVq7r578YBWJ5wgqVsPhp67yVqSgLaKjES1FWZFEuSuXWAwbw7",
  "key4": "2AdHdGuS9WsgrfQkYxtrExtBr3L2yz1GbfjCGkvu1yRrTkdR2Gs2zoW25ve51gSnjtPJV5dyCydT7jAFhpLD65FH",
  "key5": "dZr9mztBFzRDr3efbJQyfg6xKFWKNnwZbC3BosZao6y4V2hKxxTuae3sTg61wz9YqktnFpVKCKYH9oLWVnqFLfg",
  "key6": "3qHmEpwwPdJpQs2n7RWCJNAuoFPK4awtCjcqmWkSyyB85D19Eu1wPawD8iM8mQYvRYaG97HBLZk253khkSu5VDZv",
  "key7": "5qbTG4w8SF9ZDg8vqTNXLDGy4Se6AK4FfhSY2mXyRJb8yusXqjpBUuCoaUtB8eFgbkaVG4177SAEWLcUk78bBBqz",
  "key8": "5UvgBAf2SAyrcrufWWCfYmprbaoiGjv1QZTkjLBBqAN2h59TrqL5f6bLQQYBSVYhW1AFQ7zKswRe2psGTieiv8i",
  "key9": "5M7F2igrVr1Boikz4d6wD4ANC1a7wGHjg2FMMx2VEY6nNwDNhCGCAPfSexmfY4qtXBbnm7uVhMsLWZ5jp7zA3nBV",
  "key10": "4ovTeW1DHRMQs6ahZuM1tkUpKgnuzUXuYndpin8XyjH1UVJoE4sXwi5yz8JBJEKnk7GT6YuZyShtHvnsdj6xnxLn",
  "key11": "GBVyhfjC5kbJAgswfJwuPZQvKZQ9QE2xqFdrfUcJNcDiGto3PFi65Pc7QLn7eYUQGwoEQBio6uRKxhLWvJnXwsX",
  "key12": "4UQrW35MutRAkMtwdDQKu1JumTsyv92yPsaY3myG5N3gE5pCUZjwch3w7jXeXFFhDDtq3rxxqV2DAxDBstaRVnQy",
  "key13": "2wPY5FodfAEcE18LdcAgt9F3HixcEbqeXMbkCZgC3rBfmihGoQxPr7aebuUK4CwdmH23q6ekaB8G1pZAUgdMeLiE",
  "key14": "EvkXfTGsXEoS93LqpJe729tumVxDUXZ2T8Cj4u3n6zMVA3i5GQahDUScfoWbaEuYUqNp688CtmyviCyYXAoW7jE",
  "key15": "3HFhWAcV186qRgFy4L4aUoLTiBt35T1u3UuiF7QGPLtYR4M1i53MTywxhAxeAbaeBhDAxCqdHqcySSMSCB63Z57a",
  "key16": "2SkcAPD7Wab7WuLyZfsaLVrMdA8qhBZkT4tg5wPuxbRcPHVJEDhfKLUy62UhhDyYZUHN1BhwrQjYNW7j4FVbZeZo",
  "key17": "5X9bKPzZ5Mr4cgNuVWZ1ob3GxmciHPUN6hQB1aMdyHuRxAmPdfPYGVSbQxPCwocyF9Tp7paWaw1H8EZuR2sunan4",
  "key18": "2w8WRzfba9jNjUQM4A9MF9EiAn9dqaWCFmSFb1qLBGQuGzUuAEiXDfi8Ui8kouicLL9hrRJLREYLJv9pAuvYqtG8",
  "key19": "3GpH9ZDvpmEiFmHsWyNd5yc8zaRXYVFGrHkkompB2NfyeX9CkmcdM5kConartQZV1kQrffzKYKvTyDyaj7psdgMc",
  "key20": "2HVye6Y6K6ngzfUyPoUzsdPjumWMsKbgLsfMM2HRBqS96cgUUytY8311aPgu9pzhXxKor1Fjcpb6erhmF5NititN",
  "key21": "2YMb4fzgGyrdGb7k7EcwrUnkMqj7HAbs52pRJZgeXiXZuLrX1ja5mdnuMbdrQkNJBmUBKsRFPAMewnixoCKZhamY",
  "key22": "2APAuQxc7xFLhPtofEwoeeHY9r6RVuZd2XmHxZ1yiRU6LuvcSugHAXExZNQm4avpsNNcZFYjxxpWBfFweiUSTQjP",
  "key23": "5TKyA1FKSbQbDT6JeEYrwfsbPGRtYFgDrvARgoFHUR4JDVT5iAk7W13uCFYGLA3emXY1gpbU8HeYUEgcT18zBvX9",
  "key24": "3pLaGB1JJoRSpTMtoAZqhYbroXTxD6Kv2JjV7PwQ6ZYSuVp5YWHgVHL7HEUr75wLXQCaA7Q9KDFqHgAEbq5DLPmN"
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
