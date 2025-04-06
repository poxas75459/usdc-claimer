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
    "4FpYYC3XyNzhLm4Rw2Msm1Mgpt4J1WmFQxYyFuGSftsKUcA5b1tx7zsCAuQwtZhqsDTwrS84R1XgpZBbZqCZMrwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a9xWgX3P9xiUJXoZaxWKFjUy7cQFL8JRFP1zYcYVRoAUVoYAMpSaEnH3NYdphCBV3voctAdCbk8vej43hnVdRLK",
  "key1": "pb5EJ52K8X7ATgEoW5i7s1MYVa1DSJTRgov9y4tos9ytb3HdDJJETWvQ73qHc3mvG27FEBD8Be7btteJ1SQuRva",
  "key2": "2q5PEnoB51kuKZMajTdciJjnaYjobRMSngnhoZACtcrC46AxZq19gPWmfd6YEwje8sS93gPVv3YDkJM5UvXSYMHu",
  "key3": "2hyEWCtjEApP9gZAP3BNDUwHLKAePf9bVL2ba76FmvSixBw41oKwgT927epyRvNK4o9Ewc66W1cQP8LFwerZW3HV",
  "key4": "35ZFfXfqPJXs5pdi7w5QbJXJEK1VoosyBJPHHSP8Mh8nbrwwqmjvzZuEmuVR76FkqdqfLJvCPV4p5KCRbPvYZgu1",
  "key5": "3zFj4brgSVzgxZFoq6VeKmXePeb9vXo5WUWEqAh5cjV33MySZDNzPCdboJzeP8VycCgJFSArnNDzao4nGaQuS5j7",
  "key6": "Pk95n3CmqGvWJFQBYS5vHfS2fkvf4WnHaGBkuMebHPcUidQrerTQ4Pq84bk8VUPJkF9jMjS9TxHfcsZSQQQht3L",
  "key7": "5ytDDqNUPHxs7EbWtqT3kQ9rFe2JKLDcqGoGfvn1BfnTb37MRifwUmwswK9U7Cxs2fFZHaDQDzkxA82yUwKAcqNs",
  "key8": "5TbToKNC6P8bAx18AWBf8JHeALzEtMyxStFpx6Zrb5FrCuqJs5iX9oK1pnyHSRbS8eMQsYepD7ftJUxwLqxh2q8o",
  "key9": "3QLi4QLnm7hA1iZ6Yc57L5pSvfZnwVmzYuZGmjig57dMNfrEwg2zpdLSZ38buHtByhrhrVMGQq17y2JvtCkbRTPj",
  "key10": "3mFWwC5VEbEdSDnXEvmMATLJ1r2T3Ws4MLLwnyz5hyudtZet1SUyB1dCzQgjSSCob5zrGjLvjQZhn7KFjjYAV6A4",
  "key11": "5YF7YMuWX7i7wa9ws77bDw2WWYMrRFNdFdJzEFrVgHxcH7ULWzcFJ3T7b3kd8sKRE5VnE4dLMLk5cGGmfrwg3PpQ",
  "key12": "55TA8TsLLmZLaAQqCMwQ4cSziuHjL4VAnpvZgXKchvk29yPoJdkugEwQxzT3ywpDbToy89WUAa79QEeABf7NXA29",
  "key13": "4aBwf8eGsbWqFKM1vJkWydFvvFccc9pkSHmgDF46TwSzjioyMzGLTQw8cdR9C9js6pyyLzutcFkfQrG6qaHBe3gD",
  "key14": "3HUfLhVTSAsmLcjhLB5Rfc51avePWaDtSp7QiYy1Vt5b7JFn3WnN6bhfSLkd6KDC3FBm6ENdhQqmRafUjKudnMcs",
  "key15": "59Crd5EvPmjjgfnrG8zkQseyUWk85uLRzpbGorrHcea7JczJ7pb24wp2uCQtKjrqTKHkTxK2q6yaDcUZvyBco7Zj",
  "key16": "66427Jqji5HrC2TVwq7fmzB3nWbm6HFr9tr25DrZDnhvgcUdWsQJbVesfmVbDTrojbjo5dTgJnBXB9sHyJvw4SCs",
  "key17": "625vN7WaAza26GMcnwtNnGGYLwDaGSzsy5oPHqZ287BghXsS12e9dxM1pUCKr7sUB3kJFr7WdYTPE5QYcms4tdGr",
  "key18": "5fdA4JsSv6HtJDcCFnt6BtoCAhuAFMThETP6xoXYrispdHufrNH8K9GF7pivRkjqfFxJVmh3h8gThEjQQVyrhvpE",
  "key19": "3sxFfajDMJuKBXTjQJ96maSk8x9PXF5HNRLBB65HKQ5jcmc5PCaA6yM86mojQFhuvfkWGNvdeQEQoXUEUu2QX7b1",
  "key20": "Le41p6XWiXuM1Gk5CY1dbKPRmdgb9mrwbwscFry3efQsUfRYmM7wSwRvATSp7wtnKBLhVoPUsfWKBt7nGdZpoa5",
  "key21": "2sKNbzpfVoieXKU6UdfMTJAf4Zh161KA4eEJzGxaJeBHj5CbdC7EYXXS4Q2hJuJYR3hhc5heGAafDUm9Dhth93Pm",
  "key22": "5wt4kAdyXvsEttjMMzJdjsZRrhFNQzXPrRygEZsDYqLX1bpiMsPcyqNh63f7n4s1L6jkFz86m211Eit842RwG3A1",
  "key23": "2wvY8vVmGk8dYCHo6PPsYcJxsqaWHn8BotSVZwMWb2CrWxnsbaoHwfV4gJqJAxTMarw6rw1f9zEbSqtvXQa645E5",
  "key24": "J8ThCpymKxqbtCp7XbbwhwRZ6bDhxXxdQxDanXYWKcVX6iLrRmrAPmKsDnAHi7qBn2PDAzkbWRHMp1eGxFj1TLk",
  "key25": "2BufHQz1UdsNdvgugrAJ4K2NSyope74XcaBZPhj4rLeyQmDhcTedtW7CxqnKGUr5wVwRjWfuS313ePQQc9Wt1iVA",
  "key26": "4h7AkMaePkxWH1YWAKDg5DTkNrJDNTmNBT93SbGpVNyBzH9gPx6BB1FLCkyBiPz1SejTi6f9Nf5LQXWvEAmbEPYx",
  "key27": "5H8mqH6eZh7RVh73XEp7RH1ZtTbF3yiNWbATmVs3mmVssFgCWvrJxQXVs34An65y5f2ZkZcq2CysandyPXrhnLMq",
  "key28": "3rjKxvZzBxpbUMFuwSJFEtkLizneTkYLnU781xYj8nr5aonVQj9L9FdCQvxdNxx9TxHcfKHV4UDsdDoRnTQuXC6U",
  "key29": "5LAumVkfTFweXkSnvG6cpbwFqqMsishJaoXbCeCAWfsT8ordfUxBd518dSsiGxieovq5WDhjyv4tzhveUdEHmwPD",
  "key30": "3JoTZRppet5d4AyJSLpkXnpdA61r7ZvqX9MCLBCRZvaTMDdWecyMWcer5wgmFxBCgrr9YZBq9AozPE4aSGhfgPY5",
  "key31": "WAJCJAtmcoW9z6XcwMB5LMJ2Ytezv9yXgfapiYcndSh7TYbsVnZsUvkbqmnUSrrHiEFG3opbRPqJuFm6P1yeKZy",
  "key32": "2pvy64VzVgzBEh8eLDdvQr3AhzJvLP34iTxmjRwu6a352cgvEiZLm6D8HC5H1KKaS2oCBux3iMQhgfBgzU5yx5xW",
  "key33": "393L6gBkkaNTaGGDurQHqiHKHUfFKuNEi2BwDVu57hEgWKQRdng6UieausMGe3L8bvYxnrqAjvVtVhmGDCuRCPVV",
  "key34": "MuHnaoQyDsYRHvpMyXYh881QP7VspyFbN45AFghKBGorJG3mY17DuUWcGa5LGNwmFCh9ZqkKBjDAzjRu3hwp1M4",
  "key35": "41LK5qwM2RBwEHTcGZo3K9XQ8XSatfjP2gjECFj2bvfuKu6EXqLmi1rjeah3GaHyjbbaZamoaM4K3NjFTAbuvyxt",
  "key36": "2xDRMjX9vjCLpZkabcNSmdvfoBgyRXWcvGKx9h7x6xPVnmNTTZi7kzw8hfL25bMggfGnx5H85NSy6b32HWMSD8PZ",
  "key37": "5GH7m6mexQMefxXg9sVQrcasxhKENb7KbJwFdKzzNLXiKmCDdCxkSKQz5Xgu355K2yTzhd5VXMpxQWs4nMF6Xvff"
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
