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
    "6526NoW4wXcnhugLUuFEPpwnNwgnBYFnPLzTkxw5eHR623Pd5SXf4n4mnW9jzL1bt6gWn2bVQedRjJQv1inyry33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tZzXRWQGvDKfWLBfkBHzJpPFiXxyAbgBtNWvHBmyr4PUcsomWZevhmCu4JZ4ThztSjQQsymX8tmZNaLoFGRP1Dv",
  "key1": "3M4ZXjYBNA9a1H4RydXxKdEgvzmo99KfjJ9xXW8XYqnHEE9csxgbLEcFThdxz5izuVhKa1gei1cDWtv51Y9bdGb6",
  "key2": "wFua1vB7fHjKJegysGRMWT68VTQsEjmW6Tbiw7HJo7mLGTnCCcvqaTRzCbqocAdsKWnKyjCNRYBZg3UAcewCnBG",
  "key3": "4dse7RXKscqeNxnkpgFW58sb1TA24B6atqxsdUVXSUL3QzjphvDLtQwwmH82DsBHW1t9VaXtLVGKDNMm1YZY7i8M",
  "key4": "56sgnBGp6NdE9VigEvSPEYpuUC7kqLDM8jh2EpuqyTHPodo5BVUy6pxW54zCNgea4yDQFHwdqxX5oL556eq3zhsM",
  "key5": "3oKBLzf4BchbzMxruvv3TYAEc19rRVNCMWUbyrNfBTBnFVz1dNsMUwKZkrwLR9muL6MmbfAaVHrA4vLnrJ9WAHDz",
  "key6": "5gwjDBZ26u8RmYCZLf8eBEKAUj1paKxfHS3nJQzEJC5DEDiXz7r4Fh5tiQisijNH18emcY2CecVz9myT2whrEsTs",
  "key7": "xkgTp4pEvmMDcxF4HJgkmjACzoDuSeRziyaHUB1kqS17fmM1Bw2ij6zNFMVs5sK3uez1b9FvRNCeBFbxT6aEnCQ",
  "key8": "2kEWfJSGukZUHCQUDdLS9aWUprXm31h1SRjUsetMQzXHw4bKjX9XGrqJvVa7wYQevmvGEZ96MKbRVaJQvZt2cPMx",
  "key9": "3SkQsivL4ZMiKK6H7hLjrgkSfiu4ocAEDHnbAf4iqAY2j9MeyDhYwa36KsB1C5TH1mRwXAVjmCGHiqjKPUogzfYA",
  "key10": "4jEH85Lca4ckRSxPeDgy78snkLSErtiUU7JE878pDrCM2Nrtu3NXMmrzs1rkkUMr9ZaNvfJph7Gyhf6uCDYV6Zg4",
  "key11": "3o8aed6bp7fGyUxyXadB9XcAV9Q4q3TJ98DrDVwtn2Af5m7qqnpkEgroaUuC55uDQtFvGRs73arJofLjUXR5M5Jm",
  "key12": "4ia3qv2r3rVQUoALNcYNsYLsTLHa1pgmKZ5nciWfmyiZMeUyKMYZA8b1wPeyDa8RoWNNiuSx5gic7rHj2n5eLX4c",
  "key13": "5jdmoVqHJWG1g6K2Dams76D82P4pcwHga1tnKSSLkAWjNK4whejWLLQ1NrbqfNeASBDi9bXCYmzsu8AhPMoxcUaS",
  "key14": "2VJyrEnjj7ravbHgCK8aHXjpbKSUgB6GDFR1givFkkMWr5woX5dgnb2CP7pJtFen5kjeHqgAivcF6rYXy65hiGPn",
  "key15": "4yhwVCZ39eMvBSVzhGtM3Sn3GLNAPt5zcqWpfsFN2iByGWgZNssqDGVCVg4zrxyEacMT9BiMX1PMMSj5Qze6ceo5",
  "key16": "4wYpKnj1MbjBRdczeeDPvPB3zb3Ta6Xvb6CY3FmJREh2WwBH6k491VcQ2N5w67hsXbpNyU2fdk12km3NXoSqr6rr",
  "key17": "3737CbZLj6FqEMdhFZbwJdfVP4Jety4cSJoyYqFfdswkRaMZVVgYKXT1f455P4gB6MM3eQ9wGnYbR9PTJM95kqxG",
  "key18": "2daxcK3VGSN8uSMWzQ1xToPcrpSPHg78uHYPoDff6XQPhbthoKw1VVpfxWnnJNrCuXue5bJAF2A9vvZgETQ9FBX2",
  "key19": "d3zRVqQmRQKnSjP7ygWZszSht9nz2mEbxiuGvTSv6ur6FKmxXSJHF1F6WJB59G5Ht2gF3R43KJyfASp37yKTiUV",
  "key20": "5mysoXA9ruj7e67yGCkhe8cc7DCSawu7ZnHpJYcTp7RXSCzWF8XscKoo7YQ1ugU5j4D1RjtxdXyB8cwZA8c9RKCa",
  "key21": "5nTjEiMLHiwUmBkwFH3Q1AzmvAQUwSGMXkwGAbTXPkyqL34m4ZL8KeqTeGacPpWhWf5fN4Dhtfs2EpSZHTDkkBnB",
  "key22": "5tmLvik5B9L8eMXqQBAh2Z3A6ZFBofmuLvgz7hXBo14awWohJyfZcBfCb9eDj6Y68rB7k3pZvxVJjy3rxqVwPhir",
  "key23": "4MzaJdCFGpSH9umdQRGqc4pahekbC5ifeF37Bf6s31TaQimH4FbxWEhStv26AQk5k5sGe6DUPqdgpkRqnMszvP5g",
  "key24": "5JiEDf66xyZPcqXKh7WvWaPZiR24oxqmH74iyLYte2c3L3w6Qf88BDe3dZUufuYvyKcay5NAM9erzEkVmF8UCn2K",
  "key25": "3GCBs7BthTdV14atgemLCBec4tjFLasxGR66RLDqW6X9CVkaW4gFBXKJhtedJc8T3PXUMrU8FaKtR67oX5b66KZ",
  "key26": "jZDsXLesywix8qJgH8rdP4wiGbJvDEpBA5n6jk2Smecke3eX7hSVfMSCfkiGXKcQZTXJm8UA16azSF7VPdoxoqe",
  "key27": "5gb9TmZMxS81hyz1ru8Wh6mxjTbKyTYVFpjJcUFhbNVtLtp1o7P8FEm98dBqTrWuotC9wq8fhyACWWsn9Uuxj9MX",
  "key28": "pRMqMQFHhNoYncbzpCDquyoLVnp6kSWukdMv7pZ7utmQi66j9oCysc6aHBPMgcjgApiQkyZQ65K3PMHGpNjsjZT",
  "key29": "529kTM779CbkvEZkETfXbh2GKmVQ25WNM2N3jiW6rPGsouZ1VoAjaoePJD4sXJZuc3rvSVKQmkMFq5bNsc5P7Mxf",
  "key30": "2Br18f2XR5BUgXwaDV2KbvsE9aHcm5DkmMqFeNh6vXqavWSxZCVuVbB2XzVdKGjFNtiTDKuFZA79oXb7mNkJYSUD",
  "key31": "2UaKwbjKWq5zJpEiSkjQXPD8xi72rYCJJNKkUANgcisc97fDdsxE6itmC4zMLi3seLxtB1zfn9TQL4MgTw6UGN45",
  "key32": "nKj8K44W6o5Sdgxt9KbbjwpQ5N28DXRFtmxszUkvqPjSXpNyKJq5rJZysA2DyydYM3VAnCU8hSafh7Ta453Fkpr",
  "key33": "2VgWWtiR2d3DU3pmK1aX8ZSnWJLAY5uUV2uYW8KweGfv9qffaZrrMc2fwCbPanYXZLwyxqvRVMisKhEgAGFRsnaY",
  "key34": "4wDS3VwPr4EKqBBiX7fAbVywcsFbToc8FjvNF56wMt6RExJMLXGE34ZxdXJAQhgV2ndmDDPZUteTythsynH4hT3d",
  "key35": "43QbCN59v272mTKomgiQS3qJcwUt1kLNwA1Hucnf1qcDYxUf9fyePyMhdSwvy8ZQ4bbmgo9mMbXBBxKHasoax9wH",
  "key36": "3mVVgodNgzxazeDvzGLZNyJn7x5M68abbEoCT8t3646zohmQBcXuEemevy693jHrDARY11jKk1ZUaW3DJvTJeGvm",
  "key37": "2HdfFTXq11LZQsWTEXmJ2ou7PhnFQviuDfXHVRnHrDzvsXcpuBc53dh481PWHaue6wVP3mPoq652H3BXJ8Lx2CRG",
  "key38": "zQSieCfeHkNSEPugrnRQCgzautVSw4UmFZoeM4FAPrpqC9Q1H6BvtvmTW4Fe3gCGjQqfJCFVXHGQbtuJrxcynwd",
  "key39": "57AeFoKszumLxuj6znFUCG4RR8Q3qLnAHJb5ZhcASAGbicmNeCc7AnKvTk6uexyDQEuphRGEu9kdckjUcJCFshr7",
  "key40": "635r2WyAMmFxkEj5iKQhCd4hq86gzEmKU3b5kzrApfi6KsS7ZcQNpzPHNhdQQArz4di2rZro9Xp9CSWanp4RivxL",
  "key41": "UTVQu9q9ywzEMur3uscm5y8jsRfU7k3u2swpJb9DqFipH8oKjKG24kjXUcdUCHk1VxxACLrHNdPqjoC8NYjMctK",
  "key42": "5aAJyArL7F3vbaatyrX5MgWYLeWSqajYjhKQa9REQ8WsUL4u63v7MhCYJQ5xbjMctp4hT7Q28h2PUPM1pynfW3sB",
  "key43": "5gQ9YF6yZqBjguC2FgBXnMLWPvfCUjkiJB3S2fKZB1HvjHaaiYkbrb6TbueJWDjbe5g89YdfqTxrWGMaDtbhx9Zv",
  "key44": "4Undet42Apk5WUwTS3NVRrZGhdTzpxjRfGAnjVwvVrnGccfcs3zraBfVvMnugmsHz16Lj85RcnWPjR3wRJWDqEwf",
  "key45": "wRsfRzZro9akSEkEjYQHNd7ebVJbYntQnxjSeW7uNqrzRKBEH5NNNuk8j22HsENLTxeiSaaYax2K45bvSwnowS7",
  "key46": "4jifbjBukiGnodxCnnJ65YzLVtKm6tQGDdXUMRcpiioasWVKNsgJ9YTWAwTpQzRsq2YJAvCvqCgionMbiLDJsrGh"
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
