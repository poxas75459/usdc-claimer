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
    "4rJVTT7MG73RHNYWh6StTvCy3ABwbrosjwqvRxzVzP9BugDHReW6YW9HA2oV1KYVGUUn2jVVrfFMNGCAed3nUSGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HYiGAqapohQ3RTG7oBTQrnPVck8kT4gmJcdqbC86WAHFMMD2ZXLrFHhmhpAisK2TNBchnqKUkrFRUgh22AFQmKW",
  "key1": "5j5KfdxFfbt5WvJb2hMDD3uWethxmhPMQCnznUdrgC7pSaTprM62bHbFgBJMvasTkTwnCGGh47p6btmHx7qjxrL7",
  "key2": "259NKoETe8KkXFrkcgadGMp7CNyLoh9f2YetC1ym56Q4cYzEWaercNV5q3y4dBvS7Z7Sm5c5Fp3k8192q6N2o8PS",
  "key3": "4D8sHDCNXsL2Snbs5TV8Vas4Wrsn4J2Ceq6DZen1Us6ujtbj6DFRnLjmMJ2RVL8PtGXsaBqkRyi3LA8gsfgnUnjD",
  "key4": "HfWTdh4SGry2aqAn1SKzUXVHG5grsxubnfgS1rC4rKBLQN651dGcdBbe8kYCs5oCog4hqorSTnpHGNurHfxthmf",
  "key5": "itXc6eFQVgwh2X19JvewWoAuEsZkwYjASX88yecAxabgDrKf5Ln8wNdz82xTLTcBjivaGVem8iAbwGQuTv3urQ5",
  "key6": "2agQZTQ38xsq4TbyY6kMC54e3eqqSfmAMzxRKNNRCZjxPt6fesD8FTWfsb4LS42VkK66z9j6Pb9qGenzrUgW8js2",
  "key7": "4vKov7q6VVZG9o3jnXKxXFxt6te6WwQCJEGFjGjS83f8yFBEegjrdMqdqRknst7fsH2znN3qVDVbiJYdkytHQD7p",
  "key8": "3W9kY8Gi1squ5p28cGrCjkkxNsgJgjdVoUTqmPehR6snx2fHx71FJRxJFZJ9VqqP7J5u4FzDQjyxT7CrpRAjt7zM",
  "key9": "4kw2RMy2qu2fHPPApeG5bjvFKM1NAs65xQF1d636Hh5b3h2p8QHkUPK77JKLaby4Vu9jn35C7TbKDsqSWD79pDsd",
  "key10": "39QRWeXKR4roXHEkW3dSekwEh2DgxSoMzofvcUf232ioUmnmgP6tbuDJBt19FeAyX7vgFAwKpKwMUpwCLfXx2aBo",
  "key11": "2n32JWDNZ1TEThuksMR6WCyBfm3wi2qjnVqZQi27Jd8WbiPA5gTQh1Y8s6vtd4Pjx25bGkMVpdp9tir6P6tAo2DP",
  "key12": "2s9MV8iu8snYe8ZM7UamCQyndeyMgZozyBAtdxnCoLQc5929wrMRQC4SWDadfddfYF1RJrRK7UPgGGbzH9a5qGKs",
  "key13": "39xfJYR2gzhGovUp8eTy6Neg2BX3QnG1pwMJA2jknw1RfHEBiDfNAx2DuAFztVWkqGAiqwx72agC2xDSWBrZLnWv",
  "key14": "2MjfhyAm7k3RpnioQHkqWfFCUS3Yig5S1kbvUdjm8AtyNArHK9zkrFCL3RwuAUMkjgSbvCXc2vMgiThcMNgoZPU3",
  "key15": "47hWLYxaciRpo1UwHPgbNdYBgkE2GWv2yo5nGjeLJPcbrC4sLZFuEf6ncaz6GL4eEuoU1SmQxmFjnGdcDdbiLrRL",
  "key16": "4kNHdyFJVMGdY6VuMYzUERq2T1kDZLr5XpBi39mpvPYAzNcTSw2L41DQ9HRvKQ9EzBXL9KFzWZjyABBjFbatzup2",
  "key17": "xfbmRtAxLNbdLpuJXNV8Wq3Y5nyixc2t4h1FDCk14tFYSYTnokr5DqA1GHgPtrxAeAbM4aLKFHGXXoFwwxHH5dE",
  "key18": "5iMXv4ABGxQp3x4MVCyDMbAqQCRab5MjEyJS3Qv1M45Gjzb8893AkchBHUo5LKWZHCQzApTBoFrfVx35Ua6oKsJS",
  "key19": "5Qwx6c19gpJTZNvQ6r44H12emJmi9gbFPq4GAz8rC6h24rDSBs8247LMhyrhjPRrVdxLcXKRm2riovYTCaGRYVM1",
  "key20": "uSynwnSQYNdJ3UXNF7irUwbHvMApkUuctxmt4asJyWBJTT9jiWU8wCekSwKBuDKnKpP5WMFTw4qmpFvs7cKKPvo",
  "key21": "57kijGVjfvF5QSkucxV995sH2SfvDP4eQ5CmuTGYYeXQjiYvVZLMLZhR3dHNTAY78yriYsnj6UMEMjBjmNtXmSH8",
  "key22": "2PwwYjyB9svS5HAqbw2ZNyrezaVPpa6sG3X2ULpQFdBkQE2JGMeS7HL3TJUg8GDVBo6eMEgSNpAhf5vKT93YYRdv",
  "key23": "22hqwg9u5ZuiS9Eza78m7P5tbU4bq2aEQ6BM6sXY9sCozZTZTUdCJ57UFRkXQkbZJhQ7Az92BxEVKaCysSKzmXev",
  "key24": "5h7cSX7wSeebVYYW5xF9JSRFEXju9QgYPbZgn49aL6kN72rkxXmKHBGmSogucXK4Wb78mLd5McL3Hq7ZMRNCi8RT",
  "key25": "3or27SXbvRQL7sXhWqevLfT9NMDGuK4wrzzSEpkNjMbyonH3VncJ29bpQ5XwXxkTycfJBR2vft1b2SCYFiwfdVLL",
  "key26": "DjymLxfULRPZ9V9kgW7v3RoEqrvMHZgbsYNcMs8YPEAAXiLouvteWDszhLyfxin1KxaxgDLAK9rYofZKzL5P6oj",
  "key27": "1nZf8XwxDwuGnvuR6wUi9m8YgWZKiygFEbApUhr2oJkbByNK2KVZ5V9RVFqdp9APGJ9Z6Q2TLKVSPvDGFeG5QkP",
  "key28": "iQVH41AaACHVoE9nFVKzUkTBXNMQttW6U6x2pMe8iPNXkPMdcMqfGoqV4WQ4Rc7Ugv2ZsCvWmy1iKaGfTYE2Eg7",
  "key29": "3ywQEzregLck8toj2djY61bDyVbor2DZNjapvgHs1xCjz5XyvG19h4LAsvH6ciYqa6mUFffNgjtYv34JxxYGqPWT",
  "key30": "4GxWFNJqoounv6shYVzdRdghyPA3crudLuiSDWK6KgNb2BP5dkAACZCJWh7kRrY34FZuo38SCQFETz2YBEqMjJKF",
  "key31": "5SJKqUi2YEeeLQubbP9LfrkB1E3kt7RG6c54E2m5XB69mzszd8E5huXvT5e2QAYyeTTNVwA2BZkUnDRzw1vTE7xP",
  "key32": "3ZPhzSwDuhU9oB7y42MDygB9rRowxS1RVsiaffBmt9XQXHVM4vzBGUWPQpGxmaFA5Lfs7Fr5QzsvxQotKtDKMqyk",
  "key33": "5KZ8atBKZEXMi1hiBP9fdBnxodsAyNTyMNyWwGBvENSnJKcpwNcPCQEXj4P59dDd8966PboEBwzDsNLMngscepaJ",
  "key34": "2JobLNGB3dRUtwnfeN5Zv5qgxBZVjAu6HEM22BWJktBVZqyHoGk9HdcnXgCyav9Ce5afyx2Bd3dU4aqtcj71m9ow",
  "key35": "MfHV3W6jKNKbzigPunMVG5FYCqMAThzEqGQwp5SHSqc5FTP4sm2wyrUPbdKe4p1NgAnxwSmLFC66ARThZNVB989",
  "key36": "5T75PJEhKdshyA8DkafessGbVHcgzkh72kAPQVVPBA9wfZtfVETZB5pCKEJgVy3LXwqRNquaU4G7uoqhZpw5y8uZ",
  "key37": "3SBBGwR1eZKvp85XHaG2PjRdPTFGh3V2gfwAkDPf6GuSCQWWz5NYEhx3UrevxiehWFZHFQa3Fpjf5t5oomuHLWYW",
  "key38": "5s5W5Zon8mA32iVWJyNPUpSToTuV49BFr1kjb1uFw85KNSXPqoqzwAWs5X4feNXNRiX61Paq7vhM5uUvKc7yfRyv",
  "key39": "2cGqTNUUdNVq3MtTYfRSehLQ7TCf52XbZYuPgwSadC6LBi1CZRN7gnB9kLbFTsTrAu928vynNXjUtFAjGPSmumSc",
  "key40": "soQwLwsyHt787kwDgwZ2vnRZTmDrLqxJx7REgPu7FwP3HutTtFvabEthYfN7urCMGLmJtizuCdTAR36pfW5w6iL",
  "key41": "2xQtNfVKXHeQzyhVxj57gngxnWqkwp3QL5JSRFJano9cGQPrzp6VVry3wGE2sSFbP4tYxvEi6YK1dKQq2bcXn1SK",
  "key42": "3HZzMCEHpJdNNKT9J88fcm4EDec6YKRdAGJXM6yxNt5MpATiXyviipCM4YArHNqBm7kwFiEsyF1ZJ1eTKKkzgzkb",
  "key43": "2gef1ab1FFiuxs28LY9vrA92y3CH7VQrFtugDBUPvNtxAy8NHmkBbx78eWCX6ZjjqYezgfMJn3cDuK8Qi5Xkqq42",
  "key44": "4yJnhLj1uq6etiY7oRVFuXr7zg7LEWe47pCYwQC5DxXg56svJwhSTVGTrXeNa6ynaBDnsrV3iQVAHb8Jezc2SN69"
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
