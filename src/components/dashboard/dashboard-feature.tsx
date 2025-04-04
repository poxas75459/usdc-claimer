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
    "mWVLiJo3sdy4sTEj1PFjr9j1Y9j9NQjNcXUha9ijfhNF2yZn85NHHkRr74EctMTiN3f6MciiMdynPepm8muN1Lu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59k788a8cxJ2bUaRsdAuyWeaaTthrfXPVbHopBJn13EcMa4WsxsgzfiZvDyfqCqEvxmfM67FSLQSH8BfTUXXgTb2",
  "key1": "HwsUyidhb2GZhpLmL79hrsdvEQZ62wPSv4Mpa4B36T3SSSGCMq6XkRiWtRrMB2ACskfyuBrV76GnnxCA44a3NLx",
  "key2": "4agXsHUHcEjN1eVPiDRikmqPJVZ4sNGvGm54BpDYAtrgE43ra44FY6iR62VUi5mBkvTJBmWwUQaNJ4dHCSuCKU2V",
  "key3": "4oHMZ2BszZBhXkFGM4TrYYbmGimZea6MBc2LeYozWDBEmqfT67wpK5cAwK6oTzyMYeJAhwAjMNPbRTpDJjVMxc5",
  "key4": "4tPVcFPLZ1KxMtzsPf9SjitkG798nbRDcAyDH94qBd4coCxf7HLkw3BPGK6mRBAPb8JNEqUtLyKsWtZMYeRQX2PP",
  "key5": "2svxYheb8Ww6q7XGkNVQF7e5PtETK4Y32xQocigwWGse6tUrfQoRJvnasFGcBNBc6kdvLrfR3egYm6yeNzDYzYqW",
  "key6": "3XmWmUmWYvUHbJuYRN7Do5TxF34xutBvjzvYdEESYF7rzuy8hDqyoX9wQziwiKQmQxEfnJZYJp9P3R5XTNLyVLfs",
  "key7": "2mAeaZjN3u7NzUHUHDj2gJhZJd68T6JALUeDnKQV6xmBgm4K46SejRm1Jachc4k1Fjdp2MqjZcPuE7HsBBNFCHv8",
  "key8": "3eSoLmMC9zNcWpyVUro9qz9wM1oEUexMbwimkmF3kD6VFz8JeogknjjdJingHAqjvejJUbvRoBracFoWJYQwqRms",
  "key9": "53v41quRdwahiNWH3Bys5nz4eKcfBK1zd1LJjLk1K9cMsdfjqDJX3XP5iNnS455i25EL2iPitUZzirJjJVcEBcia",
  "key10": "239avgegbXzH5CsqtXKiGCMatBPwwryJas9R42fF8DvxBqfhtC5crkrtEsinVA8hAmPBEgpuUNpNZbipyZnbjYph",
  "key11": "4y4k95Cuzt5jgQBQSMKvQ23tRkSUqNVbKLHtwhoeXU7YkFMweGqnZtwseeKg25wJwAHt9o5SvfTpBTGznPkCussE",
  "key12": "4u4k5jVcNc5Ey4eRkybfLdmtfDrmBw1EJj6fbEPNmvJKY6NpxEmmhzBuGaPAqrTs5cqjrrWfw6mCZSeNFVwvZ6ve",
  "key13": "3eGGoWhaM6NscKMkMEvfEFU8DGbmXT7xmG7P4vGiD6j6djGf41XQ4GZRpzMLX4iaFaj2TzBxHqoFJs6U7tDP5mpm",
  "key14": "51mQfMemeGk35yZU3mFWuEGkWSSSQaFHEtZS8oEv82ySumsnTHvTGWJDa4TaejJCS6tnf8Hw96LbZsbdRX7oDJnv",
  "key15": "4HLWqNH9NTsGHLPNrVQGKVadFgnXqtazAHwZ25szR3bhzuJAyMEszcqvaGn1rv91f3QgxLDMchPeQ4h2rpJpwXuy",
  "key16": "5tbaawSebcfxmbc4CcqmJcEJ5YZK5YWFEB6TtHn3GmMDpFzEzc9ByooSATKVRyHmmrhgiFDiUpnrFSGvWcwKFWVQ",
  "key17": "yedfhZeTevU5XTNs3ssEjXj67vL4ntcohZ5PDknBDY3rqFu9VfNXrM14yCytfXSGQaXpAVbPR9CC4uVafMzRrem",
  "key18": "4sUcPiCKLicoM8hVqph96VsCgq1AF4MVLxnV5yGyZuRaBYdPmHjqfT7MLz9Bamzc8L69XejxzbVyvLYQ6hCNohgR",
  "key19": "4oDNGsARCXSYjDKfL8qsYMrk3tBo99Ztwicy37C9QU1V14qtfzacY5X5D5NVVzihCoDJX7CL88zwGnVbhsctCi86",
  "key20": "3NdXKGWZmGfmZ6o64Dm8CKQCLzynxt5AKZCENfWtiJyrr9Qx1yuEzL1pKv7ctGdTfgrbKrbMH6i7YUvZkfuEJ3fX",
  "key21": "4FFpjiNFm5Aup74iEwGyDZR2yi9a5JqsuRy5wU4XzTwa4sKTt2wTbBxWxMEG9kRscgUZXFCLd9eBvKEzFhVCjme3",
  "key22": "AKnFCkB3tkUiE7m1kgDuUctLnmR1sojffwuhGHxSMbuQ9HvGA1uPMTSY3r72upiBFBHnUZPovAVQ46R4yFafp34",
  "key23": "2aFS9GCor1VHexjBBCBa5Vx3KdeGBas2mHfgBbf7cdkvCDkAYEwTEqTLn1HsCDRwhNhq9ujsZJntGZi5o5XkAZ21",
  "key24": "3y8Qy2wDX6nQaL3Wi9UPPXFZbByKMoK5rAb18sCWo2MLfyZxMn67jGXKVcxXGRQJsYMyMvJcv9LDxNkqCe8pKRPQ",
  "key25": "JKtUSt9eHqNAgW5heQQ2vSDEusWGcVNrc8bSDZymajPAYa1fb9Hm1s36Ddtims1CuYkupCnJRCxCVT6fcd4ayFh",
  "key26": "4ZeAkpKJ7RnMJD7uY8WreS4Sut5mNcbaToQFKDUywVjifgajVWcoBQTDDTQGJMyExHXQSZUSnxjRXDW8MX78nQz6",
  "key27": "2g14SQxpJbPS85XsSXWtox1k6roHDuWpqaEGCqzzgo84Pef8rR5GqnxczwGjk2DA7ktK8cGndYh6pTYY7RPNQ7e",
  "key28": "GrDeWZyNvwreSS1g1z22BjxrtzXaQsbNCgPXY4tcNFby8Seb4QvdXrh6EhdURFXWEfJQH1AdBAYYNcih8UW9rKw",
  "key29": "45v44yMJ4L7cC1h5DAn1DyghTvKJ2PDAjjbjAkk1M6iweta2d3B26mrTJXMNHRi4ipD8rb3vKcLWcM9nCSEuz5yJ",
  "key30": "5MtSuKbuSc5BoZYWvV8CqksZ863qTvWYWSSzBDYMFuTbxpeTiLdNedTL1aApJDPXLAFr9srxWaiD1a5t8swuEGWL",
  "key31": "5EaGFowMDWk1avYFSHwFwrArjHJ9Bj58YV8AjdKcAxyntwYXLNkjbXBoA3SeMt1ihu31MNsBbGaLonj5wEygFA4z",
  "key32": "4LWXM2fVjA5kZgyXjdK59fpyCeEh1y2SdMapZ5qoYrsiZVVwxSADgdVpCbtoVEWYGsxfQuTExxMaeJ7L1u7oL8Mb",
  "key33": "3JG9eJf3TQAXi6cDctcByjcqEM1y1tZfVyFfkvm9JDhnqRkNpxPx4qdysJBFCA2qJgMKZYNTaKZGJfXCqLH3tCZg",
  "key34": "3tshdz8ew99XMsoQHYL9y96XhAjvU9VZkoEMNJYTu39MajAz6vfm43fjdNhVm63vHqzUeHQdCFXDvMUBVejTmooB",
  "key35": "3dr5QWMvjNypPVe6aKsAWXgshnojRDPA37XBSaYPbAWXNUt4zsWiRgseEFS6CMdDxvEvpyXKs5Jp4Bfh1vdNakS4",
  "key36": "2xVr4VaoaqHvVu7VpV8pxshfvJWW98cB24YTctNXXEedEqb723fhcu7SLAt1JfvbFSwsmozhGWnMctbWtLaeoP5J",
  "key37": "5KTxTZEWK5kTB6mxPtzvmPWw9cCYU6MXzKZLbKuoxLkRuHNVMpW1mqhQhokG5J2DDq1PfdbdDbP33L9t3o6UVMA2",
  "key38": "5RsZQ9ueP4hW3MynNHYfN11Cwi2WUzENX828pwb7ShPs98vncABbPCgJ8MZW59Z5dDhBEkb9megSMzfVETzUu8S1",
  "key39": "3HWb6QyKdmJQ9VwTMtmtyH37jbMV5E4spu8UkUd1xxy61kgvgTwKdgB4bqckyysJApF2L6BA7T6gmHuWAsUFFxDm",
  "key40": "FBeb7f9jgvgHYAbn8vs3bzzNCANrK5HcYPU5b8oXJF8jy1fZPeADGYbP8QMatRCWxLwxH3HzKi7t6iFCfxvgZsD",
  "key41": "31GtZBkJTxRSjvnCVXEznKhKMuqRrbphcW8VhxJPxMvKjwvAhV73uEzZhrNV27HBkEGtrPLAHeXKatHCJEDTAZiQ",
  "key42": "5TZEpdTyEPwLi6PDKPSsogc296K8c8EUHHuVwcCpy8HkFiPZzjJEpJ9QYCmK3dZs7Bb3cns27KnDTbD12Ng2FrzE",
  "key43": "45s2ouupjYeuyAugJwcj3mej9JmhDH1YNKnGENqJz71fHY2xQHMfs7JwHe6H2niVmpV4dX77wVo3vp89Ua2uAdCU",
  "key44": "2rFWEZCF4d87X9i3USwjKyYpbB7qJoTo4bNVv17kCkxMYnM8e9Tpryq1Wtcn2gvjn31e65iq9rCS9PcBBzqapUuX",
  "key45": "23GqqQA3Bikz5B7mdVKctz1p767Z9PbqByTnHrMthy9B4ySHQYcBGFXPq5kgbjWPZCHj2vy7Pr5dUr3iKaZeQNPY"
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
