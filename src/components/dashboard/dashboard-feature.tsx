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
    "3GX8VFfv2yvNbLTQeAWuP7afiDpQG9b9xWDT2v74UfUBV9BVepBPgrKyMsVCJphXEnJp9b49UF4Y5tXBjntAidCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TYCmgJy7wNGNnXQozXBBRQwvPUSvfd4LpSXMC8kk8tmYsc85zF6vBEiH9ye2D8hunhW5byweAYLdMKfyxSQeeaC",
  "key1": "2zdb2eYHwvojFkZwspLXH6fsjsbV4QFFm8LCHT1EMKSMjyj1NtcuoRZiGs97NVjQP491H6UfKuv1b3yj8Z5ZWVw8",
  "key2": "2vzY9fEQ2ojRv7CYWYBM8xVv8TqtX7ssWELwFkQHxZdZhJDixYB9KHZC2YSKqzvagtWcGCbtnVLgMSLCzx7An5qy",
  "key3": "3a26TWGUJMBk4SGN5hsrGCMsmac4LUkogQmf4G5ydrv2BB4bgrr95VBfBPLF6kG51gsN97us3TwiGoFsvZg5Lmay",
  "key4": "5MDdDEZLickofXPyq5TPV97S8qY4QWf48a3juutq6x3Hq6E5XQvrD488Y5C5hBRdBCRuUeB2VT85AJ8NVb6sFCCH",
  "key5": "3JG5NaHNwrW6vGfLqE67TBqpJrvVkZySowTqpsuT8wW2Xar5zeUFANQCvCAmGztVY2iy6WYyhPR6QeRZXWd52PwW",
  "key6": "5scvJxetjBUswNPK6K2c4Vdngvy7HENu7UvS9tnAAV9xrAUuq9CPGuMUvaUDX2hBYkvmWmZHbNmEL3XP3eun56cN",
  "key7": "2jR2dXxUjgRM7BAzPHKFaXLoPduZFpFvdha97PPrYbKR2NrRvPfNhRvEaF4v43FmFLi5WP7juiCnw7o5c1qRyegU",
  "key8": "9AvQnqTdP2fDPBAqCB5KbyNXmibSHYn3AZ6ekgUvV4k47Er4V87f2PPC4mc6n5FGzCAzp11qZifa4cVZHxApL46",
  "key9": "2T7L1vRNWtnmehjPUMQo6LQcp4Evuc8r5EVMPWgr6nfNmfvVtY8N839X45krDXibViTZ1BTz3jSSaYPKRA2qEgYD",
  "key10": "4hibsN5sDSmM4JYwo3FXDAyyrp1BMF59dHbqq1WLWpGEgpZY3ZSajpgDJhaaHQ2p5nBQLVs9Xm9yWGxHU8xugY6T",
  "key11": "FDJAVXwSHZ4dkqtZGKYHgavKmzoyJW4zRZLQ6JfUJBSuzC4srMPDRwE54Kg8Do2BXEsUXp26PxvL7ArLuw73oRk",
  "key12": "2fAWMVa4o8ekRQ7sncLqFiWrnkxqzQKxBqLTvoy17N18ok4762TmqRF46i3EUVxtXVURv41DExh9aS4nFFyyzftE",
  "key13": "28Abp4BAAZECUC7omMAqdDHjEJL8XrE3xHy1swQD5uUTB1rV9D3pBV4fGqGwoDj1DBYNQKnbdTpcSrkn9zAAfvu7",
  "key14": "XhRfXj9ZaUWSUEqa2UervGava8y51xGRTwYbTXaUoCrkJyfhLA43LR2TdpiTzoFh3bZoqfmiPbkmtFoxkEpG67e",
  "key15": "63TFcn1hVopWiVui4enQ2ADp8UZKWpAvYEg8V9oeoTfTzvaM2ReNf53gAoCtUb3dYdNZ6C1hQAfEX7fs1bUqwyvD",
  "key16": "Y538DkHkKrKD5qfMHmzMSaYzCVhCeuS8iyWc6M56EL5FLwJKhkaXNaCjfWLUm2AW2iACmkouMpq1ywxo4YRfQFB",
  "key17": "5XrMEtLv5We18mJ9zfivTt7pFRP5ajE7MyHo4uigNPidLvDsaZQEFgehmCPauvUj7wUheg8X6gv2bB8Whoe6FCMA",
  "key18": "2g14y6wYroMRFvoSYCWf8tisGdT7K74C7SaxVF2bMC9zhEbkN5jE59pXtN8kVArN4nZXA6TAdWnU9KvTQykykJmu",
  "key19": "5cnrENuSgdnMbsPySC4YA3mJSjELi1msPcMWmPKPbfyCEFEzSnX8oX7Mxm7U8DKwYR449b7oUVZw1DpRuQLoD3F5",
  "key20": "4dATpCmyxzo6qNDL5ic3w5o8aGqAy4xULuMMaPGqcZmf1T2Lg8CDkVw6C8Momp1eKsb6NJsE2tXwam61W1xTXTSQ",
  "key21": "45SXD3GNs2FcKGNbGwf3FRv9XF7qQyTQRzEnfkKZ35CpSKXGnnVTQKEtUCpQ53MQ6N6ssbyeBLdWYMXgRkHPpZQE",
  "key22": "3GnSM4HFxjTsrKoRH1roFraLUdiHdrpo7RB9hVc8Wx9YJUJ8hNppucMP6JdhhbJ2HyP6UaohC6y2gUzQhA1MgKvJ",
  "key23": "63sLEbAwwrH4zx1ABexLnA1hWEYfoXYAPLUH9oi6Abi3yWDyKE2pCYAPTRB5sSBqu2fUygirQdAaVfLpD2gfx48f",
  "key24": "3BXqdWfCBXGSwdzNRUjAWtqPcHbcRZ9ok8mzbQ9YwUSQgUZHB4RcBfDq5eDe9ypecn6LSmpQB9RKaNCqiAxNSKm1",
  "key25": "657dxq2P6FFMkdS66WHqc9jA9HvAxPx2gi879cFP4nLsYbpWbUEurGCXLBcM6T2RC137ALdfxJZp7B1dVnLPKHWC",
  "key26": "3sJpL9a9xHtHuJVDb3z7q7ZkZLuaqkL21KU7mQafXkDvuvzxJi87QPFM1Cnn28czSbWd8jk5GbApWZeRsLGJdqFQ",
  "key27": "5x1rsBBEZgtE9ZP8fk2DLm7JoxMQKTi2BLB3Mny3wFKnGfvzL24SXDDWBmW7XbcDoh9ELVYQfMRUMBW5pzKcpAJX",
  "key28": "seuhHyT3pisAKY4iFXKBqXmKTdi1eUVeq2CC5dwvfUjxyiMF8YxXKC47ccQHFxpUVmbMYzNMWESZnRftn6Toz8m",
  "key29": "3SDD3q65VeTs8m1XcbadgsHpBSYRMpJdiKHvBJHxem2kgub8bmhxfVQtNL3S9Cs6GAdrohtKgrBaX5jtJ1dX9WWa",
  "key30": "Ld9sa2Hcuua1g6D3wQZrUf6zYQfLLwN9DbrghAKktKy9GzMBq5r8AaFUzZyrDfwg6UcZWhGV6Gdzp185aP6MiaX",
  "key31": "2FXbKrWyRS41oeH2d8MkqGKCoUyBorUhb4L2xrQW1reFPmTBTNd9ENLU3VWy9yedAXeGHN5PpHD1UPCBWZX3aG3h",
  "key32": "4WQ7CL77r5ZKsgc8ysujXSw7wnarZL7N6TsxBx7busgxCKUnotJKMoGjCeX2Y6Ehty6HPV6RiBwyZtfUJVDA6f3v",
  "key33": "a1VHyE8FKzLLhGJJsakzEzDjzaCrjqzy5RtNJYeGCvinu9FG2xsKoWXwGYi4Lgvi1nuuhSp4791J2QpRYPCx8oB",
  "key34": "5pwj3QnUvZTpx6zrGxasDKn6DL6LJyDNHCkYB8o4yTz5MDeDtcEyhSDku9XH1KynCCHavCAi9SS6cysCkbF6ZATA",
  "key35": "2Y869mEHaZ8zyRcCWvGx1BS1dctstSBmc1ZLb3ACX2xJcf9wGmZ67V34oCca4PpY8oWUhxtSzAGih99q2dcDLXQ9",
  "key36": "56hMTAGSy7wZ4winS8FbJUTDTzUSq23xdWetaj1jYQ5pDHT5p3abmx2AVxWdWU1zbzPHtTsbztkTPrDGoCsk1PRm",
  "key37": "4g7LXdPbM4LBuQvchQbYgU46KdC7QJGUWhVnz1C9wsWbJTQjqyAtv1oJLTW4dAE6ptNwWu4LRqUuB6rMEMkKP91a",
  "key38": "5v15UTYpquE5cUgGEHsi3EFkPCEo1LR4p8jT4CJEejHRPpzsMiwVkkxwG7Cd5eCbw6Tg7oQS5ZQzSkkpdTwYwRB8",
  "key39": "5TkhBkDy4gFhP7SKKncDkiHepBwEckL2i6NkjSz6KD17kRyna7kLyiqQv2zbPFPrwA8RE1hYSuMGUykr8R3ukYFL",
  "key40": "5Mxa6TF3MiamY6tsBrM9sQvQ6DMGrpnc3eK7WprgqGiiwTae6rnVFi7HRrfuZcXJbsJVH2emg52YPExFDvCuzKvx",
  "key41": "3sQpFD4Xd881Bh8soh1H5hxxyiYTdRjFv2yaPb1gKmWZG8fRZmTmn9m1U1yP8DyrrbmoBE67Vx4y213VCYANkVaN",
  "key42": "5hgnKXKF4v98ufrvwpMLB5RbwLt2u9AWURrGWBWVKRB6CteAbxuWMcYnt5pXig3LdA6CAuaUY51yCCcbcyjjDNvv",
  "key43": "JCZFrmCfwHc64junPvRVh3KGJww3dd9XFPLMs5ih1UZwM4FtLBGuSpEnkyoBJYHsVbWrydNA7iWKEsBcVLVJD44",
  "key44": "59nnbpbcS6oLg2wTmaHUSKBdEYpxcgayyK99A29eLG8GVwfAq3Y7bAtRiSZvZiiZv2Un8JcfmkLxvu41tnotWBoY",
  "key45": "2mHga2sAPQxg4zt18QwA118vGzrdymz52EZeWCzT5gnHCcGXZeBSU1jQHPKZF6mnV2W7SAQeuHT4nena4R7hwFXe"
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
