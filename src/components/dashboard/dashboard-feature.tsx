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
    "5rZtAfFz3h6hSERE5bx8GEpPXXoUntz8TyRTzjPBtQYgCnxvwzMGTcSaBkDLFa7dGWDYaVNp9YiA8iqae4SLrYrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YPyDaern6CHWKHkmRtsLR18g8DgrCDanaHc59Q9XtMQPPc7MfHH3efPcVf4eAijdYihd5T9wmhypxZntemFribe",
  "key1": "9iGgDRo83tZacQ3qUgmCbWvYWCgzXN5euGTyv5yQMBwwKApS6iKMq2RvQS9HDfp6kiZpAhgwFVe6yCjNcUC4qJL",
  "key2": "s6QJxFtEyVhsp5r2wUKDGXGyyEAsTiTWXGXx9qjPjsCUu64317oe9d5h3kv6pteg4QMt1jWQrThqdGU58g6D1tM",
  "key3": "2tjMfH8AStneopLc5T9XcwpW2fGD6EH7g5f9A8DSS5isHve6msKS2eCCnt9hss9zpEFUbFpzVfLNwDHJs3FTqWHR",
  "key4": "4WSJ1FrybYbGAak8Pb4z72SrtJnsdEpJSZb11AWbhZEoByba45d9Zci5jDxB32XLiwUhEErpJbhjEPNcQVAoqFdB",
  "key5": "7iRypZGXMa9TmBMjqHhBKKvv7KGa7k7oNoyqLzxAagtqqoMZVCUYLJYH5wNu7LkgWS1k67jpRSYkHAWEvQKshQ1",
  "key6": "8bqXkw1RzpjgPLXbb4nkiqu3z87GgFmcWUCWtuAZuzb6WsKjCGgfL9QTAzcn9nTM3iZUoFCz7fQUKpX3Y1cXjPr",
  "key7": "59T8fgL3LBP91czzzVYhbvJF5Tppg1mxjvz6m1GtCHNcTMac6kCax9RBbxFTYnv7CKZkydQWHGR3boyLB2fCsPPo",
  "key8": "5RejqNGTCRbqiXXhDHAGpSDq3Acpntk62NJEkZUH8KbbScVwGYsshy4jeCR1VrF2hpVwNuZBUFwjQtQCnSnzNPji",
  "key9": "o8prVtVA4Y1sMpLBFpd3hDQfs7qgu4ryXty7jB2rCEUWfGfM5pYFxKShws2sesdCKZKfF28ehkHWUAPRpw9PZ1y",
  "key10": "3oVidcdPis2FuWfEKdC8B5QHFVgsRedibX9HSbsp9MrSyEKLU24xqMDv3H4FJKjjxSG2RVuGcQCDQmndzJaU71Y5",
  "key11": "5AJEU1NAhNcggn2LkmjQwoaL9FPnCdN2NdGMKKaRSGEYzAnpz4tgd9NZCagFZ318GyBHtR68G5znir7qUSR2dPSZ",
  "key12": "2mFo7RGSVowm9gNkPG8PBMggdmaEzo6tpxgzcQDczdCutTJEuggwybyWXc6byei6dEUxMzA3GJWYaEcxtUwFc52S",
  "key13": "2DCprxKFcHpTKw7PPzgQiVaPTYo3gUw6wA3t5ttk7a4cnT3cf8fG9SAwupcQY6ymPuW3f86geXFyLJ4PA8Nv1wNM",
  "key14": "ivSsF2196xWrH79wFn7RqGBbVXH4Rza8dRyY1476absjxnkHw9QvMN4mhFE8QCkhjoLAeKyH7qQrBeVq2TV5wRW",
  "key15": "551qzSqwpMcUELGvBcYeKrLaR647MmaVwD2gmNAAjV4ELJPegwWzan8JJAzKCjzartnW6L3ckGxMzuHv19z6yW7Y",
  "key16": "5bJ8SNxtjWMySmTXtexbDPJnuqMhtpvMyj6Xrr8ZMwc2bqujedgFMbSg8BD1S267da8hCn5nwdRRPMysoVpwnMwe",
  "key17": "BeHWF9M9zCmtCfbk2Z4LVhWHkoLRyBCdbrKrgJZaLTQQwm1pTRvfrAeMVUV6ceXWBAevYh5owvQcRTRm2i4i4sn",
  "key18": "2UnyF7Qv7CWasb6TeXco8A8xtBtzMz83bp34mJAPtpwWVBYbSBTNNDZiG5uf2TdRo8vngUet944gSQVefNy4UNy6",
  "key19": "Mpd2ZWcRQM8rH4HxzVQKMRsyW4HZdZZRBhQBGr1bsSp3E4r9tVq3LhTmhFbXPdLLjaRvvQvm26QQo6Kc6V8eQXU",
  "key20": "cXN2dcbLu4qxWoDrLGYb1nw8TiKN11P48xFzRoNeTHbenombCpdGEGs9MpGK65yfJbcniSGLZ4ZTyrTmvmNAnxC",
  "key21": "4kV1KQ6SucYGJArcGNnFbPi4rjYErNmFjLooE9ukia9x5rKcfvpt1xZwo67U6K4vtp4ukK4gsa9jJQx8fLaoLAuF",
  "key22": "2YMFBnMqoboKh921ydHvVZ6CdisXmBcjWqGeGyYTu3vhKZBCEQwnVfAXao5HjmqxB2dFiXirjLwiTx3JX8hTgQZy",
  "key23": "5MNg4rQFeTeLzB2mn3N2rSPfyqH9RPUNQVj6r8pmrAsaw6VzKAw7ESwWyiPDbPW6vqfT2wuBkcT4869zrM3qSSdz",
  "key24": "2uNWV3824XBLFZxQRnzntDdGdehG98YQ8fzLRv3JAvXgPidj3f3avoA5bGQerGBp8FYMcYLjKUG7UPbd9B5r49UX",
  "key25": "3nDnogPMvcYDDS5LHjTt3dQWNNhpaSPhoS1cy9jU9NFepGQceMAukF32N4jg91ddVP5beiEt2DW2SpjF2FrM7Gyr",
  "key26": "2qk7jxNQop1Svna3cjCDecK1EPtDN9gMmLLn2HEB2cB9Byo6Z8QnQmoNDgRtzttU8WwLeSo9UH8zsn1Y31h39xst",
  "key27": "2wceTyBVDANqZsrud8Td6jc6uRAzsrjNB1cSth8whgLfGwmiYNTiXdP48f7pahMAXUQuA2rbopFYb8Xgi58N7T9d",
  "key28": "4d4b9PZfdm1ddXX5uQNbRvq5YLbpm4C9JSPbfTPtymWB6S5xBmFC6xv6tXuTQ3bQKvZdfauDvG3PiDexTnG6PHig",
  "key29": "2qRCPRC574gufvhffUnA7mTd85CTjMi97ffvYnYv6Cem7JZNCj3XbjfbHL3jWT8D2KaBk49mSmiqjnJCWxFiSeiG",
  "key30": "3JZoKnAMLC2pjXQ4WDKViRkMfMiNWFpisuLf5dcpDXQfPDWB1pkuWymvvjcqsdqie2rws2HVc43Us1WrCK4ya154",
  "key31": "37zgCZPFr2JTQALH4FbAiprJ2o1nWtencHgMRRC5z667vZCsoNffh62RYGnfoMqGEpF3LPMi14hamWsRTmG86zMw",
  "key32": "2zFbaNhkT4WZeQYfS6TWz86gQLiyCGUkBcc8PRUw7xhBx1myFdnAZezFzfZZKtraMEa3aYdMd9tFXSct8wQ937Y9",
  "key33": "3JzjjhikcsureqFYJ6t9hFWEP5yypvsGTADJ3NdX12DXFDX6n4X6M1eXBw3d5FJsATc5GbeGTFQTHYGEoDwYnfZ7",
  "key34": "2rVncDiYCLNh9KiE7sN99DoKnjFMeYaUKgWsMBdCAZtGWgWqYCpYUCeaqzRL9dCnFk8749AoSR6NWRoFX3kXm516",
  "key35": "aahzUhZTNnrw49tWoe6jDE9rSv6T3JaBNkfWmjPRxzYnZHo9Mv8VN3XdABHpnTFwMhSfM4iJyVuPaCGq7k8eYvo",
  "key36": "kgNJuNqzret3KCKqgZzNTT5fPKudsCebyG89mwySpx243BQnx171QoC3KdbhwwuLyAbh4BvvKXZHvhRVsFnH9oT",
  "key37": "5bKW7Sjwt7KiL2w8HRzrd6Dp2XidVCn2QgMoDfr8Hkf5KC4ZAeAoejtnrfYhGn7jFLbMeKZgkkxGawSQow7mPp86"
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
