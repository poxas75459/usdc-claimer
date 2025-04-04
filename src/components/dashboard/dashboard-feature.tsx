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
    "2gG6s3Yq3fWq1DjazeFca7q45YCJHVTmFpXaarzcMrcsSwqsmoZLsr3jQBBkumEYencbk68zG8h3gSrgxPQ2ZWiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rz5yNKWX8FmU2RVgGpw8z4nQzehj6suG7zfo7ingQMYxGKAaebm1iGD4mStefTRrhc27e11Zw2WzcWhm5BkfHWT",
  "key1": "NJmxWs7hdnaQvP3n671stX5srwc1sczaNWRZ6cQtektq1ouEz5vHkMoQ3nTkmjq6zmDjH161TTJxEV7wtFKcdXy",
  "key2": "1KaoXFVH91jrDSNgTdSo3obWdN7Qnegb3PbVGDB9ZNZBH6RgwZoRwchuMLycUSBAUjTkPDj9GadSsjHxiPXd6CG",
  "key3": "3CLViNc5EvT39ZDEyGUyE2SwxLeKxSSpeETzSvZBSe9378LBcapaEuMfUwJ1HU9mmetXVBw7eu4zjZiun4m3tuXr",
  "key4": "5nSSy1CTaKuC6XZqvHYeqcurA58iriciwTeWC6eN5fKMkune2RUGPVvf6QSgZpus8vW5fmdMpVby5CthBhz2uoTW",
  "key5": "5iXTpqpvjQHjHMPg1vHtumsSKXPb53ycpPPXVBDJ457k72CwoHDrnxU3HEq2ryNkZauF5NfC6oN13BabmKxye4mG",
  "key6": "4YbHVTa8bGtt1ENzb4KVau8bqJiC9Y65u4ffeUCD18Z8gCBQS7c8aZZiqKwZB2ZBHNYe3MrKWJrGNDFdDr9hWPoX",
  "key7": "2ie2LQr2EnKG3vDFEsFF2PpaCnedf6NMrkdahSUgNGPJUx1abn6TaTG2vMEav57gJBu1rShwB2Z8q6e7SMvJgtzC",
  "key8": "294SZ95J2nzjthL5ZZitfBY4Fg9AehRi5MjRXU5j6XjpNbxmag1ELWt27PSsk8om5Du2R4DTimghUxBn35KEeP3e",
  "key9": "3anLUtcLZu91FfNdnEfoMSNtYCKhrBYYEs4gABCpSkZrtzVUSBVnu5DZefLp7z9V1FCTJaMnXmD5XRGQqNbTjwxk",
  "key10": "5S2Tiy4zgHX1RyYCZVbbxk2myyEDSWAg9P5pbH233DpvKGoRt8nMi7xwzgaKd6Tt1UNH12MfcSN56vqpSQK5JvfM",
  "key11": "4JpsMjcWNznCMG7dp3BPsG5s15wi5o1XHMXQ27NDuNY77PKDYzsMZoSEXgVNHddehnnipRpFajGEERCDzPcFjW35",
  "key12": "5FgRSteHhMYMKZTCL5PLApcbwoLyXfsg3VojzEqoVVKnYxhevLg1Qp8XWPM3xwNhm1BXaL6YHGTopyAoVCzFtTS3",
  "key13": "51AgPsi4B6iHXerjo8PqH3VPBZi4guaT3kdzpzNFgX4AEQJcM1c1jvjr96f9f9ymYY2PZ4HtL6jVMPohtDAV4WmS",
  "key14": "w5aRiWSEY9nH1q4AUBWfKTDfuXR8pB4A3cF7H49xAKpmivpLXbiyCUxRisfRf3uaDWbEazUeYE5XSpYGF1Hy5DP",
  "key15": "5ycPocmnyLQQKG2f9RQ1cQcqLXVmSXcH4EpFP3NdpDURBGd55dywo2sTjg8ZCXzjJoMFnP6hpGcjswqPn4FH5eYu",
  "key16": "HxaCJersEb4MPnFKpumWyxJ8eDK6Ksnbbsg75YZUdbz778pi98ghnwVqJrGaCVM8ZjMEEC2oVKCQZ61CJfbQNYK",
  "key17": "5WVwXKEx8naKEJyXFpuuuWgxckPogG6ckURrimtLKY3ha2WUSDt1yaHxdkqjdq6XpdeZspS2vRv5GAnK9GFTjrQw",
  "key18": "E21LVgE5pdjESvo9eWcPfBZ6CF5UF1uyyv3rEQbs3usx29VXcAF5KtBHobenAbm4ajEPKC6GoyBLXUfHff5nsGw",
  "key19": "5cTfu9cMuEyHvBVK4TYfPdrnc4zx298f29VXv3uxomffSDYP8U9a5JBQRunfRZnNtqKJvJm9fru4DGC6DtvbSmS4",
  "key20": "j8EZuq1AWXve4KDfMDcZJpJyEZEnjCDFUr45m9BCLD7eCtKT99hPJhjFTWGXaewHAcG6pGjc7M1kmp7faUMvh9a",
  "key21": "3CkMzSyZK5h2y1NCjJwnF4iwyiyHfGEYU4Ja6vk7zLZJNh7H4GyYgTEASpW6uTtxjPRL3Jt9zuFPBUpX5L65xQRc",
  "key22": "22e7x7YYdu8FThPKuJchu1w8uJCVM8yh4qySaitb6cTji5x5qeoobHFo61PDdC6eGEXBFmM5WQfX5GZrAQcdbWNj",
  "key23": "4993njoQgdVyb3ABFKTWtcnYtnLbdHwmxuMwcfwLxSHNLBQztLb8Pakx3m5T2g1XjmaCQpxkmgEtEmLLhyGVQqaB",
  "key24": "2JjUkqmbkv4UVxLHAP4Bbx1UJ2KT62EkGnBC8jWyqr94GhyrRh4h7zea5oCyuB7nhWqD4P9moh5TMewUvn6NHqFh",
  "key25": "4UHPFrJpYazRzbHLPb98BTr4rE35EdtqRFXj97XvgsWDEqNiNirpg8L6PKznWXAhNRXX7tbUooa8cEy3BrPSgZJw",
  "key26": "5AECxVBaLyWGXj6bqvhQmZRYyGUXxnSM4SjqXfJzvSR4QMR6owZn5vdL7jvUiSMfGfRbobPRMn67EwMRxnDZ4XhC",
  "key27": "3dJbxqmX9Gg6F5UAkzc5DFZEAjpyKZmeKw6kuF2TbLWgCE8dFSyrCBXvu4XKzwMaqMk1kgv7WD6aFFNJKTbRaq5A",
  "key28": "3uxmofXGtZDAzi3eDwM2gkHK3Pw7knAQpTYVfbsfz7GHLeAa9dBPt4hKsnAUFkYBLFFQxWTaE3xvAQ4iwRxupgDh",
  "key29": "grpSfatcgMzEvzJsthwaMUdr9TCpVaeKoromFvZ3FTYJd9MnxRFXf3jKFC8enznRn9JhUDzJE6ep7JPGjoPT95B",
  "key30": "4S7pQsGT7ZSxJPc466vNkPAKSMFXhd6kWohew4hn1ewWrrRy5J1qZC5SjNdT8YjQmt5fEEmAcUmA2f8r9shNni5j",
  "key31": "4p43USDwjNeXe9qZsYEHsbMHaojzDn461nWhWC4MPnn6suspyotuZ8G7do3y6p1KdGnuzq3FHZqRRgTWk1vB84bg",
  "key32": "3bRZzP3uxkFHKwa2MADEt66Bccc7kyzMthcDKUC5iVJNZNzw6r7TPLUP811QXnJpjJP8G5LB5UeCYJ91Em3ywEmR",
  "key33": "3j8596VRjPCFUNnraGzafN6c2c3uu1QPweUm9qqqh6eAbBA5dCXSkiTjrLrTBsACQSKxmkJTBFE3BaU75gEWFkWQ",
  "key34": "2g3s2ncSwdRf9VFyMQ4RVbPB8UtJ5j1nffyzK6nh1KzJrapezQyuv4QD1sPwPybKXqazLXFXdHT1XbAo2StP6J2F",
  "key35": "5XX46JJKGEVoNnYuJ9maC4ni9SvRGJdpcrEvXxbcbeSHtrKFmbTLb8vdxXyUUW3cBvxYe999tSig7sceRCsEn6F",
  "key36": "xPBfrheUW7nya6ZYTGpsSL5Jv9uWGoW3RPwZhWZuynLCWHmjnYvTeVm6RxYs6DM1CUgAg51gG542Kd3yDihj5N7"
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
