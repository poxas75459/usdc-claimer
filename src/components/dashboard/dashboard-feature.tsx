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
    "29AyQH8By85i6vufiYyLcg5Fvf89DvrYHijKDHaVfsf5GbsLVUFX7vhSbyfjTkNjyToHE1xBmbcrHusNdhEbq1Bq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3us2tgP9fzyeC6ZQRk2oqjpJAJQmMko2sQ2j6ZJZEz9kSFaTN2zxASuGirURrzPRF1Xp3wrGJK5YQ2XPpNaDmotn",
  "key1": "ndRV4yXM3F6t1HM5chTMVwGuQdqTDwKWn1Gu4rSzY7CTJzs2ZYHdP7qzMXwihCoALfj5UH8mJjrG82me4YmuYqr",
  "key2": "4Tyy3zcbHhs8DAQ4Jzzyu9mRJM5hehEtf7ohFbAHcQ8mPTrqXeZ4Yeaded141emNpm41GsBV9GaAfoqhPb9AkVVD",
  "key3": "3Bvy28ai1yPR6rwnvQd3eL3eCB8YKm9ZZNKCj45N2Bf7Dda15iMp7whXeuvU8tMNTWSpSZ1cSg7P2FuTpgkbQ2RP",
  "key4": "VnQ1HKtTwsUtbuuRoXSJymxephtnW16DtgpCzCwRQViN5kmk8pZ22YNsZdvq3TAbAHj14rW7UpaEPjiqAjhPxDY",
  "key5": "3SfHtgkG7MH259AbZKuqdn3a4meDeK7HoKiyG541XV7HYCNmx1uPrr89BXHA6St1G1pUkueG86HgxKDxQGpxFU86",
  "key6": "434KMJzTmnjarmKx7kqcUTgRDjMjyxq3ZjBsPqLVo8hAdZbej7xPt3rQxa32wSemyx6ohTNuCrCdHCC4sXnduTr2",
  "key7": "63NgcqPpUqsxA561FA3dsF5K4CuWP89BnNBnDKM1qaGu5o8wKcxcDBeztLzmpF1aFcS3JggXZTwzq54qfTDH543X",
  "key8": "5eYj9hG3JWqAzuV5wE7rwWcKUh9WhJFeEpbSkr1RW8vAQHpuyJ8vxgdH7b2NfKmcw48zEKQ4UAJkUmZv9FYCcKXN",
  "key9": "65jrdF2ZWGGhcwrkZkaWjbU3sjzGvayJYgTwEv1csydEEhPkts1zQswC1Qo6RAfhBTEfHPKqp7SX4rjxqTeDZmnm",
  "key10": "2MtPpLAv7ZTCg8WmfpizYRR7anDndxBUcCVhUvyGtWyz72Kf45q2AU8g3Zisc4F3S9AC3bpFFR8hNVwoUPryRhmf",
  "key11": "3gVNGVQakYMwPY99TQMmF3udKnRmZcnaeJqQkfU2yujgnCM1pfRXyVjYiv5Z2Z9kjuGPy2LiEHRyDTfFKF4AB9gE",
  "key12": "52Axrtd5hGp5XP5sVC8BgdS8FrjHod1HdakoSEYsQkJcpFcfeR2WeDeskAq26aU4qnYrt5vmWQ9e9UiRCLxvdieH",
  "key13": "3bmntP27z99g73rCy49oVoszv7PwCnXHzUEqhhyUqYmF8UgMJWKKPATEiTrJuYxKap8UH3uu8QxZSHehiUfh8Qzg",
  "key14": "2CdkNaR1YF5PPSEchTXSHvar3WQebTq9nj42WPh7P8TEmbbbNSoYjdPZU7HmMT7oWKPTTb6ufKYTTJN8PXbkpdps",
  "key15": "5QdUVXfSAwGPQXE56eibVruSb4AiPyZsiocqmDBF4d2z1T1aavfwe8SJ8mzna7xFyqiEAJH14AMrk79PSxdiecwe",
  "key16": "4z7UfDemtzSb7AKs5XpkfkbyRPtARULo7vEBk15TcN1RFMnmYHff9b37f5TPizigE7GGDgTTaRtHbtNk8VJKWa3q",
  "key17": "2H7BcyfeCLN7udxqUXxCmJ4thSwmWuZuWKdf6dZ2JKyTjKJdvjWMdE8N16cAoSSchAK7hYRZkno5dj9ATrahgvJE",
  "key18": "2gwUFQR4vBcsvCgSVTcyA4epwApuqVhCt7cd8PggijufbG2x1cLcExQEgU8jX6RyzEg9ZWjNEwM6tTgZMwC4fr2M",
  "key19": "4mWi1YN5ixUnNdWUsBx6QwKJtmYatgPPrAW3mnrbRsQ596THtnqMCBRyH79HyxoRY2EV397UzxkNo16CJXycWFnG",
  "key20": "2zbaNbFUxgr96wLnHw4kVysRBiK1J3SMDDsKzWp1zxwbXCY74CC8dYQRyfwc2EdWH1qV6zFs7GZnwtFK6Lx5ZHAX",
  "key21": "2NmDejWRg9xo9wbGRwkgdk7RswX42zMWH1a1u7wsXN3i1uUfE9mg2gGyT5cpovgttWc3a2VAN5fQZE7MwYABJ75H",
  "key22": "4m9TVyk5mopbsVSVgc4m8N9Lr5n2pVgBDZMBVPFeY6rvUdByGn8gJH4hvUs7mNVHA7vvEk5LGFYCY1sHzGvR9xqj",
  "key23": "5JHe5ZfLcg5rz48JHweYvmTf3TkWoU5RCDRrY6Syk9BKBQBq5a14PhHX6416oyhEsM2rTw91zhcNrBx3W8kuMg94",
  "key24": "3fQDTBg9xrHRE5AdMwKtuSz49SenvJ9qY8BC6fuLW2GqkmXJGRPrdnSvnHXSKQhWZVfxnBpSkxyWzwmeH3nV1Hkc",
  "key25": "5y6TatGGABQKkdSChPfsZZy98J6ypzCocMVdRLEkkHSNJA2eQSCysbZ8z7zNpNzLsmD9Fe9SZwkWfaN6p1ZKavFk",
  "key26": "3kt63432Nhyk4tt2jENVQyGr67QpB4yEKp3mZfs77HiGMKvh7ghjZvosgCvnKnUbH1jM87ft5U9tG3SgSPq5LBKG",
  "key27": "zHgFVNdNS2hC7gLviUey1aQ1TSrb8P8JQw2ZM9JT12XF13NKsUmR2W7Nzas1cgwY8oZfJompuZf3YTw2DtMHBkc",
  "key28": "4QoPcAMoEgxWvUH6jTvVyGaUPdoodeCrHSfioNGbg9oUYCBz8qySpDsg9kLSLH931Ffvrf6YnLAHsR3SjHNHuHby",
  "key29": "uuFbt7XWrRBGLJztjNC7uVzy2t4h2HLjBKDtKKZLHXDrJsB36MSfyqmCBbFxrfScKjHZmRW3hUDQZrEfhEyxmTz",
  "key30": "3geegqxZmewo1GDugiFffg3CDgMDkArnZRpJzPMgLNdn8beQySWABKvdYYSGnhfDhDW7twxLjEDu6Yfisbf65Ayj",
  "key31": "jgKxjbunFazcjtDKu7c1MFamR39VPHYzRfnXxFaNgSanB2UDtmDeimnkuU9rKrtwRgWxUnhuZmerFoJCqa7ZtuB",
  "key32": "2uaVPdB6sVzvFip9S7kWZwJmBVoSbcPxtUAx1LQj9fpPbN17bG6AYE7T5Q3UaFgwudpGVJYoqF34e2fdi8tLVnxK"
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
