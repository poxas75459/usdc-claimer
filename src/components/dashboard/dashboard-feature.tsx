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
    "2yUAjr5fCJbnyU8qwGzh1V9taz8ZQAVVzJGzEsg6Xw6xbHeEv9rUuQxCMJ394BvFfAFCF8vvqCG8a2oudteCvQCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PbDywdcHmJNiYxMtbiEmhpTN2tCnki4Gb1AikNxV5p66wtQaYS5nNX1FjCULCf6vdZuBfGHLeqZ2cJzQ7LF2fqS",
  "key1": "m6PrkYMa46sfEZCZ73JfuvRtf73PndhdxBSS1Qc1qEHwqHR16zF5cSUAAyvCHHH6J93tKnAjp7oNYZhN9eNnQDW",
  "key2": "3yumjjPBDHpFrBXd1hRiwEn5PsL33ChtZPGbk8eiKiCNyPg4kfFqiVsjNc7SsiTPzk9AxLTJempVn8JwS5sk6bJF",
  "key3": "2wZ1u8UCkKG9prN7F5JZEhFycrDM6t29fvR1VaNkhUSqJLfEJEUsgZfyt3LA6yPAzHGwQyxpdTCs42GjpjCN51kw",
  "key4": "2XWD7yJ7SwZh28YbywEPRk5Z8Gu3uFii7iBBdSWFhqfwAQgccDKWNqeJRutGCTtHMiS9onKwSzTVEoQVKTKCYz97",
  "key5": "3mHGmchXWvUXwmtqfN7gntZgmn68CVQgEFhm8hyT6zQZu6iqqDBR24hjfyjEDZeHWsMrSse7BmpJ1ETqAwGhyxFx",
  "key6": "D8acvA2WitwGW2qHCM5otnoK7o7LaRxAsWcCKJi3qKcYRtVUSyUjAWcmkcKFFeQVxAfiVEFt2R1JgnipuAg23T6",
  "key7": "2zWdF1dqSKFvmCnwYDUmBccPZ6JGBiVVv8K5N9Gfh6iinJFuVa2kqWcc2z7JeAAsY1LDcAcGGAzPuZUoLQxHtFEY",
  "key8": "55sc1i5ANjwEixC6edyzd75sukejHwrcBUhE8acssBpvDrR7rxAxFYNcyogda9bJB5JitTDWc17PHDUM6NXFiWJR",
  "key9": "5giL8ETFZ6ejENPvXdmJTBaTPurju9nHRicrDoaCEinqEyfK79hVaSt771GEs2uxVostHkQhRNBqQbv4AzGnj5Ap",
  "key10": "DVviEayfjR7NV2fEfduPQDzhKJcABWyVoB8FjQ6pxMvMPCbweyNGmreuKGGnPPFxrQWd4iCVgadJSFAfyfYGALQ",
  "key11": "2xjR8rUT92PTyCfwSviWUJbRdjtcGAJEfbiy77BWvgNvf4XCRVnTDrpcdqz8hdRt24puD48aZ5oo2cTFHRyM4QUx",
  "key12": "49qLhQ76Gg5Lc9utavbS1GeKNva6NCWAUPRVtE8JYSgiFt8i4a3Fqr76PsdkyYJkUG3E1UmfH87BkzTMaynht4Yi",
  "key13": "32w8rq5Ck2ocCQpkeVv9vQmW649UB2RzGoefSjMGkEWpev5Ugzmbk5797cku8ehjo8WbKz2seC3cMQNpmorrxiMJ",
  "key14": "4osYLLE46SCJxaKHfgcKQM2BuNYS6C3JJyanSr3X84LkM2ipnYiPP6WoZQc7rCZvA3NiCXouavDKreeNvkgTD4Fk",
  "key15": "2GDfvQeRKARLTH5p1e9FbPMArfyeu7MK1Jpoqu9wrMxLLsf38vn8iy5nrxvnrRTRet58caMvEPR3BmvutQZVhcHz",
  "key16": "4k55GWX31CHqGaGhdrThLC25wGTPRNGvPKU5meP7EopuLcbMo1ghxA55QU4KK4wygfYjpePjL67v45VYLpV7u5tv",
  "key17": "2262kkoeqxbQgYraMRDsCEqDQrdtpxf3xZL2XK6sY7pj4bSMBDZWx2XYTqmwH2Y9otU2sTYdCnUTGFwqkRvTX2qA",
  "key18": "3pFU69rqjsWhSVWhRGWfi1M53DLb8P5fdGMZxfnVXzCxBWvscRYC8sMtRXfGN9n2f7rcBgUTC4ShTw51XbmAoF1B",
  "key19": "YxERo93wxhL4eqsPa8DSf2mv243yKySGXg7bLNaCMS7hEXtLuCbvU4z1Kz5em7di8e38a9U9fZf1mQL3rd9L3bj",
  "key20": "2U8x9oa5WiccKjsiPMASjZn231F9uLBAc1gRxtsrAGE41TfjqFGCGAunaZJBpyRsLn4J8GuUxMLvnoZDv7VJt7b8",
  "key21": "3hPKdx8Jnr1puEYy77JManLF42EVvrZ6FNCoakPuHHSSZXV2KHm68osNuD3WcafXKuFABXoiUHv6sJvJELgAnCAM",
  "key22": "4ooSsLWDzv7LTZisMDGR79LiF6nzxgf5f48YCV4uKXDu7uz32mygyBu3dkaTJY54LMgRq9QhFMmtNrK5huTnCQST",
  "key23": "57u3ADidsQ1VyCmgGktX5i93MPZE5NYvwrjWg3MEQGSMKanwyLo63Pt1QLiY4FJpVAhYsA42F6WoCQr4pvjB3e8V",
  "key24": "3MnyXer84KXBpAZDkkjWaqp49w3BpK6q73X83SczHw8yBu16rkt731CovdGvMcRCztf2G3DaqVcHoWhDynrZEqGc",
  "key25": "2brRuVAxH3xiFiV7oyW53kGzDucRYYKZYo1jnF9TtuqMhhG4MQkzWJ9ZrezK3LRwPX8LCs6BUVSQqSW32LFkiar4",
  "key26": "4YG9vCZg2srrEU3piZ4rco7wdJZwzqodSiLANKW1mzZow3jMymaoCvxP1CH8Nzw7z937wws12TuJCXVCjiSUTh7n"
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
