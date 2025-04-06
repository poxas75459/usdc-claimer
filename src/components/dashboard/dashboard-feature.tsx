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
    "36WjXuDmPBagrpyYxk3MwYKLMgFjvLrZ5fw96JJLMGtt9iCs3RR4v6pDYKvJFzGR1DvZi3JR1g2bnVkWv2qkSaPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vxSugWLftQAtGd8L4q8PRdTj98ioF9oZm9bNYf9dHj7y2at7H1mbbitTcKjbBvYEk1ebR3MP1tSietz6KFiR7YW",
  "key1": "5KSdzx1TYvHSZ2aDsQk5JjXfbdMQZ2RkRfuDYRCpqxHTp8BQoF8JqKhnfxLJjJfg6hrjEHQJ7hdgMN68PT52kCqd",
  "key2": "3ZKYkaeaEZW1CRXPLJ5WqqFeiuwFaza9aN9odz5kmqJDtSUtKhzNVMK13ucsUoF3eRu7wPzyW8NWWDbQJj4HdCZQ",
  "key3": "21kyH74v9Qjo5E9zbAt3vvkSPz3CMojTYAsxeeATAB5ur5MWqqYGGuDGBcGj3iiqWDxMdTARwg83mFnGmBWwCDuA",
  "key4": "63kYF6nuLRM77rzeMT8qUHLFsXAFFCPRCLfeqTogkMfXdkDS4nUT8NAx3w41KZdN1Zti7sdfDqMBRicabEncP6pA",
  "key5": "4woY5iux2BCddydLU9qWhV6VKESZgyKG2jVeJqTcBgVErxHpv3DtmFJmh8izVXhgxfjemRvjtjAYGCUE9q4WVzL3",
  "key6": "2BNJXmfJqFfwVp65WxXHUYs9QeKnD5nD4YjTarHMAgaSPQAsvUhpZQ4Jzqk6Eq16hRUno7CK2sS59CrCZndHBa83",
  "key7": "56pvKieAqqfM82qSbHYgZzVjxBo7UtZz6J4cHEFA2pAbUAXYnfM4mjcoHbDR6WnRYjyrFyvfhPtLk6UqTv9AxjHU",
  "key8": "QhhynzUd5JHxLav2GtDvKfwy2ToJ8AexxzMNW2WEoJZ3b33827TjVRYbWhoGMoNDYBej41TMea3jg8S6aHqrtFN",
  "key9": "TcEuku1hgEZhchtW7ypYKpCFVCpYMdBiCodyJezHF1votTTBvPPdax8vYMFXek2EFjUV32tdKx4Ay7CrWhLFJyc",
  "key10": "4i7eTWUi5DdoDQth6kuK7xvx4VP8uNKQGimQoRGaFWXnb7BSew3T3Nam1F5Lp2k2JVQpEASrV7ZE2sg7vLGdPpng",
  "key11": "Ff8HwyjHGxomXEjxhWw7vgpydjeUApaXYScAvwQWPf5oPkKLrc19rHGc8RNayePfqvLfHcZh6bsXofKHjZM8U5U",
  "key12": "56Pw8bhdxpnG8YBjqWoHFY9CDxy28BxTeVveQVDo3GKJgp3HnuJY5LPc6y1T8aD8YotRnnpoHDfgGcC4scK2MnB4",
  "key13": "3UvXkVRnKPjKajzPqGs5kTUGf9WtVwLpb711CV7FsvnEHsLLMEz2fcaMyv1qP9DXoE3poYobcXUTms9FitcJCQtc",
  "key14": "2mf8DH7hYEamBXuum164HJwMeXXRDuMidqDiXRHL1yEg2VTs4d2uxjPEm87AWodkoJh4Ld74TSB32qYA4k7ABWuP",
  "key15": "2gAvM7WP5GNT8hn1dCaR4LACTbx17wpkTXbb9ZQFGqe2psjQv5VQWHDcrUxiLTmqMpU5Akcj5KiZS1UtCRS4HwTa",
  "key16": "4jRz78Cj5CxSBRG6P18Zs5aaSULDpxPiCtyieWsxGnGnH7evTY3mN24LUHsGBoUTiCo1kg4xx48ZXYf3K6x2urKp",
  "key17": "5a41gGjxBnWhE1L5BZaiuGhZPHNZcnvKvPtbkaMkg1RvaCMgGrBNb3sLzPkHDB9KBvZpNi2noGzP8nkwiSNX9jgz",
  "key18": "3xSVCHSvKa8H1kxUrdBbehdq6shJJx4UYNXdGViXaazpBqzg5n9by2n8DEMBche66gedLMpWEXc7deqLkPRijn1n",
  "key19": "2DtyYUGQgMkzWdL8AVJeKjvYGwSbMrbEBaVGJEoynx9ta43PwfX6Ew2sf52wM3VKq8MVP9BUeH4MpQuiuWdaoq2M",
  "key20": "5UnNoEYtptnPUGsMwPf39YcjDikLaZZR64QqfvVZdwELNiBR71mpd6gpoh9LCos2Zt7W2eCzQeF6mRP1NkEff41D",
  "key21": "5j7xkUgoNxbfJRfBuRSrdgjuSvP7CdgaqztTsiTnkXpPStEQBwuLST34CXdKkBg6Tx6RATNFPHRMrUQGCeJ69njh",
  "key22": "3zdU4nUqmmsM7q1LHQfv36iEK2cHcZF9rSsWVGLpND3TBoc9TjatLLKmBUfR3vF5vvobpZXCtWjW3ZfS1R67s4PS",
  "key23": "LE2AeYgdEaUFrVAknMrW12UXuzGAXb1rRSTKGBTji8p4ByPtZMEeVmALpvjSVrZo8zw3mARPemGGEVJM5oCZoGF",
  "key24": "4fPCotQnbtJoGTweK2sAFodgmhPsNEUcQ6Zwsmts8LRzLTxp36wHrtuWvEohui6tMdzeqpviTLnTkF49BG9i7YiN",
  "key25": "3TJnuqcM5uHoh2ySxrXX47MtvAk14stHvwyZioQU9mrmzSqFgj6R7uP9qEo3d4nzBFAdGrD1sFPfZL5zjmLVFnCa",
  "key26": "5EV3t5mYSrjzekMJPVhbmgJwMVUmx6g7ewmtTAgmtXjPoWamPDEXtHb4dK2UCQConhMAc7Sz77XtXzPG9AF9gj4x",
  "key27": "2LEEQQJVvt1cBTt2zfBpFMbKtkvhB6zLNuB8K48sGHqkbQBBhBUk3rJp9UMC3kxFm9HunkXYwFJP5VfaoyAeCgGE",
  "key28": "28DV6MMqbnvUCVHvZHXsq3iboMWrMex9hTQzTFKGkecvKpMPwpMAuUUT3mGHudoVttuafw68K3uRjK2jXy5JeB4b",
  "key29": "5tc14X6PjAfThdas3AtFA8funp8bzbrs3M9piRhcJEZWXsoVxpFGN9z7Gzc9cgZBTqdBJ2e3Ppo9Vze8RUYgahCD",
  "key30": "5A5MYfwfQuadXNWKA5aW8yckPV8T5Bhg2WsBJQ4uvD9mZQHXjLVczQ6FJoDSqu6wyZtybR5q5rgXNnp8KUMtSUqj",
  "key31": "4dUvSiYCZdDZ7Yg3BED71TcY3KGN4XEcW5gXPw2N1c5mQ8J1qBrtxak14w8TettX41FBfUUHHoDfQtmfr163fMvD",
  "key32": "5o6xBh6DHKduvaB6EmmUjb4BPqSpECZ2su3vmKZU1RzYk9vtpSccrq45YLS1PkfEKoFongsJL5Pv8SY7HMhEiva6",
  "key33": "3RZGytQy7HsdDtXir1ngCPworMRd8higbsYtTrbUaa7qHNAZg7ePTu4djDhbRVrtJBBEVHJZEKnVAhfCuzrJYnV9",
  "key34": "5JapRgDVKoTofPrkdG3wbNVWH8rywiP8AwRYB9ZoFfpuufagyscNPEW6TAmV4XUPTjdsPQjb9SMgYjyh8n7CfiwT",
  "key35": "3txpq59zesqS4iNduvsPNaRMRbicWGD6tGtCPvfot6dt3hQyPSEEqYey8zMNkjxCLKsRekCKSgDFRzzd4YYZrEER",
  "key36": "X316eD8LT2my4k9GjmZfXRtGbirEzfhWXn8n7V9rCTHjQmw57PDeMJoAkQFz5ive3Yfpueb1CS73JpnBmyZifyZ",
  "key37": "57ikkg5xhhEFxu4vLVaLz5FwSoZzA4t2yjaBMTk18XGvmAakHL3bMMnrsAvRweF9Lv6ESYiVNqx3jKAmoYZuCHgu",
  "key38": "3LCPH5FK2uY2ef3pSxGCpeeWmRGzCSLVBkzNxyhTqonavvay5vXD9JVNdgjRNXRZN6R3nNQ3G6KeiS8j5ut9SEVf",
  "key39": "3oatKrjk2MSwRbqHhwcvA5FxfbFGjxemdrDcg4ceYa6ysQyNB1RmBz7mRxQpu45YVtH8E4jo17QrTRGMQ8ZbGBTo",
  "key40": "5tTi5toYqhVQujqmbSPPP9FFoLHHngAmf8HTpUiT9Sc5QZYqVudT4HPMv5AiERT3f1NfdKobSDhXbfMyMaPJLjrW",
  "key41": "4ZgGpa8SCvWcL3v1Mttff3ChFFUudcFPTmDBsm1WLaDN5634qLqyQE8fNKT9MoUVxF85Bo8FzvWp3pMCzE82vVKR",
  "key42": "2T84AeZhi9iMnYpSgqUuJFHvFjJiuR4wrLnax6GUt7yvLvnopBRDNknkpkyvqDyHSaaHrNSJzEjZBREozChqQRYj",
  "key43": "2MmaUiCoNtoqzc8BEf7XDbRbdrtqTGFNX9uNmdxn9qtKeYqRS2w5EJSGL4eEDRwriXyNG57NTvWmS267Ynhyj3Ze",
  "key44": "5Z5khinxwzbCDjE5HfjA7g8yU5GhfnqRpJwrXyUxWJqwJZB2o4tL66uUzwsmZPaWDv3bLSoymjEtZtYuGLKrWpW6"
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
