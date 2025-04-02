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
    "Q6beLLqRyXKXF67wX3Unpqhej9keqeB7cb3w5qXyVJEK8h8uL2vwER2jcDRuN6aRDmkrvbAEkqAwvTew2Q36UnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4azfjbP4BmGxvu4yymUHDK29fAh8zQxQ64JbfK9DPzNv6MTKdF3JyvhxojS4HcrJ2xkdYe5DbVhhS9b4HSVkbfte",
  "key1": "2kZGZnngjWRpZni2vHMWygRfbuBLhwvoFp5EfnV8wCMMBkqGdMj4Rv4Mr8XWW1LQ8EexqLgQ72CQs2SDeG3poTTu",
  "key2": "5aPFmKRBxYek6Y1TdGMMFbgakmXvwcG1vH5UogJk6X6KjUE1A9pDqPMwh5cPrfXiawLpmBuZBZ8odpwYmufD1VgV",
  "key3": "3cEF6TFhcwNGAknSvUHKXb7RmkuxFTx6Zc7o5DdVP61H965X7Y3yxRyVa28uFjUZuEtkb3GCodwqhcQvb2decKTV",
  "key4": "dSvcWNJtUCCDD41wn24YFDjubmuCYJWkZWSTa5zaoyshNjnfTga4eBr87MYVA7bPKRDTS6erMLXd1NkbR1cCty9",
  "key5": "5zdZKAyn8Lm8iRwwjLqQkNazK3tqLmmkp9BDQHzjQfRN2WD7GcjES5VXRZrSsrQ9gLamYKQAaMgz24dotqNtNRDf",
  "key6": "WEXZAXLaUAu6NWEurAcpaiWeYd7coDFTHf2KcLsbRPm5MvKVg6Tpjjy6Jahzu56EM6EGfaq1Lgg8dcMK7fmTYxs",
  "key7": "66y4TQZv1r948VEUeQuzpYjBAiTGZsZ3T17WYUvHyMaHGaGEMbJvEbyR4cxXWVEoodh914J7CiozTXyd1unYJMs7",
  "key8": "2USfBiorNoL12xxJnH9Qg8G45rdNNzb8ZMXNpeqEc86rvk1NyiATvwizfK8nbpQCJcGZSzioa17AuyPEUtfAQ2jy",
  "key9": "AU2vi7KsGqeB6kCnhu7LgHvxqEuuPEyM2V82DnykSSaC31kyax1wqqoejkwVuvPHKH5j3FEPshpnjojb25RM9EW",
  "key10": "5feXxzNmWQ3WvUmgrvA9MEUSvyQyzwpoYYpbnWJ4L2guo1eeZQGgVXZgA6sKiX2vpCWNvJR1bPJrVm34ooSN7LJi",
  "key11": "3tsZ3eYYbJ6rMBcSe7ktfwxTV1LdUyF6g8PCAp81nXagS29D12HtFMVeda8z8Jjsp2Dh77rhizf8ZbUvMbQZKRRF",
  "key12": "4DkeY4dYSidV7xfKQmmAZYg58TPWnB7uBQAGJA3A75aP52mDqKgLdZunNLEHYX7jYpmYYLL6ffDqR8eePFj2tDLA",
  "key13": "NvojmaDtjktDhTTDvVVecLUKBWitfsfZkQVmcm3amvEksV7hB3L9r5TYGj2vJ2LemnUytuxB8E3pdaDUfajGuhS",
  "key14": "37uCwjUkeJUvkq1KbQseo9upmn5J9g7ufCbSCi1hADU9tvosxeobYyJzku7STSHkySjccRNfWpMYras7ZrznP4h8",
  "key15": "HA1NQJuGz4cWszwGYmsTtTCgmsMeY3DDWEsTwQSzRJRLCKjH8x1wG8nD5B6S52t1Vi9urchPk8QuqdPqj3wtVED",
  "key16": "5dR5Kctkrh6XPa5at4Z8Xp2VsepFv4m2USmxU1LabuuRH5VX4TEvTynRe3o5ACmN2eiqAENyPUoAt282pUrcxY4K",
  "key17": "3E9r9GZL9fu6J9vJYXLEMGKvUQiTbzbU3moFhhemZzJyVzVFtjCE3xAhmX8SXZLJE7GqrDrtRWcKK5HrkvAXBvk7",
  "key18": "4kdKZ4oaNccNZJb1ySEAC65Ve7Qn8eE2vH98bz36fo2FqametxHGmEzGefzKTf1YTsveS9MZwZgrxUMGAricLFU",
  "key19": "2ZWagDMcEt2cRd5AwVWzMMTHXrPwbkC5xvd7BRoKu1xmfYVyGcV5TUeGQVCeVaZ8HGbGym3yDPVJ7BZEdYPvSgdb",
  "key20": "4vcyJG4mCaREhAbf2na92AvSmJ3A5p2ANqFeivYC3RxbKQ4y7esR2S52DX8p7Yfc9ECr6bjyPGxG8GiWqrdSVq1M",
  "key21": "35RPd56j4QJkxis9tVX2U6EdCeYAvLZ8y5MSgrEu5D1FxnPBcmBNZHwXtcEchaKBDVJtsDEFakFies7KxnGXtDJy",
  "key22": "4SKZTrpSBiPtT8Rgs3BRYKhVPwjBysP6RsEp4w8anRKTTm7s64H9xq2bZBMDUpMciG5DsSH24D6Yzc6wcEMPxukp",
  "key23": "4My8bEZrc8uedDWRUdqG6r1v5eYw2L2AnkZ79CoYqdt4QJYfCChNsWqm6vzVK5YZ88WKFimsgYMLZ4Pf7vsW7bHw",
  "key24": "3dtGCPpLCx3i12yv4GeRA6RYCc5CeUE5i7vdkeMAES1kWdmrr4VE1MgzGxX98Y7st4B74LAjB1g9UUpuUuz6yBfy",
  "key25": "2axrU2QFYCoKUW7TK6ifpXX6Xz8KG8YeBBCKF74DxAE47ieeb7VWwt5QuyccLA4uWwGY6SSFNc2ZokVWMeUAL3HQ",
  "key26": "5pbi9HMa4S8eR5jA6fcpYiPcCtWAFbx4TwKZMygyNxboYppMMYQY33k6pmWZZ5XZHdg9nKMADpXbHYFCr5U374Xy",
  "key27": "2jmPNS1GCb5jLVAiBFWvNT2GN9KBtoSPDGb7u87HEFqmaZzTXQ9xzSyq16rqUThJH3RWH4b1ptANCvVvqLX2FvBb",
  "key28": "2WTtusLhTUhUNdjE3wtVaF7ZWZVbPoUDBjF1Mfv25rcUcKGDBybcvNdnnKUQ7MEFzJfaEduqFVBReVuLztooBVmS",
  "key29": "7gkPdkFR1Wbrw9X6xaHa1yetaanUyiqCGxnAZmRPcCKRd2U8XaraTCfRdt39adxZCbmBwbJmcjRxFePSAyP9jGv",
  "key30": "bypEfLuDgB8X47NNNktnH6xQRJDEcTpE5VNi6H7LHng2fTbzLCnRfq6WfAwVa9gWpbsoNFeLpu5kZJNErptN2iW",
  "key31": "4CEhEqFVTaceAMwjxETFLmnPaZ7czCrswqUhqb94ehsVewbk9bLtd12agmV9HJ2xPhwdGwi5Kr9PHuAxpM8RqSXc",
  "key32": "4ZXDuTUeu8UyUPX9udePpdnj6jqqf4ghTDkUfUF1YK5Yz4wfJeGkZbtHDG2qcKojk62oe8ee3AZ3JmZCtPkRno6E",
  "key33": "3D1Sx4xPsN9fae31ptx13Yt6DJUt6qdVyVYsz5rZ5bANf3p8TLDMdjJgLTptbidx3tDe7GxtYL8rTmzAMJBUfm9r",
  "key34": "RvJMP6tzNWTXzS4yBxzrKA2tm4BHa4qJAAAS1Y3Rhgg7MddJcsg2uY7pW1TBeZzaBsoLtWJB43efajSH8s2mDMi",
  "key35": "3GkVAbqPpUB1z12X2eSTkMD3nbqFg6NybUGFVNjJhqNmezC3rBdsvL6xwDJpqHZtmMK9twUpgoSGV4AEPfMANVKL",
  "key36": "46oNAMYSReb46b6iwZymvNQeTcRjAGBu8SEaAE2QxKaw79ry1Wqqa2gnyjXeKaGws723q18GxEUsNDy7ToPC6PM4",
  "key37": "5wjURuUaCD4uagUiRxFaipJgrep5Ua1WkUWRDD6NL2MLR9boTjDBpY1EDVNem8fvN6TimjrYZrwy1UzT3Qv1tWX3",
  "key38": "5dB9nrnXuiHoMpKFPL5hDjQ7jHggDJS6QohFf9yvwtoeuu8jjW95dfPHYt1BMQ7dVK7Kr6fez61T9HTZ42vCqEy6",
  "key39": "XmVPqRu4onwWujgK8j6ysr4wo65WDFpNqpqDfufdubLFg5ebjS4ExGq64M2aCo3ZGYx1ypJzo1jmneJeQYMGRgt",
  "key40": "3j2HTH2gfu9ijc9wxsY7TkRcfJfrU7scpkXE9iTnKqxZbkWP5xvJxNkhrLZ6XpCGaEnryHKEvNAMqeFbJqtxh1yv",
  "key41": "5tZNtjyjp1q8oMpLQKzjetUfpCc8XJXof76hiGzYC6FPAaPBkUzJgr1A5eoQi6F1DZwtam8VZ2Utc7Wq7ELQmXgL",
  "key42": "2qzDWdqWA31EcSfieFbpYrwnYCpks9j8f1ECAjHMXfYNQB4imxNZJMky3BDMwE61pZvc9FZ78CYVVByoTDgdr89X",
  "key43": "437spFoxZoFvinyR3HAkq7YgvzYs18NPkjjaAfXD7bTXiyCy5dpKAk6DM4eGWG9Gm4L6Y1UBJMPFNujfPMiGRM38",
  "key44": "YgAL4hGUEqVKMX6QoXXfdU8GS9GgL6AEmVHaWdgRCerKcFLhvSikA8XBuhduCbu6UUJtovXkBPaeHACa3EaJrYc",
  "key45": "2yDp7Z58wZV81fDaiaKdF1e3kVsiTRWveLyqDCWZTA49Gbu6ScXDwdA3ABYgb7AGQgSqVAfC8a3uCmtAVNPrR3Mu",
  "key46": "4pPUDScvoRvbE5K1BAuqAF5Tpk36KQvR3M1RAdKEMK5A241Pg6cLZE6fP4uHaJedyeUTejpRvNnhLcmppSG2P4fD",
  "key47": "33Lvu6KkmHFhLRDsmZnfaumrtDdAF8H9egeMdqgvbGrUxaVtaAP2ADAYnFg39VmBbNMqrzwgbBKeZ3FULmnzwSVs",
  "key48": "5sfiViJe4PMeRd111ucUEE4XvSryNNSwwGxgrmJJditBL2uF9uTF86LcuMgH52MVc3t5y2XsrfLmug18ivutGQzf"
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
