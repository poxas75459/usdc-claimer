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
    "29r2wxQ3BQKHdMvfEtgzLfFbbZ2SPxxrBYN5XJNNFZmcK6Anf9aQYa239mKqATdGM7c9g8xqLgtiSNb5ZjFLvaox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hihfH36phvSKpsbKBLFxFRhoDmNirvdRFtCngPKVAjwuUrAnLPs1iEi9neNkvvJ2C17B4ZPNztcNWxQuSzDrWcv",
  "key1": "5b86JpEQEBVZ9QC4cSFkM3spjbBhU2KNGE62KqZdxrUGVRmBs6bCmMpX8HFJma1ycdyfD8AiD3DxELrara9a3Jxp",
  "key2": "3Z5dF9uA17jcCkZ5Jt6sHoLAU5eFpRa2LvhYBY4DBfKdFqBMJrKAyRhiz4fuX3vcxguN5fmzKrktQfpo4pQMaqQd",
  "key3": "4Hrg5fhgzzu5x1pzR8X8MLrpZ7teb5Yt4VKpAwZCqwmuxcPem4qAXpuBTn2wuVasvB5H7TJBoKUSDa9cHYmp4fnB",
  "key4": "TBqJTPC744gf2axVQLkrjzyhHDo1EP7AGtGaPAeojdsHyhaPCfbh655Mj3LRC5yXdeGARDYNZCwCYqCJTzBdzZb",
  "key5": "bNyubVu7dub2Z2W7ebXFVEGE8mC2bpgut4ChxWXvo72RJdca88RkNvQhZcyijeNozXH84wELjPXB458rZ2FA4bF",
  "key6": "2zMXJymXv1wMtc4jDA3C9XxWpkha9f1xasPxRwjDKYR4gjPdx98QDZUeXZoaodEYBkveZH5EBGxKQxkH2F4mDhHf",
  "key7": "5EvaXk2USi6K7zFiq5tDysWVXVZkfWcXnaQo51o44eyHXSCCw7PUC11pbyqXxmKFZEYc52FMoqahe3QLF3iYZ57d",
  "key8": "mGJWuTcuYutz1EwgnPxLrPRTkd5uRkF281XChQyZSEitD2LCV1jZqJEg8j3HAc3Uso1XBUg1KuNXEGzSTH2VQ5Z",
  "key9": "5xAc7WKfPa3mtUYj42jUvCCUERo5WaAZvF296Dh5gRwtfBXuEt4wsxCRwCvYvtJvjNikyqypZhWXXR1sS1gdEo5W",
  "key10": "31gWsCTzdmkTxpV3UFnHTZMvQCQEbC3cudC1pGSHdyC98cB96cLPuPAmnF3WEtfZyVtuQAWquSuGNzvYBmn5sHSe",
  "key11": "49mA5savkpM5mnEhEKZY4HyBZciUJVaWbgLrjFC9p3cBF7gFKap9tL4gwYTqRFaagfLiRNwrdL6gWK7BGuhtQCBq",
  "key12": "5b5Fg9wX2JG8PH6JfHhsZc4D8EKYUBF8s7ATLkffTBzh1RaDvWFRpyMYFjuzZkdaam9QRkNt7Sy4akD8xHxRwDn7",
  "key13": "2kqCkFEc1GeyWvKZVPfYU1VhUrLZTnd3hPhroLqe27S4XLfE3vMS4RUnbNwa1CnKMjxaxwyvjY4yfDuRAYdaB9qC",
  "key14": "5TgDEK7KzGHpNp2mvCPv3wBSQYu1p1H2q2FGyNt8RsoeuEbP6qmSru8miqC2KwzgrXXSbvT5cbw5RPmUnzD79LkK",
  "key15": "5jG8HZGSWQHhErckw5YekndafJpLS3Sm91xfCwRC3no9f73poyD5MRy1YzEukywqxRyk4vJ4DUr2yj5h2dV1nzUr",
  "key16": "5mCohMPeyxNTojxu6gzc7McV3gewCPTcYgknWunuG2zUfsyd1mQ26x7SV8tcqZSt7SeHiUmGaeUefTqvjMg5E5FU",
  "key17": "4fg5zHGxJQciWt3VQMM9GnvanSDby5qszKNkbq9qegcyZh7brFS2t1xtZhnW4Euf9pT6wP4pdF3tmL16Xo1GZeoy",
  "key18": "3cAvbMDFcSBZPg83LxBcK4dQywZVrgAAodAgDff8CftjNA4SaRLi6GLfCa1se4PTgxZecPBAwFp8WHwNasiegMGX",
  "key19": "3CtEYuSquaKiTMnTYZvFoTMjsViypJZMGHi59WwqWc1LvKk6yi3SWSLKet6eknUtfcvb8W1f6eVY3RHhPX9Gx566",
  "key20": "3idGQVXwPAA7yooeaNy7Ae1AXDCHL6DAoMLbTW4iB4vj5k15mToisFiBhC77GiW5a5kQEseRBdimNgpJmV9fhxBf",
  "key21": "2vSC4DALExKDbQhhVux6MZdYtXqKNNuKDAqm4sjUheG36a6YB3AzyZmVWhUEVRJzLeJScu3ESCVASscs1VEhKJQd",
  "key22": "5k2CDNNjr1wFExxC3xHxxV4a6fhPAbLsjs8HvbSxj6mvzTo1yYFPxDKfEwspzHarS7knSdXWqURZ8ZMwQX6QTpt9",
  "key23": "39tTSUHLJKeQvPifmEj7qvxB3UCPBSxoHiZVvb5TtJP6vmQq8rWWL45Lv9tGampSv1YQqXphV2JaKgWqPM9A2zQb",
  "key24": "65HGH8nQw7SaQbRFWK6DpPHfpRBQ36SmTKuNTfpdqNw8q2QnepELQZtCuHcZ8FWnBWuDgiPm4mYQZ3xM8BsukRmW",
  "key25": "5PV7h4S7N3EDeir8vDvktdE3nPF6snaMYo79Ja63YEvUrEuBz1AzBCvTEYRdK6DUHpuTQwBs5zmmsaHVhmM6kp7g",
  "key26": "4XjwJqAdJpB6CJUCUPNXDJ1MHDuDLhcKYiaRgNfTknNUGQwosJjJ4dvx6VTTaLjFMixSjbeQZPuj2KosmWCCW4b2",
  "key27": "4aQCfoaRP5SNLGjL8UnZGk4b6AEmwT1cW7E2owtCtVLeRp1617vt6Ube1Qs7HXDUcZ2XbYcFJaBjN51wpxKe932L",
  "key28": "3Z8ggvP4kvyYCN3dN5Q6ARvQvFZzLDRU5YNuAfq8VkrbG9Ns7orfPH9E8o6ASTLWWUTVEJZzKDeJkgMadzMLkzyK",
  "key29": "5C7nMXnBPB1LoMvXnSL4YioJWVqySip2kS14xcnG1osccTdHa18ZUruhKaXYUzyXGbLxaBUMNB6jbyMLiutfKa67",
  "key30": "4FxRKja2hGiaLkUtRjuevLEgB17PgKrtLUhVzRLHM1771fHjxsGG9G7si74QA2taHTMZ4AGvaB4hW9YAvZhoGCHd",
  "key31": "26BjFAS2noko1CRAjnf875tgNnAX3f1BJccdJkx7HnhvZ7EQ55VYcXrEWbctiLLgg1Vnf6ELKoFMkHhvnVi8oEor",
  "key32": "9p3SnLBA1N91sJX5iNtkpGDG7XwQhWmQ7v8M7p5o4PSiNTqBrxj2Q8Gb62Z7jZqHsrSJLbpVk4otsd13AVj7Qr2",
  "key33": "4KkNRRhVq4QQEUUWvCdQMM8ub8d7ZUNXwJjm6Z9XySj46LVA92F7kD9peXYsEDTXqrT2UGuTb7PFPL8oS7VqEaQ9",
  "key34": "2Rv2nKan7GRbGkM2n6vP8XAfuywWqxpN3Hb7VjYSHWbn21iKmAqWxT53bbT46fbRWEa682TUYF1smeX1CM4HrUev",
  "key35": "sZ1mHn3zrjVQTgduUV7W5h3pFBwgh5yTJeKyTZvQq4edP5ZS3ET8jcCFXg23k8Qa5ReZrLTXJq1DeV8SDJzuahe",
  "key36": "5ZUeRw8KCAP6ucw8tdYsAjj2idVFzSPRqzfHpMQTak8tC1FZZfNaHV5A6e4R2g6BnJKi9TrUDMm6dJoXPaCEWkm7",
  "key37": "4HywJDNz5gTpKaPpT2kiU5qsuYsXMuZ97m3zWo4oWFkWft6aUref8De6X3qqiTp3n6Ckr36jBaMTTzwWchMibxWv",
  "key38": "VJQrYiKjFCMBFmdHs365zDTAbsneVfcYM3z2Kq7AW1Yd31hcLmmx39A6GGjsKL2zCMMbbmUhqScJrAF28L8q5sA",
  "key39": "5PFXnYA4N12Dn8VFKioBn4HW1Pq2mbdkp4891DeZdbCnc1J8XVPEBWQem2EhzVB14Fe2pJ7WPmfLeUf6Qn1ZYt66",
  "key40": "4memhevGNfJj96vQdYqTy9A4DA8WCmgAojjoNTvMqWWMA5fEa9uvTzjxedy3ei32XdqFdJr5VrcYVJWG4boHTgvP",
  "key41": "tmjWNvmp9K5aqmAbGH8SVdPknXxUUTskR4e5i25sW7rD7X9PLBKQhN1uadGy7QCSMRv8bH3fav78f7yeduQUgv8",
  "key42": "52utEbRZfjTmMQCknmf36HNXZpUgkQ7J3yiwaWsK73BbgXTy71N84kS8CeHdr8KDH7nZHpzb9TkwAcBnRMqMPQvq",
  "key43": "5nXoZpactmaqVQRP5uFmmwZGtULkXK1NLufyX49uTjKpfMegyL7DTG4LaP4CvWvEoK7ouWTVhczRiJHzqcYb4Me",
  "key44": "pvNNxyT9E2CmHYHX4eSYx1u2RaerWpcsWApmUfH1Y9jx5qDsjGqB3Jb4svo9js59BGx83YGsSPT5QJUe7E16wJM",
  "key45": "Eg1AgSrVri7AjPpEyMXxiS8JtQnh9X3ztQqoHfCYopYFCsihbskYgHRujgHSzdhQAfBpygq1x7mt7toi2wYf9bL",
  "key46": "3q7zgbPfANJR3n4pdXcwDGrff9EbfRF15C6jWDLwZ8tEctHFj11NDNPVSzgz6XiBm1mwRuDboS7WXsxjh9aPWGxc",
  "key47": "4DvBJz7VVPiqKNqUrdEm1o57wNjBnWJAXucyYDfdbNdku9gPjfrz5mrE6P1Mh8CjBT9KAzigaHRnDa9UgQZBbafm",
  "key48": "2AjXsaYqu4YFn71oUEEzdxGRKmPfYD5HNYobjasjzvUxEqHxDEPR1dg9MwhFGUj1Pf9oNQv6oW6WeSYGAudYvH87"
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
