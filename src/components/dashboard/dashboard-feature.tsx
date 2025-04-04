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
    "emJdymVkwWnuEiaw9tFfsW88jpr1s7NrfiYiYbfduNA4BrpA2aZEUxkxkdmcJPaqVeCD4B3sfLP51rTW8YuCva6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46CAdk3Wh9AvLGHMvtdt7RUV74vhhkB5GjmXL5nrsss6mXc9PY2WbnRjNrcT9xVxpMcbdSWjkMsDKHvgG29HEh2w",
  "key1": "4Wrax9JrpmehGXiw546rnQJwpfkjqs5TtrPd4u8FiGbH7eoiBzK2HtqXiY8u5eo955XgaoVpdM9ZofhYQkXxvSwb",
  "key2": "3KWYVy5dPFu4A5ReyQFQNREKZuKapk8iksRxHbEUudMXZzRxRni1DUxyF1w8VtK6ywucbNjSxaWtmraen95NzbZL",
  "key3": "MU6JQjvD1NZ9JXE4vKtFbsocLND1Aj9PFYRyVxph9uAyQZTQduVV1AuyXhQYwLxrytb7aYRJgY4VVKSNdXpvG9F",
  "key4": "4vpQ9tZ3chqUPZbhGyhHaWrmTLaxjWmLbmQu8Aaknigj3FaZp6zgzDYEPMBiBYzeWAGm8sx6aZXRxhW1qhsbmeMv",
  "key5": "3NwcnfNtcFxRrM11e1XURWNzGgMQavWHmr2LS2UmtfL8grrEuZ9VattttuXyZ6mygf5r6tvR7hA9SwzSqNSAVhkn",
  "key6": "3o6bep154ynpKKWpLodK6g3vPtHwAHN6e4uVBzXscb6sCKXNdq812cG5HeScfvk2cjhb1JaaA5AmiX1yYfn6Pspj",
  "key7": "2uP8ePteZ3LZwYsVFu3RLVt5h2WGX6wYCuNALPX9VyZmf4khvabgXTaAFJMuBnxi3jryR3odKhtNqvNeJTVCJHoD",
  "key8": "5A5DNnJrD7jqfNiphNRVeF6hxnpuSBuUqsLoUbsWW9b6d3AzQdGqYP6WwNkxusDcoi4EtotHPRvD9oSmb4ZviVFm",
  "key9": "riQiM6P1XstCFawZ361UwvvKWrLqEyU3c7Cri5zott1UmkVUH1PseAmuxJDh3sjKQPVELtsR729to6VniRsbm2E",
  "key10": "5GBT4DsKiDF2Zj2WnREmxUQ9KUuBwHZ6UbVunWdgpFw24kBZx39xLEoaD2skYzRTrNQathD3AbZd5P2mRVbrScK5",
  "key11": "2efWYooCmWTSvYkokDXsMsP4jw66syHCGbGTkzZKrwncFF4m6B8LV21u7HdHhTJpecYMiZ7cWHDpooGFYiy59mfo",
  "key12": "2gt2KjpE6uzT4FeSMqZkZVZgLcKpLq52PwcmtgAKEG7zcQnUrBNeNQ4m87zV6y8Y3z5LiLid8LQUpXDjqcVfsaJ",
  "key13": "3meSYZzsEhwYoxXTSEoatBY64Fw9hTSnC8DqEMm75HUs3bs6n5bj4scBci5CFUVJtDReE94ef2X87BwTv6k2scUq",
  "key14": "46iVMNw1ZVsEN41H6kDn5wtpuuPUJorrSxLfXuJ67GYxVDzWw3AcWUaZEzwtSSfPtmZApoutxmKYrmjwKXvtTJ6Q",
  "key15": "5Pa7Zd8e9PYgJ5TN3Sa5oAHwUr64BYPGSJou5qCJiv7wTQybNF3JGfczwU48yv1tTWXokoGGHsdXGSHBXEEYLsvJ",
  "key16": "2eoCckVLE6gWYEz3kAHdAPFTQ58rNBZjaC9w2zAXFa7maG6mwCMxPAZrmacnmQV1CbWR7PeJRmQK21gpMczNwrCH",
  "key17": "KExkRQhcRkjdsAH4wp7BpW2uEZWNYZHzETGjpWVEAZd3YEzLXdZw4ZGgBoxmiZ6FsEKk2AcTCduFqQc4g7akQar",
  "key18": "5MD6Z6ZcqVVCdaNAEDvYECoPMZJMYT7ygsakDCBoABzgACpjDKE3gxPabrEpdDMTnNbonrBAN5gyum5JxWqa6VH1",
  "key19": "442mepjTLqgjep2KyjjgwuNXebbs6ZzeBtGwV6sR5irrMiWQP8jVhzZut8Xr2yzr9PUXtDX2VGJTf8ZVvbXX4CkE",
  "key20": "52jgacq1Ej7J9Jv9mBEtoXB1LzkbqHCLaFGLmFqxCqEfpXdnSpw1Pm6ECv4fXjNj9AUR4Y2CEHAt16Eff7Anw93X",
  "key21": "5kTveC7CgnQrhb1grwq7Evhw9dXTBMoRJhPqXTP1pJvMdkfncLLkb2LPaRCtoDRp7ce5VegyeZF9iLikrL169YiK",
  "key22": "Xbjvakutub5My9YDhijbTgNnDzJQfWRAWNkptTpy6eAqTKSZ2pee1WiwodjdQffc3eQWswVXtgDVYCYACXFAJdM",
  "key23": "kwi9YGBYdVFmi9xGpLwysJU5v3L8Fzf87WtHhoEgvXo8hZmQVdeo4xc7JgiK41fW941pSvzDpqyQgGpmzKwi1ZH",
  "key24": "37easJU6ZCDpKycQz66tevPKpqd8dWRCayBXraC6v18YSyvNVG1UWuPt4fPEoLSLLptx7qKqHeMBaFiFAfoKDq3s",
  "key25": "5RZ6FcbScToVCyFgBXAACu6ofN7uaVH8e3MTaDjynhuvbA74zjM2fvonF7TbrGZ7TsXhTkz5KSvYFjKtxJCH4Ltn",
  "key26": "52KqRCEQdnp7UQW7DXnGPm7AS1sgbwjSKQKgUnwYiXx3DQ7jwWAcT6wWCsdYZjwbMKD1Px5H9wxxL8FJXwp3QHDY",
  "key27": "4NkLZrK2UHCXBLKoUmVKB7JzPMafxm2ABSJCejAL9DFpdsbDZNPzQoac7ci77KUXxGbu83u8auzFW5eLsmnBLW3K",
  "key28": "ZFXfto1kUNCtpch5RFSGESBMwKaoyx3gu899tKenqSv5HVwBE7LbJ4K1p34FFzDhU6PzGuqvib28AN1v2v75fK2",
  "key29": "RRe9sm8R3AnTd97Qh2KbixAtTRtFKKMcE8tVTaJM5yRVDKMG8YAoe6n6JZNPnVYPfj4FoAonbDzbNjBZ8UP9PH1",
  "key30": "3FJzHjJLAk3UBuDN1SCB5Hye9wKZThNaqTQftMwPDCVN9NCDEzHQMCwnvVyz5AsMEc2umadasQ8VMhbtKUTK7eti",
  "key31": "5T61pJj95HYk8PPwHqCUJXAuXgF6WBHTz8opCAU7rS1RD7ptpqjd4tS91ctgtg5xsMQYb7HKZ7gRBouLWp1xjkwf",
  "key32": "SyeJtYaXtRyLNSL49W5rnJ2swJTFVTd5Dwv2fUx4CcZQjaQ3q9tCr51cLPTk2LSSpNvQDJsNh6437hDtmjYjWeg",
  "key33": "2A3Tbn2Uw2ADqzktQJe1BWvRP1bAMhyJB98tcgrw4Eh29FuFS47sB8Yp5eyRiCWJJrhw5He9ooxBLyZMCX27Nzwh",
  "key34": "5kZWwbv4B8kPFyyc51EmrtEbsTR7tqhHWQjDL8zpQnrjqvNBTa9hq983h9yf7oByFdwcAptmTZZNPzZYZDA8frie",
  "key35": "FWwB5F8LBTQzHmS1wtkmDXBQk1MyctREmHhgZ1hfUNPcRQSdEQqpJ4CGHBd78nyvAm4jhnxEdoNVwByAXmmrqbw",
  "key36": "2ZFuLbqYBpheEY4PLpTfDSE2LoiYy5zbeZHPxhJSSdo88obGqRa3PoZsTSPuxhDfPPt7gb6YzvCVCAAtE2CSuAP",
  "key37": "5NSFBCJiHep9Ci4FaRWDgEJGP7ayuA2navYdQviRFyCKeDdPDq4VWSRJUtvBGZZpdVQjS9LG68zq4ueAawzCYXfZ",
  "key38": "5EXcW9y8f1Etpe64XqNNwXYW3kDiJX2TWXUctACQYtrHcM18zBoXKkrR4TQ3pH9JUm7P66ZGrdyURDiUyrfMFMfc",
  "key39": "38ACZWTMLtrjgbNvXoXQDVMUwnJrFEZL67SAyMav1VSGHH2RjtKVtQF5PsQ85mXavUFXy9RsRDx2fU5t7eh8s1Tv",
  "key40": "KVA5ygi52YuE8xtsns8QxxxxKg8xPU3sXdMkxxRG7ci6H77zQtdfF3goEkwagZmK2qVd2fDpfZZ1LSEX5W4bXrE",
  "key41": "4H6xh5QJMXL7TSaSsfs4KkQQxtY1njcyPDbAXcpki2zJbf8yupVEEUtLk1rah5YDWbF4d4WDwNwYqM6FddPLRRtm",
  "key42": "FDSV5QDArtZdtPkziJh6t2wVv7dt59Dn5dRKAUXF441v81XJsKPThXhqemZoRcksoLEqiDih1UPYLJTivsZSpbR",
  "key43": "3MaNK3wj9EoSj7mZPRP8aaDFRmcto8DhaftfxL9br3SKsgCFLhTcEVMg2S6rHvPSwokjzpGehYpCqC42WXxfeEGd",
  "key44": "5T7bMSp2BBpZE5De9ppspTpnVFf2GP272XgT4Yh4iqL8VKedSHRyuPPFPsinkyiWn7cZXdfqxDVr2Sgmdsb84F7n",
  "key45": "gkW2dhSgbKS93PLh1yQgW5WD4kfDhFuU9t9YXmA9ompTnTmEwgqWRbqRqtdikjnjXKBfPyTF27FMdpjCLfHsyzY",
  "key46": "3vT9izkP7MtNyA84vb8UWNB96h4LuDWf5QP8QaRLLAa8UaDC82MCxTTdLf7rDtN98fy4xrh3MhdX9tYejUcgFNfy",
  "key47": "4pseLxsCq3Hkonkzsd1sMgwMnRPSNYUm74ymuoMUbdy3LwXazfiGrsjwuTcbXs9NZQgaSGvfi33rLS1e4Zxs5yBA",
  "key48": "5rczRDShVrgE8Ee3zrrbGzvdcnQv1V6jCHLzVgk7k8rw15uh413S9obnewRmz7cA3XvFaBSrLzdKeS9z1fPCD21f",
  "key49": "k2Cj9iqX8VZXJkktqe52wjtH72nWbXFmXuMn7a1UpZ8R94snwvjQYdyp9uZuEjho3T2GeNP2djCif6oQAKz2QK8"
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
