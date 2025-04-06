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
    "4AcLHn1YhccDWDk7auDxx6XwAfCkfD6Cf2jvrEgAecsrqTduQDgcnGDyRjaD8phdAWTmG68fY8yFpyYGjArBWpEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y9K8jwQYi6wGDRDmQNQCGMyeSNonc9zz9ZPmiL7Bgy7iwi2SWTSMaXWxFiTkEkXUDSRvP4vQ12UTK9H92HHto54",
  "key1": "3aeha1WohBRuhQ8SfezxjyiqYwCFBwau7a8mKVUz4HrVyAigsz5h3HQe88GLEV9EbBZ5jibTxMMQ6CHH9ZAgy3AN",
  "key2": "v4yeLP4xt5EouZY3G97kwWc9aGLoqQUsAhvSdjTLJenkpghDk7H63iEqY8Azh3CbhhehmJaZpy1i27DvoNmtK39",
  "key3": "3TJXc84Hj1NRFFq8speHgkVCcAPiXr9aYEwfnzTpwuxFKnGvXkscGkbhFhAPfGJ7YffGtnhb2hvtwP83D9tCxa8i",
  "key4": "2UwCQuBtyouvdE3rfSjAmnsikEorHHAQ4izFUCTwBDVYo4BCEnsV6u6QnDZ81Hchv8arcbn6ecNmndYxdhSAGs8L",
  "key5": "2u7QP2EURQyjhNwdTvGEKDKP2P9yEqbgM5knnMTp7b6qG4cDH7vLTB492t2Q7qrChC9oHetZAiZutnPMA4ET8Hz5",
  "key6": "8HYs3nXRRX69paeCzjHsydzqEpcVn6PkXJVpwiK1gFwSHY2mJiGhVU1EQqnArUpc3AYVuRsMNRkfmmRvdjTy94r",
  "key7": "51kg5cR1TUW26jnFgPFjKQ9VgxFPMxYAeYQWoy15TJr1c64M7BBKqrZQedB1QYeTEPQGtamacNDZZH7X53uwyt95",
  "key8": "2QQostpms87jVqDbAHfzEFp6M92LWTS9NRniRJCxgV9sRNF66WbZ3DEZierVuHXdaj6guEAruiAJVQXY2TkGkNRN",
  "key9": "weysF3mGZQdSLV44Xd6CwKNBHCohNkcwYUPQhq2EDyisubdHSh99FmSGNa1qo13AhG37fB7PcT3sECxXxCwj4Vs",
  "key10": "5eiC8fjaqmiA4rh83E24uX56cxcxSnxkpQbZnhAPMo3VDBwhphGXz2hpgCPJ5d5Htz1vpCvvNtRrF7Tystq5FX3z",
  "key11": "2VnPuQJJXAv7oq1t6tABFiiQkjXAXcEMuQmH25YTacREQ4iur86aWg123aqwEwvkctkLEbPGW9zNiFMznWmchQrX",
  "key12": "5UFAiGyMUcxpBZqgKqTzUzeWV32rj6zahWq7ew8qVrNPiQE7K9vEXYHCbRHekuSho9aPHYBKjvrxAsU9jertWPEB",
  "key13": "zipvRrxCBStmnJzZCRkMNHVdtzxUYs8xJiub14VcfJh1Df578YEmsbduvKZZErgCqdPAXNjpAod74WcZ9mRkkST",
  "key14": "3bN1RzM3oisxnRQKGiM8mUUNTf6YJybiJdYqA11KGbztmXLdxo2MthzV5q1FkrvePtEGah6FP7mH6hHcdMUbhTEV",
  "key15": "5xS2VXmL6o8ShFooGaFehvFKuMUP2SMHFioApX46VAgNR8Kjt1xkNEKMYnnVywMPYEi2LXiBbgVmUCZK8eP1wf1j",
  "key16": "5pwc3Chp4B95tnKwhpHbfA5YNkP5BgRufEvSwiXvsXhgqAZgGzVYAzhvRwLy2yi2vr7d5JGKDc3Ncrwjmf5FSpYY",
  "key17": "3NzhXFwCeeoXbfhfMBbskY143V3nQgrA7VCJu2ss5LNm73HkA1egTQ7wLS17XVvvHm34MR9146ob8bCVzuuEgta",
  "key18": "vup4LSX6zkowtbFRhb9r7Q7Zqk2ioqu3vCwWRZ5KmGCvqFhjsNaDcMSWX25wRrF6Q1eMmTyxXFafbyLnyZfB741",
  "key19": "uy5D7cCbJDb4QKKg1jB1E6h7oWgMhZSnhfMH9quzCBoC4522QWBMdhzyHUZBvoWRPKkGbFxeW7aNfqkA4GGvDcd",
  "key20": "LQtn8feoGmbjzXH6zX4VrPwfcC3BkdKp8qVU1nkJQUtvVAw7bGzQmXYnrLcdQGYxtGV3RcDrnYxnZBfKpUucLRQ",
  "key21": "48X8Pdxk6p5j7DkkUGCqNCncdiCLknassaP36nQQDXgXcND6MdhhNjLm3wQ1bW9NWnifRSHhkF9kRGcFFsrtdbMZ",
  "key22": "4JnsEKUwRZEhE2ZfoVsZGSNdPtkwXqz52ssSqDKhXbufvtFdZ6URnnjmm2f8oBVfM54b4F9xuppNEHmZduh3aXpJ",
  "key23": "3Lxm17E9EafRUc4zNxN7h9867PvELuvYTqKZU2GzbdPx12ndbfodU7K72QZHi7t9W1U2ci6yRVymTUkN9CELzuT6",
  "key24": "bhAmCaQMnLgKWxKs8wHWaLrbKJ9gxa5K3t94JihPQtXbh5QiJHY2VqX8hV8pQSj6BMmXV1ZgAJRCytxT4eVTrNM",
  "key25": "2Ef3joySaDzrMuUtSGzXcUJt46DraVHCi8ftenv2cjoRfE7TqJmCgtWUR5Wfm22C2JBghWf5fy64ErLGuwf8yQ6v",
  "key26": "KE2PAZc2eNN1wTdoPeNBsY7iCCh9qXjouwiYju79booqnwiUe12PJXJRfuybyuKZb92ZH1h1NfvfmGwcSNAxWwc",
  "key27": "2U6G279AcdYNC9stDkrPXeFswQ4MBU7USHH5D8qShzcAFdntsiJQgYfPGFmsUYi8D6HA7CcHdQ66gZATaPVT52CJ",
  "key28": "24nXLEmv7VrkJHsSuuQnLmh7wkkGioE1URoMfzrUTbEhnVTfBf93VdnXjBLhxhNn3cBHmgY4qRNNU64ZTCdMhh93",
  "key29": "3ZRZmAu8BG2dmeXjk7vSWTq4DPkb8CUJVyLyGLfnqAmyYinfVtQWroL2v7ECcaxZSWpj93rsyfpuQWJ9Jq9auVt6",
  "key30": "37toBQWYzcAWBmiDyEnujmaLyCyqUoSKyjzygmB6TYNmudd22osAc21ov55P2DMdCaKJgLUBVst8yz2GqZTqkjNZ",
  "key31": "3MruqPsv33stsyrvhSKK6JNybVqLcBrmeE2AorNESX9HAsJPzwmkmgW4F6yyJJLWXThVbCWcUycVpMV2wCxDrBTS",
  "key32": "4JtSaTzrikQ3ub9EXLUjNec2TFZ2jNqNTfEuaPdTEQrRH29B9XrfPRcfuARwVZkRmtTWyRa8UEysZnyNUozShXU7",
  "key33": "5ASWd4m2sPZWrcfBDwWqngsLwfY6SyhPdj5wagFa1o98FGuaaVgpn53W5jPaBbL1cG29dU3ivq5ThRKQAywh9Woe"
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
