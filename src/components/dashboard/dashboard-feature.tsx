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
    "3hJLFWK8naGWzpiqFqCVwtmZ6KcXQ44CFkQsJEYpoH1hjLgGDJJVTNgKmF2L3RrQQyizLPiuXkYZsgu81SxJTGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "281AR7osSWarxG4akdd4BLPBKZqeWWrBK8B5HXFgcKv14893kqx7EigmpDKcGUMv9s1PSvjGJt35TtgeDdu49ND7",
  "key1": "5ob39gPnNcgHiKthVxAWNBDybhYbEkPV9y7waG7YT9evKj9egvLgTJkfrFtqj4vybGvMTM5RW19kwCkxYpcNyWVG",
  "key2": "5Ao7f2LgADZjPbXjKnnofyuTMHCojrP3Wat2BFGhMtuMAcz6hqS9igs9uDEqifqixNWfwC66U1p3uKx81JoxRvP4",
  "key3": "3b3saWbQ9QMXNBCABq92gZ8nDWuAi5htTpb7p5huNLyXtts75Gqbtd9xKbxohDxbJh57e3FygWZNAUXyfE3zYgXY",
  "key4": "3mWxVc1B4PbK7dr71YKSNwohEGUksxfZFCAZnZH9iKNfBJq16ncTRDDQXFHUv8CfgPZrx4Rqps7iBDafSJdLKsSj",
  "key5": "5GLjRPrAUpzNSESj27Gczpw7NbZGDafBeEvYafExhNFfrR7dud41D87y9YEkpHhsmqab2cnL1scXRwgdKc1WoRHB",
  "key6": "52CuYKSCsg1pegREBbwstMagNNUhSEvQyZ9MPc2w6ym9qbBfoBFPC4fCNMvLitQxi1g3miBSnjtS8KcjkpSatnpE",
  "key7": "inBqYm1X7mvWXQsxMHHX2rXyLF1oMfkskvW3uFzHYBCGqb1h3XJTHC6hMZZeoPBvc4ri6NN7kCtf8F2aiufg2Hu",
  "key8": "4suLNLTcz8Qu91wD6GNMnBXHKj5kydhuZnSU2KWsqZ8YMNLsvRR9LL55p6fAe27MAsrSqfv4GaKf5dJkjZ1Nv5re",
  "key9": "2ckwMA2cDpYpt11G6a8CNsUxd9VG5JbUiZjgQt3VLzq9JN1cjyWkYH6LGnKDFwGxC2T7qxyDGLMMshG8rW3F8vAn",
  "key10": "cv7tw6RZWf2UobBCg7Da2iQXp4tM3JB7xrfsKn1tEadfazZdFMbWvDAfAwqCQJ2MjLJPaKoyMDcsLcX7aPrEpzF",
  "key11": "5mTZQxSUsfu4gnETMcThdeEgwvo6jA29tbQrkmXug8mov9g9QuK4SEvj3YYCeLCwPKdnfm5UtFkeLfDVMaDSTXaL",
  "key12": "44QDDBoUwJ7C14sbfvgWmFpVFvzgf1HXWcWgK6crrSF7QWznEjhGabWXHayBqisK6TfjSPD2LMhuVcFquuQakbzj",
  "key13": "CCEDuGm9eAi672Mo451XArQbbPMfckV5rKcpRZCiAYviHTCp7fcRsMTNSk2rgBLrpFuKAZfhnUgrUCPAj7uk6iT",
  "key14": "38x4VKe87Ej9P6xev7D4TdaBHrtD1dHB9BJRBNVS6m6zokM18bZq76fCeKLkt6G4KtAQkasmPGS6vnzh9k4FqTMR",
  "key15": "bdR1cnU4yrF7ic5db9tUAcPftsZGVQA5HjbNXf7F4KPZumTgfbLVTyE2Ur5g9227QTpsLxgN1USmzV6QBm83RfY",
  "key16": "5xKshnQCVMmKNW9dxytm7yVk4eF3KietAe5Xw17PCtpsowMXN9Kganu27FccfNLgCShYyaarswmUAWRVAgFCNs5Q",
  "key17": "QkydWYo2FrmMYuZ4BrtWwBHsmPxZYZxaxWnEmBg5QZmnXq8zGdLHGYkPZoF6CKjj8gSNQdqExjEMV6KmJoGGYwi",
  "key18": "3hDuA3CawTmwEB37yhrCTtnLKTYG5BcAGfQoc9hgZdacW1aQ7U4pBC69a4c2aaEwav1R2VKXFu1ZUFJ5EBp2dUTz",
  "key19": "2agXCZgioQboW26KcKqSVUR2FJG1T2LUb1h4p1rfTnEM4LjscBj6oKbr8ZTpuChmvR1UEfyE3P937zQhQLkhEZXm",
  "key20": "54WDu5GfHq2TpRKDNysybioKmWctALJ5Dg2tk5c3QnRweGT8VrfKvd4gEC59rEuRE7XHUBJTgCiijVvG8MXYyEY2",
  "key21": "51vyfknean1pDyCNyCN7LVyKA1pbCoV58qmrB9BdWYpQfzzcbTG1Ea7rmV7XnkiT3qQSSLAQvWutLNQ4PXNHo5FB",
  "key22": "6vP4J738ZAXffhZjQ1HcNaetut6117P1JsKghreW22D7kvVinoKv8uDfQbpPY4DBWRtp8iPS4fGQ8XsvTBtQDic",
  "key23": "KKmyw6XieaLkBcjcCMBhADUmuQLWvvEycobXBLtEGbGhddYrYaHcrhQzxCSw46rEUni6WNsFXQNo1SaqspCRjRo",
  "key24": "svmp2zavg7Wy4HJPzRk4HBRgi4hpbXTBAVrBDAzAJ23EpUETHph7p9QcukzWhPNvai2q9JwEmhzCk8DFiQaQNkE",
  "key25": "g39zdbDsNGpk3FmUrDrcTYxNZkpCCzCnTUWWzHxPrmpLi1eCY54wosCFgyYV6BhAHaWqKqMNWfFcWStiDPsU7ri",
  "key26": "4uAUbM5DDPtZysTaNjFowVxJyTgcfuqbkzqtJrc78eSGuWcNuZwpe9vdhK66ELHPUspp6ozcoTxGH8RkVBbrukrJ",
  "key27": "2dYJ4QWUkao7X22kytBrH92Eum3dXi9hZ6pu8umGKZ1jqTn9ApyZVj1275wkFRqh6ho4uC6vdCboxBCUHQPaXcsB",
  "key28": "3yJpywi4e5n9t3SisBwi3BL83adgmzYw33hGtqf3cfjeSU7nAP82jjHPF8wCadwRMCSy2ZkeAcwa2mUzjpqXWPV8",
  "key29": "3quAEcvdEGSCD4Xvjmrp9S1UnkVMdiHZ7mUDALnFd1KKgJEB3bssLUpTRa7LGx2mUi5nuBi3DF9i8dG2aen18kwW",
  "key30": "2eKqsQXK2S1ADVNqbUoL4uDnpkCu8vKQoyC8R52WV2jm5b5kSvmAyUJ3YDhsfciXrkRKVcpeZJkPFvnkrFwWdwgs",
  "key31": "4mPQWvxaXXohvw7rxLPy6Vudb2pRKPUDTuF6zucRvK47RGdxUrxCnnYkz4y1KNjw6MSpdgaPHXqyHgWnx3WDHo47"
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
