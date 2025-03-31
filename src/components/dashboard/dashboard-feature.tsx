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
    "2NSZ5dfk8wd56UJf21BvCLNyrViqFFH1gA3RcMt3BLPqNYx2RaM5e1e191WrL3hb83StzXH2sAQkK6aty964LesX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4273Whg3oFp5u4DKkbhaaLFcAjFYA8Cmxw22CDhhFavLtMpkN4gB6SbTRWEDC5h3T1X6JwwTJK7zon5oqe4ZXBpD",
  "key1": "2tJyaY387NMvsHwVn4MAh8pFioiVdYf1NsYqxHGNF5sGiqyDpANTtJaU7oexYj3QDPKL9cvqFeN8218bwEXXZybq",
  "key2": "29Crr5GGidmCsu9Gb7R3Hwo6dyVCqzNLgC4fmxFPZGAoMfgyJq8Bmq7GDBeTXBcnsqcwLhCzzfBPdTWH8GfvrvRt",
  "key3": "45D9vfKYYiegLkaPf72bjjTNmGGtQmkf7TcFtX6buzAPhN4sPWnaGyWHHYq66fMCYRV5tUWvnsPE2rE4hzbpgqvV",
  "key4": "3SugPLXuYF86tV3WcoveEUA1dRAhXQXgkL1fjqANLpqmmUt3Kj6F6v4cTmpJaXyQrQWZaKjbdNE6rsziqKrmg2aD",
  "key5": "vfZVcgYwZvm8EE4aDJfFeoSXxHXdNutZwsVH9h5Mc3T67iz83whxJzSr8AHu8sHSfEo7hSkfCapSqMDiHVfv7XB",
  "key6": "5wnbZven6r9VMY5FgNuGW6hNoY5nWnohx9uuRUPc2e4RohSH14xamD5S9wgkW1K9oKjidKwTsEgiW7aLCQeAMHmJ",
  "key7": "3Gg2XrovUK2VZozUWGDJRU1Vd2PBUWFwQGeJmbTXzzjDBbssfeUrJHgVGFDf4Vws8nyvhKt8EzGQBNdzZiPEyAnh",
  "key8": "2RRituMofK8VFhGMD1RnRPQJgZSKhPgevdBrtsViGGb8grfm8ffJ6wuiz4ziEqmSZkkRyqTdTLgY6LaMBU5iyJzv",
  "key9": "qVNifpnPFuMNK6n9usQxh2iYVmuTHbeyGUrPWTmEuxNLPcei7ovLe1xb82ZnRqQXVBnmpD7tSaLcKKUPeCB2Wf4",
  "key10": "2C486hmoEF4M73rhvWiXDjsmPK98BpMfX5b59D8QZPB5BQZcrxHtsw88ayxabHkvjz9SCESTvkSf4oTBfGWXj7LX",
  "key11": "3BA5zsctuCgUup2KrzP3bP86rQFEJZLXqf861o4eC6m1rUsxLhzwtQiEhBKMavaiLhxTmRee18TraTFaiGBF2VHw",
  "key12": "56ZvS3snHdtchSc553s5FkefA9qHJtaKSZFDqUoB9LrsxV9XpQD58ZhRGKantna3nEKJ612K4uEBNmDSA2jmu7Ef",
  "key13": "3ow6HNQUCQ22gL641VMHMZu7s6JPGqkxfTWQp41EjByohe4HgpaKU9Tdmiw2FSyMP3goq6NP6a5HUc82yDVcY3DD",
  "key14": "5QAWcyLN4ybCsvQjdANtLDnmQq65JqfqySeHhiqNDQUX8q8F1PvXQvBPYT5ijVxkvJwYFpStsnjX5PAbysQc2HZs",
  "key15": "66bPGUtb7bqQncGz49tZPyX1p5jLSQWnaKHezcFxuZbSKjiaDgfVLhQSD7TTriUgjJHA4iCy3338ZqLWrvbdNbRq",
  "key16": "5nA1K9So5nPHCRGRZXu7TsYNcXJfoQ1FLgT6FRjhuEwaNDm58Cn6c9ri5b7bbK9TEoMFPVrDbiuT1g5UnsNmo8KV",
  "key17": "63fCStRLMU2HjHz2VVN5bsS3TkRqLr6SRgA8q8gY1kiTEkfJQzfjDAMLqq43Q9whwo667fbYeugqvZKk7Whmt8sG",
  "key18": "3TN3dDS6mqqMjBBgHEHNx9E8LZFrYZkrYdEj39dgCjVHuTSPPY1gFmjUcWds26g6LmPbAuyhsFGd8aJpMC7khBVF",
  "key19": "1KXkz7xoUS82TH4vSGLnKnJ64PqLSJpBchnT795ppgV75VkPB2zUMuP6Wu4VcVgeBHiu2zfMM7cXptZbAgKkBhw",
  "key20": "5k9vRYi15KcPP5mgEVy41xqUjnSqJt9pyGsU7F2gCFRyGTV1xJTg4ga1SHm1JT3GQcbgKdAUYq7mHVQgsv8kLt4G",
  "key21": "4Azm6vcRuw1roybf76VCEkPWdxRvRUwygBgYZdJ3GrGkaQiAY6sJnChwZgYKGytrj66TKvPrTs4v7CgmFEjmWbNB",
  "key22": "55H27ejckfBATYuWsHHocE3csyW8EGNSAESrv1Z6N3eNf3U5LXVTy1PetzyCDFHioS5PPdiHNNVQtSfyAoVvqT7s",
  "key23": "bzU1ikNRhVTiwwpzCJNc7fvAid9Wa7SZXZNYw2LurBPwLE5E1w6TJJ4yA3qcUZx5NHaZJ8bSMZWxiHWEscz8LtT",
  "key24": "5Mo1zU4vaumUnWsUxgq1J3G1BkBPsfGrZV2CrCcyfg88PeNEsaVsqLZLEXhjhDQ7dCTt18dTMWcwTimKuhFnZVQR",
  "key25": "EN2KPLBrL8KTMXpWF468aEW66KNpB6MY1y7t7VLePYmPnub2ZbfCy3hBxxTBcereDXiq9r5B7zcrJzbZ2a3kEBK",
  "key26": "W4UXdQcV8fsFq2BMFsZ7dt2vczngCF8xTJiF8BFgcuo3MBbbMnWksKkw1BxNJxvVya21U9yXCKEk74qqiMvTxHe",
  "key27": "5hxPEhSxxbrVZp4L2BQGKZJoVyygHxaRyyAeVcJWvDqC1vKCDAaF4uwJkdNxsjDhR3gBjpGG1qNx5q1V2EdoL3fh",
  "key28": "3gzCHEPoB8AvorxEwnZsdys8w4bKn44NqFgXJ7NQaxu96Gm13uzVbHGctWYa4qQwrw3Zj9mqTciPFHrK9NE4myCA",
  "key29": "28LFQTyb6WfYDvM4tzKwfd1qMupQtWoJmQB4oyJLKmBX8t7yryyLB9mwPPraZHxyaQGDgozJRiqChF22dWn7LCUr",
  "key30": "29D5vj1bkiwJoVpgpqb8RK6qGW7xMWrAUbZXBhQim7eZP9bryxENSeFvXGkRZ4SuosXp7C3CdMMSY2PLgf6kK8wN",
  "key31": "3rj7xn8YgQ9tXhpW4M6e339stMgFFHHA3cghUaE8PoCcnEVKBUt2zk2DckmUY4icvmLupgrhm6xzaBxkavxBfYgK",
  "key32": "qh7hvpJPBxMp66ze9q363mmjt9LtXX1dc1PprMDVhPhttWiZnYuHh4eFimRmPr2FqDk6UR3EwxXSiixkJ8ype3d",
  "key33": "4C1XssXpvNDy35wcpbxSS4TPPh3UQLCRHeRE3eYQ9orxeaVedddZDtN7ZkrtuabTy5aEatshAi5UikAeM3Vtv3Qc",
  "key34": "31omAzN4PyMmyMkZAqxuyzCs7qgUgg8QuVbUzTisM3eTT4HDt6fQJgjcV85yuMyAhYimguJYuLLNKxJtBUYE3KY4",
  "key35": "3FKhkvbMtP9HuXxo5BYbC75JJYaoDMz8Aa4JVWLTooiiGdwdoBFZDkmPect9LjW1Jc7aUaA79thsLRYBrdj6NHLK",
  "key36": "35hFh7dYe5mYZVivzLeSPzxPk7BEq1dzqrNbSmrMYFsknztzCJyGDRTnaB3JNwU53UejbA41Df9zvs93MQCeP8g5",
  "key37": "4wmMtCSC8fJ88r1oM9QvEJidRNSj9U4hr1MFQUs7rsD9vrfUrdp97wTUFFxr4LePDDM7q9UhZ1NaRYfiCefYLv24",
  "key38": "28jnAHAfPV1AW2UkcsHSnMLorzMPoFDZo3wKJWpYEX8eVjBHoEHC2MwXiw1d2zxtpyzvZHdnnJFr33QBAvdRNKBw",
  "key39": "4JZvZBWonLQrhi9c1QvW94rHMgpABJ7NfVKa3UirhTTouhMoxh7dmwrBRixHqTUUbiCUe3rpKN9KeStgXFV2U9LH",
  "key40": "35fE5zQNSDSW1JfqF7ZEBLLqAeCr6YWnvcGXDxk756aWmnCwXvDCbkwYtHbY6MQAgbu46bxBX1H68oiwYArfWMnf",
  "key41": "4j6PoSXqgTsyeSup1FweAWFa78QfWdpe3pixJqjeJG9z4rB6Pz68Q61HXZeXjxuQdAKHTQ3RXtg3q2MTFbRJy6t2",
  "key42": "4N5RA9fZ6mLxnkKatfBBrDAFMDCcXeH4rBgDFNLQUAefUjdSUFjQ2PURoi2H15fiScw8AkoK6YTHDHFL1119KQ4q",
  "key43": "2xgVtdXaWP2gpAk2TwkEtyPReFuPgFyWRWZx1iSJrheNy653TaWy8ZXrhw8NKwaj9c3DMiHqXGTtN9wzYgp7HfHP",
  "key44": "5JKrr4TzjsFWvzRjMLSsM8cx6ZKtyLrDkU3btfMM2iyGnduPHCny9J3hoJQVgau4zbi869KDsg25KhnHvpiJeuJX"
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
