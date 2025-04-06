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
    "3L3H9gHpVUeSqXxNftxiHPBWEjWqwMLFkLq1SGaHpi2xyCPQCzKgGZ3JnAgm39kcy5v4tccoygbkY6xCESQJz6dz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "619QXZG7GcqRz7PuQMwnDhhsok2pMsNaH17exutCMdiBEibSJy56bwrBidJjTHWfEyKLM3yn66DFDRzY6FdAYEaS",
  "key1": "4KBPKuEXmWgBxsYkFUZhHJGcapSHr5CzsbZeQ1acXAYYMnwtGqgcRAy4Uegvv7zZkPxah8CaZZPV8Vt5BwNKp9aN",
  "key2": "3V2qJwfeKRkKsbHE6EuaG4gEZu1o3Z79vNeZS6gUbXkht4uuY5arj3vakn4FPJJn7jtHNtzvqZSnkECU1jeUKvYU",
  "key3": "2u5eGnoXdN3FVE6FF7xYtT6rYWDMGhn8Z8VWmYH4yMAuiMJiZt1raAUSfjvZhzmzuCCEe2RTLCfJEMYtCm8iQbHR",
  "key4": "4XnifaBs81BZbxB5xLewvqbYzTH9NbEtyCbJhgFaCZrsyckMn9QvFKZ65G9JZYvvDG5ys5QNhoG7Ukf25B3j9NAW",
  "key5": "23Pq63o9otaQ1mWyw3gE3Sv9dxSABCijzHd3bpNZ8SaghhftrUoDJVaD6QXMskFfyewLCDCugJ92cpeGGGrKq3rV",
  "key6": "53XEJTKW6ZV3JhkdNgT95GYHnVBPBLVAKpiruZwJdQJcrf7rLSDStBnsVyNnVomgrot5eQ7dBZJT3hHFMEBeHNUo",
  "key7": "5gbCo1JaTZ3guSLDxCwuhEP2qJy9R5pQXPqv2exK3T92KKhwArE8GhUGjVb8t7udWqMGAjbwZtgAbBGxge1zguKq",
  "key8": "jqDTCqdFvWUnzWwifZnfqjhrjRFhyPkY8P6CD1zRubUh7tAuetw2UZhNKK4Dm1yY7cq8t6MdksABBvt2iHhXycV",
  "key9": "5HsBTNi6RqNPY8zR5xQxxjM4LX52WqDxo4Ft66u2GTmT6tApPK5j1bvFaQx1rTxZLRLGmFpmUGnanVfFk1haS8gN",
  "key10": "5nHS9YvmzuZWWwwUaWao5c9GXBdyjWTnQnz2K2Xnih3qkcLfkrdQi6F7xdKQAFVd6XtH5KeY6bFC13TJbmqa7zjj",
  "key11": "2t45kYtSTHLJa4jBiffjNQsTATkq9gWXQUyhAjQqyRuN7NJyk551jhonH23cMSDucqHmMdHYqvBkBhNcdhyqKpJ7",
  "key12": "2HDPAWEHBgpEkdbMQNK27o7xDA2g22ENTTFvtb5BUETBeeBU4VXiW3eMHYaTUDN5r63wu1XWMayNo4n5FCSxKcoK",
  "key13": "53ttceRPaHC2t2ZJkVxSAff92rhykKQUGQjfXR92N4DTLSEWUc8A6W6uxn4Fttbbs6PiqyjRCoKxNw4AtCpr3Rtb",
  "key14": "2ifAfKrPF7DQLLkVSNB3c75GRQwxzQfyNxfBoxiVJ6uVBw1b7idZPwakqyr3co7CeqRY1AV8ma3tCAbGcoqHnVEs",
  "key15": "P9Djm6jWHVbsspN56G7jZJyvjaM7H3W3kWP516ABujprLEBfF6frHE2yEz9fNJ1fBeBNCB6MbbMC8ijWVRR83Ua",
  "key16": "51W6AgmNYJcAFX5BBJKVzzrUv7ATGYhgq67T7xP3b4hBtcnxgxvsdnJcaba3y9haUJTaS2UE4jUvS9SEh1orF3ko",
  "key17": "4mnkCriZFFQGiBmX48ws8srQtaqSa7ubvn9k8syHqCbrgaLvd6QWQki1u2wQkoZBkc5aKifB5drJBbmJnwBHGizb",
  "key18": "2dv64jncoeNUHjnuNhpbWiJs5HMDXokwc3Txg4gs4i5mWYUrCNpnbTMtRDiaXinm7dRwvFFsvVHn9kVhnBYtAfAM",
  "key19": "2xJuh1CekgohxkRX3Z4Yem7ftJfs4bfFd21LmnMVkzEfkmkczjGSjBWW2nHK1euzPAWmE5PTch6aedDgUwgFeY4D",
  "key20": "2Q2WPRdrRyReTcKcPPAdXeMwRc2EimviFLLGBohA5moc4XoVVVSpEaYD32gHEJVn6a8yLzoPPzoLA8hy6Jcm8gKK",
  "key21": "WWu7GGqnGJ4ZfD83aAH7VFG43ax8nMpxM13onwWeC3fDVyMhT1typwivA6iuiYypny9Kto2JbednJGLLMCJCAm4",
  "key22": "4Z3pLoUi9MmRyYbRStz5SpxmTeT4JT5LoF8yyTxw7n7933P8wURrYdg5xF8WziyXmiJKxPdWrgy7tCtWNbq5zaMK",
  "key23": "2KhhhRkHXL87kEPaW8NXrccyoMMXEeStEXgsMdTBW7XXYpN7yNae3niVpKGurRUN4XR7uZTDVjUKp9L3krMT3iqV",
  "key24": "yram89dLiGbXiaGnqmSVQpQg1wY9zdCexWuLdgnvnwxMYeR6t2ghL3S7g8KqeiqWB7ey1byGVcEvFExpb7DLFQG",
  "key25": "B5uYWDQtRBTDuDQzburxjxy456asNBHuiPmcHBo7Ef3Zg8qsKSwpuZd6mjMPrZnbggzJRPGU4n2d7jDSdVrVLqM",
  "key26": "5jEKUxcWwXW7kh92z2Crxm14PacgcerPDssc5GjvbkyEcsydAvMBvBiF3JYTR2QWEtKL9iE8aR51Lef4wuusFnCV",
  "key27": "Sawvbeiy1cYfKsiadJJbAG8hUGdJmZAjyZEEVzyvzc9hAiygwxQp7qANXaomidNQVTapREe8zs5NakKmPpchJJF",
  "key28": "45w8Fht2kvgjb2rw22bKNiXuxS3gLkmjoDavyRYN5y6HWs9rfx6tzcVYuaBwqWxGRr6ft3Gyy64eGAsBa2YfuP6r",
  "key29": "qBY4RCCszJNuoB9GcEC3xpFa8ECbYF1i3cXdZNS5MiTcBn4H8CpZE9igFVzdnuAHW3stuFf7pmbDyZB18zu8WK6",
  "key30": "239oEQPYUWLkyuWKKqVm2boWZgQcNg5BCnoYEUEAMFTwYZJnbA4Z48EGfgoq974MVdeu7KsXt5hP6cd3HDb9zZnt"
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
