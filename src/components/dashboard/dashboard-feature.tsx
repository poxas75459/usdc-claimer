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
    "2MJGQSGdSvGswMjkKng61Wjv97vbjwPoBpaNBK4fc49NQYw3XhoJJpisPg9RiPXu2ZnVJGkR2PaDjkFMr6hzTcYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ScCGKRc4RZPfwazLrwBgyccUp6u9on53T4yEG1hXyDfJiKhLt1gs1RoCDxPqFbRxjfzb1tSnFh6GxmH2C6H3S9T",
  "key1": "wAHGTSAVtpSzRMTMynpQdyXb9XUxfgyJkusBQVTrasoWMLEmDzDLnZ3gKRJmmEgvaVYW7NW4DgENcNHv11Gd2Px",
  "key2": "2yGTExrzqhMUonQWcfj5LvG1T4ZSAUqSQLBoUNBDW9sTWGyESEtm1fFRAmYkPnXNEjBpMV9ZswYzUAkMtSj7aRVL",
  "key3": "5J9QMgcN6AwKCoaMqHV9boqBoPofm9Nszc92BzHUmezq4P63ppnHgiVhsDLMeqQJi9p4bYGsQuQUy6L7AdCQDxSk",
  "key4": "4cGfea8p1uzU1Zh2g47QJEcihYobLABYAdv6RJSU9GQfYwQXNtoy5wnZeoWx9QGf3dC7BrxUsMLamAkhsWzQcvgG",
  "key5": "i8PRND4RJpg1bwzEUKqFoxirdaLKDJUCTGspMxJuurPTEtQkyCZe8zhLjZGPxWHLchMhtFHyEF1Fdkwy3hRtGCJ",
  "key6": "2N8yRXtGTT322n7dNCV22YPzrA3nK18aXCUVmd3tX95qDkK7VrMmdgMqXnB3No3itK7HEQ4JKkJEE1ysvpnk71fV",
  "key7": "24r5rhCkNpMwmF7s7s3c4dsU5mqDeXLw3LexDBcRc1ioMNZQmLqSma9ukKLuHC3z8ANpTe5SpPhE5KDqDwBb3Q6B",
  "key8": "4ZFpuDsBcbJ2MbVPcqDMpndhuKjB4ovzw5oARZp1EyVZX4SkgnAPU9GTUZC9i9d72vKLeoSoHgmsCHUgMuvEqgYW",
  "key9": "sSGozzAERZuFfuRK6ij9m2xpcyNK9ig3oWsRKAVN19ieUNoG4HDrr8LAciYFUrS8rv9PPg1jDeTrdnNWHtotTbY",
  "key10": "4UH8gKpoh9tN9RmozLExm2SZxniWqotKcyRhoKjGnPADVrTVtkFBYjWPbLymXFRMmjehr63wLLjbNzyMh11gDtzY",
  "key11": "Zw9dsPptLB9MNbeDsZK71wQ8g69Gh9TcCz6LfNdvtnDo4jNNjFrZedg1uAk15AS82cnisLYgFFKPiPVbna54Kpi",
  "key12": "NLmwEJzmQntNzfZ12vZc8R6G5B3HqTBGmsjrPv6dpsb2VafgTxGFrLHRTrfZVa4MpJSbR6mVxhCrUtkuenbKAwh",
  "key13": "2g3MZEjrLQWe5yoZhXFMRsnt5U8RUJnAc8fe8nNnqSST5DhU6DfPou4UU9ketcTPHPtM5xw29rA7tv5icj38yya4",
  "key14": "2rrvBUV9bF2zemzbwNmNVVe9bq67nsNYMHuP42t1ydtHoigqfVtDJaWo4RsHA76gaUuG7mmvCctP4ZzMv4fSzTFw",
  "key15": "52fhzcYFn3ZAfmMGHRYTwBo8pzeSphqFVHHqknCQsptmU1PsZH4kfDPKnbWoX58G1uvu5hfUDD2pa9vPw1Rf5oLY",
  "key16": "3EvjoMrpDgPcjrpESwSdvz3JrcPJubQqeNs77ZLr8BWQiTQEuruBDNB9XFNLrcq3GsQ5gXVW87M74cXRYuF3CpUJ",
  "key17": "5ZWmchZvqV64JnV2Daxb36hfaWmn73y9kaA9vWwKvRvVAkLEJ7JateBxeR8QMb6zoMB9r3YTC272SU3KSmvJV4rV",
  "key18": "5BmvBfmn9zaecMSYUxULpE7b2tX779NQaL8798Su9KnMFExmFk6YQtUj766oxfjrwmfebnsuTaj5t1EK4QMGNGnt",
  "key19": "5sWx3mkXLwrfxP5YYhT3xwBFn67zsA1k9BavyMR2wxj8E4ej6D8W1wTot8wPbJtNmoxTWK4w1jxkNZPA41HUmW4X",
  "key20": "69J5ZS1nieYSZh1JJUNxSYwTwCMcV8tpZh5CPLGKk8mdVwF7DGMrWAtKEpv2nAz7TFv8YKVXj9PMex5KVF2fZzB",
  "key21": "2Wj7MXUv2uM2FvQh32JM1FnuEp3q2zYD9Zuct9T36ziYu5mRwy8Xsd2M78hRTuzF5k1RmraSWCiaxb9vo3QaKA6H",
  "key22": "LaURYSnRw51S2j6tn41ggFk8Mg4AAq1AArrEeV78YfwsEF2QbaDDuDD8HpEJoGkmHXWwd6dQyVAMTyz6wdEjWAm",
  "key23": "5LgW4aBMKRn3zka6RkQM5tWC8L5ePXsp9fTtD2dVRP5Sz3Yy2gQiTQ8fHhoHPd2rp7cmUyAkuA9s3QrTbTuBJtoN",
  "key24": "5Z9VQbmj27TtiVxtqJMf24CibWt3b78ZXrp9c6gsdgVCq3s6SwEKbAUQYgYKHimE6D2dBjCcnAwwwSrd9SP5J81W",
  "key25": "2GasK7Y5APp5oHW6VrYqoRJo1obV2tYtQL3bsRKj8q6RX7ressFg2kVyNVyY54UY9nDQDjf2n7PP2f8b7s6xAogm",
  "key26": "59jKYC7y6CUY9PD7jeTEgok2gDv8JQYwFqZssbGBXvWDjyhjhtGS7B4scqyYjHhJC9dWYqeUXWeqfcoSg3TdwzeT",
  "key27": "3gm3cmGQpGu1J2zxpxxDUMNDw9PvKJYFx5KAmjSHxTacpZDhKkbr2vJx6wLMP4sGUZ7v674iPXcm5eC7VuUj6YKU",
  "key28": "4K1svPEZRMhvscM42hQ3qkcPmcpgToG5ShxVg8KYboQQJ4Xoq9rDDy2t45p6nTMXtaighkZt5RkdGoWmRqEm1Mwp",
  "key29": "4xkwfNUtc4zaLRh1cKUco7BePtEirtjm7Q6bgjUQoctkuzDXqjm4n4kYp9x9bvRXJmgw8JnBtL4q1diV1cu6oD3z",
  "key30": "3kXBbCwGux2tmpqxHA1ZKyLVDe27hdXPqG9NVycMUT54ULTQqaffVEf5bcJhjQVW1uD23ZvWudqy8819ZBXdmv9a",
  "key31": "42rU3nNg4M84bxdNXXRs1mmGfaMUYWHxyQixp8y98GJVXsickqreh55HTBHAhmnfTn9wXPpfzEHycaeuRgo7bg64",
  "key32": "GC7AwLGCstvim3Qm6FdYVZASDz4vbJTixJ58zXqLcYYcNqWjr7m9Wn2MzoQqJxDHeez4roE8cUhhucaecPY8C3a",
  "key33": "4ZaDT8ZECbvMvNUoJQnxdjXMmK98TyEKNJ1ozBEmcMzZ3iiRiNoDEvMhF1Rn3h9Nfm7R2PBK9Yic2dSLzaiyMJ6Q",
  "key34": "2oZ6CSmr5a7z8EqiBoXGSEi6hR3fT2Z3BYoAwtBt7tivnyAYnrKfXJGLWWLabzbHo9z5Hokzb5hLWiD3QXJTiJ6R",
  "key35": "W73LbAyZ1bzp7eqLMrm3jWxapkhjHA7jsi7veo59EvUEZniEUaRCH7wBVvWXGhuo62rjhV3MtqtQb2bcVJwBZS9",
  "key36": "28uivYgAKAbwfnDti7iewbXg2pxFhgALQJDk5GMCRyBfXpFSFcFXBfdT7xHwmiLgZWfZaYeXrdrmDKjBAsYDXACv",
  "key37": "kcegzHKXC5Vio9BoZ9iwccfbJRseN5P8xuon7Mrgv8DGgBCSmJiEEB8Az8bgbskz99hoKhxDY9hsVbzoq589M1N",
  "key38": "2gPgPNrAjAXttCgsVr8GtKKL4zRY22e3Cyh85m8WRof8tmkpBnnWMDKN5oHzAj44c2MhQLg4GKWxzdP4aHuZ853G",
  "key39": "tnkCXA1xA9mpdhXH9PdTqLBWgKznigKpXkR6DM25XLyCjJa3kZtCtZw7YFp4dSXgzCUZHMkmYZZWiTLP83tYpvH",
  "key40": "3yKr1LjKXAMwCCV9Yk2tgvLXpzoUfDCqqZkuvxyh2fPGho1vUEMBfrjQZLyoWc2iXAfXjdYjzFGbH9Qkutn3TK3U",
  "key41": "sKopGNNyr9kSdNjrxjZv1CHetU8RFX3xvvN4Hzae2rZcLWsrWDWWb24hjZyyQ4itaK2eQnKATgE3VQYCxKXFMBb",
  "key42": "oEVhTY5QXkkybVb6JLbZWqquDp6q4CZaBUeX7nwuDNiGNyMNuhRpkpdJji1mQNuba15B4hRKmkAaCskF6ommCp3",
  "key43": "3mxeET98axZPhncqG1LN5ooiyNpeueafSHm4eou8Pu6rvFBvSmDvJFcWiM6rUPZ32e7WVoSovUFUbGr6UkCr4iMT",
  "key44": "5TPLQrVV4NakiihF4nTyQ6vsNdaRmpjTEp3NLsF7Vr8Hf3tijGBfAHAxvM19ZBcM1FCNFjqUSefPLQBBihbVfEwa",
  "key45": "4DqZtySB4QFXmoQQjJyAn9vjS4ZcvJMgHptsVJpECzYjFbwP6jWMhkfvyQCEfUuPqjmGmXutf5GmFt8cKMHUMxhc",
  "key46": "2Sq9enK7NE9tGAZDaddrNQ2rPqV9xpuzKnryMXtjfzjkvHbh2s18iDC3jYZnQkZoKx1FfHhwy7qUmSxfZ3os22dd"
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
