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
    "j9YdRNWQn43e8ctBc6ejLwWVzpRTKc1ZcFWn2pr7RNzj32EQZVk5ycVyRYCL6Z3sF6XMkqzaYn2EKmdHrQmGT4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QRthShmeEq7RzmH5Ba1h1o85dPvNRdsdm29scfxpyqxMKM2k1EqDXNMas9bhDCLiYFkoNtysBZBBKWJBJhynkLV",
  "key1": "4sy2RtgMyyuofn9FtJQsXSYMo1pb96heRkWChpS3iiELinKZo4pTZzjV5DMF7mFHcsuNqbwdQqTXNV3Z3vtSqw9",
  "key2": "4Vg1RjhrCta1kEFYDD6FmKvXD8VHvxkVBjVeQUnZFtpLVMw6MC7RM6EpHYR322iVpqhYeaM34JGEvw3N9qJ3FVqL",
  "key3": "4vpCg9ixqh2zYYKEZh96GbskxtNdGihn9KTCPKEoe1ZrrS1CScKt2dV1ZgJJE5Kk29ongtNZgEx18L4PevnW2fTa",
  "key4": "4P5VEQ9SZjya8dG8Yt9B8c2vcoMC4KPWHX5GrofX6Wh3VHKtLXCzqUvECk739rdRWEmfq6vSpjsyUYytsYx76BBD",
  "key5": "5uMQwTf4MgMJAySoo1WWLoSDpQBpkLuARaqKtEdpPeD9CXaEMkVkPMbVzVEFtCz9iFxbM97ChrbDsVTLpjNgbRz6",
  "key6": "UXCdfgkZQA2MUJxzjLgZFAQTNAHMgPCwLUHRKNdskxo9Mfop1VNoHWFCYLeyrUvCRc7khtqozEm5DFp2BrD2vjX",
  "key7": "22ah1uhpPXwZDrXHHWVk2wRn6FBbZrjGKrGqbP63M76hzfBy6Kdh1g8R9xpAWRtZKEHWbkKZm8JympHzzAA9Jjn3",
  "key8": "K2FngT6EYiQwmhKFKj6tcjFexheFRkBhRyffQ43Tbazz6mmNrenKCELs66UF68dRAnihVbSCc7fyu1vex9UvqbZ",
  "key9": "3xFEeW4nTqA9gEeJ4fXg9XjnpJE8yySpZ3Pf37XMoBwcnoy9NzrLomUs2PqWrXeoJaPxgR14Y52tVchEcCEVoRNR",
  "key10": "3nkKcRZYztLAc6Wn1wHXAGYZZ8hf4JBngujStjvH4s2rUQRwC7Cy19XzdwGvw83CgDfBbjtLn6865rHAiZ5DJ3z3",
  "key11": "Q4ykRgcG8Qdx6j9C9Cq9pjLu1jLSHcoVfsFSd26kqvPzw2FPp7pTRKacMeKBZBNvpXjy6X8J7dYVNeDUE5W968w",
  "key12": "4Qwb8xA8uTGhPYguiuoXnhdTtnxNnqVBBmfeoznQ9zG29FDyrn7AG5nP8vt6xLbUYcsaV6oxe4BeH87VajgNvdsV",
  "key13": "61Gw1VWhQ8QhSRpiDjXxB9UP1pvHtJdHce2eebdN6a6segbjB5xEDfsh1UtnrjQ6ZBWuxEiFkUrEnxkQ6ukC5ZDg",
  "key14": "4DBXktMMVsUknvC4okWXHE65vVnyEwpmJMvCQCsATEwwHLTRM6Zzhkw9uvdot89aUdYYAy9sJdJucb5chiP4Ltpn",
  "key15": "3QxZ54gHmmHqx5ra9RYRT6WcVugSVUzinGNk7igo4XkJuh2K5QWn9SXRWDXsCE5VyZsiFWWiF2wV3NY6mkRcnyVt",
  "key16": "5cDbshN7TSs1qRiaz3n7hfAafPBCNEva5VUrb3GweidGiapo4T7fa6pX1c7rHgWYMJfTZxrTgSuJ4PFLUnK43gjn",
  "key17": "3k1k3HY8BvzWRnZhGfYzQ3hRtPGaFn59X42SNiSMDZ1r8rZj9EvR4Fk96JeJChpr5FZrCGwu5W7ndU1qKUm4139Q",
  "key18": "3pjTU9oxn688zFRR2NU9W7PY87AbU91gJ33VNZ2ZVwxCzfxsAqw3CVPw6bEuu5444mJVoJUmeEpA7SUAGjHdpZzW",
  "key19": "3eHFvd1f2mnHvbFwtep4CQoqv4wVJ8mwyp2n98Ug5v4zLPqkBZJJ1oWPhyhteaZanKqcUnMchu72co1qkhQTTrtW",
  "key20": "5xP2LGEmp78VBAG7Y5K6uwiEGkozUH8RpJ8ummiG9tBbfXkcxhpeLfzE6fTa9z1QMpqh1rCNjK5BbdBQ931uy3cs",
  "key21": "4uQiEVruhfVbQ1Td5CZiKcaBLodrzgysvvACojTPi9cEbN1RyWBmLyrSRyr84cet9ZbiQtfpVAf6K9XPGYYZYwak",
  "key22": "2qA4gn2bWdfWo6MyAPzEzyRTiNuh5Saoyi3eGXU4X5eRwDgVkGc2EFPnkNUoCZqYiN8rgpRtyLtVb3wgCwup5BvV",
  "key23": "2E8BqgLzqTZSzTWUWm2YK4uL8FaNcDDPN9VEByuebQi3BugFTWLPmfLMK2PcpR3pqstpNtVmpiLVug6TaQTamvWw",
  "key24": "2NWmGHkp8LAvxr9R6qnSfhgqPy7YSWHmh25z5bfGcT6UdLxVGC2cP6YfMmN1WcYZvPY9dW2ypQ4L1zF6bSX38L8F"
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
