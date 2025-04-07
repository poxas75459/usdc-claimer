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
    "39FkAEnaVtiCyrNLfKezYsYwcE5LbAh4xYEXKenY7RZymcGEDKXCkZyG9KDPWn2qcQ4WNT4jBtJM9fQLg9vTGzFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BDXBqMJ7tXEoCUC6Y3Wiut8e8hBnBbgnLHVnaaYE2DHYY1su7UAL27ZPDPWdetfZ6d3mKYLQf33KjquLtfpZow2",
  "key1": "4g3AUHAHaQQ9gKxNGhAVLBcruqFCM6nxnPh1Joy42tcpAD3Rn6ZsT4DWGLPTzAHzB5nUYmevaWawL1cr9TC8LqZE",
  "key2": "568SjmfSFonT3Rx89QYpnbqTDWksxrrGQssAag5w77KnK5WQfiTwfBcAr5HTuYRrVS3DTWTGthxopTFdm6fyVLXg",
  "key3": "2VojwHrvJ81D9Rmy99r6HxLs4kT7essEt4asPwdYzCNzKyXmSCXvGESJhvpMZ2BkzBRDnj1CftDT7SuYZ7b9JFKq",
  "key4": "eN1UEGMcYU3s8Z6RvcFjuhF4gWSZ4kRbfapAfd2zm4dK3dRACDbGbYLyansLRJ9PEF8Y8VrHj7togkdcyXtxyKv",
  "key5": "3mCxGsyHvqJ5ZxRcMSJLmpWh3waSBFU7WBaKzegHjw42yL7xtoSjtQswwm4g4Z1tahDxepUJkudoqXHizNvH8eaD",
  "key6": "3sQwEhm9GC4DzoyccuGJALLsVdL3UacMirs2hcpxNjRHwMmCQJbdU1ae6oHxCUfdKu8P4AKJbJuPfMw29EPRf9sk",
  "key7": "r8s6Zkc5pqo5u8d3dszP7kyACYnDGz1Cdz8NCXna3ddiYnsQhnoaDPtxXBuAK9N1n2GiWcJDDayAUZSVVQTUu9j",
  "key8": "b7pFz2WcQMPzM9LRjZpq14VuPMJLqnGjbegBqb8wmaFg79VbUNqACRtqwEwNe7V62tNEvDcj1vbkmS94qqdFhkF",
  "key9": "4cdW3nJFfXibYHyVFhHwtJhzydafmBRfR82RicqAim6k8NRugCdzZFSXnShhk5tpepfPpzAd8y7CCqDUtkf69o3M",
  "key10": "mqDH4T7v5HKMgtPt4nqqkDoRCLXvCZzZy5Eesm38wNNDCD7owctuVuy3mW7GSz2PVCaACRaqbDuvsnYc4BbpyZk",
  "key11": "4BpUygyJth4aq7EPSiPjFr72BTQVnm8hyghCLomvuvBpBuyFZDy1fsatwWhtZnFy3JPDrGBK6zqMB3Hx1fqneLP",
  "key12": "2Z9Vx7aMNnRKPz1iVPtbK1JuWLHbE52mcqTbkaSx4PJd97gj93s372ugQLLW8X4xR4Ww5391dpy2DBU4LysWuSFs",
  "key13": "3GgZtnfo4g6uWtttdVYKvqy5iwi65zrxnoVRYecYCVsgJjYjV7kPMSmZZ51YApiYd77zy4wQgsYhp2WWCwE6mR1v",
  "key14": "ZcBTtsYSj5mhDjntiUiN3p9NW9ERTufXKyvZ8Y49caNPJLHs8XGNW7NuSrsQ56JSBjsWcP8TZzoUH41DiJKtYNf",
  "key15": "Mag6Rx24LTugjHkvvGmrkRMiuQXKt7LWFUgLrgEHKbF6BT3RSbfrqJUcvKYWHRonkZxMqFa6yAurQbAKxzy3QMm",
  "key16": "4BFELcXsQN6kkTEFtqwEqzpSt2FisREbhdvUnW4gtsqkZ4TfJDhHA5bedu5Th6uk1Jg5akxeEqM2WXT8Y8RvMf1T",
  "key17": "4mmPdSzvACve2tExwxg8qyQ1c15UWd4Zu2r43BtDTacbPxXsa48HyES4YYMvVaHmgpQPpomPr5WQV3vDaSoREMSP",
  "key18": "ppbrBNZaRu3QCWieVwG9hQ7ZyqyXWFjJ4gSdQDL8ZTgHyTW78vZ8x5NmUB2a2sxQFSTWrvaw57kCvLw4rDbd9wW",
  "key19": "5eaknoySZxHGwjuAFRN7XfEWCQBYm88nFAhvSy1FgiPexik5Pn2QcMwSPaWXgvzitTiCTSykv4yNf2ssQ8X22ppN",
  "key20": "5aVtZ7W3zr2kq5pLt4rqXutF3btBbBYyAmmkNrzBNEH4zgRpNVYmQnshGSsuJXDFdRe7ffDw87Egnxtsm6umLrc8",
  "key21": "3HvQgkHf6igRLgDAtTzcEK7ra1uuEBg6sxqPjmeJGa6yzkxzn5iQhcT3x1BB9NXLJchNiT1MbVs2Zm65mTHw3Cuh",
  "key22": "9ciCdKZnLFJLzqUou8dojsgoUprdGPdUFC8oBo8Zfdxt1atMW8WgwraBLJjycqgQy4e1S9UdxJZibJUQWgkvRwy",
  "key23": "4pPVwvCKZyqneziBPSk3ckg87bsWxGauABp4ibXUruUx2D97xoJEKewJcZnZiAojdfnbdtj6f5A8PsAb7D1ZLsYn",
  "key24": "MD4NSMZ2vaiu2U9ehVMQsXhgB8VTioxmVmLKgnY69ZM7gqVZeXoePuYFWQ5BzR9MrURGQnUEc1zew5EFuCASYqH",
  "key25": "4CU6L9sDDoF4SYWTA1d2UDsH2XHYNzezJsSu2SiN8zWy1RKEtABLVX9oeFAYqCw93DMpJxo9YzJBM1dpiPYvssH8",
  "key26": "4PQey1pFScPBjcSeoXA6dpoa4hrD6VpR9aQE7YUbhHwPS79pPiyBFUwtyAvAwLhoHLxRf7fPA79XfQEDrWakbHix",
  "key27": "5DCqqdLYCyPMGH26q6Mpg1yjVjQ6d5EMfsMo7hpA3cVBq8rGSSQxuj874PTXdsFKcCDT7oNyienstDHH1gTbtTev",
  "key28": "21hmmmiHcbtEyaMe7rxBNjLj3wdqHaVpx9iaSq4G4Zgq4ED4ja7uX9hxUaSy1kz3bVqJfnoJq22hj2zvraDqokgc",
  "key29": "3dkY4PLsbpN7xkqUyYA4MAkHq4Ym9dxncxu52DerNtPut2Xn8Jtdc6jDCLJmKNTRsdoEk7voHSicJXbig3MUTdt3",
  "key30": "5iyRc532bC3koszuDsgqmZhktEipJZNNt2wPLUHYTA7KDDRFPGCXUpVRoYb3wF2uwf4yZC3i71PEW4wLp3VMx4ak",
  "key31": "5u5tmP5cwU6i2y8yWAwZ14mcaJ4u6kjNranmuxGSzgHrxfo26BoFwzkBBLZFDQ2kYKf1inEHRC8fn6DHWfoBUN8j",
  "key32": "2iaYXGjPZv3vCwjoJKJi2fkeyrPVXwYf912bEDmwqD5d6G2JJwe31Les5urXmWLK2uZdRu1GQUR7Bc7f683jaGok"
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
