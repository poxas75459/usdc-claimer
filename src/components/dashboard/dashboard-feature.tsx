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
    "2SvkonVYqFHsAP4RokpzVdPEdFsoGAMbfvyyVacvVSWji2w8KbrVJCewEyJNYTmx6Cb5y16jeQQha67J6iJ4EbLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NVTu9p6cX5oD9etKuQinMGLeWwJnwrvaARorktmaJsMnaNkfuhp5fJ3i1b66ZvPmV2zwzVxrrau28uNQpMLHgcu",
  "key1": "V4n9R53DxY8EhnLZ9UhURDbwcRtQPQidEbotNjg1vygz9noFAQ4rZjrTqke4AJzSeCjdAZ6vCzCWKRMNnsvUu3T",
  "key2": "4zL5nLe1oV4CkQ2Qcr5hLmC1HUadWrb5N7vHzM1aZrFynAzLNQikKzS7GJRxUQZc6KNQ3g2ydmGznXBbASfB4Dk9",
  "key3": "4Sd2ntQasdh1u9euiHahKh6GpUSCfQ5VztammT7cHjNhoayXdT1WGVDhQLcttXbeZwUKsjWLwMFwkf4Jx8qagbja",
  "key4": "7uMNT26BUPxSF88AkJdihnVwU6uVBpVQYhZGBkvEcEPSZ28NXmD6baLwn4yCwbWS2RZbPJGKCaYnHdg9QwFbJG5",
  "key5": "5UhkckWzb1ewD9eJbmxtpzDMchtTxxtu9Fr9iU3rbhzoeZiNTnZj7PetEa54CEyjr8CCsbT5DjXxW2UUSj13RGBN",
  "key6": "48duSVN9CpurMQdZvfMEBFLFsk2b9kRnCBUYBtnGGUsEX29FMZ7sC3mKGWa6yF8C39LVAFmt2aFGzvVnPoxCbPhX",
  "key7": "2mUHb3AVexHCuaYkAUyaZyTNKtDABAvbJLF3Xa2mpFcSrfycAfz13ZdGDTRt1gF6gjiThk4vd4FdBRNUrS5g5MPN",
  "key8": "5ngt7F1Ghp2Z9xDJ6YM7hStCs7QEAsMmF53gFJAmHQi4gHraEA9v4PKPkXQdt2CtTTXFdvXviGU1oYZTC7cPA5YN",
  "key9": "iFq7TM6t2gGJcG8ncZSRSDeU5qvx5isUTZBH7XEYtDbSYBQC6qHp9kVi5VyhJT7H1hKTDHLAa79D1L2xxDjM9mx",
  "key10": "62jLbjD5y2PsyDRB5a9SYLaovW6LopYwehW5FbdJWngmfUCN2etUKXtsnkzDd64v5ao6LoKuKsmVgujajQpPhvb7",
  "key11": "4Mh1ehHW63Ao9sNB6jSDiDNJ4dLXiVEwpsJspMJxzyvuzpTKXqygrDgv3C8eDFCheG6GZTsLBXv3gsAxvE6UrdR5",
  "key12": "M8K4mjzSeqcvbsbVstyUYMwBNqiRwc7tp9bGjbCnBAfGAhCJ6pj2MKnK8WYPJfvDUs3ZphcE3d5aG6gQBkHBmC6",
  "key13": "4UgeZbg2o29UpfJrMsMyLvPWAficR3jpYf7VFmu42wXvzzLPMZwRVpE5SfNLLqL5qXnsLWCEen8n2w1uaDSHpA95",
  "key14": "5SsxXja7qEnoUpRZ144vwmisrTSdt7TvM6ebygzuTjzJYRwtS2Y14x8b9uZP2i9fqZghXyhzC4qUSxnTNLw5JTcp",
  "key15": "3t5TM6inL9qPfRd8UvnKdyYtbynGbqrRzYnEzFN7S3QmSdag7Tn9TXVRpskaxJpxsrjqWedHV8aWttYr3gWTFfsJ",
  "key16": "5Bv5noix54KEyjPaVJToqDgP4xMZGgvKyb859vRrKgo1snvczce9Ad5mrdqNXar3CwgRKTL5guuHQhRrEkWJSEHi",
  "key17": "3r8sDJbGkFz5S6wa66a7mgtQC8dn9dEHBncpjv99De4ZwfRygdsHuS9cqAJJFFjYes4ZBnptR2c4mwnuDd6D7BpF",
  "key18": "5QT4RTzPrEH4ZgqqPC2dm4dXvqod6PEDyXN3bN7QAteRp9355EQKvCELRCcs7AXD4ZkatfcbdZiZCrnyPwLdCBgn",
  "key19": "4DatByMsc71RP2UYYGzG6emBAVxxag8MSBKsC8H8Bf5iu5kiRKgZuKGpU9LWvn4QxZzq699a4o9bxemYSeGXQAU7",
  "key20": "4K61CFrKgouX5dpLCJ8UxU4gQcJZqYL4szohmNs7Aio3eSPAobf3tpQGDb2FWC6FZ9aRo7KrR1vg53qhcEUgrQJj",
  "key21": "3RALnQUew7XMyjPKdctiSyeC2nQze1FbgKmd9tbJF2VmmMSvKmhKrT2HPu6NnwDqSvuQCuR5oi8UpM8X9iQorefP",
  "key22": "4sN7Nx4BgQhoxk3iqDqRNhKy9D8PwdhEFsSAuuKd3K94NS8YgTNXVGVyr3JEPdJpKiH2zAU8HQUomMhEwNXQKyzD",
  "key23": "29jehr6PyWM5jVsLHv2bMhtq8mJL7XB7JB4MSniX4D7xndTkp6wdzZKpFsxg3vzMcyB3keeKJApDKGtUVWePdPk5",
  "key24": "574udMY4jCK47qmtMojtFfFdsJ4FfVHiUvhgVqWqr3vVLEYxKqC2aqhyQhR8K32jDnr8xoFSEyts7HjWJGwc6zLR",
  "key25": "9qMCPKwQXoZhi7KruCSENHbpdkLKGZ8ksC5GaAfBWAzmzqgH1nBWkqbsEQwsLJjPDs3E8eHpQqwsKUisFLUiR4a",
  "key26": "3ZYLsQiSwYwhmAmFGfbgA1w9o4pe4HSS8p9ESV5DVcSMvzDa5x2MHA3reDv8gQpAZwKA2fUCe8NwM1EeFmwFRDMH",
  "key27": "5V95PA389vTkuGeqSWNUHQmCs68wCLfMYLLZKiHXTAknUhkphpJkuF3G2X5oXiGskvjj8Zj2wYjbupjEyHXqKT7L",
  "key28": "3kpYCmJL6d4QrKf762NrmKkkAu6dMsYUFb4CwjswFR8wxkLPEGiNjFYxxwXS9Nz6NbUoVLBSuKuyDT66mU72v5gc",
  "key29": "2URCGasAyjf4P9mjtzaN3edLympxe6AucfL2Nz7JVMhgDkU37YKzqchXsS8a76DXWcwwoHTMWNgMQRU8LetABPLX",
  "key30": "4nVZbzG6xyibofjmz9fcA5MH9x1weYbqJVrUMgKE95RQFekcvkj3C4vHECRNHAfRNaY5jW4NKKtEWTjxRFGaWL3E",
  "key31": "3tPYir3yn1446MAQSuuVx5e9osaAWWMzKtaGni27YAWwpNQfoRN5YDRJ2rQZX5DAy7ffdAb3A5RH7bHeyJduCdpy",
  "key32": "Jmmby2Pvd3NxcXhaLctLtbXziZaVusPr9sy3o2GmRoC6LXBARk9HGuhVdegzkPCGnfvabjc6nzKCsVSgjaTprXS",
  "key33": "1FTHb1MF3uCpWJar3z6WR9jBmPiLHDotpWkg5WvpvuhPMcHjcAqNUqkG9t9JPA4Yi4xXuVH5xAsRNs7G5eZ7DXf",
  "key34": "53WGQR79xTzRsCgGzidH5Yz4kpBzs79CvrVDmuyfnu9oTbKhhSmRH7mdg8iETDVhn9EgQnKwt1aj5dBXRvnwzn3d",
  "key35": "5nHm2YQtoGx8Y6GhzgvYBDYMd2uEmtEfk4wmjezdZmzfmk77gHtzevAu6b9666h747tEw1YeAcqdd6AZCpdgkzyF"
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
