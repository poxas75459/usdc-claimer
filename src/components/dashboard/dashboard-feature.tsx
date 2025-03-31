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
    "wKChgeV2qp22c53UEGj5pAfpkQoEem7i8EpJZRbPqRP6mTjVCfZ53F1qcs8QKvS38cgRh2rQF8J2EJeBgrZiomR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54d9sA8jd7tyDKoFK4ZmzYPQ1idNsiGPh4U4DLBGw5dQvE53H1Cf5tGrvChYcqruLJxRjeERWKax2u5w8WuD1ei8",
  "key1": "5yUn5NZciMa9RMNTUAFGNYGJigzWruvk5L6kdR52fDcdxjaSYGGzTY5CKjZ79ZfJB6xeuXhZvDvuLgFZ4jzisA2F",
  "key2": "3Knyfg58ZQCqHuKNBfeyy9evrMy8nRLwbn1FQbYc6bEoLB2xEirHppqEwsen7ybfP9xB2Ko1PTnkf4HNimfQEXxi",
  "key3": "51zsUCvqbSSNGwPL4kc6JDkAUNVApS9o4XNdsz6jupaG5ycwTppgCrj1LweyJnezsavRzLKnk2JyxpRFkEQwEszh",
  "key4": "5zPC9oWkabP6hKX9PWxpbJtafQbuMupfHdbjbWHY4Whz92xdVyofFuSKv8LaW4dM7nJWBAqXxDg3DpinvPgNjJLf",
  "key5": "2Q2Fa7TaSXVbDaQ9E5HTn9FUtARocw3tVRHJWZq7M4cFBtLH7s3MvuCokPFeWU26ENTmdAXJz5WGRAsue1S92DHZ",
  "key6": "2bcYQzWoWsv8iC1UeSAoSiESCswmgxdje2NZFrGQh3Fq6YMvGZE2ngFx9DNneNH8B7qW5mnCyocpgdQWgeRNGo4H",
  "key7": "Vxxc99XzwvuDYonHbg27mkZkzCxQnxBP17y15mKAhFZfSeTvHyDittERA72xpTKqoEPoxtNcGN24uNHwxNGoqfy",
  "key8": "2tjCUrzBLRZi9RHr5PRiHyVkDtNNL4HsP1vzimpMv8szpkjqibDmiqWfRxLaN4meEfyMLbkjQ1Du2XLHhiRD2Cf7",
  "key9": "4sCgJKfqDaiXKMWUUjAeZraiEXLGJTCUkRusjGN8FXwRJqqxqJHTgaJsokTA7ApdhJnTWopZcMDzpKerUvbtB4g2",
  "key10": "5Bur1bKHjNeNyCu86azTWTAq8TYu7z1yQwHdJeqMSLu3rxVqoRfJXd5DUU5eYgAVqNq4YWGrsMK29Ux8DXmFiLVw",
  "key11": "bXJZW6zzjxkMPaB5i8DAtz2BKgrv2qoc12gSnpYXdxWirhHzz5cW7PooRYxoYVmgRBrWk1SZ13bjBSh1Qix4t9D",
  "key12": "2FR3vVXZST7jmTLeuCUmPFAE9nNEY7oMqXvWMmMKtwVmkUWb9xEWpT3dMNgBspxZjEDA8abos5mzck4qhjM8ft1o",
  "key13": "5LDkYjSvt7oK6wGsBkxtjZ2zdaU9122HfQ2eSCSGRV3UTKgHQ1aajoBHg4hEgitw4tS3x71Juq29tYFHEJfsRo7M",
  "key14": "4vuoqeEacKBqftT1Lc5STUxqnA9Jiha5h5TdW9wrqPNH9s4ugkMsgzrCBMu9hxFtW5igX9YndiZnoUnRBgpyjuZh",
  "key15": "5PD88YCSpTuBinFNyHXuGGaTRqRyyE5fe36zAcTo2PdDaK6LxWh64Cb8hhno6ojVHB9ByKw7XDGQo25LkLwMSpA6",
  "key16": "zb6GAXprf83pHKN7cFkYYvVWhSgEgp5aEVhSXGPE6VjS8W3GaZRY91ZXFZWuzUj3rkdsKw9TAjv8mHpzsZ2ANQ8",
  "key17": "4uysyBUXYshDPApirN1b8KkzSQjzuPciePtV6zqZdZJ4xnhJWYttnbDSvZTvwicx7oPfYp6KJovzF3uiseeAE7bw",
  "key18": "5UmFrKiUVw1VYZ5duLQwi1vHaZFSQikFsj452AcDZ65sBnLo4QerJk81inHFYnZmBxa3xv8i3zJ3aPsVZ91TfuiB",
  "key19": "TikGA2gf8xJCM4gRWLHUTg3sQ7jJrh24zskhBFi3zLHdF9NQv1BcYU6xEtLpjcKPHZ2mjzJ6n76jtaJiVc2muKW",
  "key20": "4h1sEtqaPhCXidiSR7CFhBmuMpXY8bYmvSJwHtacZKCSAbTVKmVsnehLCJxE8941pLzCDSwjAjGn3Kxa27LnnZFH",
  "key21": "3zUTNNL9A7YcWhYSpB5JNTfyQded4S1RexXbbZvKLzYuURX9T3snvnpxrGVAmpgrR8tUcfvAx76iJAvWkULqZhPw",
  "key22": "5atoN12ey5uCm2RwU6JpD3uvAbcyivJrEGggZRuphYm1AH8kSaNNsgzyQTGH9Zs5YvZv1vZY6p3NdLxif2n16QG3",
  "key23": "5Rgg71bbPoi4dyr2sNAiE7hxFp4i6KVdVKFog4SAa8ECz2TKgRMvxKgusyXq9n8tA7tHTjfprTzyzf4Hew2n6TWW",
  "key24": "45q5d3dYWmH547sx53WPkzTy9jHn1WibiqdBf7G1ALpSEA9LLyJB9w7JtgBdXKKgAUMDwnc7f7ZAchAKmBe7v8Dh",
  "key25": "3yiX66378wA5k3VGNhwHQLpShY87YSRUJJGE4ZSYwFM95grJvnmcbNDMyqEPdnTGav1Ni92VqZ74bfiPqhGd6eGC",
  "key26": "2Cb27gURGD3RFhFjNms3AEYoWbpimgjaLXiPE4w1E2xjVn48ZUwbsKLQhhdZawk9L74JxFSWNAnjQVSmAzTushCc",
  "key27": "2tyBkBju54NXnznm38DueGKbGCHA73Loj44UGXeRQ2D6Cp7f9nLvw72hPtxbQYo4gV3HFzMCy2dj7SLnrAyHXwyj"
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
