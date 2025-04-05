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
    "3riXtkcguenDVwKgcGunL1XJDPSh4qJjwRb36FUeoJrFtvFSBk9VGCENxokYc43xnEmRL9Mq6iL1MSUC2XarVyzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wMHRdMyiENbRmU3Bp2ioZHLfCtkXnmwdzSmBFMqih8wKD7H3AbLVhUL81m3dCx5NhEs9i4yx6J2JZ3ArwW92WmF",
  "key1": "3MqREDkGZV8KAsmmr4dWVyJsnaqbwwgjCwa6SrTy8HgFpDZsabifBQkqSvf13wRVVgpiC3osMvEu9ozK1Ts9gcXD",
  "key2": "5YdSkNy7za6YfcDgfMDDxoXXKRSrpBB5n9V5xubtti65UPfV9S3oLr93mSPA2kPVPjkdmmu3mvnDpcniyBKMpGcg",
  "key3": "2WhGH4SWntL52Ytbq9FnFtY2oQ1pXR3VLryBCRT696zptZasYFLucNrnQCPsx1fYwUTNCy8r1PBjpJKbF88DmMxF",
  "key4": "3mbfwsmokJD66m9ecBzUnoytfBheFbeXC1JqBwZ6fDF3jhTrYyAEwXZXpLBdPAs6nXAsX5SpPx3Nmwt36VtnqQWR",
  "key5": "3ddSx7eTZneK3cZ5eyNkfEQbnbymREUGvLMogsaUxUcJVDUVoFfF1dX4aoFYHuJtMwzP8uGskPvtMm3ytbQXXNF8",
  "key6": "2uGswpHBGqvURr4Zacoqn1NTsCA4ZKnwE7P8L6z4kJGRJe2nFziR4TMaE4qQhtprHzppxGQv5ESyr25hykEJAbrA",
  "key7": "2eDK7jztcSVPzNMmgrWXekGisqTHSAuz8tzLXkqdnpnUFWDhdzfoZzg9ZgW7cHyHE8nqsgWQ8WL2jEzN96chnaWu",
  "key8": "52MDQ5CUXYfjT9wr3sMSfLMpVCDqBxZaW7gXu9rGR4oT6SGcYqWY7K7VhaaWH9o66K2aY2TRQDq2PvWa1CFZZxiX",
  "key9": "3xN6L5sXbR7qFa7RSXiHK7uVUDPn19E8rpvt1yxbbxAACwagXpeTswm8oREaLVpZJrGRLd51hHRyM1DzQ25fJpWL",
  "key10": "2npaY7bWwzk9tHKhHf8DHEgmKXpCCaEFe2Ld6EiKzrdGi6KZ1Qbt1MxJVkLUgejdhV4zLSYmRuJjosyayog2EiSb",
  "key11": "mpTKu6ijofs5LvyeTcQMDuadCmFnbB7MaZWjhqX8FoW8Cr62zHV9KDtqnh5rBmXL7yA1sUBqX3FwzAhowzyUUH9",
  "key12": "5DULCwxLosFX1rKtW2JsjqjQYRYUDdAp1wPZzvENYeEnxisfr2WP15tKratyJkrcSLuEepgAsGf3JKYUEgKr5TfC",
  "key13": "5oPi4vt6Vr8pLTzn6kkXadxfDhCKJ6HZHSfEqfMHCzXXgEahxRJw72cJMrBWX48m63h8uAPonE76iremGv6nL5sh",
  "key14": "3rc6NXvTVBKapXeEjTXMiUieLN974Q9ZrCyfKcq9hLQUCd1sLesmstLkh1i6TQeVEJD8jC4HnT3SPHsG4saa4rdE",
  "key15": "3ipZeKkqR6LTbXsJcvDLtnv26BdDTbr5kuUFwahFuEU2gTgNUpWVSP8Y8HNHNLiRMLFuLnFgZdvrAYi5rNx1eRSE",
  "key16": "5ituktsuGW9DqoQZVJFtagAhoxqR2a3tuUxyvZrTdSTLrVvKZRDkmnhgxqg5GzXfe2GgRRso76k9m8XV1XKWfSyh",
  "key17": "2cSkYoX6JQucQCi5mEGRNwiXkQTwqKsvFHP1JfxYtRxqcsmvWzLkv6Nher6xkktr6ki1wx3BW2vPdaXHADD8FLEk",
  "key18": "3uD1y1YS4UPSS8rdScz88xJUfvU8AsFmcKjcK6eKDGi9du1efDAgJrmRLyDr7JwMHyDA315MyyHDuhp2KRA8d8B",
  "key19": "5sWpeSWzXKVG4dMbAoi2N21ed7bv56Wfqx9UGcjCbe2MZ6km2dLsZ5GSpbPPDSTeo2R4yey7SgBTbbP4pNBU4wc2",
  "key20": "5Exm1vuo6kmHgiWfGKCSN5j8ZLQUN5yN3Qzd9vQ3qAYFARfCDrBSC74G8xpTnH6St9ryUxpoLo9mwUQFxZyG54Bu",
  "key21": "H4QHe2yxUsVueQueyV9yveTAELXkq6f6aabYmYnuNKFgToavynToAZsUY6T7vLmR9LT2qUXSFfRcKi4v6nVjYAe",
  "key22": "5Jzygeo1ncxXRXdAwbDMYbS1pwzosN5KdG2qSpkFmnYJKaec2XsA926B5N6q4gaBipvgA7RieGu5ZmoYmMR6NYLM",
  "key23": "2csZXeHG8UpHUySeafoTbxChvRmgcyPTpLX6nwFWKWkKpUZCQp1NYNYM9NTvBj9obXY644Bx1vpuHzxNsHKJRoyT",
  "key24": "4RE4xA8kNfjJwkife6oYKsjc32QxnMvrRaEQRD38Ta6VfFmDDx89qibmmVf9kkNAGNmoUMAWkmkVD3UKd6ZCFDKW",
  "key25": "4qYx3ySdQrYZBBBbktnHJtzi678NcWNczWM2VJVnC3C3pMPiopfhkdmb1W3ekmn1h6vSYkdiKB3fuRdBs952FHLG",
  "key26": "2uDJSQd9Bsj9gkF4GUHSiJFJTTfhuvvSmcxv4mxsQGCtUAKboNRDxgNYx9Anbey3kgoiefEzQKAsX4qM5BVxGPWe",
  "key27": "3hVmwt6kK5iQhtvJ2AVu9u9ZBGe1MAqPyAfKcZgnDCdsNSgDoBRGHSRqGpTVS6A38AwAumWNzPSPR1PBf6xTutff",
  "key28": "KDSMeAWoo1HUD3a6TtFkunPEpgK4HARZuRcHVAwaWHqskvPh9QnXMfVRuYGhHac9j89cutbLaAauYou9QqEA8bd",
  "key29": "2MTpoFwt16LT8LfL5LDb3dYATw2gdaFqY1HxZ8CbhSqYKV17goL2iqe4T6UucbDsB7AAzkirPMzcgxJ71cgZfHco",
  "key30": "5ZL5pjnWRTVDUBFaQ8vyRBMmPtJpjApHCrpyunqdj57AEeQhTejRWwoRsa3FZWYwBzRjyfV1tdfxwwxMwdZWGtLw",
  "key31": "75hr8xXMPjGiitKYgM6hUhcRKY1hLi3Rajx2pTW8QAGN4WctVeTXJXXdFY2XCg5d81X7ZnL3FvYcmur61d2XNEN",
  "key32": "3U9zmyBydUmEY8cbECgf5iua7BrKBCdAGmoq8PB8Gx4X9ReFYF4X8mV8mhgMgjidYG8xZVuhisQNKdC3bdswEEwB",
  "key33": "2iL2KdSoRQ4Cqj7Z6ZMNHuLgzme3Ds4cKVeQXnBzkEraDF1JWqawV9Xxpfu7NCNqL3VNq8PhzbYBYNswmaMQZmxF",
  "key34": "2Vy8JKaAe8SMDEpXZZYgtWRT81rrQQnpiQ4bdjLdjok7jgaELp8NHxEqEPUcjno7EZAkR3mKJeUZ2Ze9EwhmyJsw"
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
