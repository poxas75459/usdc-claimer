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
    "3FMij36qDnKUQS3hUH6Ypb7pWY9yNxK7pniyY9yDkyYpEjZfofm96bF7Z2TQzcGBeFXRpjkz3ZEnBHj6vC2LhmRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57otvdao8YMpLnWE7sU4f9dj4Jd7HzQ9b2Aq76qLKp8EiVvHRW6LdDnZPY3JZRusvvZQXQEVFQtfXEsMJVSPLs6f",
  "key1": "4vHkRG8sF9M5Zc1hEx9BdQzwPQX2QFa7kpJ4ssfcs4PaskFmn2CcZbPUzqhLq6yMUZ3WweS6pFCEyRUy8ZGoAuZv",
  "key2": "avATFkWS1kBZ1kKVqQM8rU7wMhbFxiRrTh5V6272vcpk3efTjRPVLgeyxMw2PS3qVYGiXntQSsSkWLZRx5WcXh3",
  "key3": "5vwnUmASazo2RNDrEVqZcc6LbgUdf71m62sEyoepmChgS4jd8Q5Mrq3h6QeniQ5Ritu1LYaaCzW4EF8XYrRouPvj",
  "key4": "adhpxdJdxnbjkpfkNdpK1zrmGVtKiBE3xJpDwx8yomWCkwKQFjAFduymcRjhmE45Bn7HynyX7QCM2pZcN7FU2TA",
  "key5": "4jTmz4tfaFyEpVWFsPA7XXnz3fMVk5ThJeHs889KLceK9tEarUgircRRPnZoYu3som9AJLiyZeAsNBskXVvyHQrp",
  "key6": "5cWexsRxQf46gCU3enxprwtHRTCednt1i9tV4MVM9rUU8n7hiFBVNNzFQGGnz3jeCAFW2DU9v4YqNogVgox4Y8W5",
  "key7": "3FdBBykK9pYS7W4VjgvdbteyQPKxqjtQsJf8va4FaGu6wR164qeAEJfahn7kvUh5DGGcX9GHsdmJLt3xhZxuuQrJ",
  "key8": "3yVrauM34SuumbAoZqJnTsd7ZzyoQ2W2GVS9KEG4MPc9X9D19qu66fj2EBzKt9nYJZxgbdZ2QLt1X6h5FaV6mouz",
  "key9": "3JHsh8VArnGWip7YQ1tSPFPj9JRZsp8B5TCCVkqbRxHoZ15Rre1Dub7F7pmTG5hfZ2BzQf6TZ1Bq4KsmHVn1iriY",
  "key10": "4VohuYwv9zBpXKQHWMvXKNVL4ZooHGKhmg2WdZyYAsT2tKoTAeEif8eeagEXWtrp9QkMPK2m7rnPXkwhczuyBXEt",
  "key11": "2ZhDF2LTPbiPLDqpAkcf5vbeENwLpmPmBRrzgc5wTaY7uZDwoQwJA94F7mrvdqGQvjZVQMHLz8Ppp2PEJVJPE1kD",
  "key12": "5qyvX5AUFp1UAFZ9yof2nvCp2ceZHsfSSHpqGCjbwVh6E7T6dn6VG8yjm5RsUiSorkdNmJbVepvM2Sv7T1BA5YKf",
  "key13": "5mXjP5CgwHVrdXX7f8NEkdKdHr6aKFJCnUu8PCy5wrWFGyzFV3ymKRReTNW9JdLUGFsbyHznjnrKySSNdWVbD9yu",
  "key14": "33ADsaYsSWB6CHgYESoitkGUwW3atXs5wUUpLyU1m728pEyiswCi1LwMADQJSfgm5rVjPTqmYPQmt1QTfbHbdR6i",
  "key15": "4VhiSzMio32mLouDK3xEJAnYwYfV3ERigMVXx8n4Zvn8RBPPdpf8ixGQHNGpiCCYXEcWtDNsBQ4BcMnMZmyWoBoj",
  "key16": "453cZ9vz9eF2jxcMtr3KBHo1LcGeQJjjN1aPqQr6GKYmcTnnX6FFC23qq4js4DZs7NiFNqhkzHRVfPkDt5pSBeQd",
  "key17": "61Fh22xYwwPxK7XGYaqND2jNegQPUytDmdCawwkHHiAKcgyGx1xRQ4E5as1Pz8azEmYPjH4zL73yQsLUEhWm5JW",
  "key18": "3oqkDsNRC7pZ8vzc5ZHaqdAYjoUSgRdFB9aTUHve4mQPFLfoRbW2QwSMdqq69XoLFpNT2PHrNtdufHySZks3tnN5",
  "key19": "3ygBA9n99DFcurhQ5z2e1nnVFN8StbFymxyVW1CSq9CHgxX5JrkecySqtPUdLpaQMTyYcJBSMVt74UUW9EgWZ9Pm",
  "key20": "5i141eScjnzLRNK4RKouUapUzHqFfgg6RgRz9EqsB1PbN4jT16FxK8c413kDWTtT5Bbdg2GmCTEYm7sWdkePbVSe",
  "key21": "W6ARA9eoSuanSNHmHmWCpZxqHfixGiJPZVRSwqeMcCEk6XyxAoVjc2TCToitSHfPuNEpEhMBCiZKSbipCqVVkk1",
  "key22": "2DCW9yJ2SeThkaTPsovdxyAKUGLYeym5X7AGgQvrQEUV55aRXQx384JymZF1j5RP85VJnkPYBg8aQvBCL6iaGJ6k",
  "key23": "4v5XDxn8GMSefPszD2JLwCAJ4PUurxPtKcosXhrAZgtftLqE85HYSPt1oaCDdfmqnKTrxiiwmCd8GquA7JXgB4aj",
  "key24": "PTRw3U7Bx2rxwCdTGqn1oncQWQVcPMrGSrvygrxw4jUT9JA8DGvZKUjzFM9YA8QMMuGGDbZKadMMFTaSEJMW3Vh",
  "key25": "4EZcyDGARGSWdvLjvyYBjHTupYFsS68K1Bwdw8bzGRdBAucHTLkcsPDmZxtLFpphQANEbFdunnZFwYM9gzSCPTDu",
  "key26": "4LdL2V9cXsB5YUaYiZbQWfUthyE58W1YnJGTbgSgsoSQ7Zax2NXrsq3MgEPWN3dVxBXgh3SxLeUo2GJ8bHKrMyHZ",
  "key27": "2xX5iMTgkS4kbwjxqmRMqmz6DzNzYkJ4VZYNSJog3yNKDfTXPRLDeF14pjJ3p3ZcPRqoct85aNR9VgVHS7eSs4an",
  "key28": "2roPnB8DrKAABxHYp8Uxw88F2WHKAFKGbK8zca2c1JwA9oDbpWuzWPm6EWBixoCNDupErVLJHFj3jP3cUBs9gF1g",
  "key29": "jCF3j4RHmgMWs6tT7KcEia8BC4TbhuUKAtyR7RPfuEfxBrQ81TWXNbVfk3hhJ2GGdSC3vb2HS8J5qS4g8c7E4dq",
  "key30": "4aL9ZB5M2W8LcF9hpLyYawHmmpewctQfJSaCgTraTVLqDJKMdczfka34pQ3UG6JMaCNqsMroTXR9H7PUtMmZdYmN",
  "key31": "5mcVKuZc4UfwtpoBHFyq3zY5DnB3poQ5vbWr1UJqDFwPpwYVuk1fEkrkAg4ayPHzBnDpZBoS9D54cNA5nSa2bQtf",
  "key32": "3pTSp2Yfm1k1zEqtc9NUW8npAUyw2kTJLnr1Y45dgy54VhsrrqH7TuhuoqeQBfvmFXHTThLFMy5jsbfwN1E7cZ85",
  "key33": "3bheyETF5thQbxePzVtb3U6Cw8FNCfXMUgtuLnsCHocEmrLw2tFyYFXktXwCv7QonYutzCgfE1gXaNuCormih9kS",
  "key34": "53Tt9kVfdofcsCVY515qqtuJMzCupm72bNkUeTYEptcsrbR94ryDhXiZP9JHRA1hwWiYsjvprGKWBLopKycF4RGK",
  "key35": "1o2nYeKpUSfsicoDqn2EjbhVPFmMB7dm7CYScRLB8GWNAH3HyCyW5AYuMq23QW4GUUFFdrGHcjuUZiq9oek6wMA",
  "key36": "3LsxZA4f4dMHfmCeELWh5xyPGCAdrhj5ZZeUhoDs8jdSrSzGMMFHnLryYLaqQzzuQnecRvuwcbxM8VYbcFGFwXJP",
  "key37": "3CkEuSwny71ztsUXSMFNztNLgYs3XebBXAi23KmfzEpy35ptjz9KYF6s164nSLYMHgbsq1hc462m46op9aSx85Ae",
  "key38": "5NBo6XY9fxJD3D51RZc6LhReoZ4eSnEBu7uwdLtnmXV4DryyJEDoBD6RyH4bRiFvTggrjHjEQN4wyffuUbPeurbd",
  "key39": "5QWp26gZmBFhqymedEfJfPqLbNw1SnPHVMZfJSMwq198XUdDHWoq5o4dfMoHPgCe9cyh65Bf8jV2DvKaoHb4RTFA",
  "key40": "4QcFEiyQWVxqseBtKsmWF1s9jEGrhbNWwAFUVsfxg6axFERho3kzYyTuG2BPHTZnyhR6aER7Agizttu2U4snfcfX",
  "key41": "3VZgoop1htFiJJ9TMf8fNFekw27jSXtP6VLN11BoTxCLu7enTwoaEn2NKWpwuunjGYkRKwhwUa2oS1n61y1g2pZS",
  "key42": "uwV2z2iAgAvfEoKs81jbDDvVc3DwHj7ePFPNXD7eVd55L9PpoBbiuM4exhY2onDZvKbcy3t2y3gCViT6dJsXiqs",
  "key43": "3qcCZCY5XbFkKKxGyXdK6YLm7mJuCt5yE9acxqSV9STxwnozvPMYqomnqURA2gfniDvr2gcCQF2dfcpWcm4ZXqvK",
  "key44": "3MWr3UwsVCY4zhkUWYmcnuHMBMKmLArgdE7uWzV8Yo7fkxpzc6gBLyouzmzKmuQmmJYxXaLgWEPg1PAnCv9Tdc28",
  "key45": "3cpU6gHcSwcwVwBT8nEaVVmNYreuuJfUWrA1C7SrnwHRzxqfmeM9rhobuVt5xfRsikDBrnNjyke8oKvg6A8pogsn",
  "key46": "5UJzSwDLW5wptT9fvKefjhaNVdhu1NtaLFRY3NkRGameVJTUF4UCoCQ1RrJSP3XFLkq5tHD4Tbx1tQaAKW8wi47i",
  "key47": "21EKdSoFJ6tonFcbFaogpFkVUT7aqTGpbJW4im8FdTudrdm3ZVYeK74YT9gj2YjKYLEV3HLK8XCtQjLKCJ5VpG6w",
  "key48": "3MLpY4PJ5dUr2BThPxVcWYY24dS7KYYBsDGE7a5TnAw7APxKiULMBwiCFuM6pfXyjKsQG2XQcVyM56ZzVVpvv9DL"
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
