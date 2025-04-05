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
    "3a7xLrqimM9hDnu2t9GQW4Cp5TWoTpB7H1tr3wWKFxGEFRMidxnmjs31WSNr3oxB7gaf9pwCBoW8Ai6A3ZRcaDrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ShhEso7WH1xt85PTnDi2WgZjbu8gJ681rq8V7L7TzzYxdtUSkywh7jZELe8exuPU5pLaeKg57dJASFD1TH3hwZk",
  "key1": "5izw58Zp3cZMk2qLcykkXEGDJQ2P8u72gHJqqvumQ4QToHrXps54Tm2UbmDFMn4HQ2qcAErDZrmRMR6vbSwhP5oA",
  "key2": "4TaPDVD3QRiya9Mm8SRf2mvhTNdvbeqdQAPNmbYjdLf7YcppyTfPBsWtfVbxgnb7Uo3GTRxkEsP249gJJbVR8D6P",
  "key3": "3GrpUEJWWEpyViLMN5RmtCzU6D9sob4amssYRYJ7jkrp1vyuGZPCTV7n8mWaeWvCvzcNr8tSxJ71bDTP3B5HXBPK",
  "key4": "3gqp1Qma5Wrb1HSwYEUYbRx2k2GcxYbPKd5Rm1gySLHrRr4UJaCXAhTsQWeqTGjEfRy23GtndXjgU4gJrDoP1G3k",
  "key5": "4JDPKw42pTiHC1mb6Vt2tnHpwktWkxpAXGwvDMq9KswS88KnbiqVYqXETL3uai2g88nh9AS7UheYXtCCTmBM9N2G",
  "key6": "aTX1fUuA6Q4KwFg1TtDMGtuBezDa1wZLqctv9poUuY2BQhq6T7katGR9XT7fNQBTJDd26Nm1Q7ztVBFcPXe8Js7",
  "key7": "HgJRfUN9mEBczNL5vMBQziLZkEWGRhmkFJEYga5rSALoTxasCLHdn8eP7mBGRyaVNhaom1BM9Qe6gRNKqMB33L2",
  "key8": "3NsteyCmftA9gr4AajeCXfjHpQH2zuqQMxuw46oGbdUR4bqSf58XJsEbRF1CqJbadWHB7pymzsj28QjAz6ACxYn4",
  "key9": "3UX6XUg6fgbdJ39efPEb3wEQrBN9s5dwvbiT1SjKoLsH7LEadYEfZvhPqhbkWY94ymv8DobLkoLxT85woimNUUz5",
  "key10": "55ooMGoXAtz6v1K5ky2Zo6nMaUWmYbs8t7Cb6etWqui2CgjCreL4FY4SAgCnKYTcBYEWYvAB6i8dJJbFfiLLgHwf",
  "key11": "2EFwicMKkNfvfo3AD3MHFpTp1KkFiaQKtFyGsgsCX1PnbYA11UnLyi7rtj45a1PgnRSgQu6wNnF6cBT6Dg9HGKS8",
  "key12": "2KtkQKhaLN4w3LbkXr5ZGJyezNG4NtwPSR1pv6a164SSjE21m9bywvPbnmPDQqGYXpoM9Cf3BQE6ZAvzCvcXpF8R",
  "key13": "3Zz5dLbj1BCNhhbR7XLsmyJJPwEcTnjcdHe44nUkk8CVwT8CCGa8yj3XHbgogFR8o49RJdcVp92dWmWCxbvHyvTK",
  "key14": "3h3ggqhoBJfRDd6BKoj4uXRBVP5GyYqSibug8xcdVyDAWUC3TRJpLSh8gBQy8Qx9UypYfUZvvwYDEDTxpnbBNVFp",
  "key15": "3cwq6inFwarxzeLoFUqGvpu7532zjtjS5mdaCRku8La9vYsCDHeLYibuN5SbRQLCsmBNt1f4Ag4418bkMfHJKjGK",
  "key16": "pWWBMzVbvxAaxv6PzoaCtvBvUKgHpaMoZpgLFaX4H987yuUpYMzA1jV74zrnhSMVauGtiFsXkq5of7sFi5SzR6P",
  "key17": "56xoZp64YN1gRcCskKyQxu5VvEy4PMsEGAq7BjVvgqqVEgukHSFmUffY6fioDVe9yvp23ma1Ja8RHjqf8pNRthKH",
  "key18": "4GeMoYr13xDXqqiYjRc3o3RadBoohaoxZZWzinLWR1rHPJtZW1Ra7j4nZSfy1PRTE4DwHpaYWuNUDz7tHK3sFudi",
  "key19": "62vKcJZHSp2QpK61zXxtcRTN1uKEU2ZWaKe3etqdLeYiovob1Frd1DXPeH2ow76uRuGhH5WfPqGaYnc9QXfMuD2y",
  "key20": "5NnV62sbp99uKtzGcDfJ9naFZoVoNrouCSfhiYhpRPCjbgjmkMAAqMJuF7Qxu85XkXZUCgF4ePtBDQAM6UaeS8Sy",
  "key21": "KeodS3Sry7rVVpNKqf3Nqnjc4f4MX3YBLzTZcGnBFKNM8EArvfFmNo6ULnBratSizgiU6kDVNGkoz77LqhWWZ3z",
  "key22": "56N8yxUPoPJ1d7Af4N2sH5uyBPWqxEKnAzSamu2zAj61f3FC48gWQK2mHsPERhB43uaSLdCjfvG5j36HC34UZFp6",
  "key23": "59NTnuLk4qxCpNhNbcVqTvNnqXaCeXQiQQjLhcJqLCeoSnTrDmgPsB4z4sG6cvDXePGB8dD4Xu9wZ8cHa2S8zm9t",
  "key24": "4dwMuLrCHG4WQC7v52z53sHdQnn5zYEB26ZsNv5YVHfSGP2imAvMUYfzm9sURrJCoVEriotWqgRwFaw6Gkrw6Kas",
  "key25": "3AVDcyAKUv8Ma42jXJXadpP1cRvkawUvCQ3nKcDzrJx9JASNxvM69uQF84ZPT3YYiAePUMmLjPRsKiM9p7yzhfyv",
  "key26": "14yy7fmotZpbmCdsR9AdBjPZeh7Ld6BywuHqAxzu1qAdNEmARF1roRxpmqkePF3YktnuZb2j4RtjYnPMdrDv6Tm",
  "key27": "g19nWK76sZ4S2HcRez87UChJnViAFBAQMSdq1itZT3QbhSP7YKiJdiFgRg5JCWX9hW51EmAqSKYhxXmwWF7CHsQ",
  "key28": "3NWCNghaiEBXnHJ8bATrTm11zViT3HvwLE4cUSmiE6z9UwJLWrVGd519Wnb2LKGaEgASSsmjKAmx4nT34rs1X892",
  "key29": "5o9jnPqBPmcCQHQ8ibLHmTC3jqFiPmw7K8Jo9oDmJfNUiJhgwV3ijDgocrbzzdh75W1A9ih5FVjJSWPiDTN2Du6d",
  "key30": "jGxoQPQwpCQbdZY3Khb3XwQeTYn41LENW81fArXbPuKwfEzCjS7FqDsRKZDACYB9evrAaJRoAo2DovXY2qmQPR3",
  "key31": "2o1wbeBW84QCbQDrL4hToEzGiNDPemNwt5rQNkwziqqpAGdpKtmFWeDvvDYUb31KXuqSaqx5i9F4MYzgyrmXVXTi",
  "key32": "3wkkxTtWgwSNp5aFLzmK6NFcD6dttnnss5h7e572bDTVEtPkJEAQWC9HnMf7MgH7pQZKorttD2g546c51f8ZnRsw",
  "key33": "2nUEhzNqPtQwhStpfNXSg8QyZWDzR76AbFx7U6fkgPT4uGiFjdKaWdpyqwQv8GnPG4XZbYzR8nGRznrADa2uPU8U",
  "key34": "42v4tXMknTXXXNeUSD2t6736RHPE7GSu4JPPrYNDo7DqzbJ21VThzeZZ2qFjiwwswsuuRow6ekfBH8uoiyQx2tHB",
  "key35": "3n7xmDgbuNagbPFtr9PxPVsNBoCujBusH4Jq3QwsEss3DXe49fbAaLkTEWH3E3EkFyEF5C1UyJUHVprWPEsiTVs2",
  "key36": "3RdaUr4cah7HrHL9fL4RtaPVt9R4yiK3eDuNtw7LmeU3yhVEpz8zEDtCXrRCHiZW4kLGsvS4YzzvQCmqhEuDaWPC",
  "key37": "3AnMeVdHGsVSjz6rqkejj7r6VQqTs8tKJrUTqvB9PRhwFo1Wq8Xq4vPryiR9MkmMDfzgw8nHtWZnwdhn2T69o4DG",
  "key38": "3joyZfnPPDdP9LmgJmBPPsoh8WNKVDh25usCNVsY2mP6TvcbioNBXmYoJi6fQiZi6ovWwVRWTHXKzvq5jUJ3Udo6",
  "key39": "xRp3Tk2PkJ6rr6WUNFk2CQUGq3ukWmNF9WoWqx219ktQJrApxRrRvjKfm1s2toJxs5auVEeAtuTnVBDydUsR6sz",
  "key40": "4H2DdgovGBFhPCwY1cySWFT6Gm6nm5y5HFw1o5sueug7K38B3gHXJLyTiAvgpAz5enQxW3ciUWnKkKVPDXW6mmCY",
  "key41": "67cXcxdcYpLiLLxqJQkAD7mV4KKw2fzxbVmHsNLavJuY6w8mCi8n8w6Kt9UfGGetQxemdECVyGdWKLT9ccpQjzUG",
  "key42": "5sxtdVkB7p1XGTUfXmvdAm5zNh37MozXwM7u2pov96hARLpki5MLtdaBzTgMLpGXo8BXhNudu87hZM1Y2Y2XuCj2",
  "key43": "qFRRnLDfya7iRKaJhTmTBysGHHYvpQenGNsumBL3mLBWfkdLRRAQhQppcYhNkxyA57WsFGJegmx7JW98jfpEXn5",
  "key44": "3ouppMuw8JzfMK6yw59FDuebzC3DYhDCeEPjaNzqpuLXyLnAmSTnMsunhGy9d2FWk7oPnqo9KciMZ8T25PnmFYo2",
  "key45": "56fuQ62NMKAwRLgKca3Yfkz2KkAAcJug17pi3RL7ioySBJYmWZ2BEff1fsRxVisBYSTaebzpnjouzvsqjkCQTMkK",
  "key46": "2XcYiXAXVb85QQXJ561R1ot5LH7r9wczgipBTLGcVD8iMABNfY4YALai5HNREgeD3N7hRwkfk6DcKUtHEFi3PHig",
  "key47": "4SQB2DaEnUEDN6ikaQtuNrejnBMLByWmewBMdGXz9kpEpoAQyP4spgC2usNREpBiqpHnuVQozrLTYkKpQkP4qaWx",
  "key48": "WdMMAC6beFzXxwHHKGxZpY5ss496MxST8JFiQDRdHZsdxMwjLUXsuxiNnGVT5G1eMDX7iaZQLn3Uex5dFByZiw7"
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
