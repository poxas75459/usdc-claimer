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
    "2FquRhHbeKiTZxKqo3A3GHgz8Dy4QPs4LNuAukdCR3Ad4QSWnZBx3RmbkEeyNPmNYTQvARVwv21qqDLyb48DzNrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XwX2YHZJyigaKHkc57DenRweGoSTMmsqVZHxqe3acQSdRYdqQEoCPfVTVwyYQLNxDJqoNsi8id2BtJeL94QQ1cj",
  "key1": "4k43RAPNczux9ugDRJth9q6GtvHhWL9tB36baSVt56Gw54pCjyCiD2tea9Soq2KdSRSYkSKh7ynymtKxUj9MasLb",
  "key2": "24AovqQ5hoKoRm1asdKi6MYLHbs6ooViWS9P7vrMkZo6dtbzy1JAnjKmf7ntHDtJPCTFG2a1FWZ7Piq8X2cS7YLp",
  "key3": "3Xy3QzQqVGnLd16xRGHRgf8aMVCksRrQvsCzXWsscqSMUmwhM5Sackix8xkCC7weZzaAFDmmzt7qsy8xPB57rhQY",
  "key4": "MFFgSVvLrFFeD5jESc5MeWGQ7p5f5iZfSGq3TzAY5yjsGpH5ApqcEqn3ZQaoxxv7tfwndQuN9jaJHLnJPL6PonD",
  "key5": "3mbVsHAfhNRFeX9uxVQUZSEqBEpfqo7uvRAXAykiGbEKJbemiGuXVEvnBieuNq46TNQSCaiwi26jpEkaYFcFGLwL",
  "key6": "5NLTmrjqb365xph4yTiPVoUmb3vtFTBXw8qKM5WfezDV3PTcgMoSHtk8jeyT2QT2fsacNx3ZwEBgcf5yY1ZHJKHJ",
  "key7": "5YD58qs4jZ8KSQ744SsP5EbgdVX8fihitnJnbyfUL6QqGQZeCmhjrJyguTnSoYk5AoqX9Y16jrVntYbZvy4kz3Pt",
  "key8": "2NR5MUkYEBNDCEdpkHgJxSbhYnghnUU9aKq2jJUyoPwNyy5MHeieEnYyfB3NuitBRvo8P2sQYm6iHJce67NttozU",
  "key9": "3RCBVRA6X9gZRUWHSjQznctU3Jy72zzSmWSubKVzPzjeXC1XGKg2krbgxDQLW3FAVdB2wKtehsZa9W7URAkHZTEZ",
  "key10": "nyEmnxQcNBb3p6sSF52BaX6zamk5av1V7qaYrnLDkJm6PMUVXWYVGjru3PVRGqUVijpQ57x8tj5kQtR7xJwC6vu",
  "key11": "2T24RAHQdAZ8M87HfpbzKKJuVaTZgTrVEHm7vaHgUGWrLsZ14bfvoerC8qRQMQjfmXQuA5H5FeaZuemK3eySMr3J",
  "key12": "2Y5SbcfdTPUYUBurocNa3axwa5TuM2iaMbQ2DwmT8CgnfbsEwKGa9MFgmFqoL6opoCCtHNKkbTbSw5wiPo8sGVQi",
  "key13": "GTZUPKVXHUniCsAXhYWf4bhqnTEA9vaDEqANu7z9VeV5qyZxGs7yPs17UMp9Gb9wxyg8imZXWk8QLENwN327PAW",
  "key14": "AtTAc6vNWKWMQk7BHhH3TYBWQbzuvUZyjTqwqu7dcDhd4suAGkQcZ5nmEDdgabnepedtfkMe8Hgwo7SJSFSyetT",
  "key15": "49exuyjG2mbKaw3nBZhCbiGfJ6q5YYtnhPbntgxntKU6tNV6fx25nKQSVV95H73J964EAkQAdy3g9Qkejc9f5MJC",
  "key16": "4xGvPzuAW68ps7gore5X21BmA73KwHgbyStR8KqL5zxvNJechesKbwTXdyBpAuZnsGV1RxzWv77Nub2PgVXdEzr8",
  "key17": "wVy631Syh5qvF5hdoFPwn5jnaDKHQmfqd1rNp7CY2wUF5TSeJCVafj8rvmFXRod26WmEHaiojGq75HG8pYjVzCj",
  "key18": "3PEyWbadAsAKaDz7qzSsPMFk7HwePUWxjgGimd4bboPd7d5Gy1QLk8JAUiRGF7ER4sxiyaP1hy8FmzWQ7JaTMnVF",
  "key19": "3MkqQCU8zRJu5ZTs1eDDfJEWL6a4vtpUkryviJ42ZLMtj7wVgsoy57cfKHWXDRDoLbvjYej48eckJ1eUoBfxhSWe",
  "key20": "2Qo1aCPbCkE6P1eDQ31kWNm8R7FPapBq5ofdwtkSG4aDJz9k1LZTRLxucZyE6oy59AmeRwt5cgUUhu9nm9fSFpmp",
  "key21": "4MMCwEYyAio7guqoxdt97yCeszYbUuQr7sX8zcsgp6x3ux1Tr8jBYVBRrsCLLQKheUBRd9ciFmFRku43uvAaKa5t",
  "key22": "3BakjRywFu82TX2dvzWNVsh2TSxZ1ZDRByK6mTEkTvX5WaoMXzrMo8kSq9GPCQbHLCSrzuT5WCTv4jkaFr4McZjw",
  "key23": "gXSPWsu4w4NpbrrFxwxtMi5XdeEXqkge7D2SvHu5JdZJWt4kacFZ4oXgY8xm7szAVoGbS98JiP6Zctxm4svpLWw",
  "key24": "3wZv2U9PVzB38LceA8vRNEa1kdDocb52DCJjREw43jPpWeUNbv6sEdZ7gtpviXa3QUKGBUnjUoF7aDwbts49E66a",
  "key25": "Fp2knAtR3ejqcsgipnj8kdHsQRM3N8s1n3X7tB4R8kmsuktag1guwJGXEw2F71gTJYDeVUpBURgfEHzE9Prrmr7",
  "key26": "2gpLXQDpQd1TGYR2BEpHB63qZBsC5TmdEGbW9tMmJAQyeJZH2W9Sz4gte15zkwszajF2WLtqpdyDemU7s9xCZmme",
  "key27": "2DmU4uiqPw9HHv4uHNvEAyTjLvG65jPetCp7MobGBdDz7RYQ5YsMkAJBzLb8njzkox9iofumcghCeoWWpqEWGCvK",
  "key28": "2PMv6k9pYifKwkn2LPgqvPmoHiEhJAJyT8z9Xw9x2zvquC6etzy4RghqLZMzmuDSXbLstebb9RG2F1b1sFW9Yi6w",
  "key29": "jBcHb7goLyTQHMGXQ7Q5R9zzZ6rbdAqL5b5Pqe81mghK86hFaGCcK7j8qzfzkmGJvmZqzt3rvFxmuxbgbd6dM4s",
  "key30": "2hvic6DBjvDQxjS2jsHKUeeksNd3kCyFPM2FBFgrxvzStsNv1hqFhJyMvXYi8ykgTamkJsUK5L3vD8WPj92Zjb2P",
  "key31": "2bystdQi9SKhQWJ9EW2CPwgPBiAGyWwYaHjiKXURLCF8M6YXdrNHcw6TC6ofwMcFkmw1HbCYTbSgEJdrbW1H9tdd",
  "key32": "2LuNFkZvf7WY2PEXxMrfuL2XANZ86hPS9CFS6njzBHoTFkB4WsQykPQsFzXSvoe9Zu2v6XdqhTUeDKM5NFWqf3EQ",
  "key33": "3VWp7ZtfT829gsPgVY6Fj3BvVuUw14t5VpWCPGwJfRptp5HeKYD2wMykRWBvYmwLRi9wX186mZAJZmyDGpv3MU1v",
  "key34": "24GdFMp7BWYrHUnWmdUX7i5h5TW5VeyhV9Ffdpw9LaHeFb1d7nThPvPrGNw3MbNAi5NJcsNTCZ4LAFd8W9R8pSoo",
  "key35": "3hJdDSKdJDci8r3DbqPQWcRT133h3S1mFGRn7v9vmBfhYq5iui4nEYc5XCp8ZrVtuzyJox8KQ6DbK225fEuyYiRe",
  "key36": "5jX1uEJ9wdnvFDQvTRkQN1i9Nx1BPDKKEB3Qh4wE2RUkxz1CKtzKwqspFZX4gMNLfFeM64Gop5rSbXABnw6aSPyS",
  "key37": "3FJPEKugKSMeKEB1jtbQPwby1xjEkFyCHfxphQfBFnaGHBHLhJB1REbfAxLmBz6UVPqazzQWmut9sDwSzdi83zhm",
  "key38": "5Xn7reJeegEr5BAweqAa5K4ym2f3PaJUdkVTX4erPiQgQNje14TrfmDhcaQxxYDPVJWi1ooo8xjBM3rAoRhVqPqv",
  "key39": "4QLDz1BRHB7XKEeNtSZttjoHUrTzZXHqXW8CoAbWfrpizvXouofc5g4n2FanGTbBYu7ufs7aAcgSVviYn213veAx",
  "key40": "u1NxTkh99zXQ1kRgkdevLs5nPoHuMhsCtfAvHkbTBAZwZMgQhwiwNzV3SYrBHR3L13vZevtDRTPedvJUM6mLSpA",
  "key41": "43ie8PqmnTtFZL43vMXArZSTKPWKyHD6fp76zK1KMrvXKatDjB3peW3HqCG2JR6fvvicmU3Sey6jA6Pu4UHQCQnX",
  "key42": "4txsK4e8p4KqN1HKcpiQBY9Hw6GcD3VsE3971koPWUEikKGcYXWVtu6GhVVJSXXKbk2PSxjSGw9mcccdeVn8VdSZ",
  "key43": "36kC69nBP29Aeiy5RVHKiE7tgj2ZzsQkLnqHX46buKPSdgzsrp9393PHFJ1xAntbUpvRFy93RtSS6ZT4nG3Szkpy",
  "key44": "589P5PSKWK3kcXEs4g8at6y5fa8arsM3sdobpcCihq3DVW2bUweWSmSrd3BjdkQUKNR6UvrwDWUihzMwzS1EbDsW",
  "key45": "5vnE6WCb2zp92SFKBGhD5j1wRxT38YqPJhbtqDchPetoQKKTgUp3UaiVMSjQZ9uMrJ1kGyj2hFxrL1zTmBtULmez"
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
