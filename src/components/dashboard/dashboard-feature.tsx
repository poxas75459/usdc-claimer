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
    "4jPJXGYSdLJt92c2sAet8763mAAje8souQCemRNTDtXaaEfPB2J7SYVJYQvRSNcySE1vD31uVaQpEVqSqUTCTLLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rAzVFxXtdx4vLsCdJnXiZR6FEEsT9eqDC4oLatePKxj2NJeiL4Fn3GfS6mJq2QtsBz3ZPpEwxnjxpCrYtdSVQDq",
  "key1": "KnkXFAEYCYSqp5CJw5tqvQww3WF4vcmxwecswXypwZWdQZWyjDr2T3H29xgWnijmHLwPenfoVWj2WTBQgzZpUWs",
  "key2": "5vEYuBTtFuZSTuwJiLRWWuMSb4wprL2XorJ7kFbCQ9jLHEwcYVMWtXDcpa6CqUGMThpitpQ4XAUgyQhNYmzRRCh2",
  "key3": "22N6D1wMn4VuDo25ZYiFi1CnXCaxwmh2NRGMjvcCHLrNjF8JdAbKDwhjvjtqJ2A4KLyUJ1Y9VbZqgJPBHgnFjZeR",
  "key4": "5e6UfdySX3yKfoG27sap9cQFTTbSpEw2d6KwKoBWazYbjiDZBXJf5rYcpvnAUMa6v4penEcGUXEtudTcmNoXpc9k",
  "key5": "5rqiuzm5SyhCTqPwVrEGFWZe2vDq9kY9YpuSdciutsRHqf1avHN6cSSuTBBCYMfJTqr92p6xG3s3kMtTDXuv3jKA",
  "key6": "3XBTZroeUpST761Cvc3ja2CfapjwESi14B75c5Te9FNTtq8exBQDjxgJxEVrPKu2nuDJxRmh67St8QFrXKnv7gai",
  "key7": "4Xyd9tz2hGP9ra3VVCyMZZJUMSuTDw1bddyY1yAPXiWGmdwQysviTsEymUVSFEFqy5tVLDEnu527VdKmmoTuDHQp",
  "key8": "uBzRZ93bHCEbMjcx5EbogDCL8PiAtTDd1SA6Bu2gyaHrWDf5YUQLQXF7sGyAr9AvUMBJ6Kxxmmyn5vqAAVkZ3tY",
  "key9": "3ea8yQZAvMuDuTT6jqrAgnEvqTQFPcyp19bqDJHDmJL8r9NunL3iN7ggzm4oGGCVyvSRQvThMA7t47NwsUNLyPEf",
  "key10": "2qXhPMWTsStMqfMr3zq1QGBicCR1VxFz2xtp5KPsQvZHswiUmAWEupXJpMA7aMVikKbFkAVBho5q3prvtThxaLDg",
  "key11": "2nAqhB9Rgm4sGJuiBYQEWR1z23PcZcbM9uNpusoNnyyS11vUxWvmtUHghEMhdQ6sQ8YvDjpva6fiMJuZDW1L2mWZ",
  "key12": "6689hT1Rw6AxXhd84yKeyDoLHki8Q4tjYQdAfKRde3dgG16Sq3rjhn5BEJrvQRzRUEhAupQZoaxKxZqx7pkmbZxJ",
  "key13": "24BV7JYbk3kfJrBqAdULRpKJc3Sg6JiepmJpu6pwHMCXLSBanDGMuzm2FHtMeFBHJDUVUAGRJ2SFdJEq1gyUAqq7",
  "key14": "3RK8YtkrdoDKgpHfzFdYqxUrArEqBc8ZietK4AC23bkqjvJngsYaZKk2ZdWxzZAM7iKG6o5mUojU3JPBNMNGYRtV",
  "key15": "4grH7QzwkHYbZQa9Ze7b1aDoy9rp38KRGyvsdEyLjCFTL5XhoLWBumpR8FSkrGEyvTyhUQxKpknmnBWkJae56oba",
  "key16": "2AnGAKVzpFFzwLuJS33HCwhm7hzm2dZm3KdqfxMCkFjKhZfRQQn5sA42eG1D6c5GpYPVSbJfAaiRH9f9HSZyJd9e",
  "key17": "2Bz6JFzVGgPSBHzLvDXFwEtqie7cvpkP5vk4swypLiQNMoXNhyk52JNHkD6nDgJNjSZ1mNR2365o42HW59epH5PP",
  "key18": "2gSYFjD2mnKVRkFRm6Yam6rFAc5qJwibFvL5KuMcc2LRHrhYPgCrdtVEy1AFjA4GbSSTPmF6diWVfs3WVAjBPP3w",
  "key19": "3Uy7EibtJHiG2FZe5GgByKwDDfjcC9MzbpMdWLGe9rm1vwWdz98AsZaUKVkbUDWALLyRAVpQdarPMtZRu2McbSRP",
  "key20": "8gfrsEotnAhP6LA2HiR1xEo2vqPnG6edMAdNZmanzb8j9kv8XPYqY4rsoQ35Dk8SeSQC4zwiMwF3mNh4eqJ2oUU",
  "key21": "3aC694Bn69oNHfEJNkYZgKe3kGUAWFQ4u5kvqt9Z5R6uqNEwdZBtDwjyFxsGieZ64MBE6pQpZ6DzEhHxcRasu3YC",
  "key22": "3aHZfA89io6FAQ4X3MjG4GpoSZpK1JGqKKnwmV1U8CcAcQz8R9LFJuV9LPFf7ByPEi6wG2uem4L4c1MPvSH5WVEL",
  "key23": "2iiVtNVL2wekXsmBSXWZ5c28Yp4gsF7bV2x3WQJVGeFvmdW3YeeTMxz1qEEWm3mhQJoBfJYVcKRnDiBrhn8vjSvy",
  "key24": "5aL3TovoGL7L4RgS9VQRM7fA2YobPPmcJr4UzMPU78G4aCPQbdXvAaRebDMQAW7Vj3sVZ6pvZCHVDkrmDRPN65mU",
  "key25": "4fgEdiT34SFCxBcSKoBF9BJPMUTsZv7R8ffNBG55ncPa3E3k6FFvANFCrsyXxmiTEBcFnmLyjmNARSDwiAr9zVLy",
  "key26": "3AdbAmnHUzsjixMB6BubYDJsb95eusk4BVXoweZDsTEiAzFt4goDFufCnqfxPswJx5wDZbH27pJeJa5FRjWZLjiY",
  "key27": "2fuGNuk8NAz4LMomqY8zjL2Z7bwMWvW3tcfSJLSy2XduKXVr7d8sWfq8cyqt6DWxFVCa7TPShqvBnp3nEHZhYRq6",
  "key28": "3P8BhWHP9Fn8G4zZfBEapdtjUXNMTeeE8V4WBTMCTTH8NpUSDJxVSXs9XZYMEPFJgrRUCeBhDrWq1woHJi3qzCRK",
  "key29": "5jThPrmhDqARNTPAAy9Q5zXnnhWBhgbdNaGE55RWEgtmtiz5c4fLBUSKQ6LKEM7NAxHLmwBNZkRpXD274HR3aSyE",
  "key30": "jqfBGRacLXxdymG3vEKqFnc63R2rtbutxdWVJHjHNN5pF73Gv1P6R5P3vs6NwuGZ4wqcavZpCsRxxHP5xf42nf2",
  "key31": "5K81een6aNQrnvS1CB7V9g2ALbhT5Ri3e3t8WhXz6zkcHsRT6x1SmC4SWukxRGufDVu8uFoJZEsnZ5161JQqVsKz",
  "key32": "25MnkomRFFRtVfc22B9z5CBbEPr4o3htWR8K2dAU1Eoh5TkvTo6YSzXtxkDJDx6qGTrqSE39tGw47Cvcn5YfJuuC",
  "key33": "2F939mUaasMjD641LEpGNMS2J8B74E3BEbdTwUem1MyZSAyk4sgfK9C3M455QqNGUyj2h82UmjrdE9kbsVuAEL6m",
  "key34": "3tjgDqyrCvFhb95LvVADYxKqj1TB1Z8CpfuCDAc4pVhBCaK7J5FYqk876vdgkXs91Ei8oeT4yKqiFjH1JrLv931g",
  "key35": "AL2vZo4E1MozUnGeptiWzCx37EgKgfnCd3x428L1db6gUN8RTG51JR4h3n8E6mQ7GNd9ZqXvmcMbAZZDUckw6V3",
  "key36": "3xLCFkoN163Yq1QwZuH5Qj5MZH73Qksk2sszXExDou8vJ9frEDbNGvWvc7bnGR8tZ7tDugWZPRzCQDuUhMD9KoPg",
  "key37": "S9NehKe597E4A3T5u3fYBSQsmn62inhS3XgjY3wiZuA7d8iuRn1qAmrw9CHXbVjDp68hPoT8JFvDoHfvHy5Eu3k",
  "key38": "1FUCgGsg32eywnEAUeBasbzop5C3zym3oERWwrTSbrb6vHsCVeTzPeBZqnWmSxnhrCrkFQGDbmEQZvra981m9gd",
  "key39": "55dtkHpE4Bf4D31BAt7EVNvXDFFMDecWdJk9WfYVVkv4eiYnv1rqVPGBrwk5G5tCEvxKuMJJ5mdbXz87eQiFoAef",
  "key40": "2UDa3JV8sUVnLHAjHuS5wcpLNYE2aqr5TATdQfsdDCrwG2zVtmEPpqAHzwNYmeUUe4gNjtoZtaTBLSvzKgceCRsW"
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
