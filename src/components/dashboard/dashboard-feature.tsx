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
    "5CUu5YUqvKBbtFAmsd9n914hrKy5kbvr4fnfziGubuuHELEftGh6DqR9zvfeYygwvU7u3cHpnTsjhxo3ynUcYseY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SDa9CW1bL97eoRoc2Z6eGAL8Wnt3hGQeQrfQEWdDamHhR1bVfgDehFvHHd8qqZC3GpMYXtapTPC84BCusJF8smy",
  "key1": "4gnrotrfGeGJHy3P694fKDS2mvrPgnEKxMjoQphdjF6Fdm4it72VmsaPwdSFpS5mup2Vuhjifz9JMuBu2iPPZh3Y",
  "key2": "2xfTQFqwLgQyNDHbAUc7uFbEmoBYayLNqprB8RiJWeq14sZ7az47dPYSLqQ4JjqKuTLXnYkcMUUKnGVbhLSLaTDh",
  "key3": "439oEJaJoZv1K4tY8xiBqeHtxRGnL66AfvysVAofK8yzYDXJTKMw6eeYUN5SAJUJrvisK2v2wqbULVf6bm8cd5Rq",
  "key4": "25ZvFyNxiDyjEF7UMEwDeFC9gq9RR3sSUtrEagW7MhU2yXmScDiZrX81h5hSSzckyTNtBU9Dx53pXagvNrjNyGMq",
  "key5": "5YXhTwFWZb4YZs7aX3h4urRVrgSbuQrEYfMH9V1yuefwdhwXrdpxJ83d9eBZzMEXx6NrdxeBGgVgc3QfTmJgJJUA",
  "key6": "iaRQg77FfRZPkrEYzvV1X4dEBri9ZyJB51HiGaTiCnZhzijYCzjbWgyoRRKssFJJbn2BYnRotFq2rdG1uxUPhhR",
  "key7": "5b2pUJJiyujKHBLWmiRXLUJk6pKkdAnDEAzqw7WeywFJW35uuUSWkrYF4vwfLNHSqwd6udNBhSpFfiEJP2pvUcKC",
  "key8": "Cs48k8fa1QvyVSwAPokQegFuuqZtz9UgQyFgRxPi9T2Q6YCvd98os4ScZJoTUq6XHi21eHDQ62aGcJKKCiTz4Vs",
  "key9": "4r8S6UjZFnPCgGEYRDwTz8qoLqiryPAeWwd7gw13XL689u3VSqm7xeWHRXaV9PYNm7yq1p65J2uoBUohENZ5cbH5",
  "key10": "2WmhcNdHF7r1vyVssQdpVqcvmu43XuawsAvMMoLQD1FRJ8eG5Z6TpmMjRtc3v1XuwA9cS1yvSbB8r4BUkdMfRZKW",
  "key11": "nYgzZFbZBj1Ct1pdmWhXnwYFNVP4WadJTVpNhkbpB6Kri2xJxZkKpCVejcSR44BnVkPyBFAtrbq7BjBJ8MX5LLq",
  "key12": "62bZEuiB8j42pF9cDPu8QAD7717fbfS7zrRMjZXwmpgb3ELM4UvQivnPw5ob8GxC3o7yHayJqL1kLLLr8T5GkGqn",
  "key13": "3ib5nFBB6oKb15JKc1dUXZVK78GNteHTGt8ZraxuEtqEgZzrcyrUaraJnpMdR8u8CGgNLZEkkvAw62rocFdU9927",
  "key14": "4Lbfcopy6Td7ccuYUqczJoNHZGnMYKjqAvycbVnegYj5suSUqGMCKkizsZwvLsGPnrouZKC83JyWG13Xzu2pEpnd",
  "key15": "4rDnJUuByjRcfS2SzXr3gM2ujj3W41296mt6PPqNvKZtciSbZt3Xuq8hceNX8gdTynLmJQHjtnktt5f5Qchpifc2",
  "key16": "42FXKhuQw3CV3cP9DRKrGmxBMbGyPBEiGq7C8cVNmzjHF8y1xhxEZSMkUPkHy6KpXEv3G4W39MzsXBXfVAtdTsfP",
  "key17": "5HVLTo2mDUbMEkLsQBAF6QiYVHK8umGmKeWiaq8KAybhivAxT8MviJ9JEcEHvMKA52vzm9NgdBMSFwgkAkcmmBhi",
  "key18": "3JeHgrdEH2xuigc5ZKJyjwV1cGdJ9qNaxijPY6jnpjSi8MK2ZVrrfX7LULMKRWMdngiGGEkPJLzfhXTukni3aCkm",
  "key19": "4bziidG55TdKEyBrxhTMnRXaCGKERgCSLxkGHzxwZN1aibUfoHAVQ3Wge1drvuQZSBc5uoCWxgC3cbxiSoGWvwAm",
  "key20": "31KYrQtwNtsgz9UB9ASuXr4ZGfn94nd9CF4gcrirhj4FWTR8qXUJ78K3sevh98gt7CzD4y2nkh4djayg1LgohErM",
  "key21": "5FPzGVm6KXiLL1HGHM4F65tDXzFicjLGkunxJV8eKw37XPr6KQ6My2icdobb6PewDxAr9kPB1EufJzUH7edDTW6L",
  "key22": "3N13bizhPMtf5DZf72XqiQKaZF7NA9DF6BsVK1koLdrkDP1GUKJSkZJuAqDZQ8VLKmAHMmLLjqW1H2ARs2hRCtYA",
  "key23": "NgeeF2TBkZKNzD1V88QNKmRVoLeBvfSgWv6vYjkWYDQPcKT91ZwVMihr4LpxrcP9PuYf6a5jGReBMxehtZ6iknZ",
  "key24": "2u9Lx9Nhijsqfyt8R6otRpyfMaXFTW12MiGVhsLdeSXhUzjafqhfZzjATfH13R5FQoEKExFLzi5xcSNnjpWHNbkg",
  "key25": "5QHAJyed8ZSh921sg3ZRy1A6dfQqZ3v36w8WrbSakHhJnawpxdXoS9QaPwJt5NzWAhuaVr3mRSsLPHuh9CCS1qzY",
  "key26": "2utBKajzMw96p71VoyeuWyczNEssjym6UYXBghbxEDzXyovXsyxwqNUfjggoG1dAVNbAwKENZMsQFxNxEuPFXQ5Y",
  "key27": "3YXqqdvNb84S3PMdDmyWm12nY31J63Bcp7FeE3s4wtdWTTiJTzq2dndgejTtCXBqPesnjBS3nYF7XkDJ6n8LYJhd",
  "key28": "4c7pymAQiL3CCxasWKRH9paiCV2ZKALorfWwewuy8bdid2FAQWFgGHAMfUH3JmvWjc8wxNCk77j5tVpxxFSnPVCH",
  "key29": "64Mn4rcgaVhv6Spw4X638kioUPnjpEyF9QMesiEM1EkDh84Asx7CXspPvFmPJUgs2GNgecbtwuPqcFZt5qVhc8JL",
  "key30": "N9oJAn2RMk72URjgw6tDSonHsKfiHfSLs23teRpHm9pbzqksKYRFgYRGbwjoAuUjLXLDWNBEnsrDpU6avi6inHB",
  "key31": "5rvpy6jdonaLnPmq8NbR4ePNnnTNP71UzoKxQYFV7844LT5mXqU2WHdkDAGdv7onoctefMCzUjtiiok6eH4GgMjd",
  "key32": "MsrEH8G5qT9GxtdcwGXzJ2WR1bJzBkCv6gE4qieBJGKd4yHQ7gtRvA5wEbdpCwrobDUyHKdE9zfbMDk14t8yvv2",
  "key33": "ktFmTiVJA5eoXsqADDvxXDyj3kVY3wy9R1KqkUGjoePqSUVWAcwF2RDsQRBzVUD365h1hb6SfrVo485YAmYCmsi",
  "key34": "z2DCH2DRR7geshP55iHib4ZZxeFPjjnkinaSCS4ats4SEdwNcBaQGFdLyPutG2NTDcwVZ7i425RrrmE9Sef4mVv",
  "key35": "2487ejVmomR8sxEJvivwgwfUnX4CSJu7Rn73Ja9geWaFHc4QXyJJ2UoZqEa7bskWB23JFmB5P5GK2xzhMsyz8GKK",
  "key36": "F1grrxX8sAHREC8E3GjeT8Ac244GLAXswKReDYr2uxnZrb3f5tXnHp3xqfJMah91po6dKdKhgHfN9cJVzLPhZyY",
  "key37": "3SJDm2kuVrYco2tNwL8vNqZbmHDUX4hrjrgaxbVe1xzhsa3y4v9cTNt7xKMC4ZWVjXsDuLoHZxUQyuEY3Lf2XiN",
  "key38": "2BhmTGHy5GuumiSUHgT1gXvnbsX8RbvQ8asa2Ln8jXm52GoaMC2mV3goR9gAXtLBz5VBQ8hnP4QWpF7yAyXRafEF",
  "key39": "Lr3boBFhUc4HEv4wuKmjgCHR81DdVmqERQnrjpK8JUBf74Y7LsGPogKvsNQiAUJNGWFVbdyyW221nLS5L4gP82V"
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
