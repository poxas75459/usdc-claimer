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
    "3zP3Pee27sC7nBqf8MQKmTm8vk8eBbXxayjSsinV6Fv5VggE8CjnrDYLSj7WyAYq2zqwHcPcMcAGvmnrJQQLVpyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U91wfZhANpkvQ81nAWpoqaNgBpKJgShKqWDbfE7TTZRjraxbJBAUfRngwrKppkukYkwRuskBn2nL5GJWxYD3x6v",
  "key1": "4ZNrMnbXjxvH3N7oZ7AverexykL5AfyhRQqafvY62UszEC2JE1fAULGeQKwDxwXgfi8guT4iwTa7zARnCVznzKj2",
  "key2": "4TeeAuq3hh3cU5KtrqNwqPMassRQdf9nQqwAwwPwk14QeD9ucyNuwaFr8uAYgw8LDV6jEaayQHYaA5aovropcU1Q",
  "key3": "5vr2DviywKRi6NXnYqW3cNnYAmEanXzsJFoFHGKn33aANoYqmXNSjBnRWwKyG3Kpp7ZvnMPpwUTbhic3QeGnMKDX",
  "key4": "5ZefZqSE6QHzmzZ3sG7DfNTZLxxuzgr17NHqkAvqTyJkRmNmsFGbgxq3rwjHLxeqpRK8FChXG1Nttds7SpPnNBv7",
  "key5": "4S1abyDBoXsafUGYqagxypwppKRFHaUNYQC91zUae3a91jVFSms1LgFwNKMiU3enCzpVC8PbudXmHmwiRCvsZCr1",
  "key6": "3b5xL5Xmzu8hcqCUtFZkE9DdqChqvKcovCEEz3fAM4U3TZg2yupT9AZKrsNT38EbEsm39XkrirDdtMX7cpMtnQXV",
  "key7": "2Xu2gpBAGaPgH4S5LvhULhT7ewsK7pUeXQh9GjJvmU1mz5L91UMCovbALmXd8KhdKmFb3mVWqakP4XeAutb88kEM",
  "key8": "39Sp3PBsth4SHf9a6aYU8M4iDgn7iXpqSXcPFqiPv1t6eCzUQMRAQ9soWcnt4AfL2oA2ubsPe9bGsSmrm81MLJJU",
  "key9": "41XNguEEwTCkjWBVcBY43TLRx85hEShht7WLtqbfHkAmcKgMFF8VfPHcBpvFPimd4iBqbgG4kgwV9eRinioGpQnz",
  "key10": "67KSsB9KquRQMhgLQkGjmDCoJNqrvAtiGgrQb6LdMRcVocoqMC4aZjrejo9DhzGw5JK3Mn1rpt5vUegbwGXeGUdR",
  "key11": "2mdskV7i7bLFD7f36ZUPBuprtjd2E1gWF2jErgYaVjqH5LWoVXz5y7QqWExow3aH1Ts9WrxZoywQjXZAcY8VbUHA",
  "key12": "5bkARFkBi6cXX86zYW8Hj9UKYtvfG3DUhjyrwCSjKsvST2W6DYz2WjsdfdWV89U3mquTwWTWhy9XS8rt6Q4ZwLKT",
  "key13": "5VK2zqbf45vDrDbeLAUkVBMpCkBGeBf2SM8KqmD39a76umWqJLWAcfGSU3EHzNXAFekFNvdJDuiCDiyW5CZw6ucx",
  "key14": "25ZwUTiSm3jF6DD1YnQQPPR3yrUQ8rfjVe6xQT9ade7574PfcG1nmi2ARVkgS8RQuJYrf9QbdjD1Ntn26vQZAEnm",
  "key15": "Tbpq8JPYLEUDFFyTGv5KC6sdfKHVXEncSNRv4aEpkH4VBqAWRHwvg2scUTEXoZ2DK9oqwUXAJcLB5XL9DveG8cn",
  "key16": "58ESmkr8bCEDcu8yLsUQazYgs467Hih3Cp49igmNhgyKMm5aANH3Tq2QNp259Xydmodu4HVVubfNxLAmpvTkFPaj",
  "key17": "JVHrWm8vscWLPTWfWbSsyK59uX6q76sSM7GiTq5ELmJHyrmYSP92J8F7FrhCAUg4GGFBhHhZfh8bFDjpZxA8bYR",
  "key18": "4ck42wNfmus7SXbP6rhMf5a7Bmh6T3ZckariXZgfGoe6ps1NE6yWiMJVDDkDvADk1qJRg3wnw32vaAPaktk4jszQ",
  "key19": "66X4rLYTkCJnZMnCLpMCMSjU3H48ui8RGnCpE4TFZ8idBLzxndCB759DYuQ6jV2BnAUesm4YTdw3aBgtEum1zqEF",
  "key20": "znHRC6T3pUBV581f5XN2vWtxBbm6pjpa4tvaQ833iM1KvqPtFUxvWXBUpuYyKeoMTvwwRc83LsXztAongzK4SMQ",
  "key21": "2v4ys5jVXTmAKFCBRMy2NvNR2Mh3TQrW15pP1t4NJkeFTxnbTtPzdSE9FbaikhJ8s5qssmMPvMoA9YvE1idoDKj9",
  "key22": "63zxpzizsbdawJzruaZPnJzi4KwJjjhQHuHx5xZua1D5Mk3iyW9axrY4dHz5qeHSut7it9uqZqnQHEhc6qg2RDBS",
  "key23": "3ZpS6Co9cPwyKZS5tARRY1yqh6HZQZntQHkRRjf8P3QJZvnFH7coe8wL1QaotBqrVRwPeD2UGtEtUH6XUB1Ga4KW",
  "key24": "3HXpmZoa7xFsX4rRANnMjcDbQcnQF9p5asdJtnkac68JaiPjPZtXP8JEjrbQW3XQaM6gyfSDS8WjT6x1dq8gAtZj",
  "key25": "4NZqAuBXF1tcc3p5u2guhX689SAYhmq4tfe7cqbecgY7VzmYgCTWDdCLScUeZaUZCpsu5fLGBV84MpJv5YTJNQ17",
  "key26": "41DHwKDqrMGtJJpN4T1aLjHC7zVmhRLnVbEnd16Vh3NX85THY1LevsomFEvzHitWZinBvw4daEVHUXJRmAS4itUr",
  "key27": "58xcguDDVsjsheoP7y4aXnP9daEpAAeUk5EyK7psCVxVjWG6B3u9fE9Y4mfTtWeMwJywpPB6AvvtxUGDNiz3nAZQ",
  "key28": "56nPaT9UEYDcCUnyg9tu1a7LN2WZyCV11u1tHyQVnqnoPi6SiwMDpG1YjWSp94WQBAxu6TarCEY5GWsfVePuCwgW",
  "key29": "2tREcAFz1ovayYkUAGtHyrWzcqRwwK5axPXLws2ZwQbdkTdvX3LvoEcWX9QxFBokksEf9hjrMQqAdJJH2yXWVhSz",
  "key30": "4DHwygMQp1k4VNhhna7W2u1T2Lo1RUSj1W4fSQeSKMj6odU7fFgAV1R7YMtfouaqkx3kfQu7mMcm4mS4ePDr6Usq",
  "key31": "4eprjLSzAEsi93k6Yx2mdYb5BaqVe8jr8GFK8TX6nu1nDHLM4SVjnpeKzRpznigNcpHVg3oA118Zkq2HGy3bbyD5",
  "key32": "2Eq3QkYgPWciEAMuiu5GJK3YGBesX6dUfUGmnYvipiFjBRAoye9Q7cD3arn5ayxQHSNtn3SfFnWZrLRR5icgwvGh",
  "key33": "myVHUpuDFs52rBX2HXtFmLE6ALxL2u2nKL5ZPwJ8M9fZToeRLN5PHBKMSrcBbQ9hJQHCaaTmGAMji3otmJSejNT",
  "key34": "3bFgP4B5VmfedZnvMufb3GeaWjPUX4MY7R5M9ABf6Pum93Mw1V3eNHxciUy4QShr7Fc4wbgHZAnKohe1jmt1J72Q",
  "key35": "kNFCqLvAmXBQUA3RnaA2fTrb2YB6pFQHtHNbpDM562Uh5rJnWcsPYiKvVUVDrBiiHWcAsfBT8GfUfuehFwa2ADQ",
  "key36": "3FNqvBtsYM7gE35eiqobb2f7nUjcyQ3bwawop4U4QDVCyp1SJwyS89c52ZjSLxVDd6jNxhPEZ9tko7nrZnkmEedc",
  "key37": "5R1QHJre6piv8eWNNqTknepRvUNRVUpBFfEzwexhMB9Wgq8HtATrh6GerjbRbwK4Btkx9McucspxQXiDTcrudFi8",
  "key38": "2z27czZuUizrXUgFM2TpgpLty8fA8K9L8oxfAXKU66ARUd6NgwZcXngd5zByhJ3xp3eNq1FHsbNnGfBxjA6gXUFw",
  "key39": "5aMASdPeuvaLWRG7wcooSNK5GqTRqcfbhkVjGneXXLoJVa3Bw9ygxyWjowGPk7449v9feaLjyV7wXQSowFgD3cc4"
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
