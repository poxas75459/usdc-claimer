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
    "3PZUAVA4hzsQxJBy51Js1aQ6wCHsyyAEZKp6RcMSr9vxX51fSWvo1eidkx2UXidpP8KYu4Mgdf7e9pf6TLZVk9tZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47DeC8NMxaPyBvUtYZmGhSHmbjgB1pevrgQWJbTsCHkb9Dc61vmPL81Jn2pJXJUHR3P7THY8zqXgMEXjJACGjwQU",
  "key1": "5CKPKhQarKGtdRfnMXtagxP8pg1Ubr7HRbyKrTf74wSsv97idmt5h3CMGuqW5rXGh5vesUg3bsgEueth4Esv2JPs",
  "key2": "2f2MDaTzwYQ3yUUJmQbcyDqzH84WnnaEdghw92ewY3UJWXBYpHYXqUn5geErZMqGJnyDkC8mjGvcBQGqnBYrrpfC",
  "key3": "5jZ2VHsA4YgPnrFDLjnJdpLPJBtfnFcYMn1WzKiircESkCib8rYruGFZLhM8piqpDJbtDBq9GMpk3aGoHi54Kfdr",
  "key4": "Qi45SRd9wbAchHgKNzCHofBh4ZpkjMXgkLXJSgXyTHm6cZrQbYrvfivgnkYzsU1Hw1wusk3Q1PEEf8wGFvp3SPv",
  "key5": "4WZE8DM1ajkQZgvxjg27h8hKuLnKM9MuxxXyAWyFiPVUTJNYYXZyDckxu5qfNuQGQMeqV2VKysXajWL495Ko8wtH",
  "key6": "ZiAv6oeHiMgk3rQLKH4CdnCHr9G2cTK77ZsSi4S5Gba1mzNAGvPJriNaMUt77WtCjkPvxbwyyxwxEvukEKPwnkd",
  "key7": "4heVeiRJzpii1j4Je1316wwTnGZAGSf4zUXtvqxDviKdEo4zXHCyWdymDokkQbkRCtxEduUXoJS5787EZf3w9Pop",
  "key8": "wy3HkBeAw6gaF7QoooKv3KFDJFPUHEcp65Ni4x4Yfu6ukVGoZdH6df2D9uJeTNBconpKWEcKUjoeV71Ahneg791",
  "key9": "3s4bd2tnz8RD3PthZoqXQHrndBiXJmK9EZvgCgmkkTWn3MRZWBRFFXM849C45WqZ7evvsofYEKDR6sYU7F2751KE",
  "key10": "4uUj8cMuM9dKayZmi1tdzepnRm7xsm9HAnhepXN1mo1P1mTimTUqc4bddHSmEu5M2Vr42U3HFG9UAxgYPHxyvCYM",
  "key11": "jkCK3Qp4ETV56kxukuZ53wh6UQZaJRSRkYGS7jcsQFt67WgCbZdiHMvs4J511FjGT25Y7LoYhKgQrMYMFo4gJva",
  "key12": "4FSs1ET6tBtaSsdATrUzBjFYh2a1LPA8nvEpWmiyiQzi6ZE2cqASPpvojDWDjaNQ8TYmA4iHyhqtX7AhLpRY2r6V",
  "key13": "CaXqJNt9qKJSQcE1X68riPVhrMrb5boixMUExv5WCX3xWjjWQRMfjYGmPUmRWggpEXbgBXtZ5NkSoMuMrUbUyvc",
  "key14": "3PrkKBgn494du2UKcZ4DBHQwiDAYD3BZUsdCJ5d5xhE3qTzovHLVBHC9CA2abm3ALAyggoMYkdEZwrkDZkJUXpMC",
  "key15": "3Y4gaBsU3rNGSEB1eeo27PzQ3EgYgcTjMkNbyzTEWJdcqxiNnbsp6xQSJG194bxbHoks2DfRSyuTSN8pdjAaQn1q",
  "key16": "3QSxN95wjh5qn8hE2fB7Qc7vJyksL3sP3W42sdm3caSBCQv7u17vf5ZH9ySp1EtT5pYpmwGeHRV8hu9MJWgQLNAi",
  "key17": "2E5SE6nR6GTusRKtC5UGWjH7D271ju2PxA96Fi3zcV8fhkUvR3qjrkYpKExbZ3uXQmFtXFtF6C19fxV6JsjjRSYd",
  "key18": "46zpY2UivwxkntSqFMpQKRyd9d5RMxKhbSgyaUx4bWVet3bNuwwAL3LGChDnb6do9doQd4Eef4Kx2bNrABJRvsmH",
  "key19": "3HomzvHUJSSfZbs5zfp8YJFYhnwuRachRaL7SwH2ZU3qmaoPFvSpkqzKzUtGXALRsvAu5zzxQb91dDPuoALPFUnN",
  "key20": "tSakqv1YxMik6o7vEP14kQpBqVC7nzGrYL5QiHXWRosW5iPn7rxvk6ZfyBsj9vLHJoJuLLWrgrCYnpBs2VFnk1p",
  "key21": "9BxRU2c5uhNwa2QMz7TaZC86UTvu6HeUkWJRvu57j5Epq7b1k7QY8q3vPxEw5ArCFJisy2AALkbE2RriC3D6Tre",
  "key22": "3UHU2UKWGGcoMqCHrFMt181fzE5pAZorgXvhs4TXc8dqSoda4Me8xJ8Gw74npdTUh7Gs5DAJBuxRDEPAoxT62JYY",
  "key23": "5noTTfWSjABc1HoR5mXZGQgJxJAB2eEFMsMToLKBUt1Zce1EkmdjK5Qd9iTMJHcs2DkVFM5wtTr6UjnAUniPtba5",
  "key24": "4e9n79P62ZJ79eL3ayHRRkDCPJd9yoRbXmQuWnKtrtttLPLYV4QyQ7G2JoK48NLTg4HHgFhuzBbMVWJPWWN6whhg",
  "key25": "42j9XmSfUKEuEQjyYuTygrFCsKHKx3qxQmJUrPqQ4T36YUa9ZPKm77fe1hGRtNKbkLBZrzatptW6DSny8FiXopBD",
  "key26": "26RuNbiuprtiYVnnP59vYBNqLxCx5zaAXtSZArZemH9GfPXfK8pou4Mchg5Rvz9mKZLyxdw859MBUtk1WzsdgmvQ",
  "key27": "CCAQFjYAtWUJUk3iXR5rCHnJyK2JwxoJUVKgvNXJDouv8Cbg5Cv5f2WgGaSG9cHLkytMad4Hv2a27mmumXMF9qX",
  "key28": "5Duc55tgZuM5LH5z4APicJNRhyXWW7jhhjQJLzZkoW8AK3mNUDcSebvCx26pvVoVCMvkYCmF4Mg6Ettgxt1Dq7WK",
  "key29": "3XMNkjL9PAZgW6aiFMY4x8PQGmgLQt8Ucw25m56pYqnZZHvjp8Ec5MdkjKVZvL5k6KCP3bT9VX6gMtZ8CyonWPkY",
  "key30": "4P5i9P5e5NupoZFiMhZs1UruLvfdsJkLG7oRuVDAJ6x4g8Vq4CzbTGsqiS3raw1jj8qqu7JGxwTa15r2JszWgGty",
  "key31": "4PVW1BDLaYAkmfLhMQZ6ZiVAMdac1SG5SxhAy23FPmx5EkZEzN3gnWVvQHhxGwFhCtmpZuCFqEWb6jy1LcJ9Khwz",
  "key32": "3rvzbKnde62JMGxapedc3xzZsNic8TjZJiZbG7DymHSJhCt5p1rSGvD4nqfveGS8Hr6TbTnB45CSGkRrpQJzaNRL"
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
