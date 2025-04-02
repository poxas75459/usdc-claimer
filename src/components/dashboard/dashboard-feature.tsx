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
    "s7otULfscsBtqXDZ92CP3awoHXHr4keQJJ7eJqoTXkFEB5H5hRwHJUpAyPhuYqtf25yMCx26dceBixWU8SNsdA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rsHrSwitqBv74rVW1EV8HmG6KMCKvDeCPwxDKR7h6BVKFwjgytB7qypjyc7cvz2NJNmMyo1N1fQQZf4Trt3VyHk",
  "key1": "dtHdnnsBEmRkYmtT8DiZkfjtdHeop2WjmqY7LPrdmm6BbhNPLb7Cig5dL1Cuegc9UyMJ2Cnvr4s5dTuNCMrfwbN",
  "key2": "4Zf9Kacn3bDyAZ8q3Xt9FTHgJiDGNfVhQa6KxWEuxvVh3Xene3T9EjUyGJnX1T7SeGZJZ4YXUnSHbUMfsyQsSRH6",
  "key3": "3dipCKw3iubgaeaCH2LaExazVY1SGXo9gSPwaByPKUd5ikXnez19Dnne4AWTFBYMPkDstqGUvkiTwthnyof3tHit",
  "key4": "63gdstkosDW7Jcaped4t7QJC5eQAfyuMcUi5gMU7iNzrv8BtDdLPApbDd6mGm2njZALwotHBUu6QdVerNHFoP6ci",
  "key5": "31GamGanCEf4rorzWjmhEjXWGsPL7y4GgDsN9n4f5LmPKxiZS5Bq96HrMSmKdy8JY5NbkAkbtHPzahjwSbWQ2YvY",
  "key6": "5n3moTkoHqpRZYnGTnjGsYunzhW14wMu7aCttwr1U39z5SFafQbiDG6KoadXVubrDVCgT3f2bb5rQLGaoyuoWuAT",
  "key7": "45ihoidGALp2Nd7w4MfcpuAH7fcMLE2n1NWcbJnRxqf2ghfLSfKBshXusUWVbVnb2KkMP94zCSLYRxZkDMxzN2mR",
  "key8": "3yJNHchAgJCBHrzgtCxHiL8HuJjPsXrzzv239yEhy84AiqGLXVeeT5ZCeYJrWdxSVTy7x1JYfT7313rbj5FMCXWR",
  "key9": "pRZnviuAoE9RKQTP7wwKdX5fHrTxYTzinckM9H8LXRkvNFkioe6m7tCb1kxX6oRdzMPsyJqkATmmtAYanKQSLqg",
  "key10": "MTwAA4gfhT1XANZXGTMFhArCgs8g33Jpar6Mw61PgwcrXGWQpgtNynim51yFj39jzG4yFDMiAHepymwoXa815ii",
  "key11": "3qSVQgJ8ojBafBLFwrJ8hVEdTjaSiK4cuHdNZTeX5EPsH1p2iRBDUTe7MtiLosh8f9uW6o7Wy8nyuvbRGSHu5vaY",
  "key12": "3RyHugLGLDHAHkqwutHmXvKBBbuy4hh8f2FD9oc6wPwkBXhLriGUWWRzX1JQpwpPJMjAEwKcVT75yfGMSbuxLWsi",
  "key13": "36u3RB36LjMwZJewCeHyKiQirPSeTzw2G4t1TtrvqhYprPbhZDt9H3kXydkD5WrkeUqoJzcivmWhRv89qWGvRKck",
  "key14": "57WacEn8wmgDu1toV6gGiDa5f3EXHPnpHcKEi1mgZ3E2TEqk3x8B9C4A2tgLnUZVzt3V2o7LJMU9nUD3widxAQFk",
  "key15": "vQivNCnCidJk4gFqJYmkVSAQjaTMdh4zaK9DBX8NiB55RbAe9RV1U8sdmhY49AVYL2ckEQadUMTGETFZoG8g3Jd",
  "key16": "vHeUdKa15SMakuzr7woC9To5k8hVmm9bXMHTAbnoRxfDqQLYkRGkynU2mn5MvjC3k9qtyBt7z6TQiFTaWaKuze6",
  "key17": "3V2iDbsQw7mArr62YwBgeocEDRKoeor6AASXKwJd9AJZwpf7maCYiwPeUgbAzHxhbL2LgBaiLCVtCBWb15ieo5V5",
  "key18": "229NniBzamc7fJCJ94HU9N3GEj789EHmcq8T8i7pCLUtAdKepbLxvK5DJ3FnVaJ8CbMLNr2R2z2WKWfkUGThP8qf",
  "key19": "2emyLXF1Gs8MTQ1bmvnusa4gwd2XiuGgCZsr65TPxAzWTeixZFVfHmApS9o3CjTigb1upUh2wYmdcACsRchLAyBR",
  "key20": "2YdKsa4iaZSaeK9eoZS81UYd5FCQJb1zV7R7HVPxcBWCB6eN5jdnGnMqWQTwQVKCFptckpobj4qha2vbwpipWLeP",
  "key21": "3cdj7zWEtDekUMJcju4G51NUa8vAFG9gVgH2ZoJks4x5Gnu2EhEm9s43YG95YBf9MPzgSdfpgycj34hXrYCkUTX8",
  "key22": "GLrdKv1LrMxBDzx4A6Pag8QVUA62aqxK5LuFtctxB5k8zRZ9hRumen5s5S79opuAo2f71o4td1P8wYGvckHvvNg",
  "key23": "2SUhYuGfLKtjYZdqvpxBwXreLybG1M4fLLfi7moJhL15sPY9yfzR53dLyJKzEFcRZDv6279Qtk2xU3ai4zeEGNW4",
  "key24": "4qjkAZmjHFViJDgJ75fqq5u9wT5928Lj7CG6BHUXHiFLM46wBnYAMUcAepH4hzkm9jxhxzxAXKPkEcDYsL8gPi4f",
  "key25": "4bRuzizdVT5x4cH9vQdxAfoVydqamgLKN4FQfZQzKACdLonVn7UQJQ39qUXmY5ZEQwvdLjTPqUrJcb9kRFXo5iJm",
  "key26": "39pcDsQdJbDFkGam3xunTKwCxwGqNW2Xm5gqAjmjRauh1VsVUYpdv8HfsMYAwfeCwJBBZAVr6CaoKCQaA958F5A5",
  "key27": "3qtkQ3Roo9dzGLKUoPnSDiy6EN9hDuKRdzjWCwdpjeJWMXKbbEiRuY8VF57VNojJdEGs86g1GyA4hM1PCTPfAY7L",
  "key28": "3DLhsbiWpW6vS9DrQKo6cUfgj4StqJJCTPvXvmaWg2BmUKdfr37Q9MKQU8HoDm8AAppbPPQGm6LFYtoPRVBar1fc",
  "key29": "UUCEZqo8qDTjHjMJZPPcWuwyzFxXC1PU2mLYvscqsepURFog3Jg9GYNVtX8rdNjcizBKPjVcvDzxE7rdAztc2hf",
  "key30": "5chpD2yPfFbgHpM8vA1TzywjnfiFZ1oEi9J6APbWZTPGVjUoTEUW4TM6cx2Kwh3bBjf57JTYjGVSivtBkRg8UkQd",
  "key31": "536s1yzPz9f2NRSgQgwrJL1vVTUPWYjvYp2XWtDPQB4UPCvPZ8JLuRNiZJMguv8Yf7uEm7sGoLnfem5xfHRwBYrk",
  "key32": "2JK2QrMEjgyD2KsUdmaof837mw2VfoNhr1LCJdYudMC7y2qNFiXgV2za96CHZ5vdVgbYY5io26y8W3EkCbTQxCCr",
  "key33": "4SrgB8cPoVP2HL1tJZJjNpq6zkZjJwbB6p3hjuuJaE58SmfuuBYQrSSVdsPhvK5MnFYjqBH4dv53zoC39a5x2tMo",
  "key34": "3ocGjXZrtHDEo9DGo9H8CwiNTscms8HdTJTMH3jrneQjzt8b24ugAAYYpoNJeF8UVNhLnoBgWmYcGk9siRxfiRbh",
  "key35": "2QsUaQZiP96MHHL9y3jZ9fC63phpCCF1bKmaRCPiFLkdEpEvaRkoLRxQ1VYhWMWL4Za5TMdRKP14sSbzeF55xBeP",
  "key36": "4RtBrxFvSNV61HriPHmoWbUb6c221AtsccjNSYz1n19AAuAjR6RVeUNkM8WxHKvc9W2WsJ8awfi2fF1pykYfw5qq",
  "key37": "giSMJptASFBp8JapgVqqhwi8d3wgUkTbPw9PmfSmwfyUi7rZwLaV4hgz1o4J2D2UcZGGpxQU8svMtvemBddLmin",
  "key38": "3kCg2H6Fc779AE5J9pNaaUbByXZm2cYLRGrfXcFPoePZWuEMj6yVDhv53W1QuX86ZT1QSioXKdSSKKbAU8iwa7AG",
  "key39": "2tXpvjww1WHPMyNxjRBBP9NbJ6u18tjSGNttiHzkPqDYUePbkZWKJHw2sV9qYBmrYK5HKcfPTBUsauu8Skjagafo",
  "key40": "2PVgU1e8bDHZp3AoJqmEokZVZoTMdDCntodcBjDwQVLkK44NYDXT3HnfwVo6X2WFN6PBhm5KgiixxgijtHrrrpxp",
  "key41": "cvDxannZ7a168oSJVaL3cvXFgMtpT5VkQjEr2qsm4igUkfN5wnZjf1AmZ3vAYSKXBYSfJCYjbYzMTX8bNPDPyU6",
  "key42": "4Uqwm8D63pGpafcuobw5WtXWBGntiViKr99BJRFQvvvboV6B1d8dgLoJ767DKnfVc8g4qpGSRCuiWskgLW5ZdgDP",
  "key43": "3M8SPcyKo4cEK44coqJZRDKY4B3DuEf6wXEisGopWCLU3W52ubgtyoTbgUZuzkMTRmRefmXwqaXeiC8PLjv2nVCT",
  "key44": "5Pu5k5Bo577fJSn1Ky7yA15wdL7bCcvuG9inSeYYpUSjK4cRdGRJZopQBbTiRpCLaJr9rQuvopPuCRjmiWJD5KyZ",
  "key45": "3HHADkEAvhYy5ruZNeXdsPS27kLYjQxEVJhbfGcaBNptB6TuZmu7MdM5ozEaA9ooZC9nQ9ZGtmoaGXbzMxgRNjMg"
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
