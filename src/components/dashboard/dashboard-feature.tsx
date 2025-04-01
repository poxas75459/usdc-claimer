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
    "fA4oYU7FdSu8dGUgCeQ6DDx6UWq1FmBAm4W1UpCmbiKJX57SartYB8ruy1eRNpiKGpPnDD161cwEA1EuNXTat5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o3r7ZipHR2DFJT9PeiaTDqZFU2crwEsyYPfYr3idVmmDWKuevKhnxZJ1g63KcFSi6wUdWadm2Jxd4k7UVkZxj5y",
  "key1": "2cjJvtTRehmEA6BfNVZFmCDS9hKa2USryhaNkaAo8FmaqNyiY2vDE7teysGay14RvzFfhBwf5do2PNeZdsErW9vc",
  "key2": "2esDQBfJ2LXsaR5HPwEVhNjWACrqKgqLEF2CWpQH5NmaTV2ryydfYEUw6faXZsJjvvcPX2wJCpocgGqc65DfxNp",
  "key3": "5zQkiQmBUpSECxdGaJAWDHgmeBjHtvYNxdVpWgVmDuKD3tN9PKJ5vAyt92EMiGQK9Kipv1bcEbgANBcfPMHPdx4m",
  "key4": "uqi1bsQNtdCCJn1rKNNAGRphYd2S9hMbc5sU38ssEsc2WbtJ7UCy9Ebogfzhey1EdSSBwUtuPq2ibjHAhGd2QrG",
  "key5": "57qF5moksivFfhR6nq3Kp9DSjwD82rZA2GnWebdn5MNdEhP74jyYELGsoNs8Q7JAgtrhbef7yonZp8xEMrYYgCxJ",
  "key6": "5p116qwzLfxnAtG9d95QH4V4mSV3f6P8A9xKmU6BUaEAHTPHmg5E33DmZBxVoufabSaBphyyLyJw1riWrhF3Ktu4",
  "key7": "25sfycLGf8zDLdhge7LDtjvFsKthrM1aXLY63hgt4gwwgcFddyHopoZCwXdDu1DtBf9jUVPu5Wq3HAmFTSCZ75we",
  "key8": "2iLdoreukKYtgTsyEsmnttJ9DZMocdXrFRYXj8LKdNG4ZnQ1WcXGH5B4ArYuddCQxo531gBGs8eTBfYdw1HTtnsU",
  "key9": "2iELZsUMLMQbHwYzC8xWCfJLA9Y4fU29tgiKwyFnw5Tfip4Vm7Gz44yVAxAknEhUDNBhotkgQHZjtaTCUntBqenh",
  "key10": "5XxAKEsLVbkLoedLrrUtgLG3AMuEuU41VwwASV55VNdb5gB7AZLZ6EmzETAcdeL27kTh8tbebSBHmzD97hP2cFku",
  "key11": "4T4k4s6f223KjUTYDgcvyi9guXYB9jhtyBLVCiRhRwBzgK1TN6W6uzxn9uHsGLmsFeygkTifA4DPYRsP7b83S84b",
  "key12": "61sPPX4agdf7PBMQt6Lha8VcJpbHheTaX7DpKE3GgXkkupLwssARUVyZLeuYsKqo2YZX6nevDk57qe8Je5FqTEx9",
  "key13": "5LajwAjbNFQF1tV4r4F5eYuo2obpPUQCGb8HRS5jFvxRqdjDZGczBYxyApBnrxThvsvGvsqpAKbrDPLMP1dDmrwB",
  "key14": "2cJgTxtmKuArvCRidbiC8kZK155UsfWD6LpqdSnhTDNXjsU1ySGFkeRPrYYGwdKFbwVKr5FZfdQmem8nuo2RHfFs",
  "key15": "MLcXqTjMbnY4XRXY5tJxXAY1UQt26VW2xnq85sZ7E81sZRh5EhRgx872d31NWPU6s41XChLnX8f1ijK1Bbo9ZYB",
  "key16": "4gSTeDRZAVdKbxWAtn1QSp6ecYZWoCxukb9zdkQD8DStiaznJnraUTVQUU2ys6SG2fZJ3KgjicF6W5zRLRf6rUke",
  "key17": "g1sYpEgSDeTVM5UZRsJeonkD9KqoyQUnxCJfJBVDP3Ts2FuDiBu93pigy6JvJnUSXPMpnALvDf1CTwi2yUDXjNa",
  "key18": "2KARTkCsq4Yy99zrQ3p1weFFH5zqWsz65h1NYnQWcrvQ6LaWFPM7oDjfJpCeG7tGhkhLgCSTKQiECvZns4V5usP6",
  "key19": "4gqRJ1wNVkCfgJMJnt6UtX4QtfdTUvHBi4BWypPv4p3fLxL6SaJ6CK4B8rT2z3HwRdUeHeHALZJumuCe529SjXvo",
  "key20": "4Wc9s4xmXyn55fJ6i7pikgfN2PLrFNdKqu45WQjdEhmMcxDfwkZ176mD2Pmt7XfAJQUW3C6ricKAiMBMkKBvWXex",
  "key21": "4V3ZmNATihh7JL7afLTAzLawDsHBpWZhn1uS9CirgsHcfyJdgZBo7D5yXBSuBj8VjH3QoMyd1BSQXJ79EDaHU8b1",
  "key22": "4NTQCd7Wp9jdPr825167obTCBF9VcJi6dMHvpZhqFoKD4dyDEb8CYzAQuEW5EruHXfV4FLDCyAg5a3HhP15WjDjG",
  "key23": "3pizv9RPiq4FzMmJ9fz3aYZk11DjszQY8hA3hS4Fg7NDqJb44JwFAJYoHjHoeCEViyAqhxLfS8J1VWL23JMyV7fF",
  "key24": "2b6mSUj99oNpAJCt5s1pWePyEH8REDAqBqNJGjG3ceXJNX1gJK8strubiM63Vn1afggGY783CbJzU34xouoAUKMq",
  "key25": "5uX9pVoWjsmStEuYyTBQnh2QqwcVQfePVP2YTa7hZTUd5dPppBsK8RAUy3kUAYQM66t4NoCWDxAL3oBvBwbMrBZ9",
  "key26": "5WunkdkG7E6KCjmxE6A71KFJTTym4FR7KyKvqjusbHFVJMGgDSK78jH8koR5UUNTMurcqTHVsHBcwgDe2cBYVp7",
  "key27": "5JgdR6sAd1J1cW8u2KzcghPSwwNLZuKpaiZt4HRshQyuN7nECurojASujqNKCwmfWbFWCHqzp1AFGSuXZygu6TA",
  "key28": "4p1uRbUV8gFhVLRQhpb1MiWtwepz4ajpuBjsbNTmS3aMG7LdEhYzXzT17fU54nDY4njSWutYmUTcHovruAtEhKSM",
  "key29": "5ZbGrSZECS2XGLYKfBQzTumg4QPkkWi3woAjbQRLiPeJS3bLyDs7KKmX4bF1jEZ5oFG16EagqcWpiwbiefyoD9Wa",
  "key30": "34ZDPrkDbjp1yqAzrHx3w4M4knCUS8HgZWtsiZUUwMWpoWdQqzDF2xYwXvqkCPUBxP6SxRBGZ99nwmGCPPSwqwM",
  "key31": "4k5m65fRsSn6Le2akKwQ2S9ac34eXbCKqXTGSzyVrAK9BqojGxaMGu1jhguhvfX512BEE1F7n8meD2bgKax1wdSz",
  "key32": "2WjWWhhq76WfD8WtSZNAQAA7FSBjGQR29uSaMwqM1TBx1n3TtPd58wybchW3fB6MF63aGWPFRCPuqXhCrBxKBL1G",
  "key33": "2U3jjvAxc4mvE2aGmX4zJRv3o5C1JPMp795B64T3ZcijhB2d26GdbuhoDqsv1LzNRDdpCdzg1nSvd6V9Yvk4QjXZ",
  "key34": "224hR1Ziz949AStp1fqaxefF6gxLyMs39pJCfuNkxQKZkueBxQ3wc27m22bSBuAXrPXeouWEPLPij9KWtkfqaXyL",
  "key35": "52AyUjW5bYkQaPPWHpRc6qtAYVX3v7CAkpx2BRnsyKdKtt1aFsa6yPh7PW5F8cQXNxduHWi8p8KQDqSYaDrYKB3D",
  "key36": "2TD9wLHLUtNJSto7mYCCCRws1A3XtVN5cTtippRcaHd1LkbRJ5cfCPagPrLyZe9EHFtkriYSqZv53tfcpZVKhtBf",
  "key37": "4Yarhjqs16BNqXaEHN8gLipugFqbeJbLsuWG6zjTRuRPmGD8XpGu78h2iKxtSqmT6TVij7j24ge1Pe4Xsz63U6GQ",
  "key38": "ujipzT7YCoNggo3k6g1tLUmSp23hfiPNv2qHSmqQZ6irReAyojbrVE6iiQqMwV2pKpBzDBnZUjsox8NDZswvXdo",
  "key39": "4BVNL8gBmKF2nj47SVL2GMj46rp58qRRf1rJiJUpzJbxNDF1nYtfmLVWvpdMR33sE87vkr2tb5ASyiPhKDrfqnQN",
  "key40": "3stkGSND2Mqw6Pit9YqgJUjV2DLPqdTt384gNV7WuSKJuC3zSNrZScAMzvr8dw7XpY5KwPA7pUCrEwEqbAfdMJFN",
  "key41": "5ueBQP32Hcd3qECokKERgNRUxicU1Ca9E4rM8a1SftdR6kPMQijTuj8HDHwrawPk1PbLN1YtMXDdyvW329xfiwSx",
  "key42": "4M641WYrtXhdBxiU9uVHYfRvcdAv5o8y5t9ipcA6UmS8e8aZZRyQkNNvBuP39R7S9nNjGnZ7HEced5Lk5RG1sxeM",
  "key43": "4gyeXw3xwQUDNqN4qj4DA8kDo6nD5sNEjYcQo8yTWUer3LH8AzEGdfiobcScYSXWcenMG7y35xjiWH1atb774k9N",
  "key44": "qVrSxFokBM4psTX79b9Sr1BgpWVBNMWtzNpM8BYyci15jT74eVmhyDKZmh2PMVpbBPa8w49auJNUujZK3Z5Lh9t",
  "key45": "3sCFAcwB42CtJXZayPBAiDo4k6FCDszFgBaggCn2Nz14anqv5BZKqWdyygfFUT8TVgaycfCwa8eHt1PxW5hmHX4m",
  "key46": "3whXct8aj6rHCEp3nYwUjf72kv8HwghNA2NpBssUp5eto2SqgF6LJXJXvJkPjwyKbqwvvU4d7baVWHjvtk2AP7PB",
  "key47": "2ESsbVvoREKeRaEoMStuZUEaAUXZAL6ZzBNAA78hsCkf7BDt3opS76pE7soteCr4xqbcqZRJkQoQ39QLsBe9JHBE",
  "key48": "s42QnptovNqCDaRfg77eDBCpwkvj2MBLmNNNd7ttAtwR5g6REoNi5y4jwUfXSH3S8wDFDsvZk2fYgKgWvwrcpen"
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
