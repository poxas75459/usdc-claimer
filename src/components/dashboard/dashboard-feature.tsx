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
    "2uRRtnB6iBbMDAYEd6mAK1UuxAeNL82LJnQne6jCFfVcpr6hkNiaAL1eg5YgtEAvUFChopKciZJwyMrpsUuhhVSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p8WBpWqVs9Je47zVu7jpkaJhiRdnL1RAV35Wwbjdnuq93FSc9pkvNN9Vqa4RKm6okgxXKA9TW9kmCBr23pTvYxk",
  "key1": "nmYp44fRB112AXcKE9duQFeupRWUEWWk7t3vqWSP21jeFg5qqctsJWGqzEW6WyaYzwJ2XQeddvwU5b3zEUHWamA",
  "key2": "5BpknprKUhxVR9ufAPmqLqjx6NrAtUM4KRneN1yLVPULT6oSyXLXDtivrDvuUoVZevvdQuj3HD9s7WnkiG9RUs5Z",
  "key3": "3Q3hxv9E4BAXb9Pw9Ba6GptB7Y3zYCcKKmcoTSyjqaaexV1hXo6HLpF9rdyaVEjxfr3oU83N4VcEZrs6K81ZyBi6",
  "key4": "3jVmQx3M9fxnWiC6hTEdWPdbYVKggVCuahfQq3pmVEBnC3SZCdB7tx6i11kPc4DkFasuHRsVXaT9aDphbrpVBxBr",
  "key5": "3ghgfDm7aC7CmT3N4GvbBBxinKxn3r8ifP3ZGrREEMnH4qpa212KwJcJNonyFjiauSwnQAHePf2eQNkjPSZrfA48",
  "key6": "5FRsKrkTgfqMZyJEF4P2Km2LbmgtqnYUiPnWMWPbsZmLFdcFUHRY8akxVs7E78WGk5YQKi6UN7oSrG4hbikgCbnZ",
  "key7": "2hfE2o1VQhNEs9jfF8mM7MJUE1ypWELJHS8MFvpZ59rhA54GtX8449U6n2TTMCzdyFBSZkxdLkhmKX43KwLMcnn2",
  "key8": "6218GuBFqqMc9Pf2W3SWDA8tkKZqrYDzJUL5TZpn7fYLrjLzzkA22ZSA5byX2jdnzLGeiSsXTvQQaWRt97XTBhct",
  "key9": "3WB8LLvsmJBdtsGThLaUGZMnCW14ZiWiHXsfME3ii5o3nbfR6xfTMn4cA4Axwx8n7NbGZ3YZHacYob33Fn5VNpk8",
  "key10": "pygrEHuJa8B8zqpnsTwFbKkm4dgBdW1Fik6YtZM775qvFtNeN5d4i1AeNt2F4vQu4ATL2fhp9BhPCoRrsH2Rfp4",
  "key11": "3x9Y7dLbu9T5UJ9QV48vhf5aU5eRkq415FNzR8kctHmkWPjFf6ZSsy4ufaBwcybV2Z16N9pSDpYSJkMadXqpZiTQ",
  "key12": "3iuGqx1Ub1JU3mcFzVBTmMsvwQpwW2HLi8k3G8K4zWCeH3MaAU2JEs5eLs7V42y4jQpWJyGHqYtVH11ApBDDEGzC",
  "key13": "4upHdi4iQ2uVQULmxv5YU7r3PwrGjT2dC6YAA2139t9ZkhMXQTEbAGpeDQH3qpuHnpR7KxEPdtvVSB1p6tLoZfDA",
  "key14": "vwcD8aLBKvtcNTs3LhZeJsvep4PnWmHgmDc4niS9kCf96Eyic5u7dwyqEFGQVCe9xr7bcoC6PtutMEsPj6ijvZz",
  "key15": "bVNd8PJDwhfjquYzsX52vcYpCF5jw9FmXSGARjv4VTYqwnH6PvayRkAE7s1ioArroua39ezcDsJ5ooZTa3rQAs4",
  "key16": "4kKngLJnnWgVfYUcCmijUYbZxboZFTJ8gM96o3BcrkDQfU9XfcjU53mEvo9haFsMbnqYCyTRMKsbWxbJzZeVmtSX",
  "key17": "Aj9S6hY2ejerudiUTjEQQijDggotrDMGTpmC55tDk6z56Tq5P1ZSWycqcPm2eHXGfP95H5AUTAyw6DghzsbjRYA",
  "key18": "4svFMgdphgr4LJ923xQNFGDaeXdBuRps8g97pL7AwvY2GU4S2tXHuX7tibSVeKnFxbc1Pu9TpGKJR6nvSRssJbiU",
  "key19": "4VaYfRJt9HiyP18d5c11nR3QEKS5bqTj2zZmE2Gswstmb7VZ7LzEajSkpUYU2XkTJgg1sJWSSv4zm7KfdDa9L1yg",
  "key20": "2PimmrdMb2XScg6N35vzy673zugtfaEmoCE2ff7NKBJAPX7t9LGHiRkhvpDtVJPq5Zuv13m9XegSJxxznEm2kYfE",
  "key21": "2zUctgdBLJshEUodESRN9kpp19qkNzVjTy4P84HfLtqPdJjyxE1bsN1VsVqr3RXjNcazCq9MTUFw64ctTnMpjARD",
  "key22": "2xkU5xVQZ2KeJeac3RVf1cbWj73uLPEPRgyw9BYbWFJa3nuw78H2L61FZ461nXZyFpD8xg4touTwDxfEuXkxLN8T",
  "key23": "3vugEzzEn9fNJa1zxiRuR8BRSRMMWwxJY8aykzsyUAVgcvucDVoBLyeTwykQEfWHDrY36phu9m3o3FrLi3TpQxxR",
  "key24": "2kTMn4ruxYbtgCGgcCM5SDPa8WTjxVqovTrJ8zNezPRrK5Tgf5udVkqSmSuQESYdkoM4hunCUddMGohpR2HNnUzz",
  "key25": "2JUcjfmx4LZ3WXmHzBrruxcuG9U3MPfg2VStgQLUFju9X5fdbar3iEEBNigWUnSGsoHGZahuPnz8e1RH5g8GYTKV",
  "key26": "48d84WYGZZfbvXp9o7zcqURUzZvH8xaHFN6jRQEktTZQjU6uB4vgQyLbimubFBPJVfLkN7yZ94Tpp5nr9Dizy89g",
  "key27": "ZvvmYNvyu2RVXefyBntGKsuAJnz3qR4XZUrHVaxvp99VdKSQMS6pzpVDrJsL14gTDEztAfvDtXimaoLG9SJQfpg",
  "key28": "4Hsj5h95qAtinjD4pbZZKaCuN74zjHNwjLXSLBopufxC7nZPke5x78JXaFPTpWqVmMdnnm5XHc5ji7V43JVrAkHz",
  "key29": "42cbf28PaJ3WVPyfJSVTjbRUhvuCoSGKX7SMDpuEnDXLiUmq9kmGiawbWobG3gY5KAbjsyCay8764sjL9TQnSb8j",
  "key30": "21yQqvMHUzCg9UMi1Afgo3atGJi8ehWGNeGDyGVspm5BeMhoYop2iXRsEAYph1ALvgfXa7YzKyfcGY1PfWWuUuTj",
  "key31": "4896vkWVeipdecbBzsSd6WnfhLdLmh41P4a2F7ieurY9JCQ7CHkFFJJm92sYneFzfrxJqh1nh5pUMy7sFJnY3JAs",
  "key32": "5dk1sF46Bgf7kRF71Ge4vvwozjejBQ2fgMi7awzwg3gjDEiErQfNw55rH5N6n2uKuEfacxbiwPq5fYhnV6AzHZTj",
  "key33": "4Pjd7TJurY6CytMC8UMzV7PkxrhjbRCeWs7sLvtUqPYWD5wnZDw8R6CYeDBhHHGDdroQLwoSZAMuNbTn1JKSXwcU",
  "key34": "24dKJXUE3g9P2Q9hXF7D2Gnuvy2yUq9ipTDFmubweGRcVDXKKWooLSjcMtaENTZtvwqJUJH7qH5ZBXJTbz1JGyLY"
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
