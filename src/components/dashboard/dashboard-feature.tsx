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
    "4WaDZfcBrM9MSa1vURHbWQE7yrfsiNYiZb9TbPpGm3ViWvTCaGGxHpQt4ywVpXNyDpnjwGHcD5uK157hnreb668w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rAzkc81E33qgGwFi4hDjuY55xskcnzxJerNRBT5L18tMZjrNxo8MwzGdebifqEEVjWfwuj9XrX5DjYX8JEeMkA",
  "key1": "nSQwbRb9WsDTGKU8bHhZ2cV94SPpXBQCRvVCb3rGis25mtVmxaz7xnGS1mhBCeuqcntEJPw2m9xsnHQ44X6n42B",
  "key2": "3mfFJrqqgsHpn7L8NhDMo3nj2RDpQUSnB9fuWjj9FX5Tg862JFZ23tCnKCPNCb7fAVQC4mjudi9AK2HTUe1btVz2",
  "key3": "5m2tViUtf9ciexRJgXGGPeWS2tL7owM8qmGWkiXdSFmXKzLU4DLnbMqA6oG5JPs5WQmXWzyXiMtmikJ7KBti4wMs",
  "key4": "9wRcyirynAZNvkMqiJTmK7CKbaBJR6DjZU56YF8YyUL5T5VSiPDHDCMMRhpzk1mmU4dxr5GEshHhXydDLr9BrwC",
  "key5": "3KGRBWeYWcF1cSqtxYMzcbq47aZrZb9YhxDukTLVn16GG7jQ7Zp1kZi4jPrZ5QLxYizmwY6EwAj1gw4B2RbPTPQG",
  "key6": "5sUmiEqN2Pm8zkNtFiLrx6NNaNLjgw33sFruAtKMvGQiWcNcKFkTAitWr121FP2RiQ3Bmm6qK6FBxC7dt4uWWdb3",
  "key7": "5MZBAKynGggnaAnmxcKSKeBeKd2PRkSCg9m3wTvNRtVnDawu1ER1BiW3t23ExNszSR8BpcqnAz7SgMvD4PtNTMbF",
  "key8": "5Vx7Q6BzZCiDxPK88EPHCQJzsMpoMP7QwjVtfVeH2X45NaXfGhdAG5UiN9WZqReXHa6Dp3JVVX3SsFq35CRBtqFv",
  "key9": "XXm3j9ikAKeH29nKTYMtU6av7WhCaBbCx25ev2s386MET9vaS7d8NK3dFi2PvkQiXoHWrezw26cukMvQciehkrB",
  "key10": "DbbUcb6QV8JufBzPfDSR356aQZJeSWUE5UqC6ND2MbGB1FaJ56SQ2mQ5EPCcHBTcuz8TVxuDtVXmG53uqDq125o",
  "key11": "4Cx4qbjqiTC9fk8ESKM3d3xLUDCTqVb4kTf3vomFGNteDEpAkdiKpgtgHtssczr6GiqgTnVojAawTFwKWUhh5Qmy",
  "key12": "2d1dGymx3AWZjjNBz4eqqfNETefMiSf5pubCSEoRzs2Z2ZXjQmtCbQX36aS4WX9qtcSw7WwEYejgCBai6HyXqaZk",
  "key13": "AL1zFu685VbJ1TMc4arnLW6ykMjKnFr6PagDypSdaTqCLPiK3WWYU4cnZYT1F1bhUVxw84K6Cn75X7tmmAb6Dui",
  "key14": "aPfGE7zwKc88f7ywwio9PLdJvRUyyD6LtnaK62HXCTm9DVhP7xLprqz3NA979qVGRooozRdH5uoG2cuBaNaxTRq",
  "key15": "6c6qF6ifvR8cyF5T12MpcfFRzEsrKLKxPrxpD9dyrzP9fxsDfrkQkdP7jQyWJn4rJJKUEtkmaxErbi3YrnsgRjj",
  "key16": "32etwkyftM1jQBaJLNqAcyjQqVS3JGWsFMYVyWLZHzG5mSJcgNYMXfsSmvwHv7JhqZPxnXc1rx4vvDhNeNTkTDx7",
  "key17": "5S7KUjqMWG5bKqffYJ2TMr6Ywc8CmBLbFgQgDPbz4pcBFxVW4b2t4bMN3kDaCU32VfvJMQDXmZXueihbkY6zUgYX",
  "key18": "5szBapFvMwvLn1bZJtm9XnNGM8UNgh2d3cKo1SkmcATLGkCdpmhyqjQzQXZxY5HofuMhKbC1dyJx9DNVkbUgfSuS",
  "key19": "4Fo4CPY1qcuFbzkYwt8uJ2KgNRYurE3pgmpcNCDEePNPpgrhVumStc4wtKUyDaNxJaaUkejL3kmATNW1e77hBfF2",
  "key20": "55gpDz3TW6VNMbHiJEzFcSjBNPs37SGqa3YjJR9zCDJDz5EdwMruYzADBenQdG7suNBPR8uGbQpEVBTgfFdNDjqy",
  "key21": "5DoqBcUFidCXiyKxeAE1QBM2x5BbtFkrtuQEs8PBhn2ZceC9MZUUKCr4AM8V3g9D5QPDY5ZCPgU4pophToNomsWU",
  "key22": "4y1NyDquSaweCkUJhqkQxDmAtQwhBFD2dpv7KvFCimNryWJffuLdpo8iT2sVfynfUkVkB6DvLB2UN2pkYGeFdQAd",
  "key23": "5XwmgEJAYJaXEyZFAf9r4YRQZYYxqFWFTpGRuipQ518dq7tCK2D8n8yJbMQrES3B5CKELjJhLCpQaX9NbkkmJ6P2",
  "key24": "2bPF74Z8H9xnbhpkKJTQcYXQ2H6hEqv78j2sAxquc45ovrjchh9nzH47hBN4WFPy8c5H9wPXa7vzECYVV24hfACV",
  "key25": "3MaiAvivRv8eerwrCmeYkQWz1p9fjho3GdTDsajCmy3RqT3XYQFhBra7TpFEtvmdxn9Cm6izP9rKTQTa9yc4TRFq",
  "key26": "SWUtBf7qQ2iCsLx5tP3Am6ViG7fjjYHSN4zbK8fb1WmyQBt3F5ooRoHktsG4cAhBpU962GpDGEgjn3eC9GcDCXp",
  "key27": "4rDPAb8YZLtL1tpXqTChuRQCYA9peMNHnhjkCnQQYMYoiB5YvAfgU61MSStT5VhPgcmMSZq3iBtSgW7tXeZdF1Bd",
  "key28": "48W7UYPAQPc9R4i8G9tjHTCtHqy9piPzFJ2Va5eULUi5uAf584DbP6BCB74yhUwQkGWNRtbMuDpSQMRoti5e9DV1",
  "key29": "22FLLaBZ9Z56SeNDDSqrhtFsPU9fcZ3kHHLQDQrYhouYfN8Kvvo5C5n6sUFsZqAaXdYe5L2oLJEgTMXJro6zyWYz",
  "key30": "4EaBS7vjJZL26XtLADs4LSeEEYiEk5DbGpxzUdHWBXPQsdfhbB7QsU9WyxSXS4H4upuAm55P9dHpqF684bUm31To",
  "key31": "3SnkGRySPsoN7ZobSuQY8J9ctGdJB2PpQHQLR21P6qW4JPBz7qzcaA3NSv684oq2497CtkfoD97f1SDfnkvFs6H9",
  "key32": "FpjwqxxQ2UCPoWUCWp76DRUkC5e9bJ1YdgjbFiGBG6yuAfabFsQpFtqsuXbzPE6PEHeD9dny6qghQnk9BxDoiYT",
  "key33": "4D2iHgpFVWnQKo7UGNe83HoSg1HF8cr5Zi5mFbf973JEr7bXWevsvoR8UPcy2GgubhhHmH9voZHs6LMFabK35hCK",
  "key34": "5ZCwprzkkgpqFYNtezP97aWa7a21VmA51EFZHo7dduFCSjFfLEAMB15ZSLywx3pzFKTpWUUie4S9t7xMdqJ55mun",
  "key35": "59t8jQtVzPNAQAjpvdyK8gfrPHPWcqTarR12Q7vgHqeXnXQ1cxDAfjFmLNho1r8QQZ9gpmRmHo3rkwQTc2H9mfc",
  "key36": "bAqyWDr8o7zdnPE4F2gRX6Rz6pchxYNXNhDfjFX3u3ChEyXw2poazKfCdqju71MGHavMDA4iDrLq77xFeXyYAH6",
  "key37": "5XATsWSmLREzYxAgjiQxsscNNCQA1FVqzRPC8SirRy82cG9Xs9UneEz5uhspGuyANXq6EPqKfBnEaVW7PUBixmhw",
  "key38": "468AMzdJBVEYznaQrh18fbrxXbJZWQ4Hyy8a5gVToRNH4KyjmTvkm42VVNC17tJZG2uBSKzxAabJDSHkDT1vA3aW",
  "key39": "5KGHNmfabfVuZCzqZTcJHNPb6bhVbV6gPXzDCKNHyE594JMZJnYcgoBD9fHUCBNLCoAR8Jy5Him6TZ9fhwNhjsm3",
  "key40": "hAgMNBC5rB9mQtQ4dADUWwJpkFk7JprAYwgzHPwaJs39yeMQNX87yMvbxZLMHXbMxV623cupuKyeLv763pU2e9i"
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
