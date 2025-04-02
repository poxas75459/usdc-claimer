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
    "4tmqxMpy9zfnthjZvGCLXzPhQ2KU9KQWyq4ydffzwy9uTXGkJFroYMQu5P8xs6iwYCYkni91NfesQJ6NSXnRNvoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KRjNd3HWhpAt26pJYQd3UBnQWeNVJpvjcY3619sxafQ8r9EVJ7dE4PSMruHNZodkWC746ci9WeTeY653DaVRcRG",
  "key1": "5h6w7c2N6wpsYXogEiZPyxQyCRJMPJJsdk4QMFcuRDPnuJuocwFST6VQBNSAgYvzQENPXdMeWFUAoT83jFBmzcaH",
  "key2": "47t3cZi5ZFwg1bDXMkmQgNtgeFzgXWnaLd1yMsyvRw7JPTFgYRm25KBd2SHcxWuYrCAexUMgdSTd1PLrytDsZu4a",
  "key3": "5PQkAp6Hw7pqbxXkEJS6k84Cb7aNn6bLFfod4Nfrj5T9BEfN7AbVweoqCQz99mnkMhUEX1ZZWpPcPySuzfCoUtz4",
  "key4": "5UCxzKs1yX3qjBtsmEV62MtP4tC5MrY3pmBej9DfyHuTM73M5uo9uQxEADnDaVngvyZxT748Rd6622wdYJXsWypC",
  "key5": "5eqy3eDuWxE5hALp7nKodDfbBYHzdKetjWvmohiEvvhUExZT2k3rVaGRX6mNYks9bzWYwwtiHB2dUizne2nCNwMV",
  "key6": "5YtNz7xS4cmRsdWM9Y39GgErnn23V2Z3fERmYcDfFCTHa8zEqYgMBByLGkqiA8FSkGAKdN7j3LLy6rzYcP1KVWMc",
  "key7": "5pGYnPGWbcXoiNYTwQf7vgFdbb3uL57XBekWpEms3gCmd5jA5oz9eqj8RK3tSG8supvXx1hpyyQPa89wXdLqf7rF",
  "key8": "38Qu6VonJHcrc4X1SuJsPB1W2hw6uLw2zbGkf37tJPi6ZNzLATPrSePS9NqNYVDtXncv2nYVkFzYozxAcuf5aZyh",
  "key9": "52RzfqkAdkYQ3bChz1abvGiRUJy7qbFVXYdY3T6H5Wakm39vk5XrfuA99eBd3ourM8MFVHw5qynaTiqz8CCQf3RX",
  "key10": "5VxnXvTc9tiH4ZVep3Y9xiFqokNSmeJvjcfrGQBmf2j3iFR8LWijHjprSWcxErGsRFbSnxX9nBQoy4SKGX8TdtBE",
  "key11": "2oPgSmfWx5vsCH67QgnRMRk3gDNQnHvSkjWcF24G3DLHu8dVHDLTqHmRqqwTVXezziks5oG5DoFeveJZp8mNDbmH",
  "key12": "3mCcAEd73EzHAXUb8EBEBQ8RGAXDBe7wzmVGcYJ3sjHmrcyai9zEi2vfKWET6RpsSYBusU8bhuPMj3uq5a9rWdvc",
  "key13": "2tRyQ1ki42dfJYa7NEHoioESMPx2PcppS5MgzfaiHpvNQiWdN6yXBongqy6cn8hMCbp6uPQAza8ksDJqbfDB1KEC",
  "key14": "65S51N9gmkeDeQWfstjzmcatLvC2XVLZJG547sy2vpxvs8aNQjgSbrxSNv41qKUGmGjcwk6fdo3etVaELUfSH9YT",
  "key15": "3K6WeVvEyuyW1Z6ZsMqn3Cq7PRUBe8gLhCDGmjJLQ4ExvbfJ582fLgs6Ft1mLdLAtfZT4PfEXiZaYvsKhp2TN3wn",
  "key16": "67CQ5JED6JFiEqdYuSVwVEA2n8aUbzV4j5Mfj1bTjAPj9kh87LCpXnKJACXPP7h6TivhvjPpEiGuc1SpabeNpwAH",
  "key17": "2J5UQBXLgoRdTTb7MpG3ia2BddZ3URNgjEbeHUQXmb2Kjm5HhGNo2Ku2YTE55TjG9aEwuFtmzqTY42DGCEsZkgRs",
  "key18": "5Vr1tCoQ6GujzDrzvhhzvRx3vY2QGrV4fUvNK8VtAvFY7iX66D9RE4AnaaYW6m27f6gYLAeu3qyhM18C5nGUwmqZ",
  "key19": "32PbU9FQkAEf5VCGNTyt9SmfYvbYBtftjyvwmSVhUnPPDrx7pJ1jPZLxVKHiXscZGbXDAmaM4eQg7oQQ8uP1r3U7",
  "key20": "2z7LMgvKgmtp3qnTwEZkwWiKGmWGR85okSfr15QjDqKAY8bWxfW7BckLEeSNXJzLCXtaGdG3HMX27tXwDBwnukDB",
  "key21": "3eWeyyg8Poe56qAs2sAypDJXMrb5PCHqsvD1USH9tJpSY93rnUodfTmyouqPNjS5wzy7QireHymrGU7j3KY81fYk",
  "key22": "4qCD3zDJTsbcfyEKKDYnwTPMFk4UD1XSqTqZYjNwDnxbSfrmWoutLzZdJUDz5L9yDMbRa21AfwwBHWVCBGK69Aki",
  "key23": "X778uUt95jkWQKqU7RiTqx5562oNkWUHyH8MwHqjwu11DDcY1SoMNtnD3KBaThvRo3btCLpLRCjSW1BQgwyrSuD",
  "key24": "3WdU4T56w4A4v3SNdrcNyTPTbHyK6nwMfDASt43Sk32C1oAY9VN3XXEpvfUu9ur9MbYzBjcoeBm4c4GWaiXzam7a",
  "key25": "uNHUxJpD1UWR6cJZfoGPqAdKMtK3U1oQiFhkjgxizZvZNWHSHvYptS1RYa5iwSB3rvcgqSJyqxMPRaHYVBVi9kL",
  "key26": "n16APfKnYL77hzUfZ6HS6gWoNy5a7B5hsDyyJnQjeH7wCZVGsjW49sQumSjRrZaHUgzUwAR4sqaAEXtADWkTReD",
  "key27": "2p6zWeGmXJTWKPJR29WYMTnMZyoAeaPgwrWuoojXZQbH9zPGmfwSAvMuE5GtridRXczvCfUi2i1e97h5BbKRR95u",
  "key28": "4DrshKVf9rBGhBJPHR8e2tzPT8uG1sW7p8wEmiyh5rXMemBgCanZErND4yfE4fYbKudMdJe2PJdTPurV7CWXkfxY",
  "key29": "4avZvK54v6XjfLbvnjKLtkK6dc4Hz1YuoCmF7Mvfh3UA5afNtTRpequ4MQsXUnan5uyaaN1H2iCg7XbLNjySWeYZ",
  "key30": "53d9fkPcAd4Soy9Dg9TLTJYjwCTXYP9pFXuo1jneR2d5Krtq3M47B3XMSk7cb1XAMe5rw8tatJQ2ZDgZCeu6ZZYK",
  "key31": "4GxEuu48V28QyAZM7aaJeaWxLzbaqqADMXktDd9KapWahMcFYBLMSHPXLK7SCQuG5mFL1MX5c836B7fWE1HA4TjY",
  "key32": "2FMRxYyJwD9cerEJEycaLh8HYv6u8FzaE6pJpVtWhq3b8x9mPTCshX4atsy8k8dHJJ1GndW8XcB4TPUeXr5GeMzW",
  "key33": "2iWx2K28VZCaY9twC28do74wLQohd5WNcAZEayPc2iNvoCNA2ZVPKpJRZwBm2D8dJazs1DZncNEEKzXstKqESUGQ",
  "key34": "L3zVBYotkU3gV3BP6nPRzUW5hGGTKeMZmipgNDb8KUnauwHoZ6H19bMBzxHgQXr8NySdxVHLxuTRojqFEWtXGVH",
  "key35": "5hNj3yYRCoKshPRjwrdbV3p76cEFzMqorZyrd3MNB8Rb4ok8pJ5sGeKHT7wsquxZ2cda8gUD7RrXVHNoHeSZRR2j",
  "key36": "3NCzkam4291SVeV3gpwPnbnaSUMcfPSwGp8k4aznG7Ezj7AU2xrtaRym7z367Nuy1EgEWfF21VSZtzGKom3dGabY",
  "key37": "3kgDRrWDn89pixVbok5BtcCVtTuawbVGLGbcJww7NdiNUH1UhY6mUTRRvs5MUBDxaKUeYSfCRmYGs1BJFurju4UV",
  "key38": "62o8tQcRLnE2m2H8VijJ9s72LUf9cgUdxqzzEGYKFGHzd6ts6YzKseRErs8Vmt4b5GsWLhsrBA696eXQ5yFLLJSu",
  "key39": "5NFGf6axB291RzCd46yMMm4VL6wo92Ez7WMLyQgifJxmY27CzheYpL7HEQsfpKS7GFaXEPXo9DwvxWaC7vMHE18t",
  "key40": "4f8chH67PY8kdPS37TJeE8KZMukshYnkmZNV7ZiJgNSGZCvj7gBaaeduVo72KmisX6urZinYoCPV9KrSgyYK1tWL",
  "key41": "2D51GFUZFyAuQKvh3CFHmjSajSxur9AtU8zEN92cF59BwtUr8QtfeYyDMW5u1sZoSCeRxWPRmT84Xiz7vfnja3Bi",
  "key42": "2vdf4SwdLCYhP5xprbv3iBYMW8NT7BfRGmyjAJZy8paoFpzrXuUJpAXKWmpsbrFVTBTyCyAGAt55DTUhcjKzsj62"
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
