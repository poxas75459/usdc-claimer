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
    "xUGr4hfmFHUxWxX9VP9mf8fcJhDsAtAfFEkC5uag75yHq3D4X1wRuKJdoTHmjrwx5VPedxmUvgN4dL2HuzCdNnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MrFEBjdAywux4AnhBpSJwP1DVrm5ptEDjpKZBnPfvQ6yRSu5n8wAcJVh9fWvx7ND2Akcdq7RX5pPZ33fCywVno2",
  "key1": "5gBi3RcUW2hYx68UmGrpmBz9yLVAYzpgQSTDRyTvgK2BwaMFUaf4HHoKzWktL6kdKA7dTkGdFZHBymQxD6QqBTVW",
  "key2": "3ktaPdbpeQ2LXaotirDgmr3PfDV16UrmG3o6spN44egLG9cyfVXR8itvz2sPGuJjq4UN8NMdGiYBoQnbpHFNHHjb",
  "key3": "2hFeFudekGDYjWw9dmhXWKaycXBjyAst7pHgsy44BxPTwH1dEHnK28XZihveZen9pP177U8vEEsg2S1kn9H67XAn",
  "key4": "5C6KzdcbJDtuFHm2qgtWHeMBZi5URAWQbvwdrdxSf7bESMqr2GDzy621R6ZMgANmpENMT7SDTVSZoN2DBwawnbPS",
  "key5": "22wrKAUmPudmsdzfq93fhYW9JQ9WKnqz3JFESzv7Kuvpn8ze6QhCC1U46tRNwBxpJHUMvW8coxLNQ2rkZWRhDunq",
  "key6": "QNesMiNVMQYrDz2yrY3SwYJyjULGLa4QgtwURejY9mKST8fWo1McpGSRwgbKA5iR9VPGkui7PFK9Xum7ioraiwx",
  "key7": "5GGpVY5hv8G3rnjT7pX1ZzeEUPeNxDXdazAiJ4kXPWZaDfxYis5gAcrRGY5RSkAbVUe24VPYQmLnmfRxvwjwb2GP",
  "key8": "5BpEpFumovmT2RjdGaimeWGifZL2ab4hvgDUbfjh3qfpLzj7wNK5XiWsgXVpaFxWJiJpSc6ZN6y6E5zXPPXDBVBH",
  "key9": "2gQgb8vLH1MGak4wC8h9pYyaLZzoY2HG4o3FzZJAijk83jpVjmWNA6H3nRFey6GD72Chy9PTTdgvxqRrJcdCcZx1",
  "key10": "5rJME7JRauig3P3rpAX7VBLevVAYj7jwkptzD623WqNR8uMZgRcrnCf2Ct5djjvBydbvmugc3VAjxNiJ6DJa2pbU",
  "key11": "55LTHp3yeE1mUMXLzfKeo5hDPZ4DFTQLtzGdYeHJLqZTfwrhXHtW1fUYkR3gmuVEV7bvqgx4dU8wWt3Mxu3btV7b",
  "key12": "y6G8w2uuFFcn4zqzNK8SEjm1fqnx7u4v4ivLyodk7SZTPa6WRJaVovodxNBGjSxVUNxyY6dCBswXesxjY8UmoHW",
  "key13": "2dnRSvCwqd7XhFVxm2jnfDaKjTk4fCaVoh37p92Cu2A4sACVuT3jWU8kq7h6hGMoNXXiQvhamNK3iUy3MQCWeVif",
  "key14": "2d6Nmh2yk2ctUARuz9KTpreaJ1ted93JEq5MWrdAGYuXfrCFPYtz5nsc3KLVATzzhRG3AycVwetV3qDu3z3mpNXd",
  "key15": "7NdmDCLPUMv2UNTfFVuzMMyPCh7KJoRs3rhDyuPg5y431jkco9zhJiNXnUCFrEByoG6tJDSC3rCoxn7bw31fbtV",
  "key16": "2Z52kY8TWs2MTBHU1dVam2ScfTxAPbmtcQBxGHkk8m8YotfjUhixk7fWo36SiZoXDNbaWAJWFG16sWChSZdFEWjM",
  "key17": "38Gqh8NTMNVGJEd6u1w6bFMzL6aYVzt79aQbZNdt2hTbRg7jgRuhHgS7WFjMj75U9a6Qe98WiUeRLuRmbAjcSXKh",
  "key18": "5gPsCdVTTXAccPm4CkFGTMvHwK4h31xnWe5JNDSizKMQYksuF7o76PggYNFs21DR9z4n686GwVz2Pqxo9y9HqBdA",
  "key19": "EEmKzZvqNBuzzPmEVUhUoZD8ouyrpsES7Ac8RXzJXYBErpoMk1fDY2LuZLQDT9YGwiahA5cL6FEruxdUnb4fQwr",
  "key20": "61MFFwDGrswhZBLRa92yovbHBa7g4LS9o3WeQ9nSBBnsoKkd5NWeppW2SBdijTjzX7Kdsk14nCNDPpcU9NTDWG7J",
  "key21": "PNXm1UbNBydK9rhArWFyBSjasMtkBVVM7KK6d4b8T1K5yfWoErp39MegP1aoggWJgmVFBgsZstF1NGAjxrLMogA",
  "key22": "5CEC5Qaw7EhGe1jy1dmfonWf84aTNTpqkMS91yzki9r8sPirDCqyyRrwU5cjouWD7yPwpZTaEH3vpSJDNzRPEbJE",
  "key23": "4CuERMkUGaPexebXhGhVUkMJG8pepvX3EoeAw5XGzNixCxgkHShzhAddABnFVmWJxxr6EXAov8JzCurFDxXxhqc3",
  "key24": "2a3cmQtX9dcNqtJ8Y8EKRHsLyYPrSk75SoQLwbLqWKv7apvnNKawtz1qNbdtLeUpo3TrB48967U8FDwvpWa6jmQv",
  "key25": "2vXi8GmfKZDfJmmmwkBP6Sw6LjizyGwyFRimiodVWNbUZUVFK8zrTnZ9izQbsToe8okNcvfzoYyMk3Edsvx84Cci",
  "key26": "sFCT3qdAHjfLtsMcZcm4zbbyiMBhtvX2HXgJ4BeEgEJfw9uBhXn1J5gMzdjMGP9X13JViC8WbxdCTcxueZYK1PE",
  "key27": "5ZyEV8h5wxrdBXMZWfnQPrNovddAqCsjK4QJ7PqwVzmH4oEjpaP6hLNW3beJmiKWnRHyqjfB7oLb7r8HJaMHEcXc",
  "key28": "2np4MnMmccnfYqC4fg242Z5HVvKNppJbYuDKgHA7QNBSJ51WtsoRwzDsQXezd72bL6nELLeuZ9xGXLuX1Ri9CzP6",
  "key29": "3G7niire1rno5kYzLPf4MQeUHDUCFZJ9dJyTBL11o1WtYzKazYYb31eAyWUTqfxKWaiKeeK3myvyRY2x1dkohkFW"
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
