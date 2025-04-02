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
    "4rBBQuPZacqDHLZk3yvQRGZPVxdq952i2CDfuA4xXzuTrkAjjHV92H7LctzScz7fJ4UW7XZ9S9GTZEsiAtbGgtKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45rwZULzsNGKnHszwS4BAF2gJt7eyhtNT6J5kZVFKRCytaQcuyXFXvWdfjecJ8HazaFDf7f4JDcXJYtaxg829KB",
  "key1": "3Ldh2vtGXam5aJm6NzBrNQWGkV3G9AjYHZaHJ2iznxXcgpumsw1hbddtadMFNGMhiYekSmZxfJ5cpX7QhQCD6Ds4",
  "key2": "57CGGj4dZggs1y6jns5mxHpZokQdoJrLKa3ThP2UJ15HSBQGykHpA63Dn9RL6YwaESCnCaYXmDGBkgvwuWLAVysQ",
  "key3": "5AZ3rTU8gegPgEUAwo3Skz1BnA74cPEHg79tg1oUv1d6H6cGguSEmZJe7pJjLssvjGMPKWGzujxj4vkPHJh8Ljir",
  "key4": "2rsm1DmmygMtb1PtboBVX7XSNvqkpXorLFAZsyHSKBhdPiW6ayZrDsHV1oBrwEdxcYTshagTLjiwhfNyR1J2HTJS",
  "key5": "3VDvFNQFFab8E1ryQv1aoVgB6YLExehD6hQUnRFoT2pLGEAfSqLfnoqUbxK7iEJBogeR4h2CqRikajXGEtenRHd7",
  "key6": "2vru2MrGfeYUogzoV8mS8EZZEePTtX7oBj7Rj54M2RBY8XxsKoLoVztThymZJ5bT13NbJsNWKFp1SBw97bFnduii",
  "key7": "4PchZ9BSBL2cv6Si1KX4r1RzJthTSZLMC6qyvYq6wauyb4u3uYPsizMt764GZGFncZDuzyr9NpEk3z9jyBVymA4v",
  "key8": "3vMmMhXQpjbUFqcVrmpnmnYsKCGFqGYTAYEYGMEgheeoP2RPatnFNzhZW1VNHBGzpU9M4bcgVCLdgaPtbeHN8nPr",
  "key9": "2sQFju5MmeHf2x4mb5UDjgQFcYfkW1yt1DDRjPLMnsTj1L6cPZPdg9Rr9jQUTqyhwbghkZWupu8mwKo8kNg7Gnxs",
  "key10": "41AM9uuczJAJwQXzCCvZNqv7grLpY4Hy4mRYaNaKDcCrB6FC7zGEuZL6nNs51GnjDhThmV2QKTbX6GFzUXWztEMZ",
  "key11": "d82fuWCWttZTkRjNN4DKpCCZ4LA1JKsEGPgahPVVZU1gk6bG5JuPJHjFQAA9zBfxLAVLV9qgu5KZ1GC6vbMVHpk",
  "key12": "2bkeZxsfZZF9oEUZL5V2sNuEQbKfjHtzYPaQzEhJXyM4AnDXMenDggK4XYSii7iukRqLakT639kXjEeou5qNgpgY",
  "key13": "2nMTFz1neKqGHDckcQNSBimQWHC1MPj9yoebKWtNS8jDPKqUdcXmba5JdtiaK6EWNk1HDuVHfEd6cfzUguwJfDfn",
  "key14": "2VhHii4eAxVkzhwbWLepREmsB9pfzqE8BvUB9zXnGYUNkQemMc2mrt4Upet5tUHhJvXMuteQoLZ136WbMyTPf1p6",
  "key15": "tfWsuECPMss2Mfxq2KpZBJLHLqxU3hAYbyfnAfBtd81pS1sFouiVPYgks1QFmFHWSGqsDFHYQA8X5nu9CtBGJYr",
  "key16": "61JL8xiQDscoJqFwGqUtncR1z9oZGaStSAN8Sh7BsgZDw2BzxR4UFwWTLeTGm8aHiafkdYS3nJ8Lfgco1L3RUt7k",
  "key17": "3G5E5jyrTX8At5Hz6E7LTgrKvT9E7FkLAaxPBouKzno2hzGehXctZG5DebGRNU5Sgdps5hcUP5v6QGd4QmwHLB8e",
  "key18": "4wy2z4d3YSetqoJS9RcBWjqrw5Bhzggnxry7nKRrUUBThAnsC56Ysg4n8t82J8HtvFHW3MZgCm4dqVNaca9ibBFM",
  "key19": "26dZrvcQqfaQrwma2iWFxHBYuTehdGg4wD8teNbTaVCS2acFv8U4r9t71gdKPLAahbwYYoMUprccUKrREBkPcXJz",
  "key20": "SmxRD2x7SNFTyUrvaByQ1hTxYKKuU35S6vds8RgZQeDJvYM1e7hAUjsWexojs4UoatBGyZ34Lm2vSRmWmQeA5ZK",
  "key21": "2U4NaTNwoZKvFDYBREBEca88MLK5QptujijLhDR4W3Jn4hTceRkC2Xu2dKuTQWAxCnUgrepuwLm96ypvQiLRyGEk",
  "key22": "63BDtxMqv36YzKmmjFthYJBMmNQg9hKgp47BV2ut9qYgs3u533msBagtAnRvQc2ibtyRCirqsSw4mW6eUFrs56uK",
  "key23": "PiKcCsiLLVVoM98baG2mqxiJY6YeDJjnqTrhPCGjh12kESSP8skkine7oYpnUXvTRDP8JRaBHRp4GAxBZZfSUCU",
  "key24": "hyiGLFf8eCVYNwrgZXf3rLCW2hmFRu8cQF2j6k55zJSM7w6FFmtEcpobzz7Dg7Jca1fd189hLA4ALhNSVC47RjC",
  "key25": "37jjgd4mox6vStQnKKBLk34RzDvxWzwHF9vrvxoSsPHqwWsPF4G5918nLvDn7xSq9NJFK1YKw5S8KRrtKfhCKFrC",
  "key26": "2ucLiMyTVf3ZDBJAuGCxxkTHCAuzWMaVrTD7hpFUJVFxYSzpyA7bW1Fu26ecxYHGv5HskcaLwhz47xx6riqm8Y54",
  "key27": "3F3sT3saoR8FZkebGrU8xhSWirTTsWGbiUPyyHdwRP1wMaAnNDrCtgf49NxKwP4ub3mSr35B7dmYXiERbvJXzHo1",
  "key28": "3VNFkmugFgxd8WG7Ngje2pHk3FDLbKPERLE7bpbxFhehzRgyEPMahWe4UeVVEM78rZ9gFAgp4xEKi66iHHt9T4T3",
  "key29": "32s6qkgk6Rq1DW9UpjV7GQutCkwProe1E41G89DKfDZCZSRbJ24Jr4XbAm6JXd95WyKAHuj9BCff4hQbLNa2jjvU",
  "key30": "3rPxLZ6DjHoKG7ShWaFKzjMCYXxX9BPjGpk8uNznrxpyCiGmB1ZbhCK8dnmhJ6H8sKmxG1tc6mvjWsvtd4eFGC9F",
  "key31": "4Q5sdVkv2J5LKxaLqDH1WZWboixbZMhvFm81Zv6yE8wN8VAukPVGNN2pYZTnAtgHZXjnqjmn5WSBvSJzPWWYKykR",
  "key32": "3GdK7vZqGFpBGH5xTFWQtvY8cMfmQRNHcCTpmUQ4GBx8taureem5PFjkT5vhpVTeG31eJSxDLLHAWeuRTYN52sbP",
  "key33": "5Wxb2SjL8UGmjEdkoevXnSjjiy8VhLk1NniprWr3hPQmWRHBQdFgJjZuRfvtuPTkzRaTctx2JkN52HAkmkDZ3GEm",
  "key34": "5Ly5yc52AWSFJpxBMs9YxB2oBEPJviyBjXTpTLMPLmKkp6hVyMnrM4fct2vp17rHod5ku1UqwoqXcqBvoNTvviJU"
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
