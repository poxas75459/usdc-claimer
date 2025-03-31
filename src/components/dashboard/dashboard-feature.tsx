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
    "3TQTQ83wWYR8xxmSgRYj3eiW6ddV6kChR4Pbw9iyG2Zq9FdeFn17GgnNmYVK5KpbYcPaBsVCDFxjBgbatq51gzFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CKY1d3fJrcC2eQsdNfq9kvmgGAVt7HeWKyhxwhSb8VWt7W1qGQpKBRGMfqWqDf3hVEpAMeNkVRL68PLiaSKHuFp",
  "key1": "4GNqQDMwW3P3ZdwDHj3hwzsWT44MCyPA63bB7wANUDZwkkepxqQdZcq2Nco9qMq6BvNMcqHhSt2HQQSqbjhe9ucm",
  "key2": "2Mzoc7wxK2t1NTi8AaVMmpMgww3VBYZcGLhkbh1zXpU2JAb4KnhzkXWCuPiKrxE7RiftRfkKWpLdEZd6a8wnNzrt",
  "key3": "4eaSRh5GeSrpmFeaX6z9KbHcgV8w1TvMXJH1dsNPbw1zNNDLG93ma336eZtNhMirbyfTmR5a844CseRdvXLsP2ts",
  "key4": "2z8CvPa9NUtGmu1E7S223MacbkEBYZmneEvSabHhFvcRQ2i1anrDdnA6A9b12yiNkXorb4rHTs7y5fzt5mDRo18e",
  "key5": "2ixmdTnHRL89iZR2BCNWu2fcWnLaKSQdZzuqQsdagjvmShP4S1UW4KxTaZ6r1Yd2GSw7R91KCJZkQHSp6HuB6fCW",
  "key6": "4K68B95cy4jcaPhNHwr4eCZMk85NBDcVP1dMCDrt89prczeWpmEScTaFMGsStVKh96zieDGMbUbKmPvHYvjQXGK1",
  "key7": "2gc4nZsommGhe2EA48zBTYKgyp4ACbZqgQ9Y6S9m6zPEuGXKoHTBKRSz6qwAipTCSNUnTzCiv8haewJvr1ncDTyx",
  "key8": "2EQvx8HgFWwdsG5kh7Pfva2qT67QJPhXDLGaTUgu14wr4oRToF9zJLZsUWs82Fy4UW8BEC478B8sTRJrmpzMGf31",
  "key9": "44eXy9Ump4wXV1VzhFpTdMcx7r6H1cx5vQ8uEY921pA3wyBQVKg3u9GhpGeGnpUbok8AogdNfs23V6x5NNMLHaDp",
  "key10": "34MCB6wJdM9CiHZNGevdXs1frimDY5YRk7B5DGB3S4B5bYi4QeVmbq5MWKKPGux75R9u4ZxrSiskEZEM46VC9Deo",
  "key11": "58iXi4W9gi3irFxfQuN7mr6JV7DtGUMQ21JyLa2nwd64fxtvF6coQ23SrFrUx1Q3Xcz7Aguw9ok9KLJoBGuwnLAc",
  "key12": "3wNH3G9hEKvtm8WoNAKqHaxNrh4Dxb2oimuDXZhnF1p6k6RU8ecTtARMGFDRKyHmBKu6uG2BVtZPY9gMcHcwHW5q",
  "key13": "k4fTSW4yvbM2GW6ZgYBMDYXiKzss7onZf877w9oMQX8rp7ySudXtANpTomMr6Sitb5YVmwLpdSbDGXxacejbkcz",
  "key14": "k4uw1rGiRZriFib3yFr5CVHbT6HX2JYwVT6t63Nmo56kHZUiAYSuxJxE1QUXS8Tz2iErL3EkiXvYjLPm5TkeFPv",
  "key15": "2Ras9cwqR2tM1nYLa1wHuezVBdyygr2DVAjUVo1Agcjp1nZUynwXtcvKMV14NmidvrNvZBKUR4mhWmutWDUAeCR1",
  "key16": "3JtAgLNcb5uJYxMu5Hnp5MSUHckyYAG4V4EMYV4obiAFW58txLJ3X5CJtauQg7xnR2DYKCoSVmY4QeqbWyaWwbMU",
  "key17": "NWqDoY2xfMyHjzdzZa1ErqgeEcnrJCDzPGjCNDrCw8Q8rFygnw8MeV9zwAorq3y8cyXjDAy1mMrm7dkuMZXZERH",
  "key18": "TfswS1w51aahr5LkEZz827kQYzkbMJv7TdyERvXJ7ibUKsHoHhgLVPPCtTh6DZ9v41S8Mku31kP9n6iG8ZGtRjn",
  "key19": "5jNWKzE8eHi1yGsNXxhXaawtossbdtsFCWBWJF9D8rCkwmkYdoQzoCo9zXqm9LjbRuxHDZK5PkFxu1bvZQqNPtCR",
  "key20": "5VZ6yUAxjqvfLoNAQWUqbpR4RD3K8DVbSkUTGr5HecNtZ3HxtmEXLC7344UNXaWS9SExpGMq9tiYyyvftohJW4U8",
  "key21": "2LhN4jvotW1KbBMNZcrJDCykMTtM5vhDcN9FBW4Nt4Vbdgq18AKcXKhG3ZQEBeGukmFQgHPTpTZ5UXj5KsVqK2RT",
  "key22": "imXKxAiQtFbvfAxUH34JRFPrfoGQXqphFrKtxJcnMAWmHc63BKxfxDDUfyeg6Sr3MEd8oGuou868dVqrqCqezrS",
  "key23": "65Z5LBxHZbSJ8r4LQ8L57rtJR2bGH7BjH8MmRFqhS6WTSLE1LGjq5h2iy5cnhMj9YPnZgczv3cJLDghoLVfNf8pa",
  "key24": "26tmrqCQxRBFZxjiwkD4kiAoZTBQU4HpeXAXedXECrAChgSstGaQJMtoabst28yDhenGwPuNvrTCHFZHN5YvsLkW",
  "key25": "3ZpS9t2HX5eqBPfMVPJ7Zpyuvc98XgsnPa8XX2yTdGFrDA8bhyLqsB5vwdpzEb6C8MfU2qEZmCo4Vk4KYFP1urNR",
  "key26": "RfxkSQAUczRb7JLXkFKFKfMXDoWUyHWk4U9nhNSuVQQr7MAh4P1NA26PXg8uZ17dmrK6WdAXyPgvVRDWHfLWTFX",
  "key27": "3Nsstg4h6btvj55bnW3PUUg6Cvgnvpx83EVghFXgLAbKUZuv7fmKeTx2oKtPESVF1Zydr9cwdv6MGevZN5EKZGH7",
  "key28": "oj6oGpwPj3hPDM8vx38rkmSYEFRmE1KSeXEFr8D1Se9psZPLg3YCdKX9PJod98LwDtHaPP9YLWaHVJ1L7mViaa9",
  "key29": "2goMGGyPHTd8HqM2snQLmswpEFS5fmawn5hkGP25oYt3FsS6tZhuhWYfELjZ1S2xt3XegoyeBQH212F3bzyykZ9t"
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
