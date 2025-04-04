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
    "5bzERxEtndLKj12fTkNbnYxopari9RTGhW2R5ZCu1uosMJu3FVGxWY9LfuMsh4jefrKPtVP4DnSYVN1aHDm9VFJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eSyKPGvsKvHFBDfFco6tpdWMXsbdZAvqyHALVx4NuSNDvTyjnn9hzbK8JxT63CvDbQhFGEUztYN1TzYzokttCQ3",
  "key1": "4zLXw5n5ydQNB8DchN1vjMvN2e53rHfwnDtGhdrDXdSwpXqo6Bu48QhLPPLXfHEbJEbkH2Mvy54QT3JoFbFJqHAy",
  "key2": "2fDXVvats51rBCDMQcLoXJdah62mGz1wDEvMUynhDXUGjgzQbfQdXKjVGW9RAcjxgUiAdap3obUhYiW58DmxHAru",
  "key3": "3DYk2RAZcrctTHLY722198wUGdA2PejWX3H78pW2bVedRUfHs5rCENXVXd45aAb9oBm5mCvB9bG46vmL2vk8mRSR",
  "key4": "87edC4kPhCkLKxxKnLV96j2CyPmt8MWFPpEag2acRkg5B45cnEoKFfNkuewxRKqLNpF4KHhCxaVzW7JxtukfdNG",
  "key5": "LqxGUX6t6s8Qjvzodo7HqbfzFBb5sDN2Rzou5eSirNThwupZBmLWVtXCsWtB3dbK9ubpr4i2PqTaibUZGk2BeU6",
  "key6": "3MYh2yWKMphydD19Luek1hZEVp6ScxaR4fHDnUC2RN4KcT1H4SxjACfAUUEpoPpHpi6d8M7vck7Z3p32qFpSdMfu",
  "key7": "k1tqLuSWwZaq55g9jAKJogQ2Wpsewt39wd6hvXQsq5uUygQ78MJLMxWF9Nzu7b7GKghRb5JwiUpEDR7KzfvfVMy",
  "key8": "5NCxarsjXEZy8JeabVYcZdQL9Ah4soP6fHVYnG1Yrqz6VBUNN1eXezApN5wKNTp6oPE2sZK3fQmEaU3bMmtXvADL",
  "key9": "5eee8DJtp9c4D48WaEDB2fyHgjyJ7feT4uFytgC1u3V1Z3gEtFL9JsviHAyJLMpDhjq3PpjzTesiLa4uzxRvzxxT",
  "key10": "2tRLrFS6FLq74Xk4PYbfKi1eLDRgS5nSqyVNYcwS9hBQbEYgKcnbRof5C4KcYHbqDoQb1sP2yfknuzkgFgXcD763",
  "key11": "3wXdNGC9ggeMFJ9N7BFPdJFc4QJjxeueNXtfdo4wFN4WEAfMfKhWbkBhN3wVz1REqgNxnvq6bTFoAAbJ25JS7hBQ",
  "key12": "3GFcXf3NubAGaMo5KZEA4Xh1k4qWJT218s7KBpA8MADkzMsQFVDFfaWwvo2tJWSQxZaJXbNixYVZstYmyUBBGvFc",
  "key13": "3ozKwTEDNMk447uvUsh7uYXbJVt9GdcvrEt6kCQsE81DS53Ej9ziP76WYN3DiyUBSDYrRKUo8G2UKgtSXPHXmV7P",
  "key14": "44xqR5vzWSY8BnD7mLHQdjYSbuJL2VmXXuYbyemn9A31KmKXabVZjzBEFsBKYNrSgU3vE6EPa72xhDZhuFZXLc5c",
  "key15": "4ufiMCbw4QP97VFMYfPASEE7pvXMv5aC6bgncEqVTodRAaW4dR5Ra4FZxkNWVNFqALxJZ3oSY9MByiSsFzg1GEoC",
  "key16": "2DgvGFBEpikkXu8iyTH9fTfbkwiVa5TbGrgDRyL3NFXozTj6uPWx6o8HfTRuwCLy4pLLUHzkwf2214Wr1q5fHN4s",
  "key17": "44NL5nFrADrhj3Fq3bmL3w6wUL68KKsV5Ay2JTY4QaW1toMXrJi2Pct562yePnffzVaawZ41yL7R28D5dLP96MAQ",
  "key18": "nacbJM8BytSwieWjh5Q2azMs4RfVKYsJqqw7VDhAe4xrytEBqdMynPr2iwHyA3zGa4jMJasSABmWvMWbuLpf1v2",
  "key19": "4uwngehYFehGfkdMsMLCK5TJkPQvyUPVDx5Pv5Q9htjLCi9qr4bZTQJGqt2qV74XHC9eFksTsvaNomzrndtjt6NS",
  "key20": "yY4tD56AfyhPAFsdfhr7ztzgfpffM4BjdmjRLMC4qYBnnxhyc1mfui9aVYwUdKDmKwdLfTxPJtiEAd8w5P6B7wu",
  "key21": "jNArwsS5UMfFVCbJMcPqaLECgMLkyR9BzkmocufMs3NPEXUfdZqi83QgYQzvhvMLRFv7W1B6P1NsUaw5Qt7x5zz",
  "key22": "FtekGEvLPRL5hwaSdbMWdsh5KQ4HnDJH3kkQSXhsrtAEcZWhur7xRD4vnMv9rBkZQobh6FGYoLe6zayDGzs4PZy",
  "key23": "5WaMbVD8xUPdB2pvYfxEa1ezPtfxc5dD2fUCJpJJBus5LCkLnTQbHSuSWmRzUiPbAWxAVjmcVJZDFA6zA3zQP8nz",
  "key24": "7bZKBNa3hSDhN2TD3GqKhBU2sQMD5VsvaZo1UhYFzJvnQx2T4HoNzKEjLDtVXipFXnhpx7kcg19BSJpm36q4Unq",
  "key25": "2yBg4qgfNQxMATgc1oDcmoCg51n4KxeqmD9wFEioGcxpsoJgcxf93UXNAUC9r5YHwZ5fqz38qWBvfwaZEV51Ya1K",
  "key26": "4RGSmRUTihts1vw2er8bkQE9GUQT3gWuMAp3eWQfynTo71dxrV1bJ3cTsMWSGQEokQNP2xq6XQRFnWjk3qnJGdmV",
  "key27": "4AqaQLH2L2Kw8jwMLvbeEWrC4wbjzrhNhDQoMKMsyYQXkjC3iAFP98u5LMDSWHi3TtMXraGnRiAnJJKk44M9wfhG",
  "key28": "wPrjXhQdpxdbpgnZ1N5L1hcH2LN5yeGtV8rzsjXzYiS8foF7v8CtjaKLyvMbJa3K4NVnTEW5SAuytL6rmgdk6PT",
  "key29": "Ksb3Eu7kngTGMX9tiA8VHdGCBPgHxwbZySKCtKtTnB8TCDcuuUi6FAojcLABa2gAQ7FaJ3CnEzvvnvnRJSKna5t",
  "key30": "4m2D84Cg8p8rYZduigfhZqkgwnMkPXksSkTdGP3rfHhi643M9dBP2kDfz6aATVY4QHJLBT8YfRG8TJt6pb1SX3hR",
  "key31": "VEGAvmuxRbFpb6paoEWnBNSK8SQbiiHcKifbbtNigRBGBdFM56Qt24PqQWgNsjufuvEUkTkd7Xn4jDD92oZkk8U",
  "key32": "5FmzwEeMJssi86Xhd13SbebrBTPbSAKaSW7N6nW3KmnW9XbusgFVqJX4v51sZQeqYUrPvgb7XgMxMGump1bbFxM4",
  "key33": "2KNt2hoPDVnXx1GrYy2SYAiWadc9aHm4DtUs3PKcGV9S3dtdtx8ySuiqRSTQo1BXMJtnQPWrsDrRe5Gcd16fe8ct",
  "key34": "57Q9QqoFgtL7BywbeRU9am3jq5drfHuWuiTaMZ4qSmDkxWM2hr6eRhwTFvQiAP9zZAFEckgJqYTV5CsU8eSamP6A",
  "key35": "wCNmYjZQQHHrmyVqfJnPoHQcvgxnYcgxticWrUK66ZsgjJZcVa244w5u51Bjf4aQ3Cj61zqn4F8xUHsJhGS2KsQ",
  "key36": "2ehFSMtt2XVtLtZByTw4RKcQVqk4HfwY9bAqKBJBNcGqsgCZffMmUx4mGfQAkhu2Yt8XsM3b4qMWMkFd6twLaB4M",
  "key37": "4GPS8LrR5TZPLMEZS6HKC156jYqriBH5LnBuCZYhF8JH29ZCVwwoxKB7FkKzS66z5cpPxJ8UEwQEb2MyusuVAujG",
  "key38": "2v444thRENeWVguKRq4Ms2NphmHDKt5ZD3f9DFtfUWP7tKbDSDxj1dBqoS9ZNPCSBpr9LAAmkgNnJUK8tuJo4pqH",
  "key39": "w2CjULskiJWmut71QD3we62PtLUH6i9kPCz8xbHDkvFKs8MMETKyCQStHsttPdSSC3SKTGdwbRcAE8UKYUn5G7U",
  "key40": "ypESMj3LZBVLNFzi2yZ5skNQ5Suvb4KVnQxT3wK2FGNozycn12uLKPGJtaXwXRUywQZqnSfEuuPwtmujGU6ZHvB"
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
