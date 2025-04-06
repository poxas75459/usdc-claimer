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
    "4FFH1V59b7jSsCTGwxGw5pGseEprxmKkS4VJBoMcpyBFdtjWtM4QoVttwYb2293dDqEjCoW4w9tiFu7ovYrkPsJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kHegY7tmYZuBeY7ZinGQ1sZi3TrcAeY9WsNLBvXa83Ty9hq9XTrkmhhANQSrAoinFA95VbV4AiQLggD4oZ4ZHaj",
  "key1": "28DkvDWpTZWMMh2vxo5DeACwTLKM4MjCoJvnNnA66SphMBbxkLvYJ2GDv76kyaT1HxAiA6ZbR3bgNuXFdN2hb52R",
  "key2": "36UA3kSZkuMSg2yR918NTog44VrDMXVkNNUB4bbqCZSRjQ2QhDV1g8T1kEJK36J8pPh1uGCEZ121hqxXTVFqmN9h",
  "key3": "3QQ35PPaZzRjcAtSQreSi6mPu7AVMEwdzuJXRZ2YWMfVbnVMcT2SyEsUxCqb6yMawc8zP68ex8cJWua5BEKohgkA",
  "key4": "2xSqCqWNvfNkCMidsM9FHc5ytsrMQRCt1nBD31rcrVfqAkeh5HCg6iaK3fetHDZASUpNV2HT3e8DdVePGJbc4oZA",
  "key5": "4b2HGZgmqwACnrqF5QHdQN4t7mRHFq7WLNGBsTD4LZAZoEZtSCz4n4Tv6ifDCPtUse9NEEAdC9Tc8QdNmKrtQvnD",
  "key6": "emW2AszaXWjXK4qYFjpy8raEUEmDKr53VzZQHpd1GFKd2CC72c5susvXMJMSwZNttKUSNMWeZXeYwLVBvnVMeAz",
  "key7": "2dzqb4yiuwrwhYgENb3VFHcysZ9tGZ3bsc2nnRwJjgcHFMhUeue63ymVEoqi9RtdztvSeRiwFnwBzcgSSAe2u68s",
  "key8": "2dD23xGLSFnjTHDHRJWD58WjqqAD1fH87hnsoB7kAoRAGuyWCwKjsh95q5FwNAEgPJpGmf651yyJo6h9w4u2Aj5b",
  "key9": "oSsYRYnAv68PytCWzYgHNoFRG2xwEgqBYTWw1CtsX16ngtpixFahQwoxFEj51ZCGCt4Y8NzaYnRqhx9wh2uHCKn",
  "key10": "4H5PSnKhUQsgUKiG1jBSyQZVD1fDuyPeKnAiXLTR9DmrmbSt9YCASx2FtYTy7KkmhHMt73psrBs7shBQ2y8qmace",
  "key11": "3y91LygJmvRLpTq7QcXcPmK9pmjQ4BVuzYDQdkEos8er2qpFh6t2C1H1xRrW8666JqDa23USLs7nbHvSXgHi5UyZ",
  "key12": "eqUr43qBfmHgjPShjV2p17XiwkSCaad893yQPg4YFgWGyY2LaNwSDb4VpnmzjHwUGFrjdCjA4hveVrpJseqfzRe",
  "key13": "4qJsPZkmQAiBzoCHpu6Ngu2p5qSnwqkRNeaq4zdLPvdxPQ9qnnUmUihTieJT67R2BVY3adxvNyBdDmLb7f8LK1Cp",
  "key14": "eKZzDhe8qVX9kL1Whr93DaCoyf3PVXNaRQdYExeVRF8i6sgbWr9qVGPV7FrNw9cQnUmQEWiqeYDf4w3je4CutXY",
  "key15": "2MLocd3sMTTTr845QCvKMW2yD3DgZYXjYotoehMvBB5G3Nfc6qRcsFvcC1iosCPVC3onyaziHdEuzzkyj1Erg5LR",
  "key16": "deypTcLqs8dEjeQuK33cPj1kYds2g22hmKZcQp3rtTAsrsyTZynwhzVHAErPW2PSXeeY1RYfFxkxC8USNi7sSXq",
  "key17": "42qqmBLNYLbdcw9G8W83WAThnnDaS4tnDonucAQwp4hhUux7b66HJAEHnicUMgd3RjUsqNzQshzo5jGq85YmChTz",
  "key18": "53thpe2QxjiAnFaPuWMcyjnYtDeE4Jm23WSDEEvM8SFKnqrzihnFgEaETAmuu2nfghJhDz11N51qdHUdd4pntTd4",
  "key19": "4SkukGcYhAsvcMG1ivAXmNkG4RKmrmtRZkgBW75tFi5qbbg4RWzVcp2wiVxgSPQ3BnzKGQHDmEyfJa2yYAAPZqyF",
  "key20": "4R6crMREJKTTuSbjgTeAPGvHaUXH1F1ELWkqW6BBw996gcVBrbxW4VqRDv4phhARmy4fovioxqM7ZRrhiryb7qUD",
  "key21": "3doQHT5aXXa2Uvsna5m9sXB9vAZFLyokwiASpR5vVZr6NLDUJp5R6myscmtcD4PRHtGUay47CpJt6ra4g8HUTWPQ",
  "key22": "4ZuGNj5PkGJrNRqMsEL4ZdgHCQ1oo7gHhjWHt8EQaWh6U1g6fyRmeF2hw3VLw3dN3DsdWYHEGh9HLGndZuy75T91",
  "key23": "3ARJpHSZ6gMFvFwptr2p1aZ3s2fvzi1MqgZf2BC6BhCqWCdR7Cd6TQHr62N23fqyvanYU9B8EKgNw2WafgYimfeV",
  "key24": "4dQSRNWeu5wmuZW3KRDTPufkwG5U7EEotpVQk16YCeJmhcgeMRrN2Y7cdtpXMVdg615PDDhSgMSS5aeP4f8v6Feb",
  "key25": "54oMqz1Ca5DqkWNzAJ5z97ur4X4BqsDCg5XVmLbq5QBaFdzdk5Cazx88T2opidpz2zfkDcGip24ApwJT5rMRxLf3",
  "key26": "2XX8cjmqNnLAnaM4tKPwd6s8GQ1UgCKk1NmSQGHqHXA3xxLNVHmNfpPA6PCVqk1WbesGSEXg3fWsLLLRryTFNKRc",
  "key27": "ffrmuucv92cRmsL8yLGxVMaLV98T5tdnLu8ijskCFprH8dJGHQDDJY7zR693kHqzy4MwLByPSX8K4DYiRH6Dk3d",
  "key28": "3abB73d6gSc4FztZkR3LHBZRmsdsECCj3QtSXHycZjExn3PFyjsU3Y8KGGYXP8na3atz3Pdc2fevkwbRbhhGeEuY",
  "key29": "bbHZWxc1NYuqHVykMdMPxraVLaRkx7fHT2kFvS9Vxzy59TFqjT8CGhdfGzfbHy3THVXni9U9foUjsQ2ymQxLS8e",
  "key30": "5xKwZFPffpABkxXybCMu7WZy9ScL1XJurmhzTAd2DTYU2mUz2LB386aBwXqcEY3DtXfKoR9hjf55Xi8CFP5YYSmw",
  "key31": "4oTYnu6PEF4GbHNHJ1PbUBHvtnfvRzcLhVKGSmvMfb3HEnBPRRpx5xiHZFKLaSari1dn5NoudkgxxY38cqYaqNUy",
  "key32": "NjpK3jxDPyEvhoGnfrgF4ciSb1c7WENwdndfEsyhkvRevPYsX1km1bgwmBfBeTkmo6ijXkL4VoWW6qw5FQDxKck",
  "key33": "5BgnVRK2zQ6vAZcbqvBg1wPuiGJ4fLJm718Fx8qYozY7VvnLCKgg5fRYxPc1TPWnCQHmtJE22xx2cxq8AheJhe4d",
  "key34": "NEvqcWLo948FjyvGafUyaghm4kdLREZjDAv49jPGmtby7r9tSdeNS9eAg9F5yud4ZRAYgJVows4cCWkH9e5qWqM",
  "key35": "9MeP6JavrdD4ptMy6poXbDNp6r5v9gmitRYBxVgwHksHHBc4xAQwkFFxnWCWe4KKs9n4YBUDrSrZjHzQnn2hfeC",
  "key36": "1u9jY2Wymq9maofeY7Dx5iUrMQhNVGVvYKfuWC1rL6CsFVLn6BiX451zX754noqzXUJi44HNc6ucdK6Z6dTrckA",
  "key37": "2dp9VUuFkkQuap8J2koUuGNwuuDduKMTiWgyQJp8pDqpMLWksYCr1C6q1BLF3uAq6rBRrdTD3my1n4BZ6bzjjLzM",
  "key38": "tyGzoZgCAo6K5qCTXGKCNXErybdu1vTDnfdA41DZqHinHybPgeHsuQvFfnTnvMEhoXiasi84cfbCDDxCifE4AQS",
  "key39": "kFQhWTQzUjKCp26zK3uTDF7nWxjHqmCk45r49JCR4Mz4y7c2KMmnVyqCnXA2boorXAhwtUEjb1vS62TX5GqBZoH",
  "key40": "2VRpZTQ1Pr8B1MGwuszNXzo3MYmkWwwn5yUBLdUDpyZYeDKDQgNVxdy8eEdw759rh7aGaMDinK7ZWCFoAXtByadR",
  "key41": "2A6GzJGVstjTW1snrBTQB5c6WHzfyC3K2wbnfrdY9ivdLcYMxbVYRxV8jp3dHUwRHFQHfE6VTJW5M8dUQLkAeQwg",
  "key42": "3SEaKBjKBQGpgFambX8f5fSeq4zCvi9QZxzqaqi5iPzEqQVNNUKh2Fm1JHTfy2BSaz2PDbukE2wtzXuCFMXzFRqi"
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
