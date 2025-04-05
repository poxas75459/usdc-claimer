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
    "4fPFWwbeqq4zfYfkTQuJNhukE6CpR4Eu3X8swKMDSFa8SxnGbJHfFQnke7DzWrvnAqLMbPrBrMnaH12yRZGBRSFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mpR1jN5TpBB5t1nres1Y5vhcjhkkcVqozZx6C9h64cUaWEq3EVgF8vsCtvPjzPHUkDdhfjkkrEeLykgA8B69gsr",
  "key1": "4KfBg2gHbfoETJCo589z6tY5QgaMJwh4ecDpqLaZ41vjKX7jrjHkHtRAFtZUYnKmz9oJSGnTQwGoqmh8xH7vohWi",
  "key2": "2K7UnTCPou1saTA3zAoQzCErXM96K5VxdGMAEnSVJ5VV99pLanQgBEBXqAeJ4ExgYMkiWwVboYuzYmSMQSRHMxwZ",
  "key3": "77MyV2ybvx9ki8zfNtuu3nwMteTrnKz51jZoKNQKR1jHMKn8MZHbXo4miFQSp4V9YLdTxrUsUEVPKb3PUraqYU1",
  "key4": "6W3HKoveiyeUzCB6AhPZ1Yfpnhz8ecXQ8UEvk5wPE6aZZ7r6rBigSRPrL17XRaC9PRcQKLB4MKqRe7MBX5zJKiK",
  "key5": "g2zBpZaqrtePo535T2mvSEoexxnkHtu2N4nyjc8yShk3nXHcVtxYPhYQspmQWBVRLUSvrzjU4YGo6LW7tU58rDD",
  "key6": "tEdpeFGhfg8fQFUug1Z6eN1CVDzPJPQ7HVt1waFfENWXgq4tV5dSDDHpFfvTsCN3CEFQRjTUAWfWmJyFCYRkWeH",
  "key7": "8oMxSMcnVGaHLUDtqwqVeN28B7WyfboYmSHgkqKjpsDMgiR4GLf5KgdALTwk338994uyBAEj868oXVqCMxuKNqh",
  "key8": "4VsanfiRzmWrcFXAHPtJXEct3E6iLrQBcbqiTgjZDV7r2s87NUdgh5ayLt8cQFw8uifS8ydW1pUYeFucWm1eezvs",
  "key9": "5sAXHGdEwvJR3ZxvifBsemvDRFD23CR4VxjDScRjE3kDm6AVTK4LauZGhAMWoUJ68xiB9LEEDKoWgaMXoZk2p1vv",
  "key10": "xrnciViKvcDKZSYJ9rpqsCUcPFXnB1VWUEwyx6BaLM2Gh1Kk7qBzrHAu2hcQz9nwKCNeUNcWM2ifSWdfsj1Qo3f",
  "key11": "56477gGTXfFPuZXXyBxYZD9z8iiEWNUtJ1qsWyTeSazNyDDQQrbbRhdDjn7h2GgPfrHHNN2krT1an7TjmzBJbcR6",
  "key12": "2wWwQwW5D6DDz3u8JuU6ofRKHb9oPKsEj3UeK5b1RBhtsah4eYuF4yv6hewUJpFSJdaAMpaU4cACXNfw7zQsWXjZ",
  "key13": "3V2q4cwEZ9uzWeXLHp3jA727WPPbFcBHv7JY6FebYpc3fAQRrepGQjhuNU33GLcoGTkkmfhvZQFCij22Dmnf1H6g",
  "key14": "37njneqkeCbk3wKyWDY49BjhuMK4pU7Jf6vV5ysWYfY6JPpoL9Ciy2WzAQ7dB1XTh5MBnnxfCYRkermtAfF4aLC9",
  "key15": "2VAmw9EGXDokbskUDLV4fzNDc5TthjNnuz6jSb5yMkys8AKMzK2iV5pCJs2PPR2tEK7rjkyVhC73u4otytVSm8pn",
  "key16": "yMX52Cqvojd9D59U6V8RPbCcAitBijjJHS8xsfSAy5zX9JvjFFBZQZqH67NmQbaYQHRXJAgAd5EVEz8Pne6tcub",
  "key17": "4rFB3etS3EnL8eLAK89skSA4V8kAoRkXVRmPMLPqKPq5SCCo9vGLAkhKsTq2fUvHsEU2Tu7p6mYpyujkxkvAqbcf",
  "key18": "3fLUnPLrdzvUH8bKMKvAgm86po77eZi2V1Ne1ZH5nnmzkQo7jZVrGtKsFej8psuv6fMRFxdAVcp3pUG6o77LgRBM",
  "key19": "CUDVm9MMDodhCtCmi1esGyTvWMRo9ofhgJJBQeuEWvTfwF36sah7xvxfJT1zNGydwXEjdAci58cUpU4p1xvbqGe",
  "key20": "64cmuSSnJVTGoWDG6qnnqutL2mYAejPdrLKrJFLRn7MZchEJiyQJ7pohR7e96ZzhyMg8AQWwxbkzRYzWidNnW1Gw",
  "key21": "4Vun2rVWfwjcdGdaMUYDbbjyPPvB3wYyPAb6144udq5YzsA8Ws1srMk7LFonrMZmF2fsKpDTPrQk7FqH96zWETjb",
  "key22": "58f9GHtrUkX5CHczhVszeE4Ke9LL3qzHetT86dnGFmC4QhwGJgsLnu7NPfaJ4cT8KvRG9SJk5CvUGp9VBerayhnV",
  "key23": "4UBM9EVbdNDcsJeobsTuBTXAaBhP5yGkPAGoFizAYfB2Uc9dzx18MXZtNcckVwPtbr1GgH39KweQSS1CHALuc6sp",
  "key24": "2XY9xMiJ2dVoWLc6bseXTAnwix2n9nvfiZ2bW9QxYePP2MScsDYzXjmrvjURJzfeifuYSCbytBrFJBVRaCgeE86p",
  "key25": "5VWZHDhS9DkBefs4xa9LdCu8pESFTito79pzFrT4eWH1bJpLsLmBkxVmBRGJXqPaahAqoiZyG63dXMJv7xH4t5co",
  "key26": "5XhDFwzfsPo1Th4xo4abQQgC3SPFqAgVuWevKuyUrx96DBpjGbB6Z9MCETLj4HQZFfQin5Aw4iDonwNTtXGJ8ffh",
  "key27": "42S3Fuxx2KccXhniVpJ5NYJj7QXRxtpv7G9f3EWY2FxxDCcVrPBRRo4pzFDiCYrci7TgC8XJLfALmtGiwQpQnLdU",
  "key28": "3Lg4LZrzUQkfRM12USnVEsK5kC9EyrUkNEKF7oXH62oj7s4a2bqUbrjxwpffPVAESb5SU7tSpk5VyrDpsgxHQ34G",
  "key29": "2L23zwVhseFsAMcusCvdvtyRF8fKfCMcsgr9d6r3dz6PqVZq2tspoFjKFNGjzp62pFPAHqbyKZ1A8oX3JKVCmT6V",
  "key30": "zhYcfgC6eNgp5Fo3VqoeASixPprKosAGL5D7S9yrWkmyRNfMFa583JiYbk7Uh4xRqcSZ12kjr63ygCprqCFVGa4",
  "key31": "Gd8JidWgZbpVAXVp11u6Ak5VtPY9K61i7feCYwgQ1awhH2UU8cwFaNMzU8kWh6sShJfNg6AWeaFFu7fC1TgvTcu",
  "key32": "4TXaXAP5H4qe2hNBAxBoqm9Zvjjr8E5KGishdd7MudhvrtGVt1V9rQCBu4yhMLajFMeGGcUPhncbNU14iDwz2WL7",
  "key33": "4RNG2GHpBsKWbCt6g8nCyfnkKHqhe7y1t4yaAt4mw6fJKwpoD2sXe8Zb1nYuMEw7hztZzn9mZaZV9rPyZMFCcd6M",
  "key34": "4xLN7GwjTebceQKQAvkyhZhLkAsa5DYsoG2omoufcmWsYNaJp8MhZkayYU6MrnyPJDAQKM1UCjhkMh6atnRx41nK",
  "key35": "2XjtznBDG4ejEKHdMWNsA9jWsiZ7cNqskF35BXXSwnhToPEZSHjFZGQFmnvVtXYNhSZJybxNpasXrGRjEJmkkGkC",
  "key36": "5itDChQo1frNvEuaiFfsZvxAPYzU1c8f8S3hC9ok6EdVrMG7pZgU5iw4YsdpC5QoBHcgvm7tW3sYGziHmqHEj3Qo",
  "key37": "CXQSbELFamhXy8LBUiamvwMELKK3qV8xHU1SoBGgAmUWfKfcioGYVB8ou97Xiq861xesKasVBBovL3rsEzgYMpS",
  "key38": "23e6ikBhfZ2EAKi1deuJ92BDtKSS2U4xtFyjnRfhvK9iinAMgqW9y5jcegsyM4adUb8jyfBuwzH8Y6NdjrmZPB6X",
  "key39": "4adKypzFQZHteD2AFNqrsKZs83d6skvhCHi8JsSaBjKJNkxTBz3jsfvDCQB9CeSaNSjLxCyYRHrFyfmdmBmkWjDr",
  "key40": "5bD3sAiz76a4FGS11zkbfqHyQbjiAgFYDHnKnBWKqnmUwMiYnekgFKGKCSQGMjYuCD4FKoX9i344bx4jt2z7ALy8",
  "key41": "2NBHMMPXyzKo4w91PjwLAGwauBktH6JhpgQ1HhUVP8FbRpeYLNDh46g8wgedng4Kaug7MDvz2rRkweFQ3Ng9qNxN",
  "key42": "248eLC2Y63ztkKFs461NiVtdYhQVVFLzMY5taCszaYPJmtiYp2UDtCqCSa1QDfhtNMYvV2YQPr86Nju44THaSULg",
  "key43": "VpWfE8dLzwEZP1gdtvZwdzCP8LWApT3yDU4JMjnXvYxcrYeApUCDs1JaSy4sqYQx3cm2L8phd8o4zSLuFDeTWxV",
  "key44": "5vvf5ZTff9yMfjUt4G4EELC6yNmQmTQV1c2BH9UTiWHey73XRmdE8PacVzWFeFuRZwCbm3yBmd1cE9XBsYzb5SLR"
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
