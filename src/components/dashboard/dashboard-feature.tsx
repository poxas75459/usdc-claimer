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
    "5XrAz2snyXi61yQJ4NRjrfsFZAJSv6qotqAq633kasgMLedYv6YkoXSWiWcdAxUBpJAK1sEe598xbbmjnhcarDdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aopA9wpAqvAttaifYP3Vp7Q4BjjHe6ZuGnSgUxPNwuiBkjvcabcX3dmDdzSZnsrA6maSGhUMqS2tqCDApTb7F6j",
  "key1": "2hpVG56U9aNiXd9MYq7n43YEQRuH8snUHjKophCibbZhzwTt3AapdKoikwY7fBmSgaDGzR4qh5f4FazFHfCRQAfw",
  "key2": "2LPuGCyKAYeErXcun5RweYFL5jimzWMBb5Fqw7fUyvFWQNEn4nbqv7y6fv4eSmeyaCb5U6C31r2N9vcXeb7PB3wp",
  "key3": "3X8YLzbVR8vJyNk4qDjsHv9YwooxECcjsPfV2D83MNioTN4KVUthnENajHPu6mjEtetANEdz7RnUo8MRLhCfk1zm",
  "key4": "fB8drWd5PSmqbNKmsy8mW4iMZ1qppbKnMv7txkmnfRXAgnQkRwG9b8Xo18tZg3tEYPQhtHPexki7F5Wk1WLhJ5B",
  "key5": "2ewZHXL1p8Pvagw2y7N6vgcuEMN6a3tg8gRwr35NC29gRiGXKDy1SDrRWizGKutCCQev2neFhXicH5rDP1vRpbb4",
  "key6": "4GF7FeDTJnttXW7GAfvbuCosum68tLM4La4AZbPu3EJtMJ5W7Um7ELrixaoeo6rHUWbrnScNiKi3844Ko2MSvLf6",
  "key7": "4ZhNan6rSJNL7K12ijkdWwt1WkAKZ1mU9SV9LwMqSmgGtQnpvEd7DKoSuKJSb1FDBEeMATiqJYQ7U1vDYDMtKe9j",
  "key8": "2c27HUVM2gsTSgsQmtKhLDMwvZiKQcwTNCfBXnGxPy1QfEGkRmEDp4sFMDkCnEskaviSAGLokKh8yRKTFTC11CWx",
  "key9": "4V5TeaMFddYDRSwekrdPUeUr7ws3XkLqMNDMQrjC9gT2x4sjVQKvJzLe3Ukaf4Hw2FSan5TBHB7cgnJnxGT7oXkk",
  "key10": "8BNAXV689JChJSTNcV5qgdfcms3RpfJ1tbhRXiSmL6jum1RxZqMMbqTf68iGnXin3ZFD2e3TQPybQ3zHyyh6dpy",
  "key11": "5J4dLaDZhFhLT4neXMvJwF7AkR7ujAkHSZMhazwnndt9RaAQ89ArFSwNRFjBsoECfE4ttDEzL1PDn5uTmeK4Ym5A",
  "key12": "5vj62ePRsyShUsc5xUDxTQ7HQoiSFQ1D3LxaVSzkWxT7FmWh9w4Gu4FS7M6gjXBsxyfGzgTb56fiqieyKmwWW48Z",
  "key13": "2q6mzsk671N6qwFaz7CeavWRP9uVauVjGMXBbKa26KroTu4yzU8wDEeQXWM5ib5JjRuSfiQg52o4KBZC5jreRCuy",
  "key14": "34exgQA5WENFysUSKt8fzBUuTNAwBBheLDpQ3M39FmXokLLwTnDo3VDWsKvvodTybcDcMFvtbkMvhTp3rzSwnxJM",
  "key15": "2YFSyv5pC31UPhZ9R7X7rU654nxRaRHSm8CsmefNxsR5KvGr8RURPKNmFz946TbaS4C1Fy1xmdzSsQ3GxDNHHEMs",
  "key16": "51632Y4Sb64ZHXUaw1WLvbrsygVymQqE9sKjUTe4iDjcMKEaVi7nnLbi7nkeRsDwos56XxjUx62XP11KJsJ7twK2",
  "key17": "4nXztssmc47RqcE5rWRg5AtNNkHyG9EPKiS7D9uAtLR5GWBXZwLkGhV4wd5fMz975p1h1p4hpEsHeZiSpKuS5k2s",
  "key18": "vEetFssSNuw8j8fvxyZxvrFjQsncirzoWCtcnNRnyW1tfjbwWd3LajpniZgRmHMJLJZny8mYjQUvVNjrAyYnNZF",
  "key19": "3iMguFLC7TjaT8zdMzfEEgo6Na7CqU3bBNrvmyEWtiYdzwZswuThwfZN4QLPVeNVRsp2VpknU6pExpVttdTZgxzE",
  "key20": "3GpieHm4spErRv93AFKwM5krUy3VWZStpzKj1fW9SgGhgAWgtCTycyaNEW6dQhkWesSBUC8vmh5yWCrSUqBaXXqn",
  "key21": "5n7xhswxsydBPfhyRyjaJFYohXDPBKJaewnvF4yky8y6FTbRvyZe7397pq2Fv6T5ET2ttDKsU1pYBLrv77H4FDqH",
  "key22": "2RC8XTQnQmaXL8vbLnGVP2yZC2oyJJ5JrBFA4nW3y1s39asC7HGw5FWDEgoUkTzr9z6ajGEiwWAMbcGLHsXzi6GW",
  "key23": "5GJHqHZCUd2sfgw7BDcz3KN4TdiEXnn7eM2yAMk2ga8NUHBYsLQzfoago5CfMi5nLbEaCXu8jtpH7jonnWsQtxDa",
  "key24": "cpcrN9LxbZdsydywX5nV1GT1dwMJFAHa7mXXGNiBvAuXU9DXH3NwSZ2n8AmAFU3FCcapboP4YQynyrJMzQL4XhM",
  "key25": "2iCyx5epoQa9WP5YxjHdY5K7QG1JWzDJFNGokLzwJtoscUaeiP8WcZeVW3ugC4E3niNiuw7KYVQwoa7ZxZJpnMs6",
  "key26": "4o2uycC1G1pDJaEjrX4ZFogXoxijBkXYWkpG9dF6MN2r24pdB73YR2PEoLGEHQ31cLhGZuTasXAmgyPu1zA2gLJ5",
  "key27": "3xtR7ejpLtGajr4uYbx6fuBtXPiNkf7BhYXyWMW18DCGddgoRzV1FnbNQV9G9vMxM4ghqXDJxJSQZEX9RJUMXoGH",
  "key28": "3EgUXb7FRkSQqaNkFD1iiUUmYRjjK5npEGVPAQoo2YTkRUZQAS2ejNyBYhdAa7kDeX844RuaFaMHK7dDxQBKtt1R",
  "key29": "2Nvet4Qea1gCtszubTguYwGmxSTGyrNX7pNz56b7kuCiaqw4Z6xWE2CQDC2reN6BTYpXHNuWn1qcasBCRchE7vBb",
  "key30": "2HwyjRmP3tbipxacE1enX2oZR4XeRHHGTFsPavZotBhw5HL66UKCXE29PNzN8LvYYehWSaUQCXHXu5tpyUhSDz66",
  "key31": "5KrsEMo5txXkgUb8NMxuPt3uD1pqxDsfBQmY4rBtbSnDKwqrQTyREsFJdGhjQZCKJwr3rr755wWH1eg26dFJdvfq",
  "key32": "4WSQzrcjKMsWDpZPTw4xQJtNfy1A5PxmBASyjhqGBR6rGvhyv8XdgDfwS4aW3AhQRGVkcHwCYR2K9RBcMpPBn6V8",
  "key33": "3s9aobKsMYjKhA1dhMZ2CNYctL2h8gGfiUiq31QYJd68DgZXmHPmr4E872ikJioLtpDvFiPEYJCpQWPooA9qieH9",
  "key34": "5BhiRyRR7ErmHiX3fAy8Emv8QbLvLZK5FU3ucLKqpfLaV9j16kRPKdNodqY89Nmw3NSPa4vDhp54rtbLDMJMefUt",
  "key35": "bdBD63vqywz5bnGRs6KLe5qBpWuTTUnkWyLdgMtPGPwCtKJkxDfF1URn9diy3JnN82pUNkCNsvuTtjwMyXa3Uwi"
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
