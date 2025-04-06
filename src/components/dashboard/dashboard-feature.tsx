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
    "Nu1Tu3Q46SNULZ4jmuqqVXuezygL2PQXerR5Ld4dnyJghuRs7KahxhLbVWHB6KNh1Azx5RM8iZSaF74zXhgx7BP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kHo2wvLq8ddLjmfxshhh8Tcot9x7NJzfWav1zRjMfnEAYECg6h1ct6xJPUacJ65KRMD7RVUHjt9WpoaGokWeTy4",
  "key1": "5qU2n8bqXh8CbYCgypbNgcrf2QTNo5TeqbCdwqPztW6Mc1tqTSAnzLs9JhYiUZHEKuJZxkMrvhRGcJv7KuVyD7J5",
  "key2": "oVR9dK56uDJqTt4twdBKdNwi55PvyVaMwNvHQ4n77GbPhkwQwdpzHB7ARFMe9YmfbSDS58X2phbmA6kzc8exLUp",
  "key3": "5LH3Dazgr8PBXfagt5i1UJGTHwrxb6sTqExYju4gGCkW6Jv8xSnPCNyAtdtJrZYu86kGurw3NHv3xrQ1XEJhf2Jw",
  "key4": "4gjtmpG1USVUymajMff7v8bqsZz3FdunFapjFcjjY7y3AfA1N2wBKDjgjT2fWxB3vwwCegEUPMQPSX2DyJGELSCk",
  "key5": "3vgbEtiKFquq2oexjgpD8ZY5oKw3Gn8r1ccta1WfxHCgw2HuZEvwx6owGaoEF8VS3v4TS1sNkj3bQFs7rxcx1Jnn",
  "key6": "Z4nyEfvoMdXV2oVvzXNdm6xGsJmbJmJiPZa1VG1BK8A4zjnzyJVTQSreuaWr1swEdmHYMXW2otmGqAZgBDsY3Sn",
  "key7": "5g7EkpXatPrYkkPaqTxq45uZk7mG9gbMb5gfJNKnhopqWuJo1dV1DBLCJgqruGMjBJwfPHrSCXMGsRgXtsXSjDTu",
  "key8": "QC9zwA95YFiVR2skbmpyJh4zsaUrFc3sh233C9k9yntWq71tKUv7k61TTbDUvyk5C4xJFXXwTHAg6SXqcfqriNi",
  "key9": "2W1Xb2RbjB2hEqH1yAaC8Nx8a3QhcJ4PjTjf543qcuAGrfUqq29ALws7Gghha83Vajm7eJoFBxwrVHPneWhyFXoM",
  "key10": "3rX2bgtQJBqCDtUejqo7ES2d56RFExxbiC5bb4EeG4btTge5mmLQNgs6Vv228AaRJmGJ7NF9iyB41gYzzv2nYXUq",
  "key11": "62ekPhduJmwTSGzNaxuhXzSJXshGpCinGLTR6krsr6hwdBEo18BRtZ94jSxvGL8ACdcYTY3TD2xxUAYNDY92AxH9",
  "key12": "fJpU5i5L66WRrUhuY1YZFSj2XoomYma4oAXTYHfjpLfANm8A4TLErL7kYSp7i2suqetYhpjEmKQcFByebjw7LXi",
  "key13": "2Z9fCQzHG3jEgrvaSGb1ZDA3n8oLZL7JrrCSLgGYVoLJnHKS2z4pFYPeU8yU57sVnSN79uzPgJHg8gFCm3bsb7Ju",
  "key14": "4XwqpjY4j1u3qyCENwFbTFWZ9rxPV6id1v8DPrHTtU9cE5UXKKiAPZYA79dgn24ZMkbBa1SK5T7b6dncbiGotXW6",
  "key15": "4mXbmfqvk7f33Rmv1vSzx3vjU8NN2nnDbXaDeriN4WkL6rTEAR2fpRxz2wf8a1zCH4TetSJZQz8NJYPY2HwTAYXJ",
  "key16": "38PL6de7BzQYBVLeADWxNYZJziZbkWiNVj7GPgUFYLj2QTPZ6pF2U8y6dGTSC422gUtjSqkpsc6fa7pXCrBqZGPE",
  "key17": "5YxHUizL8PEsYMPduuCa5JWXi9EhqXzWsBFbfyW3HjkE8btLFYRddE8Q8aDp85Kw332N5zenh4X3Kmte5JggFcga",
  "key18": "25FPiLRPTyvRz94arQ7zvfPWUbJTauqzPpkktSjiKURGJJFyGXKiy6MHc76CnG29dy6S2LXLpBinSKnp4x9rmBZC",
  "key19": "2KtZMD2krqoCQ9vX1eCaozraHJ7MhZczHmjfGnS4NMiVxQfxFg5NYUcqG4YHEP6gCkMSYWzWfVk12icnZuJCv6rj",
  "key20": "2DQeh6M8PrnU5mapVvjvCbsSu27gDiBccFDeFPULpAEzMQACs2JsmUQHrRZSUbAGPu8BKoKKwKeSyCsxEvwBSEcY",
  "key21": "67U5eaTzC1nvQULCdanc3eRHoYFk2w3xUwM9YUrZW8mn9odpPkAPyuKysZBWgPbnZPYme6UHNGieTTYbGprVoPVS",
  "key22": "KfNMcsjw4DpMGZVmfMJAF4rm4R53sPGpabUnJQX4CJVi2WX3zVJcthkLMDEHi8JxFhep3rHrsArJZmX1yfAVmFU",
  "key23": "2EZZW7uxtUmhdrcnK3kmk7PXjfyhAFk5AL9SAgXamUQeoiq6Z2GDXnNBvxR1JvcFNS42cAVM6zC2UDkeGbp6rBuF",
  "key24": "3TRBB4skGjCebPZFhzufgk7RGvw2QPDuv65HUPx4HBLE33jjY81fADrJVgksyND7Td9AKNEbY9LJ8VkVsqGxSDrf",
  "key25": "exfpTWFxYvePhszoyCh5n5L1yKEYRThJUCfg3HJa1Lgk3qxxQhQhyn1rkgiwrRrgJWJHJD2Mzz3wPrVeCXMcWMH",
  "key26": "24XzaT6Ly1joy6WB8urd27EVvw4AEZHMwBTvXWzSmoME6a9DAXKFjD3UxnLUdsijSxRC1rJ3uwNAYdCPCtVzTBVw",
  "key27": "PiDUy4NE6Pc2EgvmiCuQS5oyGjZFXZLBXwVeTEUwV6EfgnT8dpq57npweAiTBh6Ym1Qsr38oAeqWovp92XLc1ob",
  "key28": "2GAW2A6pDBZnQWXDXzHSFSLEcuC2sQVuj2CQST6JPmR2jR5NjdWY4khvK6GK1rBzQunUFPaui3mgd2dZ1hu4KzVn",
  "key29": "35r7rMUbJ5pCDotjvskmt19gmrxY4Xh25ymgkXmajhiaKRXjqmLVHeCdDGvyMbk1UuNbrqsLniriLFVPaBu3HHBT",
  "key30": "4uUBTph6md423fN8za8Z2uaJs6y4tHJvY4Cxgv3YfURk2M6BCzugsJCLzkx8ryz8E1YaPx5Lt2H1uxBaFRxyFxmH",
  "key31": "38gQL3Fc47GbiYpUavHismxC2V9XKYK39qbskJyUHqkVysxG4HD9CJDTxG2xvFvPszQowhPs7ywm5F6v1nHHm8Uy",
  "key32": "3XMrEFiuMRp7fDiiMi6L6hP6zbSpbUHQAvT9AF2VZssUa1KHWwwCLGZWZxysnE4Xuu9SnL7phTdupTvkNKH8yDJW",
  "key33": "3LVruU8zVDWg2dFwDtEWP8o91DpqnWCcR7hLhQdpssguPqWwwi5j8fh3hXj4MyoWpCywvN6n1nxmY4LPfr7Sty19",
  "key34": "4nenUfqeP2GiXPuJYGsjGUrDM5G3fPTYiZTVC9AmMg9E544ZN2cTRCAnWwHKUa5oSqQNPE8K26AEcgj5LtYoUQs6",
  "key35": "4ZpGFaygf3GmCBxgPWRBi83QVis4biuAUZT9m5cUpZQeMWyQZddc42vbPg8pq7DjCAi1i9vVsb1wAHcgarMuZ2Ac",
  "key36": "5e8HPzjtMiwUxWpWyGt48oNeVZcDRQihRkH2VjV5tGzZJthhHME9NdnNCeUDbwcKNboMCoZuSzNNs5YF7Se42mrk",
  "key37": "fTRfdQc96Gf3dz61YWA3eoSUsViSgPNdC1tvRDb5U6RPmSwif2zes3U71AQg5Jq3RwjSsoshc9vdEKkFLNv4wXU",
  "key38": "4jbk6QURthjX7AzaQomGmUAM3mTVWfWowMGkeSoJfViEcHGETguk6FW4ehY2upMpzojEfswnLDCWpDZBzkFMD2tL",
  "key39": "2n9USVwujj6ekQ7zHzskpWb3wmYTapzTwTwKpAZWVL4fXUvB2CHZnBWo6GfGGwSh8CJu16umavNmDfKG96kfmsuT",
  "key40": "2HLCMv3JEyc6PiWLk8rPnZL4HQMrUWvE4cneYKxduwvcoz9RfHhFHVUrVNoguCzzqqZHMCbLGTtKLzoc4whU7itN",
  "key41": "25fh1TRAKUkabjxvjWqTFpj56ftXFYAaNy64MudJjgGq66VgdTwoyzPQZ3UX7pZc7o2AFWbxWTn3Y1HTvHVWMDRE",
  "key42": "2CjRS8RYAEEXMXDuwABkf3yXjqVMTaFMfHMaxKxHNf3DTPRqmMev7CEdRzD3XZ6gg2itFFejZkPRnGMo6frRkAPV",
  "key43": "35CGdm1zSUNDbNrYmy3Dx5ZxEHrX9ARTnhaEJWBMRJPN75yWjaXvt18r3ZFXpdZnseFqmaM3R3n351AaKgnKYRao",
  "key44": "4GBvGXsrbgCjZL3NjGE8g1jQkM5uwbqEX92C8DYFgcoqB7DZ6D1bNZdPsTqFjwA819p7DYs2zAVAo7zzxMLPmmyn",
  "key45": "2BnVHvip5WbjJtZAeELGLnQNy8wdGg9Ju4LknDLH47BPD7CsGLaWb7EnLjLaFtRnprjedboP3fWoS9VwJGvYrZtC",
  "key46": "668pFYZMPHMiodGQhUgj6fLPCGX8rBkieRpu9gMpiqvXm72xgY39oAjDN72Q1KNu4odb8r8EHp6vvZyrHCYPCNt3"
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
