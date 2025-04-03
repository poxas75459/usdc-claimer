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
    "JfJqMmKaubCGFtoC1Rmh4fB5MzEAdusNJco67w7v6JaF1wTScymhiraiSEMQ3Ro8eA11sHiJXNC1gkEtWiRUqmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qSuREMB1aSzwz6YFdFQwJKE3Vb2DFB9rzkXbCEBd3SaNndB9VALHJ2tXyeMEkgajE9dVSdWeqY7hq3MX5tFF18K",
  "key1": "3WoJmUYoammWGABRxxTq9ycbHbWchpWA9u432PfbGKkxkdG8bH2PWE2ye7CL6Z6v818Uw6rNnb5RMhWSA6P8dAPT",
  "key2": "3iQCihx2kCostbshMFfHi6URiDmBMJ2fK79NTrWzdgp2fzGpcSwmHjMUXWax8RzpfeVHByRKFoVET6ChKWLWkGEj",
  "key3": "3y2pmb8ig1k3cmTtce45Ly8Cu8yTvqnsY1iYJSvbGmwLYmCHJ1fcoMDyUnZu1M9AmFSDyy3YTbzj2ULLJ9Lafxjb",
  "key4": "2KSiK6HTU8i7yetbGM523ewED4DXYW2fXdPVK1hsvc8GRoftDjtDTem8tYCpPK1nd2qDeuQTr5C7CFujUap5gCKb",
  "key5": "3BzCQFdgsbWnxcDqx3ZSKw8iTxMccV1WmTkvX2xewRboLs6F6x9G7tax7uYKWkMXet4bsaSrTXsXop3V5cRqYKaY",
  "key6": "3heGxGQueTg1NG8CwDk8Zbxy3gSpjASwqY9ax6vNkfb9hhYJAujrTJW9Yf7mcR1kTYcDi9gRCBwS3P1nypW5wHQg",
  "key7": "4MjnaXydxLJrCy6ymSP2vW1pCZcqqZkDMMZDQgaHBWQCu9pWTebU7ofQ2Qdsndqhbh5GXBUnXYs7m3YCb4n7shmM",
  "key8": "3rxxDA16FhZGXsciwAE4zqYfCvdnBBBgwHHwRsWNJngEYpekk6J2wuT3D2hoRXS4jCF4zjur77a5oZ5S2tqbGMFm",
  "key9": "4MEZpdtknwuDLwPpuFH6wih7KeueTFvLSfLmHqK4kPeojBX1jcn35axJKEUac8bEH35MJnfikwGpuWVkJzJ62Eum",
  "key10": "4ijBomoSZNFEXtd1UheZxNVqVRyEmzTxMg67KBMRrrJVRGrtXxJHArJrXJN73oeBR9hfZ11fJDEV6egscSRBdS2a",
  "key11": "3jVscbPeKQC1LLYzq2eKnXEu3ziXQzibEQRHuJ1EWxEfvdZJQAdP2ZMCST5aXZPxdazv2Z2RP94YD6rxwWkHjFBo",
  "key12": "5rovfFohwV9oVSrToiFEzdMePFDaNuXEKwGUsTgHPTQ2f4WeGiT3HeaZ6eruJVcsEW9evqznRYXma5kTZVkFHNBr",
  "key13": "3eMaSDQk5ZGGnDAq9gXt9dv6NhY6KuGEyBRNDcsjgSWnqtSYGuMkDJqxEoWCrjBPykuvyzFjBqgNKu77F5oEek9e",
  "key14": "39tvHpdGtVbk8c932nZXqrdjo7uXmd5WSLtjk1ivhrebWna9gQZzv8yDFYMX51Su9uHdtnoV97nw2y2Pu7zqq7wD",
  "key15": "YLszuyGNycHvvr6tXnGMdtZEJQX3pNYDzbrGHX8cYTqXvyWSUWihq1975LnCT7iyCxnQkaiVW2pp5T7HvwUxD9G",
  "key16": "4sDadE2AFsB7kwkJVGg3iXqd3QYYbq1Tz55Ybk4pXo6XChiRrL28KNbcBM56D6AjmkqVokegSLYWhCN3PiSYChpj",
  "key17": "4CcymcKnxDuBZZVQz29s9QQ1LLDfATAK1pxh5x2uujCDnKgrN8xyhGcK7UmHgNfiTFDVkaYLCCvMhbWZUUXFA4zN",
  "key18": "3UXTuchoRnmxBmTs2avfVzxaV6DeWmMUqGvVn71E36WL7eGPCgnUCWHmkH5qYVs88ZYYoruAszt5bWzzZ8e3NSPJ",
  "key19": "n3UWThy98eHW3e5mS8npa4rXuqgkwWRwv5ZXf7k8w4hHGtgPRUVZQgDBz1NYEJox4m98T8goxduF3oJ1nDw4Fge",
  "key20": "5HMYLxfi1ovWv3UuF7Sv5MVEDPpzWLyJbU3v3v6p2ax98UtdmN662bozKWXucvs5GxfGXoFG9B1yDxc69mjXkJoF",
  "key21": "4euXN6Gq3Bpzm2QtGG8wekdJ9JbeHDkYtezPGy5dEq5ewkF5ATTTG8MmAoi2DfzvRPKXDwcL7rnJneKFtjVxUQBC",
  "key22": "27627pJ2Fd5ZX5ij2YqhN1EdLJqGnkJ41k88SzPuZFAm5gL7SK9suZPi32yWEgHucVUVFfYQ6T2HjMUgHyTWohWc",
  "key23": "kWVv4DtkEyrcPABFzTB2RECMT5GxTXzaKwSDxXzdZfFDURPxpcRrDry926Z7MMBcaX5TAbQkHH2avd4QUHPPTUE",
  "key24": "54nkMku1h4nK6KAP8W7yz7Ro6nZJU9d9PmFu15kHyxV42twqxNwRNTNpHVH7pKYG8M5EubggPJvSLcowwZRkQMXb",
  "key25": "5uASyA7fC6RiQGELeTar43FfoJxL2WQydsu9UDTBRTzepBjse37aTbMRwVeg6hHtazP7PZ7iYwLieYStnfYvLNPq",
  "key26": "4EkiwYvZbUYXiJ39an19GcgVtxBWVUkVEQEFbqRoE86ViEZjXSwKryDC59fDgHMp9wEkFMfDxyLEurKkp9LCw9St",
  "key27": "4ZWj65cLXbXEXHYGiDNj3ZHKffCi6QwHsco5kAdAR6tUBk8EFErRHu9B4KeQixfgikT7hzw7ddqAJZoBvE88Jncf",
  "key28": "3AxpZekdhiRuSNdFfXieVvXhdEuQvTyY3dp2X2pbRbFhNXy3cbDt2K89UT3wXvyE7pzmhBYxuM4kvmjykRv3riig",
  "key29": "4Qu8SPEkFYNH91ZvJYKZAAtJY9duqhhxa9q3rM9rwGEgezDfGHrtq2GTDZVzgSDNPPXTTwqiieiT3nbHi5bzunUs",
  "key30": "3AAERLQ121SNadMAjFYFNHW3BN4pCd8UyUb6Yv3Dc1ug7ZafK5CDurf91bgfuLDmCFCHXSeyVhohjbKsRBBW68Fz",
  "key31": "4DrA3tkmWnDw1Vcmt7WwuPJ7ENaDbG11E255ArHWFhjkq3A4c9yEE932C3FXjW9gJpEjPAuNH33aMDe94k8ZjCPK",
  "key32": "2GCQcVypsZ5DcExbpyJ9M3VEPfG2VfYzBmA7LY9sQFuRzMXC7ED7FyHeodF4c2qMBrerTSdNtXCKvoVKvoL36hbs",
  "key33": "5CA96QLrqJwFBqQit4gcoSKQCTHiKzpeosqhZunsgrwkjm2ewFB2HWPASRiMiTxNnfvfugGY8CJtxBrK7jbwW7aN",
  "key34": "5U1E9FTHBQikGdW9xtHvwfBNC7LBEkC8cEQ4owQBkuH7tyx65dtr8PMSkPbPPteVQSa7CnCgMLFAKFvbZ7g4hJRU",
  "key35": "3u433GVDyQw1FT4GN3s2wPRoUvrsrpW9z6TB4m99iTZeY3MeRtytprwcjKzPTCr44rddWimsWSwhceHLjxyfgtGG",
  "key36": "3q9bXuS7EFcUtrqSxzq2L7jNmPAa6yjPWYLxmYAc4vwqz2bP5TwebKbTPK5Y9kQXMUeKGWZZFP7H2dYytsYq9cZb",
  "key37": "2Nuo9Sqf4MeB7eKRHShK4yLqYmqyXN871zc1m5BWbdV4jBJjrrFK2E8nwFNPg7gt7NyZU1yNro2CmQq6yYW7gGwd",
  "key38": "583wyoQVUEjkJsia83kiwBPADMoBEGXHcadCJw84fb43PujjxkVuFVXanTP96CGNgsj2PqFFYjZunPGgqpxYemXd",
  "key39": "UHALEEEFwvzYazz6i947FbLUMVavsoK8HcgWZoeHJVktKehpeNkgWXbCinyadaodM3t5eHig6yiKvdK9WCxebuA",
  "key40": "5bqLjiHAtdFn5FKtiRUUXV7Q2aBtZBdZHYMBXAYeihnXQJARFgXBooFdExhDnLn7h5m3PfXXSLxr11KirhM9cMYv",
  "key41": "3HYFD4pX12sDZUzVqf5qVWQbbWSZybwX5yj9xfyjg65DzQfBKBhikJbYMqUV2XLJ5ksbJmz8feHcnbUokF7WYr8L",
  "key42": "5BTihtHtpptrK9sxquBPA4QwMh4saEuKkdhBygxVy5d8CmL2axe4cj7wfStjh5qYmkgsErLU85AVqL8hyB7b5KNq",
  "key43": "3dj6GpzkP9cnoSY6ck5gjFefEYjcdXcE8FuGukWBnCDMeSNwjKPkHVxkFnYANQhqWn44i2FBuS7YM7WfqqejbJ5n",
  "key44": "5A5GVZjftLr2WdcmuhX3K9zTwGwtadCh847imE3edAtXpRgSUiYeGWD9APiofCSNLYzERDRvJNQYn1CDNzA2vASH"
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
