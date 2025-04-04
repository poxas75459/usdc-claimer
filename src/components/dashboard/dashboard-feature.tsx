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
    "2qwW8Nchko9Phqgmwh8itviTSmjXL8Y7X3Xh47CVu8X3E6QtNWtoUEaiwgLjMjwF8smbi6NPw7A6T1Arag9vN6gH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LFetpeVqpX42Vnd7BZ594yvGwomMmMcrfdTU8668ZvsPNkmJm2dXPhfqqYNxAMf9tEqMsn1kmafsUaX8TLHFYgf",
  "key1": "2N1xdwUdVt8J77GEUfyUPQ1Vza5J5yoLkQfrXdKfKvu1Zvk2XSHw81c16e24vdmb3tSdugtAEqwp6WrFUFxG52bo",
  "key2": "kEZWSQ4K2eK6mzz3baXgrJM5iSmvtLxSEfpw86xPCLoGBAPPWNPG3Q3wHrtg3Nzc6k4bBDfiQ8nRbFEwtpKFfpa",
  "key3": "2eVK8p2d3E3Eo3GRCbtT9siAVVpj3Wc6pL5xT1TZNfGgBhGUvoszZV3QrobGWpEyQiXVMpGNh47HUz9YjFvt1uXQ",
  "key4": "4Yvfyd1FGJMqAzb6etupzbmYrt6CUnJoeNYbbV9daidUD2D7V1GAytLfY786d4mjxeve2F59fYGijMjYmwKCAko5",
  "key5": "2MvsZjoNYJ48iZChNGm6eZ5JotHcRDRiMA77CjNaK4Dougd9DUoPp1YqkLAg1CH1AviGzRfVByTpfa7hRf8yc8uo",
  "key6": "TbxtFkiawYMKrPqgWLn44kgbBTWcBSGishpwrRBZ9cvRYYP4SZoPC6mcwgPP1G4gqYrp69YN14NHzq4RqVhjKJC",
  "key7": "3qCfWWrfJzzcRw2UvnQZPpZisjEZAYGzmiGhtZM7nb8vvsiuXXx27G1F1AVFgVBXJUGFMLnuqqowXCCQ4ruLtsa5",
  "key8": "21dq4nb9Gx8Z3j8FweMmAJUGSQF43PJ9mT5HMQqxvzvs8nRkTa7HHZYw1MtAnc1YyQWWzZ4gU95sffPtY4fE94CR",
  "key9": "5uxjYdzcSuwBAyHnJtQwERK4uxqdcUww68ikrjwXkWA8CwxYHwJLs2k2AukS5aD5AF7F9rQY5iSPmTVuFA8Zw6ic",
  "key10": "BasceaNsvQn192aMk4PBhyEYAVfb1Bn6vufzfFiykqPGCtcvdANauYEgnNPRD7UeQjYPxzyWWwwxa7gpRk7HMAg",
  "key11": "2bC4JeJP4JFeVdLNWvtQnXzork8cbqz5JS6Vof4t47Xmiw7AYGuv8rMZG89dg3YCgRv9mznf9MwzCFSNcnQBt6qS",
  "key12": "7QBnqzdchE9yHjNt2P9sFcpPS6DWWoDYTq2u84h43ur3pbK2o33PDVQALNY9J5d3MQHvg4R29Qyh5k1jMTJRxp9",
  "key13": "4nnAZ8mZRXfwg157pPFtcXa3uihP4Rv6PnD811vUPtkyXa6fSqpTkyUaggFkMghetKo1S6FoPReN63rThsQbQFBJ",
  "key14": "5b91jRkVrGdFmNbKzqpsWAy65Phh1fe8g4nS14pvt7EhcYr63NNTpHmeDwumnJZA3uuErxWx1tfmamyhzrWayw36",
  "key15": "2rnwC55Xm1Mdes53VruRsRFePTVcGHTM41XuCgYye9LSydRHui5NmzjwdSbT92o6LLr5KZnmAQ69gpMfL3vEJzQw",
  "key16": "3V3ixmb5miwf5km9G2M18hUmwVdE2pJVjWMBGc3VrMJjXpzkjiy4e8SGwtaSx59hbMoib8Gxg176BLkUxPcbieBS",
  "key17": "4T2SbumaBnTiNijca5FvYZ4cnftQEfKPdUMsm69o7uJw7K7jx8vAf2Y3PcvefifJ6PtgVURbrQXJr44hd3EP8YAG",
  "key18": "kacWHYYwqPNNNGcrKtRbiZYeDnNZDun565wmiatQCTEfZoDDZsNq1jBWt56CVyYcgBeqrYw3CNnNFQH1uFzFV6j",
  "key19": "4ffjJGmepbtXezDRGUKsLBmGkdDnXQ7RjLPU8iBS8qDRPBV8bsHLHgEnWnAHpfukGmi3Q68SifayiwpYnGqrqHCh",
  "key20": "3jpiinxffr9hGDJyvhhy94eRxPWWoWdCsFEZw4USB9fzG76LS12yNZ5sWSRTqZWwpGaMzs66xHvLJYsPKLrPMVtG",
  "key21": "2UyCjczRaH9AKyT6oR3z67UFy2S4SmRvqsNz5V6vYtMmceY7mPEw2tgVJ9u5U1Smxi47yhKc8Wg8ubcMnnmyCWLt",
  "key22": "42cRujxNp2U3AC2WpdmRPSWPoY8UeQ5my7onhVtBE7NrdPgX2kKqsiEmaJCWScBM71VT3izuao7aUJupsF3s11bd",
  "key23": "66oVrWKnQdonf8PYFJcZA8yypSpjU8xdLCD4mf67uip6SLiy1pmX4ZXsuh4icoYUj8iVy7BQWAGGghDEuobRFDQT",
  "key24": "4MJ3RoQfAHnJHMvvnCatRXsq6ptkPJtgM8uLYUGV6sqSxdh1HnwEPYUCR488XTCJyYA4HEPbwSH8DJwMJ34p2215",
  "key25": "JE85Fzf9xAwX1ePCiodtcXnT5YXz3PZEPtVm16yVGzCPbrzh1uu4ojyQ4onvC496NZpyMgQ1XYXvQ3GLKLnLfsT",
  "key26": "3Nc2b2vDA7Ps6vaVxvnbU7ToAuHwL8LxJNgrMe6Uro6VzgUBkmzyAMtoV5YwkfL3XT9onrsUJLDybEnc6fswTYmz",
  "key27": "4SQqLjcksgh5LcWdM6EEzBXbdJAXwZ5ykiHbFs95qQVymmTMup9k55ffzNxmpdxt8i4Pb7YdBTMk54m68EwC5Tpw",
  "key28": "23dnvXxN1ii5W6YF5qNBojwVvH5prnR349dD7CRfZSJ1omRXEWvis7C2rQ84kfk8AVFiUE2ZTQJ2NRf9EnFEhJdV",
  "key29": "3GcSHoVX2DUwHtBMRRPkLsFqsmuhTXhf4BNDmaMxDhssHW3ZEUhaqGz5GkQG9h2RapNEiM4ZKLonCGKXzK2Mxhxb",
  "key30": "4KRA6MfMBXpmRQDpwLpoRs3XsA4xAK9QykZbJ7NuW5fbhujHpZfCuK1186RJBDiQucPCYvh4ckEUFZJsemaAZvst",
  "key31": "4qMaM1jtGmMUwNVJMTK1JXeRekEzmPexVdzPGUMcRKB9qHyr3DHEvwGN3bJ9FGGDi8enFc3Ngyx4NzsTAHCpAQwf",
  "key32": "4Mz5PVMk7wgRNWpeRA2sTFBuBajeJvgRaNmxcQo5fTrZxKH3c4tPeoE9ZK1xqDwCitmoSAQKXFXMXUzq2i9YPDx9",
  "key33": "3PYsytUAdB2JxAXRmdxu39NNH4ttiBZtHZy9yq9cLN2pHRayQeouKiEQVTAfyFtVbBpzdpKg7ox8Q3dMsHRzZwV",
  "key34": "4MvUL5Q6MvEVovqvYz5Cf54HHwKy7Kqofn99kEVmZxQJJoRzq8hRoPRuVWePbyyLydxF8xBcd5mWDhXDt8bycbyA",
  "key35": "5aGzEtbwxFz7Ki9dF6Kujo4rA2bK2N1JeKyVimHdvQcjV3QwcqBzAPgqicCDXQTVLXVo2HLbQhQbSsX2ExJ1GT8H",
  "key36": "2PvusoKmvUYLoZSmr5QPqEvvK5HiwdrBv1mCtQv5ruNA1tLHcbKmLATx9czpnM7FN4akpTzPDQpTz4zmnpvAdMa4",
  "key37": "ZEfMM8v5KaLZiVqScJbEpMQqpshynuAiafFKgpvoHBDPvRVWhGvehEbJRGgbLWgRgirqPGX7HBoHhXAoZkCexRm",
  "key38": "3RtKPkAJWD5ctF75LTV9edVMHgWze8VjyDZ3cKoGwW918uxPD42JrY3JbJE9jV9XS9UqcDBrNSFAF3LM7zSQqSz",
  "key39": "2WjjwuFdyfv7exs5qK87iFuRu6DaGBooXjb398zGZPTrxo8WxYNe1xAuh38kmceAUdN8jz63FMhePDf4yyJc4UZi",
  "key40": "4oa32BAzdrcioAupNPXQexuVGAt6qmm5JJ4reWHZVBAQPE5zW63JgvUBzRvkqtae6KfuEoW3UqR7S77ayJW3YMyk",
  "key41": "4sCQTxHyyJ8ds5rpVXqyW6tR4EqVdyS27D1pT1dZk5ot7rwac7wguBdfyugfosDF7nkcsRhW22DSqUnfE6d4hcyg",
  "key42": "62RPmWLPpF2qMR7EoT9HvzU5tLLfqamKsQyDm17v5AqCPJSSrsxGZmJcQ9MEs2NR1qCbXT4Jo7aphwssGZjMJpv4",
  "key43": "2QajtCdARjwyvpheBK4v8ST65M4pcXUoo8fppHKeAFD6p6HmF7LNQRH2bpnQF1TdKYbmGCrRkNFWJZR2RZzvacgi",
  "key44": "dr5cKYtiKpfzyfGjzAtJ3fPyMB4w9ionauAkKfrP5Wg73sGVN3Wu5XNwfZy5vgHuVQPG38oBgLzVGVHShhr6apR",
  "key45": "4kFDiUVPbdCbjEZLuzYwtHFLZDUc3rgg8LRtSrTXk4CioN7iN5Po4wPoEFJu7JyC5fffnXEPMM8qU9Fj3XwMZPdK",
  "key46": "5dH36mb8dnQ8ZELAjbUFHwnDeYe4sjXf2cKqjDaLKPvPpY5wfpFyAfSPd7xqgJoYackMKwpnfjX8Xt5PyGB3W3KY",
  "key47": "5XTmtHNwNtGkW4Qj2V2SM6xT6vKqdor5vnJkJ9SR48STFKgALHBamqcwTFUv6C1D7TyaBrqwPN6WUZXDWW22eB3W"
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
