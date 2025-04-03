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
    "dFBdr219dVnT3xaUhqNbPnuN7CJS6xsezq1LdfSiRs9LoWSoTBSSDH7HJQ8yxKxMk4tBvQRC7EnMSbESbicTKLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EZDJB8wC8bQ51f1FytQu4eb9xfCdyewrALPPKVVvwckPQd6H6YWL5Z6j7ygAVndDWDTUnDuChhJE7mqHDB3Pm5B",
  "key1": "2fAaSG7HmhB1HGaxD9tga3E4qJhab8g28EJRkFGAB7gtfzybR3X6QmLFT955bu6eKknZjxSeiHxBSGratSskgqaU",
  "key2": "2YTdCjjxFC8NMk2mWfR5Z6KNcE5MdG8jkqzJn5hQ1o4fkdSxLp6xTXyTiz11MDQpc55gFgegawrXJxaDej4RhcKJ",
  "key3": "5sAeB7BasrGzPGynRABSbeLd29gZo1mNVR1xVyEzQjwroUb6xXWnneXWygegPEWeYtwuDxbij5fQGHJxBFwjYWcK",
  "key4": "4RLnpd52jeqXGgPis5YUPm1yKMcgkhHhQBCYXWrxvJKdCusKw8mkR938bZcJGvmRpozE22bTFjE8Mxr3hToWmTjB",
  "key5": "35uwdEYEEuhBAeRfyTQxFViBcJxDdZhLJFJSah5hximZmJtmFmhbCfnwWfLEu1Pjb6gWWWR6SDjBXAYtjjg55qtc",
  "key6": "2sTe3ebKcaBmbpi8xwSLA6rNjCR3AJwtQ23HzpsnwaQmNpUvQhwjkUrRvqMPbk4Gc81nVheD14GTjuGYd12miu49",
  "key7": "4tbjUdjrFwJNWGG59U7XXj4Mt2gvT3arF9dqp6FZRSsKpuCt7GkvK87D2JDrVjkUX5QmgzT9ZEEswAjRAEeCLejF",
  "key8": "6SgXw4upzGjBiZAigPm6n5PpanMLNchamMrDbYDyWxuNzGqLYDwyBvV8SZwcvWitvivhAhzcy4jdSaaC3owZog1",
  "key9": "m7kw9aJHmPj2BWtgaNU7tCi6gwjfYgRQyLwcCHNzbbpPF2P7U8QenYwpw9oHs4iXnFwTjGbp2KK3U5EZFTQRUip",
  "key10": "2cF3GRoNvV49brDUUCZbLtNdXYTENodGsA2bQ8CA4vnkJhoh3gGQYL8aR2uGPovaC66YNnLNMMtG8VebepxEG5Zy",
  "key11": "Nnfk2TzcFAhu2Vqaz4myAr9h94NhJneRaES5o8A7dQd4jEoXq78yLZBGU1GG4i9qHJ1ij5aK7i4FyDVwKJ8LyL7",
  "key12": "3aVnvjygazn9ysMuG4WgeJnPewP9ZCSa6EdLKEAshdUEc7m5qghMQPNq8YQV73XYzfCdEEoQ6HkLjXBef4NVi1x8",
  "key13": "5M3C1HRDrCqyJnXeUTj1MM7dCpT4qfarP4beHjbnNpHRSoYUFSCBgdRcsQDaYKhYCWNfwqgJGPEdqPjvBRwKhFcN",
  "key14": "2p9wXjYYLqgcKiFKQNU1D1mmULkKFsoLuBirUUs87id6RjyJ9nHtch8Sg7gi1j7s9eTsARRTgbXN5KuBDyUBLYsz",
  "key15": "2CC3537KUPbeZvyU6m1uWpifFFmPQ2smqjrHFzEWU6fKhpSddA2gDJH3XmPwVBPnU8mLxso1Eh8EZWJfvemVXZRF",
  "key16": "5QBAhsi6JQ525YeNiCAf9gJvG7jNaWTR4x7jvG9hfNjwXJsBUsMmkDfJ6bkzxe7noBCzAtiC1dk9vXm1UmQSWD3E",
  "key17": "3SnZxLmByW2yxzZK9qcXQgSzNVVHrrAr9i9gUsa3S7796VR8VyuNR43nyjSZB8cRcC1Hi1JdR1rLcx4P2MRgFWJf",
  "key18": "4mT2kTJYxGKZxYteBQ6NYxkXkg7c78jRyfqj7Q3ipnyb56Cbor3H498rN3dFwFp5gtWbNaLTHCKGrBmJvE9hpDXE",
  "key19": "4SwspJB69Eae6dmWN6JQa2iFEBgzX5kv6iupnoS623UjpWr43PSihthg6cgSvM1EU5F4cgF31FdY45FN3Y9KKA4S",
  "key20": "534sNrERqTtLn66w7bfzhuxcZQgnKuT3fG14ZvW14V3UQRgH88dbEKuWRMqJ3GyjrHkuY2NMs5ApyAjYrwQrL1E2",
  "key21": "5KaF8jXpGESCssofa2GhyU6GmnpeP6oZ9vDDMuRgYyRae85cbhvSDocmd71wF9kRCxupUzBe3rJCY49Em31PVZxB",
  "key22": "513nt4DnncPMZddnSzUKjHUYG4ZNediJmL9BweTtPe2kM193apGPyxeFw4HLJDrNd6S1QUm2F8Dvxndm1LxF76kd",
  "key23": "4AxbSst9shEYMoKBjLc2zJb73xP5N3j2ZC17PmY1npbe9Pc5rjWi21B9csJ5phkG6PsY1j1nCe9XgeV7SvSfpJUC",
  "key24": "3zf7U3ZLqeamgSFoEjhhdeURczpdXXyKR6UYn1wnwkJNnPQruojLjE8TcSoywCr2E34nZvreZrfSzRuDxZyyZs5x",
  "key25": "3RDpPnbkSX2yWUTZDm6V9vAyusnwMfe44cB8Fknr5452aNjxptcTns4th9qVjU6TxThYn74PzAEu8YSB9UmPLLLr",
  "key26": "FcMayJ7XnYneuyzqthCfYgLefjnBtfWiV8HFCa8wwVusKk3Kx8a8wyiA11JCL9JAJbRcMpNoGXR9WNMnoL4Waie",
  "key27": "3NWUWYrWKGaq16LjBZWqwRUVKzTexoTFETvFg8LnrtTntTtiSDyLYTU3qzmctNNivpxcgGQTUdRYsoaMMM6u4zY6",
  "key28": "7UsfUYi4RRAe55mx9gvM5oXF577Hg3Pb1odwndKXhjQ85e8CLsD1ibhAr2PCpFi45VBND3pogNhgsHW9tMc41dZ",
  "key29": "2WHxPE3mcwmVHvoFVmH9a3emRyxqWkET5QuhKmJeK27dkmWzkyzXmAGSNHpDFBypFhFVpu7UFYueD1j1nK2JP236",
  "key30": "2xVQWTRYxCR7PcGXmRWgRfS74QKTevcZK9eS6aJyBrx2dVXJWPdfzhyjynakyyUb4YNoz7ftVXPN7vYpBNwUrDep",
  "key31": "27ciLoKwzTciSyDTjfqXT1yLrqjTUGaqo9awWamUoweo4pdm7gYwBqa3u3LccS4UYapSzejvxNHoDFao5fcJ8EsH",
  "key32": "531b1q6mbUr7BkZT1nDRB7isTCM2VZoGSYzy3k6GDwb6NCVExdkMBUjeQU4G1LH7sesJopn7nmSiA7vxizrXEt4g",
  "key33": "252Xa37XvtTiBbg5NiVm1zMXcPbVHyQHw9UxPYzaGuwiPFrTPLf9G9EZMkCu9XZXxRfKsX8EN83iXUGWVpuhpf37",
  "key34": "3Bt2xywSAW5jDXBeV2ropXCQwH2DgoKhXaTkMePDLzwEYPrBth9wuZNrQgsxGSmtDkrjE4MdSXro3wP3DjnkQ2XB",
  "key35": "F9BQLKZRNYiXoTVFpR46mBbZxcjjtJfGWEY38NRG8Z8LUWcqRuFcmwmv8DoLVT65fK3QXgQyw5r6DwLQzYyYudS",
  "key36": "25mgR3D4bviJdab5GKWjMVR5cCD1wvYCUZ9nEixFhTQ97ewToKCCDX4X8LvRwcUGB4k5bRDzAiyhV9CkVbXjnNmW"
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
