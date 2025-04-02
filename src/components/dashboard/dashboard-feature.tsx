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
    "629gXzUYKQ9fhadPvAvW124en52babnH5bGFafdw8JAXs3t2JuCJR8nz8pd9Xugq9WFbuoEBoPNRE7kf7aSs2eZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "631WUADBDj4Zws63daFLKUMGtrvMAeyEtVwRpbUqCbXWmcvxw4H2V113rAEJhTg6xswfL4BDyQkDPWo1RA3M82N8",
  "key1": "5577UiN9KCTByUud77Fi1fzuxFGzCALEzg158U2dpefetRSgNyNxj1FvgyFa6UoiwNwsmLo1TrDdatLuHdmzcoq4",
  "key2": "3u7rSY7sB6cu5QFfk8KQxP9iUf16emXofU24M1uXEi2MHF6usgjat84pFxgQey2vMEyfaEeuyTJ4PtdruNdstN4F",
  "key3": "dtqBdQnqm2fzngUNqtDkEmkrqPG94v2158Gh4YLXDN9PgieeU1wNFqSASJ3SsPYqGcAnX5KkofnUJaEP6y8X5Cd",
  "key4": "zMCN3z7hCbSHUz7UhZ8Zbuz19F8NMX2xab3ZvFkrTuAaeEZdJkDQ6m6cgfFKtyuwwCbMaPXtYAEgRvbdyftv7tZ",
  "key5": "29S7G1zVMEQKpbYLdguG7ovnG43ytDH3hWbviC7F94d425eNTUinxCJB7CvFMiuejL6kJ36aYv7nddV6e28MYePY",
  "key6": "zYnCRtDLsPGk4kr3GKNzVgCsc34eHPBnjJDX7SYAdK7mpBGqYkkNzjjX1Br8GymtGRwAr7ZbRmMAZ7ZKduDE6R2",
  "key7": "3dFyo86A48rhwPYWx4hz9h7o2qqd8hBabHPNvBDBGVKhDHkziJKVs96sHzMN5WnzR1q5jWzZpkDSZwoZqPXFYoXP",
  "key8": "5pugAFvA2q2GhD4vQg1kyjx8bZmeE4gMHHJShxmU8n2myskxQ6wh96YqB6dzQzB8NEaX4mjn5wwCWMJGytb8erj8",
  "key9": "4nHH8tjtDG5pZW8U3ufJxvmCnVkznP5K9W6LKW8DVrqMjo5YHVBj2Jemn9eQH8vT3APLdDCSxhZJmknKjcQMJ2bC",
  "key10": "29iLbyrtgGU5NLbudjg6P8izdZ4S7WCStsapyoEhv3nszPzXLeWpd1ebjWemVHsZT8Ve89uv6Zayyrvab4JbSxVo",
  "key11": "2JwruzvYJUuU22fcJy5cSkU3jYRM3bytuCspqBPZKDUkcRSu7rEA7Dt3GDU2EZ7yLfmQLgAJHxt91BxdagYsS1Tx",
  "key12": "4gFyUKCNQCRwHpKaj11v3UEK1NTHjmpmjXgpKvVgn94Gu3PHADCKf1CxyMGTvYeUNMKzTHv5X6PC6YrSHdKEpfLu",
  "key13": "2NWz6zzoEwF7rN6oCEL21ExXRZtiGSH8M9e7sVF5rVawstf34Q3bmiNWBFy1iE5yBbQEDQVRBgESe548MhKB2qE8",
  "key14": "BuCBSuJFCy6j7zwzDo8G4W3WMEWNykfd31XWVQuovG3ZQYXQALdwMTk9zfaVygSkbHq5FpfCC54YbLAzRbiGyLZ",
  "key15": "3mXKVMPF1GeCYqPy4ZUUWHth6hAVAGtHYQZ5zwGX2vDwKj1JHcs25qA46GrPhgE9jhRM8sLbEVXWWyf3THNSeAt2",
  "key16": "FADNEovDEBEiNNGyLRRPZzZFXrHuYjSAuKvrm3DxBXDopPrUdiqhw53pUqd9pNs8Y2BrRCbmRBCZHYXtZCeZ8TH",
  "key17": "4nx9i5RGfS8SSVZZq4M53BLVYMx2FLuTPfg6VTfjcbPVgtEYgqA53VL6CfFyo6zudnU4FCTf6EN9xgYiMYNgZMz1",
  "key18": "43D7TA8i4aJpVVMDV6ePwt5K6NvDSFm9wLJRJU1bq6n16MTGzqDmdzNoU7tfM9T7uqNcVYrRSmCBF4bh6fQjnLhs",
  "key19": "5qze7PVga9bGxff5mke5uFmuneR1RKEEa9YrzxbNhf13ejq3dpfP6a9zJbjxLhAfU8saVT9prXVZVEJjbWYTzWMR",
  "key20": "3TUMqQ2bjGiWBZkkcWHmRxtdgYK6VYw5HVcvtUFat4SZSaxCiVMzJZ4ssRFN5r9rCqdLRXn5dMNVjh645fvsjbT3",
  "key21": "3Nz4f4K9s4m51gVQNxNnwnpjWuk8PgfPAkCqPhjbEanQnbTkzpqysXQKAzGqvE29gKAvuSzg5VsGVLwSdbnnTGPv",
  "key22": "2Ww1Mb6tfKWSMpwJps1aUfXFcZ77zr8H7Hj3kMQjkGKCDSQRH2ZMkdbmNo5eLKv3fFdRyxS3U73dUZ7YywSaJdyn",
  "key23": "5hQMvpsbaQmttBQ21onmG4tCCTJbw3QXv9vHN2VDuc7B2fufg4c4T2wxF7jbhatR64KhyPo34fGGfgLeCbvLfjz6",
  "key24": "51Xu9dbKqh1ygnAFUtB4s93cQZFqsq4XhBJuTGZq86wcWR7of6b9q4ePwRSby5XQsDgme2DfyEaqoMzDFNFRjuVg",
  "key25": "w1RmTRfkt2CDMHosA3z7x2RMwYp6yTjsMwW7iHmfsEkk7daaT61kSKaNHFt8pkbjBJqepsBC15hATJxgG4s7pwD",
  "key26": "54R5MTBgrwQDMdHRLKhKAu3D1duS1f3E3YSj88xyC98BD8QBGo6qiCsobPnRgYp8fobRxCDTVUjJz72gUmPzdfN4",
  "key27": "3942qBwDbpQ6fuSeeCY82qbCM7p5cNfW1RimWgycrZdGyzWBM7dEpYwjzeBWcQLRkKzv3yWFVbktwBNNcEFBd8YV",
  "key28": "5haEXmYxq8tGCgU5v59hqbFBFL5s5MyggkjY4sv3QkXKMX86uJcq5uU9oge2xiWqDHtqbiztsiVRuKGd8hg2AKCa",
  "key29": "5on7RZkWXZz17oh5jgkveyLYt4u3jcndRFQJLYssqEKwDzab2ArvPXPqapkQkDtSULj3DLNXYtVpYAjiyLZ7uVuW",
  "key30": "2afT3jc1fwRhkf1BhmeEuo3ovgg3NHfrHt57HdHzeacsv1D6788YaUYZ3JLN8z3zCjZS6p4sUMURgQSZ5BQPRpcT",
  "key31": "4zeTgb8wsrm4D5fjvG6Q6S8q14TkjSKDvNC8c6PjcCnQT2jAh6CuKe5qLtkLZF8wtShtP1iREZLSAJmbCTuPjx47",
  "key32": "49E9i7jTQ7Nrx5beAa3bsTBbZRNg3qremA69jaNA1rGDVvZkYSowfKbtNMyoNoMo6s3BT1aRKbi1wa1hH36Xg62e",
  "key33": "aLSRs1mjTYfSBMtLjWC3m5Jn4UMo2oaZBKrkfQEnLXGY5CpnTn6V6h5fjHBhEaNdJ485a7CohHKqSYTmJQ87f1W",
  "key34": "CkYga5qHSNMTpvxKqijjZBmVngyaUgmFfNXnEPXT8poEUU3KiuU4gMCoj5bt6nUrH5MuYProzdGEkSVYTGPk8WA",
  "key35": "XFrrEDffU6HUenVFLXcxmba1srXwBuxR9SiCwpQihGp9PLFwsWRktcRE4YELr3vaTqgDpEo85WPQz8qupAkBJH6",
  "key36": "AjGsdxAG1a4RfZBRoH8hoWZqDuh6k7sidUvtLKRypYWVGRHABrrp1B1aypxj5Kdf8etwispETZDSNtXoAAmfb8g",
  "key37": "2c4YPhwrFTCDfthZ8hoN18DS2pgU297K8LT7pXEqbNHHmRYnhLKyhiJum8HvWA7TRJ3U74MwjTa2bb7ihCs8E96m",
  "key38": "21kFKC3R6SxSBPHQYXoTTMGyE3qntZ9nczmArJB9zykaG8aBA2rxrWJe3HZXxbS7iG25joGDH1KHBhWByqLryHA5",
  "key39": "4jLhsi69zBFwQ6WJx6AsChsfHuZkZAvigtG6dC9tjFm1gkpcggeyNgYdFQ1WH7PCowsMbhSB9g4j6EGpXEy5mZkH",
  "key40": "2zcswn7dgYFnHqhA4RLtXsh94unoeG7MJZXSkhfPq61MbTZbY4KSiUu1tBFzKayMi9y73nDfwuto2tJohzLHHh6X",
  "key41": "31QnqLJ2DvkK4PgDrb6wM3fK5ZBqxnGu3G5t39Ky3w4n7cZ2KVQwX5EWpznenotKjaKyMdBED33hh19uXGxQzoJ4",
  "key42": "2mfiLcPCXRCixeWTVDSKkgUyTfbdaBG8gqvrUnTE7vqB5sYjSq6DEGKGtMq7D7ierye6akwBBS8ARcvE99QEPVdN",
  "key43": "54NRHJPp6iAH6sGc1Lg3pyZHbUnJAxV9oQRtLwaPiz8BiHG67GBKsuY7vDyH9z66vo98MRSBtMZYaZNb7ZPqhUqu",
  "key44": "24HHBAjB4CtbgyQpy56Hc56cKVPQ5dw1nz6KCrJ2ajUanNrrhWmw3FU9Mmj7YSaUwxUmgzcANMriyfYUBVi1ZgoA",
  "key45": "5DYuyeD9ht8QwbCwVmwYxHskY7HBWfjALNiLtdcybcXr1nDZrxBBEp6tUA6PitEep6jM5DQuoLyqi5iDd454tavH",
  "key46": "5Q4N89JtuhdV1VqC36krwsTyBCPQCwSRzzHyEMG7eUR2eXq6rfnFVzERAy27iupHFg8siDS8oBHxNQZdkCGubASn",
  "key47": "3cxXD3Htz9XbNeuntj2YdLdbkDTCWAC8PDbmV8b6BreGFURQTnwHhckeG9fS1o5cUk1qVpyfKss53NVjXcodiy7j",
  "key48": "2fHfKYeGFLzZQJF5iyQygRxGof5BYLE5ztKfsK9e323XjFDJbqQUJUvQgg9gjxU1DHuynXDxQhsybsDwdkHwW2NJ"
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
