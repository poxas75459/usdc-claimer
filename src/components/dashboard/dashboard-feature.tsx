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
    "24f1KrPjnmWydr4mkLqhcFKHqFMRuZx4jHyF9SZGj27SG7bzuqWD98MTxW2D4hSa3s18JjHLnhiMydLYpeBL1xaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fP3xPgNYiPieAvcGCmuoDzef1y79R7yPFocKZYSsuhfZy4FxASK6mkujsuz6LYZqK2LGKNWzhbhXVmf5F8wqEDe",
  "key1": "4mxQFcu8c1Foj9Jg5xEksYUowjNuiy3SKQu3nLjuMeQrFYehWSfNv3mutcf3mgHNu7YWDacUdwHty9dKBHYTqL5M",
  "key2": "2R2LpND2Qhe5kP1WvZ3wDfs1Lus9ZT38FDU49Br8w1GG9vEw9md4ApSvxG4RztqG84jCXjBHFkbGjmzcM4rmjQYJ",
  "key3": "3sjgRUY9xEsLJSMMibXQGWnaEaTUjWNvR6hnR8isv4ECX8U3cSnft8cMpGJBXUyu3NrEx8J4uafXoffMtGHT4MV4",
  "key4": "4VHWHC9oauHjVmZEDcLHy92cE6xiemADuRscS1GeWoxGr7nXn23pHNMrL8gaxED5t9BKo63nmAZS9pXPBRRPT4r6",
  "key5": "2oDj25scW6nAASR3wji6s1DKRapbNNLdhe1LBEsPdb6TS7uB6eGhS1RDctZW1TYUPg37HKmcwpeqnWeaGpGdNgax",
  "key6": "NKiA6Xk9GJD5JrFoTwmrG8q68DR5WuBHYXNCvkaHaJKZ9uz6c5CmDUzuEuYvzn96VVzUcFP4kZrvWV2BxvvkqZq",
  "key7": "56hc7yafCAEezFxcRzvT9ctYUTLnCRpxoe1V8jdzF43hs4AKaThUjn3wfzpFvk8HigA4f9HmNQskfgw645BpsTAG",
  "key8": "3fsUvsDAZgqFrxnLx6Z2EincU9vKmZJNRzhjdf7ghp117n8Qtg2tShjXmiw3g1stWzk3iD67WYvewdsrynz2FmGx",
  "key9": "5vCgKqTkRufYnE6tK16mMQwU4BQzchm7T2w8Hq3g2zZUfwidxH5JCcHGFvTnk5yMTYSqDQT9cRhUXy1JwKHvTGo1",
  "key10": "49feRhjRZLiVzjZr4g8eUzCC1YNtzx8jgjhAqfFppGbH7tk6sMbqniJHVkSfzmj1Ud3ke96J2vdun5yt7fnhs4Ut",
  "key11": "31suxbcoxmCYjktNvJspaeA8iT7xJu93qvEFvFEJwmH3sg8crtH4pK488vbjBrbcS9TFTYqMh3eqshYybXxTXg61",
  "key12": "J66ebUm8p1qLUCLzZJfes7tJhtQ3tXACuEoVDxaqy7f2icTEBXszdMLEV9SLxzMUwVUfPgb4YXqv86uXALrVbhf",
  "key13": "esX5bTgD1c15G7K4d2DAUSstcy6UoXtDarYAEK32sSJtFo6SfeEpfn5cfUMczmBN5L33SRz5Y3Mun57N4marf98",
  "key14": "2ZjSpSF4fNsuk9CJ86eiYPZRFNvcm9eufbKewkAjf5pzZViWGYhNQ37qqq1rAvmuTp5xftgtmBDqVB4ky98FQavT",
  "key15": "4c1RNcfLQLMoTSXM6DE1zoHum4i3VCXFMUdtpYHhpfs12BujB8XadnAFgSVKRkH2ZUAaTNLJdiGU3ac36zx9ugdD",
  "key16": "ZD5GkgCroYGJdkzroWKzhhGyY6429EXe35YivvzLmew3Eq8kQf8F9tTVuKaWGYqidb9Svas9PcgooS2BDnpgwAJ",
  "key17": "bkYQXaW4XaE71XAz1KB7MNbVAS7TdP1Df9E6BD1KYnq8HTb7mPqaPygs9YR3TQtfnKFLsNQjqQSqz8mTdX3nh7P",
  "key18": "KYDYJT5zBpn7RKnC6XsEgoEdwrpcTgj8cQ27EtWQBpQR7Ku4amZdPfJrFHNr6AuSPfuD6dBtkz5rVibxj46pBaV",
  "key19": "3o4KC5mPX2k2ZnwKf1Mj7YPwcjFJi1t7WNCbH66hVzRDxt7VWSZpbX3Kd1ty58BDc6jWNc8vV5J1hJv3wNBvXcGk",
  "key20": "5VPp5fSTT5czFRx45hLSQvvAxk9xhBH3Zed1bKmBvXBKfdmhmamtQQHrjDnfrW7QwnktGQpwVz2ThQFABp8BYw5E",
  "key21": "2JDrwEHodWcsR8WBc9vJWMLJKtEfCgejK45VSN4wTRvEyP1QWkCS4Vy3GDXMGQPmjcGEXhQDnuYrw5GQirBfeJxr",
  "key22": "C9cYAVaRR1ak9jt4B47KS3RVuNgr1N2UcEHvEEnnvYovvRvLMBSD2MvPvhTcQhh9ALsadFMXewvvZYdJSPeVz2B",
  "key23": "NB4qNhgcWeoXdjKV9a39az7oKf4HaCE4TyBNqzNXexWo3Zw59Diy4Wa7h9JcHwWRS9ukT2bhDYCidiDqWgyQD9v",
  "key24": "5tVb8goMZ8zU9VVQHDTC7LWMKjhM9m3VRNMtHWnNUvdz1qwtmYboPXfqryGmWrxa3VqNdYosQZumMoFPMuPs17zo",
  "key25": "KQ5358dXRoxy7CRtWsrbuj4sebFDbkP1atu6UF7NCCt4gpFYadjFijQ3jfbUgTaxD4LB7VcAf1w4YKxqht5HWz2",
  "key26": "47ZbUHx9wPQUSJi4JjXuFUenSeAYkyBrzdtdH5DXVwWmNv7wCpGpHrQgcGTHcMNM7QLo64vVNVm2YinMoYHkrk9W",
  "key27": "5KnG1ywKHq9jaBke6Jy6nYz9jpBLu7pRPnLf5SBqxo4sqcXMiWke1kB9WiAwY3Weqabwcera8W2oM1z9ZitoiPpq",
  "key28": "4tPS7Zv5AoxpuLt7tgfo7K9MsZBWksJUS91GUed2t3fi84GXTvXjCz8Qbz2pDEhxNhBgaQ21d7TcuLvkhbxRzreT",
  "key29": "2dqQSQiARvA43x35gbHjtwSFkRJvVR9fW3ZWFFuheW5JBfr9aiDB95z6CTVX1P6JDeFhz7W5FYT5oKhne5c7cdZz",
  "key30": "mwejwatTzVjjFaF2ES7K4oiwS3UKKCTDNKmdRztDjwSMU48TdrLY9Vew2NDRzv4MrD7RD6kjHnJuv2NXWB6szYJ"
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
