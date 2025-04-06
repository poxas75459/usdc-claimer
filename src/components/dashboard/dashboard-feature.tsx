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
    "2XEugVHy4m9ccbn3spW7YUvBrnedeej1DGQcT3ZPHXw4adRpddi5LDJAppQtwUxeWGDxMZk3JSLKX2U9saJsXfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rkhQAwGV2HqFAFfQVDenCuGD6G3YbE7pES3ku6oDY7tGkYMvNXSSshHFQupDUaHnGeF3pHcRZLMvY7TwEQrH7jS",
  "key1": "2msBYU5iDx3qgx4r56FUVZYnU1oXwg139eVmuyvh1TBqtLDmSd4EfaYnoMRBKAdp5NVibhEBQg3UYDG2r5ysUg1V",
  "key2": "3QpjrfHnEGJJnNs5sKD67zT8zaLNMRup1y3Bdd5tVvvE2v1nanTiCpWWd7Z1Ny6rxcM4iaix64daAtjr4hLpUCUV",
  "key3": "3aboG2hHyP95CsZ8Kt3x4qBrJN4ZZzMa6EToJrg44N598yVwAC1UY5JvW9zMqgnepK6a8f51Rk1XnSC8e2Cfwbg4",
  "key4": "5N9FhvUNehPJqLgpajp761jDMSe8urLLt2p67Y5mR6o9ZEwW98q8eFsnKigyq3PU2vspN67dAdF5rnLAdE1jP4SR",
  "key5": "3SwXFuin7bVFkc7zhARuQiNo2m6XkARk3L8mhnsU6oFYLuzPNN9rsV2kJTEsVSdBzQdAovNqxC1qcgcbsYLx5yEh",
  "key6": "26yiAy6KhrV3Mdo63ezj2BKU9stikiq1qfVQLWxwJbKqpjAYckKg3PZ3B12czsvwZSwjEuN2N6KFTZLxqtAQWP9W",
  "key7": "2VuCvY46mC2GWYrr1ihyFZ3Upa3qg9K6qmAsPVtix6Xdeo5WVsjFZC12V1YXt5whoDVB8gNnu2pDwwmN5ve1UtFH",
  "key8": "2wpwXCn7GUGAuW4Y1Uerythvq9iG8Rk1TxvPiLd97DQS4L7bRiz4MWPxvPUicDgJyu9n4C26y62dhCHBcr2pJV3e",
  "key9": "2Gd6o18N9M5QvQHTRXii8EeNwp1bN9XFwJvm2ZA4QsHkvjifuvP2USvbVPPhnrdzPCpmeq17Y5xFXuKCdKrh45FV",
  "key10": "4BBrGhQi5tkoeA2YCVRspCfvZYKYqoKBGRqKqLaD8HtAgdPYoxEM95nNNxWapjQ2nTCTTxCvhcAfT8sJHX1Ly1wQ",
  "key11": "3GJi3VYYw2TvLzfMi1masBC74X5Es3ZiWpNiwY24Vs6eMivnaL4bxVYjt7fR4xCkHzshKPPmKayugWWaMRtpt8Q2",
  "key12": "48ZgwyXimr2GoJJ9CpP98skAniipDJ8pWdDmGx7kCHDCg32BnuokU1x1PUbeBdeDb2KcuCd8H8mdeG48wS2cYAV1",
  "key13": "3T9urunCZZtyrA2YgN1SPUXAk6vwV7J18aW5xDmYhdxU9AeUXVbzZUdxQQYhduJ3MmEtYgb2tVaWEDoSdgyqoR3Z",
  "key14": "qtbeETbj6jeuEj9qHjkASS7JNCFcYNkN83zYLjXNJgDe3oAEkbTcpZv8EqoSw8hpxHxyWoVX3dHen1LSdihDSb5",
  "key15": "4vYWpbE2Ny4dqApQxRcKcMpRG1HttZqJ6miTY7VspTDBaXZ8Y8MKB59DFcHYw1fBmKLsriEe4ENKcAFcC27Gs8NY",
  "key16": "3irQuyQfEWv84jzodmjfKqkHrcpLs86fTDsDKz3fzJcpBTDnp7ghnhtbqYGft24gp3QaPMe29kZWKxZ2CzNgQRsE",
  "key17": "244JMkhBMjuS7PUnH7vjS848waUXsrgPi5P1aWjd2ctUCyoyc84iEUv5MSHYo4KW9DCW4du4oUGwFrYdwCmGe5ZV",
  "key18": "3AjAhrhmkmuiwaweHDJjUNSm6wgwxUnsjrygCF67DUrUa8ErJXqrQEMKHJL7FVB8iR78b3xjLbESdancjsrFwSSB",
  "key19": "5oQ2pjjmXGYop6ZPVojo4AHo5SwrcBgJ36qqUy6GPGYdQBtkHhjB4EZzEN8gTPsUiYGzin9wrzu8uyZpLESwUX6V",
  "key20": "PPahRwWcfvq2ByhYJX1EZmaBWGF317AL24hvGZLJePWxnHPSkmsbrB4NG3Ew9wv9NqBHohgz66AazA2SsSLEq6K",
  "key21": "DGXfojgmdk16tqR8Ni5Y9t2tE5NKiHz3TkYfCzRKyq4bA5ecGyNdWkpxJ4p5oQvfetQRni9txHDP658byPxcurf",
  "key22": "5zs2ReDCDNKYBZkKVH3M9NUcjEmKiKzUZtivJqGn39iEGeAZvTWAtgF3zEZUhbQWeaRwS4JX4vp142rrpSiBQJum",
  "key23": "3RE6FTgxgbfZjtP2Ao3KViUWf6XNUVgjaF2MBgqJErmqD6zJ9YKKjQUTSxbNUnD9rdoPcudt7oM4HKsBXnyAZvGu",
  "key24": "2HGTrS147HKDN7zELQNBDJsGK1cxxeJEdFMrgMz2vT2dbMrXr4Lax4jEEyWgFvcY9J761qqzn7TyNdzWzzyZ8hiT",
  "key25": "5RrBwX7PGHz62KWEp5zFyFEuKyZpFXWUkVtkZdJApJKdTUhp1FQBdP43eGYXht3L9cXpPKxqUaD3AMqjsfvBkgis",
  "key26": "2rsYaNdaNYD8jWi1ZwmhjVfAv9xahuXgeoKkazjuzJwTGA4338XFyXpMJKfC9gx5wvz2EbCuQnn7NG2M8rLw4wK3",
  "key27": "4Qtz3fskyAspYJMqy4BtYjrsEcSqPBVYxtngWuzQCsHbjeAt6LApC6VvzjKqs9H4SPrztpWL6TGBpRYixrW94P71",
  "key28": "324j9YzpgpjzxW1fdQavBP62PKbVxAvYdirfrFM5rGQkX3Ej7tkRiH6ugeewH6tE3pphhNqz1XSTdQ7nDywibUaz",
  "key29": "2hCvmvjsDHrd75SvRrbTJidCRaXVDpUMq6bEXucseAZ9pAryTNmFKsssbZXcC9ohALxs1huvyLaNU4cNMbkf6DiU",
  "key30": "5do52JrdfMyALhWZHLKtFmyaDzbHwCRUcBfcD1VmQHTr3xe2G9m8B6U6EEvHXncpYqHrASz3kMZj6VmSKcGWqTx2",
  "key31": "5gw9FWJxyK6Y3ZssWBXcFEpQ9hZD4SrZNqFXuUig6WNZz7etBvFFAMjefh6TMu7AitBDztYoMsfwxqueCCRXMqzV",
  "key32": "5jiuqMwvjx9G115fHymRdmqEf5WivZwohW9EqsZ8vyLAze4JmL4FCDuYpMVDNWRncRg853ABxdRYL1c4RFCbaB57",
  "key33": "5tWFDQGrBVcNm6KHAKvnP3NxDWdNH8pbnUX8tDpEBe4hrB66LCXiGJPriUGaUkHtnhpyRmYfySoqhrcPjyB73XPM",
  "key34": "4zk1GGUQeab45BjHmPgTCwjVadrGQU9ThifX8ncJJ8caAek9rrXamBPCVqFnU6d2ctNyWwzgZeHBZqZDk5cw4ByE",
  "key35": "3UuFVLfgFSkmGdLqPSCEJ7Te5kc5QszHEQV5m9Jo4Jw3Dpo2TotSJj9nYNvpMg3xpBkfkw1yvJ7Fz653FgkMTgzQ",
  "key36": "4Khw4FHBEnVX3ebRaHcarmJUPcS1NrFrQFewdGfHsJTmB8WC4Vuo8ExfHdMU3Zwd84TJ9J4rSnPdVybTa3F3bh5F",
  "key37": "29XuA8W7cHnJ1sS5wWFAjsPQiAgiCi8GdWGMKHP6xDjpQLKRzE4D3keJDPRrReBcADAYprtFb9C1gY1ow311GvqM"
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
