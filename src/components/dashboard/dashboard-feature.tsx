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
    "29N51Cka4GgTin93RqM66VPFbuqb3hduUutgxnwHQBQLKXby8weXwge2tmbZyQdedkJ6s6UFiHzDuGkGusE5t5mj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SAFJJvWfSXuCg1uevzr1rkr8N3PMfeo2UC7MMVWqirJktyJCaL6agQANR7HkXHmSw4LFBehT5d9zJhkjkjoWvcx",
  "key1": "445KAKRUBhWJSWqMNg9v3BzpRd7JveFu8cNmu3igKwEPzfUKwBFTYFC3mutUxxPDWVM8JQHLnrjVApBB8MdBQVeK",
  "key2": "518xuQXwTGDwHJop8cP4ct4XV2j7EQxJNdzVCBSyXjFznT5TsS3kLhRTZFipM6rcVRBdB1c6f2ca7SD5JHVvidmQ",
  "key3": "kKe7K8WKXN31sv1bGDESNTtr3kpfKUz1hKzK9a8HTYnRE8u9umpyzKNFV1ErjXFv8hoEapLt5fj1krtRDaB9zCo",
  "key4": "5BEkXDuZddjboNbUHCaBYBQhiCXMr5gqBYy9sNUsj4gNMu38tzegiGYmeDq43kfBUcnyNLHSBfzRXnajk1VLe56p",
  "key5": "8fsAaFbNWMeT9HBsbunXdMYQEtB1b6zXJ1QbqaL5qxbmZdP18Aqtwx4F6SLowuo5nvQ2PX4yxxW5zvRqax7s9yp",
  "key6": "5t8x1AXeGGXumK2NNVVKybKSaFeAeYi8zwi939zUooctPh5utagHRRPrKECkRQ2HLXCetGFDs2UyaBtvPo2m48TA",
  "key7": "4JwM6C6VHEvGnr3uduGNHtGyFqRSGJk8zcDGXLJAxPLZ9DfXFiT6oWM37sfiRKjxxdjf2gQwSdDy52d9R5hkRV6S",
  "key8": "4XVoBtqPngcCdfR3ahsVf7umzeWZHsj5VWqsjBKH2UiaXUVZ7aXukQMz1oD6o2yiXjCm5LzX78TRac1e9MenEMti",
  "key9": "2jhpXPPR6mZXS423UVFzaYRdmTEFzpZ36DNvZuFagxVYKbK2fRV3DPjwJVqS7R41ZhVHn9a4GTkndTxDTgWttknP",
  "key10": "3vf2dqs7je4gJpQpGoq8oEjfNhATwX4yXE98ZGE2EkX9xhZ9zjhA16YxmU67M5Er1VbgKQEuqFV1zYXzdvXbZuNH",
  "key11": "5SocHwai8DoB8NMzboHYgVB6TqTECMNRSqEmXF4DkqnU2VfxVWpzEM7mBMXrfkx7qyzDqxE8KHhJsWfbeAn3CL1q",
  "key12": "2jfZKq45DYgv9D7UBHqJRRYeizLTJdAbJxAKtAUKfSJwVQac6HVf8sj179DGRGW11jMqaJtz6KigCBniDy2WBTWk",
  "key13": "4wo8oSoWq1vm85qPY2TsahLCJzkfBm2kmjt4NAer698jQ1JDgJzp7jQPwSLnTKB59zWG45xXwd84yz72YmZNv9KW",
  "key14": "3hAGe2MmZ6ACinz8EjzPaNw174tMpMCS6QfH69wzjKJExYGab1y89y3yp3E7CEPrqP9JTNZ3Gkfy3zCU6tVuAW5K",
  "key15": "4iwQ9aftQDg72R9Fz9cWp6SWHRUJvY4s4shjtJrt8TV7NbLgUg9dUKQa3cChq7Q6ThGGzLU56M5nNDpDewTMoYVi",
  "key16": "5tCS6XnKrQrTa7pbgY8dxrsS6Usc8Y6VAiXMU2oox9eh4unkAEpYT1a47SzX2jcRydpSGbuUxYFiJRjuq6AG4Y9k",
  "key17": "418S5j8QxjqYW9eGSsf6ztfhSeoZ9H6GUuDNbnV38HB77vfNaQLSpCrWf7dDfmBHzqUaiQ7LA74ZZbXAQhNkBdMf",
  "key18": "32TWKuiVD2MdUqV7TP22qyhMpQ2NsbmLADBTh7Pn2JVfPFrFpnuPhLz3iihegU73bR3KRqFcnFMaPCY9QQoQrcjU",
  "key19": "wtqg987yiWLwDCKodnt9FMJksAxqGfKjfQXzWMe9iLmJJPvhMZ9zYWW489irs4q87DMWs98LbDiPkWNueBXZMym",
  "key20": "65X5ejR9VbWP2HzdBBde7ooSS6nHecbSgaqRqWEjZfxY36iohU4J1ShhikD2LbJgQUWJkSQSbvPEJca9Se6Nur23",
  "key21": "3xTzsBvNjcraeTdBxLwBYCPMAUCuv7m6ipVUtePSFvPcHu5mCwtCA5HHqeNvDV6PApjiFFyAMLYKBaRvjseKT7yH",
  "key22": "2q7tDCJAFragfcjUpjH6Hb83fCbfTe7FjZe3x7Xskt2WcoiMM6MRwdWwBBM8k6bebmCaYgcNNvToZc1U38MF8L4P",
  "key23": "42QSfd8To2UoBBzqZqGhGWTAAhk3JgKKWtHU6jCC5ZgxZqmCJqhXhy8x4wWxZeg7ta45VPCBsaHzVecviVtPvw9M",
  "key24": "5Cvgx4NabzSYdkmcDfkNWUp8yYjReb9Q6zd5m8cbQfyB1mExgSy474JGjvLyAiFHbSTvETtJz5astqNGZH9SB8Nf",
  "key25": "29LgVgDf2tUynW4XddsDhR9pFwMR1UHM4sfGZCSF6t9JPCTyfeYnBaH66r82BaPtAHctpS4MGT6pxPCsVVxzJTGm",
  "key26": "5avH6s8bBtYgNrXst8wdEHSQobsFEg8wwxZMuRzf44tPkRBYph7YZ9Kc5nfybCS4Zv18FUVAAb9Su6peimW5gRQg",
  "key27": "4zYTMEpEAJZoVE8oFQLWx5LGFGMDLpRzEY3yJfQWYiFQcR8AUrbt9jye1X3gdnb9tiWJ4BVSiHvLdtzgWDEKTfR7",
  "key28": "3abYmsQu61pCyhsso3ipjNkXTxad6oYXBg8WhQAWb6TJsxwFDc8Z4C4BB29vKF3trcwiFnXBa8DGL4xQ4CBaAgVB",
  "key29": "45vBjopXcRedTPy2biaEvReUWEu8udRNifMDPsJXXfciQrRsfem3XA32i6Hc5fDT8YCeTKyC5Xfwe3mmkBaerurH",
  "key30": "5CERJ9AArHu25g7wnk4Hd31KNVj6kpJZRmABbStVBDPjPGnmyi6TCVMKv4V6bfy33aHp9ycN5hdpwC4ihUH66mHM",
  "key31": "5ZXStMx6NeG9v9LRJZURX8NL2c2LW7KZTfZ6GBxq24bnDw6pf9FgEHAGBrEQH5Ko84MYYeZiG6HVahxvTJpcvbrN",
  "key32": "eVMMoRaT31CkMhBDoNyS5Tccen3m7h9PTEsD9dDVEt5isMe5CbTocwjRFoETyai4hoHCjvRnkLiFsj16T33BsLM",
  "key33": "5w1nJwXYMScmfXrxCgsuuzYbynUsRQ6fNJ7Vdzqq2aERwhGAno2oRbsNAuTEXShDXEwjKbfsuaz42DoSh2swpMMr"
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
