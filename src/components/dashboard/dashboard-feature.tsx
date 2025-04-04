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
    "3vGVL8fWEQS1xD6oLBhgmvmfG2JqxF9P3sSv3yFnhbWrJoppokirBsH7TZcZka7JtDEVSmsXCyt2WgPmHjmC8q4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A6oErtFLpuQoF3g4GY8axwuGFLthkMzvrJku34P2iLHTaSsbN8tCT1Lg6n584q6BW7C95oQFJJZ6rgK7gJXxPTS",
  "key1": "5fdw37G9JTH4s9Pr6NYBYcnuQXr7EbWGjPyDM5qApZcrAw6jFSj1AchvKM38fsGtUpKbtu6AKVcFXpcB8bouWmsn",
  "key2": "3Wj5BLjLFmJFJdAb3oCAULc9ajQCSrS9bRLtWRXciHrFpzoC3L1yD44RUS3mfF3gTsUAEtjgvoLNk18KUt3hkVr3",
  "key3": "NxyiTxCCCWtbBzpSopuhMc3aQdFkJPTUXKgR7tYGByPJpP4J5pJTrGy2gv4itpACVSvoauvApfg361MNfWvg1tW",
  "key4": "2Yxi8m2RD1E3pmMYhWNUQKBMXHGu72z6RWABkm7Hd32LxbaqWJJk4W5KccnR2Z4u4vt81Ufi93Qtmx96y3cSqK6r",
  "key5": "5ApAygp2Meee1aH1bRx1VsL3bM2fxhVcURnDeoHDiZbmXvRrPaUEByC9yn2pqXGcUgsuBvDbMYv4d3YGRwS6CpaF",
  "key6": "5U4yXDvdWaSiwcgAJRFeyY9z5Hne8F4P6A9DgYu4XfaMmaJ8XrgRCECQosE85wwtAAvPqqVzV3Bq15kyLrG12iBy",
  "key7": "344Aqjk4zUoTULJfTwnxaAeDjdq9aAK6oKh4fWiYzWoa9v6eMeassraH2UfHmhHQGtFJiU7wESpGpykAiWZC69aQ",
  "key8": "48mUPjUvDofuLxHenBthbJ25oNrsjhRcozdiZPfCKRvpDRKrdiH6cqRbiczC59GnPaeidpbidk3CBtDmyH3PpQDb",
  "key9": "JoLnaQ1BgQMUwZoYBpZkRGrMRamGEkdqRYbJ3Q5dKhpNq1JSWPQ9cMyyHGQ9GCgpmMfJeMrtpKgNCPkhpzzRgWB",
  "key10": "2accVt5iUpKRyoD5P88PH4XTFk9fM4ha35HJmqzwFyqmT7jQEu6hCfzzU43oMSYgYFnrouJY72o5oM44CZUM3DQL",
  "key11": "25tbESectDXTWgTT6q1iDrWd2kKKn3iUJQ27XoYfHNnmonMxWAAn9X85wpJYf45EsNZZbdyjLcRtDZt55p3MS8h4",
  "key12": "2ipiLGc1aHgrxANYrhwW3RqmQSnKhSvSD6j9SuM8dXwbWmBcDkQUADWpXDoJjyB7at9Vt65xZ8Zi9TrPg2HCwyqU",
  "key13": "NQ1hE1K6CHyzW1wHmmFCZAmTCSjnpzayZGLYQXe1JdnDde5NgfBPL6e7VgWgxkUa3FXfrqFinEcL7sNVfqAuiZm",
  "key14": "4vB2oyUro1fufnHV89LkZjCp64itmZ9suKyRgwciEoSuwP9rQT3t4Z6MfdD2MdGS7XUYUVRZQBNFGxt44Bq83JE5",
  "key15": "41NwEz5pFKWfudQJxgW3mpU4rwy8izHeuo9tXXJKJ5TNnDHTV8oDnf3T8P4KJ8KtRHxdkAL9c8qoZ7aC6NjSa3U",
  "key16": "5YgLnTk7tuhPxfsJa1p99wuuntxRx3gNmDpV88heSraGMFLeJyF4LwEAUeTgirQjXa2N52nSeu4H7eThF83e4fyY",
  "key17": "5efwDpyWftyHoahTh8hof3kVDZw9AJVy9VA93uNCMZ1TYh9SVWBgUH4j8gDoim8avdTK5o2s7kPZ87iirFNFnbV3",
  "key18": "3osPSZLAd21DkMNLggbQTnaMxBdPNs6MDBDcAyjyM5eX6gQmDPs5jAuSkCWjpJPVzuw9d4ND8QiPsFyH1reRMURr",
  "key19": "4MrGZaKW9sd3U9xwUFhRRnoEbhtjeyGjFT4kfZ42eBioTPntUjmfnBSdHbZwSU1tKzDPhxe4okQHH9VTvUctaMPv",
  "key20": "2fCG9kgvwj9XExc5E7xpYBWZGzg7qMB91TMUFq2ui3fA12oG8GDteWW4twZQLP1jwEatQF1Truo8Ew2VwC79YJko",
  "key21": "ek524nUfQogxjr9zmYBsCTvfvhNusnPEEDtnKgU8x5QJs4Yx19cTiZSCGsfr4NTw6b6nyDrDkxwjMQVvrnmK7K6",
  "key22": "2QGvFenY7jSdZCjiifCDvrFSZJPN6VWX2wmCRFEDnHLVoT4akDdCRzAycdPnsGbwGm3pQozBW3BoGv5kEN5PBSM2",
  "key23": "5nPexwn9mSQ5x89hzmiaZDNnErjj72torHe4TrVGaygYgUVUm1XGBapchzzhg6j92CYPiEKcAsi9R9Vq2S9J2Yxb",
  "key24": "WXcWu9gkwksTtxULVbEqXXuKNNUQyUgaGWfhaxBDf5evnGq3bNtWxr1WTwv75pGaV6RguPp9tbZ8YkVGpgGCFkP",
  "key25": "5NCZD3zqxkR8vu711HnLK1jQTFVZNdC7vYoHDAMU9FC6odVXvkuwQrFiy5qyPLnP4J8B1bxpkw8iZ6upBJ57gqV3",
  "key26": "Rh8XrQWKwR2KLg3RLa2HSQv4uHvFD7X4j9wzuWXJNuCjHymEWuS953HmGaTjoqDrX9aiEohHKasmhqc35iBAgRk",
  "key27": "23KWSPiVooE7DqmYU9sntw75SX7GRq9iNypedep5K6VmA5GcGoAmUtKW6Z59KzU3XKo13rCc2jcHdQwMzwe4KYWn",
  "key28": "4yGdg1n8RhCGrDLqzhzi64GR2V6ejRCngRLShkVUQ1on4P9fGvpsS92pfEDKaBYM9pLNFzSouS3f92FHFmk1jKfJ",
  "key29": "WAcMYHLpgyH4BDP3Qb467rfyv5cEbNb7JYKwX5gz33b52gGShEFyfhZY9abL7oZqVAosqHQ8bzmqT8Tn7rcwz4s",
  "key30": "M7dzTpEMrwC52vgi8ScF7NGV1rumZ4eeueCit9QD8FrVdD28SyhgLDyZVxmvHVRM9rqfft3VfcqPHka9js7AM4b",
  "key31": "2ttn4S9pDFmiWNn2UVBPxt7fdYWGMNyvWHMDRVrSD3pUrDzZsxGiYsR8eqFpB4eLRr3T9a1hMyuAhPwqu5Gbfxiw",
  "key32": "5wfypkKY73ruXT3VK52p4LzZkLNraDXVDSzhY1PbGEoEK5Ex76bBjzbPATngdwfSaowNpdu6dvfuSAxpYzBsAWfP",
  "key33": "gMq8Ttcd4qtpmFQ6cSmAjR7SfCduujPx5hiZ8Abx39wxVWLwYcTDSPKQecP6cDvkYtKhrx1agGMLNSb43SvFeAC",
  "key34": "4o2Bk1VfsKo8LEkZ6wrZuSCcTKxXL1JRfNWVbsw3b8G14W19JzvV13E598eQsSprx1vMWSdqt6EqzfsUiwyNpVDS",
  "key35": "6YSnSA4rWRdkEr7d6iGE4JuwAwzVjM4vWkE1AgCcBLQdzdd8u4NKNsPTqvYm9VfUUVbDbetSQCDPBYuUMBwgEnh",
  "key36": "5eAmSbhK19renr4L59mf55ppjHeKzVCGY27kWuTzN5xHX9rBXp2b415mDP3oAhy3k8wdUDax2MGx1FLmyhJpMHt2",
  "key37": "DuziAc5DTMFCvd6vVsCnBYsEf82HoRNAP2LByaCP5PA56QTziXhRjJ5dvJRijrK46GBLGzz3inEVSvnu1TDR4Ng",
  "key38": "4RN8NcmZb7pDxKcuL3wqdWuVr8VmvHBERm4nhsQ7quCsuGdaXXxh9vTuTZJ3eipToEq5KU8X5Rg32m8uY1JEkLcD"
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
