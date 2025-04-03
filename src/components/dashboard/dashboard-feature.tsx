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
    "5hhvYPjrqVpdrjw4UERsDevTFqRkSZFZ2LdotnwnhxPYDppx2CYhp8SZE79VJE8FxEZLwexSxAJcjXCS3YWtVKBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VsnEviytrTqJHJxryUpGAeUk3MvmehUD9aLkRxhr8ur8SM2xbhnK6LAkGGqhyS9HfhgKPB3BWZo3yeEG8aQwDtw",
  "key1": "yZaJt8Bz7hTssfa7UqGZPFoU2Q5hr9SP8jaGQ6zBbdUE8CbtcQaFo31Ek66Es3BBGpLZHdthcPW1d7AUeVZ21nu",
  "key2": "2ZYfReztL6p6iYx1hntUxn32uj5iJ8xC3PgHHM37K7Mji3w8sidXPJtcQxwd54SSGNBH8MyyHuUqTWatTjcdm4cK",
  "key3": "Cd2CXeqAqdHTAVLM2ebPrycnWHVgU49mGubiDKyK8Yj2exJdW1yjXtGj7yj37DN3Y5e1hP6HB399xkZNfvfswgh",
  "key4": "4woHpJJ5AVVFBAupAVG4pG7ERHz6GrZWZqMk2y82sn199BSx6959wJAvcsEFv6z9M3wnqaG5CQQCtcKYW1e8gTK9",
  "key5": "4G5ArjGvDAqK3u2wVkRBS22Sou9NC3ZFTG6BYwBHV5T3ynxW2ewmoaB44H3t6JhmPR4ax6CYo9sLyTWMHmxe6GTX",
  "key6": "3F6LoG1Pw6tgM91DDepBuwCSejoJ694CcPyRwA3X59xtCNmsx5tdvQ8jKATrPtS5Xi31zNC4hNJsDbs8vVqTXqY5",
  "key7": "49FoTvEyhyYLiDBfWfEn13EKD54kfxRvbmBqxhhvGmo4hUBNEuYT3NK5tvMVdBdCcihRZEhSpGNTa15nN5kTNvQQ",
  "key8": "4S9DbkYVg95GwQMrAryi72qDEk8UPcXMr3kb5t9McrWXoh358Wj47NfzSRfvfti6m1WiCJ3UijsvXEJM3DTFStyq",
  "key9": "2pHP63J5CJ2TohT8Ticf4pobbFReDK7goTwwuv67tMJujumS8zUkh3Ano9hMEFDubmwkiydhAthbayY8UnruCGeQ",
  "key10": "3BWAsBziLYr74K9DR8CmRKFHzT76Fic9EHjZQhXx6vn23oZeKdFJNKgUCNLMGor7p6NaLLJE5ENhZ37cSoJQCcnm",
  "key11": "DRVn57Zw9E6uJyCrWsk2xh5KPU1hHv9YgsRq8tnBgRjuuBUvmQJVeuKgB4i4u4CUm3EsxY8ftHqP25Gixu3TcaC",
  "key12": "3HFP93afFkeBUf4SyZu27vc2pJNzJ9gnYm48eaoMGVmuad51BuMeK4F2NwER2zFXxQsFT18rpkWf1mXXJrFAGiEM",
  "key13": "4s99Qb52arauFNFnyzPLBzBpNaZJG1ubFuzyXCnks2LZFUpjVTVJA5QEVgV1ynCu89oAienF9ZYjAL78XhyncFES",
  "key14": "4vwRhiUy3kahFvCN7tnv9tLkqtpo3YdVNNF4kTJsypZRUrFnc5bp1entruzQKhju4RVUBiYroPxnpRiHcMBm1B5H",
  "key15": "4kmExLgiFhB7ux64Q8EiGMDrUNiE4AoZjdqwkbGsg7Mf5WgoarVo62ZLa6Fk36nnqstYCgBmyRdFGzoF8XymxzVV",
  "key16": "2XcCaUhoAFPw569enytFADqHKpVEXGutaMpiD5KGAbVdDh9rHkGQ6AaDdzrRJ5Fas3t1F3BFAzZxX97ZVatDhy5J",
  "key17": "4R9wYKefsMBbiwdT3GBQysJDEHTvahFy4QK6qdy91Bga9zfnYoGVHg5RrMZhMwFagGuAZSCWDRFoEJGqZ98hfVYQ",
  "key18": "2KTK1UDGXyeuNewNRAtCyfrV7CYQwEqp34pngEnD8CfgSYFH4kQQuGgs3RxJFC4rikRZaCdHQdAuH2Xw19pvV2SE",
  "key19": "5iDyAaLVXpG8KQRiyVQKdJJWnq9fhHos4RmmaxmJ8uDiQoVSDV9YwKLGvMJLMbJFhvdp8LWtpDdRiQT5okgraZW",
  "key20": "3XeTdPLvAcshGRa1TqXDXJzhu5UJeVaa6BcoPengHFm1qdwdDkUbNyAPQu9FEWN5DaGpGQZMnGHpZeNQGRSSxtUX",
  "key21": "53et4nwpFUJWC4bBBujLGTYWroVTjCWpf5KXgxq8fADei9sYohu2zFXLFAWsK4N9Ha9dBhoiUxWxBGPZPRqqD8am",
  "key22": "4n2JLntfo2jpHXT1B2VZfny2AwWpWWqoVVB8PaVE2VWXmHJQ9WAt87i7xLhhL8LnT4zhqTaRrFtwTBF7VvxWHHcc",
  "key23": "4i31A9brh1kV8cEAM1qkozDc2yHBH23J6T5P2KTSdvWtzxYaHFbiUNF98QLF3BnSi9kEG5K4BjDqtqghZXLxr5aX",
  "key24": "4JpZ3ey9wCFamEfE9ZJGLQGzaSMi9vFRuA9qK8vEFSWtXZUgQUoXsLd1ieb4a5BaUHFza4jnWBc1z15f3s6yGZPP",
  "key25": "3PYDABv9Nzuienkw5mJbT25fqFwDJQZ11cCXsJrFAcMNJU7mojvwdGq4yLx9f1vFmRBDDr6gxqgVpXpd79Pntn7v",
  "key26": "47d81MPnPqemCeBpDojphJK3UMjq3bLL3K5UdR5HktRxH4xMtCtBafhGY9dapp2xoBK62NXPryTSmV12Lmj9FZzh",
  "key27": "5uU1hp6vpPbsoGr7T3bFUQMoSHNsuBwgmEV2BKfpYL99yxmWCFGST4TUs4f24Y7aNMY53zsRs33GvM7vkihpB4GD",
  "key28": "5uxvJqxd6oVTp38GJnkhWgodWchYEAQdVVrzc18TV9fBaDLYojSgQmQbNSSWkmS6VNsCKj3fN2hw68B3AV5F6ncR",
  "key29": "2YVb1cUpj9SrB8DpzmCZCXcT2q3FvanWE7QCbuWegSbWwDaB2EhzbbnG7nHZx4b8kTQQvL6JirT3wE2mxKJdN86m",
  "key30": "2dxNfA3L2Y2K1u2pFoEsxMDX2eT5zuWfc9CYMQpZnS992J2c3HPCjw8oGYwyGx4whEzbBXVY4E164mnxCeu6fRJr",
  "key31": "5CN4MDF6imqQTQQs65MVkPocitdFcdWQymRBJiZn1QTdQTdQ3CBjzTjnoCZMjfRcov3YimEn4TeakhHWy7QGf4Wi",
  "key32": "hTDYemuGStx2Ak5K5AuPDyi418om3Peq3yXUmu8dhwDG9iVZXQysSh42aoC3bN99gZQpWeEtU2oeP6fpKxJYLhD",
  "key33": "2aj7fxEaDCvp5qMDxzBvGr6Y5Ag338MeX8tn9ZdqvhsgSVD8sKbv8LH1t65b8bqentNGzrCGiWZQ97kpREpsMtCG",
  "key34": "42A9ziQab91M782161jXUMYsNsw5ari8T5THC532kNLp6MUphi9ESGKtsKLjwtayHNor92zeirGCzMG8LekbTyZ7",
  "key35": "5D3NXuH972vaXd1fzUmf3yqZWPx33DVEAYWPDCDZXVG7YxptMHB9715C9KF7TS6X219iBBK6J3Kq1D6QQZH4e1wt",
  "key36": "5iLnvM7HENmgL865ZAGUYTYvxHLvZkwgFyCbjL8nUy3XDTKRxuEvjfvQUbG5Jsvt5sXNinDx7pq4w596f7ycJHQg",
  "key37": "eFakzZMLxqrQAxQZfXg97GxA516bEDE2bBkDn9xvyT316k878Ue1m3FG2D5Vy9SAWK2J5PRc9P3EteKQBpuxGoB",
  "key38": "4RuJwp2AwiYL56urzCYpmuF5W267aQoVeLVaJCXfAmQ92AiqjXEfPxZD5jKmMwCSsSp8f5GYwNUgcwye6qvRKkS8",
  "key39": "AM8jM7fg7RN9ykgnCSZB2oj7gn7FiswNBgsyszyLXNfnTa1asVyV9w4Pu2ZL8MPTQBkxAuyT9jdpDs9M9VVAify",
  "key40": "4PgmcWT4qYXQTSWJFBz5QTVJoq1WfruUWcAeTF8Bc9YLRD6cyKat6nSiKDDnWQwrQNsAVGvraGKNJwDfgvCq8vnQ",
  "key41": "2DfrRJUe2a4T5nryZCrwdUTUvg5s6SExZuPdTE26mDrV4GywyWgo3Pc7wDnZKNU1MLFHPUjssoVKRt89FEmVXAgL",
  "key42": "5Fv7eApCRaTTs4kJexikDdbVte4zaotkBGzpoiqMBiMRugCzDqn3Fkn6cxotATMdAqk1c1U1p8J9GSTKzAJqrwNK",
  "key43": "4wLN7Gw1EdcBHYBWutfUXGcxyFX7Y9bcnSxwXmw4u37pVPj7ADymAgcze62uWrtwdHYf9eEkJBtkx9Qg4nLt3S62",
  "key44": "3bjWAQyKkaHKAwhP5yP7JYFQDFA2W99S5KQJasN477Sa1hoPYvDSDHkfHxQXUghZwyVHXLrqX1AHFinpK3nPXGLz",
  "key45": "5ep8FNDvzRbahacvf3zHG8j1fNvXmsLo6isyWV4uYTsX7Tqgz2bx4F1Vqj1kHduUCuUXPS4j4iBb7Z3LREdjinJ7"
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
