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
    "23JGMuK6sV8Kmupu7PCWkiuEB2VoqDkEZXpmxcyw53Xzz5XX3qxj7wFcCtEtXmtRZ2hs7xGUJHbKX4pxMMvaNwHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hYjuhT2VUgVVcV7HeH3Gjcc8j9iAxLdNdZux6B1xsQ4BBwhPPAdk4TLnXAyEKCg6CFTyppXT1pv7wB9oeLELJx1",
  "key1": "48EsbJathgrXhgQUhMF1gczAWtr7DUaefiTHchwiqXA9tmDU8G2yqH1hGNFvuYDtvvQw67euP3ivasfCEiZmA3xn",
  "key2": "3dKhKe7MJQg5YtJUKB3Bx1JH81LvgNp65pmzNwRjstj1FpDxmvWWGW65Lmser4PmjrnZqtG4S23bCes2fSvWYU3i",
  "key3": "21uyPaBRwLikMgksEzGGx3heizQDXrvbrAQg3uayqpAoCAts2CQ7FKjkmEZBMcKNKXckpq8qfFpTQmmKSVs2QbPS",
  "key4": "5D3k39UroJfJbmjX1g3p4UpkQT3C1PDLKfS5Q5zSPVKXsHMacPefnqgLtahd3sJACGHZTfgRhLE3zjuqvN12Cxdy",
  "key5": "3xU4VAa3iLVknb7Vzus4yLW8dUtYKacqCUkCf5vreDawhuKXwDxCKWSgzrRtn2kKG5s4fvEQthxneKRdqv7SsBsY",
  "key6": "5riaVogSWeC6v97ZtaJvLsgdDmJFuevennMMsaYBiya8hprU9RYdEZNK8QRGcBxWSnyAQ5cC5qJ3rk5rwfLqqAH9",
  "key7": "6E4zJ5qAaUaFtvrot9j7JT23EpxbdzDA9m2P5gDqW3VtkgupDuioVq8Z7paNyCrz7tXnTvxZ1gVJgBSPkvgx2Wn",
  "key8": "4EMUgUF2nbyWqctwnxYHTykBTP4v2ETwLoJRWtf4dPmNThUgq8hCAKDnh2L8Q5Dtf5tpGGKprHEUZx7ePo9US8Gi",
  "key9": "Qx3tUoAQjibEnTwBv9GMeQ7YBxDCuqZQrXjyon8GXq6zrpEttCBYDxoH6WtqCMJXbyjvF9zXJbgfb9V6tXCKUk5",
  "key10": "4HbneH8FMz4aDTLamgS2cYwRWNzv9eiDxdXM2R6hmobhhvnBykeAR9emy9UEeDCADytEgnmutNT3u1yKpMUnxPQt",
  "key11": "3tM4ybidiVZiK2zAZ1Fdsg5r6dYypdvDrKXLN2oqrt8ZnC8utDJUWwyxuBv7exbnX52eDTkXVFZb3zgy7dkcr87L",
  "key12": "2LZPJAjaSJjzdKRCXFTuei3LwaDYGna2LnopCqEFZmgb69ruQDvBZi43Xmk8xFkPaNwNhWTzdkRUbWzmnShWcqVX",
  "key13": "5nch2WMBWmkGCpY42Y9wapn1C2XZ7aksU4GZDNtRiUQBCmE99XUpt9vhcm4w8ER7A1DfyrgJEfpRp18mLNucx3Rd",
  "key14": "hnAUetAJh1w6RR9dXTkd81noxdFVwKN9kZ536h7ZCufGKSae3fQnGmUEfopAhKC3kfbmxYVH2BsCPgafdJ1U7jd",
  "key15": "2i8wvpfAjYhjch8THuemxeeuoCmbhkdmymfvNhtc5goqtmwYXmRC6XK4ouZ9Cmp5SBELte3PxPdr5SdvYDzGgg7E",
  "key16": "4E8SYnL6s6eWWS7rjNNp6NLowonFzPgWDsNDFCnCYzbE1RQ98D4go5eoRTtYDjJiHwB741JST3HheQh6z8gPA1uG",
  "key17": "5hyKYydxJCoE3ZmZqTtbvovRBN1JZdW4Xv3wLc3Jid4R9bgs1JwSKzUmtewadSyoRKQXt9WawfizDtx6XVDcDRcf",
  "key18": "2fMzwFDwSV4d5epDJS45TAjnyDcVy61Zn6HSZ6c878MRak28Zmc4vP731H387ZQr42aV1xYnm7y23bF9JMJRJSC2",
  "key19": "5LAcPDDt8K1y9QNGXEyNiiXcLW71McDT5XcL3aCZ4ysKFXZrJn1hz4Xp3QubjxMQxZMug2obbs3ee32NfLjKhuMK",
  "key20": "2zyQ7w4mKRsDmn3sRprRCfHRFSB8RtSBSjqfYnGhN76gCT6ro4C2tGX8BhrfV8hNqRrGkSbejEcvxHN3BhbcEHqq",
  "key21": "3k3zwZ5DprsGM2rwuguWH8TinFx1CemizHynrnaejNFgCxUoTigFkqZUhH7bv2WVxSbAD9QWqrqqAK1XJPiMZDgs",
  "key22": "2joV5VGnRpPisLAeaw9a5JBKjw3paX9mrrN3ZMsmLrbZxVpeZocLPd9RXsNqHdV9nBzx9XWE3zANzDQqJhos9EGk",
  "key23": "5xQwtsZeDv3kp6N2jKEp82z91JgQPsH5mM9M8WiRxVXjrGug44t5fXwChiDaFC2eV75wX3ETVnGampyoYpw1mjbX",
  "key24": "3qd4ev9WvXqfpAE4U2i6J3bCxZYpL2wGhaSWGazueZpjXP3gf6R2zUoNdDA6vkyFvccuVpuMeZDboE8751cxtwRK",
  "key25": "2b1xarsWoqULU8ubVHw6wXaJMS4ZoNyWZK73Yo14JgeLAhaPQf7n8K3YuXXmfYQRzR1KhA9W3Gihzax5MZgTt6nx",
  "key26": "ykFbsUns4qFtxrHfpwQXgKUVAJyjaDuEPtHEvjdj3FXS8g8tSk8tfJRi73BPC9YDcDSBYFCVvPWPxpfsJ9Qi7rc",
  "key27": "5peviN4mrrzCnALaoh1mmpuMLKzGWj6MSe6gkhSJhTBQmHZJGoDWHpiPdZG2Te8C4S67s6xZZQRXGUCnNA3UpKiV",
  "key28": "2ezVXVDMjdp3P8KNNbfjMT3mXL4h8vCnpc9U7kmNL31bgcpvy2kfAiG69KpiAQoEwtYEo6pKMwWduDATHbVQ7zoF",
  "key29": "4D2XfwV8F8t5CHookhGNAv52nQ8WpDGku68ENF1rmqbiKJBJKzjghBe9QKuwNgWb4NrFGX85PDKVRHHzWuhfBrwP",
  "key30": "3DZuEYpKqoMiw4FxNzYLuNEjAbFpaag9RtZ6W28QSaEAfWiiDdYFm1wxMYYqCUCrimgyU3KsrDDFwXsFPofBJMry",
  "key31": "dJ4YPkve74WDPVCc4DmpvsKRsBxWew2eiTPFtER18tqtEgN4wPMQH6MRAqa5WeGZJSH7FrBDQsAGpaXsqwedhXF",
  "key32": "5BJN4FPZWs8SBTry8qKY3ZH1UJAGykLgtkFjwGK7hX4q3s6vWSpvBpAbVANSXAnrig5UH1SwiUAYho9bUsefhbQA",
  "key33": "2tmEcbvF7K7FvrnoQbs5vre65YsMRZZfz583FcKtKEAvRcQ1mdbJzyMHf9PaShU57CHHmiiwr14htzt2ETjD1EsX",
  "key34": "5AFN1tGTFP9kqKaxz4fJPGrbSfKqubXHdWbS4pSxh9S2qdbJ1xv5NY7kJJ2bw1tmApteSNZzhKroT1LJfd7Svhoh",
  "key35": "2r7yZXcw3Dv59dmMdSZMLu8nYc691YG5TGDRtMr9NZHN8msMA3uyB8Jpqh2zA4pXSczQ8PfDroK6VuiFx1wofxCq"
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
