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
    "THRHFX3e1Ls3oateEQpFeF7pxwc7n435xApm7jjxspr92dsQB4BGbXjYGmFzoq1R1ZuaZX6GHcqEnQ6giesgsYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GkpKGaSM6vtYDRtJKSj62H2McXdPU2qgznZLRFnJG7famCk7gMK7XwUWjMZLNQUM2Uq975GojUQsx8D2NGSxQh6",
  "key1": "Kmzzv2Q7GwGX9gd9hbzGpKSVThDDfdAVqoSTW4g9KCH1qBu8gnorHyZnPbFdkFWajJXB2FZTmGh6TjwvJF6RjCd",
  "key2": "2CcXD2iepETHvbPaGw7B6tGMNBYGMNmt6tzCmqBtuiaDB3zsD1McFcWUiR99uaqH2y6c2jVwYZ36ydqBu1Fwun77",
  "key3": "2J7yVL9CqkrEPd19LxC34eSuMcGDaUWpeBgtBpBCmZYX97kpE7LoSd3eTrvaWA8rHUr6YnBK43kavr6ucJ9HJKcM",
  "key4": "5GhLEnoqBEa787x45uvy4xreypNxZrxo5wHyctdfmzwE4A8Vni4mmvb7N9uNehz6puFJXVF67ZCgoZETXUwrQjus",
  "key5": "37LhP5sGuTQvCWHWVJY5CQ2JchHoiysTohw84ww3WbD3VXtaFZT6T1acz997c84Z35rDVys3GwXuEnp4KrTdC4E8",
  "key6": "4EiAR5ZJ8Yimk9wfTnePY61pAPKgKndkS9DVPQ9PQQAztrk4qjfsA3gwDENpEdw2seLZmikceMe7ZziZWn2VmJxe",
  "key7": "CuqZdtosrBtFm75KdkaRDtPpFzZQmsgcoj7HpnPqWRieoGJ1QPn2d5mconK1wxSLJtkVECa3JevPHgng5rbmK3m",
  "key8": "5SaQ3R5X49HXHu8o2zYL1nT7ZWK2iMkXj9CF9USyTx7yaLqSobFeEpVAUKhRJvqNPtxbQw2sNLE3Fb64NpD1gGbx",
  "key9": "TizFkaRfHy8MehysWp3EfafytDRsX3dc2QxE48FCG37Zp5QFvNyYiGf3LzRfT9QsaJeHiFUSu9hLtjKPPUfwSqD",
  "key10": "31dFFPv1RMbKiqkNXVnQr57Mr3R9PtBBGZ1Fmkdtf16x2QSMXVAJrG1vZa5YrX8CdBtKvGb2EWbGTjfv8WMaw1uD",
  "key11": "2pekQEiRUrqqSfzjU6YpkyfvFSkWzZDBPcasoE1g2oPm8vJsCdVTPNA8Ez7wow7PDZBEedkUvmmbJnoFib1yDZ5g",
  "key12": "51ieynHW921PZQa6CWqsPzpgrTPpQURh8NSZRtrq5gCVBDcL9Qv7GKxbxNkJwiCDHA5TMDcP5xSU5Pp7eRVy3UVp",
  "key13": "2s9XJD58DMUYE11EoQaYQU3uocPHeVyVodjP7sEj4ksVh1BZaFLeJ61HpTBmhExGe6YmX2uQtWFYvkjw7kQb2sZ7",
  "key14": "QcVntNYXEPvJwuGCxMT8oHEYgpSfJZjfW7z5eJyw9gXW8Rc9CZLypqvr9Yam2ATznXhG2veQZmxnWDWUucN6kcF",
  "key15": "2pWQ2n8P2NofQwe5MNCWaiHCA65Np6mVbQiMjsHmXCz8S2UhVpDWQ5vtSuo73s421yHZwwrvhDtazEiuZZJmTdRx",
  "key16": "5wWkU2e9CaMmpMqumqEB458pZHounCWK2uShbAskDtFH2o2d1MpXbCeHZoEn9w6QoZ45HvuvgzRmdQDvk8QLiL9q",
  "key17": "4MfHQQrLrmxFCBYrrWTPSYBe5Zu14Q4d1QdGUmbgRzP7ZKY4NEe6SZZyki7RFwZN9mmFUHmGhRXnwVkuH1eKSo4",
  "key18": "3XFZPE9YN31Wd3KL5erjTEirRk2CbRTbFQXcbrADVArfXxdTsoseCzMdkp2FwnwpiobUnurLWbJ7y6Kf1TW4XDC",
  "key19": "5jAD6bgCpKXerLBDfwyoGCxUUE56A1hiYHMFxeJCKQCnzRHRyNc2GWR8qdYWMz2FG5g7qVmpPvdaNhiNFsjmC5zm",
  "key20": "5v1skcyaWtkuQyoo5RabcNzGbK2TWpH9msGs8X8cDqjk1kjPeBbBrQXHuzWyPF4pZDskLbhnpL9GqJ81taAfD6zG",
  "key21": "4ECAEwraz2b34dqpx28tD18FFAtMPuKTsZsKKdhWahFjwQemTWbtRXjnyAYUf2gtJ7Gh8ZnP1g5qt35gtGnnxS11",
  "key22": "63XyBewEszgRed6R6dE43Quk2gDK8rUeKtXT7khxMeFus2wQeAsUJuA2Mn3EaUrEkHRDSEJoNZZpeVFqtHM4gcmG",
  "key23": "5BHYxgaD6KJZJu7J3vxfT5tSRVjbSDSNAaadQJPfjjUsQTVT1r4SkH2NrQw7AWk6pW9EvWVxdQUSLSfUur3j683X",
  "key24": "5oxvPsY9gb9SZMkASQjv5YgBPrmWjjNJf9LsLZB3Laszb1UgLxBnTfdZrdKZGBiYQN7DdZD6uPumjKJNk6C4HM6",
  "key25": "4aKq2aGQequbCFwDDT2qDX9SRQUthhgmk1sB3TfKevVzqgnZE8wjmmeM37vCZozNebTj9sjG361W2s9C1Ef1Foag",
  "key26": "4Jb6Ya1AXAKyVfXNUh9JY7pMsqT5PD3K1ZGf7CQYQYiCwCM6UF4ycUiA2hdiHesuJL5gEVRQmvbP9aKCughwVCyJ",
  "key27": "2DfXgWPXBEfBQd8yQdCxWwxFv2YDLT9qCUBsEd44hCTrJKG9w7SWYsQ3kzBxa3cE4HuQP8FXiML4m2BCjApSVHW9",
  "key28": "2EZSEc94gUJYycCaittC3HVuyJqA47mXffobsdP3iC3c4bZKeodFmf9hRwCrnYEr7gGeiucmA1zhn4u91y2zNp92",
  "key29": "5Cgj4yh4wmMU3j19CTQyDRjjf86DeWoRh1eHfM5mSwBEUaaqZttLeqmWWaj3YxKFJmQU89AWfexWSWTeq6GcFrwe",
  "key30": "2FwkWgqFz1aSswJe2j3btcYjREskJRFgyUXhJec4zMVR6qfoeNRbNDpUnHC5uyuNxyLUJ6RABx5RtBg7pE1iYrkw",
  "key31": "5pSyUriPhs7j8CvdXAUvo2WJHdzYC5Ss4XxpsKVjiAJgNvV2KkrR7mycMtBpbPfwQHz61VJPmf6rfjrNXng32dvz",
  "key32": "2DopWV81xrdERbBqxgha1GTYCAVNfX5BnbTb3Tj4xPrUswxNw4mxW8mVTwNfSRDMsnpKGcMaQDDbTmFagbEcS4Tb",
  "key33": "5ELH13iw8UjYgeG58SgjwNrbMRzAW2yCKh5YwkNTQq8HswySLonjgQqr7H17HQsv8kpNLxLgZ7CkzdcyD1WZAuDR",
  "key34": "3bZ7hjUP2GMwvVqmUq4dF98TTNqPF4GWcx5RAEJcGKixuWE1corofLLqDd1B4p8N1rhP2dBhDEiwGwXGhgvwB7br",
  "key35": "eAX8g6ZcUPxXQHo8d3q1727rVuSFjriCcmp6RkzHjBd8d8arD836bbz1BBBdUd1zYnq6jB7sAVMvjspaxE3UvuQ",
  "key36": "5PNbtnR3yw6vG1ggbSrHVm6fSf4i8YRPyUtMbQhEo2qwQaisMpLdAtxPUT4Qa8xCoaDBYuYsceXTRkmYigQPXcVQ",
  "key37": "5YCAqSR9rG4y4UQzid85uzQUhniCMfVQK4A158hDYR8bSAzLXCPccayHpu6eC9RbwqbddEDxkGTqud4yuf8BVYtL",
  "key38": "3XKQgfMoyHDTGDH5hMZnSxFo8MrAZLPdcsP5VdyWEWmJbcq3sQ8DkAmUd9tiQ3foCLZGeknSCuMBgpMauv55a7P6",
  "key39": "5MRoR1AzN2QJTcZJSUgMtvjx3gf9YbFspNb73RFVuETm9mAdaQHwiDWjCmf2KkY6vbGetuBknkQ2SgssVVNvXHCs",
  "key40": "53HZGZva9fvutDWg8yT4CFz2uR1b1QCUCkwpDh2DKkmA2j5wwzJgfXrzg58uqWsoWMdJ2RLKGstbskEPfga3dd1L",
  "key41": "393i8yhba9Ub3hCKJCYNCm3g6vPsQoQJGBASQ9d7CoA763HkFeYFAAT8fbKHPXc2Tvkum8Z7a3gcF8g447YVoSyq",
  "key42": "5GK21Kiro9HDQGGG2PGufkjyzbsfCcgfnnRCy5yLagPQcLMbg8FXH4w7jP8qsaFL61BDeAzb2V4BYTdev5h98dw",
  "key43": "29BmebTzBB49PbyFFsL1WxgRhMw7ZC2r1XH7S5VCXyNWWavYNTQy12JqymhtMAh9HiYUspkwecYYLorL7VXXzEuw",
  "key44": "4B5XJHYUJZPpqzq2Sgoq7AjHeuqoQHHrG13RL4iaYjPWEFqPeQk8Z1h4A43FVXuAz6hi4rauQSCkiWEjZ5hYxfLK",
  "key45": "3FxCA9HUqj5zR6cuB4Kx5QtykNE5Yq7DHAHDkjQdDJy3zwtL6gRNvcEGd6EWwehQXKaU8rvzvB9P7ghFwe5NwTWA",
  "key46": "3H4Jj8HAE12c4dxaEagKkJXBQy955RwDAgs6wPvnKwersbyDSsF6QCokJiUZKFLLUw1gqCaGB5bht11Ce8N8SZPK",
  "key47": "3yfgxfSowRob4sV5p3k4QVwoEg7o3aEqd8R4v3hPXSi8Hk4tQnVxxYrTUrcLQWby38ArvQntQKjtyKUK8TQMxtEA"
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
