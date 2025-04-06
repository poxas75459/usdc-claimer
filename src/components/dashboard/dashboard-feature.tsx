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
    "58w93Q9Ab8UsfCQkWnVpGoovRr9C44bxs3kAJiLKdWjyetExUsUmkXTDGV7wJWvrYhjtnJPvXo2hkW752P4yTuMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oNkPUWU6RwjCFof65qPvYKrp6rzVftWcWHXkREjBxf7rwuDhAgPTSifx9p3keMq9bM751XtZ9ee9rH6JrMQWT8F",
  "key1": "2vM6oeTjwQWGoYDjVm8hV15BhuGCvmv4iEz2PxbBqJMXZczTfSehMZVVkzG7tAJ2CLa2NWjW3hYPi7qbjspwt2SE",
  "key2": "4H4YP8ezvVDASMw2kXk3nCsLJjfHP6qpnaEbd8gEAjNzuenFJX7QgRHDSTh1cTo7TNRY1GcweFyM84hrD9Gn7MT8",
  "key3": "3Vo5kwrkfaN2QzaGd6qMstaGG4iu6XdgYR7EmToTixAnYCwMN16MUf4C84CmH7ffKzYq6BdMxpeEej5QymPnx5z7",
  "key4": "2VMQZw6iA9mVd97hv4jV6LNHXyx5L5e6QWV9f1NdexdUSDo9oUd1gVtxfgGZJanmS5UhoEn7FhLXfmM9A9eMsX9W",
  "key5": "5RMNC81BefHfit3nT5GV3wQa4Jc8XFptEuSCvh91MRee5yW1BQWh2Apfcwby2eRsYWQS2CKNaYiUJEHxXMSfEqGF",
  "key6": "2MGbUhGS8xXCT7UbtUs6HPTf9jwd7AUXJA43637xFpbjMZYZej8wJBm5A3VjDLfKD1tB8egEzrK3LhtNm9iNR6bD",
  "key7": "48qVtKKv5xmR3uZncGs813z2BguaTXJbUVYZEoh1SHxXRt4hAjapz4HTkFFEhYMvHy8rM7WdXeDcNkbVFmwH7dgh",
  "key8": "5ByfVVQJMLdPKo3FrhVf1d9ntwUuSKXiKwvAc4ypGqEpBJgzu5NZT4p77JWFAMajb93uMxfBq85GdWK15u7kYBEm",
  "key9": "4dGL7aB823L8WEv6Jcbpz3DrKDfgjP73pvCu7dfv92pRCoK7JnDYrHra2NuHUDvhxDmugeqRqvpxJXJjBcygfNkD",
  "key10": "4p1hG9W7w7Lgv195aDuy6xWLhKeqj2r2pjrpWTuYA5nzfSt5spdX1KjK5hkYtCkapp1nYJMLcJjPVjiRgH1vsV8Y",
  "key11": "dxqDTALRyUZgiLy7U4iB8nxwNa8QqoSFBgibaTnbygNorrGZTgpsNopqUagShy1kL1uyJqxY7wmn4BL3m1jJi2x",
  "key12": "2fdhD7eAsHCzDDgebXgaTUvSdsnvC4zrN8au5x4LF2gALcUuKRJjHttS8vkCQdKaSVhBFHDQdnj6D3TcCofBeyDs",
  "key13": "4yWMVWn6HnAeLVktLSdje1fcgTw8xzLKgpewbij1abyP1JihgSR9ZBcfvwfSbEyTPxkTbwAZQxyQkrMBDdFyhGvh",
  "key14": "4gAWfzzZkMYWJphVfg9XRxJcjzoTJhVLugdW152rtvBFB7hvZcFnxNGWpzMwtaEDFTKayF9vJ2vpkytBqJxirvC3",
  "key15": "AubvGWVFDf7qWV9he5cXcfG7j5fYH4juDeszxvjm8WVciHaBXM58BG2LWZhCZ8CVVHsL9nMJ19UHB3Gem1EyB4E",
  "key16": "4C6v7SYXYaRzf9G1sdFP2VWPwDDDQjfcwfpdX5g4oqoPJ5JPrTXf6y9ZbjBj5TGVv2VWQ1gYTH48NV3rYgdUpWXY",
  "key17": "2EW65nkZfua6wYjaQCtM3fxcRWg9tvWJqxbABrxYb2zNmZntY1NHiE8wo5gfPdmtJfLdcq6JdmGf3qEyt88UhFcH",
  "key18": "3JXZAvTkrc8bAzzJGRM6PboQAYC4H8s7iHHegfthhnAKD5As3Xt2jsQ8VquHhYEcbMVkDtrsEpxnZ4xiUJwo45bi",
  "key19": "DzvyqRsnWvmLNjeEjpwZNFerK3RyVKpFV24DDSoF8xEV4RTCmmYbPbrh5qSfYLcuC8M4NGFgJ4rsv6ShMh5Fd9f",
  "key20": "2twy9HdqMHzoQtvLPAKxy9QPqjBGpfwMkrMcHubzWAQ1vYsVHat6SuNSe9RkkJFvYyPXrJ12y8QxXW81kPWa237S",
  "key21": "2EiADpyh8k4MsZ36mYfLM2S5uYTZamoVMRieR53RGY88ygKuVizZhzEkz4LNnhdA9XsLtGmcVDSRB4auEeJhpXN1",
  "key22": "3yE6KFPTHf6kkZFdgRj42YgHqpBXxHFG3s1zJJvtGfpGe2UpfWsrh1d5ZFX5jpyR5TBHAwkHRcYaazwoxVuZDDfW",
  "key23": "eRZMzYTRrM1WVPMj4kP4NM1tuHFpim57DU3dbA6uUqeTZtfkPN5yYPuhpfW8aZsqeBmbgSbCvQ92Y1QjmUSa9hJ",
  "key24": "5ywNowfDtyphw6HbrcdFH2zx83BYRtKwFho92WAHxhndaLMp1mNsG2k5HFHjd1SVxHpV39JpBapxmNiG1ZvZFuU1",
  "key25": "XyyfoW32A5btjng2BJWn9JLqzmLQ7B98oBGZqBcFRqwdwi5K5x16NjMxr8eyWQuumyRPCuJQEis9ts5Dobs6M8L",
  "key26": "5uPjVsNFkSXBhSLB553BmcXk33mYnPDRtZcaW3MsDwarzH5A33a3cwVsV79niog4BNV7hKT3ASSsCSVnsuNy87Vc",
  "key27": "25mhDk4BgPzWevrKj3n9d845iCQNmphQaM7NwAgn6t1Pg7vSBKPQ9Yvp6xN6vjLgnfvVbjB6ZinwktEA6JCCZdYc",
  "key28": "2dpZ7PADnrmyHbhbJJFybqsnKMFBNprNVSqfk9zAA556EtgnLXdyNMbF4PLkZGDnGidEJrTu3evrtWYuda2M6NWr",
  "key29": "2HMdGmDjGET7JXyzmwQD7nQMySrRCmTHhyXM9LRJHoK8byZsNVwj6HvkpBw1GqeiMcgdypR82Mh9thXBk5MSW42U",
  "key30": "3iwwTRNHSi9RJTG52yZDGb4nJAQi1DFFJWXicNJCtEJSzzJA6vajNnNxba2Khmq7MCyAe24VJ232m78wM89FTm52",
  "key31": "44ctHSR9U7QX2HaDerCj5e3sURrnaHZATGo4H7tdXYTrNMXzvzJLu3PFMVjF8gYiQXpvTLW25exgdcXEBFRS6gnG",
  "key32": "2QYKq1mpvAN8QEFgafG2CMxoX7YWSqxAELPgir2JyY4Utrhn5T2gmRotDrPD514kkDbMNbccc3g7gqpkFFp6ToBD",
  "key33": "5chM3N6xZakdXVCs1NZwHZpvaNcLNUXL1HGWniMHUH7a2ViHFQ8kjdDFgvsv5FBQLxZeKxhLAL2fEy95VscjkkZb",
  "key34": "cdorCVRa7CXspgDQcJqRuEDPUpKb5h3GBhRijtLMvfKChtVKFdynYua3BK3QQY2VhpYAgptasV6c5jmSxe8ePZ7",
  "key35": "L66mz88wyZiUFcP8HoauiFYftKuaDd2u6fb817EcxoUiGVNYHTYr8SbWstf53yZ9oiY2sp9CvW7MZWc8Mz3tijZ",
  "key36": "5ioGjqV9NRpyt8GzfkccyukngSPU96gXGxaKh7LYswooXR2EpxqYmgEgLJBvyZCyEWcnhqPZEXfprtpbhZxt39wp",
  "key37": "3rfbc4ZD746uUWYLwgNurGpnvE9CGpKd5LmVoKgPS2ZV8yenY5QXG8Y7n4Jem6zaVgzZufuAmkkNbH19kvTpQGRF",
  "key38": "54A7K438HmEbE5cHib9BWTBjbczGdVUGqPcnp5HadnbXtsckGTRHPZhCZQAj8EF5mKkN9BajUMMaDkFkhedj6xnL",
  "key39": "27nC5o2isE5kkqxAqx5RFf77cfduaSWdQX6mUUM67YqELr3zcnUY3hFhkLs2EFRUgJTJ43gt1fYECQFKdrggXg28",
  "key40": "2RhUXuEZ83LvzVKtD3YUv7v9iaWtxTtGpbXX1hoCVAgf1s9LFRp8J8rdnTL4H3gDatTQTUkLGdcfU4kXGvxS3xDS",
  "key41": "5AtVLykH3FtcuzURSzxNtER3T2HrjZgrfCr4uTvHqdaR4uzCFsHqebhk64f45i5Z43V5aXbzJJyDEAb2ywnJMC2R",
  "key42": "JuYCaDvfbBXi3v8z18MiiRUgkPofbZSmJQex76NK1VRiEb2UsYKmxWitMcr99KWFDvXruKvr3S5P48UjoEdwiGU"
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
