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
    "2hsBihKmZ2uEGrK4yKvTNYp97SCPw2HQzRzeNFumdnVL2XFGrTxMLfQM7EJGzV1uPBDwiBRPi45yyxCHWZXLW6xR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27osSo6tsMBLyPDq82KzbePfpn8gj1nnE5JNchufTJJ271ignPU6fPMLWYYZoMzXP3m8A84PybCuuKT3eNG29bQg",
  "key1": "42TN2goLgCoTuu7Q1JV2MgZUgtKtch7t933jGG1rgBpRpWb8EsFMR33URReEhXAXs6MDe1qCyv1VJFP8v8K7aQMy",
  "key2": "57WzoPCLXWr3NJbQdfZM2jzdCjtJDtxNYT8AGtnjf7upL6ejnnqg55UbxaxJaAMQsLrbsTjS3nmpFhFpHqwqb1c7",
  "key3": "66VxwPjZnURXnRTNgcFmPgqssDENkyaHfp3wX4kbS8DWtYy5hzV4ubfWC4MTq4xd3SzjhQmWCiBoAHPTsw1pY5pC",
  "key4": "5zGEGCQU35CaRXWUq7eAc4uZQ9QjcdnZyR3CrkCMkx9Ewo3m1fSpkJerZRNvnFeBoAJswUwWVTGTo5LeoRQinwXF",
  "key5": "24Zv5BkonLPw1uSNuuaoXGwitE8gvseVAUnsd3bEK2gUnXEgdk8pBhvjct4pajAAnD1RHbVFghg3ELtgybYqeWyb",
  "key6": "42YFYSSjHZbn7954t2hLir7LrvbUhcBR6ko24jLPdfbNmtFfDuoFfrqjW5JLsfmrf6LNKjfyLgoc1Gj1FsUqgHEf",
  "key7": "2MeMsJQWhMGobWmi7SFNDDNwubHmRazomKk3AMUytpzJP7nSDFEV2pvGV6MaBM5xmXmqyPqnr6vYpm9NSqX8F5zb",
  "key8": "x2phGn1w6YHokKpmXo6PUPpDs3Wn4RKrDwKgnSdVTN3WfiCZzo6pUBvA1Um3PT3HUWum9FXQ478LUBAKVLXZoMZ",
  "key9": "4swDFHUW9nhJNYn8Dim56Sp7ufAmYSSFU6octcNPxBaXrMRkJoGYFMqgDxXkwKYp4JyX4v6esAbjmUYpWvbw7xWs",
  "key10": "3dD3EPJ5qBPt87WCvKhbS5LVf4fzmUoHftACK3b1DxLxxag6yG4z1NZ7LwEhoXqyg9DC1ccvnH1DmaYg7cX2WDc5",
  "key11": "3EXkockU6HXoS2HcP4kuj8Yagf2Gr89JusGbXHXSvGqwMMAmKSvdPtSU4FT3QGHytm8dpE4cWUQErK4yery9Um8J",
  "key12": "2BHoHTqrWjSBCwB8xtMgVNoFmwHuyA5fSU4RjQ4Ydz8rtc8uHm3C28tiG92wUP8FfLC1ntxx4eNyzijVjycEWjRj",
  "key13": "2iCqG6kx72LhLCo3p6q2SVbFy8A99Q7rfjD8YNJg114aYmcHRx7nwvrdFLb1Dj1r5QWhtcvj6sVJ4ngLVCTYinqB",
  "key14": "8GqNbztcJi32NbimmigtJdN27HRA88NsUZdYcAqjiqmYwStuoft8EJwJVuqPir2ddN96vjorce2QCWvThJmK8Pe",
  "key15": "4jLknPYaLQq5Xp8mvKtJV8gGKFigyjgUbhxYvTGEGsmkiCC9NjewT9jvy32Ga3w2zAVEARseRzh3wJpFo4PPpSXs",
  "key16": "XhMN4CBywaR6yA3RLmryFLNBeRVw2FefUhGgMPdS36m514fqDCLToR9PiAG2uZxwUAqsXYFeaQz3KUoH56tgzpA",
  "key17": "ttw6UaSfdagKcsv4ASHMbqodMo4Lv2SUdZoZMZjBS28JWYKMU2UKX3UTkbpzUuoZwEwvddX73nZqGDtsufXJdAh",
  "key18": "4qbGAqhAA47yEMFvvz82SgyJBuLCKzofnxR7BWVTbhQ6MikjFuggqwUUFRHb638sy9TAopvKRuPjjmvXEzcFcbLh",
  "key19": "LneaxRQyUJPhuz23eDxQyvooo9dCJqR5YXwM3uLJJ6Fb7mQXGR7qfNymDgQPhz2PiUEdnfB2iVgiWmao9F7nxcE",
  "key20": "3A8vm9qAXmRBqz3tpSP9fyrJXw4judEnSaHfBQwZcYYodDuaRrFGzaRAyZKnxdCQrz3hUpGsq7YXhpgfEG1vBCus",
  "key21": "ZvpNCoYygHoXR3kLXX3H12psy8f3UZEj6cuFCm7yZiXZsKsmG8CWR2o3wt7QTTfB1XposcJEsUxm2RxKLXKBHeK",
  "key22": "4XWSeqvB3Dif2KLMrAiRh9LczHEuwvTLe89eJtRfeYgJMadgcfjKVLXJhuCPBjPv76jun1aFJtzGc49KvoTRbMe8",
  "key23": "27by7711USUnHSp4V2rWsj9cmXM6VLfSmVXTTjy48hWYpFiuxYX7f6qESDnns75v8j8uBxqmqBcoyew3Sht1kWec",
  "key24": "X6CqjCsSP2Rck8MUZk9r7NoohTNQvghdWUg37dW6FQBaHsEU1CKXaWXmu7h9X8e4mEhKKHHMZTdRKxdBX3s57qy",
  "key25": "27HMWisFDTwSgh7W8XEU82FqtGnPfYEv6Y4Hj7qVy3Ytr6m5DwXwia3NqAu6oUtCRZoY1exfMw6vpLt3SD1MjU9A",
  "key26": "3TfhbVDedwDejbWTLRecRZ2E7eNjxB7dLmPfEQG1jHU5NG5LuTFxiZn8r6pafkTmFxKrQkbkXPK9vsRavMivL8bK",
  "key27": "2tyN8yZ5mtNPtxoxKN8np4hAeeV4dw2geUfr7bGBQDHQUDZgaYoswH8YbELZRUQJvbybK8Uqj2BUGC3CUNKDUbri",
  "key28": "4sA6dnrrd7Wek8rgYG7h7WSTE3BNPMUwPMq3s2Mf7EMsWJdLxkrGwwd6F5SHVi61DFA6tWnnSBHtVs6UNaFu2k2o",
  "key29": "3692YEMtaogvRo9L54YnLmoSNDaEKRHZLMcpLDmMAyenkfEEjV9vFZq5p3E8CTDrmSoQvyFyjRFjoTJr1XSp3j7x",
  "key30": "5nu9vY8SoRSJsB7dt1e8TNfuy8iPG8gbAs9o1kAtvyuxobiqkUFFpVfw64uupt1djocuf4sDK6kq2mZKB71VfsSj",
  "key31": "28kEBAgewj9fa7utRECD6rpovGHoCX4gF7jjrbttVKz5phPoyGuYGzcJ7u2bGrHhi5aE1zhcYJys6UUQPtsMosE8",
  "key32": "aChmJduJBjFVqEwtv2Mfe1FL1gA6HaG3ACErvDNPqHMGofSGUQmG9LmFeWw3VMQRrkusLnXimArSjV2QSDHn9fG",
  "key33": "zPBGZPMoqvPYrCGqHFiCWgF4NUaStyrvtucwmZsMkTwBAxBEaBd8cPHXXPh9GpS1Ugwd3oQhQx45b6Qkz3qCaUD",
  "key34": "4F2dGGpQfWKkeoWhYSqi1vMPmbyssYGMC97Y9oYS35LrghbcjNLHMjip3RhYPTdYJWKthqVkp5C7oAYimTgiFcKg"
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
