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
    "4QGtUGU34BGdGkJFw7Dr4TW5vjjGD54hnuP6F75fof9vMp68jfbySvGZ1DZdtfUxbh4uhtz5DDLXEenR2V2YWTce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46C8zEzpMThDwBtDAict84mLtKdrs4iQXa6PgdW4ZkoPnusTNd1hssYqbLFC9SGhkDDCT1bsW8oQxy1dhstVWwJ6",
  "key1": "4YV4CCamT8pYKihqmksUqdqYfLoecG1ukTExWAS7guAyL1mzQEdoaeVoT6j6UVnhKJUrYEvTcNoVxHuaUqequH3T",
  "key2": "Gsi1Wi3ggd2sZkMoXi8FEqT9w2Ma15Ng9VxEAEAJBNhnig7XxHRdCni5AixshJ8UJsKAY6Fn9KwvYZxLi2uFKZT",
  "key3": "548NrbfMybDcysESWc29dGhKYPVTeMQx21juMGBE6cuTHkWoWJRiqzL3jQg1eDLLLv8KmKeL59KCPQks7U7ZgiYP",
  "key4": "3CQHEUFNdbFAZJtZSaVFPK1CzUE8XU2fXLD15Xt7YmdSThn1Y2nJDjbr6CghyBoFfef9n3uF6WZpdEanFgjp2s7d",
  "key5": "qFkQRL9JjWwCYLFJrx8Bur66RyhQ8FeQ9Uyuz9WGnKh9ZZQpZ9xY3EYeWJJ1HaeVykS8pXwCqDcbyUCtrmkGnKw",
  "key6": "467iCV4tV7qxwVYsCkt3GqsV5jnrviVKMEsgGEpDoaEReoK7aYwoG18LneWGBBu8jqkq8zApsS3uK7tcS9VMvqP1",
  "key7": "3fYupL18yi7gyWGosNLh1JUyy4hUMCVvTbG2FibUU32rebmDtF8gVDoYjoAcT7r1STd4UYSkpp3pGqiE7HtGyB4G",
  "key8": "3PNz2SDdpDNymNjCZa8EgzzQN6V4hwdSEMjgN1CymNxf5ZzDoSp1dUbPL1Kg9mq8yKAFf5HAhRZnCqApkTNueLBs",
  "key9": "3UCgRtQXvzBaa7ZR9pxByVyNkhV1HoXv5jK3k2aVVED1PeEZ4VWHMvqqXmXaweKxU2WrsZVnNXEHmtPbi6Fztm7p",
  "key10": "2o6trGDJqbihjjbYHRfCyzh6VT5jDfYtGqN8NFxpweEAWhMCeVDEpAtgP4rwG5gE18MCaDtJ7NBSLdX9LJhiifUb",
  "key11": "4pt7rda13ckT9oJ9snnuBERPBBkR2P3ggw7Neg6GBESdHr9arSTtE4YrhN8mnBvW1BwJLdj4VwzV4Q4UJM2DiLau",
  "key12": "2VY4f1XPoXvZPrNNKcNGXrn7WZegDd4MKscSW8PgkPMLmnxWmsZgr5NCemX3YDiwXdZoL5m4y5dwwnNB8Cvuvyaj",
  "key13": "7TsCxnKEp1UWMcZPxWLm4JuDVrcF9aJJG85ubuZHJxmQ1veAxfke3R2vB6mcNee5HmZZ7s9ubHFiUennLgZBuso",
  "key14": "2Z7twnGPJJ5D9giGHzKZRqe4GDKRCftXud4bNotUdH9Hs1zRPrBnDtEsiDGFxpjMHgWeN8D6hLMXuo1KAdPBuCzt",
  "key15": "4oYepwE7BoR1SEJYDBeWFzmvQQandjeoXR1cXLBwSwH53PMyu3xmhFcNqyyg1Ni2Yf9wHHqMDLGS7ryq7RECdSXh",
  "key16": "Wxhci51hUk2ZjCZjHVk9yEYKkKaeSqFnifKhts4jvUJVmmqZYnuyJLuShuW51g9GNg7o59f1CnhTaZ5sxAKfEYE",
  "key17": "26q27Nd7VxWni6HKN7bzHJYtE2mW5JMNKk4f6W5jncqAKjrVcGAsC3TuGFQ2DqoEnErscfVhPJBPWohKzNRKSaZ5",
  "key18": "CUzrNxPgbrt1KoM9Xc2SzHKjwfzv816xcwzznDEwNXhyKLfKyjjghCKozYwkj82sD7tiH8FUPUQkMsDq4gY3YtL",
  "key19": "3UDCqMt2zBMQF85Phbu7BbG45UgwDURHf9ZroipAoXztD4iZ5BSaPhWq4yrsFbQaA7i23jxixbAW5LRUi58ivNb3",
  "key20": "4wpLYZ9eJrezrNvwzCgP95gGMNQHFfwsBc4Ebt1JMMNMFmcPTAazmeq4VubMEVPuQiyLtR3AqhbhavmQrCvdPoSz",
  "key21": "W6RhKSHG98qUhhvdzp7skXgs2nQooZhPTBPo41HV1WxTk1kVsaxrRg9rroDm9wjzdMAxUFFoM9fcG426ZbrUtBd",
  "key22": "zTDeBMyBAgDMxqugK7FNrHHWtoV535WMba7e1GJ85TysRvtaD6SSoeaiikhLsMr3KfdKKwzKgB87Ba2cCznbxKr",
  "key23": "7jHJ7sUteMt9vE1eNeEthAfvfXAxjdMTAd1pQTsPtcV6tWgojRuSLiEgkJHpoGfxDfH5ajJKYrpisH6681bFff9",
  "key24": "icsafqso4za3qnrWcKcSEqLA8xrfx3UbwUW2XuZCnfZ24qJ5xSHHQcxDGwCs2M7s5pbdG8NPEUYaoxS4TapdaAa",
  "key25": "rD7U7icg8y4PHhLoa5PiRB3c6a7E6jPuT9PByaQwS17dgCELXA5x56mGUQMmR5BBuQVHkkQEfTZue4wAGSwySUR",
  "key26": "28Yyt36xZXNo9r3PP12CbojhA4w7wKzyLsyNoqjn6uHwVqQNCLsUa2vQjqECXNrt4GJ2aSiNVdRoQQXVbWPh13ka",
  "key27": "2tnMa1xzPeqcCoXXucXx8HcKX16N8mCNy7vQsFArXdi8J2RoApNhcoWwhCf4MCWnvSGTAPjHyY3mbpMBkvTPg5h7",
  "key28": "bhFn71KHd7g7Tipq4KyEWTXGuApXLY2y4wLj2EHRcSduwrPbpgzdfMgcLqKuT5b42oEYcbyvhX5VcxYcKXkCpiW",
  "key29": "1i29XTQQHAeQRNy9LUbGrvv79FXdLHY91nu3ejq3q2Xn6Af2G3U1yigwzbZSQxaSixm7N9SctkJgWx4FdWW4Lcp",
  "key30": "26N1BffW9W3H5qenjhuCrtPrLU7kmxa97yR2jRXcaF7NbEhD96bxE9AdVw4d6QCnjfvANy3LLWhQfuYTxpSBxzgp",
  "key31": "31KyQxedYE4atzWjfv59TriWBxeewDdHry9oBcsEaf8u1q2c175goCZcVkQinZHHEkD8D88iHwBfZQdaqcfAEGxv",
  "key32": "JjuYAsTRDg8WtBo2DGFbNh1YYdtHajk413vye4ZndksyHvYLDt6vM2xfrKb7BqUoCvKfhRe5Mxn9QfFs3WnACXt",
  "key33": "2Uo9xdJjaA1smd8Y8g7fzHCcG2a4t27eCH7jPinheSyZn4D4ZNWkgk1bSi5j5SV1dvWAW7scgANX3Lh3JttvZVbB",
  "key34": "5TydtBNUp5u5FbKX7cjdieEaAajicWG46JMUedigf7DMqs5ad8hteokDccuhTjy69ZkRqMQP8EuzhGVndw7YXGTD",
  "key35": "23KFdqFZq5iNVSgb6zbjMebkGBjJv18Gtv8dNZSmPnJoeWkb5bnkxcY4g5WeDkjVv22Jq1fRzYU1MTPa8Yu4Sj9n",
  "key36": "4kMueMnM6GaajGmoRHzA1xKGBtdCkwnfe17EgGAAz23ynxJ7MHkpnsLYhScsnFnfJmDhdS1gqrkqTSLpvj9XEpN3",
  "key37": "4VpQD2ckmhJEW1F8ACjc6o5VW1Rg5YJLySZwqdTCKAoguzZpsErb6cywPVN53yT1swoJ8ndmDMvSJHZMPrW7cxQ1"
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
