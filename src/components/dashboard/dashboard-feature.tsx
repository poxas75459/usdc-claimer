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
    "SVAyDz7BhVW93KQPwnPJ62HXwPNSNBZMbMM2MZ5t93gRBvnYGgFiqbUL4rub5dSDz3W18qcBfLzaNzerKzfT8kT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zdnMdtc7ei2jGLbsvgRQtpvLLqTJv9pAhb8XeKLggYG7RYqUkBaAadChtsbp9VJKy4EF3dkYwaouWYzJHZL6tRP",
  "key1": "3LYZfWPo6hb9m6GYNT8FucsWKrGDA5f7yacp3XacFQRnH843C67MfysA8Gra5dnWEpkMfpmtyPiKpLptbbMjtTm5",
  "key2": "2oVBmFtJSpsZzNA8D7uQsmLqoxUP3GLTVbvz5nf8GE6ABNvxeN82kg61RKPaGocoe3Df5CjiWypbjW4haBy7uxDL",
  "key3": "WY4toLN2ubMPcAevEEpARfrsGDWCRowkfzgPW6gXzejoznn3qBu6g5RKuHAAMC5JxZHdkGqhnysBE7BTq8wDWgp",
  "key4": "5oibqS7UVYoiB7nhuv5aoAfYezicCUQtzhiPtLezBq9RnhoP3VxXVr51ek8CGoXW4qteog9w6tkWQddFWstcq6Dj",
  "key5": "3P8ZFxq9w95QheVKu69HS8xMEw7a4pmCoYjAZutu6HkJZaWw6FEPJLQwTvxmHzUhwEuqtzyS9ZVWbfvvpK21kAiH",
  "key6": "5DzcZR1C3puC1L2hhxrbkfK1GrzquDVsa7dqc9yYg7AoDJ9wPRFGcpTrbhSuVp3oGkD8GVBJHJvK6sAAwkiunhwz",
  "key7": "3SqZqX4XSUpYd9e1gbDRoUUqhmPx372QacXFf11BFEN813UccT3EoCL97oC6vpG45UsxGhj92KZgFFB78A8y2L7s",
  "key8": "5ELPtyVKGFYiwxRfJhpu7sTTN3rNJ6En1oHzg2oMkC1XHp6yNsfMPmFBKR96jUzasoymugW75H4fHk7SA87WpQsh",
  "key9": "3i9rYdaEtnp7KUzcWB5CNUwK2Cy5FvVwNKX5VJPJ9yQ719qjLMB7kQUd2Uqo72ieddtPUNvMUZEECAYHoy4Xrrzf",
  "key10": "RYhDJKWdTYG3TLZzYASfTTdywZ24Y5pPPaKTBcYJR5PLVQP65yeHqg4jM6FceW7gk7wYrViPF8Q3kt55gR5xGxy",
  "key11": "2jpGcXRa74wDKZnGQNVMm6FaDT4ZmxD7FDXDQpvMZoZUhL26mSxH8XeAPBN8mNHC2Rv5ZQX8mRYtbuYv6dLdZcG6",
  "key12": "23qJB74Shg5vuEodD4h4YUpTpy93bM999Bgz8qQcMPRofB4TC5CKyGBoeVChzfhjpekXyaob79edpxKAaGrDtx8s",
  "key13": "2e9SHPzHr1LjTmc6MZ1Msug3JCjvG9vYtVVBENCUQXjo8ERnWDMscLjCRc72g53EfZq9mXN9cQg4uZ4GpvfZuyfC",
  "key14": "5hLBs1az3JGQb386b5Q9NekwqfTa2BDUwB4nEAqtuxrWVB4gGiPP5skDTcCFV7mgoXrFBeQwsEjxDtFzse9kBitJ",
  "key15": "547j2arFT4SASdp3my4kekUf1cfKDx7h3cyCLjgB1wFKZbsQgJDvrHTrqLJKYJEgRS1T45Gznn6VDatBkL7ySm38",
  "key16": "3kRXTRyAEVCEDXdVRUhQsxEYgQN1dX7JRgzGmSG6FeHHQyAqCtL3sm1HnXPRLx5y9DjvuSnqb7VKbi6YrU5K1Luv",
  "key17": "5oQV2qoepG1fzJATBZwTov6iRpKwrsxo9cUF6LDsGiFBLxGiMYM6Q8GBbDVvjPCeWWeZGvhxsVvRTjJtCZYCZSMT",
  "key18": "55nuQGHLLhRUJ6pg9RxgVq8icaWZAJQHneSk2kZTPa3nCq9pRHZUAcByBTS2qsfm1KvsVqkZQ6C4sab5C74dZDJr",
  "key19": "4fXQUYEQAMiLGofgbZ9696P8qfofaZe2dN8RT4BDiJ7QWns2aJpecusQV3XtR5CaYxZRZx71XAyMiFQmGx8yQdV2",
  "key20": "5kWwvXfVYiJD3oUGFo9iQfpBLuBWKMCsEnyV4XaiJoPC7Ge7PYWbShcSr26qfoAZ68LW3FMmKPakWg1Zrfr43JBm",
  "key21": "5AbUoUSmc1w4nNVAjemjMraua7YEANf3bwgiY5Hjnd5rzC9wPaiAmnCKRfLzwyNpCYpe4GTMaJiqy4uDmZLTpJuW",
  "key22": "4tVNF1Pi2ARnxNaXvyJt48Yv1P5FZbVSQiDKXopfBzaPbnvP5X3KP3eUcEFVs6merPgUiKHcTeNq6G56pQGzSVou",
  "key23": "5j6Jx1g5armypSEbYpTt435xnpEmUhnhVbnarZwhr7DKQW5qYMSDsyWhfJihVm33eVnbSVFud5Tv6hj6MEzk1iDB",
  "key24": "4fXdHkGH6fRV6iNutBA5CV3dzgJNq1Uv6e9QT3vhsFhUb8pAF4xqXWY64mnzpnM2Hg7KcncKzjXQpDUX4RHGEnXP",
  "key25": "22HM5QfrefxouPgC5hCo1tdtHsFmjVtcKFKvicjkRHi2FwmZ6pcswB9WxeRVFNvY7YprpddsFWomTAtM3coYXHZu",
  "key26": "5eyXMbmtH15zxfyAHiXUBR53aXQGouh3mBMHtkjXeJ4ssgNUbqHaGGYYa6shtGJxNsbb3C6b9iJ8pk8Qd8xTg77y",
  "key27": "3rBbwEQZ4caHgnrPAMGBwrZrTdcxMd8pLQT4rPPZ2g3uUT3CeejNAj8sus6HiGPGpPo1nVi2LnhKF5cQfXRWsyW1",
  "key28": "5XzxNdUCXQLhGL55DNzhsJWkmzJ6t1pFGdbwej5eQ9Lo43ooCaSfvndBcvzjp6QirUSYwnEM6od2uiiYXmcp5qWx",
  "key29": "4RpeCmyAwvzgqYmMeDKmvCoYgBcqJpfYGC7iW1wmYEk1dAPSxyP8b2Y3WMtYoRq8tTjYx2cJJ2MY91s5bSd4DdSS",
  "key30": "2whbmeYXrYM66FQqtEW6HQS1E9rvn4JcgEJzd8qwDoZqf7Mn8fSNC159RmQb3tUGE4Ywcgyp6F9i24Boxo54AxfG",
  "key31": "4Zhv5rvVN4McxRKaK16XzUEPvoWdjjHAVozPACWJZ9n7mM9TQf8vVqLJZL9Y5kmGuRMnJFdcEi72f87NiBxTWcWX",
  "key32": "N8vkkPfW4pjBJSdKCMihCFZzgDjhknGqtfTSN2MrwyYbeqgmx9YLpfzy3pLApcY2TSma6t4kERC2tmWaPTb5rci",
  "key33": "4KJv3HFXZCsGYVsnAcmMQBU5wpLYKAQSgKyVbhdyi6PaTc6H2caJBJRSFyXPBGbdjQCX42Adf7hb5CHa3fz5xNpC",
  "key34": "2W5xFVrxs48bRX8jhPBYw9n99HYUV89vSWFKtFnid99Drok7msPao13SfhtzFY93XCMSMqatzwpU9bD4Tc92hS8t",
  "key35": "2zf7VmRYAmn3pAMPk9uZLiUiP2stdQMAjn53BUwKXazodbeKePvvGxdJLtN8BiFPded76FTmLSf7jD7G8vEzn5g1",
  "key36": "2ap53ZL4oVaTrAGQqApzTBabCemjc67tiZ5Tt4u8f9mY7p4AZm1LVhzoEUjFy4dvfn3VLUKExoZFuRMZLigKiAV6",
  "key37": "57kMLUbzrNocn9k4Hy8acTizyhZDgzJkchLeR4RQrV2XZ4RebGQGowknvpaYe5MV4eH9MzJyJ3UwCE8TSt55u5bD",
  "key38": "4koAzyy4sR4w1L4vLtGqpDCThDDoabhBTgK5HTMMufpPLEWVyzkhMRcCNHn4X67oKSjUaasnXNBwrcoBdVbWRGve",
  "key39": "2cymBjzNhUExSdUCBjrvQEi56GCWVcj4EPcyejLmUo3nbcqsk9oZcTg94HZTWWKpYQjTpS8kZcMjFwKdEhExxsee",
  "key40": "2dbscQ85VQUYwfhuvmMjpgYBS1DjTTNUvWJ6wGTYF9YPZr1oUYdbgnaQCA9TKpVcUt8dGyXqGQFPatDbottm5PR5",
  "key41": "2bdVGcbehDRnCAzwRV9EGyBS6xFmUMumZ2uk1QziUFCj8zrJoVU1GGcFaiH7e1K2M2DJVXcfLkxpJGPbJpB2Q9zZ",
  "key42": "YpHja5tDMhk4WB9ms1iRgUbdRqAJLCYnFjF9U5t4cwhDXaJyBXFvmzprJi2WBh49EUJE1bVh3mvvps7HAWUrGAx",
  "key43": "473vjSdqGQFagcsbdfkp8Y5Yk1gvZGWNUQmW6WyAxGxRpBgrtDhHuUd62Fvj8YmJXbVJtbzhJCczsoP3PCVR7W1u",
  "key44": "47tmmesLeNoXBXfPXUiPtsQ51VVB6vMF6mECMS6N6yBNDsUndd1HKqKU9vmbYBQCmmCMcoi448oPrVkNQGHY8zX6",
  "key45": "25dSSZmB9bHWntLryvi7Hf9WyR5rroDvHRRz9Yhh7rWUTK8Ch2XTL8US2diEgiWXraWzMEiNdSkPxztB63CxAKG1"
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
