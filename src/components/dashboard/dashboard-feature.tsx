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
    "2haGALbqUyDZ3rjhhFT6RVtxN2AndQ6n77axV2JoYFPYZbkNJYm9JkfEJE4cBc3wTYGxYZHvLEoG9r9uaGdyoXrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RveCTJtoh75DAxw3zs2kKrvf7nPXQ2RCwsTHc6T6oHDve9eBZakzZ9uHqtue1ZMkMLg6Xt9JKoPzS8JdiJce8aB",
  "key1": "2JqK1JZ7EoFPRtVyPxDihDvMtSKvjXQSHSpfEWfqRPgmDqPsgJwMsdppkxgRoxVaLSEatECfKHnftwava3V3F2do",
  "key2": "4HHJyGqPfVLnKHP6Xo6PMRvHnPjBe6BzxnwE4V4cXp8nVEKajs6C71AjfgArhF1DAsG1LLRYeE9Gfvq8ViLMvPsP",
  "key3": "4BRj4WVZKWakogbfmvSfpVpFatki6c7swvMKFWitwoYmdmVeC7i5TsyqZnPKVaKdtmGUky73FQrKZnZVpwqUHbdC",
  "key4": "3uGMFoUpAMnAgzRkHXVMSCg6obRehZ57Pqw7LD8vzuC3T1mNWKp36FuUWmZKJpqs9mRArm4TR8MsDRioHCJaojhg",
  "key5": "65j1Uqs7FGbvCXtZ26ZoESh39RPRqJSTqSRAhXa7B3dViUchmCh36ofLpfHe4joFfRq1H6kFKDeXZpKY61iocQAm",
  "key6": "4kfpNZCeV4pSVm5eZ4Xfkq9EK29aW8QYfCmaQnEDQQY8fbwYU57THAWVzvMbwq9Emk5SgukXE5bJ1h7NmVaZJSmW",
  "key7": "45nouM8w61w5s3kBFSB6VmDM7sRzBQYVnTncuWJ5o61eMpogn65wgC1tnEXhzr8GtPiHAwgcEKjWcu6Z1WFRg9jM",
  "key8": "3SKefb6Twx2hEKjvGyRDNAgzyfDmVJesFnZUTYfwThm9LkogFhUGeLmGNgiT4MFwa2M11Zzb847ZyQemjyTyw4WJ",
  "key9": "5PgRSyD34woLxqn8h8TMQdbgH8RRDUWmU9V13XvN1YSmWpE2JWhj5Aj35aJwdy9FLfK2wroKKunJRxEEp8b3ZoWd",
  "key10": "39Dc9bs9kXf4vRnidb6GTE88hKCzxtPwL2ACmCY9t5edEjy7M7n2U7RMC7vKU9H7fdgvtuSNMKZtSQAY1MyrYcrw",
  "key11": "5n26hpPg7aaWtt9hLkWjLj8xDcwSQgyAHt6vmfTv4PAgpaCRoVY56YHU9kooJCr4vUvY4HfbKnQ3wqMMavLDQRKC",
  "key12": "4kVXpmoKTkuPh4QTcwgDGfc9WyBJsbxPLBZzfZaTuazdiMcctKrWeU6CzWgtSD6p3n1DA93o67wJaJGCdRMfjQes",
  "key13": "2Btc8N3Auqg321PhM79F2ZAk4YGYafGdorNZMitBQCCggaigvNM7Pn7uRYqdwHmcuSRt2oqQisLKhcbRzub74pRV",
  "key14": "42MaeLTFZnCpXtov6SqUENxHFz5qmgtayA821fDLGYBkjYsGrtH3kuGpPy2RK7eKvzHYqyvQ2KfNo6r1kEvwkqKz",
  "key15": "4tUYmLts1yguPrAWeuFb76JUBfebdNUqL7iFnADViF7uxJMzAkfMum9Loscd2yLSsCCZEbjpmcZ1ePtAbeYsF6A9",
  "key16": "5w8zryk7kXNa1TZsKL3bXZzjmaYhsaL2nuxeBaj2KjBf1D7uVDRdvt24uCYAPxc4kmVfcqpTGmPGhhdGpgtpTwH2",
  "key17": "21GXjJyJCZF9N8Td9e88H9pwQuni1WGB7yji1X4hjxJkQRfzq8EodMYRQRKmk9QazHVhP73KaUpS6kG14wYHAjfe",
  "key18": "YnLtdnXjzPiD5U2rt3cGK3kdQNUA2vE71VcNm9RX5JE35TmvPf3NLsEo2CHYoM4eEmZ3iFn94cK33YgYsaFxRTS",
  "key19": "4wSpT6A5sifWGNe8t5FSBkEaVNcKst6VoCkmrqri4WbbcQPC3kk2Lxv91uHAC6nQ2YoomX7Xi69wqBexkZfgWirE",
  "key20": "5Nauqg69N8acBVkuYwKDYgzGRGUTxhWVSQecGjAdck7PkLoHQsUTywNBwY8h64nQFgSoz3WMYacjwGZA7Yewudz",
  "key21": "9hF9dmpeu4X9yypTTbVQK9mK5STNAFH8LnWBdFyACnk1H3UJmbeSpztEDSeNhA9FfR1AE43aNqLWYP1RFZrFrcX",
  "key22": "2o7YcALZgiUjg5r6Bpxaw8yc7Zs4eLfJYJPJdHBbSSz75JxzJHGdAb5C5nYx91UxdEgju6TcKBb7gmuc1rEx2yxS",
  "key23": "3HwnBa874KJzHup3oe57YKAWqso6j5kwVQXKdemXxq29T8KLTxYHwhGuoVXE6QAx2nd9fRqPUL9121c1zNTmDMmb",
  "key24": "58dKHKzjsEYfEHPmLSuiKF6jXCFbdB41VFkiShgDKcpdZEGFR6CSTqoFKoChKTzGMkQCjsVxbjW8jLGCTvHYceZB",
  "key25": "49PtfcJDoFqvYgre4Q824GYSAtAvNQFfqyGwk3fC2QR3XSr2PBNjQoHH2XCkmYenkKpcEBsiWysRgDPrtQrHYth",
  "key26": "5eeXyyq1gwz9gJCdcj1NZb7gNmR63XCL1feknTinsCSk7Y5kCJZUa4BFqJJ2KdtyFxbKv5jNzfzAAiE224qFHu9s",
  "key27": "3orNdgUpv9sBovnqJyc4TGaRDQLzkGV2ExptLy44vA1iXmxV3uz5GEfCNqU8fnr2Ww9amwawiwgBnFjPSvHn8sTm",
  "key28": "5qo7ibguVAcS9rDpE7drBMj52Hnjpa3rbxAPY5zJBewZKxBidQPSUkH1wL1CNrPgGvGrZ5uR2KfxTZroPB7isGKa",
  "key29": "5yN8toYVgB1ziBPCxf4jwA3bcQKe9PsZTryEJj6NqsuvQhnmEg4bGCYjMUnkXWDyReVCPoV6AjDKDRkJSEpYG7VT",
  "key30": "4ybDyAN7xHFepm3JHbSgxMLuy7H1okfzSViHNZvtkaEzuvMcVMyexqZkY28XvTKhGqdGZ9xJvVUqPi4q6DRen9RB",
  "key31": "3WU8TrVXE6HoUnq1gxA9wXYds5tJWh2FBmQSjH534ECwLmnY2ve3gwgkdatMH8HMF8VDfhAH4Zo4BSHsm1vmCNV5",
  "key32": "Xudo6eEt5NNU9Ht5HjCaCRbRpsBFsFCDYVeK3Z5of8mef6eqZkFQGcMJiMxCGpwR3bzUSDVjXZLpErrgo6BUCEK",
  "key33": "3qkF68rYJNDMd6NYpAPocJ2izWzEowDebv4PuCvczuehtT695NepZgKretdTVc146CKetUQzLQ7xpPUpgjiJKGDt",
  "key34": "3ZPMGkETKZMkYckX5UcHyewNQ8PPzMFkEuY4dWRLaAijHyzsHZ1ek4kMsP9ZEdWe1vKDpNYsVQrvUZmmqTNfZwpQ",
  "key35": "3KvoKDJghBQpEisBHu47nkojuECLVZHZUAj4Ubt4onQEwsvV4aQz3y7Wr58NWvDqZ499RwV9dMmfW7F8B8eYNUu",
  "key36": "5qeCKCCxqRuNWP5r6D9GAJMfb7kkrugno3TXM51GwQUcYgNbYCQEC7cyUCAMuQrxMAXHWqPgsYFfJaRapEerA6a5",
  "key37": "4b5iTVF5zQ4ghQr7tL55iTdKgANwqjfPhVXh5a3cs2RzxKzNXDrGVcLfirv32U46CkQcfbYT36v8ZZR1dgXKpXup",
  "key38": "2fyjfc83uJqUaTWNRA1ceJqPTHQKdvprWhq7UAuj77zcjjB1APZjWaCfchgMPvaxDFiqTgYZ4RtP9idayfpbUjZE",
  "key39": "54gv2BgKq7DGHR4TRn6rvizcBh4ELLt1maLzzuFDSpW4do2MKxoWuv1E5vK4SJqMkizqV8npcNhmKiqTdTa7JWM9",
  "key40": "3sSHRjEvsjD2TzjKG78LV5tz218i3tLhGPoc1Vmv6CfTsH195WJHHpd934pg6Mws7yBkHZRfxu4hQ1b9HdfdjSVg",
  "key41": "33CpxBdXLHFXaF2UcQrFbpq512T3h4CSGVD35adKdBG4xpcfxNTssoQJ21mviwFbm4jQwNzGoiHPkmSzdRriaZuz",
  "key42": "5gyFFcnM8Yfp5uFqQn8eyAeSKWKLgvzkMRB8n36dRBgp9un6CaCmrxop2TW6sqP8Ubo6EsiPjrCKTjYWNB3xtmV7",
  "key43": "3S6eUvWQx9cdMiQezxoGKCR1JtmABrcJS6Pf68CBzyDMsQA4aoUnXdQXra253nc3KtoLecBFCKwMMrigMcHYHbbK",
  "key44": "35aKn6gicz1dVGkqByno6EEcEB5KfLo6nqSxNs3AaZJwJb7QvcbxDmXgHHeZZL3xYNnxPe3h2Qz4hEfDg69yfe55",
  "key45": "4T2cTfJn5geDfQHnA5DiCvHpTwRwVTL67ZsibwdcGEsuLposjkaUGphRfG5WtnzUMHU1263nXMqEkyZqtDXBFyYz",
  "key46": "4tWKJxm2go35ifzeaatKcvhtmvSftWLjmvAemURbZdShJDFrT45wt74U9wfPHEQUumEpkFjfrrsqrSTip2jsDuVe",
  "key47": "591AXwHQDw7Utx3CN8Emuh3BHJ7G5bcWc5tfW7vnRJ9G9Hp3sDPXWGFcnRnvMVgiZkm165GPxmfJs6UUV9jRxSYV",
  "key48": "4YGGyuWkbsf9uKA8dpT5swFd8fHQAnrQQoD8SnNJUFrsRos9yvs7npaJ7um27BbTzEQ4gGcYAtugk1o1dpU9hcT1",
  "key49": "4SXXnga9PkrFYfDsGApoExMG5NM69BJ5LavePPRuSLjEnikcQY5rx73bppCGwuXpp8V41iBi69pBicLRnw8rSkd9"
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
