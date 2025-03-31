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
    "5Z2xH6TgpqQot7FzG2Sdaj1CHZgH5NMgbuHuQRLe5W9D9NqUsBr8gb7t4tCDSpmB3vKGpbtkJEL6TbUerJLcHzWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CUNSEoPRKg4Cu4fmpBQ6jMbYio1JpDTpZJs2ByPzZpC5zU5BNUFAAsuKu5bPZTHXAEsDp4jqjgKpLZC5aZruLGg",
  "key1": "295jHBuRZP3GaVbNQPUkAjfoeFVhxS3AvXG7YC23Ehauri9Py1dhoRAafamk6sCKcN92kD9cJPVLvRBcAYWGxmnW",
  "key2": "PQLtddWFDGBvSuXyLkX6AKSfSHZqKqG1Bim3zB39pnm1QxaANiHhrTsJFAgELDEV5YdSxvveoRBZGiDhUTPSBcR",
  "key3": "2mrdMGttwMyq5xwPo5KeexWwQKtJ3pLixgUE322CEhYGiSUUF7rnB7W5MJWt8nna49MqYjyT888x8jv9zuFphCF3",
  "key4": "HR5oJ53KLLG2yxnGJwGcXvnoNNzh4ZkRt6F3oW2nHczC8g1zwYumQxzwuyppGVCXVJ3utH4AbKc3f18346MKAUr",
  "key5": "62WHyNUDyjc52kwkbzyP9wVUNRkY8jRrP5ogGXjD4XKwshgH3TaS2fhaWeFGpiC3arnnpz2c6nGVPiaxmKxDVBf",
  "key6": "2oaQctLYF7y5TGRC8gDkbDzaYZgyJ2HhXd5h3yuJFTW3muWkzKTxp3kHubUh7cjW3YK9tKZdoyzWQR5shGED9EEB",
  "key7": "21Wj3e3exk2vM3jX5NPA1DhoRKfNTM58NchyrsHgjC4T13oJ32RnDGryLxGZwFDFTL4gve2B7R74XHVonYCXsMkn",
  "key8": "2cGTmpV7ndozoJaQLwNzobUtyMo8cq5UAyG1NxSSR9iemh5WTikYh7RF9yua4k9r8pkaa6nJmHr7pscsMkC9QvAL",
  "key9": "FZrgoehqQ1ppDXYpECMAYYoquwA67smcs2ZafMmP4ptRFWuQ2UoszbACZ3sRyfRnuWDKu4NFsgMSdFcpLNYQ73w",
  "key10": "kkdxbkz5UJ2nm3fw4SMZgZwzAEctmW4UL3cERQCaAXynu8qvDvCxh1wq28ggAobozzTrqkHQrgg81WC4kn4fPiH",
  "key11": "32vfY3Cfx6DMV4sNUEEBUTjJz8Go7ELHmSLNofgMqvVXqatW1R4N2bZvPgMLcuA4fTzQyzcQH7yVif1Uf9Gk2LQP",
  "key12": "4wJV2KCtF2YdPJbhoCQWdvB6fDyetsbisqsMRzmXkyFGoaECXeVBM5wEywe5ksgLHKVjTSah6dwr8ZHcPUUsCvPw",
  "key13": "4uQMSkgqfcofYoX1UYFYATPfkQdoCTLQhcrvsyVWEyJmzPS3Ux37krykUBp3HVcdNVme2RDzC1pDCfVPKacrvn5z",
  "key14": "3Ktw7cZ7Qi94aaxzemJp8a7ysvadNgbS4KgH7jSb8YZjXejnUcDL9StRKJhK1iEpWGXrdrdT4RuyEHCuviHDTmyq",
  "key15": "3PGN3KZHaxyGGgdSvksbQifmHhJn2V4zXTrTs9WEXZX1W51aqEQJi3KQhyJLFXKjJMpADtXif1Fm4EmVMxvBrnpM",
  "key16": "t7gbyF4nf45H5Ta71HA3neAKR6QezUnBJZqmPEJWSknxCfCX36CsJtMaDSLFxK8at4y1RsoXbwzY4CocCt3PD9e",
  "key17": "2mV41vmvE79zynMRtWnYnrqNZUJcz5KomeRFcnf1eitNvHUV73LHgG686VpXrnWd3CB6gW5Eoc8g1xWqWWvGtht3",
  "key18": "cmUwtjHA4FsULd7b2hiej51Q2m8Vmx5frgYjvFMmwmjvKbGrbX5fsDXzeUJcGotLUxS43SQbucJPerBVFYVJGbH",
  "key19": "4hLRcrG1cmzAuyqvA7MampYyiTHCNrxzCxXVqYWCZd8TgJXytLfCX5TkDzcGDtGXSjn3eiCZgYp8UCyY1C8SzEoT",
  "key20": "bcX2fondbWkrPHkyLjtxvUTCKGnAu4naZRnvvpoCbfEAdyLwcnswKGtPwcc5KCvq25p6HpMT4NH9FQ4tzc81ADm",
  "key21": "PCWE4wmcxfahLUq46sGdTU1Zy1i4wzDZE3wiFr1RQcBKujsP9LK6BA7SuKW4MeXwhRQZfanvwqVgkQgoEW6qaXF",
  "key22": "3bdLuob8LkTrBm1m2gav7Tmkm4dmBHTLseYFAnpb1y4yXetKK6wbdy4CuUJx5R8ARr9PRnEqonXRV8ncThxkX76u",
  "key23": "3bu9vdDbZumQXSYfeRGE2BT1u8G93kaEkvZDypC4ybGdV7Vsccs2uVuhXckdjzjn6Aq3fLWvw5nWodJuH6VV58XK",
  "key24": "cGLqZ9baFLymPXX6PzAjPSWkFnGR2iq1cSBUSd6PK1QbK3mznZnWJghThHTSmWXvP7fRxrWaRwSQp8JJEM9XYWf",
  "key25": "4KQyAV3S7LD1RDg5uDYYVMTwiqFqvxcqmTPMMV3mSRNCGS7zyhx4EobDVB67PSBV6GvHktt8p2RRbjrNtqChFZ6E",
  "key26": "63NffKFbv45AHvqvJ8485u4T243XnNsQ8RoNtcPyztte3NHn7yUZepKweTBdiPgLnHznvuoJzj41qUtKbDDZfajE",
  "key27": "22Q9yEvR3J71MSCArXtha3ucH1gyBFSJ71pwwcB6mPEHZiuELcbRCA9fqZtGwKrTLPYDtM3XBGoTQEuacom2AGbr",
  "key28": "32AEKioQmS8GQjs2iUmgCn5dWsp8K9JcPWAXdm5j7y2q9NG6yPro16f3v68fwKrPc89bq6BB8Rc5NkMWjxK5sFz1",
  "key29": "AmM2EjbnCxKULbcbyy8H3ZwEP9pxwrnK94c7fbexE5BDNywWuxE2td9Xir7gSvWDeg8iXdUNA5MNMsAqeYdKW41",
  "key30": "5KEiwZfKaTi8zpFqQNBVfyDEsKcVzpc6njFDzWTz5m2Rg4LWvWPsBe52FYBMNisuSuk2uNRQxWWw27B7XwPceMVM"
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
