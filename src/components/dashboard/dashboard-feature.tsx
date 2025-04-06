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
    "4hg21zMcxLqkvKsqy8huwxzQ9HPiCnWWnfE479uxiZEHnSTatEu6Ya5ADiZcnzGEUDYxT3p4VERa1HfcFN94qURt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sAfsURuy9qhY1dCiJLNDkaHiZff6QJoRAW4rC5VEnBJv4sS1npYFMrNv9kgXCyWt5DwNcfXaphaUHVhMLUh7sgK",
  "key1": "5oYq3pUy6r7y8v7tSzbK8uYLfcuKZYRuV1nGyWxdmcWVce4gBZogX5vorvB5Mwk3QbuYCsNg3iW5ruwuZf7w693H",
  "key2": "aL5S4K7rHcpkZqMdYAUzxjUEZxEnRmZKEPZjq4ooHa7scEQHpmqCzH9sm4FGXJphj7iB1YHeTNTjvHQp6y2aV1v",
  "key3": "5VJrBFJVt5ASNtm5XmkeGwQ9hrX1JMpW3S69hmSquqnUTN199Ge4Ea5Uzu3S6DuM79FrdQn9gUhwbRYJfrzqD3Dk",
  "key4": "2Xusx44oYoopQfYs4rQmg7NHoyJJpn5mQzHDdhp4e6qzp2JVtCdDsFTusU8dY7ottQPvLfhMNAnLuDB3WTc2eF1s",
  "key5": "5LwWoDSvc7zHtLkWD9NHCZbC6yR844XqXSGcogdeWUUwudkb1xcxuapEdmoB7nYNiQEKAHx5TxKDzf29oyn8RNN2",
  "key6": "5b89a9t9Ptpwz4veQtMeExgAAC5YmskjXTXUp8k9XtSHegEhAagnQtqC42TDZEDh32b1KCLhiYguFyRBAopP5WyC",
  "key7": "4TeppySTB1tKaTa5qG6GRhqG7PenBF6hemKUayH5tPpBD9NyQ8czBPQipBn5brn4EeJwvjHc1FYvbbNUpjM9Nyoh",
  "key8": "53zNdpbvAJBVZtAf3rCPFR7gaLCuMDbB32NEueVaJdGQ1w7QsYTtV1CSqoXuCcCBW8Kqehf5RP4TaZhPGYoVXbu6",
  "key9": "4WAvwjjEDLdA78qmnLFbB6Lx3MHCBbSc4sATySADvhoKbnatFJN54Zv6HUypqYjM6cdQe8EHKDEcMZDLbK5Qc1tj",
  "key10": "3EQdKXvAuXKcBr8AXKReTk7jCRGDqXF1CT5wGfogMne5nDEwtPak1Ft5dijX7NWhRLN5Xtz5fbNb4SeGHtQgPvPA",
  "key11": "T2jUZGtxHxZhyEUqL8nEnyUPdATvk7SgYpWTTb4JRJdwRtWJdtyFxNUAxgxrxMrmi1dGWoH3NBhREpvVwdL7ZcK",
  "key12": "3DGMkNtFajV36qdN1g4Wn39wPP1DWQArxPpNyKfN4KfT4yE45K2rHk2MJQA5JsyZEPiqiKG2oy2xmvW2Y4wmpXqW",
  "key13": "7zNmiB8NBZZfqxfGBdmow5BaqGKWdcPA8kCCSfpaKEpdCCRmmQNuY8kw9F4jdmwR3cSUs5hRAw2D6hB2pwUsBsB",
  "key14": "3mv3F7T6AhN347ckwNPWCps1rT88QS8bjLnb4dovxsSuj7qngaGPi2yasbqYrEBq7Tg6hM7szucaXoUsq5FM7bX4",
  "key15": "reTWtm9ZvpfKsXbqSpfkesKvVXPpWz2PcrQQutCAURVZnzXpQcdUkm7ehXWPquKe5DVNsYgHcMsJzqXhD4Dmmo1",
  "key16": "VyYzNTfrY9X5AmAVFwAiZRQqbhTdQ5ETPmMhSxmZgnx72Bb7tmoPvKc8Qnviw5tS7KB8WXvbwrmJEABLgVi4Ati",
  "key17": "cai8D3BdheeGQPVTbu232E67bj7pZ6BN3GcQrEsBCyfN9joucCBhhCN8J4N8ZsGgpocMYBGxpnB9EhbT5GDsMVQ",
  "key18": "5j2AFK1mpY2EgG1jPga3CawJGyg5v8GAAKJZjoiratHnUeAbNAsdrRrV4Q2zzcrCkhVCsj3RCanMHGnYhqbFn9QB",
  "key19": "2aPBV3X57qqjzmL8Mff3wqQMp5zFskPLSPL3zdysZ3iE9UnMaWNxRvE3VaPC9vePHH7xttRmCzhbkMsffdEZBA3N",
  "key20": "27nbMQfZC7kiq4L1TMMEQRGRiMmSZX79Xs4V8jKTEVxJ2VAj21yxp55nP4SCN6MsozC8zm3HGYrXYXQrFz2s8brf",
  "key21": "4yJ7hSbgnVeAQFH92EHPk1qVE2hJJNSBfrFYL15xJw5ju1EiFzPQsUrXhRoPUMU35cDUqgzEA19zRQXR2nafzH2h",
  "key22": "AanF8NkxrbmwcsmYqfSFpwLTmcd8YccK2tVvvYsEfkxxTW9wUc5VARccUqqJssahjbEeWB5rPejJYwm9Tp8JdEa",
  "key23": "4RcKq2aVKSn2Wv6sWb9g4WDQDQkr66CT5BWM91uHV6hKTyLpsWkBxUotWc8wAoSB1kn8UBYNEfGA7PZ65rYnbUfT",
  "key24": "2zKSRUYP1PLU3tkfQbrrDwcLVSEp8JUMPe8LmDowq922AMV5N3gjVTuSxwc9mgK5ESYrimRHEY7Nfe6BHtguVHnu",
  "key25": "navJNn8A3BmhcdC3vhKiuXVwfdwJdEFhnVyFPG589ENjYSgfFVmD5Cbc55UJpRDNRhqP6EBCiEe17rxBNDkysNZ",
  "key26": "5BTDtVDDE42LopxRHt9P773csAGG9vDr83nUrmgJQUCqWNwauCLv9eNyFtcD4NeDHcBixSgFipLzAkvLmLByx4Ev",
  "key27": "vwL765SzaDerfhxwZnhc1C5E1N9B9behXnGABvnqiTVCXT7cFdBzNA2AXjXAiFqPAo5g3H5QcGbC9yL2H5RhiXv",
  "key28": "2VDt5uUvLWs2oysWmXdzAbBi8dceVpHdXyMY8dWHLTRwCTtH3ZRwrLd5yT8NEoQ3NmB24qwFMaPwK2ivKKrauXL4",
  "key29": "4rNsksqo3iTnyNpDjFPUM4ocge7FojqGmy6n5omLsWHVwqSLVUP6Bkrtq2YbUwn6J4NESYcq6ZC7a8AmAzXx43n5",
  "key30": "5wzp5S3o6bYFhcA8UaJimLT5UJZyq1wLxEEfBj5PKj41sMGiCCCXRu4XeuNpre4QxwnFo9X6UNW3EiQtDxoPS8D",
  "key31": "3YAh2F4MjvWRLV87tYHdrGk6S4CZtKCdoYVyeEggpCybRcsvYbgE3aYdZiZcDNG3rFTtyi4omTNmNigSnQYP7UJS",
  "key32": "2FLnfTCUctR16w72Qyf2YqTTYkf5GoEyUerjwKYGvpf4YPHexHrKdS2Amn4r1dPPu6T1NiYPNseZNDTew1QNcJEj",
  "key33": "4scu5drdDr4SPPiUSMaWfDF5oxBryxbDybbehK7Sa2vhoRfr6NT4cWzWUWudSZQWJKrDm9iRGzHsnWC7ue4NZ2QZ"
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
