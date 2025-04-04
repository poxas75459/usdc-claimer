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
    "36xodgANYFLKHH6NiXfKDmLynsZqx5RsVzbCjm6GfeiD8qCa5KjAXWuJjSx8dbWgKDoaU5NBrSysZbm19N2BEfup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kmtYLmfwxURPFi9sR53ExnDButo6HnPhuwLTEDtRkupFbqbCbeXMEKxL3TRMxW73JRwTHQfUa4nCU5QQKCotMPR",
  "key1": "2fXmCvsdFxd3vkbFA6A5y3UPsM4NnhRoi2GpjNZfcuniKSFRWckgTZDfSRgMNjFqnWUU6NbT1hx6U1KacQ12iMaC",
  "key2": "4zYcxpio7ajNFpN7hvdYCMzDJUBmchvZaAyPBj9ATLKDtaAjm1JwQjyCFQhqf94WNBk9aj7tHHxKHHgZCSwSEe5Z",
  "key3": "4SLMvWF6QUGPY2ApiepzxHeu133Pgx4AdLJXJFakBBxqsqfXnpAHpyFq5rB5bK9uBjKs1gV2SkodLPAwdg28kXRR",
  "key4": "3PxbPHaJBKgRkLApmpSFZKEui2KoMi3m7XCRSgWQcfmVqnpAbidC7iXUmrFazkBS4Bnu27YBjUkqMjczoB7Hm8Cg",
  "key5": "3okwUuvmR7bRTvGQmehuzq7NPZGXS1uCitXumxFX6kS1LAK3gRC6KR7itSctJkD8Y75Vz6UYektz1TC99scxGzbA",
  "key6": "5kNSSEEG62CDZoxDcfM18UnHFDSaL5PhC3YcLKafw2zmdbf6D9uRi93DmS7tGjQcLHYAg84zzLSMNHSK9M99HdaB",
  "key7": "3xKwHwaZd4ygt9w3cDcsB5jd5dnz3awSEFauQddzNUrkDn8HH27uEogaqMZmNzs9jYGxyjtHSJHfdePgFy7RxQfZ",
  "key8": "5Etm2NRGepReGNC57njaUbRt1hiJr97AFcqE6rim2vLHZPc5XTnD5KaSDmcj1wx2fodwaKHwMmrgbccwAYo4N2vU",
  "key9": "49c4V5Nrkkzq5HmUDZigZTAgedPYHd271KQ6XniHMg8eJnzPBW582Y4kv4hnii3bzofqR8dcPVxFscA55XQPUVj7",
  "key10": "4tm8hviHjzeBDGqYcQn9dHsxjzAAoPJebcFjMCaL5AX5T5W34N2YvmpqGsBd1cbX2DKE75P3cypfdRieRevyNoj",
  "key11": "5YmoBeSikQgrCPbp7UpTPVYm68Jb6TaHn7wkhxjCbgF532V1gM12eWctQ8kge7YXxZS6jAHM4E7pHu3XE4Qg3F4W",
  "key12": "5nTZWHbYFfvDsDheF6FXZ1LLcTkAPRxqurFuGS4kavjUAwNjpAwMoSfmqrKGHzJ6iWWivdbjaAUz4M5FccpwHT9W",
  "key13": "66ko12SYRRTMzs7b6YytLG8KN8knAthapsQVAmjHDdRvWzfbg9hS4rf7bTPhYFZ3WUprhXf4JeJZicbq2RDohgBb",
  "key14": "49hXUprx9taiWnU8y8pqzdJv6EL5vHGzghHTMnkfMytRe5LgKYEd7UetawdiFdByEcjxKhRKEMVnQwNKBJ7jeTim",
  "key15": "2tYGuzbf5ufj1XuoNUaAfEvh8pYoS9F6Y4YgjWQyaBh6cSEgxKTT4edqrUG8AvLL6uQCiGcuCvbYLhoFNNhsbCLD",
  "key16": "5jCwi5SHeAPWcUvwVzZaQqmub7ANCVa4Ym1K9P6LugT2MYcDvmkKVgujPWPp9WzfzdVdKRukxRbDe1NHpt2bA59N",
  "key17": "hk76HsuubSVFnCzTMz3cW4hJKK1KDn5wtj5XL4YqxrbMX87ZDubCcnMR9iSfPYM7E3qmGPwtLkJ3ZdK1G5oDtsB",
  "key18": "5fiW8dep5iwszgJZRmUxe4S1ubirvToXeqW6s2Wn9UZN2T8fCfRDGRwE72URjiACVv1arVdsxzEirAGbKx4sCVPe",
  "key19": "2mqHszNNAmpiHRTwJatq6cbR7vYDgGPqrwhifgQ94KEaig6ZsnxQggL2x9MyQ6oNM4aQQLcwmLJL5tq79UrnyBTM",
  "key20": "3BJJocbvCBRsa2YSq9jz7GtAS4mRVuGEXyi4CYnbBNBX91a7SrTSArnK9NHBEMNfjWLxS1fNRtbgZe49omfKGB6f",
  "key21": "226wuMgScXg1PV1cwo9RgDu1A6eWugJU4Tdd3j2CHuhM8JPrmdJFK4vz2tBS3pCMgHhGAbQSd3wXcjU69TtcKWKw",
  "key22": "2vp2FPmGQ9mEoi85R3NdkMEMxJU9n1c8V1fstAfvyCQW78yEqUYyPSZ4JZbdQpWVKHy5rsi2fuSikviDdbSS1Dn2",
  "key23": "KNUX1Hn9D57Hqsh9brHm6u5a7Lm4JzanDLzsPqTgihizCTKuhgCNJRv39nyUrtwUA7cgFc6yZAjE5nBc7xTbcCt",
  "key24": "5AT9SySB6gqbGQRfXYVz5i8MePMyMb6NdvxVgiCNgWGvqKTuShgnwRfkzp7KtJfxTVFBVRzCrvsCXHmWCRpgRiiH",
  "key25": "3CobMNHcJShNVHFsSM9z9RkRhJf9cHJYtoUv8uR7beY5GDRbZSKxGMCHXhFtaWzDHjaqSt8gMUbanEjqXeDQYvio",
  "key26": "2Zj9EtKbfc1aVFfwVzcZiU6h4izWg5G69rcwLYPZjRRd4ztk2ot22HZLhsJ29dSd4ew5ZrGQQQE4W2sEuARpUfUk",
  "key27": "go2kVUK7zsGDYSabVdQUiEK4cUF63hVpz4ydRZ3qGvv7PzouRNLbpyWqUijqbtBrjXDyQsAhgeGz9Z4HoeU9NwF",
  "key28": "5jBTJPGJNy7SDyMpFRJGE17LvGWiEqgNfABMt5hqFV6Wh3frbs1cpcG9s1vWmJWwbEiTqD1nkDcMiHfnC4fZBoGB",
  "key29": "5ErReHJuPn7xu5rQUZCnGFF71pDyy98NrTutg17DXbxFY4FniZ1Hm4ibWwf1ygTnpqrCKHD6wkiEbrwmepBjgkkq",
  "key30": "2z9R6JNtSd4ALM99aWuwiP7ZQqCghvnjKVims1tjwUiAR5SKhAumgBaQxjPbuhqdfCHdDwrbSoRWPWLC2zGm6dvG",
  "key31": "qt4df3uKrjwRTPKrnhjn8E9nt2Cq5JBgZKJJWMTU7jnGQJLZDKPGEE4jz9i7cbwao7JVyXqa82cc9SB4FGWa9Lq",
  "key32": "3uyVusajQKym2BNEAgV1SfCUSrmzovm5SnnBu5DJToB974c93LMXnpZmwATZ52t8kdZ1DNavDGxMbv1heoEd6TGS",
  "key33": "jnSAvsSTY4aPDbJxTbbWJsnrK1efefA3R2w4v2BFhF6fffGWaSj1Yyxn1RNuf6EjS8maPD4Yp5qkTdEnHpP7BQf",
  "key34": "2oAYo8ENopPHSuWTuTeY88Vayh5ZE5hnovB8cp5VaXH4KPmRqQZoRD1husfkDf6QAJhtWScfp1tJpnV3Z5ngpwKz"
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
