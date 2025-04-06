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
    "2TsM8LdryNS69AxqyWZKhGW5CVuN3zYXnxMAKuW3ZQ776NaxEaMAGf5UMqBsx3ztvHE5ayhGUJDKXa9n3Xy8yir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kENSmbF4Ns2k6R8rEXofHvmLqGdr1ZvwUrVjgNvah9e8r5wELv8jLrc4hyes9ALQYig7eQuvgh63VK3TuMHDP5v",
  "key1": "5JPH8U9TDHHLSXpNtuYPduUtDCT7Y82iM7sadfdJ3TJuLMcsgrMV7RT5GabYhjW87zGhho3sLHpXbEUhnRft3oCc",
  "key2": "A85ABPvJ32hmA86f7ZZx87MyJd6urK2Jfa7paqGchPWK3NXdEgPaFtg8bKFR42dLQGtzgvpUpHZqN2Mq1KYquBz",
  "key3": "zTLTa7VErqfrEW9zg6qmdbuquG5ABA1XysMoBngttaEy7k9x8sSXvKZRTjMD7jjbgkoHYg5s8nTb5oJhSwfgMXK",
  "key4": "4FkwPoFTSYAPEexciNLmnbPL5mVWSWmbTUPkpA4UuU53WfDdJyB1BEgULwXLRhSCSoXCj5g9qxqAApw62x2CU6vK",
  "key5": "3Ep2vpgs8ust4ftJjUjCpRdJYvC7DRGBQWyUoGy9PrtVBY8wDqfU4Z3AVWviK68bJeNfxMFJrSoQXQ89ofwRSbbg",
  "key6": "2tUcrDsodQjzApURj6ZgjMVdR277HewRGvU9QvuyF53qxxdsTsnQ4u98axRgGXBbcyCXayHDJTJ8EM6LxfWEmQCC",
  "key7": "5N4p7BtDSYKLoeapriPowpskfnVT9Uxyny9kHsAHDYQkdtHxcJA3pCnYt4tcvsXf3Q5otuURgetdtKjHitBLxzAs",
  "key8": "5WTPGs97e22W79Bkw1N5s4tpDga76sd1ErD9bfFYJobH6z2Qio7jedm7DZY2sDC7e5Mem8bEsEQmwTBMCfYJB5vs",
  "key9": "xiiZH6FTjdGNN37sVft26C9kftvncqUiaqHAoMGvfaXUaEWAPZEL7wo9UsDk1TqUbbzuaSsxeAgNazrQnb8S6cv",
  "key10": "5XGbvkwZc8vdbvxZSodKPFq7QMa7ShHKVpQfZfgSEyfJXmKGQkdiqFM3dVqP39ugV8k3V7jPyw7gPJpHDoBWvs4L",
  "key11": "2RgzPnkGKQXsKexiaNMthVRG4KFgV46RTFRLnDkJmNgcBxsJkiY9VubijD1f8Jv1cnUCur1JuV5g6oSXQvVMWz1o",
  "key12": "VYxkYz2JQwHMGE9NX6b1nXmQf4vyys8CYgMN6YGVzjfhg9QKPoGoayggzKKKnVFtonjyUK9aqLXKcjykz7Gtyce",
  "key13": "ASYE9vJQZVmPH5BtDAs89iyXhcTcByQ7ixRLg62GNG427Qr9fcHWj1UodUczDj9vk7y4sJw6CjQA2fLpMtbZHNm",
  "key14": "3kKS8PJdUm8BSnVJZcdwnzD94RMjpgTuUhtraPfJLs1aubUY8VRJ5QLeCmtFGWF3kF4gKvDBt7vLEfTAGEGgfKwP",
  "key15": "4R4THanaL9fD8tJtNBnD7nuhCNWt1333mTxH4dkFA2NkXPBXRtSxdXXuyfkzXisq5pg5GWotKro6Uah18GHfRKnR",
  "key16": "52swk61XdfuL2HsQ2aRAcYRiKvvuDTwnnNgWxs34WzUYTymZ5ctS5m6aw4tkv5Ni9YTjMAUHs5PFeca43Ltsxx4x",
  "key17": "2oyeYDEFC2quhTEREiU9jNWdUAqh4D1gBvoHkDWtVTrWzWjrDLmfqraZyLBwPmouT3Xif12d2tFbHBabrpWZmpqr",
  "key18": "2HyjxYoYJwASCPVF2icRgJZhSCeaFChYtTFbSYcAexnsmBVJwRdUxdnDJ9V6McL3vS6D91XG8XbQH3NvrzUhGF3F",
  "key19": "2o1koA76KUVxkCuyrG58BzWTJQqxfR6CDUmwRicxxfpuWhhmPwwDwvbxg5edS173aVs6RtcdDk6EbbB5WohgJeGs",
  "key20": "5jekrrCxAHTjdD9QNZDgLvtrUDp151UyuCBhHY8W77soMHaCHNv4HTeNg4CbnT3eR98Z6vScMew34xwRJY5Dq5Vh",
  "key21": "hMHdoMRhzMRUCh9YL5rr4NtmcvppfdacA9x88jaCCafJTCyDs58ng4rzRgEzSvquZr9KEDv2uxhiaRXYvTQGdkJ",
  "key22": "3MvxWNBbi2UBahogziA4jPbgjTcUZGAieViwTFUbyafqVz6kuo29PrjsoTASUugQJG6mDy4Nt5AMDS3ez7rk4HW7",
  "key23": "21dy6PpUU5CMVXJ48jxRVWeG8dKa1hyVrQTxbTV3RHTMFUGw2ScPdnv41aCPeuAD7sDdorrAC23xAZcqkhBJu8XC",
  "key24": "qBzQe7VHQKFjUfeTFFBHe3onAhDPoB16YCYxafaC5mX3HxLEp56ZURvh2KCFKsKSNvdQmV4a9Qbb2cDPRYoUB87",
  "key25": "gLZy4LWnP3zKpdAoDC9Kbs1DwipUfHNVH1GTfjZdaimoBET58mTUgH3cPMJJdzLx5ifGTqERGHrrRUsugaD4o4X",
  "key26": "4fD9s3uSv7BxKZ2d6UH58BYmrVR9AApgXZ1SijQAxDe3L1F1w8ioEZm7zt2AucapFYHqtmcc5ohyaW92b6kw1sgC",
  "key27": "5vvxUJQQoNgcM5z71F12agkY2nCeJ5GHbSb2Tm27PEnWSvduPTgfq3BgkQD7ukFCKPB5po8rk6qvWCzFd2jvk1LB",
  "key28": "cSK1wJoM9F2SAQ1hr4rLzzzRAVbSZVqTGytu3pyrDMfqtJC7e4Qucyxro6GYi7W34Qw7b1iJKwnQWNywqK6je1n",
  "key29": "QKggz7AkafMBHCSoXxf4VZRgykgzc2CHX3RMjjeSuGkThYu2hGRsJEMczFHi4xVxvA7aKhZZJ2L9f8ECbEABAmv",
  "key30": "3h6cyBYMdskVjt6tRPf2NZUjKPzsegPnk2cXvSfCvK19t4zUyUtBGnZVhn9uoGRCm5sbxGUdMwB5gGqbuwvGdZH1",
  "key31": "PdqSx33EgVXiuWh7rtCNLcjsQrjgZ3Q4ANY77J2p35eRDJrX2c8r6b3hPUimD4ey3N8VVAjosPyaKneAffQSCup",
  "key32": "27TyYqp6XXRxj7aju5KUY8s8yeNoMbuJ1JQ4YagVQTV3JvNqDfDX25fh42oajtX8Jvwr1cnGzFMgJs471uczJj1u",
  "key33": "5q7HwXKreH9ePps2esYEDdsHy2tfGRRFvUX4CRMJ9zQ2V4rCiZ4dhG1FN6nE7MaC8gPyaiiszqLVi2qaMz4SKqwi",
  "key34": "2hYkUGnHJS5tygbysXaaxccoJ27pCS4xqe1CEBpb35Co11gaZ9biMtVsXpbdcyfBGvEnHCVmfJTwemq4KhYvU3dZ",
  "key35": "5H5RjLpNEG4cTLzdLxH1eEBme5Y5WghEbxbhnNzjcmQ8UoFASYANT9tYVG8RSoQaBYakjyBeNCzTs9gJ1RscsJ5x",
  "key36": "3oLnC29fWfPm2c2WVvKwrNphxgNi36fvZ9QNS1iSVmJQsZn4nTeFpsX45GFDqnnwiKEfnVgL5QyTsQ9dRxChjErV"
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
