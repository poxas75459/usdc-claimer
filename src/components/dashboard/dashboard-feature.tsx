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
    "58ew2AafaffB6A2aEYUunbRnQSrTDqLN1NKVGbQRw8yaqhBqFQUuBtAgkiWqrYD3j5BoJjfeJDv12HwX75ZMk8Rp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NeGg33HfCh9uUUzaYEFTwrRT3goWRNsb7QXaPLkCsHyEQTRRLq6zWFXUH7vrjtXhBEVoPy4Ey7gBoBCUNtqgUpP",
  "key1": "2VdDv5RwFEMbEPX1Vc1z2tT4quJnMDXWdY112soT5vss7bZ64Vvp5nBqZDWA7uZ3Q6UUx6wa2MEmwitPtVAutGa2",
  "key2": "2WB8pmiTpug7ijf6DEVE4gu3RoLYyYL3x7U7sxPpD93scaDxN7tN1ELosTjpkHRzzQ49cS6rz5DNMPDA5v6y1Udv",
  "key3": "3UsZwJKZ75NQV3gCjfAL81EmAevR89jUEEBtNkSPG7DQYWorfKATxPNGyVkbkjH6uxB8EYmVNU3WVEfqGx47SxTY",
  "key4": "33Cwed3hNzy2DmK53bnaJVnSpeZLYkG39ZYpTHUfRWdGzjmLFRxZ7mCvkkLT8t8tf7zXnWttpH3VHXcoukTbKm1X",
  "key5": "n7sXwUv9ngwdcuLEXtVEPkBKhbVEhb61K6pzT2QUffqLSXUN3XzWFC5ELfem2RjkWBa95edZ9DGsiG7Dqp3WP1U",
  "key6": "cGsGkGbWb4EonzcBQCeTQrjuaboeUX9hwYN1sx3VBjqYJbNLaZ7ZWD4Aq5WCgKdnyS1f3vhjo7mkg1BRJ7mzbTk",
  "key7": "3dp2TvCX2cRP8Vcu4JiBndbUK3yMUvgC5hoTbxcwt8UYtXUwGVcuNE3Z5VfEJuQ1rL4JRbFNKv72J5iakJxiXpmD",
  "key8": "iGGXvbpw9v21CAxtVNPZQjdk3YAZZScypQ7zofwzrdtd9B5C9WzXFtRJRG3fieUMCjEBzuZt5Y8SbT6vtKMYg5j",
  "key9": "5bap1LSmZ5SACwzFADGwTxvF7S1yZUemob6bGzCGMGJP9PGvj7iHjA6YnfUUq7oBaBDL2mUdFFctR9RggQzv9MQp",
  "key10": "271bjXLhcpLGcktgSnuL9cuuLimcjzraFA4opbeLPkxYyAE38HhizqsfjrHYFHcdsRj3t3RQSBbEa7tVWLU6pAcA",
  "key11": "5VaCh6uAaX8D4xp3zbzK81W1bhBoduX4uppicNsa6G2xKSEKxuf6Xp7FdoFvbV3oCipoNEY7LBWVb9X1FU5ox1H8",
  "key12": "5WjcwGXvDsx35wzV3bHMMuctz9RhSbpFGXHTqrnd7e2jZoNRDiA5z9MVqZyv6PSYUu29BoQP468tixhoBRqgEREp",
  "key13": "4KfXVuiHWd8df4wfSvcps7xUyv5MGJB46yXpTFyo5PymzyW5X6FNZomZ1PMmyacAbyopFVkYACvvGK7vpumjULRu",
  "key14": "ee5CKKYzXsmnosmVxgEDGGwM4R9jENJUdwAsTwTw6hwC5n6vskYVCKvvfiLd53R5BGz6EgR9bfkUH8f2Az8whhM",
  "key15": "4KL3QVDR5tEDgnwteVmhbcmVomcDmVngh4YwKCFa2k7CPMNnxw8SwHhgBcFtRhhGvHQ6uWcGoXwHh9K8cnn6souW",
  "key16": "4BjvjqXaJTrEugyAppWqaZ2y47341f4LmRzhDVj6YJX6Ja3VRgF5nBrFqhK6H3W1Qf9BH1JLYF5jm7q72U2aE8iQ",
  "key17": "2DZR5j2uJJhXAR4cBM1aDtowHwjbe5QsAbvnXbuYaQDR5SaYJa8YjV1BHF62DLoFBo3qD6WrLVEzdGeSWTuyMP2N",
  "key18": "3b4d7Xv6DHkEjMkCAqazhy476KVq61HEcKD784q2jByNsW2Qjgrx9YpfokZW7ddTgZ3BsMBw2G1cACkGhkEiL88g",
  "key19": "3VRXP9Q7XDZnuVBF8zwH5rECu3bCHCg1P3a63mKsu5CuNL2JJZpviVJD8iGFWRPQFd2wMeDRxGrQrs668PFC6bp",
  "key20": "2YjWbRshZhnrxPgLwDg3qojHSf249SUPNYMVGCUmrwbTyTJLdDCvRgE8UsAKXsvs59dgzcXeEMFkWuhCoppVpLmN",
  "key21": "3aSViw353sjkiUHvDQsxf7AuvCjum9zqZQkWZdh3vAsDnSyPhkpPLk26hLWujfxmLHn7NYJ6mNk293SMUTp8o9ao",
  "key22": "4s17x4FPBXvLBPXXSbhXTCyu6tnf1A6wC6RzJozJNeoeYLq7YJ7grHkwwAPLyRFNZypPxcdRX18FRLnxRUjY78Ds",
  "key23": "3LnKfR4VqY72j52CzEf3KJnaAzCuN15nPYuW8UztJ2HWENUVtphMZfP6wqxJkMN4PETawrJxBhMLgLDEGhCdi7PD",
  "key24": "3CMQgC5Ptpr5wyahPNJCXwTAv5dyKxjoAMjCTRo1AYVTBYAapuyWT9rbd17r1f8FYU81HRCAuTsxYt1w8aKbYQdj",
  "key25": "EbnmwujoBVtcRD7yXD4G53dCWodNE93uSz6cDJfjxwj9tyzLXKCzuwTUX8nYjYSUhjNTauQR4gFS8JWT7n6Er65",
  "key26": "n3qDzebV6Z87LUgmR7GPY2pTQJtoACcKHf2duSMsE1UcgPAoAHjQVXKCNf8qGgSykFJyLhiPbU3foQV4DVtDXyc",
  "key27": "2Df58wB9iBakwN9quK6jZkZwen3VR3Xsw8RkvbWM8iesAWMRBjHFgzntcwvQ76PMBbb4cs5D8KhSzkFkoY8rJT49",
  "key28": "27WDWEvXd4FDeCiekriWuPueWHcA5ENaBRHkeoB2LZJqDNEwEH6hMQK3NopW23RZW6wCgv5kbKTQBHRcAB6BtdmE",
  "key29": "5rVL6JMU5rBovTePqo4wk1ts12nVWD2r2awUXtrYRBSnGb8UjekTLLQ1raARgJundfW32SmNy2pDtj6689AT6Phx",
  "key30": "3yKPWRSXUFzkxi4KCd2MEmQRbVQLdH4LQFCUrpE8xZZcThu1YqKnBKUgHyNE21DxzZ2zXnzgx1iUC4YBU4gHkb7q",
  "key31": "gEp3tfdavVzWxDuxRvgswSL37knFpXafQcuBHyGsBecVFDxSqKwDt2zcj3BprAZkVjpMuWhBX52qGqZMPvRJnsT",
  "key32": "5WMhzR2FyfZksGxHuXpYiF9keh3Wu8Mw8eEtabKHLfuHcL6Tc4uDpeGauFYCHXX4AvzBGJWkLTikpV2KQ8j1uH3P",
  "key33": "3y1uERtBZayeovRK9kof8y2eH6JqT2SC9Sg7tcVrsXukDU9veKJPCAH56Pikk11Zk3NPyxJkPeEuonGxc5MGYCqQ",
  "key34": "dK9chHBJ7PQUyesfd62Egmd7x3yHFndke2NoHyrVK6QYGBRevLVGMCTjGbKzHuN2R6Zimd39qgPvmgJ34kh8831",
  "key35": "5FFwL4sDwUeEmgU7PSHtgjffAMweHNqS51StvFmU5tdFrguhATjtr7rUixAUgwMijV2irShF7MgbUWBtWtKBFFVr",
  "key36": "4Ah1RNC2zuSrPH4ejzvSUajNLLViWDUzHdmsDdsQxyRc5GifRztSZ7SDMs7ArLrg1whu3AqEJpu3NHBSsdTgRdTf",
  "key37": "ZHf8K6qtAHbj2HYWNYY5CXEbc8ri4peLt8R1dYUtbHJ3Ztw7D1ba4ggJujyG1f4x8tYP3WzfEXMVHdh2GH9jNoD",
  "key38": "4EASt9criDyqx3rZeEYVye5gTA5A1HS6bJx15JnSQf4xjas2WzSksr2EPPP1pwfpsvvuDqNyBdookpQap6MRVQRg",
  "key39": "3PsrH5UXhRVqfkg3m4KX5o4xgzqzNxiFLtFuS7FE9yKWNFtd5n7gfQVUm9wZANgTNm9Yx777QNne2En6VuRPnqCX",
  "key40": "3uiv6YMV1KtHxRLyHUEJqqv3NMLAtPPjBYTExcJ9uk2upsjxbEQBHdqaseFhCKwSV2tvYw1ZPKkyDFoL1UbS4pVf",
  "key41": "5cRsEhKEZhwBQwwjDVzo1CbmFnmvZaHRiQXe2aSK5J5EQaQ5vyXsCg6DtoYvXwgVToC7uzwPtN8RFy3diCJVh4s8",
  "key42": "2UQuztjkxSkdeQzPEBM2wavoyRHPRBAkA2DTGQXb9fS3GFSPVQVKnd2HVnv8WyCWPpRWQz2QVNyd23ixTrxaWW1p",
  "key43": "5XwGw1ZnVQ8zcfmJGk4p3MEMMxB9uGTEfXMzJaAy1tYUqHGLdCMSXDz8VrZw2RDaiAejoR41BmcfbSjtzHWKWJeF",
  "key44": "GYp5MQGJfg8BgBYmPAtwS8uRUK5Gc42ACJ9WxCuAH6cPAo4dJ5vvu3zGJhh6qPiPqwaZW9EhPCVLiSqE6AD21nM",
  "key45": "4B9fCkisDinrqqNqQhyBMXRihTRXF7znmL7HSc2MjWBhSH8gPV1VqbKTcWk8UrRrAc3KA814hvSRQPWkP4xPWcaL",
  "key46": "JYJ1THu3WSWJRiEuGkbwCtga9qEc6dnMfoKY9xBc2KARUiYVccsBGAa8yh4rJ1CEWMSmQCXbCgoyEHAvWR4nC7J",
  "key47": "5SyPUH5zbyvEG6AE9MRWMjAKA5aKQFujmMV2tvANc7C4fgSqixf4ZHLXFRKA6YU7AUhLiJ5GRKW4AFDw4Get4TFq"
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
