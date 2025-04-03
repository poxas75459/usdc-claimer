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
    "4qXZZcq6ioW8qSPvsLAHi1UbusEBEDXvYNk3WQXqtpbHwaCEF7VM5i5KVDDbpZmD8Yoipy5xL5PwdWVA6pTffjSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QhKS3WvbYj3KB1PKPo63nwfabfvAWowkF8g8KwbL3Nz33EUmhjaronPuX1VFXU2Sx8mGvRCocNoin5YKComXw1d",
  "key1": "CtrWbcUbyM863AFZjTJvjzf64v8KqZmSidRjhbkA5PQbXPLYJGQ8EyvLVwjUrrgS3Fy3fbxMEqdkU1rd9tg9Eru",
  "key2": "2z2kzXvkqzr1JdDoraAwvDNhBL3s1o5BcsR4eqPt2QgVTdd6hpWXYYtfN97RRNPKU3EMXrmQeCbHJp81AKQNR1hb",
  "key3": "4aoDHQ4grENeVy3GXRXqHkud2hpAvYcmNnBZy4nQsLXFXUdXdxscLgMEh615SaqMqjpqZtFtdgNctBNp8vEwDMhM",
  "key4": "44bWRCuX7WxHPRBUBgMZKyNFWKSo6STbDUtoL56WqxqL8UeDn2QePuRWeYcrVwFn8rjd6vMgT5RXF3VFRFN8btnU",
  "key5": "3g9mS9T164arBRwJ19rQhfLtqa8ijFZf29iJvb173LJG28CCc2Ca3P7y5rZea8tPhaJ48dqA6UACbc8qHT3CoRT8",
  "key6": "58PaudD71VWQxTzcawRxcicoEB4q7D6VNEDL8prFYkfq4J6aYvZfaqHMK8BSvKHxCSyD2aqSx3fFFFHNdMfnZ6YS",
  "key7": "4MxiN2imZ6bTmAALD5YwN8xWdRcFEPLQcuzxSMncQ81H8zuafkaqzN37LEvEJ2L7MJm9yg9BfbUEbrA7BbTTg5zN",
  "key8": "54qANqn7QuGsedhnmj5cGho1Ry1VTa12Jop3eN7VhzaUrnmvJ1NbZVuvXL4dsYVrLwWcTG85UNQMKdw8BHguyLHi",
  "key9": "47yW1EWd6Hw4Uo6TWzErz3wp3TS2CJuPXkSafFijCLwURimutB6GA1MGtXmqoukxUbzSqtsNH5Dz3V9BGSRcinDs",
  "key10": "4s8K4oQF2ZmxCqc63m2UTb8nJ2Lmp9MxrZGsv7fTdJ15DUh2nXk45kS4qABv1U6JSHBfmjrPqvQ2cvz7cSpXEJ1z",
  "key11": "5EvjPFoYYrFeQMmBtuVZbdqjFvnxPpjPdtr7q4peoGvfSRR8omCPNhb8pQrwDrwbpSuZcy72b73kTjirPZ8q94yn",
  "key12": "4XzDyiRLx2J8MKBkV5ByMpE8Pj4WED6Fnk55qiWYcSi2Hvormtz1ssbdjQcYYzuLh3cHw2hRk7G6TWSqqtVcTQGF",
  "key13": "4sHkXzh3iSpQpfYS2FQ94kL6Fy84qPWwpUJ44itgsjdVgPHAqjmYfSHpz3PaCanQwrHT1Xxa2cFamy3QEhoHy9DT",
  "key14": "4581XrC4TneMpvZpbVJ2R5dBqzdx3f86WQJouyeCroXMveuCDYMGuvKjs6ucqBFrWHV7hUGFfHHDUu85AaeCQY46",
  "key15": "4ECsNLXzoSUjJ6rhLx7D4Y1NJxE7bp2XmrAKdQbJ2fzuuobAgDS4qQapeKY3Hm5DpVZ7gn3CLWn6Bkng2RHb2ULZ",
  "key16": "3eYqdU3mK8Z2UvLavAayhtfbdnoHjzqhnWwH4hKnPLu6MU7gEHcKfHpCqAoH61wyvKVxE1u19LcYZgoJwaeXj4eU",
  "key17": "3qozfBc8gw64vPRcAZZ6bMiJbcLdy4pq99xZjoe7b6RdTeCp5jZmU3hCwaJMccyDVbCdJPvHRDycqVZPox34YdiQ",
  "key18": "4UgHAi3btHbax7pT9EB3iFENT5deSFcShkm1TcHdyLt4q8FLcSVn2xH9KSVHbDD9bc8g9Y9PXCf1G72rAjRidCu",
  "key19": "3DeLwyxMnA3UM9364JfQ1KWE64JGsWtw7notmtXf4ZyYLnEvLmWrLQjb87DxyjAxfmMQEuWHaWnCSswBcwMBB6c4",
  "key20": "3wGAJosZbDfMx2kgtBmbyQeAs5wrNCYSgKhzfmWkTy9HR7fjy4H3pJk6QzZt1JjN5KWpSB4Z5cRmgbyB8tXFTF7f",
  "key21": "4sX6koEztM4WWgisyM7wXQUvqdtSxx8AwpLgGLuK5GSiCxKQfNRca7sfDgwaYLdxvATbBaXLRuMTxgYsq88YG3sj",
  "key22": "32xt4MCWtKFp3BWU7THXnXKUQpJZ39nUAeuAndUPFfDGriaZ6VfCuh923a1S3MMVwpihmfupxP4McybU5haZXZst",
  "key23": "2K32H2JX48Z45AQHxNRDK5US6Juh6UkuENReC69jFb5LtDPCTeyDaQY8zu8SGpBD81xf5vFBf4yW9ABbvRhXSVb8",
  "key24": "4Du7eP7PbAwuCKNqEZDtyUAcqTREC51m46JkqEGib29YT3fBoKwmPHDquMGCRYmxawAtJkK1okGTgufCB4F88wJn",
  "key25": "25hXmoyR4JnGVvuxfRRqoSWwg2QG2waW6oiLhAYxfB5ibi6JxPi3iYWot4731d65nCyp95mBCvUHDDewTzgsJ9sW",
  "key26": "5wyXpommh2YrML8pqnBv8hdG3MvPAvWnKT7r2ABS5ckB7fkPZ1kx6jRV4iQ21Eom9Y2kJcP2VCHRjrNcmco6HfFu",
  "key27": "4doaD3mFhfTwGcFUnC2VXY9mYD3WDoCn5XD7txDWVXNgWXvQ3D7rtzJAZhM5nYZPZCV2pyHRojH3FC9cVihY9JMX",
  "key28": "2qiKKoQYETL4a1QuJwfKgSkXfDYJ9Gg1NtQAeHkTqqVqQmzWuSj2e8qFD1ZUrwVfZBWvaKbd1zhtfwvQqdvAhN6C",
  "key29": "3qFKuZa13U7aggUGvmRR88k4pEy34VyiYpiCyCJQoGHtKNdx3uxUZ67HfqrSVDo89AhTZbB9v3zfWsuypG7gwwye",
  "key30": "58cJzEF7yoJhBtrwHwMYnaDKZ4N1SBuSZczSEuhGnBEmTYtqYzR4wm3zRAhrqSgLEJdS9oidhgz93KccvRh54FZn",
  "key31": "HJxgCipevP4e36rwfLnGu2uZULfTu6i5YRHDZLDhwo4temmkHw4bDhY56L7BYxWpJ2je7aEBcgUn8PZuvUMcuq8",
  "key32": "2n4TaB2LzSEEbgTMG2fj2udhmvUPY6bmHPYnavAJVkKSfQZddfW7nD3JjR7kXqFZF6wQp4o2DLZuwgvDv1XPYix9",
  "key33": "5JhMjgi8Eiu5zDsGuQKnATFEyC5cyHeoyGSJAEkaj1yUpaV4Ea2nqKPjRwjLNsWMZDaFKqBTzrvmFKJvfdqPJUyB",
  "key34": "wRggczxz5vr53gAoyatYWg61nt4RVjHBMnS9wCSbtTcyndi9T6P6JCkmHZ9tFBV4Biu3LKDHkMJhzD6Eyk6vRPb",
  "key35": "3PeUYJEQdUBTNqBVpD4QQHUFAKj9cRYjHyLKZYhaYZYqJCszhena2YPvmsbqDGgCuwffKjTjaifjhyqULz2UJT8v",
  "key36": "NcprXceTsJ4iFPU3REGJ7kMdYCXBvQuAD11fMVQqLzGbtgr8NKYNGDxtXgVh1gpk4txjo98SXRkt3ci6vyqUBJL",
  "key37": "5MSabG9JcfWwEoVwZfxJW6ovvf2sdhaKWJ95LbKa9SeeHusk3ktDH7G8VrzcCyVAqbEWqGrFgbK9c4A9rfyF2v2G",
  "key38": "uJ363WnE8gRamgY7fDKFj3X4Y29Uy8rPpzMa1ZNBpfdfwyvLBa5EmC32HELc2sDwLceFfEQNBeRwjmcMdJ67TA5",
  "key39": "3VbYzN1NDkZF2898kTqaUqcpZ2EcGDFQU88mmrAbcdz87bL2aPYzGLYRtfSZ5UFACfaqV1XJZWprxqKnc8KzoqdC"
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
