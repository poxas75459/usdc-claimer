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
    "XsNbq8RNuYd6bij2mH8AbbNDZAMwJUk7XxB29tLAH9sJnFTZMVyXW9zWJUPBGpKyo9LxU7dj1KtvrYKg5MuvrBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31xLnQXJ54JqRBhkNbsRRQxPSyX9DMyQUQMGUtFTFdmzwRN5WjihFjBhkRZ25PcqDzjH7ewwyKyJM8CyaVEwdoiD",
  "key1": "u9FYZWmtCrEUBpsEo6BMBUfWVgP5kwge3fAuoR8Bq4153iVPpBp3r6UFpU9fSLMG6BgrCnPZQ4kJpD33Xr2zBxK",
  "key2": "Zqxh1QCiDewYPsbksxRxLAdr466WnZQuQZ47aoubm5bKPbcpuxsCDiXQYz3dNQVJ6ecYyAKqKbwyrU1CagQpxVS",
  "key3": "4gWrddsq8n89NeYoywSbtaM7qHVHq9iLDRkQvcDiZZy4669ByouetVYxi4JvmCh6pwrxxCjzBG3hJFTXhMRS9eAd",
  "key4": "3FJAcUokmEh81DAeAoEZ6d9wYuPb8o5mLHBv8dMnnN4PovxKrPrHQ5YUmkE5Vj2LfuThxniBJNzo2s5DuzhrGxqs",
  "key5": "2hRqkyg3SL4iVvSpRwcpoDnQgWkGuDvyLfa6F9BDnV7SKDsHB78RnoZExFFaWhQYtXSH9yJFcf6oMQR6RcqxBRei",
  "key6": "55hvvTTF4b8chNAT5YvLBNCtc3VMCbnXbZmjPpsiQ2rykLjdQkaLZmq4GR1x2kuK3TxezLorVAkTJCUD4fL9rD4r",
  "key7": "zrJ9o3NVACear3TjSVC12dD6zcoFUdcemTvnruLKvehZ4qHUtX21NbL4uAncXwcp7pXrwdhwJ12fREPi8VsqDJP",
  "key8": "hbhszeh5w5SpWq7s3cXxaYZphkBZorpxFysmW5kKkuteS2wdofPi8XgcypCzUuv6dzhgBGiQVZhQPhTruGrVHwY",
  "key9": "5Cwq2HmvDHueaQsToGHA8pM1jDNbSSreFMQqQYKr4eAZFnyHEbrC8LMqr8kn77iZnxrvAuHsg8fApyYKSn3cmfwW",
  "key10": "6JRD9c8yQ2A4649hPknjR2YDK8eF4nMFgMKCFqa2jgKXWoj7biUqgbpQsVhRBAv4QbVNbCrLnFHVJ5rAyWU2sJr",
  "key11": "4SSXnhrq8Gkw9gTdiuqVipiuGj5FssbtV6xJChBo4FH1BnanhqbY4keDH19iYvVhUPPEAwTXvdH516kCtwNGQz6R",
  "key12": "32naMEq92V1zosMndA8VY2nVsERUaHj22M3CE121kzE5SkKtjBpcg8tZFfFbUvZDzPcMBrDsCgTBuy8sXor5Sq3r",
  "key13": "2gauh7L2cvtTmUyiBoQCovJqJCUQvonNNRwsYQ8gJUhUEps5DrmNqogauXLMpLxHw3RSoZNXhrQHSpkEKuXjshcL",
  "key14": "5KoKSX7L7DKD12QE3t2S8b752o3VHgnx8FcZ5o4mg4VoH9s5UMoC7A8dgcbcUcDAfqfieZQrjZJUXfRSc1URSX6i",
  "key15": "4ETMCuty3VjraAmkKaq3ynsGqbXixxKxYshK92oxAu4QzsQuCGJnhxgPUY3KRmiMZjppBAdeCUyUX92RN7omEGe7",
  "key16": "22u5XrvKvo58d3gt9NPBNB25oHyoe2y61wzq1RjcoNAa6tWCv8XzMhss3oHGXzoeBnhw9yVburmRGKko57PJiSKp",
  "key17": "5uXaTRM7QifdGMHrRZL2gRhdbwdjWhwYVG93BLcW4GEfY2iJba55m3S1dJ7pXWw938fyZYvJVJifGSJjuKjb3xg",
  "key18": "5dgcN9q6dzRBYUxdnZ5nFTZGhbCqshi4nG3sv5mMpwUkzMyTqVteYB58ys3RCEp5h9TozsZnJxstkXcZPtSYNg9k",
  "key19": "2c1HZNGuy5v2hFDoT8rrGBzYH9Twbv86psgLh3EdtVuLfEvaYJ1bpeFiqntEsLZKaPrcqskfFMarbZYFJwGEJRpk",
  "key20": "4AA8CKGDrD3WGonnW7wqbGAPtQsV1QWu9ZmorHCKUtynFZ53Kfnje8kpGD2PVx1FNzxbZsFWrdiAXHaHcaxYo6tJ",
  "key21": "3kfwnMk8WKteLeUsBe5boEmbdY2FvmEbqtfXys5TQvyY52hAMd8n5N9wbUMYiLk5frHeVcpdaN4zhevSP7w75Sfv",
  "key22": "3EVQ37aZfAfgAJSnMCWt5bnHz2ZpkLhsY9w4JHeo9osKUu3P2vx1mXqJPU1TDLJMmK2mTGALVipd9L59uR7Sc3UW",
  "key23": "5t4zty1g2dDfMFBdsL2VbCuRvVCNCjepZefkYja3QaCjfueswg92iJtmvbLzgmdd8qh6CboRCGuet9mZJfF8qFHB",
  "key24": "2jjfkBMMzv7ZKTYDGk3RPEZKqBFZbkqWa9zzwG4wvjfEU5m5P3HmQ9FDZokPWMRcEWPqoNNpHFG2mctS4JFDVDyo",
  "key25": "4dfv9scXsEsDKNrbgvwJiXwLbVGDL4Cr4TTAZCWN3mLkJnzSiKp9aYZo11DLMcj8naD9GuS4app4iDQmkCwZbvUp"
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
