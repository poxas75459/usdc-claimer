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
    "2zuYSz47iVNxcNpvw82F6tNWnjdEXMtQdNJZ91ab5hhNBhxsWzAARNZ1LbJZjkVBrUfFUgvaYkah5Dz32LSgM7w9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JjaoFqP1hk1Ufc5xREmgT99qbfSc6uPUnogJ8vAkx81M5PyrmUQKD6oForFyAa84Qaxz1i4DVaB47tWCR8Zo4vz",
  "key1": "2PbULtRM3ZdcZBxhFujmf8nqAdCULnXU7LgoLBaj9xenp3vEYjZuLzj3rtZiQ3T3gkFkHNXDzzrMNM9osRCsj2UT",
  "key2": "CutnG1x5FZpgxcMCsnoqMrv4vWVHUroAsiQ14vHibcC3kCmkL1UeZTKPc3tSYVnS6Xu49itTKnG9MBQbAmQcwq2",
  "key3": "4kmJLN15PbM5mCnj5fY6kYjriHKBTSoUNQS4oB9pycWRarH56HyR7vEbosNEaDa8wTNyNzp2FP4Ji1VADwMR965C",
  "key4": "5Lk6fQDbtP2eDwbHkAXVezWbceznLtuCJfo2fmUzUU3LXxAzMvCkMaiyisxZUHTAQe2TjutWEP5qyXnxgGgUf6r5",
  "key5": "5fQEuzit5HyYPu7q5eYVVDkhoG567Nc3gvXtDp1aJTYWtLvRFw411LudkmDGwLJZ1iRM7txKh9sCJeGnvwq6FVfi",
  "key6": "5orLjZKjjvEeCWHkaeJrEBUhTsty67WRetV2Q4YTbP3dzXe5wB2nYugwziqbydhCjHWtHpUXnPwgQFGVwfAJwRZ1",
  "key7": "5efN8ghALifpYL1o6nPK2SXkn7dac4SiKmLhreziuhREsFmpArm235KxHKmdL2aFVy9gm2Ko8tceDPkmcwRkYWcM",
  "key8": "41Vi4VjzqVj9iNBoaZUY8KUXXWJLkerkity18MX5ErL5e3vyLSWSae43Rr3sqEREGyTEeX6eGWXJm9Zs6i6DHvCY",
  "key9": "vtQygejKpRVwsXiCas4reV6VGE41xsbtEkHKdyXBEDSuBJyrYi6Lw25M9CTWGz9dYkJpPzX7k6T2PAC54K24B15",
  "key10": "2p6mnP1PKojSj2v7EkLquZkVQQFxaqgpbPjfwp3ow8pgo9cgMvDEQgVg72Xygja3j33gNTJSDCB4B9fSCTMoU4wH",
  "key11": "3PjtPjyP3crHsWmMnLD3KUt6CtfSXf3P1RoQPZVijTure5FAAUhMaJYUXCinRhbHc4h251C8riVaRFT2KhBV8Uqb",
  "key12": "4YetXFmmfCpvJYCirEEV6ZvoBPRCjPfVS5BfGEoRhHhB9pdMyg8Pvq4TrYjSdn5a4wf1kY6E4S3tb3LzBGRFiTPk",
  "key13": "E3Jvf6SQEUmQTz5FhR7DxDAxEzKLUpoQqjYajYUxtTZvngX9PpSW2UBQg94i3gis7KWvThgZePXopoGkCebUK37",
  "key14": "5uQHuT7jkHtvLDkGc9B7GedvkMDHcJMzeNAu2WzTVMvVRxzMLf72bFwkHHxfto5KDcZt5bfmyhHUJpFjCwR9RHJ3",
  "key15": "2LmPxQf8dhzEE5f1k2vPFJzdgGgiQR57WzE48vbz3BpeE9VmCx7NRPaar43qW6GPX81zfMXh2HCQSuy9KouDkHyZ",
  "key16": "2JE5ZAPBKm7rK8aQS7Kb77kWY2CGuLPs52yYxnMbaehmsEshQt5N6yBKJ29xqrMGPSEzA2vFsqjPKq5eo3c1SMZ9",
  "key17": "4ho5dWgwWneYnCbUoxBzrNSXjuFhoSZqVXHR4vF3JD9Vm4uqdhoFReu9Ybo58kHHpTuNakTto5kWgG67xYKWSwVQ",
  "key18": "5KoKUXoUZSGEeZ2W8z5E5iBMdudk5N2Fa7h9DDpuSyAr3YJEKzqhxyjz8fXXnF6QcAa2hTeVC4oFwkz4zGdZ8ykE",
  "key19": "5FeehCPbvnoKhWw1ZDbvRKscj6PK6FbqeoajRFkKrzmFk1xe1qEU3jYgy2JRRdTXw4Pk2g15Fkrq9ddsaxSM5vnm",
  "key20": "uBxyHMgnNSfk3GEg73XwYiu8H8zYXwr2qU4x1xJZY2KwQUukdYJC3GG6qa2e8REB5uMJ8EcADAj9Ddbx1Gr3MF7",
  "key21": "D28s3X19XxXF54P16wcZeeiQGnLPbym1NyvGyVJmTwcFhB5RHbG88RvcaUDeCLEFtFftSVhBYvuJPCmLXowdNyS",
  "key22": "3KKPtwoxP2hJTzJ8nvg5jakJVnKbs9X1UvvaWXr1ufHBrXZE258EDdVmpHhMx3JqhZzFnTzR1FfUWgXW2M77XvGj",
  "key23": "3QVTrCfhh29v9htZkSpjuqGGcFEagDdRH9z5SaLwZKaPUS1B7kjhzCpjjJN5gpjAWz313sYEECNTb3wLqbJkc9yJ",
  "key24": "Xzw6f5Mhs4jL5penturTSnSc6yyk9zXbE4Gh8dpCfDh4wiG5c4L7dk1rkaPJWmjXysXHRZxX6gW36tXDRPXnvLi",
  "key25": "4sZ7XARZVKKfQpkXvUaYjM7jf2Uv2B1G6Hagqw78WUGkzbMYemQCR3ghbq8xeJ1WoSPzf1JaGQmd5H8dUppGWyxT",
  "key26": "3WB6rsEG4cDfd3585cfdHasfKhZ5U1HxvcC7vTfhU3rRA3hGtCAdF7YyECRq2CNpXdGWWy66Vn3qurAcAMT2aqt",
  "key27": "5wa9tP9VvCiZtyStfxnk4BFCS6PoY77qcNLpnQr9DKEAn8nzEsFxQX63SV1sDJMjfjWeFmDGncMxQyT1bvqSZJy",
  "key28": "3qo5MtSPcQZziux9avF37yTafrJYk4XTDjUiTugNYTAnGCHebntjCEVx7Ms4DyEsGi2smsHjC9PL21vKWEShfrw",
  "key29": "5foFy5Ths4KAvSZohSCwHejq29fQQWBFkWN3Pw9WuwKCTZNVsqkC4eKhtkKLtmx5m8SwmypQfsCWhN1MVVz5ZBpV",
  "key30": "qYMka2a4jzHZa3mW7NMVZPMcP1JNuGYtdZuMFqdtGwG5BJntzqPKaHBvc7CTzzxojnhvva4oZoR9qB4LSFMbN1h",
  "key31": "4wQUsFywMvy5QhnjSvCzj17CmyXxstk22dPJkj3Tiir6HNHXTJDsViCRRB4hP4njSNRHzhnQqB8RWRLmKN1SXJaC",
  "key32": "cBsYR4ZnbAAApswLQWbwm5UrVRY84YhYqTtz6peZtSipNVSttHoqCoHVN2YbSaZSZXnHMNiM4hp582Hevmzk4pS",
  "key33": "4XWJ1RrEtWUSsh3eYXX9VSSZ4dhdbXSN7PWrk9giebdxtCvtkzWpgHxmGeqcx1DZqf6fuUdKL3cwSTNLeFejh9q4"
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
