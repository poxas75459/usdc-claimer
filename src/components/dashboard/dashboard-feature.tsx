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
    "UtvgV4o15SwDjSvdiUZKvcpKwCDReF1V3Rv5chV2Q3h2CjDeHQumGk5krRz3ZFxg7faGxkcPTgGLikevkp9mTr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zbmguH5rfNvU5ALMnGoSGjnxLAPW34B8M1PBmqyfnNi7nkFvFREt9ejuS5mC7sZdW9pd1CxNUcwirShWT3EVtwG",
  "key1": "5UotZFsEgg7iYF23jDh5uWQYqJWBTETFiUJNgZGhAaN75BMYghimvzMsB2nQ6jQyjBfEHc3KkCs4cuXhn57pFgLz",
  "key2": "2q6mr5EJjCEdkQFeoqLzBiF21rKrFQwAW1PhHYhHx9Cq5dCyxeDnATSPNPvFcL3ZsXoYZPgX4j2zhEUfPrErptD9",
  "key3": "5Tv1PvJsWKNaY7huhU8DbksBbyd2D77zbz7KLoDxB9R3UG7wvZBp9RqQNjsarpnLJatohNKwAQsAganBjhsffJYR",
  "key4": "5UEZ9DKZzDdNbBrfZsnTbrT3vPu3Yrkhq8zt4RobP18Ta56fJ2vdUpki5PEo4JWqESRVbqg5pPCrjLR7aszLGVni",
  "key5": "5dHGhQKsPp8soDFd8fLasdN3KbbwAgUtEAWyQHAqNdyaz63H8AtCvgoVNVHz253Ko7uhzemkQo2ZJk5RYGBkrtD1",
  "key6": "3rsR55cA4xXMQ6VjLyNnpRc8nLbMqxaTdUinJaWASHVHVVD7uHF55jxxrdz9KRPqTrPDnr6juqsFrJHQ4sWcE9DX",
  "key7": "2bGNhECbxaf1GggwUd4z6ksub3F6fjiTikB3LuDqbCnBmRhKiSB7BK92iEbs6rpW9718z8MxrM4BprHvEwMEzKCc",
  "key8": "3W9Sb9tJxZaLuua6umqXdFweRhxFTbL3ENTMAYMzgmC18DQ4kMqjgvyuzWBqcVUGnqH6BsadirFJv3FaAbYNY6ui",
  "key9": "21YnmL3zc7ptGFedY67pcwoZNZgJB8Rc8Jheq3vpLaUXtaVkq5MBVSkEkvKZmxpTNhEu7ZmRbcvS7czyNxSfbpV4",
  "key10": "2AZ5jKsTPy3n7KMqDbcxkmFmTH6Pf4q6eHrw5VJQtFurpM7eY4NZ9BqA8rf9x9uaVWzj1F9RFL5gKmjkP1Sp9Kpd",
  "key11": "59Hhu2JacDHALQvoHf9Yht8B9sCHDBHeuhamSsUdATqJhUecm76YZdwzAomP9tF7pPC4Wb9ifuj1sU2qxXKvSuod",
  "key12": "WXtk8RjnkaUe8ChDiJsUtgfaY1XjwghhwZhmKxTpz75AqNZVDWu9v97huccLamRcLo7sH68h2EvD3qy2hCRPQva",
  "key13": "4W7P8cFA1NkoJG11WBFrB1UaSn4aCN19jiQ1Yk8kXUVTcGfX7cDR4SsBoR7erjzx5y97eJjT58gqMFoLow9QC33y",
  "key14": "4EE5X4odUEQk88Z9orAenRi4xCXsVnVRhTvsxzTPBQKeY3UHG5nKihfb2Z7hrKAqYEokgdz9iBZ3rhwA2X3P86nn",
  "key15": "fV7XDxFH4J59DNfWFqhkMw5YpCxz3AkzX66Szr1H7hsfkoYNtomrMZQFF44a2sH79irAJwXZXWA8sfFkinHAZsL",
  "key16": "4U3mcDLLcQfWfV7pBLBJWkELYYgma8STv6iK5FxMkSVbYUj7ATWFR9ajK3vXys1v1a6151WaVe4CdVAbRBYdmCEH",
  "key17": "3PAHFQmK67EbJgwfE4m2pSm9N65UTpuVXuRA85RLzGW818LGiH5ihcXkdFgNMAiKmhgn1xzwuja5sgYGUNtnE2Rm",
  "key18": "5bWTSg4KWQF9haT4rSwq4BZQ3KHP5ixWb1emuqJsRcZJ53KLaUEW8m1suQ13WDZaWpFjDbd6h9QrLvxrJXh9PTBH",
  "key19": "5hsKCgibnhNpbJZS59aHgwAoZ6JGLmrrQ8gHMGhVga16Mqau2NNkpdkTdufartpq1y3zSgvqyKkMnvWbLMYTnHSZ",
  "key20": "2HCBtkj78BWUeAQs6k4tzwH1wgtEvAc84nsZspHN5dnWUwGTC5NVX6sk1BvPWc2NfkkpG9HYhvsPXW5q6QDo56ys",
  "key21": "5c1U2gfNZvmMaExi7fiqRtXhyFGb3DgH5oPTX8dsoDmtHtsHsBHBzyxzBffk5ef3wDgg66m9VjwewTtcMQrJsWZG",
  "key22": "5WhMJa3CcWCjDzXiHfB4fXNB6NrXp26EJ7ZwnLUKoqbGKRWngdTATUY4jBYQeKASH3PM7oxdhwHDbRHm1qHP3f79",
  "key23": "RQFmMdBEVcnkwv2sT1caNHBPWrPCeysg1YMAog2VhtQj5fcEfsRN4gBjyJ7byig6uDECbnNhwkmxxStwJWsfx4N",
  "key24": "3qHSNwRNpB69sQEKGkL5NPUuA7zyZ4CEhQjxc3GvLWVZLRWmB3vgAL6uNosK6EyTDe4rw7DC918Rm8NsepTPGLeF",
  "key25": "qGa7UT9kg3M8PK4znyEzixGSPuAVbAaz84N3Ux34HD8qWbHJKPWtNdwC5LJcTupMKejRSxJF82PMbcCmTrB8HKg",
  "key26": "4qdQw44pA6dNNL7zDs8qnaFaNFkpYDpcLVMUVrB2HPfCjMSsXD7tCVJK5dPH98WZAgUdNgRG4MZ5Eu49zFd4qqyW",
  "key27": "4UEYV8mMwCYVrfHLMP8zDWb5Q8NETjbLwmhpzRebJufthmC4AtAJhkh9BtdYhTe8L5Awt3nNj2ZNcCATEqfkx26r",
  "key28": "3Vu6phz5sZX6KWdNybVhgdEkxLYysVp57mgB7D9dtpanCNhejsnsww5DUpmazShAoFUwZsVDvSBih1o4HnEmMwDZ",
  "key29": "5v5PmBkVJbgHnPYeDcbJRrkRXsgCm1Re9Krsmh2YC2rJb9KdpqTpy9spRpTsiVFbdQRevavP8mP5cksjZ2aAWwJM",
  "key30": "58ehrZq93cq2RALgGRz7KfKdUZMHyPAH7L4vsBBFDeZsYRzoZp6XgzmKhfTuqaos6My5Gc2f6KbaHr6cJ4m2oAFg",
  "key31": "2DLmPX3aYh6iAP4oV3TwgRC9mz7Je9xqK5mSFbyugFL3AZprT68vVvr7Xb6ehxywL5sc592csSdrQebVMY1nVriT",
  "key32": "2DcUyxetYBWfUx9V6mKBrhwyLivCQDPJcv6M36rjAXFfypKRFmphKZKDF2bB786xr5672E4iRLE8YX8gKKHMFUgL",
  "key33": "558iVg5X7y26WQAV69iUtUQdJX948wuMMijofG1zxKLEamdjc6dxAT9pde7DB7cD1fDcLhkXQDAMSeAFMSy34Yqg",
  "key34": "2LgVUbdP4xDobTcJuoAgKbVEmSv5hki9CSGdvjFFRUZwCswnaUqTEaiVShVr3siN8QjGm2jv82xpyuVN6BQJKK8R",
  "key35": "5CWsCpDHeyJYsufHXzt32nEG3fnXKAyLQJDUgXJuR4KuSV1RkcBkjd2YmetTKyjYjTpSsixuMNVViFV8JsnE2vL4",
  "key36": "64tKDdgjD3o73VFdmM7kkT8VrFtgyPKbDbrdA688A95CRBrR2MYX2hz97gJgDRgiPbQrZmXVeTVqZ6kKtBLTxWtn",
  "key37": "3YYyvCwgS4iqMFNhux3Vy7ZtdDRah5tfvtK4aE9KgRvXT3c9FURDqF45ZWSYsHBoSd1WhjjvCZk4MdY54yNaLZaq",
  "key38": "2qzRTGoZiw2qxHvzYmBXV9MjVkDCww1QfS81Msmh9QvP45Aq6cazymayCpUJy1yq3mY6q1qbzZtYwGrF9Kr1UK2J",
  "key39": "2Zk25Kvij2Btbo1ZkojxfHHnz2W8taLU2ayMSRxK5kbfM32VMFPyWhdZFgz2gHtiAW2rcfY8UakZBopzmN6zXLw8",
  "key40": "4sqAEYJQC55n7CgeMBQiGxkMxxgK45F2KmPzo2ZUYWWKfid8TWbvWExziGM2DXMUSyiRfrhxDmmGjUy1jwNyQNAm",
  "key41": "57KPrpLVoeg6J6QAHJW6KFSQSt3sNUgSqd7JpPnmboSaH4ckUH6gmuLx7FhAB1fvFqzgJjn4XL1WabfGvqsftCxe",
  "key42": "3HX4MSVmP45JuDHVuph8SJ1YATcy8ooXfBt5Zb9RduVHGA8UWm67mut2iNM3iuiX3Af6zA1B64nXzBFfBPaEQaxc",
  "key43": "5Lv4qq5ZophFkQScU78ok6cQyAK7k7F76hWRsTxfCE9hLdkVm6BUd24WM2PNcyCvd5nwxc2USKhtgG9mC773UQSs",
  "key44": "2qQ47JmoFuXuqH55R29MYzqq82QoymNg1TeoeAST5q9APu7enTsvpSZNn71x31JtCghzYqSHUYA4V4fjmkQpPsWN",
  "key45": "DLAMZCtpmzwDJ3AvwwagUVLRg1jdGbj8hxubdz6YvYLcXCrNB5PfqmAxEpQmj9WFbaNReFzddE3tU8ioBopgG1z",
  "key46": "2WBjo5dunk23VZDbabtPDqkeWB4VWAmTQcD3TtQHx3xqmZdNxKM1LhH2apVvzRpzxn21u9gZ1yUzBeWexGsyhrsW"
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
