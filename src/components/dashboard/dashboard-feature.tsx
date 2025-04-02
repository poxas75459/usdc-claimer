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
    "5ukmV3kNGxXkA5f6F1WggEw42NDoGoQKxSbQ7b6Y9yCbEopU5PrfUXn9vaocLy97MVueqGTi1wJq5NdDqo7XjH5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j6PPaPQJrXw7J2vjzP85gRAMCBVCKeqV4MQS58w7RSRpmRq2YBasbPG7Ks11z9c5gahVNsuiQmSgkPq9wpNRngH",
  "key1": "5BJQXJ2FkWTJnPug14rT9GpcwgPM3ew8dzzR3ZMfiPvQDhzUXNjgzn1sVB1wxqVnsHGdWoHo7GoFBc9XNdEK4GR",
  "key2": "4UnAcfBpDv9ApyRuSpaqHuoXoeJgBUzhiDcsJC2etvqVXZLY7DbKjY2aG2ckXrTZURMWiLJqrivwixfNmo6PjPAw",
  "key3": "3Sp1hNevKxJQBVEa7CkR7fXAypZ2kGcGcMnWuvgbnvvYqgcX8zX38Fhsmf9Q3fJf3RoRgmwt6vsbhWBQmhNmBjte",
  "key4": "2mgtLYbPDQxMRnhP7HAWJQYZrjDBk3VqkYZ3HDWmAidp5xNweuYtNQoTuKEGiPkajVpHuSQPRwd9dypoog9RjXr7",
  "key5": "4GSngbjPjwpJxeyMQnJ4s8ZnSXnFMSyK7bMuL6cPuiAz28FZhRQrAj9d32ekBDf2CU3RPKREyT5ZHfe5qJ812qjT",
  "key6": "3JBktd7xZq1f9HcX9nRhUQi9Q8sBTTSbKM3vU5QHzSkCamVrugDtEK78VUWRHL82wwmRBBdiWMA1FSxdYrk8pADt",
  "key7": "3WYmkdVL1Git9YJzyGfuf8LXnQZ3g1c6X6S7nuA6SVa4LRFZRfE6JepiF3oz2UVPGFr2xVf1NdZu7qd3vHLVM5FD",
  "key8": "2tPb7RPCHWAY8qxJJHrGkw1QutoDw4QTkBTweqjP6UKqJYKFXWWu7akxEijkpb6tL3sBab9ZiooRfVW6SQpbW6GL",
  "key9": "3RGwaXo2mX8tTECLHypuj2zPMrUsHcUoZANg4Gg9fXpbyaKgRY4kAWvTRL78tDfP1G9RYTZGkMA9uovV2b9jm6Cu",
  "key10": "2yMY5Ap365Pa1fFKB95cBojbjb699NsGku3aeChQ9bw7Ns5W5bTHCoHHimbMa9HQTJ9GxiQSxyvfjqJZDwthZ4gL",
  "key11": "5m1wtwZv1cNE6T85ic9rnTeP4fdi5HcvtHoAPVGxhQP7SByjWoSo7S2jvsy9ynyHARqxNi7jQiraskiPrUkvSjoa",
  "key12": "2N1YdNEc2jf2MfNgn5iHL2Y5gsNKc6fQCR1BE4F4pSCCo5EsQSTx2RMqV4BT5Y4HoRqJfZoEqpJBmFrLs8yEKFnz",
  "key13": "RkUJuLLqxgq3xFGHAcnt6H7SU6cNFUzfjVpNDfuh1hMPyWP3FrAo5urSJuqfmvFtr4zLjdNry4KWpyFt8AB9K4N",
  "key14": "2wfYqqupCHRWKvHJnCPop5MP4U1U1c9H1jRE83DnRKzVdFnG2KMz6DrTi4CR6CcZtETBWFnU39nvhs7ZwwVVJjq3",
  "key15": "JMrmNnNnW4Sp42fvd6hmvJTCP6g68QRVG2rMAoHi6GpuXRbSaZt3J45NhuPBVHRs9DY8rH9khsrUMoKjqbXyXAU",
  "key16": "2qF6amsmDaqXHMe9Nvv3JUSmHN68sD6txupiCAkdyicFyZEyY6QFNE7UNtCSpthpMKM8UDBFSBFyU2c9YZGgJ1yH",
  "key17": "atPEfdWArDGPupGkKghzqesySVsWMvSCXuve3Dj5qb2q3yfCjs9i92zG2RBDnfV23rU4FAVKj4AHs5QXfjw56Fw",
  "key18": "hpZ8SU7MzzYSK6X4n6d6enD6YEM2UMQp8t1LBu5Fns9VTAsrAKUM1V6gd6MUDsvkUJZBNJahGuEAdiLKXFbEEVG",
  "key19": "4fHLEBi5EBw6iicX4WeDNq8A4vQGoWnTAZzekiCStVJfG6eG7t58hMLSVVQWmvWoVdYyZqqveExG5jWQmjs2NwZC",
  "key20": "51oRTDoHyqZFXmHbPfnaNv2xQEu3zzTbrFtvpv9H63srBnjbvDEcCzopMbQWFDV5wa45brpdkioriSiZoieVMAUV",
  "key21": "2xBL2A2QHHFaRrqfxkuuvWYSCMFJmAQfqjbZjhNcG4F7RF5qBCu6jH5m3qZJZeNPWAezRhNNGCeu8Z6YYhdnv6Rz",
  "key22": "47yLF3dKzpfQFc4XVKb4Ht7NinLH6MAkYmZpCAqkRoLWfiWxH32b537DC15MNDn6CWrhxsEyNoy4KKxuToMytmgs",
  "key23": "9XwBwvvJaivkJhFgznCmkuRQ9o5QrDyoRvnJ8WDywT6mRSPpYZZq2KBuPfAZtP54hfwn1BrnfNcDtLAMrE4k7rF",
  "key24": "4UaVy6RMZCiCJBmpfh3R4xezerMRGJyccmprpJdLMYYCTvvdk97orE3u8ivpXkhxKeXBJmTVpJnHPhCQ1sB4BVag",
  "key25": "2oXFh3dUgq2eaSV9sKHcwGqqAUWRS3tNS1fua6dUTWCUAaM1krLkYyvLHQa7EUYn7w9BD8KFMj9Y2VdpdP9xHG7q",
  "key26": "3gQ3eha3eEaTzwBivs3udbWcUFbGVQErDaE6tNF4scpGPC8RqcfGaae7Ji2G2SbwsdU67MM1VUSt9sZGjAcoWAjL",
  "key27": "53CEuoeEVmfF7g6hWJ2SywWoxhZqSSxVy2hPY4wUaBeHoNK1DJcAqqCaTGNkhkhkrYrsUTDPNXpLwZRyiDf9Hpk1",
  "key28": "612XWbvDTyKCtDDDxy2LeMwmvsibpVXEqLHFW9Kf9wsBrn7zmE9Qa1wsuaGfUca9ZvhgepmnrwxfkSRELydzWP9e",
  "key29": "5DcfABWNFtYyfo1GcAwu4LcdhEqphSL7t5U41SRKda1k2T23d3pxpDDKxCP2aYeVSkMiTWzU4pMT341KFoSLuJYG",
  "key30": "4vVxZae48MYysCHY7CwnDunprj9ViH75jkjfeRfcuY1fWqVey8PdaaHTfUhtkYPKoMzgoWozbYbYVD2djAYXPByY",
  "key31": "32pAJmzPxAMpcAENjva3Yv5RGy7M86pxgdEJBgp8uyGzRcEbssyj8tRJb7eoYDEUQu9eEHmbCbPkLuC7rjR3NYNW",
  "key32": "4KUdVuhwQ1BU2AubJA1uxz73mGmUiFzHDYwB8PjbZfrWfpeQNf36zjscJHo8xQ4HmXMwMoPneoB3mrBuYtajpv1C",
  "key33": "3HrtJoKxw3VULQEGhAi9UKGtKw7THict1A9Mdw5vMmdze7qgWiTjmABryZAyGXjGf5yH4pHbPoyGWgTdQDs2Mgow",
  "key34": "36S9AGYgyEpd8HJYarSsvfaeaEsR3Yo68msRri34iXiQG6oJpVvoZakorXF69QFCbE6koFwGedMRQ6mTDhkgvb19",
  "key35": "4DdJYSvQy5Mk7U4VBBev4JHCZ4CqhVetGASJhWXtpckxfRitsLnYMjYMD4py9dQQL7Bg3B5gxx7qBrQ3yZq1y5Nm",
  "key36": "2AUv4Ecc7mEdmL1n4MJQFHo5nDBAN6UQPNVqcEMfC5FosD3nJuerWoa7LDi6cLCNc2qiM8XEwry7Wm5ekNKhDv6W",
  "key37": "2RHxZVyLk1fTPVCMqdPJrjWLx2vAHdt5Uc9mTPebyYUCWKbLMhmb9aLjTSYQ8HmuV56KhgvCWcFiPvGCiUpVAdYc",
  "key38": "VV78ohFRyuoHBV9kKzxX78iUVVegK8Dq6czzuAQckLxNKZAXQCn846vYsvJaEb2w8U8X8ujpGg9EirnKPath5BA",
  "key39": "64kD1Bmwose7NCfeYCLbtvFQPhjjK1gma2JNZGUgG3rUvcqX6Gnc6SBPy38S1oMKPpL2P9YgbmSSVqFYoX5GpoHB",
  "key40": "3oZvH6k9qMWZKWowc1rnTFk1JgSQRGGJ3VJGDCJvfLys4w8dcxA1ke8sRHB5XQcHeDciGDHYj5nG2grr3YqQuwU9",
  "key41": "4KDCRFnXMwY28ZcPJi6t37HWVKdLoNQRhN6YBgfcMxbwaJUSji8eaDNcfMECfmboi6dJ74nxpv9Y4bkY1jydBJix",
  "key42": "2sogDddMoQFMq1iD44RUs2uGjMKccr4YPzUjAiTGN3ZBGJNRCaMPJ3MXN3XZeV6YVMbygepvjZr9UP2oxEPM9fSi",
  "key43": "4VgK7y5fFTpwuJgbVNmq6cRPuPutJZ9iVuedFTMXah6DG61djdSXj55oqFyXjvRyaDLgfDmryQvVbka5fubCiQEF",
  "key44": "5oX82W7yyfhEy8q3vg7hyqNBYJt3EPdQd3c782jwPMkRqKUDtiVnMdn9ZFdwPge6mwJacJeLADR57Y2nduYgWcy2"
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
