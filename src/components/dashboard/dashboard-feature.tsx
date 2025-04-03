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
    "4bbCEDrruK9wZ5PwF8RxAuFcwNMDWV3nmBeAVkJM7PWZNZpyrZAgRwqmNbdd5WJqwXG2DL5Rpcb3qvVvADYGKv6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T3ksXe7kUWpi7ezH2TmBLznbmv3gHs3pCtz1moPJRWb7n9fGD4CtPZf4YRdRDdq4sh4AjzGbHQQyW9QrKVCtU2t",
  "key1": "5C2e6nDjPCoTXW2FeiSndpEnXVEaxU8ibfKQ5Em3Nv1hoXBdXuurk8JfcpxxqoZD39qvsvaLUNF6e22E2B9kY2yh",
  "key2": "484icEpsNEkjmJxNCA4o44KnLNoKDaFHCWmbybtcsuARxr4TLnDxccgyLXuvvjy7t67MVZaQEw1LbrPNdemrptsn",
  "key3": "2ZhUAEpuiZHAAjcdJ8D99WZqxZtJemnoLEp9mxhQvtJqtTY6X6Y1YMY7AVXSCyiwXhiWcHQP9W6X2P61WTJhm9iR",
  "key4": "2fQDsUoeeVwV8NJRwec2WxgHirUxfqNq7VPJ5N5VrK6h3pPMKcRXXT5PvaDQf2ZRakF3KGZLqJ1Mw7rxcgGfogzR",
  "key5": "3LEoR8LgrwPFfWEAactas7qipNkMoJY3UK1ao3ZEiWHgSNXvkmxm1M1zTPrPqkNSG6LmNyrXAyhJpUmgjDXUKo7W",
  "key6": "3YTW3fuEjccebE7J666me97C25QWSh8dSZCvybkLTbwNVRdCDU9pLDQkbr7m5NsKZKbCtRQfdhZWwhVdvZQaapNh",
  "key7": "5by5Bsqrg51tfvC72W7SAP5K4qNW7UuzvUcL8QaaaS43PG28KCda15u3nT8a79TXcutkTdPPjcuNHVBHHaDPexTx",
  "key8": "5gbs1HjXwB59Rmad1c34zhyiWmBko5X8EwmGrghLnaKmktVKHPdDeb13Nyg76DxLqGFZUg2gE8jq8W2kidZcbiA2",
  "key9": "48ZPysuWGVS7YwxqX8BcfUhVPtFF1qsXamhWe3H8M6FCS7VKgLsEEY825E74BAEThJGTCZVDANAygHwkUmAQYyBS",
  "key10": "2Yc37twvM7wmzJ6ZpoMbb9oSUEN5Pi6HV5rY2SXbeQteveh8mn1sZjqGv4RwkLmyizv8L7yoohLEkwLqFj4i7rYL",
  "key11": "654xpfzAQCJ9dptKdq6bqw2ec16ma1FQNuVTt46vLWjYvsPRRJeJQjCFQC56b9zdiwqm8vE79Jo9R2EAynixPqAu",
  "key12": "3jaWnSQ3xUftq3YUEijFyjBT49dNH9nMqiNu8CJ42MG3smgKFjGLEPfvH38o8ZQDQR3CMVUrhhEg8hoA35BmjU3M",
  "key13": "4swn92mXSZ2UXsVGVniYeL6TBaVZ3ahzFCn7Lasv7FqB14USeXLG4PgHha3BWR3doJt1wq6DAKeFwtyJ9Ysox3bH",
  "key14": "3NwUqWtqh4MMBhX85BhLFrrhEMJeFNRz9B5xHK8F4yaeAsDTZPdYE6yTTVUgB6ASQfPQd3F4LG3XWGU2tNreBQ21",
  "key15": "KBGLX8ZaXP85tQ3gKjaBUP9oLKKwzzvVbGU5LGv67Wevs4NBBNoPjgx5vhmsi1M9xaK5XqZDtoN6zqHyM3epnHg",
  "key16": "3r7mDqVxxf41GSB4R1Gn6T6HhjJvQN1Q6a2kPumF2cZrjz5J1Js7mk1AaTfRX2DT7fHyXtGnDMfZoh8qxNCQj5rP",
  "key17": "3KAWCxRYGLRCiu3S9JbEZ8hSauDos2NzU6JpaNrriYfqTrPqtW8ws92AEwNVFKatn3VtSNQFbUcrt7q4TJS6uhgs",
  "key18": "652n4ZiaipYcu2jkTeiZDec35hgvsYK3wtsXjU6CFrJbUBYe1UAxEq49kkxZRD8DxWJZnHeHazurRvU1bZAg2NfN",
  "key19": "5HGyH8t2tBRXWJps94cgB6BZ7w6AF4btwR3Lax5r3tgrM34yKdy1GchLfckpeXKB125GAntAGHk3zjTpu2K5eytD",
  "key20": "3NQrBbXCdVHGHk62V5Znd5Nn4B9r8sNTpRyT1Tb1eTg3xbQAMYGKVjnuHm8BFHzEiqStzu9byhor5SbFvEo7BL7z",
  "key21": "5RfHbPqYg8sQJH9cj5wQkLod6MNkshUSkfD9ykHhXjAQrZtH8RoKc7e4dAX3gXbvEs9gh3urjndjC3V1AMzY5gbZ",
  "key22": "2UvZLPr8ScN7GXNeMtsTatMHQ9KCqviJ8vVX2ijj8NaJ33WQBqkM5rQrBheMBip6wLechMqrQEeFWW4HJ8GgvAyJ",
  "key23": "2wojdPd3fYBbSnAEV2jxcYQpv3bdQkCSvbHkT3W6ri2prMsgauVwz8GnnAFMeDzxkYNfX4wqhKyFixo9kfj1SxdT",
  "key24": "5iRVKGbyawktdsr92e1QbiNy1NPj6yTExtXwUrwmRc7VHFkz55j8tVjhFcET4VfpB8DC2S4872u2CGtZ7WJmMTEE",
  "key25": "NZRYnTdt7hAYtJsJpRmAYoNHn59xkpUxYpGb22q96nhtit2NehLdwYisTeickX1Cse4zSMWu8nbtt7uzCFP4Upo",
  "key26": "uDQEaSwkkBpQ1BRXAUbHjD5zRBEdXhBH4fk3qLLxSKgpT8Bg8a6wU7p7AD25mC36YEsneykWKqWsgBKwhLbg15J",
  "key27": "22kQkd5ceknQiVETkrh3QDzf1VNWwyzizo8qsuFdi5vL3kGGxrv9kpsZkr66KVYvxwcvxEeifyeRZyrXnDMTTAaR",
  "key28": "zyGo9zKtFE7nveJyj36U1kjYS9dAsTpmtZiNpNeYHe6prm9jvox5Jr1a1vetQHykhdSnd791hckpjFtJW14nL72",
  "key29": "4ikr74ZVNjbaaGDAccSdJTWjTT2EtrNDXW7LdtDkvn8rqgh8zeQaYUXxEkc4Qc7ABqVhQj3WeZguaLnERRTCmKFr",
  "key30": "5DsavHitHw5iSz8nvgRXpSnc3kTyGAjkV6tKXr24AeYikJ1CkuY9jDfNZYxtZK3zGbEfT1CSVYoa7ejAJRaqR62q",
  "key31": "SCwLvceD7hmLaurb5jCMpvDWvNVRpTo3bNQrF5nRp2RDNYxnLz2UCaDo8cUy44YQ9H6Z7BipG1SgXif73oxQ1HS",
  "key32": "5NTKnXNPuAYbCvkGPK15eA1MNbmB7NaBZtH13KPhkWAwgGsf7xtbt4bKghdF6CjK3jxSqaKWP2ZXPb9XhR4HoSzi",
  "key33": "26zXKR9aUmyJzi9NkS3u5HTczjhMEuZkRYFTyJrrhEJTCioaf56W91wKJ8Kjy1Rf3np3kCZpY1kttxPpRFKf235S",
  "key34": "gPdqnWrP7xKpq9gZRf3vzkfTNdzzaNUupVnRxiDdnMTfPUsRvtNpiLrctjPuX2cu6H68wGFHmg2TUP7ENMdGgxJ",
  "key35": "fNfSzG5obyEo4U5j62qY715Mdw8mmeMDLZydQVnpHwBQJe8bXBMhViRFi5dB6ECQYMppz3U48uyvw8vQMc1kKFY",
  "key36": "2nWQwn6FD64AkyJeRSx5mCdxrMEAX1PcC2Dzb7YbBMTh8jCXxZL1AqNjTcPy9dsKApVg3nDCpL1ykQpcwT9JyE4Q",
  "key37": "bjDirzwDaRjYJXHB5e6p3eBfKjfjA7LBfueMQD7Hp7X56bbMAgroaPhc7nvgJEH3FE3hhYbQpJW5L2Af6ieGi9y",
  "key38": "66SpaBL9kSrLxMGKzsennWoWwppuko5f7QemF6rSD1TnJ82qqWoopuhYQaxGitPYStSAwDbor7aHUppA38qqZosA",
  "key39": "LjXagUvhAffP7StnRVFmorEu3dXYWcJEVMAsFSyjNqLcLZMzM9Rfr5ZCyirMux8RC6UPBeZkYPwVg8tqLEtPm2g",
  "key40": "2rTSLvMHdvD38DAeLDHgFEGbqvTBc7tnbNdUAFBx6SMbaWEvVwpBhyGjUNuF66sZnHe7326B2uxSR3Mppn12D6tN"
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
