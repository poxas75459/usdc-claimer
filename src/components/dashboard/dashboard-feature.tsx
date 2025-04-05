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
    "3w31zgmmJJJXHhhhU9chBUecvMW9k8mjaethsjH8Cg9kkm92zbANCNJYnPTdo9RBMKw5bHV3FjxPy4kHZSf7SwXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LdYaex5jVSmP4K81ZdLXQqWWBRJshNHH4dUiEuPGFNxdHSyTNznWjyBvFrtPZiUpKMEHWXKG2ANcthWk8P9rErr",
  "key1": "3N3gmJMwbkRrbBfZRgyjxk1xeojPeJDPTiUEsdfkBt3HVHNAARxCQgWmk7fBPKev4do785mt7sQypsSCnF71kipY",
  "key2": "2osYjx53VR5JEsCRuvDhC8CqAbnSiK4P3Du7mPQa8py1BS9V6e5W5n7ARSD6kLVBJbU2nz6SRZPaxLjtZzdSToDc",
  "key3": "CGFy2n1a8Ss73v4sDKeyfQNqMk1REhuB3mEES2EBRFCtnV4XqJzkHgMt7vnYpXfVbi1seRm5rJqZowYG6EPt3Jm",
  "key4": "3h5EouG7nb4TCmSQVCPnPaTJrvLxFgUUc4oDgLoL669sdcNt79TqYtF1vgHNv3g4XBVq3Xu659kFRSkt1ezFMkht",
  "key5": "27ncnKbwiEyoPzZx6FPpT4ZhMdn2HJCNkwmhFBAZW5qmsnLb5FF6NXWGpJkP192mEhtnUs7cvDaSX8cKWkjBSCy1",
  "key6": "2p8coFQoYDckXyiVLHMnoRJdZLDqcHfZpW7ktHN92agyiLZvidLQVYeDHatxh3bh1JaVuF8SuSh9hHWrhk2DzUWL",
  "key7": "48MZ7AP4aPk1rPyFrv3YHajNrz3bcxqxTJX4wYSmiTFnt8roLubbFx8FHqmG71nZpi7AMH6j53nzfFpdnTcuounG",
  "key8": "4GEvXt3GD2jJRf6T8LCRZjhMvoiYEWjtZPeM82NH9WWiRtr2t7wGCkLhMi7sdGq6RfvRAbyjxJy1vwWaLk5CWZfK",
  "key9": "5MBPtCfSj6cTmxc2wuCcaimTzdjrLHYo1CTipNcjhLA6ehNPMCmsbLSaJsuKGwDrrQe5cCG8ke1AFqto2cxt5PKo",
  "key10": "2v6SVUYL3ios7h8rbg7JKcZKXoZPaQvoY3c5utRDnmZvVWTfgKiJTEcbnq5nDjcfL5GiAgwdoBsGUVuPNGVdx3Dt",
  "key11": "2eFAQnbANPeru85h9rLKBkUUpAEq5k9Xt4aiS1arVCPMUFbh24F92JBqjPVzn4h1tbTwoPQhP61kJuUtzFKcZucQ",
  "key12": "5xDfbxMt2mBcq5LYQCSwUnhNFwCC4Cx6dZDQ9N6rovy2dBkwjPqcZfRn2VHtzLrHtUVb3kdsGsL5itmA9WVB8tZm",
  "key13": "4Sh4Bq4pKdVDsCRQqi342KRPWbc9GZDxeUMyLLDguvBARDGrnhNS1tNQ619NATMx7ghgSD3BZWApZSf9SFJSPCkR",
  "key14": "4meo5KxfdSrCcuh9WrWJkZ8Dq2WcwAAFs5s1eQatgBUgh38Lu3oL9m9BqisBgcCLcvBgcbNnny8dWgtEVZih37n8",
  "key15": "3Yhts5PXsXFrvz3vMrVpHW6JpCDuGu53S8tJ82gHbCUhWayF5DwYzU36ecRgqcfecjq1FvTyvB3aqfvsYRPFGCq9",
  "key16": "4EsrEz4pGGiY21Wc5GXG8Jdu3KbcF96qPHcirHL1oPkdxR8pw99LtsN8jBcfMU8E2Tq1hTZJ5eDpsvvpRZxXv3HZ",
  "key17": "2YXzcwZHmaTQNr8UfxSGdGbwK3ntjviK5C3vMqYt5SbCKzgdKAKy7PkKJb5XPtgzwEaun86C5HtKuyu8nn4LH1t2",
  "key18": "3z8aj7JzWC7kfycJhVAaEvPWsrVck7RTGVGMS536j592XPBU1uuCWFfSfHg2SS2o2VZThnekLJHEgXb6JHQfcTZ5",
  "key19": "4ERP1JX5HhZhVMfz7WtUWmLuR4YQYTEej2QgrZef8e2AUQLDwJYdYGfN1mzePgMN9wGMkBXEL3bQY5Xk6vfG3xcV",
  "key20": "265waKR7gphoyrQLXBJPWXE7uBnyqb5PVubGUVktreZ1qprKgEebjgWju82QB5V52Zm6kTAL4puoqfP7EwKtyoKW",
  "key21": "5j6QMhQ1H8BgCN2ympb9PKUXPrVEC6neXjc49S68297WQKxNFsdf37cJUsZJnz1LSuaTzRua4psp1aH8yp9kMf2g",
  "key22": "5fXsJV4Un2mEsMFj9qcy8gBmSypr6NFcmGkiEfbmR5dSzDLmJcY8tbaFfhTMNrtYGEwfnPnYMWFPc4gUscaAmAUR",
  "key23": "51hwybY38bZhyKCxqw5fzRXZLRzubsSQP9MuGg7PDofD6Tk5Qsm9N2C9wDnfuFSZQe9ddVgvLzoqb2eww1vv36oU",
  "key24": "2V83K2pyaYJ5RXnLC1P463KBgacCxUaSDyLPUmQkZzXNUvCMtEt6TFyfnu3e8W4JxeLWESgt1YmTjXnutxxsTKTw",
  "key25": "D2KHWv4XJF5Xi3hT9UFL9foJ6uS6DveJSsD8Qv7oa6eLUXakzM7iPpvjHcW7uSSKdNQPJqoYL1Zj1YfE3ZuLPcp",
  "key26": "5FQi3fMhXct9R7X14y9YKNz62FvoGbGTaSdgJWQoJLG7CbwmX1hhKQdGP14Q27YqNt3tMMwJMdVVJXEeeKVewacv",
  "key27": "29hfxMvyvqmXeE7ueqUi9hYJSDGBbjf1KB4EGebawkFqDypSA6KRCG3MNTpZpXwaY7uWugFaxDXvz2jBeF2XaV5B",
  "key28": "3QKquxrp3B6H1fkESNujFuttBoULY6ewZ3sUS8Zx59yAbY5ZxNvAsgCbvD4aV87xP34FxtRfHHSa4oEQLPdY2czz",
  "key29": "au46RDCmbAoRe7xX8NDfq4XwCKEU6Nm7TMCAuLWvyYRp3DzfrUx8G68tf9yzMFwkgTMHrNPomcmgHV9WqwFfb2W",
  "key30": "Js68f6WQHeaAbDMg7Kfeu3xVXZ5yha3wG6Ho3rpxQoYHspZFFmtMSUWVnChVmUJZ6rKXFq4mwi1WVU61y3h6txp"
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
