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
    "2qFUKcmEbwjpurWMEHxr2WniCg66TeRkH2hTdN6yGGYNA8M2JnSRckBJ7Em5zHsrhfc5FrZyMdyDuMxfk9Cd43iF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rre5h9yvGGyw7jvuHEt7gFGpMSffntSdiSpiuL1kKkpNqqLDwMQxjeUPWoBM5UbzLFJx6i8HPCByQjGE6xBu9xH",
  "key1": "2dBKk8rD5v4bxnPRBBkpkrUdBjMxrtbSrcWf8SseQem7LQBGnJ4qyyrxG57LezNHX56efvjYuTq88DyVGRxF856C",
  "key2": "2NCJVgRbKphLQ4udLFk8q6NDmof8NFcMbZCdxWGB3CDsB7ETPf1vi3L5innE3d9xMAwgZUBjQakPfLXh1q2xgAxm",
  "key3": "4UJ715SH6yy3rveNsTCnKH8NLUYFWWPh7eaeDvPxwUSxE7JEHRjQLD4g5CPnU2T6QqS6p8nCfmBAX5G9iUJCaJb",
  "key4": "5YwvwAJ8dwPQaPrg9g8kmy58tYHbguojyipWB7nqWYBFhDzAF2meGjZfW1rNqz5WibLEeSEwnJmsyCpz7Q1T7Bou",
  "key5": "3e4SRWs5S69XBoY2Z2xURFCvr94AyFmD3bVADQYERW3jDzU7L8AWghhV1tMq1MgKVMdvsYrhGoEPjtVzXqh2sBVD",
  "key6": "AADLcCweUgRTVKo66xShjg4Eub581YqhW6XNfkM1iGhPCT1iQpcB8bJVnjNzMWV8HXG8MMQZ8Uhuo5CsWq8WEx3",
  "key7": "62d1bx5rgvr5jY3rcXNFfD76PizVqbmwevDawTS1mhqfv6xUwexgvFb1koHBkxRrZ2oKBhJAMnek6kJX3NYxtPFx",
  "key8": "dEY6659ge9unSzw2TBYWrpQ24ePZkbDnodAX1XkzfySEK9x5AqYr37McvTqAXGSgNkyBBZevnEiezS9QSC69YSc",
  "key9": "3raD4UEV7c7BQ3Vj6BrELzCD3i5yvwU1eK7g9dUC62VtEnP9iDANdLxC61sN2PbUE4riPqjSLAvnVRo5Uzvm21Wf",
  "key10": "4JPaeYrR71QqP482XUuyimrznLUiPoCfqHn8NkD7PHXNqxdUfdmrzjBKiFCXu6EaNpAB7w3yZPHXsphqygTCBCCU",
  "key11": "2a8Y4NgZTrhvgCv5SUeKiSMwTcTUAJskEBzQ8EAVjQQ38129QTPN3RNYgb4yaHHcqj8HjF87ZE43u8hSWoxJqV1E",
  "key12": "4qZqQcbungi7okxp3e6zZY78pZ3n48HfPFpmJbHCb574ZMgeavG3mzaETCKJm6wpKZedbqLHRLwrxmwJAKyys193",
  "key13": "3LFicYVaCnLE74ri29EGg9reWo5GwN1X7SCqofszgYUGqdKhWLEo4TTNSY6ayTRrRBouzEjsNJy9ZccAtgAnC2Bq",
  "key14": "3UwKj3cR7qLySUw8J9EAqGSq355Qp6vRS3uGPCj5CXHLy3MPmFhgkvJdu2DWAUQz718qJvv5mZFYqaWhey4jDnr7",
  "key15": "2JG1oBV1bnynSL6dp7cHnmZj1ZwWePVqfoxSbRkrNjY8wdG2USfbXuDyjhcJc2eZzQQm1csDqVymdB9TSr5u7NmA",
  "key16": "3778fHYGskb11yyUHLb4g8LcLfvpCHCdw4EHgShcbC5czTMi2Rasx9YvKbtoR8uNP9vyrsCZ21AKX9YhTkvBaAJj",
  "key17": "5nfVgh4jBqcDguFN5eALLMprAEPwEqmfPSa8FYn9UvUosA1coh8dtViVyiqJGVrTp4uwGBJhAw7WRjTnbREuLLXe",
  "key18": "zhmiVSeWsnruVykWD21N77tY2cGWMZVxV8Unrffo9coAmsR196JWvSc2VhjWcFh3ZSmWN1tdrPzJotSXbvyBK5q",
  "key19": "mL47uowExkcffPtgQQThHr2UNyjP4DCrrYvdPrtPjF1DQ11dM58UhN9UpWSz3TDw1ngvwqxamqpW7pdfpNKfnat",
  "key20": "4ndKF7sHtYqqtqbt13iWhqHwsSu3RMa97YWrvomb3j7CaatXQ4KECZ9V6hYWSPzyPPz7M7jBJNaYC4owxmUQPc6K",
  "key21": "25Dtn1B8dxcXViSWxbLDt6f5bCupgrLeFWcDRjQ9TY8CjQrcKZXyja58SFNxaPGv1ieUBAVFR5gogZNRoYVxDtpY",
  "key22": "42ua9pUPUMk26voeXrr67nABYBLDXm7dKCVyxBWcZi8z8U9gSYYR9Zm5YXpqJF338wQHnD5dBctAP5wARnUdHwvj",
  "key23": "34ZLCTfzSy2BCs7DNPaAfErPjt6gqoiAphmbcg5kdMBCz6f6GdVGXH3AhwQFAThvy7bYSwpwJYoiMnioABRJhH55",
  "key24": "YEak767SSDcT5CPho3RXcyW7zH5DoT1UCwUwauzYakcyN1kzG3kD6w5XUvyP6ti2douk6XjXUCT66J6SwYpjSmD",
  "key25": "3jGLN8KUFADCjaisgRwUWahPqtJGTH9uHNfbioQHwPBguvuGUY541QG75bLLVYEhDAfDMDi1hkJbJYVYC7yMLyTT",
  "key26": "5XQknz5CkCkw2MoWcWBiMYjy4e5H3Fvq4bkm9U6LZ1huGqtLMGpYctJA3HyFhNo1UpEwNJ2AnnPUXmRJ2gbsyGKV",
  "key27": "5XZ5U8wiguxCYex2MYbzCBXrfXcYMfDnkJ679teKj3FyeTA6W7dnxkka9vYsnnscJynLeU2xFVGWfkPBJcs9K79N",
  "key28": "2PfTgSUWa2AdjmB5DNpzx6E3e5dzQbvrhF7hdGGYQDHTs6nfAPrKDZPLYchjQTbT4bMwd7fV7RGpsa7CMfjrzur6",
  "key29": "4fyWvwWyFeSq3wSYGNtJFRQHLfFuTyEfLANZk6a5L7kj9oKReyQL86ijnqedicqRxP2W4mPbnWAffGFWMJ6pYNv9",
  "key30": "2j2t4KjRrSbgKeKdmGsXu2KNbLcu3MzTB9V32wfQWbmLd7GU1diwrDmUZoVmqks8gXVinP2RX74reYJ4bSriWH8f",
  "key31": "5fZkK4jjmAiunoxR7U72f9WWwKcMm5coijjbknXLy1sjC1w2pmRhperQJbkmohT9hhDdYAi7Mc2e5Wj7BSKmfraV",
  "key32": "3poHnUJKSH2WerEGqsP6Wb6syaa8b3xFiZCpdeVxXShrsCA6zTPuCzGtVJynMQ5e2hFKs22za6qkyjVPCRxJfFE2",
  "key33": "3DHZbLMq7vUBmnbvy9xGzQQCHeWZNATooHpedxnfzDShJzM3tqjeqywuhiRnsqxJwEQiycyXgxVqbRUkLUAPtawv",
  "key34": "4cbgfreBWD4WTkr7GNnnXTP5W7iJ3bdTAJ3giLkSgbWe7uYXTg3sVHKcVguR2bgR3pyyZ9jXJeMPgrRS87qiNAye",
  "key35": "2SGGd9mXVSdraskASCaxL8A3ckidJScZ2AAiXscfpcRwBMzQQqt7H5i5QknZvPVxL9BWpBXeyqsVeeA8Dj1VAkiP",
  "key36": "5nzcWTAG8YqDrde6ZwiTKDdnbJtkbvUj1fQyXPkNpyyM1hFpRdAFPww4d64p3BsVnc9vi9HFZtmPaCRz61CSmf8o",
  "key37": "4H39qXkTRCNeaaTsBsnr3LdPCbacHTY3XApsq4gHKhH2KevtsSrNUqq1fqfNdHH171coCAPkNGZ8iWeWk1bAGXm7",
  "key38": "2bgUZFddaJsvfacY4Pi1Niar1Bycy79VCJy7KUbAP4rmpBXd2EdhHZinesVExiMEimX9xzQTfRzbbKfHowV9wqMB",
  "key39": "4QMhFjpnFRPkXT7Vu96cHhtPYJqGSzk2NqMYtdmvQFTLgRs1JJArqmZ552AAKCXFPsLUrfJFujJcuUkPPk7aMafx",
  "key40": "4LuuBxXt6gmGPqdLe3qXY7L8Bnz3ToWEY5o5G2EuVwdjg2G8tuVPDgNVigUUuf8wU768Qt41goFbEmQzjsVvv3mw",
  "key41": "31EfteYWePijT12PEorD8AaABWdYyuNzqU79SgMMLYLzrBFd3n5omXHSKHYFHLwopZyFy9QJa91eg7to9wuPmPri",
  "key42": "4SjK9oVAWKvoS59tuh9oHDXhCchsKc9gxSLCrqsMAs4n4MNzPER7LDVTDVpjknkwNCFGbSGudJjK5ryFVG1zxtKi",
  "key43": "5BgbNV6yitgV1ACEezfawnXT12hKJMEQzaw8U86as4XWvjfgz5B2wxgHzMVisE1Jtn3HKpchCfTJd2uQQ9t2aY55"
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
