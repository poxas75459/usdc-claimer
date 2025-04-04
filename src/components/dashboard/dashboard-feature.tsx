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
    "2xwogo2aaSAU6AwYMa1GbBPj3oSxHG9ySSxq3tFeePZJMwofipUT3eA6j9cXVcMEEXig44UceuXDYGF3uQEeEcsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GZyACxi79fjre43y2aiQDK7NcSejY6HbmYWCNxJcjS6d2a7QCJ6bNWUXLmyCR3V2N1FKrfXig5tzHq2rsuripiY",
  "key1": "65Cn43BKVGyZKJGmsYgC8bJCnFUYV4qPQnowsDZGNJqW6aHWUYhat3DKzUahSZMRvRAVGLQUcBL167YkdtYCjGSe",
  "key2": "2sZZh9DLGDDKDRoCxPpdgNkKDS9CwESH4zq3Ws6eWQrJuu56H77o9tbpHSD62B6tKrPGRPsRY9wT2ctgW5TBhg59",
  "key3": "3eu6adBBkXMvXLthd6T2HNw58J3BVU9qXwZDLW9CNjmj9WZB2FgTV2PgF5q1rzrncRp84vi1hFvJJnt9KP3papns",
  "key4": "4wZW7dPkmVRhfYC2ep3epZB7veZE71NyGgPstG6reMZKJw64TrsMAAa5qhdVswztEjapw6s1SxrU9XzvKcKwUTXN",
  "key5": "2YD2WkaBR3oMuGqrgHWoyc1WW31Ze15Y2ocR8FnmDLnyqcEV8CFSnipkbHuaqw8Jr3mFWYzHESeZF769ggJHJJPG",
  "key6": "5zq7sbm8KnyKgzx6i5cPoL3ex826iUrkK2ctbbSq6z4aCU8JyNRZjHfDgBcVgKRS79acLS2s3RLGKdpew8qTjQMb",
  "key7": "2PFcaPQPbhTw7wKRWdn9CGUKEqtmaXYfb6U7FM5fw3jzaKLpetToc3k2eGQR4VVz5YCa5voCvez4Zya44YseJdM",
  "key8": "2zZBt4ttqGYdtRWKV4ot2553LDXhT3GwoFodS9ELTqRHzuQNeS7iJ9KsD1PuN3SfR7PWGo2aKexq1t6zhM1hUxvV",
  "key9": "5eiUgJhJaHPqBpxcWF7MSCLtRLqKCNfXjLx2XfP9ysFKfhV4eAHYFon4vwcy6h4EBQa4ZsvKAHPnWFGyEaE451kw",
  "key10": "3TPjfmFEUeFrLdzenRhU2UBZaPsRQLFVBhRHi9L5suJQrkK3Rjn9Yyx3ewzSNuMU1BacmQ87go3BKnNtzuRBh3z9",
  "key11": "4H15L5BvGceL4NQHrufHdRzc8HttxwXezbkJ8MENY67wACLqKDjc6khdgMvhvyvvNFdgsdhKzousNJnAf6ZmVGMo",
  "key12": "3u3Cmsqas1uJevCvjKkzGBZuaSFdaTzyXm1wDoqFyjmFqgDQQq2zmnnrWYZnjMEwwRANXpWo2go3TccJ2VTystB2",
  "key13": "4i9tztBmBr7Jftja49j1xr8bxHwFT7fVXJurkXLKtbRUvGpp77gJt2vpXZ2mwNgmyyi2aiRYH9MZ3sZkbUhCzWhe",
  "key14": "ADuQ9z1aezKrpYWvTkocyUnJfXoFvPZsAc9oSjawaMStJz4cQbwsNBDSbRT4ftKZAUwXDB5UrntKWmBGrHsoFpW",
  "key15": "4PeqEgmZRbBCbJgYawDDH5YgVjd1fncokbTpWf7URU5rDN1945A8CYAHpHGt9Jh6SoYwMnkGKWrksj4Ma4vo6Cu2",
  "key16": "2JUWUMbjyiXPgh4Qd3yF3EQ6qo6L4gNqRiWza9rzUGAnBj2r4VvpZWrV8vkMqB8JdsmrgP5scH4nYZUPJiM4dW1S",
  "key17": "5UfXYXmBwd5c96KManXiR775UwRNypufW9B5gcuJp87RSNGniXWzFKpQeEh3bpiL7zovmXDuCxaw8GRyPcCBSVr7",
  "key18": "4bcEManxgaocitVbauoSiGCVzfSS4xAQDXpj5Vfvux6S1QwaeBnKAqAZ4ccVvzFMpvaLPtHYiXghqpK2Giy6wLiY",
  "key19": "ARv8SauXDAvfz5dCz6xtJACYEdEoPCdKgvoGH2BeYbL4PjK71pmKADk89zCCvvUwBhaGnHuKXEE7PzWGcvEXqUn",
  "key20": "nSmtRLjnmkJd1JSwABPvt6f86nM84xpF2orehBsDJWCjGzPcKSqYsf7uwTjga9m2ZuJPN6YB1uZj525VECHYSSW",
  "key21": "4rFSbHon2aMfEWHgGMvj7gLzL3gjbwk8wMuAQiALRS4QaBVXFey66eyCWmCPjnrqumnZ3uUWdssouGxBS3f8Swdq",
  "key22": "5XQPHgjMU7GnwsFJruBUcBhPekK6SCopsGZh426dsKp6J6RzwBSubCe5539M1zK8HxySJT8KqHSCuSsYT6v1LcUH",
  "key23": "2ePjrfHFx1e7fTuAPezxA1G4aqzwVaVuVBoq1Qm4HfXoigU2TjW9y7QVzbxEkg2MCb4HEC3BFfFQTYnNpDsAdCiD",
  "key24": "A5b9pWx3A79755WispJWMEz96qR78F5w1PmhJLLxXxefnLjsEKkbN7pqHXqExAosnkogXBfMR3mWSjw38VpyTmJ",
  "key25": "2oiqE8aW34HYR1c6jAgyz7oe2Gd7ao5BB6NvAiSmMTpCT8PFN8zY65zsrnjBEsbR7ExMjzjipCtR8yooFz5kK5DT",
  "key26": "4jVKgJnCnx9A37PG5ofovZag9ZKthZcnnLGPYbUkWKigNgtkpXUw37Wh5Rr5SXWf9rtPSNk5f2Dp3Eoeyc31ZexL",
  "key27": "2xxcXpSnoYGhf8196YfDL1psmEqjt6UtpAEKD9noyfAst8MRrJPvH5rx89s8bMTK29WGxP5VAv1uQoYzUUFes7rN",
  "key28": "5oxA1EVd4fQuCi1bEZwxQs56CxNLCmogpTwqoaUPAdzAfCV3XxTNX8mVYtRnf8rXRcVL6bAd4EDeKsYBaKNLJFY5",
  "key29": "4qGpF3R8Qj3QgzwBnv7ofPoymxvhyKehRStrcx5ZbGnETZZzhp1pqinzvqqeJGGHh8QEYqN3j6ZNNrGRiDS6BCam",
  "key30": "3cyCMYvLvN6H1UQRyLbmSS25P4XuCx88ATdg8ukBdwGAEoscGrS4SQPN8r1QwpULJCyVZaRJKkC28SGpobehRXqm",
  "key31": "61Tb4tKmSyX123Tk6ZPNWKyPkox3D7RymCogkrRDM9y3Pao41bTsQDcKocTJZSUavBa82C8zxKb3h6GCasfTSUVq",
  "key32": "JsPQwLYcGtDkdrCfU5XhCkA9PgEvM9MqXkRBG8ZkB6MxDHHcaMGVcZ6DUcex9BewjK3J2vu6rxf5p6fntJhZwQ2",
  "key33": "4GUvHZhdYXfnYtJP5BFBBmCecC3kC8FFnMsSVbFMQdDDanyZR63Xxwgk7zcmxc44bctZJGcQQNMCvUTC1LHQmeDk",
  "key34": "2gRGfMYK2YNjmXLXS9YcLvtSHNDTePELbr8byANVyVfMtoSLagWs5kmqSrHw2obeb8qJJYbmiiWi1YAi13AmovL3",
  "key35": "4CEYSmA7C4eAH7nhLcWHnwL3zauJ6feXPJEAeLuiNMW5PSw7n1YM8zJDzQib6AMyqNW7BGf2Gqvophbj7W5ZbqU5",
  "key36": "4VfPwKkYQfPSCMCkKoSX5n3FuLAVxyehdaP3Sxe4gcBHfb46i49r4eJFoZe2KDpkL1RfE7sfLbgAirEWXpKsApcp",
  "key37": "4hKLffadMyFwuKr948YHtEfweEeVERqbHbJJmWcrpAxdYekpZ4A5S2pwf8BTNP4A6NLJishgEY8zH6wzSPjm13nH",
  "key38": "67Ma7hkzKh3jqm3V9Rz1vH7S85c1FJqwuYEUqgBrWxHct8kdM5F9rrZoEwiutQnS4iGYfb9PM3UAo4dBib1gQTu1",
  "key39": "56KbzvDTSsFUygL2dyk19d4Us28Rrmvv82sZ2BNAw8RSsx6uNwhnkHsFMbaWByWY69f8udsHD3VRGzCqjhaux25p",
  "key40": "g74dhpHXUrDPs9FX37dfAAxsfQHyzs1dJc93yKKpRW1z6w1QSnf2ShHCbiA95CtPYUHffFK9woGRrN3iE5C4i7b",
  "key41": "NbxufXok8t8ZtbBksrxzE8Cx4R7BKJwNWQibCW6EDTCc26nCwfbzVU51qcGzmUvK7LeBdBRGwgQkwmuPAMpxCDU",
  "key42": "5nPezUghiUJVAgYV9S2Pa3sqbcXzNfxNqVkCWoPwoL3q3fgfcQ4bhyF4SCY7ZbefMVQdBEaDDLwcL5jdVcQqKzZc"
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
