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
    "3a5gkdi72fkGeBjixAH3bDeYyjNdAg9s98aGF8oaWVEbhphRVgtVJMB4mAWqwGPLKqEXjeTQeCJrnCAqV5Wf8Kns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22G9yhqfThACwDWckBq5inLAMpM5ftWX7MM4VJzqLrkM8ar2HHrMepLdbLHNpcHuibaR4faeLiNjWutHrZY7QP9A",
  "key1": "3FPkyHGoNqq5HFEZLAo4fkVVEvhtZwszQmP5TELeaKF2zQx9eEWzgGMuFpDa1jJGcuJfnCLaTd6CMKnRHu36sZDR",
  "key2": "WganpbANhH2A83f2KJzy6TJmdLbG6u5eAhzYsoF1GHBzZnmVEY53BnCttawz4VaQd6Sg84wpLLeh7HkEWS2qADt",
  "key3": "5KAD4kcju1EF9vKuSAuvUPmbhH4ARCd5XbSdpGmuGnNxGZ7Mp9ZnC37gXV7QjendR9ckbAi8YSRhNkJq1pZbbJtU",
  "key4": "2Nj9uQTqvjGZuUcDE2X4rds6XRjMxsrEzpzzb3KXXEUa2Pe12rjSoZKbC41STw9YtJEjgy8q9aABgWjy71HMUmCP",
  "key5": "p4oyJfZhE2D2CRE4UbFQ5puaMV8ASX8535kYYB1Q6B82789RN89uT2mbpye6HLq2SDs6SvHfCof6hLVPfwq6Nc6",
  "key6": "YxHzW2G5PkWifW1g5h7ZNaBTckdd9pE5Rew67qZ8KgZcSvyF2Yp9qiCL6QWhB4XBh7Y9GCyxW3xY8k9HVxhFAya",
  "key7": "3BMABQM3eKFWSDe3p2gU1CAvukuZQyuztZquaBSN5NuvpKUSzwZw19UH8N76pvAMVL2WXEiGPjc1pngGF7kCycqb",
  "key8": "3EwMjEbCfsMuAmGaMKmvc4dN7Tyh4TpajeV1b3kzcwGxcGVcLgiCthYEHTnCqFPLxLWGWTRoPk9ePURkc8rXHBmc",
  "key9": "6114hBna5YwNj1kPQc6AzRf5jbMEm2vKinj2jKHLVLAfZMHiLatma9RkzquEMGjPZUd8Mcjrr5NKtVDb1Hm39a6U",
  "key10": "2S2nkrEQztYnAdkW4QL4Gvcriwr3pdNk8Rk97ZdY1x8zp7WWwL8wpaya6AGbSNK3vQTX4CS8rrbk6xW1ztzx12Bs",
  "key11": "MRpWwhPh8K5fxrp8MawA3WqTw5bD9mLCdi1U3XyM7rks63HE26oMSgsERSCTpDGDKohM6e99JfZECxr2BacPqsF",
  "key12": "3Pfd6yiECPKGEBNvXaGjh9U6KF9U53fspfVsKtsCKrqBaoWX3YVT7SEEZa26QmRzxrogrzAnpwnbpYfNZ47YFgQ6",
  "key13": "3wn7rKWVGbxJvhyNAEjEefw4gxW8eN1Z2pCW44YQ3zfgPLfwjipZURSTbAAKuuFjafpQ9nmXhr7FQZgjLCk7SDRK",
  "key14": "4eXhVsTn4qTNk9BwNHU5XmExJy4PEVmRUqQgSaEKLFfykVeFR5Vr9fejjdB1pppR9TZLxiw4BdE2mkAJYn9a6QEo",
  "key15": "3kYaYVeRskvh3iQyf8GBoSNBbFQVgkyxJskfirFDYwG2Q9MV7FF7ZyXGeDaAt3CmXEfaq6xzJZfHPhXGak4XBQ5X",
  "key16": "3u5reqvSBz8cMRWJaEn9WSWYcJjABMJ2rNyETVh2PBjgifnu9U2MSQG9fBihqEEbHe6Nq8mykdBAqJ1Xe8uqUzBh",
  "key17": "Sha79HBXGtCfXr4GtRx6PhueQQpc7bkbxD4wStdjhvqbVoQP8VdNyrc5syAG8Kinsnj34theiLAz4YwZfNsyoMR",
  "key18": "24YQTNnQAGbo9kGMj8xsa77FmrAc1G1RwmFGSZpMei1uGGdaHDd7XoZPE7ueK2jqnGLRtbTwtwDywNErvEX8Gkdt",
  "key19": "3soTMBDS2r6dzwykhBBpge6v9k6i7u8Zb9ULVPiA9B1mtrBvZVrQWZn9tQzMYBXLimsqGbFgeJ8FME1i4tKvebdU",
  "key20": "RC9X7xiBKETcDiE8XcqK65tYVAfskasg8bL3U1zkF2H8MpfV7xfxCTGjqiM9Cywb9vj3e9dpc3r5GPNQ973whWF",
  "key21": "5Qd9wkT8AKYJnVT49pNqdc2BCHYu412ZXoyBAvUHWhjLzzdEhRWkZPyMSAGkgGGwvvzWZMxgW2aSUR1tTvZLSUrz",
  "key22": "e5akeGke7aVsAerPHDpus8PCwW76aA3xF19Gd4LfHdKtWPZiU7m1TxUrn6fpSkEf2nk6jiPnrKCBvEinsxxLN2q",
  "key23": "4VZkq8ksom5Q93hV9BiVnMmoAzbCxgMphdb4srZRXYB8ZwL3LWrf34LRNpW5QJUeDXF6JTQP1Zf8gGQ2CrWXSHmW",
  "key24": "TLXHqQ5ZGuf15CGzvi8AXXrDWeQtYpcgQwb7fEGjxVxiFDvUqcCkgkwjzk6ZU785cLDE3BRLV48W7RUnoGDwNfk",
  "key25": "38VA3m77nThc2rgLLwqpSnqrkBkPpdEdEwUoHEunsenpQyHtkuSdizcJNKDaRNDRRzjBjXKBBDGEfkUrDWULhGMg",
  "key26": "hWZYUBn3RvoySsLdDr6hxZsgVZ3fVNGw63JRGMj8uiFXWMxrfNG7ZK8oFbcoitSkUewgqpXF4iUYZLtyBNTy1Nr",
  "key27": "57v6w71hqTYoW34SHcPRDX8PLMHZemxAtQBoT868wKXm8GYcdo9oKBxsC1Rum9Ut6QcjNSh537WS1Ve5WEeHCx7s",
  "key28": "3HxQcTHqu4jkMkiGapZPF1QWWZKJ2kWM56ttMVdADnSwF6xdChHv3JfVKFYRgHXtDVmEoEKs5Ww2g4ouZMETujzQ",
  "key29": "gRXaKyvYDfyMCRqnuTUfJyDY3TgtRX1ijtKr23YW3y99Zrf1rELhvprD1yjgXrN8ySA6Fb3QgPUxVwn3uLqbg7H",
  "key30": "5jGamFQJFWc3Rjju4XMeUVfyVLnDiTBrUBPwVmsTzG4KHtvz7jce6dusddF4YLst9nq7NaNpUWUP5DGovk7Gx1cR",
  "key31": "49MCGgtibzmqKjGzVm68wxaitsJYfhYsM8LWAz6rhrp8k8W3grtnF1h1BE6E4bzgeb5xf7GhqT6Xx9EPfmSwxLYN",
  "key32": "34Zg7xExLVWKAZ93jWogAtFoZmJ5ZdfgsH8zP3D6rgLKRW5jV8mWPYvzBkKWaqA2HQHXeiQKBAwpaBC5jcX8hsB2",
  "key33": "2hM3rjmXaquuVdmZ5i7u36sw7eLARHexf6e6sXM9fCFdMzwQ7obRvRWiS4eF6fUBGoy7Vx8jprY7kogSovxxwuxV",
  "key34": "34eo1cYnJVdQ8ePp23LnnzB1Y19xWXUtGMujQ8mPyacPGWZuDfVqqdbBfnp8XZ3Ksg67kHkrcJ5VHpy6wsZ1pkeP",
  "key35": "2Cn6WwxvBCDohoJN8Y7F2TD6wgDoBpmTcuTucdKxTBKJY7Sj3R6VHp1uRrPXnDR86hntPhSJyCt54kxQNsVvvMJq",
  "key36": "5LcDgpnwT4wkyQTwdTNMHJVRrLUZ1V8gWMeYd7n6vywbqRdTxuBqyGJkpuBau75xJKhC54cdAd4n8FN2XLqrSmyt",
  "key37": "55EvD53KNCNWZmwPbwRUpXuVP4ASph7pjHp7fmxpBjJeJDM8UgRaCHeXtpCTVhxtbGvLVL1yokR7MSgVDq3DE2St",
  "key38": "4drnQVvyF98oi6hqc3Svy459JPVvm3kzzuBsbxVVsrzrYuy2sXy19YHSgczbMCv1Rdx5LFPgmPpkGzzXzbAz9bAk",
  "key39": "4rbsnuMsWQxgP8567mZvsQxyJmsF8Gna44tasD48dsSaan3KpVbUf1gQio9WMwX3kMBmrYGVbz2JfgnAiNUytrmk",
  "key40": "19Ase24p4BtN295FPKWbsgaKcTUsyyCy916tZq5gvd6UmqV3wapuQarrbDzqVaq2sWmd6ZCPLc4TE9WvxARKnxx"
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
