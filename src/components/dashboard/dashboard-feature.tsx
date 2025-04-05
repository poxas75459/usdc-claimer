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
    "4zqUSSeQaCTYVs4NtFbgpsstvwL5YZioiND2gDwhqH8W3uFPyuP4Uf48HsKipJPpvRXG79PFDYTkZM3zWj739JDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9WLxy1q559hi94Yyg5jFWDj8FLg88TnRtTmXxRDRFCgB9mBKMZp7UYa1zBoqaMP3hcDtToqQRtVu28tDNQAN8qg",
  "key1": "2CBX1r3fMkmJb5xJ6wys4z8irk75WU6yVaoZx2iF7RQ7zCf5q2Fnz7jaCG5M7W6XJKpYvLkXVqHiVg9iS8HfwScK",
  "key2": "484A5kC63dZcGsFGhq4eDzK2DNvQDwc3jN6GMhx6UQT2TJVcvm8SdoQY6Evm9ioqW9nHdx91quC1Z3nydFrzp9nV",
  "key3": "32JmokJpCwixF7jWENjKXbG5ujyBtpx4ydaLW7EL2oXwVtgj8YRRg3Ci9cCftHDiacBW7RG3ibWoSJaqNnyR4P6j",
  "key4": "qqC3Gc6aJKWAmmy1JRm8FKUScqCE8BUKC7LDPeEcWGf12nv1Xp9XQvPV8MDLNCH74AFxB8vWCMKf2qJB482iUVW",
  "key5": "3EacfpBDK7MPtPPtAEneg9xdtYuAN7bcdPmxSdx4BzprH9AFJLAtF7xXwX9rBYxmMTj75Tpbv3eCnLDLM6LHij1G",
  "key6": "2raUcoYNt7Vqn6uchVixAsmiVwsroJLwu3zJQxPnbrTVf29j6dopbA6jRkSPoLaA7eyYEFwtYaVu7LE5H1HTAZsZ",
  "key7": "2QJ5rmN5gXaG8v1DpgQzAN9H61sXQwgn9xoHatgFEEEvSNXczhBKdM7MBLCga1JbagW3avzt9Mfu4cPcPS8Kb8W9",
  "key8": "4JT7VLuN3Znd1zp5sC1PDNGKjXi2dwas9zz6QxoP34vUezXbt4AhVZtr38ubChLmUpLY6La4dmhLYYACU7vRRKvD",
  "key9": "4sxhxrb73EYjx7Bs76q1VPkcYEwSdKYRMd9BHnKXKpxG46hjfb9DwDRkEA8eeWfr96GBisFuHU7fmkSJnvTEh5sM",
  "key10": "2zsssxoac5rbi4h37dwmsL2m4YFzyCtEzwwXw8FjVuUoLvKFb7MStkqC4Z62KdEUFr6NHnHewtwgV46GDFzCK5AQ",
  "key11": "5bXCaRuxyTpGtsLaAJNsRwFKK8JcxZjT41Kr2V9VeX3CzxejgijuNpyDFdyfeDK8Gz8coPBmzEvxkvFMdTGG6efj",
  "key12": "3GZQkGns3koUzH4PECbARfGzvD9gnD6qJcSE3k7DbXM71U1MMXsHoPDLDp4Rj5iAgkCPhYb5xrzQUZtfX95tMHxc",
  "key13": "FR2cEJvbNMdWfpfnih8YQUzhviLtkYsMqDrcXMgkRFAj5kpGdFM4RNg5ht4hV31oUxLv197bHSk8NAbjAUmttdc",
  "key14": "si1cU455kZ2eJRRe8iUZVBP1e3nbwBRGXiqtHP4tkUURtXhTYQj87AK4qHpk8xN7Qq2L2Tz9TMDpcCWpYo2hXzm",
  "key15": "24zAKFyxFUKdMk6eFjhycbFYnnEfWuzQcpG7pHRbY8H6H3i6achcYbaEG9194Mtr1ePHnGbMfqbEje4g1PL4tiWy",
  "key16": "26JEd2wUdtBnkDD7eLTPs85D2Pu4ds5i3ErdH4QtRfVmG4HfeSsUz97Pxddnp9kFkbjUsdPmu7Sa9ZsLjwyjLuP2",
  "key17": "41t292beu1br9LoyCkn227LGHumpqbTXAkri11x8dJfJ1fb8L61QLce3cmZeDmCu6kS2wy6xzonLYXEsxaz9oKse",
  "key18": "4dNETSr3mKTmHzXLiv3YaVAR9XavBMgNLy5JpnQu2J7CH7fZvfK7S8UqupoSmfk23aVyQ9UdkVy5EazCJi5ne98t",
  "key19": "5L9mxwsqspR8QNvGuQMiKeWm4EusHWyyt8GzHbfdWFJjjAbcGsjKR4UFaQCuHXu6mB9HzCk8VrVpn3hzuvnNYKbu",
  "key20": "4chdcZmhEd64QBPPFCBnKHtJyNponhMV1p6qq1jJXv6THYNrhzTfLLybWv517zkNfs1ieKZJPubf12PpunbA4FgU",
  "key21": "66GC84ReoARBqowUuzYbCSk7VwWEPNUimDerjebRUaAsbosoc3P6F1v7hEsccREt56Z9Txr8roNHTNUA6doyX6u6",
  "key22": "2tv1HKXsow2E6tNfpVGsxjuVssRXVzuN5VWqzUfqb9Eh7GHVUWJ7PZrZq2iHFcVU13mwZDQAZ4nM95B2cnRPgRec",
  "key23": "3Zfh9NY67TYxeSm3rjMdmDGZC1tgMontg3qjrPkWCm2s9vc4CVmYRsgmFLaaWaiZUgPmuxNtrhqSuxGx9V3uQny3",
  "key24": "xc3PU8fL2zjnqE9kWJQ8KximyJxGYVag59ABuEGJSz3aNNwaWTPZx4ASnGKY3dPMTqTSpio6hPXx8DNbqk111H4",
  "key25": "3yfT5fxzHXBgSYiRFgt1iQfLkJhhNEUcyRuQ71XZ6o9DEqDDLd3RiariskmBymDY83ha4nmF6B1GkbpiNZj9WjPu",
  "key26": "aya56VeBGzetG8tWvgTKdf3Juyf7Z65p6XEwytNwme7vEXkbFNecBhLjC4HePkEKSnKVg2JGsKReMg3DXzepGuF",
  "key27": "3p5gsNU7sUqAYvXyQihpsmTYMCehA4z4XpJxgnvd2FEDk7qWwCyFPVUkRWgMV5nWuNeaysodRsRsfW2boEXGFbrH",
  "key28": "5Y3cA1qZwhbFHuBkiLp1MQ1Zg7D6Kyo62GVSPUadtoJ1TAhrYbwo7UXFk7tgMy2GCy8rHQGiX5no6wC6oBR17Yjg",
  "key29": "2bwWGQ68UAJ15khTme3a6Diy1kR44FfPpzPufqYAiC3qEps3CNyHQgcwKsVkVHtQ22cYzVUFFZ5F7XLf1zNjbb6e",
  "key30": "CjTdQLo3kcCQzTJVK2ZjhdMRUVNoZG17rJZFo8NzvAS6dACfSGHcAvDWSARX4oStV2ePtj1uXYwvc5f2yHFKRcj",
  "key31": "6Fo4tuy4eLnctTRWhFpKDKZRVnybpaAYtGdtPycnSAoiag368K363sUiiJK7uaHRWoJHYUw8RB7vopmXmgR2Erp",
  "key32": "Kpy93yyo9m4LDVUpvmDoZ6wqW5dxriqodwhdfqkP2JjYh91Yt1KZ8Joccg5JFcoEeKaC8PidJdFgcT6tBdwmVnt",
  "key33": "2ZjaH7GLSvj7TToVNyXtuzTK98JkzL57zji5aH6Xx17hvczWKqG6t43iPKWFd6sqpJKjNAY6CK3t1po14xmPT1Gx",
  "key34": "z6S6qG1BPiKGLFn5APbbMDPYosWHfpgA8868TPvUFBYjP4C1kT1h3pfkXuh2bLpJgwi4fViZPn4qPfVUG8cyw1g",
  "key35": "3QhJnbogSwDm3FvrCpQQAYcYCSzfAK2R261mrtMso7PK8XzKjNaMgVPmsPYE6Uok2KtrbC7x9p8nStrnytrKXbw9",
  "key36": "3bgDjTStvv5KgkLG3TfHJbzB38coDH8Q24EKq4CGq8s7xHtsvHDnZgcpghGry88wu87LLzSjtxFfZUdew1dhpLZj",
  "key37": "2aHGQL5HCyzwgubvdZi3xERBFDR5LYG7Y6nFNijiaS2cSBMx3J7oJAmgJJb31AtbcYN6D1YP5N5oJ8ZavpiwMn2q",
  "key38": "48eQb6a3FPnR8gND6a4mJuARuVePbZw9nHM5E8CJgTN7s5PVNU4RdpAwRKD7hSB32u7iZNnCpLkt6bYepfArqyah",
  "key39": "5zXczQGnY5psKaa5Z1mF6UKqPDhFx9SiFJF6srs5dSwD3S7jBX7p6y92j1SBiP7JofFoztCcVR8WrcCJirq7P2ox",
  "key40": "iagMXo6Y1HvHos24ReEDp1nkxfjmrwpNH4hZ372GMDuJbZoo2keX3g6wovVaua3ZTds4QVDHijhEyAxkuNnFAnX",
  "key41": "2kpFTj3vqCx4aAQSUMoLXPjrkMdeUYnhARamoLgrjpdE43HVpWWUqigeAioVwmKEbVs69icPhHMGyEN1M55yuBVk",
  "key42": "4wZ3D2zc1hmxTonQvtFnNzS6fqzDQTKdoQ1X57eDbMNvAxk4fSekbWfh21FAYJSgnSeorhDaqxdR9ZBXLUZca68Q",
  "key43": "K91bKLA5ar68sMQAqGiH1wGLcevTE4BEhpKAkkpMkGDKyPFa6UrfqmBiS2jbajtxrtjnWuRR4goaEruNon8yQ8X",
  "key44": "51ZJvyiKWyKw55voXmB95FpaNxanUjGsZH4TMP9dGSM8Q36rpzWMVHR3LrdGjvKPEt5J3EpWURdHgNZSTaqePVUX",
  "key45": "2dbf5zRwZ3ytZ7JzXWyG6TwjbNVsTLtWARBqRUxg7ChUu3uGWya9V3ZwjXxiPo42yxzZ1WXKKegSgkQoxtakw5kZ",
  "key46": "3rpnUWhFRA7UK43k7hhT9pSYaCCmwXSusP7igDV7rmjbq1bMoFUFeiYyxEo6eX9xpBsKmQ29akK4rzC6h4L8TH8D",
  "key47": "4GjcxS64D65nsSoLvxg92hUwanjg2cq7WbogFhEvnWZx5YK4wJXTqypdtuetkh7a7Ho4suPP5VUU8V6m9izeBCPt"
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
