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
    "1F6a9a6vwa2fP9t1iWPX9p1uPD4WZfgsmWfxPUXXaSBCYfDwPFch33LVFZdjXop3bUzB1GYsvZdPz6pfAxJtPmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GeJJ1L65VnNAwKu3Z2yKgdwaK1FJNQHntntayjkviB6BYkwXx21eboLaGf921NTtD56dDdGC8azEUoYFZ7SBLkt",
  "key1": "4MkHN6RiAVziX7KkeBKEYtxBPJwLoTPH24NUjCJyUELqK8o1bE5DkQnq78dBdyGPDr82nGD8FYTNM1Zp7bvgqCrY",
  "key2": "3y6TowKgAoJMVRHvA9AE7NRLBPUNqn1bZSEAKSYUitxkiNYuszwxNrQgsLK3L3URUQceBT3gnKSkwAt7vnbzLSEj",
  "key3": "5YmR91MeqEBf5WTRXz9xz8vkYnugVRmhMjUNQ8HhKbMrGi5aL7yNaoKyx5nD14BTiswDgXBUBRTbsBr8Cg7iqrwR",
  "key4": "3t2cHUhnygQs18Ur3hS8GG2GWcJjz6nXxFoMMdmHVheyc81mXBKziSLx9Nwx534s9nsz3DCGZZqQbZADMr8tyDQp",
  "key5": "uB9mPRW9npk3GPiPNJFN4pg79GBc2PposJ1oCWoSKWHs15JKoNRyk7Kt3hcvLEzsAAnYzA9ca5rcNNWtU885G4s",
  "key6": "4CHnChaGs3WGJ8G8cTLd3EKkFpPX5FVfyCNB24uTp53xUh1cFTLBN5cqzzdMEXzJHsshWuWR9YS7FhLbpcQDwQTz",
  "key7": "5KoazLsRUTWpzXqWKcFFM4RtrXB9uSwnHoBop8fwW7BCfzwaxphN4sy9fbtzqZUDVzXsza8AxnWp5sdpyVwgtNuC",
  "key8": "2PjUe1H1mRK3KZWh6yySonqPXStmuR2FMwWQDgpRpM7M5sucLWdsAg9MPMaSSbKUy5pLYikJTKRha22pEpjsZN1M",
  "key9": "37iDARohSJDJm7QG2o8LwwtyGSZywFhhUULpydjRP8Zz1T2G1D9BJ6uw2sAspjf1XDfP8djGstJytUJQLbKZsTB2",
  "key10": "4DZ1AjES3Xkatr8HVb9zheurvQ9Yi75gyX1Sqr8vii9pQgiun5WsBh5vNVrsdGSdRER4NDSpF8bUwPvb6YJadzBP",
  "key11": "2u8WfcV5hC9547cGHw9YSEsN57UcDwo2uSWXRSEyi9frNvfsMtxdm56sgqFNLZzShe3JppTk4UAgzwLM4XHZ4srR",
  "key12": "3j1zKXzSCo4rbZumYdSkKjX3XRSZsJTKatm4oAUuvBBktvb5hB24mPuFx14YyXUahaXoaupansz16BKNG5HegJxK",
  "key13": "34dV3DeczZN7MzkfvR2ckv16RbWoK91NYUsE7pdKfeL383LV2aZsmNdJxLQRuP5gkdvh6PuY6rXM3mv8YiJvodku",
  "key14": "GhmBQnQBXmuvjvz7Jm7MfVsAJ5CRs8kSZLRYjBCfw9Kj9pKJa5m8uxv455G4ernn3Bu9atABfnNoSELteZebt8q",
  "key15": "5hmuur7HvBWM6BTQsC53RbaMbv6Au5uFcHFrV2r7LsNQBKv2MEYk1PfkjAzARhM4QNdEwuVS4Z5nFGLwzwaAegFP",
  "key16": "4ciDEgckG9zZxpq2GecuEbJeWkjcnUx7Pn3MkFnT29W1ChXJkDmNst5AkZi5PacbcvDg9ee91QAHunc9jrjn79aJ",
  "key17": "4V3L2n3UYGe6GzpcEMowepGoZqmsNUxD38VoJtrrFFBMkpchbHgoTUV2wpPWfKjQ86hypqzbMwfyPaWpwGSvkpgD",
  "key18": "Zud87baYKBPrtm8m5PzsuMMcPtxnx6nhmyKn8RMmbTXfTrQUoBzP9GEewwRnD3cufW6Kge1UF5QEijAYdV59UfR",
  "key19": "xtBw6Mcyt2JurvoE5pwUf7tmecgEHnFsMFCKKbkSPV1QYz41G56d7QDASzhbGKhGP8gJ2ACrju6FDvnJBzkf16c",
  "key20": "4NHDhuEjQaLeZJrZHJMkNPDhPGnUTMzvrSk3YCkmWgVexQ7QVjZz8Nf6dGZzrFKq1s7MXkXuau85EbNhh5r8H9oD",
  "key21": "3DAtfMX2DxkJZ8S8o8M3ps7HjxwMgT7QSMBnke2cyKotrLyj2w65CnY4AmozeL3noPCNU3tCKBkRV6UNGDM1CUDP",
  "key22": "56B33RXe7G1GqZ5yP1ZttvJ6Fun1nYPAVwMQvf5EtBmEE8eDvp4Ehcg1NPMteNtqP4JBAKCmrSZdKGrTmpcHXwXo",
  "key23": "ZxFvsPhuVSN3jea5hmrmNJk5atzUxXiV1Cwfh8zhz3kogsrXYtbnXiDoMHt2Z6APL7Yu9ggLcFSGcDjyY7z5pMQ",
  "key24": "54KhdTj7HnwMTQH1TUuL31xSnELU44juu2XthPi1ubUNdNJyMztXkcq3Cb45KfTpgdRqgr1C7YwQk2A4n1i5Vapb",
  "key25": "2sVf8pBdxSfpD7ouYwqjKHVDgeFqUfqFGEnufyK3DDKAF2XmQCKX9ZXhMfDkQwBfEXWnxxJdV9eSeMpnhyaD5jZp",
  "key26": "65SRg2TgeQk6pZggoFT38pHvRFKonsowmnpdTkovpx1NWqyP3LQYB5TnbyMEd3zgpLUSsvGYzokvf7ps3Yv4ChWU",
  "key27": "3D4mQpwbex6y1eM1swzADdKVWgM7rF7zaPVmQQ6CHq9Ju1jDJADnNVG3do619aYfUqph6JrkEyBph8RTMdnAShx4",
  "key28": "5WfsEJFkbovgz12EJXR9okYdpPgsttnewqDnqBMcwdenZ39FgtzLUTZmJg7iYF61zbqmnAXcK7ypPYK2HorhuLnL",
  "key29": "4YFpWJ79RH6sw3kVK7UfCqwup3cAU1aoUzH5kYRyPaMG7rQNEBf3oZgvTE8Y1iXEdYTd2MYCfhwwvp5R5VPjfk6k",
  "key30": "4k2kpkqtHSLQkbsePmmvCFDG2rBcichXn6p6ppy1zTDwNoKBw42bTFXQspHCJnodg1Rgejnt4BTN8fMw1AmiAJpU",
  "key31": "5G5R8zCQUsCzDgJ7JXzz7Uegmin1vWkSQDi8xwE4ini4EmDRFPd8WX1v8ZVcYNZopcc6G9yGdsNifUX3bFcBMdsj",
  "key32": "4CbXSL4DawvDjyX4LRZFugPmP9fyf7E4FDYRqGidmAVNRksp4WgrWsmcj7VtHCqHJiubM1LrmmU7dH7NanUKBKZq",
  "key33": "3hFd7ftaoZLtqdsg6DDe3AQ13VAjY8eRmrNSQTCFuJdpGvBCRUsn6JxqFZzACctY5k8UG6sVF7T1BHFAbwnMwAit",
  "key34": "2SEKoEBDh7ymWUhnGVmGrqdZszCh21YfvzS4H8QRti4LaQUHnUpMG9Hy4wVWXRKHZfMvAJDvSMLetiGWBDdjFpof",
  "key35": "5VtkZzzP8TZ5XSkpM9z9Thpmuo7ACAKcK9dYEgf7EYEWHWd2MoDXoCxhZDgT6KdCXRuNt6uSMGBN5ttsqXyroDro",
  "key36": "SK47iBm5DGhPMswsnBWjSivMaCFJ5W5RynSwJwPVMFBW5vb5PK2xKuQFeXJvksznLre2LtHfeayy9YfVixcWqMf",
  "key37": "45eCmpERtRh32q5sfsYqCbxA5JqvK6gHyycFKE1sXzPURg9VFkWsxJbNRbFcECpKKRgPZBCXruxL1sUint1ZajEc",
  "key38": "64SkRm59G8WU3gkt4ht2DxcGwfABZVr1LJckU1KfT9w7AKYb3c8bAfR537mpr4xFP4seRqnmAz4QE3o6CvzjgN3B",
  "key39": "4pEX3uwbh2AUAz7CL5q9JbYt6E8p4p88QM6GC7L4QRUrqnDPH6q5gVE44WxGMvo5vkzSAf4YkJXJdRt63zJkU3Sy",
  "key40": "AUQdoce9vo6dSCaJhaVrVNkJdmQX4eXk3diwQKhzB8NJveQb8zGhrhr8gfmUzVugAZBNcsqNoj8pwfKGDB2VNXu"
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
