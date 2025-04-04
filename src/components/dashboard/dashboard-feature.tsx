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
    "a6RAFGEpJMBoEZebrRrqxvaXdTwJNnEmZUcgFJdRU69n8XtjDJksmn6VTAErwaD2FHMNz9tb3zQeTnXiyZtPU3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WG99hUSdjXL7VShqNdCUEPzLgwioTEvaV5E4CY2apbdV7zGEG9KDQLGimkWYkXV7VuHPPBU9zFYGPvPVE6K1nU6",
  "key1": "43WdAFsXFJM6Qt4owU6GGokTERKgtnuVjh7j6gCqpgsECwbnAzcf8APjyZNeFo5JWjdvrA8HZLvWALGC1AVsPFfJ",
  "key2": "5oyBSkbSEwZaZSoGtGDWLp1eMtXPSWne355V3SkJmsR7Mq58i8NBe1xPxVXMxwhnYmMD4xpekdzYzBiLwsHE4tV1",
  "key3": "64vL4hc8LNgVkTjyzsWpmTMT1d26FkwC4hJigYm8aU6tfwFnbxMbDvqbWeHDqxgXaTsyUvPypzZnUKN4xvH1XWBX",
  "key4": "2UCT4xGSrJShTyKei6vGYQWWcR8VTVxvTA3q13NPxJfsFt4jLKsbsySjgC64KVxrWxyDtcn7miigghiYyUCFzffT",
  "key5": "3MrCU2uqTop9YhkKrDsTyQ2KnjjaJc9u8a8tELcNArYmnMZLfFNj1CXDcD9Kq1FYsZSsWKas3Tj5gFWCkHGA99SZ",
  "key6": "hYb1gnVacbTgdD1PhUwD1WmXVmsVc6UjAVQJcFfozcrh8kHQ1reEYGrqYigi2i2rY7n7hytBctAKbbaXH6s4N3n",
  "key7": "GFHhygBeC9Zuu7fb2hQw5FmranAt8dWMZmHnQjL2tjv1Bi6vWgyuZWZTd72n3GQ3kuSALV52jDs3eNH6kNx9WAN",
  "key8": "33tKDmdz35odycLgTfGTmdbctoPPNHwjrmMT5tqy7hFdMSeaQB55Ratspye7D7ZY8yB3arzxAParqcByuxFneMum",
  "key9": "21Umcv2KDSMymEsE3XZoc6rzS6Fq1zoV981XnmPuR3gJEjVKeafUVTBYVB4rfACLyYuodScxE4zdwPtkAesLn4aR",
  "key10": "3GigaH7Rc1f7p7qX8W4eXrVEyz3rT9dZkdLLKMvFSvT3xe7qTT2vsSfJsXeEiLMqbsBMpK75ZBWkvJUkQA9UAuG4",
  "key11": "3Wyxx57DUDbLMr1PqV9SdDYrfWHExpGrq8vsmm5tP5jTvX65rqnFbQcBeadyesVLu8CtcJUhBPt4guFaTrMbVYxH",
  "key12": "2fHoCmW94jvr9yhzyuvzBi7Gq63BcAXJg7P4FwmfQx4wssxmE2MDLHwHzPvorpMPkoZfyyvDieAaHTP7cCujMVqS",
  "key13": "Jd3Y3WWujUSmEUSnHQyzKH8cXkNgJSQE1kHGQLUiXjodj6LzUdKisV2nxLsLQWaYpd5os5s64yRLyqEo7Xy3Gzn",
  "key14": "2wcnVLAxh9FJCfJK8feqa1Az6yQyDYebfWaSHfUZgWRAarZs33mtM7jfpVLh4jNvjfmg8jDyJPdC4BUd4SWGWrbR",
  "key15": "5NeTQxQts4dQS7atfKgeBuw1GoNQHNq52kz8MKsUpKAGi5L9twdAzqCi94tqsPPkGy7Qhc2aErrBTTikJV2Y5nQZ",
  "key16": "3GSUw3iKWZBr8GyZEzsd84G4mNFYjANwDAA2PL9zD9Z8gcFfdNVoH9hikSch8nNCce1Gkpa9JZK5xJUG32z3CCrk",
  "key17": "3L7nZTECJePnyobWL91AXLDMsbG76cbjZrSNA9r9XasjPHPEE9sTiqpsKa6eY5uxHt9Kze3FgBFiYdqJkGhny2pN",
  "key18": "3FCK2wUXg3rNxXfGPRAVgfY4PKjcnLc9V6wUctxU1Jmb3eCuDWvGshQejMGcA86W9tNiFFM83w13Yx4qWeye9j22",
  "key19": "5966HWriWuYqLhL6oRzkRYi5hci6ShSFEuVTo7Qf6pLcY9h1oopZ9Ge3StKWkCVDjqYP496GzFbLJiKEzML4nyzg",
  "key20": "2SNnkE6BKf5wxg6uDUprtgc9C25mAm2cBEzkXM8xZ4NBJxHeHCTUrQH348QvfatFz7ERDpAAwoARMLchbLCVY6No",
  "key21": "4VTxu5e4usRqTcvddesP1fnLhyGT9BnmcnnZEzAsmKozJzcPTezWVNvHKrbj3Zr7K3ZvzNYxuqCSbYgwNtknk9Nh",
  "key22": "htMm2eMEzSyKAqyKE2xxft3Wi3w6Sbv7jr8PFinwMqxbSRfUgLKduscm6L5gCKki66JLAJGKizkFAPVziNyYQLP",
  "key23": "4toJscL4wvsJonUfrvbi9LBQt97daAy4kjQUeAgrEq2Cr2hHbh73YVLn5aLsqUnb8ezaefTeviGPFKnABwRqw9VK",
  "key24": "5QNTuWe2s5eFeRF1zTfkifjNp1XCgoqktikKJqBFBdcKX1i3ywQpat4rZKHfN2YaDa4XFBusiPM7cV7hYkHVB92Y",
  "key25": "3UyJAbxS9XgvJrMdWE377mgiyHYekh8s39DNbLTAcpgfyenbFCrwd7YKh1FyxGGxGnRTJtq1pqBo7DbuuVAegaAZ",
  "key26": "4YvCMXNobBupdTqtgeNR85FetqMcq5anrgJzs53EoNJyk22yChfaLZzgm4bkTrP5MQtkuupmimUHcaDk2HQRyzm6",
  "key27": "uyxYdfUySpyZgzMA49K32DMyQFWpaW5i1vLyRxaNwYZDB5pQmZs8gXmTuJB6cdDAnWEvwZMwULQemisrZemA9qr",
  "key28": "2dr6nevbXJoZdxTz7fuwot81EqxbAsQ22S6ZpCFiaVoYcuUiPzzGg55UUk4eEobvFhFJ5F1AbCncqnKnLBZfHeWr",
  "key29": "58Bwz9T9ep6fTVqrCaonrzp7WrDEghPBZHSjKvoHBEwtFAT3Kti9EfrTY99YR6ubVmQAFPSVGEvmSY2EGBnx8RS4",
  "key30": "3zi3x95F9yGufQk5xiLPUVLjvXxhPwHsPnvTv4FapE6Ajf6XGGekbajchXuna4aB1qc1AQvNnFTefWDovFkPfCdQ",
  "key31": "3S7zXo9LYA4HKEpKuqpwD7M45XsBCaLqZf3SNvdjSX75udZxG8xsKVTCRi7ZBLUagURTCWCNuSweZkGZjPpnKXMm",
  "key32": "2udY7zDKaVnrExfsNfosHQ5YZ9rosRoNPmGvEpmu2ZLyYm19bjh7GnQB72aF4tcvJUdAkMywc7QquKsEbH7RsDAC",
  "key33": "4vhHxapUHST3KGD4ZRebCsZmWfbcTeSCWhtzq6GD7UBPt6UUEBDjjgpPPsigQEUmnrASZGjtF6npy9ML9wPNg8KW",
  "key34": "4GQ9qwhwG3Abafc9HcRoJr6wSrPGRTf4kni4t1dpEPkF62HfU4c9gKzobsuiV894z7P1JmtfoStywb1HDTXyu2tV",
  "key35": "3a45e8S6xRGn53mbEDM7prqYj8ufE5or37UvUsHsv9NTEkT1i3fW8yL8o1zokB3GaiYn9jY73yUtLFpi76uoVi8d",
  "key36": "3KE71DCpXxGFSWAaskNntFAx6dVLzDDBbmGYKm1EeUfRuhfgUts7wsdoMk7wXx68gCCwStGDAibnZfQcRAWBebV6",
  "key37": "44xTVMEM3s7eQhoec8PJtB1C9SdKPBhdpRVdZEnxHqNVn7pieWEAxezney3QvbuBok7eoSyGcnZ8qcJw4iocC59N",
  "key38": "2NGXDSEqn5t9dCbRE6CK5iSbNTh8JQvHLysh5UmdbAsJMXHRThfbLzT8eGALNxy4djgtifndxXScm5jnpqh4bQG9",
  "key39": "ffiRZ629LuiexMX1dwGhuZpofcVt6L2fa8BvdELGpofNt99uVtqJVU5MYJiJ88QhUDKfdEDpsthqTB8iPvhNww4"
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
