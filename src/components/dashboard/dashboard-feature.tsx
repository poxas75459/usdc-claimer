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
    "hzsGWas6mMbU15RCkJV4NL3LWm9xxYiTmR44CvPrdfNqu9iMci8D2MgZQujChAKjTPi5CnwRcm9rcwW42ou55v2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H7zpYW1gT9m3k6SfMVsViYTPw9hhJwwEMkFF2JXaGY6tvD9v2kTDQwxHHNnGgdiNoVAKUsd8P9A3SeBBCjLz2Dt",
  "key1": "2Qz4LXgku2ZieyaboHhxDCVw5MA54DVo9ceXFRR7KD8ozToNgkWJDjXfqG174GM4Neq68K7CrBgP7nf1Hc8rG8ED",
  "key2": "5mh2Gq81sGADDRrXHybfY3rZ8jHCK8gLgFaYwQEYCy1qbY9EqTbvyp3vHvUs15CcspfKqki2PgYtyS9BuvMKFonx",
  "key3": "5VpEMVN3YX2gNdoiSoLs6RHtKGmvCfEVyopaKKiriwTpgb978ks8iYAct8L6bEbtUFJs7XJNwk2CYgKcUzWtvXp8",
  "key4": "2PCCWJKbS72jiXtP9xHSuxBDamDhmsp6YaiH1J2QqAXVr1BB6yftFWTkbezDmVaVpXZTMPkcKxPAHNLNnzPEBzuj",
  "key5": "5XuMBTKWFYoVGibsjazDp4rw3osGnw98Uw1tSrU6M2FsX55tb667ChDfbKZD3xjocaxSV2SvzbcmZ39ebVmrxUbu",
  "key6": "22yq8kz7CVXGXSXsM92eFshzYPbm9Y1nnoGBrySxdx2uaQ39T1YmPrFE5rxoVu1KHnCEzY3n3xbHfDg9SSSm4Zsv",
  "key7": "5Qx49mWFGg1VZwHAfhbGxLi7RqGLsrwot5s98kJDSMpmvJMGWGNYXfKAkCxbo7e1nsuFDX3VUCJtgTtjZAq8RBzn",
  "key8": "5Suz6jwqoYJc2HuDRTZyVmKFgET76nPfz7xHQiPpCBqcKTiZuy8Y3R8MujA5eHzHcEJsgM6KTbuGEwMwYHB6V1R1",
  "key9": "3odsWubQTzLPEqbfKdLgrwt5i359cX2Y6q1V7DLnjpjtJQ9hfh1qVBz6GvM2nmwvFy29sihBuqaCeQTGMeb5ii7",
  "key10": "5B4ZWGqLYuLrCN5LXj4yBGYXAqba8f6zGqdPw5pMvujbLTUNkfFvDL4hG6zmRiXmXLLhesLp13CNvpDttUnymydi",
  "key11": "VBHcex5VHyhLXWLNxLv2WxLpRUUX9kmHoVfShj3jjitFgPqTkbpwMmHQWAk4WiQJYx78EdY29tfFffX1TeK3TfV",
  "key12": "57V5p6rHn8ow4FtkktHDTnUZjtYqVw5a9RQEGpb5Cfhpo1TgwYi2PYY74VTd31eYQX3g9ytCVWyaKWRCP3YiqCX7",
  "key13": "3usdZ4nRgKiCSXAj4sKBCVncxLNde7MVvVq82dRhH5aYnkEYH1PKyk2D2gJhU3gzuECC4bPe626TAFiGuPCFSkd5",
  "key14": "3T5bcDedMZPkExHerdGEr4RBKPDTeJ4sck1C6V7k3ypTdmY69AcEaMUYoqP2WJgXuBBnbsEHvGVDMXjPC57uNv8",
  "key15": "5yY6hAxvbS4EEoSgrj6CqvjBJk4NtR6Bo5FgDsi1RifcTXfBch7TshCCNV1rB4vFN5Wkj6PGRkn6Ub534x7VmHkc",
  "key16": "3kvSnxhJBi93EXL1sSTCAEvDvZEB9oxaFKZoHZEEyfHKXf5GnzH2tnPhuXwx9JJyViAEZ9YC9nMcqYNLTwGW1Sge",
  "key17": "4L7QchuBtnMHt9iom1SKMrSfcarMHCbSddcuPqsVoRufmBVG2gv9TiX4BKAix5sMRR1h2mU6AEsuD7GcBGH7SdPz",
  "key18": "fTkfabcDkGdPRixZjuoTo3vt71CDpo8qNnQ9pZ5BRbzuM6ZKrdxapeDtPM66KdcTBg2JzJ3kJcjeJdaP1dgzuwW",
  "key19": "3ZoovkSxMucfW3y3Bu3Vi6YmUmRfMgepBW1xpbu9aLqzyisNFUkHnSiFTpYEspYCrmL4sWhSnF2WSacmktVTQ5KU",
  "key20": "7ePnoGWuNBWLWJmDhBxSwBLeGijhEKUGSP9khvCz5kge5zePfgydur4fJvdoewahaAtiBWa7RK6aj5cvjfAdVts",
  "key21": "5Z3haEeJ5Hxj6C5w2TQixyad1UaBRrYjfdyivFTCYRqREZvj6vVTxbhk6m5rYPQegucwPNP9LguysDYgt541Zhyw",
  "key22": "3yjRRyV7KLEMyU5pPR1Hf8F3qhtKEYdLPh5FFKhvZgub585MqaBVW1mym9rKQC3HhqenRW2XpVLHDAg5sS14xyDD",
  "key23": "5AFNvWso6PGS2AkheV1eCsqL1ie5aWL5wqpQ7f74oESYJZbhUP4wAyS6MbYFmR2uMVioRao9hn7AFBS5cPUTfvFN",
  "key24": "5pobkWMYD7XLfJJQEobhwcrKYewHwopDYvhLiZGCJRT1Exv7aG4KL2VJEQ1L1s8UYU6PUg1WhahhuJYuTyqcKPwn",
  "key25": "27gBkq5aEbjPTxvreT6dkxQ4Up4RJ4WkDTgPGwdFa5g95qJRzGVV6MNa3qHZiBRszXDPwhkZE6qW78VW4gQYdAF5",
  "key26": "2etik7X8D2Fh7JgJUgAux138Debh417AbMCCpsDLD6TkxyTCGNwM3gFwPRa5nxUJV8UNRPzSjKdwRM34euR9wtYy",
  "key27": "4m9VW3W1a1dAuXagmCTZEd67zWZGeyEVnQ2NtQxXUxyinp4ba3tH1vGUuobq2J8qrNxdVYwj65EMdKzihmg8JKb6",
  "key28": "4CU1B52BnZnrJeczXzisq1j2mjU2DkH79FsMwkPi7VXidDcCW5ANJMsZS1tsyKoBKDbZMxQfpfTdsH27idzvFWQV",
  "key29": "2f1tAtb8auw9DgmQfddiTxU244zgAXPqN98ynRUEMNVZYhmxUgS7TNXVDT9YsWvfnX7v8TE3v138CRBnJxV1Z8Tn",
  "key30": "2x7EEQDdapVuDzrzbsEB3Txnqhrk5YwuB4Yg8PzUtEvkRCjevrvqnusphQda3CvmjGzx4Pr6AosZCGNbTNmVDdsP",
  "key31": "2JUZYLtWr27N2Jq6HSPKB8YTbtE1mabj2YPbSTZKTCp1RNwMAAbMvMRwqLjWBSV1vi48H4SnjojBJeDamr9gDFUi",
  "key32": "28vTeXpAc9a6jTyEZyfsnvLTzWXknYMRUxj2aXJupcuQc83J4AjWzgzBDKtShWafzkhQVtHeibxN5TZq7xZFpapQ",
  "key33": "5aekNyhK6e6JckP2S9hRfbbMZmz72DpP52X7swuGTJUonF8hz2edhUQ5YeQzNMhdiv9La8q5fAUPUwLWdNV5MtaJ",
  "key34": "QztKwmvnj2PxYYBAadbPdmt7fDNBafJsm7czeWZMhJMKudFMZsn95NcXQ3DjkwmdFpM8AhniKmQpXPhQG7Y7Zfe",
  "key35": "43BgnzAXVXRNfhUpr3Kgw98Ue2Kudqj7CtohrH3WKysJWJfh4MYt3hX9yDnonyvHAbNJMGzAfzKz5B955oPYqsG8",
  "key36": "2E4VuEHYxusVe1noajdJbyNR7YwjmkTh3afcqg5mou5yVmoQwaVGrcv4GmYTffcKCQhM9ZLDWknj67JT6mZZuMqu",
  "key37": "5CAnwEimJjNPazVGweZZQw7fsGfu6Gvx2Auk4KSsNtkwdiCh2mThFEKnCFtDfMCB9ciAPbxjAb6jdyoba8aDo1pK",
  "key38": "46x8i4Qu7U6xLCWuDnZEvYMCrTT42pQvEoicu1tPQqZ6GWNUtEpkhqwSqdzZAx9RB8zTryVPmJAnTMihgiPGifkX",
  "key39": "5bXtF6uX9ESw5uoqUKHoNrhsvCucW5ARiZ3W5xvzZy99EnTWRAiY3E45hrTWfkNmKoQcUigX3FxigzNfuuJNW4xe",
  "key40": "4wa8v44ehdaBzdYez2x1R5GJUjzBTnzEbKsGZAkS27iLFTnHFTANEuiumtGUw66tTo4UJJjrcqdNhHSjx81fWouv"
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
