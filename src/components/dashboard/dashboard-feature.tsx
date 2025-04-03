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
    "2vNsXMiinT6nJf22tKrPVgP9Zr6Ubhqd4uHk8wUbFkriSAD7QEVxbWBXD2GyS7GcrxwWLHntr41gBou8imyPrn11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DwbrHsv5XCunpJrFUPpPZDwoLc1uZfT7soeEA2xqvvgCxmX13zgg5QDNDsqiRDAF5miSGKH5E9vsdacUPY4uJvy",
  "key1": "4pT9Ly3757atNDzVNm6qsuPQEwEm5kBb3P7U3BdHb35nZz5STF6d2jKiVt11PZpdsGDfxHfA1eLEp1b3hGFLjpxJ",
  "key2": "ktCbJgCvRZ2cNDXmbEGvXXv53nPwWe7ANrrfXMppy5VdNQ5e5chQ4zHAtQ1Zt6ZTsYXvqNpjrZJxyhtVrMTSwkR",
  "key3": "AbyaVkuHpBCuZPqbDs7zRfUf4yTFtQP5eSXMjY6wvRy7zoActLZxGQ7ymNz5Gi9YP2U86m9DF2GinvYDgw84Tfr",
  "key4": "4HCpen4FmfT7yJ43PipccN4Jmj4eZvruwAGzEUjVktZGsqvUYZ7K7ZYA8jBcqsf5qFcij6PXMoFFzm6ruSQ7rYrV",
  "key5": "3ijHYhbt3WUifzREK9mr8N9CYPkKbQriRG9fzNPawds2o9axVAAWpoZkhcgTXcRwLhQaorWiZn51D7AKwjedzonW",
  "key6": "25agdhgrD4gdMTNnhjxJQh9X7WRsCpmdj2j7UbY5sKtGoWMeb94z4Uovr5KUtFJx3viYCq9dRN5XcgFn7VVBxaMp",
  "key7": "2AA1ZkpwpNvkeGcbxX3Kh7XqtRoM6vxVLiDdMu91sS9r8xEht2nNF8HRxE5E8DNCAzRsTyvGWdVkrByKdAQdhjyv",
  "key8": "1kGSrrtMjXnwWVeGNHxXANFW66JoSP5t8hzfe84aEFe3hvwPPiRxfQTz8iU1BuoBazhpMoNQrh6xGqLitdDVm5C",
  "key9": "3dMWgPsvLARzTLwHbGjsjvrtPBrwsrSgFAqjNvHzkTBFF6J5GGR7iibfQtBAkEjvuE3txDFGU7o8BDuKJk1nteHK",
  "key10": "46WCr5gsMtv3RovTh9GLSTjPNXZpD5gieBP8Jq5JSb9Yfb2KusqgyYnvkrLSfgFST6K3SDnE28b3A32TTafmf44d",
  "key11": "4GhhwwF4AHo8dZjXRnaDVBTGed4cqSLmiYp81sUHvKKH2gH5VdM2cBzt3BbQFoPLMYUc7A1tqTUETDqtqUS85Nur",
  "key12": "2fchCVenHhYMz47MrtrMGVMdSD69yoQPvRGhHPMfDmZn2NcSx2vzM56cV9PP1tH86qeotnu1epiYcbk4xppJTB28",
  "key13": "2XibmSs8NbHKGLbmNCpMK1kUhG8sbQoNFK7fxK9SvcWjivUfnWQ4tXbY2246VU4EUzqKoNdnA1wKqNEYQFbnHVhM",
  "key14": "2r76wfE9Q7ryJLyHiDSjC1pTd8kzDmonAKpAgHMSKZGkUv7Ag3PHeLHceyhZJgKcNffiwjpH2iBf3c1Mt7xxDanw",
  "key15": "zpXPtkQ1sqJBz3muFqK8PRU2mcaoNC8eB7GLrdfz56E7mHnRbG4ZVZHoatS5DUtzFHW5D1wJoCC6RpDEe4KdQcG",
  "key16": "3bQ5fNLkMkvxbrrxqHZJL6zFsjKSAbWZjC3ofAbgkPxZRQu23TW6DGXq2VQaUtufwRew7ne9NuNzhAWLkA1X8E69",
  "key17": "4ZcnADwz6DR1Bs3NnGUJ3AjKSxdg3Yf8pgnNz3ZmCpGRDfq346Vr8yzp1RVykQRidFHgQh8eEtcvzTdvBnDUkHFZ",
  "key18": "4oRYZaDaNf4dRzAoWiaBdLH66bRMT5tobWmFJZmksXYgTKH5bFyHH1dudmbnQ87XX7RcKxw9976e2geS9GNaj2Fs",
  "key19": "9q76aa8CTyHRMS8XEdSPo8JaVcXqZUHiaofQAsDk4SHZadysR3dExxCndwCRoBg91LvH1z19ZfbNGyPDfRZBdGo",
  "key20": "3wFBAcu4paLEkfRtvbfRT1ZjjnmKi2uYEkowFdAe15LmiEAdXXmka6kAo6969Zi9dmDRCXsfG2EstRFVrEZD1uhM",
  "key21": "SpRTTBWFKGQ5YhMpUtSjvhMeVqxLYsymvVKXJQEzmtzGauncC4ChcuMoW1soZeifuAbgFiBxqg3z4oRa6X9DkmD",
  "key22": "TYck2FPTGHntDb2NzizVUhqTvRRDr3uekKN2YQZfVKnvjCwbHZWXFvaiVVKpA8fZYVmzzUxCQFbZGTuPKBnSrfJ",
  "key23": "5Kt28bRFsRiGBRQuLFxNZj4w5QxomQH4DRZEsfkZHX6k1ymgiDqKHrbrLkxShUYcsbNpVdCdz1NAVvkEiYEsWWSj",
  "key24": "2M3F2P81UEkTw8qgmAFa7ija93u2RYDwoh8DDtv5ByNVaXgsYFFyfbftXygRuFE77GQmHeQBLhtvbJVVErcGtX1G",
  "key25": "52tmK4Qy7kSkTvB89tt2dNm65UGRiaderYsn1XQFszdRCZUoPvD629cmsQzUc4jTjqXubHRgqtG6Lk7rKFqC2NAq",
  "key26": "3PqniLNWop5kWvGUQBvpWJY7RBsEAnWShzh9HYiLt8Z6V4qzCg5Cr5EkqAW63fRL9MLAtEq1oWgG8roh4uikmsUb",
  "key27": "QimrAUEZWFPvRonE6pqsLXFVTom3WQsJD6pLrKHaRg7N9qeN3as8E4jes9wS7D9n8GqH9RpTaytjSvZ92FB6y8H",
  "key28": "kEFaEoRonohi9mwbuqcPvqRAVzjrghUwLUqmDuqSaLHWefmivF4eDQqz6LikK5Rky5nKd5ZoCgamanZ361e3uAu",
  "key29": "3eyEGUgGjFAUuecZw9m1LwidPQGqPJqDW47XF4RY4Nc9RtcwBrwVhWmS8EwD9G9F9Tqy3YrcAGiXYEL1h6vLCAmT",
  "key30": "4GeySCCG7bu27RxsAFvBtnso6okQ9MmZ4MX2izxNTitxCskR86xA3EgF2UJVZ3wT5kw49LtZ1N8FXx9s9rMaCQ7c",
  "key31": "5WhzK732gMvhuVjWTZuCF2BnsJ9Le7Uj3cJcwGQgbaznKXHD3MkKa6LFiFL8CWMLWZwWL61ZCQy2pm1uffBGBkoT",
  "key32": "3Qgiuj3DcwtFTdc1YG4jDSTG7UFpxGyxd1oA4tGwz4v6KSaL3w36qF2ogonJosudSduADDdyTDHYPnS7KGN4qurn",
  "key33": "3U3KQpVLU1Y2k69E9DTyqkyeV9JkNL8YZ29aLgDbYa8mRYY3KgHbQAGujQbXsEbbBF5LVwUWzgtD4TdLnQKg2yNV",
  "key34": "3f1HiFDVDcuDUkFijXVsm7bQxeYgUyWng8pRajwjwcEexuGpYAL498W47mPLrRn2koceJdCG3Yy6KbrR1uv6NxbT",
  "key35": "3v6HJcPSYij7EWHWSG6NviV1EWasjkd642L5x7Q63qCh2MJ3WEGkHJxgcCEYGps5XX1yTrv2FXa8XvrhWr6XbMxj",
  "key36": "4cRvKcVeYpKVLcFuYr9fXuto5uvLxKjbDWPpb9aL7JqKnnXbEenwZSmjkWULDE8P7FN3c9PZGhfcQa5tZW3kbNQ8",
  "key37": "5LSt6qeFaU6KSL5z4AiX8FaFbFuLx2cny3SNBomSruHLXNVY5RSPFHf6t6HiudFmEhpG6ndLijpkdsBNQ7GZRTL6",
  "key38": "4TfrdVnGGbSF9MiaR99fH3W1wBKp4FcvssiMcQqfqqcc2zLJqiSUHb6hRz8sTH2b2iq3MThx3sao7eNtZhKXqq3p",
  "key39": "3SN74KZDFF8VXNcQdq2LpMC9eXfGn6Gh4QwodE14x6ySeKxGNm1RDMwGxzhFNnMj9itsAphXRBZznUKHD3zRc84P",
  "key40": "2wfwYVhPoDjwaA3iYK7ZSwnmPwZx8j1gsYBboEcJkdYvBAUp6VyAPYbNxwRxmtkYFYbJS4ws9nqE2KoaXCCCaTdm",
  "key41": "2gXFvznYYeWhbRepD8q5XME5vBmS9iSTzpt8dKw2SEvNTrDPLNEpGwBa9bMx2LN7yhtDGSnHPSUZexJtAYccga7g",
  "key42": "3PmfDG5tvTqWXwcQQBruMgaPwsz5Yg8RfoJSc5Z4PPTujZKQQxj8PyRvNT8CmQgV7QeXKtu29KBkKvqUj7EfvkNX",
  "key43": "42SixcHU5BJ6h3cd5YsWYoFQhranLYuBgYNaezdUK7yM9bneX4NvsMRwpLT5aJfShWxniGDsy641VwW5iWBPiktG",
  "key44": "m2bw1YV161L9b21hFajU3JuoYWg53Dmp6L8GMQSKFJd2pYzHbSNBMoYiLsBxXJ69eEPxnRiWBPuYNKwTnCnkYwp",
  "key45": "2rXXSRKsmqEjBbv3fk5f2GLnHtSF29NvRx6FhRzQ9ZNCm5eu2j6F3jZpGgUE4WiHVAYVuX2EbY9wxALJtmXAKkqx",
  "key46": "2m24azfbbM7xMfJJrVrn2u1BchFdXzdgpnWanLg2zeuyTxGy62oo8Xd6WypBK3YyzkrccU9tWjViD2ayzSXAoocV",
  "key47": "485hC2kYq2WeacvrsyHMymRHzw6R88onqAgyjAeLtB8ajoXrN57zFqjNRGw9v174ZdrTS3KTpEmEf8fSKR4jwkZo",
  "key48": "2XcagHDSG4QEWDtwPHkkUYgD52FL24VKzycf8KvCJtvqZL7MAEnUBfYXsuk86rZ9wybSrn6vhSWL1fStju9kHU6v"
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
