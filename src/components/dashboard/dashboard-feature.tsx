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
    "Mf87vQx1PPaqwe2NtxZhUy5bNvzGesrZ5BDFHtT3SKVyz8mxqFpf1DQMRVevjqEHrCY4cg4Q7WXWdNGwKXqscqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7uaU2WRWxXBSUKmnCVyfgrfK8myT5kjZBaLaEgTwzd9Rv9UTeJbYQzQGdwTiJsFqRqh5Xc5yzg1W5RAq8ojH9qM",
  "key1": "sw8nXmZkzue7HYVxFRRNdwgHRy3yNFboheeWDmu67ynf28v3FK92S9iXMDkvWj73brMT2NW94x3yLsUqsi4LgMn",
  "key2": "4eaMmRe3wzUf3mWNgYWr7FPbbJCSk7EUgMgL8cRvYGZg8o2y68BHwPpA95WsZzyAnMsU78q9VVeVJeUQC1Ui6VTL",
  "key3": "5FjSxkSUK2MGqPaTj5okRr53S3xC9MS5D6wkpm9kTxMq6NynRoKGiSsVEMtQqSxEVUYE6hezc6fo7LG9wCiWPwN6",
  "key4": "cEUbvPqDCze4Nk1d4tAn57NjCnPoV4STR3nrzbMhUhtE6fDzm7bbtj3Zj1eJYaHHJEsw6MSL41PuxeZeJFi4bc3",
  "key5": "9u3ic7RmkUXpLNdPATC7wuKvuYrWCq5nsCBKh8ddVxspdfuJxhraB3xVGUqYNC2geN6T9pHM56wacgJdVi9Qvcx",
  "key6": "5JGpaMrM9vsJaqZNNsJ1y2JjTrpc8ob6hfUqHVJQX3GNDmT8w1o5iAShNqR5u82oFN79tuipWMc2qXLgEVxvERcy",
  "key7": "4qeyKepNYNxEgAUpwZcjbpMxJQNC5FCiyb1yXmqdKip34o3UvPiBSQ59zEHT77XxyjNJ4XqUtMYJbDfidxCsu57y",
  "key8": "4wxQ7cNGzjmkZaBZPnuyLFiYLHc67mBurQJKizVpAGHKtMt4yc7bkpSsN3dvxGZTShJbrv2fofR158fmapWetGx",
  "key9": "3A8gG8surZtmZDT7Ewcc9EiEzzPGthopzAr3hpWaXhQ55vp8gxXzuwc6pNWS7cnQJcJmpXjSbKEcweobfvmArNQ2",
  "key10": "12AF3NjeYcsJREHcasQDdhCYgiAxYdC682PQuQp3CmEpFhngxkCKMPxG6Wv7ae1gSUBtMygBzMPt4d26qG5eT7z2",
  "key11": "4puJmeDR5BzXPUcpdvJ9mUsFTNNCVrnwaPSP2TXyaqgTAbEZEqz62Lzw2HfmXdRgHC4iz7pimBjbzXRWjE6ihg2H",
  "key12": "NbJomtYNh5ZQb9rNLxLcE4gxtmnBqG4wHBMkZnHac2FXW7zbjWsZt56bQaU3UHNx6buNwkQKy9wmkVrjKUMGoDw",
  "key13": "45T54KFgGGeqByYYificecvHV9GT58XQP59wPQZuCSAtzECQAVoRjthApRY9VtwPiSB6zydUyMGuTVW9VXraH9BH",
  "key14": "374GYKXxHpXX6VSmAUYygrCyHF62gYtNYy9TYWTmJR6HLWBE1BSs1ihiPwjTGEjcQoTdtbCDLSN1R2DPpt8ksQ5K",
  "key15": "EP7C2gH7WeSsoFSZXHQfosdPbemtasKmBv63d37G5vwv5auH6eu5rinNCVUhH92PyPe3CdyLQAjTje28r6wetFv",
  "key16": "29MMBCaStpNTU6NfZX92fpSQMcabd4imyoD3GpVfb254MMxh6LSLAXa3pMHGXcNVYm1dojRuEAXgmb7QY8WZBkKh",
  "key17": "4n6v5JSrjsGPGPrBXKzrJjuWPQDs8diRoyDbMdprcw97ny4QcbEeBiF5Fskh6KLzDMksD2nSjW5MBWTrzkD2KtqU",
  "key18": "2w6VRWE889GcGxo8dMr7fBhSS4F4HnwDBPygt4dn82g9Yk67xUmJeVXcVG6Kxz1JFaP9BcGDehxFSH84scThLBKW",
  "key19": "5t9PS6po6EP9Fy9gMvBXeQLuA98s2AEh95ZU7t5WzzP8LSr6wf49Xmt7Hcn7H3J4AEg7t87FehRf4WJwNYXQiTEZ",
  "key20": "61V5bb1hnxy2qctGsU9uRF1dHW2XADMm7bLeYNYDrQkzuiG3gSu963UfPgusNArAahcg2xVJdZ3SJj9xgXRv7WEz",
  "key21": "5JmHtcCGWgJ6z3R3rx4f1bZY2FbcWK6HhmEivxskncRzKvsMyRyv5p1jh9Vc5wbZk6iRDRMD3TxDUbB3CgboLS1p",
  "key22": "23yz2b6vmsmZBWSw2zys5MUNZvbRTET2T2uVWto6rd8kAYvYoHh3ZY55k1YH6eU6a2uFaERZ65EXqwmDoLNAKVk6",
  "key23": "ZXW7dP4Pz4w2Qv9XuciyVZ3UkHHvywFyy5Q6rS3o22LsyqmST9j4ach93JR2Lb9Lwy2zz81v8ZUmWN2euchi4b4",
  "key24": "53VdusTzU9c5qY6JebmNe5maXEiGNzdaCBp2rjTxd5DyWeqMJsrpAM6ULzN973UyT3fbQ7CrtL388uCiMx1jyk24",
  "key25": "4eDvbrgPQBSu1yB3hYDbwN9aBF5cs7JNCQq775Swn89obc7wGr8bicJHjbGkPfCSh5YF6U8dh1Kq8GvbuSfSCNmY",
  "key26": "CE9ShukchMG98JzMEdtDGxMvZnisfWVumCAP8LtvkScVHuocardQYYe3W3xiWNt43SSarBtZn13EnbzTZyTJkCH",
  "key27": "2qnPe7SvgPZfzgc6v126cDRTGs7nDjotJm7gkwUkjXR6GrYv2dyMcPYmiQuZi5nCVEcwn9fK2sfq9HDqmfKbVYMx",
  "key28": "324qBFQdTrxXi3MY4wAmhwUfwufrcsjhHvGhpH6APzGjnABqtQVhrY95qyhvur4TfwMxFU5kmiFRPESA12RpXETf",
  "key29": "49i4EvmyCwMDurHem9oeXTYF4UwzTt86313kJyMzEzjVxaqaM448CwXvVjYhhxdUuaY6HGQdc3heg9WL5LUg1oGq",
  "key30": "3upXLjqJRfNftfUcNc8FWp9NYHuH1HRWZPXYuNoqQmtERraSigx4HRsui8v46AWn1uH117CVqhFa2trihwcN3DoU",
  "key31": "GB5tRNkgF4AwSHbWYndpn2zA5x3LDhtH9Mm5YV4ViDGXn6XiPzrhSfooUGC7oYA1KPYyRVQQpGF6yb4SZrUfZZy",
  "key32": "5MC7T78NY3kfcwcipSyRXB2PWnUrmox9pkFFbCx9WyEiUUUuuLgFhti1jmrXBJ7B5fbwQyYfeKiayVqu8QaEi4mf",
  "key33": "5o2XTHuxb2G8TfjtisXvN24Vg5sRUHt55F66vKKMpaoR92n9FQSk4QUSM7jKe5Ga5eXsWR5HGcrKhb5t2NUZbwii",
  "key34": "4WfDSGyp9rKSM8bsDXTNis2KgyonTKyFNAtEXk7QZu36a6xkKKFPgNL29BL3E9ZZ5kwP8Siw4mmTvyYQrL79Btmp",
  "key35": "25YAVYDyHCyvqfqkdyL1syLBW92P2CSFyyJgcGW6az4F3znE8EzcDnCGQ56bVwEzM1yMqyrmkrPJeTcmMhceKBMp",
  "key36": "3qshDtsttuMtEyHVQ2kD9Su4vGYiQfvtqtJ5YkFAPq2wusR3kenLEzLhz5mP2G5W1k7WpgpR3CL1EcKd7dhUPTY9",
  "key37": "4iXscBv1ETkusupuUe6bAXj4BSi2d2aT5fdiFyeqJDq8jVumW4dwQYWq9cqHD4NPVJwjgxbBeAe7upQyaN4J781s",
  "key38": "4SG3nr1YRHZu4nb2av8zktCYeTbYHjvi3PLyHipngH2fZWD9PWnHwwKigQNX9fnXRZKGBSvopkgRwVUm9tYaEEnQ",
  "key39": "53JqvPHWbahmdgW7voGJDy4TKkmopQA8tCFZzEEJb5HRfqsWyjPSQDnaThGBt72d6YDhD19eA4xtk5dm3tKUnB8Q",
  "key40": "38T5Riv87X85BP3qpY7daPeku4ECrTrfRRgQNnwWXWKchqfxdhNhrvbCmq7vyWAscmKsd738drB9qYo6jAGyjiv2",
  "key41": "3fsbKESq5c4hNwHLsfMCfMZRvzfCz7cwoEuHV1MqTYiymazBqb1FXN2z44j4otytFzcNvvjQpQL2rYNdC3oHzwHY",
  "key42": "3hJWioBgvaPBYk1S3nDPmVPTV111FvVGLFB14X6dJYKgKjfEVtk2W8D9tFhmVgkBWc6oU9qrwk99TgjYY6BWHkWp"
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
