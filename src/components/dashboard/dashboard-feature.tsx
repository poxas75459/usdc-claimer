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
    "5HtdCNRyyUPghXggw2dvCQeSDm15zubfLfD9aunB2ejtJeXdoGHqiQemiKCBpxMkoCPTuyPwGrAFj5KeyLs3C8Kg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EdaULoAEz5ojjKwGaucCN1TWZwrtHM54ZqVVkKBRJrUeqwxX7t6AitZ9gpNDWFaVgNXArCLUpUBRLAqkKMGRkeS",
  "key1": "61PGNaKZfcyn8WjtfA9WkPZbB5H6JJ7YzSgFQzDwm5Y7ZeW6ufwPKCCGho2CCD3uuybTrXJw17MVEALva1E2ifcY",
  "key2": "2qGXAb63WWybij4voCXBLQQiA3sP5x79zqye78DAhedh36eG7BHLNFDtfteNAAqg1HPpGnPfQSJwmqNUTj11BkGq",
  "key3": "5k2thCdfhqmWPNrwJegh45Q5Z2EAMnCA1s55jU7bwFAnAgWcrt7wdad9ZUNPUkpZH9Te2enyeTjYWYgAEEJWWAvq",
  "key4": "53BKAC9oxzHXKvSAMdsD3NdbtzzWX7QdfSxLxiZFQHP7xHtT6sxibWbJKjTcFRoz18oT6UBhr3H5Pzh2et12mqD4",
  "key5": "T85gWakXzUnAGP2xY8vhNXFsDgizFLzDbsivjT3jNhVipf5yL9EXpxxM7CwsERRvM6eQ8w5S1e5Ehy5iK5uwdJJ",
  "key6": "3TTYjXNtiMFFgeckebjtKPNk58R3E73jr71PWrSF7PKMSiyY6rvXBNUjG45Nadnsxp2YZ6yzALbvEXDwqxPs9UZA",
  "key7": "5XXay5oRafj6xQLkoUHVYUrhYMf4RpbcbDP6PN55XbQMfSzoz3zx1HoAUomtpiGGHm5Y5VP8SRAiBwkmH6QKZG98",
  "key8": "yyF5L5uWBoNqxKVVyP9hzQVDU5JwKFNpYNSLE9ENS222iBd24h8AEwizew6YobdxpS7huy8rpwLpN3dmc4nK3ba",
  "key9": "4JfP9RUsZh95FLVhxpRiS7av8rhCXHPnKiLLauvPupRwLbCXhoC8Y8ZabgLmEjQHHjnmv9pym3odoiLBCEXTH8Zz",
  "key10": "kMJfePmzfAryr8sNVVup2iJtjscudU8tnFYAcFXYhzubh3sLmgsMK165dkSurjHL2SVZkL2C1nSvWhhB2HmATPM",
  "key11": "wcbBn8NBrb6GZBH1vQaWPMBFtKFjTKY5YqjCGJUQqjRB9wZ1XadzXrRWdcAxYp8MRCsfJ6YiURfcvXDnNB2LJb1",
  "key12": "55viKdEUJLbpYKr2wz35dmCGvaYaUHXwpM1PRCXVqGv8sTqeN933xnRj2E2hRfTrobyURKHpi9UhAVnExmWNoobd",
  "key13": "4ftpZnRCT7k9MEiDjoyN2Zukj8mUw4v8UPx9jEhWosUiEV7Jp3EKvrNNvmTfHJJsbyq9nPv3XhiDicfHMQfT2AZC",
  "key14": "3LiGhHwhkn1XwPo1e2trNxpVCC3mfZ5ixiSMuiPvzB77dQay2Z5RnaBYLiHgj1dCsdKsuRhnqt4GgjrDdb2WhmrC",
  "key15": "3Su3cdJQCLH8XiJGdnruSYrpYTYWVkpupiZDaftdBa1hQu4Zqyi3MZhvcZxEFeLsynxXX8aHxGPYgh5QJ3KtoTwv",
  "key16": "AAXE4inLEDfEfhBQqu5ENgF2mzCE2QrBev5or3tiXrob1VSWXkWLLtqfsgxP7J6i91JeG9aW7aLZhFgNvbdZVpe",
  "key17": "3A9QipKHhqWx6M15Fxi9qLMDVBY3n6e4wS4JiMKvsgHRJe1M13EcLpemYyMs9Z7kLwA281zXsfrQYNN3XAXhrHtE",
  "key18": "2yTCSV5vB7YR8hM23qwsiE7TYjNwApkTUJVoa5Wqfe2Ej5VmxZqDzyQ3pq1VBChjqsqpSVJaGFCjLouXSx8dWAdL",
  "key19": "ZvJ35J5k9QydsyRqGogrfvrq9KnRACUDFuAKo2ehuwrnV7EffgtLckr67s1bGHKxNp4NGLVXjAxN1NKJMbrWLB8",
  "key20": "4r19fCtcB4UEyCxZ6ppdTQK66a47jwMDN7rZMubMkUde1kmddZV1B3bAr1MjLCpUZDkibVinU5Zkf1t1seb6sxZv",
  "key21": "2aiTetEq2RAvPGQrNbb6wiveyr23ziGi2bnYTuiRcw5uQuVvC6C8KkZUADTpejGojkbqyrojLYZhUvj1ZKoUdgdW",
  "key22": "gEuXX1trgJ5FToSeEmkfipPgmy7fi1XLkMKN4WsGoVTb46LLNbeafBuAqmJ97HtLdF7BCrfuyERKqKqanEc46Dt",
  "key23": "3tS7kHwDR8RLg5neskR5LhT4rPh5UVN69WNrrCVRzTiPQZtBySHfoiuonJkooXM28VewF1dgpXk4yTXXecSP6bvC",
  "key24": "j9mhHHdQ6jHYUtQQ7kWzgrTAs1j2Ax95WQujzvquHob7YAwky8r57UFL34PpX92Pr8bqQQKSj8do3qSwFuksbNL",
  "key25": "8PsT8zVUgBvgw5Vy3xpQmfKjuN8LxkVtNFxP97epzmmV4FBfdFMZDSoiXxTwgktqpaCp6kxA6iX8NFrmmJaaNQF",
  "key26": "4UbiTvWuRjMxNeXPE2NUeBKV8DZLCiEp9shtEYMC7ox6xAMUwHtcZE2RtjWYpoZQDjMPZav87y7J3NSKRxAAFtcg",
  "key27": "5UZgXBRcmHW1ASdW4LWUZQXjJTiziNkHYZjx3B1UWEXnZZGzkFS5TaMM3n2kZRin7Y9Wu7J5kJWKqTFs5LGwemqQ",
  "key28": "4iYX9xMakniqbtkSiog3Q9JYu4sDkbcNmBPPJZG2Yooq2tVycyzWzrbDF7zD8ayjDHVnBtLvUjw3f8KcACzBbKxK",
  "key29": "541Y62u5bqaRkuw7cESUnQhq3CythLUKgY1eGsiqAv5GNoquXrXGftuMaKygX5fYDvnu9NYa2C7YuA34PG2KVs53",
  "key30": "5vEXMNJi4baG2aqa3ctefgKCekU5pHgaHMDNcLMSrmPNMZgW1BEU61rBqvjQTFkfnTHFV8yTVDDJLpXzuncUhNrF",
  "key31": "2T1LQojD8YffTiYCiDpmtmMqoMXwNhR34qnfpFNfA22Y4MgFPittz7vouqdfiCWvBg7mx8r2D94R1JeS5VUh1YSv",
  "key32": "PmWsDNf9E33vMy8mVFjcTJejMiBsVDHGLWWW3v6fhL8LQXsZ1HHu8a47WBfHQsRzAXMk3nLiQ9H6YMoAychTtNG",
  "key33": "4HfPJ4v2w7XHkUXEmTzv6ddgsde9fScbVz2jrLwzvsJHPcAQkxtTGAgBYArM3rtS3kR6LoaSS8DTPQw6fQB4dcqr",
  "key34": "3YUWHGGtJvqWbwoia9y4u69BbuPbDmicvyHJdgPhSH4Hz5qLKeGALaPdJimgTatz88h5F2ZsnC4NTT2UF4AE3hSp",
  "key35": "2gAGBhJqFG9LKq1kgVQjK2QLSUgGH6nLdYaDoNtKgnYUFHRYjEkdGFmR8mtuY4Wdyy3pTbhdYrKRAMxDSMEdei3V",
  "key36": "21mWYu4GGVN8K5yWsBZDRj7iNQXeNWQMhpVaRrjMXcPujcLJcYduw3M7GA7ZPuEG6HfamQyCTCH1zvxXKUYKWuJe"
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
