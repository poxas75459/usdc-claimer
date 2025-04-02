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
    "qK8vQDyP7YPBBBXwkNf7YXdL8NkmkuZEyjJTWLEs63WGntCgypRqyamRdc9Jczfd4wjEnqDmqmdyPwVRvAEs3xq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DaBgDbuU3EgqHo71WGE2723ZVqAajbjTKkdgQGsCctPHnvxGXLd488n6g3GfKmgdXVojytNXcwog7VRB9nQfsUn",
  "key1": "3W1GSXarZ7FTn4AF7MMPAdR5wjvnPT37izYkUUm8ZaSD6TxBjrY2NVGuQdaUL9NARKZnq1TbUuy3Kgm3tgWtiqUj",
  "key2": "2UhnfxyZUB3trPkSMKr298Ygfb3bxJDcuTpwk2zQzuTtEy51mDtecFbeWsvvg31VyiucX3XAG8LeTRiyk4iXutLm",
  "key3": "BXrKjLWsdRTTPPWrrGzpGipTAGr5A3NhmTXcXjf9RdMDEERgjZBwx3ZCaPokAf8NUeMv323gZ8m5xDLFVLL6BWD",
  "key4": "4NB44RCC7sJKLGSNwEspJTN4m1oumfPcTnNG1VSSYwMp5Bj42FwLjJ3MugEC469V6KuNTJbLaNTpCx4Bwtbm2y55",
  "key5": "3EHuJVvcKcqiN3AfB7EqNKXtJTvyKRM89zmQUWky9uwb4LxWPNUZPyw6SPKCbjcG1pmPH8rQ265DR7RzjEFnBDo1",
  "key6": "25wkG9sCrMs6hPruKknfiDgfFyjD64ES9xfNAYt6znd88D6ttQA9jgoS8ghEoS3U4A5boqaXkXZ68bYhL3UE2odz",
  "key7": "5pZP4Z68uWtWGBDGGzbn45PaqqGsqxZ9s2UNF5WSZdfyLtczcQP4HJRa69N8UzLkcsuGvwccRX1kGEHw8FcHtpo4",
  "key8": "5kRvDo2U8j3bdmaraMFcxNE8WShtKaLtinvqWFYVj9JY9KRwwr9rLyN3abmtxhxcprDJR8zdXvfLL1K7Fd58xGdN",
  "key9": "2wuNaAhvxEJpNH89g77nQisAXsqqMVPoGZNRzigo41uRcEudruxZf6tLA3WDMFjAFLWJDxYoPkyXTG774GqzY5D",
  "key10": "4jnsfrNCV1aRVoL2VasdoD9GGQ2i3JkGL2rhpHSHujGVGxhs7kPgK2TysGMEMLuoj4BuYh96cb6soQZZYiviXVXx",
  "key11": "2eBsA1wzHZK6NfuCGjf7UEeem3FX881tc4xXVXyVFw5CQA5buCuiTbkuZ1T9s2VvovdgEB4Gk3wz6JBobi2ZuGZq",
  "key12": "mr59zKkbFF3QH5QUt8iT4Hp9BEaMq22AAXrNGZaZqxZsQujzZGAMpphZvhtpZ9H4HCVwFLTkGx9MUixgRs2Ku88",
  "key13": "nZnPietc1WeCq7Zqd7HzF3a4dLjs7CN3qfQz7SSbHPJxU2wzL9Vhxd5d5C8yHKUajXtqPrSJXtDwdiXnr49wx4S",
  "key14": "2zeb9T1M9nfNvaWGCg4F23PTdC9HKwt5ygPrFB8rexY3CcArasw9ky5UJAffp9GvHqp2XwBNAbyBWfUiJbq6VLUK",
  "key15": "ofU6mi1VaQ2UPPbWZEtvRkzsM3cqJB8T3QNi5PYnVjtbkLKmHuk7tJafDfeq6QAZ1dbcP8oUuCXrbAP935FrT6P",
  "key16": "3uHPZUg9N5dzhdHvaToGwvLw41TT5WJBt7anLQQ7tjojw4MTo3XhfddhmkxbvufRtYv8FK6YGSbm536PxhzNRSAU",
  "key17": "NypJFhNqR5TsUJBEPxoDhtT6VFMNPiuakbXQJki51wJdMLfHgnUfMqqGn3qPmSseK6Rq7AnFRy8GpTTrYjJeL9V",
  "key18": "4sjn5dub11rcvks3d2N8Mmf1YH68hqhWSspW5rwSzkZka2URyzyC2iNkb1t61uPKQyMJnDRppxU8ck4NagbgBsDS",
  "key19": "4wLm8HewrCFzBP6aLpvtGHo6eP22151nf3jJ3MSJodZsMfC1Xh7Y31AdqGVcc9G4WAYJtX9C9nkozincCxhShXsP",
  "key20": "4MwkryxavZtU5W9dp6hftqJvE629Zxoo1yYf7YPA6WNyvNoJ5ajwdoMP4uxrmreBgXHcw3jM1mTSQ61tyCtrpm3c",
  "key21": "48haRncqtokoPe2aTWBV1abznYjXVr7gMgBrXWkztrvnyJAqQPSFMbfL1BTiWU2RrAfqSsu3opi86UTxiZZFNfrd",
  "key22": "7Sh9MrLRHCPzjZaiQ6pxa3HnbP6wXNqQoN9bjBe89QwP67FgjevsjWaAmRckvkpv9KshPFn3ETDnh3Vut8mjinV",
  "key23": "44mt77R172dXpXyFxyyWGuZaYKjd4GVcvdnbzsmwhKhvjQwg1A2T9V8GxSeswKLw2JrDKqcyPr6jwMrLHUzFZTQv",
  "key24": "5sqvDhZkE2v4agYfLW1xm7SUigYemTw5S4kMTCkeyrhkMYtZHwRv6Gh8YN66xQcVjUMnniiRUnLu8a4SykGyHzb4",
  "key25": "DtjhN3MvuoKY3xio9J2RkMtS6SiNnHnyJF6Jybdpt2SCdaAHr4b6JmvhYMPVUyPU7GQD4GGSJqLG7dPp32tVsbr",
  "key26": "STkbzmJ1BvFtqSKXkS4cfREJ8suR1BcqFKJMojuUYSrbJyAEMJhWDBgjjPZ7goNHxCBnn7B1HxzUKU6zq4CkiUH",
  "key27": "3ieaj5w8LRJ25eNNFrrprM1Vp3ZPjcMxhz2A245rW2yoWyR5jLL1orUCzNQ3VK6Q7wwXhkQCqHnDNbfbD1v1QGZx",
  "key28": "KnaRJTp6K1529oyrbT1VhTKt9xv1QwBTFXJaHHnSbyk4tRXjyA16RXJc9MnEGZNMeeCnDj7xsxCGnFrxeQLg9Z3",
  "key29": "4TgqBfHuQ1aS1tdmuy8pJY8dmL1an4BhgXc3xUar1R5YoHLEMgv182rBfo9nomMvFixVVsvrTWQvnizdGWU1FMze",
  "key30": "29qQ4usd55jrNfQ5BW4ccuggtheWKBKommQ4PefBYbZ1fbSV3iuyF8ZVNwhpJgdL2SiXyCSkYzy4QyWxBiCBYarA",
  "key31": "38B5aQesyPEdrjp1eZT1vmggkLqMR3k4Jh2JiEhY7XVhP3NK5kzHcMdiwH7RbVvXFDRZv2jjn446H5idqYA7oFUW",
  "key32": "4u7HNiZJVkst1EBc6U3teWaAoux6LyaiwKjPz36PfQqmfht13oVfVLfAS35FZyV6qc5NCBdFrcU5CqBWjNHi34Ec",
  "key33": "4eDtyxHwBSC9r7CNiAw5QcXWmNVNUKCR8HDHKFDNKBeE4ySQetv9nA79wYaQKfX9P67N7HFsiBYoKFqifRByEWpP",
  "key34": "3ymS73U1LPiuHyS4gEGuKr3Zcg6acR5gezp23nYt6echen6XxGMYGx9fC4SaQrEyCkRHyHHAaMW7gPcEAwh67wt6",
  "key35": "4cGZY3fMDhhErwMeE8FmJe6B9ApVzqHZjMXZWsnxGSTvQfwHFatXJtRrQYRCRdEgPCnTyMYBgpG9jVnFaa8a83Bm",
  "key36": "2P6i3Dw1MT8bk8J4grJPdJBnKZptBbszXYtms2fRp9LjMDB1esbgnaLDRYmc17Lm2yxAcKB7inUQ9bkc4Z4N5oe1",
  "key37": "2sSr2TzVWWu4dzRFKz3WU2iRNR8k5mTwF7KFxCZ1ApZqLd1MeUGUCSwoz1qwN3LpQMAVBDkkmyffXVgLFdBAnAxf",
  "key38": "5Zo9jxMVuJnbPSS2SHKEsJKzJMgne1hTNKuKyocmkymuxKBG3FP8ZoLTc8ZdFjersfwMNigZFpPkwTiFfnowAJkH",
  "key39": "2qUWsZGqUxMCEZmFLn9GrvREp3FAaEQymTG1Dcz1Ci9bvGjNKb3RVSoCVBPC8er9P6puv4vi2hbCFmr88Q2DZgeX",
  "key40": "63L7p9kLBKSz65v5gNMPMXoCroML7hPC2vvxM5H3y9pcGP3GirWC3TbvLgCgciyRVncBDvVsmwwZ3emzk1eYkjpQ",
  "key41": "2VsbF7DiheVcDBsLETgmAd2G6hjvDB1n5nsgEcDqUXjrMH2WGzJ8wRnpTv7q5oAcsdLvj3X5g6FFJB8gdKAj5gF9",
  "key42": "2Zk7rGWrxrJjAiRS1jjuy2RGMgZSWgGQ9EYsGMXQiXqfYC8567H8BLe6sWEfoosSjR9xZsPcbXkqD3VRCWx2tEMX",
  "key43": "48cY31NMBRkSzHcd8cz8tLTRAZksSBh6RuLf5hCmogUEwzACR4kPFRWmDzMTUSWEaw2B7xGs21VfkzLSa6NSvxAK",
  "key44": "1yk9knzdJ8L1givyCuZt2V8BXUjdRbiaQch9UvFUM2HYXJ2EvMJ9kWBGYrHeVhoV7WDBcRamiNjp8gWgkYNNqRc",
  "key45": "4pjLw4w7tktEPpFSB4NUvYt8dPcqTaRQUu52S1hnwTBix4XwbFQ7VN39UUSW6PSgXcoNzLKLNa9QVCssdNCMaJrS",
  "key46": "3djZzM5yMc1rRGKq7utxcZyFV8oL6zPn9PBM4m6eSbXmmucPnEgw5WKd92RfQ1r2PdjhnB9Gv7oa1Vw4RPuMgKeM",
  "key47": "DL3P4GvvesJPQVhrSjPu31AyURhzqd4wi2e2HmWExcnyuvGU1pLjo7E8xP26YoGQvEsHbFMykTf7Vji28mVBGog",
  "key48": "2eWTu7q5WDbA4Z8SoH8XgDgakc3L7Amu7Q4b377bzkvSDhvEr56CvT2LLeZWjyx4Rj3vCW9WUPD31yRLG85kr7Pk",
  "key49": "3HruMRY6i25o6Aj7kDFcmcNVm4xtxt5a1sxbMZeDE3QmrtKZKssf9YQCFYMF5pNhdXBu2vESBESJtWZVntvLTBer"
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
