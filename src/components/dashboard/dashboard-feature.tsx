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
    "31U6KRNfy7mFiiJBJvHwYug2BVgSjiegoikARAoQxNwJhCbnSPngZ4H7yrrNMYzNSQVJY6Jfyn68u92kSx5dNggF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33JFQpPLcWpzpB7ebeMbJLxgK9HWGpjvLw77FgHEomwtZVSsYKRrdwavFkp1RMPP1KSnCo2cCyHbMUtLZUgFSGUV",
  "key1": "4krU6kJEmfRgNtVywZqB34UaRjJkFcxfPeJHaBkXonPbGHCcjNNgzvmoX7omUsYyBbczcYukeFS8MAFrQZ4HJKEn",
  "key2": "2wbX1UHLn4DYSCTAKydtjJpeQLSTHo4p47cUfztQam56g8UzBwPNiNypCBeN4h6WoVdZbDFjFoE1wULjET6v51j5",
  "key3": "38MTH7X4ydu7Acy4o2S4aSHvNec8txKSJ8WbZmwURAETsJHTWUmNEV992CXwsFrGVWqSgzrEFY3N5B8gKg7cBXLN",
  "key4": "wqAosofwqiU21qdsJN52prmwRVXvfrEbEeoDpeLfTFjU6Zu24R5aNqu4MrhvEdsyxKF2eAyevmK7N12te82Lzqe",
  "key5": "5Dgxzy7eizvkHtqZDwM3yXZrGikkFKA2cSguwdU2NJgfShaUhchzUoK55yTXnZKRk7BNQws9gLqk5okJyubd6sdC",
  "key6": "Zk6nMwoZwRHR35MMW3nizfN3FQ1gEd46WxG4UzH8UhUMh8xumj8VJiZRifjaCVS5AYq3UZ4dG5C5RfpztaKFnX1",
  "key7": "5DdCnqKmU9UpD4wsVST4QsGHbttkJm29VeKmVCix47UEScjw97UfzdDPtQVRwb3bCsddcHdcqZQdH79C5qPArq4",
  "key8": "3FQEbg9TtKempgDLWrzLB73cV9JKiaQmJkkoD79eKAWBBT4jyQ1VHgjE2uQjp6wTYFeo2PszQbmi5gzw4RCPcSEA",
  "key9": "cAQYzqqjcoUhVkVJPab25ia44ArZ4diEz3G3TENedxT47FEq54gAfwY4s9XRuWMcSAriHZ3HexupzpDHy1qK9sm",
  "key10": "5HMqzuVrqsiedf4UQ3mmsoNXJBV7phoMgSeJLTcR2zBQf5fJ59jbjuhe3GR9ihiPcNf1ULFDiz9X8WQa2fgngKmn",
  "key11": "5xByPdphf9UNT7jqSiYgSXpsUeYjHBiz1n3zjiA45SkHFKAWEcdCoQNtY8dDDLAgc6c44PyPKRRZDbvDbqHRkHtz",
  "key12": "329sYBtMLM1VKqiGQ65GMSjWfhfYpJKzPhBWEn1ASJjRomLRu7eymuV4uwoN8DcZ2cuvEekHxvHR2woRP8WknySj",
  "key13": "4icZaP7JJ8jtuV4Fum6xxqPTNALnWkXgjHFF1oq3oVW6t8uEYFgVSx3KbSUaSsXvs1TkCagS6pzQvGVdEWCcaTUA",
  "key14": "2CN4tngNz1Pt2KnQPrG6oTMCX3h1SxPyuSF7MZoh9eBat4ZpvozsxjhfDSbLxpBMPCgZARA2QVfawP5FG7dDqq2D",
  "key15": "4TKWoXppsivMsUmqA4UHBiqvsKrNcviRUDEPHeQb8YaymG2wm8wVuuddfWtNRptbtGvAhP6igGGKciPdXGFMZUwV",
  "key16": "59EhCrE1v2HMRubK6hSQvTDoqZE3qPR98ZwouMfNkMtT8vNfbQSUkBBpJLzxUy4BwR7xBKJZHarNZq2RcafKPY7u",
  "key17": "261SCLbaeQchXEeMdi7qcLtFoWfnSjcXSkEN2cQvYpBxcAbeALrTMc2EXvaKniW1TX61nSdYPRuxzmfjqUr6Tqkj",
  "key18": "erp6uDTzVHaardB7zFM5o1R34NyxK825zx1G6jftWw9ag87MMfSXbLiw9vsHTbaYLTB2YPho8DH3jK2J4n6QTqS",
  "key19": "5EJgPTom5EECbMnfYaWe6B9jDDDcyzqHYSQLvrH2FUNg28ayDuvQXbuD1wXr42h7VetVYtrm7niUgWckeG88YZq5",
  "key20": "2W6E2jU4UjC7SpcniiqzZAwVdJxpEvNquRxXgkJ85uG7SpcJqXz3JCYjoqaPe8R6DiCd5dYoeKr7dysWpjRheWJT",
  "key21": "roT4ZDSfcgAQc1Pk8Tr8jK6yPJ8uotK21GhkDzssSFStvELbHmSbebKQLhLL93hCzUdk83TPxCNZdqV4apqAJCp",
  "key22": "126JdfK3ieNwdLY6QQzZhcm4jWdMDpeEixNFxryLYNKLYRQGR9rezUdpzqZGfBm3c4mtxTkhknp8pXkeNy2icxDq",
  "key23": "vnxLctR7ndgtTJ2JrZfRisDq12gdUBbaAtv1sS5BU9VKpVPHLXm9SCTA1yWYYPS43EGGn9Lj7tRpetKrN3DoEuT",
  "key24": "3VwbFrVtN37rJ3mySMigUdxzLjJ4xrmbkxm9JnAd9reHsQVzK8DM3cLzifzWvYCfT7o5UpgmAKHNVATbgatYjER2",
  "key25": "3E81WCB5abRNmfTzvH7gvH7UXzD9akZpYH6GykfeGmGonkJyNxJJdutvHD98vCC9bAgMSuzYUQ1eUi1nabcpU5wp",
  "key26": "51dtHWHyCrTBGuCnwTPkvnp1DF87VDnMX8yfcfFex6jbrs2kqTeqquJFXV4mXuok8tSsgcWfby6xoaF49sEDygAW",
  "key27": "31VDQCMfK5rHnupLxCdqc6zDLpayGztqHdBxXs2HHRvegMpyJ9tH7bUn8d6zx5xofMXctNY1uFQNP4ci4BZfjsVo",
  "key28": "2fkzPtPnBQWDrmyJu9chJPYuGHDBQdac3S8kR1pzpUdp1DQdYVa5srWDMkPU7h4K2iJuLLPjGJn1qRUhFJjUyoD1",
  "key29": "PGoojkJgmW5MAeFSPiZkqZCGVEZ4xmwxT7pa4NEeSvRuhBVtVAA62hti71pgetoGPkw4QfwcyH8RPuq1ZnujRTJ",
  "key30": "2NiKwiyFUHeWJ22sw3vETcguoRL7cHr7cCkVi2LBhYx5H3ojHgtREGZTYrsieoJPdiTGQRYpLqT1L3V3YrTTtG4y",
  "key31": "4kCN8EjXeoCghT8iec4Ko1vJg6yp8PhnTcr6RCUTNSZJ9qNHctxv8Pe4inmAPew9whLZKJnib8NGScZXxNTQ7bmE",
  "key32": "5k9uDqEqP6bonFWDzg8o3vztKLEWnpvNjxC1EMVAtiGmFUnKgWwgwiuoBNLfnKhGPzETWtPizA1iDCtn7UqZuJmw",
  "key33": "2uawEy7HjtEYg5p2cou3FDME7LYgn8qUCHV2smViajvhHDgbRZimv6ERciXxArXLmF7yuDZ9aWZJQrUWsfceiXas",
  "key34": "2tewCjwWCf6y56q1wtMWZ9Ctzb1Vss9XwjMzjMYyGRfJjMMBEbc8pjcBBq3k3yKX59irwYE526mBrxb7nzPYbkuj",
  "key35": "CwQbjfVyH1eYZd2XHqaGsJtAnT9WuLMruPgFY6NBQ1QJ4ri8BNwjfu5A5sNPegdztHCkurrDSqh4Erdi4xwWEJF",
  "key36": "4grM2iPRw7an5HHtSCVsVCtSMMccihh3KTrnMxA8tQm6KohfpNdZfev6cqNP8zUjrB6U2VKsKACqcNBiKUARJ5KT",
  "key37": "35AtCUbtB1ffJsbU6pvzUHjKV4EKav7bHpbJYmf9Fes3hQ9UUbUAkti4XdXz62snV2y6AUzDVttANDdMx9H94bHE"
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
