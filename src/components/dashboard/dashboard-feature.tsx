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
    "5wcrZGsQsgFAQ8FA6USsaPhR6RcELW6195NkrQjqzouf6Ck1LMHr8QdWMbL4dBRLFxraTfg6fLXcboR4GnJfZw7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CAuFeVkuFWgK758ATWGbexLtXsuzwesbjJrZQhKbU1JQWzu94EqphNKGb4rg4nZ5kNMgEk3JvFZ7v4GZr7S95HV",
  "key1": "TugEGF7ZkNgnDfPge7DxRXLUCAVN9J3jK4cRerGsEebg5dkbfCrJ68kmBBiFfoieFjmFu89MebtSBRg8uKCi1T9",
  "key2": "5M38RK2THWse8SqBWjFhe7ESoBWVB97aGMVjT6VZRE7hMheLkrDtX1kGgu7vKB1ARjayiXBpHL5RPsUsF5qLG5vX",
  "key3": "5eDbu5Ha1TX9T9RLCNtqPmv3Uau5pG4VQ58xN1TU3tSvkQWg1svkg6r61BMJXvC8KKwTASGjwMCYJoM7nUYHyzYH",
  "key4": "5aDKVRGdaQMQqhknz95RAnfy2u9box3ibJzLMKW8dSGqSb2u6BY9dofFA2AkR3rt93atLtSa84fXZeEVn8DLzkBb",
  "key5": "HjZYcxGUT85z9uRKLpBA5vysm4TLWhAnMrjvAR8ft78UfaiGdd3ctYRmE8uGTDkzKpMHtaDQcVNiAfMiPZqAHxq",
  "key6": "6AdSRuPLFGW4FfwwFJ6ZojrgfaP8nMy8t1JiRm3N15AxmBEJxZeb2oHQc1H2T2gnxPJE1nHkkoi8wV4WMNQZ5Bs",
  "key7": "5GpiBJ1VzEeNnCx3YG6RUZ84GL6ygofb68iUWx2dxfGH3xXXdtecaRdwAYP2YPes7Kgrnx3cT5HyXpR5brc2KV5A",
  "key8": "4wgZx5zxZJJNZEwFjv65cxzo6qic3x21jGmLR4PsLksD1YoEmxuaFCbT8XzqwsD1BftBwSzDUa3JcQk6kJN5ndL",
  "key9": "4H1ARAcjAQ3qmPWiubDg18jRWNFJAApt4jnivkrdpvzGrMVpR9R3DMQrXZYcQoQ3NThd18PQXPq2P1qC9cAAy7p3",
  "key10": "2XRM8XDM1zxniJ4TYModrf4wDUiExaWSvqBGWS5AVAAxU5sw96tgrb4wCzBFbAJhEf2MogfsAeECeyJpcPHDP8KE",
  "key11": "55cd7CU6ikGZfkxGbaZzirAJ62rXLn1xnixzeBvapFrGXdRHwPpitLFNQZY8bSSCVJz3Tm5Ugq5UbAZ973z14ceb",
  "key12": "55i7uQoWgLN3p2E6kvavKYNKaWVBsqzPthWcRsxepCZJvVHofC3FMf85obY45sibVr5wfi9jDC94xtGT2cxipZnZ",
  "key13": "3be1GwnT89CB8UacKGqNzmGNAmVngCx6SJCReS4eL16CKQNAeSGhXbcEnGyEomiPnTu631hhPHAFcHQfUcWHrGpo",
  "key14": "5bZcEoFXRUTtRqzAVfkxYqZtSiukQP4dpbGKaCy3EgjcYJt5RrWGxsRxjrSypcsNRG9LVRLXm3NKFBjeVwSekauu",
  "key15": "3nkHr2uoi47f6MpB5mJUiYd3pNKZjaDD7Ty9smBQViXcsso14gNjSmtwn7PMv7nqMiMYWY36LAMgZvHENwLPNqcy",
  "key16": "4pLwTtYTQ8wc7TSreg8o1cDptacjVkTsnoXJCGZX3DTVHSCyF9wmaHwiPDMvsHyTX6WPEbDRs6Ks7u19CwRjTa98",
  "key17": "5mLnxRg1cJozyWZVyYxYzEZEdniWKNpTiyNLEGXCXJW3wi4XQuZyPmUiU1ZffFQntPnowAg81XtZmFRFTskpBLf6",
  "key18": "3J6PwkGgMi6yCkvutNc2kHDdaaXc1jJnpcHyYjegnTY3RniRCBMMhdyxuAv3xQJ93GTYDoUfXkgepYo5PrTSnaVw",
  "key19": "3yKwUcZMuBGaBcQoxeukqhvS24BLWmJ3hY8wH7NXzejN5v714eMx9Gh9goAhCtMguG1Tmtr5vkydBRbJJhTzNAra",
  "key20": "2fk6N4T1crUww7oc6FQX6a1ppMnGPLWdSdVJuqtReLERcPBepCpRHRixuDCoGiBKYa19gk21C4oT4pwhHhZ6pipT",
  "key21": "UmkAtS5hy3jwWz3vJuiPiYM2QUvBvL8YP2JW7C1Tq65HVpCZrcQrdHYq2QXGyvUymf1NLk6fxoCSFxyFEdpMRQY",
  "key22": "3YNT1c2A6uWEV6nLpvrRE9SX7jwf5VGBCjXpQwHEZjVp4HnXEg9jgWdz8wvUkuEfHb4ZCauHy1cCX349Jg5xdEhK",
  "key23": "4GUESZ3CE5WEK4Y71wysq4kQpcKnTGBYXEw2ud4PuZTAn5EyjukgpwwV2q3Y1CE2q7vVzFZYv71ixGcFMK6dkQnY",
  "key24": "48JPAR7rYJwnMrsqB5cEW9NtW1cLZ3vyUXpiKjQF3hb9tCE6QUL8jzw4bUDTsZThxhgEtkjQUEDd5JYpd4vRgfL4",
  "key25": "2mBKmLEahh9Lt8qwCQvoCEoiUwjAHC3zo3cijZAqt3HKWDUuvufUB3WZjj8TbaD14w3gAqyWFeAt1LUNMWA7Rw9b",
  "key26": "2XudamSfcD4FYdBKcrjgHgRaGNmaRC43qBLgUEGjZuNE16hsgZWgwss85GfUEteqqk5FEBiArXBFZBD1RN17Jrzd",
  "key27": "3Q4HdWfWoYJ7gBBJ3oA5kD9kpQq5PuQWyZcsia8gFxdsEG5UBd2CpfzpQqHjiELwqB4UDPscmfdHUoCudD5Yph9p",
  "key28": "4XeWM7Svib3Qf4XLo2NAWuBqsX8W7jMYMTgPSn94PcVEUth4swxsMRKQyR68nGsh8KeEYmm7JgDxkE4qpKigeceD",
  "key29": "27ycSPHUyQtULKTDhxzv19GwZ7z5Nd1YywKauRzEpGPkP5G7SihuAzF9sYUZhbDPoyTPvoMbHVFFgkb9WjJvWK8x",
  "key30": "3RNYxgRuoDeCqeKbsJ4Q7i2Q8nKo2KWW6mRHgB66J4ayGrQJS5jSgxspirbP5L5qioKzphNaDYX9ZnKpeRCFAW5z",
  "key31": "4Au58zz2vE3Jg9xUnYpXaW5ducTjoWRrfEJpisUn8r27Dh8fPJuy2eBkVKH6B5JmLdaD6es6Xou1oCH8Q7iePw8S",
  "key32": "41TGNMeL21XFEvbGoWxnjmNiKK3UvoXBYA9Fwrze284pcfnr3JxHJAT14LyBjgsYAJXbtMkYfJYb9YabGv7EK36c",
  "key33": "8voUP8BX5M1QPTq7abyJRN2gkJNcTiSepsay3fM96DqsqDo3E6aBJTpK8nNFVnHKonu7iVpnoWRq3A7A9Xw5c2V"
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
