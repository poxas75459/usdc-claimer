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
    "4zyp6N6vmAK1mczdEQMPEgVbHmxF5MbXK7tb61zrZCKYT9ERLymgbS4tMWbszDQ9komZBUB9cch32RAJDfCvF3AP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nNR2AXT6mKMLCgzQvtUYm944ftSWzzsrcUU4zrozQKRCmtwwp9QtKui6kfMPdocUCdC9udaPvBSzdxXEwk28YAt",
  "key1": "mTdkV9BCHMyYyrerjyFsMrkZsL88QczJaoAmDvtotwLEcZFkUVDGSmCVsQm8G8S3BTznpaMsdcoJ5kKyHycM8MV",
  "key2": "2x8ZJBrtjvRrA8M4NZ6bP58Dr1QDN51cJ2cZxfQTAge8Zt8oyPuTmfwbsK1YR9pYiTmYrXmStxBoWN614KzSLNoc",
  "key3": "4YVbybr8eaGPrqT4vwxscrV4ud6cbWqDJ4TDVDECvR1MdZCSvg4vSjQdc7zyrpwgmVTbaRRp8vvwAC8rSnbcWF3A",
  "key4": "JWNsphC8wjRaRQH5uz9Xg4YzAQ5o1PwHkujTcQBVoiLhBDdwEXcTSKGXcMqSrfzYBuYuopvgMK5WvSCFFPwyfmB",
  "key5": "4DSh4AEFEkAatNrvGnLN5varYu8VRbgSPsVWNijHd7LkybprcdmoFYUTGBuJ7moXERa6Yk8EFKN6G8EHQZnoCNne",
  "key6": "4Xj6mBy1LymMrmCfqA7kSCE6pdAtsg29Pe8TAFboBHyPZYpv7xJ3qMHpFuYZ5scrY6Noyo5ecu9uoU6i2Cn5AV4q",
  "key7": "2QoFgDUGMjE7VtTpYLRACiuoUFRDjWg3hW22kw2dByhYYk5zQ9GPiiwYpxEW47x7GZT9CDnP4Y4wb88QWvDZZnw1",
  "key8": "4pctvvJuwNGA8ckMvZgtD3BUfV73GmzMA9m5waXfT3fkUiss1dfCAnX5FMqipFauyEV5eHbac7ARfzPhfuXWMFD4",
  "key9": "33EmxLdSkjJ9mbLUNjZmEBnzeLRSLC1X1GDvzXADP8gH8eURrDo3mRG5Ts7Nocarj61LAmwPL9sQSkmhuqVEBan3",
  "key10": "MXs13Gg6BdsFFhDe411tTJFUSUjrQWofJk4CRrixVxxfNx6gpHnC7VchTH8tQ9mQ9oQKhWt1ypZcAbp3CzEswMc",
  "key11": "3ueH2zAJAhecbKTGnhNbhmwmzcty4QNf1z1qzKWWMXoTKT7Cw8HueeNUU8HQ6PeoB76JAQVUQurS7EF2CoDx9LyD",
  "key12": "3ChHe6w5PuvMFSKn9tRuNJZE4M811GJzfAkTMArnUGHEBfJrxM3wUQo56Ezvzw93chsoRYwHQ1fYD6QeMt35Dt1p",
  "key13": "3aRWFctK1jxt9iD4rBGyGtXPf7sGekguHMCafksMW59weL3RciXmR6SUKRDzY356EdDqnrYwDQx5XQ7SrRQ2RD7Q",
  "key14": "3jKTQ8j89kF9FYBberzqeyAagfH64reZ8s5Wrokisa5BGqdLfzwLXFSS3u2qghUnh4iVtpCda2i8HFdi7DopNXQw",
  "key15": "4CYL5RXqQysGQ5Kqy3cjWsnjHUW1uPHXmwZmxGmmR3LFP5FgysyrCeKLeZLRbrHkZ3Mitf6fjGQ64Vgg6EfNkyiU",
  "key16": "64H4avGFqqBpEtmxeMQxktF32TNX3HfiFYeyvDHTuSqtaAsXgS7C3j3sqi1mRsw7KXiAvrReGRMm3fngRWD78mSH",
  "key17": "2EnpVbupdZhBUJYj3qDRvVbQBsf1N9hDAvcHfGVBKC6Fu8kkHz3Vterp9G5pWLaYmcWMJNubSY67azM2jGYfkPkY",
  "key18": "24UssEfpnCESZ2yPJ66gXnnCK5ydRRZN6zx2pqw3JbtH2FAhmp7NaJ67fXYzyyDBJZ8i7EBUJxDVL26TpdWaxE2y",
  "key19": "LGeV51GPRj9Tb6ybsxWuH7NB9HfMQk9U9FkkM1dfZW7ECPB6pdPVZBEgdxTbLdPTsw3C926RhEQQmB16qA9mwrm",
  "key20": "2QUU6pWwjNa7ghz2jGHYCH4oWudYYnTnvd62N3PETCMC8GSq3LGzUuwyEokhNSemd4WxJKN7BodV3oCY18B47x6B",
  "key21": "2AwkfnYm6qKFPseWvUoM8qGxxR8UR3Gr94eyvVAqCoXne794M15kRonVAyudE3apZzGNzLL8pTagqT9fezRuktRT",
  "key22": "4JpfgwSeaUSsUtqMzpNZDSjTy9Qw7zfHRikkvgp5AWpCmQugH2qJAVk5Hby5X8QDaxVjWw569o8tjHsdz8R3H5nr",
  "key23": "LDZgxikB4WBC7NgF5PhLAzRqrqPmzYyBvQEbsvuHSwtZT5Ku7TrCuaTDp197HSgbJSxRBCrGJdYzawsSQiMxyrF",
  "key24": "5mXsqnexWVgq2u8bDUHCvAzVrTHb27yeqGPSn8vQ21caHVhTLMjGaeLnWLou71TXDaKHAVYhN3oTiX57Q9AnHiMk",
  "key25": "3ZyCnKY72AaFDw9KnQho5WDkLWAuoEJkCR8cHKUaxKvCD142xAwJvmWfj2yXM8VFo6Y2oheassdLUrMXfRpgk7Jn",
  "key26": "3YGercUkLAeY2WSd37en4QoTnJuZsGfhpMr57c4BKobKQQT91mWDYYsDCA6UTxxvr3FgjC1DB5Pa137czYmwU8p3",
  "key27": "3D6HWFwyWb2f3rDcFSqZYzkxiKBByqTna95ukZEahu2XvW5uwFGwzPc6d1ezrTQiJ4Fttec1Fikc52qUvJqAPB7y",
  "key28": "ELFjh9Lo9McGDbweS9cFZh9gDXquVVQcMGWwnzb6bHDjVHjr1aSNTRM1qvZrk3MGhF6cYdYwi3yujNPKmHfMKUN",
  "key29": "3w4C6GqgdhsfB4wMmqqYZYvQhtpJA1pUVgkXjvBraR72pc41rtRZVzV5goUpi4yEEZff4SJLZRDSHKCNRoGhpvqq",
  "key30": "2YwthDpT7FDepTfX3WRXiB1Pxdv1z8zdyQCtWE5YhGqnofWkN98Z3NdHueHys346mbHRttvW5JMRRRboGFvxjk5Z",
  "key31": "5taSyKKhxwWFzP4XPWD2HQ6qiaxtjNTznoBSjDviFffrJkoFmscVJd4beKnwGuEPq9m9Rd8QyYJwN1ALtK9cBQA7",
  "key32": "42ku6omUZPMYQNdKDCHyyniPrXQebYkvahUWtJJo6quVzGT1y8WShT1uwPfYmwwA2XtdxDL6RadiSDQUxxoJLLdo",
  "key33": "4EqwpriAYGzRh7zty2dD5Ex7xwbDcDHd12QRaQthC5bVwEV5e1e1yGnbmqHdG3C1HHsdUiW5sB1BVrnPYtSsbbKJ",
  "key34": "5fMfZUk6NRZHsyvyUXVP4wBh6wFcwyRvcmr8CQmzhUSSM9CHtvXWxgFthyY1u9UuQLoWj3xaK4ipNA9K7edbZBTX",
  "key35": "unezZquNnR2isUMRXxTqkEZEyqKWzkPc52tikvbybVyb4BXk9TzugPvcaxBcf1MtBPfibqciGvJSjGDkiK3e1K4",
  "key36": "4daP9sLNq6fFsrjtv7y9qur5YVX7uJw6bq6AtPMnVSMfGKYxX5Q9kT7Xd7bNqXARARBvtAnQ9fV6SekGyF6Ueg4U",
  "key37": "4eTez3C9qqzREzZrvX1PKxe7vrGEETwWqsebKHEjA8MGktg1L1edu1ufCjW9VBMVwe8wtNsoNLSSGCG1yNML2XjC"
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
