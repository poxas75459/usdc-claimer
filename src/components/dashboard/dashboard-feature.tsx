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
    "ud549EHtvvEprXCTkfhvY4YXVKPmuLGRHRAEB4yaKbPHBiYnRBGaM1AaZYnLubCgdJnpV3mo6K8tCz2ogvxs56i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EfsrnTLG5fuF3J92YnVgNU3fRyF5yzv49s8sqeHcXs2yWJVbZzK8dhcxcAJFJLf4JYUvkbRDvw2coYn6gUiqXFB",
  "key1": "1Rb8mFEEJtGChBT8hypBYAwcsoteRdzpq6NdR2RH3NqkugHg8ReFigrEe8SQESz4EyY4eGyS9UHURbbZsUUeuMA",
  "key2": "3dKbucBhS8cBkH9wXhCAjreuwJ2VQXLXP2CT7uLi6NC1JiFb4T2Ub3PDdJoAJCHpqFNgdbNDtxfwhpyqNAjiawR2",
  "key3": "3X5mAKdWyTxjJ7YraGbNG4H6p7hHDBvwort6uJz3FFV49x7jSEqyPF7e3KW2KpaAYaJYwVQ1xRVgxdozC5xxgUjA",
  "key4": "3jAagqSn4y7zMJFCNGtooZrnHVit2zbzp4c3oVLUJZ6bVzX1oMmrN2CN68Xg5VkwWUXBxpTJCRYxKAtdEvARGts5",
  "key5": "4eyaBA3iD3ZAHbX2tqJwbAhViMvTqgVMP6YSFjFhd7Y7wS8TradxP9nCSY6wL93QQxvVcNpCgFJkYmKSKxyWAqB4",
  "key6": "4hp8PYJG49Rsb1jP8jfXi7zVGqiEGBRzCK2dtxRbJFGgLhQqR6BnqdUBmyyFEhRtMcERSqZBpix1R7JDuG5vb38N",
  "key7": "Ztey8sDfc8SJ6Jbj23uz9F1bp8FzargB1dpU8TDgUvFNkkS3T1Bn3Ekc4iNepm1g7G4mprebTaR1i9rCqdWWnXx",
  "key8": "3j6gFugrHExEDg26E1eh1H9WYK5AfrmumabAQ5YGZCSnhwzs4V6Ge7qLSQ8V4e3tCqSHPhLHMQpjo2Do7zhGWFgX",
  "key9": "4FNuWvFxKDRQ3KSnHeibckoa3swRoDbCs3y4J2vh7ZWApBdeZcMsBBjwkJmxE46ijmtj2rWVNz517nx8BXCfNQsK",
  "key10": "4XYhB6rXnim7ZZzaNccPL7mEtiVGhmV9rWdaxuom7aZAvFHX8RLE6XdCfgvPTMxvmw8smspJ3hN9hqDUJjSA1gvp",
  "key11": "5yx4zTK37SLZjkQfkJHC5o8Ue8wYCHmwN9WHCknGbrp2UFS2puAefrnT3wd1T8jUnCSmT2xMC9gJRwGGaD7xawg2",
  "key12": "43X1hHsJiQN7c4FGUWVWaNgmLGzu4PaKAg16PrUuNhbDiLMco8MaZZC5h8V1LyRPEeTmqnDRaG4GYwXJKRqRUDyw",
  "key13": "4bbUmiSC8DDgoQkMzkBUqaFWWY4v37beYTRy9dvx41QWCWu3hVHDtbiGgeSvNq5QX1bPSGNYbwcZNZksVyKtjjMw",
  "key14": "67hqio4ipJgshBK8Bf2z9XMbkUJeVfv88ncvQnDdhKme5LxRctmc1KF4giv3r2S2Hq7bkRon2j3Z5UC6b4M6eCtm",
  "key15": "59bdZjJEcwLNJWkyJ331mstxjTHRAeARX93swvDNfJRFL7VP1NXStbEmQzvu5uyAUCPhBwF1hmFjNQnNUzz1R1bB",
  "key16": "5TZo7CpqV6TvvuP3GU9EJ4KsT246CLd8Et3LFudEcSvgqW4rBK3DYEKdsPFNmJxuPe4wvuH9TkRpg5jdUmvPGLgt",
  "key17": "2Kc3gDQphpc26FrAUZjMDReV4Uemog7ZZHL4b63mrRxaJWN7hDn4MPehx1VLDUPFVqNuCq8MS4h4zo2y5N2dzmXv",
  "key18": "J22EEmkTrG1ePwAAjyhUmHp3eKLaBjjS219i16s7pMrUxQRiH2MBDGACUxhohU2XKe9izP2DC23r3mV9b9a8BZR",
  "key19": "Bbfpy1uBiKSAVejFNCoN1vDjqwNddhj3qQ9xeMSmUvfsmezGPMdPaZCVnT1aGYZQFUaFYbKdqmn9rmsJ3aQUzki",
  "key20": "2PoA4hMJJZnJW4xtJ2v5T4KXt9xvRb8GWsDT3hvEeeoTouK3KBeactfcj4CD6o41qqEEfvgvHW3TqbuMKqQ8fECL",
  "key21": "455c25cNA6i4NZxfvFA6g1jzLhxZDp88UQ6UBuU47jWHWJDDYQo2Pwc9fx3cWiRXmRMEp3YoLaz1sVyDWoReq6bK",
  "key22": "4UX26jGtD5qg9civzSivh9nYw51yufiG2VP6ZVUmVPMo29hnuCpfyBRKg4H2W1QnHYLAXecRFtWc3HxqrGXUudtp",
  "key23": "2Bv5cgDsUzS5D4cRTwpVFZa9M2tP3PqeJebcJzAc6vA8WwU3534ZaextHXnkuhrNiy6szf6tEjYYVjy6e84GTqcB",
  "key24": "4vFYihmEoWZ71HkQPjs97M6ZjaxpWucYZXq1MuCz3EncGjYKNgh62dqqRLRPYGTYF6hjWTbo8tWBVg7wCG9tWLsy",
  "key25": "2KRxEoC4ADgdsaT6md1p2qVYaZMR3L9GhK9T7LMCctsod9w694Hhns92p4rtWpeVhTh1w7iFftW5tDocL6C3nR7t",
  "key26": "fMrSAChUP22uDDhZ17BoZhtYGTdJbEfD3o7G4Eg42psVznLbLXLEffwfqCAf42jBpqfwVS6GeqTHYFk7N6DiSrx",
  "key27": "5FMdNt1V1suFH9jnjPopoZoGwK8wChshrunVvNYWvDTzqgYjSSPYXBzyU81A6HzopctWcdxXEgNDsAVT1aZThgSH",
  "key28": "32XPGCrjg3CBs2DZj6Jb1mWUy1xaBiSYga1uFf2dCMpSnZmHzo4NBfZZTnjiQ9QqRBfZUfdUURQwUSrfhrGL46nE",
  "key29": "GRkrsQwonaAHput6A6AvCZ7ztmB4WdS9M372kHypcuzgM3hogMz2QJ3p364EnbrciFnXFkM3h2rAwjfGvrNyUqn",
  "key30": "3WzPQ5g9o4Fa9ox9Bq6WxqBUEviML8dWjKV84pMyGrr6zYrV4szEAk9QXgQvXMpSzcKcEvhHR8xtNUt1JowhSgH2",
  "key31": "2GEmZsvGdihGtDez8TikEM41PQRQwNAQNBc4StWffMP69UhKXQY7TLLYk2hDCWp12DX4U8Ci3gpuFTZkriP383ko",
  "key32": "5KnBW9owBMERrrb8rdPyLN8QwFARCygwrdbsH3qWgwKr7DxT1hSJ5ZKKEJ4atBh9WFzGkSxTRtkU586nNusJr5jU",
  "key33": "4dzrXF7UCnpbxG3Cfd1e1vHq21e6cH1GhHgHp2xM8G6V4EaqjwqMGqxmPVgFAtyXJAxx6xWvwARsJDY1BhgsodWw",
  "key34": "5E54F9XnxeCiySdXnXWbTcksCpMKwwgjuTdSBvoh7oqwUq7ReAnkRukvEzK9e3Y7xK1PGHaf12gNR8G3GjnqeUMz",
  "key35": "2JxsNTJ4LGX7zRpkyUEo6ihVzzKvxZDzqxeR3BanWSENAQ8qw8sLamv4hZQobtveNUV97CGDRFwaRzWrqdqvLwmC",
  "key36": "56kc1pbWudbpM8DUbCYu7HXeDpNv5LwK5at5CfrgaAFKSmpwUzXvZpmf4ngFRjcj25f2noKkvsskbjsZ15rTVFF9",
  "key37": "2faiUqvYaiLdMdrh4yKTPN6hKTga8QKFSbEjRnBJJptqoLYq4TQhJEoAWSBcYxrNgSR1Be3NSZgPiM7AMMB3YDQZ",
  "key38": "K7H3QwB3yLEkiqhpfWUDnk4ZoWc7TpfsyUUv67vKD65dhS6947kMMJqafWMBuyEtqh6Eh3Cftz1upJR7uP5yzZn",
  "key39": "L7X9tMJFVMX9mui5Z4DJY7s8wwMvSNQjNB1NfTM22hYdSuoyLp9a3ed7nBBHqfPcZeBHvVyN5M8zQVvLzkwrGHp",
  "key40": "2UDJKmBBQbshpuxHnhNrcET6tUsRkoVkWxUMVTSMo7FfWGavtjf4b9RGyafwVAWHKzs3Q31jgKuCp3v1K1NthZwX",
  "key41": "4nTdzd8wXdHTpFhFHJDn3z43SfuawWSECUtPUoCMk4iXVCR8XfcUJjbGPqV3hFUtuk3wfJS76rs4SU8eZqfA7Qxd",
  "key42": "5tdo4zazHifhf3kJNdyiVnW1MhaGhwLLeArgRBvgEQPRerLLdKHE7PvbjYvLGQE4EpS2boUqrQE51wZ9TsNHwxTq",
  "key43": "qTF5Fevx9evo8YeeTfyW7AdHkub9PcmGrmtTRf949b8CkLEcJ3qjd7NkyzSEew8YLKmQev9P5MfdRDQFN6ix8GM",
  "key44": "FxKTo9pqy4ZNDXQUSFmdyTzXWbTpXwb11i5pBeZ5d3XMqsg2LrAymzKVBhTuV1jA5VGfrJshNGSgVsnAeh37wVg",
  "key45": "Mw6uCXKTKNxYzmadkuT5dhThoy1cxFTBt48ZpYoDFXbd3FyhMLrr62ibmBJcsbGXgqP41R2mq9SWtNLVt9DDtgQ",
  "key46": "4fknbPVLsB9czYrJBWRTHJDVxFSqVgvcj3o3GDkDebRVSCc75tjz381w6uZhB6iqr1n2fBY3rTKozGUqAaSgcbiW",
  "key47": "3mAYNpViU1oPdYmC5rgbYFX3ebHhaPK44Eqax1zk3WikeGewX4tqMSBrSqk6waUMCLycVZCg5Picd4EwLV85vAzu",
  "key48": "25FjxnZhibDAnvQExZ4aFVUUrpVjx3zzBdWpaZQabfQNeN84cmNjutUQggv4uJvEyPe16dYTh74f2a27MjquxnjH",
  "key49": "3viPkep1P89My7ie3tyELAgAUrEe18pYKfzx5fvW83VZBfvfFt2WYCaDmviqo9VNe7nGkogdDYw6JT4KTidMDzgo"
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
