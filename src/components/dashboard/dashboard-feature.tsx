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
    "4zysuVSfP2AKbj8Qu4pXjLM7iQBYV2pDcs6rPqk8s9rmF4aBc6JvxWV4rEvpWftyKYZWEWdR2RMgxF8WCo9vXsXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ouJ1q14ye3pD75ibbXgSR1ys4GEjmDZhtPWnhHH2VbUxny3wKhSBDK6gWPGPFytvaXC8N8YvTc1ysnKq8iid5hN",
  "key1": "3bwVm6k9rtfKemSK1ZFZp79cpWYpw3PJqvReaiCvQ7GLrK4LzWav9LSU7HPxnkzwYWgnrcGGcTSQD1Jq48Bva4D9",
  "key2": "jCUM6KKoprUWqdHVNZzBZEzvgZcqc8M5DfaMkNzoF1iqxxJmqeRpenzBQFmj7n6fCCEWmB3mP1SmncYELFt3EQZ",
  "key3": "51qqtyq2XLVKBcinsMbSGU5M5vvJKdLVtpZmcjrPa5yRve42ZBGsMhchjS4LTL2usdUXaxT9XcbM93QYMQ8xq9fM",
  "key4": "3KQGbvn2zBiYMc3c6yHDcWKKQNy8EXJ59sS7PkF6Jp2gww4iAzNA6NFXn7HRCyF4TsbY7tBjHScNYRmY9w9Roy2x",
  "key5": "63w8zkzF3ehxBhN5zEGKhBqiB2g6g13CpySJVCJ9VRQejJqf55sqAGNgeG5drM8hh6m4gcxeMeTqNmZnK3qmL5RK",
  "key6": "4T95Etcnzf24BkkE5EeqjBYg2iw2Zy9uBpaMNK9HMTdPL2eum6VGQ3ErW97uqjsb48DJrp762YDSojfK56ge7V7g",
  "key7": "442gNsqC5Qe3TEoKb1w4vBns7owxhZvtFco7Abo67jev9xeJpnEFBGXcw8WxARqyCP8xV6QxT8Ege9t9aU6KKQGF",
  "key8": "46aLgjiamA8GKojxji9RkmgN7PfirwPacQbaTCy8qUfZZUjKAXmDreesbxJ7Ns2jaTWtJKAQy8ZZMr957AzLjyg7",
  "key9": "2ceCrDv266vd3nQXXJrExoYs5GUEirvQppeLrWBuGmD9rf8WNLJ1osffAQEFifLhSWHBYVa62g6smTJpVKevbEKE",
  "key10": "2XPetT9M6jPCk9BbeHU8V5AorLFKkAscp1GDTNGKiQjgnsb51pBNWXH9MCHWWYCpJ5xDdgjizjhuk3XVo6fbSmWW",
  "key11": "1eUmKi7GMWrymntv9ALAy3sHqQod5xcxG6uxcYWJDWC9yWmpyajVGTJNzKj8EhZpZwb4bfncw4aCgNTG99ZrWLy",
  "key12": "26eDrFTtT6XrNuvSdjqFadXWdsid98FdiS5qruQxSPGKKdux62rzeDf7TFHSuJ6zQMgnR7F7pv53YQMnkU28YStB",
  "key13": "4US1YX2eEFowmaYCV3W4MCnS8c4UxJQVGPVg6AcwYNVnqibx21GKYXgS64VTmt2uosxQUC1KwFvNAZGS9GTv9B4L",
  "key14": "5tFpesYDGfwLrmGtyoqGWN2h1GNPF4hb7urPjJgDTpEnwV62JV8M5fEzpXVLhBsze46Yv89qC1uY3YZDJtGwN8Db",
  "key15": "34UEFQE6yuQbQHiFixGg6PpNTkGBGRLkPEehux4v1bSSN12cZgqypMdgFSmsnWRE3S6QWeEiwjyadW7ehjGPHLsL",
  "key16": "5WrohkeqaP8KnuNN6RqG88v8tk6i9RLXz8Ty2jNAah4VaPfZxfz1w5P1WZv8eBhb5F3oiUGcSNNk7zxoYm2MiCCc",
  "key17": "rBAR5grnuWprvgYuEPCCHcXWt5mVJYbEfCDwd4y91xJ86HiS3i1mbWK9UxggNbcH8Safj4JcNHTVLLbwS9oaiPQ",
  "key18": "2vom2TvhzSyzuE6YbvdW5THGyCKtKwkoZiA9WE8cTq9SQxNcWG1J9iYCgcRMwFruQqMsruxSBpfwEUXBB6Ycgkrq",
  "key19": "5opnzAeNRHP48ryRnpQBpaVAQ76gqhGuo1L5mMxqXwDTvSQiKDbSDxk7v4Kp8gQ81XEWvZCsF13Dt6edS3x2Qtkq",
  "key20": "3PhEm1Yr7SVc2aKjSD7tNiUYce3e2KL75yMmJuzsYVVfZqYUVJ27uh5rwMLKRB3Djy4ULYYRnEgSserz6yhcAkeD",
  "key21": "2JM36G6e5T8xLnQgFcwwFC1exPho87gYkNuFXZ9cpcpsN2sjvaEZPCYbAvTu1jWh1opBA92dN8BfLRWVdBLtMzPo",
  "key22": "4e7SA1kd6mw8LkBP2iPcE3E2YrcY4CzzWrHE2dxRVEEDxsiTBaygsyKfhvVjhWV5NEdwMEycRikzHbKSfPSzSDSR",
  "key23": "2pNLewkyDCs1jHoXMUZmiJJe1UL4pwEJ9eE2jgtnDGcvx6ux8iMsUW8GhSmo2eBcAUNabfSPJ6HRaZiSeALGxeUT",
  "key24": "C61SgEW6QHowkeeCYdaUJRCUpjD8hi7PEVGBZY2XMUobkYXRg4K77mbfT2mbtnraSqR9DX5ruGvXQBbMbQYq1cW",
  "key25": "5etqDmLLdLe94R6ZTVVLFGw89KxLDjThAEMhvKHy3GnVNp8J7Bwx6BkTAWYsJzYFpunEtqr1aYbB6tcTLKyDv9QZ",
  "key26": "4DmG2sNHMYCs8LviGiB3wJ3966sj3iB9MjsADRueTbLAKePR6brKe7XFiWDpdfG3SEvWdedmARYZEkx5stRxbhH3",
  "key27": "RSeN7MoiW8kkQoBKE5DpK5o3XUiHh6mJvN5nuDGDmKGf3kufEDZSPeJQnG8UryuLTHNEs1GbVenqsxSvR3CY91Y",
  "key28": "3xUPUsGYTN1oCxeQVHganqvnnDM8K8TpnSh4MYBHbYufTrQmRcwadDcA61aCk5K8QezWc1PUoiH4AEsSfDJr9sGQ",
  "key29": "5eY6zqeGbDYCemNpgRydyqZbRnFAQvnJkXogcKBi9eACug4WDRrUJDdmhFoMHVvdtTcMVFRwYjmgiYdZgpVtKZ3w",
  "key30": "2LvPnYSyDumPgM1CcRHxTARG5dwX82uxVzdKKAhDHfbpEQ7oGJVTmRxXR1VdSQ4kBmFN4njGgnRH9whhEB5K1vBj",
  "key31": "3VqxPSVT1vH1oqtKdBSvwYSVzhDSVkNf2JBSGN3z4SEFb4RoHateCA5dMBjUfu3pHdHidDEvzCpD2j68u7zBRGKQ",
  "key32": "DPz8M53bxb7huoeURjuEJpwRgdWuBMihnKEfHNkpHVofuAKSqopqYUQUQgE7JzUPbFTLtwhazakCV8sit13QCr1",
  "key33": "5X4Pewc3E4rC1kruGm2vnKU8P3efTkh6AvGqgrkqZsK8JcCZ9fJ1xmWrk29Z9s4nqpbwWWUdCPu5XYy3sYzNZHDY",
  "key34": "2SVJhv24W8FEQ1tpVDaX2Y1yuBLjwdPUAkuqhKjezkZGaF7XKe2MAu77dGiMReX2jruJen4p3MB9tvrNSN2qhVqf",
  "key35": "5BbrKvrw718tFZS2TLeghQAQG8fNK4RQ2JHcZ8Smc3n3EZn462CxrjrtTRBFnbp48ejg58K4kVeeAYTAymsbo1wE",
  "key36": "5HR2jhaHDz1KrvtY4Yi9dtv2BTu9uVZoAY1EgLC5EuaLzR3hUHqpox8AujsHVYxVqvz9E11ww9kZvc8S97PwrhQp",
  "key37": "5e5vTn4dKSXgGH7TtYTWy8X2wTc2vqN3amwh4UdU9bBBWUNABgTBZzfKfUaDWrcpHQ2CB53zL8WM1Z9oCboYJuvm",
  "key38": "5jYJxrwLMdGKK5137z3URcBshmgQvSyygsoPB4w8rBrQ9YPGTg3fPE3B76RwvSokhphtRLUW6SPqKHEtFcc2zUoJ",
  "key39": "3ueT3z21XxsxxnmF6pBPUUiipatg8hzWeKHbg3wnbqfSAmwMah4WPaLUVJMr5YRDsLv7inLuDGA9pxYB26qnAKe3",
  "key40": "4b95Y9hoaLD7qtTFqTaLeNqZsBmnXu4DYSHtJC4X9T5MctS15RWFfFZC8J9me6jsjpEz5KFSnGTWscwdZKckTMEt",
  "key41": "64UBLSec8HpDn4FLFYgsUadA6yWRyV2AdQcWwyChWXxt5ZM9oUCW5aFP6A2CWsqC8pHbhZeAUeExkGwqhYCRezev",
  "key42": "5igkdx5qZFfstsrijJvP7MCzXGQPnBdj4mjxy2nzqdcuteFxFFr1z4MagxGJhygqvxfbChE6qwxdc1QLh1pLt4Jy",
  "key43": "EegKfAptYaoQf6AjvfQREximd6yGFPm7ckDUyupehLvpQ7SaeT3ewsQYv83jHMaAZMPn9kU3WVwY6v4DE3ruigF"
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
