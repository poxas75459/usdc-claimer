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
    "3WuCBk7GrxV8ZiXR7k4fiCiZ72Yi9VbAG8bkApXnamFG9ruoUwKvWXBbrAsG7VUL48MGd21bLeavcRMmib5VLg7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MJ5xAXJTW9JoSfDzAnRfuRMnsQumuXdBnDbE2h6Q96W4mHzFpXeuKJist76KS9JobZot8W9DgS29tv6JdqDVJMx",
  "key1": "2uekMeocMyRQk82k65JDUCijeBiXDnSY1pa8RZtpLXGA62qi5wWPmKXThLdHGJvBrXJ4F6GVBPdqxEhivfnG2NwQ",
  "key2": "3rKvZTxnLV3q3djZShvwZ2acnkNFLapqWJN6doTRH13xUe5eHsddCvYBhFKxYeRz8HSsSqF2DqSQkyGcgEY36APm",
  "key3": "ZCJuq3TnUCUFutuL93ZMe5tw2cG13JvxZTN58uXbTeL2ioSxvVzUAq9KtKyAc6qJUGzmzoSSVocXLHsyataGwb7",
  "key4": "4FwVDEsLCysen8zNAEmcKDUrbR5XeFZyS9h3PCo9cXfhTXf9q63fhQDGmq8kEsfmuGJ81MJ3vs6hWV5jiciYFSRx",
  "key5": "5Tb6VsLR15ZyXeht5p8h8hrpyHaiTUF261JMMQmzt1fvLRmPQh6vpAfZtPX5B5sAzRm3V1R5FxysFsr2gp8BETfz",
  "key6": "XUiXzLLJURAxZwfZSiEGRGtvMPdetM4TaEbgxEthbQp6iHMfPsD4DwTuA6JEFAYhUqCqXrwSDSm6tRnXJWztFrA",
  "key7": "48YHvpGGGgD8M2CWWVh9WGehpqaTm7F1ZJiqxrU8gDAoLffL68am4rtXb8xwhiEKho6M9kpYcSH7WV21ySGfpDfq",
  "key8": "5JcNi44HEwmu7VXqRLw6WDBfCUa2LPVUuM39NycXGiKUyDrHwDi7be2fBZZ4vJw4rsGTCfAMf7TBQ5ACk39gm4VB",
  "key9": "2szAU7HYxefd5t9tgKbPMmUtaqDj4AzmiXugoJtkW5USRbqDothXgBCc5egE22bNBgYeyFibmUUFk6QPHeT6j49e",
  "key10": "3vttrHFDrDSTffhveKuYV4wRx8cTfjwQWRBdkN1ujyajVkczi5JvhqeRay3T275HDKsLDpxWTKxmbskBzFf5v9np",
  "key11": "3LqJSsK3v6677EKpNawDfvMPQWWJUybGFxe3eqftLEYt92KxCwbkq5NJUQqqb9ruEWeh6BSHFV5j2kK4fHWjDK1H",
  "key12": "29F2xeiHtD3DFjFm6AVCM4wAgM5TbQXBa34mdBGSvKZGNtNXMjjoS9Kf1i2EmbVR2YkmvRYVgYiNtPEEHmgxtsf5",
  "key13": "46vBmwuQW6wzyW5edD7HCysiLffxdQcbEYh7k62gknrxd2wGXrwqyL8Rb4NWuoXJfeyFmicZm1AijZjj5WsFoDFc",
  "key14": "2yCPMZJG267gasNxA4nJQU7iK41qVv2FLGb8n8RMvjYVUHJrL2xPRZL52vnkwsuExhfWDZQ7euioYTaasrk3JLXM",
  "key15": "229fs2tos4mLY1PQDnjks1cqsnDDiVj595yhYmFBYsuVeKqvinSyGF4mKLck7SzVJ7fDAVaeWtUL1FGGbvqDkGDi",
  "key16": "4v2mWJPCDNj1yfSVcc2gp2iyySL65xW67TGgexFZugPthHUUsX8HHD9cJgwUYt7RZiituyYZUeAB8kN4dUrjY2re",
  "key17": "5hphzr54BgS72f6hHNCu3pxix7NsFxKq9exob8vhN44G8ptmPXRsYxeqLDoytSqoZSemTSsUFekArwZd3zC4ZsJA",
  "key18": "jARXNmRaKbcgz43eWdb4YNyxvE6RDc6iB6J4XCGZTeGuuzcLvaGos2pN71HKMNQS2EfR4w3Ux2r3G2X1MbifPtL",
  "key19": "5FHSHjHX8BDEz6F1jaKvAMVGNQaxiNbfpwaDPWDQ6HyCPR1DpZtpGmpf7JLK7T1mUhkTJ3m5KQ4mjw97X3DUAMY6",
  "key20": "4uKT93oH9NuT4vwwMhfoRwr4wkR17scyir9LWoy56DmVVZ6yKUQ5PgsE7oLh1itYzLB6dLiqKTnstNgFXzhcmdvZ",
  "key21": "4Bktu89oiu5pf9FbYTezpnWLpReYQJG27Z3n3BAhf9EmZUA9rFsrNfND9qLwaV45pmnWkikyPEuesgdtsNAZZMkc",
  "key22": "4PgHFk5VMpiWhvfhj295WQ4eZBp9fcbaWfrJQHdFcejih8HdSPM34E4gUmBN2MDkxony7KZnBMWZLR6ua9Pz9Ehu",
  "key23": "34W9sNMTnFqsKqjxpMPDAdu6ojDmnfYb7wdttnXyXzQf4yU99rCrhmcGvti55PWBXzD7tMZTf6Z1HoWz1bTFQM5",
  "key24": "3BdfcVh7Wasopg5Su4wi7jUAUP7rprXcr837KPYM5VRZEbDwi19ZVBsVWkS6LPkWFdd7eiMu6GBh9Nd9HziqdYsm",
  "key25": "5sYv1GRX4y85VvcPo5uMNJFf3kiJYroW4kVYhg5RGY8KqEx4azdDB9PjdCqHcDYFrYmgX9qUupXRzjdmdA31wzfd",
  "key26": "2Z3SUr4zvZJqUkAFX4FUxg46M7s7vzus1sokXmGaGtdi7R5LxLTF2RhbqzX9FNcxoymjRYGTruB7nCVLTPBnUJnx",
  "key27": "JC9enMYRMUo31ijhr9AJzUiuDhcy188RcYoMhfob4xMTVgxjKifeamAKZyTvcT2kpTHJYikxuWZU6iQxgsam5Bm",
  "key28": "5R3ftKChReea5suHQSiVRN3oMPHEuELxPY4osRpJBuLoPKqVDLyeF9DM584c4usCSuGRZhToux67K5BzjvE3CQdq",
  "key29": "44tHJvKvAGvkS7x4Wiev26KcDryCsG9R41YkJF3C2hMJTKG5V6vS6U7qWW2pjpwnKn4oUugGQgrrZWiPo65phSmj",
  "key30": "5uaQ1wvJVJxzB15pR7Vp5TNC68XZMFqwHJ4Tf6VExgMQJpA3nhJmE5nr4pejXVmWsA5HmriMe8af7Fvq2zZ3dDx8",
  "key31": "2zyQQMyq1qDFhLCoKZFpNYaSNnNgcpnkkqkyNhzrmTiyDFsFZuZopgLyy6RmA62zCK2QAyXAHF1je2EPYoywk61W",
  "key32": "dZ5mYEpSW3dWeqVLH2LAFTuTJ6MQFPgJKUuRxFYNGMe76ZWyRxMsdtt8FnqziEBbuU5J9q46BYJRoEqs4BjJsYh",
  "key33": "57B1LbNP9mZtnE78vQvneTta1QuUQnCvj9zwMQJLaxf6EM9s6ocJcvN8d5ZQ7AJNTw12Kb9vknLBVcNDUdyB2ADH",
  "key34": "5DujnqoA5ZtwpqcQHLiUiSJzHZLDP2z71bCrrN45zzb3wyMFGhrjHWMCg9FUM5jxsYx3vQ2pwwfa7JmLmpxVCGkP",
  "key35": "5MeCQ3JgGr67QNdP2gvaQo8zomTdBJWLqXUEVyH61cBSNdXyBYQSeCoKgaF7pKifhepYQyvhJicaKMyUBwskAerC",
  "key36": "5SfqMdd4Lm6JgNeMGn4UWku35Efe53KBkSUDXU2VdQRC3RzWfAQGFSNsKrWzuk1r1z44J6YLpkzoegPU1zXMmzSk"
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
