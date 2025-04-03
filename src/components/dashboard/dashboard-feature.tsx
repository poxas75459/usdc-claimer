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
    "21mXwYbYHZHnw8Nwkdr1oSxWYh3eZUhUymgbeJ1RRrCaM6d1mxyY84facRDYKusUapcAArfZccR4fZQgNZUbZeJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33QtcVCESvXm5Zq94634DRPdNzxJnGKrKqRChNqM1Az1Mf5u2NieM59foXaDj6yhxS4a6fznT5nUkXo5ZzKF7gws",
  "key1": "BTaN536CB2b8AcEH2XGtHiUEFpwbTkvAF241ku8NVZvEH6gwwXmcRvRwzdtzEv1rE5q3NE9A7VNAC7uW3wTUuZq",
  "key2": "3xzYeqZLvBNgW1nyMA1dLzJjcwPe4H3tGetvCZHY6ZHZFHhhjEqL1UEZ3XsyDXvrbSqyenYkFy82teNfEbeAMrP1",
  "key3": "GUzFwrZ5iziqNVUoaZ6z1RVShsdZLCSai5bK8w1tfPtmEdnH4wPdWn6GXHYAdxFcoVtJfLCZthbZBrHnLoPiSdE",
  "key4": "4ZkhZQHrKy98hfyhr67cBHy6qZyiCfmhEyWCh8pd26BJxC7VJDP5ZaY1y71JakVUC1eAFtxjDcKJ5R75zWx6tC6A",
  "key5": "2GwBTJtF1vovv2eneCZwkc43VRc7ZvaQi36onjiuxrNcmCKvniUFm25GRAS1hSTSKQJVpXutocyjqxnR5fW9jdsP",
  "key6": "4R2aQzSWaR2pgJjRimG64VWnFrj3tqtgChpUEPjU8sta4kFHxDNWWGSvEM1swZdLFn3HKvEQdQbdJp7h2PH7h5vE",
  "key7": "apKxPNVLsEPjTUAXbvtEDJzF5wjrjmPAPJgjvdf4KvZvAYmrnmsUwveJJWtcJANQ4AoHnZ8hXJGii7KZwREe1jj",
  "key8": "AEZTAmL1uxv91qiceJth3LmUQSm8U8sY5qQPp8qCrAvzQtAhQ1Xg2eXuhefZBZzzzk4YKZiLRGp9VDhxS6zRNwy",
  "key9": "3ngXS2VzhEQa1Dkrxsej4ugcYfBmghBQ4ZNeDhV3FQfC1xVTx6gSAnzxLQztZew9rP1ABojNGR6MadJ4BWDYSA9h",
  "key10": "56oQ9dkjqdHmca8e1YYnJFgnNHmXexJBqRh9YftS9dVRS4VzBrWspTXXWbZAy7DAB3e1agDytAfDeSwytRG6gNqw",
  "key11": "2JYhrCA74hQXqLWM8TU4warqimh63cStEGUYcprfzkkYkucEuU8Vw16tvRiAt2GUYzw8EM5RAZ9isKVXcisDHkZD",
  "key12": "h35s417JaR38r6AreDgxqDzbphown6QT54MkqaknhRvCGykSwGMrQSqQ77Exy8aSPvuYSEx5xs1dt2FgmZvegEx",
  "key13": "5YhPBAAvB1DvAmuBXCvxmvkebEDpTDVfUwvaBwKJPpjuGxU6KTYhr7wZdSWxhWhZjV8UFvTtb8HG2Y5naNiyiQwv",
  "key14": "2MTsGpW61FwWZTFN48fr4dfiBPZUuSYGJCFstboqVySu1Rj86uQW3sZZALTUKe59166Mq4NsdLNiaSuuBnkLnjNn",
  "key15": "3oqFsdBaXbBNGE2qwj7J1BmRM4gHz4iaday3RkvAjiw942Fy6NNZy6x6Y6GSwNzzpUvF17pF27iT84c16Bn6yAkC",
  "key16": "5G1T3qxbbRfeSizhXXAjCgrwB4aWvZ27me1srhWWxnWwKyxPHKhuCRMNaaDwiAzad1WLGSSn4U63diKpBzjJ6u6e",
  "key17": "2vC3sNRdwsp1sWeVZWcs4D7yZVDPAX7nypc2hme7oNfT1jnKTL8Qfbm7rjdKDfhyyugGvCQZtSXCMyA552dJvHXh",
  "key18": "4vBLy5mtg7j2FXuqkd4kQ1RiHk7Q8H3zqNBDs5e6mATyoBKqLeRNeD2BWoGZ5rkFThEM1PqwjSEoSt8nzKQ5cZx4",
  "key19": "359pCWiNQbwj8c13K1e2i2XXemJ1ocDBty8gUG2zXvmHPmrh6ATZyQzv3fx9uK6FgYmBPyu35K9i1mhyRADT9FyD",
  "key20": "5qz9BireSpJwkotYSEDfzQ5erfb5kMsTNtXTuokzhWiw7KgWr74PxSmDGkaUhxmR57MPFwn8K5V3cyfUCR2SjNU7",
  "key21": "2p5wDjjcanLqR1LZYgghgkzg18vmrxnbWjHG9Hh63xj8K6TW7UTsumXhUjG3ztobro7r5DwH6v5zpCVP5ZFT5ekq",
  "key22": "4GqMZzbgs7WistR3qp3iXMSx6ZfrhF5oueo2FeNbcgqSwBmbN7BJA2kDB9Qayp9CNDFuL2frH9bTqHSkXBFCKetX",
  "key23": "3Kgs4WB85Agha1ot2eftA1rckoUUJfVgFQw62bScoPDKGC8WnQh6gHmr5M7NdpJG8KHeqwAbW3dnF5mwu5Dm7n2z",
  "key24": "q4GCqGfttLhe7p3E5fQ4TZ5NLA4ZXeRRjSAZCvXKgBJfEsriXggeMwLoqE9CwBUKEYQj7t8atL7LJz4hRFsQN1Y",
  "key25": "4DSziHu2phbzBPgWV9kPGLRyTsB96HD4UqNTMySH94PP713nquQicUogUMQZJBM2vDTWBiiCJeXa5YqRAd2Dnz88",
  "key26": "WL7i1qXgvTHmyp7Xhke4Q4DJQgtFEw4o5Ykc5Cc8tQYmRtb5qoMYCh1H3cher4dnKWKUEoBehrXUxboGJ4zq4Gh",
  "key27": "h988tg97uQGrF7U9CqbRj143G49f3rywDGvff6fbVQysjryCNKjCfCRtMVR5W6Www8opwzCiWyJWAdHR6cZght1",
  "key28": "5QKfCNTVCbunka8VxWzG1HhqADtX17xqieSAPsfWTsCxRNzJhZ41RivYNUBa5JuyfP3KnfkeF2ytZc7WrpFupprJ",
  "key29": "3H7uiRznsv2Yko3QGLfULrfnd2no5yJeAqnmbSHaRLo7JrVbmdZztkDS9vEamLAamifGKXnQrsEvhn4tRtNFUTPB",
  "key30": "5zpUNUk1naF7gnW85XjYVYhuTdGqeCgdwX7oXra3umxQEhFTgSH9FDguuuh641ZVTfEXwhcFCmAwSZMSd9YFmXgW",
  "key31": "5Hoeuna67iNVSrwrpPtJfCYcjtrzpWwSg7Gsumeva8HXG1DdN2JEu3y1JphKn31bQ2Qy7miGLS2Vk7V8GdobH6cQ",
  "key32": "2ksWX7C1TCF76BFv6ZT4ZgCf2r32XMg3Mu8rUm2PggYtRiyhZTuGWxd6BEoo6M8JaGr9GTxfpby3cSMmkbjyQci4",
  "key33": "JSgEicU9sMZv6REBzDm5oPbdJcfZxfYAJHCJ7GCEaaU3roL2iHXBXe8XvnqasAC49QsA9358sa8dkC7wHnkUrKL",
  "key34": "4s6gaqYBeAYh47FnQr3wQfEBvX5vRdaaEgw7ACmWECx7BTcNM9XDTWQcLVC5CTW9UVfHVcC1ZAxXUKNnG8XSsQY8",
  "key35": "UEXtL2izJLXo6GuzfKNXeWhtzC8Zayp2neYNrtKFYzyPZNkqoCY1h1GrbXnJgaudkP9xGpUy5zdeW8KwpmwJSW5",
  "key36": "3GJrfdDWj2icsR7rvpQPBxDhL3hVVmGy99k72TqbEfS39ByCnuPDR3cjsuzUJRHwzgSecrmpMf1Hw8y3fjJReHS5",
  "key37": "3juWnuonc1obftJK4Jjvuruwsx1HA77TML7Ut74LS7PWAMEANnET1GRj99wnvvbqRfk61EFR82iEvBYcRSdAzeUL",
  "key38": "zgnL5QkZnqqG6x8h5nX6ftAXvk1ZoDd6xB596o5sCMDK99Kz87ozLguWjPUPgRTGR3XpcZeQfYZPAJ2j9s2b4bL",
  "key39": "Egpx43LBvHxMX1U9NDjnv13PDcmGrwf3jqeEvR3Xu9Nt2orXtSi3EonL8wKjzq2hYFL31o2zzMTF8LfFfrBGbHC",
  "key40": "4yUcSsPwrLvhSsVeTJrdZeojFJVqQkQ1Gj6eTbfjGMwS7K5azJWBJoSd55bJD9Qx3WH4rfVYNUtwg39x2Lp3tuq7",
  "key41": "5zKTCvYj53R1L8MeY4T497v6Xp2H6hWmtBQPAsD9mF8kz5vGc4VybkMBo3ot8owFnyiBwAgPw5YmnY5zyzEWNJYp",
  "key42": "34jC83sq7qNU5fucvdKKXJhnC1Wxszmywpj58wgbSAAwXof4guekj8W7Q3c1uz7u9msvY6mKiRymRoNuCqJMKp8t",
  "key43": "35JPjC7qErokBhTTymK8EiQoAgt7QfxqY2GoU8U6QdcZ91GHYVmQp4Mg45Swr5k4s3Z4vfe3zbQMaNYmcDzQEAM6"
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
