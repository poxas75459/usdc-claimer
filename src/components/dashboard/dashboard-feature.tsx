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
    "53BmG1AUQsD8G7PQdWTuEhtcjEz7dGV65HF79pDgnYuUGjpxgK4EAoexdjccpoSm9Gdi5Z4cnqipYqBLf2jNqg1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zsr4J2HZA7KseZYZtE23s1EZj5uyUs9SiAhLgcUpwL1SFS712Ujho8N32qyucf8k9Z9ded2PBaQmf7Ge9DQd6Hs",
  "key1": "2iM2ZDMPVfoNu3xfwHecG3CytXuDhD8JvpayJnU5zBykCwzGUw4KPyXFFGcWhn5iJjcnGMhf5aKciRTuva5ZEr21",
  "key2": "5Rjdi5wUTTRo8pi8iJpnaKQU3cb5UQCPtUtfLXBtjNKMo8jArkb3q15t3sQXyKSZAFySU7gHjy1xMSejvQbzgJKM",
  "key3": "3Xc9eu6RXTtZKMAqeeqZ6zNTokoovxn4YN5U5v5mChuHfR4VefYkcL8h1L3ogGVDzQo6VzZTjc4AkJyxzag7eKPx",
  "key4": "iEshk3x8fyMz2kYoLnR58Yuy9fNDXSS6Uu1e5XKhGYFZk8atrXA4yz3BhcuKpWKn7gKip2fpW6bsYepTj3p7K1a",
  "key5": "4u1ZCdjBx5bTfT4WeqM3jyV3MMJL3oPdcTnMR1nrmf8gTcKd72ZJ6PkpPZGXjn6CgQaD8B5NxPGTK3dVJnW6cfP4",
  "key6": "2zs5qVLW1MbddnCSF827C5EjPCzHEQPefwXumLYsAZEZkSMt4pnRKTnRRuQjT5rYaAo9Tqz4Gwv6Gp3WTiSGup48",
  "key7": "i87tut83b9KkxnMfqdafeVtL1UcDvHxwpMe7SKbWx9poaEnXQeLWXMisqRcbkkPxTkjKkokmfPz5gyZy8Js8msr",
  "key8": "39owzZxCFVS9zNfozoG87urC5RWaoU4eipW9bthPARcGu276ZAqxBJTmKMAhrK4VmPcyEsexYLfUHZ3tHdmTCtBC",
  "key9": "5mB7q7Mu8ySpsnekQ8Uxe9hqmrCpCBerfEP35Rp9CP77ELwCigihKPvBqMRaJDsxMi5EvgG1XxBZS4dytDfkxizy",
  "key10": "5CktDozgSZwmNP9BX2ingH2ujPN6h3j37nZ5aLanSwp3US9yuBoSyqPc2YZ8SVMUmjJwSBWEciFesidYjNYNrAqk",
  "key11": "2P2MMbC7TzpGfGzygDy9HKxh23ajeDn8jgKtuaQnGAosondMMesTkyHmLGeU1eihwTWMFGtGsNxBNsGNZPrCk6rb",
  "key12": "wp5j9gQiFckmJqYerYaziLWA5XoKkdb4bNphqtMjFFVTkGs55yEbAWDgLzVKqquvASwA9DYuLfUctKF1U8rNgAZ",
  "key13": "3JEh7HVyLNbENbAuvs1MpbW2BYvF13QEtyDBjAF7ne4pfX1RG8WAAYZ8LxyNCVGuYUtT14r6TaSe4J4uyc3P8Nh",
  "key14": "27xXEEZv2Mm7v4P1fGKHKNVNvHs4MwuZzYdwQgmSqwPwJNEDV2tyGqk9WbED9XcJ5hLn8GQsj7TmTdueoCef5snH",
  "key15": "2Q6ugorx1ssxUd77WfVyEb7poSFK1ZF6BAcVRFvR6UGR6Yqzvn6F7JP7gQwY4QfTMErcyDS8FBi3eghkGt7n9KeM",
  "key16": "3ihgoehnn7oMD1pj2iQno7N6Q7JKptE4R6zTJDJvp63gtSvv5kDxTzWTJ1by1kD9M2mn32KGuXPCmNFp99qghcXd",
  "key17": "623Y68EfpDtseKN4u3HSH5bb4ZqC2iqarJt1GuqHCQzLMThxCXwoCiby38WWcAcu9CibyeiPDnuRwVJsukXs8aMN",
  "key18": "BiTYPMdkd9poLKKPLXAtLo8tuzzQTdoUdRoakmQLg8aAjoBDyx9yLv8umenKro37dD5oF1qD6xXgb4YJho1xDWn",
  "key19": "3DsLwjhrvhmR82s32pdCyKcLSpjjjr5cK3g4vh95uvCejPXXRNTqNjYX6epbH24NaixqHgAucdjYc6rcu5rb2e42",
  "key20": "3xzVLWrEt5CFvkt2FJDa7tLSFUgf4nctcHcsVTTvaDshYJJiKU9dae1o6EAP2nFuKnqYzPVbiEHDMcWzCekws6f3",
  "key21": "2L5NhA6mzFjUfNcmpgW4f9q45jQcj2oBtXugnt82kQk72AETpXFH6Ydu6aPcWiQF4cs3d644H28ZWbjKvgfzrPSz",
  "key22": "2m2VqwSzsdTCAwf2cnSWNBbpzm3QTiRgGeusYsR4NNF9d1u4wFe6cSkGUXFQhvoybDw5P7t5XBK333bqG46n6Bw6",
  "key23": "4MUHZT7yBpZ4eeNVFPWxJD17ABKDXrXbynW94gUvsrvbKQdA7sYZzFcXCDU1qBPJQiiWK9jS3doQdgnHzv1S5PVp",
  "key24": "5R4b325SmF3TbsSQx1a4y5uYaVi1dww6iWUuuj8xuu8fEymEdNWxHkBXFKn4X6vmKmZyASZgRoWbTm1AHedf5QXH",
  "key25": "5P4hNypZj6L31PBDE32TSdqx72JczXVqugy57CXhp89Mb3Cn1uSTSP1PMXFSqCH2LoytVmC1y3CN9U8SUGnkpLKY",
  "key26": "MXSjytVg4P1v6vH8aMrN4Fh78914sWYq4FSHoeguw6ajzh9jr4siTWEfC7F5iQ5cT4CwNEvCX3eGJ4Y5PiRanve",
  "key27": "4Fqrg6zf55Jnrjvro5YUyU36JVQsj8JubZi2ocZAoFKHwkkhjq8o5JUjb3M5xvd2FMujzDSZFaHHmiTuV3ZJMun6",
  "key28": "tGGkbwzWEzjYppyvWeHvy7MeirCvAhu4x9hRp8ET71nrWsTuMgczUvc9S41kTMxvM1Ep33viTfdr3GfMALhYWve",
  "key29": "3cB9ZdyFNSWgA872r2iTvd4H5QKHUis1SqiFKTMq7YvYSEnxcuWCchZWSQ7dXPkAtrjLXXzVcX4eUP81qNhFoc7n",
  "key30": "gE8yzXwquYPXEVkRqoM37So8dSG3h4idfDnh1qAH8EeXVLH28fL5YQnBkR7SM9i78J5UecRBRRLJz2M96mJgUfQ",
  "key31": "4a1yAC8VMR6o4BdpDDTQmQfRqfdpynNhFJxBXC6CvTbUPxQM6nDdE9tgptuZuHCyLsPzhQHXjo32eK43ht1idmsy",
  "key32": "4PA1anT5jcFJqKKLo82pRgx8oEFtfg4pP8khceGgeGcPscnkYQtpMBGcbMsHxaKWBCVC2YhpYMpTjeevhFhMVR9d",
  "key33": "2Q4y8Nem7yon9KUss8veXy8rg5iEhN27FdkfZ9vgGgtfQAG1BPJqSvLdBEvQiJypfEN9z7jBCWFELsKM4zDKjtHp",
  "key34": "32doUtapPfSC8iDkAggbYimevQGxvyBEkb49vyDTwVU6nWpq6v6X5RewtmwnUShytPWo5ao6XD3Ns2megF8Xkh9Y",
  "key35": "4gkzmzRp1EFbBvtwZ34N8AUeCLVxx9wXu6YTz8jEQfWx5Me847S4RLqTtDjcZHjxrw7UiuD4BKogrotFwsHBHSkX",
  "key36": "cgpBc9VPoHZje3hb3Re8xnTrPaxnCvoLSS8y1QgDe7L5STjWZgrMZEKfqiCmJVPXyEyLrkibUyiUSY1Vrb7r3tJ",
  "key37": "36jMJNu6ircwwQqnYgx85pd8x3ZPMRihWQycjgTrLwtcwVtr2P8HEdiV3t8mmn7BJN4FWb3fiRF1NRd2Rb4E3aYF",
  "key38": "3a8EqLh7S8sHxKuGxDCm1dWny37u1rU3GHhVLTJtdrPveY584hAdQATUyAjZhGmNt2zT2xXfmAFqeBuXc54rziFD"
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
