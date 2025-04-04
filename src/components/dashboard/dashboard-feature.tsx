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
    "5jJG4j4F83QYtoHgtTF5yHXZSQ8WG2uzR1Zai9fLWDadyLHnQ74NwsJp6Emt7zgoh7FMjVTa4aQ5QxePnG1QkD86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mdfVaj4Bm3Yhxe65ssna1WQMNsyVGSUYZafhQq7vWgwm9eFhQdDdp9Jh69ZdasTe3KC3TKySpDV1gJtHXrkNyvZ",
  "key1": "3T3mc2qizLPQJo39Z9zX8cm1RaPEx7KKGnr2uabbFFHifyLP6UXUrPf8uUPMzVBEA2s7iFFvh1y68JcncoyusKhV",
  "key2": "2tPF5TuYwJMqY4S1VAnEPFh7dd5fxKEJXGUEsz5p6ddh9a6zwjZmLNqW4UUDJfG2D625yoH4oYvk5M4Z9MRqVZtD",
  "key3": "3eQkrXpUYbsfwbb61rChoBjmEkoMdYyAASFCfedCkmXs7ma6VDGBpkbtyyJsFhhbzRkaH6DZUfmjoParYz5v7Dzw",
  "key4": "4BRDCF89BZZCaUZDCrZiWHFBYNXzcLiMk9qtpEjvDxsfG2kuUpyMU8grinXQWQ2ZbUBSZdMm3BNkDHWF54XAWZhU",
  "key5": "2cbujHWPic9chxwyN4LxG9LZSQR2r3TES4aZ4mEKPeC845g8FhQ8oDdNnTXUyPyhHRYLFop3p7MdFVnDCJAhj2dL",
  "key6": "5MqytjwRdZGrxY56yUj5A4gUcY3bEt5CkzuPyHevB27xsyQzy3itV4LBprbPy2QgahsRfHHRiKiRvXZQn8Vd1aQn",
  "key7": "GwhoWjg8pWSzTcUXKQvUjabM8dbq6daDTU5ouKkVU5JoomDuqchDcLKcwnUKQYDfXL15voqWCzH1zSfP8hiEgdU",
  "key8": "3kBSUNFJ9Xu6gdpfb1fsFXndG6A3PhUfcHZPzs64zHXy15reV6t1inAjgdPDR6Sioqyzqx6me89Do4UsidTmvZQN",
  "key9": "46NRFbcX7HmVdsasyjmCs4B9LmhHigfkZ3pCfrpchAGZhjPX6EM7uP3PJsV1tVpzuBwMmYEF47qP4CoomiWu4cbV",
  "key10": "3a8PuBb51ZuwixpWLT7Q7cRkWhvu6iLuqTvAsnEV7x5gzNMBjomePmQKpHQ9Y5skDoqwPuuf7JQpVgdTGfgHPaHM",
  "key11": "3cfYxfhj7WNG9HVqg4McecYJ51jqjbQfsVsuqFQK3Vxn5YPjN6uvkqswiytQ73B7VHSDhcN54wFPffw5zKLA5xA",
  "key12": "3SQemXmZbETcxNi7j2yP8zwhLx4JzVzn5SKRvZiNg5UTYpjRcx9VknCfjGVPwzV1r7LuhnLXGu7VFeYDH4dZBb4J",
  "key13": "2d1k86iYcooLpeNtPcLiZHi9LCA38D56gcRyydoF9SzVeR4bb1ARF79Fkc3K2gbH4P8uD3NDCB8kiw7QH4ejbEjE",
  "key14": "5GNSpqi7ukfgDTDm4xJvsACVmafnPFiGPQ1cRwb5DuzAzY9Ftsxjqj3NboNXT63XX4CmLUExb8hAv3Bx4i5vxJgy",
  "key15": "VToUNTAVYmnkM7u35qsUivvLBqnsheX7QRVi3MqLnjdZCu6P8WcRLtj7qA1JuFtgSh2pdzTwc6ZeSdWnixHjfwq",
  "key16": "43EY6bGG6dryiF3o78feb2MuNXpHF2mnReHKmkAC1KeSodYPC6pjRGxPcjtvEkxygiZ2xYV2jY9ZtxsiUdQRCrQz",
  "key17": "4rUnZujpX3KqxWd9SzXdQ5EafkDjKUSq6sk1MUdqnKL3HbK7iBXP86KpVAUxYopi6givwUeAsWdK1vjB6aifojYj",
  "key18": "2xz2ctCwqJDxSJT1y7LAQYRf4wTbL1QDniHLyq9ri2KkhtqND4feKhVFiCdrfNYmWq4iCFAz51BVccVHxzYnEMgo",
  "key19": "4JRyZAZwrppf62xcp2chfo5Xnp7y3PPmM7RihPNkcDF5FHgozUqLRDRggZ7maTN7iZQ3XP6pBjbHiLL7WisPdUuy",
  "key20": "Ftk6pG1fjS6RjfnjV5rq3U7V4gYUTEYdP7ehmhNxfcB95obCcRvDGK3Qtbn9MrNvsXbSHcxsrBKsuJMd7CSC6eu",
  "key21": "Kb24VY47iNP9zVk41vuiUko8wZn5XimQp9dWbzssCN9qMK4bkTcyw3C8rbRt7cwXJFYXTHonHfKmJC1HQurKjgA",
  "key22": "61es3jW2VD4NiyZf4euTcMTF1Q82uA9crdaP9HSb77yMhESHM5wDY15AiFxrmpowH3Aqg4EZEFjGNQvCu8SBNudZ",
  "key23": "2uavXPTvnhZTDeLZrFkAYUn5xE71zAdRgZGECAHwERkjMimcWgrZ2DyYvAdTFWw2N78n1emq34P1pQVRprcabXtg",
  "key24": "5fXmkYpYskNAFWJQGXotKWm6z7uNQUEM9QtervC9Zrv2aoPPejch7jWKW5RrMVstGksMSFMUjXDiMHv1pXdzAXqo",
  "key25": "5pVYGBb7M1dSpSCEVeND9poQYZqxPbzZ2AtMU4hGb1Xq4JH3Rp6PV5HcKF4pykUVsp32KgA2hCey1WQGEVi1Aghq",
  "key26": "21NsC9kWaHXe67CqiQ6y4qooLUG76vxAe2zz3jy5urkasVLKeyyjQffG7W4j5qte23R6MRWoeRsfhohAxhSYQV8j",
  "key27": "2xWFFPXA95SySDxmSgdHt4ChfDB21m6RJPQoTeobuaq5Nut3MtoqiVyn2JCNRcnJUaYkRC5AD8Rc2eLg4FVtgY7c",
  "key28": "4V7gfEQZpDW6JnaJWc7sNMZ8gH3mZRRNdnWztA9tJDWEtN45WS8Ki3p6WpaWn2Sq4CNdHYUBZrZxqMTnVZ7icS94",
  "key29": "TMySZ1ksHod7Nmxp6fYhZcgqvgHg6DEUuvUujnMW4yMaRCG6hhyjs2MpHwgP5RvEaVGzydH8DX27Wtzg6XD8UrJ",
  "key30": "3wzihBhVKcFLhsKL1ULVKY2xUBhiF8CaqoJAPHLwZu5qpkxXPgBzXX5DQEUt1ZtAwFb3hKjxiAwvK7aztLuUftXR",
  "key31": "6yFHZkyuZsHrxc3SnGD1YgK3nVeUgkcvnKPAfPXK33WVVhpdFLxiLZRiM3u3D1bpEDZauBG85hy26At21XgCaoF",
  "key32": "P316nCJJ3dW9JRRCNd3fHBcJHwax4SmxMZMYQkpTceX4WXhhVYVXw42kaNKiE5TPafMQf5fQrETazHYhcw73iXF",
  "key33": "56NWQXzezWRX2fke9y9GgF7iaxgVfgWrCmrjhQdQjaNSPNfcAJee2w5UsZEQzeFbGyQaQkRrB4NSRhrUHA8ymgjh",
  "key34": "4jMFh1ChxxZGU4BSsZmTfheBRxUuVYTRrYsD7CFqhxUpqjk6ECD4Dq4WwL7JTtbgru4pVmapsUN8g1QveAq5bVTi",
  "key35": "2Qu1AejGnZoSqiosL9bHfaYFVefUjZqc5osYwPmsgSE2k9DuwrAjAPkgj4QYhyjRBEe18CEVHKXN7JyqseiXKpRH",
  "key36": "2ZCvRJpngYxurMGmFL15G3t3fgWbkQfeJ2QEvj8kJJreYhG8vBTTUntrkNKcVqn4aYEuSqcY2AJUxaAP1x42W9xr",
  "key37": "9F8QkpQPv59sAHuN28vprhCnr8nbsibYzKSKK8a3LNN73BCZYAPqavpRNbasiQz2vPQQ4434UAKqXLK5PPjumS5",
  "key38": "2thPBH6e4G9E5sjjzqPtY8DhKijrAqW2AaoTun3xqmgg2PA5AtmgGgNNLd2PJvDDq29wuRYJz4zwnTkBgnamzAqZ",
  "key39": "4oLyrqTZyAep9bf7RAqzdJaNqEWofRXA7HKMB9Z4V82rseF4ux6JsYpp9y5g69dWaU9EJuBMHXLcY4rRDD449hid"
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
