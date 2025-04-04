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
    "4RPWCezVH9GEmY8zqkRgdDCyTSX3TsRYmUuS4RGeXfjsP9HVb4pRuhvcFTxYZM124aWfLvHhFxg16gt9xVj3TvHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C8ydAjEsRc2JkEjim9hr4N6xv4yGpFZkCHH3DNGcTsPKuDm4NGLTD8BUs6xxC5k9XkTA9FZEFvjzkx2yYALbtG2",
  "key1": "5DYH7gDwRBawhUWvLCUQ4GFBJ2fW59563NyGqQBKKtTv483MixUwf9QZnzVMpjMYQ2eofQtJWFbZ2eE41xALfbTE",
  "key2": "35NsJ8huQpCXwTp4isFe6QpRr6dq5S8CCdZijrwLpYwrQrAVA7ZGj3Bj8jEVKQ2sLDiU3WhGu2VpMZi52Lr6t2LK",
  "key3": "KjLxpNr2UzPihohPon4CYvM2jaVUHR18iY8KVYHauhYN5kMtjCYwiY7UkGgWaHYaqhzUPJTsrSdDkWQ8ex1bKyw",
  "key4": "VauYuMeF6JktTWBpj4htSePJnDkcwhBAxAg4LscEWH8dhEbr5BzpTbSV7yY5G7AzYXWZ7UhdHeVjzLvm9ny92Hf",
  "key5": "2fAsFcnXxxtiw3bx1GvJSBrdUVWUN5C7DNqwefzsqqwxiPLLfoVMkbtzk1CayHLRN11YPgBmf6vpa6mck4uJ2B2P",
  "key6": "shFSQRw84wjnk4NYhMrw4ZCrrwuGMRydybtMdvScutgbK6yw45TfcEtk2mDH3maoSQ3wwWakYJi2LS4GGo3aieG",
  "key7": "3vWVUa2tcd3cucDmkBMTZUw5adpbGPriZYpNhfN83XzbqiueydpTzwNcmskwD3YDJvGyugemVJQKrtppvAo1Evzq",
  "key8": "22HX2kmMuhwohvB6VYvZzRHkwm2ChnrVSMcD8jKCTaP29DjV9ds3HTjgKJcU6ew5auSLXoTbiwFSC1dTsKxavsxK",
  "key9": "jhQ7VKKX8Qhm4gWXwESqb7bEexY9gMKMhE2ffne4yQEbCqxpMhnHpti9zpSdydDhVrLPJZxr8csKqQTWkRDdDUu",
  "key10": "4McvjimMXkesKBfLbdM9QKUcpyDayokuv6QqS4bWfUh6ju2p179nMNztybTNu5HSmMSsBNEJGPnDjGThYXJPaSi9",
  "key11": "2v3hhdwing2Dom4miiWkDpLxyHLDdsiEdwztcwZR6xfUZEjS7qtd92QoZdDEFmR4yyxUiCCEbSNU76zTFNRWPhNJ",
  "key12": "3SWUyZzmQYHTLdCvDaT2F8HQPG8sMkH2LhHy5oanznmtu82NwHEFUKGMJdui2xKyzFq8a5HLvmwJfD9pVdAeLfkp",
  "key13": "2orUE2q2sd4mTc8DSMtrs4FeTPEodvUEZDKwgqYGTPXNXmdc34LWfR1J4aNTpLCuqZpHDgCiGjNx7NRd9jG8cQ7E",
  "key14": "44XMWX4Sk6spA1hQqDMtGk9qSsAEsP8xy9HbKFSufuc228Xe84DxSfCRxdsPQzQxAUdCpkF9bXVuvkbai5Zk3VCW",
  "key15": "SdmhN7AMrXwfKoEDjzi3AqhBUWYUL3x5dcUeQW3ix4812h1wrAxXGw1d1Eg4xkyZuRfxHiP3QtbGqUdgyJQvJCe",
  "key16": "617kpRB2SjgkA6MP9VNWwmmtkWJoUwPx5DoM7iHyDXRo2dxFrG54vvPdAJ9bVp2EP3hJs7V7wg7dpoDhN3KJfVGL",
  "key17": "4AxkTvDdngaj3JNSw1av7HVacKqzdAFo3kyq2weu2jj5x1JxSEA9YeTHN9zVo5hDWRJEL2U4fAVUkbuzN17LFBgW",
  "key18": "2NSyko6yZehZScW5fW9SZZcgqakYreCe5acu5RHkJ3bxnkm4RcPks6kCYeFoU8bm8n24Y3LjzhDGEBk1o9WBuLNT",
  "key19": "4Yap1DFuUwKP1U1ra7jX8KAA6C6GTsyeYfKWeE8zS438wbkWfNM4JM4GLqPEnfsnY8z7GHhHctx8bvwyz76Mp9wV",
  "key20": "5V8eKkSdF9pwKrEoPiPRR6RUzZmKG5CYXBu8NrGUiXnZtqL4arGRhv9LsE58zMuTDbiJnwzN2MgAeF2YgsRe1a7A",
  "key21": "2PLYFJaFyCV2ZKAPgcBLLaSvgbpecmHTLus6FsCf2gH2io2fjyD638Acztv9BQWccWTCvABgHas2YbLxpNn98Lw4",
  "key22": "4tREnFGs5vTpnwLhtWYuBJaFSXxDMnMJDUmfhDX17wPdpDUqnNo6DcDvHNoS1fTfV96j4Wg9ZeRxKC6eMHarDZhg",
  "key23": "s1MCxudS7nzBmF4iHeWM6U8JQFHuXr3GsV9b9YqdwKubk4DZE8v78PtGo3uDfiEEFhZjrkDvt9tNug7q1sjF5Nr",
  "key24": "2wjk8FVwHwPDw2zfMPom4itptffCoDrBbGLPQmyxfm3kECR2fq8HWst7bp1GgY6Sjv8g9rJvqfTMFpLmXKn8A9re",
  "key25": "SMDTfhcgJh7BYhThQgnDyrdFQ28EQhxLYNEfQtuvibb25E5qpUputebzd4KZ8Gtn9RZyRiFjBWQmUzY1Tm5o463",
  "key26": "43ZVcDmPpTGcwnMadvCMH4qD588nMhPHv2jysuVHHWNxRJDjDwaDTc3tgFqabsWEM6nffThb1vsThayyEuho94Qz",
  "key27": "3z1MYT4yU1FE4KSn6TwvQBkoLtYjDmTuDvu3pLcvNFRnY8Fs7ycDH4gA5YtC7mEa3hbaL88QsSPrVUaekrGfSJWQ",
  "key28": "2T44aH8HATxt4f4NWAjkRJmrNXxBsGPULctiNNpSKRPeQ6wpxBZwekG3No9PeR4W6EFGnaJEgz4CLWrRKyR6FEbt",
  "key29": "3PhgVtgcV8kzqPGGhsvCuAHNZygzH9nDsXHoi6gMEtNkBHdre3skRBsaX7PEToqL77yXyqL7abeGrG487bsEMxVy",
  "key30": "44LMHkKgL7FwUVTEQHdXwqwCDNhFxZ6gGMCxkK4qTfTx8Aud6tWR1B6DK3GCf2gdMNQ61xpM12hXudJuvYyo1xDx",
  "key31": "g7kKJFyeUb6QdMYxtLGrLbmPzomHdbrPdLEo7pFASJsMT2Z7xnkK7S3MTzBF67UoyyQacKx4XWA5DJfQvasjRab",
  "key32": "rr3C95raktLyooZKw2t4J47nFAur8S1njN3dBQbFCxU3A36KyZNQ9wjSnWibfuhU1jVGsKtVdj7EwiirAmZm7q5",
  "key33": "GeY8Q4CAdZerKtCrq1ktLssvxULg5dGabNiS99qRNFvT2Si659LRHikEgKKPAxa4NtoUTvfX8U8B34gN8s1ac8z",
  "key34": "4VYZ6zeeCbkRDUBZfTK4b1AoMZxdZxdKENhC4hetBhqSTdgHFfRLm9kfcTwEm9NuiymTYEGswBBWm2ZYLFrZrb36",
  "key35": "4yvyDM3J3dcBqm6E83xJ2cs6UpocqSgWLe4w3jEBvM7Xi2pbBJmTgnqttH4pmKfdkN6WFUau3xsfSm99AS1ayo47",
  "key36": "3Vz8KwtfxKWDbQQ1jidmy4AvL8q47pCeqj87bzChB3J5BMMciP6TKNBTv4GsWKnrbzTzm2QBNKrWjyMb65sj8dhj",
  "key37": "4LGcuLZ5fhrkXvS3y8PoXJYdG6L96mHASTBBfQh9n2RYvGL2T1PJbZ1i12omMcCaEJw3rd3P1agCW2M3n4tfGEuZ",
  "key38": "uTuciVdwCeAzLbQBWVstgo7fQZvbW3pwC4tANQV2XTRECefHoGq7HpNUdoGUEGdY8S8uobxXWFC6b4vJAnGsdWc",
  "key39": "4qn9pnJR8csGT8j2pPJMm9f5VLHemRg3JQefNhkqfRTVpMgrY2SJx2FE2oMQY52xs8u128j2Yo6EogqN2waerpzK",
  "key40": "2DgPGyQSfAryCFfoBz7k62htKKBFWBpAMzRAhQT4exG3e53Meiwyg5uyhr38PJaj5feYaZYpCgxeoqgcp9ruc35A",
  "key41": "LrKbQRdt7LV1jCc4F1T7a866n9n5F8nfCWNima1bxa7jkPw6W5Yj8QaXkaqDJNAUiiau4356DRfK4cfHs6TcQwj",
  "key42": "nF4NGPmDHXdbTpeG1d89Wxit6bQ194kLNNia8uHgz8J44oDsHYjgYqiduaQTEyWKUciyMBmfTjduMhYMsBg9wcC",
  "key43": "74cXYmQunRxyqm684M63t2LjsxW7LPj5eMZvfFb2wZBhfgjoU54cqk2ECWid63hdqUemLUi9rvFYqNY9X2jcPEY",
  "key44": "SHvgPuzN7nQj2BbqTS7ALKiNjqMn2fL7R6fLNRLk6m69P53QjyXyjEdxJjnXS6TWiu1V6iShvRBch5xEKhwzj43",
  "key45": "3WMRSvt9ZC4tWncptfj9EYhfoi1PVR9JC6DQPyUrZoA7if4rTCYuSZx1PqkrpPNhFQjHD4QXEvkAJ3bt8omsDpmd"
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
