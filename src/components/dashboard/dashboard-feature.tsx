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
    "2wNnXjraM7rcZnaVDi3ruJ7TUHE9BNu4CbyeWkgRMdD76deQPZQbFEYKUduWox5S7nwgEoJAwy22qncFoaXySXuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sis4ERo2S3vNM1xnqtouTQAHB57D4H5Jz22F37xpFpFiKfUj1hBkJ4M373bT7C2onWetWZNHVvfGYsV4FdHLbAY",
  "key1": "5rqjuhWqxNbxSHQKNDs8nRvK4WRdfMCinfwq1fkEyMsyS9Cy7GoWAoCV75DrSQBYsq7o12u3ZcjdnAMtay7emxkg",
  "key2": "2junWeWnF35atiAvPX9xt9Xb1sbhcbbmfMzjS5q5ky1ZJHCFsBjeWVfFB1hnso72xEH89R5LdCnxy3sSZQ8zDjBq",
  "key3": "446cFFA6153iFKoCZQ3aeGhQYu6CPWgBsWSB6JQufEGt9nzq2NftKWtMaxxQeGnHC4sug1niXFu5XBpubomNe3gv",
  "key4": "fThdnwxMg5JRT375E8HXuCB3rDcKCpZ8Qshp1xV6Hh7b5T1CF1siv9MsXuwneF1MLeCyjdadNwTkPXZ7F8dys7h",
  "key5": "5qXfNRCtY63MfYK3zMF5anLGpP9dSNKVKmMoJ9qJdaEacNc3cswTfqWBeGW4vMfU2QBWuHFBGPcWjG97dbrysrG9",
  "key6": "snfSwr3K9YV7jzfyvSZbFo5NzrRG9U6xQwM1Z5jsRJwKS6BJNnG1aECD2W5agmukqCN5KvUMi2GTeEY6FbVLwsi",
  "key7": "5waDQ7M4Cu1Sr8Lk6XEq9sSgTgTay9FwmUFQtDVT9RJcDW72huxSxEyZcZdzDQWaPwVPJWCFBxqpyAkmLbG6SLfm",
  "key8": "gFFBu4Z7VwMeJNtc18WPCbTixehMVBBfn93uxYFb7QuhZxjyTZej9XLeGeyErw8XmWijhagqAjwBEMnUxsEkqFM",
  "key9": "21satWtYChBQnNXXBqWiLVavWkYVqy2XNdd9wHJQ4LuymfNe7mpP1iS94Ggtttgvq7W7kYgoAeigHVRDGJBeTusG",
  "key10": "2na8YseW5FU1hZUdGsGKT85qVBEgNNqCyFyQ8WYF2K1gm5TVNbdzYwqWsUK25nMGEcusJPVHibfTSxtwNyvDn4YS",
  "key11": "21oCeftg1pfVpZAoKfLxTHQYfhVwidZ1u7XS5gfpdmupntNGTibYJVG4cnmfrbtVpuAJywTwbWjc3N4zbLzV8psi",
  "key12": "5EQCoz3paADHctbxof8qLqtdgwQkeskoePD46WZ14xWcgyaCyCh1kbHPdxY7H4WaXU9c1yTXqU91JRnBwt3zpTbK",
  "key13": "2B6Kcc5RUuWiA7dpTa7rLMeqL3jnmQWGs1RxiT14E9bV1N4vmsbzi5FYCAfYUMQCta6ybCDmbp1BPwDqVTqW7a8D",
  "key14": "36YKAZ479WMRwDoNffiZSAXLWEaHRytozutubC6t3pawAmhDk4sA5aWPTy32zkqpuBAf59eKSLbQRkzHfdXbRuXB",
  "key15": "5SPzcVMbjrqUjfgGBM7vyXCbsMwGadHrWPFfJ3udiyzHZrKMzP7rL7s5q4pxVgQSuSiyZU67LZTETQtsMs2YaRFM",
  "key16": "2UBLykmG5uEDq3zTwB3LN1Kc8X2ViQtxZ9YhvQWqAEviAHLz8gfkEAdP4yabcGQZ3gabW9b6hPUwMnDtigkccbg4",
  "key17": "54fQEppvCvaaQxM2F6H4hhuzfdNdQiyJDGecvZsQeo2cfNtw7aoKK8SscYDuxw7MJ2sQsMkHdN6qfEMkEiYyw6pF",
  "key18": "4mJNDqbMUVab5EESW6St31XL1EMvHUL24L9CHNTzGma2CAw7vu8xAAQk8M2EXAT6MJGHE5arNmt6XYobfPkqUACk",
  "key19": "2ivtaULjmMiHYRrx1tEi7qawaxxVFCVNGTUYfJsCcHgxNdkchPMJEDbewfdDZNztDSdCLjuf2GB9poDCNke1mqPu",
  "key20": "4nFzQVbWa5grTcrwdnwZZXAxdTUQa39snzqJBZqfDq1EzSg8nLzNuZobUAC6LeQsMygrM82wuBEG6rw3sox8YMMZ",
  "key21": "335BBYRBcx6AJ9mRnLYjAjabzBArYbnz9ewv4VcqDVT2C6nXRCfkqXFB4t281y3f288zpxTSDMmHyHDbPiLnEHbh",
  "key22": "3xcWCopnFhq8YTctFjBWjKZjbcWRMeJniuXxD5bUDnyZ4cF6EGUgAAvntG7YL7aBmqtCcR4tWHzDqaTQZNputxKz",
  "key23": "52SARPfb3i8VPQKKWTM78Qjqp7qkrtCxC4QCSjQHCBaPgmve798VdKndU5YXiwZsF3LcAisty9smxAq4Nr15zp3G",
  "key24": "127gmFYUXu8xrKBwtA5ZTCdmRbkH3DLy8AqB88LMKhdGxtdZmyA5DE4tayn7L5fEsbEWZmLRCubG4oY8wSX4bYnx",
  "key25": "4fbvdFZkh8GcWnJXHUEEyVaGGYjpb2AKMuwSQ5Knt77GQjcbe8XirfZbi4DWuWXZgDXniYUymin2NMpEUh2fUVcG",
  "key26": "2jk5JXRVVZiVKdKA4ACaSuXcCbn1SocHdBNXWCZtqmW6Y4fEFNQurf7QM1S5zaDN9kH4y12yZNjH3FHA3f59PUbj",
  "key27": "2j3iGaPVEuE1Leu24W59qjDwp2iG21gV1BuxdAwNxPvBTx33ftjv45nTDLto9yYxdX9bVkMXSAiDXiK6Qv9aSTnq",
  "key28": "21EtTXo6VSW8HvgCXUkC4w4G5Ui6ouNAqkgE7edVFJL2nbrxC3TkCEB39drhAwVKmSJ4WGgm8nUXiHdBXGaEobeh",
  "key29": "5ZPC6KpdZfNcLJyxkB2XPzTnwNz6wnh2VL45S7Jpop48edjKN3UfkvXxQob5QhLCBC5Kid33bufBMHkuG1M9G3e",
  "key30": "2nxXqGRa6YYSFGDcwUkXtp8tDyW2MSRkx9gLKNV6vsnmaKKQJXoswbrFosP8huKvAnGHEMqCDg7xLFGsakzwDbyo",
  "key31": "85WdKCjgBwAZeHnuyWMrENAmszqvTpRXkYLckvhFALPk9zKxnTz6CAaNbDd9tc6HKJpHAWCJdPWErXhFimFTUex",
  "key32": "2jVonr1WjMgofbJw5c1ranWtjJBpwMQbxuupPznkXnWCv943Mtj68yhkD67cHhsQ8iW73PSFzmZ4HwQWMdLjauUM",
  "key33": "2AzpJ5DwAjUFdh19hdeeBJW6cm9sT6sNCR7uh7QY7jFrCmDpjNJT37r6yuL91qmcSxodR2GKbzoTwqVqStdEhQhX",
  "key34": "4t1UDja4w2g3fnccsgryF5gU7bL2fducpCwzW551goxAzrU4QRnQND1rx7GdJhLuNzQnQyxYoB7G6HauisufWRiL",
  "key35": "2dshgUwBomfGDKMVJFEAP3nN9YMWZbC73EDDAUq79EAKd6KgPBASi7d49GGdax4brfeTaT42spsYhvMh2VVbngRk"
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
