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
    "P4Za7RJbizCu9NkrpNm5fghkvLccbfaj2BjBV8RZfPZvmME8sEu5neeiMNBGZLPwG3jFQ4AX2g3VZwamKZx7NdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "675RdLZxNcoZAey1ituk1WBL95eDGYvceWfKCpT19xybjVfmWbxaXsWGvaV1cywY5mHt6hDNgg32MruAsucyvXSH",
  "key1": "4N42q3wa34AoCh6Z2pvqH1ZXWKBCyBaiEAnYCgbzaZxnzkCxemNDcESHw8pEHGQiLfAj78Q48gwgq6qDb4MRT5NN",
  "key2": "4iq9BNGfa9iCnTS5qbD3cigu65bZmjBrv5VjwST1G9if3ribfZRqRhvyR8AYL9GZ5DxJvDSan9UNZNa3gNWv3fBp",
  "key3": "qEyoPYhNoZeQpejv9cFxAEdrnHeHaybF5dmn9Ewz9qV2V2ehmcNKegFqiuUced9J8mhb7cz7dTDtA64FNsd4ywv",
  "key4": "2AkypzULqqqsGfkSE2Bb26Jegm8MqSyaVgXNkh5MqQAukw8oTMAq1SGiKEp9WGErQx41ixNG2tpp9cpQG6dwRGhy",
  "key5": "2VsAgUNJotkuaFGTAYbkLsZDahUrBa82y7WAwAmuXH9bdixT7gGZ8FtQ5PzfYKTgRm3qF9CWWdakAArHRET1L53H",
  "key6": "aptJe9QAcMpPCLtiBAimuR2K8Bo8MtrdqSgE8DMj92C7djNwQE21NWzW5B5faGe6XdTrH4nDV2oT1D4aFNmXeUs",
  "key7": "22WwQRywPryo77ecUqnPTengZwFK7MbLFzwfoVCHCAzJ7gr8UsuKh2iZ6d5JuK3uk66oLFGH8gWZ9wpBK1vNxDPQ",
  "key8": "3J17EFNcYBSCMkzqo4iH2E3ZsbnUf8FqKU5bbm59PLFffZLSEgeZVgc2Eefv2RU6jNZSaxKv5rtbT33G5VFrJ6VW",
  "key9": "5sDgcwyPbtPsv3dvQHrLXqvwMyVMqxtmbMcsM2MKhXV2srk2rxbFuxgVmQiHRbaQHRrgNE1qZyYEXiqR2Qy6sz6S",
  "key10": "4NhrW2W4KkcbSvHi7KEzZNKG4S3CajyH7MUXXUmkGAkVcqP4gq5pJUV6ktVt3gekoQvaHsNfksnGd5VBRiRifPgg",
  "key11": "23QMj7x81xcZnZ3mnfVCiuevc8yL8kU19wW5hwnKqBX4qsEUW7TsjE3wPxv6GVtEqcJ1NkjV2hEPiiYDcAjPk5MU",
  "key12": "4s1BMCzJ9cL1YL4DPDXiGZJrJzbejqHHZ7U5gmXYr7WMPn4ToU4kEKs88BKyE8drYggr9cQzA7VF3WycaDMjS5Fh",
  "key13": "3MUCZNtAzAWFqtGwm2v9HPshHHmcWLx4WqZqMeegBGUhzstEDMXqUpx4ojaEDuSG8BuuGPSX92G3kTh3Y2odQikA",
  "key14": "RvjedBuDx7NxTJfdcrue2PSLSbr2d6DDp48y9gdQkNcA6ynMaBBpg8Gg2UpfBbVvx8vNU8UDdPQcFxnQtrh1gz3",
  "key15": "4nLZKEWfmb8tRr7m1avqmeaBFjd6kJHRxKoteeDxLj6k8WDTBd5QqWJMme2fH9ih1vDzyxJrTTaJZ1hYfDveTv3y",
  "key16": "55GzUCT8iDHsDVbFFRQLnEaQwhugUNzyxBY2mLC7RJRyKRdHNztqHSvnbE8ozxsQxLC43NBA5KKBRivKBQigvPZn",
  "key17": "5TXmCmonSX7ntUkVEikM1VBBFnSFLw34i35Mv3EaHYi8bv1ecJPKWM9c1pJESmW5XthUDHVUT2tHew8EkQioQkxM",
  "key18": "2xEidSWs9zHaFVzbLFwkpZ5U9duTxLh7y3nJEHMw1dELP29Lv6jSYhLcgEYCJEqT9wq1mdVhrTND64f3DRocVHwi",
  "key19": "2bMb5Y1rTrQp1Lsj4TsjDzT5V9nQgEjF9CrrMGX4imrip7the99Dtye7cURNJKebuJuG8UvJ1jNDLWzYkZHvSQRg",
  "key20": "4jg7FaA1nqDXoiRvzsi9yoJfN7ckw3yKUaKCnYDHWjBwMCfoM7vpZ6YpR39UJoCPJmy9UFoAMzdNx2LQWn76FgvL",
  "key21": "3MdPNRXMjaQJRjqMjtXYunts24JRqGXn83T1wmdLKcWqAMQRVExUXDx6D5yTEav5vyEZRpoZwARPmqHCiYV1iEo6",
  "key22": "3VDDngT7bTUYcY5nZWHohUN5ipPNNesrnEhAmbtMeaMz4FQds6AsUbjUf9VTjqfwaqJJWCYGQtcRnXCCWAQB6dKd",
  "key23": "2z3PfpFQTzxFmceNf7wedM6qAn8pxbsUTMm6AHsuBpiK6JRxDzzD7K8kYBYuJ9DtMj499VRko7XSxLqQHrTjjfZN",
  "key24": "hWdnW1jC5xpez5TnuahPJYYQ7xkggyUUnrLRwEjTXKw7tvrTNWLXsKGkhE9S2LqW4cUEr2v4gn7sbwcRNa6H3X7",
  "key25": "5gULr9bkrHzNHSUNYEyxX7jQB4HTA8y4xdqojXZC51C3SYKqhzwJSE15qdrPUb3jqKstoKg8ccJuvv8acrGRDcUz",
  "key26": "3rWNYoV3Q7J2qrNajqrWCMg8NDETU69bFhWXCTYpWCeke2fEFsYjRkd5Aw5VoRT5HvBtLVkefrEXDZS29mEtDKiD",
  "key27": "4Ems6t33f5dXETs4Vw2a9DHAZGWerKFeHqpnX9CbX78Kd9pgaJVasuVFKHwpiPG9dvdReLPa3G4pmVXZvPVJGYTi",
  "key28": "2pwsw7KFynVK2SkGUd9AhAghufFD86gwg3urU6zXeYeaXTUQFeA9sF5JwoAatBd63VxcfBfGvsD78FaqBEpHGgge",
  "key29": "5Z4pqrkkE1SnrYvHo3cRzGDYPTv5QPmj4CfXydojGHvBSKeFrkXc79JuoPnKrxTZb6oyixp32joYRTnbLkuF2NKx",
  "key30": "3U4gJbqcEZ9VsumCUzP92WjrxKR3ETD5bUZMEpe5WgBjzaNcNcndzVtT5575KUWpiJrdz78FonKXp27WJMU9VCs4",
  "key31": "4c8QDKVTRH71N58Uenq5xvLV3iAMLCExdDtNEF9iyNk6g77SB8oap6uppdBTyJ7vQh5mt6BbEq2wMt41qFepVNMZ",
  "key32": "5U2xd3x5nMk6NqHHLS8y3YVpSew5vkZGAEKrCQhQH2qjKhmtSg7tiiwXrkru6odmNKmCZcAtb5TRBTbDbPWVpL8E",
  "key33": "BWuSDbscEXNXaBQqHHmqnh7rBb26XZUG5HeiVkQ3MSksge6SUiPhrXtMheBqDo9nXVLzSaqZfc4ja7zpjbP1rm4",
  "key34": "5g8qAW2aQHTqup4KKXrmmi8q9rmyxiFTFaKwQ7CUhmdbrCULs8M3sU4RzxMckyBnqRBfF8CWYXuaakRCzj6TZtXn",
  "key35": "7ejMr6o66GcSEMin7Kumb3fWeenD8KDKkqFHL64Ezr5B1aWkSnUp9E7PNmNpztjw1KJtJS2DFLPraix26TRMvf4",
  "key36": "2NVgf2NFU4vQB72sbiQP2qj9xyxWXBdXvV3p2RiaEwgzKMpxwbPhnjxso8zRKnkZYe225935gGM7qHjqdacb4ss5",
  "key37": "5ZdfjrdQgjic3VoSJTi1UT4timaNWS4hK5jKeprFDgjo3RUgQ9r7QJ3PKy4Zn466dGoToTsoCSvkTnFCVijMN1bh",
  "key38": "26b8resziSKXaXKsL5EuMt9iJFaafNT8jX8yS6KMh6fV1DukMoyH65dWbeGxj5qnCno5RRe4MxPd2QKNGbMDtipe",
  "key39": "9mwjwZgJWkUS5wXAX6FGp7YWdfYdRYVNQUEQhKLrNJzjEqLuyDmuCJwPUHiag8v9XpsFbPeqZ3vDW4PUnBNywbc",
  "key40": "4jeznmQdc7ZyErcpZSid32Kce8iEX1FZjAmJMRcgp7TeUmfQco8FmwG2q9NotEVyXYekY7VLsUYQVBsqN68MToaP",
  "key41": "3QBGYfTLWuVTj9xQcFVghnHw6micdZSHu1gUhhttLT4Fe1duNo1FnfBCWkyFDukSbavfQR3z6kXzp4iU6cwMT27o",
  "key42": "dTBKfFbZfPetQ9MvTiqJUFjNYG7mCfiBuCdQsCi7twF322ovnirxsjJVXeuTCo6WnbK3PyR7zi3JoLvx3yqxqwD",
  "key43": "Mq3DnznhgHmHvKK1KvVfFrARAKqdVQVokjo9gZpNGacuz5o5FfRMKqTLJs2pVeok5WitxkBEbBfE2s3cvLUBk66"
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
