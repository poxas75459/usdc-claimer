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
    "5QJuWZEsZzDtTHgNmUR6ZNyPcPNLQUUs5YUJPwyNw8vkTSesvSzhy6d3MKTrCNdxbpmbEUoSC4EWMxkEc6EPgDjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32F6Qp3jVFuzXgz5L9XW6Kz27fGebmcMGrL7qCcaga9EEDpTrg6bBnHDadTALNhL4baG72wdxprujZZxzQXrz4yC",
  "key1": "4tcZA6adPKZeZK5ddg126PrNmkUnMWmRttEkhh5uT2zvirBpUGhxYSv5oC7e7XVyrj5BGaPdZmv87zKqfMtykr2",
  "key2": "5axoiMEgs388ma1MFqFZpG7JLRAT6Z6o7QqUnJwY6vkHXfSyxrXgyedh3mK8E2nAr9amQW7GxUTgq7WAhJxPeXSx",
  "key3": "2nJ7gvCAk5vx7LkTeMBoCzpEe9XU39mZhiAJDCsE1ZgCdkE9LZ7M8Tf8T9QBwifH3ynehB5KDTFex9Lp3tneC9Ki",
  "key4": "3qE7svSHgTm6gPGWdyL1K8dmnpyUiZSZN8PSS6EgVsvNZxYfoGLjGpXkrbB3X4KejHZguexu3BT9iBxDKvhVshGQ",
  "key5": "36Rs4vWn1TY6Mw1obR1tdKtgNtnzCeohnSYX66cTQaZdz47exuiFFNDt4XZM5BZQ5TSTrHvCQFRipe18x355NrwW",
  "key6": "417eEJroQdtAXYUXcyN1iKpmZL2EZ7iixH23KgUg8UddicwMuYJ1FZ4iDEKmz3BZmNiLzFR4xTR38v2m5YX5Uyiy",
  "key7": "4eCjvfNimpmpg5dz28dvQp93bEvrQwAWi3xrGgKgzJnBchUjuy1kRBG2GUbzqdm5oYkTk8cT9XkiQu5WXBoAntDh",
  "key8": "51cpnPeGLJukEPGLbYhaMwRnSwASKL1F5XzExYAR1vqfyStL3YXShx2v2r8ArkCsRSzCvbSKGqVBJpyEAZuftYb2",
  "key9": "3Mp25JseLz86LaMo5Axk7zEeyqX1YNHBTB3Gv12HqALScBuoaMSyy2gcNtv6EBZAGnjUuCtj1NJ25sw7gFJhKykN",
  "key10": "4mEcy37LhMd18ed62W7aFHTvdxYaLLr2VnC85kU54DyzzDaTrrpQCznCx9uCUCqqH3ANAt3Mh3aT7PJNfRBmQELq",
  "key11": "a2K8uLd6PpsgJhUP2wPVJz2kAKGS3LA9gJh8tPopPBKmACq5r2AccSXrgRPVgfsY4YQJJih7huhhPAGzJcB1FNs",
  "key12": "FVQYJe2G23x98GDvpDb1c2SkyJEY1ASRTWGvouFsQGzP9c9H81yM96xyb5PuSEFkRcWJeXnnD4nDTn3LJ8mu9uu",
  "key13": "2qg3UUXJQ76Rt55dBXpkf9QixNCaJHyrKVLdTqLi1ESrtHwPxAFTjvDnPMkEC2ZgBSuWxytUQfjJ5DU9ZihWos5F",
  "key14": "UnSn3UbycABjEnX8EcmXMV71tVjWxtYgXy9m8DkBpTBkqss7onGvjYUaVQSVRZq1CktuKrvjB6sYEHavQSa5j9H",
  "key15": "roeHMnTaD4mSU4ctk74mypwJBiYsSYbRMFkkmz2oDZq745W2HjxWZNwJYSUvf5opWEAt4rgcAG6Kz6XuFs8mFh6",
  "key16": "5yRbPdLeJk1rs7Wk5FsTBAj5S75mcC59njqJTA63kpPE46Fs9p2ZXUCEWwRQtWUFG7RRHhxwdtT3bSva6ELe6Ma4",
  "key17": "5wJyRzXUgTd8UsdAfhyLgbEHoV7jkAkVfz4g9gkdCRY5WsWSmMfaSbBTBc99pvLphKFCA9rDrnfLVCnwRYpw5iPy",
  "key18": "4rYBMzb73PLgepWmHf99uB8ZX9QtXhZD4DtbwdXUSduAMJPiuaPv1cxNHsLQrigN5c2va5RpGnQkw5vAaMXu2nEU",
  "key19": "yGb4K3M6mufZyDExAsuttkEoxLkSDJZcQXxk2Bh5DHmgiucFNvzSSxgkHszLXvEYGeRWph1rNRhB4hc3bPfDUCa",
  "key20": "36Vw2kr9oxs8Dg4KPVAQDCt3MKAzBYULc8SxDR3AQk7nFaX7nojCJkZCYxw823nAm4cczYSwTJp7WpGr1QENaVwc",
  "key21": "2mqN9muER3junW5U1KSYhe9okPkvHvFkX2Q1Fu5BH1bAbvQd1pyaAwW89QkBFU3UtfrqjkFGwWaRJ8hYYXteLu2c",
  "key22": "2sYEHRhoZkDPzS7WiMEqeMEVak57spSjLsvHpqCHLTeQiAFG4r6uSAHbSyEDYNGmHG5aVdgDKzMVBJ5ZFWdmWjF",
  "key23": "3TXigfSBjGdkpJPV21KuwkqjXjzonY1xxKhbEZTaD18G6ttc7qtKqUtKX3NrpVRNeBB4Q2c6gM8S85UPBj3HHRHZ",
  "key24": "51gh6TqtkAJvPEzFpLPTrcVFkQ2r8UXgk8aHiEXbNu9xa75UBQTgCjafa3Eex7RpfXCLTnbMEmWaZvXC2X6ba2Em",
  "key25": "k13z5PZPNMX6Phw2wxC3yNi1QbyXjQa8Rff856NBp3BhxeH1ZsZ1nMJxoYS519AbMRqBT5BSFgj6yxjrQ1CTFAE",
  "key26": "4TCgABdDkiZgc6qkKY3NTYDFs5DtNmfYZXFReZK8rj6ygZRPAfPmeTzS3UtDkx26eVPSpxTCqjBpntSThKCW877z",
  "key27": "2SeqwaQVrLc3ydwJJW4RsgVLSCPdzGiNTTaYRnCoGUubvXwKymdV7a55N2bEUoaKfY8AhUFr4GXDavhDMBREEkdk",
  "key28": "4xYwvb9JCHGHHCVA6YUhds3SPjghqYapDbqV6wfS6RNn3Dab1Y41Q5DWZASWj754ZYtq7vgQsHoNiwLUbRG9tBUS",
  "key29": "223ANAZ1Pg3ZUpHFN35g9jp9nCCEThixd4pR5KbjhsCvsgrQDrDKdc4eksapW2dGgMKvpaS34urdHqRJt5AXpzfV",
  "key30": "2LjFQYddhXDMJM8srfAoegbHhNKno5xAa4FvLrmkrpGsVTm2JCe238A1gVsZQa3seeheWxXnpkb8o6djXHyZuXxC",
  "key31": "D2mbBcU5jk1ZUaEomA1Xj2coVLwH3zsMrpZVfENgvb8p1dtj6jaQAVoLPjYkXNTeQ182jQ3AVkQ5f1qZ4T736mT",
  "key32": "pA4DZA3qPdBraTanfww6nLXRexRE78hk9z3VpQ1xNM1cuGK7i9w4uozE5B8KWUkFq77YHpVenRXDdPvXDhKhaEa",
  "key33": "3Ev51equkhV3HFvNAd1UDmjPw53NuK7mpUKQJSQq7NZwBpVw5gxiUaNiS3BUBXdwro3BUvZ2qFqNv93Vk2i8sCYe",
  "key34": "5taPJmqu7yNAcBaP3HXVJbVe1FMQoT4bgenXvBx7JbyYyPmmDVHEU9A8eF9nvBATCqffUarbgj9fRbdJTNwPWp5R",
  "key35": "415nyULhM2ZkCTUwtfV6ArsqPZF86aWmxoMcAwPFgyvAjXNZLkRPnAFe4wEp3eabz9P8btsJJHJG5Ui2NxVLxN7K",
  "key36": "5jv6tJ4hBsk6vf4j3NZbenrL3PSNPG2XR6EQMsqQEjpZLZoZ27694hFsAYShgUNyNp9STbUmFmEZ9GR1A2xmaZxD",
  "key37": "5sqkcBjqiWC9GG7bj3xBRYwFdBEAXiP1uLohQtceRHy4yEMyRsDKZXWUAxJbXpNtBbVgJZPR1CVBU5dDZYNPFnmi",
  "key38": "55DHBme4TddrbneHPfMHQ4pDcKaDL1csesAMiboSPu1hZmG4RUr9jvQR6pdn2wpi3Zu3zaCWpxf2FiSweHFo5dFj",
  "key39": "2957p2oGtN1Gw6jzdPLZk5nV5EbtEyuUywQqbQZuTZxxNdn5ckpbtZPVr4j8Q9waQroBEzXMVy52NqaSoGitSKpx",
  "key40": "2uvJKCYs5J5DbjaXK2tBSxXTrhy869DaxZBFHbQD1U3CMa9tNmsa3pKzUon8nXUsdzpZzZzU8xGha4yNXmS1cKsH"
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
