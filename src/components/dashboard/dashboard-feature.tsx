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
    "4xUp19fE3AQ1QcE41ZNrzyiY9XeQP7JVd47DqhbpaEqSwkBLidYZCQCMqnHo18kqTP1kbc3qfEMtYiNM6m7dmpiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kRTD8bkTWyknc5YDUNYyP2biwBXw2m77qNVGmbbvqad8SKpECwQbTZxu8BwAPw3FPeUmyXC4rvFSdEVfRN9UxYX",
  "key1": "4wu4H1RtF9Y3pe8C9GtoJd8MQpCyczNvHiUSMUSb8SsxTHywttYVTQ1RFFs77Y3m9LNnh8WcQP8qtpSiGJX4s3Xy",
  "key2": "22FpZ6dsrRWKUyqN9hFe8ogHTHRh2hBAZHuTsTGnMYMcv55muH4J2iAawPrdEiUq8Nwt8zodS6SzRL8U4dcZs9yZ",
  "key3": "3JpWHEHHtnt65kBHfRLQ4LzcL74CPiZtFnuQNJyABLmRk88kykX7UrR2nmHPngwpbJyZ4V37ikW7JXsKGQq6ntit",
  "key4": "4PJUMRCs3EQxNb8ZFXLgE2ufdvY1Rr8aVWf1wrAxkxRP2wnvuQodxZubbTVDxNgpMt5KdxvP1WAA5YgvPDSKefz7",
  "key5": "4GGPEgjnGannxpM2QFL6nktKrxe3XfyNSnrZJKLTbCArpTYu6godg8SVS6tvWeLS8TS5KH4wViRYsuAwhwKePMeM",
  "key6": "2JSrF5Y7grtTxGk2StUKB2rpqb2sMVuJxaUEc9V6Ucj2PhSmHB9vw7nGEJYmLvEG1i5Wn32VS7JuwcTUrFuEcdFe",
  "key7": "28TvWeph8H6wSVNC9z3C23LH6h1qwwFnGnVji7nzFgNJdBvNdYTbFKeU3Fv81LfvqBpRHS33zkMT2viVETn8MQz1",
  "key8": "5LXr3hrZoYvhPX47qCxoq8scqqXuiYVGQu5oeuE8YA6WJbg3yZpxHRwG3g6RxkhXmBWBpUXvpe2o7Q6c9AK84P6R",
  "key9": "2UQpV4MRtMvdZ3YfDkHXRRK7MsKoMfL918cNrnW6STTPEyW4HdtQkccuYJR5XG6z7ecbPbXsPmCmVRHr2PSj7zKA",
  "key10": "3Pw9c4d1tnsxyh2fudiiEnD8A928UbfRRU1X11kJfZ59Q1Rpfhr2uow55TFoz3ktWRDDWrC8woNN7Bx143EzkDMa",
  "key11": "3G61H32gQ7Po9qK9f2op9akpehUbQJ5yBY2tT7WJkFF5WB6AmdYEbmUPaEvFPi5dTeqUFn6AvBTUuXPMuUKCC1xa",
  "key12": "2dsoa4wPV7Dkr9cu7t8zsXdccyN59mwRfoBupXiv2GfmvPfuQtSLMzdaT2c6SdqzWc79nihPfwYgsqdbxHnT3ugG",
  "key13": "56YhntZP1B3HbP4XatmJAJ9U9Ef2xHwhkWSzkgp5mNN5wKNRiqu9Rxp8VYnBmtr6FUToKzNX46uoj2rzLg177ik5",
  "key14": "xXZnxhJxAzypnCjh23c2SPpzWXvZGtq3MtXawwSgogDyjD7cY7YLxo12Fs5NzpjgB6nn435yKryzGccm5aLV589",
  "key15": "4BKZRF4VvF5Nwp2A22CGrssN9dB9tX9EwgW58Ek4pvhTGHyMCw9aheLomCeU57QRrCZJh5UkxSEmyG7c1rv1FMj7",
  "key16": "QrmENfRdKmYZj3zj9SjCQBJRua9S5q49tH2dk9ZHSzcfrTWWq4YWPCJnJydcuWMdwE5qha4TrLRJtRCH5kH6Azv",
  "key17": "PWPdgPoaaMgxY7Z6qKjU1fVuVuttQ9F3JJ9otBiDxCnMgPc6xHyL9bU5Tb3kot1JDH88RXMmCnksuaWWaYSiP9Z",
  "key18": "5gB9kp12WvFfGVXT4kAyM7FYBprWCSXkFc7wxqWNhgK4zjq3XsBw2BHLJcEwJxWvYpzDMgek5CwK26DrPgxdPU7i",
  "key19": "5X4L2mFBS7CFYQLMvWhkxKDfQry4neafU2X3kreCVsSAtUuunZzuL88Ym49kCQZAqVnp9TBL6REqJ5e5iXjwUsDS",
  "key20": "3GBxu99ATRJe9QKHMiGy9payGQQyBrqtEDtLRXmNxQKWCjpXXu4nTMcUxopvAZhHgDVKdEETM3p1jcGRyYCPuStJ",
  "key21": "3PA8DAPCzmehe1jRHBpySUvsnqvYkeyhaJsmwuQcRMYJRttmoFpWPaJK87ykXvqe5BZxD881G8a2GdVbEiitxhRb",
  "key22": "3LjJ9YZHLJL38V7jjh9zc4KPJyLKNCggZxtccdpDS1uu32YpX2Hydi2urKRadRfhfsA8mxZc2SDiq1W9kzcoNv99",
  "key23": "Tp4yYEsfpCqQXTfRooCGBaVt3pVVSPN5vmEGzTV8fFmqiE1rz9sRiSf6Ushx67bVnV4k47XWHb3kUxeZ4Hy7jsn",
  "key24": "2o6gfNp3Z3dyeUtjE2yRQksLVA32EDfN28ESQoYHySvPLy3fdxRR573gj8u4BAnAt2LBvFSvj6QoZBzqq87HH2EX",
  "key25": "HypbTmAJxLGwA4z3tfiRUNgBaGg2t4qchm7zCUjz7LEsitbaPCWupH6R11Kzoo9Ntgyhu2YBtBRr8xrKYBW8z2c",
  "key26": "wH3Qyigko1hTkEPK6BGCkbFhmu1zU7dGS5cuMHF2pTS8bsjBGZkr86BEBsXXRZHLJ6KGsUJSqxHeJUM9s2JWGNz",
  "key27": "2X3EHaRxR97AkGEzi2LJtQ6eCV4LZWYmKaUHtiiZPcJ29he87Xs6WYEwjFYP7S9edQtL3cPFGoM5FZ4RaZtVEYJz",
  "key28": "4HD8WizqMdMyWYtSGiQknZ42JmXGhZLS6tCEx9RyQsuYDBGZgTsRtBm1LSYxVwu5kemjKV64L1GHSsjmKos3GtCS",
  "key29": "3fyezinFBk63w9nrdodjASbPwrHmmDRtNjZ1MccJhSQ7Dxvh6Asyr2nyXHwFWJLYSx4hSTpjV7CGayRKPYuBpWd9",
  "key30": "2LfmUwuz6bEtguABE5XpfVahK77ry4UpMJb1zfbfbRwthop5WV15TJVYxgy6EWi2vdr698XV8c4pEaiM7GoEejma",
  "key31": "2Sg8K3u3ihnruUbzuTqd5BfstB7eXboK9rwz4ahkA22DBbage3cgehaNEVfV4ZQhFrgFDm2tceMbmFX8H6QXrdWg",
  "key32": "3oXSf5fEzAu6GMuAoXsFbb7PvLYtHYnSzi2swJRziFwNEMtCbHha5pTpkdm78mdwrsJxot95aELqGqFCkxQaCTFh",
  "key33": "57iwfuSfjAxjb25hz4nLJEmhQt1mfTbv8CCFsP2yVQSZcok58WCDs55beKVcyqp7XHaUjrguDGzDCu5F6GYFikeC",
  "key34": "MqPNZB5qBZkskJvGvTv38Yubc1A86Ne3A8gWeMVnUCoEnnN4cgdAJLTBSvzMtTZcKsyv2fMGPvQ1Le1x82UJgc3",
  "key35": "5pXgDNxmHdjbc2QJoL8Hv7erad3huwRmCD2NC17Z4RHRdW2kgojHUxcMs8JJUksYaD327T8rG8MdB43ft8YcZta2"
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
