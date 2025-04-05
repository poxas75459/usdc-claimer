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
    "52hvoKzMVG27tsncsPv8rnttbmTcboYvhgY5Saot1CTw2fKk4bUyYCugpYxryRQ5gZUfFJk5nYJNiqX13ZL5RW6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67DrVBy94nG31D8UvXzpJFM3SMW9YJEBwT2b8mXgsXBNpiTfggcjFdJyxemRHaiyN8rLFsFXPu4Z1ZNZNUS1kMib",
  "key1": "2DYw6DhKiR2CeD55Pczx3fHh8gh8AAgYoYDZSBC8BNSpEary1HNL8hFVPi8qVJiBcRrsksMuwimBVqYh1evPJNft",
  "key2": "C84MxqxtWsGnGvHdXbPD3zzBzdhHnhEcpHjVZQBtkHbfkTBq6Lfi8V7XW4w4rgJeTbK2DYK8Vad2zrcSdfAL9iG",
  "key3": "4WU6BzpDsjY6JJZ2kdynvcJLGErGDqznyNwLjaSyN7kVG8twR4J3tzh8h7fmfKXME6C322cxsYaTdjnXT5f5Fvn",
  "key4": "4TAXCdZf9txV2R6thbkz7wA3BZzCx2Q6bZNsTV1PN5Tn83T9wF2voMawfZqtcP5aMy4xBMH3N5PqkuoMNMEKFBEK",
  "key5": "5FdiNeAaiZ5uDchpcWF8aEioKcEg28qt67XLXjei5X88WGieT3D42Lkhuyp4HMxprNTrgNygYouD9djpxLUWqLcU",
  "key6": "3NPykHdbji3QHYmNkxefb4cd164WyKDvmukb4JbSoqyLd9hpspvghyTYnbsVUBcngCG7iEVnMjCnZos18tb15Lot",
  "key7": "povndZT1QEsLo6dV4xec8CQP3fQvAwP6K6NeHKG2PjH8w6WuCzvD6LdJG8BJ8Lrv4CTysCBFFYGXF814iSFHDY6",
  "key8": "2HBA5FL3RDzT5mtNkXag4YKeioCuUwE5NMeMKKN9HmkwDR1z717qbhgzq1yqf2x5XoNuZR6FpyAfoPt41q49YzSk",
  "key9": "244LtCEgyoGpiHBLSgCYZ7LK5wbwg5NCKzRUbVPmF5oN7KhHQu8UMiBXGr8mgWnraUM4VwCgPBgd1ntRZMkWiHSd",
  "key10": "3t8GLkcTgsk84cWpJt5gPz9SRuo8hNFRRqDSq4DA2V2EEih47bA8bHzHLPmk5JSMfFJP6u7bmAY4a5KYgss1bNqS",
  "key11": "3jK9KYwg1BaKck1dnUVwdSskovZydjcnu1tJ19V3X6VDqZj8JS4GDqgicgBShxki8pYYW4dqgeFPXX5XcY9cUQp",
  "key12": "41bP8pii9kdZocfGE6Mt33BxaeQAeSFVN1DK4rASVJrK3dcDcnjxYZWQTKSef4Q3TCA87nyNUiegBe2AXMwC1wE4",
  "key13": "3UA96ZpKGyAUfGbJEjMjNovmv6dJH8Mxgp3Rx6ZQZ6Lwi5wCNAHqYLvfBigfvYwAxLbdmQM1LTyPDPTfF3AfbZ7j",
  "key14": "3sBjfh3fQy9yKZ5S54anbZY8FmdMrSS6RrXnYSAeVR7eEqiaxcq71tVJwRAfR7dK9crAYWB1r1TBEM6DcarrDC5L",
  "key15": "53AyiANX4etsMKPWbDfcBpH7E84BZaUHFDjKj4r5V6tZqvJAQHznZKMnmZ3J1AN7oSjLrHvTpF9DMpc4wT7r5dwR",
  "key16": "4PghNeCPv2RZuZuri84AAW231gMTbunGGQ5PXjR681DaKxypJj8xZNgdj6r1UZS7xQ49uCNndDAqJgQrQLo1jHGX",
  "key17": "omrYxWnYMnFt94i2g7TPxo1r2sKkLnTTcoCV5HkEJPBnymSf9kwePeAwr9uykVcnQDA8z3XwLdYnLxum2kuvwB6",
  "key18": "3U3QjrLZgSZAFzfNJxvsREf1zDd8FGuFVtXi9RGS8qFQANgsgvbBNhsrs6c8X5AxJR9n621HJ4Vt8EuoZf7NonRg",
  "key19": "3zDeA2pWC9LXE1qRzQ34bz5REtKDApkwea6yXFPfRRX9a3sG99ucY2YjTwiqsxXSpxhEAKiVVq4yfWk2YE9f8dsu",
  "key20": "5UfYLcQ528pXCME9yAyoRkR9uS5rWVC1FAtKDs5pVmcVMALazJgwrsJq82hm7qAsVa2ZFX2Lrt9weerPAUaZLYKR",
  "key21": "5sgtuB5NaLcHdeQGsLjqgA1XCy96sBCpxMrwiFTUv8BeZYRV1mCqArDZxuvCnqAVM39nSp4HQ3yfHC8KwT6DRbbM",
  "key22": "2J66AHe8z27hdpWy5paVutjYSRNCt3NXNuSoHimZQkefZGTm37DVUSqbWNEcdwLCHEP4MnqF43ZqYTY3ckSEZvLs",
  "key23": "5qkpoNkQknhoTBkdxhiaroAUUTjY3LSzUwcwg7FfEnMs6ymxBLFdBDhSkpdJYNZccJMhiEMe9h5p1JHY85xvpxCN",
  "key24": "4ZDgYYir7ps4G1WD5vG3k2TtT5JSkwZxqx7R2FzFWZogSTiYFDg23TzBZu1USL9PxQ9mAHaKWtcmDYCKMNfr5hCo",
  "key25": "61Q3JgUrmVnkG3bMYHavmPYUsodiXhKEtvELn8iiw2LG3gXA8y9WScpFKDLxMZYD3KykZH5DPiXqGZsCcAXq657w",
  "key26": "3iRm5wM5Hs9ofgKrGBKX3M4G1fn92wx8jp4hoYPFunujXdoHxi53uSanEMwycfeoeEpdxJNvsDUNq9XzYgsrf5Ly",
  "key27": "2VKK8STjoNG9wiJJRfzcgeXjxKXKb3cVKZE37taaWmhkLXsTQ1qfj4SjZWavhRE5pKthUt5gKyqWFzVZbbX5aDM",
  "key28": "5onxva8gTCaxsN5kzpKAeTtGbf3vGaUw6BbFrDjwRxK2S8pqbcyftwzCCijNsRvrxoQ7jn9Cp74c7X9UHRjAps8U",
  "key29": "24NTbeX1JzVW5jL4rp69ssURh3Y1qfNGA8TiucrAEcbj486iaX8a5Tiu1F4wCJGW5rLKFyAhuvEGwAAbphWKSmWE",
  "key30": "5xegFnbgtZbKrMqgunydj15ts3ge3Ze7LNg8eBV8NTjYms1fAFJ1z4xcpSsza6131nfieb6TR43WWeHt3iBBPhAu",
  "key31": "5zJvnnRqwgwqnY1wKd7qExscHa3EEeZ1jSu9isWa2a6xKBvWgVFAZpgTe1tuE3Kd1HA5uj2zbWRC7qvvdPWXeJ91",
  "key32": "2KsUdQMrh7ZfsdX8aAMfX7yz8Ea8cwHfnPBUc7fRTRkBgssJEagNgS8Qo5RhA1eJTdzS5RGFE3t8vWAuR8BAEj3g",
  "key33": "4q6t2dviVwrhMqYeix5SdGFwYYWGvHbpxFrhqnx2rcZDCPYkwkKNamy6zSkXmEhAvuD6zMUShFgGvG2rw35PfyaQ",
  "key34": "4db7ewgu3YsjqftwoEA6nFmnD4bsv9USuWmibKta8zx8d9xDBnKyZ2NacbdjPoAzoB7VrChAwYZvRPR68cqVz81P",
  "key35": "4wsyKxo8RBzztkaTofeEBVdA6JYLAQgPGFPHNZeAeDBXvhwKseo7i7touDsr915WVCdxx4HNbcJuiKAXyYqek9ZZ",
  "key36": "5ZA1jv5L35FhmM21ZbBd3FnZRGTzVJ6zdcC9Ynq99xR5dF2x41wp1dH3skuvzmByywBDqP4SXj6TXk4Q1sF6sR6h",
  "key37": "3miky16KmQGHTwGQsTCE7HYxyU9h7rmukQmRiUj9aQtEDBjUjhZ45aQ6BtSuJ9u14agGvraTm3X2szT7pqGvDGuJ"
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
