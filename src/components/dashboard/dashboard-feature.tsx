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
    "36Cb44cmm2k6m4QDWjDoe4Q3pASTizUAKWd7H1RXvnHmaKwzGZy3nzyuE2g362uBaCqogqwzppk9ukpzetdV93oD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VbfREtu57RFjzQDKFnJsWYS5TYddfdnsTAi8tNCMEFgZd44aPcbfDRc9txszcBAESSgJfguWgxyq18CX23Y69oN",
  "key1": "4ve7F5PbBZQmSq8Z4B9J9wJ7GmBtKBB84eJpjVKW8M8zTghthLq3ZyHUQVCa2L4GLQVCM7ZqnTqAsft4Ckn1R3Vx",
  "key2": "3VgYnZjwHvihPsKzu2oCgLDDnWfjnXja8uSMCqFxVFqq74c41oTVYtanSx21cM8syQeh133wztuahmNgd64RmbvY",
  "key3": "Tx8zugEwWxvnUZz5vVEdFNKyaoDR7ygPuNc8kQDWordBHK1NrkZ762ecn7FWKjpR6mVsh3UksD4ZFHsJf6kXv9S",
  "key4": "2DuiBuqEaQbsCVJQ4HesXk1BAipQwCska4fjsr7SQBeJknXcoqct9z4CDTvYPmp9GJBjQSqZATRNoSUv3nTNZSYY",
  "key5": "34RV2dEbbCERoEsH5iC13sNfMXBaoZfYYj2Dah3g6PKEavoebgoe4XtW92rVmLy6FGS5qwRYLBUk7itpYvV6anFW",
  "key6": "7eGHcQYQ33GmXMo9EqCCMdQTWRKyr84xMdHkE4W6B8sc7BBZJ6dgWubPyi3qjU593vmqhS8UtisParkJRyFqViw",
  "key7": "4K9JFWccK9bAGqr6hxnpFuKfyGicpq87FVruniViSZvLP7mhacpmQXBMsQo9JACkQegQbiX4pQGdjPpGmUVVrQcR",
  "key8": "C4ADyN71MqzCFXxveRYLmucoqa5v3c7fwjdd4RnYZ8qfW55rT2Mb9j8XQRy3Jee4MmzggTZUL8o4Vbyxhr4NcMt",
  "key9": "2gESLYGvhYDUiG3bCbpyCm6z8Nxf3LQvCdyuQMgaCXtdK2bjF6Z4X4m6RE6XXrQvMgoWZqhSnW2HZaRDkj6z26pb",
  "key10": "47yc2otonfTStZLPtVU7crqYcE3yDLQY45GuLRfNbsyHh1avDngwW2KNAdiyemKNzBdCG9vETYxEzTBtYjRPuqC8",
  "key11": "gZnyr1ZVYq2byVvRs2ezSmw9H9FCZHQuq4YjxuWVuNngDjR4cXX3kJ9kkJMsLhgdTmM9Lw2XeGywnaifnrysgpn",
  "key12": "9Zf4Vhbrg7xdvQ47DT9pqgVwKhY82Cns9aVu1uCMqdYeXs1JMKWzaY6ArdNhKVw5nftCHzqY1PWW6gRY1vbrPLN",
  "key13": "k6MdBkUNUghGVCSBSU9xHw6AJgrvUZ8sMJh9BLLzyVhwLJprQqmdkSGLrvKqgf11VRAhPPrXN5oYhR32yj4EcGb",
  "key14": "4gsj7MFnUwp8AVnmpk4mftMihcq2ENnbJYgAv3Cmvhb69qqTSS2pcRmjm14u6XeM5g5bJVDfNTia1ZLW4UYJa9iU",
  "key15": "5S1jGv9reArDCGi64yphp88oKYddie3xkukAVztuyZ65xiGDqi6Yfkrzm4w5NjErszAgKbsnp6VXbffsTeJvq1Wy",
  "key16": "2t6CbPMmkYMtRqF3wB5TqKKxrbhFng5DEBpekiLfnFtdXxPTdUttWWhBka4Q2VNFWJEQ3qJgkfpFB7W2qYz52YAi",
  "key17": "59NMTKSyaJCWveXGFSXF8VxzQSNazGk6auR6fGAPHmmvEhJ9V3U9FCPSYBX3Jo9ajoY9qxGdgrQdZiYuTTiHmwD4",
  "key18": "58DSb2VPyGmntjmS6KaGfJNuYFKXxb5bv4yvvPj4rANrfNYnjCgjehxf7rRLvHug7bFx3NHuc7Cxz1z293MVegvB",
  "key19": "4821VxBfv8bDDkUa7vBFvfLarBXHSqXkhdDDm5iA9CGhcugPTm82HxrJn4tb4fbPfrb1CvbiSiVbr67LAXz9Hetu",
  "key20": "3mgp9FacRpHgdWfWGX3rShmSVRFvLZdXkSStmFQYSpBUZui8EYhJQFt6MhQiNDYsgEiR9Aj8iu2W9VaDM4gBZqHR",
  "key21": "2irz6YLsw7ZeVWpkuWT3bL7eBxoR9jcgEA3fhXvQoDeDTP4bQcbknm2vQbnhow7S6MaPzckPoi3FVVPKanBWVGGh",
  "key22": "53vST1BULCY985KUZzW9bCS4Vcpd1WNCYGxtMLmB6xoedCgig9iYQc639iwrZZzJ6XStnetwCKG3EUG3EFDPbWd1",
  "key23": "3mxQ8FxoY7P93iSHTFpApKpWxUGAPqWSLJtXxYuS33kCzoX249oDnZQD46rLwWA7DrYYhVAstidDffAFuEppiSj1",
  "key24": "5vGHMpVZjMCDNMc9nmHtVeBhXopmewr1YfiBh3nPvSUrg8iCFtd4TrgouusmzLheiWc3tFU3g2eqWDEr32PaRa4Q",
  "key25": "33UQmfSteNuy7KqbJeq9LhHzQpNykfW2BrnpJ4EMEbaWFZSjNs2rv8GixFC8tJ2aDAD5JsB6r2bPSnBGnuPtS5Ji",
  "key26": "4ATTFMUKbyVeBTWgKwE9VFt9gFS53K2Qp2Z9qEGU21S3fbQkZJbedwrx4pv1pXoj426tL8peeToucoZ4hEZ4uacz",
  "key27": "zLCMCGT4VgSoeoKef1PgGgNSLB7w2NWaZ88udLjyEU8Er2GKKPEsUZjJ3dDVM5qoct8EyjkCCr3PHPx8i1bM9AL",
  "key28": "3oaCFXjxKNcTBSwzwjUnvwdmgyapRAhQqWAZbQnnsvFuj82PncEPJoZU9KGwrqGaG3sTyEyhVcaL2VUxdi73GKJv",
  "key29": "2dHvJv3JtkvEve7in5xhMY5XrwLT4D2qdyLxDJa6P7LgUwEWxNVNPftcAKrxFDFYAuk77sNSAgZBKXvVPbuXkbyg",
  "key30": "3qS52eE3Ln6tz1WzUZ2bpT63uwgohbaK7VVapGhD793VeC46a3gZBYTTUHEdBQaHxhMT8bzJANZeD3hvdViwFfND",
  "key31": "3th8c5hXBUE5VYofwXpxNkWU2sD7itaG1J1AY1GT94yFJmmbNMq8kazKBtKhT5hqsZi4DUUScUfe4p2wERQe9JT",
  "key32": "4ogurcQxUp8xjxJeUBS1ifpiUMoRJy8McbBBDQ6qDp2auJPKgZiuhtSuMkJ7ZvQMebY8aBfe4c15M8wP1qDm965J",
  "key33": "mNAmXyCHqYmWQZvQvaDWdJvtCCMrTPjUAC6Pdwzd6RwqeTtFTFEAxLeq96UHL1nH7Fvr37XA2p5KJ4e9NMpKkPT",
  "key34": "4qo2eapjyT6fahZmAhwB5ecVDU2zKXfcXtPKwkUeUQo4CUHD2HEwVrbuXSPGx8aCCrT9HAgqJhjAQ4FpBBxff9yE",
  "key35": "3XK4fmGJFFsjn4ZmdNLoDPy4fyZLjd5JxEuVe4APGtvwEA8P3tEHpSvwRcTHsBcZiGjrafg7iGkMN8cZwirxUsiH",
  "key36": "5b923FspSA2iqioi8AM7RsnW7UYaxqe74Q33mYpjvtBRPDVrramAvipxsRxQUdZFE6yW5AViJg1LiRiMUCodXGzR"
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
