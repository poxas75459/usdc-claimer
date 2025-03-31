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
    "4ui3rsZditvVAm8mKkyza3nR39YV992cur26M4WVwZUjv3C3rNz8XNDF1Q1Ap468BU5GJaGVokdLre8kcZmoMKVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39YHEno4iy6WRoE8G2tqZi5zuMxgXUBzQPrHRK7aTutATGdapds2hsfznwLdLHsRL6ukw9Q9Am23NETGT8MHqS7z",
  "key1": "5aADWWEu9YVs4BEGxa1uAMKDhz7nHN3SSp7e87DUv1P7LCpcCNTUenTavjwCuLV4uKGjhZhaQvbWwiiRuWN4uupt",
  "key2": "3yfHmHAYqNTSwhJsmuEPVRnog9bDM5buzmixDAbWrm5Ws6FAwDnEAvVG3zJwopesdVm6bFy3JnVvUTv4EsaUfC5H",
  "key3": "5bWCy2qGyRqLNc2Y4V2BdYEPYArYCrRSsCDicWzSUMpf3QhGLyjPdN2zu2Ry6YnzQ5kRFQ9UHMq2RN31racSozxW",
  "key4": "4nKH3SrKG8DY1MWNkJXwUiPLfMzfs5U5oX5D8N9L3MDrbi2ATwe7L4nQCoeoPugU31kgA6EUEivnY5GyEC5FV5y3",
  "key5": "4oiTEoMfH3aH5C3ZCGKNgoELG2cBc3C74rmZ4NpDi2Q4YqzGFjPDXneFq7yEEhsPseTVTVexSJ4MtoH6eekzj36h",
  "key6": "317h6NcYagJU9paV8JLkwMGMfUVqAynGNr11bBmTjuAuEETiAzVAE84mmgYw2fDTy52QnmCPBmdKJvWiPrKb61xB",
  "key7": "3gY1CKfFUexv9H7GzJWFmbUbUVAkEAMX8WFDdwjey3nXuN9NK5FpquZqehX7yLhX9Rj18Mngb3s2EWXQF5cSnRLZ",
  "key8": "ve7kUrCCsm2HzNcSAsmoQFEbSBJtdfiHEwQkKAdQ3ySxYmta1QDCnFkVSwqq8kKqHQmHMMbzoD6GjGktyUKaV3S",
  "key9": "3pYwFkxT3x6MVPGmnLpBMcWwp3Fk6ncHZh6RHdmVhXAdR4c8GQbPEjjuhUHehzsT2SNtQ1fCCGbpjPXWRypwqs9V",
  "key10": "54WeLQ3zFWDGFXoe9np71wUFkEWakmf97vuGEnrB7ctTj7MPpAzC8XDLcDQMrV79jXRgQUKkGZEtwJQoVia9Hma8",
  "key11": "4XCByiRbMhHrsf71oNpV2gRVYi6bF6tbr2QQ6i9mt4SAz2JyoHLGN1N74tCewpXtw3dCgKWmYXPbPoqMVstTQwSv",
  "key12": "53hWTez9o2TBCEqFnEtJeUNJstYvwnococRzYS96DXmsCGiUZ2ePHqsEX9RqL6dtVYTT9e9uUyK2yMFeRqecTmhw",
  "key13": "4Un2Xc8aRriMmN9iLEcN2VGY5WfePdrxiNrf3gHetMFYpBMGB6BUxqcSGhTmodRQTbWQJSF4MzS9bxCRv8DtWTgQ",
  "key14": "oz1BU4NZ7nYFaeypmsV8RVvLKgsaqArm5PvpDSCNkNRQpCx3sALh4nfioiZFporB6EX7RRJs5Ee5cC6NMLiPrtH",
  "key15": "2iEt6gCvrajMKuWuwY1kBkEPBmp8NNUGUKNKXHhVFN5FR3WK1MdAcVvykmg62h5K55AG9GwFmf8hu6ARFnz1XimX",
  "key16": "4Q1T7yyTPgstZ81ZdiqNmuZVf4crhU3FE2C6d2AnzZLcxGiHNFV2o9ciMm3L8He2osyqVN5frfwxcMwDWQJK38p1",
  "key17": "5a1WrL9iUXzF9isCnPLjtSRhviQmc9ktDsNmjyex38ocC11CcUeYkG85HhvGHAbrKt31C6EpDuMV4XejfmDZTHdM",
  "key18": "3h4sPpmKz61TpmxTwV9vERskVQQAeJ61TpHLvww3yps5jdbjfKfHKeVwXJFC8cPujuvrXoXpdPvQQXKX8Kpyt35g",
  "key19": "28BYborgqEcxRezx6Fm1JvfN1cDRzYqczi2uvjGkNZUq96xwPNKnrepWkPTA4b7mSKvZQiA1EBY9nsRQ6g9xJFG9",
  "key20": "4h8JWWsrW1FDY9QLuVu3yTMa5UyPUWuzWCXSvJWLrhwPbPJCa8TWf6s128tCGT1B9SGpvTau8kFzAMDWRUZnnUkW",
  "key21": "7upGLeLdCviS5BDZy5ZD3YzP2XMEqvsPYB6WYGwe2MRZUvu1YuE4Edw8j3s6Hk6rLFHYSXWTU5zHidtpSktw9Dz",
  "key22": "3uUK7eB7xMgnDKZzymHst9Ut7mfznt7JeVYZqAEtZtWQKDnfntKSqFPGN7A7j7P9HADpP8rStu3HZpj1VKTrBi8B",
  "key23": "3MX9tugFfAPw893wYwz38LeMoFRNBHbqpC8g7GT3MNexUr7HzzjZZrMTxhHSGqq2btRDzLQf9xqX1AejZ6Tbs7i6",
  "key24": "3TmPEGM32cDnkwq7d72qCeFfiuzbxyBJ8AjZXzgJc2WQ6oraVNqe6HiBGwGngCRbV3DFLLLeByNbazqxbgcmFSDi",
  "key25": "2HiBLoHAVWVKQfKPpzcJchSdGUavyXY4m7GzmcJr64CQcgbwkqrtuHJrodePw3ZTjPes6gY7rKE5LMhEEsZxG9H5",
  "key26": "L7S3FGFVVteFaRvaLd1vjFtb26kaZhRADK2hLmwU2Yh84JgebQt7PRNSBcrw77DVCuiZtAKDVhzYFZbLupsmMx6",
  "key27": "2Bfsy47ZgzcQLKz2o5UnoWxC1hBd6zrPe6jhQ9YhRsMwb6tyiwfQuD9mx7V16LmzxcEedGk3m1dfDrNGfXVc9p5E",
  "key28": "4YBJoBVLvUYL1x2MAzZBRMriQPdzipKCs9ZnwdJxkzt2RtiryagmaoQAHgdd8vbbjqbFb4q6MPvKzbBCgkttfyBy",
  "key29": "22rqrX4yEoLQysGLYCC2ANgvNcwAWULw38yb3RVsc5Eqhu9TuzbyBsBTp332hq5N1Pf8iXqRLEFSpgYb3d41qSDK",
  "key30": "qaoghgYR8sK3qcR3qzCkTp5xwsuUTkTXBSXEBRgrKXwL3z4mcedebwz8tUjap91wDQusR25kKyhJrCgv4Ry8LyH",
  "key31": "3NyNCXrDWEnF6qQCW18euELH8ue6x7mR5Jkk1Uan4w7ousxP5kaVCxGVpZ1LEuVBV92zVemxavxKSShVQ3S1pDEH",
  "key32": "3K58iq9MKcaZJJKXbg4eEXkkszerDudJjsiGyszj1n8vpGWBcSFggZPWKaXQLbJyLwoNePvfJc6L6zLidFZZvCDe",
  "key33": "2UzxcKVHZMp4B6Y4xpc16JMSQb9Wi63sRrMxUVr4r8FjHRUZ5upxbdznQeA4C76Lt3mX2zMvWDqex71zDMLJ7N3T",
  "key34": "5yvo2wzSp7HnbVD6qkvVAoUVqEVNuAFQsYZhQ2mE6tojDU5uTinR3rdCCtDeRW6Yt6fvWtB3jrNUKo65vyQsZyj2",
  "key35": "5x9VEwDYkdD1kYDGL9xMFgektiqoN5DQuAM8g5HYq8JtFb1aVneveKm1ouSkjoxSzNk2p9bDKSM8J3vMMQyhJaCz",
  "key36": "2jeoi5nXTonfYq2bYBWxPiMMbVUwtCG2ywputaqB7Djw2SXwodEnggJfg7QCadsrXihe4oEyhNQrn9zvpNFLcNwV",
  "key37": "yKuYsvjmauX2zmdRztLg9uCvaCpfWX4QFqkvDJwuMH3DBsjUXFmZ5iDB3rAwNmcvg3qNdHBGnNjMtvPLrESkLWB",
  "key38": "4zCJBfDmbMQCsB13mSEHBK9XAwzjWeZrNx9mYT1JhNmqZ9Ux6gNi8DGnCibVe2BoezYdmjG2spKMy3fxKvQXsUx7",
  "key39": "ReMkFdoNDG9KNcPonLZEcobDXmo1L3Fjew8G8fQFVuFQUeFKrf4tq57JKLLFoseRgMNTYqRtF9y2x32Gj31imp1",
  "key40": "3XDMNGrDMhm2S8aPZM1uhQL68h7TgN8r43rRJzqnubeghhfgGExS9FaH7FvredRpLpVB8iEYoPYDjhehS8z6nP6D",
  "key41": "UDQYWkFvKeTz7wwhXpRcc75D8EacVEeHQA2NF6VXqdATMfrwguZVkuaYarPN9Cc4cCv8VSEkwtktNPA5B8GjSL4",
  "key42": "37BQBMUvtJcEv2oh2LhxPJodybsz2ZrEa7VpZUyJtFLGBxT1ptsSjQJwRCdDuznFiDeMaMvpVeCE4LupKwEfqFrW",
  "key43": "3yk2J1Vs1tc61uGQYHhVwCVAp3HGTJzs6EgEa13SyJkZUcaZXB6yHGKQwyBJZ3DUdgU357UK8QtK9B6dTm82Wrrf",
  "key44": "5ExibSLsFYZRRZm6a7K5MxXfJkV41E4RNfQEwT6LXqZWynvn9WxmvZxLgoFmtp48dgmekJvvebfmg7CeG8uptwnK",
  "key45": "4kzuGzEkYaauGnV45v6rxohctpxfjhv5K5ERMx5FGk7sFQkJzLr1JsMtwsceoL5SVHg3G5ToNj2WgT2BbD6VCqir"
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
