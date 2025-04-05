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
    "4s5WbUvhk7KUN8fPB8acSeXQcLRaF1cSoZd2wvYiyNPqSuppXdKkhdJrfYVRQTJDRbmpZJ9YauDCog5Gkran6vwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23s8e4ePZy1tyBhVzjX91XLu2NVBB27ESdaHmrzQnCCP8Hjeh7hBifecXqWW12KtWT4C8Xnuh9mMTTgCTjfrLKU2",
  "key1": "RMCo7HRW8wFNqtaxataC13bB6R37HqjmFkFMAcK6mCUpmExtpcYEb7sHA1VdqvoundjbFDjvig9LVeD84SeAZLy",
  "key2": "2mzBX7ENcUzwRuugUUXTgL1tVyUjuVvmxKUaz2RXX9jzE1xBJuyf6p7qXeEYLrgJiWPv5NZavdTKtt6C5EhsqQRm",
  "key3": "3gipncW4N1TuGcAc4WWwGsg4amtPWPaojTkFpYNtYpGq9RFT6sV8zWeoCwa6Cd3WRngUrjeDPnLhkHJwiPmo4Te6",
  "key4": "3sLiUUaJq1sHgvN3v3GZZyUUkaXXfzYGt2jBNenLLLNqk8k41bAYiWe5Kzs4JK1y2fShYecAeQ3qN1fcbvVJ6yZG",
  "key5": "4jU36EYh2QVJ6mL6SJtJut9mHgP2tVa36iPcDtr3bvX5MrM98xhNQobWYoaCpS3eD4FqXpP1Abci44yhCpgmUQCF",
  "key6": "voxKnLUNFWquqgJ8NjRsBxtEQmL3ki255YrwTXK8U8W4YpM5yvAJ1grENtq7vysize6rE6a5EvSd9dDA9DjLrV9",
  "key7": "RZENUWTkg1ScvyF9czEiTSnW5jwJJqmpuumpXvFbLQCAFHkc4ffMj2wCiPeBfkdpa2GdmrpgurnSswELK2iYEk6",
  "key8": "58cemVoKBieGHvjc1AtKCxfApERoQ98ozLTkLoRYYFvVfRr8bZ6WhSxAfQF3zRMkvqSaf655XigjP96vpA9sdocj",
  "key9": "5wRPAyA4SU9PuEJyuA5m1cF6SpGPDGnVf4FLh4GEPA9xintmmeFhFDVu6zYoaPKKQiSUFS1gBE6qGN69y3ov6RZp",
  "key10": "2JGtwY5pjmSdgmKiYt7mZ5sGN2TWQhHuD2UnMjopqHFqbDsUjo5iDBRLBjoeQryJEvrjiqieP19wm9VzSo5w319t",
  "key11": "2ocCLHDN5BE9zWsqVZXsEXY9gU6rKe6t4eQcvdToTcRSguqrXqgwJLmwB1FjNqoXqg9uGLTvhFJZLPAbvpwfoACz",
  "key12": "3JUNp4mjD6XQ5BLg2iRLGLuf8PFPVfDJLFUv9HgKvmZ17DAyMfiNzBhKmJqJMawNd7JHBPCADLWvf92c6bJPQEsv",
  "key13": "2Jr7uyEUFSg9zNSoczyV6b1VvNTTYfjikD6MHSocPn1FW17c7z74vrL239omvBWpMKamKSHYMyxUKh78WEUQ5hGY",
  "key14": "cxd4GaLdYC8QVpDP1SXwbc8XWb6sFGw57ZPvTDE48kG9tLemEk11wr7PZaVAp1TRJmBQCbqrxijX4jYWBSNgK9Q",
  "key15": "qLPCmwhxcJrx1U5sSAxdtpR8DngE45Ghi4yt2hX7Qnc7eatABbRXMDg163HiVHhs6Z4WhuztM6YhVDFSEvFaPxq",
  "key16": "2pfxdxQ2W7cePQ2qzb9N79rzYr28aUd3qYpdpEB2zkPaEHsbmBwZrJCpLTJeDFJZo1MfnFQcBxSTp3YnrtA2Vn5z",
  "key17": "5hEuCjtnYG4gELcUVaUL7BM9TtSgpasMtc6SstB6xzhgwAR1FtMAjaDtjau4ihm7M8b8CPpaWLYAyjJHCj7vXzsm",
  "key18": "54jwRTCn6yAw5KebzBP2PP18cDRxc8ftWEJ2knuqTfFNAafwZa56gA85FQKNdPHfSHQWUxq4SUyorrUAfdnJoLBt",
  "key19": "6HpZqnDv62N6Kp3UazY64c1HTkLtpaKMnxgDcW3Qo34z3DdviYbsgRPuvrQ6Hwp2NwHbjA6qjyL5LuEMppQAQDQ",
  "key20": "2BT5ck5zU18U1a5drhYL6c46uryX3ZqEFha9uhd5mDbZehGBkdXB3fqak8Vb9UULLxh95J1Wj1B3ZUvLDAh6qfPH",
  "key21": "212nMyTaeb34MbbWR8G5zqqv1HxERJvYVJmyxgVfkkgA9UDCB3j7sogVqzVKfCDV3Wx43VZn3UVqYcniQeo9sYfM",
  "key22": "2mk2QzWK5z2MWWA3ELw3uQXKDhaj87jq7fevQepQ4JJdJXDQptquZjhwZZTcn4Vdg1i7Pa8xTcouvB1UudjTM2WM",
  "key23": "3hckZnJVfdkhg35nb25qBNTPtKfpQu43aaHoBoJW9TBrRCvikdNkWNjK6i9cvjs7kQ6s1qQcdnVL1i8F69UDyszn",
  "key24": "2KgxaQbqVh8kJBQnyna8iLpEEhkAHM4eVc57c2YRZUMH4rBz9oLU1Lgpa5L5xk4cQ6e1JbBAgtViTX8aRgEnM58U",
  "key25": "2nY9o93b2en1iNBAhSrRmti1LcVHQgHBRrStYyNQDcX6Jf1SVV9R34mgUcqQZJcdufzm5rnbEtm7iAqhw69tvK9Z",
  "key26": "atxqZjJVH8r5hyPHhVndV7PbyJwqtd331LZn4NznpTzmJWXgibFDWj66Ho87GRZafh1et7MoVZ3vAgGkgif9dPw",
  "key27": "9f9P6pSzYu6nyUhtGPHCPEdRtu2gsinHFbypdCE1cP9HGYEzUTce1fgNzvvrEDEBzcAU953jMbrBr3TSuJPM4tq",
  "key28": "41bucctTJuXCPM6fdyNF6Gm9RGPsTt3fpr2iLNrjGSANgEMdrjW6HkKrgQZzv4TH5Ewdi4bqmcFj66a1HsG21vmj",
  "key29": "5at1LR6RNqtP6dAaQxL2pqMzB6XC1B6U7S43X7PigBVwSWRFF9jfaWKuzHsoNuubE81yKz5o8GXtJuSMvawbNen5",
  "key30": "5S52UrqbAS9LA4ZbLnr8mNnTuMiL3o2rwEN58XcGC98Kub5PP5sMEcjWJjiCYMozaJRMj3itNLMZLPYe8NWK3qyT",
  "key31": "5L9UfaXAMwGe91fWXPhHD2vLotJvjA7GEKvZPUWTdGMFmd1CWvagDY7T6UxzEkSFnKDTWkPTVUtEkaE1FAm6WWsJ",
  "key32": "2JbVtFaHMwxGsJoomKfDgTBCFVyeHnehhHUFQ4EiJjVGwUpqjdohvpqep6KMRZGebECNjRHwvSkHV7Sqewctccqc",
  "key33": "3Uwr9m9B6btwmg6BnkkuPaBaNFeeLJiRLF4rAnKyEbYs7a8RtYEnwY7m7e9ySQURrvCf8affjJUZQff5sG6KMqB8",
  "key34": "3Lm6vVu7mHYS2rBzMpqrY8KkugvHmCxpRiFrsxiHx5jK1ukEvrd1m6KhrAoZaDZXH8FZa6TnaDEwVWZ4Lu9vJ33w",
  "key35": "5FiRGTgbQZM72bq6PGwDn2Y4fzdwhcLwQgCUCGD1nLMUmCkXhDxMccu7DJ7tbVTPzgnxuRApXtDu1JcWoLTgTfYS",
  "key36": "3tpUANdgFg4ceXhrazv9gVKdFKU1kW6BxXsdXc1WzdBP75Nteghs8fn65UYav52Fp4oAjqWyrWxhzjCmpV9JQMF9",
  "key37": "ZmtDkGxSnJVynzgywjVTkbAuqmagAbFQ8VgKE7Gm98zdHdMHvWhcUZsDe5q9sRHBzmK9Ti5q6zrgRuFo3BwrfXQ",
  "key38": "41z4g4qnhbtnG44wq4YLqZAiACeaP3Z7MXpaaRvHGSCkA4vv54XzCzKgzebx3tnaibogtVEnCTJDzsiiCo1P9F31",
  "key39": "2g6gRFWB6inuPAnSWyJrQt6CcaVWMusUjgqXy3i9KvVwQ77DtNfhhwV5KcpsDjYkAgt4soyHQvtDuaEcrmY6tH6u",
  "key40": "3DAmg9fJVnUReMyPhxvX4bqE9i5N3vjtMMaGpwmfFHCaDqf8s3XXmrCW2fM6Ce3XAJUwK8zF5bT1ZLcftJuEpExh",
  "key41": "3TSUGN8ZiNSfkF6v95gc85KXvxjPZtPCYS2KsSFswS1Pajps3v9ivjuuvopxvEjwupC2FHR3YezDpyZaXp3at7B9",
  "key42": "3aVptsCkHUpeRXYXuLrcx6Vqa7vmLH2Fhx2DzE7fkSAw6wkcWAtzYqcR6vurKYirZYfTZsXKWeoPaNGUj1QCsXJd",
  "key43": "5wtzbxjxAtmckkvjRzwS8XHMgk2yCGKfpXvELYZ98aYmre345inhM9HEVZJLP8EdqfhFTx3zpbEXjX7WNhPUuLaF",
  "key44": "2EHsqSAPsNYQcZCHsAFRTZ76oa3NxjL5WFCdLriH27N7DBQziETb5k7AuDMRefCUcpGxXVcbtVbj7YDeENZzWKUo",
  "key45": "3mZobL4aK4FM2H2Fixx8yzUsxt8bxhS8js5ytm8x4hTxFuGXPZQWfTZW96E63TV8sj6januzH9oUs2aqnR2Tprz6",
  "key46": "4N32kxyhrzTKTD7LZKz2i1CaiDLGSco9AbfPEa39jpPQUAQEBSVVmCYV7nG7CfJ2dx72R8GeQfTQPAMhWLLDxJyY",
  "key47": "3TejZEARdKP5aWXJWnKeYg3fCe8oFmQpJ97iEQNkYSwZtd2Agh91y4Nykuy8NaZMaRdX2tgi5mH1pp6Vnnfm79mV",
  "key48": "2cKJeiGTfSCY29SHsKczecNDhQN4kKavwkPaCbKgoNwHDGV6AtJYBajS9A237JaEG3pEKhyZzkYM7VnnDiK3emvf"
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
