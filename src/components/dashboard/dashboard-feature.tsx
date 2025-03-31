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
    "5QTj3VLo65BGjiEHGfhFEMYz3BUvBykTVQXcZz1ajrPdHEeiS1QftSs3Wm8SFwzoofgYSHGjp3aT5RVqEa75jZy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ovtBQ6rN35DWF5g364YntMBhzfZ4MeukKjsfs241jWD6sXrCNvEiAunvCzqrNebtwKcLTF5zzkHyN9dMX5s5RG",
  "key1": "54NJL6uhDcEyDfZ5bgDzNwbvKwmbfzGgxgSBpwVJhVVLbAVTfLrVQw3wAFeyY2AUh9Y9ojuDe4a1MjLbG6kZvjFR",
  "key2": "4ne5N6CBuuXbGgJCANwaV2rrqms2iiZPXD9qYwAJd8nnHKiVG73xXW7rshGKgdUXywcrep51d6y8cQTfb1a1Y3fG",
  "key3": "2HE1wkqGwG4dFou385q2ykTCEBNKeKziXazjFb6oS4yVQkKyBU4QBQhTy5zDzECpje4VLD5EpatTQHDy4Bjc82be",
  "key4": "4wXUky9Kh8ZUvji3QQb443Db88QGyfRPCpqyEoLMCpLbXztDmCKGggiC8VeuFJCTEMXzUnhzqgvGQgiP5QYMYJpX",
  "key5": "4uYrCT5GsmwCgywBCa694dgfGtxqsoN2NVDZeaVwX1obzoxTiUFBPcrrAHLQXJRQqmN6d6YfZCxykUWK6g4jzdRs",
  "key6": "6PiphdPLtqHWf6qgBmfAXCrNBWYvZr37bVB7qKnuqePTmu2z82DzugV565BNakK4pCykqiP762VjPaZgXzSz8As",
  "key7": "4SQwtvrtkkaSHTcQ5bNwBz6WS3p7rUekBr7maj7cwwDYvtLxKA4EWcgrsx11JLL3BLJN67kYCvPzt2csMqSCN7Uz",
  "key8": "34ts3WTpLY9U84MxaFcS8r2JLcbn4RcHCUYKTZWVVNBz22ZiTztP2xwMq4kgXDokpJhVUxc1GAw8eATrXQJMjZSd",
  "key9": "4gfhcYTNYCm21xwAiG1yCcyN5BvBg2fDX2ZMy2CssZpxj6FN6tEBZwpGJjdsFiD28iqeuTEddzL2G52DHheUCzsi",
  "key10": "4NZcj34T5rbA3ts6nfckFkhYZq8MrJS2SKzzznbjrtNwMmSjKidZihqnkodWC4WcAh7M4ZDuYybdGSG4hcAM66oM",
  "key11": "38v9cmWgK8K19btvf2Zc4Ng2hF1fGLTND9PwCw1f7Ebdn4nzxfj6NLKqCpuyFwjfW2eEKMBYmAHGzDw1TxnT2UcN",
  "key12": "4vQYVwb9nZaEPk6rxqyXayu1p7jXEkq7nhKsxVapi5jatKeoVUMDMTNgRbgkao2ZFs4fk9a3DRozM5tgJhGuwh5H",
  "key13": "41x8QHtaMpy4vwUyNrtaLoVN1FRM8SDKJBzVFY9My4qfk52oDq64SVs8NLeNAzuK4tb1SZnX4reYQHXQcrz1gGKR",
  "key14": "4GE9qhG5uabQojw4tM8E6WX9PbjzVvCRLo5mUyETADkVKxi2un16tU4QWWoNWPo2uYAZEi3CzQfxHECfxCsLmyAD",
  "key15": "2mNF7czf5mGXYMCGzd3wxnM54wqanyxrCuNWo4X2j1uMWWDZjgEMapbzxhZ6QmxGn5mHNuHYqhsWpp5uqUTmfbT7",
  "key16": "4P5D5v7L2nAuRuRipBtntw4RdxAW2scPNzNoy2qMe3CzbbP9kq1PEbYhXF6oFJ16EjJ9EABskaUM8qnhmEw9Ltxr",
  "key17": "31UM2d6H2LDiEZd9yNc4EeEBav8NUgVuAcqWV4Rw2oPgCe6CMdeUQAoCpanbYTuUuuQvMMKXkNaUeLoGVnBZhAYN",
  "key18": "5NBiv8RifWhPef7hQDtaHE3hDMbUJVcgDmYH1kAzDXBBNrirvdMvD36BEdeCxtynXkGjminmDTeZEGb5fd5E7kkj",
  "key19": "5MLtrQFHh88uYGY7CL4aeKe4P6Ap3XWh16GS1b253dNqJrDebzpD8fcHr82arND3zAU5hXQqf3FqyyAayXDBsYhU",
  "key20": "4CJEZ6jZN11ByXvJGUZMAAgM3M3SqjK9PCXSW9hhurKou5dWvx2haP1i4ACn9h5JyZrd6maLKYdnJHn74DMiYdnq",
  "key21": "5wrPyn1sBD5nN4znW7EvePLguzD2R1qyd52AzSnJFHt6cYJNJ35bQGMzhhyBvAT8wKejiaUBVzfc6SJzHmnCm3RK",
  "key22": "4e2Sp2Qu5uJUHXd61WfVpVTE5VEFaGdsAgpAjqU956meopGL4n3qLxYKRUKZ9JqPaLFa64VP8wskWQhGhSHcjeeW",
  "key23": "K1ShvU8Z2nQ2vHE1JGL8gieL6BrqmgF8Z25eichuJZrSKNBRFPogp1tbF8oRpTSMHs5KyDJReac6aBHGEuEtHco",
  "key24": "2Zz6sanu2bjWBAXLqqyYwkPXBqPiRt8gL66Whk7B7AJhHnSMYk8wKbPZaRwuLMMmkQcd8N22ySiWFB1AWA95W38T",
  "key25": "4NfHfKFaNgpWSB2sHBEsgBwJxVsK7aTwNfS4TmPWHBWexU6wrQh5Jp1mPgrQpdGe8DR3XCvfyD28ty3hu7PFQEfZ",
  "key26": "3PpMcY3zZxKDbuf9izQWiwV4LTbVYM4VwcPsurxxu4Bvmm3XZKmjdT5msKJvkLDzEngFc7wuGFhjBLibR7539YUD",
  "key27": "2cCqskSkZjyUwB3fsGLjxv3sWpqPQLKu8SVcLG53snX14grhNws2Wvs5Uw3aayiZr96AFqNBd8MvwFgkj71YhuHs",
  "key28": "3zE6LoQ9vJLf7w3CheydE6Qncg5pNpUVMz9cwjj5dBoqqacaBmuex7sBbJgU8G4qsAtNW3276qtm1Eq2PCG4BMAA",
  "key29": "3CDsKB3tyY8N1Z7u1k8oue5YL78AqA1Mw9FSgdL4qx9xMCJ4AauKR6EtGxgZ51zTnq3XpWx5SPPVputA4Lyazp9G",
  "key30": "4KfxPsifmACBwThQTQDBnW8UYi9U4tqeqWP4sCKtpC6456nR6wQhkDUyCHW3TGTW8R9wPNiPTueyg63n8XtB1uvS",
  "key31": "4QoSi6y7RSTyDZSM1KbBryz8Cvh6QqbKmFFPtBDNz9XzHpzbxj2b97TFxQkA97DFpX2oPZEuRPCgV2F4PPR9difN",
  "key32": "2Z4GMt6N5HAaGqHFHeyn9qu1sFeuA6VJCJZL4PUiPFEPV1CqtiYFYqxf6E48z9fUWmEKZyfkVQfQKuVTpNwTR8Ab",
  "key33": "2o3EbpqvnT4tXi4FsaybG2GjGE99mMfLNHXzzKjHyPiLT91EQoAVZv1FukU85ziPsGWeQgcjxmeq77e1mGd72iRS",
  "key34": "4VzjLKTZ1P1r2yNTuCg7xGwia8LNd5SjzwHbvRjaR7AFpsoyYtF6xmvrGodHoqWzWVEyzw7aFqBnU9VoyEyJSqZ7",
  "key35": "2Zw9YCrXfBnzGykJdVGnZebMRVzwAdpEz6HPSQrF6MaivDRhYpjHVNWsjs1WzxD4Sq4SSUtUV395dM3KhoLLPdxb",
  "key36": "36VVQdxMNisySHp9KjQsz9cgeuuRMQLnnTi7qvSVh32HDoZdNfPTWscBvwLGPu3dGvuDcXAeB7tJAWxmSDvdedFM",
  "key37": "3LHpAhpncW8v3ySsoj1AwrABmQBb1KmnsD1FVvosxRh6FPVq2pMZY5A61P6b1KyPrXCmtGb6L5NQJGqC6b5Zj1Vc",
  "key38": "3cQVpL6Z8raJRh8mtxE4H2sfRkmBKinouBj6agJHBoq9XqMcdgrTJ6ojEcZtcs4qZjd1HjNFUqe3HbuBQXLkyYLu",
  "key39": "3DV1vESxp3aYgthYwGXihsyxXAK1Y5T3A4iChuaHE2ftzBrCqJr8a3tVNo1yDV5F8BKq1qEXJfcdmdN4kJNZRpbh",
  "key40": "2eVcBDj61yj7xdLCZcGxy6Dv7jwd2Et7NYK5f1zJZcMD7FzzmrVyL3PX6urJ3DaXYRi1d6nAzzYF49eWDRkBPZ5y"
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
