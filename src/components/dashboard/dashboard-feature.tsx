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
    "3Dd7gLxKTh6XeKMJatKj4UJnESzab47ttpQNiVGqDGbXxZRWadao2ZwsAQCA1TnEes75MUSEWgbB15sGehicoWfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cbpREQJ7eT3DaxjLqHeYEN3R19uUgbtJEj1poSKXu6mYeAKiz4aWgiRBkjvJAVdAUTXhsmvguMXiFZsY3kWR5Bg",
  "key1": "46JvLsub5e9j14pjF4TD26FpioFH2q5ufpmmLktthpTGMpewHs69BVBXvrvegSiUCCL6ktWJbcdb6FVNJKhVWBgf",
  "key2": "TXmWDi9iVt5cg6UZJiduuHDUKYrk6KGxKeJN2SvnZFBTt6Nib5yzL2PaqvkbpDyAfZqasZVGDqB6XFnnm94cCyz",
  "key3": "2vZyj6JbHkzmmVYm4XZK2qwuot1VfSfgGvfVuogmfAWgHuvu9WoUDbU5MkD9uMJKZRKxGYqCss4UKxrh1DwN8vou",
  "key4": "Jd9LC8Tgzy5Mf5GWSyDa23Re9CPqGwRBFGNQZ44J8mNF3e7dq25P3RMSfhyeSZ3bz6oPcm9BLrsaWVS5TqK77P4",
  "key5": "55MHD7SsgPDFfgjGZt5WxgycxKtySd3Aayg72iqiZRwzUiVxQAbbVtCuuyet8nQ2nLxwXmUd2VwTt38dVrvp93LF",
  "key6": "3ekap6pPqAeSYfy3ovo1DdmdwJ7WX9qCRaLBePWvPnBo474X4HCqpCZk4cTTmXFQu1e8vs8MfYTSizbL5R3sNbQf",
  "key7": "3tKKhArkA58XkURarmVxdiquJFmFXe9y8K13NDunhGyb5zoFSLp6Ra9Rp6jpP1kxbs5s8NC7dqDddyjgqN9iNsS4",
  "key8": "5HjvaiVziNhtue5NNjh65apJp5KRg7bejDggaaazQLFRJMWhBNVWraBgmBLmVJvgyVUchnLj7QSQUBwVrXJXRWNY",
  "key9": "37xMYY2huCsVeuvo5z3noHT7NvYkQkNy7kcY3JRu4QG1SPtZK37WwJewBtC2pdfxSCMa1RS4irkRbTRpjDpu9Jf4",
  "key10": "3yPBJKfanfTWLtpyd4uPvAQHSWwubZHMYvqy7ojFRLe8LVTbtZPVANqeycfyMEQEnt4j1Bk86uDfaVuGRDRRySjU",
  "key11": "266UPNkFoq9nL5XqXaEatFhzeau6vk9nxnLjL29NkjAeeKWZkYaXj2XWALKYQVcg9isc2Gin7f6NnG3FizGFqEQ8",
  "key12": "5KmQNNwGjW3xjBmiUjbUMK3VWQiUkuuFjXoAzYFn1yCHxpTFxLSSgNT1Fk1m7mpgHkEw3WcW63oJcuqfVx9SzpMF",
  "key13": "41HFrnQkXZhPx9aP57JssYnJGSRscsNA92BEVu2LSFjxi3PSA5yJ33PzqxJ3yv3WQiTEdUb51hSRU7Bss6sKjkBe",
  "key14": "FjhaQdvkovkGFpmXSxMdcyaMHSfn5FFLcV5fzTto6Xvbux8YavuRvruPQzjKUcrmc1kaVHxvfnDo9nkea4BWosH",
  "key15": "3gCNneQLJoUD1oXuQpyrn1yi88vbFyjDaxtVEjP5z3xnRrehjBVVDkqaKVuPgPRtWAWFRY5HQW7sXx4tdtj9H1CH",
  "key16": "fe9aRWHkYJcbP87svwaTpBhB8MQoTVHdB25J9xsTNfZNLgzJpvzKBwGsUHQfUiYgfzgJ5jFZuEUt98dKj4aGqgB",
  "key17": "2e6XbfWyXx7iwGgPw9bUcoywxWu3J7mpqLEjexLbzAhBcRPQXZ9cGR7sdJd8aUo9FBHgDHLBZ5AVyaPPQakzHPLP",
  "key18": "3ERBx3QbrnjnMXUezWVGYNphQ27xMENpFqQJEVFyLWk1cRcrWwqMFEQCAyfcP9G18gTBeEYKuFArdjpV5scumm5c",
  "key19": "4Xpz5dqidekG3Bn2kMdcBbctEckvkucfv123nTSuQPtttKpz1f5TczUys8PrD7pds7J54rgShkr1dVV51rVppJBF",
  "key20": "5FcHpcJeKY46ABz5DHASnCWEbf1HfaPJsn7fQNrXrmQiHXcnTuVBBN2G8aRMjmGJp61PTTvF2iFjvM5s8VRnNgsc",
  "key21": "3azoSX1Ksz3ChU5a9Vc222WpB37MMTkFCd1RjZmDPrxYZzZ59A8J2mepVVPn74VEc9vCX3yT3A3uKGJB8mRG61C3",
  "key22": "B4wtLiY9BZMdAuF5td8KvdSFk3fGkugYs9k6MpGm5447UCxZJFHV6xM766eyFW4HjQ4KwQJFyK3QN8kptPEmeXG",
  "key23": "4dxN8ZeNFHCur2GUMHJdCGhkMSZVWRyCiE7J81pBNEfLjjNcACdPD1out9FT8nPVpdugPzQwkp1D8G5nnx7HKVEo",
  "key24": "5nsz4SR6fmisYA4DYF6hURfnGXkHZQaidrcM7psYhzFJaShv8RsCKFs2R5TbZVGVM9tSrqNUcJ4SW8VGhNMxVoLp",
  "key25": "5piyeJpEoL6hJS1V8UtNALWuEF2PVs3nGtq7jkXbrYYxZy8BpkMb4HaCdVFkRZN8HEAhMgbZGmUsbz5G9vwjvuJ3",
  "key26": "3iVEJL7BqUGpizdBB7DDvo7NbbjXYA5EhcVva1J6vvqbZ9zmdFNA8r9DcMZDCsC7L6iSrwbrXSDKTcEBiR2xYvqH",
  "key27": "3n59eqvHRpJ9i73PmtqRnDgbvJ8UETH1Z4CyogDByQFyXAnHJNqUZJsAnFShtJW9nuVdb1Q2D6757XWnS9CW3gMk",
  "key28": "3DwBk6UQZJbaG6z3YCBUJQMu95tjZW8aN7feCYWvGSjKadT9Atk4G9ESRAct2kbEHnvRANFPDGQdRaw4J8q1LQmf",
  "key29": "3KzPNSmhmZ12baQPM8ewabbozhcTXHXNbhPxuLSisPtt8hGAaQv296xWkcfDo2gPBNTzp97xpQnQsehndHBAmsMV",
  "key30": "4tPkV5GZhDhDQEyfkY1MZnz5sdqsznydR5gN5vD7yWTVDuA1Q7jQezLvNmsXiGBfZZ8X4Z3pSiwWvMZj7ayXFJcv",
  "key31": "EGa6u8MSGj6N9UJ3EX9XHcqQCk9B4EF1LJpoYuEdjXQX9NAScu2XuARiJYBcEnFMLayiifwxHncyvqtKaFBfagu",
  "key32": "25xebtut27EoJBeAn5T1u3pJ6QqhGq6KsBzofCtTWmRKjm53mmmxMcrPArwyuq9pjmTFpDqj8a9FWBZxzHGpx91t",
  "key33": "4raraXQjzWghMP5MZ3Q6WVhYCsQWErBNaGic2bqFSSNHMZLj7hxbfCrWeMAYMGufUEDf4v2yy21v1h2ociDQPGRE",
  "key34": "tABrUULjmTXnrsnTg8rKtjWp1qk5iJXBSYYGAAQQCJKJgBEdbb2pXNysiaDLiYJHug9aMDLrCjE5ES3SKyD2mkS",
  "key35": "2Jk2WQoEj23fuSBci38JYLaXU9bSnFNcZPEh96iKrfzAzsiRZJhcVxTxfhK3b1wKBdJkxY9axptr2MJrjK5DRRML",
  "key36": "2yzm93fW2kvKDP7TafnePwpScEnxH8LBG6Gg4fzcHC45tpBgWRwbGH3Ywvi1p3KrS2eRpQR1HbHrXv7NaeCFJtTT",
  "key37": "41FkCiM5DegLtANrAtHySyxbiZZSz4uYStAYBBewFFkohZ2QUWaosUNuA2SZUXhNFnaPHALUs5HTvEio7V3Mkv68",
  "key38": "3auyzWE9sSVaRWm4px5j59rD7YLJ1DFu1cpAGaKFXgqMQQJiqwvCXLQ4SwKjG6NMB2FQK9TtGZ8rLwo6d6SSta7r",
  "key39": "8bX3nUH1jwYWL52Ys7kKeY9KkUJe3SAqtbKeYJRJQtt6hiwrTYsezQpyYxTjeXU7erhKLvsbtE7jduL8XGuJZeY",
  "key40": "2BxwcnoEmLsw7rq48E4SY9XCbsRWBKDpfGNd5GnZp37VTztkYEwk85wKRZDRzTZ6trYSjiSE7cVzZoxmU4zGxW5u",
  "key41": "3HnjyS6okoggACzkKVacndnisJWSwk7SxLCvLqs59XwZqsnhGiUze9PjtQz6ztyosu3oE5WntLF5QpkCGYNt5kAG",
  "key42": "5GbJCbqivhPmjb3bVBoVqceQJN7JebW3sSFyj8WqFyXsvCWJnrLhVj1Ng8zPvVf2rS3emumSd4LtNzWcLhFDaYKq",
  "key43": "H3imwFZ49Cy94GV6AREwtbFHudCZQfgAPW6WGYTAkT3QKiFLviVNfYd2UHvgLyy8ULigLipfLudCyctVrqdhbUu"
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
