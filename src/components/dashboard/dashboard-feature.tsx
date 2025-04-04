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
    "21iyhYj4RpUeL8h2Gjn8WHAooUeCe6FXyfz1cVmqS4YjfmRLP362CT74kgR4YjZFqam2KMLmkTtxvGWUfbrTEFJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DPA1ejSYHuUY5a26jnzD1i6Wp7vka9wLTpkxV6VyUsXFUdxUbbJLng4n261S6ct9bSCwx2gpH8ZBTEYBcj4yYeu",
  "key1": "APKDJQiTcV1CdiCofty59pwa5yBDfi7oy3H5yCMqkSjtir9SumuZHMBdQiyp5BosmcnZhByMSGUYPVRDKvxMKgW",
  "key2": "2gQ7DuxGUQvaugJ5rRsVWwrTaXLyWxiAhhr38VDH28jQbyZeYEds2ZCPwtu3p8xbRd8J4a5fcGzsDKSFojFaYr89",
  "key3": "2fQXQcaVDaNLZT5ETdKXAquHH4neqeYQyUc2XDQH7GfZjMtBq1xPwDJWoJoYVrUt4cKuBX6WVc3QhxmJBmRhntwg",
  "key4": "54hXeTK47Wg3RazTGS9EzHzCK4AZJH34xqQjUoe9qd7hpcvmEhkw9berzrqxL584pKG6jqZNdCjH9asnsJMctgbz",
  "key5": "5LiUxErEzR4MDn1n5Kyo7egA9WtvUCfB7Xk6q5Dj4RXKaCzQEhVFTWNuCZCpEF7nuytJrc5bk9DwbFvFBsq2pBPG",
  "key6": "39shVxRF3dApGh7d6typryWr8AWn3uaQpBdgqcLLLsnusZSKo78hvfdiXMr3phb79s5axr5uY9KnVcqGxLtiYEkk",
  "key7": "YzB1ypgJCmaH56x2vArrifL443cKfHuFvfxDx6nSRXYzNeapnc4h9jZVh5bf6qLxwwBBZxPNRt7GhAscsLNARyG",
  "key8": "4kbRLoQ54MX7XwHfpbL6hhj5g8rrtt3vWps9X9qCgshw7zDEk9qg9ZaukWVVK1DNcw4AfmBFPFRvAPoPtw2ubCde",
  "key9": "3vAYCG1cbznC92H82RbBWSmbWpquEZBXezxJrtGcbZ974WuePSBdRYhd727VkCvQUKcGXnG7Hj7ZxBrB2cMnLbvn",
  "key10": "291iinkb57A9n1mhAtP51UyK6VqyXPiCWMghs6wh2sm5HyZrG7qjXnm34LjnXbPLAAnRBC9kyhjmynV3vxSX4wZx",
  "key11": "5eTsb6CVDnEUNBiKbeAqrMQ2tj1wytTGuyNzcc8WArM66rbjDK5hbFLaGDUQN1ZkuTUUjstfczaCyHHeF5G45VhX",
  "key12": "qDAYUFvfZksUwAYfVaZsn37DT6NGkwAv4kzQjMYwzbbyamw5FMaKjZZiToLYrCQWJEpBqQTAADUT5snd7FBCjzy",
  "key13": "2Uk7u1pfw7p5o4t2JE6rV9hCNmW8PHia5oimqggeqkrzrdPZ2hV6Djqi8zRSGCtJEPxL5Ueeh5CVbaSYHcBFB3JK",
  "key14": "4NMiAiMubuRTQDr7JjR2gsGLYagsHvYwGA7r4w71pEVerFUvAXV9Wrcb1VTTR5pbsUDDk2vA9oKNaLYuJoPjLU7z",
  "key15": "4irL5dgot9FovotRGS47qY6FsXK635Q8ZQHzrcbWgyyjtyxtko2ycGyES1bLJPeCuZaLzmbQrfReGBRzN3Uv4Azx",
  "key16": "2EJ3LHw7tMBBiU2epTxbVVNV7cCYqVfRXKbazj2gHTfkzUAg2fVWyFkk8t3Tm5cESVRA2yB42SwEogmifGVRoPvR",
  "key17": "5qt7E1Yxrrd7rrA6PWvg7PZGaJsCGVouoQxjF9VN7oc84x8eJD6hujHnZygd1hVRXbAngnfjhchYZJKo2Qb1KG6q",
  "key18": "47nMo8BBy4MFudxZZ7QNPEoE8qz8CwFkbaaEXxGhWAByY1xgVGUe5SUweQHXRip7ndDdNBUgF52JAzuyZDeFttgj",
  "key19": "4L1YCzwhq3pxiJfG8p7C3AKXPGUC1WhCyLkdonZbWGNtfCSgJVoWs6Ez652zYJcT4QFKkZkjbffCn3MGnNpCX9NV",
  "key20": "3UuhQbUytPoNq6MEinF7WnTWijJkJw2m8WTFgaPGs1iLum6sAqEjRaANcBahgqfp7c41fW3iREQT2vQGERipaqd",
  "key21": "sn9SFj1AVZE3nrPoLMzh1e4RtP2UaGip7eJ3bcMVcb2nGCc9PDTF8vTJL6AL17qU5kXVi5sNFFcwesEVUsBwaEt",
  "key22": "3v3KnNMFPn6EvKiQDK6b5t5xn9SwADRV8QRZGrtLSzRu4SaohPBarVk1DSDR7eJjg6LiUZKQaKPYjWsgwBRyKpwE",
  "key23": "52byDkAccoFp6Pvxting74gRW5rAqaWRHmFfeH4AiSMu4pAEfFFbwqkAyvgPaKPfXgJfRZPxvQgTJn6tSbap24vr",
  "key24": "26nKQsVYUSg9n8RqyVsSGydha9hzSKbgDkzF3a93aGUm3MHZPKNqgTqT327QwVWyVQEoQmUjt6a7LZ7eiihbAjJo",
  "key25": "4G4j7eYm9CnHLKquEqLDhejCoXenAFuF9GmMcvmrc1qBipK6Y9MhMMmtM5cf4oHZn7wLre4wWL1Aayn3UFnooaSa",
  "key26": "2mKDafvnFf7A8X7k1L8R7UHK3amxiRzDaMwqLKDJV9Db2BU38wVwKohikaiTT18wnSeKXRe7bZ72HT2Psdq75mXk",
  "key27": "2EbaWkzFhvkrQwLBabC27nbPz3S8jf5n7mNNMP8Ghc6uXbjcKQnXd9mdeFrfhv5sU5H2is9eW3AXVpym1J1bjWbD",
  "key28": "4Cjgg7yEabXopUSkq6KuxC3SeQxpK7ucnKiYgPYRNqZ25Gvx7Pv3s91cWif1B4Fu79kBumVXvGP9tuxzq51Nwbwt",
  "key29": "5mRhwrQUokw2pemb6UxCNaZut6eYsrjSaU2DEBUN9er4rc2Qah9A94Fe88taZLvMcBsz5dwwP1R5RY5BBQMUHaca",
  "key30": "ov76AQzBcbBEbmNWnyuxTEipWCEtHcLiAQ5kMg5h8xyW6vQua63mRJqMsjnjivYtmRQmG6uzT3xEae2VrUcvQd8",
  "key31": "56rTaz6KRhrSpLwVZnpVok8wEqAxuyRnfUCeSfPqxEMmyZYszLWCifupRcfg2crXVpNuXxkfV8xeNS4as2SZtUKi",
  "key32": "2FavCKhdAHRRTcFYrtzsZ9sC47ehqPtV8mep52aSoVvpcT7BC5X1ssdDidV94urHDmovP3zPvLPHB7jFtGj2Mp3Z",
  "key33": "3z6pnrHwkJnusA8qYeVyoGbRk5BofkjEcX5k3GxhRGTUyKNoM43xh3QpqJEJKqq1maD4yks24LxNLFufFyxw4VB1"
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
