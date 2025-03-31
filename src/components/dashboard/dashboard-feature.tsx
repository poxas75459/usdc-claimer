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
    "qKrCk9WGbDQd8hxWSSmqrzJH5qvrkfkQQ8teNjKQudgPLG9x2LL34ZZwxsN4B7qnGcU2vTsqHkq9NjzcRvcweYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nM4rQDPT2JzP9F3agFm76YiAY3gp6BygSgbDGTL6F1yzxbQWSLVfXSZ9kTzyfsNbnixRbGbq3YeFX1dvMncBRZm",
  "key1": "2PBvdrNWakXy4b8wjKdnFXeBSMMpgDbzNLF1S7wwpt8cLfbZzRgdjaprJh673BH8M6W8cpXk14SnPKLmiAmjXrPE",
  "key2": "2YTyE4rVUHjoQFTNHTWSFW5QjdjnJ7VxiPJMqiDhGXg6B5rcxQqqBqz2U8jrHkbtFnTucyMkDC4uJ1Q1i41pvjwt",
  "key3": "57X5GBBwSP6dvzm16De9uN1NP3nG6Kv2WjM6eyh563yqDqafkxcK9Jn2F8FXF79E4rrP4gciR1G8QMS8QcUFuCrQ",
  "key4": "M9zLZbRtFPYWGvrBheZaops1VCFASrhe5XPA4wMoQKHvVVEZ4L1opZxf3xYQPGZkTV6g41i18M86kBtzankn76h",
  "key5": "2pp3wqYGz4yTSziwJVazwrgVvqtZnHRzePsikkycnNBwaVASATHfDgMhnoRBXK3HeBaeJV2xMUuykgrFgxJ757jC",
  "key6": "5p8s29jV97DREgbZNv45urWHcnSgkoBL7ngtcreF5tWbnXcMwv9F4YfBJeaKGtMuMJ472wehCgJ6uvviHysaJWmF",
  "key7": "57UmCkXCXjTNvdj65MQrWoB3ceJzS6kzVxehZcz77Go8pCanTtzcTLheDiKvvnbisNYsTvzp4sVM2XpHUWGmwpVG",
  "key8": "tadqrwTX1GZfekJ6cdCDxSZej9oDZeUvPQPhg5y1nZ6FRSuDcnwFUpyqy8tsfwWsEuWfTyhDFkLcLtbEJorKYre",
  "key9": "9mg9wGNwTWXjWdqwCHxCugsr7ra1dgHh1rMkESmJfSfCPqiBctrTh2MGCoqwtTa6BkyGAERpcV877gz1Zt3Xq2w",
  "key10": "2s7ALiBEPRfzM4BNerX4eFUWW7XiZSonPKRHPa8yCry77FzXNsGcKKuWyFKHjWdkmgANEqKqYv2qxVNZZdt7KB97",
  "key11": "jBj3iPiXiiE9Q2cQytkwrt7PJii9pm5634CjMM9rWpUArBy6Z9DWF61zCkjZY3SdE2uALbLA4NCTonXtG6KGUFd",
  "key12": "2PsFvNtcG19u3dABW2S6paJo8EpeTgjWcFyBRR3HQizcoEsYzNhYepTvHwrzvrbhWzMPm5iP5q9sLPUNtRv68BsR",
  "key13": "4kCjMtwbUkYa96Kktk96eF8Js5T9xtmoZ87k7eZXWBTfsVMV6Ja8mRWgQVoZBryxQtuEq2HdtmXFqJnXj499a9Ff",
  "key14": "48jDZCui9RV8P39pcKwjjCREjMwS9gdAC6VjYVQ2t7fxyoqP6ekGXjrK9Lr5fJC35MtLT879F5Yw1ta2P6KYCqPC",
  "key15": "5ywRNRRoSdqVo9fdqME2KwHxnUsFhVdGfJJ87oyZtcBN2gDuFTHf2Wxby9ThUzj6hgN6VoobSfcTT1Bs2JzCT4hd",
  "key16": "uDLWRAo8Lr7Tzm5TcKsU4Pg1xyu1w8RZjSgFSoXg1MHj383VVkmF5qmWAL9o4b1VJk3ZBNVWHcUK2c6Z83s2EkX",
  "key17": "MVRdBHPpXeYpc6eY7PGutooY2UsNuevJcVPXv2yQVEdCtohvTvtmxDtS4319gk8SuNjvpjX6JT8MTTqQZhHVoXY",
  "key18": "3RaNLQ2hH3wz1Zvp5EdAvGoUHTCChyZ3y6t6xpwC4TuG3Uf188Lb6yxqEPgD6Txu45TqeQHJeyA8T3dDLGBeZTjh",
  "key19": "uDPitk9Y6paeUFi5XurkCZF1faG3hjRFKw7wpuUkCpFQcdke93A5B29CsaJZej3cqLccTSZ86mUQEbwp7bQko5r",
  "key20": "2ficAJx4LiKqxX3GtajFyeDUQshC7jtABRuCftHFLVyuWT3ZRnecp6xxVCkE5pkdbUUMKodbPMxHUG1ya2JBCw4o",
  "key21": "3LbTRiCBN4Vv7XzMrYyZD2RP9nw7oeNXn8o2FBAaLavF8tfcdBVRfDV2cse21p6CVZMDFWJH4Bs3KhoCjiURL1Dp",
  "key22": "5nN9EtbLDCfnAg2cx3KAtpBFLRscaziDUFuZKM4B8iCgrEXpp4A8MdfGv9iJ3a1GRwBBgPeSiB356CUti2yCNRHs",
  "key23": "2gmqEuNy4ggLdVTdTr86gB48TujWLAags1hJccKV9eNQ2a2CCDcYn7CbDWfk1e3VoQpCkZaFDA4dGucFwNcrHgBX",
  "key24": "GobPbiXsWGbi8DnhTDPSoeUSgSSnqGjnUGcDoSmVyyRntBn5qnBsdAv7jpA61af3BRBL2g2dCaZLriJRrpe4W6y",
  "key25": "75zQKbsiToQbZowqCQuqTxZD3UzUwD8t4nT29iPxzmBBibrztSgTWpdYk7PKSudKXMo7FvDefQB1You2EQvCJco",
  "key26": "murPnUWYfBc4h825JMEH1z5cmMAgJvNukSHZTppEMRjuq2Ft4Ecp1Czx1kaDEJPbSSs9w4ytyyZv5uj2RrmFjgR",
  "key27": "63aE7JXdR21dJWaWHKivWJrGLxG6Xh9Jfj8dj2kqTVMQLk7RtiAZYQA9R3fGb8ktHWX3kWRNnhfsWs5UMUKc8Mqj",
  "key28": "2NozdMhH5zb7D9vokHr5tizd9hBL8oNLQxyWrS5x129qVNCv9USxY8fpbYU4EXREm3g2UXHMpe9QH4J2NE5H3Jn2",
  "key29": "5oN3pDt2bHrYExaGPQ4EBTrrmEiJrmnb8zjG68MqBxGnoEVxVWkfRHibQ5fZ1m5euRQphYgM17Sy61cdmiy6KXRj",
  "key30": "5N6JTh8NCJKRJoWSQSgpxooen6kzGGKuR6xvFf6RmFdzQdqv54auFNHqY3MBbreByFDBMVcQj8hmQdURPhUEMSPE",
  "key31": "3whfRxpLgL4CEtoJBKcLHQD22pC9YYivPWPpQtPsddFpedMYKodvX9PCbRi4GVb3Gmwushkkpw8yVFDk82XQtV82",
  "key32": "mnbWrF8jn4gRij31yFK78itaapJ1vpV9oMuvNKKQ7GmUbm5MfzNZVKSro9fJRnBvLpSy1VdYMh57i27TTECdQsn",
  "key33": "KmKsKWDLfKMHeU8GGS7ShP9bqf8PRWb3MrKpHsU54ze64tYcTjoJexVo5KLc2ZvL2iCqXq5eoLCgtbcRMyKZL2Y",
  "key34": "7B2MHz6ESPm7JHHHFukW511uVHKDZQBCJ6wpdqsyUsxzgGJHuFQkj1XFaRmEoZBJFD5h9dmjPYYRuWrnWxdvyKu",
  "key35": "5i4PRu8Fnb7vJVQ7Ng5vP4PPDtgFSzeSfVPJvMng38THwXBugDFeAF1jup2q9F8NfJJti3Gw49g3ugBJwnVoBH1E",
  "key36": "55JrcQ4NNHyRiwnaRbR6BXKALQtFDpeeLvQ9bWWtkUVEtArokNPazBMfXuza6ZMq4PASAQ2aAwZai9M84TULP92b"
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
