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
    "61s7DRPD9Rgv4fnBwpTqLZcgjoMMtycdFNz772MewBWN1Ay9g5XRrbuirTtYpmG3GZc83RJjA4mLUVdHdNjf16C3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "148gsTeckY1LGdLrDpcreJgLMTEV1vbiUTsfMbHPU5zwWzSYDSohVgeH3w2K1VSLEE4kK871ZYnCGm1o4QAW1uy",
  "key1": "5ffa5DUD62GKK37Nq1CD2UBVBHcqgNgPVR5cqroSUYXXaBDcdKL4LY5a8hGEhDwqGtnRrLJtrGPL1p38BZ6nXK5S",
  "key2": "26BY3n6W7SN2fyG3P2jknsBFYBZAk7zoHKDN5JAgnzUBiWUQ36Ne6BPuSNDSSQtVR2YFN1AErWYDf1NzPffZxtsV",
  "key3": "jgGykkbbQM3crW1HLgPDpS2tvieFYVk3DqrWLK4tVfXNjLNBVJeeiQKjZQfG97vfRnfjBs1TsUmdNHiJw4a6pMG",
  "key4": "65qnqCZzkhQ1V73i5oxrkWGgLbTdx8Qww3uwCemhJSDC3XrrS8MzquoVPMUB7Rx5ynKCeLL7gsWLL4RrkPXVPXK6",
  "key5": "G7kxgcc4QGLMXBgroKn9FNfpVFuz5MXyQzFfqQKaetjzU5rrCXoSsYc9s1ooqtCk8aWgaMtavviNkiDsjVhU6nJ",
  "key6": "3qH6GacNktRAR7eqkhbYiz57hyJ5YEUUKMo2V9wVRtgJwn25g9dsbwywrj8jTTKZHHtimC9y9Wu17AcFN4mDoeqf",
  "key7": "4bfhS9kq6LRE8fFRZ6Bi6qNu3PfQZVVjgXkc8FogaFPYxScRq5i5rYMfeQXqi8bWFczZGSBv7n93fUHYpdnmREFL",
  "key8": "4nLAksw9MbBSpAFTyqjARDyj55CxAmeSfbFbj9FJ8SSsdi8sLKwTkmmFdbyKeMJbgePPW1bxnLv31VcbY1hzkhQ3",
  "key9": "5MNJPXLtcA9K8AQNjCWxgR2bojaztNH5kh1Vd5reX2Rxg8R3kcdhQwQ3S21hCSPqEJ4GBnpeSx92ALBETBVnDFd4",
  "key10": "4UCCgHih5LSPmM7vjLLKdEvz8oajy3pkifnQM58uAPasd1nWXfmwwHFjqEsf3mgf5moLJxacjmgzm6DwyTFiY2CA",
  "key11": "Y4jW4hwbD3SVfvHxPzBKQ2My1K368F6GxFajB965DMKriGU49mV9PxdaUqY1gfKB9a4bYHABG4FpM92Qg52KUht",
  "key12": "2t1bGAnUMwsgCvxGqgH2CgYYbSoQVFo1iyZmDhBzs2wbZa3PYKzXpE6dzUWedTck85MZshHBH1o6yQ8xUkUDK8Vx",
  "key13": "2yJYevSqgjs2K652WdxXMGuQLADAEASdeRi61ZtNHy1KoPzCWq7X5sPWJMqVzp4YDkz2k8ezmBnYZqv2cnihygLv",
  "key14": "54FSmmSCejSTNg1qHwovVaDk9XH4xxvtUphTdrQ8aaYdLKGUiN6gVSRBCBECmYmSG9CANqjKdRPVK3yyLRtocT5t",
  "key15": "3hcUs9RXShsQgWN9B13sy9a81BQqpVcodzcPppxPDmNWeJgqJn6bMHkQNCUYwsE4qyPsrJrGoXhFaRi64bq5Tdv2",
  "key16": "443ravEZTGc7TU4TKJ7HVUfFnXoBQzjmmddq3hSMKnfRQnpeqcWRiJvFAhvBTXA1Zs3G9w5kCVHnHhffQVPRe473",
  "key17": "4VSYRs9dgbkBiWmsjTNxJDgpNS2Tm5epA9batAhRxYJ6ggNGNXGBH1Hiw71tPfVcc1c39uStSDErGQzQkiQXFvFG",
  "key18": "stEfKUMDW21nThM7Z4CKR6wYqxWh1jwkH9yxkwCLDNPmZ9s5TJ2dp1b7Hzs6Me6NdM34jyU4nwH2gBQSSJStKLK",
  "key19": "4AFv8ejsxPCGvfHMhvukecJ41FQNVwuBXawZJUB42pfPJ25JQFhv9ZEwbnhnWX5WSxqvVZVkRYZsUbMpXybzRqgg",
  "key20": "QXLRcZNart8wSUzSTRfVffEAaEYMz23UqFPqvt5gesE6sTtt1Vc2ucKaSWiHHANh6E7rDxEEKbhqtfNsGKZ7poX",
  "key21": "3Q3h12KAMwjRqbZsKVnNGpkqPHHMWaXjs8c7LUw9KTWpCtyujAebT4ZmmrKXaGt14NAQqdRLcTQDdu312zovx5wS",
  "key22": "2r5kn5HSSvVxhuKXQgmEKw3zsWPNYf6x72Y1ByhT2wLL4wZyn512D932qLtCXcu8QJJKjgZRc7dZPs2Hw91oj4fC",
  "key23": "46Hs3tVvQPQoQrywxmmkNzxXHi1ytpdPCNppoyZj1wkMtpprRr4XkdkNCNqUJym9SLjPEyyfvWB1X8S1zGAKnd3d",
  "key24": "225P93if61M5aQU9NYi9sHzyubfgGZPRNADRgXGtgAhsktAFieRhTwwpkts16paifVCDMJqQvBmWqZsgqmDhRX9C",
  "key25": "5H4ET8hoEc3TRUafZAB6TYadrcgnCASsTui6LJk8hqFpgthRETNheDkhiY3CdJR6sAW1KtFnHvgsK6hopzTFYSkD",
  "key26": "3VRtKQsebuZ9jFesUibs8thM2kmbRcSrxti21tk8GCk6B7ZXUibWmmxfrQhtSWHaTerBu3tZzUiL7bbejgVXiRfZ",
  "key27": "F9AK1DwRBgJdb3iF9iuEFqVPwyAPH7338tuXDKEyDNuwXLraXUtUsTZ7TEzmzG2PbksZMVHPLTkGM7Um74qA3YW",
  "key28": "5p4sQ8wwCUBWssvBwMD8Lf3RGwEoktZc5CrCCBiUQwfA6cRQFBLBtB3CJonTmueixUa4WLQmB662nTUJcP5eRCpx",
  "key29": "8NB5HswkbBj4HGS6WAihYiEUrcTZb1YcBztAGEVfMxHLQg5QX3DYY47cToANDLDyG75Ci3QZKa5uwku5sDeHBgj",
  "key30": "3qjeieMLeNtfaz9FfPw4aSAWyhXvTpw5tDgpAXaXo2Q8k9Ez5sPfnjuQBPxTyckaF4XiA5ggWW6y7MBeLWTbs4Dw",
  "key31": "5Dr4jguuC2QbNpXkqjccDf8JZvMP7uyp6zMjnLiQkaZeNL7d8x4xnDjrKccg3tSqnhh2iJ2nXahGuDmJwbJsT6jL",
  "key32": "5hQwG3dh8gjLq7EHoBRFUgRuxWVykK1ZbbqwFhZzVv3rB9GaYC1ULditSNH3Vt8xA4W1vPP3Ua1u6HNozTyRD1vi",
  "key33": "2anY4wawerRw6recC5jFHRKuqf7hetz9hLrR84ANGE3FfTR27H7fW1qbjaJL8yhi42kbcBG6Tdy5DPk1qsfZBXF4",
  "key34": "27AuzPGAx5SbMeyVFWULwu2SP7o7pUfgwsbYsqNqwPARtnPsbaBxm9SCngreRJSUd5DdeRC84kmiWrdC33mj5nrv",
  "key35": "2ZSwXx77ko9V4xj67cEoXuoQwKnevEy5HM7yjJ9G7CazMGHgE1Gk5wyunnB457SpVZ9asWLUidBuANLX642SCsGu",
  "key36": "3mLtdWYkcTaToixsuiaexpMHp8xVs6xycBPa7PvtuMqVMA8ssq7ycyWsV7bjbaYMWFqzQ8ASXzZzf4xoJovULf6n",
  "key37": "2dqNAPQYDXCRG7i6pgG6wHzWkiMvbMttncPqHkw7p88jcF8kxGMNkMP7LJTmhYnVHArkdkvyWsCX7ueXE2hJPfhb",
  "key38": "3S3LLReP84avLkgoqCvzpr8diLhKKNzwgzeUKHvehGeNGkc266F52E9koPF6eqkUaWeasz6BtAz8rJ6G75dkStbi",
  "key39": "3Au6VecakXfkAfbxYSukedrge34HusEa7mDJHavca5neidYmhwPpYutTUSqG2WemkJ93LjQcnkTDyuWofvN51HKF",
  "key40": "59e5GZetJcdWjUBhtwWDmGxCpkY1ip4qp6fRUKc3LeKVR2kctShdm9761egtyaASbvPnRozKEH3NqQsnPFXLCUjk",
  "key41": "4cnVEvB2HxBR9v9AfCsP6Ru3N1dwtmMqrdg2UdfDFyeGXdnn2YTLpx9wq66yAHAGejTfAQM77Q3GwVNA8bDqtmMH",
  "key42": "5fUyJtPZW1wBTeQziaAPk5Xeps7TpJ2iYt58tSweGcur8Mj2k7RyRkGCdzFzAytfnWZMNYj17F3DpZfLF16xVvXP",
  "key43": "8YbTEtA4jukunm9Q5keAZ1eDx3hxj3nn13WcwRiYeY4xJmfud79NzLexwWQVyWN4KWGvHs4kFcmKVxWqB7JnkXC",
  "key44": "58QHSRMEkspFEUoMDnd9Ghn7FVduN4QiLADyasDweA5kRCamqN7Ztyf1Rf9cJbRhRre4oWVbyZSFttq8zDrYsvXM"
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
