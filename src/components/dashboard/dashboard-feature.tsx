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
    "5zfN9jcVBBLpHrHH46v81d8nfNbqPSmUXGnr56QPQVKLq5M3ii2W8C8YXkbYYHn971W7dewFeNkN9iEywn5h6tqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EMDnpiirwB3se81BCeDhucwg5tScAG1uN2sg4fftHrkGHQS6obbHbKFjfc9UZF5Z5KrotLinjCqC6iuV97Z6CPo",
  "key1": "3G4seNuyfwQsN2d3zMxezS14vBqE2ahc9mEDUNEo4bU8PtscMJ8q1EykiiFYrKDbjwuNbhn3EoD1ZZ3QHeTiB3Do",
  "key2": "5mPEJPVf7X3yhgsGEdVbX4QhVVsDKm6F1WAC9q9od2TeENyxdVdrqCkGVHSJLZ6xxzEA4hrbvduCpQaitbNtsJMb",
  "key3": "5rrVeyaqGnvwCwFoQFGYJ98xvK9k9ivdHAspajEVv8VxSvPvsh6qgEGkCcjHLoj1hwf1m1kBBixRJ2svktrBtmic",
  "key4": "4yEaoXWf7Tgp4VZuAmvn8K5ofmeeSu3qRyLDLk3QzQasq8PyWdXgcDr4cqGoJrdiAvFECQYTnzNhWsNnsVhM4sKA",
  "key5": "4bD6vVKCjsAUN1h8fNzaW7iBDbWhbQbmEJyxnVMDiZr9SeNq6Xy77o3e1TrVeNHjwdwyJQSp6CtPwtHmqqwrbXmt",
  "key6": "45rfJkuVjm63esdkRqth9gvvFYPxHyxdp79Dwqy1aK2MF8ui2CMmNEH7XzsQ4PzYehyKATSZdKTuud1LNN4rLoNH",
  "key7": "AFoVQdzPiVLNTZjc2b333m8hVpHq6rq7jnPaLFC3PGi1spr5bVpNq65i1SN3LqJWhCeRiuo5g58fXbLirqxGipR",
  "key8": "4VF9kxv9GBXqxqjr7UwbDpVDmzMPcNsoYtSRGWtSYTRoLT7egPjxZTjcx7iCQRSmDmmGw2BvNEH5Xn19Ru8w1a8h",
  "key9": "3N1iN2k9pU9CRAXJwxHm5KFbi41gALHamf6GW1k6hSM7hkUKmmJt4TDjjBS9EPCRSDtnEj3QPwcTjyuLdky8LToW",
  "key10": "67hQvZ3U1wpPaDmLiJhp9i9oJreGQn1mefSzn532jqPyNf7h2qVGPj949p6QChgkA98u8cEHKzHYrvrFb5U43TJx",
  "key11": "2HDNG2eJPynFX2MepancYVEZvAG97LsccqvY39iHDVgPytgJCsnizaZeYGv3encCj51f1bXxQYvyB4CPTVV2bGFC",
  "key12": "46paMmCgfXCMUtb3nKCt8brxrGXyiYdS8GcWoUYmZRYMLPRj7sbaBZDZK5MdEqxuqMTnavnZm6TScAp1rJBwbLSW",
  "key13": "KrmuEe4xsJADUSxdQXRBAn7mtTm9LD9uZ5xXmYA1YpYoGEEyc77dmuRxgJd2A9co4GQ9xweMnfMraw3sUudJYBn",
  "key14": "4ftgfoztn6AceAjNJSwkBVN6n3KKbnYmzh6asnQoFXNbo4xY5yrJPhGL65mBhiSACWxftZFsHC57phsSbHHAk9My",
  "key15": "5w2QXLvZv4f8FR4PKu86y446v6bVrJa7Upj64JCA2LkNES3bQcdtzJMcGVPPKkPiudQf8equkd5sUfCHTH8j2Zdf",
  "key16": "4ogPhopTud5MTLgqTDQT6SZDC94DBhTURARD7vNhZcvk4fCj2bMzLJkaF9xaNdsELjoyXDUUNqwGFmYJbXA66r7E",
  "key17": "5U7sPVNfihAbCG2wYHQtfaovPTkXi3yyBLVgh4KyGfmonGTD7fwuwXWxqnb3MThcAiE1xWNCuEtHn3rye18cosik",
  "key18": "3xFnVCzGeUGQrg54qQaz2yU7vqAuLtjG29WKA6dP1qFXupMHB3VwKB6iHopx4t2jexsmLYvvy3pmB61XLPUB3h2N",
  "key19": "3pFmC51TBtxL4hufp7XhnpeH9gC9uEK87ZS97wRnuicU2R5nXLwLXR1B1uNvhiz5mkDtW87bzAsRHySioQ2rvc55",
  "key20": "u7HJfRAPoFWc12Bi8dMiHFE9nSXWPvU79WATcLMV7eQZaS6KF4Xg3MMbj7edfvbCiTtJto7bFAHETs3DZntKG6o",
  "key21": "2uwJLXcmZhSjz21MUi44SnaJmxvmMfLvhmj2DUfXwdVzbLRXeSd9yBtVyNhkiJ6Nq9C3bc6r8uaaU9afgjjoNJse",
  "key22": "3565P29onUQt9qq7ubwBSnP3upg4LMNHo1mVNpyyHD4jXiMB6JPJVSmbApGq1fuAeGAe8L4LMgbtXvfnrSi1K6sG",
  "key23": "5ikBxKe7YKZkrBKe4a2b5aLBCJEucg8AdLKqb66daSmtJ1mhoGsJcmyFBrJf9YJnSuAgadcJmtK5LttAJumnLnH6",
  "key24": "3eubTHaDi7WVLoiiioYVmY7yS6w3Tn8scPZgsyqdtayJ9PSsHa1nYF9xdk3xzWo3r8WoKbnWqz39qZZGuGaYP1Td",
  "key25": "5h4164wTk1WpbJreNyfHfVGRKQ2Pc8tv3Joqf9PnLRyzW3oUfaqbXPKFjPHi1M9jBbiHjmbQUtgGjckU3d1FVkEW",
  "key26": "eZYXb2gy1EBntEtxJVUwPJA9Dei8Rxv4eJcCVEnnW5BmPCGXHqoRrN4X2Fm1Wyy5zKDygotmjBMSfgHPQFnCvUp",
  "key27": "2uPNt9BjCDCjXz8FLhToqrfmrnd1qTRkbh3uZ6VwLm3CG6NdZL15mQUHhSSVa24MHMAnPcvdybM6RwTdZKWfmtp8",
  "key28": "4R6h6R1Ru6vFBRLgAzPX1Ytb2kJQwUBYsgZYLnWGaHxy9ZK4Sw11LA9a913vCtJSijPH3GS2rYgULy7Jd8qfVpg6",
  "key29": "3U3jQBNcCorMxrUKaYSj3TQmrnCrphsP6KVuJMs4hXbTv94c9B3NtyT978T2Xu7sNJfUL59Yk9zwWYUbTch1n5hy",
  "key30": "5MgNmKv6YhsbrBqjcH9hitpy8kAxtQEBofayvcUVf28KuKnRn4yK8o6rVcmmjmZauv911Vxw1LBYwhbq9fzf56XL",
  "key31": "5XCihaadBMDNPz63vYUYcCBaBWhx3mydXDMtjkAaRDwsHqgdmN77G7Tnb1wmBdjhte4x58nEr2xsg7PpjRpUz8Ba",
  "key32": "3P4y3wy7t399KNmaejpTbTP8hDKE47Hu6j54ce1tPf6jjrf9vniExCF8h8pR5HStg3A83fz868YJjrTfp9WTJ8mS",
  "key33": "3RibtNnEA9pGoboFfav8r3LAvfnwr4TcmedygmTStPN1NVuSLfjhejtpWRf2BEhy2kkwUKYzzkJKeYEqVFwSTpfj",
  "key34": "5N2Vj4k4qjPezMkGABbjBKwt2sZDV9gKCAUUse2sgK7rTkKnKKyeTNy2ChWVigC943TV7hQAuSG8kcUh5Pgn92cN",
  "key35": "ZzyNnMBTrfMFvF58KyKMojc3QyGGEafVMTLNUeEA265NArf6pSLLQ1FCiQDVaBsmpQDt91W73qj8HPMt3byvXb8",
  "key36": "2sohoxd8PsCG9NFPnXdBJeYimxS1owEaTyPiKSciDWKpzeiejGgTLqk1xaAn5DkYkmEd1eRjukn2nUskknZf6wr3",
  "key37": "5WM1eRqZDBLFXeFpwQV6EHALGPFAwu1A9KpSSwbSW24b61EsMEDPegoCHyDTfR2gaeiwNnUu7338B69FNKStu4nT",
  "key38": "3ugg5YZk1nRjfSgEUKajsYoefVnZHgRELjJF6FNHvCN4hnBF457KuNgpTTxS7H4GfWEufRumSxGN7EoDni3RtfhY",
  "key39": "5Awy7FWaQJnPD4o1EST5Bb39BHCNP95UTUg5ipsi5nCBsPZSk6nmFQ5LTp4C84rUpMikkcNktmC5s2RTP17m3Hoe",
  "key40": "3SwAX6VL8a5N2Lg1HfVmnVa1PDvmFDKEyLae2LkfibkQfgD6wKRipNtMQSVnG5NYM2pyLYhwFvQrvc2V4gw22DMC",
  "key41": "2VS1BF8ohFEBEatjxNAJBRnUsXteVnC1vhBWET3eDgDLPztGryW2fibpe2RyUcbmr5GVAo1eSaF5MKWqL5C3BX1C",
  "key42": "4QfVAnBfV2evHxoeH8JqikzKURMji98MyVqdaE28NtuEDeKYH1hkxB7XCnNbZPG1BwyHtsXitcvX63M1wSqAMZ7y",
  "key43": "49ieH1yVoyUQMfhkYdoPC1X7Vtq3vP4FEBafYSKn7PXhAkrZ9jFDRfKaDEdrGHaZvAHQdi69JbsVdMf2T1cTWRVD",
  "key44": "5BfjuZiBcNLi6BWtn1wzEBARKpt8nF4Qrh2gBf5aiXQ4jL8kBef4wpSzjGostcqCaeeEuSmEWQLfQTkRHG7sKYiN"
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
