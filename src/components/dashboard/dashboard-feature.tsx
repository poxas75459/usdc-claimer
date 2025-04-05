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
    "5HkU77aGq9YsMdXjvkXUQR5vos8DvwauooxW3W8KG5PsBZ8vf7tMxzQGW7ccfghrL5xxpCVUkrqa3BmVkjVQhdZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j4dWgk4frna9HYyfJBd7fhCU2PphwJNCiKwCEUab7xbbCRno5v6Tcop65g5TaX72b9ZARQp4ftqi6VWkoW7xeyy",
  "key1": "tJDCkKFcazbJZU9w8apw725h3spnugbUn6hVJLodGXgiRZxQ9t7YeafWBzEA3xu1A5oHxWLS4VrQNV4JSac3EKQ",
  "key2": "4LuAKXK2CFMavTwLaZ7CEMpJAaX8if1WTSERye9vWmHhdYQozCggWpG1YZUjLd4cpzZgVyCCFHvgMcBYahDFMxo3",
  "key3": "4DGZCiqDfnojprCKLxiyBtb21Banaocfn2Aj6qTKnf7BXvn9KJpQEGfPnT4frS1vAzDx2eAK5F9EjwSWdrtxg5jb",
  "key4": "4uwThdJJAJ66uGjh1xqz6amrEQv8SCTQUCsEDcXbawgNZP3ZxRqzBNtTaCiLabc5gQRhW2dMYU5sKmK2uTwJVkpB",
  "key5": "3vkVjFx3UgMGriv2ngTZRHKrwz49wcb4VBUw4W249gojy2FgBMo6wX97GEKF7npUULkEjrn47PQPf6nUiozFwFyX",
  "key6": "5PW793zZPV4Vwm5JtJskLQwAdFvdRuvyCUwpTREZEvVGSb5Vzq2mzk9xp89yfGz94AbMmXSJAWhzeJGRkNw8HQaX",
  "key7": "5Szqo4jS3jcGUgPSsmeeHhcU72xPoNJwDU22oE1uRPEoLLJ3KridpdZnJHrqfJ5dtWe43uwvWvozVDDsXuNZ2bgN",
  "key8": "4mR64dgAnFhnjzz3a623yVQ3Vi8jsR7if35BWC49wPERQhrPwwpibBATaE66Yn8WAXd6vceb6EdZd2m6WTxYssnu",
  "key9": "4Vf8TYBJSzv8sqNWSeLMxfkFkYa3Kj9ZErfD6h7nCK76d3R8KZhAXKQiPuLrXzkH16c7XQVj8WFRbY6Soc72vQBa",
  "key10": "5sDp5H6AMMWCgi8TmC3ddbjMzYsP83y1VY26bt1nx51zLwNwYCBFARd7XxWgPQxrD6CDQix7f6exuzU4BS9NpFMb",
  "key11": "2stboJstyHUYs9HkrpF1DmXfZZFkW2RXcvmfkhGwLNHh6jQf3XyWRYVuuqzefwY5rVpjwjwiHe7RhiufFwEmnS1M",
  "key12": "5UTZ2g3kXQUK3vF4zp9bwLY9yXkUSTNbDtVe9ccwRUVYB36rrARUUfzxYtsqK3cEQkAPqEjfGyg6nPex3u2pA6MQ",
  "key13": "5key6mbziZycwbA6HNcjLpXpPvDAqjSd1EQSWrr6Tam4y1eaFtykkT6YCvvSEUU4sjdjRQ8ZhXXqSKBffWqcMxYY",
  "key14": "64rTbk7ypbsUdA4THBrJnYbcCmBVYZcn7Q7oqco4VcYHmabBYrovyfAJBfDFvEDBHhopRDZ9MmX8TFSgRkVWUzLu",
  "key15": "zVAaWXJNe9LCmab4uMtuavBsM2QKSRoVCotHLeqHmxYkDAQpotjMYEuY6YA959fLGs8vUYNSPvVB3mLCnNi6V2o",
  "key16": "5vgiNB39vB76MZfgVVSxCSFo2aFF3s7zbxDC7EJkmM56DMrfYdGfohoDPdd4qzzX2moUKScijTL46T5qG8ZETYtn",
  "key17": "3JzUDc28sN8Wswum89g7oVji9JixLjA2iEJd4gfWZr9ugR4teRwyBerjhfDJcZM6KYVyQm2AwDSSHvo9VbLzBms6",
  "key18": "5cqDFfiWKK3KbZq9PX1fo712cZCBFRsPMh6pPPiRrEs9ftKGHCWxMkCSxU3wp37pFrnesb7Qr1Zws36xYf5BVyFn",
  "key19": "2r9SVcpg3RPith8E5Rs4ZhrwbxaN46jKfTG9hxfaBedLZY1APaNQXsy5KB62n4aNsx1ww7heqSp78TsnrBwhF6sv",
  "key20": "5ZVzrDFZoH3Jzowafc78UXoUMYKCWoedMuad2cCWd9Q2oWb9i8mdFSsYsi3NeYfzDWAb6ErqkKug2Nu1TsXaNF6g",
  "key21": "2dfoM5UTx7zAjbvkuexb2rw2PLbyBi5G78gncXBnkzXFDgzKrPaGM9XyuFmTkxoxXXAiaoqWZWacpyJwBqNQtPNc",
  "key22": "2kEgpG3GLWbZoJgnNSwpGz8dSeqUrS7TRKjbt84gQ2TvSUdesXAqqncZ71LNLLwArHfB4gtaujrpzqqe9huhJZvv",
  "key23": "3VvQZkH1bhe9fvaBpcwqjA8RvYiMNnn8mqLYTu3Tgm1qt43PaodpA5eNA3xunFGM6uJAPZn657ipmNkX7XpeDLsF",
  "key24": "3oPcSRcMFnCZYnoer7rQDoBSTjJ2xoegRioAEh8FjnS9cWswgkZwXvhWLbFWrpNwWCXJHDpTrvYgHpgPdZtWYrDA",
  "key25": "5gDZ3YSjfAoKn7hZBBZBfxcYXCgG6eSRL3Rm3RMerYScXrNr54a6phmkkYpQMQZvrPwL8co3AXeaGhi8mkZRSxz1",
  "key26": "RqiLx2EBs5jcLyLu5UgYQAxmk46LSkF5eN4FrYt79b8CdwgVX3kimm1xBXd1gsHNa2o7YRX1LEoUPK16tCtwP4h",
  "key27": "JoEX1vbN6idUo5DVMiqmTHoXWHVNQvkC4oMCwWtVqiUjaArpYctmKRN5QX9JdwBK4zoN9FrLZDEGoDu7PYTCojs",
  "key28": "2kgsnRTcTQGUpJUcqLKuooCrK8n7xLAi1QDNazoyPW13fnaFZfWxrmfTzzosNhhpKLNc6ZS1onVx11mAoxMyUoG3",
  "key29": "3N8f8YCNnALUDeMBv1qrw3oYYUHXU3YAsTmnWAnhK8V2kYKkSmA3527ebZ17hcTdcN1kbEbVhHqQCHBntrJNfAd1",
  "key30": "23MKEx8xNoM46i99eSsFt2je3KaVL76ygBosFPTVBKVNSnu5pqMm8J8P53LqfDkyRVQcnLrorRtsUxaPKH1jY7u4",
  "key31": "4pfJ1Qp7tR2qhsJujymeTpNNFHis7dASURRMQZGT82vigjT44kMvDQw3Dc66Xz9gqGMW4d6fabAPmrso1Q6eHtaE",
  "key32": "3zjfJhydPY3K7EmLsKy4ZxbcgqpdsBvF3tBcvZtsLDtFKWdiZYtTq4VFhDDa6xWu3yJ69WMymkitrThGC3wmMg72",
  "key33": "5EL4WpU5G6gniUP2h8783HavaE4syMCFmkGh6iWV7FNFruJ7TKoCxK9WNxfeehyQkH8RuTiSD4pvdRjTPPuD66HT",
  "key34": "FBd5vr6gM9RdcTNSaXVRivwvkhHmphpeSDY2NZtyZYbEmUKed1cGahVwLsGxwsiHdCUHp3szb7Uggo1jK4g3Y59",
  "key35": "swUGsZY56MmEupfYBpaXy47XpaZ2Fv6YdaHYPnXTd2aJrRmKxT69xAmJssvaUqbXRmLwJepRhVQeSTQEQHTF4z1"
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
