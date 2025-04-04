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
    "2SsGLxLZzxqRuNREtxhh3AseqxgVksRtDKe8VZKBPJg9QyCwN97BaJxP78CENgZ6guVBxh6MfHh8aMsbZAhJYWG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yZQi3jYVLNjbVMYRZmzzngm4nNrw1dhehBMGdYzatjfZxYLDr1DRt4FtyjUYcxQWdpVga7Sua1W3Bnnu5RgdXvU",
  "key1": "555UbFfBbDvQwERZG312Es3FoapVnLVM31XMPwqwY3jgEkhZLz5tSRwHRu4wBWeV38e6EYjdRrksuPPHjpmMEzzN",
  "key2": "3eJt6wrza3r315WvLHoJYucu89jADJHSzBVfa3SnF5f82skmk5T7XGqr3SiUbFK3JfkFf29m9WgeVKCP7ZGRLbJB",
  "key3": "4sqasDic2mHwEQcB83fnu5MfBRVySzQV7CyKcpMV1stdq7BNpGF1BuLoqtTHfNKP8v7pK8wbdTX7m256thj8Xqm8",
  "key4": "2YXBr33pQqvAptjtwteBMUHU5PCqtuQEny9S7yRJ2CfDqWtHWmfvqFNBuVU92HxnTp6DYJfenvofYo7364xKadW7",
  "key5": "3KaghJa4abUQZ5A9P3NzrRRxahoXE72dxfTMr515rZeJUvLjJaecQSaAh2aD3Z5biicKp7cNJDfMe7SnKRYh1u3A",
  "key6": "5vPCLWC55ogV6HiWDTDkbD3QLSBDXGzarc3d6vWUXqsfkxWPKKcWczpaUpCrgHbJz3v7D9ZzKtbguvaQVP9Mj6SN",
  "key7": "2TsJfEW9VCa8ag5MYEWom9M54qEZ1xNx2QSCFoR4Df64KpoiXsdx6sRodQpbBdjYJRnYtVe8NS95cfHvFe1TZC5Y",
  "key8": "5EE8Uwb494xztBe8rETV62XoVDmwWG2WZkcifRGhTixsgnf13aeZXYDkKK5fVApuNm62ggBjS7F5vB6QY79YSutC",
  "key9": "4F75rNGzKVTrAzREJzNG6AW7By8GevMqS3QqSeLNFweCsZSoc5G7Dz6dxsy6dfEHdG73okwMCg6GVhiJWRYYdNPe",
  "key10": "5wzgSc8bNJwjZgkq6nXVHcvRx6G5YSKcfLU6xam9Fwqcbq2oxVy6jAqaLM36EJijgfivbioJWdqfiHkMSYomtQMT",
  "key11": "4ETrU16gidDQgf9BReufmWUFX4gXM62rPmyEUj9qgKddG29Mx85RHNWNxaiW91vVZ2v1bZvKiSJhbtxk8t1cPVrV",
  "key12": "5fcynmrSNQNykRQ4uHH7JBzwZvZDPuBwpmYo6HY1uZZQLuRyyHhYc4WgX4bJv18sY7gQ9QwUZdraFL9FGuyz5MJk",
  "key13": "2P4xX6DQmpsqHdVqrURUqaTPJ2UGF1ficZ8V758DqdmKWkYcy3AiUMZB1g1u8P5HWitkcPnBRbuoBdGgYhqR7ctT",
  "key14": "46NMfKcGU4G3P585WARXhnzoMYS3MBzrtn5LrBm7wVjA5BCZXFWL9zgzC6CnXba6d11tefyL8KrjnF5PKaXz29vS",
  "key15": "5ddFdBpEvy8oiN8SLd4KLA6t8QH2ShDjUw9xYtQdXpb1Y3TN9M1NUHbHXAYZhhDvzx6xCe9bkBgWmTTG73GCoQtk",
  "key16": "P6KD3sSugemZgiLkmHk55baY4tBsgcADawpSBPEkutL4Pkok1yWpZwSQdvnh145G27YXYBDU9z9vFyYyzJqP6zG",
  "key17": "2fdCHtDRVk8tJHvPrrqvYUHfpmo6w2VthaYECEXzuxDv4SpT5h9Gm8MVUpgBsPMbyNNFmiJTC8owGPgL8PipZq7Z",
  "key18": "5WJz6JFritk6mFrHX5iVbnNT8BZPvGsYdNv5o5DstSzcyYTk9c4Zz99rpdTivs3AdGmsDBWzcY7TGdFEhucYovkX",
  "key19": "dDoALAS6v9A3Mu2bKpc1HQ3ktCBFgyKHCmAPht3ReS7pmfNd5B6s76uiqzCCQgWDLbC2bE7yWDwPhwHCb6eY9eZ",
  "key20": "4o18WzFBnonTJVNGesSPRBg6ScwTEdgZaj6hgHe4i9SEEUJ2TL2h8Y5j4ZCAwJ7r6ynKAcpKXCFy8mcq17q684bs",
  "key21": "5aNTzKZ8aWbKeihiq3WCD7QxRNFsit6QS15ofMRHjHDAkq8MJJkfzfXP41etvVAXTaGkYEkC116jWzQouNGpNQq1",
  "key22": "2EBHQ3R44DgsMpQXwmk5bjfkVBmtydnBKh8w71AY8RFeDmym2HPCja7BG5TjbfKbh4bit2kdnGNm9iHwrkbD4Fbq",
  "key23": "7GaKJEKQ5DVfoxYBW5oBkTCdXffyctGcofZUem5jnj1NHqwFZ3ZrrcjFBV6WqPnwTBC7Z9j1aKNBVtHnU538Gos",
  "key24": "4Fw4rw1EFCYv9BmPcet4DawRX9taEDZx6SeV8gTqtv3m5YQM8qA2YQnXFEFCHJ3uubkx5DX97zeCsGkX4nMkN2c8",
  "key25": "4TVfXWw97iJk7cASB6noK8WNYxURtHAEv9kY7df67pq3Y8tBU2XpzaRMomqDdNFo4DF41JL7BTQRcQKrLCVGvu2M",
  "key26": "2WD8STrDB93xJTSrU88okSFc3aTU3R7c16ctEEA2FNzfj6bEb5xCbfJYszywXDYuVZzXohg4fYLWrVeF612FxmBm",
  "key27": "27Xmi9hWpoLbszKeUQdWVo2v6PWn8miFYGuPVnkszYJNWoDMpMwK6a9YjxgX248qYBcjRdcQVQeRbJWTPF4eT3nY",
  "key28": "2XbDW7nGrBTWgPZYtg3DFViNkKfmUHnViGXnjbfUdB8G5rMtkCJAvegp5E4d37L5wjJtPEC4vAbG8y5Yrb7rxShR",
  "key29": "xgoAHJM84g6G1T96Qp4LLKWBmwzddpL33xL4PaSVJga986MSbbp5rtBoLiMCN9o1HvGUak53xKXkZcjdkqf6LYa",
  "key30": "64dKekREdjTRSD9KYTmJFRyoMysoeGgVLxJPPKF7VQd3rKLBpFfPSgmHdSzuqZsoAXr2jhMS9kK6UiwqEwBcGNty",
  "key31": "5Bc432JepvjdX6yDY9d7u5EgM7PPSumjbzVBPNDpNrHt2tR8bw8LPM8vnDA9HoCyCzP2YaKFmzz1vWKQyun6uHXe",
  "key32": "3TAyX5oBucaxHcuSofy5v9ubaEU52LooDZB52Yd6ty7hNn8sWZXyKztgN7SvUSYcX3qjLRe69WWuicwuhvEFq24q",
  "key33": "3GT7RGPVvRuquhSUkRJpB1dJnGeYBfwAm3SHBYkHDxmUpTP2QJaHZkgY79CwrYLcVLtFdwYCu3TQYqCHN5kpvbm4",
  "key34": "Yam5bfMjorZYwq8jBRPwyAubAptNvLSin6Bbqz4EJQVMwYa5MDRpEtNVdxe29XYMNFKrcfSkvV3qzSWYjpkhHNh",
  "key35": "5vxp58JXCUytTgd6NaJ9HSiBJgnPub3tot6MRD1t3FM2sygJfSn1thPvcwR36ywEk6p5ycoHUgXQcsaZ7js7ixjx",
  "key36": "2F8WZZxUFfnzu1Jw2UThH2XiskxyvKhJAg6EQPGFEFT3kk91EWE18URZ8nYDNNPs3xkr8sBEv7kC2oE78LWCgNLu",
  "key37": "4caYQG1uSqBXneKdqNRrpr7vzUzpyemaCGwRNC2EwaAv1KjeeGrB3JiMP2oD5gUuab9gejVfWdVcGercDvDjZia6",
  "key38": "3Sa51zdWZWeAiYgNECST79p1nPtQytPEYeUX8swtLyhBkqGX5GE92gUSrmaDC1YBsE5hMAKLcJyzj78CbhjmGKYD",
  "key39": "2FUexbAaUzLegMQG8eZd9HJiaRyY3eDr1T3c8QqqCcWQcU14mTZ8zthrAYwasPYK65hJjp3V8ZT8ZKpUTdSQR69T",
  "key40": "SE8hQYHib3yYDDba8gzybL52VtqZPi2HEVbnk7w1hxacdQrPeXnz54conD2Rz7ebKLQp4jVYRKPa6fh43E5YQ2Y",
  "key41": "65DiCHsQ41nYtUk2EzgwwX7sTWf54gqKPQRzdUrG7tqsEoHw4MF4rSUwcEuW89ifEmfVNxp4bFjnrCa4ZD76Xhcr",
  "key42": "49H3DJbctPpst9CgRUDbsm85j53UDrtPYQLUAEJ25jJ4RxY8rh3fiUK1nPyy33jdcm1isuSYpY73CA3vS1eCUvKz",
  "key43": "5CBfqbChhnY5wD2Led1esuVSEfmLb9ovrhEjHXFUsgYTp9V5ZxbbUbBT9PV1bkxm995PocHiHTxGfGQFYnidPmwa",
  "key44": "bmyqZzsNN1rTFVYYZCe4KLoGJ7Cp63rwseRU5QApxHmqMMz1UAAmi9wCQ8wWRFYp4JQiiBk2vp7FFZDGeJHW6JT",
  "key45": "36Qau6va16RA2t3VbaEM9QQi9Ts59hd9Gr3WvQ8AndYaW6uBrGGA67qAiGtZHKQY7dEFTUUKHCBu9nXjhYGswYv1",
  "key46": "4EhCSFaF99Wjmqmpms4jWxNLV57JhNL8SEBM7aDhQQQRMjxN8di77jtGTScXCvvoQjeqoMdZFWHZdEHo9os9jQGw"
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
