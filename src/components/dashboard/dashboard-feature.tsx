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
    "5F8BmzHDxEEKJzc6eeUfGr2jiTNutLVbdnhMgAGYEZCDC9wEdCsbuBBGvUUyfoLnEkvW5Vc2QwoDrKtZ4prgM17v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rU3ZVU2TRRVvz1s9EGMLgWL9dqCYT6ijFxpQTJPpLLx6aQgKAHaqR9z2Xp8D9cb2iT8DHeVSMwyKjYTLDE58Vi9",
  "key1": "25X1jbiRwWqhAx5S15pUJaRzinjq38YouMZKKiJoRLQEKu314qnAgWPw5mi7wuVYLGSfJEzWq9usuiYVroRkwHkb",
  "key2": "rCqpHpkXtdBNtpiiFNCMPXmmyDpEJnEscR9y4kECeHkLNrTJNHNx3x3u7QkWZT2o2HbfeFVj4kPGGSXp8FAaPpM",
  "key3": "4HnR1SRzgVh7WnueW6LokLaBAZpXr4un49JTW6xuJ53kitQqDuaEoC6TcbpojBLVcS73Cm4CPmSbrYFesmmwqGAE",
  "key4": "5KUsqSwLfbUKtz5J6sHa1JLLJ9bPXcRs9CXT2PrUWSE8MH5ZXGB3VZfwGCyhy55mi4tnwCKZTtwVH7kw2tuMxMwt",
  "key5": "25XcvVAUhbdEMvRbR1ocp6H3u1mcapPs56Wb5YXkddzrwGSHafGRj3KdmWQsyCphKhWd76j6soki8t2omEtCfkhB",
  "key6": "49ghPnoG4KkdWfwC4BzskLJBeHV9zmrU8ER7y6Kov3cwRboPg4RqJZjMApjnQGsQipxWJ1oPwhQzra7EYVWoSj8o",
  "key7": "2S65GtYZf88Tbd5MX9sorcZ9kWCRc9LcxtPRojoEwzLTqCTaKGtvyVFeUWMxazaz3ffzHBGRMNd5NfzkagPerFiZ",
  "key8": "2SjgRooWAxHvfD1DTEFyNtTpSCG6qSRHnco4mRd3kaVivY21D23JVEDqsfA83NF4UqihQgymAbsyeVZHqKSXwCY6",
  "key9": "2SWr6w4sDxcVkTKRx7gC1dmu5YX7anZPXvrHd6UZ8dCWDDUeDgUNcr1d7KTru5SzZ7hZ5JZxQDmBfQHtzybTUbEP",
  "key10": "4fBB1XYwd2YfLtFRgooWF6kvdvPKHRuBBkLUcqeKBsjDfjV3uW6R1WNQQfshoPuBbvtYcx8ouapDKLH3iP5jVd1n",
  "key11": "42Qo7FVaGrhSaiYqVGjPZx5fGismCGyrBDu4jujmTjuciPka4Qi5GEooYdux8VwtAZ2Doa2EhdKUCcGDf7MF56op",
  "key12": "3Y6vwVwYgK9CAKcRQdD1mD5RhQESsVvQPZfvNno3MTsJRLeTTtgkmxQWpC4Mopvb3byvCoz3B5z3shdxfWVGydjp",
  "key13": "66eML2FHWMQykNqbKS9vpAQUVceB4g55Vq7BvvJb4ToaddF6AQ4YvVFmptmLpGo1gXd9dSAjBnVaJYYibmYAAMF1",
  "key14": "brWQeg2zrECNApT99ENN1i3FBxxTPfQqhcxWBHqPhxrzXpY6w8X1S65JK25SHiL3o9rsZ3RqZe6CynqnmBtnG57",
  "key15": "Fo5Lu549h5kdA6wtqCaJ5AP6MPZCXXXMJQq47a4sqTabJwWDbvdfxXZLANCA6QXRmBVhcr6tbtmTZHzdFxs5Bra",
  "key16": "27syszKYW6gahFykTAxkr9DCjHH7dgZQp4EjrNUeBmcHvX82hgRy64xE3wGU7PkrKxn94NXALchPoMhLUA9SQ23A",
  "key17": "X8VYK8ga3UFZvGoui8chJPCp6J5B12RQwSaQioUJRoBvXtFJvjig1BuUkm2czREziZFnyzna5QgV7FZgTYD97V5",
  "key18": "4baWkqDHxcx7geBB3GT6DtEtYGJH5Ss4brB3GPTAHbA3wDtk7arRbUxhs1uckaBSA17meSETAHrJGZybf1VcB3XG",
  "key19": "2tSQshTq9i4bHy7r2zQ3H9769x8BFYcWB12T46hWBYgK72YcauCVkJQ35yhYMjxwcixxzsMzbL6bqVrvWAXP6Z8d",
  "key20": "3jwrXB9av7tg9ao2F2ws1kuNgKB8hA8Z9ZsevTv4xY7w8v7sJjsCbmTw5Q4xq7c56rNHHqyNcJJzM47pNyokXY5X",
  "key21": "5f9yCScsfJPjke7GRTvbtg9znV2H62Pwi5KnbgVKy16DK5FgBWsRSBJ2NTP6c2xvZtiXrg3wtLPThbNM2BvirpiT",
  "key22": "2pKjABaioa5jUpzz5mcpgeBiwYGk3gqSyJfqEikMz6R7w8tXwWQp1N86GE1tbt1WPnnjKnZ1qj5neYGoyhxaHi9Y",
  "key23": "5VfPXQy2xrs2Ru2qBuzkN4FMfeU8UuQb6FYzFGa4gUpRC5kpv8eNofCiSytoQWLgEV5ApamJcJnL9ArpHbNpQEdZ",
  "key24": "4iJjhvfrDx29NwXZfN8u89ib7rdfNHdw3E4GHHeBtiF8nNhnk4v72yj5TnpE6Qu4R3fw9ysq8p6jxabtEQrSkMuN",
  "key25": "3SbdtU3dEAR8885Q4iaGkM83hroijDs3GhahBd7JbzXMCmQrVssKBAHZeh2tWVDejrVVia5TrT92i3iAaeWEnVBu",
  "key26": "Epx2JPkHuptHKjH8STsTYAvYkwtv8VXByCtVvEsBU2hrpzm9LAH6e8nReHxVfhTga6bhocD9D9YJnJScajB4v1J",
  "key27": "5T6t9LendULNcc6sMc5brn9xYDtwEvAfh6PfmvNyyuzRA5budfU3uRGF92wSE3EGXxMhgdokK7nqCPr2qhJyykAJ",
  "key28": "4PvbzpDoxGaMFkkjYFPz2Jyy2ChSmhi2Jsb6UG8fbTCB4Ut7kvh9kQGxBeuo5Rif1MJAd2RXKxKBj3a8EJhkF9Ck",
  "key29": "2X87Q3XSQGaw5YbZ2FeLAzS65gAD4ityUFSm127RUJCU7A9kY9CimTMbwC323ef2ob5zjeGDZGfRDtx4Y3BAduf4",
  "key30": "3MK1R56UDtsigEj86QMi6YuY5PFCkcmw1Veu6Q9oarEyi2spQi6i7byyWysdy768VfViwKeQ3tX81RxjcaMtgSTm",
  "key31": "3t2cwyjtUMFVQsdeJNNr4AYpaAS7TynTUZ1aQ3odxcFWeVb1KUGbaE7YqvEgNctX1NiLHniXZiKqjjAkGJSsmaMx",
  "key32": "4opHHgTMqJZZ371JwJJ92pcmjE1oi5bgMjfd8wAyMZkNMQYeHbj8LKPkELXJ6RdwRjQpC2E2oFgpMpffSxTZzHWh",
  "key33": "KDXdbE3ArS7vZgPkWDV7AMFLF3zGugDZHLiHnErtp46YvtmksqggEwaw1zeKLFyDYHgh4s7Z3YB9Wv5HVCaSPUe"
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
