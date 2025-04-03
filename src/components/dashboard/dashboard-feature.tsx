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
    "5q6Eu4mkymWQQPEn6NSNzhwEqJkqYKnbKxvV2BbiVhigeSe18jt2ZGLRgFaMSf22a7sLXJmCRwwr3gHWJt2P8mQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5reccM58u4nsh2EfqFLYPtcMcwXY4dot1Pkzbren5PRguFN1jTmaonqmCrda1gBUX97EEV4VerkLEb9KLxtV39KH",
  "key1": "3v6Fp6shFEeaxYwip6U9jXHdYTGkKfpNv1oX9hQXhbfn2Mf47Gd3sQmse1siGnfMMGAad6HoVyD6q6VBfJiW4Zik",
  "key2": "4ZmVQQU85ZuHPg3XpLXkAYmQgVDVqy3Ayapue4dALMqyWDs6oH1eowUpwocMyEwXQVAGDegp5SEoRqkq4bm49EQB",
  "key3": "3NPFvQespFLM4ZtyBwQfa8VHUK1Qumq4wiGcfKLKH8Ar5G1LJ72V9EuPjeVfCF6AM8F6cha4XvCsE2wNd4gWLZZ3",
  "key4": "P4Z2B9RA6dtJ1nXug6oFisecgWo2KCLYSGzSiKkFiQtiVAYowRAvKULT6CEKMDRpKVkVSX8DEvThAoJax2cRVX3",
  "key5": "2HNum8xyKPQdg4BhH4zJAKbUaDPmmUhemmewLNdXfpAPkBXYAsWGGaRESvjbYYo8qN9BuJzgbxJV8yCKnLefv5vW",
  "key6": "5Cy9o6TP5DZb9LPoeUb93BUDVDSkEwtCcFuxTrui2j8CLXiUmgnQoUmaKuKYtEvBmUVh6Bk4and5Nakqsw7qcUiF",
  "key7": "5ePJkKPkCeiRjnbob8m7uYuiBa5LmneemxLse4WMmYfP1LLV4kmMMYKxkYb8Njg5zHJsT7AQYQuWdWPGHrsp5ZCk",
  "key8": "3hErEMGNZnmW1R6QxsnTZq7F7zms7K3ho1arV2mMbD1JUzGdduu2rucdBQm6mttyk3GqL3Ccgu3EkG7cZT2qMjb1",
  "key9": "3ZkLqbNszCcETJdXHXhzDugytSGq2tA7vhrHndzPFdXkXtomsv4jM4WYVyjq2nW6iYwejtWvtjkv7BHFHtK6j6io",
  "key10": "3A4Un1oLkj5D6CFxiBne51QWVD8y1qZ6UF54sd11vaVRQjwmpmKgDhjGoz1CjTyPhCCWmHQdJxg4K4kTyfRydWD7",
  "key11": "4HteMjLnqJXQSt9JvHT4kWVDvpJwFUvvNQU1XrKyVVWSwdRyJ4h4XL5oAcbkqEwZ8BaZi3TK88Yob7MHRJxiSgGk",
  "key12": "5GCFB6GbiHfjjHVd25q5yTmYk46NgssXUu7Y2sDrBhonsED42Fs7hqbsV2xqWBdqd5YcimzgiVCdWLXgtAgxawZo",
  "key13": "4SF3qS4wLk1g4w7vxnuu85FD4KLamxqg41bTktCRia8x5vtQApwgDJgvpMp71m6kT9dT2ipY8yZTiwyNYKyLvPCV",
  "key14": "AEgH7JLhwpyKaGkPAnWZnqEpo1qyKFsXf6pWngHc5g58LtEGUFBaFzcSsMNEPPLCord3d1si1Q1i36Vi7KubTbr",
  "key15": "3nmciyYBjceAeTqjHNKmkMku649yCmHYiFomHCLR2pASXtT1K9BNcow1QNCCnYDSLP3hP7C8jY6u2QWRnfspprTQ",
  "key16": "5M33YwGNYMo1BNgPefAEwfLaPyEKxaPK7XAo2APauLSWBTSpnyzixXxAjayyrQwGE5sTbpfaPmtZVN6RmMJCFqpF",
  "key17": "2nuYycFco17K1StL46ZRU7efNxcAP5aV6skZuu97YpJ5HiBBtCUKrAycF6v64uNt6Ct5A16p8zdfaw8XEdw8af6t",
  "key18": "2sa8CAFrZDiYbCfLZ5azvkK1bbwNj7DfnCWoPaJUvYLHkmGUYdQ5mNFKFQThMb2PrqVCiAbBFvAHUXNRL8WwguTk",
  "key19": "Cwj8Htsxn4uFgjWLmqxwfUW12MT4TFqKgVEcWpREwArhH4UzJPrD4CTNCLLaGLcojAkRkfc1tqb5rfx4Yk4Fawo",
  "key20": "46s7fEr5VZrtSkF5u9zR3rU3eAdtckRXs4uiJZh59gpUmECAk7rSMxm3p2i6h2hbThyFoiva4WbVezzTqtbbqxXe",
  "key21": "2DAVh47eJ7Z5vCTjS7vvxAhQUYzDzpxEFaUxKvVLMqRysLwertqsVn4VE4aShpzLeB7r7znFwQLc7o3RtnCvGXxm",
  "key22": "5ukjkZ7uXfWsTcc4CCr17GUYTBFJW4wLJUTnizw9JtHUxtD4tg3EiPWrzqc79M3ysLBo5rN2bWx1fmqWjezT6FMn",
  "key23": "2i3KBaV5BoyMfmsu93PK6ThDasQ7M1XLMZmtLocDqQ2FUmxXCEt6R5yWDpN18YqgxrmuyiqdPzx147PhHNdqbC2e",
  "key24": "35r3RnvWGvWdjKhq5vf3NWGHtSGVcJ8aaLz3wkwN3weEXWH7fKHBQMBhS2UwJ11fpyTRFoSSED7NxJqsamSNMzvV",
  "key25": "2oG9N3vTB9gaxWpxLCFFDCwYHfuLZNa9vgwVBtkNJhErXLe3FkmzZFCgerrjQxerVvWehE6XmMHx1uik77AVnu8B",
  "key26": "3X7zrPnW7gUrR8AEsH78m8GBaxTa6MzAHpg2oWzm6ASBgo3CoTFWQvB4tm4r2r1dwk5gqEwExp4NBPMPk3rCyyVm",
  "key27": "GEDPGdnnVXgASaEduJeL1UNccET3tZaNwRHG8pZDM3ADZB6mg85Vgfq5pt5NsNokMjBNFtH1LGU1t7XBPoD48aa",
  "key28": "5GxXjgMgsoVQ3jz4W4SHxcgEyTZnzoWCga89vqztUGEKQN55LGuFbW4jGEybEWcYd846MWZYMZb9TKKtyX5qYJ8Y",
  "key29": "5BYeDs2zKiicq8TQzfd3Kmu4MCQqpN5YCDHr1vPHXytJ2Zn6GHeRtmbNZbQb1AnugFHHSMNnHLGco98ngMD5GGoy",
  "key30": "3SkhYfEwuRPFupPC3QM9PAp2oTnDt5P47rPHR4k7RdjjjU6gYbSELmhmcztvV7aGrghgVryNTGaM844EueQM4UH2",
  "key31": "5H1jbUARfhTxYiKhHp9AdRjZKmmhz38A5zfuJa9SopDhq96PpVf3pvKVEWALEDcLpQemWHLuf8wJvpUzBuPJrweH",
  "key32": "2QRVKFBDQcR3fMv9yTtrL8jdRRoEzHKVZCzMSoqHsv7iat6LWSJMyRa34vUfJWpuaxvt7MofUJLVsunmPsxgdFyn",
  "key33": "2SF5wKXbrVQj9DeR8viRHNyfpnRUjqQ5Hx2p1L2rTBjnQNweLwjVv6NUC74ymtBR9QjaxSq1RSNBhGh1xxMQNV5H",
  "key34": "573kpUQEys5Vr9JJ5cLpBUza8bjB2YXcAEWHbGPFvejRCgx3scLK4q5rm85ekB3zp6LvBw6fWHLvCgPjA3xhTYF7",
  "key35": "4sP3QirknoejHVibdspRor8j7bRUZeG2ktcb7VpTNTD5AgDJEYEYrCtde9vabZs84qSU3c4Z7Bfn34pVJGm6XnBc"
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
