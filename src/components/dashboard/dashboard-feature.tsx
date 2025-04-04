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
    "2fZmxRwrpqWy7EQDmQkehqzALWMKdQnLpenYfYv5Gv8F6GQQRFyuGRAyKuynrAf4v8Q42BAa11egK5jZYqMonPt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tmj3Xnkf6pRstNcRSMjhpQE1dD47t5MYDgH4JToTcxJbFUBzfcoUM7SEpD1K6EnxzfXpRBCQFRK4HBmuCYa6Ue5",
  "key1": "jcP1jtsU17QvXCrWGWMVLXgw3LLepnCZGzctAqjvGh683eexJK4fiJFvRuRVaUD99UWZa6tNkrSd4ajp4vnm4gn",
  "key2": "ScW1nZEn7krAGm4TbNrSgYQeZq1jhDaXH6crJwz8eeZW3QZhYupuxAfGfVZuj8d7ASQMob7Cw2LoiGsZWRj7XYn",
  "key3": "3rCjRgSWmxeqSsUhp8FfVQ6pntnZgJeSy1gLYsjmPeeVwMC1bgqLxeyNRkg9BmRqLm8KDAdFGe7fjhhptw3tXsVU",
  "key4": "2ekkFPrvKCCNvxtjwS9h1sREEQrDahMFAbUg1VhE7GZcGko6d5GJmBeAKFYhDqAcrc9CgoW5PuLgAw5s2obxeQpF",
  "key5": "hu7RwepzzyYaVpbuE4t7UCuVoHecHpg3a1GokZ5MhmeYErAZyTpwaqwmxRKn8UG4GxJi6LsUMrf3iheuBihQygq",
  "key6": "3UQ7Px6bashzfrnnZZC66cWtS4qpvamddiG5QZRbBpfM94SM4VbWfVvViE5iJ9TeXGPpdQ1xptE6GpAN1WhhANZE",
  "key7": "3sSVyvXtGo9hw8g9uYvCHtmZaVNVbVbgYyVqbhVm3qnxHuy3VQXkmHC8D8Pmja7E91o2mDMCtW4hH72gPc2SiPtL",
  "key8": "47VEh7axJNd3keMCFsTEyjjhihPJ2bU2n9UZ5S9nkyBRiNCEXQg7N6fXGR3vd7fzWz88oiiDcdJYHckeNkM8d8va",
  "key9": "5zKfCqgPgpWZFp7cZbmp91MC1T4UdkuBS3pNDHiGzikxPccV726qwsmcmhTGSsSALyVLqvERRXRxWSr8rARvMHJn",
  "key10": "4qojd6TvsyqFnVLMS37C8vazMo37PMG6K5TLEB6YqojhoGbEdyXNX6seVq8D6Fb25p2jcQuHfAzwoh3XE5A7HfzZ",
  "key11": "5NyB7oVnymC1i4A4vWVcbMgyjLmQ2KVkYZKXSJ567HzpMi9bww1Ug3UMnCFLqzgW21KhFDyV6M66j2kEzEDoYtxR",
  "key12": "y4gDwBQKGmE2UCqS2FCV2neBFdYQCHcNcBG8Dxj8Hf6YJwkPaoPHc5V3pn853GtLT5BajAjTgF2neZCxcHjNPkS",
  "key13": "2wb3HSNWVEmGnqRhC6sY45ir6a6BoRg1BDxHXxLpRNoigRHUZy9D5MbveareUp2epdD2McWxSbjNp8L7wzPCGHCJ",
  "key14": "4PXPP76nXoYAfFzZwUVNWh6EAyh7Mc6uf7ZQCNw4VwTXEXaK26pE2ukWzUQwPK4JBpaJzxnsvi3tGJPdfoGZ3c5U",
  "key15": "3chebUjupdDeJn8atGWc6hoNy7jwGxagQW2XTEEdy2HJmTYHBXY9kYEVVGNcWMNtgGsWXQDituSGwjRZDcHAnUfs",
  "key16": "Bz3mW66tnhbMsiiCMVn2di7QyM41tstqutENkozdmjMqwqnFHVzQTwzRvxiJQcnxbGJH7F3H33xRAfrJGEsc751",
  "key17": "3xG8HxY49FTu6i9wqGbjNQoBHU1WMACkYiiNJPzhLNk66akfzUQb6AseKktxM9derhxxp8chMvueETzzGdQjdVvY",
  "key18": "334Nck2H18sWsWCt6SNq8rtePErz5J4iKzawDNY5GRmHLBofTqtLm8afEgFeZtT568qmXXyNWXs2NCy4bwPTx3o7",
  "key19": "5JuZFcSR5JdommdM7sfgGUjQXTt7uUdvuhV5ejjMmqKu83LG1mJY6NAVzSStvRyYFjnYfENAwAuC53gYfpB6FbSU",
  "key20": "5zorPUm6PRaoorT8j2D8wY1zKLBcNg8vp4k4Gvd5Fq5k2ckgjcuZFUWfKD7BNLo4GcseeqpVQwkgEk4oDheTANax",
  "key21": "2XJmc2DYELNN6hc1rzqZyuRaab7ZSygV3iAUzqffzuKPDbdxNGHNzP4vPsD9J4tf6dgmCSrsVxHt9UZ2juNq4DwK",
  "key22": "naXDcpvMPPmfmsRfk4veYpYu25Df9mRDBsVpPi8MGjFWPfHL6rXUk2Mc6KGCjDfUQoDyBhyaJhTv1XMBnFvk8oA",
  "key23": "ZGJ6oy9Mw2wsyzWnQn197ikFKL7VBPRtf8UU89fMKQVm8JX2uNqaFGWd1DVnxSRKZfwNS5XnhFrGWoiRJqK2yqb",
  "key24": "6DpoXQ7nq3XUDYepEDhFnZbSj2kmj6R3C5VEnCFyhQiwZD46yZSbVRaStLn5oxzPmNVxgyBjhx6zy953sNVjtCR",
  "key25": "51Xiwy3rfdr1mWPM7Q388iRY2jhKdsrHsPrYy6J7hFowDecqTHe53qKz3P6e6F7R4mtpAst27PRR7NasXcsoyjom",
  "key26": "334HpmzPS8Nco3DA4JZApuKmtp4i2szvRNyFTuBqANWSBiDG7rXPpcCCnbyz2R1krXVr7DnEV2SFsmzCPnbcMxE9",
  "key27": "5twXWcNi8mVm9YpHCNhnUZVK5v9tYSQy1aJhLPnA37md5KDdHG9iA5dB3vMJ1e65z229BqkhPzvMGAANyCtTRKYG",
  "key28": "2MDcmbGuqNGwdpKGSjbMnqKUAnRGvzrdECZhqXLt4kykaYaNo4vEkhGUfqs69paacte6zqHRbbStkiMG3PDripNL",
  "key29": "65QA3UcuTZ9D31TJnWb6BC3wpLc9Qvieo8rNtsN7QbAi5W4L3DtdnHNycHKXW1JsSny1FdsrkVTFTSC4KHg5EvCF",
  "key30": "46bFF4qC2ZjbyojCiuSnMMuT8UWBV7ndF36qSGRY8nrvtXaU2jcsaR8Ay776Gih2hVqKbqV59XuvZRZNmX3oSXtC",
  "key31": "aEmowKrvSQ9wxVFrGLaD8Qwj4BDWUjsSs6oGUP1giWjUMiWxhNNY3sNtYxmpoVKqvj3ct7hA2qykmmRq6oXBcoi",
  "key32": "36UgxL2KvTDQbA8SUKeKdAgocxpQQ7Unuh95P436tip59vB2Cx7ypWqVVALegHmBbNSxyJ6xZ74Yt8nEadjxpaxs",
  "key33": "4ZedpVBzN4JNtCwWePBTjZMTH71CGSDYVCrNxVFBSRsp49XtVp3urrByF5YkQCudR8vf5sK632FwqYCfuYd3NwwU"
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
