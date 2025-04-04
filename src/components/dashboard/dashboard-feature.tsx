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
    "31q6KLkKt1Bp51Exojxq82nCYKG2JNkT25vMSu5gCjxyXbzke3BGQFTbogoEfk4hGxw5jRnd1vkm2pKhaWqJoSmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FWSvMBvNxWwKKBhuo1NSmF7ociYidjDxzFkedtvf7JmUWUVjkLEW8sDrSCMY6vfujWcxvKQ8WbjAeBN9Yyu4U1",
  "key1": "3uEBmP7J2Q6DBz5WEWGt9LpVZ3wRmYe1LaUNWBQPzi52zvdWZamdc8jaUNhMwedaCxgNStGDLS19q9Tn8X8X8uZ5",
  "key2": "3sSDZNdVFJeDQsNrYcmYjJfaxZaf5r2Am7syJNFV7qHhFNzZKe2SC6kXrPBsFoBM5byJimaBeeSXyQVxSWzn4JUf",
  "key3": "5VJaeGjLBcxJavLHmgFVd19mndgdLbaqk3jyurf1U5yMRfhajSvADkMLfzW9Ueu25Qxo5QffmJnNioqb8ebFcWD",
  "key4": "2dVfnmobcLm3wqyJ5pPmd3ZYifJxB8GTjgyTLsmNoB4DLjX5i49UBi7G7avf88GS1QXU7kvqZmercTtZXpCB43Qt",
  "key5": "3EnJ2pD9Kv2ERNHVHMvBeV6RjNuomEHnhAaTFNLri7kStTQr8C4nKtpfHxs3em5QcoPtfhgwvi8mzMyXs1T7f7VP",
  "key6": "4L8pXLNojCmW2qkrxasRq6MAqc2yDqTRspWfMhEqaFu8MCmAyP3g1vK87K2fEipobzqPwrCLBthrF3fr1FRThEVh",
  "key7": "5zMJ76ygFbYSktFbdeJLwtYvMGg4ZAmxJeM23uARi7tJK1bmfEkGTqMLEmMzDpnxzWMGERWnN4Zcgo83jqnWGBtd",
  "key8": "3gmK3Rqo4DydTz2UkXTT3aeV6RJHih46zQwr4EDsQsgHhvtpjP5NwiFJ3HLJw2D9EQ6m4zhMzXFrC9iHhZb8T2Kv",
  "key9": "3ktovaCJWHfsr46xE6kubRBT3822gwRMQEgncNZvLasY6c8jcjpYDJ4gwQkvx6Pd8qqW1yTaCNptyt4or8haxk4x",
  "key10": "2Jxe9raDab7iZ7REuBqysmDyQDvbGAV8XQW1kxenxwbjLVnZPaBDYN3HaypMx6F8FXG2KCxn2zTQed7koNjNiay9",
  "key11": "3hf4FUcXtqwiLrUia5NsTq35BxRhzwhMFrXBeemh61iRtrjraeeVnt4RRdwrLxDfLkWMpeq8C37fmSTNM7vuhioE",
  "key12": "67CnGWqbFA5Hu8BcqcBP8M7FNoMTUfGDuuPDikswuHZPLppPAxipLCEpQ81Vr5b1HfmbB7FahKB2WDF1qjFf17rt",
  "key13": "4QcZLgTEeNNCUhftLvGgQnurFHbpcNvaQaqD3umkVCWa9BqX7pJaVNjcyo4Fqm5EbfWvX3Snke69iVEAY9FyvoTC",
  "key14": "5z2HDd4V7jcpXZ9EDmQMMabsgJSUNuWSzUaZToRp6trwBqUKxbKcy8MsfYhe1p651eYcvW8ztUkhhVuUQMUwJHiJ",
  "key15": "44Q3WHXGv6MHcz8RVu1t66V5yij7Uid3NkuF2gYdwFCRwf98J1BK1tJuQCcFDk1eCBU4gPhibZ9qRgo9RxJu79kV",
  "key16": "4tcfHsAiXRukKzavJZAQAJ1WD7WVac2RxZZJtSwS9Q44csuURASCixP5tdZmQxQVeaepCUucXhgD2H5LPCtRn6VB",
  "key17": "kgDd4iXEByT14ktKgfB2GkgnVK32nHo7ghjENz1r9hZW1pRUe7kSXDoPeVmBYZrC13CHQ6xNGipWTXs5bgXqqej",
  "key18": "dg8hxoYe3GUdiadmCqynRsmovU9U6JdkHtR6kMHWg6ha4zX77JLTS7VV3959ZobhE91EhMUYwpKRvFbtyig5J51",
  "key19": "EFLgLQ2qwxztPdxXPQUyeAzFWLxP2d5CzgoKZgATtVSYk6NwUxAxEDYExiLEfaGz6VeXcHqLDwBBDFAMhgTdRGV",
  "key20": "5TCFZ3HtEkRYSxwKhSGtuNCFLaLUFw6Ms4yNb8emyTDvaqhCvqqb2FPmFUTJn9JR8WCttQYf9x2N7ogLwEGdKUJo",
  "key21": "3tHjRUhjs4rczuj2x6iCsuUySEfsjkFCf4DaAoYsM5ZFTCACVASpnWsQ92TTBhZpCLnu2mwg5Xm1d1D4RUwy9qug",
  "key22": "31rDtbDiqPpNYNFXJGoedqy19Etf7GyNg5xVa3TkwW4Wtu67AyvZF1YVdyQ8GGF64PeFLb3Upz4MowDEgfZUT93s",
  "key23": "2Cb4bhdMRXTWYuSymt6sVhiV2SzE5hFCutG2fhdDt26CoDVF9XDo3Qb6iBbHwTe6GaaispY526ZidWCqwuchpG6V",
  "key24": "3A2sniGWbZ5R7t1Btdzk3ntYjSY5cQaZLp5YDdAzt4myqAxRuHw5tRGpFkqSsjXKj2z2jufSsUpy91fcU14uBQUu",
  "key25": "MmgZPXTjUz9R7v84azhQpaqvaAnM323AgkcoLGrqf3wXc5Mp9Q5NoX25xigcFTtECqNBQT4H1kB9N17LAPDe4fA",
  "key26": "4SVW7nmnrKm4GZH2sSdjtF5xQLLCAS8kA2VYgQR7u87LCiAep5ntKUXzstWHAwPCMMumiw1BBHHJNuVtSJQSdtnV",
  "key27": "3MiDjkN9J3mLkXnaHLnK2dHnutRnoc4Cqv5KsbeLBKfsea6cR1KU4fSBsKW4FtschzymW7QjPSBiFLMydvQKmRP4",
  "key28": "XGba2LBpEtztvYoXTQZXku4RgRvibUhKuBAVDGqPPpDoNtKVqeAM1Txt6uGWRR8oyR9bSvbh5LJtmTBt3szZNPr",
  "key29": "2YS1LKDvbfJSYjcYUNUK6MjaWjnMg826GFGYezbefUpawRf3yvyGTKogd7DKGvesaPzoeJ6n4iynzunnCPywsBYx",
  "key30": "5AuvG6GR6PrpR9mNjGpfZiaZTEs8zh6B5DzCE7pyUdggisMrvaVuZ9Wh7itjfQ1ZDhMi62XbpbA1eZdfAEWhsKDx",
  "key31": "3DFNKakbUYpkUMbTmdJWbAQbR5DZWKQZTBX8KgmGGYBj2LSwrrMkLnNaBe5sXNG85mqDByGaauhCukwpCKTrM86Q",
  "key32": "3y7zjCAJQZ39mUhU1bpr966qWNChU5KpAgMKuZuoUG3L6FFgjoHyhBHnekEmmGcXz6oRtVDarov35i44ZJpYR5aw",
  "key33": "4GAHJ2KVEDHdR1pMnTYgyhmRW25QUX2PAnKko9jXRNV1mDdwAspQPkDw8bXRmK14Txxt3swYugveeUMoC9GnQRBt",
  "key34": "28Yt8HyCyNFbfYJWRujSugMUCrm1XSB3pBpEGYxGEUTyMPKSXN8eNkBJ3ggKuuc6VgehALhH89uoD7f8QiGvTN2p",
  "key35": "4aeo4d7ryamssDK4HRpNB6P7uVhCznxo8hHxY96DNoAne4QZkdequmoumAyqnztSP9hr1EsEpnyGjeEH84YeoWso",
  "key36": "5vLgBYXYRHakBUHZa6fwmxnULCRwJJSARdBgcadmoyZymoTEp9TZDNZXwacp7EYsoqbQDxcTGCEUXHde5fDXe8nf",
  "key37": "4oDo26VB57aVtfVbTqXgn4tq1ttfLe7QdST8sBgxC3tsmKmdis3qbA61XBBB55nJpr6vYiLK6jaGoWJ7JEAmUG61",
  "key38": "63ihMCHGX21ywgiqkibo3VarmZnSeqshcJTYCTXMg4ADGYB6kUfVL9bSF3VtM2CUKAMunLnTJbEA8XeQWB8rZfLB",
  "key39": "3HNRYUthUASfhzXyndQxbSkc3ZkZoGQFN1Mg2rCn79Ng487aS3Ljj5ib2ogYvrovztbNmBVGBuXvr3VxyTZACf7T",
  "key40": "2MuRAyTBSVJt3X4fZmpRxw31WnoijBx3cwSNpnXaRhRTpbHstzMNPhRq1vV9CuE3KL9ePg6QKde5auAofxFstZW7",
  "key41": "5L3Las5EMCeps2LF2hdBKeae487Uh51b41LCfFfdqtJP419teSQ11FSXHshPbyPFd3VDZkG5yVYvHfRbrDMgHSKX",
  "key42": "3cfCqbb9WZfh6M8w9PRVsTG2tMQZKeYPoy9jFJfAGT6vnDXtA7ERbsyFPHBF53gUYujkkdjzoA7p4y8VMxxAoCki",
  "key43": "2DDtfV9oD9aof7WhzF8HBVcbwyTborhRMAqLR8iDsqQwiTTsPUJfNUCgjh7AyBbL4b7FzJ2cUSDhES7XbXpPH8Qt",
  "key44": "4ikiNQ77EYqWS1n4RQxYn9o6NBJby1BwKnQWppAFJ3syrhHPsiYevPZpD2CX6Z7bR49GZ9EuSCrgyW1Y4WuH53mP",
  "key45": "4QHGfUsintsHrJr7S527Mr7VGVdfi3B1tRweLkQMzCDRFXExQfbVjYBJEstjEcueRTURh8Nmket8XB741shYob5d",
  "key46": "5AFP2n9vhA6DGL1RXER2tX7Lo2mTyepTGpsKUvyoy6nsrm8w4Y9cA8eFwCpnxU5ANwQzucWn6catgWy8pWdB7YsR"
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
