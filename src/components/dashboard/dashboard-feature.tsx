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
    "5R51i3BCoSyzYVChWVCNRgdqS8nrC9tbuFAknhwZRvvKn4vUTyqa42GN2BvkzjL6SuHsLwnM4niUG6JCU5aTiuUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PL6FUkLF5bfC3CLgXX9T8qYfbbgJJaM3GQrkc1ZvtKTf8efcgyHkrrJKhvRifK2KbNwxXdLKtUrkJvpB8TnFHgg",
  "key1": "WMZh1RZycHtLa6VMMA5ym5ntVrFH9oCptzyJL127mWSwBQdehBPAkENonnSRF78ar2ThewUoq79wdLdWKSyD6ih",
  "key2": "41f81EmkVFvWd4UMtuCZcnXNCWTjpeVtiNquSYsNQ98CGJXUPB1hULDnp8yBw3byvoMjNKdvcbHB7EFER5aa1Vge",
  "key3": "389E9PwkuebEPkZ9JJjj94ijUdtEQXywJc8HbsKXRN84w8BqyQTAUn3pcWDJPFM6FDgPW4ko7ZgNZypNbxbrZKU1",
  "key4": "3KG9gycny2ats9BAjNQHaefTFBWuDaAyTQs2Kmp1ZB3Wohux8h29w89EWbbXgTrfAYFUSscGwDtBjQbvDS8cqYTP",
  "key5": "2XZzB3d11rbYKTp2bWQznd61TJcAQZKj74aYy3pZ33YERaPk1733dpQxYQw3o45JKGMUF7CCWDBqH1uhCbc2LKBg",
  "key6": "5QdNdnw5w2VBxGExBGG5g9GnDfADANXoALRwwXz3DPjNrDfYZGKXg1kb58d6jwq9FJZQaeoEpWMdNgudXteRG1aT",
  "key7": "35tsUftkVRmLCUJHhjCEpFdPrBhH4NH4jU5uBfoQy6KDe9nADUrgq2nW5H5GxDH5oH9J88a41iCpjb6pBTQg1j6J",
  "key8": "3sk772ikyXBZ8xT9jSBCyxKWpdfCeaTvLTNqT8MbDN2STZQw1mrbtsYEKxDwh3dYBcTtdh9EQRXw1Y6JufnmS6Na",
  "key9": "4zM6zRiAtNX3zPhvk7HJZKWABKA1QeHUuazqanBD2CKWM3rim6GANbGy75RUEzD8XPWW8FXsSrTDJda4tjoWFNAs",
  "key10": "h7kLYvcYXWgEPne7dfcGSBhLs2AFLS2B9TH9D1aBYw2Kpb2Dapbg7AnSYN9zNFdvp2HVZpfixovt3Eb7yk3MA7r",
  "key11": "t6VnxCd2CJrXSWV8aqwv8xnnfFXTg9sAJzq5WVQTNjP3j3U4LTspFLqyP7bYEF692ajPwb6ZCbuShxk5csSQ2Mv",
  "key12": "5gqSV24GNZZJjMsHvMkRBu4iagQkcvJdN7v6zCtxWL95EVeLxrCKHNYukkcGoQNNRVaXKSxbgZyHHAyjJQXfPRPy",
  "key13": "FMVrgzYSw8LuydXv6f58eW7GfPAh7fH8T1DY4cX6dVNru6tSGqpS37WnZtgxw7nJAGgGJ3yj8FyDQqK4JBznZzQ",
  "key14": "465ZorvsfyivhoRPrnEFobdiQtGeSqA66f5Ks8YAMbQEpGZM3GQuQgQLsAXnCCKccKEFcv4gJ3EDGTGsaAZy6edh",
  "key15": "3xfiKQp5Esaqdupqx39rCAipQLB4jk8jFvrKfub6MJRryFmSAFfrFtkxATdizYUFs7DWkwuARSgZ3z9Vyzxfos2J",
  "key16": "2m82CHSJEbJqieTc7hrKppAvYLWRsZzGPxF6tP3YnDKXhFJ3fpygs3TFDZRRWDJ548UdrXpUAgwtUPhvsTz3qyXY",
  "key17": "2UjqAQQaYkAo4R3ADCPJYzgnU6sdQVXMY7keeQsRtFAtPRj6EdookZLAuAFneRjXBYVkY8q814H3YMNSxTvJHb4D",
  "key18": "1aUky8fuYHLfaERGF9FtkH8vaG651d5tueKYRxwsZgJdPu83NA8U9yzLisbKBe673rU3Uk2LekbZRExZmiiUB8q",
  "key19": "2fDqA59kMkAiwwXmgsUZbPTrnfgFLnL7aD41CiLRTPeRE4SwQD6xx1E8MwF9Ch8yD1ZJtbc5vf2pBqdWXbMBqq99",
  "key20": "Wd8P82rsuoVAkax9cyha18CSdRUiQ8vihS5Mwi4aA9sRVBiWWpYwMF48HoRbUvsPKQ9JtfTmVGHjSVZtn1wMg5E",
  "key21": "5z75zH9V1JkGJZnqo3nmgw8vkNMLzzFwnunRVQ3LmziwswivzbwsCkSD34AihWrL2CQmxYsyN81eyo78UGWYmT5y",
  "key22": "XLdq62miqdH8gjJ68RyZe4kJ2mUmnKHM9QPRCbR1qUjmx4HuLQyyLM8vWCyYA2VAUVNoJoph925KRJpkXCrMZab",
  "key23": "H1uv8EoExn1pkgurXB18n4nAQQ532koyXS9cvCvJYW4oDnh9HmHQP5s5stdpC2LfJDRQK31tBn6B7uGDhhH3PEU",
  "key24": "3T3B7tb5cHKDdjTnDbRwVfDeMsmGhZrkFSFoHKjHWkN8rGmoh8MBCPT5RKoSvTfBQ1mCZvdrqmaseMpz7s9KGWiW",
  "key25": "4uALyJ5yYcebH8BkQJpoqttEF8UhgFgzemLaryCiQzRi3ZzPzzzReEEoQHDLT6DkERynG8odePdoXzg5n4VF5vd",
  "key26": "2HKfikf5nUWFEDd2RYVAQkbywhiKXaVYRGciT66Wy1dhzcNx2Egy7WuFXFKhesjkKHGviNbFWL7xCD7ara3oghLR",
  "key27": "5XNPbWyqWcRHX4GAB5ihm3cHzuaCaihibG3mTvUfqo4Bmd6HhBnv72zz3RoABwwZZ2iXdWt9qBoeD9txbHUpVWCk",
  "key28": "62JT5eB6QVE2zb93dJ6uWapX88og1JG3Jn9q59XDgVBioXsu4S1XKdi6mAn9tapbiYd7T7819uzLjkhdGcaEhtNt",
  "key29": "45xuAMj95bX7Qbh3fp5MGkrNt8uzz82Tnv6AbYTH1k1Sfwod8FE5Eyyzk8Xx3wh5wVKDnnuwqWW51yTK8EqYxPaq",
  "key30": "67MFmmu5iSrXjtXDgr9VhPZo8mVDfqxJn69QhZzj24432vAboA5CJ6RjxMDMjFo3EanBRGWbJ9guhdAMDLcTCCzS"
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
