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
    "5Jj2ddenyekFd4MRkziFHPh5yApKhwuRAKY2D5Yg7EmCTwSChRbiSoqW6SKFJet8dWAj57ZBykwLpwupdRncyk41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U6hkYj1jio1KZwXKFu3QxhqdiSQ4EHMsnsuuDaiimLD6ze8mHSUXCDWkBBMTv8N5ywLAx1sYJFnUBFGL5ef8Zd2",
  "key1": "56qfvv2Da8QN1SUC29Y83taGUE1sRwkt82VWWNMkXsiVQYuSAsbAnWYQYbvooM2gjbrR9jHxcyTckPUbcMweHzqV",
  "key2": "5991zwJLnKM6Sgtue6MqA9f6RQpP3nHBgJAbVXf4DvDgBUvad3JWbNuc396NLtGA2WQB5RixwY5FujWvKg6WcJPV",
  "key3": "igTfuHiqiMWbguhUwVh2SoNM6fbptr5T9xME1N5FE4jJk2bgnnKhGeE2XfhCKBiBMPTGijhvPvy3M6o7fm6AHFC",
  "key4": "56RNBVjT99bMn8BWLi9AfxAwmybL9BgzUonGP6tmFkL2SeHfTpkG8BoxrusW5Yxj6sbTrxRghEBdMU6HjYfmrXey",
  "key5": "48ZkGdEfiNafsJPrBuh6Av7KX4eZXnfp6t3N6bnP4Bah4M9oJLFzniPL9ccSbmHokB7hngZ4Xg9gXUQyVQrxu4vE",
  "key6": "3CoT5Sc6tKUMVHjxEFXZtoWGT1hcSFtswic1SRr8vnbKrwpL5aEi3GZpZgH5WTivnHw9xbNkgCJg5HxGt4TzGzu6",
  "key7": "27LP4rLrH1vBbucffiS7e4Nnbxur6CEtoXqQkmnEC95af2xsVcMiHs1ibpkzsusfgFjUf7xBW2RVHAtoeJyF4CKF",
  "key8": "muJACH6imH6JM16XhSggnoFdDBq3hsV9gWLGJWA6hxW2jbxqE94RB6pjTSgvHkoEADE3bzcjiWbfD53H2m1Kf9s",
  "key9": "39k5VNQyYT5wDs6hLTs4svzeva8WDkxTA3aBfiakPKRmR3GcmehiPfkWry8MQSVg9AteSePzTEf7ZF2sKtHNsFue",
  "key10": "4MsFq41YfuVzvQ5J6vg9dhFynnqJo1uCZgJSomZrxGzRzx8YEopqkNrLegWMz4fXsnkXoopwChKCPm7SPjXzCyAp",
  "key11": "5kCkwFC3EGQKgQLkm2QLsKAYMm1PJGJj6t1zXXnAW2ChGRsuMEamDrZSzWNrgQ4WBzrCVqpGFDGnUGCZxAdgbZHg",
  "key12": "YtWJ9uWVijrnVKjmYj4YY6XXqqaaNnNy1AVoudatmhNNdsp3yeYK6JSdtv1zR2XiUjrxKm9WYgsuyc5djiwMS8T",
  "key13": "4vbYAWA6vrzKUnEousUSQtaGobRT5JPeZ6CrZZF5MFTtkVWZpbmKcWWVLqF2RRFtmBEwcBvHg3dpQyvdgyrWA4zS",
  "key14": "QBejyegXV4mVYafaoUH88EjirVfmfZP1t3jzEZn1Wa2W3KCUdiZFvmyaWApJXjcvAEF2NApkd5pXq8igCrAFmt7",
  "key15": "59uce41ccho4JcgRSKkwGzvTymoHE4KJ5o2wBStNqBWyAfg6EiyNfmbrVrZqJm9Kj7EzadUVfiDhu5XyajhfzPQy",
  "key16": "5v8QTyiSpjhebFyV9kb4Q4tru5CCi3BHUiy2vejGcj8rj2RPByURaweiNfCgJPfiRdQX4py5QW9jFP7dUbGAoWi8",
  "key17": "2frpAbypSXHjhY19WtKXj1qbZabnx3CDjb4vTuj3AD7WSpMezCVqbM55y89gACKZZF1wBv7uq3hZJhcFXL3dLCvk",
  "key18": "47mq5RFH8KSBtZ5hEvmeo7q4GyHaGjCsCJrQJhxwnfamUz52jqwbGxU7hFP3nMkdaqYJPN5nQF31W9vQhfrZmcnE",
  "key19": "2c3pB67qj7v4NzWS8et9SdJ96y7dmtdJ4gxm1RzVeCLoBudz9WfgVStPC2mMcSyvpwhyT6rS5fQtfndw27G5eFu6",
  "key20": "24mNmqM3ZX4sCuLR8g6E5s1FNpiokL5G42PKs4Tchf5hKdxAVyD2wepThym6cRXB14FKeHep8MkfbR6xYd3xew2F",
  "key21": "4wsiMUKLSJZsSLErj1FXk8CWZbhHwT292zJXmDuwHR1LKDkoqdMBu2EuCz24vj6wc8DNS6wSWcUMhpY1kUwciDNj",
  "key22": "ne36YFgdnF5dH2WuGaRXqgWVBV8kyquH8SuHzsnJpK9zdwhZyacvEW3HGmwbtTvtR3PhnXmnNwB1VTjSRqVc9Sv",
  "key23": "LJ9mb3HWo2UQCbrsrJq8RUrpJ4XmTRkDQJMiLv7KPYdojXCiR7Jz3hZqMqZ58Vo7pCHXXZE4ybF2iEJbms4fStS",
  "key24": "4fpr8BhgLfW5iaJ9JdppYeo8r8iJCAcrpoUQAUqxSY6pqjRHtTnwNdmkGWDoNdezjtn8mSHUjPUKrkaLp3JUYTXL",
  "key25": "5swpiGBphaf3LvZ1qd7z7x4idFv9WVamjvuNPBV7YTYb6FqEkxz6gFbzPBZ8ak8VSk1PvnBD6CAEuuw3ypBXhisy",
  "key26": "ArM2QFVwGgrVyRLYxJCPR8DvLP5jYxL8HJxBywCHQ5Ebgb128sTFWHqzm47aCPFSmLXzXmhJaoSHKwZTg4JrjYi",
  "key27": "5Se25gybNMQvpgLfVK9x7cb78kbCKzMMVZw1yb3zJ6NtajxTdihQg9wC8tqKJfPngYpZW1z5dXHsjZLqzmNuwsTV",
  "key28": "2s3NVVj1SJD1uAdYNWK4UGCENcWu1RgtZbjB8AYnVVfPkQLonMVBiuxrNe4CBnNMXn3p6dXnJLjVriwDGH241hbH",
  "key29": "LZY4XZM62PdRJxvAESwP1q3RuzeeFiDwDrkgHkRZXZSo6Z6RrNbxzA3NkQQVLpkefyfquWB4AxzdAnKCo5pq2ym",
  "key30": "CkCfxemDjTbYcpv2E1fgnQtsmE79xqKJxHewscwNA4SX4C2ShThscYQhTBhNSQzg8DxXpZJA4BwRVQwFmmtxabz",
  "key31": "4EGsCvzKyfZC2tz4mUJuQ4hJNBdTpgTUAdwQjWbCvpkme1QCTmem7jHtHE9pvGBrAQEHCHweqK9f7kZvAUvDL8CQ",
  "key32": "5qHCNzfSeBJifvZLqhqyaYEFSHQtnSHpns2fR76vWpQA9mMU6Qj6zLmgHrmnHKq5NNwzwom6GHocz9uof82oXPv6"
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
