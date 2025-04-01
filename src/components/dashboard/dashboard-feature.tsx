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
    "58mYq5Gn4aVckz311EmFFgu12DETckfS1AUn8bPmvEcDgi2MaNMHpnrLpun6dQFUgtUeUMdDja9N6mmjFsJTNtTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M7GyAxRTbkUEmt245DNaV2u3TPrmE2TM77nfsRuECG6N5WJcQY7q13gXjR7DFkaWws222nE6yvUVZSNt1RNUuDk",
  "key1": "3kJL55UCnm74nL2Quwcc6RG2UcNuqoZfYmVYWrNHL6pjq8U4GFbGyWKdbWUMNohPJZ1t4Xq5HLmRvtktBgbLeS87",
  "key2": "2v2sZupfNBzHx1Xsh2WPNXGu4ngQo9nJ5fMEmSXMVd4KUKxgePr2R1C5UkA9yBAE3k9ecycKtzHUxjWmaJbhpdJa",
  "key3": "5oZxgN2AS6AosGpU1Ez8ZHLYWyKe5WrGdFaRan2sEbEaXr6uMmRXcmuGMAfCe3b5Fgp1ZorYnuXXgfNRqv5fqy7Z",
  "key4": "3koZrmgCvFqcDHqUZ3LohURZfB7V1HDNrqxoD6ZUqKetHcanQ7fn1Jg54SNASqRruJDeGBwfLL4ATGdXNKYrdQA3",
  "key5": "gwB3unAAahfKCKTgkteXEZJFGZTumR2beh515mVhaHt9izpwy7RbP7cXuRhUPP8fAyao1KpvpsVKcAKzekSURLC",
  "key6": "21vwoVMvcpzuZnQ8gAbJWu2m1zUcQidC6yRPKtwhrYCxonaPKEEoaBPA1FGNNzMiNetAwHdcQGygDJHDY6ChgvF2",
  "key7": "4Xnm4y4Dj6SfTvxNfFpa7WxvSfVC1neVA8StczhfunfPZhh3Mr4bHNAoXC1cp4581hZyZMYFjjNjvfQR7QkxgDir",
  "key8": "21WNpQwiyJKQoSXEe5jFRZDtkXABwY7Rk2YecxufmrpERowQy8UycnJ4jtHgVgb35wLcAEQVNzZ6E86jjTzNfa98",
  "key9": "4o73ZaySSTaPg4dzToi5fbpTWGqpmZezD9P8tSAs9NPrkfnJWRiPMV1WKS1EiVeHxGZTtmqATVTVpDodsBY7KAK9",
  "key10": "Xoeev3t2YkXLaGiNjXKGz9P5adppmQRoa7JRXinBrysVm3z9G5bqAh38MCPrWRtZMo6cMXcMFDN3CPt2qf4NS4B",
  "key11": "iyGyHsCNNoEwQEGvdK54qrKp5Q4wUb7ceHPMJuUXFvRmr1WDoezVHUQDUTfWJCZB4hc4c2srjjd6sW5Bon4efzU",
  "key12": "4JvVTZwuskUEfKuDqdxyWpibS2D9xgT9QJf7xDKDrm9brrziTSsds5g9ThkqnBAtqCD11GJK6BJ17wZiAb84DZ6V",
  "key13": "3itMFM9zVn6CocPzGXmy9XseeXPhsTexxhQAXVtjDN7oKEVUd89xF1GjjVVTHoiBaNdwydHVNxtFpQKexHLqkdG2",
  "key14": "3VCmaYSmg7iW7X4DX92KmDborqiMKGpHmBp7FsRuACmGUv5EdC3B5sZtinHiFiwdt6r3jrEEk1xhUZb7EFjnBLVd",
  "key15": "541uToSvGS8sRKSaYovAvjDegGGsudmqtNyRbet9UwGqXTKoBwHK7PqcWBaLa1J9XtJXWBYWGd4GGiqMVmvJfbe",
  "key16": "4XXHV6DxQvaPxzGrDdD7Xke8iYToteZbUV27hJwY2rU6HBxhGNbKT6QAPVEFLzoWFxoTY7mtKyu66BdHmzGzaEAX",
  "key17": "4YPzx5Yr1kgp19QQTiHaDNodHmg12YDtxdhPKpA6kxZ3fuSYjZw3S7YMQYF5q47P3RwTz7HyZxEsjouFfWnj2qe9",
  "key18": "4oDZKwwavKsJUB3VCNVH5oZCnUcRbc3RVbZnd74whNRQofSWy1m6R2hRhmGHCBY9EZyzqSkjMJbsauHf3R4F1TYM",
  "key19": "2dGZihUSHjWVm63xArKhLBxkNfDWHheg7mpScqXz9EehDN32Ud5nqimMiQWskHJw8SzBKdKCTwyjDjdKeakGydeP",
  "key20": "62FLTxGmsSHzeMHoNDrvXkrxZnWhSLckD6hWSAkAteGj11Us626tCnJCipES8wkCfsq1m7hDVikvqGnd31vMwaLZ",
  "key21": "419pyRRfh5cY59K5w6jzRds3FxCDYHvztZHW4G5pDBLXWsDKhtfFNRzJVEMsg1B7LKWfbX5q7TUHvLoTYhpZN2Nb",
  "key22": "3wP9LgZKJvREJWyVkMhaG4gBzSgef1nqa6F2qYBgdRFkHX5Mn9yFie6MwRvhvtoJVxqAdr47iMkA2EbnzUcRWRXF",
  "key23": "4pYvgLCeSt9Vg7aaB6cHw5E5mLzhxt9iZUkAmsgjhyZbc7Ro1CYczMxrcBdBwHygo1aXjXhqctNxdkTh4QBnzZPt",
  "key24": "3s2TC7UVbwSczkDzf4CW1qmP7yiJeQXN6TP6Lya5P3j8d6K4GXGGCoAsHeaxw4f2smR4AKQJ3CzdV6zdtDmZ4VGE",
  "key25": "uapBQLfQZtxZAodewX5G8kVozUeXsGVf6Dcb2nzym7JrgRx8g646rVvBsZfNa1N97Xt6SEyks3GPh528kc3RExi",
  "key26": "5QpHRdY3eFfHX4TfYrTfKrB7sFZfmCYZPoNqFs9FCzJbhprJVmfWeAi1RSk7mHi89V9zRRkAMJmvZh2imHgiPNRz",
  "key27": "5ERnSoyE79dBG1y21SUrxRYvB9V6M8UN9JxKyw2SdTU2bFneYrUMcVF85MeQaZTF7EqiCfPoTDke6WdANCQGyEBD",
  "key28": "2D95cx8uZDGrdQbxDfNk2UJoamzh2CJTNSzqxhPyQQ4rJ6nfAF8QZaRh4X1Yystj68DhkzhdjguPZheDWRLFBKK8",
  "key29": "2DDtKxucCcqyk2a9gKvsJysKmGNztYE3r2KqR3emXxgoF4vswLi4fXGdxFqFXqE1p5PAG1FFM4sz4d5ytnqYRmmq"
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
