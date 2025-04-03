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
    "37BrFKL8DVPKvjDJ3LpE6aHVm8M1hG8fmGqG3ZhH9fTJW4K2uG6BPd6dKiem5UxWyTGJigsMXR6PuiMk7b5mgYZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fp4WdYvv8hL9kpvJAdHACTEv6KuxyjTyJ8nmRSxHBo4nqRPd2fp97sz26UAvc5y3RGKc9cC4nZUkLVzeKCcLp53",
  "key1": "2qcdgw6mevtLwS3EzmmCvZaXcSYdVVAf1xBJxHV5eRXMSo8jEet5sRM581TqNPJMvFA69ahLhFX5tSxodX6dPaEh",
  "key2": "rAm9FGhzJi9bHUQwJRyyihTuswukrq8PV5AZDdc2Xf94BLe5GM6NVeHwyoBf7xuZYKb6kWt5a8681Z9VT2zSKrK",
  "key3": "2guv5NhnqAyPu6jmE7G4e4Rczh1jVByhMN32ciAoG8yr2WEFb7nUREDFBh9bHPXxtMEjmcmxi1EYbEpEbtegsJaP",
  "key4": "2uTubLKiYY5XiWmbFXrdA1te7sob6xQaHv4opRF7ECB3U3rt9eyZckiHoa3NWXyiq5XJKG8vKNdMVrtm8kyKHDFr",
  "key5": "5j9muo5fMS755YHeenxQ3i1jmehtZsumNUovnrLBsEWqDczJ8fHXAeTPRiGJZXH7nn2tTwSGcNdXz159QXnH1kt3",
  "key6": "5kFwH4wYW2o6vuk9dLrkPE1VaTY1oRvwaJF4WZndV8mCLGMPxENxa9DT8VPpquPJ1xomsGcnNg2RZLvydkddAiWh",
  "key7": "5srLxLLvDPgK7NKJWFozBkpXawS6Yg1Tzcd4JQQJd8XSSqVzP9p3hUmaevAKnkL6DpF594qJPQbryLsxR2gf3kuC",
  "key8": "5wsNxSQjvBq6K8Af88ACUFYxsA9Cz7WwjgXLitFZuTFiDHeE9FynKSY6vec6qyGSoQ1VkNakMne3h4i7cDKSU4so",
  "key9": "23XgrNUzWXvd34NjaoRKw9CN9VihKgUWGymSCrwAp6ncjgXf7TMmwdY5TFB2WYAykVKEJV74bMaR8DJNRcdNWrRz",
  "key10": "31TZ9Fcj1f2VUag9g5cUXQXEJZAdua9j374yXJ5SAHmDWBShfwUCR3EpiPE8hwYAxEvPiWoeRGXpNimP4E22vqnK",
  "key11": "4cyPTS9dhf7RthUxSu7K5WR2FtocpqVgsGD7bbDS9ynoG5TLc2VexNVzSDu9dC8zC4jshgddi1XXXCeNSmwp7HqY",
  "key12": "3gSXNqbtYndWSc24huqoZicot8w9PKE7EymUex8o88qryfeM3BqVPEbL4moodxqPbQUcKR8afUBEZZgtDAVmNPot",
  "key13": "Nb8aDQPhQQyCV32HwvfCZByYtLMDFWBWJkEzwvdcE6Foe96emReAbHzWrUpvDyqHsS6taxd5uiwpkX3sWSh2saz",
  "key14": "3PBod6WBD7Lyj6hDbTviJsVrKjhyY9ZAWjkoWC8VrkEaG6gF6qixCyUmpzoz1mE2AHbdV2YqoteQLHjWQ44Y3cNT",
  "key15": "3aqaMcuHXQbNfzP3nfGJj2aB8sDueH78beEqQPLsnf8Ykx4eYq9F5UJW2ZGeini5cL6mgat8wSUsMrBmt5zJ93v3",
  "key16": "3UVQSotLDGpiQq4yYFRRwQbMTm4wk6NSuAv1WyiWcU4t8UFijehovdKvz7v6RTi1ZiWmZNSfiUVYmGZZYEimEAag",
  "key17": "4Lew5Y7fL6a72pvQG4Jp7M2xi5Bfz35KzgZLnHxZVfDa51ZJ5wQsw3BonbFZLSn4VmLKNUWqYNUbzvtCqqqaxJC8",
  "key18": "3hNyCGvjWyhBRGNJnkm5UBeeqpoDkz7ubN8EaRZig4WCfT5KNYbtAab9e8QrGgJrFFjPfvpSd3yq6KoqTXScBrJP",
  "key19": "5MfeKGDcb7vrW5XzXzaiV6Z9zuKcr3RSmtA9sUcexgzogGqPAQ93PQ8ayKV5uskfQwMDcyJD22xCLdEihPxD42ra",
  "key20": "5Tp15tL1ntJd9AUvJP6DDm3Evyf58YuPXYK7MaNqsD5FXJiVhxRkvr2K3LpTScUqksXcuhMp8hCFTJDmh2xizhHV",
  "key21": "2NwSsE92Y6Mf9Q8i1TesxRkZmH7hpqxT7WFwjDBxxYVAXGdGVTghH6ccBdVNxh5yHZqjsjwpfMnMregwPt7NdR3P",
  "key22": "2oKDW369uwH6NzEXwUoCeofeopqGojYHDV9w8axsgSAfrvnM6ixqngiexzzv7dfMJBrMCzCpLXuwG6NwEEhoxHqe",
  "key23": "3Fp17YhS8FVVZQsKxCAY76KogA7VggRZFA5zEpQjdiGzsxbjJawddxdmKknhJs9NHdLFNzNR9LZXGAA6NxqQYCjJ",
  "key24": "qDFxsDyx4UbotjiaAcDbe33qS8b8qrvbn9df75XssfkKBuiivSiL94RpHQvzkkCrpUw6eEuQ5VdoTeiEE4BEobb",
  "key25": "3QXeT8eDy4X6oFv59Fz4Gn4juzUdGtKTuiBwd8cBrb6b8ssY3YXq2wnjBWWmQHHKMJtXKQzoDnyEjJ9TZvjYiL6m",
  "key26": "C3jG2LEn2A7nd1JBFD3BTsPiC8P5bFpMQQThqh5YCt3G5ynFbnpLrtgGnwhQgiuUDVBdxzb5QWeRr65S2X8a2kb",
  "key27": "5va8yLYquk1MgEPzmdPfcQhD2X6p5aVtzF778rRbHcAJMoKNNxSWzv9qNo3XFShDx6KbVZ6LaGwsWJHQE4kP8UNt",
  "key28": "2fma7Wud2bYBPbhwVaUgxrFxdfCpmwaen8ia6TZJ3Ky9Zen1L1aXjxBzUJng4UL3T91DTVHb4wVKy1QGRQRekESk",
  "key29": "3pB43KGndZnNWvHytKfCh6AvmLzc4urebs5RSv7mhFuapHVuzttfHFK8HjNTxpbESVDuv1S1Vkw1GhbMyjTjyon1",
  "key30": "4H5BDVkcro9CEVizsyP6NspLc6yXBshRNPTHprmK3XWbYrczMSNpN9N65mYM75UYRFADvuVJ5rLS6zuEZJm73Mpi",
  "key31": "3Ypt2jhTL4TqHFCarUF3kkJypXcEVdudGEms6v17kaJLqUH4eR4iAzBStNvy51DF7sWY4NQ79WKNbRf91tCaqtJ1",
  "key32": "3JhRRyjVY3sNuTFJhZYmaZmvjqnCC9wJFZDUuQT28qAtDbqUTNmRhcqJ7FhQ8z3g3eY6222EZkAk2D1GeaxQ5i1p",
  "key33": "3xbPjbjFHH44RxaSXibXpQpr58TyCF9F4ubyrMJxFc1DTPELsVi3mozsUKj3P4md5a1fiDH3wAvCD9fPRhm9AM4C",
  "key34": "7eMGkKB3Ys9B5sNSfLswtcDHispHojPM5KGTsLbwPZLYaa64FRTiFPbWAMGXE5nhagCUzRoMjZmxQSj6Pepi29d",
  "key35": "4Bwjno8u5mCve9XYRKpTGfmkRsK3WCi5eRAs5gD9ihuchvg1Qs97r4QwFMRpTECYPzgbm7oV4ityHTCmpkBAPDDR",
  "key36": "3KHkBcXzQswS6QcKtdK3WWLwxvM6aHQ47wHaKvnu8ejZuzeSDgoCRuwCqRbaosDhLrBcLhUdUtnSi8W95xGVTG3M",
  "key37": "27nbibccAh2AuWmN1Lxefp3TB6FJvzF1FYm1ACH6vXRoqJAAKc47TjLCkgbwrGrqerZ9tyQ4GNgGh234i6vZzKwG",
  "key38": "2Xb9NwkUsZutbPUXq8hy8g1sygHFFtLn47z2HvvQVgFz684cSrqrq9ndS3TdbfJk3QyBUSM6ShKptkMt9jTf2k6G",
  "key39": "2vjvf5f7boweBwXy4weNhKwjZ5nkP6JUmZwhBVUY6QnVbastSHHishk5c71gShdoYzRYCBnD3puUnKkxMD2BFbMM",
  "key40": "DeZCg5VLQMYpahpnkRXfGWYrRdt5TD2XJXd9qWuKNxJdSvELg1QgK1GcZpwVe9bFAgkmsybz1mqwL1P1PDgHWSb",
  "key41": "2rAgMhXWVVuamYMATFQBqhwPjbhyuXn8n2oNCrqMfsTfJjLJjJUrUT1iY4gzHo4nMxZn7CNJ5TSupAGkbJKtY9kT",
  "key42": "2DRkCtHpu5LMY7i8oA1rBbbtn2YCY25uRSa92rZFsVLjUCTMz3KhsfPBo2W1vRyak8VuyEG2TDUmGmV7kojSbpVT",
  "key43": "bqi12P9fpGPnUZfC6DdqAeBMkzJ22xoWH85bUdNvMzjNQjXNjoaZ8Cg1UwEAdWeD7vG87Bw97pEyiKi1gA2pDEg",
  "key44": "4eYF8mXf3piDQfZuAcMSAmnfkUkG7zwrA9FNTjVkfGNvJPDwFk29BsaLQBTpUXBRFkrXyUpkeaakVvzcpCHHaNaU",
  "key45": "2xN8SZrhBu3xBkNogXckbjb2AiRwYun33VhWx3GroNiCPFm6jmKzZUXKawvtuURg7z9CBobw1JNF6Zab1sZWWkvV"
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
