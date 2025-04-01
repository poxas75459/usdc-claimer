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
    "2KuvBbsZmk6cW58tkwPp61FsKa8ZQEHJtgErdBELUUZnYXZT6BfgzVG2AcM4JEEDNMSMEkWeMFYj8dqTUiHvWKu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pxBWTPiLX5DdpN4zQ6QWEf1zunzGnvY93xtm8bMA41V7hgUvonXUZE51RejuiYqcCm7r1yeWZk2nNt68WnsVnEV",
  "key1": "3LcyhbdmL3AThRQFJFhgK7EM1HbCcsVZnDB4wWPvBfvZ6CxQwbGLUkRnDBa7fJhLfjqKV8uwHoh1xMkEo1iaq7B1",
  "key2": "4aQMivF5k4rm2qvR3mPFveRHW7kSG7NcTxwKK5NReo6M61JvgBp71wLKcgttc4AMtsAg94fRyiw8cXph1NnEVVJW",
  "key3": "m1wYWX5AZYWz4nwdQUff9nZ9VuDCUKjKzozqzNACiDp4ypwjkpDk9ZmftdUS2gQ9QZ29TLKtedhjVbn3MCGjhiv",
  "key4": "5eJ2dqUa4vSxmwWrFdY6Mw1BdSr2JLu7seyXoc5dUfGN9WgsM3F59erpfZNFaWwR99ZXzUD5xh28ZruWoMBjfHNv",
  "key5": "3eKt1CcEbFNQAWfgJoWmZ3sWvheXGzcJKcQyhBCTJyyPFcRSQ7XyNJG6rGbngaeDRd7E7RfKVuzBqjTWofVxsiKR",
  "key6": "2TyXVxCMmBX6dZfFkSV6dgZcspUqA4DAv8aUucjGnWEiQmCRWdevsjStsUKHxCUsDi41WFkL3AsUZiSpNqDqYCi4",
  "key7": "4CmbqJiAYX9wrRr5qSoN5oEtDz9R1osMT7zmiDU5Bm33xZZypTkfAF3EUQjvM6pPUn6ce2YucHAvdwoZK6YiVc1k",
  "key8": "39PLSTgrWQKuYeUPnyJ7aHUYaGtn4e6bzBwfb7LQ88g6Zo93FgU5RwdKRkkUh5RrEUaTHJUqMRhysVkagE9nmtk9",
  "key9": "25ha6A15JccWPWRKdrx6npzDhL1QbaBJLrmSmPNhpeAGNo2meocgPyzEBxYhwPCbNbcuwva5qYNHUJRDqu35Bw2b",
  "key10": "5EeA9iTRWyh1GnWyy8e4igAGhS9M1buU2iX3hVKW8MepAcxPWK9C478dzJHceQ7e5VnfRFhvF99xCGragqVaDppE",
  "key11": "2PxqWc2FiRZYry1cAo1eMmpPV8Bg6jVX5TxhLVs5ctF1QoUyb5rNQqqmkMStyFJ7bcgnTJPhGFxfxM5Fw3Jy9JTa",
  "key12": "2nLkDVCbSzopxX8eDzUJFwdPev5wYai7mgBuZhLCDoXCnkPUifryvLKr89Dwwt6h3j99LM6f6q6QEfYy4zUCmDBW",
  "key13": "5GwvJSpomirPNBhc9EvdSseodKQawwZ6azAwBjZ9HZYn9VotPewxaov1sn4YpfheATWhvX3MpS87n3fbxWZFFDQP",
  "key14": "MVSNXkA6a99U14rHCZ3S7kjq5DQS1d85gti8oyf9SxtZrszsNpdhTRGSqT2cRdEjrzFJ3XJhHnz1xipavu1UW5M",
  "key15": "245Fx1i67NcfnXtxNGDVxyvkzDWvPyhssk9LrJQUZT25jcsGBe473pxmKGL65xGSZYxJdG8QVUfpcWEgJ6oszkDG",
  "key16": "26DYXK6jbsaSrhDGeLP5qmMysQ3dDdC5YXPnr1ip33KXaRFYpeKakeUVM1zF9raPhgtFTTPXdc5dZESL7DGMviA4",
  "key17": "55W2r6fsQz1eBxJbvYThBPi8Z4BG3XBxLuRsT2xUaDeVs6svwNj4ns6ee6eikN8pmMoXvojTt6TbdCZKJ73PbQv5",
  "key18": "2dL7owd7ny9do9MU1cMB7qojvuPgzxJWNuUtvevvzmSJ4XZCXQjMoU6N3zhTtSuSXNmgAkFo7tQT1hYocjNAgrGV",
  "key19": "5USGYVUUYUjcpWkQJxEHKKJCyQ6ZKJnHcniigHfWECbr8HqtAWgkcMg6ucHiAKprnZNrFLMoUFH1dWyK6vYcKXm8",
  "key20": "5vboE6eU3ieDh575okGcevpkfNWCbgHohkpGkCpWvTbPbTu5649mdPovbtY5ChP7JhVPqRwuQSyqGmASDu1ZJSYM",
  "key21": "ZW513f3NJardLAhVaQ4GBV3iw3GZ1zqZtiJMgJo8ERiKPvtCGkzDuT9dED6E2RiiR2Qcc1euv7yy3PD7761s4Pg",
  "key22": "3rzFA2xPDLXXDsxX9mYWsBtzcLYhtwYBeSSQvYd2oZAbtr4ExEhyAMXL1nZc372BWLhbePeSJB4GUVhmWapGCHLV",
  "key23": "vS3qfkf9EKrcasYDizHX7q49LEk4sD6fFiBHDfxNFRwZweSeUj36GtCZfvpiioZFHmwam7ey85AnQEcDuPGQHeh",
  "key24": "5Nmx8YeEc5MgZmXYZbBXyCqRikZd4dAwLxJvjk46Rqi8p5kYJ4owLJtC6DUA42oTt85JpDST3TkypNx4xMGstAH7",
  "key25": "5XUr7WJWeVsfE1yMPkTTTgrTnALSKKYwXkE42Th8kgdtgdW3f37b3CKqNnLtWJWywL3ZdEchVehJwKTMwBphsKZa",
  "key26": "2o3UBgm1WQjggtVBttrA7uhCvFx2duQnKt7n2e9EaLpb99ay7CkN9w7C2iU1r2eCdGkDLmzcwLDE7ZJHLdHAVXQy",
  "key27": "9e5Uk5wJzzNG5bEdsVRZDrjamCKhMSwreGg8AY8UoYZXdRZnZQ43v7yz1DvU1yRiNfACFsbxRuL1cNGvG531xAG",
  "key28": "jzM8S8yLQP1WdGdEvHwbcdWZcKtGB7KQykhBfGCDbsX9HD7PeDovJKhmVhVkUM4vaTtXU214eJyjkGeAE9DxKY4",
  "key29": "3gKDFr3tUXgaCvKB2Pw2YK3uPV1XNtP1YQRcBm8zRyWfL5FoFLP8Enbf1ePmK641Wh1zhR7b6uaA6Vw1yFNYtP92",
  "key30": "2YLi9VhioSgeqdezWVkQRcxUQbQjMFcDQAgJsfZyaKZFJfCJTL5K6EcfuHf6rW4cJYC2DRhXF7q84e1E55K8Y94z",
  "key31": "51J1horVA1D5QAP25xc2M4pCg1Dizj2FUeEWXuZYgtg4oXtNK38BVeWnqnYAnKxQ9aYXQ8Bg2JHX9kwXypc5cKRQ",
  "key32": "3heU8p7kvdsj6WnAzh2sj3Cxx4YnSRcJHFksacPquRAw5F8VyvZCFvVDfDJ56v7uHpTuBRZjNr9QjJyBMiQngxSK",
  "key33": "3rohLA6s8v9oJARHbnLjF9CUMBEu6npFkLLoPJcGTLe4ZLwN1wdN15Pg8ZWLjARAMM26RJaceKCnNeSfpq2FncV3",
  "key34": "2usM2UtVURhVHwn2Shng4FDqrKJxoGDJV61gGVqxPnLZ8shhGoa85shsc2HYGM7L6j83w64VoeJtXD6TDLSGfKeA",
  "key35": "dK5Uo4diN1aq6DKGFPi438mdWnChgJvCKwn8DT9Fj3DpURGpiHYi1imJeBdPRMgBGmYHPyxizgCNm7dgdn6osES",
  "key36": "5EsEosPar5ztGFnsQ5ff61yAHA25K3m2T1BURXZU4ftT7tTjsz9C6CKAUKbkLs5b3mVbTFvATY1Du5Euckic49p1",
  "key37": "3UCEzuWJqKmrZouCYbms6BvR45rC4pQcWy6Eje5igiuSyhh1QXUufT5rKfXjYy7KWFDT1XhK3wLGsQyWGi1CN7B6"
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
