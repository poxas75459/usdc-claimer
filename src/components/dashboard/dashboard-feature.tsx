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
    "5xN56RZYQTYV9EpnVnJjHA73cULAgvJQB3jPYm5YbkQLeUbvRyTWbka9k1BygjyThnpTmtMQehAVw872yswKU8UD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dSLdfhBT14WUitkaFu12iJRuno7amiyDqYK4kNacU3gcTwxDAKFKUh6czopWNH46DQQuKqcYyUVx1LVckjQxdbv",
  "key1": "58DMMLVifJiwqiGCjcBPuNPuC7iqhUbbPSzMxCPeMoHtPyYEM4DZdLg2rBv1eQHZBPtJMBR7ym52m3w18VsAryFw",
  "key2": "4uPgku5GRXmZWsZtgSNoNUQQFMck8t2eLSSvBZsLtQ169rETk6ueQY1SaB6rAHWUDRWHv2h5XK8Mf9btP59WKoK4",
  "key3": "zEh3p8i8eN14Ghbg7VVKYCk8fdWSvaWV7Lwy9f1gnFUJgWSSP1nZ3RvzdCmopASpPVvXkoWsYfVnm6a3ujVVeah",
  "key4": "4jpPPyjSfEJQJTnVniRyQSKVFeZ9sCPKgVLqHTPenNQT6YsS3GqsJnY7UCSfmCLksDnjekV8C4L4Pe3Pn4C5fiuT",
  "key5": "P4hHY5etbsAnT9VtZWJCKirQXo8rXD332UDPNoTcgeJRNfYQL9NM59Eu1TKVNGKot3wSfCZmWo5fU25Fhb5XXEh",
  "key6": "ses3fmEqfoVSXeJ2XndBrwQ25NLPuA8Kj2ZTvPgWWZSKKUbmcQpQu8vyTd595DcNqEjstMyPjaZvFP5eyQruUJk",
  "key7": "4WCSUPaoNa1MCBJ2CA9fmeaEiCk9tP8LBhLLy4oQvgWKZbVzGHeft7gQ3BCXRNQRr3HPY4XU2LS1FkpvKqjMdVHn",
  "key8": "dmMHeDxyy1k7G63aF9DzH1wHjx1pEdnZQ1N4YJH56uyYaZQZb96MBTbmAuyByxfqiqo4tnQWKdkP15FWz8jpmmR",
  "key9": "EMZbVEYtG833A4PswAkn3jcTExzMsuh3EmJ5Bph3kArdPp1MyzmZbH2RaiMjorrVGJznVfoPxDYv6kSa1AmqfKi",
  "key10": "3wc22csouc4WrVz1sEH7g1mU3LgLYSqBJAvUXJtRyeanVNQh1kGojVqZkLdEJXMTvii52FmuXRd9RTU3ir4JBfZf",
  "key11": "3rVBdDCAQdkutJdhBdAyAAMQQwd5jTeaqJbj4HmcRzDrnDypessybdNSHvVSaaU9z4xFjUKBUAnzvPYv1nUjCKeN",
  "key12": "5F12qburAeUcHomYaYkh88YxP3MViQ36G37KHyMoJUDh7xLYUFqN7MJwv2h8dYib6V9Y94rSWfmoK2ibYaWpSYGA",
  "key13": "3YYPWvjvya7Wexf5q9PQYEobWwqfiC3PKR79mX1NLEpQRmM7yNrcfR1ekJFu1sTCJCLQG3gWuhRUuD8pzXkJ3wk5",
  "key14": "4EmqrpBJuY2FZDYK9MzW4hPN2VazgR69NmwahbjyMzReo4DkhfKnmmfnnirmYPRByQoan4Q51EKcy3RphYFQrgZv",
  "key15": "j8rXDLq9setkAoJJd6gsyfYnotXztan5SKfL4vuYrtWWgBfs6wmYHcx2F1f7UoPzDX4i8gzoAEhiXByvm5MdzKs",
  "key16": "2hZ4entQnrK7JFFcnFSxKRo7bNrjXVdKDzbkB2uEZCRCF7cUNXhAZ6AQ4XyDGVdPfVNdVREhCrHiuZAGWTyZW6Cd",
  "key17": "d1hfcGTLeuP6Qpt8SPvcTFXtGdSkQz1PuAHPAgKamHExbVhd8PhZ2YUqbHEfmMR6NigeCXAyAzNT25WVUvFTZFp",
  "key18": "4nt1eJA7FkiXTFnMT1QJosa6WfLd1mrLNX8m3UQyuepYESAUswo2oCWX1jFcek8ixZ5qtb9jJRA7tns4yPvBB96X",
  "key19": "21UvAiCfz2FMD9PuZ2zgnWbRRjc1g8hTNc4v3t7SQ9BaymrS4M1i4dWVnP4D9R6n3oCrvXZ5J4gXfVEvXnS1NdbQ",
  "key20": "3tyrErM75v7cZTgyVk3RaQbiB5aQDLj6Hwse5gj5qaNFQK27JhyCj8HmrC1ibYhyjeq1DHZGawfLT4L9G1Qk8dif",
  "key21": "4kTy2d49dhPPdpRJ661qzEzrmW474ByRttWDJDGmcUM3CTCDJY73Z59rPjp9VvNm4tDoqoY75gqQ1cWoZ1o9bjbC",
  "key22": "4BXePpYYSCSYbgL94zW7SLttzAtZQeE6iiee3n3M92QAGA8WrRpKV4YAoZtfj2JFLH6vgtHRiWkiKZvWs52Ds9V3",
  "key23": "45sKM75ig2FqnQMNPMoDtJdsgw8NGDEB27nkh8i68LXn7SRc1pdEDqz7tbhQbc3iBEtirhh7JATs296UHjDmtQna",
  "key24": "5gLePgSwf3LfNHWvqNcrXg8DqxP1FLoorfohSNGzHFXYe6J9uyszVbSmAxh6MrEQsjdSShjYAWhDRRT6L3TPqpqC",
  "key25": "4VU8BQk4V1Cz5skd75uvD5kfw2853pNdCGjbicjxJsHvR4ZTRPBz9edXuDdpqV82fcPHQTC5NLx4Ry2ZwW5tYmge",
  "key26": "5qfEN6Ge1NmaAKeRK45qRyY5WR6C3Sm7aBePUB9S5gKTDMvDrsaQ6KqS2XK71fPgLrZqTMCrA2kEUHnJK3Bhmx6q",
  "key27": "4r4YtGcCcFmcG7VEP31atGYcSMb58ouAyjXMebekxCjYqygE4HYMmCPvHP7XVBPiif2Ytitfwh6cyomP8pGQJ139",
  "key28": "3x75F6J9xm5XdkwiyQH7Vz5ezXUpmyZ6BhasLCP89WjhTrdoxp2WE5iBqu3cio882em6Tq7omSD3cfeGFnsVxyFW",
  "key29": "jJyPgfWTP9XnMnBx5pj7HXTcqEosVnZHnNga5sM4r1YaYdV5ajLezoqtBYKidLTGmyJG6B5hdehkibTeAumSccG",
  "key30": "22oJ656Tvev2zLqpSGmmtQ9KAbFpb72B6mH4fZsMNFgzfkeTRh7nqZfzY35q63iFRiKibyZEgDXrkoiXYdse3Acs",
  "key31": "4XWowLcWg5rUvreseingX3SSJcmWx9KXrYCgSB9jRWujzEc269ujHko4oLtUHvHezJLLZ697fAhZBSpwFG5UthLP",
  "key32": "48LMhCWuSBHqogyMwZXCwQ1zWUBmeWe2t7xjTrqdP5p32RcuvhzJ7jG3X6GY5sHvZcS54HkobDbk1NsJDF8iChu1",
  "key33": "3cW6QC5fEyzuZ7QXzskFQBTrwEti1EB2zFRQttv8ggGR8z5h3KLCywRfsrXKJmBke73AGkEm9MY2Bmj7TV6z67or",
  "key34": "4tpMEgQcEy1DyY2ncN4YsKfyWjphpsUTFaPaaEWBrDXJJn8s3G15eaPYumVv4UMdqZCkKyCTDp7vPq7L21ohqH9G",
  "key35": "3cRfp9VC6tMGL2coLnbDBKXXJunxxJLfCvdZm4sWTCvVQBXAWjUiPSyKQBrbogAt8FJXTHpXwA9K2JJQqv4xcuVc",
  "key36": "3FN7i7xDKkBkpeszGKjJoU5cPnKEkk7AowyeMFbQmt459XUa79VPa7aSgqZtTQtJ2JUuXwwpvoAmFyaHR1fNSVXq",
  "key37": "3kvLge8ysa6tRcfPbNmLHDMsmNVDYnvAnJ7iYKu2erGG69gZFFkzYaqkTzCpKta9DxXiyhZcRz3bbu1SkHgq5WdZ",
  "key38": "2XxtgLGJzeip7irDGr9gUgcTfpcjDsC3XPvrekwYzbHaKzkVR9xBdpcJhofN6pYd6XEM6xnru94JxG6QB4dQfHJi",
  "key39": "2fNPvxs8e1k7FxGJoFLFnpo5jxVqkDuita9FjfTTKbGzz9Yp8DcxBpgJuxmKasHdpnsKPwkX2f7BKYCZhhnn4DQc",
  "key40": "2d2eThmPasuGG8JGA3FtvYwWsotcC7ZSC8EeWqKMKgBkjJw2n5riLww6nbk7gh32Pe6KabXExLvGq6cmYEhNvSSu",
  "key41": "xHK6JPBDhbot6Pm4eB9qPhXQVHSB2zqjRxmAzGxGVBQ3k3hKvB1vQuwdHRD76TcXrVMy4pCgiMRzTHB7W2JcPWf",
  "key42": "5WyKiMeC4doAHBgm3APS5syoiEzbNEXmjxZujxbasXvmke9w8pWipMKeigwVkCDvnjAAnCsT4So8iv2axgNvKEAk",
  "key43": "h6oTZMWY4pjuiyKBKJBCzjMNwT85SZnmuB2zkT9KTMEYmd8BGFwPzb9uEiKkBg5f9acu1fa8gdqanmQptNznCGX",
  "key44": "5eGLmQJQK8U9GqgTMYR52AjhpMoUfefdAoEdTA5DdHEnAm9VJpMdwbc2r4df2LZpvGhqgBiD9FKoDeqMTacPHBba",
  "key45": "55o3SjARdR6Pz5QEXm8jAuWy1vGxLRYvDXYpphcYJRAzy36dmJvYa6EZMyR6JiFTVW7JgqiH2ejiLyqStWc7kQM7"
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
