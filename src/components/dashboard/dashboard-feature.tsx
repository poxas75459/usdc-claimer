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
    "62hBs395f71ZgSxvm272pCiTVSRajF5CdGznhuaAeLVLmJxKqE3kkcJz8Y4yoKPcwfXSMSxFv23PPYKc5voBiaE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SJyDgHUS4mahFZPotgTC2mRWGwQuxKfHNk3EKVrvLVYbhxEDseAz5imwnX5DghHzsK2w3fyZPoATSzuc5LeKwGF",
  "key1": "4vkuEHtB3Q1v88sWLi4hxKr7N7C1mNZnL7PcXH7hTCXUW4CKZqrb9J5kxMpMMXCy1wqpUHHVrSziH5F6974aymaQ",
  "key2": "RN8fWXiG73fJPLpMj8ZJuefH2GTNJWr9tpGAcSfg9tEySR1Kuyi3L1xi7gFvBcU4qFnCTwXfMRwrEErGXLuDpRh",
  "key3": "rAx8zae6vZcQH6mEaYVbP9GKi2JQg4v5yyc9uh6bBpPbHvJSEpVAcVA3bay7Mm7b1vin6uwrA6Fw9BxAWAVRfdq",
  "key4": "tcaoP2rkTQZ1fTbSLgNwrsi583g81iVZCDRk6yDFvgUvP2a8SDAbZx5rDTZZ34o8w6oHNDaL8agGrz6xwAS7e9U",
  "key5": "5CWNEXcjdJNX1Tyk6tyYbnPJQQxRqRVtHn8EYNYn8VeeYMyxM3oB5XrwptKwUtYe4wv4m7CfPZZsBd3svczTtuz2",
  "key6": "5mtpFaNYcfDjT3QkRr8q51B2CX9kXCTVMjLQDHHMFxrZ9Zhfai5ZteDTvd3wnBPArEuNhF82dmA6TP1LKPmmWdut",
  "key7": "54h76NLi4V2zMP9A59fN3Rm1Bs21NRi1w7Ct9RTB1PsVE82ZrqBdMuDYEWi3Q1TJiyTuRt4k73YVbbNDYLAa4fzz",
  "key8": "5vnstYZeBt9V5rJWBJvThjJZzMfn6AhvYcwdac6n7ezqfi77BicdYkc8Fi4B8MQU93kBg1UTxBpUzBbX2Tyo1rt8",
  "key9": "5FFZwqEVycbsc9VtgJkQFWZU3pZnJB3L1cqFzMJGX8mxFy6yCMJ8c7GiFenKGMRWi9Byuxo9ZN1SJp3d97hVbwbL",
  "key10": "66gp7BRTJ8jmtc1VtyWAAYgstf4s2r43DCeSXsEtuHTVNQkv2U4uzCm7rek9EgvCV2pv3ubs3yMZdu5imdwpjN65",
  "key11": "3fGfRuiVoP8NnVxgUwdEn7fTFivpj9r1jY77maMeCpPtVMbyAjNbcTkc9vXN68evKFs3aGPAVsQ6xWZDvJAxcNKb",
  "key12": "2UaXNJHbUEUhUx3KhL4YD4WcyYnz8DiLZAXC4e2S5Z7g32jhfSP2vk65wWubfugmjKiRtP9ARuzhyAfBueNEbXKh",
  "key13": "3z22Kk6TssxC348m7UTfvq6Cmo4w4MayR1XYn5RhGdWNGyQd2d8xBhpeiuUDo7woVuBGj9DWyTYgkqoCGWBVg18Z",
  "key14": "3hLofBuJ17N4roqYoDsVQtHxTT2PR4VsDiXqKKDxQnsRdoe7fQiqoVSPqMVUeJMCymLLSFTPWSVDS2gSfbjvi2jG",
  "key15": "2szMN4X5BqMffnYtfj3wcCoMJqKcee69TGijiVCv4x4tTiH9AXLKPJxzRApBEnMzARdcwYaAdeAJSKiEJQW5Kyfi",
  "key16": "3a299Y7utiK9sDtxEefPK5rnzXYVKq2kXLChJHL9GbrmkBBb58TBnDsUtaHWURBTQBqm7spyRXxriCCSVx36y4CE",
  "key17": "5Hg1cKf2Z971Dz6w94dg9TrDLhuxVM6F8JpRq135Z9xFqosAosc7uGFGvUUU6EvY3cfyDW4CqcDhgELN3GcX95F6",
  "key18": "5tL4wXAZH8p9asEAFZoVfBrxtMaVGEvBqTRR8rZvVbnNqxBcietDkeqX8EFWApDPmhmmmPGWSHYV54Zi4D3cgQdY",
  "key19": "4ocNpEwAxxWUJYxN73hf2bHDhjBzPhBAT7H1zksrYYmbtts1HfWZBbHyB9VVwZYRRPdbN5yxvpYmyxW6hB7s7qUg",
  "key20": "59c2DVqFjHcE8qQ3GLmUUf6hxbiJ288baTjRLoDpX8P5XDqTfWkKhnEFGD5JyTDoZ4WX1qXKZG5HbXjsxWGQ92ob",
  "key21": "56yW7KizmZTaKhgdyUmPwUe2zxxHiCMev3y5DQf6t1nok9y2NfXZdk8TjcAFeMjckMABzewffvnkF896oQyWCtzq",
  "key22": "5GXwAnDossr4F4KsN2p6jB2nr8zNfEcYdtejbKcVBVrLWZDDJdF1hvm1zJqxZPizJR9tD21meNwzwqDHZnCawbdP",
  "key23": "5HmAH9C4CFjEB4Z8Yp9rGekpP4bbKMJYzH8vtB6pjKXorjncsv1wLcnV46DNRG5WMi39LBPk4h7vCSRDLXwFLBAa",
  "key24": "2w6xRnJ9pcExbKXGgYyMbbhJ1gfWKk9j3NQt92MuD9Xsvs98Mhhmw9CjRtaTXTnpDsMz8rsP7zvM7HgpGQXnneUJ",
  "key25": "3vnuhYC4GZ16FA2qKNAS3dFsPB6Sp72pyN4k5JSk1T7FQ7Z5J17wfB19auvu7S62SeKeBfXpHbpCrbWvwjNH6UHJ",
  "key26": "39pbzN42QzJdj3oEN9fbFVMDPDjJRP3GSwALay56gXX6M9aodPPsLZFgixUKxDwDzsci3mqNRQbRHzi4ziaNMAen",
  "key27": "5UsewNiFv9hXrWV6ZAjUqdfzTUvRZRQLKJMMWBPVBjuw7NMf79iK9Y3XkkvvB8GkaZrBYqY4dURMdtcWmvU2gikX",
  "key28": "2CEbpKYVsFk1vnDKgVeGabj3vwFHdCCiSamdLCim1isb3dP4XRYYuVRrszh4nHjPw5MSSxt4MmXGFGJuApyJDChC",
  "key29": "4qQNZa1JzT8a2MqSmVdkJhhfb3BzQx4TfKr64NAxbsgLNhhQFoYShKWFbjBusKer22ThSwyrroEoh3zDQz1zNJ12",
  "key30": "52dw1NcYg28HXADjPGAErAS8HF9ZbjRgXv8xGCifJLnDKmeZopaMGM8Z7M5EZq3Q9eWK1A8GK1E2Kf7PtYBjDsnq",
  "key31": "5saEyU4YvwG3PHvuLPjdMtqyShtoyBherwfmZgaKU8FmTmN17g4btHEEkb4dqtaLDWL13cqYwHYd88yGw3SH9os3",
  "key32": "3VXxvPbF6BYHLwWav1oujpEzKpbJcaogzvanVJ4kQKQJPkB2i5wQTVCQMh9XLYJbNHKeXr5bC211axHLAwgdXeXb",
  "key33": "53SBxP3XGmpWKFuA5E8zDY7ASq5wZ11sj1p6386ZNEPjcM8VHvG5ShYnAGsAzEh24Z72h8FGj8CjbBYWAR9WZsNM",
  "key34": "RcVupSkttw9tjPfZArkS87gEk7B4iETk4LmgThmYiAVfMLzbpJQ6xMj7j5VuvuDEz3KHh2epDpoYeatcFHg8UXs",
  "key35": "2VmTBPbFahkDHAjk8YS61B7Pj9zQQF4KGAfKyfhHXGcneCfeMUfH5tAbg5bqKN8oBMc7Ckqdb8CiXdEWAThHWgbm",
  "key36": "6j25bWV8oks2Qp22LRHfCNK4qPZT8NpxYroCuseqEHoP5BaXRNthmaacXXqDvoADNZV3yxn7FrN8vMcYp6b1u5i",
  "key37": "bqwYuk21kVKkA3WhAAoC7qou8adN1cPU77HaeX3xNkzfov8CfkfiuLtuL8pCgRkuPLQ8oZEv6kFs3t1mCkf9BsT"
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
