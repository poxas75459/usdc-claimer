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
    "yi8hg1upFtqccZWyUqPtTjPEckveYguF4VBTgWHhJkn79bc5kfsQzrsLMZthCraQ4yK5mKGimTfQdpLSDcK9Mih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9KvvQ5TSwBFw8h5X7pfJK1m39ze1pBgWENb2gPzkL35pKG41QJTezvMZFdbAeAgRa6u2ra5DqPEXtN2Egv16Qou",
  "key1": "54gG6uVjdWZEdphhAda2fqQq1R6tepoDePxRD15DUKk8xP9k5XJR7FLAZQV8HF8NNyQaRWYa8s9sEcncnpc5Zafd",
  "key2": "3t1ayYt1H2KyZqNW31RbB4qbKrZWQqgvwYoRh6XTdrbfcdNRy1eN8HFoPy7JKR2doV41DwwP9M6b1rD6bPyHkTuf",
  "key3": "4f7t7oLwL64phHSzfKcvF6L7dnJdVd6PfQdtR39G3XBMwQUBwnf5wTbcx5UBiJ7TxKoMjiHixjMLqV98AQpP8cQ7",
  "key4": "2UpnDGczzqoEFczSWNCWhQfp4wC1dAEpeDxxgcR677kRFsCGJhfgw8mmkjEHsid4aP9458Cs9WcgjScY7ciJ2rzw",
  "key5": "67GWzCgHSwJPG5R54GGYDNX11jXVPo2BxAxS7PxcM5edvTQ3BRnDDZPTeBhfThp2XCZctF4AQH1TizwMBrLLCKgk",
  "key6": "2yNnMxi94HpcqAUEkLZsnvByMxwmE7J2DGjg8NDb7241pW4UvxSSVG6B25fQHHM9NPfZfEenpLRKK9BJT9CMqUew",
  "key7": "Xe29E3vUMF83zFqdpcUctdXZRnyKDJU6jrvFRKsq1JD6JYu8XEDRbYX1Zcjz8ruVLkpFamEhNbfVQg6xhsEFwWr",
  "key8": "2fQ3njfSG5MgNzVDnCMF89Nqoqa8FVEmvgX93U6HCK28kErUGVsAPqxUnqDW5n4x23kzNtTF4FpvnCx1bR6JRKsz",
  "key9": "3rQrgsxChSmjj9iGJLpac2zJWyXoaiDV4kCqsak88YE6JWHU3oZ9envCgAWC5MUvzpWUqx6Mfufcmkb6gWWsgaSj",
  "key10": "4nLc91Kv16JxAjxo2SyDyA5N9VMeNjPfvUbrAeAus8kCJDejzUkoGYCxhXQGt3EYSYq2rrZV7HTtcobLRLogSnhQ",
  "key11": "29ij1ot2fhEkEHTMCkHetTQRH84XHvsoZn6zTjHJZDaqnsis9fw71mqJtjxqpx6VY1L3RjDAUcFDSE2daiR8TJ6b",
  "key12": "5s6yUemBCvZggy4QQVytRkfVyuhGaPaULv5gKTps2bzzKEUwcurEBRQEgVquVu148qPSQAVW3JAYZAwEtppkGuhV",
  "key13": "3uj2DwMdpBvaBQxPC6cqkgoCmc6SajWaMVckM4DkCzaYMiVQiNYC48HfeEzksYgfSeT88ovJaHVFRDLBvbhmK6XZ",
  "key14": "4FQ1oF5av8TRbEo8A8Gp6XJpXL8ViyvSRvSba99oYD6Mjqw24AhcxV2rMKaDFN6ELenBAvqksrLNhTViwy9FcwVd",
  "key15": "3hGfM6TCKm6PfjPiB4rqAoj4Bp6Mm1AfpdjXk7uMJ45aj8xy7NnmPTzpLKnsXe5jTnxxBgR9SYtpAp9jTUmv7rFv",
  "key16": "r95fTJeoko3WfD3XKE1zcuid5dBRUq7ACkkrQN9jS5rBee9eonu8czZJXabTFcmSEf94HyBPtNvf6AMvsZ7amHj",
  "key17": "3ER8DbvD5AQWDFhYBEKF5t5UsBEFqievmsy8z83GBoxYtp3GU69CjUTcyFpi7MjDdB157omnuXe9um7snFkmhASR",
  "key18": "5Gj8U6CAosb4m92GGRNz8Vq5rQkhKssWwAp94CMgjUwE7YCNbDCoBXswHAsuCckjmm1Weizn1ZrZMLkS9FYyj3b6",
  "key19": "65FCEeW6fo9UgKWgXeNWt8uAha23QtgYoEXM2JyDmJPZryMSW7JXsFAtpqZJSV1wFUAa2VUzSCE8mhwTi34uNLu4",
  "key20": "3VpnYJ955HAruTMDZbYAvMwVDs5qRPP6tDScA7STcgQTB8XKgvk4V8zhpVXZ1QZ1dtKXmK3aTSkiT6Np6DNQKfWy",
  "key21": "4evfQt5uZLyNZz13QSRRRtQAaDwbjE7nmUg7aa4FzPHZy3XpEHFUpYmrDcCyejveu9SWQCEzYyTrxeA3pMyB4xn5",
  "key22": "5U7aBLzXvb8yBXyGnyi9aWWukwFeQaECLQUMU7yswaeaRDDBMkGTGrUVdrrT6xv4b6V4w2gcHQjdMhnr7TREy3NL",
  "key23": "25RKKU3iHtn9CMKR62K82K82LqSwyJHXWyediMstRv781tTzVs9jK45WfarnNjwciQpKnhuHFuyG6AWBt2J6V1zg",
  "key24": "3etYHbWjU1hj394gyjjpgYmSC8UF5hDDqsUvWLkccszkwgK4hZQidi8aPPTW8kFoyWize8eaVa33rUc742daQ4JA",
  "key25": "eWP3Seq71LzQ6CmkvbwNLdhYPEKr8GAykWuNtDnwTtrD1U9ATB4WG7dpkoHoAzdv7ya5v8p93533SrBTjGHBFRX",
  "key26": "2gnE2Gq9wsWvepNsuhCPbxBArwZedrJm9U5ezN7KXVSMpDt7EyxAg3UAYQ4tV843MUyR2W6Fy67hcp5FFfj53HJ8",
  "key27": "56HZWpoHd7kM9YXGqj2M3mH89xLXvUKtug6Wt951PiLgUgnMLAZHyuEqwEX8c4WpJBmbCj2N9RuaVgcM1dMwXNYY",
  "key28": "jLkQYb7xaDKJT2S6sm9Yg51tPEGem2S8pzoZ9qaUrKimiThVu5FhnRw2CeDnuKxAtkjYnM9gYs2bK8TQ7HimA2a",
  "key29": "H9nMLYkPWaUCoLEc8Kg4rBNeGE3tBhFR2E1LnWGefGweot1yNTENoMF3BjkyjCYyJosodqPXLWyQeXwssJqC6YX",
  "key30": "4whj9Ewfd7qJBFudBJ8QZnxbx6fVoWw1n6DidjyvkCcPKFhnvc9oBy2Z21HtzLopKPBqq6rw3fNXUAv9JfEQZNtE",
  "key31": "5CFGPtkXbnSia7xf3qSRxNyjGLMVuKBRMSJgS6ubZMStmJyw4TNgeFvLXQKRQFUCr2kGETBpExWiHZvEmm5STqPr",
  "key32": "2zog7Vw9dedoGj6KtgbB8HwpyvJnPGNhrcq8roUiNevZBvBXrmkHPpBvhDf9LTH9wp2s82At9wE3ERzJ2aX5bA6K",
  "key33": "3yvPdqQ7WZXnJfzj9oV8W53wncadpbBpSejA2otrhxFaaJ9xyktoWyLpff8xPYN8x8SWptrYgEMbCZJrLaQo4EVd",
  "key34": "4wcGQmbYyd6qjHfcPFeozoqmULW3ZEmPy34xoVEfiHb91ZAiQjQWdabDGKgKbAAJe8Le72VnU8GNw8SR63zgPnju",
  "key35": "5zxTpGqzg1mptU3BwXn6kUpFBhc1KKZZ2Ug8bvHzhaQKpxLkXF21TfX9qv25owoFNxZudAVnpRZsded46ZKQnF3K",
  "key36": "2Thpz3SpcUrXv22bNNFcr46j9rCy81ACvBeDLpwZ4zoH1r7Dzqbe2gUCMbbXuUasFMUMU1ocBQmMrWbDc4u6U1MA",
  "key37": "Q1gPoaP5X727weGAnqW4zbhnN89A7SJ4sHd4awQhQBdpkCPdSzrvazrZxGP9Z1BdhsHLEy9ZWKnQxErUQgrwzof",
  "key38": "5zLdTFLruoymxJSn2KBkdwDoHCqMxTsXCgfve4E6gYXEPXXSEe2cqehwf6MSXqsHWCYCtgs9Faboo4z6VbXGUYR2",
  "key39": "5uH1nGCBA5hcr7j6Qta6927kXFgZimFuyRe3QqBmGo2aoUPg8EtZ5a2AzzBSGH55BHfnghCs8LpfCqwC2qgPvNF1",
  "key40": "5AbcBabdHEu3WGyVSZ7EmRVvBTafkqfjTEVVt6HGtPr8xQKyb2yjyJqpQggYvLiy9Sum4C4HhYiZfCsJeKAYh2ZJ",
  "key41": "4uWMUeuaQZMpb4G3M5t5GDa9dm8FDgXfQkkUBk1kbxrVoe42pss9nVcyUea9zxB1GxBLxeKph8ckzNguLzGGrmhG",
  "key42": "41uQjJL85FJmW9NdWdigFeZBzkNCecBEAALD2yTcefhcbijY9zc6f5fbTMKyohGWKVvhYr6JwaySceuLY4Rcbkmx",
  "key43": "4wmSoX6s3kF49Baj7WYx2RFL2PWND72RfqrJvg9UuNBj7aMGUzYgCRQSCyXfRZ7iCvGfJGLsUaW25brAA9YnmkMJ",
  "key44": "4j7rUdRhKx31brcUZNwUEm2tjDydkeupgLXcJwVWrnwMYwuSo8GpPiMu9nNrKDdt2c5xEUdm6TjGmbW23T5NPnz2",
  "key45": "4GQ2me9DmpLQQHH92iFGZMxSaqzWZhDKwp2e2NEAVx1M72jgwZ6AGKQNRUWkvgNfj5iVzJDARUHYEPn33ZNaz2U1",
  "key46": "59s9zbXrpXwEGkexkAWPvH8bzKMKSxbj6jyz8RwEuNXsYzgJaFLXKafyyigmEbBhgJxxne6m9rDm3WegtjtegMzE"
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
