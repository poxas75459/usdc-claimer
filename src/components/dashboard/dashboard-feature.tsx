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
    "3u2mbuBP4UxQLAEeLokZPyxTJXULB8eZ75AYygoU3jrK7ydYsPrMx64VJNTRpcXq3UPjznGXLvpjMZLStoNgHZxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BPRmfiYQjJF4aFXXaG4Hjnq5RbPjTMiYvTJf4x2Z37XboQ1RGV6FJUiM19XvxHCuWTSqmcPChXpa4Eos5BGeDqP",
  "key1": "2ZuwyFi8yVzUfQf4T4o7YD9z1PDaW9wSSiA7YyBGBM18FCW3iJZ7nywvy3RgnvK6mHW8EGkny2cPRM629K7hbbxP",
  "key2": "4B3CzHa9HPQsBdGQCVzyPXE7txhem4zM3bXXpg4NB6GiTec6bhofLuWYdS7EQGhbdD7rA4b4cNZjxyt3q7Ctw54R",
  "key3": "4NSDU7aETYLjEQxCyN6Pso5DKeL2tWQW1Sm9Nut82NVfpbEAtixUcxcwSQQFx3SHZhVV7GRzVtsKJ6hn3wUo9W5X",
  "key4": "24Xrhu3wri1oADZDsjU7exT4a1eQJxEysHyPdocrc25whLeV17mAypEDwpzWKBAKqfE62Vwx8wkG7HdxkVpRkuwr",
  "key5": "4hszxmqqZSU3RBTFnorBnM5ZRL2ZZrbgsm8HMBxzy6SDzg3ztDGUE9BAuiNkKNJfEPBAVYXvbYFUc9FYt29EYcX1",
  "key6": "25ri3MTAmNjxMXKRyHYso3SJsdMPuzu2QQEckhMmxr8aLCVam5ALV599an5Bhs8gDjEaFgQMDnGo7enept9ohBRo",
  "key7": "5d9u48T9ZBoaGKRUN1utvyVMdGSFcqVxRqm9K4uf67sEXs7XWWMPUUfHfUH1TxoFCkKmJwJwJbNNENQh63A273md",
  "key8": "eW1by1hxUf23Stgo4kKnz5zz8F6sSNGBTxuvdQ1cL7FELCMVt2tmv5qG1AjnkYV58UY1wsWHKsGW6y4Q4hgCFW7",
  "key9": "36zPAMMDUa41yu1ZRznnTNcNY35iRA1Bikg7ZCd15kxNQnuHBMjVHgJTa2rNcTu1CLw61RsZFbpTeEEeWyGRxG84",
  "key10": "5LY38QJpaNBq6oMNGytaSXi126Qf5TpXJFKFwkxenFD5aUgmts57XGFfDXHUvBBhSaW2kgddqCbsAUErg1J8pBL3",
  "key11": "3V545N1objx8rkUiUX3AYSE8TvKXDdnpyDDYwByhUpHPeSPMXH8FtDhK1mfPA7MefFPZHrJWpRENoKmXVdHRwYFC",
  "key12": "2vjyUdYoL4EDVRT8mi4aso4YWdtbENm1wKwhPg1m9NU2kTVEwjjspW72vh7wYPFwFi32xoeUtKSw766bFtT8ho6S",
  "key13": "4wo3xvU5B3CwN84p8zvG22MwZtWHVkdS9rtzZChvfiTaoy4naSdDjAez3VkHx9sAWjF4wm8nf9NihWYqKGRqRqLk",
  "key14": "RcrvxHpnt6SWEP2o7pXeRrH4zCDJU9TXgWs21gMK8NCeuUuQdMsFDF4ZMQaAe5zxz1FchBjzg7Kr9uj93r2fFmu",
  "key15": "2xuTWoZoZ2n3ExUuoaTaB1pcGwD8wGqaBzMVdndTeVXqmXtiiSBwUqDNpCjireQ4L9BJjyKVJ9wG9eGxdWACFiUR",
  "key16": "5A2RbQAZdf9sCzu9d2RqttvWp3fXFVPZGKjLsTtTL5y7YRnZoTmcPLDTiV8smYaWk6uKQjiM3jGzyxgBYsWE8NV4",
  "key17": "2yGCkxTubWSg8ZUuRsMBaQsP4VSo25fzHDZ7dcCVfC46PffwfDshAwdBKqVitkSTY5tFVbwTNxe3z6bcaPmn55VJ",
  "key18": "2vD9MBEzYLgGY8bzpmbALbuGLhbCqKDAdmbyUhDs35oM4JEVhr7LicyozQCDDrYLMpUaq9z3kn6rgHYUR4fNsDMG",
  "key19": "tAXUoGEwvLkq1jFVRSkxVmWRiQ17hu1TvH57zxQSYBg7BMRvMp8iFuVHys1WQzHZyKMoU7qL7GF7i79carD8Cry",
  "key20": "67GJBYZD9PtqNMq3yrnffHfxdFLdZZRXCD9ikJ3FmAQ2GavVjFQGn5LquCPy425HCKgSUQr5yCUV8y5wGmBNeht5",
  "key21": "2gegQoLYUZpiBqBL1t2dsJzRirKuiWtzLD8adrduHLyvAKsyh99SdHWaAGf6KKoL1tMBSsXdP1c6fumYTKYNV6Vt",
  "key22": "4mq4QR6cDLDqf5mMfpXm11SFS1PEqDpdm31XWiYkC2Z9DKUkTBpiW2PMgGTYPQ3xnrBxTJDrdo8AJb8kxKXxZLjL",
  "key23": "SRX2xJxZPxax7e7k6GvZSNcGLp8wsu3Bko6wGp2avTJaRbqBdH6862yU4LDomGWosy9Te3powRwKSPSRquAYEmJ",
  "key24": "H5CzmkeDuvJswkahThKkmCHTVBpNNZpAGzUDfb34vd3bZ9v2Cue8B5Z4U9tRHha5JuKCcYF68gNG3SMVThqxFeH",
  "key25": "3DCUwByvWYuQdvyN8ieMUP2zczu9MfV4zbGEFSk3T5Ju5E28BS6qFhsqbk5DtrXUNAF4uVpbj2VeXfGsEJ3LVxpE",
  "key26": "4JBxgWT39B29eiz8X4SWXcA8UinrVXpnssVWcRLsA4iYQ5ecijznMFGPFS4MqWEwXZxgkHA17ChQNSSnd67bn8w5"
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
