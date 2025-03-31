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
    "4pEZfGNWwScofNrGcEYBvp7ddBXesT4EZGpsTN568HzdFYLesV2Dti8tiHWqTfoiMGogd7HhPSfq4PEM7FnY8hZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e88yJM9VDP7ZJitDrwDjmfU3VpMuuHm2TbBHab5qSi1NQ3VabGUBvB2W8ASASV5tHVhBUq9HD6zVBLp9BHdZuQt",
  "key1": "TqUpfQXfCmn8p1rk9iD1vsqHd66y8qZwS8mP2ba98jiCvV72N9KAHERtxrDFg6P4wamNsN7SCz4gcWB5u5YqB8H",
  "key2": "36r2jy4TmCQK8Pp6rwrsnqzt4XmpVWKshKvi9xU6UA2TWWCxo8A5veAAsEERUSUtegRCnan9vyEBZX6ZGMnJAdGh",
  "key3": "UtmQuFFMeqpeCs6ZMdQQ3GUB8RqU9U2H1gwEFPyt7oPyFqfJJPUjHQu6eN43wyRsLMfx7XkYYk3uFvHxP53PTib",
  "key4": "5218DcWQGSCm1Z256qFzKmPNrwWGTTqMMFyUNg222JWGQXMt7rwhcFAANhsWKriMPJPz1aVyysYqrjH6XjFjNXbg",
  "key5": "4PDZUZBaha9AxNu63SZxMobAgxJwE1duzy8fkwV2xTJBiUVvxrNkvJHUwgczmTh2YTycQEKhZsBpRYeJYdMCShLs",
  "key6": "2JRs9vc5QQ6QqHAxmjcihp6vh4T3kvvFGszdVCDsEKZAWpzmwSE57EdKpKsnKVjBiKVZZQLpm7E5Ve8nuS4MBidP",
  "key7": "4YLZjqiTKiL1grjyRUHMFwTeco7xBnhmSYWabMxeUiEGC8MZVDNWQUcFYofBSizybbcm3Amx5xS6o6TvG6W4XYs4",
  "key8": "3c14GtRRgH1AaoWjW5kw91Htd9wDXZ5qdFEQtuaqEieBhRfDRDAbgABfy4siYCf8sovgNJrh7pFm1JVggnfZ6S3s",
  "key9": "2udNEz6wAnq9jhbjtqgGmy1NWS1KMer2wPLxxxDzB8sxGR3AgMPa1eUYfHt9s6DrGztB7wF5Ye4vEuqy9dS7igJa",
  "key10": "4zBbWEPNBFMJKk6C9De3BXXsssQcFhaajCTgXv4tMBh7H5s1p6MjsQRMPtRSgjXs7ogu7z4EEDF4yeMZshGR8pG9",
  "key11": "4EB8VtaoWjhAcUU3XXXcnF8XcTY2t5mo4CPyjWaWWEmFGsr28pUufFdza3Ju5t5yWg6FN5nx18sgAHMFTHnnn72L",
  "key12": "xG98AtRVtR7XtR3HwSYgTMyb7Mcd1iJkBrsf5jDCPVUSYTxR3hFwUcU3on5rZGyCoDPHFUR9QuFYne7LfvHd1aR",
  "key13": "4anxYv4VJZVbJnj5V2K8k9gHq4K8CSgPLBKUiGuMKs1ZiTCrdA5P6QabWb3BoZrLdDx3pNWVE5WauxV2jo5VrxtU",
  "key14": "4mjyyc7afS8kKwLEPFpePvA5KWBxbq1We9U5rRAF6dYGQRyrrrjeNW1qSsdhDyDTJu3wiJzQqCsuiLAoBSuggmSX",
  "key15": "5RFK5hbYNHmepeaxyA2mEUMFCrJuoNcR3HTKnFeK6nBp6F5p7KoNJ2vU2MhB7zZUP9QCnp4ph4iXg38z77Vmr5wy",
  "key16": "4VL7TjVqREqByvafqG2FbVeGY5NZ2y98tt542wqymQJzuxf4Xbi6NfugXBtmMHgDR7xhWYcz5m3PiuUxPRs1d8Bj",
  "key17": "uscwvorjCDDazSywfeKuZGgWb89jj7C3sTrtkTNJSi6UG3CMz83KVRbvcZbTaT4RaQKSeX5bkmAqxcTAePgx24t",
  "key18": "5B2Cdf7EBHcN5JswaZ4Xg4xMcTnQyDKCdwkzSpn3HeMhPwcMFzUJygcNiycU8ncidWsEjoDkkbVsgerrd1UhDkWP",
  "key19": "49b2fgKvTLgAaiuBAwNeqbE5um12uCsRXkZ9cWVTda2NA7a11HXSAxixawxzXGsGRE7C8ZzwsHPPQm8oSKk17PYo",
  "key20": "4KtiAkDL6LRbrViyk7uJRJXJXvQS9unMc7TzoXgJdB8gu7BrQ87LMYwj4DesYuVQu5xBfNHbTNkRVnz4RsSAos5",
  "key21": "4TJds34gCVh1qtUnpeiQKL7JULmEs4JyuDi3ph8STanNCqPN5FanmgFhEihS92gXjnd5kMvGKsvEe2wyJuzc2ppM",
  "key22": "2jq3V9thYekbbnNyqRsyF1mCb2Yv4kX9vvsAgU4uTwWdt9D23JuaEXWzSgJ1dQWDnDkns3ykbxMX7h9AFPj4bqJg",
  "key23": "5xF2E51b4AafBRrKCTVgf1BUNFp1p2RMPFf6Z4fzzhkoTgD3ATZSPWa9vrVeu5LvMcG1A7NtLkhpFdRFvKQ5VNUn",
  "key24": "4cm3LM6GQ5bZwyk1aszxcierpRWEmPJLcqgkSFzug5uGHC3u5LEyD5PpjPhWMJCtWKqMh9H6V3FsigHiisuP2UBS",
  "key25": "65kApnkHL4r1mWQ7cEZJ4LTAEQyENK59fbKAkDHySV5jDwDLC6bQFYN7gBaaTkSpehJYNeR2ZbVxf8LkzYLVmuuF",
  "key26": "3aK85QkBtZnnhsEkvCWQPhUeV4CTyFkb5ESk1MaaDkAmRFbmvtUXMqz4rAzbCVcP2z2FeCJfxM9DCDt1rjCTdXTh",
  "key27": "4HwZtXygbiVm2G4bA1uUMKKQdW5RdfeL4oGAP2ekjkURWP1zTr7saYBqzNDw6fzpnwEMYvtJwyYRWESMTthFGduK",
  "key28": "5JbLNWj56NRU3c7m2QhdiQPfu51imLPJnkcEPPBxYvc4WFpTxztYGFC4uemyv9QFsaR21c6N42zjUJxz9MHLNnGa",
  "key29": "49WTLGDCBwxyHkuDAMEv4fwzbg6vEGmsUpYsKrp4MhPYJFpu9Rv6dvCcnRUaVCTYRySeqbkLKi3v3MFy365caa4T",
  "key30": "Esy1dfUFVfffGHeCaK35ebt8wLMt4ZDrmFFtYH5sg95XQRVBFGyKSnXah1AZLvAgFDa1XmQFEokw9g68o9pcg8H",
  "key31": "4UMLbyAqTnA43Ah1iUqAM9CzRKmZ63QzS54EUuTh1NHhLHBJDnvTb9CVnguBAf1yHVyzUoXbsGxVCXEeCkqWZa6L",
  "key32": "3MytQaYWhk9XjjBqqrvZsNo7oqXr7NpoGXwrb9iEUvhHQJivd233vurKy3mtgAYF7Dx7rVMt44WzwULfCfgoJ5UJ",
  "key33": "5AEYDAV7UbbnwtWD6LNcnjbNTgbVPbtWEjaw1AxdSCw6QzjKAJYPD12gqL6Fz5BQnrHbapTSjeQMRYqa47uCatkt",
  "key34": "7YPHUNyKYCoC66U2Cmfoa2Svppk9XoXdTcynqBD4j2daHY8m8DQTJ11KrZTN3Uf23aLVsynS4wM7DKVCTx8wTbF",
  "key35": "3xFJZsKCXnj3fpGQngE9Y8yW1Dccr8Bxt8kVYEN61B3DsaHm3MGhZ9bwjuBAA1mXHvrYXvWcfMvcyw2VTThssjY4",
  "key36": "Co3b6ZhD2tLQE2GtTf6Vay6FfFR5XRtYA4gsVHsQBzYnrNreYGFHNZ4cNA7WKt5poWoT5MMUTmFHcSbb3ZLcQ1t",
  "key37": "1sJCqBE6TrxxmsxgY4VLnzuJz1JnokSWjuhG6MgDwKkKiDhaq6qhAgpd1179LqdQHcpiwj9yyzwwQotkm2p8taW",
  "key38": "24bnidUzZ6mZ9T4Acpk348ivnqH4aNw85V6vUrNJnoWc8oELBDfeoj44QhHkxST37qUc3KDXGm5r6vwHnzdKQkcU",
  "key39": "2csX8SiGaAi4c9jTsiNpyFMU9CUHdYeKHkRz51LUii8oo3ML8vKXntPiLQn7qzdnuKuSpxd6yeHppp9TD6xBa3xy",
  "key40": "fYSzuKXNedNDzU6GQE2AYWCMoa8BFHq48MDNBeMFMMioFf3991EWcre4h1rkVtQgYmtiA4HS7myjmZwskFF21cx",
  "key41": "3y8Yrcu9RPyyBS7fDFL4dqyvQzdTz8YiNZNvHrzqrvVuuv84WHdUpEqGvAbZM5Kzy4nrfjRZFFkcC9VRgcV8Goy7",
  "key42": "2TGmetzrEWJQjuC5MfdUZWCEyXWaXEiKaYn1nwAXf41EKPC9wkYj4JVSthFuWyZAiUhLyEyBGHbAfbuDuk7KmpCk",
  "key43": "5DspmB79hJ1HwQ2bgnfcDgoC3v2KDREryyE1HWrbS3uwyVDVxfRwKe5Kw63L1ytRFsGf9HFxoVmwFHU7nXPuFoB9",
  "key44": "dXeZHAh3MgbZe6S8MeVXSWWryGRaRBTym35XbPG6GJfox5bcBdCKX1FZEDXKJXaK2nsA8MMa5tHSCrNXgwStfSP",
  "key45": "41sXnJ6wq59oxc5hbzUuhi2WYUHD2vf8vR7SNks6YEKN8PoqjLZB9VnxPRVXErZHS9YjxuKNjA1sp6iWgiNrmhLN",
  "key46": "3uB6KUp389q3E87ZufgnX1Yo6FKuFzVohqp4pt5BxBpmrsNNTY8e4TxPAYfkZuUNzLtPwr6WVeeGRTAmv1uWSwjg",
  "key47": "4Tc6g5gHm6jYSWivTeUTGYRQuZpQTo8LNHA3bHjX4qdKq5p6cARymbpjsQSDh2E1H7824t8eiepjC7nJeubDGfJg",
  "key48": "5mVvwd1CrjcXqQTqrzVK652jh36gpJHn3ad6r5Dbebt96Ht98iLKqK6JB7xAzKu5zLmh3tXn78pjefaXx5uMfsqu",
  "key49": "5tnnAU8Nc9mDtLi5yuLLh5QjKUUcejxhgTL2LkhLvwn87AfD97C5DP8VjutwaPXpvYpQszUbtxZKK88SFdCT1ydb"
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
