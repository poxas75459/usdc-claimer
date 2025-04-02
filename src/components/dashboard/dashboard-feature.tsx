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
    "2ertYtiCWCy9Lyrthwc8ZHqesHNm4euy7PvFGSmSBDBFBCFYC6GT88FVGovdoV8JzsDkowxrz2PJoCtgn38Sej8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rMNhooazp6iTAePhBTvUu8LrEGGP689S6ErZNGaVypKiwPJFEAQ9yExB8h4PstQdEMy4MuRYDfkfuyfrUFXqzb1",
  "key1": "4VrZLpzfAJ5YsBujFys66hHAm73kWVYgH2xFTEUQ9KiH53KbdYe9LmQW2WQm3qkQG6zB4zraYKxxjorDnWpDtziG",
  "key2": "64h7zrC6cZ3gYDTZN24u5GzG3UBTTCG6oXHPrhVczqCB2hLH7ZSrM548y75zPo3apsfisDMX4ZzssnWdJqoCgr3S",
  "key3": "4oCaNvhPwz833xkCsvdYYfNTtoAXDi3vsmmoDYpqjr224ab1KxEoZRBFUo3brpJwKR5bJC2LkJUNseX3aRGzGTeE",
  "key4": "5RUaNxK98pc37V7rrQoM9jo3Sivs9C3VTxGQhUKUUhFkxd1UuRCLHrZhgkLGyJR8iMrV9hcriWfoysARjTsbKync",
  "key5": "3KtbSQEZCrvZeeezVWRXhtMqGH212tPxomRSsmvCgfJZ3DfkbJHNRDoiHPwoGH2fbxzuSFv5FUfX4TrJqb5Jx6Zf",
  "key6": "3zF5Fx4mTQwFed3N3yU5v36FnNhVJCDQrFvhL1WZ8hSv6QXVeh2LSZGx4Xs1GRxYDWs3zoX2R2jFy6oyrnq4CLCX",
  "key7": "5zaP8pzxYaw1zknvFvcUqaqq2f7JusmwXXmy4iPcQPAQu4yf78ZEqZT1JGSey9SoXpnYnmE4Wx9d4KQczGnPFfYR",
  "key8": "xBCWSEt7A2kcPm3rwaoQs16Px1tRrrU42yMqs3i2tjE2isqTevFASUazYDwLrsNktfiYjFoG78N7TNWfH3vWBgZ",
  "key9": "3WFpjy4qFnjccxwmNf4gGcQ4aBKcgh4wREZqPsneCeFMuZmEJSqMoBBAKtfbCW41JURaDMumMQweXpQZFbS8uJHg",
  "key10": "3ZoGp8M7yw5RGuLK38hCSBwm5ZTfskX7YQHRJ7eZMjsHDynXZwc6DYkv2VUgV1wLov8PMJznPq4eKLqBcTv3sF2f",
  "key11": "4rgZwKX1rASCToBnxMuukNVYkVvH6esMnobxQah4dmMKJ1zpFQHX7LmKbPGeKGEXbLhCmLTXomhEH67hJbv3nN4d",
  "key12": "57nD6Zh7tXbkRa716BQ62pH77878LYt2Jjt5HUiVNjcXBo7crNdAaXH2mmmT7rEWwzUn12M2XEqeeRVLPH2PBtfc",
  "key13": "3hpVH4aVmJmY4g4JuJVxhRcrhF7PRU96ixM813dpLfc3YefUpPBbwMMg3Z9qYmoQaQhwKPgHEHxtckAu6nBrd8Nx",
  "key14": "3X8Dw1oX85f7h7L3WwnJCANNirKrPVr8kPUH41hUkRt7KysTU3UXcBkUKdSgq2jvCZ2uvheTKKBtGbyLQeMYSofB",
  "key15": "366cjworHCzmncpu7M4VzGgxieYHzHuWr2msARYceSymRUSjhE94LFQXUzVx53S3XqsojhUYqAXy4kiZNypquUx6",
  "key16": "54nQ1uadicQmegGTePwT4MxrrMumWQCiDd3PTAnNSkiRLa5G16S2414qq2LDrPHfrz4gF4fE6Tot8DDLicauP6on",
  "key17": "24bzoXBKFbfdHEqzmXkvJh3k4wRkPFmuXEmA9YE4rr2zWAmYREs6F2DtoGaZa54tU3FCSDLdpRnHkZM97TbjRM4V",
  "key18": "3HRWbaQhhBqFFGHPn6WWkjGpn13e1rV1QHWJN6jhBPxG4cBMV4XfijHfzT6qJ4xBC2TtxTvGVA9eJhRtKRmFJGKt",
  "key19": "aqvRhujG7uyPdk5AwPabeYbkMPofjwNNhQZSKQngLXXcVC9J4bN7z6WpftMtBSmTdJpPg2ZDnwHp7BAxw5pkmuq",
  "key20": "4pyjfygcWZSSzDqMiHi8gwRxeNvJT2QW1zCVeXW36v7DtLgH2ZZzBYUFoLZK3X3VAGo8UxVy4tgJ2fpYLT6vh2En",
  "key21": "2DJdSQLsDzq1cC3s2VahtHTGYp4dQRhaWneGhyGtXppC3KATHzNKzBED6QEYkg6qdzp6H3TvZ7Hq9vjsh4bGdeco",
  "key22": "3sReNbVDRvxwzPgUEa3zZsHQEzNZsbSzJQ6GHugAcCZaXHJMLRXsP4qn6kPysLfKT4gp3jDPRnVhM1f91kNgJhaP",
  "key23": "5boAAbY8t9ZbS5iWnivAm8uNsQBqz6vGpZXuARVJXGuV5PAYaEuhG6zi2Zawyw5XwYxnCS9fwF8tmJGZfnPNMkqh",
  "key24": "5TM7zKYe4XqToYW7rw98jvgoeHTFuBR9pLEY3jBWnR8Mhr6GYhDndSrqdPV1ueM7dZtF37XHHWodPrzk5oEw8eWz",
  "key25": "59HaJBQK8BsxJtU9Xj1HGDBNKcxhF6TbqNz882JRe2puPS7BJChpjcGfKYeGAWAGoCeeDhJYrJKF2ZyrTcG7zHuu",
  "key26": "4FLe1ZYDdHCcHKtvpwnvZgdMzr1qyPGVaK6c3F3p4jEfdg9Zx6dF9pQRsm8D4tvo6G75tXMe4GEfY22fzZnN8t2y",
  "key27": "4xPBfCjQy3G4cEDEUA4PahcfrwNDYG14VdgphdRSLSt6TSH3hw8iDxXkfD9e7go4spBrJvTTyXrkMZUuyuBtWLuG",
  "key28": "3cQQuWjN4jam47tn4FMcugmxmTeYGk4oySoytm1daEb7p8bNAiVrTV2Vok4vF814fWFWHvoCjXDk7DYogQbvY5Nm",
  "key29": "z1FwuKWKM5dhz85XZfkMJQg2GND2ZQeNq55cj4H9KN6DTUSGT7eDDHuf5gx47LBhNdHCbak9UUxfBbph2UCS1bi",
  "key30": "5Lje1C3exdPDxdniJ24nskpeAKC44PWErvnXZnRhrYZQbw1xEYViNbcdc6U2ozm1rhiHyCov2dDysSJLP3n5q1aC",
  "key31": "DBTSFA6cZn4LrYgUgLgs5Axyiy6BXRuM7VFtwF8syBGLxSgp4qYxiSD2N61YUNu3NcN8t73U3eMhT81c9UhWdri",
  "key32": "CB8vtRAuf3XzaiJHbDb5ZqizcNHvgPSp9ngFAPDYFNwwZ73yEY6zmUchHvMtjKUZfSM2aTtXNmkos1qGwL1UGiW",
  "key33": "5snPeTJG9UVudk2wQg3wHE4UnvX5SkSGydR6EBff31NChqdXaqcFBpKFEebJFZVbaVi8j2EzQQGBnxAMTyiWVDpv",
  "key34": "2Zm126MH1ZRncw5QiS79ChKV4XeJ2SjAiUhChb61SZrZFDcKLeCkYDUvYZ5n3YrJvbboXGLnFJRyV1JRAMX4MEZR",
  "key35": "4rEKscvFUJTWsBLetFBJncJ4Hrgk435Gwrk7VzSwSYWbcno9LoWjRyNYbrWALYto3pmhod6nY2zzqCAimnXkdPTz",
  "key36": "4ZG4AMw6cSHd29cLUHmBqJp48nvz9jDzBece32eik5VDzabAHNE3M2GQz3shRgnxhNyW7scFZrjtHVTkBhniyaN1",
  "key37": "5S4iyz9MWXFWvjeEd8Wjet8EDqXCbfJP3Ybash5J2nj8y5Vbkc2LMxVsW1eLa1nutKmrb97rJaEZ9NA3moV2XDAo",
  "key38": "5Kp8HnwFJAnGFuhoE9ApATKLfPJ1dZycAVFhYkwFsVd9zFaAyPzw2SahmLqVGZJreW3J2mXVV1wyE9atKDJtZZqf",
  "key39": "34X7HfeNXfS4iPqLywBfu2eMxRpMQW9VXsEvT79Z35VESjeqF5a3stG6sgnaZ5CxNaaExDk9KUf4YXyMexf1ed7P",
  "key40": "DjJMAx4qvymKDUeyUbt6sgaQWKZybRNckWe5iEfASX77kHhjNHvvQAJmhSziH2YL36ZQDLzs3cEhm5GdSSimLXi"
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
