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
    "pmdx2Fgz22Eo1zM4nijs2rh9z8JF46gWGrmkjoNGiE8voCcp28TwfczGKHy2FmuomFrt4ab2KFrGCugi9MHJD7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gMfvFxeWnwthfTcaupvNz2pqr4AqcAJL1nGcCbbTpYJ7MJe7JwKQeVcm75RWywRHsD9b6eApdCb7f86WCD6ncW6",
  "key1": "37TWzeeCLVK1ZA9DrS1YeZGkiZFdZLZ9w3D1tR8QT1qCV5MLtd3PpTGXmi5XdhcQ7fhxjxCSBDEuWhs3hMiHfN3b",
  "key2": "4nuYiEMFuSFK5KNeUyqXAmo8Le6QbptmJUx4unu3UeDbUSN166SD3dv14WkRX15vySZSkm26GRA9x7qcYUgMZzQx",
  "key3": "4BmVSkP379yESo2KWvCRgAMBnTrQsQMfpnFgf7t8wFwFj8ThYknc8KXQjBBqhby2vwA4rkzsRUWqEziRdNafFG43",
  "key4": "HzotTx5vtahifp1oPmQY5FEEb6x8pcdxc5zW4sWwNHxbRe8j2BesfYN5ULJAYRp3E1kvBpmMTgvfCuZcMHYhFJp",
  "key5": "EigzpLa8QTfqpW2CLrYXFLx2sYa1Uwj75i1FHAgvCCi7eKdUqJfrjqhCCAF1RT7q9w9aJJETdQDWsr2HrjqPXyD",
  "key6": "4FXUpns9fnBwQ6EgeMn6UhBXMZG3qxVeecWnnUZYnVSpzfRERQxjFZMoGmee9ygtrQtqcTs9SdZPszbKzgYqguWG",
  "key7": "5PMAQixE6uqzZuX8YucX6vzEEhmvt4RXJyQvxPyXWdTBrrzuDUq293Snn36JqZjrCKTHWn5A9CJH39adXpDPMisk",
  "key8": "31U9LDaRBVfznCQJPqqAwqwSRi29qHuGXkaojS6ydqpaxWjd6KgY47DBHVsqpCCeApQrx1Wc4rRG4rWko2eZyJ3S",
  "key9": "3xz1iMh1EjViuX4JkDMZKaU8DKNh3JnRw4TLFCRhGbgykuT9Wj6NDFwrybh8jUgHFx7XPrmspTrQ8J6RtfakN6FK",
  "key10": "3EDbV6s4x9Kp4qcUoE8xpt3A8XkvUDdKZYxGouNEcr5RR5CPmmP1X6cv91GdRwkmhbLeDFmsAt1c8VETndWbhBG6",
  "key11": "1N5By3jgHXCWAKsaFCEZqxcdht6udEDP9ttrPDnJRPHSTLbaHU7t2Mm6XziDeFRW9MYjKyPxHjkz7NoaKWrxtvC",
  "key12": "3FPz3ZyBufeKT3JCLo5ynwS7ByKp7LTc2JLQBdHxFHSRYBF4LpmBo9ZmgTGNmcfarNFHC7FxLRExJdSRXSdvH8fS",
  "key13": "5ubMd2iUnx6Qw5uTxYR9N6bvXT5dBdNbxSLTh1Kc4WraNXPwwESwgCsqcb4tTgX3UeBRAoJj9FbnbqrfFSZRNB71",
  "key14": "4JhiVDD17XcxcNPv64B8Y5ebQp4CcbUDXyYTBMEE93oPaYd9SFdeMr6MN5XR3vdteBcew7C2m534tmwX788hwDxH",
  "key15": "5rNo36eynNdMePYrgQuhbouubPdL7ZAcjhqVWw1G8fgAPCahayNwpfBfDq5CZPbqbEwhENbnqAuyQpXSzh5PUDtK",
  "key16": "4srUs1pmT23kkMggyETFzornpHSM48T8At3ZKsmehp3ZXtrcAN4f2xu3rCuFjjkV8FiRDnTSthmJottXZjvhxFbD",
  "key17": "4cHnT7RQBWAYTKzYWLLvQqqbPKHvMjToSG6cxr7ehmky3umruxedTvYXguq6UzqXRkjrGLLf3mwbQyG9Qk4Ts9Ld",
  "key18": "5TDz5wDYH3AW8ztTP7HEfkvb4i48ADa4AdPgqYeNANyMwRbsMgNB48AUn4cwEuA6on7GRVn5jT7HukYzaBzSGyUT",
  "key19": "5qcJkuteyw1YNvdj9jm88rJPiesV5pmLgoXTTJ4sd4YWY1ssHeJu45LrrSzP8WDBTir9Q6mdntc1a1xZdDnu64wL",
  "key20": "2ZaEiUek4VUtBk4Ptxcf6bCU1pcebzzz3YsWJZeP7upDLoujJ3tCgau3Bytk7iG6HUk4VXy9kUE9ynmnAkQr8KMd",
  "key21": "4tsjXLokuzwUEnuMUpdZc5gEaJ3PChnZdbwrZcdeoUHvZaV9RvcFcahdmoNFifRyYETUtYKmuWbxi9SWXtLfVDj4",
  "key22": "4Qcv5DNatdFGDvHNmoDcsTFfejaLBSWND1pYcYiEFKnEvVJKLZrehojRNS1NXrBECwLpqSeiTBAKmbKzT4rFN6F5",
  "key23": "3wK66dcePdqzEbi51iwsK1KqESZjhjed4ERHfsXQ2c8o3maGDTaiYhf7jQQPeXkinbfJQHWBqh7vA2VvT8yjUWc4",
  "key24": "3JNPrSXk1HrDQ6QKGhHRy1M6XDwo5ZTEhEXx7FoPYTjSbrAuV2sZtMfW79iyKv9hMeVHGvKMNqi7qsVVYfvLgo3Q",
  "key25": "2GT9RV9DhNhvuqv44vLgdAB1L8PVWNcHRqTWEqFrJqPWgnfp7YXJDcAoj1bP6fWjZfAa7xmfZ7gzjpj4DLgTwKWt",
  "key26": "4xR1FyxeYQAzxr1ZZ3RZkQA3xz31RPQWsEwFdeGgHY4LWKReacf7VPpB9NJL7ydxVRjKkNoozqGRAbszQCwWAqFa",
  "key27": "2rDixWbj5GCom3JzruqsYco4aF9uBP6RznFCQhrQSvGpRTqsr2PJrnQew9EkApz7w75kA5sFXr9N2sMQ4rH5wfhL",
  "key28": "3ZcifVGz17okd5CsffkVxLNWgPo1VNtoTfRYFqqPdTEVochS3EuqVS8roa3BfSFK3HfetZuyBiCffgucS31Umr3j",
  "key29": "5FeC8GETGDBhksRp73278YmoFLcjX6hT1ri7W22BjCg5k8MrtvD7W9QTSE7ZwZptKXa7a2v52L21DVASTi4LJ1qA",
  "key30": "3syhGCTzLKV4Qswsae6bFhiGTkQVZppZvThgfggc3unf7y5GNmMVLaLyfzGJmjNcdPcCEEjvrAQseuN2PmgpNFjm",
  "key31": "DxVcybopndpQCn1BmW7cE6Bx4agUUKB72e6AgGTXg5XndAHDMQDxpGcHDgdQWtgsqGc8QHCSDQRhSZi8dAVEpjU",
  "key32": "5h9jw8ByCTWpDnUHFfLKRwyVbC34QVcQt1zbJ9Mmks792LnkE2Xjrxs8Dkfnnd547JnqNtjnzek4GkC5ipUySyoE",
  "key33": "49cMdPb5KvXqqNo3XibyoK9fAYddan3M1njRBXzk5626hhffRXsUyZ6hh7UCuKUkDHv8jiN3AHsaw4xhDdw5wsHm",
  "key34": "4JMceRbB1LY6A6Nz6FEtn7eTtDFL7iPJuoudNMWo6NiWds2PVty7qjDSwEYvGKyRCPSoQpbveB49KA6F4NEvwZpG",
  "key35": "2wbdH49oN3JM6EjbJF9fnuEDvpuwfS9kLUTKZnZshxh52Ut7W9XZSNY6kQqoRpL2aYM5KMZBhDyAoLkuWbjRYSDH",
  "key36": "5xpwurEJrCsxMVvJSKRs626FaPAMzXwTMXQ73LAc3Cpcyj5Fx3yvJK2FtjyuLSxpHzek3JRrGih5pwDfGejUGFCs"
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
