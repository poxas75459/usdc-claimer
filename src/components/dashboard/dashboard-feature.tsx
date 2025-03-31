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
    "2wzSGzFGXXptSCyGVKcVhLSJLWaSGsW1eCCr5cAukw2FohdQCDVAiMDJQWinPui5M8w2YagapmVAARLc878NDVav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D74asNXB73P7eSF6F3ZAqMdxj1v7SZTxFLLNyj5Rxfh59Hx4aJsdBLKArSKoikCkZ3D3YK4U9CfuL2QdwfBJcCB",
  "key1": "3WZpUY67sqiFuTNuvNJMFX6YGfhW9WWh3TkzsG7RxW8MnVXDq1FX2RnL58sWbyhGjupVGHsNfX7rrEJmcgW6JHf6",
  "key2": "2JtDiHcRqwoNjekLo1eTNFLfdqTHM7kBjTXw8WXajKbfWLgq7ysnXPpwxPoogSKM6f8ywrw58Jg2ZwF8NZHr1zdM",
  "key3": "3cT5QiD4aGjYafze5Zt817tZ46NqPHPbrvFhU8uqu7g7bLTuxx48s2Z6niyEEtAjv9TBKDwoCd853vxA5XbGcKqd",
  "key4": "35XDzwe32dnLXvjhzP9quLtSrcMX9Tfsua2aUNskNeaxUsM93aFoCfBzPok532m4NBGESZnAnoVhq8tukmStWHqs",
  "key5": "gwZWEE9KykM4XMHZGEUeP9AhEGbs6axw5BbofLbmZGYjB5jq5D2nJ3Gr7CGPtSp16sAYEpqzV7ha7pkQXDGJK5M",
  "key6": "2eDYFdu2wBwPvFXbhg9U7AZyciRNJWo4kKyeJ56HzZeRRBwsRfSbQu7i4qW99iNmhJAFNsEhAbc2kxHWs2HVSBHe",
  "key7": "3tT77PaPtioRdwC6oVApZzDbw8PwmWm2kcRMVy3bcBUZTsewhHFGBg42Uckhrvk9LYrhUb7NoiXboEmeNAo2eERa",
  "key8": "46JkPqYAZZxAp8W6UMnWvHu4EQR1ZUX7JWB5irspXsvmFQZ2FbvrXV4mbe3LsyVzGPBnqtkczFDiySXb8kuL9LMG",
  "key9": "tpe4Lnh6eJf3Rx3gk5pQ3VNPBenDpxjX64ZBeEwEyaHXedh6RFE5NdbPdGgEm6gDNPvmXKhZGgKuSSnn8RHBvV3",
  "key10": "3xzmSVMKPA6N9BY3sDj6CG2wsgDwDzWjYfTkSjADRhqrVrqJ3aHtfkcSEQ18dUKYq6Z8MRX9Fb46kTote2SKq2uv",
  "key11": "5JPpCf3yzgS6UqzP7yarveM87BiP9Z4wvq9MVEZohtDQ3xzb3GFrrMj9dbGjwwvgeFReHxG7e2Ddt5h1A2XUDoxQ",
  "key12": "5Yfoy6ePorJiPcsNAbLWTnXXAdof26rU39hFHfXu4oRLvr3WzcfNdkLEQieELm5T5KCdEnXtsvnQCAMJf27SMqKu",
  "key13": "51ZfiuXvbw3zLduCqrNyZpQoatEY3Kp5LzCa97nkGh3ZJAqrNgVpfuTcNy3x3DFNiagPizJc1qhbMnd2VrH8BeU9",
  "key14": "46jYLJeZYthj492fnPCmw5iZCJLaB4DAEezRJZbCsbxXbJwGKPt4sco5wJYLJ86fZkqESzbeZxzvf9ic6Wwp2VS7",
  "key15": "4isj1cCfx2DZFemdZK7biX7fN5LiQPfWDcynJh4hC5wVy1QoPVSL6QHonzjs6amj5jHRAdajrZT4xSSZM56Q6YmP",
  "key16": "22mTL4C8nAMyWYNAofDAizBaxwyXM3sdBpAEqKBLWHu9FRuEo3KyN5rLH3Up3qmPSWmr8vna2Qj8kVNnVvYGZg4L",
  "key17": "2UJJdCRAPsMYzyQHe3oL4PohkbSsMF7y3vsUmqeRTSfqTcLSeBpHk9eXfhrihyUbk22ffcS1pwiZJZ57vRXYgfky",
  "key18": "GvxEWHRxipjwWTZPZSCrxCahcs1TauAWBau6tvKqcQLQkFBg5YMYyZkV2LPJy3rujZ68x5ahwcKFVB1XzGjsfbn",
  "key19": "39qmGYmALA9YvihQvJTEbLqVN2qy36cJ8zoxj8gy63yVqCLt6XHYiitonyjAZh79Yp4rfagYRR1h1XGJqp43AQ5y",
  "key20": "5eW75u13ps49jtAhszpCN9kGaX3njdoaC5eWM7w9bzVLmaLo9zDT2bobsmX3SvW3hJkgTMRQE2v2nLqJY2rFAbAN",
  "key21": "3ENcWEvek2B5bPXLyPtqDQ6JCJ4pgDjK7rshgEnpXqLASMF6Scw96Lp3fqeCmn8Hr2vTufXGiT9U7brz8YGcGesw",
  "key22": "3B2y2C4szGxY1nQNk5UdKzmbUrBCxBQumMz7sjpNT77QoS8YWhoSaKD13AEMko2rEVQDkVyRM2o3sPJbKvQb78dW",
  "key23": "3v6vwpveur2YYDQ7V2rkJh5fuAoeAEgdkqXYoVjZxnhS5RexMSBCiPM1h9jRgUczVD1Xpkm3bscAQfjsekryBwhv",
  "key24": "5o6YHvST3N7yGqzkbUetRu5KU1uUT1HLwQqdmrJhvQWDk9SosSqvwRr9aY2AQ4MWGFw6oBC9xa1SuDVfHjKrkLwC",
  "key25": "5uv8LTbDcAabuXgRR9CaDWbd4s9HKLUdscuqqR11me48wSN8q3PAmhuMRBXyRXUSap68GT5CjnGD765vBRoqDc5j",
  "key26": "WkLLndeL3VRp18QR8qDxRKRxfNNHgZk9GQx3jjwK724R4obFg1MympyEoqmmUL8W1bAvMT455XZubsP6NkRW9ay",
  "key27": "XXVcp7AQWKdWbitXhfzPFTVA6HDXjt7fpM7H39uDYfPz29PMdxPcwnmYbvaM5dNRpeMZ8mbRqoGNUa7gThBzMxn",
  "key28": "2JS9oVN3UiPrQKZAhGQYWGWeZzvTTzHLe64CNDNeCsQchFfgvLRPhGYq1Bxt6JsBiav5RQp6Xj98W1U4dxyuddSr",
  "key29": "CnMqat9YEdjs8Nw57ke1TbrnJZjGEFmuY9hs89yhjxj9utypcKR2kX9sBpaNBHnFsu24j3eqTKFYAn9ZkSjBP8p",
  "key30": "5T9KcQRvVgdb81ibRaaq13NbN2Cz2cFE1kohRMdyXy1QJxmebt129NzXtEJ4kpBVGp4G5kDUX9vWtNhdp5auxZ1",
  "key31": "3pBbgwb1bMj11ztGoUoqwkaTWK49JRmXBK56er4uPA7xJWqMR6kEJZzpDCcS5Xbq9cf2B8Knj5sqmACyKeUMLQ8k",
  "key32": "4zsKsk1sDscMcyCpFdk6kutHESFs5EZ2onoRNgxGJvD2yri2auLh3vBen8HPKbGWfk5x986BL4XuZxzsFbkx3Hfe",
  "key33": "qvBftCJ81q5LFqUtcCvPZ1Tfayvv3B7h7og9JNwMkGgZYXHgvAFmDHCMUqfQYh1VJjWYzchdpzoPXgshDUAsLRV",
  "key34": "2xPj6ybmxSMLp2S7p9SmcRxDtJ453Pf8zqyRCGA39oQSDDDVfCAytYfURQWZLYDE789P16vSAJu7rLeSDsmGxmEZ",
  "key35": "3oKvzNSqzkJ5VNznUnborXxdPp5z7V3ZkdirvNAWfP1VznXSMvt1Js3YfpQvoMJrV1CjBmVFHV84v9kSFqMuV9g",
  "key36": "4oVegd4ZKE6JxC4vdNYZZvDn5KStjQNzUj788TwoQQoNRrQpjG1ZVigMT8Ca5PvAzap48gL9AQtMvD27NCDLHDeC",
  "key37": "35yYwQTEudd31eM4MUGZvc8Ppw3jfjxTe74WvfpUEs3Qo6Pdc3YwVjGXKDVzMqMKrqhxboE1WM1tkb8y8VorKRCS",
  "key38": "5NzHJ9h8v6wV7zbPwNDnNozTxsV3p1LKYoN2MvNYvR6BYA1ZpSbCYNLhk9sEG32Kw3wutAthL43uxQFWvTS6Rbmt",
  "key39": "27A8NtQJZFtaAJ6k7ecgDGoqESKXoaFKjuaRdrTCrELPfWL4B2wkRUS2SzKWuXJv5uFnqrJthS1tF5bpBgwWLEWq",
  "key40": "3XEzYceNgvDT2Y6ShGqysZc9ytL27Kets89GZwvYfsHKqiyiFM8XWwvDSEDwPpq9dhXP44WfdCserPS1LLczVMRu",
  "key41": "9da9bVyfUtgJSaTR8bQPUWZUsGu2yRgDrr2t7E61mCwQbBqwJ8zsEghkT2DTu5wcq1WF4MWWYwDT6pAGcpPCqba",
  "key42": "35M5eRGiu1r5vArEatHQzHkzrPmKKmaWVP3rTtjfZgzJz6pBbwuJ6KvPFwtLKsaJFxKLmwTqR1DvteSuUv2bMnhV",
  "key43": "3muSnTWyEG2P6AYHMTgQy6hC8Zqf5svCvDYN1xPGwHWMBBvCisgRXicxJKEohkok5X46gdi97hsAbYw5jdyeNgGC",
  "key44": "K4GgDxr37cErR7xVDKsjZxsu1fgorwDb3qmeymBeA86ANrHXwjM3ydrsw5eCE9Kj4YfVJjHPYuoUjPBZDwPXkEQ"
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
