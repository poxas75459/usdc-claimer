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
    "4NmvTXicuCsiKTChKLLYgvjAzJFv5mGxNgxcQGe2YvXj4zZSJgSEhyuamTYx5fta9tjDf6MSgYstobPJoo6ebB3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CJzXAN4bJsPVW2Y977cTMek8Xb54nVuQkSdrv3NoW74NX1RfZEaAe5a9sQLyN2UT16VLuJPyNWtD8hf4djpagcv",
  "key1": "3NTSh2ZQaZbMsCU3Qh4pAXseEPUS8GZBnh41KVGERtc9scmaFZrBBPWEpnQKfdLTATt9kp3bxG4KWJaJuXqzFnDn",
  "key2": "4uYnM82kefXiJeLaXcbye2LKGUekiZ7ZRoKwtAt7H2qzfi93rnBJPkhp3ckdr2UCDP9HBjMsML3k1GmYSLdX75Mj",
  "key3": "5kSh5zSudVTEperbaFahtS9JnVmjzPK73jM2jW4bADAjqA51eBg2dJC4p6TvwsCukFVJF846wJqbEtKhro8AmaeF",
  "key4": "2TXAuwYtdLhgzDTxd6KsYk16PsPQYBs1oyqsa1ECbXuAhPUfK8riGfs7tva3pmiq4uSGUqN7uVYeLidEBoSimHu4",
  "key5": "5PiQLqJ2CzT5vhqP7MQWhr1gwnwgepx4ENZicxdo2vY4KZJPXNiEefVJYiQ3k7oVL5HhavGpC7eE59TCWpD28e2C",
  "key6": "3HDocAwSte6EuXYJ7tcbenbuuHc2pRYU1DRAaW3jvD3i3XDasMhRUggsEDK2hLX48Rr5Df893MgedoGv2rB4VQdT",
  "key7": "gx1qW6kY4NxjyApvU4DdjvnJppYn9Q2ZRCViKRKUdcVBNP6rrPAcrDJJ4K8ioRasTEnmnsq7mddmkcwzkT61win",
  "key8": "3jwktZfLbTPmSyw42GE76eJF7FBgSvHaw3nnf3ZPjzvapjb8uLpY5FHtWvigsZAckCLBzTbDm4goG5dzSKaVkpuJ",
  "key9": "2K1uaY7V7og1XzVNxw19R39TUzyZnyAzQYYxJoP7UHj8a3VsVSGxMoqiftCknw52dAn2WT5ue3FQRvHWt7PVJwhA",
  "key10": "2fWAhWeoVco7uRaHaiWTKERrCVNDbnYvQgcCfG2xafVpR7CAsJcfg9uyHo64S656XtfdHKL7QzKvSqVLRX1SbV7Q",
  "key11": "3hLfUxe3ztASTk2fCJgLCLHbZdvuyixfkgwx4hhpE1VHDFjrwCCuTMiDju5BqQGHqwkP6n7E1Sv2rXSFkTsTrhiR",
  "key12": "5RHQGCJSiGLug3vG4Jv9BjtPWgnY1idDqUeayXine2eEhUqavrwn7YSqZYAmFiqiopuJVDrRLDmfnfw9cEwiGnRY",
  "key13": "zAWYKtntMqeGupiLyAmcnCTX7etpMMKh8SDPsdfyparjkRDRwuwxSrVcKoQSFGauZvpBkQMj1GDAc3EWAJgQz8S",
  "key14": "2x7yGsUT6X7eWL9LQgzF4dJHLiS5aq4QvSQP6x7DunFYuiKvRY3ZWpBhDY8zHz8xEmwk65LmvrqCKP2bAAcxewSt",
  "key15": "2TK7ZmtVjFSBoHZUJh6TaLn7fZ7Ddibz4PWSZaTHkgXLzXR787KiMAk7yGuAMUgv9YV2UjqPmEVJT5tg8qedP9Vf",
  "key16": "sdaTKW46ZC2P7TW9hvYVQhBM3AAyR6RcdhsEmH2TwCasbRm3eCrpgdVDgrxD7UJStvPPrRp1sGbXF4UQUaAUrkk",
  "key17": "3FG6sTRqk6nm7Lsp8fSR5iY29qAtfHifhz3792YCDJsLvipdYXUemKpBJ7ZhBh4FxFAk1xSpqBZUWPxNAWySmqJb",
  "key18": "5UVHSQXuYsYxynt8dsL6MCF7WUr4MqzC5u7bhvyHX94uuFUWR3dJSGXMgemW4ABNsbdup1Y8fcS2fXEW84xGnggW",
  "key19": "61WN18EFsR3gh4A1xyt9imz5VTzm9benYAkTrFmV9w5sMBjXqvXJViiRstmQ1r1KVe7Kt8jcXLsLwqMr7bzNkKoj",
  "key20": "5FfNCLzMMrPkFnQb8UtaLd4TE5v6Ae7HjN5z9kiun3A7UxrSPnXcnJAGj56RxfRJYXBvUKazM1Pq6ZhCPT8jazmR",
  "key21": "VQ5B8AQbSs2FJ7HYVzAREef2FF21q5iQ5vormXjZkK2kmNq5NFMnaDpiV64o7WgzRvychSyuMmVVMh5ZXjNjxHM",
  "key22": "5xyFuzxzgvWD34sy9JQM2B5U5TsL4wKByEX3oJ97MHWp1xiZeradDETNinAdoPdHXSrLRaJAZsCreQnHTxeMnxr5",
  "key23": "mPr7fUYLaVr7ZnG52rpsVpaPGkdkoQP3yvhKQTVHs1aBk76qZYPSsahNSgmEDegQ55LVzwhr97NmFEAMxUntdmQ",
  "key24": "7BenFuMvpM8gETjkXjFgRTMCTd22bHoCf1AxnjLBCPTM66pjRLN2mb6Tq9yu1cTdonaTk827cJ1rrWZDhWGojCJ",
  "key25": "3vjH6XdUjqXg1n8KATeW956em1VDXJAgxVzHWNCvemGxpLaWCDx4CS36vYDHoLKGkXbYR3fJqsod8RpbaXDvAko4",
  "key26": "YVWVQeAN2z2cJuf79uo3eUJcy7sWzTRP4cLZGKQtv5SfFcNHwcT34ccbtswDgvbE76AkoUBpVz69SU1ebwGf77t",
  "key27": "4zFafF21pj8kigA6kjnrnkuJuB1sETkQZKy3r74m3KpY8CdDkccBWVfa8US6geCr2JYVPRJzzdgRCM8hBZzaJjM2",
  "key28": "5mnRPXXUmfMoNE8fbdbyRLQQFZk8mpQzuzkDxReZyzgCDKkpox15oy5GrUfaA9XFZWJWg6EypCBLr3VLv2CX5krG",
  "key29": "2ucTS8QVKotkeRqSEDabcEobZ7wWBeVWTf6kokb98s5WcAYngAcTDgXYMjJAYGzPQjyPK4FPXZEeWtmWTZYtmTZw",
  "key30": "2MqJfMQK8kUPbrWkRZ4PG6TG1nfH7nfJF3Za9xYbtsa4hEhKvrm9MVHkighQfLjZb2CsY6pG4eRpMTKiq5d5popa",
  "key31": "4YkPhUt67Wzhbm1FjTRNAvyenyADCNpTZ69rmYxWUCGNrnGRRDePLoCRXFHmN9hH9fKhHMryqLcL6syorCkMY42k",
  "key32": "gjGgZ4xMCuSBbnqspBR7BjBFPDWtxWvVtCdeADbJUnee2bGJDrXfyJxX4jzmVVme2ABophXeWnW8sj3o1Ck6asA",
  "key33": "1ST9FRD1s6GSdCrQd1whVULXzxxqBdcVWjRhV1UEmRKYwNif5htZZLNaemSmFjWZ4rqRVJKPYyC4PyCVtHGNGGB",
  "key34": "2NbQz5AgWBAysRvL5HgkBdoWbKPJw2948fJUV3udJk2MEah8fEme3c8aeys2LxrcSb1RYy37yGfgNvtdgR41AeCT",
  "key35": "3wHqP8cCuTFMnzYckPyRdaUfoVpZoWiRjjX4jnjEiS8cbeFRPy3JeKms76o22rJ21BnBxTcVujy4FoNnFviZyEgU",
  "key36": "4crjGs5zDPqPsdWx2gNJMLpvQCEffsSpVUQ2TPQSep41HgZgk42Uosvbj52jdYwdiddSaxHYkJRo92ASbAbC58UC",
  "key37": "37ZCvoRzafxdRCq8Fcvfv2br1javQ2LqbL5cGHABDfczHZo5cUKtB4G8d6yw33GRpqXn2b7VriPEdUq66EEiruCn",
  "key38": "4WWaEyUTHt2KCRjc3HZ55RE2VjHjEWZb9tZh6hQjoLAkXynkZX2SXvBF7kycsQ3eXgJ6BCziy8qjV3HbgdQ4HtDo",
  "key39": "2KMZsSDjDY8p7jgHHK73vXiSQJ5Ctw58UuDnsjfksrpAkz1gu8pu95ZNRfxvBbRukTyun7sgGLuMUaoEyCNW5rVG",
  "key40": "5zJxaJa2bdUVNTxC5eUzXYRykZCQyqMkMQYdfSroTz1MC5xMzLzENzbc4Kjnh18AMZahi21hCM71vuSiAoqzwTL8",
  "key41": "5T76JcfhaeK8ZAxNLgupuZR1XoZiAfHvB1wvgrVG1jDnPjcRt1nQqH6EEBvRvykFyyHEX9oUfuU4gakgYkhbQHG1",
  "key42": "36KCZrVE4ArwDZT6HsvAQgFvXJLWH9Ddvy6X4bVFEDybhXwoWsZ7TBhGEYJoCrJieqXxxRrhDYTmAQGrNJ54JMo5",
  "key43": "65NgXwGavCV5K1hdFqrJuHsbgVMqAFHzqMmCTKXEU8pgvanJenigQmYyKnfoiSyzir2FCkURKUP6fBZU2e7PcFWU",
  "key44": "2uSG7cU6d1tnvQaR52YNzUFZ4m8rL3m56Cir7zeJnKrskwzugSnbd3VoTCV7GAWJajBuVvhsxqVvK2Vo2pQqtzzt"
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
