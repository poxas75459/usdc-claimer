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
    "66FVNAAzogij4hCT6Z44gXNxoaDKCjQgQYy9i5C2SS75cWVwwoA8LS6MG7kxZxXwXFM13RuMgJDkJ1qAKY68cgi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24mdhCK2nibXbG7F1sTKJTZ8W6x2xT4heNZVf13M4QsPXv3yZDc6Lk3eYDkUGoZcdpidMGtZ3LLbp5CY7ivUAnDX",
  "key1": "261aytv9cU4cfmdd3vRcJ9VGoV6o1cAkDL4AKnwzndekhjFaVwRBBXGjxzd6MbbVQtAsAQ19CTSMkcq2DS53uFc7",
  "key2": "ZxzYHLp623rL5QQPNmjVwtJCQsrxx26J4NnbGdr4NK741uijJ75JMjvhtWZZvpqRLqcvvNUP7LGayZcEYAAyFfp",
  "key3": "5sdmArTfkMjLZaxE1NqJqBmUPnesGoCc9E22eHJhCVxFCCmcCzngpN3thy29b5ujXvDDAMtvceozGCEgiaa4RGXu",
  "key4": "gaoMJ5ta9AaQk4ruXSiSGZMZuZULchsTA8aMdn7MKYSEVu4eygT7qoFofQBKfDGjCu6u8FwFppUJ4oFMdjrkcQZ",
  "key5": "5nKG9XQmrCeZkFLsLX1kwThHv9qjoSbo7ndrC24qiNM5T62QmJLRJEMTwZQmdhBYCcNGSgtjcayc7vm5eQcRhNq4",
  "key6": "5q5zoZ1SK4bKUgTYCm3xPmLUtUKKwZoVeAxP8ZVp6wWWoNJPEdQ26AsgBTKJ5euBsVBHc4PhQqiMrLJbe26tX3kL",
  "key7": "4JvqZ8VJq76eoJEobixzmak9Gr9wyV3cRnLoySuq6LezjqBPaU144G7fxFGQ19AEFvTceJyHXVRbk5n4xhxHxfod",
  "key8": "4r9kFcRJgsGpEu3m4HvoFQnrio9cuZRurwDbYpqaiswoTAa6vepycNEABMGnYVD6BwYqiHDy4HDCZqZZg9yvL5zv",
  "key9": "5FkY8kFr3K7zzQFyEY2ixsPTSKk5Lxetsc6Lgo48Mhs8TL39Xif58DpSnk55UGtgUW28Z718YzK54YQjZER9KSzR",
  "key10": "3oA2RPt2P4k16RgmXj5pELD3V95kXQWU1sVhwnqXRvungB9wk4y1XFEJCW4McrYahfAqAYNwYwqAy2TLVh5PHMho",
  "key11": "49e83GJksfZAWQAEK1jqb3HwDWqvXuMM4vXfkSYK7ZQFZ9JUYi7ocuzXNXA1QgFSBDs68J5sbmxajNjVPKHpUJbt",
  "key12": "SGd4dVaeQ7RtiNJN8iRAFbyRmP8ZXpAk5fp1tnRr2sAJrFC4KcnJ8kgWmgmnj1fTRJ528TkdirxbpwoM3z37FAP",
  "key13": "PY8W9tFe2CAejqXm8iWegCgmnkfbMA7R9U9CXNyV4LejvwPXFHLstvDLABywrU3cgoiLLPTX2Q176R4rQENZPLx",
  "key14": "QHQfDRJFdMi1NXng73sgU2hu8hmwsWE73NCCx2syx8Kmr6mof28kk4cVr2Y51JBps5QPRsZAxbyRCxcETg6iDXw",
  "key15": "2AzC3BweeijnALwsoQnhzxQqx1H78qrFqwCg7D4PirXDAGMQYCP5AXSHknUkDdvdZethDV8tN44FoiNuyV5SvwzM",
  "key16": "4nLhbraA897TSrHsyTAmmnVHaxF1jxRQGxH8Ug2wuSjRVzxJAhdn9aMszv3QmbcUR1pCkwgjgCEMFwSQA3x2ndEV",
  "key17": "EWCNtkgUUj7zjYg2vr7vjSJtMZmu3Mytf73h776RyDXFTkgR4Er2JpNBo4YLWVgddqf4BFHZg6hVFKC44boyHuE",
  "key18": "35mHsEq3AXTY1ELiZZsBjE2M55h5rSg4qQ4hoawxKJV1zL9ZbudLN2CjFJJYy5nhhYTdD24sGdiyqxZpEET9MeK1",
  "key19": "2X6HLMty9F2dbGuJY9UhfYcGPEHNADEyMnPUqrh4SWvWNTd2tdAoSKobYxSz6vhfXCNNNS3kcgVPXWLyJ6fD8wvX",
  "key20": "4kpW4vv6GHjxz3h8NPr9SFLMf65HZzKQSP6cF444aiUEfgYC26doyLkgVzGDhoGB2qU3UEAKxnTE78Am9A9e85DM",
  "key21": "4yMtvaNRJetCBR7eCXccCwQoGjnNb8555R8EzBUGjygsaR3644W97mEqphkduJvXy1apTJLRURA8MCGtRvV54FZb",
  "key22": "5k6V7fo7pVmLuD9Fo2AkfXxAVpMeXm8dkdosn81oSMJ7CjiAZkriBvD1mbdbwvfQX1biWmfLDLU6nVu9bmnkvq82",
  "key23": "8MkHK37JZMiHNiHDz7McbiGxr4SfCnwfBDtgLFYvYgCtTAcZLaiasAKP4bHnDjs9VpfDPEJ8DDeioKcE6pHj3ft",
  "key24": "281Mtj37Ws61c3fH7C6mBWpCaf4e1fKwdisg1wHLujMDr1XiqBvjV8Tdob6ajq9hjuGq28jjDc9r4Ngw7WWKKBrw",
  "key25": "QATa2gP7JyNGYr7yAXqn63zAYuJwrS18voYrvRoAV1WrXW2hH3BCbvsm9ptfxM7GJ4xA6yjPpwJ9AN5eDvAeA6u",
  "key26": "5cQdernpPbxUHvCm9f9fHx6EgmeJVHAN41nQnXQLmxKi1JoaSMKTiU6N4f3yUpxcTart9ea9oCkpD1HDDXN6cYmW",
  "key27": "37J8EPiBu9EF7PB986h6kW6N5LetAerW7uF4zngjhrYjb8YTJ12ypTQfRVPvWKdXi9cDMm1dAEWfSRejUffiJWZR",
  "key28": "64ZDwB2G6mewcwTuiXNmiwMBnQuAGa2RQivb8U3wXCDojoPQKrFi9K7FEGq9eEyeMywzX5fs59ZfSsJPjdYVMwPP",
  "key29": "21rLuzPNhtcPRMWp4YkZTzPSP6wCWGjgunbja4ESihWcto72uRG5SDUbnxua4qd9NaqqNzgHmX3rxHewkh6eW89q",
  "key30": "3FyRBM1cpPhXj1XAWmgdy32WYDfjXA54zUmsQATR8eMaMosjNWhapsGzhpEtpep5AXerXSGAP23vUYmYu1bVzJin",
  "key31": "3jC9EvoTbi2Q1MgJftk1ey9hiZmuaBcw5ZYsWRe94HXtNm9XjWJhRmHwDMe19pEYQ52AMTVxxauKHnYgoRfUHE5x",
  "key32": "rE2zAK7BaTU8oBWh3du27bRyU5FftbmyEZ9JESfPcVSfPSVTtuMFV1ZWgjfRVHo5dx6rnwGXgbxoq57jdR8vwB6",
  "key33": "5sWtgLmqeK2pDvLAEnBSJ2uyvcufxYiTKt8pajBmFN9tYiDzmbK5958caVRDDMHhuUCV9N9BKS8XfTe45CAcrYLu",
  "key34": "5WDjkrX5kx8DvfGAo353XoYcf7XkA9oGpyUvNgZ3GCXNaXGoScEyy3M4s1m4sXNvXuzhPfX4iGAGVTVQpayPqvXg",
  "key35": "33gaSPF5LjbHk5eUcXRo6Nzx8jYZ61P1a5USryknsGF49tAqw1gwnu8HyhvhVVQckGU18yY6nBbssX97BDQCFc7d"
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
