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
    "4xD2Kes31JkM4j9bg6aJw966KKeUUfd43Hm5p9hGna6bzDWCZzvPRzQHixYrzbzA5R65BWhQzoVPF2oqZyoVpVq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fxi4aPyjuwSAf7UxCTdnyg73eWEwGvrDUBuqDtQQ9TzDxmf8wUKnm2Y5bYEQkXv8NemY3NWve4ZwZTSq3aTvVVK",
  "key1": "4JLrTTNo8CnaTishKsQ4XWbR7DGj4zuBixwVNghDgjYzH3zWYfNZUpoMX2YcN76YAzmEof4rLxf5YByUzbJxe7P3",
  "key2": "2Kgf36Jkx7gDjr2xJfArrXHubVfdojWXttx7r52X6ffAMYscVC9BNwTs3dr7Ndp6cZ8BmDEy8GFxNmu7WCDbeUoX",
  "key3": "JhBxqkgVUTsBxfWiSe1G771CLnZVHbAc1CmYfXcKdxzyzZuEGbPCdWP5vZ3c3W4dWaFzNcie7XvgqHHh7g1ub1t",
  "key4": "3rwEUeYbCkXbW1jcrDJVcvegEPRZ7SU9eRu13oDgToE2wfqX6sJKdw4c1jhaLz3DSPGhHa5Sm961BY5wHehrtehW",
  "key5": "26KBtvPmK8zwuzsWnMT3BkRtp2fon2eebZBhTS4UC7EPYsScPPh1uMhrJ9jrU9rAtSbMQHuwWArZHSwUZhy1z2HP",
  "key6": "5CNgbA44QHbqk6ps6eEuDAc7BGGa1VRwaZaQXmtkGsDeQygmiKQZ14MotGeQdMc4AxFyQDehtPMvhr18Qy3P15Kd",
  "key7": "fbv26AGV1Wv5qwuEf965AWdTCBAXMikyUfRK4L9Um6cXkFz5ESqaezJw596dGbe6A23A4n3TLAwooWLaQqG6ANc",
  "key8": "5pajJdPQRX5pr8BgbiK7nbnKPGd36wYES9DbqapLcS3c2i3Yk68aPV2WazTjgr67H4sKkTWAsYrKjnURVMpQr1Rh",
  "key9": "2LP9suC4oAfzQXcMU6QzeE8GbAkoaAEfJkXQRLcGUNRenadqTikyTm76opk4dE8vXe9kr7wzi18QhN1Ht4c1S5bJ",
  "key10": "4FcVPEhK4YQDUcx9trsGcPNhtsry38okFXJVgicZ1XqJxe95P7CWrUipiPRZu2uj2CSsVx2c3X7oNGXRezR5NDUm",
  "key11": "659EbEjqFZbPARxU5sVrjqPzcuB1jqy6X6tegysg9Et1jALxebTXrjnXg1QLArETteRRuK79y2JdCLLL8J9tFGFW",
  "key12": "3pzMyKK7NqdfxydqthUMcgA2y4vC2RT9daRZksVHw5pYxC3crCmfmqAgS7xNy9G1Z5SWZCXLSU5pjgBovKgBL6TZ",
  "key13": "dCgCLWgjzKHWyP3jBY2iD3gSdGmm5bbwpMau4ivQJ34NorXc8qwSwxJ6gjxNGiDo4Qj7kQ4zS6wKrmunqptMxxS",
  "key14": "3EY4w7HpMzqpff9ZfCoyQsVTMmDQdfQHyzskJ5NcNT5sYPrP8TDyEMyA8S12okN7r5eHVxBhv4QDxQNwTV4sqwPJ",
  "key15": "2kEm6joypxFVneAwMYzeFapbCHJzazLpmAPDaUNfCB1Ncxe55gKCg1DkfzGtXW3BMtvNv6UiJDw6vKdnyZQKX1bv",
  "key16": "5saYtkD4DhaNEfcR9Xcv4YTeanGWp4Ndc98ViYgy5NH4LnBBuHNTSV47EZ3xmA7YGxwo8VHta5iC2yY3mam4Yszf",
  "key17": "4PTCUVp18WCVBhMHZSGQ1y3oSBc4x8bhR9oTKPDZQu9QSrzAMS4mJQ3tuhQvL3Tyevt7C8V4USRSExM9VL6QUYTz",
  "key18": "3R59QiLHhQg9e8j5CqEKXhLZDXAPahqAgSXa35q5XTikiRY86zzKYTKg7uJWLqp3MJLqQSjZjw5rgS7Tup2v8eFB",
  "key19": "4HLdt5goyrTvUNDYcrCeKbz4xFMFhpMVT14bgNv3pdkTCLEEmxzsB7WE8wezgKm6zGzPWjA3RCpZdNgUs1uyRPeU",
  "key20": "4cjyJpnHcUBfpNSjNYez7bjkftcu3NsRpzus2wUtqsy9Zy9DmEbvsBqAaFHgccS3KoKRE8p62RFyio87VX61LSqW",
  "key21": "2J6RQku1yyuT2zpFyPyab3W4qHqkUs8uuiAKUBzU3Mye4ezWzxCxW8F9WtW4YZWye8DtABDprRbAaeTg66wEMRZH",
  "key22": "5vfdHH2BFWPfDszV27HY1aVRAk1n1W5YLPuTkkAFACguNpW7uoUK3e1Vc3p8i1QpJXw41Wb4Vb9Liy3r8Ntzi9M1",
  "key23": "65wc8AK5T5rm3L6Sw2Tub9sD7m5TaramDCK4roLaGBpR1hd3BdG7nnsiayWJ34ZMkGVw3tV2HAa4drPuULxD9vCt",
  "key24": "4JmWF7C453qZddcU7anaYTgoEJutSThDwd6ySfuZ47JkqMc8qWF4KSPd1U3jZrCWfv9Y59pFET3i4bo5KGRC9f9W",
  "key25": "ykFcdm8grmjmBjS55TeedsGiJFnm9UQy1713FHFHk6JcoohFKW5RQTZzQ7WiTnjTkLwNppZ5o2NpJRfMhjWa6RB",
  "key26": "34VBJYzwVPzfK5nc2ZWPnTnEeGWTWR8JW6K1Hz1WVBrYomy1pwbHA64M8UW8HZXLoGwMGC28qLhMRMm2527zx79p",
  "key27": "aWXCVexjYQUybdbMfzddcSdkTwHMzBMuKcSaXjR2QBrHy5hAb8fau8VyJT1L642yiSDFowEoufisBGhWJJfEHHF",
  "key28": "2zUXBeSasyCEQXWgkzWxgsGP7ZKKjYbh9vmmkJzjrhJxiKepGK4PnmCgEhNUqKK6BRysQ6pqe4TmTWVGRoCVU149",
  "key29": "5Uy3ofwHTJmdWSBYSizFVn3dKXedZ47uQwN6x8VC3mXRewiB2sr6yh66Za2VWJVk9kUNuhqtw7JG5FeFWFkrCoHr",
  "key30": "3vBGuwzhB6Ea3hZqdE2MvynnmDFsk8PwPBuTMZVAWN4PnmAmpAucNWEwkNvxAaVcYLPFeiPzHFdewU1caPK7F4P5",
  "key31": "42zZhFZ5aSMQ4qL1SdhrrJb6KwK9LKA3WHRnEEcd9EZn6W1R7E3F7K8FMLjffKgeT5oREhk2KreZhCMEdeDounkD",
  "key32": "2YkzbpEBjU4dqV5qFJbeF8UdAb17RRKz8C1Sj4UbmBGWo6kGN9zdoiea4fLMADSAorZrgor54deyr3bnybS7EaFt",
  "key33": "3r4mcLnBHo7SShZ1urjL5jxCM7b5Uui3M4JPLXd5pRuDtyTGkt3XQQzDcjm9nCMUiaZgwyZTtXkq3TUYewd5daz5",
  "key34": "2Kd9nzmbCaekDXXRjt2fSgZwdV7dvsg7de9tRpNkEzeS4gphCnhxEAvFpKdiEM6rixJBESX1KTTx4uqVp6X6LkED",
  "key35": "52eRh5jtU7TD7SSAcok95GtAnKa2qxJBBZRtaAUJGN3QhsvUUnQLQ1mu22xm352mHC96eWEsFAFN2CAmzWt8GZUi",
  "key36": "5wa8xJP9j536Kho4JfMBMNPSZnGFX2moL7fpiyCHcWJ8EBoCsmszsApopGNfMzZDzJ9PSUHXmNKBgXJurrcVNMyz",
  "key37": "436E7SNTWS7UmFytP1U2Jq2ubWwszvKNh9mEiMVUvNGQFSUz17kPBhXLUVQaoZXqfnWbr3srGXCiCR2mMNuNiHJU",
  "key38": "3LZKayNdYoZKme8UWhDDHtM3sY6htz7LXJ7nrwvisQv6w8jT2v981JrWDs73ZHQu66zonZRR9XMpd7TMGpx7u2qs",
  "key39": "2hnP6qype5EzaPBUDCRH72ca5M6zNsDJ5vtAsafkL8qP8n3v7shkVhDNxFF5FF2QnmMxcsyRwwoAYeQQGRUR14RE",
  "key40": "29bWH4zBELo9VWyfQgdJYdfqQU4rSfHTesxCB3iPYRwbKQ4QDTDEdm6uW2ogiAykrzYoYthx1TevcuB5XXU7FRpL",
  "key41": "S6mKYCgrUWfSVepoV83niaWNyitqnyRpyFv4fiEPimUtv2wqBmGbRvzU3AfZfpLqtKvDvypD6ySc8k7B7Wc9bXG",
  "key42": "2fRL9mp2xnk6Wv76C9cETPd8WufyWWSLAYMC3xfwVJ7UBzbWLALefGMDg6Nf6mMTcaKRU62ERrn7yMDjYSy12BCb"
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
