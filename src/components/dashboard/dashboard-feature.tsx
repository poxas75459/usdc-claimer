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
    "3Y3PeRrpNGceNHR21tMVtQbQofcYFp9qRNE4hTbTRN1dUCzVyAXezbzHDdDtjJxTf8Tge1WLZuv5GW1Byz7n7SJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sL3V7kX3cuXNrHk7f8j1kSUtajjuPwDhRt2MZWW24Vj5CmN1cN8yQiUXcCYULuHYD3ZF5nf1hpDJyAgn6j2pjjr",
  "key1": "fevFZWU5cfMtfMBLf8PhzPpPvdx79NmWxQZhUnEMRm2iHa25m6wCprTAsapSCPfEzhpkZQauxJwq6ygZEnFMWp8",
  "key2": "2gJ1MJmLnYxUoWtfE7vhdRFwma4CeQJuVdWiybjBd8ijRUqQbdGdzgE6R5C1Q2d2gsyVe3ajpstBAeBRx8WYBes9",
  "key3": "2WDqvzvYdmXuvtgHmirVQ3B3vpm6v4aivVM9cDvyyRtVrNaQ9mZpaUhuzYqUJyVW81JM361fkXakYeKee9Xcb3bU",
  "key4": "326ro7WKAMNu2ZU2n3eKoLiJCn46aQhLa1HWRxnsXZhwkoWAmXTmHbUYzib2iUCDDe5tzSnoqAKnFPz6s2rjMSwx",
  "key5": "5MtthmpSpDUruHQ6CsQs1e7M3cGph8rMtS6ZDG8mjn3iAK1arGZi64XYmEsA1Ty8wSD666W3UMEqQ288g7w6iiGE",
  "key6": "38NhTcyzUpYDuqVVHtVD3ecM3u3hUNgkKGCg8sASw5VXy3FusoRyCbYjgJrBwiqV2ymnFRRmPhUpfmGahXVY85jA",
  "key7": "5CPgCVwE6nyphycGyjbdduVG7Ynxsd1BNv8LJu1HmKJtX6mcLEqucG2xTrfFY7QnthRRwLT5hFjuzHfi9pxxsgtG",
  "key8": "MjxF2BhqarYWoU2wc52znpo4GKAmArJwUU6gui2keDPQv2Y62HZmVuoc2AFpVHJpL65kCsFwy7gV3M2etsNe6TW",
  "key9": "2gx1onftEqPq4toHYtPgeGadAb9NjoadjvH7puwhiAUTS9jq4mDUn6Rse6kGtBVwoHSkSV2UfNMsD2sDCzfg1CRT",
  "key10": "Egk7ip9e5aarYmwrLwvv2Aeo4jYqcc9dxpa8c4BpdaA5dB7jqPCAzvFQr2wP5MW4zMaDFMucs9mZ3otZDVkmxrY",
  "key11": "3TAhbDASSmHZYYsHzPu1E24vNqt9hpkxNGsPVQP2wR1pdGjB3sRJosRgVVDYk2vRURDu3xidXrKZCUWfB1Gj1uN7",
  "key12": "2RUnpFH4qQfrKjHCNJWJNkFFeaxACqA4rq6wnucJpLn5gYx1rvXtaKbu2wd2qF1Ui3wGyuaeJVfph8vTECM7UakL",
  "key13": "4mUSvCrZhzhX291LqYv1vAvP4AC3JYWZGd1YDgHBSUhS3GGMit6231skCNBQXfgaDqVoeKsK6dUbEXFX42mLGx6a",
  "key14": "2Vg2qQXN7M37SVUEvndgp1tBGiqbavhtxzqq2P2K7L17RU2raackrB3NyGKwcxBNa5ehAsFK4o5jWbfdjSvFwnMZ",
  "key15": "uxG4kqEDAeZzbNcitFsQsAmG2bxtzhr4EE6DXrBrufAtguUHF2Y4ttZwsi3SYpBV8FLA2r6M5siTQ5aAGWL9MR9",
  "key16": "2zEus7MTMV4t85CuCYZ6d4WjGpsDpX9cdQfmG22VndpZWd3GwohrLT9k8PNME2to257s2fqGpPRm5SziN22Abomp",
  "key17": "2qSrwXrWFto7haSmUVWx2p7cs6qxzBijsvkXq4VUg9x57Xpad9UbWS4c9wUXADKM54nbSReJzbtUKHtgDvxp1j5z",
  "key18": "4SDvsSFUfJTCRtXFTzcPh5ADjwt8pcadggoR1GaTw7XS2cQShmZPgcGXpYqNUMjAKaqd4qKSyDmcuvZmmGPHpJb5",
  "key19": "2HqQ9LkgNf8B82e3V8fWdKAupnecFjmKF5WYF6kkcZnK4ZNFytfHTaozR5GSmfri7YTPRkGYQizCy59WcW75uS7S",
  "key20": "5V36AyWyJXoa1LRuPcasP8FzZpf3Eu9Js3TRBLtJiZXWNfvddPQx8GbPny7yrAB9uzAeKTgbRQX35muk4ZFUdJjj",
  "key21": "4xNRdad77dGuaqaBQFQZBgT1zSspoZJroF36ihVRRCoS6kuJcQjcxERcYfR8sy6L9rBYgwst3vzLJeuGtfVzedQE",
  "key22": "2r59yQUfWA3PHNpQCUvZmTJedYd7sHu29nRcoD5PxV66JE2DGmuYoaiQCzj8sDAnQme3DySGa8esUbRGQMuD1Xsw",
  "key23": "5yLn4zSmAsGHCzTdLUH7Hkq48PaNeXnPy5NStnZynMRRJChgWd1SDddZqh2X2WkeDa7mK6Tzvod8GSLzE9V2cHpC",
  "key24": "3Mx22aE2CyADpgHfzVw9EwBpoZiuaKmi6gw5phfDBjspwAMGSx4h3fWe3f6dH2PMJ5iC7WN1CcLFRureGEZo2XNW",
  "key25": "4uRgVHXiroBwa1RwgKWyjbMVXYU5cG7WAc4Ec8Ft9ASrUc2SFU2CMCRnqEzPBKmF6EkoGfi7eDP39WTfX5Ds5jnf",
  "key26": "3a1CydvLqA7nbWcc9c2RkaTBZRjhJftcPSedspbC5Y9pHDGRshhGpSzhx8TopufQURG2X2kav3hFGXRw3Zrr9VyG",
  "key27": "UBw9uT5n4FTqcNrZjABxBmRQFPWBaLfApX1BVXPJySdnwvD4mxehtMxx79ciuBpDmaewq71SGh7XpmHLAZHjSu9",
  "key28": "59vSNd8EpAbtHioe5KEwdzgmVsB9DWLLdmsbRnBmatPT5HNxakMTq8Kqx5L5eEEbuFddHA4sJF4Pr8PtyFXHc7PS",
  "key29": "3wZZDH9hv58rtR2FTMV6BzzDStGB5zmdZxJDhCdngkERaxfBAsZyTKRKoomNsoXg9rA1XGxFnZmu353m2GKfe2pi",
  "key30": "4iZDwQDjK3mVdAVjiHVhW62fvFGQXotrAd1Mte7xoQij8oz3GnTmeWWf6kaddhea2nffZttzHRPd7c3Ux3zK3D9B",
  "key31": "23DaFiPfSw3How2HkVJyBL86kJe5oPA9SVdkJpxZAnu2QhxecEEE5RoLi5KZpan5hJ2bjdh1KVaLSFbrcUTb7TqC",
  "key32": "4kR1Gf68ZQtXAFczC54dSrhw1wn6QpWXsgJkaZeYqvUAsb7L9hoVV9HbigsfdeZ6vjSghxvsHANYB8KtRbJaV3xb",
  "key33": "2XezWCZC8ftkgA3ZAPu129T8iHcmNnbfNaPFr1ARnwPE5weTV2mQquBmEaimkoTSAsNM8WvtRei7pmFqkL3Y8kb2",
  "key34": "3AeheSHx56w8b2xVa7isVg7HuWgcuNok9XgXbcv8EZ6a5qJEVzC1tP15gWQHtvMy6KrqEtaXt4ddSbwuYBv2Uhf1"
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
