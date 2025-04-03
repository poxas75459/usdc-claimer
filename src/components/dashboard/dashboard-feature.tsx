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
    "4rKa6n8WJ19CXawj8rnCuMwY9CJSjND61bGP4GaGQWzYjmJgQskVtePTT8FGNzAHpVgmr5W7HcSEKCsY1d1ZN6r5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b73NAFiuGgfmU3JoN84s5p3TCL1Qk6dWDPxAzSwuDrSKNaeYzWSg6Xsewh4NDoRWSfVv5Ly3WVcuRDnaGvkoJZB",
  "key1": "2KLzYmT3yQWWqnsdodLSPy1X4bTRBoLVDxwH74hD6Uy5XKuPS2xouULLXZDyLduDcivTMbz4nUFHm3tfuQgw4ogL",
  "key2": "y53CNwVrRDECySFW2tM2LcVwTTJvXF8Q9CeD1Vdo93eT7LWKxgguDq7Vs77fW8hxPsorSqstLbVQ77yaLoWduFD",
  "key3": "gJvftMK5ytsDA32mNSQxBo2qPQ586o8AeA9QBUpqwKr7r8URBmY2ZFGfp5WajpKQJVo9ojPT49e3T3SGj8xwQu5",
  "key4": "4ENjUwX7jydHmx7rtBLZ5L4pJvFL6TfQbLzK27MDgguhDG1aSf7KoSoAUwER5iLK3GUSyHuPiK1BniFDrP1u74vm",
  "key5": "wKw84696n1bBgUtY28pWeQe4DvzyuX27PpRKb6BuuEqEii1cGktTH9FhwBqaRftYG2H1RAfbbPjPDivW4LwoL2q",
  "key6": "216cHugLmcfWnMJDynZGfzDRKQYcj2XSMwQ97AFa82zFRN7iYGJG4g3jdHFTfHQKQRLSiemLYCGSHpXmMYwVPD8s",
  "key7": "uBLsmxMriHUqDRy6LN35vDLb631mXLUEoFt1TVLCQAjq9WTSJA9bUcYY1tmtUSdFjwMWKe28fGh8giALRxZvzQ3",
  "key8": "4T9RD3rZV71yWdYEcq4vSfF47Vu3JaMqamwbgoDLXQaB3MwReuAZWvE4PcRYsWtFtQrGv7JwmGhuq8cPAZ2RN2ph",
  "key9": "4NYBTG8ruebbTH2gkxXq3Rc7CbTAQdkHU9ohaoq5Ggyg3hXN4p66EZ6dxJXzoKuA2x1UfQwuvgn1RXhUvTz26v3",
  "key10": "642jTkxAigZ2RR1mBEwfwPN1pXnEi2NAfaNN6Qk5SPhZupnHS7RjLUuadjBGTq5JWt6vBsumSBnoWJRAkQiVVaWy",
  "key11": "3fsMDyG2JN1Ugyqk1aFNH4TLBMH9PY7jJEquocZdNB5v65gx48XPHN3EP9UB2wSExsdgAUu1P5njqgFr3P3RQ7xg",
  "key12": "3aP5Qt1JfauXhYuRMcsgL1g3V8pWGg5Qoryi69DQEbCHcbjQ6g5eLDtWv9n1QR9uZHQudGj1ynvGCKPnr2BWUpYi",
  "key13": "2t4o9WigRMZFCDqZRFHNqnc2FBXQ24BxZV797Q3pWxuzMPxW79iiyg9csKgPMw2wxs7hLLufdjE5YJ8mxzU9CDLU",
  "key14": "X3aEJJB4cs6dPSWm2WSqXvn37N87SzYjWDGKZdiva8LqqrRmjDnrC6rqL52VV8pW7Weory4e6feMPvZnJ3okdLr",
  "key15": "4gCS9k5Qa4Q7P3xFPD1894TtA2Bv4ipLoikM3GGPmzLH2jBH3c4LokhTCF2LHZdinqPGr7TXvKj17ku5BFsgZULR",
  "key16": "5URKtavQ2xM6XLue1cP5vcR2Ex3P8wzPpH9fNeWk4iBXwtqyw2ssiuLZrKz2xSgpwXCXXJxPqEVXmwL1wqGgXtLS",
  "key17": "4QENFmeFatKGdwdyqMHM1zUUL6RPif5K8ffXrgLwudYZhuZjQEkkAyDqiQJfSeZ7FL1moGqvztbBXuBiWFFkjTrH",
  "key18": "4nSe3i45uh914C9mSwWN3ugcXMtiTq1TE28RhFwUtHLixHec5AxpXoQnNwhsARD5yRU1hwhYsEXT6dY6mBqDRbqW",
  "key19": "BNGxRbuwzwHYyDjELaVcBeD642VaQddmtFXG6eBSNV6sdpbfchfd1MwfAiFYGLbyy7nL1a1Vd2Pv2ZAR3EEoMo7",
  "key20": "2dKTq3zVrTMmYssBT8VCKwF64owNkmwHH9w4VBSAjw1UoSrP375sV9wKS4j4qKdb8SjjZeLTgWb38BYAFxoK44C1",
  "key21": "3Jxf9P2MMTKL6LwjeqjnPW5syxrgnWvkDUKu2bENTMrwx3W3AMxoLm4H67jK1gBtks1DxMC7xtnXucUpWiD2jruN",
  "key22": "5gGpEkgLnARi6cMcm3E7XUbNb6rQLmo9DvEbVX4VaFE8BcCrERiY22PCKoAJoZz3YYenj1gfb1ZP91K8vsbAM3kb",
  "key23": "TyvkMFD2m2RjMzvD84b8Hsos2qwBkq3aamWDLKcM8Ry7ktDp3U8enfaVaC4U89PXXL4MJkr462NB6TGCSvjtCoo",
  "key24": "44Do5KuM8gNuCxcUZRFEBiytfvu9FRxV1x8HB87ppcpuMwgihrFaWcfWLSBDTv2bHiaW7H5npVejBwEM3RfLYTce",
  "key25": "3P3kUwepQp6CRz1NjoGxMVTg7F1bk9Kbp1Gg39rC2vyvc3fzu4iJ2yrtzqrsKc4MBGgNNqzj3WDigj8CV1NP6XbF",
  "key26": "4YpNge6VF8FTZtXczsehxWmmQyxBjshfeB4EDnX7iYBSvPX4sW5F2cNECTWU2VdZxnoENEQQpmjdNpCgwPS3kfY9",
  "key27": "3hz44Roo1db2jbgzVAg8hGrcTN8Br897Kxxak1aJrZPiTD7YtiTzQ1jWFX1Bgmsv5HxtyD2SKRkWSbKjhdcbWsay",
  "key28": "JxsXRcGGv8zyLwSo4AmVGJKKSEWkWdiHoBUx8Zmm3vdzYDREyopZvwcQ9LPH1DUuMi9Dss8pjJc2fA77LEdp8XY",
  "key29": "33oZRJTtvqBM3hBRnNZzjAjuDgAGVmdyBatd5djPCqNfWtxpdsg6Co4wqGkpwjWE5DCARnQqXqXtdLFtss89crvu",
  "key30": "2sF6nT8pULjqSgSUsE43WoKsdqBr4H13wbTmhUhRPR4r9QKo7crfYUN2zcEBJ8XnnN5vTevKWUhY5HBpiTyA61zh",
  "key31": "5ncWeJqxXLjgYP9BqbZDgM8emCZonxj4WeWk6ZF5VNnqnC1CTbD6Nov1fUw6jjCgLucvzcCUcr4juXEsKuXFkQTc"
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
