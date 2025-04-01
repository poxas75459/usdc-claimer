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
    "3gmWSih97Qvc6PqZguNYWjESfXqCoTxasTRpq2pfgofqBJKbMNVpAQF1VnzimYK6F74SNywn1vyMNLeCnXCrWN4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DCUeRs6bQKoZedFW7FApzYspsZKvJr8hejtu94U2fKNLtL7swe4bGqyjz9mhTEceFecDE6Uwp7ajz2wdRJWgML1",
  "key1": "2QEqdvXazQ5iSDSNpiFKoqfHKwvutwU4FGXujw8MKau9cXnisDmGkqSnSyvtTKit95nEEZJ97hBhdfFAnTWUduwU",
  "key2": "5qZXNdpXEQeqAKXWaG3wiRtZ457t8EiNioey8EsTxTmpQHTMKYoQBf9ExHpAMARRy9M5b66maikDYC6ZsWrqntCb",
  "key3": "2zcPwydmNvCct5Um14ERHHpHVLWymHLfeTxFUye3x4HQG1wD9Hb8ZaZB86ufbSoZDauKKVFpHE82Y62JuR7iqNNZ",
  "key4": "5mUbbqZdPsoD7n3CiYCVEEfx5xDPnZ76gDADc2uJnvfx7nVcCFRd75c9iVM5j1gngU3MmVZ9DZ8udLWKw2B4Fy5A",
  "key5": "3T3w6dFpMXGYGf39NFCBhxHjKLg8DdxnoBM6vTtpGi4ufDzx8kWkx7wTaNzHJFrXqf2hwFnk12TMx5WujHpw6nm2",
  "key6": "miW52rstd9FPP7RKK31PuB6jYdVeZaMy9E8kzLfb2CQvpMYGZcxJ1YTxG3NWvpFowJFSSD5YaPrNq8u2e1LDWnC",
  "key7": "3QuSd9yewYAH7ky3LM1aZgtx5P9Rjrsa8tHY9Q23M8qMT1RkztBQNXAeYrkN7koUqBwMkiX6gkBwsXESXTPnDSDz",
  "key8": "4PzhUmszgN5ebhQ9a96k3rQxvJci7HydmCzQFwPLL3KAj6nr8EaRDf7sX5Tdi23gk7xuzSTQQgVHwJiK124PHCcw",
  "key9": "wbbTjqrQNZ7m6jFdmdpa85yEWZYa59h7XBDCzDxn7sY3osqSgawZZziJaxCD3tyY1MK53PHgNQN4DgrUSWuw5xE",
  "key10": "4qVAeHhZHjQZtVYKm3sbs9zWppWRpm8Ni57wYw3vi9C5tERnBuvcow7suMZDiws2mBCVFtu9wf1JqU8siADcL5bs",
  "key11": "3eu7wStcMg3JQEAvp5iTcLJEYJ52v6CK4r8AHzjoW4wuUtiGMXeRbXdWaheeb6d1iA2nz8CuxNJVa3LXg6CiUyZa",
  "key12": "2oCpo89EumbCcyMTC5nKbqRLZfweqEnX1ECWdP5M4DDU7Yu13Zahp37aSAtm6Q2YiLhnAh4rEd7zsKJp7jd8X8gF",
  "key13": "3pzk5ARun24XXAxzpbi1DXKFHPbvssshkQcJQFPTaGUZk9j4RfDmSAsRPvdoRVRd3C4QZpdpTpTsaMyaQB2PCdq1",
  "key14": "kK7pWZrWRPPPtECL2QfVbHuHcwPMNwye15gBNWJLDppdb9XdSKvWgDJBbvD9TktiGQQ9sx92YZ5Qaujhqd74THf",
  "key15": "5FENrp12KZQmMzPUbXcJ7Xj6vUSu8BW42s82MpjNLq8imgq7gjb7nnxtW6vTv7wgyqnnm6txtDnEStDgixZUttj7",
  "key16": "47Z7wBe3YMSHULuJ6aWfrTdEzC8bqr38NyUMqoau1mXFge682QChmfsRKgH5PiEBdvqcYyCCftMmh45brz1LXxuF",
  "key17": "4gtAaaASzMstgfxnvPmmcoGZnasDp3ugbhcmFDPuQZ1e2Jx4c6fT4QrwndGbjJkcg1uHwv3ur5YiEY2acTjAv2hJ",
  "key18": "u8q2Y97ipzJPS1hskRk7W4LGjhnEZXX7xra2vDYSBJE27MQFiJV1k7jMu4b7ARXJTDb7684Kd8TV1SKZVDSq69q",
  "key19": "6YZyU3VfKQ93P6koZNwfxUK9ENPSgimf715j83ADM2fM5LperwEaAfqsXF6zUSk4FT7DsZGn14XvEVDwZEyvb45",
  "key20": "mmZjtapbz4kAnFf2cyLBowuUQYAuKy1QrzjJT5w53uAHE2DrTWjsy1snZXoNtbjxANcRYr5mC7W9YhDsEmQ5AxB",
  "key21": "SFgNDqRWp8A9MbLBENTmYxwy1DQZuzAZfCMNqhnhTw2jBqoBLktabQzZTRQpbjp91sJS5DJfZikPeMQMhHRFMDo",
  "key22": "CGfJxEZszdAj3iKKBe7oMwESwiruAkyssiXbSNhB8PyAAQ5qPyH433RgSXKTQwV25JUHt8aSLSrSajd2xs3k6Z9",
  "key23": "2TuYcXUbUvNmsPt9opRoTB4rLiDUDWsvaSqG1UB2h2asa8fs5cuj24X5yEF7Q2gmCG3X6tbL3heh4VDE66SumKVq",
  "key24": "NhB4vNhBQJkgM6TN2u1n8QCqstaAwrAdR8n9yvtbChsuoDQe2afzR5v2YbLPMJi3STdKLNR7TbQGkRHG4qtiUAY",
  "key25": "5etZxCuQsXE15uq3J4QmX4bxWtw2oDf1zCFUVh8ZzwrYriHEP2Wqk2C8d9NGZN6oeE3rGYuH8rrGDXWpqsrheWJM",
  "key26": "47AuYssgnqHPRMpSnXLXiUuzDmY6fcHVVuCQ4dYCMHwX3U2s5S8cAteL1NcquLvCPZVPrHuSQ3S6bayLzzMoF8Zf",
  "key27": "24AXvawRvi8uo6p3S2r8oFRg6rJJQdMTWYuXmrwAX1mbdnfBTGQo9cBztsM53TBQvcsTPpfxhhr3A3abef7HA6SA",
  "key28": "3JJ7ViGpWwJSidBrh3c7uyXgjtfnujGAAi1e9fv4aqnhTbRcvFYDJimEQkSH1qDy7d9E9JDqjYHqu3QqQA9kMPVB",
  "key29": "2KSH55TyVb4LRPm1Ey858AWWLdtuH3Aw5RehK1EyDTHuCqSsrSkrBLWXWCn4N9whsE7x5Yjihu6m9p4r94kz2jrc",
  "key30": "42hbbGhVbJrjHmQjU3QsF7UR5mQ1BnoNNYYF7rV7GzLCfJ2xi6B86Ef65YAuowd5HjMT1wrjzV4fT2shNGXbH86H",
  "key31": "5nqQGGDH1e8XdG2N2LDBFDh37bDo5Qhhd6pbJR3p5hDsnf3YRDW43CySumgeTbEH5MZzBAbmAQ7mZ7fFkWtAyQah",
  "key32": "4ryFgpsje6z4Dh8yxAWC4M7guzjyzi72VcrAMWLzRW4rDVBYsKENFQkguLXay4HmxHBfGbWKF3Zvz1SqHoaq2Jgp",
  "key33": "67LpfUjKF7xdXGNotyC4n5pXnJKuh81MvpJu2BVu3BNdEBpS7PfieA4eC1W9W9t2s66kTxpFMs7YVaWzXGJ9SHeT",
  "key34": "4Qi4js8xUfmz9dGH1Z9LuHx9tjDCML6jBRNNsorBjzyppmGLhpFvC9q1aW927vo2X6N63nVenj8HYJDzBDb5iLcq",
  "key35": "5nUQr1cmSn288UUeJxYbxiLqMabb8fk8G5qJoFE9zoZj9yWXu7h2QbtLNhi3YLUBEsz4sV3HbkQByEnALtP9a6r9",
  "key36": "44ThRiMmpgZqbBLYAVjEKF8pzXab6TBfRVp4BiSb55o6tEt3q8qVicivRLzN1bwj2jS95XFUsWfz5TwBfjudcAZm",
  "key37": "4XwmmPaXNbyL2UDdSS2GbGq8EoPocbow71mKwpUiLCbBtNqTWvrxfCu5iBLrLJrbPM7oXAYa4jK7inhGoWYL9bwM",
  "key38": "37gjXccgK2in1SF5rkNeome3XgFVKcvXB7qk8o1uLpVNTh7rPbwWvPgEBZNykmYepysDTMWs9hZP2SWqNmTdKMM9",
  "key39": "5SpsAEDf5SkuQHXV2rdoH545zhtmd1A44WEyip41xEJthZCJviTH1zMAysWsWcHuSABcGG1wDQdJcW7mbuwGCey9",
  "key40": "4bfFfJ75mz6rMJciHmNY9an7DQPm2tWgA3YzCad7ovrDNY74DASLoG36S9mfPH6GvbUkVdBGezRZNhaE3QYw7bC5",
  "key41": "5Tc5UyJc5zamiCbmFkXMfkRvBfrXaXb8pE4UByBZcQjBLqsArWfwCpKYGGg1bM4ghZwC9LiefAacoHgwAF7Scp2a",
  "key42": "2vA8B6hn49x1Z6ZzEsL8Ls1ETqVvT38eayVLSQNcRKXYhVrUMpDTv2MffzF4gNVoD9vkEYXB1aRVdwoHk4Xce28L",
  "key43": "4LEtek1uSiw2zxJHvk8deQkJGKij9L4nyrGVLU1JFpa7UZt397wPPL79VrfNNYvswLSPqWancLhR5LkfCGMtJev5",
  "key44": "fJyUhNgPFh8akWDkLTi9XXcL9S8UJFyLKmXXtwQgSDdRV2D14JcK6hETnqSaGmwryGvc8JDx3P8iABERfingzLV",
  "key45": "4kMgJmEkQQJD7JzcWf9Tva8Ys6sxNsD6QEUob9nHCpf7m4YMG9hMM2713LfTpZDiq7J6QSQtxACRDSKk93dcdrYZ",
  "key46": "4wfjzru8YuzRCRET1Xkc3V4mz3pKpsNP99FgDwZQZ2wgd6Zr4i9sGJBvYUeqpoA7PFgfT1obHZcquNqxMDLt7qC6",
  "key47": "27ySuoBYCLbTzevyJigsoVqTVqPAbnYuDb1ohvcF7pQtEy26qEsEt8DMv6ArzGHJq1y8qGhjBxyeEnNYZLmNzMZW",
  "key48": "5kQgsG9vuzyfEXSPk2EofXoQvykqFFtic9tXgm6KUDsq2C43fJEinmzDPMSWW6NfbMdhhEJsMdgXLEPoUDphZhoJ"
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
