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
    "42zpPjk8h38QTd3dDU4KKGqedoYhNF6tAkiDFEstynCP9NnmHkdq2HhkBp77pVEcsvhgDgHniCVgAczaSAiq4Shf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wBR13dzmn4h7q9RTJFcRNg2NcoroxvQSicc7LWLVFM7yLgXnT3PR6E32DBpf8r8fAE8gKAtakDnGt4iqjNd5SWS",
  "key1": "2C87C9qb6QnyJpESoZzbcLfYA39EPMSbovan5U8uP7F2Fzd4eQ2f2mZvcYizPEx6KVBv36HabgfwgAorqBtL16N3",
  "key2": "5iMb8sZdjCigComMxEGGyGhiWh6cfNiSsed5AQjpYwFPsU6eW2tMnGGjNGhc4hqy1cBNZAtjMqnnZtzBbJMAEtQm",
  "key3": "3p1w9Wqs8evQRRAHjJqqiKMyDkYT3PZUyt9jhSch3PG1KnTbZpcHZsyAtW2ZXybfCnqhLaSLsyncGouE9qdbk1U1",
  "key4": "2oN16HUsSZ1S3izxG3bnwC2XQXZ4pJefJAuuEaEkQxXC9d55JieXPoX6kHVW7cwtZ4F2e1FpkuQcHPAGKbdUZkoC",
  "key5": "3KKFoXp5AVpa3HxP9BwcJJkD7z48Yi9CijF3c6aHWjq96pfrvcCTiaqdtrQ1gyKdr6GeNkdnhZiMtTPFfEsRmPN1",
  "key6": "ERMuN9aQN5oABrrD3qRLNs18nBXWpVpTv7u1wBLHFqJAsni5QXxMUg2wYmxjXWxsoiGX2sQ41JRhcBpHSZ2Q7Fa",
  "key7": "5LmCNfr9N8Vd9JjiMmjmQBcnZY6YXsv1ZfgPdMFwMDAX91XfKTKnx7xR5imCtxtJqyYHgNeq23cuy3oCAdxrwzR5",
  "key8": "4fQ6pYXxdRam4Ryem5gxUJGTZGwPbk2JAvyouUsvcTjqCaomv2njpRfa4HhXWRL5V2249X7X9Njwb9LjuLJY77bQ",
  "key9": "5cXqQLGG52Cz1HutRtd9TE9ztqfJ2VHmBJmdC1ueC9VGVDEm38HbPkfxJccEL3kysaEofpHcT8xBUxMfnzyU9rwY",
  "key10": "5ZJc3m5kCtBHYbATmpJmuRNHxhUTWYNMh8ZyYDu6RVw9R5UHDQMpURLGrStn2Exqq1b61Jx5PiVGiemJhGBQmmib",
  "key11": "4Mr6pau6gQSeD3NNkkRm1Vb7F4oBhiujp5fshYghJVBepHdgVRoKqMv4xiY5MtQxr23RzbVhTZEmuuPV5PnM7gyb",
  "key12": "2rQ5iwqJsJ3wbdeVbBpY56v3ZazJnNtEqPu8JxuzjkPgKcTMRMw91BNN5gdFNFT5bipYDqrpBQUKZ57KPoDemK9n",
  "key13": "4YCTEYG8PajhXA5CJyTRWudNSA38KBErYm45e39V5VohV5L42REZohfDvqH3vk9ZrocjhdfjgV5yQSvNFJdvkDZq",
  "key14": "5u7WJcz7Hfaszf3tXsb5eRzhs48krqayuXjkU5xgFnwT3BqTJMoVpFpTFpVuRLt3B8mndvH8ffrRh9ehDFisJaua",
  "key15": "2Yn74ktVdTwaWZnUNEn3s2r1LH5SV6Smw6QC8g3Exs22HhgKQ4nAaQh5zoz97kw2NnNAFGGzFkErdiQUTNkvN3YW",
  "key16": "3EtcQiwucRTVNjGzzHcxkDFLZZwpdByeBhTtVXZDQjigLtmSCk5Z6RtE2NLgcQ56JpoZ6kBce42qYmVAvRb5GRFm",
  "key17": "2QLjqZQFYJ8hni21QcFtB8bMt7bwoxp3tUJSGcp9qNV5w5rfHD2wU4pJ9Hcx8mBsfXZ4ocXYdWsr1NbMZxdwnCnK",
  "key18": "4sFiAYwXcXEJ8RdVmLPX2EKZBzeJzD9LgkvbsqevgNnYr7yas3RjYvx7YFGG95d6z8YacnP7GKLjvqN48Vv58uLx",
  "key19": "44akYyzjemu1AVYMs1fYGeueb42CpZnDC7nnmYJcoi2q6Z7jUGJZjFsz3dWSgKSDZSSeECvi1xAufgSBNsGbbw8a",
  "key20": "55HKjqYtFAE4rt4fg4jPdtejyDfpVBRAXnU8r9mZqfamt2n31tasvnDx1o1sHQkr54Pxr2S592G7NjKqMTLWDQmX",
  "key21": "4ZDHtqkC86B3n9vRJo42mjivk8xag8vnpV8cV2oJ1wbFEgEJqXeBc8skxZgoTxVSeEp5HsStWSiNJ4VKRt4WYfQx",
  "key22": "4ADMeZD4LGs6nFRVRsvXqFXR65NAwXzyMycrqR1h1jbu2GT4ZftnvhP8Bcszrg7ahY8AUihM1mTvjQ1Z4ejMp1gU",
  "key23": "5SW1gCvRW8gkFHGqQtNRsuVL9q4jWEwrggV9PB6PbSzQJkwLoXLvcz29oNhPZKagwWypyCsY11xMVWyY4J1vMZ8p",
  "key24": "4Z67kGFx2ADXD5gmUWKKiascaBcP95koNygHUGLRR7d7q2xGgLauEiDpoUaA1jZT1Yzzv8peFL9aqvhFpKxoYxHa",
  "key25": "3tW8LobAXzpbvzGyGUQNvrBQyvM7JyDAUtPFCyD93hLacq5EDtc7qf8JPk848qikxNqRTxPfEDWfVvYFhAFzXRoj",
  "key26": "uji8ACxszQStZpQ7wSonpfgn3zkegybevQNwxwjBUcL5PkfbgK59ZbUgYbUBtj6MFiwBJFhCwws22z1aThdQnnC",
  "key27": "5Q1xXmwKfcSoDmjXhc2SkxZK6CbDwDVcVC446mvY86fN7hY1SjnVTnAom5kLGCQRWEdf4b1gt7HxD7pwy4cEcpR7",
  "key28": "kJiLPdyTn6wwm7jM6pEEQUAcFGMKPp6eKj9p12ZRqczzrZMAdyuCnAtiKnVUwW1nnTvWvpYqw3qfT2i4FWjAEjh",
  "key29": "2uzNEJPduXbUarq7D2JM9SugWtyYVtjXyNrsDvkVTdFytVzwYj44Pwu9dUBReBDnXguCWauK1tjXZ1X9QpukCGTy",
  "key30": "2WQuqrRUZTUG6zxBey9xU5MjhXdweQZCYnF6Fs9usxWS7A3SgS8BUKAohWK4qj6n6WyoyJvFzHYUmaVqKU2XHC5P",
  "key31": "2ch1W4FKvYTLE17ALEsR4vZCZLMUD8cZmyd5DzozFu3FHJ7q4wUnbcXWchpQZ5GRx4fKbwPiP5Kn1WrwFDFEbaRL",
  "key32": "3thJsbskfiwJjv52oRv3abBbxWeu3y3bq8fZRRtRCctojXtEHew92Xam44PGix3brSKa4ZQi5rBG3BRjHywb2Zmx",
  "key33": "2qzujrkSQgdwJrFaf1QHKCZRgfWMYLxyBiUn59mZ9PNcNu1X4cwUGzZ3Fjf37Foc9dQ8zBcPx5T7qbp9bn31BH1y",
  "key34": "3gVBcdvNAa1k5cGLYas7ePv4sRgU3k18AmnKYNUQTeqCfEpPwbfthXwaz2BqoyUHSaS95vpaqLkQ4v1FKtvnMGP7",
  "key35": "2ycoAALqGbaBpBAFQYufEFw2nQzTgJcec1Rqajjq8eCdqvBLAmbvDZHDQDpUtTqqvJbEnQSk9k7q3NcGVDV8Vqvw",
  "key36": "63hd2M6X44wEBL3CmX75xCQjxLbxyyHL4dyMu8UaPdqE4pkid6JABk3cp2xev2e2jG7MDxyyoLjdk4xnMYFzV8wc",
  "key37": "wSxHB1XBfDdLRMn3gDQbk82pnV5hYqnCJurXAJHW79eZ7bvs6CmRqLuCs9mKNcdpGiEWauhyCq1HK5oHQXn6Mqh",
  "key38": "mBaLZVof1dyx7ZDU8tXrJ88YUBXm5vxbd4JjZau2xzXTFgJqQTd8F45C4gRxSL2toFArnGVmmGVuMJHESMRrZEk",
  "key39": "vX1jK85UXwNeUjdGBG7zzjmgxseRYJ9oAemtmcUXUmv8fBwkVKYNdK3gJMGkpdFdemf5gmKs2mkg6mzXf5bJkn7",
  "key40": "3GcsFXS5LYsBXrNwRXkzH8tmAH1SDadnjpTN6wErz2Ym4XDd4YqoumRdfeY2jLA76BVHHznAQLujjQUtUFxofFAa",
  "key41": "5juxAixyMzTBFfnmZZutdLyNRcenzMPpYk7DuK4vGNQHLFaSQ29HzsJqsamA1sFZEL3g3EJYjtPpoB7c18oe2VHW",
  "key42": "3o2SYNQcPNV98unK2oWos9ya9Zy818aFEJB61cUwbwfBrPwezJagSsfPs1eGgwj6AsFtZDW66gsU11rTco9zNuRK",
  "key43": "4f5rihfaBtBuwYe5n2hQnm9LVjcyTokch2878qF1SdPjCzu4gvfx3S4mpABXQr6qjnfNnuHFgFjQSRnjdYWm7fJt",
  "key44": "5gtrbi1bbgtVGTbJTbqUZN32qTWUqc6YRVrHZac7Avo7Xt8eUEr7TfQPnGD9btXD4xseRKNm9kk97YhiBRkAk555",
  "key45": "64wtipPZjxzrwk8fE56NkF21bgKooJ7KxXxrSh78JACUifXXHtbETcjLVokuXv2AE15kEKFrDHQLhuFYc9JMeKzF",
  "key46": "4iadtQ3gXsUbumbokaejARqvm53BfZN3vPjzpMarBTGbkrKLTvJer2bHbFBh5bpqq6DeAcXqMzRydN94Lt7piuHf",
  "key47": "4GPdUZzd7o5A8pyooXd79KkQ6nHHspqhLf4zRA7WDbxAHdLqZhtguw3uG5D6p49SfiimtFMgsfqMqMyKbDTAmNwu",
  "key48": "2PSmU73yv1iHdab8Du5AJfzkMkeix43f822FwWP6CszLAPFftZne3UkE3f2dc7W7GAXi9Ga1E1SV388umWZa8w5q",
  "key49": "4d26ktdgD7KNkpewZuC32vEZCmNpNUkf7NkNsaznXEKhBxPEzMzt1R4Q3Nu4w3F7Rd1C44qYenjXAK7jr9PdfADB"
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
