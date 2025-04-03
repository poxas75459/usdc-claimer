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
    "45PmKKFVrUJMQv5suvKKdYRKguBH91nAktCMwe95n1n8TryFtiRV7UYFQwDpkqtYHtfS91VppEt6sJaxs5VnKNGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Xh63DNubEaj1atUNA77Hv9vvs1C9GUu2hCwQvtEVCPWKBgiGqxn1WSQxH2CgW88k7thMPLdDnDx8RcpJTYwrFm",
  "key1": "2MDYPXKjwuiec33V3M48GFkPs8egr3CWzp9o6SSET5mabjTWgZTz3koYMBeZpnN7bHhKzUsMjj8LgcTHeUYRJqdy",
  "key2": "5fJR8kihT6EhMG9bjrut15L9PPmWM52EBjcmmh7Dexz4obPTWV19AgjatNhPPV5f75Z2QPCyjPLCQSc7GoXgxH4m",
  "key3": "3JkuVU1DkZqRhziWNeQ9APZk3DRYfKG3VBpFQK1rQvvjw3Rn2nFBDNnWj9q8w3zrdf7LP62JmxUHPUNgicAKjh2K",
  "key4": "5zZi1gAY7r4aEdyS6Bi6z6CS94qjoVEjzK84bnDuCg23L1HrziFVSBu6H7LZtRLfFxcczY8BmDnp8kQSphucKekf",
  "key5": "MfL4SXByieHMWjswqMttr73MFH421oitjXDxTr5XHFpNp2eEQe2KQHpXuj7KArS7yxCRDMRXxSoshGTd3L3xrov",
  "key6": "2ZPVXuAVtQJYuNsq7GFqrhti9Awu5Sd9k7KppDrQtdrNVCFqDNELPipUCNGFWcqxTTPrPLLrnj8Zg6zauQWeGScg",
  "key7": "3735hybVq2HDAKywmKM8wNxAB4xkbwj5GK5XcqxSpAu4YjKTiZTYnKTU6aHQXAkHLGazJ8HTdbbr6KAk2Zu7Yim8",
  "key8": "3FwG9DjaQH5bGD5RfTESypzH5bPkNAP8v6bqTcicFcQpv9tt1bbkHTERVjkqw3Lrocd4k5n6m2WZ5Nh5KjLWXz7C",
  "key9": "3d31EMfzUpv7BQSucwmE6xUM6WWNMG3oMRWMiPfqa2BzYsAeQpMwkBiEcyKTNBHqaFT7NJ9s4scEtcPZKNaY7fuQ",
  "key10": "55s4FBTxkkhJTz3CvTkx4NnJWUYSz5wYZ7o8KVzzLwDxMeWZFdg3xpQBNbDt3fhBXBCDyVEov5ffss7QbkCxpsgo",
  "key11": "4Tm99hRi2bC2UVEinivaNddmh9B5DpnN6WsMMjaivBm5pmUHWsC9NQYSE5WW1syi9XpVEMnYnpXaazjMzT1dZWnf",
  "key12": "y3M7mN62yKgXDqEYYvopqZ4knr2j4xKVhswiKrApxJ7yZy4Qb8YRfVPY7Dbk7aYF1NtTnWz5ZUo9YyWfSMCnA6c",
  "key13": "3TSf2ZdQMB4Eww9wgkQZA6MoY3tSs7pJcqB9bmqqmU6PseWDCP54ybFVcwMfCemVMQaNQ7akzNXbVVhkCjabLzjx",
  "key14": "4t2JzneGyYhBTLFCidmG7yBz95h3y7Xcd3T8z8EcPDNbRkz9FkVtrjwN5ZoL3FtdKEdDRdqwTm3bsVqrMMaMRNWJ",
  "key15": "2RFG56uysePvQ4LFRfQiBfY8g2ANAgMqXvkC8zEdN7rdDpT4MB8WsgmL3ow31MyDm19dV8TJ9ByrD5oSwpFkekMi",
  "key16": "2MWpftqv1YQDGxm78KTNvQTWK5roeYTthXTVRN94rzTRnCKjTdkQMHEUX1eLaKU9edyYNwEq7N4K8CZ1Hpntz3D6",
  "key17": "5nsaUmXwFPHb7zmpcnKxbQe3BFmXtDCYU45oeGax3rHv5ruPZ5p7J4RhzotqZfaiL43zMG7QZp62zq1WkiXWugkC",
  "key18": "3Unu4MTerPwqRVEdb8ki6F7nnAo1uHWRmDKcFsjELzvsnfa5mwmFD1SJt2J1CQc2iqad1mfabQL8AnEZgdiC8jMx",
  "key19": "UTZvhL1CTcn29QjbsjR9v66jYSXPhiirQsE8e83bA7JEBM3frduaZZLFMM4tWajFZTZEGeW6mAXtmwasuiFHApa",
  "key20": "5L2497q5f2WiXbhcT2KwJLwNdQCTBUeToByc3qvuj5GPdradHw4YPz1ou1XWccxpXZTSZCq8oATGMcb6yHejpvsq",
  "key21": "4LTHgGr6pdEQtyeT9VuyT4Z5WBVeX6zmQavTxw9T3L1nxfs6LUvjjcZfF2L2kHKfa1KygwvLMJ9YCvxLhW8zqCmx",
  "key22": "z5vaB3BF91kv1qC9SLXDAtcKqJm69o2ce5byXT4TfvvUp7JsxocuvH4mSuvtiDrzr936gVbCLxLYsd3B8kGgJW9",
  "key23": "66A8NTce9fWhJmZaS3xnUxBhJVM9CumkNHn9kWvfC5SDSFJ7ot4tBDDtBAJTMTXwrUnTDLWjRxNQdipJr9VHBWc3",
  "key24": "3Tonh4obFFsqS2t5HjenpzRKAPGa5pr1WGg9o9ouvpoNHt3QVgzStkgd9to6DGNDMph2e5WCTeQcQd5rtCUpqADv",
  "key25": "2wi9updy6VvC9amwW6uZTkdd28LT5n8AfVR7Kqfj9CpUi39f7W6bZBB7Jf6iTXNdu62DZzmBUsuHJN2bWxm8qSqu",
  "key26": "5HtMN6nekMDs2952Jrb3HpyWbuHvbjqYZVLAudHB6yKhYazGrgkzBwLH18ML4BeA32g7fwAqfUtJ1N2FND2Z7VKR",
  "key27": "2Gp9UkEoqytzuoLcgb7gm6VppaHeULTcoQu786J5yw4GuMEZKLt4itCK1aQUaU42cntjkL6jSeHPR9mazVxgfTBg",
  "key28": "4FW4P4mDtk4ySrKexDgazTYsQybxG76CBGByrjieSTmxzEP7TUKJLUNPA4bn4hNkZLdmnKtegkpCAxEApGLXS8nD",
  "key29": "2yUDw7oWgqNWQDLrVx8pMbyzCZ4GiXXorXKx8nWTnKRFV7c6TRmZCggWedjcuK1aEQNHyKaSfCDfMivQiX864iCM",
  "key30": "nrzoncAaTvMu6adoQsMyCg6bus2yHRg5KibHKDzKFXPShpoNiKo7up8eaGDmJnM7tXDfz4e8QzQyQtxVRu8zVY8",
  "key31": "4rd43Yw4gWPFbPXekt1bL2GsvffvxsK8MpDnhypYthyn5mdqcyoz6bbjxPEuViMFrgiG2fMeCdrwKpaWP7HCQRyJ",
  "key32": "4trwRCKZ7YvcSomxy2MDCXHa1ipQTbWJPhwbah9m3yhojzP8ku2pfor8QRbp6MbFuUxzpQyRLjkK43RzzJJzVJdX",
  "key33": "ftx1PRc6X1aib4M6BqetVvLb8KPRvxVmEqAvP5FwB2YDAZK4EXXq3bzw9VEXC87vBZtdGtdpmSwLQnTMiCGqpjV",
  "key34": "52d579YjxdHNp32zgDxDcg7qm4TTfCpYF6Cf5C4LPvquUu7EFm94uqdRoYqQWJPK1kgmg8ar513Fz1u3ybHdfErF",
  "key35": "25megFu2CZBRG3a1GZuCVxDPZcLBobjfnZrTVND7CGHmTb9i9njg6skvki1W2weVdmKtcDtWbFScLg3HWdFFjaQR",
  "key36": "4aLdXUNzNo4aWifWqrvDVLPfBAoYd6p7m5mdno5tctPyap5LzcG1Amyq9sTWL1K79ufEBYqNGzbjWZDzR9yehhqQ",
  "key37": "vGhGbJAaTDUwgwhgVJhRrDAYJ1dV8iVvMh9GjUvyBXPbDMjSZ4P1CsbtWLjerY8K2w1iUxQuE88CcygL2gDSUan",
  "key38": "9mExaAFY6keLTNXerLSoqRzRADtXzaip9nFbEmLKWnhZem16hf1VsUhDYoMHgbvBxLKLubpuoehvrf3gaAn9e7p",
  "key39": "5zkVfVvGSu96xYKr9GSUGfqPh8WNmUp9jdn9miu8cSX3JetHdXnUKM1VV8T9xFbKywNDvwrUfbQpPbZE44WsZmUt",
  "key40": "3Wyn4qEstnafxUD81NQbZX7B2kiANy6W42eyNvA7kuNUG8GHCJf7Tycka7mRwjzZkiSSdG6gUDUrSVacMDz5ATrU",
  "key41": "5AVhwSJqpCMWe3pw6orwSKixkfzBjNLHGk24DzqhSPsqnWA6r7Mg2AgT4Yu9R26rsP33W2hpbof6A7ZPS868xdvk"
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
