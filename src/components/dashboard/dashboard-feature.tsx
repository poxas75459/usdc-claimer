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
    "32ZN6NsvsPF8tPo2FzoUuaR3yWhe5nKLAAXzzLqMjW8VBbwfJYyxnhzuPjadfpCeJWbU7FLHnxTP9quZESvbU39E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UyKKDUtJP87xtFugRee7jWj2NRtRnWwAfmE8SUJtk9A7FihSKsvgWEuMdFSpHrcAMxuf6aEL5UgVxxJwECa43YG",
  "key1": "2GdW5pUFH3LrfcWCp9eZG87HCzMfVTAaUzRXTFbe6vM9pT4gaXsrX7WXxnCbvZACpoyiRqqNMtKFB8HaxV6cjJo2",
  "key2": "41RrHVDCwjnNJXH6629h8mggQX5eGNQoRyTu6Au7CqxYHRsaE6UxfK8g7waKR12ZHU9aC4R2emKp94gm1tEaNd2C",
  "key3": "29EJMA3swZd18DwZ9eZPP2i6a2geY7LjtQWeGrvouAdNDBPQFKE7j59iV1hppZGdgqhYXBaQvvDRNRGBdUKN6zXN",
  "key4": "62vRRXMU5D8uNzvWG1aa3Rx1JskUcG9FqbLKJi6nfqcghKNaKxb3ZfNufF4GaqPbjy5oAZQ1vs2msJMBVwwQk8fA",
  "key5": "6fYKijV2teKj8uPds8iWT9ZteouyYouNh18coNK4N4cX9WiTyshVt5ipNxB8sYedNXDD4D3qcFbsnS2kza2p7zY",
  "key6": "5BV9xnj341p6KmnipZDT1TnqpTjB9UMCJRBE7P9BeQdmHssTbGqdurRBpxSRNzG37BZ3hdeZA2AgqRG9biLTLB9S",
  "key7": "3UYq8gp3j7jRf6w7NYqxzTjbyxmHJxdg9QHWSXnf7r62v2S2qgsNBbqmyQqzLBX9u5cN83VZCkkTPVSuBh17KwUw",
  "key8": "4Wrrp8Cs419EA4AmVc55xJB55VpPNLSS5hGLBJP3z2gbhyWRCyXC12RHNLetHUretC1pHRFV1hSWfvU8BwAHPqnG",
  "key9": "4voixEhmx2M9tiDmpQF7CDDBcU8jovFVZkajL1UUxgNS1yXkQunNh9JQQyCZ6iAjZJSgjExjTVyNGUFE419Fq9nC",
  "key10": "4CurrkfZjkx9vSd76QySSRAwFSXWxiXXLA91pu3r1YctVNri2ne9dQaXXpFqunyD5i4i8t1R9r78x4BHkMyb8XLs",
  "key11": "5mo9TSNmTbMMnhkknwi8xgdyT48Hef2mMohsgrVDE1uQiiwu3hRF1WVFYGRkf9Tj6sXgqu1BeAFhXrAk1LiK8Yv2",
  "key12": "4MMpPQptv9HBuo5Las6CDG9pycTx9xX528YR67YWQWdjU3yW1ugbK2J42soAfjbtFjYfs3At1kdeiStbQa3Mm6sb",
  "key13": "4ZakBreWCcA2BD78uzYGyeZtqF7M17xPgSi4VDWHj2fSH5nY3JG6aiRDFZg4sAsWPqsJE2MJLMdJcP5q7hUPwHY",
  "key14": "31xmDGDHZ4aBzwqnCjSeT6Ft9grUeoaWToof6jQ8z4PmFiAyADFt6Zt8cCWHSXTsJDGVfQmhZPy95RepYtG1XoaB",
  "key15": "5W2RLAZCWmVXSYuzHBPNWxrYbo2w2VHFPkyjm1HbxExCqszb7XjKivZfHojWdA53jkCSzD7QayvnxMhGameui3nr",
  "key16": "2EKfTCCBnbWRz8QNih4Z8Lrx3P3YsLwZEwLujDrwxjQmBB2ot2wdQ4JKqkASQdTLrqLzGcWyh3rFY9yUsj56qfoV",
  "key17": "2wpkq9MzQgVvaHP39t6cn48XvhWfuyfGpPWuheerD2jLLSSbrgXyQURdKyyRcFn2anQ42CxqKqf5nWZdu6XSrYvT",
  "key18": "2hQHVBvHovuG1MJFC5cmwhuWEciAxjFsB7p1uYxJ6RredsPzTU8Zp1oTpF3ZAF1A5YrJFxHrpYQADkcE1TspYUEE",
  "key19": "f44P3DffhrMWsE5d3J1PdobJPbahicCHEyRVqjQkDCZn27YV94CUnFRnNCLBGxvPgpDExH3G84sp4S8mmVGYxub",
  "key20": "4Nev88uktUsB5i7j3oGCuNHbpTfgMenzNFALxch7gbGVZgWa98ZvudyoRejR1LLKqiRa6VmsZfaNLWwPt8CdAnxa",
  "key21": "3X3YCwCb2ztSEG9hBcUDdz4gz1fb7gUeqGKMC8p2EppGtXCtfEG6jZFYUiwFztRLSjMWCmd1459tEHNsmCLAEPau",
  "key22": "3t5heibn7ceDrZBP6XvxicdcmUun7r5upqFQHATs8mPJryn1z2urrLnwUKK9Bns2HnSEVeHjK3npewvqzYJFEpo",
  "key23": "LrYcKztm16KHKHRHaXbqSi85915TYDW5ua84URRAv27oySoiXHymCajnYxYy1bx6ffVm5GhZF2zd6LCaWjULDxN",
  "key24": "EBmuYmkE5PKtDJfeSkppV526S2zSXh91J5ASmj6zGNEMMCt9n6HMu6WBtaBGJnAyx6Y3f44t3CVrdA5N7yGMyrh",
  "key25": "3vDjAEQfYYzNrjiRN8845JNUERPhUer8XtEpjiWjLq9Hsom5tajVGC3dVfBsVBLUdiQy6FMZ2Q5r3Nz1iGMf1EmD",
  "key26": "4NVBrroadN4sd68oFxCs1ZRoBWzU8mhSYbJ3nDiJxTM6JyuQ7A81uWikCv2Y57iKrGYisx5fovMisaM2vTuDBrXp",
  "key27": "2EkjSEMMw3tQmdX2vVeQCJZgvLxJg1x5aZGi7SAi4wcAic4SNUeGfGuqkNGp13vi1QyMDZA8BeW7nPfPbG51eV91",
  "key28": "49qYr5anc5pDt3inAPqQ11FgpuzG1pPX9iaCf128Sfioi4w58yk1cdo44gdD38vUMuNRN5HZMJgdqTmHeVFw1RMA",
  "key29": "3LA7W3noAJpGtuc9ZeHZDM8y4QJNuQxVuKG9NtbCFBsmj3Bc44orXMK682YNFFBMBB3Q6HFgDND1ohquRtHXyQJw",
  "key30": "3YCUmgHGqM2urBiXBpM6zGokYNkVAcvLdSxGpLJiLniNoknyQpxSatcgmXySmnYEjqotVArjjHbVvNYHYYW3JF3H",
  "key31": "4XDHgpZ2eLnRRRSf66nYJ73fpMUr6kM94BDMYKkhbXbCH3ejZpuhj2mhBEyzdDtBA5CuejgxK9UNJBjkZb7Gb8nT",
  "key32": "4s33zaeUG7XJ1A6uMovbY2mdHuL33bEtgiXmQVUMf19211Vrw8A5WN2woJZVBpABoXbeouDuzChg1XWLcQfEG9rf",
  "key33": "4Bbdtx8V36Qe7YkjwNvcQMyHxgg5HJWuASrkUk6skuVEjxjkhaauuQuRFsb4Giv3NhZ23pWpTkPtNg8mekQqPMXS",
  "key34": "4vWxGxqjKxMXL65sDfLGMuMM4gXhqAF1xGcHxrikfpXeHDsjqnoJ9RT2gVoBGrmE2n9H9N625jAno9TS2j8zzrq5",
  "key35": "2opT9yHaox5ruHGbgp3v3b5Lj2VM3ATMrfmgyn7kYKpNYRxUT61bnAbDNVxYCpBT4sPms8MGSH13Gfbgbz1agveZ",
  "key36": "5BbLyUWMpC61y6kqMjDDC8mocjQCBJg8kD4EMd8PaisFF33AJatabvFEETQuyhuk4i3cY5Mk18SA1YxhVtPcupCN",
  "key37": "2MWd8nq9Vjb5oMBjsjVCCfHsjGgNvUSmU8Ym5d6r2XiFmoMriSqoRZSZ6VZ5mQ9Yh3sTsbm14iQe6eJfvVQrvnUH"
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
