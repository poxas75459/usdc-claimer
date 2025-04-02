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
    "4CtiBogbQvVYmwM24cj6KPLqKhiB96uzhBkcFhfTZfZc2Spbey62XdsHat86iDKP6brvubwaLofCkJR7VHQYW3tb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A5DHjKcXoF6qJLiowDWSKtcrFEa7mxqLpJAYnYvNwEgYBqXC2sUn12mmkJfUV9a3FNa57yG5ry9QrcwFLsxLoFh",
  "key1": "3PBcA8ujnYN4pFqUAPVL9iCLgeXoLyVb1iuvXMwzBXw2QkEHeY2j4DSNowaa7akQk2Aqc6V78AnpdjTjrwdNCPxD",
  "key2": "YWYqLSEeFeutPz6nnfyqX8apyRroJ6ME293ThrBZu2w9P9B8Cs5WJ9a1onJpWV39mMmDhmye4aGqxEisp8YFtFA",
  "key3": "Ub3EhgNHh7Kp4ZfUNYjUEikzxQwyFa85JuwdRw2SB9JFQEpRccqUSUurLiT9rabKUxqS3uqQ1Ai1ztV6RiYpoMx",
  "key4": "3rXRUE5imFmBpsLRfaK8g8Ub942HxBZ3dAmc8ebkXaFLpEGT8H7y9BmTXJwZsY7WPmY7ZnKYQnmcxofEmEZa7i3z",
  "key5": "DpRZomL8i9j6FULn3EvvMxiG9tZZ3xCDcHNjyU7qZBFVSTicbkQZrnHoDAuxtuPFnJGQgEKfPxrxTbrk32EjysL",
  "key6": "bqG8jCSUEE1bBtEtwga6PQMmYeMBgAEo16nKn9hVHcVMqqAwzvGknE2a4HzN3Ybd7DByjstAJQiANt3Zgf3Jtyi",
  "key7": "3vDqUC7WHVczPBU2s3WWUGp75i74s4auj66jdfpMWfUXdrSjeQ99b1DSVhgVqA8wqVV8N1xcpYGcbvpJmpgQmw54",
  "key8": "5d4AYEXo6KpS8eyGmGEfD54ySWiKHp7wVWng3UAcrUS4w4dY31rVm6KkA1kjeBKd2bej9pE76kTY9KrU1M9d4rbG",
  "key9": "4SGErHyaZDPRAE6g8JirLtbLe23rskNnTyN6tKHTu15NiD9T4vm37njWX5qqhbcFqr5S2stCHHpgZcCLUUoKxuRW",
  "key10": "5f2JJCBWv1yAERXajmLwZ9PEV41gYcHH5WvavNn9Q2BeSuW2br9bYrrGHowJ7w987mx9DVr9cZeJmvzQjAsVCTgW",
  "key11": "2Y8bf3toUvrvKzKiXcuyyk3UfLewnWFgyTd3koQQMB2r5PCZPLJvSqmPuvEghGAv6n5qTJ8S3u7QepKXVJufFur5",
  "key12": "3PE1ufPo6uh2HAzSAZC4n3Wpw11xNSw7fcvnAFZtLibFcRaTAUHyJiMgY8fxoEPL6LZp9Ve2ttHGuW7yNu3CZsvX",
  "key13": "5PHNhqfEZi6iXCer9BBgziatGbf33DwUP7kAjcWBN9D3WNaUEFhhmoiz9W91myTkvoveiSC83RJ6BARmenJXxN4V",
  "key14": "xFVQEiTnf1SS8yPXqmKZhk4ygX8BsuCsevvW9mKXyoahYq653ALbUjsNepLJLJ6qfvAniXy2zVJ4ffKjZonNntz",
  "key15": "2a62NugawxHDbjm8eYcJ8CCSPvvtvoF9X4rHUKeBadnoN56KAMDkKUb5poZZBWz4geCFUaEfKKqLjxG875f7sxor",
  "key16": "2qHt4hNjWbXov2dq5aTzkdf873wAt8JHUMfbuBN96DguFarmLjLtxVU8cqBBoQA61xjPr2p4FeUdSzKiyft1PuZ",
  "key17": "2wsAxA1VawYRhoddRipYcxMRvnUdDyyyCt3WA2j9DbJGeLy8h9NFCyYwXvKJbgb9CNeNZy19Y1BX19wDAz4JEc1M",
  "key18": "3ZU7G8BgaTYHcNpMFkAJXZaWX2enctqesoWNjUZzJ1paDLyNePwgXBdQS4vHWDLouSaj3tAjQ53zR9cVDQUnthHC",
  "key19": "2J8Qa6JgKX2p1sjPzacy7Pv474DKv8y2BTTECARgmeg2aVoTqPK4etgsoAFMDbkPpnaUPiKnLHViVRa9K34W3H43",
  "key20": "37bz5NxfbBV6i6dxwWL7fotoGcasRLagDCvGQ87CxmQRn5hxKvCZxprZ46rZtUQJQiF5ycMhsAfZDvn8t11BEz4f",
  "key21": "2D9b2FiZjoobkTtD89J1q59zaVARXrMeRHhpveKMBcmF91BgJomjit6GzkdKZbiMBTH48iMv318swQWkoXnv7ZQA",
  "key22": "52eckxcemedWxszbjLYdMMkb2HFeLxoKLxVhKCCD9BbMFYWrioMw7SqM1iYkqmCtpbvA3Cw7TmW4BStU4aW3d27H",
  "key23": "5T3dreqg7qXUmGLnvrhYDyPTM4mRsFY7hYYrwagSoesSyNobidbvAyrXWSDTK2eiRTBzFrxMqpMhadd51DkiC6b6",
  "key24": "294QnSf9ihNfcYykMstz4FsrhcuZaawiTs2uFGpyLQsNyTt1NfVzZp2kxR1MawXg21cbUhFR1RkrmDE5zhBJ6dpi",
  "key25": "5Z78mggVupUBfjbkKjmJqM6B9xrtHvXoXfNynQhfmgj1wJ39avnasdPDvMfFtUvnzeTrYxrGETy2fDpDzaDgtYCM",
  "key26": "qziaE8bkYcRAnguPXpbq576xG4s7MmVTRxFcvzHrJvVuzMmSYXvcnvepQBAbyByy9zKpw1yQMURs7yqDQTtSWki",
  "key27": "2MRaJ1QRfwQJ65ugUZsGF9yuTZmhTyyRHBuzENpkP6LjyWGXXUnfS22a3ESBdm85dFwTWA5rS44eU5Jzw6CX6unw",
  "key28": "35yqmcKNNVMEBmQJEHuHB3XEMU1W71T4xuR3utrzNVJ8xKJdBvi2MiaiFBFfhNawNLTSSnRHd35r8WBsc4yEubqV",
  "key29": "4ZaYkXKYwvMzgv5E9ntpSBm7f7kvvJ5X5dT2ntEhV3LgAZC2vxTu3F1mvcCwGCX8sFPZHaxGTFEt1K6o1LaANHfz",
  "key30": "5fXWkMtuHs7zDMATRQBLKf8DVQzZ9vr8bwnkxEjUXwYGbW5gzWtDb9eqgnmph113m1MywfjJpKxq5zH4QtnbGsec",
  "key31": "ooYzRzULpfr3XJZPDkBLdpTAEievwobwzR3SSixLZZZQ4XVWx3LznP24aMidoCC3eDBdEAkuqnDFsQkgW2Zuazp",
  "key32": "5CEggCA49GKE6SnPc9wAc9iGBGehUtK5KWH6wWMu3pSbVfBuedZby9CsUuoirW1gzQWqj9AMv99Au6GhE4zJ7KaP",
  "key33": "2voXJxxgCqUPPXb3oiFuPTVWfJTjVBivnfAxiSpHU9s1vDJUNwJnfKzoL7o4VERjkhGewRM2by8wYBdjzYoeMVJJ"
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
