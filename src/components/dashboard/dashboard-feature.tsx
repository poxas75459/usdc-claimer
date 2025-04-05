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
    "2cUuCgSogY67qBFsj3iHrcMFHAQAeihtw5pZnpo9KPHaJwEd1UD8xEHE5Qq9RHYAoCSFbYYq4dv8Dnmv9aidQEtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JY7us2gGwjTjq52ACokYsyVSxvNvqJft1SpRce5v97WisLDYi1j23ZiDQMrHKWbR1pAevxeXTB7nV5DWATWvFLS",
  "key1": "3dYBRTx7svgKEAjVm17FtnhmCCieAqP5HabqgeP3rf1i1xR3L6V9jfrh8odu2omYvhEDcVVEz4G5BKMsrzBGdPH1",
  "key2": "3Sit3SCiqRu1iiG3etoHWSZKUrncBK5J8ryLTzBtTDmtxVSQ9Xvwi3fC7UubXuVVgseHHV6nNQe3jvkx1zFUNYA6",
  "key3": "5m7qyGvQ5pYMfD8rZ1wGPxkAMhNRrenoCtVDR44WsNBpQBHJLQJ17rBZ81MVmAav4Fk1zNS7vzqre1HKGwZkzoBd",
  "key4": "5fFmpVMe4wJrMHvK4mT2E876z4F3bYuaZdTf3b1hhWYrYfyKbF3VkxzJ2QMUYEzF2AH1zuWJe6YBkjPViYYi2Vze",
  "key5": "5GNxvYcWxnUrpWZjEvFjVjSFf7sTnF5Z4F1NaHWCZ4rrHcWwUEMh6TyrrD1pyw1ULtdvfiwdrpJkVs6iytFsCEA6",
  "key6": "48XPNX5qcxur8bXE8wmjjNrHMNLyN3TMg8eEHU7eVsCRER3EcKs9dTbPedJp79BuEiVutXAT9fRmk2S5712mG3xw",
  "key7": "34WE8paHnJa5yNmhPxyD9oGgPqFYVXC53g4GNB6dn5WJKktQg9BKtusiQeXPYQU5rSRUyV6fYBmrPXGEXZaRDSpL",
  "key8": "4vGikcWsqhZXDFbws4jgJWmj1L6miZ1Q8atn9CxLPVpN29GsvcYfEoCuRNMrG6eWytjwrNJupB2orTNheS4WQNQd",
  "key9": "2Xmpc1KJKSHD6GqZnC68sW6NCh26qgu1ijEL36xeGAzqRceDyYK41r36PRSgUWGkz5Kouw6LsTfLiFGjnqEfHfcs",
  "key10": "2xD6RnnrxuuGfFBAzHvX1agTFZrGpQY8xNzrctA1u2F3fU99QrPTH2N2smCi7xHbmKvnf2gnXyXTnZmBSLKQxCWG",
  "key11": "Z9jSaJypk3oby33uajwghYaAgQ8fuprniTSXzdgTgHynHnk2jvt5MbV12g4KSmwMjZYLqoMErCTzuhmtBZ8CzsU",
  "key12": "5DtDsC8ibe6BVuT7akkJ3acWrw9brTDnbW26vpiXo4bG4v4T4kpEKFedKtvCRdrz82KKbQDcdyxCinCmEcMeweaE",
  "key13": "4Qpk4uBDyBcWNN756h1HJTheogWwbFwqjtUY3vMUdVmnBkhHkTi8Z7X3Co5YeHZfVYZpFHDnvAgW7rGLAVDGz9QZ",
  "key14": "5wvRH4L7Su2ZD58447drxwAdDQx5BAtP6CBSNp7qpHqZyhsbp5ktW4JPLt21mXjPdTi1r4zu6RraUD6Y4wDbMub2",
  "key15": "8piavrVZ9LUj4j43FTR84aqe8AT3GZD1RjANUrdLE7Y5gCdsXLKSzKD58NyDNr93nmHNzrgRHXWSgdA2s7LQCa5",
  "key16": "PoVHxkZTww57B3uNm5i4CQbn2YVsM6de66eHnnAoYBxVnVrwGXVtKLA6sfdzWc46qW3qv7fd8DLdniaRfAwNmmP",
  "key17": "4dNTJN4gKd47yXoSJbcHfgfTovRf3Led6h3YrWTTeu51qNUoqovgoyKhLfVxLoUPySw7GYCoSmHphEnTgt8zb4Jj",
  "key18": "2Wa14tbbwco6TxzM47y2tyn3zz964XkzCW3Jiuije9vZCuJERSCvMV8cw2U7qtfpLg25VDHME7EmLQpAGKq6EBMG",
  "key19": "FhdjERKsPvoyfSBnFNtkwGzZvh4MCrithQ15oKHV5kSurE69u4ZtD6PA1ynrX8YnPmYGumLhW518W1u24Ufzkh6",
  "key20": "4xRbwZiMcvg4ZzKPGZxjo2rxP4xaM9CgphcotodngsUeUueYVteGHf2yZ8eBmFm8CfrC5KsUknB2yxcd7eYiU26o",
  "key21": "5tKCwfW81DxKNgz2fGbLBhyFMycL325RHhrp9crQeuV5Mb7RFvV2McpJjYJzNqv1NQtQZ9h32YLHc3qY3ZLqc7TA",
  "key22": "5XJ3yzb89jvF4Y8qqTDs3FTJv1b3uJGUUtfRoJxeHGuFbMegGDdEVF3qm9pNND3ptGXjoGTNgdiqJLM2Gd2939Q5",
  "key23": "uhPjhr8xbhDaB7rffrhfZRmj8iUu8G64hvW1ubdPunKCUSzKUfTEHBGvYpeC77448MH5HyGkELbZJKtcEjuvNdM",
  "key24": "2quAAvnetPjbnzzhAoXCiazzbNSGGBj4WAEQiXxmsVUrC6C9XDwTJgsUijdGMjc8CWyrcrazHLs5QUYENHLG1FSZ",
  "key25": "4Vuq7dMWK6F6Xe4CcpdR7nEUTR1b3aueDg8JmjgdTJNz3PDThNR4GoUo2GBcWnkevFn2e9NQUAhNhRdTtFvTZ8h",
  "key26": "hrGoeY5iM6tE1c99mNw5kXKskfeuBEvgpLx1YkvULoiu5SGwNoZ9JbU5UoayfFRDAVLjJcyawHmvmbQyUB3HfeZ",
  "key27": "3yfdjaS2gva7UTHyVBctrUuD4nMdocZ6NZwr2Jvqto6FLmbX7wy7ZtRaR2smsoyVM3e1pYYjzabp4oqqhUaHLyXM",
  "key28": "2FCTwdX7pKTHVvBbgMHVx9FdUHQczGDq6T99VGeKm71y7qJcrBnMiVhiP8GtQ67WXNiVPSJ7Ms175cnMVob41YLs",
  "key29": "5boq5LGkvP33MouPv2epan9Tab6KZNK2mtEV7mat4FTigBrJiPtqeZDSixF5ccpiR87xSuAGNGxiTv4ee9Z8Y16E",
  "key30": "3QxBNoR7j3Y9n22Ts6UxxuuATgwUT1zU4oL8S65fX1GcskSKWb8gd6cd3braBsUzNgrDSDVmNp4npo1h1kr75K3e"
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
