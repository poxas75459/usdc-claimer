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
    "tv6mjewRvbEf7UH8K59xysa2qKSbCmJiEy4VtYrmPnFoDFoonC9npVDi1ramwuufeEN8KjxiTULQDawZQb35Aw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VakmMSvZJrVvGsXZck9pbUdCDcMVUQTSxg6fRd8NFEgj1gDNAUMjgB4L1ibsZUCEPUGDKYQgwUBf4GN3bNf88NH",
  "key1": "3YYw1K9zWWiiMqTUivDW4byphpUSTNUrUt7yANrwkcmyuqobPcHERNGonQ5nPUdrooAgH6cHBpLSTqg7irDNL166",
  "key2": "21LAmmg97soPapHcB9rEGaShSQNAbvGQkCaUYoDREHKYJhr8CUyf7kDdhx9ynpnpiQooXgJ5uQuUJFhqDku6DYZP",
  "key3": "4EmXUMc9o3aAawpMay7ysZXuVbT3goVVs5ZgjHLMkHKWhUgoDEH7YrnaxVfAERG6MteVfrtMRUs6vUX5xsvqjWh6",
  "key4": "4CxgRPz6f4eTZe2PENZU6JuGYAAKbQkHrk4zLrUib3xTPvbCeykAwjKVKZEVFTqNx2sNxeyst89kt1yp9EgtghV",
  "key5": "3as1HuxSbarfKsgi7XdDWBD9MfUNVVvoAUxZ49GAX8fp7QyT8T4e6GwVeY3a6SL6G1iz63EHKjW2BrFBPtK7nJ5x",
  "key6": "2pgs3DNiX7XsfdgBcgPmdQV4jBErzxzge3zRUmteDPnANNz8neWBTsxrkvF4v5mjG4vcJjkBC3WMzvtecmjJfFFr",
  "key7": "53rKBmJEWogXnY8EUknZ2VzHpqG2YfJUQZBRo3faaTHe2HhcdrZCJvC8YGjCvnFRomNPgd1ZtFhMTM1RYXWnLuyk",
  "key8": "4bSTqKBtVnQfQpdQhsiUepNChteDSRnD3czE5KhWTKymYJX9YU6ddnCH9vE4ZdNBvSBsxfGM4BJsDfqU1Kf61eH6",
  "key9": "3r9qbwFAngsuCkk65D87VGXGm5RZPbRCNqUk6fRE9dYA59Y7kPPy32TNT5Yj96RoHhgX5Exh9fBqb7H1zwm1pjeb",
  "key10": "41vWpHNq1ASKCAG8q7W6RXDwQX9ftbsusWM5WHmVBiddiowqRStq7o39BAJZTstovB8YcHm2A9kzTBH3o3XCbcUF",
  "key11": "cEigYmG62Yj8DCgRxN6cZxukyCDFatWxmHGLSh3EvFxhUZGc8M6jRTf22Q6HnLzHPsZo5k1UGzzNjShxQ7ktrRm",
  "key12": "2MeTquMFRAzJwbABJA49CEzutZ57xjp2FvbGvKLt2tDLKw9BX9eRQJdFrdxhFmdMjpiwy2KSBLweHT8nN7k8GyJF",
  "key13": "29Cznm6oPU727SnEnJoYFY3JKs8upmhZEY1wen289hUuK7dwCxePCmNdBoDnd6LWUrANadHQQYCwh9hfSL4jHgEt",
  "key14": "5vyRcgxdh3oDoUuFrHUFXykPbz75K6QMLYCehs3diuSayBpt8gURowHYrj5sqVwfLHSozrGd8bwBboxjngjjvtsA",
  "key15": "csAdUyQ74Y2K5bk1UCzx1FhAwPopNSNDU2gFCrHANrGb7CtDG6pZsr5Y8H6SKTby42C4fTDPnSbCdpQXen1JXpg",
  "key16": "4HQUUYQ9wY5GmeQWCykDt8Q3xNJgf5qunm5F221iAWWvAtvvbFYjdUkvKmtBX3pNu2vnaURcBHieZAbTLYvwKVdB",
  "key17": "4wFk2LT1QW9a8d8Y7XhnAgE6sDRBCsbzM5Jx4uA1StqdfceFwJRoZrHD6eBjtii47gLaXUPDiTWzjz8qSB3LEiy3",
  "key18": "5f5F9SYaE9swgCQWawrbpwHBcqUHBmwfcDFzK5M6Wfrg8NYsNnoUMPR66pDcbyKFqtVfZ75by5d39ueUepSbFAa4",
  "key19": "2A8pXaqcd1RBdyYEDG9g9Wg5nXkd21L8BgynG185UMAneqwJhbbCBVkP4MuxR3cBX2BnSwHnjKN2pfYgyRdyqwLE",
  "key20": "3rpAGG754NKfqALrW4okgi7YxxRYvF3GUFG1c13VDRQmUZG4s5Lz1c3BX6yzNkdk6XXp39BimEPJZeAxgvMBMH27",
  "key21": "3WcwiL2r9efgeLYexHXYucLCzT8V96s9VYPC6Wrz7c4cWnEQbKqUzEV6iVgHD56P3VE48MD4pzoN8x4y3T1ajjvb",
  "key22": "27y2pZHLUgi1ExJo42fpRyYRiuJwY9hEKeuECyUiu2NqXyRoumif4TkXKGsqpvU8v6L9Dx6oaUkpE7NnxWAYV6jZ",
  "key23": "3d3iuK6azVn2i56wrMe435uPs9RRYBACTxNfiN2m2uFaNZDuvk1xrS9WDAbAVvC3FEnM4iZ9mEKcCC9VK1RqjKWm",
  "key24": "3EpPN95zD28Qc5c7VPW7kZLBZHBQHTtk6FWZ5d8JN66oiFFPPtfQpnmoWtjB4nfmecLyq3WypBm2iHhS7CJkXbBs",
  "key25": "5sP2YtzZaRMtFdEiGkqfF624rcansvZc14PWHgCUL6YAqeexJFTQWMEp1ZPshvFwz3621bn9vYvpPJNhtZjdNdym",
  "key26": "3Yg2z4vLZ5zV6tQpri4KyEfA7TnxEZvhMxr7jXC4njvzo3Hh5Ec9dBdDJpgtRvi3ocy3CXDy4YHJh2sNwrQ2Hbm2",
  "key27": "4LaxqRXy9HKb37YWwRb4py4fZfkyXEyALkHuJ5kEnCNtSRKMjsf28bymBWuoESzxDtc2nLxRM7kSVQAVqhGqBPXS",
  "key28": "5oJHt8pmAA3wPRSxzNuwB6UMdcZvw1dmnWRVCQjN2UxJ2FoHXAFQY4HkoG4bSP3nodhtRqK2vTSpySJfEBcQXujS",
  "key29": "y3zFVpAwksaHk23PPqsHKRudxM65VocTkwgENR16LjS3VDDS6XGo66J3EpJEqFzgnr9h1Hh8CSZNgwLuNPfgahf",
  "key30": "5gFAPQ8ntBtWXKE6tJ2zfNnfHjqHJKtGJ4JPpGSVRJ7nJ8Np3Et5ADGuSPd3BKwH6RxBF67Ri7Z6GM9TeUAD4oeK",
  "key31": "287FXAbxTFVbNZ5Zw5CirofA6XUGiUdkXYtnGAwnrtZLoNtmcaxoA1x89MNkveuPLf7Ugbpttf3RKz5n5ve5nVTe",
  "key32": "5ce8DmdBYYmeovKZMSQ9eURcWdCihiAJM8DMz9BtmUMCcu2mxanrnKKtCrGh4giYhkMSpKenwmjdZCnDUYXLbxvc",
  "key33": "5Det7s6YQH7SSeXuUr2RS49Sa544YNbyZ2jqwqiKEEsjXSTxpP8bdQTBmyvx5smdcMN5ioRAJZfHzimSZGi2D3jK",
  "key34": "26YpEdfPGyRMVWsnHAYJzJ1mCfEcCEAfh6LU5PDGmwLxrxFyzNGRQ7ScvnJQ4BEvj74hqyFgWbVTp38oqW8uYsRF",
  "key35": "2tDnNwhrhrzV2JB9zJ4TAvczcogr1iy672AXL96XzKkVRK159JfwSfVxvumQu5k8Jqsp6a3Y8ZCKEMuw81NqJA3b",
  "key36": "bwXvknTubMtZ1jAbwgYV9e89nrj5GofG8sKSgRVSeFL66h7qLrwAk9wVw6iLSHmxaXvJ89h5Qdtbfw2tkhojNW1",
  "key37": "4xfL5SuDhxn3Ztmzzn2Q3akn5fRZVn9YdhXiuGHh3DoYDF7yay81YVUfvYMwtTeYXejpXRhrq3yajWRwDj3yAWfn",
  "key38": "28umNfJp7HkggAtDh6k8T2oy7L3A4vYHrUSf8J62VdAdZmTfRE7CHJvSyBD3WmSFN14nPcDEViT7oexNpCFxUYWd",
  "key39": "2QryjrWAjfWWLHqJySMJxFWqpi6WMsyXvqnYnvo5rScn4JUwk5ouBNoY9LL5Bx1bFnJK5xzDffTWGpVsSkUTydCP",
  "key40": "65cLYWYKBs313tgyMECrpfADun8Se273gRok5WZmr8yjcy7ycsPftAq3fj34Uw1s6hq5omFRKHkC4avfNFRz6fkJ",
  "key41": "3aER9AzT9PkUWAFXAEMnKtddp7bMB8VG1rB4vwWtZTcaT8uLUL6a7mL3FQVptt4u85fscUjPfsj8g9A8zRRHigG3"
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
