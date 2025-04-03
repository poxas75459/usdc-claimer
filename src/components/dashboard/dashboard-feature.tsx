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
    "5vuiJb63ybEmYEtUfLrYqZxzamvxVDnQJmianN5MFzsDXNUAKn9q6uGFEmoMJ2J6C5DoZpGZ8rca1oTELr3an7fC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23TofBiQ8Vhjw7FGSeBjXGe6cnGW9je7g8iAXG3kLAw2ExjzkQ3ZJRpQG4yNrRKibmSjpMhLj1pQchLsdVXdujqF",
  "key1": "n9KuVZg18qgMTovjnDJGsvAy44ri1TT8s5me1DugNWEcGHWiucPfc2GHkfjnqUg43AWnFxEm4xC4V1uZzhjp5r3",
  "key2": "5bMn5ixcgTikcvnbvdvAL3Mq6BSp2bFagsLbor7uhwA4eAdyPBxWbUt6z5GcGxyBuUbG5C3VVyinKv1G8QoJ1Pbi",
  "key3": "4nopXn8vykPydPMSkChXptbH7cLjETqwm79Fa17cRa3QyXrDhmb6k168F426ne7adFPb7B3VAsey7qXVWD7dqu3d",
  "key4": "4z3AD8k6fK5QFrMsGs5viEcA4JUkgTYNMhbwF2ya4bYioTctJh1738GHVdznMEjD2Xf3Wsm2ZdVoULSs5jk8NpD7",
  "key5": "4U73e9ofQzHjLAK3z4dmkouFMFofNq722jRr2EreunU3pzifg18bxDHjBJRv48YwfDgeecCXbheCiWy7mNN7GAA6",
  "key6": "GU1gmBCkaTjJXpkUcVjUXc5Ya25U5bNi1ER2FxfAXHa25fiQRoDHkEdvmftN9LQU7NcvYZCQb2on4B1vfPvXUSb",
  "key7": "WXMpT3ZuDXqdwahjVAoRhRuCT2XJR5NSEYdke6kXLpFkWCvuiurwjyMmS93Jmnbz8PzB11UfJ6au2Z7CqNX43Gz",
  "key8": "4nSDNvRmhRLAVH8LYeejWL7wuLEpBW8UKo4WQfgxevBB5s24zz1AzbpJQnq7UR7tEu9wfURQdDiTmnk5jBBTvxBH",
  "key9": "3pB7Gj8qGtrTQRrPBZPAkm9aovzT87ZdJj1WGyhNZ3JXbdGy3te1exvmz84Q58QTFmHwsHAhJ8dhL21Qc9LZwAZ",
  "key10": "4CAShS8Th7gDY4fCzDiJFPL8X673e3BXVzxb8paD8roUdR1U5aBShcys3YH41QQh9qNLyD2xGV5Wubm7JTeSi36c",
  "key11": "43qtDhdYHms7x6SsfHCLCzTrb79q8Xfj7PU8S1RJnythdh1gRNACAcqEUoRDUJjts4kaEh8scHufRS1PbWG7Q9nb",
  "key12": "Mz8mDEcJRM3FT34MJQuJva6ktLAF5CLVBJn2EjMgqCfwW2LZHM7CMiFeto19s7HL2Sxd9dWMGJfrWMtU6dGVqyZ",
  "key13": "kDukh4ZwNvHVtzEo8CjE5NGECoFBmVhwP761NTfisWPuQqT7Q5bd8oDGre3hojL3E4yf9MDPYUfEvNRWoHbVhRn",
  "key14": "WDhRqpAfdhEUXHREtSCPwWZtMFAhxWP3WUF7eQc2tBcAfiwPesUc4P75SQoyqJnDesi1AvFWDM1teQd68VzZi3c",
  "key15": "2rFhkgFVNewhgeirva6kb2WnNcTVTttvo8pH4uAieUdGoEaKnHhYAoV6YowPL63LkQz59r7tBhLHcbHtm4U5otMW",
  "key16": "tYezbRD9casQ1h8dr5ugZ18LW2sYkNTXBUtz9nM38kgU7xHQQFyDTdkSJ1yiDfXcXTrQkAQzo7smRANazTQ7DbZ",
  "key17": "56MgxwKeKQhhC6XpY7H8QE5HpNE3ASEbwG5WmZgi3mTJSs22NvMj2bKaazTfJ3tFMYLdcFXYzu66oL47YkES1LiG",
  "key18": "5ujQjUz2iakNKhkotWyeFTmUwoYRWwTHvB9wHgrUcoqbeT2TNjw96ThLE9goS8td4SewVTT1PfXwEKYqtPAprRU4",
  "key19": "Sf89RwFhV23BjSWEBjiaARKE1s8EwNfUEXgZuuck19wQewz7pYYAjgKXGn8UrZcBLqPb2witRZhRqkW76xAxjjT",
  "key20": "53oCG2XrhrU11McfGJiogkEF8J1VCsrKjC1DsX5pa24tZmnHVaKdX3BTAqurnzUw5Au9vL82ct8NSXrbZZZHdg8W",
  "key21": "3FBhqnMemUHVpvHPtR8nEFLbSnMqDoadMZRPSNhUptDk2iJUDd9Wv9zLQTMW21c9hkdYA1eLehQQGXNWpWSngCZz",
  "key22": "66MMzhmvSqe9EyiEaFAnZ1ute8XATE1qx2vcoqX6g9wTbVWc3ZGxa2AAE5weiiom2tqfKd9ZhFVNkobuzmsQ9rG4",
  "key23": "65StKZvpb2d4ymhCRKqMu9phhRswo7KysmEU8qSpKraWzNfwqfkP1AGkkhK2YX7VhxnHznyY81ydXEALnAdD14Rs",
  "key24": "2NsFoagLE27XgCBN3WmdXJqmZVmw54qacWgKhVnE12b1UwkvJS9P1J2JdRH4qfq1tZuYtpcXVCdSgqLeC8FDv9Lm",
  "key25": "etdL3zAzh8sAk8v79WMkXon4oTFeZ2XUVGn9SNNhHxuVXNzsacqGvPXptzBHTJGBskQhnQgwYo2hMNmB31omZuH",
  "key26": "2mU89JuNB56FzUuGyh8Bjnmogg3AtxJbEGsPD8WakvcfwgX94Nv6GtMBaskQFZPFnRdKYxAkHJVGsAincnTo1Scw",
  "key27": "3QZ3qCPoQXySDJ918k5tgoTHHbN6gwM3Guq5t1t5XES9rMY14gmPFBLPnbYghG1QgsWb27P8mFnDFkoHLyDydQF3",
  "key28": "5qj3v5rpQVU4qXLayQEcWjQM8pgWws2zEXMq6iWCUiiyByURfzGcyR5pVnbgr1r8Gg4Y3ayj5j2SpnxzdQ4kw4Ls",
  "key29": "32bNZWZbzBNUsY7Bxqs2ZgF4waGbHLXVA9xBM17KbA9E2AxHRi5cANAxSwbngasge6PMX2zex9zy9FQUP5RJhTns",
  "key30": "4iwJzo6u2YfiiHbemjjntDbZ6TwMzofW6CtnxGCkqiEAS4BrCc3B4GUgWpxHATYu7cKQ79TwZqRxQejd7HKEK9oe",
  "key31": "3ogm6bhU3oQeHD3hUn93dGfQ43Pjb1eB7KHtvpabhhcaK37cJDVSu6mmKV1fwq3C5jEfZQteRULd1gd3rE4QXKWU",
  "key32": "ADTHo1MQ1h3v6omcxC2EQaPWta7t3jT92gL5jxSkyzjp2nGG1AzR39TjToa7N94tmX5Sn6y3Nz98kZ2rmaGB3BW",
  "key33": "2DpzYzPXuT2DMFHkHCGjPSc67UPT9pB85C39jfgRa6ySo8KDWVeMDKisk821ubg7g8hcPZzkCVydKU4YMvUA3Y2m",
  "key34": "2c5q43gLYwq5nMqFeDzMhJbTqJDoZgS9R99Rd6eTVhmuDJmPQEDT4St95oHhmfT332eQxnTpjftRVy3wYsmqudWH",
  "key35": "65iDKf9f4Gv62i3Umtda4VCDdzekCPyEr6xPPwq2qaFAdGfU3dR8C6hHT5JinLntPwraQRyrkhmRiYLSYnzVZg9p",
  "key36": "SXNzb4rcLUXmMsuaLZYgdQmUnH11kLDkpFBWXZMLGJodh2x2LexVomm7PExW1ELGHjbwxJAcWaUTFSxX2jDEQ8V",
  "key37": "558JBGPFGXvyJyQsr5tncP8MC26BRvxkCYLrTEYTKNbpBpiA1VNAbRo7aBhxAw2h56HM4m5JXJR8XFQ92JEnXHiz",
  "key38": "5qrc2NWse5pxaUxWykifLUiVkfXshMSgzetcFGGsWeYBdat2i5w8Vq3Et2MyeFnbsV5DnodM3gZ2v1TFxcbdj7vC",
  "key39": "4Bk75qWuDdEoNA8yG69fCsPnGZxz4ZNRAVcDyeXA3JqEMVzevBE83qRWtPsEVtZZ9nAGuL95fdCiswqNMCakiUWg",
  "key40": "35m8Hwyih2jtWdWPezkyPVagzBG4ZZjdH6CHWAjNukjYFQBfcyGqkZV4L3a9qjZX2NXyLBFr4FvHgHWrujbusawN",
  "key41": "ZJqfePyYDkNwxa2f7YPy8du3PeHhjVMkdoBWaoX3Qk6X4MJEpp42Bs9pMSF3c6roNmTgUdwNy7TVkM35efRaBTy",
  "key42": "3KLfw8JJttmQ1pSz9DBmXLiL1UHVUn36gFZhZTgJPc3yntgo24GHYCcRih71eUbdA6hNc6UG5Lge9bcKYaXdyfL1",
  "key43": "H7xSxXZKsgUUvFP3HyK4nHUM67FH75qNpTy3MdHEmwiFUic9mGYU8kEP9Vkb8cfu8wA2PRPY2DFjXmJb29Mvz28",
  "key44": "2x4rAQ5RQLVnXsir7hL4NRMQ7SGDB5Xj458fSdGgKvQHprLG82Xbh1r7fLk3QDXdMAGdyArNXjCTAfAeBKchV7Bb"
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
