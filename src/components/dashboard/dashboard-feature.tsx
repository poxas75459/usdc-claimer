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
    "5VnVeVXPJuKtGGMhhdVwyReDLaR1DfLa8UMi42oyc1vu8X3mjZW7GBPkLtjYC32Cdfp8YHCFw9cSjfEZrKA2WrBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44QRWnnW8eCBUm5udUm3iduqStYma4cLFS17rQzd3Dokzfjp3dFxZXP3HSk8AZ4zfiHx7n8ERhAMiVU6KnDtYsXV",
  "key1": "5qwNxzPEVogx1AAkdqNEyc4s8TREvZKiG1P414x86dgjAhgZDG5HjbwxToMTh8Ew6KnY9qsqLkxnGpAVAgEiy4Zr",
  "key2": "5NQQns3UhfKoo8SMExhsWm1rHjHzfhtpK5N2KrWaiJrE9Q2ttAMN6nwc6BHT1eKAHEZV9jSWEVqyfNtDVnHaEhJc",
  "key3": "3mPFU4CULFdE1V7hWm8jV8cQUpN5NBc2zDekug24nk9t9LTVyRVHV1ummkyJcmEpvJgvcM9Q6UMfakJEXWkDeJZM",
  "key4": "eRjLH515hcXS7Hq4ZQ6A6x4WFuMi3USfSk3u1QdYsfcDEGSgRpdtidvrjpxXd3DSXaU5VQTZ6nNsvbFqdWCJ4k5",
  "key5": "2cgULkkjwQnj5BLWDMEGmKMqzXFz7coH25ANgpcQdwehum93c6ZaEM4chVEd5mceFdJbPoadwx7HSyvobXSd3Fbo",
  "key6": "3kamBCjTMC3YnbF11FNKC3BBdHmah122jAbihTrf8y2RR5aXTserm5KgyGbGNjVsHSpi8PPuN3RBhp1dpLD28a3y",
  "key7": "4h5w63aJosAoT1QKB6hJe2pKnnsvJ3m98byHxkoJ3JJoNx8WbZeTRUMQ1XWV5anAsqEWQwQzC3SXGgeuuvsZFCXs",
  "key8": "DQ7zUzxpyUJS5NfBTLWee5fB44fvw4iiC7k4yYKEYKsyyvkv8QAxfGsTuzcriaUwTd38FrsBX9hUJz8rrF1Hjss",
  "key9": "2ap8tWqfLLDaxN2cH6mZYHHZsFCPGHiNavbKhGyxf25Y6tq7QMStCAWNq35Gc5MkZq4dtPtokAtXaSrGHr7uTYJS",
  "key10": "51fAYVoj4MED1EKQFUyRcj1SFiJ9kjg4LY7MjdJQ49JbEmG4qwWV5Wn2TKfWS4p4ZufELnxvHWvxUwn3n9Lt5nPK",
  "key11": "4wghUBPYRAGiFYsxafpeHpmLYxBE7RWXh4Wnhy576hG1rSJeY5A2u38qg7SQVYD1zpUhscVXsXZdccrPwJjtpngu",
  "key12": "2LsbmEj3VbSwZgzUtwTu3CS8a1M1EeweUBPVA6Hk9JkbfVNjL8zTF91NWeC5PTaZH6i6EKnTQ4YhLjb5RaK2xxor",
  "key13": "41ErnXoa78QPZFEW1xgMh838PKkY51FDjo2nuHZL4e5Te16BiPvizfuwERGHMGwWw8JqgmgjiNMxqxfMfZj8ijJL",
  "key14": "tAhrs2wHRpkVjG1YPj6r7kEaAbck18W9yveRtujFv1aT1shbajoEj6eJScfRowgzzFZP2kM6xQYvayws77DcKUR",
  "key15": "4BfMPqyii8Rf7ibrA6mkAgv87bHo3VivqmtF7ATDfBxP4hqnEEPQV1HFVxaRQbhpMLnUjyy6dFczN1aw8sBqALWn",
  "key16": "S8XSMHAP7FTBPJV7m8onE9pFBRv2aWd8jicPAcscECq31yYPo25CZbu1uJWGysGChFqfutA6hqF781BEsoZsnbF",
  "key17": "5YhoezgDUVYft94CGVJcAswDdsGZcDfyAfkgyWxyaxiQskzovXdysxfjGp35EDUuKhRj2sMYQKY9E92qRchVdGBJ",
  "key18": "5TRfP2okxJqYpwPSfgdTwietHQFVQ7vFup8pJiwMFNPVw2YoLUWr1evPfpJtVBerWXHBhu5FzXaWmDL94NzoqJ9x",
  "key19": "3EdPqyoMCJyc4GcNMUN4WxMXTM5SHeXk6MieGUtENJkjHwQXPZGVRvABYccK6CA2TEGwR6qVMTVau7nDcifdWaVg",
  "key20": "4buEdFrdS7qVeWpREwESsQg8cZtxTLerF9MmETiBWVuQ2m8mfgNTU1PviVVyW53hxkddP77vZdPpjGbPP1r1GRZ8",
  "key21": "3NddM7xX4UE9MzSfchaXsm8cWJk7MZSGNTeqirhBSbvkAKDq2sB3dR73kaq1J9QGBfGtJtH53rtozt72KfDb8g78",
  "key22": "5s3av6MBgPsDyhsNr72h4fhhEFPgLmzrSFpbaYrWGEPfPGbStWcyuB1HgeTGczJYoSiLkX3miyykKBaDfPGbtxSC",
  "key23": "3eiqm5YP3Fk3nZMDsD7ucWhs1kuRu9ZugsBwrP8bcsxCmffowJwLK5mF4XPB2R3W8w2mSsm3De1Nkr6c2dMRzpUo",
  "key24": "5Gn9H5AxEjL7YoqbgQNf7YSVH9PZwrZ7gh7ym6rtz9Aic1XudnDpbXGthHsUSATg6PtT35Ho8FRhaozWKd5XTmJf",
  "key25": "2U6Y9ocaCSZimyC5rjxy57SFDEw2kWEgwwhedRG5FeCq7C3dLKVSRAW9xUFXXP8YwVVVJvV3c1qMwFTRS1LvyKXa",
  "key26": "4Ja5aZGB8RLRwufAox2koySVEUjhiZ5JhzQ7st7YrEffRbPbZHbwuzRNcUHdfW7rUauQj84ptJKE9UjeAQAJm18e",
  "key27": "5bVg6PeM8AkuBk9xW4mQD3NzK123NnpLeLV3cqFZgPpiQ3V7JXDCbfh52NzeQ5e2RYDysbKP4U5hXJ7GXVbLrhLS",
  "key28": "2hPAJ4d9MYFg5UCVL8u8kaRsGoDN4RDvLVFZQcNMBcqsUEf1piT2WonwbTkR382SUB4XGfDviN6f2MPUV6ietxNb",
  "key29": "2CEJrS9WTFdKcZmCtQs1KdkLrXpHcs6RPNjqn62KrbBaUmmZqpybQDsHmhezwbWD8kHUru5Jg6sbXXHFTngnR4Ne",
  "key30": "2JaC2asNUfrpJwwSxBnr1fAH2SQ3K34r7MzZjA5bArMtCY9aC6oxNjVnxzpZyNzX42mTp19Xb41QrzFKtU4GzZXd",
  "key31": "KMXHeXPAEyXidrUhN7ZpE9ZNcgYr4XNPGJrDQMbnjdwFzPGaZaEonSz4DTULhRjrWLKm4zo28eATzyguxBcJTva",
  "key32": "2UcfUzWZegkFWFDhJoxXApUxGg3WU1Uv2p9W42MQVJ8SdEUyZGohpyb9txxHh3RkTCWiGs42Gn2h8eqqeLAx3oKi",
  "key33": "36HTUQMybWGRT2odox4GP72Hd52LNu58K3iGzjQV53K89k3XJ38e8d26Zfo7dtSc7pmNaq4HgdhUFqwF6GY8d8B",
  "key34": "5yzRa9m7XRZBheiC8Cf49EbUBmnPYEmns1MB5C1uVGHC82vEMNWBXyvNEj9wqN7BsHKC48KHw2VJo6AFet1ohMd2",
  "key35": "3XQGdmjP6QU3YnQx89CnBJuQxDTZJg5zN88zeQ6qpgugRhRp4yWyGduo83FKnKViZ6r3ZTFoPqo4WYvBJForFkzF",
  "key36": "5ZyTpnvSSvzMmWXGe1hHVSVgFRMFFGdP3wfAdoc1HkM5mMPCNbqLckxSMg8FthG2gLe4Hu5xppmRZYJupFhUeCP9",
  "key37": "ZF9vxkNQevGR3YKBqN76ro7cU1AQW3fnQoWm6QxP5gL9WkENFUgeNMwU9u4hnw24B8xa7uqKYEKx9En6ZysCJHt",
  "key38": "4MoLAkb9N1Rpr7MhFr6uEpnD1D9tMqS5qyQEM6rU94wdAgovt9ccS7EbdKQsPXujMdkTfYqaYcB7Hdp1sV5tiSG2",
  "key39": "ZiE35ZNNgYPzqSvNCxKvt4cRCJm3JKGEJJuQk4w4eWraCDKUxx4L3YhteCfMaD39LF6sP5YXbfWeno6rJBUJku5",
  "key40": "SZrmBESike8ppqh9uWyH2xdwnEuzJ1NwAR4tvmN1DL362Dv2TmDKpnBdAYmjzh1RKuR5zozaGGbz68V1PqUUTb4",
  "key41": "3JmSzrHUeP9FpotisMkURPmyhuKCuAYTYC1f3dqxat4hgieXQ1z29FTeejrCa5CgfD6WWbxxZ9AP4U34s7t82vpq",
  "key42": "4rha4ikHPhuJTMw4PWAgjHMGkNs6kmJhbJWyrXkYA5TwPeMnRkMCZ5V5xEuK1xNG4Bimab2tCLq2P39B9ULYKjRc"
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
