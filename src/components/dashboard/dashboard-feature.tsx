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
    "2vmTYrrB5zwbZAZzofSPBDEWHZzqBUSV4UFwUTEH9Tt7LvzMBwe6qLJzq8jYpo6UR6bvQ9hfvNxdbtn8wXnALHGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VGNpV4v9M7i9mTR1hxBTTSzAxC1yCiLhYEPf4bjw8ruxmWRo3LuSzAYLfGuAunioMMhyqE6cBQ16ykbx7Y18Amv",
  "key1": "5KPwz5DwWYjXSPcGpmFHsPtaDQpF72LU2pfjKv8JTa8ofomMJwasmmvribNfemXFJSWbaSwDSTqjvxfhbKpCNoDW",
  "key2": "2RuJ6XDbDZfRxgcJLhK7L4xSJvEgpbuPeQn3XePHZ6t4NKV7Du4dz2C1wmK91fUFp9yojkvomSaeUiGaKowbY7LG",
  "key3": "39boG1kiW398yL6tymVynNT32st5mV8vZmTyHorpoMSeSFrz5Lc5BXX2oWWoko9zeiVZyzHqtzrKzeUV8YmfFLkR",
  "key4": "2Xsf8f21faV92MZUPrTWdifXwYVMwxaS2o9KSedR84T5W5YLULdQuaDVxgznrBr1HshWVP3J5yoQfyCtYR885De7",
  "key5": "64GwsYTff4chSQFmtxZ75xpnud7eVyxc8MiiU8oAVu3KhPDo4rZ2jiQ6YwLf85WtgeLkBPjvEqmjgXqFYyH4W2FZ",
  "key6": "3y7ihn14URHtgtBzTeCQrjHYMJvPTuGw69FDPN1H2a8KWyCwcxdZoiqx6k9BuTuWmsqDhA1NQ81XgEfBBefbzfb",
  "key7": "3scDB9py9Wjmh7EdM5zrDPX3gKfUhgMdVpVDJDMyVX5mb8TcJdujUq4QPbBBJEGarKAGGP1fo857yn9iCUojRjJh",
  "key8": "37hrKj7aJ5sYge6W7HcnmaimJQDY9BXaYiVNSzmcksp5UXX6nzqZzABWshUvAfqPCStt3Z64bmaqvzHtjTsfRUkw",
  "key9": "mqCQwdvjMSLGYu75VmWp1Lc4YE5hEAaynRNGRW7C1QBYLkHzwqTwzTttGji9F5wetCx6f8UGK2GZxuzkzmLdf2A",
  "key10": "4rU6J2wNEAV1oBABM59imiPePPdg9b5Ah1AV57eGNTFoDnyUawGrVdyNcuqi7Zv6z6wEpLPukzidBVVncnu4iV7k",
  "key11": "5fdPRi8Q8cpQRvpsvfZSkgHGCghRXyXozwSGzqVmMCHV4p5NL1ZRJkvHJx8Q4uLS235YPn67vZJLiDLZPstQ7k8L",
  "key12": "rvH5tChEeGhudJDpj7APrzAZbKjRAHovv7trqm6kRZvUyUuM1RRksHuEPsXKk6V1CrY7Ht6dJJNDfnJwrh9TYBW",
  "key13": "3QwmkUwNVrrXaQa68ejXbuHFfZweHXFUQxzrNufKxvki8EGEScWS9nMrJ3nzeCMLADim3yV7QKvLMiyom5ZK8gdg",
  "key14": "4ve1PUoABy7ud4JQ9TGiYUoER2g1PH54UasnMCszFytH5fJ6iP8Wv6AmhBjyKnnDaESBSGhc9QdmFzzbGhMQDx5a",
  "key15": "22RXtykCt6tpsboLkPQ18G9mzibmNGAjmPgW381v6ehdE7DTWH9TzcSj79DDfCL1BxZg96DsaUQefyNbWeNuJBni",
  "key16": "2DfymZShtP59nVkuuw5oJGDYxQazMRf3F9yp4QA7K9N6raqB8a2PLacBbaaECMiPpEkyUxsJMHzc97bv5etjjnGq",
  "key17": "5Bt1GTnE68ETWnp8pCcXCYCeBkBpf6FUt3LTuukbqZy3T8MRyK67Q61GSr2miSfajubM3W6kRc6tvctFUzch9ZX5",
  "key18": "44JFuxAxXEKpeWiPU4J4moFkq8vDta5rBhPTwZqaxv6nSPQbXKyW5gecrGZiLG2tP5Aqnw1QpD18brwM34TFdREX",
  "key19": "2xXcpY96SAcqBptsmSdMwAtc7Naf5ciZM1KkYiSEHZfa1WFRnKLk4Xo4Z2USpocH4ZaJnXL9nSntH5UptH4jtNkc",
  "key20": "3JLrp2CphHeQ3CKgJvN7gyFBexpMDxD3sV8mMczafdYfuhx8y4LQ7ZJRc4ToP7bb6HW32rj5FZuBJ1axJPz9DPmV",
  "key21": "3Wt6Wi98PYNKrhxUvjkYRVC5EmVAkbEmUsYCt9HF8KGQc44bg4Q2hbpvooXM2ec6wZJaDUaQ5JTqjEXY7mqwn72k",
  "key22": "3a9nq1kTaK3Bc2jRLmqqCiXTFmKUT8Zzuv1ChnqTbf3JfuxSxxcR1FDqae9SDTPet6HhfXcT8tqc3rVUQpdZK7eu",
  "key23": "2mD6jTvUGxAEAhKcfqPqE9bLByzFCUCxLo6e1PHtmXsR511a92cvCVoFkwvNMopLMYoRG1egmf6MfVztGC3tdT5K",
  "key24": "5NcVBV1FXXpjD8fpcWeUUt3BN4eXvvfyFmF3ea1PvxQSmo9eFWpSyrxD5fHC68XdsrTxW2pv6szT46d6GKQziihE",
  "key25": "4pS8vgDWsZY4ZKrfzA4nvb7VnwhXRheAijLwPTiP51wXCS8XbEQNXCBH9f3eqLnGZEisupkYPb2wiokGt7fpAFNQ",
  "key26": "4UrTiBBAjR12d7LkRmVi66eVExgeN8WuBpaUzwTHF5A6WVVULB8h21sWhvstJx3qDzs9Y25aauXxd9EuKKsXocmp",
  "key27": "4KkCvHXTozj5u1zYJePwqekn8S5DTf8w5PTDH1CC2dmKNAN139N4sR6ZGceUsjixviKEx9XffedqRqaS9NKXiXNe",
  "key28": "3R1ps8r5VyUYRYQp834iRUSGLuMYXwxQrFXxSjPCeNGQTYX91YuE8Rtbc3x11vpAtgYShJfmwzzHQHWbaeTz24Ms",
  "key29": "5XjgT8VnTRNs34eYcQmqt5gPHHM85fn8pGt4mgvZ6xh3dYm14nWhDUVPrfgXsQXdUABfsFp3A5TmvJQ64VTkz39V"
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
