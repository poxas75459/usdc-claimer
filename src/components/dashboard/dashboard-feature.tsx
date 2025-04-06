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
    "ta95jN8HhKKjK8DSGhVSZ1u2oNwrVwhsRUBdzyZNVmMRq9eHXMpMtAZjmaZjLiMmZNmJjc7fKzPhvuF3yqNDW6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nbnn3Tf2LPTbL1JjNtYaDT2d2JhnH89B1utNFugbM8mjYz9ziRJLM1oJAeyScC4YWmXYxDH7vwvYvAuQgfH6zs5",
  "key1": "YDLyLTnTus4LqscFE7smwR8nn3uTSMCNvQsyiDXvk2nBJfEmHm8ZWCWzd3kobzCjE4RY9bZV1LRkuktEVFHFpN6",
  "key2": "5Ftxa4iAVYcDQaGZQ7ZrkkrMNnMYgjk7FRnJUwa2CcEb5EFDrbhQbnXxvm3tusNEerPj53QuM7QPBsUPWLhYuRpE",
  "key3": "3UmCRsXULWkvprCBWSnEdJs2RjBkNHFz5vihG1XoD51GBqEKymk29TyNu6T2sxzPdWRxpqRsEdU9giY4vf1qtKDg",
  "key4": "5bkRBQW9vfnqtPNjow2RscSMME5Cn1B9A4vSm9bqFxxmH5bHSror4rSUZqdDAuooTsUxpx8q8Wmh6cz69aaz8m1Y",
  "key5": "GE9Xf2GXYzmiDzFeUfb8pvYgP8s51gb2HM6rNuVwTaFgHJQqG16cmd9KRiU7uuyABCkFtcz13eLB3oA52ngpAdM",
  "key6": "49zHLiLB1mrD4qn47YUWetEVvB3Buc2dApvVGxt8pwjU3zjsevG5xT6WyKQrpd4DnBh42Tbca3d8HWzQqW1Jidb",
  "key7": "YER19VioTuosyMvFKbY3A31GjQWKSXJUdgcsjz44PYiZwi5FBJuZkKnVHZPbsRyv7ndAR1H1SeAMjPcvDgKJiv9",
  "key8": "2ZnPsrY63hBLxLxUfxeV6mg1wFJSe82jBc6efmhb9XzZzHo7yGFQXti8iYvXm4aNEKELFYhmSnDYGpg5HfQWKRo9",
  "key9": "5MP2svDTpBLbwXKx38y7fek2att6mskD2m7cm3EW7rLNVqa7UsMHJSYPjLDBr21ANex2VQS24EmRK7oiPUtbR25S",
  "key10": "2f65CRidoGuPBS4miVGNwKQpqmKokcyz4Smki8NF6SJos4rVW9175hLm52sh3hNvxzWGUNGv8dQ1hLo5EQWRT8kz",
  "key11": "3v2ydFi3UPNEKLPMbxSagHScDeZYQbgdDzQ1wBdvwU6U983z2QmUC7GMHVRb2pfaoK9dZL4yTMWxUdTLdSDQdi1p",
  "key12": "2RFBTds1pf33ttpZ4aHE7sHPaWLWNBombenQEp2ZGfJmJoa9XCJ3g76zuLHRUUSmh5KHsK3Ve4NujLYKxWc7UvZq",
  "key13": "3mnAk8zoYcRDGr2XmkVL2q2Wm1a3XJUEpeprpinw4U8ewKpk1ZzCqa1ShYVYfXRHN4rxdTarnTGGQ1yR5Bs2QrJw",
  "key14": "3LX3AvT6TGkBShEsuc29dbHd9GRH6Z3KywDYnoAncUNVRSufhGrvMx7fK6fmxWeooJJ2w3BR5SFdubk76teB9s89",
  "key15": "2jcM41ET5RM9DefMG9DB94XLPcE4tx9sPPrniQgB6YDQHRxB6NFCT4oWBtBNdKKAWucoBo51o1z5MdpNGd1yQK67",
  "key16": "55MjRXQxtATCYpz3jHHo7K1z9bPKoK3BWzFSch7VEp33ioske1foeeNdEeWxixtiX9VcazBkmtsNmxXfs31nXpjZ",
  "key17": "55FbUkLb7AWjKhoriqouDFatcxJ5Vci4ZXGb8QLdmwMiaAB1j5dGJ2K8kGKhkY4152GXSS1UxFZKHtSpSFSSV7SU",
  "key18": "4nq2qEsfUGTXGxzcSLBE6YBg33mdaPr973bRaz9VzahrjdBehqtSHEJo8wVhhHXp4dhWQGU2WnoPvbDX3MktDkmg",
  "key19": "3ZobGtsHP2XyrKX4ExgjVWGz2ton7tqdLKYvez3U3WdUwjepXxAy6vdTuqSfwxYQUSLgGEnDqcftyXERtiJTr85m",
  "key20": "2ABEzL2Wmxpv3tXnQv9baK5muiEzQVKBk6fUqK1uHXapkEybPEzjqsEarPhRjyBDVzpY7PtD745Frp7MupK7idBY",
  "key21": "5J73W35ctrLC7c5R1pMuSJZQWvQUmFZAwEm3dF2m3YA3YF4BVnwymC52s2qp6xzLadeGbeBMRef1aNkMFxgwUPsS",
  "key22": "2cGFYEUzc2j4j899dwtKDwjK71Fphb48m92uCYBHKDbkkcvJ6NxvjeuZpLXzqm7wHMa9VSeKFFrh3Qzcx3kwuDaH",
  "key23": "3WXrqtoDwtXzfUuDTiD5v3kVmnigsHYTfLnUT2UvuWamL7hRLhBn2G5KXtxKTfxAXhZcQQtUPpppsN8AMNfdqGhY",
  "key24": "2WZnkKELJ813aGoxyuDTTCajYbxcEVFPXpYoKD5BtZHDbSv1SpF7yPHC78cAim4vJMD4e9Lvem1FCz1FPSKT2PZ8",
  "key25": "QEABzMAd6VknrYQBSTbRUztq67ekS3oS518rQaL6yVuKihFZWJa8aBnX9zqbANrCQ6rkijCvJHR9nksvkNWWPrL",
  "key26": "3rnkGGCXXJbt7YDGJ697fsy3h64Ss4zecDer6tMSexkyA8MM4aUfXAdBui4wPfjHS1p3Au2S8GTBTfykN8kRWnmL",
  "key27": "4qR5vKgs4pMNqFAcGSwwuXb7i4dMKSjTGqUAUVwH7GPn7EWS3L5ygmWEFyYUmWww3QN1XLBS4rQDGahFesxkrU1p",
  "key28": "qc5Y5PWdyhDvv42AuVzEfxHTTpiQQTxJM8XJCwLbmCRGhVekwZAVMypJtcm9gNsmgotnJE37wR2UJUEQVgqgMFa",
  "key29": "3tsCRjpr8635LYvxxCVvcHCc2taFm7yC2x8RxXWvZ2S2w7V9GQZWQeZkD5jBycQTzvfVozbJjyFUTssCQTPegPtV",
  "key30": "5zGMbW17MrLG37HyFNpEgsgqvhQ14BjZq41B62vwnAXKxJNRzzrErzPy1buxbMzKxT6jbGTTh62zAv1Y8gWtFTk",
  "key31": "5fn2YFQwvEXpbjjAUaE2jAGNjq39ZDY7fS4KPsK5NW5inqBsqizkyK43v7h5Eec4DTQWDdxKKdDGv8vhnsn9XrJ2",
  "key32": "3ykAWrEtkTkj6oigBwwKPoyhY1194aormCnhSPVrVJ2ccPx2txALK1CiaARLxWjr6m9bmPPU1bARQvAw4qn7msD",
  "key33": "4xLsGE7igkQtpeojNf9CNidwmBg9YhJvK3UbeuEGx5jCyDH5C8Rw3n66uRrAfdszCBNykLdseujxui1Fmc68tqpf",
  "key34": "4KXAbSSeF71LhBX531mREgyKFv1iK2MsVPu5YwYgEhAzsdkbcQ2kop2LRQ6UzDDe5WcQUieB5K1rgYAKy3GsStxH",
  "key35": "33keNfZkPkzFV6sdbQYmThLo1yja2E2pcd2a8s29x2FMbsdfS7QFnTtFVqwzx7E96SN3RSYWLthcNwZPDfWuUjBh"
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
