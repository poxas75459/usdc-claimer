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
    "DDsn1zwbTv6fUrJjRrP6viukcp89JGDJkNWsorvaucmqiFihTrBvPUPfsFRKn397KWhCWgXFDkHuVb2voHmtHqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j3XPoqL7QZRHB3tt4Dw4gLsChLD6TBcCSzAVWERkcKzQVUN8j1Bp5P2dtTNBYYUG22XPtma4AHNsfKH1WkUfkLm",
  "key1": "5xXwfkf2evihCQWzt4MBf6hywGDJFTj8PQd2srCrBYED7U5pajA1GoUkZGP7axZhwr94ropVveU8XU2yC7SG7vu4",
  "key2": "4JqDkNeVCGimAKZnzYw5NSuTMfFeBNibY1oCaeAbr3BeaCAV9qqP3ia33NRZaAAtX38jsTgSak2qHZBPQAb5jQWY",
  "key3": "2y4UfJFgKpPNBDoXPzWz5tDcvgqL3z8tfWqzaK4RkCWUECwbPeXjpocXZJebrZuzyWJGGoo9YYe4S18rix5wYaf2",
  "key4": "22ES6oNyfp1MMjJBmUixsJivqmBKDtL3yH35aBZyd5D8u9F8iHYHvK6jAeqQSNA3qbXwEi1r7oA2hJj3Zq9jcG6n",
  "key5": "2T11fkwyurKM1jivsXhpHtwS4tBCA7RDfJZvSjWqJzPzWxbzc67D8o5j1XtJPQ1p5GbFZG8aYsYHLG6BD19Ba2gZ",
  "key6": "3KqURstuA5iEGjMTbWJgqPUPbaipUy19WYZiffko3CmVJ3DCkDUEr8ZPdAX1PPZm59pxbAxaR7xCGp56zsKdSmCp",
  "key7": "4XKgirtnf1Fx9otm7kEDPJshAoPd7Ue2QZdkxiSSFgyhquDPT31DN8XnNCmB9WiA6zotfsvFpeU6iNHWBdGGaNGc",
  "key8": "AVmiPWQuz6cJTFrJKBWTYZQKXXijpL5tFTYiCnagAxBPAynNkBYwpg3np3RZNPaGR125yp9WZ9Ugpa3aNdT7WSz",
  "key9": "2QQBtAVyCmgC79SGst7MfGpXX9o4bfVXLVFfu7UrzVYbD1fpNdJsuEgUhRoZUPLFgDMjoQDsB7Ewr33s2o7MHVdd",
  "key10": "4cavrr1f5NqtqPXFexdUo9yWmtfiaProJLA45LNg2CuTH4nsK7WNQTtsvvZWqf5xEGojWoee7BxLcEZgHjbuqqHg",
  "key11": "5dtmqti4cdXQinK7ADB8dGv5N8vspWMYxZSLzb59UrGgPL6xSCePBGHEkg2KY8ZNJGa2s3X8JKoF76evTiSkM3WT",
  "key12": "45Z6VumbLA3absD6aMyfV6xfxtudEqRDdiYrn3v1Dsn1isATYrpVVxWBzXw33WkGreX1gDYPTsup6r43WvkGL7Qv",
  "key13": "5zNoFdyqR82Q1suYss9QnLCT5kKeA9CR7SAUwybXGhoA5ZJBcRPVTV1ZwK6MuYZorcBPvM1X1ADWGFykJaCWs5yA",
  "key14": "4QVg1XZbNzvmBEAYmfvU8ZvDfGNcjeB6HKzwqQ7gKpANix9rzLL8ZNmXMNK9AxHvtZmR1C1w6sYcnax5sZzh1Swc",
  "key15": "3pGp28dMDJrqS2Fi1NwD1DSBmet1bsBEuVrqCXmNunNNzbhEoKV7TE7HjLSE3ui2XUS832sQ5a2UHSGckviohU55",
  "key16": "46W9Zad8q5VAkDoBh5hTwjaBBuwzPUkvxaNeKo9CX9Fp8ENCzLwVKHdRNaw4xJUTgkytmoBNDpUJTKh1FAuFrn2c",
  "key17": "2JpQ68UBRpvExcah4YbYfStBc4oeng1pWHkSdMEaeH75ivwC6DwwaGnsYG89fUq9J1d97M9M5j2jmStXMKNUGQ5f",
  "key18": "vMHgCwaPvVSvjfDzEbwUNRHfiVqTZdxS9bh3qxdX2CdNLpNQzrmXb5ugCJbzdiqBWV9TPwrGSpPFQifsptCCUcT",
  "key19": "3Y6vUKHgPm9xsn9snmmnzxD13FLs7PfJwknx1uS37dip7hCiwkh14xoCKCjq4gktSPzj7qxPM4usjeHAZbdX95h4",
  "key20": "4BXYgmgzA9PR49AvvT6ZLkpR6YDxXqZKp3zq3h3kRC8CQwdSNWkcN8SWDFXNzXfYjRPyC7dLkB2s27g7khRHhUBt",
  "key21": "2b3H1eLf3eXqBvzho2zn7zfpqztWF7RX91x9rEBm7DY3LJ1gGL5zjW1bHoDExB9VYJjMJH3tHtSEzjLasXGbaCkf",
  "key22": "28BWzjDq11UZJ1QQbJtdzA5NQewc2DSjhYAcaKoxvnenLnTVrQVCAhzDrN547iqiEdeVnNGP1kgdbHURM1ZCSsP4",
  "key23": "KVyshpDbyH6WuuVycnBmyMioBWHU6SnuuikYBURAZ6pWF1R81Qo5g1jYogcUEpoX2dw4owsxyHTiZZVAYipz1uS",
  "key24": "5YTQsna63xmC9g5wV9zeP3ywGhQbmN8bFZuttgfHbsceUBG17dw5B1i58LwBjh5gtGkRbYRwsMkz8FnLEc8Jj9kH",
  "key25": "51GC1B5Qn79Czewr8qREWHKvvjRRnroMEf9HD78Zc2KTuzqMQ4tN4caf8j8oQKRe8T6mHQhNF4A3hqNVZUTenWYZ",
  "key26": "25eHRacrvKCxNB7AGh22LV2mfe2Z4rbhhByVds9eY3wVsr5ArKmeUpj1QDBfv64eCRuj9sUMqshQ1XyxFkQweRyK",
  "key27": "5hmm2sgG92Eqy1KkznPibdyNVfcSgpQMnrXe3hqjF97HmgiXXgHoFYj1TYqrijQPMNPd5PcauEE4zcuKXXHBQ1oM",
  "key28": "5Pxufw5ZjMisCQqTfViGyiPGESgz266ZFGBo2tzjWDo3c3AUCkE7cgCciza72PUfKMjviWqXCpvYv8RdvVYJnVxc",
  "key29": "ZU8WNxVvkRV5bFRWSiG2BZW3R6gVQRUdHYe9NebiVuViZJQmiC5zQNekop7tnA9htND1PCKsMj6qpPKbJwTvKm9",
  "key30": "5e9acZHh1KQ8JeQ85o7jBKysP2i9ghKpK9uWGaFWQQpmTsVciX1GbF44JRuHQbdNGJ6bo7K4mKzXFWQPYDwx6Kd8",
  "key31": "37HKjg7gxbEauk9wVSFdXmmG9mLh4vWd1fpxrPwibE3TGPMUuE6PDrLKfAXkfLC617f7K3xrYJAFSpvM1dmgUKCk",
  "key32": "3DuUZWBFwv44NcjRawtBdMV149FuPaYywqBL4SYmypLYGDvxKxj7yhU8WfTHWWNNh1pevd1huEK3RB8gVE3cutwW",
  "key33": "Uv188CWdMLZ4Wnpka8pGmNLD1GkXJiifNUBvm26D2Kyq7pUBVSc6AEfucGkQfgRXyekWcV4HLPUn7ZJcDq5VdZp",
  "key34": "4a6b2tKrLNQtRXJuCn3rnYJwiXaXGi4qV5eWVfYiwZKP2MVtYEj4AFSDC2yQseyQ2sjMHp1586sopseQFGHsNQwD",
  "key35": "4gzWDdhfuhrcgiE4ZP3nAx5xj61JPfbv93D2WP9rpwJpLAkntDQCJbr95em2YQstYrhb92n2Wzv3qeNat8r2HtFy",
  "key36": "2mrFZ83vAAyv7a5g9qMkffiwngEDEJw5BJdsk2T3yqKMP1YiiQ7PGHrSgXWUTtha6nuZDvkAuAPsV7Fewg3Xh9NQ",
  "key37": "3nMfiu92zLbM4Ha6PvFSYLJtRs8uNu5vptMnFwuxuU2YZ6viPvgSr4M86KZ1ZC7NupnzCZwRH8spVzYMg2mVdTZm",
  "key38": "qtT3CkkVQk7KU9h9tb2XJQJUArce9m7mMnHDzaTa5mfuBiiMY7QYhUe3jvDLpBydi7qMhmnZ3XxPfj6me7ovSx7",
  "key39": "3Y5N8PSdutPH4w1a8mzWFVx2XgomPcMoLBS9yHRpKYLdHe2qWPTYKphVTLnG8UmiWMhqLdQKhTui1Mtb3PNiweXC",
  "key40": "2ZcPGjuyRqGiKaorudovwijxMH1yGNjTPNB1AptWZJtcvDoaYmhuiph252F8QC1ewHgAw2iHSyCZoi5quguDfXAJ",
  "key41": "2vt3Zt8UiExoKCPHVpAEsdBTKu9j6GDrvCT4kYQhPQaLjYv2cRPv3fyxTjwYNYs7W9FBmHvYRYjn8WTS5bAkAci2",
  "key42": "4NzKUA5pCBhVzcpSpjnZdUY6h4jietzdCwjdkocWCCcoSmY1Duyz6ygjJQna4vQArZHDT5sFkGUZtvxZGWdt2rAk",
  "key43": "5rBJpTALsRxPEfTXRQs6xHouBdk1yVqqBK8ee5L72U3xTJ4SRpxLGsTfmck3S6w3RMy5zQ5S4FDi75inHqZngvdR",
  "key44": "2qXGJiZL25FAq7Kw5Erqzey8YB4iV3LhGBro6AqHrTxDZWk5MdGUzqMfPnD5ZiWEqUcMQCaHqLQoMwBeLeBUNyFS",
  "key45": "66kWCN1uELE2i23tuCZtS6wYowbUdqdgPfUYJoevTVwfz2rrzgfEFaeToJygH7tkGEwZXw6pR8dR2qxUdPEGWgu2",
  "key46": "52QKqXmGioZkNMAxD39qXe3sCNZC7arcvMkFu9R9J7ppsHjEwt4cdMRqFrW67vvijtQnCeda3bunXzNSoqqWALgr",
  "key47": "55aKcfaHA6tikwbu92mDLFpMbLU9r3EszfKfnvDUVaJ8SZKETNeWxvQroJTndueKrruADedVUoU1Mj5jENwzNrci",
  "key48": "3Gv98KFvnkq7FJcuci9Z6zY7jRXLTXdckt2aWrr3JSL7yRTG3wvkSPNF6NNNispmuFfF5jQZbGZksvjZAnKWCtHZ"
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
