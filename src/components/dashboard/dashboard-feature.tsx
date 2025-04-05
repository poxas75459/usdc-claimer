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
    "3ePQrkYftNVK7Cm9H5iAMNDX45CaxiWNgu28hBCyPxXLZ1yyuJsVgw7ee9E7rCd4du1SCKvqT47FdvpfusbciVuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i7oYba7u2Tgt6HSbR9Gxcjxyxfmok31c7MmWAhPyWMaUXZwmvfyMjqd4bTP6shMfWzM5GNjovQvqRzXRpBG9hBK",
  "key1": "4xJoJrCkBekSsRubtK81R5LQjNHkcvRVfWqpB8B33gPz4rNVLbxgcPKPhbNnVgWY5Qmw681gdiWNxVwfVFZmGeQC",
  "key2": "2bGp8FoYBjYbWhsW6omesuPHuJHQv1RV6V7JxvGFfmZB3PJTMuiwwRCuotVgcsJUGaZznfnFj8CbuHnEn7qVJ3h4",
  "key3": "4a76hAuStqF8Mkb13nbRSsF1npc4AKKhbB6sNvyHqCRYbAZ4DtKgkbHexuiYqhuHYMukdPDgUapRZPkPQhravoYn",
  "key4": "4DUUL4uFK2ZLUqrSLdzgjiZPhNDfE9wYDFfnwgERBvJGo4JUmDnosNMb4pR9v3HmkcPhSN4Q3kkrJLkRwRbtcuQy",
  "key5": "47wHay2t1FXS571anMGBito9zgczLTZAVtMFLbxnPugHncJ5jDZx1VTUSbCbhsk2cnyaQniVyLbFiWty4CxNchTq",
  "key6": "2wfpNo4DtuTSVTdEsQ7VRqepwNeEJfvs7wqzWbwLCRq6dCuVaxCqT2MHys951m8U3MWFZQpEEZ2eDKmNdiHrk4c8",
  "key7": "5JQx9ZirYrFqrnW84r6sfqsx72yzPaqMyNiECjcJQt1WcH6VNjmEkem3bhQWe3FFVurtpDgieK4HahM8GfJKybQP",
  "key8": "3uoKPa4csiTfbVaPDzAtoaEYBJkwXSsForHcdFMfPEoY2uiq6ca6m96i1r1FswmypnBS6zmgtdBRtHoeyzrAzm3T",
  "key9": "3qoPbLTSTMNcWmYnmtp2U2eMFfka85m9fpuF35JQmeMcNA7AQanVmL4j5WuCMBfdHz3kUHLEQa77HYoKNH2kcE6T",
  "key10": "3gqXmyfXZF5WsCMWCQBkxmAcEs92p9Lx5kAN3carVngKjniBZoHYmrDhjuHxUPBUoqxhUrGRz29ZwemYu5Xn6Af3",
  "key11": "3ieHseHrwzbFbG3iduMG9nRxk76cjqYxuXNiCL2f4XowhpfEnwHZiwKqKSbV8eVv8RuzcR8fDvrXJMFgxKPoe3X6",
  "key12": "51xzYEiuMj69wBMc3HEgqibfTZpzk1tLE6UXMEURqbEV7e5bXpXXwxCnmH88VsjnvjjpyXZaonN2vcgtYeUmJwv1",
  "key13": "2sxFdNGfZTt6HTgZQM3YG8kLJgfzUraBm5ccXgLPdGK7uwgCoZA1tXKweeV7WNZEMXHz9F4Dy6jmqLv9UnCk82eZ",
  "key14": "45AspydB6kRBeNbWEajTLxUg8wwcCQZcARWbFRyPcuExKbYPbTnM9XvUZGzxaUBcoWNJc5VekVUVEnaTfwyFRydW",
  "key15": "2CZfbSTdyYL9T9wHgrn1Jfbgkev8hRFQPMrvMKje5bxK2bM6cKMamPMPP6bzgvgGTaEUG2tGGKM3mvTveN9dyGTF",
  "key16": "4usRmhhe1k8WD4c3p7dNhhjdNH83RC1mykzSpFwJTUoDYMaU8g5HSEefsXwBrVoACwuRyqj6Zh4LDj5RVcvkX7rb",
  "key17": "3zupctoMEWhDbtXALu6GHHpDpdvQp3pknTeZMQY3Foh7p6oTq8WVAk6tZXBxKUVGLdhAFwigxvXTHKSm485QfSUz",
  "key18": "2kQrZQ14ThyisK4J2dHfRJstD2zxd1FenRVLRXajhKeGMCBrhtD1xvW8Kxs3jV6PVB7eiEHLiVwr73ATqB5w41n4",
  "key19": "3ao2HErugu1C6GVhFXre37t54tv2Px7rquhDRHkXXTadxH2bv4vBoz3dv6cECyiBokaVfcdnjCNWSf2bsmdViaN4",
  "key20": "3W7N7U4rcSYUyxhXXMBMk4EqVZZEztvTscRxQ4QwZCWMLZjKQ28S8pAmqSdu1ewC48wapsP8AFsNuTSpC4bLxJMM",
  "key21": "4zuF9LRKodo5kpWA88S9VaqA5heEHfsnksXU3cFdAtMsJHPoFv79Dm6w39PrqadreaPFUQhETFVQYRwpPyHzB384",
  "key22": "3njQVdGd6ozUpETaQaVApvpJYjwaJBGKmcS951FmUG9PcT2EoL4W6AWZ8EcgyC9bWzMmfg5DJ79jZngsYDZBMnU3",
  "key23": "2yWqiMyVZTSh5PaaPjQLYcgSiFHoYckgEaHQHnr34NPeo1vzjPXCgF6NyRcVndFceEgwj23vGFimE5bxavbtDZdx",
  "key24": "2ot91RU3gYMUc1yLqNmYPQZeetqWtfeZT7zkqreLq7wbfbCr2JQjRtXw6AUEzA1CGTWhrGq7NNYLmSBr6uDEYgBV",
  "key25": "28Li2cP4DfALHfqumM51k7GtduRwtigvyimAfWPCc92QU2vx1tbGKhSbQJjScMsYSBZLxHrr5DYgcrv3hK66VELZ",
  "key26": "2uQoRBtS7LoFqpXvj7ViEttZ2MRgwPmaPecqNWE3zmEPL5JjCfFfeAtva5Wxu2rbUtZXXBTBksvCP5HecVLHpcoA",
  "key27": "2Jh1cNPU55ZretaHEfWSABbYgc7J5wPpNRycz6DoCeJdzN2PDk8d8RYr9XnQWoLdERKKFEGvSf66iindrVtuB78X",
  "key28": "5eKPUJKQpiYVE5B79HM3smcUSvXFsDyLhYNPhWsdDAbxSusXFkVXiARkiRY6eWpPHM9dsxYkGUJvxRx25rNAzGZ8",
  "key29": "4pBTQJJ3C1wHbs2TjBQk7FiprsFrWzmZLkdMeyq3bfksBzTn84XQFkMqAtiFwinucTa46F8ehgrgCyrvHfnX15HR",
  "key30": "4WBR8naXKgs6aCKjiES7tPQCJRLKr3gvXULLbxPYRw9VzMb5arkDaG4sVuwmKNXVLMHm4DUyREaW4JW7jiuAatHB",
  "key31": "12ABEw9cWkjPdJEBNf5KqmkVC9JdpnWHLUGN8sxz25NsERg3K63EbL2yGy4vdLbZ9xh7z8KSQWZYNbE77yummQGv",
  "key32": "HqFdepU37DTid6E8P8SNMZkKCFn8hsXNPjtT2nJxYRWyWcmFpLnMW5GJtKSVtDt1eWzMpLKFbx75nJTkq1Gatis",
  "key33": "2i6wiyb8x4Pvci7cgTcVjtahMiddwrn6Zbk82WqiMck4snHFdkCWx1BwvtjhrZyaNkiYUv2CKfq6gZ8mNmqm6d1v",
  "key34": "5FoCk3keXaiKqy5oyTfg3figTTY3HFFTnJW5UQgeKqD6zYP86VydUhCoss7zTUhTcUCnnB4qAxbpTrqS7MxxEmqG",
  "key35": "5wihGmFJVrnJUAPThKynnggxcxFtR1Wk2ryPnmhLq4d1d1g7UQHRLA1xnNPwmsfNiyh75czLr9SdCM37jUJTS2wj",
  "key36": "4vQeGVEsz6zCfrnHLAZt5hUUqnF54mixLgvciXj5SWXbDM2KhsdusDwRRT17wWtjdGV6XKLqHPHK1wpxZkjyz4d1",
  "key37": "aigGMffLpV4PKLAUKyi2eQ6ASJKZQU9z4YXRPvCaHmbzxWGKsdv2RKK82RAifhEJnBdS8c4L4aA2vvoG6yda83h",
  "key38": "2eVyV2wgH3Xd1TGYBokrrULqyHVyXtn1fHHmpWaUzf5kL3sM4D8Hm1drrGFpmULnaZ6wFriLTAHGoDoHou6iM5WY",
  "key39": "4qEupmCHQ7eWc8v8ADvuSNgF5zsGaXjorc7E129dKEKmNRAycQy75PX5R6JWSTFaLAPHMrwD7rh66UphJ1VaSkPe",
  "key40": "5xs6k2ZdnbMTytGpbCu8gT9DmXAkU2rvZKEevGSUt19RJad4phnwiLWCTiSFWjcHTC3No9BtFiT4xyb74SCu8UWh",
  "key41": "3tnLaim4ApQPF6Q1LuvuMG3JS6dudYY2ewpUfqYuQcPrg7WBi3efhYo6TU34cZWwJoH47wab1zxSXdBYo1LP3gbU",
  "key42": "29TYu3Vsy4TmfGm6pMBS5WXrYoujf7A8fh3xMY8uD97ksGed3KyPV7rCaUthHVfncrZ1J4Wk3vtTiR5Us555VznK"
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
