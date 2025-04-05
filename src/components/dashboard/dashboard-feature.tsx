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
    "2RBZzzdGn1f71NkK1CJn2z3WTLXfXxjvKFacV4gLh4KXMnuZGgWxSqJB1Kd6862yko8hNviMQd3uxN2rdu8HzRoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YCLPxmSko7PDsmNZWk9CWrmaVcWDWDjUfeUwJZMMtfEg8svkxJxxodp25eFkW4eBfrmNeiE7PjAHfej7w3Whag4",
  "key1": "5GKm1XF1GgW1KwPHxH8zAqNAENP7bWKJ3Wb2xWy26QyUkgszGod2sAP1ByHUacBzzLJeNF9AP6WgJyBehZaT7rA5",
  "key2": "5UoYZkVBnP5836bgKe1eAjCu9XQzRZzABF89Ris97oLMNbCPLrBUhwiVemimxjfKpkKW9B9F52eAcr7VYruYMjzf",
  "key3": "4HAuvYCjgRhkn7aY8tVDXyd16Y4W8m7ranQ5j9LNUgJjb4pALJ7iUhMh8mQjynmp1dRk2UXBspdnCJ5r69DDteAx",
  "key4": "pcsVoDPwjv5YWER5A9yKHbmS7eeMjk76kubsHiFjtuGym2DBScfDZ5UEBVL64MQ2CYvSAyvuQY26h9YBGrfqFcP",
  "key5": "2FGrUZnu1FyVKe3ZSBxaZveHyRjbrhiEbmtHDKiCcakQvJ9N6hK9JsGUfYBnTCqqQpUQ8J3kWvBQybqqUV6E3DYA",
  "key6": "PfSRPdqYxw8ZbXiw79NYotwSEG9uciSRZ3w3TXi3Yyt9QvZEu3gwmn7Q1XMvmxXmv4K6mESBC4jh2JrnRcg5N22",
  "key7": "5hqif4XqtsXmxWgF3y3XjnxSnRNwxhVc3PZ2cxScb64BFrsggxsJJS8zvbTqaZSXWtqVwj1u7a3q6sxuTfjNJTwX",
  "key8": "4nQhiawuysk6PPnXEVFYXkCqDrXwkBHbxHZiq6fMd9hrpL8KiXjBDgg38ti7xDnm8h33sGJ8g3LFQ14Ea5t2ea9k",
  "key9": "5jPrZvLfWa34iMZx5W7zrkJmk6RB8PJrUdj6NwfjecABYgDdEvMUucvLqbPXBtWpj4KfoLiJbfn6yd48ZCiaKxij",
  "key10": "4NMjh3NiXdyfBAbB84ACadb9ZkQgrrkrTsSGgGyWGLBnsv4ZT3QpjS4wFaf9hMTuatbeab2F5U168dH6hwMiYoHG",
  "key11": "3uSgf7GaWFpY1RV5trGRdeHtDASiAUpU8Q7X7n1Z2TPGfwRZHCi2kNrzwBGVu5oH73xwHWQ7Xmwn4LeZaXwM2zJN",
  "key12": "csELsUuf9kgCREaEPGYjR6vFe1qeLZaC2ioi89fFU8yQXZHP3Wfyg4fBnyGGDdYo88kpLGqD7vbKMRNR8cfgrgg",
  "key13": "4S4L81YGMA2rQLkJTdH7ENtTpQmH7e7MCR9rYGKYptjFNaUax5iaAgxKYDWGA1JxcL8kLZX4FK726tX8uN1gvowc",
  "key14": "3RiRbWMbjkgXUnFQamj8LgQ7NA9nAt4dDAiHmtMcgrQJAamjHvgG3K6JsztMCMHRcNdqSVhLZ22rjyodvLpKZzn5",
  "key15": "niJpKpvS9H3xamE6nEwgejd3wex39V7cZUYNaCpokbB7ZfxFcZwqaWbhxtAXGNYCQR1fV6acHkxDhgRXBxmucFj",
  "key16": "5GXmv6oxK2u9suRXGmVS2eqLSz6z8TitKUUVZbMoqQ2NzE1gDK6jqn6BPo9QtykYd3sdd5LVD8bpwgnDxRvkM57e",
  "key17": "vMLePwkLMwxbpLsfscVGQ4DZkNgXYpWuPBt7qFUdb6rZeuFoBrxeGDj9nA9oCpYPebQmAaMQtnmxSPWvoSgvS4V",
  "key18": "5mf65pcZaH5Cgv9uheSRq36eybrNmtcbhWAgqXpvqZhR6bpUwG7jUye2DhyemTT5RpDJtyNJa5TZyDsPY8JLCXR4",
  "key19": "3NsRdtyBJs2U9uzs8nqcTYyZm4sMQiiHZqZpGdACCNYRPUiuY9Dt6z9SqoYUyQVy262yDu4YvnLTfUU1asWXb3oj",
  "key20": "5buqm2q3RPP9NENAFxtLSRSHjWpBAWMS4ZwBgwiFjXJedeZGjfyaMVbVGcSKwq7Ak6hYjws2eesGX4ufpgViC1BL",
  "key21": "3tRQYEvZSYLo3QkxH29SjnFgB86dn6tC7XP2XoMcaZVNqkSNpdHDKZJNmzh5JHB3QPbjy9LA3WPSABD1V3op9iC7",
  "key22": "2BUE8nVEtASw8kPrWmXVHPfAFi2Zm4PAMiFLyJMs3p3FUyGxryrrT8pgm5mwHnM45sgv43TV85yEVoepy1wk6oU6",
  "key23": "5JmCvgVQoivF322PPENuf9RihNBds7Q9G6xEH6ZpuizazdDRfNMHpzeVNzjCiB4t71UuVDHMq6oFLD7YU44P2MjX",
  "key24": "7kMuwqxSga47zhhKhtWWYozB9v11jftMBmWMRBt4Zij9K1fMSpgSALfxkBxm1ErVDFkyNccUBKZjfjdQiYPWTWY",
  "key25": "3k3BajehAWMwPyUJSsX547YZP718tkFSXvQbU7YBdkeS7SsrVYRUGzh55wT3Py7or5wGts46RU3JLvGDzPjcSXQQ",
  "key26": "5XbyHLDSMAoMuFavgFGt7JQ41NQpKLNm2RzmjRpvCgwAGUeBpjing1ABoih67FxfQ6hJg7bSQHYQFkBX2y1BPh7h",
  "key27": "5QX5kTUamhGWJem7apBjRczxBYEXifHFxnWggrY4jNn924YDPzkshAB9LqnRovdGiEj4P3HCsfp8yGzuLBmUSyLb",
  "key28": "GGDZRRoedU8i18YCcHnPr4hWCn7jyZKdAnGdnMEhvZB77i9sNBYfK7iD6TUyTy24cmRgLJ2QnhhUX1h6LF8yA7D",
  "key29": "5SbUsxKZVtZs5uagWFz8SRz6nuWrUmJscs14yETrmuYCPfeqHpS3BbsDiC7WyzuCC6tyPSHCNtzp7xT3D7LCb8Zb",
  "key30": "67d7tj1hrULCveaBgwTQcgProRnPWq4qWbrXBv4wbpNFr6Lp5KPdCmcffeTH2F9nwLBu1hjNDhN2jao2oTT2BrxN",
  "key31": "2vvWJAMfdkk33Aa3rVptuf9KT9B44qecnsDcu5L1q9vPAwpx4SNMVc7iGGeUF1RKPCAdoPXUik3sXF93WdRgcYGV",
  "key32": "3zUovzuMT6vXwKvB2yBRuauxsT7aQqGEPyDh9cjcJ3DmDUR6abEb5GTadWKttHh3HjMPbm2yKWDxGKgBKW4MtVzK",
  "key33": "5NNauJDuSSq5fSDbk8ZZBQuBFw9ZxeE1FjNcjCzM5kwaXytsAvjN2xnxXEBkn152bMQveDNfGYudgav3MWiHCxhZ",
  "key34": "2pcdzEAzv6XufMVubKtJGE12B9pJ5CY4P71GyQMXyiVn7tq4GVQYJ4vbW3hWjXwadthrdGdjo5nFsQBWkTwmiu6s",
  "key35": "64Q26wB3FkNzPYcKEUzGdCFdtm45Tp6NmSVaUroE8m4Dqfo8CcGswX4J8e1zcbnfZs6aTopSAUc4uWN2HBeuKjMP",
  "key36": "2M1Ny3SLVAeFbNhgWmSby4xe5Cvx3QWFRzP5MVFbDCHUDeSVnUkrrLSUFJbc9978StNxJLiKsxhGf7Z2cMw6ZPpT",
  "key37": "3CHxeUrdQUvcsoBBpcLQmAnwKPrJ1Qr2TLWRS8Kiuxw1aBnA2M6YwHH6cCNrRmjAp4Ui9wp3iSAtrrrNVkQSNMAe",
  "key38": "2CDpqwat1LpqecpGT2LbdtYYAayR1JG12CwWCGKHUUz4v7q53nULUSPa6QqV7g13dpiWXs1xsQ1kM678Jaoy2HzN",
  "key39": "2ctYrVue1oDZXz8tr7ECLjsuEC3eEmqBdTVirmS6A4EFgoM67vhbc1NoTeD6VQxvBfdmjAAjRN9UuVBEBW3dvDdj",
  "key40": "51JLHQw1hthvajxB4gVyBjnuDnNdxxTtHCisWF6sbWEHSH6huu9d5Z7ZPQVajkZ2DZN5sqdk9SYVN3tjeXAih1CW",
  "key41": "4mTsdEqTEgfCMk5ebPiL4Pw437zT2bMLasaAJ5HzCGJ5CmcfSFxcPnEShwSwWqBvxk172Drw41EE6DxMNuwW9Dh7",
  "key42": "5jYC1zk73UPM4sm5PcE5VERWZSC7Xbx13cNNBzJshphs76XChQAcXSpJKWaL5TkYpE6jcj1vbHgYFaVrnRsLGTco",
  "key43": "59LmGXaH5ZrSkfTGZrCPoGbWeyKU2v66opGZitY4KH3kiVdbgiDxMSnWbShuwpvM7jViiLTfuE3Mj1ERKemzJzyB",
  "key44": "5oQSsrgxgAdh2znm8aTQKiEEF6nn2pnk3m4ySZmyDPYnd8VhSkRvvxKpqTvmUmSPiQLPsPeXG4XJLnhwe9dnqJuR"
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
