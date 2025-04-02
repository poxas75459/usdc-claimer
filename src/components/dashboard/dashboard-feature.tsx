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
    "Ajm8eiVKrNhYZQKD1Mh9WL6P9c9G3MBAUrYKRNdkodbc3ZVLgYZ9yj5adXMYPdctkJhSJJwk4jrT2f6epd8KAyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56d6uPJPnxQVx6eyGKpohV6Mtuuy15n4i65puaYsXdafhqCy4SyfvTyQf4TUTBF4YJ8W2NTtEKvyHmaLskzYQZJV",
  "key1": "33eLjA92iviNLhg9pLpp31MZa1xvJVNjq9MW1qWeihUBe6pRUBtfwN7QkXdRE3jGEtJZZt6ykZgEvwzMZvUqSH56",
  "key2": "4JtbbbuVtux3cLhEXq1kzxfM45XyjKXLuBZRYa6zCZe49XKo1nJ9pvGuCbXrPx3drrYJHKTftCNdrKij4rTFzKwu",
  "key3": "5CNuLf6Ahkh4dJdgczuss6eMnLP5uox3KSVT3S4mednNCpwPwpcxU9GKnan4QjJCxeUXAYMJzNsARfeTkGZN4QRN",
  "key4": "46tSNKh5Ffi2fbbjuHUe7Hb47Q89jS5woDwpKeEhq9T81tMVETAbwHmTrRMbtNB99yv3awRWMRUdr6bDBKBUnU6r",
  "key5": "mppey2y4kAnSLpQn8U9LtsQGGCt9FyR6SEDRkP1cc2hGcrsDugHTcvJQXovFJcm1M9JZqtwYP3VvHuhVAey3bt5",
  "key6": "4L1fnNjeELNDnqZkyPRz2gr4RCMsMdJzojHeVzhaexqpuR52sFDEwogEZ4d8wm9M4EiB6xaknhF1bYetvqVKrhhg",
  "key7": "5C8MCyX3QtpU6FoQa1iC5i1iYWnt5ZNTUErQKM5LxujvETZX5JBSBHkZpsWTcrQtHrhXMYbfiNKaGRU1ybm58vWh",
  "key8": "2sM5KRftvg2vN43ng7RRDRfzSDR9K45CGwzmy1u1cej4WSYZsJ1j4ZuWtDmLVPLJmF5G1tTrQt9eo3hnc4zqTm2o",
  "key9": "3u18joQ2iqa7WngrYMnqcdHq9gFa9Hn3UzStzWsFywjRx1d8c8LWSps2a3tgih8ySYMwA3my6o5yi3XqdrdYYPNY",
  "key10": "3x8Lihmb2mV9i6ZXiCgtbuQFuFggqD1CPhyhgyKmjJ1VBVRXUhtGeJBrNkR5V7x6m499YNAsdunueJD4CmpYC5z5",
  "key11": "31AxkF86Gs5WQqLWEfFrKrYYY8fUnDAfZhcEgmo5Mg24mhbTgef1eCJGsu7ra35dozRPjhUqa9XSbT6ro7AEwGpn",
  "key12": "4CyED5KPwXUQugkRefvX9KEmXSmRSexHsFGbAhZrwkwyXqJcwNjK9NckdxwigJXKPe8vsbWeUTXNK6aGhyobLPTu",
  "key13": "32Qk7uk4CpemAsbc1BKhyWg2VDghKKbADckQojgfguZinydaabYBNuUpPqyos8iQt6fo54M161Rv941ko6t8UjHD",
  "key14": "3jRqCJRaxtRi23tBjybjsutxffvhWY7jbmiZX82N4Nu89v4g31JMiAUtJVcXYNpFrKHKyeKfGejcZ4rZWRSkSnxy",
  "key15": "34TV1BHgniESKEBPZETfqeiEMP86P4rdH6bYAdTGBsHb212JmHGty9ctXKBuH9K6iw35zVW8fmZxQucUXwhYDUk4",
  "key16": "NVgzjdKEkGRvCp7wyhwFhebitojHp3MyWd3ipEWBGNVyrZr6AV4XEqGSdcwJdF3Gt56dsCvNdWYpeAAtNFUUKc5",
  "key17": "2Qb6LP7xfcH83fFPCTDeoQb7Mozi3adxVSBhXJnahUFRRmRo7sX2N37Mq9CD4q3Uhst7LhNuQQ3UrHAzESaemXSP",
  "key18": "2UurkSdr2SrGBvH1xXCGDRRwfKRUHtsbSktUmaWMZS7YRFjEvEPrv2i1tTvUCYo8ZjKvhRYgCUoUtXCapgBTehdb",
  "key19": "21i89WXX5cMwMwbhH7zCUgeefbQ1QXHBca5qi4erUtSDXoHoxzEd6TmJCcyi5gJSBAfk1WDmT6PTjfMbaYVVytAz",
  "key20": "3gDaFdJANfv3UB4Gq92gC8kDNbCVi4R9y8W4M5w71vCMuVc9u6R5nAVDewordS6fEJfVoWoYkkGbEUmgfUSp66Qr",
  "key21": "2cyXW4CmWMtUpYGa4wYp3w4dWMQCS5HLzQ8cV73vP1FGAGBekiVdDo5KP9nBgnUcbNe5572UPJdzBPBJQKhmuASv",
  "key22": "3KUVUpZYCP25DSSxwmNGUBiH78ao2uSBNMwksLVcPdtj4uyzUupe5rfGZh2fDrULm5nmu8Zr24sjKXuPyH758JV4",
  "key23": "4p65MyzCxEnj4rrGGwgBVU6C9JxULxRpktC4HsXszjTgv16CarUVapNKET55UoqTy5pGymSsMxsgKENP8RAN7UsS",
  "key24": "2iyNHaSKgf429GJcs81bTMPbs7TYH3dTmZfroRK3b2vsY6xhcnNw2rCpjLE9Aa737XbJUY9GA8cbpUPjt11HxqDi",
  "key25": "4JkmtUYgDV8T753qSmzQBChE1Aaja8DoHCoGHCGB5nX6MshR6uUt9dBfUV7oeftvNruf5qFHw6pkYy1vZJWZR9F3",
  "key26": "33bvSsQHFa1Xns2uvoZpF6YakEKM8XLUVwWWBeCsCUujf6WGbwZyom96bgqL6oRBqFvGgj7qzM2r1kNbfCwYmJmw",
  "key27": "5ZKH3q319K6awtk8WiKSUufxFTxfAr1UaCcd5rHbrT2beXgbqZMjmcBR7ZAajNZTnzEsDNFyxjRRaAuZzJPEEBCy",
  "key28": "HWb9DynW5ugc7Pc3c4u3mz9HHLLS5SGyVi2xRPuysjdQFqUhGV8RmLVaRG3F24b6XgiF1GKXNvqs4YQVF6X1tRJ",
  "key29": "9NCtyRJSwN7Z9LmeiD8iwUzLtrXD9uK3KQrHrS5Kjcy7iwxvW3CqTeXnti1RVed9koQJV8moEANXYJCqNA2ujxQ",
  "key30": "5W9SQBMiybj3E6XwgXdKPAcXLTYeRWdPdaQNzy6N37wPddwdSo6WNCyf9rkfRppbPe4NQ8Uzhhoy2WbsFzb41V1J",
  "key31": "YGAxZUwHwQ84U7AkYA5S1kQpsFSP2xeEKySngry8LSLtNadQJJBL6wdVvD7SKKBCPVVFr47u548JrNnUZc3Nf9Z",
  "key32": "25B3ZNy3sK4ZvctgQ1ZsUMsuNj3Jjqj68YRpc9daG63PgpcGWyJWy2iX59S7PrVP6gaBQ97PW7p8tDafWE5Pia59",
  "key33": "4NsGPMBkdh8GmZK8z8TmCYAtH5e3hyu8SthC6fsTpDYY4SvwamhNZ8J7d4m5WAi2TKL2ocCuLTDVvw5uLH6Yvkvn",
  "key34": "2k5htSPNPWoB7Sqf73sMny6ipvx9Ca7gJzUb9WJJK88x9GgtjHmYSYZ2b7FrgtG7BP8PyAHbRRhjsNjhZkKbZ9zq",
  "key35": "T1VZuvbzCNR6WdzDWKqwVhsBWR7zofbbfhwpuuRB3B6R8kDJsT4h3SpUmjdbphqhwdrhXxfsZbFjMYNSVzVro62",
  "key36": "5NACYJFgfE8CA9AUgRHvsRPSc7Sppg4U9YwcArAxBnKbpNQS7Hdp2T8EpM1d4DgcUnQ2atoaHFHU86uoJJ2NnarE",
  "key37": "2D1qDniV9PouKtGkCrzn1bABAc2mFzUuyKUpriYyumWNvHTHESNjuHTGeH8bCuGSvko1dbGjEqnP59ZxCfVc6E6s",
  "key38": "5CmNcT5VH2NSWCuKB4zuSFnpNbkjcn8EZRF1xb2pm9EsyJaDraMtkF2zANDMyQqvapZKcVJdVQibJEHFzhHdTaFr",
  "key39": "3V72DpVdFyoUC4ChbcrCHf3oe1pcrQqbrMbNZ1kaC1oE3k2p2aX8b329LSZJ7bYygmVbGpaaqEXRSpYDNMRXTW4m",
  "key40": "mtQcAKce5KnmSM4GkZbEuYU743b1J2hohY8ghfnQ2V87Ln7qMyK51TWEyTpPaBCRz6xGBRH3SQbyGXkPHnTHpHp",
  "key41": "3LL5zz5jc5d3N1x95H2JB2kwkWvZxkhxGLJ9BFV85bxvmcfv2EHmspV5YfuPGqu6irfHzYLhaJ45xvXdm5K6GUej"
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
