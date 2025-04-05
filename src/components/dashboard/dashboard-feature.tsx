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
    "2NYbucctvQvwAmuC8Qi8Q7Myy7NMUXVTvFV7ZpWjzSb4Q5PuxDuRbqjfwvCHNBsgeQszEXCq1vWv67y2TXZSM6ju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uKCrwyTpAxPZQgYAERSTr9tMVApstUL3z5B8MH6kEmi949vCBpe5u7hrNF9QKXu8AHN3VMxmCsd9W6qS6sg64WX",
  "key1": "5Zn7jnSagEx9f26SCm4EuuLo5anW7MLTeh2Qbjvk5fo8wf5vmdibLUZ2zy2zFaJRzCthoMfTnE34yXtzhjU92BxX",
  "key2": "2YYhg9tmiwyn9YgjGBQWd1XrT5smoVh9VP72gjz6m7sWoGY3gdvFEJkTcnv5sPztAwTHMjByqNbnZukX5zDND5zK",
  "key3": "5KNNrhR8hoQhu7RZxfCMY9kSCU3pnPsPnvdnQ6RoawoRfRyLHWPSAp3H3AcwFL6FNPwqM9RyczR1earzZdFT46tW",
  "key4": "5PBHZFUifYm9pD1jvxz2D8TTXzy2egA2ueoXUYTcQHcpWA23vPTFNyGA1LyWC75QuKNbV1yQnnuaurmdNY7DzzWT",
  "key5": "4zdXgZ9iA5nYB1swAesnULEjsb9KQtUqfYHzY2ZeiskmxYbUvm8D8spNJDhCT3D6ohs6SQvzNF1cAbTWVWEfKSMP",
  "key6": "3My61Kpua8NaueheVXqJdCY4PvGFXoHDjrG4pc9VfWTSzb925evYv87a2sZJ9nfWc4Ftn9vew2JNyB7L6q4PPBS7",
  "key7": "5cMwwy2SoMmEz7cgQ2sTgXYtz1pCbZGvZQ9Vkm756quv7iu1NME1ND6ubYpjH9waaq9tSXdCnuxDR7D1xiNhjYc2",
  "key8": "LYqZ1AtqS57cus9ChHdkqefZxstS47N8XqUqzEyfPhbxWShMqf7q8U7tUUoPmpfnHzDzVh5ERNHs1uskpzGshTM",
  "key9": "P6eqFQsrGbRTMyDuKW5uKYxJShK29tCkCmd94tersNyzBCrwS5fxaS6wgRfbjeCF48Xbcm25Nd82uuPF6UYsM5q",
  "key10": "TJd1NLEQbrZvXrC88mMVpNWsGsGcSrBcEpSaEE437t2L8EjG8m8AWkVVX2jDT1NLuUZtFbpRXQkTQUzFQLjMkND",
  "key11": "UoB7PNmyBJy2gMvzHiRSaovrE8jAkgp1o5nZ9519hR8A8JJmDB7j9vVfH97nMMo8s3CotzHBP49Ps4R4fZ6M9vm",
  "key12": "bZyhiV7HCvweXpkmTpv72dAkpUmuwHdseBJFcrTMdAoLFoN1JfWFTjytN22R67rGr8NxNFwVQ37SSbtGuDSLQK6",
  "key13": "4RzUFrys1CJGtCgahhteN1nqADXYiEsKXa2iWKczUpwmYX8i3GFRhftrxoJB6tsHaFGKALrwB8c8K3hzNgoASuSw",
  "key14": "5TPSbd6dHqXSU2m6ivvKipqQXpPqfCf9mRWguvbyFEvZz5BrJDMWAehrf1HmzAtDY2cF67tcxhubCet4tAMUZe5",
  "key15": "2mr8PwznBprzi5VWGfqXEMTuPpudMwrX7oLexcDArvKTAsXPzyqwRcgPjXmi8jRZpKia1oTkU2KPXhqFm7H8Cio",
  "key16": "4RxJDfUGyBnswpBqzZ8GmR8G7Sg8Jv8zuztu6jG3kkWxK6Xekzt3gJVMozns53qepBmNKxnrGvcPtiwRfPfra1gU",
  "key17": "2UU9BFePGQYMk7gGfTxsbd3n12jNHREiEegK3XrP2iY2f6nzwnQcYqweVBY13SFXqNT7ywnKhKeTczw629P6YUiH",
  "key18": "5A5Z2naYAwtzUpeYBt5AeHNgcuLNw5JRo7GcRcx7umD5zS33UXCR6s9PLEyoAmLSt9RSMxjp38qjEbuWeoLwPtEx",
  "key19": "4VNmbBjBjoAdkWYLSFbgMMxHj7hPqVAPsv1kcftq4nUnGBsSXfaLVpsbiw93ELSxZnzykNuavRv9eTuXucpWxVXd",
  "key20": "32AGQSnhFE6XF1RVCRFz3HrQqEw4ezAvmieTddRuHE6KHtovaHWmPGXk886qEbcwhMqQebP5gk4E8k5RnV4z245A",
  "key21": "2mEtYWosMavzBWJifZ5jXWgzKUTLzzALf3C3YrvmK1FWZ4NLBJfQXTickc6TAXSaYdayPMetoNrmDaxmF8A5s1gV",
  "key22": "5R1QhCjyGhpbnM55v9qvX6eYhcw3ZvN51v9uWUmrYz2HSiL81AXDwfacJFNJ6WgK6r9jjcwCKdoadAVzH3xZ8ZAN",
  "key23": "3i1QG3hNAHNGEk7FsMo51YxaYm1fbSNkRiy5MqKZycq5zB214vA7h45CByKhCNRHNZwstEMCofv8xyugggByA1M9",
  "key24": "3vaEhuM1Lu2K3jt8UxeXr4x8i7uCm9Aa9ueCjCJW8kmtwE6N6pQTDrJLYzMQwSYsCy5jAHDTLVCuYkvfovG3KV85",
  "key25": "E89sj1wQSvbEKEjmgtkgT1Z3WbrgKezx6Go21aEHmPph3xhytZD7STA7DUphvadCoDmeWv6Hbop787UcXe833yR",
  "key26": "4Jq3paifgcbeoMFvskgknQNFp1pEjoRebWgHiSotL9mcbQQMKYrX9tZEF3YF2cHHxotgfBEaLxZCQxX6u5FXxfZa",
  "key27": "2kvP6eVzLd76sZXzJPQUJtRaBqEWpW5w1jnRW6fxXrZDqXqbNC71dc8SRAeyo2QoTBJBdEL7gQK9y9Qdoqyu3hkS",
  "key28": "2YymdEEaEtBPfEANRMr8d7RVXhMfzmDRQJ5gSUHKE4qzvMfpaDypPVaC6yngzfhAiwRdkDvA6B1Rfyu4zqpaN9ZV",
  "key29": "gSRHPSoCwSt3SbnDDRNME7Wt9U5HcMWnczq9zBNgNpJ1xfZ1sVxVCDYmL86DfXTHm65CbVLvY4utQkV3ja6Tv8S",
  "key30": "5sDPiHUeBi12vzAKf3sSGvZvQ1bnSAK8FstUdvULm23vy7tLdmXNFgFqBY7deA3HttufezWWgqWQ9tQq5iDMk2P9",
  "key31": "35TKghsP81xaPodUewDgnwrEUSLgYNvX5fwaYtBuwor1KXiwTAP2EEjQciFQVN2ikwaYDnWDpMs2usrsyBghYebi",
  "key32": "37SNefdt672xxM2f3QpJGSyvhkVRBr1YKBY1dJC45d8h3ynKuj16vYHAXWXJeXkTiDe8T9U8zq5uZRh5SemMnVU6"
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
