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
    "32cD9D72M8qFm3Hn4B9tkPKLamuqQTtke28d1LzELr1jfvsjnty1V59onmfMLcYDfdPd4TsDPhp2UB3MehiMTpun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qvEqoPQpdFmCPTaDkzvmZRdxaYnTihK37A1zSAuwxrYupGVWESDDQnV5kvt2EAS8AS4ncodfVKHM2Au3eRizz8j",
  "key1": "4mgKcrYjuiNwjqg67hiXfXuTiUK41ZbzJ8UFSuFSAoChspM5WFZDN2eucDM5FZQhYkdxztREWA4wZs4KwfkbXF4k",
  "key2": "RhaVRhoQHajaiXEELPyXHgLMMGHAgVLJsxDF8xWh39aHq8rCKq9YpZdmKyTTWdv2pY88bzV7bpvMXs47rKZF7m6",
  "key3": "62VKcNTfWFUZYJ8u7BiwticRVMurMFqe4RJ8ckPoqKYJmESsSDZeXUsSVqyJxu7hstSpowwC7bMoy6s24G9QtCX5",
  "key4": "3bD9317c7M4r32ENudDUAvveGLGLaM43hC9XGPpnMBGrMtJAob6Av5YE1vvk6W3d6v3wKvcaP9PrBhBzpA5PEiF1",
  "key5": "2a6RwraWHd2paBE9ximb2GZBiPtTaM34M8WZFmhVSHfSifwNNGcYE1B6Ff4zS8Nwa6eMATYQSGRjcwW7yWqhPP5t",
  "key6": "HcPqTtej2B9BBxjiWLFrzJDd2aaPnXcs2R8Svfpb1A8mrEwSBDLZU41CuA5HVy4nSY7EF38pCFxtJTgnj1kqYM4",
  "key7": "21sgbHnS1R8CqePxXttHwjfLvpm116MDFpNMjU1tsQWzbYaLTnuunmTZgDA2PBJrKLErtectGcvT4Jeu85WEMx7t",
  "key8": "5ULLCm3pri3bccXf5rPGzsmSRTuQs9EHHzQiPYUCjcXs3smpJVwWXjmiwB45heCfgaUvWgeThgyr1JhnWayeJrhN",
  "key9": "4Ao56Yxr8UZuPmKC8AdTVdGu2m8QHDnsF7siU5BTeiHmztkzjqj3wT2ibYvy1xxvTR1NvTYFmxSD1XnNMMMVvK4S",
  "key10": "wXR8oRLcoc9TDvGwm3M3GtDvvsUj75dyNFzyjmFABr3BqvnKNuhLWNJkNRgpfAQbW9vhdtWt21pJmRZuhzAJoDv",
  "key11": "gLtPWrKVmZBT1R8Yp4B7LpNENF3ucNeiYQUB3vrvvkKSx5cY9f5fdjhpq3H6tdFaSmcfsYwJ9tq4HDRP8oS1e8M",
  "key12": "2ZvrPWG8AYqT56GpKtTLEWQgTUvfcnQTKoQnSMQfdoxgZvVnshUr75xej2sQncPRoKSMKMF1GxhssvSd6C2mFVvZ",
  "key13": "5jNY5YST8wPsDDyt8U8P4EHCRgrEEJanEnukVqWRopy5Mk53sXGmX1dxgnidnsXvF4DNUsNptMGvAJbZhA1pdicp",
  "key14": "5bjdeJ8ekpWkJRdNC62Nr8qjatG8VbHoAmZhbxcsUPnwo41uHboectWZt7H7MTBsDy5G7PJSd4mKrQwFpGdEx9JE",
  "key15": "2xNEsdgxa8Cusxe4FJqEndLBPYDhUDHEabN4UWfQCJek88qTbCBF2owir2F92yJ7iQADFzeiph2PYvWe71pxQKeU",
  "key16": "5ixraEGEYegqt72URD8uQgD8GsVpqpxeQsJ1xLSt5fJfaMvZRd1NAgRsdWkjHqF2aey5XGBLbVGzXkNKSnWHeUdY",
  "key17": "62Z3f1LUjAvVc643Jg66Yk5hZ72Toq3FxPEma6C75KSw4QwmY3BCFJaTv9C2WTUhAhF8BAZsCZ8AkGBvA2PodYnK",
  "key18": "3dybzWXMZUqvfAwPWjSbvxFDBQrm3imWxmFkRg4GkwiLq15rqgonRNvSu78NE48ZxBztMfUy6oNVxNtdPKku53ym",
  "key19": "5sqtu2E3QCNvY228cFt5LUBQLefQbCsaFK28ovvjf56AMpNwo3xodx2TNyq5oKFsLn4AecHgQQDHRTMYreAcp34G",
  "key20": "2i9JtpSELBGLDrtV6dswMmrmTWhbx6vqkfAFpYsjZQHY8uE4HKtqNnPRnXd5q8dEDN4RWJTpEYdSGNis4E2tNYC1",
  "key21": "5CFKgv8rQ4rx8ajGp7jSnJEXTScowMMzXD1xKgwrxJpXCP4tA6aH62iN2XRY9FVdY1cHyZvb5pFWESvZpA4B9CGQ",
  "key22": "pUmkkEkyNLaQd8fXUbKc8XKnT5hSMM5AGLQa9oGitiEaeEpV55VPP53pq4iRuDsayfFMENonVwVRuzrfVD3gmHS",
  "key23": "ptds94sQM1wo1hZhqzCzG9dexD353v2WtkXvaHuagN2NfAVxyzdsG3kjiphizwuVX82YJ1NZoCN7d3dF4wExtDj",
  "key24": "iVVk428Fz53Yx5CLHXRSDz4WuHoAjStQWpcqfBpGM4kNyfYPry3w3wuDbGkfCPQeVsdpxjP1xy5WcPTzuDycbYC",
  "key25": "4zkqjq2x3NuTr5YNiqvr6Ve52mH9rEBi58LRvUAQwVoDKx4UTZkMzxKHjmwqkrm51gvHVzicXb5LrdAmYrjDr7tz",
  "key26": "3H2gPSzQHNTKJp5vib36MJ3UFHR3gFensdqKRQsckrkAzSmP8Zvrv5xZMnmmbcSCXKjHyBaV325N5cPtCnLPU35W",
  "key27": "2vtPhsy5HZruMg8titiHysn5CUdjEb1CU4ecBrFjXZNvpupG6MzrxEBek5uUGn26VxmBRZPyFXnbqroHFowRtASq",
  "key28": "MD2CipuzJ8vRpGuFvNHMXSaaSTmK1hyRViyBEMd5eAW5bzqWz4AAhX83G5j4HMZaDFtY5uaAUv9bgfU4TCfW7uD",
  "key29": "5fhLLWCJK1BgSL5TFwt1efdcgDiRiGUZUVbE8KGyM4u1Sknaaaf9yc1W36MmEg1CEkzRbe2EsjoTNP3vctE3NQTg",
  "key30": "mVo3ZTeFLhWXZbkjqVNY2S48vuJW83mcBcg36zqgysL6nuyC3KDUfL9s71tHR8J5tfjVobR9gCeEE1vNqqtRkkD",
  "key31": "2GmS2hmom22sBNCNJd6CmW1ES2TwEtYKZxQbSAhoy3jjNahGPAn7L6cAa2e7Nt19R8KCNRsGsWVLaALN76qABoNc",
  "key32": "TKtbkKtZsDfmh7g9K4ANbD2ktC9LixjYtuMHsw2xMxP5zFRL2nwtp5NyRNK3414M3DGNvNTR3ZzuhQGLcqhW63E",
  "key33": "b9Gj9mDdkAuPaYzgmRB3yGECcr1LBM9t4ffFMGwh3ehJ7NzwqgktzsHqJdtZYwW51NVC1zNa5ktauAhz4bKN2ep",
  "key34": "4JLmj6oDG5Xne2YoHR2hcNnV1jEBvoUiB8LXXNiUMzovndgbVqxxskiuqj3QyDyZUVWkCmdcXuYub4xhv4KWzcwX",
  "key35": "41fgP2WDGCm4enfoiisShTLXiGH1r9Nio2mn1sJQaSkfgsG3JdZb7N8GLptDrrcbwryCT5gJ7E7xEx8wxSXrgtrP",
  "key36": "5pCZPtmSVNzUhEW5EeYxGBKmPgqYEBk8qcv8Uz3fN2bkMGsFwLnGyfQNbovf6vkYuRBKzoaJC1evkN2tYtpDWXKr",
  "key37": "2VYAZueJ7rVBaQpRTuSQLUbp9E7tSYkJqZmqB7XvxYzbJokeANZob3CUnHc49JRfD67cDkNX8rJrJQ7UnfE9Cg5B",
  "key38": "vtkHHU3aU6FW8efFSkiR6QKMWm4q4kPB8j17cknwcVMfUwtR4mw8nxZdYTCZubsfsfpZYJYFjgRa4pU2v9LuEqB",
  "key39": "4FLLzQpRXzCZ5TUUxWiDCRw4uqWCL16tj7LkEgKRqFXvBqkBDdcW9WdF8NU1FckuRe54w9PaBtVXBdQxZSM5Gxjp",
  "key40": "5vueUdVdPeCLh6QUx5uWjmo1n7pEGDxJoKKHiLpsapynbsdNBwj4KyvkczPiqJeiGgVio3YJZoGFvL8p2NztG8Yg",
  "key41": "5MRjVRQAqLHNLyHG2qcJzoF1KAcXGzu15s2G5GWsfvbV5DHYx4s7EqUpJRQ8SsKdP3s4nm1tW7csFUN6RebaZQNr",
  "key42": "4arPpNF2Ub2YupBUt6oH3BPx482T5Lqf3NJ7AQbqP1Xj87veLNPZ1SWZzRRfyqaASAnwtWRun4BsDrawM1VDjUDs",
  "key43": "d9CCHs65DHxcF2J95ZyHDCdpc7ngfLiG9BYLuEGFWrTg9z5jqKnwSgWkTUuPkamJBaBN5VgBD4CpT1aUYp3vaEK",
  "key44": "2JfSMJsb6hpBxUFrnP3kd5E326tctNRtXNG6BLVc5riUmDN21Cyw9sRhmXq4fXYsQ9sAT13XAKe5UcLM3FPm6BNC",
  "key45": "L76UDW38qibXwc4AeoMWFjPRpdsEborrHYQBtpKcMwJ25VuKkvwWWycF1TjTPkhoWitdiXSmYgEBjPAinnXaxJZ",
  "key46": "2aNvhm3yUxWQZqMYZP3G2oo2DHDNpdw8iJgC3NvP9pAdidADZjWmkqBwgBLEi7TfP5mMtLUgAz2tHkSoHp8nsm52"
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
