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
    "24ZEi7HW3MCzeXKSwYbygsRspkbJiUne28DekfaSt4hakc3q6DrXjtu4tDg6tbHNB4qGAFGqihDnLdT6UbmQ2vkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hQoAHqVD96AW2qDTgGRDJVadA59ZEfrPbUCfr1sxq4tMv3ZwnyVH4wQznFJkRC1F42oLBmF152G1CCgNZhQFFF",
  "key1": "2bK1iVdr73HvsiWAzycnQMXNj64DFc2bhC4ceeh2oSTmwqQ7wEE6C4tHReAfziJpr4tRDJKkjmbg168o8CqqFTDQ",
  "key2": "3qKMzBHRpToJw4vfQiXJz3SP3A6FoRz7QfxEMCNCas7xbMNqW7qGPPxNaAXivgwNWtctRG8whW6BLy4qE9EVkrss",
  "key3": "5rA984L8nHXrC21fUW8hoo2KmA2Heh4uSKzKGqUgWBSyC4fH1dBhgEss2MNAR6uXV2BQQZNwrhw8Hn8VLRWtQCAW",
  "key4": "5QZzyTSuHc6Z5b8nPW9eK2DknWxVAgSsa7jUJRTWYeC2fPn3NEPPiigvXS5aejtzbe8TnFcS85mK2GZqzatyjNWj",
  "key5": "2XP3dg4WnQpQ1aNubwKmw4NFmLf85jBkH43kSMtX9E4XbBQ4ur3gGxb2mWrkft7gauWQMFhpVSutPJKpSAFr2WQr",
  "key6": "59mdvas8AgZMKCdGbG55ViWFjTJrwfKouHA4zh9K9sH5ArqacMX6tNoVSVAWRtSUMaot2D6T6wUKh7N7A7A4bb3n",
  "key7": "2zLNmmpNyfFcapPAHdzyLELZfGEqvNF87sDcuQpHdqbxJCggkh3mgTAZuzg9UMacbr6KQFhn3iXXNyrgyeSaWFkf",
  "key8": "2N1g5yNZM4L7eMw5Uge5LcYZMzHUqJtJvTjpukMv8sopG2G793vcQzSKeqyeM2GJELD1yM6r54tC8gzo1t1eVp7m",
  "key9": "3DjRWGZPn44uXyUhPJjnm7gbjsXMo8Dm1mukALyfXsvtTN1E3nZSesdnHMpMrDeW4Wa7J1ZoWQp7WnUfwX6v9XFm",
  "key10": "5ZtJHQhs6XxWkBsaWpgrfbBW4YiwZf4EVgkeSQRbQFwp3KTB8Ey4AQpz7EBefBhH8fRN1t6cEcHYhSWGsW4BQE9d",
  "key11": "5aA5TvyoDWibgLrTsV8F1HL7dPUGB97jWFmai2ze17pjTzWHZJA4bHpUvt8HeFRUWARxPifoJURQJXz7x4Zb6WdY",
  "key12": "5YXG5hr7xLtn3HXLfVm5apFsV1e2J2PNdRMczsYPhrntuuCiBpwJEWXSTErGN5DMi1UAhp9fSgDzRKYipkvsLDWK",
  "key13": "5uM8Th9D16o2SkTtPJqQwwjU6it4RemiYy2vrptvmAt4V4XsERjScPEPD4VxsHCQ7JsQwF69Remu3YkMhiMzEyku",
  "key14": "DqpV6BmTnrsxgk22MMVMEQhJXw1kGHKd5d1g3qHFd1BsxnsukVptszsJaSgkY9bRTzCQqMp8iYtUBEgS8tdAqtY",
  "key15": "36m8do7c3v61zNuGg88BuxttpTasnP1o5awM71G8ts4fb1b9igTY68Vvb3HiMpq8rfD5T4Z6MJqxALnwVqfUGwUq",
  "key16": "3gPJMUgG87rpjQekAdd7PHCUSVKx975N4yptS6rr8a75r675jPC3jMGdXZjaPvWccW3YEqYCTxMKeQBRSGu9GVRH",
  "key17": "5pxc4LVu8dKnAyUaovduJkDgkzUTjssNefAzgAdbYAPYXt8mGLf59EqjAaDTwjhpNkZufZSmRGxPfjXnH3w51sgY",
  "key18": "33CVox6Bp6HZjvzrfAU3XqPTtRVJ3BNTupvvFg467JQdd7Xoif4ragatC45oeSTJQsESmk7VEoqXobMapJdCZVXy",
  "key19": "MfgZeMpSdq3EmJ13ncwybWHivr7gStRNMNvWWCi8Xh4Tuk1AUbZ4ShZVyU6Lvt6kjKUPVxixnSpUAiyFHwUbt1D",
  "key20": "59xnh5XAMV8dvqAKseQrJtjsejGygsJ3VgVbjDiAfe6sim9StdafYPS86poxJUqkaKcAYUiYJsmTdWMtFi1LBEWU",
  "key21": "4gPYWHgcsgMf9eZbX2a5kHkNbtKSR1GiKDudPcfXfEMttAKYesBMR4QKXNPcgxtFzUjcwhsJCUTP9jaVtsB9Rk5T",
  "key22": "r67dL7udDhsK8RGHQPAkteugczRdoyzNAWiLYiWPgtRYdjGNTU2H5xQ1nytx2DVbcnrAtmF7XCzYremVpSsUJsR",
  "key23": "5GRh5BoBkL1ZPsHLu88JbMQoAR5hSAvxN2RHaqGuHvjbKyGG9jtKpe9eBdQ2kfkG9KM5drvdQD1aFntrde3CYfKq",
  "key24": "5Wxd7MeV13pAxEPu3hnCU6yrXanrPUihcSDr34DNtNJbT4bu6MKAWWewxd938LQwUiC6QTeAX8VgcPs53dT7HFU6",
  "key25": "2nRe8uK9P7bPV7m9aVUMmYTbqNcPGmUX782Y6iS37tz4eonJ2jCkPwahFePm9rrHmkPiRUj2F7BpLzEnHXStf3gv",
  "key26": "2m176szHyYfQw92mVjJN2V1sfbACkiKV1pNRG5xzawMTer931hkPzymk6r2mPEGMFZ1LtAW2zzj6wyNdbJGhSc2R",
  "key27": "9oa6sPQip1H5ucw3L5SuhxUQh94qmwF5Acu37dvrGBywDxdGQSi89daS2zmZNxPMQksU1A8jdVFaetvYE7Z3e9u",
  "key28": "2cZ81asnXC3puPYc5ys7Aie3tXKUsH1W27TjDLh2V5uRyL5atMwUnixt1BKikkgm19JshRzop4qs3N7sggmvn7k8",
  "key29": "4STmBcoRmKgUDAW9i56CSasi6b9j8jNJ4nA3cURzL2Y7CLE1raHEhHYBusbB24juD17qsoRNUrazY2NnRJyr1gYp",
  "key30": "4xr39JTcHBbY1xDz3fKqySAiNwfLthWeBfJu8t4WSWdJcTKugZLx4AMfTFSB58N5VZaCmiTggNkxo9FCsbEWBKZM",
  "key31": "3QvsDTbrqF2u8s8y468VjpTufa5w58a6rCfE4uqSh6exr7A4o583pmBPZ2dttiqDQaCgSX18hfWkhwrJ94f7G2ZW",
  "key32": "4i8rrngkuby3JgWMxKn6wz3mLW3LnZWAnZdUMdXacP8r7o8JqGKCKYBeLieSpNfkr7C7gpJR47TeWnf6semy4sK4",
  "key33": "5fb5MhpvhtPSuRYVgwPzotUykEZa1XARnNL6mJEDjnso3Rq3i5y65Lpcofn4yEWzmgv2AYvqtYd9kBQqyqadTdz1",
  "key34": "43jHEfAkhwsC8aKUwsDzuGtDXMJn6cE7wrXSJooaV4Ax6ts1MNeVZFnUU1vg3ZCFYSV6EnaVDkiPUNcRzJe9U5kQ"
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
