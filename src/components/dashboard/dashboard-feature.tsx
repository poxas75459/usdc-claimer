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
    "61SV7V7CAMTUxRmcCPNB2vQTbbMSm7hYgFf8bQYzpkNYWCeWgdfq1nrajJEWiytZ8mxBzz67CwXP8kMVHP2PPvog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qYxQZh6u52M3kC1BxTzzE2wg4HiK6K8KN9nnhYLr5RJpZXQVvx2NANbij7k9JRbSFiWTgEQMvxZUxbn6F9d3nBg",
  "key1": "2CGrNVrEeNcSxg7xtnrFsNCs4f5NmAJfaMtNQmtVqn8chMjyBcBNDZVVuHbKvJE4WvUh1bErpp87QdpjUX1FXqiu",
  "key2": "4Jex3G3swkiq6Bfgev98MAtX1nFwRYxn9Jtn2FVFSZxwaYZCjPKkBp4Kck8RSQV5F9zk1d6MpnQiuozrhWKfCeLT",
  "key3": "2NWH8YD9bVVuow4VWsNhcDQtnkqZHvSjYL1JNk8WKUWb9BtCX1q5mbA2SLPC1bNiQGdYJPqRNQNjH9BQMHP6UiQL",
  "key4": "4MhFcrTeejgvTPimCN8T6HF2stdLD84XKn7AbNsgwQ7VVHRoLXebfWZns73yoZNCL5pqLCi867i27km3DwEcDgWS",
  "key5": "5LkPcW9g7wGYoXYiND6eWmuzKeSokSvuAq9mmgNwGUx8C8YBMemgzeGmivRtNfB6W9hWYEyn6pSsUbMRKnRKqbGF",
  "key6": "3dM2FVTzbPmk7QfJHxcrGAagJVSN3n44wYG2QxGtmWa9zTdHwxL9dYuA6UnQymDZnty6pqpLZdqY235DqR1W5SNw",
  "key7": "5hmVLJk4Mdkgn8Y4iykSirsZ98Ndw6H33ZrWc8WRB2DRx5qQKLfwcft3NVRk7zowfAiXrwQQhFUmazZ5RfmreWW",
  "key8": "4fVRfixBV5uqyqqWpp67jrbGNhbB8r8rB2xHapvfVsU6m6ZxEUKCZRunr8tt8B8FmHtHTsnwSD7dte8U8UFx8TCE",
  "key9": "RrKNrPgvfe3GdsiGVwCCUCJoFRaiwm1onWvrMEfeou8cSMhsq7cZG5g8cBAKmmD7jUsRK5EFo6kWUg8zsq37BBN",
  "key10": "2rYQnRvVmeXEcMcuGdPFGazZ4hFdM5kTFRTpS4KCXErAVsFZe8iz8t2ieNPSqzdMUnkabLf8jSs8VMbfKQr9WHfu",
  "key11": "44CkKLrML8x4Qk1vXRt1tnTKhkbiJZaiaaD3pVEY1oS5QpshsfaT7KNGxv2UhoYsnqND8rX1eMLPgR2EkqrmLti8",
  "key12": "2S38EJbvHVxBPiKSiUZwbmzyKTP14gkETXCnpWtTrMhEzEGBkL7mchvM52DqCdc3QRAVpW9rSH15E6osd3o894qU",
  "key13": "4cNaVzNQfCGR2nfRfEo64dF7es4MAfxKMitE55KTzr5wEXifBubhLTtYRUCLYxVxaxXDCESXrxBo8XTeNgfEYAe2",
  "key14": "318w7YhkQFFnQHGKCeutDhffsyVgkxaaM8yYBPHfmiYqL95L2EWmW5WQz4QopTTywVU5atzx5gVNJ8nZyssrwV83",
  "key15": "63XxCdiQ2ggFmabZdPccrVBFHnURQ3MUPef7kcVkEmXqtAbWkgg54bNqNyWibxjgSFXh5rEJPUh9Ce4HSQwBs2wP",
  "key16": "2NTQUhx1gh1vzPsFtHpeWNDMNbWq5VzgPqFVNnGs7fGinwSCGFgTmy8WCmH1U5XnSRxX377ujCUKsMQaAYRmevaL",
  "key17": "2VzrmDqVPx7DxSKca7T8vnad9n3PwT2ox98iDnrb9hPJ9hDXGgEVVx9zUHbM3KJc892De6UR4MtweYWQZRDj9mUU",
  "key18": "3cCcvhvbRCuovGEJtUpuGeoce8ZamHdnquhgKSHUEasGJGg9tA3cjoAqKaPogyh5y5oj73Qv8xnU5hn9TmL81CS9",
  "key19": "3guTZbxs31WVZ42kraER9AkUzfMWwsAu8by3iczH1ZxXqNBgRddBgD2ZNieHZFcYvrnd3ky656NuKcny8oAbHdaS",
  "key20": "2c1xbg56EdRgt3BSMhXGtLbTSAK2XKoYfsDSKjdzHpxVnqicsbA9p4QxpXLt9iW7p3nJV42r5rv4uBpHf9bSvFtV",
  "key21": "4hwR3EUECd2j9LZBXmGtUarod5A3iryNXjApf5nFH8H8U7DS3SGug4mhWtW4rYbJ3omw7LZJHbLYeQ8o7jT3sRDP",
  "key22": "3QAWQ84ASkY9K3DGoKovPB8pSeiwuksUjZLTUZMVwq7HLs2GoSVMTNRB6YkPawTXHyUkbCPVubJ9VZti6eC8gGes",
  "key23": "4TLvJPtMpq1dUcfY5i8ATV5XNdgHJ9aMmZ2YHadn6m4V6Q1yUN9yczrGRyhXs2QNhGmgxFbtRr7kT2HtiJXEFNsM",
  "key24": "5wpE4QCNp4bsD5iFdRg8rhxSnktbzfZtJDZSL5WNMLPtSRPkXypWG9KyWSfkpMHh5NR1Nnr7XPgvjwB1PPNxXXxp",
  "key25": "4t1225XLRiSUCJpGoKdNNcnjByVSG7Uk6fp9nZrvW5pCS9iu6hTKMa72QQBB1vCCP679k9FyKoR4kUXUP2uq15c2",
  "key26": "3mice3ELfmsXiYQRBZ81DqApTJWuK8UrYBthu9puc5iWS5WGZ9N2uQmFhx4eZz9pw8S6hNZ76tZjHxijm4NAxfSW",
  "key27": "2FQvKVZHH28tVAeyH4KjW5QD8siJ7VSiJTgKQcPdevQeDTSG5SGr3BRm3d9VaSYhW8VxanAu7bV1WSie7wUHSyjf",
  "key28": "5jqgzq1ae3W2LpkNWx5RfSNJBxSaiLW6QeWeKyRtdZbrqyWtbPz8MxhGs3cZ3VpUErLQEvuoqes3LxGuzgvEvtmf",
  "key29": "2ngD35RRgvyEDmRRwdpEeduEpZJ24Wu1k3weoTi8AbgiRTCLSpT3bQLAaLSExBxN2RLoV2TmyHCAKQqDa7dwYjib",
  "key30": "5npUcKXRwHXaKKhazAsoUgYMN2kLUSXQ2C4bNr5UhxCuXd7i3cQhNiq2Dky5obSJ28wopExNiQ4GvPCx8nP9QNw9",
  "key31": "FyvnVXSAsDrs6CW5YDfLVwHFNozSLhA1akJeyJaRt7X1VDZUtnYCR1Pj9X91HPVrBaWGWArixm595b5NfqU7qFR",
  "key32": "22jsqPNDWPhGEEwC2rxMvmCqZunYeQWEeLwnTJXRV4sHJPwfFjaxSWRjFsNPmzhoYq4DjhT3rYMpzbjHjD2nP45d",
  "key33": "drHJakdiwH2cGch88XrFPyCJbcJ69D63m6CQw1chAvcs5xCuTgLzgYDGJ61tHJitThhGvdX4Ew68hjst6BH6kCN",
  "key34": "Ff7QMpuQd3qQwmL28ShMsxnntrTdZnJMNcUbKBCjFmxLNAi5gEFkNcqgeMaiktSP8MBvizG26QJk5d2TnQCWbET",
  "key35": "UPv1Nz33SbbTnHHCwY1SmEpCC5tVrqbBaTuGAaKkhmpNoLrU7mdQxPAbvDbiuLRyJXetZW7RZjcG3GjT9QLxCie",
  "key36": "5ZfQZthex6AWfFAhFPAXpToKkHpAtxGcFrGau7qdN188HUQVoicEzq7VcCQ6PHuUVc6uvuPugPSVJsBmVA9aGvHB",
  "key37": "4B4iQ1nxVZzVPxXsGFyQYNTHzMiaezjMUHFCtPE6zEtxFw7gWdhTn8kuFu5GbSqD3ZHHZLF92KffpTt2r2TGwwZs",
  "key38": "5iijaoVAtNPALCit7Q6UTvsxaKTD37WkCYbdm5fQhQTVJ2NeMhVrp9retho75b5Yedq8Y7YYkscMeVE9tVmRrCg8",
  "key39": "cjc4nJbFoivm2kmBTPvB3to7Y52PoMPjF9YwrrAp41292uRaJpNJpHbL2XmsjXboCG7RvhDFHXEbq4vZ2boG82K",
  "key40": "3Yep2zz6r5utqdn2Z4sbaMEZVjWP1bjW2Li4JiBALhwkmYPCUteu2FftT7Aj9K2tSMbfPUCTkRgesd65iwEzgavo",
  "key41": "Q7D21Kf3MYBCZqcAXC8VFjthWf9ueQ8WdMTZGX5nAY5iiothxQKDVwj9pzvSVY7t8EkAe9QfSzTVoscTrrccdK6",
  "key42": "3mJZ3xWQMuzeC5qQAf7JfZC4Ns93ZJBTY7vVAnj7g5BhztyWwxHnGgtJgFcfMreWQSqqt3QnV4rx45AgkLm7RAi4",
  "key43": "5PRxU8WY7cDsHLHZN7ondaqbePDdjm8qKk1onMFopa4bXxsf4c1MBbQHyuxaREQucj4yGSp9en3PbfZeCqq1bZNe",
  "key44": "DYnMrfFXUPpyrE74BxAMusmzfjwQZWUsuHzv1ASB81z7usxTwMpqVX9CPTfwyg7tBRVZ8PvsAA9oPm2H91iBmf9",
  "key45": "4MZPiomHdcxGvveZCaHqGfJMs4PkSrHS7wjgXmUWS8HrxgKPaec1rAH31ZCaRvsTfXkgm4RyzNBthxyiKidTnVpo",
  "key46": "6LMXnELT3Ms7EVS6xThhdNEC6RV5vqbanMnHJT5KvqdQrfU4SRV4ctj3nZugedaRC9WwwoYQgMbxnW2qNBkzoaG",
  "key47": "4r4xaYEKxzbBXZj61CKj6eMFttT7NfozBypCqMaT5Ykto9tBjMr4V6whVc8LJDvrQ4wkiUk9EfmkVcUs8ZV2q18t",
  "key48": "4vU8RtMVZCTFdNPw723tdnJNBXsewHbZs39c8XJcxNhSkXx9EWzhpXgMiRCB7964ztziQJFaiPeCy1dYTyN4qVVS",
  "key49": "3v1yRccCNeijUpZqyaHsYLmm9z9jTJ2yYYxX8Nq9reZS5i6r39bdpJgzsZo2ArAKbt5xhzmY9DvhYcGCNDjCkhj6"
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
