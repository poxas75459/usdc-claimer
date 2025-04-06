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
    "5eFedJKwUbrEoknmRht2YGk2EQZubD9rTouJ9fcD4nBhzmdce9JBnyteZjCohzxzUqaCc23BXX5XVMRn6eVSFVZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HtTxRFuFgKcCbyiEK8ZEzHV3NFMfmsBUZHXed5u96bKU3RP6K3VQ1DJHNz9YFeGMKgJcL54ct2pQ5rDjMVVoriK",
  "key1": "393ZLTa5xGnpCpstsvQLv3KLc3Lq4QKjTkRyKbYCN2zbSi74WnZS79PutpKVg8yAr6vpntADH9NXNY1QqemQnUB3",
  "key2": "3xQ6ykDif9B5UQZuZCCjKEEXkTD5uPKjSGNfFrn6CjSFoXWVmPK3hJZzEx8UT1SRWomqUS6Z5uRqXtcBqhxDjEo",
  "key3": "26LnqF5d1NQWrUA2pwqdCbgaEPtsPUtU42nLih87obBYA9wJBZV5FR9ywRNZRQu8X8bo2fiCvtvuJdQ2VyM3DwR2",
  "key4": "5J3eV2LosfxURSYa82Tuf8TBLeVMzMh53EjumbhE3kfLxL8F1MJ9978Hn3PibdFfzp27p1vhSfNJShKHfdjwkWJA",
  "key5": "63migy9sdWdo7vqm6MQRPGvcNjqpEnXnGbU6psEKtFPQedXDHgYHxKTKSiEyB3vSYCL9aXH89w81pV6UFQWDQS82",
  "key6": "4v7XZVPJ2XQUhF1i8k56znNB89ZbTdeuDbdJjV5A4Zhx59bQu2dZf68oLMwUi8XGZkdT9cZtoLq1SYbQGQkL8md8",
  "key7": "5Q5HtSZjXHi2f7C28D5v8GqGmEUr3VrGFkQpM9ECJnCKDDy49Mi82ybZa5JEv7u2KKrZy7DBNMyfnMdiJubdb44R",
  "key8": "8g55rLgQPYLQg1Ki96P5cnmjhx5MoxrwgimsPmfmFQuHWnnppoVoWE3bztYk82BR9aeBdq1BA2cbY3f5QFpJPJN",
  "key9": "32AJJwc96TdbMLXWyzWEvyaRWrt5pBh7vUfTCUrxJCfkFFb435dGCrkYYTjaTfv3AdLKR9c8HUXU92bnTMCP8SB5",
  "key10": "5Jv41f9oBiJwWrNnLL937jsf6WUdeyY6K25LA5vpU3GGv4Exjr2cBD2GZuNQ1HG3fmGrBv1j3AoQc2kGJEwqd5Mk",
  "key11": "66Zx5AXXpjMAGZzMvBZCKWKAfZm1cry3xu2nGcQo44mB9khe5xKVTKex89i4TGT31E2LnA7m6YDb5Y9M1QL4nndD",
  "key12": "Sk1vh74Dab1XnQwH1UksqvbEwVBPB1Do8GKRVotui2GC3GoykV7gBAQ76Fhu59r93SXSX6Nb2V6RpWcCo2jxAj4",
  "key13": "2g8rZbR9TPBdHgE8hQgRpQ3rfwcgY1TEVfwewmkm44Uro9Qga4tbpcbwQwJYemQB7uGp6Gtk7AaFXyMUXa3aZQdR",
  "key14": "Z29cJ1r3RPfLYGQaphwkBTeN61aqtV8NERwBLuMviSj5mm7NqiJ4hzC77qiDYKzZyRbrt7Bwkmq6nzssM83YsmH",
  "key15": "57yfWxGVnqUv7phQdBnXDKvpYMNUhoH4vEQUrkFHmWGJMUE227Su5zDxyYieHvEsSQeHuQeUfwShZC1YzbafwY6N",
  "key16": "5gajefWPQTAu18v6cPoYuYgQKnXsCfDUeoXz1EEiRW5iqEekBu8DRMhntHjcxe26CbczvpsccUaK3QiZgNwWiqBQ",
  "key17": "2DiciF6dYnDq2NDGjLDHVMh721y13TRVWJ7FqSncJPHHSiSfaU4UgQSsnXNt4QNFmoc18q558Xcqr5CU6DyBd5qj",
  "key18": "2thoHHKsGuBntEBgreRZR3rzVeRkyeZHLJ9Fz3Z6TRkpSovQSTiUC7moaQjUsXNBdVSsGCQBkCHFWjPnEoYP5GGY",
  "key19": "5XWKBPVz64SuQWyg3QxWM2mFHhBLeSeQAxQLnVZy9nyQtML1UPbBsQg4JVupVNYoUNrAKpaxEBsMxKMNixurycSq",
  "key20": "2pSpBCyDvvGw6ZhYmfa1DKXydq4Ztfj9vdkrrwqVzazsYAU8ggR8Us8DaVBbzzmm1HrJ2MJ1ddAMjQkYgbhNa8b1",
  "key21": "Ho5iEQvvukUvPCA7evgWR8ZSo22BxrtLwUFLL9QrfUvaNHu4uKWLK1Pne5mgavEaN4pFkGZ49E6XwiZdcUnC5JK",
  "key22": "dp5aDnkDQZZiUKYqGo9YnLCtdymUPNfosvJB2LAzEgLcAQMtdFo6XwmcMjG76u372d3DtvgmXDs2PhKw4fw1PfP",
  "key23": "5w2UuSBMgrdgVHy4npJ9PLyJwUfzH2Pi2afCPfTJiCRKkegdXJhZYzVnFm7kh6ZmfKmnNNh4BqhUbgtNjYwj7kCA",
  "key24": "z6MnHte25H6vL9XGXdKCrT6EBGAdZTbAzrSuGLuhir6u4VfESUqpqgDov22KUQepnaifoDeu3TQ2LFMzJyFf6ix",
  "key25": "5EjFKK41jF3nKSA43ZE5hkddhBAYWEShhwjHSUWyAM11DdRdqVp1zDS7w8dGfdKyseYnyKvHaAcBvQnbefpKuxXf",
  "key26": "5b7EMWudm7LrmGs1GEJKMcLp2SjnVXCQRWuHLqwiq3gvCK3myjHTtVn7hrrVPLcomvGi3JbiC9rn7u4NbMuNZCpQ",
  "key27": "5qzwump9NHhDEx3NQPLTqVFTonfVCSXmydKdyaK438FUkDKZPRN5TqtsDSaVMZ3BS7BMYqkEyWPQHEd9SX55VP8m",
  "key28": "v6UQVBaXxfZXioyuaq4pZmvRVyZ3b4V4A7mHeCg3MSCg3krNXP9puni46jQF1LHjJMkoDYFcKKxQxEnJrgb8Dj7",
  "key29": "addC28VFfDXBEL915q4e964o7DWPHHcSegjm2yoxuiEiCg13bebhsJZ4EpVpWn6mt8rFZKYg5HNxgCztgkjDKCo",
  "key30": "2MPZtpxUagqhHFebSJmv7ctencPCduehwGuAFeR3fW5mSh74AquBFpGwX4wBU9irVMr3PoocaTuXha4SakCfRDvb"
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
