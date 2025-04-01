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
    "4eq5qL8AXZLK3gYgF1nwgeRGtvYGVbWojyiBYBhvAPRBJL3MGg54xgX65hbvSXvJW5NAkdnJjon43VpnaSLQf5Th"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dQSeG2ntLNguRFnr4Nxt63U4YbaCVWJdgj34Acni3x1WW1nNxYP4ChAF4VaQkB2FxMKB7wRV5zHTdsWFXRedRDt",
  "key1": "5vFhH5vLiBCQHtiwuSk2ZWWvMXxUsde37UiQRePc9r7G7SErprcervMqKRmD7xrVpKwWi6MxqDsNfyCWpX5VaxnB",
  "key2": "4NWz3PhtwkNPkTgRDBNJpt3EVkFBMoiF6tVpH2ynALKrq5QyX3qVuyp9Avh5BEFQ4G9pfQEJwQ2gz9ripADWF8ws",
  "key3": "3DiLdAnc5qAUkDLUtcFxKiAmwTB3rZfAtz9YoQkQ2E4FEaQUEaPZ9hky1RYJR38eqF2DuTMPpk9ySaccJRzXEUD",
  "key4": "5GRbjyAwWAiM8ZJSBaRBaLWeVk5BZJP1yLM38SqTXvH7EoUpmvPuFT3M1dxG2LY3ZGFiy6zLjRDYnFbZ5ThbtTEz",
  "key5": "FjcSUmjg5FdL5V99UZYqrJyDDUixeG4ZHxrkyLZYqjQCFWp8VMdMZpoLX2KRMGTt5wc5K4swyFyvBNmofCx1bFM",
  "key6": "4bRVuiw9o7FK5iRsfp3r2TBgfYU5DQgLNFcXn1AubLEBrm6gZdhxb3r8mujEtUSqsJWncWhxVDBd55HcDAFWY2Xt",
  "key7": "2XXoZCCSS2AwvKSaDfYVBUtSz7GXEXz8yki6LDP7sGAjZ8MHzF731HvWfAd8yHgw7uGNisfw5MfHdKzd9oGr7pqQ",
  "key8": "2ERvZaWGBgZ2FszdNYxS4VjmXn1Gd4qbBeSWEafTxzvQ7TYkr8yM9TJxoPoq96rs8DdZDyXV42r9z5sDr839UU1Q",
  "key9": "vNM6Fy3jAn3DNdnwtzanweW7ikpuD18JxmSf8BQoV7uf1JfcWm67HSr5WPKHi4RwEHCQ6cY38Cd39sjTE1V9Vix",
  "key10": "5Y6to2QyAcpKmSK88x1Mod3e6a9TZH7du6QN5N8eoCLwXrFVbeykDStsLd27g68FYP9sQXLVzgcVFZrpVRAqcTBt",
  "key11": "3bwQzcCxZ1Yd5cuetXKj9tF81xd4AV1HYhijMW3krUxy93CfbXbxZNaEbCkUPVSqv4wqLp7Hc2TwAwsjhHUuQEWA",
  "key12": "3vzP5AwzRK3WFHJq8v19FmeKN1VApsQvVkVvWikt4rhFtuA4dH1yVGsv4Q5Vcdfi8f1VJfoGAL6wyB7AU8PaRk5R",
  "key13": "5aMkPujBDQQcwcxr8AHRcbY6gtp6pmQvnB1shmphjimWsA9Ztn853xsDUX6T1qYFG7MnLc4d6bX9SFB5r59jv7za",
  "key14": "43gHpCWzuhpwMR5iBdAASA3cS16CauXoAeYM8Dn5Ziqe9bPW4m1F56UW3UHZXRiHSTjbvoffVAX6ND7xYmueLKfc",
  "key15": "hdpDmJLLWe2jK5wKg2Sg8s23u7XrzEFKqSHjG8XbW5b4NvBSifq13tKSbcadoXc7BLsexFfkT8o5cq8StWhmGYc",
  "key16": "3xGq4G9bBu9wJXGfY31uuSnpTLbsi2tYtrRshspqRkGKXJpJWwmVswQtFhqXoVRtZcwhnwW96PY1E8FGr5NHREKs",
  "key17": "2QWuCGZAeEHe7ru8CzVFxVPPH9TreiHnRFED7hggZDcYudrpc3PK4eCqo67RrC8mt86UnPhAtJjzWY3S2727q24n",
  "key18": "2mzfbrx8faB4wNHgpFFrcdA8nNzCAG87UH5F4H6R2RLKJJHgMe13424a8GkKo2aEbQvQTLQX5US3ipEUo1igig1V",
  "key19": "UbkBRKn9CWV3RmmT1ZrA8YX6jZoyNid7Ci3GTxa8yQPZdX16HczHdjErHSbfaak3h4f8uba9XsHPGXZexsx731S",
  "key20": "2TXi4jZ47PJXfMQdGReX3t65mmU1hVo1We6T8hQRDVFggdczrwdvf8CPVWUrfNEeqbhJqLLjxj7LtezoZj2sojbJ",
  "key21": "67nAoXmA1nz84vTP7WPAPMX6Fms1GMoqzLEVxzmWoeGFnaQNpqo5WN9hqNBL2b9L9UcS7KCBwFoR3ahvQmPq3VwW",
  "key22": "2L29dYzJuTbCsL8GYcoHEZm5dd6aASYZXZJPC6gfsbtqfM4CCqNsGnaxyw83xUppCxf9L2D6Uw3wbGbRavgzxnv4",
  "key23": "2b36NxWPZwnUh4A3Vuaucgz2yvLgMLWMZbz4ZftuLwHa6aQ1bSasPbb9k5iQzL8Cb1u26EhdMmb6qV45BsyDPpb4",
  "key24": "4yGMJ1QcCR96rfw7oJDwdTaJ7MFQFLt25Tuw95bCodbaQakWuVCX4HvEPrRv4VFXKA31TmvZu3KWdCA6QP7mRFSo",
  "key25": "zWUJP2nTvNgPQ7SwVjzuWYjcSPJJW1kfv9Y7h3HPwEbmdEfAZHtcmKf7y4G9AxELdH7CQiGrucdCR1WgQ14cgRY",
  "key26": "25KsLUz7BQDzEvtmEnmEHdjQhduqJ9kpLbvAP6LK41Xh4NqavUgHKtUo2VsUXymHiVdnqv6TFasB78HWpQ7492mJ",
  "key27": "2epZULRfvoR7D4BUrtP4YZHLY3y1pZtpN1r7o6CzMrwXuzFgzjFe8SvMgPSphAm9Q8mN7q48PLkibUbnbX7aMvni",
  "key28": "5owb8KCejvBGefdMHzmBhrD4V7S8wbjkw5Fv1W2SoENE19TXo8udtojq3iGF3d2g2Ku4LmA2m8xAp7Q9Cr8NtvL1",
  "key29": "A8oJ6av2i4uTm6581TCs9nhTF7yWbF3aRESTBz5bppMnWmDM6PzCCsmQpBQGY8FFq1rpL3P8JoAATs88nuX35jP",
  "key30": "uQtFN5pUsJWVa79JAZcWkW4q88rZryT9MxS5ZbjaeDmUYRiLEwjqV9KNWLHkFpEKGMEU74jY54uU2iPwrrSCqjP",
  "key31": "2tDFez7ZyfsSa82PB4SRs11Dr6PbbDafgaqud3nHMiwnv4mmC3DAtBPDCnWb1D7VYCVVm4xDCtfKJxb7LEoetVvx",
  "key32": "2czuFob3QraYu5KEbVGm2fDbL6phRsWx48PnsaePveFhLim3pSuzFgQ32JfvXUfqky2TqYtHtBaU9KAM8otGCKeU",
  "key33": "3TCjkqu7GrwaXxSVockaNkDJYowHLkPiobrujJUwjZjzH9dWSR9pXhtvx4Kqtd4LMhodrNtgcfGNrNz1wkpN8gYC",
  "key34": "4WDb5FBTbsMUUpm86sKuuKKGLYJGcoNSwHj5N2mpWmBred45iYe5TDvKvnKYATWBKBcD24X4AjxLV2LxiNqsxQ8m",
  "key35": "4PguyLM9mMPo1NAnV7FWKD9MuSRYkDnAmXo5bTK3wfUURLKbFJpHzz2mPitePo7rbHATmLYzYw9EHoDihQ7MNnfv",
  "key36": "4fE9G82hE2JpiQBGriNd2EeHRct9BCSnCD7z5qKXXDzkqzxYGffLsrpCsbJjY4jmM8ccfkvENjxSG9xqDBDPBfts",
  "key37": "5htREGx7A6A23u5ek7PjpcEhXZMxfb2wJgEGNdVFpo545D5CM5cdtx1Fzh9F8vnDRtwJcoe73dcnq7ajGv72q317",
  "key38": "3v31GGwFtVnwFt9qipQKNZd36apQ8iQpbQvhmTAz3dRic5oUiaosNC2wqzW2rTAPusoJRgvxdjcfprML3mkMSRsG",
  "key39": "QeeKf6iu6MNLf8wQdTckKa9cRXQn9eNWQNRTzYcm9xf5HK68f5f7wsWiQqE4Wged6esh7jMQG4iCbLB7h1RL9Q6",
  "key40": "zdDaxAC5FPTtgRBW5T4pkY7tqtwFWGxY5EX2bfesyyPSX957yy1fe94iDuqbFjo4X3dvZkM2hdSZQFpXum3NJDR",
  "key41": "27H4znDR1hR78oYeSsBiWAVc2HZx5kuAkWhcfAF7SD7RaxB3Lkqn3yT3E9FNjCvJi7oZZzKLDb1L93LpN4VT34Qf",
  "key42": "4D5b1TVtM7HafwYQH6zmvZSsGXr7FeAqZ1eRzLkVapb5N84dVzGarZJchvTs17dmQsn4XnUNbqri6ecegUmWJDeH",
  "key43": "3rtCjijxUNQiX7XsQS3ij4xFgMsJmTmbx2euyw37jxsUoMYPYz6mG6oViRLExu9saG9jzKqGQzMnbNwaESEtWRqy",
  "key44": "3CgFoiNqY49CAxw29cg6ft8Y2vGMBPs1YUyqahZSn4UPyYy2t2HAKaWc9aR6n2nWxmP9kv5eg8UFNjGFvUKHUXqG",
  "key45": "doNfqL9iaR1JSrSJmj4Jpv9y3WWrZWyazVVKi1P6mQ9AAeQHNVecmzzUxsQd3aQPC5jiu283eJ15xBmhrKJNLix",
  "key46": "2V9986wVAUgcLaNTA188AzEb27UujXnE6xccrCEDRbyZGLCgshAXM2wBdrBGYjNQsiKS97ujmp9FTXTHzyJRdRLs",
  "key47": "2STQ491TL9XCwtHd9z4h2ZBjBR1vZrADvpJZndnEGYdkZdpfYaUmTKUXo5zRiqh6SCHcWNRgFUg6VzYw46gJpEEC"
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
