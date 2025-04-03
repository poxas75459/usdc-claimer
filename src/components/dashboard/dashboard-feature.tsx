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
    "5TmDQHWvh37i4vc13QRnjSChxgT47ZHiijRSL8xXRyZ9AqBM6wsFXkvEC6qcxmKVWZ5ZqdDXtwJnquY6uBmbLfeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KF7my1TyfRYEvWDD9TSXzeQwEqH6XsHCGrEW99mrtdZpnUVuFq6vCj7NZZBbipvPKGZb9PCy4SQH7sQp98jtPA9",
  "key1": "2N7A6y86YTLSCN7chN5kXCxezVgbxqBSGZfVUtNUneDWavPTDEz3U8UH69VpXt3uxGKQL9yoQNbesqsrgeKx47wU",
  "key2": "3p688fAzeQMwJYxdwtKSWQYciiQjDxZCuvtLKWmDqwx3A6SVCLuPhv4w8PBYMHpYX4sDbZpsPQ8kJwmtev2GnT49",
  "key3": "63pz86q9DSgCKvdMM6B6UcU2Ei1ADkUXPSY5rckuJ1YLWRQFVT9qPXwom8v5fvrA8rfWZ8ZdHSGdw8VfpGLc1Mtw",
  "key4": "T3rFzMExGcfqLinAAPjuMY7LvMUsaB2ifDqhEetoYt6fjhcqdgALERPuVjkAt37cGkwp1uBKNkboA3HtDr2GXc3",
  "key5": "o2ppZTSHzoCTAVe82oeFciyxTVpHZSxP9qdY5guRfF1vzohjk2ztwnWTjVWQSSqYC51RRudeZ6hC2f6JkgbLMXw",
  "key6": "3uoPNQ7P4uHjy92HfJ6wxbFFAYC6jQsJB9Fcb6rQANLbTPpmX6mk39S8G8WazzaqFfvusfQoZbyurXxwoFjSHTVc",
  "key7": "5kWD8DEkHFzw8a5SNmpdHamiEoh88E5uEyVdWao88rQYj8PTN6fszRGMy6WFnDMSEXRLz2pjp8vPh4w7xmtdfrg",
  "key8": "3EQAhELv2BPS26ndtNKfmkPcojXvREjPwC9ivtN1BM49J4RetURkJjHMexuMKAMk3rB3R5M8CuVxkEx4MkvcEPUJ",
  "key9": "4ese4iN4Vc6pXwrD3H2oJYQr33FW3RnyaZBoDVD1e6hd2NCdmkCWyFm1sbGdxhZFujnMf1mSAu7Ex7Ty2YEjFqRM",
  "key10": "2kSzwXKrL5CQEDUDhMFaQAy4dUFZvNskyLbUUC7h8cyRe6mCLcsCs1pkpVBjNd7sQUJ8qg1a48JwMU5fCJBHq1Jj",
  "key11": "4fYg7Psx9cH24M7FGx6rv6UDH4tyrPSPM7t6GUM6ZzeQsqtHfy17fRcNfoPT8jGwBtY4MjhFd3AZzgG5T5nv9DVp",
  "key12": "rKadwxHosqiFa8Rd8pt7D5jTLaNQJTqAwp1ZgWuFo7AWJcSNafwmq4gEnD9gXvT92psszWzDaWv9788z1Rkct6Q",
  "key13": "3TXbR2ccgKXHG6LgfJ4vqdXQzDBGNLcLDoHcHzyXkRVpVTRZiHhMdUHSiLPwpUWwhMqtbBdS2ZLmktcXJnUKKBRq",
  "key14": "3EYgfK9NEjA7zHyLeQRhJLiDx9NYPiUh3sN56FMi51T2rRn53FHM2NGcqp5mxGPHHYegJUp1Yb3iEZpkjRhCLzhz",
  "key15": "35wffwShheqDjwwcSfSbWj6UmUdtoX5jNoLac1zcoS3vYDaBSrLL5uadBr1oKU9DHhEwiZeopCevNXc2Lc1PQHaj",
  "key16": "4jmsBo7EjSdGQqbNykNSAF6TFw27xdxahJoQRsZWtgEyjyK5Fvm3gMQsbPCpSvUGbrLHRysUYTWP64t2eNN3XfDp",
  "key17": "3AfpPoZFjVpQoA3Ph9T5R7XU7GeNUifh64UjHgW1gaFMyK7fQTUoGuqTXcSurxN5nH82o14xFBG1ZCL1Vx1HHFbS",
  "key18": "5pJMERZGrvxd2qXk67dRWrSLJnzy2yhnEKFbv8YFaFu2j4xrTTp9eB3q69i377AMDoztumUQGLBCMTZ8v9s7nuqo",
  "key19": "5d7JaTSBHUbfJnuujfdZd87xzojF1dtT9PwuLtumGURP2NcLNDKEjSQtE6cTJjSShKLn6ANDjfCPwFMBxJy71vS7",
  "key20": "4V6C1HvL7eGm4yUNc4sZWMm7wTLKJgNuX1jdoT3GJBLHxXGPUTZvrceWffq7Eo6JPwssu2pfbqFyAZG3Lbw2qGNP",
  "key21": "28E8qDUeRKgscK3iF2QRMSHnXQot3qvwu154m14Rtt26JQMh6Qqy4UzgPfBFQmk56EVJJfhXv2MN68x4BqgoFJb9",
  "key22": "JRsKxFqoFg7HEBZuLCHivKLRwwYxnmmA98r5EhM6H7VpaTyVQo8dNMdtvw3C2Xzkddi8PjE6Rbn7SHHFoUKqk6K",
  "key23": "2h2pZZ1pVsX5sLDhvc3Ngc84JzeP4ZURjm22pn9sE9mKkumm14gVFbweSFwj7EUSbkxMoicJ7dv654Yszg7UHixB",
  "key24": "4fQEG8Fwyn3Cnnkvb1ngXHFccBz6TMVy9L21b1jTQGLC9Srzm7u57Z3spucRuvc1MjVrLf8WUoJTsvopfjSbiGfb",
  "key25": "3HMSo9Abt7ZjLdcE8uMpZ6e2hRRdodBz79omRNZC4mfxzKyXLRwEKByqdYu6XmyKyJLaGmur6QY4ZoB3dwak9oMu",
  "key26": "Ksiveeapo6asTMX6Jtnz9cvPZzTFmESesrgcBLaEqA9kvT7tdpJ6UFoQk3k9cYNjC9jKRUo6xEytQiXDxL7piNg",
  "key27": "jrLaqMARhVCwnsVhLGgr6YKDz5nsBkA4wuWPHrQ5uUasYXSSyPsrESbBtFMC8mxh5jUAPuz1wsGisARsHjCyTDj",
  "key28": "5CBWUTFfwL2ZBYaE7MSx2YaAfn7P4TX8nrp9REUEppwgZCBwRCAADsGtfSmgj4JqmXg2xfHcgdgNEx96XxLVCrmj",
  "key29": "2idEDa5RFzFnxugpbfwJYabDQSQLA9vBZnKxJ9PsLisWpnDQY261YrNhWj3hYPRfK1ENFDm1FMfKaAwWHrox2ga1",
  "key30": "55rnHHvwkELBYaPo4awzXc9qPq8MSaBp2WbTc8DHa3YT4xuVURbk4BdaD949aLQhdot2pVzWdJHj3Tpzebw663mo",
  "key31": "2PPb6J7LAdk1as7TCW5HDAXQaFxGknpgk1M3qFpknHVer9KNCkXf3R3cEmhR8rRBT1wV8S6Kr88nT3NWQ2aCscDW",
  "key32": "SZ5VLqWZRqbWy4vcWCNvY8FzyVf66MNJYa8SuARz6KPL3AiYbHELHbwZZJpt3ddLfSKzKZYsMfpxnvaR3Hzwqie",
  "key33": "4qVMV9jgunimMuz6pYvTEyRjP6f5rqZMFXbRxCEKPYpT4SqA2apVn4r9zVy86c8o3MPj254WjQnvgsjago8bwT4X",
  "key34": "4jyC9awHaNq55bjPRgDCXiiVkVTZVTpo6zVHrKZLeTTbNZa96bHsHohejeMtBqBuqNJwTQcn3eQt84HDqQ7GbHiX",
  "key35": "5fd8yA42D7CB8gqYa8zkVzstpU29SdEzPg1dkraqeGohsNWrYvoBAxqcBziwHBBCwjZXqzYDSZTGwk3G3zR4i97F",
  "key36": "46w2L3Km9zbyQvdZF2qJnF1c9QYDyJe2FKsrJNRsViiWH5umrS4XZyv2MxvgfR2EFxPrrhxuBmNg7pNJcLdfPUom",
  "key37": "3F5EVAim5bpucxzVJ3Zx9AAo7DPVK6ogxXvfZBNb6eAJxoPih9gK6DSxmTXESpogZdsup6RSfSc6Awm2Uh336q2f",
  "key38": "2HziHBXnA1ZVTZuQgewEQvJsTtz7ufiMJY8TeS36y4Xm98nSN87Z2BBAQmV48sopjF2MfWyU5TLeT5HZvbeumxV2",
  "key39": "2ihw3HhZQeacmqY8b2nZJTjeXWrNFDTdCLJ8ZvLvDF49MtYQ6GzNVpbQJ1XK8612JbXPEst5yu66AGF8AkQVFT4v"
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
