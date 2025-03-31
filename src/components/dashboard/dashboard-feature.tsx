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
    "5vDG2yqfd4akDMvj6ReHUmpMuCsULU8tz2fTtkdTzrGjmnoBfaMQnziWKSN6umYtwbbJw7Yx73i7jv6oNysB2CKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38KJ67zTBGQiVVU3PuXW9oVrYKzgfx4nHauNTv2s9rDku8t2qAKSnGNSCAnhKrTbXM44MbeLWz8r8MdfdpJnGQST",
  "key1": "2SAbQmk75dbstauqfnoyoMC1u8ycHgXrtA76CoxdjAMg8SWf8iT3exiHrR3ZZVBCMvvJu2mnSHYUbFrZnhcWqcQK",
  "key2": "3CrK5HWWwq1MyfcTAGqjDKLsvtnroGqNGRFMrfbXkVrcy47rKjWhAJ9tQ2ZmvgEeq7ipazv6ajof5388xngDZRYb",
  "key3": "3ek5xnrF6RPkmQR7oN2rzmskKBMA4wZfTJZVbQ71ks4JLktyGoQJzwQe1NFaMmxxCTFyBoVPHSUdXGMusGKAFtmL",
  "key4": "2ynAgSQy1LZAULXNEaJmpCMEk5RKJ1mTpv6A5Rk6SGBvCurFyuXDDWp87zicdriWdd9nbD4ZepFUWV5eCa2MLvZK",
  "key5": "n4x2nXEzB2v8j6UN1D9XVe1LE5rhhF6BUb1S6mehrDL8yv3SqHLrhj3sDZmhiVqmqvMDA71t2RKtAvfoEVKbGUh",
  "key6": "4CvkUpsbmGRaPXLHV8XgXyppeRHQX3b3vLuvvssLcwtbCWDc4QRXuozoYQxGe1md27uRfvoB4byV9R1Nbjnq1GZ",
  "key7": "4sSormHqvGBZePmLuXBH6fVamZQvu1QKNDs8AtixRJGnENX3i3xQ23SFaiXZdbX14RuGJmwB7yXo8fnRbFzo3pFx",
  "key8": "5xjHCPYiu5UYrWzHmHXCw5soykdxX4WeS2ac2iqMnYERWHcGh5RJxLFjcXwaVoZ7tZQgWwoMdQKTgHgkVtCQfjEP",
  "key9": "3TLAh9Pf6toHuzSM8hV2ZdvyzxYTPmeHBs6aPceJ4QfLqiELgGWVRHpMDQ4L9cmUeXQ7FCf2CgotG8u8133pmsQ9",
  "key10": "5BwZReq1xmPeCoRXyy8zCXk3Fo2S8TUbh39gXzUYHzXzNb1SDogxCFoTba7CeKkGo7b9oynWdUz2CdAWQYC8JnhA",
  "key11": "2GKcpsBE2bkmdCHS9RHwUot1Tb8QccsnYMaPvzGkteUnXaLvsrjFgk9nPfbipHr7fFTY4GQrPh9a7unHiYr8wuhP",
  "key12": "4hmHrRoDcijuwNgqQovZoBwPsXX7hnKkAwpgezP7eLpw61FgaiNub4dxWEXJepxoS7aMtAwMzAQLq7yQS2rLYqyA",
  "key13": "5EHneBmGNnj9k9zkHJVSVrPWb6ywdoBkPfmybbguAG1KueAfcYRE7HPnE6C2oWXYyB6ECp7DHPPRQ6b1ugqSuas6",
  "key14": "pLvHcn6gRTQmjNhWFFAVk6JkyQy9rtdnnh15Ap1uC9K5YrVuEWtKX4zf5nETWR2MH4kJjmhe3oAp4oJEV3fuzGB",
  "key15": "3ip6qqiSPf5F9ENQwH5Gmqj34x3XWz6eSNZaN89Xt3AnAzEPJFT1HmJqhJfc9rrEW2H5JcaBU1NtJs5EudhxUN1s",
  "key16": "3qYWzyu2wwe427ms5CWD2yWGEAAxyPLwe6KowuTLwJzomLyUyEvGJ3qq2TTNXcwR3X77dX56AT4CifrEUTqzru3i",
  "key17": "w2Ao935F1fazEot1wKanJ372Mh9k4qYdvLBiMWMchSYy22qbLofEWDFNkozARK8F1uHKUW8qdyioe7c3z1zhhdh",
  "key18": "ScoczzoX15nkXFP7wXAVg4zChNhegg6b43Xx6aVZnQaXBdXc2kQRRoBM5uK61enb6S946TxR6187m73WTBJPagB",
  "key19": "qc6bQs4ZTNY6wcCqTNSPTZYjCcfX7QFkciHL6PEyVw8czfEQwrGTw5gomK8ShiiZcvARzkCniRSJy2fKPEH6M5Y",
  "key20": "2PBMCJUDdBcWeuDpGFrRD7x4Hdi9gRvwQXJFeK34vm5nCuaGx2absNEu6z192MubJY4jBVFr6UuaQmBpM1o6DHwh",
  "key21": "5KC3D6veBtmryyv8x6e6WMhU6EnzsAcPJ7KpVnpGu2j5Y5VXFMNN3BBtp2MfkcpjnKzuo3XpSXaTkNmN2rMXCeJd",
  "key22": "63JTGwjVnEgCs2yTfZFR1mnufajm5AiP6f78vKbx9WM6bVhrLkZXGyEriAnjzzrLJimiNhhaGBhL578UkH7bMLYN",
  "key23": "3GyG6aiKS7W36s25WUa22HhfQYVqg7wBLwXyTqm4cYt9MEUyfiZVYcudVs8y4uwkMDdJTAbQeGMCRbXWDpYjbe29",
  "key24": "3RLGLF5PdfayuVoEjhoVMPMcTk3LRzmCE3AmXPAVbABP826Bm4Fb77sVNJ3a5x6cf9vz2EUsk7DMYjvxq1Asmr9D",
  "key25": "5drVcNmR554Q9YyRYRf5pbF1jFEhEcwSBeRb558VZnoU1e2ZegzSrBwdK9S1uYqLtPKmUNgRXck4KH19M6HKhdPT",
  "key26": "81Eim3i2cBT37yQyJN2p2bSzW9NzrrTA38F8wuPPpBGrZNpj8rBakZCxiKyPdLeUa3xrU84Wz6j3hJPeTWh3YRw",
  "key27": "3SSmxefHGxzaTVM1jV2pQb32mAafe9nSCqD7DsEG1rcakX9ZELSMuficsmGsVytRocrESN3CkfyK4FRN9yMEUeG7",
  "key28": "5abugCj5BvZFFg12aTmo4TqDkQ87rX1WL3E8X6BtG4AZwkTQUgRsyCBgahKPqGvpuQbEpMXyfAEXbi4sb3Gjsko4",
  "key29": "4VXNVEvEtywygoYorvznQSc1FJeeNoR8pgawnMWro6cn7akxBXi6RWyPuV8Z9aKh7B4nAMQa81LjwiG7zLnchquA",
  "key30": "4k66XAsL9RaxzJnfZqcwmQBLvCAePbw1UPqxuUEXnzqVgG95LUyFBwGtpPedaNJX7cCuTrYC5yZDXt6s7ErgeDCb",
  "key31": "2twVBYFAEMHtpcH8RRZexnfjrxs59Ypd22XPw1Hnt9M6ngkMbrfpQx3FbicGJsjgZMzme1u7ja2bEgEd1s3pSn7J",
  "key32": "5XHQNKF2UXwkoNp5wgUZcDgQxc2KAvgNw8JXdtVBC1xDCciYNDRK7y8QKk7JHz5YsPFFdc492CAcKJsdGWUYARC",
  "key33": "2FiZBUXQSmfM7S4Pk7Dk9e3d5rqSdQqyzTgAeZztzCXVKRYkRSAdVjpo5pSaRJowdzPyX7XWB9uUccF4ZCN7Xx5X"
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
