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
    "whajvZnkCLkAHnydgkmVkfrg7A5GgTAhtQRKxwS96JBd21TZvsfCHjm4by7jVqHtcBj92G8cT8KFrooj74dFtsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FxUH7jpW1uSAWioUASjUVr6PHVjghfR18J2qkxfGVrcBL2oqQgAYt6RtP7NKXYFDxtFKAt9GVbQhbLD41GEhbe3",
  "key1": "4UpLzMoUkozs8CfDW38hQaG3LTm4KWpoVxMRXarL2fSmDUytpywdkVN1TnQbi5RfeSEpV6oNCP9Cavtni6sh3Moh",
  "key2": "44q28hVoBpnUjETXyoeMFKir8DAdJ6aaz3Y4JoLs7oxbR8x4CSyeQmXoCf3AkqEsssdGk6S9KebkEiZR8DfvotSH",
  "key3": "4fbDtUuMGsMC4SxZMt53qPySGyJAsS7BpX51zxRxUGSVkBuXVxhMfSEVAV4XETf4BDC1xiNPNKE6kkfpQyDbrp8o",
  "key4": "4AXrQMMaN5LiyTAha2wgRmfubLvnTD59XggJxtnGvz6qQKLhdcftjNWGoQpvT9HAcrjrSErtNHBkMfTk1bJ8tHzV",
  "key5": "5kcpXDy61aRpcFbSPssTBmiW6GJ6ZYWUer5sASquGLXie3TP1xyTKmUDjxwzC4s9V2vGnYRztxcDrmvQvBS4CFAc",
  "key6": "fX1rkCht9V1fzSQx4YnF8GKVTSFAjKr18MJDWa4Y2idP4x9BU8wwb4YXAkJ5FAQk68SVpUUtxPBrGM3xr97x7U3",
  "key7": "5YtHBqSfSZnHRM44pauybACsKU67Xw9vKfAnj5noCAdamhyeAQB6xZv4jKzV5UDZRW1Xj6hJtLq9oE6ZtZ3Xq6i6",
  "key8": "5yinXmpuNeFGEPv7efAq7xyzYMevESLTFPwXE85yLqnzSvBTh5KTu8SQwZqeqKz8bahdk6f758XMmKtuUdWPMNry",
  "key9": "2gqc9fHWMifxCSCPoN7pM662nER79KLsNZ1X1VBFYwunMv4fwEFtsRBYqwQQyCCR5G1kNmaAZw33ixrgvyNAD3Mc",
  "key10": "5uR5edW5ATdGMogKm9gFez2orzbwZZdyyYBGRHmJpwv6HxurtRbEPAaZ7zyXGYpyHhBQuKE36XK2gKE4cg8Y3hC8",
  "key11": "39n45FoYR8hVDypxEERmruFFnVRqVk6CTt5MsfssAHRGZtdwYKtZpxQFPbx4S3oKXqfe5ehypd996Xd6c5Ux4ZRv",
  "key12": "2ynFQThmry84RTsUmzVHGnmeJdgQ3XWkKQox7umfWuzbM7zguAqbsmn63aQoL76qJTMV8i7SciVpbR2WLqjGkv6z",
  "key13": "ZDA6tNCciFfa7xEFn25trd72VdTtDXmy2GdLEGB81dCwnPzFArkBYNrtLU3LCCRvnHLQstCySynbGNymjqFwAJE",
  "key14": "3QA4EUcx4KeVW5LVPXRSCCyLkS8iSBpiDKDngk7tPeRajxU6tvVNoVSdww6cwmuf9jf37FvDyHqFX1PPyKEJKiya",
  "key15": "qNT87ig8XJT7QpoZ7k9JK8rhKrwtTyg8ukueK7oMDsW9QomsaXNDwAqxUmK9LygE2yxWmkTZFw2G5Rw6otyzd4e",
  "key16": "3zNJnNEQ8TaPd3DTNFeDJ2fkoDkQAut24rhXowzFEn5xFEUsXyAsLRnUPMVgY6vZCPr4rNGNhBGSwmXxKVdZoftK",
  "key17": "DMNHEQfeWsjfgX1GZQVkG7UjmmREiieuBrCKFEFBS4VazRmPcwupeUKKaunXHU2p6SL5ZjJUXWhi5ah9JRbh5q4",
  "key18": "2f4dukKKRRYjpxU1t38KLwKFbWut3GtysGbjSXh2QJXvHQNokCLVohB1CN3PXfouYU4HXAYoZ2HV8cG1ZHz4qQg6",
  "key19": "5zh9YgDzZrjD4T9mXJLG8W2e9uXHVKKJ5m9Y8kttP2KhdXwuccXTC4tXZHEKmHXDP4oeav1BNAzaCr1eVS7oH8Tv",
  "key20": "PoDKuAnyKeGtqrSrKMLqst9u7bchzgK1iFN3R3kUniaxgfCvPsB7nLacEHRw4zN9fq6CL8bRUetE3soJFCY3vqT",
  "key21": "5fd7cQo4jHALtWG3bQ7rNyJdGg2baryM9rPmE7SFg4VXqUsgmNYAPQxMQZHHyeZRqHToRCyhvqH1fPmnPwM8715S",
  "key22": "28X6Kahyuwyo2YsZPgaMWmCd8bYnrDoBccjQPUf4EbQu2MTvdmRp2RS3MyYJiHTFP2pvhdX3VxkZpRMr74T8JPqq",
  "key23": "dPjzNYvYuTicufGiNYneWTf54dfY56UCAUoenKWRtkvW1aSyUzQe3YhA8S4WM7BsSfsbnfAVP9NLbkoYW4hZMky",
  "key24": "HTUBajgQwt45j5YM36a6cqYBCY6JP6k6vEJniB69C2mJqZDYxgoE2SiWnQh9NJPWAJuregr6NFwPeke2Mqek8JH",
  "key25": "4H5oGa1pkGQP7NbtgFBgGkaGo9mLQCdgsuRiG44fLaiDY5oHrNbDDRkjqMKvQdTmZpgD3h7pXVWity9sxHoitouG",
  "key26": "3QAYuEqe7uctuhNEd1cvN5E1kDNVRa2D5HXJQc4whHA3kJjw6KcUEN92L8bR9cBXBteUaWGNd776e5zJAeUVES18",
  "key27": "4xXHiJVc6AoDfZQ468R8k8yv5R25gy7K5u5t72N3ZT6sY8JGKSXexJWJsCzNNtUS2s5X34SKMTLTDF936CpQUnVW"
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
