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
    "5rAaSye2FG6mCrtjrAwFxd3wWYZUGJjVbpQuiZRe2AmTqNMVjrXqjkq9VWvtDZD3d5CYgMJPeRF5DHFRGjCdybpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AVDd4rPMyQf6ixY2avdyed65j8BZznAjTqGF5VU4g3DkkPRzXgaDqX27MsjjwnZAjdj7LZedZWsZgjHNapybAfG",
  "key1": "2sKM5CD96eZAGw5QCj6gDoxKBc7zHn2VWXrikwu9JG5PECv4ZrSqwP4HzU2KxHXqkxNyAHQ3Kv9N9brcRMfumDo1",
  "key2": "5gy456WSsSFhAUUHBAq938QnSKTbT5tiFjEVTaPyhPN25T3czxrjeKo4u3gtoTSF3apaiYC2mFHtMHnfFSKJw1A9",
  "key3": "4rut5FppxfqRB3yv5T21b5sTayUfAF7hutApPWrxWDpPpUGSEjumQP4aB3K5d3k4Fuo2f4hsoDahR1ttyquAaShJ",
  "key4": "5csDzkcyM7QpTtFWbX11w2TbcxC3x4P7d21nUcsyEmf93SUwGH3RU8RzmTiYdhgb2wpa66RMhfUHWf6SNTZ5ofwm",
  "key5": "56W1cLHVqCwyq4wNfHAMJPuJPMSJYQRgDMLh13JKCi6hqJn3rNVRtbUmCyAJgyYoRy37ipvtZx7HFk8ZMNH4fFHn",
  "key6": "4GDDiefT8n6MFNUWe6KUEJF4URFk1EVgHS4BJJ9Yc9T2PiPkkc7E7cKSgetEn24VLWTJLU6gC6YacUvi3NY4PvBz",
  "key7": "4hHCRwmURKUrUNQQ25g6soqH8xj3Mc33d5h5PF5QCg3qLGXhwtK8AMqCFsLoCLhBmWZvMuKReWjMUx5GGWeTb9Ja",
  "key8": "2pNDwz7PLHhk71GmMveCrajVeVrCUZ3DJAvW7XKKhn8GS8yJPyj529VendQNswuZZbb3WPEoU62rzNYQ67SgrsGM",
  "key9": "35PBAsDzZZsCUn7n64C4KWg3qkYCtvKpoC5DewMviJpC4y3uSCjGT5wz7TNVCLq9JBra4Diz4zEJJeHkJH5MCJ2e",
  "key10": "31QkaHtcDKpKmTF8TyEBx7gh13TnJV2hFwyLYS6bGkiiB1pZnmEoqjUg85ckPs6NvLFqa6aWNC2QSfX4JLP8qY5z",
  "key11": "5RB1tooiv1LRdQZm8dKgdzjkjRDZWeaV6DuBP3c57QCvKUmrniuF5yczXjkPPTimdaSoBYhrJ2gwFJVtnuN9FeRH",
  "key12": "JwwGDsXhizXWcv272AUDZ5XqgX6uEXCczkTRaUsgwQ3rFD8HCErWw8zggeT2kLW6Ztk43QkriLXgmV6ZUeSijKh",
  "key13": "XwRxCun8GhoaZfFdZSUjokAbdDafockuswXMFn5ThEzPnD2RN2d5x3oEzRUVvqVrLLabrFvcPiWNmJNSQi57LUx",
  "key14": "3eEXXijvN5pz1JAt9DNyoQBHEzvuZdZZdSXYidHd21bGq8ZN1nKwvLhefevxMPDmR3oY5RfngxNYN67nbfPyjQ1j",
  "key15": "n3SkGoT7FwBKoRv2QrMAgMtzRwArKsjYo6ycKNC3USD8wTZTsvjZUEw6td7zvkU7X1W1jZuWJynMgfPKmszo3PL",
  "key16": "36FvrkvcxjJ58FFxrhZdkJHHGLrcdURi3R55eUAvNNHaQsJPZgxEE2jpCpVTqrriBgnZscBFtJ3FAg84gsedHwkD",
  "key17": "5dvp2sQv6bDLEUiMQcfiwtVVJ73BtivToYdtuxjw83iQ5XP8DeqrNucdxENvgb2HFwzJTHG7Js9CsbWAZa9SohuR",
  "key18": "3XnwbCGXHQq6ByDkbCufigZtLfDFsZWt3SmS5rtfRZKDwwNXBhsxPWGZqmZvoVFbADXMaRkSt1q2dinBrp7bb9bj",
  "key19": "4gTnz5wUP8N1xHcJQwNsaAvK9Nm1TJDD7qdWQcDkco6VFufVMkWBSpjjMimPxwq3VUAGkXGXYtJHyUjjZSJDPxXF",
  "key20": "2P6EZU5V89y5TzNoxNssDHWXC5bwXrB6RzPQNvLnfeXxjCKNgZmd44s3jJxYyraUhiAVZ7Fe3ZJXqfaFDFpLkc1R",
  "key21": "2nH7C52XSagebqAZ3RyZtHFseytV72yDvdk5ets4XRBbBkFUTMyr5uDrtY1RviAVArukC8UcUpMSoDBzVUqwc76v",
  "key22": "5TCh5KF1JLqSPYsY1ebFFGPCbrE5GwRNV65VQnG2CNgvwq9LKAjMN1iKWZfYujwQ5erZk2bjD6aDrTPWf285mJAh",
  "key23": "5QZoTbyzqV99Av2QhQF9f2r72sLyP4qQ1cgFCXxS9YkBQtkJZ5dW6JJsxPJJSeCeRtGit7XCb5L9xfuaCV9Pyx13",
  "key24": "a243DnqYjtcQno1cJbNmW6SottgUzSuahV1JQMc8mYgCmtuUYG4NgC6WsoL6ZDi8WF3YS1bzVPhb45bEVwsCgyu",
  "key25": "4uJbgLP4uTeKTsk1emR2TdmU1EXWNTduZEeKdnqt2ZAajFqkAjVib4SYXmgj7PrsvcZQL4cxeSKRwWWzDK7Zvou4",
  "key26": "3NsBtuyX1SnxZzNk57Jim4y5maado3iqrdC79iwpUTK8ie4jwuBMvGBqx5jPYKwjAQStkxVRhr6vkwARSTEnDeeH",
  "key27": "43ywKB8jARH6Ce7rxJKK81NgFbPF1jWtHiMMC3csQUKYzGaDC2WjFAP7sU6JFJDvhy4eTSuuWTX5mWVhhptZ3AZR",
  "key28": "4awNPHuJbUaNFXf36xqJ1356nkjw1kVQiUvAJDg8xcURLiNrQpLKpBE4sdhd1jqDgbeWaNqdwrnzRcurpkfatTUu",
  "key29": "7jR5HriyXuPHMuxg6UYVTkdT11hCi87XQZgpBwQwUGqxEknU1v1SdJGkW31vAmAPKxsWoVC5EtVXaoSqppi3sab",
  "key30": "5CBwkhkEumpQbNUwNZtpbfxrtG7CWrxoHLYHXmEpgWEZU3eNHV8uRaBmZ36FTfWQAFKKV2E7xn3EZn8PyDQ1Qgnz",
  "key31": "21Du6kqjAmq7Lb3yFkUXDWWKGtPJLz2esfBpmoqFnsebmVQhp2mLMRaDV7TCTNsKKWrbPuwJztaFSM58zi1fnC1N",
  "key32": "4ZaCxc9KKiwaSpN6MYKMWBX9tQ9uzzkFvjQXR5wJUKrMT1GuyJdFhBkeSkZ6iUK6EUMYfqwRoh58TeEnzkGf4ZdT",
  "key33": "3eUApGomG4LDw2NHTrr2ZZACyq8HJV1W8eEJ5pb12Exuizdoze5x6MBMPMEWNjiJc4tY8UrZbPsRbfDgkbQZgcqG",
  "key34": "3XP2nedxwLwHuTs61JqCg8yz6A4A5v1icK6MjuMb9fjnAfiV56fBABp6BZ1Anw8wZ7cvMEfp8AGmDPxQw7F1Q8Pm",
  "key35": "3Tb1YTPZwNXvWgqvUcUB83WunNjXm4Hut9pHTYEuoDatfKYvw2yhoC8sLHy4Qs5ipiTeG7dhkFMKSgHv5NzLFbrA",
  "key36": "53yRUdk25JExF6iDQ8rSaYGmo8ans6XoVMzCFq9KkZPof6eNTksktX4H7dnApeyKGzY3fxQiWcedwFbcYa9oCWX2",
  "key37": "fEexJpNAgUQ8FcRKTdzar65oNGQPU6AEQuz4YjKtEomPEN2Kv49sGDQB5KFrXMCQ7AyeSsbhCKccY3m8fG1kdP2",
  "key38": "4xL5qmgjevCH1YwgLvyLGHZ5wkFn5Z9r2vf6jdariyhLzQSwLGduPU9LqJNMKqhWSSvaRe2vBNCsS1pxXJuMkQNX",
  "key39": "4g7DP56Q2mFeqvovX1zGnyQJawaEoKx5UotizJqKYxxUyaks47VEfYwjgUEoG4rtvEXsKPrdSQL6MQSk41fUAN7m",
  "key40": "XmkLfwBeied2BAomcYqe3yCrP7FvQhzpwkW5RuZkCyDJcJ9dcHGqzNNxCx1P3AW1AVmTSKDtwrDww4vxUBkA5n3",
  "key41": "2R7vHNybyzvp7qZVzaNRcDiMrXix4Aa6xcNBBzEPxSF7NKNUYiWtpLcm9nKeZY1u9yKmjDmxpYAAyCG3JHdZuuN1",
  "key42": "GCe9e93sHnutHMhwWkvUMA264n9xtGDWjHgHFkxYuFxAUq9uLU5dDNV6CHPxTEKhZH4PUvy4AtQW143GV5Npu23",
  "key43": "4FCqknzLDbPPdxq5XfF562MXkALQYrYPgtWYEUgggymjQ1msMSa6weZbtPM74u5sK36TuxVQVE94x4PLm78oWCkj"
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
