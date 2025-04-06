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
    "3qNbcNZFEMa1Ub75SAwY9aUi2frvLm7MRgKABqGwSDaqeHuz923VK7Ygdwfu798VTWNsR4ry5TdrAixJk95bRtNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eTD6yyigjRzNF3CazxRyyzvxmNEMuAYX36ThaJMF7UUEtt7aSxJotjxbi19NXgcv8fbRFCyiiDcwxZQvtVoe49X",
  "key1": "3XaG3FDZCzC3BvM9xmDP66d2QeMNbLvNSzUFvxqaqCFjoEEJEuWwtHx4Sscw81ntGN7vMEXxRvB76iCZ1zqtEAjG",
  "key2": "3rthmUS33JqL5oMT9LAhKYte1f4jEDHxnEqAyrZZFo185CnuDhEScafsCRuR2Fs6D85WgBVNkjKvuNDCbDyGoY3y",
  "key3": "GRtkNW1pA8BQP7m1dG1nKWGjrrQQYoUm79zKqGgPSjWc5DhGH1oEqyNDot3AuHmphrR32ZqP1W1JzwJw7vfHh2N",
  "key4": "3WEMeAkDNK952Z3AXxzq1KtSGQBPEGo9b9occsphxquYPNRANyHjGfDMmpmjWDunc6tHyVpdZxrJLeithsN2AuVb",
  "key5": "28P5xGPDXC6QEdk9rpyNwUdXvgMaVDddphZzXKLbhZ5EXtYn22Eb99BpBwn74w4u6XqCLHHDMREqiciETnroYPkq",
  "key6": "VHu6idpw2YAsXEZNgYu19b9jSDWzEMfDodwjS1qbDGDKwX1SV3oNkSxxzQqKMRYUj7tZi9LFcDeThd1DGAS4Ee6",
  "key7": "91bSwEYs7cebSqGzChpZobVkcBmSZGJs3jjXXCkC8CYWxN1KnKWfnWyj1eqgfxGaLuvdBqc7LydPMfPZA6j22Pz",
  "key8": "3uWZ5NRuAKL9dbFLmD3VvCyYvwb88zmUpqz1XEYUFbfQPc6u8x67tFZoWVopoPJn3YShpxM96Lbdqcw25vUZb6n4",
  "key9": "575FsQjkULxXHQd5T1VatLaqr4f5xhwUGiND43QDUgvtqmxGLJ793hRDLzzMLzahd5hkantucUL1bRqZEiskWXvC",
  "key10": "2zR4S7RuTFtGFsfVQXvCih17y5RMs8SBcXcD9LhtqcyVYyZ4mgW2E1o5mBQ1hZq6QTWMEJJSe1ENWMobPjYySswP",
  "key11": "2FDkSdCb3djDdMgHvmrGtn42kZhFAg88bAo9L2UFeBow71b6FCmeuMRNKriJ4LdpDmjhXFxTRkSnmRWoB5ArREc",
  "key12": "TfPp4wG5W5hux63i2BRP5b9vUQdeES4rr4YSCmAYFjHwsn4XfwKeJJrjDPtxitnEvpxADG5RbFEj2Bd6akuMPgX",
  "key13": "48vPWJbvkbZxxheabaReGp9VWGCJwjxt6fBcE3cCBd3Gk14WiDY2aiK4sBXcQNYuXW9vKcXoLcqo8cTVCdpbtEgq",
  "key14": "Bwgm69tfYfBiqju2cWR2EyrnbSwsgUNnoifBzDVkJagotsJYTuPWBNRk34kbdWqnTwMQHWY8wbg6Co2HpudN35k",
  "key15": "5UYPUrLkGmvbiwM5wm8Z7CPcfmHcMsFvf1LpVugTJKXPqrN47twnLVwXxPp11Ef6Z9BrJbLyNzVzgWYVHH4ik8C2",
  "key16": "4RWhJwdTRigdMcnN1N3W4U7x2gDssizmmFhVrupn6smkgBQRcZtPjMzHwXkoZChhCA89ddhWqfTx5X7PRfefxn7f",
  "key17": "33hyiW84eRDYFqqgcYioxGswRNDUnVEBB8xhTVvMoPNX8Vz88fe53QhPJySMQhtPQPZdPLN5BDc1yCqBC9DC9Vyh",
  "key18": "4xgcUgfz859NKG3zFzbLnTxSTb4c2LGK6dRW99PLpSH2sBzRDGFa2vwWSu5yVsExaqNsiMfRQp5zs5dCun1Efe3B",
  "key19": "59Gebzf8rz1v5VWiZLQx9xG26ACFYLpC9gP4c4d2VyTNinMaBXCk8py734QkbKFEt5uZd6ra7ULJp9Gy5zUvJ9gb",
  "key20": "2P7PoHsvzmAJtKH7zQSfmcDgEjbxcoW8HTNnJi9g4boWpfAyL2FuNjiH9MDPSapE2ehbfEPQiBggVU1xKHbhsXju",
  "key21": "4qcMuXQwW2UxsuVCK2mz5DD2qbgubCrA7qkbGYdVuASqV9hsmdh3396BCAdYA9vcgZBN5ztiDx3T7YAKsTWJWSWd",
  "key22": "r93SArNV3JvjKvNVWWBsRrJggR2jtsJPNqhBSHhUkyC9EA5h4FLnJ4PHyZGE6esHXcnnnnwqtjy4ozjQU4q9HQJ",
  "key23": "u4qJR89HFoEvyHb69DSujkDxG2TJq76B6QMcTr8KNBV5Lo8L4P8rA6TkiKKsU3fm3ts1qQQfmx29f2k6bUVYuFr",
  "key24": "3jsV8VdAEDcmp8HVUxdJApXjLiA9h7RKdMD7o7LRRPaLZ4xsCSNCpTZiUtbFsKviYoQ4EM1CRbHPPTfafaXSmVQJ",
  "key25": "qyCBJcL5XGgdduZUzB2hhtYDsxbEEv69CyUhfvWNt4ysaRcbv8698E6yDUMyjC33pkbqtVp71qZPKudLf5EdyHs",
  "key26": "5t41jnJVbbsbWd7AF7YJrLP872adjzTkQs3NZFnXTcD3Dja8LZzPgPT2wutgFbPwA8rzf51A4K2NfQm38yXp1hSB",
  "key27": "4nv11UxDwJMiMz8hjqunfZ65p3eBTDJnchAR3nHkHiabrJDKZiL3phHqfTJjMX2duFg3hSQ6kuujWUsMZnbhmcNZ",
  "key28": "3FY1JAyjk4XwrwMrgrz1o2humxwpC1CNe6jMddLpdfRjxpJqmqswDzj9bGsuFZv4Xt7hjdj6YaL4Rgj5Q5Ty9cL5",
  "key29": "2QfTGPiCtetkazHhwND8WcN76im5bix6h79WeWD51DL1iKJWgsu4LAsXUsUx9TcxV7R9ecuh6d3ywKS3Vdqfortu",
  "key30": "4Tw4htce5hUZm3TkmiefwYC9kWRhRb8tMPUoGv6xw1SJAPWEbr5sTMDhSN3cTYjYDa74SwKjy821LJ2TxY5pVovz",
  "key31": "2j793wWkeGVYsEUFcvVTj1TbWzTpzZhjRrCmPQaqzRyoSeqr5fhWCBn9SSwNVdNuaQQX1KcaqU79WF5rhQXsKAuU",
  "key32": "5iFNF38JDQrvjNqpMbTnt9MaB44Tx4vQYv7bg7B78CNJqWEpQybTHSb6L3R2RvPK26FT3gcVdUbtN7GaoEz9GgGB",
  "key33": "31preeTJJwXR5By84mrtMie6GQgpw1b4zCVcBEEj387AkgKQw899pZrYwNt2rcLdi5ZZPZxTZCDPsEfafBSEKpT5",
  "key34": "55xMJrKBBYhxFj2ncvB21ZPzSoCvUeJ7vEGTk95ViDgXfCeSMbwk5uhzwxb3rVGWEuZvBzpW9B1FXPiSY3126LZk",
  "key35": "2ZqKuCNejksZMBBkPEtbvZhwY8FCUS3fcowTbTG7bnw7fCiX3ivemMScESrL1KyMPdHpk8z7j5Pim2Zg47uYv6BU",
  "key36": "4b7ZeTJ2FmE4eGt9W9qCniUuMNzKFnTRG8EdVbkdAXM2TrE7EfmP1pFneo4wx4uEgwoVnNZhucDnqfpWGEJcTXUS",
  "key37": "LB9rtDK99mgMCkzrwdFUS1SSE1bMFyc7Bnw29vFmjp4a614CKoDdfrsqt4zjwYaPnoujc39a2qhT1GcKMjtXhTM",
  "key38": "joi48WeCcWjq9UZfD3LqshhZzB3eiLXwsR8YfADBazMkzDPAg1XST8YepFah9yCdMYExUuDUDpB5kp2mgC1VCE9"
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
