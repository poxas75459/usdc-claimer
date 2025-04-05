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
    "2CwrZy7qYPYYf6etBxXPXpJqE4axa3KoaD349kRzaUJPHnmPJdjYDJBjVqkR7zUqyBSMhoqiE6HBdHYRM8UtMo6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "263JQ9JjqRdPF1p1LEHwM9jn8gKDiYz9eXjLfGsumtirnrTfbP96H5eVTrCgEMReajB1Q5TvWB7JkXD7jAHxg2sb",
  "key1": "5u3CyqHte9PpR4KzZtSe3Bf3RoGNjTauNxv51bLRxvPnroemu7SywaJijng1HRRXSdPESzdBugqepYVxzR4ae7eT",
  "key2": "fVfsTe7v5sVciy1bWGwpyMGTm9VxVu7hYetrqJVb8iWcoE2X7kVTwK64kajS1APKK9YhAKQB7rK6LzxbCbTggPe",
  "key3": "2uimTvhXWk1tKoVpj6tWKGu46xmRvgKEXV162prhZpmVpXfUR98t2QfREbMXEyzzpTLZsDBSi1VsZUyYwBxj6sKv",
  "key4": "3UKwipfhXbyo6S6RZ1EvHVLy3F8mK5rAb9AoZC54wvATmoQ4VTPrYdH21p8N7r9q4om5Cn4P9Ve1PYg2fFcSxoQV",
  "key5": "m8NSQW5PKNhkmrPc6FfruAaodYNRFjwyyxKV9VwcCKLk2a9UnYdCwKaExgC169577YLj3fEyn5fTxP1nZSzh1uR",
  "key6": "2PYSWvKGrHmBguJVoFwBa8wNj2PqcrstXhiCPQquWcBJZTXsUE27CKVNn1GJRbGjmxZiPr9fMS3SnnViXHDXUuPS",
  "key7": "3HKUzNtsZKMv2dcZ5VtxhXCpFGhdiS99ygcDHXpZ89WjNsiGCo2wegd5B7B4W2dkEdpecBDsNsfwMMGwqqY37M62",
  "key8": "2F13cFfUdP9GcUoD8TNKPwi2tY1bjZQecYR5JhnaNtoAXnBfzugEGHTj9Wsz733JwVrGouZsqBbBGWs46DUuMoye",
  "key9": "3hjUPgJceYh9L4dEBvfL93jFHpKLHSHysu7fPdmFMdP4RfE4JBuJHN3UamzJRT7AFKFErc3mvgs5g2KLSUAWHHZt",
  "key10": "2SYT5JztfXyPbJsG4XJwVW1mditNJzfZ1SmZ2oHgL7XibcnS2VEE2jMBWAKrYaXz7TkuNAEiqW5AAC475L7NrTfo",
  "key11": "23mraw4YSFkNELLTNLAD6uATo8CsU4NwbpkMCYcL373xZnKA4h7j6D7u7XXRTy7uWKfcKd6zsX9vvFadFrdg2Tja",
  "key12": "2aN6t6PPdqSookY55U3Cobm6GcGTa3KHa36dC7sRfDMgPocHQWjq39xBgnFkFmE8Srvb6qWuhr6zhnQVVDqU2Cgu",
  "key13": "43UPmNWQyE3aXHv8xEzyg2v1dXH5iubVc7AoaP9j7fvEYPABVCMFNEeT2d2Bs1nvxWN9kxnvS6AUyELShBjta9sG",
  "key14": "4Ze7hMh5zKpNLqAKsZtRLe9QtZdXWAAZoQKe4YSCHMDvqyY4qqDSQvH7bTqC6RFbnjrKhRLWZ2VW8WcXG8TYHziu",
  "key15": "41feq8rqRGiGYSvhT98GF2cUs3HhVyYwefrsM3f7pkLCpbkZF3Q2Ujkkbkp7GnZuucQYs4GU8CTvQN2C7Ny9d8gA",
  "key16": "52iUa9ktSdtyTfzWmVmNYv42LYjy7bvHjjy6Jo7NfSEgZHznFpj4vyzGd5NobmW5LXJkpZUYyupUgr9Hm5KoP35R",
  "key17": "37ctaAbxXuNTsbs7ViutT3qQT3qpHfyrYUmKpyGtG4kxGNKWGQF45GyATJSGbiZfAR3w2fYzA3hkpgEhegwaCBPN",
  "key18": "3LdSeHm9Mq88CTfWwL2D5zpGNh8bQyf1iEuwpf31ioNjAHBcukeiY7fH5biztj3BWPVoQy7cLukr9b8SgfdUae73",
  "key19": "3Ui2nCF8jW1pEZ3nPCnL3LA73Poh5t3ndSXGFwFaqoYx2Hb6kKVMiS9dPKt95N6g5em3ZKpjQnGeP18CvF5fNY7D",
  "key20": "2NntGvHBP7EhLXpvf759dhsJvpkHkPiSMQPXY49pd7Hb3P2H48Ut1PFDqrZ1HzqNFvPjQj4daedwxsnS7yyiBugN",
  "key21": "4ChGwxqHoag7pHxg5n3wMwXaBMzYFCXSDoEYt1N38r42kd4q5V3QM1wW9nZwXSVsPZvpqfLVjVZvuRiEJ21WHePF",
  "key22": "5XSPPjUdhfpFpSPsfVZNdptikMU5mN5eCG9pg7dXXeJKSXgWhjXXQYPSWMafC88saP9LVRpwRp6j5B9CrAJFifct",
  "key23": "64wT4w8xzzgES84CNjdSz3BY1bJZMeAFysS9aNebhkCHwygG29fxQnVr1gtbLB84hewLGLMCzHvCZ3GFTWPeogt4",
  "key24": "2CQeqm8tN6j7sycdbQjZqpqNJisFUropznyR639VCQt1u7azwrwyrcfryxaz7er9Lum4pjApfSf5gphZwoytxjur",
  "key25": "zechDwPihfi73nRzTHS7zLjsHfv9M9Uxx1nBTSQuP5kuSxhqeogpdgLqVPWVyCMHdpKy5hTk4KSQLXEiG3xjyVa",
  "key26": "467i9aPYrKTLSWzKZ5iZ1Hs6nPcF1VzFbfEVyph6YLNH593Te4q9DZbrF64DFsvjGHiMLju8qtmFsLrtexxMT9VJ",
  "key27": "3jiR8CsqxYQQctUTkN3imtmc8FFSo4VTKX5iysYGXTTHXJgo65Uyu3FEMPm4u7gwun8b51GMiVjhfV8Qb9M6cRm1",
  "key28": "67r2Mm2mgCiTHS8vSgvF5o2f2K9vH8PvR3wBQpnEh5NUrRW98PWoa6mGDFdr9X2q7Bgx6qcd7buQ2sHXWcY1ifp7",
  "key29": "2yfx7zhNM8m59YHcNnkXHfrbbxZX86AwNLUmtmARwTFFYQraf3365Nx8zt2vK6z5ST1b48MZ7TsTH8zxkMmdAG5o",
  "key30": "2EikAMN11g1vbQw2nuVEWjSjLG4KvdhFouh5CDRQdGhWhX8HJ4gzg98tegbAe9LMsNm91USXCL6PP2EvbDyvubmQ",
  "key31": "2cMDuNFHd8sKhvs5ww542mWBJsFhWtfAVFfyobcsUULTaEEL3fyrxQuw4HFLFG9MyHbQZsYtKumzXyoh1X1Sqpc1",
  "key32": "CA78ZPa4t4Q3p8wA8kQi4p5Vsnt6ssuKYWFztXjcEn11ShSrru5w4bMoRoip2mnTbjah7yXwZCuEwYyaHY5yaVw",
  "key33": "5tVf5xke8bLZPxJ232kGz2qJYkCYQ2Q5CiBEy5jHRrXdfzr7JTNFmJWAjDUMtdyQiQV86drHTV38GQMr2PeTuypC",
  "key34": "3gL4x1fBzJ8s6NEVKxqpNmZMvtoJRG8vpCuoEh4WeSffGcyuVJ26acR5f1NJVjUCji65YY8LL2aZ9GmFZZSYoDax",
  "key35": "2vMsUqNhFqzN1FRDw1ciCELtHems1WscNUY2cXMAgP9JeAMmjW6tha4TTRyYTdWb331Eb2Hf4gsE2TkiDn5dsvgC",
  "key36": "49UYR4vGmPtgzXnVMeRUdLzf3VKvRyF2pjQbWBt5mFTEUgg4T6mbBZFbqo5rdymwi139aqMtML3S4FY6xCT1ab4a",
  "key37": "3SKqcXFg3R6DtF2WCo2LvEKQpEJauvUW1aGZkVSyVEaywscmHL4f3jarWNB3L5J1KuyZg7DhgGn9iL4yXKSyUypg",
  "key38": "4d8bsQ6p2robX2WdoLVJr2eKRnBiCKCXn57LstxXTwnR4rqeNiqEB6QveeeyeCuHrfoCqf9BgeGjnLGbacRSvr8w",
  "key39": "5v5UPHLsRCggg54dSYZvLCwvVcNKUKT6rMTxXjREJXvhzFM5ev3VVRxC7CGws8kRukA8eZPJxUyYDu6QWZAx6W5",
  "key40": "645P4uZ1Sn6jUEnMCVLh6M2Kj57QQ7YNUCk6QVDghsk2uQPUKWvhvV6xVZSXjhLYTWNsjP1F9VqW3gXMvmXEDwqG",
  "key41": "3i1uLHcRNU8ocQB5Aid3LEz2AgpDrG3nChSUi6rorKSCpPLKtf5HfS87e2nQvaazAAuGkWyrX8u28tvYU4dLtdjt",
  "key42": "XHCuMzofuVtUVURaPkRnHPbQra4pEtPzKgCihZmEtbehTVQQp37i7jACwBrDypGCNfKzZQozNBcifTMZSjmMbPq",
  "key43": "244kdqedumfTKRJ8YndxV4rAr7FzJQmtD9YtkTBZMopVQ5eeGq1SqYYAnx9TrtHxUiYUkaLFn4P8nmc7q1Ywh8Va",
  "key44": "wyJE2gU8sM3rT6bqbbr4T2cbVgfycMhkiCkBDiPnwPk5BsXAChpUD63hCTL2V6tiyWkJLevDbAW9zrLiFJ2MRso",
  "key45": "4bmPMNs78jL1UhDWNCNRHTMzqv8h1zLd49PsxX6DBzAoqt2ER8xdD1kBenv7gDMPWUKSBfrsABhHm1H8fgDBFiot",
  "key46": "47HigZjX9wX6gqkAkyGESFvD1TrGKzs1nKZznwtR5A8mVwHHfP5eWviuXNAUJzHQTCYNdS5WtiHwQpRVvAJ77sQS",
  "key47": "4q27qg9sppK1HCNkyXpUZDeiMfZJoA5MrokxY6E1hgX8hgvXL31NTsdF2o4o4dKk3LjL74KzywqKt8ohK5TX5stt"
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
