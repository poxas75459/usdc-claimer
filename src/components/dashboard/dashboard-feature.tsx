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
    "3jBg5hmftQyDfmtoHhUHFik536LGGZB6v81KmJcQ8VAS5ZvKxQofari87madhsEnyGdPRG2p1CTTTXmsR2bzkGxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Yb3uZrd12LqAWFoazBjAhNasJzGPqdSkrMDLijRoEQ1dBnxyehASTZpCuL7FUDJytCDhqyF1D47cKPAnLpKcex",
  "key1": "mmxgeTEhXoqyWersUs6ss1JuMpwNo4s2VGYKRN4vsWxbyrS8RFbaQXVie533wUzq7BovkUYqVWT3wqfDBa8YQ3r",
  "key2": "64bXWz1ZKhskbDpP8t6SMQLth1AbW2SZC6wk7zSZsrgTe3bxAW7pzcfKWRgX95sb2uHVnT1JEfaQ3ZGDcHL5ojjt",
  "key3": "XdxcsucJ5BEjVGZRKeytAD5dPCeGz7p8V2Q23RKcXYTtHB6K9YC3i3bsGaoyyT5XZL8hX7UB27VsRUyuFG9gkE3",
  "key4": "46MuY1n1KmaynxwbPmU3fnz9nQrocpVNQeiFpHCoJoLxXziJ5VmyJbPX1qnLeExZP8rhmVPgG9qPAJ7VtEUTnc9r",
  "key5": "1xyEb1T1FhVBY3p5HWNkATaKSumuwuVdbiekpUkkvLh3YFG6xVc4cfCQ3zTvP3KWYGxSXnK58wUrm2qyq7vWYTG",
  "key6": "ETw8HtJH3A3pyBMUrCT8JFbv7kf1YuHyaboEX1AtHut3GQcWPq7NASWbL5K3qSxqLJShvEDkFzyaWhy4uns9pwb",
  "key7": "3n14yUqDCgq9CfzDyySp4RuWPiKwzpXWu2p8WL2928HT7r4yeR9Hf2yD1rGeDuu2R56p7Hpq9AEPq5VhQrdGfBPD",
  "key8": "QjyewUyM9UjP5eeY3hmsXg4YdTxm6AcVE5GAtFHTraTe39DCrsHggapHfzZoynCtmF5bu7fe8UnQpA2c1VrpbHm",
  "key9": "4PP7TTWt4eGxBFg5h1NQqkC9sfzRFVpp5KsMGEnv8tjnSJF4DE9Y7TLnhQvNkZg7siqX8stZhiVTt4b8N1tJUXpr",
  "key10": "4ErwKL7VTcqQwDbLVxmBdb9r7hEQimXMtP9GCNr2Dq8uxL7vzBLi2nP2JvgWRnDURzPSFRFrGioP6z2PnV73JqNm",
  "key11": "4cG52MVR2b63gMtdTzwMCHZRdEm2q9T6zTzHxQDogwFqqJPybfhPbDdzVimWiFFPs19BHfvZxwYN6oxVbxGRsWZx",
  "key12": "5SEa83xL5dG247YWVaj8MLBUg1yxVi7eA1G8HJvFFXMmANDxiEd8eTpVMSg4VX6n5NmAYcVHgKsVS9AtUWMN2AbR",
  "key13": "4zpuB3h87mN491PJDpfKi3MHK3N7EFQwEgsBtFJWQZPjX56eN8ZvuXH1pEqTweWSTXk4hmawhgAWvRnyXGSZS4nt",
  "key14": "hnTKaD32Pr3MEbqVJEHD8sZVcyg9tXZFUfFYsz5FCNDQp8473gYJWHqyEThESZNiMHThCSMEozV5f4iifSnmDB9",
  "key15": "a1YGe3vvnqSycsJtZb8WSYWmMznSEksVcWrvgRg3R9LNnBRmBaKSS2JFdeBWapEFfkrEohcVQK3v5vbegQNvZ9T",
  "key16": "4dHMQct4aZPbw6YhyNh7bqdN1roivYHKZs3LPUnXgRFBc63yqcfMZ7HhMzy8w5WYUA11NNzYWrZ61C4a7LWtXnCu",
  "key17": "3ha6gaGVsJ2A5f7s7FtQBYPSRo2gr43XKmpYvDDGr7B2PYiFFPWN8Zmg4xuHKAUc22KQU3g2RDFJk3MFAzABdzfN",
  "key18": "5k2aMuX8sXMn54ZNaCJrakcEerHfVVfwwhj2dwwv9SF8RaqQ7NHPgCC4C9WaETHE9mt1N7NDaL71ap4wNFN44mrK",
  "key19": "3AScoUGioQRFog1wQz1zZKPdRw2m7Dm8jgM5rEKf9Cv1LGVFDYQdfoTKCg2nQCpU3Y2fbp1oco3jHM8kR2dPw8wY",
  "key20": "4F5VczVJQzjfqz53DTF22pm4GBDJCTBFNKWcwdumwytNQ4EATpozNACNWGV7wuxqehUjUajzAdDrU4o916rjapHU",
  "key21": "b3oYmxSWWdjXC18JPRFkhzxWi1QjPvd2Z8QkgtN6Bywu4FiyHGPzU4d3i5ePG3SuHeNrYXnYdqJXguGwgsWPuoe",
  "key22": "2terjgxrU6nRTMuUq7G6Tj6c4cRfU2YJvWNwtsVYBuJbzNRiyZuD4fRKPiijoPqPfJ4ujRttGh6NTPGG9psMEf2f",
  "key23": "56QjVee8yr9EtwJEmiqXMKAigtej7ZUh6KVKxburi9GcdKPt9hhWaPPcZzmcL3zM4SD6qED6JZ9WpVx3qLEbrXUJ",
  "key24": "UqYP9CT1rAvmuXcv7Cp31oYLELw8QrCoJArT7HiXFp27m6LvvuKc86oz7ESNyQPEVceryUoPZYninvLKaxNUrdb",
  "key25": "2xo7waCkbSAieGY1iSohn8MNP9oFrzPHYkCSqKPufTqZn8sQ3eHgXCgvBo2dPrysSWpEQazwp7aXejL6fJwtoQnj",
  "key26": "5mS93Uc2HqpiNAKBUtgDLWnsvjDM523wx8qLfyfr8Gm1kTbXxnL8aqYjd86C8p6jaRLHKCDsQSz5TVqfCM9Zg9N2",
  "key27": "5E3QvcqPXivMPwR6bqwiGZnJUc2AhDbMqA6RsGnBcbB7nxUuoxKfraxKE4DuhawdSoi2Ht1pqcw1HsTKkK9fpx5k",
  "key28": "4q96gYfGNgiTVJf7WBWW8P1uRN3rbGEVvoqcQtgshFCBVFztSCtXVKc4LxUjfRrNn5xBEhMQVvw1Mr3tM95MECNf",
  "key29": "nypPdbCac1aLFtm74iYKwr5uoZRK5T1oiR9ad1KTthjSy6pw7bhM6kWqHLGBTHCvQ22vpdJ5euh7rakhmBnmwHr",
  "key30": "61YmGQnp8DA6CTVZfbV6kMX52Mvpy1mYeqayYxkpZ5a2kKBd6uKFnGoZtd2h8oSWqMfHRfqEbwhQc6uwKHB9e9qE",
  "key31": "5iw6C34kgWoyMviMtVyXtMTDdCwWp9UP9QuBdqbFyR7zWWrpNWPUVUC19yh2okQSaUDhTikY7vjhSFqfEzCtdbiF",
  "key32": "3EBTfY6CnJfzXEo2TTLkPW7WpoMpEU5m6uTazsn2KVxkFqmnzPh2xsbsYLtYPqEpHB42aURsqksx5KGBKkK3giSn",
  "key33": "376ha9mEJ3YWFf7QGHTGUSK7L7gvUEdLrcKrmjV1vRyL9CBqjjrkWL5Y15qcGNf4kEzKUA295MUJBJNm57Rvs9dk",
  "key34": "5a9KKNahWgzitxqSENyGBYyFRiPWDuQgBz7Wc4q6trr3L2oNd5bWswBfT4TaN58VQnecgrc1hwxkygLQy1JurMuv",
  "key35": "FuKTQTifMs3XH8Wvxgiz4hWoH4KDdr4shL4SyScg5b5Fjbm321fjakZW47efsTgomWJaHeGu2rLbGU2qreK6ipp",
  "key36": "38CTiMEFvLUBzx1yuKdetJ4LSe1yWk9ihcFziodA2hwMz8WRQFgPSmVUvQ6CWAbc9gviN9kMBk1YcyoR2etxo5HD"
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
