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
    "uUApbt8zDvAuUHvTWjqUELh47VSvWpv3Gn5JxLiKjgBBkPFkHQazUV6ZpeJhfxZK4nK6nmQVgSCob6829aLGcFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f7WDBKS7UjRc7hzcGT9bJPnkqkh5KwdxotqTcNgZHSHNHgErGHLErUbf7YrCZu1QuPyowZp1suKikXqS8zeFQyN",
  "key1": "3CEnjj1viFxWErmr1cGcMdv3gJzD3kWAZiHJtNBjkrqVGVPvVUDwAyyKwxb3Gyc7bU6RNvi41bbatXEkTtRUWYzz",
  "key2": "34PweuKU6UuTXo5M8kwKtnk31hno89bTNAex899cdMytKcVasURawnVDDuyniybrJHTXv2jiiSAMvaLNCQH4F3J",
  "key3": "5Aebnw3iVDZkqR8mmQzFGiAENPVppEjvYizeLAW16zKDp8wod2HTpkYPMq6A1ztx2UonCG54QDmxz1tbprNUVmLk",
  "key4": "4Wj6nCbgCsz8bE9rafBYGJqgimEX3MQw5iVm3WoUTTjYwWJ7Zcieb7omsxDpsVevQHbxC2biUXVFb1jjf5NcJVPV",
  "key5": "yRzC5Mz2xjBfKrELbKcFA41H4pxrNgpM3tkvvEDjgKyoB4sSmnUorCwogsmYBSK6mWnnCTDTnbmqGntieocayA6",
  "key6": "585E2baowuNnRmjsAMQUUzFEubtkPSdTyyQQDJv32aLbTToMQ2ssmBxVoVthgNCqyRoDStm7LLrKjuv8jzNd3pgx",
  "key7": "4uMGAYyYCGZRV8aqwEMzsq5oBhYZJP3hh6P3QaVXxu8WiWrHpNPasiLGRqCdeVDQmBUFqwYWML6W3zi7HYsUkLvy",
  "key8": "4euV3Y96RRjTBpzPovoWaLSZcefYuBhQ2weCcMPZAZEmXWjC7eWNHt1KnCjb2Cd6FRdYZc6od7GaR8mUYpqYMXLe",
  "key9": "26Jnn5sShfLb3r5AMD3o18GVvk7vL5MrnYhgPVmv4MYJBDWgm1sF5GxAedZ9VFTXgcSXH5i54S84eERqtS91e5tW",
  "key10": "3C7CoaGb7DdbZfm2wKKyk65MzRZ3BkxHG1ovAAgmVpqPkiuXpBJiaWc2jpC9yxjzeX3gxeeoDdKv2dKELS6AeQxP",
  "key11": "3oN7NpgoRofrCZaVmXQ8ehqs1XknRMQGCLmax6c6PA4PWa55wKwQNmFwL1eVxHKqmTdQ6w123jUdoQaoHrWbherF",
  "key12": "67QSrQ2jJimE3s1GFMgogSwcoifQegYHqf2RGZHo7pfDkQX43t6LdBW6xdFxGaAuyb9SK3qxc1XWRxzkj2fpZSUS",
  "key13": "3jC5A8GVJGXPUnaiF25aLt4yPunM5uBHe7y22Eez9FLEVQyYxhWfZVLGDoazfshydpeSgMq7AcWK4tYM62CiEuhB",
  "key14": "5AA1eRJWpVf77axpGTYMchEwiHowJZmSFNUx442mEWqDCH348LybGrQmLKBYMfLkPYm48kHWe2qG92pEEMMcDfE",
  "key15": "3FvqXUiWxNHeVyc1E8xopiSZYpevDfoAfcHBpdLhBt31HpFpWQSt8ZaGx7uBoaV5SVUGe8t7hDwKw1QkYSywFMUJ",
  "key16": "5Ykzr44xFE5iphjRKposVZxXMCLZcbwr5QnZd5wuRr3FhSXspZzw68R67YHKmqXqYh6heVENz7aRYuvYaj5kBSoF",
  "key17": "5bse5tavqjNiDG79Tgj6cyHMUtjAosgk79Qwonszm145y2AajzC6MbjtU4dZFLmHXg975PAX822PS6YydCx2QK8T",
  "key18": "5qEXbQZmyFvzgmek2xYA31TJGjmYBQRKVvcP8yJFh2kZDDjiwFNzdcvYbP1zjKHKVCrz8apJfnVLHTPGRtpXoEsP",
  "key19": "2CEXbY5iqvVbLeeVVaWc67H1TSStPcbnijVpJRHzAajyuvChdjyQMNQFgTbA173DD8Cm68EewbCArBqA6D4XkHRZ",
  "key20": "4eB8KiAvat7GWQjRAdY2mQLgsa4xr2LXPVJz3FAgqAnpAdQTxLLnPEMTFdYjLwB3PXgiQ8gKvFkHcWrkPobu4rQq",
  "key21": "2g6EsWRuDQ4f67my7HTaBu9xvUogEBa6iFs4x8pgEeLhqiETohdMBQX6PUM8HeeZUJpWSBtsbqEN9pgG5B1Sh6F5",
  "key22": "66tyEp7RBKzGCrLjeJeUsxKLscnTC8coYDPqFg4kkvN44z5iTyRM9aDCmMLVNv1asqBUzvgynr842oLH4YF28fzM",
  "key23": "5ucFsAUVppT56eCwsUNLDT6eg45Ek9qVyFRDkX8LtgFp4uvZE6sKf4tteHVnuZQrRX4gG25RddFGvNvxkJa3HveT",
  "key24": "nXqQWyyfWD7P9weLHXMVErMh3Jv3Nvzm3xHKSDofPX26WycxBLWeKefnuHZooTXf2NzW5eUL5whjK69fGEBABDk"
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
