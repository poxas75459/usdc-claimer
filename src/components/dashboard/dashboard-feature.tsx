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
    "4UqFYANvWWeZnzSsgn5kUwwYJFTPojYoYXHys3CLwFXfrYwJ89czWjqwa66o2AoX1L5pvDSV7NQCLCeS9nu42KBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A8mepPwwYddyLE2KW68RgbrWC7cTwSGAJ5B45fGL7By37kFvf6oJ6EsNVq8s536gXwykBfbgtKAoH1NLMuTzNRh",
  "key1": "3Nnv4jftnLFxnACxFVRsk79KRxXRs3qBqNkzFaLhDpzhUTWuDBZGJM8k8ou4D2FdvVZQUzqViK2PAi3AZ621vgxf",
  "key2": "62kMJfH5Jsm43ytakb6mD7FyHwQqzUXiUvwGxQJ7LCh9YZbK6w5imWaLhnZDyoCiecFhKwEcBc2MQAgUNKT3ca6y",
  "key3": "5FLetgPjtLtjHsrGxa68HWLkXZoXS2FogcXaSxTxjLpLUVPvgvJQKoFCsoJd61eTnhYGhuduk6Mjb5Qq3UMqavTm",
  "key4": "59UweKBRCTYcxfGGdjE4f9QoejPLiSh45ErcDsjtY7wx1xbxgLafzkZoeAKGKguDwZZYq1wsYayRY6BTMzz1gdSX",
  "key5": "25DmpTC3eFVWpj3HjfogCPGJ6i9yMUXUZfUUWxMmGdywDymek7Etqa3sLapcXY4khwqGfotDK5pHkJfUwJyY7Psq",
  "key6": "232Fqtt9YCvBsRtNdBQRQDoeWeYxBzP3XiZPXX3NjNALwiH7469AS4bjK92heYPadMUzdJxn9LTqDn6mPaiuTQNE",
  "key7": "4qAZ3dG9tpaBw836tV63VijMgnkgFCG6qChcGxhUWqs1k9Yc1EXJ5i5UHHuP3kf2Lm1Y8K6SmsRcaedF51dbBTp6",
  "key8": "29B5ShbMZQP2iGMJ9fKj863mhcoodUwtdwXEak4ToQkQaDjJKxBfnBT2t4mx7XHCRJsfPCscJVqkpnR2auhzj1Wr",
  "key9": "2UAhcV9AMySTxWMBsbRcy7hGSvFYvnb1s8LdRQLKB8TMprGs44fHmxauyi4Xx5KefwtCZ5dWDaxXx482M8K6RbWn",
  "key10": "5v9vGnB4QrCxivAWnnAW9XrYtVz9N7HoLDVt1xagjLhDcpeZQjMZE7HT9MqteenFrhAdRD3xED2T3pNvUAkgPGLu",
  "key11": "4JLiEcSNKc2NQy9SzZmuKbcr94zKcJLrcXq8tZK5qwdaktq7d871RuSroUjADu4S3ka5KNRfkwKxpSQ8infM4gpD",
  "key12": "B2K1CkAUqDf3GJLSWfibq2rs3oa9dDUmAaWKiUT33X1zs8pax8wNGViZ8FmWq3mFVAPYc7vSh6sFAMPyEoF24AK",
  "key13": "6J46LqoRqnp23GZx23DGs8cH4c7tUMLFykJC54Pi2FYQdcVi7VTpafEd1bpS9RoKzuvgE3izPxT62CZjGbnZmNS",
  "key14": "5gcGHcXYStMXVpLeoaNAUAmb32LEiVBUYcjsZqaVNEK72Sg72XLJbABm76UepA9q86CPnRPMBYDbB3QWYAmmMmF4",
  "key15": "2TZXcVV3ziKoWkVLrz4Awcqy19s1ATgsFMLSA8mcaGRovJmuPKgZL1JcotTzSXudCimGqj4PveYBF6CAyZ2hFXwf",
  "key16": "EAVH5A118A7CTahEEzYHY5zJpr3p96keyeafHP6NukdJaPvwZyvugJxQdXhxktLg78Pjq3jUwymx279YqJ8wufj",
  "key17": "iGHz2YLybZpQCr1Bj5cQ2PCEs4WkSyQyYzyotUQKaSS4TQE8rCiFpcNqyY2VCoFEbZRute8QxMxoNCYUVjwNjUh",
  "key18": "GGKDicfx9SZDYDp6wpiJxSSDCS1bUGzPgG52NFwLAZgjYGrYeCLufLv4U9SvnmsHQw23WBcQUdnjfwfKDiHtTYN",
  "key19": "DwPnJMV4Vaxett3cLp3HQ3JUfDmNJVQGUjibodAkvB3L4wkFNz9AxR5NZokWaM6gviAMYDiC2uSUY3VfjcjY57E",
  "key20": "2xVDafYG9Dtiyz4hYY7YFKruH2D9w7FX3co7Ry5e85kxJpvrrtMFBMZCsSW2y8Dd3vGBjW95uvAB3Fo92YzC5aH9",
  "key21": "4PXRpyZCStchvYGmMUN75rkk7aJ9BHkVybCKzZ6Zk4nGdvBPP1TgY7TEt2hMGiXSsyogW3JCedDisjXbzaon84zT",
  "key22": "4R3aCHEMWhMXEYDXwQs1owmh9A5UqVRMoP9gQ7siiE597YG6N9iwSdri9Sok1KN2g35Ch6T4ExtcqZGgSFquBF4z",
  "key23": "2dGhneBGVHcYFGbULXK1UUjQY87zveZVnwugvCdbfQKVFKgSQZ9VJchbfWKVF2o4YjCEYNaNeCfvtUgaHwV8XBqR",
  "key24": "52ReuBAL2UGDEj6rCr8erWGyY1WYgvsKLURpYivdhirz34Pbtg2VJ7bZVed9CU8GSmERQsDq6poL54EyMcvDAGdk",
  "key25": "yaf7CmFbKuoUyZByuQ3kx2ngurSvDU2kmZtR7dwXkJJUGSRhfDMPmRZbV5aY1FEpHhMFhebRwqwtapWbu2Eswsy",
  "key26": "34JVQYctUyHrW6qXVwbU8iVoSKnk4dEXybFC8dHERCqkzX7upw7jYGY71ZZj9pyFunUpKRgadDvNukbFnyfF2fkG",
  "key27": "5HpSM96LvfF4jYtvFqjEXedr8CpRkWRGt7SEWWjwUJiMTcbPeig1VHPz9rdiKuw1R77Wzq7Swrn7JySedh6aDguK",
  "key28": "2SuhLtxiNPs6dmjcDCifwPgwvwPAkSZX5cNoJUo7igsFvnvYPmfSJMBHpkLCtZNAtSR8P1N7rhAQXa1tjBr3vtW2",
  "key29": "5NTwFBKe87SbmqP2BU7erYvLghFTvsyezjywL9kcw4DFiLha6KL6vLthoQcvyZbzXUBBonTYKyaMjVjSojP7WupJ",
  "key30": "3GEdB3t7SWBAG3NFSugx6A7J1XDi6t3gVhGDVao7upYFyacHz8jbwikNcK4QXaUnrxrbJGqXvXq66BNjrHsv2iTz",
  "key31": "4ySAhRhSACTmxQHktFnMUiTEwQoFqkwf7M8iHBEvgW6R25N85dJfXwnDz6QLXcVvRXA91FVh4ykRBbZYSqbyyFFs",
  "key32": "4uoWKk8UJ3Aq4Y3brK7AWq6VT88AxdqZeT1ZpvzoVYz4S1HhsvrwxUT4QSHZMtqo8wStrgm9LaPcfBGgWRQKua89",
  "key33": "63mDq278A8CXGX6JooU1TZWt9wymRu1dpKYn1dQePv2uPCXFH2s4BPLuWja5CuUcZgZ6vkCphgMTFbH77mJ6c1k5",
  "key34": "3YYWZCDiaos8pzd579W4tjFnbeCQkPtS2BAmeXNDkF6NNLHg6DrnUAXREDDFG3xYHbaVnLEDfhBCcBXZLosAQ9CL",
  "key35": "NoSuWTxfV1N9ok98d861Ai6RFR6WWKrGpLMTuNT5g3WeJi4WRo5jLzrwzbmaFqoQnH8NbuJQijrozrYdcxA8dVJ",
  "key36": "4FaUZSrfDjdVaNR7PCLhi1ebXHujDwG2MNWp7pqdZ8gQMRhJJ4X3iGFP3zTWENzDyEPeXGarq5UzZhJ2pfHM6KsM",
  "key37": "2Mye6RDxAciYH122VRQqj25cvBKXgL9BrWCf1yYXYumcq9pYLhF2gWyUbUDBYRwbEhGkm32P7m32rozPb8U7NtfW",
  "key38": "2sa7KncxALUvTQ8VVCCaqkCq5ppYHUudrESXyMTuRYAzfg5RegZpZePafGgikvUi7C76zkRJWgGq3iiy5EXZuWRT",
  "key39": "4GyXmMPKD7zHynXPhXsCbSCSF6ZVSLapyyyuNJovLuxb4dDNzypoZ4JhUXfNbsKhfornYMB2ws3LM773xuMtDDFe",
  "key40": "3Dx1KkaHdxNCYBiNEsd3BN5dqDZijVdTEKYUc4tj1cmk5D51aXNF823ytBnZw8YkXvkQiAh8ptvETa1KfNNj5DLB",
  "key41": "5n4un4UMvz6hsnpZ7wrC47CBbeTkFNdNA7hHiSQnj4ib9pKxSGJvZeFrKPPeBGbmT7Lkvr1AFSwx8pVST5zJ8kkQ",
  "key42": "iBYxfpFMU5XyECJpGQ8znX3y1umzrvSpN7xftmrYNvDv7eJ8pHwxWRLBK5ZqPY47Tj7sFC5AJ4Kis6s9LuWNR5z",
  "key43": "5e9a4b6iTqEqsK3Z9otUe6KRUhqBEABEQvdaPiR8UJKQCm1wPu1wpmpwUfDcaXNMMT3y6otx4H1uG5pZbjwdvwmd",
  "key44": "5f85tERLkTwWpLnmaEPgVXGbt2LUYggnbp5miXLZWRw4uTMEKSDsqFh94zDQ74SRuqWkAUL5g9sRheiAkJNpVrnJ"
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
