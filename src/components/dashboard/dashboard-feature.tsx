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
    "4iZ4FyR8zK4ooZnJqCz1fnXAaBWTXTbCvPUg4nDQKkLwZFdY5sSwvZAbMgQivwx441nHiDFQfm9WMRsQqrTCxj8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DTJFEhy9yeh2UEguo6RYTHtR3L7ZBv84t35Ykz6Lsu2Q9iTkmVweMDKHjWtZZKfUVKih2omhu1JF9aXcwJSKQ46",
  "key1": "39DPkguwzjR8sFxyHVTidnHaZCSz9FpFdLNFgCZZMkL9xP3Px3eeYwvmC9DqkMR3PTUcTJMcNYQoeNTHSCZ9pzfs",
  "key2": "5m5YY52wFvB2VuWZ4nxAM7Uhw26KWCe1g6REC98LQmkG6bmV43MUivzc673z3L6RKg2uPdQMBVazCq3UuRdxDVFS",
  "key3": "2DWxdm94XxnHeG3v4vGsyGqEQS67sLLnBL9CQwC3rjT6vDBmEj9pZhYnXgtrCMdmin4N9H3hUvyw3k5h3wPTQdPp",
  "key4": "3x7iJQz2MxsbvtHXx6vDaELC3v43RcW1oGtiNdYSKsJz2nPqP6NrRgPPNC2UJimcCYWdL2cgSuN8cpDDFWec88gn",
  "key5": "4eNLxj1mvcCyNJ2eXCQC6eunXZKuP4VGEP1xmigjU4SVHkDHdWxr2xrnApvBkoqNFASbS7gg5PVhLuQCWzCtTGXk",
  "key6": "4xDw7P65XBfDrogipKYqEafyqybVVxNiJcfP1EGfkruvTJPBtV8GJGRgB56B5oHifWXCTUGBrmpzwrCFbu1M4bv",
  "key7": "5RoeMdfEpaSHFdMetLJvW9Vy9y1YKNF555oipa6WFAnTu6qZi9VHKg9UH7MjSZcopoS99jQn2PHdHtp4x55kLwnt",
  "key8": "4x2aVmMBWCdNT2GCPjz5QBJAhr9PC1WddruJV1AkbgJUhpgQWrPrpH5ruRuAwHWXD7AGFP5AUQThfUXp8Tx2DUQN",
  "key9": "48hK3FtsdgCbFGehy7fzRVgM2EndoHgFmqpYgGTAkKvnqqhdP4kReRGhQHzmvYL6pNw9dA6xzQsUhyspAhgKuLD8",
  "key10": "39bRAT8QRaJr7C5Lg5dUNfCkH9sQYoc2ueb8ch1bAUFEvUbLBwwVu2UMFuce6wEptfgbro1JAAN3Qh9bvTkFwWDD",
  "key11": "Nfqr7A26cXgeJBBGU8MrkNr7GpjFmZxDbs5oGmsh4gjyQLSYxcaFRJznRZLZkdPayQbaP9N51P4TcJrVBTcwqBY",
  "key12": "5HSx6JfcSuXxZ9VRZoam4cEGyuKcwRjWfsyZor7hZ7unNKm2V2t7iWYcppZc2tkQ9PfRjbPJhN3QfVuTvqYUKdw8",
  "key13": "5jjdhWF1xDMjmbDgBaxadrkAdtpaFCWGG5TehX5wZ7iKppa6XDK57ZysD24xPKPkjRFvxjmHP6SVGDgCevENduCW",
  "key14": "iNCKfGa8tK8KMBRgbt76Q28M7CVk2e8AmJuBusVuXjvfp4FYah6frmZ7afpNjQKMTk71K5z9D7yyBAbJK58fGrS",
  "key15": "GggLBc1QYkZ7GpbTkn4ADSGJn7iTGhx4DxuyNLJzeiSA3ubu3UUyNZRpAqN1DwpD9XtXZe46R6GauaCZYhN3jJd",
  "key16": "29jWSp58u2NAqEe1p5UwnGcVzjtSe4ZgD9TDUUpoW5ZXGefqJ8EFmGAJw9vSN2qEzYWMFwEAtCYtEmq999H6vQwb",
  "key17": "4VDUh4FpQp63xbydYMqv9CFCyVH59ALonF65DQEJPo3LZEs717fo1ugyTQuJchMgf9zuTMDU9pypfmeyhTmejnu7",
  "key18": "4RnAiHvkZaeVG5wKRJS3eNQDYXDoCZDgEMgzbTkTYdmmMTBJMiDr1FKKv36PYm2o79FkB3Z3woJxbcvGePdyZiUa",
  "key19": "4BQavN8gJFarm7UUpVowpqPKeWr8qD3pYU2WAHv8nxD3Awr7XtKZLU3onyFe6z8xCdaCbnFEep3bWmNCi8KBofmm",
  "key20": "4DZuWRiAXjywfg7M37yt8LeMCQe6Q8gjYSPf7hJcuL8CY8vHPz6nCqFcF6FJqWZY7MCvjrQcq8CK116bY3MR5uhV",
  "key21": "2oXpE6Q8P1fj9YddU5hS9GmDWj5v6npXcZD2z8pYuwChztLbNMJMMkswuhsL3eZfaxEwC6uKuB7YKrVNUzvv8JDi",
  "key22": "2cTXY2CzTufTny7A3qBYpEPZypMJwHQkZNQSJssFRYddcpqVqfoh3dRXTZ9Wb9bZjExATSpCqjBv65mXPAmCkQWu",
  "key23": "gLGHqrbdeyTs8RxYS4Hmq4NnGWfySDDAgqpnt39SkpqY78HsiWPbtMEHYK1qJewu48BxC6QHLR2VcQEymEjZmBL",
  "key24": "5w1Z4b5svydrJXLXiodMLP1jQmxUpEjxe7XP7iGU4JP5ZozHQvoXnoc1hgQXsdMqJwY3o1yUB8eUVWCMHUxVfzc3",
  "key25": "46fgBGPbVJQ3cjji7NaNTsUcQr7zEkDTzjs6x1Qv5F4YTYcCACpXPQjQaMqYEnW8DGvne6JczFGWCbsUjme36mXv",
  "key26": "49gc8TVpdkkTzpwkrNgy97oYqVSXn3Azjy5RUdJCrk4atVgiqwDQkdjrr9GEoTLwP97DFFkWKWhBQkiSii1WbCza",
  "key27": "W6GGksvKY1mixJUxzCiYxgtaneBbbWpcAHwHqQLJeK8bmaDx6MeBgA3rfBDgkJ8K2fqeCQzo9fDPCfiryuGnHSe",
  "key28": "5WD5pw9oaG9ARbNoCwt6D8vaGo5HUEhY6eMx1ixqW298bUQzsHBwwK2bZh52v63MERtkirVtzQYTrZu874TdeHBy",
  "key29": "3kgg3cRQwNCb27WNMZWiG5WyVjY8wyt1UjiDvNkg1gXDuo5Z2558d1faYy5Z3cpwmzX11GBizszw9MbZ984yrSnM",
  "key30": "3pBMjnXN61WzpqvnFz7StaQsM1gJNV4AUnpaEU6JXGVufMGmMWgWXWW34P7ND635PvkQxA11xYRLF63XRXLrRjqd",
  "key31": "23GGyJWY8YBhmZq2STZQjJtVXGNZQhWmjfNSdjJhUKxegVG4Wb4zAZzuK3Cgzy8oEPok7549AhoHwyZ5N74v5oBZ",
  "key32": "2sVVWvA2XWxACQFGVpUwwZ5nzpgYrhkFJabn3r67ipE9qHS2qgUFsKDMabNijbSoC31CPL3v3LuZCsdGToBD2GDP",
  "key33": "64pvhTWhqSstT5qCBozVvsrsUBAvHYsbWpYD91eDt8W8Qnecwn9oNy6jRVfRLkJz9yNy7hPjg5E9aZioUvQum5Td",
  "key34": "21cR65sfZqoFZz314dJuAmCNeE1vcqRW4oAMTB8WRueDqp75LMm8c8gc341fzAR7v2AcdhugdizhtUKK38mmJTaS",
  "key35": "3KHgcvoUzJAK9yVAkgZ2nF2xfcNqPdZ2HLKTizjWrBAp46y4GL7M6vJko6X5ddiQfQuoVjhQTqrEckbS7mtWaiHo",
  "key36": "4SzyHgtjiy7NzX6iA6Gj2eA21VtJ8UvdfJroyU4o9rD1Tudy1aiuUvHzSssmyQohWaAVnT9CiraqoDe8jMkR6Y4Q",
  "key37": "2rfXuRj8FMReZfuNk7Xxa3FkiG5LC4aGJoYhZvNZk7U3pfF3pGsF4KE1MdVhhnJqG3TGBLaxe5Bbur15AKUYBFYi",
  "key38": "9wX7a4zopbxY8k6wzgunp4i6TTXzhr8bpEuoJqg9xW9zwsmao6FKVUtq1Dky6gtn4UfkXAgZWoSr29jEpcy9Ymk",
  "key39": "5hSAFcmJ4VtuVa7NA4PRgUVAfxBJrK4BLXnsVYrzcd46wPStY55Vevpz1La7dAhjs2Cbu8Gs4h5KMSGcEkuB4WSA",
  "key40": "646huhXNwtmU9DVLgxaBkM2e7WNaqNGrjMRQ8qz24oB3UyvL4iwyziTDjgzBXQtijJrQ8xa4L5M3GmNbtMSze66X",
  "key41": "NBMCF322YR78nYUdbh2H83bRPAeFKSDJ5yMmuGxKfnL82fdabkREk3XcrXqAZLyRS3VLUgSjZ1PcMkvtdMRuzs6",
  "key42": "5NpqSVHi24qfkLXXMBeaTQjv1HSwfLGRbr8PEtSaP6DZBZHUHw73PiUFqeFMcpv3zdS6vdbwk2XzaThnF9xpG1kC",
  "key43": "nLEvMhmPsERUWxXPoex1cTJLQajhrm2HCgTAVnDSiLZMFpvjRWj9EasNt7145nZ7LrgRLWmi5fTMMovN2Yp9CUs",
  "key44": "5oSmTULtSjPDZZnL5VSFHUahoTBKNMjEwXcyDVYas5nPZq428rubiCV82RbzjQ2j4uaNyLnPyztnbDipWNNEBdH1",
  "key45": "4a7FTtWz8rVEuih9WRtsrcktdGYGiUDzxqCcnttpuhGiDf4A9HNVs44PTNgSvD6foVaAKeQqyVR1XPpRzbpsV69Q",
  "key46": "bgZRen6hJFTLWYnroCPiinJhaRhUXrZwnEBYDro57vebSpJAiPg9cKAuXKsFQrJfUfJTLifcoxuNtoD5SxGXzfq",
  "key47": "Sj6MB8P5Do3ZnU89pqfP6KvY3ZeD91TGRJhgCfT6vTnBkbPimsKvJwktJNSvzZejsRLhA7uQrQzXVbKrnHbH1jw",
  "key48": "zK7CDrsr9JEg9F2LZHXjjWN4QMPWbt2xbPYsFHJGx41E79mw1xJ3s8C38greFtY2MAqz2havmjJ1m4pu4v75byJ",
  "key49": "2MPAvhMB6wHu6cYfmwtArb6hV9XiXwJfjSKEumyfKKX3LPcrHkRpgoFzmbkEEquceJNrZMhuv3965V4YxuVgygBf"
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
