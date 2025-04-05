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
    "5JWUQyLh29JHWBUFd78945mQgcagWLLrDKqRjZnjiwUKXDKeY88qdGor7uN3fufbvhDfTrpDjc3KeVnUyefJ8ucx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CHhSBdoStZPFye2jRwdQEcpPavJyHfLxpikFqRoqHDm2FG1zTFdYHDSEUSQV7yKbAGUqehPbujSZXNH7aifQpdE",
  "key1": "3LrgDKtejv1ooZhzuv4Bc9x54ugJN7kSSNTNtRq8KSjCtgu444f8r4kZXg3Ni1FANhYoMQfFe12xYaZgSNtwqzJw",
  "key2": "62nhtzas1PAsrkcqgxVaSB7BVd6JpvZsg1NZGnJr6qiJm8xiCg5S33JCBNfTqFFLze5xiuof59ZU11vGw9beYeC3",
  "key3": "18dKRT4pTnoD61cXYfRaLkKMSUHbyT7yyxF2at3eZyuDw6TGBV1TY5JhyRTyghWCyhvL8bYv83WCBNdp23MNjC4",
  "key4": "2C1ngRtuoptQR7Ut22moiR9M161q4bTZY7u3rprSxwQeM4ih2pBtatBh7siUtZyszADuyZd9A5AgTgXwjP8QqcL5",
  "key5": "3a3ogcb5aBeSsP56BYqGM1k5TwWxqzmd5JJW9y7nQ56QU4GZP2nqBMfsXNVek2YbRLBkUw71jYhGHYHBDFMZDY7k",
  "key6": "C6MwF4ATbW6Lymk5z2skEtukdmdHxKHEZ97kWXj57NtgS7NwPABHrY2EnFTyST3fv2h7NqaW98p89eo54c8EbRt",
  "key7": "3bPPFG7i1M2i45WpaYnXuAopurWVXRipKTXYv2meVSCEuakuMwJ6ZMXmKRRk5G4apJQVmRNCrbBQLo1QxNe5c1PG",
  "key8": "4txziKs7f54LUUAU6gKsrqW4K6NTwFqK6MDhXoqd2X41mmaiRvPN5bJfxbrMAJEvofAczMZ59XoeTYf8Cgwn9vF9",
  "key9": "5AP2szCTE1y8S8MwjzvLHntCSj7hLikA87TH9j3x4dQHqwGJ4g14Yf3698aZURCKo8gd9LWYgAU6ofjkKnxazgwj",
  "key10": "4pKucBNY94EtXaJX2YGPTmQNBtfodyUUWffrGuqQiWj89dnb77bekkkXRtrhQbk1KC162dYJke1XZLKMLNcxsE1d",
  "key11": "poSGJpGMXKRdoqYzSu5bB5xRViwWhHUoZKzWJXuDDb24eXAugERqNyT4vtFLJjxkkFvjVQ3yx3pCyeRLyANRRJY",
  "key12": "4nUHaeD5HRMVQx7ir4bYu8eUKWgUqJStAe7gPiyr2ABEsV3aBjPqDJ2DgPynkkbrRphNA6NUG4vnAC9pfyYpm4LF",
  "key13": "2PVKW9iEfZcUaQDwNyqgZth5HfYkXBAAeG2bSLuJxP5pRnqBPfeYqW6WzWqBFc9H1MyWApBqEGGrTc16HTxwHhdZ",
  "key14": "4hs6JcQUw6efHNdDAVfooXHVyVmTj55B7VJu477cDBz8JkTmYLaVhuCTVst3eU3y6HmMRA3fXBY3EvAAMkgwg2oS",
  "key15": "4HbagrmsZsUvKRSo7tuB5z4P9KM6BL8Kw3aMbGCwuLT3JFRRzZaXwv13Vt6vixmote8hsCbyP2N2T1TYw9HJaW3o",
  "key16": "4TFr26ZNRd8uYp4HwHFSWjK5hBYfmLUyRsbP6kWJTDZeB3WHHGSD2398AckeNS8DgtEbWJ57MksWuNf1ffU3WTX8",
  "key17": "2wUQ7QhJpDPBXGp27NccVBdSGwy7pMfzwNcU7KyAryfNVRBApRonzvNSpD7MuyuTs9KwcdQd39TkQVzoNpEaZqBH",
  "key18": "5nSkPf2VpQVmv1Ub8iexpFTZd9D9zf9Uv1pARBv3s1u3keacbs9YpgLzTxYqzGLxoWWJeCXBFwXcqCME8ryh41Wo",
  "key19": "3Y4cQhMaW6ti6sauN2otT2hcwGS3E25veZUxqKVThhve7iquNs8t2oc62fQtdcWikC9qckeLh5zpDZUQgGDTC1zN",
  "key20": "MDZ2uSFefu3hfYT8jbcFKsNnHDwotxdvzqq6uknobd7t8Q56Jcx89A4ihHiDGXfb5PQ9jghisZsn2mNN9XpKCPn",
  "key21": "5zfiWTRZFfZSAurbdpxeEuDd8oK9HXZizVYqGcVmpn6tKX7ZuWm6FsZfSzcn3qatTf2HNzNEe23xFPpgEFXTRGqX",
  "key22": "4ie7EaytiDr54TQTjGCNVjnQdMvfxerqmky1dNFP1RFqJQTcUPTiAuJ5TUmvWo7DDpzRkj3v974GUeeXvMXBkT1S",
  "key23": "4xE9NBwXuP3QMojtHmCDKdmKuv44VJ2YBdtoddCcb5fYGg8v2YLPUA2FddpS6uYT2XQ1cjKBhABTpmnEvVBd4ZXt",
  "key24": "3B379GZTfCaRbBxsJA4VRqwCGUYK9M7saDBzVbnYcDPLTPWHUPd9GBFJQWPFaJg4dXYNRW1DgQ6BaomV18GAbnGD",
  "key25": "5w5Ut1jjUTSeowdWJaAQXLPnZXKiF3Gi4e3PaJrL1camqksiodgHgPm2b9MVWFQXXD2z5NFtuP5psAiHFMQLfK8y",
  "key26": "yThoctMnNxbv5XBLRTJDSA15V4unzdK52RHAkRA4WKGcDXhfx173CkfgvXBkASYX1jHbGjHwKbDvraB1Gsemu8m",
  "key27": "L3NLut4oujnrj6bog2mSVyfyowX5VHTJACCzvMWsAdsXRne5BCoAoUGR7ffmCReQTEyM9fkH1nDgttYtHNagZGq",
  "key28": "5qTz7oANyWBFAsKLCy5nBHAaJCjkrG5H44Jj5dFvdxRKH4RUnER92WMgkYRDyykXe2yAhU1YsGxgouFMZTwbNJ58",
  "key29": "2fkPsHHtZZhAbaTve85rLThXGpiuWk5UWJyjHkWfme7hAdLzf52SYPQPS4pRx1YjngaVmCFt7rvJ58zZD4sosbpA",
  "key30": "4TQxcrDHWShMCdr9NQDnKJkX7fXe7m8XgwVgdnmLgt3NWP19SHTbi2htRc7xgBscpWJ8sTR7CtJUmj8W1YroqS4y",
  "key31": "4eJzFJtz7HQQnnUqKML5MYs3YuRUKV5WHQoQHK18hyTGLsZkJCVyBiiScffrwc3JLXoS3hfF1jcihvi4bmmydrTQ",
  "key32": "2aFdfRazuMYmUeHd496EFQSKtBzYNv5qJZNcJqvFQprzCzdgxA1VbYc7mopErPnSvtSbYcsuP7GAaK4dkzEEDWbN",
  "key33": "353SpPawvGdw3rWBVLw9ARkGeLs2V3GACoxXNGWFQ3LBMs89rKmRhyqNYg8SNpTpUPyAqKB9pBhMYUncAgYmqb85",
  "key34": "4M5SFoCEgzy5gB4xdA3YN17suissUPLAjf1vKbvEPYkax1quKR65rKSKcQHoVzcX5n6iqqFhudAsCjAzD4zFjwuo",
  "key35": "3ALRdhCYYSvb3znRYowAuK6a4EQSEjjArL2mJyDEeMatTGvqm5dhFgziiBW4TLjpcfYtcY3559T2GWG6mHWmeGWj",
  "key36": "5VsoTG8zTUPNDy2K3G6wvst2nYByg95eN5v8RjcLDnY3yExCLcPwBAAKKepYAq8BJxgrZg6BGrdQejnv6WRoqAcd",
  "key37": "4cijeSTbcRfWfhqo7w9YxEH8cQMfaBdeSBBrntgxXTdd1uY15JVNYWGHfDVVzDzUg2KgqBmbGercE4no3yUurmc",
  "key38": "5SVgcxy5igY91Wms93D6tvVf1UY5VHnU5F5NJtZHMkk8Sk4gKdHdpxfhD2riY9uM2A26stxJqxSGmauhwy1JPcnW",
  "key39": "53oBM9ayUNUjor4VAcfPbjveqp4Rm8nx85d1oQCqrf98Egc4eg7iJLfyAv7ZeEiXe5BBhmLNacfdnJMZkeWy7hjE",
  "key40": "5AGPzDmXNKHFNwcH45t2BFztqhiChdQ5dovF8B8mJdThDZz4SqUpsj8d1v17szkm88mBdLfiTDWHPswVhE7owhuk"
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
