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
    "LKDKTjuCVXCsFDD55zdvLcmoM3QkMCg5MUbHQveaqhqJpv2eWMrMZ38dbWAanpNxjRjsetXb6YPm8v6mF3qiEnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qdx9TL88qPpVU5NoNhCYiDNvJYEsUxy33ppH9PKFLWEJPFH7PTMcZgX4HPbbe5byHQ3JW1jZjZdSMVzXwvXU3jq",
  "key1": "3Beh4AN77bTH9Sx2M6MVjPEqKV8itBzoWAShyBFoA4eNEV2BFkJRSVju2W5C3nhqSU3WwiBqVwmppi5NdR1AhMUr",
  "key2": "2ycW5RpLZ5Y27Cf1yaW11bE8F33Dce8ETwYojoQ95xcbABPvEMHQgMhYZLBetZ3Facvkxo6ouW7nJ8njYV3HqwAt",
  "key3": "2pkbc1dB8nj5Je3aT7LdGagryyTXrqGnYCo7WdrBt3eu8dLmfoJZwacyVWUZtHC88n3SvK8rtBALam2k3jcu8w8X",
  "key4": "2xMw6oaWdhmKWt49x72sZtyZMYwb4F2SxQML3fQinsyKcy9QwdJKd8VK53Pf4cRNEa34BkRsohuZo9YA4EV85nPX",
  "key5": "4GaGFbzo7ePnMWuiZjqmDLcc9SzxcqTkQm81yES6GY7Ey25WA7cSozWb8srqXJkaJAwigKVaiLQXKNCUTzfzuMn4",
  "key6": "5tLLPi4ykZg2M4VW8HSc1xNC4329GvFLJqfdgvLXSqkMNzRQEb7Hf21JLVTJUpWviq6LmS7PKdYTsY5R2kRCcSuq",
  "key7": "zFXnHtuZQY3Duz9gvBM7F56sj6zhs5uQzxzGjAq7DZbpP1JixEsbpvenbwrxwFZwrxUaZACu6iCw2tvP4vuCMjQ",
  "key8": "z5TX4dRLuBhUqfeiuS8JUGZehcv5ZHxDV43jPyKgTxsBs5FnMGE8T9P9qdyYK5YHirgi9qqPKrW95rUJoP7WAEb",
  "key9": "27pyHEDDJoqw85Wb3cTnv2vkkYiDXJHAdNiJf5EFbRC7ouG8mdHrYoYXVyB81moRHGueA71wiUMqurFps5syKeQD",
  "key10": "35dbCfDx9StEsaFBNN42yTPR64xxKuL79SygozgHpyaMrrWXwWQQWNAb4HTppm1Uen2oCcKiyjmuJoDBHQGNahwL",
  "key11": "xhvQaL8NmVpjUmHmMzLHTQCLH8P33Y4MNKtEdfHZCNUR855LoqL2SNXEadXjtph42LkR27mzLnCfCX6RhDgbabY",
  "key12": "4MCLz2hkzEKwwm79a4GU5P11x2tVvXfjmV2WgdXQwQKHSnpxAKnPW4AGj9hrPJPP6c929GUyT9V2uAFaZeLwDSqG",
  "key13": "5HKgfjhWcqmpRnvSVAgvSujrunQGEmigv4stA4WWzCgzUTYRdENzhwGPdr4x3LsJrixo3Mqrb4hB7mBYQHV26vtV",
  "key14": "4TUvJXECgfHhp36wJ3MkHMW9AD4LxT5vX1UMSRpQYV6DUhPTXZd7H2vt3w2gZNhJ74JWBjbju1UmtLqowNomSDaM",
  "key15": "28eNxsMP8FdgghsdVrTxorcXXkzSv99iswmMriJte4Q17CAk1F6kt1rUt1t3DpiQVzgQgUXjkUxvmpPJLADViVRQ",
  "key16": "3Ahe8EXKqQHdQBwwW8ygptjE49wWUqh2e8ZW8wxpjNxXxZCakEqA677i2XJ1gidPeqtTGfumzNZpn3yVimSgnyoY",
  "key17": "5bxAkd9XUfja9Zw3Q4hM839vvTE18wfrQathTSuj6Z8JpUJxTFm1248uZrcW8mJaL8EJVeN3XSozGEyQsW9i4UXu",
  "key18": "5JXdk3SmPoyi3Pfb2XAJX4Y9QTK2d3r6bwzcqRwGX2TjGrLcKKJAFdMoDzRGCWtnGHW4G8krcUoFrXrcUvZXPo25",
  "key19": "tesP5qV3mWuk8k4pwxbPVjYhzioxGc7GAC8cCHaUVWratTrp7NyEe6yBxU7vT4wNUejJaPnVozaW4CWGgPA7Epw",
  "key20": "4yBCzWURXbHUj52CvNptrEAmddsZWwB8kYLJhqkwFH6XVnSJW9NwkqUsRJCinK8trijsvWZthMp6LQ9V7c3jiory",
  "key21": "2bD3azk62rbByrdXuKo7kaeVe4MavDfzh5gpF9W5rqcwX6EsMVAkFyoLRqE52F5JSHqtTixfc6dXrMQF7LDgaCry",
  "key22": "3XhDGUTtAPxcw6XSPqqcNw4La7rJ7N5Zv6s1BBkMUVExJ2x8LmDXZ1aBMxkFAJbxGYEiuaSY2G1ex4zXjvbXKVgL",
  "key23": "335QM3RpnXUjKqWErt3FAogxf4zYfWVaxQtyv9XRdU2GdfRX9AnnuhXPR7G66b8qmNzgJiaxUTeFrNhgeFa7wyTA",
  "key24": "4SfYDfNZ9vLh4JWRz8UybZ1Dhhv8AJyMnNdZpE7wXwrpgygAgfwKF2udfdsASbrsf3sGx9skWxsuCQHPwQq19bVx",
  "key25": "2XgUWim3UvWAKDzbMH7jeVuGo8jSdmc6haV8WtkHXcthjhqKsMCBsaosKbxc2qsNpvhmueB9CUJGE1AiAkAYNbwp",
  "key26": "5odiGi8ki8D9dq12YzqiMrLaWsVxkHhK7dh7dEgE25pjdE37rtsx5i5ZNTNwgtdpytVPcjEQuSiJspwR7GyFcz4M",
  "key27": "5oHrhpnHmCpkJWz9Rqbm5L5ewjGMYjd8Qu3iBUp33hDU4MGL65U3U21EtfeeKGkcxX8EKYyPfD59quY5To9eJeXm",
  "key28": "5acPi2gvtttXrGUzWgKLuoVVGMWHJUxrJZqN7D6jMyRJc1M3ByTJvy7Y5Hq3qUEK9Hg83nBTKDUyedTWUjNRTsws",
  "key29": "4K8P82L5zXYgaRNT7J69kKTyCpedwyEoQqDTRg1AgyinHt8HvQkjb3UuCVAzsGDM7kP7eK9NcgyGJJJJTms8QiVU",
  "key30": "5qcu9z1H99sJn1HjvNnqKRuypKmgPC2X13UAyGsQfBjGGdo3m4cgpZ8D9eWNzbiUk3FyuzWBvW7avuXkqSfAzNm1",
  "key31": "56fY5cfawkMHYXbPb7V13vSurvbWQAmEV9Y1m9o85poQfd2LXLFN8HBg95FiUtxbmQy3yR79ftyejfA3jecHfmDN",
  "key32": "4Ar7LViKY6woLkpzK3bcBY1x4sKGcC43dtySqWHCx7PyPcMNKep1xnrCqAXSKVccpjQDzPvZXBCHc7gJGicUuAFT",
  "key33": "5i5CyqWWSXsheHpn9AdkowYn3wZp4GpWkCNQSnRZ17UqWX59icNYQ2h5wvTxNouHe43AeSjwrwLksV2T4EFdB7p8",
  "key34": "2sPPZaQoGk5uxmo6L9ZGJJPKU5euqmEPSR4VBu5CMqitnp6cvi4ppwdpKNbcwwcqBUmd2ADU2y6nkjKEHETatNmi",
  "key35": "2yuWWc51sqjKLW3sXgwL6o5AEASrGfUDbWemn7wH1CdHzvhKL7JazAiapM5UbzRxPN3TFfGm1JfN2sR6ussk1bKQ",
  "key36": "25FWiV7SMLcAggEBi7zxjnnr3pNE6UNCM1yCKmei614VtP6JoQC4jDdfZmyTqsHxe6xL2diYNiovyE393eKqT1VG",
  "key37": "2ETNXDgxAigTCyutbdZVbraUxtd1vRvWdvUDKtCtHrwokWgRQRSFTJAsdGbSbr5XZD8oCQoHSWMtWvjR2evCXbNi",
  "key38": "5Ph8nHAeJhK8BChrxeF6nx4zfmNuLkaR1yvmpgrNuotUNSBwjWA61MJC2o5XRDspoeETWoCdLcHx63C7AhxHp8ve",
  "key39": "gV35NArsN561qrvDvQYSqbc7kCS959MZZtMauu3ahWR42o9KKjaUHPjPxAf11rv3zMZv8GafxawYK3Dypu3wZbg",
  "key40": "28VQdpXuze9aY5yXr4F5eT9BPEiYumVFaDGgAanPccxCrsHesNRMF5ED6ZHX69JNdTNTnkHUjcFz5dXgWBLkbujJ",
  "key41": "3ZRkvDNiTDgqBFKXeVyEmPBadRCuQXCApeAzVq3fGavEm7ujYNatPVQGMUePyFeBdDBtHnG4T7vKT5WoY6J8tL9e",
  "key42": "434S54NrUyBeJHXpx42aAMJKYYKDJ7fj5oUagHWzA9kYpVftbHSwFP56i7LiFHBQTFeC5c72g8Ki9Nzn5h5f5S1W",
  "key43": "2h1Po1Aze6bkbPPSrz2vL2QXL4kuBM3aqWe7FJ1QbdgZjfjTWymV5AMeEFKB7TxgEFbx6JNr6E9sMgM4WnofFR4U"
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
