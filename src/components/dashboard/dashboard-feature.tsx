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
    "qLjUVqFWFRBaxs23pT51Ba17u4yWaKmXDfgRiBTepnc9nvL82eZAv7u2zmb9v4WTzxD929WieDyKV6jbgsmR9sC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5djdrd1rjbmRtg3mxqowdsmzESS16YAN9gzkNobBsv4kex6hPPR8ps7hprwXWSu2rZ7ZReuAhZD8RbNewi44tBAv",
  "key1": "5TwZ48cadWAjs2XceSqR9fshnB7B3B7r3r1SrqkT5DL2j6TBX8VsEgPoaYkPuN5gRjVGGpxqmXtsFJTWDynqkGNg",
  "key2": "NUiAtZ1z3LVZYvo9AvDv5oJtc8rWxSGKoEb9xJuaYanxnJ3kVZT4Tt1K9HWab7BXyXekePEEkvXJLfh3Qq4Ne5A",
  "key3": "4yoQ1hpuzuS4a1VSQMnmaxtxQK2AmZaDj512wUqSPxQqwonUfV6Msj6bo7PicYdqVAqHSpyx1XnZFyfBX9qdEFa7",
  "key4": "vo3d6juvcwHMCERuzbPGYVLNRwdkJ86y8wGqkHgkPLjnj6gCQxZHovm6aF9N9jZJUn4i5uXr7YiDWfJ6h2w3vS2",
  "key5": "9uVatrr4aaw46TNGNLtWBVmMU7MZ6VHGdA3N2S7JBzPnWGBRJeCrDGWta1GHVse952aKfCxYz61MfFAK16WZdN9",
  "key6": "Z36jCycN3UiTSpxCaqPaEe3UCw2BctMVMQjFUVYSvZDh3ASBSjXUz3whdSVdcUonvGH9xApC1Xwco4xAXdti2og",
  "key7": "2CFvcqBZzMyzduyQdULmoFSvWLLMPZieZ9H9Ph3NzyjUJLwQPBBTZmD7DCdc3vLmYHuvuSMCXAS9VLsUqxrNVLU6",
  "key8": "FsXcGmVJC5xTfhW1mREkj8LRQvYge5VuMzofvUJiR5RGWQujrW3j6TqRskk4QwLXip177ULBiotjwBX43n92Pu3",
  "key9": "4d3GAxoZHBAL93iiKoYZxHijaWLLRpwzeJFh3qFE4SWYjvT4Ag9eJbWaPP9Y2uT3aJur3wgdKvSmNKyRXLAesb2j",
  "key10": "3ucaXvmd96LrZDq7DHykTgWvYh3oahiyv8CN8s91hE3NNx3oa4nHf8dj8Zty1CEUPTUAKcqSWrQVC9wDkDH9aEJq",
  "key11": "JUzVYaxzXnKsgUArzPGxWAi23HhqcrHsBA7aDyauYU3WphpVLet5Ai7Ctas1xj7nSN6TsYbUin3N4zBXAAyBCFz",
  "key12": "66AExkSMDPRjonbwEmEnscTAHfv69MtMttrkXT3tgm4FGxNPkos63i4VnvUDbwxje9Lh5bpMDKjRjoSco4PANAQU",
  "key13": "qyPfEh25Pu8Nan4QqdQg6wBrVvvDbpvF5HXXXo2Qhi2yhxz9MFiCes32Pm5BuZhRGbsVkBKbSVgGCTTy3HJA6fZ",
  "key14": "29P4Qz2Ko7vFZbGNTbUGoYkdHSjygh2cHLhc5JWggGykvTqqVZCPJ2oaFZLnoV6s6eNnHg9Uhw1knJSU6oveBYzY",
  "key15": "5qyjb86d19uHk1CBwSNfLk4915tSP9WvW3rtuaAayonKDq4whSqWMx3KaktSjyRhKKaprQ41PGvUftGrfHE9qs21",
  "key16": "QAPXKd1DWhhkbU4vE4qz8hiCGxj4mgM9bGUZknB6EGaGNcQWTwFTc6quL1Uj5R3Xaovry8MhVknEr8FDHq4kmt6",
  "key17": "2si98ZHQwkKRRcLFVwkVV5NMhWU3Mb7H5kjcVtMVs893pFEd5jCzDg5EaBJGpDZFAviNYaajtYHHN1MHnougpYAt",
  "key18": "5asT9audMJ534vWoTxi5VACbQUBjguzXmst1TKVC24cEWTbuh1a7XJAo6CkheFRqjShBTpFPGr5stTwZXEPfGDaM",
  "key19": "678XW1vdHYU93viJM3kWXschghi7FseCCJJPYz2KhpNXWCuhrJPKuJbkjTr2RSEVJHADZWQfg4JFx2LaPnts7zTZ",
  "key20": "2hUHNW1XwZFPR6SHhjB8WesNgeyp3PpTtAn3NCJVEFBSvurQwGcP4AhmfmBbJ32ZhMQQ1T9hRj34RpuTRgyKrKbC",
  "key21": "5t54LR1PVfbNbXqUVxJvmRdGFf6VD5fSaDfoKf2aUhKF9R6KN2THdct4eUgA9dnZqttmHn61YxMbnZFFKBotj3mG",
  "key22": "5b43C1xR2ADpa8AdGYbzXrpMGmeweMtYEkc6oWGerr2XwLfRzyddcQBYmmRUS6TndZcukBdJKvDYvvVbabw9gFS7",
  "key23": "4BHWUGpms89Q9jHTRh2pshayEs1DeFZmdbSn8MTnGMo34zvbE5nvddXdmQbv2yXM4s62b2uks4EEk2zviGzG7HYV",
  "key24": "2h3EZiNnF9vH2xkLtqJaTxKpJHjqGoJcHLdG6WSoevHCD2WDwWAEdxgVHJzakaetT5xmfmojixWp1X55yLB8X1ht",
  "key25": "3E6TM1KYk3QsCC1aQuD1Ux9BM44dUjvkaNon6uTvMDaHa8G3tYY6yvFqSvssoUP8a5bTq1uktpCHGPZH1BvBjk2u",
  "key26": "5UNjns3MyjFDSwX8WHzmswgpK1cxFGLGLxdakVqb6FkQ1XsfZeei73rtgNUCxyDthbuwHe4EMYrHwWaaTcMqGvHP",
  "key27": "imozte9j5ofrnnKRs3PcYbFMkFo9vL4LZjbHQLbLJ1pi3MaBTXyxDrAW7gedPb6whreMnUbcdJenJKRR3YyCs7W",
  "key28": "2JpUqR298FZmLRNtwfNLtFTUWDFQWGeyBcQW6Kd894Tt6Wt8d7F453GSRPweeXtrET3RGzhRvnfAXeBgr5dYMf3h",
  "key29": "65X2voV1mEYQvbj2JTT3Bgt62qF5VKjp1HHX2qUxpH2Hznrbr3kURAFax5cZwmwaDjJ2JmaJQhJPLnDZcMpdHg8S",
  "key30": "3CZaE3AnrCgG3oXih1xpmF8jjuNN2Rr9ir6757rbP9hEa5QURcRHgeUh4TagXqsxaFpE1RrDCX9qP9L1GQsvXx8U",
  "key31": "4fQbTeYtThJXDcwM13LYdhXMiBPzcNvUoaN6AAujEMLW67tyvvtXWV7VD3u9BBuegYm4HbFKrVJtZqwtHuF6FTgc",
  "key32": "4E5YAjBHqsTQL7FjLGhagajqy7P5yvqARKgApstUa4yjuBoEcwMRht7NvwWgaJ7Xuht5kzBkJYqfpEuNE2TUBt5Z",
  "key33": "4PYV1cw8WWaaX5BXJ5ZijNu3gLAvyeuqQQBcMdyWGMnxn6bTr1KA1ZgHPdBuAq34AZM7ccfJ7V51uXiHhao5TVn4",
  "key34": "4i3VRSVe1wR5LvVqzpufnFeyDFm4Es6pNizBT6eSFfDVzXhadznpfgmt6XjiGVZENCGebRVqzkNLjuRtTD5LXXHw"
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
