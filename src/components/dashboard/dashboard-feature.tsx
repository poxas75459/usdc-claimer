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
    "3BJ4bvwBk8mD2bks61ZPAxwkmeFjcFrxrLAXHHaQqKQMVFL4W2M4hcbxSeBCzCHcCNz7ARgtWnEpu6LXS11Ewdmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bpWwbxBEph2ZZdwvjrhvV4iiYPpPp6r3Y1UgdQhxRQLDforZhzHq1Zre14juH6886LD8pWXWepsPaG8SLpqzGcq",
  "key1": "4h17fKZpx2YYjMN8XMpopYhcAF6jZMRHV4ut3ERv6zebjbg2MDLy9ie9LDiK4kRRWjf5ZBdxCKy7vk1bCuR7Ri1G",
  "key2": "66WamhMFKUP4mLyrRhVSqqJMS5v69bvEifqMEziguhC7w1oupDZNTcsvxta1rcL2Ng3StAmSojSc9eNLsWgpEW47",
  "key3": "gddDDUq1mfVLJ85RM28Lw9mTsZYJm5qLr3J5ZkSdkpMJN5FzfyeA1jZV2MTuDkH4MaQErEToMYqev32zpVi8EVM",
  "key4": "2kwkw4fjhw4QmiEYiSuQojqSZv5Hyed3Z7vGYCTun3QtxGUKHmxVwFYvL7FG7jzpbpQFvWBW4Y4JsFXqN16HtX5Y",
  "key5": "4qvefJo5MP3B1hw7hAgKbu9H6ZdQpstwKDZd3ZWHropLTo2KowYj4DRHBpegoBnEBmpd9TyFqK44amiGcUH61qXe",
  "key6": "mJZNxPnRdGW4fCnDEmGzJBWZtrJgJRgRmWnmjMf75xiUA9ahUghCqAvh12ogLsWqX7PkGXDebv5Z1BUdVTDi5Av",
  "key7": "2SH3dEUfu21u7aR93qgm2aQvALsPx43tSEjtPTbXnividwqjNzrHKxHZxjvAz16WEzBh3cFS2oibw73kXvvCYAUF",
  "key8": "5t5vLVjV7fy2jc1evjpemDPnL7EsCsZnk9SPvSHc51uQSZULGdMsJdaHKZHEae482jJv9KX8HBLzqKrTLxW2C24Z",
  "key9": "5UWBYvgQGVbi5WcT9GobhWevTLzvAwwFVK8ExAgAKTR41BTMANjPEXwGTfH5L3mf9LxUgE1n2zuKiGPMqT1xiCw2",
  "key10": "3JrSaXeyyT2JRq3WkRSNhcZnebaRAsn3za7V6JDgbCXQ1m7Zrfjtyp4t63D8oPbDrqRtBqELRJZrQdGZv97BEm3D",
  "key11": "3zcJFH4uXKaZtyeiF36Q5E5D5JP1P65wjU7wAmHEdCk5YerG4Jguc2RZQDYMY4xj2UZSXg6t624MmqdH4wTgTSKS",
  "key12": "J93UXkit1tPBY16pLSrwJi5jsgRqMJU7rizsnvJ6d5b3s2YZtPXzz7YiuAZUPFCMX6wxX9KoqBk2jmUNrkT3uAo",
  "key13": "5grvh55boxgqbSdwUwo8RMFxVQ1TppWwjY5ca5DgVMsYe79WCtBGsWGCPid48mhcLQa6vxhLUrBK4evQ6aidnnAF",
  "key14": "5m3Y6EoZgKFC9RNnzia8bkBaeKuEAfmPSNuGjCK4UkPBDti2NMxNGsfzd6L79GbVjUZb3ATuN6UCp9uegdjfnnn5",
  "key15": "3Fzak7HPrpeoX15FQY7eU6p2LpcAJHmm8dmMyvDCL6niwvYqrH7qBBkPwxqwBdFLciq76dxyN1asU5wp4Aa6ZVkT",
  "key16": "5MF9QXwUNfcqKNNpa92qeQqKsax2YqA5uDDTqkcFcsmzkkCCPHX6pMvcesft2QR6nJi1fpC9gF1VpTbKEyvk4KG2",
  "key17": "41MvVX6z3RcyFrHgFLkTzB9ZJbMuBZtFsJmcgbBDZEHsVtMYypJMsyvrgSKc1YVzhjgHRP7EiXCTEmh7gUX6R5iE",
  "key18": "kYKRixMtRkEYxkPHvfZnk32h4aDiAzqLMMv8a6p7issaHp76xuAMnw2UAmTRyZWVEcgf7BF3kM2mFJjjk14ocwF",
  "key19": "Qjr373CZSvLRmQaZX8LfMFG75GTM5rq3zAqNHMyvP3xEw547WN2VZVX3r2VfwQBqyuBW6PAk9HXRnPDPJxkzgVL",
  "key20": "2XKQ3v1pBatCNBu1trYbVXv2rRErdutmQDMSQcd3Bc8H1ZGvEL6Uor3yyytuCr7zERkkM1a5n9gr32Uy72cby7YX",
  "key21": "2PBrHTJAEptuSZjEp1VrKz4AinyKs6CrUDHUYfodGhzvQ6GRoBHPZMwm3JrxbKPXQKn35tF1ArVp3T7CD76wCgPK",
  "key22": "3SfvxtvbAjJuJvy8knVRZsd9v1AoccbUezSRHPUrmPtkUPCubXVpw1uXDw5J5yZj3vMzYffofswyf17VkYWGwgsW",
  "key23": "36zLBsbPAj1NYLFa8EaLyzqw3yKkBzV6tQrPNgjoheT2FZ1MASH9HsWsdpxSkeejn8Q6LjtpNNg5ZQEBsCNFoVuC",
  "key24": "4gqJoBZfVDCHhtnBKp38MEMa1cjdhbRAKRDSmrMny75B7B9mrQ5nE3ZxK9enQSduHDzGpkdPW3KW2u9pgvcAr6xW",
  "key25": "2zLGa17tJfVY4Eynfx3Ro7Bv6J3wgTWbta5aDfECgNzDHXCUusQWCnkgLQuJkMzmNsLnHMWcDy4p7nEMEmqnqwgL",
  "key26": "9Du2rVh4nUawiE6YQF6Sn2PnJYQ91boKRZwu8HaWY9N9EGQGRLkcdU4c2bQW6at1BUqxVNLerQVcH5EbbRhidGt",
  "key27": "dYdAGcs3mD8b91yFsu5qqPaZgCfL78hM14NSHHCRLLSx65z8AnPojfx9oBev8psU3a1xJp4SnKTFArid2YaJYHH",
  "key28": "3vGRKwbwZf4gpbBLaR5xv9RuRWz3i5g6RC9wsBinDUGq47Usi7f5j96XrAPVg1zS7K41st1y13Wgdg6FTxygAeKf",
  "key29": "48UVzeVqfJMQmpxMEW9aemQZCcVpTyj28XLWtdy2ogCM24KbuC9MSWV4buYphjpUXJZTAJvbiT9PyiSTxWF7YZC9",
  "key30": "2s3Qs2NgLj6qsQcSg7W3r7mgp1XeKjC5hBzmXGZ7U8VpivftSEi3JUesk3uNCmZMY4BPmKoUQYBGcjjj1L4uHuuo",
  "key31": "23UhUmDRnrEDgWCqhF3XXppJeKHa7mooixSSHR2x7vJtEJanz3meeuxT2Aoh3Szq5xNbwMRCkAJRbEr1b74hw1Xy",
  "key32": "2SeECrUkhDCh18dKHYdf6XqffiuTxuBfg42vWDVp1vRqtahTL7kFABHr791ei7ijnRPjNupYqVTRxGoQj3tgyqhi",
  "key33": "3vgUHkpxG6QnFSzBNS8QrPchdyrabZyfyD5cQmMywY6asE23xFUguLFVhN79gPHNcJSeu3U9QPrsgqDVw3HhKM4X",
  "key34": "27ycZE9FXKAKg6JrqEVCiuGiCPPMk6YvAMVxvG1DAMvMLysVQJnHV7pEbLLvK8YkWxBYjxdC77aa87sCB8BvqqVx",
  "key35": "4j7ayrxTZBoDJxNG2HSqmstA2MwYWZm5RrXUZtneTueCRW6nytfaGvondUe3V2RyTHiEEyFmsAjHjeAp4vgeGmqd",
  "key36": "BXWf29wRBbaQrjBGcdBVRHMxja7YrbUNpVcpNXHxASKdCAiaJYcNRKian6kkFNJxfKSGuzMjgV3yS1RnysCXw5M"
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
