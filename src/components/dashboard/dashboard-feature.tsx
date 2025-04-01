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
    "4Z3HtZtD183nTWBVqJsJpa4ZAnKqVA4Wz59cJAEnTgfLhWdzmEw6TtNeEcKfDGSVMXCGAp9yRGQ7T6nhxm4yNWxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fRL1xZHjALANGc8TpJUTzBr8FPzsNbtyygcb7KRdDHdkVXgRnBTurRyaJGtLR3NCmqhWRN7qCXphkYm847Xrfte",
  "key1": "3CdnXGdoEK8umhwvSSwdkBH6T3CyjynkZKc9uFAFUfmK6vBmQLyaQhLZ3bwxv7t8R2Ya5siU69Jh8FzjKQVC9o5i",
  "key2": "4dUVngeAbGyDqwiMnQ26MVudxLaEKhTWcb9UXDQwDfJtRyLUoJfFqMWX6hNzYPSEZkNqPjQpHYogu4gApW2vQLNB",
  "key3": "4FKtH93NveprWFkk7AkHmga1iCGweK3wcywy9smfP4NUPZjRU7FkRzy22GmD3DEH4WRY6w1Z6mQ3Asta4h4EVXDK",
  "key4": "4UDhgpU3L1x8RHTTSy8F9dJmwEXaUxDkfp98UwH8DDU4o8GYpEbStq6oVGAk6RcPH6LTnCptAWt6BU14xfa4VmFR",
  "key5": "3ojVfG1yKYY1bhSzQBYWJdu6k1PdzRHDe44AY1aRvHhB5KZxj64edweqU4HHDpkBzg96UbwWc1u7eRmyjHx3d8RE",
  "key6": "26KRKjhFFw2icKKiY2BWtQQLHXLpfk5YRa1KsfSb9J5rNzU6c5QEx6EBvHmZ2kTBiPSYNYm64atyGEnrDkXjMno4",
  "key7": "3iSJEPMQ7nLFJUQmxfgDkypzC2aDoJ1WQEb7R5MeSMCVAkysUHaYYA4eF2fCLGiQN64niHTAyXqsiR3zpGsyK9rb",
  "key8": "LpvXKf8fAtAHgi8DtQysYr1C6ftrg7gUDuonyZ1W1nKzwfMjArp4CJtFKB6vjdxkG1mFY1FSP1moK2SgdWzsyWK",
  "key9": "3GjsHh5pcsRaHJsZn5zVHwxdCfov6A5A2R4ZFFaN553J1W835kzBPRbpywt9jWqCTXEArRdi4c2kPKsD4F4vc9aT",
  "key10": "dEbYycApPbngBUFE8fUiKA8eBXYYMJCaQ2qYNs4r6nmzyKtPfno7KroAbg5CRqp4kBc3z3Ct9RmsDxZduZTBfoR",
  "key11": "5ZfpuCa4bZeBeWuUFKHHiM6sdzJQTuJkSjJ1MjHsWBTiZMRCC8TUvRAHyGRFb2Xxz37qY2Pg4ADqDc7wrdrN8NSv",
  "key12": "y3PAM8cgQ8pRGFJaWiJa5ztxtovJCahbgfw1gaQi5bPUtHSMYjBMBW2kU9TVDCdtgdX6kXzw19v52tsE4vn5bZG",
  "key13": "5ivcuvH6rMyRfhkb6bFoYZjBBUy1NMAjNUTGpPrWQzvKEnKTHc5SwFmWBn8N1AcZGGEdNeNx3UorQT6f3fTTFr3X",
  "key14": "5CoYa66Jc9QWStWJozV2zGKnS6CqXiqKwdfQhB7pBKnAwjgAijHpZUqbhHySeciFoCPE9bMTwQYwujKBy9DbZcCY",
  "key15": "4zZZdjyDZE7KbdgrrJsy5yRenvM1z2AS8s36yF1FAQPxjQQaokBjhfh3dsh53X1o6FSxu8HYFnbT9TND6nKVZGN",
  "key16": "zLc6JQZiUatfLTURBtWPVFLzTa31FLKCyRG7e4P4GgQPbsTRvaQZf9RNByHwMchkZ2LpurmaHEhmsHh6MM4Bauu",
  "key17": "5SS7Xu3Z8KuCbuMMihdpizWGxRzBehoqmPSQReQZxzZsgcGi15gjeheHWDCGcdD3zzr5go4PoXGfJs2K8cCZhnMV",
  "key18": "27n9gwwWhhm5tFua2JpnQfjiqQWeXrM2aH3GUp2BLvjNyf3F1t4aXFRDmCw673kSp2ZopCtWpPF2rCJBcgrBUBK6",
  "key19": "3km5e9XMbv1cb1KhgsJyxjMkkcf89s9Zs8KRsTR8uyCwh7DqT8ygjBqyXNQUY2TYLyMsHyamSqiPDsiWfdFXDvZg",
  "key20": "2jY8UeWpwXhjeH7CRxJ8FoMG9b5xsWKML2AXz53ogHpnSmkuv5KtDEvvLo1eMpH5Pyd7J5oDcmTABt9P3oxcoqFd",
  "key21": "2Qpa2agQ1SLmrgoQTKDnBUBQ3jZ9eexyEwL64vehDNwMRd1PWRW8KWpYEEpVvz3JpfZ79ATpE12eKRbaCf7NzdSi",
  "key22": "5Zw5L8vkM4WqGvUFHYdgQPJNoAyNiYh9gwC42BakLjkwhP427bZPdgjmRUdmXtkNw3iRvdSgT7gJSkN1ZXP2FPuU",
  "key23": "1257sCrqVn8zAzyXWNb5T78F2Hn7S4wLgMg2raVCXivkXM3sTfURdmyrHes4HLyg23dZxxyaW9CzesCVxvDT8zm4",
  "key24": "2KmrZKtDVqHvnjnsVd9rFGKxrua5qKnPGKc3RzabtZatTrooMR8Lc5JFzBQwNbTJ4RSTGWYxmRbvniXQsgYQzyf8",
  "key25": "5E5PbFfVWmeLFNKkMMo5gRNFg8koKMatSR4mj8cvMC3zQFPGYeX1TEVr4X9KsoPwtdi5gb77Ve6BHfK31k7w1CgE",
  "key26": "3XfQfX8h55oQLndFJ4WbVBbMiawvaBBxYfoJi2LYoJsxLw9WiY9AY9tE9FpDAWSStF2XcKnzap6MWS2hVo5hHaVT",
  "key27": "UfiMqHoZ5muFxEzWtd4TcTgoZ5rvjMBLNxBGhqyQRBhgvQhZsErSiuaHpQqWhTe56zYzD5pK4Zx74HzLHJmkgeX",
  "key28": "2gHVqtcZVwWRinTXnNbwxMaeAntxbx7YUV5agHXHqbbfWT1BWxfLH67idSY5zzmuFuX3f4af4DHpSgB8uVyAgMN8",
  "key29": "35njc9gdLuah8kgsDRTQn6JnHHAq5cdnYBnFGS3FXuxfYZsqBQKqu2JnEJjGsucy9ZMzV2wxtn4DFwUc4Ab5wHAg",
  "key30": "ycToshuPybmHX6YY99MJ4rMZhx3gDw6MJ8zuUERmX9zKxEu8RBRWrcFLViviRsRPXdRrRG9YNuDh6w4yETq9he9",
  "key31": "f72mntAqFFr4L3ufFAxPVdNL9WkQnyZmsvkt452ixxvH2RQ4cvWszR2Zz95NUtf7LCvfEwqqiaBHwzaag1rh7Jr",
  "key32": "53seR1nKpfR8GWYw5TwZUELrAgUXBM2se2RPdCcUHnGfnUBndoyaApJHjK13pFwoZLZoXHzUgmqX5q3myxbyxAu4",
  "key33": "oDK6pJpBxYQfq79bPKSGCzZ5xbL426avHXb4iegdLUZjXgryqyAKRKkdY4Ynvgki2qyTRwQkYLPGgGR193bv6uX",
  "key34": "57CQ1YtJjJqxGs75tG25PWoTmEzS62XCw7fXmwwTeaTEv8npWzCJrJAUTLARtRVyFCVPyaa2Hvu2xH96Yi2yZS1q",
  "key35": "5nx3N4jrZtiyjkJGKNjgq2D96tvS66xNmrEcsp6vUAkXGZDBkGBgEj6qZz1kLBKtCVSg3iGSQsViCjcXaXkruA1S",
  "key36": "2A1wydiKvueB4gFTTvtDVc41fmw8s5P71o1F75gEeZnA47cKBK4b213f4WszeveJcphU6iC5WpY1Kyy4qqvtxRuP",
  "key37": "4EcFUXNVqHnk1N174KnFQGKyEyQ1ByiYbYhwV9JNFMNphAEHYWMB3c9TSzKe8t7HaeDEohwWhhVDwT41Jtxjyz8",
  "key38": "3akD6Z5ceiVXnnXd5fr8Wb6pcASGM6x7zn3M32mLTpBwdSqtqDabdzA2sX9sVZ6dw7gEHvM6npN9txAVoVHfkkzv",
  "key39": "6UEJqzTZDrRNoRbSs7JMcNZuHaNrQ1JVac17ywG3kUAWApybV1dtLnSo6wkfaPoR4y856ExN4p3JWq8XTHM1mJK",
  "key40": "6wTwNVBJwCAfmaK1RQ11YxHBnhCfWdFSQKUQQ5Cq86LJxXE8sj1rht1Qv2BUJ2T7faqzAvD2nHyND5TpWZ9oayN",
  "key41": "pqFh8HxSNaMeXbstyagFxLyhHYEeCJ1bzQB4iGJC65qeJmdyUJU9mbvrsNLS9oHv6M31CUW11M5WyJ9WyKxJTPE",
  "key42": "D8KWmkDUmWxBLWAYYpw2upPfNWGLDAwbZSy67kcMWSXMDniYgnzQ7s47Rb6zs2kihVHpSLkgYX2CreWtcMWdJQu"
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
