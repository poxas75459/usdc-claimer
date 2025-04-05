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
    "34urMps6HuhnvqhbRS2BHPjQFwcXRWjkGGUbkwrqYnWqV4DL3fNRS1ZWr21THFERZKhqJk7RUy4oWRjwYbS3zQNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KN6pEnh79MLYnA3RJkokVxumX6z5uLstGaf3Hh2U2nmGEVtNztDQDbUnJejLA62WrFzct8Yr7t5ALEjXxxCtEQY",
  "key1": "3K2zHhFoTeFT82ycztYBE4Jw7foDvEbXDod8VhSXGdxng9f89kvCt7tam3mESQP99E7qN9cPvqJ4uxeYQCzgSvQc",
  "key2": "5yCamHPiHR2ha4iE98NcLEi2uyEtZg68xrB7wrJgDNonVMgX3rgTihZ6qzgper9QbEKdP3CpEKzU9kZLZKcpjQER",
  "key3": "2L6VqbTqukm1vJZouw9e2X4MmCXY4c61zSmr6eWh4mArGDfrfarLjBawr5c2tKhDTdJn1WJW77anWwGM3aQ9jTxn",
  "key4": "nqabk9bCjBUQdQWHDQb6VhnvVBgQwnnBUHqFyaGhnHHNsigKRFcvq6H4B1VKYaG84duuk58MVxXDpehxVbyBwme",
  "key5": "2dZW3MwegBQXbdXhFVm5JVq8oexPQiXhkdFDmj9utq5SThoWy914niwNvvGZNdGidtESmefbAKKUEVFb3rFdHvyq",
  "key6": "2uMxcHZoYFpBGagTrze2JP3eEurKPdg2tgWGmBYPCnmm46W9cWR6vVf8QMBXvyuWbLK9wqMz3idRWrt5tK4W8qWP",
  "key7": "3JwCkZyVJinXx3BTN9GhocW8c8pVtW8b2xcGP54Q9Q8CHawQ9vj9YAUNQNQocRdSLPE9mAr9NiCGG38rbJan41VD",
  "key8": "49uMc6jsEgMiW4L3gLnqmHvoDmQ7wg55TitJUfjPCQjcT2no9NrnsNSUj6NBYdNEE8Zmzo4Crhud3fQ9hdspmLqu",
  "key9": "2Usuik6uojR2QGERzWoszUy78saB4t9QYAUK4g5R686bkZawSMU3gK8umyTXxuzu6FS6Riayx4y4cfbHaQasmdNR",
  "key10": "2jjrUWEe3LRMX5u25ugpovsxXKVi3ZnRphhmkBAdjgBT4KXtwTfaDeQ6D9FmTzEZATnhDjm2tWHP8RB85GzRGUyp",
  "key11": "5owP9w5xdyttppVuWVLdX8SJif9b3kfn1acpJGF9oU5ZUP5Fd9V7b2EX9AkCT1BiijTafTwCM5wmEHkhoRByBYrk",
  "key12": "3U7iFEDinJsB6M8GSznNyMHE1aHd6xM21HEx54TG8FoUUo5bx1kMUvJPukJ3pCvtTkwN1iu4SkWaRYXYuym4GgK7",
  "key13": "2xfDXpAn8Q4CwafNzJic5WvcLDNfq4Em7NomwHgko1SMSAmEdR8HA1uwX3Gmzb1Kq3PQB1DLnthbcfDBmcdAgCo1",
  "key14": "2X7ELsX7PKxFxvHJMe3i3J1JwocaA4F7zDT9FJme3TFMN51jNDMPM6A1yUczb5tfJ7UiUw7twmv5f1yqjK9ck9kp",
  "key15": "5BD7X5crwnXSnaT85JC6oGCYcCx7VSReG8AT2WwVRpPwoDLYHRARzj8iCregyngH9JTHSuksHm8sRm2qK7FNNUfV",
  "key16": "2Fz65uCg5QxDhHXkkCJoUByweMPMJZkde66iPTcbGq66YhBnhvgvb6US7oEnxB8nyoYWYbYF1uQv1imxXchB3K8",
  "key17": "3fD1iK21XPufbumFXvkN67EiWwFosfMkHLc49eVSWYpT5f4qBicAeXw9veSQbqZq3FiDZDG8v7UjTvAsU89gmRQb",
  "key18": "2oCVFsCdnyNDnzeTfKA65CHkSmTKMzL6Ybr5tMrUDBK28n6YRjiLDjEt2X9Jw5AhwKC2BA9dY3wUqUJZ1QoM1ZJ8",
  "key19": "5PQ7p4Yp1imTqsjw2XcydxbHvGhbHVHZhjkw5dAMrzPwZe2PiRZzLthHGXDWDYwGgVX4xbut9soDASPKzNqNC9b7",
  "key20": "65B2hAXQonVA8t7eKK2CNNBrDMAKSj1b7ZvRvnxNSyxRYZUAVXhmPwenMx42R1EGg7ubEBkBWDBVZMNmQzQ1aPh9",
  "key21": "4M6mq9E6bNqsrCXV8WLX5NtjWtAMSydzKSfgFpi2PbmHN1LFF5LFYsRtbxxABGM731mGiwEvMKXK31SPQSJSHUiH",
  "key22": "ToVZoHrAkVKR3nLoJKeG67yvYx2F6P98can8uBgEzTKiigjuvWqkoy68QkFHzeguZxy98JxUBRr4cgpg4oakPrE",
  "key23": "3is2ZUicMsMEwqJd4M2JWbca9CX6bF7c5MUU6xP8X3HsissVdyWjweytAY5ZPHPhwMpvuxJbXH9SfQqYZq4ujQ85",
  "key24": "4uELaC2RMuJ3A1N1aanCPFweQSdvPugoXYzyz27ZPR33U7f2dSuShScuVwc8DMGEiEk4LF16KPsNQdC4oRExVf5f",
  "key25": "HXcCxp6M5RPVGq4hqN7U6yu92CfKoRJN1xNZYCMRUrL6JGPVv7yZnhrkRmx7xKzx2QF4QbLuqbAYAtxxYfH4aqd",
  "key26": "4umGoNY7Nkh9MvwiQoAFK55djdSjB52BAYrQSGGe7tZqvGT42gZhaQDEfWZeow29pbeYd8DrDpfURpdznDcpuY5C",
  "key27": "3tFcaMzP3GfqB2zwXYFNKJWqeqEB4wZgT2JThQ8ZU2saq1E99dSH4gxes1HZMmmjXooCw54kANwZcKDokt4iS93",
  "key28": "3ihMbNyBE3B3xE5yky6ieQAnTr6gboT5p3hUnDrSeKqCNXnY37jbAo6nEBb3BjHQVrzBfKH3UFaRaHwJmHS4PQGc",
  "key29": "5156nupPYP5ugvRtVTpDKGQ3fuGFHJvhGwRDbgwXRMHMa9QkF83ggxutUk7s4gzLjDrPguiwGNhsxnsFWw2YAsm6",
  "key30": "4ZUJN2Ry8h1yX9NxhzcSevbH2KzLVNMSYUSNBY8uAda2qSAmtqHzLFvpPqcEox6UfpyvGADS4hy38t21kTnAzSR9",
  "key31": "51DypMFq3T5A3W5HeBo8ZPkTQnks4AmzQ5kA19yUV22yPXbKb8Eiqhw3vFWkbXpVX6H5T8tFh6smDdX8oN4Qpohp",
  "key32": "4MtWWrXgE8WNgqFd8D7FKwzfs3eQGb54dyV9TF54hN1Zrcs4qrYWtUFwuew2E61QKGg6a4hYfv6Yvq3vYyueRJg4",
  "key33": "2v8Gp9pm8vqZp8GBxgf5nYMsGRN8TMnNvVN3LF8GJTndJ8v51F6K9RdgpSAPyMu1FkwWw3Bzv2HvHpgWdjsrRhD7",
  "key34": "2fwBGxvpsVpVHhD2dZ3szNsqjLAq9sigdLCYZbQe7vPxZwtfaVLDCg4H1eFEGPPAWKD5TtQ2m6a9JquknHqVvo76",
  "key35": "24RUGPDnFsGN2m7E6ttCwonXG9qdXBrZECFpMo4rfgpiPCUwTjFkq38thEeZnphi6sa3dEQRm14qT5wnCYnpK7so",
  "key36": "4VvCRA1kCVHW4Nt2hDudWRDVKdHQnqeuEsaPBxKWU5hsiqAQ5Pfnqv3FNBGTocLBKQoE3Ru3Xc3TH3KY5SERbmPd",
  "key37": "3w4Ftwgg187VRQgTCzJKhVodypzaurJXTU2uYJt6XqBazM51QbuPtW8Rr5RcvqbAtXuybWJvAnzphxCcarUgVebN",
  "key38": "WX3C7MMY3vXvFkA6rWSqbHCCgMmuiQLQby7uqzSHMWY4aGr29DGmMcB7e5bkhZ2o22AcWKArmLDMLBuy4yeRVYA",
  "key39": "39TnfqpPZQz3cMUtDutNy5XtoX625DJENsj9X9PtiqHjVZd8PhB6SuQY31BzqkQyeJPi7AHPR6UpV9YMJV7dHx3U",
  "key40": "3K2R7GSjuhyuyCADcFV5sVsFjJ3Sa9ekkoY5RuT84cjXM7aVx69KRGwTg35s2wbUm9BpncNYwHrK5TTMAGLimEMt",
  "key41": "3fh2dgtES9dmsd7xDEo5awKWsdDYGdqn2mdbyaXXBtQyip46gAvaeW5VrYmUdKY6ViBouMrmAfgR8Ji4XF9rjWnJ",
  "key42": "3qeVFocu1V5Tzfn84RLJZxyJqjJFeE5RYp9h9aRNHygVnEyUg3W3mwXxTus1yM6MfR2qYDV2niwDuiWRuhKVpqSx"
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
