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
    "4GLAdmyswRzCA179q14fkLh1kQTnMVsTw35cZNNUJnrUiiA5UR7j9iAZBY5oymjFDUTkqrhGtMmoJhpZbtW3JZvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jJxSH1EU7AD7oSXjsastebzFHK44oEeFsjT3owg8cf4vWxss8NniAMCKjWRRwaKTRKrM7RSVxCYphH5F2NfhNdQ",
  "key1": "xSACK3r5MnhViSCHapB5Q11eundijChkq3zsncbdUb7mQy2Hhcpmhw2pGnC9trzJuaxPW5GiRcXvvjP8yDQHFp9",
  "key2": "2yueXQ8kTimbHLNTezUYRxPLV9kc3n952FD6oR3S7gdJtbTzFcBNtEerCQU94tfbhZdjdi1QebufjJDrVe7J14YS",
  "key3": "2wesNjYasNM1xmJU3SZBfqJnabYY6e9bcQzocuKCSDDh8hG15whQ8F1CNxbVAWSteVv5cAHzT4dRudqCGyQga1ao",
  "key4": "2nTFw2a9PZ7zMmw2m9x7dj7QfDAgGrToG81avkfDhUnukzfsN2L1EPPwfKE5VN61W8zKLJWarfwQSh2k4Htt2K8X",
  "key5": "59dpSfgbJRGvmTW7YaKTbkPbCg4JvxMQ5WwURqVFkqTJSmyzRqUbrWzgFwizsVVdo8pumfJz4Z4kF4wqbFLvshy4",
  "key6": "2CmcjkcDz4ssRtiFri3FTgxZmZGd6GNafdsxjigFdbfvhem7UDyvt3Yzc7gp7fMjgYDGmcDqqiSrZLRrKdWdKdaM",
  "key7": "5Yue9kAHMNKVCtgasUAW6knbdaYnHFwcK7YfnkA4t3pMn5rZ8JnLAtrdgmcoKvo5XxdFmCxsQsWkKbdmGnXWNTj3",
  "key8": "25ecv6v6ZsSoRoqrkUMLaoTfGwDzJ1UNGTpGreWerdR6fD8e3Ro1q5Qm1EQiWDLVWWDJmgjKy9QN9qNGpqSmcRQ1",
  "key9": "4EKHhL7TDoQLe4cXf6eLVqnkbFV5PzfgsSJeBjpE9AP25BFkLdYYdaNC3VHSLPvSbVQB1MoZNoqdjC5hYyg9JChk",
  "key10": "4te5Vf3pF8cfPDCVdknBhBUkHi4SbEeTGjcGqn1qkQhHsd1WNog8yrbrhpgZaSKTrvAQDmUyHxeDdG9qUMJfgsv2",
  "key11": "532mtarUxQVLMH4GKABj7yKynZCz78oSRXEAQWUMVmkfqkZjdCNc5G6xBd1psZJxQpeZv5FVu8D394CKuuVa1Qas",
  "key12": "2xcKrs8jqLSFxhohj9eK3FXVrqK3RedEh8ZXLAWULqf2pVU44yBAAxzjcK4iZZP4GJNc9tLHKjWBQyYarE3khTYZ",
  "key13": "4642RNQBsax226K3WyDhh8mQUFGeEiJrxcVcLFb2tyupWyazgqZFNeD1MfmLFkLv1G4c8Rx4jG7rfm9y6oTUyQh2",
  "key14": "5ho8jHYfJ76F2yqUoPy8kxpp6iL3N2LNXsHRVV6kMSvKQbujHUo1woy2tqijEsSff7FvstbG8wVSde62RrjfzrJC",
  "key15": "n9u7T6K2dGGpVpK4k98ozLJPMdg7StidR4vuy4HFVNZ1YLk5R8Cig6vti4mgwQZR3J2NGGj1teXCvGUZcPLhx8H",
  "key16": "4EdozqjGuXcJByxy1cnmpY9VmZ1VE7mQ8CgHpv8fwu3YapHVdWtGTwfKSiEhPNhKVY9dDJYTZWr7NY5ypetCiKuD",
  "key17": "5YAUM775tFEN1cXKb4hNRp4HWWZCktK7VBr5HMRfvj66zYwEVTFaigyqdgPzkgLUWF9ptDFEzHshwJ2uLcxvUKcQ",
  "key18": "KhwjqJuYKotLeb2NQjHZj9i4XHkmXrF9wgvgi3FMq6oHR2gZ3QbjYtGXB2QPPgMTwApyDsB5HMd4tQi1dxviuug",
  "key19": "S47uCiouMkMjcM4AKmojdyjoC3qQFDLwZVW6hJMJtrBd14nqA5gtZBtE6tyLNZb5xMkPTRkQCoKqNw9Qry5N3F4",
  "key20": "BaBjECc5nKBvCjRQyRygjQMdiMqLukbCrSXGiPLPr5zmtretPFeVh5DBsoCVwKKYQt2AvMMi8JHh3v9B79LrWtY",
  "key21": "2nGczwFjJVHkEJapa5EWWnCED81pQcsfa7AL3FVjAT3M9LwvpWW5Xmy2jhVrVQFSvC6LSL8WJykuJbJF2zx49FCT",
  "key22": "ZJ4XZhLf9jc5mgNJXyUx4m47GF1PmEft6ed3Be2kcsocMRVrBXXgfsC1F5ixAGMprm5MmSwiuCuag969khc5g6a",
  "key23": "3xJrpBYHs3hn2yLL5PwZT8hvSudTrpUtNTbKMuNB8AZ2z6hCPPMJ9kqc7ftbi4bVMJ2oDAwPu9HotzXvfbybPdzp",
  "key24": "4qSp1r9PJxBvJXiZCr7WmfmwFTDAmmK52z5awWWJFFPLoVMjXrpw5YaAyaKdAXQoSy3WQFJCfgVygFxgMvyciDmK",
  "key25": "45ob1C1KNBvET5WmSmkzivNvdqRDxqb3Cito8jP1s94XkfHupc8p5P36VqdEjmzi51W21xsJzYXTEVMLqC5cwjuw",
  "key26": "2o1gB16HWUgrphv52rcke29vi8MtQG5Zj6uiAThrTMfQuEY6oc1QujdC32tv3JgVjhMnEpGP9VkTNZdVDGWUaDv2",
  "key27": "DzXxpjUYqjw3tdvpLzPRWyp8xcRctZRXXcHN8NpniyGUjL3MCUq2K6We985sjshWdxh4GmwEzwbfLqLSD5hcQxb",
  "key28": "3bYcRN8YkE8tH7vZZNd8zJnKDg4quCX8H8v3AGTQqZZU79mj8we2C7gjJtvgNrGuRXtctXbFnmq7x49P9NU4UphH",
  "key29": "48kMTxv9o721bPVMgBQihDa32yQJ3g72xbT5boZxwrznySsYFsYJTTLg6WrwtGKPyMW1p9qjWRxuj14Kc9DRNvv5",
  "key30": "2r1j7ZT87SQANKNseK3PctPzSds122EMdTVs7djztBXtEgx4oPMpV4atuUkLCcqw2WgfKBBvDCDrchZF8dDe2dgc",
  "key31": "dvGm5QDiBLKUwY5PFPHr6E8AxNt7huLBCqNtBZkkqBjqX55FRZnWB1AiHXs6R4c7G6VF4JtC9CL2L3mx5xGGAu4",
  "key32": "3XtF4qsHR8eks3hZmW5deSRip95EiMYRfKoqBCVWbsL8JZuo24e6K1k8qsofGdrBvYPyeTTfjsRDhoEicieJHfbu",
  "key33": "3UJxJBm3g7eiwPCGDvoGVbGR4rEc2Y9QqP5U3X1fTjVEvNQWFWZPjzsedfBP9CyY7Hk6QXJEaXARXJVT1cAUGHks",
  "key34": "5GFaznA3nR659Nmg4wYcR5F6dp1tUkW3mepn83enx13NkopoF7R7DhuRJxhzfxNpZefunmJtazPHb4RpTyF3aNpQ",
  "key35": "37KEbLE4JABwoouLyLEJkCVgU69EjLXnJfFRSppdrT6Cp1V2fS71h43ZAcLZgpxZC6LwzkK1HqDiVEmaeSH2WE9j",
  "key36": "bULeBtFWyESY8iCYo5X1gnfA9YGETg55guJAejYaC3w8Fio4wcPwV3nMfpPNjYzCa35qWJP4u78ax21xgX5P9G6",
  "key37": "54row3YEDnYyMwxfiApbURS7PyFnhXK1a6gBr8pJHMnLdb7RMhjG2wJV25BKte6hQ5qd12q2SgzFS1PKzvdEpRwb",
  "key38": "4LDkp8pyJJE6xMmkMV5dMR3SnSo7uNLY6Q5x7A5bhHsre4nkVjyLLnbMYfpQaijdH6p79ZNk8dzzH2f7XmsUPHXo",
  "key39": "4fuSXRHw1bQv4ZkQGmbZkkaabp65pundpEk7jTqqDUQjsPoVRVoCYBkMrwjcghhwyaDLxNt1KLUzC7jtMPEiiKvu",
  "key40": "24iqdZXXbtThmPPw5cJ6pGFgVwwgyUiZVCJNwdcHuGGCNLus2SdBHEVEQQpd3WA2kiwCuQzcpTwsQu4mLqFYa3tf"
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
