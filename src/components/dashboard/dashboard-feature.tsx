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
    "5zr6gXdbgfw2UEWaRJabcWxgY7axWDvpvjm8wiYafJvexPABKG4bsKdZwE9Wu21t1oXhf6k9v7QasK9AHyki2i7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bMEk8BzYEx9nAhfo1hT7NNqdaotbrZYs97sLjHKFKAvfo3UwdxwyDG4ch69VJpjTX35i6A1hJ2SKzvdH8Vv49xV",
  "key1": "5C79gxavn19XGECgHCrwyqMdj4aLYvXN648Xs42ZvBh2EQndqTZfyg6YChfVZ6uikSmUMHWMaJySrUKwqyQYrFH",
  "key2": "2jgPEK1hYvE7x6AmdVwE12VsTGwbANBXMcykjiDEKEnN2xQF4yMBv4dCFwQP33Hwa3y1JfLbuJ6BopUVmZpUJTL9",
  "key3": "5rkgLQ7XEFZAEPaQah814WZ8aUxbBRnvje4RFKzzn6t4VBbfWLQd2WsDyYpjyN4a3t4UJ3DaqM4K2jHzyoqXS5DT",
  "key4": "2dB9GVN8sQcJQdi1AL7tW9uF5hJfW1DrNiZUHRNALJSnCX1ZBJQzTBgKN9opbKE4Wp4rz9Jy9cV4xQG6rPeovcAg",
  "key5": "VRfUwPyjXnnBga1cjXuEAvgeqXbDm77AaZErWeeYNLXH53XvNb5uMBCRow4WMxcD2Fuv2eSmNVmP9vxVHB6WBq3",
  "key6": "3PCeC2sPuKcmjdupmuw7kbf9PGWQ61ncRV8YcyL9J3PmHkzptvVxKimp51dVWU4ZQqWqgducWFeiWHZ5Zd3BZWE5",
  "key7": "2Y4QrEPCgvSHD75mZnzv5GvbvNqEn6v8veiebUcbVYA2d9x3X2XhH62XWu9nVQzTuTi8ZVguxxvR1rw3MQL1jrT7",
  "key8": "4srGf3PJ2Ma8HQ4xKnm4ks9Y2ZGibHEg9CsT6c52hJWodYd2ryWbzhYre4jBeEqToawH5SS7Ps6A7Ue1RmeGC6Nw",
  "key9": "2GrxWcSeFcH865oT5cPk8s9TmAZfN7ZLL5Z1sATUR8uZYJCcT3R3Jx6n22fab1DHXN3GSEUKqifkhV5cKyiRpTHE",
  "key10": "4yka6VwHkCZvRzWoaXZ9qXGhFVvKNrS3hzsdmeMVn6625bZeoCVVgmnbzC9CEBF52Za7xqdsPEVTy7cmWZd467w2",
  "key11": "24hrS1Lxo1DkzueDtSdkkjRvspmo2spwCfYa4P3sg44Rbzpi7gK6UFNVfWPEcNvE5TJ3UXbbP4ju3EuvqHyqBW4W",
  "key12": "3nQSAR8vdZ4Q17ae1E3uNiXbq7w1Lib5fE1iFjjUqq36LTNytyFf9bvJkCCdY3DFLfmda8qtgo8UfRfoWYNAtq5A",
  "key13": "2in2aoQfpWXbet5NMqiMF8Dpu343uT8ZXA4vWL6hkCEF9neqQXiu2eb5zVPHaXKc6CzL1YdhZLvMmfKuGVBiPx22",
  "key14": "zt6Myrftq9kH5qkpdGc6544hKguLoUN9tsEgE9ybLcxnyxh8qxJBZAuEKVurJaktS9CEWRNNsLrXJNaap1Z59d9",
  "key15": "49Mh8EFNxaiacbTqUgN7AJvTHSug2KmXt3FvQW1xYmzSb8PPmntexapMAhZT4AU2kzSzJeppY8Q8tLeiLfT6hhR9",
  "key16": "4PxoxYa4WBSgBwXMRQTqWPosBucxCtQ7pvrAJRyJEnpM29Y2ExkU6XaXdg7xQbGECbnFUaJ3m11prrsdoC9oXRcN",
  "key17": "5dtrqD2iSXaViFHnLRJ58QuWXoXxFxBrPjVXGkkyVGY8Z55dp5Fu6zuNEBeRYWrBsXFwhnVnRh6R4SqFKArUwrrF",
  "key18": "3sNFpBU9AGpFAVWmhDSwBN7cxczkXptHXso7ecutkUZhErzA3Frefv2PLELYR1YHMd1Bf6UkwoJhRZVHqwR3o6Qx",
  "key19": "2pDLK2yoXP91T8sN3BkbQ563R7dtm2XJHDUQ8mLUf5nRH5STjRYhPp75PEMvfh4tcuaiL8KTkcLaz5TNXoUEgAt7",
  "key20": "3NouGZ46773R9rKLDUvpEZ2hcxArKwNVdobHn9c4se5yNGjBeXqMLB7PFkVdXyG91QC4jU4B125TsxxhX71TiWqZ",
  "key21": "4YY5qqsmuPBh3DEet8GbTfoU2Cpkncqb783eY3gH3CwsgWpvUgKSfZ9MCp7HD4GrHS1ehSoALAwQs5jxphbMG9te",
  "key22": "q8dB6SnBa35EzmCTSM6CPMMUfMhKzYaQ4gB3SiRUDkoVEA1GKwfLwcSz8h7ixhty1zwSpFtQGcoyWfBC9e4ei5Y",
  "key23": "28dov2oob3r58PJnYeyucZxQKHLq8rcb7NoxrUWGAtzkv8oSg7qH4NZF6YQHF4ZEDLRoxwTXCeBjw43Y3SyJzrbo",
  "key24": "MPFbKV5qGuEHdU67VmUHxxihe9yWZTWm97RxoT6V47hs6MpyxkocF23HAcsadcmX5qSgyRCcuzh3CdED7bjHPx5",
  "key25": "2KW9fRJPKc9UU7L55qhNNosVVSj774UcXhw8tsouYAUQ66c9owG3nYsnbDFXUX1YepNUFTsGcMZfAvNcPLmXRury",
  "key26": "4zmcnz4xTG3CB9kBh4NdKXi3ahobMTHcb4Qzo7ZoLmGVNaRxebMBvNZpaMQpZJ1ecqjeJRFdPbWmfkbSUmfMvQLN",
  "key27": "FFJye6UDy4uEU3Nd6BY8oaitnD1RbBbbsQ7ioDNUWJw61MqWCuVpdqWQBiv3dkv3Ky5vLqoSZt2vSNqNUMBRETM",
  "key28": "4bUibQtkN9go4kzSztRsahrmZXrckfR5RjPrMxrf16hRE5LuAcmZCqAzhHJbEbLzKsKPuhf6GKiphY1Ly8NVVG2q",
  "key29": "59UWxpoomYyMf26UEQ1whRCDoo3eHqhTBcHBMiotTGYqo5egyr6PuA5X3yK9MLzAdcvMNxnYb9gSSzzrpZ8YRX7d",
  "key30": "2oDrYYS3B4JGowWX3YU9enfCL21R1cXP8W1qf3saqxrEkECYRYHEM1eBCYWekXfyfP6zG8HpuT2FAtkiMJomvDtx",
  "key31": "yxRpED6ga9v1ij2Yg6SufwQdLEmqv74aPAtRccWrx7WrTHrqjWhDgLMgF6Kcyj5aNoJxCASHJ5fTZRoUH5xwN2h",
  "key32": "5zhWzPXSLTqv5A9Sri16T9P27hYh1Gs4RVze1fsUKLBvijBifUfxcoFAac1hyA4viajLozyzSbeWdCgmpQUsamuH",
  "key33": "5cRwbowvHAX99s3uJX3yxT578kfgBTcvBqstrM2zFJZxH4tvEj7mntCLdagxofbefe41qUxM78VTjCd2Eu4wq6Xm",
  "key34": "5ojin7UV9YSkvejyz5YVWJwupvAH4mXVi45551ukSex78j2YbZZwLZEPqnG5tEU7NJgb7joB4XLTuaArW5Z6BTZd",
  "key35": "4ckooMx8V5H57T9p5nRkGLivbh1UfTAErvQTAPXgAJyk51Mrpxn9EJGjhzyRCPuiiiCKvk2vFLMU9F5xSEsZK6ug",
  "key36": "2VPcFVub1pKYA1rXfv7Xwbrn6fCp2cwazWF2TmeaNWrcVRFHX3cnwH8t35UuHrkjzZKPB81DXYeANxC8MY8LS9Nz",
  "key37": "32JUATYMLCZyr1jZWYTynm7VKtGhptMpKY16yEjZ7M8PtfbhxpP7tQdRfAYGG5Q2hRD9Z4rfhce71UeWpNPjoQbs",
  "key38": "ax1AhQdjQsK76pjvrmxsKQocjxwnESXY3AdxuraiCKwP3HfLxgRQywKwat7Q7gsaPKrdMfV27SbsBa9octxJ9As",
  "key39": "244jWCkMg8wa3zPkQwbEuPhx2MkSwJikrdzPv3HeyPB4Cc5xEWbAhM29D48Qea7WkjkswUJghrb18CNprMnvs7FN"
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
