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
    "4mwsbCQ2kwXgyLNdBTHKnCwezD54fiSeNMLaN2dnLYcZxcanjsKZVuKxGJhg1Dc4BQC7tKfrWqixYezS8p5Z1FL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AdoFqG6sFtWPHe6ZEqRFYZdzivXogVGAsoqL4UAYsmseyz4fyEC5VNohtGgRroEQgYp73UGWdH29xhTaqVmCRJL",
  "key1": "2uFWCTxoUKKAVV3DX55XoHJR25oU5uAVUGJerYNdXAawbqDaWCCcXoig1aA497Y1XwcKC9vJJSdJvX72mywf59Hx",
  "key2": "5ox3eXvAoQMq3m6NsxUjoqFQrVuaiY3YKEtv4ycdtg2eov7AGHHb5T8GBqjux1zp5qUaGRQSDaxU8Kj3KQKQWebG",
  "key3": "CwCB3Ur2ExwjAWQPGxT5sqgB462kfCVyhGM3Rnd6YsGM6MuH5yWZBgMwngmJQs9tize7kvaPtRjgudH9zYbUeht",
  "key4": "3eRba5oTYkQeHMVBDquAoXsYJyWFSB4JNedaKX7SskMU5mvhpik7Z2ULYeSvnytWVEoSTjkE2z26ALgkootSMxii",
  "key5": "4kv7SYqr37HcNucSQVP1x6tiJFiVyvgyrZRKkcEgSkFePi9r9gAEcpW6sGSubMtshVToh9Nshmwdk6cHXXXX3jCa",
  "key6": "4MR7vqPTbYG2yNFoEQn9j8i7BAYTjRH12Wfdrw2yHhbk9jHy2h6vpqA9UoQQqRiYBsWqAWvZ89GDgXxuPYQS4nAL",
  "key7": "2yZqdPRMkfMVkDFRf3LAaKV8XENdW5qm2Lqa5Hsqu3bjygcP5FU5n6zUA24GwtNMxtPsBxmAZpKtTwVaCRpeq8KL",
  "key8": "3xkmS9dC6QVRVnK7CTJvgqhzhcsmJp9Zx71JPYxZD2DKuV25VewpjGhCbqCnABxR8hyNaCvaihewCtVY7YHr9ZdQ",
  "key9": "4ubT3po7u8yECUCTYobjGpCcUYAWg7FuVAXbvioTCUo1uZnpahSvk8GQDiCKMXDP5U15yGNfaQmWT6HgASwKrukj",
  "key10": "26Vs47yL7b7QwLjLYoJ4HBLKofSx1TYURTehQApUvfvaQboXT54DyL2NeB6nn2ZQtiDjWkz9WqHksdoB1ad2t9y6",
  "key11": "4p2kyp3RnMkYs5Hhg2V79voTxSSGCNvYsh5wXYFrwGPXgaewE1DWXPayptjCRsmKxYTRJKwwYrNG3kfyfhRAFeLW",
  "key12": "oeMb9wHULfwGVRtTanBxpXTgpaKVMo7hrF7rC6v34F6YchY3EVrHtduRcRe2BBEqXRLBzoV8fjc4XqwQ5SYaCh7",
  "key13": "N1h6C7KE6bu78GuBWrDZAvweHD5x13GrCEBTfU7SMDhLF8RiUnLdL4BYLEiX8PCfoMvfYhpkNbZ1tXcPMyYeAji",
  "key14": "53856uKQgwLYcwXSTBzWLz2A6x5sDj9vP4t1e2r6tizoy2CJMCfCL3CWdzfVkoyCK1ikMm9LwkDbFmgb1r5X9dhk",
  "key15": "xS1uEUEvMjTxryeUE11YM1Sm3EhaeoDGZuyoajEEqrmudD839WSiuG8CTvnyyw5BrH9Qsa6usMn45RfkJUYPwcQ",
  "key16": "3RXzFPfKuQzUQwfqV9QsxjHkbrMrR7thTXteQjCkzZhvyHWY3vtRmQCcSVw59k9mqkm3djEhtEEbLGVLBhrjRZzE",
  "key17": "2pWN1DLVHAAYi9s8VDmukDTTjxSPCnV9QrWbyZcvvwXjffxSp2ssaSS7U8DpLhTW7GZibyTitHLB8euC2jtMAfWk",
  "key18": "4NQWe2fhEKF6xQ7BCyngy7FHb9t3vQG1tmjoXaxpmft3r7ifctdWdEbDVBNyFsHhwM4hteMkHMBB8Dfda1KXy4Gc",
  "key19": "5dninZpw2HuZKYT9dfFtCAiAxcHp8Q5bEE12tmjsKNCnmtHuqA4AFCLUzJk69pvsWTkddu3sDeUaNHGzs11NLYCQ",
  "key20": "54WF2z1VNc27CA1tdQmRu6K4qELMk9WicEEb4bFjaLwNAq22v49udVecGSD2eXWcZRd2bRXC4rm5txdfNUYAhoTH",
  "key21": "3aygUiiLnjZYAXEVAeEaCmFopJ546Lr7KkYsoSKTR62tcxFcQg4nGPHz6NXPL19y7KkcKp37b5Jp79VL7Zu6Gke7",
  "key22": "CEY8XAN95w8wMRCYKyPNSrgvW9nacwuhvA4htJLay5bsLsKFB5cV7N5ZZBDa1fCgpkcQQNXCDkGyb77vhWgzKNq",
  "key23": "4ispyQUR7CLCctgv4JJVXPqUiXpn9jg9DMx8R8UZcVPK7KMjgnAGcDQsGKqmHEKdpzo24EheSRa1PNFsUDC2pW34",
  "key24": "3aBkf2mT1spFGWvvD34XFut7rwoft9RP7j62xfDq4P3c2oSPuhTznuxSPdMSuQVpdtBjnPXpxTesEX6q7VEmMfkc",
  "key25": "XwZbf6ZygxSkjtqCe7fp1zYJmqKuyEcSTw9HqqgGEbrsKygcuUPhChu2cy3eKrc3H1XiPrJn6MQ2vjfq7atrbL2",
  "key26": "3opUQd1u4f6ysvRTUV21GKLzQTCpYpdZVzfDtM3nswSVFWjRQb82JgWy7ewSkaQnJDj9cKTsnr7xQm9mshHrzA82",
  "key27": "2xt3AmLd2rnZcBZHtHJxQcYi4CWZrkz3LLkqbKnrY6Et7Z1hQjmk3GSFB6cEHVSeVPf15uAuaCx5fwdzEW9svkEV",
  "key28": "5ehHJc6Hz4XadfWzu995GexCdF8sQLHvfZivpVY6xA3csPAq3ibvExogpWxxaGPmGcb1jrbJqULgzP2yHEtLZwfq",
  "key29": "3jAZhcr8YADkYLHUa5dk6NdHRoxf2nJqwKn4m7LZJNhymAS85BsWziqaLgDFjzDaASk6UQv5Za5SttZy6C2odRbL",
  "key30": "34VpRTagANMjiXeu3F5S3zg5Fc4PWGXgNqnEadwL3WXbY5aeoqFE9fbNFK84CAGroGAQ8nJpuYK8T3rnyXZnxads",
  "key31": "521gY4fABVqF8Y7NMpXwQPaPTt5mwBf8VULHejysPpj8itRAmt3W8WF4qbpFWhxZEhX8Lo5XrtPRrtPRsJxt1SSB",
  "key32": "2bNcjdpTMyg7QZgUvHHmWyUYzuo7gzbVq6edcX2LaiZ82kRW8mcJrUiEAc2AZwoiBsxb7rABpeuhNRfy6b5EibQE",
  "key33": "65q8beMJT3rtCm1gR8Akr73AKGSWfN7WaETUargKa6YuAHuUwNUfWghCUvXBTFp6ESaiDQtELTAqkACEofjpnyr3",
  "key34": "jfPBB145GoPs2HJcBz3uXUS8rijGFdBuJJkiaeQfyWL9Kwbm4NWfAczoCfFxxvNH6JX5cAHJ5vsjQLmS3kAD2By",
  "key35": "4LH6kTVmJCGqnBnGEskToLqsU5oW2jcF7NUBNHFU22sCqxqNk8bc3Vo7PVn1U2yQq3AAjcYxez6R2kC52mPT9Wns",
  "key36": "4ovtPU7BVGGLaJnnXZNnn9EQVpXpQh44BwVb51RsjhSGV7KXiJK9w9wSmKKLeEjBRKE4SsMXwttcmpyvmbB2BjsZ",
  "key37": "tWyTWvt3mrVwJp6BbY2G2MyJtShjc4YB7pk2gNkf23jTf6xueHxs4Nfjdm2cGa1CmvSZk3SZ5HwgNgkjwSEKGsn",
  "key38": "w66zZQX6y2jSaLrAnx4hcDvSrZ3Qm5ZvZuzni6A7Bnt6DbHBAHZhKVXbTkiHguHDrsxKa2xqUiybW3NvncqVuPi",
  "key39": "4Pthr3k1JswAM5qigR7a5FHZqgRDbT9dr1fE6j2d4HnLiqL6ubXuxa9JfXD2ypABD1PzKRfYMLnhhGqSGPJoQG7d",
  "key40": "tv68bDtakKr5KtXCCZKT6E3wpLguF1B3bmVDXTy614yAZkvr9MwJ4KraJSZPZr67BMuo2HUoJQQ9UX9XYHPwzL9",
  "key41": "4J9ZsvrF1erNZFgziAk4owJ6zaNVdguDQcNC7SApRiUBWtxmu6ifSMSGiFBafAt47h6BP7o8rQFujspPru6hF4F",
  "key42": "3gYYmduHBASv9kKaHJqoNVj8V4dMvZXQB3dBQzaTLU2i58Uz6oP2AT1DNeR9CmLnUekmgF549G7QGeLf9bFDo1JZ",
  "key43": "4uq2u7zF7jAJoGFRe7RXX9onhCmrr5CH4F34KNPwUKiMxdHPoyf5Qzc2t2WKhJh8uNtwoLRxH158BXRiEGdpCwxZ",
  "key44": "2mQKeRHEELapdXYnzyQaH8zpKYZZGYQPhDddbpeuuwvaC3GqFkBLEyZ5kEtF2eukr3sw6SCBZcQtZbSc3uV63sa1",
  "key45": "64qifBdGYCVCSC5D2uxjLDcfpsctvrRj8qFG4upsg4TwvFbytwbdLvwgcS3HZ4fZQCu1rH1EihBmS3MxE7tQ2a4M"
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
