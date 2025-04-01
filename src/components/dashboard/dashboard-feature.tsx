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
    "4Ju18BS3svsobm6wiHvtrjmBLGa8G6GiiB9E9iKkjgyED9UZYtbQXkoEoKkjGp2snbfCfdpMJLunN2kwZfS95je3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Kd9RAiFQ4R9GmgvK2fGybLfA8TLUuHo36s1PPSWBro616wmfKW9XWppER81AjX6LzU6J5xkiwL2BTcQFdUJh1R",
  "key1": "Fou8QnGRhrH51a5LJ32jzbYVaknN6ggWtVvodGqGrxxfp8mRAk8U844VE77ytKSMF4hxQMztWCabxWtkdRhWJo1",
  "key2": "63cVqZxJJ4SCQJ9pWy6Z6ojgms1mGkzEDc6VA8dwUkPsjX73yA6aMkdYh7NiiZEwQ7EZ2yWaEd4ZQXMHkbmP4GdH",
  "key3": "39wDJUQbywe6Le6M3gH6g1F94GRgRWE7ZbQpZpuAhRi93xrAwbMV2bVL8GXVJwFKHaq9mYK82C6GfQrbaJXaL7Ud",
  "key4": "5XGxonyLeCW59MKgupnEj9bd6jLh6jrURrvvmZu7dyXhNdCjpFQqaAZvYdFn7JiNohQzRr8c1Ddmtw2BytikPNTD",
  "key5": "4zpucoZoHJ154Sso1YRuGpoYWxTdTsMVsbHU3GnNBt2P8auTEENAzBUXdv3y2uVJncUPsA9bVp9Tr4UriNGyfrwz",
  "key6": "4aP31kDNnT4pqbM8DFwZ1YyYf6LMeF9EZXLTADnnBRZEHnJNeN8V1jxGwaQTrxdcGmjWd8AyQxX5Zaowoi3xPdeM",
  "key7": "6dfin779t2fWeos8SrvH99nWL2Wkn6Koi1A4ysoXsoHZ7mH8WzR7fVWP44bqPvcAPeG9pna1WrxDimP6Yq6UnqA",
  "key8": "ex13Vh3vkf84oKBD7x2AN9jN47VWofq74nncYCmBcZmvmBTTZzQUszG8ZZuJtNcXUq6UE3Ahcdq3advZ6LV2VnW",
  "key9": "4KeypEk4w74NcqdQGhqky8k3ictjufFti74VNFrhtw2GLgeoTxbpcya1Wo5Y4AvzQErTVv7bqTpZa2wBkiXqAJ8G",
  "key10": "2F5fD52D96g6kHQNqh47dGHNamuFvrVDm7oq71Tb3grihMH33ikjdUhSQPxYQ9ouxb5VmknU733UGx9jfMXTeHev",
  "key11": "RujpeQh2cpPXVyZKkagZsyDsghpqnAPW2KwHjZGGAuU7zMGHctwj8CRUpnBnq4Bu54BELiFyoJvP1fAkE4u3d5F",
  "key12": "2RtJkBKUSA7UZraApeKurM8T2S8T4HpA8RtacgXA5UKffJcDBPMTSvNVkTCYVfKmv78dRvukAfimzdXpoqyLHLTR",
  "key13": "27SvMwzajZwRzb68wqJxQkprCiZmU4n4C58XfQGtGvwJszXw5mPRPhKVpT7ambSzfQfpA1Nqx73g8dNKTayfga84",
  "key14": "3suzQnTZqNsjFSs3fpgppyq6Hgn95FrF2wKkZwMjyB8Q4RP4JDLq5rg1wBpEcrxGxUy3nEzZCUDNT7YnZ2azwD5f",
  "key15": "3b69eMiahJdCxrgptmZiexx9GAt79XYviyc8v2GjvuKn8pAcaLj4gv9JgRzBLPmBaJc3VMhKQcVAwzUhK76jR2ox",
  "key16": "2NEoj3we1V78JztVNvpZRNZsHKWsLCh9f2eJeTFCPNjS1RhoAgyfJJADK5EBvJZMkD1HrGTak5hsqsND2QGiFF5v",
  "key17": "28wi2R9BXFk4RiN3REzvzhvCiFHemquoAw63JofGnyXP7bschzeYRrKeRaWfvhC5u1bwdvpRmbmANa3HAt8AGf2E",
  "key18": "2DUnaFgtvByVjsoyDaUfTswZaJyRTqXGPsfURRvj1dQ2PmwcNmKGPHZy3JuAnm4Tzv2F4ZGL3NjwajhaebGjvLmG",
  "key19": "5Pqizzoy4LSDYw7v6TdUJUw5HuJVibPKR95y3MRvubF3HFc8LL2Q6CD2B4isJpnmc4c2jG5PQgYcXxGCQ1WHFp9D",
  "key20": "2HN389gBDyy9cpbSJsA4c3GBwgSEa7f1ezR1cBP3NoPEYx2tETwT66pm56efRurRcMxtgJuaKPJea1My7UvaF3HK",
  "key21": "3bk574MMsK5JJ1m8ScQrbA53o6Zb53d8DbJYqMyPGA7YQLH9jGgcQvBo3Y235Z8tYNKu6W3yXsVKcAdHx5dC5v1t",
  "key22": "3DEiVcXpbJQV1c7fbEst1tHngu5WyjQZVQYU3LkPJLTcP79JMLZe1bhCM6tTpVPipUNQBjM7QJMitB3Ng6umccZq",
  "key23": "3iNQtKQg9UVbTaB67TL9DNQGjwaw2sWweNgrKrGjKGXDYykwiW8k9gbNBZnejPz8zPkFu1qdpBuCDa72g42iJq9P",
  "key24": "3WsLuTgKFfP72PEYxePPtEHMWcTh2CRbpr82zpibUvXDBf21NxMBaoNyw9Evb564gmmq4TfqwirMwPkBLUhsiSkG",
  "key25": "mYWrFmDiUYkzfmrwFvrFZrJEbsmfQQ4YaxLBEdj3TMm7XQQw9bdhfoRyBVU356ffXm15cYWQKfAr7eE4q6o6oMv",
  "key26": "2rgd3T1jrJCcKS4j8uzV2z8D7NqVoJNsfwCNPBCbPVUaznMgthetpLLp3WRyiqa62ws36V4EzCYCAsFMeDGfo8kA",
  "key27": "5Rg29hHtCyvHHEVvtoWMeAA9GP65Ha2ge4NRsXzubrTeMmByqNTbdjmg1sqfrGF92JLos4L1dWNhRRsmCkSVBRLC",
  "key28": "3zqavh9NxN96FJ6rJ1LY7xW1R3qYCSLrAJKjsxXRcdVzsJR7uncLpZdndVopCx2pJqJrZnK2E9JEDSRWg8K4UYLe",
  "key29": "2qhfUBHutZtrnsLGrZmuhUiGBE9Sz2fioj6GsqaBYZ51MRCw6RdV1KgbxX4XM2Gw1egzPv62Mf9R1Rq4nQ9M8tSK",
  "key30": "2cJDdgUuTy4wgoqi2RfTjfqjDuYsTHMKn54zz4RfunnT2JvnDv6SUoANwExecWcnpc2HpE4TTh2Q6maUfD5GgqaN",
  "key31": "JaHgYsTacwLHMVanqhXhrYZWQcBbqW3epd1nFJdpzcPBSkf2TvbHm5nTNrWEvq7HwibmLHsdsAysEw1nJ5FLcn8",
  "key32": "2gbUarnWn9742BiVieczFjrkGFQhPrJtQTWZC9GpuGBxcUNrWWFNSJYrJ9XwnqeGjb6jHCLSjvTm55wFWqxtQVgn",
  "key33": "3L5p2ct5kCath6trPL1dMzZFANW2WyH4xBVu1ywFdnL8Jh45R1hAogNDCpyXA8bvQz1zdw81UpCqFxmYeNi5zvDd"
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
