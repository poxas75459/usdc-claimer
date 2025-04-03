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
    "5WKj2LyjvBAcVq7yNUa1R9LFx2WD6VS61dwymzL1i7aqQMAw5k6SrVqMpDHwPD6pjnt6btVtLP8v2XzvQYLzbqBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37B7s4VGqBxERAV7Fg9jDCqVMsPwuuLFDvZyYDUBkHyeCyhSkB67QHjbkmH8Gr2sigLamEzomgs25ZjtTEWw3rdd",
  "key1": "2x6WhXCdQ2DdD37vxP1VrKARZxoZPrm3yqwHDgvfHuaDqgPMLfEFLhbqVYKH9PKZLvaD2fwRMqvLYFiUv17bAUmc",
  "key2": "5d6dJTRQUGPCLri9JdGs1tpsZmrpwFrTsfqTFUtHPSheaMTwsa7mPj2vEgixHdJoL2xdawKZ9rBAikADdVBC2JTf",
  "key3": "2ta1rQqQQkjdsFad9zd5FPEnwr1zv8Cq6W6tcrSj814DkquPdFvPmZHAYtPtd2DCGpgkovpsvSVWFLU6vcqtq9ur",
  "key4": "4nG5TaXrLmeJ38y4EbP7XoN1WfrHANU8EM85isBn7MBVDgVu6mnC1aVP8CpdR4Rndw7UPRtBdJZ6XNUqbwyghE36",
  "key5": "pSUEkFPPGZyxmSoiqeVwQYpFkZSKrXSiGRzKRCuQpNM3juEDRuyrLCML516jgXNVot6fniGtcvw1RKmNBk2dwYk",
  "key6": "4Dyw1VemvuXLGEcizagKKHX96qAGrkmrxk3sFJGXqC7SzFW57uvFCvhivVbqQNXUBQtUNqt85cVMqaDG6xdaoqta",
  "key7": "JJkS6uHCsB2KxPHbdRD7iYU9aFEcGinaTwHYFMtKrzdE2GVyWXfMMDvAHNDQuKYZ7CBTuksJdGH1GMEoAzD5frD",
  "key8": "YZ77ufMNynTrAL88HVXRb44UEegyChnfK8g6vkNJcjxvvcaF9qwbWpTN42vCBMgFDpxka3fyN6Bvrg3SXn5Ue31",
  "key9": "AaGQZJtisCSdmUT6NaCN9f144NCtAswhAxrbnswSHfNxKFV7NmT5SXTj9mysGZTkKcR1U8gL7pmHUvhnaNx87yY",
  "key10": "JjLAsAXd1y1n5bG8Phm7Ysx6Wp3G1tWtZLBGxZiYfiXySHFp5CD1rSy9zgfygaEUr4ca7Q6VkTNqJ3t9ZLwktXP",
  "key11": "Wcgy3AAPPPHXva3VbzcPJNej2Hv53PKNZWcweMonJAe199otJi19uqvxuF4dUZF2GRXpYAcvPFT3sDypBVDf7qy",
  "key12": "E5myYeAS4qAsLUm59mkqoi4ZuHhqGvuDzDDtpjPe9jFgkBvdkankEzbi4m446XkN1eHuHGeGd3dK4v2uF5qJBWt",
  "key13": "5rMGQcfGgtoWbWxERJgNB2FDZsxw8TTrzLU1irCZCKj3THb4xNZ66TVvVebB8Po7YfVYjXjD47zeVCqF4r2f93Zj",
  "key14": "2nDkXbgfHi8i6huERYohpMvAARxHXedz9KWxjp3GSDctfzJYuFM95mp4dZ2atyK3TT2LdzXoYRC93scUFbkhdKYM",
  "key15": "5iUtzY3dhCG6GkB1KcoGoq3J4CwSpGURdM6XwpMQdK5RikdxWsJSWReKaaLdz2skjsEDmWjApnB8igHjpUPeDpxP",
  "key16": "2JnC4vwe9To9bGLuL76UHavXGKV1qqiKxn2Ed9T8Aw2kBxDMXaJFN7ZUc3xAbettogQ1AfWHHTgMcTxV8YkL32kx",
  "key17": "24bf5ja2Rmo2uyZFZ5vf9wyfsNsuyXH1UZ6ranoc9s83NC8GDSEGHUvBfAGX8rmUP2Jex97FFzwUtGZooEstwFbV",
  "key18": "2hUo1Cvij5ywpgc3BSNuKxX7RR1B1ZyZkfJg4TtNubs7jAzTxgMognFoVr37c8TnUYM5JtDwNYTYLMjhPcC8Uaqn",
  "key19": "4j2cycMZwQaQKQdFfDCqayqZuZKMf6BBWio3dQeNFBdWsmxy9UGMaCnf5Usjg9CDLWTULXsGzUSefEZUNEUCgo9",
  "key20": "2CrtUEXZnfBDMjQFo2B6RoerhhsRJ42iZ99XgnPXG9URB2KzbhqUAQqRiv7FBHd88nikgcUCCCLLX81BBb3pC8ZM",
  "key21": "4sxqeCTwZasafx1NMA5jGmZNEVK95aSQUpwrwuZwtXem68acg9daQpvjhrXisSsPZhMZhF5G5qPn9JcZgdJpzdTf",
  "key22": "2AJC69UHhozdXaM3v62ir79jdL7Ezq2S87WRbxSs6LTeRDRo3Tv4gpBGyfyHsnMhygt6BaD8AMn7vsaYqNrrRteC",
  "key23": "29TLUp5pe9CwDQ44aR7RBGL7aLFpmmtDJEvMC179BYp75S9C3Rd5ECm5dXw8cqTS2hxu28mxby6Lx3EhLWswZXfF",
  "key24": "5ZzpyfAXZhz8znyCHPkpQc7BzexaouuiWmZmzdWsZCFnGR3fR4afvW1CACTszZT9WyZqkSXqPEgXyjVTJWtDfCkp",
  "key25": "XSQyhU11m9R1P8mzK5gSfbYkPnVVJxHAAtSqpsPKQa2P5pX8TffqnAEcTsFV4DUgges24Vt5qiVBfmfUwkwj5h3",
  "key26": "5Zpxe3iS72ebk47b4JYAbDpZr4PnAs6Rsyxqm6smdKCsDuumn7ggR788qp7tRKdeaKqwtgFmTpDgkd1yqqzUhAu9",
  "key27": "4vQogCnabmSQ8Ut4rVW3yEnMx6gxKo8vaYTrqAw7VuNHRUMpXDUq8uHNYc7nnFRmCFmYb6P3u88mSh2Xni3jcp77",
  "key28": "31fkxS9VjQTviqGA8JpuFPYgjxPYixURUVoyP7rc9wVVaA1hWvVnaRuJvyXNwo2wffCY5jP35c89PjuNPGKUSxGK",
  "key29": "3YVGQLY49ducCWAo2tqUbbXu1cvDqjvikdzYJ69avmPtTWSqcBhMPyv9A3ARkhrwpBHjgchpUbMw4EBGmJMSJnxM",
  "key30": "4P4majy3HEu9byhSNoXqj3dyExFiqvoxwUCTVLEWFkeBfzKs15UTgsGS4awtpYfSJmrCVamLUe1ghJwAabwC3R7L",
  "key31": "21ufBcP4mRQFXsSFrB4gxWgbS8fTbqFLYER6MPptztrzn8yusht7i2HHQ5Xcf6AcwKDVhEeELepfmXPXbpta3Syh",
  "key32": "2dcrQXaNyAupRtGkwcvZLaAs38TsnsStsLYGKVo8f5dn7T8Uwr79H9TFwVFRrpT9WGe6p84Fy6JmTHyCH83NG3ty",
  "key33": "5nrZnqYLanPRP4wxpDByQkyh8j5cTszrn8L242GAo836xEEGVHPEoyrYo7Vkb61KnuAw473Votrjwx8uVEvvY9NU",
  "key34": "1KUaz8oKoKgem76awQaLxratVk4N7EQ8vTWjx179iD84ciMVw6YERvtu6mB4b7jB3mkMCpxRXPkRLqkst5Sn6eF",
  "key35": "okCxQQexGboTxVBEejBxjuEbjFUz3nbLTyQf6VAMLh3bZGBR1vwEjA67WegztuyMUhCrHSj2wPgKevtCVpxJryw",
  "key36": "2uwb5b5noAfe8g6VYnNsHGtQp4yovv87BfKT9dNb8V9WEFeg2RNyKXqsAg8ierr7tSeVWafwFZNYnsLWRdNzJjKG",
  "key37": "4Cin8Vj8QEnTM1ubxTkPPR2uymH7AN9MG3Vacm44HkNZuRxDNrTVLMngcYbswvdhzVsLrsaESrJgNW4vN2dUDoR5",
  "key38": "2Nscd9vvWP1YcLWvkQddB2tTdkgEXNdrhXRTvFQKFZey42QtBzowyQYZumDVwzsNggtdJesp9NX2TXyAYsTt8k5M",
  "key39": "cqWEyx7vasJhBvC7qCHUht6RFea4Th4gZ52tuePnQTKXtW3hWnQtpLV3MZw4uSE7aqnSeaMxJK5HdCmo1e2kmi9",
  "key40": "3aVS5WQSo6DmYrkLWkNNc5UmiFnDg1g252N42Az2cVzGYQWDB24RK3cP2pBw59czyyLQsK4WU23vRPkzLVCSidYZ",
  "key41": "UQ112mN9Zz1kWDoe3FMdCzLK48prnQvDMF6xpomeLV339jbBCxPTuaKykTwLML4vSSurp7rn6Qb6zSjunpr3UiQ"
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
