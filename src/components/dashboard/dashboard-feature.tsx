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
    "2EqWBToPm1Ur5KWGNu9D6A5KvX6actQkJcNSxNL8LZGy1STSi6sTim9NtLqeQiXTNXBMMSbUyZaeoE7XUzw4pSjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bmweG5iUKUsyhu9njZVKduKXMzDeEV6fJ7PsRYcbM4wySaHaEkKRT195cYHzEpd1uT62bCDh6XMpvpiVSmC3KyA",
  "key1": "4TqwFKASNcWt7esnczc4kX2uvtUBXzcCvueSsCAzbM5Kmsn5WSSy8WJncjHV8adLC3zufxYS4Waf8Yvg4TwpNQ2Z",
  "key2": "4pqjb4HqAhDKGqy7f3cHXuYgwRFGzKidCSagdCpNG69Ng9cLxyxuBg4sh2hEexXMSxdbnRQNrEt1fBNNqGcGsWpr",
  "key3": "3KrvGY5myuX6PhVoksVmw2ZTG6bpGfZjusQ3tg7SeYKNVXgBqbyEGfSPoN92cMfeKK6Y1xE1xMa5suaLq17gbdY8",
  "key4": "5afBmcUJEYvDVzfjzZA75ZtYUMV441Fr1UhyE3YcJfxjSRaJ1gynjGSmaSZ1PmTzd4Aum4vfp9da2qkqJppqbnon",
  "key5": "3Js88xpqefa4KWD34nhHyotEKS9179NJ8vGAnSUpxE9kARaNxL7c6FrB67MQBthjLLfxkUQNvjUGGX9T8iYsdsWy",
  "key6": "mPPYzYkggb5mis18ErQxkMM6H8UJXQMmQPwhhPQ3Vx4i7d6RCfj5srTYSvC9nTX1B1FpWh1sXWwUP9A8VRcjstC",
  "key7": "3CJwcfBxoQGwcbZRjtMf1XC2JPHouzRtjHBr3Whr4WSyznJSkMdHDHnp1m5AS1VA4qC8My5aQdPr3SCGGm24M2Qz",
  "key8": "2K5zCJLdvsRAd15i27BETubbJLwxpPfYE7qeEf9t5RbfWSMcJJq3FggSLUJkNPvprfMdSZtCLTVBAustrWGbPMbx",
  "key9": "52ecWaRVcimranbEE7rFsZZsVMMLGiWcjYu4fU369LxVxycyJHqUt1eVHoZf7K6ssKKUyCYnAtnbiTFz9V8njoN5",
  "key10": "2xzj6CLNaApU2Q2m5eqNhJN8uyuyX3kSj2c43SC7Hx2gRKbbncD2mHZ3SKQJb3h6HiSTwoPkx44DUEvZGDfAoRd8",
  "key11": "4FWWiuBzRkardZVSuMv7Jfpwh4hNqeRMFmB8burSwakg88Ym6Lezuc7NRC3Ybdi4k4uMLAD7n3Npm6yqEdBr9AiN",
  "key12": "3KsAbNqiH9dr8cVZkH2qY4TWgtcpRq4QVr5JEkmgZU56SyVUE4pC6erXuMPhoMrbGNA74miSPkG1ewJPyfjTENrZ",
  "key13": "iieRQDGCTrB11KVbTbhjiU4aTZzfkadGusnwhJ2386HiHp9SwxexBhRKLyFLge1dsrZ74tD2kALHZJMgbQzmKjr",
  "key14": "9G2chKvfaxmUNKjA4mZRZNKzRg8bjoRj8Nba6dKrTnpvDG5fM6smiNxVQRvmtYxGW4qhNpr4xhK2RbSvBg3v9JL",
  "key15": "5uGQzr4Ygp2uCqxPBVmWdVoFNGzQMvPAP6wbza6fUyyruVMSYHitibc3k5uhdseb3shDgtRfupT6AG25Y2fWt5o9",
  "key16": "24ddxyfV9VWzjWYcgKtCBCfahE2s34HY6MUktT1rgSgKV5aSZbLDWZv2kZBFbtpecoks1raNVXSiCBEM43DHj7RJ",
  "key17": "4fpKU9dn7TXJ1hJ8PwWHJaKnseSLtWZxdCEN34WxQSjE7azbJiLx5sSX5tqEZLHWqqTXTcFBNRJf2EmmyQC65r4z",
  "key18": "6skBAMW4t9KfDRSA1ZaCdYVKGf2HiqyirRExRSh1y2Qp4yJwJ1ziGJxrSfL2Jhe8YyuDczWUDP4tYCAfVUETz8C",
  "key19": "3EC9c2aU9R6L1ePVRRtPegEVDwcjgRKpBbKYGWJc2bB4gBNPDTThLqD7ynqugeh1eim1Shk78CQBekY1TrE3SxJK",
  "key20": "24VWjFV6YEMGhDbXfmqYZgD7wQraKScfwi8Z75skBDsuLzhU749qxyAdNZQbxA37c1yjUfBb1vnpkVo3z5ZW6vdv",
  "key21": "4KgY7ka1ZJoJMG6CU3eDCEAepBiUhwX3RG8dGZN5B4kw1kVduKVJPcu4LcW6DN2kRwMxGBZ1R3wjowqrVUsg1QUT",
  "key22": "4Up653FqaZ7cHXTnCDidr3iLWRb18wQ9BCwN4qLuge6WaeEtaonEEpP1Fqv5bRmzFGtoMXR8ju4hWN745nHGLGT6",
  "key23": "2vr9HZRWrTpdpBXmzsxnHhT5zSWksrQddqWpCDxixpHoMHusdKen3eh8brKTGK6pkZsfxpGDKZJQe9Q9m3bpTbj9",
  "key24": "KjmpcHMbu1B8F4v86MDsLEMwtEuLak8YhteptdtcuhwCLgpLLAfa9tHA5DVAdgpQHq92bqbRj7kh8Sa4pBn4vsR",
  "key25": "3hoixcgE9CCCT94maPUfzRBL5mLWrmhiaagefL5Rc2yvpxBVRsypTekaM6LzRCgzp6q5rXvU1JDXzgYUaarBKePR",
  "key26": "4HEEUAGoTknnCH9H6PXrJmgHxtrt7JrPeQzthNYG66w5F3BdWWLZn9M57UVXNycUwmZiNtRQ6xL4aJXgwqYFHih7",
  "key27": "SffZnsJfjiUHvLruMr2sMFp7PbN4SXgxqz4EZU8qBv4NHfGiimeCByWurHK321v1XRKajHN9Q16wuRHXPJTqdct",
  "key28": "4kdY17dK1nTXhUzUdGg6ejiwBGc48LbrDWwYNUkmbce6RSDDjRrnybHsuhUKTsrbW66VuRxWxar85NLFUrj5okma",
  "key29": "31Gtxct1TkD1C7Ny462JJDiZWc2sMtiLQ7xR3xmr4ee4qBz7THFcf9Pj4EpxjQjv9brqeUMnExskTtoUDLrEqG5B",
  "key30": "4ptcmasZTRz8SVxuAxAtZRQ7UYN3JdbVQoYgS1B5Kt9BSmyotTBsu9siqSNsVAQJm9oZcAJKYfi6hdCDNhrUxBr9"
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
