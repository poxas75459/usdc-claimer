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
    "3wT3S88BLh5grZxjMWyvkfii3ruRafEbJzL6zvohpu1X46yUM4xUWW92Qf53YFFfzUPFPD1h4N2a9Aj91U2X8TtB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JwfXzaxZnRV9H2KZ3fH9y8m2oQhgoLcmrcaB7iPx5gGkUJ1kA8yAQ5Hc3JHFaCzjB8NKT1dLcMUjf9LNTVCwA5B",
  "key1": "4wAjHEbtGLfZs2V2an6kjRMwX5ikyM27Vb5BH6vzjjAphAuFevDFc5XCcPwKqMT9cX3DWF4y1Lzc21MVoygefB2z",
  "key2": "38Y4wRrPg2o5yaidv9C25RYd92361Qj5DeFhSnKsff4PZeCtw9pxSojyUwRFQ6Qr2vZSR63V5zNuf69hgduM1taK",
  "key3": "2vDDjbce5rp4k26v2M6ggvAQCKP5VZHkCrmf8YLzHpXM1TAa7JPvADPXZcz7AYc2UP6wgUDhs3C1MpVBFJAryrdr",
  "key4": "5P7MyeGk29bGC8gPJ5Xs341yY74WDri6Z7yCx1GDBiekFmRgCMBWjx5TzAaHtHefFfY3dNQQ95DfTzHXHcE7Azzf",
  "key5": "4CFUQLFa5dSqMX59YjAoDsfyra9ZUoUJDbny4A5r8H82q4byuQ3cZyxAyUirL4LMBoHMxtjEB4AM8rCtyasUowzi",
  "key6": "2NwfiuVB5Z2E2TzYAJwonYLf2fLrHHMHZjyS3ED6KSJEfqoq77TPNXZyTgW1BbKZsPr9fxbhnBo5W1rnyBhEGhGY",
  "key7": "5H4LegksmZpmLpF8kB54ZjH6ZaDCWmS67sgiMC4DL8WSLM1eLSRLM6pbYhsEM7sV2p69EWmVJ3yZijhc5Y4EQrR3",
  "key8": "48mJT7HFB9rbnpj1ag7NFVejERVFLhm8MGag3VLetKMbQzcWJoXkw5L7oXv44KCLXiqYrPiZPNk8pMeLrJD6y124",
  "key9": "3HQSHtMSBbX7zdrF1LhqJvSvNCwVW5SdeWwScmgngUEomcnw4Yb8uRVqNGWxr7buRA4uXHczkvM5c3xcHd8nMhu",
  "key10": "5xssaFG9Z7k6T79aCKSrKwcX9YbRp44fs6DwApRUCpNWiBpYPAtvXtxazc9kUSVFKP3ZzwfXxbSvxaUM25f9inHD",
  "key11": "65FJnxi9gtqwrZbzNutmH8viPwc1Xe2RhqC45zgNav5Ya7J8pikKsbANjv75kdke94LSZcc5nxck7pg5vRXXx561",
  "key12": "2UxHaXaEsPcV3cLytHjPNuTkaBTdVV1CQMNFjLJ8PnyiBJM4KHzof2LrU3gaf7tinRXCmZW3kW1k85KKDr57B3EF",
  "key13": "2zjHQziVJtnZAP2nwQRn6aQSJtVgirwEpcuJRGfosBAg7X6JEfVY6hbJiqDSeWHUcPsMqGN6rr5Gnj1fcHP5Y8HE",
  "key14": "2Kv2ftHTEcknUC2CtjrQXfx2y1esaPsLe6JcgpYgRC68V4HP1vV3kJ47bKKczjFa2ucXMVY3UTqCNNN35YCpKinw",
  "key15": "VqT3Cnbp3xSHCQdBUYakvTFaj5JRw4rtmLXFJwB2M6Zvba6doDdMavhqU9SwH18eYQQGtCwmpDkwVkfAaYktQFq",
  "key16": "48gXAWG73NiMKvuKV4S1kaRZrumjFsXM4okdMdvZDAgtdRGdbEZpH13EwT64N2bdXmunkwFWh2R7xtEVupDWBhk9",
  "key17": "2hrU6c6dxGufzdHqW3dDEDxsAgEGPcPHxLNgDCHeactefrNgFrAsn1eX459k1ENfGvkx78mcdXLaQSnyNihupeXH",
  "key18": "2nHRUctG925uefDZ9221dzHyie8J3BptvRUJDczBsDi7aA4hEvveh8MbCsBz35T6QThJhWET281UNRPSCZ86nQBc",
  "key19": "G4jKwcWGSndf4dRT4csY1ivVAPhu711eva3a2HfCUjpPJUPdtBTZAiw9daRKa1NMdzDbM8pPwsqMZhF4GFQYan7",
  "key20": "4ekxwYk95BuAYuymZkiaRJWTQZdanmpyciec1L3sY8qoG21QXrqXNAjfTS9HcUDsz57AAeC8mqG4Jdh4ZZzetdvj",
  "key21": "2zedFhxt4ftwWaze47KZzxt6dr78HV2a6rgK8wevJ2i3oygqwoAxtXW8f39Zqp6wLPg97qAYgaenuyDCXTLbPhaQ",
  "key22": "hvMHxGLmxWMXpDYP7GNGhWLRquyr2Z6sU4g3HGEQ8dJ9FWqsGSLbsj29iBW1XdkwVLxYAppwFkF24aCGR6oM5XU",
  "key23": "3Y85XZ3YpauPhdUZgvmnft3K55N7SDM2KW883zwCDKGLFpuRGHGQPgZZSxx2P7k8RpJtzrYSP5yKizEbkjpa9gkc",
  "key24": "2rsnR31LfBD5xTDTsjLsiHZAfc7Yu6gbDNJ9cGGqsTn5zEnt7Y22MaiCQgnKBxm7jxBxFso79DFruKtnMkWLwJVN",
  "key25": "2BAex1umLnJ1yMRUfXNtdvQhCHhXQbm5py18sjsDuFMGiAk3br8V4kUWGVheyW7CUPUADeU8D1UdcXjiTCMcUga8",
  "key26": "5FSWXZZrYFnvnZVc7PvixeZeJABTTFoXjB898raLuEJUAQqC21fWRZSb8y1iDQDdeoGtoxCH3iM7Wyq9cCxMtEn",
  "key27": "5cr4Yv8b8CLvTdtWYitXStTBMGgmHCK1EaXPe6nxpNFH4ufhaMrA5q4GMaudHQfYAxARogePXaHiQQD4TTF8cQ32",
  "key28": "5a1NFfAL3xf4yJzbhaFvqqD3RXzsK23YprVcNdsCk5En3VjaAYTy44DDXSBB1no7XeNvAZ6iPXAuyFckZwSbBTnu",
  "key29": "2xQLaPYzcv5Vss4xf5sBVsrXkzo9VpaL29MhfSuZA9Smgde7wgVi9XmiWGVop7tteeyq6khacFnFt2zxrfMVVzYE",
  "key30": "5oxcQhRAmenuzvAdyNf9j7dmNmJK4Jnx5mawZH7oRftPtVJSFh9qBSPNbnFLLj5c3WyH3rsPoRY6Qw2YeeLueE23",
  "key31": "5iFseBFcQGgtyC8rtyJH5gXZLVk17NDBK447WPgqGRgesPoVpjq6FePe5X9fYcGqoi4bJGEsns76XQvV6c622d3u",
  "key32": "5emeBx7KvnqFsz65vzwPshsNJtb1TwtDdwzLWz753tz667XTuV83Q18K52wupRrydY9yUoswpQJvC64yC3bPie5r",
  "key33": "5EjYNdrY64Fs91cjw8iU8PGvTWmZfKLoTeYUB2TC62JuTsQDEeTVq9jXF5PwacZ8ufZwGmrdYrrW8btWUcUQa3LB",
  "key34": "xr2n1Ry432DoqKpnMpKuyP9kykzAU1MwrUCUKifApcsXr9VDpPpfKxTSnBCjdAbCKiZqBCFufPVR3g2KVWsMfhj",
  "key35": "21pm39qye5YEkTurv4u77pfcH5CDoAHQeMKwGCekFWXcjuotcNfxihiTtnx9VAmq9kgQ83CRewtrzau1viHxhcCa",
  "key36": "5vso9bBZ4oE5bzkmpiAC8jf1GkQpbJpFT4Nb5jwvmszGhmMVTzG7JxdYZ4jSBX31wMR9dSa9vcLWhU76C9Qian9R",
  "key37": "2FEt8w8f2TWV2Brbu28VTC4D7yrNF9fGCh1pHuBmx5EUeXRGYEtXrS7SVPuceKhhSNRGdpzq6a8dxFvx3eRzb7RN",
  "key38": "jVVhDbgbfSLgxFQXXSsVNrZghyb5GgN9GmWDrhACTfEtSvuhKsf2T2QusQFGAZ13y7kyoru2LLQKVk7VcVR8CNx",
  "key39": "4CpJV14r1ZeBwrs3dXjnBxed2edsa311baYcYoNXpGG8CGNcKPbyWp7r9Q2NM8GDSu1MLfqz2GNFrp13wQQs1fjT",
  "key40": "3jz1UTLWsf1jXQCVrxifQzXdHTUZ9axdFsBht12zTGgYPQN77UTY2gNzAGBGruzWmUo3Lkmmqi7osxTjQ1KrmV83",
  "key41": "5aBR5Un8J6StmZ6CVBxr9HAbvR3MfxZBcbXoJ5REF2cC9P24JWvBZcEASXwcB1RJMJSvhgaDrsPoC7JxLhD9zqSj",
  "key42": "2ECWq643NUKF8muFcHuE8yuhqBnatRmdEmaLfYH9sBa57REqtLvgrZTR2qYnWYVHCzCajabNasDTfwbHCK5R9Y6k",
  "key43": "66tP4qoXz8cQ6GVnpmsCMyuYfxFFXJqhzHGWrZtwrFxciGhN4724DhLiTgkVnsrM2aYQu6GnkMAtyBnrytecCnK5",
  "key44": "3cXGswWDcDw9Ffg7EhKSNbypzxUfmeKoqhp4TUNQnHyLjkzoi9zazrsTVwrP1h6PCCtXJBfY6MeabWAq2XS54V8P",
  "key45": "3BZudE6Hj73eCpgbV6G4n6gP1Td7iGowFFfjRYzQqyP6xFc9NmjNXMUp44UZAMP2dJsYg3tb59iLs6Ncm63w6nLF",
  "key46": "3TgJcNiBQCXsUmq9vc2nT5dC3EmLdLZpx6ZonbYuvqJtc1CDcaWuCLb8zwYixRJ1ZmAnqwLhxHiRpN7BoRAFF9dd",
  "key47": "4TbmiJXvHCWot2PC99HLNvtca2VsYf9ioofvDY4kdqnFLXV8XmGTuQSZAr5P6wzviV4BM8fKyhF8Qjx1cYPC94mj",
  "key48": "33qnqWjRN55Qf3eQiuHNapuswHcwpjkajQ22siXxW1tC4qKrp7EFhfWHqvch76BLRh1LcaQMREfZWYzkrSUo7KGr",
  "key49": "398vxcn7BqeRxiuAxyM1iFzFQRtr64r8D7RNSuiAygLdDM73KXdtEAMpyDmTHiXgRtuAiqToBKPRdDxMXsuX1shx"
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
