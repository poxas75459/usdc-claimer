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
    "AgtRCt4ZFYxy3H9RcwZL5nrrF2u65jfEAm78oPyoCFQK8XndHH192ryoBqkX5UUUu7np25y1q3sVM6ZafVp186X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GZo3CyPGE8QPTpTBFE1m1aVwnkQsJBRpB5DdjKLERZY3Ae7MG22NUtPLuBsQfsStUEupYQiXe14xHvmZbuD3oAj",
  "key1": "2KyzWfYksLUcHXHV8CEKQZ8vmHv1ZqLKEKRJnTvsLpbyp39WZ9JzAUEaueZ6SGTk23HajTHoZMbokdoioH4BbniH",
  "key2": "4jCKduUeSVr6SysHuGkg3B8r7SwAhsuaTHTyX5dszew29zSw3PvMoZGrHw3j5oYqPNkycAHtk5qUkkZPf7EwRxNZ",
  "key3": "45Zb2Z9dhsZotoaxmbfPJJJRPzQgix5vmMR4PRxtD94cYYGnjkr5HX5ASjVC2JfYv4hWTQDiqfQiPiDceoNCUL7d",
  "key4": "2crpVHcN4WGqFDDTbzx5JnA8EMyGg5RMfhC1p6cqJBs95ZJ5yqS1ZvSdddAXxe6dzj2pk46U2s6oYk6cv67qPiYG",
  "key5": "3YsV8ig83SuJjbNm9kaQct2fFb6Tz2Ldfq9aL6RAvCuMJ1VwLiWJ8fnKWKn7dYQL1vuuVqnjjU7CjScNePjcWpCn",
  "key6": "4pCXP3uoihRryS9Zan22pkGwGHFWTQ1Ngw7DgCKznMCEopePLn583xtsQn6ViVU98acUwZ2JKbUqnxAL6yeUZvK7",
  "key7": "5Hb29LZr9zaztGt8QQtbRrwbq6HaudNQ8jw86Kn9Wf6hqkZA117H49eAyMA65LC6ivGg9m5Br7fD6mzf1U2VTZxJ",
  "key8": "J7aSxNvnNKFdtPqaMMc8yCEnu1BR82uedoePR11Moqi1F6dNieF8hYsJanQZ8E1cnGSY5KDQQ4niWkfFhBbjboZ",
  "key9": "Y5PDxacYYDdWyyohJP8BPaSCHe4YqLQS78y2wFCbVUq5AWXJnvuSpT9Hh5ws96oHfNKmJAUrHTrsWjMTdLwnLJE",
  "key10": "5RMxYQ7tHm2q4xLFpWwFCgTNUigc6uD1rtWeMq4AbGYpPwvSmC7NPRZxtngeKj38LKiULM3ur3ekcsyKsAeuqDdJ",
  "key11": "5e9Js5s4cFkYLYKohEart4C3HvBxJz3gvKFeJPS86h6YJ3cUwQChodiTJGKwxXFDjv6oyWc5c8ds5sc8gtZgqRzz",
  "key12": "5VwcixtdcgYHwfufZ2GM1Uv8FYvC4TxNiH5zZVh5NfiA579PRMNSpRdn2TNU8vure4yFSkwvMZ5iFa1mGdqEF6At",
  "key13": "gLywDXMcS96edNADy35VV7u4mPE6ASyoRXdCpTsBAormg7S1dTeqMvncEhtStUhqGnUmyZfBDrTx7uGs4xGcFhT",
  "key14": "3bnnqeJ6GeT25FJpAgDELQpWpSGETm8skWmsje9XqU2fd8mxefHVJokt9H413XFYXuAut87iwApfTkDjMXb4sHWb",
  "key15": "2uf9puRYqd3cYMpmmFfpNXAuPtUd5bMJTqBcYs7EQiMmdH4XhbMH5de1WNoeZv9mP3kFrgDmoZjGapSgVj1mRMvo",
  "key16": "3BAjC5mg3YuLmuHyYkTkkjNsFBhdMFvTDhAxP3F8QhV3VaHoc4ZqGYFRLHHQ5SCCqbppu21YzW8r1Q5fQ4XEW22r",
  "key17": "ye1WTixkWFTzG3W9gLomcs5UzjjbNEVf6erWwZCRARyDntt5HLMXhXqzxdvgS7YXAcx6g1ZKRQWcgQwueAFP7Qh",
  "key18": "5WahuWhppzmFSeMVurP3xQEGtTAXotTx1ygRkNAiZXDTZk7WNm41RCsba7A1jjaiW1XjjKLP4DBDmkf6KvStHUFH",
  "key19": "3N6GDD9Tu9c321ZW3HV9p2KaW9RsDYCmvHgsT6QArdNgz2XRFixXbwiFK16c76CNtKMYu5R9jYNh4KKTxF12HSGA",
  "key20": "4KtkaYqg14wH83D2TEKbgaqG9LcFPdke7o9aW1GVsJkjMsTnXdGxegUuFN4RqGJsNG1jrEabjzXHLJT8Scf4Fx62",
  "key21": "5XUkMY3KNn57zTKDXKEuAxcWuKrJ4vLg61q5REK1iuSNX7rrrg2HAQUbV5kER9Cd5nRzyBiVvPUcdttMmQFaQ56v",
  "key22": "34xsQTonDDZ5XTdEEHUJnMmzE4nEVftGokipWZSzXFGJV15QA34uoEtdtbNreaUGLqYcvpivLjDC7tYJCFZj5pZp",
  "key23": "4m5noujpwZ1NathTGW16mTq3HyoZXkcrD1CTbgTbsfx4LVoGCMCLefG6ZrtdoGnquiMGkkNH4W76obHDVKDHLs9M",
  "key24": "3vJZrEiessP754Adr4r34sbgMP4HDpksgCWn7uFi5pGnRV9CtwPWs97pcgcTFoZGe1g5bdnHDUvHmyK78SV7GjFa",
  "key25": "2sGwvQnEuJQ2Py7gJx1UoHwtpVKEzWFcYBL6YWh2hdxngKtGdTvsbgJJa4yaWkSFFpg8827XwoqcVm8FmyQhiCEE",
  "key26": "41jSEic44YRVbKp9U98CfPNYEPRDA6KJoZswbhXdBHJsbtmBAww28TcEtrcNMC4eFqwmJBkqnuMJvYJyauZKAyG9",
  "key27": "4mFESZzuCq3HQa3S6h9nsadnWko8dENnn1zMWTX7tD2Lg17oJR4CYhdW21N66j1WYw2hxMQhSyPkuJx6udbLUKNz",
  "key28": "5fLfCSXZUCButzUKvuuAJi8kmeX4YY478qzkoa1GqktHS8PXLio3JXafS6dgrQRdGLSgE47DmcjPRxbANsB8JRVh",
  "key29": "59g6AnLWxBTTZZE6DRLiWaQmpPPqCf9EnuhBDHJGQWshCuVWWQQ5udzcUoZkKGayxjt46PeiFUCHrJrFLXJXvb9q",
  "key30": "eSvroHWhovbfTxWCTE7hCkY6ZwYdykbs4UaWRUwzJXWQXFpobp1ZYnXiJ1Wb9sa8Ki8Zdzyg69BxcN1UXAJGD85",
  "key31": "5q8RnTKTii9AbkCNMV9x2K6Ez6JqdcWD3CYdnyzhPUJSkLsn59fvWzswDvX5ihtpLUhCqVRhVqKFWuyCXQYSkqwE",
  "key32": "3h4qCHv4Knw2AvGhHcM3rHBym9pfNFMG32ShDGLTbG5bYrU9ACCJHLj5oQ5GzWgj1boNr5XfpbdzCZP5w4dhizPT",
  "key33": "c6FieeNNN4bgv8TD3ZVcKzAfBpbweVeaQuzVq4B8F822CmjcmXJ3cewKTYh77dE4YwcyoYfJg9XENjAy1yhvZrw",
  "key34": "2HPjn3uxJW4ZnrFQBM1V3xDM9WtXcGjTk65TrCxkPhgD3QxmmU7YWGV3mkcKoHzJMwBADaP9ofXtna7HknQaqR7c",
  "key35": "2NzDtg6CfvjfWhjj9QosCpLXiHrEQ2QnpNFt46gJgBfDZnWTBH5R2m38RDbF4k2gqmU2vtBYtksZQeu3q3146ckP",
  "key36": "4oMBTpsKgUoWfYf3WyFTmSbRNMNXfmdwgfcZET2Xi2DF4rhwkeNEX5PcRHAMu15UDbf8NzLe2bLAnmedoESER2cQ",
  "key37": "44KRR2veEecinyhRfVmHPrbqZLvGJBVD9MBhUomFJQeT6JnHviazYtqprWStrZXErQQNeEMMf3TmhSTPCTGsG6hL"
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
