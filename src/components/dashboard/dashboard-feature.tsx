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
    "5oL2hPm1rkY9KxV4ubcEi1VCyL8LfEL8kif6r4HHPUarUiPBgbFkX1AoKtRCHNnngd8pohQE8LanqYCMGr5YWTEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xidT6en5JY4S17dcztsEUgn9bxDQh5qiZTm8fW83mrsZogcnYqn8pPJKLjFWejjzjN1Cig9FYj6C8i8MgCiKipa",
  "key1": "LJq6tUBKFyvjKW9GTUNLqh6TzAeMshHUyZeHYYeekmBi9iyUbc1bSD7HZphqFGHp6vyHmURBnvWDbayPG3wABB8",
  "key2": "5f3KFKdBChhRu2ysnMd1g9WUx3xcZPSpEhbh1fWf6uMoosB9VeUW2qm2KwnBLP1apWXYmYDSjE7eSqBH5RjijCMc",
  "key3": "5Mnqa3gVXhEpPVMMtoKjaTVbkttPurdGRixLgo1cqGvsvEvC8LLU37Td3bf7aoeCFTHvaKCdCPgGc3HdnP4cXi1M",
  "key4": "kZ71JHtMazrBLp99KXy9s278vD7tsAqKtiSEMRKfT68t1jm93KxFWDWKJ8r5mQcSQsZ8WQr7gnVdXdv5nZcjwrs",
  "key5": "5TSanPUYA1J7B43DLuQK8HfNNHGAiEgpuBbvgs8hVecsYzwY7nnJmejjT8X2nu15Tm5ZhjsQtX66Qp5Dcq2VwGnF",
  "key6": "3WUc7heaEWueJto3miS4quQrj5iMtvkGMNFpWoB9Nea8TTZT1AHXdRQ9GAmWiWr8QwZgjjVcJ68mqJuPKwCMBHhP",
  "key7": "3pCLvmuh78EaN2jXcjA4kc9txNjpekvYqSW8ajg5XAGm6F7VR8uAuZ2UJSquMEiDi5oc6RyhVuN4Ws9BR8aVcr4f",
  "key8": "4EocREGaWS69WmGsa2Gfup7UmkMGXtCs67iaGTv6tLrSoLV4qUgVHFh8r3rn2PS4c7gtXkLh8jCCRnmDUZBwwyLi",
  "key9": "3tL1ZjvXGvVUNnQ7dMAvS4nsWZ4Cr7ixbH7qEDPax2Vg5WYFEX91VzCSnVyZAcRfNXDJsAgosNgxcL4DcqXVj7JN",
  "key10": "f9zoUgbjPBnrZQnww8g3Q38hEsSwaSSXSwPiG1e5Ev144gFipQ2tmW7kVj9y5VTTFXx5chwgFAo4cuw18p9LGkq",
  "key11": "3vY8TcN3X3a3uXVGqzZM178BqWrCuKFmjzfBFcXVDHLwe9Scwef3kYsu5NjgAmt7ueLWMDb15oKDMohrj2NVER8t",
  "key12": "ETtmoKR2DKy4rpsMtZDydpbVNwDsoNgENatAmmRVjPHchQ5Q2ugMxtNdNSUMvUKW4GgLGZzLsUSUNXWdFkLroRs",
  "key13": "3wZog1smizMzDrmddSjt39LaUVNdb8VSsZj85v63xjLXM9njpLiMxm3i4GS4wuSeDGLCxcqyZ6MVTwSMK1G8KmSL",
  "key14": "5q7i6qXebX24rqzydZpxGexCp3ffLioZg7BpyTJweVKauMWn6hksUWveQY4YFFc1c2Nuu1eDWzhHNf6kW7vXdQjc",
  "key15": "67GVgcrYeuLj4HRHD7AVDj2QNQjrLQL39Y6xq7Gix7Cp21sfbEiZF9Tgyx9B3QMxkEAVQTK7pEPPERj12mc446i",
  "key16": "xTXQ3bUQRJSSpV3RxArKyDVc97KdjfGLxFgPhGCjLtukZBq4idHs91xvDqBUt5hw24txKSYbxekeoiRbW9WWgpb",
  "key17": "3c5zJHoo3NMyZuc78TusuWoASRyog9nJry4MiE86v9awb3gBZqHmPYAMYMnep9GDhfwg4kAU3ovrzCw2rC95MfJk",
  "key18": "2B3Q4NM1M4Khi5CGZ5kuEagzNq7vtToaKfNZac31jDHqemWj7jKoRaQhJRyUYe4s5gehTrEtr5KMEpernM5p1qep",
  "key19": "5PAtNsrpsGHzVLQSAjS4D2GoN9H5G1Q6stxGVFCZt38LGik9zdPSF4v1BK4uBAPznXWhqumzjircbPHci26N3uPq",
  "key20": "3BG8f1MVCgngBWE3nRdqA9qvaQwLHVu8crA3KiqNSyw55X5gDwvLbsV5ArP7pidcojXRFDz4ZZpFCAGgxhVVxRqf",
  "key21": "3inYEjUrRdAXYNYFycc4wcmemzGKyN1y6iJ5RSRuWEEFwJ33qB3PwC7cMUiH13kPi4svkithjPCo3Wgn764PmoZB",
  "key22": "3Au4dZeN6qvQp7Usqf4Huond3eBdsifepwTVivLuSitYy1VCFnRDwGsYPGbRFSMvUTAqAcGCFCDWXcLVzsC636WD",
  "key23": "5N7msxYQGKbiLghkLq8cnELYJAeLKr3hAz3XcwDyDhRm9GEv1eLjnrPo4QTAqGgfeBbmbtt9St2RqPvUdenEJHA3",
  "key24": "nTqCfv6EN6LA5ussWzMfmZKGUdNAYZuABimsm6dSbTU23k7jKhwWSVcPayU93FEUgpVqfqEhMTuLHwzSNY9gnYz",
  "key25": "2g7qMesMrNsNQJsePnZGDx2KkT9kMNrtLHjiY828Vcw3V29dCgvsvL9Dq27JzRWqMjfBQgc8T8VFghWT9yFBaAxg",
  "key26": "41FpN6TN4pob4HK7SCwVpTKCbAmJBrPuP1czqyrntVBKhyaN6T9Nz8f89gHAeAgE72wMhTa5pc85DCui9MKzUeAS"
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
