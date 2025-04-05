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
    "59E3SMgvBhrmkV8jjK7qCM8zRiEX81RrmUonbWccnDuw4ecgC6GokU3yjFkm3uAxut7bn9xxvg2BTxnrFD1Pp8Y4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43SDxYrTVCpSsFaYfYh8qKa1FutaZXUQBPskTvJmivBcYUexw1awEgaDqyggqrU2MZ44hHadXdp84GhJewfmDKXZ",
  "key1": "4iYg3tGrRCRvBJWZct5G6PMV9YvBabHgg2y7Y4oVdHgxWAjdGVe9CWzjXeShiyYAyXHkYtXc5cNU3riTXwC9NR9W",
  "key2": "2iJfMjkht95QwUwitmEvzRDZtkq5CeiisDUPSH35A9cgBbfFJPaxkdMz5HhVd1J73HzAMiT5oZCpApQtvsdpe11E",
  "key3": "3oBWC6gXKxcauNM82wiW9S5w9AkSeNVMXBsSSkdjTCaopZ6hmHqqYZuQ7hq12KNx1MggxCzZx6m9MPG1vKmpRTA1",
  "key4": "FiKtxPH5yCV2poqFeksnA4p8fZFTYV3hAdQk86ZPHmMuotXQttLAnf35uWsnWkpD2XWUm4wNXoC6WajUZtnj9ch",
  "key5": "4ERahfFS1jhU8CdzSkmUM8sBrXnFRfWh8ZgdK3ZZUjTEp3ZKyAcfUD3pvcAuYwChpCxH5HwLmZeQuwCBBa326iTK",
  "key6": "3MkXYCft8JDT7tQC4YRnTzEPvN9dhJcbNonpnAkNxB6uzcGjntvxE72qGcy8FRwZcqQEmUhPSRND9WGeMiQJj3my",
  "key7": "5cVvSWKp73W1i18KjhjGWh8Ca4woG6dkeFsNqVFND75c4ZThEhJqnvt9QtWLiBpUbAH11wGpgZvRnDhTu1NnMe9b",
  "key8": "2RCkscj8hUbm4wCXobYkAvHDPEWXRvWFAqELEyb178F4pwRkYhVW7esFjwB5jaPeg4e1YE5pbaaZmZaqPLWYFLnd",
  "key9": "2CXb7kimUwPpzad6vakaJzjVLo9wDyncRZk4JjqufjBsNLGSnh8KdYFsyUKTiHueqNk1ksQBhtwH93uFutdv5Nsk",
  "key10": "waRniMWx7ioxFDyY4nyuUAbJYftTUJyRAMMW6XPC2shh8P3QuNKWqzfrX9RHHKR3vWu8mPRatmc5kzcpi83GRuC",
  "key11": "28TweyLw4kNE8PAMqi1JYy6EnCZqS4k1GsaqEWY8VMMBHeWYocMi5poDen9QQA51u4T9soLJ2U3Fe5zaQ42LnLCa",
  "key12": "3G4Bq9VHEFEQxsNa3vWX5YFnsr5x1ko18A1jbS1NPTVvYsUX5iDWZ7Z325nhkMqc4x8b5i5sro6nyimqvuxntweh",
  "key13": "28xmcE99XNsQ7t6yVj7vfgpNyohVQ7TjTGxDaGX2nqrRHHwKy8wLvZNAMDmKwdYNx3XQgfv3DVbt17z4qkb3oZ5z",
  "key14": "QnrDm2kAayr9JwvAcwBavb26hEEahBnGkk9gFuWrVCqzi2TsGr6oGJ4kWxqwdiYfqSJ4ecMfCt2JAi61sX3RETM",
  "key15": "3EyzT1zLTLN8s4tcf6bELNTGsU2RL5AXsvxrjVLP5XDayACULzU2JgRjqUEteRz9vqKxfiw98MkLTkQeHf9GsP72",
  "key16": "2m77uipLh988UK8eCPxbEp1ug6iJqzeLPShCX9m3b2dzRhzyHCLXMgkTCGCdMUmw91Cy4rCRfXaPhAMnVRJ9dL57",
  "key17": "2817my1111FwG4g8B9AJZ7UUPo7ATbocg3crDmjR7T25p3Q2GR63i6DizJfjLhuPWzkquEN94QREaW9tnT4Kb4x2",
  "key18": "4EkWaZMUcoT3jKrVBWe1KcQvkwitrmMi2LbFf1oRH8yuy3jBEG2HSBLRyKGxB3L3BUzoMGXhNNdEkpDAyQQm1Dm9",
  "key19": "5kc22h8h36pEncLxzD1MQQdWQfWWCoFusp294vx99DVmW629M2s6p2DTFHbpovErdMMfPwgWn7R76rjyQhesEpAR",
  "key20": "nUaTr3J3si5YxKvxmAYp2kYKrH1LmmfMznZ3znXmJevZwzcWuqXK1Lge5N6GzXtuPkbmzrZ9BcoriHrx1TsQnU1",
  "key21": "4Wp2ZdjvgA5HVmUaL16oxYpD4EymrEozq9FtmHrJzxmrmTKERzpSv3bbJv6VjJQJ2vogqGxz1khxTpWpFrvYvpGQ",
  "key22": "2ZaqYa4vtbdTutGAEPFqFLJN2DfnmyZtwV5ZQqa91guVKByy2qSgUsyt5zm1kb9DFwaiSNYcEaDq3DALLSqiAAZS",
  "key23": "frXdgkEXYooKsZhZiFad4wweuw3Wt33wgxTDTij8KXtYkmah577b9bCgSaKvhENUwUuQfKMkFtLEZJ8m3wxcqKq",
  "key24": "8gktpNBn77WMbM2jsGMzFge4bz22iyMKNwy4dhJTJpwrSDsQVbAdfmZ9o9ACLLXAEQV44zvQVP9FXAKChDtehp9",
  "key25": "4N3s53tZk2fYXtbczU4u9ypWiJcAh5piduTGGZk6HDB6pe1z5B7Ku4BTGj6YJjN6ZVCwEKUtiL28LR2EXV6YdQXi",
  "key26": "nBjudtfUpS7iQhPtgwEXkkES282YgDsSXNxb3qtNUhGXErEfEUJ8u7ymWX8Rja45zDeutMmUcqzJzsJ7FsZmMjz",
  "key27": "3EPKKfMZsC1FMAj7U75TgAnRTUoaf571GbG4h4FoZD4Pb3muokgrG7ZnKtBscKgGWxbmH8vxoNguDTByNSvMzxTS",
  "key28": "2w6hLTDG65YnoyevBcSpGjRiMX1JCpFJsauVmMxFAEMaCcbKYQzJP6xTpaWrwF4uEpfXPduhzK8dn1neBEse73Un",
  "key29": "5qTRxRJwjkc5ReNxQLZ2objMot3bMDhxUNiSqCmitLtxVJXghXxetS3tJwa1g1fXaTAhDCor57xcoFNpwLfGrpmc",
  "key30": "67MctUJEg83k6YDiC2CZGTryXMrvqpjjkcoyvgCQYM2qxx9AJ9vQoGCirHb7jzPdCdRoTyGuHbVmUY8oURmPbE2B",
  "key31": "2yX38FTKoLTEAGGRp25npxpjQfRADWtWYPecbRkAjdQAwnR1fyDFZMMuWyYkfYynviUWnRywm4QZTX8HaZ9kvmZQ",
  "key32": "628EVAAkq8jvG9Z44jnGNCKWDSTnpeGCykpJRrXKnXFDCDFgead6HMXv3oZberWLiraFzLBTXyVuj9xzjFWgfjYF",
  "key33": "ar1EPgbWUHyxCeVJNatvGhmMj6Q5yR7ASo9Md4XKGjuSuR5ucCTvrTSzgmrDNm4f4KEMn9us4TpCYJ1G5M4DoCz",
  "key34": "5QiR6Pm7SvKb7oHFZJJ2nRWawGh5HfFDN5Hwy84VNjWmr5KHo6Ko7fimRt8hRhrit361Z3CfYb2YPSoFeunpaCDj",
  "key35": "54XGgjX4T1HujUh4o7WcRyH5Fq73cSv7y9NeqzsPKG5mzzQqGwsTxGz8ffeP9Z1GF9uXj67Ps1KrzAMWCaMA2WeV",
  "key36": "3LZ7yWxJ1efeAmY8LdpdCwYo8fgqBNKBzNcVLERYF5Yawwmwnk619kmjam1agg7u6Jh1JQA3fvji6x9HUDaRZ4vr"
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
