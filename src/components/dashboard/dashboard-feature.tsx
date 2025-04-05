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
    "61xgvekSa5uiXxP2wf9K9kzTFMT7Fxid9w3vQ1YXAirFJPRzB9BA4FEFnMhBpSBCjmstdg7enb4FR4UQJMnaQ7L7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pWhstgU6fw7xgUinWB5ZGqLAEr38KWPaiAiH1vKDcVMxgz1FCZtKsW9ptJhcru6Z23nN5hM4FKAFf2jKoAYH2wj",
  "key1": "39bcNHyJFPDNb4gSfvboG1DM7y3XNZ4k8CGP77Si1enTLxkuQXrUbi1DZupW6J8fMhM5diZyZpkoe5fpMoZByF49",
  "key2": "QvriANEvBQDZsuAEjQuvnGbBkE3UTSdiHqp88DQiLHvrnApezmjVMyqFRt5hrL4LyZkRznojsmdqnUbaCfeGcFP",
  "key3": "4vZxpP8XvLjbVcKNp75gKNxT9aujJ7BvpK5k6UdgWSiNZQ2SMAkDVywgeXDbzZY1b1ynWRnCG6LdSJB5TZeN6HYX",
  "key4": "36yrNiPJjzuAdo6EnQ7JonnKxeqzwCT9z468af3y6NGQ2CJbuRUgikaEyuregxzETiQGxhmpy3vtXMLgvmu92Hwg",
  "key5": "5rET5gDntZsvHWscKZKqjHQiDT54aET3RBtVi9S5MdsWX5CLRJaUivPBpZXRgcVq1gp7BnM6WvnCTBwhLKHiC6g5",
  "key6": "5h3jNvNR9mMhPGKxYrGosT1psPtAMrpK4VfBEBQzf565wWumdNGzYbdLAe4AT71KFFgVHBaKeHsKnXQWou1PxLDP",
  "key7": "4RnJsCLXsx5ECWXFL8v32yCjpG2r7fyCM1hioa5ReLyhfgoouwE8orinP84m422HX22KQMVibf8TJdJ81JZBe7hj",
  "key8": "5ka7KpB6vtE8FuCePiB3NhMyytUBLZCbDZLZzEzq1YUpYjr1PuQWiARFfySRf7fiiuVVZTJgxvjwgPyGVdHmxpZh",
  "key9": "5rE9t6BpK6PtyY4SbazSpczr8hPoAHWuZiS5R8oeZn7XUs8Lzp29aAAGx8mgjj4Y7jVdfWEffxFxP6N77JwnTFn",
  "key10": "4X2czx3DcQRnkScoiuq8VB4f8nWPkfcFV3gvCnWE9efbz2jPeFMQ7PgyzrEa48qYYhV7546CxXvNRgyCy7Jbarxq",
  "key11": "2jWxGjimX6GEYXL2YjmCDhofH239KU752Q3eTDQ811WCvA3nvbtoBs7HcG1xQsr1Eb5TZA2hGzmqQ8uAqwYazVza",
  "key12": "28gPMW6CfKEE53vzhVWMA7NjgLzBUEpLyDA1agoDixJtnRiFsGERgJCxeDPMaWk2wnbypvDHjoMEAd3Lvh1giNnG",
  "key13": "2CJoqsL9vm2SzBkd25cg5sCTaPPSi59pFNWK5bkNwxaBQw2D3MwSA4mCEyibuqoqUPerw3N3ChjoCPT8UnNREnPE",
  "key14": "4ovUEAEMHhu2VkAqw3R6xUgRWs3u8pquKVDbrcRDv87RAcihHE4bLPefRLpaF1194yao5LBqyH4wPaTqVsjx7R88",
  "key15": "2m2T4RyMJsPgsJwLkQR1nHDjPiC1EYFV2J4DgGPHV6f2UwjpvvAk37LmHUA62t932sBrtLAjhdScVLyUNx7Zz9Td",
  "key16": "4bqkAnXeJKnC6pPntYGUqvtDm1t6Lb6FT768cCKXvU9Q6djypD33s54y58ABStHH88ejLz7xiycoYd9HYTXWPe8g",
  "key17": "3LrMBf97jXNrhTL3PYzRQLcTUBCQUmujKUPcchRaNHgphowifjqHt6GpkBAQuxe9dFqmA4sScg19NcPxcae7wTvm",
  "key18": "46qAKqFyjUJXg98YZD9KPbKQomvi5UqTHqB3vphhxopVEQemzP7pyr5gkAxHUbwZxRQBnwoXo8dLSHJRcp4trcVu",
  "key19": "5VgNM8wMnDoJiDsKkF55HkE2y4EF4eKaNL3TYPRxENiTn3mz4QLLtCddcFYitKqzA3kueRTZyz7T4xmBJssshd7U",
  "key20": "596doFsJMWuTa8orHrkun4J8DjisPVwg6MC3r5DJem3WkGN7tPQiUBRr52vKb7gk1c7AmpssMrBmm7p7F6xbrbNj",
  "key21": "8UgHrfe7RnfJ4mrXHng2JhRoi7ybtyR7hDxjSXMZ2Wof8tSeVukfaPkve64GmhcDYKt4tW8gnWbPTneRdZ1zKR3",
  "key22": "21aA7QrE4s3BMWTWAU8ACkVUrjJr3LATg4CbExfexH6eh26myUy1cpeATr3Jhbj9yJEnyJ6LBH5VvWXGpbj6gwzx",
  "key23": "24rn98PxBMQMTvYL35ZjyZbXhCsLTN88PFMsi6geBrYfdE7sGxK6U2cvfcSQjcjvymZ8zhLjgeg1qsm57hsaEN4Z",
  "key24": "5h5J1wQw4mW1w5VJYYWFWjfiE85URCoLZzr9nX85vFPfwuTWrZSVwFq4xvanVDxt1tVZgf7y7nb6jbqb4azSKH8T",
  "key25": "2PPUSAgwvncsYqBPACZBHZVH5ZM1rcFWX6R1EtQUZGs3jnPtZod8osdKnbvoHYEGwwD4XKm4uX6Tg7maCk4k284c",
  "key26": "5HUyYVaDX7y7dromzKNofskvwnDkt1Gtzf5kmevNNG8364i2aqPpBpGzR9ZcJ1TsbbviA5gzLhDcCgNFXUKemb3V",
  "key27": "4oksiaWU8Pg9NmKLWzeta5QuP1hJYpwZYWqg6NcxwKVb9pbtLD8SzQpgDsLR3A8LoBRg9pV19L9ibN6xYngXukyw",
  "key28": "1Gdt1AKCu1aFriRQ7XZsKYxJp5oifBeJSFTRh1xuATACAwb3ga7zsM7cuuUNxQ5MMMLxUE41zNJx3qYmfaL6c1f",
  "key29": "2Q3ewbRTvTXX4V8vAvremsENyiGh2RjgJEgyCpMvnn2GBaiV7DSYHYWvRTcuP1KdBP9TwoEehbiX9ncxj2CE8avS",
  "key30": "36Ch4qo7y71udrX6fxWrsUwVUFEzfYeuprka4dah9uqtVTh7mrJLkbBwNhfDPiZhzP4yj6u51Hr4zXiZKEoKVw6z",
  "key31": "1gZ591NyL1CdVyVyiADt6iCHeqbUsgjMN6xSfMhRWa2xvU74i1P15nsyyS8qwBU6nVi2VB6E7YtJWpVQJ14Tppk",
  "key32": "LGta1djvE4mgFDng7NNJowBYiLtqP6AXckSzfuYFss1CPtq2dEPA9nSHiqC744omYiNegr5ZrCSCsoJyP22bWx2",
  "key33": "2WwLxqAH6Cye6Z3DSvKQFx6ZSUwBSUqqHXiaUEHuDTzmwCocQyVZDMhB56TDW59SePxN6Y6CnyukaH64HQRDSUA3",
  "key34": "2x5T7FzJEAbQvxXhwm2KtropuUiD45JdXg2ScQwr6L9zrdesnQx48Lrfds8rmhwNdirmTBqPPcy5gFmuyn8y2hUv",
  "key35": "2uhhMV1gb2gKqniugYpn31kTDNKWm6UEk76jNwenVsfdmysFtd3gsr5mi7zT7HyRP7eXaRAB1dpXgBU97fx2JW6C",
  "key36": "4cTRRWhBqA7GTeHmr8ZaC69y9myi9Uo3MCX3zFcaK8wAt9UjS1rUKyGUCtWJyCu8K3PSBQxRn8eYNY7GdLfjxYfL",
  "key37": "KW32kuHMS7o5que9GTKhqvzsaHWPn1wr3iHit22Ha9J9enRzc79PTKEGBkqZA28ZKnRTbTpezmU1Uz6gzG9FBFe",
  "key38": "5U5Wx9DMUgZzFT6i5V1sGKCXqfeddpBZy9gVCaWfrxBhWuLBsASysW5JFrZbAQeQugGAT1qef7YQcZrvt1FH92bG",
  "key39": "2WXDPp5fdk4mjV17R6so7P4miZ14w9HF5QyLDcPv5f6EKZmRY29XBgTP4LY1Ltg99Ljtm1zAWN1pxw6xutVmvVNJ",
  "key40": "64Rrs3aSLGjpeWb3md1SoJuHxXT9DPYtHRSQEoxMqbHqKYBJUkGnHaa8qwvVQTtz9pedEDLqg3s46jK7cATPk6z4"
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
