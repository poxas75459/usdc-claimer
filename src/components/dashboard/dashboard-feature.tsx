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
    "vrPD8Gxt9LbeTq5feabsqLTiKEAb8jV95hE8FVxFutowci2JgoPq1QJcMXbbdsw8NKjLhWLcKyvAZGh2wwxxW4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lxavx9EmEMejCFyYyT1ipdb1b7XXLADDxq4FLeDffUyFNcPvqSiZBKgJA4e2tpFBh5sFpg4itgGXMBaJpWGz55y",
  "key1": "3iC15NSVZFK4fm7V8obaddsjnjRihZQjPznLT7rD7oC8ihNCvVGeRACeZFtDppRVd6dBYZffHwV6qWPEcmTLaSnJ",
  "key2": "51qpW6S3tbd8L8psaFEamSYwBXUJUGauKee8jAFnCzTwoKe2ENU19tGAhxgnNwyC5FLRXhLqbEEBfSfxqMUR9xjZ",
  "key3": "2eyCuKaWKgivva7whuSbyXK5Ze652JeQepYQmi9uPgK94ZM8SCCfHpbsHnGgA31K3FHHWEvqxWAvYTLRXw2SNB3B",
  "key4": "5NNd3xbMCnbJUf8n3QR5GTVqGmq4bxQXaBFctJm9tbJd2tcssGN4GvY6EXeC8x4Wzpmx3sA5kGSrdWHacRpoVDjZ",
  "key5": "9SYDDE1ssaFrjbU3ZuRNBcUHCvSAs3aPE5xNNYSLbaEo5YSRgTbxCuDKxLGyHFKtfgYwok7DhAwurzAmqtzrDtw",
  "key6": "x8pXq6fT3mFfVt1zmpSsK6PKs9ZEqEv53AqaXFhB2U7bu3WyjSPX9HWjgt3pSt1aXeq9tapW4eHci8bFVBoyFWP",
  "key7": "3QnTxyEUY5tLBDU8Fa38T6JwzyaoGf4Z2T2vwhAA5gf3ZAsmtUsobfrRZivhxJj1mqzZ8G4a2ztiijqQye3XCia6",
  "key8": "21iZLxyRhSPBg4ov8EjY2RmSTursev1ZTbruNPAeH388XBcqoLnsQGaDq7GLnvkxjaCLuUj69bkKDAeHXsQCHuS3",
  "key9": "pwhE23LX7481oop7oUjQq31jChb86Xyoqo6ZV4qdhC8uQ4Q8vQXhPyxun4Xcz8DfQ5k6wuAf7pih2McXyz6Gv1C",
  "key10": "pzhZvfFxDJ1SjssWPU9z3GVicUrsbryTWnfa2HSSwdvFAYbJoP7TjfQS1A7U1Zb31p7tKeoV8kGwhVUv8QVpxyK",
  "key11": "ckZj1Ka8jEUHDm3LRR9xxz7fjUJhp2zEY8UQgudoHxihBx19WvmuyWpGSfa1Gf4BcxPJfAcNAEjiW4mxBMdgXqW",
  "key12": "29Fu4BrSJvpKEjabYgHjakuzdxzuZfvRaRCXM1gYwKVGuJTB2ytrQaZyXeisg1XqysmN9cNDcYJUXdrwzHLwYsqT",
  "key13": "3WgUk1QQBRG5y8Nv2xdh3vymyniHYncsfadBU3AvnLAaFEZ9kHcjEDDVmXs5jS4omxYaHShXbA64r5GWW7zSBBpY",
  "key14": "2FEoKVNh2dcB78U4NroZTFCC3pkfKumRCgpi86omD4h4ermqdYZeXwaXZMKBXhncDPdmKrNUxpqGg2JRnbb6xHm8",
  "key15": "3fWmNnfKtzs6yviFoCZ3jHLA833pLbUJSAF3F3tPsRooeudXD7WYDNiNApk4sArPg3dGJ8o5BTkwhjZtnkNCFw9S",
  "key16": "31Jyp95G4PQQPSSD4XQkpie64ZgQMqP42dAVQ4GwoBGc3BEPH94zcReaGtXg2xpBtr2aodSgEduxqsKwfzyEzH3G",
  "key17": "2UENifytizZbKecSgadjjaFvkuxPfKfQ7onJgBvcJF2NWDJyJTsD28A3BJMwSnh15xBNiUBmRqQn1es2k1smg5ht",
  "key18": "gJtTW3BYxN3XqYcDkof23KiCiEiPNTL83HdkPxRvreUcDpcM36c3PvbfLuVP7XPGjwXrbNZnUg2iStZUF83x5UY",
  "key19": "52rvdnxAsD2Eg78CG4Yg4CbwLMUCPpjsbQ5J3197ZD8DU5M695FVXwGvSou7gUfKuEcJeWWXdkfz4P2AR9aGcpUg",
  "key20": "4AkMRnn5Yugj3b3mFsKMdjW3wF1HVwqDrmqmBTYLw4eHnb86pEqzYXZ9wdWZVjP9VQHjUbdRRGiG1Qsm9wrkN4on",
  "key21": "4sk7x1a3KdsLeVP9KbhCxMz3WH9nYTJ2whBBQwRhnaZFciXb7Woxm5TEwNTpxAEQVPPxToCPcyY4dFg5jKzuMRy5",
  "key22": "52q6rBySH1sZMEK8zV4oFci1dTYNxz2jD7SErqY4YaE556NwYyu7nwE3PaqJ83gnsZc9kZyn8T24ncXR67pE1akQ",
  "key23": "5TXqZVYWdjqZHVmatHn79vGzxxC8xGwRZJiZJPPH4pjDf8EXiRRChfZX62WVri3BJWMfK2x6aSVKeJAiH2N2EaKt",
  "key24": "5QLCu9ew2KMEguHWLdQ9AN4NvxjFfHqtsZuGNpWXDzniwysbN8UNGUqV8dJDpTUptRdBP495FE1WqPYYnxKomqjg",
  "key25": "4CBDZBWt2MGgez8y4n45DJc6945qJCeiZntMdXdH8uXLRbkwDHpKfzTxbg3Q3vWUcnjhhvdBdHzqmAqWzUf2RRvv",
  "key26": "35t8dDfZV2UKuPvzQ9Enn9MHw8gLq8FoJfe8cMSFQqD2Pk175grk2C5r3688dyiV8pfxrWRsfkzh9ax6tZTGyFxo",
  "key27": "4FzRK84bNqBzxChkFpgMQmQFLe82ijTzQvmpZQeQa4HHmtppnWUShmSpqWXuK3yiUZVG86WhXjdygqbx8swrPMAy",
  "key28": "58MSPYFysdR96vuNYQPpRtnk3LNQaUp7hVwa4GLhQMQQbqgBqJLx345XHcx3cAE47dYV6WeEwjnAzqa1UzZs3XKY",
  "key29": "4ey9WQrP7CNN4vE6rLBY6mDTkdBbtMZV4ysMYSYLm8UieVgDjujAxTL8PL2g98RerJyuWsNuEusA3EjpwG3r2yuH",
  "key30": "44mjRZUnFaTvD5ubJi7yM1sXBLKbWk2m7ogoj8WdZV6oov1czBYPZGjCNapicNNsvp74HXUEeXqqHPT68EzKtmeH",
  "key31": "2qXiPLc9bKYxKPU3kasXiW9MbAkN9xxSMF6pdCdxUygxzxs7fXsNdHXrTWnMFTnCEZDekwq4owkcT8SV67rZHE3w",
  "key32": "MW7wUDhmBzy1VmG5BFQxectDxb7Ee3LpunVwLejYU4f5L65VCQMiQzy9rvp8K8LemnwsHmeEDUYD7t54WZfPTzW",
  "key33": "5Q1TBTr5UPWWHXxGVBHipcHkSu2fuxQ2YYVVbDbLL7bUho4eacvpUqDB8C3J5bKnGRnNwRwRWedRUERdVvvPHaSy",
  "key34": "iBPLMnWLJgZ2B4JkVrTULPEXyRZzsKZpMSacb3hnAHE8VmZr1xJtsJjATPnTbufwEWinsCE1HGWp8XVtJHT5L8M",
  "key35": "5GjmLGBvKTDdabVWBfjgZRBzMojZoKVLoh78P9RsjmHLCPZbWNyrta9pQvht7YS51U85LafbkpvYa6tMz2tq2S6q"
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
