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
    "2AakG6wYT7xmcYV41bHTEGwMjYsUyPAhyYnBxkb3nwFvELEfqZdT2fakvaDsVPVSg38BdwmMmGhtZA8cR7YiZvXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DyJzkJ3z8bmRXeKsBr4RS1Zr2LxjmYjL2GSBHKYbpvxLzn1ZJYETrND9kW6n6qvPZNamgeFXw95ENJg85HH3UKi",
  "key1": "2yikJ9R4jFwTzdu3j6c8QDU4ugeB2MJrqsV69oEzT4RmHZoEQr9RbVocTAAqbsMVQ8L93aDKcVeiHGPfg3aggWrs",
  "key2": "2yVkU8agz6JKCtuPrvPvcahFQQ6Pf9mDQagZtR8YmNvudvvUfaRA4o1EZzhzYgF3XMgawCTsuS6vxhKMzDN28fN",
  "key3": "zwozKVaES1UhL5d8SUNeUGuR6bQ4VV654a58aQVjy79RLoT2u9h32P3NhycYaWMLWGKpLUMT8X2VUKiJkQVCj79",
  "key4": "22Gi9LZ6VpvKzcdjJ1TcoKidC6oBxPodUK3SsvXizTCez1aDfB2ASYgvHcVPCvnS7Qxzd2JpF2jEkGokSEgMBsnA",
  "key5": "5gKWNNskUQVy4HfdhZqJoef5dUgjnzDFkkFLQ8KpKftHSSHk8dhkvYx5Nrzd3vZb96HdEWnFrpgoMW6SUwczHzv5",
  "key6": "2vaRED78GstpRnN8NwKAe7VfCcKrm5u4kAwqtg86E3HjFtwvTMMjPmd4E7NSXMcb673D4ys7NUcN6ggAkNQ4oTeP",
  "key7": "3x6g1cQMj5qjG8QLJixAKq3HP7FkMkCRzeSUSt35fXH6B5gDojijhXqW5aovYTSEjeb4ekifW2muKsZEvctBxT5b",
  "key8": "566u2iFwD3nDAdHg9szMjukRCwMpJ6UCRsAj57jLshyTYkN85gR5Y6XQg9vucdpuw3GviSCCRKDAphCwX1c6DQU8",
  "key9": "bdfS9ArQeKRPVVarbfiLpWSkEy5XQDkH7VBUfJ7Ajytgrc9b1hLW7hmYmLuWTeTSu1PUo2j2cFUjXA98viiBjid",
  "key10": "5CjpVPFUfAY2xJkcs2SncqnjDSBRutUxHStTW49pNKYZzPd1AvnZFxCADxnt8X2xxLJJqT6EsmQRNRrYxscyxVBo",
  "key11": "59MT7NHPeE9vFcuEwv94A5MmGEHW9SJ3nB1Lr1Tkb4knrq4Wtr9YXgARmS3tFoqNLmcBnjBHnpeYiEPwXqJEXEwi",
  "key12": "2iyxNTJoaqKF7x5tEszs9XRuLJYMwHUF7uq8sGnor5PDg4Tofu3ejaATrEScQfha5jApAtMo2DLbKAtFo7UsvWUD",
  "key13": "3H8P8PySbnK8BvhLhumXFZWmVsd1MU9ss6aL8mn16Zhzh7Chp2XpLtegmJE8G6Uytd1AvnRQ2CXAvSwCTTAZ6ubk",
  "key14": "kkHPH6SzEzSG9N3SmUBbXGRMEr1P6gWuBChwxQzwkFNTwFgghEUbeYzchYLS9qfpTd462agmZzmazJDc1WSSkGJ",
  "key15": "4hyz4Hr9K5DEMJ77spkPVuNzrRcXCXKPLXkYhitUtWWFuLeLBNUiCU9o5z2q5PoqMeHPM4SoWC58SnMVFXHFCtW3",
  "key16": "4nmK9j9bb8M2f1D2dFKuAYUmcBDqRm1yhF1Htk9gnfZw8P3FJnaRoNyzRzVQj7SYdY4PK69oM6iTEGBUXyXtV38C",
  "key17": "3Syd4nAiyAwcV8emabQYpXtFdDi8a1FDmp4cbrGfVE44Pd6CCDqttrJrBVCmnK1TRfq5G7VUfQUTDctdoFytNi3P",
  "key18": "5tT3Wo2dDQRiGQLF4KJp88NsFoVHaTEZLBydtzX1n4qXTSrM5D3bTxcGzA6H74K9YX7rGCEX4H442aDSAXWCGpEt",
  "key19": "2SEoBPZ4KFrciiyU3P5sMscMJfJSb4sFFeMooV9aTBnRA2sp3gu9mtK9Z2PzXPJ5omVbwRwLvEZeLoTVFZeQXtmZ",
  "key20": "2wiKxH6zpX5cyvJicMr3Yw1iKmSGcTJJie1pAXa67i93xE4P73ATVhKgoActneCtNCjS8tbnz4YCgF7b66TKXBXB",
  "key21": "53QNnd7D5XQ892KjjcNbrovnRaN3idhaDsMte2ZTDbjhPx7knQGMfeZbcCjFy4txwtuWg5uDEKn1VfB6fZuqoPZY",
  "key22": "XVwVHEhmVzFMAKVsQqpPRJvM2RR9LMShhVJHRbMoY5xZpzDiBS6UQX4DXSaaNSqCy4MY1qYtXn8xZ9SKDkjcopu",
  "key23": "2U2zjXNSKjekXmXkCfvpaPbwnEssz1TzCp13c6MkkNkwGekKp8P4Lf2AqDbueUhiW8kEfNthv6T7ha21WTCC43aY",
  "key24": "5d99XSdM9hKZCLMTCt54U3US7mpw3SvEQLEcBBmeLSgP9fxZQxjnDXmsbzaFS4yomzv2rDTxuVWPWAFgAX3yzQpV",
  "key25": "2GHsmZJZob2PPEMshML7GDsvAzE8ZsxyExevaRCPLrH1LxaN894UrMhpAgn4kwVQJuNvkM6wnWEHEYdjxH1UMVfm",
  "key26": "3s64fcHgti4dG9K6xXz3zE1y6xvkDPRzU7BMyotY8QxPCUQ6MnmbJtd9kAw8d8nRs2NcU31a8YGwNWkvkjxuZurK",
  "key27": "41Fv7MRp619pMyhMq1RUF6tVF7ACTJ1Naye4mHuk3P3mTuPVWSjj71Vb2hjEBVgScp7isUDtjvRzfhwWNjTmRJwo",
  "key28": "2dXzjCkuQLj6YAA173rxrbD7AaNYQXqxmbzGKdavPdmbkZtDLAwA4hoLvoPyfeM5JnHKaKfx5Xvy6K8kvxjf92de",
  "key29": "4ms9ZwMJZinSoDET1j4K1wUeY8mbP3qny5P1iDwbseoiLuKEdw3PeMcCedi3PJmDAzKeCurzuvFX8k8pSeQV1B9j",
  "key30": "3eRfmxgGZ2bpBETajTQw86Zn9SpxvGXNDJSoESj7jgUWqsMcHKcqcoapGAc49wp4HwWCNMf9sJ9HT64EFdazn74m",
  "key31": "48jmGP6ejtsJsUAMt43kT92AMDPAxjR5vQ95zyCCQxHf8Pj7TRnZ1oRfCgmAr7oSzbbEG27eeS3qPhTC42WotbjW",
  "key32": "jqnFYn6Yeyhuqmz3FrdxYF7Drv6h4GzzES2N7zHQrJDmwM96sa7QPrsdesV8tSseaF7BMjhEoFryeXa4MX6R1QD",
  "key33": "2FeHzDAjbyYPd8SNtYZ2QgN7kYeB452b3JmZbhHj6UNXhdQwqS17bfVWHRircQR2WLZ1nrw9Y3sDr3SQGmpj4yM1",
  "key34": "2LNwHNJQ1m8pLaBpRodGZCsA2TvhwmnxgoS6XLAyTJ79hGZvRxkqQSVxG1tPWWoKdabAyBqyJZ1n3YCGUfh8MpGf",
  "key35": "4FTMTm46b3hohKSbU6XwVLSMZ6hPPwh12pS1mrrjgwD48o7iPiyZyFYcHykcjd1wHPdiDjT3V8PgiCAzFQZj2jHx",
  "key36": "4JHFYAJDCfioTWq3Awv8spijwWa3Lm11YjjK3hU4mZ8KXHUajD7kp2WBk22XrRmxyx23zAXuR7Huodda3efWg3bM",
  "key37": "2AmnkGiQ8KbxPnY3Av93MmnX1fnKJqjZew3GeR8cH1vBFT26aYi6EEjTvQTDKG51GUprVM48WaCykgxNRTHrRZCo",
  "key38": "QR4omztGrvAc9QcwDiPQRLDBZdgbp4VTarZZD6wdAyawKEhQFPvSzniyHZXwhrUC33gzRuTW5QmiACs53W8KifT",
  "key39": "3CBCBaScxELUAyLemAxm5iYQvJHfUpzMc6GiwkBTGEKGTeRAnkg5x41hXENCXiquTnZRU7ybMFmHmuKmjRCcUG7c",
  "key40": "K3hWj4aP2uGJK5Tou49xQcFFXvsVBYi5S4AaQFJ7sSdWjdrhnUyawAnpMPvLGHumXsfwcWjKXsxNXg61HiREFty",
  "key41": "4QLbNNLCwRTiymSfWes61p73E6agfAW6bP1BBNcootU64B6rFMU4GeXx98ry34ZoKqptGsYve41q9FSMukrF3Jc7",
  "key42": "2xfPWhw2WGFGi3NNxdpZ6mUNYkM5RjwEBPjEuGh9fZobbuao3WDsXmmPLYdknwPfhj16moNkjMehTR67SYkG9P3j",
  "key43": "3zxB3cx5uEcL9GPhB9PAubRQ37L5wDwLieusHmQ1cJHRVWv2aLnkuFnweBCKmQARaQMxGKCEbBquJtn84GcHZ2p7"
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
