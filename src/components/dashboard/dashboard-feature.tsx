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
    "2inDr4RrnSxDWG9vLBuUnzzox1EqziavBWwQCsaoZeSpb88xyMfrWVsTAJXPnmDjQ8AinehfcD5eKj8YPdGZHVpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oDAbko8Xs6cKqREzC41PcmKQNyX3EZrEak3d6mSKPdERzBS1LV9w4UdCQPhJ7rcxb33FQ9nVVSoJyDEXiF1F8Xx",
  "key1": "3br8my2W7vLe3EBo6frF4DbD4pvAJsrxofXotigxtV9U64372ETpaSLXAeFn4UzzzLS5RaGQsCDucTAzLExvJYgt",
  "key2": "4nFGfBRbeFjeixGD1u5WMDZqDrvbSkVdSdKQUr6cpyFY8Ea8WVizdoqvfoMJVhmn94RSQketn6ZB1ajqDbYXUDZv",
  "key3": "3hRPW69STR8HJ33pydwmDaepUD5ZMwW2P7CW9hpwPF6XEZU7smp7en4kahKuQgtd8mbsFmD9Dq3AtenacJYk3xJU",
  "key4": "5rN4D9gZfWDNt7vjykvYKnE5QmKcUhe386ExFpwf7b8davQXGs9XX53KPXziPp16WkZGnRE3yjFpGKvjJERGESQ8",
  "key5": "ex7HDkxU9haNVbL7kJVae92B1DEKQxdbMQpNxWTVbyWe9q4x8FW6HhBHcZbPHnJ1oWU9yR8n3MjswVYU1NUKyoh",
  "key6": "5uQ9GyQk9twXsFvtpXRXVG6phgNM1VNUTotF5g8bszVVXPcE4S4mQeDHtgRpjTSxyQTQoEnQzywDdLQi7ZoiKcnT",
  "key7": "47PuwhBvKsc3Xw2hBbwUeyXdVVRSgmiLGAJdn9hNANdA2nsaxHaQNst5xGGBvkebrhTJs3HkWFaSJYeCD6ESUbkR",
  "key8": "4hSqo2q9wUJBEqPhgFtnnqHsxiETJmSsakWjf4E3McixDcQDdx1eWUVWXSjaFuAvVLtLpb9occ8zdusUdRBZhKnM",
  "key9": "3KUbTh4db6CY2eJfWc9FcvHF9DoXm9QGr1Er8CZCMwoMhgSutLRAVqdwrJpp9JANjmuKitPN3CMhttERypUY68sY",
  "key10": "4dmow5bKNj8XeFBSBomzF4yATzmJuFiPB9EdojufVpDvKpxKsbz2BkKMdAUXQzSySb9HAnySR9y1t7D1Ws5UAvPt",
  "key11": "5mozez7n2Yur3mc3NM8ZiGNT9j6kVhyAgM45a9jw3bKs85TjLCGnLCodqhme92mVjMEscEy98NNVYsx9fgMuAD7H",
  "key12": "4dRGZkvxN82A5FQ4rr3vxWvvW6zZqPgiJ86M3KgHkdU9VF9oxkRUujaiYMDg35yb4yPYaAwriy9KanajhjqLMPzc",
  "key13": "3YAzRQrxQR4LKvdgAX1DxSLvW3vH3teonZNUjPhPfzP7oetG4cGnc64eA3u4Z1QN5LZFKa5So7Zz1B9eUnJFXSgh",
  "key14": "3jecbaVZd9DTPaZBBKrsxj3K9fPirFJv8EY6a171YJhPjLi7AA7Ei8XphfvW24DNZCGBYmb7KzSGmYub7y61o8Tx",
  "key15": "4JbEAqDGEpW5YBQGc4bdUDsvJKCdMvBo7gyD9Zi3cNtJcM8aff7V9XMLHnKL4eTZ4bJsFEJznpVqQXbQAhnoAxcb",
  "key16": "2jw7SRFRM4XYzaReA5PtW7ftE9LFnup1co7kQzDgXZyYcSLNWqFLCqt5QvAXG7j6xz3HsDkDtzs3jxysqpg3adWu",
  "key17": "5zLWj6EoF9nuGfxc9cKuQm37E5uK3tTVL9V1kGBnAQHJucH8DrfeA5YqwojGDHyfvyFNzJ7Aw3yvVesBqEaSgheC",
  "key18": "3eg8qeXF8t329aMyKufJarTfhtKDzpoi5ZWe1sngHgkF6EJvBzjFPNX3vbWotyvzbCis1kpixRcppLGDsVi63mNU",
  "key19": "655masiMw5fHVrLwr3h5qdVMcnJyHVXw3LpDfoDJwGajUkD3Vfftwz6G8qGLJ2XVn15HPNPXvVip86ji7yjbZDww",
  "key20": "2y5w1N5PLDtY7hwnA63MMWz3wCcx1HmpT2JEJ6rgD1iymrZJubXMHtE4YGMvb9ofoVEXGxW1ZXCKrwWvQM1VgStL",
  "key21": "5CwQCzBrVWomrhXUajGsT34fcisfkEpRxq5fmWgwxJ5XhPpbdvkRdUmkCix9uqSs6c73vGypNbHpSgBjUGunA1dg",
  "key22": "2omDYffbCcLtnzbTKpA7tnz2BHx2yWiqZa1T4SxeAUuYZbnmeLhqh7yPzTx5Fsjz8xEwgXKckdT3rqbPLy3tUKf",
  "key23": "5bp2EvPFVM5Dt1dFdsbXFbTmSMUbgWs18uCPwQc9QgutWUM5RcWQ3X58Uu2dkNRAzisRDHTVvCt3QKrmwnDqZpTo",
  "key24": "33NnXfsaBp1xte8VbF5u6fLvZdvV5Wt7Y8NNb8KHjoSdE5K6RvwAuCchkBvHAa6yduMVk8en5WPAjiKLnyiNG9wA",
  "key25": "3p8TE4YCqwzZrn4FUYMPxeTVsgLFCMG7R3exEz69gz9ofwChX7TnTbj6fDaxmBQEsFufyzj1VcBhwV3e5gnAaKyA",
  "key26": "5UxdcefngMW6BAjTDFJfP2YzsifrtDAAFBbTBbuFforBNjf2hbdmXsLEAm3GBEPJpwVNpPfsYGKvbXdRT3AUq7qR",
  "key27": "4T7xixFPaZHK9rX1sYhFE5kg7DtUcWFn6YN6b1rrSEug6wMRHoC7ku9hnKm5dKSTk6AaLC4hXUTwZQoPxRFwd92q",
  "key28": "QJLTMAj8BDDmYot5K1oVAqPDSt5DBQswqsDRTZPFAvkiDiutSybtt4378o2oyQYSjcmeLG7Dw7dLrGBxfr4XDEd",
  "key29": "4Mrb7sxHgJAr6gXFbTPXfsf4czsrfvFafvMjyKUYVPrjKkgpzqc9hetr6mkHWt4JfDxBckZsZ8wMhWVpwc3iSrVA",
  "key30": "6uCedHwHPsVv8hncUxAyfyWdxLpmnGi4szCtBxbuBkZeRF9CsRT787dDHnMaAnKr4PRCDZrXspkKCAHjjsPG6pH",
  "key31": "5ZKybjUKouPipWTRGuwkHnZvCKWWRFMpjawx1BjwCRw39X6mZLBJAJpmqUNqwLZqbeUXoyEgrxCiMZDWRuu93s4Q",
  "key32": "4LheBHfw2oPTu8Z6jxk7pSvWUhV2jB6FRc7iRyCoCfWZB3iz4PmT5ifL9wqeeBuYp4DGMrrYsCdPHqsq1QPRJR9P",
  "key33": "5gqMaf7TgZVDEBhrtrXeVjYxfJj2EVPgdyyUyVhuU34wWrtvGnhuoAjhByBXfsw3t7Av9gznwqmfLabWN4SR27ap",
  "key34": "43Bs1s5f5QuV8GLqKYBoVx2dpYN2zbmUji9ojEwhD8oJ81YJE2pu9EkehjYZH4NeP8VwcD3xManZnTD7KwgSX6B8",
  "key35": "4WF5om6EFNMScU28tGyHZ4f6KBqoSVwhz6HnAnM1q3PQ67xVzo6fMJF3vaMbHvqSsP9MmH4oMRth2P4ifAvZ1bQD",
  "key36": "62ygxRpw5GFr9qXvTApLwfrtXKQRQA4vLGibwKK8Jd9NUH3ppzKZ1BFZs9wVSfybqZWhc1Ne22ncB3wuMed5YrVn",
  "key37": "mk7UZTVW4hg5pbxhoofCi9kXwWLrZAVdp9Scfg4BaPEAwr1zg8rvqCSfBqaQUxkS3c13v22w3MgynoWag4Ck8kg",
  "key38": "4xUoYWKDsNtAmDdTiMNEXy1QAwBkHt9fJG3Be8iFm3PPnMDmzKc6eERZLzX7QCCeax4dhxrCgBx8M6wauXn652eU",
  "key39": "5oQEcmFkoh4BEa39iPcpLh8W2tTiHBQCw496MXLgBK4acEzQuMyHdMQqShtqLXD3dv8SFRjMGC7MxJtpr42X6bA6",
  "key40": "3vw5yXa5ekZ8sQRkt3ZqQesnGuW5xBADrz1NdbFUXf9UQnG3Ej9RAVhAZrQDpNFxYD3B6x8KSvEpVoxEVp1uFJ7E",
  "key41": "2hbXad1mTQas7TmcwdSd17uueKr94xm4NEFGYq6bUqbGNkST3BVVd84WAYiwPny1nyg3LUXzEProZKwHxnFoz6g9",
  "key42": "3hb5LP2jgH6hvBR6muo1fCdBbVrJdyfJmeUguPh9F5qju84h2xnjmzGwHA4nQhmRvgZbtQrnm9GoxdnhDJtoGbvx",
  "key43": "5HJZ2ChrMVVb24jK9TLKoh5M9TV76rRXYryPKNaHRYy72wXgnFz2ya4y3ZyBLdXJr4hwwbRnhQnUWvujvzMLfBzU",
  "key44": "2rs9i5tnedM4S3tsFU4gNQqtqCJfBDSY9APR4vekAFgjQDq2iQzp5GKR34YXrngAAUAkmwpcKTBJdDMZsdfP8Qy2",
  "key45": "5q5VeWBtZ8sHwbiezkNX4JR8ha4MvFNp8CHWt63zXABotMDkkQy6Fnk8eCxu7ZZNKFZ7LhTwHJUU9SgVVdLuKc8T",
  "key46": "3LZTp4WRwPMZwDPatcpzdJzzVse4RC9U7aGVhvBSCsRos25yAm2EuVWraSmW3m7cGPLXL6DjDQ6Ro62MocH3DMYh",
  "key47": "4EjJBAEDr6Y8Tq6XsL7gCmAWupoweJkMkDu1GCYkJqJst5GB3N4xGfARjHRNjMjjFurVqcekaWadHmshzqBSb4Ef",
  "key48": "51MG39jwRB6RuixH4A2iyRV2Fy5ph8pgEnhabbYZvG5oPeFGrsWykHLuNw6YWvkaFBmnmxwZdh9hh4SWoQK8ZQMh"
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
