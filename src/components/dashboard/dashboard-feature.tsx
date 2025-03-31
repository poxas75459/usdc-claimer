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
    "49ZjVYqQqcRKe636tjZELkLpo6uGJxkrSiV9sseBYisKLDmfNzauwDRBT331oeoe2BkirTs3JWhTA52jqrDH22nj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZAPqM22k6TtHD2G2gE7T8peiAuJrUxMyHYzkPR1FbtfbEMsiyLuCHcMBrjgdfcdtYpCwcNb1KkATj9ageTBnhsG",
  "key1": "3E1UELCNb5cEG4nib5HhBHAbQHAi1XUJTNpgi5YxfMCLfYpJbCF9AY1Uuiu7yAKeJv9iZhrZes93MmWC1L3RynkX",
  "key2": "EdtJoP7EWXANhXviQ8Kqf7hgix9NG8Ja8k4XKzXyDnodg1kdCKCwSvgTR2qbFzfZAfW8GPS9VfJ3RsTsdxo1h1a",
  "key3": "64NguR7u3X91yMELFQqW42urSPebfrnUqzeg2YyrGJ4GoP1WXzMVzH3ukJpduxRMwUx3xNDKycLmrVXkjuMNcVDs",
  "key4": "MGe1uU91YiWboPHurWvA32pzcXND6BRfK7bhrTPK8yynTKkUsSugQLPgW4sjvhpw3vgrF9f85zPqVdBgHwErjv7",
  "key5": "5LwjCMbSniMiJBKMGTmWGtGtpPZvzAdzVzGAt5Lmzt4suGeWXcE6N3UFfgFHLhwFBuB9xvzwxaigR9eNGxqcQbr3",
  "key6": "5YHwrm59K1uUmWLKVsC3nLGVbSSwm1JEY3VtcSH4URcz2qsDdfWQFyk21qA1W99vzWVnCZfnMp6ddW18uY2X7ATX",
  "key7": "3HCtS8m6tHmJJff9pAhqugndwsxq5PzTsoeQGDtipNemUyXwTkRGFudemuSRJtX78vxTCU5KFfWESCR6YYFdanBv",
  "key8": "3iDhfxFgTDyfqdFzMdxxLN4d8MeT2oFbWDhsZWoVcSqfaaqRYyHphFPc1Y35SCZ3tWsf5toeP8wK2Zm66bjoCeni",
  "key9": "WVbgCb9vUrywpmHSS5okQZjdWafNBFegSBfmQTCoPx6s6h5Ms7mVm1y4HCTmbF2Kb2GL5UQNTnDq2p4qMeHSwpt",
  "key10": "5cwCi2kQWU2nYQLG5xHUfP95w43g66ZaUrpgQhycajXrK9GFSh8buCCteznrYzxnA4sAd1m9c4YoRR27ndqjyvpb",
  "key11": "5YAY7p4s7TbGdSN3joNyRv6Y9G22CAbg2eg55SQDGAXYcqSkoj5Y6CpUxzU2kuoSdNviqoh7832JVMwNyKrUQinQ",
  "key12": "GANvg3WtCvTtg8VmXNvZjYQipgv6nyQqQ9xw2LBt9htZPpQqWL4mPB3azKJDqnT5tfJZsmk3UwFy4xYX1BaP7VH",
  "key13": "2G8fU8eGBJCqnWccoFeKzHpCvVF34jXnqjR8iNu4z7W2F48aV8aHgDfYuV3wLUE64kBTrTfp4rDP6mUji7Tc7H7i",
  "key14": "5HZYuVKHvqDRt91ZsBNzPors4BvPfjZk4nQ29ndUpvuVzPEGLEyEVNDrNY3cnNnHL3GWwRSqCVL7sCw2ArudUYQS",
  "key15": "3hvaQU1HKStBtHxHcTNMG68nzDksf61orGAq5BxJKD9sNPzaUWLnVFnqK7BdQSqNZnPoid6e2Zb1hNtKUMevJfyp",
  "key16": "54UpJDfAaBQZkqsSUPR9LfXUUfotAvoajWt2EXLuXUmcP8YXxr39fwfijzjZoP6hdHVA27aT1x6KwSRomcYeb1f4",
  "key17": "2b69KWjAKVrEDpYzpW9usyiWUNZNZkGjpjc75cMcg2qZ6jndpuktGXpYcccGSxSrbyuQXq61YJCmj85wWJEcdXGZ",
  "key18": "4xMCqJsaSexKMsk7AfztM1jWRukEXzHhn7kzZn6gm81cLWnrAATRmTjYuJABXoELBwCRNFAAFWXhiNy4krtNmcTA",
  "key19": "7ee9kuiWLWvn5uRpiLqRY5FRzbGT4n1uBcR8nmZ78scR2VLSVbxxAFDBKgf9mjvUVrp4DN2cCKuPakqKXdLuQNj",
  "key20": "5bhJJTdxz1g2jkaXScGnsU9iext51AmbqVN3n4DENhJeVNMqBww2FNKmTouvwRpZaYjDWGSp26eL4cy9CuSLJQqH",
  "key21": "2sVEVCDhA2FCJmoWUxBm1B4nreYW3HoeFvR13P2Nr9mg1efftCuNJqyJvvsu1eivo5XuskouSGsn8koizMsZa4GU",
  "key22": "45ZM6YAVBcdSjootk1MqSNBeBwnR9pkHQD4hH5abXRZjBSUTzUdfAvUaiWw4W7NqVMySb9oyS99ApyWGsndZ8khh",
  "key23": "5EMjespcmQnXfwjMqU5RbmpiriTEP1tcH1aQQbqjaEQKvBtuogcrA5oq76xqnSkHMsHWiYhXfxKU3P7oWMUnLa82",
  "key24": "3JZHSxdbZ4UcLpNfREafrZBgBa3kytNU9Kt8pgBwHh9ANLX9o8d63DxSzk4dg7yX6YwY5p23nwBFUYB1Mzx7jtM8",
  "key25": "3ZkyL5DdGatjhvk6u1R5FM5KQZHCdTX4a68PWNtd5CVCCNzDQBb79gQCmHrx2B4FpLNjss7bgws2CUT4GDf6dHoZ",
  "key26": "5bN52N5dGePUMM7dq1XTGiEDtqztKHgG79o9knkzJR3XeZiVCixuPcqgCnZGDoBBz7DTdpjjuDq4aiEeNJguDjcZ",
  "key27": "5C3DTpr94cgeubtrhwkCxCRTduzW9xiHG3rguKcVeyu6gC1zPzy3XzjUkPzmSS5oKsZghhKScWmSRZW471HpUmzc",
  "key28": "4ckjVkQvgPrYoEezjAPkoKgqQpvWjK2cbfQWU9gfSCsM6V5oS8rEW2rLJdmJuiT3svoueKtqPLdkXq9ncHRidzTU",
  "key29": "4LGBVawVEyNWLuw8difCxaMJaaGvvjp2RvBfYULmz2ittZc1FwzEFf8yPbvwkwcGkh79VsyorhL93kFFbvczgZjN",
  "key30": "4C2zgEhaGcBqfwKMK788ZM8aBs4Hyb5KcDGfM7k7fVRp8UduvjokG7N43s4kVzn88f9LxSHNi3ZFqjhiSxHk3RjV",
  "key31": "48WG4eYAbQ2Gsg4wLdwm4NVuKBQ5bvxNzarsKfWoWN8RiEkKDic4uXSAizPQPBbMeeCT1HGwxNEGYsdk69UtCn7z",
  "key32": "3PDDK5Wz2D19ADKGVZBhzt2nsWBYxDphQ7vWCobTUYfMmoBAyjUfaDuc7dZ5TxghgG8Tq3QVnXRE69vSiuuzHgMT",
  "key33": "23oCe8ZHrW2KoHT2TqjojmsxtL8tsFn7QoMSnBKqbh2o6YeKTXE3MQMNak6PUh2byiDsJHFg4sK9FxW7c1XSeJtr",
  "key34": "656cPZvHSSG4DAmizD82finMgYmL5ptu2bPXBTc4UPA6eBqqz26qGjQTEwUXzEKfGow1m8mko5WwEmP4sduAANaR",
  "key35": "22Sr4v3rgCvpopAbVSzkgzWfUvy5MYnyyWPDd3ETfzTT6UYFL3GWYpRoQn3DQ49BCdEPRpBubJ5AXu6uMJkrG5vB",
  "key36": "3D8u7NUA92RfWcqCUcE1DEDN9B87w5zD9ZBKi1SbD4s75u549hUt8RSwWbRbvb5cwyoBvCKbogvvhKRE5nRg4YtR",
  "key37": "2rww3qKNHePrzkE3sexzohRkMhLjiZiEwKt7sj87tBeCQ7JJMTdhnnWdjfAWsHwfk8LieGdrhwxHcJ4nEJNiwWmX",
  "key38": "bwwsvmqnTsNQHSyupnYCDi8tnejnaGm4NkdnbDEDYRSw3WQYYY8xZDktcAhNUwGdud3zwGh8rh9368N3FCXU9Td",
  "key39": "5wQcuFmhacDkQiqghad9bhpnS4e3TMkJw5UVYLXdCREXb2A59NiQ2moHEd4YYJcjBQrMaMoLLPjwMBDTWGcHN7UY",
  "key40": "46wgwXFQFXji4dyMj9GVdB8nvTs6SPKE8JZoQVFXXosxLbSt92b143LChRi5ieHHJvtg5mZAS4FJkHq94HqigqnB",
  "key41": "3phX8qZJ5GohNMwYZAH99DVQ7hQTiUMoWeEsR9TfhME4Fo9a9qtzzsNdDjtANMP6UU7oKckWhABrfzp6Tp1by4r7",
  "key42": "5Hc1FyL1jfLZ54kDUhr1puCA5kaebR1RwEFyrcYdtE26AjtisbsL1ncSNbP3bmMGY7pWcQXaycWkZrpG6RvuaKHM",
  "key43": "2zd17uEyTiABMVCuj3d4mvdDgTAGVRb8CkzSxNq3A57pzudU9d1tbrtjB6hk88HsiEc3ryjZDGbKGwbtpK4Ua3hV"
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
