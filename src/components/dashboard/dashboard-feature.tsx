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
    "5CZfpySJVXewotgvScsWnHEs2cnkFa4jws6r72SPZ5HXZvVoumgBBik418Ft8yrAdL9Jc7Tcepey3YHTVnMc7NVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JxZfoBhdLcfjk6MSYSyXQUuQu2TjcnNAHVzGRBHsH46MXYQc25Nj2EvAzqM2j6EwYFXjUpBr3zxQxQTdeSQzUTw",
  "key1": "2Xqx72BquP9MJXCzG3ienEzUUqDuZPzNm4PfQSR4GDyD6h5jbrs8b9pzFJLbdBAuQhvqXPJgBe7a5aLUti8PWj8Y",
  "key2": "5K1QvS8KqkT7R3UUKVXx326wgfcgd16DXijVdu88Roo1LZ3TypAQySfx6cvRGMUbQYFeXEaES6ygUQRYqC1oy6yE",
  "key3": "e4n5vTFtJggKu83PAbCmzFbsHSPFX3NJKpo7uC5tTCaDPUKieDi7WBSDhWqCws2UPfw6AJrByKjXqmRUZjfaAJu",
  "key4": "3f4ks2nyLL3iUWuPtm5tEN3KUHy84Fto6WTZAqX1c98cdAjKLZzFJYK6ExRhScguDYPhqx9zt5w47pUZMDzFa5j4",
  "key5": "2j1iz9t9yCPm1PHFpke7bRvdwRk7JbEivYVv49X37EfxcaYV5jUdJ3SzdkZsKM1eHouDPUy1c8b6ktf6XpKsuGfN",
  "key6": "3csygU8s1CBkNzPr5xUCMeKwCUjuQ4PNMzspdKuHgLfBacq7YiQiJVhEt1k4JXNCeWwHfsTWihfGihLJV8s9J4pp",
  "key7": "gRy3NfZNKLtTaMccvPd4JfoAphJnSHYYi7yXysiLvQAprgNdgCSQWGCTD5wm2uTGXZkegy3Lzb3Gg5V71obHqry",
  "key8": "47CKYQvBhzdHN2Q6TfiNvJQvTA1tvXqFF9iyt4tmreyw9uF2YehTh4ro19wCNWT7nyXogkm7rGBhjrUS4fEBajCC",
  "key9": "4FWccgqvZiJXFJznADX9gu88AU7qWuW69C3QQj1joqA3uFCpjiGWVLqF8noQzqryuBCteLDj9tHkHk9N88XjNZs3",
  "key10": "Wy3YwjeETbjzGPHjVvjjexXo5UX9hUpVJvPfGEzC1S4HY8NNdRh1h6AA7Py7Hp4fA9GNUi5UbAkG3JATAh2aknR",
  "key11": "3BUi4PBw8VGBqe4bjieWb2XfdmEtjz7EaLnREe67AbrsroqSYvunvwjrehNi8cbtTURsdkkBoUqyYCEfZaMyxRvs",
  "key12": "2pL8HSE6VZ3aHmYF3N2xGK1TtCMrDxmYmDzxhebZrQFQ1cEgcKJEp2RxYY8EfgioXidS6s3v3v2mFnjuuTCcj2AT",
  "key13": "jA5YRYff5aTU2bKPg91fhmaEVw4MmQQuCEngoeun2AoWmQX4dhyT4ghFcEuqiycguzEsVQ14MM67cqE6Kb5yq2t",
  "key14": "dPoHNj3CdGkxFx4T2UeeTpGxHRE4bVVrqjdrqGnDxPq68mF8p7ycb3bW8YGyuGFmrYLqSenrEx6c6E9w9eegxhf",
  "key15": "4Ei8DxzyM1FAGgY2HLiohSz8zV5rSirbeF3SKvRKJo1UrwdoMdgnPmiwuAXoTmmceoBUhYzudhZgURx6s31WkdLV",
  "key16": "3NYM96HSzRBK7kGLCPyVNgzL2JSK9mWzo43JG5dMdRDZS5yUcYsp6bue1rs3ZfZMhh18DtTALVrQB4TTPnp9JD6H",
  "key17": "2AVX4qTTu5ueER34tgbjuvvbQzHHkdSHmULvS34TSs2KMoMtUz4wziMmFE9ucai7hC7g43AiMGhucp1hYmYsro9x",
  "key18": "3cp9UcwjpSwKr6hgjpVLSCmK9fW3HagAqzbRZsBEzXbCKowChefbYLqMb7RfVd1VVbGHj1b9ZM2TTnta8SCZgWoN",
  "key19": "4XgQpCjgJVcNpnrAXhLGH8JfueAWBKF1ZM2tVNAFBbtaNUikfa1bfFYtvpDurYbRmrSg9fqrYhzfGPuSVemkyLS9",
  "key20": "ERoZYrQEDDxZAbXawdPWAseiJi3Ww1hXKofDcTPoGAJSLAcUVQXEZeDyGrc1qwj8esSycRXhMZJyND59WzmDVye",
  "key21": "Kv4nVS6377byhu1Uv3ndHtERrPE9jj6uKSSRRoBMZmQp1R2cM5g51Mmr1SMM3YEV3BP3TPokgHwMfPmzwLY4wMq",
  "key22": "2dVUgdgaoyMNwPaso4wP15KAo5u6BDtFVzn12TEA6woiQeDF5ouKL59YNq8soXJwQTfNikNqAP5FmjUSPsB4WN3K",
  "key23": "49ThUBKjug83oVnPJh8neBmdroeQDsRMojMMa6quVXZesfFGz3cDvKnF4WmeLRdAxTSC4h7mGP7wVtbhgu5CGdxv",
  "key24": "2EF9ADaLPcESefkXvJuxyCapxV6e3MqhLWkqf8be1ECpNyLadna68u3FWkDWcnfpxtxVg4gAeS82GSusG6psSQFD",
  "key25": "5FiQkuXgjGqkJjr6yHh5JUMQQLSceDwVrPAjRm67hXxNHFPfhKbkMVBUhqgdrYnNde8vJRNtsbG4eh75HumCGdBk",
  "key26": "3WTdUQwLPusdobA1MzGbBW4S6NpR61eDZSBnsUFtGULPReW28WdH9uJhVirHPKBS8EjddWBHZDYKdmV2AiNhj8cM",
  "key27": "34cq2q4n17THaTuRhLejjoLgLed3RTk7SQxNcFT7gC7YfKemKGbHfAuwmZzJVvQJHaPMgj41Xyeu6WZgoj8W5U4d",
  "key28": "3kWamy1s6hZkWeLfqvJmGCpHnwyWrgR1yFdJVZBkMWZ3ARsgaBcb95YG3LbqMg98xcxXMy8GgSUNMhtagVytcZBr",
  "key29": "3aagYqFArW6S9dbex9cmBYXZP7m4n5tJh5MBYZjy1XPyyuU5559L1Gx5JSqBYDniHKWQMXJQG5atszkuBU4nTLpB",
  "key30": "LY36Z72W1x6mUDzw1sAGxGYtXis8RssfGdK1bpnAXD8cZJ77Q6jzW4QrfBvtW7duB6VpseJUn6PEDNYaZKyJcg5",
  "key31": "5ma4yJUQUDRECE8MzssEJqpcWUauNhGaRM8nTGrZ2bWm7tmWr4Ngq2Ze6DPv5CTnb5T3cXTpJqU9bpCvjLGJwuEB",
  "key32": "3sQMHkjUBfb7n8U9eig7At4vTx6dJ32n3ZFmdD5EZomGiLpjuJ8qPNJLNxwNDV1wEgq86ezJgfKUmudvGRmtYnHY",
  "key33": "ajGjZyyYVSoQG8rAhp2yikWLdYZDzuPFUpTJFxpbim4nr8tQWxXztoSofM1mqpB8WRZktEamRu1bCH5oWgpMwc8",
  "key34": "mH4FBrKS1N1Ybht8nHbCeueYTvfycPRzRGVp2msKXZ8WG1DTVqeDT1QgmuMQaPLhdH67zXqqTbHAkZosrAV4mY5",
  "key35": "5uHr4pfDjLC3TtYvSJWqUTJz7D4fucW8i5BRH2vUUeewj6nP8yLtqK3ww1EnAzpouVRnRqJMK8n7UwH3T9dwNwDQ",
  "key36": "3SMVvCZQBHtRaZZitM1RUMxBZHz3xuRTR15TJEBeCZAApiyHJVz3hKkb5XA59RMxy7bAtAFTnaNxcgTgihEErozP",
  "key37": "4YDmELnMn7Wc7LiBJ4qwNub5fPjLsx74VFqrHbLxKnLAZiJCWbSLdL4QCmPWoXvfzAGCYjK1MKsrkU4N7wmS9HcJ",
  "key38": "yBP7iz1LAiJ2mLeoA22HRpTUreSTjQozLfB2MqsjAyFvDCVMZeRjirGLcNs8Ha9HLj5XjMta7ampaRXLJACAEtp",
  "key39": "MPbCrCG5WMGYoYhbPraS9QL9esA3RMrJ3HBV4bkMV1VEJs9vBaBmK9Kuc2fRqAXv3o8zsWneqR6Jc2qPVwXme6p"
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
