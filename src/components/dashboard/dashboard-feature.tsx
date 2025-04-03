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
    "31dcwQxTCUo5ohWF1mdm3w7qFFy6Pvveoy8QfPaUH7mnMS494JVgWCkiRokmVDQ87mRr18EwmAVio5aB7VzRjfHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZuovuwYyyRq3CCEhWrfEJqThCquh13KhJ1qz771gdg31MKwQJzDwBcQaYuc4Ptp6JV6haNMC95n1g5XgxJkFq16",
  "key1": "5vJMTZygijPcctMBiU8D8c45bzdR8XLQA4iGguqokDrHyVZ1j32GgFjyuDj4X9rWN2patKvxABbGBH9w71DsbLYn",
  "key2": "57BbnxBVg3uEgoW9bMYXUWQAp3X4gDeUmrgWqhMLC1wF3MshHemjvdw15TAjybiRaLLRHxm1swyoRoTB9MaArunK",
  "key3": "3jkJgoaVrR2c6HX17Gr6UkMT9npruy1C7NZXATHGoXr4qUuwm8BvA6pdZAGigt33Uqj7AHDKn6GEAz6tdrUEvLX3",
  "key4": "5KdJ5Nq592ux3McjELuqezfyhDikd4qswgnohgURoKxBcVSgMJyaMopoPfC1g7kHAbJh6raaZ1iXJCqnS76CRtoN",
  "key5": "2viUBoQj5vbf3qZHPKxtkxYvZ522P3GQJugVisqbuR1do265FNgp5a1W49r8hj3BHqy1bDSvJ5zYpoueKJVKEhZ5",
  "key6": "2W8dFTn8dUw1vELR8nFbRJqPdWtvvrWtVyVuSfsSqVU7s5KRnRiRdmkFFh9DJCFscRTKFDwhbpnSt261PeWW9E9u",
  "key7": "3y8mBfq7zuMFRXEjtFAgV5HMtFfVxhpY17ZnSq1VffRMGruabUpw6ZFhRFMegV8iKN5yZk8uWT5D1JUXjDYDQMCM",
  "key8": "4iAGBxEGGcqv9yHe4jN8CAWhzUkGdafEyukjcNjcFrUoF8xuKWTu1YEmHj1zJfpW5K7HVBCGuwtLpQm2w5LobrYv",
  "key9": "3NdjgrSdH1QdGgsGhGMP5xCT7WjCUVSYgmWBAaWMCCNd9WsMA4jfgxb6EAgnHXUzLcVCDeFdovxaBCcWeBeK2ou6",
  "key10": "csYh4FmsZPJCodiuM9keMbF4TwidMqnLVSH4aboyZcqaoDM9uV7rYbqvRTHUTJukPBEjkPftDLPNPmoU8ottSWs",
  "key11": "4bgc9P55D4NsnNNig1AcjKmSFpX6DoqasXzuz6w5AGgn2uCw1mEdvV27GcKc5SYnDELg4g5aRi8kMw37eSpPmt4",
  "key12": "37RPm3E4ij1aAoyDAxKSKUeZXXkrhA2cyYQ6UN7Wf3qTYZB7ubqgWRR4mynGxEnDYcFNcAggY8pBsfJ1ybUbnXct",
  "key13": "2pipyDhuduHrrHn8uHwq6HpDPRSq3SzuZ3pTxmNaTWZWxjPxJWKp7WRkJMEwRBo9vXTRTUG3iDaSqnsEjZtkLHZg",
  "key14": "4uHUUN3FFN9ZH9S2Vxo9bhn4omVkhZMBoYESgAuHE1HhjMAE7VeABUNfexDF7aoEHWogdJkxn7rAk3TsPCXaT1no",
  "key15": "4gg311BD7u7sYygrpdKVCcxpbWYpdD5P5u2WdbAVpQWEtyPHWXgmW2qEMNiWtY7ustfFja8nqkPghWb7fkCtsGgZ",
  "key16": "4mGqftjMUWHo323sVFTwJq7BcDceEQjcHaTwDKCzitjHUbhecfaP9MVUxMZFCRh1QGXLvxVAwYUFRwxYpFTz6a6L",
  "key17": "2SUanGJiAVAuNwWsD5qzChzz8BCC8x2bPga9qnAv14zYcWSqgr7MjFNnG4VGCnTWUymFE9qro2FfcrJy9SnQ4Hv5",
  "key18": "21UKitAwZCQbVuk8xtUBZmYaqDbbwLRGRBkhx14ETB1yAvHLGZLr3FMdVDARknJSEiGiLuymAw8Y5gSm1PyvXrVW",
  "key19": "qVm8DGB7PzTioK4P2bhgoJt3rTJfz4Dxx84TC8QTNocntqkQ7fqCeA5XytGyw6UBnEfFwMfM1V5T8JFm5jxFf4a",
  "key20": "4XUDbtfxZmWHGBNjteLzWKy3m1nHkY6XKWjLUvefiDNHtSDnNTVmHXb5YoSP3CcvdfTR715iAJtCaDgsMckuaRQo",
  "key21": "23QJbE3WQwV7dDFDAXr2sJ4XVd88AMM4hkM8LmLoUdGv7LEfLmvpVZsqekxnqxJagtmQKm55XrStuxyQJ3P8rCMY",
  "key22": "51KFRht81eMuvbpAPnuVvra3i7ECDCRckEs3mPE5yNbdwmaYN1YNZYyLqzVi9SrNoSrX2SrczYqpALq2XXsA34Dp",
  "key23": "5sCdo3v2NrtUZigjRSD8ZcqnwcexWb7gL9Aab5ErsPuHePxf3V5NCwKSAS2eV1WicLX8oYjaEVpg3iVhzvnmxQzQ",
  "key24": "5eGdpQiW9dXXVcbQq4TfG4uWoSMKEwXXsferkhvDhSaxj3rY1L9abExKykc8APMTixofgwFftG7tW1vNSwbNEp1Z",
  "key25": "5p3HVzKkQdQkXKRRhXTgrkkdya7Vj9oYKYkUbovkCsYmL35N1TgxygiyuoU5L7LGV9NYBqLiMncoAF3Y4wcYbkZi",
  "key26": "wSmqu1bcwP9YaU47kMAVjYbceaZWWARM4gxC7AsWfUxuNYrmJxqCev1DzhF2ekGb4s1yuX18dcAsjDr7P9BeD7R",
  "key27": "2NoYSZDgCH3FCuUrS7UmLYQgg2prX8ZjeqRZ4aZnp6ovTXj9XugwdACRPmrVhgh4K8pTXPtS1v1PXH5azsyrnFjG",
  "key28": "5tT92NmJR1kuMzY3hfbk4TifLBYRBPcLud8NcwWLbQHGsRN43ojAr4xnQFjuDVuUcwAYx8uibKR1KukPaiYCvhTQ",
  "key29": "DjtRFtYzyjDxXpvsyCp73WeZDdcpatMFYFb5rs1vsJnsFVzmAs8uQkF2SpEkqBuDUp95V8S4hpRSxqNL67oCB2D",
  "key30": "2uX97QvJHSXJLc7n6aTvbchRfJigyfTri4w3b1aFvvP7QJzVrBRYaqtvqnC5ieKyeQEKGcNHfUmsN3q9Xy5WLXGQ",
  "key31": "5NBUKNSVemNh6AprDoDq8ovK744xk2Anaj5xKtnkjmFyDk8GwWY3bBDdsSzfsZ9jkwR8v3pidazJcWhprHawpwRa",
  "key32": "67C3CPPmLhm6XoR1Z5Atn6TR3pY8EjJd9UG2J6JCPTqnLRmxFmibaJecCJ7uDwFvpkDdkkZFdeyNyEYAjJYcsbHU",
  "key33": "3UpYn9LPxjV2iqs6u2Wz7kKedG2zCkeF6JiBJNYuSFcsQYj7L4A9Z6CYDunJPstsqoHJJ2MoTZ6wxhq55GyyNR22",
  "key34": "4R5X3EEtNQ74RSw9zuYXB18qY5K5xGPeuv5SajqNYxK6n4PDYmoEVJqnKxYcgTpaULU8AXMH7m9k1iJrFprNFV8k",
  "key35": "5wkoredq6TMy1tV1XzH9rkwc1hwvxbK5HHY923955aikXFxH7KuLF92eJ6homXZvBL4pPfhbZiCdu333n488m6f5",
  "key36": "3TmDHE8pU2s4gjZLTFLw37E7jAnKeYpgkJZMrWEUnxtaejffEJugCd41v6hsJsCDzFr1rUQa6Gby5osPgebDZ7b8",
  "key37": "2CPPuQMJVtFpdpHK9Lr7GufQcRkAj1otyGcmWzFxzivSBmxBtvNcnJMBcTMaqcYWMdBZKr1JLLnABDSrgJvVCyoK",
  "key38": "4kwp412oCrnfdBKsmGTzWx8bT94jvCcirXNHc39Fm64xjqMDsVn4uL2sfQaNr4VCNWreoHr7e3kPHUQXvtSsE2vV",
  "key39": "2UnZFe5nx189vYpDcWHQeXcG7sabjHUACFehWS1hEDnnnKhH3igQL1ycS1FJ9i89PbtxPckak3TZeEqbQVP8SJvs",
  "key40": "4boeuoik9C1txrKqFQUeJAq4mP5ZahnGAyCmxCLU4V4Eejy9zuuvGmqm67hoCq6sWuFjnhwK187qzgkj7nU91tXU",
  "key41": "3e8T2kYwESH2G7cfHbDpRwbVtVYcaSjRb1Fo8oK1cL22MLHjgnMpfz6vqN9jRCLZ4hf5Fc9kZDP1eRACTbcJEsoE",
  "key42": "3M4wvmQ9BQrttMxQY7r6wefoeyWLWT74if7HUEYZQbEaFpMSGUbiCEApg9Rix8xGdnGXcSAFSvDZWZebMhEVwz5A",
  "key43": "3c1tqBCjKWSSzjQv3jicAjKRyEqeubhhLyzdQbLuUpby9nhDUDiZ5FvT66Ak3t2bVooGWTrP112JfWiL8N62X7tg"
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
