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
    "2QxhEda51F9s4gAbvgDt9riEJWehg7c3AuEJwYWyQVJXscpteoMMaPqd1dakgQee5PxhefC284aLtjRZvNc6JbK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wu1DLkSm2FUFeEoc3Pd3pgoWHv3V1gkiLojUsNpgSeh8pq2nN1SyBLnVSKqeEg2vZoh3TkhdHhQuNKvMRxqQiqc",
  "key1": "5NMAtjQSkenLJJTDypRDdvfVFYP4txD18Y52JHnwi4HrwWJotaAVAw7CdkyvZCT5btmCDaNkL7d8xinCMVF4MqH3",
  "key2": "3GmJcAAmCfWbqW1ww7UnrUqYoWWzXE5vztfyEynw31zDnLeXj9pKb5Ya1AhELZ4R5jQYQtMNMoSikQPvG531NnEM",
  "key3": "3M4AHaymND4gLhWeYCKsG4TDasqZ16QzC2vWmze87hXg55gZiZQuCRoPrJAQCipwUWuKF6Z13pAmesasNULwzGVN",
  "key4": "5APZ3oDTVUj7eaLKW3mZHTsMvsZFHcDbm1khgYYHFjbcpKgDGzQtGbqjQQwVXVMDMQbg9yMs54xicuzDGqW9XaTb",
  "key5": "5nSUw4uRVZP3arDea97igks3Y8WQDLiMzjZLPnMbzJ3e97hMGZMF2huLBmEEJbxUGWUV1gLAK1nS6neGuD1JCCdi",
  "key6": "2daZB5MJGeZU6SDrTDuYdFuLzCqsciMiSNur3AcbP5n9QaQZScGj9ZTm9fTU2rdk8R941j8metDvbtJhs38cSuxa",
  "key7": "4i4QWSa5kZ5v7NkDGQfm2G8du29WhUdgPgF4jJmSw1WrsJNDBH3mMC2rdf2B4bH7WPRat6yBThMcxgJKAzx2YnJv",
  "key8": "6xKpibKsuSnzR98U39maHzFJcYmptPsCHLCKAvicacLMnLTSFpTUGgy4ANM2DYN97rL7NVdsqGm7B8zbyp7Nahd",
  "key9": "4ypPSxfRTbwU4bFPSbFzEJDJtr6RV2pbmyWYYZaxo1HjTaSSBN2xN5ouxQ1jzmz9PQ4sLT9ZPF7Bj9x7GpRfZZuR",
  "key10": "2epxMopSrccBRy9y3C25wYmvNcAGZJ1Wu8jKjo6U8w6FkGJrGtqP3Qw3gHnCyeLanGKxwUfUKQYQKs2V9Gaq63Py",
  "key11": "sH5oemdN3xnJTUcbcUKBGs9E1mhz9i3DFaQWEyQstHJjRPs3FaQHzpV1Jhy7EPAGhf1JN55N55qyVWWuLdcqh2a",
  "key12": "2ZF2jqLEUrYEHCWd1jRmwCAPuaeLWkR95srtZCo8qWr228v3GtGGWkajRNuCMujTLExBJaLBMjYL3bge8tYb7t9y",
  "key13": "PAA1x1Ny84nPNJUxwmEskAwM3B9KHhzRgMzAHaUg2xL3KcCxTJzkt1tG4vHb2Ze9jjrou8m7YmmLUFg3bysSL1C",
  "key14": "2vxVHzxkbHyR8skhVFYNusAkowfFGckf7tqUaytvvr7z1AWnjekKC6f82jUw5uwUZtKjs9nbnaJREjQKCzhgok4f",
  "key15": "6wh922VNRsCRobG8Pcvtkn5thLtpbqtiS3oqp3hvggBqxoeVgVoj4TC1XQf83UbJB9fQ6y2xj3b25XG425Fhsv9",
  "key16": "jA7GPYPHHpGPGpyzkhX5zj3VjYnA2jh5rq5EWmqgkKj1UM4kDG7o8Yy6AWhU4Jbe1884NzJNWgwssk2C6GMZ2SH",
  "key17": "24DRzRK6iHyR43HYjXtiLhpVxHygWLNUJvwJwvt8YWPRcXD5Kjuwq8i41vQ3pQc797pdm78WZq6ugF3ahddSrZgc",
  "key18": "5wm5dfeMKZb1eN7dHPXJ1u2FA58pf8xHtsX65ySDARyaSheYQKU33Jd2bg6CoPqrAA4hgeeepP7KDFDNvCj4pwTQ",
  "key19": "3NTjQvrx7wQ2dDEqn9Hob7pXm1Qm44KCpsx5eNcZGrLeDDC3iQDRdXHTLmip1ZRfWpL3wzdSvrJ6Hqh5kVwga2DG",
  "key20": "5QSfhBVyZgs8Bb2vuAdVku7RJYberE89wTuNyqBfkWm191JtQCRUD9tDUQzsFQvnsipmhjh9HNVQVWmwUkEupk8q",
  "key21": "5jd8tTHqRchUpiE1n6dZL1DN426GDbo15LsZD5jWksFzGcnV4Z1tsdZk7k78DLQcTv4GAgNboyWDh4AUcxhvS1NX",
  "key22": "5ZKuFcrZBs7NUcQLqJ3LkX6TGPfuhS71dXZ9WwRD29r6X5LhxrkDkopWSeL67xK74T9gTA47cDkCJUWRnQM4KzrG",
  "key23": "63NK4oVHzY1H85AuevTKoVS3jFUJDQn2nbYRgFBfGPTGDDwneVwDuKAov7JKERztJ9YW9p5T8xqMyXyzXBXbtYMP",
  "key24": "5DLTzwNJB7MhKeoUKtQfUb6fBqCrj3WqjFqLK1yfQPwRdEQfMLVys3kdAJiKtankE8iUgTDePcTz7Tvyw6LyX2S2",
  "key25": "5sbYMEc3Cv72JUCWrbUgkjyqtDZyxbMQxk8ADgMtesCaJm4PdSEw3M6PW7zwtENnnysmDjRUzEGATRjtcYitGn7J",
  "key26": "3BsH4YY5D4yDS5fB6YLKDpJD2ciGtSBaWFhPLV3qvuaq9gtWts7ixCcuVCCDxJL8NyVNFTDzxN9CuJEDJuQAmkZY",
  "key27": "3L37omTQJ2mpqCLw8YykFiaa4BsNxVXzmbEZ6bwbfqA1iALzkNQArrQfS2WgngeVVq922r3t44N1vLQEGhEsP9u1",
  "key28": "YMNPkBuVY8pknwE23u2kLiFHYYvt7xeXKmggoDAzMgY7EZ43DkA7g6NAPXEKYH3wBwBYXjo4Sdk12fhcCcjZ5E3",
  "key29": "67CMyUAYzsDZjAKcbkp7mQpzEZTtAFbzmZLFqJ4qQC1i5pTM5tJdi1MMJsBbqMqczQWj9BgCL27Nqwq2rXS6pbTC",
  "key30": "5CLrjRyd8VHt9LnFSw3bMWfJ3cswpgvsWUsJwH8xmymJWcRxTvoXdgEawdUaV2DdBHotPPGh6CHaASMVAdCpZUor",
  "key31": "xmhAkpcdvfx9bK6PAkh7V3mDedg7t8h29o71sosPPdNGLVfbPZm7qiVjoRdKprHXxxii4zdDzfFAFRGHY3HWTML",
  "key32": "41fiF3WYXPEk2SQX5yDhDeB7PSohfRErhAHY7qQBQdsmpqLviSp2gipGLJVptt4YsYkJun6wrw3wFFJZ7MQ4gt6T",
  "key33": "6HfNZz2QbW8XZ9LJHtTHEm93YabiMiJKQFd51jN2YDeayBkSXxPALZXdazh6RZg6PzKSAbjth27FrXPNvwsD5Uf",
  "key34": "2pKGvzzZvML26HJzJd3ABbfLVZzpi7ThMgE9HCSTBrDBSHr2uc9DRvxmtRJCWp2ujBSgTLTpiYX7pEJNXyxB4PJw",
  "key35": "5nTJ41M9V93Qq5Thfpi1eKrFidK8SNjwMFfMCXouBscXwy6a7kznFNPKPP636RgWi3YsFKn81LTBHTgYJWdavzSa",
  "key36": "3JY2sK5ppZKN1q7sW5QRYE47UitvDeZHBw6ekSXES1CatUGDxpYvYWnPFbbkQerRA6GkwLZkbc5mcJyPZtafjAV4",
  "key37": "2pH2DCVAWVqZvtHe5qeqgESrofTgstms9ABQUw7dvgmKMd2AkQpUrfCEaMioMT4fCMY5gm3Xr6eJSKGkZ7MGW971",
  "key38": "3y4cVDEiQkwKsZbfLQZiuBjR6JwnGLMoZZoHnWsV8w5GWXC4kq68VTPZSWdc1EFCenPYFu1gDFM28queYxdmH1RK",
  "key39": "39QkaNHSfYLjPWjrcdBg4cGC7AqgWAdYWSV5CpjBLpmLeaojSnvwiCbtkquY3PBkoyytfySNb2T5aUGrfH8SwVNM",
  "key40": "4DWm6QirmitpMFPj29frAW7P4XsobMBUo2MKuKmCgCNUxMkvTi1pqiYCuJn8e7jkz7pGjiGoB8d12HxtsAaAfeCt",
  "key41": "RV9GdiYjarYoHtGFVLg8fYCtU2LpQhGEgHK34btx7SJntV4AZ6vHbodX1faPDSNpjQkugnnCHkd5rshgkt6uf8E",
  "key42": "5opfRbfzZZiY11EfFXVPxnRyHMACyyqAzX6yjoxvQT5hnyBDRQeZ3WafpzNbprfkbiuFHGc2p9c8RPr2etJom14g",
  "key43": "4Rt7oCvxR1ohzNJt3ko6x4ZZMdGWmLRfoaAAQG8ji6bVBqowEkB6wz86nBpRYhRQDPkXWHJ4aijmTJTRRK1Areos",
  "key44": "qRC4SXzhbxNBSKiJXk6ZPmGKH89Y1FaeZXsewYDbUdTLJMz8ekjwcDS8pj8zDmyvCtBtmoJE4dvycst9sp9Y9ua",
  "key45": "5KREfTYe9ywQmndwxxdGozEfXUoCXygqhMK9f5PBaJHXf1zMAex1FdgYFG4bXikoZUCrcx6ZF5oZFN1nfKbGvpoE",
  "key46": "52ELp9zsTytFTEQd3sULDkrA7YJVNLifXWt1jankXqUnAPJQjgxrGxSiz3hv3E9bXBSy4bD3FJvUnte73cZqKu5s",
  "key47": "4sWwuLedB44kc5wHddoHT2LZKq4H38SddEqZrozLeNertiSTKM47exoWALSfvCRQL3A6YJaH7hAos4Ut9arZGCyp",
  "key48": "4kV8v6MaL67Yg3uDaPG6RGxJ9MsstK5oFQiVYjNGtFcPioZf1d54HPFxRp4bQ18WWwsscUpSP2HnsxBonE4RZhAL",
  "key49": "33eQqsLNiB7rrugAmdcD6sGgdSvhDDWcVzNDdpHqKuvMqs8VwpFDXhkSBEDaGeVfxxHN8uAdnUbYLz4n7vecRYF"
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
