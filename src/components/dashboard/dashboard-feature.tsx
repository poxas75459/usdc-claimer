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
    "SuTfTZWXtom81wz2adPC53ftN8Swd4BgZccZcxtT3dkreMzVLi3dHSva88jftdsUg8mWchpx5t8LMkevR5cT9JQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34k5WeY6TgT49xxw64orujFRtpniWwdWBVNDLUg3rBJpbrdeG7Lx1Ji6E2xEDXD2gHnpSrS2xp9Pm5gX32ewdnEs",
  "key1": "4tjNNK93vtDEJ2x6qD5inExB6t7gEfHQZ9uXHjfqBBtwdEyHGH3wi67WBj5u9fjwfc1DjUjj7si4drpbuBSYaWYo",
  "key2": "44rSPoXGrPprYXtmkGXpePVaYevwwMYsKnwPdyyoXeDUkvPsdjabAjQ2jGUHqWePDCQwzJKNyBSHfKoN9RrJgGkL",
  "key3": "25XePuHqBrKe5Xii6feRntx58Pv7qjgSy89JDp3kwahg2CkLSzj1H44ekp4kpJ6Vvc1vkvxmWxiyx1VAUfV6g7Nr",
  "key4": "3DfHnB6W5cU9viZAdVduf64a1sHi1pGBwZ5H3qaGaCYgrgN2yUXpNbgLoKi9am3JByfNr6dipb2SPcSWnMk8aqPK",
  "key5": "4ZWbWkSWNhqraKkAHeCoUbr4rDXo4JU6BaRKqHka2se4ptg8Ma4cAx8eYKAShjDPGE21sfpgUjZoWnFcdTLYbr7m",
  "key6": "Nq5zhcgaDR7XsGRK2ntR4vhBQrr18qpYtXxxUWoPZYKWB29nqwdmcadTBVN91J4cfjStWCZ4spnq7VWFYzRdTAE",
  "key7": "4qTBZvoaabJRRGBFsDixWq16eqUJGBtXXv4AUcEceuaRDQHaFa9bfdZxJWcZrnxff7zxT75r8oiUSETMntgYw9x8",
  "key8": "2kaGSZMiMbBJornfTFBS3m1Lzi15StxxwkJtV6yTKnJTWVyZotKsBoxCWhgRanDj1Hh6JqFtGJrbT2i4GVqMJPsg",
  "key9": "9UAUKFvYVWGFQv1zTH7VUWHzkD4kRNpGS8QeAB31J1A9yVqBhNYW5M2mUPuph4cW6f8t8ZYo4VaRbbMwNAe6rWb",
  "key10": "63ePV2pfNdZzRE1TK3rBAZdzvULdQXnktSVoAGKafSNnT6BHdxoXXN4xKUtKVXoDeVyy3ZWgeZvJUwiWhDdA7MiQ",
  "key11": "2it5UoMvgGGc74BspeZvrTSCjNhWZgMHFD8qxLoq8YpEPfYV2x6artPwWvCbTtmKUhFHZ9naf7iEP9gDhD5QrDRB",
  "key12": "3xNvcnU1wa1maHJmYoPKqBrPAJndq6W7Ch17kjMuF5b21BmWxix57xBfKMX3MdymqqqiEKdKMSLbKxfKHV6pSnXs",
  "key13": "3kKxKBpsTsTWoWradfUW1Esq9y7uCFK4vCaVFq14whL14cXaNFUdsvLHQeVq5uv32nJTGikTB2WWGNkJXizyextL",
  "key14": "483nudDC8p9PCUfSopXF64H2ryUHTb1utcbpgz6KsTqWRhkHDzwMS11q2vE9zhAFnPaoQ1gVssBGrSDzm6pGWsG2",
  "key15": "3bUG7w41SzmEPHnTrXuq3GeAGA7aC9NUcfVnjd3bsFH3KiXDnf4PYTRPRgBZWz6pfjM4BJVCziP7jro36J1xo5zd",
  "key16": "3EUDiqgd2Tvq9mmaErVtqAx2yMWfgtuiPuW4UKPtkVJswsdcgmryrDZCwAo8dywCj3am6gWXbucoBXbnJD2hGEBd",
  "key17": "2qgbQz9ZwRCVS7zRb8fTwj4ENowGjJe7JsQGruESF4HvpjHbkxB657rQiSk6Tzs4Sphbv16RcuyUhHrmpprDKWtF",
  "key18": "5r9RudDECNbcgMMv7CjFzjeEpsYuGBKsr751hhaFt9FW3XmEUxDbcZJ1nCz6MSGmpWm9wiqSmBkN1fThbwrJdrH8",
  "key19": "5jX5zQf5zF94HXLrbxmmtKHZcJBwiv2bztRUC3JiYQadnVjR9BhfxCoSHGJMRRHqvYwx7H7kUgmpoZWw1fuU9W9u",
  "key20": "58FpTYYPKjLnzrTNYTUpNHWqvFuBPoJQq3t9WmrEHSPwBhiek6juFoB5mkdjXgzf2Q9kB68i2MWP4uFVx4VWFBYx",
  "key21": "29KCr7wKUHUR4qH6YUq4v5HJTG5kpAyukxs27XYbrwY3siSwY2byeUkGDvssQxZRJ9m2o1T6XjhzG3hbmcQvBXoY",
  "key22": "5dCcqUGWo3qjweoxshCQJt8aH6ftYxQVBu4Cmy6ATsQtJCQMV2ueo5o9ukQom2HPfNmdm9BRNYpqCp5222gkwdkb",
  "key23": "5MMu1GxbPqkat4NnACQ6rXvGtruXzCmRCNKbyYMAtCks22vRYVvyYXiEenWiurGcn483syxXDnWBHGrgrdoQWiiZ",
  "key24": "5kng61M3ARDDLMjzeh3Huume9D1bKLNdsQuq6mhcYrFrZ2LSVYFHCxCEXXx8k6oPop8WYuycFoscrbsNdEzT2ntG",
  "key25": "4pEp5iChTbPMstFand9ZRYu9yiUhZoz64JmbSYiyo1W5XvBoAowEyusjHtteT8RVRecDKvaWYF63s2xCNf9YNU1A",
  "key26": "5DFY7PhtqDPF1ZHQknF1z3CoFr7Lgeju8wmREuoZuG3ZzBj6YyDKuL434JfeWcNtRs2zMzC3QkmEtgNQm3JQh2ms",
  "key27": "5RsviEAG8b1LXzu52d3F6pwuZeGKwKZrtXqEAtojaEHr9R4uXoc3a8MA6R81PgvbCwNaHZCCfmHF3zzm1TPzzmDU",
  "key28": "5giogHhkiNCuJZSxkNZ2d16SGrTA4NLLPmdvWQiaKMEQvyAJYi4inJKx58B213QMRAkhJZfNsMq36DmALJfTfaxL",
  "key29": "336Bk7mUosMB62FSV5ftZR7zsqAh2Wo37nxZVNimtFFyCYxVtZyTp5p1FKwSh8UDC7q4bwqQrCHy6KzsDtzh8MmW",
  "key30": "3S7QeGh6bmZXrddytMoMtXRgrSnTVXBiYG84vjRht1bZ5SzgzxeSnTgGvRBQF82wCCfVYpatAoQBNVwzMbwchRrn",
  "key31": "2LxhqBAJXEupkZMhdjZb749wFQyvfU7Nvo3FKrmJ5uapZwtnmPv99SKfMkwquVL3L993vc96vq1uRJQdJgZvHvUC",
  "key32": "5hjXibSP51xiiT4dmLSMHBTFseJg5vL85HFwcjWqbYLVL7hHUhvcKDUi5iCBJCH4ravjDZdje6A1CN56DA2gz5aT",
  "key33": "51ThfHxAuXHddppiAWG3x3GGCYbzydW8MsJiUxXztoA1BRwDQhLiMjzfrWZNqRtzeqyhcXH32GLmVzxF7q5KyWvw",
  "key34": "42NgVFWAqYSFeX4yidufpn7LtxdWoUbKQQ5kQc19Pdshc21V8mcJx54xX5Bwxa3uaSDEGGnEX9UGmYQ2Z24WKdd4",
  "key35": "3ss5f3GPmuKuc3xV4wJkKVxmM8mYhVWLcrthd54hcBJkhvroiMF9HTa8qNfGZJzJNaC5VYfnyyUFC9ktbs428RQp",
  "key36": "3imuYaNnxPkUwqodr6NeEATSaJK1sbgkvEozUtUtVzEQo5Y8RX3qav82CDA4tVH4noTqK233pkjRtsySEEj9utsA"
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
