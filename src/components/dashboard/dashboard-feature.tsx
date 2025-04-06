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
    "4qCjHz6tF7eoJiHxJ7xj2BEA1Hmkm37NWrUzNvbE4Bh8jmNnGn7CZRRGddiNwTCD96sy2h1KShaJXXPjjrH9hXfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m4n2x668chmZaGkMw5hNx4YaT4q1GJZfRFM45vhp2MBiXCQsD3SksMAM9y1irShSYoyCdfVbQJrPAZCRUSCtGDM",
  "key1": "5BpgE5Ta1eH77cDH5Fx7wAX3ehiBhMGArnSSqT55gVDdu2TqY2Dc2ej1Hjsf2327hNVJ2hsMZo3SiCT4UyN23hAh",
  "key2": "4UCn1m1qeVrdF4TuNvBTa1Q1axHKfNqf7g7Cicv9UJXfkTt89M7LhwkuKtaaJKSzvtKmYNZ5ZmUuCZipxvJBk7vy",
  "key3": "3qenK5oWbVS6HKoxxJK41aMHz2NGxvw1dDYLa1mD6tGfMzWDA6Hf3JqbrHsPH4dXrAGxYZoB2ixWVnHENFrGwK6T",
  "key4": "ffu1gvFoEFy36Yw7YrGthw4qRKYWUdBeM6Fw78WnoC4EdyjgBo6ckreYQ5BPkyiHY9YB2V3z662xR7fXY5yy15q",
  "key5": "3evb45WEZwQFVnbGYyE6EMET9RrjCJBen8K6SYDtrAwG15jiGLdcQEK1vYEgkC6c2JU5sbLxGtkt2vFfd6bnBYby",
  "key6": "66wVaxrVo8jbrcBEPhYNmeZQBcMU4uvxBQVg228WRT8vxwfKzeR3Mo4vfGKR8wRWaQ99BxB4sTFbfmAsbsyJi8XP",
  "key7": "41EzgJPtGzmZ3FmmBKs9fgQYKxLgrpx74b6yxmdtSSJfYJLkPhkGt6yZhE8ZCTDfJm7YUdboTbmHWV3fwKEaUEQN",
  "key8": "5PVywUP5eVe4i5pmA5PbJh5EqYzhUmUGafWWm1poz547jWmsXo63gheXvChwgNSAAu6jtxneiwjLgTnR53uBJLvE",
  "key9": "5Ff7mQ5Q8VpSBcCUotxWSMdBs8sX7TnASrethHsUk48JqCtefYEndAnpnHk26roUjQKsykdk2sD5jo2GFqoYFKgz",
  "key10": "3Nd9XNPx2Znt4bStY9uFdMobQsLSGFuiPKtxQptncSb9j4bBx5nSaTp1rPm1SpofJGvUwFCMefaSBAswnMcARKje",
  "key11": "36XxGwk7GFDoB8ScVBHbDjwemchN25rmXmHAPA3gnBJtjpXqkcqWijuyrqVnZ7QHwGpT2dZYTmFar7earXwGAYGE",
  "key12": "4Tu1qmKjUb6hYL5vbG4RFWY456aLuPh6P9hewAD3CeQAkUkEU7AUvk5wVtVZZNwEyXrLqaxenANUH2KmoKs4H5RU",
  "key13": "5TKmKgyHJSFTJ3SLLkXJL91JnW5to23EJwVqN2onBJLQ5vXhNS6JzcySbExEBxZ9UBsR9P7U4rAiR5Gtq7KCkN9",
  "key14": "3wkUn29b38eG1yThLX27oqNMR5d5k4zNDj56djyR7rM51Fw45NCehXkZs86DY8uvZ8oFjH2u6avRsr1jHdCj9anb",
  "key15": "rh9eXgNTXaK5CJYwoo1SzwkunTFMQ2ovwrpfy1cAbfnBAbcAeyuMeML6HGNRDpki4NURuLNcgZPEvQRRZLTATEw",
  "key16": "Tb1n58kMGWryc1F4Y4xb1gbCJXMytLE8BdFFkZg5uwrerGoYD9AgFkVotb5BT73R5Q5ECheKi8afNkgUbwcvc3h",
  "key17": "KEcgQyvy3nX4pSr62nUn4foWtLLjnYBWrcqNyQLJssbxXDDEYQYnDfSjo6Tmp4a9LeaKi885aTp9UyVFF8od4Be",
  "key18": "4RKrXcwGxUmLH7kJvPPKyVwKdddzGeHvhB7mEkzBhF4oyVNgU7J8vbP9vp2kEgFrZE5GruzD7ozwhXFFzSPRQfMD",
  "key19": "2wWaXh7SFCga9rRFotBbrMHCqs7JJ6tjvzP3kAckkYTemdKzEoK9SSBoRXNQRoe88wN5HGQ9WdA84CQTLj7osGio",
  "key20": "444yMvYy4QVqom69yw2iAdtrQZXnEnZuypLRgkF5bDRywSERTw9ZbQiULfcSQSkQu7cGXEbRenwnXrTLYv9EnUfQ",
  "key21": "5Eng2EisQADZVw5vKL7JUKBD2QJU8Uee69ry6Zb5yy2dwE889gLRe5N2hDtYpxM7wRzVRWdK8yNhfGjftj7kUJgQ",
  "key22": "3gvpBDiXdhBPBxzodY4spHieiSAFtWkPW6WzCUrA5uNAzBQ38W7sJVN2o8FBP5P7AhWp8a2g4YKd2DGJ7kCuJcy8",
  "key23": "5K7XEgX3jmGTzepsBZmwi2zgEhCi5Yiq1rte19VY8qjHGFRGiaSWWRPU89KZoFr74TDFkfi67ZQCvziXKcumQKeH",
  "key24": "Zpx2FHwsPEMQNU1mtxNwzZuJv3ZCVMjr5UQASNnL7UrvQfqiGezNwy84ntc3QN5qJqHtZkNVqAZsE7vbEgFZytT",
  "key25": "5fp3FfShgx4dk1ukAKhR3BDc4GXPiG1JvSpDCSY72cGZVRbtsTDQLY8rU2wuvm76sHDpXXTjqtaNbVR6ZPssQitT",
  "key26": "2nFgVaGxgzGiE9Az6BpiyCgqzS4Hr1A2PCcLqo369PS3PaN53vJXBCh8EmdZuv7Mv9gMGRQ8M83fieCrB1U8uFPE",
  "key27": "4y31KWjkYTPJShxQg9p29Ga7abMJDaYMj4jkkgmxrbqJc9iWqvgzvsmJ1xAT48fdwNZAG2EdMPRpYCXeEUTyZakp",
  "key28": "5cLU6eGEbcJiUNA6xyFrAVWv2qQBAs85KpfPFLLTzC2RmNaEBhLPMidivv4SADETpdXuDFUKgzm5fZD4JegS3PoG",
  "key29": "3RFuZKeJf6qt5rxd2g2Wj8FoiyWYTZ2JC5HCiyxzZewJyGHfTHJ9xoirCQPJYjcdrpyKSEvxwW4oejyczFVCGzh4",
  "key30": "4BDkZs2H9FQWejcEB8Knc1TNx56axcVzyot6qLj5uer7vmCGC2TRFMacwoJWrsiddsP4aK7xuC9rPjt8gY7GBRmC",
  "key31": "4y9hocnAgZrAtgyRZLoZcaQXnNNrEvZeBTKrvbYEZZYUGWMMJj8nkw5aaiHwh2DfeXHzGqAFRCGni122JftnpX6K",
  "key32": "5Zr4pKqWR3gJX8n4deYGzuggSmvkXxfXpbnjK5hShuBGRPyjsnpXhR2otuUxrmrzWpKJyaCEnNbmmLz7deLdTPPS",
  "key33": "3ZnnagbG9Exx4rX3yzHiXq9dTe4B4ZTc1mXW4nCcJDF4o3Tss3GruQnwvMar7yihmXSkfbBucTaYyxtvDSt9VJz3",
  "key34": "64DMEXM7yq6jDMguA5r1U8EDFYuJaXc3Gjww1jFRQp9Xa4FcgFyeoXfLjtXQfQ2d7K7s9KXHnP1ik57crQK7R3kG",
  "key35": "3GaSa3oAgurYqxDvCbeLta26PJAaDKYDDqzvuHbpud7gDZWDR5KdusHYCaRDQx6ttP4Dz4EQ3Sv274iDPDdhMYEC",
  "key36": "einTmkKDxddeFJpDMDxmJGmxDaDpHhhLYkoMY9Hzx1G1DLSKZFAmLNj96nmDmbGf4VTU1uZd1yNdoHxKX61f8G2",
  "key37": "2pHAdtGBraCwh8yFXPdEqr2EAQZq4BXfMc1mDNXuCDBh35q383pTh1MhTAZmZX2ivQ1Du5Zv7kZwKKG3S1hQ5vJm",
  "key38": "4u9XzsKHaoHLTuhhXcopsEvUJgooCuqoXsLnTgQmMpUq3B96MUXKFoAWpntGNYWyRP5A7GkC6kPmrte6o5LQwd4v",
  "key39": "4cFU77EGGBVk7LdvQpzNien41DzxVXgVyUCXmBUWo5KksoWigWdAR1HxNk8MQLCCEUJJbP2xKJwFLbRrjSdpgQcd",
  "key40": "372pqKcKhkdCKhDq9rq8vvM9UHNFLLRtXmMdVkUCf2WafiXuBAAUVjh7v24St6uYS9smCp4GSswE3im4f8ctduTr",
  "key41": "5qBgT6VBysLfSMKrpEYhHtf4tBGLP1qf4eSRYrTb1pxaJE7HUUkAfpWnfobJ8yrTasHuRt7U6NgZjVi2g8xNhWP8",
  "key42": "42P7ifwDaZGJ3yXPyTx8cEMdaYvriBMPLtx9GaJBw8FaqjBXrsP7TXVBsekhfzDbt9nNs61uLSSo3TWVVVrDqLBw",
  "key43": "hRGfbeUaS7E4rDhCpctddXo6rXf7LnZZhrNkSkAa2HLspTqxzwqF39HHhnUfFtEGhVUMCX99HRVW66sS6xnB8RE",
  "key44": "2a1j8yK9musGoZL6LcZw4tnKcwL7TfsMPBeT1aWGdydyUBTLP8HeBGd5V2DtLHHCiJ13pv3saqXL6x6uoYL1YArr"
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
