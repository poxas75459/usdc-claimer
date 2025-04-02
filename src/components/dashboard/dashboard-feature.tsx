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
    "3Bm7Epy4gucDq5QPv273QgAv8PWQzvboREQbfRTUesN23FtvpcCJKBjXLQvs7cVjrXg2tunCQPBDZKvASdAmF3GK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rsTPvWSmGbfJFmHhw1uDUkQNTqemrJ1XrZvzzKnkx12jQMi86tCnYKWAUQ1Kwy6RjrS7K7kxZE7z7hi5o3WfCxv",
  "key1": "3y6svsrAzmASKfLvGhRsPSioX8pAjB8x7vLBdK93rSFAW43pmrLdQsCNAxfhboy1fTYzbZavUWnYUaX6Hr7s3XMk",
  "key2": "5q8a1jtyEFtJnP8LRD3GRPsGcZxkBWLgY44xcs5WmznCpNvzs36p2VZwZmUPZMAz5S8XstA6pJdP5Wd9owS8yjkw",
  "key3": "46FREDdEPhUyTiAnemr4CDtNqzryYKECMvGR4p6GLeRetTysVLNT665w1SBmWQtGf26yWQBt9TpE5g78WXBHRhXY",
  "key4": "5nkvbPHTLrw1LaCR2GveG8pCJkfhw4sktRLyo733JyXVwd24HmYgPj5W7i7abQRchNmd91bHjTjbCgP36WeUT3Gk",
  "key5": "5C26agR1ZbhaXriGtArZaUcXff4fZmjhbcVAZQLEnv7e6njqrYBFhs4zLyTQJ1vSZkFcyPB9DgLAnL24tJBFNbAs",
  "key6": "BoQ6VVDsFAyQR5bQE45bF6mQQwncCf41WmFAbiCMS5nRKDfuLuYAFfDyywHLKQSYCMqiaTVXLJ3f6a1GYh5rCQd",
  "key7": "3P5mKg1KQDESmkUTpd5w3paQPfnuGSgZSPz9DxMszQfPgz7KzMvv25KVFkJqwGoKTpGvg3dmgMhRH4ybrMpQbZ8x",
  "key8": "4DGhQV1Sd1QMBW3PAp95bATCe9HwRPmo1ja1Q1GYK3RvXafmK4zUFRtvRgM7vA6V3o9br6JPLzArwWt8jrNxPYxm",
  "key9": "26jNNvqt6QsDHFzr251osJpJjq22xUR4DesFhNiXkshn43tc7HQXz8mdrjCwYAjUNs1G2VbXzND6vziSXmZH8APB",
  "key10": "2jMiJnxvwWPaBWTi2eJ1rZstxVuZqULjzT7fmowLxQksyF5gpD9cRLd7HFnQSf3DMphC43VAP4ks7NzpKiGxRB1p",
  "key11": "5ooQFHMD24a3Bnf34e4rCSAv3CsYFAWwwdt1tDbuEzCvgXYH42zdXLfbaBbhtpinvzYiyBy7Z6KnZniNAqEHSc4p",
  "key12": "LsD9jgMUvzz47g6Narm6bTXBrXXgwJugJjsa1BrSR3vXAjq2j6ep2rXG6xa5PSh3xfeY3Kj3eHKZnmhb3rg1Vav",
  "key13": "3nJEiLnpy9AXZEMC3q2cB2Li9K5Pmqijx6UtUWxvLE2TsYicfo3pey76jNdQyNN3BU2nHNSjQwP4iUkWqjzSaTiN",
  "key14": "4EcA9kK2ZR4DSwD2WQFuQt6xff7aaqTBdNzgmRVwfEdTV5E5ABBUHqM3gwMdn8rmM4j1MMyh79QfkZ7EEgjBnVxi",
  "key15": "5qDcYZgDGLjUFbb4ieJm6xC8XP8WFsGTBxdN7g5eNTsUU8dLFGMBZriUgSwz3tbewE1EW8cpuUPJX9ezTJyZsLaj",
  "key16": "2C4YXu7X365kcZWTVzfuanyWcBSfRfduVHMnUhxtZSn5zqn3FupoQXqrMN2moCTnDCmt8Y75Vo2hMV1k4uxPiAD5",
  "key17": "2TLfBZWEmmdnZeiuztEx3HhPidi3VM8QwM9KG3eDjgmzPMYMWTEoPBERcLNDjcPoESV2wipANtTgFaG8z3HjxBF3",
  "key18": "3JrPkGEUmu8Z8qLjGbJHcCA7EEk4ZhzFSKRWVVDo5hbRE7MsoBaUTUbHwUop6nHhd677xrZ43NoeoAQJ4WCby3eF",
  "key19": "565UNyVT8TbnXJrR5UeMvdzLLbaK3zeWfAQNui1o6z1NzxwRxFPMy9TPmRGptMDdM1VqChX6EtrDvaXdS795P9KU",
  "key20": "2LHWc3qzCswvTTdTyFrSCfSxEhQY9QasL6KM4S1ssgbs5MUnK6FveB5XMfJkwNCSKME6uA6wu92VJJ9EvGL7L7tJ",
  "key21": "53DfzYYnL3UxbKmEbK4qd8HTWLSnx7yMyQqhhzhj74CTpQU63wsmVqH2QJvdARdYa7vRGE1B8CCLQM21cqXyjBBH",
  "key22": "4upUfctRAGe6JknqbhBqKFY4iWRsaikYgm58HXjbo7FqJfkJJwVLYeXfYfPMs5hRf2eQZPrBqnpyvQMVLRuQWRDe",
  "key23": "59gb5NFhnGkCw1e55vjXu36qjLdpDRjktF6MBmTj4T2nWzXe6ED1o6tWhEbjqUekNzxHnsq5oiPHSDsRbG2UWeVR",
  "key24": "VKHxoGrvij3AukDriE6TbTVqbK3TBbZPAScCXvHfpkG2AwnscEUkTF5jNy27TfrARKvHjVMnuWC6RrhAYguYTeM",
  "key25": "44HDi1jG619c7yyUdMNBUTmHU5oQCuGnz7pGGNsghwTQonTfUrAKdCVAK5pfQeRH3NGMvfL7vxuEdjvtwxJmZBqe",
  "key26": "35sYyU3uLw8kvAcAN1J7PH1a3pSPdnbMhPQD4bnSnjDXL4ofZXhDDyxZGVj7HBMce26rvtWhh642EBBHNh6E69h6",
  "key27": "2tWUFNzM3UeVUVC7gf9iFKkMFriMiPrAuRAGvKmxvk7GShakEwsrSpPhiXwJkHbhYRKNVLsK8ddGhcr2o1zLH2m2",
  "key28": "5cCiPxEtgWoUFzx9VWEnjqA7PBXzZW2TVoJ8BLGz4qxoYS7vd7Z7gJKqQ6CJmSiQwSYenpMjf8gtRvCc9wRdm6R3",
  "key29": "3MLDuwGPwv3Jesi5qocNtFat8wcYvw3NPbHER276757AZ7uyoqL2234ZAUWsZ3KXWS77wxch8jbZbBmWM3dN9b7q",
  "key30": "3BPuce3p2NFJ8f1TwskEnVnJVumV2Xmnrbh5jUuyMqcH9fkqNwY4TEhRKm5j4J4137f3bWai4cfYMZwmvDiHDtPw",
  "key31": "27Qnvog59CnnUBqwamGFLgxSPofMuRcdFasc8EWRX6ixzDsL3VdXqMxvuxBPPHYMuyLu2dTQoYU2Bir3rzVywxVB",
  "key32": "qKcJh2JPi23ZsEzj15GRt2zS8yHRv6s9jvWhwQ5PubFfkQ7tMDrLrDxQbvPqGHbWZjb5yHB8drZWVacfxH28YdU",
  "key33": "22B6p46w5jpnqJCkH3A1w3fz8h5Jbg7pN4rtHmkFMfE3aGeu1cpLDnBnif5XHETdhmcs2bAmuWAoumx7E77vJRc1",
  "key34": "31QYwiTaT4QQ8SpEjLoqtbzpf5sMQEubzWzbEsVpieA1msbrQaVx6JSxhDv9Vefmezgfo687Bk9PpwApFzAtxau5",
  "key35": "48heDEsfzJD8vUhWfYSo9ATiWYaYHR7i9dX9J4BPnki1C2F28NryioriQGGjjYP4nCdoQ9NG2hDVRS2tKM6kfuEU",
  "key36": "5YdgFi5BmdqQAd7PpBXQNCwiZQ1onWNyYt1rAPBcLPiuaHUuXXLx5Rqqvo3c4feB6MG8Fr2NUEtKG5Rq1NBF3D7c",
  "key37": "42Sg7mcXvkuzh6k8y12SpRDCfMf1CiEEssEZdhS2y8VE9VoYfSJoWWQ8yh3CE1QmrQeLhPAc7FbeUyqiVw3Ycxce",
  "key38": "4iNK4cFoHTWAqyuzb3fYNVrJzDe5NSXF3knzkPGWDdM7Gcqst3UbLqC3p1YvzB6VSzSCPnDFKuGTNgnDS7A12GFY"
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
