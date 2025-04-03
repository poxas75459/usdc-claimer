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
    "J4kZyiSxKETxSDD2VBZGVdt7b9StmzfEabA1VbpBsjF1FoAx56RzCdNx8uBi1uccDriJs2MHigHrRrkTKnXoMqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67LSsJ4dotNQJ4d3CC51SCLh66w9MKQQbjUZ74oGYjezxSuKLuDYFKBEZu6nqt3HaNgENGAWY1gJeFhX1S448uED",
  "key1": "5iWPTTtsHABUjaL58QNBk3c6RFmD3n4nA1GGKS8A8NpL1o6B8xHLdKvhTPeeBqRRjh1jwFhcbbkumG6pz3sEkDxm",
  "key2": "5Tq8vU4LKKQY3EjHyZ463JhVaNnBactLm4Smp4Uvuw1quc9aTikpnSoLKVRwAihgc3EBmqPw55fntr56F7G16r6Q",
  "key3": "61S3C3vpLBj3Syd3hNREbvULUsY5qUaDkzqzqg3zv48ApPNFLmNCu3dvGYxQvTw1PtW4LkphXtktkSfBscN2wN4V",
  "key4": "2WARH9qfX9Hmu6gVP8GYkfEARTt2ySBBj5mJLqwt6nKBw2gc4XokYv4TXeSDV2tggBap8GXPG9ksnpP83moMNt97",
  "key5": "XYohy6PS9FBWJZQ2Nnr7HAFEro7bUSreoubMoaPCJfV4TjAQedfiv93VAnHwYkEgD45QAiM9iaNhVe5GWYfjxRE",
  "key6": "2ZgPuWrPZRnp5WhMms2MGwAR9AAQZjzNFPK4GmCYMGRXKy9orGMTeoMuwTfhd4Uh2iGiGKueEw66d11ap9mcF5fP",
  "key7": "58z4JSfBVnxjSRh5QBgUM3ffnE16oDFa6bHLYyyqA7HejaM2BQf5ztSPDGh1royQVGWQ5naVhTMMBKghmH3WAogn",
  "key8": "2cf7Nu5nVCot4pqjyjiagEyP7CVnXeBZ1QvWP22rZkUsRmPZfKVCAuMWNy5w41VDWXctrVrrTJE4gHDdpGioYTZA",
  "key9": "677Za8CHm2zEegTg1B8QEu7zWcHe9pfG1pT9CnmhJfLJtFrbqhDE5Ppqtz3FqkKNRgKzAVF6Fa35AA89cqzQaC3M",
  "key10": "vegnn9XfyneL8qX2Hsy5i618TmrGc8n9idKhiGdKTkn1WMkH3AyvGCBHvJrnif9EP3xYsJTCs5YwxXzQwot2Qtk",
  "key11": "LPxzAQZWUeUPTySRzUdZDJhryAVaAWKVFw3rDd3royTXn66kDeBeCUszyd92u43fGLcgDhnhsnr9DxJSRtUTLpc",
  "key12": "3ZpCTtw1kx2yRYb54c4FT9rJn7qZBbKY3pedzwdCNSwSMotnPb7AhM1WnjTNF1X1dcXAfRTzUFT1vvKjxNVp3TdA",
  "key13": "5Sfv6RFjaFGcSLdBNQiQmCCscSfeuJHjzSzsR8BToPz6Datg2DcWAuBxwSqjaGsst73D9TDQhyBgMZP9ke6WpNR3",
  "key14": "4xGDEq9oDBo7sgtesomh2BonoMrrkVuppiawZHs7YTFTrDSZ4byi7KxBphTANFHo3WmXtS2PtFrnBrQjfhoTVfw5",
  "key15": "5qrwxakhT5aT1AnUtVjojmqGCvUqZM4xSxdMdvfDRXSAYFiyQkUpQBUkcyDtxbaKhFe8xiug1uTpu15G7xMEwoQz",
  "key16": "5GnNJecBmqX5Xxf4iTFphrNKjAT4ow9bdx9pt8gH2rDME9keLLrqpLKDZs7uMDUyd8Z7fG8R7an6MLYcT3tCaeWz",
  "key17": "4WJh5aahJwkMKXhQ7vbrUW6M78jYXrJXBu6qy7E7EEBkb1VZUazM7fR8ykarfLWhQFqQsueR6ThmeZ4YJZiu3TDC",
  "key18": "5HozY7FwSZXmpTUZKJ88pHqgFciBQ9452BsNCMn4ArwSFhYKpzAEfojz6pHiEkDDzhDSdSmaa2BBQeDynYmGsmZK",
  "key19": "3G9AcnHhHD5p6uS98LrA24VC1uNuyXfj3HB1248R2HawmZrjXerGY6f1WCuQaWNABQwxgAQ9G72yGFVBdZhKM2mQ",
  "key20": "5r7Yo39of61mr9HetueoiteWsy69sCspmNTRAkDX5vFy8zF6iUQtCckHRAe2i7cxKou5Lbf9h1MeEvqFHYwLwz69",
  "key21": "4j56VZdzAgdRebMf1i9opwGbkKhBvrgDVUnmWmgooivgykpPZG8X2dmDEiVPqcWWtF8NbiEGz4CBTZs2cC92hH3T",
  "key22": "41M5J3ktDszKbPamFX2b8s2JK4YGeRpQpFqmV8Z9hfnR5roUdSKFRSZuNTfTarQ8XHyGsbwdDn7HokeW9unnB63G",
  "key23": "5dpJbbVMYDJunHwBEoeqTxTkwnrgGgKq6khemL8q2R3yYmh54zQX44FLPgGGmMhLBK869AKz45g6n33gbBxyfMwo",
  "key24": "dsFwziZaBGdJxEn9GS335N71EMLRMC9xw5JqXMWprGLLV7uQZ39jGFAjy19mZfvm63GKczXnXopPDYxJt2QJA7r",
  "key25": "5aK4s2aoJVAGNS5u52qjF9912t74CDVuPHmzDSMVi994L35WdFXEyKd4EtrEWWXJBzQ5W45s8XdRsuGPL8CgXek",
  "key26": "5vpZFJuGs42VgdneehCbTVgHrfVgheQdvcreB7tFpnSLNv4Foh1YjgqeeT9FeYhJbZH9NuoDZ2xHjKUdUJdeomnF",
  "key27": "3fmLtu9y4tTwCZohZULFbbaXkAomhxovAy7ketTwpDeaDu1z9CedHwcj9kTvQuUH8noDbjw6CeoDAmb27bR88L32",
  "key28": "3Jj1LoHSVez5d4LhhpYuYsinF6eyCJ6AmwNS4DoNic9MGJFj2ggqrjsFPfJMgc4P7QMfQKa4yVvaNwW1EY1Q4qvK",
  "key29": "5C1EUVN6cX2JVGv2JmCH8ftmhBtK1URjgtyzF9G9MWCN5B2WqpvxytuDSGyCb8RBxmhybm2Lc4SYQAVxagV1AtbY",
  "key30": "4tEd6NoHjJmsEm2hn6scWwFvHuVYuvc5HGmFoDuWKCxnmbbJXCdWg19AR32ED7QcTfodiVwhRPnczmBso3SAdMHA",
  "key31": "rzLT19GATuUwgbT8MHqn6N9VyK1fPra8R2pnbKvJsExAUqPTRTntvWmHg7jjGix79qMVBaKConSpJf8a8N5sC3a",
  "key32": "ynYD6CW9Je9LbkQimtiiAyAZUyGjCKVPDxiemz9UhgEfVJwdwFAJGP9NEggeeMvTVL4udYDG4RYGQmQTpnJbFAf",
  "key33": "4zC6oTxQ2TYbVgke3L9ukJcV1RrthrPvA3rLq4hoYAojFRRWid7zfQ2qVp931Cr2yjUwxJQMt3KM1Bxpo9bnawFo",
  "key34": "54Nr7JWRY6YebQ3e83JzduDh1VCXChy9by4ayZdVgLdnfT2xscRZUVNNvr7gUcqS9Cv7uq9M3cfHMFp4D2JGkt2F",
  "key35": "2JSuQosFUrtjBB7LYa8ibxnp2hGJmYrHzj4Bwx1RY4vxSSMMpNvEusf1WvMSL5jpMpH4r3LHUmq3YFvGMTi74gh9",
  "key36": "2PXAWwD7RPdrqgj55YDxb959a4jug6i5DHrSQoFJsK2zToX5a2Xq44TWUgMS5Fy44t9V2WtbdEWPiYDBoiMBsLCt",
  "key37": "mvCUFQbzUJzY4rUNUvr273Bajvp4Tb8u64kx2K19BfQoZ4MKomwSyq5uo3pRSP1bQcUx8wawhN5pVb7DjBBtWkX",
  "key38": "5DhWcbZJXCoyrNZGAoCSVsQQPC9X8THapQ7DwJDzJ7xrGnZP6cAKN6T81tZs5qLjDxfGrY1jitx1SR6oYPMRWtSU",
  "key39": "51y78NCE49zvbpXWE2tATWZNjay1e5ps1FiD6cX7ASBPpHvswHfRcGeXRv7TbapdCx1zg2kn3PSJYea2jHU2SoxB",
  "key40": "R8eBFhZU4TceDHk98ZfNCabRgqhtD9rboMLG985z3i7RkH6M6gafMyfgUnCzd6fwUegxoaK6vaRyAsu4m6hF5Un",
  "key41": "3qQDMGTn6wSi8tBAoRkh77pScomkCduXVW8U8vEYp16RyDnJTaJKZA4QjcGACriyzcMkZtMnfUgRYXrJkPnDuJvJ",
  "key42": "ayUehjG8Ee8PcxULPDrdnAsj6ahHdssbbdLtyWhefwYW5k1xAfqw5aG3WYkM2fFhwHrCQmzAYkrtBxi17DnRtNn",
  "key43": "557aUrUovjqNEeKHNA5sp2ddojMTGbvS8T88NDoBZqvJNNhJ3sDRNgRoanDXKRFV92pZ5XRTunVH5vKXWnHwCj7x"
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
