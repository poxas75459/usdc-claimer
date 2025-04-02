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
    "4T2zMFKvpcnKTNzd9mB64Xx9ZGuUqzT73eZmbxjJSvsuJgcqaeSY6zsUvZYbtcWi2TZY1Tt9NhbNLk5iKoGoEscm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8pkoLrts9nsohZg9ghTCs37tyVFc9U2BsX5uigAVajvJukLhm4ova5X8iDwHdZN4P4Exmzdhz79hDkYQeJd89qS",
  "key1": "4xSAvUaw2ZoC5H4XGXxYkzCh9TQmwYXQCmFQxWL21SSnQDYHXzpYMGwQ5jvX97tB81TRpdvrAW8oaEpTvT4VpriU",
  "key2": "3VNMmeMLjnaq4CDaQYYkhXCxLeM6edVL56eswwxrSdyAqN4rATgHVoF7rZfrneH3DFKP2GM4yKo1QPEcaSCteFGm",
  "key3": "RgeVh43CBogU3vsvAoUBu6DtegoGB3avQ5MY6VGDCsXUAMbYzo2wNAL7rCE6TP5E6VuPct9zmsi9CLrZkmNRm5Z",
  "key4": "3rTHrv3dvBUnS9GtZrDLBwutyw7zErepKd6cByZm2RJGY8s4UdypABBiere3BPtgxEKQRRk1mckrm6T3BpVxTDzm",
  "key5": "24v5NxHWpGTJuRaXBPjy9VpV4Yw95EA3PPBWk1h6gYfrWsDkrpkLTL8yXrZ1dpfcKu77Bp8Da84DdSaKiaFJCVK6",
  "key6": "GeciYngXmN2XrPLNgA8gQjZ165fkmPstrhP8nzDLXC5Zp7Z2f6CAjkX7xXDnneeBGLFotJRLTUoehYeWpkmjL7A",
  "key7": "4px9icJ1eeQW9pH5fsMrbKK4uVfdtfxsxfrWMFVEm2vWVNdLnnZbfQzvvZ9iVMhQaJPTRTWLi2DL39u1pbxMafDV",
  "key8": "27TEYj84Sx8NP9ZVY2E7KnG9cyaExjwCxag6TJP6jDEeoChtjnvuFA8RMvcH8x2RAX8iSsj661mKAAYnBw7n2Fr8",
  "key9": "4rfEax1jaiRRusD1FA3qS6PPRnSCebPptcLrQ2o2pkPndeATEVrSnCCpT7v3wdbLanshdtdHAmAA37ZUvBVaQPwp",
  "key10": "2FTdQYNnviBh3v7JQpitmVamTrtPZUgBrxpDK64vk4R8RtcTMJvdnisjmqpWaU2FDtrqcvsL9yJ5eXvLjmc264JW",
  "key11": "gC8jgQkBEhhfvA2xULHy624i1HLaKjHSN8tQ3Z75u8iyGtdXEgTHWPomffqA79VpjUKLAPqJEhHEVx6N9vjR6mJ",
  "key12": "5nwhZSLDjW2FcicWbhWBY5TRQGh8x5u1L4jzM61CFMZkynfuBujQFJTU76mtY4SetP8jjE2Tq4VUnStvvvzTweEu",
  "key13": "35NEfkh95Bwk5SaonRPryt16FkWYYKpTK6jSYf2LXrttSZxFmgnXv1UT8twZbmvZjt9XWQ1sKfv5AQgG2GSHFAAE",
  "key14": "CA8xLfuMWfjMXo8NhB2ifqQ1zkax3VbM8fho3LfKUZs7SVV8bSPsnFErNiPJg1UsV4MdnsHuyw67JKHQZ15ibX7",
  "key15": "1wunxc7r6cwqbzt7RxQHBDETwAysTVDyAVFf3bUgfZZsc1Fy6fKM3Pg2McFLHXZQtRZe1xB2vUFt5pdWS5UJCsm",
  "key16": "3eAAotDAAh8o8z1gDAcru7kbhdM9jwcN1Hoifx6rVa9gw5WeE6TUAAKtRkeZatfYGCTSW2P6jbnsKDtwMDm66Gnr",
  "key17": "5ffCbrk8TLopUhGR4RNqJiTpycxHLpiQoZ2FTXB2UXfbGjWiUXqtLsxy97SHunmHTdNAUtLsSFuCfCQzFhmT42ZF",
  "key18": "zKN5U2BUeK16PpNRLPi4bjs92zPpdgm43gGwfi3NwCVhYu9DnCvR2mmEP8SaTr3TssEBFC6dcYLrhnWVhhecxE6",
  "key19": "4XB7cNGG9wwxMAdLJmm2zCQ5BNPS6XxMmPPVsM75mA8MjkTK92KucfnXi7QLc38zhZn6CKMfJrcxcNEtMm5pywjs",
  "key20": "4riiYUiFiFdXLi3FKLeUJoah4FCdYGkp6f5wXvMzMAVRj8vCbrCJCwdz6XLyfwbtcW4AfhGL2yUZqv3Yde73Kvdt",
  "key21": "5LNnrwh6DpgPk9ttyqfcsNN9cjmAY3FcSujXS71AUvipNncEXq5RoUJCVZnKwbujQVAuQndJzPEWf8Z2SCagRgLf",
  "key22": "5xQQQ8RNagBaztPKVVVKGs9nkP5eabMDAevGPkyaRSJshykUWka7RDM18jNGiFvAWUGi8k28Ts4R3uFUubAynFcX",
  "key23": "3zBibssrxd5C7qU5qGTjrWFKMea7N1XPNY7BQmjGZeqNuQgC2QnPgEvwV1ZmYkTS83s2pCNKpEa7u4WV6miixLpL",
  "key24": "2mP9XWs4MdDnAadDpXM2mjd3yhV4Ru59vsFHz7ZiXjpuZnkuTxfE2PLFoN9y3L2egf4KLZBjTTQix37BxzKXtd5a",
  "key25": "CjxEV5U2BjPCJQjXCumDDFBG2NXGjBqVf7pMYooA2Nfa5HFUGhmujmDiXnHprynnNLqA27ozjkPrikx4fCKMGtD",
  "key26": "5TrSoDJYS2T6EjtA5Z49jkoKTFN1M8TxsKu3PV3xxyk4yfsxjpdh8RcQJE2xxmntKLeoevg5MW7P2TEy99iPHQFE",
  "key27": "3tDepz4tqF7BEP4LPxSYXJ8MbAWZ33cD64R3fbRLnYnvQtFHgoW14zDrmBYHPpJecygWmSygaGeuxEC7v9QUnfJJ",
  "key28": "4QfnkXjTRscDKbMiWqu1NiiE3GSzgG17sdY9M5VAt9KYDViHymuovVvvU2RVPmQ5x6Wv1BYFCeP6u3gADC2e7KdP",
  "key29": "4kjAgxYPfKDajpuy1K5c5tpApPZ4rzmqoSWAV24wMrmcJGcE3SJo4tPzWQKiJs9AZWvebPJEtHEiFtjGc3THQ1Mj",
  "key30": "2Sjm1kHFjxPNifKrv5bxxwiBwomJnEDzouTBNCUT5Ujdt9ES1NqwXZL6d4GYWtoN5rjEnnsV7SGsw73gEKEF3eV6",
  "key31": "344MzCmstcjssfEGNutep758Cp1Ws7RjDTcjU9RMQoYQEDrjWEcTE3qo1hGVbt2PWzWbSTm2zmEn5YPyuNQB2meT",
  "key32": "86NHRktAwyiYcmi4hj4qm6oyiZ67MVVv5bCJyX2kKwNs38r1sNKH9QsYK4gsp12ziVsvh71o2iwUEWn6SNphM4F",
  "key33": "2C6vsd7qZn76uE8h2xJv1Xf4vzkyHLQanuZ54jV9nCmGEbeuVR1VT3jxe3dyw7wWJf1uUdkoeN8TumDAJDLpu4wJ",
  "key34": "2nh64mRYfzBpxZowayEc3p4XZzPeD91MZFSEA6B16UwbVPVDwbskcfoojf7i4rPNrhkuhJGNQtJgjEF4RkMzZ1ia",
  "key35": "5PHwxsy9cstUoQD4kwpEAQTUVq1HPpJw6atmTVSRA4BeA3K5ug9aG4b1wwwrmHebnoJK89QNRjQBLrp3bRoit33K",
  "key36": "2KFwirTeoKY3ZdnQmNbSZvejxyagLPm7keZxqeR45QtSFGCHYP7sUWbkZMuwbjNe7241W6pStj9DHqvFndEkcHMz",
  "key37": "4PsdmPHBsBfg5hYaPSZ25PD5QzZzwngMHpHUAWKvyJEFrVHZK4QgtndVej128Gxvf9NUzhVftA7rPKzYCd3QNo7j",
  "key38": "54YB5Rg2K94oRJLj8UaNpG7LBBd3bJBRXAB8A7qKGM9BkmLJzYco88gKm4fU1SmG57gMk1nSvKYKX1iK5B1Tv97m",
  "key39": "62HowdZ6UbxzKH1WBSiHkQekP5czoXz8hRS5tP7Q8KtGDXu9mRQAwFn9BpK72fSZY1c5TYCfNswRUJscceiFaaHQ",
  "key40": "3QMN7SAaWVUHmpT1mAzJCN3YpdbVejNGLaRWEGjmNeekm69wBBJgsCfriqWNWAGPL2X1mRaX3NWfjDqrttEJFC5E",
  "key41": "35eM5NNcwkVgqqpJpmJnPE2LEVZDH43tQ7LwWssJhihFMHcGneoDb6KPUtJHy5KBGdvvLqBQeH9PF3yarg2enGoJ",
  "key42": "2hdXLdNmNVvEiF42bzafeuKYy4a1B2TWhYiFFdaVxwdjumfcLLwbVZnqCgeCvjQnkAmrwKkrtpjxeH2C5qgYUgtA",
  "key43": "55MioSPbgDgVfP5XWg42xgnbfdtmd7zzYP2mcgthZaDdCwMEphzVypgxeYms1rdRyqk7kdhFVcm21xCoQogo9z9S",
  "key44": "3k54uYXMdsKWX5Rvi61px5TKTJyvLfp5cJPb1wt85WvsGGkmZH2JXLzTiKPoKN9t7f9MWiEMgmwtuZixYkq5eatp",
  "key45": "5WvQ3HksAoitsx6Zkaty8XVqSMEq3cmceqH8tHBXuqTUaGVBkzAfSj9zmphmWyV6y9mpXmjADC7gzRBKuVNUfSMw"
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
