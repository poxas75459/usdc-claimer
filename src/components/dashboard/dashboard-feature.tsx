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
    "3eJn3aauHhgDzFMdeuk6Fs3ForHnfsAKLofQJBhnSvqcuVArjH94ec1ZLFa5XfB28cyDNgH5pY2yCZbrehx3iH4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wJVjBmRp8TB4W6Dg75NJd1bQAHpkXSfVToDFNSJ72gi34fzNaJYy6aUgYENJMhHMZD6sjUHQFciHobpdAhUtgwN",
  "key1": "4g4dwBBdkkMESJDmrm6THikvUTBe1DFxJqK1zFkgzFHLquzpgnBrMgvKuwSQiqEo1Fj6sjddHuBEnGwkM55CNbwv",
  "key2": "5wuBndPiMJEZA4jLgJFU84qf4E3JpJ6S2ciacqcz3sj63W3KH63A3cWjwQWZUKiukRLYWQGjdxyP5qUMK99e8oav",
  "key3": "41EaLPX7sneRHJyLv2YjkarwnbobJ85RgKZT1aHuGqu2b5GkUpdy8GdhQ8Nu9dgYuoXr2ZRvV2aeBdK3csMRSpfY",
  "key4": "4yTwaMrUWJeHtquYPUS6Hf2yzQKuTfC8znwjUivm2qHM8iKY4QBP4C5B2hC75DtSmxxsTogU2Tebt6GZePsJSr2m",
  "key5": "2zjgZr7wkd1xY4qBexNBVFVGmdtLfCnRPBY57JvxpvbWXABPacGMdtHd2KK3maFec4LSmyJgzvryx4MqDfKkpMhv",
  "key6": "3Uhx79G3vabRUrKg2B25KrG3vkac82VpQvgq2AQrq4YPnHh1rsRdL797Gk4ppYQ973UPVpQehT2MCYz1DfSEVhcy",
  "key7": "2GakfWY9AbjM9ujX23V7RCTXs9vQjVQ4skn267SnJLgBPuoD6FRc3H29BjyYCxJhXBCS6tT7ScTmsfL9QDE6aYBH",
  "key8": "tuxhf9zD6P6x2vTZPHR6xTe4cmFrCWb2PAtbtPU1zcvj9qAotBzRxHnzwp5cupsDcCqWwG24RfT2NgXbgwtJyZc",
  "key9": "5cNQkadxz1ENewKeALjP1J4D9Ao3yehhtZT1AdvVg9pJA48PLqTdFxCSc5tUg8uNBQTCF1eb5nvPCNivpMdab26K",
  "key10": "2uwcArB2cCokjdVJaLbFSFqisHgpN59dPGHmTyhZ8EfWTW8i4wm1ysobEmUwY79sziynbHZugtmr9tXodujDiZb3",
  "key11": "5L76eEusmckt51t2BoLSjjzxL9XhsBmRePwNe4kyurFbjH9AqnR4ijaFZANc2QyXK1ufM5mkzVTA36DsUVKpqktn",
  "key12": "3TyVk7uWt25WXuDXoSjKJgmbvrGnA7aSEUfvxFeLys7Rrx6msk8jVxytoE1dgqU22ZoSXseRmagn9jG32FQPAMMF",
  "key13": "2Jgifjh9hBChMjKJyQvqVnmrT5EChSQCtPSvJ4opLmNSKCK8niTyx84MTKqSkxr4h5ksQdKGJjbwxNG59xavkRe9",
  "key14": "3EdJZhfG4NbQft9D611SgUz9rR3KY2fTnWSWKGfhkSSQy9DScXJQoBR3MM6t9sfb6oe6Ynk2WA67SzPWvY88NtMA",
  "key15": "2PpL71pT6HadafQs3ZNxLN7jE9E7ejgPwxLkY9JQrSx5oWdEb7e6VV68pyFYrKFu3jkLg6MHRiE3eJNngViQmFse",
  "key16": "4yJbBURUktfbg7PuUCvAqQDM3xSq82YD9Kum3grRRCLiDnYoGaDPRe6Kv9CCiVp5bfncyRcCbmVY8NqZYJp1cZVN",
  "key17": "5kfeEM7iJ1tnCo9LvW5rSEtjNAXbaPXudqrkuhfiibr7roRKv41LJXbWDRf33yWaAKrNkg3Nd7Fdrh7LD6a9R16J",
  "key18": "Ts1KeLMkcq89miQucwaajKKt2tabsQS86QccoqNuZMpnwBWvbreauz8zjMLHWbKfFRXkU3VvrV71Jg59bzH3iWn",
  "key19": "4nruaVw8FTgozETp2vHckMLqS5o8Rp43yzYrYcYMs84tLP7RjQBPjqM181Cx5ZLbTXEB6aCTQnUdWUkemagAH6Xr",
  "key20": "3wEozt5ocJGPfd8BYxUX8hyThAycGEhWSvkCEWMiA1Zix8fQZBAajFz5Euo9U4AEjwBiHLPpRqQpgbevKycs6aGG",
  "key21": "2SSPstdXny9D9RWYZW3GQ8raVbbfEaQwbDTfG8PpkAC2b2Mbnfq4znW2r3qcdZpzYnwB6qpwEVGN15Cu93KHdCTs",
  "key22": "3bYPH9X6B63ibQFZxzpyNh3EgSerzSpc4CLn5zpzap4Q1kP9EVhjBmjwVPoE1JGGB1bbiTvCDKdNGVxtCZ4d2QNR",
  "key23": "4fnLaTygsCFEMuS95KUSrTBRqZcRUvGp1JGsoQRYh2h7uSGVqUNs5eR4ERsUrD8Pp9Eht69BwwMdNxeC62iGxaP2",
  "key24": "5AVafNf1Zynw2c9KNsztZNSHB8kg3nS2aeH4JFYVD7nbAhB35mdLQ2V9S461i1ApUD2b2HJBwjvLVRCVQ1Xtvtb3",
  "key25": "5wK3o6VZUoQpcGJkNbSNfxdNfz3xc1F1VhnVVUSaMVstSekA3P6ELyrvZZ32yRab2ULb7mXkgdVxoqafmfF3qmTw",
  "key26": "5hwmw12yFLx4XDusS6pQccN3JnPMCRUcUBTUmPduxVDcvD2sHg2jv144AjF49hffKa6J7H5QcmTPmXFH6K42Qimb",
  "key27": "4Mt1qbsM7YdPcomVikGxuNUmwZoxJXRgRL3KpnyaPaBYwzXBufyZhq2BerHi8zxV2QuZN84CcUzunwtF4CEtL1Af",
  "key28": "2S2vdpdd1vcaWVyWtEYnegHv6eAZgJ2XLNbntbpLf6ipG8MCBgwxUxsnq8tcMzC6GeMuGP9kJijAQEWUb6Y8fsnr",
  "key29": "4xtEq5y2uzLRLvY1q2ywPV9MtAQHuumdVKgU1WfogEx6vn8tGcoJ3s7Aj1oApxmuRKDuMGabyxChizt2yPDJQTyj",
  "key30": "2oa4egPxVcQ9akSDmFnTxRUzWDgvhCbqdSBUi2JzRphurWczX67uTEab66ksqJyBRSK6Ngi3bo5fyejuY6rbTuth"
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
