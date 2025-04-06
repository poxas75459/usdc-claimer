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
    "HAV9L2hiQkAhhvCp1YVbiNaVB9fBSpAKSmhL642VaE7cotYLUMpd1VGauErvYKFEiEjZBW5SoFyYK5zdRg8HAoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ohQsHznimbaZE4sWhGdaomrAUgzCshudByEAxiyWSby4sBGjogkGnwXm1spUmvUWXJQKrFg6auzrkUr2YKjxjDf",
  "key1": "2KEfCXehiUHLjDdBDLgv4DmmNafBythCN2yok1tXoxmb3Hf8cJqJ6uvJmvLFxwCJWKUQQmTRMDN7ifs2ZBc5HbmJ",
  "key2": "TwdruTJsiZE7H4jYkjA1HhNUbCSnzC7n4L9Kx4KcC2uC22MQ5AcN3nLnJs9NVT1GXWGFxVgmSodgxUgVvy4QKQk",
  "key3": "6qb7WcmAp67PPxhstZvFYEgvWHuhQpE9xqQX3uSN53fmGTMcFBjTGPwyJvZzQPodsZtxvNT93hurYNP7sjxCAap",
  "key4": "5hG4FPADHhsLAdkYUKWbn4erNVxHwZ2UnytHC7EfkTZjvvs7qKwix7nKNoF4tEJWAowoDXwtNKt5rXkyc9vdDr4Z",
  "key5": "3QgrpwXLHtKKwfAVtJ4iDdbjzMCVNbaBQGybop81kuoAk1hZmxt45VNfTPnTgaTTbdtPLXP9bxN9uiwu6rFbFexm",
  "key6": "2pKAY1VNs5rH4o1teQsMVbpJafe9nXS167kqPVrA1UfxNUHuA5gfqM97dyzURC3tN38YSwDPQ6WC97TKjs4Rjb3H",
  "key7": "2Aic6STr8BqaJPEaqTdgtfhhMREaDC6Govu2jYRNM1cJkaiwCMEJsNCtt6FTSdtkWg95gWp68cuhXBgzeX3DxVef",
  "key8": "3JtPH4j65o4aumWBdTdcPF9FrMz3z95X5VLeSvXSoqaRy3zVFCccNjpy4siKrp2ZMGZCKjWU3uEbqL1LJNrkeHGU",
  "key9": "2zcWz5UGLQ1azZ6cUi4Qqpn4jPG7iQvDe5H7ce3DYkimMv7TkoqBqaHxMtYj9yAWpDmSwRR8mSXq3oaXCugDwZzn",
  "key10": "3n4UZH4CWSg9VEQf71ggLwN19dB7P352KYbeaBF87MgR4fsWV9212YtHFyY5RBEHGcWmmgbChcftpHUfjSQkRD8d",
  "key11": "5gknJ8AEvS7fSAS9cRDobnTC276yKRGr2guXjKHE5E9sUDKZJzkNDYvHG6fvuCpayWozjQ7dNm4aXnFUxk4eckUH",
  "key12": "4TfKXhM41xm1iHY9Kf89X1YGMC4gGZdmcH4QjocihhkZ2W1YL6qJTvyRBDRTec16zrYtoZFSJKtkgBG4JsfTNzvg",
  "key13": "3msutvwtNrqmNdkVkPfrKNH4A93hqHghC1dL8KQsyD1HXBBvFyW1hiEMjZvux5EqW6bvfMPxCADHaV7Ddp2LMg75",
  "key14": "32CHuHKxLeSxAL32tQiQb4HFc835AXY1jaB8AdGhxGtKFyP8u3DxibjABJGNT4Utff3gPGiX7FS62UPLfwZxwzo9",
  "key15": "3iAoNPw8uWSZog5ej94yGQhram1esLMJmUMviw4aoUpNE9QDqkjSWePo7oBhAv55Rb4R7GYhwNC8y6D4sTkGHPDA",
  "key16": "4719Q79CqtReka83NC9CzS79NAKNoP2zxa8b15NqPgHkVKsbZDWMRmr8g14PS8fTqwDqshqJrgK9mpkJ2AC8h2N7",
  "key17": "5hkZ8ySW7NSqBkVKdStWNLvpQxQihs3Q6Mmc5rFFjhrzeWjpPe3o4NvFjW2opAYAu1ph4zxs6PAVRV87ZssGLHeW",
  "key18": "56vvAu11DGV8vJziDjszZmjFhgYzFguALtds6RDbz7BNuEH1LPQJnT8AU2oBqtGs9xUeHijVG1oNbdpghh1wKWc8",
  "key19": "53dKa5PFLL9dy8tmpubywGhXTARoTmp9RfbsekQdkzaXjQtnXiXk4AtnwgkoWnVRnUFWdDANKqMNhdVfnjW7Q1nV",
  "key20": "2g6bq1YDhjLD2xJjTP7XkksnYmHrHHCkMnMr24tCWwm5dFRWhspLDae9h4h5APjvzJ7B9h2RmpKm45UGEm6P1jBe",
  "key21": "4q519LqLjdZCGaks5UNTZqUmM3ZH6i9rJqHHVSpUFjqycwRLFJMf2uyGsmTVVgtKkTLQ832jmnYkGwY99EUPEkCM",
  "key22": "5Vmh9jyy5Bqqw4bp82xHRA7ZQsYnNJGyczdMopAgeegVztpghLJHJmdFQ1USHm6xgBgpijW8doFPHCuVxDDGv5JW",
  "key23": "3C9G82PPcpRTXBfjLY2siEjcFqPCBDNNB4CcW6KV6RCng97bFN9NnFS2654efVHgkzHCkgkHfD46frX3wNDysBWE",
  "key24": "5ee194GKdPEdDjje5B8XNuiGQuZon6YMjqsJstCeT5UBXFFz6tGFaDSsJtW564Kte1TdBmRNzFRQPduoNkG2aAcR"
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
