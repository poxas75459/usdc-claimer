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
    "2hURynuzfWfw1QGcgxs4MXSRFXA38keNRKAborAxWEMdHP3FTm4PcuEFNTAaEwnrbCYwrct25GYGZaiQfjasKY6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EnynCyLnUi9UdYoWy1sDsFARTJTFrqW4hxwZeLChwjAsiSboPQ83mPBJ4GD3nMQVvaBndATBXgGwHfaPJpLDn4k",
  "key1": "2BGduhGtCc4sR5tRbY5faWPHhWoTWmAnxfEC9CpKiubfdMY8z5tFtTKf7r9dDeMptaCXM1cGpt2izLiMcxxFp1tt",
  "key2": "4cUXrhRhcnrRi8kqJWFA8kE5iGASQqNrqbZ15VN9Gr5YHgYPpLJ9TvRajefnoY8Fz8g1YXuv3wh3z2vjMnoXKq5M",
  "key3": "5rbRoUWDmxSHhfsCXzPGjUYuU6r5tjdt8atz4HT6p1sbyade41mwKpErYMs5hw14aLcLe7xmzt3FTmk488LwZfqV",
  "key4": "545so8PbxXUjnMrcZDoFGFJkJaG5SjFQxkXdFNP7BramHp2i4HYziPZSjDxeQ6texDjsUkYnNzyun1dGsYXSxo4H",
  "key5": "2gpsp1gR1EQLTFjPyp6P4wMPy6r2d5ynEVNfDaVWbhDNm1wkREErfgjFF9CrxiA2BmJAdAKGTvbai56S1mHKM6XF",
  "key6": "5qxM3WM4MG4sfTU1pKfGZZS7i9jvUycccZdZgxhdFaYbLdy3Rkt5XzPcji8rPbTFTyrCHGu35iqRpt4d4oPXUPV7",
  "key7": "2xEw1KiXQowcM5uXLyEPqBNRWRy5JKEvYDSQVJADX8NqDhWRJxAjmMGtgHsuX1FPxzUr43LZdtXH73Hu7jkJPAEA",
  "key8": "2c5U4RsLkVXxj3Y8fkmg8cZuBHgedeAp9shf5PRhR99fWii8fz3nZ7EbRfRjxEjGrTmeQRBiR4N7Abh4tfwiitbk",
  "key9": "4xfCF8cPEfzGcPuXKvN9iNjjSRFeeBCuTxVJaKtRnSPt1hgrMxUBJrV6Hn6sHx5yx6WTVYoNySL6WMYY7kzKjp4j",
  "key10": "4tJVVMAqi7M2qjrwG64irWxzoAfSG9PQuyzctM2typGSZzh8tGmLLCsEUnHwanoxp446Enr3YFoB6W75YGeMELcf",
  "key11": "5DL9NwABMvT1ZnGrF7wsStKvz3Xf1udfj9wBmQQFhqAzmivo2SezYyrpvSxGUsfe5axNPFrd8B7rx5SLWCNM91pM",
  "key12": "3zyiNGkMBAFXKSaZKLjNTPgVeNbnQpxu5vtsHjn9bi25Kv1tXN9V8s1eJrwEctGJkNV3KLUt9ZGjNi7H2BsNe5uK",
  "key13": "2yjtHUkPgdJTA3XkgoUvCmdQ7f1yghsSnySJVeRa4HTRe4h5hAeXxuUNXDRUMkgPagSmpV1siodRzZV9VvpmhMLx",
  "key14": "SpUguhjzBiu1YmJMtfLPUMKdH8cjhDfngVXwHqvk1HNS3VV6dZfkTFGFQT9r3bGyiHTqZoeLGPm9edSJM79ipGJ",
  "key15": "RMWXKkThvzXvAfciD9kDDBprEALYhq1FYk4QN7ZJvrvZYcbrQQG8wsR3vY6J9fwyB3zvhAfAEYBfr5CrkwVxZDK",
  "key16": "4imXPVGegTdWJQQdHnXcTGLcYYAT2jbNGHQkyQnvuvGRZ3ori5RgYbDdFFzgpZQ2HLYu6gujHP4HymFQjLQCYJGV",
  "key17": "2CHB4zTex5JgW2hndPur4fTDtgrT6LthaNFZEBUmieujjRAfpiJ79ahjVxFGaNHJSjm3M69jgqgZojLpp6UKDeWc",
  "key18": "Ej5EKK23h4x7NozUryvp5kF5swBZYiBg82rmSHsQG8pwGvveSBcY4DgEsxUH951CnkumSJiqPi7rxJkamvKJcVB",
  "key19": "3vBy7eEbwbLv7W3DX6JkCxdmiLy5DNBfNqBKiDLv6SJQKWFTaiqXUcajtMqgrZGJsyzyPnE3zWbp9UUqhw2gMWk3",
  "key20": "56HG9EE6Z7Dfp4xDt8nH9mSahszzZbRbMmT7BYQLByc9SH5etLN7juQ9KNKhEYKqMZinVKZHpmPQUeBNiJUjuXXX",
  "key21": "4gtuELQ44dA56XipQTjC71Jqb13cTRfePfwnZGsUxtjpXnn66T1YRfuBBQQqfxMP9NstVU6ZRDASfrK7ggjgu84S",
  "key22": "5XKLyzusyErVMrV6SDPMwoVsktYzwDjYYLhdZCjk7ujs11NBVSPX7o7grcKBv7GrsFogqTAiEX8DKLC6nX83RZra",
  "key23": "5NEPePfvKaViqgBJxMp4SfWUTi1ybKw84pVBeKGV7NxNFrATq32KunvzQUGXYw6ZHejdJnDKXSVVCwj5YPn79Kvm",
  "key24": "5S8LgmWnRu74eerdzDUC6844NMUVNDq1wDBqZQr37GsGbELxUReHA2U6GrUhXTStFYLfEqHK7qH7Ng8x9qFSr38B",
  "key25": "3AdrAmjGHMTuobigsjEhHNjgYSumyesqpykTwDFo2KexypNM3cNwbpp37Hv8zKeDVimGLpnq4mYbjMPspoy31SPF",
  "key26": "5hZbwM85NGXtdxVh5ifkMw2JMfd3BNV4fe3qLgVjYQQNJPs3v2XvaXQ1gaWwLhsZRwU1ua8Ax7R2mVmLoaBuzD5s"
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
