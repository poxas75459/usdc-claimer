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
    "65pE2QFzDjLubSnuC9xef9L2JtX4pPxnHncPXcomHay6sKWHBkaM6VVRuqAtu7yNGH3tdKgQ88k9SZ7XJrDeMYAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26XAMPeEF7R5gZiY5LNuqFRz8K3R1atfVoDwMTaWC7qXLP9bJygPtACwh2n5cYWfu5GrYMQMnM8RWyvcZSNnWYqs",
  "key1": "2vRMeo6BhG6nXkwacVLSJDTdB1iu9KLQMeuF427ktAzXAJBDV1w9NcNusDXnQKrv6oocpEzqr8ryWksPMngV8cCF",
  "key2": "4x8B4t5ZpfjLQ4QeAk4RWW3WBZf5y45scUEn29zGKrUnZs3cvamuBMm9DPotpL4m5ubth87KeMVs2MosavrHhNxy",
  "key3": "3g72tDRPqbScTBh246AhqLXnput92CnjxMietEcQrVQTp3QkHy73dfvcCxNn1ZMw4bYza7uEXkFoHkhdiZQfxEKT",
  "key4": "sYRfMeYg9dQYC8BtR7dG9AFnKYn741R52eTZ6eQsnr49pyEqzLWRjWNp38P57YJ889YPPKdEPbtw8XGatzqKJEA",
  "key5": "59vtbeZeJBDys4ps1kGKkXBNtaXQW4s3u8WTU5vEExLFSDkrcv7W9Pmu9j2upL366xsCUMkrVcVkq3dZqopcRdk",
  "key6": "5HUfkzVuuy32ZJzRnetuHh8zoWC6n4wJqqLgepTNvoFCLWg9eprF2xFEkpAT2EhciKk9UdJ7E8dR5SL1BT98h3MJ",
  "key7": "2HmmeFT3eAgNGG52uW148SWs4ZPbodjiKiP6Z997MBAzqkAd5TwDiE1TMRKyC2YLPbUetW9ffUo7bVpky5HeNPg7",
  "key8": "2MJq9qVkRL46UCyvih2pytwExA9wvJWmhFJbUtDdZRiHiG9oxfsGpwTsWKFTjPPr2S3Nisv4iSieZ5wFzd7odrLz",
  "key9": "4oNazDeVNBYxpc9JWTUpEgEoXkrRLHt6uTMdWX1DuFtXBKtVLvKHtnzTzoFnJEr4DJtmt2kXhn8aRby6AsSrXBm4",
  "key10": "4cPiZgJmBQb9hrm9K3wtVb7nd9Q94cGyKbgvGdzP7ojLGDmpMKrYbv921Z2yXv4qo67MEDQBQG5Q5A4LTMmmG27z",
  "key11": "422knXf5WJCLiUo3TAzQARqqx3WLkvpnFtczCozZDr6sDmPUXJNQ5TMREfMsEBSEWQiF3xi2u4Q3P41mrC2gsRXk",
  "key12": "2frGSFteesChQe6JehHgwZXZfRyP1NVLS2TdhtaP66WS3PXx2b4913Rye87iHqFDFGR1n5EjCiJRwJuAz4fCZnQx",
  "key13": "5veDQxYUMpfomTDffzaY7Wqkvd4Aw9z8ZVfus5EgFPsVGA3VUoWBEGPWxKTNNoMZJdTxfaKh2UfMZUSZfxL3CctC",
  "key14": "3h9TB8LAQz4Qu3R73KMjbzLe2Zz2D7zMQ4xt4uDp9ZaAVGqf4tTiJsKoMaVEkxKfyLSJyrSLJaTFzTR1HL7tYD5H",
  "key15": "2yzmVwP5muE14U7HBtCBqVauCTAmZTNdTZ54sCicF5LKQzfbx2jFn6nQTkZ5YoyeSgVtdf4iisXUfXhLZjq5HjbZ",
  "key16": "5ihBjQ5M31PjUBuTx2hpmLGXKkEBW9MywwNSrXqk2oFMipZNhSKYHGNzHihFzrUcv6Ut3raoXQoiEGHa53p71dAJ",
  "key17": "34mMemgeauzeVaVKSLGJcTapvQq9nM4WPupEPZBX3pLBrdvR3xFDGz7cULEuME3haQdJWghYaxTnFJWVfAsc9UdD",
  "key18": "2DEgZ2oofiLC7F4pXoMy9EW989cEyqcux5PyYW15J2gfksprr4Hh6qGP7qpbAJ7AJnhWUiQFTqUE4Y6s4aKgs3ah",
  "key19": "jFSt7pMYY8NnYXbAreKhzVzyTDL6mppeZaayewyHZhkLUwRbeqNcc7JqwXSgWsByFEhHgHR49YWfTbw6aduyitW",
  "key20": "3FCWfKdgFv6vQG4e9Y2bc54RSyKQwG5XyoD475R3meGbLxis6AB58MBybv69NFnCCy2ZVyPLs53C4nmfd7vroUmb",
  "key21": "3LHNUEsLrqrJJ6heC2KZNSLx9R1DgEQimjvS3QW8UmfY6ZW2e6CfviipGQsFPdrdJnr7BLx9WJN5fNVTVhkazBVi",
  "key22": "5ZnEEvDCvcTwtyH6Fmpxn3zyU52CBngNhu4hLYaynpFMBteioErPDpMstu4y1iE4PVz4wzJyBQVPS9pXRnG8M5Lc",
  "key23": "46WhePsEqCff9Hzm1gmAbJjYScB1YdbgtdJWnPqtb4XxHHda1nX6Q812kC6JjrEHzbBHB2yK1NQVgnbLox5eG4py",
  "key24": "5seTtfVAehCyDJVgpLPsBKiKWnkGgyeEdKXa7vLVDjN2mkNBuwyZkwVbWYPvuEuF4PPb25kKyNGboMaKL4rY1o3Y",
  "key25": "2heLpuADGhGNiZyxb3wcG15esoAeb6QETFkkHhs83zWwbS9xb8WLXFfCkhCYr7jmBJc57hczK4sgc1JzwoVG12xQ",
  "key26": "3DZSpEoHjsNejxJJ31iiE4U6FPwfL4PwTZhh6gy57BMqWK5UFQtdvTdLx8H9pRmdYPhA7hxZjHjEBfFDtxY7Asvt",
  "key27": "4zTS6SncpUp5x2naL6bR4gpJ1K2J8xNmW1aE5jd8tkxUw9rBUjQEjqDPvnbVZjvbaxSe2pKc44WXdBQosR2f4L23",
  "key28": "5fvCrh6yM1cuPa7cquqK6ZYZTxVdfgc3QS1iMDxQpfwjppyhrrjyL8kWwU2VzAxaoLxP1zhV6XxNgLeSb3ru4e91",
  "key29": "5acSNADmPtKytuhW5kubhg2eHoJACA1kXM4Q96LLzbBYeFRC2c1jFKa24ypXhcGNBvi4JXjVoZhVdmFdNmqnaG82",
  "key30": "4WPL2HBmizTycUEZuJCL8wvRSodfv3vV9CAyUFqXgG3z14nqBjnmYAgapuASnbhF5iSegiPkxozWji5STM4GUkcj",
  "key31": "3JtsSppkbjYzjZahwHPg21iY6hv8FAd884CV49B4wGTExvLSxZmXRirgHTxto5fLRcfQsrZWGNyvVTcVRYqfKkqR",
  "key32": "4ERHSmArChokDNL94uBEmkerNDL8eai6jRkY82A5Jbe5518D2kEHHiRjz3h1R8WFP9CRW2d4TxsbJ3yBWaqHWEg4",
  "key33": "4TfpLAdVBqo99AYvJByz3vPsWRB5bjjFaJAVDSTr9rEkJMwZnnPV3ySEQ98tp1rsRTH3gZw8gHSug4ssoUzNTQyH",
  "key34": "4kqCWN6n35oX44ZjDTJqS4XaGLGSPCVTynhSEV3DsJTRVzneoxeh1UUTDCTvFR8GSfPsXfF3od9QAbHz1ScuqBMR",
  "key35": "DUNksxokfhVfobnQQ5gu7rg5qiXM9A1FBjVn6qYAbkv35UXqew2FEsQmZrEiEiRCn77pi4DnE1WVe1fwvxBhqNr",
  "key36": "3ppjEPYMPsUgYu82jwgyNwQj5QMrdtdNSYzBRTASYA3NHWQWP4SMQpWZdJU8cWK1Nc57x9h8T3ZMax9i25b8ygn9",
  "key37": "5Byc4Vt8WsKd5sECqJ1gxTiLEavMg9wZBQJs9wW7cNG5znnUPRJBwyGDqhmZftcPpPM7sJ16nJnp3FBQXfGetmr2",
  "key38": "GbDeX2hcujYEt3BM8An9Fdwq8AZosTW39iiC9P7K54npFpibcYsTxqjrGgNEU8eSu1dmKD32MgmnpUvDzgJa41r",
  "key39": "3CrsDMbdNfa6R68zYXtkW1yzohYfDPXMCqwBzYYjkmsGCMKPNuY5cGcNTk1NrDBPKSkDVVnWvRrE58fSofavBCXN",
  "key40": "4WVSaf1mm7Z2sTEog98pbQZkYfnXyVyCouYc8ozyZFBZamCpTbdECpmwsX7p8fCvAArFsiPLYVB8H3EWTQtYZVQo",
  "key41": "3smMAaYWFGgaGxj29ybEC7t2F5wxHbXSsHXbTQjgrAxLCT5ZjrBWMygzksqgFo9Sp1NAoHtM1EuiSNDZSUwYmabr",
  "key42": "42W4jg91VyruzLVZWzwHujgfCByY8rEZCmtbfe9A2qoPqNbe4cYvZSNJx9LWJ5WonToWPCKVN48LhETUTo7QBQm7",
  "key43": "43W8SmMMC6GzEihytfzeZzJxxCvTGYw18djZMPoxuj16mrB3LhZZBKPuaUaLQbZEGJAXnEfRmQ2S9nGoxTmKv4oB",
  "key44": "27BdSJwCxypAq1fUKjpmX3sPNuGp4hcUJAdKWV2Zq4mcJwMSGzqEZc1XR3z5Xm1G2C6qqiJPdRHCcNhHaPDNxqXi",
  "key45": "3GUXonkiGaW5Km7RsUQRQAaEGvkWxDQ2v4FV5xTJZfobsVWKRZieb2LEFGyVUVKBXkS523sBdi6usB1RVJFGP5XT",
  "key46": "HaGrvv4kjRuDTvN1WQj7cEXFy8MAgSThcjKBoiTwDAZ1A9YFy8nurQJwBRoduySvPyYPSQQPm4TKEksmpGuwzEC",
  "key47": "22UG2n1jzKKr3TZdmT2KmW5h3CYu2sSRwNMndH2sdEDnJL93iVhFFo17t8URKjHhApG8eH4iEHQNFcHfngJUNRg4",
  "key48": "3Xf4QDaTHqoKX4tcRoGGuGLLQjc1PSydZcTo9K1UfebpgxYuhECe3FeZeGdBqYxPPrksocBwfyvV4u89sRGHtYFa",
  "key49": "3bMqwMEfaTEohkUnL7v37sX1nLec2LGBm9QBhNxPk3K7mtz53LaUWnC7SewUkwwuj8NaSD6Hs3yh3jagAGQjKq12"
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
