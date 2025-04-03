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
    "3nKEKmPUrvBZHn74upRpwZZYUJq7jF8mzNkUNUTPkHPFDfnhwwqBhQWeGUwEPiTSDZhTMj4sMwzLwSL9fWFHVarA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VhTV2u1UL1XeuN1CYVuK4x7F89qxQf9Dx3Ht6ufE1XDGTcJAjQc143daXfcJjEmnavU1PkVTxS8TvQswbCeWhKW",
  "key1": "2HdYLFbnsMChiNjaUjqJnmLJcRmbYjD4Kzm7LrwcvKYyT4XqMMTeerTh1Z11AoTmpDy28GYe5Nnn49xGpAVLbGtK",
  "key2": "jDmcx2DqyujEFG5gTQoJTMtqweaaDDvYKfKKsZEYCdUNzXYU399gN9AgSahxRM42j1jbcvddcxU8YG3kd25LBSd",
  "key3": "598AdvrchXds8ybmmjfTKzZrWMDLyMwx1dfB3hRXfPmcF4f79etqhxEvPgYmgUQEFKg8szb6C1e2ZmTDr9Q36Xbv",
  "key4": "5w1sCGh2uG53BbFD7fe1zp3w2TfB6DLtEpxxNYFkRPTVUw5nssdkuozENmzJ43HCoyYwg9dnx3wKXPUbrhkAZLzE",
  "key5": "36TNPSyJJmaKZciVWyLz5QJoDxbtrGnnJNZBAJqn6azD6eJwEmxfs6RKiJhZcuBYNRizUYDqXLGKBPYDTttd7Vy6",
  "key6": "4iaiwjFWCWcDSUQmc6RkxbQyn1x2eDDz37WfmuELLUuZ5GixFoZ9nyVdCrS3rP6joeyEvNKnudYHAMzDRqqMJgLZ",
  "key7": "5vHUeftkAGxrKy5xkkUgHhhMLApkrww5qozrM51zvAZXcH9hdzR2y9X2uYp2T3JH1aY8vJjtYNft7zyWP6VMfQPP",
  "key8": "2Rb9QMpbnvRFz3mojw1GxomZ1FiuShuHx3RAtUWvoBQiJSMR5WNUGtVN9ARdcmcFZhCsrL9sGodp3nxMTYcnMqHq",
  "key9": "3UGkwGyBTNqwjHii1Hsy1PigJeDbV76tFmt8sUgFt5FbdRNEfwY9H65hMoJW6pKynuK4DNhK5ToNNwXQS3rZm7Xb",
  "key10": "2brk37oKuGnx4qVaFB3y2qc15zdc13Zb1hkh5EGKgZQXRTJc2bo7CspiDuykwD4BNN81fSjzHoTEKoxG1jL69rf9",
  "key11": "YJ9VQqPvax3rWWyjwZoNRhbFRf7afzffCUawsKUBp1Ti6S6khgXNxZCCaoei79e4SpFPWqRez5U73cCLqsFZ1wA",
  "key12": "mioFwjYi2MRKRU9R78cX6AaHQM9nHE3cJsYL423NMpKmqiJuNhJK1ThJdFNgVzkjMSiFaXb43XJK6V6Ns4HrAsb",
  "key13": "61wEsirg2XVzHaghdMrfuuxs3k39PPBfjbwFJMdRyDC8iqyyYWJ3vqG71KuU3qXweEtLPEcf4Sn4RoMXALejcT8P",
  "key14": "3eJGvuyWGkyciwc4xYRqhwV3xUnu5pebRtkmHXarauHxPitqT389DpACQ6zHZaEqRa6UnRwVW4nTP7AB6Bb95jhW",
  "key15": "4MrQwe4utUxPEniXzAcEGCqy55sSvrjosy7mWHh1ajvagFjqFpC3UAdsaX7gKPtbDsF8t4eacqsHbsmqyMwDwicX",
  "key16": "S5NYFydrP3L5HvaGQ735J9iz8bRZMJ7o86bRno548Ucjk1j6m1Hwh2dFN13gxgfonETfPDNfGzBBqbHq8shJKmx",
  "key17": "5xVkMfGVyd3L2PS2L6Yy3VwKXs48zKeFYhzoZkcmSfQSjADEWs2G8St1kBMJQL1L2bJGajoi6QRRZ6RwT7ffESsu",
  "key18": "2rivp17y32Ug1iMURG3WDuxAJMkGT5zYLrBK4xVAaG6eGW1BjK6MU8awUviidcLt55LcubCbMTgsbxj79YAgE1EL",
  "key19": "2TNqztHTqE8Bd8xUsA9DrueUJEasR2drDBg5NqeLVDCiPaZqhjnbpE9j7Y8z27CZGnfHYM6MB4hRtPZPMTSoL6jn",
  "key20": "3yDT4Yf8MpDcwcZScBo1C1QurFvfSQGvzAKuAsCk9tqbAXKtVWnV3HeaqszmAFFGo1g8ViRTv3cei3MB6Fy6dYdd",
  "key21": "36AXmRdyuAeatm55bfehymeo9mN63ewfkQPJcoSj8KgNhaZzhj1tDgpoLSTxxSY7zEYYVXTpbS65cZo9tUmHPFW9",
  "key22": "4kPMHFj8ZB14LYFUyiomuNAHraMcpniJ2HYMkUdBGhY3sZ5erMdsmtmphF7fDGvg4xX9MWA76ieDFadjQ5cuSzqo",
  "key23": "5i4kJJRjjpHuoG65ud4ogrEFxZEWE3y2PNaXTgHQoytumDczcKZKegytjtASUs9kP7qo4kUUYeYSqa76egS19957",
  "key24": "3YDxZAn3UsG4cn7Gzp2iWmFYpqJZrFYPYYtUqFNME4nU97nTo9ixY7HCMwdcaWzws1aPYZz8eDoG5M4N81mBMA4N",
  "key25": "3T8rHxf5WXxwFYnLqczWf6wK8SCE4zCSEKJjPPV3YULZiCP2mhptx5YwVBGDDdS7UcEPhoQQ61skqQQgkXYozPZ8",
  "key26": "425bGkZAF4QqBSCU7bYvwg3QmK2n5EYaoPJgLgd2JrjKGNKRTTchNeSxZ8bKYEBqtRoWBepFNYAt36G1e65diSn",
  "key27": "4dSYLpwXELYnhvMmCvFv1cBRYztaJ6bDUnzHq6icPoPAser6q4ZneqQ8XmaExyGPBKbEP9HcSJz4VigrkTuH2211",
  "key28": "4wJGsFMhofS3Fk8L7HR85a9UHtsAhV5zm8ZarkqAKG7585z8HqGB2rwZqYGAyafdFrExkCCxyP8GndNZgEnMMCNf",
  "key29": "4M8vMukdkubodeWHdbXuF4wd6NSy1vfgqUHV4yU6Wdx4byLp8M2rfpya4U8cmzXTqbEmdYF95XZF3id6SuXd49Fn",
  "key30": "37ocKT24ePcgYkwHiqPakufEFjXyh3Z85KbopHzEMCMU6G77GMkcqY7BDBeqChwTDhD38yiHuhX1xVKgt5Nzoud3",
  "key31": "4yrDggEua3NAiZCeLQESnX2GG2ri3WUW9JjtjKEzAULhJd8qjixBxZtP11svLYojjNUV1ahnUk5a15ZVkhVgBfRj",
  "key32": "yymYRkbXXj7XdQZd8RRdLga3XzMotLB4TcgrKvLBye6cMR61ZRFhhi4fMwVXfmyyj9XbkLYAb3rv2LvUJwtno7i",
  "key33": "3Lwv3n3QWu5Pkj7NnF5gxkDjDLVLxdynvPe7KPiZitPUni9U42ePSHRPAb2gemBS4vtW1PLpa81G3Gdtw4oZVu2N",
  "key34": "5GwueYAQphkSvtij5VnvWdF75ataEhxWVFzLPZKynhcCRFprVWuQQ84CVAzQgrzqVq1y1FbEH2LxyMigaMmpwn9A",
  "key35": "5iyF6Jwib4jWxEkeouREqhv1CmmijES7K8A9oWqKf4QCCKvBb4pXxNZ792vYDDuK4PJak93CsUgmy2zkEYhTBJkM",
  "key36": "2NjxzuaYscCg6dmLarcYXaZ3WV31Mgn6nUjMJdG9SgEgAsKdGa6HL7uwBssvgdyQa4Ab7WuU1bphfcSUW5zEJEkU",
  "key37": "4GWNPWUdR6rKkQQetG16aJPqCBH5MP3GzC6LfNr3Re9AXEf5EF9osNwwo938dq1aSWc1bdnEpP23NRHjXWvDjxuf",
  "key38": "5TD98cVsD2rfovYQt2ADHRPxBrHRVVuD3qoUT9RmFZC5n4vvdDTnkeAt9zDes6EaSzYCJyF9JXc74MAchDTtPVR8",
  "key39": "5D8mxhPJUG9wZvMFSmPcAj4W1q1zNUTcPD4rQnbz5zcRDZk4WcLitsMWmm2sXfyftN29HrdwZ2iG3cmF8NdsspVY",
  "key40": "2Yu3ShMYNjE6kdjcinUe8VN9GNgMTDkvQER77wRHWfwChF9wmATpCSYvyc35w1JXLdgRvXmkerXav1zmDJjp4cKP",
  "key41": "34jm3XVmoEQwUMTRZP9euQG6QtpW2yPBgRKFuLvyJCiMMz6FcuYSaDzr1GXg25ZYTQVVhUF8pZtqmU2rxdQeqg44",
  "key42": "2aXx9SvYpjWhSYvncmj1u5761iLXeqK48qvcWFb36MQMu8NkDCgAPHJ6xZnL3oJzVme3CBDVRQi4y1wDK7fLawP",
  "key43": "5qfoXhhBFA9Lye7TMr7QJgB6FKX6rGTpLMdJtiFcCNVPdvBLvD4hmNQaXHaUWzbm159CpyXpWXPnf7DZmRoBnZyM",
  "key44": "WuFgdRLhQ1nAWfwjQd2NXXacuhwc7KxXTaDQ6NmMrJNjbhJ8to9GDree2n8vk6dKtf5cjt8GdRUXMdG8NvbvwQc",
  "key45": "4Lk9uLyWXeDQ99nv8tHHDW4ctyEudd7NC4DHqU7SHq3VbNermknNUfvmA9gsi4AgjQsKESAWjKBtccfnWyAUUikt",
  "key46": "4LsBLM4jTZE89xRiL9ZSzMaDmuo9snX3tgdsSB2BkEDcJc2ohdgagjP2AEFYLFacWjLkZNpvaQku72izPY6SBPun",
  "key47": "2yuNygynXeod73jE2jNCPA5HJ9oxK6YRwRKAqi4iDxrtKpZoAnARpCYPWrXJgVSCRKykuG86pGF6DnbwYj9mwGrJ",
  "key48": "2wb87b55jN28dJxNvGFcjxDR5LUjernfcBbAx8gY9D2cqxkCFeR4cXcDuryKFrKJkxvudHEambR559MWiJsPxS5j"
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
