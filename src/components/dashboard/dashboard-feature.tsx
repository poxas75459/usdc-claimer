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
    "4Y1rvVW976243ViC3FZmtw99xk8NTnAciAgNmbukcFPabsdB7ut9oVQaTvRXLevj7GZegnTLQRZLw8Mbi8xJcjEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HoMzsvCWYQXX4UAma5oZiPAPHJ3CoxF87W7mtzeYkbSdibCvr8VM2aGLE4thtQCWnqFC1Fetf5jaMA6dndrab8j",
  "key1": "63krzqwxaCGGcUcUi4nTbJ81emKWgnqzJxzg1W69q7LYbC26A1eCoCKdpUSx2vAErqSrEZEH3s6hQ6tPmydqrdsv",
  "key2": "2V2U28j9uJ3CqHZsGCJuA4aQVRjq1FxAFRuk1s44o5wuozA8mL1q39AtTRAsHRMBNme4sCygHDTmX8AGBodmUMxC",
  "key3": "4FjfUpPdHrSb1ycdJwLwM4uALzpXucZ9xVR1tq4N7ZhZFFA3iE2JPA5kEqcu7UTM1kEBkSuJaMYS4PPGC7bSsJAr",
  "key4": "5RXxEEBsLxCh1HgGepW7UMsdTws88G68FnRXyKTF25XafSeEY3E49zMEKpPKFhgeSx6d1r6fALtvzZg3oJBKszHo",
  "key5": "tE7FNisbtn98X6ZSXu6L5PrQmv8yPMLdFUxbYXYBBsfX7bwaDDuuo1DQtCG1g8aSRusdS4wKS83irWMNiagm23p",
  "key6": "5rGf6Q4v99hv2TdowLMXt64UmoBCxtjtpkcbAXSHvzXZ53UcJg4YNXFovvLjeGzghHGG4co98Nswesz615B6Gytf",
  "key7": "5xfA3r4kZQiSovYqPCG9JMQksD4yYGgxRUBUYc2XD7haRiLkEs5zS8y3UdonoNxpEsoKwkSBFnKSpWuTwVtm8Wnz",
  "key8": "Vm7CWT6qAFd8f82CGsrReh73Ku2L1LY63GWy1hL5gK2kpFisqFNHHvV3efkaANUNwVBb3PmypaxEsJV5XxGjPGx",
  "key9": "5n4gH95eKhTvyHQpxTxf8LBxjnhhkEE9WUSLdbQZz4oonxBRTumx48zmvbKjcZjCkboJ47QwW3PfR1V2EidkPQuG",
  "key10": "5xrmrKdE9KL29pJeYbyUMHejit7k4E74Q48dK1TW77GGUpsVZdubZAdzmasWZL4YSbNwS7JaT8W4Lb7N1CQGiZyt",
  "key11": "3rJkpNJjH4CYJiNLcmXnPSSRMfkjg7ojoFBQm7W4SwSvkMxsdJ6Ng29dbQxtaEqR8R3vAV446t4CVjrbZ6LugDxy",
  "key12": "44eqv8Q8KgSFQD2ZStt2zBBfCBqBtSoJ9vue76NvAdFAizbXQzVRAjQSfxbZaJusPUPxMgHgf3nL1y55KQQnN5Dx",
  "key13": "5iA2s7BfHczYbkmLpqRP2BiXQoAkfFQ1u9yinfM6jV3SHZsFBggciLgozMD7eoHaH9FVXaLaeD33FyVcVk8Ricj7",
  "key14": "5kxXerV2dDfF9AjcVH65sc76gehCU7Kc6NbUpvTS2aPdjZVmtkYMiocjsM18RMxCEh6hStwenqVngqVdWf4drqUS",
  "key15": "5Cjq9s5ZmXx81TWJEDNt3TFQELme8oXFnn7oRM4RGFRUq7K8Dq11JebPvp84wDvhJP6AFg5mZuMbsRtXfcZxdRs8",
  "key16": "66DajgbZ2Ty8MXXvS6ryBb6cbDxJAWaiq5WXGCNwtMwB9qEzwxBmiJAhr3Sp44yFBpDizqXSJF3a5nJstAaeMtGA",
  "key17": "67iMz11KV16vSLwDstQpMqMtT2zFBBUKcXAaZTvSrwuttLkFqARk9MRHTsZev4hw4WnUKLn1HkTpWrMqCpYquxw2",
  "key18": "97W7FSqdzpj6bQGaJ9uvSGp6Fjf3worDmkdzrEYPfMLaPSacturUqY4TfsYJweeRopBAmgN3tWRGmrUiHAQVRP3",
  "key19": "5a2c9wdwBVcf2ktXBr54HGRzgZhwCshfdhpAQaAku4qi228AhvexSUNR9A3dro9v43L7YNBJjbfmw1DBukr7RLcw",
  "key20": "3rTFJNV84yJAuAHxD9bYLsKhhNbia8z3JNAQ2Ymg8fiTh9ASkqZt2VU5R78SVsDdPDJXWeEWiJGkBVQeeEGhKFBd",
  "key21": "Cchrfu26HhhGUkKm746WvtCNLELj9yHFbH44apLJVSzUTfnrr8didHE8zPVWWYPn5ycpLoAiF5YEAHUhhaJ8gSZ",
  "key22": "3zTVev8n5ynvHLKx5vWrykZ5WwRvAKbM9MPxmGgWYn2hgRh5EnjQBBv1UuC9rez1q8zHwngAsgtAaz7ipaZ5Zuhp",
  "key23": "4mrTDi7koFqT3tXTAjFqEqSCSvvjf2mjyJcTAMaGHFWGVGi2BK5phh8BJaan6oDSkyR5Drnip5LWMH9rBzjuJ41S",
  "key24": "2Xv7fNz5bgc3iw943jMu5NrTCYKcPft6m2fVQZiari3PF24CVhmf25YDh2n2hpPcNtAXpjxAhZbKJkQpsJ4tY3cc",
  "key25": "5rdVtmYEvFU1e4Bxze61o7xMi8aBvo2f6c97Jgn9TfSZumntBXRmm1gstAMQSMJHTpi61LHZ8PAPs3gZyAb2W3cA",
  "key26": "4c6DxQs66MwMggaWufMufED6tTAZRYE8NZwELhunq23eYmdLkqf7oBhQvzmfsEyaJck2xFDxUVbVR6xtfPYbd1w7",
  "key27": "5PnFvoQ1o6PQYNvCiRDPfkwdnrcNDJoToFUTAgdr7QAQ2d94Dud4xXqgf5MBmZGgFMYAvVr9jC3WWEM5QpdfZkSg",
  "key28": "2pNtgFfiZEnEANKwckG33jKByhxbV9kGn2PumjsA5gp6YzVvW1okrhjvGhCCKqyTnxLejdiNr5ur7Lbh3AUr5UVL"
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
