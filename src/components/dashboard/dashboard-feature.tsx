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
    "5Ad5L4KpZMcRfcRDeXdnUMNoBnzLyV4mFRFc8G1ydXDmSVgGUZA8TbDQ7kbm8T8seAbErjJrq5WxBCKUo4JhipWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ugzjFsw4vjaDBR9EeMdgZhgYFNosDQzHRFaXfaVr8tbQbEdSJLdEtG1cX3tYXgQmN64EG845agaSZBscz3eG7FU",
  "key1": "oiNMEeFM9m2YkRREBMkL3V8QdF78xencd9PYtBGDHbn55YitDEz6hSAjRSNvtzVDvVXXivQrPvojYk1PNTzFaV7",
  "key2": "54mhx2pBktBuhgn3sJSaCyni9Q9hPkzeWbFdEtEcu9ivc3ToKFdK2nRbXbQkhdvULbP5d3ayBa2L9kasMLncbJYT",
  "key3": "3DGLsBepeBwUPMuhKuLRuS1KAQdeS7md7NJrnm7cyr3WWGQQXsy9nE9nY7geXkqQ9Xz4j7wnKhQc9gh7M2SD4j9E",
  "key4": "2uJkdYBv6uCXHjYuyxHcq8LqpRewRTKF7isp1PADgvVu38XpbVEuHRF2f6SJH4bCAtNYdsffSXV8XtY8PjbpDmWm",
  "key5": "2ePkcW6J2DP4Q5kZK5LJDjKAjGoVAj2muAp6xLdPqZc5725Uax3wC2ZRSG4nJiQtpfVtALXFoAAKv1xXVsNwTm7M",
  "key6": "35rAMfpimzxDxCcrQgnjLe7QRxMAhJxiBsn9otu1BEHdbdXotH76rFm16Hqrs2XMxypxq9s6SWn89yctrs7DATkM",
  "key7": "5stmCbRJWrracSyAnRQv4py8DpsBdUJnH2jto8eXq8cWt1NMtmgbjQpUXKDCWvwTsKHLPeD7bN6cQoA95hzKqucR",
  "key8": "5PrRerQzDczKhG5SaziaSeZZxm99f8xm8uU5fmcmujuecxUoNy1Lqbg43mw8TN5HUf6GWN6kscHHWx1xSLpHbTFn",
  "key9": "5UZgTYhUN735e54uAJVGBsEyaseuBW1eZvZnfWXcXkbmTdQcEeyQVoGKzYUSr3jmSMZZgsVSvaPrxp9pUudjPPzN",
  "key10": "2SBdQmW9ScBnw2fypFVEzWxij2CYAxpTzigbDfNRR5JfKWHrP43AN2gWJoDSBxtAs1j6hbbzJVT5GS5s9ECT8der",
  "key11": "bCdwQKLy5YkVN99QQUxzB4dt7uaBvYXNSfSwNuucUAMJpQsNV5BsJ1JKcKPkQTX6bAnHcXkEzHG4zyeRoXTcKqs",
  "key12": "5Xz5ZRbSF12iQXmJeQBmEBbwNQY7q62dMRAaMbL9ARh3wMXS7KLjLp4vDo5mHZzdKXfPgDfjrgcu7D2mmMo5PBym",
  "key13": "3XqpKsvqndTWuoxUAeSDb9jJAuJA7GuUEYSwy6SXQGpnoaK39WZXpcefLyv3toQ7v31WYoCmXiknzVvhdmZzmvBc",
  "key14": "45hH2BUeLViaAEy29ikd5hCwvpaSz1fuECK51e94whtEfyFd98FxsugdWkDksmU6Ex4GFc13rYGXeuftwNxXqeTk",
  "key15": "2kZ8uHwdqQoRKh8XgRKJuPhGTThvUmAw8BHhGvJNgFLXXSgXNu9EWynj27U5ozcRLfr4rVXjcv7RSj9AmmrwgiTD",
  "key16": "4aDN39rEnM1kxJEwEuzy5hJAdeMgSBKbXtYNBVCZkXc3yZAP9XUK6WJWVzBdJczio4uisq3qBqd9kiGRsaoL8yY1",
  "key17": "WvbNjfzaooa3xn6DhgWLi9n8rmnS8gvxhMaPyHFuadPBjG1Qazft7MURhHC9vj96KdycHTEiohRxvjhdjM3YSdM",
  "key18": "7dkEeR39ucH1MfPohcmghv9Xji9oCNoUkQMUxKjHoBhcaAegaRDZ9RXLJGD5dXZ1Be8TWebc3HT9P49ghrj2K7i",
  "key19": "3CKKhKFxCrS9jgcZKsHj6cDu6w8gLMEdsJGRRuPDbCZ5qpP5YF6zSqB1LNaV1tiVSQwCuqZgTsiZBEssE6sKwPEQ",
  "key20": "Gaj3oquWMx3hAkYM6hvENFbYx2Z4dsR2zpmsVavEN5xr1wckZ1zFaTXmwSwNYffTugFEJAq296SjbyVxYgMQD8A",
  "key21": "3zUAypJTGW4Cwwm973H9pd536wQSpvvFCa8VP6PKNH5TSojQw3wL8inZVgTBJLpBtvTb8hmJo674ncRxYLqtWn3E",
  "key22": "5JPzXPxwpJrQ1toDmDizMaA8LWuPL5asTVMcRAVxHg1XxTvebgmB5oZU5aWXvJu8yY2q45fRc6cVaQv2TRgSeqCx",
  "key23": "UqCQN2C3xfcrwLnk9J8sMoSqwkVA7ZaLAVnfr7t1hcadRuMiqHe5PUNjtjgYjzW2PR64cmNfAyUtYEWT7DgYM5s",
  "key24": "3ymhB2fEwryuDDMVngAkhXv7swwwJAta323oAjUG35ebAmN4Z82DG8eLujA67GfyysBdh6iEx3JLxUphiAmN5fgH",
  "key25": "226nHM8AfCrw8ZzttXS2kE5cwjENYha8pmvPKziz7ZEjVwGw7Yg2wcpV9X6fWjjTRwyZ1fQZET69zadQtjm9HrMS",
  "key26": "5Sd8wTtEs5fbSmVz93TU63jhs7fjwZvBZDadNxsrjKn8ufL3aosQsnTmwfL9vNgwMQdQXWJxmoJah8W9VULSBja3",
  "key27": "2V6SvEoKw7kJx72RbmBhxP7ehSYajqgHLNQf6g8aV16buMkUCtrvBDS9DZVDDZBjrgLGn4V7zPNaqVA5xa8oCu6H",
  "key28": "4zZTvjgniA3fumgkiVweg5ED8q4HJTQ8A6fcWatdi2wZEEXmkCUHoQfLhQDujqABssVR8rB4Swmo5bbDoQiTbBVv",
  "key29": "2E9Ao2BznUGGnjcGiSoT2F31wUbfYdSGcZheH6ME3Qh4RLZrD4rquGTjdBbiPzZS4vqca3Pib2aZDpGEpG1rgP5D",
  "key30": "2fNAnQLcqDnfyMrgAEdu3ZiKMWLtT8fJPxdzk8KYNhRKbXzVADp856Efz25Mc69yPf9w9WV8nMnwXXL63tS8K4kC",
  "key31": "2vS9h243yTi74AbKyGk9iXjayjsKhRvdbBUPWL2YSZf2LciZp2yd193T7cVPqssKymZ1iQM2VkE4qdc2YXg8B5nB",
  "key32": "3jS1C6S2gqyWeGKXGZaUjUFoavT3dVPM1uXjeSAEHjyxFV8jE789qmZx6rSLUk2SU23i4QLmP4VwbSEJBZWnbJT5",
  "key33": "3W9w8tsw4UEpxoPUx4JtxJH9pk5VQBNCbpR1V4E8ZUH94H8CZ4G92u2B5UHYfY6E27y1aQQ6kEqVsayU7EsKaxUV"
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
