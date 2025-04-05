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
    "4C7msXFc2MaLaRaS4zC97s7d6cqMreRAYtFBWLENsFZJerQTmAL3ZUah9cQQzNWTJMYiy7ouNSacACbYEyEJRaXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27dVFFeskvGFufqGxMJ4wq82cguH14kaBRYa8psxBGJeLYcbui9YU7RjmNwTkyanXjx8nSQ6aoct8Ugax85Kj16n",
  "key1": "33MfuZhnBjh7EZnFmGxD9MQGPmLbsRkqPDS8GKEGC2JSpA3gRYJDQVs6wgajC8yD1F8kQdUfH9B3fN3i7irsTsc1",
  "key2": "3L5QsxPb5cZy19Q93caZdEyHhmwa7Uoc1nsjLpNxmvQB7kuUAkm32HKTQwp7xtH8MwRBcaB1Cev3bXKaeCzsBTHi",
  "key3": "4k2C91ZZP4Bikgr7qw74Q2cAoLocVG6jTmwVeLMjY2dvDzrpY3L7CHctfFCtFoDFfh52PKhb3vVJr7fhFyJ2Yf4R",
  "key4": "ay8dSiwrFZEphW5YGM3pfTK2UVCXogcrnE7jnJS3pSzv9SAwRKyKd8qEiq3WeY6nTfNBHjn7is3kw92JxsHT7z7",
  "key5": "31BH6VFwb5REw8cqmLrTWkFE1EPZPnvp7xeYutPjCSAa9sVCRzz8SoTYCVTrEvakXuHUsyTnrYvEkFajToVzyMEK",
  "key6": "X4YGHKfsFnXnho3FHu4o8kstDvjGZxCtdDZAbSxEEMLEdfkLYkZdwRuVi6o4UdqQVKaMHjRUF7kjmSZXF13CEPb",
  "key7": "318RsioxDLs587VXTyrdKNfAAfNoLNzsE8KBo9X49Mpk3ZVXx9thMSNNYeTQU1wgfChZxr32GGHmP3JmwyCUtkom",
  "key8": "5BNe3j37VxwxXiSZCmoaUsePw3qgq9i83KtMxoAcr6Mv1x7YgwRSNyrXN5u4KjgpsuyeWoscLwXmA2xQSuaWkU6s",
  "key9": "5qtwQk1NEHss6Fdu1dGhXgLSGe2FKsQthLVXFmULPWMpdga7sa9Q7zcbFpx7aN5wk4VFALUDbeHzZG9rd95g4dCg",
  "key10": "2G8QdZuHFvMxf9xZCYRuxv9RKVhHZbCtswvnUfACGKjt91EycWYHW3QXYoqjDxZB3wU549nNsTpdBRrz8J1FysLg",
  "key11": "2r2s67KrhuQkhmvDHNuLmZKNapVTwuqhbY4krCKkauVt6WSJa4rHkQkKpLwN69HY6mUSG9v1bv47tQjo7eYcCbCX",
  "key12": "2Vjr6855dRLUL25uZhj9QTc4Zts6C4uBG6NA1WCWtZNzzMiSwtJfC65NieV4tEdwNfFRB9LvaWJyRid1UpAfTP8r",
  "key13": "J41vBLjQidxg4mGKmEponuGYwNfNJ5a3onMr749uXS1RcnqLg8NTaP2kzo5UL9RqNY7KAezJgQbB5xY7TpE3KbA",
  "key14": "2Pq6Ec27vybsQZHwLxQ9Qgu1qMEVsXHCNHU9SJzwN8p8kvTMGzqk9xASxnVxjnXXNVTfAB3YBbJvZJa5aFotrbWB",
  "key15": "586x6brPRnGzP1hZdz4jZ92iCMBSMhkL2gUhiqwAym5YFGEi9xCbMYpEXgyLmzMELvZqoCE6sDiZ5rcyUHEDupcM",
  "key16": "2zBS8ZRf3dZfnnZjxEAVrNRj8pjft2ho6DWRSePovib2FEPZAcBVzP9Yv1J3uoga3tW9CnAnFwRdzZBFXgSzPei4",
  "key17": "4gkie2ZH2FtLB1WUc6EBkh3KGHvs3PQQQiUWgotAogkmAGtUBdEoqYB3BVc3rC9AkcZ5MTbKckHVQXNBCnrw2Mkr",
  "key18": "UF4gWevJhoziRgmhMrXW93sksG6aquhe7sGRdy2FyaBV22Fs33zTG67rJV5d71uYHZVnDaAABNAEj3NwbjCPwWX",
  "key19": "34qVxwpwHSRhpKSD9na1NGTV2r5Lg1yFinwFF5kzw8FmbvNwVUVQu7JeubJNP65ykBDy1GsZyUXQPgDswBDb9juD",
  "key20": "3Zywv4WKhdZo7MpH6vbXSR8LjEevUuWdpjWEpG1QPczbZRdRt7Yog5aRsZb64oWcqop3shqhsjCRgMZXfpKC8Wdi",
  "key21": "4FsUmn8F4jf4gLPiDvLZduVE1cq9Rtihn912jeJMr8bMqq1f7vDHuXwvngSG4gU1vkWMuUtscbHYTkxz71Eq92pN",
  "key22": "iZ56hGAV84DVjhyGWnbZhuTB8SKHvn9A3wBMTTpYUB2g4oxtvf52SKUoQSSN4CvxYT5jATwQLzPeBEdQYvWEeJ9",
  "key23": "2bkUz5AQxTTQrLQLAypWpA64d4bYBN6LgvX2UFp1b9qfu3wLgG9ewrNsmxazTmpe6pCaEiM1dJMxt32xqR5YHoX8",
  "key24": "2MF24XK5orEygf1G5nX7QhYsU9D9btZcZZMVGB3u4PMKYEHZov8vcEoYMfLbJDN85WQWC4mG8sMjUvmJg22phCDX",
  "key25": "47XsZH34danY2RwwVcMEpSmsTNnkgbtyct4Rp1SbRA7uNNEEt8n8JGyniMRKc2aJW9XZE3748C8WbM66hsqNSjHy",
  "key26": "4VLEqdadkd7s7UZ6884HNs54QWvXbpbtnLL4bRnMNNiK4MGbbK2YM6Qx86gPCJKrJk9P9jxQvTUFGwYypLxvoYHV",
  "key27": "5Xkxo4hj2PAHnfJzKQnabSd1X3E9hobZE2frv2w4wQ92ndMhvZ8Gj6EKt9WFhDvGK5DibXQLjzmmbZAQ4VpwZDk8",
  "key28": "5LQVKok9jdgjYvHKcapMxYQXe79jWdETZ3o5hwmhsgQoBkkz7dXCStNRPkxQDVHekvwdRQrZ2L8xcJyaSVPPxTHX"
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
