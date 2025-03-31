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
    "3zmzoSCASjnk9VF1f58R3fxzuGyXeN596LDH46dDtcFB6YdfuCKi8JNWXPgA8JyWKoWQfSzeAncdFvnFAXJ3M7MV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JMomaWGoC5EfSJuPzsG5eFc7kGCpQ7sBsN6GXsXPi2Jy2q9UKfbwXSENV5NDS9xYrZuAMHJuWYGMMucZVvihAJw",
  "key1": "4tQLiJb5Ni2tZND5C8WvZc2qcCo1HhPv7rBdjc92vYTDBpaFcMXzFwyBFF2o891zVpr8FJw5S8Sh3LE3w8SZNisd",
  "key2": "3VU4b1S1V7f81gDdFufyEESKV2eXaWSBhqu4YANjrtHTFenFJpaVppFBKvYheuvKX4U2S3tJd4oUW1VtCoum8PmG",
  "key3": "236JXNDcLUVSU1EFU9gVNvVq5Qs5ZsgrY41DFDmrhuptbicsXNvhzz8hXKeP1vr2giMs7Ni8kztDUPyfuorAaTg9",
  "key4": "3QofmLHWGkSC9zQ4PhTaKNr3in9cjcwpMaVeSd8UHHcA33jWYiS3UTBYbEQbSvx3qWPR5Pn7n3NGQbJKci5H6N8u",
  "key5": "39bFg8cZZNNsDodsPJMbR3NK6HNsacMgndEcCoZnarUC3akiXnP9b3sG5aMBwyLbgBUwKT8FhZ3yScQKQyGE32Rk",
  "key6": "2tVuX9vWNyvQZUYEGYJm7i6osyaS4qcYCLuA2tGMe2tH5h2ayVFeCbZysf96Ag3ncKeL59PmgDshwEQe4nTcYitv",
  "key7": "3gAYASXH6FkjqAz8XCWWD1zqpnjkBGbYhi9weJWoYcCJPFsU5J5jgwZx4dVD1yrkToUPd3EUdjsyjxDV5BQD1i4K",
  "key8": "aj6Uq6eiiuDaamitARz1tZBy3ockoVuwfTMDp4MJ6fAqXaBFwPh5QswhFuFcPqVkJ2KVidjmEKkdvbrzzMstHat",
  "key9": "9k4BMhbFUyVJtvY4X1mLGV2FR94UoaEkKgdT8zC9htHn1VCLU3PY2NPnGeKLZmaTtsVYMNceXrqQbRVJHM5mKrC",
  "key10": "5oGVSNf8gVCAFDqZsmyFsmMyq56sJwC6711EQEV2TQ3XeDkwAQpWA6dB4cbLNEhJRCk2LJkkTvHWTMUcPbBny4Vq",
  "key11": "5BZyhCfS2vqKdvYrAfzUxgvQkqoKm6d4LvwqKjhcpX9LFiB3MDzCd8RGWyCto9Ri2VvLndxiRDw3T7gBgNxvfKtB",
  "key12": "5ZvnJNNxAe2aQa2MfWaJgq1RNm7rafrnbkGe2FGQ3cbzMP9D7UqhrkvTzLhVZEL9kMwxcigrETreavxFUikj9VK1",
  "key13": "5JQ7qEV4FwrMDQfmtWPqqdJkQzzR4W2ADRdWkf5jTV5XeaCGStE4kceJqSZ2g9hfbRgarikJ1nFApiMfHUiKN1po",
  "key14": "3nqUoDGrumye8bQVbeh8nuxn8RhZdARvRLG2ATkKzDeNzVnYkAFgzt2yYwUyh1cUVDdGFdUj2Tci9YsbeoYFUew7",
  "key15": "5d5npbSgHvSKSrLZWZPGuacTcns91JHnUu7QkrNi1bXReAo7sVj3fjwMD9e7B739eT2CNLjBoKpsYLupVsWiBrrw",
  "key16": "3jop9YfrTEaooqmU8FkD3bviPrSZTHXoewkUH3CrmWyC3VbMn3ptcTCVRbEz7JTa9h9BHk87SFbaCbDpRmgPAGrq",
  "key17": "48QE9hwTa2riP7rwcxZjJETd8P7ysHXa4fjwtE3jBiNH75gGdf836GyACYqwTHKW3vGDCpxo88vCtJHxDK1XxCdg",
  "key18": "5cpJjYtwiVFLbPWWVVb8Hdcz4jxJ1TkVC5S9sbeAyQgjTxvQL2kfT9w8wRKQP9aWnYZcrCzB8wnTHEczRHDi6ysB",
  "key19": "21mSFnDgJFCTx2WSzmhBEkZREGiswJGmeFnJZCXUYeMTEFWaSStQ2GJz9n3aCyDLyFvt8gGEXH6gpWQNHUXYx8Cu",
  "key20": "2d8A5DPWX9WmQBuDhEWnLSNi1ka5fuieRtY1Y6dPUGb5JfPkDZ7vsoEbkdAyzx7RKa4K6x8rqnMQhCL4vSHKT8K3",
  "key21": "2YSiWAryHiMZ3SwQhdVB8C4fhKq7SxWNPpyziKgbSh5ahQdCrJpU74mjvJqys9JpbKXUtgWNDa6dzY968dvKyrY1",
  "key22": "4JjHEyKNsidaNNzbsyZX8ZcPm21nUUNKU95DsgdEqXNa2LYwzMUVigBtZUSmUYwNjd3oy16yLeKy96LqKTgRqgsd",
  "key23": "5Ev1nSWCx3imC6dyeYe7f66Npk87RfZkeXmzxHEGESpa3KyGJt4FW1ND1iamNSeJR32auvCu93MeKtJfFzJCei2S",
  "key24": "2PKuyFbr7siVEVP8fhJyEjjRc1xLVDboCncH1FB6vCy9mr2K8vxN5Va7ZNpX1T7ijCdtNCo3oAj929vpTHr7C2yM",
  "key25": "2dj9CS2igZHRqZY2iBQJG8gWkMgpakNSzjfX7Fa3SV4qhWuthe9z3UQ7N8R42cXPwYT6s2UQEYqmbcEqzwezin15",
  "key26": "2zxpEbLvtYUcez4fDyjstijSYwNqPdUTddYaQMfBaSdTJGdAdCLQHTyE43Yv5AncfJeksKbAaqCoqb9BvJiBzMHq",
  "key27": "3NQGKfWx3Z9Ga7CpmvpVUHiRX7bVbQjb2rKaa7mVbAwGWj3DtHoiEJYpuy2M8YrGEgzWDqA7hiBLx61SE3DYRW7H",
  "key28": "5XMazz68g5EVWyCFaVhivo8dso4gZT181vXiBkM6Mm5CXF7QWVAkpe36385GNx7NHqcBPxSSL1f6hdntvq85LC6C",
  "key29": "5Foj6rZiXKNonq2w1WLoBNGg56T5vXBGgZ4FzRsFX5tx5mFEZeE8rrdcgSMLuTk9Su8TjLRwD522GWC5GMQQCVbb"
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
