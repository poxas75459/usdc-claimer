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
    "5bS3M8RAHeuUjrCyWNqtAWJBLCkLeKSb1QVCrZF6jevavfXGEAhiHS3Vyww4tWz3tFYAKDj9pUQ7MAeEAxV3ttji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tNfiGRvPmgYHuBb7YJgVFkUqHs4D6jUQQBGpL4R4zvzgWiWWpgD8k3jgr4TFRZD2r7zzeLqEsT8se2kR4uu5whX",
  "key1": "xWwVwe6WaPsEv8kimAj8Q4LNfKwtZhZLmnafGboxYtziRrFGwMav3hsgkwgCeQ2dXQU3LYLMeenqZcRTPykEvRE",
  "key2": "yLPDZ2BRMRra5kQWMewB9m475aWMA6XDcCgtF2sbFd6WLH425BXbK6uo6BxjvWsTWuSXrX5bi3A1PvpAaB89DV4",
  "key3": "582SB6CZoEgFzRYpJsMqZAKQ7VxJin8sRxXCGoJRVz58MMiiWvLqbnhtSKCeN8AYYaohTLYhPX5XkUsrdKx8Bm4H",
  "key4": "3rYX5QgvsVwiE6eSAMEZLjWyQYXunu3NYZ3Jh1qByA3kTnpEJeVVGoarGqkmoaPnvTcBPqSeUBKqRaFXnw9GrFMr",
  "key5": "kyZbqK37bz9K1RWMQovbyW5hFKcW2ZCt2RoTtnX4JDgR3fkrTq9EzojfapA18TgyR8YePZwW3h2RUQe9h7iw3xv",
  "key6": "2ydcxyRgDthvA7QTSo593JY66QwZKY6tCzcvSJEkWq3jBjmsm47sspdCK5qHSdFkzTrcuFMGzpycy5WTyfw6tf19",
  "key7": "32DNZyu3JVi3YmiRs3k8UDjvQRwpRi4ue8wKtdwYSNpKZFGeG8BfMDjZUv4NeHnzxJcChg6PYfbRJiWKzCZ9hpmm",
  "key8": "2hvrb7Q1H8PPbj9NL29KTdMx9TDabYRoAfZmNkbwu5q4hyGTcRb1GzTrnb9RZ2F6BTzddVZQG8cojFUtFgVgTNYS",
  "key9": "5RWyuPGp4u6Jkev2FTE1g863YQvARxxCXYmdcDW66E7gHRF44rnmUcDE1jHE7XrocLuzdf379VXnW8U4NPSK3rev",
  "key10": "3QZGRuUNxyHghTqZdDBBKXSyV9fKqJrNEYGbG99DdHtjgDTiwWP42YPBCiKvf4HHcGyrPhRvtpKsz5jieAKNNWft",
  "key11": "5Qc2UbvvgD3a7y241s7T6NoZAaG588Udse1AG9FYZQS362eQXsJi5U2k3iksLkYjz1Cq58YcY8FGqvT8uNbwtY4L",
  "key12": "2mgAMiH8yhyeoCooSRBC8w3B4JesRpiJPJpHCZijcDun9Z1feZpg1Cq5r48XbsubAeicxhCZT5vQ7CsQHmkNDVyy",
  "key13": "5wdQpmVuaMSMFk4a2Zhfd5MSnRKVDxj5eKgr51qPqbbDTQS5KoaBrYc7qS8XZMS4Hd6HbC9WqAcFGGraGQkNPHEG",
  "key14": "5UQvdxDmy4jKnAkdwdTyDvaf11qPDezZz5Y14q9sabTM4NZuiwhzoey7VjGpwpZyfzprY3zEEsBxwqtm5bw2vTEx",
  "key15": "5Cs7d4D1zbVuBDR3qGCcaBiMmXEh4WWK4qGqaXLkkdSuX1wMxAWwBX4cqjyguXsznwf87biNsHF6HGmh9pLkYea2",
  "key16": "51C9yDuNHtDeActNnp6d2GBJyrXnf5rsM8vpByTbByG5QxqPnfEhRwyzmLHhaVuYXsZEeYHQhnjGXfnZdHFbiqSP",
  "key17": "4MEhZu67LJZhkksgWyScz4YqAkkquj7MHSp2c5V72EZXaZhyGinGW3SqTorVCEp2Wj4NtTbYntaWeLiaFxZgcDv1",
  "key18": "5rf24nCnwwYxtMmK3pGfxFddCL2a3XHo7En8sMjXmZ4Rys5XSYxMEbDFEcPEcTPN3kLxDGwhRmmYLsyZzQWB2QQA",
  "key19": "2hGu1uQKVZodapuXqK4cnMWAjT7HijAYXe1KEwo5onmgAxkyPmRz9vMefxBScP2dKdCBbFt9X6uEN1XwEDtcdmJP",
  "key20": "3v8FoYusH2r9ZDoQyRq4CRB3TqsTHPoYiPG2YfyRWfVHZ2jJnjZjxgg2PP4Sj92Zmpuyvm4oN7Hu74hy5v39CLMf",
  "key21": "pVAsT5HmMMnJ3Bp76Fz4Bm2UEwJRGKgaACyAAGEPXUBUv8iomqai1vnN54nswYWwsfDdLkvrDKy9WpFn7DuvLkc",
  "key22": "3voZarnXHPd1ZRDnk5xhZxVmwo5XgfevozRTwnsU6uJaCRFvTtMXSboHXv8DuJHL9NssXpcTHSx6PhY2PRcme6jp",
  "key23": "5HqwMqswXMjxufZvKMDN2Cqfbup32hAhTavskWAaQpZwMqJC9mJjjLUqPjq6v6PM58WN6MYUHLXt33opYEJczJpy",
  "key24": "jK6vW9x7dNz6toyQeKKB2kmeQKmM5RHxDqqfFfMwgFBGbE4zBxQKXoC7R42jr8f43u32u9bTbnhKex4DGkFpa7L",
  "key25": "5qAKzr3t4GhaCSzyZpbQaPNxbqqMMucLqPtBQsqHJezHvL7kBy9doPbGgDY8FZtT4KFWcLsV9wUsi7xzeziiCdun",
  "key26": "66GTRYsP5Bx7mRS9fCDU2dgWPdFh6Yx59NRSw3KQv2RSoSp64MGgNv88CDfNrni6K7a5FHobvvFjCBCaY5MJTtMu",
  "key27": "F3CeP2fVxu6tvsnePgK7HALmL7vDSCqxwx841znY9pnDakQPGmBPPEnnM1NTiCdDA3K4KCUX6aq1gJzQ2GrKd2C",
  "key28": "3QyKtTu5GAgsFtriRr9yw9ibVp6iq39rCeC92znk6vUTwVu8pzvtgpRoqDk3Egvpm3sZCZYRNTyDJSgEAnyibcU4",
  "key29": "64xG3DAVQywt6nEhR15wT6NQGgTmbsYi6tbwKBtRW2AViThee7JtXMFue59hRRBcp43QDuhk7kEafYcdX2Auhumg",
  "key30": "3NJYKeCncNPRksU2bi9XMJJdPExzguqBMepTBhWx7U3fgNcfWvbwQiihoQwGAJYd3CEGVUrNurciQvKEdh7mJPLY",
  "key31": "2515uyNfHNyTta9KHviibF6oURvQs2MAChYZzL8g5owDhnX8GpABhs1XhJzSRuXUUVa9sESzaieefHCfz472uKCx",
  "key32": "BfUveHGyUqXMgMzF6h7Lx9gKHhBf1jCjTCf4qzcAJmi9vXsdZzF62eQgs3Mr7FMuF4JWfVdE2cgjd8iDntyByu2",
  "key33": "5vNMwgmLDAM7ejvR21iHshs7gkZoxuoYkG4hikLbfh8kx3MqUv8skRS2WfR7e33aunh1FCCdjdb59P8fo2VLwqeu",
  "key34": "4fqweYqJruWVghWjjNehk1zQAeEj5SXMom5CXx8H9NqPMBjwxdXdWcgfJFHQ1ZULqdQx7zBX7erfxDeW1EF3zDe2"
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
