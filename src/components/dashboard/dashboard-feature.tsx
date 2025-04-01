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
    "3awmGhQ4Ag9Yprb9ijEnBpqufs8ijnP8DHguYi4hiZW5R6TBthQibrQUGGM7xbohk1tfExHdJvEzUt17WgyK33y4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ahXagkHK3w6CHnAJiDzTCJidnn6QstRcHQVwM3qKw31Ch1F4PSiKy1tSp9J1c69QUBBx2Q7zm5Z3LdK63gatYTp",
  "key1": "3QLCuAzswCN4GNxodscoRrwAgskH9o1jcrQW9KYjy2CnC8VYgFSYRqUg4p7nWdAhhFH2uZYdBqrkj6CFQkQ39xJ8",
  "key2": "3eiR1jtNjVGfjJLgKcWHxXSzG53yULCxLKKExmfLp76yk3CxtvZtgthbWKkhrZ77JyZuX4s5tMPe2QZFGURsETLE",
  "key3": "vnsgeAH1Rk2bKggBpmC7HB5f6JMrKGdbruyRCc1wkR97gJEM2RP3dj9iEovvKAiYkPU1hqoYdHh24yEhUPdfUfC",
  "key4": "2crL5f1mDgUrqRcCW1HaShynmqPV1buAfzbJcCFjwGG145NktCjg16Xab18EV2ueaahboVhyfyaHYgpebj6VAoNt",
  "key5": "1263V7AbyX6sj8ABpCB8JFfRE5BLs2ChfGJyyXvFaHXo7WpSh3iwgfkuHKsUnk8Pucr8Mhwx7fkNLwt3iZrH64aV",
  "key6": "Xg91t1UPM3ZYMYzjmmitG6zpitZZSivAiwsPY3DsYbiVVdz5BJbthU71Yu1T1ngUztEZKNEpjZwM43WBWrJWvjQ",
  "key7": "bmjc3wRtPoJXNcucPStWDmdSNeHGCeywMZrysAvJVZ7tLLCLjUZAX6kWvT5NomaTHYn6SUDGEUume2YiWQBCsWz",
  "key8": "3c21N6efCNYXhH1aexQzF8xJWoWTEtE1KeY75JabroqhPGnBNbRzE2HaDy5sf7T9Sw8jc4Jp2Gs7SJtTGvoDUXWa",
  "key9": "2VChTQ4W1zDAJ4pHSfwJ334bcBiiLYqKvtjQkSsCVwi1jdV1j4XnUeZ2aaETuHfjMEKVdeC5j1kLhzjo4axSL6hG",
  "key10": "42K6mUdtwA7SCVDc15q8Q6R9GL6V94QYKv29tzo2upwucgmofXzA8XAr8doQXF559gFhwedmVsrQ4U4VVGpTvYjr",
  "key11": "2mmEArRV4ExrtNWzRfrskVpHXDwRejScJVQJgpWE6TUxHD98yeqhz3WnYuW4vSVnMmSgHJKKWmuyu83EpQM8vdDf",
  "key12": "2TWWhE69z4aBs9es4gLJMc4kpvrDgSZ4ByCcdNGev8MtKRb4G9jZvRVJns5DKRQ3ZgxHVg6wC96YbbpCumLi2JXD",
  "key13": "2MYrkzL29LCm1cDCy2idLDtUnHd6ucq4b6x5jBpDHxfGH2DajXobGn3a1saEA4JfUYwzGPFcxne4T35WLyx9yr22",
  "key14": "8BVT6NR2Ekp2U72PyLDgbSe2X3FnJs48BXkeChU8hMQyEEoWYDDqQM5hk9AUDSo5sRPK6XoxXjfRnVrrwh32CRq",
  "key15": "K474XLNzstmYsJNQ8zB2yo8dDqKCtFVQsHeoWNrqjnzrRsSdnu61zNxevBL4fUyCW6YuVdyXWcqUcHFX682chbd",
  "key16": "nyjopX4EGFFyNMkqe3z6QR4Az8iWJu6RXzxmdJRDysh3ekfK7FGKe7BXEcBe7DBHs8sTjPvuW2ibNb287iHTJC7",
  "key17": "tfH27kLJ3wSstmottbteyPB8o7cJv8PX3o42Qcj9oDxmxBFQ3Tk4uE2AfpWFnHr2wk2mztjsWKzxRoueto535Zh",
  "key18": "VZhpe9V6qJxvVBMi1dotv4xNm3qijwZs5bi1kcTeZEnamHbEGx535CP6otZWF8QnquoRkNAxNbAa1R1DDU5Dem3",
  "key19": "4wGtL3TwRqckNBwjStuJDH5xz6ErAZRnptA2igLnypqbNNehj9hmsPXMvEeEwQfugj7zE8PbmJsMWmqX5ejmAWp7",
  "key20": "2ARw9kDo7QwD7xqEj6fwXheeZVrc2KRKUpKKwLx1XtxV961UbQ8crdxGVaG46RzG9Gic2fdJUwphnazxL3UqK91Y",
  "key21": "3oVaJHByB5wDg2ccLp5MJEcpj6JWbXhGtnvksWJgvNXdZEutzJ4acZgLi35UaSowvKh2eR87xrwf1TPiUoNjCy6d",
  "key22": "3srymuE83qnUWAet823dhU9kYg5ipTtuzqoLfw1K5LhCwcNWodQJxtMVor5DaBzFnxYuS6PPcGfbjkmTpxyEqQyz",
  "key23": "4VLNfzE76fWmhCJbNVzc13enf7bKdVoEMv7eGG4vN569SP9i7eTqh3m1Q6fzHpgocyXa6bfLY4Aoe8x1yAjCCCcD",
  "key24": "4nWARyWwxBPB9ZXftMMafq235t3orbWbiJpAitgXZ8vPoCJGw6BgzcTzweMqTH9ncgFodFMCtHLFrpKRnh84RkJF",
  "key25": "2fscTdy62o72KW3dp4Wz1xyUR6VyKk7UV7p9JMts7Emy9Ewtt2NyVKaHrFF8hBbk3sbs1SzfLndngbzDzyUpzHjo",
  "key26": "49KoQ6knpnTQ7C31Grgu144vgRR3HsNdfuUE9v8qBm7Q5EGXXc7CBMNRHmALtQCE3XRhY2pHWoSTEb62jQDmwroz"
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
