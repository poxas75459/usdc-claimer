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
    "5h5hsAgSFMJFzWUbnsSKQKKLt6X4M4RkEHu9JHJu53qCyYvDEMPNSQFBgD91mG55CB5B15A9yA96Qs8JoGpCyoU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1irT43CwucDe29jLo2N1juPd6JBCfPjWg3zvWaiwkV2AKNYnH8r3fMZtxEV7La49j3M1fLzbMhBxB5PNhbgFPfH",
  "key1": "3SQPDd7JCSECFwJ95RQhQBFQNE7w3sHiVWZJ8gsCtXFTYFxp5tEN3yN2LEBqbuNFZs5U2HCvACXtCGvgYSNTd2qU",
  "key2": "2j9qqq4dmMkgpUbGuVCucbMCnoqmHpEcS6knvRsd2o49UQpvbJFBdwRGd7NApUJk4smc8wVS4LnZxhVjdTGKaF9b",
  "key3": "5jLNgunyXgtVFmLAMdHUggDtkmzideTY4WCv6atSY8QRQ7H3jo4z3zkipfJGKDySof8pSW2ACHZxFWnDUBQwnZ86",
  "key4": "29CcA8t9syhtPjMb1UCR7dtLozac3zh6at1KLePCSErHUYPy27YhQhte7yd2Sy5kW4vaN1UiM9tnU2P2aqGnq1g8",
  "key5": "338BkLjvSURBTpRRZfXaxMUNiZ4F2HS6HzZtC3GH59eZA8ECq7oqRggfWvow9mtHzQ28e3N5LJMARw886wwvUuQC",
  "key6": "23BtZt36CyCMpyFQN7fHLfkWU8ZCUhS4fsJW6T5mkmBzdutkZgJhoiDpeKGqQQ1jgRxXpUYm2RC3VezcsAJHpKJj",
  "key7": "5RqivRv3zHKzUx1eqtkd1armNFhDdVKKgNnZzJrQDkXXRvVCDeLuPMJkSLddBcbXAUo22RCe5hHq9yZZjDFvPsCd",
  "key8": "22FVAW2hMivg8Xg2oKiGY3vUEEKb5AQYcimNxF7A3AcMTVPzHmpddYXqsRLrWDSeQ71LkJwv4ioK5zBu22vB6nVx",
  "key9": "3uuMVgMERQyXKgMvDok43adm1JrfBygDfUTMZviSvVwro9DWWRgjEBSmcqCqg9LC6FGRc7QAjRTjujNvCESH3Uv8",
  "key10": "fhm49XJFuYynn89eV5b3day3tJbXHc9kjapMfZeHvfcTCSpcdnXL9S9BcwsB589n7xEgdTWdP7WfdeuxBZvCNYz",
  "key11": "5F2SQAdkzMj4LsztxoF8r1WCeQbPA47Fhh9xpzNWyCyAPbawT73to99oVL2XUGonPz7bX4ShLd8gj5nFbVznFzSw",
  "key12": "3hgV4ZWWMTMZAEa11fJGoQCyba3Qw3ChPN3DvtpPBXGdkdNb6AWsj59ZcsB6suX2CqrkLAfc1h6tR1TbxB91uTk7",
  "key13": "BasCiVPZL3TonVA2gG1eorRzbAADpduenNKgKmYeye3CBENskdUFkJte4PQy6MABfPgrZEUnov4CogLY1GYTdVY",
  "key14": "55bWkdxpiiNWSr2zfAR8qe4dBW4e5Kjyhm9apyHAozY8RVExsnjxHcaFwLRcdvk9WnLJ8mJ7reuDfFUBYv2Kupve",
  "key15": "4ZsLMDuYuMNyaaHKsk6PzASSDe7whzdRQ2qi86sovsJcgGWJauwKUU3PEz9w6dzNrfcKkEGCdBZKbskXx5Df7sFd",
  "key16": "2xspLFp71cxAz3fex7Q6kXAoaXP4p1Y23QWGJZEk4xDKeyAYLUKABW3nZotKemgtHPK7hkKGLpoXNaRUZwsWdthr",
  "key17": "4eXhJndkgg43oUgsQnLjmV3ayp4S9Fcz3vnkz3UfUg4eai4VpJcpAUz5WjsMLE2MrzepsoGausfD4oXm5fsNtCzE",
  "key18": "4z7iwFvdwCXtAZ6mt1eCmoqY2ouJqJH4XiXdDcVZffjyzPM7cggwy64n2yWAB8uBQqiApZ2vQZAh8rPnPRA5bdAA",
  "key19": "48hJnLCZsHeHyfnQePcoXG8sRBT2UimNRG76EMNfYojnU5vbc97wHGN4jpvA8WiWLsW5HKpY7ArajQce39ck8JRg",
  "key20": "4TQiQkmsmfhqhypYoAoY4aThrjtNdf6wjvovxHYc1UFKQ5uhouNaCDsrs4MkHYdYkArZJTkQW25D6HiSLct3f6vz",
  "key21": "3vzqszJ3zr7YZAz1AR8P4yUHRBrTqHXFvaTZE5ufXJTAtHpjrKeCm2hDXDmyy5VehLTiAwM7rAuuvgeUxJsyxmFE",
  "key22": "3bXhyToAnxpDKp9ErBTpkBQKj9Fstbnaf5T3gQn5seZA29vi9zGtV93RdqEo9zRLneaauMav5Q1bAshNfuJ8fhAM",
  "key23": "4FNbNUK5nUBAP48R7hoXfrcoXdw8VfT856JA83qoUKcXBdnV76boxm7w2fBxDAYhuqBknLx1ZPm1pX9ccmcGFTt",
  "key24": "62XsMc4KUJUSh8jk71WtFH1KynSA9cVmyZ2Bw4P4NJibGTHeA6xwaSRroBgZNGnhYWDrt9WGTVXcxoAaW8UUVeD1",
  "key25": "5GhzujCQ1BGvGFxDqmQYx4Zhu4QJqh2MBM1Zv2mog6b2QmAGzFxGtUpqqvk2QhepinQcwEYEUPdwe6gKxSouaj1E",
  "key26": "5oKsFikvsN87LDi3VygF3XRMm3n5apCxLguU2Jznt4RYB2ftAjS23fzcWS8CeT91utB8q9vMp4xu3JhXJtaKVrrb",
  "key27": "2VqeNQwQu8Ez4JpHqe8Mu3mV7gWQPGeLyB7ZFYWkUxj1Zbje83j35nG4YqqnkmRaZJD9dTscVrs2eWZCfUYVQ7SP",
  "key28": "5T5r1pR745NSE23zHtkYj3EQXsHmGRXGQqpFQFuGKAsjy1UbeLoxn8wMyQv1Lub3iSHkNCCYWDAi4WEX7ir2pcqJ",
  "key29": "56eZuaUDou6iEXAhuCWSKkBjtwdxXEPNJHTjgKxGCpHZMc3MGAW8szoi3GLtmtbfUX5KHWTVFdhXaemAfKU3j2o5",
  "key30": "4RKn29jrbgRT8NLnCXkkXYr5oMeNMewk4UqYHCWwwT6U8mTwmrVZsxsf96sKdwupxAeuvHEqMWE8WxMGf8gRGyBF",
  "key31": "2paWhBcyQfzSZHagrbP5m2bxTAESHmFbxSgWkWrZ8XAAFJEk96DZaruZzCtwcxhvVp891LGS5R15Kg7anLDkHXvS",
  "key32": "4HrNLSPY4Tso9mrGYTh8LKYPHRxLExBdF9crCqbTBT6Vqh1BgzzvtznisK9D4MoWreMP9yYwgnowo8z6fg1rX4Mm",
  "key33": "4rtiQryrR3WmB6wXqETh3Ci6GEgbQvUnFCAcC8w7oB78bFNp7DYZSTJvJQkSQtnhvmwXncnYiKK1Pad8NF8wXxMh",
  "key34": "481fN8ZdZnB3QZCQu4QK6Zzk9U5VjsGsVsuWftr11WaMM3VS1i1vxu24wiMojynUch1oaHVEJYhXESQBwsYE1a2R",
  "key35": "QBYYiM6RixabdaJYKmsh4pc8Go1RxN5UmsuT7vVr8AoSzgYfK6ooWBwP5d9isBw1Xetrtyg5sKFABpohUaZ7Xa7",
  "key36": "3TUFkiiBTKzWiHvNjtKoXzdqd1kZLaD6khWwGqhDAQyC66T7vqsemfSYjS2f4mP8xg5hoh7PoKMbLb7M6WReWRJ7",
  "key37": "dhUUcekn1CXXWTBY1W4xNiynf6LzMhhGsYf3UDttDY6QdGyr6FB1nuLVBkQw5Zq8doVVoLNPnTqiHTfoDETC7Qb",
  "key38": "2NwJN6JU7C9KJny5YRHemPkU7PWS2qt77cN1T3QYqaEYAhXCnN8mQ2nNsGfp5VEMoMRTFSQBcx92yF31a5FHfFBS",
  "key39": "4cLxBSFCrGhXvDvK4Hpeth6XmPdAMnHEegLLBXUrfVN88JuWcJpWp8ipWhabB4wg42GxLpYztLCbdd5feL4FGuE6",
  "key40": "64TECJEtj4SdctK6UoywnmqDWWmv8MjeF2cTHpZCwGTozTt3hYxDKsnsBSd6ehnn8yhZAWJpGNqVhHzfH3HCuvsA"
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
