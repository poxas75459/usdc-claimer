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
    "4K9vkzH3oe3nv5mhQQCMPWBz2Vi4htdHjK4LnmQKXfxujMj563J5ghUZ6wmYwdDgBPu11yurveFDq91v5vQWi5Zq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "McgGrbwQcLH5H2U42F5GWZQhDVg13G5KBTGfxNRbCQycwkin1n4Mc6KsafvfTxfJsPCKszWfvi9qoMah4hmYzWP",
  "key1": "Cj5bhZX8XHPSZeNb4JMX6zkG2nUKUEYkk9khDoAmdhxqGtygxUPALaa4w2dZgpxWZ36KFZ7NErZqDRMFKer4UyB",
  "key2": "2LJouBeiQD6LhSpgxTcF243D3RySzFcNW3STtfJr3wTkfQzJTZ7TZsqDzU8D61ACsKtMh6zPhNYVBJkQtvdzUzZo",
  "key3": "5ahbZFmKWeqp1EhUTdBP4xxHJEehuQgHLPxD13vRwAVqAui5H1wyAkWWwPhKyYTRm1XtuJzxK4MkiHpAwTgdmgw6",
  "key4": "1fE4W7913BCayiGgjNhQGJZFSC2rfzmq2iBU29poHNVqbNK5hWu3UG6FsHJZgevfTuxtQx2B1XsCcbkLQNheBgu",
  "key5": "5uXPaGdTeEGCGcsZasbecMzUvEsBbQXdPK16AYyND67gF1k1mFLCk6XUgwBCvrPQpXWAC3vbhXVx18Ux92ftSQTM",
  "key6": "fvQr21sqBgzEQRnYRqN5ANo732R7KKnoM28BCjiLyBp1Z41JEc3LWZudFdhq4JaTggBKU9AGsgfZJLS2FrZb7NB",
  "key7": "5GPTkpwvBk8tEQxZubr7ip83EeBQQZUoLo4AES9DfZaaTC2QMw2pFVFLv5682boNFt5fCPVHZ2dGXZUpvKAyEbt7",
  "key8": "4vAL5JXzLGVTLT8kHDxPsvkV1LdaH1ZAXHNWQYVDDFB7cFxkSA4TTPMZrArz2MarNq1wK16obEfrr4urTEaV6caP",
  "key9": "4eJXCrb2JakhRz9UAju4yekFiJ1idD2JxRrkVnReeTBFg1knjqEFh8U5f6t9jEew4mZ37rPcPKmvoPuUufpB7i1w",
  "key10": "2WoXtrmHmcrADR6pxstJDj3Crs72a4yNGA8go8pG3iPMDRNgnbzj4DDq9mULkrWjiAcFQERCUJqT9PNake5yhFxN",
  "key11": "5nciVQFH3kewNVcMaC6av11MfYAEfP2Nyt7x1U3j8m6ooH2Mj75Rc3hHFnZaeTqJJEof6kAAWexmtRuPC7e2gXZj",
  "key12": "3z5kC4FaTCmfCQdFR4BHtNp6Atrm9nNgRhDBDyiSo1hp7FkrjHyWQ85fDGEXamxAVXUB1UFkj1LMtWjMPFoUcGNf",
  "key13": "2dRUTRSuQrvVweV5zHNvrLanfvwaiyyWEKHj26UdFzCuHBbHuLGY21xZtD16oSs1LccJ7aE6znV3QBoi65wZYAVH",
  "key14": "2NAzfvzJwq1kPKUFmC4k9Ue32uUy8XBBcz8bfbPJYDYVaMnk3Hu5BedohRto3Wa9kcsajRUGdTHikfcB8gukJLbe",
  "key15": "3JRmfmuRjjULUAt93dcAEqqUFNDYKLLoZ3usiwL1WMFtnxhabUvKaWDMqv6iUjxwxbpcaxFgP4FBxBfav1Zrfzkb",
  "key16": "fWCizVfTw1xHMCcrUSwkKW6UmxXrT6nwNtJLhExrjcZCPYbbJhkELZ2h4yNPzLfE7RGJBPGAwtd5DfquZy6xX6E",
  "key17": "5G7KRXWxoJsKdaerGNeMes9BybKNj2MTMmbE2ig23oCMkFdPUV61N6LaTSkbVsvanuL45zx9w8ccndN4ndWsbn7H",
  "key18": "NmWiz2r7JFUZqZtkgsTFvgPx7BmyoJzynd4TPGMv2gCQj9hRxUX2HXo41tuA1W4oLfUJ4ggv3EymRLQuM66FeWG",
  "key19": "67Yv4wH8NmP6pGHG8oPNgAQjBcqtBEKqfaCoXVBFigPexz88yhRwX8z5qrTtgeBdf2JxApTbF198ivMxpv7Fvpm9",
  "key20": "2eQ1rXuxoj1XHMuy9wPKd5mqm7mihW55yj2y4tm9qkF2jRHcLPKAKB2ezMb7D8kx6zyfGWvY48aFfRpWw9U73954",
  "key21": "2aqY4ixuN1qAGBXHTsnur9SFG79iuwuwGJNa4gDU962ato2pYdF3ibufKaQFEY4DBYTmUdcoL4cYkBidGN21V9Tz",
  "key22": "3Qf6s5SaQVo8oCT9zeGb8mARgtqPq5vyjG7Y7YsvGSQY5TTQLKnoXMVBzomaQWTRSWHLxp98Rdmvyoja6NPJ9RdH",
  "key23": "5ZrvE8RxeEtKeD6yMfSutLeYmtmKkiLtuRJjsakfJkMwYdXgf2h6V6sNEJQGQTHgMvB7uJTgL9ACesUZ8yPVGKg2",
  "key24": "JkWaz56Rqu6L6DicdKViav3CpexyxRCnUmoQQsMNmWvbLZxXXuikZKfkj8MH88gSnz6VFbbbnfhdcYd67nVExe6",
  "key25": "gzz93c2prBKBVWjDMXwNzhQCq1L6Ln8bLhFm1RjSKK44LuZLdnFcQVE99wDsCQADNESLSz1bZtgf2foxjEAEZS1",
  "key26": "4oUvEsTJfhMRx4NcDtLK15AgNAgkfhg7WhAuR28dAYnS1tuB9uHzSt2uLXFLVYcUo94FJPzkrHZLKogMsomFfYfr",
  "key27": "3TGz8wjUpk6M9FTGghuaqCxrhTdmcVFTL97WrXngS3nReU6dgRe1zSnGDyRam8MsaTCvS8ADQY5oYVA7StkacnRE",
  "key28": "492GhDLWS9DxNGVSVUmu1Rp3hybKELxPtgPzk8R4o9E8P1UYbM2fWHkFu5T9TP96p8Gn4HeRV9QTcwrVUALw62dR",
  "key29": "EPgcorY6qGp5TDuRmXW8PN92ATXdGVVaezm36DVpPXAVERpXYsbHVeRWCVpBVUwnzTytbv8ctQgCoSosutHL6i5",
  "key30": "JqFVhcwiRdQk9kMUdRG5KsGKdgsVKUnR9BSeSx7gE92rER4thhTYtLYaDwpfgES515CxF1nVxR22B2xeZkLCRBV",
  "key31": "3YQe2nrxLLW5eFUcTczftUFNVfoFrMEkMRYCBK3aES8MSrmqF2FX4mndTTAtVhYFGJ8fuGKQNrgzHfxe6AzNfU68",
  "key32": "xwMZpBwxbpwUdCS7gYg9PcpmK67kQDDeweZ1JqbeEzkPp2rqjjvwMVWXB4yuLNo4ZbrziDyAzv9WixziK3MBy3J",
  "key33": "2ysMjeX19AeHDZt78Nyz6yrjfHSxy1v5Xi3YWcrNqMk46F7x1K39ocimtiKfsD2magJpP1DFiTKg7PhW69SQruoB",
  "key34": "46Ay4as8xdxNz6KyoyqRL5EbpBCq9Mw7xSbo9kNajc9TbahhfrAVses712iy9rDEf1mqbNcirLMJGeiRLkSBunNW",
  "key35": "Ynw1RjHrmXRHRDrkYgxX4EQ9ThJzK3LADVbehAHKj69aVjDds8wY8i8e6vekqKDdXdcgaSa4H571gSah8ac7uDB",
  "key36": "5jK8BSP7kCaBuVRymUCZyvACiVP4TyzGgtGpVA1mYmo69tvYztDEivrgnScQvieHXnYpp4Fa75aGMTB68ujg382F",
  "key37": "472ZeumpaPEA6YtqWWDNRKiKEURu6VxPfZMiMMGYi33mjJeoDimdZFt5XCRvfbPTJsfz2hc1JkT21sgxyhu3cnWL",
  "key38": "5oTDPcwznL93vkcBWN7jSkjiecPWoBKWCGvjCVN4HAKM3pf7VQTjfjFxvstRk2Aaf7Ade7YJ9mLES9qaoYCPSY7q"
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
