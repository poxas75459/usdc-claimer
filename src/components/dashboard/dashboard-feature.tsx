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
    "4ZmhckB81C5d5YgTFZT3UJghpzk8zSF2d3EGaw2v6pMiFK4Bd1WH7iHqPGdxy5KZkyTjnTjoFRW7qyYK5eNwR6DY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p9RAraNzgFdkiuXnoTEXcsXcN2CPDgC8J3ppgcChiueJJNFJ28WGvwoCNHTg7H7vhqoC2Tbbhxc6ziKpSua8zr3",
  "key1": "4gGKstP9rxFqsBcvVLYfANmQkWV4pN3WVhLL7cRnSRFjD2CyENCWzJQsA8r7hUfxyTyNDbg7pkXQimqsfXpc4iMX",
  "key2": "2LSY8EZ364dPrKQhQvHQDV3Lr9LBs4L42YLwsSxVrotAYze3m4gNqLthifwR7gobG983Hw1RS1XdMkn7dGfhQt6z",
  "key3": "4FSKWDVF4wi6hf2ZbzBNsYjLWVwVJFfPzKEoGmxtPgc9X13jwgBiToLnRQpYoQbjMJE8ik22DwNAcAHVJn3uuWyt",
  "key4": "hC2JChL4jr7bbLhURp6JA8BgHb1JN2hncD4TAEf8tVmv85L96kqj7oFUq1PCs6Wc7USA2iK9Njpd116iqVQiVJ9",
  "key5": "4rFvxWuWH9zeyU36HjARvbpr2XKX6LEqDbWRNu31DeWSo5CnUGyVsgsZEwG7zCbqWmgbmjvWCqykRX1rpixfuH9T",
  "key6": "9zeoqb9uSK85NuMtetrag2JkVuU8uHSFKFanGA41NMSZ89u7rFxFtoUjjVNbQ1ytG69LkJNDBDA5Lakn8Hbb8ab",
  "key7": "4DvL5bnMey5JfnnsCPDhuaGgUdCxcdDqRggP4NXZMbbxQhFWWwCLQW84SyDkgFEN9PBp9knmTPkMpLKoAVgiiSaK",
  "key8": "udphA1A97Rhe8jm2pfbeJNahjzRJfdxp9nicMKUv1QzdRjvnVLq55XLzTuqsuzuw8LftrnbvGYfbqYWku5T7d8h",
  "key9": "2jU2VJYVx7dzeBgg3vP4E9mC7XuuUrhDT7mFmQvp5MC9Q8C14yerGX7rdQHRjU5a4ViqVjWSrK3w6cbz7Aj6bRhp",
  "key10": "54VgdZ66QUKwV4GeBeT7tCGh1Qsa4fHdcXhNpj16gW9rZuFiRhUmMLzSQE21pPVyeEvHCYbUwFJuzwU4Z3MrwAHz",
  "key11": "5py7fsJRnvo1g4wmcWQQ6871zpApuBn6Se2gNofriLMFca5HfuiSwB6ysuZKqQdMitZd2ZovL3Xo2YfTiT9zMWaS",
  "key12": "4rGeXaWg8CwcxfhoH4eLwKBXfgQ6QRfNMvjSYpEDzjiPd1TQTHCmsWBdfoTovMgSqxEbeowxK99ttx3bVzcS3GHe",
  "key13": "2KsWK6gaoKHki7A1WCjgRoV6WpouVm9gdhvw9D8roEBhhEcBzVB5fTDBowmdLSqbr2zSxPQGVvb5ZbvKnF7TJ9gq",
  "key14": "5oAZ9cuYqicShHW8Z59pTSRf676493BAG5fnjfgwBR9ejXZ1wfrbn79Em4TGPnm8B7PoepfJh3VuacveReGBUy4A",
  "key15": "Urs1kFEPxd8qHF9TW3fL6ctcrrxSxDYKf3jx14eVnZvXLCxXGYkjXXA61KTBgwJEpC6qeM4E39WAnLjgYvAkfDC",
  "key16": "5JTAC71Yp7wV8ujMqez9eYFJgNtBPPxCEnnXe8VzEpf9gb8pk7zqyFs8oaSGGtqPQUikQH1Dcm9Xur2PwkVovfk1",
  "key17": "2eqVGPn3NEHtFMwRbdsarWHmv4Sv4YfSNRjzoBH9QDUVvYpUQUiaAvveVnWHv8xpHi7QoQozetyXy9PBd5eB7Gp1",
  "key18": "X8jV7vfJBJNNaf1VXJ1sE1mKJVLyHsJr2tXgE92GZh7NCh534SGZYPZbhZKTo2DPgMhHEiBXqzzNJAYYHBL6jrP",
  "key19": "8DqEbmhcmXRTjoYNMvuUFk6Xp5fjcpcz3vWc4daq9JbYLqXnBbC2oMfjmRRBucAQ1ANHG365v4oyrAXRnoR3aDL",
  "key20": "t3DRNRGUNugAnymfkgr7PByk2vMKj5ZNKy2iDtnfbZyTMVfxMieyogpnT4zXFFuZEhBvcTqPmvXNd1DuEh1sAQ4",
  "key21": "4u8g4nK1CPSeybXSQdo2dPtva78nNwHrREDD5FP8dZsfbCrh1Fh6dyRFH1enUJDBkeRHr8sCB2aipGu1itJ5chHo",
  "key22": "3AkA1UsxCBbDuZCn2DguZvBvqAvT6fEipA9QZXoakc2q6wLpGXKJir8e5anyHBg2SZZXZUcyLzfWqHVFyUc2xY2G",
  "key23": "AXq2h186XHMHntb7xR5ki6x3arjW3Y8G2LSvezhH7ZqPoY4QKKstkKY5TqAj4mJda1M3kDhL6ngUUZGDbwqtUz4",
  "key24": "5PKauLC2DkXntHTPQnfWFhoHbdEtjpKz36gLgkqnCXgRw4uHHfSR44RNtyDPR1ihknJuSdoZQWvwdH2GFSnP3G4V",
  "key25": "2fe6UWj4rZFGdg6eM6gbaHRUZqd7fafwKJuD2QVr1LgkYzY8TiKWqY8fmmCLkEYSjpp6rptsmUxF89XQE3n7Kjrf",
  "key26": "3nU2FjMQnYQ5PZQrWrV43vZknbbyGM5xBLZW9t4fxK5j1gevxXo4iu2xCPx5HLNY7N73RipHNtsZeNemkoEvMVA5",
  "key27": "3rJfExqsw5UMx34RYoj9KGwwn4zeBY6LBNEUi7YpseoFuCMmH1WgL4FJ8N5PN7MKh4BdRPe4nAdFNtzybhSdF53u",
  "key28": "7uyTgUbczT3saJnFvMJq5zPboavHzXYMWvw9JXyc1fQFsXJEdqMxEVQJdeYL2HLEAnGzkLA1k7As3o6Kx6ZsgcF",
  "key29": "4pP5K65ozPGVBxhKhaRrxNtggBsYtDpqUwiHedDAcizrjVcwtryvCWy8XKVytch5MQw3fCvzsjqkxxbQrvYK81Pv",
  "key30": "4xAycGF8CoCBobocRAxYWfDfsbmkuzDu3yj9jPqb1UseJW94Eatfs9NffKoAW4rSTiemqhTcNY94xEb25HMpLev9",
  "key31": "3oDYE5dQaKgzpz6kSgYGA8mGifZ6WpXpSw1SjKEVhuAbVTurVUUwAr5HdPbeTHDvi49jPqUKqTLT2xfCwrEz3piS",
  "key32": "4QU6mzUrmHAWsE57fNmo96PrScA6kBbZUgZT45ThV7UxeKoxAGXMMfqkj3JV6Ef2m1kaYNcuoCkXeVmJ3vr1KWEy",
  "key33": "3LyaD2csrKBmTtKGEbjEQsf4G4zksWa8TEfT9A3MQPrEQXw8JKCe1jpAdBjTtNoEq8LQuYFqteqvHeTcgPxihm4p",
  "key34": "pTAG8Mr8Lo6dbpi5FmLsiVBTcGhmRNe8K3CoHzvaVyVpSsHar7RRo7b4gGNWmf7qTC6tBRHFB1QtECwoBkVYDSg",
  "key35": "Fd7hAa9RQiRG2z9F3SCYgbjFCZZHsQCu5y9WLgwKi29nyJNWE5vkSGeVvAFE2i9bgVuH2adWFZxvmDhnTJpaVKv",
  "key36": "4jKK94JNDNpYHhTBSP5y5X9PXRGg2qeyShJ4UycdtGJnfeHtk9Fc7n9mqAVhmkoMhQJs33YgwK5JRjGJuPwGgpmw",
  "key37": "44x715NYxS3a9DHoZBYzLKgrFBRXUCVVZ53rwPcVbSiJtG1UXj1m3GyQ3Y474mKbGcdbSJvaremuj4QdjkcW7ME",
  "key38": "3AV4urApWHftYBL673kSwVCwCTJzqyJ56Zc7Vaxr7H8bJeeAeigQmsQVC8ot73ZdmWsBDKjb1PYRXArqHkonuXfo"
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
