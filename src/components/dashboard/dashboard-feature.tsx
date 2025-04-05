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
    "3a7NhnEbgFZ7tyQFNa9SJcppVxJ2JYpxHwgWzftFyD1L9CT19vvarDwLrubrybp9uRUKj8NnwaYMdHGrrzN6Ka2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u19QJ9oSbtEoXzhEUx9wHYkyznvty4z2JXVrjEBhf5c5ZgeJw1D4bxtFbZtW4ffeJzJC7b6sfrnQnbTQp4re4jS",
  "key1": "4EqMgfn2BuFdgtHh2tCTcLLpGxwJphEPd3TyWw4orFEj7Ak5gR8ruyTsFc3FkPsiwDonwse3itkSwPf8c7ncMVYk",
  "key2": "53mdYJs5ugj897qEnmt2JAE5k4TchemDZTHhJWokgvpCTJKzkshyCntXr8dfpg1xWuTvraMDe1KHyLomruJgVSXh",
  "key3": "QrmTLvCCwZBxCWmPmGu1E1mW7YxMJdJjWdxMmM83xx4Da9wX7rwnxAZioZ1Fcmf1nsyFR3HxtAQVfDcYFvTUk5k",
  "key4": "3awykkAyjVdWqTii2EuSVtGWzrXnJRk9gXqMhEhe58sW77nyuMDChSg1viCxA4VBVQn2RTjcAJH1Z9HUKV1hsHLs",
  "key5": "ECscsM6Y69vptJRrRr7v4aSi6cmos2FxE9E8eyY8QmexmuBbeiNiLGNmLyWeCD6Qku2wvNh7jG5VScEqd4RupKb",
  "key6": "33dUozbxvAjqjrALLNHV2WSgeCSkgbQeEtF21dDeX5sFyiviY3oxmdhBDXjCD2VXHhkYhEfoLJSNUqvXYDN5BT9W",
  "key7": "64YYCcPRKMf3SiLsSgiwzfzSUqVUhY949XeWYHmEVzR2UFTeG7AaKcERxSKmJZHKpyNJHqjiUpSCdneUNXDEeqGb",
  "key8": "4c3z73SCSzJEa8Agtdm2tZ1Prj1Mv1qyrGbbffyUjtKYv79Yyo1XfhxspA1zT9Fvfid79tmNejsExsZvCZk6y9kK",
  "key9": "4c32Kp2NBe2YeGsVEAgTXaQwha8qn1fy2mzK4jU2zoP3YxnnyQfMaVXqZiCtF7QbNT7hEjRdzBA7CHRgc4pzix2g",
  "key10": "2foMmtPDiJgV4QgrRxevXGqvUhdA69ERyerRZtfiuUV9kKHHrxZDfDxX42j5sEGVCQ5eE2Ep4uQwk3d4oeceMrAQ",
  "key11": "RyM5gbFy2A9cuCLfeHFos5ySZmUK7RVNewYXpcShdMWpsw1VSfsdbKe1zVa5MAqQ2nHjvdazL73akEiJAhzkfHM",
  "key12": "5foxkFk4GtSqrP38Lgo7famvZEh1P4KNEVCpdYCgNaaqKzpe1YspmNSRWnF3pVyQAoRXhyawuk3NBTo9Yijihezz",
  "key13": "2Ps8ZmGjUf7XbsPq4bRdocsxcqoGAeiXfXUY91uJQ5JJrkNuJyW7eZrJH9NVsPBLVb1zkopsoM2KSMGerkQUHRLB",
  "key14": "Wgxm3jzBDPdTb1mQom37Sn594VUscU2YvPfRPkCAb7XhyaY6HqEZASPjPFU6XvBQ64eDCBVjjp8AdwtCFeRAqzY",
  "key15": "31Yfwankj6uPkBjNw2btwmtPCVTPqtzVSftoyeyUn1pF7gwia3QqfKonFzFyhfVEb1w3GCwjCtK1xaPhy3Fkdj3J",
  "key16": "2wAdzeeWW2mQrw1G47TbKXAxHkh74pNQg4GghN3oi3SAfC7jtP7WoWSPgxpCXMstbENUXFpVWPbGec4VL1B3YHPQ",
  "key17": "2kFaD73v87ohazdvqLQDFMFqS3fJyfzgcD9VNiUjiEq3pCkzEKfy89dPLQJieyPBhnaob5qtyxEiZmQzuRtqNqDs",
  "key18": "4U9o2LmK7Qc8t8KDGB4jUJWqC71tHK2UbAMM8YL1ScA2FLqt7HjLMU3v79sXtZ4Pgwy621DymETzkUdxP81H6iUD",
  "key19": "3ZitYN4UFCXa3ykugDzHLLY8r7tzV9bayiYS92UKQpSf3Ywih75ixXq6iMJdskcgfsqfpMUWRMaz4CmNgxT5mUFz",
  "key20": "foLctS9SB6ijneSgxoSnc31W8LxsZ9mKVMxScw2NGQEnUTTBCWk1957hF9zmSH9ZRfoeJ9xkPfyH485c3HZQ7FL",
  "key21": "41gFMeii7FMSYc2hr8xZz9zz8dsC439aNzrUU7cRcBRSMdofKpXFLpHUxNtL6hjTBJbJnJW6tnPkErW181mgq9tZ",
  "key22": "334mi8H3uDqqSMFS2yYd6Zwa4KVohmA7LWAebGfKqshKqvRggBEsMaiX1vjrQwVZEawtgZ5gnDhj5K3fD8NBWL6R",
  "key23": "43j9ViP7DAGDEQWddXm3gEzHGMdqCNRxDzDuRdA28gJoKHgnzV8uXQycwcsZuhPV7y9MjDjqAeoxsY5KERvgimU1",
  "key24": "22ocuACcuVt9dbMKQoqLb5shiTsipgLxR8YtHDMh6k5cfCHzcKj39vVJ36dFFUN9NVht6pCM4n17LoZmGLSFfJjq",
  "key25": "363ozL2it3wDB2soU21Z63iq5t9K2dST3NyJTfNt2cQ8QrqUYa6NsC6Wk148Yp4Z9CWYQVTsX5BFgrBCtg6Fxub7",
  "key26": "Yq8o5ABav2AEdxEgqFaMMHnhc3Wyjy8z1UuxEoKcmqf2yxWzn65AFxe1QiJFJfV2X4xpfmr3veugApox9iw1uAW",
  "key27": "mrpwjjyWp9cvEsfa1bJmbmbbkL88pbo7oiY13kVGXFQj4RHoqQgvUjFLwSkGRH8Z1LgP3kEwHQGWsR3gRUP19Tb",
  "key28": "3jpqCkrtgsyTjvgv6GCUH4MrUz4LNW46P6VcYAvLePvoE27vrEBLaKvZP42HVyuNXhiKwSSJ6gsoC5skYvrE7t4S"
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
