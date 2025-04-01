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
    "3ENNxJnLGXq3Z5oe97Ym4rXnykeLqWhCymzqGtKX57jb7QEbUhnU1ejaqd2Wyz1P9zE46tkSg6Nn63JWFZd8iLTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5svYEZx71r8H5Fxaxdzf3jiGUQhczgNBSuMrJuzYwJN2QUX8EouUTorSzntjBf5G9qqQc1KsfFFbTGvMMc6pt4SB",
  "key1": "5nYZs9R4hUdS1vQqPJREMpiYcEKRbtTkMcckzbwF3xD4T91oddpLt4LJXaXFYHZf8hnmhNMiHhycpgUYR59ZT6Kj",
  "key2": "GsHVLuLVPbBtenDh9vmGPtak2Z4b2qvzmwM8K5FFdsgYoKmFfewbjmZmbsbiEKCgjnSzaNEZmavB2uRv2Ft2LHQ",
  "key3": "4CRB4Y4P5XHD4dXixWKrD9niXvN7bFmUwonZRzVShFHMZbKRaX8iUDSPackfZDuFb81SYJ88x4bVD8D5r8pBKxKR",
  "key4": "5WAJFFUkmp2vAk2a5ameZPv4KtvC3BCPsuLXwEYumz4dnx11SJDnoE35CbyadMKZRv6cbPhA5oQgNEFJsQEpLsCJ",
  "key5": "VSMbEGp2vXayUKye3Z7MMujf4qaBZFaQ2UnSbBrG1VfiZEkhWbvBFrqshynezKFiwsH1TX98zWUVrX6T2ZC6i6V",
  "key6": "R2TqWhh5c2TL1ydRGnmPwPArpJbd6FJKJswmyMpX4XuzWVRsewTXzdF4xv8wvdSWaYXsFw6pR6rqfHjjFEaZCzo",
  "key7": "4X1hprvnJkBJTmK6zz5oG7u3cFnMeDeLwwZr6KgifjXgduRDdM2B4hsRUdWgDT47xLoiKBk6ordx5ReCcwSbY8SK",
  "key8": "5NBqoQkexyQJTXSHnra5cgBsVaNsaPU7EWXMVgewpxXGKhLvC9VqhXLzmWci8USqmMsCtyiheYBw6VN6FNtzufJi",
  "key9": "3XUiWWxRJ3oGzYBcXMtTggdtXtxxrBPmvbmjbeq59SNdHp16utu5vM2Vp9uSK53Pa4UtRepmb1EPkxXWL4sXMiFw",
  "key10": "5KVWPvcbc7BAvj8XdEhRFG4wMaisnttNQD6EJcNK11vcVCmF42a2PTvw86q98Jt9CPhaLPSVA1PZVA3VTz9777xy",
  "key11": "651aRH6YdBc6NtRN6PtRQoC5smZ6YMf7ZSn6bovZ8u3PWsxWBSKfjTRQNfDM8oBu3YAaZSwJZdcSk7Rqjn1U7KNf",
  "key12": "3FpxE1GBQuAaGR84mP1FDuikiNjzuFedvD9vjcGY7JjerUz7PdUkXcGgbjsk912fndud3NxV5JQL9CitJoaBtUAJ",
  "key13": "4qKG2QAQ7pUwaKvXE53NX1kxJ8gsWQ7AfgUHo7Vs8iC69c8jWqdk2awe2oUQSKKtgBmxAc19ScKkTXKERzniqYjy",
  "key14": "4F6gkTf2v2Jn5pfSCE2z7Xi5ErAVnX5WVzuLTYydk48ZCUyKSRi39KgY7q8Fjj65h41a8h1DLBhiJrmnK6XShQHH",
  "key15": "3wbVgGbdkCtYLFw84GKKrZEnQwZHmhYawqeVs9X4Gghrc8NW7q6Zs1KByjcdZ4V4agMGaSEeu852AEc1jK6TDDG4",
  "key16": "3xK7jWy1jzMQxLScxhH3c1CzF6h3GiL8wwFr4iDS2AWVSZyTcwfUEjRUJAky6TkpoyAwugNFK57oKcCCiyW1k3cV",
  "key17": "54B7eyxPUNiMERkPqPFCjtZjViw9hynP5cGfSsBfY3cc2v79EXWZWjk5S8UbErY5fCZqZ6YiwWgct1SkHYQseSg9",
  "key18": "4o7enJK4jd4ZtkUfx5eTZ82Hjct8QL12W7si4LjrpvgmayaRiUqirDQjWU286EsXR1qR9KkqzX83PjENMk4EkJMP",
  "key19": "5a9HX6nhqaKMea4tnXkWmzS9cjyqKww8h7LZ2c3z262eeJgTniVxYriKFdd1h5a37CLQwo4PKBxEFuZzbiixGwah",
  "key20": "2UbuQkeeY9asjbq8AtTCWdgizHvvJABQLqUAHbu3mPAHLxHJmhN6AWSHq12SGeV344ZGyx7EQtnbTsSW2cRSR5kW",
  "key21": "21FKCcbt1MpGeSV8iikLKvojwjVE6vPzSy3K6FjW6V33BSwdLtuqAPtypADLLZoiP9NdjxwLKwFwgh5Wq2pUemru",
  "key22": "4NNEhojc2A1vahG25nPzsKozuZkjkYDwPrMNrZ1vSEcUxJ6YruPGrdJEjVPswrzycKAjxS6jE9PRYFHoVrRXyx6Q",
  "key23": "3y4fpNsiDvx87vED3uzfccB8UheXfhv1V8GMxmxMHjaq2wDwc4KrwWZH48kW3J2PtvqVZ6wxwecuzvUMZpNGyvVn",
  "key24": "2NSf4Sr4tDKtFaU46YXaLzmGRnFzDF1SuW9kX1hhSPBoa9gKKMbycHuar9zb2HXjVTWnZ4Ag1qdWg4G4L6Rqdxf6",
  "key25": "3VfCBUryVbAzEFXrroFHr4h8SxzaJMexm77CVcxJeWEN6soDiWCBTNoQFLLxFpCWXgek4KLFX3AWuBRA6cVZSPTd",
  "key26": "sj1GyqMX5e5t3kWD95e5wVY1HgYNRLVji5PDE6DBkH5HE8mqLPFjnLumZ4rm9LJgyPiqkG6LGhDXEbsCHWHCU3f",
  "key27": "64rTMPRt1a7ZcAZbJjRcCYddsX8BB6qijBPNaCYcwn4yKrwJk2ooaTokjuHAEwXWoL7B3MgzKBZZigGU6ETa2fhZ",
  "key28": "5SeWzbDwi4UHsipTRdBKvnUAQC8uL4jcfPMY1HeWm2uycA8MuCAeiyjiBVhP7dcjRZGkcZaAdoY47BxjZBMsZf5F",
  "key29": "4MnrWAvf9HFn7bGpyMpye8btLXCSXhj6wVHDSPszFD2p1vsAesrxK1aoqM6HGqL7EoWBZA9HQK5mdVTPFjjFKALh",
  "key30": "j2xKRXhArxYtikQa9gmUgBcyavmA1722SvUMHiCSYsjW1VLqNwZHh7gimdj6Fse5Qoqrr51xAhvfX2jhBn6AvzD",
  "key31": "4JDhHF9Xauz6QPLfxqUFfGjDXPELTxt5HfuGrSoSmRPm73duzB7Y5bEjafGSA8nJBG6rhcQB3rhkaxtCWyUBsnZD",
  "key32": "2FfiNNaMfV3XxYoCzfsNs4GEkYFchmX3NpnxuYAKTX54bqWaSvizicUef9scHvcHuznUniZwFGVTcutP3Rgve5Eq",
  "key33": "2A9u5oBQdH1amh68qtHfh3tSJN4djJrhTNwk2BBkzUy2acJnJAqzLLkBUtRHomkjHK9aPLHUPvDgegR2KmBwujqr",
  "key34": "36H8SrZrYYXHWZeyFizsexThEtPvKMXeDhnB7KKMdkuqkGH6iRcJRL3LWrBLToEJAKvam2u9MwnHiR2E5bhgTKW5",
  "key35": "43GGGws7htcShjoV9UaBVeW8731iEz6kk9McyjavkzUrBWrXJvnK4UzyGZ86Mqu3jfT7rYCyWZF2njdGWrLFY6yZ",
  "key36": "4u22YHasDt59K1VN3vhw1ih4aiQPnkWUK1J5XaphSkxX1UMPNCuNoFmY2PcFGjkPHxmwycWdcMKjcd6V7ddbb28e",
  "key37": "4kN3EG5C2i3jqXrYGWcazMEgUAotHAGd8Js557wpPz9pPJt62VUAZPKLm7QWpcc9ih4a7D7LpXFsiuUm8YmzHViR",
  "key38": "5p552RgdGcJB5SZjDk9TG5k19inwiaV1QhpmN9UUoZ2ieccswyRHGLquvWn9xNNPAXMKqvG4iCD2UUdcqrzcTnqZ",
  "key39": "4PwwFL3SDK4eLiHsSun9QxN31v5b2dDPra5TgFkBuY8stjZCpCvys1URXL4jDYijkDRsSiDbmn33sFaWBfzAMVNp",
  "key40": "Fw6vBKkXAMf9gCajPHsdux9NZ4WDWDheMyzRxeM6rMLkj7skcMLdcK5r5V8bbz5r5cjYjCTPQzMDCqG5r3QELzu",
  "key41": "B1L6CrMhE6faEULiKHyEdt7vPJ9PS2rBZvwGxCGqy1mdWKEwunS5KvKntwuA759sswRZkd6wgQvbzeD6MXtDmfx",
  "key42": "54kedLt5GwaXFFPTyfcGEZYGCPYQjhfJsEy5i4JbHbVLVfvrzuwttdjRoLatNyjtbQe7SeZEEDJTssQVJZ2RxgEW",
  "key43": "3ZQFPFp7SWkhA2ZidSADZ4HQVYKciM4XSpu19msTNjk5cbTWTWqjvPZAwqMaqMyh4wmxX5sUha8BK3cmR5pdMkPM",
  "key44": "252e48mQf7CKWatjCahFn5KtrU1HdRgU8hJKoPdYoeFsFPxN61SYVhfJQNHnuqg8c6xSkj3Ya6E4u6TgTemhDQYT",
  "key45": "2qCJ3HyKwXSThW1bXLEQVaPsaDHKEykXcSq1f4jus2p7f4e2wA3bWgroNUCM27vLyqoTWg5c8tsMXtGo3RsKLGWL"
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
